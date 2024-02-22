! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "104b7915-7f9e-497d-b848-d62b3149e4b8", e._sentryDebugIdIdentifier = "sentry-dbid-104b7915-7f9e-497d-b848-d62b3149e4b8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [440], {
    8440: (e, a, r) => {
      "use strict";
      r.d(a, {
        c: () => Be
      });
      var s = r(8200),
        t = r(9788),
        o = r(1824),
        c = r(1668),
        i = r(1512),
        _ = r(5792),
        d = r(2836),
        n = r(6752);
      const l = JSON.parse('{"us":{"cph_awards_bonuses_tattoo":"{tattooName} Tattoo","cph_awards_bonuses_title":"Bonuses","cph_awards_bronze":"Bronze","cph_awards_gold":"Gold","cph_awards_not_unlocked":"Not unlocked","cph_awards_platinum":"Platinum","cph_awards_rp_bonus_info":"Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:","cph_awards_silver":"Silver","cph_awards_title":"Awards","cph_callout_feedback_body":"How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game.","cph_callout_feedback_button":"Give feedback","cph_callout_feedback_title":"Share Your Feedback","cph_highlights_group_aria":"Highlight {index} of {total}","cph_highlights_heading":"Highlights","cph_highlights_next":"Next","cph_highlights_previous":"Previous","cph_intro_getting_started":"Getting Started","cph_intro_guide_instruction":"Read the {title} Guide to learn more.","cph_intro_guide_learn_more":"Learn more","cph_loggedin_nochar_body":"We couldn\'t find a GTA Online character linked to your account. Link one or switch to a different account.","cph_loggedin_nochar_button":"Link a game account","cph_loggedin_nochar_title":"Link a GTA Online Character","cph_login_prompt_body":"Sign in to your account to see all the rewards you can earn, the awards you\'ve won, and the possibilities still ahead of you.","cph_login_prompt_button":"Sign In","cph_login_prompt_button_helper":"Don\'t have an account?","cph_login_prompt_button_helper_link":"Create an Account","cph_login_prompt_title":"Sign In to Track Your Progress","cph_nav_close":"Close Section Navigation","cph_nav_open":"Open Section Navigation","cph_nav_scroll_left":"Scroll Left","cph_nav_scroll_right":"Scroll Right","cph_progress_available_on":"Only available on","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Progress Bar","cph_progress_challenges_title":"Challenges","cph_progress_close":"Close","cph_progress_rewards_title":"Rewards","cph_progress_rewards_view_all":"View All","cph_progress_rewards_view_less":"View Less","cph_progress_tracker_tier_label":"Tier {number}","cph_progress_tracker_title":"Career Progress","cph_reward_claimable":"Ready to claim","cph_reward_claimed":"Claimed","cph_reward_how_to_claim":"Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim.","cph_reward_locked":"Reward locked","cph_reward_ready_to_claim":"Rewards ready to be claimed","cph_tier_complete":"Tier Complete"},"de":{"cph_awards_bonuses_tattoo":"{tattooName}-Tattoo","cph_awards_bonuses_title":"Boni","cph_awards_bronze":"Bronze","cph_awards_gold":"Gold","cph_awards_not_unlocked":"Nicht freigeschaltet","cph_awards_platinum":"Platin","cph_awards_rp_bonus_info":"Schließe einzigartige Herausforderungen ab, um GTA$, besondere Gegenstände und mehr zu erhalten, inklusive RP-Boni für jede Stufe:","cph_awards_silver":"Silber","cph_awards_title":"Auszeichnungen","cph_callout_feedback_body":"Wie gefällt dir GTA Online? Teile uns deine Eindrücke und Ideen mit und hilf uns dabei, die Zukunft des Spiels zu gestalten.","cph_callout_feedback_button":"Feedback geben","cph_callout_feedback_title":"Gib uns dein Feedback","cph_highlights_group_aria":"Markiertes Element {index} von {total}","cph_highlights_heading":"Markierte Elemente","cph_highlights_next":"Weiter","cph_highlights_previous":"Zurück","cph_intro_getting_started":"Erste Schritte","cph_intro_guide_instruction":"Für weitere Informationen sieh dir den Guide zu \\"{title}\\" an.","cph_intro_guide_learn_more":"Mehr erfahren","cph_loggedin_nochar_body":"Es wurde kein GTA-Online-Charakter gefunden, der mit deinem Konto verbunden ist. Verknüpfe einen Spielcharakter oder melde dich mit einem anderen Konto an.","cph_loggedin_nochar_button":"Verknüpfe ein Spielkonto","cph_loggedin_nochar_title":"Verknüpfe einen GTA-Online-Charakter","cph_login_prompt_body":"Melde dich mit deinem Konto an und sieh dir die Belohnungen an, die du freischalten kannst, die Auszeichnungen, die du schon verdient hast, sowie die Möglichkeiten, die noch vor dir liegen.","cph_login_prompt_button":"Anmelden","cph_login_prompt_button_helper":"Du hast noch kein Konto?","cph_login_prompt_button_helper_link":"Erstelle ein Konto","cph_login_prompt_title":"Melde dich an, um deinen Fortschritt anzusehen","cph_nav_close":"Bereichsnavigation schließen","cph_nav_open":"Bereichsnavigation öffnen","cph_nav_scroll_left":"Links scrollen","cph_nav_scroll_right":"Rechts scrollen","cph_progress_available_on":"Nur auf","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Fortschrittsanzeige","cph_progress_challenges_title":"Herausforderungen","cph_progress_close":"Schließen","cph_progress_rewards_title":"Belohnungen","cph_progress_rewards_view_all":"Alle anzeigen","cph_progress_rewards_view_less":"Weniger anzeigen","cph_progress_tracker_tier_label":"Stufe {number}","cph_progress_tracker_title":"Karrierefortschritt","cph_reward_claimable":"Bereit zur Abholung","cph_reward_claimed":"Abgeholt","cph_reward_how_to_claim":"Belohnungen stehen zur Abholung bereit Besuche das Karrierefortschrittsmenü im Spiel, um sie abzuholen.","cph_reward_locked":"Belohnung gesperrt","cph_reward_ready_to_claim":"Belohnungen stehen zur Abholung bereit","cph_tier_complete":"Stufe abgeschlossen"},"es":{"cph_awards_bonuses_tattoo":"Tatuaje {tattooName}","cph_awards_bonuses_title":"Bonificaciones","cph_awards_bronze":"Bronce","cph_awards_gold":"Oro","cph_awards_not_unlocked":"Bloqueado","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa desafíos únicos para ganar GTA$, artículos y mucho más, como bonificaciones de RP por cada nivel:","cph_awards_silver":"Plata","cph_awards_title":"Premios","cph_callout_feedback_body":"¿Te está gustando GTA Online? Comparte tus opiniones e ideas con nosotros para ayudarnos a mejorar el juego en el futuro.","cph_callout_feedback_button":"Da tu opinión","cph_callout_feedback_title":"Comparte tus comentarios","cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeros pasos","cph_intro_guide_instruction":"Para obtener más información, lee la guía de {title}.","cph_intro_guide_learn_more":"Más información","cph_loggedin_nochar_body":"No hemos encontrado ningún personaje de GTA Online vinculado a tu cuenta. Vincula uno o cambia a una cuenta diferente.","cph_loggedin_nochar_button":"Vincula una cuenta del juego","cph_loggedin_nochar_title":"Vincula un personaje de GTA Online","cph_login_prompt_body":"Inicia sesión en tu cuenta para ver todas las recompensas que puedes conseguir, los premios que has ganado y todas las posibilidades que tienes por delante.","cph_login_prompt_button":"Iniciar sesión","cph_login_prompt_button_helper":"¿No tienes una cuenta?","cph_login_prompt_button_helper_link":"Crear una cuenta","cph_login_prompt_title":"Inicia sesión para ver tu progreso","cph_nav_close":"Cerrar la sección de navegación","cph_nav_open":"Abrir la sección de navegación","cph_nav_scroll_left":"Desplazar hacia la izquierda","cph_nav_scroll_right":"Desplazar hacia la derecha","cph_progress_available_on":"Solo disponible en","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progreso","cph_progress_challenges_title":"Desafíos","cph_progress_close":"Cerrar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver todas","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nivel {number}","cph_progress_tracker_title":"Progreso en la trayectoria","cph_reward_claimable":"Solicítala","cph_reward_claimed":"Solicitada","cph_reward_how_to_claim":"¡Ya puedes solicitar las recompensas! Visita el menú de progreso en la trayectoria para solicitarla en el juego.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"¡Ya puedes solicitar las recompensas!","cph_tier_complete":"Nivel completado"},"mx":{"cph_awards_bonuses_tattoo":"{tattooName} Tatuaje","cph_awards_bonuses_title":"Bonificaciones","cph_awards_bronze":"Bronce","cph_awards_gold":"Oro","cph_awards_not_unlocked":"No desbloqueado","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa desafíos únicos para ganar GTA$., artículos de bonificación, y más, aparte de bonifiicaciones de RP en cada nivel:","cph_awards_silver":"Plata","cph_awards_title":"Recompensas","cph_callout_feedback_body":"¿Estás disfrutando GTA Online? Cuéntanos lo que opinas para poder mejorar el juego en el futuro.","cph_callout_feedback_button":"Comenta aquí","cph_callout_feedback_title":"Comparte tus comentarios","cph_highlights_group_aria":"Destacado {index} de {total}","cph_highlights_heading":"Destacados","cph_highlights_next":"Siguiente","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeros pasos","cph_intro_guide_instruction":"Lee la guía de {title} para obtener más información.","cph_intro_guide_learn_more":"Más información","cph_loggedin_nochar_body":"Tu cuenta no está vinculada a ningún personaje de GTA Online. Vincula un personaje o usa una cuenta diferente.","cph_loggedin_nochar_button":"Vincula tu cuenta de juego","cph_loggedin_nochar_title":"Vincula una cuenta con un personaje de GTA Online","cph_login_prompt_body":"Inicia sesión con tu cuenta para ver todas las recompensas disponibles, los premios que has ganado y las sorpresas que te esperan.","cph_login_prompt_button":"Iniciar sesión","cph_login_prompt_button_helper":"¿Aún no tienes una cuenta?","cph_login_prompt_button_helper_link":"Crea una cuenta","cph_login_prompt_title":"Regístrate para seguir tu progreso","cph_nav_close":"Cerrar sección","cph_nav_open":"Abrir sección","cph_nav_scroll_left":"Desplazarse hacia la izquierda","cph_nav_scroll_right":"Desplazarse hacia la derecha","cph_progress_available_on":"Disponible solamente en","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progreso","cph_progress_challenges_title":"Desafíos","cph_progress_close":"Cerrar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver todas","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nivel {number}","cph_progress_tracker_title":"Progreso y trayectoria","cph_reward_claimable":"Ya la puedes obtener","cph_reward_claimed":"Ya la obtuviste","cph_reward_how_to_claim":"Ya puedes obtener las recompensas. Visita la sección \\"Progreso y trayectoria\\" del juego para obtenerlas.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"Ya puedes obtener las recompensas","cph_tier_complete":"Nivel completado"},"fr":{"cph_awards_bonuses_tattoo":"Tatouage {tattooName}","cph_awards_bonuses_title":"Bonus","cph_awards_bronze":"Bronze","cph_awards_gold":"Or","cph_awards_not_unlocked":"Non déverrouillé","cph_awards_platinum":"Platine","cph_awards_rp_bonus_info":"Relevez des défis uniques pour gagner des GTA$, des articles bonus et plus, dont des RP bonus pour chaque niveau :","cph_awards_silver":"Argent","cph_awards_title":"Récompenses","cph_callout_feedback_body":"Vous appréciez GTA Online ? Faites-nous part de vos remarques et de vos idées pour nous aider à améliorer le jeu à l\'avenir.","cph_callout_feedback_button":"Commenter","cph_callout_feedback_title":"Partagez vos idées","cph_highlights_group_aria":"Résultat {index} sur {total}","cph_highlights_heading":"Résultats","cph_highlights_next":"Suivant","cph_highlights_previous":"Précédent","cph_intro_getting_started":"Bien démarrer","cph_intro_guide_instruction":"Lisez le guide \\"{title}\\" pour en savoir plus.","cph_intro_guide_learn_more":"En savoir plus","cph_loggedin_nochar_body":"Nous n\'avons pas trouvé de personnage de GTA Online associé à votre compte. Associez-en un ou utilisez un autre compte.","cph_loggedin_nochar_button":"Associer un compte de jeu","cph_loggedin_nochar_title":"Associer un personnage de GTA Online","cph_login_prompt_body":"Connectez-vous à votre compte pour consulter toutes les récompenses que vous pouvez gagner ou avez déjà gagnées, ainsi que les opportunités qui vous attendent.","cph_login_prompt_button":"Se connecter","cph_login_prompt_button_helper":"Vous n\'avez pas de compte ?","cph_login_prompt_button_helper_link":"Créer un compte","cph_login_prompt_title":"Connectez-vous pour suivre votre progression","cph_nav_close":"Fermer la navigation pour cette section","cph_nav_open":"Ouvrir la navigation pour cette section","cph_nav_scroll_left":"Faire défiler vers la gauche","cph_nav_scroll_right":"Faire défiler vers la droite","cph_progress_available_on":"Uniquement disponible sur","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barre de progression","cph_progress_challenges_title":"Défis","cph_progress_close":"Fermer","cph_progress_rewards_title":"Récompenses","cph_progress_rewards_view_all":"Afficher tout","cph_progress_rewards_view_less":"Afficher moins","cph_progress_tracker_tier_label":"Palier {number}","cph_progress_tracker_title":"Suivi de carrière","cph_reward_claimable":"Prête à être récupérée","cph_reward_claimed":"Récupérée","cph_reward_how_to_claim":"Récompenses prêtes à être récupérées. Rendez-vous dans le menu Suivi de carrière en jeu pour les récupérer.","cph_reward_locked":"Récompense verrouillée","cph_reward_ready_to_claim":"Récompenses prêtes à être récupérées","cph_tier_complete":"Palier terminé"},"it":{"cph_awards_bonuses_tattoo":"{tattooName} Tatuaggio","cph_awards_bonuses_title":"Bonus","cph_awards_bronze":"Bronzo","cph_awards_gold":"Oro","cph_awards_not_unlocked":"Bloccato","cph_awards_platinum":"Platino","cph_awards_rp_bonus_info":"Completa sfide uniche per guadagnare GTA$, articoli omaggio e altro ancora, inclusi RP bonus per ogni livello:","cph_awards_silver":"Argento","cph_awards_title":"Ricompense","cph_callout_feedback_body":"Ti piace GTA Online? Dicci cosa ne pensi e aiutaci a plasmare il futuro del gioco.","cph_callout_feedback_button":"Invia feedback","cph_callout_feedback_title":"Condividi il tuo feedback","cph_highlights_group_aria":"Elemento evidenziato {index} di {total}","cph_highlights_heading":"Elementi evidenziati","cph_highlights_next":"Avanti","cph_highlights_previous":"Precedente","cph_intro_getting_started":"Come iniziare","cph_intro_guide_instruction":"Leggi la guida di {title} per saperne di più.","cph_intro_guide_learn_more":"Altre informazioni","cph_loggedin_nochar_body":"Non abbiamo trovato un personaggio di GTA Online collegato al tuo account di Rockstar Games. Collegane uno o cambia account.","cph_loggedin_nochar_button":"Collega un account di gioco","cph_loggedin_nochar_title":"Collega un personaggio di GTA Online","cph_login_prompt_body":"Accedi al tuo account per vedere tutte le ricompense che puoi guadagnare, i premi che hai vinto e tutte le possibilità a tua disposizione.","cph_login_prompt_button":"Accedi","cph_login_prompt_button_helper":"Non hai un account?","cph_login_prompt_button_helper_link":"Crea un account","cph_login_prompt_title":"Registrati per vedere i tuoi progressi","cph_nav_close":"Chiudi il menu","cph_nav_open":"Apri il menu","cph_nav_scroll_left":"Scorri a sinistra","cph_nav_scroll_right":"Scorri a destra","cph_progress_available_on":"Disponibile solo su","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra dei progressi","cph_progress_challenges_title":"Sfide","cph_progress_close":"Chiudi","cph_progress_rewards_title":"Ricompense","cph_progress_rewards_view_all":"Vedi tutte","cph_progress_rewards_view_less":"Riduci","cph_progress_tracker_tier_label":"Livello {number}","cph_progress_tracker_title":"Progressi della carriera","cph_reward_claimable":"Pronta per essere riscattata","cph_reward_claimed":"Riscattata","cph_reward_how_to_claim":"La ricompensa è pronta per essere riscattata. Visita il menu Progressi della carriera per riscattarla.","cph_reward_locked":"Ricompensa bloccata","cph_reward_ready_to_claim":"Ricompense pronte per essere riscattate","cph_tier_complete":"Livello completato"},"jp":{"cph_awards_bonuses_tattoo":"{tattooName}タトゥー","cph_awards_bonuses_title":"ボーナス","cph_awards_bronze":"ブロンズ","cph_awards_gold":"ゴールド","cph_awards_not_unlocked":"未解除","cph_awards_platinum":"プラチナ","cph_awards_rp_bonus_info":"チャレンジを達成して、GTAマネーやボーナスアイテム、RPボーナスなどの報酬を各レベルで獲得：","cph_awards_silver":"シルバー","cph_awards_title":"アワード","cph_callout_feedback_body":"GTAオンラインをお楽しみいただけていますか？感想を送り、このゲームの今後を作る手助けをしてください。","cph_callout_feedback_button":"フィードバックを送る","cph_callout_feedback_title":"フィードバックを送ろう","cph_highlights_group_aria":"{total}のうち{index} をハイライト","cph_highlights_heading":"ハイライト","cph_highlights_next":"進む","cph_highlights_previous":"前","cph_intro_getting_started":"始めよう","cph_intro_guide_instruction":"詳細は「{title}」ガイドにて。","cph_intro_guide_learn_more":"詳細を見る","cph_loggedin_nochar_body":"アカウントにリンクされたGTAオンラインのキャラクターが見つかりませんでした。リンクするか別のアカウントに切り替えてください。","cph_loggedin_nochar_button":"ゲームアカウントにリンク","cph_loggedin_nochar_title":"GTAオンラインのキャラクターにリンク","cph_login_prompt_body":"アカウントにサインインして、獲得できる報酬、得たアワード、そしてこれからの可能性を確認しよう。","cph_login_prompt_button":"サインイン","cph_login_prompt_button_helper":"アカウントをお持ちではないですか？","cph_login_prompt_button_helper_link":"アカウントを作成する","cph_login_prompt_title":"進行状況を記録するには、サインインしてください。","cph_nav_close":"セクションナビゲーションを閉じる","cph_nav_open":"セクションナビゲーションを開く","cph_nav_scroll_left":"左にスクロール","cph_nav_scroll_right":"右にスクロール","cph_progress_available_on":"これらのプラットフォーム限定","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"進行度バー","cph_progress_challenges_title":"チャレンジ","cph_progress_close":"閉じる","cph_progress_rewards_title":"報酬","cph_progress_rewards_view_all":"全て表示","cph_progress_rewards_view_less":"表示件数を減らす","cph_progress_tracker_tier_label":"ティア{number}","cph_progress_tracker_title":"キャリア進行状況","cph_reward_claimable":"受け取り可能","cph_reward_claimed":"受け取り済み","cph_reward_how_to_claim":"報酬が受け取り可能です。ゲーム内のキャリア進行状況メニューから受け取りください。","cph_reward_locked":"報酬ロック中","cph_reward_ready_to_claim":"報酬が受け取り可能です","cph_tier_complete":"ティア完了"},"kr":{"cph_awards_bonuses_tattoo":"{tattooName} 문신","cph_awards_bonuses_title":"보너스","cph_awards_bronze":"브론즈","cph_awards_gold":"골드","cph_awards_not_unlocked":"잠금 해제되지 않음","cph_awards_platinum":"플래티넘","cph_awards_rp_bonus_info":"독특한 도전을 완료하면 다음의 다양한 혜택이 지급됩니다. GTA 달러, 보너스 아이템 및 레벨별 RP 보너스 - 레벨:","cph_awards_silver":"실버","cph_awards_title":"보상","cph_callout_feedback_body":"GTA 온라인을 즐기고 계신가요? 계속해서 더 좋은 게임으로 거듭날 수 있도록 여러분의 의견과 아이디어를 보내주시길 바랍니다.","cph_callout_feedback_button":"피드백 보내기","cph_callout_feedback_title":"피드백 공유하기","cph_highlights_group_aria":"하이라이트: {index}/{total}","cph_highlights_heading":"하이라이트","cph_highlights_next":"다음","cph_highlights_previous":"이전","cph_intro_getting_started":"시작하기","cph_intro_guide_instruction":"자세한 사항은 {title} 가이드를 확인하십시오.","cph_intro_guide_learn_more":"더 알아보기","cph_loggedin_nochar_body":"계정과 연동된 GTA 온라인 캐릭터를 찾을 수 없습니다. 캐릭터를 연동하거나 다른 계정을 사용하십시오.","cph_loggedin_nochar_button":"게임 계정 연동하기","cph_loggedin_nochar_title":"GTA 온라인 캐릭터 연동하기","cph_login_prompt_body":"계정에 로그인하여 획득 가능한 모든 보상, 이미 획득한 보상, 그리고 여러분 앞에 펼쳐진 가능성을 확인해 보십시오.","cph_login_prompt_button":"로그인","cph_login_prompt_button_helper":"계정이 없으신가요?","cph_login_prompt_button_helper_link":"계정 생성","cph_login_prompt_title":"로그인하고 진행 상황 확인하기","cph_nav_close":"항목 이동 닫기","cph_nav_open":"항목 이동 열기","cph_nav_scroll_left":"왼쪽 스크롤","cph_nav_scroll_right":"오른쪽 스크롤","cph_progress_available_on":"이용 가능한 플랫폼:","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"진행 상황","cph_progress_challenges_title":"도전","cph_progress_close":"닫기","cph_progress_rewards_title":"보상","cph_progress_rewards_view_all":"전체 보기","cph_progress_rewards_view_less":"간단하게 보기","cph_progress_tracker_tier_label":"{number}단계","cph_progress_tracker_title":"경력 진행","cph_reward_claimable":"획득할 수 있음","cph_reward_claimed":"획득함","cph_reward_how_to_claim":"보상을 획득할 수 있습니다. 게임 내 경력 진행 메뉴를 방문해 획득하십시오.","cph_reward_locked":"잠긴 보상","cph_reward_ready_to_claim":"보상을 획득할 수 있습니다","cph_tier_complete":"단계 완료"},"pl":{"cph_awards_bonuses_tattoo":"{tattooName} – tatuaż","cph_awards_bonuses_title":"Premie","cph_awards_bronze":"Brąz","cph_awards_gold":"Złoto","cph_awards_not_unlocked":"Nie odblokowano","cph_awards_platinum":"Platyna","cph_awards_rp_bonus_info":"Wykonuj wyjątkowe wyzwania, aby zdobyć GTA$, dodatkowe nagrody i więcej, w tym premie RP za każdy poziom wyzwań:","cph_awards_silver":"Srebro","cph_awards_title":"Nagrody","cph_callout_feedback_body":"Jak ci się podoba GTA Online? Podziel się z nami swoimi przemyśleniami i pomysłami, które pomogą nam kształtować przyszłość gry.","cph_callout_feedback_button":"Dodaj opinię","cph_callout_feedback_title":"Podziel się opinią","cph_highlights_group_aria":"Wyróżnione {index} z {total}","cph_highlights_heading":"Wyróżnione","cph_highlights_next":"Dalej","cph_highlights_previous":"Poprzednie","cph_intro_getting_started":"Pierwsze kroki","cph_intro_guide_instruction":"Przeczytaj poradnik „{title}”, aby dowiedzieć się więcej.","cph_intro_guide_learn_more":"Dowiedz się więcej","cph_loggedin_nochar_body":"Nie odnaleziono postaci GTA Online powiązanej z twoim kontem. Powiąż postać lub przełącz się na inne konto.","cph_loggedin_nochar_button":"Powiąż swoje konto","cph_loggedin_nochar_title":"Powiąż postać GTA Online","cph_login_prompt_body":"Zaloguj się, aby zobaczyć wszystkie nagrody, które możesz zdobyć, zdobyte nagrody i możliwości, które wciąż stoją przed tobą otworem.","cph_login_prompt_button":"Zaloguj się","cph_login_prompt_button_helper":"Nie posiadasz konta?","cph_login_prompt_button_helper_link":"Załóż konto","cph_login_prompt_title":"Zaloguj się, aby śledzić postępy","cph_nav_close":"Zamknij menu nawigacji","cph_nav_open":"Otwórz menu nawigacji","cph_nav_scroll_left":"Przesuń w lewo","cph_nav_scroll_right":"Przesuń w prawo","cph_progress_available_on":"Dostępne wyłącznie na","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Postępy","cph_progress_challenges_title":"Wyzwania","cph_progress_close":"Zamknij","cph_progress_rewards_title":"Nagrody","cph_progress_rewards_view_all":"Zobacz wszystkie","cph_progress_rewards_view_less":"Wyświetl mniej","cph_progress_tracker_tier_label":"Poziom {number}","cph_progress_tracker_title":"Postępy kariery","cph_reward_claimable":"Gotowe do odebrania","cph_reward_claimed":"Odebrano","cph_reward_how_to_claim":"Nagrody gotowe do odebrania Odwiedź menu postępów kariery w grze, aby odebrać.","cph_reward_locked":"Nagroda zablokowana","cph_reward_ready_to_claim":"Nagrody gotowe do odebrania","cph_tier_complete":"Poziom ukończony"},"br":{"cph_awards_bonuses_tattoo":"Tatuagem: {tattooName}","cph_awards_bonuses_title":"Bônus","cph_awards_bronze":"Bronze","cph_awards_gold":"Ouro","cph_awards_not_unlocked":"Não desbloqueou","cph_awards_platinum":"Platina","cph_awards_rp_bonus_info":"Conclua desafios únicos para ganhar GTA$, itens bônus, e mais, incluindo bônus de RP para cada nível:","cph_awards_silver":"Prata","cph_awards_title":"Prêmios","cph_callout_feedback_body":"Como está sendo a sua experiência no GTA Online? Envie suas ideias e opiniões e ajude a construir o futuro do jogo.","cph_callout_feedback_button":"Enviar feedback","cph_callout_feedback_title":"Compartilhe seu feedback","cph_highlights_group_aria":"Seleção {index} de {total}","cph_highlights_heading":"Seleções","cph_highlights_next":"Próximo","cph_highlights_previous":"Anterior","cph_intro_getting_started":"Primeiros passos","cph_intro_guide_instruction":"Leia o Guia de {title} para saber mais.","cph_intro_guide_learn_more":"Saiba mais","cph_loggedin_nochar_body":"Não achamos nenhum personagem do GTA Online vinculado à sua conta. Vincule um personagem ou use uma conta diferente.","cph_loggedin_nochar_button":"Vincular conta do jogo","cph_loggedin_nochar_title":"Vincular um personagem do GTA Online","cph_login_prompt_body":"Inicie sessão na sua conta para ver todas as recompensas que você pode ganhar, as recompensas que já ganhou e todas as possibilidades ainda por vir.","cph_login_prompt_button":"Iniciar sessão","cph_login_prompt_button_helper":"Não tem uma conta?","cph_login_prompt_button_helper_link":"Crie uma conta","cph_login_prompt_title":"Inicie sessão para ver seu Progresso","cph_nav_close":"Fechar navegação entre seções","cph_nav_open":"Abrir navegação entre seções","cph_nav_scroll_left":"Rolar para a esquerda","cph_nav_scroll_right":"Rolar para a direita","cph_progress_available_on":"Disponível apenas para","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Barra de progresso","cph_progress_challenges_title":"Desafios","cph_progress_close":"Fechar","cph_progress_rewards_title":"Recompensas","cph_progress_rewards_view_all":"Ver tudo","cph_progress_rewards_view_less":"Ver menos","cph_progress_tracker_tier_label":"Nível {number}","cph_progress_tracker_title":"Progresso da Carreira","cph_reward_claimable":"Pronto para resgatar","cph_reward_claimed":"Resgatado","cph_reward_how_to_claim":"Recompensas disponíveis para resgatar. Acesse o Menu de Progresso da Carreira no jogo para resgatar.","cph_reward_locked":"Recompensa bloqueada","cph_reward_ready_to_claim":"Recompensas disponíveis para resgatar","cph_tier_complete":"Nível concluído"},"ru":{"cph_awards_bonuses_tattoo":"Татуировка {tattooName}","cph_awards_bonuses_title":"Бонусы","cph_awards_bronze":"Бронза","cph_awards_gold":"Золото","cph_awards_not_unlocked":"Не открыто","cph_awards_platinum":"Платина","cph_awards_rp_bonus_info":"Выполняйте особые испытания и получайте GTA $, бонусные предметы и другое, включая дополнительные очки RP за каждый уровень:","cph_awards_silver":"Серебро","cph_awards_title":"Награды","cph_callout_feedback_body":"Как вам GTA Online? Поделитесь вашими мыслями и предложениями - это поможет нам определить будущее игры.","cph_callout_feedback_button":"Обратная связь","cph_callout_feedback_title":"Оставьте отзыв","cph_highlights_group_aria":"Элемент {index} из {total}","cph_highlights_heading":"Элементы","cph_highlights_next":"Далее","cph_highlights_previous":"Назад","cph_intro_getting_started":"С чего начать","cph_intro_guide_instruction":"Ознакомьтесь с руководством по данной теме, чтобы узнать больше.","cph_intro_guide_learn_more":"Узнать больше","cph_loggedin_nochar_body":"Мы не смогли найти персонажа GTA Online, связанного с вашей учетной записью. Привяжите его или переключитесь на другую учетную запись.","cph_loggedin_nochar_button":"Привязать учетную запись","cph_loggedin_nochar_title":"Привязка персонажа GTA Online","cph_login_prompt_body":"Войдите в свою учетную запись, чтобы увидеть все награды, которые вы можете получить и уже получили, а также все возможности, которые вас ждут впереди.","cph_login_prompt_button":"Войти","cph_login_prompt_button_helper":"У вас нет учетной записи?","cph_login_prompt_button_helper_link":"Создать учетную запись","cph_login_prompt_title":"Войдите, чтобы посмотреть свой прогресс","cph_nav_close":"Закрыть навигацию по разделам","cph_nav_open":"Открыть навигацию по разделам","cph_nav_scroll_left":"Пролистать влево","cph_nav_scroll_right":"Пролистать вправо","cph_progress_available_on":"Доступно только на","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"Индикатор прогресса","cph_progress_challenges_title":"Испытания","cph_progress_close":"Закрыть","cph_progress_rewards_title":"Награды","cph_progress_rewards_view_all":"Все награды","cph_progress_rewards_view_less":"Свернуть","cph_progress_tracker_tier_label":"Уровень {number}","cph_progress_tracker_title":"Прогресс карьеры","cph_reward_claimable":"Готова к получению","cph_reward_claimed":"Получена","cph_reward_how_to_claim":"Награды готовы к получению. Зайдите в меню «Прогресс карьеры» в игре, чтобы их получить.","cph_reward_locked":"Награда заблокирована","cph_reward_ready_to_claim":"Награды готовы к получению","cph_tier_complete":"Уровень завершен"},"hans":{"cph_awards_bonuses_tattoo":"{tattooName} 纹身","cph_awards_bonuses_title":"奖励","cph_awards_bronze":"青铜","cph_awards_gold":"黄金","cph_awards_not_unlocked":"未解锁","cph_awards_platinum":"铂金","cph_awards_rp_bonus_info":"完成独特的挑战即可赚取 GTA 游戏币、奖励物品及更多内容，包括每个等级的声望值奖励：","cph_awards_silver":"白银","cph_awards_title":"奖章","cph_callout_feedback_body":"您在 GTA 在线模式的体验如何？告诉我们您的感受和想法以帮助我们更好地塑造游戏。","cph_callout_feedback_button":"提供反馈","cph_callout_feedback_title":"分享您的反馈","cph_highlights_group_aria":"突出 {index} 共 {total}","cph_highlights_heading":"突出","cph_highlights_next":"下一个","cph_highlights_previous":"上一个","cph_intro_getting_started":"现在开始","cph_intro_guide_instruction":"阅读 {title} 指南以了解详细信息。","cph_intro_guide_learn_more":"了解详细信息","cph_loggedin_nochar_body":"我们无法找到与您的账户绑定的 GTA 在线模式角色。绑定账户或更换一个不同的账户。","cph_loggedin_nochar_button":"绑定一个游戏账户","cph_loggedin_nochar_title":"绑定一个 GTA 在线模式角色","cph_login_prompt_body":"登录您的账户以查看您可以赚取的所有奖励、您已经拥有的奖励，及前方等待着的机遇。","cph_login_prompt_button":"登录","cph_login_prompt_button_helper":"没有账户？","cph_login_prompt_button_helper_link":"创建一个新账户","cph_login_prompt_title":"登录以追踪您的进度","cph_nav_close":"关闭章节导航","cph_nav_open":"打开章节导航","cph_nav_scroll_left":"向左滚动","cph_nav_scroll_right":"向右滚动","cph_progress_available_on":"使用仅限于","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"进度条","cph_progress_challenges_title":"挑战","cph_progress_close":"关闭","cph_progress_rewards_title":"奖励","cph_progress_rewards_view_all":"查看全部","cph_progress_rewards_view_less":"查看较少","cph_progress_tracker_tier_label":"第 {number} 级","cph_progress_tracker_title":"职业进度","cph_reward_claimable":"现可领取","cph_reward_claimed":"已领取","cph_reward_how_to_claim":"现可领取奖励。前往游戏内的“职业进度”以领取。","cph_reward_locked":"奖励已锁定","cph_reward_ready_to_claim":"现可领取奖励","cph_tier_complete":"已完成等级"},"tw":{"cph_awards_bonuses_tattoo":"{tattooName} 刺青","cph_awards_bonuses_title":"紅利","cph_awards_bronze":"銅牌","cph_awards_gold":"金牌","cph_awards_not_unlocked":"未解鎖","cph_awards_platinum":"白金","cph_awards_rp_bonus_info":"完成獨特挑戰賺取 GTA 遊戲幣、獎勵物品，以及更多，包括每個等級的聲望值獎勵：","cph_awards_silver":"銀牌","cph_awards_title":"獎章","cph_callout_feedback_body":"您遊玩 GTA 線上模式的感想如何？把您的想法和意見告訴我們，幫助我們塑造遊戲的未來。","cph_callout_feedback_button":"給予意見","cph_callout_feedback_title":"分享您的意見","cph_highlights_group_aria":"標記 {index} / {total}","cph_highlights_heading":"標記","cph_highlights_next":"繼續","cph_highlights_previous":"上一個","cph_intro_getting_started":"新手入門","cph_intro_guide_instruction":"閱讀「{title}」指南以了解詳情。","cph_intro_guide_learn_more":"了解詳情","cph_loggedin_nochar_body":"我們無法找到與您的帳戶連結的 GTA 線上模式角色。連結或換成另一個不同的帳戶。","cph_loggedin_nochar_button":"連結遊戲帳戶","cph_loggedin_nochar_title":"連結一個 GTA 線上模式角色","cph_login_prompt_body":"登入您的帳戶查看所有您能賺取的獎勵、您已贏得的獎章，展望您的可能性。","cph_login_prompt_button":"登入","cph_login_prompt_button_helper":"沒有帳戶？","cph_login_prompt_button_helper_link":"註冊帳戶","cph_login_prompt_title":"登入以追蹤您的進度","cph_nav_close":"關閉區段導覽","cph_nav_open":"開啟區段導覽","cph_nav_scroll_left":"向左捲動","cph_nav_scroll_right":"向右捲動","cph_progress_available_on":"僅限於","cph_progress_available_on_aria_ps5":"PlayStation®5","cph_progress_available_on_aria_xbox":"Xbox Series X|S","cph_progress_bar_aria":"進度值條","cph_progress_challenges_title":"挑戰","cph_progress_close":"關閉","cph_progress_rewards_title":"獎勵","cph_progress_rewards_view_all":"檢視全部","cph_progress_rewards_view_less":"檢視較少","cph_progress_tracker_tier_label":"第 {number} 級","cph_progress_tracker_title":"生涯進度","cph_reward_claimable":"已可領取","cph_reward_claimed":"已領取","cph_reward_how_to_claim":"獎勵已可領取。前往遊戲內的「生涯進度」選單領取。","cph_reward_locked":"獎勵未解鎖","cph_reward_ready_to_claim":"獎勵已可領取","cph_tier_complete":"層級已完成"}}');
      var p = r(3052),
        m = r(2004),
        g = r(5608),
        h = r(244);
      const u = {
        check: "rockstargames-modules-gtao-career-progress-hubc622fd82e3ed025021f058613d9881f0",
        bronze: "rockstargames-modules-gtao-career-progress-hube53ba4714998619cf49789c1563d094e",
        silver: "rockstargames-modules-gtao-career-progress-hube8f36b96a23a013d7dc4eca95b5c7e4e",
        gold: "rockstargames-modules-gtao-career-progress-huba15ec57237c3f4bcf13000bd9386a395",
        platinum: "rockstargames-modules-gtao-career-progress-hubb6390df3bae907c831e238412eb377d4",
        completed: "rockstargames-modules-gtao-career-progress-hubd72a40f1b8269cb14f337b303f6cda1d"
      };
      var b = r(3480);
      const f = e => {
          let {
            alt: a,
            type: r,
            classes: s = ""
          } = e;
          return (0, b.jsx)("div", {
            className: [s, u.check, r ? u[r] : null].join(" "),
            children: (0, b.jsxs)("svg", {
              width: "6",
              height: "4",
              viewBox: "0 0 6 4",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              role: "img",
              children: [(0, b.jsx)("title", {
                children: a
              }), (0, b.jsx)("path", {
                d: "M5 0.5L2.25 3.25L1 2",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })]
            })
          })
        },
        R = {
          GUNRUNNING: 1471810592,
          LSDRUGWARS: -1859518261,
          CONTRACT: -392727791,
          AFTERHOURS: -1815199872,
          SMUGGLERSRUN: 1164011531,
          IMPORTEXPORT: -647547292,
          BIKERS: 315075481,
          FAIFAF: -1374101462,
          CAYOPERICOHEIST: -995532639,
          DIAMONDCASINOHEIST: 98960286,
          DOOMSDAY: 1942893817,
          HEISTS: -2044559582,
          PROJECTOVERTHROW: 1445486638,
          PAPERTRAIL: -961870614,
          SUPERYACHTLIFE: -431626303,
          GERALDSLASTPLAY: -192008291,
          PREMIUMDELUXREPO: 75069984,
          MADRAZODISPATCH: -2012307449,
          LOWRIDERS: -501692796,
          LSTUNERS: 320230760,
          DIAMONDCASINO: 1009355195,
          RACING: -344405389,
          SURVIVALS: 350693912,
          ADVERSARYMODE: -789968707,
          DEATHMATCHES: -1232781894,
          VEHICLE: -584819812,
          WEAPONS: -2143405780,
          ARENAWAR: -57043721,
          CHOPSHOP: -4750723
        },
        E = (0, p.makeVar)({
          awardsKey: null,
          rewardsKey: null
        }),
        S = e => E({
          ...E(),
          awardsKey: e
        }),
        k = e => E({
          ...E(),
          rewardsKey: e
        }),
        v = () => {
          const e = (0, p.useReactiveVar)(E);
          return {
            setAwardsKey: S,
            setRewardsKey: k,
            state: e
          }
        },
        w = (0, i.defineMessages)({
          cph_awards_title: {
            id: "cph_awards_title",
            defaultMessage: "Awards"
          },
          cph_awards_not_unlocked: {
            id: "cph_awards_not_unlocked",
            defaultMessage: "Not unlocked"
          },
          cph_progress_bar_aria: {
            id: "cph_progress_bar_aria",
            defaultMessage: "Progress Bar"
          },
          cph_progress_tracker_title: {
            id: "cph_progress_tracker_title",
            defaultMessage: "Career Progress"
          },
          cph_progress_tracker_tier_label: {
            id: "cph_progress_tracker_tier_label",
            defaultMessage: "Tier {number}"
          },
          cph_progress_challenges_title: {
            id: "cph_progress_challenges_title",
            defaultMessage: "Challenges"
          },
          cph_progress_rewards_title: {
            id: "cph_progress_rewards_title",
            defaultMessage: "Rewards"
          },
          cph_progress_rewards_view_all: {
            id: "cph_progress_rewards_view_all",
            defaultMessage: "View All"
          },
          cph_progress_rewards_view_less: {
            id: "cph_progress_rewards_view_less",
            defaultMessage: "View Less"
          },
          cph_progress_close: {
            id: "cph_progress_close",
            defaultMessage: "Close"
          },
          cph_nav_open: {
            id: "cph_nav_open",
            defaultMessage: "Open Section Navigation"
          },
          cph_nav_close: {
            id: "cph_nav_close",
            defaultMessage: "Close Section Navigation"
          },
          cph_nav_scroll_left: {
            id: "cph_nav_scroll_left",
            defaultMessage: "Scroll Left"
          },
          cph_nav_scroll_right: {
            id: "cph_nav_scroll_right",
            defaultMessage: "Scroll Right"
          },
          cph_intro_getting_started: {
            id: "cph_intro_getting_started",
            defaultMessage: "Getting Started"
          },
          cph_intro_guide_instruction: {
            id: "cph_intro_guide_instruction",
            defaultMessage: "Read the {title} Guide to learn more."
          },
          cph_intro_guide_learn_more: {
            id: "cph_intro_guide_learn_more",
            defaultMessage: "Learn more"
          },
          cph_progress_available_on: {
            id: "cph_progress_available_on",
            defaultMessage: "Only available on"
          },
          cph_progress_available_on_aria_ps5: {
            id: "cph_progress_available_on_aria_ps5",
            defaultMessage: "PlayStation®5"
          },
          cph_progress_available_on_aria_xbox: {
            id: "cph_progress_available_on_aria_xbox",
            defaultMessage: "Xbox Series X|S"
          },
          cph_login_prompt_title: {
            id: "cph_login_prompt_title",
            defaultMessage: "Sign In to Track Your Progress"
          },
          cph_login_prompt_body: {
            id: "cph_login_prompt_body",
            defaultMessage: "Sign in to your account to see all the rewards you can earn, the awards you've won, and the possibilities still ahead of you."
          },
          cph_login_prompt_button: {
            id: "cph_login_prompt_button",
            defaultMessage: "Sign In"
          },
          cph_login_prompt_button_helper: {
            id: "cph_login_prompt_button_helper",
            defaultMessage: "Don't have an account?"
          },
          cph_login_prompt_button_helper_link: {
            id: "cph_login_prompt_button_helper_link",
            defaultMessage: "Create an Account"
          },
          cph_callout_feedback_title: {
            id: "cph_callout_feedback_title",
            defaultMessage: "Share Your Feedback"
          },
          cph_callout_feedback_body: {
            id: "cph_callout_feedback_body",
            defaultMessage: "How are you enjoying GTA Online? Tell us your thoughts and ideas to help us shape the future of the game."
          },
          cph_callout_feedback_button: {
            id: "cph_callout_feedback_button",
            defaultMessage: "Give feedback"
          },
          cph_loggedin_nochar_title: {
            id: "cph_loggedin_nochar_title",
            defaultMessage: "Link a GTA Online Character"
          },
          cph_loggedin_nochar_body: {
            id: "cph_loggedin_nochar_body",
            defaultMessage: "We couldn't find a GTA Online character linked to your account. Link one or switch to a different account."
          },
          cph_loggedin_nochar_button: {
            id: "cph_loggedin_nochar_button",
            defaultMessage: "Link a game account"
          },
          cph_reward_locked_alt: {
            id: "cph_reward_locked",
            defaultMessage: "Reward locked"
          },
          cph_reward_claimable: {
            id: "cph_reward_claimable",
            defaultMessage: "Ready to claim"
          },
          cph_reward_claimed: {
            id: "cph_reward_claimed",
            defaultMessage: "Claimed"
          },
          cph_tier_complete: {
            id: "cph_tier_complete",
            defaultMessage: "Tier Complete"
          },
          cph_reward_ready_to_claim: {
            id: "cph_reward_ready_to_claim",
            defaultMessage: "Rewards ready to be claimed"
          },
          cph_reward_how_to_claim: {
            id: "cph_reward_how_to_claim",
            defaultMessage: "Rewards ready to be claimed. Visit the Career Progress Menu in-game to claim."
          },
          cph_highlights_heading: {
            id: "cph_highlights_heading",
            defaultMessage: "Highlights"
          },
          cph_highlights_previous: {
            id: "cph_highlights_previous",
            defaultMessage: "Previous"
          },
          cph_highlights_next: {
            id: "cph_highlights_next",
            defaultMessage: "Next"
          },
          cph_highlights_group_aria: {
            id: "cph_highlights_group_aria",
            defaultMessage: "Highlight {index} of {total}"
          },
          cph_awards_bonuses_title: {
            id: "cph_awards_bonuses_title",
            defaultMessage: "Bonuses"
          },
          cph_awards_bronze: {
            id: "cph_awards_bronze",
            defaultMessage: "Bronze"
          },
          cph_awards_silver: {
            id: "cph_awards_silver",
            defaultMessage: "Silver"
          },
          cph_awards_gold: {
            id: "cph_awards_gold",
            defaultMessage: "Gold"
          },
          cph_awards_platinum: {
            id: "cph_awards_platinum",
            defaultMessage: "Platinum"
          },
          cph_awards_bonuses_tattoo: {
            id: "cph_awards_bonuses_tattoo",
            defaultMessage: "{tattooName} Tattoo"
          },
          cph_awards_rp_bonus_info: {
            id: "cph_awards_rp_bonus_info",
            defaultMessage: "Complete unique challenges to earn GTA$, bonus items, and more including RP bonuses for each Level:"
          }
        }),
        j = {
          metalLegend: "rockstargames-modules-gtao-career-progress-hubf755ed57783b2c3fd926e10c92bd4b4b",
          single: "rockstargames-modules-gtao-career-progress-hube3fe35a81b2de9bcd6ac59e694cd1da7",
          completed: "rockstargames-modules-gtao-career-progress-huba8ea6fc19c62c1938a518d7bccab0c1f",
          locked: "rockstargames-modules-gtao-career-progress-hubbb34c746882ca6f5b0ca4f6421d59239"
        },
        x = e => {
          let {
            metals: a,
            currentLevel: r,
            currentLevelComplete: s,
            classes: t = ""
          } = e;
          const {
            formatMessage: o
          } = (0, i.useIntl)();
          return (0, b.jsx)("ul", {
            className: [j.metalLegend, t || "", 1 === a.length ? j.single : ""].join(" "),
            children: a.map(((e, t) => {
              const c = t < a.indexOf(r) || t === a.indexOf(r) && s;
              return (0, b.jsx)("li", {
                "data-unlocked": c,
                children: c ? (0, b.jsx)(f, {
                  alt: e,
                  type: e,
                  classes: j.completed
                }) : (0, b.jsx)("div", {
                  className: [j.locked, j[e]].join(" "),
                  "aria-label": o(w.cph_awards_not_unlocked),
                  role: "img"
                })
              }, e)
            }))
          })
        },
        A = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubaa0d7b4f28558f4a75c829ebe79f9332",
          selected: "rockstargames-modules-gtao-career-progress-hubac3789ecb969c662c1c19c77d57ba7f5",
          progressBar: "rockstargames-modules-gtao-career-progress-hubd9a25aac53d91f8f27d4e34ff478192b",
          bronze: "rockstargames-modules-gtao-career-progress-hubbcdf522653a2ad75b910d1ffaa26eaee",
          silver: "rockstargames-modules-gtao-career-progress-hubf300b5171a8f02e33767f3be902b1c42",
          gold: "rockstargames-modules-gtao-career-progress-hube3bab1f0857c700e6fe11547713b6a1e",
          platinum: "rockstargames-modules-gtao-career-progress-hubc169d4e08437c7ed487ffb28a6f8948c",
          filler: "rockstargames-modules-gtao-career-progress-hubf25df04b21bb7f966c2f3d747ca90a14",
          collapsed: "rockstargames-modules-gtao-career-progress-hube40dcafd178e17cc46f3861b7bf6584b",
          visuallyHidden: "rockstargames-modules-gtao-career-progress-hube337f4ecc1da229364db15f3e92b2669"
        },
        P = e => {
          let {
            theme: a,
            percentage: r,
            isExpanded: s = !1,
            classes: t = ""
          } = e;
          const o = (0, i.useIntl)();
          return (0, b.jsx)("div", {
            className: `${t} ${[A.progressBar,a&&A[a],s?"":A.collapsed].join(" ")}`,
            role: "progressbar",
            "aria-label": o.formatMessage(w.cph_progress_bar_aria),
            children: (0, b.jsx)("div", {
              className: [A.filler, a && A[a]].join(" "),
              style: {
                width: `${r}%`
              },
              children: (0, b.jsx)("span", {
                className: A.visuallyHidden,
                children: `${r}%`
              })
            })
          })
        },
        I = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubfe5622ec626db04bf9e405d7850599dd",
          selected: "rockstargames-modules-gtao-career-progress-hubb679a5b2b5b97c820a4bba516bba223a",
          progressCounter: "rockstargames-modules-gtao-career-progress-hubcf064d357c5807bbf02c498b0ccea29d",
          slash: "rockstargames-modules-gtao-career-progress-hubb328e1767737df6d8446386ebb97bd1f",
          bronze: "rockstargames-modules-gtao-career-progress-hubdd5dc90ce0c66689e04a00cf159d6001",
          silver: "rockstargames-modules-gtao-career-progress-hubaada5bb3f550c8a26053e47ba516cc26",
          gold: "rockstargames-modules-gtao-career-progress-hubc3088302e6ffa6faaa30b324090c1e54",
          platinum: "rockstargames-modules-gtao-career-progress-hubfdb611341b63c7205ea2345e2e211158",
          light: "rockstargames-modules-gtao-career-progress-hube7c1b78aacf918fd702e16d3db42b27f"
        },
        T = e => {
          let {
            value: a,
            total: r,
            theme: s,
            classes: t
          } = e;
          return (0, b.jsxs)("div", {
            className: [I.progressCounter, ...t ? [t] : []].join(" "),
            "aria-label": `${a}/${r}`,
            "data-testid": "progressCounter",
            children: [(0, b.jsx)("span", {
              children: void 0 === a ? "--" : a
            }), (0, b.jsx)("span", {
              className: I.slash
            }), (0, b.jsx)("span", {
              className: s && I[s],
              children: r
            })]
          })
        },
        N = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hube1e97b97e62f444184513f82c6357df7",
          selected: "rockstargames-modules-gtao-career-progress-hubc489f717135d74355fb5c1ac5c19bb85",
          award: "rockstargames-modules-gtao-career-progress-hubc10ebc2c1fba20aba1307818ff452ecd",
          completed: "rockstargames-modules-gtao-career-progress-hubc72a2991a4212040445fb62654655d59",
          awardName: "rockstargames-modules-gtao-career-progress-hubcaccb9485f92320e02ce2afb73e9d99f",
          awardHint: "rockstargames-modules-gtao-career-progress-huba7be209070b16302bba36cc3379d874f",
          tooltip: "rockstargames-modules-gtao-career-progress-hubd3ed4967776fee4b41bd39c9700d7539",
          fadeItemsIn: "rockstargames-modules-gtao-career-progress-huba34b17542b75566602f9fc627cebdf3c",
          hovered: "rockstargames-modules-gtao-career-progress-hubfa3692e2e203d2563b67cff0a9a10e6b",
          awardInfo: "rockstargames-modules-gtao-career-progress-hubb229ce6de765ce3e8b6a49edd8f6e750",
          awardContent: "rockstargames-modules-gtao-career-progress-hubd535a86d18b22bd1aa5cc49dfc9917d0",
          metalLegendContainer: "rockstargames-modules-gtao-career-progress-hubf92032f94146789d4c4e487da4a2d216",
          progressBar: "rockstargames-modules-gtao-career-progress-hubc7e4199c1b8409b6173efb346572dfba",
          awardDetails: "rockstargames-modules-gtao-career-progress-hubd28d7d5d4323ee40e303790a560d4172",
          awardImage: "rockstargames-modules-gtao-career-progress-hubfff0d980134e4a2b395ff1b00728f93f",
          expanded: "rockstargames-modules-gtao-career-progress-hubb45448c551dc8315732ccdcb96c6fbf1",
          tooltipInner: "rockstargames-modules-gtao-career-progress-hubc3b10ba545ad1f815277f55a302a97e1",
          progressCounter: "rockstargames-modules-gtao-career-progress-hubcf08c8ac5d19e66a57cb436514116cfa"
        },
        O = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubfc57464f548f2cc343ff8b560b84a773",
          selected: "rockstargames-modules-gtao-career-progress-hubc48d50a5c5254a48b05c2bf4cb1dc5ad",
          title: "rockstargames-modules-gtao-career-progress-hubad48e58a2dc3106dc694151f02e2597f",
          bonusList: "rockstargames-modules-gtao-career-progress-hubbae7bd12162bcfaa1c3c1a268637e3d6",
          platinum: "rockstargames-modules-gtao-career-progress-hubb0954d33a610798e8d5daa2c22eb0c8e",
          check: "rockstargames-modules-gtao-career-progress-hubb978e60b8909c59eca38bfaaa31d5fc8",
          isComplete: "rockstargames-modules-gtao-career-progress-hubcc717a8be35838a59d0197f7e35c6f88"
        },
        C = e => {
          let {
            bonuses: a,
            currentLevelComplete: r
          } = e;
          const s = (0, i.useIntl)();
          return (0, b.jsxs)("div", {
            className: O.bonuses,
            children: [(0, b.jsx)("h6", {
              className: O.title,
              children: s.formatMessage(w.cph_awards_bonuses_title)
            }), (0, b.jsx)("ul", {
              className: O.bonusList,
              children: a.map((e => (0, b.jsxs)("li", {
                children: [(0, b.jsx)(f, {
                  alt: e.title,
                  classes: [O.check, r ? O.isComplete : ""].join(" ")
                }), "TATTOO" === e.type ? s.formatMessage(w.cph_awards_bonuses_tattoo, {
                  tattooName: e.title
                }) : e.title, (0, b.jsx)("span", {
                  className: O.platinum,
                  children: `(${s.formatMessage(w.cph_awards_platinum)})`
                })]
              }, e.title)))
            })]
          })
        },
        {
          cdnBase: W
        } = (0, _.getScConfigForOrigin)(),
        y = "bronze",
        G = "platinum",
        z = [y, "silver", "gold", G],
        D = e => {
          let {
            award: a,
            isExpanded: r,
            isMobile: t,
            toggleModal: o,
            classes: c,
            position: i,
            hoverFn: _,
            setHoveredAwardId: n,
            isShowTooltip: l
          } = e;
          const p = function(e) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const r = {
                progress: void 0 === e ? void 0 : Number(e),
                currentLevel: a.length && a.length > 1 ? y : G,
                levelEnd: a.length > 0 ? a[0] : 1,
                isComplete: !1,
                percent: 0,
                metalLevel: 0
              };
              if (void 0 === r.progress || 0 === r.progress) return r;
              if (a.length > 1 && r.progress >= a[a.length - 1] || !a.length && r.progress >= 1) r.isComplete = !0, r.percent = 100, r.levelEnd = a.length ? a[a.length - 1] : 1, r.currentLevel = a.length ? z[a.length - 1] : r.currentLevel, r.progress = r.levelEnd;
              else if (1 === a.length) r.percent = r.progress > 0 ? r.progress / r.levelEnd * 100 : 0, r.isComplete = Boolean(r.progress >= r.levelEnd), r.progress = r.isComplete ? r.levelEnd : r.progress;
              else {
                let e = a.findIndex(((e, s) => {
                  const t = 0 === s ? 0 : s - 1;
                  return void 0 !== r.progress && r.progress >= a[t] && r.progress < e
                }));
                if (e < 0 && (e = 0), e >= 0) {
                  const c = 0 === e ? 0 : e - 1;
                  r.currentLevel = z[e], r.levelEnd = a[e], r.metalLevel = e, r.percent = (s = r.progress, t = c, o = r.levelEnd, Math.floor(100 * (s - t) / (o - t) + 0))
                }
              }
              var s, t, o;
              return r
            }(a.playerProgress, a.levels),
            g = t ? h.motion.button : "li",
            [u, f] = (0, s.useState)(null),
            [R, E] = (0, s.useState)(null),
            [S, k] = (0, s.useState)(null),
            {
              track: v
            } = (0, d.useGtmTrack)(),
            {
              styles: w,
              attributes: j
            } = (0, m.usePopper)(u, R, {
              placement: "auto",
              modifiers: [{
                name: "flip",
                options: {
                  allowedAutoPlacements: ["top"],
                  fallbackPlacements: ["bottom"]
                }
              }]
            });

          function A(e) {
            t || (_(e), n(i))
          }(0, s.useEffect)((() => {
            if (!l && S) clearTimeout(S), k(null);
            else if (l && !S) {
              const e = setTimeout((() => {
                v({
                  event: "awards_hover",
                  event_category: "awards",
                  event_action: "hover",
                  event_label: "awards",
                  element_placement: "awards",
                  position: i
                })
              }), 1e3);
              k(e)
            }
          }), [l, S]);
          const I = {
              collapsed: {
                maxHeight: "0",
                overflow: "hidden",
                opacity: 0,
                transition: {
                  duration: .3,
                  ease: "easeIn",
                  stiffness: 1e3,
                  damping: 100
                }
              },
              expanded: {
                maxHeight: "5rem",
                opacity: 1,
                transition: {
                  duration: .3,
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100
                }
              }
            },
            O = (0, s.useRef)(null);
          return (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsxs)(g, {
              ..."li" !== g && {
                layout: "position"
              },
              className: [N.award, ...p.isComplete ? [N.completed] : [], ...r ? [N.expanded] : [], ...l ? [N.hovered] : [], ...c ? [c] : []].join(" "),
              ref: t ? O : f,
              tabIndex: 0,
              ...t && !r && {
                onClick: () => {
                  o(), v({
                    event: "awards_click",
                    event_category: "awards",
                    event_action: "click",
                    event_label: "awards",
                    element_placement: "awards",
                    position: i
                  })
                }
              },
              ...t && r && {
                disabled: !0
              },
              ...!t && {
                onMouseOver: () => A(!0),
                onMouseOut: () => A(!1),
                onFocus: () => A(!0),
                onBlur: () => A(!1)
              },
              "data-testid": "award",
              children: [(0, b.jsxs)(h.motion.div, {
                className: N.awardContent,
                children: [(0, b.jsxs)("div", {
                  className: N.awardInfo,
                  children: [(0, b.jsx)(h.motion.div, {
                    className: N.awardImage,
                    layout: "position",
                    children: (0, b.jsx)(h.motion.img, {
                      src: `${W}/images/games/GTAV/multiplayer/award/${p.currentLevel}/${a.imageName}.png`,
                      alt: a.name,
                      layout: "position"
                    })
                  }), (0, b.jsxs)(h.motion.div, {
                    className: N.awardDetails,
                    layout: !0,
                    children: [(0, b.jsx)("h3", {
                      className: N.awardName,
                      children: a.name
                    }), t && (0, b.jsx)(h.motion.div, {
                      className: N.awardHint,
                      initial: "collapsed",
                      variants: I,
                      animate: r ? "expanded" : "collapsed",
                      children: a.hint
                    }), (0, b.jsx)(T, {
                      theme: p.currentLevel,
                      value: p.progress,
                      total: p.levelEnd,
                      classes: N.progressCounter
                    }), a.bonuses && t && (0, b.jsx)(h.motion.div, {
                      initial: "collapsed",
                      variants: I,
                      animate: r ? "expanded" : "collapsed",
                      children: (0, b.jsx)(C, {
                        currentLevelComplete: p.isComplete,
                        bonuses: a.bonuses
                      })
                    })]
                  })]
                }), !p.isComplete && (0, b.jsx)(P, {
                  theme: p.currentLevel,
                  percentage: p.percent,
                  isExpanded: r,
                  classes: N.progressBar
                })]
              }), (0, b.jsx)("div", {
                className: N.metalLegendContainer,
                children: (0, b.jsx)(x, {
                  metals: a.levels && a.levels.length > 1 ? z : [G],
                  currentLevel: p.currentLevel,
                  currentLevelComplete: p.isComplete,
                  classes: N.metalLegend
                })
              })]
            }), !t && l && (0, b.jsx)("div", {
              className: N.tooltip,
              style: w.popper,
              ref: E,
              ...j,
              children: (0, b.jsxs)("div", {
                className: N.tooltipInner,
                children: [a.hint, a.bonuses && (0, b.jsx)(C, {
                  currentLevelComplete: p.isComplete,
                  bonuses: a.bonuses
                })]
              })
            })]
          })
        },
        V = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubaf7581ac0448db3daced316d1ee280a3",
          selected: "rockstargames-modules-gtao-career-progress-hubd312e601e5362619c9f7836a4ef58046",
          awardsOuter: "rockstargames-modules-gtao-career-progress-hubb6f4f525b44d92258f0b6f22c6f2ce9f",
          isClosing: "rockstargames-modules-gtao-career-progress-hubca718b5dc17015d0d238544c7871b206",
          isOpen: "rockstargames-modules-gtao-career-progress-hubd1e04563d75f1a6c0906ba4ac12647c0",
          awardsContainer: "rockstargames-modules-gtao-career-progress-huba70d817aad6d7dfaf6a5946754bad58d",
          awardCategoryName: "rockstargames-modules-gtao-career-progress-hubf473d3928ee158b1772f542ed9a29dd4",
          modalOpen: "rockstargames-modules-gtao-career-progress-hube3d0e962743b38e28ebddce143e25ad8",
          categoryWrapper: "rockstargames-modules-gtao-career-progress-hube3ab9d493d33bb94d95faba87d6d2947",
          awardsCategoryOpen: "rockstargames-modules-gtao-career-progress-hubcc8e2cfad6b5e7c3c0137aebd78533d1",
          awardCategoryContainer: "rockstargames-modules-gtao-career-progress-hubb313519506366601f9fa4a76b184921c",
          awardCategory: "rockstargames-modules-gtao-career-progress-hube89c6924deae38d9504d906fe05b056a",
          award: "rockstargames-modules-gtao-career-progress-hubf5ee1d7777d3f7c1bf3ed7fa2bab343e",
          fadeIn: "rockstargames-modules-gtao-career-progress-hubfc5d942eab3174ce8095dbbbd9586c36",
          peek: "rockstargames-modules-gtao-career-progress-hubce851169b3b88750f51be89b07d8ed0b",
          awardCount: "rockstargames-modules-gtao-career-progress-hubf4831c34b1baabb6fdedad7e8b9bfafd",
          expanded: "rockstargames-modules-gtao-career-progress-hube3b231d8899f4f31056c0e630125442d",
          fadeInAwards: "rockstargames-modules-gtao-career-progress-hubaea5832b0069da79afbd436e6dcbb763",
          slideBtnIn: "rockstargames-modules-gtao-career-progress-hubcaa6ef0e32b1699c9c6aa40f10917a81",
          hovered: "rockstargames-modules-gtao-career-progress-hubbf1d869b891ad0473820a5c0b609c2c3",
          isClosed: "rockstargames-modules-gtao-career-progress-hubef55086e14b6d134e959962021b8b90d",
          fadeOutAwards: "rockstargames-modules-gtao-career-progress-hubd3d1cc2fd69a4c20ef789dffc656c3bd",
          awardsCategoryClose: "rockstargames-modules-gtao-career-progress-hubb1444ca6edec60bd22b618dff494fc28",
          showLess: "rockstargames-modules-gtao-career-progress-hubdf7edb4651681312854dc4e53a598a25",
          showMore: "rockstargames-modules-gtao-career-progress-hubc7f84ea669095cb2c23d773bd0474ac3",
          awardsTitle: "rockstargames-modules-gtao-career-progress-hubf6acd712ca1aff64a3472965b9f9e424",
          rpInfo: "rockstargames-modules-gtao-career-progress-hubeaceac3aed7550112eff6a983ecd6944",
          rpBronze: "rockstargames-modules-gtao-career-progress-hubfeaf2251ac03e5c3c6553066b5458f40",
          rpSilver: "rockstargames-modules-gtao-career-progress-huba2e3c5663683f4f87779ee6deffd2a35",
          rpGold: "rockstargames-modules-gtao-career-progress-hubb7a35c6c57d90e5041e9384a11cb941b",
          rpPlatinum: "rockstargames-modules-gtao-career-progress-hubd1882c31c660af1d1cb2455767a4a052",
          rpGrid: "rockstargames-modules-gtao-career-progress-hubf5736ec7f5876726294c4d9403952d99",
          rpLevel: "rockstargames-modules-gtao-career-progress-huba45eceb3ebf314729b14d6653c39597e",
          tooltip: "rockstargames-modules-gtao-career-progress-hubd1f1b5e63ba43711ae8f2862f6fbe8ef",
          tooltipInner: "rockstargames-modules-gtao-career-progress-hube6d20188fe54dec4fd00c8dc5dbeb260",
          tooltipIcon: "rockstargames-modules-gtao-career-progress-huba359c5d9306d0c6727ffc0e84213a306"
        },
        M = [{
          min: 0,
          max: 767,
          show: 6,
          peek: 1
        }, {
          min: 767,
          max: 1279,
          show: 8,
          peek: 2
        }, {
          min: 1280,
          max: 1919,
          show: 12,
          peek: 3
        }, {
          min: 1920,
          max: 0,
          show: 16,
          peek: 4
        }],
        L = () => {
          const {
            isMobile: e,
            windowWidth: a
          } = (0, _.useWindowResize)(), {
            state: t
          } = v(), {
            awardsKey: o
          } = t, [c, n] = (0, s.useState)([]), l = (0, p.useRockstarTokenPing)(), {
            loggedIn: u
          } = (0, d.useRockstarUser)(), {
            selectedCharacterTuple: f
          } = (0, d.useRockstarUserState)(), R = c ? function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              a = 0;
            return e && e.forEach((e => {
              const r = e.levels ? Number(e.levels[e.levels.length - 1]) : 1;
              e.playerProgress && e.playerProgress >= r && (a += 1)
            })), a
          }(c) : 0, [E, S] = (0, s.useState)(!1), [k, j] = (0, s.useState)(!1), [x, A] = (0, s.useState)(!1), {
            setBodyIsScrollable: P
          } = (0, _.useBodyScrollable)(), {
            track: I
          } = (0, d.useGtmTrack)(), [N, O] = (0, s.useState)(12), [C, W] = (0, s.useState)(4), y = (0, s.useRef)(null), G = (0, s.useRef)(null), [z, L] = (0, s.useState)(!1), {
            ref: B,
            inView: H
          } = (0, g.useInView)({
            threshold: .6
          }), [U, F] = (0, s.useState)(null), [$, Y] = (0, s.useState)(null), [Z, X] = (0, s.useState)(null), {
            formatMessage: q
          } = (0, i.useIntl)();
          (0, s.useEffect)((() => {
            M.forEach((e => {
              a > e.min && a < e.max && (O(e.show), W(e.peek))
            }))
          }), [a]), (0, s.useEffect)((() => {
            E && !e ? P(!0) : E && e && S(!1)
          }), [e]), (0, s.useEffect)((() => {
            H && !z && (I({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "awards",
              element_placement: "awards"
            }), L(!0))
          }), [H]);
          const K = (0, s.useCallback)((() => {
            const a = y?.current;
            e && P(E), a && (E || I({
              event: "view_all",
              event_action: "view_all",
              event_category: "click",
              event_label: "awards",
              text: "awards",
              element_placement: "awards"
            })), E && (j(!0), I({
              event: "nav_back",
              event_action: "back",
              event_category: "nav",
              event_label: "awards",
              text: "awards",
              element_placement: "awards"
            }), e || window.scrollTo({
              top: a?.offsetTop,
              left: 0,
              behavior: "smooth"
            })), setTimeout((() => {
              j(!1)
            }), 400), S(!E)
          }), [E, y?.current, e]);
          (0, s.useEffect)((() => {
            (async () => {
              if (null === u || null === f || !o) return;
              let e = {};
              if (u && !1 !== f) {
                const [a, r] = f;
                e = {
                  platform: a,
                  slot: r
                }
              }
              const a = await async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {
                  error: a = null,
                  result: r
                } = await (0, _.coreScApiFetch)("games/gtao/awards", {
                  pingBearer: l,
                  useCache: !0,
                  ...u ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                return r?.categories ?? null
              }(e), r = function(e, a) {
                const r = [];
                return a.forEach((a => {
                  a.awards.forEach((a => {
                    a?.sections?.indexOf(e) >= 0 && r.push(a)
                  }))
                })), r
              }(o, a);
              n(r)
            })()
          }), [o, u, f]);
          const {
            styles: J,
            attributes: Q,
            update: ee
          } = (0, m.usePopper)(U, $, {
            placement: "bottom-end"
          });
          if (!o || !c.length) return null;
          const ae = e ? "div" : "ul",
            re = e ? h.motion.div : "div",
            se = e ? {
              layout: !0
            } : {};
          return (0, b.jsx)("div", {
            className: V.awardsOuter,
            ref: B,
            children: (0, b.jsxs)(re, {
              "data-open": E && e,
              transition: {
                ease: "easeInOut",
                stiffness: 1e3,
                damping: 100,
                duration: .2
              },
              className: [V.awardsContainer, E && e ? V.modalOpen : "", E && !e ? V.expanded : "", !E && k ? V.isClosed : "", x && !e ? V.hovered : ""].join(" "),
              ref: y,
              ...se,
              children: [(0, b.jsxs)(h.motion.div, {
                className: V.awardCategoryContainer,
                layout: !0,
                children: [(0, b.jsxs)(h.motion.div, {
                  className: V.awardsTitle,
                  children: [(0, b.jsxs)("h2", {
                    className: V.awardCategoryName,
                    children: [E && e && (0, b.jsx)(h.motion.button, {
                      type: "button",
                      onClick: () => K(),
                      layout: !0,
                      variants: {
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3,
                            damping: 100,
                            delay: 0
                          }
                        },
                        closed: {
                          opacity: 0,
                          x: -30,
                          transition: {
                            duration: .5,
                            ease: "easeInOut",
                            stiffness: 1e3,
                            damping: 100
                          }
                        }
                      },
                      initial: "closed",
                      animate: E && e ? "open" : "closed",
                      children: (0, b.jsx)(h.motion.img, {
                        src: r(452),
                        alt: "Back"
                      })
                    }), (0, b.jsx)(i.FormattedMessage, {
                      ...w.cph_awards_title
                    })]
                  }), (0, b.jsxs)("div", {
                    className: V.rpInfo,
                    children: [(0, b.jsx)("button", {
                      className: V.tooltipIcon,
                      ref: F,
                      type: "button",
                      ...ee && {
                        onMouseOver: ee,
                        onFocus: ee
                      },
                      "aria-label": q(w.cph_reward_ready_to_claim)
                    }), (0, b.jsx)("div", {
                      className: V.tooltip,
                      style: J.popper,
                      ref: Y,
                      ...Q,
                      children: (0, b.jsxs)("div", {
                        className: V.tooltipInner,
                        children: [(0, b.jsx)(i.FormattedMessage, {
                          ...w.cph_awards_rp_bonus_info
                        }), (0, b.jsxs)("div", {
                          className: V.rpGrid,
                          children: [(0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: (0, b.jsx)("span", {
                              className: [V.rpBronze, V.rpLevel].join(" "),
                              children: (0, b.jsx)(i.FormattedMessage, {
                                ...w.cph_awards_bronze
                              })
                            })
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: "+100 RP"
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: (0, b.jsx)("span", {
                              className: [V.rpSilver, V.rpLevel].join(" "),
                              children: (0, b.jsx)(i.FormattedMessage, {
                                ...w.cph_awards_silver
                              })
                            })
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: "+200 RP"
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: (0, b.jsx)("span", {
                              className: [V.rpGold, V.rpLevel].join(" "),
                              children: (0, b.jsx)(i.FormattedMessage, {
                                ...w.cph_awards_gold
                              })
                            })
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: "+400 RP"
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: (0, b.jsx)("span", {
                              className: [V.rpPlatinum, V.rpLevel].join(" "),
                              children: (0, b.jsx)(i.FormattedMessage, {
                                ...w.cph_awards_platinum
                              })
                            })
                          }), (0, b.jsx)("div", {
                            className: V.rpGridItem,
                            children: "+800 RP"
                          })]
                        })]
                      })
                    })]
                  })]
                }), (0, b.jsx)("span", {
                  children: (0, b.jsx)(T, {
                    value: R,
                    total: c.length,
                    theme: "platinum",
                    classes: V.awardCount
                  })
                })]
              }), (0, b.jsxs)(re, {
                className: V.categoryWrapper,
                children: [(0, b.jsx)(ae, {
                  className: V.awardCategory,
                  ref: G,
                  children: c.map(((a, r) => (0, b.jsx)(D, {
                    position: r,
                    award: a,
                    isExpanded: e && E,
                    isMobile: e,
                    toggleModal: e && K,
                    hoverFn: A,
                    setHoveredAwardId: X,
                    isShowTooltip: r === Z,
                    classes: [V.award, r >= N + C ? V.fadeIn : "", r >= N && r < N + C ? V.peek : ""].join(" ")
                  }, a.imageName)))
                }), c.length > N && (0, b.jsx)("div", {
                  className: E ? V.showLess : V.showMore,
                  children: (0, b.jsx)("button", {
                    type: "button",
                    onClick: () => K(),
                    children: E ? (0, b.jsx)(i.FormattedMessage, {
                      ...w.cph_progress_rewards_view_less
                    }) : (0, b.jsx)(i.FormattedMessage, {
                      ...w.cph_progress_rewards_view_all
                    })
                  })
                })]
              })]
            })
          })
        };
      var B, H;

      function U() {
        return U = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
          }
          return e
        }, U.apply(this, arguments)
      }
      const F = e => s.createElement("svg", U({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 96 21"
      }, e), B || (B = s.createElement("g", {
        fill: "#fff",
        clipPath: "url(#ps5_svg__a)"
      }, s.createElement("path", {
        d: "M10.017 0v19.278l4.361 1.392V4.488c0-.749.337-1.265.883-1.093.748.202.853.898.853 1.654v6.47c2.723 1.31 4.862 0 4.862-3.47 0-3.472-1.257-5.132-4.952-6.404A52.984 52.984 0 0 0 10.017 0Z"
      }), s.createElement("path", {
        d: "m15.208 17.85 7.017-2.5c.793-.291.92-.695.27-.904a4.773 4.773 0 0 0-2.611.134l-4.676 1.646v-2.618l.27-.09a15.875 15.875 0 0 1 3.224-.688 13.81 13.81 0 0 1 6.052.748c2.064.65 2.289 1.608 1.773 2.244a4.982 4.982 0 0 1-1.81 1.137l-9.509 3.419v-2.529ZM2.012 17.58c-2.117-.591-2.469-1.833-1.496-2.544a10.475 10.475 0 0 1 2.401-1.16l6.254-2.244v2.581l-4.488 1.609c-.793.291-.92.695-.27.905.866.199 1.77.152 2.611-.135l2.162-.748v2.244l-.434.075a14.154 14.154 0 0 1-6.733-.546M61.59 17.655a3.433 3.433 0 0 0 3.426-3.441V8.319a2.072 2.072 0 0 1 2.072-2.065h6.65a.09.09 0 0 0 .09-.09V4.982a.09.09 0 0 0-.09-.09h-8.02a3.426 3.426 0 0 0-3.425 3.427v5.895a2.072 2.072 0 0 1-2.073 2.072h-6.56a.09.09 0 0 0-.09.09v1.182a.098.098 0 0 0 .09.09l7.93.007ZM76.573 9.725V4.982a.09.09 0 0 1 .09-.09h18.119a.09.09 0 0 1 .097.09v1.182a.09.09 0 0 1-.097.09H79.394a.09.09 0 0 0-.098.09V9.41a.987.987 0 0 0 .988.98h11.46a3.636 3.636 0 0 1 0 7.264h-15.08a.097.097 0 0 1-.09-.09v-1.182a.09.09 0 0 1 .09-.09h13.712a2.27 2.27 0 1 0 0-4.54h-11.73a2.072 2.072 0 0 1-2.073-2.028ZM49.672 10.39a2.072 2.072 0 0 0 0-4.136H35.773a.09.09 0 0 1-.097-.09V4.982a.09.09 0 0 1 .097-.09h15.261a3.434 3.434 0 0 1 0 6.86H40.471a2.065 2.065 0 0 0-2.065 2.065v3.74a.097.097 0 0 1-.09.09h-2.543a.097.097 0 0 1-.097-.09v-3.74a3.434 3.434 0 0 1 3.433-3.426h10.563Z"
      }))), H || (H = s.createElement("defs", null, s.createElement("clipPath", {
        id: "ps5_svg__a"
      }, s.createElement("path", {
        fill: "#fff",
        d: "M0 0h95.755v20.946H0z"
      })))));
      var $, Y;

      function Z() {
        return Z = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
          }
          return e
        }, Z.apply(this, arguments)
      }
      const X = e => s.createElement("svg", Z({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 160 20"
        }, e), $ || ($ = s.createElement("g", {
          clipPath: "url(#xboxseriesxs_svg__a)"
        }, s.createElement("path", {
          fill: "#fff",
          d: "M10.17 8.02a.063.063 0 0 1 .034.017c3.041 2.274 8.249 7.901 6.661 9.49A10.272 10.272 0 0 1 10.17 20c-2.463 0-4.842-.878-6.696-2.472-1.587-1.59 3.62-7.217 6.661-9.491a.067.067 0 0 1 .035-.017Zm5.299-6.556C13.91.556 12.223 0 10.17 0 8.118 0 6.43.556 4.872 1.463a.038.038 0 0 0-.017.05.04.04 0 0 0 .05.017c1.969-.418 4.96 1.254 5.244 1.422a.034.034 0 0 0 .043 0c.282-.167 3.277-1.84 5.244-1.422a.04.04 0 0 0 .05-.017.038.038 0 0 0-.018-.05v.001ZM3.05 2.87a.178.178 0 0 0-.045.034A9.925 9.925 0 0 0 .024 9.31a9.88 9.88 0 0 0 2.056 6.75c.005.008.014.015.025.018.01.003.022.002.031-.003a.04.04 0 0 0 .012-.051C1.37 13.667 5.334 7.953 7.38 5.556a.046.046 0 0 0 .015-.03.043.043 0 0 0-.018-.033C4.275 2.461 3.221 2.783 3.051 2.87Zm9.912 2.625a.043.043 0 0 0-.018.034.045.045 0 0 0 .014.029c2.047 2.395 6.011 8.11 5.235 10.466a.04.04 0 0 0 .01.051.044.044 0 0 0 .057-.016 9.88 9.88 0 0 0 2.056-6.749 9.925 9.925 0 0 0-2.982-6.406.178.178 0 0 0-.045-.034c-.17-.086-1.225-.408-4.327 2.625Zm22.431 10.667h-2.082l-3.582-4.848-3.582 4.848H24.07l4.623-6.256-4.263-5.766h2.081l3.22 4.357 3.221-4.357h2.08L30.77 9.904l4.623 6.257Zm10.802-3.418c0 1.055-.356 1.898-1.059 2.505-.703.606-1.723.913-3.033.913H36.37v-5.354h-2.724l1.133-1.534h1.59V4.14h5.493c1.232 0 2.19.29 2.846.863.656.573.99 1.337.99 2.27 0 1.155-.533 2.032-1.582 2.605.678.259 1.2.638 1.547 1.13.357.51.542 1.116.531 1.735h.001Zm-7.958-3.47h3.503c.706 0 1.243-.155 1.594-.462.35-.308.529-.774.529-1.39 0-.53-.186-.95-.55-1.249-.366-.298-.893-.45-1.57-.45H38.24l-.002 3.551Zm6.073 3.435c0-.63-.194-1.11-.576-1.426-.382-.315-.966-.475-1.735-.475h-3.762v3.77H42c.746 0 1.324-.164 1.718-.485.395-.322.593-.786.593-1.384Zm14.443-2.559c0 .93-.137 1.783-.408 2.535a5.748 5.748 0 0 1-1.222 2.005 5.377 5.377 0 0 1-1.907 1.305c-.718.289-1.533.435-2.421.435-.9 0-1.72-.146-2.438-.435a5.217 5.217 0 0 1-1.89-1.304 5.663 5.663 0 0 1-1.236-1.997c-.273-.753-.412-1.61-.412-2.544 0-.932.139-1.783.412-2.539a5.819 5.819 0 0 1 1.236-2.017 5.213 5.213 0 0 1 1.89-1.292c.718-.286 1.538-.431 2.438-.431.888 0 1.703.145 2.42.43.724.29 1.375.73 1.907 1.292a5.837 5.837 0 0 1 1.223 2.02c.27.754.408 1.61.408 2.537Zm-10 0c0 1.415.372 2.55 1.108 3.373.724.833 1.71 1.256 2.931 1.256 1.222 0 2.208-.423 2.93-1.256.725-.813 1.092-1.945 1.092-3.373 0-1.427-.367-2.565-1.091-3.388-.735-.823-1.721-1.24-2.931-1.24s-2.197.417-2.932 1.24c-.732.845-1.105 1.986-1.105 3.388h-.003Zm15.896-.245 4.26-5.765h-2.08l-3.22 4.357-3.22-4.357h-2.08l4.26 5.765-4.622 6.256h2.081l3.583-4.848 3.581 4.848h2.082l-4.626-6.256Zm20.17-4.111v3.483h6.074v1.533h-6.07v3.702h6.866v1.651h-8.733V4.14h8.733V5.79l-6.87.002Zm-4.293 4.8c-.61-.55-1.624-.975-3.013-1.266l-1.062-.22c-1.008-.21-1.708-.47-2.081-.77-.37-.278-.558-.69-.558-1.232 0-.53.21-.944.626-1.232.415-.287 1.03-.434 1.821-.434 1.017 0 1.766.183 2.224.543.457.36.715.93.772 1.696v.017h1.85v-.018c-.024-1.178-.443-2.117-1.248-2.79-.806-.675-2.02-1.015-3.617-1.015-1.321 0-2.385.299-3.16.89-.775.59-1.172 1.388-1.172 2.378 0 .99.325 1.774.965 2.336.64.562 1.598.97 2.85 1.216l1.045.22c1.03.221 1.751.479 2.15.762.399.284.592.687.592 1.207 0 .641-.243 1.138-.72 1.475-.478.337-1.176.51-2.07.51-1.08 0-1.906-.225-2.454-.667-.548-.44-.832-1.118-.848-2.006v-.026h-1.867v.017c.012 1.38.472 2.445 1.368 3.162.896.716 2.163 1.081 3.769 1.081 1.48 0 2.656-.324 3.495-.963s1.265-1.528 1.265-2.64c0-.93-.31-1.682-.921-2.233l-.001.002Zm22.396 4.085-.12-1.867c-.023-.663-.173-1.201-.448-1.6-.267-.39-.689-.67-1.255-.841.624-.205 1.119-.556 1.469-1.041.359-.5.543-1.124.543-1.854 0-1.033-.38-1.856-1.13-2.444-.751-.589-1.785-.89-3.085-.89h-5.342V16.16h1.868v-4.932h3.525c.7 0 1.214.16 1.526.474.312.315.492.864.526 1.63l.051 1.277c.012.697.134 1.215.363 1.542l.005.008h1.921l-.015-.027c-.209-.354-.345-.844-.401-1.456l-.001.002Zm-7.497-8.956h3.371c.769 0 1.367.164 1.778.485.412.32.62.803.62 1.434 0 .654-.202 1.167-.602 1.519-.399.352-.96.534-1.657.534h-3.509l-.001-3.972ZM104.8 16.16h1.868V4.139H104.8V16.16Zm12.468-10.37V4.14h-8.733V16.16h8.733v-1.652h-6.863v-3.701h6.073V9.273h-6.073V5.791h6.863Zm9.953 4.801c-.61-.55-1.624-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.082-.772-.37-.277-.558-.69-.558-1.231 0-.53.211-.945.626-1.232.415-.287 1.03-.434 1.821-.434 1.018 0 1.767.182 2.224.543.457.36.716.93.772 1.696v.017h1.849v-.019c-.023-1.177-.443-2.116-1.248-2.79-.804-.674-2.021-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.325 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.032.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.905-.226-2.453-.667-.549-.44-.833-1.118-.848-2.006v-.024h-1.867v.017c.011 1.38.471 2.445 1.368 3.162.896.716 2.162 1.081 3.769 1.081 1.481 0 2.655-.324 3.494-.963.839-.639 1.266-1.528 1.266-2.64 0-.93-.31-1.682-.922-2.233Zm19.884-7.954h-.934v15.025h.933l.001-15.025Zm-8.55 7.267 4.259-5.765h-2.081l-3.22 4.357-3.221-4.357h-2.077l4.26 5.765-4.623 6.256h2.081l3.582-4.848 3.582 4.848h2.079l-4.621-6.256Zm20.523.687c-.61-.55-1.623-.975-3.013-1.267l-1.061-.218c-1.008-.212-1.709-.472-2.081-.772-.371-.277-.559-.69-.559-1.231 0-.53.211-.945.626-1.232.416-.287 1.03-.434 1.822-.434 1.017 0 1.766.182 2.223.543.456.36.718.93.775 1.696v.017h1.85v-.019c-.023-1.177-.443-2.116-1.248-2.79-.805-.674-2.02-1.014-3.616-1.014-1.322 0-2.385.298-3.161.889-.776.59-1.171 1.389-1.171 2.379s.324 1.774.965 2.336c.64.562 1.597.97 2.85 1.216l1.044.219c1.031.222 1.755.48 2.15.763.396.284.592.687.592 1.206 0 .642-.242 1.139-.72 1.476-.478.337-1.176.51-2.07.51-1.08 0-1.906-.226-2.454-.667-.547-.44-.832-1.118-.847-2.006v-.024h-1.871v.017c.011 1.38.471 2.445 1.367 3.162.897.716 2.164 1.081 3.77 1.081 1.481 0 2.655-.324 3.495-.963.84-.639 1.265-1.528 1.265-2.64 0-.93-.31-1.682-.922-2.233Z"
        }))), Y || (Y = s.createElement("defs", null, s.createElement("clipPath", {
          id: "xboxseriesxs_svg__a"
        }, s.createElement("path", {
          fill: "#fff",
          d: "M0 0h160v20H0z"
        }))))),
        q = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubf38fee16c63cef1dd3749dbfbc0a415d",
          selected: "rockstargames-modules-gtao-career-progress-hubdf1281b7e00f93eb508ea4702ac7f3d0",
          challenge: "rockstargames-modules-gtao-career-progress-hubf0fe7ab67089ae7aced936b917b1717b",
          content: "rockstargames-modules-gtao-career-progress-hubc5e12803cde586cef24094e08e97e3ab",
          title: "rockstargames-modules-gtao-career-progress-huba5944b6c1dd5293c276f5a9919eeb866",
          isComplete: "rockstargames-modules-gtao-career-progress-hubaa3783ddbfc7fcc44f5008eb80b7b8f4",
          progressCounter: "rockstargames-modules-gtao-career-progress-hube078709f464a55b1ab8655a33e2969d9",
          challengeInfo: "rockstargames-modules-gtao-career-progress-hubcd846f1008374eac9287842bbc247bda",
          status: "rockstargames-modules-gtao-career-progress-hubc38220fc9af63adec001a57ceaf3524c",
          check: "rockstargames-modules-gtao-career-progress-hubef811a81a6ea22dd08a296ee0f0d0add",
          lock: "rockstargames-modules-gtao-career-progress-hubaab1d2b6b3aabace91ce937206a0ed1a",
          progressCounterContainer: "rockstargames-modules-gtao-career-progress-hubb612c346fa9f072293da44b4646b0415",
          chevron: "rockstargames-modules-gtao-career-progress-hubfaaa2263321f924bc0788b544999f75c",
          taskList: "rockstargames-modules-gtao-career-progress-hubf46e96175131fd59c9423e1f07006a27",
          task: "rockstargames-modules-gtao-career-progress-hubaa93b7e5206feb972c21d898ab8dab0a",
          taskComplete: "rockstargames-modules-gtao-career-progress-hubf40e7fba91753254713531cd302d185e",
          open: "rockstargames-modules-gtao-career-progress-hube22f4ba2c52eb984131cf0e3c069ae1d",
          progressBar: "rockstargames-modules-gtao-career-progress-hubc8cdc26a8e3853b165eb9b67c4c650c3"
        },
        K = {
          pillBtn: "rockstargames-modules-gtao-career-progress-huba115e6f9374dac135e55ab392b55c7c4",
          selected: "rockstargames-modules-gtao-career-progress-hube2a366337029e6d932db96d1a8d6c077",
          lock: "rockstargames-modules-gtao-career-progress-hubb381ebb83ac0e680c3ef3212f37c6e7e"
        },
        J = e => {
          let {
            alt: a,
            classes: r = ""
          } = e;
          return (0, b.jsx)("div", {
            className: [r, K.lock].join(" "),
            children: (0, b.jsxs)("svg", {
              width: "22",
              height: "27",
              viewBox: "0 0 22 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [(0, b.jsx)("title", {
                children: a
              }), (0, b.jsx)("path", {
                opacity: "0.9",
                d: "M20.6592 11.328H18.6515V7.62973C18.6176 3.4098 15.2065 0 11.0017 0C6.79679 0 3.38574 3.41105 3.35313 7.62973V11.328H1.34287C0.620527 11.328 0.0361328 11.9136 0.0361328 12.6347V25.6933C0.0361328 26.4156 0.621781 27 1.34287 27H20.658C21.3803 27 21.9647 26.4144 21.9647 25.6933V12.6347C21.9647 11.9124 21.379 11.328 20.658 11.328H20.6592ZM5.98541 7.62973C6.00924 4.86451 8.24524 2.62977 11.0004 2.62977C13.7556 2.62977 15.9928 4.86451 16.0154 7.62973V11.328H5.98541V7.62973ZM12.5881 20.0199V22.054C12.5881 22.9356 11.8732 23.6504 10.9916 23.6504C10.11 23.6504 9.39521 22.9356 9.39521 22.054V20.0073C8.60515 19.4856 8.08472 18.5902 8.08472 17.5732C8.08472 15.9617 9.3902 14.6562 11.0017 14.6562C12.6131 14.6562 13.9186 15.9617 13.9186 17.5732C13.9186 18.599 13.3894 19.4994 12.5881 20.0199Z",
                fill: "white",
                fillOpacity: "0.4"
              })]
            })
          })
        },
        Q = e => {
          let {
            challenge: a,
            isLocked: r,
            isOpen: s,
            onClick: t,
            activeTier: o
          } = e;
          const {
            hint: c,
            playerProgress: i,
            totalProgress: _,
            tasks: n
          } = a;
          let l = "div";
          const {
            track: p
          } = (0, d.useGtmTrack)(), m = i >= _, {
            loggedIn: g
          } = (0, d.useRockstarUser)(), u = o + 1;
          return l = n?.length ? h.motion.button : h.motion.div, (0, b.jsxs)(l, {
            className: [q.challenge, m && !r ? q.isComplete : "", s ? q.open : q.closed].join(" "),
            onClick: () => {
              t(), p({
                event: s ? "cta_collapse" : "cta_expand",
                text: c,
                element_placement: `Tier ${u} - Subchallenge`
              })
            },
            children: [(0, b.jsxs)("div", {
              className: q.challengeInfo,
              children: [g && (0, b.jsx)("div", {
                className: q.status,
                children: r ? (0, b.jsx)(J, {
                  alt: "Locked",
                  classes: q.lock
                }) : (0, b.jsx)(f, {
                  alt: m ? "Completed" : "In Progress",
                  classes: [q.check, m ? q.isComplete : ""].join(" ")
                })
              }), (0, b.jsxs)("div", {
                className: q.content,
                children: [(0, b.jsx)("h4", {
                  className: q.title,
                  children: c
                }), (0, b.jsxs)("div", {
                  className: q.progressCounterContainer,
                  children: [(0, b.jsx)(T, {
                    theme: "light",
                    value: g ? i : void 0,
                    total: _,
                    classes: q.progressCounter
                  }), n?.length && (0, b.jsx)("div", {
                    className: [q.chevron, q.expandedChevron].join(" ")
                  })]
                }), n?.length && (0, b.jsx)(h.motion.ul, {
                  className: q.taskList,
                  animate: s ? "open" : "closed",
                  variants: {
                    open: {
                      opacity: 1,
                      height: "auto",
                      paddingTop: "var(--padding-sm)"
                    },
                    closed: {
                      opacity: 0,
                      height: 0
                    }
                  },
                  transition: {
                    duration: .2
                  },
                  children: n.map((e => (0, b.jsxs)("li", {
                    className: q.task,
                    children: [(0, b.jsx)("div", {
                      className: q.status,
                      children: (0, b.jsx)(f, {
                        alt: e.isComplete ? "Completed" : "In Progress",
                        classes: [q.check, e.isComplete ? q.isComplete : ""].join(" ")
                      })
                    }), (0, b.jsx)("p", {
                      className: e.isComplete ? q.taskComplete : "",
                      children: e.hint
                    })]
                  }, e.hint)))
                })]
              })]
            }), !m && !r && g && (0, b.jsx)(P, {
              percentage: i / _ * 100,
              classes: q.progressBar
            })]
          })
        };
      var ee = r(8111),
        ae = r(8548);
      const re = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubc12baab3b49359b06725245872591698",
          selected: "rockstargames-modules-gtao-career-progress-huba9b61c4507a00a1659e3d8dbf6e39da4",
          badge: "rockstargames-modules-gtao-career-progress-hubc5458a0524d6b7a215ebe2ef6a03f6a9",
          ready: "rockstargames-modules-gtao-career-progress-hubd2cc9bc0109626d8d405696cb1d9b08e",
          check: "rockstargames-modules-gtao-career-progress-hubc630e44a20c92566f5fc37ddb37b9f09",
          locked: "rockstargames-modules-gtao-career-progress-hubfdfd92e0937de9af0ba7c24c1bf624f7",
          hiddenSpacer: "rockstargames-modules-gtao-career-progress-hubd16ebe5d8ac91ce11e0b7cbd2e91f018"
        },
        se = e => {
          let {
            variant: a
          } = e;
          const r = (0, i.useIntl)();
          if (!a) return null;
          const s = {
            claimed: r.formatMessage(w.cph_reward_claimed),
            ready: r.formatMessage(w.cph_reward_claimable)
          };
          return "locked" === a ? (0, b.jsx)("span", {
            className: re.locked,
            "aria-label": r.formatMessage(w.cph_reward_locked_alt)
          }) : "hidden" === a ? (0, b.jsx)("span", {
            className: re.hiddenSpacer,
            "aria-hidden": "true"
          }) : (0, b.jsxs)("span", {
            className: [re.badge, re[a]].join(" "),
            children: ["claimed" === a && (0, b.jsx)(f, {
              alt: s.claimed,
              classes: re.check
            }), s[a]]
          })
        },
        te = e => {
          let {
            reward: a,
            tierCompleted: t,
            tierLocked: o,
            ...c
          } = e;
          const [i] = (0, s.useState)(`${(e=>{try{return r(5828)(`./${e}.jpg`)}catch(e){return r(5900)}})(a.imageName)}?im=Resize=960`), {
            loggedIn: _
          } = (0, d.useRockstarUser)();
          return (0, b.jsx)(h.motion.div, {
            layout: !0,
            ...c,
            className: "rockstargames-modules-gtao-career-progress-huba20a19e8c4630691e4d79cd1f2fb8a63",
            children: (0, b.jsxs)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubd09755f70fab803f46567d4b3af1b5b7",
              children: [(0, b.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubdbe370d1c2a217e3cba7d09cbaa7d12b",
                children: (0, b.jsx)("img", {
                  src: i,
                  alt: a.label,
                  "data-id": a.id
                })
              }), (0, b.jsxs)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubd20738fb38f98c1862571727e5e19cd2",
                children: [(0, b.jsx)("h4", {
                  children: a.label
                }), o && _ && (0, b.jsx)(se, {
                  variant: "locked"
                }), !o && t && _ && (0, b.jsx)(se, {
                  variant: a.isCollected ? "claimed" : "ready"
                }), !o && !t && _ && (0, b.jsx)(se, {
                  variant: "hidden"
                })]
              })]
            })
          })
        },
        oe = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubbbcdc9af6de091d624a421c97317bd9f",
          selected: "rockstargames-modules-gtao-career-progress-huba0d719231c74bc6cf91ded77b11acb29",
          rewards: "rockstargames-modules-gtao-career-progress-hubb1c15408258db6833d086dfeb21d4ca2",
          carousel: "rockstargames-modules-gtao-career-progress-hubb44292207463b5af6d6ee7a4c31b61fa",
          "swiper-scrollbar-disabled": "rockstargames-modules-gtao-career-progress-hubb071b10d31e08ed83572a519bedb19ed",
          "swiper-horizontal": "rockstargames-modules-gtao-career-progress-hubdefa473a7e04f63da60482b4b44d3e77",
          "swiper-vertical": "rockstargames-modules-gtao-career-progress-huba8f27470cd5cbb89342973c4cde61eb1",
          header: "rockstargames-modules-gtao-career-progress-hubbad5a58893e81b530ce47b6b1f72ae65",
          btnViewAll: "rockstargames-modules-gtao-career-progress-hube08db8b876a89477cca5fddbeca65ce3",
          container: "rockstargames-modules-gtao-career-progress-hubfa86271da7df38622a732fbae80f560a",
          inactiveTier: "rockstargames-modules-gtao-career-progress-hubabc7173c3cf9ebe18c8e268059cd0cf2",
          isModalOpen: "rockstargames-modules-gtao-career-progress-hubf1a95e2ec7bc689441919b5e2be694c8",
          btnBack: "rockstargames-modules-gtao-career-progress-hubacdf74efcc3afba9408b2166be0855cd",
          slideBtnIn: "rockstargames-modules-gtao-career-progress-hube043c0984e8853c4d8f4be9ffabbb420",
          fadeItemsOut: "rockstargames-modules-gtao-career-progress-hubdd69fc3c574c413cb3eda9dbe0a8e121",
          fadeItemsIn: "rockstargames-modules-gtao-career-progress-huba4b4d25ec7b657458bb9dcb3964efcf7",
          btnCloseContainer: "rockstargames-modules-gtao-career-progress-hubccd0ba1e4c94e35688d6c3f2290a9ded",
          btnClose: "rockstargames-modules-gtao-career-progress-hubc15cfbe7980962999aae25bfe7a81566",
          isModalClosed: "rockstargames-modules-gtao-career-progress-hubb0b620bfa0230a2cae788aba65cc5736",
          howToClaimMobile: "rockstargames-modules-gtao-career-progress-hube785594af3aa6bc9c87519f26dd2ec6f",
          desktopRewardsGrow: "rockstargames-modules-gtao-career-progress-hubb9c00b4bb89b213b85fa4ef5f413de03",
          mobileRewardsGrow: "rockstargames-modules-gtao-career-progress-hubac0a89df9b00c55b95f41b6f698bd8bc",
          mobileRewardsShrink: "rockstargames-modules-gtao-career-progress-hube34f4ba9aa22ea53813a02b341b3f4fd",
          desktopRewardsShrink: "rockstargames-modules-gtao-career-progress-hubad77475a3d355e330b3f5f677cbec11d",
          desktopShrinkChallengeMargins: "rockstargames-modules-gtao-career-progress-hubd382d87a49bc372155f8479f5211f270",
          "swiper-preloader-spin": "rockstargames-modules-gtao-career-progress-hubc2be3ebb33e73dd6394830f08aa3cbe0",
          fadeRewardsIn: "rockstargames-modules-gtao-career-progress-hubf8f125c111c1834c868a70e354423f97"
        },
        ce = e => {
          let {
            activeTier: a,
            tiers: t,
            setHeight: o,
            setOffset: c,
            isModalOpen: n,
            setIsModalOpen: l,
            rewardsContainer: p
          } = e;
          const [m, g] = (0, s.useState)(window.innerWidth >= 1280), [u, f] = (0, s.useState)(1), [R, E] = (0, s.useState)("auto"), {
            track: S
          } = (0, d.useGtmTrack)(), {
            setBodyIsScrollable: k
          } = (0, _.useBodyScrollable)(), [v, j] = (0, s.useState)(!1), x = (0, s.useRef)(), A = m ? ee.wx : "div", P = m ? ee.Ky : "li", I = (0, s.useRef)(null), T = (0, s.useRef)(null), N = t.some((e => e.isCompleted && e?.numClaimable > 0)), O = (0, i.useIntl)(), C = (0, s.useMemo)((() => {
            const e = [];
            return t.forEach(((a, r) => {
              a.rewards.forEach(((a, s) => {
                e.push({
                  tier: r,
                  reward: a,
                  showTitle: 0 === s,
                  id: `reward-${r}-${s}`
                })
              }))
            })), e
          }), [t]);

          function W() {
            g(window.innerWidth >= 1280);
            const e = I?.current?.clientHeight;
            if (o(m && C.length ? e : "auto"), !n) {
              const {
                current: e
              } = T && T, a = window.getComputedStyle(e), r = Number(a.width.replace("px", "")) - Number(a.paddingLeft.replace("px", "")) - Number(a.paddingRight.replace("px", ""));
              E(r)
            }
          }

          function y() {
            if (n && S({
                event: "nav_back",
                event_action: "back",
                event_category: "nav",
                event_label: "rewards",
                text: "rewards",
                element_placement: "rewards"
              }), m)
              if (n) x.current?.swiper.disable(), f(0), setTimeout((() => {
                x.current?.swiper.enable();
                const e = C.findIndex((e => e.id === `reward-${a}-0`));
                x.current?.swiper.slideTo(e), x.current?.swiper.disable(), j(!1), x.current?.swiper.enable(), x.current?.swiper.slideTo(0)
              }), 100), setTimeout((() => {
                l(!1), f(1)
              }), 250);
              else {
                const e = p.current,
                  r = e?.offsetTop;
                c(r), x.current?.swiper.disable(), j(!0);
                let s = C.findIndex((e => e.id === `reward-${a}-0`));
                1 === t[a].rewards.length && (s -= 1), x.current?.swiper.slideTo(s), setTimeout((() => {
                  x.current?.swiper.enable(), x.current?.swiper.slideTo(s), l(!0)
                }), 10)
              }
            else k(n), l(!n), j(!n)
          }
          return (0, s.useEffect)((() => (window.addEventListener("resize", W), W(), () => {
            window.removeEventListener("resize", W)
          })), [t]), (0, s.useEffect)((() => {
            k(!!m || !n)
          }), [m]), (0, s.useMemo)((() => (0, b.jsxs)(h.motion.div, {
            layout: "position",
            className: [oe.rewards, n ? oe.isModalOpen : oe.isModalClosed].join(" "),
            ref: I,
            children: [n && (0, b.jsx)("div", {
              className: oe.btnCloseContainer,
              children: (0, b.jsx)("button", {
                type: "button",
                "aria-label": O.formatMessage(w.cph_progress_close),
                className: oe.btnClose,
                onClick: () => y()
              })
            }), (0, b.jsxs)("div", {
              className: oe.header,
              ref: T,
              children: [n && (0, b.jsx)("button", {
                type: "button",
                className: oe.btnBack,
                onClick: () => y(),
                children: (0, b.jsx)("img", {
                  src: r(3716),
                  alt: O.formatMessage(w.cph_progress_close)
                })
              }), (0, b.jsx)("h3", {
                children: (0, b.jsx)(i.FormattedMessage, {
                  ...w.cph_progress_rewards_title
                })
              }), !n && (0, b.jsx)("button", {
                type: "button",
                className: oe.btnViewAll,
                onClick: () => {
                  S({
                    event: "view_all",
                    event_action: "click",
                    event_category: "view_all",
                    event_label: "progress & rewards",
                    element_placement: "progress & rewards"
                  }), y()
                },
                children: (0, b.jsx)(i.FormattedMessage, {
                  ...w.cph_progress_rewards_view_all
                })
              })]
            }), (0, b.jsx)("div", {
              className: oe.container,
              style: {
                "--max-width-static-md": `${R}px`
              },
              children: (0, b.jsxs)(A, {
                ref: x,
                modules: [ae.Mc, ae._2],
                ...m && {
                  breakpoints: {
                    0: {
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
                  className: oe.carousel,
                  loop: !1,
                  grabCursor: !0,
                  centeredSlides: !1,
                  centerInsufficientSlides: !1,
                  slidesPerView: "auto",
                  speed: 700,
                  navigation: !0
                },
                children: [!m && N && (0, b.jsx)("div", {
                  className: oe.howToClaimMobile,
                  children: (0, b.jsx)(i.FormattedMessage, {
                    ...w.cph_reward_how_to_claim
                  })
                }), C?.map((e => {
                  const r = e.tier === a;
                  return r || v ? (0, b.jsxs)(P, {
                    className: r ? void 0 : oe.inactiveTier,
                    tabIndex: 0,
                    children: [e.showTitle && n && (0, b.jsx)("h3", {
                      children: (0, b.jsx)(i.FormattedMessage, {
                        ...w.cph_progress_tracker_tier_label,
                        values: {
                          number: e.tier + 1
                        }
                      })
                    }), (0, b.jsx)(te, {
                      reward: e.reward,
                      style: r ? {} : {
                        opacity: u
                      },
                      tierLocked: t[e.tier].isLocked,
                      tierCompleted: t[e.tier].isCompleted
                    })]
                  }, e.id) : null
                })).filter(Boolean)]
              })
            })]
          })), [a, t, C?.length, m, n, R, v, u])
        },
        ie = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubc556befcdfefc6b8142c76ea73bf99b2",
          selected: "rockstargames-modules-gtao-career-progress-hubad209f07ad341814d2f177c00f800297",
          progressTracker: "rockstargames-modules-gtao-career-progress-hubab257c9adc2371bf125eb63452e12633",
          progressTrackerHeader: "rockstargames-modules-gtao-career-progress-huba7384834722e192013197e744dc8a813",
          platformAvailability: "rockstargames-modules-gtao-career-progress-hubdba45fe56871e3702251029f1850bb86",
          platformIcons: "rockstargames-modules-gtao-career-progress-hube72d8c544f022f3958601ab4ea09db3b",
          container: "rockstargames-modules-gtao-career-progress-hubab8b5ab2d40036cdfbb8a7abad99640e",
          tiers: "rockstargames-modules-gtao-career-progress-hubae6b3ef4ed1e29eaf35999a0dd1b4096",
          active: "rockstargames-modules-gtao-career-progress-hubf3bb0bf8761d0b1fe71eb5ffce7b13c1",
          tier: "rockstargames-modules-gtao-career-progress-huba6cf93b80ac3abc2271df9b0457b823b",
          check: "rockstargames-modules-gtao-career-progress-hube698b18415ea1f00641566da54f42414",
          isComplete: "rockstargames-modules-gtao-career-progress-hube265577ee467ad5f32e48812511c4e97",
          challenges: "rockstargames-modules-gtao-career-progress-hubd4ff2b713fd354814b02ee3f7b20c3f0",
          challengesHeader: "rockstargames-modules-gtao-career-progress-hubcf28ec71fe208e657945aa0e79e8d8b1",
          challengesProgress: "rockstargames-modules-gtao-career-progress-hubd18bd57f6954cf71af71d518072d2fb9",
          progressBar: "rockstargames-modules-gtao-career-progress-huba35918eb9893a6bddbbeb054ecb4889f",
          challengeList: "rockstargames-modules-gtao-career-progress-hubeb38cec2b0f953e333a1bf12e5377d64",
          rewards: "rockstargames-modules-gtao-career-progress-hubfeef086dcf8141f49780375eb25c0d0a",
          isModalOpen: "rockstargames-modules-gtao-career-progress-hubc8e6032d607226cfed94721a980e2093",
          readyToClaim: "rockstargames-modules-gtao-career-progress-hubc39e7f11f34f93554582cb0bc9932d4c",
          tooltip: "rockstargames-modules-gtao-career-progress-hube545033b541537d37a6cc2dbbc3d4f81",
          tooltipInner: "rockstargames-modules-gtao-career-progress-hubc442b4a0c7c5df3b75885c488d3a1b81",
          tooltipIcon: "rockstargames-modules-gtao-career-progress-hubd0616ef24f7c418d608af8a2e0634a9a",
          fadeItemsIn: "rockstargames-modules-gtao-career-progress-hubf9bb780edb60623d2afd83508c2b4045",
          fadeItemsOut: "rockstargames-modules-gtao-career-progress-huba8f51ab04fd225f90176ea175599588b",
          desktopRewardsGrow: "rockstargames-modules-gtao-career-progress-hubc50c17f1e4cba4307d669cce1c967499",
          mobileRewardsGrow: "rockstargames-modules-gtao-career-progress-hubc34ee7bcecd6460869b03dc8dd8fc3bf",
          mobileRewardsShrink: "rockstargames-modules-gtao-career-progress-hubc0e03a830df50e21326bb0ea630f4258",
          desktopRewardsShrink: "rockstargames-modules-gtao-career-progress-hubcccdc3523b42f301b5635de7e8453256",
          desktopShrinkChallengeMargins: "rockstargames-modules-gtao-career-progress-hubd40fe5f00a9bd22a2e4e6975f744f5f2"
        },
        _e = () => {
          const {
            windowWidth: e
          } = (0, _.useWindowResize)(), a = e < 1280, {
            state: r
          } = v(), {
            rewardsKey: t
          } = r, o = t ? R[t] : null, [c, n] = (0, s.useState)(null), l = c ? (e => {
            const a = [];
            let r = !1;
            return e.forEach((e => {
              const {
                challenges: s,
                rewards: t
              } = e, o = {
                challenges: s,
                rewards: t
              };
              o.numCompleted = s.filter((e => e.playerProgress >= e.totalProgress)).length, o.isLocked = r, r = o.numCompleted < s.length, o.isCompleted = o.numCompleted >= s.length, o.isCompleted ? o.numClaimable = t.filter((e => !1 === e.isCollected)).length : o.numClaimable = 0, a.push({
                ...e,
                ...o
              })
            })), a
          })(c.tiers) : null, [u, E] = (0, s.useState)(0), [S, k] = (0, s.useState)(!1), {
            ref: j,
            inView: x
          } = (0, g.useInView)({
            threshold: .6
          }), A = (0, p.useRockstarTokenPing)(), {
            loggedIn: I
          } = (0, d.useRockstarUser)(), {
            selectedCharacterTuple: N
          } = (0, d.useRockstarUserState)(), {
            formatMessage: O
          } = (0, i.useIntl)(), {
            track: C
          } = (0, d.useGtmTrack)(), W = l ? l[u].numCompleted : 0, y = l ? l[u].challenges.length : 0, [G, z] = (0, s.useState)(null), [D, V] = (0, s.useState)(null), [M, L] = (0, s.useState)(null), [B, H] = (0, s.useState)(!1), [U, $] = (0, s.useState)("auto"), [Y, Z] = (0, s.useState)("auto"), q = (0, s.useRef)(null), K = (0, s.useRef)();
          (0, s.useEffect)((() => {
            x && !S && (C({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "progress & rewards",
              element_placement: "progress & rewards"
            }), k(!0))
          }), [x]), (0, s.useEffect)((() => {
            null !== I && null !== N && o && (async e => {
              (async () => {
                const {
                  error: a = null,
                  result: r
                } = await (0, _.coreScApiFetch)("games/gtao/career/progress/section", {
                  pingBearer: A,
                  useCache: !0,
                  ...I ? {} : {
                    requireBearerToken: !1
                  },
                  query: e
                });
                if (a) throw Object.assign(new Error(""), a);
                r && n(r)
              })()
            })({
              section: String(o),
              platform: N?.[0],
              slot: N?.[1]
            })
          }), [I, N, o]);
          const {
            styles: J,
            attributes: ee
          } = (0, m.usePopper)(M, D, {
            placement: "top-end"
          });
          if (!l?.[u] || !o) return null;
          const {
            challenges: ae,
            rewards: re,
            isLocked: se
          } = l[u], te = l.some((e => e.isCompleted && e?.numClaimable > 0));
          return (0, b.jsxs)("div", {
            className: ie.progressTracker,
            style: {
              "--rewards-top-offset": "auto" === Y ? "auto" : `${Y}px`
            },
            ref: j,
            children: [(0, b.jsxs)("div", {
              className: ie.progressTrackerHeader,
              children: [(0, b.jsx)("div", {
                children: (0, b.jsx)("h2", {
                  children: (0, b.jsx)(i.FormattedMessage, {
                    ...w.cph_progress_tracker_title
                  })
                })
              }), !a && te ? (0, b.jsxs)("div", {
                className: ie.readyToClaim,
                children: [(0, b.jsx)(i.FormattedMessage, {
                  ...w.cph_reward_ready_to_claim
                }), (0, b.jsx)("button", {
                  className: ie.tooltipIcon,
                  ref: L,
                  type: "button",
                  "aria-label": O(w.cph_reward_ready_to_claim)
                }), (0, b.jsx)("div", {
                  className: ie.tooltip,
                  style: J.popper,
                  ref: V,
                  ...ee,
                  children: (0, b.jsx)("div", {
                    className: ie.tooltipInner,
                    children: (0, b.jsx)(i.FormattedMessage, {
                      ...w.cph_reward_how_to_claim
                    })
                  })
                })]
              }) : (0, b.jsxs)("div", {
                className: ie.platformAvailability,
                children: [(0, b.jsx)("span", {
                  children: (0, b.jsx)(i.FormattedMessage, {
                    ...w.cph_progress_available_on
                  })
                }), (0, b.jsxs)("div", {
                  className: ie.platformIcons,
                  children: [(0, b.jsx)(F, {
                    "aria-label": O(w.cph_progress_available_on_aria_ps5)
                  }), (0, b.jsx)(X, {
                    "aria-label": O(w.cph_progress_available_on_aria_xbox)
                  })]
                })]
              })]
            }), c && (0, b.jsxs)("div", {
              className: [ie.container, B && ie.isModalOpen, !1 === B ? ie.isModalClosed : ""].join(" "),
              style: {
                ...!a && {
                  height: U
                }
              },
              ref: q,
              children: [(0, b.jsx)("div", {
                className: ie.tiers,
                children: (0, b.jsx)("ul", {
                  children: l && l.map(((e, a) => {
                    const r = l[a]?.isCompleted;
                    return (0, b.jsx)("li", {
                      children: (0, b.jsxs)("button", {
                        type: "button",
                        className: [ie.tier, u === a ? ie.active : "", r ? ie.isComplete : ""].join(" "),
                        onClick: () => {
                          ! function(e) {
                            z(null), E(e)
                          }(a), C({
                            event: "component_tab_click",
                            event_action: "tab_click",
                            event_category: "component",
                            event_label: `${O(w.cph_progress_tracker_tier_label,{number:a+1})}`,
                            text: `${O(w.cph_progress_tracker_tier_label,{number:a+1})}`,
                            link_url: void 0,
                            element_placement: "progress tracker"
                          })
                        },
                        children: [(0, b.jsx)(i.FormattedMessage, {
                          ...w.cph_progress_tracker_tier_label,
                          values: {
                            number: a + 1
                          }
                        }), r && (0, b.jsx)(f, {
                          classes: ie.check,
                          alt: O(w.cph_tier_complete)
                        })]
                      })
                    }, e.challenges[0].id)
                  }))
                })
              }), (0, b.jsxs)(h.motion.div, {
                className: ie.challenges,
                children: [(0, b.jsxs)(h.motion.div, {
                  className: ie.challengesHeader,
                  children: [(0, b.jsx)("h3", {
                    children: (0, b.jsx)(i.FormattedMessage, {
                      ...w.cph_progress_challenges_title
                    })
                  }), (0, b.jsxs)("div", {
                    className: ie.challengesProgress,
                    children: [(0, b.jsx)(P, {
                      percentage: I ? W / y * 100 : 0,
                      classes: ie.progressBar
                    }), (0, b.jsx)(T, {
                      theme: "light",
                      value: I ? W : void 0,
                      total: y
                    })]
                  })]
                }), (0, b.jsx)(h.motion.div, {
                  className: ie.challengeList,
                  children: ae && ae.map((e => (0, b.jsx)(Q, {
                    activeTier: u,
                    challenge: e,
                    isLocked: se || !1,
                    isOpen: e.id === G,
                    onClick: () => {
                      z(e.id === G ? null : e.id)
                    }
                  }, e.id)))
                })]
              }), (0, b.jsx)(h.motion.div, {
                className: ie.rewards,
                "data-open": B,
                layout: !0,
                transition: {
                  ease: "easeInOut",
                  stiffness: 1e3,
                  damping: 100,
                  duration: .3
                },
                ref: K,
                children: re && (0, b.jsx)(ce, {
                  tiers: l,
                  activeTier: u,
                  isModalOpen: B,
                  setIsModalOpen: e => {
                    H(e), z(null)
                  },
                  setHeight: $,
                  setOffset: Z,
                  rewardsContainer: K
                })
              })]
            })]
          })
        };
      var de = r(3557),
        ne = r(1740),
        le = r(7044);
      const pe = ["1"],
        me = {
          dropdownContainer: "rockstargames-modules-gtao-career-progress-hubac0cba78345de240f86c6805a2d6cb8b",
          dropdownButton: "rockstargames-modules-gtao-career-progress-hube6d0d113433cbcf636e7797512e1f3ea",
          dropdownContent: "rockstargames-modules-gtao-career-progress-hube5bf0846190b652f80b077819284c7ea",
          dropdownImage: "rockstargames-modules-gtao-career-progress-hubb72c3c01fe045dcec793d3ec76b75115",
          dropdownTitle: "rockstargames-modules-gtao-career-progress-hubc8accc90e6de04b96c3b6995017821a3",
          dropdownArrow: "rockstargames-modules-gtao-career-progress-hubec3be424b550630ebaa9cac6677965c9",
          open: "rockstargames-modules-gtao-career-progress-hubf734858df19469b6830aa802cf323096"
        },
        ge = e => {
          let {
            imageUrl: a,
            onClick: r,
            isOpen: t
          } = e;
          const o = (0, i.useIntl)(),
            c = t ? w.cph_nav_close : w.cph_nav_open,
            _ = (0, s.useContext)(Ne);
          return (0, b.jsx)("div", {
            className: me.dropdownContainer,
            "data-testid": "menu-dropdown",
            children: (0, b.jsx)("button", {
              type: "button",
              className: me.dropdownButton,
              onClick: r,
              "aria-label": o.formatMessage(c),
              "data-testid": "menu-dropdown-button",
              children: (0, b.jsxs)("div", {
                className: me.dropdownContent,
                children: [(0, b.jsx)("div", {
                  className: me.dropdownImage,
                  children: (0, b.jsx)("img", {
                    alt: "",
                    width: "32",
                    height: "32",
                    src: a
                  })
                }), (0, b.jsx)("div", {
                  className: me.dropdownTitle,
                  children: _
                }), (0, b.jsx)("div", {
                  className: [me.dropdownArrow, t ? me.open : ""].join(" "),
                  "data-testid": "chevron"
                })]
              })
            })
          })
        };
      var he;

      function ue() {
        return ue = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
          }
          return e
        }, ue.apply(this, arguments)
      }
      const be = e => s.createElement("svg", ue({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), he || (he = s.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var fe;

      function Re() {
        return Re = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
          }
          return e
        }, Re.apply(this, arguments)
      }
      const Ee = e => s.createElement("svg", Re({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), fe || (fe = s.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        Se = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubf8b007ab3858c99a0f6c3c6379298d46",
          selected: "rockstargames-modules-gtao-career-progress-hubbf7bacca00a95337824c0260d67c31d6",
          navScrollButton: "rockstargames-modules-gtao-career-progress-hubab179586d67697b5a2031b1d39f614a8"
        },
        ke = e => {
          let {
            direction: a,
            className: r,
            ...s
          } = e;
          return (0, b.jsxs)("button", {
            type: "button",
            className: [r, Se.navScrollButton].join(" "),
            ...s,
            children: ["left" === a && (0, b.jsx)(be, {}), "right" === a && (0, b.jsx)(Ee, {})]
          })
        },
        ve = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubdda299cc4738ab5eafc1f9236e81ea04",
          selected: "rockstargames-modules-gtao-career-progress-hubb6a947fd83d4a7f564fa71c09fb9e519",
          navPill: "rockstargames-modules-gtao-career-progress-huba38cedc6576c778d3a050461bb5d5d45"
        },
        we = e => {
          let {
            title: a,
            onClick: r,
            selected: s
          } = e;
          return (0, b.jsx)("button", {
            type: "button",
            onClick: r,
            className: [ve.navPill, s ? ve.selected : ""].join(" "),
            children: (0, b.jsx)("div", {
              children: a
            })
          })
        },
        je = {
          navCard: "rockstargames-modules-gtao-career-progress-hubf48d7e19a6fc4228ea08e7a1e944595a",
          navCardImageBox: "rockstargames-modules-gtao-career-progress-huba4b28fe0095b750bdf529f4a40fb9d8b",
          navCardTextBox: "rockstargames-modules-gtao-career-progress-hubc653d7b910fbe53c31fda89b9b68a394"
        },
        xe = e => {
          let {
            title: a,
            url: r,
            imageUrl: s,
            onClick: t
          } = e;
          const o = `${s}?im=Resize,height=420`,
            [c] = (0, _.usePreloadImg)(o);
          return (0, b.jsx)(de.NavLink, {
            className: je.navCard,
            to: r,
            onClick: t,
            children: (0, b.jsx)("div", {
              className: [je.navCardImageBox, c ? je.navCardImageLoaded : ""].join(" "),
              style: {
                backgroundImage: `url("${o}")`
              },
              children: (0, b.jsx)("div", {
                className: je.navCardTextBox,
                children: a
              })
            })
          })
        },
        Ae = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubce7ec0d089af7e8a21706cb9e6957e67",
          selected: "rockstargames-modules-gtao-career-progress-huba66c1f7038cf9cb7943f71a339d621dd",
          navMenu: "rockstargames-modules-gtao-career-progress-hubbe9cb7eab382797bc899a493ffd111cc",
          navMenuMain: "rockstargames-modules-gtao-career-progress-hube2905da1935500625ad93f0fcaf3fb50",
          sectionMenu: "rockstargames-modules-gtao-career-progress-hubd3c146ecbf25e513809e7a6f813e76ee",
          sectionItems: "rockstargames-modules-gtao-career-progress-huba62061ef8479a265a21fcf8dc0712fcb",
          nextSectionNavButton: "rockstargames-modules-gtao-career-progress-hubc22e3d55672b7c2031ee9c98cbd4c341",
          previousSectionNavButton: "rockstargames-modules-gtao-career-progress-hubad93b3c3b89c72a508ee3acbd39a1fcf",
          previousNavButton: "rockstargames-modules-gtao-career-progress-hubc7780c57dfb9846c822573695b07134d",
          nextNavButton: "rockstargames-modules-gtao-career-progress-hubfdbe1a20e7d51c73bf0f74271fb313ca",
          navMenuScroll: "rockstargames-modules-gtao-career-progress-hubbf3e0ea18e65a05506d7e1c28d1137c2",
          headerVisible: "rockstargames-modules-gtao-career-progress-hubb692fd6b3e03dc92073cea71582affa0",
          navMenuGrid: "rockstargames-modules-gtao-career-progress-hubbfe706da7304ceaf33e985c6ff0a38cc",
          navFeaturedItems: "rockstargames-modules-gtao-career-progress-hubfffae80c751cd9b81e84498e5c501cd7"
        },
        Pe = {
          initial: {
            height: "0dvh"
          },
          open: {
            height: "100dvh",
            transition: {
              ease: "easeInOut",
              duration: .4
            }
          },
          closed: {
            height: "0dvh",
            transition: {
              ease: "easeInOut",
              duration: .4
            }
          }
        },
        Ie = e => {
          let {
            navItems: a,
            category: r,
            onNavItemClick: t,
            isOpen: o,
            isHeaderVisible: c
          } = e;
          const _ = (0, i.useIntl)(),
            {
              pathname: n
            } = (0, de.useLocation)(),
            l = (0, s.useMemo)((() => Math.max(a.findIndex((e => e.name === r)), 0)), [a, n]),
            [p, m] = (0, s.useState)(l),
            [g, u] = (0, s.useState)(!1),
            [f, R] = (0, s.useState)(!1),
            [E, S] = (0, s.useState)(!1),
            k = (0, s.useRef)(null),
            {
              track: v
            } = (0, d.useGtmTrack)(),
            j = [...a],
            x = j[p],
            A = e => {
              e.isEnd ? R(!0) : R(!1), e.isBeginning ? S(!0) : S(!1)
            };
          return (0, s.useEffect)((() => {
            k.current && ((k.current?.wrapperEl.clientWidth || 0) > (k.current?.el.clientWidth || 0) ? (u(!0), k.current.params.centeredSlides = !0, k.current.params.centeredSlidesBounds = !0) : (u(!1), k.current.params.centeredSlides = !1, k.current.params.centeredSlidesBounds = !1))
          }), [k.current?.wrapperEl.clientWidth, k.current?.el.clientWidth]), (0, b.jsx)(h.motion.div, {
            className: Ae.navMenu,
            variants: Pe,
            initial: "initial",
            animate: o ? "open" : "closed",
            children: (0, b.jsxs)("div", {
              className: Ae.navMenuMain,
              children: [(0, b.jsxs)("div", {
                className: Ae.sectionMenu,
                children: [!E && g && (0, b.jsx)("div", {
                  className: Ae.previousSectionNavButton,
                  children: (0, b.jsx)(ke, {
                    direction: "left",
                    className: Ae.previousNavButton,
                    onClick: () => k.current?.slidePrev(),
                    "aria-label": _.formatMessage(w.cph_nav_scroll_left)
                  })
                }), (0, b.jsx)("div", {
                  className: Ae.sectionItems,
                  children: (0, b.jsx)(ee.wx, {
                    onBeforeInit: e => {
                      k.current = e
                    },
                    onInit: A,
                    className: Ae.sectionItems,
                    direction: "horizontal",
                    grabCursor: !0,
                    slidesPerView: "auto",
                    initialSlide: p,
                    onSlideChange: A,
                    onResize: A,
                    onReachEnd: () => R(!0),
                    onReachBeginning: () => S(!0),
                    children: j.map(((e, a) => {
                      let {
                        title: r
                      } = e;
                      return (0, b.jsx)(ee.Ky, {
                        children: (0, b.jsx)(we, {
                          title: r,
                          onClick: () => ((e, a) => {
                            k.current?.slideTo(e), m(e), v({
                              event: "nav_click",
                              event_action: "click",
                              event_category: "nav",
                              event_label: `Secondary Nav > ${a}`,
                              text: `${a}`,
                              link_url: void 0,
                              element_placement: `Secondary Nav > ${a}`
                            })
                          })(a, r),
                          ...p === a ? {
                            selected: !0
                          } : {}
                        }, r)
                      }, r)
                    }))
                  })
                }), !f && g && (0, b.jsx)("div", {
                  className: Ae.nextSectionNavButton,
                  children: (0, b.jsx)(ke, {
                    direction: "right",
                    className: Ae.nextNavButton,
                    onClick: () => k.current?.slideNext(),
                    "aria-label": _.formatMessage(w.cph_nav_scroll_right)
                  })
                })]
              }), (0, b.jsx)("div", {
                className: [Ae.navMenuScroll, c ? Ae.headerVisible : ""].join(" "),
                "data-testid": "menu-scroll",
                children: (0, b.jsx)("div", {
                  className: Ae.navMenuGrid,
                  "data-testid": "menu-items",
                  children: x.subNavItems.map((e => {
                    let {
                      title: a,
                      url: r,
                      imageUrl: s
                    } = e;
                    return (0, b.jsx)(xe, {
                      title: a,
                      url: r,
                      imageUrl: s,
                      onClick: () => ((e, a) => {
                        v({
                          event: "nav_click",
                          event_action: "click",
                          event_category: "nav",
                          event_label: `Secondary Nav > ${x.title} > ${e}`,
                          text: `${e}`,
                          link_url: a,
                          element_placement: `Secondary Nav > ${x.title} > ${e}`
                        }), t()
                      })(a, r)
                    }, a)
                  }))
                })
              })]
            })
          })
        },
        Te = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubd33edcef8861bbd69c162db25485dc5b",
          selected: "rockstargames-modules-gtao-career-progress-hubbb0249a38c555f8de926cdbcf1ed9535",
          navContainer: "rockstargames-modules-gtao-career-progress-huba5c0b2001c6e04949692655b09b951b6",
          navOverlay: "rockstargames-modules-gtao-career-progress-hubc74d6d10fe36dff21b60af40c89f7f20",
          headerVisible: "rockstargames-modules-gtao-career-progress-hubea84e2bcf7090e4fc7199c3526bf6ce9",
          nav: "rockstargames-modules-gtao-career-progress-huba1cad8d2506106f3ae1c28bf03d3dada",
          navBar: "rockstargames-modules-gtao-career-progress-hubea536a60f8859ce0c810f152fa847e85",
          navBarVisible: "rockstargames-modules-gtao-career-progress-hubf30383967d8d968e19bd0db559e5c546"
        },
        Ne = (0, s.createContext)(null),
        Oe = {
          initial: {
            opacity: 0
          },
          closed: {
            opacity: 0,
            transition: {
              ease: "linear",
              duration: .3
            },
            transitionEnd: {
              display: "none"
            }
          },
          open: {
            opacity: 1,
            display: "block",
            transition: {
              ease: "linear",
              duration: .3
            }
          }
        },
        Ce = e => {
          let {
            title: a
          } = e;
          const {
            pathname: r
          } = (0, de.useLocation)(), t = (0, de.useParams)(), {
            data: o,
            loading: c
          } = (() => {
            const e = (0, ne.useGenerateCdnSource)(),
              a = (0, p.useQuery)(le.SecondaryNavContent, {
                variables: {
                  url: "/gta-online",
                  branchTags: pe
                }
              }),
              r = a => {
                const r = a.images?.find((e => "cphsubnav" === e.context)) || a.images?.[0];
                return {
                  title: a.title,
                  name: a.name,
                  url: a.link && `${a.link.replace("./","../")}`,
                  imageUrl: r && e(r?.src)
                }
              },
              t = e => ({
                title: e.title,
                name: e.name,
                subNavItems: e.children.map(r)
              }),
              o = a?.data?.metaUrlInfo?.tina?.payloadRepresentedAsTree?.tree,
              c = (0, s.useMemo)((() => o?.map(t)), [JSON.stringify(o)]);
            return {
              ...a,
              data: c
            }
          })(), {
            setBodyIsScrollable: i
          } = (0, _.useBodyScrollable)(), {
            state: n
          } = (0, _.useRockstarLocalState)(), [l, m] = (0, s.useState)(!1), [g, u] = (0, s.useState)(!1), [f, R] = (0, s.useState)(!1), {
            pageYOffset: E
          } = (0, _.useScroll)(), {
            track: S
          } = (0, d.useGtmTrack)(), k = (0, s.useContext)(Ne), v = !n.navHidden, w = !c && o?.length > 0, j = (0, s.useMemo)((() => t["*"]?.slice(0, t["*"].indexOf("/"))), [o, r]), x = (0, s.useMemo)((() => {
            if (!w) return null;
            const e = o.find((e => e.name === j))?.subNavItems?.find((e => e.name.toLowerCase() === t.section)),
              a = e?.imageUrl;
            return a ? `${a}?im=Resize,height=32,width=32` : null
          }), [a, w]);
          return (0, s.useEffect)((() => {
            const e = e => {
              "Escape" === e.key && m(!1)
            };
            return l ? (f || R(!0), u(!1), S({
              event: "nav_open",
              event_action: "open",
              event_category: "nav",
              event_label: "Secondary Nav",
              text: k,
              link_url: void 0,
              element_placement: "Secondary Nav"
            })) : l || !f || g || S({
              event: "nav_close",
              event_action: "close",
              event_category: "nav",
              event_label: "Secondary Nav",
              text: k,
              link_url: void 0,
              element_placement: "Secondary Nav"
            }), l ? (i(!1), document.addEventListener("keyup", e)) : i(!0), () => {
              i(!0), document.removeEventListener("keyup", e)
            }
          }), [l, g]), w ? (0, b.jsxs)(Ne.Provider, {
            value: a,
            children: [(0, b.jsx)(h.motion.div, {
              className: Te.navOverlay,
              onClick: () => m(!1),
              variants: Oe,
              initial: "initial",
              animate: l ? "open" : "closed"
            }), (0, b.jsx)("div", {
              className: [Te.navContainer, v ? Te.headerVisible : ""].join(" "),
              children: (0, b.jsxs)("nav", {
                className: Te.nav,
                children: [(0, b.jsx)("div", {
                  className: [Te.navBar, E > 0 ? Te.navBarVisible : ""].join(" "),
                  children: (0, b.jsx)(ge, {
                    imageUrl: x,
                    isOpen: l,
                    onClick: () => m(!l)
                  })
                }), (0, b.jsx)(Ie, {
                  navItems: o,
                  category: j,
                  isHeaderVisible: v,
                  onNavItemClick: () => {
                    m(!1), u(!0)
                  },
                  isOpen: l
                })]
              })
            })]
          }) : null
        },
        We = e => {
          let {
            brand: a,
            ctaFields: r,
            title: s = ""
          } = e;
          return (0, b.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-huba1fb8ef8aa1c8016ecb3a047fa54b1ad",
            "data-has-cta": !!r?.content,
            children: [a && (0, b.jsx)("img", {
              alt: s ? `${s} logo` : "",
              className: "rockstargames-modules-gtao-career-progress-hubfd08d81b98e294fb92f04c336656f777",
              src: a
            }), r?.content && (0, b.jsx)(c.Cta, {
              variant: "gen9",
              icon: "play",
              iconPosition: "left",
              className: "rockstargames-modules-gtao-career-progress-hubfd23c280a7a55e8fd71e3761a50e4035",
              ...r
            })]
          })
        },
        ye = e => {
          let {
            title: a,
            heroImages: r
          } = e;
          const s = (0, ne.useGetCdnSource)(r?.backgroundMobileImage ?? null),
            t = (0, ne.useGetCdnSource)(r?.backgroundDesktopImage ?? null),
            o = (0, ne.useGetCdnSource)(r?.layeredMobileImage ?? null),
            c = (0, ne.useGetCdnSource)(r?.layeredDesktopImage ?? null),
            i = (0, ne.useGetCdnSource)(r?.brandImage ?? null);
          if (!r) return null;
          const _ = r?.ctaFields;
          return (0, b.jsxs)("div", {
            className: "rockstargames-modules-gtao-career-progress-hubc6a34f440f166b60d325d87d27fd65ef",
            style: {
              "--background-image-desktop": `url(${t??""})`,
              "--background-image-mobile": `url(${s??t})`,
              "--layered-image-desktop": `url(${c??""})`,
              "--layered-image-mobile": `url(${o??""})`
            },
            children: [(0, b.jsxs)("div", {
              className: "rockstargames-modules-gtao-career-progress-hubbd1b0cfb695730d783de70846f42bb25",
              "aria-label": a,
              role: "img",
              children: [(0, b.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hube2f4e7d8d718b9ffb537877fa5b68fc9"
              }), (0, b.jsx)("div", {
                className: "rockstargames-modules-gtao-career-progress-hubd092ea848e1f2006308b052048ed8246"
              })]
            }), (0, b.jsx)(We, {
              brand: i,
              ctaFields: _,
              title: a
            })]
          })
        },
        Ge = e => {
          let {
            className: a
          } = e;
          return (0, b.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, b.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, b.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        ze = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubdd75c3bd1968a0e4a412451d272f5881",
          selected: "rockstargames-modules-gtao-career-progress-hube12c5b082903cd129230e309b11f83cb",
          intro: "rockstargames-modules-gtao-career-progress-hube555a1e31776e222bd9002e89c7dd97e",
          summary: "rockstargames-modules-gtao-career-progress-huba0971e2e6003c4af00e53c25ca412d94",
          gettingStarted: "rockstargames-modules-gtao-career-progress-hubef0ec8c49b346d56ffa5022260f01000",
          rightSide: "rockstargames-modules-gtao-career-progress-hubb49af7d384ad9cd23cf7552e064fbc70",
          gettingStartedSteps: "rockstargames-modules-gtao-career-progress-huba033a9494ec8cb3858a6009a60c6626e",
          gettingStartedGuide: "rockstargames-modules-gtao-career-progress-hubdfe2466db84426044019603b7902a007",
          guideButton: "rockstargames-modules-gtao-career-progress-hubcd40fb12378e1d77c842e50ab19f933b",
          icon: "rockstargames-modules-gtao-career-progress-hubb2dbb6676031a8cd1113f369434c10a9"
        },
        De = e => {
          let {
            title: a,
            category: r,
            summary: t,
            steps: o = [],
            guideLink: c = ""
          } = e;
          const [_, n] = (0, s.useState)(!1), {
            track: l
          } = (0, d.useGtmTrack)(), {
            ref: p,
            inView: m
          } = (0, g.useInView)({
            threshold: .6
          }), h = (0, i.useIntl)();
          return (0, s.useEffect)((() => {
            m && !_ && (l({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "intro",
              element_placement: "intro"
            }), n(!0))
          }), [m]), (0, b.jsxs)("div", {
            className: ze.intro,
            ref: p,
            children: [(0, b.jsxs)("div", {
              className: ze.summary,
              children: [(0, b.jsx)("h1", {
                children: r
              }), (0, b.jsx)("h2", {
                children: a
              }), (0, b.jsx)("p", {
                className: ze.summaryText,
                children: t
              })]
            }), (0, b.jsxs)("div", {
              className: ze.rightSide,
              children: [(0, b.jsxs)("div", {
                className: ze.gettingStarted,
                children: [(0, b.jsx)("h3", {
                  children: h.formatMessage(w.cph_intro_getting_started)
                }), (0, b.jsx)("ol", {
                  className: ze.gettingStartedSteps,
                  children: o.map((e => (0, b.jsx)("li", {
                    children: (0, b.jsx)("span", {
                      children: e
                    })
                  }, e)))
                })]
              }), c && (0, b.jsxs)("div", {
                className: ze.gettingStartedGuide,
                children: [(0, b.jsx)("span", {
                  children: h.formatMessage(w.cph_intro_guide_instruction, {
                    title: a
                  })
                }), (0, b.jsxs)(de.NavLink, {
                  type: "button",
                  to: c,
                  className: ze.guideButton,
                  children: [(0, b.jsx)("span", {
                    children: h.formatMessage(w.cph_intro_guide_learn_more)
                  }), " ", (0, b.jsx)(Ge, {
                    className: ze.icon
                  })]
                })]
              })]
            })]
          })
        },
        Ve = {
          pillBtn: "rockstargames-modules-gtao-career-progress-hubd5b4e6f63deb3ece584f31b4d1b4d705",
          selected: "rockstargames-modules-gtao-career-progress-hubd8101586c4fbbf210f1fc4c326738fdf",
          gen8: "rockstargames-modules-gtao-career-progress-hubcb293e23ff93c9a4b565f50c3c63bfc5",
          gen9: "rockstargames-modules-gtao-career-progress-hubfae98cedf44568e468931cc288fbacda",
          loggedOut: "rockstargames-modules-gtao-career-progress-hube78616d73fca3bbeedb1301c28edf31f",
          notLinked: "rockstargames-modules-gtao-career-progress-huba229bafc8e2f24d945e84015e974bc94",
          unknown: "rockstargames-modules-gtao-career-progress-hubcf2f42c0c4cebbc7890f77059fbb25cc",
          loadingScreen: "rockstargames-modules-gtao-career-progress-hubf5e273312bf03b5d1f3ec60c76680bce",
          highlights: "rockstargames-modules-gtao-career-progress-hube705defcd445c5a6cbab7d893a75a218",
          rewardsTrackerWithData: "rockstargames-modules-gtao-career-progress-hube44cb85da4bea31cd95a4f74f9216236",
          rewardsTracker: "rockstargames-modules-gtao-career-progress-hubd966d2c323f6727fcd564f56ce0e79f7",
          calloutLoginPrompt: "rockstargames-modules-gtao-career-progress-hube42d8251acc1634604baaeeeff7ef4f1",
          calloutNoChar: "rockstargames-modules-gtao-career-progress-hubce73ad2c77aef48644ed10bb553bc001",
          feedback: "rockstargames-modules-gtao-career-progress-hubc2bb063a2001c46c1e157b72c41cfc41",
          rating: "rockstargames-modules-gtao-career-progress-hubc586f98b4f77d43625afb2cbceed95b5"
        };
      t.gsap.registerPlugin(o.W);
      const {
        host: Me,
        signup: Le
      } = (0, _.getScConfigForOrigin)(), Be = (0, i.withIntl)((e => {
        let {
          heroImages: a,
          awardsKey: r,
          title: o,
          category: l,
          summary: p,
          steps: m,
          guideLink: g,
          rewardsKey: h,
          images: u,
          subtitle: f,
          highlights: R
        } = e;
        const {
          windowWidth: E
        } = (0, _.useWindowResize)(), {
          selectedCharacterTuple: S,
          userData: k
        } = (0, d.useRockstarUserState)(), {
          loading: j,
          loggedIn: x
        } = (0, d.useRockstarUser)(), {
          setAwardsKey: A,
          setRewardsKey: P
        } = v(), [I, T] = (0, s.useState)("unknown"), N = (0, s.useRef)(null), O = (0, s.useRef)(null), {
          formatMessage: C
        } = (0, i.useIntl)(), {
          track: W
        } = (0, d.useGtmTrack)(), y = (0, _.useLocale)(), G = (0, _.toScLocaleString)(y), [z, D] = (0, s.useState)(!1), V = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, M = `${Le}&returnUrl=${window.location.pathname}&lang=${G}`, B = `https://${Me}.rockstargames.com/settings/linkedaccounts`;
        (0, s.useEffect)((() => {
          r && A(r)
        }), [r]), (0, s.useEffect)((() => {
          h && P(h)
        }), [h]), (0, s.useEffect)((() => () => {
          A(null), P(null)
        }), []), (0, s.useEffect)((() => {
          if (!1 === x && T("loggedOut"), x && Array.isArray(S)) {
            const e = (0, _.getGen9Consoles)().includes(S[0]),
              a = (0, _.getGen8Consoles)().includes(S[0]);
            e ? T("gen9") : a && T("gen8")
          } else x && !1 === S && T("notLinked")
        }), [x, S]), (0, s.useEffect)((() => {
          j || z || null === x || "unknown" === I || (W({
            event: "virtualPageview",
            view_name: `career progress hub: ${o.toLowerCase()}`,
            page_layout: I
          }), D(!0))
        }), [x, I, j]);
        const H = t.gsap.matchMedia();
        if ((0, s.useLayoutEffect)((() => {
            if (!O.current) return;
            const e = O.current.getElementsByTagName("img")?.[5];
            e && H.add({
              isDesktop: "(min-width: 500px)",
              isMobile: "(max-width: 501px)",
              reduceMotion: "(prefers-reduced-motion: reduce)"
            }, (a => {
              const {
                isDesktop: r,
                reduceMotion: s
              } = a.conditions;
              if (s) return;
              const o = {
                  mobile: {
                    from: "-100vw",
                    to: "-275vw"
                  },
                  desktop: {
                    from: "0",
                    to: -1 * (e.offsetLeft + e.width - window.innerWidth)
                  }
                },
                c = r ? o.desktop : o.mobile,
                i = {
                  trigger: O.current,
                  scrub: !0
                };
              t.gsap.fromTo(O.current, {
                x: c.from,
                scrollTrigger: i
              }, {
                x: c.to,
                scrollTrigger: i,
                ease: "none"
              })
            }))
          }), [j, I, O.current]), (0, s.useEffect)((() => {
            t.gsap.matchMediaRefresh()
          }), [E]), j) return (0, b.jsx)("div", {
          className: Ve.loadingScreen,
          children: (0, b.jsx)(c.LoadingAnimation, {
            type: "SPINNING"
          })
        });
        let U = null;
        return U = (0, b.jsx)(n.Highlights, {
          highlights: R,
          subtitle: f
        }), (0, b.jsxs)(b.Fragment, {
          children: [(0, b.jsx)(Ce, {
            title: o
          }), (0, b.jsxs)("div", {
            className: Ve[I],
            ref: N,
            children: [(0, b.jsx)(ye, {
              title: o,
              heroImages: a ?? {}
            }), (0, b.jsx)(De, {
              title: o,
              category: l,
              summary: p,
              steps: m,
              guideLink: g
            }), (0, b.jsx)(L, {}), null, (0, b.jsx)("div", {
              className: Ve.highlights,
              children: U
            }), !x && (0, b.jsx)(c.CalloutSection, {
              header: C(w.cph_login_prompt_title),
              subheader: C(w.cph_login_prompt_body),
              type: "button",
              action_text: C(w.cph_login_prompt_button),
              actionFooterHelperText: C(w.cph_login_prompt_button_helper),
              actionFooterLinkText: C(w.cph_login_prompt_button_helper_link),
              actionFooterLink: M,
              actionFooterLinkTrackingData: {
                event: "cta_signup",
                event_category: "cta",
                event_action: "register",
                event_label: "callout section",
                text: C(w.cph_login_prompt_button_helper_link).toLowerCase(),
                link_url: M
              },
              link: V,
              className: Ve.calloutLoginPrompt,
              sectionName: w.cph_login_prompt_title.defaultMessage,
              trackingData: {
                event: "cta_login",
                event_category: "cta",
                event_action: "login",
                event_label: "callout section",
                text: C(w.cph_login_prompt_button_helper_link).toLowerCase(),
                link_url: V,
                element_placement: `callout section - ${w.cph_login_prompt_title.defaultMessage}`
              }
            }), x && !1 === S && (0, b.jsx)(c.CalloutSection, {
              header: C(w.cph_loggedin_nochar_title),
              subheader: C(w.cph_loggedin_nochar_body),
              type: "button",
              action_text: C(w.cph_loggedin_nochar_button),
              link: B,
              className: Ve.calloutNoChar,
              sectionName: w.cph_loggedin_nochar_title.defaultMessage,
              trackingData: {
                event: "cta_link_account",
                event_category: "cta",
                event_action: "link_account",
                event_label: "callout section",
                text: C(w.cph_loggedin_nochar_button).toLowerCase(),
                link_url: B,
                element_placement: `callout section - ${w.cph_loggedin_nochar_title.defaultMessage}`
              }
            }), (0, b.jsx)("div", {
              className: k ? Ve.rewardsTrackerWithData : Ve.rewardsTracker,
              children: (0, b.jsx)(_e, {})
            }), (0, b.jsx)(c.CalloutSection, {
              header: C(w.cph_callout_feedback_title),
              subheader: C(w.cph_callout_feedback_body),
              type: "button",
              action_text: C(w.cph_callout_feedback_button),
              link: "/gta-online/feedback",
              className: Ve.feedback,
              sectionName: w.cph_callout_feedback_title.defaultMessage
            }), (0, b.jsx)(c.Rating, {
              titleSlug: "GTAOnline",
              className: Ve.rating
            })]
          })]
        })
      }), l)
    },
    7044: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SecondaryNavContent"
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
                value: "branchTags"
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
                  value: "branchTags"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "branchTags"
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
                        value: "payloadRepresentedAsTree"
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
          end: 225
        }
      };

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      a.loc.source = {
        body: "query SecondaryNavContent($url: String!, $locale: String!, $branchTags: [String]) {\n    metaUrlInfo(url: $url, locale: $locale, branchTags: $branchTags) {\n        tina {\n            payloadRepresentedAsTree\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function t(e, a) {
        for (var r = 0; r < e.definitions.length; r++) {
          var s = e.definitions[r];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.SecondaryNavContent = function(e, a) {
        var r = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (r.loc = e.loc);
        var o = s[a] || new Set,
          c = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var _ = i;
          i = new Set, _.forEach((function(e) {
            c.has(e) || (c.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var s = t(e, a);
          s && r.definitions.push(s)
        })), r
      }(a, "SecondaryNavContent")
    },
    5828: (e, a, r) => {
      var s = {
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T1.jpg": 5900,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T2.jpg": 8820,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T3.jpg": 4368,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4.jpg": 6980,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_CASH.jpg": 836,
        "./PROGRESS_BUSINESSES_PREVIEW_AFTER_HOURS_REWARD_T4_RP.jpg": 3020,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T1.jpg": 1932,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T2.jpg": 2924,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T3.jpg": 9900,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4.jpg": 2404,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_CASH.jpg": 556,
        "./PROGRESS_BUSINESSES_PREVIEW_BIKERS_REWARD_T4_RP.jpg": 4703,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T1.jpg": 4516,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T2.jpg": 9984,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T3.jpg": 9840,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4.jpg": 3092,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_CASH.jpg": 6999,
        "./PROGRESS_BUSINESSES_PREVIEW_CONTRACT_REWARD_T4_RP.jpg": 272,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T1.jpg": 6916,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T2.jpg": 7480,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T3.jpg": 672,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4.jpg": 8020,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_CASH.jpg": 4676,
        "./PROGRESS_BUSINESSES_PREVIEW_DRUG_WARS_REWARD_T4_RP.jpg": 7520,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T1.jpg": 356,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T2.jpg": 1168,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T3.jpg": 1940,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4.jpg": 4276,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_CASH.jpg": 1304,
        "./PROGRESS_BUSINESSES_PREVIEW_FINANCE_FELONY_REWARD_T4_RP.jpg": 6680,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T1.jpg": 1188,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T2.jpg": 8332,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T3.jpg": 1780,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4.jpg": 4812,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_CASH.jpg": 8804,
        "./PROGRESS_BUSINESSES_PREVIEW_GUNRUNNING_REWARD_T4_RP.jpg": 2080,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T1.jpg": 7863,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T2.jpg": 3188,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T3.jpg": 976,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4.jpg": 6439,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_CASH.jpg": 7152,
        "./PROGRESS_BUSINESSES_PREVIEW_IMPORTEXPORT_REWARD_T4_RP.jpg": 1428,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T1.jpg": 844,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T2.jpg": 2108,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T3.jpg": 8824,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4.jpg": 7088,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_CASH.jpg": 584,
        "./PROGRESS_BUSINESSES_PREVIEW_SALVAGE_YARD_REWARD_T4_RP.jpg": 5760,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T1.jpg": 1036,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T2.jpg": 4444,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T3.jpg": 5084,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4.jpg": 7276,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_CASH.jpg": 8896,
        "./PROGRESS_BUSINESSES_PREVIEW_SMUGGLERS_REWARD_T4_RP.jpg": 5748,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T1.jpg": 7599,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T2.jpg": 9808,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T3.jpg": 4399,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4.jpg": 904,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_CASH.jpg": 1032,
        "./PROGRESS_CONTACT_PREVIEW_GERALDS_REWARD_T4_RP.jpg": 3452,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T1.jpg": 3608,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T2.jpg": 9516,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T3.jpg": 1376,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4.jpg": 4564,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_CASH.jpg": 1896,
        "./PROGRESS_CONTACT_PREVIEW_LOWRIDERS_REWARD_T4_RP.jpg": 6140,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T1.jpg": 3220,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T2.jpg": 1388,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T3.jpg": 2163,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4.jpg": 6212,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_CASH.jpg": 3668,
        "./PROGRESS_CONTACT_PREVIEW_MADRAZO_REWARD_T4_RP.jpg": 6172,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T1.jpg": 4820,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T2.jpg": 1116,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T3.jpg": 6276,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4.jpg": 5212,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_CASH.jpg": 6116,
        "./PROGRESS_CONTACT_PREVIEW_PAPER_TRAIL_REWARD_T4_RP.jpg": 9e3,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T1.jpg": 2044,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T2.jpg": 8660,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T3.jpg": 6192,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4.jpg": 5732,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_CASH.jpg": 1880,
        "./PROGRESS_CONTACT_PREVIEW_SIMEONS_REWARD_T4_RP.jpg": 7524,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T1.jpg": 8236,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T2.jpg": 2876,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T3.jpg": 9540,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4.jpg": 5183,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_CASH.jpg": 6364,
        "./PROGRESS_CONTACT_PREVIEW_SUMMER2023_REWARD_T4_RP.jpg": 9268,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T1.jpg": 3516,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T2.jpg": 1876,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T3.jpg": 7684,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4.jpg": 1324,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_CASH.jpg": 8220,
        "./PROGRESS_CONTACT_PREVIEW_SUPERYACHT_REWARD_T4_RP.jpg": 1660,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T1.jpg": 3693,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T2.jpg": 3780,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T3.jpg": 9056,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4.jpg": 6444,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 8423,
        "./PROGRESS_HEISTS_PREVIEW_CASINO_REWARD_T4_RP.jpg": 4864,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T1.jpg": 1399,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T2.jpg": 6356,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T3.jpg": 4e3,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4.jpg": 6228,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_CASH.jpg": 4784,
        "./PROGRESS_HEISTS_PREVIEW_CAYO_REWARD_T4_RP.jpg": 3984,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T1.jpg": 5736,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T2.jpg": 6036,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T3.jpg": 7532,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4.jpg": 7556,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_CASH.jpg": 5696,
        "./PROGRESS_HEISTS_PREVIEW_DOOMSDAY_REWARD_T4_RP.jpg": 5192,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T1.jpg": 6396,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T3.jpg": 44,
        "./PROGRESS_HEISTS_PREVIEW_ORGINAL_REWARD_T4.jpg": 4432,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T1.jpg": 8620,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T2.jpg": 9456,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T3.jpg": 3644,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4.jpg": 4024,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH.jpg": 6760,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_LARGE.jpg": 8980,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_CASH_SMALL.jpg": 5804,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP.jpg": 1796,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_LARGE.jpg": 9304,
        "./PROGRESS_HEISTS_PREVIEW_ORIGINAL_REWARD_T4_RP_SMALL.jpg": 3348,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T1.jpg": 2368,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T2.jpg": 4624,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T3.jpg": 5100,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4.jpg": 2460,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_CASH.jpg": 5628,
        "./PROGRESS_MISC_PREVIEW_VEHICLE_REWARD_T4_RP.jpg": 8108,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T1.jpg": 1440,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T2.jpg": 5048,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T3.jpg": 2220,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4.jpg": 2648,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_CASH.jpg": 8888,
        "./PROGRESS_MISC_PREVIEW_WEAPONS_REWARD_T4_RP.jpg": 940,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T1.jpg": 7908,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T2.jpg": 9803,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T3.jpg": 3564,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4.jpg": 9223,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_CASH.jpg": 6740,
        "./PROGRESS_SERIES_PREVIEW_ADVERSARY_REWARD_T4_RP.jpg": 8192,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T1.jpg": 8368,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T2.jpg": 7948,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T3.jpg": 7253,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4.jpg": 9472,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_CASH.jpg": 9036,
        "./PROGRESS_SERIES_PREVIEW_ARENAWAR_REWARD_T4_RP.jpg": 8228,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T1.jpg": 5148,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T2.jpg": 7708,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T3.jpg": 9220,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4.jpg": 8176,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_CASH.jpg": 9120,
        "./PROGRESS_SERIES_PREVIEW_DEATHMATCHES_REWARD_T4_RP.jpg": 3944,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T1.jpg": 9180,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T2.jpg": 6004,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T3.jpg": 5208,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4.jpg": 2063,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_CASH.jpg": 8676,
        "./PROGRESS_SERIES_PREVIEW_RACING_REWARD_T4_RP.jpg": 4384,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T1.jpg": 4716,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T2.jpg": 2012,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T3.jpg": 6861,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4.jpg": 1652,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_CASH.jpg": 5316,
        "./PROGRESS_SERIES_PREVIEW_SURVIVALS_REWARD_T4_RP.jpg": 7188,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T1.jpg": 4036,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T2.jpg": 9514,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T3.jpg": 3904,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4.jpg": 1420,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_CASH.jpg": 2264,
        "./PROGRESS_SOCIAL_PREVIEW_CASINO_REWARD_T4_RP.jpg": 1364,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T1.jpg": 804,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T2.jpg": 7228,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T3.jpg": 444,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4.jpg": 740,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_CASH.jpg": 3412,
        "./PROGRESS_SOCIAL_PREVIEW_TUNERS_REWARD_T4_RP.jpg": 8776
      };

      function t(e) {
        var a = o(e);
        return r(a)
      }

      function o(e) {
        if (!r.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      t.keys = function() {
        return Object.keys(s)
      }, t.resolve = o, e.exports = t, t.id = 5828
    },
    452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    },
    5900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5cfd7d54ad7c2528b508e2b22a484a4.jpg"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e9ffa532ef5016daad8493cd346628ae.jpg"
    },
    4368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbb9dd70f8930d047a63131d014ca99e.jpg"
    },
    6980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8df45133877b2d2b6e8c8d89dcfc93c.jpg"
    },
    836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    3020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4b3d2387f39a68bb5f76eb71cea9d004.jpg"
    },
    2924: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e60904ee697a602c959024d456d842d8.jpg"
    },
    9900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f45f3594fe147f50d1192a2ac82fe409.jpg"
    },
    2404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5175a1a707b9727fdfe3b3004749afff.jpg"
    },
    556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    4703: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    4516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac19ba9d81b559aae33c79b248852edc.jpg"
    },
    9984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceea26325917ceb21c0f696dda936d83.jpg"
    },
    9840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36598cdddf8e4e48ea2088143218cb70.jpg"
    },
    3092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/873907cfb98d823251c060f38a0f94c1.jpg"
    },
    6999: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    6916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cbb36284927e01e17bc4cebcb15f7a3b.jpg"
    },
    7480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0dac3d506a6bbc45c1e69057116f090f.jpg"
    },
    672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70fa0fecfc148d254c5d4a3d0597014a.jpg"
    },
    8020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36c8b2a88cd5c85a910409753193e082.jpg"
    },
    4676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    7520: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/738ff75ecbbd0b10f520008cf0ed55e4.jpg"
    },
    1168: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9af6f453dad2c06a02167c55d70e2857.jpg"
    },
    1940: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56300c3ecd82257e0cc4daf401b68484.jpg"
    },
    4276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9dc75558f49b4294336d784804ebf33.jpg"
    },
    1304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    6680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0fe57a53f63a5052a1b61ebc2e2aa0c.jpg"
    },
    8332: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/956f4cb0e9f776e992f8746d19e21d36.jpg"
    },
    1780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c4c0606b30d7ceff30c20678f2f406d.jpg"
    },
    4812: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0ea538130c115745d6c663e34235300e.jpg"
    },
    8804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    2080: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    7863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/329ba3f5dd165e867e3bffb4a1313a4b.jpg"
    },
    3188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81ff30c53e70ab68713a91755a904448.jpg"
    },
    976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/20986a8f9b5eff60740abbbcaf5763a1.jpg"
    },
    6439: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46fd71f9a71bbe6801ee02f2d831896a.jpg"
    },
    7152: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    1428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab17ff9e69584963068de0d98e8fe15a.jpg"
    },
    2108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/66bf9fc50889cf4565af70b2bd966736.jpg"
    },
    8824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28009d14aa0c5105aa7f0428fde05dff.jpg"
    },
    7088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/83821cbe9fbdd65c74fefff8b9e6b3a1.jpg"
    },
    584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    5760: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9f141dcc88ad8f93e988fc7be7a115d6.jpg"
    },
    4444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/236ce971c6378875cf84505688107dc1.jpg"
    },
    5084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e4afb9735018b6ec08bccbaa8ca2ab1.jpg"
    },
    7276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5139857e057cd137a1fcc80142c8e008.jpg"
    },
    8896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    5748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    7599: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9495626fd2e54c715b428ab5a084d67b.jpg"
    },
    9808: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/087f0a5089d563d4cd903fc31997adc3.jpg"
    },
    4399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/953dcaaedefb500d80b5599fe891d649.jpg"
    },
    904: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8d3469e461dfaf53704716cf0c00122b.jpg"
    },
    1032: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    3452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    3608: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ce4e5f5c1e08e403a29056957315fc70.jpg"
    },
    9516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/235ef607bbc5f169e6166094fbbfef20.jpg"
    },
    1376: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/225bcea92ddd1c9528699452b2f327f0.jpg"
    },
    4564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c3abe3172b838ef4238c451e4f32169.jpg"
    },
    1896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    6140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    3220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d7b04f2fd07d8df02ae13ff38f9bd014.jpg"
    },
    1388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04bea6c58ca9aa41fa8ea4b68326a24a.jpg"
    },
    2163: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8bf8db232caaeeb346240890b5a16dd4.jpg"
    },
    6212: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac7f847bf384a736ea24f7c3d8efcdfe.jpg"
    },
    3668: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    6172: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    4820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e7cf9b504b6bcd0e383be9788dbc65b.jpg"
    },
    1116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8e9bfe51ea55e6427b0fff3576de1ee9.jpg"
    },
    6276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7dc74b193ca7f10045ddea5c7d49e7c8.jpg"
    },
    5212: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d680a00ae7fffa73f72b07db2a614f43.jpg"
    },
    6116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    9e3: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    2044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/17ae05873860d112435453bd173d5bdb.jpg"
    },
    8660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/737e68b4d76af1eacc848e7c6a963bb3.jpg"
    },
    6192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c5c74e61cbc6654ab3bce73a44a1b807.jpg"
    },
    5732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e44c0719cc6c8fa967ae4411b9002429.jpg"
    },
    1880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    7524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    8236: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd75fc7fb83019e8c526dc521934be46.jpg"
    },
    2876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29b7ca2cb558db181179f586337f027f.jpg"
    },
    9540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8421dda7574225355d6890559c56d703.jpg"
    },
    5183: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d9054e4a51b6f5edaed278f85849e87a.jpg"
    },
    6364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    9268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    3516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f26193017bef03e33259bc6e8b6a301.jpg"
    },
    1876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2105e961212bb2f553b78a8d98ca24f8.jpg"
    },
    7684: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4e803de2820b2174e7d6b81c150aa9f7.jpg"
    },
    1324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f8b819cc8bc440a40536052f10430e6.jpg"
    },
    8220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    1660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    3693: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/410f33763371922183d17770a4bbf045.jpg"
    },
    3780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a64e5693c9fd896ef4b44db42cdfb0a2.jpg"
    },
    9056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eb96774621ed85029a0dac88015f5623.jpg"
    },
    6444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0675692943c33185c823650fb2f7d59a.jpg"
    },
    8423: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    4864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1399: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/704ae57732ba4aeb39b14c2a62eb5833.jpg"
    },
    6356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/69cf4dfeaa6b7259a19d11eb34b8ad12.jpg"
    },
    4e3: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d552466403ac9b72164dbbc7ea108d6d.jpg"
    },
    6228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4ae3a45ad0be6ad0c5f52586d6b3206f.jpg"
    },
    4784: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    3984: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    5736: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f3cd7bceb936bb313fbaa15e89098a8.jpg"
    },
    6036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/25b661f5c750aeb7fa588fafba90f1cc.jpg"
    },
    7532: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d200b610eaff3bc9afb0e8a1a8bf742b.jpg"
    },
    7556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc0954f8adbca56f82b725bdc78299e8.jpg"
    },
    5696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    5192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    6396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    44: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    4432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    8620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7d2f7159e42c4941f90cc07ef61f4bcb.jpg"
    },
    9456: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c3fcd27f71840154cd5e70cf58dfe87.jpg"
    },
    3644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2618797c7dc1e931867b1d8c4ae4be2.jpg"
    },
    4024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b332167e59f22f23080b67f8112e82b1.jpg"
    },
    6760: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    8980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    5804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    1796: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    9304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    3348: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    2368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/568a5ea8d40c934070ccb0d027415537.jpg"
    },
    4624: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dc26b040f6c53b4212633bfc75c69b57.jpg"
    },
    5100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8c92e45735dea4bf0f824a0fc9700949.jpg"
    },
    2460: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56b4a94be3120ac7de3432404984e52a.jpg"
    },
    5628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    8108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    1440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/119d114ce10c16621e545c2650b5912e.jpg"
    },
    5048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1db4f57aeface686dfd0d036908b341e.jpg"
    },
    2220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9e8a66b52eaed1eb5e7063b0f92f65e6.jpg"
    },
    2648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567f38ce806bc29390ba84ea1bf4a1a1.jpg"
    },
    8888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    940: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    7908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/42c9214da8b17b7f4cc9c05b2b511e3b.jpg"
    },
    9803: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4f2ee06e20eea5691910888a58c25c.jpg"
    },
    3564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/317683a193310bb03e30549f72ca70aa.jpg"
    },
    9223: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/53cd24ba391ab62571bcecfb9fcd9101.jpg"
    },
    6740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    8192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    8368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a0281a740158d6596585ac6de511af6.jpg"
    },
    7948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b6d8af1607180dc21ed96dd950dc0cb.jpg"
    },
    7253: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8b4ac9af863cb3e25ec1776ddbd95303.jpg"
    },
    9472: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/00bb0938efa404a0446c0390dfe904cf.jpg"
    },
    9036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    8228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    5148: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a8e7b43b4c2a827ba86e81c6689db03.jpg"
    },
    7708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9cc957c5eadfb452622edb7bc7ce5555.jpg"
    },
    9220: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/06d481de52d0714190ca4395425c457d.jpg"
    },
    8176: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e83d4dfaa73d3ed72b788705437a431.jpg"
    },
    9120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    3944: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    9180: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/92fbe71bb5f4b82b5c670de1ad251bea.jpg"
    },
    6004: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5fc7772067f8595434121b7270b0219b.jpg"
    },
    5208: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9503963789b50259c53761aba542ba72.jpg"
    },
    2063: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/664e7d6817fada6320e966b12e2ad12d.jpg"
    },
    8676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    4384: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    4716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f0266bf15e0340c0622f595b8b99cd80.jpg"
    },
    2012: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fdafa37eedafeb1bae5be3fcb8eb2e28.jpg"
    },
    6861: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/28e4fd8cc9739277d38720566cf02775.jpg"
    },
    1652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e1a329ec5db576dda1663bf4438ea155.jpg"
    },
    5316: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/365e0b707dc0da35294d88638da5908e.jpg"
    },
    7188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38c7bfa3312b1d7a5994ae262b04856e.jpg"
    },
    4036: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a18049e11e58c7b0f18e4df61398aa62.jpg"
    },
    9514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1640f11865a16ab8e9aa7c5bcd9ae17b.jpg"
    },
    3904: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d9ddb3bff2a20c6e89674a9767ba324.jpg"
    },
    1420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6f7dce0838752eac6bc6a9d82c37ba0.jpg"
    },
    2264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    1364: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0c1a2047eb6f0b36a6bf448c3f41da18.jpg"
    },
    7228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d5c00db0a81daba487614068eb9314c.jpg"
    },
    444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/884600c480f1c290be4e203718263556.jpg"
    },
    740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5ef527fec88fb3e84bb737bf423e53e2.jpg"
    },
    3412: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51a05992c53c97adb2669426411b8af.jpg"
    },
    8776: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7eb2ff2bc305d0b4149751002da65e2b.jpg"
    },
    3716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e4f1388056b8ee74c87bc86b2107648b.svg"
    }
  }
]);
//# sourceMappingURL=bea22ba0309569f3a48c0314f107172b.js.map