try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8b48f0e9-98a9-4d4f-8179-70cad82cffee", e._sentryDebugIdIdentifier = "sentry-dbid-8b48f0e9-98a9-4d4f-8179-70cad82cffee")
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
  [123], {
    21123(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => j
      });
      var r = t(39793),
        n = t(93082),
        g = t(24785),
        i = t(77461),
        s = t(55735),
        o = t(13331),
        d = t(42909),
        _ = t(18509);
      const l = (0, d.defineMessages)({
          agegate_fail: {
            id: "agegate_fail",
            description: "The message to appear when a user does not have access to view content.",
            defaultMessage: "You may not view this content at this time"
          },
          agegate_dob_prompt: {
            id: "agegate_dob_prompt",
            description: "The message to prompt a user to enter their date of birth",
            defaultMessage: "Please Verify Your Age"
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
          },
          agegate_error_invalid_day: {
            id: "agegate_error_invalid_day",
            description: "The error message shown when an invalid value was put in the day field.",
            defaultMessage: "Day must be from 1 to 31."
          },
          agegate_error_invalid_month: {
            id: "agegate_error_invalid_month",
            description: "The error message shown when an invalid value was put in the month field.",
            defaultMessage: "Month must be from 1 to 12."
          },
          agegate_error_year_too_early: {
            id: "agegate_error_year_too_early",
            description: "The error message shown when a year was entered that is earlier than specified.",
            defaultMessage: "Year must be greater than {year}."
          },
          agegate_error_year_in_future: {
            id: "agegate_error_year_in_future",
            description: "The error message shown when a year was entered that is in the future.",
            defaultMessage: "Date cannot be in the future"
          },
          agegate_error_invalid_date: {
            id: "agegate_error_invalid_date",
            description: "The error message shown when an invalid date is entered (Sept, 31st).",
            defaultMessage: "Day must be valid for the month."
          },
          agegate_error_day_whole_number: {
            id: "agegate_error_day_whole_number",
            description: "The error message shown when a non-numerical character is shown.",
            defaultMessage: "Day must be a whole number."
          },
          agegate_error_month_whole_number: {
            id: "agegate_error_month_whole_number",
            description: "The error message shown when a non-numerical character is shown.",
            defaultMessage: "Month must be a whole number."
          },
          agegate_error_year_whole_number: {
            id: "agegate_error_year_whole_number",
            description: "The error message shown when a non-numerical character is shown.",
            defaultMessage: "Year must be a whole number."
          },
          agegate_error_required_fields: {
            id: "agegate_error_required_fields",
            description: "The error message shown when all fields are not filled out.",
            defaultMessage: "Please fill out the required fields."
          }
        }),
        u = JSON.parse('{"de-DE":{"agegate_day":"Tag","agegate_day_ph":"TT","agegate_dob_prompt":"Bitte gib dein Geburtsdatum an, um diese Seite anzuzeigen","agegate_fail":"Du kannst diese Inhalte im Moment nicht anschauen.","agegate_month":"Monat","agegate_month_ph":"MM","agegate_submit":"ABSENDEN","agegate_year":"Jahr","agegate_year_ph":"JJJJ"},"en-US":{"agegate_day":"Day","agegate_day_ph":"DD","agegate_dob_prompt":"Please Verify Your Age","agegate_error_day_whole_number":"Day must be a whole number.","agegate_error_invalid_date":"Day must be valid for the month.","agegate_error_invalid_day":"Day must be from 1 to 31.","agegate_error_invalid_month":"Month must be from 1 to 12.","agegate_error_month_whole_number":"Month must be a whole number.","agegate_error_required_fields":"Please fill out the required fields.","agegate_error_year_in_future":"Date cannot be in the future","agegate_error_year_too_early":"Year must be greater than {year}.","agegate_error_year_whole_number":"Year must be a whole number.","agegate_fail":"You may not view this content at this time","agegate_month":"Month","agegate_month_ph":"MM","agegate_submit":"Submit","agegate_year":"Year","agegate_year_ph":"YYYY"},"es-ES":{"agegate_day":"Día","agegate_day_ph":"DD","agegate_dob_prompt":"Para ver esta página, introduce tu fecha de nacimiento.","agegate_fail":"Puede que no veas este contenido en este momento.","agegate_month":"Mes","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Año","agegate_year_ph":"AAAA"},"es-MX":{"agegate_day":"Día","agegate_day_ph":"DD","agegate_dob_prompt":"Para ver esta página, introduce tu fecha de nacimiento.","agegate_fail":"No puedes ver el contenido en este momento","agegate_month":"Mes","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Año","agegate_year_ph":"AAAA"},"fr-FR":{"agegate_day":"Jour","agegate_day_ph":"JJ","agegate_dob_prompt":"Pour avoir accès à cette page, veuillez indiquer votre date de naissance.","agegate_fail":"Vous ne pouvez pas accéder à ce contenu pour le moment.","agegate_month":"Mois","agegate_month_ph":"MM","agegate_submit":"ENVOYER","agegate_year":"Année","agegate_year_ph":"AAAA"},"it-IT":{"agegate_day":"Giorno","agegate_day_ph":"GG","agegate_dob_prompt":"Per visualizzare questa pagina, inserisci la tua data di nascita","agegate_fail":"Al momento non puoi vedere questo contenuto","agegate_month":"Mese","agegate_month_ph":"MM","agegate_submit":"INVIA","agegate_year":"Anno","agegate_year_ph":"AAAA"},"ja-JP":{"agegate_day":"日","agegate_day_ph":"DD","agegate_dob_prompt":"このページを閲覧するには生年月日を入力してください","agegate_fail":"現時点では、このコンテンツは表示できません。","agegate_month":"月","agegate_month_ph":"MM","agegate_submit":"送信","agegate_year":"年","agegate_year_ph":"YYYY"},"ko-KR":{"agegate_day":"일","agegate_day_ph":"일","agegate_dob_prompt":"이 페이지를 보려면 생일을 입력하십시오","agegate_fail":"지금은 이 콘텐츠를 볼 수 없습니다.","agegate_month":"월","agegate_month_ph":"월","agegate_submit":"제출","agegate_year":"년","agegate_year_ph":"년"},"pl-PL":{"agegate_day":"Dzień","agegate_day_ph":"DD","agegate_dob_prompt":"Wprowadź datę  swoich urodzin, aby wyświetlić tę stronę","agegate_fail":"Nie możesz teraz obejrzeć tej zawartości","agegate_month":"Miesiąc","agegate_month_ph":"MM","agegate_submit":"WYŚLIJ","agegate_year":"Rok","agegate_year_ph":"RRRR"},"pt-BR":{"agegate_day":"Dia","agegate_day_ph":"DD","agegate_dob_prompt":"Para visualizar esta página, insira sua data de nascimento","agegate_fail":"Você não pode visualizar este conteúdo no momento","agegate_month":"Mês","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Ano","agegate_year_ph":"AAAA"},"ru-RU":{"agegate_day":"День","agegate_day_ph":"ДД","agegate_dob_prompt":"Введите дату вашего рождения, чтобы увидеть эту страницу","agegate_fail":"Просмотр контента невозможен в данный момент","agegate_month":"Месяц","agegate_month_ph":"ММ","agegate_submit":"ОТПРАВИТЬ","agegate_year":"Год","agegate_year_ph":"ГГГГ"},"zh-CN":{"agegate_day":"日","agegate_day_ph":"日","agegate_dob_prompt":"如要查看此页面，请输入您的生日","agegate_fail":"您目前无法查看此内容","agegate_month":"月","agegate_month_ph":"月","agegate_submit":"提交","agegate_year":"年","agegate_year_ph":"年"},"zh-TW":{"agegate_day":"日","agegate_day_ph":"日","agegate_dob_prompt":"如要檢視此頁面，請輸入您的生日","agegate_fail":"您目前無法檢視此內容","agegate_month":"月","agegate_month_ph":"月","agegate_submit":"送出","agegate_year":"年","agegate_year_ph":"年"}}');
      var h = t(21297),
        m = t(32552),
        c = t(41801),
        p = t(36421),
        f = t(22808);
      const y = ({
          children: e,
          testId: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? h.DX : "div",
            i = (0, p.v6)({
              "data-testid": a,
              className: "riuvlz0"
            }, n);
          return (0, r.jsx)(g, {
            ...i,
            children: e
          })
        },
        b = ({
          testId: e,
          imgSrc: a,
          ...t
        }) => {
          const n = (0, p.v6)({
            "data-testid": e,
            className: "riuvlz3",
            style: {
              backgroundImage: `url(${a})`
            }
          }, t);
          return (0, r.jsx)("div", {
            ...n
          })
        },
        v = ({
          testId: e,
          children: a,
          ...t
        }) => {
          const n = (0, p.v6)({
            "data-testid": e,
            className: "riuvlz2",
            name: "agegate"
          }, t);
          return (0, r.jsx)("form", {
            ...n,
            children: a
          })
        },
        w = ({
          testId: e,
          children: a,
          ...t
        }) => {
          const n = (0, p.v6)({
            "data-testid": e,
            className: "riuvlz1"
          }, t);
          return (0, r.jsx)("fieldset", {
            ...n,
            children: a
          })
        },
        M = ({
          testId: e,
          children: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? h.DX : m.Heading,
            i = (0, f.Ub)("(min-width: 0px) and (max-width: 768px)"),
            s = (0, p.v6)({
              "data-testid": e,
              className: "riuvlz4",
              level: i ? 6 : 5
            }, n);
          return (0, r.jsx)(g, {
            ...s,
            children: a
          })
        },
        D = ({
          testId: e,
          children: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? h.DX : "div",
            i = (0, p.v6)({
              "data-testid": e,
              className: "riuvlz5"
            }, n);
          return (0, r.jsx)(g, {
            ...i,
            children: a
          })
        },
        T = ({
          testId: e,
          children: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? h.DX : "div",
            i = (0, p.v6)({
              "data-testid": e,
              className: "riuvlz9"
            }, n);
          return (0, r.jsx)(g, {
            ...i,
            children: a
          })
        },
        I = ({
          testId: e,
          inputStatus: a,
          isRequired: t,
          min: n,
          max: g,
          onChange: i = () => {},
          onKeyUp: s = () => {},
          placeholderText: o,
          label: d,
          value: _,
          fieldRef: l,
          ...u
        }) => {
          const h = (0, p.v6)({
            "data-testid": e,
            className: "riuvlz6",
            status: a
          }, u);
          return (0, r.jsxs)(m.TextField.Root, {
            ...h,
            children: [(0, r.jsx)(m.TextField.Label, {
              children: d
            }), (0, r.jsx)(m.TextField.Control, {
              children: (0, r.jsx)(m.TextField.Input, {
                className: "riuvlz7",
                ref: l,
                placeholder: o,
                onChange: i,
                onKeyUp: s,
                type: "number",
                inputMode: "numeric",
                value: _,
                step: 1,
                min: n,
                max: g,
                required: t,
                "data-1p-ignore": !0
              })
            })]
          })
        },
        x = ({
          testId: e,
          children: a,
          handleSubmit: t,
          asChild: n,
          ...g
        }) => {
          const i = n ? h.DX : m.Button,
            s = (0, p.v6)({
              "data-testid": e,
              className: "riuvlz8",
              size: "LG",
              appearance: "primary",
              onPress: t
            }, g);
          return (0, r.jsx)(i, {
            ...s,
            children: a
          })
        },
        A = ({
          testId: e,
          children: a,
          showError: t,
          asChild: n,
          ...g
        }) => {
          const i = n ? h.DX : "div",
            s = (0, p.v6)({
              "data-testid": e,
              className: "riuvlza",
              "aria-hidden": !t
            }, g);
          return (0, r.jsxs)(i, {
            ...s,
            children: [(0, r.jsx)(c.X, {
              className: "riuvlzb",
              label: ""
            }), (0, r.jsx)(m.Body, {
              className: "riuvlzc",
              size: "SM",
              appearance: "bold",
              children: a
            })]
          })
        },
        N = (new Date).getFullYear(),
        S = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        j = (0, d.withIntl)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: u = {},
          ...h
        }) => {
          const {
            formatMessage: m
          } = (0, d.useIntl)(), {
            loggedIn: c,
            data: p
          } = (0, _.Wx)(), {
            track: f
          } = (0, _.h)(), {
            style: j
          } = t, z = "1" === (E = (0, o.getCookieValueByName)("UAGC")) ? S.PASSED : "0" === E ? S.FAILED : S.NOT_SUBMITTED;
          var E;
          const [R, Y] = (0, n.useState)(z), [k, C] = (0, n.useState)(""), [P, q] = (0, n.useState)(""), [U, V] = (0, n.useState)(""), [J, F] = (0, n.useState)(!1), [B, G] = (0, n.useState)("neutral"), [L, X] = (0, n.useState)("neutral"), [O, K] = (0, n.useState)("neutral"), W = (0, n.useRef)(null), $ = (0, n.useRef)(null), H = (0, n.useRef)(null), Q = (0, n.useRef)(null), [Z, ee] = (0, n.useState)(""), ae = "" === P || "" === k || "" === U, te = ((e = "default") => {
            const [a] = new Intl.DateTimeFormat(e).formatToParts(new Date);
            return "day" === a.type ? "row" : "us"
          })(navigator.language), re = "us" === te ? ["m", "d", "y"] : ["d", "m", "y"], ne = (0, n.useRef)(!1);
          (0, n.useEffect)(() => {
            !1 !== c || R !== S.NOT_SUBMITTED || ne.current || (ne.current = !0, f({
              event: "age_gate_popup",
              element_placement: u.element_placement ?? ""
            }))
          }, [f, u.element_placement, c, R]);
          const ge = e => {
              "Enter" === e.key && ie()
            },
            ie = async () => {
              if (!$.current || !H.current || !W.current) return;
              if (!("" !== P && "" !== k && "" !== U || (G("" === P ? "invalid" : "neutral"), X("" === k ? "invalid" : "neutral"), K("" === U ? "invalid" : "neutral"), ee(m(l.agegate_error_required_fields)), 0))) return void F(!0);
              if (!$.current || ($.current.validity.badInput || $.current.validity.stepMismatch || P.includes(".") ? (G("invalid"), ee(m(l.agegate_error_day_whole_number)), 1) : $.current.validity.valid ? (G("success"), 0) : (G("invalid"), ee(m(l.agegate_error_invalid_day)), 1))) return void F(!0);
              if (!H.current || (H.current.validity.badInput || H.current.validity.stepMismatch || k.includes(".") ? (X("invalid"), ee(m(l.agegate_error_month_whole_number)), 1) : H.current.validity.valid ? (X("success"), 0) : (X("invalid"), ee(m(l.agegate_error_invalid_month)), 1))) return void F(!0);
              if (!W.current || (W.current.validity.badInput || W.current.validity.stepMismatch || U.includes(".") ? (K("invalid"), ee(m(l.agegate_error_year_whole_number)), 1) : Number(U) < 1863 ? (K("invalid"), ee(m(l.agegate_error_year_too_early, {
                  year: 1862
                })), 1) : Number(U) > N ? (K("invalid"), ee(m(l.agegate_error_year_in_future)), 1) : (K("success"), 0))) return void F(!0);
              const a = Number(k) - 1,
                t = new Date(Number(U), a, Number(P));
              if (!((e, a) => (0, g.$)(e) && (0, i.D)(Number(U), a, Number(P)) ? (G("success"), X("success"), !0) : (G("invalid"), X("invalid"), ee(m(l.agegate_error_invalid_date)), F(!0), !1))(t, a)) return void F(!0);
              F(!1);
              const r = (0, s.V)(new Date, t) >= e;
              f(r ? {
                event: "age_gate_passed",
                element_placement: u.element_placement ?? ""
              } : {
                event: "age_gate_failed",
                element_placement: u.element_placement ?? "",
                text: "you may not view this content at this time"
              });
              const n = r ? "1" : "0";
              (0, o.setCookieValue)("UAGC", n, !0), Y(n)
            }, se = {
              d: {
                testId: "agegate-day",
                inputStatus: B,
                isRequired: !0,
                min: 1,
                max: 31,
                onChange: e => {
                  const a = e.target.value.slice(0, 2);
                  q(a), 2 === a.length && ("row" === te ? H?.current?.focus() : "us" === te && W?.current?.focus())
                },
                onKeyUp: ge,
                placeholderText: m(l.agegate_day_ph),
                label: m(l.agegate_day),
                value: P,
                fieldRef: $
              },
              m: {
                testId: "agegate-month",
                inputStatus: L,
                isRequired: !0,
                min: 1,
                max: 12,
                onChange: e => {
                  const a = e.target.value.slice(0, 2);
                  C(a), 2 === a.length && ("row" === te ? W?.current?.focus() : "us" === te && $?.current?.focus())
                },
                onKeyUp: ge,
                placeholderText: m(l.agegate_month_ph),
                label: m(l.agegate_month),
                value: k,
                fieldRef: H
              },
              y: {
                testId: "agegate-year",
                inputStatus: O,
                isRequired: !0,
                min: 1863,
                max: N,
                onChange: e => {
                  const a = e.target.value.slice(0, 4);
                  V(a), 4 === a.length && Q?.current?.focus()
                },
                onKeyUp: ge,
                placeholderText: m(l.agegate_year_ph),
                label: m(l.agegate_year),
                value: U,
                fieldRef: W
              }
            };
          return R === S.PASSED || !1 === p?.isAMinor ? a : R === S.FAILED ? (0, r.jsxs)(y, {
            testId: "agegate-form",
            style: j,
            ...h,
            children: [t?.header, (0, r.jsx)(M, {
              children: m(l.agegate_fail)
            })]
          }) : (0, r.jsxs)(y, {
            ...h,
            children: [t?.header, t?.bgImg && (0, r.jsx)(b, {
              imgSrc: t.bgImg
            }), (0, r.jsx)(v, {
              testId: "agegate-form",
              children: (0, r.jsxs)(w, {
                children: [(0, r.jsx)(M, {
                  children: m(l.agegate_dob_prompt)
                }), (0, r.jsx)(D, {
                  children: re.map(e => (0, r.jsx)(I, {
                    ...se[e]
                  }, e))
                }), (0, r.jsxs)(T, {
                  children: [(0, r.jsx)(x, {
                    testId: "agegate-submit",
                    handleSubmit: ie,
                    isDisabled: ae,
                    children: m(l.agegate_submit)
                  }), J && (0, r.jsx)(A, {
                    testId: "agegate-errors",
                    showError: J,
                    children: Z
                  })]
                })]
              })
            }), t?.footer]
          })
        }, u)
    }
  }
]);