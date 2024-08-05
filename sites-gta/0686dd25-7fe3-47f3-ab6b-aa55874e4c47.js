! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      i = (new Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "0686dd25-7fe3-47f3-ab6b-aa55874e4c47", e._sentryDebugIdIdentifier = "sentry-dbid-0686dd25-7fe3-47f3-ab6b-aa55874e4c47")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [325], {
    6516: (e, i, s) => {
      "use strict";
      var a = s(1403),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function _(e, i, s) {
        var a, n = {},
          _ = null,
          l = null;
        for (a in void 0 !== s && (_ = "" + s), void 0 !== i.key && (_ = "" + i.key), void 0 !== i.ref && (l = i.ref), i) o.call(i, a) && !c.hasOwnProperty(a) && (n[a] = i[a]);
        if (e && e.defaultProps)
          for (a in i = e.defaultProps) void 0 === n[a] && (n[a] = i[a]);
        return {
          $$typeof: t,
          type: e,
          key: _,
          ref: l,
          props: n,
          _owner: r.current
        }
      }
      i.Fragment = n, i.jsx = _, i.jsxs = _
    },
    6632: (e, i, s) => {
      "use strict";
      e.exports = s(6516)
    },
    6817: (e, i, s) => {
      "use strict";
      s.r(i), s.d(i, {
        default: () => H
      });
      var a = s(1403),
        t = s(6040),
        n = s(4781),
        o = s(8281),
        r = s(3134),
        c = s(6524),
        _ = s(2756),
        l = s(207),
        d = s(5190);
      var m = s(6632);
      const g = e => {
        let {
          children: i,
          showModal: s = !1,
          dialogRef: n,
          onClose: o = (() => {})
        } = e;
        return (0, a.useEffect)((() => {
          s && n.current && (n.current.showModal(), setTimeout((() => {
            t.gsap.set(window, {
              scrollTo: 0
            })
          }), 300))
        }), [s]), (0, m.jsxs)("dialog", {
          ref: n,
          className: "rockstargames-sites-gtaf9e43e4fb6047fea4c181b2685e6a31f",
          onClick: e => (e => {
            e.currentTarget && (e.currentTarget.close(), o(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())
          })(e),
          children: [(0, m.jsx)("button", {
            className: "rockstargames-sites-gtaf32ab0b8f2b383c67fa243b02bf04344",
            onClick: () => (n.current?.close(), void o()),
            type: "button",
            value: "cancel",
            "aria-label": "close",
            children: (0, m.jsx)("div", {
              className: "rockstargames-sites-gtacd8d83408c5caf82b34b82ba9d5815bc"
            })
          }), (0, m.jsx)("div", {
            className: "rockstargames-sites-gtad2f4f5cebf82138c2ba6b42325a7d718",
            children: i
          })]
        })
      };
      var p = s(5186);
      const f = e => {
          let {
            alt: i = "",
            className: s = "",
            clipRule: a = "evenodd",
            fill: t = "white",
            fillRule: n = "evenodd"
          } = e;
          return (0, m.jsxs)("svg", {
            className: s,
            fill: t,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, m.jsx)("title", {
              children: i
            }), (0, m.jsx)("path", {
              fillRule: n,
              clipRule: a,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        },
        u = {
          pillBtn: "rockstargames-sites-gtaa3256dd861609a52e1b54835f22e0578",
          selected: "rockstargames-sites-gtac4ae2f823c44540aa5db5e0b06d1e2c5",
          infoSection: "rockstargames-sites-gtac1c30faa6c9f49b7ceee4caf32fd9b45",
          logo: "rockstargames-sites-gtaca8f6a169617af3fc7b90e396b382b80",
          content: "rockstargames-sites-gtafa96ee91cc2f2721933253834876a0af",
          text: "rockstargames-sites-gtaf9ec79fe3eae9c71837a40b17f88b98b",
          header: "rockstargames-sites-gtabc7ad0da65fb8d5933bd29feb81efbcd",
          blurb: "rockstargames-sites-gtace0ecd491f888f26193d7958cd292b57",
          button: "rockstargames-sites-gtaa79e91c631e549f3af7e691c87aa42a2",
          buttonIcon: "rockstargames-sites-gtaac8072b64972c11ee294ad2a351c3667",
          platforms: "rockstargames-sites-gtafec2f360e23ebef8b2ca689e3c2dc5c5"
        };
      t.gsap.registerPlugin(n.u, r.I);
      const k = (0, a.forwardRef)(((e, i) => {
        let {
          blurb: a,
          buttonText: t,
          className: n = "",
          image: o = "logo_secondary_color.png",
          header: r
        } = e;
        const {
          setIsModalOpen: c
        } = (0, p.I2)(), {
          track: _
        } = (0, l.useGtmTrack)();
        return (0, m.jsxs)("div", {
          className: [u.infoSection, n || ""].join(" "),
          ref: i,
          children: [(0, m.jsx)("img", {
            className: u.logo,
            src: s(9877)(`./${o}`),
            alt: ""
          }), (0, m.jsxs)("div", {
            className: u.content,
            children: [(0, m.jsxs)("div", {
              className: u.text,
              children: [(0, m.jsx)("h1", {
                className: u.header,
                children: r
              }), (0, m.jsx)("div", {
                className: u.blurb,
                dangerouslySetInnerHTML: {
                  __html: (d = a, d.split(/\r\n|\r|\n/).reduce(((e, i) => {
                    let s = e;
                    return i.trim().length && (s += `<p>${i}</p>`), s
                  })))
                }
              })]
            }), (0, m.jsxs)("button", {
              type: "button",
              className: u.button,
              onClick: () => {
                _({
                  event: "video_play",
                  element_placement: "landing_page_description",
                  video_id: "promo_video",
                  video_title: "promo_video"
                }), c(!0)
              },
              children: [(0, m.jsx)(f, {
                className: u.buttonIcon
              }), t]
            })]
          })]
        });
        var d
      }));
      k.displayName = "InfoSection";
      const v = k;
      var b = s(6717);
      const h = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        w = (0, b.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var y = s(9779);
      const x = "rockstargames-sites-gtaff481c537a56a6fcdb1be85dfbc8944e",
        j = (0, b.withIntl)((e => {
          let {
            children: i,
            to: s = "#",
            alt: t = "",
            autoBlank: n = !1,
            onClick: o = (() => {}),
            focused: r = !1,
            ...c
          } = e;
          const _ = (0, a.useRef)(null),
            l = (0, b.useIntl)(),
            d = !/^(https?|mailto):/i.test(s),
            g = /^#/.test(s),
            p = c?.target ?? (n ? "_blank" : "_self");
          let {
            ...f
          } = c, u = "";
          if ("aria-label" in f && f["aria-label"] && (u = "_blank" === p ? `${f["aria-label"]} ${l.formatMessage(w.aria_label_open_new_window)}` : f["aria-label"]), (0, a.useEffect)((() => {
              r && _?.current && _.current.focus()
            }), [_?.current, r]), g) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), o && o(e)
            };
            return (0, m.jsxs)("a", {
              title: t,
              href: s,
              onClick: e,
              ...f,
              "aria-label": u,
              ref: _,
              children: [i, "_blank" === p && !u && (0, m.jsx)("span", {
                className: x,
                children: l.formatMessage(w.aria_label_open_new_window)
              })]
            })
          }
          if (d) return (0, m.jsxs)(y.NavLink, {
            title: t,
            to: s,
            onClick: o,
            ...f,
            "aria-label": u,
            ref: _,
            children: [i, "_blank" === p && !u && (0, m.jsx)("span", {
              className: x,
              children: l.formatMessage(w.aria_label_open_new_window)
            })]
          });
          const k = Object.keys(f).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, i) => ({
            ...e,
            [i]: c[i]
          })), {});
          return "function" == typeof k?.className && delete k.className, (0, m.jsxs)("a", {
            href: s,
            title: t,
            onClick: o,
            target: p,
            ...k,
            "aria-label": u,
            ref: _,
            children: [i, "_blank" === p && !u && (0, m.jsx)("span", {
              className: x,
              children: l.formatMessage(w.aria_label_open_new_window)
            })]
          })
        }), h);
      var N = s(8407),
        z = (Object.defineProperty, new Map),
        S = new WeakMap,
        C = 0;

      function P(e, i, s = {}, a = undefined) {
        if (void 0 === window.IntersectionObserver && void 0 !== a) {
          const t = e.getBoundingClientRect();
          return i(a, {
            isIntersecting: a,
            target: e,
            intersectionRatio: "number" == typeof s.threshold ? s.threshold : 0,
            time: 0,
            boundingClientRect: t,
            intersectionRect: t,
            rootBounds: t
          }), () => {}
        }
        const {
          id: t,
          observer: n,
          elements: o
        } = function(e) {
          const i = function(e) {
            return Object.keys(e).sort().filter((i => void 0 !== e[i])).map((i => {
              return `${i}_${"root"===i?(s=e.root,s?(S.has(s)||(C+=1,S.set(s,C.toString())),S.get(s)):"0"):e[i]}`;
              var s
            })).toString()
          }(e);
          let s = z.get(i);
          if (!s) {
            const a = new Map;
            let t;
            const n = new IntersectionObserver((i => {
              i.forEach((i => {
                var s;
                const n = i.isIntersecting && t.some((e => i.intersectionRatio >= e));
                e.trackVisibility && void 0 === i.isVisible && (i.isVisible = n), null == (s = a.get(i.target)) || s.forEach((e => {
                  e(n, i)
                }))
              }))
            }), e);
            t = n.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
              id: i,
              observer: n,
              elements: a
            }, z.set(i, s)
          }
          return s
        }(s), r = o.get(e) || [];
        return o.has(e) || o.set(e, r), r.push(i), n.observe(e),
          function() {
            r.splice(r.indexOf(i), 1), 0 === r.length && (o.delete(e), n.unobserve(e)), 0 === o.size && (n.disconnect(), z.delete(t))
          }
      }
      a.Component;
      class R extends a.Component {
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
            className: "rockstargames-sites-gtaf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, m.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, m.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const I = {
          rating: "rockstargames-sites-gtaa1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-gtacba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-gtaff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-gtad47cd2b7c7415cb44cddef00b1c9b35f"
        },
        T = (0, b.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var M = s(5913);
      const A = void 0 !== M.GameData ? M.GameData : GameDataDefault;
      (0, _.importAll)(s(4905));
      const D = function(e) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(s) {
          return (0, m.jsx)(R, {
            header: i,
            children: (0, m.jsx)(e, {
              ...s
            })
          })
        }
      }((0, b.withIntl)((e => {
        let {
          descriptors: i = null,
          footer: t = null,
          href: n,
          img: o = null,
          titleSlug: r = null,
          style: c = {},
          className: d
        } = e;
        const [g, p] = (0, a.useState)(!1), {
          inView: f
        } = function({
          threshold: e,
          delay: i,
          trackVisibility: s,
          rootMargin: t,
          root: n,
          triggerOnce: o,
          skip: r,
          initialInView: c,
          fallbackInView: _,
          onChange: l
        } = {}) {
          var d;
          const [m, g] = a.useState(null), p = a.useRef(), [f, u] = a.useState({
            inView: !!c,
            entry: void 0
          });
          p.current = l, a.useEffect((() => {
            if (r || !m) return;
            let a;
            return a = P(m, ((e, i) => {
              u({
                inView: e,
                entry: i
              }), p.current && p.current(e, i), i.isIntersecting && o && a && (a(), a = void 0)
            }), {
              root: n,
              rootMargin: t,
              threshold: e,
              trackVisibility: s,
              delay: i
            }, _), () => {
              a && a()
            }
          }), [Array.isArray(e) ? e.toString() : e, m, n, t, o, r, s, _, i]);
          const k = null == (d = f.entry) ? void 0 : d.target,
            v = a.useRef();
          m || !k || o || r || v.current === k || (v.current = k, u({
            inView: !!c,
            entry: void 0
          }));
          const b = [g, f.inView, f.entry];
          return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
        }({
          threshold: .6
        }), [u, k] = (0, a.useState)({
          ratingDescriptors: i,
          ratingFooter: t,
          ratingImg: o,
          ratingUrl: n
        }), {
          track: v
        } = (0, l.useGtmTrack)(), h = (0, b.useIntl)(), {
          data: w
        } = (0, N.useQuery)(A, {
          variables: {
            titleSlug: r
          },
          skip: !r
        });
        if ((0, a.useEffect)((() => {
            w && k(w?.game)
          }), [w]), (0, a.useEffect)((() => {
            f && !g && u.img_rating && (v({
              event: "page_section_impression",
              element_placement: "rating"
            }), p(!0))
          }), [f]), !u.ratingImg) return null;
        const y = !!u.ratingDescriptors;
        return (0, m.jsxs)("div", {
          className: [I.rating, y ? I.withDescriptors : I.withOutDescriptors, d || ""].join(" "),
          style: (0, _.safeStyles)(c),
          children: [(0, m.jsx)(j, {
            to: u.ratingUrl,
            target: "_blank",
            children: (0, m.jsx)("img", {
              alt: h.formatMessage(T.components_ratings_link_alt, {
                rating: (x = u.ratingImg, x.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: s(3983)(`./${u.ratingImg}`)
            })
          }), y && (0, m.jsxs)("div", {
            className: I.text,
            children: [(0, m.jsx)("p", {
              className: I.descriptors,
              dangerouslySetInnerHTML: {
                __html: u?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), u.ratingFooter && (0, m.jsx)("hr", {}), u.ratingFooter && (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: u.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var x
      }), h));
      var E = s(9395);
      const O = {
          pillBtn: "rockstargames-sites-gtaf13b9179a06214eff961cc6b79e9221c",
          selected: "rockstargames-sites-gtac6d9bc8d82f9ddcc6494b70d979b4a60",
          infoSectionFooter: "rockstargames-sites-gtaa6534d16de3de0cad30f0cc18bef18ce",
          logo: "rockstargames-sites-gtad5e76dfe433e84eeb3f450cdb02d64f8",
          platforms: "rockstargames-sites-gtaa5a6a6858bae074d7a93de089b73cd2a",
          rating: "rockstargames-sites-gtaff1b0cadd8996e1e7c9529fe7ada9ec0",
          withoutBorder: "rockstargames-sites-gtaa747edf520af07704d6be4f93c40e226"
        },
        V = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        F = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        $ = (0, b.createDevLocaleHook)({
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: V,
          fr: V,
          hans: F,
          it: V,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: F,
          mx: F,
          pl: V,
          ru: F,
          tw: F,
          us: F
        }),
        q = (0, a.forwardRef)(((e, i) => {
          let {
            className: a = "",
            titleSlug: t = "",
            platforms: n = [{
              name: "PlayStation 5",
              url: "playstation.svg"
            }, {
              name: "Xbox Series X|S",
              url: "xbox.svg"
            }]
          } = e;
          const o = (0, b.useIntl)(),
            r = $(),
            c = "esrb_rp.svg" === r.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            _ = "esrb_rp.svg" === r.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, m.jsxs)("div", {
            className: [O.infoSectionFooter, a || ""].join(" "),
            ref: i,
            children: [(0, m.jsx)("div", {
              className: O.rating,
              children: (0, m.jsx)(D, {
                className: [O.mobileRating, O.rating, O.withoutBorder].join(" "),
                titleSlug: t || null,
                img: r.rating_img,
                descriptors: c,
                href: r.rating_link,
                footer: _
              })
            }), n.length && (0, m.jsx)("div", {
              className: [O.platforms, O.hideOnMobile].join(" "),
              children: n.map((e => {
                let {
                  name: i,
                  url: a
                } = e;
                return (0, m.jsx)("img", {
                  src: s(9877)(`./${a}`),
                  alt: i
                }, a)
              }))
            }), (0, m.jsx)(j, {
              to: "/",
              "aria-label": o.formatMessage(E.A.home_text),
              children: (0, m.jsx)("img", {
                className: [O.logo, O.hideOnMobile].join(" "),
                src: s(1677),
                alt: o.formatMessage(E.A.rockstar_games_logo_alt_text)
              })
            })]
          })
        }));
      q.displayName = "InfoSectionFooter";
      const L = q;
      var U = s(336);
      const B = {
        pillBtn: "rockstargames-sites-gtac338d0e08e9400269820b3c4a45b5525",
        selected: "rockstargames-sites-gtaced4661d63665e45336e2e2187753209",
        destinationPage: "rockstargames-sites-gtabc6ca598d5a617f9d5de3b64fe313f03",
        footerContainer: "rockstargames-sites-gtaf1c7372665fda23e3ab90506aa5d0020",
        destinationContainer: "rockstargames-sites-gtaa3e59fbf2597d85b4fd294987f069625",
        active: "rockstargames-sites-gtacca34a9fd64948f177503882c7e50aae",
        hero: "rockstargames-sites-gtacccdbd1e2d26d8f97046287bbf957bee",
        infoSectionContainer: "rockstargames-sites-gtae57de03b5c8c667b1771e43a0c067a9a",
        videoDialog: "rockstargames-sites-gtaf00e2cd130e8bce484a2813d0993e2ca",
        videoDialogContent: "rockstargames-sites-gtae4a0e6055c593cb409ff99ac4d435967"
      };
      t.gsap.registerPlugin(n.u, o.R, r.I);
      const W = () => {
          const {
            timelines: e,
            setIsStandalone: i,
            isVideoPlayerActive: s,
            createYouTubePlayer: r,
            dialogPlayerRef: f,
            isModalOpen: u,
            setIsModalOpen: k,
            setIsVideoPlayerActive: b,
            resetVideo: h
          } = (0, p.I2)(), {
            setStandalone: w
          } = (0, _.useRockstarLocalState)(), y = (0, a.useRef)(), x = (0, a.useRef)(null), j = (0, a.useRef)(null), N = (0, a.useRef)(null), z = (0, a.useRef)(null), S = (0, a.useRef)(null), C = (0, a.useRef)(null), P = (0, a.useRef)(null), R = (0, a.useRef)(s), I = (0, a.useRef)(null), {
            loading: T,
            translation: M
          } = (0, p.c3)(), {
            track: A
          } = (0, l.useGtmTrack)();
          (0, a.useEffect)((() => {
            t.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const D = e => {
            const i = e.relatedTarget;
            x.current && (j?.current?.heroUIRef?.current.contains(i) ? t.gsap.set(window, {
              scrollTo: 0
            }) : x.current.contains(i) && t.gsap.set(window, {
              scrollTo: i
            }))
          };
          return (0, a.useEffect)((() => (i(!0), w(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", D), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", D), w(!1)
          })), []), (0, a.useEffect)((() => {
            R.current = s, y.current && y.current.paused(s)
          }), [s]), (0, a.useEffect)((() => (S.current && (y.current = o.R.create({
            content: S.current,
            smooth: .5,
            normalizeScroll: !0
          }), y.current.paused(!0)), () => {
            y.current?.kill()
          })), [S.current]), (0, a.useLayoutEffect)((() => {
            const i = t.gsap.matchMedia();
            e?.introTimeline && i.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (i => (e.introTimeline.eventCallback("onComplete", (() => {
              y.current && y.current.paused(!1);
              const e = j?.current?.heroUIRef?.current,
                i = j?.current?.heroImagesRefs?.current?.heroImagesRef?.current,
                s = n.u.isTouch ? .75 : 100,
                a = n.u.isTouch ? t.Expo.easeInOut : "none";
              P.current && P.current.progress(0).kill(), P.current = t.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: s,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: x.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${B.active}`,
                  pin: !0,
                  start: n.u.isTouch ? "top +=-1" : "top top",
                  end: n.u.isTouch ? "+=50" : "+=300",
                  scrub: !n.u.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !n.u.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: t.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    t.gsap.set(C?.current, {
                      display: "none"
                    })
                  },
                  onToggle: e => {
                    y.current && (t.gsap.set(C?.current, {
                      display: e.isActive ? "none" : "block"
                    }), -1 !== e.direction && (R.current || (y.current.paused(!0), setTimeout((() => {
                      R.current || y?.current?.paused(!1)
                    }), 500))))
                  }
                },
                onComplete: () => {
                  1 === n.u.isTouch && t.gsap.set(C?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === n.u.isTouch && t.gsap.set(C?.current, {
                    display: "none"
                  })
                }
              }).set(x.current, {
                height: () => z?.current?.clientHeight,
                maxHeight: () => z?.current?.clientHeight
              }).fromTo(e, {
                opacity: 1
              }, {
                opacity: 0,
                duration: n.u.isTouch ? .4 * s : .2 * s,
                ease: n.u.isTouch ? t.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(j?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => n.u.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => n.u.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => N?.current?.children[0].clientWidth || N?.current?.children[0].scrollWidth || 0,
                maskSize: () => N?.current?.children[0].clientWidth || N?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const e = N?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                maskPosition: () => {
                  const e = N?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                ease: n.u.isTouch ? a : "power2.easeInOut"
              }, "<").to(i, {
                "--hero-image-width": n.u.isTouch ? "110%" : "105%",
                "--hero-image-height": n.u.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": n.u.isTouch ? "110%" : "105%",
                ease: n.u.isTouch ? a : "none"
              }, "<").to(i, {
                opacity: 0,
                duration: .2 * s,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(N.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * s,
                ease: n.u.isTouch ? t.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [s, e?.introTimeline, x?.current, j?.current?.heroRef?.current, j?.current?.heroUIRef?.current, j?.current?.heroImagesRef?.current, N?.current, C?.current]), (0, a.useEffect)((() => {
            u && f.current && r({
              target: f,
              id: "dialog"
            })
          }), [f, u]), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(g, {
              showModal: u,
              onClose: () => (k(!1), b(!1), h(), void A({
                event: "takeover_close",
                element_placement: "info_section"
              })),
              dialogRef: I,
              children: u && (0, m.jsx)("div", {
                className: B.videoDialog,
                children: (0, m.jsx)("div", {
                  className: B.videoDialogContent,
                  ref: f
                })
              })
            }), (0, m.jsxs)("div", {
              className: B.destinationPage,
              ref: S,
              children: [(0, m.jsxs)("div", {
                className: B.destinationContainer,
                ref: x,
                children: [(0, m.jsx)(d.A, {
                  ref: j,
                  className: B.hero,
                  standalone: !0
                }), (0, m.jsx)("div", {
                  ref: z,
                  className: B.infoSectionContainer,
                  children: (0, m.jsx)(v, {
                    blurb: T ? "" : M("d2.destDescription"),
                    buttonText: T ? "" : M("d2.playbackCTA"),
                    header: T ? "" : M("d2.destHeadline"),
                    className: B.infoSection,
                    ref: N
                  })
                })]
              }), (0, m.jsx)(U.A, {
                showCloseButton: !0
              }), (0, m.jsxs)("div", {
                ref: C,
                className: B.footerContainer,
                children: [(0, m.jsx)(L, {
                  platforms: [{
                    name: "PlayStation 5",
                    url: "playstation.svg"
                  }, {
                    name: "Xbox Series X|S",
                    url: "xbox.svg"
                  }]
                }), (0, m.jsx)(c.FooterNav, {})]
              })]
            })]
          })
        },
        H = () => (0, m.jsx)(p.Yd, {
          children: (0, m.jsx)("span", {
            children: (0, m.jsx)(W, {})
          })
        })
    },
    5913: e => {
      var i = {
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

      function s(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && i.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, i)
        }))
      }
      i.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function t(e, i) {
        for (var s = 0; s < e.definitions.length; s++) {
          var a = e.definitions[s];
          if (a.name && a.name.value == i) return a
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          s(e, i), a[e.name.value] = i
        }
      })), e.exports = i, e.exports.GameData = function(e, i) {
        var s = {
          kind: e.kind,
          definitions: [t(e, i)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var n = a[i] || new Set,
          o = new Set,
          r = new Set;
        for (n.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var c = r;
          r = new Set, c.forEach((function(e) {
            o.has(e) || (o.add(e), (a[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(i) {
          var a = t(e, i);
          a && s.definitions.push(a)
        })), s
      }(i, "GameData")
    },
    4905: (e, i, s) => {
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
        "./esrb_ao.svg": 5521,
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

      function t(e) {
        var i = n(e);
        return s(i)
      }

      function n(e) {
        if (!s.o(a, e)) {
          var i = new Error("Cannot find module '" + e + "'");
          throw i.code = "MODULE_NOT_FOUND", i
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = n, e.exports = t, t.id = 4905
    },
    3983: (e, i, s) => {
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
        "./esrb_ao.svg": 5521,
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

      function t(e) {
        var i = n(e);
        return s(i)
      }

      function n(e) {
        if (!s.o(a, e)) {
          var i = new Error("Cannot find module '" + e + "'");
          throw i.code = "MODULE_NOT_FOUND", i
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = n, e.exports = t, t.id = 3983
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
    5521: e => {
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
    }
  }
]);