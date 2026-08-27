try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e9504039-026a-49b5-9807-18128ae81030", e._sentryDebugIdIdentifier = "sentry-dbid-e9504039-026a-49b5-9807-18128ae81030")
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
  [1292], {
    1292(e, a, t) {
      t.r(a), t.d(a, {
        AgeGate: () => P
      });
      var r = t(9793),
        n = t(3082);
      var g = t(380),
        o = t(480);

      function s(e, a) {
        return (0, o.w)(a || e, e)
      }

      function i(e, a) {
        const t = +s(e) - +s(a);
        return t < 0 ? -1 : t > 0 ? 1 : t
      }

      function d(e, a, t) {
        const [r, n] = (0, g.x)(t?.in, e, a), o = i(r, n), s = Math.abs(function(e, a, t) {
          const [r, n] = (0, g.x)(t?.in, e, a);
          return r.getFullYear() - n.getFullYear()
        }(r, n));
        r.setFullYear(1584), n.setFullYear(1584);
        const d = o * (s - +(i(r, n) === -o));
        return 0 === d ? 0 : d
      }
      var _ = t(3331),
        l = t(2909),
        u = t(2199);
      const h = (0, l.defineMessages)({
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
        m = JSON.parse('{"de-DE":{"agegate_day":"Tag","agegate_day_ph":"TT","agegate_dob_prompt":"Bitte gib dein Geburtsdatum an, um diese Seite anzuzeigen","agegate_fail":"Du kannst diese Inhalte im Moment nicht anschauen.","agegate_month":"Monat","agegate_month_ph":"MM","agegate_submit":"ABSENDEN","agegate_year":"Jahr","agegate_year_ph":"JJJJ"},"en-US":{"agegate_day":"Day","agegate_day_ph":"DD","agegate_dob_prompt":"Please Verify Your Age","agegate_error_day_whole_number":"Day must be a whole number.","agegate_error_invalid_date":"Day must be valid for the month.","agegate_error_invalid_day":"Day must be from 1 to 31.","agegate_error_invalid_month":"Month must be from 1 to 12.","agegate_error_month_whole_number":"Month must be a whole number.","agegate_error_required_fields":"Please fill out the required fields.","agegate_error_year_in_future":"Date cannot be in the future","agegate_error_year_too_early":"Year must be greater than {year}.","agegate_error_year_whole_number":"Year must be a whole number.","agegate_fail":"You may not view this content at this time","agegate_month":"Month","agegate_month_ph":"MM","agegate_submit":"Submit","agegate_year":"Year","agegate_year_ph":"YYYY"},"es-ES":{"agegate_day":"Día","agegate_day_ph":"DD","agegate_dob_prompt":"Para ver esta página, introduce tu fecha de nacimiento.","agegate_fail":"Puede que no veas este contenido en este momento.","agegate_month":"Mes","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Año","agegate_year_ph":"AAAA"},"es-MX":{"agegate_day":"Día","agegate_day_ph":"DD","agegate_dob_prompt":"Para ver esta página, introduce tu fecha de nacimiento.","agegate_fail":"No puedes ver el contenido en este momento","agegate_month":"Mes","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Año","agegate_year_ph":"AAAA"},"fr-FR":{"agegate_day":"Jour","agegate_day_ph":"JJ","agegate_dob_prompt":"Pour avoir accès à cette page, veuillez indiquer votre date de naissance.","agegate_fail":"Vous ne pouvez pas accéder à ce contenu pour le moment.","agegate_month":"Mois","agegate_month_ph":"MM","agegate_submit":"ENVOYER","agegate_year":"Année","agegate_year_ph":"AAAA"},"it-IT":{"agegate_day":"Giorno","agegate_day_ph":"GG","agegate_dob_prompt":"Per visualizzare questa pagina, inserisci la tua data di nascita","agegate_fail":"Al momento non puoi vedere questo contenuto","agegate_month":"Mese","agegate_month_ph":"MM","agegate_submit":"INVIA","agegate_year":"Anno","agegate_year_ph":"AAAA"},"ja-JP":{"agegate_day":"日","agegate_day_ph":"DD","agegate_dob_prompt":"このページを閲覧するには生年月日を入力してください","agegate_fail":"現時点では、このコンテンツは表示できません。","agegate_month":"月","agegate_month_ph":"MM","agegate_submit":"送信","agegate_year":"年","agegate_year_ph":"YYYY"},"ko-KR":{"agegate_day":"일","agegate_day_ph":"일","agegate_dob_prompt":"이 페이지를 보려면 생일을 입력하십시오","agegate_fail":"지금은 이 콘텐츠를 볼 수 없습니다.","agegate_month":"월","agegate_month_ph":"월","agegate_submit":"제출","agegate_year":"년","agegate_year_ph":"년"},"pl-PL":{"agegate_day":"Dzień","agegate_day_ph":"DD","agegate_dob_prompt":"Wprowadź datę  swoich urodzin, aby wyświetlić tę stronę","agegate_fail":"Nie możesz teraz obejrzeć tej zawartości","agegate_month":"Miesiąc","agegate_month_ph":"MM","agegate_submit":"WYŚLIJ","agegate_year":"Rok","agegate_year_ph":"RRRR"},"pt-BR":{"agegate_day":"Dia","agegate_day_ph":"DD","agegate_dob_prompt":"Para visualizar esta página, insira sua data de nascimento","agegate_fail":"Você não pode visualizar este conteúdo no momento","agegate_month":"Mês","agegate_month_ph":"MM","agegate_submit":"ENVIAR","agegate_year":"Ano","agegate_year_ph":"AAAA"},"ru-RU":{"agegate_day":"День","agegate_day_ph":"ДД","agegate_dob_prompt":"Введите дату вашего рождения, чтобы увидеть эту страницу","agegate_fail":"Просмотр контента невозможен в данный момент","agegate_month":"Месяц","agegate_month_ph":"ММ","agegate_submit":"ОТПРАВИТЬ","agegate_year":"Год","agegate_year_ph":"ГГГГ"},"zh-CN":{"agegate_day":"日","agegate_day_ph":"日","agegate_dob_prompt":"如要查看此页面，请输入您的生日","agegate_fail":"您目前无法查看此内容","agegate_month":"月","agegate_month_ph":"月","agegate_submit":"提交","agegate_year":"年","agegate_year_ph":"年"},"zh-TW":{"agegate_day":"日","agegate_day_ph":"日","agegate_dob_prompt":"如要檢視此頁面，請輸入您的生日","agegate_fail":"您目前無法檢視此內容","agegate_month":"月","agegate_month_ph":"月","agegate_submit":"送出","agegate_year":"年","agegate_year_ph":"年"}}');
      var c = t(1297),
        p = t(2552),
        f = t(7278),
        y = t(8912),
        b = t(9857);
      const w = ({
          children: e,
          testId: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? c.DX : "div",
            o = (0, y.mergeProps)({
              "data-testid": a,
              className: "wzf4b00"
            }, n);
          return (0, r.jsx)(g, {
            ...o,
            children: e
          })
        },
        v = ({
          testId: e,
          imgSrc: a,
          ...t
        }) => {
          const n = (0, y.mergeProps)({
            "data-testid": e,
            className: "wzf4b03",
            style: {
              backgroundImage: `url(${a})`
            }
          }, t);
          return (0, r.jsx)("div", {
            ...n
          })
        },
        M = ({
          testId: e,
          children: a,
          ...t
        }) => {
          const n = (0, y.mergeProps)({
            "data-testid": e,
            className: "wzf4b02",
            name: "agegate"
          }, t);
          return (0, r.jsx)("form", {
            ...n,
            children: a
          })
        },
        D = ({
          testId: e,
          children: a,
          ...t
        }) => {
          const n = (0, y.mergeProps)({
            "data-testid": e,
            className: "wzf4b01"
          }, t);
          return (0, r.jsx)("fieldset", {
            ...n,
            children: a
          })
        },
        T = ({
          testId: e,
          children: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? c.DX : p.Heading,
            o = (0, b.Ub)("(min-width: 0px) and (max-width: 768px)"),
            s = (0, y.mergeProps)({
              "data-testid": e,
              className: "wzf4b04",
              level: o ? 6 : 5
            }, n);
          return (0, r.jsx)(g, {
            ...s,
            children: a
          })
        },
        x = ({
          testId: e,
          children: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? c.DX : "div",
            o = (0, y.mergeProps)({
              "data-testid": e,
              className: "wzf4b05"
            }, n);
          return (0, r.jsx)(g, {
            ...o,
            children: a
          })
        },
        I = ({
          testId: e,
          children: a,
          asChild: t,
          ...n
        }) => {
          const g = t ? c.DX : "div",
            o = (0, y.mergeProps)({
              "data-testid": e,
              className: "wzf4b09"
            }, n);
          return (0, r.jsx)(g, {
            ...o,
            children: a
          })
        },
        A = ({
          testId: e,
          inputStatus: a,
          isRequired: t,
          min: n,
          max: g,
          onChange: o = () => {},
          onKeyUp: s = () => {},
          placeholderText: i,
          label: d,
          value: _,
          fieldRef: l,
          ...u
        }) => {
          const h = (0, y.mergeProps)({
            "data-testid": e,
            className: "wzf4b06",
            status: a
          }, u);
          return (0, r.jsxs)(p.TextField.Root, {
            ...h,
            children: [(0, r.jsx)(p.TextField.Label, {
              children: d
            }), (0, r.jsx)(p.TextField.Control, {
              children: (0, r.jsx)(p.TextField.Input, {
                className: "wzf4b07",
                ref: l,
                placeholder: i,
                onChange: o,
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
        S = ({
          testId: e,
          children: a,
          handleSubmit: t,
          asChild: n,
          ...g
        }) => {
          const o = n ? c.DX : p.Button,
            s = (0, y.mergeProps)({
              "data-testid": e,
              className: "wzf4b08",
              size: "LG",
              appearance: "primary",
              onPress: t
            }, g);
          return (0, r.jsx)(o, {
            ...s,
            children: a
          })
        },
        j = ({
          testId: e,
          children: a,
          showError: t,
          asChild: n,
          ...g
        }) => {
          const o = n ? c.DX : "div",
            s = (0, y.mergeProps)({
              "data-testid": e,
              className: "wzf4b0a",
              "aria-hidden": !t
            }, g);
          return (0, r.jsxs)(o, {
            ...s,
            children: [(0, r.jsx)(f.X, {
              className: "wzf4b0b",
              label: ""
            }), (0, r.jsx)(p.Body, {
              className: "wzf4b0c",
              size: "SM",
              appearance: "bold",
              children: a
            })]
          })
        },
        N = (new Date).getFullYear(),
        z = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        P = (0, l.withIntl)(({
          ageGatePassAge: e = 17,
          children: a,
          options: t = {},
          ga: g = {},
          ...o
        }) => {
          const {
            formatMessage: s
          } = (0, l.useIntl)(), {
            loggedIn: i,
            data: m
          } = (0, u.useRockstarUser)(), {
            track: c
          } = (0, u.useGtmTrack)(), {
            style: p
          } = t, f = "1" === (y = (0, _.getCookieValueByName)("UAGC")) ? z.PASSED : "0" === y ? z.FAILED : z.NOT_SUBMITTED;
          var y;
          const [b, P] = (0, n.useState)(f), [Y, R] = (0, n.useState)(""), [E, k] = (0, n.useState)(""), [C, F] = (0, n.useState)(""), [q, U] = (0, n.useState)(!1), [J, V] = (0, n.useState)("neutral"), [G, B] = (0, n.useState)("neutral"), [L, O] = (0, n.useState)("neutral"), X = (0, n.useRef)(null), K = (0, n.useRef)(null), W = (0, n.useRef)(null), H = (0, n.useRef)(null), [$, Q] = (0, n.useState)(""), Z = "" === E || "" === Y || "" === C, ee = ((e = "default") => {
            const [a] = new Intl.DateTimeFormat(e).formatToParts(new Date);
            return "day" === a.type ? "row" : "us"
          })(navigator.language), ae = "us" === ee ? ["m", "d", "y"] : ["d", "m", "y"], te = (0, n.useRef)(!1);
          (0, n.useEffect)(() => {
            !1 !== i || b !== z.NOT_SUBMITTED || te.current || (te.current = !0, c({
              event: "age_gate_popup",
              element_placement: g.element_placement ?? ""
            }))
          }, [c, g.element_placement, i, b]);
          const re = e => {
              "Enter" === e.key && ne()
            },
            ne = async () => {
              if (!K.current || !W.current || !X.current) return;
              if (!("" !== E && "" !== Y && "" !== C || (V("" === E ? "invalid" : "neutral"), B("" === Y ? "invalid" : "neutral"), O("" === C ? "invalid" : "neutral"), Q(s(h.agegate_error_required_fields)), 0))) return void U(!0);
              if (!K.current || (K.current.validity.badInput || K.current.validity.stepMismatch || E.includes(".") ? (V("invalid"), Q(s(h.agegate_error_day_whole_number)), 1) : K.current.validity.valid ? (V("success"), 0) : (V("invalid"), Q(s(h.agegate_error_invalid_day)), 1))) return void U(!0);
              if (!W.current || (W.current.validity.badInput || W.current.validity.stepMismatch || Y.includes(".") ? (B("invalid"), Q(s(h.agegate_error_month_whole_number)), 1) : W.current.validity.valid ? (B("success"), 0) : (B("invalid"), Q(s(h.agegate_error_invalid_month)), 1))) return void U(!0);
              if (!X.current || (X.current.validity.badInput || X.current.validity.stepMismatch || C.includes(".") ? (O("invalid"), Q(s(h.agegate_error_year_whole_number)), 1) : Number(C) < 1863 ? (O("invalid"), Q(s(h.agegate_error_year_too_early, {
                  year: 1862
                })), 1) : Number(C) > N ? (O("invalid"), Q(s(h.agegate_error_year_in_future)), 1) : (O("success"), 0))) return void U(!0);
              const a = Number(Y) - 1,
                t = new Date(Number(C), a, Number(E));
              if (!((e, a) => function(e) {
                  return e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
                }(e) && function(e, a, t) {
                  const r = new Date(e, a, t);
                  return r.getFullYear() === e && r.getMonth() === a && r.getDate() === t
                }(Number(C), a, Number(E)) ? (V("success"), B("success"), !0) : (V("invalid"), B("invalid"), Q(s(h.agegate_error_invalid_date)), U(!0), !1))(t, a)) return void U(!0);
              U(!1);
              const r = d(new Date, t) >= e;
              c(r ? {
                event: "age_gate_passed",
                element_placement: g.element_placement ?? ""
              } : {
                event: "age_gate_failed",
                element_placement: g.element_placement ?? "",
                text: "you may not view this content at this time"
              });
              const n = r ? "1" : "0";
              (0, _.setCookieValue)("UAGC", n, !0), P(n)
            }, ge = {
              d: {
                testId: "agegate-day",
                inputStatus: J,
                isRequired: !0,
                min: 1,
                max: 31,
                onChange: e => {
                  const a = e.target.value.slice(0, 2);
                  k(a), 2 === a.length && ("row" === ee ? W?.current?.focus() : "us" === ee && X?.current?.focus())
                },
                onKeyUp: re,
                placeholderText: s(h.agegate_day_ph),
                label: s(h.agegate_day),
                value: E,
                fieldRef: K
              },
              m: {
                testId: "agegate-month",
                inputStatus: G,
                isRequired: !0,
                min: 1,
                max: 12,
                onChange: e => {
                  const a = e.target.value.slice(0, 2);
                  R(a), 2 === a.length && ("row" === ee ? X?.current?.focus() : "us" === ee && K?.current?.focus())
                },
                onKeyUp: re,
                placeholderText: s(h.agegate_month_ph),
                label: s(h.agegate_month),
                value: Y,
                fieldRef: W
              },
              y: {
                testId: "agegate-year",
                inputStatus: L,
                isRequired: !0,
                min: 1863,
                max: N,
                onChange: e => {
                  const a = e.target.value.slice(0, 4);
                  F(a), 4 === a.length && H?.current?.focus()
                },
                onKeyUp: re,
                placeholderText: s(h.agegate_year_ph),
                label: s(h.agegate_year),
                value: C,
                fieldRef: X
              }
            };
          return b === z.PASSED || !1 === m?.isAMinor ? a : b === z.FAILED ? (0, r.jsxs)(w, {
            testId: "agegate-form",
            style: p,
            ...o,
            children: [t?.header, (0, r.jsx)(T, {
              children: s(h.agegate_fail)
            })]
          }) : (0, r.jsxs)(w, {
            ...o,
            children: [t?.header, t?.bgImg && (0, r.jsx)(v, {
              imgSrc: t.bgImg
            }), (0, r.jsx)(M, {
              testId: "agegate-form",
              children: (0, r.jsxs)(D, {
                children: [(0, r.jsx)(T, {
                  children: s(h.agegate_dob_prompt)
                }), (0, r.jsx)(x, {
                  children: ae.map(e => (0, r.jsx)(A, {
                    ...ge[e]
                  }, e))
                }), (0, r.jsxs)(I, {
                  children: [(0, r.jsx)(S, {
                    testId: "agegate-submit",
                    handleSubmit: ne,
                    isDisabled: Z,
                    children: s(h.agegate_submit)
                  }), q && (0, r.jsx)(j, {
                    testId: "agegate-errors",
                    showError: q,
                    children: $
                  })]
                })]
              })
            }), t?.footer]
          })
        }, m)
    },
    380(e, a, t) {
      t.d(a, {
        x: () => n
      });
      var r = t(480);

      function n(e, ...a) {
        const t = r.w.bind(null, e || a.find(e => "object" == typeof e));
        return a.map(t)
      }
    },
    9172(e, a, t) {
      Math.pow(10, 8);
      const r = Symbol.for("constructDateFrom");
      t.d(a, ["_P", 0, r, "s0", 0, 36e5])
    },
    480(e, a, t) {
      t.d(a, {
        w: () => n
      });
      var r = t(9172);

      function n(e, a) {
        return "function" == typeof e ? e(a) : e && "object" == typeof e && r._P in e ? e[r._P](a) : e instanceof Date ? new e.constructor(a) : new Date(a)
      }
    }
  }
]);