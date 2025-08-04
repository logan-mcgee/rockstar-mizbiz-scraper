try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "56091d98-2afd-47bc-a3e2-85bbaab83ae3", e._sentryDebugIdIdentifier = "sentry-dbid-56091d98-2afd-47bc-a3e2-85bbaab83ae3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [9377], {
    31647: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "昨日",
            "-2": "一昨日",
            0: "今日",
            1: "明日",
            2: "明後日",
            future: {
              other: "{0} 日後"
            },
            past: {
              other: "{0} 日前"
            }
          },
          "day-narrow": {
            "-1": "昨日",
            "-2": "一昨日",
            0: "今日",
            1: "明日",
            2: "明後日",
            future: {
              other: "{0}日後"
            },
            past: {
              other: "{0}日前"
            }
          },
          "day-short": {
            "-1": "昨日",
            "-2": "一昨日",
            0: "今日",
            1: "明日",
            2: "明後日",
            future: {
              other: "{0} 日後"
            },
            past: {
              other: "{0} 日前"
            }
          },
          hour: {
            0: "1 時間以内",
            future: {
              other: "{0} 時間後"
            },
            past: {
              other: "{0} 時間前"
            }
          },
          "hour-narrow": {
            0: "1 時間以内",
            future: {
              other: "{0}時間後"
            },
            past: {
              other: "{0}時間前"
            }
          },
          "hour-short": {
            0: "1 時間以内",
            future: {
              other: "{0} 時間後"
            },
            past: {
              other: "{0} 時間前"
            }
          },
          minute: {
            0: "1 分以内",
            future: {
              other: "{0} 分後"
            },
            past: {
              other: "{0} 分前"
            }
          },
          "minute-narrow": {
            0: "1 分以内",
            future: {
              other: "{0}分後"
            },
            past: {
              other: "{0}分前"
            }
          },
          "minute-short": {
            0: "1 分以内",
            future: {
              other: "{0} 分後"
            },
            past: {
              other: "{0} 分前"
            }
          },
          month: {
            "-1": "先月",
            0: "今月",
            1: "来月",
            future: {
              other: "{0} か月後"
            },
            past: {
              other: "{0} か月前"
            }
          },
          "month-narrow": {
            "-1": "先月",
            0: "今月",
            1: "来月",
            future: {
              other: "{0}か月後"
            },
            past: {
              other: "{0}か月前"
            }
          },
          "month-short": {
            "-1": "先月",
            0: "今月",
            1: "来月",
            future: {
              other: "{0} か月後"
            },
            past: {
              other: "{0} か月前"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "前四半期",
            0: "今四半期",
            1: "翌四半期",
            future: {
              other: "{0} 四半期後"
            },
            past: {
              other: "{0} 四半期前"
            }
          },
          "quarter-narrow": {
            "-1": "前四半期",
            0: "今四半期",
            1: "翌四半期",
            future: {
              other: "{0}四半期後"
            },
            past: {
              other: "{0}四半期前"
            }
          },
          "quarter-short": {
            "-1": "前四半期",
            0: "今四半期",
            1: "翌四半期",
            future: {
              other: "{0} 四半期後"
            },
            past: {
              other: "{0} 四半期前"
            }
          },
          second: {
            0: "今",
            future: {
              other: "{0} 秒後"
            },
            past: {
              other: "{0} 秒前"
            }
          },
          "second-narrow": {
            0: "今",
            future: {
              other: "{0}秒後"
            },
            past: {
              other: "{0}秒前"
            }
          },
          "second-short": {
            0: "今",
            future: {
              other: "{0} 秒後"
            },
            past: {
              other: "{0} 秒前"
            }
          },
          week: {
            "-1": "先週",
            0: "今週",
            1: "来週",
            future: {
              other: "{0} 週間後"
            },
            past: {
              other: "{0} 週間前"
            }
          },
          "week-narrow": {
            "-1": "先週",
            0: "今週",
            1: "来週",
            future: {
              other: "{0}週間後"
            },
            past: {
              other: "{0}週間前"
            }
          },
          "week-short": {
            "-1": "先週",
            0: "今週",
            1: "来週",
            future: {
              other: "{0} 週間後"
            },
            past: {
              other: "{0} 週間前"
            }
          },
          year: {
            "-1": "昨年",
            0: "今年",
            1: "来年",
            future: {
              other: "{0} 年後"
            },
            past: {
              other: "{0} 年前"
            }
          },
          "year-narrow": {
            "-1": "昨年",
            0: "今年",
            1: "来年",
            future: {
              other: "{0}年後"
            },
            past: {
              other: "{0}年前"
            }
          },
          "year-short": {
            "-1": "昨年",
            0: "今年",
            1: "来年",
            future: {
              other: "{0} 年後"
            },
            past: {
              other: "{0} 年前"
            }
          }
        },
        locale: "ja"
      })
    }
  }
]);