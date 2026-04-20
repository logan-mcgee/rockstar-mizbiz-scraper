try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b64de6ef-103b-463b-9c38-6303e9e262cb", e._sentryDebugIdIdentifier = "sentry-dbid-b64de6ef-103b-463b-9c38-6303e9e262cb")
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
  [34], {
    3147: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterProfile: () => ve,
        LanguageSelector: () => k,
        Menu: () => ue,
        MenuButton: () => me
      });
      var s = {};
      t.r(s), t.d(s, {
        scCharacterBtnIcon: () => ge,
        scCharacterBtnText: () => fe,
        scCharacterList: () => pe,
        scCharacterSelectBtn: () => ke,
        scCharacterSelector: () => he
      });
      var i = t(42295),
        n = t(71127),
        o = t(49773),
        c = t(83613),
        l = t(56990),
        r = t(14200),
        _ = t(61874),
        d = t(51673),
        u = t.n(d);
      const m = (0, l.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            description: "The default option for the language selector.",
            defaultMessage: "Select a Language"
          }
        }),
        g = {
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
        f = JSON.parse('{"de-DE":{"language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","sc_link_account":"Konto","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","www_link_manage_account":"Konto verwalten"},"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","www_link_manage_account":"Manage Account"},"es-ES":{"language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","www_link_manage_account":"Gestionar cuenta"},"es-MX":{"language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","profile_silhouette_mugshot":"Foto de una silueta","sc_link_account":"Cuenta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No vender ni compartir mis datos personales","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","www_link_manage_account":"Administrar cuenta"},"fr-FR":{"language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","profile_silhouette_mugshot":"Photo d\'identité : silhouette","sc_link_account":"Compte","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre ni partager mes données personnelles","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","www_link_manage_account":"Gérer le compte"},"it-IT":{"language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","profile_silhouette_mugshot":"Foto segnaletica silhouette","sc_link_account":"Account","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere o condividere i miei dati personali","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","www_link_manage_account":"Impostazioni account"},"ja-JP":{"language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","profile_silhouette_mugshot":"シルエット顔写真","sc_link_account":"アカウント","sc_link_cookies_policy":"Cookieポリシー","sc_link_cookies_settings":"Cookie設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を共有もしくは売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","www_link_manage_account":"アカウントを管理する"},"ko-KR":{"language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","profile_silhouette_mugshot":"실루엣 머그샷","sc_link_account":"계정","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 또는 공유 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","www_link_manage_account":"계정 관리"},"pl-PL":{"language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","profile_silhouette_mugshot":"Zdjęcie sylwetki","sc_link_account":"Konto","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży i udostępniania moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","www_link_manage_account":"Zarządzanie kontem"},"pt-BR":{"language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","profile_silhouette_mugshot":"Foto da silhueta","sc_link_account":"Conta","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não compartilhem minhas informações pessoais","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","www_link_manage_account":"Gerenciar conta"},"ru-RU":{"language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","profile_silhouette_mugshot":"Силуэт игрока","sc_link_account":"Учетная запись","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать и разглашать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","www_link_manage_account":"Настройки"},"zh-CN":{"language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","profile_silhouette_mugshot":"剪影面部照片","sc_link_account":"账户","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售或分享我的个人信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","www_link_manage_account":"管理账户"},"zh-TW":{"language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","profile_silhouette_mugshot":"罪犯檔案照剪影","sc_link_account":"帳戶","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售或分享我的個人資訊","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","www_link_manage_account":"管理帳戶"}}'),
        p = e => (0, l.withIntl)(e, f),
        k = p(({
          theme: e,
          languageSelectorOpened: a,
          setLanguageSelectorOpened: t,
          location: s,
          parent: d = "element",
          onLanguageChange: f,
          ...p
        }) => {
          const {
            track: k
          } = (0, _.useGtmTrack)(), {
            formatMessage: h
          } = (0, l.useIntl)(), [b] = (0, l.getLocale)(), [v, w] = (0, n.useState)(!1), y = (0, n.useRef)(null), x = (0, n.useRef)(null), [C, S] = (0, n.useState)(0), N = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, j = e => {
            if (t && t(!1), b.subdomaincom === e || "none" === e) return void(t && t(!1));
            const a = l.locales.find(a => a.subdomaincom === e);
            a && f?.({
              selectedLocale: a,
              track: k,
              parent: d
            })
          };
          return (0, n.useEffect)(() => {
            void 0 !== a && !1 === a && !0 === v && w(!1)
          }, [a]), (0, n.useEffect)(() => {
            x.current && S(x.current.scrollHeight)
          }, [x]), "function" != typeof f ? null : (0, i.jsxs)(i.Fragment, {
            children: [N && "sc-menu" === e && (0, i.jsx)("div", {
              className: [g.languageSelector, v ? g.open : ""].join(" "),
              "data-theme": e,
              "data-testid": `${d}-language-selector`,
              ...p,
              children: (0, i.jsx)("div", {
                className: g.selectBoxWrapper,
                children: (0, i.jsxs)("select", {
                  className: g.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    j(a)
                  },
                  "aria-label": h(m.language_selector_default),
                  "data-testid": `${d}-language-selector-button`,
                  children: [(0, i.jsx)("option", {
                    className: g.selectBoxOption,
                    value: "none",
                    "data-testid": `${d}-language-selector-current`,
                    children: l.locales.find(e => e.subdomaincom === b.subdomaincom)?.label ?? (0, i.jsx)(l.FormattedMessage, {
                      ...m.language_selector_default
                    })
                  }), l.locales.map(({
                    label: e,
                    subdomaincom: a,
                    iso: t
                  }) => (0, i.jsx)("option", {
                    className: g.selectBoxOption,
                    value: a,
                    lang: t,
                    children: e
                  }, `mobile-${a}`))]
                })
              })
            }), (!N || "sc-menu" !== e) && "footer" !== e && (0, i.jsx)(u(), {
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
              children: (0, i.jsxs)("div", {
                className: [g.languageSelector, v ? g.open : ""].join(" "),
                "data-theme": e,
                "data-testid": `${d}-language-selector`,
                ...p,
                children: [(0, i.jsxs)("button", {
                  onClick: e => {
                    e.stopPropagation(), t && t(!v), w(!v)
                  },
                  "data-testid": `${d}-language-selector-button`,
                  id: `${d}-language-selector-button`,
                  type: "button",
                  "aria-label": h(m.language_selector_default),
                  children: [(0, i.jsx)("i", {}), (0, i.jsx)("span", {
                    "data-testid": `${d}-language-selector-current`,
                    children: l.locales.find(e => e.subdomaincom === b.subdomaincom)?.label ?? (0, i.jsx)(l.FormattedMessage, {
                      ...m.language_selector_default
                    })
                  })]
                }), (0, i.jsx)("div", {
                  className: g.linkWrapper,
                  ref: x,
                  style: {
                    "--ls-linkWrapper-opened-height": `${C}px`
                  },
                  children: (0, i.jsx)("div", {
                    className: g.links,
                    ref: y,
                    role: "listbox",
                    "aria-label": h(m.language_selector_default),
                    children: l.locales.map(({
                      subdomaincom: e,
                      label: a,
                      iso: t
                    }) => (0, i.jsx)(r.A, {
                      onClick: a => {
                        a.preventDefault(), j(e)
                      },
                      tabIndex: v ? 0 : -1,
                      "data-testid": `${d}-language-selector-${e}`,
                      role: "option",
                      "aria-selected": b.subdomaincom === e,
                      lang: t,
                      children: a
                    }, a))
                  })
                })]
              })
            }), "footer" === e && (0, i.jsxs)("div", {
              className: g.dropdownContainer,
              "data-testid": `${d}-language-selector`,
              ...p,
              children: [(0, i.jsx)(c.Globe, {
                size: "MD",
                label: ""
              }), (0, i.jsxs)(o.ms.bL, {
                className: g.dropdown,
                onValueChange: e => {
                  j(e)
                },
                defaultValue: l.locales.find(e => e.subdomaincom === b.subdomaincom)?.subdomaincom,
                children: [(0, i.jsx)(o.ms.JU, {
                  hideVisually: !0,
                  children: h(m.language_selector_default)
                }), (0, i.jsxs)(o.ms.l9, {
                  children: [(0, i.jsx)(o.ms.OE, {
                    placeholder: h(m.language_selector_default)
                  }), (0, i.jsx)(o.ms.if, {})]
                }), (0, i.jsx)(o.ms.ZL, {
                  children: (0, i.jsx)(o.ms.UC, {
                    style: {
                      zIndex: 1
                    },
                    children: (0, i.jsx)(o.ms.FK, {
                      children: l.locales.map(({
                        subdomaincom: e,
                        label: a,
                        iso: t
                      }) => (0, i.jsx)(o.ms.c$, {
                        value: e,
                        testId: `${d}-language-selector-${e}`,
                        lang: t,
                        children: (0, i.jsx)(o.ms.JP, {
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
        N = (0, b.makeVar)(!0),
        j = e => N(e),
        M = (0, b.makeVar)(!0),
        I = e => M(e),
        E = () => {
          const e = (0, b.useReactiveVar)(v),
            a = (0, b.useReactiveVar)(y),
            t = (0, b.useReactiveVar)(C),
            s = (0, b.useReactiveVar)(N),
            i = (0, b.useReactiveVar)(M);
          return (0, n.useEffect)(() => {
            i || (e && w(!1), s && (j(!1), x(-1)))
          }, [i]), (0, n.useEffect)(() => {
            !e && i && (s || j(!0))
          }, [e, i]), (0, n.useMemo)(() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: w,
            activeSubNavId: a,
            setActiveSubNavId: x,
            subNavExtraHeight: t,
            setSubNavExtraHeight: S,
            navOpened: s,
            setAccountNavOpened: j,
            charListHidden: i,
            setCharListHidden: I
          }), [e, a, t, s, i])
        },
        P = (0, l.defineMessages)({
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
      var A = t(9738),
        T = t.n(A),
        z = t(79867);
      const L = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        R = e => ({
          text: e.formatMessage(P.sc_link_help),
          target: "_self",
          ga: {
            ...L,
            text: P.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(P.sc_link_support),
            location: {
              domain: z.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...L,
              text: P.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(P.sc_link_legal),
            location: {
              domain: z.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...L,
              text: P.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(P.sc_link_privacy_policy),
            location: {
              domain: z.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...L,
              text: P.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(P.sc_link_cookies_policy),
            location: {
              domain: z.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...L,
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
              ...L,
              text: P.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(P.sc_link_do_not_sell_my_information),
            location: {
              domain: z.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...L,
              text: P.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        O = ({
          to: e,
          target: a,
          className: t,
          onNavigate: s,
          onClick: n,
          reloadDocument: o,
          children: c,
          ...l
        }) => {
          const r = e?.startsWith("http");
          return (0, i.jsx)("a", {
            href: e,
            className: t,
            onClick: a => {
              n?.(a), r || o || (s ? (a.preventDefault(), s(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...l,
            children: c
          })
        },
        H = ({
          text: e,
          target: a,
          href: t,
          location: s,
          ga: n,
          dataTestId: o,
          isSubLink: c,
          hasNotifications: r = !1,
          onClickCallback: d = () => {},
          tabIndex: u,
          reloadDocument: m = !1,
          onNavigate: g
        }) => {
          const {
            track: f
          } = (0, _.useGtmTrack)(), p = (0, z.A)(), k = (0, l.useIntl)();
          let h = t;
          s && (h = s.domain === p.currentSite?.site ? s.path : `https://${p.sites[s.domain]}.rockstargames.com${s.path}`);
          const b = {
            ...n,
            link_url: h
          };
          return (0, i.jsxs)(O, {
            className: c ? "rockstargames-modules-gtao-license-platec2233d027086d54af877493d7d0700bd" : "rockstargames-modules-gtao-license-platef97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": o || "menuLink",
            title: e,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: u,
            onClick: e => {
              f(b), d(e)
            },
            onNavigate: g,
            children: [e, r && (0, i.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateadbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, i.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platee49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(P.nofications_new)
              })
            })]
          })
        },
        $ = ({
          id: e,
          text: a,
          target: t,
          href: s,
          location: o,
          ga: c,
          hasNotifications: l = !1,
          dataTestId: r,
          children: d = [],
          activeSubNavId: u,
          setActiveSubNavId: m,
          setSubNavExtraHeight: g,
          reloadDocument: f = !1,
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
          } = (0, _.useRockstarUserState)(), x = (0, n.useRef)(null), [C, S] = (0, n.useState)(0), [N, j] = (0, n.useState)(0), [M, I] = (0, n.useState)(!0);
          return (0, n.useEffect)(() => {
            u !== e && !1 === M && I(!0), u === e && I(!1)
          }, [u]), (0, n.useEffect)(() => {
            if (!x.current) return;
            S(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), j(a)
            }
          }, [x, h, v]), d.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-platecc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": r || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": M,
              onClick: a => {
                a.stopPropagation(), w(c), u === e ? (m(-1), g(0)) : (m(e), g(C + N + N))
              },
              children: [(0, i.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateb94730a01d5e9223b69cbc2f20f23bcd",
                children: a
              }), (0, i.jsx)("span", {
                className: "rockstargames-modules-gtao-license-plateff271a72fe259d74068b4f4d90db08bd"
              })]
            }, a), (0, i.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platecbf6e64eadb6f965877129d539aa2dcd",
              ref: x,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${C}px`
              },
              children: d.map(e => (0, n.createElement)(H, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !y ? -1 : 0,
                onNavigate: k
              }))
            })]
          }) : (0, i.jsx)(H, {
            text: a,
            target: t,
            href: s,
            location: o,
            ga: c,
            hasNotifications: l,
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
          onNavigate: t
        }) => {
          const {
            windowWidth: s,
            windowHeight: o
          } = (0, b.useWindowResize)(), c = (0, l.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: d,
            activeSubNavId: u,
            setActiveSubNavId: m,
            subNavExtraHeight: g,
            setSubNavExtraHeight: f
          } = E(), {
            setSelectedCharacterTuple: p,
            navOpen: h
          } = (0, _.useRockstarUserState)(), v = (0, b.useLocale)(), w = (0, b.toScLocaleString)(v), [y, x] = (0, n.useState)(""), C = `${e.login}?returnUrl=${y}&lang=${w}`, S = `${e.signup}&returnUrl=${y}&lang=${w}`, N = (0, n.useMemo)(() => (0, z.A)(), []), j = (0, n.useMemo)(() => {
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
            }, R(e)])(c, C, S);
            return e
          }, [c, C, S, N]), [M, I] = (0, n.useState)(0), A = (0, n.createRef)(), L = () => {
            if (A.current) {
              const {
                current: e
              } = A, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, n.useEffect)(() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }, [JSON.stringify(a)]), (0, n.useEffect)(() => {
            p(!1)
          }, []), (0, n.useEffect)(() => {
            L(), T()(() => {
              setTimeout(L, 0)
            }, 300)
          }, [s, o]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-platef300d66bd02f52ac564238ca6125a091",
              children: (0, i.jsx)("div", {
                className: "rockstargames-modules-gtao-license-plateac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: A,
                style: {
                  "--navWrap-max-height": `${g+M}px`
                },
                children: j.map(e => (0, n.createElement)($, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: f,
                  onNavigate: t,
                  key: e.text
                }))
              })
            }), (0, i.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platef30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, i.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  m(-1), d(e)
                },
                location: a,
                onLanguageChange: l.onLanguageChange
              })
            })]
          })
        };
      var U = t(65085),
        F = t(75526);
      var B = t(10439);
      const W = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        V = (0, n.forwardRef)(function({
          rank: e,
          size: a = "large",
          className: t,
          alt: s,
          testId: n,
          ...o
        }, c) {
          const l = W(e),
            r = (0, F.v6)(o, {
              className: (0, B.A)("rockstargames-modules-gtao-license-platef54750ef62f8600000c94f0caba85986", t),
              "data-testid": n
            });
          return (0, i.jsxs)("div", {
            "data-size": a,
            ref: c,
            ...r,
            children: [(0, i.jsx)("svg", {
              role: "svg",
              "aria-label": s,
              className: "rockstargames-modules-gtao-license-platea3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": W(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, i.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: l
              })
            }), (0, i.jsx)("span", {
              className: "rockstargames-modules-gtao-license-plated9ea5cdf174033003a8670f31ae66a59",
              "data-testid": "rpCategory:rankValue",
              children: e
            })]
          })
        });
      var Z = t(4408);
      var X = function(e) {
        return e.small = "small", e.large = "large", e
      }({});
      const G = ({
          tagSize: e,
          platform: a,
          className: t = ""
        }) => {
          const {
            src: s,
            alt: n
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
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
              className: (0, B.A)("rockstargames-modules-gtao-license-plateb0ff0045ed0326a46ca1e0867d2050c1", t),
              "data-testid": "platform-tag",
              "data-platform": a,
              "data-tag-size": e,
              src: s,
              alt: "",
              "aria-hidden": !0
            }), (0, i.jsx)(Z.s6, {
              children: n
            })]
          })
        },
        K = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f368af6d2c11a28d31d2818e72150f5b.jpg";
      var J = t(77053),
        q = "var(--s4y1eh2)";
      const Y = "CharacterButton:characterName",
        Q = "CharacterButton:avatar",
        ee = ({
          characterData: e,
          setMobileCardWidth: a,
          tabIndex: s,
          onClick: o = () => {}
        }) => {
          const c = (0, l.useIntl)(),
            {
              currentCharId: r,
              setCurrentCharId: d
            } = (0, _.useRockstarUserState)(),
            u = (0, n.createRef)(),
            {
              platform: m,
              platformUsername: g,
              mugshotUrl: f,
              stats: p
            } = e,
            [k, h] = (0, n.useState)(f),
            b = r === e.index;
          return (0, n.useEffect)(() => {
            u.current && a && a(u?.current?.offsetWidth)
          }, [u]), (0, i.jsxs)("button", {
            className: "s4y1eh0",
            type: "button",
            "aria-hidden": b,
            ref: u,
            tabIndex: s,
            onClick: () => o(-1),
            children: [(0, i.jsx)("div", {
              className: "s4y1eh1",
              children: (0, i.jsx)("div", {
                className: "s4y1eh3",
                "data-size": "small",
                style: (0, J.DI)({
                  [q]: `url(${K})`
                }),
                children: (0, i.jsx)("img", {
                  className: "s4y1eh4",
                  src: k,
                  alt: c.formatMessage(P.profile_selector_mugshot, {
                    userName: g
                  }),
                  onError: () => {
                    h(t(5931))
                  },
                  "data-testid": Q
                })
              })
            }), (0, i.jsxs)("div", {
              className: "s4y1eh5",
              children: [(0, i.jsxs)("div", {
                className: "s4y1eh6",
                children: [(0, i.jsx)(G, {
                  tagSize: X.large,
                  platform: m
                }), (0, i.jsx)("div", {
                  className: "s4y1eh7",
                  "data-size": "small",
                  "data-testid": Y,
                  children: g
                })]
              }), (0, i.jsx)("div", {
                className: "s4y1eh8",
                children: (0, i.jsx)(V, {
                  size: "small",
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        };
      var ae = "var(--_1iotk8z1)";
      const te = "ProfileCard:characterName",
        se = "ProfileCard:avatar",
        ie = "ProfileCard:bankValue",
        ne = "ProfileCard:cashValue",
        oe = ({
          character: e
        }) => {
          const {
            data: a
          } = (0, _.useRockstarUser)(), {
            track: s
          } = (0, _.useGtmTrack)(), o = (0, l.useIntl)(), [c, r] = (0, n.useState)([]), [d, u] = (0, n.useState)(null), [m, g] = (0, n.useState)(null), [f, p] = (0, n.useState)(!1), [k, h] = (0, n.useState)(-1), [b, v] = (0, n.useState)([]), [w, y] = (0, n.useState)(0), x = t(5931), {
            platform: C
          } = e, [S, N] = (0, n.useState)("0"), [j, M] = (0, n.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), E = () => {
            T((0, i.jsx)("img", {
              src: x,
              alt: o.formatMessage(P.profile_selector_mugshot, {
                userName: a.nickname
              })
            }))
          }, [A, T] = (0, n.useState)((0, i.jsx)("img", {
            className: "_1iotk8z3",
            src: e.mugshotUrl,
            alt: o.formatMessage(P.profile_selector_mugshot, {
              userName: a.nickname
            }),
            onError: E,
            "data-testid": se
          }));
          (0, n.useEffect)(() => {
            r(a.crews ?? [])
          }, [a.crews]), (0, n.useEffect)(() => {
            T((0, i.jsx)("img", {
              src: e.mugshotUrl,
              alt: a.nickname,
              onError: E,
              "data-testid": se
            })), N(I(e.stats.overview.bank.value)), M(I(e.stats.overview.cash.value)), y(parseInt(e.stats.overview.rank.value))
          }, [e, a.nickname]), (0, n.useEffect)(() => {
            c && c.forEach(e => {
              !0 === e.isPrimary && (u(e.crewTag), g(e.crewColour), h(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            })
          }, [c]), (0, n.useEffect)(() => {
            const e = [];
            if (!f && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, i.jsx)("div", {
                className: "_1iotk8zc",
                style: {
                  backgroundColor: null !== m ? m : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }, [k, f, m]);
          const z = e => {
            e.stopPropagation(), s({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, i.jsxs)("div", {
            className: "_1iotk8z0",
            onClick: z,
            onKeyUp: z,
            role: "button",
            tabIndex: -1,
            children: [(0, i.jsxs)("div", {
              className: "_1iotk8z2",
              style: (0, J.DI)({
                [ae]: `url(${K})`
              }),
              children: [A, (0, i.jsx)("div", {
                className: "_1iotk8z4",
                "data-platform": C,
                children: (0, i.jsx)(G, {
                  className: "_1iotk8z5",
                  tagSize: X.large,
                  platform: C
                })
              })]
            }), (0, i.jsxs)("div", {
              className: "_1iotk8z6",
              children: [(0, i.jsx)("div", {
                className: "_1iotk8z7",
                children: (0, i.jsxs)("div", {
                  className: "_1iotk8z8",
                  children: [(0, i.jsx)("span", {
                    className: "_1iotk8z9",
                    "data-testid": te,
                    children: e.platformUsername
                  }), d && (0, i.jsxs)("span", {
                    className: "_1iotk8za",
                    "data-arrow-tag": f,
                    children: [d, !f && (0, i.jsx)("div", {
                      className: "_1iotk8zb",
                      children: b
                    })]
                  })]
                })
              }), (0, i.jsxs)("div", {
                className: "_1iotk8zd",
                children: [(0, i.jsx)(V, {
                  className: "_1iotk8ze",
                  rank: w
                }), (0, i.jsxs)("div", {
                  className: "_1iotk8zf",
                  children: [(0, i.jsxs)("span", {
                    className: "_1iotk8zg",
                    "data-testid": ne,
                    children: ["$", j]
                  }), (0, i.jsxs)("span", {
                    className: "_1iotk8zh",
                    "data-testid": ie,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        ce = ({
          dragThreshold: e = 80,
          interactionDelay: a = 1e3,
          mobileGutterWidth: t = 17,
          slideChangeCallback: s = null,
          slideClickCallback: o = null,
          children: c = [],
          disablePager: l = !1,
          disableSwiper: r = !1
        }) => {
          const _ = (0, n.createRef)(),
            d = (0, U.ri)(_, !1),
            [u, m] = (0, n.useState)(!1),
            [g, f] = (0, n.useState)(!1),
            [p, k] = (0, n.useState)(0),
            [h, b] = (0, n.useState)(0),
            [v, w] = (0, n.useState)([t]),
            [y, x] = (0, n.useState)(v[0]),
            [C, S] = (0, n.useState)(252),
            [N, j] = (0, n.useState)(0),
            [M, I] = (0, n.useState)([]),
            [E, P] = (0, n.useState)([]),
            [A, T] = (0, n.useState)(!1),
            z = e => {
              if (!0 === u || !0 === r) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            L = a => {
              if (!0 === u || 0 === h || !0 === r) return;
              f(!0);
              const t = void 0 !== a.changedTouches ? a.changedTouches[0].screenX : a.screenX,
                i = t > h ? 1 : -1,
                n = Math.abs(h - t);
              n > e ? (i > 0 ? (() => {
                if (!0 === u) return;
                m(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), x(v[e]), s && s(e)
              })() : (() => {
                if (!0 === u) return;
                m(!0);
                let e = p + 1 >= v.length ? v.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), x(v[e]), s && s(e)
              })(), b(0)) : x(v[p] + n * i)
            },
            R = () => {
              !0 !== u && !0 !== r && (m(!0), !0 !== u && (x(v[p]), b(0)), f(!1))
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
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(t + a)
          }, [M]), (0, n.useEffect)(() => {
            !1 !== u && setTimeout(() => {
              m(!1)
            }, a)
          }, [u, a]), (0, n.useEffect)(() => {
            w(c.map((e, a) => (e => {
              let a = 0;
              const s = c.length;
              return 1 === s ? .5 * d - .5 * C - 2 * t + N : (0 === e && (a = t - e * C), e === s - 1 && s > 1 && (a = s * C * -1 + (d - (t - N))), e > 0 && e < s - 1 && (a = e * C * -1 + (.5 * d - .5 * C + .5 * N)), a)
            })(a))), 1 === c.length ? T(!0) : T(!1)
          }, [_.current, c, d]), (0, n.useEffect)(() => {
            const e = (a = p, c.map((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            }));
            var a;
            P(e)
          }, [c, p]), (0, n.useEffect)(() => {
            !0 !== l && !0 !== r || x(v[0])
          }, [r, l, v]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: "e76uv90",
              ref: _,
              onTouchStart: z,
              onTouchMove: L,
              onTouchEnd: R,
              onMouseDown: z,
              onMouseMove: L,
              onMouseUp: R,
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, i.jsx)("div", {
                className: "e76uv93",
                "data-interaction-blocked": u,
                "data-single-item": A,
                style: {
                  transform: A ? null : `translateX(${y}px)`
                },
                children: c.map((e, a) => (0, i.jsx)("div", {
                  onClick: () => (e => {
                    null === o || g || o(e)
                  })(a),
                  className: "e76uv92",
                  ref: M[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`))
              })
            }), E.length > 1 && !1 === l && (0, i.jsx)("div", {
              className: "e76uv94",
              children: E.map((e, a) => (0, i.jsx)("div", {
                className: "e76uv95",
                "data-active": e.active
              }, a))
            })]
          })
        },
        le = {
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
          menuPadding: o,
          longCharList: c,
          setLongCharList: r,
          isMobileMode: d,
          setIsMobileMode: u,
          location: m,
          onNavigate: g
        }) => {
          const {
            windowWidth: f,
            windowHeight: p
          } = (0, b.useWindowResize)(), h = (0, l.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: w,
            activeSubNavId: y,
            setActiveSubNavId: x,
            subNavExtraHeight: C,
            setSubNavExtraHeight: S,
            navOpened: N,
            setAccountNavOpened: j
          } = E(), [M, I] = (0, n.useState)(""), {
            webSettings: A
          } = (0, b.useRockstarWebSettings)(), {
            track: O
          } = (0, _.useGtmTrack)(), H = (0, b.useRockstarTokenPing)(), {
            data: D,
            setData: F,
            loggedIn: B
          } = (0, _.useRockstarUser)(), {
            charactersNeeded: W,
            currentCharId: V,
            navOpen: Z,
            setCurrentCharId: X,
            setSelectedCharacterTuple: G,
            setUserData: K
          } = (0, _.useRockstarUserState)(), [J, q] = (0, n.useState)(null), [Y, Q] = (0, n.useState)(!1), [ae, te] = (0, n.useState)(!1), [se, ie] = (0, n.useState)(0), ne = (0, n.createRef)(), re = (0, U.ri)(ne, !1), _e = (0, n.createRef)(), [de, ue] = (0, n.useState)(0), [me, ge] = (0, n.useState)([]), [fe, pe] = (0, n.useState)(244), ke = (0, n.useRef)(null), he = (0, n.useMemo)(() => (0, z.A)(), []), be = (0, n.useMemo)(() => ((e, a, t, s, i) => [{
            text: e.formatMessage(P.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(P.www_link_manage_account),
              location: {
                domain: z.C.www,
                path: "/account"
              },
              target: "_self",
              ga: {
                ...L,
                text: P.www_link_manage_account.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(P.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...L,
                text: P.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(P.sc_link_game_activation),
              location: {
                domain: z.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...L,
                text: P.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(P.sc_link_notifications),
            location: {
              domain: z.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...L,
              text: P.sc_link_notifications.defaultMessage,
              location: {
                domain: z.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(P.sc_link_crews),
            location: {
              domain: z.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...L,
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
                domain: z.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...L,
                text: P.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(P.sc_link_import_friends),
              location: {
                domain: z.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...L,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(P.sc_link_find_friends),
              location: {
                domain: z.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...L,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, R(e), {
            text: e.formatMessage(P.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...L,
              text: P.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, e, D, D.hasNotification, M), [h, e, D, M, he]), ve = () => {
            te(o + fe * se < re)
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
          return (0, n.useEffect)(() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            he.currentSite?.site === z.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }, [m]), (0, n.useEffect)(() => {
            ge(D?.characters?.[W] ?? [])
          }, [D, W]), (0, n.useEffect)(() => {
            D && K(D)
          }, [D]), (0, n.useEffect)(() => {
            const e = D?.characters?.gtao ?? [];
            if (null !== B && !e.length) return void G(!1);
            if (null == V || !e.length) return;
            const a = e?.[V] ?? e?.[0] ?? null;
            G(!!a?.platform && [a.platform, a.characterSlot])
          }, [V, D, B]), (0, n.useEffect)(() => {
            (async () => {
              if (!D?.id || !Z) return;
              const e = await (0, _.fetchUnreadNotificationCount)({
                pingBearer: H
              });
              let a = !1;
              e?.count && (a = e.count > 0), F(e => ({
                ...e,
                hasNotification: a
              }))
            })()
          }, [D, Z]), (0, n.useEffect)(() => {
            ve()
          }, [fe]), (0, n.useEffect)(() => {
            t(!0), u(f < 768), u(f < 768 || p < 649)
          }, [f, p]), (0, n.useEffect)(() => {
            let e = me.length - 1;
            e < 0 && (e = 0), ie(e);
            const a = me.length > 0 ? me[V] ?? me[0] : null;
            a && (q(a), me.length > 1 ? Q(!0) : Q(!1), r(me.length - 1 > 3))
          }, [V, me]), (0, n.useEffect)(() => {
            ve()
          }, [se, d, f, me]), (0, n.useEffect)(() => {
            we(), T()(() => {
              setTimeout(we, 0)
            }, 300)
          }, [f, p]), (0, n.useEffect)(() => {
            const e = A?.currentCharId ?? 0;
            e !== V && X(Math.max(0, Math.min(e, me.length - 1)))
          }, [me, A]), (0, i.jsxs)(i.Fragment, {
            children: [null !== J && "gtao" === W && (0, i.jsxs)("div", {
              className: le.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": h.formatMessage(P.profile_selector_profile_card),
              children: [(0, i.jsx)(oe, {
                s: le,
                character: J
              }), !0 === Y && (0, i.jsxs)("div", {
                className: le.scCharacterSelector,
                children: [(0, i.jsx)("button", {
                  className: le.scCharacterSelectBtn,
                  "aria-hidden": !Z,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const s = !a;
                    t(s), O({
                      event: s ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, i.jsx)("span", {
                    children: (0, i.jsx)(l.FormattedMessage, {
                      ...P.profile_selector_switch_character
                    })
                  })
                }), !d && (0, i.jsx)("div", {
                  className: le.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": a,
                  ref: s,
                  children: me.map(e => (0, i.jsx)(ee, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: pe
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                }), d && (0, i.jsx)("div", {
                  className: le.scCharacterList,
                  "data-single-item": 2 === me.length,
                  "data-swiper-disabled": ae,
                  "aria-hidden": a,
                  ref: ne,
                  children: (0, i.jsx)(ce, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      O({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: ae,
                    disableSwiper: ae,
                    children: me.filter((e, a) => a !== V).map(e => (0, n.createElement)(ee, {
                      characterData: e,
                      setMobileCardWidth: pe,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: a ? -1 : 0
                    }))
                  })
                })]
              })]
            }), (0, i.jsxs)("nav", {
              className: le.nav,
              "aria-hidden": !Z,
              children: [(0, i.jsx)("button", {
                className: le.navHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": Z,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, i.jsx)("span", {
                  className: le.navHeaderText,
                  children: D.nickname
                })
              }), (0, i.jsx)("div", {
                className: le.navWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: _e,
                style: {
                  "--navWrap-max-height": `${de+C}px`
                },
                children: be.map((e, a) => (0, n.createElement)($, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: S,
                  onNavigate: g,
                  key: e.text
                }))
              })]
            }), (0, i.jsx)("div", {
              className: le.scLanguageSelector,
              style: {
                visibility: Z ? null : "hidden"
              },
              children: (0, i.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: w,
                location: m,
                onLanguageChange: l.onLanguageChange
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
        de = (0, b.getConfigForDomain)(),
        ue = p(({
          location: e,
          onNavigate: a
        }) => {
          const {
            windowHeight: s
          } = (0, b.useWindowResize)(), o = (0, l.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: d,
            navOpened: u,
            setAccountNavOpened: m,
            charListHidden: g,
            setCharListHidden: f
          } = E(), [p, k] = (0, n.useState)(!1), {
            navHidden: v = !1
          } = (0, b.useState)(), {
            loggedIn: w
          } = (0, _.useRockstarUser)(), {
            currentCharId: y,
            navOpen: x,
            setNavOpen: C,
            userData: S
          } = (0, _.useRockstarUserState)(), {
            track: N
          } = (0, _.useGtmTrack)(), [j, M] = (0, n.useState)(!1), I = (0, n.useRef)(), [A, T] = (0, n.useState)(0), z = (0, n.createRef)(), [L, R] = (0, n.useState)(!1), [O, H] = (0, n.useState)(0), [$, U] = (0, n.useState)(!1), {
            mutateWebSettings: F,
            webSettings: B
          } = (0, b.useRockstarWebSettings)(), W = (0, n.useCallback)(e => {
            f(e), I.current && !0 === e && (I.current.scrollTop = 0)
          }, [I]);
          return (0, n.useEffect)(() => {
            null !== y && B.currentCharId !== y && F({
              key: "currentCharId",
              value: y
            }), !1 === w ? F({
              key: "currentCharId",
              value: null
            }) : w && S && S?.accountSynced && N({
              event: "account_synced"
            })
          }, [y, w, S?.accountSynced]), (0, n.useEffect)(() => {
            I.current && (!1 === g && !1 === j && (I.current.style.height = `${I.current.scrollHeight}px`), !0 === g && (I.current.style.height = null))
          }, [g, I, j]), (0, n.useEffect)(() => {
            const e = () => {
                C(!1), W(!0)
              },
              a = a => {
                const t = z?.current && a?.composedPath().includes(z.current);
                x && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }, [z]), (0, n.useEffect)(() => {
            C(!1), W(!0)
          }, [v]), (0, n.useEffect)(() => {
            if (z.current) {
              const {
                current: e
              } = z, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }, [z]), (0, n.useEffect)(() => {
            U(window.navigator.userAgent.includes("Mac"))
          }, []), (0, n.useEffect)(() => {
            z.current && k(z?.current?.scrollHeight >= s)
          }, [z, s]), (0, n.useEffect)(() => {
            x || (d(-1), r(!1))
          }, [x]), (0, n.useEffect)(() => {
            c && (g || W(!0), u && (m(!1), d(-1)))
          }, [c]), (0, n.useEffect)(() => {
            u && (c && r(!1), g || W(!0))
          }, [u]), void 0 === w ? null : (0, i.jsxs)(h.A, {
            enabled: !!x,
            removeScrollBar: !1,
            children: [(0, i.jsxs)("div", {
              className: [_e.menu, x ? _e.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": $,
              "data-scroll-mode": p,
              ref: z,
              "aria-hidden": !x,
              children: [(0, i.jsx)("button", {
                className: _e.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  H(a)
                },
                onTouchMove: e => {
                  if (0 === O) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(O - a) > 1 && (H(0), C(!1))
                },
                children: (0, i.jsx)("img", {
                  className: _e.dragHandle,
                  src: t(35902),
                  alt: o.formatMessage(P.sc_menu_drag_handle)
                })
              }), w ? (0, i.jsx)(re, {
                sc: de,
                charListHidden: g,
                hideCharacterList: W,
                refCharacterListDesktop: I,
                menuPadding: A,
                longCharList: j,
                setLongCharList: M,
                isMobileMode: L,
                setIsMobileMode: R,
                location: e,
                onNavigate: a
              }) : (0, i.jsx)(D, {
                sc: de,
                navOpen: x,
                location: e,
                onNavigate: a
              })]
            }), (0, i.jsx)("div", {
              className: [_e.scOverlay, x ? _e.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }),
        me = p(({
          setOtherHeaderDropdowns: e
        }) => {
          const a = (0, l.useIntl)(),
            {
              data: s,
              loggedIn: o
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: r,
              navOpen: d,
              setNavOpen: u
            } = (0, _.useRockstarUserState)(),
            {
              track: m
            } = (0, _.useGtmTrack)(),
            [g, f] = (0, n.useState)(),
            [p, k] = (0, n.useState)(!1),
            [h, b] = (0, n.useState)([]);
          (0, n.useEffect)(() => {
            b(s?.characters?.[c] ?? [])
          }, [s, c]);
          const v = (0, n.useCallback)(a => {
            a.stopPropagation(), u(!d), 1 == !d && e(null), m({
              event: "account_menu_click",
              element_placement: "account menu",
              text: d ? "close" : "open"
            })
          }, [d]);
          return (0, n.useEffect)(() => {
            k(!!h?.[r]?.mugshotUrl)
          }, [h, r]), (0, n.useEffect)(() => {
            f((() => {
              switch (o) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return h?.[r]?.mugshotUrl ?? s?.avatar
              }
            })())
          }, [s, h, r, o]), (0, i.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plateee811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": a.formatMessage(d ? P.sc_menu_close : P.sc_menu_open),
            "aria-expanded": d,
            type: "button",
            onClick: v,
            "data-mugshot": p,
            "data-testid": "avatarMenuButtonDesktop",
            "data-logged-in": Boolean(o),
            children: [(0, i.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platea917b58ca28b68550a1aa5d99c7eb998",
              src: g,
              alt: s?.nickname || "",
              onError: () => {
                let e = t(73091);
                p && (e = t(5931)), f(e)
              }
            }), o && p && (0, i.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec06123ceae7ca4759ec8b1a5197823db",
              children: (0, i.jsx)(G, {
                platform: h?.[r]?.platform,
                tagSize: X.small
              })
            }), o && (0, i.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platec4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[r]?.platform ?? null
            })]
          })
        });
      var ge = "_1tuft8a3",
        fe = "_1tuft8a2",
        pe = "_1tuft8a4",
        ke = "_1tuft8a1",
        he = "_1tuft8a0";
      const be = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        ve = p(() => {
          const e = (0, l.useIntl)(),
            {
              track: a
            } = (0, _.useGtmTrack)(),
            [t, o] = (0, n.useState)(null),
            [r, d] = (0, n.useState)(0),
            [u, m] = (0, n.useState)(!1),
            [g, f] = (0, n.useState)(!1),
            p = (0, n.createRef)(),
            [k, h] = (0, n.useState)([]),
            [v, w] = (0, n.useState)(244),
            {
              windowWidth: y
            } = (0, b.useWindowResize)(),
            [x, C] = (0, n.useState)(!1),
            S = (0, U.ri)(p, !1),
            {
              data: N,
              loggedIn: j
            } = (0, _.useRockstarUser)(),
            {
              charactersNeeded: M,
              currentCharId: I,
              setCurrentCharId: A
            } = (0, _.useRockstarUserState)(),
            {
              charListHidden: T,
              setCharListHidden: z
            } = E();
          (0, n.useEffect)(() => {
            void 0 === I && A(0)
          }, [I]), (0, n.useEffect)(() => {
            let e = k.length - 1;
            e < 0 && (e = 0), d(e);
            const a = k.length > 0 ? k[I] ?? k[0] : null;
            a && (o(a), k.length > 1 ? f(!0) : f(!1))
          }, [I, k]), (0, n.useEffect)(() => {
            h(N?.characters?.[M] ?? [])
          }, [N, M]), (0, n.useEffect)(() => {
            L()
          }, [v, r, x, y, k]), (0, n.useEffect)(() => {
            C(y < 1024)
          }, [y]);
          const L = () => {
              m(v * r < S)
            },
            R = e => {
              const t = k.filter((e, a) => a !== I).map(e => e);
              A(t[e].index), a({
                event: "character_selector_select",
                text: be[t[e].platform],
                position: t[e].index
              })
            };
          return null !== t && "gtao" === M && j ? (0, i.jsxs)("div", {
            tabIndex: -1,
            "aria-label": e.formatMessage(P.profile_selector_profile_card),
            children: [(0, i.jsx)(oe, {
              s,
              character: t
            }), !0 === g && (0, i.jsxs)("div", {
              className: he,
              children: [(0, i.jsxs)("button", {
                className: ke,
                "data-list-closed": T,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const t = !T;
                  z(t), a({
                    event: t ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                children: [(0, i.jsx)("span", {
                  className: fe,
                  children: (0, i.jsx)(l.FormattedMessage, {
                    ...P.profile_selector_switch_character
                  })
                }), (0, i.jsx)(c.ChevronDown, {
                  className: ge,
                  label: ""
                })]
              }), !x && (0, i.jsx)("div", {
                className: pe,
                "aria-hidden": T,
                children: k.filter((e, a) => a !== I).map((e, a) => (0, i.jsx)(ee, {
                  tabIndex: T ? -1 : 0,
                  onClick: () => R(a),
                  characterData: e,
                  setMobileCardWidth: w
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
              }), x && (0, i.jsx)("div", {
                className: pe,
                "data-single-item": 2 === k.length,
                "data-swiper-disabled": u,
                "aria-hidden": T,
                ref: p,
                children: (0, i.jsx)(ce, {
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
                  disablePager: u,
                  disableSwiper: u,
                  children: k.filter((e, a) => a !== I).map(e => (0, n.createElement)(ee, {
                    characterData: e,
                    setMobileCardWidth: w,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: T ? -1 : 0
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
    79867: (e, a, t) => {
      t.d(a, {
        A: () => r,
        C: () => c
      });
      var s = t(56265),
        i = t.n(s),
        n = t(41972),
        o = t.n(n);
      const c = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
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
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = l.findIndex(a => Object.entries(a.sites).findIndex(([a, s]) => s === t && (e = {
            site: a,
            subDomain: s
          }, !0)) >= 0), n = l[s >= 0 ? s : 0], c = l.find(e => e.id === n.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), o()(i()({}, c, {
            currentSite: e
          }, n), "fallbackEnvironment")
        }
    }
  }
]);