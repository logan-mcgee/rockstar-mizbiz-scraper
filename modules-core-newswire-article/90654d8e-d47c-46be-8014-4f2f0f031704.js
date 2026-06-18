try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "90654d8e-d47c-46be-8014-4f2f0f031704", e._sentryDebugIdIdentifier = "sentry-dbid-90654d8e-d47c-46be-8014-4f2f0f031704")
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
  [4255], {
    28699(e, n, a) {
      a.r(n), a.d(n, {
        default: () => Q
      });
      var t = a(39793),
        i = a(93082),
        s = a(36416),
        o = a(24815),
        r = a(42285),
        l = a(13331),
        c = a(47279),
        d = a(82199),
        u = a(72132),
        g = a(42909);
      const m = JSON.parse('{"de-DE":{"engagement_faq":"FAQ","engagement_faqs":"FAQ","engagement_legal_text":"Das Angebot endet am 9. Oktober um 23:59 Uhr (ET). Ein mit einer Mitgliedschaft bei GTA+ verknüpftes Spielkonto für GTA Online wird benötigt. Gilt nur einmal pro Mitgliedschaft bei GTA+. Das Angebot muss abgeholt und GTA Online muss vor dem 8. November um 23:59 Uhr (ET) mit einem mit GTA+ verknüpften Spielkonto gestartet werden. Es gelten zusätzliche Bedingungen (siehe {FaqLink}).","engagement_link_account":"Anderes Konto verknüpfen","engagement_link_console_account":"Spielkonto verknüpfen"},"en-US":{"engagement_faq":"FAQ","engagement_faqs":"FAQs","engagement_legal_text":"Offer ends October 9 at 11:59 p.m. ET. Offer must be applied to the GTA Online Game Account linked to your GTA+ Membership and is limited to one redemption per GTA+ Membership. Must claim and then sign in to GTA Online using your GTA+ Game Account before November 8 at 11:59 p.m. ET to redeem offer. Additional terms apply, see {FaqLink} for full terms.","engagement_link_account":"Link Another Account","engagement_link_console_account":"Link Game Account"},"es-ES":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"Oferta válida hasta el 9 de octubre a las 23:59 ET. La oferta debe solicitarse en tu cuenta de juego de GTA Online asociada a tu suscripción de GTA+ y solo puede canjearse una vez por cada suscripción de GTA+. Debes solicitarla e iniciar sesión en GTA Online usando tu cuenta de GTA+ antes del 8 de noviembre a las 23:59 ET (05:59 CEST) para canjear la oferta. Se aplican condiciones adicionales. Para más información, consulta nuestra sección de {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta de juego"},"es-MX":{"engagement_faq":"PREGUNTAS FRECUENTES","engagement_faqs":"Preguntas frecuentes","engagement_legal_text":"La oferta termina el 9 de octubre a las 11:59 p. m. (ET). La oferta debe ser aplicada a la cuenta del juego de GTA Online vinculada a tu membresía de GTA+, y solo se podrá obtener una vez por cada membresía de GTA+. Debes solicitar la oferta e iniciar sesión en GTA Online con tu cuenta del juego de GTA+ antes del 8 de noviembre a las 11:59 p. m. (ET) para obtenerla. Se aplican términos adicionales. Para ver los términos, consulta las {FaqLink}.","engagement_link_account":"Vincular otra cuenta","engagement_link_console_account":"Vincular una cuenta del juego"},"fr-FR":{"engagement_faq":"NOTRE FOIRE AUX QUESTIONS","engagement_faqs":"nos foires aux questions","engagement_legal_text":"Fin de l\'offre le 9 octobre à 23 h 59, heure de New York. L\'offre doit être appliquée au compte de jeu de GTA Online associé à votre abonnement à GTA+. Une seule utilisation de l\'offre par abonnement à GTA+. Pour pouvoir utiliser l\'offre, vous devez la récupérer puis vous connecter à GTA Online avec votre compte de jeu GTA+ avant le 8 novembre à 23 h 59, heure de New York. Offre soumise à conditions ; conditions complètes disponibles sur {FaqLink}.","engagement_link_account":"Associer un autre compte","engagement_link_console_account":"Associer un compte de jeu"},"it-IT":{"engagement_faq":"DOMANDE FREQUENTI","engagement_faqs":"Domande frequenti","engagement_legal_text":"L’offerta termina il 9 ottobre alle 23:59, fuso orario ET. L’offerta deve essere riscattata sull’account di GTA Online collegato al tuo abbonamento GTA+. Limite di un riscatto per abbonamento GTA+. È necessario riscattare e in seguito effettuare l’accesso a GTA Online tramite il tuo account di gioco collegato a GTA+ prima dell’8 novembre alle 23:59, fuso orario ET, per usufruire dell’offerta. Si applicano ulteriori condizioni, consulta le {FaqLink}.","engagement_link_account":"Collega un altro account","engagement_link_console_account":"Collega un account di gioco"},"ja-JP":{"engagement_faq":"よくある質問","engagement_faqs":"よくある質問","engagement_legal_text":"オファーは10月9日午後11時59分(アメリカ東部時間)に終了します。オファーはGTA+メンバーシップにリンクされた「GTAオンライン」のゲームアカウントに適用され、各GTA+メンバーシップにつき1度のみ引き換え可能です。オファーは受け取り後、11月8日午後11時59分(アメリカ東部時間)前にGTA+ゲームアカウントで「GTAオンライン」にサインインして引き換えてください。諸条件が適用されます。全諸条件は{FaqLink}をご覧ください。","engagement_link_account":"他のアカウントをリンクする","engagement_link_console_account":"ゲームアカウントをリンクする"},"ko-KR":{"engagement_faq":"자주 묻는 질문","engagement_faqs":"자주 묻는 질문","engagement_legal_text":"10월 9일 오후 11시 59분(미국 동부시)에 혜택 종료. 혜택은 GTA+ 멤버십과 연동된 GTA 온라인 게임 계정에만 사용. GTA+ 계정당 1회 제한. 혜택을 획득하고 사용하려면, GTA+ 게임 계정을 사용해서 11월 8일 오후 11시 59분(미국 동부시) 이전에 GTA 온라인에 로그인해야 합니다. 추가 이용 약관 적용. 전체 약관 내용은 {FaqLink}을 확인하십시오.","engagement_link_account":"다른 계정 연동하기","engagement_link_console_account":"게임 계정 연동하기"},"pl-PL":{"engagement_faq":"NAJCZĘSTSZE PYTANIA","engagement_faqs":"Najczęstsze pytania","engagement_legal_text":"Oferta ważna do 9 października, godziny 23:59 czasu ET. Oferta musi zostać wykorzystana wraz z kontem GTA Online powiązanym z członkostwem w GTA+ i jest ograniczona do jednorazowego użytku dla jednego członkostwa w GTA+. Należy ją odebrać, logując się w GTA Online za pomocą konta powiązanego z GTA+ przed 8 listopada, godz. 23:59 czasu ET. Obowiązują dodatkowe warunki, dostępne na stronie {FaqLink}.","engagement_link_account":"Powiąż inne konto","engagement_link_console_account":"Powiąż konto gracza"},"pt-BR":{"engagement_faq":"PERGUNTAS FREQUENTES","engagement_faqs":"Perguntas Frequentes","engagement_legal_text":"Oferta válida até 9 de outubro às 23:59 ET (10 de outubro às 00:59 BRT). A oferta será aplicada à conta do GTA Online vinculada à sua Afiliação GTA+ e é limitada a um resgate por Afiliação GTA+. Após reivindicar, acesse o GTA Online com a sua conta do jogo com GTA+ antes de 8 de novembro às 23:59 ET (9 de novembro às 00:59 BRT) para resgatar a oferta. Aplicam-se condições adicionais. Para ver todos os termos, veja as {FaqLink}.","engagement_link_account":"Vincular outra conta","engagement_link_console_account":"Vincular conta do jogo"},"ru-RU":{"engagement_faq":"РАЗДЕЛЕ ЧАСТО ЗАДАВАЕМЫХ ВОПРОСОВ","engagement_faqs":"разделе часто задаваемых вопросов","engagement_legal_text":"Предложение действует до 23:59 (ET) 9 октября. Предложение действительно для игровой учетной записи GTA Online, связанной с вашей подпиской GTA+. Предложением можно воспользоваться не более одного раза на подписку GTA+. Чтобы воспользоваться предложением, после нажатия на «Получить» необходимо войти в GTA Online с игровой учетной записью GTA+ до 23:59 (ET) 8 ноября. Регламентируется дополнительными условиями. С полным списком условий можно ознакомиться в {FaqLink}.","engagement_link_account":"Привязать другую учетную запись","engagement_link_console_account":"Привязать игровую учетную запись"},"zh-CN":{"engagement_faq":"常见问题","engagement_faqs":"常见问题","engagement_legal_text":"福利截至美国东部时间 10 月 9 日晚上 11:59。福利仅适用于绑定了您 GTA+ 会员的 GTA 在线模式游戏账户，而且每个 GTA+ 会员仅限领取一次。领取后务必使用您的 GTA+ 游戏账户（于美国东部时间 11 月 8 日晚上 11:59 之前）登录 GTA 在线模式，以兑换福利。附加条款适用，请前往 {FaqLink} 查看完整条款。","engagement_link_account":"绑定另一个账户","engagement_link_console_account":"绑定游戏账户"},"zh-TW":{"engagement_faq":"常見問答","engagement_faqs":"常見問答","engagement_legal_text":"活動將於美東時間 10 月 9 日晚間 11 點 59 分結束。須擁有 GTA 線上模式遊戲帳戶連結至您的 GTA+ 會籍，每個 GTA+ 會籍僅限兌換一次。如要領取優惠，必須在美東時間 11 月 8 日晚間 11 點 59 分前使用您的 GTA+ 遊戲帳戶登入 GTA 線上模式進行兌換。適用額外條款，完整條款請參閱{FaqLink}。","engagement_link_account":"連結另一個帳戶","engagement_link_console_account":"連結遊戲帳戶"}}'),
        f = (0, g.defineMessages)({
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
      var _ = a(17301),
        p = a(31655),
        h = a(81270);
      const b = ({
        legalText: e
      }) => (0, t.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });
      var T = a(16630),
        x = "_1238r7l",
        k = (0, T.c)({
          defaultClassName: "_1238r7n",
          variantClassNames: {
            slideName: {
              success: "_1238r7o",
              error: "_1238r7p"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        v = "_1238r7m",
        A = "_1238r7i",
        S = "_1238r7g",
        w = "_1238r75",
        j = "_1238r76",
        N = "_1238r7q",
        G = "_1238r7j",
        y = "_1238r73",
        E = "_1238r78",
        O = "_1238r7z",
        q = "_1238r7a",
        L = "_1238r7h",
        C = "_1238r77";
      const z = ({
        content: e,
        loggedIn: n,
        addClaim: a,
        signin: i,
        landingSlide: s
      }) => (0, t.jsxs)("div", {
        className: (0, h.default)(w, "_1238r7c _1238r7b", "onScreen" === s ? E : "", "hidden" === s ? j : "", "visible" === s ? C : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: y,
          alt: e.introScreen.image.alt
        }), (0, t.jsxs)("div", {
          className: L,
          children: [(0, t.jsx)("div", {
            className: q,
            children: (0, t.jsxs)("div", {
              className: x,
              children: [(0, t.jsx)(p.Badge.Root, {
                className: "_1238r7k",
                appearance: "primary",
                children: (0, t.jsx)(p.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, t.jsxs)("div", {
                className: (0, h.default)(v, "override"),
                children: [(0, t.jsx)(p.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, t.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, t.jsx)("div", {
                className: S,
                children: (0, t.jsx)(p.Button, {
                  className: O,
                  appearance: "primary",
                  size: "LG",
                  onClick: n ? a : i,
                  children: n ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, t.jsx)("div", {
            className: A,
            children: (0, t.jsx)("div", {
              className: (0, h.default)(G, "override"),
              children: (0, t.jsx)(b, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var I = a(32760),
        R = a(14653),
        M = a(50662),
        F = a(2122),
        P = a(38044);
      const U = ({
        content: e,
        successSlide: n,
        characterList: a,
        linkAccountUrl: s,
        linkMoreAccounts: o,
        linkAccountBtn: r
      }) => {
        const l = (0, i.createRef)(),
          c = (0, i.createRef)(),
          d = (0, i.createRef)(),
          [u, g] = (0, i.useState)(),
          [m, f] = (0, i.useState)(!1),
          [_, T] = (0, i.useState)(),
          [S, O] = (0, i.useState)(!1),
          [q, z] = (0, i.useState)(!0);
        return (0, i.useEffect)(() => {
          const e = () => {
            l?.current && f(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [l]), (0, i.useEffect)(() => {
          g({
            nextEl: c?.current,
            prevEl: d?.current
          })
        }, [d?.current, c?.current]), (0, t.jsxs)("div", {
          className: (0, h.default)(w, "_1238r7d _1238r7b", "onScreen" === n ? E : "", "hidden" === n ? j : "", "visible" === n ? C : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: y,
            alt: e.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: L,
            children: [(0, t.jsxs)("div", {
              className: x,
              children: [(0, t.jsx)("div", {
                className: k({
                  slideName: "success"
                }),
                children: (0, t.jsx)(I.Check, {
                  className: N,
                  label: "succcess check label"
                })
              }), (0, t.jsxs)("div", {
                className: (0, h.default)(v, "override"),
                children: [(0, t.jsx)(p.Heading, {
                  level: 3,
                  children: e.successScreen.headline
                }), (0, t.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.successScreen.body
                  }
                })]
              }), (0, t.jsxs)("div", {
                className: "_1238r7s",
                children: [(0, t.jsx)("div", {
                  className: "_1238r7t",
                  ref: l,
                  children: (0, t.jsx)(R.RC, {
                    mousewheel: {
                      releaseOnEdges: !0
                    },
                    touchReleaseOnEdges: !0,
                    loop: !1,
                    grabCursor: m,
                    slidesPerView: "auto",
                    speed: 700,
                    slidesOffsetAfter: 100,
                    navigation: u,
                    modules: [M.Vx, M.Jq],
                    onInit: e => {
                      T(e)
                    },
                    onSlideChange: e => {
                      O(e?.isEnd), z(e?.isBeginning)
                    },
                    children: a.map(e => (0, t.jsx)(R.qr, {
                      tabIndex: 0,
                      children: (0, t.jsxs)(F.Root, {
                        className: "_1238r7x",
                        children: [(0, t.jsx)(F.Avatar, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, t.jsxs)(F.Content, {
                          children: [(0, t.jsx)(F.TopRow, {
                            children: (0, t.jsx)(F.PlatformTag, {
                              tagSize: F.PlatformTagSizes.large,
                              platform: e.platform
                            })
                          }), (0, t.jsx)(F.UserName, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, t.jsx)(F.RankContent, {
                            children: (0, t.jsx)(F.RpCategory, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, t.jsx)(p.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, t.jsx)(P.A, {
                    className: "_1238r7r",
                    to: s,
                    onClick: o,
                    children: r
                  })
                }), (0, t.jsx)(p.Button, {
                  className: "_1238r7u",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    _?.slidePrev()
                  },
                  isDisabled: q,
                  "data-hidden": !m
                }), (0, t.jsx)(p.Button, {
                  className: "_1238r7v",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: c,
                  onClick: () => {
                    _?.slideNext()
                  },
                  isDisabled: S,
                  "data-hidden": !m
                })]
              })]
            }), (0, t.jsx)("div", {
              className: A,
              children: (0, t.jsx)("div", {
                className: (0, h.default)(G, "override"),
                children: (0, t.jsx)(b, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      var B = a(11251);
      const D = ({
          content: e,
          unlinkedSlide: n,
          returnUrl: a,
          giftId: i
        }) => {
          const s = (0, l.useRockstarTokenPing)(),
            {
              track: o
            } = (0, d.useGtmTrack)(),
            r = async e => {
              const n = (0, l.findPlatform)(e)?.onlineService;
              if (n && "sc" !== n) {
                o({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: i,
                  text: `link ${n}`
                });
                const e = await (0, l.generateTpaLink)({
                  pingBearer: s,
                  returnUrl: a || window.location.pathname,
                  service: n
                });
                window.location.assign(e.href)
              }
            };
          return (0, t.jsxs)("div", {
            className: (0, h.default)(w, "_1238r7e _1238r7b", "onScreen" === n ? E : "", "hidden" === n ? j : "", "visible" === n ? C : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: y,
              alt: e.introScreen.image.alt
            }), (0, t.jsxs)("div", {
              className: L,
              children: [(0, t.jsx)("div", {
                className: q,
                children: (0, t.jsxs)("div", {
                  className: x,
                  children: [(0, t.jsx)("div", {
                    className: k({
                      slideName: "error"
                    }),
                    children: (0, t.jsx)(I.TriangleAlert, {
                      className: N,
                      label: ""
                    })
                  }), (0, t.jsxs)("div", {
                    className: (0, h.default)(v, "override"),
                    children: [(0, t.jsx)(p.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, t.jsxs)("div", {
                    className: "_1238r710",
                    children: [(0, t.jsx)(B.U, {
                      buttonText: (0, l.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => r("xbox"),
                      tabIndex: 0
                    }), (0, t.jsx)(B.U, {
                      buttonText: (0, l.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => r("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, t.jsx)("div", {
                className: A,
                children: (0, t.jsx)("div", {
                  className: (0, h.default)(G, "override"),
                  children: (0, t.jsx)(b, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        H = ({
          errorSlide: e,
          content: n
        }) => (0, t.jsxs)("div", {
          className: (0, h.default)(w, "_1238r7f _1238r7b", "onScreen" === e ? E : "", "hidden" === e ? j : "", "visible" === e ? C : ""),
          children: [n?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
            src: n.introScreen.image.sources.mobile,
            className: y,
            alt: n.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: L,
            children: [(0, t.jsx)("div", {
              className: q,
              children: (0, t.jsxs)("div", {
                className: x,
                children: [(0, t.jsx)("div", {
                  className: k({
                    slideName: "error"
                  }),
                  children: (0, t.jsx)(I.TriangleAlert, {
                    className: N,
                    label: ""
                  })
                }), (0, t.jsxs)("div", {
                  className: (0, h.default)(v, "override"),
                  children: [(0, t.jsx)(p.Heading, {
                    level: 3,
                    children: n.errorScreen.headline
                  }), (0, t.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: n.errorScreen.body
                    }
                  })]
                }), (0, t.jsx)("div", {
                  className: S,
                  children: (0, t.jsx)(p.Button, {
                    className: O,
                    appearance: "primary",
                    size: "LG",
                    onClick: () => window.location.reload(),
                    children: n.errorScreen.btnText
                  })
                })]
              })
            }), (0, t.jsx)("div", {
              className: A,
              children: (0, t.jsx)("div", {
                className: (0, h.default)(G, "override"),
                children: (0, t.jsx)(b, {
                  legalText: n.legalText
                })
              })
            })]
          })]
        });
      var V = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(V || {});
      const W = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: $
        } = (0, c.A)(),
        Q = (0, g.withIntl)(({
          giftId: e,
          location: n = "gtaplus_site",
          introScreen: a,
          errorScreen: c,
          unlinkedScreen: m,
          successScreen: p,
          jumpLinkId: b,
          legalText: T,
          fontTheme: x = "chalet",
          usePadding: k = !0,
          ...v
        }) => {
          const A = {
              errorScreen: {
                btnText: c?.errorButton || "",
                headline: c?.errorHeadline || "",
                body: c?.errorContent || ""
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
                    desktop: (0, _.useGetCdnSource)(a?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, _.useGetCdnSource)(a?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: a?.tag || ""
              },
              legalText: T,
              successScreen: {
                body: p?.successContent || "",
                headline: p?.successHeadline || ""
              },
              unlinkedScreen: {
                body: m?.unlinkedContent || "",
                btnText: m?.unlinkedButtonText || "",
                headline: m?.unlinkedHeadline || ""
              }
            },
            [S] = (0, s.useSearchParams)(),
            {
              data: w,
              loggedIn: j
            } = (0, d.useRockstarUser)(),
            N = (0, l.useRockstarTokenPing)(),
            G = `https://${$?.subDomain}.rockstargames.com/account/connections`,
            y = (0, g.useIntl)(),
            {
              track: E
            } = (0, d.useGtmTrack)(),
            O = (0, i.useRef)(null),
            {
              ref: q,
              inView: L
            } = (0, r.useInView)({
              threshold: .6
            }),
            C = 1280,
            I = (0, i.createRef)(),
            [R, M] = (0, i.useState)(null),
            [F, P] = (0, i.useState)([]),
            [B, Q] = (0, i.useState)(!1),
            [J, Y] = (0, i.useState)(),
            [K, X] = (0, i.useState)("hidden"),
            [Z, ee] = (0, i.useState)("hidden"),
            [ne, ae] = (0, i.useState)("hidden"),
            [te, ie] = (0, i.useState)("hidden"),
            [se, oe] = (0, i.useState)(!1),
            [re, le] = (0, i.useState)(V.landing),
            [ce, de] = (0, i.useState)(A.introScreen.image.sources.mobile || W),
            ue = `${document.location.pathname}${document.location.search}#${b}`,
            ge = (0, l.usePrevious)(J),
            me = (0, l.usePrevious)(j),
            {
              signInUrl: fe
            } = (0, l.useScAuthLinks)(ue),
            _e = e => {
              e === V.landing ? (le(V.landing), ee("onScreen"), X("hidden"), ie("hidden"), ae("hidden")) : e === V.success ? (le(V.success), ee("offScreen"), X("visible"), setTimeout(() => {
                ee("hidden"), ie("hidden")
              }, 300), setTimeout(() => {
                X("onScreen")
              }, 100)) : e === V.error ? (le(V.error), ee("offScreen"), ie("visible"), setTimeout(() => {
                ee("hidden")
              }, 300), setTimeout(() => {
                ie("onScreen")
              }, 100)) : e === V.unlinked && (le(V.unlinked), ee("offScreen"), ae("visible"), setTimeout(() => {
                ee("hidden"), ie("hidden")
              }, 300), setTimeout(() => {
                ae("onScreen")
              }, 100))
            };
          return (0, i.useEffect)(() => {
            let e;
            return b && window.location.hash === `#${b}` && O.current && (e = window.setTimeout(() => {
              O.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [b]), (0, i.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== n ? de(A.introScreen.image.sources.mobile || W) : de(A.introScreen.image.sources.desktop || W)
              },
              a = () => {
                window.innerWidth <= C && !B ? (Q(!0), _e(re)) : window.innerWidth > C && B && Q(!1), e()
              };
            return Q(window.innerWidth <= C), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [re, B]), (0, i.useEffect)(() => {
            const e = w?.characters?.gtao;
            P(e || [])
          }, [w?.characters?.gtao]), (0, i.useEffect)(() => {
            "boolean" != typeof ge && "boolean" != typeof me || !e || J && j && (async () => {
              try {
                const {
                  result: n
                } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: N,
                  query: {
                    giftUId: e
                  }
                });
                M("boolean" == typeof n && n)
              } catch (e) {
                M(!1)
              }
            })()
          }, [J, j, e]), (0, i.useEffect)(() => {
            "boolean" == typeof j ? j ? Y(!0) : (Y(!1), ee("onScreen")) : Y(!0)
          }, [j]), (0, i.useEffect)(() => {
            "boolean" == typeof R && w?.accountSynced && Y(!1)
          }, [R, w?.accountSynced, Y]), (0, i.useEffect)(() => {
            J || (async () => {
              F.length > 0 && R ? _e(V.success) : _e(R ? V.unlinked : V.landing)
            })()
          }, [J]), (0, i.useEffect)(() => {
            if (L && !se) {
              if (void 0 === j) return;
              E({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: j ? "signed in" : "signed out"
              }), oe(!0)
            }
          }, [L, j]), (0, i.useEffect)(() => {
            "onScreen" === K && E({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [K]), (0, i.useEffect)(() => {
            "onScreen" === ne && E({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [ne]), (0, i.useEffect)(() => {
            "onScreen" === te && E({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [te]), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "_1238r70",
              "data-font": x,
              "data-use-padding": k,
              ref: O,
              id: b || "",
              ...v,
              children: (0, t.jsxs)(o.P.div, {
                className: "_1238r71",
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
                ref: q,
                children: [(0, t.jsx)("div", {
                  className: "_1238r72",
                  style: {
                    "--engagement-image": `url(${ce})`
                  }
                }), (0, t.jsx)("div", {
                  className: (0, h.default)("_1238r74", J ? "loader" : ""),
                  ref: I,
                  children: J ? (0, t.jsx)("div", {
                    className: "_1238r7w",
                    children: (0, t.jsx)(u.A, {
                      type: "SPINNING"
                    })
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [re === V.landing && (0, t.jsx)(z, {
                      content: A,
                      loggedIn: j,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: n,
                            utmCampaign: S.get("utm_campaign"),
                            utmContent: S.get("utm_content"),
                            utmMedium: S.get("utm_medium"),
                            utmSource: S.get("utm_source")
                          },
                          {
                            status: t
                          } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: N,
                            query: a
                          }) ?? [];
                        _e(t ? V.success : V.error), E({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        E({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: fe,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.assign(fe)
                      },
                      landingSlide: Z
                    }), re === V.success && (0, t.jsx)(U, {
                      content: A,
                      successSlide: K,
                      characterList: F,
                      linkAccountUrl: G,
                      linkMoreAccounts: () => {
                        E({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: G,
                          text: f.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: y.formatMessage(f.engagement_link_account)
                    }), re === V.unlinked && (0, t.jsx)(D, {
                      content: A,
                      unlinkedSlide: ne,
                      returnUrl: ue,
                      giftId: e
                    }), re === V.error && (0, t.jsx)(H, {
                      errorSlide: te,
                      content: A
                    })]
                  })
                })]
              })
            })
          })
        }, m)
    },
    47279(e, n, a) {
      a.d(n, {
        A: () => o,
        C: () => i
      });
      var t = a(40283);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let e;
          const {
            location: n
          } = window, a = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), i = s.findIndex(n => Object.entries(n.sites).findIndex(([n, t]) => t === a && (e = {
            site: n,
            subDomain: t
          }, !0)) >= 0), o = s[i >= 0 ? i : 0], r = s.find(e => e.id === o.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, t.omit)((0, t.merge)({}, r, {
            currentSite: e
          }, o), "fallbackEnvironment")
        }
    }
  }
]);