! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "b7577469-b8d7-408d-b9fb-7ec90de2e85a", e._sentryDebugIdIdentifier = "sentry-dbid-b7577469-b8d7-408d-b9fb-7ec90de2e85a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [464], {
    1464: (e, s, i) => {
      "use strict";
      i.r(s), i.d(s, {
        default: () => be
      });
      var a = i(4410),
        t = i(1403),
        r = i(2756),
        n = i(6717);
      const c = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        o = (0, n.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var l = i(9779);
      const _ = "rockstargames-sites-gta-trilogyff481c537a56a6fcdb1be85dfbc8944e";
      var m = i(6632);
      const d = (0, n.withIntl)((e => {
        let {
          children: s,
          to: i = "#",
          alt: a = "",
          autoBlank: r = !1,
          onClick: c = (() => {}),
          focused: d = !1,
          ...g
        } = e;
        const f = (0, t.useRef)(null),
          p = (0, n.useIntl)(),
          k = !/^(https?|mailto):/i.test(i),
          u = /^#/.test(i),
          b = g?.target ?? (r ? "_blank" : "_self");
        let {
          ...v
        } = g, h = "";
        if ("aria-label" in v && v["aria-label"] && (h = "_blank" === b ? `${v["aria-label"]} ${p.formatMessage(o.aria_label_open_new_window)}` : v["aria-label"]), (0, t.useEffect)((() => {
            d && f?.current && f.current.focus()
          }), [f?.current, d]), u) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${i.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), c && c(e)
          };
          return (0, m.jsxs)("a", {
            title: a,
            href: i,
            onClick: e,
            ...v,
            "aria-label": h,
            ref: f,
            children: [s, "_blank" === b && !h && (0, m.jsx)("span", {
              className: _,
              children: p.formatMessage(o.aria_label_open_new_window)
            })]
          })
        }
        if (k) return (0, m.jsxs)(l.NavLink, {
          title: a,
          to: i,
          onClick: c,
          ...v,
          "aria-label": h,
          ref: f,
          children: [s, "_blank" === b && !h && (0, m.jsx)("span", {
            className: _,
            children: p.formatMessage(o.aria_label_open_new_window)
          })]
        });
        const x = Object.keys(v).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, s) => ({
          ...e,
          [s]: g[s]
        })), {});
        return "function" == typeof x?.className && delete x.className, (0, m.jsxs)("a", {
          href: i,
          title: a,
          onClick: c,
          target: b,
          ...x,
          "aria-label": h,
          ref: f,
          children: [s, "_blank" === b && !h && (0, m.jsx)("span", {
            className: _,
            children: p.formatMessage(o.aria_label_open_new_window)
          })]
        })
      }), c);
      var g = i(8407);
      const f = (0, r.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [i] = (0, t.useState)(""), a = (0, l.useNavigate)(), r = (0, g.useMutateState)();
          return (0, m.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-gta-trilogyb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), r({
                navOpen: !1
              }), document.activeElement?.blur(), a(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, m.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, m.jsx)("input", {
              autoComplete: "off",
              defaultValue: i,
              enterKeyHint: "search",
              name: "q",
              placeholder: s("Search Rockstar Games")
            })]
          })
        })),
        p = (0, r.withTranslations)((e => {
          let {
            error: s,
            t: i,
            domain: a = ""
          } = e;
          console.error({
            error: s
          });
          let r = s?.message ?? i("error-404-new");
          r = i("error-404-new");
          const n = s?.code ?? 398,
            c = (0, t.useRef)(null);
          return (0, t.useEffect)((() => {
            c && c?.current && c.current.focus()
          }), [c]), (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogyd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, m.jsx)("h3", {
              tabIndex: -1,
              ref: c,
              children: `${r} (${n})`
            }), (0, m.jsx)(d, {
              to: "/",
              children: i("Home")
            }), "clr" !== a && (0, m.jsx)(f, {})]
          })
        })),
        k = e => {
          let {
            gameSlug: s
          } = e;
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-trilogya590c78396ad12a0134e4fe83d46d6c5",
            style: {
              "--background-image": `url(${i(2503)(`./FOB_${s}.jpg`)})`
            }
          })
        },
        u = () => (0, m.jsxs)("div", {
          className: "rockstargames-sites-gta-trilogyb3f2c71a5c27e002148765bd45a8f945",
          children: [(0, m.jsx)(k, {
            gameSlug: "VC"
          }), (0, m.jsx)(k, {
            gameSlug: "III"
          }), (0, m.jsx)(k, {
            gameSlug: "SA"
          })]
        });
      var b = i(6398);
      const v = e => {
          let {
            variant: s = "full",
            className: a = "",
            style: t = {},
            alt: r = ""
          } = e;
          return (0, m.jsx)("img", {
            style: t,
            className: (0, b.classList)("rockstargames-sites-gta-trilogye713aa2e2995a6755fff195529f21156", a?.split(" ")),
            src: i(2144)(`./${s}-logo.svg`),
            alt: r
          })
        },
        h = e => {
          let {
            href: s,
            children: i,
            ...a
          } = e;
          return s ? (0, m.jsx)("a", {
            href: s,
            ...a,
            children: i
          }) : (0, m.jsx)("button", {
            ...a,
            children: i
          })
        },
        x = e => {
          let {
            style: s,
            children: i,
            ...a
          } = e;
          return (0, m.jsx)(h, {
            style: s,
            ...a,
            children: i
          })
        },
        y = (0, r.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, m.jsx)(x, {
            href: "https://store.rockstargames.com/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition",
            target: "_blank",
            className: "rockstargames-sites-gta-trilogyb6ec590bc1cb44bd8dd2cfe8f3c5c8ac",
            children: s("trilogy.pre-order-now")
          })
        })),
        w = "rockstargames-sites-gta-trilogya0b342d557fa7f9e2c7aa7701c8150e7",
        j = (0, r.withTranslations)((e => {
          let {
            logoVariant: s = "full",
            className: a = "",
            style: t = {},
            t: r
          } = e;
          return (0, m.jsx)("div", {
            className: (0, b.classList)("rockstargames-sites-gta-trilogye06ad1179cdbca03d9b8c92489d722f5", a?.split(" ")),
            style: t,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-trilogya7fb7c7a032b27d60edb1c63d750d256",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogye1a17b9ee6face3d3a9c76913e25d228",
                children: [(0, m.jsx)(v, {
                  className: "rockstargames-sites-gta-trilogyc1acc35818d3bcf2b1bef14f37e21788",
                  variant: s,
                  alt: "Grand Theft Auto: The Trilogy - The Definitive Edition"
                }), (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-trilogye7e37cac02926147260e4be917570b65",
                  children: r("trilogy.release-date")
                })]
              }), (0, m.jsx)(y, {}), (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogyd17090820a2431a292835621e09a5d59",
                children: [(0, m.jsx)("img", {
                  className: w,
                  src: i(9683),
                  alt: "PS5|PS4"
                }), (0, m.jsx)("img", {
                  className: w,
                  src: i(7573),
                  alt: "XBOX SERIES X|S"
                }), (0, m.jsx)("img", {
                  className: w,
                  src: i(6146),
                  alt: "XBOX ONE"
                }), (0, m.jsx)("img", {
                  className: w,
                  src: i(2401),
                  alt: "Nintendo Switch"
                }), (0, m.jsx)("img", {
                  className: w,
                  src: i(7866),
                  alt: "PC"
                })]
              })]
            })
          })
        })),
        z = () => (0, m.jsxs)("section", {
          id: "intro",
          className: "rockstargames-sites-gta-trilogyf6018228cfb05f954ab28bd5ce03108f",
          children: [(0, m.jsx)("div", {
            className: "rockstargames-sites-gta-trilogyf78809f3a6f868ddbb69bf0dc94f8608",
            children: (0, m.jsx)(u, {})
          }), (0, m.jsx)(j, {
            className: "rockstargames-sites-gta-trilogyc0e6ab6e0547bff20fa5beb941851297",
            logoVariant: "full"
          })]
        });
      var N = i(1879),
        S = i.n(N);
      const C = e => {
          let {
            children: s,
            className: i,
            ...a
          } = e;
          return (0, m.jsx)("section", {
            className: (0, b.classList)("rockstargames-sites-gta-trilogyc4b62be59154f67f28815d02813c6b78", i?.split(" ")),
            ...a,
            children: s
          })
        },
        T = () => (0, m.jsx)(C, {
          id: "trailer",
          children: (0, m.jsx)(S(), {
            id: "12237"
          })
        }),
        I = (0, r.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, m.jsx)(C, {
            id: "info",
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-trilogyc2632fd95330b74d5dd3fb784ed24b73",
              children: [(0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogye7f8ed9a18eb203787dc2c282f755da7",
                children: [(0, m.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: s("trilogy.info.title")
                  }
                }), (0, m.jsx)("p", {
                  children: s("trilogy.info.body")
                })]
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogyad9e8c3af7501dbae1538c50aa477734",
                children: [(0, m.jsx)("img", {
                  src: i(5994),
                  className: "rockstargames-sites-gta-trilogyed7288ec5cd27db1bc123f2fc9a6d951"
                }), (0, m.jsx)("img", {
                  src: i(5893),
                  className: "rockstargames-sites-gta-trilogyf65984b0b5e380f2679469d5dc374e18"
                }), (0, m.jsx)("img", {
                  src: i(8024),
                  className: "rockstargames-sites-gta-trilogyf57363f71e1cdcb73e866e745d2d8a37"
                })]
              })]
            })
          })
        }));
      var P = i(9269),
        D = i(1902);
      const M = (0, n.defineMessages)({
          sites_gta_trilogy_enhancements_1_item_6: {
            id: "sites_gta_trilogy_enhancements_1_item_6",
            defaultMessage: "Plus new Rockstar Games Accomplishments for members"
          }
        }),
        A = e => {
          let {
            src: s,
            children: i,
            style: a = {},
            className: t = ""
          } = e;
          return (0, m.jsxs)("div", {
            className: (0, b.classList)("rockstargames-sites-gta-trilogyd4701b70db493e5c28da87a2b72a3de5", t?.split(" ")),
            style: a,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyeea77eac0b39a8921982484cfa0f198d",
              children: (0, m.jsx)("img", {
                src: s
              })
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyc187feb573f88c0ef5bb9326fd3f268b",
              children: i
            })]
          })
        },
        F = "rockstargames-sites-gta-trilogyc1a19a201a67e5b2fb26247e2661850e",
        E = "rockstargames-sites-gta-trilogyd54fa7627079eedbb51bd51370499ee8",
        O = e => {
          let {
            t: s
          } = e;
          const {
            formatMessage: a
          } = (0, n.useIntl)();
          return (0, m.jsxs)(A, {
            src: i(733),
            className: F,
            children: [(0, m.jsx)("div", {
              className: E,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.1.title")
              }
            }), (0, m.jsxs)("ul", {
              children: [(0, m.jsx)("li", {
                children: s("trilogy.enhancements.1.li.1")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.1.li.2")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.1.li.3")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.1.li.4")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.1.li.5")
              }), (0, m.jsx)("li", {
                children: a(M.sites_gta_trilogy_enhancements_1_item_6)
              })]
            })]
          })
        },
        R = e => {
          let {
            t: s
          } = e;
          return (0, m.jsxs)(A, {
            src: i(1474),
            className: F,
            children: [(0, m.jsx)("div", {
              className: E,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.2.title")
              }
            }), (0, m.jsxs)("ul", {
              children: [(0, m.jsx)("li", {
                children: s("trilogy.enhancements.2.li.1")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.2.li.2")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.2.li.3")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.2.li.4")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.2.li.5")
              })]
            })]
          })
        },
        V = e => {
          let {
            t: s
          } = e;
          return (0, m.jsxs)(A, {
            src: i(4143),
            className: F,
            children: [(0, m.jsx)("div", {
              className: E,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.3.title")
              }
            }), (0, m.jsxs)("ul", {
              children: [(0, m.jsx)("li", {
                children: s("trilogy.enhancements.3.li.2")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.3.li.3")
              }), (0, m.jsx)("li", {
                children: s("trilogy.enhancements.3.li.4")
              })]
            })]
          })
        },
        L = (0, r.withMediaBasedProps)((0, r.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [i, a] = (0, t.useState)(1), [r, n] = (0, t.useState)(16), c = () => {
            const e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            a((e => e < 600 ? 1 : e >= 600 && e < 1024 ? 1.25 : e >= 1024 && e < 1280 ? 1.5 : e >= 1280 && e < 1440 ? 2 : e >= 1440 && e < 1920 ? 2.5 : 3)(e)), n((e => e < 768 ? 16 : e >= 768 && e < 1024 ? 18 : e >= 1024 && e < 1920 ? 20 : 22)(e))
          };
          return (0, t.useEffect)((() => (c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c)))), (0, m.jsxs)(C, {
            id: "enhancements",
            className: "rockstargames-sites-gta-trilogyabb29043b941172bcd96e548321d6ffe",
            children: [(0, m.jsx)("h3", {
              children: s("trilogy.nav.enhancements")
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyef7774d3a3f0808310323089434e4c9c",
              children: (0, m.jsxs)(D.RC, {
                slidesPerView: i,
                modules: [P.dK],
                pagination: {
                  clickable: !0
                },
                spaceBetween: r,
                children: [(0, m.jsx)(D.qr, {
                  children: (0, m.jsx)(O, {
                    t: s
                  })
                }), (0, m.jsx)(D.qr, {
                  children: (0, m.jsx)(R, {
                    t: s
                  })
                }), (0, m.jsx)(D.qr, {
                  children: (0, m.jsx)(V, {
                    t: s
                  })
                })]
              })
            })]
          })
        })));
      var q = i(908),
        $ = i(280);
      const W = e => {
          const s = window.innerWidth,
            i = s < 1440 ? window.innerHeight - 60 : window.innerHeight,
            a = s > i ? 1 : 2,
            t = s > i ? s : i * (s > i ? 1 : 1.3);
          let r, n, c;
          window.innerWidth < 768 ? (r = s, n = i, c = 8) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (r = s, n = i, c = 9) : window.innerWidth >= 1024 && window.innerWidth < 1920 ? (r = .9 * s, n = .9 * i, c = 10) : window.innerWidth >= 1920 && (r = .75 * s, n = .75 * i, c = 22);
          const o = 2 * r + c,
            l = e + i,
            _ = .25 * t,
            m = .65 * t,
            d = .8 * t;
          return {
            sizes: {
              vw: s,
              vh: i,
              initialMiddleWidth: s,
              finalColumnWidth: (s - 2 * c) / 3,
              gameDescriptionWidth: r,
              gameDescriptionHeight: n,
              imageGridGap: c,
              transitionDistance: o
            },
            triggers: {
              endIntro: e,
              startGames: l,
              gamesTrigger1: _,
              gamesTrigger2: m,
              gamesTrigger3: d,
              introTriggers: [e, l, l + _, l + m],
              introTriggers2: [e, l, l + _, l + m, l + d, l + o * a],
              FadeFOBTriggers: [l + _, l + m],
              FadeFOBTriggersText: [l + _ + .2 * t, l + m],
              FadeFOBTriggersGirl: [l + _ + .05 * t, l + m - .2 * t]
            }
          }
        },
        G = e => {
          let {
            gameSlug: s,
            children: a,
            style: r,
            triggers: n
          } = e;
          const {
            scrollY: c
          } = (0, $.useScroll)(), {
            FadeFOBTriggers: o,
            FadeFOBTriggersText: l,
            FadeFOBTriggersGirl: _
          } = n, [d, g] = (0, t.useState)(null), [f, p] = (0, t.useState)(null), [k, u] = (0, t.useState)(null), [b, h] = (0, t.useState)(null);
          (0, t.useEffect)((() => {
            const e = () => {
              let e, s, i, a;
              window.innerWidth < 768 ? (e = .3, s = 1.1 * e, i = .05, a = .1) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (e = .22, s = .8 * e, i = .05, a = .2) : window.innerWidth >= 1024 && window.innerWidth < 1920 || window.innerWidth >= 1920 && window.innerWidth < 2560 ? (e = .15, s = .6 * e, i = .05, a = .2) : window.innerWidth >= 2560 && (e = .11, s = .6 * e, i = .1, a = .2), g(e), p(s), u(i), h(a)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []);
          const x = (0, $.useTransform)(c, o, [window.innerWidth * d, window.innerWidth * f]),
            y = (0, $.useTransform)(c, o, [window.innerHeight * k, window.innerHeight * b]),
            w = (0, $.useTransform)(c, _, [1, 0]),
            j = (0, $.useTransform)(c, l, [0, 1]);
          return n ? (0, m.jsxs)($.motion.div, {
            className: "rockstargames-sites-gta-trilogyf4a72102ceddef029be930bb493b8d88",
            "data-game": s,
            style: r,
            children: [(0, m.jsx)($.motion.div, {
              className: "rockstargames-sites-gta-trilogyc35094365e57ebef18fcf1fbd503ec51",
              style: {
                opacity: j
              },
              children: a
            }), (0, m.jsx)($.motion.img, {
              src: i(2745)(`./${s}_Girl.png`),
              className: "rockstargames-sites-gta-trilogyd3c78232d1c0927ec585487469a7ff98",
              style: {
                opacity: w
              }
            }), (0, m.jsx)($.motion.div, {
              className: "rockstargames-sites-gta-trilogybc67a77bd0be6d9e4963002edc9eb1c9",
              style: {
                width: x,
                paddingBottom: y
              },
              children: (0, m.jsx)(v, {
                variant: s
              })
            })]
          }) : null
        },
        H = e => {
          let {
            gameSlug: s,
            children: i,
            triggers: a,
            sizes: t
          } = e;
          const {
            scrollY: r
          } = (0, $.useScroll)(), {
            startGames: n,
            gamesTrigger1: c,
            gamesTrigger2: o,
            introTriggers: l,
            introTriggers2: _
          } = a, {
            vh: d,
            finalColumnWidth: g,
            gameDescriptionWidth: f,
            gameDescriptionHeight: p,
            imageGridGap: k,
            transitionDistance: u
          } = t, b = (0, $.useTransform)(r, l, [g, g, g, f]), v = (0, $.useTransform)(r, _, [0, 0, 0, (d - p) / 2, (d - p) / 2, (d - p) / 2]), h = (0, $.useTransform)(r, _, [0, 0, 0, f + k, f + k, f - u]), x = (0, $.useTransform)(r, [n, n + 1, n + c, n + o], [d, d, d, p]);
          return (0, m.jsx)(G, {
            gameSlug: s,
            style: {
              x: h,
              y: v,
              width: b,
              height: x
            },
            triggers: a,
            sizes: t,
            children: i
          })
        },
        U = e => {
          let {
            t: s,
            triggers: i,
            sizes: a
          } = e;
          const {
            scrollY: t
          } = (0, $.useScroll)(), {
            startGames: r,
            gamesTrigger1: n,
            gamesTrigger2: c,
            introTriggers: o,
            introTriggers2: l
          } = i, {
            vh: _,
            initialMiddleWidth: d,
            finalColumnWidth: g,
            gameDescriptionWidth: f,
            gameDescriptionHeight: p,
            imageGridGap: k,
            transitionDistance: u
          } = a, b = (0, $.useTransform)(t, o, [d, g, g, f]), v = (0, $.useTransform)(t, l, [0, 0, 0, (_ - p) / 2, (_ - p) / 2, (_ - p) / 2]), h = (0, $.useTransform)(t, l, [0, 0, 0, f + k, f + k, f - u]), x = (0, $.useTransform)(t, [r, r + 1, r + n, r + c], [_, _, _, p]);
          return (0, m.jsxs)(G, {
            gameSlug: "VC",
            style: {
              x: h,
              y: v,
              width: b,
              height: x
            },
            triggers: i,
            sizes: a,
            children: [(0, m.jsx)("h3", {
              children: s("trilogy.games.vc.title")
            }), (0, m.jsx)("p", {
              children: s("trilogy.games.vc.body")
            })]
          })
        },
        B = e => {
          let {
            t: s,
            triggers: i,
            sizes: a
          } = e;
          return (0, m.jsxs)(H, {
            gameSlug: "III",
            triggers: i,
            sizes: a,
            children: [(0, m.jsx)("h3", {
              children: s("trilogy.games.iii.title")
            }), (0, m.jsx)("p", {
              children: s("trilogy.games.iii.body")
            })]
          })
        },
        K = e => {
          let {
            t: s,
            triggers: i,
            sizes: a
          } = e;
          return (0, m.jsxs)(H, {
            gameSlug: "SA",
            triggers: i,
            sizes: a,
            children: [(0, m.jsx)("h3", {
              children: s("trilogy.games.sc.title")
            }), (0, m.jsx)("p", {
              children: s("trilogy.games.sc.body")
            })]
          })
        },
        Y = (0, r.withTranslations)((e => {
          let {
            t: s,
            startDistance: i
          } = e;
          const [a, r] = (0, t.useState)(W(i));
          return (0, t.useEffect)((() => {
            const e = () => {
              r(W(i))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [i]), i ? (0, m.jsxs)($.motion.div, {
            className: "rockstargames-sites-gta-trilogyb27c2ebcfe15c41df0c992d67fc15aed",
            children: [(0, m.jsx)(B, {
              t: s,
              triggers: a?.triggers,
              sizes: a?.sizes
            }), (0, m.jsx)(U, {
              t: s,
              triggers: a?.triggers,
              sizes: a?.sizes
            }), (0, m.jsx)(K, {
              t: s,
              triggers: a?.triggers,
              sizes: a?.sizes
            })]
          }) : null
        })),
        Z = () => {
          const e = (0, t.useRef)(),
            [s, i] = (0, t.useState)(parseInt(localStorage?.getItem("startGames")) ?? null),
            a = (0, q.useIntersectionObserver)(e, {
              threshold: [0]
            }),
            [r, n] = (0, t.useState)(0),
            c = e => {
              i(e), localStorage.setItem("startGames", e)
            };
          return (0, t.useEffect)((() => {
            const i = () => {
              n(window.pageYOffset), a?.isIntersecting && !s && (c(window.pageYOffset > r ? window.pageYOffset : window.pageYOffset - e.current.offsetHeight - window.innerHeight), window.removeEventListener("scroll", i))
            };
            return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
          }), [r, s]), (0, t.useEffect)((() => {
            const s = () => {
              if (c(null), a?.isIntersecting) {
                const s = window.pageYOffset + e.current.getBoundingClientRect().top - window.innerHeight;
                c(s)
              }
            };
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
          }), [a]), (0, m.jsx)("section", {
            id: "games",
            ref: e,
            className: "rockstargames-sites-gta-trilogye931a8ec0b56a01e03bfbdd0c1b504e3",
            children: (0, m.jsx)(Y, {
              startDistance: s
            })
          })
        },
        X = "rockstargames-sites-gta-trilogybaf0910838232b08c92edcb6a981d263",
        J = "rockstargames-sites-gta-trilogyc12b85147ab877bdd1e264eae95885ec",
        Q = "rockstargames-sites-gta-trilogyb9c2f6d143c919d269e79c918c9119bd",
        ee = "rockstargames-sites-gta-trilogydb25c893ecdb3316b14c93891cbd4296",
        se = "rockstargames-sites-gta-trilogyd0a69bb831b4e0786451f3fb0a98caf5",
        ie = "rockstargames-sites-gta-trilogyd557c3260fa1478a9ab89ebdcf82b84b",
        ae = (0, r.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, m.jsxs)(C, {
            id: "media",
            className: "rockstargames-sites-gta-trilogyba94f48290f0eba9b255628fb73650af",
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-gta-trilogydd750bad3aae896ea003606d8b71367d",
              children: (0, m.jsx)("h3", {
                children: s("trilogy.beforeafter-title")
              })
            }), (0, m.jsxs)("div", {
              className: `${X} ${J}`,
              children: [(0, m.jsx)("img", {
                src: i(4688)
              }), (0, m.jsx)("div", {
                className: se,
                children: (0, m.jsx)(v, {
                  className: ie,
                  variant: "III"
                })
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${Q}`,
              children: [(0, m.jsx)("img", {
                src: i(1327)
              }), (0, m.jsx)("img", {
                src: i(4946)
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${ee}`,
              children: [(0, m.jsx)("img", {
                src: i(2993)
              }), (0, m.jsx)("img", {
                src: i(4948)
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${J}`,
              children: [(0, m.jsx)("img", {
                src: i(1920)
              }), (0, m.jsx)("div", {
                className: se,
                children: (0, m.jsx)(v, {
                  className: ie,
                  variant: "VC"
                })
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} rockstargames-sites-gta-trilogycc94677a83f454af7a5022a362878d7d`,
              children: [(0, m.jsx)("img", {
                src: i(6879)
              }), (0, m.jsx)("img", {
                src: i(6882)
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${ee}`,
              children: [(0, m.jsx)("img", {
                src: i(3441)
              }), (0, m.jsx)("img", {
                src: i(4916)
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${J}`,
              children: [(0, m.jsx)("img", {
                src: i(1853)
              }), (0, m.jsx)("div", {
                className: se,
                children: (0, m.jsx)(v, {
                  className: ie,
                  variant: "SA"
                })
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${Q}`,
              children: [(0, m.jsx)("img", {
                src: i(2898)
              }), (0, m.jsx)("img", {
                src: i(9279)
              })]
            }), (0, m.jsxs)("div", {
              className: `${X} ${ee}`,
              children: [(0, m.jsx)("img", {
                src: i(2900)
              }), (0, m.jsx)("img", {
                src: i(945)
              })]
            })]
          })
        }));
      var te = i(300),
        re = i(207);
      class ne extends t.Component {
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
          return this?.state?.error?.message ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, m.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, m.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ce = function(e) {
          let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(i) {
            return (0, m.jsx)(ne, {
              header: s,
              children: (0, m.jsx)(e, {
                ...i
              })
            })
          }
        },
        oe = {
          rating: "rockstargames-sites-gta-trilogya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-gta-trilogycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-gta-trilogyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-gta-trilogyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        le = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var _e = i(5913);
      const me = void 0 !== _e.GameData ? _e.GameData : GameDataDefault;
      (0, r.importAll)(i(4905));
      const de = ce((0, n.withIntl)((e => {
          let {
            descriptors: s = null,
            footer: a = null,
            href: c,
            img: o = null,
            titleSlug: l = null,
            style: _ = {},
            className: f
          } = e;
          const [p, k] = (0, t.useState)(!1), {
            inView: u
          } = (0, te.Wx)({
            threshold: .6
          }), [b, v] = (0, t.useState)({
            ratingDescriptors: s,
            ratingFooter: a,
            ratingImg: o,
            ratingUrl: c
          }), {
            track: h
          } = (0, re.useGtmTrack)(), x = (0, n.useIntl)(), {
            data: y
          } = (0, g.useQuery)(me, {
            variables: {
              titleSlug: l
            },
            skip: !l
          });
          if ((0, t.useEffect)((() => {
              y && v(y?.game)
            }), [y]), (0, t.useEffect)((() => {
              u && !p && b.img_rating && (h({
                event: "page_section_impression",
                element_placement: "rating"
              }), k(!0))
            }), [u]), !b.ratingImg) return null;
          const w = !!b.ratingDescriptors;
          return (0, m.jsxs)("div", {
            className: [oe.rating, w ? oe.withDescriptors : oe.withOutDescriptors, f || ""].join(" "),
            style: (0, r.safeStyles)(_),
            children: [(0, m.jsx)(d, {
              to: b.ratingUrl,
              target: "_blank",
              children: (0, m.jsx)("img", {
                alt: x.formatMessage(le.components_ratings_link_alt, {
                  rating: (j = b.ratingImg, j.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: i(3983)(`./${b.ratingImg}`)
              })
            }), w && (0, m.jsxs)("div", {
              className: oe.text,
              children: [(0, m.jsx)("p", {
                className: oe.descriptors,
                dangerouslySetInnerHTML: {
                  __html: b?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), b.ratingFooter && (0, m.jsx)("hr", {}), b.ratingFooter && (0, m.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: b.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var j
        }), c)),
        ge = (e, s, i) => {
          const a = e.split(s),
            t = [];
          for (let e = 0; e < a.length; e++) t.push(a[e]), e < a.length - 1 && t.push(i);
          return t
        },
        fe = ce(de),
        pe = (0, r.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogyff81c758ae8f9c1c968caed27bf65d9c",
            children: [(0, m.jsxs)(C, {
              className: "rockstargames-sites-gta-trilogycea07dd04748f0d5a5a5e847dea51d49",
              children: [(0, m.jsx)("div", {
                className: "rockstargames-sites-gta-trilogyad8d2b9a429671ba124f56d8aef0336c",
                children: (0, m.jsx)("img", {
                  src: i(3524)
                })
              }), (0, m.jsx)(j, {
                className: "rockstargames-sites-gta-trilogye3d53937910b56e85b616c18d3fefae2",
                logoVariant: "horizontal"
              })]
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyb42a248ee8b56a330c2c3349b94d10d2",
              children: (0, m.jsxs)(C, {
                children: [(0, m.jsx)(fe, {
                  titleSlug: "GTATrilogy"
                }), (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-trilogyd8ad2b2c61621cb0980b9e3ec08f4445",
                  children: ge(s("trilogy.footer"), "{logo}", (0, m.jsx)("div", {
                    className: "rockstargames-sites-gta-trilogyc6cca253803cc97d8a71219be0247b49",
                    "aria-label": "Rockstar"
                  }, "logoRockstar"))
                })]
              })
            })]
          })
        })),
        ke = () => (0, m.jsxs)("div", {
          className: "rockstargames-sites-gta-trilogyb8cf5407890c35f4d571c2b3cb58647b",
          children: [(0, m.jsx)(z, {}), (0, m.jsx)(T, {}), (0, m.jsx)(I, {}), (0, m.jsx)(L, {}), (0, m.jsx)(Z, {}), (0, m.jsx)(ae, {}), (0, m.jsx)(pe, {})]
        }),
        ue = () => {
          const e = [{
            path: "/",
            element: (0, m.jsx)(ke, {})
          }, {
            path: "*",
            element: (0, m.jsx)(p, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, a.useRoutes)(e)
        },
        be = () => (0, m.jsx)(ue, {})
    },
    5913: e => {
      var s = {
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
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

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && s.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var a = e.definitions[i];
          if (a.name && a.name.value == s) return a
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), a[e.name.value] = s
        }
      })), e.exports = s, e.exports.GameData = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [t(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = a[s] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (a[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(s) {
          var a = t(e, s);
          a && i.definitions.push(a)
        })), i
      }(s, "GameData")
    },
    4905: (e, s, i) => {
      var a = {
        "./cero_a.png": 1229,
        "./cero_b.svg": 7073,
        "./cero_c.svg": 1536,
        "./cero_d.svg": 1071,
        "./cero_rp.png": 2628,
        "./cero_z.svg": 393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 3953,
        "./djctq_14.svg": 6623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 9835,
        "./djctq_er.svg": 7173,
        "./djctq_l.svg": 1524,
        "./esrb_ao.svg": 7902,
        "./esrb_e.svg": 8287,
        "./esrb_e10plus.svg": 3396,
        "./esrb_m.svg": 871,
        "./esrb_m_ao.svg": 6938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 8473,
        "./esrb_t.svg": 1470,
        "./fpb_13.svg": 3765,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 3175,
        "./fpb_pg.svg": 5219,
        "./grac_12.svg": 1482,
        "./grac_15.svg": 8341,
        "./grac_18.svg": 1824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 5120,
        "./gsrr_12.svg": 4465,
        "./gsrr_15.svg": 2638,
        "./gsrr_18.svg": 2875,
        "./gsrr_6.svg": 2574,
        "./nmc_12.svg": 3911,
        "./nmc_16.svg": 7675,
        "./nmc_18.svg": 8157,
        "./nmc_21.svg": 8525,
        "./nmc_3.svg": 9109,
        "./nmc_7.svg": 2569,
        "./oflc_g.svg": 9809,
        "./oflc_m.svg": 8219,
        "./oflc_ma15.svg": 8718,
        "./oflc_pg.svg": 4509,
        "./oflc_r18.svg": 615,
        "./pegi_12.svg": 7620,
        "./pegi_16.svg": 7880,
        "./pegi_18.svg": 3454,
        "./pegi_3.svg": 3672,
        "./pegi_4.svg": 6071,
        "./pegi_6.svg": 9493,
        "./pegi_7.svg": 7860,
        "./pegi_rp.png": 7852,
        "./rars_0.svg": 247,
        "./rars_12.svg": 5757,
        "./rars_16.svg": 513,
        "./rars_18.svg": 9959,
        "./rars_6.svg": 1514,
        "./usk_0.svg": 507,
        "./usk_12.svg": 6196,
        "./usk_16.svg": 2008,
        "./usk_18.svg": 7582,
        "./usk_6.svg": 3813,
        "./usk_rp.svg": 7579,
        "./vaci_rp.png": 2674
      };

      function t(e) {
        var s = r(e);
        return i(s)
      }

      function r(e) {
        if (!i.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = r, e.exports = t, t.id = 4905
    },
    3983: (e, s, i) => {
      var a = {
        "./cero_a.png": 1229,
        "./cero_b.svg": 7073,
        "./cero_c.svg": 1536,
        "./cero_d.svg": 1071,
        "./cero_rp.png": 2628,
        "./cero_z.svg": 393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 3953,
        "./djctq_14.svg": 6623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 9835,
        "./djctq_er.svg": 7173,
        "./djctq_l.svg": 1524,
        "./esrb_ao.svg": 7902,
        "./esrb_e.svg": 8287,
        "./esrb_e10plus.svg": 3396,
        "./esrb_m.svg": 871,
        "./esrb_m_ao.svg": 6938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 8473,
        "./esrb_t.svg": 1470,
        "./fpb_13.svg": 3765,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 3175,
        "./fpb_pg.svg": 5219,
        "./grac_12.svg": 1482,
        "./grac_15.svg": 8341,
        "./grac_18.svg": 1824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 5120,
        "./gsrr_12.svg": 4465,
        "./gsrr_15.svg": 2638,
        "./gsrr_18.svg": 2875,
        "./gsrr_6.svg": 2574,
        "./nmc_12.svg": 3911,
        "./nmc_16.svg": 7675,
        "./nmc_18.svg": 8157,
        "./nmc_21.svg": 8525,
        "./nmc_3.svg": 9109,
        "./nmc_7.svg": 2569,
        "./oflc_g.svg": 9809,
        "./oflc_m.svg": 8219,
        "./oflc_ma15.svg": 8718,
        "./oflc_pg.svg": 4509,
        "./oflc_r18.svg": 615,
        "./pegi_12.svg": 7620,
        "./pegi_16.svg": 7880,
        "./pegi_18.svg": 3454,
        "./pegi_3.svg": 3672,
        "./pegi_4.svg": 6071,
        "./pegi_6.svg": 9493,
        "./pegi_7.svg": 7860,
        "./pegi_rp.png": 7852,
        "./rars_0.svg": 247,
        "./rars_12.svg": 5757,
        "./rars_16.svg": 513,
        "./rars_18.svg": 9959,
        "./rars_6.svg": 1514,
        "./usk_0.svg": 507,
        "./usk_12.svg": 6196,
        "./usk_16.svg": 2008,
        "./usk_18.svg": 7582,
        "./usk_6.svg": 3813,
        "./usk_rp.svg": 7579,
        "./vaci_rp.png": 2674
      };

      function t(e) {
        var s = r(e);
        return i(s)
      }

      function r(e) {
        if (!i.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = r, e.exports = t, t.id = 3983
    },
    2745: (e, s, i) => {
      var a = {
        "./III_Girl.png": 4488,
        "./SA_Girl.png": 3619,
        "./VC_Girl.png": 4348
      };

      function t(e) {
        var s = r(e);
        return i(s)
      }

      function r(e) {
        if (!i.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = r, e.exports = t, t.id = 2745
    },
    2144: (e, s, i) => {
      var a = {
        "./III-logo.svg": 5045,
        "./SA-logo.svg": 8752,
        "./VC-logo.svg": 4679,
        "./full-logo.svg": 5085,
        "./horizontal-logo.svg": 9032
      };

      function t(e) {
        var s = r(e);
        return i(s)
      }

      function r(e) {
        if (!i.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = r, e.exports = t, t.id = 2144
    },
    2503: (e, s, i) => {
      var a = {
        "./FOB_III.jpg": 2694,
        "./FOB_SA.jpg": 8489,
        "./FOB_VC.jpg": 9104
      };

      function t(e) {
        var s = r(e);
        return i(s)
      }

      function r(e) {
        if (!i.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = r, e.exports = t, t.id = 2503
    },
    1229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    7073: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    1536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    1071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    2628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    5251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    3953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    6623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    9835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    7173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    1524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    7902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    8287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    3396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    6938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    6960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    8473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    1470: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    3765: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    3175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    5219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    1482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    8341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    1824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    5560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    5120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    4465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    2638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    2875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    2574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    3911: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    7675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    8157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    8525: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    2569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    9809: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    8219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    8718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    4509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    7620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    7880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    3454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    3672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    6071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    9493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    7860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    7852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    247: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    5757: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    9959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    1514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    6196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    2008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    7582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    3813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    7579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    2674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    4488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba9d39a51a293a0dea8015cb169a3f00.png"
    },
    3619: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/815ee37b95c5da495dfd53e195b3fd2b.png"
    },
    4348: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d694e018ebbf633042b0ab4efe240761.png"
    },
    5045: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ebac74a3bd8855474149e5183e5daab9.svg"
    },
    8752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/419c79b6f881cd3688627cfb79701a87.svg"
    },
    4679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eedafb67aa8e0d384b040a059e58c129.svg"
    },
    5085: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/040fbe2e73f8c389455e3388e65871e6.svg"
    },
    9032: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/373d262bd11690abd9c7d019b2a06ae5.svg"
    },
    2694: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3b429d8b2554c055088d26c6fee32e98.jpg"
    },
    8489: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3056c18e92a148889b955e35c1c1e51.jpg"
    },
    9104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6791bf313eb4e358c452a31527d40ef.jpg"
    },
    7866: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d0e385716c5426389c4d61fb78777d1c.svg"
    },
    9683: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4dd59366a90e52fc8b44cbd1b4137bc2.svg"
    },
    2401: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/669f728359a35dafbb17cfcae2a26e4c.svg"
    },
    6146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34e278813ef8f47dba1c371775c814b.svg"
    },
    7573: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b6d072ab2eab82ec405ce22dc2e1e98.svg"
    },
    733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1550aa38eb8e866457a12bd02b9943d6.jpg"
    },
    1474: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/819b667fa0aef711c1f1628a42e8e9ce.jpg"
    },
    4143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567318b8517c492081e77e2e0a7ce63e.jpg"
    },
    3524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fabc3ff8a64105c4d8ac1aadbeffb3a9.jpg"
    },
    5994: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d02080b921b7f16bcc79828f2098758f.jpg"
    },
    5893: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b523f9e2578bdc3e95de00427f8910d.jpg"
    },
    8024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aea5f8a32dbc4b3b8cd475b36ca10553.jpg"
    },
    4688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d0db280cc91d285f6ed5eb64f3d9d8e.jpg"
    },
    1327: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f21b89ff222aec91c5c432eeb7993a15.jpg"
    },
    4946: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4aeff66c2cfd92173bf6a93f9a533b24.jpg"
    },
    2993: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d8cb815ee8236e1dbac6e7d3120809b.jpg"
    },
    4948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6305db310108acdaa5f15d169b1b6c7.jpg"
    },
    1853: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c00b0e39ea1fa1e867a6402ed9f4761.jpg"
    },
    2898: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d28dac374fa7413d066a50ca33cf6da7.jpg"
    },
    9279: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/39d1b9492d201b5d046ee2ba2f136001.jpg"
    },
    2900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bddd183ad5bce1fa0efdc5cbd958743.jpg"
    },
    945: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8a120c239702e7578f40def8fe1b8e5.jpg"
    },
    1920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aa480237baeaa2aeb0df779e3b42e840.jpg"
    },
    6879: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c37f2dbd02b15d29abfce91294f29403.jpg"
    },
    6882: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c56ece29d1d4a95952e36faf50215d22.jpg"
    },
    3441: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/423be4b38c2a859d7cf5b599814d4374.jpg"
    },
    4916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6baec421d2ea5db3c5db1dfff3206ea4.jpg"
    }
  }
]);