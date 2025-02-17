! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d26d0b58-09b8-4228-ad4b-bb26e753ea8b", e._sentryDebugIdIdentifier = "sentry-dbid-d26d0b58-09b8-4228-ad4b-bb26e753ea8b")
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
  [4201], {
    41193: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => Ee
      });
      var s = t(62229),
        n = t(9623),
        c = t(62665),
        r = t(22738),
        i = t(95966),
        o = t(2918),
        l = t(9137),
        d = t(81788);
      const g = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        m = (0, d.defineMessages)({
          engagement_legal_text: {
            id: "engagement_legal_text",
            defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
          },
          engagement_faq: {
            id: "engagement_faq",
            defaultMessage: "FAQ"
          },
          engagement_faqs: {
            id: "engagement_faqs",
            defaultMessage: "FAQs"
          },
          engagement_link_account: {
            id: "engagement_link_account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            defaultMessage: "Link Game Account"
          }
        });
      var u = t(92440),
        f = t(79512),
        _ = t(91029);
      const p = e => {
          let {
            legalText: a
          } = e;
          return (0, _.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: a
            }
          })
        },
        b = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        k = e => {
          let {
            s: a,
            content: t,
            refLanding: s,
            loggedIn: n,
            addClaim: c,
            signin: r,
            landingSlide: i
          } = e;
          return (0, _.jsxs)("div", {
            className: [a.contentContainer, a[i], a.landingSlide].join(" "),
            ref: s,
            children: [(0, _.jsx)("img", {
              src: t.introScreen.image.sources.mobile || b,
              className: a.moduleImageMobile,
              alt: t.introScreen.image.alt
            }), (0, _.jsxs)("div", {
              className: a.topContent,
              children: [(0, _.jsx)("div", {
                className: a.textContent,
                children: (0, _.jsxs)("div", {
                  className: a.alert,
                  children: [(0, _.jsx)("div", {
                    className: a.badge,
                    children: t.introScreen.tag
                  }), (0, _.jsxs)("div", {
                    className: a.alertText,
                    children: [(0, _.jsx)("h2", {
                      children: t.introScreen.headline
                    }), (0, _.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: t.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, _.jsx)("div", {
                className: a.btnContainer,
                children: (0, _.jsx)(f.A, {
                  text: n ? t.introScreen.btnText.loggedIn : t.introScreen.btnText.loggedOut,
                  onClick: n ? c : r
                })
              })]
            }), (0, _.jsx)("div", {
              className: a.bottomContent,
              children: (0, _.jsx)("div", {
                className: a.legal,
                children: (0, _.jsx)(p, {
                  legalText: t.legalText
                })
              })
            })]
          })
        };
      var h = t(80725),
        x = t(50216);
      const v = (e, a) => {
          switch (e) {
            case "pc":
              return "small" === a ? {
                src: t(50702),
                alt: "PC"
              } : {
                src: t(82864),
                alt: "PC"
              };
            case "ps4":
              return "small" === a ? {
                src: t(7166),
                alt: "PS4"
              } : {
                src: t(348),
                alt: "PS4"
              };
            case "ps5":
              return "small" === a ? {
                src: t(69743),
                alt: "PS5"
              } : {
                src: t(12541),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === a ? {
                src: t(71070),
                alt: "Xbox One"
              } : {
                src: t(17024),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === a ? {
                src: t(43777),
                alt: "Xbox Series X|S"
              } : {
                src: t(24963),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        S = e => t(e < 100 ? 15917 : e > 99 && e < 500 ? 89697 : e > 499 && e < 750 ? 58662 : 26563),
        N = (0, d.defineMessages)({
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
        C = {
          pillBtn: "rockstargames-sites-gta-gen9b618569985ae824a0ad12179a3fc1d73",
          selected: "rockstargames-sites-gta-gen9e1a2f9a25bb7f66968281e2bc4e4de88",
          scCharacterCard: "rockstargames-sites-gta-gen9b5c76acf3bb09d7897375c618e9b0a12",
          avatar: "rockstargames-sites-gta-gen9d6d3f262555eafb7d674aaf38e8ddfd6",
          scCharNames: "rockstargames-sites-gta-gen9cb995eda97ef905857c8d886edcf0897",
          scCharacterStats: "rockstargames-sites-gta-gen9a68d43553c702327a295c974a9c5e67b",
          scUserName: "rockstargames-sites-gta-gen9ad1b6a52da2116461c0d8b9c63b8ee28",
          scRpLevel: "rockstargames-sites-gta-gen9af42f06ddb8cff176be6fcb31e17271a",
          scRpIcon: "rockstargames-sites-gta-gen9f9a042c11d2e6a8ed1d5e78f40abd88d"
        },
        T = JSON.parse('{"en-US":{"language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","rp_icon":"RP Category","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu"}}'),
        j = e => (0, d.withIntl)(e, T),
        w = j((e => {
          let {
            characterData: a
          } = e;
          const n = (0, d.useIntl)(),
            {
              platform: c,
              platformUsername: r,
              mugshotUrl: i,
              stats: o
            } = a,
            [l, g] = (0, s.useState)(i),
            m = v(c, "large");
          return (0, _.jsxs)("div", {
            className: C.scCharacterCard,
            children: [(0, _.jsx)("div", {
              className: C.avatar,
              "data-size": "small",
              children: (0, _.jsx)("img", {
                src: l,
                alt: n.formatMessage(N.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  g(t(5931))
                }
              })
            }), (0, _.jsx)("div", {
              className: C.scCharacterStats,
              children: (0, _.jsxs)("div", {
                className: C.scCharNames,
                children: [(0, _.jsx)("img", {
                  src: m.src,
                  alt: m.alt
                }), (0, _.jsx)("div", {
                  className: C.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, _.jsx)("div", {
                  className: C.scRp,
                  children: (0, _.jsxs)("div", {
                    className: C.scRpLevel,
                    children: [(0, _.jsx)("img", {
                      className: C.scRpIcon,
                      src: S(o.overview.rank.value),
                      alt: n.formatMessage(N.profile_selector_rp_icon)
                    }), (0, _.jsx)("span", {
                      children: a.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }));
      var y = t(6400),
        M = t(12363);
      const A = (0, d.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        I = {
          pillBtn: "rockstargames-sites-gta-gen9e34929a5bcdda554c66b47a858ddd966",
          selected: "rockstargames-sites-gta-gen9e1ba906f108faeb297753d39a8d21b8b",
          menuStyles: "rockstargames-sites-gta-gen9b641fac428f473cbb4593cd058a01953",
          languageSelector: "rockstargames-sites-gta-gen9a9dd8a9cb7334e205df4ac3b4392916d",
          open: "rockstargames-sites-gta-gen9aa1d94595080f833a35e29fbbe8fd01c",
          linkWrapper: "rockstargames-sites-gta-gen9b4c3cae1cb117a07a412ed5e404c9a09",
          links: "rockstargames-sites-gta-gen9c64b05a604b1a6be373d35cf01edba2e",
          selectBoxWrapper: "rockstargames-sites-gta-gen9db1aead5717ba9dae1e272c3b7e6e801",
          selectBox: "rockstargames-sites-gta-gen9fe3ffe858384276c0311547c5300d84e",
          selectBoxOption: "rockstargames-sites-gta-gen9ae32febd9789e79c804b2679d25e8a65"
        },
        E = j((e => {
          let {
            theme: a,
            languageSelectorOpened: t,
            setLanguageSelectorOpened: n,
            location: c,
            parent: r = "footer",
            onLangChange: i
          } = e;
          const {
            track: l
          } = (0, o.useGtmTrack)(), g = (0, d.useIntl)(), [m, u] = (0, d.getLocale)(), [f, p] = (0, s.useState)(!1), b = (0, s.useRef)(null), [k, h] = (0, s.useState)(0), x = matchMedia("(hover: none) and (pointer: coarse)").matches, v = (0, s.useMemo)((() => (0, y.A)()), []), S = (0, s.useCallback)((e => {
            let a = c.pathname.replace(/^\/|\/$/g, "");
            const t = a.split("/");
            return d.locales.map((e => e.subdomaincom)).includes(t[0]) && (a = t.slice(1).join("/")), v.currentSite?.site === y.C.www ? "en" === e ? `${window.location.origin}/${a}${c.search}` : `${window.location.origin}/${e}/${a}${c.search}` : `${window.location.origin}/${a}${c.search}`
          }), [c]), N = e => {
            if (n && n(!1), m.subdomaincom === e || "none" === e) return void(n && n(!1));
            const a = d.locales.find((a => a.subdomaincom === e));
            if (a) {
              const t = S(e);
              l({
                event: "cta_other",
                link_url: t,
                text: e,
                element_placement: r
              }), u(a.iso), window.location.href = t, i?.({
                selectedLocale: a,
                track: l,
                parent: r
              })
            }
          };
          return (0, s.useEffect)((() => {
            void 0 !== t && !1 === t && !0 === f && p(!1)
          }), [t]), (0, s.useEffect)((() => {
            b.current && h(b.current.scrollHeight)
          }), [b]), (0, _.jsxs)("div", {
            className: [I.languageSelector, f ? I.open : ""].join(" "),
            "data-theme": a,
            children: [x && "sc-menu" === a && (0, _.jsx)("div", {
              className: I.selectBoxWrapper,
              children: (0, _.jsxs)("select", {
                className: I.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const a = e.currentTarget.value;
                  N(a)
                },
                "aria-label": g.formatMessage(A.language_selector_default),
                children: [(0, _.jsx)("option", {
                  className: I.selectBoxOption,
                  value: "none",
                  children: (0, _.jsx)(d.FormattedMessage, {
                    ...A.language_selector_default
                  })
                }), d.locales.map((e => {
                  let {
                    label: a,
                    subdomaincom: t
                  } = e;
                  return (0, _.jsx)("option", {
                    className: I.selectBoxOption,
                    value: t,
                    children: a
                  }, `mobile-${t}`)
                }))]
              })
            }), (!x || "sc-menu" !== a) && (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), n && n(!f), p(!f)
                },
                type: "button",
                "aria-label": g.formatMessage(A.language_selector_default),
                children: [(0, _.jsx)("i", {}), (0, _.jsx)("span", {
                  children: (0, _.jsx)(d.FormattedMessage, {
                    ...A.language_selector_default
                  })
                })]
              }), (0, _.jsx)("div", {
                className: I.linkWrapper,
                ref: b,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, _.jsx)("div", {
                  className: I.links,
                  children: d.locales.map((e => {
                    let {
                      subdomaincom: a,
                      label: t
                    } = e;
                    return (0, _.jsx)(s.Fragment, {
                      children: (0, _.jsx)(M.A, {
                        to: S(a),
                        onClick: (n = a, () => {
                          N(n)
                        }),
                        tabIndex: f ? 0 : -1,
                        children: t
                      })
                    }, t);
                    var n
                  }))
                })
              })]
            })]
          })
        }));
      var L = t(1597);
      const O = (0, i.makeVar)(!1),
        G = e => O(e),
        P = (0, i.makeVar)(-1),
        R = e => P(e),
        z = (0, i.makeVar)(-1),
        $ = e => z(e),
        U = (0, i.makeVar)(!0),
        F = e => U(e),
        q = (0, i.makeVar)(!0),
        B = e => q(e),
        H = () => {
          const e = (0, i.useReactiveVar)(O),
            a = (0, i.useReactiveVar)(P),
            t = (0, i.useReactiveVar)(z),
            n = (0, i.useReactiveVar)(U),
            c = (0, i.useReactiveVar)(q);
          return (0, s.useEffect)((() => {
            c || (e && G(!1), n && (F(!1), R(-1)))
          }), [c]), (0, s.useEffect)((() => {
            !e && c && (n || F(!0))
          }), [e, c]), (0, s.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: G,
            activeSubNavId: a,
            setActiveSubNavId: R,
            subNavExtraHeight: t,
            setSubNavExtraHeight: $,
            navOpened: n,
            setAccountNavOpened: F,
            charListHidden: c,
            setCharListHidden: B
          })), [e, a, t, n, c])
        };
      var D = t(12296),
        W = t.n(D);
      const V = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        X = e => ({
          text: e.formatMessage(N.sc_link_help),
          target: "_self",
          ga: {
            ...V,
            text: N.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(N.sc_link_support),
            location: {
              domain: y.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(N.sc_link_legal),
            location: {
              domain: y.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(N.sc_link_privacy_policy),
            location: {
              domain: y.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(N.sc_link_cookies_policy),
            location: {
              domain: y.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(N.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(N.sc_link_do_not_sell_my_information),
            location: {
              domain: y.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Q = e => {
          let {
            to: a,
            target: t,
            className: s,
            onNavigate: n,
            onClick: c,
            reloadDocument: r,
            children: i,
            ...o
          } = e;
          const l = a?.startsWith("http");
          return (0, _.jsx)("a", {
            href: a,
            className: s,
            onClick: e => {
              c?.(e), l || r || (n ? (e.preventDefault(), n(a)) : (e.preventDefault(), window.history.pushState({}, "", a)))
            },
            target: t,
            ...o,
            children: i
          })
        },
        J = e => {
          let {
            text: a,
            target: t,
            href: s,
            location: n,
            ga: c,
            dataTestId: r,
            isSubLink: i,
            hasNotifications: l = !1,
            onClickCallback: g = (() => {}),
            tabIndex: m,
            reloadDocument: u = !1,
            onNavigate: f
          } = e;
          const {
            track: p
          } = (0, o.useGtmTrack)(), b = (0, y.A)(), k = (0, d.useIntl)();
          let h = s;
          n && (h = n.domain === b.currentSite?.site ? n.path : `https://${b.sites[n.domain]}.rockstargames.com${n.path}`);
          const x = {
            ...c,
            link_url: h
          };
          return (0, _.jsxs)(Q, {
            className: i ? "rockstargames-sites-gta-gen9c2233d027086d54af877493d7d0700bd" : "rockstargames-sites-gta-gen9f97774323a9a1fc74cf5f7b0e2487363",
            "data-testid": r || "menuLink",
            title: a,
            to: h,
            target: t,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: m,
            onClick: e => {
              p(x), g(e)
            },
            onNavigate: f,
            children: [a, l && (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9adbacfbbfe7d2627fa0c2a2ffd219474",
              children: (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9e49e290899be3c888ca5a4b6b13736a1",
                children: k.formatMessage(N.nofications_new)
              })
            })]
          })
        },
        K = e => {
          let {
            id: a,
            text: t,
            target: n,
            href: c,
            location: r,
            ga: l,
            hasNotifications: d = !1,
            dataTestId: g,
            children: m = [],
            activeSubNavId: u,
            setActiveSubNavId: f,
            setSubNavExtraHeight: p,
            reloadDocument: b = !1,
            onClickCallback: k = (() => {}),
            onNavigate: h
          } = e;
          const {
            windowWidth: x,
            windowHeight: v
          } = (0, i.useWindowResize)(), {
            track: S
          } = (0, o.useGtmTrack)(), {
            navOpen: N
          } = (0, o.useRockstarUserState)(), C = (0, s.useRef)(null), [T, j] = (0, s.useState)(0), [w, y] = (0, s.useState)(0), [M, A] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            u !== a && !1 === M && A(!0), u === a && A(!1)
          }), [u]), (0, s.useEffect)((() => {
            if (!C.current) return;
            j(C?.current?.scrollHeight);
            const e = window.getComputedStyle(C.current);
            if (e) {
              let a = 16 * parseInt(e.getPropertyValue("--account-nav-opened-margin"), 10);
              Number.isNaN(a) && (a = 0), y(a)
            }
          }), [C, x, v]), m.length > 0 ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9cc28d1e2b0c9d7eca9f7c52a9a46fd68",
              type: "button",
              "data-testid": g || "menuButton",
              title: t,
              tabIndex: N ? 0 : -1,
              "data-children-hidden": M,
              onClick: e => {
                e.stopPropagation(), S(l), u === a ? (f(-1), p(0)) : (f(a), p(T + w + w))
              },
              children: [(0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9b94730a01d5e9223b69cbc2f20f23bcd",
                children: t
              }), (0, _.jsx)("span", {
                className: "rockstargames-sites-gta-gen9ff271a72fe259d74068b4f4d90db08bd"
              })]
            }, t), (0, _.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9cbf6e64eadb6f965877129d539aa2dcd",
              ref: C,
              "aria-hidden": M,
              style: {
                height: M ? 0 : `${T}px`
              },
              children: m.map((e => (0, s.createElement)(J, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: M || !N ? -1 : 0,
                onNavigate: h
              })))
            })]
          }) : (0, _.jsx)(J, {
            text: t,
            target: n,
            href: c,
            location: r,
            ga: l,
            hasNotifications: d,
            dataTestId: g,
            isSubLink: !1,
            onClickCallback: k,
            tabIndex: N ? 0 : -1,
            reloadDocument: b,
            onNavigate: h
          })
        },
        Y = e => {
          let {
            sc: a,
            location: t,
            onNavigate: n
          } = e;
          const {
            windowWidth: c,
            windowHeight: r
          } = (0, i.useWindowResize)(), l = (0, d.useIntl)(), {
            languageSelectorOpened: g,
            setLanguageSelectorOpened: m,
            activeSubNavId: u,
            setActiveSubNavId: f,
            subNavExtraHeight: p,
            setSubNavExtraHeight: b
          } = H(), {
            setSelectedCharacterTuple: k,
            navOpen: h
          } = (0, o.useRockstarUserState)(), x = (0, i.useLocale)(), v = (0, i.toScLocaleString)(x), [S, C] = (0, s.useState)(""), T = `${a.login}?returnUrl=${S}&lang=${v}`, j = `${a.signup}&returnUrl=${S}&lang=${v}`, w = (0, s.useMemo)((() => (0, y.A)()), []), M = (0, s.useMemo)((() => {
            const e = ((e, a, t) => [{
              text: e.formatMessage(N.sc_link_sign_in),
              href: a,
              ga: {
                event: "cta_login",
                text: N.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(N.sc_link_join_social_club),
              href: t,
              ga: {
                event: "cta_signup",
                text: N.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, X(e)])(l, T, j);
            return e
          }), [l, T, j, w]), [A, I] = (0, s.useState)(0), L = (0, s.createRef)(), O = () => {
            if (L.current) {
              const {
                current: e
              } = L, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), I(a + e)
              } else I(a)
            }
          };
          return (0, s.useEffect)((() => {
            const e = encodeURIComponent(`${t.pathname}${t.search}`);
            C(e)
          }), [JSON.stringify(t)]), (0, s.useEffect)((() => {
            k(!1)
          }), []), (0, s.useEffect)((() => {
            O(), W()((() => {
              setTimeout(O, 0)
            }), 300)
          }), [c, r]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("nav", {
              className: "rockstargames-sites-gta-gen9f300d66bd02f52ac564238ca6125a091",
              children: (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9ac3d3b74ee760cb2d7915cdbcc018413",
                "data-logged-in": "false",
                ref: L,
                style: {
                  "--navWrap-max-height": `${p+A}px`
                },
                children: M.map((e => (0, s.createElement)(K, {
                  ...e,
                  activeSubNavId: u,
                  setActiveSubNavId: f,
                  setSubNavExtraHeight: b,
                  onNavigate: n,
                  key: e.text
                })))
              })
            }), (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f30297461515a1b98f2c8695a3aedc24",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, _.jsx)(E, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: g,
                setLanguageSelectorOpened: e => {
                  f(-1), m(e)
                },
                defaultMessage: "Select a Language",
                location: t
              })
            })]
          })
        };
      var Z = t(5315);
      const ee = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        ae = "CharacterButton:characterName",
        te = "CharacterButton:platform",
        se = "CharacterButton:avatar",
        ne = "CharacterButton:rankValue",
        ce = e => {
          let {
            characterData: a,
            setMobileCardWidth: n,
            tabIndex: c
          } = e;
          const r = (0, d.useIntl)(),
            {
              currentCharId: i,
              setCurrentCharId: l
            } = (0, o.useRockstarUserState)(),
            {
              track: g
            } = (0, o.useGtmTrack)(),
            m = (0, s.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: p,
              stats: b
            } = a,
            [k, h] = (0, s.useState)(p),
            [x] = (0, s.useState)(a.index),
            C = v(u, "large"),
            T = i === a.index;
          return (0, s.useEffect)((() => {
            m.current && n && n(m?.current?.offsetWidth)
          }), [m]), (0, _.jsxs)("button", {
            className: "rockstargames-sites-gta-gen9b26daf00eb7def0a82a3c1481316acb0",
            type: "button",
            "aria-hidden": T,
            onClick: e => {
              e.stopPropagation(), l(x), g({
                event: "character_selector_select",
                text: ee[u] ?? "",
                position: x
              })
            },
            ref: m,
            tabIndex: c,
            children: [(0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d79f37fd31c0943cbf4368215dfc79a0",
              "data-size": "small",
              children: (0, _.jsx)("img", {
                src: k,
                alt: r.formatMessage(N.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  h(t(5931))
                },
                "data-testid": se
              })
            }), (0, _.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9ed30f2b92b3fc2937e7278409208872f",
              children: [(0, _.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a6009feaf97e98d18c6efc2de47ba8b4",
                children: [(0, _.jsx)("img", {
                  src: C.src,
                  alt: C.alt,
                  "data-testid": te
                }), (0, _.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c3ab062db0e9e0f75e0598eec5022de5",
                  "data-size": "small",
                  "data-testid": ae,
                  children: f
                })]
              }), (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5cab6371f4fcd1aa1ce14c0f97d1e7a",
                children: (0, _.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9c9300f34b82bbdffb7006ff32247adff",
                  children: [(0, _.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9faa7b2808fb96fa02fd2e99be36df8e6",
                    src: S(parseInt(b.overview.rank.value)),
                    alt: r.formatMessage(N.profile_selector_rp_icon)
                  }), (0, _.jsx)("span", {
                    "data-testid": ne,
                    children: a.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        };
      let re = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        ie = function(e) {
          return e.pc = "pc", e.ps4 = "ps4", e.ps5 = "ps5", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e
        }({});
      const oe = e => {
          let {
            tagSize: a,
            platform: t
          } = e;
          const {
            src: s,
            alt: n
          } = ((e, a) => {
            const t = a === re.small;
            switch (e) {
              case ie.pc:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg", alt: "PC"
                };
              case ie.ps4:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
                };
              case ie.ps5:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
                };
              case ie.xboxOne:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
                };
              case ie.xboxSeries:
                return {
                  src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
                };
              default:
                return {
                  src: "", alt: ""
                }
            }
          })(t, a);
          return (0, _.jsx)("img", {
            className: "rockstargames-sites-gta-gen9ea83a9d30b1ce0442bd3f94257fc0905",
            "data-testid": "platform-tag",
            "data-platform": t,
            "data-tag-size": a,
            src: s,
            alt: n
          })
        },
        le = {
          pillBtn: "rockstargames-sites-gta-gen9c094ee9992658964204dbc3c55063187",
          selected: "rockstargames-sites-gta-gen9f68f5558f3bacb6ab2f0f6e52b7c4d3d",
          profileDetails: "rockstargames-sites-gta-gen9c7a6cdc85906179aeadfbea13a491277",
          avatar: "rockstargames-sites-gta-gen9e1ed133f04d4201de6c787667fe46939",
          avatarPlatform: "rockstargames-sites-gta-gen9b061d8f050dd255669342700ddbe9f94",
          profileStats: "rockstargames-sites-gta-gen9a4a23edaf47f301893d88f6e233907b3",
          scNames: "rockstargames-sites-gta-gen9c6a703613ae9abf4927cf1f023878d9c",
          scTagsNames: "rockstargames-sites-gta-gen9ac56f06be77872b6f7ba074189a2ec36",
          scUserName: "rockstargames-sites-gta-gen9a829077ec05e5b83560be13ff3604c8e",
          scCrewName: "rockstargames-sites-gta-gen9c3c644cc20da4e904a7f4e5e3850bf7b",
          scCrewRankBar: "rockstargames-sites-gta-gen9cacefbe6235792c328eabdb72c7e812c",
          scCrewRankBarItem: "rockstargames-sites-gta-gen9f9fc60f5d92cda504e6a40d09ec34429",
          scProgress: "rockstargames-sites-gta-gen9b1230619acc50d561a73b55a185e782e",
          scRpLevel: "rockstargames-sites-gta-gen9e3dcece76ffe0dcd864d13ada6a4c532",
          scRpIcon: "rockstargames-sites-gta-gen9fd047e239c2b7adafe8729ad8e7ae646",
          scMoney: "rockstargames-sites-gta-gen9ffc96f13a79073f795d296415f874263",
          scCash: "rockstargames-sites-gta-gen9f21a08a90936d208b236a20d5893ab50",
          scBank: "rockstargames-sites-gta-gen9ee0f3a44274a32b7c03d50d1f8e23578"
        },
        de = "ProfileCard:characterName",
        ge = "ProfileCard:avatar",
        me = "ProfileCard:bankValue",
        ue = "ProfileCard:cashValue",
        fe = "ProfileCard:rankValue",
        _e = e => {
          let {
            character: a
          } = e;
          const {
            data: n
          } = (0, o.useRockstarUser)(), {
            track: c
          } = (0, o.useGtmTrack)(), r = (0, d.useIntl)(), [i, l] = (0, s.useState)([]), [g, m] = (0, s.useState)(null), [u, f] = (0, s.useState)(null), [p, b] = (0, s.useState)(!1), [k, h] = (0, s.useState)(-1), [x, v] = (0, s.useState)([]), [C, T] = (0, s.useState)(0), j = t(5931), {
            platform: w
          } = a, [y, M] = (0, s.useState)("0"), [A, I] = (0, s.useState)("0"), E = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), L = () => {
            G((0, _.jsx)("img", {
              src: j,
              alt: r.formatMessage(N.profile_selector_mugshot, {
                userName: n.nickname
              })
            }))
          }, [O, G] = (0, s.useState)((0, _.jsx)("img", {
            className: le.avatarImg,
            src: a.mugshotUrl,
            alt: r.formatMessage(N.profile_selector_mugshot, {
              userName: n.nickname
            }),
            onError: L,
            "data-testid": ge
          }));
          (0, s.useEffect)((() => {
            l(n.crews ?? [])
          }), [n.crews]), (0, s.useEffect)((() => {
            G((0, _.jsx)("img", {
              src: a.mugshotUrl,
              alt: n.nickname,
              onError: L,
              "data-testid": ge
            })), M(E(a.stats.overview.bank.value)), I(E(a.stats.overview.cash.value)), T(parseInt(a.stats.overview.rank.value))
          }), [a, n.nickname]), (0, s.useEffect)((() => {
            i && i.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), f(e.crewColour), h(e.rankOrder), b(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && b(!0))
            }))
          }), [i]), (0, s.useEffect)((() => {
            const e = [];
            if (!p && k > -1)
              for (let a = 5; a > k; a -= 1) e.push((0, _.jsx)("div", {
                className: le.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${a}`));
            v(e)
          }), [k, p, u]);
          const P = e => {
            e.stopPropagation(), c({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, _.jsxs)("div", {
            className: le.profileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, _.jsxs)("div", {
              className: le.avatar,
              children: [O, (0, _.jsx)("div", {
                className: le.avatarPlatform,
                "data-platform": a.platform,
                children: (0, _.jsx)(oe, {
                  platform: w,
                  tagSize: re.large
                })
              })]
            }), (0, _.jsxs)("div", {
              className: le.profileStats,
              children: [(0, _.jsx)("div", {
                className: le.scNames,
                children: (0, _.jsxs)("div", {
                  className: le.scTagsNames,
                  children: [(0, _.jsx)("span", {
                    className: le.scUserName,
                    "data-testid": de,
                    children: a.platformUsername
                  }), g && (0, _.jsxs)("span", {
                    className: le.scCrewName,
                    "data-arrow-tag": p,
                    children: [g, !p && (0, _.jsx)("div", {
                      className: le.scCrewRankBar,
                      children: x
                    })]
                  })]
                })
              }), (0, _.jsxs)("div", {
                className: le.scProgress,
                children: [(0, _.jsxs)("div", {
                  className: le.scRpLevel,
                  children: [(0, _.jsx)("img", {
                    className: le.scRpIcon,
                    src: S(C),
                    alt: r.formatMessage(N.profile_selector_rp_icon)
                  }), (0, _.jsx)("span", {
                    "data-testid": fe,
                    children: a.stats.overview.rank.value
                  })]
                }), (0, _.jsxs)("div", {
                  className: le.scMoney,
                  children: [(0, _.jsxs)("span", {
                    className: le.scCash,
                    "data-testid": ue,
                    children: ["$", A]
                  }), (0, _.jsxs)("span", {
                    className: le.scBank,
                    "data-testid": me,
                    children: ["$", y]
                  })]
                })]
              })]
            })]
          })
        },
        pe = e => {
          let {
            dragThreshold: a = 80,
            interactionDelay: t = 1e3,
            mobileGutterWidth: n = 17,
            slideChangeCallback: c = null,
            slideClickCallback: r = null,
            children: i = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, s.createRef)(),
            g = (0, Z.ri)(d, !1),
            [m, u] = (0, s.useState)(!1),
            [f, p] = (0, s.useState)(0),
            [b, k] = (0, s.useState)(0),
            [h, x] = (0, s.useState)([n]),
            [v, S] = (0, s.useState)(h[0]),
            [N, C] = (0, s.useState)(252),
            [T, j] = (0, s.useState)(0),
            [w, y] = (0, s.useState)([]),
            [M, A] = (0, s.useState)([]),
            [I, E] = (0, s.useState)(!1),
            L = e => {
              if (!0 === m || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(a)
            },
            O = e => {
              if (!0 === m || 0 === b || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = t > b ? 1 : -1,
                n = Math.abs(b - t);
              n > a ? (s > 0 ? (() => {
                if (!0 === m) return;
                u(!0);
                const e = f - 1 < 0 ? 0 : f - 1;
                p(e), S(h[e]), c && c(e)
              })() : (() => {
                if (!0 === m) return;
                u(!0);
                let e = f + 1 >= h.length ? h.length - 1 : f + 1;
                e < 0 && (e = 0), p(e), S(h[e]), c && c(e)
              })(), k(0)) : S(h[f] + n * s)
            },
            G = () => {
              !0 !== m && !0 !== l && (u(!0), !0 !== m && (S(h[f]), k(0)))
            };
          return (0, s.useEffect)((() => {
            const e = [];
            i.forEach((() => {
              e.push((0, s.createRef)())
            })), y(e)
          }), [i]), (0, s.useEffect)((() => {
            if (w.length < 1) return;
            C(w[0]?.current?.clientWidth || 0);
            const e = w[0]?.current.firstChild,
              a = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              t = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(t + a)
          }), [w]), (0, s.useEffect)((() => {
            !1 !== m && setTimeout((() => {
              u(!1)
            }), t)
          }), [m, t]), (0, s.useEffect)((() => {
            x(i.map(((e, a) => (e => {
              let a = 0;
              const t = i.length;
              return 1 === t ? .5 * g - .5 * N - 2 * n + T : (0 === e && (a = n - e * N), e === t - 1 && t > 1 && (a = t * N * -1 + (g - (n - T))), e > 0 && e < t - 1 && (a = e * N * -1 + (.5 * g - .5 * N + .5 * T)), a)
            })(a)))), 1 === i.length ? E(!0) : E(!1)
          }), [d.current, i, g]), (0, s.useEffect)((() => {
            const e = (a = f, i.map(((e, t) => {
              const s = {
                active: !1
              };
              return t === a && (s.active = !0), s
            })));
            var a;
            A(e)
          }), [i, f]), (0, s.useEffect)((() => {
            !0 !== o && !0 !== l || S(h[0])
          }), [l, o, h]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b794a0e12537ad5fd506353133b9d60a",
              ref: d,
              onTouchStart: L,
              onTouchMove: O,
              onTouchEnd: G,
              onMouseDown: L,
              onMouseMove: O,
              onMouseUp: G,
              onClick: () => {
                null !== r && r(f)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c1e8d8d5b52081b34283a5ac0d377362",
                "data-interaction-blocked": m,
                "data-single-item": I,
                style: {
                  transform: I ? null : `translateX(${v}px)`
                },
                children: i.map(((e, a) => (0, _.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dd4bcd955436c8a6982ee16756f7fd8b",
                  ref: w[a],
                  children: e
                }, `csItem-${e.props.characterData.platformUsername}-${e.props.characterData.platform}-${e.props.characterData.characterSlot}`)))
              })
            }), M.length > 1 && !1 === o && (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9e8e5249dac92a2bc76788d0fe7d7dfb7",
              children: M.map(((e, a) => (0, _.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f64d91c845a3931140b8b2c6a47da81f",
                "data-active": e.active
              }, a)))
            })]
          })
        },
        be = {
          pillBtn: "rockstargames-sites-gta-gen9b4f0b55680e047d303f82f34594abd96",
          selected: "rockstargames-sites-gta-gen9ed6126bd2f36579f2b8035e7c6579eb7",
          profile: "rockstargames-sites-gta-gen9e506a7deb95c0b0c9988325cc857ea9a",
          scCharacterSelector: "rockstargames-sites-gta-gen9c3ea8d575c892277f23ad5b589977862",
          scCharacterSelectBtn: "rockstargames-sites-gta-gen9ea15428b850bf436adda6f1dd8ac1af9",
          open: "rockstargames-sites-gta-gen9c5ffa3cbaa36329b72b3d928f9739849",
          scCharacterList: "rockstargames-sites-gta-gen9a84bbdd60e615baed0172e6b960c5d32",
          nav: "rockstargames-sites-gta-gen9ca9118e28091523e6679a3b95054fe93",
          languageSelector: "rockstargames-sites-gta-gen9b71a5b5521e679bcab20ec6302253996",
          navHeader: "rockstargames-sites-gta-gen9fa5046c68faa8d01f6101d01b61c3369",
          navWrap: "rockstargames-sites-gta-gen9ce91ee6ebb491174a4ccb4be628aaae7"
        },
        ke = e => {
          let {
            sc: a,
            charListHidden: t,
            hideCharacterList: n,
            refCharacterListDesktop: c,
            menuPadding: r,
            longCharList: l,
            setLongCharList: g,
            isMobileMode: m,
            setIsMobileMode: u,
            location: f,
            onNavigate: p
          } = e;
          const {
            windowWidth: b,
            windowHeight: k
          } = (0, i.useWindowResize)(), h = (0, d.useIntl)(), {
            languageSelectorOpened: x,
            setLanguageSelectorOpened: v,
            activeSubNavId: S,
            setActiveSubNavId: C,
            subNavExtraHeight: T,
            setSubNavExtraHeight: j,
            navOpened: w,
            setScNavOpened: M
          } = H(), [A, I] = (0, s.useState)(""), {
            webSettings: L
          } = (0, i.useRockstarWebSettings)(), {
            track: O
          } = (0, o.useGtmTrack)(), G = (0, i.useRockstarTokenPing)(), {
            data: P,
            loggedIn: R
          } = (0, o.useRockstarUser)(), {
            charactersNeeded: z,
            currentCharId: $,
            hasNotifications: U,
            navOpen: F,
            setCurrentCharId: q,
            setHasNotifications: B,
            setSelectedCharacterTuple: D,
            setUserData: Q
          } = (0, o.useRockstarUserState)(), [J, Y] = (0, s.useState)(null), [ee, ae] = (0, s.useState)(!1), [te, se] = (0, s.useState)(!1), [ne, re] = (0, s.useState)(0), ie = (0, s.createRef)(), oe = (0, Z.ri)(ie, !1), le = (0, s.createRef)(), [de, ge] = (0, s.useState)(0), [me, ue] = (0, s.useState)([]), [fe, ke] = (0, s.useState)(244), he = (0, s.useRef)(null), xe = (0, s.useMemo)((() => (0, y.A)()), []), ve = (0, s.useMemo)((() => ((e, a, t, s, n) => [{
            text: e.formatMessage(N.sc_link_activity_feed),
            location: {
              domain: y.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(N.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(N.sc_link_settings),
              location: {
                domain: y.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(N.sc_link_view_my_profile),
              href: t.profile_link,
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(N.sc_link_messages),
              location: {
                domain: y.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(N.sc_link_game_activation),
              location: {
                domain: y.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(N.sc_link_notifications),
            location: {
              domain: y.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...V,
              text: N.sc_link_notifications.defaultMessage,
              location: {
                domain: y.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(N.sc_link_crews),
            location: {
              domain: y.C.socialClub,
              path: `/member/${t.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...V,
              text: N.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(N.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(N.sc_link_my_friends),
              location: {
                domain: y.C.socialClub,
                path: `/member/${t.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(N.sc_link_import_friends),
              location: {
                domain: y.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(N.sc_link_find_friends),
              location: {
                domain: y.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...V,
                text: N.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, X(e), {
            text: e.formatMessage(N.sc_link_log_out),
            href: `${a.logout}?returnUrl=${n}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...V,
              text: N.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, a, P, U, A, window)), [h, a, P, U, A, xe]), Se = () => {
            se(r + fe * ne < oe)
          }, Ne = () => {
            if (le.current) {
              const {
                current: e
              } = le, a = e?.scrollHeight, t = window.getComputedStyle(e);
              if (t) {
                let e = 16 * parseInt(t.getPropertyValue("--account-nav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ge(a + e)
              } else ge(a)
            }
          };
          return (0, s.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            xe.currentSite?.site === y.C.socialClub && (e = encodeURIComponent("/")), I(e)
          }), [f]), (0, s.useEffect)((() => {
            ue(P?.characters?.[z] ?? [])
          }), [P, z]), (0, s.useEffect)((() => {
            P && Q(P)
          }), [P]), (0, s.useEffect)((() => {
            const e = P?.characters?.gtao ?? [];
            if (null !== R && !e.length) return void D(!1);
            if (null == $ || !e.length) return;
            const a = e?.[$] ?? e?.[0] ?? null;
            D(!!a?.platform && [a.platform, a.characterSlot])
          }), [$, P, R]), (0, s.useEffect)((() => {
            (async () => {
              if (!P?.id || !F) return;
              const {
                count: e
              } = await (0, i.coreScApiFetch)("notification/count", {
                pingBearer: G
              });
              B(e > 0)
            })()
          }), [P, F]), (0, s.useEffect)((() => {
            Se()
          }), [fe]), (0, s.useEffect)((() => {
            n(!0), u(b < 768), u(b < 768 || k < 649)
          }), [b, k]), (0, s.useEffect)((() => {
            let e = me.length - 1;
            e < 0 && (e = 0), re(e);
            const a = me.length > 0 ? me[$] ?? me[0] : null;
            a && (Y(a), me.length > 1 ? ae(!0) : ae(!1), g(me.length - 1 > 3))
          }), [$, me]), (0, s.useEffect)((() => {
            Se()
          }), [ne, m, b, me]), (0, s.useEffect)((() => {
            Ne(), W()((() => {
              setTimeout(Ne, 0)
            }), 300)
          }), [b, k]), (0, s.useEffect)((() => {
            const e = L?.currentCharId ?? 0;
            e !== $ && q(Math.max(0, Math.min(e, me.length - 1)))
          }), [me, L]), (0, _.jsxs)(_.Fragment, {
            children: [null !== J && "gtao" === z && (0, _.jsxs)("div", {
              className: be.scProfile,
              ref: he,
              tabIndex: -1,
              "aria-label": h.formatMessage(N.profile_selector_profile_card),
              children: [(0, _.jsx)(_e, {
                s: be,
                character: J
              }), !0 === ee && (0, _.jsxs)("div", {
                className: be.scCharacterSelector,
                children: [(0, _.jsx)("button", {
                  className: be.scCharacterSelectBtn,
                  "aria-hidden": !F,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const a = !t;
                    n(a), O({
                      event: a ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": t,
                  children: (0, _.jsx)("span", {
                    children: (0, _.jsx)(d.FormattedMessage, {
                      ...N.profile_selector_switch_character
                    })
                  })
                }), !m && (0, _.jsx)("div", {
                  className: be.scCharacterList,
                  "data-long-list": l,
                  "aria-hidden": t,
                  ref: c,
                  children: me.map((e => (0, _.jsx)(ce, {
                    tabIndex: t ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: ke
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`)))
                }), m && (0, _.jsx)("div", {
                  className: be.scCharacterList,
                  "data-single-item": 2 === me.length,
                  "data-swiper-disabled": te,
                  "aria-hidden": t,
                  ref: ie,
                  children: (0, _.jsx)(pe, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      O({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: te,
                    disableSwiper: te,
                    children: me.filter(((e, a) => a !== $)).map((e => (0, s.createElement)(ce, {
                      characterData: e,
                      setMobileCardWidth: ke,
                      key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`,
                      tabIndex: t ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, _.jsxs)("nav", {
              className: be.nav,
              "aria-hidden": !F,
              children: [(0, _.jsx)("button", {
                className: be.navHeader,
                type: "button",
                "data-opened": w,
                "data-nav-opened": F,
                tabIndex: w ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), w || M(!0)
                },
                "data-testid": "playerButton",
                children: (0, _.jsx)("span", {
                  children: P.nickname
                })
              }), (0, _.jsx)("div", {
                className: be.navWrap,
                "data-opened": w,
                "data-logged-in": "true",
                ref: le,
                style: {
                  "--navWrap-max-height": `${de+T}px`
                },
                children: ve.map(((e, a) => (0, s.createElement)(K, {
                  ...e,
                  id: a,
                  activeSubNavId: S,
                  setActiveSubNavId: C,
                  setSubNavExtraHeight: j,
                  onNavigate: p,
                  key: e.text
                })))
              })]
            }), (0, _.jsx)("div", {
              className: be.scLanguageSelector,
              style: {
                visibility: F ? null : "hidden"
              },
              children: (0, _.jsx)(E, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: x,
                setLanguageSelectorOpened: v,
                location: f
              })
            })]
          })
        },
        he = {
          menu: "rockstargames-sites-gta-gen9c0a7178c1cd96d7fb7a2e4ebab0c01bb",
          pillBtn: "rockstargames-sites-gta-gen9c31a4663e3c088e8d1095331ba8cafc8",
          selected: "rockstargames-sites-gta-gen9c5f6868e76307ee73276f140c2f988df",
          navOpen: "rockstargames-sites-gta-gen9b8b5590986941337aa51e2eb7ff12f78",
          dragHandle: "rockstargames-sites-gta-gen9ff857b2fcc09a7810a6861b9975a05b7",
          dragHandleBtn: "rockstargames-sites-gta-gen9b49ca12d5334ed642d4359aa44105834",
          scOverlay: "rockstargames-sites-gta-gen9eff8c1d4bf675accdb7d952aba0174dc"
        },
        xe = (0, i.getConfigForDomain)(),
        ve = (j((e => {
          let {
            location: a,
            onNavigate: n
          } = e;
          const {
            windowHeight: c
          } = (0, i.useWindowResize)(), r = (0, d.useIntl)(), {
            languageSelectorOpened: l,
            setLanguageSelectorOpened: g,
            setActiveSubNavId: m,
            navOpened: u,
            setAccountNavOpened: f,
            charListHidden: p,
            setCharListHidden: b
          } = H(), [k, h] = (0, s.useState)(!1), {
            navHidden: x = !1
          } = (0, i.useState)(), {
            loggedIn: v
          } = (0, o.useRockstarUser)(), {
            currentCharId: S,
            navOpen: C,
            setNavOpen: T,
            userData: j
          } = (0, o.useRockstarUserState)(), {
            track: w
          } = (0, o.useGtmTrack)(), [y, M] = (0, s.useState)(!1), A = (0, s.useRef)(), [I, E] = (0, s.useState)(0), O = (0, s.createRef)(), [G, P] = (0, s.useState)(!1), [R, z] = (0, s.useState)(0), [$, U] = (0, s.useState)(!1), {
            mutateWebSettings: F,
            webSettings: q
          } = (0, i.useRockstarWebSettings)(), B = (0, s.useCallback)((e => {
            b(e), A.current && !0 === e && (A.current.scrollTop = 0)
          }), [A]);
          return (0, s.useEffect)((() => {
            null !== S && q.currentCharId !== S && F({
              key: "currentCharId",
              value: S
            }), !1 === v ? F({
              key: "currentCharId",
              value: null
            }) : v && !j && w({
              event: "account_synced"
            })
          }), [S, v]), (0, s.useEffect)((() => {
            A.current && (!1 === p && !1 === y && (A.current.style.height = `${A.current.scrollHeight}px`), !0 === p && (A.current.style.height = null))
          }), [p, A, y]), (0, s.useEffect)((() => {
            const e = () => {
                T(!1), B(!0)
              },
              a = a => {
                const t = O?.current && a?.composedPath().includes(O.current);
                C && !t && e()
              },
              t = a => {
                "Escape" === a.code && e()
              };
            return document.addEventListener("click", a), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", a), document.removeEventListener("keyup", t)
            }
          }), [O]), (0, s.useEffect)((() => {
            T(!1), B(!0)
          }), [x]), (0, s.useEffect)((() => {
            if (O.current) {
              const {
                current: e
              } = O, a = window.getComputedStyle(e);
              E(parseInt(a.paddingRight, 10) + parseInt(a.paddingLeft, 10))
            }
          }), [O]), (0, s.useEffect)((() => {
            U(window.navigator.userAgent.includes("Mac"))
          }), []), (0, s.useEffect)((() => {
            O.current && h(O?.current?.scrollHeight >= c)
          }), [O, c]), (0, s.useEffect)((() => {
            C || (m(-1), g(!1))
          }), [C]), (0, s.useEffect)((() => {
            l && (p || B(!0), u && (f(!1), m(-1)))
          }), [l]), (0, s.useEffect)((() => {
            u && (l && g(!1), p || B(!0))
          }), [u]), void 0 === v ? null : (0, _.jsxs)(L.A, {
            enabled: !!C,
            removeScrollBar: !1,
            children: [(0, _.jsxs)("div", {
              className: [he.menu, C ? he.navOpen : ""].join(" "),
              "data-logged-in": v,
              "data-mac-browser": $,
              "data-scroll-mode": k,
              ref: O,
              "aria-hidden": !C,
              children: [(0, _.jsx)("button", {
                className: he.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const a = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(a)
                },
                onTouchMove: e => {
                  if (0 === R) return;
                  const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(R - a) > 1 && (z(0), T(!1))
                },
                children: (0, _.jsx)("img", {
                  className: he.dragHandle,
                  src: t(35902),
                  alt: r.formatMessage(N.sc_menu_drag_handle)
                })
              }), v ? (0, _.jsx)(ke, {
                sc: xe,
                charListHidden: p,
                hideCharacterList: B,
                refCharacterListDesktop: A,
                menuPadding: I,
                longCharList: y,
                setLongCharList: M,
                isMobileMode: G,
                setIsMobileMode: P,
                location: a,
                onNavigate: n
              }) : (0, _.jsx)(Y, {
                sc: xe,
                navOpen: C,
                location: a,
                onNavigate: n
              })]
            }), (0, _.jsx)("div", {
              className: [he.scOverlay, C ? he.navOpen : ""].join(" "),
              "data-logged-in": v
            })]
          })
        })), "rockstargames-sites-gta-gen9ee811a1fa8b17eb47afb419dd08ffb03"),
        Se = (j((e => {
          let {
            setOtherHeaderDropdowns: a
          } = e;
          const n = (0, d.useIntl)(),
            {
              data: c,
              loggedIn: r
            } = (0, o.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: l,
              navOpen: g,
              setNavOpen: m
            } = (0, o.useRockstarUserState)(),
            {
              track: u
            } = (0, o.useGtmTrack)(),
            [f, p] = (0, s.useState)(),
            [b, k] = (0, s.useState)(!1),
            [h, x] = (0, s.useState)([]);
          (0, s.useEffect)((() => {
            x(c?.characters?.[i] ?? [])
          }), [c, i]);
          const v = (0, s.useCallback)((e => {
            e.stopPropagation(), m(!g), 1 == !g && a(null), u({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: g ? "close" : "open"
            })
          }), [g]);
          return (0, s.useEffect)((() => {
            k(!!h?.[l]?.mugshotUrl)
          }), [h, l]), (0, s.useEffect)((() => {
            p((() => {
              switch (r) {
                case void 0:
                  return t(5931);
                case !1:
                  return t(32810);
                case !0:
                  return h?.[l]?.mugshotUrl ?? c?.avatar
              }
            })())
          }), [c, h, l, r]), f ? (0, _.jsxs)("button", {
            className: ve,
            "aria-label": n.formatMessage(g ? N.sc_menu_close : N.sc_menu_open),
            "aria-expanded": g,
            type: "button",
            onClick: v,
            "data-mugshot": b,
            "data-testid": "avatarMenuButton",
            "data-logged-in": Boolean(r),
            children: [(0, _.jsx)("img", {
              className: "rockstargames-sites-gta-gen9a917b58ca28b68550a1aa5d99c7eb998",
              src: f,
              alt: c?.nickname || ""
            }), r && (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c06123ceae7ca4759ec8b1a5197823db",
              children: (0, _.jsx)(oe, {
                platform: h?.[l]?.platform,
                tagSize: re.small
              })
            }), r && (0, _.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c4433b1ae03459d4ddde2ad1e858ed30",
              "data-platform": h?.[l]?.platform ?? null
            })]
          }) : null
        })), e => {
          let {
            s: a,
            content: t,
            refSuccess: n,
            successSlide: c,
            characterList: r,
            linkAccountUrl: i,
            linkMoreAccounts: o,
            linkAccountBtn: l
          } = e;
          const d = (0, s.createRef)(),
            g = (0, s.createRef)(),
            m = (0, s.createRef)(),
            [u, f] = (0, s.useState)(),
            [b, k] = (0, s.useState)(!1),
            [v, S] = (0, s.useState)(),
            [N, C] = (0, s.useState)(!1),
            [T, j] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = () => {
              d?.current && k(d?.current?.scrollWidth > d?.current?.offsetWidth)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, s.useEffect)((() => {
            f({
              nextEl: g?.current,
              prevEl: m?.current
            })
          }), [m?.current, g?.current]), (0, _.jsxs)("div", {
            className: [a.contentContainer, a[c], a.successSlide].join(" "),
            "data-type": "long",
            ref: n,
            children: [(0, _.jsxs)("div", {
              className: a.topContent,
              children: [(0, _.jsxs)("div", {
                className: a.alert,
                children: [(0, _.jsx)("div", {
                  className: a.successAlert
                }), (0, _.jsxs)("div", {
                  className: a.alertText,
                  children: [(0, _.jsx)("h3", {
                    children: t.successScreen.headline
                  }), (0, _.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: t.successScreen.body
                    }
                  })]
                })]
              }), (0, _.jsxs)("div", {
                className: a.swiperWrap,
                children: [(0, _.jsx)("div", {
                  className: a.swiperContainer,
                  ref: d,
                  children: (0, _.jsxs)(h.RC, {
                    mousewheel: {
                      releaseOnEdges: !0
                    },
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: b,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: u,
                    modules: [x.Vx, x.Jq],
                    onInit: e => {
                      S(e)
                    },
                    onSlideChange: e => {
                      C(e?.isEnd), j(e?.isBeginning)
                    },
                    children: [r.map((e => (0, _.jsx)(h.qr, {
                      tabIndex: "0",
                      children: (0, s.createElement)(w, {
                        characterData: e,
                        key: `${e.platformUsername}-${e.platform}-${e.characterSlot}`
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))), (0, _.jsx)(h.qr, {
                      children: (0, _.jsx)(M.A, {
                        className: [a.linkMore, r.length > 0 ? a.withIcon : ""].join(" "),
                        to: i,
                        onClick: o,
                        children: (0, _.jsx)("div", {
                          className: a.btnText,
                          children: l
                        })
                      })
                    }, "linkMore")]
                  })
                }), (0, _.jsx)("button", {
                  className: a.swiperBtnPrev,
                  "aria-label": "Previous Character",
                  type: "button",
                  ref: m,
                  onClick: () => {
                    v?.slidePrev()
                  },
                  disabled: T,
                  "data-hidden": !b
                }), (0, _.jsx)("button", {
                  className: a.swiperBtnNext,
                  "aria-label": "Next Character",
                  type: "button",
                  ref: g,
                  onClick: () => {
                    v?.slideNext()
                  },
                  disabled: N,
                  "data-hidden": !b
                })]
              })]
            }), (0, _.jsx)("div", {
              className: a.legal,
              children: (0, _.jsx)(p, {
                legalText: t.legalText
              })
            })]
          })
        });
      var Ne = t(56666);
      const Ce = e => {
          let {
            s: a,
            content: t,
            unlinkedSlide: s,
            refUnlinked: n,
            linkConsoleText: c,
            platformLogin: r,
            giftId: i
          } = e;
          return (0, _.jsxs)("div", {
            className: [a.contentContainer, a[s], a.unlinkedSlide, a.textContent].join(" "),
            ref: n,
            children: [(0, _.jsx)("div", {
              className: a.textContent,
              children: (0, _.jsxs)("div", {
                className: a.platformButtonContainer,
                children: [(0, _.jsx)("div", {
                  className: a.errorAlert
                }), (0, _.jsx)("h3", {
                  children: t.unlinkedScreen.headline
                }), (0, _.jsx)(Ne.A, {
                  variant: "secondary",
                  buttonText: c,
                  platformsAndLinks: [{
                    href: r("np"),
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: r("xbox"),
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: i,
                  children: (0, _.jsx)("div", {
                    className: a.alert,
                    children: (0, _.jsx)("div", {
                      className: a.alertText,
                      children: (0, _.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: t.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, _.jsx)("div", {
              className: a.legal,
              children: (0, _.jsx)(p, {
                legalText: t.legalText
              })
            })]
          })
        },
        Te = e => {
          let {
            s: a,
            errorSlide: t,
            content: s,
            refError: n
          } = e;
          return (0, _.jsxs)("div", {
            className: [a.contentContainer, a[t], a.errorSlide, a.textContent].join(" "),
            ref: n,
            children: [(0, _.jsxs)("div", {
              className: a.textContent,
              children: [(0, _.jsxs)("div", {
                className: a.alert,
                children: [(0, _.jsx)("div", {
                  className: a.errorAlert
                }), (0, _.jsx)("div", {
                  className: a.alertText,
                  children: (0, _.jsx)("h3", {
                    children: s.errorScreen.headline
                  })
                })]
              }), (0, _.jsx)(f.A, {
                text: s.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, _.jsx)("div", {
              className: a.legal,
              children: (0, _.jsx)(p, {
                legalText: s.legalText
              })
            })]
          })
        };
      var je = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(je || {});
      const we = {
          pillBtn: "rockstargames-sites-gta-gen9d00777e4f5cd743e631c6c55037e895d",
          selected: "rockstargames-sites-gta-gen9b58430ad013dcff6fef7da7166cc691f",
          interestTrackerWrapper: "rockstargames-sites-gta-gen9d2b8c4d79af33709f68b37001ab7be39",
          interestTracker: "rockstargames-sites-gta-gen9db2a4f7b1cfeb4aeca1410a7cd445b8f",
          loader: "rockstargames-sites-gta-gen9d8c578c46f36662f7652cc76eac7da9b",
          moduleImage: "rockstargames-sites-gta-gen9befb0ce557a2dd74f4835661fb577844",
          mobileImgContainer: "rockstargames-sites-gta-gen9c0fc20e5997ec0175e466407b77f13ea",
          moduleImageMobile: "rockstargames-sites-gta-gen9be574bc57f2a974b9acfab41bf011e87",
          slideContainer: "rockstargames-sites-gta-gen9ebe07d21ea2d2a2e3c9c8abd04d3eb7c",
          contentContainer: "rockstargames-sites-gta-gen9ffc948e8cbe4f2137ab4e2772eb1195d",
          landingSlide: "rockstargames-sites-gta-gen9c25099ec278fe51b5b3c1874dbf7f177",
          textContent: "rockstargames-sites-gta-gen9a8602b1bf8cb8b652a23bdd9757d227e",
          successSlide: "rockstargames-sites-gta-gen9ba550c3a58739708ed4e9ba1d5cc9284",
          unlinkedSlide: "rockstargames-sites-gta-gen9fed30d7e2c15a2e8588bfcb1947d415d",
          platformButtonContainer: "rockstargames-sites-gta-gen9cac0eb7158ec985ab3ee6372a2bd7672",
          errorSlide: "rockstargames-sites-gta-gen9c55d286bddb7bc024ba481baa3f25282",
          btnContainer: "rockstargames-sites-gta-gen9f4b714d7985247039d190db0652b8ceb",
          topContent: "rockstargames-sites-gta-gen9de05099174e82770aeae6cd301329294",
          bottomContent: "rockstargames-sites-gta-gen9a01ac7c10f297d8150a9b802bedb72af",
          legal: "rockstargames-sites-gta-gen9c2720597abb7fa1a9af5cd99d8c40a54",
          faq: "rockstargames-sites-gta-gen9f56f546a21ace49c216e9a67228efb66",
          faqLink: "rockstargames-sites-gta-gen9f11c7041488926e7c7f25fc224f98947",
          badge: "rockstargames-sites-gta-gen9bcac1dcfa5b088eab1e65fc68e8c85a3",
          hidden: "rockstargames-sites-gta-gen9de0d2e1871164ef762659167bbd6529a",
          visible: "rockstargames-sites-gta-gen9b344d81cd5eafc49a6b22f62e6e7f76f",
          onScreen: "rockstargames-sites-gta-gen9ae620b51e3ff54bcb035a20296ee980c",
          offScreen: "rockstargames-sites-gta-gen9c5da19bfed6924ef3a54c7b6950850dd",
          alert: "rockstargames-sites-gta-gen9d18a7942f6ffe1c595090c27db4ed3cf",
          alertText: "rockstargames-sites-gta-gen9cbddf3c3597e3da9c2cb9388de7ea8f8",
          errorAlert: "rockstargames-sites-gta-gen9d3d7cc42ef277206a733e4cb57942870",
          successAlert: "rockstargames-sites-gta-gen9d0d2bcc799b1f77be3797b44c90a217d",
          linkMore: "rockstargames-sites-gta-gen9e3f0330500235638f50be4a36b2e498a",
          withIcon: "rockstargames-sites-gta-gen9b1c731df00d3a0b945adcfb95b5e026e",
          btnText: "rockstargames-sites-gta-gen9ea24dcc72092b2111a1bc9b420d3595e",
          swiperContainer: "rockstargames-sites-gta-gen9ba3a5dd56ead99e725ea9031a0105852",
          swiperWrap: "rockstargames-sites-gta-gen9ce299e602293eb072f2aa29f92ade94d",
          swiperButton: "rockstargames-sites-gta-gen9becae27bc56d3d7ce5e33da63b298355",
          swiperBtnPrev: "rockstargames-sites-gta-gen9c2a3afc2e5783cecd9f1096c3cfdf61b",
          swiperBtnNext: "rockstargames-sites-gta-gen9ee20a3331aa9cb5857d0c4d7a18b4aaf",
          spinner: "rockstargames-sites-gta-gen9c596ce72795db40bd64a752fcff020f2"
        },
        {
          host: ye,
          login: Me,
          authHost: Ae,
          clientId: Ie
        } = (0, i.getConfigForDomain)(),
        Ee = (0, d.withIntl)((e => {
          let {
            giftId: a,
            location: t = "gtaplus_site",
            introScreen: g,
            errorScreen: f,
            unlinkedScreen: p,
            successScreen: h,
            jumpLinkId: x,
            legalText: v
          } = e;
          const S = (0, i.useLocale)(),
            N = {
              errorScreen: {
                btnText: f?.errorButton || "",
                headline: f?.errorHeadline || ""
              },
              introScreen: {
                body: g?.introContent || "",
                btnText: {
                  loggedIn: g?.btnTextLoggedIn || "",
                  loggedOut: g?.btnTextLoggedOut || ""
                },
                headline: g?.introHeadline || "",
                image: {
                  alt: g?.image?.alt || g?.introHeadline || "",
                  sources: {
                    desktop: (0, u.useGetCdnSource)(g?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, u.useGetCdnSource)(g?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: g?.tag || ""
              },
              legalText: v,
              successScreen: {
                body: h?.successContent || "",
                headline: h?.successHeadline || ""
              },
              unlinkedScreen: {
                body: p?.unlinkedContent || "",
                btnText: p?.unlinkedButtonText || "",
                headline: p?.unlinkedHeadline || ""
              }
            },
            [C] = (0, n.useSearchParams)(),
            T = (0, i.useRockstarToken)(),
            {
              data: j,
              loggedIn: w
            } = (0, o.useRockstarUser)(),
            y = (0, i.useRockstarTokenPing)(),
            M = `https://${ye}.rockstargames.com/settings/linkedaccounts`,
            A = (0, i.toScLocaleString)(S),
            I = (0, d.useIntl)(),
            {
              track: E
            } = (0, o.useGtmTrack)(),
            {
              ref: L,
              inView: O
            } = (0, r.useInView)({
              threshold: .6
            }),
            G = 1280,
            P = (0, s.createRef)(),
            R = (0, s.createRef)(),
            z = (0, s.createRef)(),
            $ = (0, s.createRef)(),
            U = (0, s.createRef)(),
            [F, q] = (0, s.useState)(),
            [B, H] = (0, s.useState)([]),
            [D, W] = (0, s.useState)(!1),
            [V, X] = (0, s.useState)(),
            [Q, J] = (0, s.useState)("hidden"),
            [K, Y] = (0, s.useState)("hidden"),
            [Z, ee] = (0, s.useState)("hidden"),
            [ae, te] = (0, s.useState)("hidden"),
            [se, ne] = (0, s.useState)(!1),
            [ce, re] = (0, s.useState)(je.disabled),
            [ie, oe] = (0, s.useState)(je.landing),
            [le, de] = (0, s.useState)(0),
            [ge, me] = (0, s.useState)(0),
            [ue, fe] = (0, s.useState)(0),
            [_e, pe] = (0, s.useState)(0),
            [be, ke] = (0, s.useState)(0),
            [he, xe] = (0, s.useState)(!1),
            [ve, Ne] = (0, s.useState)(N.introScreen.image.sources.mobile || b),
            [Ee, Le] = (0, s.useState)(!1),
            Oe = `${document.location.pathname}${document.location.search}#${x}`,
            Ge = (0, i.usePrevious)(V),
            Pe = (0, i.usePrevious)(w),
            Re = () => {
              P.current && me(P?.current?.scrollHeight), R.current && fe(R?.current?.scrollHeight), z.current && pe(z?.current?.scrollHeight), $.current && ke($?.current?.scrollHeight)
            },
            ze = (e, a) => {
              e === je.landing && (e => {
                oe(je.landing), e && de(ge), Y("onScreen"), J("hidden"), te("hidden"), ee("hidden")
              })(a), e === je.success && (e => {
                oe(je.success), e && de(ue), Y("offScreen"), J("visible"), setTimeout((() => {
                  Y("hidden"), te("hidden")
                }), 300), setTimeout((() => {
                  J("onScreen")
                }), 100)
              })(a), e === je.error && (e => {
                oe(je.error), e && de(_e), Y("offScreen"), setTimeout((() => {
                  Y("hidden")
                }), 300), setTimeout((() => {
                  te("onScreen")
                }), 100)
              })(a), e === je.unlinked && (e => {
                oe(je.unlinked), e && de(be), Y("offScreen"), ee("visible"), setTimeout((() => {
                  Y("hidden"), te("hidden")
                }), 300), setTimeout((() => {
                  ee("onScreen")
                }), 100)
              })(a)
            },
            $e = () => {
              "disabled" === ce ? (async () => {
                const e = {
                  giftUId: a,
                  location: t,
                  utmCampaign: C.get("utm_campaign"),
                  utmContent: C.get("utm_content"),
                  utmMedium: C.get("utm_medium"),
                  utmSource: C.get("utm_source")
                };
                if (B.length > 0) {
                  const {
                    status: a
                  } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: y,
                    query: e
                  }) ?? [];
                  ze(a ? je.success : je.error, !1)
                } else ze(F ? je.unlinked : je.landing, !1)
              })() : "success" === ce ? ze(je.success, !1) : "error" === ce ? ze(je.error, !1) : "unlinked" === ce && ze(je.unlinked, !1)
            };
          return (0, s.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== t ? Ne(N.introScreen.image.sources.mobile || b) : Ne(N.introScreen.image.sources.desktop || b)
              },
              a = () => {
                Re(), window.innerWidth <= G && !D && (W(!0), ze(ie, !0)), window.innerWidth > G && D && W(!1), e()
              };
            return W(window.innerWidth <= G), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), [ie, D, P, $, z, R]), (0, s.useEffect)((() => {
            ie === je.success && le !== ue ? de(ue) : ie === je.error && le !== _e ? de(_e) : ie === je.landing && le !== ge ? de(ge) : ie === je.unlinked && le !== be && de(be)
          }), [_e, ue, le, be, ge]), (0, s.useEffect)((() => {
            Ee || (Le(!0), Re(), he && ie === je.success && de(R?.current?.scrollHeight || 0))
          }), [P, $, z, R]), (0, s.useEffect)((() => {
            const e = j?.characters?.gtao;
            H(e || [])
          }), [j]), (0, s.useEffect)((() => {
            "boolean" != typeof Ge && "boolean" != typeof Pe || !a || V && w && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: y,
                query: {
                  giftUId: a
                }
              });
              q(e), X(!1)
            })()
          }), [V, w, a]), (0, s.useEffect)((() => {
            "boolean" == typeof w ? w ? X(!0) : (X(!1), Y("onScreen")) : X(!0)
          }), [w]), (0, s.useEffect)((() => {
            F && B.length > 0 ? (xe(!0), ze(je.success, !0)) : F && 0 === B.length ? ze(je.unlinked, !0) : "boolean" != typeof F && F || ze(je.landing, !0)
          }), [F]), (0, s.useEffect)((() => {
            if (O && !se) {
              if (void 0 === w) return;
              E({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: w ? "signed in" : "signed out"
              }), ne(!0)
            }
          }), [O, w]), (0, s.useEffect)((() => {
            "onScreen" === Q && E({
              element_placement: "WOC",
              event: "alert_update",
              o_id: a,
              text: "Almost there!"
            })
          }), [Q]), (0, s.useEffect)((() => {
            "onScreen" === Z && E({
              element_placement: "WOC",
              event: "alert_error",
              o_id: a,
              text: "No Qualifying Character Found"
            })
          }), [Z]), (0, s.useEffect)((() => {
            "onScreen" === ae && E({
              element_placement: "event_label",
              event: "alert_error",
              o_id: a,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ae]), (0, s.useEffect)((() => {
            $e()
          }), [ce]), (0, _.jsxs)(_.Fragment, {
            children: [!1, (0, _.jsx)("div", {
              className: we.interestTrackerWrapper,
              children: (0, _.jsxs)(c.motion.div, {
                className: [we.interestTracker, V && we.loader].join(" "),
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
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: L,
                id: x || "",
                children: [(0, _.jsx)("div", {
                  className: we.moduleImage,
                  style: {
                    "--engagement-image": `url(${ve})`
                  }
                }), (0, _.jsx)("div", {
                  className: [we.slideContainer, V ? we.loader : ""].join(" "),
                  ref: U,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === le ? "200%" : `${le}px`,
                    height: 0 !== le && D ? `${le}px` : "auto"
                  },
                  children: V ? (0, _.jsx)("div", {
                    className: we.spinner,
                    children: (0, _.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(k, {
                      s: we,
                      content: N,
                      refLanding: P,
                      loggedIn: w,
                      addClaim: async () => {
                        E({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: a,
                          text: "claim now",
                          section_layout: w ? "signed in" : "signed out"
                        }), $e()
                      },
                      signin: () => {
                        const e = `${Me}?returnUrl=${encodeURIComponent(Oe)}&lang=${A}`;
                        E({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: w ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: K
                    }), (0, _.jsx)(Se, {
                      s: we,
                      content: N,
                      refSuccess: R,
                      successSlide: Q,
                      characterList: B,
                      linkAccountUrl: M,
                      linkMoreAccounts: () => {
                        E({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: M,
                          text: m.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: I.formatMessage(m.engagement_link_account)
                    }), (0, _.jsx)(Ce, {
                      s: we,
                      content: N,
                      unlinkedSlide: Z,
                      refUnlinked: $,
                      linkConsoleText: I.formatMessage(m.engagement_link_console_account),
                      platformLogin: e => `https://${Ae}.rockstargames.com/tpa/${e}/link/?cid=${Ie}&lang=${A}&returnUrl=${encodeURIComponent(Oe)}&accessToken=${T}`,
                      giftId: a
                    }), (0, _.jsx)(Te, {
                      s: we,
                      errorSlide: ae,
                      content: N,
                      refError: z
                    })]
                  })
                })]
              })
            })]
          })
        }), g)
    },
    35902: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    32810: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    5931: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    50702: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    7166: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    69743: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    71070: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    43777: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    82864: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    348: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    12541: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    17024: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    24963: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    15917: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    89697: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    26563: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    58662: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    }
  }
]);