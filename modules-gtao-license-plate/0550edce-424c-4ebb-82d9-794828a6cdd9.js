! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0550edce-424c-4ebb-82d9-794828a6cdd9", e._sentryDebugIdIdentifier = "sentry-dbid-0550edce-424c-4ebb-82d9-794828a6cdd9")
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
  [598], {
    3963: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
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
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, s] = t;
            return s === a && (e = {
              site: r,
              subDomain: s
            }, !0)
          })) >= 0)), n = s[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    8598: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => Ma
      });
      var r = a(1403),
        s = a(6717);
      const n = JSON.parse('{"us":{"gtao_lp_link_account_cta":"Link a Rockstar Games Account","gtao_lp_no_character_errror":"No character found with this account. Link a Grand Theft Auto Online character or switch to a different Rockstar Games account.","lpe_sidebar_total_owned_plates":"{total} owned plates out of a maximum of {max}"},"de":{"gtao_lp_link_account_cta":"Rockstar-Games-Konto verknüpfen","gtao_lp_no_character_errror":"Es wurde kein Charakter für dieses Konto gefunden. Verknüpfe einen Charakter aus Grand Theft Auto Online oder melde dich mit einem anderen Rockstar-Games-Konto an.","lpe_sidebar_total_owned_plates":"Nummernschilder in Besitz: {total} von {max}"},"es":{"gtao_lp_link_account_cta":"Vincula una cuenta de Rockstar Games","gtao_lp_no_character_errror":"No se ha encontrado un personaje vinculado a esta cuenta. Vincula un personaje de Grand Theft Auto Online o cambia a otra cuenta de Rockstar Games.","lpe_sidebar_total_owned_plates":"Matrículas en propiedad: {total} de {max}"},"mx":{"gtao_lp_link_account_cta":"Vincula una cuenta de Rockstar Games","gtao_lp_no_character_errror":"No se encontró un personaje en esta cuenta. Vincula un personaje de Grand Theft Auto Online o cambia a una cuenta de Rockstar Games distinta.","lpe_sidebar_total_owned_plates":"Tienes {total} placas de un máximo de {max}."},"fr":{"gtao_lp_link_account_cta":"Associer un compte Rockstar Games","gtao_lp_no_character_errror":"Aucun personnage n\'a été trouvé avec ce compte. Associez un personnage de Grand Theft Auto Online ou utilisez un autre compte Rockstar Games.","lpe_sidebar_total_owned_plates":"{total} plaques possédées sur un maximum de {max}"},"it":{"gtao_lp_link_account_cta":"Collega un account di Rockstar Games","gtao_lp_no_character_errror":"Non è stato trovato alcun personaggio con questo account. Collega un personaggio di Grand Theft Auto Online o prova con un altro account di Rockstar Games.","lpe_sidebar_total_owned_plates":"Targhe possedute: {total}/{max}"},"jp":{"gtao_lp_link_account_cta":"ロックスター・ゲームスアカウントとリンクする","gtao_lp_no_character_errror":"このアカウントのキャラクターが見つかりませんでした。「GTAオンライン」のキャラクターをリンクするか別のロックスター・ゲームスアカウントに切り替えてください。","lpe_sidebar_total_owned_plates":"最大{max}枚のうち{total}枚のプレートを所有"},"kr":{"gtao_lp_link_account_cta":"Rockstar Games 계정 연동하기","gtao_lp_no_character_errror":"이 계정에서 캐릭터를 찾을 수 없습니다. Grand Theft Auto 온라인 캐릭터를 연동하거나 다른 Rockstar Games 계정을 사용하십시오.","lpe_sidebar_total_owned_plates":"최대 {max}개의 번호판 중 {total}개 소유"},"pl":{"gtao_lp_link_account_cta":"Powiąż konto Rockstar Games","gtao_lp_no_character_errror":"Nie odnaleziono postaci powiązanej tym kontem. Powiąż postać Grand Theft Auto Online lub przełącz się na inne konto Rockstar Games.","lpe_sidebar_total_owned_plates":"Liczba posiadanych tablic: {total} z {max}"},"br":{"gtao_lp_link_account_cta":"Vincular conta da Rockstar Games","gtao_lp_no_character_errror":"Nenhum personagem encontrado nessa conta. Vincule um personagem de Grand Theft Auto Online ou use uma conta da Rockstar Games diferente.","lpe_sidebar_total_owned_plates":"Tem {total} placas de um máximo de {max}"},"ru":{"gtao_lp_link_account_cta":"Привяжите учетную запись Rockstar Games","gtao_lp_no_character_errror":"Не найдено персонажей, связанных с этой учетной записью. Привяжите игровую учетную запись с персонажем Grand Theft Auto Online или переключитесь на другую учетную запись Rockstar Games.","lpe_sidebar_total_owned_plates":"Количество номерных знаков, которыми вы владеете: {total} из {max}"},"hans":{"gtao_lp_link_account_cta":"绑定一个 Rockstar Games 账户","gtao_lp_no_character_errror":"该账户下未找到角色。绑定一个 Grand Theft Auto 在线模式角色或切换至另一个 Rockstar Games 账户。","lpe_sidebar_total_owned_plates":"已拥有 {total} 张车牌（最多 {max} 张）"},"tw":{"gtao_lp_link_account_cta":"連結 Rockstar Games 帳戶","gtao_lp_no_character_errror":"該帳戶未找到任何角色。連結 Grand Theft Auto 線上模式角色或切換至另一個 Rockstar Games 帳戶。","lpe_sidebar_total_owned_plates":"擁有 {total} 個車牌（最多 {max} 個）"}}');
      var i = a(7377),
        o = a(8407),
        c = a(207),
        l = a(2757),
        d = a(2756),
        u = a(396),
        m = a(2037),
        p = a(3293),
        _ = a(9779),
        g = a(6571),
        f = a(8033),
        b = a(4252),
        h = a.n(b);
      const k = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        y = (0, s.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        v = "rockstargames-modules-gtao-license-plateff481c537a56a6fcdb1be85dfbc8944e";
      var x = a(6632);
      const w = (0, s.withIntl)((e => {
        let {
          children: t,
          to: a = "#",
          alt: n = "",
          autoBlank: i = !1,
          onClick: o = (() => {}),
          focused: c = !1,
          ...l
        } = e;
        const d = (0, r.useRef)(null),
          u = (0, s.useIntl)(),
          m = !/^(https?|mailto):/i.test(a),
          p = /^#/.test(a),
          g = l?.target ?? (i ? "_blank" : "_self");
        let {
          ...f
        } = l, b = "";
        if ("aria-label" in f && f["aria-label"] && (b = "_blank" === g ? `${f["aria-label"]} ${u.formatMessage(y.aria_label_open_new_window)}` : f["aria-label"]), (0, r.useEffect)((() => {
            c && d?.current && d.current.focus()
          }), [d?.current, c]), p) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), o && o(e)
          };
          return (0, x.jsxs)("a", {
            title: n,
            href: a,
            onClick: e,
            ...f,
            "aria-label": b,
            ref: d,
            children: [t, "_blank" === g && !b && (0, x.jsx)("span", {
              className: v,
              children: u.formatMessage(y.aria_label_open_new_window)
            })]
          })
        }
        if (m) return (0, x.jsxs)(_.NavLink, {
          title: n,
          to: a,
          onClick: o,
          ...f,
          "aria-label": b,
          ref: d,
          children: [t, "_blank" === g && !b && (0, x.jsx)("span", {
            className: v,
            children: u.formatMessage(y.aria_label_open_new_window)
          })]
        });
        const h = Object.keys(f).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
          ...e,
          [t]: l[t]
        })), {});
        return "function" == typeof h?.className && delete h.className, (0, x.jsxs)("a", {
          href: a,
          title: n,
          onClick: o,
          target: g,
          ...h,
          "aria-label": b,
          ref: d,
          children: [t, "_blank" === g && !b && (0, x.jsx)("span", {
            className: v,
            children: u.formatMessage(y.aria_label_open_new_window)
          })]
        })
      }), k);
      var E = a(3963);
      const P = (0, s.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        S = {
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
        N = (0, s.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: n,
            location: i,
            parent: o = "footer"
          } = e;
          const {
            track: l
          } = (0, c.useGtmTrack)(), d = (0, s.useIntl)(), [u, m] = (0, s.getLocale)(), [p, _] = (0, r.useState)(!1), g = (0, r.useMemo)((() => (0, E.A)()), []), f = (0, r.useCallback)((e => {
            let t = i.pathname;
            const a = t.split("/");
            return s.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), g.currentSite?.site === E.C.www ? "en" === e ? `${window.location.origin}${t}${i.search}` : `${window.location.origin}/${e}${t}${i.search}` : `${window.location.origin}${t}${i.search}`
          }), [i]), b = (0, r.useRef)(null), [h, k] = (0, r.useState)(0), y = matchMedia("(hover: none) and (pointer: coarse)").matches, v = e => {
            if (n && n(!1), u.subdomaincom === e || "none" === e) return void(n && n(!1));
            const t = s.locales.find((t => t.subdomaincom === e));
            if (t) {
              const a = f(e);
              l({
                event: "cta_other",
                link_url: a,
                text: e,
                element_placement: o
              }), m(t.iso), window.location.href = a
            }
          };
          return (0, r.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === p && _(!1)
          }), [a]), (0, r.useEffect)((() => {
            b.current && k(b.current.scrollHeight)
          }), [b]), (0, x.jsxs)("div", {
            className: [S.languageSelector, p ? S.open : ""].join(" "),
            "data-theme": t,
            children: [y && "sc-menu" === t && (0, x.jsx)("div", {
              className: S.selectBoxWrapper,
              children: (0, x.jsxs)("select", {
                className: S.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const t = e.currentTarget.value;
                  v(t)
                },
                "aria-label": d.formatMessage(P.language_selector_default),
                children: [(0, x.jsx)("option", {
                  className: S.selectBoxOption,
                  value: "none",
                  children: (0, x.jsx)(s.FormattedMessage, {
                    ...P.language_selector_default
                  })
                }), s.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, x.jsx)("option", {
                    className: S.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!y || "sc-menu" !== t) && (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!p), _(!p)
                },
                type: "button",
                "aria-label": d.formatMessage(P.language_selector_default),
                children: [(0, x.jsx)("i", {}), (0, x.jsx)("span", {
                  children: (0, x.jsx)(s.FormattedMessage, {
                    ...P.language_selector_default
                  })
                })]
              }), (0, x.jsx)("div", {
                className: S.linkWrapper,
                ref: b,
                style: {
                  "--ls-linkWrapper-opened-height": `${h}px`
                },
                children: (0, x.jsx)("div", {
                  className: S.links,
                  children: s.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, x.jsx)(w, {
                      to: f(t),
                      onClick: (r = t, () => {
                        v(r)
                      }),
                      tabIndex: p ? 0 : -1,
                      children: a
                    }, `desktop-${t}`);
                    var r
                  }))
                })
              })]
            })]
          })
        }), k);
      var T = a(300);
      class C extends r.Component {
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
          return this?.state?.error?.message ? (0, x.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platef903c45f8ecc18bd55f702e202f3763a",
            children: [(0, x.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, x.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const R = {
          rating: "rockstargames-modules-gtao-license-platea1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-gtao-license-platecba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-gtao-license-plateff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-gtao-license-plated47cd2b7c7415cb44cddef00b1c9b35f"
        },
        A = (0, s.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var I = a(5913);
      const O = void 0 !== I.GameData ? I.GameData : GameDataDefault;
      (0, d.importAll)(a(4905));
      const j = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, x.jsx)(C, {
            header: t,
            children: (0, x.jsx)(e, {
              ...a
            })
          })
        }
      }((0, s.withIntl)((e => {
        let {
          descriptors: t = null,
          footer: n = null,
          href: i,
          img: l = null,
          titleSlug: u = null,
          style: m = {},
          className: p
        } = e;
        const [_, g] = (0, r.useState)(!1), {
          inView: f
        } = (0, T.Wx)({
          threshold: .6
        }), [b, h] = (0, r.useState)({
          ratingDescriptors: t,
          ratingFooter: n,
          ratingImg: l,
          ratingUrl: i
        }), {
          track: k
        } = (0, c.useGtmTrack)(), y = (0, s.useIntl)(), {
          data: v
        } = (0, o.useQuery)(O, {
          variables: {
            titleSlug: u
          },
          skip: !u
        });
        if ((0, r.useEffect)((() => {
            v && h(v?.game)
          }), [v]), (0, r.useEffect)((() => {
            f && !_ && b.img_rating && (k({
              event: "page_section_impression",
              element_placement: "rating"
            }), g(!0))
          }), [f]), !b.ratingImg) return null;
        const E = !!b.ratingDescriptors;
        return (0, x.jsxs)("div", {
          className: [R.rating, E ? R.withDescriptors : R.withOutDescriptors, p || ""].join(" "),
          style: (0, d.safeStyles)(m),
          children: [(0, x.jsx)(w, {
            to: b.ratingUrl,
            target: "_blank",
            children: (0, x.jsx)("img", {
              alt: y.formatMessage(A.components_ratings_link_alt, {
                rating: (P = b.ratingImg, P.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(3983)(`./${b.ratingImg}`)
            })
          }), E && (0, x.jsxs)("div", {
            className: R.text,
            children: [(0, x.jsx)("p", {
              className: R.descriptors,
              dangerouslySetInnerHTML: {
                __html: b?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), b.ratingFooter && (0, x.jsx)("hr", {}), b.ratingFooter && (0, x.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: b.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var P
      }), k));
      var M = a(6040),
        L = a.n(M);
      const V = e => ie.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        z = e => ie.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        D = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        W = () => window.innerWidth < oe.lg,
        B = () => window.innerHeight > .75 * window.innerWidth,
        F = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= oe.xxl:
              return 25;
            case e >= oe.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= oe.lg:
              return 40;
            default:
              return 100
          }
        },
        U = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= oe.xl:
              return D(4);
            case e >= 1440:
              return D(3);
            default:
              return D(2)
          }
        },
        $ = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= oe.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= oe.lg:
              return 5;
            case e >= oe.md:
            default:
              return 8
          }
        },
        Y = (e, t) => e?.plateText && t.length ? !t.some(((t, a) => {
          let {
            plateText: r,
            style: s
          } = t;
          return a && r === e.plateText && s?.id === e?.style?.id
        })) : !!e?.plateText;

      function H(e) {
        const t = {
          x: 0,
          y: 0,
          z: 0,
          scale: 1
        };
        if (!e) return t;
        const a = window.getComputedStyle(e).transform;
        if ("none" === a || void 0 === a) return t;
        const r = a.includes("3d") ? "3d" : "2d",
          s = a.match(/matrix.*\((.+)\)/);
        let n;
        if (s && (n = s[1].split(", ")), n) {
          if ("2d" === r) return {
            x: n[4],
            y: n[5],
            z: 0,
            scale: n[0]
          };
          if ("3d" === r) return {
            x: n[12],
            y: n[13],
            z: n[14],
            scale: n[0]
          }
        }
        return t
      }

      function G(e, t, a, r) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
          x: 0,
          y: 0
        };
        const {
          offsetWidth: n
        } = t, {
          columns: i,
          rows: o,
          plateHeight: c,
          plateWidth: l,
          rowGap: d,
          columnGap: u
        } = r.gridOptions, {
          top: m,
          left: p,
          bottom: _
        } = r.gridDimensions.margins.pixels, g = Math.floor(e / i), f = e % i, b = c * o + d * (o - 1), h = l * i + u * (i - 1), k = n - s.x - 2 * p, y = a - s.y - m - _, v = y * (c / b), x = k * (l / h), w = g * (c + d) / b, E = {
          x: k * (f * (l + u) / h) + p + s.x,
          y: y * w + m + s.y
        };
        return {
          rect: {
            top: E.y,
            left: E.x,
            right: E.x + x,
            bottom: E.y + v,
            center: {
              x: E.x + x / 2,
              y: E.y + v / 2
            }
          },
          height: v,
          width: x
        }
      }
      const q = (e, t) => {
          t === Ce.LIST_PLATES && (document.body.style.cursor = "pointer")
        },
        X = e => {
          document.body.style.cursor = "auto", L().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: le.plateHover.duration,
            ease: le.plateHover.ease
          })
        };

      function Z(e, t) {
        const {
          plateIndex: a,
          timeline: r,
          three: s,
          gridScale: n
        } = e, {
          onComplete: i,
          tweenPosition: o,
          onStart: c,
          is3D: l
        } = t;
        if (Number.isNaN(a) || !s || !r || !n || !s?.controls?.current) return null;
        const {
          scene: d,
          camera: u,
          controls: p
        } = s, _ = $(), g = !B() || W() ? _ * n : 1.6 * _ * n, f = [];
        let b = null;
        d.traverse((e => {
          e.name === Re.LP && f.push(e), e.userData.index === a && (b = e)
        }));
        const h = new m.Vector3;
        b && b.getWorldPosition(h);
        const k = {
            cameraPosition: {
              start: (new m.Vector3).copy(u.position),
              end: new m.Vector3(h.x, h.y, h.z + g)
            },
            controlsTarget: {
              start: (new m.Vector3).copy(p.current.target),
              end: h
            },
            plateOpacity: f.map(((e, t) => ({
              start: e.material.opacity,
              end: f[t].userData.index === a ? 1 : 0
            })))
          },
          y = {
            current: 0
          };
        let v = 0;
        return t.isResize || (v = W() ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration), r.to(y, {
          current: 1,
          duration: v,
          ease: W() ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = y, t = k.cameraPosition.start.clone().lerp(k.cameraPosition.end, e);
            u.position.set(t.x, t.y, t.z);
            const a = k.controlsTarget.start.clone().lerp(k.controlsTarget.end, e);
            p.current.target.x = a.x, p.current.target.y = a.y, p.current.target.z = a.z
          },
          onStart: c ? () => {
            c()
          } : void 0,
          onComplete: i ? () => {
            i(e)
          } : void 0
        }, o || 0), y.current = 0, r.to(y, {
          current: 1,
          duration: W ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
          ease: W ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = y;
            f.forEach(((t, a) => {
              t.material && l && (t.material.opacity = m.MathUtils.lerp(k.plateOpacity[a].start, k.plateOpacity[a].end, e))
            }))
          }
        }, "<")
      }

      function K() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }
      const J = "GTALicensePlatesRegular",
        Q = 620,
        ee = a(4588),
        te = "initial",
        ae = "top",
        re = "bottom",
        se = {
          ACCESSIBLE_PLATE_GRID: "accessiblePlateGrid",
          ACCESSIBLE_PLATES: "accessiblePlates",
          CANVAS_WRAP: "canvasWrap",
          CONFIRM_CONTENT: "confirmContent",
          CONFIRM_SIDEBAR: "confirmSidebar",
          CONFIRM_SIDEBAR_BUTTONS: "confirmOrderSidebarButtons",
          CONFIRM_SIDEBAR_BUTTONS_PORTAL: "confirmOrderSidebarButtonsPortal",
          CTA_SHADER: "ctaShader",
          CTA_WRAP: "ctaWrap",
          FIRST_PLATE_MESH: "firstPlateMesh",
          FOOTER: "footer",
          LOADING_SCREEN: "loadingScreen",
          LP_GRID_3D: "lpGrid3d",
          MOBILE_SIDEBAR_PORTAL_TARGET: "mobileSidebarPortalTarget",
          NEW_PLATE: "newPlate",
          NEW_PLATE_FORM: "newPlateForm",
          NEW_PLATE_SIDEBAR: "newPlateSidebar",
          NEW_PLATE_UI: "newPlateUI",
          ORDER_BG: "orderBg",
          PLATE_COUNT: "plateCount",
          ROOT: "root",
          SIDEBAR: "sidebar",
          SIDEBAR_BUTTONS: "sidebarButtons",
          SIDEBAR_BUTTONS_LOADING_ANIMATION: "sidebarButtonsLoadingAnimation",
          UI: "ui",
          VIEW_PLATE: "viewPlate",
          TOGGLE_3D_BUTTON: "toggle3DButton",
          TOGGLE_VIEW_BUTTON: "toggleViewButton"
        };
      let ne;
      ne = [{
        id: 0,
        name: "eCola",
        displayName: "eCola",
        alphaImageUrl: ee,
        albedoImageUrl: a(2608),
        roughnessImageUrl: a(1657),
        bumpImageUrl: a(5587),
        previewUrl: a(747),
        image: null,
        fontColor: "#FFFFFF",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !0
      }, {
        id: 1,
        name: "sprunk",
        displayName: "Sprunk",
        alphaImageUrl: ee,
        albedoImageUrl: a(237),
        roughnessImageUrl: a(3302),
        bumpImageUrl: a(662),
        previewUrl: a(1336),
        image: null,
        fontColor: "#FFFFFF",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !0
      }, {
        id: 2,
        name: "BlueWhite2",
        displayName: "Blue on White 2",
        alphaImageUrl: ee,
        albedoImageUrl: a(8657),
        roughnessImageUrl: a(6538),
        bumpImageUrl: a(3130),
        previewUrl: a(1484),
        image: null,
        fontColor: "#2C317E",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 3,
        name: "YellowBlack",
        displayName: "Yellow on Black",
        alphaImageUrl: ee,
        albedoImageUrl: a(4065),
        roughnessImageUrl: a(7958),
        bumpImageUrl: a(7654),
        previewUrl: a(4844),
        image: null,
        fontColor: "#D29D17",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 4,
        name: "OrangeBlue",
        displayName: "Orange on Blue",
        alphaImageUrl: ee,
        albedoImageUrl: a(8566),
        roughnessImageUrl: a(7958),
        bumpImageUrl: a(7654),
        previewUrl: a(3281),
        image: null,
        fontColor: "#CD7600",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 5,
        name: "BlueWhite1",
        displayName: "Blue on White 1",
        alphaImageUrl: ee,
        albedoImageUrl: a(2216),
        roughnessImageUrl: a(7958),
        bumpImageUrl: a(7654),
        previewUrl: a(6003),
        image: null,
        fontColor: "#2C317E",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 6,
        name: "BlueWhite3",
        displayName: "Blue on White 3",
        alphaImageUrl: ee,
        albedoImageUrl: a(7502),
        roughnessImageUrl: a(2003),
        bumpImageUrl: a(1989),
        previewUrl: a(3817),
        image: null,
        fontColor: "#2C317E",
        fontSize: Q,
        fontName: J,
        selected: !1,
        isXmas2023Plate: !1
      }];
      const ie = ne,
        oe = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        ce = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: 0
          }
        },
        le = {
          plateHover: {
            duration: .25,
            ease: M.Power1.easeOut
          },
          clickPlate: {
            duration: .9,
            ease: M.Power4.easeInOut
          },
          deletePlate: {
            duration: .6,
            ease: M.Power4.easeInOut,
            delay: .005
          },
          sidebar: {
            in: {
              duration: .35,
              ease: M.Power2.easeIn,
              delay: .65
            },
            out: {
              duration: .3,
              ease: M.Power2.easeIn,
              delay: 0
            },
            mobile: {
              drawer: {
                duration: .9,
                ease: M.Power4.easeInOut
              },
              drawerSnap: {
                duration: .4,
                ease: M.Power4.easeOut
              },
              fadeHeader: {
                in: {
                  duration: .6,
                  ease: M.Power2.easeInOut,
                  delay: .3
                },
                out: {
                  duration: .7,
                  ease: M.Power2.easeInOut
                }
              },
              footer: {
                in: {
                  duration: .4,
                  ease: M.Cubic.easeIn,
                  delay: .9
                },
                out: {
                  duration: .4,
                  ease: M.Cubic.easeOut
                }
              }
            }
          },
          toggleView: {
            camera: {
              duration: .75,
              ease: M.Cubic.easeInOut
            },
            fadeIn: {
              duration: .5,
              ease: M.Power2.easeIn
            },
            fadeOut: {
              duration: .5,
              ease: M.Power2.easeIn
            },
            reset: {
              duration: .375,
              ease: M.Cubic.easeInOut
            }
          },
          transaction: {
            confirmOrder: {
              duration: .9,
              ease: M.Power3.easeInOut
            },
            fade: {
              in: {
                duration: .4,
                ease: M.Cubic.easeIn
              },
              out: {
                duration: .4,
                ease: M.Cubic.easeOut
              },
              landingPage: {
                duration: 1.15,
                ease: M.Cubic.easeInOut
              }
            }
          },
          plateShimmer: {
            duration: 2,
            ease: M.Power2.easeOut
          },
          accessibilePlate: {
            duration: .5,
            ease: M.Power2.easeIn
          }
        },
        de = {
          plateView: {
            maxPolarAngle: Math.PI - .9,
            minPolarAngle: .9,
            maxAzimuthAngle: Math.PI / 4,
            minAzimuthAngle: Math.PI / -4
          },
          carView: {
            maxPolarAngle: Math.PI - 1.55,
            minPolarAngle: 1.2,
            maxAzimuthAngle: Math.PI / 4,
            minAzimuthAngle: Math.PI / -4
          }
        },
        ue = -9.72,
        me = 5,
        pe = -10.68,
        _e = 10.4,
        ge = 5,
        fe = 4.52,
        be = {
          x: 0,
          y: 14.4,
          z: 4.9
        },
        he = -4.52,
        ke = 10,
        ye = 6.8,
        ve = {
          x: -14.52
        },
        xe = -15,
        we = 7,
        Ee = 4.52,
        Pe = {
          x: 6,
          y: 5,
          z: 5
        },
        Se = .6,
        Ne = .4,
        Te = .3,
        Ce = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        Re = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        Ae = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: z("BlueWhite2"),
          vehicles: []
        },
        Ie = (0, o.makeVar)(""),
        Oe = (0, o.makeVar)([]),
        je = (0, o.makeVar)(null),
        Me = (0, o.makeVar)(null),
        Le = (0, o.makeVar)(null),
        Ve = (0, o.makeVar)(0),
        ze = (0, o.makeVar)(Ce.LIST_PLATES),
        De = (0, o.makeVar)(null),
        We = (0, o.makeVar)(null),
        Be = (0, o.makeVar)(null),
        Fe = (0, o.makeVar)(1),
        Ue = (0, o.makeVar)(null),
        $e = (0, o.makeVar)(!1),
        Ye = (0, o.makeVar)(!1),
        He = (0, o.makeVar)(!0),
        Ge = (0, o.makeVar)(null),
        qe = (0, o.makeVar)(W()),
        Xe = (0, o.makeVar)(!1),
        Ze = (0, o.makeVar)(!0),
        Ke = (0, o.makeVar)(!1),
        Je = (0, o.makeVar)(0),
        Qe = (0, o.makeVar)(Ce.LIST_PLATES),
        et = (0, o.makeVar)(void 0),
        tt = (0, o.makeVar)(""),
        at = (0, o.makeVar)([]),
        rt = (0, o.makeVar)([]),
        st = (0, o.makeVar)(!1),
        nt = (0, o.makeVar)(!!W()),
        it = (0, o.makeVar)(!1),
        ot = (0, o.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        ct = (0, o.makeVar)(ie),
        lt = (0, o.makeVar)({}),
        dt = (e, t) => {
          const a = {
            ...lt(),
            [e]: t
          };
          lt(a)
        },
        ut = (0, o.makeVar)(Ae.style?.id),
        mt = (0, o.makeVar)(null),
        pt = (0, o.makeVar)(null),
        _t = (0, o.makeVar)(null),
        gt = () => {
          const e = (0, o.useReactiveVar)(Oe),
            t = (0, o.useReactiveVar)(je),
            a = (0, o.useReactiveVar)(Me),
            s = (0, o.useReactiveVar)(Le),
            n = (0, o.useReactiveVar)(Ve),
            i = (0, o.useReactiveVar)(ze),
            l = (0, o.useReactiveVar)(De),
            u = (0, o.useReactiveVar)(We),
            m = (0, o.useReactiveVar)(Be),
            p = (0, o.useReactiveVar)(Fe),
            _ = (0, o.useReactiveVar)(Ue),
            g = (0, o.useReactiveVar)($e),
            f = (0, o.useReactiveVar)(qe),
            b = (0, o.useReactiveVar)(Ye),
            h = (0, o.useReactiveVar)(He),
            k = (0, o.useReactiveVar)(Ge),
            y = (0, o.useReactiveVar)(Xe),
            v = (0, o.useReactiveVar)(Ke),
            x = (0, o.useReactiveVar)(Ze),
            w = (0, o.useReactiveVar)(Je),
            E = (0, o.useReactiveVar)(Qe),
            P = (0, d.useLocale)(),
            [S, N] = (0, r.useState)(""),
            T = (0, o.useReactiveVar)(et),
            C = (0, o.useReactiveVar)(tt),
            R = (0, o.useReactiveVar)(at),
            A = (0, o.useReactiveVar)(rt),
            I = (0, o.useReactiveVar)(ot),
            O = (0, o.useReactiveVar)(ct),
            j = (0, o.useReactiveVar)(Ie),
            M = (0, o.useReactiveVar)(lt),
            L = (0, c.useScConfig)(),
            V = (0, o.useReactiveVar)(ut),
            z = (0, o.useReactiveVar)(mt),
            D = (0, o.useReactiveVar)(nt),
            W = (0, o.useReactiveVar)(st),
            B = (0, o.useReactiveVar)(pt),
            F = (0, o.useReactiveVar)(_t),
            U = (0, o.useReactiveVar)(it);
          return (0, r.useEffect)((() => {
            const e = (0, d.toScLocaleString)(P),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${L.login}?returnUrl=${t}&lang=${e}`;
            N(a)
          }), []), {
            state: {
              accessiblePlates: e,
              canvasDimensions: t,
              character: a,
              currentPlate: s,
              currentPlateIndex: n,
              currentView: i,
              deletedPlateIndex: l,
              error: u,
              firstPlateMesh: m,
              isLoading: h,
              isScrollEnabled: x,
              gridScale: p,
              gridState: _,
              lastScrollY: w,
              pendingOrder: T,
              plates: R,
              plateTextures: A,
              realHeight: j,
              is3D: g,
              isExpanded: b,
              isLoggedIn: k,
              isMobile: f,
              isSceneLoaded: v,
              loginUrl: S,
              isOrderConfirmed: y,
              lastView: E,
              plateNumber: C,
              plateNumberStatus: I,
              plateStyles: O,
              refs: M,
              selectedStyle: V,
              selectedVehicle: z,
              shouldForce2D: D,
              shouldRenderScene: W,
              three: B,
              vehicles: F,
              xmas23PlatesAllowed: U
            },
            setAccessiblePlates: Oe,
            setCanvasDimensions: je,
            setCharacter: Me,
            setCurrentPlate: Le,
            setCurrentPlateIndex: Ve,
            setCurrentView: ze,
            setDeletedPlateIndex: De,
            setError: We,
            setFirstPlateMesh: Be,
            setGridState: Ue,
            setIsLoading: He,
            setIsLoggedIn: Ge,
            setIsOrderConfirmed: Xe,
            setLastScrollY: Je,
            setLastView: Qe,
            setPendingOrder: et,
            setPlates: at,
            realHeightReactive: Ie,
            setIs3D: $e,
            setIsExpanded: Ye,
            setIsMobile: qe,
            setIsSceneLoaded: Ke,
            setIsScrollEnabled: Ze,
            setGridScale: Fe,
            setPlateNumber: tt,
            setPlateNumberStatus: ot,
            setPlateStyles: ct,
            setPlateTextures: rt,
            setRefs: dt,
            setRefsInternal: lt,
            setSelectedStyle: ut,
            setSelectedVehicle: mt,
            setShouldForce2D: nt,
            setShouldRenderScene: st,
            setThree: pt,
            setVehicles: _t,
            setXmas23PlatesAllowed: it
          }
        },
        ft = e => {
          let {
            t
          } = e;
          const {
            setRefs: a,
            state: s
          } = gt(), n = (0, _.useLocation)(), {
            realHeight: i
          } = s, o = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            a(se.FOOTER, o)
          }), [o.current]), (0, x.jsx)("div", {
            className: "rockstargames-modules-gtao-license-plateb6e8553eec1a920ae9f7612fc67f679d",
            ref: o,
            style: {
              display: i ? "block" : "none"
            },
            children: (0, x.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platea42faae94ba9f609acbd4f25fe7040df",
              children: [(0, x.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platebaaac365214984fcde58c80e665b93a5",
                children: [(0, x.jsx)(N, {
                  location: n
                }), (0, x.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-plateb1ab2aefcb2ea7b94f3b16e8751de23e",
                  children: [(0, x.jsx)(w, {
                    to: "/corpinfo",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Corporate Info",
                    children: t("Corporate")
                  }), (0, x.jsx)(w, {
                    to: "/privacy",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Privacy",
                    children: t("Privacy")
                  }), (0, x.jsx)(w, {
                    onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Cookie settings",
                    children: t("Cookie Settings")
                  }), (0, x.jsx)(w, {
                    to: "/cookies",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Cookie policy",
                    children: t("Cookie Policy")
                  }), (0, x.jsx)(w, {
                    to: "/legal",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "Link Click",
                    "data-gtm-label": "Legal",
                    children: t("Legal")
                  }), (0, x.jsx)(w, {
                    to: "/ccpa",
                    "data-gtm-category": "Footer",
                    "data-gtm-action": "CCPA Link",
                    "data-gtm-label": "View CCPA Info",
                    children: t("Do Not Sell My Info")
                  })]
                })]
              }), (0, x.jsx)(j, {
                className: "rockstargames-modules-gtao-license-platef11dcd708c3e9261a6f3ffa655c18840",
                condensed: !0,
                titleSlug: "gta-online"
              })]
            })
          })
        };
      var bt = a(1149),
        ht = a(9232);
      const kt = e => {
        let {
          envMap: t,
          envModel: a,
          onLoad: s,
          position: n = [0, 0, 0]
        } = e;
        const {
          scene: i
        } = a;
        return (0, r.useEffect)((() => {
          i.traverse((e => {
            e instanceof m.Mesh && (e.material.opacity = 0, e.material.transparent = !0, e.material.map && (e.material.map.encoding = m.LinearEncoding, e.material.map.needsUpdate = !0)), "Car_ShadowPlane" !== e.name && "banshee_HD_Glass_SingleLayer" !== e.name && "banshee_HD_Shells_VertexPaint_Cage" !== e.name || (e.renderOrder = 1, e instanceof m.Mesh && (e.material.depthWrite = !0))
          })), i.getObjectByName("Car_Banshee_LOD_VertexColors")?.traverse((e => {
            e.castShadow = !0, e instanceof m.Mesh && (e.material.envMap = t, e.material.envMapIntensity = 1)
          })), i.visible = !1
        }), [a]), (0, r.useEffect)((() => {
          s && s()
        }), []), (0, x.jsx)("primitive", {
          position: n,
          scale: [1, 1, 1],
          rotation: [0, 0, 0],
          object: i
        })
      };
      var yt = a(2227);
      const vt = "#898989",
        xt = "#000000",
        wt = ["0.05", "0.15", "0.4"],
        Et = ["0.0", "0.5", "1.0"],
        Pt = ["0.299", "0.587", "0.114"],
        St = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        Nt = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= oe.sm ? t = 1 / 4 : a <= oe.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        Tt = {
          bumpMap: Nt(),
          map: Nt(),
          roughnessMap: Nt()
        },
        Ct = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: s,
            plateIndex: n,
            position: i = [0, 0, 0],
            width: o = 2
          } = e;
          const {
            state: c,
            setCurrentView: l,
            setPlateTextures: d,
            setRefs: u
          } = gt(), {
            currentView: p,
            isSceneLoaded: _,
            pendingOrder: g,
            plateNumber: f,
            plates: b,
            isLoggedIn: h,
            isMobile: k,
            selectedStyle: y,
            gridScale: v,
            plateTextures: w
          } = c, E = 0 === n && "number" == typeof y, [P, S] = (0, r.useState)(V(E ? y : s.style.id)), N = [0, 0, 0], T = [1, 1, 1], [C] = (0, r.useState)(0 === s.index), [R, A] = (0, r.useState)({}), I = (0, r.useRef)(), O = b.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            I.current && 0 === I.current.userData.index && u(se.FIRST_PLATE_MESH, I)
          }), [I.current]);
          const j = (0, r.useRef)(),
            M = (0, r.useCallback)((e => {
              !s.index && O || q(0, p)
            }), [p]),
            L = (0, r.useCallback)((e => {
              if (!P) return [];
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete Tt.bumpMap, Tt.bumpMap = Nt();
                  const a = Tt.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: s
                  } = window;
                  s <= oe.sm ? r = 1 / 4 : s <= oe.md && (r = .5);
                  const n = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${n}px ${t.fontName}`;
                  const i = 5 * r;
                  return St || (a.filter = `blur(${i}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), St && yt.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * i), new m.CanvasTexture(a.canvas)
                })(a, P),
                s = ((e, t) => {
                  delete Tt.map, Tt.map = Nt();
                  const a = Tt.map;
                  let r = 1;
                  const {
                    innerWidth: s
                  } = window;
                  s <= oe.sm ? r = 1 / 4 : s <= oe.md && (r = .5);
                  const n = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${n}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new m.CanvasTexture(a.canvas)
                })(a, P),
                n = k ? void 0 : ((e, t) => {
                  delete Tt.roughnessMap, Tt.roughnessMap = Nt();
                  const a = Tt.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: s
                  } = window;
                  s <= oe.sm ? r = 1 / 4 : s <= oe.md && (r = .5);
                  const n = t.fontSize * r;
                  a.strokeStyle = xt, a.fillStyle = xt, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${n}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = vt, a.fillStyle = vt, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new m.CanvasTexture(a.canvas)
                })(a, P);
              return [r, s, n]
            }), [P]),
            z = (0, r.useCallback)((e => {
              var t;
              C && (e.uniforms.saturation = ce.saturation, e.uniforms.fade = ce.fade, e.uniforms.shaderIndex = ce.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == 2) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${Pt[0]},\n                ${Pt[1]},\n                ${Pt[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, gl_FragColor.a);\n\n        } else if (shaderIndex == 0) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=h?wt:Et)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [C, h, g]);
          return (0, r.useEffect)((() => {
            C && (s.plateText = f)
          }), [C ? f : null]), (0, r.useEffect)((() => {
            if (C && P && P.id !== y) {
              const e = V(y);
              S(e)
            }
          }), [C, y]), (0, r.useEffect)((() => {
            ce.shaderIndex.value = h ? g ? 0 : 2 : 0, j.current && (j.current.bumpScale = .015 * v, j.current.needsUpdate = !0)
          }), [j.current, g, h, v]), (0, r.useEffect)((() => {
            if (R.map && w[n] !== R.map) {
              const e = [...w];
              e[n] = R.map, d(e)
            }
          }), [R, w]), (0, r.useEffect)((() => {
            const [e, t, a] = L(C ? f : s.plateText);
            A({
              map: t,
              bumpMap: e,
              roughnessMap: a
            })
          }), [C ? f : void 0, C ? P : void 0]), (0, r.useMemo)((() => _ && R.map && R.bumpMap ? (0, x.jsxs)("mesh", {
            name: Re.LP,
            visible: !0,
            userData: {
              index: n
            },
            position: i,
            rotation: N,
            scale: T,
            ref: I,
            onPointerOver: k ? void 0 : () => {
              h && l() === Ce.LIST_PLATES && I.current && M(I.current)
            },
            onPointerOut: k ? void 0 : () => {
              var e;
              h && I.current && (e = I.current, !s.index && O || X(e))
            },
            children: [(0, x.jsx)("planeBufferGeometry", {
              args: [o, a, o, a]
            }), (0, x.jsx)("meshPhysicalMaterial", {
              onBeforeCompile: 0 === n ? z : void 0,
              alphaMap: s.alphaMap,
              bumpMap: R.bumpMap,
              opacity: 0,
              bumpScale: .015,
              depthTest: !1,
              envMap: t,
              envMapIntensity: Ne,
              map: R.map,
              metalness: .4,
              ref: j,
              roughness: .3,
              roughnessMap: R.roughnessMap,
              transparent: !0
            })]
          }) : null), [h, k, R])
        },
        Rt = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [s, n, o, l] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: d
          } = a, {
            gridOptions: u,
            gridPosition: p
          } = t, {
            bottomMarginAsRatio: _,
            columnGap: g,
            columns: f,
            isVertical: b,
            rowGap: h,
            topMarginAsRatio: k
          } = u, {
            state: y,
            realHeightReactive: v,
            setGridScale: w,
            setLastScrollY: E,
            setCurrentView: P
          } = gt(), {
            currentView: S,
            gridScale: N,
            plates: T,
            isLoggedIn: C,
            isMobile: R,
            realHeight: A,
            refs: I,
            currentPlateIndex: O,
            three: j,
            canvasDimensions: M,
            lastScrollY: L,
            isScrollEnabled: V
          } = y, z = (0, r.useRef)(null), {
            camera: D,
            scene: W,
            gl: B
          } = (0, i.useThree)(), [F, $] = (0, r.useState)(new m.Vector3(p.x, p.y, p.z)), [Y, H] = (0, r.useState)(0), [G, q] = (0, r.useState)(0), {
            track: X
          } = (0, c.useGtmTrack)(), Z = {
            view_name: "license plate creator - landing page logged " + (C ? "in" : "out")
          }, [J, Q] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            S === Ce.LIST_PLATES && X({
              ...Z,
              event: "virtualPageview",
              display_type: R ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (C ? "in" : "out")
            })
          }), [S]);
          const ee = (0, r.useCallback)((() => {
            if (M) {
              const e = o * f + g * (f - 1),
                a = Math.abs(p.z) * Math.tan((0, ht.pu)(D.fov / 2)) * 2,
                r = t.gridDimensions.margins.meters.top,
                s = t.gridDimensions.margins.meters.bottom,
                n = t.gridDimensions.width,
                i = n / e,
                c = t.gridDimensions.height,
                l = c / a;
              q((c - a + r + s).toFixed(4)), w(i), (e => {
                Ce.LIST_PLATES;
                const t = B.domElement.offsetHeight,
                  a = l * t + k * t + _ * t,
                  r = U(),
                  s = I[se.ROOT]?.current;
                s && (s.style.height = `${a}px`), Q({
                  canvasHeight: t,
                  rootHeight: a
                }), v(`${Math.round(a)}px`);
                const c = Math.round(o * i / n * (B.domElement.offsetWidth - 2 * r));
                H(c)
              })()
            }
          }), [D.fov, M, f, S, R, p, T, n, W, k, O, j]);
          (0, r.useEffect)((() => {
            p && $(p), ee()
          }), [p, M]);
          const te = (0, r.useMemo)((() => T?.map((e => {
              if (0 === Y) return null;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (b ? t % f * (s + g) : Math.floor(t / f) * (s + g)) + s / 2, i = (b ? Math.floor(t / f) * (n + h) * -1 : t % f * (n + h) * -1) + a;
              return (0, x.jsx)(Ct, {
                envMap: d,
                height: l,
                position: [r, i, 0],
                plate: e,
                plateIndex: e.index,
                width: o
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [Y, T]),
            ae = (0, r.useCallback)((() => {
              const e = I[se.ROOT].current,
                t = document.body;
              e && (e.style.touchAction = "auto"), K() || requestAnimationFrame((() => {
                t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, L)
              }))
            }), [R, L, V]),
            re = (0, r.useCallback)((() => {
              const e = I[se.ROOT].current,
                t = document.body,
                a = window.scrollY;
              E(a), e && (e.style.touchAction = "none"), K() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [R, I, V, L]);
          (0, r.useEffect)((() => {
            V ? ae() : re()
          }), [V]), (0, r.useEffect)((() => () => {
            ae()
          }), []);
          const ne = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (P() === Ce.LIST_PLATES || e) {
              const e = I[se.ROOT]?.current;
              if (!e || !J) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = J, r = R && T.length <= 2 ? 2 : 1;
              let s = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(s) || a === t) && (s = 0);
              const n = F.y + G * s;
              z?.current?.position?.set(F.x, Number(n.toFixed(3)), F.z)
            }
          }), [z.current, F, I, G, T, J, C, R]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ne(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [z.current, C, F, p, A, I, G, J]), (0, r.useEffect)((() => {
            if (!z.current || !W) return;
            const e = W.getObjectByName("Scene");
            z.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [z.current, W]), (0, r.useMemo)((() => (0, x.jsx)("group", {
            name: Re.LP_GRID,
            ref: z,
            position: p,
            scale: N,
            children: 0 !== Y && te
          })), [N, te, Y])
        },
        At = e => {
          let {
            name: t,
            color: a,
            intensity: r,
            distance: s,
            decay: n,
            position: i,
            rotation: o,
            mapSize: c,
            ref: l,
            withHelper: d = !1
          } = e;
          return (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)("pointLight", {
              name: t,
              color: a,
              intensity: r,
              distance: s,
              decay: n,
              position: i,
              rotation: o,
              castShadow: !0,
              "shadow-mapSize-height": c,
              "shadow-mapSize-width": 2 * c,
              "shadow-radius": 4,
              "shadow-bias": -35e-5
            }), d && (0, x.jsx)("pointLightHelper", {
              light: l,
              sphereSize: 1
            })]
          })
        },
        It = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, x.jsxs)("group", {
            name: "Lights",
            children: [(0, x.jsx)(At, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [ue, me, pe],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, x.jsx)(At, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [_e, ge, fe],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, x.jsx)(At, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [he, ke, ye],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, x.jsx)(At, {
              name: "Light4",
              color: 16777215,
              intensity: 0,
              distance: 50,
              decay: 2,
              position: [xe, we, Ee],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, i.extend)({
        OrbitControls: bt.N
      });
      const Ot = {
          leftMargin: 200,
          topMargin: 200,
          columns: 3,
          isVertical: !0,
          columnGap: .1,
          rowGap: .1,
          depth: 5,
          plateHeight: 1,
          plateWidth: 2
        },
        jt = e => {
          let {
            loadedAssets: t
          } = e;
          const {
            state: a,
            setIsSceneLoaded: s,
            setThree: n,
            setGridState: o
          } = gt(), {
            gridState: c,
            isLoggedIn: l,
            is3D: d,
            shouldForce2D: u,
            isSceneLoaded: p,
            plates: _,
            plateStyles: g,
            three: f,
            canvasDimensions: b,
            shouldRenderScene: k,
            refs: y
          } = a, [v, w, E] = (0, i.useThree)((e => {
            let {
              camera: t,
              gl: a,
              scene: r
            } = e;
            return [t, a, r]
          })), P = (0, r.useRef)(), [S, N] = (0, r.useState)(!1), [T, C] = (0, r.useState)(null), R = () => {
            if (w.domElement.style.opacity = 1, w.domElement.style.position = "absolute", w.domElement.style.top = 0, w.domElement.style.left = 0, w.domElement.style.right = 0, w.domElement.style.bottom = 0, w.domElement.style.touchAction = "auto", !p) {
              const e = new m.Vector3,
                t = new m.Vector3;
              P.current.target.copy(t), n({
                scene: E,
                camera: v,
                renderer: w,
                controls: P,
                originalCameraFov: v.fov,
                originalCameraPosition: e,
                originalControlsTarget: t
              })
            }
            s(!0)
          };
          (0, r.useEffect)((() => {
            _.length && T && A(T.width)
          }), [T, _]), (0, r.useEffect)((() => (C({
            height: w.domElement.offsetHeight,
            width: w.domElement.offsetWidth
          }), () => {
            s(!1)
          })), []), (0, r.useEffect)((() => {
            t && _?.length && null !== l && N(!0)
          }), [t, _, l]), (0, r.useEffect)((() => {
            t && t?.environmentMap && g?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
          }), [t, g]);
          const A = (0, r.useCallback)((e => {
            const t = document.getElementById("list-plates-sidebar");
            if (!v || !t || !T) return;
            const a = U(),
              {
                plateWidth: r,
                plateHeight: s,
                columnGap: n,
                rowGap: i,
                depth: c
              } = Ot,
              l = c * Math.tan((0, ht.pu)(17.5)),
              d = -1 * v.aspect * l,
              u = window.innerWidth < oe.lg ? t.offsetHeight + a : a,
              p = a,
              g = w.domElement.offsetWidth,
              f = w.domElement.offsetHeight,
              b = (() => {
                const e = window.innerWidth;
                switch (!0) {
                  case e >= oe.xxl:
                    return D(11);
                  case e >= oe.xl:
                    return D(12);
                  case e >= oe.md:
                    return D(13);
                  default:
                    return D(20)
                }
              })(),
              h = p / g,
              k = d - d * h * 2,
              y = u / f,
              x = l - l * y * 2,
              E = b / f,
              P = new m.Vector3(k, x, -c),
              S = _.length > 1 ? (e => {
                const t = window.innerWidth;
                switch (!0) {
                  case t >= oe.xxl:
                    return 3;
                  case t >= oe.lg && t <= 1280:
                    return 1;
                  case e >= 600:
                    return 2;
                  default:
                    return 1
                }
              })(e) : 1,
              N = Math.ceil(_.length / S),
              C = r * S + n * (S - 1),
              R = s * Math.ceil(_.length / S) + i * (Math.ceil(_.length / S) - 1),
              A = Math.abs(P.z) * Math.tan((0, ht.pu)(v.fov / 2)) * 2,
              I = h * (A * (g / f)),
              O = y * A,
              j = E * A,
              M = Math.abs(2 * P.x),
              L = M / C * R;
            o({
              gridPosition: P,
              gridOptions: {
                ...Ot,
                columns: S,
                rows: N,
                topMarginAsRatio: y,
                bottomMarginAsRatio: E,
                leftMarginAsRatio: h
              },
              gridDimensions: {
                margins: {
                  meters: {
                    top: O,
                    left: I,
                    bottom: j
                  },
                  pixels: {
                    top: u,
                    left: p,
                    bottom: b
                  }
                },
                height: L,
                width: M
              }
            })
          }), [_, y?.[se.SIDEBAR]?.current, v, T, l]);
          (0, r.useEffect)((() => {
            f && P.current && !f?.controlsInit && n({
              ...f,
              controls: P,
              controlsInit: !0
            })
          }), [P.current, f]), (0, r.useEffect)((() => {
            f?.scene && P?.current && (P.current.enabled = k)
          }), [k, f]), (0, r.useEffect)((() => {
            P?.current && (!u && d || (P.current.enabled = !1))
          }), [u, d]), (0, i.useFrame)((() => {
            k && (P?.current?.update(), w.render(E, v))
          }), 1);
          const I = (0, r.useCallback)(h().debounce((() => {
            const e = y[se.CANVAS_WRAP]?.current;
            e && C({
              width: e.offsetWidth,
              height: e.offsetHeight
            })
          }), 100), [v, y]);
          (0, r.useEffect)((() => (I(), window.addEventListener("resize", I, !0), () => window.removeEventListener("resize", I, !0))), [b]);
          const O = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, x.jsx)(kt, {
              position: [0, -4.05, -11.76],
              envMap: t.environmentMap,
              envModel: t.environmentModel,
              onLoad: R
            }) : null), [t]),
            j = (0, r.useMemo)((() => (0, x.jsx)(It, {
              baseIntensity: Se,
              mapSize: 1024
            })), []),
            M = (0, r.useMemo)((() => (0, x.jsx)(Rt, {
              gridState: c,
              loadedAssets: t
            })), [c, t]),
            L = (0, r.useMemo)((() => (0, x.jsx)("orbitControls", {
              ref: P,
              screenSpacePanning: !0,
              args: [v, w.domElement],
              enableDamping: !0,
              enableZoom: !1,
              enablePan: !1,
              maxPolarAngle: de.plateView.maxPolarAngle,
              minPolarAngle: de.plateView.minPolarAngle,
              maxAzimuthAngle: de.plateView.maxAzimuthAngle,
              minAzimuthAngle: de.plateView.minAzimuthAngle,
              minDistance: -1,
              maxDistance: 100
            })), [v, P, w]);
          return (0, x.jsxs)(x.Fragment, {
            children: [j, O, S && c ? M : "", L]
          })
        };
      var Mt = a(1874),
        Lt = a(1410),
        Vt = a(8448);
      const zt = e => {
          let {
            isVisible: t = !1,
            top: a,
            bottom: s,
            onDrag: n,
            onHide: i,
            onShow: o,
            children: c,
            onTap: l,
            drawerY: d,
            mobileSidebarHeight: u
          } = e;
          const {
            state: m
          } = gt(), {
            currentView: p
          } = m, _ = (0, r.useRef)(null), g = (0, r.useState)(te), f = d?.get ? d.get() : 0, b = (0, Lt.useSpring)({
            y: t ? f : u,
            config: {
              easing: Lt.easings.easeInOutQuart,
              duration: 900
            }
          }), h = (0, r.useRef)(u), k = (0, r.useRef)(0), y = (0, r.useRef)(!1);
          (0, r.useEffect)((() => {
            const e = {
              top: a,
              bottom: s,
              y: b.y,
              offset: h,
              sidebarRef: _
            };
            _.current.style.touchAction = "none", _.current.style.overflowY = "hidden", t ? o(e) : i(e)
          }), [t]);
          const v = (0, r.useCallback)((0, Vt.useDrag)((e => {
              if (p !== Ce.CONFIRM_ORDER) {
                if (!y.current)
                  if (h.current = Math.max(a, Math.min(s, b.y.get() + e.delta[1])), k.current = e.movement[1], e.dragging) b.y.set(h.current);
                  else {
                    const e = {
                      y: b.y.get()
                    };
                    if (h.current < a / 2) {
                      const t = L().to(e, {
                        y: a,
                        duration: le.sidebar.mobile.drawerSnap.duration,
                        ease: le.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          y.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      _.current.style.touchAction = "auto", _.current.style.overflowY = "auto", g.current = ae
                    } else if (h.current > s / 2) {
                      const t = L().to(e, {
                        y: s,
                        duration: le.sidebar.mobile.drawerSnap.duration,
                        ease: le.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          y.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      _.current.style.touchAction = "none", _.current.style.overflowY = "hidden", g.current = re
                    } else {
                      const t = L().to(e, {
                        y: 0,
                        ease: le.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          y.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      _.current.style.touchAction = "none", _.current.style.overflowY = "hidden", g.current = te
                    }
                    h.current = b.y.get()
                  } const t = {
                  top: a,
                  bottom: s,
                  y: b.y,
                  offset: h,
                  sidebarRef: _,
                  dragParams: e
                };
                n(t)
              }
            })), [p, a, s]),
            w = () => {
              if (Math.abs(k.current) < 3) {
                y.current = !0, l({
                  drawerStateRef: g
                });
                const e = {
                    y: b.y.get()
                  },
                  t = {};
                g.current === te ? (t.y = a, _.current.style.touchAction = "auto", _.current.style.overflowY = "auto", g.current = ae) : (g.current === ae || g.current === re) && (t.y = 0, _.current.style.touchAction = "none", _.current.style.overflowY = "hidden", g.current = te), L().to(e, {
                  y: t.y,
                  duration: le.sidebar.mobile.drawerSnap.duration,
                  ease: le.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    b.y.set(e.y)
                  },
                  onComplete: () => {
                    y.current = !1, h.current = b.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, x.jsxs)(Lt.animated.div, {
            ...v(),
            ref: _,
            style: b ? {
              y: b.y
            } : void 0,
            className: "rockstargames-modules-gtao-license-platea30996f8fb210e2e4010c217dbf0437e",
            children: [(0, x.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateec1d03a84ec2e328b48748348a2f8bb4",
              onClick: w,
              "aria-hidden": "true"
            }), c]
          })), [b.y.get(), w, c])
        },
        Dt = e => {
          let {
            onClick: t
          } = e;
          return (0, x.jsx)("button", {
            type: "button",
            onClick: t,
            className: "rockstargames-modules-gtao-license-platea81788a7f11c282c9a7e4bceac6d4ce1",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        Wt = () => (0, x.jsx)("div", {
          className: "rockstargames-modules-gtao-license-platec116bf746553bf7c8d6b5e3b6f0b1209",
          "aria-label": "Los Santos Customs"
        }),
        Bt = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: s
            },
            closeModal: n
          } = e;
          return (0, x.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-platee9574ac462682ed4f394fb8076428ae1",
            disabled: r,
            onClick: e => (e => {
              s && s(e), n(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, x.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec9e74afa7b083c2db33e84befcc09927",
              children: t
            }), a && (0, x.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platebf69c5632ee8bf0e79067600546eb003"
            })]
          })
        },
        Ft = e => {
          let {
            icon: t = !1,
            title: a = "Cats are the world chase dog then run away yet while happily ignoring when being called meow.",
            secondaryText: s = "Meow to be let in hide from vacuum cleaner but try to hold own back foot to clean it but foot reflexively kicks you in face.",
            buttons: n = [{
              buttonText: "Cat mojo"
            }, {
              buttonText: "No, go back"
            }],
            showModal: i = !1,
            onClose: o = (() => {})
          } = e;
          const l = (0, r.useRef)(null),
            {
              track: d
            } = (0, c.useGtmTrack)(),
            {
              state: {
                isMobile: u
              }
            } = gt();
          return (0, r.useEffect)((() => {
            i && l.current && (l.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [i]), (0, x.jsxs)("dialog", {
            ref: l,
            className: "rockstargames-modules-gtao-license-plateaefb6cdd2d770689d66db28e09c748f7",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), o()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            children: [t && (0, x.jsx)("i", {
              className: "rockstargames-modules-gtao-license-platefc678c80791b7bec94a2c7743aefb2c4"
            }), (0, x.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec82a7d998d77f05fedd84c490e9c6b90",
              children: [(0, x.jsx)("h3", {
                children: a
              }), s && (0, x.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), (0, x.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee728a2fcfc9abbc5984c9245721af997",
              children: n.splice(0, 2).map((e => (0, x.jsx)(Bt, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (l.current?.close(), void o())
              }, e.buttonText)))
            })]
          })
        },
        Ut = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, x.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platec8ae2c220065654efd13996c8290a0fa",
            children: [(0, x.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec5250ca53556e76b38b62f7732ec6e52",
              children: t
            }), a && (0, x.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec71387432404f4698fbf646c43e14c7c",
              children: a
            })]
          })
        },
        $t = {
          pillBtn: "rockstargames-modules-gtao-license-platee5eaab6cff219b841cee7db39554e5ef",
          selected: "rockstargames-modules-gtao-license-plateea64a31b2cfdb028b51ec9bdcc09f847",
          viewPlate: "rockstargames-modules-gtao-license-plated72ac3a6911a9036de7702eb5eb7276d",
          expanded: "rockstargames-modules-gtao-license-platec5b4f7b56f7a6436a91e0217a7986b91",
          plateInfo: "rockstargames-modules-gtao-license-plateb672b520eaa15b69fb343b73c1ee951e",
          vehicles: "rockstargames-modules-gtao-license-platebf07cd0478ffe73fc72edd77281588c2",
          deleteBtnContainer: "rockstargames-modules-gtao-license-plateca8185ce5f24b53971c67feac0c06e9e",
          deleteBtn: "rockstargames-modules-gtao-license-platec53cb21f982e1b3aefb1d551761cd4b2",
          noDeleteClarification: "rockstargames-modules-gtao-license-plateef369fe43a8bde656427ac175f7c0829",
          drawerHandle: "rockstargames-modules-gtao-license-platec56076f3d34adc4bb3dd7ea9a78fa66a",
          sidebar: "rockstargames-modules-gtao-license-platec0118043400cf0117fadfb999cf02b37",
          landingPage: "rockstargames-modules-gtao-license-plated11bc37722014d5bff02cc83057aa2ce",
          ui: "rockstargames-modules-gtao-license-platea08114e3f8147371ce9982d0f175d42b",
          uiBottom: "rockstargames-modules-gtao-license-plated9b07d407fc6a0cb2835f567ed500b1a",
          noVehicles: "rockstargames-modules-gtao-license-plateeac59b99e77897e051d2d8f8c1f261f8"
        },
        Yt = "visible",
        Ht = (0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, o.useRockstarTokenPing)(),
            {
              loggedIn: s
            } = (0, c.useRockstarUser)(),
            {
              setCurrentView: n,
              setShouldRenderScene: i,
              setIsExpanded: l,
              setRefs: u,
              setError: p,
              state: _,
              setIsScrollEnabled: g,
              setDeletedPlateIndex: f
            } = gt(),
            {
              accessiblePlates: b,
              currentPlateIndex: k,
              currentPlate: y,
              currentView: v,
              gridScale: w,
              gridState: E,
              is3D: P,
              isExpanded: S,
              isMobile: N,
              isScrollEnabled: T,
              lastScrollY: C,
              plates: R,
              realHeight: A,
              refs: I,
              three: O
            } = _,
            [j, M] = (0, r.useState)(v === Ce.VIEW_PLATE),
            [V, z] = (0, r.useState)([]),
            [D, F] = (0, r.useState)(!1),
            [U, Y] = (0, r.useState)(!1),
            q = (0, r.useRef)(null),
            X = (0, r.useRef)(null),
            K = (0, r.useRef)(null),
            J = (0, r.useRef)(null),
            Q = (0, r.useRef)(35),
            ee = (0, r.useRef)(null),
            [ne, ie] = (0, r.useState)(.4 * window.innerHeight),
            [oe, ce] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ue, me] = (0, r.useState)(0),
            pe = (0, r.useRef)(ne),
            _e = (0, r.useRef)(null),
            [ge, fe] = (0, r.useState)(null),
            be = (0, r.useRef)(null),
            he = (0, r.useRef)(null),
            ke = (0, r.useRef)(null),
            ye = (0, r.useRef)(0),
            [ve, xe] = (0, r.useState)(null),
            {
              track: we
            } = (0, c.useGtmTrack)(),
            Ee = {
              view_name: "license plate creator - view plate"
            },
            Se = v === Ce.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            v !== Ce.VIEW_PLATE && U && Y(!1)
          }), [v, U]);
          const Ne = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(k) || (Ne.current = k)
          }), [k]);
          const Te = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            v && (Te.current = v), v === Ce.VIEW_PLATE && (ke.current = !1)
          }), [v]);
          const Ae = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            w && (Ae.current = w)
          }), [w]), (0, r.useEffect)((() => {
            b?.[0]?.current && v === Ce.NEW_PLATE && xe(H(b[0].parentElement))
          }), [b, v]);
          const Ie = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            ve && (Ie.current = ve)
          }), [ve]);
          const Oe = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (Te.current !== Ce.VIEW_PLATE) return;
            const {
              renderer: r
            } = O;
            Z({
              plateIndex: Ne.current,
              three: O,
              timeline: e,
              gridScale: t
            }, {
              onStart: () => {
                N ? document.body.style.touchAction = "none" : g(!1)
              },
              onComplete: e => {
                e?.three?.camera && (q.current = new m.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), J?.current?.children && J.current.querySelectorAll("button").forEach((e => {
                  e.style.pointerEvents = "all"
                })), N && (r.domElement.style.touchAction = "none", T && setTimeout((() => {
                  document.body.style.touchAction = "auto", g(!1)
                }), 200), _e.current = H(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: P
            })
          }), [O, k, v, E, R, N, P, T]);
          (0, r.useEffect)((() => {
            if (!O?.controls || !j) return;
            const {
              controls: e
            } = O, t = L().timeline({
              duration: N ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
              ease: N ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Oe(t, w, !0)
          }), [w, O]), (0, r.useEffect)((() => {
            ye.current = C
          }), [C]);
          const je = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!O?.controls || !b?.[k]) return;
              const {
                controls: a
              } = O, r = e || L().timeline({
                defaults: {
                  duration: 0,
                  ease: N ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), s = $(), i = N && v === Ce.CONFIRM_ORDER ? 1.5 : 1, o = !B() || N ? s * w * i : 1.6 * s * w, c = I[se.ROOT].current, l = document.getElementById("list-plates-sidebar"), d = I[se.CANVAS_WRAP].current, u = b[k].current;
              if (c && l && u && d) {
                const e = G(k, c, Number(A.replace("px", "")), E, N ? void 0 : {
                    x: l.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  s = H(d),
                  i = H(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(s.x),
                    y: a.top + a.height / 2 - Number(s.y)
                  },
                  p = 5 / o,
                  _ = N || n() !== Ce.CONFIRM_ORDER ? 0 : -1 * l.offsetWidth,
                  g = {
                    x: m.x - e.x + _,
                    y: m.y - e.y - 80 + (t.isResize ? ye.current : window.scrollY)
                  },
                  f = {
                    current: 0
                  },
                  h = b.map((e => Number(getComputedStyle(e?.current)?.getPropertyValue("opacity"))));
                r.to(f, {
                  current: 1,
                  ease: N ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                  onComplete: () => {
                    xe(H(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = f, r = (0, ht.Cc)(Number(i.x), g.x, a), s = (0, ht.Cc)(Number(i.y), g.y + (N ? .4 * window.innerHeight / -2 : 0), a), n = (0, ht.Cc)(Number(i.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${s}px) scale(${n})`, t.isResize || b.forEach(((e, t) => {
                      if (t !== k && e?.current) {
                        const r = (0, ht.Cc)(h[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            }), [k, E, N, v, A, O, b, I, ne, C]),
            Me = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
              if (!O?.camera || !q.current) return;
              const {
                camera: t,
                controls: a,
                renderer: r
              } = O;
              if (L().to(t.position, {
                  x: Number(q.current.x),
                  y: Number(q.current.y),
                  z: Number(q.current.z),
                  ease: le.toggleView.camera.ease,
                  duration: le.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    n(Ce.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.maxPolarAngle = de.plateView.maxPolarAngle, a.current.minPolarAngle = de.plateView.minPolarAngle, a.current.maxAzimuthAngle = de.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = de.plateView.minAzimuthAngle, a.current.enableZoom = !1), pe.current = 0, e?.onComplete && e.onComplete()
                  }
                }), N) {
                const e = r.domElement;
                L().to(e.style, {
                  opacity: 1,
                  duration: le.toggleView.reset.duration,
                  ease: le.toggleView.reset.ease
                })
              }
              we({
                ...Ee,
                event: "modal_close",
                element_placement: "view plate",
                view_name: "license plate creator - view plate"
              })
            }), [N, O, q]);
          (0, r.useEffect)((() => {
            u(se.VIEW_PLATE, ee)
          }), [ee.current]), (0, r.useEffect)((() => {
            z(R?.[k]?.vehicles ?? [])
          }), [k, R]), (0, r.useEffect)((() => {
            M(v === Ce.VIEW_PLATE)
          }), [v]), (0, r.useEffect)((() => {
            O?.scene && J?.current && (e => {
              const {
                scene: t,
                controls: a
              } = O, r = [];
              t.traverse((e => {
                e.name === Re.LP && r.push(e), e.userData.index === Number(k) && (X.current = e)
              }));
              const s = L().timeline({
                defaults: {
                  duration: N ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                  ease: N ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease
                },
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              switch (e) {
                case Yt: {
                  Oe(s, Ae.current, !1);
                  const e = I[se.ROOT]?.current,
                    t = I[se.SIDEBAR]?.current,
                    a = b[k].current,
                    r = I?.[se.CANVAS_WRAP]?.current;
                  e && t && a && r && je(s), he?.current && s.to([J.current, he.current, N ? void 0 : K.current], {
                    autoAlpha: 1,
                    duration: le.sidebar.in.duration,
                    ease: le.sidebar.in.ease,
                    delay: le.sidebar.in.delay,
                    onComplete: () => {
                      he?.current && (he.current.style.pointerEvents = "all"), K?.current && (K.current.style.pointerEvents = "all")
                    }
                  }, 0), O?.camera && N && !Q.current && (Q.current = O.camera.fov);
                  break
                }
                default:
                  K.current && L().to(K.current, {
                    pointerEvents: "none"
                  }), J.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), L().to(J.current, {
                    autoAlpha: 0,
                    duration: le.sidebar.out.duration,
                    ease: le.sidebar.out.ease,
                    delay: le.sidebar.out.delay
                  }), !N && K.current ? (L().to(K.current, {
                    autoAlpha: 0,
                    duration: le.sidebar.out.duration,
                    ease: le.sidebar.out.ease,
                    delay: le.sidebar.out.delay
                  }), L().to(he.current, {
                    autoAlpha: 0,
                    duration: le.sidebar.out.duration,
                    ease: le.sidebar.out.ease,
                    delay: le.sidebar.out.delay,
                    onComplete: () => {
                      he.current.style.pointerEvents = "none"
                    }
                  })) : L().to(he.current, {
                    autoAlpha: 0,
                    duration: le.sidebar.out.duration,
                    ease: le.sidebar.out.ease,
                    delay: le.sidebar.out.delay,
                    onComplete: () => {
                      he.current.style.pointerEvents = "none"
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })(j ? Yt : "hidden")
          }), [he.current, O, j]);
          const Le = (0, r.useCallback)((() => {
            if (N && ee.current) {
              const e = ee.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              me(a - 48 - t), ie(a), ce(-1 * (.6 * e - 80))
            }
          }), [N, ee.current]);
          (0, r.useEffect)((() => {
            Le()
          }), [N, ee.current]);
          const Ve = (0, r.useRef)(null),
            ze = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Ve.current = j
          }), [j]), (0, r.useEffect)((() => {
            ze.current = O
          }), [O]);
          const De = (0, r.useCallback)(h().debounce((() => {
            if (!0 !== Ve.current) return;
            const {
              renderer: e
            } = ze.current;
            Te.current === Ce.VIEW_PLATE && (W() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", K?.current && (K.current.style.opacity = "1", K.current.style.visibility = "visible", K.current.style.pointerEvents = "all"), je(null, {
              isResize: !0
            }), Le())
          }), 100), [N, j, v, O, oe, A, E]);
          (0, r.useEffect)((() => {
            w && (Ae.current = w), n() === Ce.VIEW_PLATE ? De() : W() && (Le(), fe(.4 * window.innerHeight))
          }), [w]), (0, r.useEffect)((() => {
            if (!O?.scene) return;
            if (!O?.scene || !b?.[0]?.current) return;
            const {
              scene: e
            } = O, t = [], a = [], r = b[k].current;
            if (e.traverse((e => {
                e.name === Re.LP && e.material ? a[e.userData.index] = e.material : t.push(e.material)
              })), n() === Ce.VIEW_PLATE)
              if (P) {
                const t = a[k];
                if (L().to(t, {
                    opacity: 1,
                    delay: N ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    duration: N ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    ease: N ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                    onStart: () => {
                      i(!0), L().to(r.style, {
                        opacity: 0,
                        duration: le.accessibilePlate.duration,
                        ease: le.accessibilePlate.ease,
                        onUpdate: () => {}
                      })
                    }
                  }), !ke.current) {
                  const t = e.getObjectByName("Light4"),
                    a = new m.Vector3;
                  X?.current && (X.current.getWorldPosition(a), L().to(t.position, {
                    x: Pe.x,
                    y: a.y + Pe.y,
                    z: Pe.z,
                    delay: N ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    duration: le.plateShimmer.duration,
                    ease: le.plateShimmer.ease
                  }));
                  const r = {
                    current: 0
                  };
                  L().to(r, {
                    current: 1,
                    delay: N ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    duration: le.plateShimmer.duration,
                    ease: le.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: e
                      } = r, a = (0, ht.Cc)(0, Math.PI, e);
                      t.intensity = .3 * Math.sin(a), t.color = new m.Color(a, .9 * a, a)
                    }
                  }), ke.current = !0
                }
              } else {
                const e = a[k];
                L().to(r.style, {
                  opacity: 1,
                  duration: le.accessibilePlate.duration,
                  ease: le.accessibilePlate.ease,
                  onStart: () => {
                    L().to(e, {
                      opacity: 0,
                      duration: le.accessibilePlate.duration,
                      ease: le.accessibilePlate.ease,
                      onComplete: () => {
                        i(!1)
                      }
                    })
                  }
                })
              }
          }), [P, N, O]);
          const We = (0, x.jsxs)(x.Fragment, {
              children: [!N && (0, x.jsx)("hr", {
                className: $t.drawerHandle,
                onClick: () => {
                  l(!S)
                },
                "aria-hidden": "true"
              }), (0, x.jsx)("div", {
                className: $t.plateInfo,
                children: (0, x.jsxs)("section", {
                  className: $t.vehiclesApplied,
                  children: [(0, x.jsx)("label", {
                    htmlFor: "vehicles",
                    className: V.length ? "" : `${$t.noVehicles}`,
                    children: V.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, x.jsx)("div", {
                    className: $t.vehicles,
                    children: V.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, x.jsx)(Ut, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            Be = (0, r.useCallback)((e => {
              if (!O) return;
              const {
                drawerStateRef: t
              } = e, a = b?.[0].current;
              if (a) {
                const e = H(a.parentElement),
                  {
                    renderer: r,
                    camera: s
                  } = O,
                  n = r.domElement,
                  i = {
                    buttonWrapOpacity: be.current.style.opacity,
                    buttonWrapTranslateY: H(be.current).y,
                    canvasWrapOpacity: n.style.opacity,
                    canvasHeight: n.offsetHeight,
                    canvasTranslateY: Number(H(n).y),
                    fov: s.fov,
                    accessiblePlateX: Number(e.x),
                    accessiblePlateY: Number(e.y),
                    accessiblePlateScale: Number(e.scale)
                  },
                  o = {};
                t.current === te ? (o.buttonWrapOpacity = 0, o.buttonWrapTranslateY = oe, o.canvasWrapOpacity = 0, o.canvasHeight = -oe, o.canvasTranslateY = _e.current, o.fov = Q.current, o.accessiblePlateX = Ie.current.x, o.accessiblePlateY = Ie.current.y, o.accessiblePlateScale = Ie.current.scale, n.style.pointerEvents = "none") : (t.current === ae || t.current === re) && (o.buttonWrapOpacity = 1, o.buttonWrapTranslateY = 0, o.canvasWrapOpacity = 1, o.canvasHeight = -oe, o.canvasTranslateY = _e.current, o.fov = Q.current, o.accessiblePlateX = Ie.current.x, o.accessiblePlateY = Ie.current.y, o.accessiblePlateScale = Ie.current.scale, n.style.pointerEvents = "all"), L().to(i, {
                  buttonWrapOpacity: o.buttonWrapOpacity,
                  buttonWrapTranslateY: o.buttonWrapTranslateY,
                  canvasWrapOpacity: o.canvasWrapOpacity,
                  canvasHeight: o.canvasHeight,
                  canvasTranslateY: o.canvasTranslateY,
                  fov: o.fov,
                  accessiblePlateX: o.accessiblePlateX,
                  accessiblePlateY: o.accessiblePlateY,
                  accessiblePlateScale: o.accessiblePlateScale,
                  duration: le.sidebar.mobile.drawerSnap.duration,
                  ease: le.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    n.style.opacity = i.canvasWrapOpacity, be.current.style.opacity = i.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${i.buttonWrapTranslateY}px)`, a && (a.parentElement.style.opacity = i.canvasWrapOpacity, a.parentElement.style.transform = `translate(${i.accessiblePlateX}px,\n                            ${i.accessiblePlateY}px) scale(${i.accessiblePlateScale})`), s.fov = i.fov, s.updateProjectionMatrix(), n.style.transform = `translateY(${i.canvasTranslateY}px)`
                  }
                })
              }
            }), [O, ne, oe, b]),
            Fe = (0, r.useCallback)((e => {
              if (!O) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: s,
                bottom: n
              } = e, {
                camera: i,
                renderer: o
              } = O, c = o.domElement, l = b?.[0]?.current, d = -oe + .4 * window.innerHeight - 48;
              if (l)
                if (t.dragging) {
                  const e = (0, ht.U4)(0, s, r.get()),
                    o = (0, ht.Cc)(0, 1, 1 - e);
                  c.style.opacity = o, be.current.style.opacity = o, be.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, ht.Cc)(0, 1, 1 - 3 * e);
                  if (l.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < n) {
                    const e = (0, ht.U4)(0, n, r.get()),
                      a = (0, ht.Cc)(Q.current, 40, e);
                    i.fov = a;
                    const s = Number(H(c).y) + t.delta[1] / 2;
                    if (c.style.transform = `translateY(${s}px)`, l) {
                      const e = H(l.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        s = Number(H(l.parentElement).y) + t.delta[1] / 2;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${s}px) scale(${r})`
                    }
                    i.updateProjectionMatrix()
                  }
                } else {
                  const e = {
                    buttonWrapOpacity: be.current.style.opacity,
                    canvasWrapOpacity: c.style.opacity,
                    fov: i.fov,
                    uiButtonsTransformY: H(be.current).y,
                    canvasHeight: c.offsetHeight,
                    canvasTranslateY: Number(H(c).y),
                    accessibilityPlateY: Number(H(l.parentElement).y),
                    accessibilityPlateOpacity: l.parentElement.style.opacity
                  };
                  a.current < oe / 2 ? (c.style.pointerEvents = "none", L().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    uiButtonsTransformY: oe,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: le.sidebar.mobile.drawerSnap.duration,
                    ease: le.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, be.current.style.opacity = e.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, l.parentElement.style.opacity = e.accessibilityPlateOpacity
                    }
                  })) : a.current > n / 2 ? (c.style.pointerEvents = "all", L().to(e, {
                    buttonWrapOpacity: 1,
                    uiButtonsTransformY: n,
                    canvasWrapOpacity: 1,
                    fov: 40,
                    canvasHeight: d,
                    canvasTranslateY: Number(_e.current) + n / 2,
                    accessibilityPlateY: Number(Ie.current.y) + n / 2,
                    duration: le.sidebar.mobile.drawerSnap.duration,
                    ease: le.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, be.current.style.opacity = e.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, i.fov = e.fov, i.updateProjectionMatrix(), c.style.transform = `translateY(${e.canvasTranslateY}px)`, l.parentElement.style.transform = `translate(${Ie.current.x}px,\n                                ${e.accessibilityPlateY}px) scale(${Ie.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (c.style.pointerEvents = "all", L().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    uiButtonsTransformY: 0,
                    fov: Q.current,
                    canvasHeight: -oe,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Ie.current.y),
                    duration: le.sidebar.mobile.drawerSnap.duration,
                    ease: le.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, be.current.style.opacity = e.buttonWrapOpacity, be.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px`, l.parentElement.style.opacity = e.accessibilityPlateOpacity, i.fov = e.fov, i.updateProjectionMatrix(), c.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = H(l.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        s = e.accessibilityPlateY;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${s}px) scale(${r})`
                    }
                  }))
                }
            }), [O, be.current, oe, b, ne, ve]),
            Ue = (0, r.useCallback)((e => {
              const t = I[se.UI]?.current;
              if (!t || !O?.scene || !e) return;
              const {
                camera: a,
                renderer: r
              } = O, s = r.domElement, {
                y: n,
                sidebarRef: i
              } = e, o = t.offsetHeight, c = {
                mobileSidebarHeight: n.get(),
                opacity: i.current.style.opacity,
                height: s.offsetHeight,
                fov: a.fov
              };
              L().to(c, {
                opacity: 1,
                height: o,
                mobileSidebarHeight: .4 * window.innerHeight,
                fov: Q.current,
                duration: le.sidebar.mobile.drawer.duration,
                ease: le.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  i.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, i.current.style.opacity = c.opacity, be.current.style.opacity = c.opacity, s.style.height = c.height, n.set(c.mobileSidebarHeight), a && (a.fov = c.fov, a.updateProjectionMatrix())
                },
                onComplete: () => {
                  s.style.pointerEvents = "all"
                }
              }), i.current.style.pointerEvents = "none"
            }), [I, O, ne]),
            $e = (0, r.useCallback)((e => {
              if (!O?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === ge && fe(r);
              const {
                renderer: s
              } = O;
              t.current.style.pointerEvents = "all";
              const n = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              L().to(n, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: .4 * window.innerHeight / 2,
                duration: le.sidebar.mobile.drawer.duration,
                ease: le.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = n.opacity, t.current.style.transform = `translateY(${n.mobileSidebarHeight}px)`, a.current = n.mobileSidebarHeight, r.set(a.current), be.current.style.transform = `translateY(${n.mobileSidebarHeight}px)`, he.current.style.transform = `translateY(${n.mobileSidebarHeight}px)`, s.domElement.style.transform = `translateY(${-1*n.canvasY}px)`
                }
              })
            }), [ge, O]),
            Ye = (0, r.useMemo)((() => N ? (0, x.jsx)(zt, {
              isVisible: j,
              top: oe,
              bottom: ue,
              onTap: Be,
              onDrag: Fe,
              onHide: Ue,
              onShow: $e,
              mobileSidebarHeight: ne,
              children: We
            }) : (0, x.jsx)("div", {
              ref: K,
              className: $t.sidebar,
              children: We
            })), [be.current, he.current, S, ne, N, j, I, K.current, V, oe, ue]);
          return (0, x.jsxs)("div", {
            className: $t.viewPlate,
            ref: ee,
            children: [(0, x.jsx)(Ft, {
              title: t("lp.modal.delete.title"),
              secondaryText: t("lp.modal.delete.description").replace("{plateText}", y?.plateText ?? ""),
              buttons: [{
                buttonText: t("lp.modal.delete.confirm"),
                onClick: () => {
                  (async () => {
                    try {
                      if (!y || !s) return;
                      const {
                        plateText: e
                      } = y;
                      Y(!0);
                      const {
                        error: t,
                        status: r
                      } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        pingBearer: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (t) throw Object.assign(new Error(""), t);
                      r && f(k), Me()
                    } catch (e) {
                      p(["api", e])
                    }
                  })(), we({
                    ...Ee,
                    event: "license_plate_delete_confirm",
                    text: "confirm",
                    view_name: "license plate creator - modal: delete"
                  })
                }
              }, {
                buttonText: t("lp.modal.delete.cancel"),
                onClick: () => {
                  we({
                    ...Ee,
                    event: "cta_cancel",
                    text: "cancel",
                    view_name: "license plate creator - modal: cancel"
                  })
                }
              }],
              showModal: D,
              onClose: () => F(!1)
            }), Ye, (0, x.jsxs)("div", {
              ref: J,
              className: $t.ui,
              children: [(0, x.jsx)(Dt, {
                onClick: Me
              }), (0, x.jsx)(Lt.animated.div, {
                ref: be,
                className: $t.uiBottom,
                style: ge ? {
                  y: ge
                } : void 0,
                children: (0, x.jsx)(Wt, {})
              })]
            }), (0, x.jsxs)("div", {
              className: $t.deleteBtnContainer,
              ref: he,
              children: [(0, x.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: $t.deleteBtn,
                disabled: y?.noDelete || U,
                onClick: () => {
                  y?.noDelete || U || (we({
                    ...Ee,
                    event: "license_plate_delete_click",
                    text: "delete this plate?"
                  }), F(!0))
                },
                tabIndex: Se,
                type: "button"
              }), y?.noDelete && (0, x.jsx)("label", {
                htmlFor: "nodelete",
                className: $t.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        }));
      var Gt = a(6855),
        qt = a.n(Gt);
      const Xt = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Zt = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Kt = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Jt = e => {
          let t, {
            type: a = Kt.SPINNING
          } = e;
          switch (a) {
            case Kt.THREE_DOTS:
              t = Zt;
              break;
            case Kt.SPINNING:
            default:
              t = Xt
          }
          return (0, x.jsx)(qt(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            }
          })
        },
        Qt = (0, d.withTranslations)((e => {
          let {
            plateNumberStatus: {
              isProfane: t,
              isReserved: a,
              isValid: r
            },
            t: s
          } = e;
          const {
            track: n
          } = (0, c.useGtmTrack)(), i = (t ? "lp.create.valid-profane" : a && "lp.create.valid-reserved") || "lp.create.helper";
          return (t || a) && n({
            view_name: "license plate creator - create plate form",
            event: "alert_error",
            text: i
          }), (0, x.jsx)("p", {
            className: "rockstargames-modules-gtao-license-plated8dc05f054396924b408e16dea1c411f rockstargames-modules-gtao-license-platef12013d76eb62b07523fe96d62fef0f1 " + (!1 === r ? "rockstargames-modules-gtao-license-plateb5883ece595313dbdebb2bdcc0f19992" : ""),
            children: s(i)
          })
        })),
        ea = {
          pillBtn: "rockstargames-modules-gtao-license-plateb83c41648f428d0c335575cfda0ad68b",
          selected: "rockstargames-modules-gtao-license-platecb72e49e43291fc3fa35d73ebc93a020",
          lpStyleOption: "rockstargames-modules-gtao-license-platef9c4c46735ea44a8fd03b964aa9cfdd1",
          lpStyleOptionImage: "rockstargames-modules-gtao-license-platea848dacaa90a9ece96907bdfb6e97a30"
        },
        ta = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: s,
            setSelectedStyle: n
          } = gt(), {
            plates: i,
            selectedStyle: o
          } = s, c = (0, r.useCallback)((() => {
            ie.forEach((e => ({
              ...e,
              selected: !0
            }))), n(t.id)
          }), [i, t]);
          return (0, x.jsx)("button", {
            className: [ea.lpStyleOption, o === t.id ? ea.selected : ""].join(" "),
            onClick: () => c(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, x.jsx)("img", {
              className: ea.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        aa = (0, d.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: s
          } = e;
          const {
            loggedIn: n
          } = (0, c.useRockstarUser)(), i = (0, o.useRockstarTokenPing)(), {
            setCurrentView: l,
            setPlateNumber: u,
            setPlateNumberStatus: m,
            setError: p,
            setRefs: _,
            state: g
          } = gt(), {
            currentView: f,
            plateStyles: b,
            plateNumber: h,
            plateNumberStatus: k,
            isMobile: y,
            xmas23PlatesAllowed: v
          } = g, [w, E] = (0, r.useState)(0), {
            isValid: P
          } = k, S = (0, r.useMemo)((() => h), [h]), {
            track: N
          } = (0, c.useGtmTrack)(), T = {
            view_name: "license plate creator - " + (n ? "create plate form" : "try lp editor")
          }, C = (0, r.useRef)(null), R = (0, r.useRef)(null), A = (0, r.useRef)(null), I = (0, r.useRef)(null), O = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            _(se.NEW_PLATE_FORM, A)
          }), [A.current]), (0, r.useEffect)((() => {
            f === Ce.NEW_PLATE && document.activeElement === O.current && O.current?.setSelectionRange(w, w)
          }), [w]), (0, r.useEffect)((() => {
            O?.current && f === Ce.NEW_PLATE && setTimeout((() => O?.current?.focus()), 1e3)
          }), [f, O?.current]);
          const j = f === Ce.NEW_PLATE ? 0 : -1,
            M = (0, r.useCallback)((() => {
              (async () => {
                if (n && h) try {
                  t(!0);
                  const {
                    error: e,
                    result: a
                  } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/validate", {
                    pingBearer: i,
                    fetchOptions: {
                      method: "POST"
                    },
                    query: {
                      plateText: h
                    }
                  });
                  if (t(!1), e) throw Object.assign(new Error(""), e);
                  const {
                    isMalformed: r,
                    isProfane: s,
                    isReserved: n,
                    isValid: o
                  } = a;
                  m({
                    isValid: o,
                    isMalformed: r,
                    isProfane: s,
                    isReserved: n,
                    statusPlateNumberBasis: h
                  }), o && (l(Ce.CONFIRM_ORDER), N({
                    ...T,
                    event: "virtualPageview",
                    display_type: y ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p(["api", e])
                }
              })()
            }), [n, h]);
          let L;
          return (0, r.useEffect)((() => {
            a && (a.current = M)
          }), [M, a]), L = (0, r.useMemo)((() => b?.filter((e => !e.isXmas2023Plate || e.isXmas2023Plate && v)).map((e => (0, x.jsx)(ta, {
            style: e,
            tabIndex: j
          }, e.id)))), [b, f]), (0, x.jsxs)("form", {
            ref: A,
            className: "rockstargames-modules-gtao-license-plated0ddb8fd0986a7382551faea1fad24fa",
            onSubmit: e => {
              e.preventDefault(), O.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, x.jsxs)("section", {
              children: [(0, x.jsx)("label", {
                htmlFor: "plate-text-input",
                ref: C,
                children: s("lp.create.title")
              }), (0, x.jsxs)("div", {
                ref: R,
                className: "rockstargames-modules-gtao-license-plateef9da71cf1e6161bfcff7856d32e9639",
                children: [(0, x.jsx)("i", {
                  className: "" + (!1 === P ? "rockstargames-modules-gtao-license-platec748df3952867c76489727613f414305" : "")
                }), (0, x.jsx)("input", {
                  id: "plate-text-input",
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    u(t), E(e.target.selectionStart || 0), k.isValid || m({
                      isValid: !0,
                      isMalformed: !1,
                      isProfane: !1,
                      isReserved: !1,
                      statusPlateNumberBasis: h
                    })
                  },
                  placeholder: "LOSANTOS",
                  pattern: "[a-zA-Z0-9]{4,10}",
                  type: "text",
                  onKeyDown: e => {
                    "Enter" === e.code && f === Ce.NEW_PLATE && O.current && O.current.blur()
                  },
                  value: S,
                  ref: O
                }), (0, x.jsx)(Qt, {
                  plateNumberStatus: k
                })]
              })]
            }), (0, x.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateadd724ae5e86972d7020c3691280e5f6"
            }), (0, x.jsxs)("section", {
              children: [(0, x.jsx)("label", {
                htmlFor: "plate-style-selector",
                children: s("lp.create.bgselector")
              }), (0, x.jsx)("div", {
                id: "plate-style-selector",
                ref: I,
                className: "rockstargames-modules-gtao-license-platecca6b8628101d08d64c8c82655607660",
                children: L
              })]
            })]
          })
        })),
        ra = e => {
          let {
            buttons: t,
            refName: a = se.SIDEBAR_BUTTONS,
            isLoading: s,
            tabIndex: n
          } = e;
          const i = (0, r.useRef)(null),
            {
              setRefs: o
            } = gt();
          return (0, r.useEffect)((() => {
            o(a, i)
          }), [i.current]), (0, x.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platecf91a67855e8fd02c5c67f9329f2e17a",
            ref: i,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, x.jsx)("button", {
                className: [a ? "rockstargames-modules-gtao-license-plateccb81fea118631a858202556b3cd2b00" : "", s ? "rockstargames-modules-gtao-license-platef3983e10eb76b520e409635d0f16a92f" : ""].join(" ").trim(),
                disabled: a,
                onClick: r,
                type: "button",
                tabIndex: n,
                "aria-label": t,
                children: t
              }, t)
            }))
          })
        },
        sa = "rockstargames-modules-gtao-license-plateb8ee1e50e3ee7d2a0c64ff5766f1d90d",
        na = "rockstargames-modules-gtao-license-platef5a6ad5cfb833ab500b3a27252e51e07",
        ia = (0, d.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            is3DToggle: a = !1,
            t: s
          } = e;
          const [n, i] = (0, r.useState)(!1), [o, l] = (0, r.useState)(!1), {
            state: d,
            setRefs: u
          } = gt(), {
            currentView: m,
            isMobile: p,
            is3D: _,
            shouldForce2D: g
          } = d, {
            track: f
          } = (0, c.useGtmTrack)(), b = {
            view_name: "license plate creator - create plate form"
          }, h = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            l(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            a || u(se.TOGGLE_VIEW_BUTTON, h)
          }), [h.current, a]), (0, r.useEffect)((() => {
            m === Ce.NEW_PLATE && g && i(!1)
          }), [g, m]), (0, r.useEffect)((() => {
            a || (m === Ce.NEW_PLATE ? n ? (f({
              ...b,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), f({
              ...b,
              event: "license_plate_preview_car"
            })) : f({
              ...b,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop"
            }) : i(!1))
          }), [n, m]);
          const k = {
              carViewToggle: {
                plateView: s("lp.create.plateview"),
                carView: s("lp.create.carview")
              },
              dimensionToggle: {
                threeDimensions: "3D",
                twoDimensions: "2D"
              }
            },
            y = a ? "Switch between 2D and 3D views" : "Switch between viewing the plate on a car and by itself";
          let v = "";
          return v = a ? _ ? k.dimensionToggle.threeDimensions : k.dimensionToggle.twoDimensions : n ? k.carViewToggle.carView : k.carViewToggle.plateView, (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsxs)("button", {
              ref: h,
              type: "button",
              "data-checked": a ? _ : n,
              className: "rockstargames-modules-gtao-license-platec79db25e7b0cf79a342e235bf34ad560",
              onClick: () => {
                t({
                  onStart: () => {
                    i(!n)
                  }
                })
              },
              tabIndex: 0,
              "aria-label": y,
              children: [(0, x.jsx)("div", {
                className: sa,
                children: (0, x.jsx)("p", {
                  className: o ? na : "",
                  children: a ? k.dimensionToggle.twoDimensions : k.carViewToggle.plateView
                })
              }), (0, x.jsx)("div", {
                className: sa,
                children: (0, x.jsx)("p", {
                  className: o ? na : "",
                  children: a ? k.dimensionToggle.threeDimensions : k.carViewToggle.carView
                })
              }), (0, x.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platecb346dd2e906d02e1fbafcc66427844f"
              })]
            }), (0, x.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platef3e0c00d2db570ef55ff1ed63a627bad",
              "aria-live": "polite",
              children: v
            })]
          })
        })),
        oa = {
          pillBtn: "rockstargames-modules-gtao-license-platee6fa8687abc44601278f108849868880",
          selected: "rockstargames-modules-gtao-license-platee89e587c75d075af96e3abee025d758d",
          orderConfirmed: "rockstargames-modules-gtao-license-platea3201b46675507cf815f8693188951bf",
          visible: "rockstargames-modules-gtao-license-platecc8040942e2a89ced64bf7bea8068168",
          background: "rockstargames-modules-gtao-license-platef0ea4a99a7042afcbf4b880eb0ace8ad",
          content: "rockstargames-modules-gtao-license-platee1472e99ea1f4f003f4316ebb892f011",
          secondaryWrap: "rockstargames-modules-gtao-license-platefd6005b1fee99cd35bedc530b25f15c0",
          contentHeading: "rockstargames-modules-gtao-license-plated924e0f65f0894d1be4a528943606c52",
          plateRedemptionInstructions: "rockstargames-modules-gtao-license-plateec9a8c7afbd7870b342d048aec9ca923",
          backToPlatesButton: "rockstargames-modules-gtao-license-platecddc8625c48ddbe3ed820a9690f027b8",
          hover: "rockstargames-modules-gtao-license-plated27d58c9e28d9d40bb9865204c9bae97",
          ctaText: "rockstargames-modules-gtao-license-platefa23d894a541a81230840520eba8d532",
          isWindows: "rockstargames-modules-gtao-license-plated4d11f8f71787a97fd7eee638ff06e83"
        },
        ca = (0, d.withTranslations)((e => {
          let {
            isVisible: t,
            vehicleModel: a,
            t: s,
            top: n,
            drawerY: i,
            tabIndex: o
          } = e;
          const {
            setCurrentView: l,
            setIsExpanded: d,
            setRefs: u,
            state: m
          } = gt(), {
            currentView: p,
            isExpanded: _,
            refs: g,
            three: f,
            isMobile: b,
            accessiblePlates: h
          } = m, k = (0, r.useRef)(null), y = (0, r.useRef)(null), v = (0, r.useRef)(null), w = (0, r.useRef)(null), E = (0, r.useRef)(null), {
            track: P
          } = (0, c.useGtmTrack)(), S = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(se.ORDER_BG, E)
          }), [E.current]);
          const N = g[se.CONFIRM_CONTENT]?.current,
            T = g[se.CONFIRM_SIDEBAR]?.current,
            C = g[se.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            R = g[se.CONFIRM_SIDEBAR_BUTTONS]?.current,
            A = g[se.NEW_PLATE_SIDEBAR]?.current,
            I = g[se.CANVAS_WRAP]?.current,
            O = g[se.SIDEBAR_BUTTONS]?.current,
            j = E.current,
            V = k.current,
            z = v.current,
            D = w.current,
            W = y.current,
            B = g[se.UI]?.current,
            U = g[se.NEW_PLATE_UI]?.current,
            $ = g[se.SIDEBAR]?.current,
            Y = g[se.ACCESSIBLE_PLATE_GRID]?.current,
            H = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            H.current = h
          }), [h]);
          const G = (0, r.useCallback)((() => {
            l(Ce.LIST_PLATES), P({
              ...S,
              event: "cta_return_page",
              text: "order received"
            })
          }), []);
          return (0, r.useEffect)((() => {
            if (!f || !H?.current) return;
            const {
              renderer: e,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: s,
              controls: o,
              originalControlsTarget: c
            } = f;
            if (!(e && j && N && Y)) return;
            const l = F();
            if (_ && p === Ce.LIST_PLATES) {
              const t = L().timeline({
                defaults: {
                  ease: le.transaction.confirmOrder.ease,
                  duration: le.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (L().to([e.domElement, $], {
                  autoAlpha: 1,
                  ease: le.transaction.fade.landingPage.ease,
                  duration: le.transaction.fade.landingPage.duration
                }), b) {
                const e = {
                  opacity: 1
                };
                t.to(e, {
                  drawerHeight: n,
                  opacity: 0,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const t = n - i.get();
                    j.style.transform = `translateY(${t}px)`, j.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(j, {
                autoAlpha: 0
              }, 0).to([V, z, D], {
                autoAlpha: 0
              }), t.to(N, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(j, {
                x: "-100vw"
              }, 0), L().set([A, U], {
                x: 0
              }), L().set(T, {
                left: "revert"
              })
            } else if (t) {
              const t = L().timeline({
                defaults: {
                  ease: le.transaction.confirmOrder.ease,
                  duration: le.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), L().set(I, {
                    x: 0
                  }), f.scene.traverse((e => {
                    e.name === Re.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), o?.current && (o.current.minDistance = 0, o.current.target.set(c.x, c.y, c.z)), B && (a.fov = s, a.updateProjectionMatrix(), ce.saturation.value = 0)
                },
                onStart: () => {
                  L().set(W, {
                    height: 0
                  })
                }
              });
              if (t.to(e.domElement, {
                  autoAlpha: 0
                }, 0), H.current.forEach(((e, t) => {
                  L().to(e.current.style, {
                    opacity: 0,
                    onComplete: 0 === t ? () => {
                      Y.style.transform = "none"
                    } : void 0
                  })
                })), t.to(V, {
                  autoAlpha: 1,
                  ease: M.Power1.easeIn,
                  duration: .3,
                  onComplete: () => {
                    V.focus()
                  }
                }, "<1").to(W, {
                  height: "auto",
                  ease: M.Power2.easeInOut,
                  duration: .4
                }, "<1").to([z, D], {
                  autoAlpha: 1,
                  ease: M.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), b) {
                if (i) {
                  L().set(j, {
                    y: n - i.get(),
                    zIndex: 100,
                    pointerEvents: "all",
                    visibility: "visible"
                  });
                  const e = {
                    drawerHeight: i.get(),
                    y: n,
                    lerp: 0
                  };
                  t.to(e, {
                    y: 0,
                    drawerHeight: n,
                    lerp: 1,
                    onUpdate: () => {
                      j.style.transform = `translateY(${n-e.drawerHeight}px`, i.set(e.drawerHeight), R && (R.style.pointerEvents = "none", R.style.opacity = String(1 - e.lerp), R.style.transform = `translateY(${100*e.lerp}%)`), C && (C.style.pointerEvents = "none", C.style.opacity = String(1 - e.lerp)), t.to(O, {
                        autoAlpha: 0
                      }, "<"), j.style.opacity = e.lerp
                    }
                  }, 0)
                }
              } else t.to(N, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(j, {
                x: 0
              }, 0).to(j, {
                autoAlpha: 1
              }, 0).to(T, {
                autoAlpha: 0,
                ease: le.transaction.fade.out.ease,
                duration: le.transaction.fade.out.duration
              }, 0).set(j, {
                pointerEvents: "all"
              }), T && t.to(T, {
                left: 100 - l + "vw"
              }, 0);
              P({
                ...S,
                event: "virtualPageview",
                display_type: b ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, E.current, f, p, b ? i : void 0]), (0, x.jsx)("div", {
            className: [oa.orderConfirmed, _ ? oa.visible : ""].join(" "),
            children: (0, x.jsx)("div", {
              ref: E,
              className: oa.background,
              children: (0, x.jsxs)("div", {
                className: oa.content,
                children: [(0, x.jsx)("h1", {
                  ref: k,
                  className: oa.contentHeading,
                  tabIndex: -1,
                  children: s("lp.success.title")
                }), (0, x.jsxs)("div", {
                  ref: y,
                  className: oa.secondaryWrap,
                  children: [(0, x.jsx)("p", {
                    ref: v,
                    className: oa.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: s("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, x.jsx)("button", {
                    ref: w,
                    type: "button",
                    className: oa.backToPlatesButton,
                    onClick: () => {
                      G()
                    },
                    "aria-label": s("lp.success.cta"),
                    tabIndex: o,
                    children: (0, x.jsx)("span", {
                      className: oa.ctaText,
                      children: s("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        })),
        la = (0, d.withTranslations)((e => {
          let {
            t,
            top: a,
            drawerY: s
          } = e;
          const {
            state: n,
            setError: i,
            setCurrentView: l,
            setIsOrderConfirmed: u,
            setPendingOrder: m,
            setRefs: p,
            setSelectedVehicle: _
          } = gt(), {
            currentView: g,
            selectedVehicle: f,
            pendingOrder: b,
            plates: h,
            three: k,
            isMobile: y,
            refs: v,
            vehicles: w,
            selectedStyle: E,
            isOrderConfirmed: P,
            isExpanded: S
          } = n, {
            selectedCharacterTuple: N
          } = (0, c.useRockstarUserState)(), {
            loggedIn: T
          } = (0, c.useRockstarUser)(), C = (0, o.useRockstarTokenPing)(), R = g === Ce.CONFIRM_ORDER, [A, I] = (0, r.useState)(S), [O, j] = (0, r.useState)(!1), M = (0, r.useRef)(null), z = (0, r.useRef)(null), D = (0, r.useRef)(null), {
            track: W
          } = (0, c.useGtmTrack)(), B = {
            view_name: "license plate creator - confirm order"
          }, U = g === Ce.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(se.CONFIRM_SIDEBAR, M)
          }), [M.current]), (0, r.useEffect)((() => {
            p(se.CONFIRM_CONTENT, z)
          }), [z.current]);
          const $ = v[se.ORDER_BG]?.current,
            Y = v[se.CONFIRM_CONTENT]?.current,
            G = v[se.CONFIRM_SIDEBAR]?.current,
            q = v[se.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            X = v[se.CONFIRM_SIDEBAR_BUTTONS]?.current,
            Z = v[se.ACCESSIBLE_PLATE_GRID]?.current,
            K = v[se.NEW_PLATE_SIDEBAR]?.current,
            J = v[se.CANVAS_WRAP]?.current,
            Q = v[se.SIDEBAR_BUTTONS]?.current,
            ee = v[se.NEW_PLATE_UI]?.current;

          function te() {
            if (W({
                ...B,
                event: "virtualPageview",
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(k?.camera && Y && G && J && $ && Z)) return;
            const e = {
                ease: y ? le.sidebar.mobile.drawer.ease : le.transaction.confirmOrder.ease,
                duration: y ? le.sidebar.mobile.drawer.duration : le.transaction.confirmOrder.duration
              },
              t = L().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  I(!1)
                }
              });
            Q && L().set(Q, {
              pointerEvents: "all"
            }), y ? t.to(Q, {
              autoAlpha: 1
            }, "<") : (G && t.to(G, {
              autoAlpha: 0
            }, 0), g === Ce.NEW_PLATE && t.to(K, {
              autoAlpha: 1
            }, "<"), t.to([K, J, ee], {
              x: 0
            }, "<"), t.to(Y, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === Ce.LIST_PLATES && A && te()
          }), [g, A]);
          const ae = (0, r.useCallback)((() => {
            (async () => {
              try {
                const e = V(E);
                if (!(T && f && e?.name && N)) return;
                const [t, a] = N, {
                  index: r
                } = f, s = {
                  vehicleIndex: r,
                  plateText: h?.[0]?.plateText,
                  plateStyle: e.name
                };
                j(!0);
                const {
                  error: n
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: C,
                  fetchOptions: {
                    body: JSON.stringify(s),
                    method: "POST"
                  },
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (j(!1), n) throw Object.assign(new Error(""), n);
                u(!0);
                const {
                  error: i,
                  result: o
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: C,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (i) throw Object.assign(new Error(""), i);
                o[`character${a}Pending`] && m(o)
              } catch (e) {
                i(["api", e])
              }
            })()
          }), [T, N, h?.[0]?.plateText, f, O, E]);
          (0, r.useEffect)((() => {
            if (g !== Ce.CONFIRM_ORDER || P) {
              if (y && !P) {
                Q && L().set(Q, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                L().to(e, {
                  lerp: 1,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    X && (X.style.opacity = "" + (1 - e.lerp), X.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), G && L().to(G, {
                  autoAlpha: 0,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease
                }), q && (q.style.pointerEvents = "none", L().to(q.style, {
                  opacity: 0,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(k?.camera && Y && G && J && $ && Z)) return;
              let e = F();
              y || 100 !== e || (e = 0);
              const t = L().timeline({
                  defaults: {
                    ease: le.transaction.confirmOrder.ease,
                    duration: le.transaction.confirmOrder.duration
                  },
                  onComplete: () => {
                    I(!0), D.current?.focus()
                  }
                }),
                a = {
                  autoAlpha: 1
                },
                r = {
                  autoAlpha: 0
                };
              if (Q && L().set(Q, {
                  pointerEvents: "none"
                }), y && (a.ease = le.sidebar.mobile.drawer.ease, a.duration = le.sidebar.mobile.drawer.duration, a.delay = le.sidebar.mobile.drawer.duration / 2, r.ease = le.sidebar.mobile.drawer.ease, r.duration = le.sidebar.mobile.drawer.duration, G && t.to(G, a, 0), Z)) {
                const e = {
                    current: 0
                  },
                  a = {
                    start: Number(getComputedStyle(Z).opacity),
                    end: 1
                  };
                t.to(e, {
                  current: 1,
                  delay: le.sidebar.mobile.drawer.duration / 2,
                  onUpdate: () => {
                    const {
                      current: t
                    } = e, r = (0, ht.Cc)(a.start, a.end, t);
                    Z.style.opacity = r
                  }
                }, 0)
              }
              if (y) {
                if (X) {
                  X.style.pointerEvents = "all", L().set(X.style, {
                    visibility: "visible"
                  });
                  const e = {
                    lerp: 0
                  };
                  L().to(e, {
                    lerp: 1,
                    duration: le.sidebar.mobile.drawer.duration,
                    ease: le.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      X.style.opacity = e.lerp, X.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                q && (q.style.pointerEvents = "all", L().set(q.style, {
                  visibility: "visible"
                }), L().to(q.style, {
                  opacity: 1,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease
                })), t.to(Q, {
                  autoAlpha: 0
                }, "<")
              } else {
                if (K && J && (t.to([K, J, ee], {
                    x: -1 * e + "vw"
                  }, "<"), Z)) {
                  const {
                    x: a,
                    y: r,
                    scale: s
                  } = H(Z), n = {
                    x: {
                      start: Number(a),
                      end: Number(a) + -e / 100 * window.innerWidth
                    },
                    y: {
                      start: Number(r),
                      end: Number(r)
                    },
                    scale: {
                      start: s,
                      end: 1
                    }
                  }, i = {
                    current: 0
                  };
                  t.to(i, {
                    current: 1,
                    onUpdate: () => {
                      const {
                        current: e
                      } = i, t = `translate(${(0,ht.Cc)(n.x.start,n.x.end,e)}px, ${(0,ht.Cc)(n.y.start,n.y.end,e)}px) scale(${(0,ht.Cc)(n.scale.start,n.scale.end,e)})`;
                      Z.style.transform = t
                    }
                  }, "<")
                }
                t.to(Y, {
                  x: 100 - e + "vw"
                }, "<"), G && t.to(G, {
                  autoAlpha: 1
                }, "<"), t.to(K, {
                  autoAlpha: 0
                }, "<"), t.set($, {
                  x: `${-100+e}vw`
                }, "<")
              }
            }
            A && !R && P && u(!1)
          }), [k, g, y, X, P, q, F()]), (0, r.useEffect)((() => {
            if (g !== Ce.CONFIRM_ORDER && w?.length) {
              let e = w[0];
              if (b) {
                const t = w.find((e => {
                  let {
                    manufacturer: t,
                    name: a
                  } = e;
                  return t === b.manufacturerName && a === b.vehicleName
                }));
                t && (e = t)
              }
              _(e)
            }
          }), [w, b]);
          const re = (0, r.useCallback)((e => {
              if (!w?.length) return;
              const t = w.find((t => {
                let {
                  id: a
                } = t;
                return a === Number(e.target.value)
              })) ?? null;
              _(t), W({
                ...B,
                event: "license_plate_select_vehicle",
                position: e.target.selectedIndex
              })
            }), [w]),
            ne = (0, x.jsx)(ra, {
              refName: se.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: O,
                onClick: () => {
                  l(Ce.NEW_PLATE), te(), W({
                    ...B,
                    event: "cta_cancel",
                    text: "cancel"
                  })
                }
              }, {
                buttonText: O ? (0, x.jsx)(Jt, {}) : t("lp.confirm.next"),
                isDisabled: !T || !f || O,
                onClick: () => {
                  ae(), W({
                    ...B,
                    event: "license_plate_create_confirm",
                    text: "confirm"
                  })
                }
              }],
              isLoading: O,
              tabIndex: U
            });
          let ie;
          return y && (ie = q ? (0, Mt.createPortal)(ne, q) : null), (0, x.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platea29469cb6841adfdb317c0863c552ee1",
            "aria-hidden": g !== Ce.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, x.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateab4356b7d6ef5a4a6201db746fc5a985",
              ref: z,
              children: [(0, x.jsx)("span", {}), (0, x.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateccf3da9613752077116fd5ec0338c7a9",
                ref: M,
                children: [(0, x.jsxs)("form", {
                  className: "rockstargames-modules-gtao-license-platef11b2e09ddb486e97daf0b4e6d31e0a0",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, x.jsxs)("div", {
                    className: "rockstargames-modules-gtao-license-plateac9d03dae4df339b590e83d075364ece",
                    children: [(0, x.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, x.jsxs)("section", {
                      children: [(0, x.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, x.jsx)("div", {
                        className: "rockstargames-modules-gtao-license-platece60e8e785ccb4092aab63da0a0cf30c",
                        children: (0, x.jsx)("select", {
                          ref: D,
                          value: f?.id ?? "null",
                          onChange: re,
                          required: !0,
                          tabIndex: U,
                          "aria-label": t("lp.confirm.selector"),
                          children: w?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: s
                            } = e;
                            return (0, x.jsx)("option", {
                              value: a,
                              children: `${r||""} ${s}`.trim()
                            }, t)
                          }))
                        })
                      }), (0, x.jsx)("p", {
                        className: "rockstargames-modules-gtao-license-platedbaabca0190273add141f7d25c2ed3ed",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, x.jsx)("p", {
                    className: "rockstargames-modules-gtao-license-plateb5fcb2ced6788958d5dbbc1284fbbda3",
                    children: t("lp.confirm.info")
                  })]
                }), y ? ie : ne]
              }), (0, x.jsx)(ca, {
                drawerY: s,
                top: a,
                isVisible: P,
                vehicleModel: `${f?.manufacturer||""} ${f?.name}`.trim(),
                tabIndex: P ? U : -1
              })]
            })
          })
        })),
        da = {
          pillBtn: "rockstargames-modules-gtao-license-plateb335eb9f369d01bb23e18b2ac61a1465",
          selected: "rockstargames-modules-gtao-license-platefb4227f64cf16cbe0ecb0353adeb2909",
          CTAWrap: "rockstargames-modules-gtao-license-platecafeb080e640b040ecda82ddea315db4",
          loggedOut: "rockstargames-modules-gtao-license-plateeda8b08aa17ebb271744399f20c1a14c",
          maxPlatesReachedWrap: "rockstargames-modules-gtao-license-platece0c4b63b7795c479ee0445aeabd0780",
          newOrder: "rockstargames-modules-gtao-license-plateea9331159694683cf27df89692246f78",
          loggedOutShader: "rockstargames-modules-gtao-license-plateac963f5692a153f6568bed137619a03d",
          pendingOrderShader: "rockstargames-modules-gtao-license-plateae1ef88377e4db0b3b80288e537b8dc8",
          visible: "rockstargames-modules-gtao-license-plateeee81a20e55e9d8d8a5832b564271a1c",
          createNewPlate: "rockstargames-modules-gtao-license-plated81f39414ae12cce855f3e34af37da9c",
          signIn: "rockstargames-modules-gtao-license-platee32d75ec6aecb2c7362668ef1b48b3d0",
          hover: "rockstargames-modules-gtao-license-platee6564750b865a4940e98058dde3d67b6",
          ctaText: "rockstargames-modules-gtao-license-platedaaf8fc79e1ce78d52e15d8b892ebfa4",
          isWindows: "rockstargames-modules-gtao-license-plated7c83336e3e27e98c8f8a725e275c1eb",
          tryWithoutSigningIn: "rockstargames-modules-gtao-license-plated596ae90e6cb9fa24eb00b42cd749ec7",
          maxPlatesReached: "rockstargames-modules-gtao-license-plateab8e37b20f2464b273824d5efe215a76",
          hidden: "rockstargames-modules-gtao-license-platebe7765facc4eb66343cc0134b0d77235",
          loggedOutCTA: "rockstargames-modules-gtao-license-platea33805ac05cfcc38a4af2065c5405781",
          ctaIcon: "rockstargames-modules-gtao-license-platea9e9fc421475bea28dbe3e806f715c89"
        },
        ua = "hidden",
        ma = "visible",
        pa = (0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setShouldRenderScene: a,
            setShouldForce2D: s,
            state: n,
            setCurrentView: i,
            setLastView: o,
            setIsScrollEnabled: l,
            setIsExpanded: d,
            setRefs: u
          } = gt(), {
            loggedIn: p
          } = (0, c.useRockstarUser)(), {
            accessiblePlates: _,
            currentView: g,
            gridScale: f,
            gridState: b,
            loginUrl: h,
            is3D: k,
            isMobile: y,
            isExpanded: v,
            isScrollEnabled: w,
            lastScrollY: E,
            lastView: P,
            pendingOrder: S,
            plateNumber: N,
            plateNumberStatus: T,
            refs: C,
            three: R,
            realHeight: A,
            shouldForce2D: I
          } = n, [O, j] = (0, r.useState)(0), [M, V] = (0, r.useState)(!1), [z, D] = (0, r.useState)(!1), [F, U] = (0, r.useState)(.4 * window.innerHeight), [Y, q] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), X = (0, r.useRef)(F), [K, J] = (0, r.useState)(null), [Q, ee] = (0, r.useState)(!1), [ne, ie] = (0, r.useState)(null), oe = (0, r.useRef)(null), ue = (0, r.useRef)(null), me = (0, r.useRef)(null), pe = (0, r.useRef)(null), ke = (0, r.useRef)(null), ye = (0, r.useRef)(!1), xe = (0, r.useRef)(!1), [we, Ee] = (0, r.useState)(null), Ae = (0, r.useRef)(we), Ie = (0, r.useRef)(null), Oe = (0, r.useRef)(null), je = (0, r.useRef)(null), Me = (0, r.useRef)(null), Le = (0, r.useRef)(null), Ve = (0, r.useRef)(null), ze = (0, r.useRef)(null), De = (0, r.useRef)(null), We = (0, r.useRef)(null), Be = (0, r.useRef)(null), Fe = (0, r.useRef)(null), Ue = (0, r.useRef)(null), {
            track: $e
          } = (0, c.useGtmTrack)(), Ye = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            _?.[0]?.current && g === Ce.NEW_PLATE && ie(H(_[0].parentElement))
          }), [_, g]);
          const He = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            ne && (He.current = ne)
          }), [ne]), (0, r.useEffect)((() => {
            const e = g === Ce.NEW_PLATE || !(!W() || g !== Ce.CONFIRM_ORDER);
            M !== e && V(e), e || ee(!1)
          }), [g, W()]);
          const Ge = (0, r.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!R) return;
            const {
              scene: a,
              camera: r,
              controls: s,
              renderer: n
            } = R, i = a.getObjectByName("Scene");
            if (!i) return;
            const o = $(),
              c = y && g === Ce.CONFIRM_ORDER ? 1.5 : 1,
              d = !B() || y ? o * f * c : 1.6 * o * f,
              u = [];
            a.traverse((e => {
              0 === e.userData.index && (Fe.current = e, i.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === Re.LP && u.push(e)
            }));
            const b = y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
              h = L().timeline({
                defaults: {
                  duration: b,
                  ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease
                },
                onStart: () => {
                  Ae.current || (s.current.minDistance = 0)
                }
              });
            switch (e) {
              case ma: {
                const e = C[se.CTA_SHADER]?.current;
                if (!s.current || !e) return;
                const i = new m.Vector3;
                Fe?.current && Fe.current.getWorldPosition(i);
                const o = C[se.ROOT].current,
                  b = document.getElementById("list-plates-sidebar"),
                  x = C[se.CANVAS_WRAP].current,
                  E = _?.[0].current;
                o && (b || y) && E && x && (g === Ce.NEW_PLATE || y && g === Ce.CONFIRM_ORDER) && Xe(h, t);
                const N = (new m.Vector3).copy(i);
                Ae.current && (N.z = i.z - 5 * f);
                const T = {
                  cameraPosition: {
                    start: (new m.Vector3).copy(r.position),
                    end: new m.Vector3(i.x, i.y, i.z + d)
                  },
                  controlsTarget: {
                    start: (new m.Vector3).copy(s.current.target),
                    end: N
                  },
                  plateOpacity: u.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t && k ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: ce.saturation.value,
                    end: 1
                  },
                  firstPlateOpacity: {
                    start: P === Ce.LIST_PLATES ? .2 : 1,
                    end: 1
                  },
                  cameraFov: {
                    start: r.fov,
                    end: y && g === Ce.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (y && E) {
                  const e = H(E.parentElement);
                  T.translateY = {
                    start: g === Ce.NEW_PLATE ? Ue?.current?.offsetHeight : 0,
                    end: g === Ce.NEW_PLATE ? 0 : Ue?.current?.offsetHeight
                  }, T.startingDrawerHeight = oe.current ? oe.current.get() : 0, T.startingCanvasHeight = Number(H(n.domElement).y), T.canvasWidth = n.domElement.offsetWidth, T.canvasY = {
                    start: Number(H(n.domElement).y),
                    end: .4 * window.innerHeight / -2
                  }, T.canvasYConfirmOrder = {
                    start: Number(H(n.domElement).y),
                    end: Y / 1.5
                  }, T.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (T.canvasYConfirmOrder.end - T.canvasYConfirmOrder.start)
                  }, T.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, T.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(H(E.parentElement).scale),
                    end: Number(H(E.parentElement).scale) / c
                  }, T.drawerHeight = {
                    start: oe.current ? oe.current.get() : 0,
                    end: g === Ce.NEW_PLATE ? 0 : Y / (v ? 1 : 2)
                  }, T.cameraFov = {
                    start: r.fov,
                    end: g === Ce.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  }, T.canvasOpacity = {
                    start: n.domElement.style.opacity,
                    end: 1
                  }
                }
                const R = {
                  current: 0
                };
                if (g === Ce.NEW_PLATE) {
                  const i = E.querySelector("canvas");
                  h.to(R, {
                    current: 1,
                    duration: y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                    onUpdate: () => {
                      const a = t ? 1 : R.current,
                        o = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, a);
                      r.position.set(o.x, o.y, o.z);
                      const c = T.controlsTarget.start.clone().lerp(T.controlsTarget.end, a);
                      s.current.target.x = c.x, s.current.target.y = c.y, s.current.target.z = c.z, u.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, ht.Cc)(T.plateOpacity[t].start, T.plateOpacity[t].end, a))
                      }));
                      const l = (0, ht.Cc)(T.firstPlateSaturation.start, T.firstPlateSaturation.end, a);
                      if (ce.saturation.value = l, p && !S && i) {
                        const e = !!S,
                          t = (0, ht.Cc)(T.firstPlateOpacity.start, T.firstPlateOpacity.end, a);
                        i.style.filter = `saturate(${l})${!e&&` opacity(${t})`}`
                      }
                      if (e) {
                        const t = (0, ht.Cc)(T.ctaShaderOpacity.start, T.ctaShaderOpacity.end, a);
                        e.style.opacity = t
                      }
                      if (T.cameraFov.start !== T.cameraFov.end && r.updateProjectionMatrix(), y) {
                        if (Ue.current) {
                          const e = (0, ht.Cc)(T.translateY.start, T.translateY.end, a);
                          Ue.current.style.transform = `translateY(${e}px)`, Ue.current.style.opacity = String(a), Ue.current.style.pointerEvents = "all"
                        }
                        oe.current && oe.current.set((0, ht.Cc)(T.drawerHeight.start, T.drawerHeight.end, a));
                        const e = (0, ht.Cc)(T.canvasY.start, T.canvasY.end, a);
                        n.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      y ? document.body.style.touchAction = "none" : l(!1)
                    },
                    onComplete: () => {
                      g === Ce.NEW_PLATE && (o && (o.style.touchAction = "none"), pe.current = new m.Vector3(r.position.x, r.position.y, r.position.z), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), y && (n.domElement.style.touchAction = "none", w && setTimeout((() => {
                        l(!1), document.body.style.touchAction = "auto"
                      }), 200), me.current = H(n.domElement).y), i && i.classList.remove(da.newOrder), n.render(a, r))
                    }
                  }, 0), y && h.to(C[se.NEW_PLATE_FORM].current, {
                    autoAlpha: 1,
                    duration: t ? 0 : le.sidebar.mobile.drawer.duration,
                    ease: le.sidebar.mobile.drawer.ease,
                    delay: le.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      Ue.current && (Ue.current.style.pointerEvents = "all", Ue.current.style.visibility = "visible")
                    }
                  }, 0), h.to([Ve.current, y ? void 0 : Le.current], {
                    autoAlpha: 1,
                    duration: t ? 0 : le.sidebar.in.duration,
                    ease: le.sidebar.in.ease,
                    delay: le.sidebar.in.delay,
                    onStart: () => {
                      ze.current && (ze.current.style.transform = "translateY(0px)")
                    },
                    onComplete: () => {
                      y || L().set([Le.current, C[se.SIDEBAR_BUTTONS]?.current], {
                        pointerEvents: "all"
                      }), Ve.current && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      }))
                    }
                  }, "<")
                } else g === Ce.CONFIRM_ORDER && (!0 === Ae.current && st(), y && (h.to(R, {
                  current: 1,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = R;
                    if (Ue.current) {
                      oe.current && oe.current.set((0, ht.Cc)(T.drawerHeight.start, T.drawerHeight.end, e));
                      const t = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, e);
                      r.position.set(t.x, t.y, t.z), n.domElement.style.opacity = (0, ht.Cc)(T.canvasOpacity.start, T.canvasOpacity.end, e), Ve?.current?.style && (Ve.current.style.opacity = String(1 - e));
                      const a = (0, ht.Cc)(T.translateY.start, T.translateY.end, e);
                      Ue.current.style.transform = `translateY(${a}px)`, Ue.current.style.pointerEvents = "none";
                      const s = (0, ht.Cc)(T.canvasYConfirmOrder.start, T.canvasYConfirmOrder.end, e);
                      n.domElement.style.transform = `translateY(${s}px)`;
                      const i = (0, ht.Cc)(T.accessiblePlateGridXConfirmOrder.start, T.accessiblePlateGridXConfirmOrder.end, e),
                        o = (0, ht.Cc)(T.accessiblePlateGridYConfirmOrder.start, T.accessiblePlateGridYConfirmOrder.end, e),
                        c = (0, ht.Cc)(T.accessiblePlateGridScaleConfirmOrder.start, T.accessiblePlateGridScaleConfirmOrder.end, e);
                      E?.parentElement && (E.parentElement.style.transform = `translate(${i}px,\n                                        ${o}px) scale(${c})`)
                    }
                  }
                }, 0), h.to(C[se.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), L().to(Ve.current, {
                    autoAlpha: 0,
                    duration: le.sidebar.out.duration,
                    ease: le.sidebar.out.ease,
                    delay: le.sidebar.out.delay
                  }), y && Ue?.current) {
                  const e = {
                    transform: 0,
                    translateY: H(Ue.current).y,
                    drawerHeight: oe.current ? oe.current.get() : 0,
                    fov: r.fov
                  };
                  L().to(e, {
                    translateY: Ue?.current?.offsetHeight,
                    duration: le.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: ke.current,
                    ease: le.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Ue.current && (oe.current && oe.current.set(e.drawerHeight), Ue.current.style.transform = `translateY(${e.translateY}px)`, Ue.current.style.pointerEvents = "none", r.fov = e.fov, r.updateProjectionMatrix())
                    }
                  })
                }
                if (g === Ce.CONFIRM_ORDER ? v || 1 == !Ae.current && L().to(r.position, {
                    x: Number(pe.current.x),
                    y: Number(pe.current.y),
                    z: 0,
                    ease: le.transaction.confirmOrder.ease,
                    duration: le.transaction.confirmOrder.duration
                  }) : L().to(Le.current, {
                    autoAlpha: 0,
                    duration: le.sidebar.out.duration,
                    ease: le.sidebar.out.ease,
                    delay: le.sidebar.out.delay
                  }), g === Ce.LIST_PLATES) {
                  const e = C[se.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                s?.current && (s.current.minDistance = 0), Ae.current = !1, Ee(!1)
            }
          }), [g, R, C, y, S, f, b, E, P, A, K, Y, oe.current, Ae.current, k]);
          (0, r.useEffect)((() => {
            C?.[se.SIDEBAR_BUTTONS]?.current && (Ue.current = C[se.SIDEBAR_BUTTONS].current)
          }), [C]), (0, r.useEffect)((() => {
            u(se.NEW_PLATE, We)
          }), [We.current]), (0, r.useEffect)((() => {
            u(se.CONFIRM_SIDEBAR_BUTTONS_PORTAL, De)
          }), [De.current]), (0, r.useEffect)((() => {
            u(se.NEW_PLATE_SIDEBAR, Le)
          }), [Le.current]), (0, r.useEffect)((() => {
            u(se.NEW_PLATE_UI, Ve)
          }), [Ve.current]);
          const qe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            qe.current = R
          }), [R]), (0, r.useEffect)((() => {
            ue.current = E
          }), [E]);
          const Xe = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!R?.controls || !_?.[0]) return;
              const {
                controls: a
              } = R, r = e || L().timeline({
                defaults: {
                  duration: 0,
                  ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), s = $(), n = y && g === Ce.CONFIRM_ORDER ? 1.5 : 1, o = !B() || y ? s * f * n : 1.6 * s * f, c = C[se.ROOT].current, l = document.getElementById("list-plates-sidebar"), d = C[se.CANVAS_WRAP].current, u = _[0].current;
              if (c && (y || l) && u && d) {
                const e = G(0, c, Number(A.replace("px", "")), b, y ? void 0 : {
                    x: l.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  s = H(d),
                  n = H(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(s.x),
                    y: a.top + a.height / 2 - Number(s.y)
                  },
                  p = 5 / o,
                  g = y || i() !== Ce.CONFIRM_ORDER ? 0 : -1 * l.offsetWidth,
                  f = {
                    x: m.x - e.x + g,
                    y: m.y - e.y - 80 + (P === Ce.CONFIRM_ORDER || t ? E : window.scrollY)
                  },
                  h = {
                    current: 0
                  },
                  k = _.map((e => Number(getComputedStyle(e?.current).getPropertyValue("opacity")))),
                  v = P === Ce.CONFIRM_ORDER ? le.transaction.confirmOrder.ease : le.clickPlate.ease,
                  x = P === Ce.CONFIRM_ORDER ? le.transaction.confirmOrder.duration : le.clickPlate.duration,
                  w = .4 * window.innerHeight,
                  S = y ? le.sidebar.mobile.drawer.duration : x,
                  N = t ? 0 : S;
                r.to(h, {
                  current: 1,
                  ease: y ? le.sidebar.mobile.drawer.ease : v,
                  duration: N,
                  onComplete: () => {
                    ie(H(u.parentElement)), ee(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = h, r = (0, ht.Cc)(Number(n.x), f.x, a), s = (0, ht.Cc)(Number(n.y), f.y + (y ? w / -2 : 0), a), i = (0, ht.Cc)(Number(n.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${s}px) scale(${i})`, t || _.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, ht.Cc)(k[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [b, A, y, g, F, R, _, C, P, je?.current, E]),
            Ze = (0, r.useCallback)((() => {
              if (!R?.controls) return;
              const {
                controls: e,
                scene: t
              } = R, a = L().timeline({
                duration: y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                onStart: () => {
                  e?.current && !Ae.current && (e.current.minDistance = 0)
                }
              });
              let r;
              et(a, f, !0), t.traverse((e => {
                0 === e.userData.index && (r = e)
              })), r && L().to(r.material, {
                duration: 0,
                ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                opacity: k ? 1 : 0
              });
              const {
                renderer: s
              } = qe.current;
              M ? (g === Ce.NEW_PLATE && (W() ? s.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : s.domElement.style.transform = "translateY(0px)", Le?.current && (Le.current.style.opacity = "1", Le.current.style.visibility = "visible", Le.current.style.pointerEvents = "all")), g === Ce.CONFIRM_ORDER && W() && (s.domElement.style.transform = `translateY(${Y/1.5}px)`)) : g !== Ce.CONFIRM_ORDER || W() || (s.domElement.style.transform = "translateY(0px)"), i() !== Ce.NEW_PLATE && i() !== Ce.CONFIRM_ORDER || Xe(null, !0), W() && Je(), Ae.current && rt({
                isResize: !0,
                onComplete: null,
                delay: 0
              })
            }), [W(), M, k, g, R, Le.current, f, E]),
            Ke = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!Fe?.current || !pe.current || !R?.camera) return;
              $e({
                ...Ye,
                event: "modal_close",
                element_placement: "new plate",
                view_name: "license plate creator - new plate form"
              }), $e({
                ...Ye,
                event: "cta_return_page",
                text: "(close button)"
              });
              const {
                camera: a,
                scene: r,
                controls: s,
                renderer: n
              } = R, i = r.getObjectByName("Scene"), o = r.getObjectByName("Light1"), c = r.getObjectByName("Light2"), l = r.getObjectByName("Light3"), d = n.domElement, u = L().timeline({
                defaults: {
                  ease: le.toggleView.camera.ease,
                  duration: t ? 0 : le.toggleView.camera.duration
                },
                onStart: () => {
                  s?.current && (s.current.minDistance = 2, s.current.enableZoom = !1, s.current.enabled = !1)
                },
                onComplete: () => {
                  s?.current && (s.current.minDistance = 0, s.current.maxPolarAngle = de.plateView.maxPolarAngle, s.current.minPolarAngle = de.plateView.minPolarAngle, s.current.maxAzimuthAngle = de.plateView.maxAzimuthAngle, s.current.minAzimuthAngle = de.plateView.minAzimuthAngle, s.current.enableZoom = !1), X.current = 0, e.onComplete && e.onComplete()
                }
              });
              u.to(a.position, {
                x: Number(pe.current.x),
                y: Number(pe.current.y),
                z: Number(pe.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(Fe.current.rotation, {
                x: 0
              }, "<").to(o, {
                intensity: 0
              }, "<").to([c, l], {
                intensity: Se
              }, "<").to(c.position, {
                x: _e,
                y: ge,
                z: fe
              }, "<").to(l.position, {
                x: he
              }, "<").set(Fe.current, {
                receiveShadow: !1
              }, .4).set(Fe.current.material, {
                depthTest: !1
              }, "<"), Fe?.current?.material && u.to(Fe.current.material, {
                envMapIntensity: Ne
              }, "<"), i.traverse((e => {
                e.material && L().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : le.toggleView.fadeOut.duration,
                  ease: le.toggleView.fadeOut.ease
                })
              }))
            }), [Fe.current, pe.current, R]);
          (0, r.useEffect)((() => {
            R?.scene && !ke.current && (ke.current = R.camera.fov)
          }), [ke.current, R]), (0, r.useEffect)((() => {
            R?.scene && Ue.current && Ge(M ? ma : ua)
          }), [R, M, g === Ce.CONFIRM_ORDER, P]), (0, r.useEffect)((() => {
            R?.scene && Ue.current && Ge(M ? ma : ua, !0)
          }), [y]);
          const Je = (0, r.useCallback)((() => {
            if (Ue?.current && y && We.current) {
              const e = We.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              j(a - 48 - Ue.current.offsetHeight - t), U(a), q(-1 * (.6 * e - 80)), Ue.current.style.transform = `translateY${Ue.current.offsetHeight}px`
            }
          }), [Ue.current, y, We.current]);
          (0, r.useEffect)((() => {
            Je()
          }), [Ue.current, y, We.current]), (0, r.useEffect)((() => {
            Oe.current || (Oe.current = g), je.current || (je.current = Oe.current), g && (je.current = Oe.current, o(Oe.current), Oe.current = g), g === Ce.LIST_PLATES && Ae.current && Ke({}, !0), g === Ce.NEW_PLATE && (Me.current = !1)
          }), [g]), (0, r.useEffect)((() => {
            const e = y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
              t = Q ? 0 : e;
            if (!R?.scene) return;
            if (!R?.scene || !_?.[0]?.current) return;
            const {
              scene: r,
              renderer: s,
              camera: n
            } = R, o = [], c = [], l = _[0].current;
            if (r.traverse((e => {
                e.name === Re.LP && e.material ? c[e.userData.index] = e.material : o.push(e.material)
              })), i() === Ce.NEW_PLATE)
              if (k) {
                const e = c[0];
                if (L().to(e, {
                    opacity: 1,
                    delay: t,
                    duration: y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                    onStart: () => {
                      a(!0), L().to(l.style, {
                        opacity: 0,
                        duration: le.accessibilePlate.duration,
                        ease: le.accessibilePlate.ease,
                        onComplete: () => {
                          xe.current = !1
                        }
                      })
                    }
                  }), !Me.current) {
                  const e = r.getObjectByName("Light4"),
                    a = new m.Vector3;
                  Fe?.current && (Fe.current.getWorldPosition(a), L().to(e.position, {
                    x: Pe.x,
                    y: a.y + Pe.y,
                    z: Pe.z,
                    delay: t,
                    duration: le.plateShimmer.duration,
                    ease: le.plateShimmer.ease
                  }));
                  const s = {
                    current: 0
                  };
                  L().to(s, {
                    current: 1,
                    delay: t,
                    duration: le.plateShimmer.duration,
                    ease: le.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: t
                      } = s, a = (0, ht.Cc)(0, Math.PI, t);
                      e.intensity = .3 * Math.sin(a), e.color = new m.Color(a, .9 * a, a)
                    }
                  }), Me.current = !0
                }
              } else {
                const e = c[0];
                L().to(l.style, {
                  opacity: 1,
                  duration: le.accessibilePlate.duration,
                  ease: le.accessibilePlate.ease,
                  onStart: () => {
                    L().to(e, {
                      opacity: 0,
                      duration: le.accessibilePlate.duration,
                      ease: le.accessibilePlate.ease,
                      onComplete: () => {
                        a(!1), xe.current = !1, s.render(r, n)
                      }
                    })
                  }
                })
              }
          }), [k, y, R, _]), (0, r.useEffect)((() => {
            if (i() === Ce.NEW_PLATE && Q && R?.camera) {
              const {
                camera: e
              } = R, t = k ? 0 : .5;
              k || L().to(e.position, {
                duration: t,
                x: Number(pe.current.x),
                y: Number(pe.current.y),
                z: Number(pe.current.z)
              })
            }
          }), [k, R]);
          const Qe = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            f && (Qe.current = f), i() === Ce.NEW_PLATE || i() === Ce.CONFIRM_ORDER ? Ze() : W() && (Je(), J(window.innerHeight), Ue.current && (Ue.current.style.transform = `translateY(${Ue.current.offsetHeight}px`))
          }), [f]);
          const et = (0, r.useCallback)((function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (Oe.current !== Ce.NEW_PLATE && Oe.current !== Ce.CONFIRM_ORDER) return;
              const {
                renderer: r
              } = R;
              Z({
                plateIndex: 0,
                three: R,
                timeline: e,
                gridScale: t
              }, {
                onComplete: e => {
                  e?.three?.camera && (pe.current = new m.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), y && (r.domElement.style.touchAction = "none")
                },
                tweenPosition: 0,
                isResize: a
              })
            }), [R, g]),
            tt = (0, r.useCallback)((e => {
              if (!R?.scene) return;
              const {
                drawerStateRef: t
              } = e, a = _?.[0]?.current;
              if (a) {
                const {
                  renderer: e,
                  camera: r
                } = R, s = e.domElement, n = H(a.parentElement), i = {
                  buttonWrapOpacity: ze.current.style.opacity,
                  canvasWrapOpacity: s.style.opacity,
                  fov: r.fov,
                  canvasTranslateY: Number(H(s).y),
                  accessiblePlateX: Number(n.x),
                  accessiblePlateY: Number(n.y),
                  accessiblePlateScale: Number(n.scale)
                }, o = {}, c = Ve.current.querySelectorAll("button");
                t.current === te ? (o.buttonWrapOpacity = 0, o.canvasWrapOpacity = 0, o.fov = ke.current, o.canvasTranslateY = me.current, o.accessiblePlateX = He.current.x, o.accessiblePlateY = He.current.y, o.accessiblePlateScale = He.current.scale, s.style.pointerEvents = "all", c.forEach((e => {
                  e.style.pointerEvents = "none"
                }))) : (t.current === ae || t.current === re) && (o.buttonWrapOpacity = 1, o.canvasWrapOpacity = 1, o.fov = ke.current, o.canvasTranslateY = me.current, o.accessiblePlateX = He.current.x, o.accessiblePlateY = He.current.y, o.accessiblePlateScale = He.current.scale, s.style.pointerEvents = "all", c.forEach((e => {
                  e.style.pointerEvents = "all"
                }))), L().to(i, {
                  buttonWrapOpacity: o.buttonWrapOpacity,
                  canvasWrapOpacity: o.canvasWrapOpacity,
                  fov: o.fov,
                  accessiblePlateX: o.accessiblePlateX,
                  accessiblePlateY: o.accessiblePlateY,
                  accessiblePlateScale: o.accessiblePlateScale,
                  canvasTranslateY: o.canvasTranslateY,
                  duration: le.sidebar.mobile.drawerSnap.duration,
                  ease: le.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    s.style.opacity = i.canvasWrapOpacity, ze.current.style.opacity = i.buttonWrapOpacity, a && (a.parentElement.style.opacity = i.canvasWrapOpacity, a.parentElement.style.transform = `translate(${i.accessiblePlateX}px,\n                            ${i.accessiblePlateY}px) scale(${i.accessiblePlateScale})`), r.fov = i.fov, r.updateProjectionMatrix(), s.style.transform = `translateY(${i.canvasTranslateY}px)`
                  }
                })
              }
            }), [R, F, _, me.current]),
            at = (0, r.useCallback)((e => {
              if (!R?.scene || !Ue.current) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: s,
                bottom: n
              } = e, {
                camera: i,
                renderer: o
              } = R, c = o.domElement, l = _?.[0]?.current;
              if (l)
                if (t.dragging) {
                  const e = (0, ht.U4)(0, s, r.get()),
                    o = (0, ht.Cc)(0, 1, 1 - e);
                  c.style.opacity = o;
                  const d = (0, ht.Cc)(0, 1, 1 - 3 * e);
                  if (l.parentElement.style.opacity = d, ze.current.style.opacity = o, Ve.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), ze.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < n) {
                    const e = (0, ht.U4)(0, n, r.get()),
                      a = Ae.current ? 60 : 40,
                      s = (0, ht.Cc)(ke.current, a, e);
                    i.fov = s, i.updateProjectionMatrix();
                    const o = Number(H(c).y) + t.delta[1] / 2;
                    if (c.style.transform = `translateY(${o}px)`, l) {
                      const e = H(l.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        s = Number(H(l.parentElement).y) + t.delta[1] / 2;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${s}px) scale(${r})`
                    }
                  }
                } else {
                  const e = Number(H(c).y),
                    t = {
                      buttonWrapOpacity: ze.current.style.opacity,
                      canvasWrapOpacity: c.style.opacity,
                      fov: i.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(H(l.parentElement).y),
                      accessibilityPlateOpacity: l.parentElement.style.opacity
                    };
                  a.current < s / 2 ? (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), L().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: Ae.current ? 60 : 40,
                    duration: le.sidebar.mobile.drawerSnap.duration,
                    ease: le.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = t.canvasWrapOpacity, l.parentElement.style.opacity = t.accessibilityPlateOpacity, ze.current.style.opacity = t.buttonWrapOpacity
                    }
                  })) : a.current > n / 2 ? (c.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), L().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateY: Number(He.current.y) + n / 2,
                    canvasTranslateY: Number(me.current) + n / 2,
                    fov: Ae.current ? 60 : 40,
                    duration: le.sidebar.mobile.drawerSnap.duration,
                    ease: le.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = t.canvasWrapOpacity, ze.current.style.opacity = t.buttonWrapOpacity, i.fov = t.fov, i.updateProjectionMatrix(), c.style.transform = `translateY(${t.canvasTranslateY}px)`, l.parentElement.style.transform = `translate(${He.current.x}px,\n                                ${t.accessibilityPlateY}px) scale(${He.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (c.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), L().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(He.current.y),
                    fov: ke.current,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    duration: le.sidebar.mobile.drawerSnap.duration,
                    ease: le.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (c.style.opacity = t.canvasWrapOpacity, ze.current.style.opacity = t.buttonWrapOpacity, l.parentElement.style.opacity = t.accessibilityPlateOpacity, i.fov = t.fov, i.updateProjectionMatrix(), a.current > 0) {
                        c.style.transform = `translateY(${t.canvasTranslateY}px)`;
                        const e = H(l.parentElement),
                          a = Number(e.x),
                          r = Number(e.scale),
                          s = t.accessibilityPlateY;
                        l.parentElement.style.transform = `translate(${a}px,\n                                    ${s}px) scale(${r})`
                      }
                    }
                  }))
                }
            }), [R, Ue.current, F, _, me.current, ne]),
            rt = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isResize: !1,
                onComplete: null,
                delay: 0
              };
              const {
                isResize: t,
                delay: a
              } = e, {
                scene: r,
                camera: s,
                controls: n
              } = R, i = r.getObjectByName("Scene"), o = r.getObjectByName("Light1"), c = r.getObjectByName("Light2"), l = r.getObjectByName("Light3");
              let d = null;
              const u = [];
              i.traverse((e => {
                e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), u.push(e.material))
              })), r.traverse((e => {
                e.name === Re.LP && 0 === e.userData.index && (d = e)
              }));
              const p = new m.Vector3;
              Fe.current.getWorldPosition(p);
              const _ = {
                camPositionY: s.position.y,
                camPositionZ: s.position.z,
                controlsTargetZ: n.current.target.z,
                plateRotationX: Fe.current.rotation.x,
                light1Intensity: o.intensity,
                light2Intensity: c.intensity,
                light2PositionX: c.position.x,
                light2PositionY: c.position.y,
                light2PositionZ: c.position.z,
                light3Intensity: l.intensity,
                light3PositionX: l.position.x,
                envMapIntensity: Fe?.current?.material?.envMapIntensity
              };
              L().to(_, {
                camPositionY: s.position.y + 2.5 * f,
                camPositionZ: s.position.z + (y ? 24 * f : 12 * f),
                controlsTargetZ: n.current.target.z - 5 * f,
                plateRotationX: -.16,
                light1Intensity: Se,
                light2Intensity: .2,
                light2PositionX: be.x,
                light2PositionY: be.y,
                light2PositionZ: be.z,
                light3Intensity: Se,
                light3PositionX: ve.x,
                delay: a,
                envMapIntensity: Te,
                duration: t ? 0 : le.toggleView.camera.duration,
                ease: le.toggleView.camera.ease,
                onStart: () => {
                  const e = y ? 52 * f : 26 * f;
                  n.current.enableZoom = !0, n.current.maxPolarAngle = de.carView.maxPolarAngle, n.current.minPolarAngle = de.carView.minPolarAngle, n.current.maxAzimuthAngle = de.carView.maxAzimuthAngle, n.current.minAzimuthAngle = de.carView.minAzimuthAngle, n.current.maxDistance = e, i.visible = !0, C[se.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none"
                },
                onUpdate: () => {
                  s.position.set(s.position.x, _.camPositionY, _.camPositionZ), n.current.target.z = _.controlsTargetZ, Fe.current.rotation.x = _.plateRotationX, Fe.current?.material && (Fe.current.material.envMapIntensity = _.envMapIntensity), o.intensity = _.light1Intensity, c.intensity = _.light2Intensity, c.position.set(_.light2PositionX, _.light2PositionY, _.light2PositionZ), l.intensity = _.light3Intensity, l.position.x = _.light3PositionX
                },
                onComplete: () => {
                  ye.current = !1, n.current.minDistance = y ? 20 * f : 10 * f, C[se.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                }
              });
              const g = {
                opacity: 0
              };
              L().to(g, {
                opacity: 1,
                duration: t ? 0 : le.toggleView.fadeOut.duration,
                ease: le.toggleView.fadeOut.ease,
                delay: a,
                onUpdate: () => {
                  u.forEach((e => {
                    e.opacity = g.opacity
                  }))
                }
              }), d && L().to(d, {
                duration: 0,
                delay: t ? 0 : .4 + a,
                onComplete: () => {
                  d.material && (d.receiveShadow = !0, d.material.depthTest = !1, d.renderOrder = 99998)
                }
              })
            }), [R, Ae.current, Fe, Fe?.current, f, y, I, k]),
            st = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                delay: 0,
                onComplete: null
              };
              if (!R?.scene || !R?.controls?.current || !Fe || !Fe?.current || ye.current) return;
              const {
                scene: t,
                camera: a,
                controls: r
              } = R, n = e.delay || 0, i = t.getObjectByName("Scene"), o = t.getObjectByName("Light1"), c = t.getObjectByName("Light2"), l = t.getObjectByName("Light3"), d = $(), u = !B() || y ? d * f : 1.6 * d * f;
              if (i && r && !ye.current && !xe.current) {
                const t = [];
                if (i.traverse((e => {
                    e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), t.push(e.material))
                  })), Ae.current) {
                  const s = new m.Vector3;
                  if (Fe.current.getWorldPosition(s), setTimeout((() => {
                      Fe.current.receiveShadow = !1, Fe.current.material.depthTest = !1
                    }), 400), !ye.current) {
                    const n = {
                      camPositionX: a.position.x,
                      camPositionY: a.position.y,
                      camPositionZ: a.position.z,
                      controlsTargetX: r.current.target.x,
                      controlsTargetY: r.current.target.y,
                      controlsTargetZ: r.current.target.z,
                      plateRotationX: Fe.current.rotation.x,
                      light1Intensity: o.intensity,
                      light2Intensity: c.intensity,
                      light2PositionX: c.position.x,
                      light2PositionY: c.position.y,
                      light2PositionZ: c.position.z,
                      light3Intensity: l.intensity,
                      light3PositionX: l.position.x,
                      envMapIntensity: Fe?.current?.material?.envMapIntensity
                    };
                    L().to(n, {
                      camPositionX: s.x,
                      camPositionY: s.y,
                      camPositionZ: s.z + u,
                      controlsTargetX: s.x,
                      controlsTargetY: s.y,
                      controlsTargetZ: s.z,
                      plateRotationX: 0,
                      light1Intensity: 0,
                      light2Intensity: Se,
                      light2PositionX: _e,
                      light2PositionY: ge,
                      light2PositionZ: fe,
                      light3Intensity: Se,
                      light3PositionX: he,
                      envMapIntensity: Ne,
                      duration: le.toggleView.camera.duration,
                      ease: le.toggleView.camera.ease,
                      onStart: () => {
                        r.current.minDistance = 2, r.current.enableZoom = !1, C[se.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = L().timeline({
                          duration: y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                          ease: y ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease
                        });
                        et(e, f)
                      },
                      onUpdate: () => {
                        Fe.current.rotation.x = n.plateRotationX, Fe.current?.material && (Fe.current.material.envMapIntensity = n.envMapIntensity), o.intensity = n.light1Intensity, c.intensity = n.light2Intensity, c.position.set(n.light2PositionX, n.light2PositionY, n.light2PositionZ), l.intensity = n.light3Intensity, l.position.x = n.light3PositionX
                      },
                      onComplete: () => {
                        ye.current = !1, i.visible = !1, r.current.maxPolarAngle = de.plateView.maxPolarAngle, r.current.minPolarAngle = de.plateView.minPolarAngle, r.current.maxAzimuthAngle = de.plateView.maxAzimuthAngle, r.current.minAzimuthAngle = de.plateView.minAzimuthAngle, C[se.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
                      }
                    });
                    const d = {
                      opacity: 1
                    };
                    L().to(d, {
                      opacity: 0,
                      duration: le.toggleView.fadeOut.duration,
                      ease: le.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        t.forEach((e => {
                          e.opacity = d.opacity
                        }))
                      }
                    })
                  }
                } else ye.current || (I && s(!1), rt({
                  isResize: !1,
                  onComplete: null,
                  delay: n
                }));
                Ae.current = !Ae.current
              }
            }), [R, Ae.current, Fe, Fe?.current, f, I, k]),
            nt = (0, r.useCallback)((e => {
              if (!R?.scene || !Ue?.current || !ze.current) return;
              const t = C[se.UI]?.current;
              if (t) {
                const {
                  camera: a,
                  renderer: r
                } = R, s = r.domElement, {
                  y: n,
                  sidebarRef: i
                } = e, o = t.offsetHeight, c = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: n.get(),
                  opacity: i.current.style.opacity,
                  fov: a.fov,
                  height: s.offsetHeight
                };
                L().to(c, {
                  opacity: 1,
                  height: o,
                  mobileSidebarHeight: .4 * window.innerHeight,
                  fov: ke.current,
                  submitOrderTranslateY: Ue.current.offsetHeight,
                  duration: le.sidebar.mobile.drawer.duration,
                  ease: le.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    i.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, i.current.style.opacity = c.opacity, Ue.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, ze.current.style.opacity = c.opacity, s.style.height = c.height, n.set(c.mobileSidebarHeight), a && (a.fov = c.fov, a.updateProjectionMatrix())
                  },
                  onComplete: () => {
                    s.style.pointerEvents = "all"
                  }
                }), i.current.style.pointerEvents = "none"
              }
            }), [C, Le?.current, Ue?.current, R, F]),
            it = e => {
              if (!R?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: s
              } = le, {
                duration: n,
                ease: i
              } = s.mobile.drawer;
              J(r), oe.current = r, t.current.style.pointerEvents = "all";
              const o = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity
              };
              L().to(o, {
                opacity: 1,
                duration: n,
                ease: i,
                onUpdate: () => {
                  t.current.style.opacity = o.opacity, t.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`, a.current = o.mobileSidebarHeight, r.set(a.current), ze.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`
                }
              })
            },
            ot = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = T, r = z ? (0, x.jsx)(Jt, {}) : t("lp.create.next");
              return (0, x.jsx)(ra, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (z || !N || !e && N === a),
                  onClick: async () => {
                    Ie?.current?.(), p || ($e({
                      ...Ye,
                      event: "cta_login",
                      text: "sign in",
                      link_url: h
                    }), window.location.href = h)
                  }
                }],
                isLoading: z,
                isVisible: [Ce.NEW_PLATE, Ce.CONFIRM_ORDER].includes(g),
                tabIndex: g === Ce.NEW_PLATE ? 0 : -1
              })
            }), [N, g, p, M, T, Ie.current, z]),
            ct = (0, r.useCallback)((() => {
              d(!v)
            }), [v]),
            lt = (0, r.useMemo)((() => y ? (0, x.jsxs)(zt, {
              bottom: O,
              isVisible: M,
              onDrag: at,
              onHide: nt,
              onShow: it,
              onTap: tt,
              top: Y,
              drawerY: K,
              mobileSidebarHeight: F,
              children: [(0, x.jsx)(aa, {
                validateFnRef: Ie,
                setIsLoading: D
              }), (0, x.jsx)(la, {
                top: Y,
                drawerY: K
              })]
            }) : (0, x.jsxs)("div", {
              ref: Le,
              className: "rockstargames-modules-gtao-license-plateb1a08a76cb74203a9c8e97f759697f47",
              children: [(0, x.jsx)("hr", {
                className: "rockstargames-modules-gtao-license-platefb62db34cd26ac9882218fa9e8c572d0",
                onClick: () => {
                  ct()
                },
                "aria-hidden": "true"
              }), (0, x.jsx)(aa, {
                validateFnRef: Ie,
                setIsLoading: D
              }), ot]
            })), [N, O, v, y, M, oe.current, Le.current, Y, K, z, F]);
          return (0, x.jsxs)("div", {
            ref: We,
            className: "rockstargames-modules-gtao-license-platee14286ef5f5dc6a8ca6bf6ce3ffb02be",
            children: [lt, (0, x.jsxs)("div", {
              ref: Ve,
              className: "rockstargames-modules-gtao-license-plateb2352c29df7ddb34a50813fe7bc95c6e",
              children: [(0, x.jsx)(Dt, {
                onClick: () => {
                  ye.current || Ke({
                    onComplete: () => {
                      ee(!1), i(Ce.LIST_PLATES)
                    }
                  })
                }
              }), (0, x.jsxs)(Lt.animated.div, {
                ref: ze,
                className: "rockstargames-modules-gtao-license-plateb7250523e6ae363c8f2aee0651a92b46",
                style: K ? {
                  y: K
                } : void 0,
                children: [(0, x.jsx)(ia, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    xe.current || ye.current || (Ae.current && !I ? st({
                      onComplete: () => {
                        s(!I), Ee(!1)
                      }
                    }) : s(!I), xe.current = !0)
                  }
                }), (0, x.jsx)(ia, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!ye.current && !xe.current) {
                      const t = y ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                        a = k ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), st({
                        delay: a
                      }), ye.current = !0
                    }
                  }
                })]
              })]
            }), (0, x.jsxs)("div", {
              ref: Be,
              className: "rockstargames-modules-gtao-license-platee615f2b03c1f76d06a2862cb3aab1afd",
              children: [y && ot, y && (0, x.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platea37b793effdd9688699a77ea3bd02976",
                ref: De
              })]
            })]
          })
        })),
        _a = "rockstargames-modules-gtao-license-plateba2215c87866e0b4c5739e49512b96ef",
        ga = (0, s.defineMessages)({
          lpe_sidebar_total_plates_text: {
            id: "lpe_sidebar_total_owned_plates",
            defaultMessage: "{total} owned plates out of a maximum of {max}"
          }
        }),
        fa = "rockstargames-modules-gtao-license-plateb05e3890eab129885f9a617d22a4bdda",
        ba = "rockstargames-modules-gtao-license-platefd6b39e70965987eb91338b9ab71ef06",
        ha = (0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useIntl)(),
            {
              loggedIn: n
            } = (0, c.useRockstarUser)(),
            {
              setRefs: i,
              state: o
            } = gt(),
            {
              plates: l,
              isMobile: d
            } = o,
            u = (0, r.useRef)(null),
            m = (0, r.useRef)(null),
            p = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            i(se.SIDEBAR, u)
          }), [u.current, d]), (0, r.useEffect)((() => {
            i(se.PLATE_COUNT, p)
          }), [p.current, d]), (0, r.useEffect)((() => {
            i(se.SIDEBAR_BUTTONS_LOADING_ANIMATION, m)
          }), [m.current]);
          const _ = l?.filter((e => {
            let {
              faux: t = !1
            } = e;
            return !t
          }))?.length ?? 0;
          return (0, x.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: u,
            className: "rockstargames-modules-gtao-license-platef5e31de74db53bedd63dace5d7038d67",
            children: [(0, x.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platedf5d7bc0760f699d1c8e26596267b7c0",
              children: (0, x.jsx)(Wt, {})
            }), (0, x.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec3b30bed11d2e7b8ce600fbbd7629875",
              children: [(0, x.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platec4382993beb9898b4d04eff6d21944bb",
                children: [(0, x.jsx)("h1", {
                  className: "rockstargames-modules-gtao-license-platee753118af7cef32ddccb849c5845a1d9",
                  children: t("lp.landing.title")
                }), (0, x.jsx)("p", {
                  className: "rockstargames-modules-gtao-license-plateb7f49651a3bab5cb72869a16d60c64ee",
                  children: t("lp.landing.description")
                }), (0, x.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-plateb120b933ab5873984ca4626fc8b326c4",
                  children: (0, x.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, x.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), n && (0, x.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platee0dd0de0d13ab389fbd3ac25184c0557",
                children: [(0, x.jsx)("h5", {
                  "aria-hidden": !0,
                  children: t("lp.landing.plates")
                }), (0, x.jsx)("span", {
                  className: "rockstargames-modules-gtao-license-platedd3a0c1fa96710ebf11322ea3d496dc7",
                  children: a.formatMessage(ga.lpe_sidebar_total_plates_text, {
                    total: _,
                    max: 30
                  })
                }), (0, x.jsxs)("span", {
                  className: "rockstargames-modules-gtao-license-platea85e818dc3383486634bd7d437612039",
                  "aria-hidden": !0,
                  children: [(0, x.jsxs)("span", {
                    className: "rockstargames-modules-gtao-license-platec3fb0b6e4481dc788c19f32e1d57155a",
                    children: [m?.current && (0, x.jsx)("span", {
                      ref: m,
                      className: "rockstargames-modules-gtao-license-platee671a67ec4f57b3d0b0d69daf8181d6b",
                      children: (0, x.jsx)(Jt, {
                        type: "THREE_DOTS"
                      })
                    }), (0, x.jsx)("span", {
                      ref: p,
                      className: "rockstargames-modules-gtao-license-plateb57f68949c7a8c6412a10113788f02d1",
                      children: _
                    })]
                  }), (0, x.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-plated92b79d7b5b7acd43b97aea1fa09f53d"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        ka = "rockstargames-modules-gtao-license-plateef5ba014e1e3a01aa5c8e25fa6540276",
        {
          lerp: ya
        } = m.MathUtils,
        va = "visible";
      let xa, wa = !1;
      const Ea = () => {
          const {
            state: e,
            setShouldRenderScene: t,
            setIsScrollEnabled: a,
            setAccessiblePlates: s,
            setDeletedPlateIndex: n,
            setPlates: i
          } = gt(), {
            accessiblePlates: o,
            pendingOrder: l,
            currentPlateIndex: d,
            currentView: u,
            is3D: p,
            three: _,
            isMobile: g,
            isLoading: f,
            refs: b,
            gridScale: h,
            deletedPlateIndex: k,
            plates: y
          } = e, {
            loggedIn: v
          } = (0, c.useRockstarUser)(), {
            selectedCharacterTuple: w
          } = (0, c.useRockstarUserState)(), E = (0, r.useRef)(null), [P, S] = (0, r.useState)(u === Ce.LIST_PLATES), N = b?.[se.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            xa && (xa.pause(), xa = null), wa = !1
          }), [w]), (0, r.useEffect)((() => {
            S(u === Ce.LIST_PLATES)
          }), [u]);
          const T = (0, r.useCallback)((e => {
            if (!_) return;
            const {
              camera: r,
              controls: c,
              originalCameraPosition: u,
              originalControlsTarget: p,
              renderer: h,
              scene: x
            } = _, {
              clickPlate: w,
              sidebar: P,
              deletePlate: S
            } = le, T = b[se.FOOTER].current, C = b[se.SIDEBAR].current, R = b[se.LOADING_SCREEN].current, A = b[se.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, I = b[se.PLATE_COUNT].current, O = o?.[d]?.current || null, j = o?.[0]?.current || null, M = b[se.CTA_SHADER]?.current || null, V = [];
            switch (x.traverse((e => {
                e.name === Re.LP && V.push(e)
              })), xa = L().timeline({
                duration: g ? P.mobile.drawer.duration : w.duration,
                ease: g ? P.mobile.drawer.ease : w.ease
              }), e) {
              case va: {
                if (!c.current || o.filter((e => null === e.current)).length > 0 || !j || !M) return;
                const e = {
                    current: 0
                  },
                  d = {
                    cameraPosition: {
                      start: (new m.Vector3).copy(r.position),
                      end: u
                    },
                    controlsTarget: {
                      start: (new m.Vector3).copy(c.current.target),
                      end: p
                    },
                    plateOpacity: V.map((e => ({
                      start: e.material.opacity,
                      end: 0
                    }))),
                    accessiblePlateOpacity: o.map((e => ({
                      start: getComputedStyle(e.current).opacity,
                      end: 1
                    }))),
                    firstPlateSaturation: {
                      start: ce.saturation.value,
                      end: 0
                    },
                    firstPlateOpacity: {
                      start: 1,
                      end: .2
                    },
                    canvasTranslateY: {
                      start: Number(H(h.domElement).y),
                      end: 0
                    },
                    canvasWidth: h.domElement.offsetWidth,
                    drawerHeight: {
                      start: Number(H(E.current).y),
                      end: 0
                    },
                    ctaShaderOpacity: {
                      start: M.style.opacity,
                      end: 1
                    }
                  };
                O?.parentElement && (d.currentAccessibilityPlateTransform = {
                  start: {
                    x: Number(H(O.parentElement).x),
                    y: Number(H(O.parentElement).y),
                    scale: Number(H(O.parentElement).scale)
                  },
                  end: {
                    x: 0,
                    y: 0,
                    scale: 1
                  }
                });
                const _ = j.querySelector("canvas");
                if (xa.to(e, {
                    current: 1,
                    duration: g ? P.mobile.drawer.duration : w.duration,
                    ease: g ? P.mobile.drawer.ease : w.ease,
                    onComplete: () => {
                      g && (h.domElement.style.touchAction = "auto"), t(!1);
                      const e = x.getObjectByName("Light4");
                      L().to(e.position, {
                        x: xe - 20,
                        y: we,
                        z: Ee
                      })
                    },
                    onStart: () => {
                      e.current = 0, C && (C.style.pointerEvents = "all"), h.render(x, r), a(!0)
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = d.cameraPosition.start.clone().lerp(d.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const s = d.controlsTarget.start.clone().lerp(d.controlsTarget.end, t);
                      if (c.current.target.x = s.x, c.current.target.y = s.y, c.current.target.z = s.z, O && O.parentElement?.classList?.contains(_a)) {
                        const e = ya(d.currentAccessibilityPlateTransform.start.x, d.currentAccessibilityPlateTransform.end.x, t),
                          a = ya(d.currentAccessibilityPlateTransform.start.y, d.currentAccessibilityPlateTransform.end.y, t),
                          r = ya(d.currentAccessibilityPlateTransform.start.scale, d.currentAccessibilityPlateTransform.end.scale, t);
                        O.parentElement.style.transform = `translate(${e}px,\n                            ${a}px) scale(${r})`
                      }
                      const n = ya(d.firstPlateSaturation.start, d.firstPlateSaturation.end, t);
                      if (ce.saturation.value = n, v && !l && _) {
                        const e = ya(d.firstPlateOpacity.start, d.firstPlateOpacity.end, t),
                          a = !!l;
                        _.style.filter = `saturate(${n})${!a&&` opacity(${e})`}`
                      }
                      if (M) {
                        const e = ya(d.ctaShaderOpacity.start, d.ctaShaderOpacity.end, t);
                        M.style.opacity = e
                      }
                      if (g) {
                        const e = ya(d.canvasTranslateY.start, d.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, E.current) {
                          const e = ya(d.drawerHeight.start, d.drawerHeight.end, t);
                          E.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), (o.length === y.length && o?.[0]?.current || v && !f && o[0].current && o?.filter((e => e?.current)).length === y.length && 0 !== y.length && 0 !== o.length) && !wa) {
                  const e = {
                    current: 0
                  };
                  wa = !0, xa.to(e, {
                    current: 1,
                    duration: g ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                    ease: g ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                    onStart: () => {
                      wa = !0
                    },
                    onComplete: () => {
                      wa = !1
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e;
                      o.forEach(((e, a) => {
                        if (e.current && d.accessiblePlateOpacity[a]) {
                          const r = ya(d.accessiblePlateOpacity[a].start, d.accessiblePlateOpacity[a].end, 2.5 * (t - .6));
                          e.current.style.opacity = r
                        }
                        if (V[a] && V[a].material) {
                          const e = ya(d.plateOpacity[a].start, d.plateOpacity[a].end, t);
                          V[a].material.opacity = e
                        }
                      }))
                    }
                  }, 0);
                  const t = Number(getComputedStyle(o[0].current.parentElement).opacity);
                  if (t < 1) {
                    const e = {
                        start: t,
                        end: 1
                      },
                      a = {
                        current: 0
                      };
                    xa.to(a, {
                      current: 1,
                      duration: g ? le.sidebar.mobile.drawer.duration : le.clickPlate.duration,
                      ease: g ? le.sidebar.mobile.drawer.ease : le.clickPlate.ease,
                      onUpdate: () => {
                        const t = ya(e.start, e.end, a.current);
                        o[0].current.parentElement.style.opacity = t
                      }
                    }, "<")
                  }
                }
                if ("number" == typeof k) {
                  const e = V.find((e => e.userData.index === k)),
                    t = o[k].current;
                  if (e && t) {
                    const a = {
                        current: 0
                      },
                      r = {
                        plateOpacity: {
                          start: e.material.opacity,
                          end: 0
                        },
                        accessiblePlateOpacity: {
                          start: 1,
                          end: 0
                        }
                      };
                    xa.to(a, {
                      current: 1,
                      duration: S.duration,
                      ease: S.ease,
                      onUpdate: () => {
                        const {
                          current: s
                        } = a, n = ya(r.plateOpacity.start, r.plateOpacity.end, s), i = ya(r.accessiblePlateOpacity.start, r.accessiblePlateOpacity.end, s);
                        e?.material && (e.material.opacity = n), t.style.opacity = i
                      }
                    }, ">");
                    const c = V.filter((e => e.userData.index >= k)).map((e => e.position)),
                      l = o.filter(((e, t) => t >= k)).map((e => {
                        const {
                          top: t,
                          left: a
                        } = getComputedStyle(e.current), r = e.current.offsetHeight, s = e.current.offsetWidth, n = Number(t.replace("px", ""));
                        return {
                          x: Number(a.replace("px", "")) + s / 2,
                          y: n + r / 2
                        }
                      })),
                      d = c.map((e => e.clone())),
                      u = l.map(((e, t) => ({
                        x: l[Math.max(t - 1, 0)].x - l[t].x,
                        y: l[Math.max(t - 1, 0)].y - l[t].y
                      })));
                    xa.to(c.slice(1), {
                      x: e => d[e].x,
                      y: e => d[e].y,
                      z: e => d[e].z,
                      stagger: {
                        each: .03
                      },
                      onComplete: () => {
                        e.removeFromParent(), e.userData.index = void 0, x.remove(e)
                      }
                    }, "<25%");
                    const m = o.filter(((e, t) => t >= k)),
                      p = l.map((() => ({
                        x: 0,
                        y: 0
                      })));
                    p.forEach(((e, t) => {
                      xa.to(e, {
                        x: u[t].x,
                        y: u[t].y,
                        duration: S.duration,
                        ease: S.ease,
                        delay: 1 + .03 * t,
                        onUpdate: () => {
                          const a = m[t]?.current;
                          a && (a.style.transform = `translate(${e.x}px, ${e.y}px)`)
                        },
                        onComplete: () => {
                          if (t === p.length - 1) {
                            const e = o.filter(((e, t) => t !== k));
                            s(e), n(null);
                            const t = y.filter((e => e.index !== k));
                            t.forEach(((e, t) => {
                              e.index = t
                            })), i(t)
                          }
                        }
                      }, 0)
                    }))
                  }
                }
                xa.to(T, {
                  autoAlpha: 1,
                  duration: g ? P.mobile.footer.in.duration : P.in.duration,
                  ease: g ? P.mobile.footer.in.ease : P.in.ease,
                  delay: g ? P.mobile.footer.in.delay : P.in.delay
                }, 0), xa.to(C, {
                  autoAlpha: 1,
                  duration: g ? P.mobile.fadeHeader.in.duration : P.in.duration,
                  ease: g ? P.mobile.fadeHeader.in.ease : P.in.ease,
                  delay: g ? P.mobile.fadeHeader.in.delay : P.in.delay,
                  onStart: () => {
                    R && (f ? (R.classList.add(ka), A && A.classList.add(fa), I && I.classList.remove(ba)) : (R.classList.remove(ka), A && A.classList.remove(fa), I && I.classList.add(ba)))
                  }
                }, 0), g && (N && L().set(N.style, {
                  visibility: "visible"
                }), C && (C.style.pointerEvents = "all"));
                break
              }
              default:
                if (L().to(T, {
                    autoAlpha: 0,
                    duration: g ? P.mobile.footer.out.duration : P.out.duration,
                    ease: g ? P.mobile.footer.out.ease : P.out.ease
                  }), N && L().set(N.style, {
                    visibility: "hidden"
                  }), C && (C.style.pointerEvents = "none"), g) {
                  const e = {
                    current: H(C).y
                  };
                  L().to(C, {
                    opacity: 0,
                    duration: P.mobile.fadeHeader.out.duration,
                    ease: P.mobile.fadeHeader.out.ease
                  }), L().to(e, {
                    current: -1 * C.offsetHeight,
                    duration: P.mobile.drawer.duration,
                    ease: P.mobile.drawer.ease,
                    onUpdate: () => {
                      E.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else L().to(C, {
                  autoAlpha: 0,
                  duration: P.out.duration,
                  ease: P.out.ease,
                  delay: P.out.delay
                })
            }
          }), [o, d, k, p, _, f, l, v, g, b, h, wa]);
          return (0, r.useEffect)((() => {
            b && b?.[se.FOOTER]?.current && b?.[se.SIDEBAR]?.current && b?.[se.UI]?.current && b?.[se.LOADING_SCREEN]?.current && E.current && _?.scene && _?.controls && T(P ? va : "hidden")
          }), [b, P, E.current, p, _, g, f, b?.[se.FOOTER]?.current, b?.[se.SIDEBAR]?.current]), (0, x.jsx)("div", {
            ref: E,
            className: "rockstargames-modules-gtao-license-plateaa4cb56d97a9d885e644c0af2b3e81ce",
            children: (0, x.jsx)(ha, {})
          })
        },
        Pa = e => {
          let {
            isMobile: t
          } = e;
          const {
            loggedIn: a
          } = (0, c.useRockstarUser)(), {
            setRefs: s,
            state: n
          } = gt(), {
            plates: i,
            refs: o
          } = n, l = (0, r.useRef)(null), d = o[se.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              s(se.UI, l)
            }), [l.current]), !i) return null;
          let u;
          return t && (u = d ? (0, Mt.createPortal)((0, x.jsx)(Ea, {}), d) : null), (0, x.jsxs)("div", {
            ref: l,
            className: "rockstargames-modules-gtao-license-plated1beae8d7c28603a3bdf0a34ca457352",
            children: [a && !t && (0, x.jsx)(la, {}), t ? u : (0, x.jsx)(Ea, {}), a && (0, x.jsx)(Ht, {}), (0, x.jsx)(pa, {})]
          })
        },
        Sa = (0, s.defineMessages)({
          gtao_lp_no_character_errror: {
            id: "gtao_lp_no_character_errror",
            defaultMessage: "No character found with this account. Link a Grand Theft Auto Online character or switch to a different Rockstar Games account."
          },
          gtao_lp_link_account_cta: {
            id: "gtao_lp_link_account_cta",
            defaultMessage: "Link a Rockstar Games Account"
          }
        }),
        Na = e => {
          let {
            t
          } = e;
          const a = {
              code: null,
              logId: null
            },
            {
              formatMessage: n
            } = (0, s.useIntl)(),
            {
              state: {
                error: i,
                isMobile: o
              }
            } = gt(),
            [l, d] = (0, r.useState)(null),
            [u, m] = (0, r.useState)(null),
            p = {
              api: t("lp.error.api.description"),
              browser: t("lp.error.browser.description"),
              character: n(Sa.gtao_lp_no_character_errror),
              vehicles: t("lp.error.novehicle.description"),
              webgl: t("lp.error.webgl.description")
            },
            g = {
              api: t("lp.error.api.cta"),
              browser: t("lp.error.browser.cta"),
              character: n(Sa.gtao_lp_link_account_cta),
              vehicles: t("lp.error.api.cta"),
              webgl: t("lp.error.api.cta")
            },
            {
              track: f
            } = (0, c.useGtmTrack)(),
            {
              data: b
            } = (0, c.useRockstarUser)(),
            h = {
              member_id: b?.user ? b.user?.id : void 0,
              view_name: "license plate creator - error screen"
            };
          return (0, r.useEffect)((() => {
            if (!i) return d(null), void m(null);
            d(i[0]), m(i[1] ?? a)
          }), [String(i)]), (0, r.useEffect)((() => {
            f({
              ...h,
              event: "alert_error",
              text: p[l] || t("lp.error.unexpected.description")
            }), f({
              ...h,
              event: "trackPageview",
              display_type: o ? "mobile" : "desktop"
            })
          }), []), l ? (0, x.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platee268c88b0ad13ec9b70662c1cd3ed9a6",
            children: [(0, x.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platea62175a9470bdefca29061355225053b",
              children: [(0, x.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateff9acc08c36ee5477bfa008495fe1016",
                children: [(0, x.jsx)("i", {}), (0, x.jsx)("h4", {
                  children: p[l] || t("lp.error.unexpected.description")
                }), u?.code && (0, x.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platecbb8e56d4071adb16682a06f7d167c4b",
                  children: [(0, x.jsx)("p", {
                    children: `Code: ${u.code}`
                  }), u?.logId && (0, x.jsx)("p", {
                    children: `LogID: ${u?.logId}`
                  })]
                })]
              }), (0, x.jsx)(_.NavLink, {
                to: "character" !== l ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, x.jsx)("button", {
                  className: "rockstargames-modules-gtao-license-platebee018ef543141528e263e23cd43ae1e",
                  type: "button",
                  tabIndex: 0,
                  children: (0, x.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platee346703179f552bd647459ea2eee8aca",
                    children: g[l]
                  })
                })
              })]
            }), (0, x.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateba7922fbecef8aac8fbfb43466d714df"
            })]
          }) : null
        },
        Ta = () => {
          const {
            state: e,
            setRefs: t
          } = gt(), {
            refs: a,
            isMobile: s
          } = e, n = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            n && t(se.LOADING_SCREEN, n)
          }), [n]);
          const i = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = document.querySelectorAll('[aria-label="animation"]');
            e.length && e.forEach((e => {
              e.tabIndex = -1
            }))
          }), []), (0, r.useEffect)((() => {
            if (s && a?.[se.SIDEBAR]?.current && i.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                s = a?.[se.SIDEBAR].current.offsetHeight,
                n = s + (r - s) / 2 - t / 2;
              i.current && (i.current.style.top = `${n}px`)
            } else i.current && (i.current.style.top = "unset")
          }), [s, a]), (0, x.jsx)("div", {
            ref: n,
            className: "rockstargames-modules-gtao-license-plateccf53583787aff7c3f2ac6b8d97c03b4",
            children: (0, x.jsx)("div", {
              ref: i,
              className: "rockstargames-modules-gtao-license-platea88fc625cf8ed28c9173313577588fed",
              children: (0, x.jsx)(Jt, {})
            })
          })
        },
        Ca = {
          pillBtn: "rockstargames-modules-gtao-license-platef1cc6b324fb5666ea554c421a89c85e2",
          selected: "rockstargames-modules-gtao-license-platecf7c7f87a50f7e2e4514afc35792becb",
          orderInProgressCTA: "rockstargames-modules-gtao-license-platebc40a92b57940decf0e3d650470c2e6e",
          expanded: "rockstargames-modules-gtao-license-plateacb72edc8e0c3c68b01530b66cf9fda8",
          backToPlatesButton: "rockstargames-modules-gtao-license-platecc6b5e28d88c74bcb3605232bd6316f8",
          contentHeading: "rockstargames-modules-gtao-license-platedbcbf1b51802e6bc6bd827b038b8a2a6",
          plateRedemptionInstructions: "rockstargames-modules-gtao-license-platef2d6bbeb3efe691a30789b8601ced154",
          hidden: "rockstargames-modules-gtao-license-plated58c71e7b6b64c9252c151d42443b020",
          orderInstructions: "rockstargames-modules-gtao-license-platee8f0d0af4b9f3e0046d78d256627078c",
          buttonWrap: "rockstargames-modules-gtao-license-plateabf8a411f86b82032f1a48a226c574d6",
          ctaText: "rockstargames-modules-gtao-license-plateb786d4a5375d49d301a7eabc0907a5e5",
          isWindows: "rockstargames-modules-gtao-license-platebeaf68a19e2cc214f99eda5678bb1174"
        },
        Ra = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: s,
            t: n
          } = e;
          const [i, l] = (0, r.useState)(!1), {
            loggedIn: u
          } = (0, c.useRockstarUser)(), m = (0, o.useRockstarTokenPing)(), {
            setPlates: p,
            setPendingOrder: _,
            setPlateNumber: g,
            setSelectedStyle: f,
            setError: b,
            state: h
          } = gt(), {
            character: k,
            plates: y,
            currentView: v
          } = h, {
            track: w
          } = (0, c.useGtmTrack)(), E = {
            view_name: "license plate creator - landing page logged in"
          }, P = v === Ce.LIST_PLATES ? 0 : -1, S = (0, r.useCallback)((() => {
            (async () => {
              if (!u || !k) return;
              const [e] = k, {
                error: t
              } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                pingBearer: m,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) return void b(["api", t]);
              const a = [Ae, ...y.slice(1, y.length)];
              p(a), _(null), g(""), f(z(Ae.style.name).id), w({
                ...E,
                event: "cta_cancel",
                text: `modal: ${n("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${n("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, k, y]);
          return (0, x.jsxs)("div", {
            className: [Ca.orderInProgressCTA, s ? "" : Ca.hidden].join(" "),
            children: [(0, x.jsx)("h1", {
              className: Ca.contentHeading,
              children: n("lp.inprogress.title")
            }), (0, x.jsx)("p", {
              className: Ca.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: n("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${Ca.vehicleName}>${t}</span>`)
              }
            }), (0, x.jsxs)("div", {
              className: Ca.buttonWrap,
              children: [(0, x.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": n("lp.inprogress.edit"),
                tabIndex: P,
                children: (0, x.jsx)("span", {
                  className: Ca.ctaText,
                  children: n("lp.inprogress.edit")
                })
              }), (0, x.jsx)("button", {
                type: "button",
                onClick: e => {
                  l(!0), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                },
                "aria-label": n("lp.inprogress.cancel"),
                tabIndex: P,
                children: (0, x.jsx)("span", {
                  className: Ca.ctaText,
                  children: n("lp.inprogress.cancel")
                })
              })]
            }), (0, x.jsx)(Ft, {
              title: n("lp.modal.order-cancel.title"),
              secondaryText: n("lp.modal.order-cancel.description").replace("{plateText}", y?.[0]?.plateText ?? "this plate"),
              buttons: [{
                buttonText: n("lp.modal.order-cancel.confirm"),
                onClick: e => S(e)
              }, {
                buttonText: n("lp.modal.order-cancel.close"),
                onClick: () => {
                  w({
                    ...E,
                    event: "cta_cancel",
                    text: "yes, cancel",
                    view_name: "license plate creator - modal: yes, cancel"
                  })
                }
              }],
              showModal: i,
              onClose: () => l(!1),
              t: n
            })]
          })
        },
        Aa = e => {
          let {
            plateData: t,
            plateWidthInPixels: a,
            currentView: r,
            loginUrl: s,
            inputTabIndex: n,
            track: i,
            trackingPresets: o,
            onClickPlate: c,
            t: l
          } = e;
          return (0, x.jsx)("div", {
            className: da.firstPlateLoggedOut,
            style: {
              background: "none",
              border: "none",
              opacity: r === Ce.LIST_PLATES ? 1 : 0,
              width: `${a}px`,
              height: a / 2 + "px"
            },
            children: (0, x.jsxs)("div", {
              className: [da.loggedOutCTA, r !== Ce.LIST_PLATES ? da.hidden : ""].join(" "),
              children: [(0, x.jsx)("button", {
                type: "button",
                onClick: () => {
                  s && (i({
                    event: "cta_login",
                    text: "sign in",
                    link_url: s
                  }), window.location.href = s)
                },
                className: [da.signIn, r !== Ce.LIST_PLATES ? da.hidden : ""].join(" "),
                tabIndex: n,
                children: (0, x.jsx)("span", {
                  className: da.ctaText,
                  children: l("lp.landing.signup")
                })
              }), (0, x.jsx)("button", {
                type: "button",
                onClick: () => {
                  i({
                    ...o,
                    event: "license_plate_try",
                    text: "try it out"
                  }), c(t.index)
                },
                className: [da.tryWithoutSigningIn, da.firstLoad, r !== Ce.LIST_PLATES ? da.hidden : ""].join(" "),
                tabIndex: n,
                children: (0, x.jsx)("span", {
                  className: da.ctaText,
                  children: l("lp.landing.tryit")
                })
              })]
            })
          })
        },
        Ia = e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, c.useRockstarUser)(), {
            state: s,
            setCurrentView: n,
            setCurrentPlate: i,
            setCurrentPlateIndex: o,
            setRefs: l
          } = gt(), {
            currentView: d,
            accessiblePlates: u,
            gridState: m,
            is3D: p,
            loginUrl: _,
            pendingOrder: g,
            three: f,
            plates: b,
            refs: h,
            isMobile: k,
            realHeight: y,
            plateTextures: v
          } = s, [w, E] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            E(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            b?.length && (T(b[0]), R(b.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30))
          }), [b]);
          const [P, S] = (0, r.useState)(null), [N, T] = (0, r.useState)(null), [C, R] = (0, r.useState)(!1), A = h[se.FIRST_PLATE_MESH], I = h[se.ROOT], O = (0, r.useRef)(null), j = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = h[se.SIDEBAR];
            if (!(e?.current && I?.current && m?.gridOptions && N)) return;
            const t = e.current,
              a = {
                x: k ? 0 : t.offsetWidth,
                y: 0
              },
              r = G(N.index, I.current, Number(y.replace("px", "")), m, a);
            S(r)
          }), [h]);
          const {
            track: M
          } = (0, c.useGtmTrack)(), L = {
            view_name: "license plate creator - landing page logged " + (a ? "in" : "out")
          }, V = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            l(se.CTA_WRAP, O)
          }), [O.current]), (0, r.useEffect)((() => {
            l(se.CTA_SHADER, j)
          }), [j.current]);
          const z = d === Ce.LIST_PLATES ? 0 : -1,
            D = (0, r.useCallback)((e => {
              if (n() === Ce.LIST_PLATES) {
                const t = 0 === e ? Ce.NEW_PLATE : Ce.VIEW_PLATE;
                e && (M({
                  ...L,
                  event: "license_plate_open",
                  view_name: "list plates",
                  position: e
                }), M({
                  ...L,
                  event: "virtualPageview",
                  display_type: k ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                })), i(b[e]), o(e), n(t)
              }
            }), [b]),
            W = (0, r.useCallback)((e => {
              q(0, d)
            }), [d]),
            B = (0, r.useMemo)((() => P ? (0, x.jsx)(Aa, {
              plateData: N,
              plateWidthInPixels: P.width,
              currentView: d,
              loginUrl: _,
              inputTabIndex: z,
              track: M,
              trackingPresets: L,
              onClickPlate: D,
              t
            }) : null), [d, _, P]),
            F = (0, r.useMemo)((() => void 0 !== b ? Y(g, b) ? (0, x.jsx)(Ra, {
              t,
              vehicleName: `${g?.manufacturerName||""} ${g?.vehicleName||""}`.trim(),
              onClickEdit: () => {
                M({
                  ...L,
                  event: "license_plate_edit_click",
                  text: "edit"
                }), D(N.index)
              },
              isVisible: d === Ce.LIST_PLATES
            }) : C ? (0, x.jsxs)("div", {
              className: [da.maxPlatesReached, d !== Ce.LIST_PLATES ? da.hidden : ""].join(" "),
              children: [(0, x.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === b.length ? null : (0, x.jsxs)("div", {
              type: "button",
              style: {
                pointerEvents: d === Ce.LIST_PLATES ? "all" : "none"
              },
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (M({
                  ...L,
                  event: "license_plate_create_click",
                  text: "new order"
                }), D(N.index))
              },
              onClick: () => {
                M({
                  ...L,
                  event: "license_plate_create_click",
                  text: "new order"
                }), D(N.index)
              },
              onPointerOver: k ? void 0 : () => {
                A?.current && W(A?.current)
              },
              onPointerOut: k ? void 0 : () => {
                var e;
                A?.current && (e = A?.current, X(e))
              },
              className: [da.createNewPlate, d !== Ce.LIST_PLATES ? da.hidden : ""].join(" "),
              ref: V,
              tabIndex: z,
              children: [(0, x.jsx)("span", {
                className: `${da.ctaText} ${w?da.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, x.jsx)("div", {
                className: da.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [P, d, C]),
            U = (0, r.useMemo)((() => void 0 !== g && P ? (0, x.jsx)("div", {
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (M({
                  ...L,
                  event: "license_plate_create_click",
                  text: "new order"
                }), C || D(N.index))
              },
              onClick: () => {
                M({
                  ...L,
                  event: "license_plate_create_click",
                  text: "new order"
                }), C || D(N.index)
              },
              type: "button",
              tabIndex: z,
              style: {
                width: `${P.width}px`,
                height: P.width / 2 + "px",
                pointerEvents: d === Ce.LIST_PLATES ? "all" : "none",
                fontSize: P.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              },
              children: F
            }) : null), [d, g, P, h, N, F, k, C]);
          return (0, r.useEffect)((() => {
            if (v?.[0]) {
              const e = v[0].image;
              if (e && O.current) {
                const t = O.current.querySelector("canvas");
                t && O.current.removeChild(t), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", a && !g && d === Ce.LIST_PLATES && e.classList.add(da.newOrder), O.current.append(e)
              }
            }
          }), [v, O.current, g, a, d]), (0, r.useEffect)((() => {
            u?.[0]?.current || O.current && (u[0] = O)
          }), [u, O.current]), (0, r.useEffect)((() => {
            if (v?.[0]) {
              const e = v[0].image;
              e && f?.scene && (e.style.transition = "transform 0.25s ease-out")
            }
          }), [p, f, v]), (0, r.useMemo)((() => {
            if (!P || !N || !m?.gridOptions) return null;
            const e = Y(g, b) ? da.pendingOrderShader : "",
              t = a ? e : da.loggedOutShader,
              {
                width: r,
                height: s
              } = P,
              {
                top: n,
                left: i,
                right: o,
                bottom: c
              } = P.rect,
              l = [da.CTAWrap];
            return a || l.push(da.loggedOut), a && C && l.push(da.maxPlatesReachedWrap), (0, x.jsxs)("div", {
              ref: O,
              className: l.join(" "),
              style: {
                top: n,
                left: i,
                bottom: c,
                right: o,
                width: r,
                height: s
              },
              children: [(0, x.jsx)("div", {
                ref: j,
                className: t
              }), a ? U : B]
            })
          }), [F, C, a])
        },
        Oa = e => {
          let {
            plate: t,
            index: a,
            accessiblePlateRefs: s,
            details: n,
            tabIndex: i,
            texture: o
          } = e;
          const {
            loggedIn: l
          } = (0, c.useRockstarUser)(), {
            setCurrentView: d,
            setCurrentPlate: u,
            setCurrentPlateIndex: m,
            state: {
              currentView: p,
              isLoading: _,
              plateTextures: g,
              plates: f,
              deletedPlateIndex: b,
              isMobile: h,
              shouldRenderScene: k
            }
          } = gt(), {
            track: y
          } = (0, c.useGtmTrack)(), v = {
            view_name: "license plate creator - landing page logged " + (l ? "in" : "out")
          }, w = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            !s.current[a + 1]?.current && w && (s.current[a + 1] = w)
          }), [w.current, f, _]), (0, r.useEffect)((() => {
            if (o && w.current) {
              const e = w.current.querySelector("canvas");
              e && w.current.removeChild(e), o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.opacity = 1, o.style.top = "0px", o.style.left = "0px", o.style.pointerEvents = "none", o.style.transition = "transform 0.25s ease-out", o.classList.add("rockstargames-modules-gtao-license-platefdedf6af97ba01b09fe912dfd53b3b15"), w.current.append(o)
            }
          }), [g, o, w.current]), (0, r.useMemo)((() => (0, x.jsx)("button", {
            "aria-label": `${t?.style?.displayName||""} license plate ${t.plateText?`with the number ${t.plateText}`:""}`.trim(),
            className: "rockstargames-modules-gtao-license-platec7d0ee6491ccdc554552ffea411a56b1",
            ref: w,
            id: `keyboard-accessible-license-plate-${a}`,
            style: {
              position: "absolute",
              height: `${n.height+1}px`,
              width: `${n.width}px`,
              top: n.top - 1 + "px",
              left: `${n.left}px`,
              transformOrigin: "center",
              pointerEvents: p !== Ce.LIST_PLATES || "number" == typeof b || k ? "none" : "all"
            },
            tabIndex: i,
            type: "button",
            onClick: e => {
              e.target.blur(), y({
                ...v,
                event: "license_plate_open",
                view_name: "list plates",
                position: a
              }), y({
                ...v,
                event: "virtualPageview",
                display_type: h ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), u(t), m(a + 1), d(Ce.VIEW_PLATE)
            }
          })), [t, o, n, k, p])
        },
        ja = e => {
          let {
            t
          } = e;
          const {
            setAccessiblePlates: a,
            setRefs: s,
            state: {
              currentView: n,
              gridState: i,
              plates: o,
              realHeight: l,
              refs: d,
              isMobile: u,
              plateTextures: m
            }
          } = gt(), {
            loggedIn: p
          } = (0, c.useRockstarUser)(), [_, g] = (0, r.useState)([]), f = (0, r.useRef)(null), b = (0, r.useRef)([]);
          return (0, r.useEffect)((() => {
            b.current && o.length > 0 && b.current.length === o.length && a(b.current)
          }), [b.current?.length, o]), (0, r.useEffect)((() => {
            s(se.ACCESSIBLE_PLATE_GRID, f)
          }), [f.current]), (0, r.useEffect)((() => {
            const e = d[se.ROOT]?.current,
              t = d?.[se.SIDEBAR]?.current,
              a = [];
            e && t && i && (o.forEach(((r, s) => {
              if (s) {
                const r = G(s, e, Number(l.replace("px", "")), i, u ? void 0 : {
                    x: t.offsetWidth,
                    y: 0
                  }),
                  {
                    height: n,
                    width: o,
                    rect: {
                      top: c,
                      left: d
                    }
                  } = r;
                n && o && n < o && a.push({
                  width: o,
                  height: n,
                  top: c,
                  left: d
                })
              }
            })), g([...a]))
          }), [m, d && d?.[se.SIDEBAR]?.current]), (0, r.useMemo)((() => p && !_.length ? null : (b.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, x.jsxs)("div", {
            ref: f,
            className: _a,
            children: [(0, x.jsx)(Ia, {
              t
            }), o.filter(((e, t) => t)).map(((e, t) => (0, x.jsx)(Oa, {
              accessiblePlateRefs: b,
              plate: e,
              index: t,
              details: _[t],
              tabIndex: n === Ce.LIST_PLATES ? 0 : -1,
              texture: m[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [_, n])
        },
        Ma = (0, s.withIntl)((0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: s,
            setCharacter: n,
            setCurrentView: b,
            setDeletedPlateIndex: k,
            setError: y,
            setIs3D: v,
            setIsLoading: w,
            setIsLoggedIn: E,
            setIsMobile: P,
            setPendingOrder: S,
            setPlateNumber: N,
            setPlates: T,
            setRefs: C,
            setSelectedStyle: R,
            setVehicles: A,
            setXmas23PlatesAllowed: I,
            state: O
          } = gt(), {
            error: j,
            plates: M,
            pendingOrder: L,
            isMobile: V,
            three: D,
            currentView: B,
            shouldForce2D: F,
            isLoading: U
          } = O, {
            setCustomFooter: $
          } = (0, u.useRockstarLocalState)(), {
            loggedIn: H
          } = (0, c.useRockstarUser)();
          (0, r.useEffect)((() => {
            E(H)
          }), [H]);
          const {
            selectedCharacterTuple: G
          } = (0, c.useRockstarUserState)(), q = (0, o.useRockstarTokenPing)(), X = (0, r.useRef)(null), Z = (0, r.useRef)(null), K = (0, r.useRef)(null), [J, Q] = (0, r.useState)(null), [ee] = (0, _.useSearchParams)(), [te, ae] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            try {
              if (!d.supportedBrowsers.test(navigator.userAgent)) throw new Error("browser");
              const e = document.createElement("canvas"),
                t = ["webgl2", "webgl", "experimental-webgl", "moz-webgl", "webkit-3d"].some((t => {
                  const a = e.getContext(t);
                  return a && "function" == typeof a?.getParameter
                }));
              if (!window.WebGLRenderingContext || !t) throw new Error("webgl")
            } catch (e) {
              y([e?.message])
            } finally {
              ae(!0)
            }
          }), []);
          const re = (0, r.useCallback)(h().debounce((() => {
            if (D?.renderer) {
              const {
                renderer: e
              } = D, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              s({
                width: t,
                height: a
              })
            }
            P(W())
          }), 100), [D]);
          (0, r.useEffect)((() => (re(), window.addEventListener("resize", re, !0), () => window.removeEventListener("resize", re, !0))), [D]), (0, r.useEffect)((() => ((0, u.setFreezeUserShouldSeeMore)(!0), $(!0), () => {
            (0, u.setFreezeUserShouldSeeMore)(!1), $(!1), b(Ce.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            C(se.CANVAS_WRAP, X)
          }), [X.current]), (0, r.useEffect)((() => {
            C(se.ROOT, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            C(se.MOBILE_SIDEBAR_PORTAL_TARGET, K)
          }), [K.current]), (0, r.useEffect)((() => {
            if (!te || "webgl" === j || "browser" === j) return;
            y(null), n(G), b(Ce.LIST_PLATES), R(Ae.style?.id), S(null), k(null);
            const e = (H ? [] : [Ae]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== H && (T(e), !1 === H && w(!1)), A([]), (async () => {
              try {
                H && w(!0);
                const e = y();
                if (!H || null === G || e) return;
                if (!1 === G) return void y(["character"]);
                const [t, a] = G, {
                  error: r = null,
                  result: s
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  pingBearer: q,
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (r) throw Object.assign(new Error(""), r);
                I(s?.xmas23PlatesAllowed);
                const n = s?.plates?.map((e => {
                    const t = z(e?.vehicles?.[0]?.plateStyle ?? "YellowBlack") ?? z("YellowBlack");
                    return {
                      ...e,
                      style: t
                    }
                  })) ?? [],
                  {
                    error: i = null,
                    result: o
                  } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: q,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (i) throw Object.assign(new Error(""), i);
                const c = h().uniqBy(o?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!c.length) return y(["vehicles"]), void w(!1);
                A(c);
                const {
                  error: l,
                  result: u
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: q,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (l) throw Object.assign(new Error(""), l);
                const m = Y(u, M);
                let p = [Ae, ...n];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (S(u), R(Ae.style.id)) : S(null), N(Ae.plateText), w(!1), T(p)
              } catch (e) {
                y(["api", e]), w(!1)
              }
            })()
          }), [String(G), H, te]), (0, r.useEffect)((() => {
            if (Y(L, M)) {
              const e = z(L.plateStyle);
              "number" == typeof e?.id && R(e.id), M[0].plateText || N(L.plateText)
            }
          }), [L]), (0, r.useEffect)((() => {
            if (J || !ie || j || !te) return;
            const e = ee.get("envUrl") || a(1538),
              t = new m.LoadingManager((() => {
                Q({
                  environmentMap: l,
                  environmentModel: c,
                  plateTextures: d
                })
              })),
              r = new p.B(t),
              s = new g.Z(t),
              n = new f.p(t);
            s.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.3/"), r.setDRACOLoader(s), n.detectSupport(new m.WebGLRenderer), n.setTranscoderPath("https://unpkg.com/three@0.134.0/examples/js/libs/basis/"), r.setKTX2Loader(n);
            const i = new m.TextureLoader(t),
              o = new m.CubeTextureLoader(t);
            let c;
            r.load(e, (e => {
              c = e
            }), void 0, (e => console.log("err", e)));
            const l = o.load([a(6933), a(31), a(4044), a(1014), a(2519), a(2253)]),
              d = ie.map((e => {
                const {
                  fontColor: t,
                  fontSize: a
                } = e, [r, s, n, o] = [e.albedoImageUrl, e.alphaImageUrl, e.bumpImageUrl, e.roughnessImageUrl].map((e => i.load(e)));
                return {
                  albedoMap: r,
                  alphaMap: s,
                  bumpMap: n,
                  roughnessMap: o,
                  fontColor: t,
                  fontSize: a
                }
              }))
          }), [J, ie, j, te]), (0, r.useEffect)((() => {
            const e = B !== Ce.LIST_PLATES && !F;
            v(e)
          }), [B, F]);
          const ne = (0, r.useMemo)((() => (0, x.jsx)(i.Canvas, {
            shadows: !W(),
            linear: !0,
            flat: !0,
            dpr: window.devicePixelRatio,
            camera: {
              position: [0, 0, 0],
              fov: 35
            },
            onCreated: e => {
              let {
                gl: t
              } = e;
              t.setClearColor(0, 0)
            },
            children: (0, x.jsx)(l.GtmProvider, {
              checkUser: !1,
              children: (0, x.jsx)(jt, {
                loadedAssets: J
              })
            })
          })), [J, H]);
          return te && null !== H ? j ? (0, x.jsx)(Na, {
            t
          }) : (0, x.jsxs)("div", {
            ref: Z,
            className: "rockstargames-modules-gtao-license-platee77939e1820c318536a581396891c6d8",
            children: [V && (0, x.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platecb41956b83afc8b368f030e3ac9efd58",
              ref: K,
              children: (0, x.jsx)(Ta, {
                isLoading: U
              })
            }), (0, x.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plated84d9facb1ce367777aeb61cfb594eb8",
              children: [(0, x.jsx)(Pa, {
                isMobile: V
              }), (0, x.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platebca268dc1d11ae6823b1bc5b48b364ca",
                ref: X,
                children: [ne, !V && (0, x.jsx)(Ta, {
                  isLoading: U
                })]
              })]
            }), (0, x.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platea9a516aab758a9651e41554f2e2a0890"
            }), (0, x.jsx)(ja, {
              t
            }), (0, x.jsx)(ft, {
              t
            })]
          }) : null
        })), n)
    },
    5913: e => {
      var t = {
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

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.GameData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var n = r[t] || new Set,
          i = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var r = s(e, t);
          r && a.definitions.push(r)
        })), a
      }(t, "GameData")
    },
    4905: (e, t, a) => {
      var r = {
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
        "./fpb_13.svg": 908,
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

      function s(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = n, e.exports = s, s.id = 4905
    },
    3983: (e, t, a) => {
      var r = {
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
        "./fpb_13.svg": 908,
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

      function s(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      s.keys = function() {
        return Object.keys(r)
      }, s.resolve = n, e.exports = s, s.id = 3983
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
    908: e => {
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
    1538: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/glb/1843b92a5b0f80dbad5ac625e18712c9.glb"
    },
    31: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/310aae02f3b729401148b00e21e63680.png"
    },
    1014: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/080f77652dad3eab9c63ae40289bc2cd.png"
    },
    2253: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/696c6c8a65f80cb1ddef34af304bbea3.png"
    },
    6933: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22c93544bb6cc43f1456250955025b44.png"
    },
    4044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6102d9185c58dfe8a1da872c7e27558.png"
    },
    2519: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5970684d704507ab7282e32cc69cd04b.png"
    },
    2216: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e842fb4993c970ad9f99c54f66dc23f1.jpg"
    },
    6003: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1911068b624e9ad6e24e0b5af557ca98.png"
    },
    8657: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f00c086b0ccf0f5e143a07d6c397af01.jpg"
    },
    3130: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81c8bf8e8f3845940a1ddf505a9dbb2e.jpg"
    },
    1484: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad86726bf1f59ba9e72f48ec3d909510.png"
    },
    6538: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/24ace1d97bcf47f10b248854b28723fb.jpg"
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eeeb3b31a594a9c0b399af3296c3caed.jpg"
    },
    1989: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27588e10169bb7555bed1fe99963ddf4.jpg"
    },
    3817: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a5907832294f4292975a7428408031.png"
    },
    2003: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/318db7582cb10a2b660aafa45a49ec13.jpg"
    },
    2608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/582604393d5f75a3b9b1943b1fdb856f.jpg"
    },
    5587: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f698f122632ac925fa54df7fd371035.jpg"
    },
    747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9ff7cef42d4c37cc4a158aadd7bf9e70.png"
    },
    1657: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/306a9606a4773a61342b14618e5e4165.jpg"
    },
    8566: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e41a5143c3d0ae5a16573064ee1e309a.jpg"
    },
    3281: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca6a8bfc39e4bff84d6f31176074b342.png"
    },
    237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ed129e5ac2d871dddf75daba04816bc0.jpg"
    },
    662: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4235e82a6662cc6c700deee2b5aa28b2.jpg"
    },
    1336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fcdc388bebc3a656c2584e90c1f4a6bf.png"
    },
    3302: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5f90e389f2e4dbec1782e382c2e0efd.jpg"
    },
    4065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58af63f198dffe524132d43c57561d1c.jpg"
    },
    4844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1525b482fdcab1ad0e483f4346b0f5a.png"
    },
    4588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cc712e262f7a46085049a07d1ca145ea.jpg"
    },
    7654: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/858ed8fe9a4aaed2e385023aac516ede.jpg"
    },
    7958: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99e28a3c5885ec460aa556591903f67f.jpg"
    }
  }
]);