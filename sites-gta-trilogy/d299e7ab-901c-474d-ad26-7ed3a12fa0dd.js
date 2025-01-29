! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "d299e7ab-901c-474d-ad26-7ed3a12fa0dd", e._sentryDebugIdIdentifier = "sentry-dbid-d299e7ab-901c-474d-ad26-7ed3a12fa0dd")
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
  [649], {
    4649: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, {
        default: () => ke
      });
      var t = a(9623),
        r = a(2229),
        i = a(5966),
        n = a(1788);
      const o = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        c = (0, n.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        d = "rockstargames-sites-gta-trilogyea8cf4797c830e5b5dad68b2ec814e67";
      var l = a(8096);
      const m = (0, n.withIntl)((e => {
          let {
            children: s,
            to: a = "#",
            reloadDocument: i = !1,
            alt: o = "",
            autoBlank: m = !1,
            onClick: _ = (() => {}),
            focused: g = !1,
            ...u
          } = e;
          const f = (0, r.useRef)(null),
            b = (0, n.useIntl)(),
            p = !/^(https?|mailto):/i.test(a),
            k = /^#/.test(a),
            v = u?.target ?? (m ? "_blank" : "_self"),
            {
              ...h
            } = u;
          let x = "";
          if ("aria-label" in h && h["aria-label"] && (x = "_blank" === v ? `${h["aria-label"]} ${b.formatMessage(c.aria_label_open_new_window)}` : h["aria-label"]), (0, r.useEffect)((() => {
              g && f?.current && f.current.focus()
            }), [f?.current, g]), k) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), _ && _(e)
            };
            return (0, l.jsxs)("a", {
              title: o,
              href: a,
              onClick: e,
              ...h,
              "aria-label": x,
              ref: f,
              children: [s, "_blank" === v && !x && (0, l.jsx)("span", {
                className: d,
                children: b.formatMessage(c.aria_label_open_new_window)
              })]
            })
          }
          if (p) return (0, l.jsxs)(t.NavLink, {
            title: o,
            to: a,
            onClick: _,
            ...h,
            "aria-label": x,
            ref: f,
            reloadDocument: i,
            children: [s, "_blank" === v && !x && (0, l.jsx)("span", {
              className: d,
              children: b.formatMessage(c.aria_label_open_new_window)
            })]
          });
          const y = Object.keys(h).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, s) => ({
            ...e,
            [s]: u[s]
          })), {});
          return "function" == typeof y?.className && delete y.className, (0, l.jsxs)("a", {
            href: a,
            title: o,
            onClick: _,
            target: v,
            ...y,
            "aria-label": x,
            ref: f,
            children: [s, "_blank" === v && !x && (0, l.jsx)("span", {
              className: d,
              children: b.formatMessage(c.aria_label_open_new_window)
            })]
          })
        }), o),
        _ = (0, i.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [a] = (0, r.useState)(""), n = (0, t.useNavigate)(), o = (0, i.useMutateState)();
          return (0, l.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-gta-trilogyc9f16d9c2f4a943ae8f1f900f31b5f4b",
            onSubmit: e => {
              e.preventDefault(), o({
                navOpen: !1
              }), document.activeElement?.blur?.();
              const s = e.currentTarget.elements.namedItem("q").value;
              n(`/search?q=${s}`)
            },
            role: "search",
            children: [(0, l.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, l.jsx)("input", {
              autoComplete: "off",
              defaultValue: a,
              enterKeyHint: "search",
              name: "q",
              placeholder: s("Search Rockstar Games")
            })]
          })
        })),
        g = (0, i.withTranslations)((e => {
          let {
            error: s,
            t: a,
            domain: t = ""
          } = e;
          console.error({
            error: s
          });
          let i = s?.message ?? a("error-404-new");
          i = a("error-404-new");
          const n = s?.code ?? 398,
            o = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            o && o?.current && o.current.focus()
          }), [o]), (0, l.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogyd0635ab9b06be2bdd2967e49648afe4e",
            children: [(0, l.jsx)("h3", {
              tabIndex: -1,
              ref: o,
              children: `${i} (${n})`
            }), (0, l.jsx)(m, {
              to: "/",
              children: a("Home")
            }), "clr" !== t && (0, l.jsx)(_, {})]
          })
        })),
        u = e => {
          let {
            gameSlug: s
          } = e;
          return (0, l.jsx)("div", {
            className: "rockstargames-sites-gta-trilogyb6347a165f936b65653c096fb7285fb5",
            style: {
              "--background-image": `url(${a(1412)(`./FOB_${s}.jpg`)})`
            }
          })
        },
        f = () => (0, l.jsxs)("div", {
          className: "rockstargames-sites-gta-trilogydc8dca831ae71634d192dc0a1a8e837a",
          children: [(0, l.jsx)(u, {
            gameSlug: "VC"
          }), (0, l.jsx)(u, {
            gameSlug: "III"
          }), (0, l.jsx)(u, {
            gameSlug: "SA"
          })]
        }),
        b = e => {
          let {
            variant: s = "full",
            className: t = "",
            style: r = {},
            alt: n = ""
          } = e;
          return (0, l.jsx)("img", {
            style: r,
            className: (0, i.classList)("rockstargames-sites-gta-trilogyd7081a3156767334cd548df576ea5a4e", t?.split(" ")),
            src: a(5545)(`./${s}-logo.svg`),
            alt: n
          })
        },
        p = e => {
          let {
            href: s,
            children: a,
            ...t
          } = e;
          return s ? (0, l.jsx)("a", {
            href: s,
            ...t,
            children: a
          }) : (0, l.jsx)("button", {
            ...t,
            children: a
          })
        },
        k = e => {
          let {
            style: s,
            children: a,
            ...t
          } = e;
          return (0, l.jsx)(p, {
            style: s,
            ...t,
            children: a
          })
        },
        v = (0, i.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, l.jsx)(k, {
            href: "https://store.rockstargames.com/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition",
            target: "_blank",
            className: "rockstargames-sites-gta-trilogyc51b6df1ac8a33d7e9c1c95a1764a3d7",
            children: s("trilogy.pre-order-now")
          })
        })),
        h = "rockstargames-sites-gta-trilogycc98c1a51aaa367880bc924ff76bbcae",
        x = (0, i.withTranslations)((e => {
          let {
            logoVariant: s = "full",
            className: t = "",
            style: r = {},
            t: n
          } = e;
          return (0, l.jsx)("div", {
            className: (0, i.classList)("rockstargames-sites-gta-trilogyecd3d947bb757959812ca40bfed8319d", t?.split(" ")),
            style: r,
            children: (0, l.jsxs)("div", {
              className: "rockstargames-sites-gta-trilogyd03685723fd851c50eba7c02e5e99d3b",
              children: [(0, l.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogya87f54c1e8f4b834ed31cdae5494a639",
                children: [(0, l.jsx)(b, {
                  className: "rockstargames-sites-gta-trilogyc3aa6ebd16d3846ec908c9e41c477313",
                  variant: s,
                  alt: "Grand Theft Auto: The Trilogy - The Definitive Edition"
                }), (0, l.jsx)("div", {
                  className: "rockstargames-sites-gta-trilogye79a54558fae714b445e35f4dfc1d1ac",
                  children: n("trilogy.release-date")
                })]
              }), (0, l.jsx)(v, {}), (0, l.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogyc966fd3002eee5ada288cd94e276732c",
                children: [(0, l.jsx)("img", {
                  className: h,
                  src: a(3724),
                  alt: "PS5|PS4"
                }), (0, l.jsx)("img", {
                  className: h,
                  src: a(7660),
                  alt: "XBOX SERIES X|S"
                }), (0, l.jsx)("img", {
                  className: h,
                  src: a(2905),
                  alt: "XBOX ONE"
                }), (0, l.jsx)("img", {
                  className: h,
                  src: a(9260),
                  alt: "Nintendo Switch"
                }), (0, l.jsx)("img", {
                  className: h,
                  src: a(2579),
                  alt: "PC"
                })]
              })]
            })
          })
        })),
        y = () => (0, l.jsxs)("section", {
          id: "intro",
          className: "rockstargames-sites-gta-trilogyd834553432b8317c422762b624734f82",
          children: [(0, l.jsx)("div", {
            className: "rockstargames-sites-gta-trilogyda654cf355e7d9a5592d67add59ebe31",
            children: (0, l.jsx)(f, {})
          }), (0, l.jsx)(x, {
            className: "rockstargames-sites-gta-trilogyc703ffea313a24e839fb3a787feabe96",
            logoVariant: "full"
          })]
        });
      var w = a(1879),
        j = a.n(w);
      const z = e => {
          let {
            children: s,
            className: a,
            ...t
          } = e;
          return (0, l.jsx)("section", {
            className: (0, i.classList)("rockstargames-sites-gta-trilogyb892529416d6dd4a0e69b3e52d0d33d7", a?.split(" ")),
            ...t,
            children: s
          })
        },
        N = () => (0, l.jsx)(z, {
          id: "trailer",
          children: (0, l.jsx)(j(), {
            id: "12237"
          })
        }),
        S = (0, i.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, l.jsx)(z, {
            id: "info",
            children: (0, l.jsxs)("div", {
              className: "rockstargames-sites-gta-trilogyb93535b4bd54b8d1845e90d0f090b96f",
              children: [(0, l.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogyd58fe2772d4d628412f344896e84757a",
                children: [(0, l.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: s("trilogy.info.title")
                  }
                }), (0, l.jsx)("p", {
                  children: s("trilogy.info.body")
                })]
              }), (0, l.jsxs)("div", {
                className: "rockstargames-sites-gta-trilogydda43462b06dd7d3fd995a3fe6120786",
                children: [(0, l.jsx)("img", {
                  src: a(4545),
                  className: "rockstargames-sites-gta-trilogya54dfeb4b0b701b356a9a43d33532b82"
                }), (0, l.jsx)("img", {
                  src: a(6790),
                  className: "rockstargames-sites-gta-trilogybbaa80227c7257a74e6b03d2600f73c6"
                }), (0, l.jsx)("img", {
                  src: a(6275),
                  className: "rockstargames-sites-gta-trilogyf788a22c5c491f7289bbbdbedae0656e"
                })]
              })]
            })
          })
        }));
      var E = a(7545),
        G = a(4162);
      const R = (0, n.defineMessages)({
          sites_gta_trilogy_enhancements_1_item_6: {
            id: "sites_gta_trilogy_enhancements_1_item_6",
            defaultMessage: "Plus new Rockstar Games Accomplishments for members"
          }
        }),
        T = e => {
          let {
            src: s,
            children: a,
            style: t = {},
            className: r = ""
          } = e;
          return (0, l.jsxs)("div", {
            className: (0, i.classList)("rockstargames-sites-gta-trilogyc8f2ff039981332aafce85feb372685a", r?.split(" ")),
            style: t,
            children: [(0, l.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyf20207f7b350602dfde8ac2e346218fd",
              children: (0, l.jsx)("img", {
                src: s
              })
            }), (0, l.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyc6b134ade1e9197d50024c5f3ee38823",
              children: a
            })]
          })
        },
        D = "rockstargames-sites-gta-trilogyeb15701b4afd84d5121e96bce378941c",
        C = "rockstargames-sites-gta-trilogyb9881d828de231eb156230842e4432c0",
        M = e => {
          let {
            t: s
          } = e;
          const {
            formatMessage: t
          } = (0, n.useIntl)();
          return (0, l.jsxs)(T, {
            src: a(8454),
            className: D,
            children: [(0, l.jsx)("div", {
              className: C,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.1.title")
              }
            }), (0, l.jsxs)("ul", {
              children: [(0, l.jsx)("li", {
                children: s("trilogy.enhancements.1.li.1")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.1.li.2")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.1.li.3")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.1.li.4")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.1.li.5")
              }), (0, l.jsx)("li", {
                children: t(R.sites_gta_trilogy_enhancements_1_item_6)
              })]
            })]
          })
        },
        I = e => {
          let {
            t: s
          } = e;
          return (0, l.jsxs)(T, {
            src: a(8033),
            className: D,
            children: [(0, l.jsx)("div", {
              className: C,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.2.title")
              }
            }), (0, l.jsxs)("ul", {
              children: [(0, l.jsx)("li", {
                children: s("trilogy.enhancements.2.li.1")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.2.li.2")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.2.li.3")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.2.li.4")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.2.li.5")
              })]
            })]
          })
        },
        q = e => {
          let {
            t: s
          } = e;
          return (0, l.jsxs)(T, {
            src: a(9988),
            className: D,
            children: [(0, l.jsx)("div", {
              className: C,
              dangerouslySetInnerHTML: {
                __html: s("trilogy.enhancements.3.title")
              }
            }), (0, l.jsxs)("ul", {
              children: [(0, l.jsx)("li", {
                children: s("trilogy.enhancements.3.li.2")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.3.li.3")
              }), (0, l.jsx)("li", {
                children: s("trilogy.enhancements.3.li.4")
              })]
            })]
          })
        },
        V = (0, i.withMediaBasedProps)((0, i.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [a, t] = (0, r.useState)(1), [i, n] = (0, r.useState)(16), o = () => {
            const e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            t((e => e < 600 ? 1 : e >= 600 && e < 1024 ? 1.25 : e >= 1024 && e < 1280 ? 1.5 : e >= 1280 && e < 1440 ? 2 : e >= 1440 && e < 1920 ? 2.5 : 3)(e)), n((e => e < 768 ? 16 : e >= 768 && e < 1024 ? 18 : e >= 1024 && e < 1920 ? 20 : 22)(e))
          };
          return (0, r.useEffect)((() => (o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o)))), (0, l.jsxs)(z, {
            id: "enhancements",
            className: "rockstargames-sites-gta-trilogye82f7ca8171863cc55aa166e6a4d6f0b",
            children: [(0, l.jsx)("h3", {
              children: s("trilogy.nav.enhancements")
            }), (0, l.jsx)("div", {
              className: "rockstargames-sites-gta-trilogycce06c5a1c9c19975bd70a4527e62e52",
              children: (0, l.jsxs)(G.RC, {
                slidesPerView: a,
                modules: [E.dK],
                pagination: {
                  clickable: !0
                },
                spaceBetween: i,
                children: [(0, l.jsx)(G.qr, {
                  children: (0, l.jsx)(M, {
                    t: s
                  })
                }), (0, l.jsx)(G.qr, {
                  children: (0, l.jsx)(I, {
                    t: s
                  })
                }), (0, l.jsx)(G.qr, {
                  children: (0, l.jsx)(q, {
                    t: s
                  })
                })]
              })
            })]
          })
        })));
      var O = a(236),
        F = a(3582);
      const A = e => {
          const s = window.innerWidth,
            a = s < 1440 ? window.innerHeight - 60 : window.innerHeight,
            t = s > a ? 1 : 2,
            r = s > a ? s : a * (s > a ? 1 : 1.3);
          let i, n, o;
          window.innerWidth < 768 ? (i = s, n = a, o = 8) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (i = s, n = a, o = 9) : window.innerWidth >= 1024 && window.innerWidth < 1920 ? (i = .9 * s, n = .9 * a, o = 10) : window.innerWidth >= 1920 && (i = .75 * s, n = .75 * a, o = 22);
          const c = 2 * i + o,
            d = e + a,
            l = .25 * r,
            m = .65 * r,
            _ = .8 * r;
          return {
            sizes: {
              vw: s,
              vh: a,
              initialMiddleWidth: s,
              finalColumnWidth: (s - 2 * o) / 3,
              gameDescriptionWidth: i,
              gameDescriptionHeight: n,
              imageGridGap: o,
              transitionDistance: c
            },
            triggers: {
              endIntro: e,
              startGames: d,
              gamesTrigger1: l,
              gamesTrigger2: m,
              gamesTrigger3: _,
              introTriggers: [e, d, d + l, d + m],
              introTriggers2: [e, d, d + l, d + m, d + _, d + c * t],
              FadeFOBTriggers: [d + l, d + m],
              FadeFOBTriggersText: [d + l + .2 * r, d + m],
              FadeFOBTriggersGirl: [d + l + .05 * r, d + m - .2 * r]
            }
          }
        },
        L = e => {
          let {
            gameSlug: s,
            children: t,
            style: i,
            triggers: n
          } = e;
          const {
            scrollY: o
          } = (0, F.useScroll)(), {
            FadeFOBTriggers: c,
            FadeFOBTriggersText: d,
            FadeFOBTriggersGirl: m
          } = n, [_, g] = (0, r.useState)(null), [u, f] = (0, r.useState)(null), [p, k] = (0, r.useState)(null), [v, h] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            const e = () => {
              let e, s, a, t;
              window.innerWidth < 768 ? (e = .3, s = 1.1 * e, a = .05, t = .1) : window.innerWidth >= 768 && window.innerWidth < 1024 ? (e = .22, s = .8 * e, a = .05, t = .2) : window.innerWidth >= 1024 && window.innerWidth < 1920 || window.innerWidth >= 1920 && window.innerWidth < 2560 ? (e = .15, s = .6 * e, a = .05, t = .2) : window.innerWidth >= 2560 && (e = .11, s = .6 * e, a = .1, t = .2), g(e), f(s), k(a), h(t)
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []);
          const x = (0, F.useTransform)(o, c, [window.innerWidth * _, window.innerWidth * u]),
            y = (0, F.useTransform)(o, c, [window.innerHeight * p, window.innerHeight * v]),
            w = (0, F.useTransform)(o, m, [1, 0]),
            j = (0, F.useTransform)(o, d, [0, 1]);
          return n ? (0, l.jsxs)(F.motion.div, {
            className: "rockstargames-sites-gta-trilogyae041b91c06170a23e1a613a67651564",
            "data-game": s,
            style: i,
            children: [(0, l.jsx)(F.motion.div, {
              className: "rockstargames-sites-gta-trilogyd5d3447dcb2b9539451686c350a475f4",
              style: {
                opacity: j
              },
              children: t
            }), (0, l.jsx)(F.motion.img, {
              src: a(2752)(`./${s}_Girl.png`),
              className: "rockstargames-sites-gta-trilogyf5de8da7a41cf1898c748b3d283697d7",
              style: {
                opacity: w
              }
            }), (0, l.jsx)(F.motion.div, {
              className: "rockstargames-sites-gta-trilogyaa10a94952fd5536a095ab084710d7b0",
              style: {
                width: x,
                paddingBottom: y
              },
              children: (0, l.jsx)(b, {
                variant: s
              })
            })]
          }) : null
        },
        P = e => {
          let {
            gameSlug: s,
            children: a,
            triggers: t,
            sizes: r
          } = e;
          const {
            scrollY: i
          } = (0, F.useScroll)(), {
            startGames: n,
            gamesTrigger1: o,
            gamesTrigger2: c,
            introTriggers: d,
            introTriggers2: m
          } = t, {
            vh: _,
            finalColumnWidth: g,
            gameDescriptionWidth: u,
            gameDescriptionHeight: f,
            imageGridGap: b,
            transitionDistance: p
          } = r, k = (0, F.useTransform)(i, d, [g, g, g, u]), v = (0, F.useTransform)(i, m, [0, 0, 0, (_ - f) / 2, (_ - f) / 2, (_ - f) / 2]), h = (0, F.useTransform)(i, m, [0, 0, 0, u + b, u + b, u - p]), x = (0, F.useTransform)(i, [n, n + 1, n + o, n + c], [_, _, _, f]);
          return (0, l.jsx)(L, {
            gameSlug: s,
            style: {
              x: h,
              y: v,
              width: k,
              height: x
            },
            triggers: t,
            sizes: r,
            children: a
          })
        },
        $ = e => {
          let {
            t: s,
            triggers: a,
            sizes: t
          } = e;
          const {
            scrollY: r
          } = (0, F.useScroll)(), {
            startGames: i,
            gamesTrigger1: n,
            gamesTrigger2: o,
            introTriggers: c,
            introTriggers2: d
          } = a, {
            vh: m,
            initialMiddleWidth: _,
            finalColumnWidth: g,
            gameDescriptionWidth: u,
            gameDescriptionHeight: f,
            imageGridGap: b,
            transitionDistance: p
          } = t, k = (0, F.useTransform)(r, c, [_, g, g, u]), v = (0, F.useTransform)(r, d, [0, 0, 0, (m - f) / 2, (m - f) / 2, (m - f) / 2]), h = (0, F.useTransform)(r, d, [0, 0, 0, u + b, u + b, u - p]), x = (0, F.useTransform)(r, [i, i + 1, i + n, i + o], [m, m, m, f]);
          return (0, l.jsxs)(L, {
            gameSlug: "VC",
            style: {
              x: h,
              y: v,
              width: k,
              height: x
            },
            triggers: a,
            sizes: t,
            children: [(0, l.jsx)("h3", {
              children: s("trilogy.games.vc.title")
            }), (0, l.jsx)("p", {
              children: s("trilogy.games.vc.body")
            })]
          })
        },
        W = e => {
          let {
            t: s,
            triggers: a,
            sizes: t
          } = e;
          return (0, l.jsxs)(P, {
            gameSlug: "III",
            triggers: a,
            sizes: t,
            children: [(0, l.jsx)("h3", {
              children: s("trilogy.games.iii.title")
            }), (0, l.jsx)("p", {
              children: s("trilogy.games.iii.body")
            })]
          })
        },
        B = e => {
          let {
            t: s,
            triggers: a,
            sizes: t
          } = e;
          return (0, l.jsxs)(P, {
            gameSlug: "SA",
            triggers: a,
            sizes: t,
            children: [(0, l.jsx)("h3", {
              children: s("trilogy.games.sc.title")
            }), (0, l.jsx)("p", {
              children: s("trilogy.games.sc.body")
            })]
          })
        },
        U = (0, i.withTranslations)((e => {
          let {
            t: s,
            startDistance: a
          } = e;
          const [t, i] = (0, r.useState)(A(a));
          return (0, r.useEffect)((() => {
            const e = () => {
              i(A(a))
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), [a]), a ? (0, l.jsxs)(F.motion.div, {
            className: "rockstargames-sites-gta-trilogyaa86c435bac26d0d370a6a3aede5ecb7",
            children: [(0, l.jsx)(W, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            }), (0, l.jsx)($, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            }), (0, l.jsx)(B, {
              t: s,
              triggers: t?.triggers,
              sizes: t?.sizes
            })]
          }) : null
        })),
        H = () => {
          const e = (0, r.useRef)(),
            [s, a] = (0, r.useState)(parseInt(localStorage?.getItem("startGames")) ?? null),
            t = (0, O.useIntersectionObserver)(e, {
              threshold: [0]
            }),
            [i, n] = (0, r.useState)(0),
            o = e => {
              a(e), localStorage.setItem("startGames", e)
            };
          return (0, r.useEffect)((() => {
            const a = () => {
              n(window.pageYOffset), t?.isIntersecting && !s && (o(window.pageYOffset > i ? window.pageYOffset : window.pageYOffset - e.current.offsetHeight - window.innerHeight), window.removeEventListener("scroll", a))
            };
            return window.addEventListener("scroll", a), () => window.removeEventListener("scroll", a)
          }), [i, s]), (0, r.useEffect)((() => {
            const s = () => {
              if (o(null), t?.isIntersecting) {
                const s = window.pageYOffset + e.current.getBoundingClientRect().top - window.innerHeight;
                o(s)
              }
            };
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
          }), [t]), (0, l.jsx)("section", {
            id: "games",
            ref: e,
            className: "rockstargames-sites-gta-trilogyc05d9ddaabc3f13126a4e547d9a59a29",
            children: (0, l.jsx)(U, {
              startDistance: s
            })
          })
        },
        Y = "rockstargames-sites-gta-trilogyaf65282dda268ee462e24d7748be7f33",
        K = "rockstargames-sites-gta-trilogya1b5db38a4ca0a2b05b1894b0fc60c84",
        J = "rockstargames-sites-gta-trilogya23df178d85a3b9de658c3be823b7bdf",
        Q = "rockstargames-sites-gta-trilogyb55b6d45a8d2039e40c6d5768c03977f",
        X = "rockstargames-sites-gta-trilogyf41288844a361ba76edace326c31330f",
        Z = "rockstargames-sites-gta-trilogya542f6c4f3e41eda02177cc42bd89d8b",
        ee = (0, i.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, l.jsxs)(z, {
            id: "media",
            className: "rockstargames-sites-gta-trilogyff2f84401f8c432ff5adf5f5616cac19",
            children: [(0, l.jsx)("div", {
              className: "rockstargames-sites-gta-trilogyfd0e42bfdcb0d4a434617bb64729d3ec",
              children: (0, l.jsx)("h3", {
                children: s("trilogy.beforeafter-title")
              })
            }), (0, l.jsxs)("div", {
              className: `${Y} ${K}`,
              children: [(0, l.jsx)("img", {
                src: a(995)
              }), (0, l.jsx)("div", {
                className: X,
                children: (0, l.jsx)(b, {
                  className: Z,
                  variant: "III"
                })
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${J}`,
              children: [(0, l.jsx)("img", {
                src: a(9188)
              }), (0, l.jsx)("img", {
                src: a(7713)
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${Q}`,
              children: [(0, l.jsx)("img", {
                src: a(1154)
              }), (0, l.jsx)("img", {
                src: a(1151)
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${K}`,
              children: [(0, l.jsx)("img", {
                src: a(7001)
              }), (0, l.jsx)("div", {
                className: X,
                children: (0, l.jsx)(b, {
                  className: Z,
                  variant: "VC"
                })
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} rockstargames-sites-gta-trilogyf37d162d70ab46248b6e2d7335be4c11`,
              children: [(0, l.jsx)("img", {
                src: a(6734)
              }), (0, l.jsx)("img", {
                src: a(4779)
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${Q}`,
              children: [(0, l.jsx)("img", {
                src: a(1688)
              }), (0, l.jsx)("img", {
                src: a(6005)
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${K}`,
              children: [(0, l.jsx)("img", {
                src: a(9488)
              }), (0, l.jsx)("div", {
                className: X,
                children: (0, l.jsx)(b, {
                  className: Z,
                  variant: "SA"
                })
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${J}`,
              children: [(0, l.jsx)("img", {
                src: a(6863)
              }), (0, l.jsx)("img", {
                src: a(5154)
              })]
            }), (0, l.jsxs)("div", {
              className: `${Y} ${Q}`,
              children: [(0, l.jsx)("img", {
                src: a(385)
              }), (0, l.jsx)("img", {
                src: a(8580)
              })]
            })]
          })
        }));
      var se = a(4498);
      (0, i.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, i.makeVar)(!1)
      }), (0, i.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, i.makeVar)(!1)
      }), (0, i.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, i.makeVar)((0, i.lsSettingsReactive)()?.currentCharId)
      }), (0, i.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, i.makeVar)(null)
      }), (0, i.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, i.makeVar)(null)
      }), a(8384);
      const ae = (0, i.getScConfigForOrigin)();
      (0, i.makeVar)(ae), a(3428);
      const {
        graphEnv: te
      } = (0, i.getScConfigForOrigin)(), re = ((0, i.getUriForGraphEnv)(te), {
        data: null,
        characters: {
          gtao: []
        },
        loading: !1,
        loggedIn: null,
        hasProvider: !1
      });
      (0, i.setContextItem)({
        context: (0, r.createContext)(re),
        key: "userContext"
      }), a(6082);
      const ie = (0, i.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        ne = {
          track: () => null
        };
      class oe extends r.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, l.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogyd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, l.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, l.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ce = function(e) {
          let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(t) {
            return (0, l.jsx)(oe, {
              header: s,
              hidden: a,
              children: (0, l.jsx)(e, {
                ...t
              })
            })
          }
        },
        de = {
          rating: "rockstargames-sites-gta-trilogyc3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-gta-trilogyb98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-trilogyb6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-gta-trilogybabdd6ae2ff83f380dadc6982effa011"
        },
        le = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var me = a(5520);
      (0, i.importAll)(a(6672));
      const _e = ce((0, n.withIntl)((e => {
          let {
            descriptors: s = null,
            footer: t = null,
            href: o,
            img: c = null,
            titleSlug: d = null,
            style: _ = {},
            className: g
          } = e;
          const [u, f] = (0, r.useState)(!1), {
            inView: b
          } = (0, se.Wx)({
            threshold: .6
          }), [p, k] = (0, r.useState)({
            ratingDescriptors: s,
            ratingFooter: t,
            ratingImg: c,
            ratingUrl: o
          }), {
            track: v
          } = (0, r.useContext)(ie) ?? ne, h = (0, n.useIntl)(), {
            data: x
          } = (0, i.useQuery)(me.GameData, {
            variables: {
              titleSlug: d
            },
            skip: !d
          });
          if ((0, r.useEffect)((() => {
              x && k(x?.game)
            }), [x]), (0, r.useEffect)((() => {
              b && !u && p.img_rating && (v({
                event: "page_section_impression",
                element_placement: "rating"
              }), f(!0))
            }), [b]), !p.ratingImg) return null;
          const y = !!p.ratingDescriptors;
          return (0, l.jsxs)("div", {
            className: [de.rating, y ? de.withDescriptors : de.withOutDescriptors, g || ""].join(" "),
            style: (0, i.safeStyles)(_),
            children: [(0, l.jsx)(m, {
              to: p.ratingUrl,
              target: "_blank",
              children: (0, l.jsx)("img", {
                alt: h.formatMessage(le.components_ratings_link_alt, {
                  rating: (w = p.ratingImg, w.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: a(8194)(`./${p.ratingImg}`)
              })
            }), y && (0, l.jsxs)("div", {
              className: de.text,
              children: [(0, l.jsx)("p", {
                className: de.descriptors,
                dangerouslySetInnerHTML: {
                  __html: p?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), p.ratingFooter && (0, l.jsx)("hr", {}), p.ratingFooter && (0, l.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: p.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var w
        }), o)),
        ge = (e, s, a) => {
          const t = e.split(s),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(t[e]), e < t.length - 1 && r.push(a);
          return r
        },
        ue = ce(_e),
        fe = (0, i.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, l.jsxs)("div", {
            className: "rockstargames-sites-gta-trilogycff0d1611c8b1b4e30a2e8fc9e3d45a6",
            children: [(0, l.jsxs)(z, {
              className: "rockstargames-sites-gta-trilogyfc5e47223200a87ac7f4fbd4358d7210",
              children: [(0, l.jsx)("div", {
                className: "rockstargames-sites-gta-trilogyf4928a24a9702d14fb07bc08491061b5",
                children: (0, l.jsx)("img", {
                  src: a(2530)
                })
              }), (0, l.jsx)(x, {
                className: "rockstargames-sites-gta-trilogybc400f3d7a435dbfc99c8eff93367910",
                logoVariant: "horizontal"
              })]
            }), (0, l.jsx)("div", {
              className: "rockstargames-sites-gta-trilogya64356df196174eda6e1eb254cb29b1c",
              children: (0, l.jsxs)(z, {
                children: [(0, l.jsx)(ue, {
                  titleSlug: "GTATrilogy"
                }), (0, l.jsx)("div", {
                  className: "rockstargames-sites-gta-trilogyc64e8ba6b7433a45738e5e6fbf3150f7",
                  children: ge(s("trilogy.footer"), "{logo}", (0, l.jsx)("div", {
                    className: "rockstargames-sites-gta-trilogya4cfcaace7c557aa13c60d6645dc2f4b",
                    "aria-label": "Rockstar"
                  }, "logoRockstar"))
                })]
              })
            })]
          })
        })),
        be = () => (0, l.jsxs)("div", {
          className: "rockstargames-sites-gta-trilogye3c495c1027af37888627bab73b9285f",
          children: [(0, l.jsx)(y, {}), (0, l.jsx)(N, {}), (0, l.jsx)(S, {}), (0, l.jsx)(V, {}), (0, l.jsx)(H, {}), (0, l.jsx)(ee, {}), (0, l.jsx)(fe, {})]
        }),
        pe = () => {
          const e = [{
            path: "/",
            element: (0, l.jsx)(be, {})
          }, {
            path: "*",
            element: (0, l.jsx)(g, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, t.useRoutes)(e)
        },
        ke = () => (0, l.jsx)(pe, {})
    },
    5520: e => {
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

      function a(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && s.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, s)
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
      var t = {};

      function r(e, s) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == s) return t
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          a(e, s), t[e.name.value] = s
        }
      })), e.exports = s, e.exports.GameData = function(e, s) {
        var a = {
          kind: e.kind,
          definitions: [r(e, s)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = t[s] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(s) {
          var t = r(e, s);
          t && a.definitions.push(t)
        })), a
      }(s, "GameData")
    },
    3428: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "userData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "user"
              },
              name: {
                kind: "Name",
                value: "userData"
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
                    value: "avatar"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "nickname"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "profile_link"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "isAMinor"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "bearer_token_expired"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "agegate_pass"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "logged_in"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "client"
                    },
                    arguments: []
                  }]
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "subscribed"
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
          end: 230
        }
      };

      function a(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && s.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, s)
        }))
      }
      s.loc.source = {
        body: "query userData {\n    user: userData {\n        id\n        avatar\n        nickname\n        profile_link\n        isAMinor\n        bearer_token_expired\n        agegate_pass @client\n        logged_in @client\n        subscribed\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(e, s) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == s) return t
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          a(e, s), t[e.name.value] = s
        }
      })), e.exports = s, e.exports.userData = function(e, s) {
        var a = {
          kind: e.kind,
          definitions: [r(e, s)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = t[s] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(s) {
          var t = r(e, s);
          t && a.definitions.push(t)
        })), a
      }(s, "userData")
    },
    6672: (e, s, a) => {
      var t = {
        "./cero_a.png": 7558,
        "./cero_b.svg": 9362,
        "./cero_c.svg": 7299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 7065,
        "./cero_z.svg": 6554,
        "./djctq_10.svg": 1392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 9836,
        "./djctq_16.svg": 4222,
        "./djctq_18.svg": 8648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 3781,
        "./esrb_ao.svg": 9235,
        "./esrb_e.svg": 4256,
        "./esrb_e10plus.svg": 5315,
        "./esrb_m.svg": 7256,
        "./esrb_m_ao.svg": 419,
        "./esrb_rp.svg": 9069,
        "./esrb_rplm17.svg": 5088,
        "./esrb_t.svg": 8177,
        "./fpb_13.svg": 6595,
        "./fpb_16.svg": 8414,
        "./fpb_18.svg": 1864,
        "./fpb_pg.svg": 7404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 8157,
        "./grac_19.svg": 9612,
        "./grac_a.svg": 9303,
        "./gsrr_0.svg": 7443,
        "./gsrr_12.svg": 9980,
        "./gsrr_15.svg": 4611,
        "./gsrr_18.svg": 8918,
        "./gsrr_6.svg": 3117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 324,
        "./nmc_18.svg": 2466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 6807,
        "./nmc_7.svg": 8712,
        "./oflc_g.svg": 1022,
        "./oflc_m.svg": 2772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 7580,
        "./oflc_r18.svg": 4432,
        "./pegi_12.svg": 5821,
        "./pegi_16.svg": 6929,
        "./pegi_18.svg": 3956,
        "./pegi_3.svg": 7351,
        "./pegi_4.svg": 2424,
        "./pegi_6.svg": 6618,
        "./pegi_7.svg": 491,
        "./pegi_rp.png": 4293,
        "./rars_0.svg": 6855,
        "./rars_12.svg": 8952,
        "./rars_16.svg": 5044,
        "./rars_18.svg": 2690,
        "./rars_6.svg": 1913,
        "./usk_0.svg": 4406,
        "./usk_12.svg": 6151,
        "./usk_16.svg": 7707,
        "./usk_18.svg": 717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 1228,
        "./vaci_rp.png": 2323
      };

      function r(e) {
        var s = i(e);
        return a(s)
      }

      function i(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 6672
    },
    8194: (e, s, a) => {
      var t = {
        "./cero_a.png": 7558,
        "./cero_b.svg": 9362,
        "./cero_c.svg": 7299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 7065,
        "./cero_z.svg": 6554,
        "./djctq_10.svg": 1392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 9836,
        "./djctq_16.svg": 4222,
        "./djctq_18.svg": 8648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 3781,
        "./esrb_ao.svg": 9235,
        "./esrb_e.svg": 4256,
        "./esrb_e10plus.svg": 5315,
        "./esrb_m.svg": 7256,
        "./esrb_m_ao.svg": 419,
        "./esrb_rp.svg": 9069,
        "./esrb_rplm17.svg": 5088,
        "./esrb_t.svg": 8177,
        "./fpb_13.svg": 6595,
        "./fpb_16.svg": 8414,
        "./fpb_18.svg": 1864,
        "./fpb_pg.svg": 7404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 8157,
        "./grac_19.svg": 9612,
        "./grac_a.svg": 9303,
        "./gsrr_0.svg": 7443,
        "./gsrr_12.svg": 9980,
        "./gsrr_15.svg": 4611,
        "./gsrr_18.svg": 8918,
        "./gsrr_6.svg": 3117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 324,
        "./nmc_18.svg": 2466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 6807,
        "./nmc_7.svg": 8712,
        "./oflc_g.svg": 1022,
        "./oflc_m.svg": 2772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 7580,
        "./oflc_r18.svg": 4432,
        "./pegi_12.svg": 5821,
        "./pegi_16.svg": 6929,
        "./pegi_18.svg": 3956,
        "./pegi_3.svg": 7351,
        "./pegi_4.svg": 2424,
        "./pegi_6.svg": 6618,
        "./pegi_7.svg": 491,
        "./pegi_rp.png": 4293,
        "./rars_0.svg": 6855,
        "./rars_12.svg": 8952,
        "./rars_16.svg": 5044,
        "./rars_18.svg": 2690,
        "./rars_6.svg": 1913,
        "./usk_0.svg": 4406,
        "./usk_12.svg": 6151,
        "./usk_16.svg": 7707,
        "./usk_18.svg": 717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 1228,
        "./vaci_rp.png": 2323
      };

      function r(e) {
        var s = i(e);
        return a(s)
      }

      function i(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 8194
    },
    2752: (e, s, a) => {
      var t = {
        "./III_Girl.png": 7,
        "./SA_Girl.png": 1910,
        "./VC_Girl.png": 3941
      };

      function r(e) {
        var s = i(e);
        return a(s)
      }

      function i(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 2752
    },
    5545: (e, s, a) => {
      var t = {
        "./III-logo.svg": 1400,
        "./SA-logo.svg": 9787,
        "./VC-logo.svg": 1720,
        "./full-logo.svg": 6926,
        "./horizontal-logo.svg": 7499
      };

      function r(e) {
        var s = i(e);
        return a(s)
      }

      function i(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 5545
    },
    1412: (e, s, a) => {
      var t = {
        "./FOB_III.jpg": 2315,
        "./FOB_SA.jpg": 8802,
        "./FOB_VC.jpg": 5179
      };

      function r(e) {
        var s = i(e);
        return a(s)
      }

      function i(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, e.exports = r, r.id = 1412
    },
    7558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    9362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    7299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    7065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    6554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    1392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    9836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    4222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    8648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    3781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    9235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    4256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    5315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    7256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    9069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    5088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    8177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    6595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    8414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    1864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    7404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    8157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    7443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    9980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    4611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    8918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    3117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    2466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    6807: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    8712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    1022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    2772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    7580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    4432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    5821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    6929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    3956: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    7351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    2424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    6618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    4293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    6855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    8952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    5044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    2690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    1913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    4406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    6151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    7707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    1228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    2323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    7: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba9d39a51a293a0dea8015cb169a3f00.png"
    },
    1910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/815ee37b95c5da495dfd53e195b3fd2b.png"
    },
    3941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d694e018ebbf633042b0ab4efe240761.png"
    },
    1400: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ebac74a3bd8855474149e5183e5daab9.svg"
    },
    9787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/419c79b6f881cd3688627cfb79701a87.svg"
    },
    1720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eedafb67aa8e0d384b040a059e58c129.svg"
    },
    6926: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/040fbe2e73f8c389455e3388e65871e6.svg"
    },
    7499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/373d262bd11690abd9c7d019b2a06ae5.svg"
    },
    2315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3b429d8b2554c055088d26c6fee32e98.jpg"
    },
    8802: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3056c18e92a148889b955e35c1c1e51.jpg"
    },
    5179: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6791bf313eb4e358c452a31527d40ef.jpg"
    },
    2579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d0e385716c5426389c4d61fb78777d1c.svg"
    },
    3724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4dd59366a90e52fc8b44cbd1b4137bc2.svg"
    },
    9260: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/669f728359a35dafbb17cfcae2a26e4c.svg"
    },
    2905: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34e278813ef8f47dba1c371775c814b.svg"
    },
    7660: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b6d072ab2eab82ec405ce22dc2e1e98.svg"
    },
    8454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1550aa38eb8e866457a12bd02b9943d6.jpg"
    },
    8033: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/819b667fa0aef711c1f1628a42e8e9ce.jpg"
    },
    9988: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/567318b8517c492081e77e2e0a7ce63e.jpg"
    },
    2530: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fabc3ff8a64105c4d8ac1aadbeffb3a9.jpg"
    },
    4545: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d02080b921b7f16bcc79828f2098758f.jpg"
    },
    6790: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b523f9e2578bdc3e95de00427f8910d.jpg"
    },
    6275: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aea5f8a32dbc4b3b8cd475b36ca10553.jpg"
    },
    995: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d0db280cc91d285f6ed5eb64f3d9d8e.jpg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f21b89ff222aec91c5c432eeb7993a15.jpg"
    },
    7713: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4aeff66c2cfd92173bf6a93f9a533b24.jpg"
    },
    1154: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4d8cb815ee8236e1dbac6e7d3120809b.jpg"
    },
    1151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a6305db310108acdaa5f15d169b1b6c7.jpg"
    },
    9488: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c00b0e39ea1fa1e867a6402ed9f4761.jpg"
    },
    6863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d28dac374fa7413d066a50ca33cf6da7.jpg"
    },
    5154: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/39d1b9492d201b5d046ee2ba2f136001.jpg"
    },
    385: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bddd183ad5bce1fa0efdc5cbd958743.jpg"
    },
    8580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8a120c239702e7578f40def8fe1b8e5.jpg"
    },
    7001: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aa480237baeaa2aeb0df779e3b42e840.jpg"
    },
    6734: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c37f2dbd02b15d29abfce91294f29403.jpg"
    },
    4779: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c56ece29d1d4a95952e36faf50215d22.jpg"
    },
    1688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/423be4b38c2a859d7cf5b599814d4374.jpg"
    },
    6005: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6baec421d2ea5db3c5db1dfff3206ea4.jpg"
    }
  }
]);