try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fb8514b2-2ca7-44a0-8e7e-1743a7b82900", e._sentryDebugIdIdentifier = "sentry-dbid-fb8514b2-2ca7-44a0-8e7e-1743a7b82900")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [278], {
    85813: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "ayer",
            "-2": "anteayer",
            0: "hoy",
            1: "mañana",
            2: "pasado mañana",
            future: {
              one: "dentro de {0} día",
              other: "dentro de {0} días"
            },
            past: {
              one: "hace {0} día",
              other: "hace {0} días"
            }
          },
          "day-narrow": {
            "-1": "ayer",
            "-2": "anteayer",
            0: "hoy",
            1: "mañana",
            2: "pasado mañana",
            future: {
              one: "dentro de {0} d",
              other: "dentro de {0} d"
            },
            past: {
              one: "hace {0} d",
              other: "hace {0} d"
            }
          },
          "day-short": {
            "-1": "ayer",
            "-2": "anteayer",
            0: "hoy",
            1: "mañana",
            2: "pasado mañana",
            future: {
              one: "dentro de {0} d",
              other: "dentro de {0} d"
            },
            past: {
              one: "hace {0} d",
              other: "hace {0} d"
            }
          },
          hour: {
            0: "esta hora",
            future: {
              one: "dentro de {0} hora",
              other: "dentro de {0} horas"
            },
            past: {
              one: "hace {0} hora",
              other: "hace {0} horas"
            }
          },
          "hour-narrow": {
            0: "esta hora",
            future: {
              one: "dentro de {0} h",
              other: "dentro de {0} h"
            },
            past: {
              one: "hace {0} h",
              other: "hace {0} h"
            }
          },
          "hour-short": {
            0: "esta hora",
            future: {
              one: "dentro de {0} h",
              other: "dentro de {0} h"
            },
            past: {
              one: "hace {0} h",
              other: "hace {0} h"
            }
          },
          minute: {
            0: "este minuto",
            future: {
              one: "dentro de {0} minuto",
              other: "dentro de {0} minutos"
            },
            past: {
              one: "hace {0} minuto",
              other: "hace {0} minutos"
            }
          },
          "minute-narrow": {
            0: "este minuto",
            future: {
              one: "dentro de {0} min",
              other: "dentro de {0} min"
            },
            past: {
              one: "hace {0} min",
              other: "hace {0} min"
            }
          },
          "minute-short": {
            0: "este minuto",
            future: {
              one: "dentro de {0} min",
              other: "dentro de {0} min"
            },
            past: {
              one: "hace {0} min",
              other: "hace {0} min"
            }
          },
          month: {
            "-1": "el mes pasado",
            0: "este mes",
            1: "el próximo mes",
            future: {
              one: "dentro de {0} mes",
              other: "dentro de {0} meses"
            },
            past: {
              one: "hace {0} mes",
              other: "hace {0} meses"
            }
          },
          "month-narrow": {
            "-1": "el mes pasado",
            0: "este mes",
            1: "el próximo mes",
            future: {
              one: "dentro de {0} m",
              other: "dentro de {0} m"
            },
            past: {
              one: "hace {0} m",
              other: "hace {0} m"
            }
          },
          "month-short": {
            "-1": "el mes pasado",
            0: "este mes",
            1: "el próximo mes",
            future: {
              one: "dentro de {0} m",
              other: "dentro de {0} m"
            },
            past: {
              one: "hace {0} m",
              other: "hace {0} m"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "el trimestre pasado",
            0: "este trimestre",
            1: "el próximo trimestre",
            future: {
              one: "dentro de {0} trimestre",
              other: "dentro de {0} trimestres"
            },
            past: {
              one: "hace {0} trimestre",
              other: "hace {0} trimestres"
            }
          },
          "quarter-narrow": {
            "-1": "el trimestre pasado",
            0: "este trimestre",
            1: "el próximo trimestre",
            future: {
              one: "dentro de {0} trim.",
              other: "dentro de {0} trim."
            },
            past: {
              one: "hace {0} trim.",
              other: "hace {0} trim."
            }
          },
          "quarter-short": {
            "-1": "el trimestre pasado",
            0: "este trimestre",
            1: "el próximo trimestre",
            future: {
              one: "dentro de {0} trim.",
              other: "dentro de {0} trim."
            },
            past: {
              one: "hace {0} trim.",
              other: "hace {0} trim."
            }
          },
          second: {
            0: "ahora",
            future: {
              one: "dentro de {0} segundo",
              other: "dentro de {0} segundos"
            },
            past: {
              one: "hace {0} segundo",
              other: "hace {0} segundos"
            }
          },
          "second-narrow": {
            0: "ahora",
            future: {
              one: "dentro de {0} s",
              other: "dentro de {0} s"
            },
            past: {
              one: "hace {0} s",
              other: "hace {0} s"
            }
          },
          "second-short": {
            0: "ahora",
            future: {
              one: "dentro de {0} s",
              other: "dentro de {0} s"
            },
            past: {
              one: "hace {0} s",
              other: "hace {0} s"
            }
          },
          week: {
            "-1": "la semana pasada",
            0: "esta semana",
            1: "la próxima semana",
            future: {
              one: "dentro de {0} semana",
              other: "dentro de {0} semanas"
            },
            past: {
              one: "hace {0} semana",
              other: "hace {0} semanas"
            }
          },
          "week-narrow": {
            "-1": "sem. ant.",
            0: "esta sem.",
            1: "próx. sem.",
            future: {
              one: "dentro de {0} sem.",
              other: "dentro de {0} sem."
            },
            past: {
              one: "hace {0} sem.",
              other: "hace {0} sem."
            }
          },
          "week-short": {
            "-1": "sem. ant.",
            0: "esta sem.",
            1: "próx. sem.",
            future: {
              one: "dentro de {0} sem.",
              other: "dentro de {0} sem."
            },
            past: {
              one: "hace {0} sem.",
              other: "hace {0} sem."
            }
          },
          year: {
            "-1": "el año pasado",
            0: "este año",
            1: "el próximo año",
            future: {
              one: "dentro de {0} año",
              other: "dentro de {0} años"
            },
            past: {
              one: "hace {0} año",
              other: "hace {0} años"
            }
          },
          "year-narrow": {
            "-1": "el año pasado",
            0: "este año",
            1: "el próximo año",
            future: {
              one: "dentro de {0} a",
              other: "dentro de {0} a"
            },
            past: {
              one: "hace {0} a",
              other: "hace {0} a"
            }
          },
          "year-short": {
            "-1": "el año pasado",
            0: "este año",
            1: "el próximo año",
            future: {
              one: "dentro de {0} a",
              other: "dentro de {0} a"
            },
            past: {
              one: "hace {0} a",
              other: "hace {0} a"
            }
          }
        },
        locale: "es"
      })
    }
  }
]);