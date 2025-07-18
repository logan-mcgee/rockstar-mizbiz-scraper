try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5030295-087d-441a-87fa-feab7906897c", e._sentryDebugIdIdentifier = "sentry-dbid-c5030295-087d-441a-87fa-feab7906897c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [7970], {
    14698: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "ontem",
            "-2": "anteontem",
            0: "hoje",
            1: "amanhã",
            2: "depois de amanhã",
            future: {
              one: "em {0} dia",
              other: "em {0} dias"
            },
            past: {
              one: "há {0} dia",
              other: "há {0} dias"
            }
          },
          "day-narrow": {
            "-1": "ontem",
            "-2": "anteontem",
            0: "hoje",
            1: "amanhã",
            2: "depois de amanhã",
            future: {
              one: "em {0} dia",
              other: "em {0} dias"
            },
            past: {
              one: "há {0} dia",
              other: "há {0} dias"
            }
          },
          "day-short": {
            "-1": "ontem",
            "-2": "anteontem",
            0: "hoje",
            1: "amanhã",
            2: "depois de amanhã",
            future: {
              one: "em {0} dia",
              other: "em {0} dias"
            },
            past: {
              one: "há {0} dia",
              other: "há {0} dias"
            }
          },
          hour: {
            0: "esta hora",
            future: {
              one: "em {0} hora",
              other: "em {0} horas"
            },
            past: {
              one: "há {0} hora",
              other: "há {0} horas"
            }
          },
          "hour-narrow": {
            0: "esta hora",
            future: {
              one: "em {0} h",
              other: "em {0} h"
            },
            past: {
              one: "há {0} h",
              other: "há {0} h"
            }
          },
          "hour-short": {
            0: "esta hora",
            future: {
              one: "em {0} h",
              other: "em {0} h"
            },
            past: {
              one: "há {0} h",
              other: "há {0} h"
            }
          },
          minute: {
            0: "este minuto",
            future: {
              one: "em {0} minuto",
              other: "em {0} minutos"
            },
            past: {
              one: "há {0} minuto",
              other: "há {0} minutos"
            }
          },
          "minute-narrow": {
            0: "este minuto",
            future: {
              one: "em {0} min.",
              other: "em {0} min."
            },
            past: {
              one: "há {0} min.",
              other: "há {0} min."
            }
          },
          "minute-short": {
            0: "este minuto",
            future: {
              one: "em {0} min.",
              other: "em {0} min."
            },
            past: {
              one: "há {0} min.",
              other: "há {0} min."
            }
          },
          month: {
            "-1": "mês passado",
            0: "este mês",
            1: "próximo mês",
            future: {
              one: "em {0} mês",
              other: "em {0} meses"
            },
            past: {
              one: "há {0} mês",
              other: "há {0} meses"
            }
          },
          "month-narrow": {
            "-1": "mês passado",
            0: "este mês",
            1: "próximo mês",
            future: {
              one: "em {0} mês",
              other: "em {0} meses"
            },
            past: {
              one: "há {0} mês",
              other: "há {0} meses"
            }
          },
          "month-short": {
            "-1": "mês passado",
            0: "este mês",
            1: "próximo mês",
            future: {
              one: "em {0} mês",
              other: "em {0} meses"
            },
            past: {
              one: "há {0} mês",
              other: "há {0} meses"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "último trimestre",
            0: "este trimestre",
            1: "próximo trimestre",
            future: {
              one: "em {0} trimestre",
              other: "em {0} trimestres"
            },
            past: {
              one: "há {0} trimestre",
              other: "há {0} trimestres"
            }
          },
          "quarter-narrow": {
            "-1": "último trimestre",
            0: "este trimestre",
            1: "próximo trimestre",
            future: {
              one: "em {0} trim.",
              other: "em {0} trim."
            },
            past: {
              one: "há {0} trim.",
              other: "há {0} trim."
            }
          },
          "quarter-short": {
            "-1": "último trimestre",
            0: "este trimestre",
            1: "próximo trimestre",
            future: {
              one: "em {0} trim.",
              other: "em {0} trim."
            },
            past: {
              one: "há {0} trim.",
              other: "há {0} trim."
            }
          },
          second: {
            0: "agora",
            future: {
              one: "em {0} segundo",
              other: "em {0} segundos"
            },
            past: {
              one: "há {0} segundo",
              other: "há {0} segundos"
            }
          },
          "second-narrow": {
            0: "agora",
            future: {
              one: "em {0} seg.",
              other: "em {0} seg."
            },
            past: {
              one: "há {0} seg.",
              other: "há {0} seg."
            }
          },
          "second-short": {
            0: "agora",
            future: {
              one: "em {0} seg.",
              other: "em {0} seg."
            },
            past: {
              one: "há {0} seg.",
              other: "há {0} seg."
            }
          },
          week: {
            "-1": "semana passada",
            0: "esta semana",
            1: "próxima semana",
            future: {
              one: "em {0} semana",
              other: "em {0} semanas"
            },
            past: {
              one: "há {0} semana",
              other: "há {0} semanas"
            }
          },
          "week-narrow": {
            "-1": "semana passada",
            0: "esta semana",
            1: "próxima semana",
            future: {
              one: "em {0} sem.",
              other: "em {0} sem."
            },
            past: {
              one: "há {0} sem.",
              other: "há {0} sem."
            }
          },
          "week-short": {
            "-1": "semana passada",
            0: "esta semana",
            1: "próxima semana",
            future: {
              one: "em {0} sem.",
              other: "em {0} sem."
            },
            past: {
              one: "há {0} sem.",
              other: "há {0} sem."
            }
          },
          year: {
            "-1": "ano passado",
            0: "este ano",
            1: "próximo ano",
            future: {
              one: "em {0} ano",
              other: "em {0} anos"
            },
            past: {
              one: "há {0} ano",
              other: "há {0} anos"
            }
          },
          "year-narrow": {
            "-1": "ano passado",
            0: "este ano",
            1: "próximo ano",
            future: {
              one: "em {0} ano",
              other: "em {0} anos"
            },
            past: {
              one: "há {0} ano",
              other: "há {0} anos"
            }
          },
          "year-short": {
            "-1": "ano passado",
            0: "este ano",
            1: "próximo ano",
            future: {
              one: "em {0} ano",
              other: "em {0} anos"
            },
            past: {
              one: "há {0} ano",
              other: "há {0} anos"
            }
          }
        },
        locale: "pt"
      })
    }
  }
]);