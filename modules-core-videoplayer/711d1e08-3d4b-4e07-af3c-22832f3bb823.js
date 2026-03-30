try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "711d1e08-3d4b-4e07-af3c-22832f3bb823", e._sentryDebugIdIdentifier = "sentry-dbid-711d1e08-3d4b-4e07-af3c-22832f3bb823")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1030], {
    21030: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        PlayerWithInfo: () => k,
        VideoWithPlaylist: () => E,
        default: () => A,
        useVideoData: () => p.zY
      });
      var r = t(42295),
        n = t(10181),
        s = t(71127),
        i = t(56990);
      const o = (0, i.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        c = "rockstargames-modules-core-videoplayerea8cf4797c830e5b5dad68b2ec814e67",
        l = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","character_card_a11y_intro":"Charakterkarte:","character_card_a11y_player":"Spieler {player}.","character_card_a11y_rank":"Rang {rank}.","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","character_card_a11y_intro":"Character Card:","character_card_a11y_player":"Player {player}.","character_card_a11y_rank":"Rank {rank}.","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details_amp":"You are already receiving newsletter updates at this email address. Manage your communication preferences at any time in your account settings.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details_amp":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your communication preferences at any time in your account settings.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","character_card_a11y_intro":"Tarjeta del personaje:","character_card_a11y_player":"Jugador {player}.","character_card_a11y_rank":"Nivel {rank}.","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","character_card_a11y_intro":"Tarjeta de personaje:","character_card_a11y_player":"Jugador: {player}","character_card_a11y_rank":"Nivel: {rank}","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S\'ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","character_card_a11y_intro":"Carte de personnage :","character_card_a11y_player":"Joueur {player}.","character_card_a11y_rank":"Rang {rank}.","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","character_card_a11y_intro":"Scheda personaggio:","character_card_a11y_player":"Giocatore {player}.","character_card_a11y_rank":"Rango {rank}.","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","character_card_a11y_intro":"キャラクターカード：","character_card_a11y_player":"プレイヤー {player}","character_card_a11y_rank":"ランク {rank}","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","character_card_a11y_intro":"캐릭터 카드:","character_card_a11y_player":"플레이어 {player}.","character_card_a11y_rank":"랭크 {rank}.","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","character_card_a11y_intro":"Karta postaci:","character_card_a11y_player":"Gracz {player}.","character_card_a11y_rank":"Ranga {rank}.","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","character_card_a11y_intro":"Cartão de Personagem:","character_card_a11y_player":"Jogador {player}.","character_card_a11y_rank":"Nível {rank}.","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","character_card_a11y_intro":"Карточка персонажа:","character_card_a11y_player":"Игрок {player}.","character_card_a11y_rank":"Уровень {rank}.","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","character_card_a11y_intro":"角色卡：","character_card_a11y_player":"玩家{player}。","character_card_a11y_rank":"等级{rank}。","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games邮件通知，请通过发送到您订阅时使用的电子邮件地址中的链接验证您的电子邮件地址。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自Rockstar Games以及我们附属公司的游戏公告和更新、特别活动与优惠的信息，及更多内容。","ns_cta_title":"订阅Rockstar Games邮件通知","ns_cta_title_twitchdrops":"不要错过下一份GTA在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","character_card_a11y_intro":"角色卡：","character_card_a11y_player":"玩家 {player}。","character_card_a11y_rank":"等級 {rank}。","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        _ = (d = ({
          children: e,
          to: a = "#",
          reloadDocument: t = !1,
          alt: l = "",
          autoBlank: _ = !1,
          role: d = "link",
          onClick: u = () => {},
          focused: m = !1,
          ...b
        }) => {
          const p = (0, s.useRef)(null),
            f = (0, i.useIntl)(),
            g = !/^(https?|mailto):/i.test(a),
            k = /^#/.test(a),
            y = b?.target ?? (_ ? "_blank" : "_self"),
            {
              ...h
            } = b,
            v = h["aria-current"] ?? !1;
          let w = "";
          if ("aria-label" in h && h["aria-label"] && (w = "_blank" === y ? `${h["aria-label"]} ${f.formatMessage(o.aria_label_open_new_window)}` : h["aria-label"]), (0, s.useEffect)(() => {
              m && p?.current && p.current.focus()
            }, [p?.current, m]), k) {
            const t = e => {
              e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), u && u(e)
            };
            return (0, r.jsxs)("a", {
              title: l,
              href: a,
              onClick: t,
              ...h,
              "aria-label": w,
              "aria-current": v,
              ref: p,
              role: d,
              children: [e, "_blank" === y && !w && (0, r.jsx)("span", {
                className: c,
                children: f.formatMessage(o.aria_label_open_new_window)
              })]
            })
          }
          if (g) return (0, r.jsxs)(n.NavLink, {
            title: l,
            to: a,
            onClick: u,
            ...h,
            "aria-label": w,
            "aria-current": v,
            ref: p,
            reloadDocument: t,
            children: [e, "_blank" === y && !w && (0, r.jsx)("span", {
              className: c,
              children: f.formatMessage(o.aria_label_open_new_window)
            })]
          });
          const x = Object.keys(h).filter(e => !["activeClassName", "key", "end"].includes(e)).reduce((e, a) => ({
            ...e,
            [a]: b[a]
          }), {});
          return "function" == typeof x?.className && delete x.className, (0, r.jsxs)("a", {
            href: a,
            title: l,
            onClick: u,
            target: y,
            ...x,
            "aria-label": w,
            "aria-current": v,
            ref: p,
            role: d,
            children: [e, "_blank" === y && !w && (0, r.jsx)("span", {
              className: c,
              children: f.formatMessage(o.aria_label_open_new_window)
            })]
          })
        }, (0, i.withIntl)(d, l));
      var d, u = t(64805),
        m = t(94257),
        b = t(68517),
        p = t(41881),
        f = t(52542);
      const g = {
          details: "rockstargames-modules-core-videoplayeradbc37c9f4745c8e0c41c73270d19cce",
          embed: "rockstargames-modules-core-videoplayerbbb062c75e63f4ddb7c68732a626283d",
          top: "rockstargames-modules-core-videoplayerbd5679f1dd0e7beb6c8a22d18e4f8521"
        },
        k = (0, i.withIntl)(({
          autoplay: e = !0,
          resolution: a = "_auto",
          videoId: t,
          videoChangeCallback: s,
          titleCrop: i
        }) => {
          const {
            loading: o,
            video: c
          } = (0, p.zY)({
            id: t
          }), [l] = (0, n.useSearchParams)(), d = Number(l.get("start") ?? 0);
          return !c || o ? (0, r.jsx)(m.A, {
            hero: !0,
            titleCrop: i,
            children: (0, r.jsx)(u.A, {})
          }) : (0, r.jsxs)("section", {
            className: g.marquee,
            children: [(0, r.jsx)("div", {
              className: g.embed,
              children: (0, r.jsx)(b.A, {
                id: c.id,
                start: d,
                context: "site",
                autoplay: e,
                resolution: a,
                wrapper: !1,
                videoChangeCallback: s
              })
            }), (0, r.jsxs)("div", {
              className: g.details,
              children: [(0, r.jsxs)("div", {
                className: g.top,
                children: [(0, r.jsx)("h5", {
                  children: (0, r.jsx)(_, {
                    to: `/videos?type=game&gameId=${c.game.id}`,
                    style: {
                      pointerEvents: c?.youtubeOnly ? "none" : "auto"
                    },
                    children: c.game.title
                  })
                }), (0, r.jsx)("time", {
                  dateTime: c.created,
                  children: c.createdFormatted
                })]
              }), (0, r.jsx)("h2", {
                children: c.title
              }), (0, r.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: c.description
                }
              })]
            })]
          })
        }, f);
      var y = t(10336),
        h = t.n(y),
        v = t(61874),
        w = t(58136),
        x = t(78781),
        j = t(22484),
        z = t(38308);
      const N = {
          active: "rockstargames-modules-core-videoplayerdfa18a3e1121b115ce28719e687c9c92",
          activeVideoTextIndicator: "rockstargames-modules-core-videoplayere0b92a537be778f508517156e23d7534",
          iconAndThumbnail: "rockstargames-modules-core-videoplayerfa8d856b3f040699d4a834912d97a787",
          itemContainer: "rockstargames-modules-core-videoplayerdafe0618826d8c0f25d33bfae2bf94e1",
          pillBtn: "rockstargames-modules-core-videoplayere544de569721b5dfe7e6e8a1d344571e",
          playIcon: "rockstargames-modules-core-videoplayerfdb5a681fcfe3ce0b4a20b26192a5933",
          playIconContainer: "rockstargames-modules-core-videoplayerd8ff1f1cd991f0b66db4f3ec3ce7f339",
          selected: "rockstargames-modules-core-videoplayere731732dae75541ae9db02ecf2259df0",
          textContainer: "rockstargames-modules-core-videoplayere971dcb28fd73512230ca6fc8174a047",
          thumbnail: "rockstargames-modules-core-videoplayerf52ea4c2866961cfd4e53bae19f8f4fa"
        },
        R = (0, s.forwardRef)(({
          title: e,
          thumbnail: a,
          active: t = !1,
          isModal: n = !1,
          onClick: s = () => {}
        }, o) => {
          const {
            formatMessage: c
          } = (0, i.useIntl)();
          return (0, r.jsxs)("button", {
            ref: o,
            className: [N.itemContainer, t ? N.active : ""].filter(e => e).join(" "),
            onClick: s,
            type: "button",
            "data-context": n ? "modal" : "standardPage",
            children: [(0, r.jsxs)("div", {
              className: N.iconAndThumbnail,
              children: [(0, r.jsx)("div", {
                className: N.playIconContainer,
                children: (0, r.jsx)(z.A, {
                  className: N.playIcon
                })
              }), (0, r.jsx)("div", {
                className: N.thumbnail,
                style: {
                  "--background-image": `url(${a})`
                },
                children: t && (0, r.jsx)("span", {
                  className: N.activeVideoTextIndicator,
                  children: c(j.A.videoplayer_playlist_active_badge)
                })
              })]
            }), (0, r.jsx)("div", {
              className: N.textContainer,
              children: (0, r.jsx)("h3", {
                children: e
              })
            })]
          })
        });
      R.displayName = "VideoPlaylistItem";
      const G = R,
        S = {
          pillBtn: "rockstargames-modules-core-videoplayerfc9f31bbc1cdb1312dcef83948284b90",
          playlist: "rockstargames-modules-core-videoplayere35de9890266722d0f0c1be67e686fb3",
          selected: "rockstargames-modules-core-videoplayerd975877cfeee6736ba88d2392da66b8c",
          userNotScrolledToBottomOfList: "rockstargames-modules-core-videoplayerb4d30838275ac273c053480004e06f0d",
          userNotScrolledToTopOfList: "rockstargames-modules-core-videoplayere54083a9b2e4d70483a813474f5b55a8",
          videos: "rockstargames-modules-core-videoplayerc1a8bf10574d742b1e2b9746acf41ca9"
        },
        C = ({
          title: e,
          activeVideoId: a,
          videos: t = [],
          isModal: i = !1,
          onVideoItemClick: o = () => {}
        }) => {
          const c = (0, n.useLocation)(),
            {
              track: l
            } = (0, v.useGtmTrack)(),
            _ = (0, w.useLocale)(),
            d = (0, s.useRef)(null),
            u = (0, s.createRef)(),
            [m, b] = (0, s.useState)(null),
            [p, f] = (0, s.useState)(a),
            [g, k] = (0, s.useState)(!0),
            [y, h] = (0, s.useState)(!1),
            x = (0, s.useCallback)((e, a) => () => {
              o && o(e, a), f(e), l({
                event: "video_thumbnail_click",
                link_url: `${c.pathname}?video=${e}`,
                video_id: e,
                video_title: t[a].title,
                video_type: t[a].groupType,
                video_language: _,
                element_placement: "video playlist"
              })
            }, [o, f]);
          return (0, s.useEffect)(() => {
            if (!m) return;
            const e = m.offsetTop - d.current.offsetTop;
            d.current.scroll({
              top: e,
              behavior: "smooth"
            })
          }, [m, d]), (0, s.useEffect)(() => {
            b(u?.current)
          }, [u]), (0, s.useEffect)(() => {
            f(a)
          }, [a]), (0, r.jsxs)("section", {
            className: S.playlist,
            "data-context": i ? "modal" : "standardPage",
            children: [(0, r.jsx)("h4", {
              children: e
            }), (0, r.jsx)("div", {
              ref: d,
              className: [S.videos, g ? "" : S.userNotScrolledToTopOfList, y ? "" : S.userNotScrolledToBottomOfList].filter(e => e).join(" "),
              onScroll: ({
                target: {
                  scrollTop: e,
                  scrollHeight: a,
                  clientHeight: t
                }
              }) => {
                0 === e ? k(!0) : e + t === a ? h(!0) : (k(!1), h(!1))
              },
              children: t.map((e, a) => (0, r.jsx)(G, {
                ref: e.id === p ? u : null,
                title: e.title,
                thumbnail: `${e.screencap}?im=Resize=400`,
                active: e.id === p,
                onClick: x(e.id, a),
                isModal: i
              }, e.id))
            })]
          })
        },
        T = {
          videoWithPlaylistContainer: "rockstargames-modules-core-videoplayerf8afc9cc531b89e7796a8659b33faa7d"
        },
        E = (0, i.withIntl)(({
          className: e,
          locale: a,
          id: t,
          tagIds: i = [],
          playlistTitle: o,
          groupTypes: c = ["trailer", "feature"],
          autoplay: l = !0,
          currentVideoId: _,
          isModal: d = !1
        }) => {
          const {
            track: m
          } = (0, v.useGtmTrack)(), p = {
            groupTypes: c,
            tagIds: i,
            locale: a
          }, [f, g] = (0, n.useSearchParams)(), k = Number(f.get("start") ?? 0), [y, j] = (0, s.useState)(0), {
            loading: z,
            data: N
          } = (0, w.useQuery)(x.videos, {
            variables: p
          }), R = N?.videos?.results;
          return (0, s.useEffect)(() => {
            const e = f.get("video");
            if (!R || !e) return;
            const a = h().findIndex(R, ({
              id: a
            }) => a === e); - 1 !== a ? (j(a), d && m({
              event: "trackPageview"
            })) : g({
              video: R[0].id
            })
          }, [f.get("video"), R]), (0, s.useEffect)(() => {
            const e = f.get("video");
            if (R && (_ || e)) {
              const a = R.find(({
                  id: a
                }) => e ? a === e : a === _),
                t = R.indexOf(a);
              a && t && y !== t && j(t)
            }
          }, [R]), !z && N && R ? (0, r.jsxs)("section", {
            className: [T.videoWithPlaylistContainer, e ?? ""].filter(e => e).join(" "),
            id: t ?? "",
            "data-context": d ? "modal" : "standardPage",
            children: [(0, r.jsx)(b.A, {
              id: R[y]?.id,
              context: "site",
              autoplay: l,
              wrapper: !1,
              start: k,
              onVideoComplete: () => {
                if (d) g({
                  video: R[y + 1 < R?.length ? y + 1 : 0].id
                });
                else {
                  const e = y + 1;
                  e < R?.length && j(e)
                }
              },
              locale: a,
              isModal: d
            }), (0, r.jsx)(C, {
              activeVideoId: R[y]?.id,
              title: o,
              videos: R,
              onVideoItemClick: e => {
                if (d) g({
                  video: e
                });
                else {
                  const a = R.findIndex(a => a.id === e); - 1 !== a ? j(a) : console.warn("Video ID not found in results.")
                }
              },
              isModal: d
            })]
          }) : (0, r.jsx)(u.A, {})
        }, f),
        A = b.A
    },
    78781: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && a.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          t(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          t(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          t(e, a)
        })
      }
      a.loc.source = {
        body: "query videos($locale: String!, $tagIds: [Int], $groupTypes: [String]) {\n    videos(\n        locale: $locale\n        tagIds: $tagIds\n        limit: 100\n        groupTypes: $groupTypes\n    ) {\n        results {\n            title\n            id\n            screencap\n            groupType\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == a) return r
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), r[e.name.value] = a
        }
      }), e.exports = a, e.exports.videos = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = r[a] || new Set,
          i = new Set,
          o = new Set;
        for (s.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return i.forEach(function(a) {
          var r = n(e, a);
          r && t.definitions.push(r)
        }), t
      }(a, "videos")
    }
  }
]);