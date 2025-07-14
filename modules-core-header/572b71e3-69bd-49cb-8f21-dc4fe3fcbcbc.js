try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "572b71e3-69bd-49cb-8f21-dc4fe3fcbcbc", e._sentryDebugIdIdentifier = "sentry-dbid-572b71e3-69bd-49cb-8f21-dc4fe3fcbcbc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9377], {
    66083: () => {
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