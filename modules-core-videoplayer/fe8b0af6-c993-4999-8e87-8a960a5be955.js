! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fe8b0af6-c993-4999-8e87-8a960a5be955", e._sentryDebugIdIdentifier = "sentry-dbid-fe8b0af6-c993-4999-8e87-8a960a5be955")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [852], {
    65596: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        A: () => g,
        AudioPlayer: () => j,
        Badge: () => N,
        Brands: () => w,
        Button: () => C,
        ButtonGroup: () => z,
        CalloutSection: () => J,
        Carousel: () => O,
        ConditionalBlock: () => H,
        CookieAB: () => re,
        CountryInputField: () => te,
        Cta: () => me,
        DescriptionArea: () => we,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => Pe,
        Embed: () => Oe,
        ExpandingPlatformButton: () => Xe,
        FadeInContent: () => Ye,
        GameSiteHeader: () => Qe,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => oa,
        Grid: () => Ae,
        HTMLElement: () => ga,
        Hero: () => pa,
        HookStore: () => F,
        ImageWithBadge: () => ja,
        InViewTracker: () => Ta,
        LanguageSelector: () => va,
        LayeredImage: () => ya,
        LoadingAnimation: () => Er,
        MultiSourceImage: () => fe,
        NewswireBlocks: () => Da,
        NewswireCard: () => za,
        NewswireList: () => Va,
        NewswireRelated: () => $a,
        NewswireTag: () => La,
        OrderedList: () => Ga,
        PackList: () => es,
        PackListMenu: () => gs,
        Paging: () => ks,
        ParallaxCacheBuster: () => bs,
        ParallaxInnerLayer: () => xs,
        ParallaxOuterLayer: () => Ns,
        ParallaxWrapper: () => ys,
        ProfileSwitcher: () => t,
        PromoModule: () => dt,
        Rating: () => gt,
        ResponsiveFlexBox: () => _t,
        ResponsiveFlexItem: () => vt,
        ResponsiveGridBox: () => ht,
        ResponsiveGridItem: () => xt,
        ResponsiveImg: () => Nt,
        ResponsiveSection: () => St,
        RockstarLogo: () => Ct,
        ScrollSection: () => It,
        ScrollToTop: () => Tt,
        ScrollTracker: () => Lt,
        SearchBox: () => Et,
        Separator: () => xe,
        Skeleton: () => Bt,
        SrcsetImage: () => wa,
        TextFit: () => Ce,
        ThumbsGallery: () => Ft,
        TinaModuleFetchNRender: () => Ht,
        TinaWrapper: () => Wt,
        TrackList: () => $t,
        UnorderedList: () => he,
        UserVote: () => Kt,
        VideoCard: () => r,
        VideoCarousel: () => Zt,
        VideoList: () => rr,
        VisuallyHidden: () => or,
        Wasted: () => ir,
        framer: () => i,
        useTinaModuleFetchByIds: () => Ut,
        withInViewTracker: () => Ca,
        withSearchbarErrorBoundary: () => mr,
        withSimpleErrorBoundary: () => ta
      });
      var t = {};
      s.r(t), s.d(t, {
        CharacterCard: () => Ts,
        Menu: () => ot,
        MenuButton: () => nt
      });
      var r = {};
      s.r(r), s.d(r, {
        Art: () => nr,
        Link: () => lr
      });
      var o = {};
      s.r(o), s.d(o, {
        getVariant: () => Cr,
        transitions: () => wr,
        variants: () => Sr
      });
      var i = {};
      s.r(i), s.d(i, {
        Animations: () => o,
        LiteMotion: () => _r,
        withFadeIn: () => hr,
        withFadeUp: () => Nr
      });
      var c = s(51664),
        n = s(41272);
      const l = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        d = (0, n.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var m = s(57013);
      const u = "rockstargames-modules-core-videoplayerff481c537a56a6fcdb1be85dfbc8944e";
      var p = s(95240);
      const g = (0, n.withIntl)((e => {
        let {
          children: a,
          to: s = "#",
          alt: t = "",
          autoBlank: r = !1,
          onClick: o = (() => {}),
          focused: i = !1,
          ...l
        } = e;
        const g = (0, c.useRef)(null),
          f = (0, n.useIntl)(),
          _ = !/^(https?|mailto):/i.test(s),
          k = /^#/.test(s),
          v = l?.target ?? (r ? "_blank" : "_self");
        let {
          ...b
        } = l, h = "";
        if ("aria-label" in b && b["aria-label"] && (h = "_blank" === v ? `${b["aria-label"]} ${f.formatMessage(d.aria_label_open_new_window)}` : b["aria-label"]), (0, c.useEffect)((() => {
            i && g?.current && g.current.focus()
          }), [g?.current, i]), k) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), o && o(e)
          };
          return (0, p.jsxs)("a", {
            title: t,
            href: s,
            onClick: e,
            ...b,
            "aria-label": h,
            ref: g,
            children: [a, "_blank" === v && !h && (0, p.jsx)("span", {
              className: u,
              children: f.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (_) return (0, p.jsxs)(m.NavLink, {
          title: t,
          to: s,
          onClick: e => o(e),
          ...b,
          "aria-label": h,
          ref: g,
          children: [a, "_blank" === v && !h && (0, p.jsx)("span", {
            className: u,
            children: f.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const y = Object.keys(b).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: l[a]
        })), {});
        return "function" == typeof y?.className && delete y.className, (0, p.jsxs)("a", {
          href: s,
          title: t,
          onClick: e => o(e),
          target: v,
          ...y,
          "aria-label": h,
          ref: g,
          children: [a, "_blank" === v && !h && (0, p.jsx)("span", {
            className: u,
            children: f.formatMessage(d.aria_label_open_new_window)
          })]
        })
      }), l);
      var f = s(97860),
        _ = s.n(f),
        k = s(33052),
        v = s(90048);
      const b = {
          player: "rockstargames-modules-core-videoplayerbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-core-videoplayere1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-core-videoplayere8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-core-videoplayerea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-core-videoplayerb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-core-videoplayerc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-core-videoplayerac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-core-videoplayeraafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-core-videoplayerb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-core-videoplayerff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-core-videoplayera81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-core-videoplayerc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-core-videoplayerc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-core-videoplayere4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-core-videoplayerba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-core-videoplayerfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-core-videoplayerc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-core-videoplayerb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-core-videoplayerd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-core-videoplayerd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-core-videoplayerf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-core-videoplayerefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-core-videoplayerf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-core-videoplayera56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-core-videoplayerb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        h = e => {
          let {
            src: a
          } = e;
          return (0, p.jsx)("div", {
            className: b.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        y = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: s,
            audioRef: t,
            setPlaying: r,
            tracksOpen: o,
            setTracksOpen: i,
            trackData: n,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const u = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            [k, v] = (0, c.useState)(null),
            [h, y] = (0, c.useState)(!1),
            x = e => {
              const a = new Date(1e3 * e),
                s = a.getUTCMinutes(),
                t = a.getSeconds();
              return `${s.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!g.current || !f.current) return;
            const e = () => {
              f.current && g.current && v(f.current.clientWidth > g.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [f, g, a]), (0, c.useEffect)((() => {
            if (!u.current || !a?.duration) return;
            let e = null;
            const s = new(_())(u.current),
              r = e => {
                if (u.current) {
                  const s = u.current.clientWidth;
                  if (!u.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    o = Number(r / s * a.duration);
                  t.currentTime = o
                }
              },
              o = () => {
                e ? t.pause() : t.play()
              },
              i = () => {
                e = t.paused, t.pause()
              };
            return s.on("panstart", i), s.on("panleft", r), s.on("panright", r), s.on("panend", o), s.on("tap", r), () => {
              s.off("panstart", i), s.off("panleft", r), s.off("panright", r), s.off("panend", o), s.off("tap", r)
            }
          }), [u.current, a.duration]), (0, c.useEffect)((() => {
            const e = Number(t?.currentTime);
            (s || !isNaN(e) && 0 !== e) && y(!0)
          }), [s, t?.currentTime]), (0, p.jsxs)("div", {
            className: b.controls,
            style: {
              "--track-color": n.color,
              "--track-mix-blend-mode": n.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, p.jsx)("div", {
              className: [b.controlsCurrentBg, h ? b.controlsCurrentBgVisible : ""].join(" ")
            }), (0, p.jsx)("div", {
              className: b.controlsTrack,
              ref: g,
              children: (0, p.jsx)("span", {
                className: [b.controlsTrackTitle, k ? b.controlsTrackAnimating : ""].join(" "),
                ref: f,
                children: n.title
              })
            }), (0, p.jsxs)("div", {
              className: b.controlsButtons,
              children: [(0, p.jsx)("div", {
                className: b.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), r(!0))
                }
              }), (0, p.jsx)("div", {
                className: [b.controlsPlayPause, s ? b.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!s)
                }
              }), (0, p.jsx)("div", {
                className: b.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), r(!0))
                }
              })]
            }), (0, p.jsx)("div", {
              active: o ? "" : null,
              className: b.controlsTrackBurger,
              children: (0, p.jsx)("div", {
                className: b.iconBurger,
                onClick: () => {
                  i(!o)
                }
              })
            }), (0, p.jsxs)("div", {
              className: b.controlsScrub,
              children: [(0, p.jsx)("span", {
                children: x(a.current)
              }), (0, p.jsx)("div", {
                className: b.controlsScrubTrack,
                ref: u
              }), (0, p.jsx)("span", {
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
            setTracksOpen: o,
            setPlaying: i,
            setAutoNext: c
          } = e;
          return (0, p.jsxs)("div", {
            className: b.tracks,
            children: [(0, p.jsx)("h4", {
              children: "Tracks"
            }), (0, p.jsx)("div", {
              className: b.trackBurger,
              onClick: () => {
                o(!r)
              }
            }), (0, p.jsx)("div", {
              className: b.trackList,
              children: a.map(((e, a) => (0, p.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: s === e.id ? b.trackActive : "",
                onClick: () => {
                  t(e.id), i(!0), c(!0)
                },
                children: [(0, p.jsx)("span", {
                  className: b.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, p.jsx)("span", {
                  className: b.trackTitle,
                  children: e.title
                }), (0, p.jsx)("span", {
                  className: b.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        j = e => {
          let {
            id: a,
            className: s = ""
          } = e;
          const {
            data: t
          } = (0, k.useQuery)(v.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [r, o] = (0, c.useState)(), [i, n] = (0, c.useState)(), [l, d] = (0, c.useState)(), [m, u] = (0, c.useState)(!1), [g, f] = (0, c.useState)(!1), [_, j] = (0, c.useState)(new HTMLAudioElement), [N, w] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (n(a.data.rockstarAudioPlayerPlayTrackId), C(!1), f(!0)), g && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && f(!1)
              };
            return g && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [g]), (0, c.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || w({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                S && r && n(r[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, r, S]), (0, c.useEffect)((() => {
            g && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [g]), (0, c.useEffect)((() => {
            _ && (g ? _.play() : _.pause(), u(!1))
          }), [g, _, l?.id]), (0, c.useEffect)((() => {
            if (!i) return;
            const {
              tracks: e
            } = t.audioAlbum, a = t.audioAlbum.tracks.findIndex((e => e.id === i));
            o([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [i]), (0, c.useEffect)((() => {
            t && n(t.audioAlbum.tracks[0].id)
          }), [t]), l ? (0, p.jsxs)("div", {
            className: [b.player, b[s], m ? b.tracksOpen : ""].join(" "),
            children: [(0, p.jsx)("audio", {
              ref: e => {
                j(e)
              },
              src: l.mp3_src
            }), (0, p.jsx)(x, {
              tracks: t.audioAlbum.tracks,
              setTrackId: n,
              trackId: i,
              tracksOpen: m,
              setTracksOpen: u,
              setPlaying: f,
              setAutoNext: C
            }), (0, p.jsx)(h, {
              src: l.cover_src
            }), (0, p.jsx)(y, {
              setTrackId: n,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: u,
              playing: g,
              setPlaying: f,
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
          return (0, p.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerb61bd7f274fd6d93c4bf33a9284b6b67",
            style: s,
            children: a
          })
        },
        w = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, p.jsx)("div", {
            className: "rockstargames-modules-core-videoplayercde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: s
              } = e;
              return (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayerc894fe869384587702b5370da072be86",
                "data-brand": s
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-modules-core-videoplayere056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-core-videoplayerd340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: s,
            context: t = "",
            to: r,
            onClick: o,
            ...i
          } = e;
          const c = [S.button, S[t], a].join(" ");
          return r ? (0, p.jsx)(g, {
            ...i,
            to: r,
            className: c,
            onClick: o,
            children: s
          }) : (0, p.jsx)("button", {
            ...i,
            type: "button",
            className: c,
            onClick: o,
            children: s
          })
        };
      var I = s(1740);
      const T = {
          pillBtn: "rockstargames-modules-core-videoplayerb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-core-videoplayerf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-core-videoplayercffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-core-videoplayerb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-core-videoplayere6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-core-videoplayercef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-core-videoplayerb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-core-videoplayercb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-core-videoplayerd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-core-videoplayerac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-core-videoplayerc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-core-videoplayera7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-core-videoplayera693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-core-videoplayera029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-core-videoplayere25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-core-videoplayere03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r,
            ariaLabel: o
          } = e;
          return (0, p.jsx)("button", {
            className: s,
            onClick: t,
            style: r,
            type: "button",
            "aria-label": o,
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: r,
            to: o,
            ariaLabel: i
          } = e;
          return (0, p.jsx)(m.NavLink, {
            className: s,
            onClick: t,
            style: r,
            to: o,
            "aria-label": i,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: r = "",
            img: o,
            labelColor: i = "#000",
            onClick: c,
            secondText: n,
            size: l,
            text: d,
            to: m,
            type: u = "",
            ariaLabel: g
          } = e;
          const f = [T.plusButton, T[u] ?? "", T[l] ?? "", T[t] ?? "", s].join(" "),
            _ = {
              "--hvr-color": a ?? i,
              "--hvr-bg-color": i ?? a,
              "--hvr-border-color": a ?? i
            },
            k = (0, p.jsxs)(p.Fragment, {
              children: [o ? (0, p.jsx)("img", {
                src: o,
                alt: ""
              }) : "", (0, p.jsxs)("div", {
                className: T.btnText,
                icon: r,
                children: [d, n ? (0, p.jsx)("span", {
                  children: n
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, p.jsx)("span", {
                onClick: c,
                onKeyDown: c,
                className: f,
                role: "button",
                "aria-label": g,
                tabIndex: 0,
                children: (0, p.jsx)("a", {
                  href: m,
                  target: e,
                  children: k
                })
              })
            }
            return (0, p.jsx)(L, {
              className: f,
              onClick: c,
              style: {
                ..._
              },
              to: m,
              ariaLabel: g,
              children: k
            })
          }
          return (0, p.jsx)(M, {
            className: f,
            onClick: c,
            style: {
              ..._
            },
            ariaLabel: g,
            children: k
          })
        },
        z = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, p.jsx)("div", {
            className: (0, I.classList)("rockstargames-modules-core-videoplayerb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: t,
                to: r
              } = e;
              return t ? (0, p.jsx)(E, {
                icon: s,
                text: t,
                to: r
              }, a) : ""
            }))
          }) : null
        };
      var B = s(48111),
        P = s(68e3);
      const V = {
          deprecatedCarousel: "rockstargames-modules-core-videoplayereb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-core-videoplayereb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-core-videoplayerb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-core-videoplayerfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-core-videoplayerc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-core-videoplayerf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-core-videoplayerf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-core-videoplayere70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-core-videoplayerbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-core-videoplayerf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-core-videoplayerd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-core-videoplayerb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-core-videoplayerbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-core-videoplayerdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-core-videoplayera59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-core-videoplayeraa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-core-videoplayerc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        A = e => {
          let {
            item: a
          } = e;
          return (0, p.jsxs)("div", {
            children: [(0, p.jsx)(ja, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, I.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, p.jsx)(we, {
              item: a
            })]
          })
        },
        $ = e => {
          let {
            current: a,
            total: s
          } = e;
          return (0, p.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, p.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        O = e => {
          let {
            children: a,
            items: s = [],
            style: t = {},
            noInfiniteScroll: r = !1,
            className: o = "",
            renderTemplate: i = "standard",
            text: n,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [u, g] = (0, c.useState)(0), f = (0, c.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, P.v4)())) : null), [a]);
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
          return (0, p.jsxs)("div", {
            className: (0, I.classList)(V.deprecatedCarousel, V[i], V[`infinite_${!r}`], a ? V.renderedWithChildren : "", o),
            style: t,
            children: [(0, p.jsxs)(B.wx, {
              loop: !r,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => g(0),
              onActiveIndexChange: e => g(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, p.jsx)("div", {
                className: V.trackWrapper,
                children: (0, p.jsxs)("div", {
                  className: V.track,
                  children: [s?.map((e => (0, p.jsx)(B.Ky, {
                    children: (0, p.jsx)(A, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, p.jsx)(B.Ky, {
                    children: e
                  }, f && f[a])))]
                })
              }), (0, p.jsx)($, {
                current: u,
                total: a ? a.length : s.length
              })]
            }), (n?.title || n?.description) && (0, p.jsx)(we, {
              item: n
            })]
          })
        };
      var D = s(45792),
        R = s(42836);
      const F = (0, s(62748).U1)(),
        G = e => e.some((e => !e)),
        U = e => {
          let {
            condition: a = null,
            children: s
          } = e;
          const [t, r] = (0, c.useState)(!1), o = (e => {
            const [a] = (0, m.useSearchParams)(), [s, t] = (0, c.useState)(null), r = (0, R.useRockstarUser)(), {
              loggedIn: o
            } = r, {
              currentCharId: i
            } = (0, R.useRockstarUserState)(), n = (0, R.useIsUserGtaPlus)(r?.data, i);
            return (0, c.useEffect)((() => {
              const s = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              F.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: t
                } = e;
                if (s) return "true" === a.get(t) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (G(r)) return !1;
                switch (t) {
                  case "user:is:loggedIn":
                    r.push(!0 === o);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === o);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === n);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === n);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), t(!G(r)), () => {}
            }), [a, e, n, r, o]), s
          })(a);
          return (0, c.useEffect)((() => {
            r(o)
          }), [o]), (0, c.useMemo)((() => t ? s : null), [t])
        },
        H = (0, D.withTranslations)((e => {
          let {
            children: a
          } = e;
          return c.Children.map(c.Children.toArray(a), (e => (0, p.jsx)(U, {
            ...e?.props
          })))
        }));
      var W = s(17228),
        q = s(58652);
      const X = e => {
          let {
            className: a
          } = e;
          return (0, p.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, p.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, p.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        K = {
          pillBtn: "rockstargames-modules-core-videoplayere3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-videoplayera9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-videoplayere6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-videoplayerb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-videoplayerc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-videoplayerb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-videoplayerb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-videoplayerac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-videoplayerbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-videoplayerb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-videoplayerb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-videoplayerf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-videoplayerd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-videoplayerb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-videoplayeraefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-videoplayera74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-videoplayercc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-videoplayerdb26fed58ce50f4affc114670885721a"
        },
        Y = e => {
          let {
            foreign_id: a,
            foreign_type: s
          } = e;
          const {
            track: t
          } = (0, R.useGtmTrack)(), {
            refetch: r
          } = (0, k.useQuery)(q.UserGetVote, {
            skip: !0
          }), [o] = (0, k.useMutation)(q.UserCastVote), [i, n] = (0, c.useState)(null), l = (0, c.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) n(null);
              else {
                n(e), t({
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
                await o({
                  variables: r
                })
              }
            })()
          }), [a, s, i]);
          return (0, c.useEffect)((() => {
            a && s && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: s
              });
              n(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s]), (0, p.jsxs)("div", {
            className: K.calloutVoteForm,
            children: [(0, p.jsx)("button", {
              "aria-label": "upvote",
              className: [K.upvote, K.voteButton, i ? K.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, p.jsx)("button", {
              "aria-label": "downvote",
              className: [K.downvote, K.voteButton, !1 === i ? K.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Z = e => {
          let {
            action_text: a,
            link: s,
            trackingData: t
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)();
          return (0, p.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, p.jsxs)("button", {
              className: K.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [a, (0, p.jsx)(X, {
                className: K.calloutLinkIcon
              })]
            })
          })
        },
        Q = e => {
          let {
            helperText: a,
            linkText: s,
            link: t,
            trackingData: r
          } = e;
          const {
            track: o
          } = (0, R.useGtmTrack)();
          return (0, p.jsxs)("div", {
            className: K.actionFooter,
            children: [a, s && " ", s && (0, p.jsx)("a", {
              href: t ?? "",
              onClick: () => o({
                ...r
              }),
              children: s
            })]
          })
        },
        J = (0, D.withTranslations)((e => {
          let {
            header: a,
            subheader: s,
            type: t,
            action_text: r,
            link: o,
            foreign_id: i = document.location.pathname,
            foreign_type: n = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: u,
            trackingData: g = {},
            actionFooterLinkTrackingData: f = {},
            t: _,
            ...k
          } = e;
          const {
            loggedIn: v
          } = (0, R.useRockstarUser)(), {
            track: b
          } = (0, R.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: y,
            inView: x
          } = (0, W.useInView)({
            threshold: .6
          }), [j, N] = (0, c.useState)(!1);
          let w;
          if ((0, c.useEffect)((() => {
              x && !j && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), N(!0))
            }), [x]), !a && !s) return null;
          switch (t) {
            case "vote":
              if (!v) {
                w = (0, p.jsx)(C, {
                  to: h,
                  className: K.calloutButton,
                  onClick: g ? () => b({
                    ...g
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, p.jsx)(Y, {
                foreign_id: i,
                foreign_type: n
              });
              break;
            case "button":
              r && o && (w = (0, p.jsx)(C, {
                to: o,
                className: K.calloutButton,
                onClick: g ? () => b({
                  ...g
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && o && (w = (0, p.jsx)(Z, {
                action_text: r,
                link: o,
                trackingData: g
              }));
              break;
            default:
              w = null
          }
          return (0, p.jsx)("div", {
            className: `${K.calloutContainer} ${l||""}`,
            ref: y,
            children: (0, p.jsxs)("div", {
              className: K.calloutSection,
              children: [(0, p.jsxs)("div", {
                className: [K.calloutHeaders, w ? K.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, p.jsx)("h2", {
                  className: K.calloutHeader,
                  children: _(a)
                }), s && (0, p.jsx)("h3", {
                  className: K.calloutSubheader,
                  children: _(s)
                })]
              }), (0, p.jsxs)("div", {
                className: K.actionBlock,
                children: [w, d && (0, p.jsx)(Q, {
                  helperText: d,
                  linkText: m,
                  link: u,
                  trackingData: f
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
          const [o, i] = (0, c.useState)(""), n = (0, c.useMemo)((() => se()().getData()), []);
          return (0, p.jsx)(ee.cp, {
            unstyled: !0,
            value: o,
            isMulti: a,
            allowSelectAll: s,
            options: n,
            placeholder: t,
            onChange: e => {
              return a = e?.target?.value, void i(a);
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
          const o = (e => {
              const a = document.cookie.split("; "),
                s = `${e}=`,
                t = a.find((e => e.startsWith(s)));
              return t?.substring(s.length, t.length)
            })(a),
            i = new URLSearchParams(window.location.search).get(a);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, i), o === s || i === s ? t : r
        },
        oe = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        ie = e => oe[e] || null,
        ce = {
          pillBtn: "rockstargames-modules-core-videoplayerbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-videoplayere07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-modules-core-videoplayereb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-modules-core-videoplayere8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-modules-core-videoplayerc392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-modules-core-videoplayerbc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-modules-core-videoplayerb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-videoplayerdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-videoplayerf5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-modules-core-videoplayercb0ad8d8dd93218dc12091b883767967",
          xbox: "rockstargames-modules-core-videoplayerf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-videoplayere5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-videoplayere52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-videoplayerc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-videoplayerf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-videoplayerb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-videoplayerc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-core-videoplayera9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-core-videoplayera4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-videoplayerc4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-modules-core-videoplayerc4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-modules-core-videoplayera13111cbe8acbd75f62da1c53de2c3df",
          icon: "rockstargames-modules-core-videoplayerc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-videoplayerbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-videoplayerc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-videoplayerd87326174de12b895401f738a23b177a"
        };
      var ne = s(89772),
        le = s.n(ne);
      const de = e => {
          let {
            platform: a = "",
            altText: s
          } = e;
          const t = a ? ie(a) : null,
            r = t ? (0, p.jsx)("img", {
              className: ce.platformIcon,
              src: t,
              alt: s
            }) : null;
          return (0, p.jsx)("span", {
            className: [ce.btnContent, ce.platformButton].join(" "),
            children: r
          })
        },
        me = e => {
          let {
            children: a,
            href: s,
            style: t,
            content: r,
            variant: o = null,
            size: i = "medium",
            icon: n,
            iconPosition: l = "none",
            iconStyle: d,
            badge: u,
            badgeStyle: g,
            platformItem: f,
            gtm: _ = {},
            disabled: k,
            reloadDocument: v = !1,
            className: b
          } = e;
          const {
            track: h
          } = (0, R.useGtmTrack)(), y = (0, D.useDataLayer)(), x = r ?? a, j = (0, D.findPlatform)(f)?.friendlyName, N = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(s)?.hostname
            } catch (s) {
              a = e
            }
            return e === a
          }), [s]), w = (0, c.useCallback)((() => {
            k || h({
              event: "cta_other",
              text: x ?? void 0,
              ...y,
              ..._,
              link_url: s ?? void 0
            })
          }), [_, s, y]), S = () => n ? (0, p.jsx)("span", {
            className: [ce.icon, `icon-${l}`].join(" "),
            style: d,
            children: (0, p.jsx)("img", {
              className: ce.btnIcon,
              src: ie(n) || "",
              alt: `${n} icon`
            })
          }) : null;
          return (0, p.jsx)(m.Link, {
            to: s,
            target: N ? "_self" : "_blank",
            className: le()(ce.cta, "platform" === o && f ? ce[f] : "", k ? ce.disabled : "", b),
            style: t,
            "data-variant": o,
            "data-size": i,
            onClick: w,
            "aria-label": x,
            reloadDocument: v,
            children: "platform" === o && f ? (0, p.jsx)(de, {
              platform: f,
              altText: j || x
            }) : (0, p.jsxs)("div", {
              className: ce.btnContent,
              children: ["left" === l && S(), (0, p.jsx)("span", {
                className: ce.label,
                children: x
              }), "right" === l && S(), u ? (0, p.jsx)("span", {
                className: ce.badge,
                style: g,
                children: u
              }) : null]
            })
          })
        };
      var ue = s(45652);
      const pe = "rockstargames-modules-core-videoplayereb64520e04e486931cd65dc5b3fa61e8",
        ge = e => {
          let {
            alt: a,
            className: t,
            src: r,
            style: o
          } = e;
          const [i, c] = (0, D.usePreloadImg)(r);
          let n = r;
          !1 === i && ("rockstargames-modules-core-videoplayeree609f31f3685766122c2c6fc0ef0710" === t && (n = s(61820)), n = s(43976));
          const {
            width: l,
            height: d
          } = c, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...o
          };
          return (0, p.jsx)("img", {
            src: n,
            className: t ?? "",
            alt: a,
            style: m
          })
        },
        fe = e => {
          let {
            className: a,
            style: t = {},
            image: r = {},
            imageStyle: o = {}
          } = e, {
            alt: i,
            src: c
          } = (0, ue.useImageParser)(r);
          const {
            isMobile: n
          } = (0, D.useWindowResize)();
          return c.desktop || c.mobile || (i = "", c = {
            mobile: s(61820),
            desktop: s(43976)
          }), (0, p.jsx)("div", {
            className: r.frame ? `${r.frame} ${pe}` : pe,
            style: t,
            children: (0, p.jsx)(ge, {
              style: {
                ...o,
                ...r?.style
              },
              src: n ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: i,
              className: a
            })
          })
        };
      var _e = s(89416),
        ke = s.n(_e);
      const ve = {
          grid: "rockstargames-modules-core-videoplayerac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-modules-core-videoplayercaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-modules-core-videoplayerb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-modules-core-videoplayerd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-modules-core-videoplayerba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-modules-core-videoplayerb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-modules-core-videoplayeraf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-modules-core-videoplayerd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-modules-core-videoplayerd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-modules-core-videoplayerc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-modules-core-videoplayerfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-modules-core-videoplayerf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-modules-core-videoplayerf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-modules-core-videoplayerf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-modules-core-videoplayerab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-modules-core-videoplayerdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-modules-core-videoplayerb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-modules-core-videoplayere4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-modules-core-videoplayerd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: be
        } = ke(),
        he = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: r,
            className: o,
            game: i,
            noImg: n,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, u] = (0, c.useState)(null), g = s ? s.split("_#_") : a;
          return (0, c.useEffect)((() => {
            u(a)
          }), [a]), s || a ? l && m ? (0, p.jsx)("div", {
            className: ve.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, p.jsx)("ul", {
              style: (0, D.safeStyles)(r),
              className: (0, I.classList)(ve.itemList, ve.noImg, ve[t], ve[i]),
              children: m.map(((e, a) => (0, p.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: be(e.content)
                }
              }, a)))
            })
          }) : (0, p.jsx)("ul", {
            style: (0, D.safeStyles)(r),
            className: (0, I.classList)(ve.itemList, ve.custom, n ? ve.noImg : "", t ? ve[t] : "", i ? ve[i] : "", o ?? ""),
            children: g.map(((e, a) => (0, p.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: be(e?.content ?? e)
              }
            }, a)))
          }) : null
        },
        ye = {
          hr: "rockstargames-modules-core-videoplayerf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-core-videoplayerf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-core-videoplayerc442f7264db862a7cca6d9a56dacc205"
        },
        xe = e => {
          let {
            style: a,
            className: s = "",
            type: t
          } = e;
          return (0, p.jsx)("div", {
            style: a,
            className: [ye.hr, ye[t], s].join(" ")
          })
        },
        je = "rockstargames-modules-core-videoplayerfa6885b15a718acb24f48949c52e31f1",
        Ne = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, p.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        we = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, p.jsxs)("div", {
            className: (0, I.classList)("rockstargames-modules-core-videoplayeref9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, p.jsx)(Ne, {
              to: a?.href ?? a?.to,
              children: (0, p.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, p.jsx)(he, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, p.jsx)(fe, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, p.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, p.jsx)(xe, {})
            }, a) : (0, p.jsx)("p", {
              children: (0, p.jsx)("span", {
                className: je,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, p.jsx)("span", {
              className: je,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Se = s(58936);
      const Ce = e => {
          let {
            children: a,
            ...s
          } = e;
          const [t, r] = (0, c.useState)(!1);
          return (0, p.jsx)(Se.cR, {
            ...s,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: a
          })
        },
        Ie = {
          badge: "rockstargames-modules-core-videoplayere279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-core-videoplayerd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-core-videoplayerd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-core-videoplayere1bba3cd4554abbb48a030af24bbada5"
        },
        Te = e => {
          let {
            wrapper: a,
            children: s,
            role: t,
            splitter: r
          } = e;
          return r || t ? a(s) : s
        },
        Me = e => {
          let {
            badge: a,
            badgeType: t,
            role: r,
            splitter: o
          } = e;
          const i = [];
          o ? a.split(o).map(((e, a) => i.push(e))) : i.push(a);
          let c = 100;
          return 2 == i.length && i[1].length < 4 && "off" !== i[1].toLowerCase() && 45, (0, p.jsxs)(Te, {
            splitter: o,
            role: r,
            wrapper: e => (0, p.jsx)("div", {
              className: `${Ie.badge} ${t?Ie[t]:""} `,
              children: e
            }),
            children: [(0, p.jsx)(p.Fragment, {
              children: r && (0, p.jsx)(fe, {
                image: {
                  alt: r,
                  desktop: s(6572)(`./${r}.png`)
                }
              })
            }), (0, p.jsx)(Ce, {
              className: `${o||r?"":Ie.badge} ${t?Ie[t]:""}`,
              min: 8,
              max: 1e3,
              mode: o || r ? "single" : "multi",
              children: i[0]
            }), (0, p.jsx)(p.Fragment, {
              children: i.shift() && o && i.length >= 1 && (0, p.jsx)(Ce, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: i.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Le = "rockstargames-modules-core-videoplayerc63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: a
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayera481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, p.jsx)("div", {
              className: Le
            }), (0, p.jsx)("div", {
              className: Le
            }), (0, p.jsx)("div", {
              className: Le
            })]
          })
        };
      var ze = s(43924);
      const Be = {
          dropdownWrapper: "rockstargames-modules-core-videoplayerb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-core-videoplayerb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-core-videoplayerf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-core-videoplayerecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-core-videoplayerb64c3515fcd91f6b84410bd14640da81"
        },
        Pe = e => {
          let {
            children: a,
            className: s,
            title: t
          } = e;
          const [r, o] = (0, c.useState)(!1);
          return (0, p.jsx)(ze.cp, {
            disabled: !r,
            children: (0, p.jsxs)("div", {
              className: [Be.dropdownWrapper, r ? Be.open : "", void 0 !== s ? s : ""].join(" "),
              children: [(0, p.jsx)("button", {
                className: Be.opener,
                onClick: () => o(!r),
                children: t
              }), r && (0, p.jsx)("div", {
                className: Be.items,
                onClick: () => o(!1),
                children: a
              })]
            })
          })
        };
      var Ve = s(95356);
      const Ae = e => {
          let {
            children: a,
            context: s = null,
            game: t,
            image: r = {},
            style: o = {},
            template: i = null,
            theme: c = null,
            reversedOnMobile: n = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, ue.useImageParser)(r ?? {}),
            u = {
              ...o
            };
          if (m?.src?.desktop) {
            const e = (r?.style && r?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (r?.style && r?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              s = `var(--grid-background-position, center)/${e??"cover"}`;
            if (u.background = `url(${m?.src?.desktop}) ${a} ${s}`, r?.style && r?.style["--linear-gradient"]) u.background = `linear-gradient(${r?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${a} ${s}`;
            else if (r?.style && r?.style["--gradient-height"]) {
              const e = r?.style["--gradient-height"] || "3",
                t = r?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                o = r?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              u.background = `linear-gradient(180deg, ${t}, transparent ${e}%, transparent ${100-e}%, ${o}), url(${m?.src?.desktop}) ${a} ${s}`
            }
          }
          return (0, p.jsx)("div", {
            id: d,
            className: (0, Ve.classList)("rockstargames-modules-core-videoplayerf42b4606ed4a5b16b7647ad7b7eb229d", n ? "rockstargames-modules-core-videoplayerb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === i ? null : t,
            style: (0, D.safeStyles)(u),
            "data-context": s,
            "data-template": i,
            "data-theme": c,
            children: a
          })
        },
        $e = e => {
          let {
            caption: a,
            children: s,
            ...t
          } = e;
          return a ? (0, p.jsxs)("figure", {
            ...t,
            children: [s, (0, p.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : s
        },
        Oe = e => {
          let {
            componentTitle: a,
            type: s,
            items: t
          } = e;
          return t?.length ? (0, p.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerd393ab6eb68d416b116b6281abdb5e14",
            type: s,
            children: (0, p.jsxs)(Ae, {
              children: [a && (0, p.jsx)("h3", {
                children: a
              }), (0, p.jsx)(Ae, {
                className: "rockstargames-modules-core-videoplayered3ee31cb8e357d795886157f95a742a",
                children: t.map(((e, a) => {
                  return e?.embed ? (0, p.jsx)($e, {
                    caption: e?.caption,
                    children: (0, p.jsx)("div", {
                      className: "rockstargames-modules-core-videoplayerdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (s = e.embed, s.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, p.jsx)("p", {
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
      var De = s(21388);
      const Re = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Fe = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ge = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: Fe
          }
        },
        Ue = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Fe,
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
              height: Re
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        He = {
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
            transition: Re,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        We = {
          pillBtn: "rockstargames-modules-core-videoplayerba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-core-videoplayerc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-core-videoplayerbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-core-videoplayera1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-modules-core-videoplayerf692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-modules-core-videoplayerba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-modules-core-videoplayerc2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-modules-core-videoplayerdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-core-videoplayerc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-core-videoplayerd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-core-videoplayerb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-core-videoplayerfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-core-videoplayerb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-core-videoplayere23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-core-videoplayere0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-core-videoplayerdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-core-videoplayere047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-core-videoplayerdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-core-videoplayerae7bc564778d8af6cf5f8a0491ef7dc8"
        },
        qe = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: r = "",
            target: o = null,
            onClick: i
          } = e;
          const c = o ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            n = [We.platformButton, We[r]].join(" "),
            l = r ? s(13892)(`./${r}.svg`) : null,
            d = (0, p.jsxs)(p.Fragment, {
              children: [l ? (0, p.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, p.jsx)("div", {
                className: We.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, p.jsx)("a", {
            href: t,
            className: n,
            target: c,
            onClick: i,
            "aria-label": a,
            children: d
          }) : (0, p.jsx)(m.NavLink, {
            className: n,
            onClick: i,
            to: t,
            "aria-label": a,
            children: d
          })
        },
        Xe = e => {
          let {
            variant: a,
            buttonText: t = "Subscribe",
            buttonClassName: r,
            className: o,
            children: i,
            platformsAndLinks: n = [],
            trackingType: l = "buy",
            trackingParent: d,
            target: m = null,
            trackingOId: u = null
          } = e;
          const [g, f] = (0, c.useState)(!1), {
            track: _
          } = (0, R.useGtmTrack)(), k = (0, c.useRef)(null), v = (0, c.useRef)(g);
          (0, c.useEffect)((() => {
            v.current = g
          }), [g]), (0, c.useEffect)((() => {
            const e = e => {
              v && !k?.current?.contains(e.target) && f(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []);
          const b = e => {
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
          return (0, p.jsxs)("div", {
            className: (0, I.classList)(We.container, o),
            children: [(0, p.jsx)(De.q.div, {
              className: We.content,
              animate: g ? "open" : "close",
              variants: Ge,
              "aria-hidden": !!g,
              children: i
            }), (0, p.jsxs)(De.q.div, {
              "data-variant": a,
              className: le()(g ? We.expandedButton : We.unexpandedButton),
              animate: g ? "open" : "closed",
              variants: He,
              initial: !1,
              ref: k,
              children: [(0, p.jsx)(De.q.button, {
                className: le()(We.buttonText, r),
                "aria-expanded": g,
                disabled: g,
                ...!g && {
                  onClick: () => {
                    if (f(!g), !g) switch (l) {
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
              }), (0, p.jsxs)(De.q.div, {
                className: We.expandedArea,
                animate: g ? "open" : "closed",
                variants: Ue,
                initial: !1,
                "aria-hidden": !g,
                children: [(0, p.jsx)("button", {
                  className: We.closeButton,
                  onClick: () => {
                    f(!1), _({
                      element_placement: d,
                      event: "cta_other",
                      text: "close expanding platform button"
                    })
                  },
                  "aria-label": "Close",
                  children: (0, p.jsx)("img", {
                    src: s(72428),
                    alt: "Close"
                  })
                }), (0, p.jsx)("div", {
                  className: We.platformButtons,
                  children: n.length ? n.map((e => (0, p.jsx)(qe, {
                    buttonText: e.buttonText ?? (0, D.findPlatform)(e.platform)?.friendlyName ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: b(e),
                    target: m
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Ke = {
          animateBox: "rockstargames-modules-core-videoplayere9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-core-videoplayera63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-core-videoplayerd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-core-videoplayerb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-core-videoplayera4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-core-videoplayerf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Ye = e => {
          let {
            children: a,
            style: s
          } = e;
          const t = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ke.visible])
              }))
            })).observe(t?.current)
          }), []), (0, p.jsx)("div", {
            style: s,
            className: [Ke.fadeArea].join(" "),
            ref: t,
            children: a
          })
        },
        Ze = {
          gameSiteHeader: "rockstargames-modules-core-videoplayercb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-core-videoplayeraa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-core-videoplayerac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-core-videoplayere5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-core-videoplayerb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-core-videoplayere666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-core-videoplayercfc6fd456ca2f3e9db06f780f412660f"
        },
        Qe = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: s,
            navLinks: t,
            cta: r = "",
            game: o
          } = e;
          const [i, n] = (0, c.useState)(!1), l = (0, k.useMutateState)(), {
            navHidden: d
          } = (0, k.useState)();
          return (0, c.useEffect)((() => {
            l({
              gameSiteNavOpen: i
            })
          }), [i]), (0, c.useEffect)((() => {
            const e = () => {
              n(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, p.jsxs)("header", {
            "data-game": o,
            className: [Ze.gameSiteHeader, i ? Ze.headerNavOpen : "", d ? Ze.navHidden : "", s.gameSiteHeader, i ? s.headerNavOpen : ""].join(" "),
            children: [(0, p.jsx)("button", {
              className: [Ze.headerLogo, s.headerLogo].join(" "),
              onClick: e => {
                n(!i), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, p.jsx)("div", {
              className: Ze.bg
            }), (0, p.jsx)("nav", {
              children: (0, p.jsx)("div", {
                className: Ze.navContent,
                children: t
              })
            }), r]
          })
        };
      var Je = s(31403),
        ea = s(73660),
        aa = s.n(ea);
      class sa extends c.Component {
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
          return this?.state?.error?.message ? (0, p.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayerf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, p.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, p.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ta = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(s) {
            return (0, p.jsx)(sa, {
              header: a,
              children: (0, p.jsx)(e, {
                ...s
              })
            })
          }
        },
        ra = e => {
          let {
            prevRef: a,
            nextRef: s,
            onNextClicked: t,
            onPrevClicked: r,
            onNextKeyDown: o
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayerd98f432655f19a842390597c4434db06",
            children: [(0, p.jsx)("button", {
              className: "rockstargames-modules-core-videoplayerc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, p.jsx)("button", {
              className: "rockstargames-modules-core-videoplayera4f98606cdef508fbd2e69c5564a92d8",
              ref: s,
              onClick: t,
              onKeyDown: o,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        oa = ta((e => {
          let {
            description: a,
            slideChildren: s,
            size: t,
            title: r,
            name: o,
            customSlidesPerView: i = null,
            customSpaceBetween: n = null,
            slideClass: l,
            style: d,
            className: m,
            cardSizeBreakpoints: u,
            customAspectRatio: g,
            titleBadge: f
          } = e;
          const {
            track: _
          } = (0, R.useGtmTrack)(), k = (0, c.useRef)(null), v = (0, c.useRef)(null), b = (0, c.useRef)(null), [h, y] = (0, c.useState)(null), [x, j] = (0, c.useState)(!1), [N, w] = (0, c.useState)(null), [S, C] = (0, c.useState)(), [T, M] = (0, c.useState)(), {
            ref: L,
            inView: E
          } = (0, W.useInView)({
            threshold: .6
          }), [z, P] = (0, c.useState)(!1), [V, A] = (0, c.useState)(null), [$, O] = (0, c.useState)(!1);
          let D = !1;
          D = !0;
          const [F, G] = (0, c.useState)(0), [U, H] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              O(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              S && !(0, ea.isEmpty)(S) && S?.height > 0 && S?.height !== F && G(S?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [S]);
          const q = {
            0: {
              spaceBetween: n ?? 16
            },
            1024: {
              spaceBetween: n ?? 18
            },
            1920: {
              spaceBetween: n ?? 20
            },
            2560: {
              spaceBetween: n ?? 22
            }
          };
          (0, c.useEffect)((() => {
            if (!k.current) return;
            const e = () => {
              if (k.current) {
                const e = i || Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view")),
                  a = i ? 1 : Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view-multiplier"));
                w(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k, i]), (0, c.useEffect)((() => {
            if (!s) return;
            let e = !1;
            s.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, A(a))
            })), P(e);
            const a = s.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && $ ? null : (0, p.jsx)(B.Ky, {
              className: "rockstargames-modules-core-videoplayerf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => Y(a),
              children: e
            }, Symbol(a).toString())));
            y(a)
          }), [s, $]), (0, c.useEffect)((() => {
            M({
              nextEl: b.current,
              prevEl: v.current
            })
          }), [b, v]), (0, c.useEffect)((() => {
            E && !x && s && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: (o || r).toLowerCase(),
              element_placement: (o || r).toLowerCase()
            }), j(!0))
          }), [E, s]);
          let X = "custom" === t ? {
            "--custom-aspect-ratio": g,
            ...d
          } : {
            ...d
          };
          const K = 0 !== F ? `${F}px` : "100%";
          X = {
            ...X,
            "--carousel-cards-height": K,
            "--carousel-nav-opacity": U
          };
          const Y = e => {
            S?.slideTo(e)
          };
          return (0, p.jsxs)("div", {
            className: (0, I.classList)("rockstargames-modules-core-videoplayerd0c3d91603036c852633939015a6cb48", m),
            "data-size": t,
            "data-sm": u?.sm ? u?.sm : t,
            "data-md": u?.md ? u?.md : t,
            "data-lg": u?.lg ? u?.lg : t,
            "data-xl": u?.xl ? u?.xl : t,
            "data-xxl": u?.xxl ? u?.xxl : t,
            "data-has-covercard": z,
            "data-new-carousel-nav": !0,
            ref: k,
            style: X,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerddeb75a59ed783554b94e8298897a1fa",
              ref: L
            }), z && $ && (0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerd5f00d41fdd2c864a0eb9e069cf08db0",
              children: V
            }), (0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayercdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, p.jsxs)("div", {
                className: "rockstargames-modules-core-videoplayerfb8e207418c783fc2f53b44c19faedca",
                children: [(0, p.jsxs)("div", {
                  className: "rockstargames-modules-core-videoplayerb779ba2045a88302079083935c90f7b3",
                  children: [!z && r && (0, p.jsxs)("div", {
                    className: "rockstargames-modules-core-videoplayeredf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, p.jsx)("h2", {
                      children: r
                    }), f && (0, p.jsx)("span", {
                      className: "rockstargames-modules-core-videoplayerd7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, p.jsx)(ra, {
                    prevRef: v,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = S?.slides[S?.activeIndex].querySelector('a, button, [role="button"]');
                        a && (e.preventDefault(), a.focus())
                      }
                    }
                  })]
                }), a && (0, p.jsx)("div", {
                  className: "rockstargames-modules-core-videoplayera1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, p.jsx)(B.wx, {
              slidesPerView: N,
              onInit: e => {
                C(e);
                const a = setInterval((() => {
                  const {
                    height: s
                  } = e;
                  s > 0 && (G(s), H(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: T,
              modules: [Je._2],
              breakpoints: q,
              slideClass: (0, I.classList)("swiper-slide", l),
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
              children: h
            }) : ""]
          })
        }), null),
        ia = {
          pillBtn: "rockstargames-modules-core-videoplayerd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-core-videoplayerbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-core-videoplayerd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-core-videoplayerc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-core-videoplayera271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-core-videoplayerae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-core-videoplayerf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-core-videoplayerf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-core-videoplayerd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-core-videoplayerfb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-modules-core-videoplayerd4e5e627f7968400413c3b578b1b3143",
          primaryBtn: "rockstargames-modules-core-videoplayerff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-modules-core-videoplayera0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-modules-core-videoplayerbe305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-modules-core-videoplayerf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-core-videoplayere999b9cecfe233bcee8cab8682fb96bf"
        },
        ca = {
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
        na = {
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
        la = e => {
          let {
            title: a = "",
            mobileImg: s,
            desktopImg: t
          } = e;
          const r = (0, I.useGetCdnSource)(s ?? null),
            o = (0, I.useGetCdnSource)(t ?? r);
          return (0, p.jsx)("div", {
            className: ia.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${o})`
            },
            children: (0, p.jsx)("h5", {
              children: a
            })
          })
        },
        da = e => {
          let {
            title: a = "Membership Rewards",
            name: s = "Membership Rewards",
            shards: t
          } = e;
          const [r, o] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            t && o(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: s,
                shardImg: t
              } = a, {
                mobile: r,
                desktop: o
              } = t;
              return e.push((0, p.jsx)(la, {
                title: s,
                mobileImg: r?.full_src,
                desktopImg: o?.full_src
              })), e
            }), []))
          }), [t]), r ? (0, p.jsx)("div", {
            className: ia.shardsCarousel,
            children: (0, p.jsx)(oa, {
              title: a,
              name: s,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ma = e => {
          let {
            animated: a = !1,
            ctas: s = [],
            expandingButtonLabel: t = "Subscribe"
          } = e;
          const [r, o] = (0, c.useState)([]), [i, n] = (0, c.useState)([]);
          return (0, c.useEffect)((() => {
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
            o(e), n(a)
          }), [s]), r.length ? (0, p.jsx)(De.q.div, {
            variants: a ? na : void 0,
            children: (0, p.jsx)(Xe, {
              variant: "gen9",
              buttonText: t,
              platformsAndLinks: r,
              children: !!i.length && (0, p.jsx)(De.q.div, {
                variants: na,
                children: (0, p.jsx)(z, {
                  buttons: i,
                  className: ia.buttonGroup
                })
              })
            })
          }) : (0, p.jsx)(p.Fragment, {
            children: !!i.length && (0, p.jsx)(De.q.div, {
              variants: na,
              children: (0, p.jsx)(z, {
                buttons: i,
                className: ia.buttonGroup
              })
            })
          })
        },
        ua = e => {
          let {
            animated: a = !1,
            brands: s = [],
            ctas: t = [],
            cta: r = [],
            description: o = "",
            expandingButtonLabel: i = "Subscribe",
            title: c = "",
            legalText: n
          } = e;
          return (0, p.jsxs)(De.q.div, {
            className: ia.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? ca : void 0,
            children: [(0, p.jsx)(De.q.div, {
              variants: a ? na : void 0,
              children: (0, p.jsx)(w, {
                brands: s
              })
            }), (c || o) && (0, p.jsxs)(De.q.div, {
              className: ia.descriptions,
              variants: a ? na : void 0,
              children: [c && (0, p.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              }), o && (0, p.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })]
            }), !!r.length && (0, p.jsx)("div", {
              className: ia.ctaBlock,
              children: (0, p.jsx)(I.TinaParser, {
                components: {
                  Cta: me,
                  ExpandingPlatformButton: Xe
                },
                tina: {
                  payload: {
                    content: r
                  }
                }
              })
            }), !!t.length && (0, p.jsx)("div", {
              className: ia.ctaBlock,
              children: (0, p.jsx)(ma, {
                animated: a,
                ctas: t,
                expandingButtonLabel: i
              })
            }), n && (0, p.jsx)(De.q.div, {
              className: ia.legalText,
              variants: a ? na : void 0,
              children: (0, p.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
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
            ctas: o = [],
            cta: i,
            description: c = "",
            expandingButtonLabel: n = "Subscribe",
            layeredImage: l,
            layeredImageSettings: d,
            legalText: m,
            shardsSection: u = {},
            theme: g = "gen9",
            title: f = ""
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
                    const [o, i] = r;
                    if (s.has(t) && s.has(o)) {
                      const t = `${s.get(o)}${e}`;
                      a[t] = "imageWidth" !== o ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            k = (0, I.useGetCdnSource)(s?.mobile?.full_src ?? null),
            v = (0, I.useGetCdnSource)(s?.desktop?.full_src ?? k),
            b = (0, I.useGetCdnSource)(l?.mobile?.full_src ?? null),
            h = (0, I.useGetCdnSource)(l?.desktop?.full_src ?? b);
          return (0, p.jsxs)(De.q.div, {
            className: (0, I.classList)(ia.hero, r),
            style: {
              "--background-image-desktop": `url(${v})`,
              "--background-image-mobile": `url(${k})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? ca : void 0,
            "data-type": "hero",
            theme: g,
            children: [(0, p.jsxs)("div", {
              className: ia.images,
              children: [v && k ? (0, p.jsx)("div", {
                className: ia.background,
                style: s?.style ?? {}
              }) : "", b && h ? (0, p.jsx)("div", {
                className: ia.layered,
                style: d ? _ : {}
              }) : "", (0, p.jsx)("div", {
                className: ia.gradient
              })]
            }), (0, p.jsx)(ua, {
              animated: a,
              ctas: o,
              cta: i,
              description: c,
              expandingButtonLabel: n,
              title: f,
              brands: t,
              legalText: m
            }), u?.shards && (0, p.jsx)(da, {
              ...u
            })]
          })
        },
        ga = e => {
          let {
            children: a,
            attributes: s = {},
            className: t = "",
            style: r = {}
          } = e;
          return (0, p.jsx)("span", {
            className: (0, I.classList)(t, s?.className, "rockstargames-modules-core-videoplayera7f106a8036d74ed9282a741476c6b5a"),
            style: (0, D.safeStyles)(r ?? s?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: aa().unescape(a)
            }
          })
        };
      var fa = s(53592);
      const _a = (0, n.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ka = {
          pillBtn: "rockstargames-modules-core-videoplayercb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-videoplayerc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-videoplayerfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-videoplayerb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-videoplayeredc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-videoplayerc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-videoplayerc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-videoplayere3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-videoplayerc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-videoplayerbcccd1077d13d7fe1585655e5c5f8363"
        },
        va = (0, n.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: s,
            setLanguageSelectorOpened: t
          } = e;
          const r = (0, m.useLocation)(),
            o = (0, n.useIntl)(),
            [i, l] = (0, n.getLocale)(),
            [d, u] = (0, c.useState)(!1),
            f = (0, c.useMemo)((() => (0, fa.c)()), []),
            _ = (0, c.useCallback)((e => {
              let a = r.pathname;
              const s = a.split("/");
              return n.locales.map((e => e.subdomaincom)).includes(s[0]) && (a = s.slice(1).join("/")), f.currentSite?.site === fa.U.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
            }), [r]),
            k = (0, c.useRef)(null),
            [v, b] = (0, c.useState)(0),
            h = matchMedia("(hover: none) and (pointer: coarse)").matches,
            y = e => {
              if (t && t(!1), i.subdomaincom === e || "none" === e) return void(t && t(!1));
              const a = n.locales.find((a => a.subdomaincom === e));
              a && (l(a.iso), window.location.href = _(e))
            };
          return (0, c.useEffect)((() => {
            void 0 !== s && !1 === s && !0 === d && u(!1)
          }), [s]), (0, c.useEffect)((() => {
            k.current && b(k.current.scrollHeight)
          }), [k]), (0, p.jsxs)("div", {
            className: [ka.languageSelector, d ? ka.open : ""].join(" "),
            "data-theme": a,
            children: [h && "sc-menu" === a && (0, p.jsx)("div", {
              className: ka.selectBoxWrapper,
              children: (0, p.jsxs)("select", {
                className: ka.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  y(e.currentTarget.value)
                },
                "aria-label": o.formatMessage(_a.language_selector_default),
                children: [(0, p.jsx)("option", {
                  className: ka.selectBoxOption,
                  value: "none",
                  children: (0, p.jsx)(n.FormattedMessage, {
                    ..._a.language_selector_default
                  })
                }), n.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: s
                  } = e;
                  return (0, p.jsx)("option", {
                    className: ka.selectBoxOption,
                    value: s,
                    children: a
                  }, `mobile-${s}`)
                }))]
              })
            }), (!h || "sc-menu" !== a) && (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), t && t(!d), u(!d)
                },
                type: "button",
                "aria-label": o.formatMessage(_a.language_selector_default),
                children: [(0, p.jsx)("i", {}), (0, p.jsx)("span", {
                  children: (0, p.jsx)(n.FormattedMessage, {
                    ..._a.language_selector_default
                  })
                })]
              }), (0, p.jsx)("div", {
                className: ka.linkWrapper,
                ref: k,
                style: {
                  "--ls-linkWrapper-opened-height": `${v}px`
                },
                children: (0, p.jsx)("div", {
                  className: ka.links,
                  children: n.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: s
                    } = e;
                    return (0, p.jsx)(g, {
                      to: _(a),
                      onClick: () => {
                        y(a)
                      },
                      tabIndex: d ? 0 : -1,
                      children: s
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), l),
        ba = {
          layeredImage: "rockstargames-modules-core-videoplayera29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-core-videoplayeraabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-core-videoplayerca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-core-videoplayerf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-core-videoplayere03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-core-videoplayerc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-core-videoplayerb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-core-videoplayere9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-core-videoplayere45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-core-videoplayered8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-core-videoplayerfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-core-videoplayerb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-core-videoplayerba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-core-videoplayerec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-core-videoplayera6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-core-videoplayerd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-core-videoplayerca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-core-videoplayerbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-core-videoplayerfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-core-videoplayerbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-core-videoplayerb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-core-videoplayerac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-core-videoplayerd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-core-videoplayerd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-core-videoplayera8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-core-videoplayerdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-core-videoplayerb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-core-videoplayeradaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-core-videoplayerc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-core-videoplayere650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-core-videoplayerb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-core-videoplayere41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-core-videoplayerdb575e1d021e69ebb4265a29484e2888"
        },
        ha = e => {
          let {
            style: a,
            className: s
          } = e;
          const t = {
              ...a
            },
            r = a["--border-image-source"],
            o = (0, I.useGetCdnSource)(r || null);
          return r && (t["--border-image-source"] = `url(${o})`), (0, p.jsx)("div", {
            className: (0, I.classList)(ba.border, s),
            style: {
              ...t
            }
          })
        },
        ya = e => e?.images ? (0, p.jsx)("div", {
          className: (0, I.classList)(ba.layeredImage, ba[e?.variantClass], ba[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, p.jsxs)("div", {
            className: ba.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: s,
                paddingClass: t,
                imageSizeClass: r,
                objectFitClass: o,
                positionClassX: i,
                positionClassY: c,
                zIndex: n,
                className: l,
                style: d,
                alt: m,
                displayClass: u
              } = e;
              return (0, p.jsx)(fe, {
                image: s,
                style: {
                  zIndex: n ?? a + 1
                },
                imageStyle: d,
                className: (0, I.classList)(l, u, ba.imageLayer, ba[t], ba[r], ba[o], ba[i], ba[c]),
                alt: m
              }, n ?? a + 1)
            })), e?.borderImage && (0, p.jsx)(ha, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        xa = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, p.jsx)("div", {
            className: "rockstargames-modules-core-videoplayerefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        ja = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: t,
            splitter: r,
            image: o,
            style: i,
            className: c = "",
            attributes: n = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, p.jsx)(xa, {
            hero: d,
            children: (0, p.jsx)("figure", {
              children: (0, p.jsxs)("div", {
                className: (0, I.classList)("rockstargames-modules-core-videoplayercab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-modules-core-videoplayercefd6d8859aeec1057caed28caa160c3" : "", n?.hiddenMobile ? "hiddenMobile" : "", n?.hiddenLarge ? "hiddenLarge" : "", n?.className, c),
                style: (0, D.safeStyles)({
                  ...i,
                  ...n?.style
                }),
                ...n,
                children: [(0, p.jsx)(fe, {
                  image: o,
                  className: c
                }), (o?.badge || o?.discountTxt || a || t) && (0, p.jsx)(Me, {
                  badge: o?.discountTxt ?? o?.badge ?? a ?? t,
                  badgeType: s,
                  splitter: o?.splitter ?? r,
                  role: o?.role ?? l
                }), o?.caption && (0, p.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: o.caption
                  }
                })]
              })
            })
          })
        },
        Na = {
          pillBtn: "rockstargames-modules-core-videoplayereea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-core-videoplayerd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-core-videoplayerdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-core-videoplayeree782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-core-videoplayerfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-core-videoplayerf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        wa = e => {
          let {
            imageUrl: a,
            className: s,
            alt: t,
            style: r,
            lazy: o = !1,
            decoding: i = "auto",
            sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, c.useState)(!1);
          return (0, p.jsxs)("div", {
            className: Na.multiSourceContainer,
            children: [!l && (0, p.jsx)("img", {
              className: [s, Na.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, p.jsx)("img", {
              className: [Na.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, n.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: t ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                d(!0)
              },
              loading: o ? "lazy" : "eager",
              decoding: i
            })]
          });
          var m
        },
        Sa = e => {
          let {
            impressionTracking: a,
            gtm: s = {},
            children: t
          } = e;
          return a?.shouldTrack ? (0, p.jsx)(Ta, {
            threshold: a?.threshold,
            gtm: s,
            children: t
          }) : t
        },
        Ca = (e, a) => s => ((e, a, s) => (0, p.jsx)(Sa, {
          impressionTracking: s?.impressionTracking,
          gtm: s?.gtm,
          children: (0, p.jsx)(e, {
            ...a
          })
        }))(e, s, a),
        Ia = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Ta = e => {
          let {
            threshold: a = .6,
            children: s,
            gtm: t = {}
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)(), {
            ref: o,
            inView: i
          } = (0, W.useInView)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [n, l] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            i && !n && (r({
              ...Ia,
              ...t
            }), l(!0))
          }), [i, o]), (0, p.jsx)("section", {
            ref: o,
            children: s
          })
        },
        Ma = {
          tag: "rockstargames-modules-core-videoplayered77774d2704bc0ebc0ac156542ae053"
        },
        La = e => {
          let {
            className: a,
            href: s,
            title: t,
            style: r
          } = e;
          const o = (0, p.jsxs)("div", {
            style: r,
            className: [Ma.tag, a].join(" "),
            children: [(0, p.jsx)("i", {}), t]
          });
          return void 0 !== s ? (0, p.jsx)(g, {
            to: s,
            children: o
          }) : o
        },
        Ea = {
          newswireBlock: "rockstargames-modules-core-videoplayera793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-core-videoplayerd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-core-videoplayercc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-videoplayerffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-core-videoplayerbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-core-videoplayerf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-core-videoplayerfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-core-videoplayere380e8c67066df6f33fc018341ea96e5"
        },
        za = e => {
          let {
            section: a = "",
            index: s,
            post: t,
            noSpecialOrder: r = !1,
            focused: o
          } = e;
          const {
            track: i
          } = (0, R.useGtmTrack)(), [n] = (0, m.useSearchParams)(), l = t.preview_images_parsed.newswire_block, d = {
            default: 0 !== s || r ? l.square || l.d16x9 || l._fallback : l.d16x9 || l.square || l._fallback,
            mobile: l.square || l._fallback
          }, [u, f] = (0, D.usePreloadImg)(d.default), _ = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          }, k = (0, c.useCallback)((() => {
            i({
              event: "card_click",
              card_id: t.id,
              card_name: t.name_slug.replace(/-/g, " "),
              link_url: t.url,
              position: s,
              element_placement: a
            })
          }), [t]);
          return (0, p.jsx)(g, {
            to: t.url,
            className: [Ea.newswireBlock, r ? Ea.newswireBlockNoSpecialOrder : "", null !== u ? Ea.startAnimation : ""].join(" "),
            focused: o,
            onClick: k,
            children: (0, p.jsxs)(p.Fragment, {
              children: [0 !== s || n.get("tag_id") ? (0, p.jsx)("div", {
                className: Ea.preview,
                style: _.default
              }) : (0, p.jsxs)(p.Fragment, {
                children: [(0, p.jsx)("div", {
                  className: Ea.previewMobile,
                  style: _.mobile
                }), (0, p.jsx)("div", {
                  className: Ea.preview,
                  style: _.default
                })]
              }), (0, p.jsxs)("div", {
                className: Ea.info,
                children: [(0, p.jsxs)("div", {
                  className: Ea.top,
                  children: [t.primary_tags.length ? (0, p.jsx)(La, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, p.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, p.jsx)("h5", {
                  className: Ea.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Ba = s(55492),
        Pa = s.n(Ba);
      const Va = (0, D.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: s = "",
            tagId: t = null,
            metaUrl: r = "/newswire",
            t: o
          } = e;
          const {
            track: i
          } = (0, R.useGtmTrack)(), [n] = (0, m.useSearchParams)(), {
            tagId: l = null
          } = (0, m.useParams)(), [d, u] = (0, c.useState)(l ?? t ?? n.get("tag_id")), [g, f] = (0, c.useState)(1), [_, v] = (0, c.useState)([]), [b, h] = (0, c.useState)(null), {
            data: y
          } = (0, k.useQuery)(Pa(), {
            variables: {
              tagId: Number(d),
              page: g,
              metaUrl: r
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            f(1), v([]), u(l ?? t ?? n.get("tag_id"))
          }), [n.get("tag_id")]), (0, c.useEffect)((() => {
            y && y.posts && y.posts.paging && h(y.posts.paging), y && y.posts && y.posts.results && v(_.concat(y.posts.results))
          }), [y]), _.length ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(Da, {
              section: a,
              posts: _,
              relativeTo: s,
              noSpecialOrder: null !== d
            }), null !== b && b.nextPage ? (0, p.jsx)(C, {
              onClick: e => {
                f(g + 1), i({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: !1,
              context: "secondary",
              children: o("More Stories")
            }) : ""]
          }) : null
        })),
        Aa = {
          pillBtn: "rockstargames-modules-core-videoplayerafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-core-videoplayerbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-core-videoplayera748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-core-videoplayerc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-core-videoplayerb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        $a = (0, D.withTranslations)((e => {
          let {
            posts: a,
            t: s
          } = e;
          return (0, p.jsxs)("section", {
            className: Aa.related,
            children: [(0, p.jsx)("h2", {
              children: s("Related Stories")
            }), (0, p.jsx)("div", {
              className: [Aa.posts, 1 === a.length ? Aa.just1post : ""].join(" "),
              children: a.map((e => (0, p.jsx)(za, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Oa = {
          newswireBlocks: "rockstargames-modules-core-videoplayerc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-core-videoplayerc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Da = (0, D.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: s = !1,
            posts: t,
            gtmTrack: r,
            relativeTo: o
          } = e;
          const [i, n] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
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
            })), r(e), n(t.length)
          }), [t.length]), (0, p.jsx)("div", {
            className: [Oa.newswireBlocks, s ? Oa.noSpecialOrder : "", Oa.contextHome].join(" "),
            children: t.map(((e, t) => (0, p.jsx)(za, {
              section: a,
              index: t,
              noSpecialOrder: s,
              post: e,
              focused: t === i
            }, e.id)))
          })
        })),
        Ra = {
          pillBtn: "rockstargames-modules-core-videoplayerf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-modules-core-videoplayera8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-modules-core-videoplayera57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-modules-core-videoplayerdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-modules-core-videoplayerbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-modules-core-videoplayera6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-modules-core-videoplayere88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-modules-core-videoplayerab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-modules-core-videoplayerc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-modules-core-videoplayerb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-modules-core-videoplayerd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-modules-core-videoplayerd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-modules-core-videoplayerd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-modules-core-videoplayerf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-modules-core-videoplayera6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-modules-core-videoplayereade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-modules-core-videoplayera82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-modules-core-videoplayerd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-modules-core-videoplayerf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-modules-core-videoplayercdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-modules-core-videoplayerba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Fa
        } = ke(),
        Ga = e => {
          let {
            list: a,
            string: s,
            starColor: t,
            style: r,
            className: o,
            game: i,
            noImg: n,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, u] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            u(a)
          }), [a]), s || a ? l && m ? (0, p.jsx)("div", {
            className: Ra.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, p.jsx)("ol", {
              style: (0, D.safeStyles)(r),
              className: (0, I.classList)(Ra.itemList, Ra.noImg, Ra[t], Ra[i]),
              children: m.map((e => (0, p.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Fa(e.content)
                }
              }, e.content)))
            })
          }) : (0, p.jsx)("ol", {
            style: (0, D.safeStyles)(r),
            className: (0, I.classList)(Ra.itemList, Ra.custom, n ? Ra.noImg : "", t ? Ra[t] : "", i ? Ra[i] : "", o ?? ""),
            children: a.map((e => (0, p.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Fa(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        };
      var Ua = s(67356),
        Ha = s(35212);
      const Wa = (e, a) => {
          const s = e.tiers && e.tiers.every((e => e.isComplete)),
            t = a.tiers && a.tiers.every((e => e.isComplete));
          return s && !t ? 1 : !s && t ? -1 : 0
        },
        qa = (0, n.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Xa = {
          pillBtn: "rockstargames-modules-core-videoplayere6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-core-videoplayere5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-core-videoplayereee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-core-videoplayerbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-core-videoplayercfa711252c08391d3a0f1ecd8728a61a"
        },
        Ka = e => {
          let {
            tiers: a
          } = e;
          return (0, p.jsx)("div", {
            className: Xa.packCardTierIndicator,
            children: a?.map(((e, a) => (0, p.jsx)("div", {
              className: [Xa.tierIndicator, e.isComplete ? Xa.active : ""].join(" ")
            }, a)))
          })
        },
        Ya = {
          pillBtn: "rockstargames-modules-core-videoplayere2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-core-videoplayerff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-core-videoplayerd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-core-videoplayereb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-core-videoplayerfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-core-videoplayera124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-core-videoplayerd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-core-videoplayercbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-core-videoplayerd4649f3812d37e7407503d49dcaaba04"
        },
        Za = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Qa = e => {
          let {
            title: a,
            url: s,
            images: t,
            className: r,
            tiers: o,
            onClick: i,
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const {
            isMobile: u
          } = (0, D.useWindowResize)(), {
            loggedIn: g
          } = (0, R.useRockstarUser)(), {
            selectedCharacterTuple: f
          } = (0, R.useRockstarUserState)(), [_, k] = (0, c.useState)(!1), [v, b] = (0, c.useState)(d), [h, y] = (0, c.useState)(!1), x = (0, n.useIntl)(), j = !!o?.length;
          (0, c.useEffect)((() => {
            if (Array.isArray(f)) {
              const e = f?.[0];
              y((0, D.getGen9Consoles)().includes(e))
            }
          }), [String(f)]), (0, c.useEffect)((() => {
            if (o && o.length > 0) {
              const e = o.some((e => !e.isComplete));
              k(!e)
            } else k(!1)
          }), [o]);
          const N = `${u?t?.mobile:t?.desktop}?im=Resize,height=${l}`;
          return (0, D.usePreloadImg)(N, (() => b(!0))), (0, p.jsx)(m.NavLink, {
            className: [Ya.packCard, r, _ ? Ya.packCompleted : ""].join(" "),
            to: s,
            onClick: i,
            children: (0, p.jsxs)("div", {
              className: [Ya.packCardImageBox, v ? Ya.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              children: [_ && (0, p.jsxs)("div", {
                className: Ya.badge,
                children: [(0, p.jsx)("div", {
                  className: Ya.icon
                }), (0, p.jsx)("div", {
                  className: Ya.label,
                  children: x.formatMessage(qa.pl_card_badge_content_complete)
                })]
              }), (0, p.jsxs)("div", {
                className: Ya.packCardTextBox,
                children: [(0, p.jsx)("h4", {
                  children: a
                }), g && !_ && h && (0, p.jsx)(Ka, {
                  tiers: j ? o : Za
                })]
              })]
            })
          })
        },
        Ja = {
          pillBtn: "rockstargames-modules-core-videoplayerc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-core-videoplayerff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-core-videoplayerffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-core-videoplayerf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-core-videoplayera53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-core-videoplayerb85775dc95fb3881171ee42e49076cbf"
        };
      Ua.gsap.registerPlugin(Ha.useGSAP);
      const es = e => {
          let {
            isHeaderVisible: a,
            packListItems: s,
            packCardClassName: t = Ja.packCard,
            packListClassName: r = Ja.packList,
            packGridClassName: o = Ja.packGrid,
            selectPackCard: i,
            sortFunction: n = Wa
          } = e;
          const l = (0, c.useRef)(null),
            d = [...s].sort(n),
            [m, u] = (0, c.useState)(),
            [g, f] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            if (!0 === g) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              f(!0)
            }), 1e3);
            u(e)
          }), []), (0, Ha.useGSAP)((() => {
            if (!1 !== g && l?.current) {
              const e = l.current.children;
              Ua.gsap.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: Ua.Power2.easeInOut
              })
            }
          }), {
            dependencies: [g, s],
            scope: l,
            revertOnUpdate: !0
          }), (0, p.jsx)("div", {
            className: [r, a ? Ja.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, p.jsx)("div", {
              ref: l,
              className: o,
              "data-testid": "pack-grid",
              children: d.map(((e, a) => {
                let {
                  id: s,
                  name: r,
                  title: o,
                  url: c,
                  images: n,
                  tiers: l
                } = e;
                return (0, p.jsx)(Qa, {
                  title: o,
                  url: c,
                  className: t,
                  images: n,
                  tiers: l,
                  onClick: () => ((e, a, s, t, r) => {
                    i(e, a, s, t, r)
                  })(r, o, c, s, a)
                }, o)
              }))
            })
          })
        },
        as = {
          pillBtn: "rockstargames-modules-core-videoplayerdb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-modules-core-videoplayerb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-modules-core-videoplayerbfe6fefc1068ed81c8b38519a854285f"
        },
        ss = e => {
          let {
            title: a,
            onClick: s,
            selected: t
          } = e;
          return (0, p.jsx)("button", {
            type: "button",
            onClick: s,
            tabIndex: 0,
            "aria-label": a,
            className: [as.chipButton, t ? as.selected : ""].join(" "),
            children: (0, p.jsx)("div", {
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
      const os = e => c.createElement("svg", rs({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ts || (ts = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var is;

      function cs() {
        return cs = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
          }
          return e
        }, cs.apply(this, arguments)
      }
      const ns = e => c.createElement("svg", cs({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), is || (is = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ls = {
          pillBtn: "rockstargames-modules-core-videoplayerf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-modules-core-videoplayerf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-modules-core-videoplayeref8ca38f98b731ff5dfe07937b1bbe34"
        },
        ds = e => {
          let {
            direction: a,
            className: s,
            ...t
          } = e;
          return (0, p.jsxs)("button", {
            type: "button",
            className: [s, ls.navScrollButton].join(" "),
            ...t,
            children: ["left" === a && (0, p.jsx)(os, {}), "right" === a && (0, p.jsx)(ns, {})]
          })
        },
        ms = (0, n.defineMessages)({
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
          pillBtn: "rockstargames-modules-core-videoplayerc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-modules-core-videoplayerb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-modules-core-videoplayerb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-modules-core-videoplayerfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-modules-core-videoplayere753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-modules-core-videoplayerce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-modules-core-videoplayeref938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-modules-core-videoplayerf750c5a49886ae190c14e52aa026a417"
        },
        ps = e => {
          let {
            navItems: a,
            category: s,
            setCategory: t,
            chipsContainerClass: r = us.chipsContainer,
            previousChipButtonClass: o = "",
            nextChipBtnClass: i = ""
          } = e;
          const l = (0, n.useIntl)(),
            {
              track: d
            } = (0, R.useGtmTrack)(),
            {
              pathname: u
            } = (0, m.useLocation)(),
            g = (0, c.useMemo)((() => Math.max(a.findIndex((e => e.name === s)), 0)), [a, u]),
            [f, _] = (0, c.useState)(g),
            [k, v] = (0, c.useState)(!1),
            [b, h] = (0, c.useState)(!1),
            [y, x] = (0, c.useState)(!1),
            j = (0, c.useRef)(null),
            N = (0, c.useRef)(null),
            w = (0, c.useRef)(null),
            S = (0, c.useCallback)(((e, a) => {
              w.current && w.current.slideTo(e), _(e), C(`Career Progress Nav > ${a}`)
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
          (0, c.useEffect)((() => {
            t(f)
          }), [f]);
          const T = e => {
            e.isEnd ? h(!0) : h(!1), e.isBeginning ? x(!0) : x(!1)
          };
          return (0, c.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (v(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (v(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, p.jsxs)("div", {
            className: r,
            children: [!y && k && (0, p.jsx)("div", {
              ref: N,
              className: (0, I.classList)(us.previousChipNavButton, o),
              children: (0, p.jsx)(ds, {
                direction: "left",
                className: us.previousNavIcon,
                onClick: () => {
                  w.current && (w.current?.slidePrev(), w.current.isBeginning ? x(!0) : x(!1), d({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(ms.pln_scroll_left)
              })
            }), (0, p.jsx)("div", {
              className: us.chips,
              children: (0, p.jsx)(B.wx, {
                onBeforeInit: e => w.current = e,
                onInit: T,
                className: us.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: f,
                onSlideChange: T,
                onResize: T,
                children: a.map(((e, a) => {
                  let {
                    title: s
                  } = e;
                  return (0, p.jsx)(B.Ky, {
                    children: (0, p.jsx)(ss, {
                      title: s,
                      onClick: () => S(a, s),
                      selected: f === a
                    })
                  }, s)
                }))
              })
            }), !b && k && (0, p.jsx)("div", {
              ref: j,
              className: (0, I.classList)(us.nextChipNavButton, i),
              children: (0, p.jsx)(ds, {
                direction: "right",
                className: us.nextNavIcon,
                onClick: () => {
                  w.current && (w.current?.slideNext(), w.current.isEnd ? h(!0) : h(!1), d({
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
        gs = e => {
          let {
            navItems: a,
            onNavItemClick: s,
            isOpen: t,
            isHeaderVisible: r
          } = e;
          const {
            track: o
          } = (0, R.useGtmTrack)(), [i, n] = (0, c.useState)(0), l = (0, c.useCallback)(((e, t) => {
            d(`Secondary Nav > ${a[i].title} > ${e}`, t), s()
          }), [a, s, i, o]), d = (e, a) => {
            o({
              event: "nav_click",
              event_action: "click",
              event_category: "nav",
              event_label: e,
              text: e.split(">").pop()?.trim() || "",
              link_url: a,
              element_placement: e
            })
          };
          return (0, p.jsx)(De.q.div, {
            className: "rockstargames-modules-core-videoplayeraa2ce15f29ac99fe06895664698bb6cc",
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
            children: (0, p.jsxs)("div", {
              className: "rockstargames-modules-core-videoplayerf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayerc5288c05172905ec86e3fb56c010d6d3",
                children: (0, p.jsx)(ps, {
                  navItems: a,
                  category: a[i]?.name,
                  setCategory: n,
                  nextChipBtnClass: "rockstargames-modules-core-videoplayerc8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-modules-core-videoplayere9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayerf1adea94eb32de966a0e622247370f4e",
                children: (0, p.jsx)(es, {
                  isHeaderVisible: r,
                  packListItems: a[i]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        fs = "rockstargames-modules-core-videoplayerc54c374409e11d1429ce99457cbf7441",
        _s = e => {
          let {
            children: a,
            data: s,
            onPageUpdate: t,
            page: r,
            className: o
          } = e;
          return (0, p.jsx)("a", {
            href: "#",
            className: r === s.page ? `rockstargames-modules-core-videoplayerc0eebf4f915ff9f5cc362e22d6d7d976 ${o??""}` : "",
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
          return (0, p.jsxs)("div", {
            className: `rockstargames-modules-core-videoplayera626faab2a5a03e3466dda5c79960575 ${t??""}`,
            children: [a.pageCount > 8 ? (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(_s, {
                data: a,
                onPageUpdate: s,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, p.jsx)("div", {
                className: fs,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, p.jsx)(_s, {
              data: a,
              onPageUpdate: s,
              page: e,
              className: t,
              children: e
            }, e))), a.pageCount > 8 ? (0, p.jsxs)(p.Fragment, {
              children: [r.slice(-1)[0] + 1 < a.pageCount ? (0, p.jsx)("div", {
                className: fs,
                children: "..."
              }) : "", (0, p.jsx)(_s, {
                data: a,
                onPageUpdate: s,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var vs = s(77616);
      const bs = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: s
          } = (0, vs.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!s) return;
            const e = setInterval((() => {
              s.update()
            }), 500);
            return () => clearInterval(e)
          }), [s]), a
        },
        hs = {
          parallaxWrapper: "rockstargames-modules-core-videoplayerdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-core-videoplayerd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-core-videoplayerf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-core-videoplayercb5937d1a102ac4a66c4e373e6253946"
        },
        ys = e => {
          let {
            scrollAxis: a = "vertical",
            size: s = "",
            style: t = {},
            children: r
          } = e;
          return (0, p.jsx)(vs.qK, {
            scrollAxis: a,
            children: (0, p.jsx)(bs, {
              children: (0, p.jsx)("div", {
                className: (0, I.classList)(hs.parallaxWrapper, hs[s]),
                style: t,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, s) => (0, c.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: s
                  }
                }))) : (0, p.jsx)("div", {})
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
          const r = (0, I.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const o = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, p.jsx)(vs.Sr, {
            className: (0, I.classList)("rockstargames-modules-core-videoplayerb8c85703a3c76902e49a61a6afcb81bc", s),
            layers: o,
            style: t
          })
        },
        js = "rockstargames-modules-core-videoplayerc4aa8e5d29b433c400796d0c493a9a4d",
        Ns = e => {
          let {
            minOffset: a = 0,
            maxOffset: s = 0,
            scrollAxis: t = "vertical",
            displayClass: r = "",
            style: o = {},
            children: i
          } = e;
          return "horizontal" === t ? (0, p.jsx)(vs.mw, {
            x: [a, s],
            className: (0, I.classList)(js, r),
            styleOuter: o,
            children: i
          }) : (0, p.jsx)(vs.mw, {
            y: [a, s],
            className: (0, I.classList)(js, r),
            styleOuter: o,
            children: i
          })
        },
        ws = (e, a) => {
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
        Cs = (0, n.defineMessages)({
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
        Is = {
          pillBtn: "rockstargames-modules-core-videoplayere4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-videoplayereb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-videoplayerdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-videoplayerc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-videoplayere79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-videoplayerc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-videoplayereabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-videoplayerb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-videoplayerf1e0bcba6214698c490b8201bbd850b7"
        },
        Ts = (0, n.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const t = (0, n.useIntl)(),
            {
              platform: r,
              platformUsername: o,
              mugshotUrl: i,
              stats: l
            } = a,
            [d, m] = (0, c.useState)(i),
            u = ws(r, "large");
          return (0, p.jsxs)("div", {
            className: Is.scCharacterCard,
            children: [(0, p.jsx)("div", {
              className: Is.scAvatar,
              "data-size": "small",
              children: (0, p.jsx)("img", {
                src: d,
                alt: t.formatMessage(Cs.profile_selector_mugshot, {
                  userName: o
                }),
                onError: () => {
                  m(s(71084))
                }
              })
            }), (0, p.jsx)("div", {
              className: Is.scCharacterStats,
              children: (0, p.jsxs)("div", {
                className: Is.scCharNames,
                children: [(0, p.jsx)("img", {
                  src: u.src,
                  alt: u.alt
                }), (0, p.jsx)("div", {
                  className: Is.scUserName,
                  "data-size": "small",
                  children: o
                }), (0, p.jsx)("div", {
                  className: Is.scRp,
                  children: (0, p.jsxs)("div", {
                    className: Is.scRpLevel,
                    children: [(0, p.jsx)("img", {
                      className: Is.scRpIcon,
                      src: Ss(l.overview.rank.value),
                      alt: t.formatMessage(Cs.profile_selector_rp_icon)
                    }), (0, p.jsx)("span", {
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
        As = e => Vs(e),
        $s = Ls("scNavOpenedReactive", !0),
        Os = e => $s(e),
        Ds = Ls("charListHiddenReactive", !0),
        Rs = e => Ds(e),
        Fs = () => {
          const e = (0, k.useReactiveVar)(Es),
            a = (0, k.useReactiveVar)(Bs),
            s = (0, k.useReactiveVar)(Vs),
            t = (0, k.useReactiveVar)($s),
            r = (0, k.useReactiveVar)(Ds);
          return (0, c.useEffect)((() => {
            r || (e && zs(!1), t && (Os(!1), Ps(-1)))
          }), [r]), (0, c.useEffect)((() => {
            !e && r && (t || Os(!0))
          }), [e, r]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: zs,
            activeSubNavId: a,
            setActiveSubNavId: Ps,
            subNavExtraHeight: s,
            setSubNavExtraHeight: As,
            scNavOpened: t,
            setScNavOpened: Os,
            charListHidden: r,
            setCharListHidden: Rs
          })), [e, a, s, t, r])
        };
      var Gs = s(69760),
        Us = s.n(Gs),
        Hs = s(9860);
      const Ws = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        qs = e => ({
          text: e.formatMessage(Cs.sc_link_help),
          target: "_self",
          ga: {
            ...Ws,
            text: Cs.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Cs.sc_link_support),
            location: {
              domain: fa.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ws,
              text: Cs.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Cs.sc_link_legal),
            location: {
              domain: fa.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Ws,
              text: Cs.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Cs.sc_link_privacy_policy),
            location: {
              domain: fa.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Ws,
              text: Cs.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Cs.sc_link_cookies_policy),
            location: {
              domain: fa.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Ws,
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
              ...Ws,
              text: Cs.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_do_not_sell_my_information),
            location: {
              domain: fa.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Ws,
              text: Cs.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Xs = e => {
          let {
            text: a,
            target: s,
            href: t,
            location: r,
            ga: o,
            dataTestId: i,
            isSubLink: c,
            hasNotifications: l = !1,
            onClickCallback: d = (() => {}),
            tabIndex: u,
            reloadDocument: g = !1
          } = e;
          const {
            track: f
          } = (0, R.useGtmTrack)(), _ = (0, fa.c)(), k = (0, n.useIntl)();
          let v = t;
          r && (v = r.domain === _.currentSite?.site ? r.path : `https://${_.sites[r.domain]}.rockstargames.com${r.path}`);
          const b = {
            ...o,
            link_url: v
          };
          return (0, p.jsxs)(m.Link, {
            className: c ? "rockstargames-modules-core-videoplayerfdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-core-videoplayercbc80932118c48d8ec14448d8913d068",
            "data-testid": i || "menuLink",
            title: a,
            to: v,
            target: s,
            rel: "noreferrer",
            reloadDocument: g,
            tabIndex: u,
            onClick: e => {
              f(b), d(e)
            },
            children: [a, l && (0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayera2d268c9fb03a7271b47de447d663da9",
              children: (0, p.jsx)("span", {
                className: "rockstargames-modules-core-videoplayercf5a6b05c52c6c4faf3236055d4670c3",
                children: k.formatMessage(Cs.nofications_new)
              })
            })]
          })
        },
        Ks = e => {
          let {
            id: a,
            text: s,
            target: t,
            href: r,
            location: o,
            ga: i,
            hasNotifications: n = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: u,
            setSubNavExtraHeight: g,
            reloadDocument: f = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, D.useWindowResize)(), {
            track: b
          } = (0, R.useGtmTrack)(), {
            navOpen: h
          } = (0, R.useRockstarUserState)(), y = (0, c.useRef)(null), [x, j] = (0, c.useState)(0), [N, w] = (0, c.useState)(0), [S, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!y.current) return;
            j(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), w(a)
            }
          }), [y, k, v]), d.length > 0 ? (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsxs)("button", {
              className: "rockstargames-modules-core-videoplayeraf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: s,
              tabIndex: h ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), b(i), m === a ? (u(-1), g(0)) : (u(a), g(x + N + N))
              },
              children: [(0, p.jsx)("span", {
                className: "rockstargames-modules-core-videoplayerfd722aa4f6d05656ee6e37f952bd13d0",
                children: s
              }), (0, p.jsx)("span", {
                className: "rockstargames-modules-core-videoplayerbe674f27adc299eab348b49f71429b71"
              })]
            }, s), (0, p.jsx)("nav", {
              className: "rockstargames-modules-core-videoplayerff1911053a3515534dd825554a85909e",
              ref: y,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${x}px`
              },
              children: d.map((e => (0, c.createElement)(Xs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !h ? -1 : 0
              })))
            })]
          }) : (0, p.jsx)(Xs, {
            text: s,
            target: t,
            href: r,
            location: o,
            ga: i,
            hasNotifications: n,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: h ? 0 : -1,
            reloadDocument: f
          })
        },
        Ys = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: s,
            windowHeight: t
          } = (0, D.useWindowResize)(), r = (0, n.useIntl)(), {
            languageSelectorOpened: o,
            setLanguageSelectorOpened: i,
            activeSubNavId: l,
            setActiveSubNavId: d,
            subNavExtraHeight: u,
            setSubNavExtraHeight: g
          } = Fs(), {
            setSelectedCharacterTuple: f,
            navOpen: _
          } = (0, R.useRockstarUserState)(), k = (0, D.useLocale)(), v = (0, D.toScLocaleString)(k), [b, h] = (0, c.useState)(""), y = (0, m.useLocation)(), x = `${a.login}?returnUrl=${b}&lang=${v}`, j = `${a.signup}&returnUrl=${b}&lang=${v}`, N = (0, c.useMemo)((() => (0, fa.c)()), []), w = (0, c.useMemo)((() => {
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
            }, qs(e)])(r, x, j);
            return e
          }), [r, x, j, N]), [S, C] = (0, c.useState)(0), I = (0, c.createRef)(), T = () => {
            if (I.current) {
              const {
                current: e
              } = I, a = e?.scrollHeight, s = window.getComputedStyle(e);
              if (s) {
                let e = 16 * parseInt(s.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, c.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            h(e)
          }), [y]), (0, c.useEffect)((() => {
            f(!1)
          }), []), (0, c.useEffect)((() => {
            T(), Us()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [s, t]), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("nav", {
              className: "rockstargames-modules-core-videoplayerb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayerc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${u+S}px`
                },
                children: w.map((e => (0, c.createElement)(Ks, {
                  ...e,
                  activeSubNavId: l,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: g,
                  key: e.text
                })))
              })
            }), (0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayera6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: _ ? null : "hidden"
              },
              children: (0, p.jsx)(Hs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: o,
                setLanguageSelectorOpened: e => {
                  d(-1), i(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Zs = e => {
          let {
            characterData: a,
            setMobileCardWidth: t,
            tabIndex: r
          } = e;
          const o = (0, n.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: l
            } = (0, R.useRockstarUserState)(),
            {
              track: d
            } = (0, R.useGtmTrack)(),
            m = (0, c.createRef)(),
            {
              platform: u,
              platformUsername: g,
              mugshotUrl: f,
              stats: _
            } = a,
            [k, v] = (0, c.useState)(f),
            [b] = (0, c.useState)(a.index),
            h = ws(u, "large"),
            y = i === a.index;
          return (0, c.useEffect)((() => {
            m.current && t && t(m?.current?.offsetWidth)
          }), [m]), (0, p.jsxs)("button", {
            className: "rockstargames-modules-core-videoplayerd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": y,
            onClick: e => {
              e.stopPropagation(), l(b);
              let a = "";
              "pc" === u ? a = "PC" : "ps4" === u ? a = "PS4" : "ps5" === u ? a = "PS5" : "xboxone" === u ? a = "Xbox One" : "xboxsx" === u && (a = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: b
              })
            },
            ref: m,
            tabIndex: r,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, p.jsx)("img", {
                src: k,
                alt: o.formatMessage(Cs.profile_selector_mugshot, {
                  userName: g
                }),
                onError: () => {
                  v(s(71084))
                }
              })
            }), (0, p.jsxs)("div", {
              className: "rockstargames-modules-core-videoplayerc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, p.jsxs)("div", {
                className: "rockstargames-modules-core-videoplayere9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, p.jsx)("img", {
                  src: h.src,
                  alt: h.alt
                }), (0, p.jsx)("div", {
                  className: "rockstargames-modules-core-videoplayerb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: g
                })]
              }), (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayera5e3df42966a50f3dd88bbcb57536617",
                children: (0, p.jsxs)("div", {
                  className: "rockstargames-modules-core-videoplayera6776312350028898320ba59145a39be",
                  children: [(0, p.jsx)("img", {
                    className: "rockstargames-modules-core-videoplayerb266652910ad34c0e8e097b212a958f0",
                    src: Ss(_.overview.rank.value),
                    alt: o.formatMessage(Cs.profile_selector_rp_icon)
                  }), (0, p.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Qs = {
          pillBtn: "rockstargames-modules-core-videoplayerd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-videoplayerbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-videoplayerb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-videoplayerc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-videoplayera8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-videoplayerc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-videoplayerda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-videoplayerd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-videoplayerd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-videoplayerb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-videoplayera581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-videoplayerbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-videoplayerdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-videoplayerb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-videoplayerf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-videoplayerf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-videoplayerb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-videoplayerec696aafed90a7a4c69dc53da0a5bb36"
        },
        Js = e => {
          let {
            character: a,
            platformTag: t
          } = e;
          const {
            data: r
          } = (0, R.useRockstarUser)(), {
            track: o
          } = (0, R.useGtmTrack)(), i = (0, n.useIntl)(), [l, d] = (0, c.useState)([]), [m, u] = (0, c.useState)(null), [g, f] = (0, c.useState)(null), [_, k] = (0, c.useState)(!1), [v, b] = (0, c.useState)(-1), [h, y] = (0, c.useState)([]), [x, j] = (0, c.useState)(0), N = s(71084), [w, S] = (0, c.useState)("0"), [C, I] = (0, c.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, p.jsx)("img", {
              src: N,
              alt: i.formatMessage(Cs.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [L, E] = (0, c.useState)((0, p.jsx)("img", {
            className: Qs.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(Cs.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: M
          }));
          (0, c.useEffect)((() => {
            d(r.crews ?? [])
          }), [r]), (0, c.useEffect)((() => {
            E((0, p.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: M
            })), S(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), j(parseInt(a.stats.overview.rank.value))
          }), [a, r]), (0, c.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), f(e.crewColour), b(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [l]), (0, c.useEffect)((() => {
            const e = [];
            if (!_ && v > -1)
              for (let a = 5; a > v; a -= 1) e.push((0, p.jsx)("div", {
                className: Qs.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== g ? g : ""
                }
              }, `crewrankbar-${a}`));
            y(e)
          }), [v, _, g]);
          const z = e => {
            e.stopPropagation(), o({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: t.alt,
              link_url: void 0
            })
          };
          return (0, p.jsxs)("div", {
            className: Qs.scProfileDetails,
            onClick: z,
            onKeyUp: z,
            role: "button",
            tabIndex: -1,
            children: [(0, p.jsxs)("div", {
              className: Qs.scAvatar,
              children: [L, (0, p.jsx)("div", {
                className: Qs.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, p.jsx)("img", {
                  src: t.src,
                  alt: t.alt
                })
              })]
            }), (0, p.jsxs)("div", {
              className: Qs.scProfileStats,
              children: [(0, p.jsx)("div", {
                className: Qs.scNames,
                children: (0, p.jsxs)("div", {
                  className: Qs.scTagsNames,
                  children: [(0, p.jsx)("span", {
                    className: Qs.scUserName,
                    children: a.platformUsername
                  }), m && (0, p.jsxs)("span", {
                    className: Qs.scCrewName,
                    "data-arrow-tag": _,
                    children: [m, !_ && (0, p.jsx)("div", {
                      className: Qs.scCrewRankBar,
                      children: h
                    })]
                  })]
                })
              }), (0, p.jsxs)("div", {
                className: Qs.scProgress,
                children: [(0, p.jsxs)("div", {
                  className: Qs.scRpLevel,
                  children: [(0, p.jsx)("img", {
                    className: Qs.scRpIcon,
                    src: Ss(x),
                    alt: i.formatMessage(Cs.profile_selector_rp_icon)
                  }), (0, p.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, p.jsxs)("div", {
                  className: Qs.scMoney,
                  children: [(0, p.jsxs)("span", {
                    className: Qs.scCash,
                    children: ["$", C]
                  }), (0, p.jsxs)("span", {
                    className: Qs.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        et = (e, a) => {
          const [s, t] = (0, c.useState)(0);
          return (0, c.useEffect)((() => {
            if (e.current) {
              const {
                current: s
              } = e, r = s.getBoundingClientRect(), {
                width: o
              } = r;
              let i = o;
              if (!0 === a) {
                const e = window.getComputedStyle(s);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              t(i)
            }
          }), [e]), s
        },
        at = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: s = 1e3,
            mobileGutterWidth: t = 17,
            slideChangeCallback: r = null,
            slideClickCallback: o = null,
            children: i = [],
            disablePager: n = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, c.createRef)(),
            m = et(d, !1),
            [u, g] = (0, c.useState)(!1),
            [f, _] = (0, c.useState)(0),
            [k, v] = (0, c.useState)(0),
            [b, h] = (0, c.useState)([t]),
            [y, x] = (0, c.useState)(b[0]),
            [j, N] = (0, c.useState)(252),
            [w, S] = (0, c.useState)(0),
            [C, I] = (0, c.useState)([]),
            [T, M] = (0, c.useState)([]),
            [L, E] = (0, c.useState)(!1),
            z = e => {
              if (!0 === u || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              v(a)
            },
            B = e => {
              if (!0 === u || 0 === k || !0 === l) return;
              const s = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                t = s > k ? 1 : -1,
                o = Math.abs(k - s);
              o > a ? (t > 0 ? (() => {
                if (!0 === u) return;
                g(!0);
                const e = f - 1 < 0 ? 0 : f - 1;
                _(e), x(b[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                g(!0);
                let e = f + 1 >= b.length ? b.length - 1 : f + 1;
                e < 0 && (e = 0), _(e), x(b[e]), r && r(e)
              })(), v(0)) : x(b[f] + o * t)
            },
            P = () => {
              !0 !== u && !0 !== l && (g(!0), !0 !== u && (x(b[f]), v(0)))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, c.createRef)())
            })), I(e)
          }), [i]), (0, c.useEffect)((() => {
            if (C.length < 1) return;
            N(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              s = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(s + a)
          }), [C]), (0, c.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              g(!1)
            }), s)
          }), [u, s]), (0, c.useEffect)((() => {
            h(i.map(((e, a) => (e => {
              let a = 0;
              const s = i.length;
              return 1 === s ? .5 * m - .5 * j - 2 * t + w : (0 === e && (a = t - e * j), e === s - 1 && s > 1 && (a = s * j * -1 + (m - (t - w))), e > 0 && e < s - 1 && (a = e * j * -1 + (.5 * m - .5 * j + .5 * w)), a)
            })(a)))), 1 === i.length ? E(!0) : E(!1)
          }), [d.current, i, m]), (0, c.useEffect)((() => {
            const e = (a = f, i.map(((e, s) => {
              const t = {
                active: !1
              };
              return s === a && (t.active = !0), t
            })));
            var a;
            M(e)
          }), [i, f]), (0, c.useEffect)((() => {
            !0 !== n && !0 !== l || x(b[0])
          }), [l, n, b]), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: z,
              onTouchMove: B,
              onTouchEnd: P,
              onMouseDown: z,
              onMouseMove: B,
              onMouseUp: P,
              onClick: () => {
                null !== o && o(f)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayera93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${y}px)`
                },
                children: i.map(((e, a) => (0, p.jsx)("div", {
                  className: "rockstargames-modules-core-videoplayerc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === n && (0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayerda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayerfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        st = {
          pillBtn: "rockstargames-modules-core-videoplayeraa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-videoplayerd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-videoplayerdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-videoplayerc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-videoplayera4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-videoplayerb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-videoplayera1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-videoplayera326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-videoplayerd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-videoplayerbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-videoplayera7f1e2d78519eaf099bd43c6ad07abc9"
        },
        tt = (0, D.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: s,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: o,
            longCharList: i,
            setLongCharList: l,
            isMobileMode: d,
            setIsMobileMode: u
          } = e;
          const {
            windowWidth: g,
            windowHeight: f
          } = (0, D.useWindowResize)(), _ = (0, n.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: b,
            activeSubNavId: h,
            setActiveSubNavId: y,
            subNavExtraHeight: x,
            setSubNavExtraHeight: j,
            scNavOpened: N,
            setScNavOpened: w
          } = Fs(), [S, C] = (0, c.useState)(""), I = (0, m.useLocation)(), {
            lsSettings: T
          } = (0, D.useRockstarWebLSSettings)(), {
            track: M
          } = (0, R.useGtmTrack)(), L = (0, k.useRockstarTokenPing)(), {
            data: E,
            loggedIn: z
          } = (0, R.useRockstarUser)(), {
            charactersNeeded: B,
            currentCharId: P,
            hasNotifications: V,
            navOpen: A,
            setCurrentCharId: $,
            setHasNotifications: O,
            setSelectedCharacterTuple: F,
            setUserData: G
          } = (0, R.useRockstarUserState)(), [U, H] = (0, c.useState)(null), [W, q] = (0, c.useState)(null), [X, K] = (0, c.useState)(!1), [Y, Z] = (0, c.useState)(!1), [Q, J] = (0, c.useState)(0), ee = (0, c.createRef)(), ae = et(ee, !1), se = (0, c.createRef)(), [te, re] = (0, c.useState)(0), [oe, ie] = (0, c.useState)([]), [ce, ne] = (0, c.useState)(244), le = (0, c.useRef)(null), de = (0, c.useMemo)((() => (0, fa.c)()), []), me = (0, c.useMemo)((() => ((e, a, s, t, r) => [{
            text: e.formatMessage(Cs.sc_link_activity_feed),
            location: {
              domain: fa.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ws,
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
                domain: fa.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_view_my_profile),
              href: s.profile_link,
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Cs.sc_link_messages),
              location: {
                domain: fa.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Cs.sc_link_game_activation),
              location: {
                domain: fa.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Cs.sc_link_notifications),
            location: {
              domain: fa.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: t,
            ga: {
              ...Ws,
              text: Cs.sc_link_notifications.defaultMessage,
              location: {
                domain: fa.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Cs.sc_link_crews),
            location: {
              domain: fa.U.socialClub,
              path: `/member/${s.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Ws,
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
                domain: fa.U.socialClub,
                path: `/member/${s.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_import_friends),
              location: {
                domain: fa.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Cs.sc_link_find_friends),
              location: {
                domain: fa.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Ws,
                text: Cs.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, qs(e), {
            text: e.formatMessage(Cs.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Ws,
              text: Cs.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, E, V, S, window)), [_, a, E, V, S, de]), ue = () => {
            Z(o + ce * Q < ae)
          }, pe = () => {
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
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === fa.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, c.useEffect)((() => {
            ie(E.characters[B] ?? [])
          }), [E, B]), (0, c.useEffect)((() => {
            E && G(E)
          }), [E]), (0, c.useEffect)((() => {
            const e = E?.characters.gtao;
            if (null !== z && !e.length) return void F(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            F(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, E, z]), (0, c.useEffect)((() => {
            (async () => {
              if (!E?.id) return;
              const {
                count: e
              } = await (0, D.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              O(e > 0)
            })()
          }), [E]), (0, c.useEffect)((() => {
            ue()
          }), [ce]), (0, c.useEffect)((() => {
            t(!0), u(g < 768), u(g < 768 || f < 649)
          }), [g, f]), (0, c.useEffect)((() => {
            let e = oe.length - 1;
            e < 0 && (e = 0), J(e);
            const a = oe.length > 0 ? oe[P] ?? oe[0] : null;
            if (!a) return;
            const s = null !== a ? ws(a.platform, "large") : null;
            q(s), H(a), oe.length > 1 ? K(!0) : K(!1), l(oe.length - 1 > 3)
          }), [P, oe]), (0, c.useEffect)((() => {
            ue()
          }), [Q, d, g, oe]), (0, c.useEffect)((() => {
            pe(), Us()((() => {
              setTimeout(pe, 0)
            }), 300)
          }), [g, f]), (0, c.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== P && $(Math.max(0, Math.min(e, oe.length - 1)))
          }), [oe, T]), (0, p.jsxs)(p.Fragment, {
            children: [null !== U && "gtao" === B && (0, p.jsxs)("div", {
              className: st.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": _.formatMessage(Cs.profile_selector_profile_card),
              children: [(0, p.jsx)(Js, {
                s: st,
                character: U,
                platformTag: W
              }), !0 === X && (0, p.jsxs)("div", {
                className: st.scCharacterSelector,
                children: [(0, p.jsx)("button", {
                  className: st.scCharacterSelectBtn,
                  "aria-hidden": !A,
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
                  children: (0, p.jsx)("span", {
                    children: (0, p.jsx)(n.FormattedMessage, {
                      ...Cs.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, p.jsx)("div", {
                  className: st.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": s,
                  ref: r,
                  children: oe.map((e => (0, p.jsx)(Zs, {
                    tabIndex: s ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ne
                  }, e.mugshotUrl)))
                }), !0 === d && (0, p.jsx)("div", {
                  className: st.scCharacterList,
                  "data-single-item": 2 === oe.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": s,
                  ref: ee,
                  children: (0, p.jsx)(at, {
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
                    disablePager: Y,
                    disableSwiper: Y,
                    children: oe.filter(((e, a) => a !== P)).map((e => (0, c.createElement)(Zs, {
                      characterData: e,
                      setMobileCardWidth: ne,
                      key: e.mugshotUrl,
                      tabIndex: s ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, p.jsxs)("nav", {
              className: st.scNav,
              "aria-hidden": !A,
              children: [(0, p.jsx)("button", {
                className: st.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": A,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, p.jsx)("span", {
                  children: E.nickname
                })
              }), (0, p.jsx)("div", {
                className: st.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: se,
                style: {
                  "--scNavWrap-max-height": `${te+x}px`
                },
                children: me.map(((e, a) => (0, c.createElement)(Ks, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: j,
                  key: e.text
                })))
              })]
            }), (0, p.jsx)("div", {
              className: st.scLanguageSelector,
              style: {
                visibility: A ? null : "hidden"
              },
              children: (0, p.jsx)(Hs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        rt = {
          scMenu: "rockstargames-modules-core-videoplayerebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-videoplayerf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-videoplayere3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-videoplayerff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-videoplayerba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-videoplayerd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-videoplayerd8e443f5d0d9171449f5f1042f80aa17"
        },
        ot = (0, n.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, D.useWindowResize)(), a = (0, n.useIntl)(), {
            languageSelectorOpened: t,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: o,
            scNavOpened: i,
            setScNavOpened: l,
            charListHidden: d,
            setCharListHidden: m
          } = Fs(), [u, g] = (0, c.useState)(!1), {
            navHidden: f = !1
          } = (0, k.useState)(), {
            loggedIn: _
          } = (0, R.useRockstarUser)(), {
            currentCharId: v,
            navOpen: b,
            setNavOpen: h,
            userData: y
          } = (0, R.useRockstarUserState)(), {
            track: x
          } = (0, R.useGtmTrack)(), [j, N] = (0, c.useState)(!1), w = (0, k.useReactiveVar)(R.scConfig), S = (0, c.useRef)(), [C, I] = (0, c.useState)(0), T = (0, c.createRef)(), [M, L] = (0, c.useState)(!1), [E, z] = (0, c.useState)(0), [B, P] = (0, c.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: A
          } = (0, D.useRockstarWebLSSettings)(), $ = (0, c.useCallback)((e => {
            m(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, c.useEffect)((() => {
            null !== v && A.currentCharId !== v && V({
              key: "currentCharId",
              value: v
            }), !1 === _ ? V({
              key: "currentCharId",
              value: null
            }) : _ && !y && x({
              event: "account_synced"
            })
          }), [v, _]), (0, c.useEffect)((() => {
            S.current && (!1 === d && !1 === j && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === d && (S.current.style.height = null))
          }), [d, S, j]), (0, c.useEffect)((() => {
            const e = () => {
                h(!1), $(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, c.useEffect)((() => {
            h(!1), $(!0)
          }), [f]), (0, c.useEffect)((() => {
            if (T.current) {
              const {
                current: e
              } = T, a = window.getComputedStyle(e);
              I(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [T]), (0, c.useEffect)((() => {
            P(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            T.current && g(T?.current?.scrollHeight >= e)
          }), [T, e]), (0, c.useEffect)((() => {
            b || (o(-1), r(!1))
          }), [b]), (0, c.useEffect)((() => {
            t && (d || $(!0), i && (l(!1), o(-1)))
          }), [t]), (0, c.useEffect)((() => {
            i && (t && r(!1), d || $(!0))
          }), [i]), null === _ ? null : (0, p.jsxs)(Ms.c, {
            enabled: !!b,
            removeScrollBar: !1,
            children: [(0, p.jsxs)("div", {
              className: [rt.scMenu, b ? rt.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": B,
              "data-scroll-mode": u,
              ref: T,
              "aria-hidden": !b,
              children: [(0, p.jsx)("button", {
                className: rt.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === E) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(E - a) > 1 && (z(0), h(!1))
                },
                children: (0, p.jsx)("img", {
                  className: rt.dragHandle,
                  src: s(82708),
                  alt: a.formatMessage(Cs.sc_menu_drag_handle)
                })
              }), _ ? (0, p.jsx)(tt, {
                sc: w,
                charListHidden: d,
                hideCharacterList: $,
                refCharacterListDesktop: S,
                menuPadding: C,
                longCharList: j,
                setLongCharList: N,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, p.jsx)(Ys, {
                sc: w,
                navOpen: b
              })]
            }), (0, p.jsx)("div", {
              className: [rt.scOverlay, b ? rt.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), l),
        it = s(71084),
        ct = s(29314),
        nt = (0, n.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const s = (0, n.useIntl)(),
            {
              data: t
            } = (0, R.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: o,
              navOpen: i,
              setNavOpen: l
            } = (0, R.useRockstarUserState)(),
            {
              track: d
            } = (0, R.useGtmTrack)(),
            [m, u] = (0, c.useState)(null),
            [g, f] = (0, c.useState)(!1),
            [_, k] = (0, c.useState)(null),
            [v, b] = (0, c.useState)(!1),
            [h, y] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            y(t.characters[r] ?? [])
          }), [t, r]);
          const x = (0, c.useCallback)((e => {
            e.stopPropagation(), l(!i), 1 == !i && a(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: i ? "close" : "open"
            })
          }), [i]);
          return (0, c.useEffect)((() => {
            const e = t?.id ?? !1,
              a = e ? (h?.[o]?.mugshotUrl ?? t?.avatar) || it : ct,
              s = ws(h?.[o]?.platform, "small") ?? null;
            k(s), u(a), f(e), b(!!h?.[o]?.mugshotUrl)
          }), [t, h, o, it, ct]), (0, p.jsxs)("button", {
            className: "rockstargames-modules-core-videoplayerdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": v,
            "aria-label": s.formatMessage(i ? Cs.sc_menu_close : Cs.sc_menu_open),
            "aria-expanded": i,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            children: [(0, p.jsx)("img", {
              className: "rockstargames-modules-core-videoplayerce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                u(it)
              },
              alt: t?.nickname || ""
            }), g && null !== _ && (0, p.jsx)("img", {
              className: "rockstargames-modules-core-videoplayeraaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), g && (0, p.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-videoplayercf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": h?.[o]?.platform ?? null
            })]
          })
        }), l),
        lt = {
          pillBtn: "rockstargames-modules-core-videoplayerb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-core-videoplayerfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-core-videoplayera586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-core-videoplayerccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-core-videoplayere4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-core-videoplayerd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-core-videoplayere56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-core-videoplayerc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-core-videoplayerbf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-modules-core-videoplayerf6d46a24b050aad98fc3aae387b75586"
        },
        dt = e => {
          let {
            backgroundColor: a,
            brands: s = [],
            description: t = "",
            ctaLabel: r,
            ctaLink: o = "https://rockstargames.com",
            gradient: i = !0,
            image: n,
            imageOrientation: l = "right",
            title: d = "",
            name: m = ""
          } = e;
          const [u, g] = (0, c.useState)(!1), {
            ref: f,
            inView: _
          } = (0, W.useInView)({
            threshold: .6
          }), {
            track: k
          } = (0, R.useGtmTrack)(), v = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,I.useGetCdnSource)(n)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            _ && !u && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: m
            }), g(!0))
          }), [_]), (0, p.jsx)(p.Fragment, {
            children: (0, p.jsx)("div", {
              className: lt.promoModuleWrapper,
              children: (0, p.jsxs)(De.q.div, {
                className: lt.promoModule,
                style: {
                  ...v
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
                ref: f,
                children: [(0, p.jsx)("div", {
                  className: [lt.promoModuleImage, i ? lt.gradient : "", "left" === l ? lt.left : lt.right].join(" ")
                }), (0, p.jsxs)("div", {
                  className: lt.promoModuleContentContainer,
                  children: [(0, p.jsx)(w, {
                    brands: s,
                    className: lt.promoModuleBrands
                  }), (0, p.jsxs)("div", {
                    className: lt.promoModuleTextContent,
                    children: [d && (0, p.jsx)("h3", {
                      children: d
                    }), t && (0, p.jsx)("p", {
                      children: t
                    })]
                  }), r && (0, p.jsx)(E, {
                    to: o,
                    text: r,
                    onClick: () => {
                      k({
                        event: "cta_other",
                        event_category: "cta",
                        event_action: "other",
                        event_label: r,
                        element_placement: "promo module",
                        link_url: o,
                        text: r
                      })
                    }
                  })]
                })]
              })
            })
          })
        };
      var mt = s(1532);
      const ut = {
          rating: "rockstargames-modules-core-videoplayera1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-core-videoplayercba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-core-videoplayerff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-core-videoplayerd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        pt = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, D.importAll)(s(52884));
      const gt = ta((0, n.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: t = null,
            href: r,
            img: o = null,
            titleSlug: i = null,
            style: l = {},
            className: d
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            inView: f
          } = (0, W.useInView)({
            threshold: .6
          }), [_, v] = (0, c.useState)({
            img_rating: o,
            rating_descriptors: a,
            rating_footer: t,
            url_rating: r
          }), {
            track: b
          } = (0, R.useGtmTrack)(), h = (0, n.useIntl)(), {
            data: y
          } = (0, k.useQuery)(mt.GameData, {
            variables: {
              titleSlug: i
            },
            skip: !i
          });
          if ((0, c.useEffect)((() => {
              y && v(y?.game)
            }), [y]), (0, c.useEffect)((() => {
              f && !m && _.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), u(!0))
            }), [f]), !_.img_rating) return null;
          const x = !!_.rating_descriptors;
          return (0, p.jsxs)("div", {
            className: [ut.rating, x ? ut.withDescriptors : ut.withOutDescriptors, d || ""].join(" "),
            style: (0, D.safeStyles)(l),
            children: [(0, p.jsx)(g, {
              to: _.url_rating,
              target: "_blank",
              children: (0, p.jsx)("img", {
                alt: h.formatMessage(pt.components_ratings_link_alt, {
                  rating: (j = _.img_rating, j.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(7e4)(`./${_.img_rating}`)
              })
            }), x && (0, p.jsxs)("div", {
              className: ut.text,
              children: [(0, p.jsx)("p", {
                className: ut.descriptors,
                dangerouslySetInnerHTML: {
                  __html: _?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), _.rating_footer && (0, p.jsx)("hr", {}), _.rating_footer && (0, p.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: _.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var j
        }), l)),
        ft = {
          responsiveFlexBox: "rockstargames-modules-core-videoplayercef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-core-videoplayera8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-core-videoplayerbee8268780b292e5bc0da0b497e2c28f"
        },
        _t = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, p.jsx)("div", {
            className: [ft.responsiveFlexBox, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        kt = {
          responsiveFlexItem: "rockstargames-modules-core-videoplayerae579f6183cf73c897e68c8aae5c9d9d"
        },
        vt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, p.jsx)("div", {
            className: [kt.responsiveFlexItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        bt = {
          responsiveGridBox: "rockstargames-modules-core-videoplayera28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-core-videoplayerbeddf36313a28976090b5a8b04d2594a"
        },
        ht = e => {
          let {
            children: a,
            cols: s,
            className: t,
            rows: r,
            style: o
          } = e;
          const i = o ? {
            ...o
          } : {};
          return void 0 !== s && (i.gridTemplateColumns = `repeat(${s}, 1fr)`), void 0 !== r && (i.gridTemplateRows = `repeat(${r}, 1fr)`), (0, p.jsx)("div", {
            className: [bt.responsiveGridBox, void 0 !== t ? t : ""].join(" "),
            style: i,
            children: a
          })
        },
        yt = {
          responsiveGridBox: "rockstargames-modules-core-videoplayera39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-core-videoplayerbe7a0966e2f0457c1172ac9da99020c6"
        },
        xt = e => {
          let {
            children: a,
            className: s,
            style: t
          } = e;
          return (0, p.jsx)("div", {
            className: [yt.responsiveGridItem, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: a
          })
        },
        jt = {
          responsiveImage: "rockstargames-modules-core-videoplayere31b43dce2e720669fb90bf539d22197"
        },
        Nt = e => {
          let {
            src: a,
            className: s = "",
            animate: t,
            ariaLabel: r,
            style: o = {}
          } = e;
          const [i, c] = (0, D.usePreloadImg)(a);
          return i ? (o.backgroundImage = `url(${a})`, (0, p.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [jt.responsiveImage, t ? jt.animateBox : "", s].join(" "),
            style: {
              ...o,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        wt = {
          responsiveSection: "rockstargames-modules-core-videoplayerfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-core-videoplayerbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        St = e => {
          let {
            children: a,
            className: s,
            style: t,
            maxWidth: r
          } = e;
          return (0, p.jsx)("section", {
            className: [wt.responsiveSection, void 0 !== s ? s : ""].join(" "),
            style: t,
            children: r ? (0, p.jsx)("div", {
              className: wt.maxWidth,
              children: a
            }) : a
          })
        },
        Ct = () => (0, p.jsx)(g, {
          className: "rockstargames-modules-core-videoplayerba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        It = e => {
          let {
            thresholds: a,
            onThresholdReached: s,
            children: t
          } = e;
          const [r, o] = (0, c.useState)([]), [i, n] = (0, c.useState)(new Set);
          return (0, c.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), o(e)
          }), [a]), (0, p.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map((e => (0, p.jsx)(W.InView, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !i.has(a) && n((e => {
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
                return (0, p.jsx)("div", {
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
        Tt = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, c.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        Mt = (0, c.forwardRef)(((e, a) => {
          const {
            threshold: s,
            callback: t,
            children: r,
            requireUser: o
          } = e, {
            track: i
          } = (0, R.useGtmTrack)(o), [n, l] = (0, c.useState)(a?.current);
          return (0, c.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, s) => {
            const [t, r] = (0, c.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: o,
              scrollY: i
            } = t;
            (0, c.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, c.useEffect)((() => {
              r({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const n = (0, c.useCallback)((() => {
              const e = document.documentElement,
                i = document.body,
                c = s?.scrollTop || e.scrollTop || i.scrollTop,
                l = s?.scrollHeight || e.scrollHeight || i.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = c / (l - d) * 100;
              if (o) {
                const e = Math.min(...o, l);
                if (m >= e) {
                  const t = o.filter((a => a !== e));
                  0 === t.length && (s ?? window).removeEventListener("scroll", n), a && a({
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
            }), [o, s, a]);
            (0, c.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = s ?? window;
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }), [n])
          })(s, (e => {
            let {
              scrollY: a
            } = e;
            i({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof t && t(a)
          }), n), r
        }));
      Mt.displayName = "ScrollTracker";
      const Lt = Mt,
        Et = (0, D.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s] = (0, c.useState)(""), t = (0, m.useNavigate)(), r = (0, k.useMutateState)();
          return (0, p.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-videoplayerb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur(), t(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, p.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, p.jsx)("input", {
              autoComplete: "off",
              defaultValue: s,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        zt = {
          skeleton: "rockstargames-modules-core-videoplayerf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-core-videoplayere00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-core-videoplayerdb0b80177710d337d93bddb97b8a7dea"
        },
        Bt = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, p.jsx)("div", {
            className: [zt.skeleton, zt[a]].join(" ")
          }) : null
        },
        Pt = (0, n.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Vt = {
          bodySmall: "rockstargames-modules-core-videoplayerc048aacaedc7fb642f38c7f163c193e3"
        },
        At = e => {
          let {
            track: a,
            artist: s
          } = e;
          return (0, p.jsxs)("div", {
            className: Vt.track,
            children: [(0, p.jsx)("p", {
              children: a
            }), (0, p.jsx)("p", {
              className: Vt.bodySmall,
              children: s
            })]
          })
        },
        $t = (0, n.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, p.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayere6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, p.jsx)("h4", {
              className: "rockstargames-modules-core-videoplayercd3895fbae93ba04f1401487f6e6eddf",
              children: (0, p.jsx)(n.FormattedMessage, {
                ...Pt.components_track_list_title
              })
            }), (0, p.jsx)("div", {
              className: "rockstargames-modules-core-videoplayeref0cde8b15ded961605237d0e8328a9b",
              children: (0, p.jsx)("div", {
                className: "rockstargames-modules-core-videoplayerbdd54186db17d27b3daebc4b9d58e09a",
                children: c.Children.map(c.Children.toArray(a), (e => (0, p.jsx)(At, {
                  ...e?.props
                })))
              })
            })]
          })
        }), l),
        Ot = "rockstargames-modules-core-videoplayereca98eb0b5b84a0c9a2e6d952545a2d5",
        Dt = "rockstargames-modules-core-videoplayerd3d0b4ecd3bddba96c73f49fcca34ed8",
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
        Ft = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: s = 3,
            loop: t = !1,
            navigation: r = !1,
            slideChildren: o = [],
            variants: i = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: n = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, R.useGtmTrack)(), [d, m] = (0, c.useState)([Je.O4, Je.Hj, Je.eM]), [u, g] = (0, c.useState)(null), [f, _] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [Je.O4, Je.Hj, Je.eM];
            r && e.push(Je._2), m(e)
          }), [r]), (0, c.useEffect)((() => {
            if (!o) return;
            const e = o.map(((e, a) => (0, p.jsx)(B.Ky, {
              children: e
            }, Symbol(a).toString())));
            _(e)
          }), [o]), f ? (0, p.jsxs)(De.q.div, {
            className: "rockstargames-modules-core-videoplayerd4f245838b94234f21463a08a8112910",
            variants: i.parent,
            transition: n.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, p.jsx)(De.q.div, {
              className: Ot,
              variants: i.main,
              transition: n.main,
              initial: "initial",
              animate: "animate",
              children: (0, p.jsx)(B.wx, {
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
                children: f
              })
            }), (0, p.jsx)(De.q.div, {
              className: Dt,
              variants: i.thumbs,
              transition: n.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, p.jsx)(B.wx, {
                threshold: 50,
                onSwiper: g,
                loop: t,
                breakpoints: Rt,
                slidesPerView: s,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Dt,
                children: f
              })
            })]
          }) : null
        };
      var Gt = s(504);
      const Ut = e => {
          let {
            id: a = null,
            ids: s = null,
            setTitleDataPath: t = null,
            sync: r = !1
          } = e;
          const o = s ?? [a],
            {
              data: i
            } = (0, k.useQuery)(Gt.TinaModulesInfo, {
              variables: {
                ids: o,
                sync: r
              },
              setTitleDataPath: t,
              skip: !o.length
            });
          return i?.tinaModulesInfo ?? null
        },
        Ht = ta((e => {
          let {
            components: a = {},
            id: s = null,
            ids: t = null,
            skeleton: r
          } = e;
          const o = Ut({
            id: s,
            ids: t
          });
          if (!o) return (0, p.jsx)(Bt, {
            skeleton: r
          });
          const i = o?.[0]?.tina;
          return i ? (0, p.jsx)(p.Fragment, {
            children: o.map(((e, s) => {
              let {
                tina: t
              } = e;
              return (0, p.jsx)(I.TinaParser, {
                components: a,
                tina: t,
                componentProps: {
                  tinaModulesInfo: o
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
          const [r, o] = (0, c.useState)(t);
          return (0, c.useEffect)((() => {
            t && o(t)
          }), [t]), (0, p.jsx)("div", {
            className: "rockstargames-modules-core-videoplayera3cc68ab0d512c3d8835ee9abb7a51c4",
            style: s,
            "data-theme": r,
            children: a
          })
        };
      var qt = s(19168);
      const Xt = {
          pillBtn: "rockstargames-modules-core-videoplayerae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-core-videoplayerd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-core-videoplayerfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-core-videoplayerdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-core-videoplayereb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-core-videoplayerd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-core-videoplayerfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-core-videoplayerabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-core-videoplayerea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-core-videoplayerc31731d09d8118c6a82fe6edb193dc50"
        },
        Kt = e => {
          let {
            description: a,
            foreign_id: s = document.location.pathname,
            foreign_type: t = "url",
            title: r
          } = e;
          const {
            track: o
          } = (0, R.useGtmTrack)(), {
            loggedIn: i
          } = (0, R.useRockstarUser)(), {
            refetch: n
          } = (0, k.useQuery)(qt.UserGetVote, {
            skip: !0
          }), [l] = (0, k.useMutation)(qt.UserCastVote), [d, m] = (0, c.useState)(null), u = (0, c.useCallback)((async e => {
            o({
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
          return (0, c.useEffect)((() => {
            (async () => {
              if (!i || !s || !t) return;
              const e = await n({
                foreign_id: s,
                foreign_type: t
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [s, t, i]), (0, p.jsx)("div", {
            className: Xt.userVote,
            children: (0, p.jsxs)("div", {
              className: Xt.voteContent,
              children: [(0, p.jsxs)("div", {
                className: Xt.info,
                children: [(0, p.jsx)("h3", {
                  children: r
                }), (0, p.jsx)("p", {
                  children: a
                })]
              }), (0, p.jsxs)("div", {
                className: [Xt.voteButtons, i ? "" : Xt.loggedOutButtons].join(" "),
                children: [(0, p.jsx)("button", {
                  onClick: () => u(!0),
                  className: [Xt.upVote, d ? Xt.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, p.jsx)("button", {
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
          carousel: "rockstargames-modules-core-videoplayerd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-core-videoplayera3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-core-videoplayerf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-core-videoplayerd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-core-videoplayera879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-core-videoplayerb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-core-videoplayerc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-core-videoplayere25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-core-videoplayerdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-core-videoplayerb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-core-videoplayerdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-core-videoplayera7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-core-videoplayere1d7433489996eb9fa890d452ebcb042"
        },
        Zt = (0, D.withLocale)((e => {
          let {
            locale: a,
            t: s,
            videos: t
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)(), {
            setBodyIsLocked: o
          } = (0, D.useBodyScrollable)("VideoCarousel"), [i, n] = (0, c.useState)(0), [l, d] = (0, c.useState)(0), m = (0, c.useRef)(null), u = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!m.current || !u.current) return;
            const e = new(_())(m.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              s = () => {
                n(i - 1 < 0 ? 0 : i - 1), d(0)
              },
              r = () => {
                const e = i + 1 >= t.length - 1 ? t.length - 1 : i + 1;
                n(e), d(0)
              },
              c = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !u.current?.classList.contains(Yt.dragging) || a() && o(!0)
              },
              l = () => {
                a() && o(!1), d(0)
              },
              p = e => {
                "press" === e.type && m.current?.classList.add(`${Yt.disableClick}`), "tap" === e.type && (m.current?.classList.remove(`${Yt.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                a() && o(!1), m.current && m.current.classList.remove(`${Yt.disableClick}`)
              },
              f = () => {
                a() && o(!1)
              };
            return u.current.addEventListener("transitionend", f), e.on("swiperight", s), e.on("swipeleft", r), e.on("pan", c), e.on("panend", l), e.on("press tap", p), e.on("pressup", g), () => {
              e.off("swiperight", s), e.off("swipeleft", r), e.off("pan", c), e.off("panend", l), e.off("press tap", p), e.off("pressup", g), u.current && u.current.removeEventListener("transitionend", f), d(0)
            }
          }), [m.current, i]), (0, p.jsxs)("section", {
            className: Yt.carousel,
            children: [(0, p.jsx)("div", {
              className: Yt.track,
              ref: m,
              children: (0, p.jsx)("div", {
                className: `${Yt.items} ${0!==l?Yt.dragging:""}`,
                ref: u,
                style: {
                  transform: `translateX(calc(-${100*i}% + ${l}px))`
                },
                children: t.map(((e, a) => (0, p.jsx)(g, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: i === a ? Yt.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: i === a ? 0 : -1,
                  children: (0, p.jsx)(nr, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, p.jsxs)("footer", {
              children: [(0, p.jsx)("div", {
                className: Yt.text,
                children: t.map(((e, t) => {
                  return (0, p.jsx)(g, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: i === t ? 0 : -1,
                    children: (0, p.jsxs)("div", {
                      className: [Yt.info, t === i ? Yt.active : ""].join(" "),
                      children: [(0, p.jsxs)("div", {
                        className: Yt.title,
                        children: [(0, p.jsx)("div", {
                          className: Yt.gameTitle,
                          children: `${e.game.title}${"fr_fr"===a?" ":""}`
                        }), (0, p.jsx)("h2", {
                          className: Yt.videoTitle,
                          children: `${e.title}`
                        })]
                      }), (0, p.jsx)(C, {
                        className: Yt.cta,
                        onClick: (o = `/videos/${e.id}`, () => {
                          r({
                            event: "cta_watch_video",
                            text: "watch now",
                            link_url: o,
                            element_placement: "video carousel"
                          })
                        }),
                        children: s("Watch Now")
                      })]
                    })
                  }, e.id);
                  var o
                }))
              }), (0, p.jsx)("div", {
                className: Yt.dots,
                children: t.map(((e, a) => (0, p.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => n(a),
                  className: i === a ? Yt.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Qt = (0, n.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Jt = {
          img: "rockstargames-modules-core-videoplayere3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-modules-core-videoplayerc3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, D.importAll)(s(18016));
      const er = e => {
          let {
            isWideCard: a = !1,
            size: t = 640,
            title: r,
            titleSlug: o
          } = e;
          const {
            isMobile: i
          } = (0, D.useWindowResize)(), n = (0, c.useMemo)((() => {
            let e = "";
            return a && (e = i ? s(72027)(`./${o}/mobile.png`) : s(83408)(`./${o}/desktop.png`)), e || (e = s(14512)(`./${o}.jpg`), e += `?im=Resize=${t}`), e
          }), [i, o]), [l] = (0, D.usePreloadImg)(n);
          return (0, p.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [Jt.img, l ? Jt.startAnimation : "", a ? Jt.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${n})`
            }
          })
        },
        ar = {
          fobLink: "rockstargames-modules-core-videoplayerfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-modules-core-videoplayera9b41f96042bda8a8c77b7b7b10f84d5"
        },
        sr = e => {
          let {
            game: a,
            to: s
          } = e;
          const {
            site_in_rockstar: t = !1,
            title_slug: r
          } = a;
          let o = r;
          "V" === r && (o = "gta-v"), "GTAOnline" === r && (o = "gta-online"), "undeadnightmare" === r && (o = "reddeadredemption");
          const i = s ?? `${t?"":"/games"}/${o}`,
            c = ["VI"].includes(r);
          return (0, p.jsx)(g, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: i,
            target: "_self",
            className: [ar.fobLink, c ? ar.wide : ""].join(" "),
            children: (0, p.jsx)(er, {
              title: a.title,
              titleSlug: r,
              isWideCard: c
            })
          })
        },
        tr = {
          videoList: "rockstargames-modules-core-videoplayera77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-core-videoplayered556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-core-videoplayerffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-core-videoplayerffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-core-videoplayercbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-modules-core-videoplayerb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-modules-core-videoplayerf3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-modules-core-videoplayerc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-core-videoplayerf30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-core-videoplayerd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-core-videoplayerc806076a1e3e23c77528ee12e32771a3"
        },
        rr = (0, n.withIntl)((e => {
          let {
            vids: a,
            games: s,
            title: t,
            gameTitleNecessary: r
          } = e;
          const o = (0, n.useIntl)(),
            {
              track: i
            } = (0, R.useGtmTrack)(),
            l = void 0 !== s ? "games" : "videos",
            [d, m] = (0, c.useState)(),
            [u, g] = (0, c.useState)(),
            [f, _] = (0, c.useState)(0),
            k = (0, c.useRef)(null),
            v = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            g({
              nextEl: v.current,
              prevEl: k.current
            })
          }), [v, k]), (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), _(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [f]);
          const b = e => {
            d?.slideTo(e)
          };
          let h;
          return h = "games" === l ? (0, p.jsx)(p.Fragment, {
            children: s.results.map(((e, a) => 666 !== e.id && (0, p.jsx)(B.Ky, {
              className: tr.slide,
              onFocus: () => b(a),
              children: (0, p.jsx)(sr, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, p.jsx)(p.Fragment, {
            children: a.map(((e, a) => (0, p.jsx)(B.Ky, {
              className: tr.slide,
              onFocus: () => b(a),
              children: (0, p.jsx)(Hs.VideoCard.Link, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, p.jsxs)("section", {
            className: tr.videoList,
            children: [(0, p.jsxs)("h3", {
              className: tr.sectionHeader,
              children: [t, (0, p.jsxs)("div", {
                className: tr.arrowNav,
                children: [(0, p.jsx)("button", {
                  className: [tr.arrow, tr.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": o.formatMessage(Qt.previous_button_label)
                }), (0, p.jsx)("button", {
                  className: [tr.arrow, tr.next].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": o.formatMessage(Qt.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, p.jsx)("div", {
              className: [tr.items, f % 1 != 0 ? tr.partial : ""].join(" "),
              children: (0, p.jsx)("div", {
                className: tr.trackWrapper,
                children: f && (0, p.jsx)(B.wx, {
                  className: tr.track,
                  slidesPerView: f,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [Je._2],
                  slideClass: (0, I.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    i({
                      event_action: "next",
                      event_category: "carousel",
                      event: "carousel_next",
                      event_label: t?.toLowerCase() ?? "",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    i({
                      event_action: "previous",
                      event_category: "carousel",
                      event: "carousel_previous",
                      event_label: t?.toLowerCase() ?? "",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    i({
                      event_action: "swipe",
                      event_category: "carousel",
                      event: "carousel_swipe",
                      event_label: t?.toLowerCase() ?? "",
                      element_placement: t?.toLowerCase() ?? ""
                    })
                  },
                  children: h
                })
              })
            })]
          })
        }), l),
        or = e => {
          let {
            children: a,
            ...s
          } = e;
          return (0, p.jsx)("span", {
            ...s,
            className: "rockstargames-modules-core-videoplayerf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: a
          })
        },
        ir = (0, D.withTranslations)((e => {
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
          const o = a?.code ?? 398,
            i = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            i && i?.current && i.current.focus()
          }), [i]), (0, p.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayerd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, p.jsx)("h3", {
              tabIndex: -1,
              ref: i,
              children: `${r} (${o})`
            }), (0, p.jsx)(g, {
              to: "/",
              children: s("Home")
            }), "clr" !== t && (0, p.jsx)(Et, {})]
          })
        })),
        cr = {
          videoPreview: "rockstargames-modules-core-videoplayerc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-core-videoplayerec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-core-videoplayerab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-core-videoplayere84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-core-videoplayera322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-core-videoplayerf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-core-videoplayerdebff452a4923aded7de826c081bab5d"
        },
        nr = e => {
          let {
            video: a,
            size: s = 640
          } = e;
          const t = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${s}` : a.screencap,
            [r] = (0, D.usePreloadImg)(t());
          return (0, p.jsx)("div", {
            className: [cr.screencap, r ? cr.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${t()}) center/cover`
            }
          })
        },
        lr = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: s = !1,
            video: t,
            size: r,
            toExplicit: o
          } = e;
          const i = o ?? `/videos/${t.id}`,
            c = {
              className: cr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            n = (0, p.jsxs)("div", {
              className: cr.card,
              children: [(0, p.jsx)(nr, {
                video: t,
                size: r
              }), (0, p.jsxs)("div", {
                className: cr.info,
                children: [a ? (0, p.jsx)("div", {
                  className: cr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: t.game.title
                  }
                }) : "", (0, p.jsx)("h5", {
                  className: cr.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            });
          return s ? (0, p.jsx)("a", {
            href: i,
            target: "_blank",
            ...c,
            children: n
          }) : (0, p.jsx)(g, {
            to: i,
            ...c,
            children: n
          })
        };
      class dr extends c.Component {
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
          return null !== this.state.error.code ? (0, p.jsx)(ir, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const mr = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(s) {
          return (0, p.jsx)(dr, {
            header: a,
            children: (0, p.jsx)(e, {
              ...s
            })
          })
        }
      };
      var ur = s(1267),
        pr = s(20688),
        gr = s(48016);
      const fr = (0, c.forwardRef)(((e, a) => {
        const {
          children: s,
          tag: t = "div"
        } = e, r = ur.m[t];
        return (0, p.jsx)(pr.O, {
          features: gr.i,
          children: (0, p.jsx)(r, {
            ref: a,
            ...e,
            children: s
          })
        })
      }));
      fr.displayName = "LiteMotion";
      const _r = fr,
        kr = {
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
        br = e => {
          let {
            children: a
          } = e;
          return (0, p.jsx)(De.q.div, Object.assign({
            className: "rockstargames-modules-core-videoplayerf0ee4e641f1ac92151be887c9ebb8392",
            variants: kr,
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
        hr = e => a => (0, p.jsx)(br, {
          children: (0, p.jsx)(e, Object.assign({}, a))
        }),
        yr = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        xr = {
          ease: "easeIn",
          duration: .75
        },
        jr = e => {
          let {
            children: a
          } = e;
          return (0, p.jsx)(De.q.div, {
            className: "rockstargames-modules-core-videoplayera479a10c5475b17a0564b60fecf98c8b",
            variants: yr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: xr,
            children: a
          })
        },
        Nr = e => a => (0, p.jsx)(jr, {
          children: (0, p.jsx)(e, {
            ...a
          })
        }),
        wr = {
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
        Sr = {
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
        Cr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Sr[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Ir = s(45164);
      const Tr = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Mr = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Lr = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Er = e => {
          let a, {
            type: s = Lr.SPINNING
          } = e;
          switch (s) {
            case Lr.THREE_DOTS:
              a = Mr;
              break;
            case Lr.SPINNING:
            default:
              a = Tr
          }
          const t = {
            loop: !0,
            autoplay: !0,
            animationData: a,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, p.jsx)(Ir.c, {
            options: t,
            height: 50,
            width: 50
          })
        }
    },
    53592: (e, a, s) => {
      "use strict";
      s.d(a, {
        U: () => t,
        c: () => o
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let e;
          const {
            location: a
          } = window, s = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), t = r.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [t, r] = a;
            return r === s && (e = {
              site: t,
              subDomain: r
            }, !0)
          })) >= 0)), o = r[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
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
        var o = t[a] || new Set,
          i = new Set,
          c = new Set;
        for (o.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var n = c;
          c = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
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

      function o(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = t[a] || new Set,
          i = new Set,
          c = new Set;
        for (o.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var n = c;
          c = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = o(a, "UserGetVote"), e.exports.UserCastVote = o(a, "UserCastVote")
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

      function o(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = t[a] || new Set,
          i = new Set,
          c = new Set;
        for (o.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var n = c;
          c = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = o(a, "TinaModulesList"), e.exports.TinaModulesInfo = o(a, "TinaModulesInfo")
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

      function o(e, a) {
        var s = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = t[a] || new Set,
          i = new Set,
          c = new Set;
        for (o.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var n = c;
          c = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = r(e, a);
          t && s.definitions.push(t)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = o(a, "UserGetVote"), e.exports.UserCastVote = o(a, "UserCastVote")
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

      function o(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !r[a] && (r[a] = !0, !0)
        }))
      }

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      t.definitions = t.definitions.concat(o(s(73784).definitions)), t.definitions = t.definitions.concat(o(s(28540).definitions));
      var c = {};

      function n(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), c[e.name.value] = a
        }
      })), e.exports = t, e.exports.NewswireList = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = c[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var i = o;
          o = new Set, i.forEach((function(e) {
            r.has(e) || (r.add(e), (c[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = n(e, a);
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
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 13892
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
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 52884
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
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 7e4
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
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 6572
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
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 18016
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
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 14512
    },
    83408: (e, a, s) => {
      var t = {
        "./VI/desktop.png": 44616
      };

      function r(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 83408
    },
    72027: (e, a, s) => {
      var t = {
        "./VI/mobile.png": 17076
      };

      function r(e) {
        var a = o(e);
        return s(a)
      }

      function o(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = o, e.exports = r, r.id = 72027
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