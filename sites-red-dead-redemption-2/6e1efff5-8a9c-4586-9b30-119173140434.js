try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6e1efff5-8a9c-4586-9b30-119173140434", e._sentryDebugIdIdentifier = "sentry-dbid-6e1efff5-8a9c-4586-9b30-119173140434")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8880], {
    47188: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "昨天",
            "-2": "前天",
            0: "今天",
            1: "明天",
            2: "后天",
            future: {
              other: "{0}天后"
            },
            past: {
              other: "{0}天前"
            }
          },
          "day-narrow": {
            "-1": "昨天",
            "-2": "前天",
            0: "今天",
            1: "明天",
            2: "后天",
            future: {
              other: "{0}天后"
            },
            past: {
              other: "{0}天前"
            }
          },
          "day-short": {
            "-1": "昨天",
            "-2": "前天",
            0: "今天",
            1: "明天",
            2: "后天",
            future: {
              other: "{0}天后"
            },
            past: {
              other: "{0}天前"
            }
          },
          hour: {
            0: "这一时间 / 此时",
            future: {
              other: "{0}小时后"
            },
            past: {
              other: "{0}小时前"
            }
          },
          "hour-narrow": {
            0: "这一时间 / 此时",
            future: {
              other: "{0}小时后"
            },
            past: {
              other: "{0}小时前"
            }
          },
          "hour-short": {
            0: "这一时间 / 此时",
            future: {
              other: "{0}小时后"
            },
            past: {
              other: "{0}小时前"
            }
          },
          minute: {
            0: "此刻",
            future: {
              other: "{0}分钟后"
            },
            past: {
              other: "{0}分钟前"
            }
          },
          "minute-narrow": {
            0: "此刻",
            future: {
              other: "{0}分钟后"
            },
            past: {
              other: "{0}分钟前"
            }
          },
          "minute-short": {
            0: "此刻",
            future: {
              other: "{0}分钟后"
            },
            past: {
              other: "{0}分钟前"
            }
          },
          month: {
            "-1": "上个月",
            0: "本月",
            1: "下个月",
            future: {
              other: "{0}个月后"
            },
            past: {
              other: "{0}个月前"
            }
          },
          "month-narrow": {
            "-1": "上个月",
            0: "本月",
            1: "下个月",
            future: {
              other: "{0}个月后"
            },
            past: {
              other: "{0}个月前"
            }
          },
          "month-short": {
            "-1": "上个月",
            0: "本月",
            1: "下个月",
            future: {
              other: "{0}个月后"
            },
            past: {
              other: "{0}个月前"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "上季度",
            0: "本季度",
            1: "下季度",
            future: {
              other: "{0}个季度后"
            },
            past: {
              other: "{0}个季度前"
            }
          },
          "quarter-narrow": {
            "-1": "上季度",
            0: "本季度",
            1: "下季度",
            future: {
              other: "{0}个季度后"
            },
            past: {
              other: "{0}个季度前"
            }
          },
          "quarter-short": {
            "-1": "上季度",
            0: "本季度",
            1: "下季度",
            future: {
              other: "{0}个季度后"
            },
            past: {
              other: "{0}个季度前"
            }
          },
          second: {
            0: "现在",
            future: {
              other: "{0}秒钟后"
            },
            past: {
              other: "{0}秒钟前"
            }
          },
          "second-narrow": {
            0: "现在",
            future: {
              other: "{0}秒后"
            },
            past: {
              other: "{0}秒前"
            }
          },
          "second-short": {
            0: "现在",
            future: {
              other: "{0}秒后"
            },
            past: {
              other: "{0}秒前"
            }
          },
          week: {
            "-1": "上周",
            0: "本周",
            1: "下周",
            future: {
              other: "{0}周后"
            },
            past: {
              other: "{0}周前"
            }
          },
          "week-narrow": {
            "-1": "上周",
            0: "本周",
            1: "下周",
            future: {
              other: "{0}周后"
            },
            past: {
              other: "{0}周前"
            }
          },
          "week-short": {
            "-1": "上周",
            0: "本周",
            1: "下周",
            future: {
              other: "{0}周后"
            },
            past: {
              other: "{0}周前"
            }
          },
          year: {
            "-1": "去年",
            0: "今年",
            1: "明年",
            future: {
              other: "{0}年后"
            },
            past: {
              other: "{0}年前"
            }
          },
          "year-narrow": {
            "-1": "去年",
            0: "今年",
            1: "明年",
            future: {
              other: "{0}年后"
            },
            past: {
              other: "{0}年前"
            }
          },
          "year-short": {
            "-1": "去年",
            0: "今年",
            1: "明年",
            future: {
              other: "{0}年后"
            },
            past: {
              other: "{0}年前"
            }
          }
        },
        locale: "zh"
      })
    }
  }
]);