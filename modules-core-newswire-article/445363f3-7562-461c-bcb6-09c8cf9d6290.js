! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "445363f3-7562-461c-bcb6-09c8cf9d6290", e._sentryDebugIdIdentifier = "sentry-dbid-445363f3-7562-461c-bcb6-09c8cf9d6290")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2860], {
    22860: (e, n, a) => {
      a.r(n), a.d(n, {
        default: () => O
      });
      var r = a(62229),
        t = a(9623),
        i = a(82752),
        o = a(56383),
        s = a(95966),
        c = a(2772),
        d = a(23066),
        l = a(81788);
      const A = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
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
      var g = a(92440),
        f = a(97896),
        b = a(73855);
      const p = e => {
        let {
          legalText: n
        } = e;
        return (0, b.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: n
          }
        })
      };
      var u = a(99589);
      const h = e => {
        let {
          s: n,
          content: a,
          loggedIn: r,
          addClaim: t,
          signin: i,
          landingSlide: o
        } = e;
        return (0, b.jsxs)("div", {
          className: [n.contentContainer, n[o], n.landingSlide].join(" "),
          children: [(0, b.jsx)("img", {
            src: a.introScreen.image.sources.mobile || u,
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
                text: r ? a.introScreen.btnText.loggedIn : a.introScreen.btnText.loggedOut,
                onClick: r ? t : i
              })
            })]
          }), (0, b.jsx)("div", {
            className: n.bottomContent,
            children: (0, b.jsx)("div", {
              className: n.legal,
              children: (0, b.jsx)(p, {
                legalText: a.legalText
              })
            })
          })]
        })
      };
      var C = a(23205),
        w = a(4394),
        v = a(87268),
        x = a(45768);
      const k = e => {
        let {
          s: n,
          content: a,
          successSlide: t,
          characterList: i,
          linkAccountUrl: o,
          linkMoreAccounts: s,
          linkAccountBtn: c
        } = e;
        const d = (0, r.createRef)(),
          l = (0, r.createRef)(),
          A = (0, r.createRef)(),
          [m, g] = (0, r.useState)(),
          [f, u] = (0, r.useState)(!1),
          [h, k] = (0, r.useState)(),
          [y, B] = (0, r.useState)(!1),
          [I, E] = (0, r.useState)(!0);
        return (0, r.useEffect)((() => {
          const e = () => {
            d?.current && u(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, r.useEffect)((() => {
          g({
            nextEl: l?.current,
            prevEl: A?.current
          })
        }), [A?.current, l?.current]), (0, b.jsxs)("div", {
          className: [n.contentContainer, n[t], n.successSlide].join(" "),
          "data-type": "long",
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
                children: (0, b.jsxs)(C.RC, {
                  mousewheel: {
                    releaseOnEdges: !0
                  },
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: f,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: m,
                  modules: [w.Vx, w.Jq],
                  onInit: e => {
                    k(e)
                  },
                  onSlideChange: e => {
                    B(e?.isEnd), E(e?.isBeginning)
                  },
                  children: [i.map((e => (0, b.jsx)(C.qr, {
                    tabIndex: 0,
                    children: (0, b.jsxs)(v.Root, {
                      children: [(0, b.jsx)(v.Avatar, {
                        src: e.mugshotUrl
                      }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, b.jsxs)(v.Content, {
                        children: [(0, b.jsx)(v.TopRow, {
                          children: (0, b.jsx)(v.PlatformTag, {
                            tagSize: v.PlatformTagSizes.large,
                            platform: e.platform
                          })
                        }), (0, b.jsx)(v.UserName, {
                          children: e.platformUsername
                        }), (0, b.jsx)(v.RankContent, {
                          children: (0, b.jsx)(v.RpCategory, {
                            rank: e.stats.overview.rank.value
                          })
                        })]
                      })]
                    })
                  }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))), (0, b.jsx)(C.qr, {
                    children: (0, b.jsx)(x.A, {
                      className: [n.linkMore, i.length > 0 ? n.withIcon : ""].join(" "),
                      to: o,
                      onClick: s,
                      children: (0, b.jsx)("div", {
                        className: n.btnText,
                        children: c
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: n.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: A,
                onClick: () => {
                  h?.slidePrev()
                },
                disabled: I,
                "data-hidden": !f
              }), (0, b.jsx)("button", {
                className: n.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: l,
                onClick: () => {
                  h?.slideNext()
                },
                disabled: y,
                "data-hidden": !f
              })]
            })]
          }), (0, b.jsx)("div", {
            className: n.legal,
            children: (0, b.jsx)(p, {
              legalText: a.legalText
            })
          })]
        })
      };
      var y = a(33893);
      const B = e => {
          let {
            s: n,
            content: a,
            unlinkedSlide: r,
            linkConsoleText: t,
            returnUrl: i,
            giftId: o
          } = e;
          const c = (0, s.useScAuthTpaLink)("np", i).href,
            d = (0, s.useScAuthTpaLink)("xbl", i).href;
          return (0, b.jsxs)("div", {
            className: [n.contentContainer, n[r], n.unlinkedSlide, n.textContent].join(" "),
            children: [(0, b.jsx)("div", {
              className: n.textContent,
              children: (0, b.jsxs)("div", {
                className: n.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: n.errorAlert
                }), (0, b.jsx)("h3", {
                  children: a.unlinkedScreen.headline
                }), (0, b.jsx)(y.A, {
                  variant: "secondary",
                  buttonText: t,
                  platformsAndLinks: [{
                    href: c,
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
              children: (0, b.jsx)(p, {
                legalText: a.legalText
              })
            })]
          })
        },
        I = e => {
          let {
            s: n,
            errorSlide: a,
            content: r
          } = e;
          return (0, b.jsxs)("div", {
            className: [n.contentContainer, n[a], n.errorSlide, n.textContent].join(" "),
            children: [(0, b.jsxs)("div", {
              className: n.textContent,
              children: [(0, b.jsxs)("div", {
                className: n.alert,
                children: [(0, b.jsx)("div", {
                  className: n.errorAlert
                }), (0, b.jsx)("div", {
                  className: n.alertText,
                  children: (0, b.jsx)("h3", {
                    children: r.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(f.A, {
                text: r.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: n.legal,
              children: (0, b.jsx)(p, {
                legalText: r.legalText
              })
            })]
          })
        };
      var E = function(e) {
          return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
        }(E || {}),
        F = a(53178),
        z = a.n(F),
        _ = a(27835),
        S = a.n(_),
        T = a(17529),
        D = a.n(T),
        N = a(72162),
        R = a.n(N),
        G = a(82510),
        j = a.n(G),
        M = a(90675),
        W = a.n(M),
        L = a(58269),
        J = {};
      J.styleTagTransform = W(), J.setAttributes = R(), J.insert = D().bind(null, "head"), J.domAPI = S(), J.insertStyleElement = j(), z()(L.A, J);
      const q = L.A && L.A.locals ? L.A.locals : void 0,
        {
          host: P
        } = (0, s.getConfigForDomain)(),
        O = (0, l.withIntl)((e => {
          let {
            giftId: n,
            location: a = "gtaplus_site",
            introScreen: A,
            errorScreen: f,
            unlinkedScreen: p,
            successScreen: C,
            jumpLinkId: w,
            legalText: v
          } = e;
          const x = {
              errorScreen: {
                btnText: f?.errorButton || "",
                headline: f?.errorHeadline || ""
              },
              introScreen: {
                body: A?.introContent || "",
                btnText: {
                  loggedIn: A?.btnTextLoggedIn || "",
                  loggedOut: A?.btnTextLoggedOut || ""
                },
                headline: A?.introHeadline || "",
                image: {
                  alt: A?.image?.alt || A?.introHeadline || "",
                  sources: {
                    desktop: (0, g.useGetCdnSource)(A?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, g.useGetCdnSource)(A?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: A?.tag || ""
              },
              legalText: v,
              successScreen: {
                body: C?.successContent || "",
                headline: C?.successHeadline || ""
              },
              unlinkedScreen: {
                body: p?.unlinkedContent || "",
                btnText: p?.unlinkedButtonText || "",
                headline: p?.unlinkedHeadline || ""
              }
            },
            [y] = (0, t.useSearchParams)(),
            {
              data: F,
              loggedIn: z
            } = (0, c.Wx)(),
            _ = (0, s.useRockstarTokenPing)(),
            S = `https://${P}.rockstargames.com/settings/linkedaccounts`,
            T = (0, l.useIntl)(),
            {
              track: D
            } = (0, c.h)(),
            {
              ref: N,
              inView: R
            } = (0, o.Wx)({
              threshold: .6
            }),
            G = 1280,
            j = (0, r.createRef)(),
            [M, W] = (0, r.useState)(),
            [L, J] = (0, r.useState)([]),
            [O, U] = (0, r.useState)(!1),
            [H, Q] = (0, r.useState)(),
            [$, K] = (0, r.useState)("hidden"),
            [Y, V] = (0, r.useState)("hidden"),
            [X, Z] = (0, r.useState)("hidden"),
            [ee, ne] = (0, r.useState)("hidden"),
            [ae, re] = (0, r.useState)(!1),
            [te, ie] = (0, r.useState)(E.landing),
            [oe, se] = (0, r.useState)(x.introScreen.image.sources.mobile || u),
            ce = `${document.location.pathname}${document.location.search}#${w}`,
            de = (0, s.usePrevious)(H),
            le = (0, s.usePrevious)(z),
            {
              signInUrl: Ae
            } = (0, s.useScAuthLinks)(ce),
            me = e => {
              e === E.landing ? (ie(E.landing), V("onScreen"), K("hidden"), ne("hidden"), Z("hidden")) : e === E.success ? (ie(E.success), V("offScreen"), K("visible"), setTimeout((() => {
                V("hidden"), ne("hidden")
              }), 300), setTimeout((() => {
                K("onScreen")
              }), 100)) : e === E.error ? (ie(E.error), V("offScreen"), ne("visible"), setTimeout((() => {
                V("hidden")
              }), 300), setTimeout((() => {
                ne("onScreen")
              }), 100)) : e === E.unlinked && (ie(E.unlinked), V("offScreen"), Z("visible"), setTimeout((() => {
                V("hidden"), ne("hidden")
              }), 300), setTimeout((() => {
                Z("onScreen")
              }), 100))
            };
          return (0, r.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== a ? se(x.introScreen.image.sources.mobile || u) : se(x.introScreen.image.sources.desktop || u)
              },
              n = () => {
                window.innerWidth <= G && !O ? (U(!0), me(te)) : window.innerWidth > G && O && U(!1), e()
              };
            return U(window.innerWidth <= G), e(), window.addEventListener("resize", n), () => {
              window.removeEventListener("resize", n)
            }
          }), [te, O]), (0, r.useEffect)((() => {
            const e = F?.characters?.gtao;
            J(e || [])
          }), [F?.characters?.gtao]), (0, r.useEffect)((() => {
            "boolean" != typeof de && "boolean" != typeof le || !n || H && z && (async () => {
              const {
                result: e
              } = await (0, s.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: _,
                query: {
                  giftUId: n
                }
              });
              W(e)
            })()
          }), [H, z, n]), (0, r.useEffect)((() => {
            "boolean" == typeof z ? z ? Q(!0) : (Q(!1), V("onScreen")) : Q(!0)
          }), [z]), (0, r.useEffect)((() => {
            void 0 !== M && F?.accountSynced && Q(!1)
          }), [M, F?.accountSynced, Q]), (0, r.useEffect)((() => {
            H || (async () => {
              L.length > 0 && M ? me(E.success) : me(M ? E.unlinked : E.landing)
            })()
          }), [H]), (0, r.useEffect)((() => {
            if (R && !ae) {
              if (void 0 === z) return;
              D({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: z ? "signed in" : "signed out"
              }), re(!0)
            }
          }), [R, z]), (0, r.useEffect)((() => {
            "onScreen" === $ && D({
              element_placement: "WOC",
              event: "alert_update",
              o_id: n,
              text: "Almost there!"
            })
          }), [$]), (0, r.useEffect)((() => {
            "onScreen" === X && D({
              element_placement: "WOC",
              event: "alert_error",
              o_id: n,
              text: "No Qualifying Character Found"
            })
          }), [X]), (0, r.useEffect)((() => {
            "onScreen" === ee && D({
              element_placement: "event_label",
              event: "alert_error",
              o_id: n,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ee]), (0, b.jsx)(b.Fragment, {
            children: (0, b.jsx)("div", {
              className: q.interestTrackerWrapper,
              children: (0, b.jsxs)(i.P.div, {
                className: [q.interestTracker, H && q.loader].join(" "),
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
                ref: N,
                id: w || "",
                children: [(0, b.jsx)("div", {
                  className: q.moduleImage,
                  style: {
                    "--engagement-image": `url(${oe})`
                  }
                }), (0, b.jsx)("div", {
                  className: [q.slideContainer, H ? q.loader : ""].join(" "),
                  ref: j,
                  children: H ? (0, b.jsx)("div", {
                    className: q.spinner,
                    children: (0, b.jsx)(d.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [te === E.landing && (0, b.jsx)(h, {
                      s: q,
                      content: x,
                      loggedIn: z,
                      addClaim: async () => {
                        const e = {
                            giftUId: n,
                            location: a,
                            utmCampaign: y.get("utm_campaign"),
                            utmContent: y.get("utm_content"),
                            utmMedium: y.get("utm_medium"),
                            utmSource: y.get("utm_source")
                          },
                          {
                            status: r
                          } = await (0, s.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: _,
                            query: e
                          }) ?? [];
                        me(r ? E.success : E.error), D({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: n,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        D({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: Ae,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.href = Ae
                      },
                      landingSlide: Y
                    }), te === E.success && (0, b.jsx)(k, {
                      s: q,
                      content: x,
                      successSlide: $,
                      characterList: L,
                      linkAccountUrl: S,
                      linkMoreAccounts: () => {
                        D({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: S,
                          text: m.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: T.formatMessage(m.engagement_link_account)
                    }), te === E.unlinked && (0, b.jsx)(B, {
                      s: q,
                      content: x,
                      unlinkedSlide: X,
                      linkConsoleText: T.formatMessage(m.engagement_link_console_account),
                      returnUrl: ce,
                      giftId: n
                    }), te === E.error && (0, b.jsx)(I, {
                      s: q,
                      errorSlide: ee,
                      content: x
                    })]
                  })
                })]
              })
            })
          })
        }), A)
    },
    58269: (e, n, a) => {
      a.d(n, {
        A: () => fe
      });
      var r = a(42587),
        t = a.n(r),
        i = a(15081),
        o = a.n(i),
        s = a(79908),
        c = a.n(s),
        d = new URL(a(56353), a.b),
        l = new URL(a(50228), a.b),
        A = new URL(a(304), a.b),
        m = new URL(a(79539), a.b),
        g = new URL(a(61494), a.b),
        f = new URL(a(313), a.b),
        b = new URL(a(94904), a.b),
        p = new URL(a(49027), a.b),
        u = new URL(a(83493), a.b),
        h = new URL(a(53037), a.b),
        C = new URL(a(93803), a.b),
        w = new URL(a(69400), a.b),
        v = new URL(a(44840), a.b),
        x = new URL(a(28168), a.b),
        k = new URL(a(40792), a.b),
        y = new URL(a(31431), a.b),
        B = new URL(a(51594), a.b),
        I = new URL(a(21130), a.b),
        E = new URL(a(57390), a.b),
        F = new URL(a(36606), a.b),
        z = new URL(a(73075), a.b),
        _ = new URL(a(16183), a.b),
        S = new URL(a(28255), a.b),
        T = new URL(a(99589), a.b),
        D = new URL(a(52695), a.b),
        N = new URL(a(98268), a.b),
        R = new URL(a(58134), a.b),
        G = new URL(a(16465), a.b),
        j = new URL(a(69308), a.b),
        M = o()(t()),
        W = c()(d),
        L = c()(l),
        J = c()(A),
        q = c()(m),
        P = c()(g),
        O = c()(f),
        U = c()(b),
        H = c()(p),
        Q = c()(u),
        $ = c()(h),
        K = c()(C),
        Y = c()(w),
        V = c()(v),
        X = c()(x),
        Z = c()(k),
        ee = c()(y),
        ne = c()(B),
        ae = c()(I),
        re = c()(E),
        te = c()(F),
        ie = c()(z),
        oe = c()(_),
        se = c()(S),
        ce = c()(T),
        de = c()(D),
        le = c()(N),
        Ae = c()(R),
        me = c()(G),
        ge = c()(j);
      M.push([e.id, `.rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d:focus,.rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d.rockstargames-modules-core-newswire-articleb58430ad013dcff6fef7da7166cc691f{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d.rockstargames-modules-core-newswire-articleb58430ad013dcff6fef7da7166cc691f img{filter:invert()}.rockstargames-modules-core-newswire-articled2b8c4d79af33709f68b37001ab7be39{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:0;margin:0 auto;max-width:calc(var(--max-width-dynamic, var(--content-max-width)) + var(--padding-dynamic, 0px) * 2)!important;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);width:100%}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--gen9-max-width:2560px;--content-max-width:var(--gen9-max-width);--padding-sides:var(--padding-lg);--content-padding:0 var(--padding-sides);--engagement-background:var(--black-200);--engagement-image:url(${W});--cta-position:relative;background-color:var(--engagement-background);border:1px solid var(--border-color);border-radius:var(--border-radius-md);display:flex;display:flex!important;flex:1;flex-direction:column;justify-content:center;overflow:hidden}@media (min-width:2560px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--spacing-lg:2rem;--spacing-xl:4rem}}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${L}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${J}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${q}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${P}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${O}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${U}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${H}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${Q}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${$}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${K}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${Y}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${V}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${X}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${Z}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${ee}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${ne}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${ae}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${re}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${te}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:italic;font-weight:700;src:url(${ie}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:700;src:url(${oe}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${se}) format("woff")}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f :lang(pl_pl){--font-family-h:NeueHelveticaPaneuropean;--font-family-std:NeueHelveticaPaneuropean}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f :lang(ru_ru){--font-family-h:NeueHelveticaPaneuropean}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f [data-type-lang=pl],.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f [data-type-lang=ru]{font-family:NeueHelveticaPaneuropean!important}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f :lang(zh_hans){--font-family-h:ChaletComprime,NotoSansSC;--font-family-body:NotoSansSC}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f [data-type-lang=zh]{font-family:ChaletComprime,NotoSansSC!important}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f :lang(zh_tw){--font-family-h:ChaletComprime,NotoSansTC;--font-family-body:NotoSansTC}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f [data-type-lang=tw]{font-family:ChaletComprime,NotoSansTC!important}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f :lang(ja_jp){--font-family-h:ChaletComprime,NotoSansJP;--font-family-body:NotoSansJP}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f [data-type-lang=jp]{font-family:ChaletComprime,NotoSansJP!important}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f :lang(ko_kr){--font-family-h:ChaletComprime,NotoSansKR;--font-family-body:NotoSansKR}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f [data-type-lang=kr]{font-family:ChaletComprime,NotoSansKR!important}@media (min-width:1920px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--padding-sides:var(--padding-xl)}}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h1{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h1,.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h2{color:var(--color-override,var(--color-h));font-family:var(--font-family-h);font-weight:var(--font-weight-bold);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md)}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h2{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h3{font-size:calc(var(--font-size-6) * var(--header-multiplier))}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h3,.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h4{color:var(--color-override,var(--color-h));font-family:var(--font-family-h);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md)}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h4{font-size:calc(var(--font-size-5) * var(--header-multiplier))}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f h5{color:var(--color-override,var(--color-h));font-family:var(--font-family-h);font-size:calc(var(--font-size-4) * var(--header-multiplier));font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md)}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f p{color:var(--color-body);font-family:var(--font-family-body);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg)}@media (min-width:0px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--root-font-size:16}}@media (min-width:768px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--root-font-size:18}}@media (min-width:1024px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--root-font-size:20}}@media (min-width:1920px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--root-font-size:22}}@media (max-width:1279px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f.rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b{background-color:inherit;border:none}}@media (min-width:1280px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{flex-direction:row}}@media (max-width:1279px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{height:auto}}@media (min-width:1280px) and (max-width:2559px){@supports not (aspect-ratio:1/1){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{position:relative}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f:before{content:"";display:block;padding-top:calc((1 / 1) * 100%);width:100%}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f>.rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:1/1){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f .rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{aspect-ratio:1/1!important;height:auto!important;width:100%!important}}}@media (min-width:2560px){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{--engagement-image:url(${ce})}@supports not (aspect-ratio:16/9){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f{position:relative}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f:before{content:"";display:block;padding-top:calc((9 / 16) * 100%);width:100%}.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f>.rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:16/9){.rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f .rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{aspect-ratio:16/9!important;height:auto!important;width:100%!important}}}.rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{background-image:var(--engagement-image);background-position:50%;background-size:cover;width:100%;z-index:1}@media (max-width:1279px){.rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{display:none}}@media (min-width:1440px){.rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{flex:1}}@media (min-width:2560px){.rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844{flex:1}}.rockstargames-modules-core-newswire-articlec0fc20e5997ec0175e466407b77f13ea{max-height:70vh;min-height:30vw}@media (min-width:1280px){.rockstargames-modules-core-newswire-articlebe574bc57f2a974b9acfab41bf011e87{display:none}}.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c{position:relative;width:100%}@media (min-width:1440px){.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c{flex:1.5}}@media (min-width:1920px){.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c{flex:2}}@media (min-width:2560px){.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c{flex:1}}.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c.rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b{align-content:center;display:grid}@media (max-width:1279px){.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c.rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b{background-color:var(--black-200);border:1px solid var(--border-color)}}@media (max-width:1280px){.rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c.rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b{background:none;border:none;min-height:50px}}.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d{align-content:flex-end;display:flex;flex-direction:column;justify-content:space-between;top:0;transition:transform .3s ease-out,opacity .3s ease-out;width:100%}@media (min-width:1280px){.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d{grid-gap:var(--grid-gap-sm);padding:var(--padding-md)}}@media (min-width:1440px){.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d{padding:var(--padding-md) var(--padding-lg)}}@media (min-width:2560px){.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d{grid-gap:var(--grid-gap-sm)}}@media (max-width:1279px){.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d{grid-gap:var(--grid-gap-sm);transition:transform .3s ease-out,opacity .2s ease-out}.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d.rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177{height:auto;position:relative}}@media (min-width:1280px){.rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d{max-height:100%;position:absolute}}@media (max-width:1279px){.rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177 .rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e{padding:var(--padding-md) var(--padding-md) 0 var(--padding-md)}}.rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284 .rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e{grid-gap:var(--grid-gap-sm);display:grid}@media (max-width:1279px){.rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284{padding:var(--padding-md)}}.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d .rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e{grid-gap:var(--grid-gap-md);display:grid}.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d .rockstargames-modules-core-newswire-articlecac0eb7158ec985ab3ee6372a2bd7672{max-width:var(--max-width-sm)}@media (max-width:767px){.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d .rockstargames-modules-core-newswire-articlecac0eb7158ec985ab3ee6372a2bd7672{width:100%}}@media (max-width:1279px){.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d{padding:var(--padding-md)}}.rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177,.rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284,.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d{overflow-x:hidden;overflow-y:auto;scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-width:auto;z-index:0}.rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177::-webkit-scrollbar,.rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284::-webkit-scrollbar,.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d::-webkit-scrollbar{width:8px}.rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177::-webkit-scrollbar-track,.rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284::-webkit-scrollbar-track,.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d::-webkit-scrollbar-track{background:transparent}.rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177::-webkit-scrollbar-thumb,.rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284::-webkit-scrollbar-thumb,.rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.rockstargames-modules-core-newswire-articlec55d286bddb7bc024ba481baa3f25282{grid-gap:var(--grid-gap-md);align-items:flex-start}@media (max-width:1279px){.rockstargames-modules-core-newswire-articlec55d286bddb7bc024ba481baa3f25282{padding:var(--padding-md)}}.rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e h3{color:var(--color-override,var(--color-h));color:var(--white-100)!important;font-family:var(--font-family-h);font-size:calc(var(--font-size-6) * var(--header-multiplier));letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md)}.rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e h3,.rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e p{font-weight:var(--font-weight-regular)}.rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e p{color:var(--color-body);font-family:var(--font-family-body);font-size:var(--font-size-3);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);max-width:var(--max-width-md)}@media (max-width:1279px){.rockstargames-modules-core-newswire-articlef4b714d7985247039d190db0652b8ceb{padding:0 var(--padding-md)}}.rockstargames-modules-core-newswire-articlede05099174e82770aeae6cd301329294{grid-gap:var(--grid-gap-sm)}.rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af,.rockstargames-modules-core-newswire-articlede05099174e82770aeae6cd301329294{display:flex;flex-direction:column}.rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af{grid-gap:var(--grid-gap-xs);align-items:flex-start}@media (max-width:1279px){.rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af{padding:var(--padding-md)}}.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54{color:var(--color-body);color:var(--white-65);font-family:var(--font-family-body);font-size:var(--font-size-1);font-size:.625rem;font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);max-width:var(--max-width-md)}.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54 a,.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54 p{color:var(--color-body)!important;color:var(--white-65)!important;font-family:var(--font-family-body)!important;font-size:var(--font-size-1)!important;font-size:.625rem!important;font-weight:var(--font-weight-regular)!important;letter-spacing:var(--letter-spacing-body)!important;line-height:var(--line-height-lg)!important}.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54 .rockstargames-modules-core-newswire-articlef56f546a21ace49c216e9a67228efb66,.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54 a{color:var(--white-100,#fff)!important;text-decoration:underline!important}@media (min-width:768px){.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54{font-size:.556rem}}@media (min-width:1024px){.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54{font-size:.5rem}}@media (min-width:1920px){.rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54{font-size:.455rem}}.rockstargames-modules-core-newswire-articlef11c7041488926e7c7f25fc224f98947{font-weight:var(--font-weight-bold);text-decoration:underline!important}.rockstargames-modules-core-newswire-articlebcac1dcfa5b088eab1e65fc68e8c85a3{background-color:var(--rockstar-gold);border-radius:var(--border-radius-xs);color:var(--black-200);display:block;font-family:var(--font-family-h);font-size:var(--font-size-4);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);padding:.4rem var(--padding-xs) .25rem;text-transform:uppercase;width:-moz-max-content;width:max-content}.rockstargames-modules-core-newswire-articlede0d2e1871164ef762659167bbd6529a{pointer-events:none;visibility:hidden}@media (min-width:1280px){.rockstargames-modules-core-newswire-articlede0d2e1871164ef762659167bbd6529a{transform:translateX(100%)}}.rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f{display:flex;opacity:1}@media (min-width:1280px){.rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f{transform:translateX(100%)}}@media (max-width:1279px){.rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f{transform:translateY(100%)}}.rockstargames-modules-core-newswire-articleae620b51e3ff54bcb035a20296ee980c{transform:translateX(0);transform:translateY(0)}.rockstargames-modules-core-newswire-articlec5da19bfed6924ef3a54c7b6950850dd{opacity:0}@media (min-width:1280px){.rockstargames-modules-core-newswire-articlec5da19bfed6924ef3a54c7b6950850dd{transform:translateX(-100%)}}.rockstargames-modules-core-newswire-articled18a7942f6ffe1c595090c27db4ed3cf{grid-gap:var(--grid-gap-sm);display:flex;flex-direction:column;margin-bottom:var(--spacing-sm)}.rockstargames-modules-core-newswire-articled18a7942f6ffe1c595090c27db4ed3cf p{color:var(--color-body);font-family:var(--font-family-body);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg)}.rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8{grid-gap:var(--grid-gap-xxs);display:flex;flex-direction:column}.rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8 h2,.rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8 h3{color:var(--white-100)!important}.rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8 a{font-weight:700;text-decoration:underline}.rockstargames-modules-core-newswire-articled3d7cc42ef277206a733e4cb57942870{background-color:var(--red);-webkit-mask-image:url(${de});mask-image:url(${de})}.rockstargames-modules-core-newswire-articled3d7cc42ef277206a733e4cb57942870,.rockstargames-modules-core-newswire-articled0d2bcc799b1f77be3797b44c90a217d{height:2.5rem;margin-bottom:var(--grid-gap-sm);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain}.rockstargames-modules-core-newswire-articled0d2bcc799b1f77be3797b44c90a217d{background-color:var(--green-dark);-webkit-mask-image:url(${le});mask-image:url(${le})}.rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a{align-items:center;background:var(--black-15);border:1px solid var(--white-100);border-radius:var(--border-radius-sm);color:var(--white-100)!important;cursor:pointer;display:inline-flex;font-family:var(--font-family-h);font-size:var(--font-size-3)!important;font-size:var(--font-size-4);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-sm);min-width:-moz-max-content;min-width:max-content;padding:var(--padding-sm) var(--padding-md);text-transform:uppercase;transition:background .3s ease-out,color .3s ease-out,border-color .3s ease-out}.rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a.rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e{height:calc(100% - 2px)}.rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a.rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e .rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e{display:inline-flex}.rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a.rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e .rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e:after{background-color:var(--white-100);content:"";-webkit-mask-image:url(${Ae});mask-image:url(${Ae});-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;order:1;transition:all .2s ease;width:.9rem}.rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a:hover{background:var(--btn-hover-bg-color,var(--white-100));border-color:var(--btn-hover-border-color,var(--btn-hover-bg-color));color:var(--btn-hover-font-color,var(--black-100))!important}.rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a:hover .rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e:after{background-color:var(--black-100)!important;transition:all .2s ease}.rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852,.rockstargames-modules-core-newswire-articlece299e602293eb072f2aa29f92ade94d{position:relative}.rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852{display:inline-block;margin-bottom:auto;max-width:100%}.rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852 .swiper-wrapper{display:grid;gap:var(--grid-gap-xs);grid-auto-flow:column;justify-content:left;will-change:transform}.rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852 .swiper-slide{width:-moz-fit-content;width:fit-content}.rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355{height:100%;position:absolute;top:0;transition:opacity .25s ease-in-out;width:4rem}.rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355:focus:after,.rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355:hover:after{filter:unset}.rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355[data-hidden=true],.rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355[disabled]{opacity:0;pointer-events:none}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b{background:var(--black-65,rgba(0,0,0,.65));background:var(--black-200);background:linear-gradient(90deg,var(--engagement-background) 0,transparent 100%);border:none;border-radius:50%;border-radius:0;cursor:pointer;height:3rem;margin-left:calc(var(--padding-md) * -3);padding:0;position:relative;transform:translateX(100%);transition:background .3s ease-in-out;transition:opacity .25s ease-in-out;width:3rem;width:4rem}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b,.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:after{height:100%;left:0;position:absolute;top:0}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:after{background:url(${me}) no-repeat 50%/1rem;content:"";display:block;transition:.3s ease-in-out;width:100%}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:active{background:var(--white-100,#fff)}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:focus,.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:hover{background:var(--white-100,#fff)}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:focus:after,.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:hover:after{filter:invert(1)}}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:after{background-size:1.5rem}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:focus:after,.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:hover:after{filter:unset}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b[data-hidden=true],.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b[disabled]{opacity:0;pointer-events:none}.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:focus,.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b:hover{background:linear-gradient(90deg,var(--engagement-background) 0,transparent 100%)}@media (min-width:1440px){.rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b{margin-left:calc(var(--padding-lg) * -2)}}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf{background:var(--black-65,rgba(0,0,0,.65));background:var(--black-200);background:linear-gradient(270deg,var(--engagement-background) 0,transparent 100%);border:none;border-radius:50%;border-radius:0;cursor:pointer;height:3rem;height:100%;padding:0;position:relative;position:absolute;right:calc(var(--padding-md) * -3);top:0;transform:translateX(-100%);transition:background .3s ease-in-out;transition:opacity .25s ease-in-out;width:3rem;width:4rem}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:after{background:url(${ge}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:active{background:var(--white-100,#fff)}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:focus,.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:hover{background:var(--white-100,#fff)}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:focus:after,.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:hover:after{filter:invert(1)}}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:after{background-size:1.5rem}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:focus:after,.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:hover:after{filter:unset}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf[data-hidden=true],.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf[disabled]{opacity:0;pointer-events:none}.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:focus,.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf:hover{background:linear-gradient(270deg,var(--engagement-background) 0,transparent 100%)}@media (min-width:1440px){.rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf{right:calc(var(--padding-lg) * -2)}}.rockstargames-modules-core-newswire-articlec596ce72795db40bd64a752fcff020f2{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.rockstargames-modules-core-newswire-articlec999e2136e0f6804222f8e8c2e623865{height:112px}.rockstargames-modules-core-newswire-articlecec42ef44a23c75f81c06af15a1b52ba{aspect-ratio:1;width:var(--foundry-global-spacing-dimensions-500)}.rockstargames-modules-core-newswire-articleecabab4d06fea8b01b7aaef8c0af779b{object-fit:cover;width:100%}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/modules-core-engagement/src/components/Root/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-typography.less"],
        names: [],
        mappings: "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",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n@bp--engagementDesktop: 1280px;\n\n.bpEngagementDesktop(@rules) {\n    @media (min-width: @bp--engagementDesktop) {\n        @rules();\n    }\n}\n\n.bpEngagementMobile(@rules) {\n    @media (max-width: (@bp--engagementDesktop - 1)) {\n        @rules();\n    }\n}\n\n.bpEngagementLarge(@rules) {\n    @media (min-width: 1440px) {\n        @rules();\n    }\n}\n\n.interestTrackerWrapper {\n    .commonContent();\n}\n\n.interestTracker {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-typography.less';\n\n    .setGen9Root;\n    .setRootFontSizing();\n\n    --engagement-background: var(--black-200);\n    --engagement-image: url('../../img/engagement1x1.jpg');\n    --cta-position: relative;\n\n    display: flex !important;\n    flex-direction: column;\n\n    background-color: var(--engagement-background);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-md);\n    overflow: hidden;\n\n    &.loader {\n        @media (max-width: 1279px) {\n            border: none;\n            background-color: inherit;\n        }\n    }\n\n    .bpEngagementDesktop({\n        flex-direction: row;\n    });\n\n    .bpEngagementMobile({\n        height: auto;\n    });\n\n    @media (min-width: 1280px) and (max-width: 2559px) {\n        .aspect-ratio(1, 1, moduleImage, ~'.');\n    }\n\n    .xxlMin({\n        .aspect-ratio(16, 9, moduleImage, ~'.');\n        --engagement-image: url('../../img/engagement16x9.jpg');\n    });\n}\n\n.moduleImage {\n    z-index: 1;\n    background-image: var(--engagement-image);\n    background-size: cover;\n    background-position: center center;\n    width: 100%;\n\n    .bpEngagementMobile({\n        display: none;\n    });\n\n    .bpEngagementLarge({\n        flex: 1;\n    });\n    .xxlMin({\n        flex: 1;\n    });\n}\n\n.mobileImgContainer {\n    max-height: 70vh;\n    min-height: 30vw;\n}\n\n.moduleImageMobile {\n    .bpEngagementDesktop({\n        display: none;\n    });\n}\n\n.slideContainer {\n    position: relative;\n    width: 100%;\n    .bpEngagementLarge({\n        flex: 1.5;\n    });\n    .xlMin({\n        flex: 2;\n    });\n    .xxlMin({\n        flex: 1;\n    });\n\n    &.loader {\n        display: grid;\n        align-content: center;\n\n        .bpEngagementMobile({\n            background-color: var(--black-200);\n            border: 1px solid var(--border-color);\n        });\n\n        @media (max-width: 1280px) {\n            min-height: 50px;\n            background: none;\n            border: none;\n        }\n    }\n}\n\n.contentContainer {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-content: flex-end;\n    justify-content: space-between;\n    transition:\n        transform 0.3s ease-out,\n        opacity 0.3s ease-out;\n    top: 0;\n\n    .bpEngagementDesktop({\n        grid-gap: var(--grid-gap-sm);\n        padding: var(--padding-md);\n    });\n\n    .bpEngagementLarge({\n        padding: var(--padding-md) var(--padding-lg);\n    });\n\n    .xxlMin({\n        grid-gap: var(--grid-gap-sm);\n    });\n\n    .bpEngagementMobile({\n        grid-gap: var(--grid-gap-sm);\n        transition: transform 0.3s ease-out, opacity 0.2s ease-out;\n        &.landingSlide {\n            position: relative;\n            height: auto;\n        }\n    });\n\n    @media (min-width: 1280px) {\n        position: absolute;\n        max-height: 100%;\n    }\n}\n\n.landingSlide {\n    .textContent {\n        .bpEngagementMobile({\n            padding: var(--padding-md) var(--padding-md) 0 var(--padding-md);\n        });\n    }\n}\n\n.successSlide {\n    .textContent {\n        display: grid;\n        grid-gap: var(--grid-gap-sm);\n    }\n\n    .bpEngagementMobile({\n        padding: var(--padding-md);\n    });\n}\n\n.unlinkedSlide {\n    .textContent {\n        display: grid;\n        grid-gap: var(--grid-gap-md);\n    }\n    .platformButtonContainer {\n        max-width: var(--max-width-sm);\n        .smMax({\n            width: 100%;\n        });\n    }\n    .bpEngagementMobile({\n        padding: var(--padding-md);\n    });\n}\n\n.landingSlide,\n.successSlide,\n.unlinkedSlide {\n    z-index: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    .scrollbar();\n}\n\n.errorSlide {\n    align-items: flex-start;\n    grid-gap: var(--grid-gap-md);\n\n    .bpEngagementMobile({\n        padding: var(--padding-md);\n    });\n}\n\n.textContent {\n    h3 {\n        .headline-3();\n        color: var(--white-100) !important;\n    }\n    p {\n        .body-md();\n        max-width: var(--max-width-md);\n    }\n}\n\n.btnContainer {\n    .bpEngagementMobile({\n        padding: 0 var(--padding-md);\n    });\n}\n\n.topContent {\n    grid-gap: var(--grid-gap-sm);\n    display: flex;\n    flex-direction: column;\n}\n\n.bottomContent {\n    grid-gap: var(--grid-gap-xs);\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    .bpEngagementMobile({\n        padding: var(--padding-md);\n    });\n}\n\n.legal {\n    .body-xs;\n    font-size: 0.625rem;\n    color: var(--white-65);\n    max-width: var(--max-width-md);\n\n    p,\n    a {\n        .body-xs !important;\n        font-size: 0.625rem !important;\n        color: var(--white-65) !important;\n    }\n\n    .faq,\n    a {\n        color: var(--white-100, #fff) !important;\n        text-decoration: underline !important;\n    }\n\n    .mdMin({\n        font-size: 0.556rem;\n    });\n\n    .lgMin({\n        font-size: 0.5rem;\n    });\n\n    .xlMin({\n        font-size: 0.455rem;\n    });\n}\n\n.faqLink {\n    text-decoration: underline !important; // override root styles for <a>\n    font-weight: var(--font-weight-bold);\n}\n\n.badge {\n    .button-text-sm();\n    display: block;\n    padding: 0.4rem var(--padding-xs) 0.25rem;\n    border-radius: var(--border-radius-xs);\n    background-color: var(--rockstar-gold);\n    color: var(--black-200);\n    width: max-content;\n}\n\n.hidden {\n    visibility: hidden;\n    pointer-events: none;\n\n    .bpEngagementDesktop({\n        transform: translateX(100%);\n    });\n}\n\n.visible {\n    display: flex;\n    opacity: 1;\n\n    .bpEngagementDesktop({\n        transform: translateX(100%);\n    });\n\n    .bpEngagementMobile({\n        transform: translateY(100%);\n    });\n}\n\n.onScreen {\n    transform: translateX(0);\n    transform: translateY(0);\n}\n\n.offScreen {\n    opacity: 0;\n\n    .bpEngagementDesktop({\n        transform: translateX(-100%);\n    });\n}\n\n.alert {\n    display: flex;\n    flex-direction: column;\n    grid-gap: var(--grid-gap-sm);\n    margin-bottom: var(--spacing-sm);\n\n    p {\n        .body-md();\n    }\n}\n\n.alertText {\n    display: flex;\n    flex-direction: column;\n    grid-gap: var(--grid-gap-xxs);\n\n    h3,\n    h2 {\n        color: var(--white-100) !important;\n    }\n\n    a {\n        font-weight: bold;\n        text-decoration: underline;\n    }\n}\n\n.errorAlert {\n    background-color: var(--red);\n    mask-image: url('@rsgweb/legacy-design-system/icons/alert-triangle.svg');\n    mask-repeat: no-repeat;\n    height: 2.5rem;\n    mask-size: contain;\n    margin-bottom: var(--grid-gap-sm);\n}\n\n.successAlert {\n    background-color: var(--green-dark);\n    mask-image: url('@rsgweb/legacy-design-system/icons/check.svg');\n    mask-repeat: no-repeat;\n    height: 2.5rem;\n    mask-size: contain;\n    margin-bottom: var(--grid-gap-sm);\n}\n\n.linkMore {\n    display: inline-flex;\n    background: var(--black-15);\n    border-radius: var(--border-radius-sm);\n    border: 1px solid var(--white-100);\n    cursor: pointer;\n    transition:\n        background 0.3s ease-out,\n        color 0.3s ease-out,\n        border-color 0.3s ease-out;\n    color: var(--white-100) !important;\n    padding: var(--padding-sm) var(--padding-md);\n    align-items: center;\n    min-width: max-content;\n    font-size: var(--font-size-3) !important;\n    .button-text;\n    &.withIcon {\n        height: calc(100% - 2px);\n        .btnText {\n            display: inline-flex;\n            &:after {\n                transition: all 0.2s ease;\n                content: '';\n                width: 0.9rem;\n                order: 1;\n\n                background-color: var(--white-100);\n                mask-image: url('@rsgweb/legacy-design-system/icons/arrow-right.svg');\n                mask-repeat: no-repeat;\n                mask-size: contain;\n            }\n        }\n    }\n\n    &:hover {\n        background: var(--btn-hover-bg-color, var(--white-100));\n        color: var(--btn-hover-font-color, var(--black-100)) !important;\n        border-color: var(--btn-hover-border-color, var(--btn-hover-bg-color));\n        .btnText {\n            &:after {\n                transition: all 0.2s ease;\n                background-color: var(--black-100) !important;\n            }\n        }\n    }\n}\n\n.swiperWrap {\n    position: relative;\n}\n\n.swiperContainer {\n    margin-bottom: auto;\n    position: relative;\n    display: inline-block;\n    max-width: 100%;\n\n    :global(.swiper-wrapper) {\n        display: grid;\n        grid-auto-flow: column;\n        justify-content: left;\n        gap: var(--grid-gap-xs);\n        will-change: transform;\n    }\n\n    :global(.swiper-slide) {\n        width: fit-content;\n    }\n}\n\n.swiperButton {\n    transition: opacity 0.25s ease-in-out;\n    height: 100%;\n    position: absolute;\n    width: 4rem;\n    top: 0;\n\n    &:focus,\n    &:hover {\n        &::after {\n            filter: unset;\n        }\n    }\n\n    &[data-hidden='true'],\n    &[disabled] {\n        opacity: 0;\n        pointer-events: none;\n    }\n}\n\n@swiperBtnPrev--gradient: linear-gradient(\n    90deg,\n    var(--engagement-background) 0%,\n    transparent 100%\n);\n\n.swiperBtnPrev {\n    .swiperBtn('chevron-left');\n    .swiperButton;\n    left: 0;\n    margin-left: calc(var(--padding-md) * -3);\n    transform: translateX(100%);\n    background: @swiperBtnPrev--gradient;\n\n    &:focus,\n    &:hover {\n        background: @swiperBtnPrev--gradient;\n    }\n\n    .bpEngagementLarge({\n        margin-left: calc(var(--padding-lg) * -2);\n    });\n}\n\n@swiperBtnNext--gradient: linear-gradient(\n    270deg,\n    var(--engagement-background) 0%,\n    transparent 100%\n);\n\n.swiperBtnNext {\n    .swiperBtn('chevron-right');\n    .swiperButton;\n    right: calc(var(--padding-md) * -3);\n    transform: translateX(-100%);\n    background: @swiperBtnNext--gradient;\n\n    &:focus,\n    &:hover {\n        background: @swiperBtnNext--gradient;\n    }\n\n    .bpEngagementLarge({\n        right: calc(var(--padding-lg) * -2);\n    });\n}\n\n.spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.characterCardOverride {\n    height: 112px;\n}\n\n.rankOverride {\n    width: var(--foundry-global-spacing-dimensions-500);\n    aspect-ratio: 1;\n}\n\n.avatarImg {\n    width: 100%;\n    object-fit: cover;\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import './gen9-mixins.less';\n\n// GTA Fonts\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(ChaletComprime, 700, normal, ChaletComprime-HongKongSixty);\n.loadFont(Chalet, 400, normal, Chalet-LondonSixty);\n.loadFont(Chalet, 700, normal, Chalet-NewYorkSixty);\n.loadFont(Pricedown, 700, normal, Pricedown);\n.loadFont(NeueHelveticaW05, 400, normal, NeueHelveticaW05-Condensed);\n.loadFont(NeueHelveticaW05, 700, normal, NeueHelveticaW05-CondensedBold);\n.loadFont(NeueHelveticaW05, 900, normal, NeueHelveticaW05-CondensedExtraBlack);\n.loadFont(FrizQuadrataW05, 400, normal, FrizQuadrataW05-Regular);\n.loadFont(FrizQuadrataW05, 400, italic, FrizQuadrataW05-Italic);\n.loadFont(FrizQuadrataW05, 700, normal, FrizQuadrataW05-Bold);\n.loadFont(FrizQuadrataW05, 700, italic, FrizQuadrataW05-BoldItalic);\n.loadFont(CorporateW05, 400, normal, CorporateURWRegW05-Regular);\n.loadFont(NimbusSansW05, 400, normal, NimbusSansW05-Regular);\n.loadFont(NimbusSansW05, 700, normal, NimbusSansW05-Bold);\n.loadFont(EurostileNextW05, 700, normal, EurostileNextW05-ExtBold);\n.loadFont(Diploma, 400, normal, Diploma);\n.loadFont(BrushScriptMT, 400, normal, BrushScriptMT);\n.loadFont(BankGothicBT, 400, normal, BankGothicBT-Medium);\n.loadFont(NeueHelveticaPaneuropean, 700, italic, NeueHelveticaPaneuropean87CondensedHeavyOblique_italic_condensed);\n.loadFont(NeueHelveticaPaneuropean, 700, normal, NeueHelveticaPaneuropean87CondensedHeavy_normal_condensed);\n.loadFont(NeueHelveticaPaneuropean, 400, normal, HelveticaPanEuro-Md);\n\n// Localized Fonts\n// Polish\n:lang(pl_pl) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-std: NeueHelveticaPaneuropean;\n}\n// Russian\n:lang(ru_ru) {\n    --font-family-h: NeueHelveticaPaneuropean;\n}\n\n[data-type-lang='pl'],\n[data-type-lang='ru'] {\n    font-family: NeueHelveticaPaneuropean !important;\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    --font-family-h: ChaletComprime, NotoSansSC;\n    --font-family-body: NotoSansSC;\n}\n[data-type-lang='zh'] {\n    font-family: ChaletComprime, NotoSansSC !important;\n}\n\n// Chinese (Traditional)\n:lang(zh_tw) {\n    --font-family-h: ChaletComprime, NotoSansTC;\n    --font-family-body: NotoSansTC;\n}\n[data-type-lang='tw'] {\n    font-family: ChaletComprime, NotoSansTC !important;\n}\n\n// Japanese\n:lang(ja_jp) {\n    --font-family-h: ChaletComprime, NotoSansJP;\n    --font-family-body: NotoSansJP;\n}\n[data-type-lang='jp'] {\n    font-family: ChaletComprime, NotoSansJP !important;\n}\n\n// Korean\n:lang(ko_kr) {\n    --font-family-h: ChaletComprime, NotoSansKR;\n    --font-family-body: NotoSansKR;\n}\n[data-type-lang='kr'] {\n    font-family: ChaletComprime, NotoSansKR !important;\n}\n"],
        sourceRoot: ""
      }]), M.locals = {
        pillBtn: "rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d",
        selected: "rockstargames-modules-core-newswire-articleb58430ad013dcff6fef7da7166cc691f",
        interestTrackerWrapper: "rockstargames-modules-core-newswire-articled2b8c4d79af33709f68b37001ab7be39",
        interestTracker: "rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f",
        loader: "rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b",
        moduleImage: "rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844",
        mobileImgContainer: "rockstargames-modules-core-newswire-articlec0fc20e5997ec0175e466407b77f13ea",
        moduleImageMobile: "rockstargames-modules-core-newswire-articlebe574bc57f2a974b9acfab41bf011e87",
        slideContainer: "rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c",
        contentContainer: "rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d",
        landingSlide: "rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177",
        textContent: "rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e",
        successSlide: "rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284",
        unlinkedSlide: "rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d",
        platformButtonContainer: "rockstargames-modules-core-newswire-articlecac0eb7158ec985ab3ee6372a2bd7672",
        errorSlide: "rockstargames-modules-core-newswire-articlec55d286bddb7bc024ba481baa3f25282",
        btnContainer: "rockstargames-modules-core-newswire-articlef4b714d7985247039d190db0652b8ceb",
        topContent: "rockstargames-modules-core-newswire-articlede05099174e82770aeae6cd301329294",
        bottomContent: "rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af",
        legal: "rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54",
        faq: "rockstargames-modules-core-newswire-articlef56f546a21ace49c216e9a67228efb66",
        faqLink: "rockstargames-modules-core-newswire-articlef11c7041488926e7c7f25fc224f98947",
        badge: "rockstargames-modules-core-newswire-articlebcac1dcfa5b088eab1e65fc68e8c85a3",
        hidden: "rockstargames-modules-core-newswire-articlede0d2e1871164ef762659167bbd6529a",
        visible: "rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f",
        onScreen: "rockstargames-modules-core-newswire-articleae620b51e3ff54bcb035a20296ee980c",
        offScreen: "rockstargames-modules-core-newswire-articlec5da19bfed6924ef3a54c7b6950850dd",
        alert: "rockstargames-modules-core-newswire-articled18a7942f6ffe1c595090c27db4ed3cf",
        alertText: "rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8",
        errorAlert: "rockstargames-modules-core-newswire-articled3d7cc42ef277206a733e4cb57942870",
        successAlert: "rockstargames-modules-core-newswire-articled0d2bcc799b1f77be3797b44c90a217d",
        linkMore: "rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a",
        withIcon: "rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e",
        btnText: "rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e",
        swiperContainer: "rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852",
        swiperWrap: "rockstargames-modules-core-newswire-articlece299e602293eb072f2aa29f92ade94d",
        swiperButton: "rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355",
        swiperBtnPrev: "rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b",
        swiperBtnNext: "rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf",
        spinner: "rockstargames-modules-core-newswire-articlec596ce72795db40bd64a752fcff020f2",
        characterCardOverride: "rockstargames-modules-core-newswire-articlec999e2136e0f6804222f8e8c2e623865",
        rankOverride: "rockstargames-modules-core-newswire-articlecec42ef44a23c75f81c06af15a1b52ba",
        avatarImg: "rockstargames-modules-core-newswire-articleecabab4d06fea8b01b7aaef8c0af779b"
      };
      const fe = M
    },
    58134: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    },
    99589: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg"
    },
    56353: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b8d0dfbbdd49fe5c60d241474cc324fc.jpg"
    }
  }
]);