try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "cf9a96ab-f3b2-4471-ba62-8d5ee86c554f", e._sentryDebugIdIdentifier = "sentry-dbid-cf9a96ab-f3b2-4471-ba62-8d5ee86c554f")
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
  [7453], {
    63695: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "вчера",
            "-2": "позавчера",
            0: "сегодня",
            1: "завтра",
            2: "послезавтра",
            future: {
              few: "через {0} дня",
              many: "через {0} дней",
              one: "через {0} день",
              other: "через {0} дня"
            },
            past: {
              few: "{0} дня назад",
              many: "{0} дней назад",
              one: "{0} день назад",
              other: "{0} дня назад"
            }
          },
          "day-narrow": {
            "-1": "вчера",
            "-2": "позавчера",
            0: "сегодня",
            1: "завтра",
            2: "послезавтра",
            future: {
              few: "+{0} дн.",
              many: "+{0} дн.",
              one: "+{0} дн.",
              other: "+{0} дн."
            },
            past: {
              few: "-{0} дн.",
              many: "-{0} дн.",
              one: "-{0} дн.",
              other: "-{0} дн."
            }
          },
          "day-short": {
            "-1": "вчера",
            "-2": "позавчера",
            0: "сегодня",
            1: "завтра",
            2: "послезавтра",
            future: {
              few: "через {0} дн.",
              many: "через {0} дн.",
              one: "через {0} дн.",
              other: "через {0} дн."
            },
            past: {
              few: "{0} дн. назад",
              many: "{0} дн. назад",
              one: "{0} дн. назад",
              other: "{0} дн. назад"
            }
          },
          hour: {
            0: "в этот час",
            future: {
              few: "через {0} часа",
              many: "через {0} часов",
              one: "через {0} час",
              other: "через {0} часа"
            },
            past: {
              few: "{0} часа назад",
              many: "{0} часов назад",
              one: "{0} час назад",
              other: "{0} часа назад"
            }
          },
          "hour-narrow": {
            0: "в этот час",
            future: {
              few: "+{0} ч",
              many: "+{0} ч",
              one: "+{0} ч",
              other: "+{0} ч"
            },
            past: {
              few: "-{0} ч",
              many: "-{0} ч",
              one: "-{0} ч",
              other: "-{0} ч"
            }
          },
          "hour-short": {
            0: "в этот час",
            future: {
              few: "через {0} ч",
              many: "через {0} ч",
              one: "через {0} ч",
              other: "через {0} ч"
            },
            past: {
              few: "{0} ч назад",
              many: "{0} ч назад",
              one: "{0} ч назад",
              other: "{0} ч назад"
            }
          },
          minute: {
            0: "в эту минуту",
            future: {
              few: "через {0} минуты",
              many: "через {0} минут",
              one: "через {0} минуту",
              other: "через {0} минуты"
            },
            past: {
              few: "{0} минуты назад",
              many: "{0} минут назад",
              one: "{0} минуту назад",
              other: "{0} минуты назад"
            }
          },
          "minute-narrow": {
            0: "в эту минуту",
            future: {
              few: "+{0} мин",
              many: "+{0} мин",
              one: "+{0} мин",
              other: "+{0} мин"
            },
            past: {
              few: "-{0} мин",
              many: "-{0} мин",
              one: "-{0} мин",
              other: "-{0} мин"
            }
          },
          "minute-short": {
            0: "в эту минуту",
            future: {
              few: "через {0} мин.",
              many: "через {0} мин.",
              one: "через {0} мин.",
              other: "через {0} мин."
            },
            past: {
              few: "{0} мин. назад",
              many: "{0} мин. назад",
              one: "{0} мин. назад",
              other: "{0} мин. назад"
            }
          },
          month: {
            "-1": "в прошлом месяце",
            0: "в этом месяце",
            1: "в следующем месяце",
            future: {
              few: "через {0} месяца",
              many: "через {0} месяцев",
              one: "через {0} месяц",
              other: "через {0} месяца"
            },
            past: {
              few: "{0} месяца назад",
              many: "{0} месяцев назад",
              one: "{0} месяц назад",
              other: "{0} месяца назад"
            }
          },
          "month-narrow": {
            "-1": "в пр. мес.",
            0: "в эт. мес.",
            1: "в след. мес.",
            future: {
              few: "+{0} мес.",
              many: "+{0} мес.",
              one: "+{0} мес.",
              other: "+{0} мес."
            },
            past: {
              few: "-{0} мес.",
              many: "-{0} мес.",
              one: "-{0} мес.",
              other: "-{0} мес."
            }
          },
          "month-short": {
            "-1": "в прошлом мес.",
            0: "в этом мес.",
            1: "в следующем мес.",
            future: {
              few: "через {0} мес.",
              many: "через {0} мес.",
              one: "через {0} мес.",
              other: "через {0} мес."
            },
            past: {
              few: "{0} мес. назад",
              many: "{0} мес. назад",
              one: "{0} мес. назад",
              other: "{0} мес. назад"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "в прошлом квартале",
            0: "в текущем квартале",
            1: "в следующем квартале",
            future: {
              few: "через {0} квартала",
              many: "через {0} кварталов",
              one: "через {0} квартал",
              other: "через {0} квартала"
            },
            past: {
              few: "{0} квартала назад",
              many: "{0} кварталов назад",
              one: "{0} квартал назад",
              other: "{0} квартала назад"
            }
          },
          "quarter-narrow": {
            "-1": "посл. кв.",
            0: "тек. кв.",
            1: "след. кв.",
            future: {
              few: "+{0} кв.",
              many: "+{0} кв.",
              one: "+{0} кв.",
              other: "+{0} кв."
            },
            past: {
              few: "-{0} кв.",
              many: "-{0} кв.",
              one: "-{0} кв.",
              other: "-{0} кв."
            }
          },
          "quarter-short": {
            "-1": "последний кв.",
            0: "текущий кв.",
            1: "следующий кв.",
            future: {
              few: "через {0} кв.",
              many: "через {0} кв.",
              one: "через {0} кв.",
              other: "через {0} кв."
            },
            past: {
              few: "{0} кв. назад",
              many: "{0} кв. назад",
              one: "{0} кв. назад",
              other: "{0} кв. назад"
            }
          },
          second: {
            0: "сейчас",
            future: {
              few: "через {0} секунды",
              many: "через {0} секунд",
              one: "через {0} секунду",
              other: "через {0} секунды"
            },
            past: {
              few: "{0} секунды назад",
              many: "{0} секунд назад",
              one: "{0} секунду назад",
              other: "{0} секунды назад"
            }
          },
          "second-narrow": {
            0: "сейчас",
            future: {
              few: "+{0} с",
              many: "+{0} с",
              one: "+{0} с",
              other: "+{0} с"
            },
            past: {
              few: "-{0} с",
              many: "-{0} с",
              one: "-{0} с",
              other: "-{0} с"
            }
          },
          "second-short": {
            0: "сейчас",
            future: {
              few: "через {0} сек.",
              many: "через {0} сек.",
              one: "через {0} сек.",
              other: "через {0} сек."
            },
            past: {
              few: "{0} сек. назад",
              many: "{0} сек. назад",
              one: "{0} сек. назад",
              other: "{0} сек. назад"
            }
          },
          week: {
            "-1": "на прошлой неделе",
            0: "на этой неделе",
            1: "на следующей неделе",
            future: {
              few: "через {0} недели",
              many: "через {0} недель",
              one: "через {0} неделю",
              other: "через {0} недели"
            },
            past: {
              few: "{0} недели назад",
              many: "{0} недель назад",
              one: "{0} неделю назад",
              other: "{0} недели назад"
            }
          },
          "week-narrow": {
            "-1": "на пр. нед.",
            0: "на эт. нед.",
            1: "на след. нед.",
            future: {
              few: "+{0} нед.",
              many: "+{0} нед.",
              one: "+{0} нед.",
              other: "+{0} нед."
            },
            past: {
              few: "-{0} нед.",
              many: "-{0} нед.",
              one: "-{0} нед.",
              other: "-{0} нед."
            }
          },
          "week-short": {
            "-1": "на прошлой нед.",
            0: "на этой нед.",
            1: "на следующей нед.",
            future: {
              few: "через {0} нед.",
              many: "через {0} нед.",
              one: "через {0} нед.",
              other: "через {0} нед."
            },
            past: {
              few: "{0} нед. назад",
              many: "{0} нед. назад",
              one: "{0} нед. назад",
              other: "{0} нед. назад"
            }
          },
          year: {
            "-1": "в прошлом году",
            0: "в этом году",
            1: "в следующем году",
            future: {
              few: "через {0} года",
              many: "через {0} лет",
              one: "через {0} год",
              other: "через {0} года"
            },
            past: {
              few: "{0} года назад",
              many: "{0} лет назад",
              one: "{0} год назад",
              other: "{0} года назад"
            }
          },
          "year-narrow": {
            "-1": "в пр. г.",
            0: "в эт. г.",
            1: "в сл. г.",
            future: {
              few: "+{0} г.",
              many: "+{0} л.",
              one: "+{0} г.",
              other: "+{0} г."
            },
            past: {
              few: "-{0} г.",
              many: "-{0} л.",
              one: "-{0} г.",
              other: "-{0} г."
            }
          },
          "year-short": {
            "-1": "в прошлом г.",
            0: "в этом г.",
            1: "в след. г.",
            future: {
              few: "через {0} г.",
              many: "через {0} л.",
              one: "через {0} г.",
              other: "через {0} г."
            },
            past: {
              few: "{0} г. назад",
              many: "{0} л. назад",
              one: "{0} г. назад",
              other: "{0} г. назад"
            }
          }
        },
        locale: "ru"
      })
    }
  }
]);