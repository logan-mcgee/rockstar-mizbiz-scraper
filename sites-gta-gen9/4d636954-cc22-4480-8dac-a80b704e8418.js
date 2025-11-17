try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4d636954-cc22-4480-8dac-a80b704e8418", e._sentryDebugIdIdentifier = "sentry-dbid-4d636954-cc22-4480-8dac-a80b704e8418")
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
  [4502], {
    86: (e, n, a) => {
      a.r(n), a.d(n, {
        default: () => ee
      });
      var t = a(42295),
        s = a(62229),
        i = a(9623),
        r = a(62665),
        o = a(61128),
        l = a(95966),
        c = a(2918),
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
        _ = a(39978),
        p = a(4572),
        h = a.n(p);
      const b = ({
        legalText: e
      }) => (0, t.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: e
        }
      });

      function v(e) {
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

      function T(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n && (t = t.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          })), a.push.apply(a, t)
        }
        return a
      }

      function k(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2 ? T(Object(a), !0).forEach(function(n) {
            var t, s, i;
            t = e, s = n, i = a[n], (s = v(s)) in t ? Object.defineProperty(t, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[s] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : T(Object(a)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
          })
        }
        return e
      }

      function x(e, n) {
        var a = {};
        for (var t in e) a[t] = n(e[t], t);
        return a
      }
      var w, j, A = (e, n, a) => {
          for (var t of Object.keys(e)) {
            var s;
            if (e[t] !== (null !== (s = n[t]) && void 0 !== s ? s : a[t])) return !1
          }
          return !0
        },
        S = "_1ow0arsl",
        y = (w = {
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
          var n = w.defaultClassName,
            a = k(k({}, w.defaultVariants), e);
          for (var t in a) {
            var s, i = null !== (s = a[t]) && void 0 !== s ? s : w.defaultVariants[t];
            if (null != i) {
              var r = i;
              "boolean" == typeof r && (r = !0 === r ? "true" : "false");
              var o = w.variantClassNames[t][r];
              o && (n += " " + o)
            }
          }
          for (var [l, c] of w.compoundVariants) A(l, a, w.defaultVariants) && (n += " " + c);
          return n
        }).variants = () => Object.keys(w.variantClassNames), j.classNames = {
          get base() {
            return w.defaultClassName.split(" ")[0]
          },
          get variants() {
            return x(w.variantClassNames, e => x(e, e => e.split(" ")[0]))
          }
        }, j),
        N = "_1ow0arsm",
        G = "_1ow0arsi",
        E = "_1ow0arsg",
        O = "_1ow0ars5",
        q = "_1ow0ars6",
        C = "_1ow0arsq",
        L = "_1ow0arsj",
        z = "_1ow0ars3",
        P = "_1ow0ars8",
        I = "_1ow0arsz",
        R = "_1ow0arsa",
        M = "_1ow0arsh",
        F = "_1ow0ars7";
      const U = ({
        content: e,
        loggedIn: n,
        addClaim: a,
        signin: s,
        landingSlide: i
      }) => (0, t.jsxs)("div", {
        className: h()(O, "_1ow0arsc _1ow0arsb", "onScreen" === i ? P : "", "hidden" === i ? q : "", "visible" === i ? F : ""),
        children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
          src: e.introScreen.image.sources.mobile,
          className: z,
          alt: e.introScreen.image.alt
        }), (0, t.jsxs)("div", {
          className: M,
          children: [(0, t.jsx)("div", {
            className: R,
            children: (0, t.jsxs)("div", {
              className: S,
              children: [(0, t.jsx)(_.Badge.Root, {
                className: "_1ow0arsk",
                appearance: "primary",
                children: (0, t.jsx)(_.Badge.Label, {
                  children: e.introScreen.tag
                })
              }), (0, t.jsxs)("div", {
                className: h()(N, "override"),
                children: [(0, t.jsx)(_.Heading, {
                  level: 3,
                  children: e.introScreen.headline
                }), (0, t.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: e.introScreen.body
                  }
                })]
              }), (0, t.jsx)("div", {
                className: E,
                children: (0, t.jsx)(_.Button, {
                  className: I,
                  appearance: "primary",
                  size: "MD",
                  onClick: n ? a : s,
                  children: n ? e.introScreen.btnText.loggedIn : e.introScreen.btnText.loggedOut
                })
              })]
            })
          }), (0, t.jsx)("div", {
            className: G,
            children: (0, t.jsx)("div", {
              className: h()(L, "override"),
              children: (0, t.jsx)(b, {
                legalText: e.legalText
              })
            })
          })]
        })]
      });
      var D = a(19842),
        B = a(24162),
        V = a(85827),
        H = a(91),
        W = a(14200);
      const $ = ({
        content: e,
        successSlide: n,
        characterList: a,
        linkAccountUrl: i,
        linkMoreAccounts: r,
        linkAccountBtn: o
      }) => {
        const l = (0, s.createRef)(),
          c = (0, s.createRef)(),
          d = (0, s.createRef)(),
          [u, g] = (0, s.useState)(),
          [m, f] = (0, s.useState)(!1),
          [p, v] = (0, s.useState)(),
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
          className: h()(O, "_1ow0arsd _1ow0arsb", "onScreen" === n ? P : "", "hidden" === n ? q : "", "visible" === n ? F : ""),
          children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
            src: e.introScreen.image.sources.mobile,
            className: z,
            alt: e.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: M,
            children: [(0, t.jsxs)("div", {
              className: S,
              children: [(0, t.jsx)("div", {
                className: y({
                  slideName: "success"
                }),
                children: (0, t.jsx)(D.Check, {
                  className: C,
                  label: "succcess check label"
                })
              }), (0, t.jsxs)("div", {
                className: h()(N, "override"),
                children: [(0, t.jsx)(_.Heading, {
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
                  children: (0, t.jsx)(B.RC, {
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
                    modules: [V.Vx, V.Jq],
                    onInit: e => {
                      v(e)
                    },
                    onSlideChange: e => {
                      k(e?.isEnd), w(e?.isBeginning)
                    },
                    children: a.map(e => (0, t.jsx)(B.qr, {
                      tabIndex: 0,
                      children: (0, t.jsxs)(H.Root, {
                        className: "_1ow0arsx",
                        children: [(0, t.jsx)(H.Avatar, {
                          src: e.mugshotUrl
                        }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`), (0, t.jsxs)(H.Content, {
                          children: [(0, t.jsx)(H.TopRow, {
                            children: (0, t.jsx)(H.PlatformTag, {
                              tagSize: H.PlatformTagSizes.large,
                              platform: e.platform
                            })
                          }), (0, t.jsx)(H.UserName, {
                            children: e.platformUsername
                          }), (0, t.jsx)(H.RankContent, {
                            children: (0, t.jsx)(H.RpCategory, {
                              rank: e.stats.overview.rank.value
                            })
                          })]
                        })]
                      })
                    }, `${e.platformUsername}-${e.platform}-${e.characterSlot}`))
                  })
                }), (0, t.jsx)(_.Button, {
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "",
                  asChild: !0,
                  children: (0, t.jsx)(W.A, {
                    className: "_1ow0arsr",
                    to: i,
                    onClick: r,
                    children: o
                  })
                }), (0, t.jsx)(_.Button, {
                  className: "_1ow0arsu",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowLeft",
                  iconRightLabel: "Previous",
                  ref: d,
                  onClick: () => {
                    p?.slidePrev()
                  },
                  isDisabled: x,
                  "data-hidden": !m
                }), (0, t.jsx)(_.Button, {
                  className: "_1ow0arsv",
                  size: "SM",
                  appearance: "ghost",
                  iconRight: "ArrowRight",
                  iconRightLabel: "Previous",
                  ref: c,
                  onClick: () => {
                    p?.slideNext()
                  },
                  isDisabled: T,
                  "data-hidden": !m
                })]
              })]
            }), (0, t.jsx)("div", {
              className: G,
              children: (0, t.jsx)("div", {
                className: h()(L, "override"),
                children: (0, t.jsx)(b, {
                  legalText: e.legalText
                })
              })
            })]
          })]
        })
      };
      var Q = a(98357);
      const J = ({
          content: e,
          unlinkedSlide: n,
          returnUrl: a,
          giftId: s
        }) => {
          const i = (0, l.useRockstarTokenPing)(),
            {
              track: r
            } = (0, c.useGtmTrack)(),
            o = async e => {
              const n = (0, l.findPlatform)(e)?.onlineService;
              if (n && "sc" !== n) {
                r({
                  element_placement: "woc",
                  event: "cta_link_account",
                  o_id: s,
                  text: `link ${n}`
                });
                const e = await (0, l.generateTpaLink)({
                  pingBearer: i,
                  returnUrl: a || window.location.pathname,
                  service: n
                });
                window.location.href = e.href
              }
            };
          return (0, t.jsxs)("div", {
            className: h()(O, "_1ow0arse _1ow0arsb", "onScreen" === n ? P : "", "hidden" === n ? q : "", "visible" === n ? F : ""),
            children: [e?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
              src: e.introScreen.image.sources.mobile,
              className: z,
              alt: e.introScreen.image.alt
            }), (0, t.jsxs)("div", {
              className: M,
              children: [(0, t.jsx)("div", {
                className: R,
                children: (0, t.jsxs)("div", {
                  className: S,
                  children: [(0, t.jsx)("div", {
                    className: y({
                      slideName: "error"
                    }),
                    children: (0, t.jsx)(D.TriangleAlert, {
                      className: C,
                      label: ""
                    })
                  }), (0, t.jsxs)("div", {
                    className: h()(N, "override"),
                    children: [(0, t.jsx)(_.Heading, {
                      level: 3,
                      children: e.unlinkedScreen.headline
                    }), (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: e.unlinkedScreen.body
                      }
                    })]
                  }), (0, t.jsxs)("div", {
                    className: "_1ow0ars10",
                    children: [(0, t.jsx)(Q.U, {
                      buttonText: (0, l.findPlatform)("xbox")?.friendlyName,
                      platform: "xbox",
                      target: "_blank",
                      onClick: () => o("xbox"),
                      tabIndex: 0
                    }), (0, t.jsx)(Q.U, {
                      buttonText: (0, l.findPlatform)("ps")?.friendlyName,
                      platform: "ps",
                      target: "_blank",
                      onClick: () => o("ps"),
                      tabIndex: 0
                    })]
                  })]
                })
              }), (0, t.jsx)("div", {
                className: G,
                children: (0, t.jsx)("div", {
                  className: h()(L, "override"),
                  children: (0, t.jsx)(b, {
                    legalText: e.legalText
                  })
                })
              })]
            })]
          })
        },
        Y = ({
          errorSlide: e,
          content: n
        }) => (0, t.jsxs)("div", {
          className: h()(O, "_1ow0arsf _1ow0arsb", "onScreen" === e ? P : "", "hidden" === e ? q : "", "visible" === e ? F : ""),
          children: [n?.introScreen?.image?.sources?.mobile && (0, t.jsx)("img", {
            src: n.introScreen.image.sources.mobile,
            className: z,
            alt: n.introScreen.image.alt
          }), (0, t.jsxs)("div", {
            className: M,
            children: [(0, t.jsx)("div", {
              className: R,
              children: (0, t.jsxs)("div", {
                className: S,
                children: [(0, t.jsx)("div", {
                  className: y({
                    slideName: "error"
                  }),
                  children: (0, t.jsx)(D.TriangleAlert, {
                    className: C,
                    label: ""
                  })
                }), (0, t.jsxs)("div", {
                  className: h()(N, "override"),
                  children: [(0, t.jsx)(_.Heading, {
                    level: 3,
                    children: n.errorScreen.headline
                  }), (0, t.jsx)("div", {
                    dangerouslySetInnerHTML: {
                      __html: n.errorScreen.body
                    }
                  })]
                }), (0, t.jsx)("div", {
                  className: E,
                  children: (0, t.jsx)(_.Button, {
                    className: I,
                    appearance: "primary",
                    size: "MD",
                    onClick: () => window.location.reload(),
                    children: n.errorScreen.btnText
                  })
                })]
              })
            }), (0, t.jsx)("div", {
              className: G,
              children: (0, t.jsx)("div", {
                className: h()(L, "override"),
                children: (0, t.jsx)(b, {
                  legalText: n.legalText
                })
              })
            })]
          })]
        });
      var K = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(K || {});
      const X = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        {
          host: Z
        } = (0, l.getConfigForDomain)(),
        ee = (0, u.withIntl)(({
          giftId: e,
          location: n = "gtaplus_site",
          introScreen: a,
          errorScreen: g,
          unlinkedScreen: _,
          successScreen: p,
          jumpLinkId: b,
          legalText: v,
          fontTheme: T = "chalet",
          usePadding: k = !0
        }) => {
          const x = {
              errorScreen: {
                btnText: g?.errorButton || "",
                headline: g?.errorHeadline || "",
                body: g?.errorContent || ""
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
              legalText: v,
              successScreen: {
                body: p?.successContent || "",
                headline: p?.successHeadline || ""
              },
              unlinkedScreen: {
                body: _?.unlinkedContent || "",
                btnText: _?.unlinkedButtonText || "",
                headline: _?.unlinkedHeadline || ""
              }
            },
            [w] = (0, i.useSearchParams)(),
            {
              data: j,
              loggedIn: A
            } = (0, c.useRockstarUser)(),
            S = (0, l.useRockstarTokenPing)(),
            y = `https://${Z}.rockstargames.com/settings/linkedaccounts`,
            N = (0, u.useIntl)(),
            {
              track: G
            } = (0, c.useGtmTrack)(),
            E = (0, s.useRef)(null),
            {
              ref: O,
              inView: q
            } = (0, o.useInView)({
              threshold: .6
            }),
            C = 1280,
            L = (0, s.createRef)(),
            [z, P] = (0, s.useState)(null),
            [I, R] = (0, s.useState)([]),
            [M, F] = (0, s.useState)(!1),
            [D, B] = (0, s.useState)(),
            [V, H] = (0, s.useState)("hidden"),
            [W, Q] = (0, s.useState)("hidden"),
            [ee, ne] = (0, s.useState)("hidden"),
            [ae, te] = (0, s.useState)("hidden"),
            [se, ie] = (0, s.useState)(!1),
            [re, oe] = (0, s.useState)(K.landing),
            [le, ce] = (0, s.useState)(x.introScreen.image.sources.mobile || X),
            de = `${document.location.pathname}${document.location.search}#${b}`,
            ue = (0, l.usePrevious)(D),
            ge = (0, l.usePrevious)(A),
            {
              signInUrl: me
            } = (0, l.useScAuthLinks)(de),
            fe = e => {
              e === K.landing ? (oe(K.landing), Q("onScreen"), H("hidden"), te("hidden"), ne("hidden")) : e === K.success ? (oe(K.success), Q("offScreen"), H("visible"), setTimeout(() => {
                Q("hidden"), te("hidden")
              }, 300), setTimeout(() => {
                H("onScreen")
              }, 100)) : e === K.error ? (oe(K.error), Q("offScreen"), te("visible"), setTimeout(() => {
                Q("hidden")
              }, 300), setTimeout(() => {
                te("onScreen")
              }, 100)) : e === K.unlinked && (oe(K.unlinked), Q("offScreen"), ne("visible"), setTimeout(() => {
                Q("hidden"), te("hidden")
              }, 300), setTimeout(() => {
                ne("onScreen")
              }, 100))
            };
          return (0, s.useEffect)(() => {
            let e;
            return b && window.location.hash === `#${b}` && E.current && (e = window.setTimeout(() => {
              E.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              })
            }, 1e3)), () => window.clearTimeout(e)
          }, [b]), (0, s.useEffect)(() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== n ? ce(x.introScreen.image.sources.mobile || X) : ce(x.introScreen.image.sources.desktop || X)
              },
              a = () => {
                window.innerWidth <= C && !M ? (F(!0), fe(re)) : window.innerWidth > C && M && F(!1), e()
              };
            return F(window.innerWidth <= C), e(), window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }, [re, M]), (0, s.useEffect)(() => {
            const e = j?.characters?.gtao;
            R(e || [])
          }, [j?.characters?.gtao]), (0, s.useEffect)(() => {
            "boolean" != typeof ue && "boolean" != typeof ge || !e || D && A && (async () => {
              try {
                const {
                  result: n
                } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
                  pingBearer: S,
                  query: {
                    giftUId: e
                  }
                });
                P("boolean" == typeof n && n)
              } catch (e) {
                P(!1)
              }
            })()
          }, [D, A, e]), (0, s.useEffect)(() => {
            "boolean" == typeof A ? A ? B(!0) : (B(!1), Q("onScreen")) : B(!0)
          }, [A]), (0, s.useEffect)(() => {
            "boolean" == typeof z && j?.accountSynced && B(!1)
          }, [z, j?.accountSynced, B]), (0, s.useEffect)(() => {
            D || (async () => {
              I.length > 0 && z ? fe(K.success) : fe(z ? K.unlinked : K.landing)
            })()
          }, [D]), (0, s.useEffect)(() => {
            if (q && !se) {
              if (void 0 === A) return;
              G({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: A ? "signed in" : "signed out"
              }), ie(!0)
            }
          }, [q, A]), (0, s.useEffect)(() => {
            "onScreen" === V && G({
              element_placement: "WOC",
              event: "alert_update",
              o_id: e,
              text: "Almost there!"
            })
          }, [V]), (0, s.useEffect)(() => {
            "onScreen" === ee && G({
              element_placement: "WOC",
              event: "alert_error",
              o_id: e,
              text: "No Qualifying Character Found"
            })
          }, [ee]), (0, s.useEffect)(() => {
            "onScreen" === ae && G({
              element_placement: "event_label",
              event: "alert_error",
              o_id: e,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }, [ae]), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className: "_1ow0ars0",
              "data-font": T,
              "data-use-padding": k,
              ref: E,
              id: b || "",
              children: (0, t.jsxs)(r.motion.div, {
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
                ref: O,
                children: [(0, t.jsx)("div", {
                  className: "_1ow0ars2",
                  style: {
                    "--engagement-image": `url(${le})`
                  }
                }), (0, t.jsx)("div", {
                  className: h()("_1ow0ars4", D ? "loader" : ""),
                  ref: L,
                  children: D ? (0, t.jsx)("div", {
                    className: "_1ow0arsw",
                    children: (0, t.jsx)(d.A, {
                      type: "SPINNING"
                    })
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [re === K.landing && (0, t.jsx)(U, {
                      content: x,
                      loggedIn: A,
                      addClaim: async () => {
                        const a = {
                            giftUId: e,
                            location: n,
                            utmCampaign: w.get("utm_campaign"),
                            utmContent: w.get("utm_content"),
                            utmMedium: w.get("utm_medium"),
                            utmSource: w.get("utm_source")
                          },
                          {
                            status: t
                          } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                            fetchOptions: {
                              method: "POST"
                            },
                            pingBearer: S,
                            query: a
                          }) ?? [];
                        fe(t ? K.success : K.error), G({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: e,
                          text: "claim now",
                          section_layout: "signed in"
                        })
                      },
                      signin: () => {
                        G({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: me,
                          text: "claim now",
                          section_layout: "signed out"
                        }), window.location.href = me
                      },
                      landingSlide: W
                    }), re === K.success && (0, t.jsx)($, {
                      content: x,
                      successSlide: V,
                      characterList: I,
                      linkAccountUrl: y,
                      linkMoreAccounts: () => {
                        G({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: y,
                          text: m.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: N.formatMessage(m.engagement_link_account)
                    }), re === K.unlinked && (0, t.jsx)(J, {
                      content: x,
                      unlinkedSlide: ee,
                      returnUrl: de,
                      giftId: e
                    }), re === K.error && (0, t.jsx)(Y, {
                      errorSlide: ae,
                      content: x
                    })]
                  })
                })]
              })
            })
          })
        }, g)
    }
  }
]);