try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "51169d71-d138-47b9-bc2e-c57b04119e1b", e._sentryDebugIdIdentifier = "sentry-dbid-51169d71-d138-47b9-bc2e-c57b04119e1b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [6879], {
    81261: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "gestern",
            "-2": "vorgestern",
            0: "heute",
            1: "morgen",
            2: "übermorgen",
            future: {
              one: "in {0} Tag",
              other: "in {0} Tagen"
            },
            past: {
              one: "vor {0} Tag",
              other: "vor {0} Tagen"
            }
          },
          "day-narrow": {
            "-1": "gestern",
            "-2": "vorgestern",
            0: "heute",
            1: "morgen",
            2: "übermorgen",
            future: {
              one: "in {0} Tag",
              other: "in {0} Tagen"
            },
            past: {
              one: "vor {0} Tag",
              other: "vor {0} Tagen"
            }
          },
          "day-short": {
            "-1": "gestern",
            "-2": "vorgestern",
            0: "heute",
            1: "morgen",
            2: "übermorgen",
            future: {
              one: "in {0} Tag",
              other: "in {0} Tagen"
            },
            past: {
              one: "vor {0} Tag",
              other: "vor {0} Tagen"
            }
          },
          hour: {
            0: "in dieser Stunde",
            future: {
              one: "in {0} Stunde",
              other: "in {0} Stunden"
            },
            past: {
              one: "vor {0} Stunde",
              other: "vor {0} Stunden"
            }
          },
          "hour-narrow": {
            0: "in dieser Stunde",
            future: {
              one: "in {0} Std.",
              other: "in {0} Std."
            },
            past: {
              one: "vor {0} Std.",
              other: "vor {0} Std."
            }
          },
          "hour-short": {
            0: "in dieser Stunde",
            future: {
              one: "in {0} Std.",
              other: "in {0} Std."
            },
            past: {
              one: "vor {0} Std.",
              other: "vor {0} Std."
            }
          },
          minute: {
            0: "in dieser Minute",
            future: {
              one: "in {0} Minute",
              other: "in {0} Minuten"
            },
            past: {
              one: "vor {0} Minute",
              other: "vor {0} Minuten"
            }
          },
          "minute-narrow": {
            0: "in dieser Minute",
            future: {
              one: "in {0} m",
              other: "in {0} m"
            },
            past: {
              one: "vor {0} m",
              other: "vor {0} m"
            }
          },
          "minute-short": {
            0: "in dieser Minute",
            future: {
              one: "in {0} Min.",
              other: "in {0} Min."
            },
            past: {
              one: "vor {0} Min.",
              other: "vor {0} Min."
            }
          },
          month: {
            "-1": "letzten Monat",
            0: "diesen Monat",
            1: "nächsten Monat",
            future: {
              one: "in {0} Monat",
              other: "in {0} Monaten"
            },
            past: {
              one: "vor {0} Monat",
              other: "vor {0} Monaten"
            }
          },
          "month-narrow": {
            "-1": "letzten Monat",
            0: "diesen Monat",
            1: "nächsten Monat",
            future: {
              one: "in {0} Monat",
              other: "in {0} Monaten"
            },
            past: {
              one: "vor {0} Monat",
              other: "vor {0} Monaten"
            }
          },
          "month-short": {
            "-1": "letzten Monat",
            0: "diesen Monat",
            1: "nächsten Monat",
            future: {
              one: "in {0} Monat",
              other: "in {0} Monaten"
            },
            past: {
              one: "vor {0} Monat",
              other: "vor {0} Monaten"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "letztes Quartal",
            0: "dieses Quartal",
            1: "nächstes Quartal",
            future: {
              one: "in {0} Quartal",
              other: "in {0} Quartalen"
            },
            past: {
              one: "vor {0} Quartal",
              other: "vor {0} Quartalen"
            }
          },
          "quarter-narrow": {
            "-1": "letztes Quartal",
            0: "dieses Quartal",
            1: "nächstes Quartal",
            future: {
              one: "in {0} Q",
              other: "in {0} Q"
            },
            past: {
              one: "vor {0} Q",
              other: "vor {0} Q"
            }
          },
          "quarter-short": {
            "-1": "letztes Quartal",
            0: "dieses Quartal",
            1: "nächstes Quartal",
            future: {
              one: "in {0} Quart.",
              other: "in {0} Quart."
            },
            past: {
              one: "vor {0} Quart.",
              other: "vor {0} Quart."
            }
          },
          second: {
            0: "jetzt",
            future: {
              one: "in {0} Sekunde",
              other: "in {0} Sekunden"
            },
            past: {
              one: "vor {0} Sekunde",
              other: "vor {0} Sekunden"
            }
          },
          "second-narrow": {
            0: "jetzt",
            future: {
              one: "in {0} s",
              other: "in {0} s"
            },
            past: {
              one: "vor {0} s",
              other: "vor {0} s"
            }
          },
          "second-short": {
            0: "jetzt",
            future: {
              one: "in {0} Sek.",
              other: "in {0} Sek."
            },
            past: {
              one: "vor {0} Sek.",
              other: "vor {0} Sek."
            }
          },
          week: {
            "-1": "letzte Woche",
            0: "diese Woche",
            1: "nächste Woche",
            future: {
              one: "in {0} Woche",
              other: "in {0} Wochen"
            },
            past: {
              one: "vor {0} Woche",
              other: "vor {0} Wochen"
            }
          },
          "week-narrow": {
            "-1": "letzte Woche",
            0: "diese Woche",
            1: "nächste Woche",
            future: {
              one: "in {0} Wo.",
              other: "in {0} Wo."
            },
            past: {
              one: "vor {0} Wo.",
              other: "vor {0} Wo."
            }
          },
          "week-short": {
            "-1": "letzte Woche",
            0: "diese Woche",
            1: "nächste Woche",
            future: {
              one: "in {0} Woche",
              other: "in {0} Wochen"
            },
            past: {
              one: "vor {0} Woche",
              other: "vor {0} Wochen"
            }
          },
          year: {
            "-1": "letztes Jahr",
            0: "dieses Jahr",
            1: "nächstes Jahr",
            future: {
              one: "in {0} Jahr",
              other: "in {0} Jahren"
            },
            past: {
              one: "vor {0} Jahr",
              other: "vor {0} Jahren"
            }
          },
          "year-narrow": {
            "-1": "letztes Jahr",
            0: "dieses Jahr",
            1: "nächstes Jahr",
            future: {
              one: "in {0} Jahr",
              other: "in {0} Jahren"
            },
            past: {
              one: "vor {0} Jahr",
              other: "vor {0} Jahren"
            }
          },
          "year-short": {
            "-1": "letztes Jahr",
            0: "dieses Jahr",
            1: "nächstes Jahr",
            future: {
              one: "in {0} Jahr",
              other: "in {0} Jahren"
            },
            past: {
              one: "vor {0} Jahr",
              other: "vor {0} Jahren"
            }
          }
        },
        locale: "de"
      })
    }
  }
]);