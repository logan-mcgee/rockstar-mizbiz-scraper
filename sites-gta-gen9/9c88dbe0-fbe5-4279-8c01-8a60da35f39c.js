try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9c88dbe0-fbe5-4279-8c01-8a60da35f39c", e._sentryDebugIdIdentifier = "sentry-dbid-9c88dbe0-fbe5-4279-8c01-8a60da35f39c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2319], {
    6385: (e, a, t) => {
      t.d(a, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => o
      });
      var n = t(83970),
        s = t(70954),
        r = t(62229),
        c = t(18628);
      const o = ({
        enabled: e = !0,
        ...a
      }) => {
        const t = e ? c.s6 : r.Fragment;
        return (0, s.jsx)(t, {
          ...a
        })
      }
    },
    13317: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => G
      });
      var n = t(62229),
        s = t(9623),
        r = t(62665),
        c = t(55799),
        o = t(95966),
        i = t(2918),
        d = t(68378),
        l = t(81788);
      const g = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        m = (0, l.defineMessages)({
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
      var f = t(92440),
        u = t(34679),
        b = t(70954);
      const k = e => {
          let {
            legalText: a
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: a
            }
          })
        },
        p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        _ = e => {
          let {
            s: a,
            content: t,
            loggedIn: n,
            addClaim: s,
            signin: r,
            landingSlide: c
          } = e;
          return (0, b.jsxs)("div", {
            className: [a.contentContainer, a[c], a.landingSlide].join(" "),
            children: [(0, b.jsx)("img", {
              src: t.introScreen.image.sources.mobile || p,
              className: a.moduleImageMobile,
              alt: t.introScreen.image.alt
            }), (0, b.jsxs)("div", {
              className: a.topContent,
              children: [(0, b.jsx)("div", {
                className: a.textContent,
                children: (0, b.jsxs)("div", {
                  className: a.alert,
                  children: [(0, b.jsx)("div", {
                    className: a.badge,
                    children: t.introScreen.tag
                  }), (0, b.jsxs)("div", {
                    className: a.alertText,
                    children: [(0, b.jsx)("h2", {
                      children: t.introScreen.headline
                    }), (0, b.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: t.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, b.jsx)("div", {
                className: a.btnContainer,
                children: (0, b.jsx)(u.A, {
                  text: n ? t.introScreen.btnText.loggedIn : t.introScreen.btnText.loggedOut,
                  onClick: n ? s : r
                })
              })]
            }), (0, b.jsx)("div", {
              className: a.bottomContent,
              children: (0, b.jsx)("div", {
                className: a.legal,
                children: (0, b.jsx)(k, {
                  legalText: t.legalText
                })
              })
            })]
          })
        };
      var h = t(23205),
        x = t(4394),
        T = t(59322),
        v = t(18444);
      const A = e => {
        let {
          s: a,
          content: t,
          successSlide: s,
          characterList: r,
          linkAccountUrl: c,
          linkMoreAccounts: o,
          linkAccountBtn: i
        } = e;
        const d = (0, n.createRef)(),
          l = (0, n.createRef)(),
          g = (0, n.createRef)(),
          [m, f] = (0, n.useState)(),
          [u, p] = (0, n.useState)(!1),
          [_, A] = (0, n.useState)(),
          [j, S] = (0, n.useState)(!1),
          [C, w] = (0, n.useState)(!0);
        return (0, n.useEffect)((() => {
          const e = () => {
            d?.current && p(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, n.useEffect)((() => {
          f({
            nextEl: l?.current,
            prevEl: g?.current
          })
        }), [g?.current, l?.current]), (0, b.jsxs)("div", {
          className: [a.contentContainer, a[s], a.successSlide].join(" "),
          "data-type": "long",
          children: [(0, b.jsxs)("div", {
            className: a.topContent,
            children: [(0, b.jsxs)("div", {
              className: a.alert,
              children: [(0, b.jsx)("div", {
                className: a.successAlert
              }), (0, b.jsxs)("div", {
                className: a.alertText,
                children: [(0, b.jsx)("h3", {
                  children: t.successScreen.headline
                }), (0, b.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: t.successScreen.body
                  }
                })]
              })]
            }), (0, b.jsxs)("div", {
              className: a.swiperWrap,
              children: [(0, b.jsx)("div", {
                className: a.swiperContainer,
                ref: d,
                children: (0, b.jsxs)(h.RC, {
                  mousewheel: {
                    releaseOnEdges: !0
                  },
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: u,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: m,
                  modules: [x.Vx, x.Jq],
                  onInit: e => {
                    A(e)
                  },
                  onSlideChange: e => {
                    S(e?.isEnd), w(e?.isBeginning)
                  },
                  children: [r.map((e => (0, b.jsx)(h.qr, {
                    tabIndex: 0,
                    children: (0, b.jsxs)(T.Root, {
                      children: [(0, b.jsx)(T.Avatar, {
                        src: e.mugshotUrl
                      }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, b.jsxs)(T.Content, {
                        children: [(0, b.jsx)(T.TopRow, {
                          children: (0, b.jsx)(T.PlatformTag, {
                            tagSize: T.PlatformTagSizes.large,
                            platform: e.platform
                          })
                        }), (0, b.jsx)(T.UserName, {
                          children: e.platformUsername
                        }), (0, b.jsx)(T.RankContent, {
                          children: (0, b.jsx)(T.RpCategory, {
                            rank: e.stats.overview.rank.value
                          })
                        })]
                      })]
                    })
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))), (0, b.jsx)(h.qr, {
                    children: (0, b.jsx)(v.A, {
                      className: [a.linkMore, r.length > 0 ? a.withIcon : ""].join(" "),
                      to: c,
                      onClick: o,
                      children: (0, b.jsx)("div", {
                        className: a.btnText,
                        children: i
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: a.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: g,
                onClick: () => {
                  _?.slidePrev()
                },
                disabled: C,
                "data-hidden": !u
              }), (0, b.jsx)("button", {
                className: a.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: l,
                onClick: () => {
                  _?.slideNext()
                },
                disabled: j,
                "data-hidden": !u
              })]
            })]
          }), (0, b.jsx)("div", {
            className: a.legal,
            children: (0, b.jsx)(k, {
              legalText: t.legalText
            })
          })]
        })
      };
      var j = t(3142);
      const S = e => {
          let {
            s: a,
            content: t,
            unlinkedSlide: n,
            linkConsoleText: s,
            returnUrl: r,
            giftId: c
          } = e;
          const i = (0, o.useScAuthTpaLink)("np", r).href,
            d = (0, o.useScAuthTpaLink)("xbl", r).href;
          return (0, b.jsxs)("div", {
            className: [a.contentContainer, a[n], a.unlinkedSlide, a.textContent].join(" "),
            children: [(0, b.jsx)("div", {
              className: a.textContent,
              children: (0, b.jsxs)("div", {
                className: a.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: a.errorAlert
                }), (0, b.jsx)("h3", {
                  children: t.unlinkedScreen.headline
                }), (0, b.jsx)(j.A, {
                  variant: "secondary",
                  buttonText: s,
                  platformsAndLinks: [{
                    href: i,
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: d,
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: c,
                  children: (0, b.jsx)("div", {
                    className: a.alert,
                    children: (0, b.jsx)("div", {
                      className: a.alertText,
                      children: (0, b.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: t.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, b.jsx)("div", {
              className: a.legal,
              children: (0, b.jsx)(k, {
                legalText: t.legalText
              })
            })]
          })
        },
        C = e => {
          let {
            s: a,
            errorSlide: t,
            content: n
          } = e;
          return (0, b.jsxs)("div", {
            className: [a.contentContainer, a[t], a.errorSlide, a.textContent].join(" "),
            children: [(0, b.jsxs)("div", {
              className: a.textContent,
              children: [(0, b.jsxs)("div", {
                className: a.alert,
                children: [(0, b.jsx)("div", {
                  className: a.errorAlert
                }), (0, b.jsx)("div", {
                  className: a.alertText,
                  children: (0, b.jsx)("h3", {
                    children: n.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(u.A, {
                text: n.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: a.legal,
              children: (0, b.jsx)(k, {
                legalText: n.legalText
              })
            })]
          })
        };
      var w = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(w || {});
      const N = {
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
          host: y
        } = (0, o.getConfigForDomain)(),
        G = (0, l.withIntl)((e => {
          let {
            giftId: a,
            location: t = "gtaplus_site",
            introScreen: g,
            errorScreen: u,
            unlinkedScreen: k,
            successScreen: h,
            jumpLinkId: x,
            legalText: T
          } = e;
          const v = {
              errorScreen: {
                btnText: u?.errorButton || "",
                headline: u?.errorHeadline || ""
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
                    desktop: (0, f.useGetCdnSource)(g?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, f.useGetCdnSource)(g?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: g?.tag || ""
              },
              legalText: T,
              successScreen: {
                body: h?.successContent || "",
                headline: h?.successHeadline || ""
              },
              unlinkedScreen: {
                body: k?.unlinkedContent || "",
                btnText: k?.unlinkedButtonText || "",
                headline: k?.unlinkedHeadline || ""
              }
            },
            [j] = (0, s.useSearchParams)(),
            {
              data: G,
              loggedIn: E
            } = (0, i.useRockstarUser)(),
            z = (0, o.useRockstarTokenPing)(),
            O = `https://${y}.rockstargames.com/settings/linkedaccounts`,
            I = (0, l.useIntl)(),
            {
              track: q
            } = (0, i.useGtmTrack)(),
            {
              ref: L,
              inView: M
            } = (0, c.useInView)({
              threshold: .6
            }),
            R = 1280,
            P = (0, n.createRef)(),
            [F, U] = (0, n.useState)(),
            [B, H] = (0, n.useState)([]),
            [W, D] = (0, n.useState)(!1),
            [V, Z] = (0, n.useState)(),
            [$, Q] = (0, n.useState)("hidden"),
            [X, Y] = (0, n.useState)("hidden"),
            [K, J] = (0, n.useState)("hidden"),
            [ee, ae] = (0, n.useState)("hidden"),
            [te, ne] = (0, n.useState)(!1),
            [se, re] = (0, n.useState)(w.landing),
            [ce, oe] = (0, n.useState)(v.introScreen.image.sources.mobile || p),
            ie = `${document.location.pathname}${document.location.search}#${x}`,
            de = (0, o.usePrevious)(V),
            le = (0, o.usePrevious)(E),
            {
              signInUrl: ge
            } = (0, o.useScAuthLinks)(ie),
            me = e => {
              e === w.landing ? (re(w.landing), Y("onScreen"), Q("hidden"), ae("hidden"), J("hidden")) : e === w.success ? (re(w.success), Y("offScreen"), Q("visible"), setTimeout((() => {
                Y("hidden"), ae("hidden")
              }), 300), setTimeout((() => {
                Q("onScreen")
              }), 100)) : e === w.error ? (re(w.error), Y("offScreen"), ae("visible"), setTimeout((() => {
                Y("hidden")
              }), 300), setTimeout((() => {
                ae("onScreen")
              }), 100)) : e === w.unlinked && (re(w.unlinked), Y("offScreen"), J("visible"), setTimeout((() => {
                Y("hidden"), ae("hidden")
              }), 300), setTimeout((() => {
                J("onScreen")
              }), 100))
            };
          return (0, n.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== t ? oe(v.introScreen.image.sources.mobile || p) : oe(v.introScreen.image.sources.desktop || p)
              },
              a = () => {
                window.innerWidth <= R && !W ? (D(!0), me(se)) : window.innerWidth > R && W && D(!1), e()
              };
            return D(window.innerWidth <= R), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), [se, W]), (0, n.useEffect)((() => {
            const e = G?.characters?.gtao;
            H(e || [])
          }), [G?.characters?.gtao]), (0, n.useEffect)((() => {
            "boolean" != typeof de && "boolean" != typeof le || !a || V && E && (async () => {
              const {
                result: e
              } = await (0, o.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: z,
                query: {
                  giftUId: a
                }
              });
              U(e)
            })()
          }), [V, E, a]), (0, n.useEffect)((() => {
            "boolean" == typeof E ? E ? Z(!0) : (Z(!1), Y("onScreen")) : Z(!0)
          }), [E]), (0, n.useEffect)((() => {
            void 0 !== F && G?.accountSynced && Z(!1)
          }), [F, G?.accountSynced, Z]), (0, n.useEffect)((() => {
            V || (async () => {
              B.length > 0 && F ? me(w.success) : me(F ? w.unlinked : w.landing)
            })()
          }), [V]), (0, n.useEffect)((() => {
            if (M && !te) {
              if (void 0 === E) return;
              q({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: E ? "signed in" : "signed out"
              }), ne(!0)
            }
          }), [M, E]), (0, n.useEffect)((() => {
            "onScreen" === $ && q({
              element_placement: "WOC",
              event: "alert_update",
              o_id: a,
              text: "Almost there!"
            })
          }), [$]), (0, n.useEffect)((() => {
            "onScreen" === K && q({
              element_placement: "WOC",
              event: "alert_error",
              o_id: a,
              text: "No Qualifying Character Found"
            })
          }), [K]), (0, n.useEffect)((() => {
            "onScreen" === ee && q({
              element_placement: "event_label",
              event: "alert_error",
              o_id: a,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ee]), (0, b.jsx)(b.Fragment, {
            children: (0, b.jsx)("div", {
              className: N.interestTrackerWrapper,
              children: (0, b.jsxs)(r.motion.div, {
                className: [N.interestTracker, V && N.loader].join(" "),
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
                children: [(0, b.jsx)("div", {
                  className: N.moduleImage,
                  style: {
                    "--engagement-image": `url(${ce})`
                  }
                }), (0, b.jsx)("div", {
                  className: [N.slideContainer, V ? N.loader : ""].join(" "),
                  ref: P,
                  children: V ? (0, b.jsx)("div", {
                    className: N.spinner,
                    children: (0, b.jsx)(d.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [se === w.landing && (0, b.jsx)(_, {
                      s: N,
                      content: v,
                      loggedIn: E,
                      addClaim: async () => {
                        const e = {
                            giftUId: a,
                            location: t,
                            utmCampaign: j.get("utm_campaign"),
                            utmContent: j.get("utm_content"),
                            utmMedium: j.get("utm_medium"),
                            utmSource: j.get("utm_source")
                          },
                          {
                            status: n
                          } = await (0, o.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: z,
                            query: e
                          }) ?? [];
                        me(n ? w.success : w.error), q({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: a,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: ge,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.href = ge
                      },
                      landingSlide: X
                    }), se === w.success && (0, b.jsx)(A, {
                      s: N,
                      content: v,
                      successSlide: $,
                      characterList: B,
                      linkAccountUrl: O,
                      linkMoreAccounts: () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: O,
                          text: m.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: I.formatMessage(m.engagement_link_account)
                    }), se === w.unlinked && (0, b.jsx)(S, {
                      s: N,
                      content: v,
                      unlinkedSlide: K,
                      linkConsoleText: I.formatMessage(m.engagement_link_console_account),
                      returnUrl: ie,
                      giftId: a
                    }), se === w.error && (0, b.jsx)(C, {
                      s: N,
                      errorSlide: ee,
                      content: v
                    })]
                  })
                })]
              })
            })
          })
        }), g)
    },
    14804: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    22377: (e, a, t) => {
      t.d(a, {
        YT: () => o,
        lv: () => i,
        Ay: () => d
      });
      var n = t(70954);
      let s = null,
        r = null,
        c = "";
      s = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", r = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", c = "PC Legacy";
      let o = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        i = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const d = e => {
        let {
          tagSize: a,
          platform: t
        } = e;
        const {
          src: s,
          alt: r
        } = ((e, a) => {
          const t = a === o.small;
          switch (e) {
            case i.pc:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case i.pcAlt:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case i.ps4:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case i.ps5:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case i.xboxOne:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case i.xboxSeries:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case i.ps:
            case i.np:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case i.xbox:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, a);
        return (0, n.jsx)("img", {
          className: "rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1",
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: s,
          alt: r
        })
      }
    },
    34679: (e, a, t) => {
      t.d(a, {
        A: () => i
      });
      var n = t(9623);
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var r = t(70954);
      const c = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: s,
            ariaLabel: c
          } = e;
          return (0, r.jsx)("button", {
            className: t,
            onClick: n,
            style: s,
            type: "button",
            "aria-label": c,
            children: a
          })
        },
        o = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: c,
            to: o,
            ariaLabel: i
          } = e;
          return (0, r.jsx)(n.NavLink, {
            className: t,
            onClick: s,
            style: c,
            to: o,
            "aria-label": i,
            children: a
          })
        },
        i = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: n,
            icon: i = "",
            img: d,
            labelColor: l = "#000",
            onClick: g,
            secondText: m,
            size: f,
            text: u,
            to: b,
            type: k = "",
            ariaLabel: p
          } = e;
          const _ = [s.plusButton, s[k] ?? "", s[f] ?? "", s[n] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? l,
              "--hvr-bg-color": l ?? a,
              "--hvr-border-color": a ?? l
            },
            x = (0, r.jsxs)(r.Fragment, {
              children: [d ? (0, r.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, r.jsxs)("div", {
                className: s.btnText,
                icon: i,
                children: [u, m ? (0, r.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: g,
                onKeyDown: g,
                className: _,
                role: "button",
                "aria-label": p,
                tabIndex: 0,
                children: (0, r.jsx)("a", {
                  href: b,
                  target: e,
                  children: x
                })
              })
            }
            return (0, r.jsx)(o, {
              className: _,
              onClick: g,
              style: {
                ...h
              },
              to: b,
              ariaLabel: p,
              children: x
            })
          }
          return (0, r.jsx)(c, {
            className: _,
            onClick: g,
            style: {
              ...h
            },
            ariaLabel: p,
            children: x
          })
        }
    },
    59322: (e, a, t) => {
      t.r(a), t.d(a, {
        Avatar: () => f,
        Content: () => u,
        PlatformTag: () => k,
        PlatformTagSizes: () => i.YT,
        Platforms: () => i.lv,
        RankContent: () => _,
        Root: () => m,
        RpCategory: () => h,
        TextContent: () => x,
        TopRow: () => b,
        UserName: () => p
      });
      var n = t(62229),
        s = t(6385),
        r = t(84105),
        c = t(24036),
        o = t.n(c),
        i = t(22377),
        d = t(91730);
      const l = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804";
      var g = t(70954);
      const m = (0, n.forwardRef)((function(e, a) {
          let {
            children: t,
            className: n,
            testId: s,
            ...c
          } = e;
          const i = (0, r.v6)(c, {
            "data-testid": s,
            className: o()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", n)
          });
          return (0, g.jsx)("div", {
            ref: a,
            ...i,
            children: t
          })
        })),
        f = (0, n.forwardRef)((function(e, a) {
          let {
            src: s,
            alt: c,
            testId: o,
            ...i
          } = e;
          const [d, m] = (0, n.useState)(s), f = (0, r.v6)(i, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": o
          });
          return s ? (0, g.jsx)("div", {
            ref: a,
            ...f,
            children: (0, g.jsx)("img", {
              className: l,
              src: d,
              alt: c,
              onError: () => m(t(14804))
            })
          }) : (0, g.jsx)("div", {
            ref: a,
            ...f,
            children: (0, g.jsx)("img", {
              className: l,
              src: t(14804),
              alt: c
            })
          })
        })),
        u = (0, n.forwardRef)((function(e, a) {
          let {
            asChild: t,
            testId: n,
            className: c,
            ...i
          } = e;
          const d = t ? s.DX : "div",
            l = (0, r.v6)(i, {
              className: o()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", c),
              "data-testid": n
            });
          return (0, g.jsx)(d, {
            ref: a,
            ...l
          })
        })),
        b = (0, n.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: n,
            ...s
          } = e;
          const c = (0, r.v6)(s, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": n
          });
          return (0, g.jsx)("div", {
            ref: a,
            ...c,
            children: t
          })
        })),
        k = e => {
          let {
            testId: a,
            ...t
          } = e;
          const n = (0, r.v6)(t, {
            "data-testid": a
          });
          return (0, g.jsx)(i.Ay, {
            ...n
          })
        },
        p = (0, n.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: n,
            ...s
          } = e;
          const c = (0, r.v6)(s, {
            "data-testid": n
          });
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...c,
            ref: a,
            children: t
          })
        })),
        _ = (0, n.forwardRef)((function(e, a) {
          let {
            testId: t,
            children: n,
            ...s
          } = e;
          const c = (0, r.v6)(s, {
            "data-testid": t
          });
          return (0, g.jsx)("div", {
            ...c,
            ref: a,
            children: n
          })
        })),
        h = e => {
          let {
            testId: a,
            ...t
          } = e;
          const n = (0, r.v6)(t, {
            "data-testid": a
          });
          return (0, g.jsx)(d.RpCategory, {
            ...n
          })
        },
        x = (0, n.forwardRef)((function(e, a) {
          let {
            asChild: t,
            children: n,
            testId: c,
            ...o
          } = e;
          const i = t ? s.DX : "div",
            d = (0, r.v6)(o, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": c
            });
          return (0, g.jsx)(i, {
            ref: a,
            ...d,
            children: n
          })
        }))
    },
    91730: (e, a, t) => {
      t.r(a), t.d(a, {
        RpCategory: () => l,
        rpCategoryTestIds: () => d
      });
      var n = t(62229),
        s = t(84105);
      var r = t(24036),
        c = t.n(r),
        o = t(70954);
      const i = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        d = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        l = (0, n.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: n,
            alt: r,
            testId: l,
            ...g
          } = e;
          const m = i(t),
            f = (0, s.v6)(g, {
              className: c()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", n),
              "data-testid": l
            });
          return (0, o.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...f,
            children: [(0, o.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": i(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, o.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: m
              })
            }), (0, o.jsx)("span", {
              "data-testid": d.RANK_VALUE,
              children: t
            })]
          })
        }))
    }
  }
]);