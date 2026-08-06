try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "95d959d9-84cd-4d4e-a1c4-99329189b4fa", e._sentryDebugIdIdentifier = "sentry-dbid-95d959d9-84cd-4d4e-a1c4-99329189b4fa")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [532], {
    8770(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => c
      });
      var g = t(9793),
        o = t(3082),
        r = t(9177),
        d = t(6573),
        _ = t(8735),
        n = t(8005),
        i = t(2909),
        s = t(2199),
        l = t(3331);
      const p = (0, i.defineMessages)({
          agegate_fail: {
            id: "agegate_fail",
            description: "The message to appear when a user does not have access to view content.",
            defaultMessage: "You may not view this content at this time"
          },
          agegate_dob_prompt: {
            id: "agegate_dob_prompt",
            description: "The message to prompt a user to enter their date of birth",
            defaultMessage: "Please verify your age:"
          },
          agegate_dob_error: {
            id: "agegate_dob_error",
            description: "The message to appear when a user enters an invalid date of birth",
            defaultMessage: "Please enter a valid age"
          },
          agegate_day: {
            id: "agegate_day",
            description: "The form field for the day input.",
            defaultMessage: "Day"
          },
          agegate_month: {
            id: "agegate_month",
            description: "The form field for the month input.",
            defaultMessage: "Month"
          },
          agegate_year: {
            id: "agegate_year",
            description: "The form field for the year input.",
            defaultMessage: "Year"
          },
          agegate_day_ph: {
            id: "agegate_day_ph",
            description: "The placeholder for the form field for the day input.",
            defaultMessage: "DD"
          },
          agegate_month_ph: {
            id: "agegate_month_ph",
            description: "The placeholder for the form field for the month input.",
            defaultMessage: "MM"
          },
          agegate_year_ph: {
            id: "agegate_year_ph",
            description: "The placeholder for the form field for the year input.",
            defaultMessage: "YYYY"
          },
          agegate_submit: {
            id: "agegate_submit",
            description: "The submit date of birth form field text.",
            defaultMessage: "Submit"
          }
        }),
        h = JSON.parse('{"de-DE":{"agegate_day":"Tag","agegate_day_ph":"TT","agegate_dob_error":"Bitte gib ein gültiges Alter ein.","agegate_dob_prompt":"Bitte gib dein Geburtsdatum an, um diese Seite anzuzeigen","agegate_fail":"Du kannst diese Inhalte im Moment nicht anschauen.","agegate_month":"Monat","agegate_month_ph":"MM","agegate_submit":"ABSENDEN","agegate_year":"Jahr","agegate_year_ph":"JJJJ"},"en-US":{"agegate_day":"Day","agegate_day_ph":"DD","agegate_dob_error":"Please enter a valid age","agegate_dob_prompt":"Please verify your age:","agegate_fail":"You may not view this content at this time","agegate_month":"Month","agegate_month_ph":"MM","agegate_submit":"SUBMIT","agegate_year":"Year","agegate_year_ph":"YYYY"},"es-ES":{"agegate_day":"Día","agegate_day_ph":"DD","agegate_dob_error":"Introduce un mes válido","agegate_dob_prompt":"Para ver esta página, introduce tu fecha de nacimiento.","agegate_fail":"Puede que no veas este contenido en este momento.","agegate_month":"Mes","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Año","agegate_year_ph":"AAAA"},"es-MX":{"agegate_day":"Día","agegate_day_ph":"DD","agegate_dob_error":"Introduce un mes válido","agegate_dob_prompt":"Para ver esta página, introduce tu fecha de nacimiento.","agegate_fail":"No puedes ver el contenido en este momento","agegate_month":"Mes","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Año","agegate_year_ph":"AAAA"},"fr-FR":{"agegate_day":"Jour","agegate_day_ph":"JJ","agegate_dob_error":"Veuillez indiquer un âge valide.","agegate_dob_prompt":"Pour avoir accès à cette page, veuillez indiquer votre date de naissance.","agegate_fail":"Vous ne pouvez pas accéder à ce contenu pour le moment.","agegate_month":"Mois","agegate_month_ph":"MM","agegate_submit":"ENVOYER","agegate_year":"Année","agegate_year_ph":"AAAA"},"it-IT":{"agegate_day":"Giorno","agegate_day_ph":"GG","agegate_dob_error":"Inserisci un\'età valida","agegate_dob_prompt":"Per visualizzare questa pagina, inserisci la tua data di nascita","agegate_fail":"Al momento non puoi vedere questo contenuto","agegate_month":"Mese","agegate_month_ph":"MM","agegate_submit":"INVIA","agegate_year":"Anno","agegate_year_ph":"AAAA"},"ja-JP":{"agegate_day":"日","agegate_day_ph":"DD","agegate_dob_error":"有効な年齢を入力してください","agegate_dob_prompt":"このページを閲覧するには生年月日を入力してください","agegate_fail":"現時点では、このコンテンツは表示できません。","agegate_month":"月","agegate_month_ph":"MM","agegate_submit":"送信","agegate_year":"年","agegate_year_ph":"YYYY"},"ko-KR":{"agegate_day":"일","agegate_day_ph":"일","agegate_dob_error":"유효한 나이를 입력하십시오","agegate_dob_prompt":"이 페이지를 보려면 생일을 입력하십시오","agegate_fail":"지금은 이 콘텐츠를 볼 수 없습니다.","agegate_month":"월","agegate_month_ph":"월","agegate_submit":"제출","agegate_year":"년","agegate_year_ph":"년"},"pl-PL":{"agegate_day":"Dzień","agegate_day_ph":"DD","agegate_dob_error":"Wprowadź poprawny wiek","agegate_dob_prompt":"Wprowadź datę  swoich urodzin, aby wyświetlić tę stronę","agegate_fail":"Nie możesz teraz obejrzeć tej zawartości","agegate_month":"Miesiąc","agegate_month_ph":"MM","agegate_submit":"WYŚLIJ","agegate_year":"Rok","agegate_year_ph":"RRRR"},"pt-BR":{"agegate_day":"Dia","agegate_day_ph":"DD","agegate_dob_error":"Digite uma idade válida","agegate_dob_prompt":"Para visualizar esta página, insira sua data de nascimento","agegate_fail":"Você não pode visualizar este conteúdo no momento","agegate_month":"Mês","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Ano","agegate_year_ph":"AAAA"},"ru-RU":{"agegate_day":"День","agegate_day_ph":"ДД","agegate_dob_error":"Укажите корректный возраст","agegate_dob_prompt":"Введите дату вашего рождения, чтобы увидеть эту страницу","agegate_fail":"Просмотр контента невозможен в данный момент","agegate_month":"Месяц","agegate_month_ph":"ММ","agegate_submit":"ОТПРАВИТЬ","agegate_year":"Год","agegate_year_ph":"ГГГГ"},"zh-CN":{"agegate_day":"日","agegate_day_ph":"日","agegate_dob_error":"请输入有效的年龄","agegate_dob_prompt":"如要查看此页面，请输入您的生日","agegate_fail":"您目前无法查看此内容","agegate_month":"月","agegate_month_ph":"月","agegate_submit":"提交","agegate_year":"年","agegate_year_ph":"年"},"zh-TW":{"agegate_day":"日","agegate_day_ph":"日","agegate_dob_error":"請輸入有效的年齡。","agegate_dob_prompt":"如要檢視此頁面，請輸入您的生日","agegate_fail":"您目前無法檢視此內容","agegate_month":"月","agegate_month_ph":"月","agegate_submit":"送出","agegate_year":"年","agegate_year_ph":"年"}}'),
        m = {
          agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a"
        },
        u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        c = (0, i.withIntl)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: h = {},
          ...c
        }) => {
          const {
            formatMessage: y
          } = (0, i.useIntl)(), {
            data: f
          } = (0, s.useRockstarUser)(), {
            track: b
          } = (0, s.useGtmTrack)(), M = (0, l.getCookieValueByName)("UAGC"), [v, A] = (0, o.useState)("1" === (D = M) ? u.PASSED : "0" === D ? u.FAILED : u.NOT_SUBMITTED);
          var D;
          const [w, I] = (0, o.useState)(), T = (0, o.createRef)(), E = (0, o.createRef)(), k = (0, o.createRef)(), {
            style: x
          } = t;
          return (0, o.useEffect)(() => {
            b({
              event: "age_gate_popup",
              element_placement: h.element_placement ?? ""
            })
          }, []), v === u.PASSED || !1 === f?.isAMinor ? a : v === u.FAILED ? (0, g.jsxs)("div", {
            className: m.agegate,
            style: x,
            children: [t?.header, (0, g.jsx)("h2", {
              children: y(p.agegate_fail)
            })]
          }) : (0, g.jsxs)("div", {
            className: m.agegate,
            style: x,
            ...c,
            children: [t?.header, (0, g.jsx)("div", {
              className: m.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === w && (0, g.jsx)("h5", {
              className: m.error,
              children: y(p.agegate_dob_error)
            }), (0, g.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(k?.current?.value, T?.current?.value, E?.current?.value),
                  g = (0, r.j)(new Date, {
                    years: 150
                  }),
                  o = (0, d.f)(t) && (0, _.d)(t, g);
                if (I(o), o) {
                  const a = (0, n.V)(new Date, t) >= e;
                  b(a ? {
                    event: "age_gate_passed",
                    element_placement: h.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: h.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const g = a ? "1" : "0";
                  (0, l.setCookieValue)("UAGC", g), A(g)
                }
              },
              "data-testid": "agegate-form",
              children: (0, g.jsxs)("fieldset", {
                children: [(0, g.jsx)("legend", {
                  children: y(p.agegate_dob_prompt)
                }), (0, g.jsxs)("div", {
                  className: m.inputs,
                  children: [(0, g.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [y(p.agegate_month), (0, g.jsx)("input", {
                      id: "monthInput",
                      ref: T,
                      placeholder: y(p.agegate_month_ph),
                      maxLength: 2,
                      type: "number",
                      required: !0,
                      min: 1,
                      max: 12
                    })]
                  }), (0, g.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [y(p.agegate_day), (0, g.jsx)("input", {
                      id: "dayInput",
                      ref: E,
                      placeholder: y(p.agegate_day_ph),
                      maxLength: 2,
                      type: "number",
                      required: !0,
                      min: 1,
                      max: 31
                    })]
                  }), (0, g.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [y(p.agegate_year), (0, g.jsx)("input", {
                      id: "yearInput",
                      ref: k,
                      className: m.year,
                      placeholder: y(p.agegate_year_ph),
                      maxLength: 4,
                      min: 1863,
                      max: (new Date).getFullYear(),
                      type: "number",
                      required: !0
                    })]
                  }), (0, g.jsx)("button", {
                    type: "submit",
                    className: m.submit,
                    children: y(p.agegate_submit)
                  })]
                })]
              })
            }), t?.footer]
          })
        }, h)
    }
  }
]);