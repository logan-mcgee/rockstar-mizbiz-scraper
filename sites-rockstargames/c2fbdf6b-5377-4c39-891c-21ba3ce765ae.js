try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2fbdf6b-5377-4c39-891c-21ba3ce765ae", e._sentryDebugIdIdentifier = "sentry-dbid-c2fbdf6b-5377-4c39-891c-21ba3ce765ae")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9028], {
    31239: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "어제",
            "-2": "그저께",
            0: "오늘",
            1: "내일",
            2: "모레",
            future: {
              other: "{0}일 후"
            },
            past: {
              other: "{0}일 전"
            }
          },
          "day-narrow": {
            "-1": "어제",
            "-2": "그저께",
            0: "오늘",
            1: "내일",
            2: "모레",
            future: {
              other: "{0}일 후"
            },
            past: {
              other: "{0}일 전"
            }
          },
          "day-short": {
            "-1": "어제",
            "-2": "그저께",
            0: "오늘",
            1: "내일",
            2: "모레",
            future: {
              other: "{0}일 후"
            },
            past: {
              other: "{0}일 전"
            }
          },
          hour: {
            0: "현재 시간",
            future: {
              other: "{0}시간 후"
            },
            past: {
              other: "{0}시간 전"
            }
          },
          "hour-narrow": {
            0: "현재 시간",
            future: {
              other: "{0}시간 후"
            },
            past: {
              other: "{0}시간 전"
            }
          },
          "hour-short": {
            0: "현재 시간",
            future: {
              other: "{0}시간 후"
            },
            past: {
              other: "{0}시간 전"
            }
          },
          minute: {
            0: "현재 분",
            future: {
              other: "{0}분 후"
            },
            past: {
              other: "{0}분 전"
            }
          },
          "minute-narrow": {
            0: "현재 분",
            future: {
              other: "{0}분 후"
            },
            past: {
              other: "{0}분 전"
            }
          },
          "minute-short": {
            0: "현재 분",
            future: {
              other: "{0}분 후"
            },
            past: {
              other: "{0}분 전"
            }
          },
          month: {
            "-1": "지난달",
            0: "이번 달",
            1: "다음 달",
            future: {
              other: "{0}개월 후"
            },
            past: {
              other: "{0}개월 전"
            }
          },
          "month-narrow": {
            "-1": "지난달",
            0: "이번 달",
            1: "다음 달",
            future: {
              other: "{0}개월 후"
            },
            past: {
              other: "{0}개월 전"
            }
          },
          "month-short": {
            "-1": "지난달",
            0: "이번 달",
            1: "다음 달",
            future: {
              other: "{0}개월 후"
            },
            past: {
              other: "{0}개월 전"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "지난 분기",
            0: "이번 분기",
            1: "다음 분기",
            future: {
              other: "{0}분기 후"
            },
            past: {
              other: "{0}분기 전"
            }
          },
          "quarter-narrow": {
            "-1": "지난 분기",
            0: "이번 분기",
            1: "다음 분기",
            future: {
              other: "{0}분기 후"
            },
            past: {
              other: "{0}분기 전"
            }
          },
          "quarter-short": {
            "-1": "지난 분기",
            0: "이번 분기",
            1: "다음 분기",
            future: {
              other: "{0}분기 후"
            },
            past: {
              other: "{0}분기 전"
            }
          },
          second: {
            0: "지금",
            future: {
              other: "{0}초 후"
            },
            past: {
              other: "{0}초 전"
            }
          },
          "second-narrow": {
            0: "지금",
            future: {
              other: "{0}초 후"
            },
            past: {
              other: "{0}초 전"
            }
          },
          "second-short": {
            0: "지금",
            future: {
              other: "{0}초 후"
            },
            past: {
              other: "{0}초 전"
            }
          },
          week: {
            "-1": "지난주",
            0: "이번 주",
            1: "다음 주",
            future: {
              other: "{0}주 후"
            },
            past: {
              other: "{0}주 전"
            }
          },
          "week-narrow": {
            "-1": "지난주",
            0: "이번 주",
            1: "다음 주",
            future: {
              other: "{0}주 후"
            },
            past: {
              other: "{0}주 전"
            }
          },
          "week-short": {
            "-1": "지난주",
            0: "이번 주",
            1: "다음 주",
            future: {
              other: "{0}주 후"
            },
            past: {
              other: "{0}주 전"
            }
          },
          year: {
            "-1": "작년",
            0: "올해",
            1: "내년",
            future: {
              other: "{0}년 후"
            },
            past: {
              other: "{0}년 전"
            }
          },
          "year-narrow": {
            "-1": "작년",
            0: "올해",
            1: "내년",
            future: {
              other: "{0}년 후"
            },
            past: {
              other: "{0}년 전"
            }
          },
          "year-short": {
            "-1": "작년",
            0: "올해",
            1: "내년",
            future: {
              other: "{0}년 후"
            },
            past: {
              other: "{0}년 전"
            }
          }
        },
        locale: "ko"
      })
    }
  }
]);