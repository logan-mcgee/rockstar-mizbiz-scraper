try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8f7268a9-6c2e-4ae6-8a60-0a09c6c2ed0c", e._sentryDebugIdIdentifier = "sentry-dbid-8f7268a9-6c2e-4ae6-8a60-0a09c6c2ed0c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [9037], {
    74009: (e, n, a) => {
      a.r(n), a.d(n, {
        default: () => ne
      });
      var t = a(42295),
        s = a(71127),
        r = a(10181),
        i = a(48586),
        o = a(21352),
        l = a(58136),
        c = a(79867),
        d = a(61874),
        u = a(72408),
        g = a(56990);
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
      var _ = a(22030),
        p = a(93231),
        h = a(1556),
        b = a.n(h);
      const v = ({
        legalText: e
      }) => (0, t.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });

      function T(e) {
        var n = function(e) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(e, "string");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
      }

      function k(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          })), a.push.apply(a, t)
        }
        return a
      }

      function x(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2 ? k(Object(a), !0).forEach(function(n) {
            var t, s, r;
            t = e, s = n, r = a[n], (s = T(s)) in t ? Object.defineProperty(t, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[s] = r
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : k(Object(a)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
          })
        }
        return e
      }

      function w(e, n) {
        var a = {};
        for (var t in e) a[t] = n(e[t], t);
        return a
      }
      var A, j, S = (e, n, a) => {
          for (var t of Object.keys(e)) {
            var s;
            if (e[t] !== (null !== (s = n[t]) && void 0 !== s ? s : a[t])) return !1
          }
          return !0
        },
        y = "_1ow0arsl",
        N = (A = {
          defaultClassName: "_1ow0arsn",
          variantClassNames: {
            slideName: {
              success: "_1ow0arso",
              error: "_1ow0arsp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (j = e => {
          var n = A.defaultClassName,
            a = x(x({}, A.defaultVariants), e);
          for (var t in a) {
            var s, r = null !== (s = a[t]) && void 0 !== s ? s : A.defaultVariants[t];
            if (null != r) {
              var i = r;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var o = A.variantClassNames[t][i];
              o && (n += " " + o)
            }
          }
          for (var [l, c] of A.compoundVariants) S(l, a, A.defaultVariants) && (n += " " + c);
          return n
        }).variants = () => Object.keys(A.variantClassNames), j.classNames = {
          get base() {
            return A.defaultClassName.split(" ")[0]
          },
          get variants() {
            return w(A.variantClassNames, e => w(e, e => e.split(" ")[0]))
          }
        }, j),
        G = "_1ow0arsm",
        E = "_1ow0arsi",
        O = "_1ow0arsg",
        q = "_1ow0ars5",
        L = "_1ow0ars6",
        C = "_1ow0arsq",
        z = "_1ow0arsj",
        P = "_1ow0ars3",
        I = "_1ow0ars8",
        R = "_1ow0arsz",
        M = "_1ow0arsa",
        F = "_1ow0arsh",
        U = "_1ow0ars7";
      const D = ({
        content: e,
        loggedIn: n,
        addClaim: a,
        signin: s,
        landingSlide: r
      }) => (0, t.jsxs)("div", {
        className: b()(q, "_1ow0arsc _1ow0arsb", "onScreen" === r ? I : "", "hidden" === r ? L : "", "visible" === r ? U : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: P,
          alt: e.introScreen.image.alt
        }), (0, t.jsxs)("div", {
          className: F,
          children: [(0, t.jsx)("div", {
            className: M,
            children: (0, t.jsxs)("div", {
              className: y,
              children: [(0, t.jsx)(p.Badge.Root, {
                className: "_1ow0arsk",
                appearance: "primary",
                children: (0, t.jsx)(p.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, t.jsxs)("div", {
                className: b()(G, "override"),
                children: [(0, t.jsx)(p.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, t.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, t.jsx)("div", {
                className: O,
                children: (0, t.jsx)(p.Button, {
                  className: R,
                  appearance: "primary",
                  size: "MD",
                  onClick: n ? a : s,
                  children: n ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, t.jsx)("div", {
            className: E,
            children: (0, t.jsx)("div", {
              className: b()(z, "override"),
              children: (0, t.jsx)(v, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var B = a(34232),
        V = a(24162),
        H = a(85827),
        W = a(32973),
        $ = a(14200);
      const Q = ({
        content: e,
        successSlide: n,
        characterList: a,
        linkAccountUrl: r,
        linkMoreAccounts: i,
        linkAccountBtn: o
      }) => {
        const l = (0, s.createRef)(),
          c = (0, s.createRef)(),
          d = (0, s.createRef)(),
          [u, g] = (0, s.useState)(),
          [m, f] = (0, s.useState)(!1),
          [_, h] = (0, s.useState)(),
          [T, k] = (0, s.useState)(!1),
          [x, w] = (0, s.useState)(!0);
        return (0, s.useEffect)(() => {
          const e = () => {
            l?.current && f(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, [l]), (0, s.useEffect)(() => {
          g({
            nextEl: c?.current,
            prevEl: d?.current
          })
        }, [d?.current, c?.current]), (0, t.jsxs)("div", {
          className: b()(q, "_1ow0arsd _1ow0arsb", "onScreen" === n ? I : "", "hidden" === n ? L : "", "visible" === n ? U : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: P,
            alt: e.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: F,
            children: [(0, t.jsxs)("div", {
              className: y,
              children: [(0, t.jsx)("div", {
                className: N({
                  slideName: "success"
                }),
                children: (0, t.jsx)(B.Check, {
                  className: C,
                  label: "succcess check label"
                })
              }), (0, t.jsxs)("div", {
                className: b()(G, "override"),
                children: [(0, t.jsx)(p.Heading, {
                  level: 3,
                  children: e.successScreen.headline
                }), (0, t.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.successScreen.body
                  }
                })]
              }), (0, t.jsxs)("div", {
                className: "_1ow0arss",
                children: [(0, t.jsx)("div", {
                  className: "_1ow0arst",
                  ref: l,
                  children: (0, t.jsx)(V.RC, {
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
                    modules: [H.Vx, H.Jq],
                    onInit: e => {
                      h(e)
                    },
                    onSlideChange: e => {
                      k(e?.isEnd), w(e?.isBeginning)
                    },
                    children: a.map(e => (0, t.jsx)(V.qr, {
                      tabIndex: 0,
                      children: (0, t.jsxs)(W.Root, {
                        className: "_1ow0arsx",
                        children: [(0, t.jsx)(W.Avatar, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, t.jsxs)(W.Content, {
                          children: [(0, t.jsx)(W.TopRow, {
                            children: (0, t.jsx)(W.PlatformTag, {
                              tagSize: W.PlatformTagSizes.large,
                              platform: e.platform
                            })
                          }), (0, t.jsx)(W.UserName, {
                            userName: e.platformUsername,
                            children: e.platformUsername
                          }), (0, t.jsx)(W.RankContent, {
                            children: (0, t.jsx)(W.RpCategory, {
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
                  children: (0, t.jsx)($.A, {
                    className: "_1ow0arsr",
                    to: r,
                    onClick: i,
                    children: o
                  })
                }), (0, t.jsx)(p.Button, {
                  className: "_1ow0arsu",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    _?.slidePrev()
                  },
                  isDisabled: x,
                  "data-hidden": !m
                }), (0, t.jsx)(p.Button, {
                  className: "_1ow0arsv",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: c,
                  onClick: () => {
                    _?.slideNext()
                  },
                  isDisabled: T,
                  "data-hidden": !m
                })]
              })]
            }), (0, t.jsx)("div", {
              className: E,
              children: (0, t.jsx)("div", {
                className: b()(z, "override"),
                children: (0, t.jsx)(v, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      var J = a(98357);
      const Y = ({
          content: e,
          unlinkedSlide: n,
          returnUrl: a,
          giftId: s
        }) => {
          const r = (0, l.useRockstarTokenPing)(),
            {
              track: i
            } = (0, d.useGtmTrack)(),
            o = async e => {
              const n = (0, l.findPlatform)(e)?.onlineService;
              if (n && "sc" !== n) {
                i({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: s,
                  text: `link ${n}`
                });
                const e = await (0, l.generateTpaLink)({
                  pingBearer: r,
                  returnUrl: a || window.location.pathname,
                  service: n
                });
                window.location.assign(e.href)
              }
            };
          return (0, t.jsxs)("div", {
            className: b()(q, "_1ow0arse _1ow0arsb", "onScreen" === n ? I : "", "hidden" === n ? L : "", "visible" === n ? U : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: P,
              alt: e.introScreen.image.alt
            }), (0, t.jsxs)("div", {
              className: F,
              children: [(0, t.jsx)("div", {
                className: M,
                children: (0, t.jsxs)("div", {
                  className: y,
                  children: [(0, t.jsx)("div", {
                    className: N({
                      slideName: "error"
                    }),
                    children: (0, t.jsx)(B.TriangleAlert, {
                      className: C,
                      label: ""
                    })
                  }), (0, t.jsxs)("div", {
                    className: b()(G, "override"),
                    children: [(0, t.jsx)(p.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, t.jsxs)("div", {
                    className: "_1ow0ars10",
                    children: [(0, t.jsx)(J.U, {
                      buttonText: (0, l.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => o("xbox"),
                      tabIndex: 0
                    }), (0, t.jsx)(J.U, {
                      buttonText: (0, l.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => o("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, t.jsx)("div", {
                className: E,
                children: (0, t.jsx)("div", {
                  className: b()(z, "override"),
                  children: (0, t.jsx)(v, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        K = ({
          errorSlide: e,
          content: n
        }) => (0, t.jsxs)("div", {
          className: b()(q, "_1ow0arsf _1ow0arsb", "onScreen" === e ? I : "", "hidden" === e ? L : "", "visible" === e ? U : ""),
          children: [n?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
            src: n.introScreen.image.sources.mobile,
            className: P,
            alt: n.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: F,
            children: [(0, t.jsx)("div", {
              className: M,
              children: (0, t.jsxs)("div", {
                className: y,
                children: [(0, t.jsx)("div", {
                  className: N({
                    slideName: "error"
                  }),
                  children: (0, t.jsx)(B.TriangleAlert, {
                    className: C,
                    label: ""
                  })
                }), (0, t.jsxs)("div", {
                  className: b()(G, "override"),
                  children: [(0, t.jsx)(p.Heading, {
                    level: 3,
                    children: n.errorScreen.headline
                  }), (0, t.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: n.errorScreen.body
                    }
                  })]
                }), (0, t.jsx)("div", {
                  className: O,
                  children: (0, t.jsx)(p.Button, {
                    className: R,
                    appearance: "primary",
                    size: "MD",
                    onClick: () => window.location.reload(),
                    children: n.errorScreen.btnText
                  })
                })]
              })
            }), (0, t.jsx)("div", {
              className: E,
              children: (0, t.jsx)("div", {
                className: b()(z, "override"),
                children: (0, t.jsx)(v, {
                  legalText: n.legalText
                })
              })
            })]
          })]
        });
      var X = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(X || {});
      const Z = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          currentSite: ee
        } = (0, c.A)(),
        ne = (0, g.withIntl)(({
          giftId: e,
          location: n = "gtaplus_site",
          introScreen: a,
          errorScreen: c,
          unlinkedScreen: m,
          successScreen: p,
          jumpLinkId: h,
          legalText: v,
          fontTheme: T = "chalet",
          usePadding: k = !0,
          ...x
        }) => {
          const w = {
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
              legalText: v,
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
            [A] = (0, r.useSearchParams)(),
            {
              data: j,
              loggedIn: S
            } = (0, d.useRockstarUser)(),
            y = (0, l.useRockstarTokenPing)(),
            N = `https://${ee?.subDomain}.rockstargames.com/account/connections`,
            G = (0, g.useIntl)(),
            {
              track: E
            } = (0, d.useGtmTrack)(),
            O = (0, s.useRef)(null),
            {
              ref: q,
              inView: L
            } = (0, o.useInView)({
              threshold: .6
            }),
            C = 1280,
            z = (0, s.createRef)(),
            [P, I] = (0, s.useState)(null),
            [R, M] = (0, s.useState)([]),
            [F, U] = (0, s.useState)(!1),
            [B, V] = (0, s.useState)(),
            [H, W] = (0, s.useState)("hidden"),
            [$, J] = (0, s.useState)("hidden"),
            [ne, ae] = (0, s.useState)("hidden"),
            [te, se] = (0, s.useState)("hidden"),
            [re, ie] = (0, s.useState)(!1),
            [oe, le] = (0, s.useState)(X.landing),
            [ce, de] = (0, s.useState)(w.introScreen.image.sources.mobile || Z),
            ue = `${document.location.pathname}${document.location.search}#${h}`,
            ge = (0, l.usePrevious)(B),
            me = (0, l.usePrevious)(S),
            {
              signInUrl: fe
            } = (0, l.useScAuthLinks)(ue),
            _e = e => {
              e === X.landing ? (le(X.landing), J("onScreen"), W("hidden"), se("hidden"), ae("hidden")) : e === X.success ? (le(X.success), J("offScreen"), W("visible"), setTimeout(() => {
                J("hidden"), se("hidden")
              }, 300), setTimeout(() => {
                W("onScreen")
              }, 100)) : e === X.error ? (le(X.error), J("offScreen"), se("visible"), setTimeout(() => {
                J("hidden")
              }, 300), setTimeout(() => {
                se("onScreen")
              }, 100)) : e === X.unlinked && (le(X.unlinked), J("offScreen"), ae("visible"), setTimeout(() => {
                J("hidden"), se("hidden")
              }, 300), setTimeout(() => {
                ae("onScreen")
              }, 100))
            };
          return (0, s.useEffect)(() => {
            let e;
            return h && window.location.hash === `#${h}` && O.current && (e = window.setTimeout(() => {
              O.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [h]), (0, s.useEffect)(() => {
            const e = () => {
                window.innerWidth >= 2560 && "newswire" !== n ? de(w.introScreen.image.sources.mobile || Z) : de(w.introScreen.image.sources.desktop || Z)
              },
              a = () => {
                window.innerWidth <= C && !F ? (U(!0), _e(oe)) : window.innerWidth > C && F && U(!1), e()
              };
            return U(window.innerWidth <= C), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [oe, F]), (0, s.useEffect)(() => {
            const e = j?.characters?.gtao;
            M(e || [])
          }, [j?.characters?.gtao]), (0, s.useEffect)(() => {
            "boolean" != typeof ge && "boolean" != typeof me || !e || B && S && (async () => {
              try {
                const {
                  result: n
                } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: y,
                  query: {
                    giftUId: e
                  }
                });
                I("boolean" == typeof n && n)
              } catch (e) {
                I(!1)
              }
            })()
          }, [B, S, e]), (0, s.useEffect)(() => {
            "boolean" == typeof S ? S ? V(!0) : (V(!1), J("onScreen")) : V(!0)
          }, [S]), (0, s.useEffect)(() => {
            "boolean" == typeof P && j?.accountSynced && V(!1)
          }, [P, j?.accountSynced, V]), (0, s.useEffect)(() => {
            B || (async () => {
              R.length > 0 && P ? _e(X.success) : _e(P ? X.unlinked : X.landing)
            })()
          }, [B]), (0, s.useEffect)(() => {
            if (L && !re) {
              if (void 0 === S) return;
              E({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: S ? "signed in" : "signed out"
              }), ie(!0)
            }
          }, [L, S]), (0, s.useEffect)(() => {
            "onScreen" === H && E({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [H]), (0, s.useEffect)(() => {
            "onScreen" === ne && E({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [ne]), (0, s.useEffect)(() => {
            "onScreen" === te && E({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [te]), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "_1ow0ars0",
              "data-font": T,
              "data-use-padding": k,
              ref: O,
              id: h || "",
              ...x,
              children: (0, t.jsxs)(i.motion.div, {
                className: "_1ow0ars1",
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
                  className: "_1ow0ars2",
                  style: {
                    "--engagement-image": `url(${ce})`
                  }
                }), (0, t.jsx)("div", {
                  className: b()("_1ow0ars4", B ? "loader" : ""),
                  ref: z,
                  children: B ? (0, t.jsx)("div", {
                    className: "_1ow0arsw",
                    children: (0, t.jsx)(u.A, {
                      type: "SPINNING"
                    })
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [oe === X.landing && (0, t.jsx)(D, {
                      content: w,
                      loggedIn: S,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: n,
                            utmCampaign: A.get("utm_campaign"),
                            utmContent: A.get("utm_content"),
                            utmMedium: A.get("utm_medium"),
                            utmSource: A.get("utm_source")
                          },
                          {
                            status: t
                          } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: y,
                            query: a
                          }) ?? [];
                        _e(t ? X.success : X.error), E({
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
                      landingSlide: $
                    }), oe === X.success && (0, t.jsx)(Q, {
                      content: w,
                      successSlide: H,
                      characterList: R,
                      linkAccountUrl: N,
                      linkMoreAccounts: () => {
                        E({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: N,
                          text: f.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: G.formatMessage(f.engagement_link_account)
                    }), oe === X.unlinked && (0, t.jsx)(Y, {
                      content: w,
                      unlinkedSlide: ne,
                      returnUrl: ue,
                      giftId: e
                    }), oe === X.error && (0, t.jsx)(K, {
                      errorSlide: te,
                      content: w
                    })]
                  })
                })]
              })
            })
          })
        }, m)
    }
  }
]);