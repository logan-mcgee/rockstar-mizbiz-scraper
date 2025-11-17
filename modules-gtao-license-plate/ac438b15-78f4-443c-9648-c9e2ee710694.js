try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ac438b15-78f4-443c-9648-c9e2ee710694", e._sentryDebugIdIdentifier = "sentry-dbid-ac438b15-78f4-443c-9648-c9e2ee710694")
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
  [4469], {
    4520: (e, a, s) => {
      s.r(a), s.d(a, {
        CharacterProfile: () => ia,
        LanguageSelector: () => h,
        Menu: () => Ke,
        MenuButton: () => Je
      });
      var t = {};
      s.r(t), s.d(t, {
        avatar: () => ee,
        avatarBG: () => ae,
        avatarFrame: () => se,
        avatarImg: () => te,
        characterBtn: () => ie,
        characterBtnStats: () => ce,
        scCharBtnNames: () => oe,
        scRp: () => ne,
        scUserName: () => le
      });
      var i = {};
      s.r(i), s.d(i, {
        avatar: () => me,
        avatarBG: () => ge,
        avatarImg: () => fe,
        avatarPlatform: () => pe,
        platformTag: () => ke,
        profileDetails: () => he,
        profileStats: () => be,
        scBank: () => ve,
        scCash: () => Ce,
        scCrewName: () => ye,
        scCrewRankBar: () => we,
        scCrewRankBarItem: () => xe,
        scMoney: () => Se,
        scNames: () => Ne,
        scProgress: () => je,
        scRpLevel: () => Me,
        scTagsNames: () => Ie,
        scUserName: () => Pe
      });
      var c = {};
      s.r(c), s.d(c, {
        scCustomSwiper: () => Be,
        scCustomSwiperItem: () => He,
        scCustomSwiperTouchScreen: () => Oe,
        scCustomSwiperWrap: () => $e,
        scPager: () => De,
        scPagerItem: () => Ue
      });
      var o = {};
      s.r(o), s.d(o, {
        scCharacterBtnIcon: () => Ye,
        scCharacterBtnText: () => qe,
        scCharacterList: () => Qe,
        scCharacterSelectBtn: () => ea,
        scCharacterSelector: () => aa
      });
      var n = s(42295),
        l = s(62229),
        r = s(13619),
        _ = s(19842),
        d = s(81788),
        u = s(14200),
        m = s(2918);
      const g = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        f = {
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
        p = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen"},"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"},"es-ES":{"language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador"},"es-MX":{"language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador"},"fr-FR":{"language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur"},"it-IT":{"language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore"},"ja-JP":{"language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く"},"ko-KR":{"language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기"},"pl-PL":{"language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza"},"pt-BR":{"language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador"},"ru-RU":{"language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока"},"zh-CN":{"language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单"},"zh-TW":{"language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單"}}'),
        k = e => (0, d.withIntl)(e, p),
        h = k(({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: s,
          location: t,
          parent: i = "element",
          onLanguageChange: c,
          ...o
        }) => {
          const {
            track: p
          } = (0, m.useGtmTrack)(), k = (0, d.useIntl)(), [h] = (0, d.getLocale)(), [b, v] = (0, l.useState)(!1), C = (0, l.useRef)(null), [y, w] = (0, l.useState)(0), x = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, S = e => {
            if (s && s(!1), h.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = d.locales.find(a => a.subdomaincom === e);
            a && c?.({
              selectedLocale: a,
              track: p,
              parent: i
            })
          };
          return (0, l.useEffect)(() => {
            void 0 !== a && !1 === a && !0 === b && v(!1)
          }, [a]), (0, l.useEffect)(() => {
            C.current && w(C.current.scrollHeight)
          }, [C]), "function" != typeof c ? null : (0, n.jsxs)(n.Fragment, {
            children: [x && "sc-menu" === e && (0, n.jsx)("div", {
              className: [f.languageSelector, b ? f.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${i}-language-selector`,
              ...o,
              children: (0, n.jsx)("div", {
                className: f.selectBoxWrapper,
                children: (0, n.jsxs)("select", {
                  className: f.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    S(a)
                  },
                  "aria-label": k.formatMessage(g.language_selector_default),
                  "data-testid": `${i}-language-selector-button`,
                  children: [(0, n.jsx)("option", {
                    className: f.selectBoxOption,
                    value: "none",
                    "data-testid": `${i}-language-selector-current`,
                    children: d.locales.find(e => e.subdomaincom === h.subdomaincom)?.label ?? (0, n.jsx)(d.FormattedMessage, {
                      ...g.language_selector_default
                    })
                  }), d.locales.map(({
                    label: e,
                    subdomaincom: a
                  }) => (0, n.jsx)("option", {
                    className: f.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`))]
                })
              })
            }), (!x || "sc-menu" !== e) && "footer" !== e && (0, n.jsxs)("div", {
              className: [f.languageSelector, b ? f.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${i}-language-selector`,
              ...o,
              children: [(0, n.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!b), v(!b)
                },
                "data-testid": `${i}-language-selector-button`,
                type: "button",
                "aria-label": k.formatMessage(g.language_selector_default),
                children: [(0, n.jsx)("i", {}), (0, n.jsx)("span", {
                  "data-testid": `${i}-language-selector-current`,
                  children: d.locales.find(e => e.subdomaincom === h.subdomaincom)?.label ?? (0, n.jsx)(d.FormattedMessage, {
                    ...g.language_selector_default
                  })
                })]
              }), (0, n.jsx)("div", {
                className: f.linkWrapper,
                ref: C,
                style: {
                  "--ls-linkWrapper-opened-height": `${y}px`
                },
                children: (0, n.jsx)("div", {
                  className: f.links,
                  children: d.locales.map(({
                    subdomaincom: e,
                    label: a
                  }) => (0, n.jsx)(u.A, {
                    onClick: a => {
                      a.preventDefault(), S(e)
                    },
                    tabIndex: b ? 0 : -1,
                    "data-testid": `${i}-language-selector-${e}`,
                    children: a
                  }, a))
                })
              })]
            }), "footer" === e && (0, n.jsxs)("div", {
              className: f.dropdownContainer,
              "data-testid": `${i}-language-selector`,
              ...o,
              children: [(0, n.jsx)(_.Globe, {
                size: "MD",
                label: ""
              }), (0, n.jsxs)(r.ms.bL, {
                className: f.dropdown,
                onValueChange: e => {
                  S(e)
                },
                defaultValue: d.locales.find(e => e.subdomaincom === h.subdomaincom)?.subdomaincom,
                children: [(0, n.jsxs)(r.ms.l9, {
                  children: [(0, n.jsx)(r.ms.OE, {
                    placeholder: k.formatMessage(g.language_selector_default)
                  }), (0, n.jsx)(r.ms.if, {})]
                }), (0, n.jsx)(r.ms.ZL, {
                  children: (0, n.jsx)(r.ms.UC, {
                    style: {
                      zIndex: 1
                    },
                    children: (0, n.jsx)(r.ms.FK, {
                      children: d.locales.map(({
                        subdomaincom: e,
                        label: a
                      }) => (0, n.jsx)(r.ms.c$, {
                        value: e,
                        testId: `${i}-language-selector-${e}`,
                        children: (0, n.jsx)(r.ms.JP, {
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
      const C = (0, v.makeVar)(!1),
        y = e => C(e),
        w = (0, v.makeVar)(-1),
        x = e => w(e),
        S = (0, v.makeVar)(-1),
        N = e => S(e),
        j = (0, v.makeVar)(!0),
        M = e => j(e),
        I = (0, v.makeVar)(!0),
        P = e => I(e),
        E = () => {
          const e = (0, v.useReactiveVar)(C),
            a = (0, v.useReactiveVar)(w),
            s = (0, v.useReactiveVar)(S),
            t = (0, v.useReactiveVar)(j),
            i = (0, v.useReactiveVar)(I);
          return (0, l.useEffect)(() => {
            i || (e && y(!1), t && (M(!1), x(-1)))
          }, [i]), (0, l.useEffect)(() => {
            !e && i && (t || M(!0))
          }, [e, i]), (0, l.useMemo)(() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: y,
            activeSubNavId: a,
            setActiveSubNavId: x,
            subNavExtraHeight: s,
            setSubNavExtraHeight: N,
            navOpened: t,
            setAccountNavOpened: M,
            charListHidden: i,
            setCharListHidden: P
          }), [e, a, s, t, i])
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
      const z = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        B = e => ({
          text: e.formatMessage(T.sc_link_help),
          target: "_self",
          ga: {
            ...z,
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
              ...z,
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
              ...z,
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
              ...z,
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
              ...z,
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
              ...z,
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
              ...z,
              text: T.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        H = ({
          to: e,
          target: a,
          className: s,
          onNavigate: t,
          onClick: i,
          reloadDocument: c,
          children: o,
          ...l
        }) => {
          const r = e?.startsWith("http");
          return (0, n.jsx)("a", {
            href: e,
            className: s,
            onClick: a => {
              i?.(a), r || c || (t ? (a.preventDefault(), t(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...l,
            children: o
          })
        },
        O = ({
          text: e,
          target: a,
          href: s,
          location: t,
          ga: i,
          dataTestId: c,
          isSubLink: o,
          hasNotifications: l = !1,
          onClickCallback: r = () => {},
          tabIndex: _,
          reloadDocument: u = !1,
          onNavigate: g
        }) => {
          const {
            track: f
          } = (0, m.useGtmTrack)(), p = (0, R.A)(), k = (0, d.useIntl)();
          let h = s;
          t && (h = t.domain === p.currentSite?.site ? t.path : `https://${p.sites[t.domain]}.rockstargames.com${t.path}`);
          const b = {
            ...i,
            link_url: h
          };
          return (0, n.jsxs)(H, {
            className: o ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": c || "menuLink",
            title: e,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: _,
            onClick: e => {
              f(b), r(e)
            },
            onNavigate: g,
            children: [e, l && (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, n.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(T.nofications_new)
              })
            })]
          })
        },
        $ = ({
          id: e,
          text: a,
          target: s,
          href: t,
          location: i,
          ga: c,
          hasNotifications: o = !1,
          dataTestId: r,
          children: _ = [],
          activeSubNavId: d,
          setActiveSubNavId: u,
          setSubNavExtraHeight: g,
          reloadDocument: f = !1,
          onClickCallback: p = () => {},
          onNavigate: k
        }) => {
          const {
            windowWidth: h,
            windowHeight: b
          } = (0, v.useWindowResize)(), {
            track: C
          } = (0, m.useGtmTrack)(), {
            navOpen: y
          } = (0, m.useRockstarUserState)(), w = (0, l.useRef)(null), [x, S] = (0, l.useState)(0), [N, j] = (0, l.useState)(0), [M, I] = (0, l.useState)(!0);
          return (0, l.useEffect)(() => {
            d !== e && !1 === M && I(!0), d === e && I(!1)
          }, [d]), (0, l.useEffect)(() => {
            if (!w.current) return;
            S(w?.current?.scrollHeight);
            const e = window.getComputedStyle(w.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }, [w, h, b]), _.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-platecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": r || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), C(c), d === e ? (u(-1), g(0)) : (u(e), g(x + N + N))
              },
              children: [(0, n.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, n.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, n.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platecbf6e64eadb6f965877129d539aa2dcd",
              ref: w,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${x}px`
              },
              children: _.map(e => (0, l.createElement)(O, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: k
              }))
            })]
          }) : (0, n.jsx)(O, {
            text: a,
            target: s,
            href: t,
            location: i,
            ga: c,
            hasNotifications: o,
            dataTestId: r,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: y ? 0 : -1,
            reloadDocument: f,
            onNavigate: k
          })
        },
        D = ({
          sc: e,
          location: a,
          onNavigate: s
        }) => {
          const {
            windowWidth: t,
            windowHeight: i
          } = (0, v.useWindowResize)(), c = (0, d.useIntl)(), {
            languageSelectorOpened: o,
            setLanguageSelectorOpened: r,
            activeSubNavId: _,
            setActiveSubNavId: u,
            subNavExtraHeight: g,
            setSubNavExtraHeight: f
          } = E(), {
            setSelectedCharacterTuple: p,
            navOpen: k
          } = (0, m.useRockstarUserState)(), b = (0, v.useLocale)(), C = (0, v.toScLocaleString)(b), [y, w] = (0, l.useState)(""), x = `${e.login}?returnUrl=${y}&lang=${C}`, S = `${e.signup}&returnUrl=${y}&lang=${C}`, N = (0, l.useMemo)(() => (0, R.A)(), []), j = (0, l.useMemo)(() => {
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
          }, [c, x, S, N]), [M, I] = (0, l.useState)(0), P = (0, l.createRef)(), L = () => {
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
          return (0, l.useEffect)(() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            w(e)
          }, [JSON.stringify(a)]), (0, l.useEffect)(() => {
            p(!1)
          }, []), (0, l.useEffect)(() => {
            L(), A()(() => {
              setTimeout(L, 0)
            }, 300)
          }, [t, i]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, n.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: P,
                style: {
                  "--navWrap-max-height": `${g+M}px`
                },
                children: j.map(e => (0, l.createElement)($, {
                  ...e,
                  activeSubNavId: _,
                  setActiveSubNavId: u,
                  setSubNavExtraHeight: f,
                  onNavigate: s,
                  key: e.text
                }))
              })
            }), (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: k ? null : "hidden"
              },
              children: (0, n.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: o,
                setLanguageSelectorOpened: e => {
                  u(-1), r(e)
                },
                location: a,
                onLanguageChange: d.onLanguageChange
              })
            })]
          })
        };
      var U = s(56088),
        F = s(10439);
      const W = new Map;

      function V(e, a) {
        if (e === a) return e;
        const s = W.get(e);
        if (s) return s.forEach(e => e(a)), a;
        const t = W.get(a);
        return t ? (t.forEach(a => a(e)), e) : a
      }

      function G(...e) {
        return (...a) => {
          for (const s of e) "function" == typeof s && s(...a)
        }
      }
      var X;
      s(98312), s(41972), s(56265), s(31454), s(10533), s(10613),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(X || (X = {})), Symbol.toStringTag;
      const Z = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        K = (0, l.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: s,
          alt: t,
          testId: i,
          ...c
        }, o) {
          const l = Z(e),
            r = function(...e) {
              const a = {
                ...e[0]
              };
              for (let s = 1; s < e.length; s++) {
                const t = e[s];
                for (const e in t) {
                  const s = a[e],
                    i = t[e];
                  "function" == typeof s && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? a[e] = G(s, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof s || "string" != typeof i ? "id" === e && s && i ? a.id = V(s, i) : a[e] = void 0 !== i ? i : s : a[e] = (0, F.$)(s, i)
                }
              }
              return a
            }(c, {
              className: (0, F.A)("rockstargames-modules-gtao-license-platef54750ef62f8600000c94f0caba85986", s),
              "data-testid": i
            });
          return (0, n.jsxs)("div", {
            "data-size": a,
            ref: o,
            ...r,
            children: [(0, n.jsx)("svg", {
              role: "svg",
              "aria-label": t,
              className: "rockstargames-modules-gtao-license-platea3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": Z(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: l
              })
            }), (0, n.jsx)("span", {
              className: "rockstargames-modules-gtao-license-plated9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        });
      var J = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const Y = ({
          tagSize: e,
          platform: a,
          className: s = ""
        }) => {
          const {
            src: t,
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
          return (0, n.jsx)("img", {
            className: (0, F.A)("rockstargames-modules-gtao-license-plateb0ff0045ed0326a46ca1e0867d2050c1", s),
            "data-testid": "platform-tag",
            "data-platform": a,
            "data-tag-size": e,
            src: t,
            alt: i
          })
        },
        q = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f368af6d2c11a28d31d2818e72150f5b.jpg";
      var Q = s(8141),
        ee = (s(57461), "s4y1eh3"),
        ae = "var(--s4y1eh2)",
        se = "s4y1eh1",
        te = "s4y1eh4",
        ie = "s4y1eh0",
        ce = "s4y1eh5",
        oe = "s4y1eh6",
        ne = "s4y1eh8",
        le = "s4y1eh7";
      let re = {
        avatar: "rockstargames-modules-gtao-license-plated79f37fd31c0943cbf4368215dfc79a0",
        characterBtn: "rockstargames-modules-gtao-license-plateb26daf00eb7def0a82a3c1481316acb0",
        characterBtnStats: "rockstargames-modules-gtao-license-plateed30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-modules-gtao-license-platea6009feaf97e98d18c6efc2de47ba8b4",
        scRp: "rockstargames-modules-gtao-license-platef5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpIcon: "rockstargames-modules-gtao-license-platefaa7b2808fb96fa02fd2e99be36df8e6",
        scRpLevel: "rockstargames-modules-gtao-license-platec9300f34b82bbdffb7006ff32247adff",
        scUserName: "rockstargames-modules-gtao-license-platec3ab062db0e9e0f75e0598eec5022de5"
      };
      re = t;
      const _e = "CharacterButton:characterName",
        de = "CharacterButton:avatar",
        ue = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: t,
          onClick: i = () => {}
        }) => {
          const c = (0, d.useIntl)(),
            {
              currentCharId: o,
              setCurrentCharId: r
            } = (0, m.useRockstarUserState)(),
            _ = (0, l.createRef)(),
            {
              platform: u,
              platformUsername: g,
              mugshotUrl: f,
              stats: p
            } = e,
            [k, h] = (0, l.useState)(f),
            b = o === e.index;
          return (0, l.useEffect)(() => {
            _.current && a && a(_?.current?.offsetWidth)
          }, [_]), (0, n.jsxs)("button", {
            className: re.characterBtn,
            type: "button",
            "aria-hidden": b,
            ref: _,
            tabIndex: t,
            onClick: () => i(-1),
            children: [(0, n.jsx)("div", {
              className: re.avatarFrame,
              children: (0, n.jsx)("div", {
                className: re.avatar,
                "data-size": "small",
                style: (0, Q.DI)({
                  [re.avatarBG]: `url(${q})`
                }),
                children: (0, n.jsx)("img", {
                  className: re.avatarImg,
                  src: k,
                  alt: c.formatMessage(T.profile_selector_mugshot, {
                    userName: g
                  }),
                  onError: () => {
                    h(s(5931))
                  },
                  "data-testid": de
                })
              })
            }), (0, n.jsxs)("div", {
              className: re.characterBtnStats,
              children: [(0, n.jsxs)("div", {
                className: re.scCharBtnNames,
                children: [(0, n.jsx)(Y, {
                  tagSize: J.large,
                  platform: u
                }), (0, n.jsx)("div", {
                  className: re.scUserName,
                  "data-size": "small",
                  "data-testid": _e,
                  children: g
                })]
              }), (0, n.jsx)("div", {
                className: re.scRp,
                children: (0, n.jsx)(K, {
                  size: "small",
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        };
      var me = "_1iotk8z2",
        ge = "var(--_1iotk8z1)",
        fe = "_1iotk8z3",
        pe = "_1iotk8z4",
        ke = "_1iotk8z5",
        he = "_1iotk8z0",
        be = "_1iotk8z6",
        ve = "_1iotk8zh",
        Ce = "_1iotk8zg",
        ye = "_1iotk8za",
        we = "_1iotk8zb",
        xe = "_1iotk8zc",
        Se = "_1iotk8zf",
        Ne = "_1iotk8z7",
        je = "_1iotk8zd",
        Me = "_1iotk8ze",
        Ie = "_1iotk8z8",
        Pe = "_1iotk8z9";
      let Ee;
      Ee = i;
      const Te = "ProfileCard:characterName",
        Le = "ProfileCard:avatar",
        Ae = "ProfileCard:bankValue",
        Re = "ProfileCard:cashValue",
        ze = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, m.useRockstarUser)(), {
            track: t
          } = (0, m.useGtmTrack)(), i = (0, d.useIntl)(), [c, o] = (0, l.useState)([]), [r, _] = (0, l.useState)(null), [u, g] = (0, l.useState)(null), [f, p] = (0, l.useState)(!1), [k, h] = (0, l.useState)(-1), [b, v] = (0, l.useState)([]), [C, y] = (0, l.useState)(0), w = s(5931), {
            platform: x
          } = e, [S, N] = (0, l.useState)("0"), [j, M] = (0, l.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            L((0, n.jsx)("img", {
              src: w,
              alt: i.formatMessage(T.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [E, L] = (0, l.useState)((0, n.jsx)("img", {
            className: Ee.avatarImg,
            src: e.mugshotUrl,
            alt: i.formatMessage(T.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: P,
            "data-testid": Le
          }));
          (0, l.useEffect)(() => {
            o(a.crews ?? [])
          }, [a.crews]), (0, l.useEffect)(() => {
            L((0, n.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: P,
              "data-testid": Le
            })), N(I(e.stats.overview.bank.value)), M(I(e.stats.overview.cash.value)), y(parseInt(e.stats.overview.rank.value))
          }, [e, a.nickname]), (0, l.useEffect)(() => {
            c && c.forEach(e => {
              !0 === e.isPrimary && (_(e.crewTag), g(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            })
          }, [c]), (0, l.useEffect)(() => {
            const e = [];
            if (!f && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, n.jsx)("div", {
                className: Ee.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }, [k, f, u]);
          const A = e => {
            e.stopPropagation(), t({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, n.jsxs)("div", {
            className: Ee.profileDetails,
            onClick: A,
            onKeyUp: A,
            role: "button",
            tabIndex: -1,
            children: [(0, n.jsxs)("div", {
              className: Ee.avatar,
              style: (0, Q.DI)({
                [Ee.avatarBG]: `url(${q})`
              }),
              children: [E, (0, n.jsx)("div", {
                className: Ee.avatarPlatform,
                "data-platform": x,
                children: (0, n.jsx)(Y, {
                  className: Ee.platformTag,
                  tagSize: J.large,
                  platform: x
                })
              })]
            }), (0, n.jsxs)("div", {
              className: Ee.profileStats,
              children: [(0, n.jsx)("div", {
                className: Ee.scNames,
                children: (0, n.jsxs)("div", {
                  className: Ee.scTagsNames,
                  children: [(0, n.jsx)("span", {
                    className: Ee.scUserName,
                    "data-testid": Te,
                    children: e.platformUsername
                  }), r && (0, n.jsxs)("span", {
                    className: Ee.scCrewName,
                    "data-arrow-tag": f,
                    children: [r, !f && (0, n.jsx)("div", {
                      className: Ee.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, n.jsxs)("div", {
                className: Ee.scProgress,
                children: [(0, n.jsx)(K, {
                  className: Ee.scRpLevel,
                  rank: C
                }), (0, n.jsxs)("div", {
                  className: Ee.scMoney,
                  children: [(0, n.jsxs)("span", {
                    className: Ee.scCash,
                    "data-testid": Re,
                    children: ["$", j]
                  }), (0, n.jsxs)("span", {
                    className: Ee.scBank,
                    "data-testid": Ae,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        };
      var Be = "e76uv90",
        He = "e76uv92",
        Oe = "e76uv91",
        $e = "e76uv93",
        De = "e76uv94",
        Ue = "e76uv95";
      let Fe = {
        scCustomSwiper: "rockstargames-modules-gtao-license-plateb794a0e12537ad5fd506353133b9d60a",
        scCustomSwiperItem: "rockstargames-modules-gtao-license-platedd4bcd955436c8a6982ee16756f7fd8b",
        scCustomSwiperTouchScreen: "rockstargames-modules-gtao-license-platef53cd004e3fd9207f157388549fa080b",
        scCustomSwiperWrap: "rockstargames-modules-gtao-license-platec1e8d8d5b52081b34283a5ac0d377362",
        scPager: "rockstargames-modules-gtao-license-platee8e5249dac92a2bc76788d0fe7d7dfb7",
        scPagerItem: "rockstargames-modules-gtao-license-platef64d91c845a3931140b8b2c6a47da81f"
      };
      Fe = c;
      const We = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: s = 17,
          slideChangeCallback: t = null,
          slideClickCallback: i = null,
          children: c = [],
          disablePager: o = !1,
          disableSwiper: r = !1
        }) => {
          const _ = (0, l.createRef)(),
            d = (0, U.ri)(_, !1),
            [u, m] = (0, l.useState)(!1),
            [g, f] = (0, l.useState)(!1),
            [p, k] = (0, l.useState)(0),
            [h, b] = (0, l.useState)(0),
            [v, C] = (0, l.useState)([s]),
            [y, w] = (0, l.useState)(v[0]),
            [x, S] = (0, l.useState)(252),
            [N, j] = (0, l.useState)(0),
            [M, I] = (0, l.useState)([]),
            [P, E] = (0, l.useState)([]),
            [T, L] = (0, l.useState)(!1),
            A = e => {
              if (!0 === u || !0 === r) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            R = a => {
              if (!0 === u || 0 === h || !0 === r) return;
              f(!0);
              const s = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                i = s > h ? 1 : -1,
                c = Math.abs(h - s);
              c > e ? (i > 0 ? (() => {
                if (!0 === u) return;
                m(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), w(v[e]), t && t(e)
              })() : (() => {
                if (!0 === u) return;
                m(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), w(v[e]), t && t(e)
              })(), b(0)) : w(v[p] + c * i)
            },
            z = () => {
              !0 !== u && !0 !== r && (m(!0), !0 !== u && (w(v[p]), b(0)), f(!1))
            };
          return (0, l.useEffect)(() => {
            const e = [];
            c.forEach(() => {
              e.push((0, l.createRef)())
            }), I(e)
          }, [c]), (0, l.useEffect)(() => {
            if (M.length < 1) return;
            S(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(s + a)
          }, [M]), (0, l.useEffect)(() => {
            !1 !== u && setTimeout(() => {
              m(!1)
            }, a)
          }, [u, a]), (0, l.useEffect)(() => {
            C(c.map((e, a) => (e => {
              let a = 0;
              const t = c.length;
              return 1 === t ? .5 * d - .5 * x - 2 * s + N : (0 === e && (a = s - e * x), e === t - 1 && t > 1 && (a = t * x * -1 + (d - (s - N))), e > 0 && e < t - 1 && (a = e * x * -1 + (.5 * d - .5 * x + .5 * N)), a)
            })(a))), 1 === c.length ? L(!0) : L(!1)
          }, [_.current, c, d]), (0, l.useEffect)(() => {
            const e = (a = p, c.map((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            }));
            var a;
            E(e)
          }, [c, p]), (0, l.useEffect)(() => {
            !0 !== o && !0 !== r || w(v[0])
          }, [r, o, v]), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              className: Fe.scCustomSwiper,
              ref: _,
              onTouchStart: A,
              onTouchMove: R,
              onTouchEnd: z,
              onMouseDown: A,
              onMouseMove: R,
              onMouseUp: z,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, n.jsx)("div", {
                className: Fe.scCustomSwiperWrap,
                "data-interaction-blocked": u,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${y}px)`
                },
                children: c.map((e, a) => (0, n.jsx)("div", {
                  onClick: () => (e => {
                    null === i || g || i(e)
                  })(a),
                  className: Fe.scCustomSwiperItem,
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`))
              })
            }), P.length > 1 && !1 === o && (0, n.jsx)("div", {
              className: Fe.scPager,
              children: P.map((e, a) => (0, n.jsx)("div", {
                className: Fe.scPagerItem,
                "data-active": e.active
              }, a))
            })]
          })
        },
        Ve = {
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
        Ge = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: s,
          refCharacterListDesktop: t,
          menuPadding: i,
          longCharList: c,
          setLongCharList: o,
          isMobileMode: r,
          setIsMobileMode: _,
          location: u,
          onNavigate: g
        }) => {
          const {
            windowWidth: f,
            windowHeight: p
          } = (0, v.useWindowResize)(), k = (0, d.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: C,
            activeSubNavId: y,
            setActiveSubNavId: w,
            subNavExtraHeight: x,
            setSubNavExtraHeight: S,
            navOpened: N,
            setScNavOpened: j
          } = E(), [M, I] = (0, l.useState)(""), {
            webSettings: P
          } = (0, v.useRockstarWebSettings)(), {
            track: L
          } = (0, m.useGtmTrack)(), H = (0, v.useRockstarTokenPing)(), {
            data: O,
            loggedIn: D
          } = (0, m.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: W,
            hasNotifications: V,
            navOpen: G,
            setCurrentCharId: X,
            setHasNotifications: Z,
            setSelectedCharacterTuple: K,
            setUserData: J
          } = (0, m.useRockstarUserState)(), [Y, q] = (0, l.useState)(null), [Q, ee] = (0, l.useState)(!1), [ae, se] = (0, l.useState)(!1), [te, ie] = (0, l.useState)(0), ce = (0, l.createRef)(), oe = (0, U.ri)(ce, !1), ne = (0, l.createRef)(), [le, re] = (0, l.useState)(0), [_e, de] = (0, l.useState)([]), [me, ge] = (0, l.useState)(244), fe = (0, l.useRef)(null), pe = (0, l.useMemo)(() => (0, R.A)(), []), ke = (0, l.useMemo)(() => ((e, a, s, t, i) => [{
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
                ...z,
                text: T.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(T.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...z,
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
                ...z,
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
              ...z,
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
              ...z,
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
                ...z,
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
                ...z,
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
                ...z,
                text: T.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, B(e), {
            text: e.formatMessage(T.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...z,
              text: T.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, e, O, V, M, window), [k, e, O, V, M, pe]), he = () => {
            se(i + me * te < oe)
          }, be = () => {
            if (ne.current) {
              const {
                current: e
              } = ne, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), re(a + e)
              } else re(a)
            }
          };
          return (0, l.useEffect)(() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            pe.currentSite?.site === R.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }, [u]), (0, l.useEffect)(() => {
            de(O?.characters?.[F] ?? [])
          }, [O, F]), (0, l.useEffect)(() => {
            O && J(O)
          }, [O]), (0, l.useEffect)(() => {
            const e = O?.characters?.gtao ?? [];
            if (null !== D && !e.length) return void K(!1);
            if (null == W || !e.length) return;
            const a = e?.[W] ?? e?.[0] ?? null;
            K(!!a?.platform && [a.platform, a.characterSlot])
          }, [W, O, D]), (0, l.useEffect)(() => {
            (async () => {
              if (!O?.id || !G) return;
              const {
                count: e
              } = await (0, v.coreScApiFetch)("notification/count", {
                pingBearer: H
              });
              Z(e > 0)
            })()
          }, [O, G]), (0, l.useEffect)(() => {
            he()
          }, [me]), (0, l.useEffect)(() => {
            s(!0), _(f < 768), _(f < 768 || p < 649)
          }, [f, p]), (0, l.useEffect)(() => {
            let e = _e.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = _e.length > 0 ? _e[W] ?? _e[0] : null;
            a && (q(a), _e.length > 1 ? ee(!0) : ee(!1), o(_e.length - 1 > 3))
          }, [W, _e]), (0, l.useEffect)(() => {
            he()
          }, [te, r, f, _e]), (0, l.useEffect)(() => {
            be(), A()(() => {
              setTimeout(be, 0)
            }, 300)
          }, [f, p]), (0, l.useEffect)(() => {
            const e = P?.currentCharId ?? 0;
            e !== W && X(Math.max(0, Math.min(e, _e.length - 1)))
          }, [_e, P]), (0, n.jsxs)(n.Fragment, {
            children: [null !== Y && "gtao" === F && (0, n.jsxs)("div", {
              className: Ve.scProfile,
              ref: fe,
              tabIndex: -1,
              "aria-label": k.formatMessage(T.profile_selector_profile_card),
              children: [(0, n.jsx)(ze, {
                s: Ve,
                character: Y
              }), !0 === Q && (0, n.jsxs)("div", {
                className: Ve.scCharacterSelector,
                children: [(0, n.jsx)("button", {
                  className: Ve.scCharacterSelectBtn,
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
                  children: (0, n.jsx)("span", {
                    children: (0, n.jsx)(d.FormattedMessage, {
                      ...T.profile_selector_switch_character
                    })
                  })
                }), !r && (0, n.jsx)("div", {
                  className: Ve.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": a,
                  ref: t,
                  children: _e.map(e => (0, n.jsx)(ue, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ge
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                }), r && (0, n.jsx)("div", {
                  className: Ve.scCharacterList,
                  "data-single-item": 2 === _e.length,
                  "data-swiper-disabled": ae,
                  "aria-hidden": a,
                  ref: ce,
                  children: (0, n.jsx)(We, {
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
                    children: _e.filter((e, a) => a !== W).map(e => (0, l.createElement)(ue, {
                      characterData: e,
                      setMobileCardWidth: ge,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    }))
                  })
                })]
              })]
            }), (0, n.jsxs)("nav", {
              className: Ve.nav,
              "aria-hidden": !G,
              children: [(0, n.jsx)("button", {
                className: Ve.navHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": G,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, n.jsx)("span", {
                  className: Ve.navHeaderText,
                  children: O.nickname
                })
              }), (0, n.jsx)("div", {
                className: Ve.navWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: ne,
                style: {
                  "--navWrap-max-height": `${le+x}px`
                },
                children: ke.map((e, a) => (0, l.createElement)($, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: w,
                  setSubNavExtraHeight: S,
                  onNavigate: g,
                  key: e.text
                }))
              })]
            }), (0, n.jsx)("div", {
              className: Ve.scLanguageSelector,
              style: {
                visibility: G ? null : "hidden"
              },
              children: (0, n.jsx)(h, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: C,
                location: u,
                onLanguageChange: d.onLanguageChange
              })
            })]
          })
        },
        Xe = {
          dragHandle: "rockstargames-modules-gtao-license-plateff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-gtao-license-plateb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-gtao-license-platec0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-gtao-license-plateb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-gtao-license-platec31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-gtao-license-plateeff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-gtao-license-platec5f6868e76307ee73276f140c2f988df"
        },
        Ze = (0, v.getConfigForDomain)(),
        Ke = k(({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: t
          } = (0, v.useWindowResize)(), i = (0, d.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: o,
            setActiveSubNavId: r,
            navOpened: _,
            setAccountNavOpened: u,
            charListHidden: g,
            setCharListHidden: f
          } = E(), [p, k] = (0, l.useState)(!1), {
            navHidden: h = !1
          } = (0, v.useState)(), {
            loggedIn: C
          } = (0, m.useRockstarUser)(), {
            currentCharId: y,
            navOpen: w,
            setNavOpen: x,
            userData: S
          } = (0, m.useRockstarUserState)(), {
            track: N
          } = (0, m.useGtmTrack)(), [j, M] = (0, l.useState)(!1), I = (0, l.useRef)(), [P, L] = (0, l.useState)(0), A = (0, l.createRef)(), [R, z] = (0, l.useState)(!1), [B, H] = (0, l.useState)(0), [O, $] = (0, l.useState)(!1), {
            mutateWebSettings: U,
            webSettings: F
          } = (0, v.useRockstarWebSettings)(), W = (0, l.useCallback)(e => {
            f(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }, [I]);
          return (0, l.useEffect)(() => {
            null !== y && F.currentCharId !== y && U({
              key: "currentCharId",
              value: y
            }), !1 === C ? U({
              key: "currentCharId",
              value: null
            }) : C && S && S?.accountSynced && N({
              event: "account_synced"
            })
          }, [y, C, S?.accountSynced]), (0, l.useEffect)(() => {
            I.current && (!1 === g && !1 === j && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === g && (I.current.style.height = null))
          }, [g, I, j]), (0, l.useEffect)(() => {
            const e = () => {
                x(!1), W(!0)
              },
              a = a => {
                const s = A?.current && a?.composedPath().includes(A.current);
                w && !s && e()
              },
              s = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", s), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", s)
            }
          }, [A]), (0, l.useEffect)(() => {
            x(!1), W(!0)
          }, [h]), (0, l.useEffect)(() => {
            if (A.current) {
              const {
                current: e
              } = A, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }, [A]), (0, l.useEffect)(() => {
            $(window.navigator.userAgent.includes("Mac"))
          }, []), (0, l.useEffect)(() => {
            A.current && k(A?.current?.scrollHeight >= t)
          }, [A, t]), (0, l.useEffect)(() => {
            w || (r(-1), o(!1))
          }, [w]), (0, l.useEffect)(() => {
            c && (g || W(!0), _ && (u(!1), r(-1)))
          }, [c]), (0, l.useEffect)(() => {
            _ && (c && o(!1), g || W(!0))
          }, [_]), void 0 === C ? null : (0, n.jsxs)(b.A, {
            enabled: !!w,
            removeScrollBar: !1,
            children: [(0, n.jsxs)("div", {
              className: [Xe.menu, w ? Xe.navOpen : ""].join(" "),
              "data-logged-in": C,
              "data-mac-browser": O,
              "data-scroll-mode": p,
              ref: A,
              "aria-hidden": !w,
              children: [(0, n.jsx)("button", {
                className: Xe.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  H(a)
                },
                onTouchMove: e => {
                  if (0 === B) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(B - a) > 1 && (H(0), x(!1))
                },
                children: (0, n.jsx)("img", {
                  className: Xe.dragHandle,
                  src: s(35902),
                  alt: i.formatMessage(T.sc_menu_drag_handle)
                })
              }), C ? (0, n.jsx)(Ge, {
                sc: Ze,
                charListHidden: g,
                hideCharacterList: W,
                refCharacterListDesktop: I,
                menuPadding: P,
                longCharList: j,
                setLongCharList: M,
                isMobileMode: R,
                setIsMobileMode: z,
                location: e,
                onNavigate: a
              }) : (0, n.jsx)(D, {
                sc: Ze,
                navOpen: w,
                location: e,
                onNavigate: a
              })]
            }), (0, n.jsx)("div", {
              className: [Xe.scOverlay, w ? Xe.navOpen : ""].join(" "),
              "data-logged-in": C
            })]
          })
        }),
        Je = k(({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, d.useIntl)(),
            {
              data: t,
              loggedIn: i
            } = (0, m.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: o,
              navOpen: r,
              setNavOpen: _
            } = (0, m.useRockstarUserState)(),
            {
              track: u
            } = (0, m.useGtmTrack)(),
            [g, f] = (0, l.useState)(),
            [p, k] = (0, l.useState)(!1),
            [h, b] = (0, l.useState)([]);
          (0, l.useEffect)(() => {
            b(t?.characters?.[c] ?? [])
          }, [t, c]);
          const v = (0, l.useCallback)(a => {
            a.stopPropagation(), _(!r), 1 == !r && e(null), u({
              event: "account_menu_click",
              element_placement: "account menu",
              text: r ? "close" : "open"
            })
          }, [r]);
          return (0, l.useEffect)(() => {
            k(!!h?.[o]?.mugshotUrl)
          }, [h, o]), (0, l.useEffect)(() => {
            f((() => {
              switch (i) {
                case void 0:
                  return s(5931);
                case !1:
                  return s(32810);
                case !0:
                  return h?.[o]?.mugshotUrl ?? t?.avatar
              }
            })())
          }, [t, h, o, i]), (0, n.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(r ? T.sc_menu_close : T.sc_menu_open),
            "aria-expanded": r,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(i),
            children: [(0, n.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: g,
              alt: t?.nickname || "",
              onError: () => {
                let e = null;
                e = s(p ? 5931 : 73091), f(e)
              }
            }), i && p && (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              children: (0, n.jsx)(Y, {
                platform: h?.[o]?.platform,
                tagSize: J.small
              })
            }), i && (0, n.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[o]?.platform ?? null
            })]
          })
        });
      var Ye = "_1tuft8a3",
        qe = "_1tuft8a2",
        Qe = "_1tuft8a4",
        ea = "_1tuft8a1",
        aa = "_1tuft8a0";
      let sa = {
        open: "rockstargames-modules-gtao-license-plated815312ad6eebc2c651f8554dc6c0bb7",
        pillBtn: "rockstargames-modules-gtao-license-platec5adbe3b8adfa45115608e536f6e0384",
        scCharacterList: "rockstargames-modules-gtao-license-platededb11e25dddfe561c538a370f5028e2",
        scCharacterSelectBtn: "rockstargames-modules-gtao-license-plated3991df21bf29ec01662910e116a6ff5",
        scCharacterSelector: "rockstargames-modules-gtao-license-plateefcb26b13bae0546c71d0b9f88e335a9",
        selected: "rockstargames-modules-gtao-license-platec7c3f92d1fdd021a5cd665583ac79d89"
      };
      sa = o;
      const ta = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        ia = k(() => {
          const e = (0, d.useIntl)(),
            {
              track: a
            } = (0, m.useGtmTrack)(),
            [s, t] = (0, l.useState)(null),
            [i, c] = (0, l.useState)(0),
            [o, r] = (0, l.useState)(!1),
            [u, g] = (0, l.useState)(!1),
            f = (0, l.createRef)(),
            [p, k] = (0, l.useState)([]),
            [h, b] = (0, l.useState)(244),
            {
              windowWidth: C
            } = (0, v.useWindowResize)(),
            [y, w] = (0, l.useState)(!1),
            x = (0, U.ri)(f, !1),
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
          (0, l.useEffect)(() => {
            void 0 === M && I(0)
          }, [M]), (0, l.useEffect)(() => {
            let e = p.length - 1;
            e < 0 && (e = 0), c(e);
            const a = p.length > 0 ? p[M] ?? p[0] : null;
            a && (t(a), p.length > 1 ? g(!0) : g(!1))
          }, [M, p]), (0, l.useEffect)(() => {
            k(S?.characters?.[j] ?? [])
          }, [S, j]), (0, l.useEffect)(() => {
            A()
          }, [h, i, y, C, p]), (0, l.useEffect)(() => {
            w(C < 1024)
          }, [C]);
          const A = () => {
              r(h * i < x)
            },
            R = e => {
              const s = p.filter((e, a) => a !== M).map(e => e);
              I(s[e].index), a({
                event: "character_selector_select",
                text: ta[s[e].platform],
                position: s[e].index
              })
            };
          return null !== s && "gtao" === j && N ? (0, n.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(T.profile_selector_profile_card),
            children: [(0, n.jsx)(ze, {
              s: sa,
              character: s
            }), !0 === u && (0, n.jsxs)("div", {
              className: sa.scCharacterSelector,
              children: [(0, n.jsxs)("button", {
                className: sa.scCharacterSelectBtn,
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
                children: [(0, n.jsx)("span", {
                  className: sa.scCharacterBtnText,
                  children: (0, n.jsx)(d.FormattedMessage, {
                    ...T.profile_selector_switch_character
                  })
                }), (0, n.jsx)(_.ChevronDown, {
                  className: sa.scCharacterBtnIcon,
                  label: ""
                })]
              }), !y && (0, n.jsx)("div", {
                className: sa.scCharacterList,
                "aria-hidden": P,
                children: p.filter((e, a) => a !== M).map((e, a) => (0, n.jsx)(ue, {
                  tabIndex: P ? -1 : 0,
                  onClick: () => R(a),
                  characterData: e,
                  setMobileCardWidth: b
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
              }), y && (0, n.jsx)("div", {
                className: sa.scCharacterList,
                "data-single-item": 2 === p.length,
                "data-swiper-disabled": o,
                "aria-hidden": P,
                ref: f,
                children: (0, n.jsx)(We, {
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
                  disablePager: o,
                  disableSwiper: o,
                  children: p.filter((e, a) => a !== M).map(e => (0, l.createElement)(ue, {
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
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
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
        i = [{
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
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = i.findIndex(a => Object.entries(a.sites).findIndex(([a, t]) => t === s && (e = {
            site: a,
            subDomain: t
          }, !0)) >= 0), c = i[t >= 0 ? t : 0];
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