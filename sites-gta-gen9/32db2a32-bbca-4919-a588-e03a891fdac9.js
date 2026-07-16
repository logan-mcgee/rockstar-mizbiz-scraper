try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "32db2a32-bbca-4919-a588-e03a891fdac9", e._sentryDebugIdIdentifier = "sentry-dbid-32db2a32-bbca-4919-a588-e03a891fdac9")
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
  [1211, 6759], {
    83592(e, a, t) {
      t.r(a), t.d(a, {
        default: () => k
      });
      var s = t(39793),
        n = t(13331),
        c = t(93082),
        r = t(99225),
        i = t(83841),
        o = t(81270),
        g = t(42909),
        d = t(82199);
      const b = (0, g.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            description: "CTA that displays on the GTAO feedback page if the viewer is not logged in.",
            defaultMessage: "<SignInLink>Sign in</SignInLink> to your Rockstar Games Account to submit feedback."
          },
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            description: "Aria label to indicate when a link opens in new window/tab",
            defaultMessage: "(Opens in a new window)"
          },
          report_issue_button_label: {
            id: "report_issue_button_label",
            description: "Button label to report a bug or feedback",
            defaultMessage: "Report Bug"
          },
          suggestions_button_label: {
            id: "suggestions_button_label",
            description: "Button label to leave feedback or suggestions",
            defaultMessage: "Give Feedback"
          }
        }),
        f = {
          desc: "rockstargames-sites-gta-gen9d72e70db4d8f2e2475325b0ec8c822cd",
          error: "rockstargames-sites-gta-gen9e8b9707f598c854597530de876d5c0ef",
          feedback: "rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972",
          feedbackIcon: "rockstargames-sites-gta-gen9babe0d3601197bade8552903a54fec4c",
          gtao: "rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39",
          loadGtaoIcons: "rockstargames-sites-gta-gen9a5de3049a0fe5318db15c97a30ffc316",
          loadRdoIcons: "rockstargames-sites-gta-gen9cb00543ed5b51fd7a3504fe8e18f6e81",
          pillBtn: "rockstargames-sites-gta-gen9d0333c1a9057ee578f0feb1192158e4b",
          primaryStepLink: "rockstargames-sites-gta-gen9b51ec3f08205d50024a94c14a5689c25",
          primaryStepSection: "rockstargames-sites-gta-gen9c90142cfff48f1cdea15df28fb5766c3",
          primaryStepSectionTextContent: "rockstargames-sites-gta-gen9a4fb7ef3b4e0e6fcf245e613c599b72f",
          primaryStepSection_root: "rockstargames-sites-gta-gen9e466816cc935d6e56950aff79167ef67",
          primaryStepSectionbug: "rockstargames-sites-gta-gen9cc3e452473eb25cb6b2e30963ef0bceb",
          "primaryStepSectioncamp-function": "rockstargames-sites-gta-gen9f2bb5fdfbe57c9367619b9dc265a61ab",
          "primaryStepSectioncamp-item": "rockstargames-sites-gta-gen9c0a889a16672fedecd7ebb2dd54dd53e",
          "primaryStepSectioncamp-main": "rockstargames-sites-gta-gen9de44c2686d366bfb9d895150f16ccecc",
          "primaryStepSectioncamp-other": "rockstargames-sites-gta-gen9b18a5971fc65286dd7ab7bf9d24f0e34",
          "primaryStepSectioncharacter-ability": "rockstargames-sites-gta-gen9f6ad3d36814c19a901e6e3e7acebd847",
          "primaryStepSectioncharacter-clothing": "rockstargames-sites-gta-gen9fc9670cbccca6b99a2d006d201c1182f",
          "primaryStepSectioncharacter-clothing-customization": "rockstargames-sites-gta-gen9e861b870be04d6e34b072e15aa20d1e8",
          "primaryStepSectioncharacter-creator": "rockstargames-sites-gta-gen9ac7f3bd80c1c284edf60dfacc06ce838",
          "primaryStepSectioncharacter-emote": "rockstargames-sites-gta-gen9a8f32205aa49e035470c4a1bc90d69e6",
          "primaryStepSectioncharacter-main": "rockstargames-sites-gta-gen9b0ec73548105fa369c48593db4d384a9",
          "primaryStepSectioncharacter-other": "rockstargames-sites-gta-gen9d6e0b456ab1b92ce24e2c4c4b4115329",
          primaryStepSectioncheater: "rockstargames-sites-gta-gen9a62034c443c6251b09418028d896c4b0",
          "primaryStepSectioncommunity-events": "rockstargames-sites-gta-gen9f0c11a1e978880a8088dc92574b6059b",
          primaryStepSectiongameplay: "rockstargames-sites-gta-gen9a812b7ab1eac6ece6ab5be6620795557",
          "primaryStepSectiongameplay-main": "rockstargames-sites-gta-gen9dde40498544cf336865a12dc2515fba2",
          "primaryStepSectiongeneric-technical": "rockstargames-sites-gta-gen9d524f29645a0bc0d83d6f0cfd77fe6b7",
          "primaryStepSectiongs-store": "rockstargames-sites-gta-gen9ffd938c81ca97f75fb009710761cc862",
          "primaryStepSectiongta-rank-progression": "rockstargames-sites-gta-gen9f61ea0f4d9ce0206ba2292ce237e9f9f",
          primaryStepSectiongtaplus: "rockstargames-sites-gta-gen9c18b6de2884fec21f9afb6dd0ce9c21d",
          "primaryStepSectionhorse-breed": "rockstargames-sites-gta-gen9d5a0f4bcb6945160e3dc81afeb62367a",
          "primaryStepSectionhorse-main": "rockstargames-sites-gta-gen9dcf3c86f3c9d3c7b6872059980c6858d",
          "primaryStepSectionhorse-new": "rockstargames-sites-gta-gen9bba3a6b1d21cd128f180bf8d9212f5e5",
          "primaryStepSectionhorse-other": "rockstargames-sites-gta-gen9faba345ac13e64e1da8a71c9ac8148e7",
          "primaryStepSectionin-game-events-bonuses-discounts": "rockstargames-sites-gta-gen9b0205bdd3656384d694cddbea77eb9a2",
          "primaryStepSectionjob-creator": "rockstargames-sites-gta-gen9ed0b92879c25e82dde2e89f58396ae6a",
          "primaryStepSectionmenus-ui": "rockstargames-sites-gta-gen9e0b18818b58d016da66c45b93a4b801c",
          "primaryStepSectionother-main": "rockstargames-sites-gta-gen9dc5b6dca8d382cc5197c08f4abd03a27",
          primaryStepSectionproperties: "rockstargames-sites-gta-gen9e9f7af83bfac8404e275557072a8edf3",
          "primaryStepSectionrockstar-editor-snapmatic": "rockstargames-sites-gta-gen9cdb5cffa6ccdd9de7f60cb7b0002dfd5",
          primaryStepSectionroles: "rockstargames-sites-gta-gen9aabeefed04cda2dc67fa00f1164a254a",
          primaryStepSectionsuggestions: "rockstargames-sites-gta-gen9c3f70fe3908e62528632233fe5116e5b",
          primaryStepSectionvehicles: "rockstargames-sites-gta-gen9a765a9d60d04e9840a04b5e2b3043272",
          "primaryStepSectionweapon-customization": "rockstargames-sites-gta-gen9bf4271add14226efcf5a5d1448f4ca3b",
          "primaryStepSectionweapon-main": "rockstargames-sites-gta-gen9a551af2a3adeb91d2f6a9e62e7554519",
          "primaryStepSectionweapon-new": "rockstargames-sites-gta-gen9cc498e2eda5dea168b9ef56354cb4d37",
          "primaryStepSectionweapon-other": "rockstargames-sites-gta-gen9d70e00601170c24890e42994d544b6da",
          primaryStepSectionweapons: "rockstargames-sites-gta-gen9a6a26ae9d71f65fdd132a1da2b4e40a2",
          rdo: "rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4",
          selected: "rockstargames-sites-gta-gen9b28b234b8d900b18ac011634844f8f8d",
          signInLink: "rockstargames-sites-gta-gen9bd5cdabcb7beb8e11de57155ac137420",
          stepIcon_root: "rockstargames-sites-gta-gen9e99576cbb21b9ebb786c52d979970d63",
          stepIconbug: "rockstargames-sites-gta-gen9dde746ae06d964de8cfe361c04230376",
          "stepIconcamp-function": "rockstargames-sites-gta-gen9f5648f9ef8fd0b5dab9dd162e955f30c",
          "stepIconcamp-item": "rockstargames-sites-gta-gen9c2b48f9cec52080c94c06030d2e6384a",
          "stepIconcamp-main": "rockstargames-sites-gta-gen9bf3d20becfafe1b65e04909b0e7f4e18",
          "stepIconcamp-other": "rockstargames-sites-gta-gen9c73d9b3e62ba1d8978cc11b3f6f4b63f",
          "stepIconcharacter-ability": "rockstargames-sites-gta-gen9ea6cdf8bd9c3c40638213ad13ab03976",
          "stepIconcharacter-clothing": "rockstargames-sites-gta-gen9ffa2f37d23d90bee1f53a3b4542d3f1e",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-gta-gen9fb9d9b31972f3cf06b24dcd241d94cca",
          "stepIconcharacter-creator": "rockstargames-sites-gta-gen9f678e94aec49f395049b3587908f836c",
          "stepIconcharacter-emote": "rockstargames-sites-gta-gen9cf18c382fd6df1c51cb589332427cfb3",
          "stepIconcharacter-main": "rockstargames-sites-gta-gen9f0260f18060c6e96640b27e6cf851850",
          "stepIconcharacter-other": "rockstargames-sites-gta-gen9a5dd996a50e86e8b5ba056801bb2f1ea",
          stepIconcheater: "rockstargames-sites-gta-gen9e9aec1e44d6e66bef96ed0f052b39200",
          "stepIconcommunity-events": "rockstargames-sites-gta-gen9a41a910c09fe47362ff949ad35f07dcc",
          stepIcongameplay: "rockstargames-sites-gta-gen9cb8b7ecdcf5f5c25cb01a32157e44929",
          "stepIcongameplay-main": "rockstargames-sites-gta-gen9e21767034c45936ce182d6d32e64eb4a",
          "stepIcongeneric-technical": "rockstargames-sites-gta-gen9c02aca39e34f0b24cf68d938daf8f56a",
          "stepIcongs-store": "rockstargames-sites-gta-gen9bc94b9ece865e2e6e93325f782428de9",
          "stepIcongta-rank-progression": "rockstargames-sites-gta-gen9bcffec2f62cb18453a68a9d3f5338b60",
          stepIcongtaplus: "rockstargames-sites-gta-gen9f0792205d3a2bc0175c03643ff2fa790",
          "stepIconhorse-breed": "rockstargames-sites-gta-gen9a7df86a47c50e2649f493d0425a184cf",
          "stepIconhorse-main": "rockstargames-sites-gta-gen9a1401860c69980c4db2580c372bb9f23",
          "stepIconhorse-new": "rockstargames-sites-gta-gen9a8fbb915c03e699cbd844fb9ce20d38d",
          "stepIconhorse-other": "rockstargames-sites-gta-gen9d996aa55e6945a058d09400bd13715f8",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-gta-gen9eeb5daa122c15929afd6d10975e8bcb3",
          "stepIconjob-creator": "rockstargames-sites-gta-gen9ae672dd1fe780d3b6f18b52e3f3e2ca1",
          "stepIconmenus-ui": "rockstargames-sites-gta-gen9c35aee37fbe06edb4c59a52073408967",
          "stepIconother-main": "rockstargames-sites-gta-gen9edafdf48e7c8d64d66bb90e05df1e215",
          stepIconproperties: "rockstargames-sites-gta-gen9ee38bdcb21c08692870e11ba400c373f",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-gta-gen9a754717f465acea44ba04bc6853ccc41",
          stepIconroles: "rockstargames-sites-gta-gen9ea5b759ebe95532d36d128e2a7c66bdb",
          stepIconsuggestions: "rockstargames-sites-gta-gen9c6b5ad1f7ca729fc671c75dcc3186f3e",
          stepIconvehicles: "rockstargames-sites-gta-gen9ca726647ee464cffbc00336018b88ad6",
          "stepIconweapon-customization": "rockstargames-sites-gta-gen9d9e3f8a5a8147a5c0b600e1bd4fcdfa8",
          "stepIconweapon-main": "rockstargames-sites-gta-gen9c9b39c6f2fd4199fa462e02eedb67e23",
          "stepIconweapon-new": "rockstargames-sites-gta-gen9ab0678cf2ccc90293aeb8dffc3d4ce80",
          "stepIconweapon-other": "rockstargames-sites-gta-gen9e05a05344ced03c0be6a699395aec8e9",
          stepIconweapons: "rockstargames-sites-gta-gen9b07410bcb9f7d843a491602c76df2ef3",
          stepMessage: "rockstargames-sites-gta-gen9ccb8ae7398f53e45ded9dfe28c3993e6",
          steps: "rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551",
          stepsNext: "rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d",
          stepsPrevious: "rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918",
          submitButton: "rockstargames-sites-gta-gen9bea9546fd8d466de07af468b8c217aa7",
          visuallyHidden: "rockstargames-sites-gta-gen9d4ac21d330eca73cb9bf6cb5fd11aa97"
        },
        p = ({
          mutation: e,
          tree: a,
          type: t,
          t: n
        }) => {
          const {
            formatMessage: d
          } = (0, g.useIntl)(), p = {
            bug: d(b.report_issue_button_label),
            suggestions: d(b.suggestions_button_label)
          }, [m] = (0, r.useSearchParams)(), _ = m.get("step"), k = (0, c.useRef)(null);
          (0, c.useEffect)(() => {
            k.current && k.current.focus()
          }, [_]);
          const u = a.path.map(e => {
              if (1 === a.path.length && "_root" === e.feedback_type.name) return null;
              const t = _ === e.id_hash;
              return (0, s.jsx)(r.Link, {
                ref: t ? k : null,
                to: `?step=${e.id_hash}`,
                className: f[`stepIcon${e.feedback_type.name}`],
                children: e.feedback_type.title
              }, e.id_hash)
            }),
            S = a.next.map(e => "_root" === e.feedback_type.name ? null : !e?.message || "bug" !== e.feedback_type.name && "suggestions" !== e.feedback_type.name ? (0, s.jsxs)(r.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: f[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e?.feedback_type?.href ? (0, s.jsx)("span", {
                className: f.visuallyHidden,
                children: d(b.aria_label_open_new_window)
              }) : ""]
            }, e.id_hash) : (0, s.jsxs)("div", {
              className: f.primaryStepSection,
              children: [(0, s.jsxs)("div", {
                className: f.primaryStepSectionTextContent,
                children: [(0, s.jsx)("div", {
                  className: (0, o.default)(f.feedbackIcon, f[`primaryStepSection${e.feedback_type.name}`])
                }), (0, s.jsx)("h4", {
                  children: e?.feedback_type.title
                }), (0, s.jsx)("div", {
                  className: f.stepMessage,
                  dangerouslySetInnerHTML: {
                    __html: e.message
                  }
                })]
              }), (0, s.jsx)(i.Button, {
                size: "MD",
                appearance: "tertiary",
                iconRight: e?.feedback_type?.href ? "ExternalLink" : void 0,
                "aria-label": e?.feedback_type?.href && `${p[e.feedback_type.name]} ${d(b.aria_label_open_new_window)}`,
                asChild: !0,
                children: (0, s.jsx)(r.NavLink, {
                  className: f.primaryStepLink,
                  target: e?.feedback_type?.href ? "_blank" : "_self",
                  to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
                  children: p[e.feedback_type.name]
                })
              })]
            }, e.id_hash));
          return (0, s.jsxs)("div", {
            className: [f.steps, f[t]].join(" "),
            children: [(0, s.jsx)("div", {
              className: f.stepsPrevious,
              children: u
            }), (0, s.jsx)("div", {
              className: f.stepsNext,
              children: S
            }), S.length ? "" : (0, s.jsx)(l, {
              feedbackStep: a.path[a.path.length - 1].id,
              mutation: e,
              t: n
            })]
          })
        },
        l = ({
          feedbackStep: e,
          mutation: a,
          t
        }) => {
          const {
            formatMessage: i
          } = (0, g.useIntl)(), {
            loggedIn: o
          } = (0, d.useRockstarUser)(), p = (0, c.useRef)(null), [l, {
            data: m,
            error: _
          }] = (0, n.useMutation)(a), k = (0, r.useLocation)(), u = (0, c.useMemo)(() => k.pathname + k.search, [k.pathname, k.search]), {
            signInUrl: S
          } = (0, n.useScAuthLinks)(u);
          return o ? m?.submittal?.id ? (0, s.jsx)("div", {
            className: f.success,
            dangerouslySetInnerHTML: {
              __html: t("feedback.enter_success")
            }
          }) : (0, s.jsxs)("form", {
            onSubmit: a => (a => {
              a.preventDefault(), (() => {
                const a = {
                  content: p.current?.value,
                  feedback_step: e
                };
                l({
                  variables: a
                })
              })()
            })(a),
            "data-testid": "feedback-form",
            children: [(0, s.jsx)("textarea", {
              ref: p,
              maxLength: 500,
              rows: 6,
              placeholder: t("feedback.placeholder")
            }), _ ? (0, s.jsx)("div", {
              className: f.error,
              children: _.message
            }) : "", (0, s.jsx)("button", {
              className: f.submitButton,
              type: "submit",
              children: t("SUBMIT")
            })]
          }) : (0, s.jsx)(s.Fragment, {
            children: i(b.gtao_feedback_login_cta_text, {
              SignInLink: function(e) {
                return (0, s.jsx)("a", {
                  className: f.signInLink,
                  href: S,
                  children: e
                })
              }
            })
          })
        },
        m = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","gtao_feedback_login_cta_text":"Bei deinem Rockstar-Games-Konto <SignInLink>anmelden</SignInLink>, um dein Feedback einzureichen.","report_issue_button_label":"Fehler melden","suggestions_button_label":"Feedback geben"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","gtao_feedback_login_cta_text":"<SignInLink>Sign in</SignInLink> to your Rockstar Games Account to submit feedback.","report_issue_button_label":"Report Bug","suggestions_button_label":"Give Feedback"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","gtao_feedback_login_cta_text":"<SignInLink>Inicia sesión</SignInLink> en tu cuenta de Rockstar Games para enviar tus comentarios.","report_issue_button_label":"Informar sobre un error","suggestions_button_label":"Danos tu opinión"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","gtao_feedback_login_cta_text":"<SignInLink>Inicia sesión</SignInLink> en tu cuenta de Rockstar Games para enviar comentarios.","report_issue_button_label":"Informar sobre un problema","suggestions_button_label":"Enviar comentarios"},"fr-FR":{"aria_label_open_new_window":"(S\'ouvre dans une nouvelle fenêtre)","gtao_feedback_login_cta_text":"<SignInLink>Connectez-vous</SignInLink> à votre compte Rockstar Games pour envoyer votre avis.","report_issue_button_label":"Signaler un bug","suggestions_button_label":"Donner votre avis"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","gtao_feedback_login_cta_text":"<SignInLink>Accedi</SignInLink> al tuo account di Rockstar Games per inviare feedback.","report_issue_button_label":"Segnala un problema","suggestions_button_label":"Fornisci feedback"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","gtao_feedback_login_cta_text":"フィードバックを送信するにはロックスター・ゲームスアカウントに<SignInLink>サインイン</SignInLink>してください。","report_issue_button_label":"バグを報告","suggestions_button_label":"フィードバックを送る"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","gtao_feedback_login_cta_text":"피드백을 제출하려면 Rockstar Games 계정에 <SignInLink>로그인</SignInLink>하십시오.","report_issue_button_label":"버그 신고하기","suggestions_button_label":"피드백 보내기"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","gtao_feedback_login_cta_text":"<SignInLink>Zaloguj się</SignInLink> na swoje konto Rockstar Games, aby przesłać opinię.","report_issue_button_label":"Zgłoś błąd","suggestions_button_label":"Dodaj opinię"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","gtao_feedback_login_cta_text":"<SignInLink>Inicie sessão</SignInLink> na sua conta da Rockstar Games para enviar feedback.","report_issue_button_label":"Reportar bug","suggestions_button_label":"Enviar feedback"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","gtao_feedback_login_cta_text":"<SignInLink>Войдите</SignInLink> в свою учетную запись Rockstar Games, чтобы оставить отзыв.","report_issue_button_label":"Сообщить об ошибке","suggestions_button_label":"Обратная связь"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","gtao_feedback_login_cta_text":"<SignInLink>登录</SignInLink>您的Rockstar Games账户以提交反馈。","report_issue_button_label":"报告错误","suggestions_button_label":"提供反馈"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","gtao_feedback_login_cta_text":"<SignInLink>登入</SignInLink>您的 Rockstar Games 帳戶以提交意見反應。","report_issue_button_label":"回報錯誤","suggestions_button_label":"給予意見反應"}}'),
        _ = ({
          mutation: e,
          query: a,
          type: t,
          t: c
        }) => {
          const r = {
              step: (0, n.useQueryParams)().get("step")
            },
            i = !Object.entries(r).length,
            {
              data: o
            } = (0, n.useQuery)(a, {
              variables: r,
              skip: i
            });
          return (0, s.jsxs)("div", {
            className: f.feedback,
            children: [(0, s.jsx)("h1", {
              children: c("online-feedback-h1")
            }), (0, s.jsx)("div", {
              className: f.desc,
              dangerouslySetInnerHTML: {
                __html: c("online-feedback-desc")
              }
            }), o && (0, s.jsx)(p, {
              mutation: e,
              tree: o.tree,
              type: t,
              t: c
            })]
          })
        },
        k = (u = ({
          mutation: e,
          query: a,
          type: t
        }) => (0, n.withTranslations)(_, "rdo" === t ? "rdr2" : t)({
          mutation: e,
          query: a,
          type: t
        }), (0, g.withIntl)(u, m));
      var u
    }
  }
]);