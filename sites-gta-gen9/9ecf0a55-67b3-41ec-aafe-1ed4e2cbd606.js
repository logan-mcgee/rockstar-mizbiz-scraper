try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9ecf0a55-67b3-41ec-aafe-1ed4e2cbd606", e._sentryDebugIdIdentifier = "sentry-dbid-9ecf0a55-67b3-41ec-aafe-1ed4e2cbd606")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2365], {
    68271: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "ieri",
            "-2": "l’altro ieri",
            0: "oggi",
            1: "domani",
            2: "dopodomani",
            future: {
              one: "tra {0} giorno",
              other: "tra {0} giorni"
            },
            past: {
              one: "{0} giorno fa",
              other: "{0} giorni fa"
            }
          },
          "day-narrow": {
            "-1": "ieri",
            "-2": "l’altro ieri",
            0: "oggi",
            1: "domani",
            2: "dopodomani",
            future: {
              one: "tra {0} g",
              other: "tra {0} gg"
            },
            past: {
              one: "{0} g fa",
              other: "{0} gg fa"
            }
          },
          "day-short": {
            "-1": "ieri",
            "-2": "l’altro ieri",
            0: "oggi",
            1: "domani",
            2: "dopodomani",
            future: {
              one: "tra {0} g",
              other: "tra {0} gg"
            },
            past: {
              one: "{0} g fa",
              other: "{0} gg fa"
            }
          },
          hour: {
            0: "quest’ora",
            future: {
              one: "tra {0} ora",
              other: "tra {0} ore"
            },
            past: {
              one: "{0} ora fa",
              other: "{0} ore fa"
            }
          },
          "hour-narrow": {
            0: "quest’ora",
            future: {
              one: "tra {0} h",
              other: "tra {0} h"
            },
            past: {
              one: "{0} h fa",
              other: "{0} h fa"
            }
          },
          "hour-short": {
            0: "quest’ora",
            future: {
              one: "tra {0} h",
              other: "tra {0} h"
            },
            past: {
              one: "{0} h fa",
              other: "{0} h fa"
            }
          },
          minute: {
            0: "questo minuto",
            future: {
              one: "tra {0} minuto",
              other: "tra {0} minuti"
            },
            past: {
              one: "{0} minuto fa",
              other: "{0} minuti fa"
            }
          },
          "minute-narrow": {
            0: "questo minuto",
            future: {
              one: "tra {0} min",
              other: "tra {0} min"
            },
            past: {
              one: "{0} min fa",
              other: "{0} min fa"
            }
          },
          "minute-short": {
            0: "questo minuto",
            future: {
              one: "tra {0} min",
              other: "tra {0} min"
            },
            past: {
              one: "{0} min fa",
              other: "{0} min fa"
            }
          },
          month: {
            "-1": "mese scorso",
            0: "questo mese",
            1: "mese prossimo",
            future: {
              one: "tra {0} mese",
              other: "tra {0} mesi"
            },
            past: {
              one: "{0} mese fa",
              other: "{0} mesi fa"
            }
          },
          "month-narrow": {
            "-1": "mese scorso",
            0: "questo mese",
            1: "mese prossimo",
            future: {
              one: "tra {0} mese",
              other: "tra {0} mesi"
            },
            past: {
              one: "{0} mese fa",
              other: "{0} mesi fa"
            }
          },
          "month-short": {
            "-1": "mese scorso",
            0: "questo mese",
            1: "mese prossimo",
            future: {
              one: "tra {0} mese",
              other: "tra {0} mesi"
            },
            past: {
              one: "{0} mese fa",
              other: "{0} mesi fa"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "trimestre scorso",
            0: "questo trimestre",
            1: "trimestre prossimo",
            future: {
              one: "tra {0} trimestre",
              other: "tra {0} trimestri"
            },
            past: {
              one: "{0} trimestre fa",
              other: "{0} trimestri fa"
            }
          },
          "quarter-narrow": {
            "-1": "trim. scorso",
            0: "questo trim.",
            1: "trim. prossimo",
            future: {
              one: "tra {0} trim.",
              other: "tra {0} trim."
            },
            past: {
              one: "{0} trim. fa",
              other: "{0} trim. fa"
            }
          },
          "quarter-short": {
            "-1": "trim. scorso",
            0: "questo trim.",
            1: "trim. prossimo",
            future: {
              one: "tra {0} trim.",
              other: "tra {0} trim."
            },
            past: {
              one: "{0} trim. fa",
              other: "{0} trim. fa"
            }
          },
          second: {
            0: "ora",
            future: {
              one: "tra {0} secondo",
              other: "tra {0} secondi"
            },
            past: {
              one: "{0} secondo fa",
              other: "{0} secondi fa"
            }
          },
          "second-narrow": {
            0: "ora",
            future: {
              one: "tra {0} s",
              other: "tra {0} s"
            },
            past: {
              one: "{0} s fa",
              other: "{0} s fa"
            }
          },
          "second-short": {
            0: "ora",
            future: {
              one: "tra {0} sec.",
              other: "tra {0} sec."
            },
            past: {
              one: "{0} sec. fa",
              other: "{0} sec. fa"
            }
          },
          week: {
            "-1": "settimana scorsa",
            0: "questa settimana",
            1: "settimana prossima",
            future: {
              one: "tra {0} settimana",
              other: "tra {0} settimane"
            },
            past: {
              one: "{0} settimana fa",
              other: "{0} settimane fa"
            }
          },
          "week-narrow": {
            "-1": "sett. scorsa",
            0: "questa sett.",
            1: "sett. prossima",
            future: {
              one: "tra {0} sett.",
              other: "tra {0} sett."
            },
            past: {
              one: "{0} sett. fa",
              other: "{0} sett. fa"
            }
          },
          "week-short": {
            "-1": "sett. scorsa",
            0: "questa sett.",
            1: "sett. prossima",
            future: {
              one: "tra {0} sett.",
              other: "tra {0} sett."
            },
            past: {
              one: "{0} sett. fa",
              other: "{0} sett. fa"
            }
          },
          year: {
            "-1": "anno scorso",
            0: "quest’anno",
            1: "anno prossimo",
            future: {
              one: "tra {0} anno",
              other: "tra {0} anni"
            },
            past: {
              one: "{0} anno fa",
              other: "{0} anni fa"
            }
          },
          "year-narrow": {
            "-1": "anno scorso",
            0: "quest’anno",
            1: "anno prossimo",
            future: {
              one: "tra {0} anno",
              other: "tra {0} anni"
            },
            past: {
              one: "{0} anno fa",
              other: "{0} anni fa"
            }
          },
          "year-short": {
            "-1": "anno scorso",
            0: "quest’anno",
            1: "anno prossimo",
            future: {
              one: "tra {0} anno",
              other: "tra {0} anni"
            },
            past: {
              one: "{0} anno fa",
              other: "{0} anni fa"
            }
          }
        },
        locale: "it"
      })
    }
  }
]);