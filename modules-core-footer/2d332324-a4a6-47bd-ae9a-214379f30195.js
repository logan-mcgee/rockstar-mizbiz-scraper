try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2d332324-a4a6-47bd-ae9a-214379f30195", e._sentryDebugIdIdentifier = "sentry-dbid-2d332324-a4a6-47bd-ae9a-214379f30195")
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
  [1242], {
    29090: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "wczoraj",
            "-2": "przedwczoraj",
            0: "dzisiaj",
            1: "jutro",
            2: "pojutrze",
            future: {
              few: "za {0} dni",
              many: "za {0} dni",
              one: "za {0} dzień",
              other: "za {0} dnia"
            },
            past: {
              few: "{0} dni temu",
              many: "{0} dni temu",
              one: "{0} dzień temu",
              other: "{0} dnia temu"
            }
          },
          "day-narrow": {
            "-1": "wcz.",
            "-2": "przedwczoraj",
            0: "dziś",
            1: "jutro",
            2: "pojutrze",
            future: {
              few: "za {0} dni",
              many: "za {0} dni",
              one: "za {0} dzień",
              other: "za {0} dnia"
            },
            past: {
              few: "{0} dni temu",
              many: "{0} dni temu",
              one: "{0} dzień temu",
              other: "{0} dnia temu"
            }
          },
          "day-short": {
            "-1": "wczoraj",
            "-2": "przedwczoraj",
            0: "dzisiaj",
            1: "jutro",
            2: "pojutrze",
            future: {
              few: "za {0} dni",
              many: "za {0} dni",
              one: "za {0} dzień",
              other: "za {0} dnia"
            },
            past: {
              few: "{0} dni temu",
              many: "{0} dni temu",
              one: "{0} dzień temu",
              other: "{0} dnia temu"
            }
          },
          hour: {
            0: "ta godzina",
            future: {
              few: "za {0} godziny",
              many: "za {0} godzin",
              one: "za {0} godzinę",
              other: "za {0} godziny"
            },
            past: {
              few: "{0} godziny temu",
              many: "{0} godzin temu",
              one: "{0} godzinę temu",
              other: "{0} godziny temu"
            }
          },
          "hour-narrow": {
            0: "ta godzina",
            future: {
              few: "za {0} g.",
              many: "za {0} g.",
              one: "za {0} g.",
              other: "za {0} g."
            },
            past: {
              few: "{0} g. temu",
              many: "{0} g. temu",
              one: "{0} g. temu",
              other: "{0} g. temu"
            }
          },
          "hour-short": {
            0: "ta godzina",
            future: {
              few: "za {0} godz.",
              many: "za {0} godz.",
              one: "za {0} godz.",
              other: "za {0} godz."
            },
            past: {
              few: "{0} godz. temu",
              many: "{0} godz. temu",
              one: "{0} godz. temu",
              other: "{0} godz. temu"
            }
          },
          minute: {
            0: "ta minuta",
            future: {
              few: "za {0} minuty",
              many: "za {0} minut",
              one: "za {0} minutę",
              other: "za {0} minuty"
            },
            past: {
              few: "{0} minuty temu",
              many: "{0} minut temu",
              one: "{0} minutę temu",
              other: "{0} minuty temu"
            }
          },
          "minute-narrow": {
            0: "ta minuta",
            future: {
              few: "za {0} min",
              many: "za {0} min",
              one: "za {0} min",
              other: "za {0} min"
            },
            past: {
              few: "{0} min temu",
              many: "{0} min temu",
              one: "{0} min temu",
              other: "{0} min temu"
            }
          },
          "minute-short": {
            0: "ta minuta",
            future: {
              few: "za {0} min",
              many: "za {0} min",
              one: "za {0} min",
              other: "za {0} min"
            },
            past: {
              few: "{0} min temu",
              many: "{0} min temu",
              one: "{0} min temu",
              other: "{0} min temu"
            }
          },
          month: {
            "-1": "w zeszłym miesiącu",
            0: "w tym miesiącu",
            1: "w przyszłym miesiącu",
            future: {
              few: "za {0} miesiące",
              many: "za {0} miesięcy",
              one: "za {0} miesiąc",
              other: "za {0} miesiąca"
            },
            past: {
              few: "{0} miesiące temu",
              many: "{0} miesięcy temu",
              one: "{0} miesiąc temu",
              other: "{0} miesiąca temu"
            }
          },
          "month-narrow": {
            "-1": "w zeszłym mies.",
            0: "w tym mies.",
            1: "w przyszłym mies.",
            future: {
              few: "za {0} mies.",
              many: "za {0} mies.",
              one: "za {0} mies.",
              other: "za {0} mies."
            },
            past: {
              few: "{0} mies. temu",
              many: "{0} mies. temu",
              one: "{0} mies. temu",
              other: "{0} mies. temu"
            }
          },
          "month-short": {
            "-1": "w zeszłym mies.",
            0: "w tym mies.",
            1: "w przyszłym mies.",
            future: {
              few: "za {0} mies.",
              many: "za {0} mies.",
              one: "za {0} mies.",
              other: "za {0} mies."
            },
            past: {
              few: "{0} mies. temu",
              many: "{0} mies. temu",
              one: "{0} mies. temu",
              other: "{0} mies. temu"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "w zeszłym kwartale",
            0: "w tym kwartale",
            1: "w przyszłym kwartale",
            future: {
              few: "za {0} kwartały",
              many: "za {0} kwartałów",
              one: "za {0} kwartał",
              other: "za {0} kwartału"
            },
            past: {
              few: "{0} kwartały temu",
              many: "{0} kwartałów temu",
              one: "{0} kwartał temu",
              other: "{0} kwartału temu"
            }
          },
          "quarter-narrow": {
            "-1": "w zeszłym kwartale",
            0: "w tym kwartale",
            1: "w przyszłym kwartale",
            future: {
              few: "za {0} kw.",
              many: "za {0} kw.",
              one: "za {0} kw.",
              other: "za {0} kw."
            },
            past: {
              few: "{0} kw. temu",
              many: "{0} kw. temu",
              one: "{0} kw. temu",
              other: "{0} kw. temu"
            }
          },
          "quarter-short": {
            "-1": "w zeszłym kwartale",
            0: "w tym kwartale",
            1: "w przyszłym kwartale",
            future: {
              few: "za {0} kw.",
              many: "za {0} kw.",
              one: "za {0} kw.",
              other: "za {0} kw."
            },
            past: {
              few: "{0} kw. temu",
              many: "{0} kw. temu",
              one: "{0} kw. temu",
              other: "{0} kw. temu"
            }
          },
          second: {
            0: "teraz",
            future: {
              few: "za {0} sekundy",
              many: "za {0} sekund",
              one: "za {0} sekundę",
              other: "za {0} sekundy"
            },
            past: {
              few: "{0} sekundy temu",
              many: "{0} sekund temu",
              one: "{0} sekundę temu",
              other: "{0} sekundy temu"
            }
          },
          "second-narrow": {
            0: "teraz",
            future: {
              few: "za {0} s",
              many: "za {0} s",
              one: "za {0} s",
              other: "za {0} s"
            },
            past: {
              few: "{0} s temu",
              many: "{0} s temu",
              one: "{0} s temu",
              other: "{0} s temu"
            }
          },
          "second-short": {
            0: "teraz",
            future: {
              few: "za {0} sek.",
              many: "za {0} sek.",
              one: "za {0} sek.",
              other: "za {0} sek."
            },
            past: {
              few: "{0} sek. temu",
              many: "{0} sek. temu",
              one: "{0} sek. temu",
              other: "{0} sek. temu"
            }
          },
          week: {
            "-1": "w zeszłym tygodniu",
            0: "w tym tygodniu",
            1: "w przyszłym tygodniu",
            future: {
              few: "za {0} tygodnie",
              many: "za {0} tygodni",
              one: "za {0} tydzień",
              other: "za {0} tygodnia"
            },
            past: {
              few: "{0} tygodnie temu",
              many: "{0} tygodni temu",
              one: "{0} tydzień temu",
              other: "{0} tygodnia temu"
            }
          },
          "week-narrow": {
            "-1": "w zeszłym tyg.",
            0: "w tym tyg.",
            1: "w przyszłym tyg.",
            future: {
              few: "za {0} tyg.",
              many: "za {0} tyg.",
              one: "za {0} tydz.",
              other: "za {0} tyg."
            },
            past: {
              few: "{0} tyg. temu",
              many: "{0} tyg. temu",
              one: "{0} tydz. temu",
              other: "{0} tyg. temu"
            }
          },
          "week-short": {
            "-1": "w zeszłym tyg.",
            0: "w tym tyg.",
            1: "w przyszłym tyg.",
            future: {
              few: "za {0} tyg.",
              many: "za {0} tyg.",
              one: "za {0} tydz.",
              other: "za {0} tyg."
            },
            past: {
              few: "{0} tyg. temu",
              many: "{0} tyg. temu",
              one: "{0} tydz. temu",
              other: "{0} tyg. temu"
            }
          },
          year: {
            "-1": "w zeszłym roku",
            0: "w tym roku",
            1: "w przyszłym roku",
            future: {
              few: "za {0} lata",
              many: "za {0} lat",
              one: "za {0} rok",
              other: "za {0} roku"
            },
            past: {
              few: "{0} lata temu",
              many: "{0} lat temu",
              one: "{0} rok temu",
              other: "{0} roku temu"
            }
          },
          "year-narrow": {
            "-1": "w zeszłym roku",
            0: "w tym roku",
            1: "w przyszłym roku",
            future: {
              few: "za {0} lata",
              many: "za {0} lat",
              one: "za {0} rok",
              other: "za {0} roku"
            },
            past: {
              few: "{0} lata temu",
              many: "{0} lat temu",
              one: "{0} rok temu",
              other: "{0} roku temu"
            }
          },
          "year-short": {
            "-1": "w zeszłym roku",
            0: "w tym roku",
            1: "w przyszłym roku",
            future: {
              few: "za {0} lata",
              many: "za {0} lat",
              one: "za {0} rok",
              other: "za {0} roku"
            },
            past: {
              few: "{0} lata temu",
              many: "{0} lat temu",
              one: "{0} rok temu",
              other: "{0} roku temu"
            }
          }
        },
        locale: "pl"
      })
    }
  }
]);