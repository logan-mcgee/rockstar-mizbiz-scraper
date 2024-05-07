! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "18a960fa-5af2-424d-881d-db5cf0be010d", e._sentryDebugIdIdentifier = "sentry-dbid-18a960fa-5af2-424d-881d-db5cf0be010d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [888], {
    7484: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => p,
        AudioPlayer: () => S,
        Badge: () => w,
        Brands: () => j,
        Button: () => I,
        ButtonGroup: () => Z,
        CalloutSection: () => _e,
        Carousel: () => re,
        ConditionalBlock: () => de,
        CookieAB: () => ye,
        CountryInputField: () => xe,
        Cta: () => Ce,
        DescriptionArea: () => Ue,
        DiscountsBadge: () => qe,
        DotLoader: () => Xe,
        Dropdown: () => Ze,
        Embed: () => ta,
        ExpandingPlatformButton: () => ma,
        FadeInContent: () => fa,
        GameCard: () => s,
        GameSiteHeader: () => ha,
        Gen9Button: () => Y,
        Gen9CoreCarousel: () => Sa,
        Grid: () => ea,
        HTMLElement: () => Va,
        Hero: () => La,
        HookStore: () => ie,
        ImageWithBadge: () => Ua,
        LanguageSelector: () => $a,
        LayeredImage: () => Oa,
        LoadingAnimation: () => $r,
        MultiSourceImage: () => Le,
        NewswireBlocks: () => at,
        NewswireCard: () => Ja,
        NewswireList: () => Qa,
        NewswireRelated: () => Za,
        NewswireTag: () => Wa,
        OrderedList: () => rt,
        PackList: () => pt,
        PackListMenu: () => It,
        Paging: () => Et,
        ParallaxCacheBuster: () => Vt,
        ParallaxInnerLayer: () => Bt,
        ParallaxOuterLayer: () => zt,
        ParallaxWrapper: () => Pt,
        ProfileSwitcher: () => r,
        PromoModule: () => Ss,
        Rating: () => Is,
        ResponsiveFlexBox: () => Ms,
        ResponsiveFlexItem: () => Ls,
        ResponsiveGridBox: () => Ds,
        ResponsiveGridItem: () => Bs,
        ResponsiveImg: () => zs,
        ResponsiveSection: () => Os,
        RockstarLogo: () => As,
        ScrollToTop: () => Us,
        ScrollTracker: () => Hs,
        SearchBox: () => Gs,
        Separator: () => Fe,
        Skeleton: () => qs,
        SrcsetImage: () => Ha,
        TextFit: () => He,
        ThumbsGallery: () => ar,
        TinaModuleFetchNRender: () => rr,
        TinaWrapper: () => nr,
        TrackList: () => Qs,
        UnorderedList: () => $e,
        UserVote: () => cr,
        VideoCard: () => n,
        VideoCarousel: () => lr,
        VideoList: () => fr,
        Wasted: () => gr,
        framer: () => o,
        useTinaModuleFetchByIds: () => sr,
        withSearchbarErrorBoundary: () => hr,
        withSimpleErrorBoundary: () => ya
      });
      var s = {};
      t.r(s), t.d(s, {
        Art: () => pa,
        Link: () => _a
      });
      var r = {};
      t.r(r), t.d(r, {
        CharacterCard: () => Rt,
        Menu: () => hs,
        MenuButton: () => ys
      });
      var n = {};
      t.r(n), t.d(n, {
        Art: () => kr,
        Link: () => _r
      });
      var i = {};
      t.r(i), t.d(i, {
        getVariant: () => Lr,
        transitions: () => Mr,
        variants: () => Er
      });
      var o = {};
      t.r(o), t.d(o, {
        Animations: () => i,
        LiteMotion: () => xr,
        withFadeIn: () => wr,
        withFadeUp: () => Tr
      });
      var c = t(51664),
        d = t(41272);
      const l = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Toggle Social Club Menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","disabled_label":"Disabled","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_toggle":"Social-Club-Menü öffnen bzw. schließen","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","disabled_label":"Deaktiviert","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_toggle":"Cambiar el menú del Social Club","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","disabled_label":"Desactivado","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_toggle":"Cambiar menú del Social Club","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","disabled_label":"Desactivado","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Afficher le menu du Social Club","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","disabled_label":"Désactivé","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Apri/chiudi il menu del Social Club","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","disabled_label":"Disabilitato","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","profile_selector_mugshot":"{ユーザーネーム}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_toggle":"Social Clubメニューを切り替え","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","disabled_label":"無効","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_toggle":"Social Club 메뉴 켜기/끄기","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","disabled_label":"비활성화됨","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_toggle":"Włącz lub wyłącz menu Social Club","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","disabled_label":"Wyłączone","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_toggle":"Alternar menu do Social Club","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","disabled_label":"Desabilitado","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_toggle":"Переключить меню Social Club","rp_icon":"Категория опыта","components_track_list_title":"Список песен","disabled_label":"Отключено","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_drag_handle":"拖动菜单处理","sc_menu_toggle":"切换 Social Club 菜单","rp_icon":"声望值类别","components_track_list_title":"曲目列表","disabled_label":"已禁用","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_drag_handle":"拖曳選單控點","sc_menu_toggle":"開關 Social Club 選單","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","disabled_label":"停用","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        m = (0, d.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var u = t(57013);
      const f = "rockstargames-modules-core-headerff481c537a56a6fcdb1be85dfbc8944e";
      var g = t(95240);
      const p = (0, d.withIntl)((e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: r = !1,
          onClick: n = (() => {}),
          ...i
        } = e;
        const o = (0, d.useIntl)(),
          c = !/^(https?|mailto):/i.test(t),
          l = /^#/.test(t),
          p = i?.target ?? (r ? "_blank" : "_self");
        let {
          ...k
        } = i, _ = "";
        if ("aria-label" in k && k["aria-label"] && (_ = "_blank" === p ? `${k["aria-label"]} ${o.formatMessage(m.aria_label_open_new_window)}` : k["aria-label"]), l) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), n && n(e)
          };
          return (0, g.jsxs)("a", {
            title: s,
            href: t,
            onClick: e,
            ...k,
            "aria-label": _,
            children: [a, "_blank" === p && !_ && (0, g.jsx)("span", {
              className: f,
              children: o.formatMessage(m.aria_label_open_new_window)
            })]
          })
        }
        if (c) return (0, g.jsxs)(u.NavLink, {
          title: s,
          to: t,
          onClick: e => n(e),
          ...k,
          "aria-label": _,
          children: [a, "_blank" === p && !_ && (0, g.jsx)("span", {
            className: f,
            children: o.formatMessage(m.aria_label_open_new_window)
          })]
        });
        const b = Object.keys(k).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: i[a]
        })), {});
        return "function" == typeof b?.className && delete b.className, (0, g.jsxs)("a", {
          href: t,
          title: s,
          onClick: e => n(e),
          target: p,
          ...b,
          "aria-label": _,
          children: [a, "_blank" === p && !_ && (0, g.jsx)("span", {
            className: f,
            children: o.formatMessage(m.aria_label_open_new_window)
          })]
        })
      }), l);
      var k = t(65772),
        _ = t.n(k),
        b = t(61076),
        h = t(90048);
      const v = {
          player: "rockstargames-modules-core-headerbb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-core-headere1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-core-headere8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-core-headerea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-core-headerb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-core-headerc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-core-headerac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-core-headeraafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-core-headerb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-core-headerff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-core-headera81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-core-headerc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-core-headerc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-core-headere4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-core-headerba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-core-headerfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-core-headerc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-core-headerb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-core-headerd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-core-headerd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-core-headerf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-core-headerefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-core-headerf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-core-headera56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-core-headerb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        x = e => {
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
        y = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: r,
            tracksOpen: n,
            setTracksOpen: i,
            trackData: o,
            setTrackId: d,
            trackBounds: l,
            setAutoNext: m
          } = e;
          const u = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            p = (0, c.useRef)(null),
            [k, b] = (0, c.useState)(null),
            [h, x] = (0, c.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = () => {
              p.current && f.current && b(p.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, f, a]), (0, c.useEffect)((() => {
            if (!u.current || !a?.duration) return;
            let e = null;
            const t = new(_())(u.current),
              r = e => {
                if (u.current) {
                  const t = u.current.clientWidth;
                  if (!u.current.contains(e.srcEvent.target)) return;
                  const r = Math.max(0, e.srcEvent.offsetX),
                    n = Number(r / t * a.duration);
                  s.currentTime = n
                }
              },
              n = () => {
                e ? s.pause() : s.play()
              },
              i = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", i), t.on("panleft", r), t.on("panright", r), t.on("panend", n), t.on("tap", r), () => {
              t.off("panstart", i), t.off("panleft", r), t.off("panright", r), t.off("panend", n), t.off("tap", r)
            }
          }), [u.current, a.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, s?.currentTime]), (0, g.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, g.jsx)("div", {
              className: [v.controlsCurrentBg, h ? v.controlsCurrentBgVisible : ""].join(" ")
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
                  l && (d(l[0]), m(!0), r(!0))
                }
              }), (0, g.jsx)("div", {
                className: [v.controlsPlayPause, t ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  r(!t)
                }
              }), (0, g.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  l && (d(l[1]), m(!0), r(!0))
                }
              })]
            }), (0, g.jsx)("div", {
              active: n ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, g.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  i(!n)
                }
              })
            }), (0, g.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, g.jsx)("span", {
                children: y(a.current)
              }), (0, g.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: u
              }), (0, g.jsx)("span", {
                children: y(a.duration)
              })]
            })]
          })
        },
        N = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: n,
            setPlaying: i,
            setAutoNext: o
          } = e;
          return (0, g.jsxs)("div", {
            className: v.tracks,
            children: [(0, g.jsx)("h4", {
              children: "Tracks"
            }), (0, g.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                n(!r)
              }
            }), (0, g.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, g.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? v.trackActive : "",
                onClick: () => {
                  s(e.id), i(!0), o(!0)
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
        S = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, b.UL)(h.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [r, n] = (0, c.useState)(), [i, o] = (0, c.useState)(), [d, l] = (0, c.useState)(), [m, u] = (0, c.useState)(!1), [f, p] = (0, c.useState)(!1), [k, _] = (0, c.useState)(new HTMLAudioElement), [S, w] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [j, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (o(a.data.rockstarAudioPlayerPlayTrackId), C(!1), p(!0)), f && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && p(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [f]), (0, c.useEffect)((() => {
            if (!k) return;
            const e = () => {
                isNaN(k.duration) || w({
                  duration: k?.duration ?? 0,
                  current: k?.currentTime ?? 0
                })
              },
              a = () => {
                j && r && o(r[1])
              };
            return k.addEventListener("loadedmetadata", e), k.addEventListener("timeupdate", e), k.addEventListener("ended", a), () => {
              k.removeEventListener("loadedmetadata", e), k.removeEventListener("timeupdate", e), k.removeEventListener("ended", a)
            }
          }), [k, r, j]), (0, c.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, c.useEffect)((() => {
            k && (f ? k.play() : k.pause(), u(!1))
          }), [f, k, d?.id]), (0, c.useEffect)((() => {
            if (!i) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === i));
            n([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), l(e[a])
          }), [i]), (0, c.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), d ? (0, g.jsxs)("div", {
            className: [v.player, v[t], m ? v.tracksOpen : ""].join(" "),
            children: [(0, g.jsx)("audio", {
              ref: e => {
                _(e)
              },
              src: d.mp3_src
            }), (0, g.jsx)(N, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: i,
              tracksOpen: m,
              setTracksOpen: u,
              setPlaying: p,
              setAutoNext: C
            }), (0, g.jsx)(x, {
              src: d.cover_src
            }), (0, g.jsx)(y, {
              setTrackId: o,
              trackBounds: r,
              tracksOpen: m,
              setTracksOpen: u,
              playing: f,
              setPlaying: p,
              timing: S,
              trackData: d,
              audioRef: k,
              setAutoNext: C
            })]
          }) : null
        },
        w = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, g.jsx)("div", {
            className: "rockstargames-modules-core-headerb61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        j = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, g.jsx)("div", {
            className: "rockstargames-modules-core-headercde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, g.jsx)("div", {
                className: "rockstargames-modules-core-headerc894fe869384587702b5370da072be86",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        C = {
          button: "rockstargames-modules-core-headere056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-core-headerd340cf27f380a4347994e59544432eb3"
        },
        I = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: r,
            onClick: n,
            ...i
          } = e;
          const o = [C.button, C[s], a].join(" ");
          return r ? (0, g.jsx)(p, {
            ...i,
            to: r,
            className: o,
            onClick: n ? () => n() : () => {},
            children: t
          }) : (0, g.jsx)("button", {
            ...i,
            type: "button",
            className: o,
            onClick: n ? () => n() : () => {},
            children: t
          })
        },
        T = function() {
          for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
          return [...a].filter(Boolean).join(" ")
        };
      var M = t(71612);
      const E = (0, c.createContext)(),
        {
          Provider: L
        } = E,
        V = e => {
          let {
            children: a,
            payload: t
          } = e;
          return (0, g.jsx)(L, {
            value: t,
            children: a
          })
        },
        D = () => (0, c.useContext)(E),
        P = e => {
          if (!e) return null;
          const {
            hostname: a,
            pathname: t
          } = new URL(e, (0, M.kh)(!0));
          return "/" === t ? null : (a.endsWith(".akamaized.net"), e)
        },
        B = e => {
          let {
            alt: a = null,
            mobile: t = null,
            desktop: s = null,
            ariaLabel: r = null,
            sources: n = null,
            prod: i = null
          } = e;
          const o = (0, M.y_)(),
            {
              meta: d = {}
            } = D() ?? {},
            [l, m] = (0, c.useState)(i ?? d?.cdn ?? d?.prod ?? !0);
          (0, c.useEffect)((() => {
            m(i ?? d?.cdn ?? d?.prod ?? !0)
          }), [i, d]);
          const u = (0, c.useCallback)((e => {
            const a = null !== n,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return P(t);
            const s = `${a?(0,M.kh)(l):""}${t}`;
            return P(s)
          }), [l, n]);
          return {
            alt: a,
            ariaLabel: r,
            src: {
              mobile: u(n?.[o]?.mobile ?? n?.en_us?.mobile ?? t),
              desktop: u(n?.[o]?.desktop ?? n?.en_us?.desktop ?? s)
            }
          }
        },
        $ = e => {
          const {
            meta: a = {}
          } = D() ?? {}, [t, s] = (0, c.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, c.useEffect)((() => {
            s(a?.cdn ?? a?.prod ?? !1)
          }), [a]), null === e ? null : e?.startsWith("http") ? P(e) : P(`${(0,M.kh)(t)}${e}`)
        };
      var z = t(73660),
        F = t.n(z);
      const O = (0, c.createContext)(),
        {
          Provider: A
        } = O,
        U = e => {
          let {
            children: a,
            components: t
          } = e;
          return (0, g.jsx)(A, {
            value: t,
            children: a
          })
        };
      var R = t(51328),
        H = t.n(R);
      t(76288), t(34512);
      const G = "content";
      var W = t(12231);
      const q = e => {
          let {
            components: a,
            payload: t,
            componentProps: s = {}
          } = e;
          const r = (0, c.useMemo)((() => (F().cloneDeepWith(t, ((e, s) => {
            "_template" !== s || Number.isInteger(Number(e)) || F().get(a, e) || (console.error(`TinaParser:useComponentRenderer: Component ${e} was found in payload, but not in renderable components.`), console.error("Payload:", t), console.error("Components:", a))
          })), (e => {
            let {
              components: a,
              payload: t,
              componentProps: s
            } = e;
            const r = e => {
              let n = "";
              if (n = Array.isArray(e?.[G]) ? e[G].map((e => r(e))) : e?.[G] ?? "", !e?._template) return n;
              let i, o = e._template;
              "0" === o && (console.warn(`The _template "${o}" wasn't found in the available components. The _template "${o}" was replaced with "gen9.Hero".`, {
                availableComponents: Object.keys(a),
                payload: e
              }), o = "gen9.Hero"), i = F().get(a, o) ?? null;
              const d = [...e?.translations ?? []].reverse(),
                l = `componentProps_${(0,W.c)()}`;
              return (0, c.createElement)(i, {
                ...t?.meta,
                ...e,
                ...s,
                t: e => d.find((a => a?._key === e))?.value ?? e,
                key: l
              }, n)
            };
            return t?.[G]?.length ? r(t) : null
          })({
            components: a,
            payload: t,
            componentProps: s
          }))), [JSON.stringify(t), JSON.stringify(a)]);
          return r
        },
        J = e => {
          let {
            tina: a,
            components: t = {},
            componentProps: s = {}
          } = e;
          const r = D(),
            [n, i] = (0, c.useState)(null),
            [o, d] = (0, c.useState)(null);
          (0, c.useEffect)((() => {
            a?.payload && i(a.payload), a?.variables && d(a.variables)
          }), [a]);
          const [l] = (0, c.useState)({
            ...t,
            ...(0, c.useContext)(O) ?? {}
          }), m = (e => {
            let {
              payload: a
            } = e;
            const [t, s] = (0, c.useState)(a);
            return (0, c.useEffect)((() => {
              const e = F().debounce((() => {
                const e = JSON.parse(JSON.stringify(a));
                F().cloneDeepWith(e, ((e, a, t) => {
                  t?.mediaQueryList && (e => {
                    e?.__original_data || Object.assign(e, {
                      __original_data: {
                        ...e
                      }
                    });
                    const a = e.mediaQueryList.filter((e => {
                        let {
                          mediaQueryString: a
                        } = e;
                        return window.matchMedia(a).matches
                      })) ?? null,
                      t = Object.assign({}, ...a);
                    Object.assign(e, {
                      ...e?.__original_data,
                      ...t,
                      _template: e?._template
                    })
                  })(t)
                })), s(e)
              }), 250);
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), [a]), t
          })({
            payload: n
          }), u = (e => {
            let {
              payload: a,
              variables: t
            } = e;
            const [s, r] = (0, c.useState)(a), [n, i] = (0, c.useState)(t);
            return (0, c.useEffect)((() => {
              const e = ((e, a) => {
                  const t = {};
                  return F().cloneDeepWith(e, ((e, s, r) => {
                    s === a && e && (t[r.key] = e)
                  })), t
                })(a, "_memoq"),
                s = JSON.parse(JSON.stringify(F().merge(JSON.parse(JSON.stringify(e)), JSON.parse(JSON.stringify(t?.keys ?? {})))));
              i(s)
            }), [JSON.stringify(a), t]), (0, c.useEffect)((() => {
              const e = JSON.parse(JSON.stringify(a)),
                t = JSON.parse(JSON.stringify(n));
              F().cloneDeepWith(e, ((e, a, s) => {
                (e => {
                  let {
                    item: a,
                    variableKey: s
                  } = e;
                  if (!a || !F().has(a, "key") || a.translated) return;
                  const r = t[a.key] ?? null;
                  if (!r) return;
                  const n = H()(r);
                  Object.keys(n).map((e => {
                    F().set(a, e, n[e])
                  })), F().set(a, "translated", !0), Object.freeze(a)
                })({
                  item: s,
                  variableKey: e
                })
              })), r(e)
            }), [JSON.stringify(a), JSON.stringify(n)]), s
          })({
            payload: n,
            variables: o
          });
          return (0, c.useMemo)((() => {
            if (!n) return null;
            const e = u,
              t = n?.meta?.prod ?? n?.meta?.cdn ?? r?.meta?.prod ?? r?.meta?.cdn ?? !1,
              i = {
                ...n,
                meta: {
                  ...n?.meta ?? {},
                  prod: t
                }
              };
            return (0, g.jsx)(V, {
              payload: i,
              children: (0, g.jsx)(U, {
                components: l,
                children: (0, g.jsx)(q, {
                  payload: e,
                  components: l,
                  componentProps: {
                    ...s,
                    tina: a
                  }
                })
              })
            })
          }), [r, n, JSON.stringify(m), JSON.stringify(u)])
        },
        X = {
          pillBtn: "rockstargames-modules-core-headerb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-core-headerf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-core-headercffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-core-headerb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-core-headere6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-core-headercef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-core-headerb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-core-headercb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-core-headerd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-core-headerac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-core-headerc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-core-headera7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-core-headera693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-core-headera029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-core-headere25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-core-headere03d92653f19a7ae3c4b3d5137bc9909"
        },
        K = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r
          } = e;
          return (0, g.jsx)("button", {
            className: t,
            onClick: s ? () => s() : () => {},
            style: r,
            type: "button",
            children: a
          })
        },
        Q = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            to: n
          } = e;
          return (0, g.jsx)(u.NavLink, {
            className: t,
            onClick: s ? () => s() : () => {},
            style: r,
            to: n,
            children: a
          })
        },
        Y = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: r = "",
            img: n,
            labelColor: i = "#000",
            onClick: o,
            secondText: c,
            size: d,
            text: l,
            to: m,
            type: u = ""
          } = e;
          const f = [X.plusButton, X[u] ?? "", X[d] ?? "", X[s] ?? "", t].join(" "),
            p = {
              "--hvr-color": a ?? i,
              "--hvr-bg-color": i ?? a,
              "--hvr-border-color": a ?? i
            },
            k = (0, g.jsxs)(g.Fragment, {
              children: [n ? (0, g.jsx)("img", {
                src: n,
                alt: ""
              }) : "", (0, g.jsxs)("div", {
                className: X.btnText,
                icon: r,
                children: [l, c ? (0, g.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, g.jsx)("span", {
                onClick: o ? () => o() : () => {},
                onKeyDown: o,
                className: f,
                role: "button",
                tabIndex: 0,
                children: (0, g.jsx)("a", {
                  href: m,
                  target: e,
                  children: k
                })
              })
            }
            return (0, g.jsx)(Q, {
              className: f,
              onClick: o ? () => o() : () => {},
              style: p,
              to: m,
              children: k
            })
          }
          return (0, g.jsx)(K, {
            className: f,
            onClick: o ? () => o() : () => {},
            style: p,
            children: k
          })
        },
        Z = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, g.jsx)("div", {
            className: T("rockstargames-modules-core-headerb411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: r
              } = e;
              return s ? (0, g.jsx)(Y, {
                icon: t,
                text: s,
                to: r
              }, a) : ""
            }))
          }) : null
        };
      var ee = t(48111);
      const ae = {
          deprecatedCarousel: "rockstargames-modules-core-headereb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-core-headereb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-core-headerb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-core-headerfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-core-headerc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-core-headerf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-core-headerf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-core-headere70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-core-headerbace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-core-headerf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-core-headerd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-core-headerb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-core-headerbb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-core-headerdd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-core-headera59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-core-headeraa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-core-headerc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        te = e => {
          let {
            item: a
          } = e;
          return (0, g.jsxs)("div", {
            children: [(0, g.jsx)(Ua, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: T(ae.img, a?.className)
            }), (a?.title || a?.description) && (0, g.jsx)(Ue, {
              item: a
            })]
          })
        },
        se = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, g.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, g.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        re = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: r = !1,
            className: n = "",
            renderTemplate: i = "standard",
            text: o,
            customSpaceBetween: d = null,
            centerSlides: l = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [u, f] = (0, c.useState)(0), p = (0, c.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, W.c)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const k = {
            0: {
              spaceBetween: d ?? 16
            },
            1024: {
              spaceBetween: d ?? 18
            },
            1920: {
              spaceBetween: d ?? 20
            },
            2560: {
              spaceBetween: d ?? 22
            }
          };
          return (0, g.jsxs)("div", {
            className: T(ae.deprecatedCarousel, ae[i], ae[`infinite_${!r}`], a ? ae.renderedWithChildren : "", n),
            style: s,
            children: [(0, g.jsxs)(ee.wx, {
              loop: !r,
              grabCursor: !0,
              centeredSlides: l,
              centerInsufficientSlides: l,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: k,
              onUpdate: () => f(0),
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, g.jsx)("div", {
                className: ae.trackWrapper,
                children: (0, g.jsxs)("div", {
                  className: ae.track,
                  children: [t?.map((e => (0, g.jsx)(ee.Ky, {
                    children: (0, g.jsx)(te, {
                      item: e
                    })
                  }, e.key))), a && a?.map(((e, a) => e && (0, g.jsx)(ee.Ky, {
                    children: e
                  }, p && p[a])))]
                })
              }), (0, g.jsx)(se, {
                current: u,
                total: a ? a.length : t.length
              })]
            }), (o?.title || o?.description) && (0, g.jsx)(Ue, {
              item: o
            })]
          })
        };
      var ne = t(54420);
      const ie = (0, t(62748).U1)(),
        oe = e => e.some((e => !e)),
        ce = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, r] = (0, c.useState)(!1), n = (e => {
            const [a] = (0, u.useSearchParams)(), [t, s] = (0, c.useState)(null), r = (0, ne.yi)(), {
              loggedIn: n
            } = r, {
              currentCharId: i
            } = (0, ne.of)(), o = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, c.useMemo)((() => {
                const s = e?.data?.characters?.[t];
                return "1" === (s?.[a]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, t, a])
            }(r, i);
            return (0, c.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              ie.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (oe(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === n);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === n);
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
              })), s(!oe(r)), () => {}
            }), [a, e, o, r, n]), t
          })(a);
          return (0, c.useEffect)((() => {
            r(n)
          }), [n]), (0, c.useMemo)((() => s ? t : null), [s])
        },
        de = (0, M.Ux)((e => {
          let {
            children: a
          } = e;
          return c.Children.map(c.Children.toArray(a), (e => (0, g.jsx)(ce, {
            ...e?.props
          })))
        }));
      var le = t(41512),
        me = t(58652);
      const ue = e => {
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
        fe = {
          pillBtn: "rockstargames-modules-core-headere3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-headera9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-headere6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-headerb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-headerc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-headerb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-headerb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-headerac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-headerbee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-headerb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-headerb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-headerf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-headerd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-headerb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-headeraefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-headera74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-headercc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-headerdb26fed58ce50f4affc114670885721a"
        },
        ge = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, ne.ye)(), {
            refetch: r
          } = (0, b.UL)(me.UserGetVote, {
            skip: !0
          }), [n] = (0, b.cQ)(me.UserCastVote), [i, o] = (0, c.useState)(null), d = (0, c.useCallback)((e => {
            (async () => {
              if (e === i && null !== i) o(null);
              else {
                o(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const r = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await n({
                  variables: r
                })
              }
            })()
          }), [a, t, i]);
          return (0, c.useEffect)((() => {
            a && t && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: t
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, g.jsxs)("div", {
            className: fe.calloutVoteForm,
            children: [(0, g.jsx)("button", {
              "aria-label": "upvote",
              className: [fe.upvote, fe.voteButton, i ? fe.active : ""].join(" "),
              name: "upvote",
              onClick: () => d(!0),
              type: "button"
            }), (0, g.jsx)("button", {
              "aria-label": "downvote",
              className: [fe.downvote, fe.voteButton, !1 === i ? fe.active : ""].join(" "),
              name: "downvote",
              onClick: () => d(!1),
              type: "button"
            })]
          })
        },
        pe = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: r
          } = (0, ne.ye)();
          return (0, g.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, g.jsxs)("button", {
              className: fe.calloutLink,
              type: "button",
              onClick: s ? () => r({
                ...s
              }) : () => {},
              children: [a, (0, g.jsx)(ue, {
                className: fe.calloutLinkIcon
              })]
            })
          })
        },
        ke = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: r
          } = e;
          const {
            track: n
          } = (0, ne.ye)();
          return (0, g.jsxs)("div", {
            className: fe.actionFooter,
            children: [a, t && " ", t && (0, g.jsx)("a", {
              href: s ?? "",
              onClick: () => n({
                ...r
              }),
              children: t
            })]
          })
        },
        _e = (0, M.Ux)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: r,
            link: n,
            foreign_id: i = document.location.pathname,
            foreign_type: o = "url",
            className: d = "",
            actionFooterHelperText: l,
            actionFooterLinkText: m,
            actionFooterLink: u,
            trackingData: f = {},
            actionFooterLinkTrackingData: p = {},
            t: k,
            ..._
          } = e;
          const {
            loggedIn: b
          } = (0, ne.yi)(), {
            track: h
          } = (0, ne.ye)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, le.cD)({
            threshold: .6
          }), [N, S] = (0, c.useState)(!1);
          let w;
          if ((0, c.useEffect)((() => {
              y && !N && (h({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${_?.sectionName??_?._memoq?.header}`
              }), S(!0))
            }), [y]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!b) {
                w = (0, g.jsx)(I, {
                  to: v,
                  className: fe.calloutButton,
                  onClick: f ? () => h({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, g.jsx)(ge, {
                foreign_id: i,
                foreign_type: o
              });
              break;
            case "button":
              r && n && (w = (0, g.jsx)(I, {
                to: n,
                className: fe.calloutButton,
                onClick: f ? () => h({
                  ...f
                }) : () => {},
                children: r
              }));
              break;
            case "link":
              r && n && (w = (0, g.jsx)(pe, {
                action_text: r,
                link: n,
                trackingData: f
              }));
              break;
            default:
              w = null
          }
          return (0, g.jsx)("div", {
            className: `${fe.calloutContainer} ${d||""}`,
            ref: x,
            children: (0, g.jsxs)("div", {
              className: fe.calloutSection,
              children: [(0, g.jsxs)("div", {
                className: [fe.calloutHeaders, w ? fe.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, g.jsx)("h2", {
                  className: fe.calloutHeader,
                  children: k(a)
                }), t && (0, g.jsx)("h3", {
                  className: fe.calloutSubheader,
                  children: k(t)
                })]
              }), (0, g.jsxs)("div", {
                className: fe.actionBlock,
                children: [w, l && (0, g.jsx)(ke, {
                  helperText: l,
                  linkText: m,
                  link: u,
                  trackingData: p
                })]
              })]
            })
          })
        }));
      var be = t(69736),
        he = t(44236),
        ve = t.n(he);
      const xe = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: r
          } = e;
          const [n, i] = (0, c.useState)(""), o = (0, c.useMemo)((() => ve()().getData()), []);
          return (0, g.jsx)(be.cp, {
            unstyled: !0,
            value: n,
            isMulti: a,
            allowSelectAll: t,
            options: o,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void i(a);
              var a
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        ye = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: r
          } = e;
          const n = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            i = new URLSearchParams(window.location.search).get(a);
          return i && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, i), n === t || i === t ? s : r
        },
        Ne = {
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
        Se = e => Ne[e] || null,
        we = {
          cta: "rockstargames-modules-core-headerbc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-modules-core-headerf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-headere5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-headere52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-headerc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-headerf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-headerb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-headerc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-core-headera9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-core-headera4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-headerc4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-modules-core-headera13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-modules-core-headercb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-modules-core-headerb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-headerdbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-headerf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-modules-core-headerc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-headerbd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-headerc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-headerd87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-modules-core-headerbf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-headere07887131c72b6346c408895888f4fa7"
        },
        je = e => {
          let {
            platform: a = ""
          } = e;
          const t = a ? Se(a) : null,
            s = t ? (0, g.jsx)("img", {
              className: we.platformIcon,
              src: t,
              alt: "Platform Icon"
            }) : null;
          return (0, g.jsx)("span", {
            className: [we.btnContent, we.platformButton].join(" "),
            children: s
          })
        },
        Ce = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: r,
            variant: n = null,
            icon: i,
            iconPosition: o = "none",
            iconStyle: d,
            badge: l,
            badgeStyle: m,
            platformItem: f,
            gtm: p = {},
            disabled: k,
            className: _
          } = e;
          const {
            track: b
          } = (0, ne.ye)(), h = (0, M.sL)(), v = r ?? a, x = `Redirect to ${t}`, y = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), N = (0, c.useCallback)((() => {
            k || b({
              event: "cta_other",
              ...h,
              ...p,
              link_url: t ?? void 0,
              text: v ?? void 0
            })
          }), [p, t, h]), S = () => i ? (0, g.jsx)("span", {
            className: [we.icon, `icon-${o}`].join(" "),
            style: d,
            children: (0, g.jsx)("img", {
              className: we.btnIcon,
              src: Se(i) || "",
              alt: `${i} icon`
            })
          }) : null;
          return (0, g.jsx)(u.NavLink, {
            to: t,
            target: y ? "_self" : "_blank",
            className: [we.cta, "platform" === n && f ? we[f] : "", k ? we.disabled : "", _].join(" "),
            style: s,
            "data-variant": n,
            onClick: N,
            disabled: k,
            "aria-label": x,
            children: "platform" === n && f ? (0, g.jsx)(je, {
              platform: f
            }) : (0, g.jsxs)("div", {
              className: we.btnContent,
              children: ["left" === o && S(), (0, g.jsx)("span", {
                children: v
              }), "right" === o && S(), l ? (0, g.jsx)("span", {
                className: we.badge,
                style: m,
                children: l
              }) : null]
            })
          })
        },
        Ie = "rockstargames-modules-core-headereb64520e04e486931cd65dc5b3fa61e8",
        Te = "rockstargames-modules-core-headercc9a6fdcc84b758d60987ea9a5ddfd81",
        Me = "rockstargames-modules-core-headeree609f31f3685766122c2c6fc0ef0710",
        Ee = e => {
          let {
            alt: a,
            className: s,
            src: r,
            style: n
          } = e;
          const [i, o] = (0, M.kJ)(r);
          let c = r;
          !1 === i && (s === Me && (c = t(61820)), c = t(43976));
          const {
            width: d,
            height: l
          } = o, m = {
            "--aspect-ratio": Number.isNaN(d / l) ? "" : d / l,
            ...n
          };
          return (0, g.jsx)("img", {
            src: c,
            className: s ?? "",
            alt: a,
            style: m
          })
        },
        Le = e => {
          let {
            className: a,
            style: s = {},
            image: r = {},
            imageStyle: n = {}
          } = e, {
            alt: i,
            src: o
          } = B(r);
          return o.desktop || o.mobile || (i = "placeholder", o = {
            mobile: t(61820),
            desktop: t(43976)
          }), (0, g.jsx)("div", {
            className: r.frame ? `${r.frame} ${Ie}` : Ie,
            style: s,
            children: o?.desktop && o?.mobile ? (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(Ee, {
                style: {
                  ...n,
                  ...r?.style
                },
                src: o.desktop,
                alt: i,
                className: a ? `${a} ${Te}` : Te
              }), (0, g.jsx)(Ee, {
                style: {
                  ...n,
                  ...r?.style
                },
                src: o.mobile,
                alt: i,
                className: a ? `${a} ${Me}` : Me
              })]
            }) : (0, g.jsx)(Ee, {
              style: {
                ...n,
                ...r?.style
              },
              src: o?.desktop ?? o?.mobile,
              alt: i,
              className: a
            })
          })
        };
      var Ve = t(8560),
        De = t.n(Ve);
      const Pe = {
          grid: "rockstargames-modules-core-headerac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-modules-core-headercaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-modules-core-headerb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-modules-core-headerd146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-modules-core-headerba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-modules-core-headerb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-modules-core-headeraf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-modules-core-headerd244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-modules-core-headerd90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-modules-core-headerc3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-modules-core-headerfe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-modules-core-headerf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-modules-core-headerf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-modules-core-headerf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-modules-core-headerab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-modules-core-headerdc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-modules-core-headerb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-modules-core-headere4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-modules-core-headerd4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: Be
        } = De(),
        $e = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: r,
            className: n,
            game: i,
            noImg: o,
            columns: d,
            mobileColumns: l
          } = e;
          const [m, u] = (0, c.useState)(null), f = t ? t.split("_#_") : a;
          return (0, c.useEffect)((() => {
            u(a)
          }), [a]), t || a ? d && m ? (0, g.jsx)("div", {
            className: Pe.grid,
            style: {
              "--unordered-list-grid-column": d,
              "--unordered-list-grid-column-mobile": l ?? d
            },
            children: (0, g.jsx)("ul", {
              style: (0, M.G6)(r),
              className: T(Pe.itemList, Pe.noImg, Pe[s], Pe[i]),
              children: m.map((e => (0, g.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Be(e.content)
                }
              }, e.content)))
            })
          }) : (0, g.jsx)("ul", {
            style: (0, M.G6)(r),
            className: T(Pe.itemList, Pe.custom, o ? Pe.noImg : "", s ? Pe[s] : "", i ? Pe[i] : "", n ?? ""),
            children: f.map((e => (0, g.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Be(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        ze = {
          hr: "rockstargames-modules-core-headerf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-core-headerf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-core-headerc442f7264db862a7cca6d9a56dacc205"
        },
        Fe = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, g.jsx)("div", {
            style: a,
            className: [ze.hr, ze[s], t].join(" ")
          })
        },
        Oe = "rockstargames-modules-core-headerfa6885b15a718acb24f48949c52e31f1",
        Ae = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, g.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        Ue = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, g.jsxs)("div", {
            className: T("rockstargames-modules-core-headeref9e6981551ac5ce250ebff8b18d7a29", t),
            children: [a.title && (0, g.jsx)(Ae, {
              to: a?.href ?? a?.to,
              children: (0, g.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, g.jsx)($e, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, g.jsx)(Le, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, g.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, g.jsx)(Fe, {})
            }, a) : (0, g.jsx)("p", {
              children: (0, g.jsx)("span", {
                className: Oe,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, g.jsx)("span", {
              className: Oe,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Re = t(58936);
      const He = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, r] = (0, c.useState)(!1);
          return (0, g.jsx)(Re.cR, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                r(!0)
              }))
            },
            children: a
          })
        },
        Ge = {
          badge: "rockstargames-modules-core-headere279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-core-headerd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-core-headerd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-core-headere1bba3cd4554abbb48a030af24bbada5"
        },
        We = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: r
          } = e;
          return r || s ? a(t) : t
        },
        qe = e => {
          let {
            badge: a,
            badgeType: s,
            role: r,
            splitter: n
          } = e;
          const i = [];
          n ? a.split(n).map(((e, a) => i.push(e))) : i.push(a);
          let o = 100;
          return 2 == i.length && i[1].length < 4 && "off" !== i[1].toLowerCase() && 45, (0, g.jsxs)(We, {
            splitter: n,
            role: r,
            wrapper: e => (0, g.jsx)("div", {
              className: `${Ge.badge} ${s?Ge[s]:""} `,
              children: e
            }),
            children: [(0, g.jsx)(g.Fragment, {
              children: r && (0, g.jsx)(Le, {
                image: {
                  alt: r,
                  desktop: t(6572)(`./${r}.png`)
                }
              })
            }), (0, g.jsx)(He, {
              className: `${n||r?"":Ge.badge} ${s?Ge[s]:""}`,
              min: 8,
              max: 1e3,
              mode: n || r ? "single" : "multi",
              children: i[0]
            }), (0, g.jsx)(g.Fragment, {
              children: i.shift() && n && i.length >= 1 && (0, g.jsx)(He, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: i.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Je = "rockstargames-modules-core-headerc63cfb461217f059c8c25eec09602b30",
        Xe = e => {
          let {
            color: a
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-headera481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, g.jsx)("div", {
              className: Je
            }), (0, g.jsx)("div", {
              className: Je
            }), (0, g.jsx)("div", {
              className: Je
            })]
          })
        };
      var Ke = t(36960),
        Qe = t.n(Ke);
      const Ye = {
          dropdownWrapper: "rockstargames-modules-core-headerb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-core-headerb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-core-headerf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-core-headerecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-core-headerb64c3515fcd91f6b84410bd14640da81"
        },
        Ze = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [r, n] = (0, c.useState)(!1);
          return (0, g.jsx)(Qe(), {
            disabled: !r,
            children: (0, g.jsxs)("div", {
              className: [Ye.dropdownWrapper, r ? Ye.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, g.jsx)("button", {
                className: Ye.opener,
                onClick: () => n(!r),
                children: s
              }), r && (0, g.jsx)("div", {
                className: Ye.items,
                onClick: () => n(!1),
                children: a
              })]
            })
          })
        },
        ea = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: r = {},
            style: n = {},
            template: i = null,
            theme: o = null,
            reversedOnMobile: c = !1,
            className: d = "",
            id: l = null
          } = e;
          const m = B(r),
            u = {
              ...n
            };
          if (m?.src?.desktop) {
            const e = "var(--grid-background-repeat, no-repeat)",
              a = "var(--grid-background-position, center)/var(--grid-background-size, cover)";
            u.background = `url(${m?.src?.desktop}) ${e} ${a}`
          }
          return (0, g.jsx)("div", {
            id: l,
            className: T("rockstargames-modules-core-headerf42b4606ed4a5b16b7647ad7b7eb229d", c ? "rockstargames-modules-core-headerb00444166ce6346d7ca364a75a335ecc" : "", d),
            "data-game": "community" === i ? null : s,
            style: (0, M.G6)(u),
            "data-context": t,
            "data-template": i,
            "data-theme": o,
            children: a
          })
        },
        aa = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, g.jsxs)("figure", {
            ...s,
            children: [t, (0, g.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        ta = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, g.jsx)("div", {
            className: "rockstargames-modules-core-headerd393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, g.jsxs)(ea, {
              children: [a && (0, g.jsx)("h3", {
                children: a
              }), (0, g.jsx)(ea, {
                className: "rockstargames-modules-core-headered3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, g.jsx)(aa, {
                    caption: e?.caption,
                    children: (0, g.jsx)("div", {
                      className: "rockstargames-modules-core-headerdcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, g.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? a) : void 0;
                  var t
                }))
              })]
            })
          }) : null
        };
      var sa = t(50968);
      const ra = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        na = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        ia = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: na
          }
        },
        oa = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: na,
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
              height: ra
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        ca = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            padding: "var(--padding-sm)",
            gridGap: "var(--grid-gap-sm)",
            pointerEvents: "none",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "none",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "inherit",
            "--cta-background-color-noBlur": "inherit",
            padding: "var(--padding-sm) var(--padding-md)",
            gridGap: 0,
            transition: ra,
            transitionEnd: {
              "--btn-hover-bg-color": "inherit",
              "--btn-hover-bg-color-noBlur": "inherit",
              "--btn-hover-font-color": "inherit",
              "--btn-hover-border-color": "inherit"
            }
          }
        },
        da = {
          pillBtn: "rockstargames-modules-core-headerba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-core-headerc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-core-headerbfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-core-headera1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-modules-core-headerba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-modules-core-headerdd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-core-headerc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-core-headerd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-core-headerb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-core-headerfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-core-headerb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-core-headere23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-core-headere0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-core-headerdcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-core-headere047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-core-headerdaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-core-headerae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-modules-core-headerc2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        la = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: r = "",
            target: n = null,
            onClick: i
          } = e;
          const o = n ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [da.platformButton, da[r]].join(" "),
            d = r ? t(13892)(`./${r}.svg`) : null,
            l = (0, g.jsxs)(g.Fragment, {
              children: [d ? (0, g.jsx)("img", {
                src: d,
                alt: a
              }) : "", !d && (0, g.jsx)("div", {
                className: da.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, g.jsx)("span", {
            onClick: i,
            onKeyDown: i,
            role: "link",
            tabIndex: 0,
            children: (0, g.jsx)("a", {
              href: s,
              className: c,
              target: o,
              children: l
            })
          }) : (0, g.jsx)(u.NavLink, {
            className: c,
            onClick: i,
            to: s,
            children: l
          })
        },
        ma = e => {
          let {
            buttonText: a = "Subscribe",
            className: s,
            children: r,
            platformsAndLinks: n = [],
            trackingType: i = "buy",
            trackingParent: o,
            target: d = null,
            trackingOId: l = null
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            track: f
          } = (0, ne.ye)(), p = () => {
            u(!m), m || f("select_platform" === i ? {
              event: "select_platform",
              event_action: "select_platform",
              event_category: "cta",
              event_label: o,
              text: a?.toLowerCase() ?? "subscribe"
            } : "link_account" === i ? {
              element_placement: o,
              event: "cta_link_account",
              event_action: "link_account",
              event_category: "cta",
              event_label: o,
              o_id: l,
              text: a?.toLowerCase()
            } : {
              event: "cta_buy",
              event_action: "buy",
              event_category: "cta",
              event_label: o,
              text: a?.toLowerCase() ?? "subscribe"
            })
          };
          return (0, g.jsxs)("div", {
            className: T(da.container, s),
            children: [(0, g.jsx)(sa.motion.div, {
              className: da.content,
              animate: m ? "open" : "close",
              variants: ia,
              children: r
            }), (0, g.jsxs)(sa.motion.div, {
              onClick: p,
              className: da.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: ca,
              initial: !1,
              tabIndex: 0,
              onKeyDown: e => {
                (e => {
                  let {
                    code: a
                  } = e;
                  "Enter" === a && p()
                })(e)
              },
              children: [(0, g.jsx)(sa.motion.div, {
                className: da.buttonText,
                "data-expanded": m,
                children: "string" == typeof a ? a : "Subscribe"
              }), (0, g.jsxs)(sa.motion.div, {
                className: da.expandedArea,
                animate: m ? "open" : "closed",
                variants: oa,
                initial: !1,
                children: [(0, g.jsx)("img", {
                  className: da.closeButton,
                  onClick: () => u(!1),
                  onKeyDown: e => {
                    (e => {
                      let {
                        code: a
                      } = e;
                      "Enter" === a && u(!1)
                    })(e)
                  },
                  src: t(72428),
                  alt: "Close",
                  role: "button",
                  tabIndex: 0
                }), (0, g.jsx)("div", {
                  className: da.platformButtons,
                  children: n.length ? n.map((e => (0, g.jsx)(la, {
                    buttonText: e.buttonText ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: () => (e => {
                      let {
                        href: a,
                        platform: t
                      } = e;
                      f({
                        element_placement: o,
                        event: "cta_store_link",
                        event_action: "store_link",
                        event_category: "cta",
                        event_label: "expanding platform button",
                        link_url: a,
                        text: t
                      })
                    })(e),
                    target: d
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        ua = {
          animateBox: "rockstargames-modules-core-headere9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-core-headera63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-core-headerd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-core-headerb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-core-headera4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-core-headerf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        fa = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([ua.visible])
              }))
            })).observe(s?.current)
          }), []), (0, g.jsx)("div", {
            style: t,
            className: [ua.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        ga = {
          img: "rockstargames-modules-core-headere3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-modules-core-headera27e4d6733cea4a38e469425ef32ed3a"
        };
      (0, M.UN)(t(18016));
      const pa = e => {
          let {
            fob640: a,
            isWideCard: s = !1,
            title: r,
            titleSlug: n
          } = e;
          const {
            isMobile: i
          } = (0, M.bk)(), o = (0, c.useMemo)((() => s && i ? t(72027)(`./${n}/mobile.png`) : s && !i ? t(83408)(`./${n}/desktop.png`) : a), [a, i, n]), [d] = (0, M.kJ)(o);
          return (0, g.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [ga.img, d ? ga.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        ka = {
          fobLink: "rockstargames-modules-core-headerfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-modules-core-headera9b41f96042bda8a8c77b7b7b10f84d5"
        },
        _a = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: r = !1,
            title_slug: n
          } = a;
          let i = n;
          "V" === n && (i = "gta-v"), "GTAOnline" === n && (i = "gta-online"), "undeadnightmare" === n && (i = "reddeadredemption");
          const o = t ?? `${r?"":"/games"}/${i}`,
            c = ["VI"].includes(n);
          return (0, g.jsx)(p, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": n,
            "data-testid": `${n}-gamecard`,
            to: o,
            target: "_self",
            className: [ka.fobLink, c ? ka.wide : ""].join(" "),
            children: (0, g.jsx)(pa, {
              fob640: s,
              title: a.title,
              titleSlug: n,
              isWideCard: c
            })
          })
        },
        ba = {
          gameSiteHeader: "rockstargames-modules-core-headercb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-core-headeraa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-core-headerac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-core-headere5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-core-headerb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-core-headere666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-core-headercfc6fd456ca2f3e9db06f780f412660f"
        },
        ha = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: r = "",
            game: n
          } = e;
          const [i, o] = (0, c.useState)(!1), d = (0, b.aU)(), {
            navHidden: l
          } = (0, b.oT)();
          return (0, c.useEffect)((() => {
            d({
              gameSiteNavOpen: i
            })
          }), [i]), (0, c.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, g.jsxs)("header", {
            "data-game": n,
            className: [ba.gameSiteHeader, i ? ba.headerNavOpen : "", l ? ba.navHidden : "", t.gameSiteHeader, i ? t.headerNavOpen : ""].join(" "),
            children: [(0, g.jsx)("button", {
              className: [ba.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                o(!i), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, g.jsx)("div", {
              className: ba.bg
            }), (0, g.jsx)("nav", {
              children: (0, g.jsx)("div", {
                className: ba.navContent,
                children: s
              })
            }), r]
          })
        };
      var va = t(31403);
      class xa extends c.Component {
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
            className: "rockstargames-modules-core-headerf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, g.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, g.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ya = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, g.jsx)(xa, {
              header: a,
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        },
        Na = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: r
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-headerd98f432655f19a842390597c4434db06",
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-headerc06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: r,
              "aria-label": "Previous",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-headera4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
              "aria-label": "Next",
              role: "button",
              tabIndex: 0,
              onKeyUp: () => {}
            })]
          })
        },
        Sa = ya((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: r,
            customSlidesPerView: n = null,
            customSpaceBetween: i = null,
            slideClass: o,
            style: d,
            className: l,
            cardSizeBreakpoints: m = {},
            customAspectRatio: u,
            titleBadge: f
          } = e;
          const {
            track: p
          } = (0, ne.ye)(), k = (0, c.useRef)(null), _ = (0, c.useRef)(null), b = (0, c.useRef)(null), [h, v] = (0, c.useState)(null), [x, y] = (0, c.useState)(!1), [N, S] = (0, c.useState)(null), [w, j] = (0, c.useState)({}), [C, I] = (0, c.useState)(), {
            ref: M,
            inView: E
          } = (0, le.cD)({
            threshold: .6
          }), [L, V] = (0, c.useState)(!1), [D, P] = (0, c.useState)(null), [B, $] = (0, c.useState)(!1);
          let F = !1;
          F = !0;
          const [O, A] = (0, c.useState)(0), [U, R] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              w && !(0, z.isEmpty)(w) && w?.height > 0 && w?.height !== O && A(w?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [w]);
          const H = {
            0: {
              spaceBetween: i ?? 16
            },
            1024: {
              spaceBetween: i ?? 18
            },
            1920: {
              spaceBetween: i ?? 20
            },
            2560: {
              spaceBetween: i ?? 22
            }
          };
          (0, c.useEffect)((() => {
            if (!k.current) return;
            const e = () => {
              if (k.current) {
                const e = n || Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view")),
                  a = n ? 1 : Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view-multiplier"));
                S(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k, n]), (0, c.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, P(a))
            })), V(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && B ? null : (0, g.jsx)(ee.Ky, {
              className: "rockstargames-modules-core-headerf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => q(a),
              children: e
            }, Symbol(a).toString())));
            v(a)
          }), [t, B]), (0, c.useEffect)((() => {
            I({
              nextEl: b.current,
              prevEl: _.current
            })
          }), [b, _]), (0, c.useEffect)((() => {
            E && !x && t && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${r}`.toLowerCase(),
              element_placement: `deck - ${r}`.toLowerCase()
            }), y(!0))
          }), [E, t]);
          let G = "custom" === s ? {
            "--custom-aspect-ratio": u,
            ...d
          } : {
            ...d
          };
          const W = 0 !== O ? `${O}px` : "100%";
          G = {
            ...G,
            "--carousel-cards-height": W,
            "--carousel-nav-opacity": U
          };
          const q = e => {
            w.slideTo(e)
          };
          return (0, g.jsxs)("div", {
            className: T("rockstargames-modules-core-headerd0c3d91603036c852633939015a6cb48", l),
            "data-size": s,
            "data-sm": m?.sm ? m?.sm : s,
            "data-md": m?.md ? m?.md : s,
            "data-lg": m?.lg ? m?.lg : s,
            "data-xl": m?.xl ? m?.xl : s,
            "data-xxl": m?.xxl ? m?.xxl : s,
            "data-has-covercard": L,
            "data-new-carousel-nav": !0,
            ref: k,
            style: G,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-headerddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), L && B && (0, g.jsx)("div", {
              className: "rockstargames-modules-core-headerd5f00d41fdd2c864a0eb9e069cf08db0",
              children: D
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-headercdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, g.jsxs)("div", {
                className: "rockstargames-modules-core-headerfb8e207418c783fc2f53b44c19faedca",
                children: [(0, g.jsxs)("div", {
                  className: "rockstargames-modules-core-headerb779ba2045a88302079083935c90f7b3",
                  children: [!L && r && (0, g.jsxs)("div", {
                    className: "rockstargames-modules-core-headeredf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, g.jsx)("h2", {
                      children: r
                    }), f && (0, g.jsx)("span", {
                      className: "rockstargames-modules-core-headerd7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, g.jsx)(Na, {
                    prevRef: _,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {}
                  })]
                }), a && (0, g.jsx)("div", {
                  className: "rockstargames-modules-core-headera1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), N ? (0, g.jsx)(ee.wx, {
              slidesPerView: N,
              onInit: e => {
                j(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (A(t), R(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: C,
              modules: [va._2],
              breakpoints: H,
              slideClass: T("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                p({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                p({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                p({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: r?.toLowerCase() ?? ""
                })
              },
              children: h
            }) : ""]
          })
        }), null),
        wa = {
          pillBtn: "rockstargames-modules-core-headerd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-core-headerbe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-core-headerd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-core-headerc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-core-headera271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-core-headerae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-core-headerf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-core-headerf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-core-headerd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-core-headerfb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-modules-core-headerf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-core-headere999b9cecfe233bcee8cab8682fb96bf"
        },
        ja = {
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
        Ca = {
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
        Ia = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const r = $(t ?? null),
            n = $(s ?? r);
          return (0, g.jsx)("div", {
            className: wa.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${n})`
            },
            children: (0, g.jsx)("h5", {
              children: a
            })
          })
        },
        Ta = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            t && r(t.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: r,
                desktop: n
              } = s;
              return e.push((0, g.jsx)(Ia, {
                title: t,
                mobileImg: r?.full_src,
                desktopImg: n?.full_src
              })), e
            }), []))
          }), [t]), s ? (0, g.jsx)("div", {
            className: wa.shardsCarousel,
            children: (0, g.jsx)(Sa, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        Ma = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            description: s,
            expandingButtonLabel: r = "Subscribe",
            title: n
          } = e;
          const [i, o] = (0, c.useState)([]), [d, l] = (0, c.useState)([]);
          return (0, c.useEffect)((() => {
            o(t.reduce(((e, a) => a.isInExpandingButton ? (e.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }), e) : e), [])), l(t.reduce(((e, a) => (a.isInExpandingButton || e.push({
              icon: a.platform ? a.platform : "",
              title: a.buttonText,
              to: a.href
            }), e)), []))
          }), t), t.length ? i.length ? (0, g.jsx)(sa.motion.div, {
            variants: a ? Ca : void 0,
            children: (0, g.jsxs)(ma, {
              buttonText: r,
              platformsAndLinks: i,
              children: [(0, g.jsxs)(sa.motion.div, {
                className: wa.descriptions,
                variants: a ? Ca : void 0,
                children: [(0, g.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: n
                  }
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!d && !!d.length && (0, g.jsx)(sa.motion.div, {
                variants: Ca,
                children: (0, g.jsx)(Z, {
                  buttons: d,
                  className: wa.buttonGroup
                })
              })]
            })
          }) : (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)(sa.motion.div, {
              className: wa.descriptions,
              variants: a ? Ca : void 0,
              children: [(0, g.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              }), (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!d && !!d.length && (0, g.jsx)(sa.motion.div, {
              variants: Ca,
              children: (0, g.jsx)(Z, {
                buttons: d,
                className: wa.buttonGroup
              })
            })]
          }) : (0, g.jsxs)(sa.motion.div, {
            className: wa.descriptions,
            variants: a ? Ca : void 0,
            children: [(0, g.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: n
              }
            }), (0, g.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        Ea = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            description: r = "",
            expandingButtonLabel: n = "Subscribe",
            title: i = "",
            legalText: o
          } = e;
          return (0, g.jsxs)(sa.motion.div, {
            className: wa.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? ja : void 0,
            children: [(0, g.jsx)(sa.motion.div, {
              variants: a ? Ca : void 0,
              children: (0, g.jsx)(j, {
                brands: t
              })
            }), (0, g.jsx)(Ma, {
              animated: a,
              ctas: s,
              description: r,
              expandingButtonLabel: n,
              title: i
            }), o && (0, g.jsx)(sa.motion.div, {
              className: wa.legalText,
              variants: a ? Ca : void 0,
              children: (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        La = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: r,
            ctas: n = [],
            description: i = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: c,
            layeredImageSettings: d,
            legalText: l,
            shardsSection: m = {},
            theme: u = "gen9",
            title: f = ""
          } = e;
          const p = (e => {
              if (!e) return null;
              const a = {},
                t = new Map([
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
                const [s, r] = e;
                if (t.has(s)) {
                  const e = t.get(s);
                  Object.entries(r).forEach((r => {
                    const [n, i] = r;
                    if (t.has(s) && t.has(n)) {
                      const s = `${t.get(n)}${e}`;
                      a[s] = "imageWidth" !== n ? i ? `${i}px` : "0px" : i ? `${i}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            k = $(t?.mobile?.full_src ?? null),
            _ = $(t?.desktop?.full_src ?? k),
            b = $(c?.mobile?.full_src ?? null),
            h = $(c?.desktop?.full_src ?? b);
          return (0, g.jsxs)(sa.motion.div, {
            className: T(wa.hero, r),
            style: {
              "--background-image-desktop": `url(${_})`,
              "--background-image-mobile": `url(${k})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? ja : void 0,
            "data-type": "hero",
            theme: u,
            children: [(0, g.jsxs)("div", {
              className: wa.images,
              children: [_ && k ? (0, g.jsx)("div", {
                className: wa.background,
                style: t?.style ?? {}
              }) : "", b && h ? (0, g.jsx)("div", {
                className: wa.layered,
                style: d ? p : {}
              }) : "", (0, g.jsx)("div", {
                className: wa.gradient
              })]
            }), (0, g.jsx)(Ea, {
              animated: a,
              ctas: n,
              description: i,
              expandingButtonLabel: o,
              title: f,
              brands: s,
              legalText: l
            }), m?.shards && (0, g.jsx)(Ta, {
              ...m
            })]
          })
        },
        Va = e => {
          let {
            children: a,
            attributes: t = {},
            className: s = "",
            style: r = {}
          } = e;
          return (0, g.jsx)("span", {
            className: T(s, t?.className, "rockstargames-modules-core-headera7f106a8036d74ed9282a741476c6b5a"),
            style: (0, M.G6)(r ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: F().unescape(a)
            }
          })
        };
      var Da = t(53592);
      const Pa = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Ba = {
          pillBtn: "rockstargames-modules-core-headercb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-headerc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-headerfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-headerb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-headeredc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-headerc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-headerc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-headere3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-headerc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-headerbcccd1077d13d7fe1585655e5c5f8363"
        },
        $a = (0, d.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s
          } = e;
          const r = (0, u.useLocation)(),
            n = (0, d.useIntl)(),
            [i, o] = (0, d.getLocale)(),
            [l, m] = (0, c.useState)(!1),
            f = (0, c.useMemo)((() => (0, Da.c)()), []),
            k = (0, c.useCallback)((e => {
              let a = r.pathname;
              const t = a.split("/");
              return d.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), f.currentSite?.site === Da.U.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
            }), [r]),
            _ = (0, c.useRef)(null),
            [b, h] = (0, c.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            x = e => {
              if (s && s(!1), i.subdomaincom === e || "none" === e) return void(s && s(!1));
              const a = d.locales.find((a => a.subdomaincom === e));
              a && (o(a.iso), window.location.href = k(e))
            };
          return (0, c.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === l && m(!1)
          }), [t]), (0, c.useEffect)((() => {
            _.current && h(_.current.scrollHeight)
          }), [_]), (0, g.jsxs)("div", {
            className: [Ba.languageSelector, l ? Ba.open : ""].join(" "),
            "data-theme": a,
            children: [v && "sc-menu" === a && (0, g.jsx)("div", {
              className: Ba.selectBoxWrapper,
              children: (0, g.jsxs)("select", {
                className: Ba.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  x(e.currentTarget.value)
                },
                "aria-label": n.formatMessage(Pa.language_selector_default),
                children: [(0, g.jsx)("option", {
                  className: Ba.selectBoxOption,
                  value: "none",
                  children: (0, g.jsx)(d.FormattedMessage, {
                    ...Pa.language_selector_default
                  })
                }), d.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, g.jsx)("option", {
                    className: Ba.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!v || "sc-menu" !== a) && (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!l), m(!l)
                },
                type: "button",
                "aria-label": n.formatMessage(Pa.language_selector_default),
                children: [(0, g.jsx)("i", {}), (0, g.jsx)("span", {
                  children: (0, g.jsx)(d.FormattedMessage, {
                    ...Pa.language_selector_default
                  })
                })]
              }), (0, g.jsx)("div", {
                className: Ba.linkWrapper,
                ref: _,
                style: {
                  "--ls-linkWrapper-opened-height": `${b}px`
                },
                children: (0, g.jsx)("div", {
                  className: Ba.links,
                  children: d.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, g.jsx)(p, {
                      to: k(a),
                      onClick: () => {
                        x(a)
                      },
                      tabIndex: l ? 0 : -1,
                      children: t
                    }, `desktop-${a}`)
                  }))
                })
              })]
            })]
          })
        }), l),
        za = {
          layeredImage: "rockstargames-modules-core-headera29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-core-headeraabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-core-headerca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-core-headerf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-core-headere03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-core-headerc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-core-headerb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-core-headere9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-core-headere45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-core-headered8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-core-headerfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-core-headerb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-core-headerba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-core-headerec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-core-headera6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-core-headerd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-core-headerca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-core-headerbd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-core-headerfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-core-headerbde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-core-headerb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-core-headerac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-core-headerd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-core-headerd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-core-headera8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-core-headerdcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-core-headerb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-core-headeradaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-core-headerc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-core-headere650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-core-headerb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-core-headere41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-core-headerdb575e1d021e69ebb4265a29484e2888"
        },
        Fa = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            r = a["--border-image-source"],
            n = $(r || null);
          return r && (s["--border-image-source"] = `url(${n})`), (0, g.jsx)("div", {
            className: T(za.border, t),
            style: {
              ...s
            }
          })
        },
        Oa = e => e?.images ? (0, g.jsx)("div", {
          className: T(za.layeredImage, za[e?.variantClass], za[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, g.jsxs)("div", {
            className: za.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: n,
                positionClassX: i,
                positionClassY: o,
                zIndex: c,
                className: d,
                style: l,
                alt: m,
                displayClass: u
              } = e;
              return (0, g.jsx)(Le, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: l,
                className: T(d, u, za.imageLayer, za[s], za[r], za[n], za[i], za[o]),
                alt: m
              }, c ?? a + 1)
            })), e?.borderImage && (0, g.jsx)(Fa, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Aa = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, g.jsx)("div", {
            className: "rockstargames-modules-core-headerefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        Ua = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: r,
            image: n,
            style: i,
            className: o = "",
            attributes: c = {},
            role: d,
            hero: l = !1
          } = e;
          return (0, g.jsx)(Aa, {
            hero: l,
            children: (0, g.jsx)("figure", {
              children: (0, g.jsxs)("div", {
                className: T("rockstargames-modules-core-headercab262c98c7f5bb3e982d9b075b3c2a8", l ? "rockstargames-modules-core-headercefd6d8859aeec1057caed28caa160c3" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, o),
                style: (0, M.G6)({
                  ...i,
                  ...c?.style
                }),
                ...c,
                children: [(0, g.jsx)(Le, {
                  image: n,
                  className: o
                }), (n?.badge || n?.discountTxt || a || s) && (0, g.jsx)(qe, {
                  badge: n?.discountTxt ?? n?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: n?.splitter ?? r,
                  role: n?.role ?? d
                }), n?.caption && (0, g.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: n.caption
                  }
                })]
              })
            })
          })
        },
        Ra = {
          pillBtn: "rockstargames-modules-core-headereea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-core-headerd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-core-headerdc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-core-headeree782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-core-headerfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-core-headerf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Ha = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: r,
            lazy: n = !1,
            decoding: i = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, c.useState)(!1);
          return (0, g.jsxs)("div", {
            className: Ra.multiSourceContainer,
            children: [!d && (0, g.jsx)("img", {
              className: [t, Ra.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, g.jsx)("img", {
              className: [Ra.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: n ? "lazy" : "eager",
              decoding: i
            })]
          });
          var m
        },
        Ga = {
          tag: "rockstargames-modules-core-headered77774d2704bc0ebc0ac156542ae053"
        },
        Wa = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: r
          } = e;
          const n = (0, g.jsxs)("div", {
            style: r,
            className: [Ga.tag, a].join(" "),
            children: [(0, g.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, g.jsx)(p, {
            to: t,
            children: n
          }) : n
        },
        qa = {
          newswireBlock: "rockstargames-modules-core-headera793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-core-headerd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-core-headercc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-core-headerffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-core-headerbbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-core-headerf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-core-headerfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-core-headere380e8c67066df6f33fc018341ea96e5"
        },
        Ja = e => {
          let {
            index: a,
            post: t,
            noSpecialOrder: s = !1,
            style: r = {}
          } = e;
          const [n] = (0, u.useSearchParams)(), i = t.preview_images_parsed.newswire_block, o = {
            default: 0 !== a || s ? i.square || i.d16x9 || i._fallback : i.d16x9 || i.square || i._fallback,
            mobile: i.square || i._fallback
          }, [c, d] = (0, M.kJ)(o.default), [l, m] = (0, M.kJ)(o.mobile), f = {
            default: {
              backgroundImage: `url(${o.default})`
            },
            mobile: {
              backgroundImage: `url(${o.mobile})`
            }
          };
          return (0, g.jsx)(p, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${t.title}`,
            to: t.url,
            className: [qa.newswireBlock, s ? qa.newswireBlockNoSpecialOrder : "", null !== c ? qa.startAnimation : ""].join(" "),
            children: (0, g.jsxs)(g.Fragment, {
              children: [0 !== a || n.get("tag_id") ? (0, g.jsx)("div", {
                className: qa.preview,
                style: f.default
              }) : (0, g.jsxs)(g.Fragment, {
                children: [(0, g.jsx)("div", {
                  className: qa.previewMobile,
                  style: f.mobile
                }), (0, g.jsx)("div", {
                  className: qa.preview,
                  style: f.default
                })]
              }), (0, g.jsxs)("div", {
                className: qa.info,
                children: [(0, g.jsxs)("div", {
                  className: qa.top,
                  children: [t.primary_tags.length ? (0, g.jsx)(Wa, {
                    title: t.primary_tags[t.primary_tags.length > 1 && 722 === t.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, g.jsx)("time", {
                    dateTime: t.created,
                    children: t.created_formatted
                  })]
                }), (0, g.jsx)("h5", {
                  className: qa.title,
                  dangerouslySetInnerHTML: {
                    __html: t.title
                  }
                })]
              })]
            })
          })
        };
      var Xa = t(55492),
        Ka = t.n(Xa);
      const Qa = (0, M.Ux)((e => {
          let {
            relativeTo: a = "",
            tagId: t = null,
            metaUrl: s = "/newswire",
            t: r
          } = e;
          const [n] = (0, u.useSearchParams)(), {
            tagId: i = null
          } = (0, u.useParams)(), [o, d] = (0, c.useState)(i ?? t ?? n.get("tag_id")), [l, m] = (0, c.useState)(1), [f, p] = (0, c.useState)([]), [k, _] = (0, c.useState)(null), {
            data: h
          } = (0, b.UL)(Ka(), {
            variables: {
              tagId: Number(o),
              page: l,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            m(1), p([]), d(i ?? t ?? n.get("tag_id"))
          }), [n.get("tag_id")]), (0, c.useEffect)((() => {
            h && h.posts && h.posts.paging && _(h.posts.paging), h && h.posts && h.posts.results && p(f.concat(h.posts.results))
          }), [h]), f.length ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(at, {
              posts: f,
              relativeTo: a,
              noSpecialOrder: null !== o
            }), null !== k && k.nextPage ? (0, g.jsx)(I, {
              onClick: () => m(l + 1),
              disabled: !1,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Ya = {
          pillBtn: "rockstargames-modules-core-headerafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-core-headerbcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-core-headera748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-core-headerc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-core-headerb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Za = (0, M.Ux)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, g.jsxs)("section", {
            className: Ya.related,
            children: [(0, g.jsx)("h2", {
              children: t("Related Stories")
            }), (0, g.jsx)("div", {
              className: [Ya.posts, 1 === a.length ? Ya.just1post : ""].join(" "),
              children: a.map((e => (0, g.jsx)(Ja, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        et = {
          newswireBlocks: "rockstargames-modules-core-headerc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-core-headerc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        at = (0, M.S6)((e => {
          let {
            noSpecialOrder: a = !1,
            posts: t,
            gtmTrack: s,
            relativeTo: r
          } = e;
          return (0, c.useEffect)((() => {
            if (!t.length) return;
            const e = {
              event: "trackEvent",
              eventCategory: "Home",
              eventAction: "Newswire Impressions",
              ecommerce: {
                impressions: []
              }
            };
            t.map(((a, t) => {
              e.ecommerce.impressions.push({
                name: a.title,
                id: a.id,
                position: t + 1,
                list: "Home"
              })
            })), s(e)
          }), [t.length]), (0, g.jsx)("div", {
            className: [et.newswireBlocks, a ? et.noSpecialOrder : "", et.contextHome].join(" "),
            children: t.map(((e, t) => (0, g.jsx)(Ja, {
              index: t,
              noSpecialOrder: a,
              post: e
            }, e.id)))
          })
        })),
        tt = {
          pillBtn: "rockstargames-modules-core-headerf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-modules-core-headera8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-modules-core-headera57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-modules-core-headerdaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-modules-core-headerbd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-modules-core-headera6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-modules-core-headere88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-modules-core-headerab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-modules-core-headerc20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-modules-core-headerb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-modules-core-headerd0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-modules-core-headerd1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-modules-core-headerd6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-modules-core-headerf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-modules-core-headera6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-modules-core-headereade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-modules-core-headera82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-modules-core-headerd394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-modules-core-headerf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-modules-core-headercdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-modules-core-headerba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: st
        } = De(),
        rt = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: r,
            className: n,
            game: i,
            noImg: o,
            columns: d,
            mobileColumns: l
          } = e;
          const [m, u] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            u(a)
          }), [a]), t || a ? d && m ? (0, g.jsx)("div", {
            className: tt.grid,
            style: {
              "--ordered-list-grid-column": d,
              "--ordered-list-grid-column-mobile": l ?? d
            },
            children: (0, g.jsx)("ol", {
              style: (0, M.G6)(r),
              className: T(tt.itemList, tt.noImg, tt[s], tt[i]),
              children: m.map((e => (0, g.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: st(e.content)
                }
              }, e.content)))
            })
          }) : (0, g.jsx)("ol", {
            style: (0, M.G6)(r),
            className: T(tt.itemList, tt.custom, o ? tt.noImg : "", s ? tt[s] : "", i ? tt[i] : "", n ?? ""),
            children: a.map((e => (0, g.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: st(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        };
      var nt = t(67356),
        it = t(84296);
      const ot = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        ct = (0, d.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        dt = {
          pillBtn: "rockstargames-modules-core-headere6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-core-headere5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-core-headereee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-core-headerbf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-core-headercfa711252c08391d3a0f1ecd8728a61a"
        },
        lt = e => {
          let {
            tiers: a
          } = e;
          return (0, g.jsx)("div", {
            className: dt.packCardTierIndicator,
            children: a?.map(((e, a) => (0, g.jsx)("div", {
              className: [dt.tierIndicator, e.isComplete ? dt.active : ""].join(" ")
            }, a)))
          })
        },
        mt = {
          pillBtn: "rockstargames-modules-core-headere2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-core-headerff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-core-headerd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-core-headereb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-core-headerfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-core-headera124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-core-headerd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-core-headercbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-core-headerd4649f3812d37e7407503d49dcaaba04"
        },
        ut = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        ft = e => {
          let {
            title: a,
            url: t,
            images: s,
            className: r,
            tiers: n,
            onClick: i,
            imageSize: o = 420,
            imageLoaded: l
          } = e;
          const {
            isMobile: m
          } = (0, M.bk)(), {
            loggedIn: f
          } = (0, ne.yi)(), {
            selectedCharacterTuple: p
          } = (0, ne.of)(), [k, _] = (0, c.useState)(!1), [b, h] = (0, c.useState)(l), [v, x] = (0, c.useState)(!1), y = (0, d.useIntl)(), N = !!n?.length;
          (0, c.useEffect)((() => {
            if (Array.isArray(p)) {
              const e = p?.[0];
              x((0, M.I$)().includes(e))
            }
          }), [String(p)]), (0, c.useEffect)((() => {
            if (n && n.length > 0) {
              const e = n.some((e => !e.isComplete));
              _(!e)
            }
          }), [n]);
          const S = `${m?s?.mobile:s?.desktop}?im=Resize,height=${o}`;
          return (0, M.kJ)(S, (() => h(!0))), (0, g.jsx)(u.NavLink, {
            className: [mt.packCard, r, k ? mt.packCompleted : ""].join(" "),
            to: t,
            onClick: i,
            children: (0, g.jsxs)("div", {
              className: [mt.packCardImageBox, b ? mt.packCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${S}")`
              },
              children: [k && (0, g.jsxs)("div", {
                className: mt.badge,
                children: [(0, g.jsx)("div", {
                  className: mt.icon
                }), (0, g.jsx)("div", {
                  className: mt.label,
                  children: y.formatMessage(ct.pl_card_badge_content_complete)
                })]
              }), (0, g.jsxs)("div", {
                className: mt.packCardTextBox,
                children: [(0, g.jsx)("h4", {
                  children: a
                }), f && !k && v && (0, g.jsx)(lt, {
                  tiers: N ? n : ut
                })]
              })]
            })
          })
        },
        gt = {
          pillBtn: "rockstargames-modules-core-headerc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-core-headerff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-core-headerffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-core-headerf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-core-headera53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-core-headerb85775dc95fb3881171ee42e49076cbf"
        };
      nt.gsap.registerPlugin(it.Q);
      const pt = e => {
        let {
          isHeaderVisible: a,
          packListItems: t,
          packCardClassName: s = gt.packCard,
          packListClassName: r = gt.packList,
          packGridClassName: n = gt.packGrid,
          selectPackCard: i,
          sortFunction: o = ot
        } = e;
        const {
          track: d
        } = (0, ne.ye)(), l = (0, c.useRef)(null), m = [...t].sort(o), [u, f] = (0, c.useState)(), [p, k] = (0, c.useState)(!1);
        return (0, c.useEffect)((() => {
          if (!0 === p) return;
          clearTimeout(u);
          const e = setTimeout((() => {
            k(!0)
          }), 1e3);
          f(e)
        }), []), (0, it.Q)((() => {
          if (!1 !== p && l?.current) {
            const e = l.current.children;
            nt.gsap.to(e, {
              opacity: 1,
              y: 0,
              duration: .5,
              stagger: .05,
              ease: nt.Power2.easeInOut
            })
          }
        }), {
          dependencies: [p, t],
          scope: l,
          revertOnUpdate: !0
        }), (0, g.jsx)("div", {
          className: [r, a ? gt.headerVisible : ""].join(" "),
          "data-testid": "pack-list",
          children: (0, g.jsx)("div", {
            ref: l,
            className: n,
            "data-testid": "pack-grid",
            children: m.map(((e, a) => {
              let {
                id: t,
                name: r,
                title: n,
                url: o,
                images: c,
                tiers: d
              } = e;
              return (0, g.jsx)(ft, {
                title: n,
                url: o,
                className: s,
                images: c,
                tiers: d,
                onClick: () => ((e, a, t, s, r) => {
                  i(e, a, t, s, r)
                })(r, n, o, t, a)
              }, n)
            }))
          })
        })
      };
      var kt;

      function _t() {
        return _t = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, _t.apply(this, arguments)
      }
      const bt = e => c.createElement("svg", _t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), kt || (kt = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ht;

      function vt() {
        return vt = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, vt.apply(this, arguments)
      }
      const xt = e => c.createElement("svg", vt({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ht || (ht = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        yt = {
          pillBtn: "rockstargames-modules-core-headerf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-modules-core-headerf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-modules-core-headeref8ca38f98b731ff5dfe07937b1bbe34"
        },
        Nt = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, g.jsxs)("button", {
            type: "button",
            className: [t, yt.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, g.jsx)(bt, {}), "right" === a && (0, g.jsx)(xt, {})]
          })
        },
        St = {
          pillBtn: "rockstargames-modules-core-headerdb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-modules-core-headerb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-modules-core-headerbfe6fefc1068ed81c8b38519a854285f"
        },
        wt = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, g.jsx)("button", {
            type: "button",
            onClick: t,
            tabIndex: 0,
            "aria-label": a,
            className: [St.chipButton, s ? St.selected : ""].join(" "),
            children: (0, g.jsx)("div", {
              children: a
            })
          })
        },
        jt = (0, d.defineMessages)({
          plm_nav_scroll_left: {
            id: "plm_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          plm_nav_scroll_right: {
            id: "plm_nav_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        Ct = {
          pillBtn: "rockstargames-modules-core-headera06d15859ff923574165bb46a5f3d0c9",
          selected: "rockstargames-modules-core-headercce410d6b0f750e4332a82432812a32f",
          navMenu: "rockstargames-modules-core-headerc5752917b36e8045f6765318dcfad3da",
          navMenuMain: "rockstargames-modules-core-headerc507169b0a2e6c92ea16615a7740d669",
          sectionMenu: "rockstargames-modules-core-headera874d8cdf964d1c68df9cf8fdd085844",
          sectionItems: "rockstargames-modules-core-headera3f32f28bb1f1c6a4695c53680da9ed0",
          nextSectionNavButton: "rockstargames-modules-core-headere26ad999829c4c68eadd9af67ba89033",
          previousSectionNavButton: "rockstargames-modules-core-headerec50957bce6305ff1dc54a0f7d6a997b",
          previousNavButton: "rockstargames-modules-core-headerf9530895bd80a161771d5ca70d967f65",
          nextNavButton: "rockstargames-modules-core-headerfdd74c0f93dcc9be87ca508ab0fe469a",
          navFeaturedItems: "rockstargames-modules-core-headerc6f0521d960314244895945154ba6c4a",
          packListWrapper: "rockstargames-modules-core-headerf884d2636a68bc9c86f295b8229c435e"
        },
        It = e => {
          let {
            navItems: a,
            category: t,
            onNavItemClick: s,
            isOpen: r,
            isHeaderVisible: n,
            menuClass: i = Ct.navMenu,
            menuContainerClass: o = Ct.navMenuMain,
            menuSectionClass: l = Ct.sectionMenu,
            menuPrevBtnClass: m = Ct.previousNavButton,
            menuNextBtnClass: f = Ct.nextNavButton
          } = e;
          const p = (0, d.useIntl)(),
            {
              track: k
            } = (0, ne.ye)(),
            {
              pathname: _
            } = (0, u.useLocation)(),
            b = (0, c.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, _]),
            [h, v] = (0, c.useState)(b),
            [x, y] = (0, c.useState)(!1),
            [N, S] = (0, c.useState)(!1),
            [w, j] = (0, c.useState)(!1),
            C = (0, c.useRef)(null),
            I = (0, c.useCallback)(((e, a) => {
              C.current && C.current.slideTo(e), v(e), M(`Secondary Nav > ${a}`)
            }), [k]),
            T = (0, c.useCallback)(((e, t) => {
              M(`Secondary Nav > ${a[h].title} > ${e}`, t), s()
            }), [a, s, h, k]),
            M = (e, a) => {
              k({
                event: "nav_click",
                event_action: "click",
                event_category: "nav",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: a,
                element_placement: e
              })
            },
            E = (0, c.useCallback)((e => {
              S(e.isEnd), j(e.isBeginning)
            }), []);
          return (0, c.useEffect)((() => {
            C.current && ((C.current.wrapperEl.clientWidth || 0) > (C.current.el.clientWidth || 0) ? (y(!0), C.current.params.centeredSlides = !0, C.current.params.centeredSlidesBounds = !0) : (y(!1), C.current.params.centeredSlides = !1, C.current.params.centeredSlidesBounds = !1))
          }), [C.current?.wrapperEl.clientWidth, C.current?.el.clientWidth]), (0, g.jsx)(sa.motion.div, {
            className: i,
            initial: {
              height: 0
            },
            animate: {
              height: r ? "100dvh" : 0
            },
            transition: {
              ease: "easeInOut",
              duration: .4
            },
            children: (0, g.jsxs)("div", {
              className: o,
              children: [(0, g.jsxs)("div", {
                className: l,
                children: [!w && x && (0, g.jsx)("div", {
                  className: Ct.previousSectionNavButton,
                  children: (0, g.jsx)(Nt, {
                    direction: "left",
                    className: m,
                    onClick: () => C.current?.slidePrev(),
                    "aria-label": p.formatMessage(jt.plm_nav_scroll_left)
                  })
                }), (0, g.jsx)("div", {
                  className: Ct.sectionItems,
                  children: (0, g.jsx)(ee.wx, {
                    onBeforeInit: e => C.current = e,
                    onInit: E,
                    className: Ct.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: h,
                    onSlideChange: E,
                    onResize: E,
                    children: a.map(((e, a) => {
                      let {
                        title: t
                      } = e;
                      return (0, g.jsx)(ee.Ky, {
                        children: (0, g.jsx)(wt, {
                          title: t,
                          onClick: () => I(a, t),
                          selected: h === a
                        })
                      }, t)
                    }))
                  })
                }), !N && x && (0, g.jsx)("div", {
                  className: Ct.nextSectionNavButton,
                  children: (0, g.jsx)(Nt, {
                    direction: "right",
                    className: f,
                    onClick: () => C.current?.slideNext(),
                    "aria-label": p.formatMessage(jt.plm_nav_scroll_right)
                  })
                })]
              }), (0, g.jsx)("div", {
                className: Ct.packListWrapper,
                children: (0, g.jsx)(pt, {
                  isHeaderVisible: n,
                  packListItems: a[h]?.subNavItems || [],
                  selectPackCard: T
                })
              })]
            })
          })
        },
        Tt = "rockstargames-modules-core-headerc54c374409e11d1429ce99457cbf7441",
        Mt = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: r,
            className: n
          } = e;
          return (0, g.jsx)("a", {
            href: "#",
            className: r === t.page ? `rockstargames-modules-core-headerc0eebf4f915ff9f5cc362e22d6d7d976 ${n??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: a
          })
        },
        Et = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const r = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, g.jsxs)("div", {
            className: `rockstargames-modules-core-headera626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)(Mt, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, g.jsx)("div", {
                className: Tt,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, g.jsx)(Mt, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, g.jsxs)(g.Fragment, {
              children: [r.slice(-1)[0] + 1 < a.pageCount ? (0, g.jsx)("div", {
                className: Tt,
                children: "..."
              }) : "", (0, g.jsx)(Mt, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var Lt = t(77616);
      const Vt = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, Lt.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        Dt = {
          parallaxWrapper: "rockstargames-modules-core-headerdb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-core-headerd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-core-headerf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-core-headercb5937d1a102ac4a66c4e373e6253946"
        },
        Pt = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: r
          } = e;
          return (0, g.jsx)(Lt.qK, {
            scrollAxis: a,
            children: (0, g.jsx)(Vt, {
              children: (0, g.jsx)("div", {
                className: T(Dt.parallaxWrapper, Dt[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, t) => (0, c.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, g.jsx)("div", {})
              })
            })
          })
        },
        Bt = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const r = (() => {
            const {
              meta: e = {}
            } = D() ?? {}, a = (0, c.useMemo)((() => e?.cdn ?? e?.prod ?? !1), [e]);
            return (0, c.useCallback)((e => e ? e?.startsWith("http") ? P(e) : P(`${(0,M.kh)(a)}${e}`) : null), [a])
          })();
          if (!a || !a[0]?.image) return null;
          const n = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, g.jsx)(Lt.Sr, {
            className: T("rockstargames-modules-core-headerb8c85703a3c76902e49a61a6afcb81bc", t),
            layers: n,
            style: s
          })
        },
        $t = "rockstargames-modules-core-headerc4aa8e5d29b433c400796d0c493a9a4d",
        zt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: n = {},
            children: i
          } = e;
          return "horizontal" === s ? (0, g.jsx)(Lt.mw, {
            x: [a, t],
            className: T($t, r),
            styleOuter: n,
            children: i
          }) : (0, g.jsx)(Lt.mw, {
            y: [a, t],
            className: T($t, r),
            styleOuter: n,
            children: i
          })
        },
        Ft = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(66452),
                alt: "PC"
              } : {
                src: t(80804),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(14120),
                alt: "PS4"
              } : {
                src: t(70564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(33788),
                alt: "PS5"
              } : {
                src: t(62756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(37284),
                alt: "Xbox One"
              } : {
                src: t(12064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(19916),
                alt: "Xbox Series X|S"
              } : {
                src: t(7748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Ot = e => t(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        At = (0, d.defineMessages)({
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
          sc_menu_toggle: {
            id: "sc_menu_toggle",
            defaultMessage: "Toggle Social Club Menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        Ut = {
          pillBtn: "rockstargames-modules-core-headere4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-core-headereb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-core-headerdf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-core-headerc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-core-headere79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-core-headerc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-core-headereabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-core-headerb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-core-headerf1e0bcba6214698c490b8201bbd850b7"
        },
        Rt = (0, d.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, d.useIntl)(),
            {
              platform: r,
              platformUsername: n,
              mugshotUrl: i,
              stats: o
            } = a,
            [l, m] = (0, c.useState)(i),
            u = Ft(r, "large");
          return (0, g.jsxs)("div", {
            className: Ut.scCharacterCard,
            children: [(0, g.jsx)("div", {
              className: Ut.scAvatar,
              "data-size": "small",
              children: (0, g.jsx)("img", {
                src: l,
                alt: s.formatMessage(At.profile_selector_mugshot, {
                  userName: n
                }),
                onError: () => {
                  m(t(71084))
                }
              })
            }), (0, g.jsx)("div", {
              className: Ut.scCharacterStats,
              children: (0, g.jsxs)("div", {
                className: Ut.scCharNames,
                children: [(0, g.jsx)("img", {
                  src: u.src,
                  alt: u.alt
                }), (0, g.jsx)("div", {
                  className: Ut.scUserName,
                  "data-size": "small",
                  children: n
                }), (0, g.jsx)("div", {
                  className: Ut.scRp,
                  children: (0, g.jsxs)("div", {
                    className: Ut.scRpLevel,
                    children: [(0, g.jsx)("img", {
                      className: Ut.scRpIcon,
                      src: Ot(o.overview.rank.value),
                      alt: s.formatMessage(At.profile_selector_rp_icon)
                    }), (0, g.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), l),
        Ht = (0, b.C2)("@rockstargames/components/profile-switcher"),
        Gt = Ht("languageSelectorOpenedReactive", !1),
        Wt = e => Gt(e),
        qt = Ht("activeSubNavIdReactive", -1),
        Jt = e => qt(e),
        Xt = Ht("subNavExtraHeightReactive", -1),
        Kt = e => Xt(e),
        Qt = Ht("scNavOpenedReactive", !0),
        Yt = e => Qt(e),
        Zt = Ht("charListHiddenReactive", !0),
        es = e => Zt(e),
        as = () => {
          const e = (0, b.gh)(Gt),
            a = (0, b.gh)(qt),
            t = (0, b.gh)(Xt),
            s = (0, b.gh)(Qt),
            r = (0, b.gh)(Zt);
          return (0, c.useEffect)((() => {
            r || (e && Wt(!1), s && (Yt(!1), Jt(-1)))
          }), [r]), (0, c.useEffect)((() => {
            !e && r && (s || Yt(!0))
          }), [e, r]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Wt,
            activeSubNavId: a,
            setActiveSubNavId: Jt,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Kt,
            scNavOpened: s,
            setScNavOpened: Yt,
            charListHidden: r,
            setCharListHidden: es
          })), [e, a, t, s, r])
        };
      var ts = t(69760),
        ss = t.n(ts),
        rs = t(9860);
      const ns = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        is = e => ({
          text: e.formatMessage(At.sc_link_help),
          target: "_self",
          ga: {
            ...ns,
            text: At.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(At.sc_link_support),
            location: {
              domain: Da.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(At.sc_link_legal),
            location: {
              domain: Da.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(At.sc_link_privacy_policy),
            location: {
              domain: Da.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(At.sc_link_cookies_policy),
            location: {
              domain: Da.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(At.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(At.sc_link_do_not_sell_my_information),
            location: {
              domain: Da.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        os = {
          pillBtn: "rockstargames-modules-core-headereb30ffefc0c8fef449ca5348a2702622",
          selected: "rockstargames-modules-core-headercd058a755e77eeb55cf666fa43fadf75",
          scSubLink: "rockstargames-modules-core-headerfdaa918acc06706cbe191dedd40974af",
          scLink: "rockstargames-modules-core-headercbc80932118c48d8ec14448d8913d068"
        },
        cs = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: n,
            dataTestId: i,
            isSubLink: o,
            hasNotifications: c = !1,
            onClickCallback: d = (() => {}),
            tabIndex: l,
            reloadDocument: m = !1
          } = e;
          const {
            track: f
          } = (0, ne.ye)(), p = (0, Da.c)();
          let k = s;
          r && (k = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const _ = {
            ...n,
            link_url: k
          };
          return (0, g.jsxs)(u.Link, {
            className: o ? os.scSubLink : os.scLink,
            "data-testid": i || "menuLink",
            title: a,
            to: k,
            target: t,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: l,
            onClick: e => {
              f(_), d(e)
            },
            children: [a, c && (0, g.jsx)("span", {
              className: os.scLinkNotification
            })]
          })
        },
        ds = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: r,
            location: n,
            ga: i,
            hasNotifications: o = !1,
            dataTestId: d,
            children: l = [],
            activeSubNavId: m,
            setActiveSubNavId: u,
            setSubNavExtraHeight: f,
            reloadDocument: p = !1,
            onClickCallback: k = (() => {})
          } = e;
          const {
            windowWidth: _,
            windowHeight: b
          } = (0, M.bk)(), {
            track: h
          } = (0, ne.ye)(), {
            navOpen: v
          } = (0, ne.of)(), x = (0, c.useRef)(null), [y, N] = (0, c.useState)(0), [S, w] = (0, c.useState)(0), [j, C] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== a && !1 === j && C(!0), m === a && C(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!x.current) return;
            N(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), w(a)
            }
          }), [x, _, b]), l.length > 0 ? (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("button", {
              className: "rockstargames-modules-core-headeraf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": d || "menuButton",
              title: t,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": j,
              onClick: e => {
                e.stopPropagation(), h(i), m === a ? (u(-1), f(0)) : (u(a), f(y + S + S))
              },
              children: [(0, g.jsx)("span", {
                className: "rockstargames-modules-core-headerfd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, g.jsx)("span", {
                className: "rockstargames-modules-core-headerbe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, g.jsx)("nav", {
              className: "rockstargames-modules-core-headerff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${y}px`
              },
              children: l.map((e => (0, c.createElement)(cs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !v ? -1 : 0
              })))
            })]
          }) : (0, g.jsx)(cs, {
            text: t,
            target: s,
            href: r,
            location: n,
            ga: i,
            hasNotifications: o,
            dataTestId: d,
            isSubLink: !1,
            onClickCallback: k,
            tabIndex: v ? 0 : -1,
            reloadDocument: p
          })
        },
        ls = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, M.bk)(), r = (0, d.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: i,
            activeSubNavId: o,
            setActiveSubNavId: l,
            subNavExtraHeight: m,
            setSubNavExtraHeight: f
          } = as(), {
            setSelectedCharacterTuple: p,
            navOpen: k
          } = (0, ne.of)(), _ = (0, M.y_)(), b = (0, M._g)(_), [h, v] = (0, c.useState)(""), x = (0, u.useLocation)(), y = `${a.login}?returnUrl=${h}&lang=${b}`, N = `${a.signup}&returnUrl=${h}&lang=${b}`, S = (0, c.useMemo)((() => (0, Da.c)()), []), w = (0, c.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(At.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: At.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(At.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: At.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, is(e)])(r, y, N);
            return e
          }), [r, y, N, S]), [j, C] = (0, c.useState)(0), I = (0, c.createRef)(), T = () => {
            if (I.current) {
              const {
                current: e
              } = I, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, c.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [x]), (0, c.useEffect)((() => {
            p(!1)
          }), []), (0, c.useEffect)((() => {
            T(), ss()((() => {
              setTimeout(T, 0)
            }), 300)
          }), [t, s]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("nav", {
              className: "rockstargames-modules-core-headerb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, g.jsx)("div", {
                className: "rockstargames-modules-core-headerc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: I,
                style: {
                  "--scNavWrap-max-height": `${m+j}px`
                },
                children: w.map((e => (0, c.createElement)(ds, {
                  ...e,
                  activeSubNavId: o,
                  setActiveSubNavId: l,
                  setSubNavExtraHeight: f,
                  key: e.text
                })))
              })
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-headera6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: k ? null : "hidden"
              },
              children: (0, g.jsx)(rs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: n,
                setLanguageSelectorOpened: e => {
                  l(-1), i(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        ms = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: r
          } = e;
          const n = (0, d.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: o
            } = (0, ne.of)(),
            {
              track: l
            } = (0, ne.ye)(),
            m = (0, c.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: p,
              stats: k
            } = a,
            [_, b] = (0, c.useState)(p),
            [h] = (0, c.useState)(a.index),
            v = Ft(u, "large"),
            x = i === a.index;
          return (0, c.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, g.jsxs)("button", {
            className: "rockstargames-modules-core-headerd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), o(h);
              let a = "";
              "pc" === u ? a = "PC" : "ps4" === u ? a = "PS4" : "ps5" === u ? a = "PS5" : "xboxone" === u ? a = "Xbox One" : "xboxsx" === u && (a = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: h
              })
            },
            ref: m,
            tabIndex: r,
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-headerbbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, g.jsx)("img", {
                src: _,
                alt: n.formatMessage(At.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  b(t(71084))
                }
              })
            }), (0, g.jsxs)("div", {
              className: "rockstargames-modules-core-headerc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, g.jsxs)("div", {
                className: "rockstargames-modules-core-headere9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, g.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, g.jsx)("div", {
                  className: "rockstargames-modules-core-headerb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, g.jsx)("div", {
                className: "rockstargames-modules-core-headera5e3df42966a50f3dd88bbcb57536617",
                children: (0, g.jsxs)("div", {
                  className: "rockstargames-modules-core-headera6776312350028898320ba59145a39be",
                  children: [(0, g.jsx)("img", {
                    className: "rockstargames-modules-core-headerb266652910ad34c0e8e097b212a958f0",
                    src: Ot(k.overview.rank.value),
                    alt: n.formatMessage(At.profile_selector_rp_icon)
                  }), (0, g.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        us = {
          pillBtn: "rockstargames-modules-core-headerd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-headerbc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-headerb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-headerc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-headera8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-headerc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-headerda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-headerd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-headerd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-headerb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-headera581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-headerbdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-headerdc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-headerb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-headerf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-headerf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-headerb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-headerec696aafed90a7a4c69dc53da0a5bb36"
        },
        fs = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, ne.yi)(), {
            track: n
          } = (0, ne.ye)(), i = (0, d.useIntl)(), [o, l] = (0, c.useState)([]), [m, u] = (0, c.useState)(null), [f, p] = (0, c.useState)(null), [k, _] = (0, c.useState)(!1), [b, h] = (0, c.useState)(-1), [v, x] = (0, c.useState)([]), [y, N] = (0, c.useState)(0), S = t(71084), [w, j] = (0, c.useState)("0"), [C, I] = (0, c.useState)("0"), T = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            L((0, g.jsx)("img", {
              src: S,
              alt: i.formatMessage(At.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [E, L] = (0, c.useState)((0, g.jsx)("img", {
            className: us.scAvatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(At.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: M
          }));
          (0, c.useEffect)((() => {
            l(r.crews ?? [])
          }), [r]), (0, c.useEffect)((() => {
            L((0, g.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: M
            })), j(T(a.stats.overview.bank.value)), I(T(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, r]), (0, c.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), p(e.crewColour), h(e.rankOrder), _(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && _(!0))
            }))
          }), [o]), (0, c.useEffect)((() => {
            const e = [];
            if (!k && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, g.jsx)("div", {
                className: us.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, k, f]);
          const V = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, g.jsxs)("div", {
            className: us.scProfileDetails,
            onClick: V,
            onKeyUp: V,
            role: "button",
            tabIndex: -1,
            children: [(0, g.jsxs)("div", {
              className: us.scAvatar,
              children: [E, (0, g.jsx)("div", {
                className: us.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, g.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, g.jsxs)("div", {
              className: us.scProfileStats,
              children: [(0, g.jsx)("div", {
                className: us.scNames,
                children: (0, g.jsxs)("div", {
                  className: us.scTagsNames,
                  children: [(0, g.jsx)("span", {
                    className: us.scUserName,
                    children: a.platformUsername
                  }), m && (0, g.jsxs)("span", {
                    className: us.scCrewName,
                    "data-arrow-tag": k,
                    children: [m, !k && (0, g.jsx)("div", {
                      className: us.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, g.jsxs)("div", {
                className: us.scProgress,
                children: [(0, g.jsxs)("div", {
                  className: us.scRpLevel,
                  children: [(0, g.jsx)("img", {
                    className: us.scRpIcon,
                    src: Ot(y),
                    alt: i.formatMessage(At.profile_selector_rp_icon)
                  }), (0, g.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, g.jsxs)("div", {
                  className: us.scMoney,
                  children: [(0, g.jsxs)("span", {
                    className: us.scCash,
                    children: ["$", C]
                  }), (0, g.jsxs)("span", {
                    className: us.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        gs = (e, a) => {
          const [t, s] = (0, c.useState)(0);
          return (0, c.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, r = t.getBoundingClientRect(), {
                width: n
              } = r;
              let i = n;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                i += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(i)
            }
          }), [e]), t
        },
        ps = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: r = null,
            slideClickCallback: n = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: d = !1
          } = e;
          const l = (0, c.createRef)(),
            m = gs(l, !1),
            [u, f] = (0, c.useState)(!1),
            [p, k] = (0, c.useState)(0),
            [_, b] = (0, c.useState)(0),
            [h, v] = (0, c.useState)([s]),
            [x, y] = (0, c.useState)(h[0]),
            [N, S] = (0, c.useState)(252),
            [w, j] = (0, c.useState)(0),
            [C, I] = (0, c.useState)([]),
            [T, M] = (0, c.useState)([]),
            [E, L] = (0, c.useState)(!1),
            V = e => {
              if (!0 === u || !0 === d) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            D = e => {
              if (!0 === u || 0 === _ || !0 === d) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > _ ? 1 : -1,
                n = Math.abs(_ - t);
              n > a ? (s > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                k(e), y(h[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = p + 1 >= h.length ? h.length - 1 : p + 1;
                e < 0 && (e = 0), k(e), y(h[e]), r && r(e)
              })(), b(0)) : y(h[p] + n * s)
            },
            P = () => {
              !0 !== u && !0 !== d && (f(!0), !0 !== u && (y(h[p]), b(0)))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, c.createRef)())
            })), I(e)
          }), [i]), (0, c.useEffect)((() => {
            if (C.length < 1) return;
            S(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(t + a)
          }), [C]), (0, c.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              f(!1)
            }), t)
          }), [u, t]), (0, c.useEffect)((() => {
            v(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * m - .5 * N - 2 * s + w : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (m - (s - w))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * w)), a)
            })(a)))), 1 === i.length ? L(!0) : L(!1)
          }), [l.current, i, m]), (0, c.useEffect)((() => {
            const e = (a = p, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [i, p]), (0, c.useEffect)((() => {
            !0 !== o && !0 !== d || y(h[0])
          }), [d, o, h]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)("div", {
              className: "rockstargames-modules-core-headerab70c3f9c67ecd69d19216a5f4de5049",
              ref: l,
              onTouchStart: V,
              onTouchMove: D,
              onTouchEnd: P,
              onMouseDown: V,
              onMouseMove: D,
              onMouseUp: P,
              onClick: () => {
                null !== n && n(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, g.jsx)("div", {
                className: "rockstargames-modules-core-headera93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${x}px)`
                },
                children: i.map(((e, a) => (0, g.jsx)("div", {
                  className: "rockstargames-modules-core-headerc013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), T.length > 1 && !1 === o && (0, g.jsx)("div", {
              className: "rockstargames-modules-core-headerda8cfef07bf44e9a44839e2723ec61bb",
              children: T.map((e => (0, g.jsx)("div", {
                className: "rockstargames-modules-core-headerfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ks = {
          pillBtn: "rockstargames-modules-core-headeraa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-headerd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-headerdde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-headerc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-headera4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-headerb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-headera1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-headera326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-headerd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-headerbb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-headera7f1e2d78519eaf099bd43c6ad07abc9"
        },
        _s = (0, M.Ux)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: r,
            menuPadding: n,
            longCharList: i,
            setLongCharList: o,
            isMobileMode: l,
            setIsMobileMode: m
          } = e;
          const {
            windowWidth: f,
            windowHeight: p
          } = (0, M.bk)(), k = (0, d.useIntl)(), {
            languageSelectorOpened: _,
            setLanguageSelectorOpened: h,
            activeSubNavId: v,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            scNavOpened: S,
            setScNavOpened: w
          } = as(), [j, C] = (0, c.useState)(""), I = (0, u.useLocation)(), {
            lsSettings: T
          } = (0, M.ym)(), {
            track: E
          } = (0, ne.ye)(), L = (0, b.aI)(), {
            data: V,
            loggedIn: D
          } = (0, ne.yi)(), {
            charactersNeeded: P,
            currentCharId: B,
            hasNotifications: $,
            navOpen: z,
            setCurrentCharId: F,
            setHasNotifications: O,
            setSelectedCharacterTuple: A,
            setUserData: U
          } = (0, ne.of)(), [R, H] = (0, c.useState)(null), [G, W] = (0, c.useState)(null), [q, J] = (0, c.useState)(!1), [X, K] = (0, c.useState)(!1), [Q, Y] = (0, c.useState)(0), Z = (0, c.createRef)(), ee = gs(Z, !1), ae = (0, c.createRef)(), [te, se] = (0, c.useState)(0), [re, ie] = (0, c.useState)([]), [oe, ce] = (0, c.useState)(244), de = (0, c.useRef)(null), le = (0, c.useMemo)((() => (0, Da.c)()), []), me = (0, c.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(At.sc_link_activity_feed),
            location: {
              domain: Da.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(At.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(At.sc_link_settings),
              location: {
                domain: Da.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(At.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(At.sc_link_messages),
              location: {
                domain: Da.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(At.sc_link_game_activation),
              location: {
                domain: Da.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(At.sc_link_notifications),
            location: {
              domain: Da.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...ns,
              text: At.sc_link_notifications.defaultMessage,
              location: {
                domain: Da.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(At.sc_link_crews),
            location: {
              domain: Da.U.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...ns,
              text: At.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(At.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(At.sc_link_my_friends),
              location: {
                domain: Da.U.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(At.sc_link_import_friends),
              location: {
                domain: Da.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(At.sc_link_find_friends),
              location: {
                domain: Da.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...ns,
                text: At.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, is(e), {
            text: e.formatMessage(At.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...ns,
              text: At.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(k, a, V, $, j, window)), [k, a, V, $, j, le]), ue = () => {
            K(n + oe * Q < ee)
          }, fe = () => {
            if (ae.current) {
              const {
                current: e
              } = ae, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), se(a + e)
              } else se(a)
            }
          };
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            le.currentSite?.site === Da.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [I]), (0, c.useEffect)((() => {
            ie(V.characters[P] ?? [])
          }), [V, P]), (0, c.useEffect)((() => {
            V && U(V)
          }), [V]), (0, c.useEffect)((() => {
            const e = V?.characters.gtao;
            if (null !== D && !e.length) return void A(!1);
            if (null == B || !e.length) return;
            const a = e?.[B] ?? e?.[0] ?? null;
            A(!!a?.platform && [a.platform, a.characterSlot])
          }), [B, V, D]), (0, c.useEffect)((() => {
            (async () => {
              if (!V?.id) return;
              const {
                count: e
              } = await (0, M.s9)("notification/count", {
                pingBearer: L
              });
              O(e > 0)
            })()
          }), [V]), (0, c.useEffect)((() => {
            ue()
          }), [oe]), (0, c.useEffect)((() => {
            s(!0), m(f < 768), m(f < 768 || p < 649)
          }), [f, p]), (0, c.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), Y(e);
            const a = re.length > 0 ? re[B] ?? re[0] : null;
            if (!a) return;
            const t = null !== a ? Ft(a.platform, "large") : null;
            W(t), H(a), re.length > 1 ? J(!0) : J(!1), o(re.length - 1 > 3)
          }), [B, re]), (0, c.useEffect)((() => {
            ue()
          }), [Q, l, f, re]), (0, c.useEffect)((() => {
            fe(), ss()((() => {
              setTimeout(fe, 0)
            }), 300)
          }), [f, p]), (0, c.useEffect)((() => {
            const e = T?.currentCharId ?? 0;
            e !== B && F(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, T]), (0, g.jsxs)(g.Fragment, {
            children: [null !== R && "gtao" === P && (0, g.jsxs)("div", {
              className: ks.scProfile,
              ref: de,
              tabIndex: -1,
              "aria-label": k.formatMessage(At.profile_selector_profile_card),
              children: [(0, g.jsx)(fs, {
                s: ks,
                character: R,
                platformTag: G
              }), !0 === q && (0, g.jsxs)("div", {
                className: ks.scCharacterSelector,
                children: [(0, g.jsx)("button", {
                  className: ks.scCharacterSelectBtn,
                  "aria-hidden": !z,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), E({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, g.jsx)("span", {
                    children: (0, g.jsx)(d.FormattedMessage, {
                      ...At.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, g.jsx)("div", {
                  className: ks.scCharacterList,
                  "data-long-list": i,
                  "aria-hidden": t,
                  ref: r,
                  children: re.map((e => (0, g.jsx)(ms, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ce
                  }, e.mugshotUrl)))
                }), !0 === l && (0, g.jsx)("div", {
                  className: ks.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": X,
                  "aria-hidden": t,
                  ref: Z,
                  children: (0, g.jsx)(ps, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: X,
                    disableSwiper: X,
                    children: re.filter(((e, a) => a !== B)).map((e => (0, c.createElement)(ms, {
                      characterData: e,
                      setMobileCardWidth: ce,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, g.jsxs)("nav", {
              className: ks.scNav,
              "aria-hidden": !z,
              children: [(0, g.jsx)("button", {
                className: ks.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": z,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, g.jsx)("span", {
                  children: V.nickname
                })
              }), (0, g.jsx)("div", {
                className: ks.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${te+y}px`
                },
                children: me.map(((e, a) => (0, c.createElement)(ds, {
                  ...e,
                  id: a,
                  activeSubNavId: v,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, g.jsx)("div", {
              className: ks.scLanguageSelector,
              style: {
                visibility: z ? null : "hidden"
              },
              children: (0, g.jsx)(rs.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: _,
                setLanguageSelectorOpened: h
              })
            })]
          })
        })),
        bs = {
          scMenu: "rockstargames-modules-core-headerebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-headerf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-headere3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-headerff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-headerba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-headerd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-headerd8e443f5d0d9171449f5f1042f80aa17"
        },
        hs = (0, d.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, M.bk)(), a = (0, d.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: r,
            setActiveSubNavId: n,
            scNavOpened: i,
            setScNavOpened: o,
            charListHidden: l,
            setCharListHidden: m
          } = as(), [u, f] = (0, c.useState)(!1), {
            setBodyIsScrollable: p
          } = (0, M.Qz)(), {
            navHidden: k = !1
          } = (0, b.oT)(), {
            loggedIn: _
          } = (0, ne.yi)(), {
            currentCharId: h,
            navOpen: v,
            setNavOpen: x,
            userData: y
          } = (0, ne.of)(), {
            track: N
          } = (0, ne.ye)(), [S, w] = (0, c.useState)(!1), j = (0, b.gh)(ne.O0), C = (0, c.useRef)(), [I, T] = (0, c.useState)(0), E = (0, c.createRef)(), [L, V] = (0, c.useState)(!1), [D, P] = (0, c.useState)(0), [B, $] = (0, c.useState)(!1), {
            mutateLSSettings: z,
            lsSettings: F
          } = (0, M.ym)(), O = (0, c.useCallback)((e => {
            m(e), C.current && !0 === e && (C.current.scrollTop = 0)
          }), [C]);
          return (0, c.useEffect)((() => {
            null !== h && F.currentCharId !== h && z({
              key: "currentCharId",
              value: h
            }), !1 === _ ? z({
              key: "currentCharId",
              value: null
            }) : _ && !y && N({
              event: "account_synced"
            })
          }), [h, _]), (0, c.useEffect)((() => {
            C.current && (!1 === l && !1 === S && (C.current.style.height = `${C.current.scrollHeight}px`), !0 === l && (C.current.style.height = null))
          }), [l, C, S]), (0, c.useEffect)((() => {
            const e = () => {
                x(!1), O(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, c.useEffect)((() => {
            x(!1), O(!0)
          }), [k]), (0, c.useEffect)((() => {
            if (E.current) {
              const {
                current: e
              } = E, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [E]), (0, c.useEffect)((() => {
            p(!L || !v)
          }), [v, L]), (0, c.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            E.current && f(E?.current?.scrollHeight >= e)
          }), [E, e]), (0, c.useEffect)((() => {
            v || (n(-1), r(!1))
          }), [v]), (0, c.useEffect)((() => {
            s && (l || O(!0), i && (o(!1), n(-1)))
          }), [s]), (0, c.useEffect)((() => {
            i && (s && r(!1), l || O(!0))
          }), [i]), null === _ ? null : (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("div", {
              className: [bs.scMenu, v ? bs.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": B,
              "data-scroll-mode": u,
              ref: E,
              "aria-hidden": !v,
              children: [(0, g.jsx)("button", {
                className: bs.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  P(a)
                },
                onTouchMove: e => {
                  if (0 === D) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(D - a) > 1 && (P(0), x(!1))
                },
                children: (0, g.jsx)("img", {
                  className: bs.dragHandle,
                  src: t(82708),
                  alt: a.formatMessage(At.sc_menu_drag_handle)
                })
              }), _ ? (0, g.jsx)(_s, {
                sc: j,
                charListHidden: l,
                hideCharacterList: O,
                refCharacterListDesktop: C,
                menuPadding: I,
                longCharList: S,
                setLongCharList: w,
                isMobileMode: L,
                setIsMobileMode: V
              }) : (0, g.jsx)(ls, {
                sc: j,
                navOpen: v
              })]
            }), (0, g.jsx)("div", {
              className: [bs.scOverlay, v ? bs.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), l),
        vs = t(71084),
        xs = t(29314),
        ys = (0, d.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, d.useIntl)(),
            {
              data: s
            } = (0, ne.yi)(),
            {
              charactersNeeded: r,
              currentCharId: n,
              navOpen: i,
              setNavOpen: o
            } = (0, ne.of)(),
            {
              track: l
            } = (0, ne.ye)(),
            [m, u] = (0, c.useState)(null),
            [f, p] = (0, c.useState)(!1),
            [k, _] = (0, c.useState)(null),
            [b, h] = (0, c.useState)(!1),
            [v, x] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            x(s.characters[r] ?? [])
          }), [s, r]);
          const y = (0, c.useCallback)((e => {
            e.stopPropagation(), o(!i), 1 == !i && a(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: i ? "close" : "open"
            })
          }), [i]);
          return (0, c.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (v?.[n]?.mugshotUrl ?? s?.avatar) || vs : xs,
              t = Ft(v?.[n]?.platform, "small") ?? null;
            _(t), u(a), p(e), h(!!v?.[n]?.mugshotUrl)
          }), [s, v, n, vs, xs]), (0, g.jsxs)("button", {
            className: "rockstargames-modules-core-headerdc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": t.formatMessage(At.sc_menu_toggle),
            type: "button",
            onClick: e => y(e),
            "data-testid": "avaterMenuButton",
            children: [(0, g.jsx)("img", {
              className: "rockstargames-modules-core-headerce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                u(vs)
              },
              alt: s?.nickname || ""
            }), f && null !== k && (0, g.jsx)("img", {
              className: "rockstargames-modules-core-headeraaf21e74a659089f743bb160bdf95046",
              src: k.src,
              alt: k.alt
            }), f && (0, g.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-headercf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[n]?.platform ?? null
            })]
          })
        }), l),
        Ns = {
          pillBtn: "rockstargames-modules-core-headerb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-core-headerfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-core-headera586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-core-headerccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-core-headere4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-core-headerd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-core-headere56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-core-headerc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-core-headerbf34746d222495ab8e30cede8de42d71"
        },
        Ss = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: r = "Click here",
            ctaLink: n = "https://rockstargames.com",
            gradient: i = !0,
            image: o,
            imageOrientation: d = "right",
            title: l = ""
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            ref: f,
            inView: p
          } = (0, le.cD)({
            threshold: .6
          }), {
            track: k
          } = (0, ne.ye)(), _ = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${$(o)})` ?? 0,
            "--promo-order": "left" === d ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            p && !m && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), u(!0))
          }), [p]), (0, g.jsx)(g.Fragment, {
            children: (0, g.jsxs)(sa.motion.div, {
              className: Ns.promoModule,
              style: _,
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
              children: [(0, g.jsx)("div", {
                className: [Ns.promoModuleImage, i ? Ns.gradient : "", "left" === d ? Ns.left : Ns.right].join(" ")
              }), (0, g.jsxs)("div", {
                className: Ns.promoModuleContentContainer,
                children: [(0, g.jsx)(j, {
                  brands: t,
                  className: Ns.promoModuleBrands
                }), (0, g.jsxs)("div", {
                  className: Ns.promoModuleTextContent,
                  children: [l && (0, g.jsx)("h3", {
                    children: l
                  }), s && (0, g.jsx)("p", {
                    children: s
                  })]
                }), r && (0, g.jsx)(Y, {
                  to: n,
                  text: r,
                  onClick: () => {
                    k({
                      event: "cta_other",
                      event_category: "cta",
                      event_action: "other",
                      event_label: r,
                      element_placement: "promo module",
                      link_url: n,
                      text: r
                    })
                  }
                })]
              })]
            })
          })
        };
      var ws = t(35784);
      t(40168), t(66316);
      const js = {
          rating: "rockstargames-modules-core-headera1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-core-headercba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-core-headerff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-core-headerd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        Cs = (0, d.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, M.UN)(t(52884));
      const Is = ya((0, d.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: r,
            img: n = null,
            titleSlug: i = null,
            style: o = {},
            className: l
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            inView: f
          } = (0, le.cD)({
            threshold: .6
          }), [k, _] = (0, c.useState)({
            img_rating: n,
            rating_descriptors: a,
            rating_footer: s,
            url_rating: r
          }), {
            track: h
          } = (0, ne.ye)(), v = (0, d.useIntl)(), {
            data: x
          } = (0, b.UL)(ws.GameData, {
            variables: {
              titleSlug: i
            },
            skip: !i
          });
          if ((0, c.useEffect)((() => {
              x && _(x?.game)
            }), [x]), (0, c.useEffect)((() => {
              f && !m && k.img_rating && (h({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), u(!0))
            }), [f]), !k.img_rating) return null;
          const y = !!k.rating_descriptors;
          return (0, g.jsxs)("div", {
            className: [js.rating, y ? js.withDescriptors : js.withOutDescriptors, l || ""].join(" "),
            style: (0, M.G6)(o),
            children: [(0, g.jsx)(p, {
              to: k.url_rating,
              target: "_blank",
              children: (0, g.jsx)("img", {
                alt: v.formatMessage(Cs.components_ratings_link_alt, {
                  rating: (N = k.img_rating, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(7e4)(`./${k.img_rating}`)
              })
            }), y && (0, g.jsxs)("div", {
              className: js.text,
              children: [(0, g.jsx)("p", {
                className: js.descriptors,
                dangerouslySetInnerHTML: {
                  __html: k?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), k.rating_footer && (0, g.jsx)("hr", {}), k.rating_footer && (0, g.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: k.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var N
        }), l)),
        Ts = {
          responsiveFlexBox: "rockstargames-modules-core-headercef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-core-headera8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-core-headerbee8268780b292e5bc0da0b497e2c28f"
        },
        Ms = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [Ts.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Es = {
          responsiveFlexItem: "rockstargames-modules-core-headerae579f6183cf73c897e68c8aae5c9d9d"
        },
        Ls = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [Es.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        Vs = {
          responsiveGridBox: "rockstargames-modules-core-headera28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-core-headerbeddf36313a28976090b5a8b04d2594a"
        },
        Ds = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: r,
            style: n
          } = e;
          const i = n ? {
            ...n
          } : {};
          return void 0 !== t && (i.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== r && (i.gridTemplateRows = `repeat(${r}, 1fr)`), (0, g.jsx)("div", {
            className: [Vs.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: i,
            children: a
          })
        },
        Ps = {
          responsiveGridBox: "rockstargames-modules-core-headera39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-core-headerbe7a0966e2f0457c1172ac9da99020c6"
        },
        Bs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, g.jsx)("div", {
            className: [Ps.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        $s = {
          responsiveImage: "rockstargames-modules-core-headere31b43dce2e720669fb90bf539d22197"
        },
        zs = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: r,
            style: n = {}
          } = e;
          const [i, o] = (0, M.kJ)(a);
          return i ? (n.backgroundImage = `url(${a})`, (0, g.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [$s.responsiveImage, s ? $s.animateBox : "", t].join(" "),
            style: {
              ...n,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        Fs = {
          responsiveSection: "rockstargames-modules-core-headerfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-core-headerbdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Os = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: r
          } = e;
          return (0, g.jsx)("section", {
            className: [Fs.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: r ? (0, g.jsx)("div", {
              className: Fs.maxWidth,
              children: a
            }) : a
          })
        },
        As = () => (0, g.jsx)(p, {
          className: "rockstargames-modules-core-headerba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Us = () => {
          const {
            pathname: e
          } = (0, u.useLocation)();
          return (0, c.useEffect)((() => {
            window.scrollTo(0, 0)
          }), [e]), null
        },
        Rs = (0, c.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: r,
            requireUser: n
          } = e, {
            track: i
          } = (0, ne.ye)(n), [o, d] = (0, c.useState)(a?.current);
          return (0, c.useEffect)((() => {
            a?.current && d(a.current)
          }), [a]), ((e, a, t) => {
            const [s, r] = (0, c.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: n,
              scrollY: i
            } = s;
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
            const o = (0, c.useCallback)((() => {
              const e = document.documentElement,
                i = document.body,
                c = t?.scrollTop || e.scrollTop || i.scrollTop,
                d = t?.scrollHeight || e.scrollHeight || i.scrollHeight,
                {
                  clientHeight: l
                } = e,
                m = c / (d - l) * 100;
              if (n) {
                const e = Math.min(...n, d);
                if (m >= e) {
                  const s = n.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), r({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else r({
                ...s,
                scrollY: m
              })
            }), [n, t, a]);
            (0, c.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }), [o])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            i({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof s && s(a)
          }), o), r
        }));
      Rs.displayName = "ScrollTracker";
      const Hs = Rs,
        Gs = (0, M.Ux)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, c.useState)(""), s = (0, u.useNavigate)(), r = (0, b.aU)();
          return (0, g.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-core-headerb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, g.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, g.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Ws = {
          skeleton: "rockstargames-modules-core-headerf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-core-headere00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-core-headerdb0b80177710d337d93bddb97b8a7dea"
        },
        qs = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, g.jsx)("div", {
            className: [Ws.skeleton, Ws[a]].join(" ")
          }) : null
        },
        Js = (0, d.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Xs = {
          bodySmall: "rockstargames-modules-core-headerc048aacaedc7fb642f38c7f163c193e3"
        },
        Ks = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, g.jsxs)("div", {
            className: Xs.track,
            children: [(0, g.jsx)("p", {
              children: a
            }), (0, g.jsx)("p", {
              className: Xs.bodySmall,
              children: t
            })]
          })
        },
        Qs = (0, d.withIntl)((e => {
          let {
            children: a
          } = e;
          return (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-headere6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, g.jsx)("h4", {
              className: "rockstargames-modules-core-headercd3895fbae93ba04f1401487f6e6eddf",
              children: (0, g.jsx)(d.FormattedMessage, {
                ...Js.components_track_list_title
              })
            }), (0, g.jsx)("div", {
              className: "rockstargames-modules-core-headeref0cde8b15ded961605237d0e8328a9b",
              children: (0, g.jsx)("div", {
                className: "rockstargames-modules-core-headerbdd54186db17d27b3daebc4b9d58e09a",
                children: c.Children.map(c.Children.toArray(a), (e => (0, g.jsx)(Ks, {
                  ...e?.props
                })))
              })
            })]
          })
        }), l),
        Ys = "rockstargames-modules-core-headereca98eb0b5b84a0c9a2e6d952545a2d5",
        Zs = "rockstargames-modules-core-headerd3d0b4ecd3bddba96c73f49fcca34ed8",
        er = {
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
        ar = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: r = !1,
            slideChildren: n = [],
            variants: i = {
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
            track: d
          } = (0, ne.ye)(), [l, m] = (0, c.useState)([va.O4, va.Hj, va.eM]), [u, f] = (0, c.useState)(null), [p, k] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [va.O4, va.Hj, va.eM];
            r && e.push(va._2), m(e)
          }), [r]), (0, c.useEffect)((() => {
            if (!n) return;
            const e = n.map(((e, a) => (0, g.jsx)(ee.Ky, {
              children: e
            }, Symbol(a).toString())));
            k(e)
          }), [n]), p ? (0, g.jsxs)(sa.motion.div, {
            className: "rockstargames-modules-core-headerd4f245838b94234f21463a08a8112910",
            variants: i.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, g.jsx)(sa.motion.div, {
              className: Ys,
              variants: i.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, g.jsx)(ee.wx, {
                loop: s,
                navigation: r,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: l,
                breakpoints: er,
                className: Ys,
                onSlideNextTransitionEnd: () => {
                  d({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  d({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  d({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: a?.toLowerCase() ?? ""
                  })
                },
                children: p
              })
            }), (0, g.jsx)(sa.motion.div, {
              className: Zs,
              variants: i.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, g.jsx)(ee.wx, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: er,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: l,
                className: Zs,
                children: p
              })
            })]
          }) : null
        };
      var tr = t(504);
      const sr = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: r = !1
          } = e;
          const n = t ?? [a],
            {
              data: i
            } = (0, b.UL)(tr.TinaModulesInfo, {
              variables: {
                ids: n,
                sync: r
              },
              setTitleDataPath: s,
              skip: !n.length
            });
          return i?.tinaModulesInfo ?? null
        },
        rr = ya((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: r
          } = e;
          const n = sr({
            id: t,
            ids: s
          });
          if (!n) return (0, g.jsx)(qs, {
            skeleton: r
          });
          const i = n?.[0]?.tina;
          return i ? (0, g.jsx)(g.Fragment, {
            children: n.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, g.jsx)(J, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: n
                }
              }, t)
            }))
          }) : null
        })),
        nr = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [r, n] = (0, c.useState)(s);
          return (0, c.useEffect)((() => {
            s && n(s)
          }), [s]), (0, g.jsx)("div", {
            className: "rockstargames-modules-core-headera3cc68ab0d512c3d8835ee9abb7a51c4",
            style: t,
            "data-theme": r,
            children: a
          })
        };
      var ir = t(19168);
      const or = {
          pillBtn: "rockstargames-modules-core-headerae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-core-headerd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-core-headerfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-core-headerdd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-core-headereb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-core-headerd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-core-headerfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-core-headerabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-core-headerea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-core-headerc31731d09d8118c6a82fe6edb193dc50"
        },
        cr = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: n
          } = (0, ne.ye)(), {
            loggedIn: i
          } = (0, ne.yi)(), {
            refetch: o
          } = (0, b.UL)(ir.UserGetVote, {
            skip: !0
          }), [d] = (0, b.cQ)(ir.UserCastVote), [l, m] = (0, c.useState)(null), u = (0, c.useCallback)((async e => {
            n({
              event_action: l ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              r = await d({
                variables: a
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, c.useEffect)((() => {
            (async () => {
              if (!i || !t || !s) return;
              const e = await o({
                foreign_id: t,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, i]), (0, g.jsx)("div", {
            className: or.userVote,
            children: (0, g.jsxs)("div", {
              className: or.voteContent,
              children: [(0, g.jsxs)("div", {
                className: or.info,
                children: [(0, g.jsx)("h3", {
                  children: r
                }), (0, g.jsx)("p", {
                  children: a
                })]
              }), (0, g.jsxs)("div", {
                className: [or.voteButtons, i ? "" : or.loggedOutButtons].join(" "),
                children: [(0, g.jsx)("button", {
                  onClick: () => u(!0),
                  className: [or.upVote, l ? or.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, g.jsx)("button", {
                  className: [or.downVote, !1 === l ? or.voteButtonActive : ""].join(" "),
                  onClick: () => u(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        dr = {
          carousel: "rockstargames-modules-core-headerd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-core-headera3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-core-headerf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-core-headerd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-core-headera879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-core-headerb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-core-headerc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-core-headere25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-core-headerdd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-core-headerb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-core-headerdddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-core-headera7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-core-headere1d7433489996eb9fa890d452ebcb042"
        },
        lr = (0, M.au)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: r
          } = (0, M.Qz)(), [n, i] = (0, c.useState)(0), [o, d] = (0, c.useState)(0), l = (0, c.useRef)(null), m = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!l.current || m.current) return;
            const e = new(_())(l.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                i(n - 1 < 0 ? 0 : n - 1), d(0)
              },
              o = () => {
                const e = n + 1 >= s.length - 1 ? s.length - 1 : n + 1;
                i(e), d(0)
              },
              c = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(dr.dragging) || a() && r(!1)
              },
              u = () => {
                a() && r(!0), d(0)
              },
              f = e => {
                "press" === e.type && l.current?.classList.add(`${dr.disableClick}`), "tap" === e.type && (l.current?.classList.remove(`${dr.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                a() && r(!0), l.current && l.current.classList.remove(`${dr.disableClick}`)
              },
              p = () => {
                a() && r(!0)
              };
            return m.current.addEventListener("transitionend", p), e.on("swiperight", t), e.on("swipeleft", o), e.on("pan", c), e.on("panend", u), e.on("press tap", f), e.on("pressup", g), () => {
              e.off("swiperight", t), e.off("swipeleft", o), e.off("pan", c), e.off("panend", u), e.off("press tap", f), e.off("pressup", g), m.current && m.current.removeEventListener("transitionend", p), d(0)
            }
          }), [l.current, n]), (0, g.jsxs)("section", {
            className: dr.carousel,
            children: [(0, g.jsx)("div", {
              className: dr.track,
              ref: l,
              children: (0, g.jsx)("div", {
                className: `${dr.items} ${0!==o?dr.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${o}px))`
                },
                children: s.map(((e, a) => (0, g.jsx)(p, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: n === a ? dr.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: n === a ? 0 : -1,
                  children: (0, g.jsx)(kr, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, g.jsxs)("footer", {
              children: [(0, g.jsx)("div", {
                className: dr.text,
                children: s.map(((e, s) => (0, g.jsx)(p, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: n === s ? 0 : -1,
                  children: (0, g.jsxs)("div", {
                    className: [dr.info, s === n ? dr.active : ""].join(" "),
                    children: [(0, g.jsxs)("div", {
                      className: dr.title,
                      children: [(0, g.jsx)("div", {
                        className: dr.gameTitle,
                        children: `${e.game.title}${"fr_fr"===a?" ":""}`
                      }), (0, g.jsx)("h2", {
                        className: dr.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, g.jsx)(I, {
                      className: dr.cta,
                      children: t("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, g.jsx)("div", {
                className: dr.dots,
                children: s.map(((e, a) => (0, g.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => i(a),
                  className: n === a ? dr.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        mr = (0, d.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          },
          disabled_label: {
            id: "disabled_label",
            defaultMessage: "Disabled"
          }
        }),
        ur = {
          videoList: "rockstargames-modules-core-headera77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-core-headered556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-core-headerffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-core-headerffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-core-headercbdef484a85e8f352a06609b394d4da7",
          track: "rockstargames-modules-core-headerf3f263effe27f3c21f2ab822b9ee5dcf",
          dragging: "rockstargames-modules-core-headerc20488bcdf3f23bdf0c6c5b283ae08f4",
          arrow: "rockstargames-modules-core-headerc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-core-headerf30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-core-headerd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-core-headerc806076a1e3e23c77528ee12e32771a3"
        },
        fr = (0, d.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: r
          } = e;
          const n = (0, d.useIntl)(),
            i = void 0 !== t ? "games" : "videos",
            o = "videos" === i ? a : t.results,
            l = (0, c.useRef)(null),
            [m, u] = (0, c.useState)(0),
            [f, p] = (0, c.useState)(0),
            k = e => {
              const a = Math.ceil(o.length / m);
              let t = e;
              t < 0 ? t = 0 : t >= a - 1 && (t = a - 1), p(t)
            },
            [b, h] = (0, c.useState)(0);
          let v;
          return (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2 : e("1920px") && (a = 3), u(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, c.useEffect)((() => {
            if (l.current) {
              const e = new(_())(l.current),
                a = () => {
                  k(f - 1), h(0)
                },
                t = () => {
                  k(f + 1), h(0)
                },
                s = e => {
                  h(e.isFinal ? 0 : e.deltaX)
                },
                r = () => {
                  h(0)
                };
              return e.on("swiperight", a), e.on("swipeleft", t), e.on("pan", s), e.on("panend", r), () => {
                e.off("swiperight", a), e.off("swipeleft", t), e.off("pan", s), e.off("panend", r), h(0)
              }
            }
            return {}
          }), [l.current, f]), v = "games" === i ? (0, g.jsx)(g.Fragment, {
            children: t.results.map((e => 666 !== e.id && (0, g.jsx)(_a, {
              game: e,
              dontOverrideTo: !0,
              to: `/videos?type=game&gameId=${e.id}`
            }, e.id)))
          }) : (0, g.jsx)(g.Fragment, {
            children: a.map((e => (0, g.jsx)(_r, {
              video: e,
              gameTitleNecessary: r
            }, e.id)))
          }), (0, g.jsxs)("section", {
            className: ur.videoList,
            children: [(0, g.jsxs)("h3", {
              className: ur.sectionHeader,
              children: [s, (0, g.jsxs)("div", {
                className: ur.arrowNav,
                children: [(0, g.jsx)("button", {
                  className: [ur.arrow, ur.previous, 0 === f ? ur.disabled : ""].join(" "),
                  onClick: () => k(f - 1),
                  type: "button",
                  "aria-label": `${0===f?n.formatMessage(mr.disabled_label)+", ":""}${n.formatMessage(mr.previous_button_label)}`
                }), (0, g.jsx)("button", {
                  className: [ur.arrow, ur.next, f === Math.ceil(o.length / m) - 1 ? ur.disabled : ""].join(" "),
                  onClick: () => k(f + 1),
                  type: "button",
                  "aria-label": `${f===Math.ceil(o.length/m)-1?n.formatMessage(mr.disabled_label)+", ":""}${n.formatMessage(mr.next_button_label)}`
                })]
              })]
            }), (0, g.jsx)("div", {
              className: ur.items,
              children: (0, g.jsx)("div", {
                className: ur.trackWrapper,
                children: (0, g.jsx)("div", {
                  className: [ur.track, 0 !== b ? ur.dragging : ""].join(" "),
                  ref: l,
                  style: {
                    transform: `translateX(calc(-${100*f}% + ${b}px - (var(--standard-grid-gap) * ${f}))`,
                    gridAutoColumns: `calc(100 / ${m} * 1% - calc(var(--standard-grid-gap) * (${m-1}/${m}))`
                  },
                  children: v
                })
              })
            })]
          })
        }), l),
        gr = (0, M.Ux)((e => {
          let {
            error: a,
            t,
            domain: s = ""
          } = e;
          console.error({
            error: a
          });
          let r = a?.message ?? t("error-404-new");
          r = t("error-404-new");
          const n = a?.code ?? 398,
            i = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            i && i?.current && i.current.focus()
          }), [i]), (0, g.jsxs)("div", {
            className: "rockstargames-modules-core-headerd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, g.jsx)("h3", {
              tabIndex: -1,
              ref: i,
              children: `${r} (${n})`
            }), (0, g.jsx)(p, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, g.jsx)(Gs, {})]
          })
        })),
        pr = {
          videoPreview: "rockstargames-modules-core-headerc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-core-headerec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-core-headerab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-core-headere84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-core-headera322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-core-headerf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-core-headerdebff452a4923aded7de826c081bab5d"
        },
        kr = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = `${a.screencap}?im=Resize=${t}`,
            [r] = (0, M.kJ)(s);
          return (0, g.jsx)("div", {
            className: [pr.screencap, r ? pr.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        _r = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: r,
            toExplicit: n
          } = e;
          const i = n ?? `/videos/${s.id}`,
            o = {
              className: pr.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": i
            },
            c = (0, g.jsxs)("div", {
              className: pr.card,
              children: [(0, g.jsx)(kr, {
                video: s,
                size: r
              }), (0, g.jsxs)("div", {
                className: pr.info,
                children: [a ? (0, g.jsx)("div", {
                  className: pr.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, g.jsx)("h5", {
                  className: pr.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, g.jsx)("a", {
            href: i,
            target: "_blank",
            ...o,
            children: c
          }) : (0, g.jsx)(p, {
            to: i,
            ...o,
            children: c
          })
        };
      class br extends c.Component {
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
          return null !== this.state.error.code ? (0, g.jsx)(gr, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const hr = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, g.jsx)(br, {
              header: a,
              children: (0, g.jsx)(e, {
                ...t
              })
            })
          }
        },
        vr = (0, c.forwardRef)(((e, a) => {
          const {
            children: t,
            tag: s = "div"
          } = e, r = sa.m[s];
          return (0, g.jsx)(sa.LazyMotion, {
            features: sa.domAnimation,
            children: (0, g.jsx)(r, {
              ref: a,
              ...e,
              children: t
            })
          })
        }));
      vr.displayName = "LiteMotion";
      const xr = vr,
        yr = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Nr = {
          ease: "easeIn",
          duration: .4
        },
        Sr = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)(sa.motion.div, Object.assign({
            className: "rockstargames-modules-core-headerf0ee4e641f1ac92151be887c9ebb8392",
            variants: yr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Nr
          }, {
            children: a
          }))
        },
        wr = e => a => (0, g.jsx)(Sr, {
          children: (0, g.jsx)(e, Object.assign({}, a))
        }),
        jr = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Cr = {
          ease: "easeIn",
          duration: .75
        },
        Ir = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)(sa.motion.div, {
            className: "rockstargames-modules-core-headera479a10c5475b17a0564b60fecf98c8b",
            variants: jr,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Cr,
            children: a
          })
        },
        Tr = e => a => (0, g.jsx)(Ir, {
          children: (0, g.jsx)(e, {
            ...a
          })
        }),
        Mr = {
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
        Er = {
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
        Lr = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Er[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Vr = t(45164);
      const Dr = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Pr = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Br = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        $r = e => {
          let a, {
            type: t = Br.SPINNING
          } = e;
          switch (t) {
            case Br.THREE_DOTS:
              a = Pr;
              break;
            case Br.SPINNING:
            default:
              a = Dr
          }
          return (0, g.jsx)(Vr.c, {
            options: {
              loop: !0,
              autoplay: !0,
              animationData: a,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            },
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GetAudioAlbum = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = n(a, "UserGetVote"), e.exports.UserCastVote = n(a, "UserCastVote")
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = n(a, "TinaModulesList"), e.exports.TinaModulesInfo = n(a, "TinaModulesInfo")
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = n(a, "UserGetVote"), e.exports.UserCastVote = n(a, "UserCastVote")
    },
    55492: (e, a, t) => {
      var s = {
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
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !r[a] && (r[a] = !0, !0)
        }))
      }

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      s.definitions = s.definitions.concat(n(t(55104).definitions)), s.definitions = s.definitions.concat(n(t(61292).definitions));
      var o = {};

      function c(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), o[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = o[a] || new Set,
          r = new Set,
          n = new Set;
        for (s.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var i = n;
          n = new Set, i.forEach((function(e) {
            r.has(e) || (r.add(e), (o[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = c(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
    },
    55104: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
                      },
                      arguments: [],
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
          end: 380
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.postFields = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "postFields")
    },
    61292: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }],
        loc: {
          start: 0,
          end: 133
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "fragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.paging = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "paging")
    },
    35784: e => {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
    },
    40168: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Meta"
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
                value: "url"
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
                    value: "url"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 155
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Meta($locale: String!, $url: String!, $cache: Boolean = true) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $url) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.Meta = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "Meta")
    },
    66316: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideosList"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "limit"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
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
                        value: "game"
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
          end: 243
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query VideosList($locale: String!, $cache: Boolean = true, $limit: Int) {\n    videos(locale: $locale, limit: $limit) {\n        results {\n            id\n            title\n            game {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.VideosList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "VideosList")
    },
    76288: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
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
                value: "context"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
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
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
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
                    value: "name"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TagList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = r(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TagList")
    },
    13892: (e, a, t) => {
      var s = {
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
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 13892
    },
    52884: (e, a, t) => {
      var s = {
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
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 52884
    },
    7e4: (e, a, t) => {
      var s = {
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
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 7e4
    },
    6572: (e, a, t) => {
      var s = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 6572
    },
    18016: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 44616,
        "./VI/mobile.png": 17076
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 18016
    },
    83408: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 44616
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 83408
    },
    72027: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 17076
      };

      function r(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 72027
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
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c66a857ab4a5f8541cace25e15716b9e.svg"
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
    44616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17076: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
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