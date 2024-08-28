! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      i = (new Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "f601b501-47b4-4c32-9671-9308e7ba9b8d", e._sentryDebugIdIdentifier = "sentry-dbid-f601b501-47b4-4c32-9671-9308e7ba9b8d")
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
  [889], {
    6889: (e, i, n) => {
      "use strict";
      n.r(i), n.d(i, {
        PlayerWithInfo: () => g,
        VideoWithPlaylist: () => z,
        default: () => M,
        useVideoData: () => k.zY
      });
      var s = n(1403),
        _ = n(6717);
      const l = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        a = (0, _.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var o = n(9779);
      const c = "rockstargames-modules-core-videoplayerff481c537a56a6fcdb1be85dfbc8944e";
      var t = n(6632);
      const r = (0, _.withIntl)((e => {
        let {
          children: i,
          to: n = "#",
          alt: l = "",
          autoBlank: r = !1,
          onClick: d = (() => {}),
          focused: p = !1,
          ...m
        } = e;
        const u = (0, s.useRef)(null),
          k = (0, _.useIntl)(),
          f = !/^(https?|mailto):/i.test(n),
          g = /^#/.test(n),
          v = m?.target ?? (r ? "_blank" : "_self");
        let {
          ...b
        } = m, y = "";
        if ("aria-label" in b && b["aria-label"] && (y = "_blank" === v ? `${b["aria-label"]} ${k.formatMessage(a.aria_label_open_new_window)}` : b["aria-label"]), (0, s.useEffect)((() => {
            p && u?.current && u.current.focus()
          }), [u?.current, p]), g) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${n.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), d && d(e)
          };
          return (0, t.jsxs)("a", {
            title: l,
            href: n,
            onClick: e,
            ...b,
            "aria-label": y,
            ref: u,
            children: [i, "_blank" === v && !y && (0, t.jsx)("span", {
              className: c,
              children: k.formatMessage(a.aria_label_open_new_window)
            })]
          })
        }
        if (f) return (0, t.jsxs)(o.NavLink, {
          title: l,
          to: n,
          onClick: d,
          ...b,
          "aria-label": y,
          ref: u,
          children: [i, "_blank" === v && !y && (0, t.jsx)("span", {
            className: c,
            children: k.formatMessage(a.aria_label_open_new_window)
          })]
        });
        const h = Object.keys(b).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, i) => ({
          ...e,
          [i]: m[i]
        })), {});
        return "function" == typeof h?.className && delete h.className, (0, t.jsxs)("a", {
          href: n,
          title: l,
          onClick: d,
          target: v,
          ...h,
          "aria-label": y,
          ref: u,
          children: [i, "_blank" === v && !y && (0, t.jsx)("span", {
            className: c,
            children: k.formatMessage(a.aria_label_open_new_window)
          })]
        })
      }), l);
      var d = n(3902),
        p = n(3496),
        m = n(1499),
        u = n(470),
        k = n(582);
      const f = {
          embed: "rockstargames-modules-core-videoplayerb7696fe4bc425dfd901e2fd42d959929",
          details: "rockstargames-modules-core-videoplayera7782c0e7788cedaa96f498b60db5695",
          top: "rockstargames-modules-core-videoplayerdab03112635854da68f0bff971acb0e1"
        },
        g = (0, _.withIntl)((e => {
          let {
            autoplay: i = !0,
            resolution: n = "_auto",
            videoId: s,
            videoChangeCallback: _,
            titleCrop: l
          } = e;
          const {
            loading: a,
            video: o
          } = (0, k.zY)({
            id: s
          });
          return !o || a ? (0, t.jsx)(m.A, {
            hero: !0,
            titleCrop: l,
            children: (0, t.jsx)(p.A, {})
          }) : (0, t.jsxs)("section", {
            className: f.marquee,
            children: [(0, t.jsx)("div", {
              className: f.embed,
              children: (0, t.jsx)(u.A, {
                id: o.id,
                context: "site",
                autoplay: i,
                resolution: n,
                wrapper: !1,
                videoChangeCallback: _
              })
            }), (0, t.jsxs)("div", {
              className: f.details,
              children: [(0, t.jsxs)("div", {
                className: f.top,
                children: [(0, t.jsx)("h5", {
                  children: (0, t.jsx)(r, {
                    to: `/videos?type=game&gameId=${o?.game?.sku_id??o.game.id}`,
                    style: {
                      pointerEvents: o?.youtubeOnly ? "none" : "auto"
                    },
                    children: o.game.title
                  })
                }), (0, t.jsx)("time", {
                  dateTime: o.created,
                  children: o.createdFormatted
                })]
              }), (0, t.jsx)("h2", {
                children: o.title
              }), (0, t.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o.description
                }
              })]
            })]
          })
        }), d.intlMessages);
      var v = n(4252),
        b = n.n(v),
        y = n(8407),
        h = n(207),
        w = n(6091),
        C = n(2756),
        N = n(9261);
      const j = {
          pillBtn: "rockstargames-modules-core-videoplayerf2a453d224393eff64143a2f6c549f8d",
          selected: "rockstargames-modules-core-videoplayeref9f11e69d81520d23af744fee58a1bf",
          itemContainer: "rockstargames-modules-core-videoplayerfbd1499c6225bbe04f3a6efc710124f4",
          playIcon: "rockstargames-modules-core-videoplayerd549fde5ec781c18a6066b7f4258f2cc",
          thumbnail: "rockstargames-modules-core-videoplayerf8e820c90548c2466c73c21a46cfafd7",
          active: "rockstargames-modules-core-videoplayerc609535ec0c949fc631b8d5bf62689f9",
          iconAndThumbnail: "rockstargames-modules-core-videoplayera18bf34a29260f3744ed9db5b0b62fa6",
          playIconContainer: "rockstargames-modules-core-videoplayere89f03b8ec58ddc87c17605b3176b6a1",
          activeVideoTextIndicator: "rockstargames-modules-core-videoplayerb43a390d461ee524297a88a92d487d61",
          textContainer: "rockstargames-modules-core-videoplayereb90e7323f5e1eeeec6ccfc9d0d83e06"
        },
        P = (0, s.forwardRef)(((e, i) => {
          let {
            title: n,
            thumbnail: s,
            active: l = !1,
            isModal: a = !1,
            onClick: o = (() => {})
          } = e;
          const {
            formatMessage: c
          } = (0, _.useIntl)();
          return (0, t.jsxs)("button", {
            ref: i,
            className: [j.itemContainer, l ? j.active : ""].filter((e => e)).join(" "),
            onClick: o,
            type: "button",
            "data-context": a ? "modal" : "standardPage",
            children: [(0, t.jsxs)("div", {
              className: j.iconAndThumbnail,
              children: [(0, t.jsx)("div", {
                className: j.playIconContainer,
                children: (0, t.jsx)(N.A, {
                  className: j.playIcon
                })
              }), (0, t.jsx)("div", {
                className: j.thumbnail,
                style: {
                  "--background-image": `url(${s})`
                },
                children: l && (0, t.jsx)("span", {
                  className: j.activeVideoTextIndicator,
                  children: c(k.DZ.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, t.jsx)("div", {
              className: j.textContainer,
              children: (0, t.jsx)("h3", {
                children: n
              })
            })]
          })
        }));
      P.displayName = "VideoPlaylistItem";
      const S = P,
        x = {
          pillBtn: "rockstargames-modules-core-videoplayerc80e29c909e0c6200eb7fc6b2b81f9be",
          selected: "rockstargames-modules-core-videoplayerd5ccc264da21ea239af29cad41774242",
          playlist: "rockstargames-modules-core-videoplayerecd786c5d10735ecd6747d52ee0bf5fd",
          videos: "rockstargames-modules-core-videoplayerc711e423f5b3481c7183eb5b277ef06a",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayerf1bc55e95c5eb5b51f6e987e538a3efa",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerb1b0ceaedb428f958c7eb082016ad144"
        },
        I = e => {
          let {
            title: i,
            activeVideoId: n,
            videos: _ = [],
            isModal: l = !1,
            onVideoItemClick: a = (() => {})
          } = e;
          const c = (0, o.useLocation)(),
            {
              track: r
            } = (0, h.useGtmTrack)(),
            d = (0, C.useLocale)(),
            p = (0, s.useRef)(null),
            m = (0, s.createRef)(),
            [u, k] = (0, s.useState)(null),
            [f, g] = (0, s.useState)(n),
            [v, b] = (0, s.useState)(!0),
            [y, w] = (0, s.useState)(!1),
            N = (0, s.useCallback)(((e, i) => () => {
              a && a(e, i), g(e), r({
                event: "video_thumbnail_click",
                link_url: `${c.pathname}?video=${e}`,
                video_id: e,
                video_title: _[i].title,
                video_type: _[i].groupType,
                video_language: d,
                element_placement: "video playlist"
              })
            }), [a, g]);
          return (0, s.useEffect)((() => {
            if (!u) return;
            const e = u.offsetTop - p.current.offsetTop;
            p.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }), [u, p]), (0, s.useEffect)((() => {
            k(m?.current)
          }), [m]), (0, s.useEffect)((() => {
            g(n)
          }), [n]), (0, t.jsxs)("section", {
            className: x.playlist,
            "data-context": l ? "modal" : "standardPage",
            children: [(0, t.jsx)("h4", {
              children: i
            }), (0, t.jsx)("div", {
              ref: p,
              className: [x.videos, v ? "" : x.userNotScrolledToTopOfList, y ? "" : x.userNotScrolledToBottomOfList].filter((e => e)).join(" "),
              onScroll: e => {
                let {
                  target: {
                    scrollTop: i,
                    scrollHeight: n,
                    clientHeight: s
                  }
                } = e;
                0 === i ? b(!0) : i + s === n ? w(!0) : (b(!1), w(!1))
              },
              children: _.map(((e, i) => (0, t.jsx)(S, {
                ref: e.id === f ? m : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === f,
                onClick: N(e.id, i),
                isModal: l
              }, e.id)))
            })]
          })
        },
        A = {
          videoWithPlaylistContainer: "rockstargames-modules-core-videoplayerac04eb44d3988982a1d3be9f94414cbc"
        },
        z = (0, _.withIntl)((e => {
          let {
            className: i,
            locale: n,
            id: _,
            tagIds: l = [],
            playlistTitle: a,
            groupTypes: c = ["trailer", "feature"],
            autoplay: r = !0,
            currentVideoId: d,
            isModal: m = !1
          } = e;
          const {
            track: k
          } = (0, h.useGtmTrack)(), f = {
            groupTypes: c,
            tagIds: l,
            locale: n
          }, [g, v] = (0, o.useSearchParams)(), C = Number(g.get("start") ?? 0), [N, j] = (0, s.useState)(0), {
            loading: P,
            data: S
          } = (0, y.useQuery)(w.videos, {
            variables: f
          }), x = S?.videos?.results;
          return (0, s.useEffect)((() => {
            const e = g.get("video");
            if (!x || !e) return;
            const i = b().findIndex(x, (i => {
              let {
                id: n
              } = i;
              return n === e
            })); - 1 !== i ? (j(i), m && k({
              event: "trackPageview"
            })) : v({
              video: x[0].id
            })
          }), [g.get("video"), x]), (0, s.useEffect)((() => {
            const e = g.get("video");
            if (x && (d || e)) {
              const i = x.find((i => {
                  let {
                    id: n
                  } = i;
                  return e ? n === e : n === d
                })),
                n = x.indexOf(i);
              i && n && N !== n && j(n)
            }
          }), [x]), !P && S && x ? (0, t.jsxs)("section", {
            className: [A.videoWithPlaylistContainer, i ?? ""].filter((e => e)).join(" "),
            id: _ ?? "",
            "data-context": m ? "modal" : "standardPage",
            children: [(0, t.jsx)(u.A, {
              id: x[N]?.id,
              context: "site",
              autoplay: r,
              wrapper: !1,
              start: C,
              onVideoComplete: () => {
                if (m) v({
                  video: x[N + 1 < x?.length ? N + 1 : 0].id
                });
                else {
                  const e = N + 1;
                  e < x?.length && j(e)
                }
              },
              locale: n,
              isModal: m
            }), (0, t.jsx)(I, {
              activeVideoId: x[N]?.id,
              title: a,
              videos: x,
              onVideoItemClick: e => {
                if (m) v({
                  video: e
                });
                else {
                  const i = x.findIndex((i => i.id === e)); - 1 !== i ? j(i) : console.warn("Video ID not found in results.")
                }
              },
              isModal: m
            })]
          }) : (0, t.jsx)(p.A, {})
        }), d.intlMessages),
        M = u.A
    },
    6091: e => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "videos"
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
                value: "tagIds"
              }
            },
            type: {
              kind: "ListType",
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
                value: "groupTypes"
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
                  value: "tagIds"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagIds"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "100"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "groupTypes"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "groupTypes"
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
                        value: "title"
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
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groupType"
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
          end: 304
        }
      };

      function n(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && i.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, i)
        }))
      }
      i.loc.source = {
        body: "query videos($locale: String!, $tagIds: [Int], $groupTypes: [String]) {\n    videos(\n        locale: $locale\n        tagIds: $tagIds\n        limit: 100\n        groupTypes: $groupTypes\n    ) {\n        results {\n            title\n            id\n            screencap\n            groupType\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function _(e, i) {
        for (var n = 0; n < e.definitions.length; n++) {
          var s = e.definitions[n];
          if (s.name && s.name.value == i) return s
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          n(e, i), s[e.name.value] = i
        }
      })), e.exports = i, e.exports.videos = function(e, i) {
        var n = {
          kind: e.kind,
          definitions: [_(e, i)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var l = s[i] || new Set,
          a = new Set,
          o = new Set;
        for (l.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            a.has(e) || (a.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return a.forEach((function(i) {
          var s = _(e, i);
          s && n.definitions.push(s)
        })), n
      }(i, "videos")
    }
  }
]);