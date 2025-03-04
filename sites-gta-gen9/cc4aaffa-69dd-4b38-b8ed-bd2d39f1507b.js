! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cc4aaffa-69dd-4b38-b8ed-bd2d39f1507b", e._sentryDebugIdIdentifier = "sentry-dbid-cc4aaffa-69dd-4b38-b8ed-bd2d39f1507b")
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
  [9384], {
    29216: (e, n, a) => {
      a.r(n), a.d(n, {
        default: () => q
      });
      var t = a(62229),
        s = a(9623),
        r = a(62665),
        i = a(22738),
        o = a(95966),
        c = a(2918),
        l = a(9137),
        d = a(81788);
      const g = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        u = (0, d.defineMessages)({
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
      var m = a(92440),
        f = a(79512),
        b = a(91029);
      const _ = e => {
          let {
            legalText: n
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: n
            }
          })
        },
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        p = e => {
          let {
            s: n,
            content: a,
            refLanding: t,
            loggedIn: s,
            addClaim: r,
            signin: i,
            landingSlide: o
          } = e;
          return (0, b.jsxs)("div", {
            className: [n.contentContainer, n[o], n.landingSlide].join(" "),
            ref: t,
            children: [(0, b.jsx)("img", {
              src: a.introScreen.image.sources.mobile || k,
              className: n.moduleImageMobile,
              alt: a.introScreen.image.alt
            }), (0, b.jsxs)("div", {
              className: n.topContent,
              children: [(0, b.jsx)("div", {
                className: n.textContent,
                children: (0, b.jsxs)("div", {
                  className: n.alert,
                  children: [(0, b.jsx)("div", {
                    className: n.badge,
                    children: a.introScreen.tag
                  }), (0, b.jsxs)("div", {
                    className: n.alertText,
                    children: [(0, b.jsx)("h2", {
                      children: a.introScreen.headline
                    }), (0, b.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: a.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, b.jsx)("div", {
                className: n.btnContainer,
                children: (0, b.jsx)(f.A, {
                  text: s ? a.introScreen.btnText.loggedIn : a.introScreen.btnText.loggedOut,
                  onClick: s ? r : i
                })
              })]
            }), (0, b.jsx)("div", {
              className: n.bottomContent,
              children: (0, b.jsx)("div", {
                className: n.legal,
                children: (0, b.jsx)(_, {
                  legalText: a.legalText
                })
              })
            })]
          })
        };
      var h = a(80725),
        T = a(50216),
        x = a(72569),
        A = a(12363);
      const S = e => {
        let {
          s: n,
          content: a,
          refSuccess: s,
          successSlide: r,
          characterList: i,
          linkAccountUrl: o,
          linkMoreAccounts: c,
          linkAccountBtn: l
        } = e;
        const d = (0, t.createRef)(),
          g = (0, t.createRef)(),
          u = (0, t.createRef)(),
          [m, f] = (0, t.useState)(),
          [k, p] = (0, t.useState)(!1),
          [S, v] = (0, t.useState)(),
          [j, w] = (0, t.useState)(!1),
          [G, E] = (0, t.useState)(!0);
        return (0, t.useEffect)((() => {
          const e = () => {
            d?.current && p(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, t.useEffect)((() => {
          f({
            nextEl: g?.current,
            prevEl: u?.current
          })
        }), [u?.current, g?.current]), (0, b.jsxs)("div", {
          className: [n.contentContainer, n[r], n.successSlide].join(" "),
          "data-type": "long",
          ref: s,
          children: [(0, b.jsxs)("div", {
            className: n.topContent,
            children: [(0, b.jsxs)("div", {
              className: n.alert,
              children: [(0, b.jsx)("div", {
                className: n.successAlert
              }), (0, b.jsxs)("div", {
                className: n.alertText,
                children: [(0, b.jsx)("h3", {
                  children: a.successScreen.headline
                }), (0, b.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: a.successScreen.body
                  }
                })]
              })]
            }), (0, b.jsxs)("div", {
              className: n.swiperWrap,
              children: [(0, b.jsx)("div", {
                className: n.swiperContainer,
                ref: d,
                children: (0, b.jsxs)(h.RC, {
                  mousewheel: {
                    releaseOnEdges: !0
                  },
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: k,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: m,
                  modules: [T.Vx, T.Jq],
                  onInit: e => {
                    v(e)
                  },
                  onSlideChange: e => {
                    w(e?.isEnd), E(e?.isBeginning)
                  },
                  children: [i.map((e => (0, b.jsx)(h.qr, {
                    tabIndex: "0",
                    children: (0, b.jsxs)(x.Root, {
                      children: [(0, b.jsx)(x.Avatar, {
                        src: e.mugshotUrl
                      }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, b.jsxs)(x.Content, {
                        children: [(0, b.jsx)(x.TopRow, {
                          children: (0, b.jsx)(x.PlatformTag, {
                            tagSize: x.PlatformTagSizes.large,
                            platform: x.Platforms.xboxSeries
                          })
                        }), (0, b.jsx)(x.UserName, {
                          children: e.platformUsername
                        }), (0, b.jsx)(x.RankContent, {
                          children: (0, b.jsx)(x.RpCategory, {
                            rank: e.stats.overview.rank.value
                          })
                        })]
                      })]
                    })
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))), (0, b.jsx)(h.qr, {
                    children: (0, b.jsx)(A.A, {
                      className: [n.linkMore, i.length > 0 ? n.withIcon : ""].join(" "),
                      to: o,
                      onClick: c,
                      children: (0, b.jsx)("div", {
                        className: n.btnText,
                        children: l
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: n.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: u,
                onClick: () => {
                  S?.slidePrev()
                },
                disabled: G,
                "data-hidden": !k
              }), (0, b.jsx)("button", {
                className: n.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: g,
                onClick: () => {
                  S?.slideNext()
                },
                disabled: j,
                "data-hidden": !k
              })]
            })]
          }), (0, b.jsx)("div", {
            className: n.legal,
            children: (0, b.jsx)(_, {
              legalText: a.legalText
            })
          })]
        })
      };
      var v = a(56666);
      const j = e => {
          let {
            s: n,
            content: a,
            unlinkedSlide: t,
            refUnlinked: s,
            linkConsoleText: r,
            platformLogin: i,
            giftId: o
          } = e;
          return (0, b.jsxs)("div", {
            className: [n.contentContainer, n[t], n.unlinkedSlide, n.textContent].join(" "),
            ref: s,
            children: [(0, b.jsx)("div", {
              className: n.textContent,
              children: (0, b.jsxs)("div", {
                className: n.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: n.errorAlert
                }), (0, b.jsx)("h3", {
                  children: a.unlinkedScreen.headline
                }), (0, b.jsx)(v.A, {
                  variant: "secondary",
                  buttonText: r,
                  platformsAndLinks: [{
                    href: i("np"),
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: i("xbox"),
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: o,
                  children: (0, b.jsx)("div", {
                    className: n.alert,
                    children: (0, b.jsx)("div", {
                      className: n.alertText,
                      children: (0, b.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: a.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, b.jsx)("div", {
              className: n.legal,
              children: (0, b.jsx)(_, {
                legalText: a.legalText
              })
            })]
          })
        },
        w = e => {
          let {
            s: n,
            errorSlide: a,
            content: t,
            refError: s
          } = e;
          return (0, b.jsxs)("div", {
            className: [n.contentContainer, n[a], n.errorSlide, n.textContent].join(" "),
            ref: s,
            children: [(0, b.jsxs)("div", {
              className: n.textContent,
              children: [(0, b.jsxs)("div", {
                className: n.alert,
                children: [(0, b.jsx)("div", {
                  className: n.errorAlert
                }), (0, b.jsx)("div", {
                  className: n.alertText,
                  children: (0, b.jsx)("h3", {
                    children: t.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(f.A, {
                text: t.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: n.legal,
              children: (0, b.jsx)(_, {
                legalText: t.legalText
              })
            })]
          })
        };
      var G = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(G || {});
      const E = {
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
          spinner: "rockstargames-sites-gta-gen9c596ce72795db40bd64a752fcff020f2",
          characterCardOverride: "rockstargames-sites-gta-gen9c999e2136e0f6804222f8e8c2e623865",
          rankOverride: "rockstargames-sites-gta-gen9cec42ef44a23c75f81c06af15a1b52ba",
          avatarImg: "rockstargames-sites-gta-gen9ecabab4d06fea8b01b7aaef8c0af779b"
        },
        {
          host: N,
          login: y,
          authHost: C,
          clientId: O
        } = (0, o.getConfigForDomain)(),
        q = (0, d.withIntl)((e => {
          let {
            giftId: n,
            location: a = "gtaplus_site",
            introScreen: g,
            errorScreen: f,
            unlinkedScreen: _,
            successScreen: h,
            jumpLinkId: T,
            legalText: x
          } = e;
          const A = (0, o.useLocale)(),
            v = {
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
                    desktop: (0, m.useGetCdnSource)(g?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, m.useGetCdnSource)(g?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: g?.tag || ""
              },
              legalText: x,
              successScreen: {
                body: h?.successContent || "",
                headline: h?.successHeadline || ""
              },
              unlinkedScreen: {
                body: _?.unlinkedContent || "",
                btnText: _?.unlinkedButtonText || "",
                headline: _?.unlinkedHeadline || ""
              }
            },
            [q] = (0, s.useSearchParams)(),
            L = (0, o.useRockstarToken)(),
            {
              data: I,
              loggedIn: z
            } = (0, c.useRockstarUser)(),
            M = (0, o.useRockstarTokenPing)(),
            R = `https://${N}.rockstargames.com/settings/linkedaccounts`,
            F = (0, o.toScLocaleString)(A),
            P = (0, d.useIntl)(),
            {
              track: U
            } = (0, c.useGtmTrack)(),
            {
              ref: $,
              inView: B
            } = (0, i.useInView)({
              threshold: .6
            }),
            W = 1280,
            H = (0, t.createRef)(),
            D = (0, t.createRef)(),
            V = (0, t.createRef)(),
            Q = (0, t.createRef)(),
            J = (0, t.createRef)(),
            [Y, K] = (0, t.useState)(),
            [X, Z] = (0, t.useState)([]),
            [ee, ne] = (0, t.useState)(!1),
            [ae, te] = (0, t.useState)(),
            [se, re] = (0, t.useState)("hidden"),
            [ie, oe] = (0, t.useState)("hidden"),
            [ce, le] = (0, t.useState)("hidden"),
            [de, ge] = (0, t.useState)("hidden"),
            [ue, me] = (0, t.useState)(!1),
            [fe, be] = (0, t.useState)(G.disabled),
            [_e, ke] = (0, t.useState)(G.landing),
            [pe, he] = (0, t.useState)(0),
            [Te, xe] = (0, t.useState)(0),
            [Ae, Se] = (0, t.useState)(0),
            [ve, je] = (0, t.useState)(0),
            [we, Ge] = (0, t.useState)(0),
            [Ee, Ne] = (0, t.useState)(!1),
            [ye, Ce] = (0, t.useState)(v.introScreen.image.sources.mobile || k),
            [Oe, qe] = (0, t.useState)(!1),
            Le = `${document.location.pathname}${document.location.search}#${T}`,
            Ie = (0, o.usePrevious)(ae),
            ze = (0, o.usePrevious)(z),
            Me = () => {
              H.current && xe(H?.current?.scrollHeight), D.current && Se(D?.current?.scrollHeight), V.current && je(V?.current?.scrollHeight), Q.current && Ge(Q?.current?.scrollHeight)
            },
            Re = (e, n) => {
              e === G.landing && (e => {
                ke(G.landing), e && he(Te), oe("onScreen"), re("hidden"), ge("hidden"), le("hidden")
              })(n), e === G.success && (e => {
                ke(G.success), e && he(Ae), oe("offScreen"), re("visible"), setTimeout((() => {
                  oe("hidden"), ge("hidden")
                }), 300), setTimeout((() => {
                  re("onScreen")
                }), 100)
              })(n), e === G.error && (e => {
                ke(G.error), e && he(ve), oe("offScreen"), setTimeout((() => {
                  oe("hidden")
                }), 300), setTimeout((() => {
                  ge("onScreen")
                }), 100)
              })(n), e === G.unlinked && (e => {
                ke(G.unlinked), e && he(we), oe("offScreen"), le("visible"), setTimeout((() => {
                  oe("hidden"), ge("hidden")
                }), 300), setTimeout((() => {
                  le("onScreen")
                }), 100)
              })(n)
            },
            Fe = () => {
              "disabled" === fe ? (async () => {
                const e = {
                  giftUId: n,
                  location: a,
                  utmCampaign: q.get("utm_campaign"),
                  utmContent: q.get("utm_content"),
                  utmMedium: q.get("utm_medium"),
                  utmSource: q.get("utm_source")
                };
                if (X.length > 0) {
                  const {
                    status: n
                  } = await (0, o.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: M,
                    query: e
                  }) ?? [];
                  Re(n ? G.success : G.error, !1)
                } else Re(Y ? G.unlinked : G.landing, !1)
              })() : "success" === fe ? Re(G.success, !1) : "error" === fe ? Re(G.error, !1) : "unlinked" === fe && Re(G.unlinked, !1)
            };
          return (0, t.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== a ? Ce(v.introScreen.image.sources.mobile || k) : Ce(v.introScreen.image.sources.desktop || k)
              },
              n = () => {
                Me(), window.innerWidth <= W && !ee && (ne(!0), Re(_e, !0)), window.innerWidth > W && ee && ne(!1), e()
              };
            return ne(window.innerWidth <= W), e(), window.addEventListener("resize", n), () => {
              window.removeEventListener("resize", n)
            }
          }), [_e, ee, H, Q, V, D]), (0, t.useEffect)((() => {
            _e === G.success && pe !== Ae ? he(Ae) : _e === G.error && pe !== ve ? he(ve) : _e === G.landing && pe !== Te ? he(Te) : _e === G.unlinked && pe !== we && he(we)
          }), [ve, Ae, pe, we, Te]), (0, t.useEffect)((() => {
            Oe || (qe(!0), Me(), Ee && _e === G.success && he(D?.current?.scrollHeight || 0))
          }), [H, Q, V, D]), (0, t.useEffect)((() => {
            const e = I?.characters?.gtao;
            Z(e || [])
          }), [I]), (0, t.useEffect)((() => {
            "boolean" != typeof Ie && "boolean" != typeof ze || !n || ae && z && (async () => {
              const {
                result: e
              } = await (0, o.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: M,
                query: {
                  giftUId: n
                }
              });
              K(e), te(!1)
            })()
          }), [ae, z, n]), (0, t.useEffect)((() => {
            "boolean" == typeof z ? z ? te(!0) : (te(!1), oe("onScreen")) : te(!0)
          }), [z]), (0, t.useEffect)((() => {
            Y && X.length > 0 ? (Ne(!0), Re(G.success, !0)) : Y && 0 === X.length ? Re(G.unlinked, !0) : "boolean" != typeof Y && Y || Re(G.landing, !0)
          }), [Y]), (0, t.useEffect)((() => {
            if (B && !ue) {
              if (void 0 === z) return;
              U({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: z ? "signed in" : "signed out"
              }), me(!0)
            }
          }), [B, z]), (0, t.useEffect)((() => {
            "onScreen" === se && U({
              element_placement: "WOC",
              event: "alert_update",
              o_id: n,
              text: "Almost there!"
            })
          }), [se]), (0, t.useEffect)((() => {
            "onScreen" === ce && U({
              element_placement: "WOC",
              event: "alert_error",
              o_id: n,
              text: "No Qualifying Character Found"
            })
          }), [ce]), (0, t.useEffect)((() => {
            "onScreen" === de && U({
              element_placement: "event_label",
              event: "alert_error",
              o_id: n,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [de]), (0, t.useEffect)((() => {
            Fe()
          }), [fe]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: E.interestTrackerWrapper,
              children: (0, b.jsxs)(r.motion.div, {
                className: [E.interestTracker, ae && E.loader].join(" "),
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
                ref: $,
                id: T || "",
                children: [(0, b.jsx)("div", {
                  className: E.moduleImage,
                  style: {
                    "--engagement-image": `url(${ye})`
                  }
                }), (0, b.jsx)("div", {
                  className: [E.slideContainer, ae ? E.loader : ""].join(" "),
                  ref: J,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === pe ? "200%" : `${pe}px`,
                    height: 0 !== pe && ee ? `${pe}px` : "auto"
                  },
                  children: ae ? (0, b.jsx)("div", {
                    className: E.spinner,
                    children: (0, b.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(p, {
                      s: E,
                      content: v,
                      refLanding: H,
                      loggedIn: z,
                      addClaim: async () => {
                        U({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: n,
                          text: "claim now",
                          section_layout: z ? "signed in" : "signed out"
                        }), Fe()
                      },
                      signin: () => {
                        const e = `${y}?returnUrl=${encodeURIComponent(Le)}&lang=${F}`;
                        U({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: z ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: ie
                    }), (0, b.jsx)(S, {
                      s: E,
                      content: v,
                      refSuccess: D,
                      successSlide: se,
                      characterList: X,
                      linkAccountUrl: R,
                      linkMoreAccounts: () => {
                        U({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: R,
                          text: u.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: P.formatMessage(u.engagement_link_account)
                    }), (0, b.jsx)(j, {
                      s: E,
                      content: v,
                      unlinkedSlide: ce,
                      refUnlinked: Q,
                      linkConsoleText: P.formatMessage(u.engagement_link_console_account),
                      platformLogin: e => `https://${C}.rockstargames.com/tpa/${e}/link/?cid=${O}&lang=${F}&returnUrl=${encodeURIComponent(Le)}&accessToken=${L}`,
                      giftId: n
                    }), (0, b.jsx)(w, {
                      s: E,
                      errorSlide: de,
                      content: v,
                      refError: V
                    })]
                  })
                })]
              })
            })]
          })
        }), g)
    }
  }
]);