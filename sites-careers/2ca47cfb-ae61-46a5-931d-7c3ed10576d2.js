try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2ca47cfb-ae61-46a5-931d-7c3ed10576d2", e._sentryDebugIdIdentifier = "sentry-dbid-2ca47cfb-ae61-46a5-931d-7c3ed10576d2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [9022], {
    3034: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "hier",
            "-2": "avant-hier",
            0: "aujourd’hui",
            1: "demain",
            2: "après-demain",
            future: {
              one: "dans {0} jour",
              other: "dans {0} jours"
            },
            past: {
              one: "il y a {0} jour",
              other: "il y a {0} jours"
            }
          },
          "day-narrow": {
            "-1": "hier",
            "-2": "avant-hier",
            0: "aujourd’hui",
            1: "demain",
            2: "après-demain",
            future: {
              one: "+{0} j",
              other: "+{0} j"
            },
            past: {
              one: "-{0} j",
              other: "-{0} j"
            }
          },
          "day-short": {
            "-1": "hier",
            "-2": "avant-hier",
            0: "aujourd’hui",
            1: "demain",
            2: "après-demain",
            future: {
              one: "dans {0} j",
              other: "dans {0} j"
            },
            past: {
              one: "il y a {0} j",
              other: "il y a {0} j"
            }
          },
          hour: {
            0: "cette heure-ci",
            future: {
              one: "dans {0} heure",
              other: "dans {0} heures"
            },
            past: {
              one: "il y a {0} heure",
              other: "il y a {0} heures"
            }
          },
          "hour-narrow": {
            0: "cette heure-ci",
            future: {
              one: "+{0} h",
              other: "+{0} h"
            },
            past: {
              one: "-{0} h",
              other: "-{0} h"
            }
          },
          "hour-short": {
            0: "cette heure-ci",
            future: {
              one: "dans {0} h",
              other: "dans {0} h"
            },
            past: {
              one: "il y a {0} h",
              other: "il y a {0} h"
            }
          },
          minute: {
            0: "cette minute-ci",
            future: {
              one: "dans {0} minute",
              other: "dans {0} minutes"
            },
            past: {
              one: "il y a {0} minute",
              other: "il y a {0} minutes"
            }
          },
          "minute-narrow": {
            0: "cette minute-ci",
            future: {
              one: "+{0} min",
              other: "+{0} min"
            },
            past: {
              one: "-{0} min",
              other: "-{0} min"
            }
          },
          "minute-short": {
            0: "cette minute-ci",
            future: {
              one: "dans {0} min",
              other: "dans {0} min"
            },
            past: {
              one: "il y a {0} min",
              other: "il y a {0} min"
            }
          },
          month: {
            "-1": "le mois dernier",
            0: "ce mois-ci",
            1: "le mois prochain",
            future: {
              one: "dans {0} mois",
              other: "dans {0} mois"
            },
            past: {
              one: "il y a {0} mois",
              other: "il y a {0} mois"
            }
          },
          "month-narrow": {
            "-1": "le mois dernier",
            0: "ce mois-ci",
            1: "le mois prochain",
            future: {
              one: "+{0} m.",
              other: "+{0} m."
            },
            past: {
              one: "-{0} m.",
              other: "-{0} m."
            }
          },
          "month-short": {
            "-1": "le mois dernier",
            0: "ce mois-ci",
            1: "le mois prochain",
            future: {
              one: "dans {0} m.",
              other: "dans {0} m."
            },
            past: {
              one: "il y a {0} m.",
              other: "il y a {0} m."
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "le trimestre dernier",
            0: "ce trimestre",
            1: "le trimestre prochain",
            future: {
              one: "dans {0} trimestre",
              other: "dans {0} trimestres"
            },
            past: {
              one: "il y a {0} trimestre",
              other: "il y a {0} trimestres"
            }
          },
          "quarter-narrow": {
            "-1": "le trimestre dernier",
            0: "ce trimestre",
            1: "le trimestre prochain",
            future: {
              one: "+{0} trim.",
              other: "+{0} trim."
            },
            past: {
              one: "-{0} trim.",
              other: "-{0} trim."
            }
          },
          "quarter-short": {
            "-1": "le trimestre dernier",
            0: "ce trimestre",
            1: "le trimestre prochain",
            future: {
              one: "dans {0} trim.",
              other: "dans {0} trim."
            },
            past: {
              one: "il y a {0} trim.",
              other: "il y a {0} trim."
            }
          },
          second: {
            0: "maintenant",
            future: {
              one: "dans {0} seconde",
              other: "dans {0} secondes"
            },
            past: {
              one: "il y a {0} seconde",
              other: "il y a {0} secondes"
            }
          },
          "second-narrow": {
            0: "maintenant",
            future: {
              one: "+{0} s",
              other: "+{0} s"
            },
            past: {
              one: "-{0} s",
              other: "-{0} s"
            }
          },
          "second-short": {
            0: "maintenant",
            future: {
              one: "dans {0} s",
              other: "dans {0} s"
            },
            past: {
              one: "il y a {0} s",
              other: "il y a {0} s"
            }
          },
          week: {
            "-1": "la semaine dernière",
            0: "cette semaine",
            1: "la semaine prochaine",
            future: {
              one: "dans {0} semaine",
              other: "dans {0} semaines"
            },
            past: {
              one: "il y a {0} semaine",
              other: "il y a {0} semaines"
            }
          },
          "week-narrow": {
            "-1": "la semaine dernière",
            0: "cette semaine",
            1: "la semaine prochaine",
            future: {
              one: "+{0} sem.",
              other: "+{0} sem."
            },
            past: {
              one: "-{0} sem.",
              other: "-{0} sem."
            }
          },
          "week-short": {
            "-1": "la semaine dernière",
            0: "cette semaine",
            1: "la semaine prochaine",
            future: {
              one: "dans {0} sem.",
              other: "dans {0} sem."
            },
            past: {
              one: "il y a {0} sem.",
              other: "il y a {0} sem."
            }
          },
          year: {
            "-1": "l’année dernière",
            0: "cette année",
            1: "l’année prochaine",
            future: {
              one: "dans {0} an",
              other: "dans {0} ans"
            },
            past: {
              one: "il y a {0} an",
              other: "il y a {0} ans"
            }
          },
          "year-narrow": {
            "-1": "l’année dernière",
            0: "cette année",
            1: "l’année prochaine",
            future: {
              one: "+{0} a",
              other: "+{0} a"
            },
            past: {
              one: "-{0} a",
              other: "-{0} a"
            }
          },
          "year-short": {
            "-1": "l’année dernière",
            0: "cette année",
            1: "l’année prochaine",
            future: {
              one: "dans {0} a",
              other: "dans {0} a"
            },
            past: {
              one: "il y a {0} a",
              other: "il y a {0} a"
            }
          }
        },
        locale: "fr"
      })
    }
  }
]);