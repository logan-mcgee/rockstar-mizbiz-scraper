! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "80cd6a1f-2dd1-4f2c-9701-e0db2bd89044", e._sentryDebugIdIdentifier = "sentry-dbid-80cd6a1f-2dd1-4f2c-9701-e0db2bd89044")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [852], {
    65596: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        A: () => p,
        AudioPlayer: () => N,
        Badge: () => j,
        Brands: () => w,
        Button: () => C,
        ButtonGroup: () => z,
        CalloutSection: () => J,
        Carousel: () => $,
        ConditionalBlock: () => H,
        CookieAB: () => ie,
        CountryInputField: () => se,
        Cta: () => me,
        DescriptionArea: () => we,
        DiscountsBadge: () => Me,
        DotLoader: () => Ee,
        Dropdown: () => Pe,
        Embed: () => $e,
        ExpandingPlatformButton: () => Ke,
        FadeInContent: () => Qe,
        GameSiteHeader: () => Ze,
        Gen9Button: () => E,
        Gen9CoreCarousel: () => na,
        Grid: () => De,
        HTMLElement: () => pa,
        Hero: () => ua,
        HookStore: () => R,
        ImageWithBadge: () => Na,
        InViewTracker: () => Ia,
        LanguageSelector: () => ba,
        LayeredImage: () => xa,
        LoadingAnimation: () => zi,
        MultiSourceImage: () => fe,
        NewswireBlocks: () => Oa,
        NewswireCard: () => za,
        NewswireList: () => Va,
        NewswireRelated: () => Aa,
        NewswireTag: () => La,
        OrderedList: () => Ga,
        PackList: () => et,
        PackListMenu: () => pt,
        Paging: () => kt,
        ParallaxCacheBuster: () => vt,
        ParallaxInnerLayer: () => yt,
        ParallaxOuterLayer: () => jt,
        ParallaxWrapper: () => xt,
        ProfileSwitcher: () => s,
        PromoModule: () => ds,
        Rating: () => fs,
        ResponsiveFlexBox: () => ks,
        ResponsiveFlexItem: () => vs,
        ResponsiveGridBox: () => xs,
        ResponsiveGridItem: () => Ns,
        ResponsiveImg: () => ws,
        ResponsiveSection: () => Cs,
        RockstarLogo: () => Ts,
        ScrollSection: () => Is,
        ScrollToTop: () => Ms,
        ScrollTracker: () => Es,
        SearchBox: () => zs,
        Separator: () => ye,
        Skeleton: () => Ps,
        SrcsetImage: () => wa,
        TextFit: () => Ce,
        ThumbsGallery: () => Gs,
        TinaModuleFetchNRender: () => qs,
        TinaWrapper: () => Ws,
        TrackList: () => $s,
        UnorderedList: () => he,
        UserVote: () => Qs,
        VideoCard: () => i,
        VideoCarousel: () => Zs,
        VideoList: () => ni,
        VisuallyHidden: () => ri,
        Wasted: () => oi,
        framer: () => r,
        useTinaModuleFetchByIds: () => Hs,
        withInViewTracker: () => Ca,
        withSearchbarErrorBoundary: () => gi,
        withSimpleErrorBoundary: () => sa
      });
      var s = {};
      t.r(s), t.d(s, {
        CharacterCard: () => It,
        Menu: () => ns,
        MenuButton: () => cs
      });
      var i = {};
      t.r(i), t.d(i, {
        Art: () => li,
        Link: () => di
      });
      var n = {};
      t.r(n), t.d(n, {
        getVariant: () => Ti,
        transitions: () => Si,
        variants: () => Ci
      });
      var r = {};
      t.r(r), t.d(r, {
        Animations: () => n,
        LiteMotion: () => ki,
        withFadeIn: () => xi,
        withFadeUp: () => wi
      });
      var o = t(51664),
        c = t(41272);
      const l = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        d = (0, c.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var m = t(57013);
      const g = "rockstargames-modules-gtao-license-plateff481c537a56a6fcdb1be85dfbc8944e";
      var u = t(95240);
      const p = (0, c.withIntl)((e => {
        let {
          children: a,
          to: t = "#",
          alt: s = "",
          autoBlank: i = !1,
          onClick: n = (() => {}),
          focused: r = !1,
          ...l
        } = e;
        const p = (0, o.useRef)(null),
          f = (0, c.useIntl)(),
          _ = !/^(https?|mailto):/i.test(t),
          k = /^#/.test(t),
          b = l?.target ?? (i ? "_blank" : "_self");
        let {
          ...v
        } = l, h = "";
        if ("aria-label" in v && v["aria-label"] && (h = "_blank" === b ? `${v["aria-label"]} ${f.formatMessage(d.aria_label_open_new_window)}` : v["aria-label"]), (0, o.useEffect)((() => {
            r && p?.current && p.current.focus()
          }), [p?.current, r]), k) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), n && n(e)
          };
          return (0, u.jsxs)("a", {
            title: s,
            href: t,
            onClick: e,
            ...v,
            "aria-label": h,
            ref: p,
            children: [a, "_blank" === b && !h && (0, u.jsx)("span", {
              className: g,
              children: f.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (_) return (0, u.jsxs)(m.NavLink, {
          title: s,
          to: t,
          onClick: n,
          ...v,
          "aria-label": h,
          ref: p,
          children: [a, "_blank" === b && !h && (0, u.jsx)("span", {
            className: g,
            children: f.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const x = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: l[a]
        })), {});
        return "function" == typeof x?.className && delete x.className, (0, u.jsxs)("a", {
          href: t,
          title: s,
          onClick: n,
          target: b,
          ...x,
          "aria-label": h,
          ref: p,
          children: [a, "_blank" === b && !h && (0, u.jsx)("span", {
            className: g,
            children: f.formatMessage(d.aria_label_open_new_window)
          })]
        })
      }), l);
      var f = t(65772),
        _ = t.n(f),
        k = t(33052),
        b = t(90048);
      const v = {
          player: "rockstargames-modules-gtao-license-platebb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-modules-gtao-license-platee1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-modules-gtao-license-platee8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-modules-gtao-license-plateea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-modules-gtao-license-plateb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-modules-gtao-license-platec44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-modules-gtao-license-plateac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-modules-gtao-license-plateaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-modules-gtao-license-plateb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-modules-gtao-license-plateff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-modules-gtao-license-platea81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-modules-gtao-license-platec87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-modules-gtao-license-platec23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-modules-gtao-license-platee4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-modules-gtao-license-plateba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-modules-gtao-license-platefd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-modules-gtao-license-platec93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-modules-gtao-license-plateb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-modules-gtao-license-plated136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-modules-gtao-license-plated3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-modules-gtao-license-platef5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-modules-gtao-license-plateefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-modules-gtao-license-platef286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-modules-gtao-license-platea56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-modules-gtao-license-plateb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        h = e => {
          let {
            src: a
          } = e;
          return (0, u.jsx)("div", {
            className: v.cover,
            style: {
              background: `url(${a}) center/cover`
            }
          })
        },
        x = e => {
          let {
            timing: a = {
              current: 0,
              duration: 0
            },
            playing: t,
            audioRef: s,
            setPlaying: i,
            tracksOpen: n,
            setTracksOpen: r,
            trackData: c,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, o.useRef)(null),
            p = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            [k, b] = (0, o.useState)(null),
            [h, x] = (0, o.useState)(!1),
            y = e => {
              const a = new Date(1e3 * e),
                t = a.getUTCMinutes(),
                s = a.getSeconds();
              return `${t.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, o.useEffect)((() => {
            if (!p.current || !f.current) return;
            const e = () => {
              f.current && p.current && b(f.current.clientWidth > p.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [f, p, a]), (0, o.useEffect)((() => {
            if (!g.current || !a?.duration) return;
            let e = null;
            const t = new(_())(g.current),
              i = e => {
                if (g.current) {
                  const t = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    n = Number(i / t * a.duration);
                  s.currentTime = n
                }
              },
              n = () => {
                e ? s.pause() : s.play()
              },
              r = () => {
                e = s.paused, s.pause()
              };
            return t.on("panstart", r), t.on("panleft", i), t.on("panright", i), t.on("panend", n), t.on("tap", i), () => {
              t.off("panstart", r), t.off("panleft", i), t.off("panright", i), t.off("panend", n), t.off("tap", i)
            }
          }), [g.current, a.duration]), (0, o.useEffect)((() => {
            const e = Number(s?.currentTime);
            (t || !isNaN(e) && 0 !== e) && x(!0)
          }), [t, s?.currentTime]), (0, u.jsxs)("div", {
            className: v.controls,
            style: {
              "--track-color": c.color,
              "--track-mix-blend-mode": c.mix_blend_mode,
              "--current-pct": a.current / a.duration
            },
            children: [(0, u.jsx)("div", {
              className: [v.controlsCurrentBg, h ? v.controlsCurrentBgVisible : ""].join(" ")
            }), (0, u.jsx)("div", {
              className: v.controlsTrack,
              ref: p,
              children: (0, u.jsx)("span", {
                className: [v.controlsTrackTitle, k ? v.controlsTrackAnimating : ""].join(" "),
                ref: f,
                children: c.title
              })
            }), (0, u.jsxs)("div", {
              className: v.controlsButtons,
              children: [(0, u.jsx)("div", {
                className: v.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, u.jsx)("div", {
                className: [v.controlsPlayPause, t ? v.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!t)
                }
              }), (0, u.jsx)("div", {
                className: v.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, u.jsx)("div", {
              active: n ? "" : null,
              className: v.controlsTrackBurger,
              children: (0, u.jsx)("div", {
                className: v.iconBurger,
                onClick: () => {
                  r(!n)
                }
              })
            }), (0, u.jsxs)("div", {
              className: v.controlsScrub,
              children: [(0, u.jsx)("span", {
                children: y(a.current)
              }), (0, u.jsx)("div", {
                className: v.controlsScrubTrack,
                ref: g
              }), (0, u.jsx)("span", {
                children: y(a.duration)
              })]
            })]
          })
        },
        y = e => {
          let {
            tracks: a,
            trackId: t,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: n,
            setPlaying: r,
            setAutoNext: o
          } = e;
          return (0, u.jsxs)("div", {
            className: v.tracks,
            children: [(0, u.jsx)("h4", {
              children: "Tracks"
            }), (0, u.jsx)("div", {
              className: v.trackBurger,
              onClick: () => {
                n(!i)
              }
            }), (0, u.jsx)("div", {
              className: v.trackList,
              children: a.map(((e, a) => (0, u.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: t === e.id ? v.trackActive : "",
                onClick: () => {
                  s(e.id), r(!0), o(!0)
                },
                children: [(0, u.jsx)("span", {
                  className: v.trackIndex,
                  children: String(a + 1).padStart(2, "0")
                }), (0, u.jsx)("span", {
                  className: v.trackTitle,
                  children: e.title
                }), (0, u.jsx)("span", {
                  className: v.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        N = e => {
          let {
            id: a,
            className: t = ""
          } = e;
          const {
            data: s
          } = (0, k.useQuery)(b.GetAudioAlbum, {
            variables: {
              id: a
            }
          }), [i, n] = (0, o.useState)(), [r, c] = (0, o.useState)(), [l, d] = (0, o.useState)(), [m, g] = (0, o.useState)(!1), [p, f] = (0, o.useState)(!1), [_, N] = (0, o.useState)(new HTMLAudioElement), [j, w] = (0, o.useState)({
            current: 0,
            duration: 0
          }), [S, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            const e = "audio",
              a = a => {
                a?.data?.rockstarAudioPlayerPlayTrackId && (c(a.data.rockstarAudioPlayerPlayTrackId), C(!1), f(!0)), p && a?.data?.attentionBlurredElsewhere && a?.data?.from !== e && f(!1)
              };
            return p && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", a, !1), () => window.removeEventListener("message", a, !1)
          }), [p]), (0, o.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || w({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              a = () => {
                S && i && c(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", a), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", a)
            }
          }), [_, i, S]), (0, o.useEffect)((() => {
            p && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [p]), (0, o.useEffect)((() => {
            _ && (p ? _.play() : _.pause(), g(!1))
          }), [p, _, l?.id]), (0, o.useEffect)((() => {
            if (!r) return;
            const {
              tracks: e
            } = s.audioAlbum, a = s.audioAlbum.tracks.findIndex((e => e.id === r));
            n([e[a - 1]?.id ?? e[e.length - 1].id, e[a + 1]?.id ?? e[0].id]), d(e[a])
          }), [r]), (0, o.useEffect)((() => {
            s && c(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, u.jsxs)("div", {
            className: [v.player, v[t], m ? v.tracksOpen : ""].join(" "),
            children: [(0, u.jsx)("audio", {
              ref: e => {
                N(e)
              },
              src: l.mp3_src
            }), (0, u.jsx)(y, {
              tracks: s.audioAlbum.tracks,
              setTrackId: c,
              trackId: r,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: f,
              setAutoNext: C
            }), (0, u.jsx)(h, {
              src: l.cover_src
            }), (0, u.jsx)(x, {
              setTrackId: c,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: g,
              playing: p,
              setPlaying: f,
              timing: j,
              trackData: l,
              audioRef: _,
              setAutoNext: C
            })]
          }) : null
        },
        j = e => {
          let {
            text: a,
            style: t
          } = e;
          return (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-license-plateb61bd7f274fd6d93c4bf33a9284b6b67",
            style: t,
            children: a
          })
        },
        w = e => {
          let {
            brands: a = []
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platecde08e212f23b312d5afca7f2ea1105c",
            children: a.map(((e, a) => {
              let {
                brand: t
              } = e;
              return (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec894fe869384587702b5370da072be86",
                "data-brand": t
              }, a)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-modules-gtao-license-platee056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-modules-gtao-license-plated340cf27f380a4347994e59544432eb3"
        },
        C = e => {
          let {
            className: a = "",
            children: t,
            context: s = "",
            to: i,
            onClick: n,
            ...r
          } = e;
          const o = [S.button, S[s], a].join(" ");
          return i ? (0, u.jsx)(p, {
            ...r,
            to: i,
            className: o,
            onClick: n,
            children: t
          }) : (0, u.jsx)("button", {
            ...r,
            type: "button",
            className: o,
            onClick: n,
            children: t
          })
        };
      var T = t(1740);
      const I = {
          pillBtn: "rockstargames-modules-gtao-license-plateb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-modules-gtao-license-platef5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-modules-gtao-license-platecffaf489342637258d28f9b3b718836a",
          small: "rockstargames-modules-gtao-license-plateb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-modules-gtao-license-platee6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-modules-gtao-license-platecef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-modules-gtao-license-plateb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-modules-gtao-license-platecb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-modules-gtao-license-plated0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-modules-gtao-license-plateac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-modules-gtao-license-platec5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-modules-gtao-license-platea7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-modules-gtao-license-platea693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-modules-gtao-license-platea029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-modules-gtao-license-platee25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-modules-gtao-license-platee03d92653f19a7ae3c4b3d5137bc9909"
        },
        M = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            ariaLabel: n
          } = e;
          return (0, u.jsx)("button", {
            className: t,
            onClick: s,
            style: i,
            type: "button",
            "aria-label": n,
            children: a
          })
        },
        L = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            to: n,
            ariaLabel: r
          } = e;
          return (0, u.jsx)(m.NavLink, {
            className: t,
            onClick: s,
            style: i,
            to: n,
            "aria-label": r,
            children: a
          })
        },
        E = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: i = "",
            img: n,
            labelColor: r = "#000",
            onClick: o,
            secondText: c,
            size: l,
            text: d,
            to: m,
            type: g = "",
            ariaLabel: p
          } = e;
          const f = [I.plusButton, I[g] ?? "", I[l] ?? "", I[s] ?? "", t].join(" "),
            _ = {
              "--hvr-color": a ?? r,
              "--hvr-bg-color": r ?? a,
              "--hvr-border-color": a ?? r
            },
            k = (0, u.jsxs)(u.Fragment, {
              children: [n ? (0, u.jsx)("img", {
                src: n,
                alt: ""
              }) : "", (0, u.jsxs)("div", {
                className: I.btnText,
                icon: i,
                children: [d, c ? (0, u.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, u.jsx)("span", {
                onClick: o,
                onKeyDown: o,
                className: f,
                role: "button",
                "aria-label": p,
                tabIndex: 0,
                children: (0, u.jsx)("a", {
                  href: m,
                  target: e,
                  children: k
                })
              })
            }
            return (0, u.jsx)(L, {
              className: f,
              onClick: o,
              style: {
                ..._
              },
              to: m,
              ariaLabel: p,
              children: k
            })
          }
          return (0, u.jsx)(M, {
            className: f,
            onClick: o,
            style: {
              ..._
            },
            ariaLabel: p,
            children: k
          })
        },
        z = e => {
          let {
            buttons: a = [],
            className: t
          } = e;
          return a.length ? (0, u.jsx)("div", {
            className: (0, T.classList)("rockstargames-modules-gtao-license-plateb411a36e7fd12ab75861fe560b31b206", t),
            children: a.map(((e, a) => {
              let {
                icon: t,
                title: s,
                to: i
              } = e;
              return s ? (0, u.jsx)(E, {
                icon: t,
                text: s,
                to: i
              }, a) : ""
            }))
          }) : null
        };
      var B = t(48111),
        P = t(12231);
      const V = {
          deprecatedCarousel: "rockstargames-modules-gtao-license-plateeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-modules-gtao-license-plateeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-modules-gtao-license-plateb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-modules-gtao-license-platefa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-modules-gtao-license-platec9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-modules-gtao-license-platef2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-modules-gtao-license-platef1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-modules-gtao-license-platee70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-modules-gtao-license-platebace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-modules-gtao-license-platef4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-modules-gtao-license-plated6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-modules-gtao-license-plateb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-modules-gtao-license-platebb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-modules-gtao-license-platedd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-modules-gtao-license-platea59cf4385528c371a13be9962b67131b",
          active: "rockstargames-modules-gtao-license-plateaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-modules-gtao-license-platec05cc0faa8239c85cdc7d53c7e120e8e"
        },
        D = e => {
          let {
            item: a
          } = e;
          return (0, u.jsxs)("div", {
            children: [(0, u.jsx)(Na, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, T.classList)(V.img, a?.className)
            }), (a?.title || a?.description) && (0, u.jsx)(we, {
              item: a
            })]
          })
        },
        A = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, u.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, u.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        $ = e => {
          let {
            children: a,
            items: t = [],
            style: s = {},
            noInfiniteScroll: i = !1,
            className: n = "",
            renderTemplate: r = "standard",
            text: c,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, p] = (0, o.useState)(0), f = (0, o.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, P.c)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
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
          return (0, u.jsxs)("div", {
            className: (0, T.classList)(V.deprecatedCarousel, V[r], V[`infinite_${!i}`], a ? V.renderedWithChildren : "", n),
            style: s,
            children: [(0, u.jsxs)(B.wx, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => p(0),
              onActiveIndexChange: e => p(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, u.jsx)("div", {
                className: V.trackWrapper,
                children: (0, u.jsxs)("div", {
                  className: V.track,
                  children: [t?.map((e => (0, u.jsx)(B.Ky, {
                    children: (0, u.jsx)(D, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, u.jsx)(B.Ky, {
                    children: e
                  }, f && f[a])))]
                })
              }), (0, u.jsx)(A, {
                current: g,
                total: a ? a.length : t.length
              })]
            }), (c?.title || c?.description) && (0, u.jsx)(we, {
              item: c
            })]
          })
        };
      var O = t(45792),
        F = t(42836);
      const R = (0, t(62748).U1)(),
        G = e => e.some((e => !e)),
        U = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, i] = (0, o.useState)(!1), n = (e => {
            const [a] = (0, m.useSearchParams)(), [t, s] = (0, o.useState)(null), i = (0, F.useRockstarUser)(), {
              loggedIn: n
            } = i, {
              currentCharId: r
            } = (0, F.useRockstarUserState)(), c = (0, F.useIsUserGtaPlus)(i?.data, r);
            return (0, o.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              R.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (t) return "true" === a.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (G(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === n);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === n);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === c);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === c);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!G(i)), () => {}
            }), [a, e, c, i, n]), t
          })(a);
          return (0, o.useEffect)((() => {
            i(n)
          }), [n]), (0, o.useMemo)((() => s ? t : null), [s])
        },
        H = (0, O.withTranslations)((e => {
          let {
            children: a
          } = e;
          return o.Children.map(o.Children.toArray(a), (e => (0, u.jsx)(U, {
            ...e?.props
          })))
        }));
      var q = t(37960),
        W = t(58652);
      const K = e => {
          let {
            className: a
          } = e;
          return (0, u.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, u.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, u.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        X = {
          pillBtn: "rockstargames-modules-gtao-license-platee3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-gtao-license-platea9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-gtao-license-platee6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-gtao-license-plateb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-gtao-license-platec81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-gtao-license-plateb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-gtao-license-plateb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-gtao-license-plateac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-gtao-license-platebee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-gtao-license-plateb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-gtao-license-plateb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-gtao-license-platef26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-gtao-license-plated38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-gtao-license-plateb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-gtao-license-plateaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-gtao-license-platea74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-gtao-license-platecc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-gtao-license-platedb26fed58ce50f4affc114670885721a"
        },
        Q = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: s
          } = (0, F.useGtmTrack)(), {
            refetch: i
          } = (0, k.useQuery)(W.UserGetVote, {
            skip: !0
          }), [n] = (0, k.useMutation)(W.UserCastVote), [r, c] = (0, o.useState)(null), l = (0, o.useCallback)((e => {
            (async () => {
              if (e === r && null !== r) c(null);
              else {
                c(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: a
                });
                const i = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await n({
                  variables: i
                })
              }
            })()
          }), [a, t, r]);
          return (0, o.useEffect)((() => {
            a && t && (async () => {
              const e = await i({
                foreignId: a,
                foreignType: t
              });
              c(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, u.jsxs)("div", {
            className: X.calloutVoteForm,
            children: [(0, u.jsx)("button", {
              "aria-label": "upvote",
              className: [X.upvote, X.voteButton, r ? X.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, u.jsx)("button", {
              "aria-label": "downvote",
              className: [X.downvote, X.voteButton, !1 === r ? X.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Y = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)();
          return (0, u.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, u.jsxs)("button", {
              className: X.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [a, (0, u.jsx)(K, {
                className: X.calloutLinkIcon
              })]
            })
          })
        },
        Z = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: i
          } = e;
          const {
            track: n
          } = (0, F.useGtmTrack)();
          return (0, u.jsxs)("div", {
            className: X.actionFooter,
            children: [a, t && " ", t && (0, u.jsx)("a", {
              href: s ?? "",
              onClick: () => n({
                ...i
              }),
              children: t
            })]
          })
        },
        J = (0, O.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: s,
            action_text: i,
            link: n,
            foreign_id: r = document.location.pathname,
            foreign_type: c = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: p = {},
            actionFooterLinkTrackingData: f = {},
            t: _,
            ...k
          } = e;
          const {
            loggedIn: b
          } = (0, F.useRockstarUser)(), {
            track: v
          } = (0, F.useGtmTrack)(), h = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: x,
            inView: y
          } = (0, q.cD)({
            threshold: .6
          }), [N, j] = (0, o.useState)(!1);
          let w;
          if ((0, o.useEffect)((() => {
              y && !N && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), j(!0))
            }), [y]), !a && !t) return null;
          switch (s) {
            case "vote":
              if (!b) {
                w = (0, u.jsx)(C, {
                  to: h,
                  className: X.calloutButton,
                  onClick: p ? () => v({
                    ...p
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              w = (0, u.jsx)(Q, {
                foreign_id: r,
                foreign_type: c
              });
              break;
            case "button":
              i && n && (w = (0, u.jsx)(C, {
                to: n,
                className: X.calloutButton,
                onClick: p ? () => v({
                  ...p
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && n && (w = (0, u.jsx)(Y, {
                action_text: i,
                link: n,
                trackingData: p
              }));
              break;
            default:
              w = null
          }
          return (0, u.jsx)("div", {
            className: `${X.calloutContainer} ${l||""}`,
            ref: x,
            children: (0, u.jsxs)("div", {
              className: X.calloutSection,
              children: [(0, u.jsxs)("div", {
                className: [X.calloutHeaders, w ? X.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, u.jsx)("h2", {
                  className: X.calloutHeader,
                  children: _(a)
                }), t && (0, u.jsx)("h3", {
                  className: X.calloutSubheader,
                  children: _(t)
                })]
              }), (0, u.jsxs)("div", {
                className: X.actionBlock,
                children: [w, d && (0, u.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: f
                })]
              })]
            })
          })
        }));
      var ee = t(30300),
        ae = t(44236),
        te = t.n(ae);
      const se = e => {
          let {
            isMulti: a,
            allowSelectAll: t,
            label: s,
            miscProps: i
          } = e;
          const [n, r] = (0, o.useState)(""), c = (0, o.useMemo)((() => te()().getData()), []);
          return (0, u.jsx)(ee.cp, {
            unstyled: !0,
            value: n,
            isMulti: a,
            allowSelectAll: t,
            options: c,
            placeholder: s,
            onChange: e => {
              return a = e?.target?.value, void r(a);
              var a
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        ie = e => {
          let {
            cookieName: a,
            cookieValue: t,
            trueComponent: s,
            falseComponent: i
          } = e;
          const n = (e => {
              const a = document.cookie.split("; "),
                t = `${e}=`,
                s = a.find((e => e.startsWith(t)));
              return s?.substring(t.length, s.length)
            })(a),
            r = new URLSearchParams(window.location.search).get(a);
          return r && ((e, a) => {
            e && a && (document.cookie = `${e}=${a}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(a, r), n === t || r === t ? s : i
        },
        ne = {
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
        re = e => ne[e] || null,
        oe = {
          pillBtn: "rockstargames-modules-gtao-license-platebf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-gtao-license-platee07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-modules-gtao-license-plateeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-modules-gtao-license-platee8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-modules-gtao-license-platec392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-modules-gtao-license-platebc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-modules-gtao-license-plateb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-gtao-license-platedbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-gtao-license-platef5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-modules-gtao-license-platecb0ad8d8dd93218dc12091b883767967",
          xbox: "rockstargames-modules-gtao-license-platef591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-gtao-license-platee5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-gtao-license-platee52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-gtao-license-platec53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-gtao-license-platef4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-gtao-license-plateb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-gtao-license-platec7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-gtao-license-platea9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-gtao-license-platea4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-gtao-license-platec4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-modules-gtao-license-platec4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-modules-gtao-license-platea13111cbe8acbd75f62da1c53de2c3df",
          icon: "rockstargames-modules-gtao-license-platec7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-gtao-license-platebd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-gtao-license-platec79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-gtao-license-plated87326174de12b895401f738a23b177a"
        };
      var ce = t(89772),
        le = t.n(ce);
      const de = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const s = a ? re(a) : null,
            i = s ? (0, u.jsx)("img", {
              className: oe.platformIcon,
              src: s,
              alt: t
            }) : null;
          return (0, u.jsx)("span", {
            className: [oe.btnContent, oe.platformButton].join(" "),
            children: i
          })
        },
        me = e => {
          let {
            children: a,
            href: t,
            style: s,
            content: i,
            variant: n = null,
            size: r = "medium",
            icon: c,
            iconPosition: l = "none",
            iconStyle: d,
            badge: g,
            badgeStyle: p,
            platformItem: f,
            gtm: _ = {},
            disabled: k,
            reloadDocument: b = !1,
            className: v
          } = e;
          const {
            track: h
          } = (0, F.useGtmTrack)(), x = (0, O.useDataLayer)(), y = i ?? a, N = (0, O.findPlatform)(f)?.friendlyName, j = (0, o.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), w = (0, o.useCallback)((() => {
            k || h({
              event: "cta_other",
              text: y ?? void 0,
              ...x,
              ..._,
              link_url: t ?? void 0
            })
          }), [_, t, x]), S = () => c ? (0, u.jsx)("span", {
            className: [oe.icon, `icon-${l}`].join(" "),
            style: d,
            children: (0, u.jsx)("img", {
              className: oe.btnIcon,
              src: re(c) || "",
              alt: `${c} icon`
            })
          }) : null;
          return (0, u.jsx)(m.Link, {
            to: t,
            target: j ? "_self" : "_blank",
            className: le()(oe.cta, "platform" === n && f ? oe[f] : "", k ? oe.disabled : "", v),
            style: s,
            "data-variant": n,
            "data-size": r,
            onClick: w,
            "aria-label": y,
            reloadDocument: b,
            children: "platform" === n && f ? (0, u.jsx)(de, {
              platform: f,
              altText: N || y
            }) : (0, u.jsxs)("div", {
              className: oe.btnContent,
              children: ["left" === l && S(), (0, u.jsx)("span", {
                className: oe.label,
                children: y
              }), "right" === l && S(), g ? (0, u.jsx)("span", {
                className: oe.badge,
                style: p,
                children: g
              }) : null]
            })
          })
        };
      var ge = t(45652);
      const ue = "rockstargames-modules-gtao-license-plateeb64520e04e486931cd65dc5b3fa61e8",
        pe = e => {
          let {
            alt: a,
            className: s,
            src: i,
            style: n
          } = e;
          const [r, o] = (0, O.usePreloadImg)(i);
          let c = i;
          !1 === r && ("rockstargames-modules-gtao-license-plateee609f31f3685766122c2c6fc0ef0710" === s && (c = t(61820)), c = t(43976));
          const {
            width: l,
            height: d
          } = o, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...n
          };
          return (0, u.jsx)("img", {
            src: c,
            className: s ?? "",
            alt: a,
            style: m
          })
        },
        fe = e => {
          let {
            className: a,
            style: s = {},
            image: i = {},
            imageStyle: n = {}
          } = e, {
            alt: r,
            src: o
          } = (0, ge.useImageParser)(i);
          const {
            isMobile: c
          } = (0, O.useWindowResize)();
          return o.desktop || o.mobile || (r = "", o = {
            mobile: t(61820),
            desktop: t(43976)
          }), (0, u.jsx)("div", {
            className: i.frame ? `${i.frame} ${ue}` : ue,
            style: s,
            children: (0, u.jsx)(pe, {
              style: {
                ...n,
                ...i?.style
              },
              src: c ? o.mobile || o.desktop : o?.desktop || o?.mobile,
              alt: r,
              className: a
            })
          })
        };
      var _e = t(8560),
        ke = t.n(_e);
      const be = {
          pillBtn: "rockstargames-modules-gtao-license-platea89792e50dfe5470a67f42b9e143c824",
          selected: "rockstargames-modules-gtao-license-platebcce8ac50552b225f30d185d876a3e14",
          grid: "rockstargames-modules-gtao-license-plateac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-modules-gtao-license-platecaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-modules-gtao-license-plateb291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-modules-gtao-license-plated146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-modules-gtao-license-plateba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-modules-gtao-license-plateb6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-modules-gtao-license-plateaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-modules-gtao-license-plated244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-modules-gtao-license-plated90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-modules-gtao-license-platec3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-modules-gtao-license-platefe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-modules-gtao-license-platef5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-modules-gtao-license-platef4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-modules-gtao-license-platef6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-modules-gtao-license-plateab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-modules-gtao-license-platedc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-modules-gtao-license-plateb354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-modules-gtao-license-platee4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-modules-gtao-license-plated4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: ve
        } = ke(),
        he = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: i,
            className: n,
            game: r,
            noImg: c,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, o.useState)(null), p = t ? t.split("_#_") : a;
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), t || a ? l && m ? (0, u.jsx)("div", {
            className: be.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, u.jsx)("ul", {
              style: (0, O.safeStyles)(i),
              className: (0, T.classList)(be.itemList, be.noImg, be[s], be[r]),
              children: m.map(((e, a) => (0, u.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: ve(e.content)
                }
              }, a)))
            })
          }) : (0, u.jsx)("ul", {
            style: (0, O.safeStyles)(i),
            className: (0, T.classList)(be.itemList, be.custom, c ? be.noImg : "", s ? be[s] : "", r ? be[r] : "", n ?? ""),
            children: p.map(((e, a) => (0, u.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: ve(e?.content ?? e)
              }
            }, a)))
          }) : null
        },
        xe = {
          hr: "rockstargames-modules-gtao-license-platef5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-modules-gtao-license-platef8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-modules-gtao-license-platec442f7264db862a7cca6d9a56dacc205"
        },
        ye = e => {
          let {
            style: a,
            className: t = "",
            type: s
          } = e;
          return (0, u.jsx)("div", {
            style: a,
            className: [xe.hr, xe[s], t].join(" ")
          })
        },
        Ne = "rockstargames-modules-gtao-license-platefa6885b15a718acb24f48949c52e31f1",
        je = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, u.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        we = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, u.jsxs)("div", {
            className: (0, T.classList)("rockstargames-modules-gtao-license-plateef9e6981551ac5ce250ebff8b18d7a29", t),
            children: [a.title && (0, u.jsx)(je, {
              to: a?.href ?? a?.to,
              children: (0, u.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, u.jsx)(he, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, u.jsx)(fe, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, u.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, u.jsx)(ye, {})
            }, a) : (0, u.jsx)("p", {
              children: (0, u.jsx)("span", {
                className: Ne,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, u.jsx)("span", {
              className: Ne,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        };
      var Se = t(58936);
      const Ce = e => {
          let {
            children: a,
            ...t
          } = e;
          const [s, i] = (0, o.useState)(!1);
          return (0, u.jsx)(Se.cR, {
            ...t,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: a
          })
        },
        Te = {
          badge: "rockstargames-modules-gtao-license-platee279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-modules-gtao-license-plated7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-modules-gtao-license-plated697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-modules-gtao-license-platee1bba3cd4554abbb48a030af24bbada5"
        },
        Ie = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: i
          } = e;
          return i || s ? a(t) : t
        },
        Me = e => {
          let {
            badge: a,
            badgeType: s,
            role: i,
            splitter: n
          } = e;
          const r = [];
          n ? a.split(n).map(((e, a) => r.push(e))) : r.push(a);
          let o = 100;
          return 2 == r.length && r[1].length < 4 && "off" !== r[1].toLowerCase() && 45, (0, u.jsxs)(Ie, {
            splitter: n,
            role: i,
            wrapper: e => (0, u.jsx)("div", {
              className: `${Te.badge} ${s?Te[s]:""} `,
              children: e
            }),
            children: [(0, u.jsx)(u.Fragment, {
              children: i && (0, u.jsx)(fe, {
                image: {
                  alt: i,
                  desktop: t(6572)(`./${i}.png`)
                }
              })
            }), (0, u.jsx)(Ce, {
              className: `${n||i?"":Te.badge} ${s?Te[s]:""}`,
              min: 8,
              max: 1e3,
              mode: n || i ? "single" : "multi",
              children: r[0]
            }), (0, u.jsx)(u.Fragment, {
              children: r.shift() && n && r.length >= 1 && (0, u.jsx)(Ce, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: r.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Le = "rockstargames-modules-gtao-license-platec63cfb461217f059c8c25eec09602b30",
        Ee = e => {
          let {
            color: a
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platea481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": a
            },
            children: [(0, u.jsx)("div", {
              className: Le
            }), (0, u.jsx)("div", {
              className: Le
            }), (0, u.jsx)("div", {
              className: Le
            })]
          })
        };
      var ze = t(43924);
      const Be = {
          dropdownWrapper: "rockstargames-modules-gtao-license-plateb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-gtao-license-plateb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-gtao-license-platef5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-gtao-license-plateecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-gtao-license-plateb64c3515fcd91f6b84410bd14640da81"
        },
        Pe = e => {
          let {
            children: a,
            className: t,
            title: s
          } = e;
          const [i, n] = (0, o.useState)(!1);
          return (0, u.jsx)(ze.cp, {
            disabled: !i,
            children: (0, u.jsxs)("div", {
              className: [Be.dropdownWrapper, i ? Be.open : "", void 0 !== t ? t : ""].join(" "),
              children: [(0, u.jsx)("button", {
                className: Be.opener,
                onClick: () => n(!i),
                children: s
              }), i && (0, u.jsx)("div", {
                className: Be.items,
                onClick: () => n(!1),
                children: a
              })]
            })
          })
        };
      var Ve = t(95356);
      const De = e => {
          let {
            children: a,
            context: t = null,
            game: s,
            image: i = {},
            style: n = {},
            template: r = null,
            theme: o = null,
            reversedOnMobile: c = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, ge.useImageParser)(i ?? {}),
            g = {
              ...n
            };
          if (m?.src?.desktop) {
            const e = (i?.style && i?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              a = (i?.style && i?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              t = `var(--grid-background-position, center)/${e??"cover"}`;
            if (g.background = `url(${m?.src?.desktop}) ${a} ${t}`, i?.style && i?.style["--linear-gradient"]) g.background = `linear-gradient(${i?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${a} ${t}`;
            else if (i?.style && i?.style["--gradient-height"]) {
              const e = i?.style["--gradient-height"] || "3",
                s = i?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                n = i?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              g.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${n}), url(${m?.src?.desktop}) ${a} ${t}`
            }
          }
          return (0, u.jsx)("div", {
            id: d,
            className: (0, Ve.classList)("rockstargames-modules-gtao-license-platef42b4606ed4a5b16b7647ad7b7eb229d", c ? "rockstargames-modules-gtao-license-plateb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === r ? null : s,
            style: (0, O.safeStyles)(g),
            "data-context": t,
            "data-template": r,
            "data-theme": o,
            children: a
          })
        },
        Ae = e => {
          let {
            caption: a,
            children: t,
            ...s
          } = e;
          return a ? (0, u.jsxs)("figure", {
            ...s,
            children: [t, (0, u.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          }) : t
        },
        $e = e => {
          let {
            componentTitle: a,
            type: t,
            items: s
          } = e;
          return s?.length ? (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-license-plated393ab6eb68d416b116b6281abdb5e14",
            type: t,
            children: (0, u.jsxs)(De, {
              children: [a && (0, u.jsx)("h3", {
                children: a
              }), (0, u.jsx)(De, {
                className: "rockstargames-modules-gtao-license-plateed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, a) => {
                  return e?.embed ? (0, u.jsx)(Ae, {
                    caption: e?.caption,
                    children: (0, u.jsx)("div", {
                      className: "rockstargames-modules-gtao-license-platedcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (t = e.embed, t.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??a}_div`)
                  }, e?.key ?? a) : e?.text ? (0, u.jsx)("p", {
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
      var Oe = t(21388);
      const Fe = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        Re = {
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
            transition: Re
          }
        },
        Ue = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: Re,
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
              height: Fe
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
            transition: Fe,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        qe = {
          pillBtn: "rockstargames-modules-gtao-license-plateba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-modules-gtao-license-platec9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-modules-gtao-license-platebfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-modules-gtao-license-platea1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-modules-gtao-license-platef692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-modules-gtao-license-plateba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-modules-gtao-license-platec2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-modules-gtao-license-platedd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-modules-gtao-license-platec559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-modules-gtao-license-plated6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-modules-gtao-license-plateb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-modules-gtao-license-platefe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-modules-gtao-license-plateb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-modules-gtao-license-platee23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-modules-gtao-license-platee0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-modules-gtao-license-platedcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-modules-gtao-license-platee047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-modules-gtao-license-platedaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-modules-gtao-license-plateae7bc564778d8af6cf5f8a0491ef7dc8"
        },
        We = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: i = "",
            target: n = null,
            onClick: r
          } = e;
          const o = n ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [qe.platformButton, qe[i]].join(" "),
            l = i ? t(13892)(`./${i}.svg`) : null,
            d = (0, u.jsxs)(u.Fragment, {
              children: [l ? (0, u.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, u.jsx)("div", {
                className: qe.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, u.jsx)("a", {
            href: s,
            className: c,
            target: o,
            onClick: r,
            "aria-label": a,
            children: d
          }) : (0, u.jsx)(m.NavLink, {
            className: c,
            onClick: r,
            to: s,
            "aria-label": a,
            children: d
          })
        },
        Ke = e => {
          let {
            variant: a,
            buttonText: s = "Subscribe",
            buttonClassName: i,
            className: n,
            children: r,
            platformsAndLinks: c = [],
            trackingType: l = "buy",
            trackingParent: d,
            target: m = null,
            trackingOId: g = null
          } = e;
          const [p, f] = (0, o.useState)(!1), {
            track: _
          } = (0, F.useGtmTrack)(), k = (0, o.useRef)(null), b = (0, o.useRef)(p);
          (0, o.useEffect)((() => {
            b.current = p
          }), [p]), (0, o.useEffect)((() => {
            const e = e => {
              b && !k?.current?.contains(e.target) && f(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []);
          const v = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              _({
                element_placement: d,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, T.classList)(qe.container, n),
            children: [(0, u.jsx)(Oe.q.div, {
              className: qe.content,
              animate: p ? "open" : "close",
              variants: Ge,
              "aria-hidden": !!p,
              children: r
            }), (0, u.jsxs)(Oe.q.div, {
              "data-variant": a,
              className: le()(p ? qe.expandedButton : qe.unexpandedButton),
              animate: p ? "open" : "closed",
              variants: He,
              initial: !1,
              ref: k,
              children: [(0, u.jsx)(Oe.q.button, {
                className: le()(qe.buttonText, i),
                "aria-expanded": p,
                disabled: p,
                ...!p && {
                  onClick: () => {
                    if (f(!p), !p) switch (l) {
                      case "select_platform":
                        _({
                          element_placement: d,
                          event: "select_platform",
                          event_action: "select_platform",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase() ?? "subscribe"
                        });
                        break;
                      case "link_account":
                        _({
                          element_placement: d,
                          event: "cta_link_account",
                          event_action: "link_account",
                          event_category: "cta",
                          event_label: d,
                          o_id: g,
                          text: s?.toLowerCase()
                        });
                        break;
                      case "buy":
                        _({
                          element_placement: d,
                          event: "cta_buy",
                          event_action: "buy",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase() ?? "subscribe"
                        });
                        break;
                      case "store_link":
                        _({
                          element_placement: d,
                          event: "cta_store_link",
                          event_action: "store_link",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase()
                        });
                        break;
                      case "other":
                        _({
                          element_placement: d,
                          event: "cta_other",
                          event_action: "other",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase()
                        })
                    }
                  }
                },
                children: "string" == typeof s ? s : "Subscribe"
              }), (0, u.jsxs)(Oe.q.div, {
                className: qe.expandedArea,
                animate: p ? "open" : "closed",
                variants: Ue,
                initial: !1,
                "aria-hidden": !p,
                children: [(0, u.jsx)("button", {
                  className: qe.closeButton,
                  onClick: () => {
                    f(!1), _({
                      element_placement: d,
                      event: "cta_other",
                      text: "close expanding platform button"
                    })
                  },
                  "aria-label": "Close",
                  children: (0, u.jsx)("img", {
                    src: t(72428),
                    alt: "Close"
                  })
                }), (0, u.jsx)("div", {
                  className: qe.platformButtons,
                  children: c.length ? c.map((e => (0, u.jsx)(We, {
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
        Xe = {
          animateBox: "rockstargames-modules-gtao-license-platee9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-modules-gtao-license-platea63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-modules-gtao-license-plated7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-modules-gtao-license-plateb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-modules-gtao-license-platea4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-modules-gtao-license-platef9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Qe = e => {
          let {
            children: a,
            style: t
          } = e;
          const s = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Xe.visible])
              }))
            })).observe(s?.current)
          }), []), (0, u.jsx)("div", {
            style: t,
            className: [Xe.fadeArea].join(" "),
            ref: s,
            children: a
          })
        },
        Ye = {
          gameSiteHeader: "rockstargames-modules-gtao-license-platecb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-gtao-license-plateaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-gtao-license-plateac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-gtao-license-platee5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-gtao-license-plateb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-gtao-license-platee666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-gtao-license-platecfc6fd456ca2f3e9db06f780f412660f"
        },
        Ze = e => {
          let {
            buttonText: a = null,
            gameOverrideStyles: t,
            navLinks: s,
            cta: i = "",
            game: n
          } = e;
          const [r, c] = (0, o.useState)(!1), l = (0, k.useMutateState)(), {
            navHidden: d
          } = (0, k.useState)();
          return (0, o.useEffect)((() => {
            l({
              gameSiteNavOpen: r
            })
          }), [r]), (0, o.useEffect)((() => {
            const e = () => {
              c(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, u.jsxs)("header", {
            "data-game": n,
            className: [Ye.gameSiteHeader, r ? Ye.headerNavOpen : "", d ? Ye.navHidden : "", t.gameSiteHeader, r ? t.headerNavOpen : ""].join(" "),
            children: [(0, u.jsx)("button", {
              className: [Ye.headerLogo, t.headerLogo].join(" "),
              onClick: e => {
                c(!r), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: a
              }
            }), (0, u.jsx)("div", {
              className: Ye.bg
            }), (0, u.jsx)("nav", {
              children: (0, u.jsx)("div", {
                className: Ye.navContent,
                children: s
              })
            }), i]
          })
        };
      var Je = t(31403),
        ea = t(73660),
        aa = t.n(ea);
      class ta extends o.Component {
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
          return this?.state?.error?.message ? (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platef903c45f8ecc18bd55f702e202f3763a",
            children: [(0, u.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, u.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const sa = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(t) {
            return (0, u.jsx)(ta, {
              header: a,
              children: (0, u.jsx)(e, {
                ...t
              })
            })
          }
        },
        ia = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: i,
            onNextKeyDown: n
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-plated98f432655f19a842390597c4434db06",
            children: [(0, u.jsx)("button", {
              className: "rockstargames-modules-gtao-license-platec06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button"
            }), (0, u.jsx)("button", {
              className: "rockstargames-modules-gtao-license-platea4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: s,
              onKeyDown: n,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        na = sa((e => {
          let {
            description: a,
            slideChildren: t,
            size: s,
            title: i,
            name: n,
            customSlidesPerView: r = null,
            customSpaceBetween: c = null,
            slideClass: l,
            style: d,
            className: m,
            cardSizeBreakpoints: g,
            customAspectRatio: p,
            titleBadge: f
          } = e;
          const {
            track: _
          } = (0, F.useGtmTrack)(), k = (0, o.useRef)(null), b = (0, o.useRef)(null), v = (0, o.useRef)(null), [h, x] = (0, o.useState)(null), [y, N] = (0, o.useState)(!1), [j, w] = (0, o.useState)(null), [S, C] = (0, o.useState)(), [I, M] = (0, o.useState)(), {
            ref: L,
            inView: E
          } = (0, q.cD)({
            threshold: .6
          }), [z, P] = (0, o.useState)(!1), [V, D] = (0, o.useState)(null), [A, $] = (0, o.useState)(!1), [O, R] = (0, o.useState)(0), [G, U] = (0, o.useState)(0);
          (0, o.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, o.useEffect)((() => {
            const e = () => {
              S && !(0, ea.isEmpty)(S) && S?.height > 0 && S?.height !== O && R(S?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [S]);
          const H = {
            0: {
              spaceBetween: c ?? 16
            },
            1024: {
              spaceBetween: c ?? 18
            },
            1920: {
              spaceBetween: c ?? 20
            },
            2560: {
              spaceBetween: c ?? 22
            }
          };
          (0, o.useEffect)((() => {
            if (!k.current) return;
            const e = () => {
              if (k.current) {
                const e = r || Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view")),
                  a = r ? 1 : Number(window.getComputedStyle(k.current).getPropertyValue("--slides-per-view-multiplier"));
                w(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [k, r]), (0, o.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, D(a))
            })), P(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && A ? null : (0, u.jsx)(B.Ky, {
              className: "rockstargames-modules-gtao-license-platef58e79e329504e170dc9cb4595ea011b",
              onFocus: () => X(a),
              children: e
            }, Symbol(a).toString())));
            x(a)
          }), [t, A]), (0, o.useEffect)((() => {
            M({
              nextEl: v.current,
              prevEl: b.current
            })
          }), [v, b]), (0, o.useEffect)((() => {
            E && !y && t && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: (n || i).toLowerCase(),
              element_placement: (n || i).toLowerCase()
            }), N(!0))
          }), [E, t]);
          let W = "custom" === s ? {
            "--custom-aspect-ratio": p,
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
          return (0, u.jsxs)("div", {
            className: (0, T.classList)("rockstargames-modules-gtao-license-plated0c3d91603036c852633939015a6cb48", m),
            "data-size": s,
            "data-sm": g?.sm ? g?.sm : s,
            "data-md": g?.md ? g?.md : s,
            "data-lg": g?.lg ? g?.lg : s,
            "data-xl": g?.xl ? g?.xl : s,
            "data-xxl": g?.xxl ? g?.xxl : s,
            "data-has-covercard": z,
            "data-new-carousel-nav": !0,
            ref: k,
            style: W,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateddeb75a59ed783554b94e8298897a1fa",
              ref: L
            }), z && A && (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plated5f00d41fdd2c864a0eb9e069cf08db0",
              children: V
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platecdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, u.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platefb8e207418c783fc2f53b44c19faedca",
                children: [(0, u.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-plateb779ba2045a88302079083935c90f7b3",
                  children: [!z && i && (0, u.jsxs)("div", {
                    className: "rockstargames-modules-gtao-license-plateedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, u.jsx)("h2", {
                      children: i
                    }), f && (0, u.jsx)("span", {
                      className: "rockstargames-modules-gtao-license-plated7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, u.jsx)(ia, {
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
                }), a && (0, u.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platea1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), j ? (0, u.jsx)(B.wx, {
              slidesPerView: j,
              onInit: e => {
                C(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (R(t), U(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: I,
              modules: [Je._2],
              breakpoints: H,
              slideClass: (0, T.classList)("swiper-slide", l),
              onSlideNextTransitionEnd: () => {
                _({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? "",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? "",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? "",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              children: h
            }) : ""]
          })
        }), null),
        ra = {
          pillBtn: "rockstargames-modules-gtao-license-plated008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-gtao-license-platebe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-gtao-license-plated1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-gtao-license-platec9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-gtao-license-platea271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-gtao-license-plateae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-gtao-license-platef663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-gtao-license-platef9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-gtao-license-plated1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-gtao-license-platefb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-modules-gtao-license-plated4e5e627f7968400413c3b578b1b3143",
          primaryBtn: "rockstargames-modules-gtao-license-plateff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-modules-gtao-license-platea0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-modules-gtao-license-platebe305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-modules-gtao-license-platef625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-gtao-license-platee999b9cecfe233bcee8cab8682fb96bf"
        },
        oa = {
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
        ca = {
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
            mobileImg: t,
            desktopImg: s
          } = e;
          const i = (0, T.useGetCdnSource)(t ?? null),
            n = (0, T.useGetCdnSource)(s ?? i);
          return (0, u.jsx)("div", {
            className: ra.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${n})`
            },
            children: (0, u.jsx)("h5", {
              children: a
            })
          })
        },
        da = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: s
          } = e;
          const [i, n] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            s && n(s.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: s
              } = a, {
                mobile: i,
                desktop: n
              } = s;
              return e.push((0, u.jsx)(la, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: n?.full_src
              })), e
            }), []))
          }), [s]), i ? (0, u.jsx)("div", {
            className: ra.shardsCarousel,
            children: (0, u.jsx)(na, {
              title: a,
              name: t,
              slideChildren: i,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        ma = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [i, n] = (0, o.useState)([]), [r, c] = (0, o.useState)([]);
          return (0, o.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
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
            n(e), c(a)
          }), [t]), i.length ? (0, u.jsx)(Oe.q.div, {
            variants: a ? ca : void 0,
            children: (0, u.jsx)(Ke, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: i,
              children: !!r.length && (0, u.jsx)(Oe.q.div, {
                variants: ca,
                children: (0, u.jsx)(z, {
                  buttons: r,
                  className: ra.buttonGroup
                })
              })
            })
          }) : (0, u.jsx)(u.Fragment, {
            children: !!r.length && (0, u.jsx)(Oe.q.div, {
              variants: ca,
              children: (0, u.jsx)(z, {
                buttons: r,
                className: ra.buttonGroup
              })
            })
          })
        },
        ga = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: s = [],
            cta: i = [],
            description: n = "",
            expandingButtonLabel: r = "Subscribe",
            title: o = "",
            legalText: c
          } = e;
          return (0, u.jsxs)(Oe.q.div, {
            className: ra.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? oa : void 0,
            children: [(0, u.jsx)(Oe.q.div, {
              variants: a ? ca : void 0,
              children: (0, u.jsx)(w, {
                brands: t
              })
            }), (o || n) && (0, u.jsxs)(Oe.q.div, {
              className: ra.descriptions,
              variants: a ? ca : void 0,
              children: [o && (0, u.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              }), n && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), !!i.length && (0, u.jsx)("div", {
              className: ra.ctaBlock,
              children: (0, u.jsx)(T.TinaParser, {
                components: {
                  Cta: me,
                  ExpandingPlatformButton: Ke
                },
                tina: {
                  payload: {
                    content: i
                  }
                }
              })
            }), !!s.length && (0, u.jsx)("div", {
              className: ra.ctaBlock,
              children: (0, u.jsx)(ma, {
                animated: a,
                ctas: s,
                expandingButtonLabel: r
              })
            }), c && (0, u.jsx)(Oe.q.div, {
              className: ra.legalText,
              variants: a ? ca : void 0,
              children: (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              })
            })]
          })
        },
        ua = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: s = [],
            className: i,
            ctas: n = [],
            cta: r,
            description: o = "",
            expandingButtonLabel: c = "Subscribe",
            layeredImage: l,
            layeredImageSettings: d,
            legalText: m,
            shardsSection: g = {},
            theme: p = "gen9",
            title: f = ""
          } = e;
          const _ = (e => {
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
                const [s, i] = e;
                if (t.has(s)) {
                  const e = t.get(s);
                  Object.entries(i).forEach((i => {
                    const [n, r] = i;
                    if (t.has(s) && t.has(n)) {
                      const s = `${t.get(n)}${e}`;
                      a[s] = "imageWidth" !== n ? r ? `${r}px` : "0px" : r ? `${r}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(d),
            k = (0, T.useGetCdnSource)(t?.mobile?.full_src ?? null),
            b = (0, T.useGetCdnSource)(t?.desktop?.full_src ?? k),
            v = (0, T.useGetCdnSource)(l?.mobile?.full_src ?? null),
            h = (0, T.useGetCdnSource)(l?.desktop?.full_src ?? v);
          return (0, u.jsxs)(Oe.q.div, {
            className: (0, T.classList)(ra.hero, i),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${k})`,
              "--layered-image-desktop": `url(${h})`,
              "--layered-image-mobile": `url(${v})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? oa : void 0,
            "data-type": "hero",
            theme: p,
            children: [(0, u.jsxs)("div", {
              className: ra.images,
              children: [b && k ? (0, u.jsx)("div", {
                className: ra.background,
                style: t?.style ?? {}
              }) : "", v && h ? (0, u.jsx)("div", {
                className: ra.layered,
                style: d ? _ : {}
              }) : "", (0, u.jsx)("div", {
                className: ra.gradient
              })]
            }), (0, u.jsx)(ga, {
              animated: a,
              ctas: n,
              cta: r,
              description: o,
              expandingButtonLabel: c,
              title: f,
              brands: s,
              legalText: m
            }), g?.shards && (0, u.jsx)(da, {
              ...g
            })]
          })
        },
        pa = e => {
          let {
            children: a,
            attributes: t = {},
            className: s = "",
            style: i = {}
          } = e;
          return (0, u.jsx)("span", {
            className: (0, T.classList)(s, t?.className, "rockstargames-modules-gtao-license-platea7f106a8036d74ed9282a741476c6b5a"),
            style: (0, O.safeStyles)(i ?? t?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: aa().unescape(a)
            }
          })
        };
      var fa = t(53592);
      const _a = (0, c.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ka = {
          pillBtn: "rockstargames-modules-gtao-license-platecb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-gtao-license-platec951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-gtao-license-platefa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-gtao-license-plateb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-gtao-license-plateedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-gtao-license-platec4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-gtao-license-platec7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-gtao-license-platee3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-gtao-license-platec646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-gtao-license-platebcccd1077d13d7fe1585655e5c5f8363"
        },
        ba = (0, c.withIntl)((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: s,
            parent: i = "footer"
          } = e;
          const {
            track: n
          } = (0, F.useGtmTrack)(), r = (0, m.useLocation)(), l = (0, c.useIntl)(), [d, g] = (0, c.getLocale)(), [f, _] = (0, o.useState)(!1), k = (0, o.useMemo)((() => (0, fa.c)()), []), b = (0, o.useCallback)((e => {
            let a = r.pathname;
            const t = a.split("/");
            return c.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), k.currentSite?.site === fa.U.www ? "en" === e ? `${window.location.origin}${a}${r.search}` : `${window.location.origin}/${e}${a}${r.search}` : `${window.location.origin}${a}${r.search}`
          }), [r]), v = (0, o.useRef)(null), [h, x] = (0, o.useState)(0), y = matchMedia("(hover: none) and (pointer: coarse)").matches, N = e => {
            if (s && s(!1), d.subdomaincom === e || "none" === e) return void(s && s(!1));
            const a = c.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = b(e);
              n({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: i
              }), g(a.iso), window.location.href = t
            }
          };
          return (0, o.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === f && _(!1)
          }), [t]), (0, o.useEffect)((() => {
            v.current && x(v.current.scrollHeight)
          }), [v]), (0, u.jsxs)("div", {
            className: [ka.languageSelector, f ? ka.open : ""].join(" "),
            "data-theme": a,
            children: [y && "sc-menu" === a && (0, u.jsx)("div", {
              className: ka.selectBoxWrapper,
              children: (0, u.jsxs)("select", {
                className: ka.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  N(a)
                },
                "aria-label": l.formatMessage(_a.language_selector_default),
                children: [(0, u.jsx)("option", {
                  className: ka.selectBoxOption,
                  value: "none",
                  children: (0, u.jsx)(c.FormattedMessage, {
                    ..._a.language_selector_default
                  })
                }), c.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, u.jsx)("option", {
                    className: ka.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!y || "sc-menu" !== a) && (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!f), _(!f)
                },
                type: "button",
                "aria-label": l.formatMessage(_a.language_selector_default),
                children: [(0, u.jsx)("i", {}), (0, u.jsx)("span", {
                  children: (0, u.jsx)(c.FormattedMessage, {
                    ..._a.language_selector_default
                  })
                })]
              }), (0, u.jsx)("div", {
                className: ka.linkWrapper,
                ref: v,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, u.jsx)("div", {
                  className: ka.links,
                  children: c.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, u.jsx)(p, {
                      to: b(a),
                      onClick: (s = a, () => {
                        N(s)
                      }),
                      tabIndex: f ? 0 : -1,
                      children: t
                    }, `desktop-${a}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), l),
        va = {
          layeredImage: "rockstargames-modules-gtao-license-platea29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-gtao-license-plateaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-gtao-license-plateca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-gtao-license-platef0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-gtao-license-platee03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-gtao-license-platec4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-gtao-license-plateb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-gtao-license-platee9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-gtao-license-platee45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-gtao-license-plateed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-gtao-license-platefaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-gtao-license-plateb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-gtao-license-plateba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-gtao-license-plateec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-gtao-license-platea6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-gtao-license-plated7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-gtao-license-plateca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-gtao-license-platebd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-gtao-license-platefe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-gtao-license-platebde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-gtao-license-plateb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-gtao-license-plateac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-gtao-license-plated63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-gtao-license-plated248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-gtao-license-platea8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-gtao-license-platedcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-gtao-license-plateb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-gtao-license-plateadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-gtao-license-platec73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-gtao-license-platee650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-gtao-license-plateb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-gtao-license-platee41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-gtao-license-platedb575e1d021e69ebb4265a29484e2888"
        },
        ha = e => {
          let {
            style: a,
            className: t
          } = e;
          const s = {
              ...a
            },
            i = a["--border-image-source"],
            n = (0, T.useGetCdnSource)(i || null);
          return i && (s["--border-image-source"] = `url(${n})`), (0, u.jsx)("div", {
            className: (0, T.classList)(va.border, t),
            style: {
              ...s
            }
          })
        },
        xa = e => e?.images ? (0, u.jsx)("div", {
          className: (0, T.classList)(va.layeredImage, va[e?.variantClass], va[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, u.jsxs)("div", {
            className: va.layersWrapper,
            children: [e?.images?.map(((e, a) => {
              const {
                image: t,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: n,
                positionClassX: r,
                positionClassY: o,
                zIndex: c,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, u.jsx)(fe, {
                image: t,
                style: {
                  zIndex: c ?? a + 1
                },
                imageStyle: d,
                className: (0, T.classList)(l, g, va.imageLayer, va[s], va[i], va[n], va[r], va[o]),
                alt: m
              }, c ?? a + 1)
            })), e?.borderImage && (0, u.jsx)(ha, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        ya = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-license-plateefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        Na = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: s,
            splitter: i,
            image: n,
            style: r,
            className: o = "",
            attributes: c = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, u.jsx)(ya, {
            hero: d,
            children: (0, u.jsx)("figure", {
              children: (0, u.jsxs)("div", {
                className: (0, T.classList)("rockstargames-modules-gtao-license-platecab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-modules-gtao-license-platecefd6d8859aeec1057caed28caa160c3" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, o),
                style: (0, O.safeStyles)({
                  ...r,
                  ...c?.style
                }),
                ...c,
                children: [(0, u.jsx)(fe, {
                  image: n,
                  className: o
                }), (n?.badge || n?.discountTxt || a || s) && (0, u.jsx)(Me, {
                  badge: n?.discountTxt ?? n?.badge ?? a ?? s,
                  badgeType: t,
                  splitter: n?.splitter ?? i,
                  role: n?.role ?? l
                }), n?.caption && (0, u.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: n.caption
                  }
                })]
              })
            })
          })
        },
        ja = {
          pillBtn: "rockstargames-modules-gtao-license-plateeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-gtao-license-plated1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-gtao-license-platedc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-gtao-license-plateee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-gtao-license-platefbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-gtao-license-platef6040b2ae96a9b0dcdb2d283c9caff59"
        },
        wa = e => {
          let {
            imageUrl: a,
            className: t,
            alt: s,
            style: i,
            lazy: n = !1,
            decoding: r = "auto",
            sizes: c = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, o.useState)(!1);
          return (0, u.jsxs)("div", {
            className: ja.multiSourceContainer,
            children: [!l && (0, u.jsx)("img", {
              className: [t, ja.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, u.jsx)("img", {
              className: [ja.multiSourceImage, t].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (m = a, c.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                d(!0)
              },
              loading: n ? "lazy" : "eager",
              decoding: r
            })]
          });
          var m
        },
        Sa = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, u.jsx)(Ia, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        Ca = (e, a) => t => ((e, a, t) => (0, u.jsx)(Sa, {
          impressionTracking: t?.impressionTracking,
          gtm: t?.gtm,
          children: (0, u.jsx)(e, {
            ...a
          })
        }))(e, t, a),
        Ta = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Ia = e => {
          let {
            threshold: a = .6,
            children: t,
            gtm: s = {}
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)(), {
            ref: n,
            inView: r
          } = (0, q.cD)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [c, l] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            r && !c && (i({
              ...Ta,
              ...s
            }), l(!0))
          }), [r, n]), (0, u.jsx)("section", {
            ref: n,
            children: t
          })
        },
        Ma = {
          tag: "rockstargames-modules-gtao-license-plateed77774d2704bc0ebc0ac156542ae053"
        },
        La = e => {
          let {
            className: a,
            href: t,
            title: s,
            style: i
          } = e;
          const n = (0, u.jsxs)("div", {
            style: i,
            className: [Ma.tag, a].join(" "),
            children: [(0, u.jsx)("i", {}), s]
          });
          return void 0 !== t ? (0, u.jsx)(p, {
            to: t,
            children: n
          }) : n
        },
        Ea = {
          newswireBlock: "rockstargames-modules-gtao-license-platea793f470884d207243d6c3caac8ad811",
          info: "rockstargames-modules-gtao-license-plated50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-modules-gtao-license-platecc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-modules-gtao-license-plateffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-modules-gtao-license-platebbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-modules-gtao-license-platef88852766488b21a28c42d230ea529a1",
          top: "rockstargames-modules-gtao-license-platefa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-modules-gtao-license-platee380e8c67066df6f33fc018341ea96e5"
        },
        za = e => {
          let {
            section: a = "",
            index: t,
            post: s,
            noSpecialOrder: i = !1,
            focused: n
          } = e;
          const {
            track: r
          } = (0, F.useGtmTrack)(), [c] = (0, m.useSearchParams)(), l = s.preview_images_parsed.newswire_block, d = {
            default: 0 !== t || i ? l.square || l.d16x9 || l._fallback : l.d16x9 || l.square || l._fallback,
            mobile: l.square || l._fallback
          }, [g, f] = (0, O.usePreloadImg)(d.default), _ = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          }, k = (0, o.useCallback)((() => {
            r({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: t,
              element_placement: a
            })
          }), [s]);
          return (0, u.jsx)(p, {
            to: s.url,
            className: [Ea.newswireBlock, i ? Ea.newswireBlockNoSpecialOrder : "", null !== g ? Ea.startAnimation : ""].join(" "),
            focused: n,
            onClick: k,
            children: (0, u.jsxs)(u.Fragment, {
              children: [0 !== t || c.get("tag_id") ? (0, u.jsx)("div", {
                className: Ea.preview,
                style: _.default
              }) : (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Ea.previewMobile,
                  style: _.mobile
                }), (0, u.jsx)("div", {
                  className: Ea.preview,
                  style: _.default
                })]
              }), (0, u.jsxs)("div", {
                className: Ea.info,
                children: [(0, u.jsxs)("div", {
                  className: Ea.top,
                  children: [s.primary_tags.length ? (0, u.jsx)(La, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, u.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, u.jsx)("h5", {
                  className: Ea.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Ba = t(55492),
        Pa = t.n(Ba);
      const Va = (0, O.withTranslations)((e => {
          let {
            section: a = "",
            relativeTo: t = "",
            tagId: s = null,
            metaUrl: i = "/newswire",
            t: n
          } = e;
          const {
            track: r
          } = (0, F.useGtmTrack)(), [c] = (0, m.useSearchParams)(), {
            tagId: l = null
          } = (0, m.useParams)(), [d, g] = (0, o.useState)(l ?? s ?? c.get("tag_id")), [p, f] = (0, o.useState)(1), [_, b] = (0, o.useState)([]), [v, h] = (0, o.useState)(null), {
            data: x
          } = (0, k.useQuery)(Pa(), {
            variables: {
              tagId: Number(d),
              page: p,
              metaUrl: i
            },
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            f(1), b([]), g(l ?? s ?? c.get("tag_id"))
          }), [c.get("tag_id")]), (0, o.useEffect)((() => {
            x && x.posts && x.posts.paging && h(x.posts.paging), x && x.posts && x.posts.results && b(_.concat(x.posts.results))
          }), [x]), _.length ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Oa, {
              section: a,
              posts: _,
              relativeTo: t,
              noSpecialOrder: null !== d
            }), null !== v && v.nextPage ? (0, u.jsx)(C, {
              onClick: e => {
                f(p + 1), r({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: !1,
              context: "secondary",
              children: n("More Stories")
            }) : ""]
          }) : null
        })),
        Da = {
          pillBtn: "rockstargames-modules-gtao-license-plateafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-modules-gtao-license-platebcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-modules-gtao-license-platea748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-modules-gtao-license-platec0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-modules-gtao-license-plateb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Aa = (0, O.withTranslations)((e => {
          let {
            posts: a,
            t
          } = e;
          return (0, u.jsxs)("section", {
            className: Da.related,
            children: [(0, u.jsx)("h2", {
              children: t("Related Stories")
            }), (0, u.jsx)("div", {
              className: [Da.posts, 1 === a.length ? Da.just1post : ""].join(" "),
              children: a.map((e => (0, u.jsx)(za, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        $a = {
          newswireBlocks: "rockstargames-modules-gtao-license-platec2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-gtao-license-platec0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Oa = (0, O.withGtmTracking)((e => {
          let {
            section: a = "",
            noSpecialOrder: t = !1,
            posts: s,
            gtmTrack: i,
            relativeTo: n
          } = e;
          const [r, c] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((t, s) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: s + 1,
                list: a
              })
            })), i(e), c(s.length)
          }), [s.length]), (0, u.jsx)("div", {
            className: [$a.newswireBlocks, t ? $a.noSpecialOrder : "", $a.contextHome].join(" "),
            children: s.map(((e, s) => (0, u.jsx)(za, {
              section: a,
              index: s,
              noSpecialOrder: t,
              post: e,
              focused: s === r
            }, e.id)))
          })
        })),
        Fa = {
          pillBtn: "rockstargames-modules-gtao-license-platef87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-modules-gtao-license-platea8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-modules-gtao-license-platea57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-modules-gtao-license-platedaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-modules-gtao-license-platebd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-modules-gtao-license-platea6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-modules-gtao-license-platee88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-modules-gtao-license-plateab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-modules-gtao-license-platec20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-modules-gtao-license-plateb16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-modules-gtao-license-plated0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-modules-gtao-license-plated1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-modules-gtao-license-plated6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-modules-gtao-license-platef3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-modules-gtao-license-platea6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-modules-gtao-license-plateeade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-modules-gtao-license-platea82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-modules-gtao-license-plated394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-modules-gtao-license-platef1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-modules-gtao-license-platecdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-modules-gtao-license-plateba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: Ra
        } = ke(),
        Ga = e => {
          let {
            list: a,
            string: t,
            starColor: s,
            style: i,
            className: n,
            game: r,
            noImg: c,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, g] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            g(a)
          }), [a]), t || a ? l && m ? (0, u.jsx)("div", {
            className: Fa.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, u.jsx)("ol", {
              style: (0, O.safeStyles)(i),
              className: (0, T.classList)(Fa.itemList, Fa.noImg, Fa[s], Fa[r]),
              children: m.map((e => (0, u.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Ra(e.content)
                }
              }, e.content)))
            })
          }) : (0, u.jsx)("ol", {
            style: (0, O.safeStyles)(i),
            className: (0, T.classList)(Fa.itemList, Fa.custom, c ? Fa.noImg : "", s ? Fa[s] : "", r ? Fa[r] : "", n ?? ""),
            children: a.map((e => (0, u.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Ra(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        };
      var Ua = t(67356),
        Ha = t(84296);
      const qa = (e, a) => {
          const t = e.tiers && e.tiers.every((e => e.isComplete)),
            s = a.tiers && a.tiers.every((e => e.isComplete));
          return t && !s ? 1 : !t && s ? -1 : 0
        },
        Wa = (0, c.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Ka = {
          pillBtn: "rockstargames-modules-gtao-license-platee6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-gtao-license-platee5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-gtao-license-plateeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-gtao-license-platebf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-gtao-license-platecfa711252c08391d3a0f1ecd8728a61a"
        },
        Xa = e => {
          let {
            tiers: a
          } = e;
          return (0, u.jsx)("div", {
            className: Ka.packCardTierIndicator,
            children: a?.map(((e, a) => (0, u.jsx)("div", {
              className: [Ka.tierIndicator, e.isComplete ? Ka.active : ""].join(" ")
            }, a)))
          })
        },
        Qa = {
          pillBtn: "rockstargames-modules-gtao-license-platee2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-gtao-license-plateff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-gtao-license-plated6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-gtao-license-plateeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-gtao-license-platefcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-gtao-license-platea124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-gtao-license-plated42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-gtao-license-platecbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-gtao-license-plated4649f3812d37e7407503d49dcaaba04"
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
            url: t,
            images: s,
            className: i,
            tiers: n,
            onClick: r,
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const {
            isMobile: g
          } = (0, O.useWindowResize)(), {
            loggedIn: p
          } = (0, F.useRockstarUser)(), {
            selectedCharacterTuple: f
          } = (0, F.useRockstarUserState)(), [_, k] = (0, o.useState)(!1), [b, v] = (0, o.useState)(d), [h, x] = (0, o.useState)(!1), y = (0, c.useIntl)(), N = !!n?.length;
          (0, o.useEffect)((() => {
            if (Array.isArray(f)) {
              const e = f?.[0];
              x((0, O.getGen9Consoles)().includes(e))
            }
          }), [String(f)]), (0, o.useEffect)((() => {
            if (n && n.length > 0) {
              const e = n.some((e => !e.isComplete));
              k(!e)
            } else k(!1)
          }), [n]);
          const j = `${g?s?.mobile:s?.desktop}?im=Resize,height=${l}`;
          return (0, O.usePreloadImg)(j, (() => v(!0))), (0, u.jsx)(m.NavLink, {
            className: [Qa.packCard, i, _ ? Qa.packCompleted : ""].join(" "),
            to: t,
            onClick: r,
            children: (0, u.jsxs)("div", {
              className: [Qa.packCardImageBox, b ? Qa.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${j})`
              },
              children: [_ && (0, u.jsxs)("div", {
                className: Qa.badge,
                children: [(0, u.jsx)("div", {
                  className: Qa.icon
                }), (0, u.jsx)("div", {
                  className: Qa.label,
                  children: y.formatMessage(Wa.pl_card_badge_content_complete)
                })]
              }), (0, u.jsxs)("div", {
                className: Qa.packCardTextBox,
                children: [(0, u.jsx)("h4", {
                  children: a
                }), p && !_ && h && (0, u.jsx)(Xa, {
                  tiers: N ? n : Ya
                })]
              })]
            })
          })
        },
        Ja = {
          pillBtn: "rockstargames-modules-gtao-license-platec0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-gtao-license-plateff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-gtao-license-plateffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-gtao-license-platef6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-gtao-license-platea53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-gtao-license-plateb85775dc95fb3881171ee42e49076cbf"
        };
      Ua.gsap.registerPlugin(Ha.Q);
      const et = e => {
          let {
            isHeaderVisible: a,
            packListItems: t,
            packCardClassName: s = Ja.packCard,
            packListClassName: i = Ja.packList,
            packGridClassName: n = Ja.packGrid,
            selectPackCard: r,
            sortFunction: c = qa
          } = e;
          const l = (0, o.useRef)(null),
            d = [...t].sort(c),
            [m, g] = (0, o.useState)(),
            [p, f] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            if (!0 === p) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              f(!0)
            }), 1e3);
            g(e)
          }), []), (0, Ha.Q)((() => {
            if (!1 !== p && l?.current) {
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
            dependencies: [p, t],
            scope: l,
            revertOnUpdate: !0
          }), (0, u.jsx)("div", {
            className: [i, a ? Ja.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, u.jsx)("div", {
              ref: l,
              className: n,
              "data-testid": "pack-grid",
              children: d.map(((e, a) => {
                let {
                  id: t,
                  name: i,
                  title: n,
                  url: o,
                  images: c,
                  tiers: l
                } = e;
                return (0, u.jsx)(Za, {
                  title: n,
                  url: o,
                  className: s,
                  images: c,
                  tiers: l,
                  onClick: () => ((e, a, t, s, i) => {
                    r(e, a, t, s, i)
                  })(i, n, o, t, a)
                }, n)
              }))
            })
          })
        },
        at = {
          pillBtn: "rockstargames-modules-gtao-license-platedb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-modules-gtao-license-plateb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-modules-gtao-license-platebfe6fefc1068ed81c8b38519a854285f"
        },
        tt = e => {
          let {
            title: a,
            onClick: t,
            selected: s
          } = e;
          return (0, u.jsx)("button", {
            type: "button",
            onClick: t,
            tabIndex: 0,
            "aria-label": a,
            className: [at.chipButton, s ? at.selected : ""].join(" "),
            children: (0, u.jsx)("div", {
              children: a
            })
          })
        };
      var st;

      function it() {
        return it = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, it.apply(this, arguments)
      }
      const nt = e => o.createElement("svg", it({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), st || (st = o.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var rt;

      function ot() {
        return ot = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, ot.apply(this, arguments)
      }
      const ct = e => o.createElement("svg", ot({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), rt || (rt = o.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        lt = {
          pillBtn: "rockstargames-modules-gtao-license-platef5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-modules-gtao-license-platef05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-modules-gtao-license-plateef8ca38f98b731ff5dfe07937b1bbe34"
        },
        dt = e => {
          let {
            direction: a,
            className: t,
            ...s
          } = e;
          return (0, u.jsxs)("button", {
            type: "button",
            className: [t, lt.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, u.jsx)(nt, {}), "right" === a && (0, u.jsx)(ct, {})]
          })
        },
        mt = (0, c.defineMessages)({
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
        gt = {
          pillBtn: "rockstargames-modules-gtao-license-platec07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-modules-gtao-license-plateb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-modules-gtao-license-plateb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-modules-gtao-license-platefde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-modules-gtao-license-platee753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-modules-gtao-license-platece3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-modules-gtao-license-plateef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-modules-gtao-license-platef750c5a49886ae190c14e52aa026a417"
        },
        ut = e => {
          let {
            navItems: a,
            category: t,
            setCategory: s,
            chipsContainerClass: i = gt.chipsContainer,
            previousChipButtonClass: n = "",
            nextChipBtnClass: r = ""
          } = e;
          const l = (0, c.useIntl)(),
            {
              track: d
            } = (0, F.useGtmTrack)(),
            {
              pathname: g
            } = (0, m.useLocation)(),
            p = (0, o.useMemo)((() => Math.max(a.findIndex((e => e.name === t)), 0)), [a, g]),
            [f, _] = (0, o.useState)(p),
            [k, b] = (0, o.useState)(!1),
            [v, h] = (0, o.useState)(!1),
            [x, y] = (0, o.useState)(!1),
            N = (0, o.useRef)(null),
            j = (0, o.useRef)(null),
            w = (0, o.useRef)(null),
            S = (0, o.useCallback)(((e, a) => {
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
          (0, o.useEffect)((() => {
            s(f)
          }), [f]);
          const I = e => {
            e.isEnd ? h(!0) : h(!1), e.isBeginning ? y(!0) : y(!1)
          };
          return (0, o.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (b(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (b(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, u.jsxs)("div", {
            className: i,
            children: [!x && k && (0, u.jsx)("div", {
              ref: j,
              className: (0, T.classList)(gt.previousChipNavButton, n),
              children: (0, u.jsx)(dt, {
                direction: "left",
                className: gt.previousNavIcon,
                onClick: () => {
                  w.current && (w.current?.slidePrev(), w.current.isBeginning ? y(!0) : y(!1), d({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(mt.pln_scroll_left)
              })
            }), (0, u.jsx)("div", {
              className: gt.chips,
              children: (0, u.jsx)(B.wx, {
                onBeforeInit: e => w.current = e,
                onInit: I,
                className: gt.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: f,
                onSlideChange: I,
                onResize: I,
                children: a.map(((e, a) => {
                  let {
                    title: t
                  } = e;
                  return (0, u.jsx)(B.Ky, {
                    children: (0, u.jsx)(tt, {
                      title: t,
                      onClick: () => S(a, t),
                      selected: f === a
                    })
                  }, t)
                }))
              })
            }), !v && k && (0, u.jsx)("div", {
              ref: N,
              className: (0, T.classList)(gt.nextChipNavButton, r),
              children: (0, u.jsx)(dt, {
                direction: "right",
                className: gt.nextNavIcon,
                onClick: () => {
                  w.current && (w.current?.slideNext(), w.current.isEnd ? h(!0) : h(!1), d({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(mt.pln_scroll_right)
              })
            })]
          })
        },
        pt = e => {
          let {
            navItems: a,
            onNavItemClick: t,
            isOpen: s,
            isHeaderVisible: i
          } = e;
          const {
            track: n
          } = (0, F.useGtmTrack)(), [r, c] = (0, o.useState)(0), l = (0, o.useCallback)(((e, s) => {
            d(`Secondary Nav > ${a[r].title} > ${e}`, s), t()
          }), [a, t, r, n]), d = (e, a) => {
            n({
              event: "nav_click",
              event_action: "click",
              event_category: "nav",
              event_label: e,
              text: e.split(">").pop()?.trim() || "",
              link_url: a,
              element_placement: e
            })
          };
          return (0, u.jsx)(Oe.q.div, {
            className: "rockstargames-modules-gtao-license-plateaa2ce15f29ac99fe06895664698bb6cc",
            initial: {
              height: 0
            },
            animate: {
              height: s ? "100dvh" : 0
            },
            transition: {
              ease: "easeInOut",
              duration: .4
            },
            children: (0, u.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platef2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec5288c05172905ec86e3fb56c010d6d3",
                children: (0, u.jsx)(ut, {
                  navItems: a,
                  category: a[r]?.name,
                  setCategory: c,
                  nextChipBtnClass: "rockstargames-modules-gtao-license-platec8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-modules-gtao-license-platee9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platef1adea94eb32de966a0e622247370f4e",
                children: (0, u.jsx)(et, {
                  isHeaderVisible: i,
                  packListItems: a[r]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        ft = "rockstargames-modules-gtao-license-platec54c374409e11d1429ce99457cbf7441",
        _t = e => {
          let {
            children: a,
            data: t,
            onPageUpdate: s,
            page: i,
            className: n
          } = e;
          return (0, u.jsx)("a", {
            href: "#",
            className: i === t.page ? `rockstargames-modules-gtao-license-platec0eebf4f915ff9f5cc362e22d6d7d976 ${n??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: a
          })
        },
        kt = e => {
          let {
            data: a,
            onPageUpdate: t,
            className: s
          } = e;
          if (1 === a.pageCount) return null;
          const i = Array.from(new Array(Math.min(a.pageCount, 8)), ((e, t) => t + Math.min(Math.max(a.pageCount - 8, 1), Math.max(2, a.page - 4))));
          return (0, u.jsxs)("div", {
            className: `rockstargames-modules-gtao-license-platea626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(_t, {
                data: a,
                onPageUpdate: t,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, u.jsx)("div", {
                className: ft,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, u.jsx)(_t, {
              data: a,
              onPageUpdate: t,
              page: e,
              className: s,
              children: e
            }, e))), a.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [i.slice(-1)[0] + 1 < a.pageCount ? (0, u.jsx)("div", {
                className: ft,
                children: "..."
              }) : "", (0, u.jsx)(_t, {
                data: a,
                onPageUpdate: t,
                page: a.pageCount,
                children: a.pageCount
              })]
            }) : ""]
          })
        };
      var bt = t(77616);
      const vt = e => {
          let {
            children: a
          } = e;
          const {
            parallaxController: t
          } = (0, bt.oZ)();
          return (0, o.useLayoutEffect)((() => {
            if (!t) return;
            const e = setInterval((() => {
              t.update()
            }), 500);
            return () => clearInterval(e)
          }), [t]), a
        },
        ht = {
          parallaxWrapper: "rockstargames-modules-gtao-license-platedb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-gtao-license-plated520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-gtao-license-platef008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-gtao-license-platecb5937d1a102ac4a66c4e373e6253946"
        },
        xt = e => {
          let {
            scrollAxis: a = "vertical",
            size: t = "",
            style: s = {},
            children: i
          } = e;
          return (0, u.jsx)(bt.qK, {
            scrollAxis: a,
            children: (0, u.jsx)(vt, {
              children: (0, u.jsx)("div", {
                className: (0, T.classList)(ht.parallaxWrapper, ht[t]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, t) => (0, o.cloneElement)(e, {
                  scrollAxis: a,
                  style: {
                    ...e?.props?.style,
                    zIndex: t
                  }
                }))) : (0, u.jsx)("div", {})
              })
            })
          })
        },
        yt = e => {
          let {
            layers: a = [],
            displayClass: t = "",
            style: s = {}
          } = e;
          const i = (0, T.useGenerateCdnSource)();
          if (!a || !a[0]?.image) return null;
          const n = a.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, u.jsx)(bt.Sr, {
            className: (0, T.classList)("rockstargames-modules-gtao-license-plateb8c85703a3c76902e49a61a6afcb81bc", t),
            layers: n,
            style: s
          })
        },
        Nt = "rockstargames-modules-gtao-license-platec4aa8e5d29b433c400796d0c493a9a4d",
        jt = e => {
          let {
            minOffset: a = 0,
            maxOffset: t = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: n = {},
            children: r
          } = e;
          return "horizontal" === s ? (0, u.jsx)(bt.mw, {
            x: [a, t],
            className: (0, T.classList)(Nt, i),
            styleOuter: n,
            children: r
          }) : (0, u.jsx)(bt.mw, {
            y: [a, t],
            className: (0, T.classList)(Nt, i),
            styleOuter: n,
            children: r
          })
        },
        wt = (e, a) => {
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
        St = e => t(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        Ct = (0, c.defineMessages)({
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
        Tt = {
          pillBtn: "rockstargames-modules-gtao-license-platee4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-modules-gtao-license-plateeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-modules-gtao-license-platedf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-modules-gtao-license-platec1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-modules-gtao-license-platee79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-modules-gtao-license-platec721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-modules-gtao-license-plateeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-modules-gtao-license-plateb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-modules-gtao-license-platef1e0bcba6214698c490b8201bbd850b7"
        },
        It = (0, c.withIntl)((e => {
          let {
            characterData: a
          } = e;
          const s = (0, c.useIntl)(),
            {
              platform: i,
              platformUsername: n,
              mugshotUrl: r,
              stats: l
            } = a,
            [d, m] = (0, o.useState)(r),
            g = wt(i, "large");
          return (0, u.jsxs)("div", {
            className: Tt.scCharacterCard,
            children: [(0, u.jsx)("div", {
              className: Tt.scAvatar,
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: d,
                alt: s.formatMessage(Ct.profile_selector_mugshot, {
                  userName: n
                }),
                onError: () => {
                  m(t(71084))
                }
              })
            }), (0, u.jsx)("div", {
              className: Tt.scCharacterStats,
              children: (0, u.jsxs)("div", {
                className: Tt.scCharNames,
                children: [(0, u.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, u.jsx)("div", {
                  className: Tt.scUserName,
                  "data-size": "small",
                  children: n
                }), (0, u.jsx)("div", {
                  className: Tt.scRp,
                  children: (0, u.jsxs)("div", {
                    className: Tt.scRpLevel,
                    children: [(0, u.jsx)("img", {
                      className: Tt.scRpIcon,
                      src: St(l.overview.rank.value),
                      alt: s.formatMessage(Ct.profile_selector_rp_icon)
                    }), (0, u.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), l);
      var Mt = t(92104);
      const Lt = (0, k.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Et = Lt("languageSelectorOpenedReactive", !1),
        zt = e => Et(e),
        Bt = Lt("activeSubNavIdReactive", -1),
        Pt = e => Bt(e),
        Vt = Lt("subNavExtraHeightReactive", -1),
        Dt = e => Vt(e),
        At = Lt("scNavOpenedReactive", !0),
        $t = e => At(e),
        Ot = Lt("charListHiddenReactive", !0),
        Ft = e => Ot(e),
        Rt = () => {
          const e = (0, k.useReactiveVar)(Et),
            a = (0, k.useReactiveVar)(Bt),
            t = (0, k.useReactiveVar)(Vt),
            s = (0, k.useReactiveVar)(At),
            i = (0, k.useReactiveVar)(Ot);
          return (0, o.useEffect)((() => {
            i || (e && zt(!1), s && ($t(!1), Pt(-1)))
          }), [i]), (0, o.useEffect)((() => {
            !e && i && (s || $t(!0))
          }), [e, i]), (0, o.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: zt,
            activeSubNavId: a,
            setActiveSubNavId: Pt,
            subNavExtraHeight: t,
            setSubNavExtraHeight: Dt,
            scNavOpened: s,
            setScNavOpened: $t,
            charListHidden: i,
            setCharListHidden: Ft
          })), [e, a, t, s, i])
        };
      var Gt = t(69760),
        Ut = t.n(Gt),
        Ht = t(9860);
      const qt = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Wt = e => ({
          text: e.formatMessage(Ct.sc_link_help),
          target: "_self",
          ga: {
            ...qt,
            text: Ct.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(Ct.sc_link_support),
            location: {
              domain: fa.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(Ct.sc_link_legal),
            location: {
              domain: fa.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(Ct.sc_link_privacy_policy),
            location: {
              domain: fa.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(Ct.sc_link_cookies_policy),
            location: {
              domain: fa.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(Ct.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(Ct.sc_link_do_not_sell_my_information),
            location: {
              domain: fa.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Kt = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: i,
            ga: n,
            dataTestId: r,
            isSubLink: o,
            hasNotifications: l = !1,
            onClickCallback: d = (() => {}),
            tabIndex: g,
            reloadDocument: p = !1
          } = e;
          const {
            track: f
          } = (0, F.useGtmTrack)(), _ = (0, fa.c)(), k = (0, c.useIntl)();
          let b = s;
          i && (b = i.domain === _.currentSite?.site ? i.path : `https://${_.sites[i.domain]}.rockstargames.com${i.path}`);
          const v = {
            ...n,
            link_url: b
          };
          return (0, u.jsxs)(m.Link, {
            className: o ? "rockstargames-modules-gtao-license-platefdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-gtao-license-platecbc80932118c48d8ec14448d8913d068",
            "data-testid": r || "menuLink",
            title: a,
            to: b,
            target: t,
            rel: "noreferrer",
            reloadDocument: p,
            tabIndex: g,
            onClick: e => {
              f(v), d(e)
            },
            children: [a, l && (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platea2d268c9fb03a7271b47de447d663da9",
              children: (0, u.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platecf5a6b05c52c6c4faf3236055d4670c3",
                children: k.formatMessage(Ct.nofications_new)
              })
            })]
          })
        },
        Xt = e => {
          let {
            id: a,
            text: t,
            target: s,
            href: i,
            location: n,
            ga: r,
            hasNotifications: c = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: g,
            setSubNavExtraHeight: p,
            reloadDocument: f = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: k,
            windowHeight: b
          } = (0, O.useWindowResize)(), {
            track: v
          } = (0, F.useGtmTrack)(), {
            navOpen: h
          } = (0, F.useRockstarUserState)(), x = (0, o.useRef)(null), [y, N] = (0, o.useState)(0), [j, w] = (0, o.useState)(0), [S, C] = (0, o.useState)(!0);
          return (0, o.useEffect)((() => {
            m !== a && !1 === S && C(!0), m === a && C(!1)
          }), [m]), (0, o.useEffect)((() => {
            if (!x.current) return;
            N(x?.current?.scrollHeight);
            const e = window.getComputedStyle(x.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), w(a)
            }
          }), [x, k, b]), d.length > 0 ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("button", {
              className: "rockstargames-modules-gtao-license-plateaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: h ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), v(r), m === a ? (g(-1), p(0)) : (g(a), p(y + j + j))
              },
              children: [(0, u.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platefd722aa4f6d05656ee6e37f952bd13d0",
                children: t
              }), (0, u.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platebe674f27adc299eab348b49f71429b71"
              })]
            }, t), (0, u.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-plateff1911053a3515534dd825554a85909e",
              ref: x,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${y}px`
              },
              children: d.map((e => (0, o.createElement)(Kt, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !h ? -1 : 0
              })))
            })]
          }) : (0, u.jsx)(Kt, {
            text: t,
            target: s,
            href: i,
            location: n,
            ga: r,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: h ? 0 : -1,
            reloadDocument: f
          })
        },
        Qt = e => {
          let {
            sc: a
          } = e;
          const {
            windowWidth: t,
            windowHeight: s
          } = (0, O.useWindowResize)(), i = (0, c.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: r,
            activeSubNavId: l,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: p
          } = Rt(), {
            setSelectedCharacterTuple: f,
            navOpen: _
          } = (0, F.useRockstarUserState)(), k = (0, O.useLocale)(), b = (0, O.toScLocaleString)(k), [v, h] = (0, o.useState)(""), x = (0, m.useLocation)(), y = `${a.login}?returnUrl=${v}&lang=${b}`, N = `${a.signup}&returnUrl=${v}&lang=${b}`, j = (0, o.useMemo)((() => (0, fa.c)()), []), w = (0, o.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(Ct.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: Ct.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(Ct.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: Ct.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Wt(e)])(i, y, N);
            return e
          }), [i, y, N, j]), [S, C] = (0, o.useState)(0), T = (0, o.createRef)(), I = () => {
            if (T.current) {
              const {
                current: e
              } = T, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(a + e)
              } else C(a)
            }
          };
          return (0, o.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            h(e)
          }), [x]), (0, o.useEffect)((() => {
            f(!1)
          }), []), (0, o.useEffect)((() => {
            I(), Ut()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [t, s]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("nav", {
              className: "rockstargames-modules-gtao-license-plateb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platec5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: T,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: w.map((e => (0, o.createElement)(Xt, {
                  ...e,
                  activeSubNavId: l,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: p,
                  key: e.text
                })))
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platea6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: _ ? null : "hidden"
              },
              children: (0, u.jsx)(Ht.LanguageSelector, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: n,
                setLanguageSelectorOpened: e => {
                  d(-1), r(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Yt = e => {
          let {
            characterData: a,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const n = (0, c.useIntl)(),
            {
              currentCharId: r,
              setCurrentCharId: l
            } = (0, F.useRockstarUserState)(),
            {
              track: d
            } = (0, F.useGtmTrack)(),
            m = (0, o.createRef)(),
            {
              platform: g,
              platformUsername: p,
              mugshotUrl: f,
              stats: _
            } = a,
            [k, b] = (0, o.useState)(f),
            [v] = (0, o.useState)(a.index),
            h = wt(g, "large"),
            x = r === a.index;
          return (0, o.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, u.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-plated76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": x,
            onClick: e => {
              e.stopPropagation(), l(v);
              let a = "";
              "pc" === g ? a = "PC" : "ps4" === g ? a = "PS4" : "ps5" === g ? a = "PS5" : "xboxone" === g ? a = "Xbox One" : "xboxsx" === g && (a = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: a,
                position: v
              })
            },
            ref: m,
            tabIndex: i,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platebbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: k,
                alt: n.formatMessage(Ct.profile_selector_mugshot, {
                  userName: p
                }),
                onError: () => {
                  b(t(71084))
                }
              })
            }), (0, u.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, u.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platee9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, u.jsx)("img", {
                  src: h.src,
                  alt: h.alt
                }), (0, u.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-plateb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: p
                })]
              }), (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platea5e3df42966a50f3dd88bbcb57536617",
                children: (0, u.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platea6776312350028898320ba59145a39be",
                  children: [(0, u.jsx)("img", {
                    className: "rockstargames-modules-gtao-license-plateb266652910ad34c0e8e097b212a958f0",
                    src: St(_.overview.rank.value),
                    alt: n.formatMessage(Ct.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Zt = {
          pillBtn: "rockstargames-modules-gtao-license-plated9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-gtao-license-platebc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-gtao-license-plateb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-gtao-license-platec15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-gtao-license-platea8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-gtao-license-platec91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-gtao-license-plateda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-gtao-license-plated7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-gtao-license-plated5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-gtao-license-plateb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-gtao-license-platea581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-gtao-license-platebdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-gtao-license-platedc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-gtao-license-plateb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-gtao-license-platef17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-gtao-license-platef14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-gtao-license-plateb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-gtao-license-plateec696aafed90a7a4c69dc53da0a5bb36"
        },
        Jt = e => {
          let {
            character: a,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, F.useRockstarUser)(), {
            track: n
          } = (0, F.useGtmTrack)(), r = (0, c.useIntl)(), [l, d] = (0, o.useState)([]), [m, g] = (0, o.useState)(null), [p, f] = (0, o.useState)(null), [_, k] = (0, o.useState)(!1), [b, v] = (0, o.useState)(-1), [h, x] = (0, o.useState)([]), [y, N] = (0, o.useState)(0), j = t(71084), [w, S] = (0, o.useState)("0"), [C, T] = (0, o.useState)("0"), I = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), M = () => {
            E((0, u.jsx)("img", {
              src: j,
              alt: r.formatMessage(Ct.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [L, E] = (0, o.useState)((0, u.jsx)("img", {
            className: Zt.scAvatarImg,
            src: a.mugshotUrl,
            alt: r.formatMessage(Ct.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: M
          }));
          (0, o.useEffect)((() => {
            d(i.crews ?? [])
          }), [i]), (0, o.useEffect)((() => {
            E((0, u.jsx)("img", {
              src: a.mugshotUrl,
              alt: i.nickname,
              onError: M
            })), S(I(a.stats.overview.bank.value)), T(I(a.stats.overview.cash.value)), N(parseInt(a.stats.overview.rank.value))
          }), [a, i]), (0, o.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), f(e.crewColour), v(e.rankOrder), k(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && k(!0))
            }))
          }), [l]), (0, o.useEffect)((() => {
            const e = [];
            if (!_ && b > -1)
              for (let a = 5; a > b; a -= 1) e.push((0, u.jsx)("div", {
                className: Zt.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== p ? p : ""
                }
              }, `crewrankbar-${a}`));
            x(e)
          }), [b, _, p]);
          const z = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, u.jsxs)("div", {
            className: Zt.scProfileDetails,
            onClick: z,
            onKeyUp: z,
            role: "button",
            tabIndex: -1,
            children: [(0, u.jsxs)("div", {
              className: Zt.scAvatar,
              children: [L, (0, u.jsx)("div", {
                className: Zt.scAvatarPlatform,
                "data-platform": a.platform,
                children: (0, u.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, u.jsxs)("div", {
              className: Zt.scProfileStats,
              children: [(0, u.jsx)("div", {
                className: Zt.scNames,
                children: (0, u.jsxs)("div", {
                  className: Zt.scTagsNames,
                  children: [(0, u.jsx)("span", {
                    className: Zt.scUserName,
                    children: a.platformUsername
                  }), m && (0, u.jsxs)("span", {
                    className: Zt.scCrewName,
                    "data-arrow-tag": _,
                    children: [m, !_ && (0, u.jsx)("div", {
                      className: Zt.scCrewRankBar,
                      children: h
                    })]
                  })]
                })
              }), (0, u.jsxs)("div", {
                className: Zt.scProgress,
                children: [(0, u.jsxs)("div", {
                  className: Zt.scRpLevel,
                  children: [(0, u.jsx)("img", {
                    className: Zt.scRpIcon,
                    src: St(y),
                    alt: r.formatMessage(Ct.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    children: a.stats.overview.rank.value
                  })]
                }), (0, u.jsxs)("div", {
                  className: Zt.scMoney,
                  children: [(0, u.jsxs)("span", {
                    className: Zt.scCash,
                    children: ["$", C]
                  }), (0, u.jsxs)("span", {
                    className: Zt.scBank,
                    children: ["$", w]
                  })]
                })]
              })]
            })]
          })
        },
        es = (e, a) => {
          const [t, s] = (0, o.useState)(0);
          return (0, o.useEffect)((() => {
            if (e.current) {
              const {
                current: t
              } = e, i = t.getBoundingClientRect(), {
                width: n
              } = i;
              let r = n;
              if (!0 === a) {
                const e = window.getComputedStyle(t);
                r += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(r)
            }
          }), [e]), t
        },
        as = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: i = null,
            slideClickCallback: n = null,
            children: r = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, o.createRef)(),
            m = es(d, !1),
            [g, p] = (0, o.useState)(!1),
            [f, _] = (0, o.useState)(0),
            [k, b] = (0, o.useState)(0),
            [v, h] = (0, o.useState)([s]),
            [x, y] = (0, o.useState)(v[0]),
            [N, j] = (0, o.useState)(252),
            [w, S] = (0, o.useState)(0),
            [C, T] = (0, o.useState)([]),
            [I, M] = (0, o.useState)([]),
            [L, E] = (0, o.useState)(!1),
            z = e => {
              if (!0 === g || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              b(a)
            },
            B = e => {
              if (!0 === g || 0 === k || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > k ? 1 : -1,
                n = Math.abs(k - t);
              n > a ? (s > 0 ? (() => {
                if (!0 === g) return;
                p(!0);
                const e = f - 1 < 0 ? 0 : f - 1;
                _(e), y(v[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                p(!0);
                let e = f + 1 >= v.length ? v.length - 1 : f + 1;
                e < 0 && (e = 0), _(e), y(v[e]), i && i(e)
              })(), b(0)) : y(v[f] + n * s)
            },
            P = () => {
              !0 !== g && !0 !== l && (p(!0), !0 !== g && (y(v[f]), b(0)))
            };
          return (0, o.useEffect)((() => {
            const e = [];
            r.forEach((() => {
              e.push((0, o.createRef)())
            })), T(e)
          }), [r]), (0, o.useEffect)((() => {
            if (C.length < 1) return;
            j(C[0]?.current?.clientWidth || 0);
            const e = C[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(t + a)
          }), [C]), (0, o.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              p(!1)
            }), t)
          }), [g, t]), (0, o.useEffect)((() => {
            h(r.map(((e, a) => (e => {
              let a = 0;
              const t = r.length;
              return 1 === t ? .5 * m - .5 * N - 2 * s + w : (0 === e && (a = s - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (m - (s - w))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * m - .5 * N + .5 * w)), a)
            })(a)))), 1 === r.length ? E(!0) : E(!1)
          }), [d.current, r, m]), (0, o.useEffect)((() => {
            const e = (a = f, r.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            M(e)
          }), [r, f]), (0, o.useEffect)((() => {
            !0 !== c && !0 !== l || y(v[0])
          }), [l, c, v]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: z,
              onTouchMove: B,
              onTouchEnd: P,
              onMouseDown: z,
              onMouseMove: B,
              onMouseUp: P,
              onClick: () => {
                null !== n && n(f)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platea93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": L,
                style: {
                  transform: L ? null : `translateX(${x}px)`
                },
                children: r.map(((e, a) => (0, u.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-platec013369a930e076d1729d086fb51903e",
                  ref: C[a],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), I.length > 1 && !1 === c && (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateda8cfef07bf44e9a44839e2723ec61bb",
              children: I.map((e => (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platefe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ts = {
          pillBtn: "rockstargames-modules-gtao-license-plateaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-gtao-license-plated402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-gtao-license-platedde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-gtao-license-platec47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-gtao-license-platea4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-gtao-license-plateb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-gtao-license-platea1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-gtao-license-platea326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-gtao-license-plated19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-gtao-license-platebb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-gtao-license-platea7f1e2d78519eaf099bd43c6ad07abc9"
        },
        ss = (0, O.withTranslations)((e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: n,
            longCharList: r,
            setLongCharList: l,
            isMobileMode: d,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: p,
            windowHeight: f
          } = (0, O.useWindowResize)(), _ = (0, c.useIntl)(), {
            languageSelectorOpened: b,
            setLanguageSelectorOpened: v,
            activeSubNavId: h,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: N,
            scNavOpened: j,
            setScNavOpened: w
          } = Rt(), [S, C] = (0, o.useState)(""), T = (0, m.useLocation)(), {
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
          } = (0, F.useRockstarUserState)(), [U, H] = (0, o.useState)(null), [q, W] = (0, o.useState)(null), [K, X] = (0, o.useState)(!1), [Q, Y] = (0, o.useState)(!1), [Z, J] = (0, o.useState)(0), ee = (0, o.createRef)(), ae = es(ee, !1), te = (0, o.createRef)(), [se, ie] = (0, o.useState)(0), [ne, re] = (0, o.useState)([]), [oe, ce] = (0, o.useState)(244), le = (0, o.useRef)(null), de = (0, o.useMemo)((() => (0, fa.c)()), []), me = (0, o.useMemo)((() => ((e, a, t, s, i) => [{
            text: e.formatMessage(Ct.sc_link_activity_feed),
            location: {
              domain: fa.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(Ct.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(Ct.sc_link_settings),
              location: {
                domain: fa.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(Ct.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(Ct.sc_link_messages),
              location: {
                domain: fa.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(Ct.sc_link_game_activation),
              location: {
                domain: fa.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(Ct.sc_link_notifications),
            location: {
              domain: fa.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...qt,
              text: Ct.sc_link_notifications.defaultMessage,
              location: {
                domain: fa.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(Ct.sc_link_crews),
            location: {
              domain: fa.U.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...qt,
              text: Ct.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(Ct.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(Ct.sc_link_my_friends),
              location: {
                domain: fa.U.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(Ct.sc_link_import_friends),
              location: {
                domain: fa.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(Ct.sc_link_find_friends),
              location: {
                domain: fa.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...qt,
                text: Ct.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Wt(e), {
            text: e.formatMessage(Ct.sc_link_log_out),
            href: `${a.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...qt,
              text: Ct.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, a, E, V, S, window)), [_, a, E, V, S, de]), ge = () => {
            Y(n + oe * Z < ae)
          }, ue = () => {
            if (te.current) {
              const {
                current: e
              } = te, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(a + e)
              } else ie(a)
            }
          };
          return (0, o.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === fa.U.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [T]), (0, o.useEffect)((() => {
            re(E.characters[B] ?? [])
          }), [E, B]), (0, o.useEffect)((() => {
            E && G(E)
          }), [E]), (0, o.useEffect)((() => {
            const e = E?.characters.gtao;
            if (null !== z && !e.length) return void R(!1);
            if (null == P || !e.length) return;
            const a = e?.[P] ?? e?.[0] ?? null;
            R(!!a?.platform && [a.platform, a.characterSlot])
          }), [P, E, z]), (0, o.useEffect)((() => {
            (async () => {
              if (!E?.id) return;
              const {
                count: e
              } = await (0, O.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              $(e > 0)
            })()
          }), [E]), (0, o.useEffect)((() => {
            ge()
          }), [oe]), (0, o.useEffect)((() => {
            s(!0), g(p < 768), g(p < 768 || f < 649)
          }), [p, f]), (0, o.useEffect)((() => {
            let e = ne.length - 1;
            e < 0 && (e = 0), J(e);
            const a = ne.length > 0 ? ne[P] ?? ne[0] : null;
            if (!a) return;
            const t = null !== a ? wt(a.platform, "large") : null;
            W(t), H(a), ne.length > 1 ? X(!0) : X(!1), l(ne.length - 1 > 3)
          }), [P, ne]), (0, o.useEffect)((() => {
            ge()
          }), [Z, d, p, ne]), (0, o.useEffect)((() => {
            ue(), Ut()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [p, f]), (0, o.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== P && A(Math.max(0, Math.min(e, ne.length - 1)))
          }), [ne, I]), (0, u.jsxs)(u.Fragment, {
            children: [null !== U && "gtao" === B && (0, u.jsxs)("div", {
              className: ts.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": _.formatMessage(Ct.profile_selector_profile_card),
              children: [(0, u.jsx)(Jt, {
                s: ts,
                character: U,
                platformTag: q
              }), !0 === K && (0, u.jsxs)("div", {
                className: ts.scCharacterSelector,
                children: [(0, u.jsx)("button", {
                  className: ts.scCharacterSelectBtn,
                  "aria-hidden": !D,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    s(a), M({
                      event: a ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === a ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, u.jsx)("span", {
                    children: (0, u.jsx)(c.FormattedMessage, {
                      ...Ct.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, u.jsx)("div", {
                  className: ts.scCharacterList,
                  "data-long-list": r,
                  "aria-hidden": t,
                  ref: i,
                  children: ne.map((e => (0, u.jsx)(Yt, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ce
                  }, e.mugshotUrl)))
                }), !0 === d && (0, u.jsx)("div", {
                  className: ts.scCharacterList,
                  "data-single-item": 2 === ne.length,
                  "data-swiper-disabled": Q,
                  "aria-hidden": t,
                  ref: ee,
                  children: (0, u.jsx)(as, {
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
                    children: ne.filter(((e, a) => a !== P)).map((e => (0, o.createElement)(Yt, {
                      characterData: e,
                      setMobileCardWidth: ce,
                      key: e.mugshotUrl,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, u.jsxs)("nav", {
              className: ts.scNav,
              "aria-hidden": !D,
              children: [(0, u.jsx)("button", {
                className: ts.scNavHeader,
                type: "button",
                "data-opened": j,
                "data-nav-opened": D,
                tabIndex: j ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), j || w(!0)
                },
                "data-testid": "playerButton",
                children: (0, u.jsx)("span", {
                  children: E.nickname
                })
              }), (0, u.jsx)("div", {
                className: ts.scNavWrap,
                "data-opened": j,
                "data-logged-in": "true",
                ref: te,
                style: {
                  "--scNavWrap-max-height": `${se+y}px`
                },
                children: me.map(((e, a) => (0, o.createElement)(Xt, {
                  ...e,
                  id: a,
                  activeSubNavId: h,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: N,
                  key: e.text
                })))
              })]
            }), (0, u.jsx)("div", {
              className: ts.scLanguageSelector,
              style: {
                visibility: D ? null : "hidden"
              },
              children: (0, u.jsx)(Ht.LanguageSelector, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: b,
                setLanguageSelectorOpened: v
              })
            })]
          })
        })),
        is = {
          scMenu: "rockstargames-modules-gtao-license-plateebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-gtao-license-platef333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-gtao-license-platee3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-gtao-license-plateff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-gtao-license-plateba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-gtao-license-plated362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-gtao-license-plated8e443f5d0d9171449f5f1042f80aa17"
        },
        ns = (0, c.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, O.useWindowResize)(), a = (0, c.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: n,
            scNavOpened: r,
            setScNavOpened: l,
            charListHidden: d,
            setCharListHidden: m
          } = Rt(), [g, p] = (0, o.useState)(!1), {
            navHidden: f = !1
          } = (0, k.useState)(), {
            loggedIn: _
          } = (0, F.useRockstarUser)(), {
            currentCharId: b,
            navOpen: v,
            setNavOpen: h,
            userData: x
          } = (0, F.useRockstarUserState)(), {
            track: y
          } = (0, F.useGtmTrack)(), [N, j] = (0, o.useState)(!1), w = (0, k.useReactiveVar)(F.scConfig), S = (0, o.useRef)(), [C, T] = (0, o.useState)(0), I = (0, o.createRef)(), [M, L] = (0, o.useState)(!1), [E, z] = (0, o.useState)(0), [B, P] = (0, o.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: D
          } = (0, O.useRockstarWebLSSettings)(), A = (0, o.useCallback)((e => {
            m(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, o.useEffect)((() => {
            null !== b && D.currentCharId !== b && V({
              key: "currentCharId",
              value: b
            }), !1 === _ ? V({
              key: "currentCharId",
              value: null
            }) : _ && !x && y({
              event: "account_synced"
            })
          }), [b, _]), (0, o.useEffect)((() => {
            S.current && (!1 === d && !1 === N && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === d && (S.current.style.height = null))
          }), [d, S, N]), (0, o.useEffect)((() => {
            const e = () => {
                h(!1), A(!0)
              },
              a = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", a)
            }
          }), []), (0, o.useEffect)((() => {
            h(!1), A(!0)
          }), [f]), (0, o.useEffect)((() => {
            if (I.current) {
              const {
                current: e
              } = I, a = window.getComputedStyle(e);
              T(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [I]), (0, o.useEffect)((() => {
            P(window.navigator.userAgent.includes("Mac"))
          }), []), (0, o.useEffect)((() => {
            I.current && p(I?.current?.scrollHeight >= e)
          }), [I, e]), (0, o.useEffect)((() => {
            v || (n(-1), i(!1))
          }), [v]), (0, o.useEffect)((() => {
            s && (d || A(!0), r && (l(!1), n(-1)))
          }), [s]), (0, o.useEffect)((() => {
            r && (s && i(!1), d || A(!0))
          }), [r]), null === _ ? null : (0, u.jsxs)(Mt.c, {
            enabled: !!v,
            removeScrollBar: !1,
            children: [(0, u.jsxs)("div", {
              className: [is.scMenu, v ? is.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": B,
              "data-scroll-mode": g,
              ref: I,
              "aria-hidden": !v,
              children: [(0, u.jsx)("button", {
                className: is.dragHandleBtn,
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
                children: (0, u.jsx)("img", {
                  className: is.dragHandle,
                  src: t(82708),
                  alt: a.formatMessage(Ct.sc_menu_drag_handle)
                })
              }), _ ? (0, u.jsx)(ss, {
                sc: w,
                charListHidden: d,
                hideCharacterList: A,
                refCharacterListDesktop: S,
                menuPadding: C,
                longCharList: N,
                setLongCharList: j,
                isMobileMode: M,
                setIsMobileMode: L
              }) : (0, u.jsx)(Qt, {
                sc: w,
                navOpen: v
              })]
            }), (0, u.jsx)("div", {
              className: [is.scOverlay, v ? is.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), l),
        rs = t(71084),
        os = t(29314),
        cs = (0, c.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const t = (0, c.useIntl)(),
            {
              data: s
            } = (0, F.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: n,
              navOpen: r,
              setNavOpen: l
            } = (0, F.useRockstarUserState)(),
            {
              track: d
            } = (0, F.useGtmTrack)(),
            [m, g] = (0, o.useState)(null),
            [p, f] = (0, o.useState)(!1),
            [_, k] = (0, o.useState)(null),
            [b, v] = (0, o.useState)(!1),
            [h, x] = (0, o.useState)([]);
          (0, o.useEffect)((() => {
            x(s.characters[i] ?? [])
          }), [s, i]);
          const y = (0, o.useCallback)((e => {
            e.stopPropagation(), l(!r), 1 == !r && a(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: r ? "close" : "open"
            })
          }), [r]);
          return (0, o.useEffect)((() => {
            const e = s?.id ?? !1,
              a = e ? (h?.[n]?.mugshotUrl ?? s?.avatar) || rs : os,
              t = wt(h?.[n]?.platform, "small") ?? null;
            k(t), g(a), f(e), v(!!h?.[n]?.mugshotUrl)
          }), [s, h, n, rs, os]), (0, u.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-platedc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": t.formatMessage(r ? Ct.sc_menu_close : Ct.sc_menu_open),
            "aria-expanded": r,
            type: "button",
            onClick: y,
            "data-testid": "avaterMenuButton",
            children: [(0, u.jsx)("img", {
              className: "rockstargames-modules-gtao-license-platece75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(rs)
              },
              alt: s?.nickname || ""
            }), p && null !== _ && (0, u.jsx)("img", {
              className: "rockstargames-modules-gtao-license-plateaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), p && (0, u.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-gtao-license-platecf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": h?.[n]?.platform ?? null
            })]
          })
        }), l),
        ls = {
          pillBtn: "rockstargames-modules-gtao-license-plateb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-gtao-license-platefbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-gtao-license-platea586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-gtao-license-plateccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-gtao-license-platee4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-gtao-license-plated8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-gtao-license-platee56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-gtao-license-platec84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-gtao-license-platebf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-modules-gtao-license-platef6d46a24b050aad98fc3aae387b75586"
        },
        ds = e => {
          let {
            backgroundColor: a,
            brands: t = [],
            description: s = "",
            ctaLabel: i,
            ctaLink: n = "https://rockstargames.com",
            gradient: r = !0,
            image: c,
            imageOrientation: l = "right",
            title: d = "",
            name: m = ""
          } = e;
          const [g, p] = (0, o.useState)(!1), {
            ref: f,
            inView: _
          } = (0, q.cD)({
            threshold: .6
          }), {
            track: k
          } = (0, F.useGtmTrack)(), b = {
            "--promo-background": a ?? "var(--black-200)",
            "--promo-image": `url(${(0,T.useGetCdnSource)(c)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, o.useEffect)((() => {
            _ && !g && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: m
            }), p(!0))
          }), [_]), (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)("div", {
              className: ls.promoModuleWrapper,
              children: (0, u.jsxs)(Oe.q.div, {
                className: ls.promoModule,
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
                ref: f,
                children: [(0, u.jsx)("div", {
                  className: [ls.promoModuleImage, r ? ls.gradient : "", "left" === l ? ls.left : ls.right].join(" ")
                }), (0, u.jsxs)("div", {
                  className: ls.promoModuleContentContainer,
                  children: [(0, u.jsx)(w, {
                    brands: t,
                    className: ls.promoModuleBrands
                  }), (0, u.jsxs)("div", {
                    className: ls.promoModuleTextContent,
                    children: [d && (0, u.jsx)("h3", {
                      children: d
                    }), s && (0, u.jsx)("p", {
                      children: s
                    })]
                  }), i && (0, u.jsx)(E, {
                    to: n,
                    text: i,
                    onClick: () => {
                      k({
                        event: "cta_other",
                        event_category: "cta",
                        event_action: "other",
                        event_label: i,
                        element_placement: "promo module",
                        link_url: n,
                        text: i
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        ms = {
          rating: "rockstargames-modules-gtao-license-platea1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-gtao-license-platecba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-gtao-license-plateff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-gtao-license-plated47cd2b7c7415cb44cddef00b1c9b35f"
        },
        gs = (0, c.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var us = t(13784);
      const ps = "undefined" != typeof GameDataNewGamesDatabaseConnection ? GameDataNewGamesDatabaseConnection : us.GameData;
      (0, O.importAll)(t(52884));
      const fs = sa((0, c.withIntl)((e => {
          let {
            descriptors: a = null,
            footer: s = null,
            href: i,
            img: n = null,
            titleSlug: r = null,
            style: l = {},
            className: d
          } = e;
          const [m, g] = (0, o.useState)(!1), {
            inView: f
          } = (0, q.cD)({
            threshold: .6
          }), [_, b] = (0, o.useState)({
            ratingDescriptors: a,
            ratingFooter: s,
            ratingImg: n,
            ratingUrl: i
          }), {
            track: v
          } = (0, F.useGtmTrack)(), h = (0, c.useIntl)(), {
            data: x
          } = (0, k.useQuery)(ps, {
            variables: {
              titleSlug: r
            },
            skip: !r
          });
          if ((0, o.useEffect)((() => {
              x && b(x?.game)
            }), [x]), (0, o.useEffect)((() => {
              f && !m && _.img_rating && (v({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [f]), !_.ratingImg) return null;
          const y = !!_.ratingDescriptors;
          return (0, u.jsxs)("div", {
            className: [ms.rating, y ? ms.withDescriptors : ms.withOutDescriptors, d || ""].join(" "),
            style: (0, O.safeStyles)(l),
            children: [(0, u.jsx)(p, {
              to: _.ratingUrl,
              target: "_blank",
              children: (0, u.jsx)("img", {
                alt: h.formatMessage(gs.components_ratings_link_alt, {
                  rating: (N = _.ratingImg, N.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: t(7e4)(`./${_.ratingImg}`)
              })
            }), y && (0, u.jsxs)("div", {
              className: ms.text,
              children: [(0, u.jsx)("p", {
                className: ms.descriptors,
                dangerouslySetInnerHTML: {
                  __html: _?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), _.ratingFooter && (0, u.jsx)("hr", {}), _.ratingFooter && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: _.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var N
        }), l)),
        _s = {
          responsiveFlexBox: "rockstargames-modules-gtao-license-platecef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-modules-gtao-license-platea8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-modules-gtao-license-platebee8268780b292e5bc0da0b497e2c28f"
        },
        ks = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [_s.responsiveFlexBox, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        bs = {
          responsiveFlexItem: "rockstargames-modules-gtao-license-plateae579f6183cf73c897e68c8aae5c9d9d"
        },
        vs = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [bs.responsiveFlexItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        hs = {
          responsiveGridBox: "rockstargames-modules-gtao-license-platea28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-modules-gtao-license-platebeddf36313a28976090b5a8b04d2594a"
        },
        xs = e => {
          let {
            children: a,
            cols: t,
            className: s,
            rows: i,
            style: n
          } = e;
          const r = n ? {
            ...n
          } : {};
          return void 0 !== t && (r.gridTemplateColumns = `repeat(${t}, 1fr)`), void 0 !== i && (r.gridTemplateRows = `repeat(${i}, 1fr)`), (0, u.jsx)("div", {
            className: [hs.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: r,
            children: a
          })
        },
        ys = {
          responsiveGridBox: "rockstargames-modules-gtao-license-platea39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-modules-gtao-license-platebe7a0966e2f0457c1172ac9da99020c6"
        },
        Ns = e => {
          let {
            children: a,
            className: t,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [ys.responsiveGridItem, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: a
          })
        },
        js = {
          responsiveImage: "rockstargames-modules-gtao-license-platee31b43dce2e720669fb90bf539d22197"
        },
        ws = e => {
          let {
            src: a,
            className: t = "",
            animate: s,
            ariaLabel: i,
            style: n = {}
          } = e;
          const [r, o] = (0, O.usePreloadImg)(a);
          return r ? (n.backgroundImage = `url(${a})`, (0, u.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [js.responsiveImage, s ? js.animateBox : "", t].join(" "),
            style: {
              ...n,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        Ss = {
          responsiveSection: "rockstargames-modules-gtao-license-platefb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-modules-gtao-license-platebdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Cs = e => {
          let {
            children: a,
            className: t,
            style: s,
            maxWidth: i
          } = e;
          return (0, u.jsx)("section", {
            className: [Ss.responsiveSection, void 0 !== t ? t : ""].join(" "),
            style: s,
            children: i ? (0, u.jsx)("div", {
              className: Ss.maxWidth,
              children: a
            }) : a
          })
        },
        Ts = () => (0, u.jsx)(p, {
          className: "rockstargames-modules-gtao-license-plateba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Is = e => {
          let {
            thresholds: a,
            onThresholdReached: t,
            children: s
          } = e;
          const [i, n] = (0, o.useState)([]), [r, c] = (0, o.useState)(new Set);
          return (0, o.useEffect)((() => {
            const e = Array.from(new Set(a));
            e.sort(((e, a) => e - a)), n(e)
          }), [a]), (0, u.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [i.map((e => (0, u.jsx)(q.Ws, {
              threshold: e,
              onChange: a => ((e, a) => {
                e && !r.has(a) && c((e => {
                  const s = new Set(e);
                  return i.forEach((e => {
                    e <= a && !s.has(e) && (s.add(e), t(e))
                  })), s
                }))
              })(a, e),
              triggerOnce: !0,
              children: a => {
                let {
                  ref: t
                } = a;
                return (0, u.jsx)("div", {
                  ref: t,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), s]
          })
        },
        Ms = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, o.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        Ls = (0, o.forwardRef)(((e, a) => {
          const {
            threshold: t,
            callback: s,
            children: i,
            requireUser: n
          } = e, {
            track: r
          } = (0, F.useGtmTrack)(n), [c, l] = (0, o.useState)(a?.current);
          return (0, o.useEffect)((() => {
            a?.current && l(a.current)
          }), [a]), ((e, a, t) => {
            const [s, i] = (0, o.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: n,
              scrollY: r
            } = s;
            (0, o.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, o.useEffect)((() => {
              i({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const c = (0, o.useCallback)((() => {
              const e = document.documentElement,
                r = document.body,
                o = t?.scrollTop || e.scrollTop || r.scrollTop,
                l = t?.scrollHeight || e.scrollHeight || r.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = o / (l - d) * 100;
              if (n) {
                const e = Math.min(...n, l);
                if (m >= e) {
                  const s = n.filter((a => a !== e));
                  0 === s.length && (t ?? window).removeEventListener("scroll", c), a && a({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), i({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else i({
                ...s,
                scrollY: m
              })
            }), [n, t, a]);
            (0, o.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = t ?? window;
              return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
            }), [c])
          })(t, (e => {
            let {
              scrollY: a
            } = e;
            r({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: a,
              scroll_depth: a
            }), "function" == typeof s && s(a)
          }), c), i
        }));
      Ls.displayName = "ScrollTracker";
      const Es = Ls,
        zs = (0, O.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [t] = (0, o.useState)(""), s = (0, m.useNavigate)(), i = (0, k.useMutateState)();
          return (0, u.jsxs)("form", {
            action: "#",
            className: "rockstargames-modules-gtao-license-plateb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, u.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, u.jsx)("input", {
              autoComplete: "off",
              defaultValue: t,
              enterKeyHint: "search",
              name: "q",
              placeholder: a("Search Rockstar Games")
            })]
          })
        })),
        Bs = {
          skeleton: "rockstargames-modules-gtao-license-platef963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-modules-gtao-license-platee00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-modules-gtao-license-platedb0b80177710d337d93bddb97b8a7dea"
        },
        Ps = e => {
          let {
            skeleton: a
          } = e;
          return a ? (0, u.jsx)("div", {
            className: [Bs.skeleton, Bs[a]].join(" ")
          }) : null
        },
        Vs = (0, c.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Ds = {
          bodySmall: "rockstargames-modules-gtao-license-platec048aacaedc7fb642f38c7f163c193e3"
        },
        As = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, u.jsxs)("div", {
            className: Ds.track,
            children: [(0, u.jsx)("p", {
              children: a
            }), (0, u.jsx)("p", {
              className: Ds.bodySmall,
              children: t
            })]
          })
        },
        $s = (0, c.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platee6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, u.jsx)("h4", {
              className: "rockstargames-modules-gtao-license-platecd3895fbae93ba04f1401487f6e6eddf",
              children: (0, u.jsx)(c.FormattedMessage, {
                ...Vs.components_track_list_title
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateef0cde8b15ded961605237d0e8328a9b",
              children: (0, u.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platebdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, u.jsx)(As, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), l),
        Os = "rockstargames-modules-gtao-license-plateeca98eb0b5b84a0c9a2e6d952545a2d5",
        Fs = "rockstargames-modules-gtao-license-plated3d0b4ecd3bddba96c73f49fcca34ed8",
        Rs = {
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
        Gs = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: s = !1,
            navigation: i = !1,
            slideChildren: n = [],
            variants: r = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: c = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, F.useGtmTrack)(), [d, m] = (0, o.useState)([Je.O4, Je.Hj, Je.eM]), [g, p] = (0, o.useState)(null), [f, _] = (0, o.useState)(null);
          return (0, o.useEffect)((() => {
            const e = [Je.O4, Je.Hj, Je.eM];
            i && e.push(Je._2), m(e)
          }), [i]), (0, o.useEffect)((() => {
            if (!n) return;
            const e = n.map(((e, a) => (0, u.jsx)(B.Ky, {
              children: e
            }, Symbol(a).toString())));
            _(e)
          }), [n]), f ? (0, u.jsxs)(Oe.q.div, {
            className: "rockstargames-modules-gtao-license-plated4f245838b94234f21463a08a8112910",
            variants: r.parent,
            transition: c.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, u.jsx)(Oe.q.div, {
              className: Os,
              variants: r.main,
              transition: c.main,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(B.wx, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Rs,
                className: Os,
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
            }), (0, u.jsx)(Oe.q.div, {
              className: Fs,
              variants: r.thumbs,
              transition: c.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(B.wx, {
                threshold: 50,
                onSwiper: p,
                loop: s,
                breakpoints: Rs,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Fs,
                children: f
              })
            })]
          }) : null
        };
      var Us = t(504);
      const Hs = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const n = t ?? [a],
            {
              data: r
            } = (0, k.useQuery)(Us.TinaModulesInfo, {
              variables: {
                ids: n,
                sync: i
              },
              setTitleDataPath: s,
              skip: !n.length
            });
          return r?.tinaModulesInfo ?? null
        },
        qs = sa((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: i
          } = e;
          const n = Hs({
            id: t,
            ids: s
          });
          if (!n) return (0, u.jsx)(Ps, {
            skeleton: i
          });
          const r = n?.[0]?.tina;
          return r ? (0, u.jsx)(u.Fragment, {
            children: n.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, u.jsx)(T.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: n
                }
              }, t)
            }))
          }) : null
        })),
        Ws = e => {
          let {
            children: a,
            style: t,
            theme: s
          } = e;
          const [i, n] = (0, o.useState)(s);
          return (0, o.useEffect)((() => {
            s && n(s)
          }), [s]), (0, u.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platea3cc68ab0d512c3d8835ee9abb7a51c4",
            style: t,
            "data-theme": i,
            children: a
          })
        };
      var Ks = t(19168);
      const Xs = {
          pillBtn: "rockstargames-modules-gtao-license-plateae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-gtao-license-plated7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-gtao-license-platefd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-gtao-license-platedd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-gtao-license-plateeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-gtao-license-plated00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-gtao-license-platefdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-gtao-license-plateabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-gtao-license-plateea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-gtao-license-platec31731d09d8118c6a82fe6edb193dc50"
        },
        Qs = e => {
          let {
            description: a,
            foreign_id: t = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: n
          } = (0, F.useGtmTrack)(), {
            loggedIn: r
          } = (0, F.useRockstarUser)(), {
            refetch: c
          } = (0, k.useQuery)(Ks.UserGetVote, {
            skip: !0
          }), [l] = (0, k.useMutation)(Ks.UserCastVote), [d, m] = (0, o.useState)(null), g = (0, o.useCallback)((async e => {
            n({
              event_action: d ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: t
            });
            const a = {
                foreign_id: t,
                foreign_type: s,
                vote: e
              },
              i = await l({
                variables: a
              });
            m(i?.data?.userCastVote?.vote ?? null)
          }), [t, s]);
          return (0, o.useEffect)((() => {
            (async () => {
              if (!r || !t || !s) return;
              const e = await c({
                foreign_id: t,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, s, r]), (0, u.jsx)("div", {
            className: Xs.userVote,
            children: (0, u.jsxs)("div", {
              className: Xs.voteContent,
              children: [(0, u.jsxs)("div", {
                className: Xs.info,
                children: [(0, u.jsx)("h3", {
                  children: i
                }), (0, u.jsx)("p", {
                  children: a
                })]
              }), (0, u.jsxs)("div", {
                className: [Xs.voteButtons, r ? "" : Xs.loggedOutButtons].join(" "),
                children: [(0, u.jsx)("button", {
                  onClick: () => g(!0),
                  className: [Xs.upVote, d ? Xs.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, u.jsx)("button", {
                  className: [Xs.downVote, !1 === d ? Xs.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Ys = {
          carousel: "rockstargames-modules-gtao-license-plated8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-modules-gtao-license-platea3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-gtao-license-platef46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-gtao-license-plated26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-gtao-license-platea879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-gtao-license-plateb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-gtao-license-platec5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-gtao-license-platee25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-gtao-license-platedd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-gtao-license-plateb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-gtao-license-platedddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-gtao-license-platea7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-gtao-license-platee1d7433489996eb9fa890d452ebcb042"
        },
        Zs = (0, O.withLocale)((e => {
          let {
            locale: a,
            t,
            videos: s
          } = e;
          const {
            track: i
          } = (0, F.useGtmTrack)(), {
            setBodyIsLocked: n
          } = (0, O.useBodyScrollable)("VideoCarousel"), [r, c] = (0, o.useState)(0), [l, d] = (0, o.useState)(0), m = (0, o.useRef)(null), g = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            if (!m.current || !g.current) return;
            const e = new(_())(m.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const a = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              t = () => {
                c(r - 1 < 0 ? 0 : r - 1), d(0)
              },
              i = () => {
                const e = r + 1 >= s.length - 1 ? s.length - 1 : r + 1;
                c(e), d(0)
              },
              o = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(Ys.dragging) || a() && n(!0)
              },
              l = () => {
                a() && n(!1), d(0)
              },
              u = e => {
                "press" === e.type && m.current?.classList.add(`${Ys.disableClick}`), "tap" === e.type && (m.current?.classList.remove(`${Ys.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              p = () => {
                a() && n(!1), m.current && m.current.classList.remove(`${Ys.disableClick}`)
              },
              f = () => {
                a() && n(!1)
              };
            return g.current.addEventListener("transitionend", f), e.on("swiperight", t), e.on("swipeleft", i), e.on("pan", o), e.on("panend", l), e.on("press tap", u), e.on("pressup", p), () => {
              e.off("swiperight", t), e.off("swipeleft", i), e.off("pan", o), e.off("panend", l), e.off("press tap", u), e.off("pressup", p), g.current && g.current.removeEventListener("transitionend", f), d(0)
            }
          }), [m.current, r]), (0, u.jsxs)("section", {
            className: Ys.carousel,
            children: [(0, u.jsx)("div", {
              className: Ys.track,
              ref: m,
              children: (0, u.jsx)("div", {
                className: `${Ys.items} ${0!==l?Ys.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${l}px))`
                },
                children: s.map(((e, a) => (0, u.jsx)(p, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === a ? Ys.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === a ? 0 : -1,
                  children: (0, u.jsx)(li, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, u.jsxs)("footer", {
              children: [(0, u.jsx)("div", {
                className: Ys.text,
                children: s.map(((e, s) => {
                  return (0, u.jsx)(p, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: r === s ? 0 : -1,
                    children: (0, u.jsxs)("div", {
                      className: [Ys.info, s === r ? Ys.active : ""].join(" "),
                      children: [(0, u.jsxs)("div", {
                        className: Ys.title,
                        children: [(0, u.jsx)("div", {
                          className: Ys.gameTitle,
                          children: `${e.game.title}${"fr_fr"===a?" ":""}`
                        }), (0, u.jsx)("h2", {
                          className: Ys.videoTitle,
                          children: `${e.title}`
                        })]
                      }), (0, u.jsx)(C, {
                        className: Ys.cta,
                        onClick: (n = `/videos/${e.id}`, () => {
                          i({
                            event: "cta_watch_video",
                            text: "watch now",
                            link_url: n,
                            element_placement: "video carousel"
                          })
                        }),
                        children: t("Watch Now")
                      })]
                    })
                  }, e.id);
                  var n
                }))
              }), (0, u.jsx)("div", {
                className: Ys.dots,
                children: s.map(((e, a) => (0, u.jsx)("button", {
                  "aria-label": `Slide ${a+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${a}`,
                  onClick: () => c(a),
                  className: r === a ? Ys.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Js = (0, c.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        ei = {
          img: "rockstargames-modules-gtao-license-platee3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-modules-gtao-license-platec3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, O.importAll)(t(18016));
      const ai = e => {
          let {
            isWideCard: a = !1,
            size: s = 640,
            title: i,
            titleSlug: n
          } = e;
          const {
            isMobile: r
          } = (0, O.useWindowResize)(), c = (0, o.useMemo)((() => {
            let e = "";
            return a && (e = r ? t(72027)(`./${n}/mobile.png`) : t(83408)(`./${n}/desktop.png`)), e || (e = t(14512)(`./${n}.jpg`), e += `?im=Resize=${s}`), e
          }), [r, n]), [l] = (0, O.usePreloadImg)(c);
          return (0, u.jsx)("div", {
            role: "img",
            "aria-label": i,
            className: [ei.img, l ? ei.startAnimation : "", a ? ei.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${c})`
            }
          })
        },
        ti = {
          fobLink: "rockstargames-modules-gtao-license-platefded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-modules-gtao-license-platea9b41f96042bda8a8c77b7b7b10f84d5"
        },
        si = e => {
          let {
            game: a,
            to: t
          } = e;
          const {
            titleSlug: s,
            urlOfficial: i = ""
          } = a, n = ["VI"].includes(s);
          return (0, u.jsx)(p, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: t ?? i,
            target: "_self",
            className: [ti.fobLink, n ? ti.wide : ""].join(" "),
            children: (0, u.jsx)(ai, {
              title: a.title,
              titleSlug: s,
              isWideCard: n
            })
          })
        },
        ii = {
          videoList: "rockstargames-modules-gtao-license-platea77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-gtao-license-plateed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-gtao-license-plateffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-gtao-license-plateffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-gtao-license-platecbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-modules-gtao-license-plateb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-modules-gtao-license-platef3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-modules-gtao-license-platec8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-gtao-license-platef30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-gtao-license-plated9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-gtao-license-platec806076a1e3e23c77528ee12e32771a3"
        },
        ni = (0, c.withIntl)((e => {
          let {
            vids: a,
            games: t,
            title: s,
            gameTitleNecessary: i
          } = e;
          const n = (0, c.useIntl)(),
            {
              track: r
            } = (0, F.useGtmTrack)(),
            l = void 0 !== t ? "games" : "videos",
            [d, m] = (0, o.useState)(),
            [g, p] = (0, o.useState)(),
            [f, _] = (0, o.useState)(0),
            k = (0, o.useRef)(null),
            b = (0, o.useRef)(null);
          (0, o.useEffect)((() => {
            p({
              nextEl: b.current,
              prevEl: k.current
            })
          }), [b, k]), (0, o.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let a = 4;
              e("768px") ? a = 1 : e("990px") || e("1440px") ? a = 2.2 : e("1920px") && (a = 3.2), _(a)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [f]);
          const v = e => {
            d?.slideTo(e)
          };
          let h;
          return h = "games" === l ? (0, u.jsx)(u.Fragment, {
            children: t.results.map(((e, a) => "775700as" !== e.id && (0, u.jsx)(B.Ky, {
              className: ii.slide,
              onFocus: () => v(a),
              children: (0, u.jsx)(si, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, u.jsx)(u.Fragment, {
            children: a.map(((e, a) => (0, u.jsx)(B.Ky, {
              className: ii.slide,
              onFocus: () => v(a),
              children: (0, u.jsx)(Ht.VideoCard.Link, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, u.jsxs)("section", {
            className: ii.videoList,
            children: [(0, u.jsxs)("h3", {
              className: ii.sectionHeader,
              children: [s, (0, u.jsxs)("div", {
                className: ii.arrowNav,
                children: [(0, u.jsx)("button", {
                  className: [ii.arrow, ii.previous].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": n.formatMessage(Js.previous_button_label)
                }), (0, u.jsx)("button", {
                  className: [ii.arrow, ii.next].join(" "),
                  type: "button",
                  ref: b,
                  "aria-label": n.formatMessage(Js.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const a = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      a && (e.preventDefault(), a.focus())
                    }
                  }
                })]
              })]
            }), (0, u.jsx)("div", {
              className: [ii.items, f % 1 != 0 ? ii.partial : ""].join(" "),
              children: (0, u.jsx)("div", {
                className: ii.trackWrapper,
                children: f && (0, u.jsx)(B.wx, {
                  className: ii.track,
                  slidesPerView: f,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [Je._2],
                  slideClass: (0, T.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    r({
                      event_action: "next",
                      event_category: "carousel",
                      event: "carousel_next",
                      event_label: s?.toLowerCase() ?? "",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    r({
                      event_action: "previous",
                      event_category: "carousel",
                      event: "carousel_previous",
                      event_label: s?.toLowerCase() ?? "",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    r({
                      event_action: "swipe",
                      event_category: "carousel",
                      event: "carousel_swipe",
                      event_label: s?.toLowerCase() ?? "",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: h
                })
              })
            })]
          })
        }), l),
        ri = e => {
          let {
            children: a,
            ...t
          } = e;
          return (0, u.jsx)("span", {
            ...t,
            className: "rockstargames-modules-gtao-license-platef7f61ab4bc6dd2a49f80662ead7d8a51",
            children: a
          })
        },
        oi = (0, O.withTranslations)((e => {
          let {
            error: a,
            t,
            domain: s = ""
          } = e;
          console.error({
            error: a
          });
          let i = a?.message ?? t("error-404-new");
          i = t("error-404-new");
          const n = a?.code ?? 398,
            r = (0, o.useRef)(null);
          return (0, o.useEffect)((() => {
            r && r?.current && r.current.focus()
          }), [r]), (0, u.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-plated988ce20c420c26fc5e455279bf94cb9",
            children: [(0, u.jsx)("h3", {
              tabIndex: -1,
              ref: r,
              children: `${i} (${n})`
            }), (0, u.jsx)(p, {
              to: "/",
              children: t("Home")
            }), "clr" !== s && (0, u.jsx)(zs, {})]
          })
        })),
        ci = {
          videoPreview: "rockstargames-modules-gtao-license-platec6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-gtao-license-plateec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-gtao-license-plateab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-gtao-license-platee84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-gtao-license-platea322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-gtao-license-platef68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-gtao-license-platedebff452a4923aded7de826c081bab5d"
        },
        li = e => {
          let {
            video: a,
            size: t = 640
          } = e;
          const s = () => a.screencap.includes("akamai") ? `${a.screencap}?im=Resize=${t}` : a.screencap,
            [i] = (0, O.usePreloadImg)(s());
          return (0, u.jsx)("div", {
            className: [ci.screencap, i ? ci.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        di = e => {
          let {
            gameTitleNecessary: a = !0,
            openInNewWindow: t = !1,
            video: s,
            size: i,
            toExplicit: n
          } = e;
          const r = n ?? `/videos/${s.id}`,
            o = {
              className: ci.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": r
            },
            c = (0, u.jsxs)("div", {
              className: ci.card,
              children: [(0, u.jsx)(li, {
                video: s,
                size: i
              }), (0, u.jsxs)("div", {
                className: ci.info,
                children: [a ? (0, u.jsx)("div", {
                  className: ci.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, u.jsx)("h5", {
                  className: ci.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return t ? (0, u.jsx)("a", {
            href: r,
            target: "_blank",
            ...o,
            children: c
          }) : (0, u.jsx)(p, {
            to: r,
            ...o,
            children: c
          })
        };
      class mi extends o.Component {
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
          return null !== this.state.error.code ? (0, u.jsx)(oi, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const gi = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, u.jsx)(mi, {
            header: a,
            children: (0, u.jsx)(e, {
              ...t
            })
          })
        }
      };
      var ui = t(1267),
        pi = t(20688),
        fi = t(48016);
      const _i = (0, o.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = ui.m[s];
        return (0, u.jsx)(pi.O, {
          features: fi.i,
          children: (0, u.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      _i.displayName = "LiteMotion";
      const ki = _i,
        bi = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        vi = {
          ease: "easeIn",
          duration: .4
        },
        hi = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(Oe.q.div, Object.assign({
            className: "rockstargames-modules-gtao-license-platef0ee4e641f1ac92151be887c9ebb8392",
            variants: bi,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: vi
          }, {
            children: a
          }))
        },
        xi = e => a => (0, u.jsx)(hi, {
          children: (0, u.jsx)(e, Object.assign({}, a))
        }),
        yi = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Ni = {
          ease: "easeIn",
          duration: .75
        },
        ji = e => {
          let {
            children: a
          } = e;
          return (0, u.jsx)(Oe.q.div, {
            className: "rockstargames-modules-gtao-license-platea479a10c5475b17a0564b60fecf98c8b",
            variants: yi,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Ni,
            children: a
          })
        },
        wi = e => a => (0, u.jsx)(ji, {
          children: (0, u.jsx)(e, {
            ...a
          })
        }),
        Si = {
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
        Ci = {
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
        Ti = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Ci[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Ii = t(45164);
      const Mi = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Li = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Ei = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        zi = e => {
          let a, {
            type: t = Ei.SPINNING
          } = e;
          switch (t) {
            case Ei.THREE_DOTS:
              a = Li;
              break;
            case Ei.SPINNING:
            default:
              a = Mi
          }
          const s = {
            loop: !0,
            autoplay: !0,
            animationData: a,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, u.jsx)(Ii.c, {
            options: s,
            height: 50,
            width: 50
          })
        }
    },
    53592: (e, a, t) => {
      "use strict";
      t.d(a, {
        U: () => s,
        c: () => n
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = i.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, i] = a;
            return i === t && (e = {
              site: s,
              subDomain: i
            }, !0)
          })) >= 0)), n = i[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          r = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = i(e, a);
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

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          r = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = i(e, a);
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          r = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
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

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          r = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = i(e, a);
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

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          r = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = i(e, a);
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
      var i = {};

      function n(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !i[a] && (i[a] = !0, !0)
        }))
      }

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      s.definitions = s.definitions.concat(n(t(73784).definitions)), s.definitions = s.definitions.concat(n(t(28540).definitions));
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
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = s, e.exports.NewswireList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = o[a] || new Set,
          i = new Set,
          n = new Set;
        for (s.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var r = n;
          n = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (o[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = c(e, a);
          s && t.definitions.push(s)
        })), t
      }(s, "NewswireList")
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

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 13892
    },
    52884: (e, a, t) => {
      var s = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 91076,
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

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 52884
    },
    7e4: (e, a, t) => {
      var s = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 91076,
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

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 7e4
    },
    6572: (e, a, t) => {
      var s = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 6572
    },
    18016: (e, a, t) => {
      var s = {
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

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 18016
    },
    14512: (e, a, t) => {
      var s = {
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

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 14512
    },
    83408: (e, a, t) => {
      var s = {
        "./VI/desktop.png": 44616
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 83408
    },
    72027: (e, a, t) => {
      var s = {
        "./VI/mobile.png": 17076
      };

      function i(e) {
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
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = n, e.exports = i, i.id = 72027
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
    91076: e => {
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