try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4c7a772f-d5a9-453c-a27d-217977b44b77", e._sentryDebugIdIdentifier = "sentry-dbid-4c7a772f-d5a9-453c-a27d-217977b44b77")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1082], {
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    62759: (e, a, t) => {
      t.r(a), t.d(a, {
        CharacterProfile: () => xe,
        LanguageSelector: () => k,
        Menu: () => pe,
        MenuButton: () => he,
        ProfileSwitcher: () => ve
      });
      var s = t(71127),
        r = t(86713),
        n = t(78618),
        o = t(81788);
      const i = (0, o.defineMessages)({
        aria_label_open_new_window: {
          id: "aria_label_open_new_window",
          defaultMessage: "(Opens in a new window)"
        }
      });
      var c = t(9623);
      const l = "rockstargames-modules-core-headerea8cf4797c830e5b5dad68b2ec814e67",
        d = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}');
      var _ = t(25854);
      const u = (m = e => {
        let {
          children: a,
          to: t = "#",
          reloadDocument: r = !1,
          alt: n = "",
          autoBlank: d = !1,
          role: u = "link",
          onClick: m = () => {},
          focused: f = !1,
          ...g
        } = e;
        const b = (0, s.useRef)(null),
          p = (0, o.useIntl)(),
          h = !/^(https?|mailto):/i.test(t),
          k = /^#/.test(t),
          v = g?.target ?? (d ? "_blank" : "_self"),
          {
            ...w
          } = g;
        let x = "";
        if ("aria-label" in w && w["aria-label"] && (x = "_blank" === v ? `${w["aria-label"]} ${p.formatMessage(i.aria_label_open_new_window)}` : w["aria-label"]), (0, s.useEffect)((() => {
            f && b?.current && b.current.focus()
          }), [b?.current, f]), k) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), m && m(e)
          };
          return (0, _.jsxs)("a", {
            title: n,
            href: t,
            onClick: e,
            ...w,
            "aria-label": x,
            ref: b,
            role: u,
            children: [a, "_blank" === v && !x && (0, _.jsx)("span", {
              className: l,
              children: p.formatMessage(i.aria_label_open_new_window)
            })]
          })
        }
        if (h) return (0, _.jsxs)(c.NavLink, {
          title: n,
          to: t,
          onClick: m,
          ...w,
          "aria-label": x,
          ref: b,
          reloadDocument: r,
          children: [a, "_blank" === v && !x && (0, _.jsx)("span", {
            className: l,
            children: p.formatMessage(i.aria_label_open_new_window)
          })]
        });
        const y = Object.keys(w).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
          ...e,
          [a]: g[a]
        })), {});
        return "function" == typeof y?.className && delete y.className, (0, _.jsxs)("a", {
          href: t,
          title: n,
          onClick: m,
          target: v,
          ...y,
          "aria-label": x,
          ref: b,
          role: u,
          children: [a, "_blank" === v && !x && (0, _.jsx)("span", {
            className: l,
            children: p.formatMessage(i.aria_label_open_new_window)
          })]
        })
      }, (0, o.withIntl)(m, d));
      var m, f = t(2918);
      const g = (0, o.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        b = {
          pillBtn: "rockstargames-modules-core-headere34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-modules-core-headere1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-modules-core-headerb641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-modules-core-headera9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-modules-core-headeraa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-modules-core-headerb4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-modules-core-headerc64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-modules-core-headerdb1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-modules-core-headerfe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-modules-core-headerae32febd9789e79c804b2679d25e8a65",
          dropdownContainer: "rockstargames-modules-core-headerab0cc073180383d3d5e4bee00eaa311f",
          dropdown: "rockstargames-modules-core-headercb93b1e1dbe15862e05455dc78f5ec25"
        },
        p = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","profile_silhouette_mugshot":"Silhouette mugshot","sc_link_account":"Account","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell or Share My Personal Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        h = e => (0, o.withIntl)(e, p),
        k = h((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: i,
            location: c,
            parent: l = "element",
            onLanguageChange: d,
            ...m
          } = e;
          const {
            track: p
          } = (0, f.useGtmTrack)(), h = (0, o.useIntl)(), [k] = (0, o.getLocale)(), [v, w] = (0, s.useState)(!1), x = (0, s.useRef)(null), [y, C] = (0, s.useState)(0), S = "ontouchstart" in window || navigator?.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0, j = e => {
            if (i && i(!1), k.subdomaincom === e || "none" === e) return void(i && i(!1));
            const a = o.locales.find((a => a.subdomaincom === e));
            a && d?.({
              selectedLocale: a,
              track: p,
              parent: l
            })
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === v && w(!1)
          }), [t]), (0, s.useEffect)((() => {
            x.current && C(x.current.scrollHeight)
          }), [x]), "function" != typeof d ? null : (0, _.jsxs)(_.Fragment, {
            children: [S && "sc-menu" === a && (0, _.jsx)("div", {
              className: [b.languageSelector, v ? b.open : ""].join(" "),
              "data-theme": a,
              "data-testid": `${l}-language-selector`,
              ...m,
              children: (0, _.jsx)("div", {
                className: b.selectBoxWrapper,
                children: (0, _.jsxs)("select", {
                  className: b.selectBox,
                  onClick: e => e.stopPropagation(),
                  onChange: e => {
                    const a = e.currentTarget.value;
                    j(a)
                  },
                  "aria-label": h.formatMessage(g.language_selector_default),
                  "data-testid": `${l}-language-selector-button`,
                  children: [(0, _.jsx)("option", {
                    className: b.selectBoxOption,
                    value: "none",
                    "data-testid": `${l}-language-selector-current`,
                    children: o.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, _.jsx)(o.FormattedMessage, {
                      ...g.language_selector_default
                    })
                  }), o.locales.map((e => {
                    let {
                      label: a,
                      subdomaincom: t
                    } = e;
                    return (0, _.jsx)("option", {
                      className: b.selectBoxOption,
                      value: t,
                      children: a
                    }, `mobile-${t}`)
                  }))]
                })
              })
            }), (!S || "sc-menu" !== a) && "footer" !== a && (0, _.jsxs)("div", {
              className: [b.languageSelector, v ? b.open : ""].join(" "),
              "data-theme": a,
              "data-testid": `${l}-language-selector`,
              ...m,
              children: [(0, _.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), i && i(!v), w(!v)
                },
                "data-testid": `${l}-language-selector-button`,
                type: "button",
                "aria-label": h.formatMessage(g.language_selector_default),
                children: [(0, _.jsx)("i", {}), (0, _.jsx)("span", {
                  "data-testid": `${l}-language-selector-current`,
                  children: o.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? (0, _.jsx)(o.FormattedMessage, {
                    ...g.language_selector_default
                  })
                })]
              }), (0, _.jsx)("div", {
                className: b.linkWrapper,
                ref: x,
                style: {
                  "--ls-linkWrapper-opened-height": `${y}px`
                },
                children: (0, _.jsx)("div", {
                  className: b.links,
                  children: o.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, _.jsx)(u, {
                      onClick: e => {
                        e.preventDefault(), j(a)
                      },
                      tabIndex: v ? 0 : -1,
                      "data-testid": `${l}-language-selector-${a}`,
                      children: t
                    }, t)
                  }))
                })
              })]
            }), "footer" === a && (0, _.jsxs)("div", {
              className: b.dropdownContainer,
              "data-testid": `${l}-language-selector`,
              ...m,
              children: [(0, _.jsx)(n.Globe, {
                size: "MD",
                label: ""
              }), (0, _.jsx)(r.ms, {
                className: b.dropdown,
                label: h.formatMessage(g.language_selector_default),
                hideLabel: !0,
                placeholder: o.locales.find((e => e.subdomaincom === k.subdomaincom))?.label ?? h.formatMessage(g.language_selector_default),
                onValueChange: e => {
                  j(e)
                },
                renderPortal: !1,
                children: o.locales.map((e => {
                  let {
                    subdomaincom: a,
                    label: t
                  } = e;
                  return (0, _.jsx)(r.c$, {
                    label: t,
                    value: a,
                    testId: `${l}-language-selector-${a}`
                  }, t)
                }))
              })]
            })]
          })
        }));
      var v = t(19690),
        w = t(95966);
      const x = (0, w.makeVar)(!1),
        y = e => x(e),
        C = (0, w.makeVar)(-1),
        S = e => C(e),
        j = (0, w.makeVar)(-1),
        N = e => j(e),
        M = (0, w.makeVar)(!0),
        z = e => M(e),
        E = (0, w.makeVar)(!0),
        R = e => E(e),
        I = () => {
          const e = (0, w.useReactiveVar)(x),
            a = (0, w.useReactiveVar)(C),
            t = (0, w.useReactiveVar)(j),
            r = (0, w.useReactiveVar)(M),
            n = (0, w.useReactiveVar)(E);
          return (0, s.useEffect)((() => {
            n || (e && y(!1), r && (z(!1), S(-1)))
          }), [n]), (0, s.useEffect)((() => {
            !e && n && (r || z(!0))
          }), [e, n]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: y,
            activeSubNavId: a,
            setActiveSubNavId: S,
            subNavExtraHeight: t,
            setSubNavExtraHeight: N,
            navOpened: r,
            setAccountNavOpened: z,
            charListHidden: n,
            setCharListHidden: R
          })), [e, a, t, r, n])
        },
        P = (0, o.defineMessages)({
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
            defaultMessage: "Do Not Sell or Share My Personal Information"
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
          profile_silhouette_mugshot: {
            id: "profile_silhouette_mugshot",
            defaultMessage: "Silhouette mugshot"
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
        });
      var L = t(1571),
        G = t.n(L),
        T = t(40148);
      const O = {
          event: "account_menu_click",
          element_placement: "account menu"
        },
        A = e => ({
          text: e.formatMessage(P.sc_link_help),
          target: "_self",
          ga: {
            ...O,
            text: P.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(P.sc_link_support),
            location: {
              domain: T.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(P.sc_link_legal),
            location: {
              domain: T.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(P.sc_link_privacy_policy),
            location: {
              domain: T.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(P.sc_link_cookies_policy),
            location: {
              domain: T.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(P.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(P.sc_link_do_not_sell_my_information),
            location: {
              domain: T.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var H = t(25459);
      const D = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: r,
            ga: n,
            dataTestId: i,
            isSubLink: c,
            hasNotifications: l = !1,
            onClickCallback: d = () => {},
            tabIndex: u,
            reloadDocument: m = !1,
            onNavigate: g
          } = e;
          const {
            track: b
          } = (0, f.useGtmTrack)(), p = (0, T.A)(), h = (0, o.useIntl)();
          let k = s;
          r && (k = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const v = {
            ...n,
            link_url: k
          };
          return (0, _.jsxs)(H.A, {
            className: c ? "rockstargames-modules-core-headerc2233d027086d54af877493d7d0700bd" : "rockstargames-modules-core-headerf97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": i || "menuLink",
            title: a,
            to: k,
            target: t,
            rel: "noreferrer",
            reloadDocument: m,
            tabIndex: u,
            onClick: e => {
              b(v), d(e)
            },
            onNavigate: g,
            children: [a, l && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headeradbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, _.jsx)("span", {
                className: "rockstargames-modules-core-headere49e290899be3c888ca5a4b6b13736a1",
                children: h.formatMessage(P.nofications_new)
              })
            })]
          })
        },
        $ = e => {
          let {
            id: a,
            text: t,
            target: r,
            href: n,
            location: o,
            ga: i,
            hasNotifications: c = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: u,
            setActiveSubNavId: m,
            setSubNavExtraHeight: g,
            reloadDocument: b = !1,
            onClickCallback: p = () => {},
            onNavigate: h
          } = e;
          const {
            windowWidth: k,
            windowHeight: v
          } = (0, w.useWindowResize)(), {
            track: x
          } = (0, f.useGtmTrack)(), {
            navOpen: y
          } = (0, f.useRockstarUserState)(), C = (0, s.useRef)(null), [S, j] = (0, s.useState)(0), [N, M] = (0, s.useState)(0), [z, E] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === z && E(!0), u === a && E(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!C.current) return;
            j(C?.current?.scrollHeight);
            const e = window.getComputedStyle(C.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), M(a)
            }
          }), [C, k, v]), d.length > 0 ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("button", {
              className: "rockstargames-modules-core-headercc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": l || "menuButton",
              title: t,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": z,
              onClick: e => {
                e.stopPropagation(), x(i), u === a ? (m(-1), g(0)) : (m(a), g(S + N + N))
              },
              children: [(0, _.jsx)("span", {
                className: "rockstargames-modules-core-headerb94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, _.jsx)("span", {
                className: "rockstargames-modules-core-headerff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, _.jsx)("nav", {
              className: "rockstargames-modules-core-headercbf6e64eadb6f965877129d539aa2dcd",
              ref: C,
              "aria-hidden": z,
              style: {
                height: z ? 0 : `${S}px`
              },
              children: d.map((e => (0, s.createElement)(D, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: z || !y ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, _.jsx)(D, {
            text: t,
            target: r,
            href: n,
            location: o,
            ga: i,
            hasNotifications: c,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: p,
            tabIndex: y ? 0 : -1,
            reloadDocument: b,
            onNavigate: h
          })
        },
        B = e => {
          let {
            sc: a,
            location: t,
            onNavigate: r
          } = e;
          const {
            windowWidth: n,
            windowHeight: i
          } = (0, w.useWindowResize)(), c = (0, o.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: d,
            activeSubNavId: u,
            setActiveSubNavId: m,
            subNavExtraHeight: g,
            setSubNavExtraHeight: b
          } = I(), {
            setSelectedCharacterTuple: p,
            navOpen: h
          } = (0, f.useRockstarUserState)(), v = (0, w.useLocale)(), x = (0, w.toScLocaleString)(v), [y, C] = (0, s.useState)(""), S = `${a.login}?returnUrl=${y}&lang=${x}`, j = `${a.signup}&returnUrl=${y}&lang=${x}`, N = (0, s.useMemo)((() => (0, T.A)()), []), M = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(P.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: P.sc_link_sign_in.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(P.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: P.sc_link_join_social_club.defaultMessage,
                element_placement: "account menu"
              },
              dataTestId: "signUpLink"
            }, A(e)])(c, S, j);
            return e
          }), [c, S, j, N]), [z, E] = (0, s.useState)(0), R = (0, s.createRef)(), L = () => {
            if (R.current) {
              const {
                current: e
              } = R, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), E(a + e)
              } else E(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            C(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            p(!1)
          }), []), (0, s.useEffect)((() => {
            L(), G()((() => {
              setTimeout(L, 0)
            }), 300)
          }), [n, i]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("nav", {
              className: "rockstargames-modules-core-headerf300d66bd02f52ac564238ca6125a091",
              children: (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: R,
                style: {
                  "--navWrap-max-height": `${g+z}px`
                },
                children: M.map((e => (0, s.createElement)($, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: b,
                  onNavigate: r,
                  key: e.text
                })))
              })
            }), (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerf30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, _.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: l,
                setLanguageSelectorOpened: e => {
                  m(-1), d(e)
                },
                location: t,
                onLanguageChange: o.onLanguageChange
              })
            })]
          })
        };
      var U = t(98397),
        q = t(38763);
      var W = t(24036),
        V = t.n(W);
      const F = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        K = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: s,
            alt: r,
            testId: n,
            ...o
          } = e;
          const i = F(t),
            c = (0, q.v6)(o, {
              className: V()("rockstargames-modules-core-headerf54750ef62f8600000c94f0caba85986", s),
              "data-testid": n
            });
          return (0, _.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...c,
            children: [(0, _.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-modules-core-headera3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": F(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, _.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: i
              })
            }), (0, _.jsx)("span", {
              "data-testid": "rpCategory:rankValue",
              children: t
            })]
          })
        }));
      let X = null,
        Y = null,
        Z = "";
      X = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", Y = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", Z = "PC Legacy";
      let J = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        Q = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const ee = e => {
        let {
          tagSize: a,
          platform: t
        } = e;
        const {
          src: s,
          alt: r
        } = ((e, a) => {
          const t = a === J.small;
          switch (e) {
            case Q.pc:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case Q.pcAlt:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case Q.ps4:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case Q.ps5:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case Q.xboxOne:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case Q.xboxSeries:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case Q.ps:
            case Q.np:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case Q.xbox:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, a);
        return (0, _.jsx)("img", {
          className: "rockstargames-modules-core-headerb0ff0045ed0326a46ca1e0867d2050c1",
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: s,
          alt: r
        })
      };
      let ae = "";
      ae = "PC LEGACY";
      const te = {
          pcalt: "PC ENHANCED",
          pc: "PC LEGACY",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "XBOX ONE",
          xboxsx: "XBOX SERIES X|S"
        },
        se = "CharacterButton:characterName",
        re = "CharacterButton:avatar",
        ne = e => {
          let {
            characterData: a,
            setMobileCardWidth: r,
            tabIndex: n
          } = e;
          const i = (0, o.useIntl)(),
            {
              currentCharId: c,
              setCurrentCharId: l
            } = (0, f.useRockstarUserState)(),
            {
              track: d
            } = (0, f.useGtmTrack)(),
            u = (0, s.createRef)(),
            {
              platform: m,
              platformUsername: g,
              mugshotUrl: b,
              stats: p
            } = a,
            [h, k] = (0, s.useState)(b),
            [v] = (0, s.useState)(a.index),
            w = c === a.index;
          return (0, s.useEffect)((() => {
            u.current && r && r(u?.current?.offsetWidth)
          }), [u]), (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headerb26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": w,
            onClick: e => {
              e.stopPropagation(), l(v), d({
                event: "character_selector_select",
                text: te[m] ?? m,
                position: v
              })
            },
            ref: u,
            tabIndex: n,
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerd79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, _.jsx)("img", {
                src: h,
                alt: i.formatMessage(P.profile_selector_mugshot, {
                  userName: g
                }),
                onError: () => {
                  k(t(5931))
                },
                "data-testid": re
              })
            }), (0, _.jsxs)("div", {
              className: "rockstargames-modules-core-headered30f2b92b3fc2937e7278409208872f",
              children: [(0, _.jsxs)("div", {
                className: "rockstargames-modules-core-headera6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, _.jsx)(ee, {
                  tagSize: J.large,
                  platform: m
                }), (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerc3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": se,
                  children: g
                })]
              }), (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerf5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, _.jsx)(K, {
                  rank: parseInt(p.overview.rank.value)
                })
              })]
            })]
          })
        },
        oe = {
          pillBtn: "rockstargames-modules-core-headerc094ee9992658964204dbc3c55063187",
          selected: "rockstargames-modules-core-headerf68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-modules-core-headerc7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-modules-core-headere1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-modules-core-headerb061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-modules-core-headera4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-modules-core-headerc6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-modules-core-headerac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-modules-core-headera829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-modules-core-headerc3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-modules-core-headercacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-modules-core-headerf9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-modules-core-headerb1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-modules-core-headere3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-modules-core-headerfd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-modules-core-headerffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-modules-core-headerf21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-modules-core-headeree0f3a44274a32b7c03d50d1f8e23578"
        },
        ie = "ProfileCard:characterName",
        ce = "ProfileCard:avatar",
        le = "ProfileCard:bankValue",
        de = "ProfileCard:cashValue",
        _e = e => {
          let {
            character: a
          } = e;
          const {
            data: r
          } = (0, f.useRockstarUser)(), {
            track: n
          } = (0, f.useGtmTrack)(), i = (0, o.useIntl)(), [c, l] = (0, s.useState)([]), [d, u] = (0, s.useState)(null), [m, g] = (0, s.useState)(null), [b, p] = (0, s.useState)(!1), [h, k] = (0, s.useState)(-1), [v, w] = (0, s.useState)([]), [x, y] = (0, s.useState)(0), C = t(5931), {
            platform: S
          } = a, [j, N] = (0, s.useState)("0"), [M, z] = (0, s.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), R = () => {
            L((0, _.jsx)("img", {
              src: C,
              alt: i.formatMessage(P.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [I, L] = (0, s.useState)((0, _.jsx)("img", {
            className: oe.avatarImg,
            src: a.mugshotUrl,
            alt: i.formatMessage(P.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: R,
            "data-testid": ce
          }));
          (0, s.useEffect)((() => {
            l(r.crews ?? [])
          }), [r.crews]), (0, s.useEffect)((() => {
            L((0, _.jsx)("img", {
              src: a.mugshotUrl,
              alt: r.nickname,
              onError: R,
              "data-testid": ce
            })), N(E(a.stats.overview.bank.value)), z(E(a.stats.overview.cash.value)), y(parseInt(a.stats.overview.rank.value))
          }), [a, r.nickname]), (0, s.useEffect)((() => {
            c && c.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), g(e.crewColour), k(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [c]), (0, s.useEffect)((() => {
            const e = [];
            if (!b && h > -1)
              for (let a = 5; a > h; a -= 1) e.push((0, _.jsx)("div", {
                className: oe.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== m ? m : ""
                }
              }, `crewrankbar-${a}`));
            w(e)
          }), [h, b, m]);
          const G = e => {
            e.stopPropagation(), n({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, _.jsxs)("div", {
            className: oe.profileDetails,
            onClick: G,
            onKeyUp: G,
            role: "button",
            tabIndex: -1,
            children: [(0, _.jsxs)("div", {
              className: oe.avatar,
              children: [I, (0, _.jsx)("div", {
                className: oe.avatarPlatform,
                "data-platform": S,
                children: (0, _.jsx)(ee, {
                  tagSize: J.large,
                  platform: S
                })
              })]
            }), (0, _.jsxs)("div", {
              className: oe.profileStats,
              children: [(0, _.jsx)("div", {
                className: oe.scNames,
                children: (0, _.jsxs)("div", {
                  className: oe.scTagsNames,
                  children: [(0, _.jsx)("span", {
                    className: oe.scUserName,
                    "data-testid": ie,
                    children: a.platformUsername
                  }), d && (0, _.jsxs)("span", {
                    className: oe.scCrewName,
                    "data-arrow-tag": b,
                    children: [d, !b && (0, _.jsx)("div", {
                      className: oe.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, _.jsxs)("div", {
                className: oe.scProgress,
                children: [(0, _.jsx)(K, {
                  rank: x
                }), (0, _.jsxs)("div", {
                  className: oe.scMoney,
                  children: [(0, _.jsxs)("span", {
                    className: oe.scCash,
                    "data-testid": de,
                    children: ["$", M]
                  }), (0, _.jsxs)("span", {
                    className: oe.scBank,
                    "data-testid": le,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        ue = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: r = 17,
            slideChangeCallback: n = null,
            slideClickCallback: o = null,
            children: i = [],
            disablePager: c = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, s.createRef)(),
            u = (0, U.ri)(d, !1),
            [m, f] = (0, s.useState)(!1),
            [g, b] = (0, s.useState)(0),
            [p, h] = (0, s.useState)(0),
            [k, v] = (0, s.useState)([r]),
            [w, x] = (0, s.useState)(k[0]),
            [y, C] = (0, s.useState)(252),
            [S, j] = (0, s.useState)(0),
            [N, M] = (0, s.useState)([]),
            [z, E] = (0, s.useState)([]),
            [R, I] = (0, s.useState)(!1),
            P = e => {
              if (!0 === m || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(a)
            },
            L = e => {
              if (!0 === m || 0 === p || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > p ? 1 : -1,
                r = Math.abs(p - t);
              r > a ? (s > 0 ? (() => {
                if (!0 === m) return;
                f(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                b(e), x(k[e]), n && n(e)
              })() : (() => {
                if (!0 === m) return;
                f(!0);
                let e = g + 1 >= k.length ? k.length - 1 : g + 1;
                e < 0 && (e = 0), b(e), x(k[e]), n && n(e)
              })(), h(0)) : x(k[g] + r * s)
            },
            G = () => {
              !0 !== m && !0 !== l && (f(!0), !0 !== m && (x(k[g]), h(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, s.createRef)())
            })), M(e)
          }), [i]), (0, s.useEffect)((() => {
            if (N.length < 1) return;
            C(N[0]?.current?.clientWidth || 0);
            const e = N[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(t + a)
          }), [N]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              f(!1)
            }), t)
          }), [m, t]), (0, s.useEffect)((() => {
            v(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * u - .5 * y - 2 * r + S : (0 === e && (a = r - e * y), e === t - 1 && t > 1 && (a = t * y * -1 + (u - (r - S))), e > 0 && e < t - 1 && (a = e * y * -1 + (.5 * u - .5 * y + .5 * S)), a)
            })(a)))), 1 === i.length ? I(!0) : I(!1)
          }), [d.current, i, u]), (0, s.useEffect)((() => {
            const e = (a = g, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            E(e)
          }), [i, g]), (0, s.useEffect)((() => {
            !0 !== c && !0 !== l || x(k[0])
          }), [l, c, k]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerb794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: P,
              onTouchMove: L,
              onTouchEnd: G,
              onMouseDown: P,
              onMouseMove: L,
              onMouseUp: G,
              onClick: () => {
                null !== o && o(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerc1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": m,
                "data-single-item": R,
                style: {
                  transform: R ? null : `translateX(${w}px)`
                },
                children: i.map(((e, a) => (0, _.jsx)("div", {
                  className: "rockstargames-modules-core-headerdd4bcd955436c8a6982ee16756f7fd8b",
                  ref: N[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), z.length > 1 && !1 === c && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headere8e5249dac92a2bc76788d0fe7d7dfb7",
              children: z.map(((e, a) => (0, _.jsx)("div", {
                className: "rockstargames-modules-core-headerf64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        me = {
          pillBtn: "rockstargames-modules-core-headerb4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-modules-core-headered6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-modules-core-headere506a7deb95c0b0c9988325cc857ea9a",
          scProfile: "rockstargames-modules-core-headerfb20979fe4aa7955196d74baf7d19379",
          scCharacterSelector: "rockstargames-modules-core-headerc3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-modules-core-headerea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-modules-core-headerc5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-modules-core-headera84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-modules-core-headerca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-modules-core-headerb71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-modules-core-headerfa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-modules-core-headerce91ee6ebb491174a4ccb4be628aaae7"
        },
        fe = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: r,
            refCharacterListDesktop: n,
            menuPadding: i,
            longCharList: c,
            setLongCharList: l,
            isMobileMode: d,
            setIsMobileMode: u,
            location: m,
            onNavigate: g
          } = e;
          const {
            windowWidth: b,
            windowHeight: p
          } = (0, w.useWindowResize)(), h = (0, o.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: x,
            activeSubNavId: y,
            setActiveSubNavId: C,
            subNavExtraHeight: S,
            setSubNavExtraHeight: j,
            navOpened: N,
            setScNavOpened: M
          } = I(), [z, E] = (0, s.useState)(""), {
            webSettings: R
          } = (0, w.useRockstarWebSettings)(), {
            track: L
          } = (0, f.useGtmTrack)(), H = (0, w.useRockstarTokenPing)(), {
            data: D,
            loggedIn: B
          } = (0, f.useRockstarUser)(), {
            charactersNeeded: q,
            currentCharId: W,
            hasNotifications: V,
            navOpen: F,
            setCurrentCharId: K,
            setHasNotifications: X,
            setSelectedCharacterTuple: Y,
            setUserData: Z
          } = (0, f.useRockstarUserState)(), [J, Q] = (0, s.useState)(null), [ee, ae] = (0, s.useState)(!1), [te, se] = (0, s.useState)(!1), [re, oe] = (0, s.useState)(0), ie = (0, s.createRef)(), ce = (0, U.ri)(ie, !1), le = (0, s.createRef)(), [de, fe] = (0, s.useState)(0), [ge, be] = (0, s.useState)([]), [pe, he] = (0, s.useState)(244), ke = (0, s.useRef)(null), ve = (0, s.useMemo)((() => (0, T.A)()), []), we = (0, s.useMemo)((() => ((e, a, t, s, r) => [{
            text: e.formatMessage(P.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(P.sc_link_settings),
              location: {
                domain: T.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(P.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(P.sc_link_messages),
              location: {
                domain: T.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(P.sc_link_game_activation),
              location: {
                domain: T.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(P.sc_link_notifications),
            location: {
              domain: T.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...O,
              text: P.sc_link_notifications.defaultMessage,
              location: {
                domain: T.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(P.sc_link_crews),
            location: {
              domain: T.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...O,
              text: P.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(P.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(P.sc_link_my_friends),
              location: {
                domain: T.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(P.sc_link_import_friends),
              location: {
                domain: T.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(P.sc_link_find_friends),
              location: {
                domain: T.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...O,
                text: P.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, A(e), {
            text: e.formatMessage(P.sc_link_log_out),
            href: `${a.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...O,
              text: P.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, a, D, V, z, window)), [h, a, D, V, z, ve]), xe = () => {
            se(i + pe * re < ce)
          }, ye = () => {
            if (le.current) {
              const {
                current: e
              } = le, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), fe(a + e)
              } else fe(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ve.currentSite?.site === T.C.socialClub && (e = encodeURIComponent("/")), E(e)
          }), [m]), (0, s.useEffect)((() => {
            be(D?.characters?.[q] ?? [])
          }), [D, q]), (0, s.useEffect)((() => {
            D && Z(D)
          }), [D]), (0, s.useEffect)((() => {
            const e = D?.characters?.gtao ?? [];
            if (null !== B && !e.length) return void Y(!1);
            if (null == W || !e.length) return;
            const a = e?.[W] ?? e?.[0] ?? null;
            Y(!!a?.platform && [a.platform, a.characterSlot])
          }), [W, D, B]), (0, s.useEffect)((() => {
            (async () => {
              if (!D?.id || !F) return;
              const {
                count: e
              } = await (0, w.coreScApiFetch)("notification/count", {
                pingBearer: H
              });
              X(e > 0)
            })()
          }), [D, F]), (0, s.useEffect)((() => {
            xe()
          }), [pe]), (0, s.useEffect)((() => {
            r(!0), u(b < 768), u(b < 768 || p < 649)
          }), [b, p]), (0, s.useEffect)((() => {
            let e = ge.length - 1;
            e < 0 && (e = 0), oe(e);
            const a = ge.length > 0 ? ge[W] ?? ge[0] : null;
            a && (Q(a), ge.length > 1 ? ae(!0) : ae(!1), l(ge.length - 1 > 3))
          }), [W, ge]), (0, s.useEffect)((() => {
            xe()
          }), [re, d, b, ge]), (0, s.useEffect)((() => {
            ye(), G()((() => {
              setTimeout(ye, 0)
            }), 300)
          }), [b, p]), (0, s.useEffect)((() => {
            const e = R?.currentCharId ?? 0;
            e !== W && K(Math.max(0, Math.min(e, ge.length - 1)))
          }), [ge, R]), (0, _.jsxs)(_.Fragment, {
            children: [null !== J && "gtao" === q && (0, _.jsxs)("div", {
              className: me.scProfile,
              ref: ke,
              tabIndex: -1,
              "aria-label": h.formatMessage(P.profile_selector_profile_card),
              children: [(0, _.jsx)(_e, {
                s: me,
                character: J
              }), !0 === ee && (0, _.jsxs)("div", {
                className: me.scCharacterSelector,
                children: [(0, _.jsx)("button", {
                  className: me.scCharacterSelectBtn,
                  "aria-hidden": !F,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    r(a), L({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, _.jsx)("span", {
                    children: (0, _.jsx)(o.FormattedMessage, {
                      ...P.profile_selector_switch_character
                    })
                  })
                }), !d && (0, _.jsx)("div", {
                  className: me.scCharacterList,
                  "data-long-list": c,
                  "aria-hidden": t,
                  ref: n,
                  children: ge.map((e => (0, _.jsx)(ne, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: he
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), d && (0, _.jsx)("div", {
                  className: me.scCharacterList,
                  "data-single-item": 2 === ge.length,
                  "data-swiper-disabled": te,
                  "aria-hidden": t,
                  ref: ie,
                  children: (0, _.jsx)(ue, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      L({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: te,
                    disableSwiper: te,
                    children: ge.filter(((e, a) => a !== W)).map((e => (0, s.createElement)(ne, {
                      characterData: e,
                      setMobileCardWidth: he,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, _.jsxs)("nav", {
              className: me.nav,
              "aria-hidden": !F,
              children: [(0, _.jsx)("button", {
                className: me.navHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": F,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || M(!0)
                },
                "data-testid": "playerButton",
                children: (0, _.jsx)("span", {
                  children: D.nickname
                })
              }), (0, _.jsx)("div", {
                className: me.navWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: le,
                style: {
                  "--navWrap-max-height": `${de+S}px`
                },
                children: we.map(((e, a) => (0, s.createElement)($, {
                  ...e,
                  id: a,
                  activeSubNavId: y,
                  setActiveSubNavId: C,
                  setSubNavExtraHeight: j,
                  onNavigate: g,
                  key: e.text
                })))
              })]
            }), (0, _.jsx)("div", {
              className: me.scLanguageSelector,
              style: {
                visibility: F ? null : "hidden"
              },
              children: (0, _.jsx)(k, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: x,
                location: m,
                onLanguageChange: o.onLanguageChange
              })
            })]
          })
        },
        ge = {
          menu: "rockstargames-modules-core-headerc0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-modules-core-headerc31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-modules-core-headerc5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-modules-core-headerb8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-modules-core-headerff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-modules-core-headerb49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-modules-core-headereff8c1d4bf675accdb7d952aba0174dc"
        },
        be = (0, w.getConfigForDomain)(),
        pe = h((e => {
          let {
            location: a,
            onNavigate: r
          } = e;
          const {
            windowHeight: n
          } = (0, w.useWindowResize)(), i = (0, o.useIntl)(), {
            languageSelectorOpened: c,
            setLanguageSelectorOpened: l,
            setActiveSubNavId: d,
            navOpened: u,
            setAccountNavOpened: m,
            charListHidden: g,
            setCharListHidden: b
          } = I(), [p, h] = (0, s.useState)(!1), {
            navHidden: k = !1
          } = (0, w.useState)(), {
            loggedIn: x
          } = (0, f.useRockstarUser)(), {
            currentCharId: y,
            navOpen: C,
            setNavOpen: S,
            userData: j
          } = (0, f.useRockstarUserState)(), {
            track: N
          } = (0, f.useGtmTrack)(), [M, z] = (0, s.useState)(!1), E = (0, s.useRef)(), [R, L] = (0, s.useState)(0), G = (0, s.createRef)(), [T, O] = (0, s.useState)(!1), [A, H] = (0, s.useState)(0), [D, $] = (0, s.useState)(!1), {
            mutateWebSettings: U,
            webSettings: q
          } = (0, w.useRockstarWebSettings)(), W = (0, s.useCallback)((e => {
            b(e), E.current && !0 === e && (E.current.scrollTop = 0)
          }), [E]);
          return (0, s.useEffect)((() => {
            null !== y && q.currentCharId !== y && U({
              key: "currentCharId",
              value: y
            }), !1 === x ? U({
              key: "currentCharId",
              value: null
            }) : x && j && j.accountSynced && N({
              event: "account_synced"
            })
          }), [y, x, j?.accountSynced]), (0, s.useEffect)((() => {
            E.current && (!1 === g && !1 === M && (E.current.style.height = `${E.current.scrollHeight}px`), !0 === g && (E.current.style.height = null))
          }), [g, E, M]), (0, s.useEffect)((() => {
            const e = () => {
                S(!1), W(!0)
              },
              a = a => {
                const t = G?.current && a?.composedPath().includes(G.current);
                C && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [G]), (0, s.useEffect)((() => {
            S(!1), W(!0)
          }), [k]), (0, s.useEffect)((() => {
            if (G.current) {
              const {
                current: e
              } = G, a = window.getComputedStyle(e);
              L(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [G]), (0, s.useEffect)((() => {
            $(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            G.current && h(G?.current?.scrollHeight >= n)
          }), [G, n]), (0, s.useEffect)((() => {
            C || (d(-1), l(!1))
          }), [C]), (0, s.useEffect)((() => {
            c && (g || W(!0), u && (m(!1), d(-1)))
          }), [c]), (0, s.useEffect)((() => {
            u && (c && l(!1), g || W(!0))
          }), [u]), void 0 === x ? null : (0, _.jsxs)(v.RemoveScroll, {
            enabled: !!C,
            removeScrollBar: !1,
            children: [(0, _.jsxs)("div", {
              className: [ge.menu, C ? ge.navOpen : ""].join(" "),
              "data-logged-in": x,
              "data-mac-browser": D,
              "data-scroll-mode": p,
              ref: G,
              "aria-hidden": !C,
              children: [(0, _.jsx)("button", {
                className: ge.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  H(a)
                },
                onTouchMove: e => {
                  if (0 === A) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(A - a) > 1 && (H(0), S(!1))
                },
                children: (0, _.jsx)("img", {
                  className: ge.dragHandle,
                  src: t(35902),
                  alt: i.formatMessage(P.sc_menu_drag_handle)
                })
              }), x ? (0, _.jsx)(fe, {
                sc: be,
                charListHidden: g,
                hideCharacterList: W,
                refCharacterListDesktop: E,
                menuPadding: R,
                longCharList: M,
                setLongCharList: z,
                isMobileMode: T,
                setIsMobileMode: O,
                location: a,
                onNavigate: r
              }) : (0, _.jsx)(B, {
                sc: be,
                navOpen: C,
                location: a,
                onNavigate: r
              })]
            }), (0, _.jsx)("div", {
              className: [ge.scOverlay, C ? ge.navOpen : ""].join(" "),
              "data-logged-in": x
            })]
          })
        })),
        he = h((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const r = (0, o.useIntl)(),
            {
              data: n,
              loggedIn: i
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: c,
              currentCharId: l,
              navOpen: d,
              setNavOpen: u
            } = (0, f.useRockstarUserState)(),
            {
              track: m
            } = (0, f.useGtmTrack)(),
            [g, b] = (0, s.useState)(),
            [p, h] = (0, s.useState)(!1),
            [k, v] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            v(n?.characters?.[c] ?? [])
          }), [n, c]);
          const w = (0, s.useCallback)((e => {
            e.stopPropagation(), u(!d), 1 == !d && a(null), m({
              event: "account_menu_click",
              element_placement: "account menu",
              text: d ? "close" : "open"
            })
          }), [d]);
          return (0, s.useEffect)((() => {
            h(!!k?.[l]?.mugshotUrl)
          }), [k, l]), (0, s.useEffect)((() => {
            b((() => {
              switch (i) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return k?.[l]?.mugshotUrl ?? n?.avatar
              }
            })())
          }), [n, k, l, i]), (0, _.jsxs)("button", {
            className: "rockstargames-modules-core-headeree811a1fa8b17eb47afb419dd08ffb03",
            "aria-label": r.formatMessage(d ? P.sc_menu_close : P.sc_menu_open),
            "aria-expanded": d,
            type: "button",
            onClick: w,
            "data-mugshot": p,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(i),
            children: [(0, _.jsx)("img", {
              className: "rockstargames-modules-core-headera917b58ca28b68550a1aa5d99c7eb998",
              src: g,
              alt: n?.nickname || "",
              onError: () => {
                let e = null;
                e = t(p ? 5931 : 73091), b(e)
              }
            }), i && p && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc06123ceae7ca4759ec8b1a5197823db",
              children: (0, _.jsx)(ee, {
                platform: k?.[l]?.platform,
                tagSize: J.small
              })
            }), i && (0, _.jsx)("div", {
              className: "rockstargames-modules-core-headerc4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": k?.[l]?.platform ?? null
            })]
          })
        })),
        ke = {
          pillBtn: "rockstargames-modules-core-headerd56685560c26cb74e41c0e7efbff2324",
          selected: "rockstargames-modules-core-headeraf2c4e1e0c4a0665c4844045ac59a1a5",
          profile: "rockstargames-modules-core-headercc0f17f755cfd87ea1140528dcff6218",
          scCharacterSelector: "rockstargames-modules-core-headerad02e9d1ab679ad0544665c4a1463f79",
          scCharacterSelectBtn: "rockstargames-modules-core-headerccc058e17b53baa907a8d380400a1b81",
          open: "rockstargames-modules-core-headere4d379e3b26def224a6777e254d96718",
          scCharacterList: "rockstargames-modules-core-headera3cb8b5052cdb657b91ccbd293f3ac0f",
          nav: "rockstargames-modules-core-headerf4119915eed1b4ec0bd34cd98e2cffef",
          scLanguageSelector: "rockstargames-modules-core-headerec69e723cd1f4082f4bc3f5656f21b7c",
          navHeader: "rockstargames-modules-core-headerd8efae6b36b65fb512bfff18bc891678",
          navWrap: "rockstargames-modules-core-headera9396b9942eedcf0e129b7f6fd3f69ec"
        },
        ve = e => {
          let {
            charListHidden: a,
            hideCharacterList: t,
            refCharacterListDesktop: r,
            menuPadding: n,
            longCharList: i,
            setLongCharList: c,
            isMobileMode: l
          } = e;
          const d = (0, o.useIntl)(),
            {
              windowWidth: u
            } = (0, w.useWindowResize)(),
            {
              track: m
            } = (0, f.useGtmTrack)(),
            {
              charactersNeeded: g,
              currentCharId: b,
              navOpen: p,
              setCurrentCharId: h,
              setSelectedCharacterTuple: k,
              setUserData: v,
              setCharacterAvatar: x,
              setCharacterPlatform: y
            } = (0, f.useRockstarUserState)(),
            [C, S] = (0, s.useState)(null),
            [j, N] = (0, s.useState)([]),
            [M, z] = (0, s.useState)(!1),
            [E, R] = (0, s.useState)(0),
            [I, L] = (0, s.useState)(244),
            [G, T] = (0, s.useState)(!1),
            O = (0, s.useRef)(null),
            A = (0, s.createRef)(),
            H = (0, U.ri)(A, !1),
            {
              webSettings: D
            } = (0, w.useRockstarWebSettings)(),
            {
              data: $,
              loggedIn: B
            } = (0, f.useRockstarUser)({
              fetchCharacters: !0
            }),
            q = () => {
              T(n + I * E < H)
            };
          return (0, s.useEffect)((() => {
            q()
          }), [I]), (0, s.useEffect)((() => {
            q()
          }), [E, l, u, j]), (0, s.useEffect)((() => {
            N($.characters?.[g] ?? [])
          }), [$, g]), (0, s.useEffect)((() => {
            $ && v($)
          }), [$]), (0, s.useEffect)((() => {
            const e = $?.characters?.gtao;
            if (null !== B && !e?.length) return void k(!1);
            if (null == b || !e?.length) return;
            const a = e?.[b] ?? e?.[0] ?? null;
            k(!!a?.platform && [a.platform, a.characterSlot])
          }), [b, $, B]), (0, s.useEffect)((() => {
            let e = j.length - 1;
            e < 0 && (e = 0), R(e);
            const a = j.length > 0 ? j[b] ?? j[0] : null;
            if (a) return S(a), x(a.mugshotUrl), y(a.platform), j.length > 1 ? z(!0) : z(!1), c(j.length - 1 > 3), () => {
              x(""), y("")
            }
          }), [b, j]), (0, s.useEffect)((() => {
            const e = D?.currentCharId ?? 0;
            e !== b && h(Math.max(0, Math.min(e, j.length - 1)))
          }), [j, D]), C && "gtao" === g ? (0, _.jsxs)("div", {
            className: ke.profile,
            ref: O,
            tabIndex: -1,
            "aria-label": d.formatMessage(P.profile_selector_profile_card),
            children: [(0, _.jsx)(_e, {
              s: ke,
              character: C
            }), !0 === M && (0, _.jsxs)("div", {
              className: ke.scCharacterSelector,
              children: [(0, _.jsx)("button", {
                className: ke.scCharacterSelectBtn,
                "aria-hidden": !p,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const s = !a;
                  t(s), m({
                    event: s ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": a,
                children: (0, _.jsx)("span", {
                  children: (0, _.jsx)(o.FormattedMessage, {
                    ...P.profile_selector_switch_character
                  })
                })
              }), !1 === l && (0, _.jsx)("div", {
                className: ke.scCharacterList,
                "data-long-list": i,
                "aria-hidden": a,
                ref: r,
                children: j.map((e => (0, _.jsx)(ne, {
                  tabIndex: a ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: L
                }, e.mugshotUrl)))
              }), !0 === l && (0, _.jsx)("div", {
                className: ke.scCharacterList,
                "data-single-item": 2 === j.length,
                "data-swiper-disabled": G,
                "aria-hidden": a,
                ref: A,
                children: (0, _.jsx)(ue, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    m({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: G,
                  disableSwiper: G,
                  children: j.filter(((e, a) => a !== b)).map((e => (0, s.createElement)(ne, {
                    characterData: e,
                    setMobileCardWidth: L,
                    key: e.mugshotUrl,
                    tabIndex: a ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        },
        we = {
          pillBtn: "rockstargames-modules-core-headerc5adbe3b8adfa45115608e536f6e0384",
          selected: "rockstargames-modules-core-headerc7c3f92d1fdd021a5cd665583ac79d89",
          scCharacterSelector: "rockstargames-modules-core-headerefcb26b13bae0546c71d0b9f88e335a9",
          scCharacterSelectBtn: "rockstargames-modules-core-headerd3991df21bf29ec01662910e116a6ff5",
          open: "rockstargames-modules-core-headerd815312ad6eebc2c651f8554dc6c0bb7",
          scCharacterList: "rockstargames-modules-core-headerdedb11e25dddfe561c538a370f5028e2"
        },
        xe = e => {
          let {
            isMobile: a = !1
          } = e;
          const t = (0, o.useIntl)(),
            {
              track: r
            } = (0, f.useGtmTrack)(),
            [n, i] = (0, s.useState)(null),
            [c, l] = (0, s.useState)(0),
            [d, u] = (0, s.useState)(!1),
            [m, g] = (0, s.useState)(!1),
            b = (0, s.createRef)(),
            [p, h] = (0, s.useState)([]),
            [k, v] = (0, s.useState)(244),
            {
              windowWidth: x
            } = (0, w.useWindowResize)(),
            y = (0, U.ri)(b, !1),
            {
              data: C,
              loggedIn: S
            } = (0, f.useRockstarUser)(),
            {
              charactersNeeded: j,
              currentCharId: N
            } = (0, f.useRockstarUserState)(),
            {
              charListHidden: M,
              setCharListHidden: z
            } = I();
          (0, s.useEffect)((() => {
            let e = p.length - 1;
            e < 0 && (e = 0), l(e);
            const a = p.length > 0 ? p[N] ?? p[0] : null;
            a && (i(a), p.length > 1 ? g(!0) : g(!1))
          }), [N, p]), (0, s.useEffect)((() => {
            h(C?.characters?.[j] ?? [])
          }), [C, j]), (0, s.useEffect)((() => {
            E()
          }), [k, c, a, x, p]);
          const E = () => {
            u(k * c < y)
          };
          return null !== n && "gtao" === j && S ? (0, _.jsxs)("div", {
            tabIndex: -1,
            "aria-label": t.formatMessage(P.profile_selector_profile_card),
            children: [(0, _.jsx)(_e, {
              s: we,
              character: n
            }), !0 === m && (0, _.jsxs)("div", {
              className: we.scCharacterSelector,
              children: [(0, _.jsx)("button", {
                className: we.scCharacterSelectBtn,
                type: "button",
                onClick: e => {
                  e.stopPropagation();
                  const a = !M;
                  z(a), r({
                    event: a ? "character_selector_close" : "character_selector_open",
                    element_placement: "character selector"
                  })
                },
                "data-list-closed": M,
                children: (0, _.jsx)("span", {
                  children: (0, _.jsx)(o.FormattedMessage, {
                    ...P.profile_selector_switch_character
                  })
                })
              }), !a && (0, _.jsx)("div", {
                className: we.scCharacterList,
                "aria-hidden": M,
                children: p.map((e => (0, _.jsx)(ne, {
                  tabIndex: M ? -1 : 0,
                  characterData: e,
                  setMobileCardWidth: v
                }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
              }), a && (0, _.jsx)("div", {
                className: we.scCharacterList,
                "data-single-item": 2 === p.length,
                "data-swiper-disabled": d,
                "aria-hidden": M,
                ref: b,
                children: (0, _.jsx)(ue, {
                  interactionDelay: 350,
                  mobileGutterWidth: 17,
                  dragThreshold: 40,
                  slideChangeCallback: () => {
                    r({
                      event: "carousel_swipe",
                      element_placement: "character selector"
                    })
                  },
                  disablePager: d,
                  disableSwiper: d,
                  children: p.filter(((e, a) => a !== N)).map((e => (0, s.createElement)(ne, {
                    characterData: e,
                    setMobileCardWidth: v,
                    key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                    tabIndex: M ? -1 : 0
                  })))
                })
              })]
            })]
          }) : null
        }
    },
    73091: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f97af80b5511804c9842052dacb20f2a.png"
    }
  }
]);