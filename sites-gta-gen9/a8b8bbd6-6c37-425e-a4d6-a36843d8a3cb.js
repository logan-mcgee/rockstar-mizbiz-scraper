! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a8b8bbd6-6c37-425e-a4d6-a36843d8a3cb", e._sentryDebugIdIdentifier = "sentry-dbid-a8b8bbd6-6c37-425e-a4d6-a36843d8a3cb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2930], {
    92252: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => ee
      });
      var n = t(71403),
        i = t(93665),
        o = t(96717),
        s = t(40207);
      const r = JSON.parse('{"us":{"discover_callout_cards_aria":"Pack Cards","discover_callout_cta_label":"Track Progress","discover_callout_description":"See all the challenges you\'ve completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks.","discover_callout_heading":"Career Progress","discover_callout_mugshot":"{userName} mugshot","elevator_pitch_available_on":"Only available on","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Join Now","elevator_pitch_member_benefit_label":"Member Benefits","video_hero_pause_button_label":"Pause button","video_hero_play_button_label":"Play button","video_hero_support_message":"Your browser does not support video reproduction.","summary_benefits_link_console_account":"Join Now","tile_link_console_account":"Link Game Account"},"de":{"discover_callout_cards_aria":"Spielerweiterungskarten","discover_callout_cta_label":"Fortschritt ansehen","discover_callout_description":"Sieh dir die Herausforderungen an, die du im Rahmen deiner Karriere in GTA Online abgeschlossen hast. Natürlich kannst du auch neue entdecken und wertvolle Belohnungen verdienen, während du in den Reihen der Kriminellen aufsteigst.","discover_callout_heading":"Karrierefortschritt","discover_callout_mugshot":"Verbrecherfoto von {userName}","elevator_pitch_available_on":"Nur auf","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Mitglied werden","elevator_pitch_member_benefit_label":"Mitgliedschaftsvorteile","video_hero_pause_button_label":"Pausetaste","video_hero_play_button_label":"Wiedergabetaste","video_hero_support_message":"Dein Browser unterstützt die Wiedergabe von Videos nicht.","summary_benefits_link_console_account":"Mitglied werden","tile_link_console_account":"Spielkonto verknüpfen"},"es":{"discover_callout_cards_aria":"Tarjetas de pack","discover_callout_cta_label":"Ver tu progreso","discover_callout_description":"Descubre todos los desafíos que has completado en tu trayectoria en GTA Online. También puedes descubrir nuevos desafíos y obtener valiosas recompensas a medida que subes de rango en el mundo del crimen.","discover_callout_heading":"Progreso en la trayectoria","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Solo disponible en","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Unirse ahora","elevator_pitch_member_benefit_label":"Ventajas para miembros","video_hero_pause_button_label":"Botón de pausa","video_hero_play_button_label":"Botón de reproducción","video_hero_support_message":"Tu navegador no puede reproducir vídeos.","summary_benefits_link_console_account":"Unirse ahora","tile_link_console_account":"Vincular una cuenta de juego"},"mx":{"discover_callout_cards_aria":"Tarjetas de contenido descargable","discover_callout_cta_label":"Consulta tu progreso","discover_callout_description":"Consulta todos los desafíos que completaste en tu trayectoria en GTA Online. Además, descubre desafíos nuevos y obtén recompensas valiosas mientras avanzas en tu carrera criminal.","discover_callout_heading":"Progreso y trayectoria","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Disponible solo en","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Únete ya","elevator_pitch_member_benefit_label":"Beneficios","video_hero_pause_button_label":"Botón de pausa","video_hero_play_button_label":"Botón de reproducción","video_hero_support_message":"Tu navegador no es compatible con la reproducción de video.","summary_benefits_link_console_account":"Únete ya","tile_link_console_account":"Vincula tu cuenta de juego"},"fr":{"discover_callout_cards_aria":"Cartes de suivi","discover_callout_cta_label":"Suivi de progression","discover_callout_description":"Consultez tous les défis que vous avez terminés au cours de votre carrière dans GTA Online. Vous pouvez également en découvrir de nouveaux et gagner de belles récompenses en gravissant les échelons de la criminalité.","discover_callout_heading":"Suivi de carrière","discover_callout_mugshot":"Photo d\'identité : {userName}","elevator_pitch_available_on":"Uniquement disponible sur","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"S’abonner","elevator_pitch_member_benefit_label":"Avantages pour les abonnés","video_hero_pause_button_label":"Bouton Pause","video_hero_play_button_label":"Bouton Lecture","video_hero_support_message":"Votre navigateur ne prend pas en charge la reproduction de vidéo.","summary_benefits_link_console_account":"S’abonner","tile_link_console_account":"Associer un compte de jeu"},"it":{"discover_callout_cards_aria":"Informazioni sui contenuti aggiuntivi","discover_callout_cta_label":"Tieni traccia dei progressi","discover_callout_description":"Vedi tutte le sfide che hai completato nella tua carriera di GTA Online. Puoi anche scoprirne di nuove e ottenere delle ricompense preziose mentre sali di rango nella tua carriera criminale.","discover_callout_heading":"Progressi della carriera","discover_callout_mugshot":"Foto segnaletica di {userName}","elevator_pitch_available_on":"Disponibile solo su","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Abbonati ora","elevator_pitch_member_benefit_label":"Vantaggi per i membri","video_hero_pause_button_label":"Pulsante pausa","video_hero_play_button_label":"Pulsante riproduzione","video_hero_support_message":"Il tuo browser non supporta la riproduzione di video.","summary_benefits_link_console_account":"Abbonati ora","tile_link_console_account":"Collega un account di gioco"},"jp":{"discover_callout_cards_aria":"パックカード","discover_callout_cta_label":"進行状況を確認","discover_callout_description":"「GTAオンライン」のキャリアで達成した全てのチャレンジを見ましょう。犯罪ランクを上っていくことで、新しいチャレンジを発見したり、貴重な報酬も獲得できます。","discover_callout_heading":"キャリア進行状況","discover_callout_mugshot":"{userName}顔写真","elevator_pitch_available_on":"これらのプラットフォーム限定","elevator_pitch_available_on_ps5":"PlayStation®5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"今すぐ参加","elevator_pitch_member_benefit_label":"メンバー特典","video_hero_pause_button_label":"ポーズボタン","video_hero_play_button_label":"プレイボタン","video_hero_support_message":"お使いのブラウザーはビデオの再生に対応していません。","summary_benefits_link_console_account":"今すぐ参加","tile_link_console_account":"ゲームアカウントをリンクする"},"kr":{"discover_callout_cards_aria":"팩 카드","discover_callout_cta_label":"진행 상황 확인하기","discover_callout_description":"GTA 온라인 경력에서 완료한 모든 도전을 확인해 보십시오. 새로운 도전을 발견하고 범죄 제왕의 자리에 올라가면서 귀중한 보상을 획득해 보십시오.","discover_callout_heading":"경력 진행","discover_callout_mugshot":"{userName} 머그샷","elevator_pitch_available_on":"이용 가능한 플랫폼:","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"지금 가입","elevator_pitch_member_benefit_label":"멤버 혜택","video_hero_pause_button_label":"일시 정지 버튼","video_hero_play_button_label":"재생 버튼","video_hero_support_message":"해당 브라우저에서 동영상 재생을 지원하지 않습니다.","summary_benefits_link_console_account":"지금 가입","tile_link_console_account":"게임 계정 연동하기"},"pl":{"discover_callout_cards_aria":"Karty aktualizacji","discover_callout_cta_label":"Śledź postępy","discover_callout_description":"Zobacz wszystkie swoje ukończone wyzwania w ramach kariery GTA Online. Odkrywaj nowe wyzwania i zdobywaj wartościowe nagrody, wspinając się po szczeblach swojej przestępczej kariery.","discover_callout_heading":"Postępy kariery","discover_callout_mugshot":"Zdjęcie – {userName}","elevator_pitch_available_on":"Dostępne wyłącznie na","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Dołącz teraz","elevator_pitch_member_benefit_label":"Korzyści członkowskie","video_hero_pause_button_label":"Przycisk zatrzymania","video_hero_play_button_label":"Przycisk odtwarzania","video_hero_support_message":"Twoja przeglądarka nie obsługuje odtwarzania video.","summary_benefits_link_console_account":"Dołącz teraz","tile_link_console_account":"Powiąż konto"},"br":{"discover_callout_cards_aria":"Quadros das atualizações","discover_callout_cta_label":"Ver Progresso","discover_callout_description":"Confira todos os desafios que você concluiu na sua carreira no GTA Online. Você também pode descobrir novos desafios e ganhar grandes recompensas conforme cresce na hierarquia do crime.","discover_callout_heading":"Progresso da Carreira","discover_callout_mugshot":"Foto de {userName}","elevator_pitch_available_on":"Disponível apenas para","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Afilie-se","elevator_pitch_member_benefit_label":"Benefícios para membros","video_hero_pause_button_label":"Botão Pausar","video_hero_play_button_label":"Botão Tocar","video_hero_support_message":"O seu navegador não tem suporte para reprodução de vídeo.","summary_benefits_link_console_account":"Afilie-se","tile_link_console_account":"Vincular conta do jogo"},"ru":{"discover_callout_cards_aria":"Карточки обновлений","discover_callout_cta_label":"Посмотреть свой прогресс","discover_callout_description":"Просмотрите все испытания, которые вы прошли в своей карьере GTA Online. Вы также можете открывать для себя новые испытания и зарабатывать ценные награды по мере того, как продвигаетесь в своей криминальной карьере.","discover_callout_heading":"Прогресс карьеры","discover_callout_mugshot":"Фотография игрока {userName}","elevator_pitch_available_on":"Доступно только на","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"Оформить подписку","elevator_pitch_member_benefit_label":"Бонусы для подписчиков","video_hero_pause_button_label":"Кнопка паузы","video_hero_play_button_label":"Кнопка воспроизведения","video_hero_support_message":"Ваш браузер не поддерживает воспроизведение видео.","summary_benefits_link_console_account":"Оформить подписку","tile_link_console_account":"Привязать игровую учетную запись"},"hans":{"discover_callout_cards_aria":"内容包卡片","discover_callout_cta_label":"追踪进度","discover_callout_description":"查看您在 GTA 在线模式职业中完成的所有挑战。您还可在提升犯罪等级时发现新挑战并赚取价值不菲的奖励。","discover_callout_heading":"职业进度","discover_callout_mugshot":"{userName} 面部照片","elevator_pitch_available_on":"仅限 ","elevator_pitch_available_on_ps5":"PlayStation 5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"马上加入","elevator_pitch_member_benefit_label":"会员福利","video_hero_pause_button_label":"暂停键","video_hero_play_button_label":"播放键","video_hero_support_message":"您的浏览器不支持视频回放。","summary_benefits_link_console_account":"马上加入","tile_link_console_account":"绑定游戏账户"},"tw":{"discover_callout_cards_aria":"內容包卡","discover_callout_cta_label":"追蹤進度","discover_callout_description":"查看您在 GTA 線上模式生涯中已完成的所有挑戰。您也可以探索新挑戰，在您一步一步登上犯罪事業巔峰時賺取豐厚獎勵。","discover_callout_heading":"生涯進度","discover_callout_mugshot":"{userName} 罪犯檔案照","elevator_pitch_available_on":"僅限於","elevator_pitch_available_on_ps5":"PlayStation5","elevator_pitch_available_on_xbox":"Xbox Series X|S","elevator_pitch_link_console_account":"現在加入","elevator_pitch_member_benefit_label":"會員福利","video_hero_pause_button_label":"暫停按鍵","video_hero_play_button_label":"播放按鍵","video_hero_support_message":"您的瀏覽器不支援影片播放。","summary_benefits_link_console_account":"現在加入","tile_link_console_account":"連結遊戲帳戶"}}');
      var l = t(98436),
        c = t(60285),
        d = t(42756);
      const u = {
        pillBtn: "rockstargames-sites-gta-gen9de6a134c9245d58a11473eb55bd5acb1",
        selected: "rockstargames-sites-gta-gen9a78625dd99b3b7e1f813f9edd11b5d55",
        mobileNav: "rockstargames-sites-gta-gen9d84f65970dcf088120c73ce75722e823",
        mobileNavOpen: "rockstargames-sites-gta-gen9f9ca04b26905897a1bd181dedf274082",
        activeLink: "rockstargames-sites-gta-gen9fdeda17c572603d3f44074da466a065a"
      };
      var _ = t(46632);
      const m = (0, d.withTranslations)((e => {
        let {
          t: a
        } = e;
        const t = (0, l.hI)(),
          {
            track: i
          } = (0, s.useGtmTrack)(),
          {
            state: {
              headerHeight: o,
              mobileNavOpen: r
            },
            setMobileNavOpen: d
          } = (0, l.E_)(),
          [m, b] = (0, n.useState)(!1);
        return (0, n.useEffect)((() => {
          const e = () => {
            window.innerWidth > 1024 ? b(!1) : b(!0)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), []), (0, n.useEffect)((() => {
          const e = e => {
            let {
              keyCode: a
            } = e;
            27 === a && d(!1)
          };
          return document.addEventListener("keydown", e, !1), () => {
            document.removeEventListener("keydown", e, !1)
          }
        }), []), (0, _.jsx)("nav", {
          className: [u.mobileNav, r ? u.mobileNavOpen : ""].join(" "),
          style: {
            "--header-height": `${o}px`
          },
          "aria-hidden": !m,
          children: t.map((e => {
            let {
              activeExact: t,
              title: n,
              to: o
            } = e;
            return (0, _.jsx)(c.A, {
              end: t,
              to: o,
              target: o.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: a
                } = e;
                return a ? u.activeLink : null
              },
              onClick: () => function() {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                i({
                  event: "nav_click",
                  element_placement: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toLowerCase(),
                  link_url: e
                })
              }(a(n), o),
              children: a(n)
            }, o)
          }))
        })
      }));
      var b = t(89779),
        v = t(58407),
        g = t(74401),
        p = t(99074),
        f = t(21027),
        k = t(24347),
        h = t(35663);
      const y = "rockstargames-sites-gta-gen9dba59499dbf2e8e419dd99a9fc7d6076",
        S = {
          BuyNow: p.A,
          TinaWrapper: f.A
        },
        N = () => {
          const {
            setBodyIsLocked: e
          } = (0, d.useBodyScrollable)("ModalContent"), {
            track: a
          } = (0, s.useGtmTrack)(), [t, o] = (0, b.useSearchParams)(), {
            data: r
          } = (0, v.useQuery)(h.BuyNowQ, {
            variables: {
              ids: ["6a84"]
            }
          }), [l, c] = (0, i.h)();
          return (0, n.useEffect)((() => {
            e(!!l)
          }), [l]), (0, n.useEffect)((() => {
            const e = "order" !== t.get("info") && "trailer" !== t.get("info") && (n = t.get("videoId"), /^\d+$/.test(n));
            var n;
            if (t.get("info") || t.get("videoId")) {
              if (e) {
                const e = (0, _.jsx)(k.A, {
                    id: t.get("videoId")
                  }),
                  n = {
                    left: window.innerWidth / 2,
                    top: window.innerHeight / 2
                  };
                c({
                  content: e,
                  rect: n,
                  contentStyle: {
                    overflow: "hidden"
                  },
                  contentClassName: y,
                  onClose: () => {
                    o({}), a({
                      event: "modal_close"
                    })
                  }
                }), a({
                  event: "trackPageview",
                  card_id: t.get("videoId"),
                  card_name: "video"
                })
              }
            } else c(null)
          }), [t]), (0, n.useEffect)((() => {
            if ("order" !== t.get("info") || !r) return;
            const e = r?.tinaModulesInfo?.[0].tina,
              n = (0, _.jsx)(g.TinaParser, {
                components: {
                  gen9: S
                },
                tina: e
              }),
              i = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: n,
              contentClassName: "rockstargames-sites-gta-gen9b0873f44e23d9e10070f02bfaddaadec",
              contentStyle: {
                "--modal-content-max-width": "100%",
                "--modal-content-padding": "calc(var(--modal-padding) + var(--padding-md)) var(--padding-lg) var(--padding-lg)",
                "--modal-height": "100vh"
              },
              rect: i,
              onClose: () => {
                o({}), a({
                  event: "modal_close"
                })
              }
            }), a({
              event: "trackPageview",
              card_id: "order",
              card_name: "order"
            })
          }), [r, t.get("info")]), (0, n.useEffect)((() => {
            if ("trailer" !== t.get("info")) return;
            const e = (0, _.jsx)(k.A, {
                id: "12258"
              }),
              n = {
                left: window.innerWidth / 2,
                top: window.innerHeight / 2
              };
            c({
              content: e,
              rect: n,
              contentStyle: {
                overflow: "hidden"
              },
              contentClassName: y,
              onClose: () => {
                o({}), a({
                  event: "modal_close"
                })
              }
            }), a({
              event: "trackPageview",
              card_id: "trailer",
              card_name: "trailer"
            })
          }), [t.get("info")]), l
        };
      var x = t(88038),
        w = t(99718),
        j = t(74547),
        I = t.n(j),
        T = t(205),
        F = t(15730);
      const A = (0, o.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
          }
        }),
        V = {
          feedback: "rockstargames-sites-gta-gen9c0b299658372e7cfff111eb908a513f5",
          stepMessage: "rockstargames-sites-gta-gen9da97feb00e247cefda4f8648ed9601d2",
          desc: "rockstargames-sites-gta-gen9b956fa10b9dd1e3141282729ca66b8ab",
          error: "rockstargames-sites-gta-gen9c0cd90cf9226c370d9437f6a6923563a",
          steps: "rockstargames-sites-gta-gen9f83ef3f9961d98fb6cae662610fc2c5e",
          gtao: "rockstargames-sites-gta-gen9a84a1d2ca90298d816b08b78a8a598b3",
          stepIconbug: "rockstargames-sites-gta-gen9ebe7435bf42b20b8fd46c465015e296a",
          stepIconcheater: "rockstargames-sites-gta-gen9cddea56d770073edb27000b84f5759c7",
          stepIconsuggestions: "rockstargames-sites-gta-gen9a03def07f9babec4718547f312fd1fad",
          stepIcongameplay: "rockstargames-sites-gta-gen9f7ed38a0c23b3f3ff8a11c664e5a187c",
          "stepIconcommunity-events": "rockstargames-sites-gta-gen9c518c6421c7bc2a60164827ca2b7c5c1",
          "stepIconmenus-ui": "rockstargames-sites-gta-gen9caff8925b6c42730a8eff95b2f4b3662",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-gta-gen9a1be63b4a1aaf7747ac2bc693577fe28",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-gta-gen9e068839f3dc490d08ff5d2735073ad03",
          "stepIconjob-creator": "rockstargames-sites-gta-gen9a6ff4a0372c7eeebc3ec599c3e179a87",
          stepIconweapons: "rockstargames-sites-gta-gen9c664dbcd5d16b18da454f35d3d10204f",
          stepIconproperties: "rockstargames-sites-gta-gen9c3f0788cd690e7eff7ab110848f9e1fe",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-gta-gen9c06b81a0ec32b2a046fcbfb1b565fdb1",
          stepIconvehicles: "rockstargames-sites-gta-gen9fba3a23ce6633a515bcb2c272b9ce202",
          "stepIcongta-rank-progression": "rockstargames-sites-gta-gen9a676c460ed19d0f2c7f3d50e44a0c779",
          stepIcongtaplus: "rockstargames-sites-gta-gen9c2c55860b00e0cde31b89e2dfdfa12c1",
          stepsNext: "rockstargames-sites-gta-gen9daa8cc1c70c4f3c67fa9617602d18c58",
          stepsPrevious: "rockstargames-sites-gta-gen9af7b6ca5158f8ccc18e615ec5c03b3e9",
          rdo: "rockstargames-sites-gta-gen9e59cc897c2f88470fcb45c4d3563e8af",
          "stepIconcamp-function": "rockstargames-sites-gta-gen9bf4ea94fdf1b54048332990ea1a770e1",
          "stepIconcamp-item": "rockstargames-sites-gta-gen9fa3b86d76a957b590b4af7b378a063ee",
          "stepIconcamp-main": "rockstargames-sites-gta-gen9c9c48f11d35be00cacb50d4ca5ad8816",
          "stepIconcamp-other": "rockstargames-sites-gta-gen9c9dc9903a673a8944c29c923103c4775",
          "stepIconcharacter-ability": "rockstargames-sites-gta-gen9a24bc02ca1eaec3706e04d6b40076530",
          "stepIconcharacter-clothing": "rockstargames-sites-gta-gen9a5292a9328677ab05cfae18ec5d7f763",
          "stepIconcharacter-creator": "rockstargames-sites-gta-gen9b202ec09f80cc0a590ce74d87ac373a0",
          "stepIconcharacter-emote": "rockstargames-sites-gta-gen9a09406aba22d0295bb6b2129bc25ee9f",
          "stepIconcharacter-main": "rockstargames-sites-gta-gen9b646edd702c8c0d7ff6b9db031b3991f",
          "stepIconcharacter-other": "rockstargames-sites-gta-gen9d7cc35b0aca38b339fa9fab192b6ce6c",
          "stepIcongameplay-main": "rockstargames-sites-gta-gen9ff7ff17d2625fac2a1b3a1bb95ceb04a",
          "stepIcongeneric-technical": "rockstargames-sites-gta-gen9d002d2aaeec2d87008b7cb632a66f7b6",
          "stepIcongs-store": "rockstargames-sites-gta-gen9e80f0f690e22316eb86dac223399ee16",
          "stepIconhorse-breed": "rockstargames-sites-gta-gen9f94831238186c0f7e6613fcef260d99c",
          "stepIconhorse-main": "rockstargames-sites-gta-gen9e5ab646651d87a9a38574d5361504b92",
          "stepIconhorse-new": "rockstargames-sites-gta-gen9fc49e9c38c6c284202bb16dd750efb8d",
          "stepIconhorse-other": "rockstargames-sites-gta-gen9ccbfbea429f3f7ae9f35a08d7a040fbd",
          "stepIconother-main": "rockstargames-sites-gta-gen9c02edcd1f33cd9c3449313a59211ca22",
          "stepIconweapon-customization": "rockstargames-sites-gta-gen9c376b4e3f131b3719bfb76c2103ba2d0",
          "stepIconweapon-main": "rockstargames-sites-gta-gen9d08da6b016fe7379ea21681c8af0b93f",
          "stepIconweapon-new": "rockstargames-sites-gta-gen9ff544136c96967ac76ed032a650bd510",
          "stepIconweapon-other": "rockstargames-sites-gta-gen9a10b40981fb579f1c050e64a7cd1b269",
          stepIcon_root: "rockstargames-sites-gta-gen9dbac115128cc0c247167e66355e4d6ff",
          stepIconroles: "rockstargames-sites-gta-gen9b6c659ddb093c77dc454ac14857804cf"
        },
        P = e => {
          let {
            mutation: a,
            query: t,
            type: i,
            t: o
          } = e;
          const s = (0, d.useQueryParams)(),
            [r, l] = (0, n.useState)({}),
            {
              data: c
            } = (0, v.useQuery)(t, {
              variables: r,
              skip: !Object.entries(r).length
            });
          return (0, n.useEffect)((() => {
            l({
              step: s.get("step")
            })
          }), [s.get("step")]), (0, _.jsxs)("div", {
            className: V.feedback,
            children: [(0, _.jsx)("h1", {
              children: o("online-feedback-h1")
            }), (0, _.jsx)("div", {
              className: V.desc,
              dangerouslySetInnerHTML: {
                __html: o("online-feedback-desc")
              }
            }), c && (0, _.jsx)(E, {
              mutation: a,
              tree: c.tree,
              type: i,
              t: o
            })]
          })
        },
        E = e => {
          let {
            mutation: a,
            tree: t,
            type: n,
            t: i
          } = e;
          const o = t.path.map((e => 1 === t.path.length && "_root" === e.feedback_type.name ? null : (0, _.jsx)(F.NavLink, {
              to: `?step=${e.id_hash}`,
              className: V[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            s = t.next.map((e => "_root" === e.feedback_type.name ? null : (0, _.jsxs)(F.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: V[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, _.jsx)("div", {
                className: V.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, _.jsxs)("div", {
            className: [V.steps, V[n]].join(" "),
            children: [(0, _.jsx)("div", {
              className: V.stepsPrevious,
              children: o
            }), (0, _.jsx)("div", {
              className: V.stepsNext,
              children: s
            }), s.length ? "" : (0, _.jsx)(D, {
              feedbackStep: t.path[t.path.length - 1].id,
              mutation: a,
              t: i
            })]
          })
        },
        D = e => {
          let {
            feedbackStep: a,
            mutation: t,
            t: i
          } = e;
          const {
            formatMessage: r
          } = (0, o.useIntl)(), {
            loggedIn: l
          } = (0, s.useRockstarUser)(), c = (0, n.useRef)(), [d, {
            data: u,
            error: m
          }] = (0, v.useMutation)(t);
          return l ? u?.submittal?.id ? (0, _.jsx)("div", {
            className: V.success,
            dangerouslySetInnerHTML: {
              __html: i("feedback.enter_success")
            }
          }) : (0, _.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: c.current.value,
                  feedback_step: a
                };
                d({
                  variables: e
                })
              })()
            })(e),
            children: [(0, _.jsx)("textarea", {
              ref: c,
              maxLength: 500,
              rows: 6,
              placeholder: i("feedback.placeholder")
            }), m ? (0, _.jsx)("div", {
              className: V.error,
              children: String(m)
            }) : "", (0, _.jsx)("button", {
              type: "submit",
              children: i("SUBMIT")
            })]
          }) : r(A.gtao_feedback_login_cta_text)
        },
        z = e => {
          let {
            mutation: a,
            query: t,
            type: n
          } = e;
          return (0, d.withTranslations)(P, "rdo" === n ? "rdr2" : n)({
            mutation: a,
            query: t,
            type: n
          })
        };
      var M = t(14373);
      const B = () => (0, _.jsx)("span", {
        className: "rockstargames-sites-gta-gen9f070763a1255e4312a53341b5fd10fbc",
        children: (0, _.jsx)(z, {
          query: M.FeedbackSteps,
          mutation: M.SubmitFeedback,
          type: "gtao"
        })
      });
      var O = t(47252),
        $ = t(25180),
        C = t(46585),
        G = t(54252),
        X = t.n(G);
      const q = {
          pillBtn: "rockstargames-sites-gta-gen9aeebc224bd5adfd96a98f9736ee33079",
          selected: "rockstargames-sites-gta-gen9edbd3978d17b9c2b7bc65ff7a5ebdb5b",
          guideNavMobile: "rockstargames-sites-gta-gen9dc8c1ccf7688e80181a16b7b473a312b",
          guideNavMobileContent: "rockstargames-sites-gta-gen9e3de050ace77d95d7776b954bee219bd",
          sections: "rockstargames-sites-gta-gen9b5aebbbb5f6341a92b3202462cfb9f6f",
          activeSection: "rockstargames-sites-gta-gen9f30de8480b4801fa119e54ae7141ee0c",
          sectionsOpen: "rockstargames-sites-gta-gen9ffd5c0107796ecaf1116e380395f148e"
        },
        L = e => {
          let {
            currentId: a
          } = e;
          const {
            track: t
          } = (0, s.useGtmTrack)(), i = (0, l.hY)(), [o, r] = (0, n.useState)(!1), [d, u] = (0, n.useState)(null), [m, v] = (0, n.useState)(null), [g] = (0, b.useSearchParams)();
          if ((0, n.useEffect)((() => {
              X().cloneDeepWith(i, ((e, t, n) => {
                a === e && u(n?.children ?? null)
              }))
            }), [a, i, g.get("section")]), (0, n.useEffect)((() => {
              v(null), X().cloneDeepWith(d, ((e, a, t) => {
                "id_hash" === a && g.get("section") === e && v(t)
              }))
            }), [d, g.get("section")]), !d) return null;
          const p = () => {
            r(!1), t({
              event: "nav_click",
              element_placement: "guide nav"
            })
          };
          return (0, _.jsx)("div", {
            className: q.guideNavMobile,
            children: (0, _.jsxs)("div", {
              className: q.guideNavMobileContent,
              children: [(0, _.jsx)("div", {
                className: [q.sections, o ? q.sectionsOpen : ""].join(" "),
                children: d.map((e => {
                  let {
                    id_hash: a,
                    title: t,
                    to: n
                  } = e;
                  return (0, _.jsx)(c.A, {
                    className: a === m?.id_hash ? q.activeSection : "",
                    to: n,
                    onClick: p,
                    children: t
                  }, n)
                }))
              }), (0, _.jsx)("button", {
                type: "button",
                onClick: () => r(!o),
                children: "Jump To"
              })]
            })
          })
        };
      var U = t(10919);
      const H = (0, O.A)((() => {
        const {
          setBrand: e
        } = (0, l.E_)();
        (0, n.useEffect)((() => {
          e("gtao")
        }), []);
        const {
          guideId: a
        } = (0, b.useParams)(), t = (0, $.X)({
          ids: [a],
          setTitleDataPath: "tinaModulesInfo[0].title_doc"
        })?.[0] ?? {};
        return (0, n.useMemo)((() => {
          if (!t) return null;
          const {
            tina: e,
            type: n
          } = t;
          if (n && "gen9-guide" !== n) throw Error("Invalid type, a guide is needed.");
          return (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9eaeb117af03214aa0f78fd85d4028bb7",
            children: [(0, _.jsx)(C.A, {
              currentId: a
            }), e ? (0, _.jsx)(g.TinaParser, {
              components: U.componentsForTinaParserGuide,
              tina: e
            }) : "", (0, _.jsx)(L, {
              currentId: a
            })]
          })
        }), [JSON.stringify(t)])
      }));
      var R = t(7447);
      const Q = (0, O.A)((e => {
          let {
            componentsForTinaParser: a,
            root: t,
            url: i
          } = e;
          const {
            data: o
          } = (0, v.useQuery)(R.MetaUrlInfo, {
            variables: {
              url: i
            },
            setTitleDataPath: "metaUrlInfo.title"
          }), {
            setBrand: s
          } = (0, l.E_)(), [r, c] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = o?.metaUrlInfo?.tina ?? null,
              a = e?.payload?.meta?.brand ?? null;
            a && s(a), e && c(e)
          }), [o]), r ? (0, _.jsx)("div", {
            "data-root": t,
            className: "rockstargames-sites-gta-gen9f7e42e7491093e80b413a2892ed61ffe",
            children: (0, _.jsx)(g.TinaParser, {
              components: a,
              tina: r
            })
          }) : null
        })),
        W = ["/gta-v", "/gta-online", "/gta-online/guides", "/gta-online/prime-plus-offer", "/gta-plus", "/gta-plus/benefits", "/gta-plus/join", "/gta-plus/legal", "/gta-online/license-plates", "/gta-online/heists/lsdw", "/gta-online/heists/cayo-perico-heist", "/gta-online/heists/diamond-casino-heist", "/gta-online/heists/doomsday-heist", "/gta-online/heists/original-heists", "/gta-online/businesses/bottom-dollar-bounties", "/gta-online/businesses/drug-wars", "/gta-online/businesses/the-contract", "/gta-online/businesses/after-hours", "/gta-online/businesses/smugglers-run", "/gta-online/businesses/gunrunning", "/gta-online/businesses/bikers", "/gta-online/businesses/finance-and-felony", "/gta-online/businesses/import-export", "/gta-online/businesses/chop-shop", "/gta-online/recreation/los-santos-tuners", "/gta-online/recreation/diamond-casino-resort", "/gta-online/contact-missions/operation-paper-trail", "/gta-online/contact-missions/san-andreas-mercenaries", "/gta-online/contact-missions/superyacht-life", "/gta-online/contact-missions/last-play", "/gta-online/contact-missions/premium-deluxe-repo", "/gta-online/contact-missions/dispatch-services", "/gta-online/contact-missions/lowriders", "/gta-online/contact-missions/dlc-1-2023", "/gta-online/contact-missions/cluckin-bell-farm-raid", "/gta-online/career-progress", "/gta-online/series-modes/arena-war", "/gta-online/series-modes/survivals", "/gta-online/series-modes/racing", "/gta-online/series-modes/adversary-modes", "/gta-online/series-modes/deathmatches", "/gta-online/special-interests/vehicles-enthusiast", "/gta-online/special-interests/weapons-expert"],
        K = e => {
          let {
            root: a
          } = e;
          const {
            pathname: t
          } = (0, b.useLocation)();
          return (0, n.useMemo)((() => {
            const e = t.replace(/\/$/, "");
            return W.includes(e) ? (0, _.jsx)(Q, {
              componentsForTinaParser: U.componentsForTinaParser,
              root: a,
              url: e
            }) : null
          }), [t])
        },
        J = (0, w.A)((e => {
          let {
            routeRoot: a
          } = e;
          const t = [{
            path: "/",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/benefits",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/join",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/feedback",
            element: (0, _.jsx)(B, {})
          }, {
            path: "/guides",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/guides/:guideId",
            element: (0, _.jsx)(H, {})
          }, {
            path: "/heists/:section",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/businesses/:section",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/recreation/:section",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/contact-missions/:section",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/career-progress",
            element: (0, _.jsx)(T.PackPage, {})
          }, {
            path: "/series-modes/:section",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/special-interests/:section",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/legal",
            element: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/prime-plus-offer",
            eßent: (0, _.jsx)(K, {
              root: a
            })
          }, {
            path: "/license-plates",
            element: (0, _.jsx)(I(), {})
          }, {
            path: "*",
            element: (0, _.jsx)(x.A, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, b.useRoutes)(t)
        })),
        Y = e => {
          let {
            config: a
          } = e;
          const {
            state: {
              headerHeight: t
            }
          } = (0, l.E_)();
          return (0, _.jsx)("div", {
            id: "content",
            className: "rockstargames-sites-gta-gen9b0093976ff3d5d9725a25fa8bf9ef956",
            children: (0, _.jsx)(J, {
              routeRoot: a?.routeRoot
            })
          })
        },
        Z = e => {
          let {
            config: a
          } = e;
          const {
            setBrand: t
          } = (0, l.E_)(), {
            setCharactersNeeded: i
          } = (0, s.useRockstarUserState)();
          return (0, n.useLayoutEffect)((() => (t("gtao"), i("gtao"), () => {
            i(null)
          })), []), (0, _.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9deaacbee4aef528355067efdd6b118c2",
            children: [(0, _.jsx)(m, {}), (0, _.jsx)(Y, {
              config: a
            }), (0, _.jsx)(N, {})]
          })
        },
        ee = (0, o.withIntl)((e => {
          let {
            config: a,
            setHeaderHidden: t
          } = e;
          return (0, _.jsx)(i.Z, {
            children: (0, _.jsx)(Z, {
              config: a,
              setHeaderHidden: t
            })
          })
        }), r)
    },
    37017: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var n = t(71403),
        i = t(89779),
        o = t(58407),
        s = t(42756);
      var r = t(46632);
      const l = (0, s.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [t] = (0, n.useState)(""), s = (0, i.useNavigate)(), l = (0, o.useMutateState)();
        return (0, r.jsxs)("form", {
          action: "#",
          className: "rockstargames-sites-gta-gen9b82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), l({
              navOpen: !1
            }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, r.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, r.jsx)("input", {
            autoComplete: "off",
            defaultValue: t,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    99718: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(71403),
        i = t(88038),
        o = t(46632);
      class s extends n.Component {
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
          return null !== this.state.error.code ? (0, o.jsx)(i.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const r = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, o.jsx)(s, {
            header: a,
            children: (0, o.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    88038: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var n = t(71403),
        i = t(42756),
        o = t(60285),
        s = t(37017);
      var r = t(46632);
      const l = (0, i.withTranslations)((e => {
        let {
          error: a,
          t,
          domain: i = ""
        } = e;
        console.error({
          error: a
        });
        let l = a?.message ?? t("error-404-new");
        l = t("error-404-new");
        const c = a?.code ?? 398,
          d = (0, n.useRef)(null);
        return (0, n.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, r.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d988ce20c420c26fc5e455279bf94cb9",
          children: [(0, r.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${l} (${c})`
          }), (0, r.jsx)(o.A, {
            to: "/",
            children: t("Home")
          }), "clr" !== i && (0, r.jsx)(s.A, {})]
        })
      }))
    },
    2930: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      const n = t(92252).default
    },
    14373: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "SubmitFeedback"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "content"
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
                value: "feedback_step"
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
                value: "submittal"
              },
              name: {
                kind: "Name",
                value: "gtaoFeedbackSubmit"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "content"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "content"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "feedback_step"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "feedback_step"
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
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "FeedbackSteps"
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
                value: "step"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                  kind: "StringValue",
                  value: "/GTAOnline/feedback",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "fallbackUrl"
                },
                value: {
                  kind: "StringValue",
                  value: "/GTAOnline/",
                  block: !1
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
              alias: {
                kind: "Name",
                value: "tree"
              },
              name: {
                kind: "Name",
                value: "gtaoFeedbackSteps"
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
                  value: "step"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "step"
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
                    value: "path"
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
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "feedback_type"
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
                        }, {
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "next"
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
                        value: "message"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "feedback_type"
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
                            value: "href"
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
          end: 856
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: 'mutation SubmitFeedback(\n    $content: String!\n    $feedback_step: Int!\n    $cache: Boolean = true\n) {\n    submittal: gtaoFeedbackSubmit(\n        content: $content\n        feedback_step: $feedback_step\n    ) {\n        id\n    }\n}\n\nquery FeedbackSteps($locale: String!, $step: String, $cache: Boolean = true) {\n    meta: metaUrl(\n        locale: $locale\n        domain: "www"\n        url: "/GTAOnline/feedback"\n        fallbackUrl: "/GTAOnline/"\n    ) {\n        title\n    }\n    tree: gtaoFeedbackSteps(locale: $locale, step: $step) {\n        path {\n            id\n            id_hash\n            feedback_type {\n                name\n                title\n            }\n        }\n        next {\n            id_hash\n            message\n            feedback_type {\n                name\n                title\n                href\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function o(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = n[a] || new Set,
          s = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.SubmitFeedback = o(a, "SubmitFeedback"), e.exports.FeedbackSteps = o(a, "FeedbackSteps")
    },
    35663: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "BuyNowQ"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 213
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query BuyNowQ($ids: [String]!, $locale: String!) {\n    tinaModulesInfo(ids: $ids, locale: $locale) {\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.BuyNowQ = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = n[a] || new Set,
          s = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "BuyNowQ")
    },
    7447: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
              name: {
                kind: "Name",
                value: "metaUrlInfo"
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
                    value: "url"
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
                    value: "description"
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
                    value: "keywords"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 323
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = n[a] || new Set,
          s = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "MetaUrlInfo")
    }
  }
]);