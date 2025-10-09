try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9c6572d1-c426-4620-b84f-98dfb686b2be", e._sentryDebugIdIdentifier = "sentry-dbid-9c6572d1-c426-4620-b84f-98dfb686b2be")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [929], {
    64733: (e, n, a) => {
      a.r(n), a.d(n, {
        default: () => E
      });
      var t = a(42295),
        r = a(62229),
        s = a(9623),
        o = a(22557),
        c = a(61128),
        i = a(95966),
        l = a(2918),
        d = a(72408),
        u = a(81788);
      const g = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        m = (0, u.defineMessages)({
          engagement_legal_text: {
            id: "engagement_legal_text",
            description: "Legal Text",
            defaultMessage: "Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms."
          },
          engagement_faq: {
            id: "engagement_faq",
            description: "FAQ Text",
            defaultMessage: "FAQ"
          },
          engagement_faqs: {
            id: "engagement_faqs",
            description: "FAQs Text in plural",
            defaultMessage: "FAQs"
          },
          engagement_link_account: {
            id: "engagement_link_account",
            description: "Text for button to link another account",
            defaultMessage: "Link Another Account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account",
            description: "Text for button to link another game/console account",
            defaultMessage: "Link Game Account"
          }
        });
      var f = a(92440),
        b = a(26732);
      const _ = ({
          legalText: e
        }) => (0, t.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: e
          }
        }),
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        w = ({
          s: e,
          content: n,
          loggedIn: a,
          addClaim: r,
          signin: s,
          landingSlide: o
        }) => (0, t.jsxs)("div", {
          className: [e.contentContainer, e[o], e.landingSlide].join(" "),
          children: [(0, t.jsx)("img", {
            src: n.introScreen.image.sources.mobile || k,
            className: e.moduleImageMobile,
            alt: n.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: e.topContent,
            children: [(0, t.jsx)("div", {
              className: e.textContent,
              children: (0, t.jsxs)("div", {
                className: e.alert,
                children: [(0, t.jsx)("div", {
                  className: e.badge,
                  children: n.introScreen.tag
                }), (0, t.jsxs)("div", {
                  className: e.alertText,
                  children: [(0, t.jsx)("h2", {
                    children: n.introScreen.headline
                  }), (0, t.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: n.introScreen.body
                    }
                  })]
                })]
              })
            }), (0, t.jsx)("div", {
              className: e.btnContainer,
              children: (0, t.jsx)(b.A, {
                text: a ? n.introScreen.btnText.loggedIn : n.introScreen.btnText.loggedOut,
                onClick: a ? r : s
              })
            })]
          }), (0, t.jsx)("div", {
            className: e.bottomContent,
            children: (0, t.jsx)("div", {
              className: e.legal,
              children: (0, t.jsx)(_, {
                legalText: n.legalText
              })
            })
          })]
        });
      var p = a(24162),
        T = a(7545),
        h = a(91),
        x = a(14200);
      const A = ({
        s: e,
        content: n,
        successSlide: a,
        characterList: s,
        linkAccountUrl: o,
        linkMoreAccounts: c,
        linkAccountBtn: i
      }) => {
        const l = (0, r.createRef)(),
          d = (0, r.createRef)(),
          u = (0, r.createRef)(),
          [g, m] = (0, r.useState)(),
          [f, b] = (0, r.useState)(!1),
          [k, w] = (0, r.useState)(),
          [A, v] = (0, r.useState)(!1),
          [S, j] = (0, r.useState)(!0);
        return (0, r.useEffect)((() => {
          const e = () => {
            l?.current && b(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [l]), (0, r.useEffect)((() => {
          m({
            nextEl: d?.current,
            prevEl: u?.current
          })
        }), [u?.current, d?.current]), (0, t.jsxs)("div", {
          className: [e.contentContainer, e[a], e.successSlide].join(" "),
          "data-type": "long",
          children: [(0, t.jsxs)("div", {
            className: e.topContent,
            children: [(0, t.jsxs)("div", {
              className: e.alert,
              children: [(0, t.jsx)("div", {
                className: e.successAlert
              }), (0, t.jsxs)("div", {
                className: e.alertText,
                children: [(0, t.jsx)("h3", {
                  children: n.successScreen.headline
                }), (0, t.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: n.successScreen.body
                  }
                })]
              })]
            }), (0, t.jsxs)("div", {
              className: e.swiperWrap,
              children: [(0, t.jsx)("div", {
                className: e.swiperContainer,
                ref: l,
                children: (0, t.jsxs)(p.RC, {
                  mousewheel: {
                    releaseOnEdges: !0
                  },
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: f,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: g,
                  modules: [T.Vx, T.Jq],
                  onInit: e => {
                    w(e)
                  },
                  onSlideChange: e => {
                    v(e?.isEnd), j(e?.isBeginning)
                  },
                  children: [s.map((e => (0, t.jsx)(p.qr, {
                    tabIndex: 0,
                    children: (0, t.jsxs)(h.Root, {
                      children: [(0, t.jsx)(h.Avatar, {
                        src: e.mugshotUrl
                      }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, t.jsxs)(h.Content, {
                        children: [(0, t.jsx)(h.TopRow, {
                          children: (0, t.jsx)(h.PlatformTag, {
                            tagSize: h.PlatformTagSizes.large,
                            platform: e.platform
                          })
                        }), (0, t.jsx)(h.UserName, {
                          children: e.platformUsername
                        }), (0, t.jsx)(h.RankContent, {
                          children: (0, t.jsx)(h.RpCategory, {
                            rank: e.stats.overview.rank.value
                          })
                        })]
                      })]
                    })
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))), (0, t.jsx)(p.qr, {
                    children: (0, t.jsx)(x.A, {
                      className: [e.linkMore, s.length > 0 ? e.withIcon : ""].join(" "),
                      to: o,
                      onClick: c,
                      children: (0, t.jsx)("div", {
                        className: e.btnText,
                        children: i
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, t.jsx)("button", {
                className: e.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: u,
                onClick: () => {
                  k?.slidePrev()
                },
                disabled: S,
                "data-hidden": !f
              }), (0, t.jsx)("button", {
                className: e.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: d,
                onClick: () => {
                  k?.slideNext()
                },
                disabled: A,
                "data-hidden": !f
              })]
            })]
          }), (0, t.jsx)("div", {
            className: e.legal,
            children: (0, t.jsx)(_, {
              legalText: n.legalText
            })
          })]
        })
      };
      var v = a(98357);
      const S = ({
          s: e,
          content: n,
          unlinkedSlide: a,
          linkConsoleText: r,
          returnUrl: s,
          giftId: o
        }) => (0, t.jsxs)("div", {
          className: [e.contentContainer, e[a], e.unlinkedSlide, e.textContent].join(" "),
          children: [(0, t.jsx)("div", {
            className: e.textContent,
            children: (0, t.jsxs)("div", {
              className: e.platformButtonContainer,
              children: [(0, t.jsx)("div", {
                className: e.errorAlert
              }), (0, t.jsx)("h3", {
                children: n.unlinkedScreen.headline
              }), (0, t.jsx)(v.A, {
                variant: "secondary",
                buttonText: r,
                platformsAndLinks: [{
                  key: "ps",
                  platform: "ps",
                  translated: !0
                }, {
                  key: "xbox",
                  platform: "xbox",
                  translated: !0
                }],
                trackingType: "link_account",
                trackingParent: "WOC",
                target: "_self",
                trackingOId: o,
                returnUrl: s,
                children: (0, t.jsx)("div", {
                  className: e.alert,
                  children: (0, t.jsx)("div", {
                    className: e.alertText,
                    children: (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: n.unlinkedScreen.body
                      }
                    })
                  })
                })
              })]
            })
          }), (0, t.jsx)("div", {
            className: e.legal,
            children: (0, t.jsx)(_, {
              legalText: n.legalText
            })
          })]
        }),
        j = ({
          s: e,
          errorSlide: n,
          content: a
        }) => (0, t.jsxs)("div", {
          className: [e.contentContainer, e[n], e.errorSlide, e.textContent].join(" "),
          children: [(0, t.jsxs)("div", {
            className: e.textContent,
            children: [(0, t.jsxs)("div", {
              className: e.alert,
              children: [(0, t.jsx)("div", {
                className: e.errorAlert
              }), (0, t.jsx)("div", {
                className: e.alertText,
                children: (0, t.jsx)("h3", {
                  children: a.errorScreen.headline
                })
              })]
            }), (0, t.jsx)(b.A, {
              text: a.errorScreen.btnText,
              onClick: () => window.location.reload()
            })]
          }), (0, t.jsx)("div", {
            className: e.legal,
            children: (0, t.jsx)(_, {
              legalText: a.legalText
            })
          })]
        });
      var G = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(G || {});
      const y = {
          alert: "rockstargames-modules-core-newswire-articled18a7942f6ffe1c595090c27db4ed3cf",
          alertText: "rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8",
          avatarImg: "rockstargames-modules-core-newswire-articleecabab4d06fea8b01b7aaef8c0af779b",
          badge: "rockstargames-modules-core-newswire-articlebcac1dcfa5b088eab1e65fc68e8c85a3",
          bottomContent: "rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af",
          btnContainer: "rockstargames-modules-core-newswire-articlef4b714d7985247039d190db0652b8ceb",
          btnText: "rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e",
          characterCardOverride: "rockstargames-modules-core-newswire-articlec999e2136e0f6804222f8e8c2e623865",
          contentContainer: "rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d",
          errorAlert: "rockstargames-modules-core-newswire-articled3d7cc42ef277206a733e4cb57942870",
          errorSlide: "rockstargames-modules-core-newswire-articlec55d286bddb7bc024ba481baa3f25282",
          faq: "rockstargames-modules-core-newswire-articlef56f546a21ace49c216e9a67228efb66",
          faqLink: "rockstargames-modules-core-newswire-articlef11c7041488926e7c7f25fc224f98947",
          hidden: "rockstargames-modules-core-newswire-articlede0d2e1871164ef762659167bbd6529a",
          interestTracker: "rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f",
          interestTrackerWrapper: "rockstargames-modules-core-newswire-articled2b8c4d79af33709f68b37001ab7be39",
          landingSlide: "rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177",
          legal: "rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54",
          linkMore: "rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a",
          loader: "rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b",
          mobileImgContainer: "rockstargames-modules-core-newswire-articlec0fc20e5997ec0175e466407b77f13ea",
          moduleImage: "rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844",
          moduleImageMobile: "rockstargames-modules-core-newswire-articlebe574bc57f2a974b9acfab41bf011e87",
          offScreen: "rockstargames-modules-core-newswire-articlec5da19bfed6924ef3a54c7b6950850dd",
          onScreen: "rockstargames-modules-core-newswire-articleae620b51e3ff54bcb035a20296ee980c",
          pillBtn: "rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d",
          platformButtonContainer: "rockstargames-modules-core-newswire-articlecac0eb7158ec985ab3ee6372a2bd7672",
          rankOverride: "rockstargames-modules-core-newswire-articlecec42ef44a23c75f81c06af15a1b52ba",
          selected: "rockstargames-modules-core-newswire-articleb58430ad013dcff6fef7da7166cc691f",
          slideContainer: "rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c",
          spinner: "rockstargames-modules-core-newswire-articlec596ce72795db40bd64a752fcff020f2",
          successAlert: "rockstargames-modules-core-newswire-articled0d2bcc799b1f77be3797b44c90a217d",
          successSlide: "rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284",
          swiperBtnNext: "rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf",
          swiperBtnPrev: "rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b",
          swiperButton: "rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355",
          swiperContainer: "rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852",
          swiperWrap: "rockstargames-modules-core-newswire-articlece299e602293eb072f2aa29f92ade94d",
          textContent: "rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e",
          topContent: "rockstargames-modules-core-newswire-articlede05099174e82770aeae6cd301329294",
          unlinkedSlide: "rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d",
          visible: "rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f",
          withIcon: "rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e"
        },
        {
          host: N
        } = (0, i.getConfigForDomain)(),
        E = (0, u.withIntl)((({
          giftId: e,
          location: n = "gtaplus_site",
          introScreen: a,
          errorScreen: g,
          unlinkedScreen: b,
          successScreen: _,
          jumpLinkId: p,
          legalText: T
        }) => {
          const h = {
              errorScreen: {
                btnText: g?.errorButton || "",
                headline: g?.errorHeadline || ""
              },
              introScreen: {
                body: a?.introContent || "",
                btnText: {
                  loggedIn: a?.btnTextLoggedIn || "",
                  loggedOut: a?.btnTextLoggedOut || ""
                },
                headline: a?.introHeadline || "",
                image: {
                  alt: a?.image?.alt || a?.introHeadline || "",
                  sources: {
                    desktop: (0, f.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, f.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: T,
              successScreen: {
                body: _?.successContent || "",
                headline: _?.successHeadline || ""
              },
              unlinkedScreen: {
                body: b?.unlinkedContent || "",
                btnText: b?.unlinkedButtonText || "",
                headline: b?.unlinkedHeadline || ""
              }
            },
            [x] = (0, s.useSearchParams)(),
            {
              data: v,
              loggedIn: E
            } = (0, l.useRockstarUser)(),
            C = (0, i.useRockstarTokenPing)(),
            O = `https://${N}.rockstargames.com/settings/linkedaccounts`,
            q = (0, u.useIntl)(),
            {
              track: I
            } = (0, l.useGtmTrack)(),
            {
              ref: L,
              inView: M
            } = (0, c.useInView)({
              threshold: .6
            }),
            z = 1280,
            F = (0, r.createRef)(),
            [P, R] = (0, r.useState)(),
            [U, B] = (0, r.useState)([]),
            [W, D] = (0, r.useState)(!1),
            [Q, V] = (0, r.useState)(),
            [$, H] = (0, r.useState)("hidden"),
            [J, Y] = (0, r.useState)("hidden"),
            [K, X] = (0, r.useState)("hidden"),
            [Z, ee] = (0, r.useState)("hidden"),
            [ne, ae] = (0, r.useState)(!1),
            [te, re] = (0, r.useState)(G.landing),
            [se, oe] = (0, r.useState)(h.introScreen.image.sources.mobile || k),
            ce = `${document.location.pathname}${document.location.search}#${p}`,
            ie = (0, i.usePrevious)(Q),
            le = (0, i.usePrevious)(E),
            {
              signInUrl: de
            } = (0, i.useScAuthLinks)(ce),
            ue = e => {
              e === G.landing ? (re(G.landing), Y("onScreen"), H("hidden"), ee("hidden"), X("hidden")) : e === G.success ? (re(G.success), Y("offScreen"), H("visible"), setTimeout((() => {
                Y("hidden"), ee("hidden")
              }), 300), setTimeout((() => {
                H("onScreen")
              }), 100)) : e === G.error ? (re(G.error), Y("offScreen"), ee("visible"), setTimeout((() => {
                Y("hidden")
              }), 300), setTimeout((() => {
                ee("onScreen")
              }), 100)) : e === G.unlinked && (re(G.unlinked), Y("offScreen"), X("visible"), setTimeout((() => {
                Y("hidden"), ee("hidden")
              }), 300), setTimeout((() => {
                X("onScreen")
              }), 100))
            };
          return (0, r.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== n ? oe(h.introScreen.image.sources.mobile || k) : oe(h.introScreen.image.sources.desktop || k)
              },
              a = () => {
                window.innerWidth <= z && !W ? (D(!0), ue(te)) : window.innerWidth > z && W && D(!1), e()
              };
            return D(window.innerWidth <= z), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), [te, W]), (0, r.useEffect)((() => {
            const e = v?.characters?.gtao;
            B(e || [])
          }), [v?.characters?.gtao]), (0, r.useEffect)((() => {
            "boolean" != typeof ie && "boolean" != typeof le || !e || Q && E && (async () => {
              const {
                result: n
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: C,
                query: {
                  giftUId: e
                }
              });
              R(n)
            })()
          }), [Q, E, e]), (0, r.useEffect)((() => {
            "boolean" == typeof E ? E ? V(!0) : (V(!1), Y("onScreen")) : V(!0)
          }), [E]), (0, r.useEffect)((() => {
            void 0 !== P && v?.accountSynced && V(!1)
          }), [P, v?.accountSynced, V]), (0, r.useEffect)((() => {
            Q || (async () => {
              U.length > 0 && P ? ue(G.success) : ue(P ? G.unlinked : G.landing)
            })()
          }), [Q]), (0, r.useEffect)((() => {
            if (M && !ne) {
              if (void 0 === E) return;
              I({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: E ? "signed in" : "signed out"
              }), ae(!0)
            }
          }), [M, E]), (0, r.useEffect)((() => {
            "onScreen" === $ && I({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }), [$]), (0, r.useEffect)((() => {
            "onScreen" === K && I({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }), [K]), (0, r.useEffect)((() => {
            "onScreen" === Z && I({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [Z]), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: y.interestTrackerWrapper,
              children: (0, t.jsxs)(o.P.div, {
                className: [y.interestTracker, Q && y.loader].join(" "),
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
                id: p || "",
                children: [(0, t.jsx)("div", {
                  className: y.moduleImage,
                  style: {
                    "--engagement-image": `url(${se})`
                  }
                }), (0, t.jsx)("div", {
                  className: [y.slideContainer, Q ? y.loader : ""].join(" "),
                  ref: F,
                  children: Q ? (0, t.jsx)("div", {
                    className: y.spinner,
                    children: (0, t.jsx)(d.A, {
                      type: "SPINNING"
                    })
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [te === G.landing && (0, t.jsx)(w, {
                      s: y,
                      content: h,
                      loggedIn: E,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: n,
                            utmCampaign: x.get("utm_campaign"),
                            utmContent: x.get("utm_content"),
                            utmMedium: x.get("utm_medium"),
                            utmSource: x.get("utm_source")
                          },
                          {
                            status: t
                          } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: C,
                            query: a
                          }) ?? [];
                        ue(t ? G.success : G.error), I({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        I({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: de,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.href = de
                      },
                      landingSlide: J
                    }), te === G.success && (0, t.jsx)(A, {
                      s: y,
                      content: h,
                      successSlide: $,
                      characterList: U,
                      linkAccountUrl: O,
                      linkMoreAccounts: () => {
                        I({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: O,
                          text: m.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: q.formatMessage(m.engagement_link_account)
                    }), te === G.unlinked && (0, t.jsx)(S, {
                      s: y,
                      content: h,
                      unlinkedSlide: K,
                      linkConsoleText: q.formatMessage(m.engagement_link_console_account),
                      returnUrl: ce,
                      giftId: e
                    }), te === G.error && (0, t.jsx)(j, {
                      s: y,
                      errorSlide: Z,
                      content: h
                    })]
                  })
                })]
              })
            })
          })
        }), g)
    }
  }
]);