try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f4e5f3c5-d0c7-451f-8b23-ea319ebe3a74", e._sentryDebugIdIdentifier = "sentry-dbid-f4e5f3c5-d0c7-451f-8b23-ea319ebe3a74")
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
  [6313], {
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    67293: (e, a, s) => {
      s.r(a), s.d(a, {
        CharacterProfile: () => ge,
        LanguageSelector: () => m,
        Menu: () => _e,
        MenuButton: () => ue
      });
      var t = s(42295),
        o = s(71127),
        c = s(69556),
        i = s(96311),
        r = s(81788),
        n = s(78795),
        l = s(2918);
      const d = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        _ = {
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
        u = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen"},"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"},"es-ES":{"language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador"},"es-MX":{"language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador"},"fr-FR":{"language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur"},"it-IT":{"language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore"},"ja-JP":{"language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く"},"ko-KR":{"language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기"},"pl-PL":{"language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza"},"pt-BR":{"language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador"},"ru-RU":{"language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока"},"zh-CN":{"language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单"},"zh-TW":{"language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單"}}'),
        f = e => (0, r.withIntl)(e, u),
        m = f((({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: s,
          location: u,
          parent: f = "element",
          onLanguageChange: m,
          ...g
        }) => {
          const {
            track: p
          } = (0, l.useGtmTrack)(), k = (0, r.useIntl)(), [h] = (0, r.getLocale)(), [b, v] = (0, o.useState)(!1), w = (0, o.useRef)(null), [C, x] = (0, o.useState)(0), y = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, S = e => {
            if (s && s(!1), h.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = r.locales.find((a => a.subdomaincom === e));
            a && m?.({
              selectedLocale: a,
              track: p,
              parent: f
            })
          };
          return (0, o.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === b && v(!1)
          }), [a]), (0, o.useEffect)((() => {
            w.current && x(w.current.scrollHeight)
          }), [w]), "function" != typeof m ? null : (0, t.jsxs)(t.Fragment, {
            children: [y && "sc-menu" === e && (0, t.jsx)("div", {
              className: [_.languageSelector, b ? _.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${f}-language-selector`,
              ...g,
              children: (0, t.jsx)("div", {
                className: _.selectBoxWrapper,
                children: (0, t.jsxs)("select", {
                  className: _.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    S(a)
                  },
                  "aria-label": k.formatMessage(d.language_selector_default),
                  "data-testid": `${f}-language-selector-button`,
                  children: [(0, t.jsx)("option", {
                    className: _.selectBoxOption,
                    value: "none",
                    "data-testid": `${f}-language-selector-current`,
                    children: r.locales.find((e => e.subdomaincom === h.subdomaincom))?.label ?? (0, t.jsx)(r.FormattedMessage, {
                      ...d.language_selector_default
                    })
                  }), r.locales.map((({
                    label: e,
                    subdomaincom: a
                  }) => (0, t.jsx)("option", {
                    className: _.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`)))]
                })
              })
            }), (!y || "sc-menu" !== e) && "footer" !== e && (0, t.jsxs)("div", {
              className: [_.languageSelector, b ? _.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${f}-language-selector`,
              ...g,
              children: [(0, t.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!b), v(!b)
                },
                "data-testid": `${f}-language-selector-button`,
                type: "button",
                "aria-label": k.formatMessage(d.language_selector_default),
                children: [(0, t.jsx)("i", {}), (0, t.jsx)("span", {
                  "data-testid": `${f}-language-selector-current`,
                  children: r.locales.find((e => e.subdomaincom === h.subdomaincom))?.label ?? (0, t.jsx)(r.FormattedMessage, {
                    ...d.language_selector_default
                  })
                })]
              }), (0, t.jsx)("div", {
                className: _.linkWrapper,
                ref: w,
                style: {
                  "--ls-linkWrapper-opened-height": `${C}px`
                },
                children: (0, t.jsx)("div", {
                  className: _.links,
                  children: r.locales.map((({
                    subdomaincom: e,
                    label: a
                  }) => (0, t.jsx)(n.A, {
                    onClick: a => {
                      a.preventDefault(), S(e)
                    },
                    tabIndex: b ? 0 : -1,
                    "data-testid": `${f}-language-selector-${e}`,
                    children: a
                  }, a)))
                })
              })]
            }), "footer" === e && (0, t.jsxs)("div", {
              className: _.dropdownContainer,
              "data-testid": `${f}-language-selector`,
              ...g,
              children: [(0, t.jsx)(i.Globe, {
                size: "MD",
                label: ""
              }), (0, t.jsxs)(c.Dropdown.Root, {
                className: _.dropdown,
                onValueChange: e => {
                  S(e)
                },
                defaultValue: r.locales.find((e => e.subdomaincom === h.subdomaincom))?.subdomaincom,
                children: [(0, t.jsxs)(c.Dropdown.Trigger, {
                  children: [(0, t.jsx)(c.Dropdown.TriggerText, {
                    placeholder: k.formatMessage(d.language_selector_default)
                  }), (0, t.jsx)(c.Dropdown.TriggerIcon, {})]
                }), (0, t.jsx)(c.Dropdown.Portal, {
                  children: (0, t.jsx)(c.Dropdown.Content, {
                    children: (0, t.jsx)(c.Dropdown.ScrollArea, {
                      children: r.locales.map((({
                        subdomaincom: e,
                        label: a
                      }) => (0, t.jsx)(c.Dropdown.Option, {
                        value: e,
                        testId: `${f}-language-selector-${e}`,
                        children: (0, t.jsx)(c.Dropdown.OptionText, {
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
      var g = s(97359),
        p = s(95966);
      const k = (0, p.makeVar)(!1),
        h = e => k(e),
        b = (0, p.makeVar)(-1),
        v = e => b(e),
        w = (0, p.makeVar)(-1),
        C = e => w(e),
        x = (0, p.makeVar)(!0),
        y = e => x(e),
        S = (0, p.makeVar)(!0),
        N = e => S(e),
        j = () => {
          const e = (0, p.useReactiveVar)(k),
            a = (0, p.useReactiveVar)(b),
            s = (0, p.useReactiveVar)(w),
            t = (0, p.useReactiveVar)(x),
            c = (0, p.useReactiveVar)(S);
          return (0, o.useEffect)((() => {
            c || (e && h(!1), t && (y(!1), v(-1)))
          }), [c]), (0, o.useEffect)((() => {
            !e && c && (t || y(!0))
          }), [e, c]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: h,
            activeSubNavId: a,
            setActiveSubNavId: v,
            subNavExtraHeight: s,
            setSubNavExtraHeight: C,
            navOpened: t,
            setAccountNavOpened: y,
            charListHidden: c,
            setCharListHidden: N
          })), [e, a, s, t, c])
        },
        M = (0, r.defineMessages)({
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
      var I = s(9738),
        E = s.n(I),
        P = s(79867);
      const T = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        A = e => ({
          text: e.formatMessage(M.sc_link_help),
          target: "_self",
          ga: {
            ...T,
            text: M.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(M.sc_link_support),
            location: {
              domain: P.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(M.sc_link_legal),
            location: {
              domain: P.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(M.sc_link_privacy_policy),
            location: {
              domain: P.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(M.sc_link_cookies_policy),
            location: {
              domain: P.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(M.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(M.sc_link_do_not_sell_my_information),
            location: {
              domain: P.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        L = ({
          to: e,
          target: a,
          className: s,
          onNavigate: o,
          onClick: c,
          reloadDocument: i,
          children: r,
          ...n
        }) => {
          const l = e?.startsWith("http");
          return (0, t.jsx)("a", {
            href: e,
            className: s,
            onClick: a => {
              c?.(a), l || i || (o ? (a.preventDefault(), o(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...n,
            children: r
          })
        },
        R = ({
          text: e,
          target: a,
          href: s,
          location: o,
          ga: c,
          dataTestId: i,
          isSubLink: n,
          hasNotifications: d = !1,
          onClickCallback: _ = () => {},
          tabIndex: u,
          reloadDocument: f = !1,
          onNavigate: m
        }) => {
          const {
            track: g
          } = (0, l.useGtmTrack)(), p = (0, P.A)(), k = (0, r.useIntl)();
          let h = s;
          o && (h = o.domain === p.currentSite?.site ? o.path : `https://${p.sites[o.domain]}.rockstargames.com${o.path}`);
          const b = {
            ...c,
            link_url: h
          };
          return (0, t.jsxs)(L, {
            className: n ? "rockstargames-modules-core-footerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-footerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": i || "menuLink",
            title: e,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: f,
            tabIndex: u,
            onClick: e => {
              g(b), _(e)
            },
            onNavigate: m,
            children: [e, d && (0, t.jsx)("div", {
              className: "rockstargames-modules-core-footeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, t.jsx)("span", {
                className: "rockstargames-modules-core-footere49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(M.nofications_new)
              })
            })]
          })
        },
        D = ({
          id: e,
          text: a,
          target: s,
          href: c,
          location: i,
          ga: r,
          hasNotifications: n = !1,
          dataTestId: d,
          children: _ = [],
          activeSubNavId: u,
          setActiveSubNavId: f,
          setSubNavExtraHeight: m,
          reloadDocument: g = !1,
          onClickCallback: k = () => {},
          onNavigate: h
        }) => {
          const {
            windowWidth: b,
            windowHeight: v
          } = (0, p.useWindowResize)(), {
            track: w
          } = (0, l.useGtmTrack)(), {
            navOpen: C
          } = (0, l.useRockstarUserState)(), x = (0, o.useRef)(null), [y, S] = (0, o.useState)(0), [N, j] = (0, o.useState)(0), [M, I] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            u !== e && !1 === M && I(!0), u === e && I(!1)
          }), [u]), (0, o.useEffect)((() => {
            if (!x.current) return;
            S(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }), [x, b, v]), _.length > 0 ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("button", {
              className: "rockstargames-modules-core-footercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": d || "menuButton",
              title: a,
              tabIndex: C ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), w(r), u === e ? (f(-1), m(0)) : (f(e), m(y + N + N))
              },
              children: [(0, t.jsx)("span", {
                className: "rockstargames-modules-core-footerb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, t.jsx)("span", {
                className: "rockstargames-modules-core-footerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, t.jsx)("nav", {
              className: "rockstargames-modules-core-footercbf6e64eadb6f965877129d539aa2dcd",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${y}px`
              },
              children: _.map((e => (0, o.createElement)(R, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !C ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, t.jsx)(R, {
            text: a,
            target: s,
            href: c,
            location: i,
            ga: r,
            hasNotifications: n,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: k,
            tabIndex: C ? 0 : -1,
            reloadDocument: g,
            onNavigate: h
          })
        },
        z = ({
          sc: e,
          location: a,
          onNavigate: s
        }) => {
          const {
            windowWidth: c,
            windowHeight: i
          } = (0, p.useWindowResize)(), n = (0, r.useIntl)(), {
            languageSelectorOpened: d,
            setLanguageSelectorOpened: _,
            activeSubNavId: u,
            setActiveSubNavId: f,
            subNavExtraHeight: g,
            setSubNavExtraHeight: k
          } = j(), {
            setSelectedCharacterTuple: h,
            navOpen: b
          } = (0, l.useRockstarUserState)(), v = (0, p.useLocale)(), w = (0, p.toScLocaleString)(v), [C, x] = (0, o.useState)(""), y = `${e.login}?returnUrl=${C}&lang=${w}`, S = `${e.signup}&returnUrl=${C}&lang=${w}`, N = (0, o.useMemo)((() => (0, P.A)()), []), I = (0, o.useMemo)((() => {
            const e = ((e, a, s) => [{
              text: e.formatMessage(M.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: M.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(M.sc_link_join_social_club),
              href: s,
              ga: {
                event: "cta_signup",
                text: M.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, A(e)])(n, y, S);
            return e
          }), [n, y, S, N]), [T, L] = (0, o.useState)(0), R = (0, o.createRef)(), z = () => {
            if (R.current) {
              const {
                current: e
              } = R, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), L(a + e)
              } else L(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }), [JSON.stringify(a)]), (0, o.useEffect)((() => {
            h(!1)
          }), []), (0, o.useEffect)((() => {
            z(), E()((() => {
              setTimeout(z, 0)
            }), 300)
          }), [c, i]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("nav", {
              className: "rockstargames-modules-core-footerf300d66bd02f52ac564238ca6125a091",
              children: (0, t.jsx)("div", {
                className: "rockstargames-modules-core-footerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: R,
                style: {
                  "--navWrap-max-height": `${g+T}px`
                },
                children: I.map((e => (0, o.createElement)(D, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: f,
                  setSubNavExtraHeight: k,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, t.jsx)("div", {
              className: "rockstargames-modules-core-footerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: b ? null : "hidden"
              },
              children: (0, t.jsx)(m, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: d,
                setLanguageSelectorOpened: e => {
                  f(-1), _(e)
                },
                location: a,
                onLanguageChange: r.onLanguageChange
              })
            })]
          })
        };
      var H = s(72148),
        O = s(973);
      var B = s(10439);
      const $ = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        U = (0, o.forwardRef)((function({
          rank: e,
          size: a = "large",
          className: s,
          alt: o,
          testId: c,
          ...i
        }, r) {
          const n = $(e),
            l = (0, O.v6)(i, {
              className: (0, B.A)("rockstargames-modules-core-footerf54750ef62f8600000c94f0caba85986", s),
              "data-testid": c
            });
          return (0, t.jsxs)("div", {
            "data-size": a,
            ref: r,
            ...l,
            children: [(0, t.jsx)("svg", {
              role: "svg",
              "aria-label": o,
              className: "rockstargames-modules-core-footera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": $(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, t.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: n
              })
            }), (0, t.jsx)("span", {
              className: "rockstargames-modules-core-footerd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        }));
      var F = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const W = ({
        tagSize: e,
        platform: a,
        className: s = ""
      }) => {
        const {
          src: o,
          alt: c
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
          className: (0, B.A)("rockstargames-modules-core-footerb0ff0045ed0326a46ca1e0867d2050c1", s),
          "data-testid": "platform-tag",
          "data-platform": a,
          "data-tag-size": e,
          src: o,
          alt: c
        })
      };
      let V = {
        avatar: "rockstargames-modules-core-footerd79f37fd31c0943cbf4368215dfc79a0",
        characterBtn: "rockstargames-modules-core-footerb26daf00eb7def0a82a3c1481316acb0",
        characterBtnStats: "rockstargames-modules-core-footered30f2b92b3fc2937e7278409208872f",
        scCharBtnNames: "rockstargames-modules-core-footera6009feaf97e98d18c6efc2de47ba8b4",
        scRp: "rockstargames-modules-core-footerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
        scRpIcon: "rockstargames-modules-core-footerfaa7b2808fb96fa02fd2e99be36df8e6",
        scRpLevel: "rockstargames-modules-core-footerc9300f34b82bbdffb7006ff32247adff",
        scUserName: "rockstargames-modules-core-footerc3ab062db0e9e0f75e0598eec5022de5"
      };
      const X = "CharacterButton:characterName",
        Z = "CharacterButton:avatar",
        G = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: c,
          onClick: i = () => {}
        }) => {
          const n = (0, r.useIntl)(),
            {
              currentCharId: d,
              setCurrentCharId: _
            } = (0, l.useRockstarUserState)(),
            u = (0, o.createRef)(),
            {
              platform: f,
              platformUsername: m,
              mugshotUrl: g,
              stats: p
            } = e,
            [k, h] = (0, o.useState)(g),
            b = d === e.index;
          return (0, o.useEffect)((() => {
            u.current && a && a(u?.current?.offsetWidth)
          }), [u]), (0, t.jsxs)("button", {
            className: V.characterBtn,
            type: "button",
            "aria-hidden": b,
            ref: u,
            tabIndex: c,
            onClick: () => i(-1),
            children: [(0, t.jsx)("div", {
              className: V.avatarFrame,
              children: (0, t.jsx)("div", {
                className: V.avatar,
                "data-size": "small",
                children: (0, t.jsx)("img", {
                  className: V.avatarImg,
                  src: k,
                  alt: n.formatMessage(M.profile_selector_mugshot, {
                    userName: m
                  }),
                  onError: () => {
                    h(s(5931))
                  },
                  "data-testid": Z
                })
              })
            }), (0, t.jsxs)("div", {
              className: V.characterBtnStats,
              children: [(0, t.jsxs)("div", {
                className: V.scCharBtnNames,
                children: [(0, t.jsx)(W, {
                  tagSize: F.large,
                  platform: f
                }), (0, t.jsx)("div", {
                  className: V.scUserName,
                  "data-size": "small",
                  "data-testid": X,
                  children: m
                })]
              }), (0, t.jsx)("div", {
                className: V.scRp,
                children: (0, t.jsx)(U, {
                  size: "small",
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        };
      let K;
      K = {
        avatar: "rockstargames-modules-core-footere1ed133f04d4201de6c787667fe46939",
        avatarPlatform: "rockstargames-modules-core-footerb061d8f050dd255669342700ddbe9f94",
        pillBtn: "rockstargames-modules-core-footerc094ee9992658964204dbc3c55063187",
        profileDetails: "rockstargames-modules-core-footerc7a6cdc85906179aeadfbea13a491277",
        profileStats: "rockstargames-modules-core-footera4a23edaf47f301893d88f6e233907b3",
        scBank: "rockstargames-modules-core-footeree0f3a44274a32b7c03d50d1f8e23578",
        scCash: "rockstargames-modules-core-footerf21a08a90936d208b236a20d5893ab50",
        scCrewName: "rockstargames-modules-core-footerc3c644cc20da4e904a7f4e5e3850bf7b",
        scCrewRankBar: "rockstargames-modules-core-footercacefbe6235792c328eabdb72c7e812c",
        scCrewRankBarItem: "rockstargames-modules-core-footerf9fc60f5d92cda504e6a40d09ec34429",
        scMoney: "rockstargames-modules-core-footerffc96f13a79073f795d296415f874263",
        scNames: "rockstargames-modules-core-footerc6a703613ae9abf4927cf1f023878d9c",
        scProgress: "rockstargames-modules-core-footerb1230619acc50d561a73b55a185e782e",
        scRpIcon: "rockstargames-modules-core-footerfd047e239c2b7adafe8729ad8e7ae646",
        scRpLevel: "rockstargames-modules-core-footere3dcece76ffe0dcd864d13ada6a4c532",
        scTagsNames: "rockstargames-modules-core-footerac56f06be77872b6f7ba074189a2ec36",
        scUserName: "rockstargames-modules-core-footera829077ec05e5b83560be13ff3604c8e",
        selected: "rockstargames-modules-core-footerf68f5558f3bacb6ab2f0f6e52b7c4d3d"
      };
      const J = "ProfileCard:characterName",
        Y = "ProfileCard:avatar",
        q = "ProfileCard:bankValue",
        Q = "ProfileCard:cashValue",
        ee = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, l.useRockstarUser)(), {
            track: c
          } = (0, l.useGtmTrack)(), i = (0, r.useIntl)(), [n, d] = (0, o.useState)([]), [_, u] = (0, o.useState)(null), [f, m] = (0, o.useState)(null), [g, p] = (0, o.useState)(!1), [k, h] = (0, o.useState)(-1), [b, v] = (0, o.useState)([]), [w, C] = (0, o.useState)(0), x = s(5931), {
            platform: y
          } = e, [S, N] = (0, o.useState)("0"), [j, I] = (0, o.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), P = () => {
            A((0, t.jsx)("img", {
              src: x,
              alt: i.formatMessage(M.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [T, A] = (0, o.useState)((0, t.jsx)("img", {
            className: K.avatarImg,
            src: e.mugshotUrl,
            alt: i.formatMessage(M.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: P,
            "data-testid": Y
          }));
          (0, o.useEffect)((() => {
            d(a.crews ?? [])
          }), [a.crews]), (0, o.useEffect)((() => {
            A((0, t.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: P,
              "data-testid": Y
            })), N(E(e.stats.overview.bank.value)), I(E(e.stats.overview.cash.value)), C(parseInt(e.stats.overview.rank.value))
          }), [e, a.nickname]), (0, o.useEffect)((() => {
            n && n.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), m(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [n]), (0, o.useEffect)((() => {
            const e = [];
            if (!g && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, t.jsx)("div", {
                className: K.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }), [k, g, f]);
          const L = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, t.jsxs)("div", {
            className: K.profileDetails,
            onClick: L,
            onKeyUp: L,
            role: "button",
            tabIndex: -1,
            children: [(0, t.jsxs)("div", {
              className: K.avatar,
              children: [T, (0, t.jsx)("div", {
                className: K.avatarPlatform,
                "data-platform": y,
                children: (0, t.jsx)(W, {
                  className: K.platformTag,
                  tagSize: F.large,
                  platform: y
                })
              })]
            }), (0, t.jsxs)("div", {
              className: K.profileStats,
              children: [(0, t.jsx)("div", {
                className: K.scNames,
                children: (0, t.jsxs)("div", {
                  className: K.scTagsNames,
                  children: [(0, t.jsx)("span", {
                    className: K.scUserName,
                    "data-testid": J,
                    children: e.platformUsername
                  }), _ && (0, t.jsxs)("span", {
                    className: K.scCrewName,
                    "data-arrow-tag": g,
                    children: [_, !g && (0, t.jsx)("div", {
                      className: K.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, t.jsxs)("div", {
                className: K.scProgress,
                children: [(0, t.jsx)(U, {
                  className: K.scRpLevel,
                  rank: w
                }), (0, t.jsxs)("div", {
                  className: K.scMoney,
                  children: [(0, t.jsxs)("span", {
                    className: K.scCash,
                    "data-testid": Q,
                    children: ["$", j]
                  }), (0, t.jsxs)("span", {
                    className: K.scBank,
                    "data-testid": q,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        };
      let ae = "rockstargames-modules-core-footerb794a0e12537ad5fd506353133b9d60a",
        se = "rockstargames-modules-core-footerdd4bcd955436c8a6982ee16756f7fd8b",
        te = "rockstargames-modules-core-footerc1e8d8d5b52081b34283a5ac0d377362",
        oe = "rockstargames-modules-core-footere8e5249dac92a2bc76788d0fe7d7dfb7",
        ce = "rockstargames-modules-core-footerf64d91c845a3931140b8b2c6a47da81f";
      const ie = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: s = 17,
          slideChangeCallback: c = null,
          slideClickCallback: i = null,
          children: r = [],
          disablePager: n = !1,
          disableSwiper: l = !1
        }) => {
          const d = (0, o.createRef)(),
            _ = (0, H.ri)(d, !1),
            [u, f] = (0, o.useState)(!1),
            [m, g] = (0, o.useState)(!1),
            [p, k] = (0, o.useState)(0),
            [h, b] = (0, o.useState)(0),
            [v, w] = (0, o.useState)([s]),
            [C, x] = (0, o.useState)(v[0]),
            [y, S] = (0, o.useState)(252),
            [N, j] = (0, o.useState)(0),
            [M, I] = (0, o.useState)([]),
            [E, P] = (0, o.useState)([]),
            [T, A] = (0, o.useState)(!1),
            L = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            R = a => {
              if (!0 === u || 0 === h || !0 === l) return;
              g(!0);
              const s = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                t = s > h ? 1 : -1,
                o = Math.abs(h - s);
              o > e ? (t > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), x(v[e]), c && c(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), x(v[e]), c && c(e)
              })(), b(0)) : x(v[p] + o * t)
            },
            D = () => {
              !0 !== u && !0 !== l && (f(!0), !0 !== u && (x(v[p]), b(0)), g(!1))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            r.forEach((() => {
              e.push((0, o.createRef)())
            })), I(e)
          }), [r]), (0, o.useEffect)((() => {
            if (M.length < 1) return;
            S(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(s + a)
          }), [M]), (0, o.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              f(!1)
            }), a)
          }), [u, a]), (0, o.useEffect)((() => {
            w(r.map(((e, a) => (e => {
              let a = 0;
              const t = r.length;
              return 1 === t ? .5 * _ - .5 * y - 2 * s + N : (0 === e && (a = s - e * y), e === t - 1 && t > 1 && (a = t * y * -1 + (_ - (s - N))), e > 0 && e < t - 1 && (a = e * y * -1 + (.5 * _ - .5 * y + .5 * N)), a)
            })(a)))), 1 === r.length ? A(!0) : A(!1)
          }), [d.current, r, _]), (0, o.useEffect)((() => {
            const e = (a = p, r.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            P(e)
          }), [r, p]), (0, o.useEffect)((() => {
            !0 !== n && !0 !== l || x(v[0])
          }), [l, n, v]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
              className: ae,
              ref: d,
              onTouchStart: L,
              onTouchMove: R,
              onTouchEnd: D,
              onMouseDown: L,
              onMouseMove: R,
              onMouseUp: D,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, t.jsx)("div", {
                className: te,
                "data-interaction-blocked": u,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${C}px)`
                },
                children: r.map(((e, a) => (0, t.jsx)("div", {
                  onClick: () => (e => {
                    null === i || m || i(e)
                  })(a),
                  className: se,
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), E.length > 1 && !1 === n && (0, t.jsx)("div", {
              className: oe,
              children: E.map(((e, a) => (0, t.jsx)("div", {
                className: ce,
                "data-active": e.active
              }, a)))
            })]
          })
        },
        re = {
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
        ne = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: s,
          refCharacterListDesktop: c,
          menuPadding: i,
          longCharList: n,
          setLongCharList: d,
          isMobileMode: _,
          setIsMobileMode: u,
          location: f,
          onNavigate: g
        }) => {
          const {
            windowWidth: k,
            windowHeight: h
          } = (0, p.useWindowResize)(), b = (0, r.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: w,
            activeSubNavId: C,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: S,
            navOpened: N,
            setScNavOpened: I
          } = j(), [L, R] = (0, o.useState)(""), {
            webSettings: z
          } = (0, p.useRockstarWebSettings)(), {
            track: O
          } = (0, l.useGtmTrack)(), B = (0, p.useRockstarTokenPing)(), {
            data: $,
            loggedIn: U
          } = (0, l.useRockstarUser)(), {
            charactersNeeded: F,
            currentCharId: W,
            hasNotifications: V,
            navOpen: X,
            setCurrentCharId: Z,
            setHasNotifications: K,
            setSelectedCharacterTuple: J,
            setUserData: Y
          } = (0, l.useRockstarUserState)(), [q, Q] = (0, o.useState)(null), [ae, se] = (0, o.useState)(!1), [te, oe] = (0, o.useState)(!1), [ce, ne] = (0, o.useState)(0), le = (0, o.createRef)(), de = (0, H.ri)(le, !1), _e = (0, o.createRef)(), [ue, fe] = (0, o.useState)(0), [me, ge] = (0, o.useState)([]), [pe, ke] = (0, o.useState)(244), he = (0, o.useRef)(null), be = (0, o.useMemo)((() => (0, P.A)()), []), ve = (0, o.useMemo)((() => ((e, a, s, t, o) => [{
            text: e.formatMessage(M.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(M.sc_link_settings),
              location: {
                domain: P.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...T,
                text: M.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(M.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...T,
                text: M.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(M.sc_link_game_activation),
              location: {
                domain: P.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...T,
                text: M.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(M.sc_link_notifications),
            location: {
              domain: P.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...T,
              text: M.sc_link_notifications.defaultMessage,
              location: {
                domain: P.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(M.sc_link_crews),
            location: {
              domain: P.C.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...T,
              text: M.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(M.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(M.sc_link_my_friends),
              location: {
                domain: P.C.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...T,
                text: M.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(M.sc_link_import_friends),
              location: {
                domain: P.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...T,
                text: M.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(M.sc_link_find_friends),
              location: {
                domain: P.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...T,
                text: M.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, A(e), {
            text: e.formatMessage(M.sc_link_log_out),
            href: `${a.logout}?returnUrl=${o}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...T,
              text: M.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(b, e, $, V, L, window)), [b, e, $, V, L, be]), we = () => {
            oe(i + pe * ce < de)
          }, Ce = () => {
            if (_e.current) {
              const {
                current: e
              } = _e, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), fe(a + e)
              } else fe(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            be.currentSite?.site === P.C.socialClub && (e = encodeURIComponent("/")), R(e)
          }), [f]), (0, o.useEffect)((() => {
            ge($?.characters?.[F] ?? [])
          }), [$, F]), (0, o.useEffect)((() => {
            $ && Y($)
          }), [$]), (0, o.useEffect)((() => {
            const e = $?.characters?.gtao ?? [];
            if (null !== U && !e.length) return void J(!1);
            if (null == W || !e.length) return;
            const a = e?.[W] ?? e?.[0] ?? null;
            J(!!a?.platform && [a.platform, a.characterSlot])
          }), [W, $, U]), (0, o.useEffect)((() => {
            (async () => {
              if (!$?.id || !X) return;
              const {
                count: e
              } = await (0, p.coreScApiFetch)("notification/count", {
                pingBearer: B
              });
              K(e > 0)
            })()
          }), [$, X]), (0, o.useEffect)((() => {
            we()
          }), [pe]), (0, o.useEffect)((() => {
            s(!0), u(k < 768), u(k < 768 || h < 649)
          }), [k, h]), (0, o.useEffect)((() => {
            let e = me.length - 1;
            e < 0 && (e = 0), ne(e);
            const a = me.length > 0 ? me[W] ?? me[0] : null;
            a && (Q(a), me.length > 1 ? se(!0) : se(!1), d(me.length - 1 > 3))
          }), [W, me]), (0, o.useEffect)((() => {
            we()
          }), [ce, _, k, me]), (0, o.useEffect)((() => {
            Ce(), E()((() => {
              setTimeout(Ce, 0)
            }), 300)
          }), [k, h]), (0, o.useEffect)((() => {
            const e = z?.currentCharId ?? 0;
            e !== W && Z(Math.max(0, Math.min(e, me.length - 1)))
          }), [me, z]), (0, t.jsxs)(t.Fragment, {
            children: [null !== q && "gtao" === F && (0, t.jsxs)("div", {
              className: re.scProfile,
              ref: he,
              tabIndex: -1,
              "aria-label": b.formatMessage(M.profile_selector_profile_card),
              children: [(0, t.jsx)(ee, {
                s: re,
                character: q
              }), !0 === ae && (0, t.jsxs)("div", {
                className: re.scCharacterSelector,
                children: [(0, t.jsx)("button", {
                  className: re.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), O({
                      event: t ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, t.jsx)("span", {
                    children: (0, t.jsx)(r.FormattedMessage, {
                      ...M.profile_selector_switch_character
                    })
                  })
                }), !_ && (0, t.jsx)("div", {
                  className: re.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: c,
                  children: me.map((e => (0, t.jsx)(G, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ke
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), _ && (0, t.jsx)("div", {
                  className: re.scCharacterList,
                  "data-single-item": 2 === me.length,
                  "data-swiper-disabled": te,
                  "aria-hidden": a,
                  ref: le,
                  children: (0, t.jsx)(ie, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      O({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: te,
                    disableSwiper: te,
                    children: me.filter(((e, a) => a !== W)).map((e => (0, o.createElement)(G, {
                      characterData: e,
                      setMobileCardWidth: ke,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, t.jsxs)("nav", {
              className: re.nav,
              "aria-hidden": !X,
              children: [(0, t.jsx)("button", {
                className: re.navHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": X,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || I(!0)
                },
                "data-testid": "playerButton",
                children: (0, t.jsx)("span", {
                  className: re.navHeaderText,
                  children: $.nickname
                })
              }), (0, t.jsx)("div", {
                className: re.navWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: _e,
                style: {
                  "--navWrap-max-height": `${ue+y}px`
                },
                children: ve.map(((e, a) => (0, o.createElement)(D, {
                  ...e,
                  id: a,
                  activeSubNavId: C,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: S,
                  onNavigate: g,
                  key: e.text
                })))
              })]
            }), (0, t.jsx)("div", {
              className: re.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, t.jsx)(m, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: w,
                location: f,
                onLanguageChange: r.onLanguageChange
              })
            })]
          })
        },
        le = {
          dragHandle: "rockstargames-modules-core-footerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-footerb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-core-footerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-core-footerb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-core-footerc31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-core-footereff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-core-footerc5f6868e76307ee73276f140c2f988df"
        },
        de = (0, p.getConfigForDomain)(),
        _e = f((({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: c
          } = (0, p.useWindowResize)(), i = (0, r.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: d,
            setActiveSubNavId: _,
            navOpened: u,
            setAccountNavOpened: f,
            charListHidden: m,
            setCharListHidden: k
          } = j(), [h, b] = (0, o.useState)(!1), {
            navHidden: v = !1
          } = (0, p.useState)(), {
            loggedIn: w
          } = (0, l.useRockstarUser)(), {
            currentCharId: C,
            navOpen: x,
            setNavOpen: y,
            userData: S
          } = (0, l.useRockstarUserState)(), {
            track: N
          } = (0, l.useGtmTrack)(), [I, E] = (0, o.useState)(!1), P = (0, o.useRef)(), [T, A] = (0, o.useState)(0), L = (0, o.createRef)(), [R, D] = (0, o.useState)(!1), [H, O] = (0, o.useState)(0), [B, $] = (0, o.useState)(!1), {
            mutateWebSettings: U,
            webSettings: F
          } = (0, p.useRockstarWebSettings)(), W = (0, o.useCallback)((e => {
            k(e), P.current && !0 === e && (P.current.scrollTop = 0)
          }), [P]);
          return (0, o.useEffect)((() => {
            null !== C && F.currentCharId !== C && U({
              key: "currentCharId",
              value: C
            }), !1 === w ? U({
              key: "currentCharId",
              value: null
            }) : w && S && S?.accountSynced && N({
              event: "account_synced"
            })
          }), [C, w, S?.accountSynced]), (0, o.useEffect)((() => {
            P.current && (!1 === m && !1 === I && (P.current.style.height = `${P.current.scrollHeight}px`), !0 === m && (P.current.style.height = null))
          }), [m, P, I]), (0, o.useEffect)((() => {
            const e = () => {
                y(!1), W(!0)
              },
              a = a => {
                const s = L?.current && a?.composedPath().includes(L.current);
                x && !s && e()
              },
              s = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", s), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", s)
            }
          }), [L]), (0, o.useEffect)((() => {
            y(!1), W(!0)
          }), [v]), (0, o.useEffect)((() => {
            if (L.current) {
              const {
                current: e
              } = L, a = window.getComputedStyle(e);
              A(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [L]), (0, o.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            L.current && b(L?.current?.scrollHeight >= c)
          }), [L, c]), (0, o.useEffect)((() => {
            x || (_(-1), d(!1))
          }), [x]), (0, o.useEffect)((() => {
            n && (m || W(!0), u && (f(!1), _(-1)))
          }), [n]), (0, o.useEffect)((() => {
            u && (n && d(!1), m || W(!0))
          }), [u]), void 0 === w ? null : (0, t.jsxs)(g.A, {
            enabled: !!x,
            removeScrollBar: !1,
            children: [(0, t.jsxs)("div", {
              className: [le.menu, x ? le.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": B,
              "data-scroll-mode": h,
              ref: L,
              "aria-hidden": !x,
              children: [(0, t.jsx)("button", {
                className: le.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  O(a)
                },
                onTouchMove: e => {
                  if (0 === H) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(H - a) > 1 && (O(0), y(!1))
                },
                children: (0, t.jsx)("img", {
                  className: le.dragHandle,
                  src: s(35902),
                  alt: i.formatMessage(M.sc_menu_drag_handle)
                })
              }), w ? (0, t.jsx)(ne, {
                sc: de,
                charListHidden: m,
                hideCharacterList: W,
                refCharacterListDesktop: P,
                menuPadding: T,
                longCharList: I,
                setLongCharList: E,
                isMobileMode: R,
                setIsMobileMode: D,
                location: e,
                onNavigate: a
              }) : (0, t.jsx)(z, {
                sc: de,
                navOpen: x,
                location: e,
                onNavigate: a
              })]
            }), (0, t.jsx)("div", {
              className: [le.scOverlay, x ? le.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        })),
        ue = f((({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, r.useIntl)(),
            {
              data: c,
              loggedIn: i
            } = (0, l.useRockstarUser)(),
            {
              charactersNeeded: n,
              currentCharId: d,
              navOpen: _,
              setNavOpen: u
            } = (0, l.useRockstarUserState)(),
            {
              track: f
            } = (0, l.useGtmTrack)(),
            [m, g] = (0, o.useState)(),
            [p, k] = (0, o.useState)(!1),
            [h, b] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            b(c?.characters?.[n] ?? [])
          }), [c, n]);
          const v = (0, o.useCallback)((a => {
            a.stopPropagation(), u(!_), 1 == !_ && e(null), f({
              event: "account_menu_click",
              element_placement: "account menu",
              text: _ ? "close" : "open"
            })
          }), [_]);
          return (0, o.useEffect)((() => {
            k(!!h?.[d]?.mugshotUrl)
          }), [h, d]), (0, o.useEffect)((() => {
            g((() => {
              switch (i) {
                case void 0:
                  return s(5931);
                case !1:
                  return s(32810);
                case !0:
                  return h?.[d]?.mugshotUrl ?? c?.avatar
              }
            })())
          }), [c, h, d, i]), (0, t.jsxs)("button", {
            className: "rockstargames-modules-core-footeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(_ ? M.sc_menu_close : M.sc_menu_open),
            "aria-expanded": _,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(i),
            children: [(0, t.jsx)("img", {
              className: "rockstargames-modules-core-footera917b58ca28b68550a1aa5d99c7eb998",
              src: m,
              alt: c?.nickname || "",
              onError: () => {
                let e = null;
                e = s(p ? 5931 : 73091), g(e)
              }
            }), i && p && (0, t.jsx)("div", {
              className: "rockstargames-modules-core-footerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, t.jsx)(W, {
                platform: h?.[d]?.platform,
                tagSize: F.small
              })
            }), i && (0, t.jsx)("div", {
              className: "rockstargames-modules-core-footerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[d]?.platform ?? null
            })]
          })
        }));
      let fe = {
        open: "rockstargames-modules-core-footerd815312ad6eebc2c651f8554dc6c0bb7",
        pillBtn: "rockstargames-modules-core-footerc5adbe3b8adfa45115608e536f6e0384",
        scCharacterList: "rockstargames-modules-core-footerdedb11e25dddfe561c538a370f5028e2",
        scCharacterSelectBtn: "rockstargames-modules-core-footerd3991df21bf29ec01662910e116a6ff5",
        scCharacterSelector: "rockstargames-modules-core-footerefcb26b13bae0546c71d0b9f88e335a9",
        selected: "rockstargames-modules-core-footerc7c3f92d1fdd021a5cd665583ac79d89"
      };
      const me = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        ge = f((() => {
          const e = (0, r.useIntl)(),
            {
              track: a
            } = (0, l.useGtmTrack)(),
            [s, c] = (0, o.useState)(null),
            [i, n] = (0, o.useState)(0),
            [d, _] = (0, o.useState)(!1),
            [u, f] = (0, o.useState)(!1),
            m = (0, o.createRef)(),
            [g, k] = (0, o.useState)([]),
            [h, b] = (0, o.useState)(244),
            {
              windowWidth: v
            } = (0, p.useWindowResize)(),
            [w, C] = (0, o.useState)(!1),
            x = (0, H.ri)(m, !1),
            {
              data: y,
              loggedIn: S
            } = (0, l.useRockstarUser)(),
            {
              charactersNeeded: N,
              currentCharId: I,
              setCurrentCharId: E
            } = (0, l.useRockstarUserState)(),
            {
              charListHidden: P,
              setCharListHidden: T
            } = j();
          (0, o.useEffect)((() => {
            void 0 === I && E(0)
          }), [I]), (0, o.useEffect)((() => {
            let e = g.length - 1;
            e < 0 && (e = 0), n(e);
            const a = g.length > 0 ? g[I] ?? g[0] : null;
            a && (c(a), g.length > 1 ? f(!0) : f(!1))
          }), [I, g]), (0, o.useEffect)((() => {
            k(y?.characters?.[N] ?? [])
          }), [y, N]), (0, o.useEffect)((() => {
            A()
          }), [h, i, w, v, g]), (0, o.useEffect)((() => {
            C(v < 1024)
          }), [v]);
          const A = () => {
              _(h * i < x)
            },
            L = e => {
              const s = g.filter(((e, a) => a !== I)).map((e => e));
              E(s[e].index), a({
                event: "character_selector_select",
                text: me[s[e].platform],
                position: s[e].index
              })
            };
          return null !== s && "gtao" === N && S ? (0, t.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(M.profile_selector_profile_card),
            children: [(0, t.jsx)(ee, {
              s: fe,
              character: s
            }), !0 === u && (0, t.jsxs)("div", {
              className: fe.scCharacterSelector,
              children: [(0, t.jsx)("button", {
                className: fe.scCharacterSelectBtn,
                "data-list-closed": P,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !P;
                  T(s), a({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: (0, t.jsx)("span", {
                  className: fe.scCharacterBtnText,
                  children: (0, t.jsx)(r.FormattedMessage, {
                    ...M.profile_selector_switch_character
                  })
                })
              }), !w && (0, t.jsx)("div", {
                className: fe.scCharacterList,
                "aria-hidden": P,
                children: g.filter(((e, a) => a !== I)).map(((e, a) => (0, t.jsx)(G, {
                  tabIndex: P ? -1 : 0,
                  onClick: () => L(a),
                  characterData: e,
                  setMobileCardWidth: b
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), w && (0, t.jsx)("div", {
                className: fe.scCharacterList,
                "data-single-item": 2 === g.length,
                "data-swiper-disabled": d,
                "aria-hidden": P,
                ref: m,
                children: (0, t.jsx)(ie, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: L,
                  disablePager: d,
                  disableSwiper: d,
                  children: g.filter(((e, a) => a !== I)).map((e => (0, o.createElement)(G, {
                    characterData: e,
                    setMobileCardWidth: b,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: P ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }))
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
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = o.findIndex((a => Object.entries(a.sites).findIndex((([a, t]) => t === s && (e = {
            site: a,
            subDomain: t
          }, !0))) >= 0)), c = o[t >= 0 ? t : 0];
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