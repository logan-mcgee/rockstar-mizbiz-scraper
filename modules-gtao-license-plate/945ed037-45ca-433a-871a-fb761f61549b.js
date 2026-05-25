try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "945ed037-45ca-433a-871a-fb761f61549b", e._sentryDebugIdIdentifier = "sentry-dbid-945ed037-45ca-433a-871a-fb761f61549b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [8379], {
    83226(e, a, t) {
      t.r(a), t.d(a, {
        CharacterProfile: () => ve,
        LanguageSelector: () => k,
        Menu: () => ue,
        MenuButton: () => ge
      });
      var s = {};
      t.r(s), t.d(s, {
        scCharacterBtnIcon: () => pe,
        scCharacterBtnText: () => me,
        scCharacterList: () => fe,
        scCharacterSelectBtn: () => he,
        scCharacterSelector: () => ke
      });
      var n = t(39793),
        o = t(93082),
        i = t(84979),
        l = t(35906),
        c = t(42909),
        r = t(38044),
        _ = t(82199),
        d = t(44514),
        u = t.n(d);
      const g = (0, c.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          },
          language_selector_option_en_us: {
            id: "language_selector_option_en_us",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "English"
          },
          language_selector_option_de_de: {
            id: "language_selector_option_de_de",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "German - (Deutsch)"
          },
          language_selector_option_es_es: {
            id: "language_selector_option_es_es",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Spanish - (Español)"
          },
          language_selector_option_es_mx: {
            id: "language_selector_option_es_mx",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Spanish Latin America - (Español Latinoamérica)"
          },
          language_selector_option_fr_fr: {
            id: "language_selector_option_fr_fr",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "French - (Français)"
          },
          language_selector_option_it_it: {
            id: "language_selector_option_it_it",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Italian - (Italiano)"
          },
          language_selector_option_ja_jp: {
            id: "language_selector_option_ja_jp",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Japanese - (日本語)"
          },
          language_selector_option_ko_kr: {
            id: "language_selector_option_ko_kr",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Korean - (한국어)"
          },
          language_selector_option_pl_pl: {
            id: "language_selector_option_pl_pl",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Polish - (Polski)"
          },
          language_selector_option_pt_br: {
            id: "language_selector_option_pt_br",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Português do Brasil - (Português do Brasil)"
          },
          language_selector_option_ru_ru: {
            id: "language_selector_option_ru_ru",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Russian - (Русский)"
          },
          language_selector_option_zh_tw: {
            id: "language_selector_option_zh_tw",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Chinese Traditional - (繁體中文)"
          },
          language_selector_option_zh_hans: {
            id: "language_selector_option_zh_hans",
            description: "Language option presented in selector. Displays language in currently select language first, and then untranslated language name within brackets. Currently selected language does not require the text in brackets.",
            defaultMessage: "Chinese Simplified - (简体中文)"
          }
        }),
        p = {
          dropdown: "rockstargames-modules-gtao-license-platecb93b1e1dbe15862e05455dc78f5ec25",
          dropdownContainer: "rockstargames-modules-gtao-license-plateab0cc073180383d3d5e4bee00eaa311f",
          languageSelector: "rockstargames-modules-gtao-license-platea9dd8a9cb7334e205df4ac3b4392916d",
          linkWrapper: "rockstargames-modules-gtao-license-plateb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-gtao-license-platec64b05a604b1a6be373d35cf01edba2e",
          menuStyles: "rockstargames-modules-gtao-license-plateb641fac428f473cbb4593cd058a01953",
          open: "rockstargames-modules-gtao-license-plateaa1d94595080f833a35e29fbbe8fd01c",
          pillBtn: "rockstargames-modules-gtao-license-platee34929a5bcdda554c66b47a858ddd966",
          selectBox: "rockstargames-modules-gtao-license-platefe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-gtao-license-plateae32febd9789e79c804b2679d25e8a65",
          selectBoxWrapper: "rockstargames-modules-gtao-license-platedb1aead5717ba9dae1e272c3b7e6e801",
          selected: "rockstargames-modules-gtao-license-platee1ba906f108faeb297753d39a8d21b8b"
        },
        m = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","language_selector_option_de_de":"Deutsch","language_selector_option_en_us":"Englisch – (English)","language_selector_option_es_es":"Spanisch – (Español)","language_selector_option_es_mx":"Lateinamerikanisches Spanisch – (Español Latinoamérica)","language_selector_option_fr_fr":"Französisch – (Français)","language_selector_option_it_it":"Italienisch – (Italiano)","language_selector_option_ja_jp":"Japanisch – (日本語)","language_selector_option_ko_kr":"Koreanisch – (한국어)","language_selector_option_pl_pl":"Polnisch – (Polski)","language_selector_option_pt_br":"Brasilianisches Portugiesisch – (Português do Brasil)","language_selector_option_ru_ru":"Russisch – (Русский)","language_selector_option_zh_hans":"Vereinfachtes Chinesisch – (简体中文)","language_selector_option_zh_tw":"Traditionelles Chinesisch – (繁體中文)","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","www_link_manage_account":"Konto verwalten"},"en-US":{"language_selector_default":"Select a Language","language_selector_option_de_de":"German - (Deutsch)","language_selector_option_en_us":"English","language_selector_option_es_es":"Spanish - (Español)","language_selector_option_es_mx":"Spanish Latin America - (Español Latinoamérica)","language_selector_option_fr_fr":"French - (Français)","language_selector_option_it_it":"Italian - (Italiano)","language_selector_option_ja_jp":"Japanese - (日本語)","language_selector_option_ko_kr":"Korean - (한국어)","language_selector_option_pl_pl":"Polish - (Polski)","language_selector_option_pt_br":"Português do Brasil - (Português do Brasil)","language_selector_option_ru_ru":"Russian - (Русский)","language_selector_option_zh_hans":"Chinese Simplified - (简体中文)","language_selector_option_zh_tw":"Chinese Traditional - (繁體中文)","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","www_link_manage_account":"Manage Account"},"es-ES":{"language_selector_default":"Selecciona un idioma","language_selector_option_de_de":"Alemán - (Deutsch)","language_selector_option_en_us":"Inglés (English)","language_selector_option_es_es":"Español - (España)","language_selector_option_es_mx":"Español - (Latinoamérica)","language_selector_option_fr_fr":"Francés - (Français)","language_selector_option_it_it":"Italiano","language_selector_option_ja_jp":"Japonés - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polaco - (Polski)","language_selector_option_pt_br":"Portugués brasileño - (Português do Brasil)","language_selector_option_ru_ru":"Ruso - (Русский)","language_selector_option_zh_hans":"Chino simplificado - (简体中文)","language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","www_link_manage_account":"Gestionar cuenta"},"es-MX":{"language_selector_default":"Seleccionar un idioma","language_selector_option_de_de":"Alemán - (Deutsch)","language_selector_option_en_us":"Inglés - (English)","language_selector_option_es_es":"Español (España)","language_selector_option_es_mx":"Español (Latinoamérica)","language_selector_option_fr_fr":"Francés - (Français)","language_selector_option_it_it":"Italiano","language_selector_option_ja_jp":"Japonés - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polaco - (Polski)","language_selector_option_pt_br":"Portugués de Brasil - (Português do Brasil)","language_selector_option_ru_ru":"Ruso - (Русский)","language_selector_option_zh_hans":"Chino simplificado - (简体中文)","language_selector_option_zh_tw":"Chino tradicional - (繁體中文)","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","www_link_manage_account":"Administrar cuenta"},"fr-FR":{"language_selector_default":"Sélectionner une langue","language_selector_option_de_de":"Allemand - (Deutsch)","language_selector_option_en_us":"Anglais - (English)","language_selector_option_es_es":"Espagnol - (Español)","language_selector_option_es_mx":"Espagnol d’Amérique latine - (Español Latinoamérica)","language_selector_option_fr_fr":"Français","language_selector_option_it_it":"Italien - (Italiano)","language_selector_option_ja_jp":"Japonais - (日本語)","language_selector_option_ko_kr":"Coréen - (한국어)","language_selector_option_pl_pl":"Polonais - (Polski)","language_selector_option_pt_br":"Portugais brésilien - (Português do Brasil)","language_selector_option_ru_ru":"Russe - (Русский)","language_selector_option_zh_hans":"Chinois simplifié - (简体中文)","language_selector_option_zh_tw":"Chinois traditionnel - (繁體中文)","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","www_link_manage_account":"Gérer le compte"},"it-IT":{"language_selector_default":"Seleziona una lingua","language_selector_option_de_de":"Tedesco - (Deutsch)","language_selector_option_en_us":"Inglese - (English)","language_selector_option_es_es":"Spagnolo - (Español)","language_selector_option_es_mx":"Spagnolo (America Latina) - (Español Latinoamérica)","language_selector_option_fr_fr":"Francese - (Français)","language_selector_option_it_it":"Italiano","language_selector_option_ja_jp":"Giapponese - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polacco - (Polski)","language_selector_option_pt_br":"Portoghese (Brasile) - (Português do Brasil)","language_selector_option_ru_ru":"Russo - (Русский)","language_selector_option_zh_hans":"Chinese semplificato - (简体中文)","language_selector_option_zh_tw":"Cinese tradizionale - (繁體中文)","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","www_link_manage_account":"Impostazioni account"},"ja-JP":{"language_selector_default":"言語を選択","language_selector_option_de_de":"ドイツ語 - (Deutsch)","language_selector_option_en_us":"英語 - (English)","language_selector_option_es_es":"スペイン語 - (Español)","language_selector_option_es_mx":"スペイン語(ラテンアメリカ) - (Español Latinoamérica)","language_selector_option_fr_fr":"フランス語 - (Français)","language_selector_option_it_it":"イタリア語 - (Italiano)","language_selector_option_ja_jp":"日本語","language_selector_option_ko_kr":"韓国語 - (한국어)","language_selector_option_pl_pl":"ポーランド語 - (Polski)","language_selector_option_pt_br":"ポルトガル語(ブラジル) - (Português do Brasil)","language_selector_option_ru_ru":"ロシア語 - (Русский)","language_selector_option_zh_hans":"簡体字中国語 - (简体中文)","language_selector_option_zh_tw":"繁体字中国語 - (繁體中文)","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","www_link_manage_account":"アカウントを管理する"},"ko-KR":{"language_selector_default":"언어 선택","language_selector_option_de_de":"독일어 - (Deutsch)","language_selector_option_en_us":"영어 - (English)","language_selector_option_es_es":"스페인어 - (Español)","language_selector_option_es_mx":"라틴 아메리카 스페인어 - (Español Latinoamérica)","language_selector_option_fr_fr":"프랑스어 - (Français)","language_selector_option_it_it":"이탈리아어 - (Italiano)","language_selector_option_ja_jp":"일본어 - (日本語)","language_selector_option_ko_kr":"한국어","language_selector_option_pl_pl":"폴란드어 - (Polski)","language_selector_option_pt_br":"브라질 포르투갈어 - (Português do Brasil)","language_selector_option_ru_ru":"러시아어 - (Русский)","language_selector_option_zh_hans":"중국어 간체 - (简体中文)","language_selector_option_zh_tw":"중국어 번체 - (繁體中文)","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","www_link_manage_account":"계정 관리"},"pl-PL":{"language_selector_default":"Wybierz język","language_selector_option_de_de":"Niemiecki - (Deutsch)","language_selector_option_en_us":"Angielski - (English)","language_selector_option_es_es":"Hiszpański - (Español)","language_selector_option_es_mx":"Hiszpański (Ameryka Łacińska) - (Español Latinoamérica)","language_selector_option_fr_fr":"Francuski - (Français)","language_selector_option_it_it":"Włoski - (Italiano)","language_selector_option_ja_jp":"Japoński - (日本語)","language_selector_option_ko_kr":"Koreański - (한국어)","language_selector_option_pl_pl":"Polski","language_selector_option_pt_br":"Portugalski (Brazylia) - (Português do Brasil)","language_selector_option_ru_ru":"Rosyjski - (Русский)","language_selector_option_zh_hans":"Chiński uproszczony - (简体中文)","language_selector_option_zh_tw":"Chiński tradycyjny - (繁體中文)","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","www_link_manage_account":"Zarządzanie kontem"},"pt-BR":{"language_selector_default":"Selecione um idioma","language_selector_option_de_de":"Alemão - (Deutsch)","language_selector_option_en_us":"Inglês - (English)","language_selector_option_es_es":"Espanhol (Espanha) - (Español España)","language_selector_option_es_mx":"Espanhol (América Latina) - (Español Latinoamérica)","language_selector_option_fr_fr":"Francês - (Français)","language_selector_option_it_it":"Italiano - (Italiano)","language_selector_option_ja_jp":"Japonês - (日本語)","language_selector_option_ko_kr":"Coreano - (한국어)","language_selector_option_pl_pl":"Polonês - (Polski)","language_selector_option_pt_br":"Português do Brasil","language_selector_option_ru_ru":"Russo - (Русский)","language_selector_option_zh_hans":"Chinês Simplificado - (简体中文)","language_selector_option_zh_tw":"Chinês Tradicional - (繁體中文)","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","www_link_manage_account":"Gerenciar conta"},"ru-RU":{"language_selector_default":"Выбрать язык","language_selector_option_de_de":"Немецкий - (Deutsch)","language_selector_option_en_us":"Английский","language_selector_option_es_es":"Испанский - (Español)","language_selector_option_es_mx":"Латиноамериканский испанский - (Español Latinoamérica)","language_selector_option_fr_fr":"Французский - (Français)","language_selector_option_it_it":"Итальянский - (Italiano)","language_selector_option_ja_jp":"Японский - (日本語)","language_selector_option_ko_kr":"Корейский - (한국어)","language_selector_option_pl_pl":"Польский - (Polski)","language_selector_option_pt_br":"Бразильский португальский - (Português do Brasil)","language_selector_option_ru_ru":"Русский","language_selector_option_zh_hans":"Китайский (упрощенный) - (简体中文)","language_selector_option_zh_tw":"Китайский (традиционный) - (繁體中文)","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","www_link_manage_account":"Настройки"},"zh-CN":{"language_selector_default":"选择一种语言","language_selector_option_de_de":"德语 - (Deutsch)","language_selector_option_en_us":"英语 - (English)","language_selector_option_es_es":"西班牙语 - (Español)","language_selector_option_es_mx":"西班牙语（拉丁美洲）- (Español Latinoamérica)","language_selector_option_fr_fr":"法语 - (Français)","language_selector_option_it_it":"意大利语 - (Italiano)","language_selector_option_ja_jp":"日语 - (日本語)","language_selector_option_ko_kr":"韩语 - (한국어)","language_selector_option_pl_pl":"波兰语 - (Polski)","language_selector_option_pt_br":"葡萄牙语（巴西）- (Português do Brasil)","language_selector_option_ru_ru":"俄语 - (Русский)","language_selector_option_zh_hans":"简体中文","language_selector_option_zh_tw":"繁体中文 - (繁體中文)","nofications_new":"新通知","profile_selector_mugshot":"{userName}面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie政策","sc_link_cookies_settings":"Cookie设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","www_link_manage_account":"管理账户"},"zh-TW":{"language_selector_default":"選擇語言","language_selector_option_de_de":"德文 / Deutsch","language_selector_option_en_us":"英文 / English","language_selector_option_es_es":"西班牙文 / Español","language_selector_option_es_mx":"西班牙文（拉丁美洲）/ Español Latinoamérica","language_selector_option_fr_fr":"法文 / Français","language_selector_option_it_it":"意大利文 / Italiano","language_selector_option_ja_jp":"日文 / 日本語","language_selector_option_ko_kr":"韓文 / 한국어","language_selector_option_pl_pl":"波蘭文 / Polski","language_selector_option_pt_br":"葡萄牙文（巴西）/ Português do Brasil","language_selector_option_ru_ru":"俄文 / Русский","language_selector_option_zh_hans":"簡體中文 / 简体中文","language_selector_option_zh_tw":"繁體中文","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","www_link_manage_account":"管理帳戶"}}'),
        f = e => (0, c.withIntl)(e, m);
      var h = t(23743);
      const k = f(({
        theme: e,
        languageSelectorOpened: a,
        setLanguageSelectorOpened: t,
        location: s,
        parent: d = "element",
        onLanguageChange: m,
        ...f
      }) => {
        const {
          track: k
        } = (0, _.useGtmTrack)(), {
          formatMessage: b
        } = (0, c.useIntl)(), [v] = (0, c.getLocale)(), [w, y] = (0, o.useState)(!1), x = (0, o.useRef)(null), C = (0, o.useRef)(null), [j, S] = (0, o.useState)(0), N = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, M = e => {
          if (t && t(!1), v.subdomaincom === e || "none" === e) return void(t && t(!1));
          const a = c.locales.find(a => a.subdomaincom === e);
          a && m?.({
            selectedLocale: a,
            track: k,
            parent: d
          })
        };
        return (0, o.useEffect)(() => {
          void 0 !== a && !1 === a && !0 === w && y(!1)
        }, [a]), (0, o.useEffect)(() => {
          C.current && S(C.current.scrollHeight)
        }, [C]), "function" != typeof m ? null : (0, n.jsxs)(n.Fragment, {
          children: [N && "sc-menu" === e && (0, n.jsx)("div", {
            className: [p.languageSelector, w ? p.open : ""].join(" "),
            "data-theme": e,
            "data-testid": `${d}-language-selector`,
            ...f,
            children: (0, n.jsx)("div", {
              className: p.selectBoxWrapper,
              children: (0, n.jsxs)("select", {
                className: p.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  M(a)
                },
                "aria-label": b(g.language_selector_default),
                "data-testid": `${d}-language-selector-button`,
                children: [(0, n.jsx)("option", {
                  className: p.selectBoxOption,
                  value: "none",
                  "data-testid": `${d}-language-selector-current`,
                  children: c.locales.find(e => e.subdomaincom === v.subdomaincom)?.label ?? (0, n.jsx)(c.FormattedMessage, {
                    ...g.language_selector_default
                  })
                }), c.locales.map(({
                  label: e,
                  subdomaincom: a,
                  iso: t,
                  posix: s
                }) => {
                  const o = g[`language_selector_option_${s}`],
                    i = o ? b(o) : e;
                  return (0, n.jsxs)("option", {
                    className: p.selectBoxOption,
                    value: a,
                    "aria-labelledby": `foot_lang_${t}`,
                    children: [(0, n.jsx)(h.s6, {
                      id: `foot_lang_${t}`,
                      children: i
                    }), e]
                  }, `mobile-${a}`)
                })]
              })
            })
          }), (!N || "sc-menu" !== e) && "footer" !== e && (0, n.jsx)(u(), {
            active: w,
            focusTrapOptions: {
              onDeactivate: () => y(!1),
              clickOutsideDeactivates: !0,
              onActivate: () => {
                const e = x?.current?.querySelectorAll("a[aria-selected=true]");
                if (e?.length) {
                  const a = [...e].filter(e => e.checkVisibility());
                  a?.[0]?.focus()
                }
              }
            },
            children: (0, n.jsxs)("div", {
              className: [p.languageSelector, w ? p.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${d}-language-selector`,
              ...f,
              children: [(0, n.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!w), y(!w)
                },
                "data-testid": `${d}-language-selector-button`,
                id: `${d}-language-selector-button`,
                type: "button",
                "aria-label": b(g.language_selector_default),
                children: [(0, n.jsx)("i", {}), (0, n.jsx)("span", {
                  "data-testid": `${d}-language-selector-current`,
                  children: c.locales.find(e => e.subdomaincom === v.subdomaincom)?.label ?? (0, n.jsx)(c.FormattedMessage, {
                    ...g.language_selector_default
                  })
                })]
              }), (0, n.jsx)("div", {
                className: p.linkWrapper,
                ref: C,
                style: {
                  "--ls-linkWrapper-opened-height": `${j}px`
                },
                children: (0, n.jsx)("div", {
                  className: p.links,
                  ref: x,
                  role: "listbox",
                  "aria-label": b(g.language_selector_default),
                  children: c.locales.map(({
                    subdomaincom: e,
                    label: a,
                    iso: t,
                    posix: s
                  }) => {
                    const o = g[`language_selector_option_${s}`],
                      i = o ? b(o) : a;
                    return (0, n.jsxs)(r.A, {
                      onClick: a => {
                        a.preventDefault(), M(e)
                      },
                      tabIndex: w ? 0 : -1,
                      "data-testid": `${d}-language-selector-${e}`,
                      role: "option",
                      "aria-selected": v.subdomaincom === e,
                      "aria-labelledby": `foot_lang_${t}`,
                      children: [(0, n.jsx)(h.s6, {
                        id: `foot_lang_${t}`,
                        children: i
                      }), a]
                    }, a)
                  })
                })
              })]
            })
          }), "footer" === e && (0, n.jsxs)("div", {
            className: p.dropdownContainer,
            "data-testid": `${d}-language-selector`,
            ...f,
            children: [(0, n.jsx)(l.Globe, {
              size: "MD",
              label: ""
            }), (0, n.jsxs)(i.ms.bL, {
              className: p.dropdown,
              onValueChange: e => {
                M(e)
              },
              defaultValue: c.locales.find(e => e.subdomaincom === v.subdomaincom)?.subdomaincom,
              children: [(0, n.jsx)(i.ms.JU, {
                hideVisually: !0,
                children: b(g.language_selector_default)
              }), (0, n.jsxs)(i.ms.l9, {
                children: [(0, n.jsx)(i.ms.OE, {
                  placeholder: b(g.language_selector_default)
                }), (0, n.jsx)(i.ms.if, {})]
              }), (0, n.jsx)(i.ms.ZL, {
                children: (0, n.jsx)(i.ms.UC, {
                  style: {
                    zIndex: 1
                  },
                  children: (0, n.jsx)(i.ms.FK, {
                    children: c.locales.map(({
                      subdomaincom: e,
                      label: a,
                      iso: t,
                      posix: s
                    }) => {
                      const o = g[`language_selector_option_${s}`],
                        l = o ? b(o) : a;
                      return (0, n.jsx)(i.ms.c$, {
                        value: e,
                        testId: `${d}-language-selector-${e}`,
                        "aria-labelledby": `foot_lang_${t}`,
                        children: (0, n.jsxs)(i.ms.JP, {
                          children: [(0, n.jsx)(h.s6, {
                            id: `foot_lang_${t}`,
                            children: l
                          }), a]
                        })
                      }, a)
                    })
                  })
                })
              })]
            })]
          })]
        })
      });
      var b = t(35328),
        v = t(13331);
      const w = (0, v.makeVar)(!1),
        y = e => w(e),
        x = (0, v.makeVar)(-1),
        C = e => x(e),
        j = (0, v.makeVar)(-1),
        S = e => j(e),
        N = (0, v.makeVar)(!0),
        M = e => N(e),
        I = (0, v.makeVar)(!0),
        E = e => I(e),
        P = () => {
          const e = (0, v.useReactiveVar)(w),
            a = (0, v.useReactiveVar)(x),
            t = (0, v.useReactiveVar)(j),
            s = (0, v.useReactiveVar)(N),
            n = (0, v.useReactiveVar)(I);
          return (0, o.useEffect)(() => {
            n || (e && y(!1), s && (M(!1), C(-1)))
          }, [n]), (0, o.useEffect)(() => {
            !e && n && (s || M(!0))
          }, [e, n]), (0, o.useMemo)(() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: y,
            activeSubNavId: a,
            setActiveSubNavId: C,
            subNavExtraHeight: t,
            setSubNavExtraHeight: S,
            navOpened: s,
            setAccountNavOpened: M,
            charListHidden: n,
            setCharListHidden: E
          }), [e, a, t, s, n])
        },
        z = (0, c.defineMessages)({
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
          www_link_manage_account: {
            id: "www_link_manage_account",
            description: "A link to the rsgweb account settings page.",
            defaultMessage: "Manage Account"
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
      var L = t(54389),
        A = t.n(L),
        T = t(47279);
      const D = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        R = e => ({
          text: e.formatMessage(z.sc_link_help),
          target: "_self",
          ga: {
            ...D,
            text: z.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(z.sc_link_support),
            location: {
              domain: T.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(z.sc_link_legal),
            location: {
              domain: T.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(z.sc_link_privacy_policy),
            location: {
              domain: T.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(z.sc_link_cookies_policy),
            location: {
              domain: T.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(z.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(z.sc_link_do_not_sell_my_information),
            location: {
              domain: T.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        $ = ({
          to: e,
          target: a,
          className: t,
          onNavigate: s,
          onClick: o,
          reloadDocument: i,
          children: l,
          ...c
        }) => {
          const r = e?.startsWith("http");
          return (0, n.jsx)("a", {
            href: e,
            className: t,
            onClick: a => {
              o?.(a), r || i || (s ? (a.preventDefault(), s(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...c,
            children: l
          })
        },
        F = ({
          text: e,
          target: a,
          href: t,
          location: s,
          ga: o,
          dataTestId: i,
          isSubLink: l,
          hasNotifications: r = !1,
          onClickCallback: d = () => {},
          tabIndex: u,
          reloadDocument: g = !1,
          onNavigate: p
        }) => {
          const {
            track: m
          } = (0, _.useGtmTrack)(), f = (0, T.A)(), h = (0, c.useIntl)();
          let k = t;
          s && (k = s.domain === f.currentSite?.site ? s.path : `https://${f.sites[s.domain]}.rockstargames.com${s.path}`);
          const b = {
            ...o,
            link_url: k
          };
          return (0, n.jsxs)($, {
            className: l ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": i || "menuLink",
            title: e,
            to: k,
            target: a,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: u,
            onClick: e => {
              m(b), d(e)
            },
            onNavigate: p,
            children: [e, r && (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, n.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: h.formatMessage(z.nofications_new)
              })
            })]
          })
        },
        H = ({
          id: e,
          text: a,
          target: t,
          href: s,
          location: i,
          ga: l,
          hasNotifications: c = !1,
          dataTestId: r,
          children: d = [],
          activeSubNavId: u,
          setActiveSubNavId: g,
          setSubNavExtraHeight: p,
          reloadDocument: m = !1,
          onClickCallback: f = () => {},
          onNavigate: h
        }) => {
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, v.useWindowResize)(), {
            track: w
          } = (0, _.useGtmTrack)(), {
            navOpen: y
          } = (0, _.useRockstarUserState)(), x = (0, o.useRef)(null), [C, j] = (0, o.useState)(0), [S, N] = (0, o.useState)(0), [M, I] = (0, o.useState)(!0);
          return (0, o.useEffect)(() => {
            u !== e && !1 === M && I(!0), u === e && I(!1)
          }, [u]), (0, o.useEffect)(() => {
            if (!x.current) return;
            j(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), N(a)
            }
          }, [x, k, b]), d.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-platecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": r || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), w(l), u === e ? (g(-1), p(0)) : (g(e), p(C + S + S))
              },
              children: [(0, n.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, n.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, n.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platecbf6e64eadb6f965877129d539aa2dcd",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${C}px`
              },
              children: d.map(e => (0, o.createElement)(F, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: h
              }))
            })]
          }) : (0, n.jsx)(F, {
            text: a,
            target: t,
            href: s,
            location: i,
            ga: l,
            hasNotifications: c,
            dataTestId: r,
            isSubLink: !1,
            onClickCallback: f,
            tabIndex: y ? 0 : -1,
            reloadDocument: m,
            onNavigate: h
          })
        },
        O = ({
          sc: e,
          location: a,
          onNavigate: t
        }) => {
          const {
            windowWidth: s,
            windowHeight: i
          } = (0, v.useWindowResize)(), l = (0, c.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: d,
            activeSubNavId: u,
            setActiveSubNavId: g,
            subNavExtraHeight: p,
            setSubNavExtraHeight: m
          } = P(), {
            setSelectedCharacterTuple: f,
            navOpen: h
          } = (0, _.useRockstarUserState)(), b = (0, v.useLocale)(), w = (0, v.toScLocaleString)(b), [y, x] = (0, o.useState)(""), C = `${e.login}?returnUrl=${y}&lang=${w}`, j = `${e.signup}&returnUrl=${y}&lang=${w}`, S = (0, o.useMemo)(() => (0, T.A)(), []), N = (0, o.useMemo)(() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(z.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: z.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(z.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: z.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, R(e)])(l, C, j);
            return e
          }, [l, C, j, S]), [M, I] = (0, o.useState)(0), E = (0, o.createRef)(), L = () => {
            if (E.current) {
              const {
                current: e
              } = E, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, o.useEffect)(() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }, [JSON.stringify(a)]), (0, o.useEffect)(() => {
            f(!1)
          }, []), (0, o.useEffect)(() => {
            L(), A()(() => {
              setTimeout(L, 0)
            }, 300)
          }, [s, i]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, n.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: E,
                style: {
                  "--navWrap-max-height": `${p+M}px`
                },
                children: N.map(e => (0, o.createElement)(H, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: g,
                  setSubNavExtraHeight: m,
                  onNavigate: t,
                  key: e.text
                }))
              })
            }), (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, n.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  g(-1), d(e)
                },
                location: a,
                onLanguageChange: c.onLanguageChange
              })
            })]
          })
        };
      var B = t(85997),
        U = t(35959);
      var W = t(4921);
      const V = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b482619a" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        G = (0, o.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: s,
          testId: o,
          ...i
        }, l) {
          const c = V(e),
            r = (0, U.v6)(i, {
              className: (0, W.A)("rockstargames-modules-gtao-license-platef54750ef62f8600000c94f0caba85986", t),
              "data-testid": o
            });
          return (0, n.jsxs)("div", {
            "data-size": a,
            ref: l,
            ...r,
            children: [(0, n.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-modules-gtao-license-platea3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": V(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: c
              })
            }), (0, n.jsx)("span", {
              className: "rockstargames-modules-gtao-license-plated9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        });
      var Z = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const X = ({
          tagSize: e,
          platform: a,
          className: t = ""
        }) => {
          const {
            src: s,
            alt: o
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
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              className: (0, W.A)("rockstargames-modules-gtao-license-plateb0ff0045ed0326a46ca1e0867d2050c1", t),
              "data-testid": "platform-tag",
              "data-platform": a,
              "data-tag-size": e,
              src: s,
              alt: "",
              "aria-hidden": !0
            }), (0, n.jsx)(h.s6, {
              children: o
            })]
          })
        },
        q = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f368af6d2c11a28d31d2818e72150f5b.jpg";
      var J = t(81684),
        K = "var(--s4y1eh2)";
      const Y = "CharacterButton:characterName",
        Q = "CharacterButton:avatar",
        ee = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: s,
          onClick: i = () => {}
        }) => {
          const l = (0, c.useIntl)(),
            {
              currentCharId: r,
              setCurrentCharId: d
            } = (0, _.useRockstarUserState)(),
            u = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: p,
              mugshotUrl: m,
              stats: f
            } = e,
            [h, k] = (0, o.useState)(m),
            b = r === e.index;
          return (0, o.useEffect)(() => {
            u.current && a && a(u?.current?.offsetWidth)
          }, [u]), (0, n.jsxs)("button", {
            className: "s4y1eh0",
            type: "button",
            "aria-hidden": b,
            ref: u,
            tabIndex: s,
            onClick: () => i(-1),
            children: [(0, n.jsx)("div", {
              className: "s4y1eh1",
              children: (0, n.jsx)("div", {
                className: "s4y1eh3",
                "data-size": "small",
                style: (0, J.DI)({
                  [K]: `url(${q})`
                }),
                children: (0, n.jsx)("img", {
                  className: "s4y1eh4",
                  src: h,
                  alt: l.formatMessage(z.profile_selector_mugshot, {
                    userName: p
                  }),
                  onError: () => {
                    k(t(5931))
                  },
                  "data-testid": Q
                })
              })
            }), (0, n.jsxs)("div", {
              className: "s4y1eh5",
              children: [(0, n.jsxs)("div", {
                className: "s4y1eh6",
                children: [(0, n.jsx)(X, {
                  tagSize: Z.large,
                  platform: g
                }), (0, n.jsx)("div", {
                  className: "s4y1eh7",
                  "data-size": "small",
                  "data-testid": Y,
                  children: p
                })]
              }), (0, n.jsx)("div", {
                className: "s4y1eh8",
                children: (0, n.jsx)(G, {
                  size: "small",
                  rank: parseInt(f.overview.rank.value)
                })
              })]
            })]
          })
        };
      var ae = "var(--_1iotk8z1)";
      const te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        ne = "ProfileCard:bankValue",
        oe = "ProfileCard:cashValue",
        ie = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, _.useRockstarUser)(), {
            track: s
          } = (0, _.useGtmTrack)(), i = (0, c.useIntl)(), [l, r] = (0, o.useState)([]), [d, u] = (0, o.useState)(null), [g, p] = (0, o.useState)(null), [m, f] = (0, o.useState)(!1), [h, k] = (0, o.useState)(-1), [b, v] = (0, o.useState)([]), [w, y] = (0, o.useState)(0), x = t(5931), {
            platform: C
          } = e, [j, S] = (0, o.useState)("0"), [N, M] = (0, o.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), E = () => {
            L((0, n.jsx)("img", {
              src: x,
              alt: i.formatMessage(z.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [P, L] = (0, o.useState)((0, n.jsx)("img", {
            className: "_1iotk8z3",
            src: e.mugshotUrl,
            alt: i.formatMessage(z.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: E,
            "data-testid": se
          }));
          (0, o.useEffect)(() => {
            r(a.crews ?? [])
          }, [a.crews]), (0, o.useEffect)(() => {
            L((0, n.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: E,
              "data-testid": se
            })), S(I(e.stats.overview.bank.value)), M(I(e.stats.overview.cash.value)), y(parseInt(e.stats.overview.rank.value))
          }, [e, a.nickname]), (0, o.useEffect)(() => {
            l && l.forEach(e => {
              !0 === e.isPrimary && (u(e.crewTag), p(e.crewColour), k(e.rankOrder), f(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && f(!0))
            })
          }, [l]), (0, o.useEffect)(() => {
            const e = [];
            if (!m && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, n.jsx)("div", {
                className: "_1iotk8zc",
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }, [h, m, g]);
          const A = e => {
            e.stopPropagation(), s({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, n.jsxs)("div", {
            className: "_1iotk8z0",
            onClick: A,
            onKeyUp: A,
            role: "button",
            tabIndex: -1,
            children: [(0, n.jsxs)("div", {
              className: "_1iotk8z2",
              style: (0, J.DI)({
                [ae]: `url(${q})`
              }),
              children: [P, (0, n.jsx)("div", {
                className: "_1iotk8z4",
                "data-platform": C,
                children: (0, n.jsx)(X, {
                  className: "_1iotk8z5",
                  tagSize: Z.large,
                  platform: C
                })
              })]
            }), (0, n.jsxs)("div", {
              className: "_1iotk8z6",
              children: [(0, n.jsx)("div", {
                className: "_1iotk8z7",
                children: (0, n.jsxs)("div", {
                  className: "_1iotk8z8",
                  children: [(0, n.jsx)("span", {
                    className: "_1iotk8z9",
                    "data-testid": te,
                    children: e.platformUsername
                  }), d && (0, n.jsxs)("span", {
                    className: "_1iotk8za",
                    "data-arrow-tag": m,
                    children: [d, !m && (0, n.jsx)("div", {
                      className: "_1iotk8zb",
                      children: b
                    })]
                  })]
                })
              }), (0, n.jsxs)("div", {
                className: "_1iotk8zd",
                children: [(0, n.jsx)(G, {
                  className: "_1iotk8ze",
                  rank: w
                }), (0, n.jsxs)("div", {
                  className: "_1iotk8zf",
                  children: [(0, n.jsxs)("span", {
                    className: "_1iotk8zg",
                    "data-testid": oe,
                    children: ["$", N]
                  }), (0, n.jsxs)("span", {
                    className: "_1iotk8zh",
                    "data-testid": ne,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        le = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: s = null,
          slideClickCallback: i = null,
          children: l = [],
          disablePager: c = !1,
          disableSwiper: r = !1
        }) => {
          const _ = (0, o.createRef)(),
            d = (0, B.ri)(_, !1),
            [u, g] = (0, o.useState)(!1),
            [p, m] = (0, o.useState)(!1),
            [f, h] = (0, o.useState)(0),
            [k, b] = (0, o.useState)(0),
            [v, w] = (0, o.useState)([t]),
            [y, x] = (0, o.useState)(v[0]),
            [C, j] = (0, o.useState)(252),
            [S, N] = (0, o.useState)(0),
            [M, I] = (0, o.useState)([]),
            [E, P] = (0, o.useState)([]),
            [z, L] = (0, o.useState)(!1),
            A = e => {
              if (!0 === u || !0 === r) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            T = a => {
              if (!0 === u || 0 === k || !0 === r) return;
              m(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                n = t > k ? 1 : -1,
                o = Math.abs(k - t);
              o > e ? (n > 0 ? (() => {
                if (!0 === u) return;
                g(!0);
                const e = f - 1 < 0 ? 0 : f - 1;
                h(e), x(v[e]), s && s(e)
              })() : (() => {
                if (!0 === u) return;
                g(!0);
                let e = f + 1 >= v.length ? v.length - 1 : f + 1;
                e < 0 && (e = 0), h(e), x(v[e]), s && s(e)
              })(), b(0)) : x(v[f] + o * n)
            },
            D = () => {
              !0 !== u && !0 !== r && (g(!0), !0 !== u && (x(v[f]), b(0)), m(!1))
            };
          return (0, o.useEffect)(() => {
            const e = [];
            l.forEach(() => {
              e.push((0, o.createRef)())
            }), I(e)
          }, [l]), (0, o.useEffect)(() => {
            if (M.length < 1) return;
            j(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(t + a)
          }, [M]), (0, o.useEffect)(() => {
            !1 !== u && setTimeout(() => {
              g(!1)
            }, a)
          }, [u, a]), (0, o.useEffect)(() => {
            w(l.map((e, a) => (e => {
              let a = 0;
              const s = l.length;
              return 1 === s ? .5 * d - .5 * C - 2 * t + S : (0 === e && (a = t - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (d - (t - S))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * d - .5 * C + .5 * S)), a)
            })(a))), 1 === l.length ? L(!0) : L(!1)
          }, [_.current, l, d]), (0, o.useEffect)(() => {
            const e = (a = f, l.map((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            }));
            var a;
            P(e)
          }, [l, f]), (0, o.useEffect)(() => {
            !0 !== c && !0 !== r || x(v[0])
          }, [r, c, v]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              className: "e76uv90",
              ref: _,
              onTouchStart: A,
              onTouchMove: T,
              onTouchEnd: D,
              onMouseDown: A,
              onMouseMove: T,
              onMouseUp: D,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, n.jsx)("div", {
                className: "e76uv93",
                "data-interaction-blocked": u,
                "data-single-item": z,
                style: {
                  transform: z ? null : `translateX(${y}px)`
                },
                children: l.map((e, a) => (0, n.jsx)("div", {
                  onClick: () => (e => {
                    null === i || p || i(e)
                  })(a),
                  className: "e76uv92",
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`))
              })
            }), E.length > 1 && !1 === c && (0, n.jsx)("div", {
              className: "e76uv94",
              children: E.map((e, a) => (0, n.jsx)("div", {
                className: "e76uv95",
                "data-active": e.active
              }, a))
            })]
          })
        },
        ce = {
          languageSelector: "rockstargames-modules-gtao-license-plateb71a5b5521e679bcab20ec6302253996",
          nav: "rockstargames-modules-gtao-license-plateca9118e28091523e6679a3b95054fe93",
          navHeader: "rockstargames-modules-gtao-license-platefa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-gtao-license-platece91ee6ebb491174a4ccb4be628aaae7",
          open: "rockstargames-modules-gtao-license-platec5ffa3cbaa36329b72b3d928f9739849",
          pillBtn: "rockstargames-modules-gtao-license-plateb4f0b55680e047d303f82f34594abd96",
          profile: "rockstargames-modules-gtao-license-platee506a7deb95c0b0c9988325cc857ea9a",
          scCharacterList: "rockstargames-modules-gtao-license-platea84bbdd60e615baed0172e6b960c5d32",
          scCharacterSelectBtn: "rockstargames-modules-gtao-license-plateea15428b850bf436adda6f1dd8ac1af9",
          scCharacterSelector: "rockstargames-modules-gtao-license-platec3ea8d575c892277f23ad5b589977862",
          scProfile: "rockstargames-modules-gtao-license-platefb20979fe4aa7955196d74baf7d19379",
          selected: "rockstargames-modules-gtao-license-plateed6126bd2f36579f2b8035e7c6579eb7"
        },
        re = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: t,
          refCharacterListDesktop: s,
          menuPadding: i,
          longCharList: l,
          setLongCharList: r,
          isMobileMode: d,
          setIsMobileMode: u,
          location: g,
          onNavigate: p
        }) => {
          const {
            windowWidth: m,
            windowHeight: f
          } = (0, v.useWindowResize)(), h = (0, c.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: w,
            activeSubNavId: y,
            setActiveSubNavId: x,
            subNavExtraHeight: C,
            setSubNavExtraHeight: j,
            navOpened: S,
            setAccountNavOpened: N
          } = P(), [M, I] = (0, o.useState)(""), {
            webSettings: E
          } = (0, v.useRockstarWebSettings)(), {
            track: L
          } = (0, _.useGtmTrack)(), $ = (0, v.useRockstarTokenPing)(), {
            data: F,
            setData: O,
            loggedIn: U
          } = (0, _.useRockstarUser)(), {
            charactersNeeded: W,
            currentCharId: V,
            navOpen: G,
            setCurrentCharId: Z,
            setSelectedCharacterTuple: X,
            setUserData: q
          } = (0, _.useRockstarUserState)(), [J, K] = (0, o.useState)(null), [Y, Q] = (0, o.useState)(!1), [ae, te] = (0, o.useState)(!1), [se, ne] = (0, o.useState)(0), oe = (0, o.createRef)(), re = (0, B.ri)(oe, !1), _e = (0, o.createRef)(), [de, ue] = (0, o.useState)(0), [ge, pe] = (0, o.useState)([]), [me, fe] = (0, o.useState)(244), he = (0, o.useRef)(null), ke = (0, o.useMemo)(() => (0, T.A)(), []), be = (0, o.useMemo)(() => ((e, a, t, s, n) => [{
            text: e.formatMessage(z.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(z.www_link_manage_account),
              location: {
                domain: T.C.www,
                path: "/account"
              },
              target: "_self",
              ga: {
                ...D,
                text: z.www_link_manage_account.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(z.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...D,
                text: z.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(z.sc_link_game_activation),
              location: {
                domain: T.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...D,
                text: z.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(z.sc_link_notifications),
            location: {
              domain: T.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...D,
              text: z.sc_link_notifications.defaultMessage,
              location: {
                domain: T.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(z.sc_link_crews),
            location: {
              domain: T.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...D,
              text: z.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(z.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(z.sc_link_my_friends),
              location: {
                domain: T.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...D,
                text: z.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(z.sc_link_import_friends),
              location: {
                domain: T.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...D,
                text: z.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(z.sc_link_find_friends),
              location: {
                domain: T.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...D,
                text: z.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, R(e), {
            text: e.formatMessage(z.sc_link_log_out),
            href: `${a.logout}?returnUrl=${n}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...D,
              text: z.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, e, F, F.hasNotification, M), [h, e, F, M, ke]), ve = () => {
            te(i + me * se < re)
          }, we = () => {
            if (_e.current) {
              const {
                current: e
              } = _e, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ue(a + e)
              } else ue(a)
            }
          };
          return (0, o.useEffect)(() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ke.currentSite?.site === T.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }, [g]), (0, o.useEffect)(() => {
            pe(F?.characters?.[W] ?? [])
          }, [F, W]), (0, o.useEffect)(() => {
            F && q(F)
          }, [F]), (0, o.useEffect)(() => {
            const e = F?.characters?.gtao ?? [];
            if (null !== U && !e.length) return void X(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            X(!!a?.platform && [a.platform, a.characterSlot])
          }, [V, F, U]), (0, o.useEffect)(() => {
            (async () => {
              if (!F?.id || !G) return;
              const e = await (0, _.fetchUnreadNotificationCount)({
                pingBearer: $
              });
              let a = !1;
              e?.count && (a = e.count > 0), O(e => ({
                ...e,
                hasNotification: a
              }))
            })()
          }, [F, G]), (0, o.useEffect)(() => {
            ve()
          }, [me]), (0, o.useEffect)(() => {
            t(!0), u(m < 768), u(m < 768 || f < 649)
          }, [m, f]), (0, o.useEffect)(() => {
            let e = ge.length - 1;
            e < 0 && (e = 0), ne(e);
            const a = ge.length > 0 ? ge[V] ?? ge[0] : null;
            a && (K(a), ge.length > 1 ? Q(!0) : Q(!1), r(ge.length - 1 > 3))
          }, [V, ge]), (0, o.useEffect)(() => {
            ve()
          }, [se, d, m, ge]), (0, o.useEffect)(() => {
            we(), A()(() => {
              setTimeout(we, 0)
            }, 300)
          }, [m, f]), (0, o.useEffect)(() => {
            const e = E?.currentCharId ?? 0;
            e !== V && Z(Math.max(0, Math.min(e, ge.length - 1)))
          }, [ge, E]), (0, n.jsxs)(n.Fragment, {
            children: [null !== J && "gtao" === W && (0, n.jsxs)("div", {
              className: ce.scProfile,
              ref: he,
              tabIndex: -1,
              "aria-label": h.formatMessage(z.profile_selector_profile_card),
              children: [(0, n.jsx)(ie, {
                s: ce,
                character: J
              }), !0 === Y && (0, n.jsxs)("div", {
                className: ce.scCharacterSelector,
                children: [(0, n.jsx)("button", {
                  className: ce.scCharacterSelectBtn,
                  "aria-hidden": !G,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), L({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, n.jsx)("span", {
                    children: (0, n.jsx)(c.FormattedMessage, {
                      ...z.profile_selector_switch_character
                    })
                  })
                }), !d && (0, n.jsx)("div", {
                  className: ce.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": a,
                  ref: s,
                  children: ge.map(e => (0, n.jsx)(ee, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: fe
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                }), d && (0, n.jsx)("div", {
                  className: ce.scCharacterList,
                  "data-single-item": 2 === ge.length,
                  "data-swiper-disabled": ae,
                  "aria-hidden": a,
                  ref: oe,
                  children: (0, n.jsx)(le, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      L({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: ae,
                    disableSwiper: ae,
                    children: ge.filter((e, a) => a !== V).map(e => (0, o.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: fe,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    }))
                  })
                })]
              })]
            }), (0, n.jsxs)("nav", {
              className: ce.nav,
              "aria-hidden": !G,
              children: [(0, n.jsx)("button", {
                className: ce.navHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": G,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || N(!0)
                },
                "data-testid": "playerButton",
                children: (0, n.jsx)("span", {
                  className: ce.navHeaderText,
                  children: F.nickname
                })
              }), (0, n.jsx)("div", {
                className: ce.navWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: _e,
                style: {
                  "--navWrap-max-height": `${de+C}px`
                },
                children: be.map((e, a) => (0, o.createElement)(H, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: j,
                  onNavigate: p,
                  key: e.text
                }))
              })]
            }), (0, n.jsx)("div", {
              className: ce.scLanguageSelector,
              style: {
                visibility: G ? null : "hidden"
              },
              children: (0, n.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: w,
                location: g,
                onLanguageChange: c.onLanguageChange
              })
            })]
          })
        },
        _e = {
          dragHandle: "rockstargames-modules-gtao-license-plateff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-gtao-license-plateb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-gtao-license-platec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-gtao-license-plateb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-gtao-license-platec31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-gtao-license-plateeff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-gtao-license-platec5f6868e76307ee73276f140c2f988df"
        },
        de = (0, v.getConfigForDomain)(),
        ue = f(({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: s
          } = (0, v.useWindowResize)(), i = (0, c.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: d,
            navOpened: u,
            setAccountNavOpened: g,
            charListHidden: p,
            setCharListHidden: m
          } = P(), [f, h] = (0, o.useState)(!1), {
            navHidden: k = !1
          } = (0, v.useState)(), {
            loggedIn: w
          } = (0, _.useRockstarUser)(), {
            currentCharId: y,
            navOpen: x,
            setNavOpen: C,
            userData: j
          } = (0, _.useRockstarUserState)(), {
            track: S
          } = (0, _.useGtmTrack)(), [N, M] = (0, o.useState)(!1), I = (0, o.useRef)(), [E, L] = (0, o.useState)(0), A = (0, o.createRef)(), [T, D] = (0, o.useState)(!1), [R, $] = (0, o.useState)(0), [F, H] = (0, o.useState)(!1), {
            mutateWebSettings: B,
            webSettings: U
          } = (0, v.useRockstarWebSettings)(), W = (0, o.useCallback)(e => {
            m(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }, [I]);
          return (0, o.useEffect)(() => {
            null !== y && U.currentCharId !== y && B({
              key: "currentCharId",
              value: y
            }), !1 === w ? B({
              key: "currentCharId",
              value: null
            }) : w && j && j?.accountSynced && S({
              event: "account_synced"
            })
          }, [y, w, j?.accountSynced]), (0, o.useEffect)(() => {
            I.current && (!1 === p && !1 === N && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === p && (I.current.style.height = null))
          }, [p, I, N]), (0, o.useEffect)(() => {
            const e = () => {
                C(!1), W(!0)
              },
              a = a => {
                const t = A?.current && a?.composedPath().includes(A.current);
                x && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }, [A]), (0, o.useEffect)(() => {
            C(!1), W(!0)
          }, [k]), (0, o.useEffect)(() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }, [A]), (0, o.useEffect)(() => {
            H(window.navigator.userAgent.includes("Mac"))
          }, []), (0, o.useEffect)(() => {
            A.current && h(A?.current?.scrollHeight >= s)
          }, [A, s]), (0, o.useEffect)(() => {
            x || (d(-1), r(!1))
          }, [x]), (0, o.useEffect)(() => {
            l && (p || W(!0), u && (g(!1), d(-1)))
          }, [l]), (0, o.useEffect)(() => {
            u && (l && r(!1), p || W(!0))
          }, [u]), void 0 === w ? null : (0, n.jsxs)(b.A, {
            enabled: !!x,
            removeScrollBar: !1,
            children: [(0, n.jsxs)("div", {
              className: [_e.menu, x ? _e.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": F,
              "data-scroll-mode": f,
              ref: A,
              "aria-hidden": !x,
              children: [(0, n.jsx)("button", {
                className: _e.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  $(a)
                },
                onTouchMove: e => {
                  if (0 === R) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(R - a) > 1 && ($(0), C(!1))
                },
                children: (0, n.jsx)("img", {
                  className: _e.dragHandle,
                  src: t(35902),
                  alt: i.formatMessage(z.sc_menu_drag_handle)
                })
              }), w ? (0, n.jsx)(re, {
                sc: de,
                charListHidden: p,
                hideCharacterList: W,
                refCharacterListDesktop: I,
                menuPadding: E,
                longCharList: N,
                setLongCharList: M,
                isMobileMode: T,
                setIsMobileMode: D,
                location: e,
                onNavigate: a
              }) : (0, n.jsx)(O, {
                sc: de,
                navOpen: x,
                location: e,
                onNavigate: a
              })]
            }), (0, n.jsx)("div", {
              className: [_e.scOverlay, x ? _e.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }),
        ge = f(({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, c.useIntl)(),
            {
              data: s,
              loggedIn: i
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: l,
              currentCharId: r,
              navOpen: d,
              setNavOpen: u
            } = (0, _.useRockstarUserState)(),
            {
              track: g
            } = (0, _.useGtmTrack)(),
            [p, m] = (0, o.useState)(),
            [f, h] = (0, o.useState)(!1),
            [k, b] = (0, o.useState)([]);
          (0, o.useEffect)(() => {
            b(s?.characters?.[l] ?? [])
          }, [s, l]);
          const v = (0, o.useCallback)(a => {
            a.stopPropagation(), u(!d), 1 == !d && e(null), g({
              event: "account_menu_click",
              element_placement: "account menu",
              text: d ? "close" : "open"
            })
          }, [d]);
          return (0, o.useEffect)(() => {
            h(!!k?.[r]?.mugshotUrl)
          }, [k, r]), (0, o.useEffect)(() => {
            m((() => {
              switch (i) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return k?.[r]?.mugshotUrl ?? s?.avatar
              }
            })())
          }, [s, k, r, i]), (0, n.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(d ? z.sc_menu_close : z.sc_menu_open),
            "aria-expanded": d,
            type: "button",
            onClick: v,
            "data-mugshot": f,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(i),
            children: [(0, n.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: p,
              alt: s?.nickname || "",
              onError: () => {
                let e = t(73091);
                f && (e = t(5931)), m(e)
              }
            }), i && f && (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              children: (0, n.jsx)(X, {
                platform: k?.[r]?.platform,
                tagSize: Z.small
              })
            }), i && (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": k?.[r]?.platform ?? null
            })]
          })
        });
      var pe = "_1tuft8a3",
        me = "_1tuft8a2",
        fe = "_1tuft8a4",
        he = "_1tuft8a1",
        ke = "_1tuft8a0";
      const be = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        ve = f(() => {
          const e = (0, c.useIntl)(),
            {
              track: a
            } = (0, _.useGtmTrack)(),
            [t, i] = (0, o.useState)(null),
            [r, d] = (0, o.useState)(0),
            [u, g] = (0, o.useState)(!1),
            [p, m] = (0, o.useState)(!1),
            f = (0, o.createRef)(),
            [h, k] = (0, o.useState)([]),
            [b, w] = (0, o.useState)(244),
            {
              windowWidth: y
            } = (0, v.useWindowResize)(),
            [x, C] = (0, o.useState)(!1),
            j = (0, B.ri)(f, !1),
            {
              data: S,
              loggedIn: N
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: M,
              currentCharId: I,
              setCurrentCharId: E
            } = (0, _.useRockstarUserState)(),
            {
              charListHidden: L,
              setCharListHidden: A
            } = P();
          (0, o.useEffect)(() => {
            void 0 === I && E(0)
          }, [I]), (0, o.useEffect)(() => {
            let e = h.length - 1;
            e < 0 && (e = 0), d(e);
            const a = h.length > 0 ? h[I] ?? h[0] : null;
            a && (i(a), h.length > 1 ? m(!0) : m(!1))
          }, [I, h]), (0, o.useEffect)(() => {
            k(S?.characters?.[M] ?? [])
          }, [S, M]), (0, o.useEffect)(() => {
            T()
          }, [b, r, x, y, h]), (0, o.useEffect)(() => {
            C(y < 1024)
          }, [y]);
          const T = () => {
              g(b * r < j)
            },
            D = e => {
              const t = h.filter((e, a) => a !== I).map(e => e);
              E(t[e].index), a({
                event: "character_selector_select",
                text: be[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === M && N ? (0, n.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(z.profile_selector_profile_card),
            children: [(0, n.jsx)(ie, {
              s,
              character: t
            }), !0 === p && (0, n.jsxs)("div", {
              className: ke,
              children: [(0, n.jsxs)("button", {
                className: he,
                "data-list-closed": L,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !L;
                  A(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: [(0, n.jsx)("span", {
                  className: me,
                  children: (0, n.jsx)(c.FormattedMessage, {
                    ...z.profile_selector_switch_character
                  })
                }), (0, n.jsx)(l.ChevronDown, {
                  className: pe,
                  label: ""
                })]
              }), !x && (0, n.jsx)("div", {
                className: fe,
                "aria-hidden": L,
                children: h.filter((e, a) => a !== I).map((e, a) => (0, n.jsx)(ee, {
                  tabIndex: L ? -1 : 0,
                  onClick: () => D(a),
                  characterData: e,
                  setMobileCardWidth: w
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
              }), x && (0, n.jsx)("div", {
                className: fe,
                "data-single-item": 2 === h.length,
                "data-swiper-disabled": u,
                "aria-hidden": L,
                ref: f,
                children: (0, n.jsx)(le, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: D,
                  disablePager: u,
                  disableSwiper: u,
                  children: h.filter((e, a) => a !== I).map(e => (0, o.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: w,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: L ? -1 : 0
                  }))
                })
              })]
            })]
          }) : null
        })
    },
    47279(e, a, t) {
      t.d(a, {
        A: () => r,
        C: () => l
      });
      var s = t(54028),
        n = t.n(s),
        o = t(15963),
        i = t.n(o);
      const l = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        c = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = c.findIndex(a => Object.entries(a.sites).findIndex(([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0)) >= 0), o = c[s >= 0 ? s : 0], l = c.find(e => e.id === o.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(n()({}, l, {
            currentSite: e
          }, o), "fallbackEnvironment")
        }
    },
    35902(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    32810(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    73091(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    5931(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    }
  }
]);