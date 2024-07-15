! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e6bd156d-ffa4-4439-9288-f372b80590ab", e._sentryDebugIdIdentifier = "sentry-dbid-e6bd156d-ffa4-4439-9288-f372b80590ab")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [508], {
    52256: (e, a, s) => {
      "use strict";
      s.d(a, {
        c: () => m
      });
      var t = s(51664),
        r = s(89416),
        i = s.n(r),
        c = s(1740),
        n = s(45792);
      const o = {
        pillBtn: "rockstargames-modules-core-newswire-articlef87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-modules-core-newswire-articlea8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-modules-core-newswire-articlea57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-modules-core-newswire-articledaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-modules-core-newswire-articlebd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-modules-core-newswire-articlea6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-modules-core-newswire-articlee88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-modules-core-newswire-articleab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-modules-core-newswire-articlec20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-modules-core-newswire-articleb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-modules-core-newswire-articled0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-modules-core-newswire-articled1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-modules-core-newswire-articled6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-modules-core-newswire-articlef3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-modules-core-newswire-articlea6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-modules-core-newswire-articleeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-modules-core-newswire-articlea82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-modules-core-newswire-articled394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-modules-core-newswire-articlef1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-modules-core-newswire-articlecdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-modules-core-newswire-articleba4bd16bff2fbc40616457007b4a7442"
      };
      var l = s(95240);
      const {
        sanitize: d
      } = i(), m = e => {
        let {
          list: a,
          string: s,
          starColor: r,
          style: i,
          className: m,
          game: u,
          noImg: g,
          columns: f,
          mobileColumns: p
        } = e;
        const [_, k] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          k(a)
        }), [a]), s || a ? f && _ ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ol", {
            style: (0, n.safeStyles)(i),
            className: (0, c.classList)(o.itemList, o.noImg, o[r], o[u]),
            children: _.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, n.safeStyles)(i),
          className: (0, c.classList)(o.itemList, o.custom, g ? o.noImg : "", r ? o[r] : "", u ? o[u] : "", m ?? ""),
          children: a.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    65419: (e, a, s) => {
      "use strict";
      s.d(a, {
        c: () => m
      });
      var t = s(51664),
        r = s(89416),
        i = s.n(r),
        c = s(1740),
        n = s(45792);
      const o = {
        pillBtn: "rockstargames-modules-core-newswire-articlea89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-modules-core-newswire-articlebcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-modules-core-newswire-articleac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-newswire-articlecaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-newswire-articleb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-newswire-articled146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-newswire-articleba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-newswire-articleb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-newswire-articleaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-newswire-articled244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-newswire-articled90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-newswire-articlec3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-newswire-articlefe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-newswire-articlef5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-newswire-articlef4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-newswire-articlef6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-newswire-articleab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-newswire-articledc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-newswire-articleb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-newswire-articlee4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-newswire-articled4581a495de14e6762bb15debe5bb810"
      };
      var l = s(95240);
      const {
        sanitize: d
      } = i(), m = e => {
        let {
          list: a,
          string: s,
          starColor: r,
          style: i,
          className: m,
          game: u,
          noImg: g,
          columns: f,
          mobileColumns: p
        } = e;
        const [_, k] = (0, t.useState)(null), b = s ? s.split("_#_") : a;
        return (0, t.useEffect)((() => {
          k(a)
        }), [a]), s || a ? f && _ ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ul", {
            style: (0, n.safeStyles)(i),
            className: (0, c.classList)(o.itemList, o.noImg, o[r], o[u]),
            children: _.map(((e, a) => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, a)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, n.safeStyles)(i),
          className: (0, c.classList)(o.itemList, o.custom, g ? o.noImg : "", r ? o[r] : "", u ? o[u] : "", m ?? ""),
          children: b.map(((e, a) => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    55410: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        A: () => f,
        AudioPlayer: () => y,
        Badge: () => N,
        Brands: () => j,
        Button: () => C,
        ButtonGroup: () => z,
        CalloutSection: () => J,
        Carousel: () => $,
        ConditionalBlock: () => H,
        CookieAB: () => re,
        CountryInputField: () => te,
        Cta: () => ke,
        DescriptionArea: () => Ce,
        DiscountsBadge: () => Ee,
        DotLoader: () => Be,
        Dropdown: () => De,
        Embed: () => Fe,
        ExpandingPlatformButton: () => Qe,
        FadeInContent: () => Ze,
        GameSiteHeader: () => ea,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => na,
        Grid: () => $e,
        HTMLElement: () => _a,
        Hero: () => pa,
        HookStore: () => R,
        ImageWithBadge: () => ja,
        InViewTracker: () => La,
        LanguageSelector: () => wa,
        LayeredImage: () => ya,
        LoadingAnimation: () => zr,
        MultiSourceImage: () => he,
        NewswireBlocks: () => Ra,
        NewswireCard: () => Pa,
        NewswireList: () => Aa,
        NewswireRelated: () => Oa,
        NewswireTag: () => za,
        OrderedList: () => Ga.c,
        PackList: () => es,
        PackListMenu: () => fs,
        Paging: () => ks,
        ParallaxCacheBuster: () => vs,
        ParallaxInnerLayer: () => xs,
        ParallaxOuterLayer: () => Ns,
        ParallaxWrapper: () => hs,
        ProfileSwitcher: () => t,
        PromoModule: () => dt,
        Rating: () => pt,
        ResponsiveFlexBox: () => kt,
        ResponsiveFlexItem: () => vt,
        ResponsiveGridBox: () => ht,
        ResponsiveGridItem: () => yt,
        ResponsiveImg: () => jt,
        ResponsiveSection: () => Ct,
        RockstarLogo: () => Tt,
        ScrollSection: () => It,
        ScrollToTop: () => Mt,
        ScrollTracker: () => Et,
        SearchBox: () => zt,
        Separator: () => Ne,
        Skeleton: () => Pt,
        SrcsetImage: () => Ca,
        TextFit: () => Ie,
        ThumbsGallery: () => Gt,
        TinaModuleFetchNRender: () => qt,
        TinaWrapper: () => Wt,
        TrackList: () => $t,
        UnorderedList: () => xe.c,
        UserVote: () => Qt,
        VideoCard: () => r,
        VideoCarousel: () => Zt,
        VideoList: () => ir,
        VisuallyHidden: () => cr,
        Wasted: () => nr,
        framer: () => c,
        useTinaModuleFetchByIds: () => Ht,
        withInViewTracker: () => Ia,
        withSearchbarErrorBoundary: () => ur,
        withSimpleErrorBoundary: () => ia
      });
      var t = {};
      s.r(t), s.d(t, {
        CharacterCard: () => Is,
        Menu: () => it,
        MenuButton: () => ot
      });
      var r = {};
      s.r(r), s.d(r, {
        Art: () => lr,
        Link: () => dr
      });
      var i = {};
      s.r(i), s.d(i, {
        getVariant: () => Tr,
        transitions: () => Sr,
        variants: () => Cr
      });
      var c = {};
      s.r(c), s.d(c, {
        Animations: () => i,
        LiteMotion: () => kr,
        withFadeIn: () => hr,
        withFadeUp: () => jr
      });
      var n = s(51664),
        o = s(79584);
      const l = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        d = (0, o.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var m = s(57013);
      const u = "rockstargames-modules-core-newswire-articleff481c537a56a6fcdb1be85dfbc8944e";
      var g = s(95240);
      const f = (0, o.withIntl)((e => {
        let {
          children: a,
          to: s = "#",
          alt: t = "",
          autoBlank: r = !1,
          onClick: i = (() => {}),
          focused: c = !1,
          ...l
        } = e;
        const f = (0, n.useRef)(null),
          p = (0, o.useIntl)(),
          _ = !/^(https?|mailto):/i.test(s),
          k = /^#/.test(s),
          b = l?.target ?? (r ? "_blank" : "_self");
        let {
          ...v
        } = l, w = "";
        if ("aria-label" in v && v["aria-label"] && (w = "_blank" === b ? `${v["aria-label"]} ${p.formatMessage(d.aria_label_open_new_window)}` : v["aria-label"]), (0, n.useEffect)((() => {
            c && f?.current && f.current.focus()
          }), [f?.current, c]), k) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), i && i(e)
          };
          return (0, g.jsxs)("a", {
            title: t,
            href: s,
            onClick: e,
            ...v,
            "aria-label": w,
            ref: f,
            children: [a, "_blank" === b && !w && (0, g.jsx)("span", {
              className: u,
              children: p.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (_) return (0, g.jsxs)(m.NavLink, {
          title: t,
          to: s,
          onClick: i,
          ...v,
          "aria-label": w,
          ref: f,
          children: [a, "_blank" === b && !w && (0, g.jsx)("span", {
            className: u,
            children: p.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const h = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: l[a]
        })), {});
        return "function" == typeof h?.className && delete h.className, (0, g.jsxs)("a", {
          href: s,
          title: t,
          onClick: i,
          target: b,
          ...h,
          "aria-label": w,
          ref: f,
          children: [a, "_blank" === b && !w && (0, g.jsx)("span", {
            className: u,
            children: p.formatMessage(d.aria_label_open_new_window)
          })]
        })
      }), l);
      var p = s(65772),
        _ = s.n(p),
        k = s(33052),
        b = s(90048);
      const v = {
          player: "rockstargames-modules-core-newswire-articlebb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-core-newswire-articlee1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-core-newswire-articlee8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-core-newswire-articleea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-core-newswire-articleb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-core-newswire-articlec44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-core-newswire-articleac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-core-newswire-articleaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-core-newswire-articleb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-core-newswire-articleff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-core-newswire-articlea81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articlec87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-core-newswire-articlec23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-core-newswire-articlee4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-core-newswire-articleba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-core-newswire-articlefd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-core-newswire-articlec93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-core-newswire-articleb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-core-newswire-articled136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-core-newswire-articled3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-core-newswire-articlef5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articleefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-core-newswire-articlef286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-core-newswire-articlea56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-core-newswire-articleb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        w = e => {
          let {
            src: a
          } = e;
          return (0, g.jsx)("div", {
            className: v.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        h = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: s,
            audioRef: t,
            setPlaying: r,
            tracksOpen: i,
            setTracksOpen: c,
            trackData: o,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const u = (0, n.useRef)(null),
            f = (0, n.useRef)(null),
            p = (0, n.useRef)(null),
            [k, b] = (0, n.useState)(null),
            [w, h] = (0, n.useState)(!1),
            x = e => {
              const a = new Date(1e3 * e),
                s = a.getUTCMinutes(),
                t = a.getSeconds();
              return `${s.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
            };
          return (0, n.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = () => {
              p.current && f.current && b(p.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, f, a]), (0, n.useEffect)((() => {
            if (!u.current || !a?.duration) return;
            let e = null;
            const s = new(_())(u.current),
              r = e => {
                if (u.current) {
                  const s = u.current.clientWidth;
                  if (!u.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    i = Number(r / s * a.duration);
                  t.currentTime = i
                }
              },
              i = () => {
                e ? t.pause() : t.play()
              },
              c = () => {
                e = t.paused, t.pause()
              };
            return s.on("panstart", c), s.on("panleft", r), s.on("panright", r), s.on("panend", i), s.on("tap", r), () => {
              s.off("panstart", c), s.off("panleft", r), s.off("panright", r), s.off("panend", i), s.off("tap", r)
            }
          }), [u.current, a.duration]), (0, n.useEffect)((() => {
            const e = Number(t?.currentTime);
            (s || !isNaN(e) && 0 !== e) && h(!0)
          }), [s, t?.currentTime]), (0, g.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, g.jsx)("div", {
              className: [v.controlsCurrentBg, w ? v.controlsCurrentBgVisible : ""].join(" ")
            }), (0, g.jsx)("div", {
              className: v.controlsTrack,
              ref: f,
              children: (0, g.jsx)("span", {
                className: [v.controlsTrackTitle, k ? v.controlsTrackAnimating : ""].join(" "),
                ref: p,
                children: o.title
              })
            }), (0, g.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, g.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), r(!0))
                }
              }), (0, g.jsx)("div", {
                className: [v.controlsPlayPause, s ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!s)
                }
              }), (0, g.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), r(!0))
                }
              })]
            }), (0, g.jsx)("div", {
              active: i ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, g.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  c(!i)
                }
              })
            }), (0, g.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, g.jsx)("span", {
                children: x(a.current)
              }), (0, g.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: u
              }), (0, g.jsx)("span", {
                children: x(a.duration)
              })]
            })]
          })
        },
        x = e => {
          let {
            tracks: a,
            trackId: s,
            setTrackId: t,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: c,
            setAutoNext: n
          } = e;
          return (0, g.jsxs)("div", {
            className: v.tracks,
            children: [(0, g.jsx)("h4", {
              children: "Tracks"
            }), (0, g.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, g.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, g.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: s === e.id ? v.trackActive : "",
                onClick: () => {
                  t(e.id), c(!0), n(!0)
                },
                children: [(0, g.jsx)("span", {
                  className: v.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, g.jsx)("span", {
                  className: v.trackTitle,
                  children: e.title
                }), (0, g.jsx)("span", {
                  className: v.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        y = e => {
          let {
            id: a,
            className: s = ""
          } = e;
          const {
            data: t
          } = (0, k.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [r, i] = (0, n.useState)(), [c, o] = (0, n.useState)(), [l, d] = (0, n.useState)(), [m, u] = (0, n.useState)(!1), [f, p] = (0, n.useState)(!1), [_, y] = (0, n.useState)(new HTMLAudioElement), [N, j] = (0, n.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), C(!1), p(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && p(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, n.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || j({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                S && r && o(r[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, r, S]), (0, n.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, n.useEffect)((() => {
            _ && (f ? _.play() : _.pause(), u(!1))
          }), [f, _, l?.id]), (0, n.useEffect)((() => {
            if (!c) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === c));
            i([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [c]), (0, n.useEffect)((() => {
            t && o(t.audioAlbum.tracks[0].id)
          }), [t]), l ? (0, g.jsxs)("div", {
            className: [v.player, v[s], m ? v.tracksOpen : ""].join(" "),
            children: [(0, g.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: l.mp3_src
            }), (0, g.jsx)(x, {
              tracks: t.audioAlbum.tracks,
              setTrackId: o,
              trackId: c,
              tracksOpen: m,
              setTracksOpen: u,
              setPlaying: p,
              setAutoNext: C
            }), (0, g.jsx)(w, {
              src: l.cover_src
            }), (0, g.jsx)(h, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: u,
              playing: f,
              setPlaying: p,
              timing: N,
              trackData: l,
              audioRef: _,
              setAutoNext: C
            })]
          }) : null
        },
        N = e => {
          let {
            text: a,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleb61bd7f274fd6d93c4bf33a9284b6b67",
            style: s,
            children: a
          })
        },
        j = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, g.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: s
              } = e;
              return (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec894fe869384587702b5370da072be86",
                "data-brand": s
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-modules-core-newswire-articlee056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-core-newswire-articled340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: s,
            context: t = "",
            to: r,
            onClick: i,
            ...c
          } = e;
          const n = [S.button, S[t], a].join(" ");
          return r ? (0, g.jsx)(f, {
            ...c,
            to: r,
            className: n,
            onClick: i,
            children: s
          }) : (0, g.jsx)("button", {
            ...c,
            type: "button",
            className: n,
            onClick: i,
            children: s
          })
        };
      var T = s(1740);
      const I = {
          pillBtn: "rockstargames-modules-core-newswire-articleb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-core-newswire-articlef5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-core-newswire-articlecffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-core-newswire-articleb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-core-newswire-articlee6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-core-newswire-articlecef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-core-newswire-articleb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-core-newswire-articlecb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-core-newswire-articled0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-core-newswire-articleac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-core-newswire-articlec5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-core-newswire-articlea7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlea693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-core-newswire-articlea029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-core-newswire-articlee25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-core-newswire-articlee03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r,
            ariaLabel: i
          } = e;
          return (0, g.jsx)("button", {
            className: s,
            onClick: t,
            style: r,
            type: "button",
            "aria-label": i,
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r,
            to: i,
            ariaLabel: c
          } = e;
          return (0, g.jsx)(m.NavLink, {
            className: s,
            onClick: t,
            style: r,
            to: i,
            "aria-label": c,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: r = "",
            img: i,
            labelColor: c = "#000",
            onClick: n,
            secondText: o,
            size: l,
            text: d,
            to: m,
            type: u = "",
            ariaLabel: f
          } = e;
          const p = [I.plusButton, I[u] ?? "", I[l] ?? "", I[t] ?? "", s].join(" "),
            _ = {
              "--hvr-color": a ?? c,
              "--hvr-bg-color": c ?? a,
              "--hvr-border-color": a ?? c
            },
            k = (0, g.jsxs)(g.Fragment, {
              children: [i ? (0, g.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, g.jsxs)("div", {
                className: I.btnText,
                icon: r,
                children: [d, o ? (0, g.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, g.jsx)("span", {
                onClick: n,
                onKeyDown: n,
                className: p,
                role: "button",
                "aria-label": f,
                tabIndex: 0,
                children: (0, g.jsx)("a", {
                  href: m,
                  target: e,
                  children: k
                })
              })
            }
            return (0, g.jsx)(L, {
              className: p,
              onClick: n,
              style: {
                ..._
              },
              to: m,
              ariaLabel: f,
              children: k
            })
          }
          return (0, g.jsx)(M, {
            className: p,
            onClick: n,
            style: {
              ..._
            },
            ariaLabel: f,
            children: k
          })
        },
        z = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, g.jsx)("div", {
            className: (0, T.classList)("rockstargames-modules-core-newswire-articleb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: t,
                to: r
              } = e;
              return t ? (0, g.jsx)(E, {
                icon: s,
                text: t,
                to: r
              }, a) : ""
            }))
          }) : null
        };
      var B = s(48111),
        P = s(12231);
      const V = {
          deprecatedCarousel: "rockstargames-modules-core-newswire-articleeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-core-newswire-articleb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-core-newswire-articlefa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-core-newswire-articlec9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-core-newswire-articlef2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-core-newswire-articlef1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-core-newswire-articlee70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-core-newswire-articlebace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-core-newswire-articlef4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-core-newswire-articled6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-core-newswire-articleb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-core-newswire-articlebb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-core-newswire-articledd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-core-newswire-articlea59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-core-newswire-articleaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec05cc0faa8239c85cdc7d53c7e120e8e"
        },
        D = e => {
          let {
            item: a
          } = e;
          return (0, g.jsxs)("div", {
            children: [(0, g.jsx)(ja, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, T.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, g.jsx)(Ce, {
              item: a
            })]
          })
        },
        A = e => {
          let {
            current: a,
            total: s
          } = e;
          return (0, g.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, g.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        $ = e => {
          let {
            children: a,
            items: s = [],
            style: t = {},
            noInfiniteScroll: r = !1,
            className: i = "",
            renderTemplate: c = "standard",
            text: o,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [u, f] = (0, n.useState)(0), p = (0, n.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, P.c)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const _ = {
            0: {
              spaceBetween: l ?? 16
            },
            1024: {
              spaceBetween: l ?? 18
            },
            1920: {
              spaceBetween: l ?? 20
            },
            2560: {
              spaceBetween: l ?? 22
            }
          };
          return (0, g.jsxs)("div", {
            className: (0, T.classList)(V.deprecatedCarousel, V[c], V[`infinite_${!r}`], a ? V.renderedWithChildren : "", i),
            style: t,
            children: [(0, g.jsxs)(B.wx, {
              loop: !r,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => f(0),
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, g.jsx)("div", {
                className: V.trackWrapper,
                children: (0, g.jsxs)("div", {
                  className: V.track,
                  children: [s?.map((e => (0, g.jsx)(B.Ky, {
                    children: (0, g.jsx)(D, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, g.jsx)(B.Ky, {
                    children: e
                  }, p && p[a])))]
                })
              }), (0, g.jsx)(A, {
                current: u,
                total: a ? a.length : s.length
              })]
            }), (o?.title || o?.description) && (0, g.jsx)(Ce, {
              item: o
            })]
          })
        };
      var O = s(45792),
        F = s(42836);
      const R = (0, s(62748).U1)(),
        G = e => e.some((e => !e)),
        U = e => {
          let {
            condition: a = null,
            children: s
          } = e;
          const [t, r] = (0, n.useState)(!1), i = (e => {
            const [a] = (0, m.useSearchParams)(), [s, t] = (0, n.useState)(null), r = (0, F.useRockstarUser)(), {
              loggedIn: i
            } = r, {
              currentCharId: c
            } = (0, F.useRockstarUserState)(), o = (0, F.useIsUserGtaPlus)(r?.data, c);
            return (0, n.useEffect)((() => {
              const s = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              R.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: t
                } = e;
                if (s) return "true" === a.get(t) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (G(r)) return !1;
                switch (t) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === o);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), t(!G(r)), () => {}
            }), [a, e, o, r, i]), s
          })(a);
          return (0, n.useEffect)((() => {
            r(i)
          }), [i]), (0, n.useMemo)((() => t ? s : null), [t])
        },
        H = (0, O.withTranslations)((e => {
          let {
            children: a
          } = e;
          return n.Children.map(n.Children.toArray(a), (e => (0, g.jsx)(U, {
            ...e?.props
          })))
        }));
      var q = s(37960),
        W = s(58652);
      const K = e => {
          let {
            className: a
          } = e;
          return (0, g.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, g.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, g.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        X = {
          pillBtn: "rockstargames-modules-core-newswire-articlee3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-newswire-articlea9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-newswire-articlee6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-newswire-articleb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-newswire-articlec81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articleb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-newswire-articleb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-newswire-articleac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-newswire-articlebee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-newswire-articleb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-newswire-articleb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-newswire-articlef26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-newswire-articled38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-newswire-articleb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-newswire-articleaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articlea74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-newswire-articlecc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-newswire-articledb26fed58ce50f4affc114670885721a"
        },
        Q = e => {
          let {
            foreign_id: a,
            foreign_type: s
          } = e;
          const {
            track: t
          } = (0, F.useGtmTrack)(), {
            refetch: r
          } = (0, k.useQuery)(W.UserGetVote, {
            skip: !0
          }), [i] = (0, k.useMutation)(W.UserCastVote), [c, o] = (0, n.useState)(null), l = (0, n.useCallback)((e => {
            (async () => {
              if (e === c && null !== c) o(null);
              else {
                o(e), t({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const r = {
                  foreignId: a,
                  foreignType: s,
                  vote: e
                };
                await i({
                  variables: r
                })
              }
            })()
          }), [a, s, c]);
          return (0, n.useEffect)((() => {
            a && s && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: s
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s]), (0, g.jsxs)("div", {
            className: X.calloutVoteForm,
            children: [(0, g.jsx)("button", {
              "aria-label": "upvote",
              className: [X.upvote, X.voteButton, c ? X.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, g.jsx)("button", {
              "aria-label": "downvote",
              className: [X.downvote, X.voteButton, !1 === c ? X.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Y = e => {
          let {
            action_text: a,
            link: s,
            trackingData: t
          } = e;
          const {
            track: r
          } = (0, F.useGtmTrack)();
          return (0, g.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, g.jsxs)("button", {
              className: X.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [a, (0, g.jsx)(K, {
                className: X.calloutLinkIcon
              })]
            })
          })
        },
        Z = e => {
          let {
            helperText: a,
            linkText: s,
            link: t,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)();
          return (0, g.jsxs)("div", {
            className: X.actionFooter,
            children: [a, s && " ", s && (0, g.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...r
              }),
              children: s
            })]
          })
        },
        J = (0, O.withTranslations)((e => {
          let {
            header: a,
            subheader: s,
            type: t,
            action_text: r,
            link: i,
            foreign_id: c = document.location.pathname,
            foreign_type: o = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: u,
            trackingData: f = {},
            actionFooterLinkTrackingData: p = {},
            t: _,
            ...k
          } = e;
          const {
            loggedIn: b
          } = (0, F.useRockstarUser)(), {
            track: v
          } = (0, F.useGtmTrack)(), w = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: h,
            inView: x
          } = (0, q.cD)({
            threshold: .6
          }), [y, N] = (0, n.useState)(!1);
          let j;
          if ((0, n.useEffect)((() => {
              x && !y && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), N(!0))
            }), [x]), !a && !s) return null;
          switch (t) {
            case "vote":
              if (!b) {
                j = (0, g.jsx)(C, {
                  to: w,
                  className: X.calloutButton,
                  onClick: f ? () => v({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              j = (0, g.jsx)(Q, {
                foreign_id: c,
                foreign_type: o
              });
              break;
            case "button":
              r && i && (j = (0, g.jsx)(C, {
                to: i,
                className: X.calloutButton,
                onClick: f ? () => v({
                  ...f
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && i && (j = (0, g.jsx)(Y, {
                action_text: r,
                link: i,
                trackingData: f
              }));
              break;
            default:
              j = null
          }
          return (0, g.jsx)("div", {
            className: `${X.calloutContainer} ${l||""}`,
            ref: h,
            children: (0, g.jsxs)("div", {
              className: X.calloutSection,
              children: [(0, g.jsxs)("div", {
                className: [X.calloutHeaders, j ? X.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, g.jsx)("h2", {
                  className: X.calloutHeader,
                  children: _(a)
                }), s && (0, g.jsx)("h3", {
                  className: X.calloutSubheader,
                  children: _(s)
                })]
              }), (0, g.jsxs)("div", {
                className: X.actionBlock,
                children: [j, d && (0, g.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: u,
                  trackingData: p
                })]
              })]
            })
          })
        }));
      var ee = s(30300),
        ae = s(44236),
        se = s.n(ae);
      const te = e => {
          let {
            isMulti: a,
            allowSelectAll: s,
            label: t,
            miscProps: r
          } = e;
          const [i, c] = (0, n.useState)(""), o = (0, n.useMemo)((() => se()().getData()), []);
          return (0, g.jsx)(ee.cp, {
            unstyled: !0,
            value: i,
            isMulti: a,
            allowSelectAll: s,
            options: o,
            placeholder: t,
            onChange: e => {
              return a = e?.target?.value, void c(a);
              var a
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        re = e => {
          let {
            cookieName: a,
            cookieValue: s,
            trueComponent: t,
            falseComponent: r
          } = e;
          const i = (e => {
              const a = document.cookie.split("; "),
                s = `${e}=`,
                t = a.find((e => e.startsWith(s)));
              return t?.substring(s.length, t.length)
            })(a),
            c = new URLSearchParams(window.location.search).get(a);
          return c && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, c), i === s || c === s ? t : r
        };
      var ie = s(17104),
        ce = s(65388),
        ne = s(39336),
        oe = s(91232),
        le = s(96201),
        de = s(23124);
      const me = {
          ps: ie,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: ce,
          ps5: ne,
          switch: s(15588),
          xbox: oe,
          xboxone: de,
          xboxseriesxs: le,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: s(56644),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        ue = e => me[e] || null,
        ge = {
          pillBtn: "rockstargames-modules-core-newswire-articlebf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-newswire-articlee07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-modules-core-newswire-articleeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-modules-core-newswire-articlee8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-modules-core-newswire-articlec392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-modules-core-newswire-articlebc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-modules-core-newswire-articleb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-newswire-articledbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-newswire-articlef5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-modules-core-newswire-articlecb0ad8d8dd93218dc12091b883767967",
          xbox: "rockstargames-modules-core-newswire-articlef591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-newswire-articlee5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlee52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-newswire-articlec53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-newswire-articlef4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-newswire-articleb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-newswire-articlec7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-core-newswire-articlea9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-core-newswire-articlea4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-newswire-articlec4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-modules-core-newswire-articlec4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-modules-core-newswire-articlea13111cbe8acbd75f62da1c53de2c3df",
          icon: "rockstargames-modules-core-newswire-articlec7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-newswire-articlebd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-newswire-articlec79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-newswire-articled87326174de12b895401f738a23b177a"
        };
      var fe = s(89772),
        pe = s.n(fe);
      const _e = e => {
          let {
            platform: a = "",
            altText: s
          } = e;
          const t = a ? ue(a) : null,
            r = t ? (0, g.jsx)("img", {
              className: ge.platformIcon,
              src: t,
              alt: s
            }) : null;
          return (0, g.jsx)("span", {
            className: [ge.btnContent, ge.platformButton].join(" "),
            children: r
          })
        },
        ke = e => {
          let {
            children: a,
            href: s,
            style: t,
            content: r,
            variant: i = null,
            size: c = "medium",
            icon: o,
            iconPosition: l = "none",
            iconStyle: d,
            badge: u,
            badgeStyle: f,
            platformItem: p,
            gtm: _ = {},
            disabled: k,
            reloadDocument: b = !1,
            className: v
          } = e;
          const {
            track: w
          } = (0, F.useGtmTrack)(), h = (0, O.useDataLayer)(), x = r ?? a, y = (0, O.findPlatform)(p)?.friendlyName, N = (0, n.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(s)?.hostname
            } catch (s) {
              a = e
            }
            return e === a
          }), [s]), j = (0, n.useCallback)((() => {
            k || w({
              event: "cta_other",
              text: x ?? void 0,
              ...h,
              ..._,
              link_url: s ?? void 0
            })
          }), [_, s, h]), S = () => o ? (0, g.jsx)("span", {
            className: [ge.icon, `icon-${l}`].join(" "),
            style: d,
            children: (0, g.jsx)("img", {
              className: ge.btnIcon,
              src: ue(o) || "",
              alt: `${o} icon`
            })
          }) : null;
          return (0, g.jsx)(m.Link, {
            to: s,
            target: N ? "_self" : "_blank",
            className: pe()(ge.cta, "platform" === i && p ? ge[p] : "", k ? ge.disabled : "", v),
            style: t,
            "data-variant": i,
            "data-size": c,
            onClick: j,
            "aria-label": x,
            reloadDocument: b,
            children: "platform" === i && p ? (0, g.jsx)(_e, {
              platform: p,
              altText: y || x
            }) : (0, g.jsxs)("div", {
              className: ge.btnContent,
              children: ["left" === l && S(), (0, g.jsx)("span", {
                className: ge.label,
                children: x
              }), "right" === l && S(), u ? (0, g.jsx)("span", {
                className: ge.badge,
                style: f,
                children: u
              }) : null]
            })
          })
        };
      var be = s(45652);
      const ve = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8",
        we = e => {
          let {
            alt: a,
            className: t,
            src: r,
            style: i
          } = e;
          const [c, n] = (0, O.usePreloadImg)(r);
          let o = r;
          !1 === c && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === t && (o = s(61820)), o = s(43976));
          const {
            width: l,
            height: d
          } = n, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...i
          };
          return (0, g.jsx)("img", {
            src: o,
            className: t ?? "",
            alt: a,
            style: m
          })
        },
        he = e => {
          let {
            className: a,
            style: t = {},
            image: r = {},
            imageStyle: i = {}
          } = e, {
            alt: c,
            src: n
          } = (0, be.useImageParser)(r);
          const {
            isMobile: o
          } = (0, O.useWindowResize)();
          return n.desktop || n.mobile || (c = "", n = {
            mobile: s(61820),
            desktop: s(43976)
          }), (0, g.jsx)("div", {
            className: r.frame ? `${r.frame} ${ve}` : ve,
            style: t,
            children: (0, g.jsx)(we, {
              style: {
                ...i,
                ...r?.style
              },
              src: o ? n.mobile || n.desktop : n?.desktop || n?.mobile,
              alt: c,
              className: a
            })
          })
        };
      var xe = s(65419);
      const ye = {
          hr: "rockstargames-modules-core-newswire-articlef5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-core-newswire-articlef8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-core-newswire-articlec442f7264db862a7cca6d9a56dacc205"
        },
        Ne = e => {
          let {
            style: a,
            className: s = "",
            type: t
          } = e;
          return (0, g.jsx)("div", {
            style: a,
            className: [ye.hr, ye[t], s].join(" ")
          })
        },
        je = "rockstargames-modules-core-newswire-articlefa6885b15a718acb24f48949c52e31f1",
        Se = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, g.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        Ce = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, g.jsxs)("div", {
            className: (0, T.classList)("rockstargames-modules-core-newswire-articleef9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, g.jsx)(Se, {
              to: a?.href ?? a?.to,
              children: (0, g.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, g.jsx)(xe.c, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, g.jsx)(he, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, g.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, g.jsx)(Ne, {})
            }, a) : (0, g.jsx)("p", {
              children: (0, g.jsx)("span", {
                className: je,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, g.jsx)("span", {
              className: je,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Te = s(58936);
      const Ie = e => {
          let {
            children: a,
            ...s
          } = e;
          const [t, r] = (0, n.useState)(!1);
          return (0, g.jsx)(Te.cR, {
            ...s,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: a
          })
        },
        Me = {
          badge: "rockstargames-modules-core-newswire-articlee279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articled7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-core-newswire-articled697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-core-newswire-articlee1bba3cd4554abbb48a030af24bbada5"
        },
        Le = e => {
          let {
            wrapper: a,
            children: s,
            role: t,
            splitter: r
          } = e;
          return r || t ? a(s) : s
        },
        Ee = e => {
          let {
            badge: a,
            badgeType: t,
            role: r,
            splitter: i
          } = e;
          const c = [];
          i ? a.split(i).map(((e, a) => c.push(e))) : c.push(a);
          let n = 100;
          return 2 == c.length && c[1].length < 4 && "off" !== c[1].toLowerCase() && 45, (0, g.jsxs)(Le, {
            splitter: i,
            role: r,
            wrapper: e => (0, g.jsx)("div", {
              className: `${Me.badge} ${t?Me[t]:""} `,
              children: e
            }),
            children: [(0, g.jsx)(g.Fragment, {
              children: r && (0, g.jsx)(he, {
                image: {
                  alt: r,
                  desktop: s(6572)(`./${r}.png`)
                }
              })
            }), (0, g.jsx)(Ie, {
              className: `${i||r?"":Me.badge} ${t?Me[t]:""}`,
              min: 8,
              max: 1e3,
              mode: i || r ? "single" : "multi",
              children: c[0]
            }), (0, g.jsx)(g.Fragment, {
              children: c.shift() && i && c.length >= 1 && (0, g.jsx)(Ie, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: c.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        ze = "rockstargames-modules-core-newswire-articlec63cfb461217f059c8c25eec09602b30",
        Be = e => {
          let {
            color: a
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlea481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, g.jsx)("div", {
              className: ze
            }), (0, g.jsx)("div", {
              className: ze
            }), (0, g.jsx)("div", {
              className: ze
            })]
          })
        };
      var Pe = s(43924);
      const Ve = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articleb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-core-newswire-articleb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-core-newswire-articlef5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-core-newswire-articleecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-core-newswire-articleb64c3515fcd91f6b84410bd14640da81"
        },
        De = e => {
          let {
            children: a,
            className: s,
            title: t
          } = e;
          const [r, i] = (0, n.useState)(!1);
          return (0, g.jsx)(Pe.cp, {
            disabled: !r,
            children: (0, g.jsxs)("div", {
              className: [Ve.dropdownWrapper, r ? Ve.open : "", void 0 !== s ? s : ""].join(" "),
              children: [(0, g.jsx)("button", {
                className: Ve.opener,
                onClick: () => i(!r),
                children: t
              }), r && (0, g.jsx)("div", {
                className: Ve.items,
                onClick: () => i(!1),
                children: a
              })]
            })
          })
        };
      var Ae = s(95356);
      const $e = e => {
          let {
            children: a,
            context: s = null,
            game: t,
            image: r = {},
            style: i = {},
            template: c = null,
            theme: n = null,
            reversedOnMobile: o = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, be.useImageParser)(r ?? {}),
            u = {
              ...i
            };
          if (m?.src?.desktop) {
            const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              s = `var(--grid-background-position, center)/${e??"cover"}`;
            if (u.background = `url(${m?.src?.desktop}) ${a} ${s}`, r?.style && r?.style["--linear-gradient"]) u.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${a} ${s}`;
            else if (r?.style && r?.style["--gradient-height"]) {
              const e = r?.style["--gradient-height"] || "3",
                t = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                i = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              u.background = `linear-gradient(180deg, ${t}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${m?.src?.desktop}) ${a} ${s}`
            }
          }
          return (0, g.jsx)("div", {
            id: d,
            className: (0, Ae.classList)("rockstargames-modules-core-newswire-articlef42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-modules-core-newswire-articleb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === c ? null : t,
            style: (0, O.safeStyles)(u),
            "data-context": s,
            "data-template": c,
            "data-theme": n,
            children: a
          })
        },
        Oe = e => {
          let {
            caption: a,
            children: s,
            ...t
          } = e;
          return a ? (0, g.jsxs)("figure", {
            ...t,
            children: [s, (0, g.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : s
        },
        Fe = e => {
          let {
            componentTitle: a,
            type: s,
            items: t
          } = e;
          return t?.length ? (0, g.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled393ab6eb68d416b116b6281abdb5e14",
            type: s,
            children: (0, g.jsxs)($e, {
              children: [a && (0, g.jsx)("h3", {
                children: a
              }), (0, g.jsx)($e, {
                className: "rockstargames-modules-core-newswire-articleed3ee31cb8e357d795886157f95a742a",
                children: t.map(((e, a) => {
                  return e?.embed ? (0, g.jsx)(Oe, {
                    caption: e?.caption,
                    children: (0, g.jsx)("div", {
                      className: "rockstargames-modules-core-newswire-articledcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (s = e.embed, s.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var s
                }))
              })]
            })
          }) : null
        };
      var Re = s(21388);
      const Ge = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Ue = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        He = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Ue
          }
        },
        qe = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Ue,
              height: {
                type: "spring",
                stiffness: 425,
                damping: 40
              }
            }
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              opacity: {
                ease: "easeOut",
                duration: .1
              },
              height: Ge
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        We = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            padding: "var(--foundry-global-spacing-dimensions-200)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            padding: "var(--foundry-global-spacing-dimensions-300) var(--foundry-global-spacing-dimensions-600)",
            gridGap: 0,
            transition: Ge,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        Ke = {
          pillBtn: "rockstargames-modules-core-newswire-articleba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-core-newswire-articlec9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-core-newswire-articlebfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-core-newswire-articlea1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-modules-core-newswire-articlef692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-modules-core-newswire-articleba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-modules-core-newswire-articlec2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-modules-core-newswire-articledd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-core-newswire-articlec559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-core-newswire-articled6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-core-newswire-articleb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-core-newswire-articlefe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-core-newswire-articleb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlee23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-core-newswire-articlee0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-core-newswire-articledcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-core-newswire-articlee047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-core-newswire-articledaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-core-newswire-articleae7bc564778d8af6cf5f8a0491ef7dc8"
        },
        Xe = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: r = "",
            target: i = null,
            onClick: c
          } = e;
          const n = i ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [Ke.platformButton, Ke[r]].join(" "),
            l = r ? s(13892)(`./${r}.svg`) : null,
            d = (0, g.jsxs)(g.Fragment, {
              children: [l ? (0, g.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, g.jsx)("div", {
                className: Ke.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, g.jsx)("a", {
            href: t,
            className: o,
            target: n,
            onClick: c,
            "aria-label": a,
            children: d
          }) : (0, g.jsx)(m.NavLink, {
            className: o,
            onClick: c,
            to: t,
            "aria-label": a,
            children: d
          })
        },
        Qe = e => {
          let {
            variant: a,
            buttonText: t = "Subscribe",
            buttonClassName: r,
            className: i,
            children: c,
            platformsAndLinks: o = [],
            trackingType: l = "buy",
            trackingParent: d,
            target: m = null,
            trackingOId: u = null
          } = e;
          const [f, p] = (0, n.useState)(!1), {
            track: _
          } = (0, F.useGtmTrack)(), k = (0, n.useRef)(null), b = (0, n.useRef)(f);
          (0, n.useEffect)((() => {
            b.current = f
          }), [f]), (0, n.useEffect)((() => {
            const e = e => {
              b && !k?.current?.contains(e.target) && p(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []);
          const v = e => {
            let {
              href: a,
              platform: s
            } = e;
            return () => {
              _({
                element_placement: d,
                event: "cta_store_link",
                link_url: a,
                text: s
              })
            }
          };
          return (0, g.jsxs)("div", {
            className: (0, T.classList)(Ke.container, i),
            children: [(0, g.jsx)(Re.q.div, {
              className: Ke.content,
              animate: f ? "open" : "close",
              variants: He,
              "aria-hidden": !!f,
              children: c
            }), (0, g.jsxs)(Re.q.div, {
              "data-variant": a,
              className: pe()(f ? Ke.expandedButton : Ke.unexpandedButton),
              animate: f ? "open" : "closed",
              variants: We,
              initial: !1,
              ref: k,
              children: [(0, g.jsx)(Re.q.button, {
                className: pe()(Ke.buttonText, r),
                "aria-expanded": f,
                disabled: f,
                ...!f && {
                  onClick: () => {
                    if (p(!f), !f) switch (l) {
                      case "select_platform":
                        _({
                          element_placement: d,
                          event: "select_platform",
                          event_action: "select_platform",
                          event_category: "cta",
                          event_label: d,
                          text: t?.toLowerCase() ?? "subscribe"
                        });
                        break;
                      case "link_account":
                        _({
                          element_placement: d,
                          event: "cta_link_account",
                          event_action: "link_account",
                          event_category: "cta",
                          event_label: d,
                          o_id: u,
                          text: t?.toLowerCase()
                        });
                        break;
                      case "buy":
                        _({
                          element_placement: d,
                          event: "cta_buy",
                          event_action: "buy",
                          event_category: "cta",
                          event_label: d,
                          text: t?.toLowerCase() ?? "subscribe"
                        });
                        break;
                      case "store_link":
                        _({
                          element_placement: d,
                          event: "cta_store_link",
                          event_action: "store_link",
                          event_category: "cta",
                          event_label: d,
                          text: t?.toLowerCase()
                        });
                        break;
                      case "other":
                        _({
                          element_placement: d,
                          event: "cta_other",
                          event_action: "other",
                          event_category: "cta",
                          event_label: d,
                          text: t?.toLowerCase()
                        })
                    }
                  }
                },
                children: "string" == typeof t ? t : "Subscribe"
              }), (0, g.jsxs)(Re.q.div, {
                className: Ke.expandedArea,
                animate: f ? "open" : "closed",
                variants: qe,
                initial: !1,
                "aria-hidden": !f,
                children: [(0, g.jsx)("button", {
                  className: Ke.closeButton,
                  onClick: () => {
                    p(!1), _({
                      element_placement: d,
                      event: "cta_other",
                      text: "close expanding platform button"
                    })
                  },
                  "aria-label": "Close",
                  children: (0, g.jsx)("img", {
                    src: s(72428),
                    alt: "Close"
                  })
                }), (0, g.jsx)("div", {
                  className: Ke.platformButtons,
                  children: o.length ? o.map((e => (0, g.jsx)(Xe, {
                    buttonText: e.buttonText ?? (0, O.findPlatform)(e.platform)?.friendlyName ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: v(e),
                    target: m
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Ye = {
          animateBox: "rockstargames-modules-core-newswire-articlee9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-core-newswire-articlea63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-core-newswire-articled7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-core-newswire-articleb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-core-newswire-articlea4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-core-newswire-articlef9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Ze = e => {
          let {
            children: a,
            style: s
          } = e;
          const t = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ye.visible])
              }))
            })).observe(t?.current)
          }), []), (0, g.jsx)("div", {
            style: s,
            className: [Ye.fadeArea].join(" "),
            ref: t,
            children: a
          })
        },
        Je = {
          gameSiteHeader: "rockstargames-modules-core-newswire-articlecb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-core-newswire-articleaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-core-newswire-articleac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-core-newswire-articlee5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-core-newswire-articleb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-core-newswire-articlee666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-core-newswire-articlecfc6fd456ca2f3e9db06f780f412660f"
        },
        ea = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: s,
            navLinks: t,
            cta: r = "",
            game: i
          } = e;
          const [c, o] = (0, n.useState)(!1), l = (0, k.useMutateState)(), {
            navHidden: d
          } = (0, k.useState)();
          return (0, n.useEffect)((() => {
            l({
              gameSiteNavOpen: c
            })
          }), [c]), (0, n.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, g.jsxs)("header", {
            "data-game": i,
            className: [Je.gameSiteHeader, c ? Je.headerNavOpen : "", d ? Je.navHidden : "", s.gameSiteHeader, c ? s.headerNavOpen : ""].join(" "),
            children: [(0, g.jsx)("button", {
              className: [Je.headerLogo, s.headerLogo].join(" "),
              onClick: e => {
                o(!c), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, g.jsx)("div", {
              className: Je.bg
            }), (0, g.jsx)("nav", {
              children: (0, g.jsx)("div", {
                className: Je.navContent,
                children: t
              })
            }), r]
          })
        };
      var aa = s(31403),
        sa = s(73660),
        ta = s.n(sa);
      class ra extends n.Component {
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
          return this?.state?.error?.message ? (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef903c45f8ecc18bd55f702e202f3763a",
            children: [(0, g.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, g.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ia = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, g.jsx)(ra, {
              header: a,
              children: (0, g.jsx)(e, {
                ...s
              })
            })
          }
        },
        ca = e => {
          let {
            prevRef: a,
            nextRef: s,
            onNextClicked: t,
            onPrevClicked: r,
            onNextKeyDown: i
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled98f432655f19a842390597c4434db06",
            children: [(0, g.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlec06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, g.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlea4f98606cdef508fbd2e69c5564a92d8",
              ref: s,
              onClick: t,
              onKeyDown: i,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        na = ia((e => {
          let {
            description: a,
            slideChildren: s,
            size: t,
            title: r,
            name: i,
            customSlidesPerView: c = null,
            customSpaceBetween: o = null,
            slideClass: l,
            style: d,
            className: m,
            cardSizeBreakpoints: u,
            customAspectRatio: f,
            titleBadge: p
          } = e;
          const {
            track: _
          } = (0, F.useGtmTrack)(), k = (0, n.useRef)(null), b = (0, n.useRef)(null), v = (0, n.useRef)(null), [w, h] = (0, n.useState)(null), [x, y] = (0, n.useState)(!1), [N, j] = (0, n.useState)(null), [S, C] = (0, n.useState)(), [I, M] = (0, n.useState)(), {
            ref: L,
            inView: E
          } = (0, q.cD)({
            threshold: .6
          }), [z, P] = (0, n.useState)(!1), [V, D] = (0, n.useState)(null), [A, $] = (0, n.useState)(!1), [O, R] = (0, n.useState)(0), [G, U] = (0, n.useState)(0);
          (0, n.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, n.useEffect)((() => {
            const e = () => {
              S && !(0, sa.isEmpty)(S) && S?.height > 0 && S?.height !== O && R(S?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [S]);
          const H = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          (0, n.useEffect)((() => {
            if (!k.current) return;
            const e = () => {
              if (k.current) {
                const e = c || Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view")),
                  a = c ? 1 : Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k, c]), (0, n.useEffect)((() => {
            if (!s) return;
            let e = !1;
            s.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            })), P(e);
            const a = s.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && A ? null : (0, g.jsx)(B.Ky, {
              className: "rockstargames-modules-core-newswire-articlef58e79e329504e170dc9cb4595ea011b",
              onFocus: () => X(a),
              children: e
            }, Symbol(a).toString())));
            h(a)
          }), [s, A]), (0, n.useEffect)((() => {
            M({
              nextEl: v.current,
              prevEl: b.current
            })
          }), [v, b]), (0, n.useEffect)((() => {
            E && !x && s && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: (i || r).toLowerCase(),
              element_placement: (i || r).toLowerCase()
            }), y(!0))
          }), [E, s]);
          let W = "custom" === t ? {
            "--custom-aspect-ratio": f,
            ...d
          } : {
            ...d
          };
          const K = 0 !== O ? `${O}px` : "100%";
          W = {
            ...W,
            "--carousel-cards-height": K,
            "--carousel-nav-opacity": G
          };
          const X = e => {
            S?.slideTo(e)
          };
          return (0, g.jsxs)("div", {
            className: (0, T.classList)("rockstargames-modules-core-newswire-articled0c3d91603036c852633939015a6cb48", m),
            "data-size": t,
            "data-sm": u?.sm ? u?.sm : t,
            "data-md": u?.md ? u?.md : t,
            "data-lg": u?.lg ? u?.lg : t,
            "data-xl": u?.xl ? u?.xl : t,
            "data-xxl": u?.xxl ? u?.xxl : t,
            "data-has-covercard": z,
            "data-new-carousel-nav": !0,
            ref: k,
            style: W,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleddeb75a59ed783554b94e8298897a1fa",
              ref: L
            }), z && A && (0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled5f00d41fdd2c864a0eb9e069cf08db0",
              children: V
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlecdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, g.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlefb8e207418c783fc2f53b44c19faedca",
                children: [(0, g.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb779ba2045a88302079083935c90f7b3",
                  children: [!z && r && (0, g.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articleedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, g.jsx)("h2", {
                      children: r
                    }), p && (0, g.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articled7a4aaeb70d68fdee39312192efb990b",
                      children: p
                    })]
                  }), (0, g.jsx)(ca, {
                    prevRef: b,
                    nextRef: v,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = S?.slides[S?.activeIndex].querySelector('a, button, [role="button"]');
                        a && (e.preventDefault(), a.focus())
                      }
                    }
                  })]
                }), a && (0, g.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, g.jsx)(B.wx, {
              slidesPerView: N,
              onInit: e => {
                C(e);
                const a = setInterval((() => {
                  const {
                    height: s
                  } = e;
                  s > 0 && (R(s), U(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: I,
              modules: [aa._2],
              breakpoints: H,
              slideClass: (0, T.classList)("swiper-slide", l),
              onSlideNextTransitionEnd: () => {
                _({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: r?.toLowerCase() ?? "",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: r?.toLowerCase() ?? "",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: r?.toLowerCase() ?? "",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: w
            }) : ""]
          })
        }), null),
        oa = {
          pillBtn: "rockstargames-modules-core-newswire-articled008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-core-newswire-articlebe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-core-newswire-articled1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-core-newswire-articlec9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-core-newswire-articlea271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-core-newswire-articleae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-core-newswire-articlef663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-core-newswire-articlef9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-core-newswire-articled1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-core-newswire-articlefb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-modules-core-newswire-articled4e5e627f7968400413c3b578b1b3143",
          primaryBtn: "rockstargames-modules-core-newswire-articleff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-modules-core-newswire-articlea0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-modules-core-newswire-articlebe305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-modules-core-newswire-articlef625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-core-newswire-articlee999b9cecfe233bcee8cab8682fb96bf"
        },
        la = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        da = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        },
        ma = e => {
          let {
            title: a = "",
            mobileImg: s,
            desktopImg: t
          } = e;
          const r = (0, T.useGetCdnSource)(s ?? null),
            i = (0, T.useGetCdnSource)(t ?? r);
          return (0, g.jsx)("div", {
            className: oa.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, g.jsx)("h5", {
              children: a
            })
          })
        },
        ua = e => {
          let {
            title: a = "Membership Rewards",
            name: s = "Membership Rewards",
            shards: t
          } = e;
          const [r, i] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            t && i(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: s,
                shardImg: t
              } = a, {
                mobile: r,
                desktop: i
              } = t;
              return e.push((0, g.jsx)(ma, {
                title: s,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [t]), r ? (0, g.jsx)("div", {
            className: oa.shardsCarousel,
            children: (0, g.jsx)(na, {
              title: a,
              name: s,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ga = e => {
          let {
            animated: a = !1,
            ctas: s = [],
            expandingButtonLabel: t = "Subscribe"
          } = e;
          const [r, i] = (0, n.useState)([]), [c, o] = (0, n.useState)([]);
          return (0, n.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = s.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            i(e), o(a)
          }), [s]), r.length ? (0, g.jsx)(Re.q.div, {
            variants: a ? da : void 0,
            children: (0, g.jsx)(Qe, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: r,
              children: !!c.length && (0, g.jsx)(Re.q.div, {
                variants: da,
                children: (0, g.jsx)(z, {
                  buttons: c,
                  className: oa.buttonGroup
                })
              })
            })
          }) : (0, g.jsx)(g.Fragment, {
            children: !!c.length && (0, g.jsx)(Re.q.div, {
              variants: da,
              children: (0, g.jsx)(z, {
                buttons: c,
                className: oa.buttonGroup
              })
            })
          })
        },
        fa = e => {
          let {
            animated: a = !1,
            brands: s = [],
            ctas: t = [],
            cta: r = [],
            description: i = "",
            expandingButtonLabel: c = "Subscribe",
            title: n = "",
            legalText: o
          } = e;
          return (0, g.jsxs)(Re.q.div, {
            className: oa.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? la : void 0,
            children: [(0, g.jsx)(Re.q.div, {
              variants: a ? da : void 0,
              children: (0, g.jsx)(j, {
                brands: s
              })
            }), (n || i) && (0, g.jsxs)(Re.q.div, {
              className: oa.descriptions,
              variants: a ? da : void 0,
              children: [n && (0, g.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              }), i && (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })]
            }), !!r.length && (0, g.jsx)("div", {
              className: oa.ctaBlock,
              children: (0, g.jsx)(T.TinaParser, {
                components: {
                  Cta: ke,
                  ExpandingPlatformButton: Qe
                },
                tina: {
                  payload: {
                    content: r
                  }
                }
              })
            }), !!t.length && (0, g.jsx)("div", {
              className: oa.ctaBlock,
              children: (0, g.jsx)(ga, {
                animated: a,
                ctas: t,
                expandingButtonLabel: c
              })
            }), o && (0, g.jsx)(Re.q.div, {
              className: oa.legalText,
              variants: a ? da : void 0,
              children: (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        pa = e => {
          let {
            animated: a = !1,
            backgroundImage: s,
            brands: t = [],
            className: r,
            ctas: i = [],
            cta: c,
            description: n = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: l,
            layeredImageSettings: d,
            legalText: m,
            shardsSection: u = {},
            theme: f = "gen9",
            title: p = ""
          } = e;
          const _ = (e => {
              if (!e) return null;
              const a = {},
                s = new Map([
                  ["xsmall", "xs"],
                  ["small", "sm"],
                  ["medium", "md"],
                  ["large", "lg"],
                  ["xlarge", "xl"],
                  ["horizontal", "--layered-horizontal-offset-"],
                  ["vertical", "--layered-vertical-offset-"],
                  ["imageWidth", "--layered-image-width-"]
                ]);
              return Object.entries(e).forEach((e => {
                const [t, r] = e;
                if (s.has(t)) {
                  const e = s.get(t);
                  Object.entries(r).forEach((r => {
                    const [i, c] = r;
                    if (s.has(t) && s.has(i)) {
                      const t = `${s.get(i)}${e}`;
                      a[t] = "imageWidth" !== i ? c ? `${c}px` : "0px" : c ? `${c}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            k = (0, T.useGetCdnSource)(s?.mobile?.full_src ?? null),
            b = (0, T.useGetCdnSource)(s?.desktop?.full_src ?? k),
            v = (0, T.useGetCdnSource)(l?.mobile?.full_src ?? null),
            w = (0, T.useGetCdnSource)(l?.desktop?.full_src ?? v);
          return (0, g.jsxs)(Re.q.div, {
            className: (0, T.classList)(oa.hero, r),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${k})`,
              "--layered-image-desktop": `url(${w})`,
              "--layered-image-mobile": `url(${v})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? la : void 0,
            "data-type": "hero",
            theme: f,
            children: [(0, g.jsxs)("div", {
              className: oa.images,
              children: [b && k ? (0, g.jsx)("div", {
                className: oa.background,
                style: s?.style ?? {}
              }) : "", v && w ? (0, g.jsx)("div", {
                className: oa.layered,
                style: d ? _ : {}
              }) : "", (0, g.jsx)("div", {
                className: oa.gradient
              })]
            }), (0, g.jsx)(fa, {
              animated: a,
              ctas: i,
              cta: c,
              description: n,
              expandingButtonLabel: o,
              title: p,
              brands: t,
              legalText: m
            }), u?.shards && (0, g.jsx)(ua, {
              ...u
            })]
          })
        },
        _a = e => {
          let {
            children: a,
            attributes: s = {},
            className: t = "",
            style: r = {}
          } = e;
          return (0, g.jsx)("span", {
            className: (0, T.classList)(t, s?.className, "rockstargames-modules-core-newswire-articlea7f106a8036d74ed9282a741476c6b5a"),
            style: (0, O.safeStyles)(r ?? s?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: ta().unescape(a)
            }
          })
        };
      var ka = s(53592);
      const ba = (0, o.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        va = {
          pillBtn: "rockstargames-modules-core-newswire-articlecb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-newswire-articlec951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-newswire-articlefa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-newswire-articleb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-newswire-articleedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-newswire-articlec4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-newswire-articlec7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-newswire-articlee3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-newswire-articlec646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-newswire-articlebcccd1077d13d7fe1585655e5c5f8363"
        },
        wa = (0, o.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: t,
            parent: r = "footer"
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)(), c = (0, m.useLocation)(), l = (0, o.useIntl)(), [d, u] = (0, o.getLocale)(), [p, _] = (0, n.useState)(!1), k = (0, n.useMemo)((() => (0, ka.c)()), []), b = (0, n.useCallback)((e => {
            let a = c.pathname;
            const s = a.split("/");
            return o.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), k.currentSite?.site === ka.U.www ? "en" === e ? `${window.location.origin}${a}${c.search}` : `${window.location.origin}/${e}${a}${c.search}` : `${window.location.origin}${a}${c.search}`
          }), [c]), v = (0, n.useRef)(null), [w, h] = (0, n.useState)(0), x = matchMedia("(hover: none) and (pointer: coarse)").matches, y = e => {
            if (t && t(!1), d.subdomaincom === e || "none" === e) return void(t && t(!1));
            const a = o.locales.find((a => a.subdomaincom === e));
            if (a) {
              const s = b(e);
              i({
                event: "cta_other",
                link_url: s,
                text: e,
                element_placement: r
              }), u(a.iso), window.location.href = s
            }
          };
          return (0, n.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === p && _(!1)
          }), [s]), (0, n.useEffect)((() => {
            v.current && h(v.current.scrollHeight)
          }), [v]), (0, g.jsxs)("div", {
            className: [va.languageSelector, p ? va.open : ""].join(" "),
            "data-theme": a,
            children: [x && "sc-menu" === a && (0, g.jsx)("div", {
              className: va.selectBoxWrapper,
              children: (0, g.jsxs)("select", {
                className: va.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  y(a)
                },
                "aria-label": l.formatMessage(ba.language_selector_default),
                children: [(0, g.jsx)("option", {
                  className: va.selectBoxOption,
                  value: "none",
                  children: (0, g.jsx)(o.FormattedMessage, {
                    ...ba.language_selector_default
                  })
                }), o.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, g.jsx)("option", {
                    className: va.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!x || "sc-menu" !== a) && (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!p), _(!p)
                },
                type: "button",
                "aria-label": l.formatMessage(ba.language_selector_default),
                children: [(0, g.jsx)("i", {}), (0, g.jsx)("span", {
                  children: (0, g.jsx)(o.FormattedMessage, {
                    ...ba.language_selector_default
                  })
                })]
              }), (0, g.jsx)("div", {
                className: va.linkWrapper,
                ref: v,
                style: {
                  "--ls-linkWrapper-opened-height": `${w}px`
                },
                children: (0, g.jsx)("div", {
                  className: va.links,
                  children: o.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, g.jsx)(f, {
                      to: b(a),
                      onClick: (t = a, () => {
                        y(t)
                      }),
                      tabIndex: p ? 0 : -1,
                      children: s
                    }, `desktop-${a}`);
                    var t
                  }))
                })
              })]
            })]
          })
        }), l),
        ha = {
          layeredImage: "rockstargames-modules-core-newswire-articlea29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-core-newswire-articleaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-core-newswire-articleca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-core-newswire-articlef0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-core-newswire-articlee03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-core-newswire-articlec4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-core-newswire-articleb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-core-newswire-articlee9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-core-newswire-articlee45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-core-newswire-articleed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-core-newswire-articlefaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-core-newswire-articleb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-core-newswire-articleba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-core-newswire-articleec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-core-newswire-articlea6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-core-newswire-articled7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-core-newswire-articleca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-core-newswire-articlebd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-core-newswire-articlefe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-core-newswire-articlebde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-core-newswire-articleb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-core-newswire-articleac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-core-newswire-articled63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-core-newswire-articled248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-core-newswire-articlea8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-core-newswire-articledcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-core-newswire-articleb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-core-newswire-articleadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-core-newswire-articlec73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-core-newswire-articlee650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-core-newswire-articleb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-core-newswire-articlee41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-core-newswire-articledb575e1d021e69ebb4265a29484e2888"
        },
        xa = e => {
          let {
            style: a,
            className: s
          } = e;
          const t = {
              ...a
            },
            r = a["--border-image-source"],
            i = (0, T.useGetCdnSource)(r || null);
          return r && (t["--border-image-source"] = `url(${i})`), (0, g.jsx)("div", {
            className: (0, T.classList)(ha.border, s),
            style: {
              ...t
            }
          })
        },
        ya = e => e?.images ? (0, g.jsx)("div", {
          className: (0, T.classList)(ha.layeredImage, ha[e?.variantClass], ha[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, g.jsxs)("div", {
            className: ha.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: s,
                paddingClass: t,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: c,
                positionClassY: n,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: u
              } = e;
              return (0, g.jsx)(he, {
                image: s,
                style: {
                  zIndex: o ?? a + 1
                },
                imageStyle: d,
                className: (0, T.classList)(l, u, ha.imageLayer, ha[t], ha[r], ha[i], ha[c], ha[n]),
                alt: m
              }, o ?? a + 1)
            })), e?.borderImage && (0, g.jsx)(xa, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Na = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, g.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        ja = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: t,
            splitter: r,
            image: i,
            style: c,
            className: n = "",
            attributes: o = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, g.jsx)(Na, {
            hero: d,
            children: (0, g.jsx)("figure", {
              children: (0, g.jsxs)("div", {
                className: (0, T.classList)("rockstargames-modules-core-newswire-articlecab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-modules-core-newswire-articlecefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, n),
                style: (0, O.safeStyles)({
                  ...c,
                  ...o?.style
                }),
                ...o,
                children: [(0, g.jsx)(he, {
                  image: i,
                  className: n
                }), (i?.badge || i?.discountTxt || a || t) && (0, g.jsx)(Ee, {
                  badge: i?.discountTxt ?? i?.badge ?? a ?? t,
                  badgeType: s,
                  splitter: i?.splitter ?? r,
                  role: i?.role ?? l
                }), i?.caption && (0, g.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: i.caption
                  }
                })]
              })
            })
          })
        },
        Sa = {
          pillBtn: "rockstargames-modules-core-newswire-articleeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-core-newswire-articled1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-core-newswire-articledc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-core-newswire-articleee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-core-newswire-articlefbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlef6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ca = e => {
          let {
            imageUrl: a,
            className: s,
            alt: t,
            style: r,
            lazy: i = !1,
            decoding: c = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, n.useState)(!1);
          return (0, g.jsxs)("div", {
            className: Sa.multiSourceContainer,
            children: [!l && (0, g.jsx)("img", {
              className: [s, Sa.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, g.jsx)("img", {
              className: [Sa.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                d(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: c
            })]
          });
          var m
        },
        Ta = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, g.jsx)(La, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        Ia = (e, a) => s => ((e, a, s) => (0, g.jsx)(Ta, {
          impressionTracking: s?.impressionTracking,
          gtm: s?.gtm,
          children: (0, g.jsx)(e, {
            ...a
          })
        }))(e, s, a),
        Ma = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        La = e => {
          let {
            threshold: a = .6,
            children: s,
            gtm: t = {}
          } = e;
          const {
            track: r
          } = (0, F.useGtmTrack)(), {
            ref: i,
            inView: c
          } = (0, q.cD)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [o, l] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            c && !o && (r({
              ...Ma,
              ...t
            }), l(!0))
          }), [c, i]), (0, g.jsx)("section", {
            ref: i,
            children: s
          })
        },
        Ea = {
          tag: "rockstargames-modules-core-newswire-articleed77774d2704bc0ebc0ac156542ae053"
        },
        za = e => {
          let {
            className: a,
            href: s,
            title: t,
            style: r
          } = e;
          const i = (0, g.jsxs)("div", {
            style: r,
            className: [Ea.tag, a].join(" "),
            children: [(0, g.jsx)("i", {}), t]
          });
          return void 0 !== s ? (0, g.jsx)(f, {
            to: s,
            children: i
          }) : i
        },
        Ba = {
          newswireBlock: "rockstargames-modules-core-newswire-articlea793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-core-newswire-articled50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-core-newswire-articlecc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articleffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-core-newswire-articlebbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-core-newswire-articlef88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-core-newswire-articlefa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-core-newswire-articlee380e8c67066df6f33fc018341ea96e5"
        },
        Pa = e => {
          let {
            section: a = "",
            index: s,
            post: t,
            noSpecialOrder: r = !1,
            focused: i
          } = e;
          const {
            track: c
          } = (0, F.useGtmTrack)(), [o] = (0, m.useSearchParams)(), l = t.preview_images_parsed.newswire_block, d = {
            default: 0 !== s || r ? l.square || l.d16x9 || l._fallback : l.d16x9 || l.square || l._fallback,
            mobile: l.square || l._fallback
          }, [u, p] = (0, O.usePreloadImg)(d.default), _ = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          }, k = (0, n.useCallback)((() => {
            c({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: s,
              element_placement: a
            })
          }), [t]);
          return (0, g.jsx)(f, {
            to: t.url,
            className: [Ba.newswireBlock, r ? Ba.newswireBlockNoSpecialOrder : "", null !== u ? Ba.startAnimation : ""].join(" "),
            focused: i,
            onClick: k,
            children: (0, g.jsxs)(g.Fragment, {
              children: [0 !== s || o.get("tag_id") ? (0, g.jsx)("div", {
                className: Ba.preview,
                style: _.default
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)("div", {
                  className: Ba.previewMobile,
                  style: _.mobile
                }), (0, g.jsx)("div", {
                  className: Ba.preview,
                  style: _.default
                })]
              }), (0, g.jsxs)("div", {
                className: Ba.info,
                children: [(0, g.jsxs)("div", {
                  className: Ba.top,
                  children: [t.primary_tags.length ? (0, g.jsx)(za, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, g.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, g.jsx)("h5", {
                  className: Ba.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Va = s(55492),
        Da = s.n(Va);
      const Aa = (0, O.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: s = "",
            tagId: t = null,
            metaUrl: r = "/newswire",
            t: i
          } = e;
          const {
            track: c
          } = (0, F.useGtmTrack)(), [o] = (0, m.useSearchParams)(), {
            tagId: l = null
          } = (0, m.useParams)(), [d, u] = (0, n.useState)(l ?? t ?? o.get("tag_id")), [f, p] = (0, n.useState)(1), [_, b] = (0, n.useState)([]), [v, w] = (0, n.useState)(null), {
            data: h
          } = (0, k.useQuery)(Da(), {
            variables: {
              tagId: Number(d),
              page: f,
              metaUrl: r
            },
            autoSetLoading: !0
          });
          return (0, n.useEffect)((() => {
            p(1), b([]), u(l ?? t ?? o.get("tag_id"))
          }), [o.get("tag_id")]), (0, n.useEffect)((() => {
            h && h.posts && h.posts.paging && w(h.posts.paging), h && h.posts && h.posts.results && b(_.concat(h.posts.results))
          }), [h]), _.length ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(Ra, {
              section: a,
              posts: _,
              relativeTo: s,
              noSpecialOrder: null !== d
            }), null !== v && v.nextPage ? (0, g.jsx)(C, {
              onClick: e => {
                p(f + 1), c({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        $a = {
          pillBtn: "rockstargames-modules-core-newswire-articleafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-core-newswire-articlebcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-core-newswire-articlea748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-core-newswire-articlec0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-core-newswire-articleb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Oa = (0, O.withTranslations)((e => {
          let {
            posts: a,
            t: s
          } = e;
          return (0, g.jsxs)("section", {
            className: $a.related,
            children: [(0, g.jsx)("h2", {
              children: s("Related Stories")
            }), (0, g.jsx)("div", {
              className: [$a.posts, 1 === a.length ? $a.just1post : ""].join(" "),
              children: a.map((e => (0, g.jsx)(Pa, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Fa = {
          newswireBlocks: "rockstargames-modules-core-newswire-articlec2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-core-newswire-articlec0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Ra = (0, O.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: s = !1,
            posts: t,
            gtmTrack: r,
            relativeTo: i
          } = e;
          const [c, o] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            if (!t.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((s, t) => {
              e.ecommerce.impressions.push({
                name: s.title,
                id: s.id,
                position: t + 1,
                list: a
              })
            })), r(e), o(t.length)
          }), [t.length]), (0, g.jsx)("div", {
            className: [Fa.newswireBlocks, s ? Fa.noSpecialOrder : "", Fa.contextHome].join(" "),
            children: t.map(((e, t) => (0, g.jsx)(Pa, {
              section: a,
              index: t,
              noSpecialOrder: s,
              post: e,
              focused: t === c
            }, e.id)))
          })
        }));
      var Ga = s(52256),
        Ua = s(77100),
        Ha = s(84296);
      const qa = (e, a) => {
          const s = e.tiers && e.tiers.every((e => e.isComplete)),
            t = a.tiers && a.tiers.every((e => e.isComplete));
          return s && !t ? 1 : !s && t ? -1 : 0
        },
        Wa = (0, o.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Ka = {
          pillBtn: "rockstargames-modules-core-newswire-articlee6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-core-newswire-articlee5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-core-newswire-articleeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-core-newswire-articlebf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-core-newswire-articlecfa711252c08391d3a0f1ecd8728a61a"
        },
        Xa = e => {
          let {
            tiers: a
          } = e;
          return (0, g.jsx)("div", {
            className: Ka.packCardTierIndicator,
            children: a?.map(((e, a) => (0, g.jsx)("div", {
              className: [Ka.tierIndicator, e.isComplete ? Ka.active : ""].join(" ")
            }, a)))
          })
        },
        Qa = {
          pillBtn: "rockstargames-modules-core-newswire-articlee2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-core-newswire-articleff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-core-newswire-articled6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-core-newswire-articleeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-core-newswire-articlefcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-core-newswire-articlea124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-core-newswire-articled42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-core-newswire-articlecbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-core-newswire-articled4649f3812d37e7407503d49dcaaba04"
        },
        Ya = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Za = e => {
          let {
            title: a,
            url: s,
            images: t,
            className: r,
            tiers: i,
            onClick: c,
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const {
            isMobile: u
          } = (0, O.useWindowResize)(), {
            loggedIn: f
          } = (0, F.useRockstarUser)(), {
            selectedCharacterTuple: p
          } = (0, F.useRockstarUserState)(), [_, k] = (0, n.useState)(!1), [b, v] = (0, n.useState)(d), [w, h] = (0, n.useState)(!1), x = (0, o.useIntl)(), y = !!i?.length;
          (0, n.useEffect)((() => {
            if (Array.isArray(p)) {
              const e = p?.[0];
              h((0, O.getGen9Consoles)().includes(e))
            }
          }), [String(p)]), (0, n.useEffect)((() => {
            if (i && i.length > 0) {
              const e = i.some((e => !e.isComplete));
              k(!e)
            } else k(!1)
          }), [i]);
          const N = `${u?t?.mobile:t?.desktop}?im=Resize,height=${l}`;
          return (0, O.usePreloadImg)(N, (() => v(!0))), (0, g.jsx)(m.NavLink, {
            className: [Qa.packCard, r, _ ? Qa.packCompleted : ""].join(" "),
            to: s,
            onClick: c,
            children: (0, g.jsxs)("div", {
              className: [Qa.packCardImageBox, b ? Qa.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              children: [_ && (0, g.jsxs)("div", {
                className: Qa.badge,
                children: [(0, g.jsx)("div", {
                  className: Qa.icon
                }), (0, g.jsx)("div", {
                  className: Qa.label,
                  children: x.formatMessage(Wa.pl_card_badge_content_complete)
                })]
              }), (0, g.jsxs)("div", {
                className: Qa.packCardTextBox,
                children: [(0, g.jsx)("h4", {
                  children: a
                }), f && !_ && w && (0, g.jsx)(Xa, {
                  tiers: y ? i : Ya
                })]
              })]
            })
          })
        },
        Ja = {
          pillBtn: "rockstargames-modules-core-newswire-articlec0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-core-newswire-articleff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-core-newswire-articleffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-core-newswire-articlef6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-core-newswire-articlea53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-core-newswire-articleb85775dc95fb3881171ee42e49076cbf"
        };
      Ua.w$.registerPlugin(Ha.Q);
      const es = e => {
          let {
            isHeaderVisible: a,
            packListItems: s,
            packCardClassName: t = Ja.packCard,
            packListClassName: r = Ja.packList,
            packGridClassName: i = Ja.packGrid,
            selectPackCard: c,
            sortFunction: o = qa
          } = e;
          const l = (0, n.useRef)(null),
            d = [...s].sort(o),
            [m, u] = (0, n.useState)(),
            [f, p] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            if (!0 === f) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              p(!0)
            }), 1e3);
            u(e)
          }), []), (0, Ha.Q)((() => {
            if (!1 !== f && l?.current) {
              const e = l.current.children;
              Ua.w$.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: Ua.ML.easeInOut
              })
            }
          }), {
            dependencies: [f, s],
            scope: l,
            revertOnUpdate: !0
          }), (0, g.jsx)("div", {
            className: [r, a ? Ja.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, g.jsx)("div", {
              ref: l,
              className: i,
              "data-testid": "pack-grid",
              children: d.map(((e, a) => {
                let {
                  id: s,
                  name: r,
                  title: i,
                  url: n,
                  images: o,
                  tiers: l
                } = e;
                return (0, g.jsx)(Za, {
                  title: i,
                  url: n,
                  className: t,
                  images: o,
                  tiers: l,
                  onClick: () => ((e, a, s, t, r) => {
                    c(e, a, s, t, r)
                  })(r, i, n, s, a)
                }, i)
              }))
            })
          })
        },
        as = {
          pillBtn: "rockstargames-modules-core-newswire-articledb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-modules-core-newswire-articleb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-modules-core-newswire-articlebfe6fefc1068ed81c8b38519a854285f"
        },
        ss = e => {
          let {
            title: a,
            onClick: s,
            selected: t
          } = e;
          return (0, g.jsx)("button", {
            type: "button",
            onClick: s,
            tabIndex: 0,
            "aria-label": a,
            className: [as.chipButton, t ? as.selected : ""].join(" "),
            children: (0, g.jsx)("div", {
              children: a
            })
          })
        };
      var ts;

      function rs() {
        return rs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, rs.apply(this, arguments)
      }
      const is = e => n.createElement("svg", rs({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ts || (ts = n.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var cs;

      function ns() {
        return ns = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, ns.apply(this, arguments)
      }
      const os = e => n.createElement("svg", ns({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), cs || (cs = n.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ls = {
          pillBtn: "rockstargames-modules-core-newswire-articlef5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-modules-core-newswire-articlef05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-modules-core-newswire-articleef8ca38f98b731ff5dfe07937b1bbe34"
        },
        ds = e => {
          let {
            direction: a,
            className: s,
            ...t
          } = e;
          return (0, g.jsxs)("button", {
            type: "button",
            className: [s, ls.navScrollButton].join(" "),
            ...t,
            children: ["left" === a && (0, g.jsx)(is, {}), "right" === a && (0, g.jsx)(os, {})]
          })
        },
        ms = (0, o.defineMessages)({
          pln_career_progress_unavailable: {
            id: "pln_career_progress_unavailable",
            defaultMessage: "Sorry, career progress pack cards are currently unavailable."
          },
          pln_career_progress_all_chip_title: {
            id: "pln_career_progress_all_chip_title",
            defaultMessage: "All"
          },
          pln_career_progress_header_signin_label: {
            id: "pln_career_progress_header_signin_label",
            defaultMessage: "Sign In"
          },
          pln_career_progress_header_signup_label: {
            id: "pln_career_progress_header_signup_label",
            defaultMessage: "Create An Account"
          },
          pln_career_progress_header_signup_account: {
            id: "pln_career_progress_header_signup_account",
            defaultMessage: "Don't have an account?"
          },
          pln_career_progress_link_console_account: {
            id: "pln_career_progress_link_console_account",
            defaultMessage: "Link A Game Account"
          },
          pln_career_progress_link_console_account_title: {
            id: "pln_career_progress_link_console_account_title",
            defaultMessage: "Link a GTA Online Character"
          },
          pln_career_progress_link_console_account_description: {
            id: "pln_career_progress_link_console_account_description",
            defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account."
          },
          pln_career_progress_header_tooltip_aria_label: {
            id: "pln_career_progress_header_tooltip_aria_label",
            defaultMessage: "Tiers Info tooltip"
          },
          pln_career_progress_header_title: {
            id: "pln_career_progress_header_title",
            defaultMessage: "Career Progress"
          },
          pln_career_progress_header_body: {
            id: "pln_career_progress_header_body",
            defaultMessage: "Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PS5 and Xbox Series X|S."
          },
          pln_career_progress_header_body_gen9: {
            id: "pln_career_progress_header_body_gen9",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          pln_career_progress_percentage_chart_title: {
            id: "pln_career_progress_percentage_chart_title",
            defaultMessage: "Complete"
          },
          pln_career_progress_percentage_chart_title_full: {
            id: "pln_career_progress_percentage_chart_title_full",
            defaultMessage: "Your career progress is {percentage}% completed."
          },
          pln_scroll_left: {
            id: "pln_scroll_left",
            defaultMessage: "Scroll Left"
          },
          pln_scroll_right: {
            id: "pln_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        us = {
          pillBtn: "rockstargames-modules-core-newswire-articlec07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-modules-core-newswire-articleb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-modules-core-newswire-articleb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-modules-core-newswire-articlefde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-modules-core-newswire-articlee753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-modules-core-newswire-articlece3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-modules-core-newswire-articleef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-modules-core-newswire-articlef750c5a49886ae190c14e52aa026a417"
        },
        gs = e => {
          let {
            navItems: a,
            category: s,
            setCategory: t,
            chipsContainerClass: r = us.chipsContainer,
            previousChipButtonClass: i = "",
            nextChipBtnClass: c = ""
          } = e;
          const l = (0, o.useIntl)(),
            {
              track: d
            } = (0, F.useGtmTrack)(),
            {
              pathname: u
            } = (0, m.useLocation)(),
            f = (0, n.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, u]),
            [p, _] = (0, n.useState)(f),
            [k, b] = (0, n.useState)(!1),
            [v, w] = (0, n.useState)(!1),
            [h, x] = (0, n.useState)(!1),
            y = (0, n.useRef)(null),
            N = (0, n.useRef)(null),
            j = (0, n.useRef)(null),
            S = (0, n.useCallback)(((e, a) => {
              j.current && j.current.slideTo(e), _(e), C(`Career Progress Nav > ${a}`)
            }), [d]),
            C = (e, a) => {
              d({
                event: "component_tab_click",
                event_action: "click",
                event_category: "tab",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            };
          (0, n.useEffect)((() => {
            t(p)
          }), [p]);
          const I = e => {
            e.isEnd ? w(!0) : w(!1), e.isBeginning ? x(!0) : x(!1)
          };
          return (0, n.useEffect)((() => {
            j.current && ((j.current.wrapperEl.clientWidth || 0) > (j.current.el.clientWidth || 0) ? (b(!0), j.current.params.centeredSlides = !0, j.current.params.centeredSlidesBounds = !0) : (b(!1), j.current.params.centeredSlides = !1, j.current.params.centeredSlidesBounds = !1))
          }), [j.current?.wrapperEl.clientWidth, j.current?.el.clientWidth]), (0, g.jsxs)("div", {
            className: r,
            children: [!h && k && (0, g.jsx)("div", {
              ref: N,
              className: (0, T.classList)(us.previousChipNavButton, i),
              children: (0, g.jsx)(ds, {
                direction: "left",
                className: us.previousNavIcon,
                onClick: () => {
                  j.current && (j.current?.slidePrev(), j.current.isBeginning ? x(!0) : x(!1), d({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(ms.pln_scroll_left)
              })
            }), (0, g.jsx)("div", {
              className: us.chips,
              children: (0, g.jsx)(B.wx, {
                onBeforeInit: e => j.current = e,
                onInit: I,
                className: us.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: p,
                onSlideChange: I,
                onResize: I,
                children: a.map(((e, a) => {
                  let {
                    title: s
                  } = e;
                  return (0, g.jsx)(B.Ky, {
                    children: (0, g.jsx)(ss, {
                      title: s,
                      onClick: () => S(a, s),
                      selected: p === a
                    })
                  }, s)
                }))
              })
            }), !v && k && (0, g.jsx)("div", {
              ref: y,
              className: (0, T.classList)(us.nextChipNavButton, c),
              children: (0, g.jsx)(ds, {
                direction: "right",
                className: us.nextNavIcon,
                onClick: () => {
                  j.current && (j.current?.slideNext(), j.current.isEnd ? w(!0) : w(!1), d({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(ms.pln_scroll_right)
              })
            })]
          })
        },
        fs = e => {
          let {
            navItems: a,
            onNavItemClick: s,
            isOpen: t,
            isHeaderVisible: r
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)(), [c, o] = (0, n.useState)(0), l = (0, n.useCallback)(((e, t) => {
            d(`Secondary Nav > ${a[c].title} > ${e}`, t), s()
          }), [a, s, c, i]), d = (e, a) => {
            i({
              event: "nav_click",
              event_action: "click",
              event_category: "nav",
              event_label: e,
              text: e.split(">").pop()?.trim() || "",
              link_url: a,
              element_placement: e
            })
          };
          return (0, g.jsx)(Re.q.div, {
            className: "rockstargames-modules-core-newswire-articleaa2ce15f29ac99fe06895664698bb6cc",
            initial: {
              height: 0
            },
            animate: {
              height: t ? "100dvh" : 0
            },
            transition: {
              ease: "easeInOut",
              duration: .4
            },
            children: (0, g.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlef2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec5288c05172905ec86e3fb56c010d6d3",
                children: (0, g.jsx)(gs, {
                  navItems: a,
                  category: a[c]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-modules-core-newswire-articlec8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-modules-core-newswire-articlee9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef1adea94eb32de966a0e622247370f4e",
                children: (0, g.jsx)(es, {
                  isHeaderVisible: r,
                  packListItems: a[c]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        ps = "rockstargames-modules-core-newswire-articlec54c374409e11d1429ce99457cbf7441",
        _s = e => {
          let {
            children: a,
            data: s,
            onPageUpdate: t,
            page: r,
            className: i
          } = e;
          return (0, g.jsx)("a", {
            href: "#",
            className: r === s.page ? `rockstargames-modules-core-newswire-articlec0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), t(r)
            },
            children: a
          })
        },
        ks = e => {
          let {
            data: a,
            onPageUpdate: s,
            className: t
          } = e;
          if (1 === a.pageCount) return null;
          const r = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, s) => s + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, g.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlea626faab2a5a03e3466dda5c79960575 ${t??""}`,
            children: [a.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(_s, {
                data: a,
                onPageUpdate: s,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, g.jsx)("div", {
                className: ps,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, g.jsx)(_s, {
              data: a,
              onPageUpdate: s,
              page: e,
              className: t,
              children: e
            }, e))), a.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [r.slice(-1)[0] + 1 < a.pageCount ? (0, g.jsx)("div", {
                className: ps,
                children: "..."
              }) : "", (0, g.jsx)(_s, {
                data: a,
                onPageUpdate: s,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var bs = s(77616);
      const vs = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: s
          } = (0, bs.oZ)();
          return (0, n.useLayoutEffect)((() => {
            if (!s) return;
            const e = setInterval((() => {
              s.update()
            }), 500);
            return () => clearInterval(e)
          }), [s]), a
        },
        ws = {
          parallaxWrapper: "rockstargames-modules-core-newswire-articledb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-core-newswire-articled520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-core-newswire-articlef008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-core-newswire-articlecb5937d1a102ac4a66c4e373e6253946"
        },
        hs = e => {
          let {
            scrollAxis: a = "vertical",
            size: s = "",
            style: t = {},
            children: r
          } = e;
          return (0, g.jsx)(bs.qK, {
            scrollAxis: a,
            children: (0, g.jsx)(vs, {
              children: (0, g.jsx)("div", {
                className: (0, T.classList)(ws.parallaxWrapper, ws[s]),
                style: t,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, s) => (0, n.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: s
                  }
                }))) : (0, g.jsx)("div", {})
              })
            })
          })
        },
        xs = e => {
          let {
            layers: a = [],
            displayClass: s = "",
            style: t = {}
          } = e;
          const r = (0, T.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const i = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, g.jsx)(bs.Sr, {
            className: (0, T.classList)("rockstargames-modules-core-newswire-articleb8c85703a3c76902e49a61a6afcb81bc", s),
            layers: i,
            style: t
          })
        },
        ys = "rockstargames-modules-core-newswire-articlec4aa8e5d29b433c400796d0c493a9a4d",
        Ns = e => {
          let {
            minOffset: a = 0,
            maxOffset: s = 0,
            scrollAxis: t = "vertical",
            displayClass: r = "",
            style: i = {},
            children: c
          } = e;
          return "horizontal" === t ? (0, g.jsx)(bs.mw, {
            x: [a, s],
            className: (0, T.classList)(ys, r),
            styleOuter: i,
            children: c
          }) : (0, g.jsx)(bs.mw, {
            y: [a, s],
            className: (0, T.classList)(ys, r),
            styleOuter: i,
            children: c
          })
        },
        js = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: s(66452),
                alt: "PC"
              } : {
                src: s(80804),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: s(14120),
                alt: "PS4"
              } : {
                src: s(70564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: s(33788),
                alt: "PS5"
              } : {
                src: s(62756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: s(37284),
                alt: "Xbox One"
              } : {
                src: s(12064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: s(19916),
                alt: "Xbox Series X|S"
              } : {
                src: s(7748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Ss = e => s(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        Cs = (0, o.defineMessages)({
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
        Ts = {
          pillBtn: "rockstargames-modules-core-newswire-articlee4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-newswire-articleeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-newswire-articledf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-newswire-articlec1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-newswire-articlee79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-newswire-articlec721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-newswire-articleeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-newswire-articleb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-newswire-articlef1e0bcba6214698c490b8201bbd850b7"
        },
        Is = (0, o.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const t = (0, o.useIntl)(),
            {
              platform: r,
              platformUsername: i,
              mugshotUrl: c,
              stats: l
            } = a,
            [d, m] = (0, n.useState)(c),
            u = js(r, "large");
          return (0, g.jsxs)("div", {
            className: Ts.scCharacterCard,
            children: [(0, g.jsx)("div", {
              className: Ts.scAvatar,
              "data-size": "small",
              children: (0, g.jsx)("img", {
                src: d,
                alt: t.formatMessage(Cs.profile_selector_mugshot, {
                  userName: i
                }),
                onError: () => {
                  m(s(71084))
                }
              })
            }), (0, g.jsx)("div", {
              className: Ts.scCharacterStats,
              children: (0, g.jsxs)("div", {
                className: Ts.scCharNames,
                children: [(0, g.jsx)("img", {
                  src: u.src,
                  alt: u.alt
                }), (0, g.jsx)("div", {
                  className: Ts.scUserName,
                  "data-size": "small",
                  children: i
                }), (0, g.jsx)("div", {
                  className: Ts.scRp,
                  children: (0, g.jsxs)("div", {
                    className: Ts.scRpLevel,
                    children: [(0, g.jsx)("img", {
                      className: Ts.scRpIcon,
                      src: Ss(l.overview.rank.value),
                      alt: t.formatMessage(Cs.profile_selector_rp_icon)
                    }), (0, g.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), l);
      var Ms = s(92104);
      const Ls = (0, k.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Es = Ls("languageSelectorOpenedReactive", !1),
        zs = e => Es(e),
        Bs = Ls("activeSubNavIdReactive", -1),
        Ps = e => Bs(e),
        Vs = Ls("subNavExtraHeightReactive", -1),
        Ds = e => Vs(e),
        As = Ls("scNavOpenedReactive", !0),
        $s = e => As(e),
        Os = Ls("charListHiddenReactive", !0),
        Fs = e => Os(e),
        Rs = () => {
          const e = (0, k.useReactiveVar)(Es),
            a = (0, k.useReactiveVar)(Bs),
            s = (0, k.useReactiveVar)(Vs),
            t = (0, k.useReactiveVar)(As),
            r = (0, k.useReactiveVar)(Os);
          return (0, n.useEffect)((() => {
            r || (e && zs(!1), t && ($s(!1), Ps(-1)))
          }), [r]), (0, n.useEffect)((() => {
            !e && r && (t || $s(!0))
          }), [e, r]), (0, n.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: zs,
            activeSubNavId: a,
            setActiveSubNavId: Ps,
            subNavExtraHeight: s,
            setSubNavExtraHeight: Ds,
            scNavOpened: t,
            setScNavOpened: $s,
            charListHidden: r,
            setCharListHidden: Fs
          })), [e, a, s, t, r])
        };
      var Gs = s(69760),
        Us = s.n(Gs),
        Hs = s(9860);
      const qs = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Ws = e => ({
          text: e.formatMessage(Cs.sc_link_help),
          target: "_self",
          ga: {
            ...qs,
            text: Cs.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Cs.sc_link_support),
            location: {
              domain: ka.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Cs.sc_link_legal),
            location: {
              domain: ka.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Cs.sc_link_privacy_policy),
            location: {
              domain: ka.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Cs.sc_link_cookies_policy),
            location: {
              domain: ka.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Cs.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_do_not_sell_my_information),
            location: {
              domain: ka.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Ks = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: r,
            ga: i,
            dataTestId: c,
            isSubLink: n,
            hasNotifications: l = !1,
            onClickCallback: d = (() => {}),
            tabIndex: u,
            reloadDocument: f = !1
          } = e;
          const {
            track: p
          } = (0, F.useGtmTrack)(), _ = (0, ka.c)(), k = (0, o.useIntl)();
          let b = t;
          r && (b = r.domain === _.currentSite?.site ? r.path : `https://${_.sites[r.domain]}.rockstargames.com${r.path}`);
          const v = {
            ...i,
            link_url: b
          };
          return (0, g.jsxs)(m.Link, {
            className: n ? "rockstargames-modules-core-newswire-articlefdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-core-newswire-articlecbc80932118c48d8ec14448d8913d068",
            "data-testid": c || "menuLink",
            title: a,
            to: b,
            target: s,
            rel: "noreferrer",
            reloadDocument: f,
            tabIndex: u,
            onClick: e => {
              p(v), d(e)
            },
            children: [a, l && (0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea2d268c9fb03a7271b47de447d663da9",
              children: (0, g.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecf5a6b05c52c6c4faf3236055d4670c3",
                children: k.formatMessage(Cs.nofications_new)
              })
            })]
          })
        },
        Xs = e => {
          let {
            id: a,
            text: s,
            target: t,
            href: r,
            location: i,
            ga: c,
            hasNotifications: o = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: u,
            setSubNavExtraHeight: f,
            reloadDocument: p = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, O.useWindowResize)(), {
            track: v
          } = (0, F.useGtmTrack)(), {
            navOpen: w
          } = (0, F.useRockstarUserState)(), h = (0, n.useRef)(null), [x, y] = (0, n.useState)(0), [N, j] = (0, n.useState)(0), [S, C] = (0, n.useState)(!0);
          return (0, n.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, n.useEffect)((() => {
            if (!h.current) return;
            y(h?.current?.scrollHeight);
            const e = window.getComputedStyle(h.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [h, k, b]), d.length > 0 ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("button", {
              className: "rockstargames-modules-core-newswire-articleaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: s,
              tabIndex: w ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), v(c), m === a ? (u(-1), f(0)) : (u(a), f(x + N + N))
              },
              children: [(0, g.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlefd722aa4f6d05656ee6e37f952bd13d0",
                children: s
              }), (0, g.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlebe674f27adc299eab348b49f71429b71"
              })]
            }, s), (0, g.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articleff1911053a3515534dd825554a85909e",
              ref: h,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${x}px`
              },
              children: d.map((e => (0, n.createElement)(Ks, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !w ? -1 : 0
              })))
            })]
          }) : (0, g.jsx)(Ks, {
            text: s,
            target: t,
            href: r,
            location: i,
            ga: c,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: w ? 0 : -1,
            reloadDocument: p
          })
        },
        Qs = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: s,
            windowHeight: t
          } = (0, O.useWindowResize)(), r = (0, o.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: c,
            activeSubNavId: l,
            setActiveSubNavId: d,
            subNavExtraHeight: u,
            setSubNavExtraHeight: f
          } = Rs(), {
            setSelectedCharacterTuple: p,
            navOpen: _
          } = (0, F.useRockstarUserState)(), k = (0, O.useLocale)(), b = (0, O.toScLocaleString)(k), [v, w] = (0, n.useState)(""), h = (0, m.useLocation)(), x = `${a.login}?returnUrl=${v}&lang=${b}`, y = `${a.signup}&returnUrl=${v}&lang=${b}`, N = (0, n.useMemo)((() => (0, ka.c)()), []), j = (0, n.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(Cs.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Cs.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Cs.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: Cs.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Ws(e)])(r, x, y);
            return e
          }), [r, x, y, N]), [S, C] = (0, n.useState)(0), T = (0, n.createRef)(), I = () => {
            if (T.current) {
              const {
                current: e
              } = T, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, n.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            w(e)
          }), [h]), (0, n.useEffect)((() => {
            p(!1)
          }), []), (0, n.useEffect)((() => {
            I(), Us()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [s, t]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articleb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: T,
                style: {
                  "--scNavWrap-max-height": `${u+S}px`
                },
                children: j.map((e => (0, n.createElement)(Xs, {
                  ...e,
                  activeSubNavId: l,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: f,
                  key: e.text
                })))
              })
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: _ ? null : "hidden"
              },
              children: (0, g.jsx)(Hs.LanguageSelector, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: i,
                setLanguageSelectorOpened: e => {
                  d(-1), c(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Ys = e => {
          let {
            characterData: a,
            setMobileCardWidth: t,
            tabIndex: r
          } = e;
          const i = (0, o.useIntl)(),
            {
              currentCharId: c,
              setCurrentCharId: l
            } = (0, F.useRockstarUserState)(),
            {
              track: d
            } = (0, F.useGtmTrack)(),
            m = (0, n.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: p,
              stats: _
            } = a,
            [k, b] = (0, n.useState)(p),
            [v] = (0, n.useState)(a.index),
            w = js(u, "large"),
            h = c === a.index;
          return (0, n.useEffect)((() => {
            m.current && t && t(m?.current?.offsetWidth)
          }), [m]), (0, g.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articled76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": h,
            onClick: e => {
              e.stopPropagation(), l(v);
              let a = "";
              "pc" === u ? a = "PC" : "ps4" === u ? a = "PS4" : "ps5" === u ? a = "PS5" : "xboxone" === u ? a = "Xbox One" : "xboxsx" === u && (a = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: v
              })
            },
            ref: m,
            tabIndex: r,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, g.jsx)("img", {
                src: k,
                alt: i.formatMessage(Cs.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  b(s(71084))
                }
              })
            }), (0, g.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, g.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlee9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, g.jsx)("img", {
                  src: w.src,
                  alt: w.alt
                }), (0, g.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlea5e3df42966a50f3dd88bbcb57536617",
                children: (0, g.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6776312350028898320ba59145a39be",
                  children: [(0, g.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleb266652910ad34c0e8e097b212a958f0",
                    src: Ss(_.overview.rank.value),
                    alt: i.formatMessage(Cs.profile_selector_rp_icon)
                  }), (0, g.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Zs = {
          pillBtn: "rockstargames-modules-core-newswire-articled9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-newswire-articlebc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-newswire-articleb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-newswire-articlec15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-newswire-articlea8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-newswire-articlec91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-newswire-articleda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-newswire-articled7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-newswire-articled5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-newswire-articleb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-newswire-articlea581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-newswire-articlebdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-newswire-articledc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-newswire-articleb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-newswire-articlef17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-newswire-articlef14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-newswire-articleb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-newswire-articleec696aafed90a7a4c69dc53da0a5bb36"
        },
        Js = e => {
          let {
            character: a,
            platformTag: t
          } = e;
          const {
            data: r
          } = (0, F.useRockstarUser)(), {
            track: i
          } = (0, F.useGtmTrack)(), c = (0, o.useIntl)(), [l, d] = (0, n.useState)([]), [m, u] = (0, n.useState)(null), [f, p] = (0, n.useState)(null), [_, k] = (0, n.useState)(!1), [b, v] = (0, n.useState)(-1), [w, h] = (0, n.useState)([]), [x, y] = (0, n.useState)(0), N = s(71084), [j, S] = (0, n.useState)("0"), [C, T] = (0, n.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, g.jsx)("img", {
              src: N,
              alt: c.formatMessage(Cs.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [L, E] = (0, n.useState)((0, g.jsx)("img", {
            className: Zs.scAvatarImg,
            src: a.mugshotUrl,
            alt: c.formatMessage(Cs.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: M
          }));
          (0, n.useEffect)((() => {
            d(r.crews ?? [])
          }), [r]), (0, n.useEffect)((() => {
            E((0, g.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: M
            })), S(I(a.stats.overview.bank.value)), T(I(a.stats.overview.cash.value)), y(parseInt(a.stats.overview.rank.value))
          }), [a, r]), (0, n.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), p(e.crewColour), v(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [l]), (0, n.useEffect)((() => {
            const e = [];
            if (!_ && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, g.jsx)("div", {
                className: Zs.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            h(e)
          }), [b, _, f]);
          const z = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: t.alt,
              link_url: void 0
            })
          };
          return (0, g.jsxs)("div", {
            className: Zs.scProfileDetails,
            onClick: z,
            onKeyUp: z,
            role: "button",
            tabIndex: -1,
            children: [(0, g.jsxs)("div", {
              className: Zs.scAvatar,
              children: [L, (0, g.jsx)("div", {
                className: Zs.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, g.jsx)("img", {
                  src: t.src,
                  alt: t.alt
                })
              })]
            }), (0, g.jsxs)("div", {
              className: Zs.scProfileStats,
              children: [(0, g.jsx)("div", {
                className: Zs.scNames,
                children: (0, g.jsxs)("div", {
                  className: Zs.scTagsNames,
                  children: [(0, g.jsx)("span", {
                    className: Zs.scUserName,
                    children: a.platformUsername
                  }), m && (0, g.jsxs)("span", {
                    className: Zs.scCrewName,
                    "data-arrow-tag": _,
                    children: [m, !_ && (0, g.jsx)("div", {
                      className: Zs.scCrewRankBar,
                      children: w
                    })]
                  })]
                })
              }), (0, g.jsxs)("div", {
                className: Zs.scProgress,
                children: [(0, g.jsxs)("div", {
                  className: Zs.scRpLevel,
                  children: [(0, g.jsx)("img", {
                    className: Zs.scRpIcon,
                    src: Ss(x),
                    alt: c.formatMessage(Cs.profile_selector_rp_icon)
                  }), (0, g.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, g.jsxs)("div", {
                  className: Zs.scMoney,
                  children: [(0, g.jsxs)("span", {
                    className: Zs.scCash,
                    children: ["$", C]
                  }), (0, g.jsxs)("span", {
                    className: Zs.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        et = (e, a) => {
          const [s, t] = (0, n.useState)(0);
          return (0, n.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, r = s.getBoundingClientRect(), {
                width: i
              } = r;
              let c = i;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                c += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              t(c)
            }
          }), [e]), s
        },
        at = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: t = 17,
            slideChangeCallback: r = null,
            slideClickCallback: i = null,
            children: c = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, n.createRef)(),
            m = et(d, !1),
            [u, f] = (0, n.useState)(!1),
            [p, _] = (0, n.useState)(0),
            [k, b] = (0, n.useState)(0),
            [v, w] = (0, n.useState)([t]),
            [h, x] = (0, n.useState)(v[0]),
            [y, N] = (0, n.useState)(252),
            [j, S] = (0, n.useState)(0),
            [C, T] = (0, n.useState)([]),
            [I, M] = (0, n.useState)([]),
            [L, E] = (0, n.useState)(!1),
            z = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            B = e => {
              if (!0 === u || 0 === k || !0 === l) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > k ? 1 : -1,
                i = Math.abs(k - s);
              i > a ? (t > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                _(e), x(v[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), _(e), x(v[e]), r && r(e)
              })(), b(0)) : x(v[p] + i * t)
            },
            P = () => {
              !0 !== u && !0 !== l && (f(!0), !0 !== u && (x(v[p]), b(0)))
            };
          return (0, n.useEffect)((() => {
            const e = [];
            c.forEach((() => {
              e.push((0, n.createRef)())
            })), T(e)
          }), [c]), (0, n.useEffect)((() => {
            if (C.length < 1) return;
            N(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(s + a)
          }), [C]), (0, n.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              f(!1)
            }), s)
          }), [u, s]), (0, n.useEffect)((() => {
            w(c.map(((e, a) => (e => {
              let a = 0;
              const s = c.length;
              return 1 === s ? .5 * m - .5 * y - 2 * t + j : (0 === e && (a = t - e * y), e === s - 1 && s > 1 && (a = s * y * -1 + (m - (t - j))), e > 0 && e < s - 1 && (a = e * y * -1 + (.5 * m - .5 * y + .5 * j)), a)
            })(a)))), 1 === c.length ? E(!0) : E(!1)
          }), [d.current, c, m]), (0, n.useEffect)((() => {
            const e = (a = p, c.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            M(e)
          }), [c, p]), (0, n.useEffect)((() => {
            !0 !== o && !0 !== l || x(v[0])
          }), [l, o, v]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: z,
              onTouchMove: B,
              onTouchEnd: P,
              onMouseDown: z,
              onMouseMove: B,
              onMouseUp: P,
              onClick: () => {
                null !== i && i(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlea93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${h}px)`
                },
                children: c.map(((e, a) => (0, g.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlec013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === o && (0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleda8cfef07bf44e9a44839e2723ec61bb",
              children: I.map((e => (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlefe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        st = {
          pillBtn: "rockstargames-modules-core-newswire-articleaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-newswire-articled402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-newswire-articledde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-newswire-articlec47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-newswire-articlea4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-newswire-articleb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-newswire-articlea1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-newswire-articlea326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-newswire-articled19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-newswire-articlebb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-newswire-articlea7f1e2d78519eaf099bd43c6ad07abc9"
        },
        tt = (0, O.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: c,
            setLongCharList: l,
            isMobileMode: d,
            setIsMobileMode: u
          } = e;
          const {
            windowWidth: f,
            windowHeight: p
          } = (0, O.useWindowResize)(), _ = (0, o.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: v,
            activeSubNavId: w,
            setActiveSubNavId: h,
            subNavExtraHeight: x,
            setSubNavExtraHeight: y,
            scNavOpened: N,
            setScNavOpened: j
          } = Rs(), [S, C] = (0, n.useState)(""), T = (0, m.useLocation)(), {
            lsSettings: I
          } = (0, O.useRockstarWebLSSettings)(), {
            track: M
          } = (0, F.useGtmTrack)(), L = (0, k.useRockstarTokenPing)(), {
            data: E,
            loggedIn: z
          } = (0, F.useRockstarUser)(), {
            charactersNeeded: B,
            currentCharId: P,
            hasNotifications: V,
            navOpen: D,
            setCurrentCharId: A,
            setHasNotifications: $,
            setSelectedCharacterTuple: R,
            setUserData: G
          } = (0, F.useRockstarUserState)(), [U, H] = (0, n.useState)(null), [q, W] = (0, n.useState)(null), [K, X] = (0, n.useState)(!1), [Q, Y] = (0, n.useState)(!1), [Z, J] = (0, n.useState)(0), ee = (0, n.createRef)(), ae = et(ee, !1), se = (0, n.createRef)(), [te, re] = (0, n.useState)(0), [ie, ce] = (0, n.useState)([]), [ne, oe] = (0, n.useState)(244), le = (0, n.useRef)(null), de = (0, n.useMemo)((() => (0, ka.c)()), []), me = (0, n.useMemo)((() => ((e, a, s, t, r) => [{
            text: e.formatMessage(Cs.sc_link_activity_feed),
            location: {
              domain: ka.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Cs.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Cs.sc_link_settings),
              location: {
                domain: ka.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Cs.sc_link_messages),
              location: {
                domain: ka.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Cs.sc_link_game_activation),
              location: {
                domain: ka.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Cs.sc_link_notifications),
            location: {
              domain: ka.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...qs,
              text: Cs.sc_link_notifications.defaultMessage,
              location: {
                domain: ka.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_crews),
            location: {
              domain: ka.U.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...qs,
              text: Cs.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Cs.sc_link_my_friends),
              location: {
                domain: ka.U.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_import_friends),
              location: {
                domain: ka.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_find_friends),
              location: {
                domain: ka.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...qs,
                text: Cs.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Ws(e), {
            text: e.formatMessage(Cs.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...qs,
              text: Cs.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, E, V, S, window)), [_, a, E, V, S, de]), ue = () => {
            Y(i + ne * Z < ae)
          }, ge = () => {
            if (se.current) {
              const {
                current: e
              } = se, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), re(a + e)
              } else re(a)
            }
          };
          return (0, n.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === ka.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [T]), (0, n.useEffect)((() => {
            ce(E.characters[B] ?? [])
          }), [E, B]), (0, n.useEffect)((() => {
            E && G(E)
          }), [E]), (0, n.useEffect)((() => {
            const e = E?.characters.gtao;
            if (null !== z && !e.length) return void R(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, E, z]), (0, n.useEffect)((() => {
            (async () => {
              if (!E?.id) return;
              const {
                count: e
              } = await (0, O.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              $(e > 0)
            })()
          }), [E]), (0, n.useEffect)((() => {
            ue()
          }), [ne]), (0, n.useEffect)((() => {
            t(!0), u(f < 768), u(f < 768 || p < 649)
          }), [f, p]), (0, n.useEffect)((() => {
            let e = ie.length - 1;
            e < 0 && (e = 0), J(e);
            const a = ie.length > 0 ? ie[P] ?? ie[0] : null;
            if (!a) return;
            const s = null !== a ? js(a.platform, "large") : null;
            W(s), H(a), ie.length > 1 ? X(!0) : X(!1), l(ie.length - 1 > 3)
          }), [P, ie]), (0, n.useEffect)((() => {
            ue()
          }), [Z, d, f, ie]), (0, n.useEffect)((() => {
            ge(), Us()((() => {
              setTimeout(ge, 0)
            }), 300)
          }), [f, p]), (0, n.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== P && A(Math.max(0, Math.min(e, ie.length - 1)))
          }), [ie, I]), (0, g.jsxs)(g.Fragment, {
            children: [null !== U && "gtao" === B && (0, g.jsxs)("div", {
              className: st.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": _.formatMessage(Cs.profile_selector_profile_card),
              children: [(0, g.jsx)(Js, {
                s: st,
                character: U,
                platformTag: q
              }), !0 === K && (0, g.jsxs)("div", {
                className: st.scCharacterSelector,
                children: [(0, g.jsx)("button", {
                  className: st.scCharacterSelectBtn,
                  "aria-hidden": !D,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !s;
                    t(a), M({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": s,
                  children: (0, g.jsx)("span", {
                    children: (0, g.jsx)(o.FormattedMessage, {
                      ...Cs.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, g.jsx)("div", {
                  className: st.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": s,
                  ref: r,
                  children: ie.map((e => (0, g.jsx)(Ys, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === d && (0, g.jsx)("div", {
                  className: st.scCharacterList,
                  "data-single-item": 2 === ie.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": s,
                  ref: ee,
                  children: (0, g.jsx)(at, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      M({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: Q,
                    disableSwiper: Q,
                    children: ie.filter(((e, a) => a !== P)).map((e => (0, n.createElement)(Ys, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, g.jsxs)("nav", {
              className: st.scNav,
              "aria-hidden": !D,
              children: [(0, g.jsx)("button", {
                className: st.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": D,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, g.jsx)("span", {
                  children: E.nickname
                })
              }), (0, g.jsx)("div", {
                className: st.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--scNavWrap-max-height": `${te+x}px`
                },
                children: me.map(((e, a) => (0, n.createElement)(Xs, {
                  ...e,
                  id: a,
                  activeSubNavId: w,
                  setActiveSubNavId: h,
                  setSubNavExtraHeight: y,
                  key: e.text
                })))
              })]
            }), (0, g.jsx)("div", {
              className: st.scLanguageSelector,
              style: {
                visibility: D ? null : "hidden"
              },
              children: (0, g.jsx)(Hs.LanguageSelector, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        rt = {
          scMenu: "rockstargames-modules-core-newswire-articleebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-newswire-articlef333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-newswire-articlee3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-newswire-articleff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-newswire-articleba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-newswire-articled362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-newswire-articled8e443f5d0d9171449f5f1042f80aa17"
        },
        it = (0, o.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, O.useWindowResize)(), a = (0, o.useIntl)(), {
            languageSelectorOpened: t,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: i,
            scNavOpened: c,
            setScNavOpened: l,
            charListHidden: d,
            setCharListHidden: m
          } = Rs(), [u, f] = (0, n.useState)(!1), {
            navHidden: p = !1
          } = (0, k.useState)(), {
            loggedIn: _
          } = (0, F.useRockstarUser)(), {
            currentCharId: b,
            navOpen: v,
            setNavOpen: w,
            userData: h
          } = (0, F.useRockstarUserState)(), {
            track: x
          } = (0, F.useGtmTrack)(), [y, N] = (0, n.useState)(!1), j = (0, k.useReactiveVar)(F.scConfig), S = (0, n.useRef)(), [C, T] = (0, n.useState)(0), I = (0, n.createRef)(), [M, L] = (0, n.useState)(!1), [E, z] = (0, n.useState)(0), [B, P] = (0, n.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: D
          } = (0, O.useRockstarWebLSSettings)(), A = (0, n.useCallback)((e => {
            m(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, n.useEffect)((() => {
            null !== b && D.currentCharId !== b && V({
              key: "currentCharId",
              value: b
            }), !1 === _ ? V({
              key: "currentCharId",
              value: null
            }) : _ && !h && x({
              event: "account_synced"
            })
          }), [b, _]), (0, n.useEffect)((() => {
            S.current && (!1 === d && !1 === y && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === d && (S.current.style.height = null))
          }), [d, S, y]), (0, n.useEffect)((() => {
            const e = () => {
                w(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, n.useEffect)((() => {
            w(!1), A(!0)
          }), [p]), (0, n.useEffect)((() => {
            if (I.current) {
              const {
                current: e
              } = I, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [I]), (0, n.useEffect)((() => {
            P(window.navigator.userAgent.includes("Mac"))
          }), []), (0, n.useEffect)((() => {
            I.current && f(I?.current?.scrollHeight >= e)
          }), [I, e]), (0, n.useEffect)((() => {
            v || (i(-1), r(!1))
          }), [v]), (0, n.useEffect)((() => {
            t && (d || A(!0), c && (l(!1), i(-1)))
          }), [t]), (0, n.useEffect)((() => {
            c && (t && r(!1), d || A(!0))
          }), [c]), null === _ ? null : (0, g.jsxs)(Ms.c, {
            enabled: !!v,
            removeScrollBar: !1,
            children: [(0, g.jsxs)("div", {
              className: [rt.scMenu, v ? rt.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": B,
              "data-scroll-mode": u,
              ref: I,
              "aria-hidden": !v,
              children: [(0, g.jsx)("button", {
                className: rt.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === E) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(E - a) > 1 && (z(0), w(!1))
                },
                children: (0, g.jsx)("img", {
                  className: rt.dragHandle,
                  src: s(82708),
                  alt: a.formatMessage(Cs.sc_menu_drag_handle)
                })
              }), _ ? (0, g.jsx)(tt, {
                sc: j,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: S,
                menuPadding: C,
                longCharList: y,
                setLongCharList: N,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, g.jsx)(Qs, {
                sc: j,
                navOpen: v
              })]
            }), (0, g.jsx)("div", {
              className: [rt.scOverlay, v ? rt.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), l),
        ct = s(71084),
        nt = s(29314),
        ot = (0, o.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, o.useIntl)(),
            {
              data: t
            } = (0, F.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: c,
              setNavOpen: l
            } = (0, F.useRockstarUserState)(),
            {
              track: d
            } = (0, F.useGtmTrack)(),
            [m, u] = (0, n.useState)(null),
            [f, p] = (0, n.useState)(!1),
            [_, k] = (0, n.useState)(null),
            [b, v] = (0, n.useState)(!1),
            [w, h] = (0, n.useState)([]);
          (0, n.useEffect)((() => {
            h(t.characters[r] ?? [])
          }), [t, r]);
          const x = (0, n.useCallback)((e => {
            e.stopPropagation(), l(!c), 1 == !c && a(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: c ? "close" : "open"
            })
          }), [c]);
          return (0, n.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (w?.[i]?.mugshotUrl ?? t?.avatar) || ct : nt,
              s = js(w?.[i]?.platform, "small") ?? null;
            k(s), u(a), p(e), v(!!w?.[i]?.mugshotUrl)
          }), [t, w, i, ct, nt]), (0, g.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articledc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": s.formatMessage(c ? Cs.sc_menu_close : Cs.sc_menu_open),
            "aria-expanded": c,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            children: [(0, g.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articlece75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                u(ct)
              },
              alt: t?.nickname || ""
            }), f && null !== _ && (0, g.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articleaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), f && (0, g.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-newswire-articlecf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": w?.[i]?.platform ?? null
            })]
          })
        }), l),
        lt = {
          pillBtn: "rockstargames-modules-core-newswire-articleb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-core-newswire-articlefbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-core-newswire-articlea586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-core-newswire-articleccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-core-newswire-articlee4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-core-newswire-articled8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-core-newswire-articlee56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-core-newswire-articlec84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-core-newswire-articlebf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-modules-core-newswire-articlef6d46a24b050aad98fc3aae387b75586"
        },
        dt = e => {
          let {
            backgroundColor: a,
            brands: s = [],
            description: t = "",
            ctaLabel: r,
            ctaLink: i = "https://rockstargames.com",
            gradient: c = !0,
            image: o,
            imageOrientation: l = "right",
            title: d = "",
            name: m = ""
          } = e;
          const [u, f] = (0, n.useState)(!1), {
            ref: p,
            inView: _
          } = (0, q.cD)({
            threshold: .6
          }), {
            track: k
          } = (0, F.useGtmTrack)(), b = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,T.useGetCdnSource)(o)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, n.useEffect)((() => {
            _ && !u && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: m
            }), f(!0))
          }), [_]), (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)("div", {
              className: lt.promoModuleWrapper,
              children: (0, g.jsxs)(Re.q.div, {
                className: lt.promoModule,
                style: {
                  ...b
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: p,
                children: [(0, g.jsx)("div", {
                  className: [lt.promoModuleImage, c ? lt.gradient : "", "left" === l ? lt.left : lt.right].join(" ")
                }), (0, g.jsxs)("div", {
                  className: lt.promoModuleContentContainer,
                  children: [(0, g.jsx)(j, {
                    brands: s,
                    className: lt.promoModuleBrands
                  }), (0, g.jsxs)("div", {
                    className: lt.promoModuleTextContent,
                    children: [d && (0, g.jsx)("h3", {
                      children: d
                    }), t && (0, g.jsx)("p", {
                      children: t
                    })]
                  }), r && (0, g.jsx)(E, {
                    to: i,
                    text: r,
                    onClick: () => {
                      k({
                        event: "cta_other",
                        event_category: "cta",
                        event_action: "other",
                        event_label: r,
                        element_placement: "promo module",
                        link_url: i,
                        text: r
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        mt = {
          rating: "rockstargames-modules-core-newswire-articlea1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-core-newswire-articlecba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-core-newswire-articled47cd2b7c7415cb44cddef00b1c9b35f"
        },
        ut = (0, o.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var gt = s(13784);
      const ft = "undefined" != typeof GameDataNewGamesDatabaseConnection ? GameDataNewGamesDatabaseConnection : gt.GameData;
      (0, O.importAll)(s(52884));
      const pt = ia((0, o.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: t = null,
            href: r,
            img: i = null,
            titleSlug: c = null,
            style: l = {},
            className: d
          } = e;
          const [m, u] = (0, n.useState)(!1), {
            inView: p
          } = (0, q.cD)({
            threshold: .6
          }), [_, b] = (0, n.useState)({
            ratingDescriptors: a,
            ratingFooter: t,
            ratingImg: i,
            ratingUrl: r
          }), {
            track: v
          } = (0, F.useGtmTrack)(), w = (0, o.useIntl)(), {
            data: h
          } = (0, k.useQuery)(ft, {
            variables: {
              titleSlug: c
            },
            skip: !c
          });
          if ((0, n.useEffect)((() => {
              h && b(h?.game)
            }), [h]), (0, n.useEffect)((() => {
              p && !m && _.img_rating && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), u(!0))
            }), [p]), !_.ratingImg) return null;
          const x = !!_.ratingDescriptors;
          return (0, g.jsxs)("div", {
            className: [mt.rating, x ? mt.withDescriptors : mt.withOutDescriptors, d || ""].join(" "),
            style: (0, O.safeStyles)(l),
            children: [(0, g.jsx)(f, {
              to: _.ratingUrl,
              target: "_blank",
              children: (0, g.jsx)("img", {
                alt: w.formatMessage(ut.components_ratings_link_alt, {
                  rating: (y = _.ratingImg, y.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(7e4)(`./${_.ratingImg}`)
              })
            }), x && (0, g.jsxs)("div", {
              className: mt.text,
              children: [(0, g.jsx)("p", {
                className: mt.descriptors,
                dangerouslySetInnerHTML: {
                  __html: _?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), _.ratingFooter && (0, g.jsx)("hr", {}), _.ratingFooter && (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: _.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var y
        }), l)),
        _t = {
          responsiveFlexBox: "rockstargames-modules-core-newswire-articlecef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-core-newswire-articlea8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-core-newswire-articlebee8268780b292e5bc0da0b497e2c28f"
        },
        kt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, g.jsx)("div", {
            className: [_t.responsiveFlexBox, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        bt = {
          responsiveFlexItem: "rockstargames-modules-core-newswire-articleae579f6183cf73c897e68c8aae5c9d9d"
        },
        vt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, g.jsx)("div", {
            className: [bt.responsiveFlexItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        wt = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlea28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-core-newswire-articlebeddf36313a28976090b5a8b04d2594a"
        },
        ht = e => {
          let {
            children: a,
            cols: s,
            className: t,
            rows: r,
            style: i
          } = e;
          const c = i ? {
            ...i
          } : {};
          return void 0 !== s && (c.gridTemplateColumns = `repeat(${s}, 1fr)`), void 0 !== r && (c.gridTemplateRows = `repeat(${r}, 1fr)`), (0, g.jsx)("div", {
            className: [wt.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: c,
            children: a
          })
        },
        xt = {
          responsiveGridBox: "rockstargames-modules-core-newswire-articlea39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-core-newswire-articlebe7a0966e2f0457c1172ac9da99020c6"
        },
        yt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, g.jsx)("div", {
            className: [xt.responsiveGridItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        Nt = {
          responsiveImage: "rockstargames-modules-core-newswire-articlee31b43dce2e720669fb90bf539d22197"
        },
        jt = e => {
          let {
            src: a,
            className: s = "",
            animate: t,
            ariaLabel: r,
            style: i = {}
          } = e;
          const [c, n] = (0, O.usePreloadImg)(a);
          return c ? (i.backgroundImage = `url(${a})`, (0, g.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [Nt.responsiveImage, t ? Nt.animateBox : "", s].join(" "),
            style: {
              ...i,
              "--aspect-ratio": n.width / n.height
            }
          })) : null
        },
        St = {
          responsiveSection: "rockstargames-modules-core-newswire-articlefb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-core-newswire-articlebdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Ct = e => {
          let {
            children: a,
            className: s,
            style: t,
            maxWidth: r
          } = e;
          return (0, g.jsx)("section", {
            className: [St.responsiveSection, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: r ? (0, g.jsx)("div", {
              className: St.maxWidth,
              children: a
            }) : a
          })
        },
        Tt = () => (0, g.jsx)(f, {
          className: "rockstargames-modules-core-newswire-articleba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        It = e => {
          let {
            thresholds: a,
            onThresholdReached: s,
            children: t
          } = e;
          const [r, i] = (0, n.useState)([]), [c, o] = (0, n.useState)(new Set);
          return (0, n.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), i(e)
          }), [a]), (0, g.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map((e => (0, g.jsx)(q.Ws, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !c.has(a) && o((e => {
                  const t = new Set(e);
                  return r.forEach((e => {
                    e <= a && !t.has(e) && (t.add(e), s(e))
                  })), t
                }))
              })(a, e),
              triggerOnce: !0,
              children: a => {
                let {
                  ref: s
                } = a;
                return (0, g.jsx)("div", {
                  ref: s,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), t]
          })
        },
        Mt = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, n.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        Lt = (0, n.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: t,
            children: r,
            requireUser: i
          } = e, {
            track: c
          } = (0, F.useGtmTrack)(i), [o, l] = (0, n.useState)(a?.current);
          return (0, n.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, s) => {
            const [t, r] = (0, n.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: i,
              scrollY: c
            } = t;
            (0, n.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, n.useEffect)((() => {
              r({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const o = (0, n.useCallback)((() => {
              const e = document.documentElement,
                c = document.body,
                n = s?.scrollTop || e.scrollTop || c.scrollTop,
                l = s?.scrollHeight || e.scrollHeight || c.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = n / (l - d) * 100;
              if (i) {
                const e = Math.min(...i, l);
                if (m >= e) {
                  const t = i.filter((a => a !== e));
                  0 === t.length && (s ?? window).removeEventListener("scroll", o), a && a({
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
            }), [i, s, a]);
            (0, n.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }), [o])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            c({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof t && t(a)
          }), o), r
        }));
      Lt.displayName = "ScrollTracker";
      const Et = Lt,
        zt = (0, O.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s] = (0, n.useState)(""), t = (0, m.useNavigate)(), r = (0, k.useMutateState)();
          return (0, g.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-newswire-articleb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur(), t(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, g.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, g.jsx)("input", {
              autoComplete: "off",
              defaultValue: s,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Bt = {
          skeleton: "rockstargames-modules-core-newswire-articlef963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-core-newswire-articlee00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-core-newswire-articledb0b80177710d337d93bddb97b8a7dea"
        },
        Pt = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, g.jsx)("div", {
            className: [Bt.skeleton, Bt[a]].join(" ")
          }) : null
        },
        Vt = (0, o.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Dt = {
          bodySmall: "rockstargames-modules-core-newswire-articlec048aacaedc7fb642f38c7f163c193e3"
        },
        At = e => {
          let {
            track: a,
            artist: s
          } = e;
          return (0, g.jsxs)("div", {
            className: Dt.track,
            children: [(0, g.jsx)("p", {
              children: a
            }), (0, g.jsx)("p", {
              className: Dt.bodySmall,
              children: s
            })]
          })
        },
        $t = (0, o.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, g.jsx)("h4", {
              className: "rockstargames-modules-core-newswire-articlecd3895fbae93ba04f1401487f6e6eddf",
              children: (0, g.jsx)(o.FormattedMessage, {
                ...Vt.components_track_list_title
              })
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleef0cde8b15ded961605237d0e8328a9b",
              children: (0, g.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlebdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, g.jsx)(At, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), l),
        Ot = "rockstargames-modules-core-newswire-articleeca98eb0b5b84a0c9a2e6d952545a2d5",
        Ft = "rockstargames-modules-core-newswire-articled3d0b4ecd3bddba96c73f49fcca34ed8",
        Rt = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        Gt = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: s = 3,
            loop: t = !1,
            navigation: r = !1,
            slideChildren: i = [],
            variants: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: o = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, F.useGtmTrack)(), [d, m] = (0, n.useState)([aa.O4, aa.Hj, aa.eM]), [u, f] = (0, n.useState)(null), [p, _] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = [aa.O4, aa.Hj, aa.eM];
            r && e.push(aa._2), m(e)
          }), [r]), (0, n.useEffect)((() => {
            if (!i) return;
            const e = i.map(((e, a) => (0, g.jsx)(B.Ky, {
              children: e
            }, Symbol(a).toString())));
            _(e)
          }), [i]), p ? (0, g.jsxs)(Re.q.div, {
            className: "rockstargames-modules-core-newswire-articled4f245838b94234f21463a08a8112910",
            variants: c.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, g.jsx)(Re.q.div, {
              className: Ot,
              variants: c.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, g.jsx)(B.wx, {
                loop: t,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: d,
                breakpoints: Rt,
                className: Ot,
                onSlideNextTransitionEnd: () => {
                  l({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: a?.toLowerCase() ?? "",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: a?.toLowerCase() ?? "",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: a?.toLowerCase() ?? "",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: p
              })
            }), (0, g.jsx)(Re.q.div, {
              className: Ft,
              variants: c.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, g.jsx)(B.wx, {
                threshold: 50,
                onSwiper: f,
                loop: t,
                breakpoints: Rt,
                slidesPerView: s,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Ft,
                children: p
              })
            })]
          }) : null
        };
      var Ut = s(504);
      const Ht = e => {
          let {
            id: a = null,
            ids: s = null,
            setTitleDataPath: t = null,
            sync: r = !1
          } = e;
          const i = s ?? [a],
            {
              data: c
            } = (0, k.useQuery)(Ut.TinaModulesInfo, {
              variables: {
                ids: i,
                sync: r
              },
              setTitleDataPath: t,
              skip: !i.length
            });
          return c?.tinaModulesInfo ?? null
        },
        qt = ia((e => {
          let {
            components: a = {},
            id: s = null,
            ids: t = null,
            skeleton: r
          } = e;
          const i = Ht({
            id: s,
            ids: t
          });
          if (!i) return (0, g.jsx)(Pt, {
            skeleton: r
          });
          const c = i?.[0]?.tina;
          return c ? (0, g.jsx)(g.Fragment, {
            children: i.map(((e, s) => {
              let {
                tina: t
              } = e;
              return (0, g.jsx)(T.TinaParser, {
                components: a,
                tina: t,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, s)
            }))
          }) : null
        })),
        Wt = e => {
          let {
            children: a,
            style: s,
            theme: t
          } = e;
          const [r, i] = (0, n.useState)(t);
          return (0, n.useEffect)((() => {
            t && i(t)
          }), [t]), (0, g.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlea3cc68ab0d512c3d8835ee9abb7a51c4",
            style: s,
            "data-theme": r,
            children: a
          })
        };
      var Kt = s(19168);
      const Xt = {
          pillBtn: "rockstargames-modules-core-newswire-articleae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-core-newswire-articled7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-core-newswire-articlefd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-core-newswire-articledd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-core-newswire-articleeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-core-newswire-articled00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-core-newswire-articlefdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-core-newswire-articleabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-core-newswire-articleea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-core-newswire-articlec31731d09d8118c6a82fe6edb193dc50"
        },
        Qt = e => {
          let {
            description: a,
            foreign_id: s = document.location.pathname,
            foreign_type: t = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)(), {
            loggedIn: c
          } = (0, F.useRockstarUser)(), {
            refetch: o
          } = (0, k.useQuery)(Kt.UserGetVote, {
            skip: !0
          }), [l] = (0, k.useMutation)(Kt.UserCastVote), [d, m] = (0, n.useState)(null), u = (0, n.useCallback)((async e => {
            i({
              event_action: d ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: s
            });
            const a = {
                foreign_id: s,
                foreign_type: t,
                vote: e
              },
              r = await l({
                variables: a
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [s, t]);
          return (0, n.useEffect)((() => {
            (async () => {
              if (!c || !s || !t) return;
              const e = await o({
                foreign_id: s,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [s, t, c]), (0, g.jsx)("div", {
            className: Xt.userVote,
            children: (0, g.jsxs)("div", {
              className: Xt.voteContent,
              children: [(0, g.jsxs)("div", {
                className: Xt.info,
                children: [(0, g.jsx)("h3", {
                  children: r
                }), (0, g.jsx)("p", {
                  children: a
                })]
              }), (0, g.jsxs)("div", {
                className: [Xt.voteButtons, c ? "" : Xt.loggedOutButtons].join(" "),
                children: [(0, g.jsx)("button", {
                  onClick: () => u(!0),
                  className: [Xt.upVote, d ? Xt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, g.jsx)("button", {
                  className: [Xt.downVote, !1 === d ? Xt.voteButtonActive : ""].join(" "),
                  onClick: () => u(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Yt = {
          carousel: "rockstargames-modules-core-newswire-articled8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-core-newswire-articlea3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-core-newswire-articlef46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-core-newswire-articled26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-core-newswire-articlea879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-core-newswire-articleb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-core-newswire-articlec5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-core-newswire-articlee25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-core-newswire-articledd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-core-newswire-articleb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-core-newswire-articledddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-core-newswire-articlea7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-core-newswire-articlee1d7433489996eb9fa890d452ebcb042"
        },
        Zt = (0, O.withLocale)((e => {
          let {
            locale: a,
            t: s,
            videos: t
          } = e;
          const {
            track: r
          } = (0, F.useGtmTrack)(), {
            setBodyIsLocked: i
          } = (0, O.useBodyScrollable)("VideoCarousel"), [c, o] = (0, n.useState)(0), [l, d] = (0, n.useState)(0), m = (0, n.useRef)(null), u = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            if (!m.current || !u.current) return;
            const e = new(_())(m.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                o(c - 1 < 0 ? 0 : c - 1), d(0)
              },
              r = () => {
                const e = c + 1 >= t.length - 1 ? t.length - 1 : c + 1;
                o(e), d(0)
              },
              n = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !u.current?.classList.contains(Yt.dragging) || a() && i(!0)
              },
              l = () => {
                a() && i(!1), d(0)
              },
              g = e => {
                "press" === e.type && m.current?.classList.add(`${Yt.disableClick}`), "tap" === e.type && (m.current?.classList.remove(`${Yt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              f = () => {
                a() && i(!1), m.current && m.current.classList.remove(`${Yt.disableClick}`)
              },
              p = () => {
                a() && i(!1)
              };
            return u.current.addEventListener("transitionend", p), e.on("swiperight", s), e.on("swipeleft", r), e.on("pan", n), e.on("panend", l), e.on("press tap", g), e.on("pressup", f), () => {
              e.off("swiperight", s), e.off("swipeleft", r), e.off("pan", n), e.off("panend", l), e.off("press tap", g), e.off("pressup", f), u.current && u.current.removeEventListener("transitionend", p), d(0)
            }
          }), [m.current, c]), (0, g.jsxs)("section", {
            className: Yt.carousel,
            children: [(0, g.jsx)("div", {
              className: Yt.track,
              ref: m,
              children: (0, g.jsx)("div", {
                className: `${Yt.items} ${0!==l?Yt.dragging:""}`,
                ref: u,
                style: {
                  transform: `translateX(calc(-${100*c}% + ${l}px))`
                },
                children: t.map(((e, a) => (0, g.jsx)(f, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: c === a ? Yt.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: c === a ? 0 : -1,
                  children: (0, g.jsx)(lr, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, g.jsxs)("footer", {
              children: [(0, g.jsx)("div", {
                className: Yt.text,
                children: t.map(((e, t) => {
                  return (0, g.jsx)(f, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: c === t ? 0 : -1,
                    children: (0, g.jsxs)("div", {
                      className: [Yt.info, t === c ? Yt.active : ""].join(" "),
                      children: [(0, g.jsxs)("div", {
                        className: Yt.title,
                        children: [(0, g.jsx)("div", {
                          className: Yt.gameTitle,
                          children: `${e.game.title}${"fr_fr"===a?" ":""}`
                        }), (0, g.jsx)("h2", {
                          className: Yt.videoTitle,
                          children: `${e.title}`
                        })]
                      }), (0, g.jsx)(C, {
                        className: Yt.cta,
                        onClick: (i = `/videos/${e.id}`, () => {
                          r({
                            event: "cta_watch_video",
                            text: "watch now",
                            link_url: i,
                            element_placement: "video carousel"
                          })
                        }),
                        children: s("Watch Now")
                      })]
                    })
                  }, e.id);
                  var i
                }))
              }), (0, g.jsx)("div", {
                className: Yt.dots,
                children: t.map(((e, a) => (0, g.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => o(a),
                  className: c === a ? Yt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Jt = (0, o.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        er = {
          img: "rockstargames-modules-core-newswire-articlee3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-modules-core-newswire-articlec3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, O.importAll)(s(18016));
      const ar = e => {
          let {
            isWideCard: a = !1,
            size: t = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: c
          } = (0, O.useWindowResize)(), o = (0, n.useMemo)((() => {
            let e = "";
            return a && (e = c ? s(72027)(`./${i}/mobile.png`) : s(83408)(`./${i}/desktop.png`)), e || (e = s(14512)(`./${i}.jpg`), e += `?im=Resize=${t}`), e
          }), [c, i]), [l] = (0, O.usePreloadImg)(o);
          return (0, g.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [er.img, l ? er.startAnimation : "", a ? er.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        sr = {
          fobLink: "rockstargames-modules-core-newswire-articlefded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-modules-core-newswire-articlea9b41f96042bda8a8c77b7b7b10f84d5"
        },
        tr = e => {
          let {
            game: a,
            to: s
          } = e;
          const {
            titleSlug: t,
            urlOfficial: r = ""
          } = a, i = ["VI"].includes(t);
          return (0, g.jsx)(f, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": t,
            "data-testid": `${t}-gamecard`,
            to: s ?? r,
            target: "_self",
            className: [sr.fobLink, i ? sr.wide : ""].join(" "),
            children: (0, g.jsx)(ar, {
              title: a.title,
              titleSlug: t,
              isWideCard: i
            })
          })
        },
        rr = {
          videoList: "rockstargames-modules-core-newswire-articlea77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-core-newswire-articleed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-core-newswire-articleffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-core-newswire-articleffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-core-newswire-articlecbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-modules-core-newswire-articleb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-modules-core-newswire-articlef3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-modules-core-newswire-articlec8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-core-newswire-articlef30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-core-newswire-articled9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-core-newswire-articlec806076a1e3e23c77528ee12e32771a3"
        },
        ir = (0, o.withIntl)((e => {
          let {
            vids: a,
            games: s,
            title: t,
            gameTitleNecessary: r
          } = e;
          const i = (0, o.useIntl)(),
            {
              track: c
            } = (0, F.useGtmTrack)(),
            l = void 0 !== s ? "games" : "videos",
            [d, m] = (0, n.useState)(),
            [u, f] = (0, n.useState)(),
            [p, _] = (0, n.useState)(0),
            k = (0, n.useRef)(null),
            b = (0, n.useRef)(null);
          (0, n.useEffect)((() => {
            f({
              nextEl: b.current,
              prevEl: k.current
            })
          }), [b, k]), (0, n.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), _(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]);
          const v = e => {
            d?.slideTo(e)
          };
          let w;
          return w = "games" === l ? (0, g.jsx)(g.Fragment, {
            children: s.results.map(((e, a) => "775700as" !== e.id && (0, g.jsx)(B.Ky, {
              className: rr.slide,
              onFocus: () => v(a),
              children: (0, g.jsx)(tr, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, g.jsx)(g.Fragment, {
            children: a.map(((e, a) => (0, g.jsx)(B.Ky, {
              className: rr.slide,
              onFocus: () => v(a),
              children: (0, g.jsx)(Hs.VideoCard.Link, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, g.jsxs)("section", {
            className: rr.videoList,
            children: [(0, g.jsxs)("h3", {
              className: rr.sectionHeader,
              children: [t, (0, g.jsxs)("div", {
                className: rr.arrowNav,
                children: [(0, g.jsx)("button", {
                  className: [rr.arrow, rr.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": i.formatMessage(Jt.previous_button_label)
                }), (0, g.jsx)("button", {
                  className: [rr.arrow, rr.next].join(" "),
                  type: "button",
                  ref: b,
                  "aria-label": i.formatMessage(Jt.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, g.jsx)("div", {
              className: [rr.items, p % 1 != 0 ? rr.partial : ""].join(" "),
              children: (0, g.jsx)("div", {
                className: rr.trackWrapper,
                children: p && (0, g.jsx)(B.wx, {
                  className: rr.track,
                  slidesPerView: p,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [aa._2],
                  slideClass: (0, T.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    c({
                      event_action: "next",
                      event_category: "carousel",
                      event: "carousel_next",
                      event_label: t?.toLowerCase() ?? "",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    c({
                      event_action: "previous",
                      event_category: "carousel",
                      event: "carousel_previous",
                      event_label: t?.toLowerCase() ?? "",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    c({
                      event_action: "swipe",
                      event_category: "carousel",
                      event: "carousel_swipe",
                      event_label: t?.toLowerCase() ?? "",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: w
                })
              })
            })]
          })
        }), l),
        cr = e => {
          let {
            children: a,
            ...s
          } = e;
          return (0, g.jsx)("span", {
            ...s,
            className: "rockstargames-modules-core-newswire-articlef7f61ab4bc6dd2a49f80662ead7d8a51",
            children: a
          })
        },
        nr = (0, O.withTranslations)((e => {
          let {
            error: a,
            t: s,
            domain: t = ""
          } = e;
          console.error({
            error: a
          });
          let r = a?.message ?? s("error-404-new");
          r = s("error-404-new");
          const i = a?.code ?? 398,
            c = (0, n.useRef)(null);
          return (0, n.useEffect)((() => {
            c && c?.current && c.current.focus()
          }), [c]), (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled988ce20c420c26fc5e455279bf94cb9",
            children: [(0, g.jsx)("h3", {
              tabIndex: -1,
              ref: c,
              children: `${r} (${i})`
            }), (0, g.jsx)(f, {
              to: "/",
              children: s("Home")
            }), "clr" !== t && (0, g.jsx)(zt, {})]
          })
        })),
        or = {
          videoPreview: "rockstargames-modules-core-newswire-articlec6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-core-newswire-articleec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-core-newswire-articleab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-core-newswire-articlee84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-core-newswire-articlea322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-core-newswire-articlef68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-core-newswire-articledebff452a4923aded7de826c081bab5d"
        },
        lr = e => {
          let {
            video: a,
            size: s = 640
          } = e;
          const t = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${s}` : a.screencap,
            [r] = (0, O.usePreloadImg)(t());
          return (0, g.jsx)("div", {
            className: [or.screencap, r ? or.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        dr = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: s = !1,
            video: t,
            size: r,
            toExplicit: i
          } = e;
          const c = i ?? `/videos/${t.id}`,
            n = {
              className: or.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": c
            },
            o = (0, g.jsxs)("div", {
              className: or.card,
              children: [(0, g.jsx)(lr, {
                video: t,
                size: r
              }), (0, g.jsxs)("div", {
                className: or.info,
                children: [a ? (0, g.jsx)("div", {
                  className: or.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, g.jsx)("h5", {
                  className: or.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return s ? (0, g.jsx)("a", {
            href: c,
            target: "_blank",
            ...n,
            children: o
          }) : (0, g.jsx)(f, {
            to: c,
            ...n,
            children: o
          })
        };
      class mr extends n.Component {
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
          return null !== this.state.error.code ? (0, g.jsx)(nr, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const ur = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(s) {
          return (0, g.jsx)(mr, {
            header: a,
            children: (0, g.jsx)(e, {
              ...s
            })
          })
        }
      };
      var gr = s(1267),
        fr = s(20688),
        pr = s(48016);
      const _r = (0, n.forwardRef)(((e, a) => {
        const {
          children: s,
          tag: t = "div"
        } = e, r = gr.m[t];
        return (0, g.jsx)(fr.O, {
          features: pr.i,
          children: (0, g.jsx)(r, {
            ref: a,
            ...e,
            children: s
          })
        })
      }));
      _r.displayName = "LiteMotion";
      const kr = _r,
        br = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        vr = {
          ease: "easeIn",
          duration: .4
        },
        wr = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)(Re.q.div, Object.assign({
            className: "rockstargames-modules-core-newswire-articlef0ee4e641f1ac92151be887c9ebb8392",
            variants: br,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: vr
          }, {
            children: a
          }))
        },
        hr = e => a => (0, g.jsx)(wr, {
          children: (0, g.jsx)(e, Object.assign({}, a))
        }),
        xr = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        yr = {
          ease: "easeIn",
          duration: .75
        },
        Nr = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)(Re.q.div, {
            className: "rockstargames-modules-core-newswire-articlea479a10c5475b17a0564b60fecf98c8b",
            variants: xr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: yr,
            children: a
          })
        },
        jr = e => a => (0, g.jsx)(Nr, {
          children: (0, g.jsx)(e, {
            ...a
          })
        }),
        Sr = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        Cr = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        Tr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Cr[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Ir = s(45164);
      const Mr = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Lr = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Er = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        zr = e => {
          let a, {
            type: s = Er.SPINNING
          } = e;
          switch (s) {
            case Er.THREE_DOTS:
              a = Lr;
              break;
            case Er.SPINNING:
            default:
              a = Mr
          }
          const t = {
            loop: !0,
            autoplay: !0,
            animationData: a,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, g.jsx)(Ir.c, {
            options: t,
            height: 50,
            width: 50
          })
        }
    },
    90048: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 340
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "GetAudioAlbum")
    },
    58652: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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
          end: 386
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    13784: e => {
      var a = {
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
                    value: "img_rating"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_descriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_footer"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_rating"
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
          end: 398
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        img_rating\n        rating_descriptors\n        rating_footer\n        url_rating\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "GameData")
    },
    504: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
                value: "cache"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
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
                                  value: "sync"
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
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 963
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
    },
    19168: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
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
                value: "foreign_type"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = t[a] || new Set,
          c = new Set,
          n = new Set;
        for (i.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var o = n;
          n = new Set, o.forEach((function(e) {
            c.has(e) || (c.add(e), (t[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = i(a, "UserGetVote"), e.exports.UserCastVote = i(a, "UserCastVote")
    },
    55492: (e, a, s) => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
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
                value: "cache"
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
              value: !0
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 537
        }
      };
      t.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function i(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !r[a] && (r[a] = !0, !0)
        }))
      }

      function c(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          c(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          c(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          c(e, a)
        }))
      }
      t.definitions = t.definitions.concat(i(s(73784).definitions)), t.definitions = t.definitions.concat(i(s(28540).definitions));
      var n = {};

      function o(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          c(e, a), n[e.name.value] = a
        }
      })), e.exports = t, e.exports.NewswireList = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          i = new Set;
        for (t.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = o(e, a);
          t && s.definitions.push(t)
        })), s
      }(t, "NewswireList")
    },
    13892: (e, a, s) => {
      var t = {
        "./left.svg": 2440,
        "./pc.svg": 66584,
        "./ps.svg": 38407,
        "./ps3.svg": 31972,
        "./ps4.svg": 3052,
        "./ps5.svg": 92243,
        "./right.svg": 61837,
        "./switch.svg": 99868,
        "./x.svg": 72428,
        "./xbox.svg": 68868,
        "./xboxone.svg": 98092,
        "./xboxseriesxs.svg": 73040
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 13892
    },
    52884: (e, a, s) => {
      var t = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 68696,
        "./djctq_10.svg": 29375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 72804,
        "./djctq_16.svg": 99900,
        "./djctq_18.svg": 72192,
        "./djctq_er.svg": 71732,
        "./djctq_l.svg": 44428,
        "./esrb_ao.svg": 42144,
        "./esrb_e.svg": 49492,
        "./esrb_e10plus.svg": 50711,
        "./esrb_m.svg": 10292,
        "./esrb_m_ao.svg": 18404,
        "./esrb_rp.svg": 29600,
        "./esrb_rplm17.svg": 44656,
        "./esrb_t.svg": 24884,
        "./fpb_13.svg": 60896,
        "./fpb_16.svg": 47932,
        "./fpb_18.svg": 92948,
        "./fpb_pg.svg": 66620,
        "./grac_12.svg": 43788,
        "./grac_15.svg": 94164,
        "./grac_18.svg": 94916,
        "./grac_19.svg": 29976,
        "./grac_a.svg": 77304,
        "./gsrr_0.svg": 92284,
        "./gsrr_12.svg": 12024,
        "./gsrr_15.svg": 51040,
        "./gsrr_18.svg": 26632,
        "./gsrr_6.svg": 17372,
        "./nmc_12.svg": 51423,
        "./nmc_16.svg": 92596,
        "./nmc_18.svg": 63980,
        "./nmc_21.svg": 7240,
        "./nmc_3.svg": 65140,
        "./nmc_7.svg": 66884,
        "./oflc_g.svg": 28704,
        "./oflc_m.svg": 74116,
        "./oflc_ma15.svg": 42856,
        "./oflc_pg.svg": 65888,
        "./oflc_r18.svg": 94780,
        "./pegi_12.svg": 18564,
        "./pegi_16.svg": 50524,
        "./pegi_18.svg": 33173,
        "./pegi_3.svg": 90100,
        "./pegi_4.svg": 20064,
        "./pegi_6.svg": 95228,
        "./pegi_7.svg": 44308,
        "./pegi_rp.png": 96480,
        "./rars_0.svg": 48112,
        "./rars_12.svg": 77767,
        "./rars_16.svg": 35740,
        "./rars_18.svg": 96708,
        "./rars_6.svg": 46644,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 52884
    },
    7e4: (e, a, s) => {
      var t = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 68696,
        "./djctq_10.svg": 29375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 72804,
        "./djctq_16.svg": 99900,
        "./djctq_18.svg": 72192,
        "./djctq_er.svg": 71732,
        "./djctq_l.svg": 44428,
        "./esrb_ao.svg": 42144,
        "./esrb_e.svg": 49492,
        "./esrb_e10plus.svg": 50711,
        "./esrb_m.svg": 10292,
        "./esrb_m_ao.svg": 18404,
        "./esrb_rp.svg": 29600,
        "./esrb_rplm17.svg": 44656,
        "./esrb_t.svg": 24884,
        "./fpb_13.svg": 60896,
        "./fpb_16.svg": 47932,
        "./fpb_18.svg": 92948,
        "./fpb_pg.svg": 66620,
        "./grac_12.svg": 43788,
        "./grac_15.svg": 94164,
        "./grac_18.svg": 94916,
        "./grac_19.svg": 29976,
        "./grac_a.svg": 77304,
        "./gsrr_0.svg": 92284,
        "./gsrr_12.svg": 12024,
        "./gsrr_15.svg": 51040,
        "./gsrr_18.svg": 26632,
        "./gsrr_6.svg": 17372,
        "./nmc_12.svg": 51423,
        "./nmc_16.svg": 92596,
        "./nmc_18.svg": 63980,
        "./nmc_21.svg": 7240,
        "./nmc_3.svg": 65140,
        "./nmc_7.svg": 66884,
        "./oflc_g.svg": 28704,
        "./oflc_m.svg": 74116,
        "./oflc_ma15.svg": 42856,
        "./oflc_pg.svg": 65888,
        "./oflc_r18.svg": 94780,
        "./pegi_12.svg": 18564,
        "./pegi_16.svg": 50524,
        "./pegi_18.svg": 33173,
        "./pegi_3.svg": 90100,
        "./pegi_4.svg": 20064,
        "./pegi_6.svg": 95228,
        "./pegi_7.svg": 44308,
        "./pegi_rp.png": 96480,
        "./rars_0.svg": 48112,
        "./rars_12.svg": 77767,
        "./rars_16.svg": 35740,
        "./rars_18.svg": 96708,
        "./rars_6.svg": 46644,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 7e4
    },
    6572: (e, a, s) => {
      var t = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 6572
    },
    18016: (e, a, s) => {
      var t = {
        "./GTAOnline.jpg": 14464,
        "./GTATrilogy.jpg": 57116,
        "./IV.jpg": 74308,
        "./V.jpg": 53956,
        "./VI/desktop.png": 44616,
        "./VI/mobile.png": 17076,
        "./agent.jpg": 43160,
        "./beaterator.jpg": 42796,
        "./bully-scholarshipedition.jpg": 72116,
        "./bully.jpg": 96300,
        "./chinatownwars.jpg": 78272,
        "./episodesfromlibertycity.jpg": 46380,
        "./grandtheftauto-gba.jpg": 87868,
        "./grandtheftauto3.jpg": 19008,
        "./gta-online.jpg": 432,
        "./gta-v.jpg": 23916,
        "./gta.jpg": 27380,
        "./gta2.jpg": 93468,
        "./gtacomplete.jpg": 40188,
        "./gtalondon.jpg": 72824,
        "./italianjob.jpg": 40676,
        "./lanoire-vr-case-files.jpg": 97448,
        "./lanoire.jpg": 39848,
        "./lanoire_2.jpg": 58544,
        "./libertycitystories.jpg": 60380,
        "./manhunt.jpg": 2528,
        "./manhunt2.jpg": 99056,
        "./maxpayne.jpg": 72396,
        "./maxpayne2.jpg": 47108,
        "./maxpayne3.jpg": 30056,
        "./midnightclub.jpg": 51840,
        "./midnightclub2.jpg": 90460,
        "./midnightclub3.jpg": 40468,
        "./midnightclubLA-complete.jpg": 92807,
        "./midnightclubLA.jpg": 17516,
        "./oni.jpg": 56468,
        "./rdr-goty.jpg": 23504,
        "./reddeadonline.jpg": 48600,
        "./reddeadredemption.jpg": 92256,
        "./reddeadredemption2.jpg": 68588,
        "./reddeadrevolver.jpg": 18444,
        "./rockstar-games-collection-edition-1.jpg": 32392,
        "./sanandreas.jpg": 10107,
        "./skateanddestroy.jpg": 65852,
        "./smugglersrun.jpg": 37620,
        "./smugglersrun2.jpg": 66556,
        "./smugglersrunwarzones.jpg": 43360,
        "./stateofemergency.jpg": 73904,
        "./tabletennis.jpg": 97896,
        "./theballadofgaytony.jpg": 10304,
        "./thelostanddamned.jpg": 98368,
        "./thewarriors.jpg": 71791,
        "./undeadnightmare.jpg": 51300,
        "./vicecity.jpg": 59199,
        "./vicecitystories.jpg": 37764,
        "./wildmetal.jpg": 95420
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 18016
    },
    14512: (e, a, s) => {
      var t = {
        "./GTAOnline.jpg": 14464,
        "./GTATrilogy.jpg": 57116,
        "./IV.jpg": 74308,
        "./V.jpg": 53956,
        "./agent.jpg": 43160,
        "./beaterator.jpg": 42796,
        "./bully-scholarshipedition.jpg": 72116,
        "./bully.jpg": 96300,
        "./chinatownwars.jpg": 78272,
        "./episodesfromlibertycity.jpg": 46380,
        "./grandtheftauto-gba.jpg": 87868,
        "./grandtheftauto3.jpg": 19008,
        "./gta-online.jpg": 432,
        "./gta-v.jpg": 23916,
        "./gta.jpg": 27380,
        "./gta2.jpg": 93468,
        "./gtacomplete.jpg": 40188,
        "./gtalondon.jpg": 72824,
        "./italianjob.jpg": 40676,
        "./lanoire-vr-case-files.jpg": 97448,
        "./lanoire.jpg": 39848,
        "./lanoire_2.jpg": 58544,
        "./libertycitystories.jpg": 60380,
        "./manhunt.jpg": 2528,
        "./manhunt2.jpg": 99056,
        "./maxpayne.jpg": 72396,
        "./maxpayne2.jpg": 47108,
        "./maxpayne3.jpg": 30056,
        "./midnightclub.jpg": 51840,
        "./midnightclub2.jpg": 90460,
        "./midnightclub3.jpg": 40468,
        "./midnightclubLA-complete.jpg": 92807,
        "./midnightclubLA.jpg": 17516,
        "./oni.jpg": 56468,
        "./rdr-goty.jpg": 23504,
        "./reddeadonline.jpg": 48600,
        "./reddeadredemption.jpg": 92256,
        "./reddeadredemption2.jpg": 68588,
        "./reddeadrevolver.jpg": 18444,
        "./rockstar-games-collection-edition-1.jpg": 32392,
        "./sanandreas.jpg": 10107,
        "./skateanddestroy.jpg": 65852,
        "./smugglersrun.jpg": 37620,
        "./smugglersrun2.jpg": 66556,
        "./smugglersrunwarzones.jpg": 43360,
        "./stateofemergency.jpg": 73904,
        "./tabletennis.jpg": 97896,
        "./theballadofgaytony.jpg": 10304,
        "./thelostanddamned.jpg": 98368,
        "./thewarriors.jpg": 71791,
        "./undeadnightmare.jpg": 51300,
        "./vicecity.jpg": 59199,
        "./vicecitystories.jpg": 37764,
        "./wildmetal.jpg": 95420
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 14512
    },
    83408: (e, a, s) => {
      var t = {
        "./VI/desktop.png": 44616
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 83408
    },
    72027: (e, a, s) => {
      var t = {
        "./VI/mobile.png": 17076
      };

      function r(e) {
        var a = i(e);
        return s(a)
      }

      function i(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 72027
    },
    2440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    66584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    38407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    31972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    3052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    92243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    61837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    99868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    72428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    68868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    98092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    73040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    82708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    29314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    71084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    66452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    14120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    33788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    37284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    19916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    80804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    70564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    62756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    12064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    7748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    84184: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    69450: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    85724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    31216: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    38604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    14276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    75264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    4268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    87336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    68696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    29375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    7056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    72804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    99900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    72192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    71732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    44428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    42144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    49492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    50711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    10292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    18404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    29600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    44656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    24884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    60896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    47932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    92948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    66620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    43788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    94164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    94916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    29976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    77304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    92284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    12024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    51040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    26632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    17372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    51423: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    92596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    63980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    7240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    65140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    66884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    28704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    74116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    42856: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    65888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    94780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    18564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    50524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    33173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    90100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    20064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    95228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    44308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    96480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    48112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    77767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    35740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    96708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    46644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    75084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    5384: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    21804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    21367: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    45568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    46096: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    86616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    30752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    40056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    41444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    73268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    74688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    14464: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    57116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    74308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    53956: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    44616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17076: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    43160: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    42796: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    72116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    96300: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    78272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    46380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    87868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    19008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    23916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    27380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    93468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    40188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    72824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    40676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    97448: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    39848: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    58544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    60380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    2528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    99056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    72396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    47108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    30056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    51840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    90460: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    40468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    92807: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    17516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    56468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    23504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    48600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    92256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    68588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    18444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    32392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    10107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    65852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    37620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    66556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    43360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    73904: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    97896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    10304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    98368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    71791: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    51300: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    59199: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    37764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    95420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    43976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    61820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);