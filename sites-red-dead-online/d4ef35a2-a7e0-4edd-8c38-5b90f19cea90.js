! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d4ef35a2-a7e0-4edd-8c38-5b90f19cea90", e._sentryDebugIdIdentifier = "sentry-dbid-d4ef35a2-a7e0-4edd-8c38-5b90f19cea90")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [2243], {
    77190: () => {
      Intl.RelativeTimeFormat && "function" == typeof Intl.RelativeTimeFormat.__addLocaleData && Intl.RelativeTimeFormat.__addLocaleData({
        data: {
          day: {
            "-1": "yesterday",
            0: "today",
            1: "tomorrow",
            future: {
              one: "in {0} day",
              other: "in {0} days"
            },
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            }
          },
          "day-narrow": {
            "-1": "yesterday",
            0: "today",
            1: "tomorrow",
            future: {
              one: "in {0}d",
              other: "in {0}d"
            },
            past: {
              one: "{0}d ago",
              other: "{0}d ago"
            }
          },
          "day-short": {
            "-1": "yesterday",
            0: "today",
            1: "tomorrow",
            future: {
              one: "in {0} day",
              other: "in {0} days"
            },
            past: {
              one: "{0} day ago",
              other: "{0} days ago"
            }
          },
          hour: {
            0: "this hour",
            future: {
              one: "in {0} hour",
              other: "in {0} hours"
            },
            past: {
              one: "{0} hour ago",
              other: "{0} hours ago"
            }
          },
          "hour-narrow": {
            0: "this hour",
            future: {
              one: "in {0}h",
              other: "in {0}h"
            },
            past: {
              one: "{0}h ago",
              other: "{0}h ago"
            }
          },
          "hour-short": {
            0: "this hour",
            future: {
              one: "in {0} hr.",
              other: "in {0} hr."
            },
            past: {
              one: "{0} hr. ago",
              other: "{0} hr. ago"
            }
          },
          minute: {
            0: "this minute",
            future: {
              one: "in {0} minute",
              other: "in {0} minutes"
            },
            past: {
              one: "{0} minute ago",
              other: "{0} minutes ago"
            }
          },
          "minute-narrow": {
            0: "this minute",
            future: {
              one: "in {0}m",
              other: "in {0}m"
            },
            past: {
              one: "{0}m ago",
              other: "{0}m ago"
            }
          },
          "minute-short": {
            0: "this minute",
            future: {
              one: "in {0} min.",
              other: "in {0} min."
            },
            past: {
              one: "{0} min. ago",
              other: "{0} min. ago"
            }
          },
          month: {
            "-1": "last month",
            0: "this month",
            1: "next month",
            future: {
              one: "in {0} month",
              other: "in {0} months"
            },
            past: {
              one: "{0} month ago",
              other: "{0} months ago"
            }
          },
          "month-narrow": {
            "-1": "last mo.",
            0: "this mo.",
            1: "next mo.",
            future: {
              one: "in {0}mo",
              other: "in {0}mo"
            },
            past: {
              one: "{0}mo ago",
              other: "{0}mo ago"
            }
          },
          "month-short": {
            "-1": "last mo.",
            0: "this mo.",
            1: "next mo.",
            future: {
              one: "in {0} mo.",
              other: "in {0} mo."
            },
            past: {
              one: "{0} mo. ago",
              other: "{0} mo. ago"
            }
          },
          nu: ["latn"],
          quarter: {
            "-1": "last quarter",
            0: "this quarter",
            1: "next quarter",
            future: {
              one: "in {0} quarter",
              other: "in {0} quarters"
            },
            past: {
              one: "{0} quarter ago",
              other: "{0} quarters ago"
            }
          },
          "quarter-narrow": {
            "-1": "last qtr.",
            0: "this qtr.",
            1: "next qtr.",
            future: {
              one: "in {0}q",
              other: "in {0}q"
            },
            past: {
              one: "{0}q ago",
              other: "{0}q ago"
            }
          },
          "quarter-short": {
            "-1": "last qtr.",
            0: "this qtr.",
            1: "next qtr.",
            future: {
              one: "in {0} qtr.",
              other: "in {0} qtrs."
            },
            past: {
              one: "{0} qtr. ago",
              other: "{0} qtrs. ago"
            }
          },
          second: {
            0: "now",
            future: {
              one: "in {0} second",
              other: "in {0} seconds"
            },
            past: {
              one: "{0} second ago",
              other: "{0} seconds ago"
            }
          },
          "second-narrow": {
            0: "now",
            future: {
              one: "in {0}s",
              other: "in {0}s"
            },
            past: {
              one: "{0}s ago",
              other: "{0}s ago"
            }
          },
          "second-short": {
            0: "now",
            future: {
              one: "in {0} sec.",
              other: "in {0} sec."
            },
            past: {
              one: "{0} sec. ago",
              other: "{0} sec. ago"
            }
          },
          week: {
            "-1": "last week",
            0: "this week",
            1: "next week",
            future: {
              one: "in {0} week",
              other: "in {0} weeks"
            },
            past: {
              one: "{0} week ago",
              other: "{0} weeks ago"
            }
          },
          "week-narrow": {
            "-1": "last wk.",
            0: "this wk.",
            1: "next wk.",
            future: {
              one: "in {0}w",
              other: "in {0}w"
            },
            past: {
              one: "{0}w ago",
              other: "{0}w ago"
            }
          },
          "week-short": {
            "-1": "last wk.",
            0: "this wk.",
            1: "next wk.",
            future: {
              one: "in {0} wk.",
              other: "in {0} wk."
            },
            past: {
              one: "{0} wk. ago",
              other: "{0} wk. ago"
            }
          },
          year: {
            "-1": "last year",
            0: "this year",
            1: "next year",
            future: {
              one: "in {0} year",
              other: "in {0} years"
            },
            past: {
              one: "{0} year ago",
              other: "{0} years ago"
            }
          },
          "year-narrow": {
            "-1": "last yr.",
            0: "this yr.",
            1: "next yr.",
            future: {
              one: "in {0}y",
              other: "in {0}y"
            },
            past: {
              one: "{0}y ago",
              other: "{0}y ago"
            }
          },
          "year-short": {
            "-1": "last yr.",
            0: "this yr.",
            1: "next yr.",
            future: {
              one: "in {0} yr.",
              other: "in {0} yr."
            },
            past: {
              one: "{0} yr. ago",
              other: "{0} yr. ago"
            }
          }
        },
        locale: "en"
      })
    }
  }
]);