try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8370c64d-27c4-48e4-813e-6c8918f9ae0e", e._sentryDebugIdIdentifier = "sentry-dbid-8370c64d-27c4-48e4-813e-6c8918f9ae0e")
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
  [539], {
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
    95654: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterProfile: () => ve,
        LanguageSelector: () => k,
        Menu: () => ue,
        MenuButton: () => me
      });
      var s = {};
      t.r(s), t.d(s, {
        scCharacterBtnIcon: () => fe,
        scCharacterBtnText: () => ge,
        scCharacterList: () => pe,
        scCharacterSelectBtn: () => ke,
        scCharacterSelector: () => he
      });
      var o = t(42295),
        i = t(71127),
        c = t(30377),
        n = t(34232),
        r = t(56990),
        l = t(78795),
        _ = t(61874),
        d = t(51673),
        u = t.n(d);
      const m = (0, r.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        f = {
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
        g = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","www_link_manage_account":"Konto verwalten"},"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","www_link_manage_account":"Manage Account"},"es-ES":{"language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","www_link_manage_account":"Gestionar cuenta"},"es-MX":{"language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","www_link_manage_account":"Administrar cuenta"},"fr-FR":{"language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","www_link_manage_account":"Gérer le compte"},"it-IT":{"language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","www_link_manage_account":"Impostazioni account"},"ja-JP":{"language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","www_link_manage_account":"アカウントを管理する"},"ko-KR":{"language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","www_link_manage_account":"계정 관리"},"pl-PL":{"language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","www_link_manage_account":"Zarządzanie kontem"},"pt-BR":{"language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","www_link_manage_account":"Gerenciar conta"},"ru-RU":{"language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","www_link_manage_account":"Настройки"},"zh-CN":{"language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","www_link_manage_account":"管理账户"},"zh-TW":{"language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","www_link_manage_account":"管理帳戶"}}'),
        p = e => (0, r.withIntl)(e, g),
        k = p(({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: t,
          location: s,
          parent: d = "element",
          onLanguageChange: g,
          ...p
        }) => {
          const {
            track: k
          } = (0, _.useGtmTrack)(), h = (0, r.useIntl)(), [b] = (0, r.getLocale)(), [v, w] = (0, i.useState)(!1), y = (0, i.useRef)(null), x = (0, i.useRef)(null), [C, S] = (0, i.useState)(0), j = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, N = e => {
            if (t && t(!1), b.subdomaincom === e || "none" === e) return void(t && t(!1));
            const a = r.locales.find(a => a.subdomaincom === e);
            a && g?.({
              selectedLocale: a,
              track: k,
              parent: d
            })
          };
          return (0, i.useEffect)(() => {
            void 0 !== a && !1 === a && !0 === v && w(!1)
          }, [a]), (0, i.useEffect)(() => {
            x.current && S(x.current.scrollHeight)
          }, [x]), "function" != typeof g ? null : (0, o.jsxs)(o.Fragment, {
            children: [j && "sc-menu" === e && (0, o.jsx)("div", {
              className: [f.languageSelector, v ? f.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${d}-language-selector`,
              ...p,
              children: (0, o.jsx)("div", {
                className: f.selectBoxWrapper,
                children: (0, o.jsxs)("select", {
                  className: f.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    N(a)
                  },
                  "aria-label": h.formatMessage(m.language_selector_default),
                  "data-testid": `${d}-language-selector-button`,
                  children: [(0, o.jsx)("option", {
                    className: f.selectBoxOption,
                    value: "none",
                    "data-testid": `${d}-language-selector-current`,
                    children: r.locales.find(e => e.subdomaincom === b.subdomaincom)?.label ?? (0, o.jsx)(r.FormattedMessage, {
                      ...m.language_selector_default
                    })
                  }), r.locales.map(({
                    label: e,
                    subdomaincom: a
                  }) => (0, o.jsx)("option", {
                    className: f.selectBoxOption,
                    value: a,
                    children: e
                  }, `mobile-${a}`))]
                })
              })
            }), (!j || "sc-menu" !== e) && "footer" !== e && (0, o.jsx)(u(), {
              active: v,
              focusTrapOptions: {
                onDeactivate: () => w(!1),
                clickOutsideDeactivates: !0,
                onActivate: () => {
                  const e = y?.current?.querySelectorAll("a[aria-selected=true]");
                  if (e?.length) {
                    const a = [...e].filter(e => e.checkVisibility());
                    a?.[0]?.focus()
                  }
                }
              },
              children: (0, o.jsxs)("div", {
                className: [f.languageSelector, v ? f.open : ""].join(" "),
                "data-theme": e,
                "data-testid": `${d}-language-selector`,
                ...p,
                children: [(0, o.jsxs)("button", {
                  onClick: e => {
                    e.stopPropagation(), t && t(!v), w(!v)
                  },
                  "data-testid": `${d}-language-selector-button`,
                  id: `${d}-language-selector-button`,
                  type: "button",
                  "aria-label": h.formatMessage(m.language_selector_default),
                  children: [(0, o.jsx)("i", {}), (0, o.jsx)("span", {
                    "data-testid": `${d}-language-selector-current`,
                    children: r.locales.find(e => e.subdomaincom === b.subdomaincom)?.label ?? (0, o.jsx)(r.FormattedMessage, {
                      ...m.language_selector_default
                    })
                  })]
                }), (0, o.jsx)("div", {
                  className: f.linkWrapper,
                  ref: x,
                  style: {
                    "--ls-linkWrapper-opened-height": `${C}px`
                  },
                  children: (0, o.jsx)("div", {
                    className: f.links,
                    ref: y,
                    role: "listbox",
                    "aria-label": h.formatMessage(m.language_selector_default),
                    children: r.locales.map(({
                      subdomaincom: e,
                      label: a
                    }) => (0, o.jsx)(l.A, {
                      onClick: a => {
                        a.preventDefault(), N(e)
                      },
                      tabIndex: v ? 0 : -1,
                      "data-testid": `${d}-language-selector-${e}`,
                      role: "option",
                      "aria-selected": b.subdomaincom === e,
                      children: a
                    }, a))
                  })
                })]
              })
            }), "footer" === e && (0, o.jsxs)("div", {
              className: f.dropdownContainer,
              "data-testid": `${d}-language-selector`,
              ...p,
              children: [(0, o.jsx)(n.Globe, {
                size: "MD",
                label: ""
              }), (0, o.jsxs)(c.Dropdown.Root, {
                className: f.dropdown,
                onValueChange: e => {
                  N(e)
                },
                defaultValue: r.locales.find(e => e.subdomaincom === b.subdomaincom)?.subdomaincom,
                children: [(0, o.jsxs)(c.Dropdown.Trigger, {
                  children: [(0, o.jsx)(c.Dropdown.TriggerText, {
                    placeholder: h.formatMessage(m.language_selector_default)
                  }), (0, o.jsx)(c.Dropdown.TriggerIcon, {})]
                }), (0, o.jsx)(c.Dropdown.Portal, {
                  children: (0, o.jsx)(c.Dropdown.Content, {
                    style: {
                      zIndex: 1
                    },
                    children: (0, o.jsx)(c.Dropdown.ScrollArea, {
                      children: r.locales.map(({
                        subdomaincom: e,
                        label: a
                      }) => (0, o.jsx)(c.Dropdown.Option, {
                        value: e,
                        testId: `${d}-language-selector-${e}`,
                        children: (0, o.jsx)(c.Dropdown.OptionText, {
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
      var h = t(97359),
        b = t(58136);
      const v = (0, b.makeVar)(!1),
        w = e => v(e),
        y = (0, b.makeVar)(-1),
        x = e => y(e),
        C = (0, b.makeVar)(-1),
        S = e => C(e),
        j = (0, b.makeVar)(!0),
        N = e => j(e),
        M = (0, b.makeVar)(!0),
        I = e => M(e),
        E = () => {
          const e = (0, b.useReactiveVar)(v),
            a = (0, b.useReactiveVar)(y),
            t = (0, b.useReactiveVar)(C),
            s = (0, b.useReactiveVar)(j),
            o = (0, b.useReactiveVar)(M);
          return (0, i.useEffect)(() => {
            o || (e && w(!1), s && (N(!1), x(-1)))
          }, [o]), (0, i.useEffect)(() => {
            !e && o && (s || N(!0))
          }, [e, o]), (0, i.useMemo)(() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: w,
            activeSubNavId: a,
            setActiveSubNavId: x,
            subNavExtraHeight: t,
            setSubNavExtraHeight: S,
            navOpened: s,
            setAccountNavOpened: N,
            charListHidden: o,
            setCharListHidden: I
          }), [e, a, t, s, o])
        },
        P = (0, r.defineMessages)({
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
      var T = t(9738),
        A = t.n(T),
        L = t(79867);
      const R = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        z = e => ({
          text: e.formatMessage(P.sc_link_help),
          target: "_self",
          ga: {
            ...R,
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
              ...R,
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
              ...R,
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
              ...R,
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
              ...R,
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
              ...R,
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
              ...R,
              text: P.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        D = ({
          to: e,
          target: a,
          className: t,
          onNavigate: s,
          onClick: i,
          reloadDocument: c,
          children: n,
          ...r
        }) => {
          const l = e?.startsWith("http");
          return (0, o.jsx)("a", {
            href: e,
            className: t,
            onClick: a => {
              i?.(a), l || c || (s ? (a.preventDefault(), s(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...r,
            children: n
          })
        },
        H = ({
          text: e,
          target: a,
          href: t,
          location: s,
          ga: i,
          dataTestId: c,
          isSubLink: n,
          hasNotifications: l = !1,
          onClickCallback: d = () => {},
          tabIndex: u,
          reloadDocument: m = !1,
          onNavigate: f
        }) => {
          const {
            track: g
          } = (0, _.useGtmTrack)(), p = (0, L.A)(), k = (0, r.useIntl)();
          let h = t;
          s && (h = s.domain === p.currentSite?.site ? s.path : `https://${p.sites[s.domain]}.rockstargames.com${s.path}`);
          const b = {
            ...i,
            link_url: h
          };
          return (0, o.jsxs)(D, {
            className: n ? "rockstargames-modules-core-footerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-footerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": c || "menuLink",
            title: e,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: u,
            onClick: e => {
              g(b), d(e)
            },
            onNavigate: f,
            children: [e, l && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, o.jsx)("span", {
                className: "rockstargames-modules-core-footere49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(P.nofications_new)
              })
            })]
          })
        },
        O = ({
          id: e,
          text: a,
          target: t,
          href: s,
          location: c,
          ga: n,
          hasNotifications: r = !1,
          dataTestId: l,
          children: d = [],
          activeSubNavId: u,
          setActiveSubNavId: m,
          setSubNavExtraHeight: f,
          reloadDocument: g = !1,
          onClickCallback: p = () => {},
          onNavigate: k
        }) => {
          const {
            windowWidth: h,
            windowHeight: v
          } = (0, b.useWindowResize)(), {
            track: w
          } = (0, _.useGtmTrack)(), {
            navOpen: y
          } = (0, _.useRockstarUserState)(), x = (0, i.useRef)(null), [C, S] = (0, i.useState)(0), [j, N] = (0, i.useState)(0), [M, I] = (0, i.useState)(!0);
          return (0, i.useEffect)(() => {
            u !== e && !1 === M && I(!0), u === e && I(!1)
          }, [u]), (0, i.useEffect)(() => {
            if (!x.current) return;
            S(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), N(a)
            }
          }, [x, h, v]), d.length > 0 ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("button", {
              className: "rockstargames-modules-core-footercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), w(n), u === e ? (m(-1), f(0)) : (m(e), f(C + j + j))
              },
              children: [(0, o.jsx)("span", {
                className: "rockstargames-modules-core-footerb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, o.jsx)("span", {
                className: "rockstargames-modules-core-footerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, o.jsx)("nav", {
              className: "rockstargames-modules-core-footercbf6e64eadb6f965877129d539aa2dcd",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${C}px`
              },
              children: d.map(e => (0, i.createElement)(H, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: k
              }))
            })]
          }) : (0, o.jsx)(H, {
            text: a,
            target: t,
            href: s,
            location: c,
            ga: n,
            hasNotifications: r,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: y ? 0 : -1,
            reloadDocument: g,
            onNavigate: k
          })
        },
        $ = ({
          sc: e,
          location: a,
          onNavigate: t
        }) => {
          const {
            windowWidth: s,
            windowHeight: c
          } = (0, b.useWindowResize)(), n = (0, r.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            activeSubNavId: u,
            setActiveSubNavId: m,
            subNavExtraHeight: f,
            setSubNavExtraHeight: g
          } = E(), {
            setSelectedCharacterTuple: p,
            navOpen: h
          } = (0, _.useRockstarUserState)(), v = (0, b.useLocale)(), w = (0, b.toScLocaleString)(v), [y, x] = (0, i.useState)(""), C = `${e.login}?returnUrl=${y}&lang=${w}`, S = `${e.signup}&returnUrl=${y}&lang=${w}`, j = (0, i.useMemo)(() => (0, L.A)(), []), N = (0, i.useMemo)(() => {
            const e = ((e, a, t) => [{
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
              href: t,
              ga: {
                event: "cta_signup",
                text: P.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, z(e)])(n, C, S);
            return e
          }, [n, C, S, j]), [M, I] = (0, i.useState)(0), T = (0, i.createRef)(), R = () => {
            if (T.current) {
              const {
                current: e
              } = T, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, i.useEffect)(() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }, [JSON.stringify(a)]), (0, i.useEffect)(() => {
            p(!1)
          }, []), (0, i.useEffect)(() => {
            R(), A()(() => {
              setTimeout(R, 0)
            }, 300)
          }, [s, c]), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("nav", {
              className: "rockstargames-modules-core-footerf300d66bd02f52ac564238ca6125a091",
              children: (0, o.jsx)("div", {
                className: "rockstargames-modules-core-footerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: T,
                style: {
                  "--navWrap-max-height": `${f+M}px`
                },
                children: N.map(e => (0, i.createElement)(O, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: g,
                  onNavigate: t,
                  key: e.text
                }))
              })
            }), (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, o.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: l,
                setLanguageSelectorOpened: e => {
                  m(-1), d(e)
                },
                location: a,
                onLanguageChange: r.onLanguageChange
              })
            })]
          })
        };
      var U = t(56088),
        F = t(75523);
      var B = t(10439);
      const W = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        V = (0, i.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: s,
          testId: i,
          ...c
        }, n) {
          const r = W(e),
            l = (0, F.v6)(c, {
              className: (0, B.A)("rockstargames-modules-core-footerf54750ef62f8600000c94f0caba85986", t),
              "data-testid": i
            });
          return (0, o.jsxs)("div", {
            "data-size": a,
            ref: n,
            ...l,
            children: [(0, o.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-modules-core-footera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": W(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, o.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: r
              })
            }), (0, o.jsx)("span", {
              className: "rockstargames-modules-core-footerd9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        });
      var X = t(4408);
      var Z = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const G = ({
          tagSize: e,
          platform: a,
          className: t = ""
        }) => {
          const {
            src: s,
            alt: i
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
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("img", {
              className: (0, B.A)("rockstargames-modules-core-footerb0ff0045ed0326a46ca1e0867d2050c1", t),
              "data-testid": "platform-tag",
              "data-platform": a,
              "data-tag-size": e,
              src: s,
              alt: "",
              "aria-hidden": !0
            }), (0, o.jsx)(X.s6, {
              children: i
            })]
          })
        },
        K = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f368af6d2c11a28d31d2818e72150f5b.jpg";
      var q = t(77053),
        J = "var(--hcgjf92)";
      const Y = "CharacterButton:characterName",
        Q = "CharacterButton:avatar",
        ee = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: s,
          onClick: c = () => {}
        }) => {
          const n = (0, r.useIntl)(),
            {
              currentCharId: l,
              setCurrentCharId: d
            } = (0, _.useRockstarUserState)(),
            u = (0, i.createRef)(),
            {
              platform: m,
              platformUsername: f,
              mugshotUrl: g,
              stats: p
            } = e,
            [k, h] = (0, i.useState)(g),
            b = l === e.index;
          return (0, i.useEffect)(() => {
            u.current && a && a(u?.current?.offsetWidth)
          }, [u]), (0, o.jsxs)("button", {
            className: "hcgjf90",
            type: "button",
            "aria-hidden": b,
            ref: u,
            tabIndex: s,
            onClick: () => c(-1),
            children: [(0, o.jsx)("div", {
              className: "hcgjf91",
              children: (0, o.jsx)("div", {
                className: "hcgjf93",
                "data-size": "small",
                style: (0, q.DI)({
                  [J]: `url(${K})`
                }),
                children: (0, o.jsx)("img", {
                  className: "hcgjf94",
                  src: k,
                  alt: n.formatMessage(P.profile_selector_mugshot, {
                    userName: f
                  }),
                  onError: () => {
                    h(t(5931))
                  },
                  "data-testid": Q
                })
              })
            }), (0, o.jsxs)("div", {
              className: "hcgjf95",
              children: [(0, o.jsxs)("div", {
                className: "hcgjf96",
                children: [(0, o.jsx)(G, {
                  tagSize: Z.large,
                  platform: m
                }), (0, o.jsx)("div", {
                  className: "hcgjf97",
                  "data-size": "small",
                  "data-testid": Y,
                  children: f
                })]
              }), (0, o.jsx)("div", {
                className: "hcgjf98",
                children: (0, o.jsx)(V, {
                  size: "small",
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        };
      var ae = "var(--ay40go1)";
      const te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        oe = "ProfileCard:bankValue",
        ie = "ProfileCard:cashValue",
        ce = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, _.useRockstarUser)(), {
            track: s
          } = (0, _.useGtmTrack)(), c = (0, r.useIntl)(), [n, l] = (0, i.useState)([]), [d, u] = (0, i.useState)(null), [m, f] = (0, i.useState)(null), [g, p] = (0, i.useState)(!1), [k, h] = (0, i.useState)(-1), [b, v] = (0, i.useState)([]), [w, y] = (0, i.useState)(0), x = t(5931), {
            platform: C
          } = e, [S, j] = (0, i.useState)("0"), [N, M] = (0, i.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), E = () => {
            A((0, o.jsx)("img", {
              src: x,
              alt: c.formatMessage(P.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [T, A] = (0, i.useState)((0, o.jsx)("img", {
            className: "ay40go3",
            src: e.mugshotUrl,
            alt: c.formatMessage(P.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: E,
            "data-testid": se
          }));
          (0, i.useEffect)(() => {
            l(a.crews ?? [])
          }, [a.crews]), (0, i.useEffect)(() => {
            A((0, o.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: E,
              "data-testid": se
            })), j(I(e.stats.overview.bank.value)), M(I(e.stats.overview.cash.value)), y(parseInt(e.stats.overview.rank.value))
          }, [e, a.nickname]), (0, i.useEffect)(() => {
            n && n.forEach(e => {
              !0 === e.isPrimary && (u(e.crewTag), f(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            })
          }, [n]), (0, i.useEffect)(() => {
            const e = [];
            if (!g && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, o.jsx)("div", {
                className: "ay40goc",
                style: {
                  backgroundColor: null !== m ? m : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }, [k, g, m]);
          const L = e => {
            e.stopPropagation(), s({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, o.jsxs)("div", {
            className: "ay40go0",
            onClick: L,
            onKeyUp: L,
            role: "button",
            tabIndex: -1,
            children: [(0, o.jsxs)("div", {
              className: "ay40go2",
              style: (0, q.DI)({
                [ae]: `url(${K})`
              }),
              children: [T, (0, o.jsx)("div", {
                className: "ay40go4",
                "data-platform": C,
                children: (0, o.jsx)(G, {
                  className: "ay40go5",
                  tagSize: Z.large,
                  platform: C
                })
              })]
            }), (0, o.jsxs)("div", {
              className: "ay40go6",
              children: [(0, o.jsx)("div", {
                className: "ay40go7",
                children: (0, o.jsxs)("div", {
                  className: "ay40go8",
                  children: [(0, o.jsx)("span", {
                    className: "ay40go9",
                    "data-testid": te,
                    children: e.platformUsername
                  }), d && (0, o.jsxs)("span", {
                    className: "ay40goa",
                    "data-arrow-tag": g,
                    children: [d, !g && (0, o.jsx)("div", {
                      className: "ay40gob",
                      children: b
                    })]
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: "ay40god",
                children: [(0, o.jsx)(V, {
                  className: "ay40goe",
                  rank: w
                }), (0, o.jsxs)("div", {
                  className: "ay40gof",
                  children: [(0, o.jsxs)("span", {
                    className: "ay40gog",
                    "data-testid": ie,
                    children: ["$", N]
                  }), (0, o.jsxs)("span", {
                    className: "ay40goh",
                    "data-testid": oe,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        ne = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: s = null,
          slideClickCallback: c = null,
          children: n = [],
          disablePager: r = !1,
          disableSwiper: l = !1
        }) => {
          const _ = (0, i.createRef)(),
            d = (0, U.ri)(_, !1),
            [u, m] = (0, i.useState)(!1),
            [f, g] = (0, i.useState)(!1),
            [p, k] = (0, i.useState)(0),
            [h, b] = (0, i.useState)(0),
            [v, w] = (0, i.useState)([t]),
            [y, x] = (0, i.useState)(v[0]),
            [C, S] = (0, i.useState)(252),
            [j, N] = (0, i.useState)(0),
            [M, I] = (0, i.useState)([]),
            [E, P] = (0, i.useState)([]),
            [T, A] = (0, i.useState)(!1),
            L = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            R = a => {
              if (!0 === u || 0 === h || !0 === l) return;
              g(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                o = t > h ? 1 : -1,
                i = Math.abs(h - t);
              i > e ? (o > 0 ? (() => {
                if (!0 === u) return;
                m(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), x(v[e]), s && s(e)
              })() : (() => {
                if (!0 === u) return;
                m(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), x(v[e]), s && s(e)
              })(), b(0)) : x(v[p] + i * o)
            },
            z = () => {
              !0 !== u && !0 !== l && (m(!0), !0 !== u && (x(v[p]), b(0)), g(!1))
            };
          return (0, i.useEffect)(() => {
            const e = [];
            n.forEach(() => {
              e.push((0, i.createRef)())
            }), I(e)
          }, [n]), (0, i.useEffect)(() => {
            if (M.length < 1) return;
            S(M[0]?.current?.clientWidth || 0);
            const e = M[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            N(t + a)
          }, [M]), (0, i.useEffect)(() => {
            !1 !== u && setTimeout(() => {
              m(!1)
            }, a)
          }, [u, a]), (0, i.useEffect)(() => {
            w(n.map((e, a) => (e => {
              let a = 0;
              const s = n.length;
              return 1 === s ? .5 * d - .5 * C - 2 * t + j : (0 === e && (a = t - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (d - (t - j))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * d - .5 * C + .5 * j)), a)
            })(a))), 1 === n.length ? A(!0) : A(!1)
          }, [_.current, n, d]), (0, i.useEffect)(() => {
            const e = (a = p, n.map((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            }));
            var a;
            P(e)
          }, [n, p]), (0, i.useEffect)(() => {
            !0 !== r && !0 !== l || x(v[0])
          }, [l, r, v]), (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("div", {
              className: "_1kqw7r10",
              ref: _,
              onTouchStart: L,
              onTouchMove: R,
              onTouchEnd: z,
              onMouseDown: L,
              onMouseMove: R,
              onMouseUp: z,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, o.jsx)("div", {
                className: "_1kqw7r13",
                "data-interaction-blocked": u,
                "data-single-item": T,
                style: {
                  transform: T ? null : `translateX(${y}px)`
                },
                children: n.map((e, a) => (0, o.jsx)("div", {
                  onClick: () => (e => {
                    null === c || f || c(e)
                  })(a),
                  className: "_1kqw7r12",
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`))
              })
            }), E.length > 1 && !1 === r && (0, o.jsx)("div", {
              className: "_1kqw7r14",
              children: E.map((e, a) => (0, o.jsx)("div", {
                className: "_1kqw7r15",
                "data-active": e.active
              }, a))
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
        le = ({
          sc: e,
          charListHidden: a,
          hideCharacterList: t,
          refCharacterListDesktop: s,
          menuPadding: c,
          longCharList: n,
          setLongCharList: l,
          isMobileMode: d,
          setIsMobileMode: u,
          location: m,
          onNavigate: f
        }) => {
          const {
            windowWidth: g,
            windowHeight: p
          } = (0, b.useWindowResize)(), h = (0, r.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: w,
            activeSubNavId: y,
            setActiveSubNavId: x,
            subNavExtraHeight: C,
            setSubNavExtraHeight: S,
            navOpened: j,
            setAccountNavOpened: N
          } = E(), [M, I] = (0, i.useState)(""), {
            webSettings: T
          } = (0, b.useRockstarWebSettings)(), {
            track: D
          } = (0, _.useGtmTrack)(), H = (0, b.useRockstarTokenPing)(), {
            data: $,
            setData: F,
            loggedIn: B
          } = (0, _.useRockstarUser)(), {
            charactersNeeded: W,
            currentCharId: V,
            navOpen: X,
            setCurrentCharId: Z,
            setSelectedCharacterTuple: G,
            setUserData: K
          } = (0, _.useRockstarUserState)(), [q, J] = (0, i.useState)(null), [Y, Q] = (0, i.useState)(!1), [ae, te] = (0, i.useState)(!1), [se, oe] = (0, i.useState)(0), ie = (0, i.createRef)(), le = (0, U.ri)(ie, !1), _e = (0, i.createRef)(), [de, ue] = (0, i.useState)(0), [me, fe] = (0, i.useState)([]), [ge, pe] = (0, i.useState)(244), ke = (0, i.useRef)(null), he = (0, i.useMemo)(() => (0, L.A)(), []), be = (0, i.useMemo)(() => ((e, a, t, s, o) => [{
            text: e.formatMessage(P.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(P.www_link_manage_account),
              location: {
                domain: L.C.www,
                path: "/account"
              },
              target: "_self",
              ga: {
                ...R,
                text: P.www_link_manage_account.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(P.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...R,
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
                ...R,
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
            hasNotifications: s,
            ga: {
              ...R,
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
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...R,
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
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...R,
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
                ...R,
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
                ...R,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, z(e), {
            text: e.formatMessage(P.sc_link_log_out),
            href: `${a.logout}?returnUrl=${o}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...R,
              text: P.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, e, $, $.hasNotification, M), [h, e, $, M, he]), ve = () => {
            te(c + ge * se < le)
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
          return (0, i.useEffect)(() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            he.currentSite?.site === L.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }, [m]), (0, i.useEffect)(() => {
            fe($?.characters?.[W] ?? [])
          }, [$, W]), (0, i.useEffect)(() => {
            $ && K($)
          }, [$]), (0, i.useEffect)(() => {
            const e = $?.characters?.gtao ?? [];
            if (null !== B && !e.length) return void G(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            G(!!a?.platform && [a.platform, a.characterSlot])
          }, [V, $, B]), (0, i.useEffect)(() => {
            (async () => {
              if (!$?.id || !X) return;
              const e = await (0, _.fetchUnreadNotificationCount)({
                pingBearer: H
              });
              let a = !1;
              e?.count && (a = e.count > 0), F(e => ({
                ...e,
                hasNotification: a
              }))
            })()
          }, [$, X]), (0, i.useEffect)(() => {
            ve()
          }, [ge]), (0, i.useEffect)(() => {
            t(!0), u(g < 768), u(g < 768 || p < 649)
          }, [g, p]), (0, i.useEffect)(() => {
            let e = me.length - 1;
            e < 0 && (e = 0), oe(e);
            const a = me.length > 0 ? me[V] ?? me[0] : null;
            a && (J(a), me.length > 1 ? Q(!0) : Q(!1), l(me.length - 1 > 3))
          }, [V, me]), (0, i.useEffect)(() => {
            ve()
          }, [se, d, g, me]), (0, i.useEffect)(() => {
            we(), A()(() => {
              setTimeout(we, 0)
            }, 300)
          }, [g, p]), (0, i.useEffect)(() => {
            const e = T?.currentCharId ?? 0;
            e !== V && Z(Math.max(0, Math.min(e, me.length - 1)))
          }, [me, T]), (0, o.jsxs)(o.Fragment, {
            children: [null !== q && "gtao" === W && (0, o.jsxs)("div", {
              className: re.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": h.formatMessage(P.profile_selector_profile_card),
              children: [(0, o.jsx)(ce, {
                s: re,
                character: q
              }), !0 === Y && (0, o.jsxs)("div", {
                className: re.scCharacterSelector,
                children: [(0, o.jsx)("button", {
                  className: re.scCharacterSelectBtn,
                  "aria-hidden": !X,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), D({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, o.jsx)("span", {
                    children: (0, o.jsx)(r.FormattedMessage, {
                      ...P.profile_selector_switch_character
                    })
                  })
                }), !d && (0, o.jsx)("div", {
                  className: re.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: s,
                  children: me.map(e => (0, o.jsx)(ee, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: pe
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                }), d && (0, o.jsx)("div", {
                  className: re.scCharacterList,
                  "data-single-item": 2 === me.length,
                  "data-swiper-disabled": ae,
                  "aria-hidden": a,
                  ref: ie,
                  children: (0, o.jsx)(ne, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      D({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: ae,
                    disableSwiper: ae,
                    children: me.filter((e, a) => a !== V).map(e => (0, i.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: pe,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    }))
                  })
                })]
              })]
            }), (0, o.jsxs)("nav", {
              className: re.nav,
              "aria-hidden": !X,
              children: [(0, o.jsx)("button", {
                className: re.navHeader,
                type: "button",
                "data-opened": j,
                "data-nav-opened": X,
                tabIndex: j ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), j || N(!0)
                },
                "data-testid": "playerButton",
                children: (0, o.jsx)("span", {
                  className: re.navHeaderText,
                  children: $.nickname
                })
              }), (0, o.jsx)("div", {
                className: re.navWrap,
                "data-opened": j,
                "data-logged-in": "true",
                ref: _e,
                style: {
                  "--navWrap-max-height": `${de+C}px`
                },
                children: be.map((e, a) => (0, i.createElement)(O, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: S,
                  onNavigate: f,
                  key: e.text
                }))
              })]
            }), (0, o.jsx)("div", {
              className: re.scLanguageSelector,
              style: {
                visibility: X ? null : "hidden"
              },
              children: (0, o.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: w,
                location: m,
                onLanguageChange: r.onLanguageChange
              })
            })]
          })
        },
        _e = {
          dragHandle: "rockstargames-modules-core-footerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-footerb49ca12d5334ed642d4359aa44105834",
          menu: "rockstargames-modules-core-footerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          navOpen: "rockstargames-modules-core-footerb8b5590986941337aa51e2eb7ff12f78",
          pillBtn: "rockstargames-modules-core-footerc31a4663e3c088e8d1095331ba8cafc8",
          scOverlay: "rockstargames-modules-core-footereff8c1d4bf675accdb7d952aba0174dc",
          selected: "rockstargames-modules-core-footerc5f6868e76307ee73276f140c2f988df"
        },
        de = (0, b.getConfigForDomain)(),
        ue = p(({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: s
          } = (0, b.useWindowResize)(), c = (0, r.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: l,
            setActiveSubNavId: d,
            navOpened: u,
            setAccountNavOpened: m,
            charListHidden: f,
            setCharListHidden: g
          } = E(), [p, k] = (0, i.useState)(!1), {
            navHidden: v = !1
          } = (0, b.useState)(), {
            loggedIn: w
          } = (0, _.useRockstarUser)(), {
            currentCharId: y,
            navOpen: x,
            setNavOpen: C,
            userData: S
          } = (0, _.useRockstarUserState)(), {
            track: j
          } = (0, _.useGtmTrack)(), [N, M] = (0, i.useState)(!1), I = (0, i.useRef)(), [T, A] = (0, i.useState)(0), L = (0, i.createRef)(), [R, z] = (0, i.useState)(!1), [D, H] = (0, i.useState)(0), [O, U] = (0, i.useState)(!1), {
            mutateWebSettings: F,
            webSettings: B
          } = (0, b.useRockstarWebSettings)(), W = (0, i.useCallback)(e => {
            g(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }, [I]);
          return (0, i.useEffect)(() => {
            null !== y && B.currentCharId !== y && F({
              key: "currentCharId",
              value: y
            }), !1 === w ? F({
              key: "currentCharId",
              value: null
            }) : w && S && S?.accountSynced && j({
              event: "account_synced"
            })
          }, [y, w, S?.accountSynced]), (0, i.useEffect)(() => {
            I.current && (!1 === f && !1 === N && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === f && (I.current.style.height = null))
          }, [f, I, N]), (0, i.useEffect)(() => {
            const e = () => {
                C(!1), W(!0)
              },
              a = a => {
                const t = L?.current && a?.composedPath().includes(L.current);
                x && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }, [L]), (0, i.useEffect)(() => {
            C(!1), W(!0)
          }, [v]), (0, i.useEffect)(() => {
            if (L.current) {
              const {
                current: e
              } = L, a = window.getComputedStyle(e);
              A(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }, [L]), (0, i.useEffect)(() => {
            U(window.navigator.userAgent.includes("Mac"))
          }, []), (0, i.useEffect)(() => {
            L.current && k(L?.current?.scrollHeight >= s)
          }, [L, s]), (0, i.useEffect)(() => {
            x || (d(-1), l(!1))
          }, [x]), (0, i.useEffect)(() => {
            n && (f || W(!0), u && (m(!1), d(-1)))
          }, [n]), (0, i.useEffect)(() => {
            u && (n && l(!1), f || W(!0))
          }, [u]), void 0 === w ? null : (0, o.jsxs)(h.A, {
            enabled: !!x,
            removeScrollBar: !1,
            children: [(0, o.jsxs)("div", {
              className: [_e.menu, x ? _e.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": O,
              "data-scroll-mode": p,
              ref: L,
              "aria-hidden": !x,
              children: [(0, o.jsx)("button", {
                className: _e.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  H(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (H(0), C(!1))
                },
                children: (0, o.jsx)("img", {
                  className: _e.dragHandle,
                  src: t(35902),
                  alt: c.formatMessage(P.sc_menu_drag_handle)
                })
              }), w ? (0, o.jsx)(le, {
                sc: de,
                charListHidden: f,
                hideCharacterList: W,
                refCharacterListDesktop: I,
                menuPadding: T,
                longCharList: N,
                setLongCharList: M,
                isMobileMode: R,
                setIsMobileMode: z,
                location: e,
                onNavigate: a
              }) : (0, o.jsx)($, {
                sc: de,
                navOpen: x,
                location: e,
                onNavigate: a
              })]
            }), (0, o.jsx)("div", {
              className: [_e.scOverlay, x ? _e.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }),
        me = p(({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, r.useIntl)(),
            {
              data: s,
              loggedIn: c
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: n,
              currentCharId: l,
              navOpen: d,
              setNavOpen: u
            } = (0, _.useRockstarUserState)(),
            {
              track: m
            } = (0, _.useGtmTrack)(),
            [f, g] = (0, i.useState)(),
            [p, k] = (0, i.useState)(!1),
            [h, b] = (0, i.useState)([]);
          (0, i.useEffect)(() => {
            b(s?.characters?.[n] ?? [])
          }, [s, n]);
          const v = (0, i.useCallback)(a => {
            a.stopPropagation(), u(!d), 1 == !d && e(null), m({
              event: "account_menu_click",
              element_placement: "account menu",
              text: d ? "close" : "open"
            })
          }, [d]);
          return (0, i.useEffect)(() => {
            k(!!h?.[l]?.mugshotUrl)
          }, [h, l]), (0, i.useEffect)(() => {
            g((() => {
              switch (c) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return h?.[l]?.mugshotUrl ?? s?.avatar
              }
            })())
          }, [s, h, l, c]), (0, o.jsxs)("button", {
            className: "rockstargames-modules-core-footeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(d ? P.sc_menu_close : P.sc_menu_open),
            "aria-expanded": d,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(c),
            children: [(0, o.jsx)("img", {
              className: "rockstargames-modules-core-footera917b58ca28b68550a1aa5d99c7eb998",
              src: f,
              alt: s?.nickname || "",
              onError: () => {
                let e = t(73091);
                p && (e = t(5931)), g(e)
              }
            }), c && p && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, o.jsx)(G, {
                platform: h?.[l]?.platform,
                tagSize: Z.small
              })
            }), c && (0, o.jsx)("div", {
              className: "rockstargames-modules-core-footerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[l]?.platform ?? null
            })]
          })
        });
      var fe = "_1v7oejd3",
        ge = "_1v7oejd2",
        pe = "_1v7oejd4",
        ke = "_1v7oejd1",
        he = "_1v7oejd0";
      const be = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        ve = p(() => {
          const e = (0, r.useIntl)(),
            {
              track: a
            } = (0, _.useGtmTrack)(),
            [t, c] = (0, i.useState)(null),
            [l, d] = (0, i.useState)(0),
            [u, m] = (0, i.useState)(!1),
            [f, g] = (0, i.useState)(!1),
            p = (0, i.createRef)(),
            [k, h] = (0, i.useState)([]),
            [v, w] = (0, i.useState)(244),
            {
              windowWidth: y
            } = (0, b.useWindowResize)(),
            [x, C] = (0, i.useState)(!1),
            S = (0, U.ri)(p, !1),
            {
              data: j,
              loggedIn: N
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: M,
              currentCharId: I,
              setCurrentCharId: T
            } = (0, _.useRockstarUserState)(),
            {
              charListHidden: A,
              setCharListHidden: L
            } = E();
          (0, i.useEffect)(() => {
            void 0 === I && T(0)
          }, [I]), (0, i.useEffect)(() => {
            let e = k.length - 1;
            e < 0 && (e = 0), d(e);
            const a = k.length > 0 ? k[I] ?? k[0] : null;
            a && (c(a), k.length > 1 ? g(!0) : g(!1))
          }, [I, k]), (0, i.useEffect)(() => {
            h(j?.characters?.[M] ?? [])
          }, [j, M]), (0, i.useEffect)(() => {
            R()
          }, [v, l, x, y, k]), (0, i.useEffect)(() => {
            C(y < 1024)
          }, [y]);
          const R = () => {
              m(v * l < S)
            },
            z = e => {
              const t = k.filter((e, a) => a !== I).map(e => e);
              T(t[e].index), a({
                event: "character_selector_select",
                text: be[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === M && N ? (0, o.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(P.profile_selector_profile_card),
            children: [(0, o.jsx)(ce, {
              s,
              character: t
            }), !0 === f && (0, o.jsxs)("div", {
              className: he,
              children: [(0, o.jsxs)("button", {
                className: ke,
                "data-list-closed": A,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !A;
                  L(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: [(0, o.jsx)("span", {
                  className: ge,
                  children: (0, o.jsx)(r.FormattedMessage, {
                    ...P.profile_selector_switch_character
                  })
                }), (0, o.jsx)(n.ChevronDown, {
                  className: fe,
                  label: ""
                })]
              }), !x && (0, o.jsx)("div", {
                className: pe,
                "aria-hidden": A,
                children: k.filter((e, a) => a !== I).map((e, a) => (0, o.jsx)(ee, {
                  tabIndex: A ? -1 : 0,
                  onClick: () => z(a),
                  characterData: e,
                  setMobileCardWidth: w
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
              }), x && (0, o.jsx)("div", {
                className: pe,
                "data-single-item": 2 === k.length,
                "data-swiper-disabled": u,
                "aria-hidden": A,
                ref: p,
                children: (0, o.jsx)(ne, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    a({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  slideClickCallback: z,
                  disablePager: u,
                  disableSwiper: u,
                  children: k.filter((e, a) => a !== I).map(e => (0, i.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: w,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: A ? -1 : 0
                  }))
                })
              })]
            })]
          }) : null
        })
    }
  }
]);