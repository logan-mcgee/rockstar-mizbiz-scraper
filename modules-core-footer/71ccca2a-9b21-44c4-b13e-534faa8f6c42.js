try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "71ccca2a-9b21-44c4-b13e-534faa8f6c42", e._sentryDebugIdIdentifier = "sentry-dbid-71ccca2a-9b21-44c4-b13e-534faa8f6c42")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8887], {
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    37290: (e, a, s) => {
      s.r(a), s.d(a, {
        CharacterProfile: () => aa,
        LanguageSelector: () => h,
        Menu: () => Ge,
        MenuButton: () => Xe
      });
      var t = {};
      s.r(t), s.d(t, {
        avatar: () => J,
        avatarBG: () => Y,
        avatarFrame: () => Q,
        avatarImg: () => ee,
        characterBtn: () => ae,
        characterBtnStats: () => se,
        scCharBtnNames: () => te,
        scRp: () => oe,
        scUserName: () => ce
      });
      var o = {};
      s.r(o), s.d(o, {
        avatar: () => _e,
        avatarBG: () => de,
        avatarImg: () => ue,
        avatarPlatform: () => me,
        platformTag: () => fe,
        profileDetails: () => ge,
        profileStats: () => pe,
        scBank: () => ke,
        scCash: () => he,
        scCrewName: () => be,
        scCrewRankBar: () => ve,
        scCrewRankBarItem: () => we,
        scMoney: () => Ce,
        scNames: () => ye,
        scProgress: () => xe,
        scRpLevel: () => Se,
        scTagsNames: () => Ne,
        scUserName: () => je
      });
      var c = {};
      s.r(c), s.d(c, {
        scCustomSwiper: () => Ae,
        scCustomSwiperItem: () => Re,
        scCustomSwiperTouchScreen: () => De,
        scCustomSwiperWrap: () => Be,
        scPager: () => ze,
        scPagerItem: () => He
      });
      var i = {};
      s.r(i), s.d(i, {
        scCharacterBtnIcon: () => Ze,
        scCharacterBtnText: () => qe,
        scCharacterList: () => Ke,
        scCharacterSelectBtn: () => Je,
        scCharacterSelector: () => Ye
      });
      var r = s(42295),
        n = s(71127),
        l = s(21994),
        _ = s(45021),
        d = s(81788),
        u = s(78795),
        m = s(2918);
      const f = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        g = {
          dropdown: "rockstargames-modules-core-footercb93b1e1dbe15862e05455dc78f5ec25",
          dropdownContainer: "rockstargames-modules-core-footerab0cc073180383d3d5e4bee00eaa311f",
          languageSelector: "rockstargames-modules-core-footera9dd8a9cb7334e205df4ac3b4392916d",
          linkWrapper: "rockstargames-modules-core-footerb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-footerc64b05a604b1a6be373d35cf01edba2e",
          menuStyles: "rockstargames-modules-core-footerb641fac428f473cbb4593cd058a01953",
          open: "rockstargames-modules-core-footeraa1d94595080f833a35e29fbbe8fd01c",
          pillBtn: "rockstargames-modules-core-footere34929a5bcdda554c66b47a858ddd966",
          selectBox: "rockstargames-modules-core-footerfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-footerae32febd9789e79c804b2679d25e8a65",
          selectBoxWrapper: "rockstargames-modules-core-footerdb1aead5717ba9dae1e272c3b7e6e801",
          selected: "rockstargames-modules-core-footere1ba906f108faeb297753d39a8d21b8b"
        },
        p = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen"},"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"},"es-ES":{"language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador"},"es-MX":{"language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador"},"fr-FR":{"language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur"},"it-IT":{"language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore"},"ja-JP":{"language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く"},"ko-KR":{"language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기"},"pl-PL":{"language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza"},"pt-BR":{"language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador"},"ru-RU":{"language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока"},"zh-CN":{"language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单"},"zh-TW":{"language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單"}}'),
        k = e => (0, d.withIntl)(e, p),
        h = k(({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: s,
          location: t,
          parent: o = "element",
          onLanguageChange: c,
          ...i
        }) => {
          const {
            track: p
          } = (0, m.useGtmTrack)(), k = (0, d.useIntl)(), [h] = (0, d.getLocale)(), [b, v] = (0, n.useState)(!1), w = (0, n.useRef)(null), [C, y] = (0, n.useState)(0), x = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, S = e => {
            if (s && s(!1), h.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = d.locales.find(a => a.subdomaincom === e);
            a && c?.({
              selectedLocale: a,
              track: p,
              parent: o
            })
          };
          return (0, n.useEffect)(() => {
            void 0 !== a && !1 === a && !0 === b && v(!1)
          }, [a]), (0, n.useEffect)(() => {
            w.current && y(w.current.scrollHeight)
          }, [w]), "function" != typeof c ? null : (0, r.jsxs)(r.Fragment, {
            children: [x && "sc-menu" === e && (0, r.jsx)("div", {
              className: [g.languageSelector, b ? g.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${o}-language-selector`,
              ...i,
              children: (0, r.jsx)("div", {
                className: g.selectBoxWrapper,
                children: (0, r.jsxs)("select", {
                  className: g.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    S(a)
                  },
                  "aria-label": k.formatMessage(f.language_selector_default),
                  "data-testid": `${o}-language-selector-button`,
                  children: [(0, r.jsx)("option", {
                    className: g.selectBoxOption,
                    value: "none",
                    "data-testid": `${o}-language-selector-current`,
                    children: d.locales.find(e => e.subdomaincom === h.subdomaincom)?.label ?? (0, r.jsx)(d.FormattedMessage, {
                      ...f.language_selector_default
                    })
                  }), d.locales.map(({
                    label: e,
                    subdomaincom: a
                  }) => (0, r.jsx)("option", {
                    className: g.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`))]
                })
              })
            }), (!x || "sc-menu" !== e) && "footer" !== e && (0, r.jsxs)("div", {
              className: [g.languageSelector, b ? g.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${o}-language-selector`,
              ...i,
              children: [(0, r.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!b), v(!b)
                },
                "data-testid": `${o}-language-selector-button`,
                type: "button",
                "aria-label": k.formatMessage(f.language_selector_default),
                children: [(0, r.jsx)("i", {}), (0, r.jsx)("span", {
                  "data-testid": `${o}-language-selector-current`,
                  children: d.locales.find(e => e.subdomaincom === h.subdomaincom)?.label ?? (0, r.jsx)(d.FormattedMessage, {
                    ...f.language_selector_default
                  })
                })]
              }), (0, r.jsx)("div", {
                className: g.linkWrapper,
                ref: w,
                style: {
                  "--ls-linkWrapper-opened-height": `${C}px`
                },
                children: (0, r.jsx)("div", {
                  className: g.links,
                  children: d.locales.map(({
                    subdomaincom: e,
                    label: a
                  }) => (0, r.jsx)(u.A, {
                    onClick: a => {
                      a.preventDefault(), S(e)
                    },
                    tabIndex: b ? 0 : -1,
                    "data-testid": `${o}-language-selector-${e}`,
                    children: a
                  }, a))
                })
              })]
            }), "footer" === e && (0, r.jsxs)("div", {
              className: g.dropdownContainer,
              "data-testid": `${o}-language-selector`,
              ...i,
              children: [(0, r.jsx)(_.Globe, {
                size: "MD",
                label: ""
              }), (0, r.jsxs)(l.Dropdown.Root, {
                className: g.dropdown,
                onValueChange: e => {
                  S(e)
                },
                defaultValue: d.locales.find(e => e.subdomaincom === h.subdomaincom)?.subdomaincom,
                children: [(0, r.jsxs)(l.Dropdown.Trigger, {
                  children: [(0, r.jsx)(l.Dropdown.TriggerText, {
                    placeholder: k.formatMessage(f.language_selector_default)
                  }), (0, r.jsx)(l.Dropdown.TriggerIcon, {})]
                }), (0, r.jsx)(l.Dropdown.Portal, {
                  children: (0, r.jsx)(l.Dropdown.Content, {
                    style: {
                      zIndex: 1
                    },
                    children: (0, r.jsx)(l.Dropdown.ScrollArea, {
                      children: d.locales.map(({
                        subdomaincom: e,
                        label: a
                      }) => (0, r.jsx)(l.Dropdown.Option, {
                        value: e,
                        testId: `${o}-language-selector-${e}`,
                        children: (0, r.jsx)(l.Dropdown.OptionText, {
                          children: a
                        })
                      }, a))
                    })
                  })
                })]
              })]
            })]
          })
        });
      var b = s(97359),
        v = s(95966);
      const w = (0, v.makeVar)(!1),
        C = e => w(e),
        y = (0, v.makeVar)(-1),
        x = e => y(e),
        S = (0, v.makeVar)(-1),
        N = e => S(e),
        j = (0, v.makeVar)(!0),
        M = e => j(e),
        I = (0, v.makeVar)(!0),
        P = e => I(e),
        E = () => {
          const e = (0, v.useReactiveVar)(w),
            a = (0, v.useReactiveVar)(y),
            s = (0, v.useReactiveVar)(S),
            t = (0, v.useReactiveVar)(j),
            o = (0, v.useReactiveVar)(I);
          return (0, n.useEffect)(() => {
            o || (e && C(!1), t && (M(!1), x(-1)))
          }, [o]), (0, n.useEffect)(() => {
            !e && o && (t || M(!0))
          }, [e, o]), (0, n.useMemo)(() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: C,
            activeSubNavId: a,
            setActiveSubNavId: x,
            subNavExtraHeight: s,
            setSubNavExtraHeight: N,
            navOpened: t,
            setAccountNavOpened: M,
            charListHidden: o,
            setCharListHidden: P
          }), [e, a, s, t, o])
        },
        T = (0, d.defineMessages)({
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
      var L = s(9738),
        A = s.n(L),
        R = s(79867);
      const D = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        B = e => ({
          text: e.formatMessage(T.sc_link_help),
          target: "_self",
          ga: {
            ...D,
            text: T.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(T.sc_link_support),
            location: {
              domain: R.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...D,
              text: T.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(T.sc_link_legal),
            location: {
              domain: R.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...D,
              text: T.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(T.sc_link_privacy_policy),
            location: {
              domain: R.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...D,
              text: T.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(T.sc_link_cookies_policy),
            location: {
              domain: R.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...D,
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
              ...D,
              text: T.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(T.sc_link_do_not_sell_my_information),
            location: {
              domain: R.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...D,
              text: T.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        z = ({
          to: e,
          target: a,
          className: s,
          onNavigate: t,
          onClick: o,
          reloadDocument: c,
          children: i,
          ...n
        }) => {
          const l = e?.startsWith("http");
          return (0, r.jsx)("a", {
            href: e,
            className: s,
            onClick: a => {
              o?.(a), l || c || (t ? (a.preventDefault(), t(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...n,
            children: i
          })
        },
        H = ({
          text: e,
          target: a,
          href: s,
          location: t,
          ga: o,
          dataTestId: c,
          isSubLink: i,
          hasNotifications: n = !1,
          onClickCallback: l = () => {},
          tabIndex: _,
          reloadDocument: u = !1,
          onNavigate: f
        }) => {
          const {
            track: g
          } = (0, m.useGtmTrack)(), p = (0, R.A)(), k = (0, d.useIntl)();
          let h = s;
          t && (h = t.domain === p.currentSite?.site ? t.path : `https://${p.sites[t.domain]}.rockstargames.com${t.path}`);
          const b = {
            ...o,
            link_url: h
          };
          return (0, r.jsxs)(z, {
            className: i ? "rockstargames-modules-core-footerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-footerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": c || "menuLink",
            title: e,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: _,
            onClick: e => {
              g(b), l(e)
            },
            onNavigate: f,
            children: [e, n && (0, r.jsx)("div", {
              className: "rockstargames-modules-core-footeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, r.jsx)("span", {
                className: "rockstargames-modules-core-footere49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(T.nofications_new)
              })
            })]
          })
        },
        O = ({
          id: e,
          text: a,
          target: s,
          href: t,
          location: o,
          ga: c,
          hasNotifications: i = !1,
          dataTestId: l,
          children: _ = [],
          activeSubNavId: d,
          setActiveSubNavId: u,
          setSubNavExtraHeight: f,
          reloadDocument: g = !1,
          onClickCallback: p = () => {},
          onNavigate: k
        }) => {
          const {
            windowWidth: h,
            windowHeight: b
          } = (0, v.useWindowResize)(), {
            track: w
          } = (0, m.useGtmTrack)(), {
            navOpen: C
          } = (0, m.useRockstarUserState)(), y = (0, n.useRef)(null), [x, S] = (0, n.useState)(0), [N, j] = (0, n.useState)(0), [M, I] = (0, n.useState)(!0);
          return (0, n.useEffect)(() => {
            d !== e && !1 === M && I(!0), d === e && I(!1)
          }, [d]), (0, n.useEffect)(() => {
            if (!y.current) return;
            S(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }, [y, h, b]), _.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("button", {
              className: "rockstargames-modules-core-footercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), w(c), d === e ? (u(-1), f(0)) : (u(e), f(x + N + N))
              },
              children: [(0, r.jsx)("span", {
                className: "rockstargames-modules-core-footerb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, r.jsx)("span", {
                className: "rockstargames-modules-core-footerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, r.jsx)("nav", {
              className: "rockstargames-modules-core-footercbf6e64eadb6f965877129d539aa2dcd",
              ref: y,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${x}px`
              },
              children: _.map(e => (0, n.createElement)(H, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !C ? -1 : 0,
                onNavigate: k
              }))
            })]
          }) : (0, r.jsx)(H, {
            text: a,
            target: s,
            href: t,
            location: o,
            ga: c,
            hasNotifications: i,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: C ? 0 : -1,
            reloadDocument: g,
            onNavigate: k
          })
        },
        $ = ({
          sc: e,
          location: a,
          onNavigate: s
        }) => {
          const {
            windowWidth: t,
            windowHeight: o
          } = (0, v.useWindowResize)(), c = (0, d.useIntl)(), {
            languageSelectorOpened: i,
            setLanguageSelectorOpened: l,
            activeSubNavId: _,
            setActiveSubNavId: u,
            subNavExtraHeight: f,
            setSubNavExtraHeight: g
          } = E(), {
            setSelectedCharacterTuple: p,
            navOpen: k
          } = (0, m.useRockstarUserState)(), b = (0, v.useLocale)(), w = (0, v.toScLocaleString)(b), [C, y] = (0, n.useState)(""), x = `${e.login}?returnUrl=${C}&lang=${w}`, S = `${e.signup}&returnUrl=${C}&lang=${w}`, N = (0, n.useMemo)(() => (0, R.A)(), []), j = (0, n.useMemo)(() => {
            const e = ((e, a, s) => [{
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
              href: s,
              ga: {
                event: "cta_signup",
                text: T.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, B(e)])(c, x, S);
            return e
          }, [c, x, S, N]), [M, I] = (0, n.useState)(0), P = (0, n.createRef)(), L = () => {
            if (P.current) {
              const {
                current: e
              } = P, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, n.useEffect)(() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            y(e)
          }, [JSON.stringify(a)]), (0, n.useEffect)(() => {
            p(!1)
          }, []), (0, n.useEffect)(() => {
            L(), A()(() => {
              setTimeout(L, 0)
            }, 300)
          }, [t, o]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("nav", {
              className: "rockstargames-modules-core-footerf300d66bd02f52ac564238ca6125a091",
              children: (0, r.jsx)("div", {
                className: "rockstargames-modules-core-footerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: P,
                style: {
                  "--navWrap-max-height": `${f+M}px`
                },
                children: j.map(e => (0, n.createElement)(O, {
                  ...e,
                  activeSubNavId: _,
                  setActiveSubNavId: u,
                  setSubNavExtraHeight: g,
                  onNavigate: s,
                  key: e.text
                }))
              })
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-footerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: k ? null : "hidden"
              },
              children: (0, r.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: i,
                setLanguageSelectorOpened: e => {
                  u(-1), l(e)
                },
                location: a,
                onLanguageChange: d.onLanguageChange
              })
            })]
          })
        };
      var U = s(56088),
        F = s(75523);
      var W = s(10439);
      const V = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        G = (0, n.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: s,
          alt: t,
          testId: o,
          ...c
        }, i) {
          const n = V(e),
            l = (0, F.v6)(c, {
              className: (0, W.A)("rockstargames-modules-core-footerf54750ef62f8600000c94f0caba85986", s),
              "data-testid": o
            });
          return (0, r.jsxs)("div", {
            "data-size": a,
            ref: i,
            ...l,
            children: [(0, r.jsx)("svg", {
              role: "svg",
              "aria-label": t,
              className: "rockstargames-modules-core-footera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": V(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: n
              })
            }), (0, r.jsx)("span", {
              className: "rockstargames-modules-core-footerd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        });
      var X = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const Z = ({
          tagSize: e,
          platform: a,
          className: s = ""
        }) => {
          const {
            src: t,
            alt: o
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
          return (0, r.jsx)("img", {
            className: (0, W.A)("rockstargames-modules-core-footerb0ff0045ed0326a46ca1e0867d2050c1", s),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: t,
            alt: o
          })
        },
        q = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f368af6d2c11a28d31d2818e72150f5b.jpg";
      var K = s(93715),
        J = (s(57461), "hcgjf93"),
        Y = "var(--hcgjf92)",
        Q = "hcgjf91",
        ee = "hcgjf94",
        ae = "hcgjf90",
        se = "hcgjf95",
        te = "hcgjf96",
        oe = "hcgjf98",
        ce = "hcgjf97";
      let ie = {
        avatar: "rockstargames-modules-core-footerd79f37fd31c0943cbf4368215dfc79a0",
        characterBtn: "rockstargames-modules-core-footerb26daf00eb7def0a82a3c1481316acb0",
        characterBtnStats: "rockstargames-modules-core-footered30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-modules-core-footera6009feaf97e98d18c6efc2de47ba8b4",
        scRp: "rockstargames-modules-core-footerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpIcon: "rockstargames-modules-core-footerfaa7b2808fb96fa02fd2e99be36df8e6",
        scRpLevel: "rockstargames-modules-core-footerc9300f34b82bbdffb7006ff32247adff",
        scUserName: "rockstargames-modules-core-footerc3ab062db0e9e0f75e0598eec5022de5"
      };
      ie = t;
      const re = "CharacterButton:characterName",
        ne = "CharacterButton:avatar",
        le = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: t,
          onClick: o = () => {}
        }) => {
          const c = (0, d.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: l
            } = (0, m.useRockstarUserState)(),
            _ = (0, n.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: g,
              stats: p
            } = e,
            [k, h] = (0, n.useState)(g),
            b = i === e.index;
          return (0, n.useEffect)(() => {
            _.current && a && a(_?.current?.offsetWidth)
          }, [_]), (0, r.jsxs)("button", {
            className: ie.characterBtn,
            type: "button",
            "aria-hidden": b,
            ref: _,
            tabIndex: t,
            onClick: () => o(-1),
            children: [(0, r.jsx)("div", {
              className: ie.avatarFrame,
              children: (0, r.jsx)("div", {
                className: ie.avatar,
                "data-size": "small",
                style: (0, K.DI)({
                  [ie.avatarBG]: `url(${q})`
                }),
                children: (0, r.jsx)("img", {
                  className: ie.avatarImg,
                  src: k,
                  alt: c.formatMessage(T.profile_selector_mugshot, {
                    userName: f
                  }),
                  onError: () => {
                    h(s(5931))
                  },
                  "data-testid": ne
                })
              })
            }), (0, r.jsxs)("div", {
              className: ie.characterBtnStats,
              children: [(0, r.jsxs)("div", {
                className: ie.scCharBtnNames,
                children: [(0, r.jsx)(Z, {
                  tagSize: X.large,
                  platform: u
                }), (0, r.jsx)("div", {
                  className: ie.scUserName,
                  "data-size": "small",
                  "data-testid": re,
                  children: f
                })]
              }), (0, r.jsx)("div", {
                className: ie.scRp,
                children: (0, r.jsx)(G, {
                  size: "small",
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        };
      var _e = "ay40go2",
        de = "var(--ay40go1)",
        ue = "ay40go3",
        me = "ay40go4",
        fe = "ay40go5",
        ge = "ay40go0",
        pe = "ay40go6",
        ke = "ay40goh",
        he = "ay40gog",
        be = "ay40goa",
        ve = "ay40gob",
        we = "ay40goc",
        Ce = "ay40gof",
        ye = "ay40go7",
        xe = "ay40god",
        Se = "ay40goe",
        Ne = "ay40go8",
        je = "ay40go9";
      let Me;
      Me = o;
      const Ie = "ProfileCard:characterName",
        Pe = "ProfileCard:avatar",
        Ee = "ProfileCard:bankValue",
        Te = "ProfileCard:cashValue",
        Le = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, m.useRockstarUser)(), {
            track: t
          } = (0, m.useGtmTrack)(), o = (0, d.useIntl)(), [c, i] = (0, n.useState)([]), [l, _] = (0, n.useState)(null), [u, f] = (0, n.useState)(null), [g, p] = (0, n.useState)(!1), [k, h] = (0, n.useState)(-1), [b, v] = (0, n.useState)([]), [w, C] = (0, n.useState)(0), y = s(5931), {
            platform: x
          } = e, [S, N] = (0, n.useState)("0"), [j, M] = (0, n.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            L((0, r.jsx)("img", {
              src: y,
              alt: o.formatMessage(T.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [E, L] = (0, n.useState)((0, r.jsx)("img", {
            className: Me.avatarImg,
            src: e.mugshotUrl,
            alt: o.formatMessage(T.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: P,
            "data-testid": Pe
          }));
          (0, n.useEffect)(() => {
            i(a.crews ?? [])
          }, [a.crews]), (0, n.useEffect)(() => {
            L((0, r.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: P,
              "data-testid": Pe
            })), N(I(e.stats.overview.bank.value)), M(I(e.stats.overview.cash.value)), C(parseInt(e.stats.overview.rank.value))
          }, [e, a.nickname]), (0, n.useEffect)(() => {
            c && c.forEach(e => {
              !0 === e.isPrimary && (_(e.crewTag), f(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            })
          }, [c]), (0, n.useEffect)(() => {
            const e = [];
            if (!g && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, r.jsx)("div", {
                className: Me.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }, [k, g, u]);
          const A = e => {
            e.stopPropagation(), t({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, r.jsxs)("div", {
            className: Me.profileDetails,
            onClick: A,
            onKeyUp: A,
            role: "button",
            tabIndex: -1,
            children: [(0, r.jsxs)("div", {
              className: Me.avatar,
              style: (0, K.DI)({
                [Me.avatarBG]: `url(${q})`
              }),
              children: [E, (0, r.jsx)("div", {
                className: Me.avatarPlatform,
                "data-platform": x,
                children: (0, r.jsx)(Z, {
                  className: Me.platformTag,
                  tagSize: X.large,
                  platform: x
                })
              })]
            }), (0, r.jsxs)("div", {
              className: Me.profileStats,
              children: [(0, r.jsx)("div", {
                className: Me.scNames,
                children: (0, r.jsxs)("div", {
                  className: Me.scTagsNames,
                  children: [(0, r.jsx)("span", {
                    className: Me.scUserName,
                    "data-testid": Ie,
                    children: e.platformUsername
                  }), l && (0, r.jsxs)("span", {
                    className: Me.scCrewName,
                    "data-arrow-tag": g,
                    children: [l, !g && (0, r.jsx)("div", {
                      className: Me.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, r.jsxs)("div", {
                className: Me.scProgress,
                children: [(0, r.jsx)(G, {
                  className: Me.scRpLevel,
                  rank: w
                }), (0, r.jsxs)("div", {
                  className: Me.scMoney,
                  children: [(0, r.jsxs)("span", {
                    className: Me.scCash,
                    "data-testid": Te,
                    children: ["$", j]
                  }), (0, r.jsxs)("span", {
                    className: Me.scBank,
                    "data-testid": Ee,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        };
      var Ae = "_1kqw7r10",
        Re = "_1kqw7r12",
        De = "_1kqw7r11",
        Be = "_1kqw7r13",
        ze = "_1kqw7r14",
        He = "_1kqw7r15";
      let Oe = {
        scCustomSwiper: "rockstargames-modules-core-footerb794a0e12537ad5fd506353133b9d60a",
        scCustomSwiperItem: "rockstargames-modules-core-footerdd4bcd955436c8a6982ee16756f7fd8b",
        scCustomSwiperTouchScreen: "rockstargames-modules-core-footerf53cd004e3fd9207f157388549fa080b",
        scCustomSwiperWrap: "rockstargames-modules-core-footerc1e8d8d5b52081b34283a5ac0d377362",
        scPager: "rockstargames-modules-core-footere8e5249dac92a2bc76788d0fe7d7dfb7",
        scPagerItem: "rockstargames-modules-core-footerf64d91c845a3931140b8b2c6a47da81f"
      };
      Oe = c;
      const $e = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: s = 17,
          slideChangeCallback: t = null,
          slideClickCallback: o = null,
          children: c = [],
          disablePager: i = !1,
          disableSwiper: l = !1
        }) => {
          const _ = (0, n.createRef)(),
            d = (0, U.ri)(_, !1),
            [u, m] = (0, n.useState)(!1),
            [f, g] = (0, n.useState)(!1),
            [p, k] = (0, n.useState)(0),
            [h, b] = (0, n.useState)(0),
            [v, w] = (0, n.useState)([s]),
            [C, y] = (0, n.useState)(v[0]),
            [x, S] = (0, n.useState)(252),
            [N, j] = (0, n.useState)(0),
            [M, I] = (0, n.useState)([]),
            [P, E] = (0, n.useState)([]),
            [T, L] = (0, n.useState)(!1),
            A = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            R = a => {
              if (!0 === u || 0 === h || !0 === l) return;
              g(!0);
              const s = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                o = s > h ? 1 : -1,
                c = Math.abs(h - s);
              c > e ? (o > 0 ? (() => {
                if (!0 === u) return;
                m(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), y(v[e]), t && t(e)
              })() : (() => {
                if (!0 === u) return;
                m(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), y(v[e]), t && t(e)
              })(), b(0)) : y(v[p] + c * o)
            },
            D = () => {
              !0 !== u && !0 !== l && (m(!0), !0 !== u && (y(v[p]), b(0)), g(!1))
            };
          return (0, n.useEffect)(() => {
            const e = [];
            c.forEach(() => {
              e.push((0, n.createRef)())
            }), I(e)
          }, [c]), (0, n.useEffect)(() => {
            if (M.length < 1) return;
            S(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(s + a)
          }, [M]), (0, n.useEffect)(() => {
            !1 !== u && setTimeout(() => {
              m(!1)
            }, a)
          }, [u, a]), (0, n.useEffect)(() => {
            w(c.map((e, a) => (e => {
              let a = 0;
              const t = c.length;
              return 1 === t ? .5 * d - .5 * x - 2 * s + N : (0 === e && (a = s - e * x), e === t - 1 && t > 1 && (a = t * x * -1 + (d - (s - N))), e > 0 && e < t - 1 && (a = e * x * -1 + (.5 * d - .5 * x + .5 * N)), a)
            })(a))), 1 === c.length ? L(!0) : L(!1)
          }, [_.current, c, d]), (0, n.useEffect)(() => {
            const e = (a = p, c.map((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            }));
            var a;
            E(e)
          }, [c, p]), (0, n.useEffect)(() => {
            !0 !== i && !0 !== l || y(v[0])
          }, [l, i, v]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: Oe.scCustomSwiper,
              ref: _,
              onTouchStart: A,
              onTouchMove: R,
              onTouchEnd: D,
              onMouseDown: A,
              onMouseMove: R,
              onMouseUp: D,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, r.jsx)("div", {
                className: Oe.scCustomSwiperWrap,
                "data-interaction-blocked": u,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${C}px)`
                },
                children: c.map((e, a) => (0, r.jsx)("div", {
                  onClick: () => (e => {
                    null === o || f || o(e)
                  })(a),
                  className: Oe.scCustomSwiperItem,
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`))
              })
            }), P.length > 1 && !1 === i && (0, r.jsx)("div", {
              className: Oe.scPager,
              children: P.map((e, a) => (0, r.jsx)("div", {
                className: Oe.scPagerItem,
                "data-active": e.active
              }, a))
            })]
          })
        },
        Ue = {
          languageSelector: "rockstargames-modules-core-footerb71a5b5521e679bcab20ec6302253996",
          nav: "rockstargames-modules-core-footerca9118e28091523e6679a3b95054fe93",
          navHeader: "rockstargames-modules-core-footerfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-footerce91ee6ebb491174a4ccb4be628aaae7",
          open: "rockstargames-modules-core-footerc5ffa3cbaa36329b72b3d928f9739849",
          pillBtn: "rockstargames-modules-core-footerb4f0b55680e047d303f82f34594abd96",
          profile: "rockstargames-modules-core-footere506a7deb95c0b0c9988325cc857ea9a",
          scCharacterList: "rockstargames-modules-core-footera84bbdd60e615baed0172e6b960c5d32",
          scCharacterSelectBtn: "rockstargames-modules-core-footerea15428b850bf436adda6f1dd8ac1af9",
          scCharacterSelector: "rockstargames-modules-core-footerc3ea8d575c892277f23ad5b589977862",
          scProfile: "rockstargames-modules-core-footerfb20979fe4aa7955196d74baf7d19379",
          selected: "rockstargames-modules-core-footered6126bd2f36579f2b8035e7c6579eb7"
        },
        Fe = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: s,
          refCharacterListDesktop: t,
          menuPadding: o,
          longCharList: c,
          setLongCharList: i,
          isMobileMode: l,
          setIsMobileMode: _,
          location: u,
          onNavigate: f
        }) => {
          const {
            windowWidth: g,
            windowHeight: p
          } = (0, v.useWindowResize)(), k = (0, d.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: w,
            activeSubNavId: C,
            setActiveSubNavId: y,
            subNavExtraHeight: x,
            setSubNavExtraHeight: S,
            navOpened: N,
            setScNavOpened: j
          } = E(), [M, I] = (0, n.useState)(""), {
            webSettings: P
          } = (0, v.useRockstarWebSettings)(), {
            track: L
          } = (0, m.useGtmTrack)(), z = (0, v.useRockstarTokenPing)(), {
            data: H,
            loggedIn: $
          } = (0, m.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: W,
            hasNotifications: V,
            navOpen: G,
            setCurrentCharId: X,
            setHasNotifications: Z,
            setSelectedCharacterTuple: q,
            setUserData: K
          } = (0, m.useRockstarUserState)(), [J, Y] = (0, n.useState)(null), [Q, ee] = (0, n.useState)(!1), [ae, se] = (0, n.useState)(!1), [te, oe] = (0, n.useState)(0), ce = (0, n.createRef)(), ie = (0, U.ri)(ce, !1), re = (0, n.createRef)(), [ne, _e] = (0, n.useState)(0), [de, ue] = (0, n.useState)([]), [me, fe] = (0, n.useState)(244), ge = (0, n.useRef)(null), pe = (0, n.useMemo)(() => (0, R.A)(), []), ke = (0, n.useMemo)(() => ((e, a, s, t, o) => [{
            text: e.formatMessage(T.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(T.sc_link_settings),
              location: {
                domain: R.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...D,
                text: T.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(T.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...D,
                text: T.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(T.sc_link_game_activation),
              location: {
                domain: R.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...D,
                text: T.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(T.sc_link_notifications),
            location: {
              domain: R.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...D,
              text: T.sc_link_notifications.defaultMessage,
              location: {
                domain: R.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(T.sc_link_crews),
            location: {
              domain: R.C.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...D,
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
                domain: R.C.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...D,
                text: T.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(T.sc_link_import_friends),
              location: {
                domain: R.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...D,
                text: T.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(T.sc_link_find_friends),
              location: {
                domain: R.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...D,
                text: T.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, B(e), {
            text: e.formatMessage(T.sc_link_log_out),
            href: `${a.logout}?returnUrl=${o}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...D,
              text: T.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, e, H, V, M, window), [k, e, H, V, M, pe]), he = () => {
            se(o + me * te < ie)
          }, be = () => {
            if (re.current) {
              const {
                current: e
              } = re, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), _e(a + e)
              } else _e(a)
            }
          };
          return (0, n.useEffect)(() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            pe.currentSite?.site === R.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }, [u]), (0, n.useEffect)(() => {
            ue(H?.characters?.[F] ?? [])
          }, [H, F]), (0, n.useEffect)(() => {
            H && K(H)
          }, [H]), (0, n.useEffect)(() => {
            const e = H?.characters?.gtao ?? [];
            if (null !== $ && !e.length) return void q(!1);
            if (null == W || !e.length) return;
            const a = e?.[W] ?? e?.[0] ?? null;
            q(!!a?.platform && [a.platform, a.characterSlot])
          }, [W, H, $]), (0, n.useEffect)(() => {
            (async () => {
              if (!H?.id || !G) return;
              const {
                count: e
              } = await (0, v.coreScApiFetch)("notification/count", {
                pingBearer: z
              });
              Z(e > 0)
            })()
          }, [H, G]), (0, n.useEffect)(() => {
            he()
          }, [me]), (0, n.useEffect)(() => {
            s(!0), _(g < 768), _(g < 768 || p < 649)
          }, [g, p]), (0, n.useEffect)(() => {
            let e = de.length - 1;
            e < 0 && (e = 0), oe(e);
            const a = de.length > 0 ? de[W] ?? de[0] : null;
            a && (Y(a), de.length > 1 ? ee(!0) : ee(!1), i(de.length - 1 > 3))
          }, [W, de]), (0, n.useEffect)(() => {
            he()
          }, [te, l, g, de]), (0, n.useEffect)(() => {
            be(), A()(() => {
              setTimeout(be, 0)
            }, 300)
          }, [g, p]), (0, n.useEffect)(() => {
            const e = P?.currentCharId ?? 0;
            e !== W && X(Math.max(0, Math.min(e, de.length - 1)))
          }, [de, P]), (0, r.jsxs)(r.Fragment, {
            children: [null !== J && "gtao" === F && (0, r.jsxs)("div", {
              className: Ue.scProfile,
              ref: ge,
              tabIndex: -1,
              "aria-label": k.formatMessage(T.profile_selector_profile_card),
              children: [(0, r.jsx)(Le, {
                s: Ue,
                character: J
              }), !0 === Q && (0, r.jsxs)("div", {
                className: Ue.scCharacterSelector,
                children: [(0, r.jsx)("button", {
                  className: Ue.scCharacterSelectBtn,
                  "aria-hidden": !G,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), L({
                      event: t ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, r.jsx)("span", {
                    children: (0, r.jsx)(d.FormattedMessage, {
                      ...T.profile_selector_switch_character
                    })
                  })
                }), !l && (0, r.jsx)("div", {
                  className: Ue.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": a,
                  ref: t,
                  children: de.map(e => (0, r.jsx)(le, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: fe
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                }), l && (0, r.jsx)("div", {
                  className: Ue.scCharacterList,
                  "data-single-item": 2 === de.length,
                  "data-swiper-disabled": ae,
                  "aria-hidden": a,
                  ref: ce,
                  children: (0, r.jsx)($e, {
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
                    children: de.filter((e, a) => a !== W).map(e => (0, n.createElement)(le, {
                      characterData: e,
                      setMobileCardWidth: fe,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    }))
                  })
                })]
              })]
            }), (0, r.jsxs)("nav", {
              className: Ue.nav,
              "aria-hidden": !G,
              children: [(0, r.jsx)("button", {
                className: Ue.navHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": G,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, r.jsx)("span", {
                  className: Ue.navHeaderText,
                  children: H.nickname
                })
              }), (0, r.jsx)("div", {
                className: Ue.navWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: re,
                style: {
                  "--navWrap-max-height": `${ne+x}px`
                },
                children: ke.map((e, a) => (0, n.createElement)(O, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: S,
                  onNavigate: f,
                  key: e.text
                }))
              })]
            }), (0, r.jsx)("div", {
              className: Ue.scLanguageSelector,
              style: {
                visibility: G ? null : "hidden"
              },
              children: (0, r.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: w,
                location: u,
                onLanguageChange: d.onLanguageChange
              })
            })]
          })
        },
        We = {
          dragHandle: "rockstargames-modules-core-footerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-footerb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-core-footerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-core-footerb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-core-footerc31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-core-footereff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-core-footerc5f6868e76307ee73276f140c2f988df"
        },
        Ve = (0, v.getConfigForDomain)(),
        Ge = k(({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: t
          } = (0, v.useWindowResize)(), o = (0, d.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: l,
            navOpened: _,
            setAccountNavOpened: u,
            charListHidden: f,
            setCharListHidden: g
          } = E(), [p, k] = (0, n.useState)(!1), {
            navHidden: h = !1
          } = (0, v.useState)(), {
            loggedIn: w
          } = (0, m.useRockstarUser)(), {
            currentCharId: C,
            navOpen: y,
            setNavOpen: x,
            userData: S
          } = (0, m.useRockstarUserState)(), {
            track: N
          } = (0, m.useGtmTrack)(), [j, M] = (0, n.useState)(!1), I = (0, n.useRef)(), [P, L] = (0, n.useState)(0), A = (0, n.createRef)(), [R, D] = (0, n.useState)(!1), [B, z] = (0, n.useState)(0), [H, O] = (0, n.useState)(!1), {
            mutateWebSettings: U,
            webSettings: F
          } = (0, v.useRockstarWebSettings)(), W = (0, n.useCallback)(e => {
            g(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }, [I]);
          return (0, n.useEffect)(() => {
            null !== C && F.currentCharId !== C && U({
              key: "currentCharId",
              value: C
            }), !1 === w ? U({
              key: "currentCharId",
              value: null
            }) : w && S && S?.accountSynced && N({
              event: "account_synced"
            })
          }, [C, w, S?.accountSynced]), (0, n.useEffect)(() => {
            I.current && (!1 === f && !1 === j && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === f && (I.current.style.height = null))
          }, [f, I, j]), (0, n.useEffect)(() => {
            const e = () => {
                x(!1), W(!0)
              },
              a = a => {
                const s = A?.current && a?.composedPath().includes(A.current);
                y && !s && e()
              },
              s = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", s), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", s)
            }
          }, [A]), (0, n.useEffect)(() => {
            x(!1), W(!0)
          }, [h]), (0, n.useEffect)(() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }, [A]), (0, n.useEffect)(() => {
            O(window.navigator.userAgent.includes("Mac"))
          }, []), (0, n.useEffect)(() => {
            A.current && k(A?.current?.scrollHeight >= t)
          }, [A, t]), (0, n.useEffect)(() => {
            y || (l(-1), i(!1))
          }, [y]), (0, n.useEffect)(() => {
            c && (f || W(!0), _ && (u(!1), l(-1)))
          }, [c]), (0, n.useEffect)(() => {
            _ && (c && i(!1), f || W(!0))
          }, [_]), void 0 === w ? null : (0, r.jsxs)(b.A, {
            enabled: !!y,
            removeScrollBar: !1,
            children: [(0, r.jsxs)("div", {
              className: [We.menu, y ? We.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": H,
              "data-scroll-mode": p,
              ref: A,
              "aria-hidden": !y,
              children: [(0, r.jsx)("button", {
                className: We.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && (z(0), x(!1))
                },
                children: (0, r.jsx)("img", {
                  className: We.dragHandle,
                  src: s(35902),
                  alt: o.formatMessage(T.sc_menu_drag_handle)
                })
              }), w ? (0, r.jsx)(Fe, {
                sc: Ve,
                charListHidden: f,
                hideCharacterList: W,
                refCharacterListDesktop: I,
                menuPadding: P,
                longCharList: j,
                setLongCharList: M,
                isMobileMode: R,
                setIsMobileMode: D,
                location: e,
                onNavigate: a
              }) : (0, r.jsx)($, {
                sc: Ve,
                navOpen: y,
                location: e,
                onNavigate: a
              })]
            }), (0, r.jsx)("div", {
              className: [We.scOverlay, y ? We.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }),
        Xe = k(({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, d.useIntl)(),
            {
              data: t,
              loggedIn: o
            } = (0, m.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: i,
              navOpen: l,
              setNavOpen: _
            } = (0, m.useRockstarUserState)(),
            {
              track: u
            } = (0, m.useGtmTrack)(),
            [f, g] = (0, n.useState)(),
            [p, k] = (0, n.useState)(!1),
            [h, b] = (0, n.useState)([]);
          (0, n.useEffect)(() => {
            b(t?.characters?.[c] ?? [])
          }, [t, c]);
          const v = (0, n.useCallback)(a => {
            a.stopPropagation(), _(!l), 1 == !l && e(null), u({
              event: "account_menu_click",
              element_placement: "account menu",
              text: l ? "close" : "open"
            })
          }, [l]);
          return (0, n.useEffect)(() => {
            k(!!h?.[i]?.mugshotUrl)
          }, [h, i]), (0, n.useEffect)(() => {
            g((() => {
              switch (o) {
                case void 0:
                  return s(5931);
                case !1:
                  return s(32810);
                case !0:
                  return h?.[i]?.mugshotUrl ?? t?.avatar
              }
            })())
          }, [t, h, i, o]), (0, r.jsxs)("button", {
            className: "rockstargames-modules-core-footeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(l ? T.sc_menu_close : T.sc_menu_open),
            "aria-expanded": l,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(o),
            children: [(0, r.jsx)("img", {
              className: "rockstargames-modules-core-footera917b58ca28b68550a1aa5d99c7eb998",
              src: f,
              alt: t?.nickname || "",
              onError: () => {
                let e = null;
                e = s(p ? 5931 : 73091), g(e)
              }
            }), o && p && (0, r.jsx)("div", {
              className: "rockstargames-modules-core-footerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, r.jsx)(Z, {
                platform: h?.[i]?.platform,
                tagSize: X.small
              })
            }), o && (0, r.jsx)("div", {
              className: "rockstargames-modules-core-footerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[i]?.platform ?? null
            })]
          })
        });
      var Ze = "_1v7oejd3",
        qe = "_1v7oejd2",
        Ke = "_1v7oejd4",
        Je = "_1v7oejd1",
        Ye = "_1v7oejd0";
      let Qe = {
        open: "rockstargames-modules-core-footerd815312ad6eebc2c651f8554dc6c0bb7",
        pillBtn: "rockstargames-modules-core-footerc5adbe3b8adfa45115608e536f6e0384",
        scCharacterList: "rockstargames-modules-core-footerdedb11e25dddfe561c538a370f5028e2",
        scCharacterSelectBtn: "rockstargames-modules-core-footerd3991df21bf29ec01662910e116a6ff5",
        scCharacterSelector: "rockstargames-modules-core-footerefcb26b13bae0546c71d0b9f88e335a9",
        selected: "rockstargames-modules-core-footerc7c3f92d1fdd021a5cd665583ac79d89"
      };
      Qe = i;
      const ea = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        aa = k(() => {
          const e = (0, d.useIntl)(),
            {
              track: a
            } = (0, m.useGtmTrack)(),
            [s, t] = (0, n.useState)(null),
            [o, c] = (0, n.useState)(0),
            [i, l] = (0, n.useState)(!1),
            [u, f] = (0, n.useState)(!1),
            g = (0, n.createRef)(),
            [p, k] = (0, n.useState)([]),
            [h, b] = (0, n.useState)(244),
            {
              windowWidth: w
            } = (0, v.useWindowResize)(),
            [C, y] = (0, n.useState)(!1),
            x = (0, U.ri)(g, !1),
            {
              data: S,
              loggedIn: N
            } = (0, m.useRockstarUser)(),
            {
              charactersNeeded: j,
              currentCharId: M,
              setCurrentCharId: I
            } = (0, m.useRockstarUserState)(),
            {
              charListHidden: P,
              setCharListHidden: L
            } = E();
          (0, n.useEffect)(() => {
            void 0 === M && I(0)
          }, [M]), (0, n.useEffect)(() => {
            let e = p.length - 1;
            e < 0 && (e = 0), c(e);
            const a = p.length > 0 ? p[M] ?? p[0] : null;
            a && (t(a), p.length > 1 ? f(!0) : f(!1))
          }, [M, p]), (0, n.useEffect)(() => {
            k(S?.characters?.[j] ?? [])
          }, [S, j]), (0, n.useEffect)(() => {
            A()
          }, [h, o, C, w, p]), (0, n.useEffect)(() => {
            y(w < 1024)
          }, [w]);
          const A = () => {
              l(h * o < x)
            },
            R = e => {
              const s = p.filter((e, a) => a !== M).map(e => e);
              I(s[e].index), a({
                event: "character_selector_select",
                text: ea[s[e].platform],
                position: s[e].index
              })
            };
          return null !== s && "gtao" === j && N ? (0, r.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(T.profile_selector_profile_card),
            children: [(0, r.jsx)(Le, {
              s: Qe,
              character: s
            }), !0 === u && (0, r.jsxs)("div", {
              className: Qe.scCharacterSelector,
              children: [(0, r.jsxs)("button", {
                className: Qe.scCharacterSelectBtn,
                "data-list-closed": P,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !P;
                  L(s), a({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: [(0, r.jsx)("span", {
                  className: Qe.scCharacterBtnText,
                  children: (0, r.jsx)(d.FormattedMessage, {
                    ...T.profile_selector_switch_character
                  })
                }), (0, r.jsx)(_.ChevronDown, {
                  className: Qe.scCharacterBtnIcon,
                  label: ""
                })]
              }), !C && (0, r.jsx)("div", {
                className: Qe.scCharacterList,
                "aria-hidden": P,
                children: p.filter((e, a) => a !== M).map((e, a) => (0, r.jsx)(le, {
                  tabIndex: P ? -1 : 0,
                  onClick: () => R(a),
                  characterData: e,
                  setMobileCardWidth: b
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
              }), C && (0, r.jsx)("div", {
                className: Qe.scCharacterList,
                "data-single-item": 2 === p.length,
                "data-swiper-disabled": i,
                "aria-hidden": P,
                ref: g,
                children: (0, r.jsx)($e, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: R,
                  disablePager: i,
                  disableSwiper: i,
                  children: p.filter((e, a) => a !== M).map(e => (0, n.createElement)(le, {
                    characterData: e,
                    setMobileCardWidth: b,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: P ? -1 : 0
                  }))
                })
              })]
            })]
          }) : null
        })
    },
    73091: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    },
    79867: (e, a, s) => {
      s.d(a, {
        A: () => c,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        o = [{
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
        c = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = o.findIndex(a => Object.entries(a.sites).findIndex(([a, t]) => t === s && (e = {
            site: a,
            subDomain: t
          }, !0)) >= 0), c = o[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...c,
            currentSite: e
          }
        }
    }
  }
]);