try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d0ec3235-b1f3-483f-b7e1-6542498c3701", e._sentryDebugIdIdentifier = "sentry-dbid-d0ec3235-b1f3-483f-b7e1-6542498c3701")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [389, 770], {
    94931(e, a, t) {
      var g = t(93082),
        r = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        n = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        _ = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, t) {
        var g, o = {},
          i = null,
          s = null;
        for (g in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (s = a.ref), a) d.call(a, g) && !_.hasOwnProperty(g) && (o[g] = a[g]);
        if (e && e.defaultProps)
          for (g in a = e.defaultProps) void 0 === o[g] && (o[g] = a[g]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: s,
          props: o,
          _owner: n.current
        }
      }
      a.Fragment = o, a.jsx = i, a.jsxs = i
    },
    39793(e, a, t) {
      e.exports = t(94931)
    },
    8770(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var g = t(39793),
        r = t(93082),
        o = t(19177),
        d = t(46573),
        n = t(98735),
        _ = t(7354),
        i = t(42909),
        s = t(323),
        p = t(13331);
      const l = (0, i.defineMessages)({
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
          agegate: "rockstargames-sites-red-dead-redemption-2f9427878ee67735075cd3e245d49eabe",
          bg: "rockstargames-sites-red-dead-redemption-2aa5cfbd26930aee31e4643edcda52b39",
          inputs: "rockstargames-sites-red-dead-redemption-2ca3ab235303ed1b84f9c867fe5393c3a"
        },
        u = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, i.withIntl)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: h = {},
          ...f
        }) => {
          const {
            formatMessage: c
          } = (0, i.useIntl)(), {
            data: y
          } = (0, s.Wx)(), {
            track: b
          } = (0, s.h)(), M = (0, p.getCookieValueByName)("UAGC"), [v, A] = (0, r.useState)("1" === (D = M) ? u.PASSED : "0" === D ? u.FAILED : u.NOT_SUBMITTED);
          var D;
          const [w, I] = (0, r.useState)(), T = (0, r.createRef)(), E = (0, r.createRef)(), x = (0, r.createRef)(), {
            style: k
          } = t;
          return (0, r.useEffect)(() => {
            b({
              event: "age_gate_popup",
              element_placement: h.element_placement ?? ""
            })
          }, []), v === u.PASSED || !1 === y?.isAMinor ? a : v === u.FAILED ? (0, g.jsxs)("div", {
            className: m.agegate,
            style: k,
            children: [t?.header, (0, g.jsx)("h2", {
              children: c(l.agegate_fail)
            })]
          }) : (0, g.jsxs)("div", {
            className: m.agegate,
            style: k,
            ...f,
            children: [t?.header, (0, g.jsx)("div", {
              className: m.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === w && (0, g.jsx)("h5", {
              className: m.error,
              children: c(l.agegate_dob_error)
            }), (0, g.jsx)("form", {
              name: "agegate",
              onSubmit: async a => {
                a.preventDefault();
                const t = new Date(x?.current?.value, T?.current?.value, E?.current?.value),
                  g = (0, o.j)(new Date, {
                    years: 150
                  }),
                  r = (0, d.f)(t) && (0, n.d)(t, g);
                if (I(r), r) {
                  const a = (0, _.V)(new Date, t) >= e;
                  b(a ? {
                    event: "age_gate_passed",
                    element_placement: h.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: h.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const g = a ? "1" : "0";
                  (0, p.setCookieValue)("UAGC", g), A(g)
                }
              },
              "data-testid": "agegate-form",
              children: (0, g.jsxs)("fieldset", {
                children: [(0, g.jsx)("legend", {
                  children: c(l.agegate_dob_prompt)
                }), (0, g.jsxs)("div", {
                  className: m.inputs,
                  children: [(0, g.jsxs)("label", {
                    htmlFor: "monthInput",
                    children: [c(l.agegate_month), (0, g.jsx)("input", {
                      id: "monthInput",
                      ref: T,
                      placeholder: c(l.agegate_month_ph),
                      maxLength: 2,
                      type: "number",
                      required: !0,
                      min: 1,
                      max: 12
                    })]
                  }), (0, g.jsxs)("label", {
                    htmlFor: "dayInput",
                    children: [c(l.agegate_day), (0, g.jsx)("input", {
                      id: "dayInput",
                      ref: E,
                      placeholder: c(l.agegate_day_ph),
                      maxLength: 2,
                      type: "number",
                      required: !0,
                      min: 1,
                      max: 31
                    })]
                  }), (0, g.jsxs)("label", {
                    htmlFor: "yearInput",
                    children: [c(l.agegate_year), (0, g.jsx)("input", {
                      id: "yearInput",
                      ref: x,
                      className: m.year,
                      placeholder: c(l.agegate_year_ph),
                      maxLength: 4,
                      min: 1863,
                      max: (new Date).getFullYear(),
                      type: "number",
                      required: !0
                    })]
                  }), (0, g.jsx)("button", {
                    type: "submit",
                    className: m.submit,
                    children: c(l.agegate_submit)
                  })]
                })]
              })
            }), t?.footer]
          })
        }, h)
    }
  }
]);