try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c6c07692-0210-4920-a3c1-7e534f1e1fa8", e._sentryDebugIdIdentifier = "sentry-dbid-c6c07692-0210-4920-a3c1-7e534f1e1fa8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [686, 1634, 6175, 8305], {
    21861: (e, a, s) => {
      s.d(a, {
        A: () => v,
        K: () => p
      });
      var t = s(95966);
      const n = (0, t.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, t.makeVar)(null)
        }),
        r = e => n(e),
        o = (0, t.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, t.makeVar)(!1)
        }),
        i = e => o(e),
        c = (0, t.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, t.makeVar)(!1)
        }),
        l = e => c(e),
        _ = (0, t.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, t.makeVar)((0, t.webSettingsReactive)()?.currentCharId)
        }),
        u = e => _(e),
        d = (0, t.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, t.makeVar)(null)
        }),
        m = e => d(e),
        p = (0, t.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, t.makeVar)(null)
        }),
        g = (0, t.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        h = e => g(e),
        k = (0, t.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, t.makeVar)(!1)
        }),
        f = e => k(e),
        b = (0, t.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, t.makeVar)(null)
        }),
        y = e => b(e),
        v = () => {
          const e = (0, t.useReactiveVar)(g),
            a = (0, t.useReactiveVar)(k),
            s = (0, t.useReactiveVar)(_),
            p = (0, t.useReactiveVar)(n),
            v = (0, t.useReactiveVar)(c),
            w = (0, t.useReactiveVar)(d);
          return {
            charactersNeeded: e,
            crewsNeeded: a,
            currentCharId: s,
            hasNotifications: v,
            navOpen: p,
            userData: (0, t.useReactiveVar)(b),
            selectedCharacterTuple: w,
            jumpScMenuFocus: (0, t.useReactiveVar)(o),
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
    32436: (e, a, s) => {
      s.d(a, {
        Ek: () => r,
        UN: () => n,
        b$: () => i,
        wk: () => o
      });
      var t = s(95966);
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
        o = (0, t.makeVar)({
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
          const e = (0, t.useState)(),
            a = (0, t.useMutateState)();
          return {
            state: e,
            toggleNavOpen: function() {
              let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              const {
                navOpen: t
              } = e;
              a({
                navOpen: null !== s ? s : !t
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
              let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              a({
                breadcrumb: {
                  ...e.breadcrumb,
                  links: s,
                  filter: t
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
              const s = "Rockstar Games";
              let t = e;
              e.endsWith(s) || (t = `${e} - ${s}`), document.title = t, a({
                title: t
              })
            },
            setError: function() {
              let {
                code: e,
                message: s
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              a({
                error: {
                  code: e,
                  message: s
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
            updateGameData: s => {
              let {
                base: t = null,
                navOpen: n = !1
              } = s;
              const r = {
                ...e.gameData
              };
              null !== t && (r.base = t.replace(/\/$/, "")), null !== n && (r.navOpen = n), a({
                gameData: r
              })
            }
          }
        }
    },
    33918: (e, a, s) => {
      s.d(a, {
        b: () => t.b$
      });
      var t = s(32436)
    },
    43885: (e, a, s) => {
      s.d(a, {
        A: () => i
      });
      var t = s(62229),
        n = s(9623),
        r = s(95966);
      var o = s(70954);
      const i = (0, r.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [s] = (0, t.useState)(""), i = (0, n.useNavigate)(), c = (0, r.useMutateState)();
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
            defaultValue: s,
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
    58720: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => l
      });
      var t = s(62229),
        n = s(81788),
        r = s(18444),
        o = s(43885);
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
      var c = s(70954);
      const l = e => {
        let {
          error: a,
          domain: s = ""
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
          d = (0, t.useRef)(null);
        return (0, t.useEffect)((() => {
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
          }), "clr" !== s && (0, c.jsx)(o.A, {})]
        })
      }
    },
    69466: (e, a, s) => {
      s.d(a, {
        A: () => c
      });
      var t = s(62229),
        n = s(87592),
        r = s(58720),
        o = s(70954);
      class i extends t.Component {
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
        return function(s) {
          return (0, o.jsx)(i, {
            header: a,
            children: (0, o.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    70344: (e, a, s) => {
      s.r(a), s.d(a, {
        GtmProvider: () => t.UN,
        RockstarUserProvider: () => t.iR,
        useGtmTrack: () => t.h,
        useRockstarUser: () => t.Wx,
        useRockstarUserState: () => n.A
      });
      var t = s(83098),
        n = s(21861)
    },
    83098: (e, a, s) => {
      s.d(a, {
        UN: () => _,
        iR: () => v,
        h: () => d,
        Wx: () => w
      });
      var t = s(62229),
        n = s(95966),
        r = s(70344),
        o = s(48539);
      const i = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var c = s(70954);
      const l = (0, n.setContextItem)({
          context: (0, t.createContext)(void 0),
          key: "gtmContext22"
        }),
        _ = e => {
          let {
            checkUser: a,
            children: s
          } = e;
          const _ = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [a, s] = (0, t.useState)([]), [c, l] = (0, t.useState)([]), [_, u] = (0, t.useState)(null), {
                data: d,
                loggedIn: m
              } = (0, r.useRockstarUser)(), {
                hasGtaPlus: p
              } = d ?? {}, g = (0, o.bn)(), h = (e, t) => {
                const r = [];
                e.forEach((e => {
                  if (-1 === a.indexOf(e)) {
                    const a = t ?? {};
                    (0, n.track)({
                      ...e,
                      ...a
                    }), r.push(e)
                  }
                })), s([...a, ...r])
              };
              (0, t.useEffect)((() => {
                if (d && null !== m) {
                  const e = k(d);
                  c.length && e && h(c, e), u(e)
                } else e || c.length && h(c)
              }), [d, m, c]), (0, t.useEffect)((() => {
                const e = c.filter((e => -1 === a.indexOf(e)));
                l(e)
              }), [a]);
              const k = e => {
                const a = [],
                  s = [],
                  t = [],
                  n = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [r, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === r) {
                      s.includes(o) || s.push(o), t.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || t.push(o);
                      const a = `${r}_${e.platform}`;
                      n.includes(a) || n.push(a)
                    }
                    a.includes(o) || a.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [s, t] = e;
                  n.push(`${s}_${t}`), a.includes(t) || a.push(t)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: m ?? !1,
                  gta_plus_active: !!m && Boolean(p),
                  platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: n.length ? n.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: s.length ? s.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: g
                }
              };
              return {
                track: e => {
                  const a = "boolean" == typeof m,
                    s = Boolean(d && _);
                  if (!a || !0 === m && !s) {
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
            u = (0, t.useMemo)((() => _), [_, a]);
          return (0, c.jsx)(l.Provider, {
            value: u,
            children: s
          })
        },
        u = {
          track: () => null
        },
        d = () => (0, t.useContext)(l) ?? u;
      var m = s(21861);
      var p = s(17330),
        g = s.n(p);
      var h = s(39445),
        k = s(53643);
      const f = e => {
          let {
            privateToken: a
          } = e;
          const {
            charactersNeeded: s,
            crewsNeeded: r,
            currentCharId: o
          } = (0, m.A)(), i = (0, n.useRockstarToken)(), [c, l] = (0, t.useState)(), [_] = (0, n.useRockstarTokenReactive)(), u = (0, n.useRockstarTokenPing)(), [d, p] = (0, t.useState)(), [f, b] = (0, t.useState)(!1), y = void 0 === d, [v, w] = (0, t.useState)(1);
          return (0, t.useEffect)((() => {
            "gtao" !== s || c?.characters?.gtao || (l({
              ...c,
              accountSynced: !1
            }), w((e => e + 1)))
          }), [s, c?.characters?.gtao]), (0, t.useEffect)((() => {
            r && !c?.crews && (l({
              ...c,
              accountSynced: !1
            }), w((e => e + 1)))
          }), [r, c?.crews]), (0, t.useEffect)((() => {
            0 === v && l({
              ...c,
              accountSynced: !0
            })
          }), [v]), (0, t.useEffect)((() => {
            a && _(a)
          }), [a]), (0, t.useEffect)((() => {
            "" !== i || u()
          }), [i]), (0, t.useEffect)((() => {
            if ("" === i) return;
            const e = !!i;
            if (e || f || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: a
                    } = e;
                    const {
                      gateway: s,
                      silentCheck: t
                    } = (0, n.getConfigForDomain)(), r = {
                      method: "POST",
                      body: `fingerprint=${await g().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(t, r);
                    if (200 !== o.status) return void a(!1);
                    const i = `${s}?code=${await o.json()}`,
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
                const s = (0, h.s)(a),
                  {
                    host: t
                  } = (0, n.getConfigForDomain)(),
                  r = parseInt(s.nameid),
                  o = s["scAuth.Nickname"],
                  i = "True" === (s?.["scAuth.IsAMinor"] ?? "True"),
                  c = new Date(s["scAuth.MemberSince"]),
                  l = new Date,
                  _ = (0, k.M)(l, c) < 12,
                  u = (new Date).getTime() / 1e3;
                return {
                  id: r,
                  nonExpiredToken: (s?.exp ?? 0) - u > 0,
                  avatar: s["scAuth.AvatarUrl"],
                  bearer_token_expired: s.exp > Date.now(),
                  isAMinor: i,
                  isNewAccount: _,
                  nickname: o,
                  profile_link: `https://${t}.rockstargames.com/member/${o}?id=${r}`
                }
              })({
                bearerToken: i
              });
              l({
                ...c,
                ...e
              })
            }
          }), [i, f]), (0, t.useEffect)((() => {
            (async () => {
              if (d && c && r && !c?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: a,
                    rockstarId: s
                  } = e;
                  const {
                    crews: t
                  } = await (0, n.coreScApiFetch)("crew/forMember", {
                    pingBearer: a,
                    query: {
                      userId: s
                    }
                  });
                  return t
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
          }), [c?.nickname, r, d]), (0, t.useEffect)((() => {
            (async () => {
              if (!d || !c || c?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: a
                } = e;
                const {
                  all: s
                } = await (0, n.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: a
                });
                return s
              })({
                pingBearer: u
              });
              l({
                ...c,
                gamesPlayed: e
              }), w((e => e - 1))
            })()
          }), [c?.nickname, d]), (0, t.useEffect)((() => {
            (async () => {
              if (d && c && "gtao" === s && !c?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: a
                } = await (async e => {
                  let {
                    pingBearer: a,
                    nickname: s,
                    rockstarId: t
                  } = e;
                  const r = [],
                    o = await (0, n.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: a
                    });
                  await (o?.platforms?.reduce((async (e, s) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(s)) return;
                    const t = await (0, n.coreScApiFetch)(`games/gtao/characters?platform=${s}`, {
                      pingBearer: a
                    });
                    t?.status && t?.result?.map((e => {
                      const {
                        stats: a
                      } = e, {
                        overview: t
                      } = a, {
                        rank: n
                      } = t;
                      if ("0" === n.value) return;
                      const o = ["ps4", "ps5"].includes(s) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return r.push({
                        ...e,
                        mugshotUrl: o,
                        platform: s
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: i,
                    accounts: c
                  } = await (0, n.coreScApiFetch)(`profile/getprofile?nickname=${s}&maxFriends=0`, {
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
                  if (_?.rockstarId !== t) return {
                    gtaoCharacters: r,
                    linkedAccounts: []
                  };
                  if (!r.length) return {
                    gtaoCharacters: r,
                    linkedAccounts: l.linkedAccounts
                  };
                  const d = s;
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
          }), [s, c?.nickname, d]), (0, t.useEffect)((() => {
            c?.id && c?.nonExpiredToken && (p(!0), (0, m.K)(c.id))
          }), [JSON.stringify(c)]), {
            data: c,
            loggedIn: d,
            loading: y
          }
        },
        b = {},
        y = (0, n.setContextItem)({
          context: (0, t.createContext)(b),
          key: "userContext"
        }),
        v = e => {
          let {
            children: a,
            privateToken: s
          } = e;
          const n = f({
              privateToken: s
            }),
            r = (0, t.useMemo)((() => ({
              ...n,
              privateToken: s,
              hasProvider: !0
            })), [n]);
          return (0, c.jsx)(y.Provider, {
            value: r,
            children: a
          })
        },
        w = () => (0, t.useContext)(y)
    },
    95159: (e, a, s) => {
      s(10790), s(75826), s(58533), s(79910), s(6637), s(19954), s(86099), s(85311), s(7250), s(83711), s(81016), s(38069), s(95303), s(32372), s(15674), s(35610), s(73783), s(29090), s(24165);
      var t = s(95966),
        n = s(40748),
        r = s(62229),
        o = s(9623),
        i = s(20074),
        c = s(41263),
        l = s(78618),
        _ = s(81788),
        u = s(2918),
        d = s(20270);
      const m = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg",
        p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg",
        g = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg";
      var h = s(52542),
        k = s(70954);
      let f = "rockstargames-sites-rockstargamesaf71a274ec221dd5496e00f0129fe119";
      const b = "nav-dropdown",
        y = e => {
          let {
            globalNavigationComponent: a,
            gamesMenuComponent: s,
            link: n,
            gaEvent: r,
            gaBreadCrumb: i
          } = e;
          const c = (0, o.useNavigate)(),
            {
              dispatch: l
            } = (0, t.useRockstarEventDispatcher)(),
            {
              track: _
            } = (0, u.useGtmTrack)(),
            d = a,
            m = s,
            p = `${n?.location?.domain}${n?.location?.path}`,
            g = i ? `${i} > ${n.gaText}` : n.gaText;
          if (!n.location && "nav-no-link" === n.type) {
            const e = e => {
              n.dataTestId && (_(((e, a, s, t) => ({
                event: e || "nav_click",
                link_url: "",
                text: s,
                element_placement: `Global Nav > ${t}`?.toLowerCase()
              }))(r, 0, n.gaText, g)), l(n.dataTestId)), n.onClickCallback?.(e)
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
          return "games-menu" === n.type && m ? (0, k.jsx)(m.GamesMenuItem, {
            onNavigate: c,
            dataTestId: n.dataTestId
          }, "games-menu") : n.type === b ? (0, k.jsxs)(d.MenuItem, {
            children: [(0, k.jsx)(d.MenuTrigger, {
              "data-testid": n.dataTestId,
              children: n.text
            }), (0, k.jsx)(d.MenuContent, {
              children: (0, k.jsx)(d.MenuSub, {
                children: (0, k.jsx)(d.MenuList, {
                  children: n.children?.map((e => (0, k.jsx)(y, {
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
        v = e => {
          let {
            globalNavigationComponent: a
          } = e;
          const s = a,
            {
              charactersNeeded: t
            } = (0, u.useRockstarUserState)();
          return "gtao" !== t ? null : (0, k.jsx)(s.AvatarMenuSection, {
            value: "open",
            children: (0, k.jsx)(d.CharacterProfile, {})
          })
        },
        w = e => {
          let {
            globalNavigationComponent: a,
            target: s
          } = e;
          const t = a;
          return s.type === b ? (0, k.jsx)(t.SearchTargetDropdown, {
            title: s.text,
            value: s.value,
            children: s.targets.map((e => (0, k.jsx)(w, {
              globalNavigationComponent: a,
              target: e
            }, e.text)))
          }) : (0, k.jsx)(t.SearchTarget, {
            value: s.value,
            title: s.text,
            children: s.text
          })
        },
        x = e => {
          let {
            globalNavigationComponent: a,
            searchConfig: s,
            onSearch: t,
            getQueryFromUrl: n,
            isSearchPage: i
          } = e;
          const [c, l] = (0, r.useState)(""), [_, u] = (0, r.useState)(s.targets[0].value ?? ""), {
            search: d,
            pathname: m
          } = (0, o.useLocation)(), p = (0, o.useNavigate)(), g = a;
          (0, r.useEffect)((() => {
            if (i && (d || m)) {
              const [e, a] = n();
              l(e), u(a?.value || "")
            }
          }), [n, i, d, m]);
          const h = (e, a, s) => {
            if (!e) return;
            const n = t(e, a);
            n && (s?.(), n.startsWith("http") ? window.location.href = n : p(n))
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
              children: s.targets.map((e => (0, k.jsx)(w, {
                globalNavigationComponent: a,
                target: e
              }, e.text)))
            })
          })
        },
        j = e => {
          let {
            brand: a,
            site: s
          } = e;
          return (0, k.jsx)("img", {
            className: f,
            src: a,
            alt: s,
            "data-brand": s
          })
        },
        S = (0, _.withIntl)((e => {
          let {
            navigationData: a,
            globalNavigationComponent: s,
            gamesMenuComponent: n,
            avatarMenuData: i,
            searchConfig: c,
            onSearch: d,
            getQueryFromUrl: h,
            errorMessage: f,
            localisedStrings: b
          } = e;
          const w = s,
            S = (0, t.useLocale)(),
            R = (0, o.useLocation)(),
            {
              loggedIn: C,
              data: M
            } = (0, u.useRockstarUser)(),
            z = (0, r.useMemo)((() => (0, t.getConfigForDomain)()), []),
            {
              currentCharId: N,
              setSelectedCharacterTuple: E
            } = (0, u.useRockstarUserState)(),
            I = (0, r.useMemo)((() => {
              const e = a.reduce(((e, a) => {
                const s = a.appearancePaths.find((e => (0, o.matchPath)(e, R.pathname)));
                return s && void 0 === e ? {
                  ...a,
                  matchedPath: s
                } : void 0 === e ? void 0 : e
              }), void 0);
              return e
            }), [a, R.pathname]);
          (0, r.useEffect)((() => {
            const e = M?.characters?.gtao ?? [];
            if (null !== C && !e.length) return void E(!1);
            if (null == N || !e.length) return;
            const a = e?.[N] ?? e?.[0] ?? null;
            E(!!a?.platform && [a.platform, a.characterSlot])
          }), [N, M, C]);
          const P = I?.matchedPath.options.isSearchPage || !1,
            T = (0, r.useMemo)((() => _.locales.find((e => e.iso.toLowerCase() === (0, t.toScLocaleString)(S)))?.label), [_.locales]);
          return (0, k.jsx)(w.Root, {
            brand: I?.brand ? (0, k.jsx)(j, {
              brand: I.brand,
              site: I.site
            }) : null,
            mode: "transparent-dark",
            children: (0, k.jsxs)(w.Header, {
              children: [(0, k.jsx)(w.SiteTitle, {
                quickAccessHidden: I?.hideQuickAccess,
                href: (0, t.getBase)(),
                children: R.pathname.length > 0 && !I?.hideQuickAccess && (0, k.jsxs)(w.QuickMenu, {
                  children: [(0, k.jsx)(w.MenuItem, {
                    children: (0, k.jsx)(w.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/",
                        children: [(0, k.jsx)("img", {
                          src: m,
                          alt: b.quickMenuHome
                        }), b.quickMenuHome]
                      })
                    })
                  }), (0, k.jsx)(w.MenuItem, {
                    children: (0, k.jsx)(w.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/games",
                        children: [(0, k.jsx)("img", {
                          src: p,
                          alt: b.quickMenuGames
                        }), b.quickMenuGames]
                      })
                    })
                  }), (0, k.jsx)(w.MenuItem, {
                    children: (0, k.jsx)(w.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/newswire",
                        children: [(0, k.jsx)("img", {
                          src: g,
                          alt: b.quickMenuNewswire
                        }), b.quickMenuNewswire]
                      })
                    })
                  })]
                })
              }), (0, k.jsxs)(w.MobileMenu, {
                children: ["careers" !== I.site && (0, k.jsxs)(k.Fragment, {
                  children: [(0, k.jsx)(x, {
                    globalNavigationComponent: s,
                    searchConfig: c,
                    onSearch: d,
                    getQueryFromUrl: h,
                    isSearchPage: P,
                    errorMessage: f
                  }), (0, k.jsx)(w.SearchError, {
                    errorMessage: f
                  })]
                }), (0, k.jsx)(w.MobileMenuNav, {
                  children: I?.links.map((e => (0, k.jsx)(y, {
                    globalNavigationComponent: w,
                    gamesMenuComponent: n,
                    link: e
                  }, e.text)))
                }), I?.cta && (0, k.jsx)(w.CallToAction, {
                  variant: I.cta.variant,
                  href: `${I.cta.location.domain}${I.cta.location.path}`,
                  children: I.cta.text
                }), !I?.hideQuickAccess && (0, k.jsxs)(w.QuickMenu, {
                  children: [(0, k.jsx)(w.MenuItem, {
                    children: (0, k.jsx)(w.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/",
                        children: [(0, k.jsx)("img", {
                          src: m,
                          alt: b.quickMenuHome
                        }), b.quickMenuHome]
                      })
                    })
                  }), (0, k.jsx)(w.MenuItem, {
                    children: (0, k.jsx)(w.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/games",
                        children: [(0, k.jsx)("img", {
                          src: p,
                          alt: b.quickMenuGames
                        }), b.quickMenuGames]
                      })
                    })
                  }), (0, k.jsx)(w.MenuItem, {
                    children: (0, k.jsx)(w.MenuLink, {
                      asChild: !0,
                      children: (0, k.jsxs)(o.Link, {
                        to: "/newswire",
                        children: [(0, k.jsx)("img", {
                          src: g,
                          alt: b.quickMenuNewswire
                        }), b.quickMenuNewswire]
                      })
                    })
                  })]
                })]
              }), (0, k.jsx)(w.Menu, {
                children: I?.links.map((e => (0, k.jsx)(y, {
                  globalNavigationComponent: w,
                  gamesMenuComponent: n,
                  link: e
                }, e.text)))
              }), (0, k.jsxs)(w.Actions, {
                children: [(0, k.jsx)(w.Breakpoint, {
                  showOn: "desktop",
                  children: I?.cta && (0, k.jsx)(w.CallToAction, {
                    variant: I.cta.variant,
                    href: `${I.cta.location.domain}${I.cta.location.path}`,
                    children: I.cta.text
                  })
                }), "careers" !== I.site && (0, k.jsxs)(w.Search, {
                  isSearchPage: P,
                  children: [(0, k.jsx)(w.SearchContainer, {
                    children: (0, k.jsx)(x, {
                      globalNavigationComponent: s,
                      searchConfig: c,
                      onSearch: d,
                      getQueryFromUrl: h,
                      isSearchPage: P,
                      errorMessage: f
                    })
                  }), (0, k.jsx)(w.SearchError, {
                    errorMessage: f
                  })]
                }), (0, k.jsxs)(w.AvatarMenu, {
                  avatarIconUrl: M?.avatar,
                  isLoggedIn: C,
                  children: [C && (0, k.jsx)(v, {
                    globalNavigationComponent: s
                  }), (0, k.jsx)(w.AvatarMenuSection, {
                    value: "open",
                    children: (0, k.jsx)(w.MenuList, {
                      children: (0, k.jsx)(w.AvatarMenuSectionContent, {
                        children: C ? (0, k.jsxs)(k.Fragment, {
                          children: [M.nickname && (0, k.jsx)(w.AvatarMenuSectionHeader, {
                            children: M.nickname
                          }), i.loggedInLinks.map((e => (0, k.jsx)(y, {
                            globalNavigationComponent: w,
                            link: e
                          }, e.text))), (0, k.jsx)(y, {
                            globalNavigationComponent: w,
                            link: i.helpItem
                          }), (0, k.jsx)(w.MenuItem, {
                            children: (0, k.jsx)(w.MenuLink, {
                              href: `${z.logout}?returnUrl=${R.pathname}`,
                              children: b.avatarMenuSignOut
                            })
                          })]
                        }) : (0, k.jsxs)(k.Fragment, {
                          children: [(0, k.jsx)(w.MenuItem, {
                            children: (0, k.jsx)(w.MenuLink, {
                              href: `${z.login}?returnUrl=${R.pathname}&lang=${(0,t.toScLocaleString)(S)}`,
                              children: b.avatarMenuSignIn
                            })
                          }), (0, k.jsx)(w.MenuItem, {
                            children: (0, k.jsx)(w.MenuLink, {
                              href: `${z.signup}&returnUrl=${R.pathname}&lang=${(0,t.toScLocaleString)(S)}`,
                              children: b.avatarMenuSignUp
                            })
                          }), (0, k.jsx)(y, {
                            globalNavigationComponent: w,
                            link: i.helpItem
                          })]
                        })
                      })
                    })
                  }), (0, k.jsxs)(w.AvatarMenuSection, {
                    children: [(0, k.jsx)(w.AvatarMenuSectionHeaderDropdown, {
                      children: (0, k.jsxs)(w.AvatarMenuLanguageLabel, {
                        "data-testid": "header-language-current",
                        children: [(0, k.jsx)(l.Globe, {
                          label: b.avatarMenuSelectLanguage
                        }), T ?? b.avatarMenuSelectLanguage]
                      })
                    }), (0, k.jsx)(w.AvatarMenuSectionContent, {
                      children: (0, k.jsx)(w.MenuList, {
                        children: _.locales.map((e => (0, k.jsx)(w.MenuItem, {
                          testId: `header-language-selector-${e.subdomaincom}`,
                          children: (0, k.jsx)(w.MenuLink, {
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
      var R = s(55274),
        C = s.n(R),
        M = s(90);
      const z = "__MFE_GLOBAL_HOOK__",
        N = () => {
          const e = window;
          e[z]?.history || (e[z] = Object.assign(e[z] || {}, {
            history: (0, M.createBrowserHistory)()
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
        I = (0, r.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: t,
            children: n,
            requireUser: o
          } = e, {
            track: i
          } = (0, u.useGtmTrack)(o), [c, l] = (0, r.useState)(a?.current);
          return (0, r.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, s) => {
            const [t, n] = (0, r.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: o,
              scrollY: i
            } = t;
            (0, r.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && n((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, r.useEffect)((() => {
              n({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const c = (0, r.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                i = s?.scrollTop || e.scrollTop || r.scrollTop,
                l = s?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: _
                } = e,
                u = i / (l - _) * 100;
              if (o) {
                const e = Math.min(...o, l);
                if (u >= e) {
                  const t = o.filter((a => a !== e));
                  0 === t.length && (s ?? window).removeEventListener("scroll", c), a && a({
                    scrollY: e,
                    scrollPercent: u,
                    remainingDepths: t
                  }), n({
                    scrollY: e,
                    scrollDepths: t
                  })
                }
              } else n({
                ...t,
                scrollY: u
              })
            }), [o, s, a]);
            (0, r.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
            }), [c])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            i({
              event: "page_scroll",
              scroll_depth: a
            }), "function" == typeof t && t(a)
          }), c), n
        }));
      I.displayName = "ScrollTracker";
      const P = I;
      var T = s(95945),
        G = s.n(T),
        L = s(63582);
      const A = e => {
          let {
            modal: a
          } = e;
          const {
            content: s,
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
          } = l, S = g?.indexOf(h), [R, C] = (0, r.useState)(g?.length || 0), {
            track: M
          } = (0, u.useGtmTrack)(), z = null !== g && (g?.length || 0) > 1 && ("flag_bg" === f || "fob" === w?.size), N = window.location.href.includes("cms5"), [E, I] = (0, o.useSearchParams)(), [P, T] = (0, r.useState)(!1), [A, q] = (0, r.useState)(!1), [U, B] = (0, r.useState)(), D = e => {
            "number" == typeof e && g && e < g.length && e > -1 && I({
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
            C(g?.length || 0)
          }), [g?.length]), (0, r.useEffect)((() => {
            null !== S && null !== g && D(S)
          }), [S, g]), (0, r.useEffect)((() => {
            const e = g?.findIndex((e => e === h));
            "number" == typeof e && (q(e <= 0), T(e >= R - 1))
          }), [g, h, R, E]);
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
              for (let s = 0; s < e.children.length; s++) {
                const t = e.children[s];
                if (t.scrollHeight > t.clientHeight) return t;
                const n = Z(t, a - 1);
                if (n) return n
              }
              return null
            },
            ee = e => {
              if (se?.current?.children) {
                let a = null;
                const s = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return U?.queried ? a = U.element : (a = Z(e, 2), B({
                        queried: !0,
                        element: a
                      })), a
                    })(se.current), e.preventDefault(), a && (a.scrollTop += s)
                }
              }
            },
            ae = p ? 0 : 1,
            se = (0, r.useRef)(null),
            te = (0, k.jsx)(L.motion.button, {
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
          return ne = N ? r.Fragment : G(), (0, r.useMemo)((() => (0, k.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa1a5465ff4d4669854d9beb4e863413e",
            "data-show-nav": z,
            "data-aspect-ratio": v,
            children: (0, k.jsx)(ne, {
              children: (0, k.jsxs)("div", {
                children: [(0, k.jsx)(L.motion.div, {
                  className: "rockstargames-sites-rockstargamescf4f951d4ea408858a9b48c822007342",
                  initial: {
                    opacity: 0
                  },
                  animate: $,
                  transition: Q,
                  onClick: () => X()
                }), z && (0, k.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesd5753adf78798ed2e5e2ab02678cfe1b",
                  children: [(0, k.jsxs)(L.motion.div, {
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
                      disabled: A,
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
                  }), te]
                }), (0, k.jsx)(L.motion.div, {
                  className: "rockstargames-sites-rockstargamese708da42918d8bbff9a8e1a36a2c4366",
                  ref: O,
                  initial: "initial",
                  animate: "shown",
                  variants: W,
                  transition: Q,
                  style: _,
                  children: (0, k.jsxs)(L.motion.div, {
                    className: (0, t.classList)("rockstargames-sites-rockstargamesa7d77f83f629e9ae93f6934c8ba007b0", n),
                    id: "modal",
                    "data-testid": "modal",
                    role: "dialog",
                    children: [!z && te, (0, k.jsx)(L.motion.div, {
                      className: (0, t.classList)("rockstargames-sites-rockstargamesf26fc1babb8dd1284d4c03b3dabff714", d),
                      initial: {
                        opacity: ae
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: K,
                      ref: se,
                      children: s
                    }), (0, k.jsx)("button", {
                      className: "rockstargames-sites-rockstargamesea8f15b1bfbda9f3efef89dc0d2ebc89",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [s, S, _])
        },
        q = [null, () => null],
        U = (0, t.setContextItem)({
          context: (0, r.createContext)(q),
          key: "modalContext"
        }),
        B = e => {
          let {
            children: a
          } = e;
          const [s, n] = (0, r.useState)(q), {
            setBodyIsLocked: o
          } = (0, t.useBodyScrollable)("ModalProvider"), i = (0, r.useMemo)((() => s?.content ? (0, k.jsx)(A, {
            modal: s
          }) : null), [s]), c = () => o(!1);
          return (0, r.useEffect)((() => (window.addEventListener("popstate", c), () => {
            window.removeEventListener("popstate", c)
          })), []), (0, r.useEffect)((() => {
            o(!!i)
          }), [i]), (0, k.jsx)(U.Provider, {
            value: [i, n],
            children: a
          })
        };
      var D = s(83098),
        H = s(55925),
        V = s(6590),
        F = s(69466),
        $ = s(33918);
      const O = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const s = (0, r.lazy)(e);
          return (0, r.useMemo)((() => (0, k.jsx)(r.Suspense, {
            fallback: "",
            children: (0, k.jsx)(s, {
              ...a
            })
          })), [])
        },
        Q = (0, F.A)((() => {
          const {
            setError: e,
            state: a
          } = (0, $.b)(), {
            error: t
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
            element: O((() => Promise.resolve().then(s.bind(s, 58720))), {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          };
          let c = [{
            path: "/",
            element: O((() => Promise.all([s.e(4045), s.e(2698), s.e(4283), s.e(1898), s.e(9829), s.e(9393), s.e(1784)]).then(s.bind(s, 81784))))
          }, {
            path: "/careers-privacy",
            element: O((() => Promise.all([s.e(8135), s.e(5718)]).then(s.bind(s, 85718))))
          }, {
            path: "/ccpa",
            element: O((() => Promise.all([s.e(8135), s.e(6934)]).then(s.bind(s, 46934))))
          }, {
            path: "/community-resources",
            element: O((() => Promise.all([s.e(4283), s.e(1898), s.e(5971), s.e(1493)]).then(s.bind(s, 80108))))
          }, {
            path: "/community-resources/guidelines",
            element: O((() => Promise.all([s.e(4045), s.e(4283), s.e(1898), s.e(5971), s.e(7734)]).then(s.bind(s, 47741))))
          }, {
            path: "/community-resources/additional-resources",
            element: O((() => Promise.all([s.e(4045), s.e(4283), s.e(1898), s.e(5971), s.e(609)]).then(s.bind(s, 29536))))
          }, {
            path: "/community-resources/online-comms-privacy",
            element: O((() => Promise.all([s.e(4045), s.e(4283), s.e(1898), s.e(5971), s.e(3967)]).then(s.bind(s, 70654))))
          }, {
            path: "/community-resources/how-to-report",
            element: O((() => Promise.all([s.e(4045), s.e(4283), s.e(1898), s.e(5971), s.e(4113)]).then(s.bind(s, 65200))))
          }, {
            path: "/conduct",
            element: (0, k.jsx)(o.Navigate, {
              to: "/community-guidelines",
              replace: !0
            })
          }, {
            path: "/contact",
            element: O((() => s.e(8510).then(s.bind(s, 18510))))
          }, {
            path: "/cookies",
            element: O((() => Promise.all([s.e(8135), s.e(2554)]).then(s.bind(s, 22554))))
          }, {
            path: "/corpinfo",
            element: O((() => Promise.all([s.e(8135), s.e(3721)]).then(s.bind(s, 83721))))
          }, {
            path: "/VI",
            element: (0, k.jsx)(o.Navigate, {
              to: "/VI",
              replace: !0
            })
          }, {
            path: "/games",
            element: O((() => Promise.all([s.e(4045), s.e(4283), s.e(1898), s.e(9829), s.e(4986)]).then(s.bind(s, 94279))))
          }, {
            path: "/games/:gameTitlelug",
            element: O((() => Promise.all([s.e(4283), s.e(3947)]).then(s.bind(s, 3947))))
          }, {
            path: "/legal",
            element: O((() => Promise.all([s.e(8135), s.e(8756)]).then(s.bind(s, 18756))))
          }, {
            path: "/gta-v/thankyou",
            element: O((() => s.e(3144).then(s.bind(s, 23144))), {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: O((() => s.e(5342).then(s.bind(s, 45342))))
          }, {
            path: "/community_event",
            element: O((() => Promise.all([s.e(4283), s.e(967)]).then(s.bind(s, 10967))))
          }, {
            path: "/reddeadredemption2/*",
            element: O((() => s.e(9147).then(s.t.bind(s, 29147, 23))))
          }, {
            path: "/reddeadredemption/*",
            element: O((() => s.e(7538).then(s.t.bind(s, 47538, 23))))
          }, {
            path: "/bully/scholarshipedition",
            element: (0, k.jsx)(o.Navigate, {
              to: "/bully",
              replace: !0
            })
          }, {
            path: "/bully/*",
            element: O((() => s.e(5202).then(s.t.bind(s, 35202, 23))))
          }, {
            path: "/reddeadonline/thankyou",
            element: O((() => s.e(3144).then(s.bind(s, 23144))), {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: O((() => s.e(3137).then(s.t.bind(s, 53137, 23))))
          }, {
            path: "/downloads/*",
            element: O((() => Promise.all([s.e(2973), s.e(8030)]).then(s.bind(s, 98030))))
          }, {
            path: "/reddeadonline/*",
            element: O((() => s.e(3416).then(s.t.bind(s, 33416, 23))))
          }, {
            path: "/gifs/:hashId",
            element: O((() => s.e(1626).then(s.t.bind(s, 41626, 23))))
          }, {
            path: "/gta-v/*",
            element: O((() => s.e(6766).then(s.t.bind(s, 36766, 23))), {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: O((() => s.e(6766).then(s.t.bind(s, 36766, 23))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-plus",
            element: O((() => s.e(3653).then(s.bind(s, 63653))), {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: O((() => s.e(6766).then(s.t.bind(s, 36766, 23))), {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy/*",
            element: O((() => s.e(2405).then(s.t.bind(s, 12405, 23))))
          }, {
            path: "/gtatv/*",
            element: O((() => s.e(8987).then(s.t.bind(s, 88987, 23))))
          }, {
            path: "/manuals",
            element: O((() => Promise.all([s.e(1143), s.e(9499)]).then(s.bind(s, 99499))))
          }, {
            path: "/manuals/music",
            element: O((() => Promise.all([s.e(1143), s.e(2973), s.e(8841)]).then(s.bind(s, 38841))))
          }, {
            path: "/newswire",
            element: O((() => Promise.all([s.e(4045), s.e(4283), s.e(1898), s.e(9829), s.e(9393), s.e(4088)]).then(s.bind(s, 4088))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: O((() => s.e(8136).then(s.bind(s, 5755))))
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: O((() => s.e(8136).then(s.bind(s, 5755))))
          }, {
            path: "/privacy",
            element: O((() => Promise.all([s.e(8135), s.e(4831)]).then(s.bind(s, 4831))))
          }, {
            path: "/refund-policy",
            element: O((() => s.e(8763).then(s.bind(s, 28763))))
          }, {
            path: "/rockstartv/*",
            element: O((() => s.e(8778).then(s.t.bind(s, 78778, 23))))
          }, {
            path: "/screenshot-viewer/*",
            element: O((() => s.e(582).then(s.t.bind(s, 90582, 23))))
          }, {
            path: "/search",
            element: O((() => s.e(544).then(s.bind(s, 50544))))
          }, {
            path: "/socialclubmaintenance",
            element: O((() => s.e(8395).then(s.bind(s, 38395))))
          }, {
            path: "/south-korean-privacy-addendum",
            element: O((() => Promise.all([s.e(8135), s.e(3094)]).then(s.bind(s, 63094))))
          }, {
            path: "/unsubscribe",
            element: O((() => Promise.all([s.e(4045), s.e(3784)]).then(s.bind(s, 73784))))
          }, {
            path: "/videos",
            element: O((() => Promise.all([s.e(7575), s.e(2698), s.e(1913), s.e(650)]).then(s.bind(s, 80650))))
          }, {
            path: "/videos/:videoId",
            element: O((() => Promise.all([s.e(7575), s.e(1913), s.e(7728)]).then(s.bind(s, 87728))))
          }, {
            ...i
          }];
          return isNaN(parseInt(t?.code)) || 200 === t?.code || (c = [i]), (0, o.useRoutes)(c)
        })),
        K = {
          main: "rockstargames-sites-rockstargamesf5a4be65929b33e16434b24a4d701e3e",
          headerHidden: "rockstargames-sites-rockstargamesb6b034f449f546e8024b4fa91ec35516"
        },
        Y = (0, t.withAutoRouteTracking)((e => {
          let {
            headerHidden: a
          } = e;
          return (0, k.jsx)("main", {
            role: "main",
            id: "main",
            className: [K.main, a ? K.headerHidden : ""].join(" "),
            children: (0, k.jsx)(Q, {})
          })
        }));
      var W = s(32436),
        J = s(39848),
        X = s.n(J);
      N();
      const Z = (() => {
          const e = window;
          if (e[z]?.history || N(), e[z]?.history) return e[z].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ee = (0, _.withIntl)((() => {
          const {
            setFooterHidden: e,
            setHeaderHidden: a,
            state: s
          } = (0, $.b)(), {
            footerHidden: t,
            headerHidden: n
          } = s, [l] = (0, r.useContext)(U), d = (0, o.useLocation)(), {
            data: m
          } = (0, D.Wx)(), {
            hasNotifications: p
          } = (0, u.useRockstarUserState)();
          return (0, r.useEffect)((() => {
            const s = (0, W.Ek)({
                path: d.pathname
              }),
              t = (0, W.UN)({
                path: d.pathname
              });
            e(s), a(t)
          }), [d]), (0, k.jsx)(i.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            children: (0, k.jsx)(D.UN, {
              children: (0, k.jsxs)(P, {
                threshold: [25, 50, 75, 90, 100],
                children: [!n && (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(c.NavigationWrapper, {
                    globalNavLoaderComponent: S,
                    globalNavComponent: c,
                    username: m?.nickname,
                    userProfileLink: m?.profile_link,
                    hasNotifications: p
                  })
                }), l, (0, k.jsx)(E, {}), (0, k.jsx)(Y, {
                  headerHidden: n
                }), !t && (0, k.jsx)(X(), {
                  onLanguageChange: _.onLanguageChange
                })]
              })
            })
          })
        }), h),
        ae = (0, t.withRockstarGraph)((0, t.withReactiveState)((() => {
          const e = (0, t.useBase)(),
            {
              setTitle: a
            } = (0, $.b)();
          return (0, r.useEffect)((() => {
            window.addEventListener("message", (e => {
              "graph.titleUpdate" === (e.data?.type ?? null) && a(e.data.title)
            }))
          }), []), (0, k.jsx)(H.uU, {
            children: (0, k.jsx)(V.N2, {
              children: (0, k.jsx)(D.iR, {
                children: (0, k.jsx)(C(), {
                  history: Z,
                  basename: e,
                  children: (0, k.jsx)(B, {
                    children: (0, k.jsx)(ee, {})
                  })
                })
              })
            })
          })
        }), {
          state: W.wk
        }), {
          env: window?.env?.graphEnv ?? "prod"
        }),
        se = window?.env?.oneTrustId ?? null,
        te = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: te
      }), (0, t.oneTrustInit)({
        id: se,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, n.H)(e).render((0, k.jsx)(ae, {}))
        }
      })
    }
  }
]);