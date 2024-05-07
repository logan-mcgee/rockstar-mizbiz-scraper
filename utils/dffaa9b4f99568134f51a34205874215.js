! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73545a06-4d9f-4b62-92a4-8d6a7b0daeca", e._sentryDebugIdIdentifier = "sentry-dbid-73545a06-4d9f-4b62-92a4-8d6a7b0daeca")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [776], {
    576: (e, t, o) => {
      var a = o(664),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, o) {
        var a, d = {},
          c = null,
          i = null;
        for (a in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (i = t.ref), t) n.call(t, a) && !l.hasOwnProperty(a) && (d[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === d[a] && (d[a] = t[a]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
    },
    240: (e, t, o) => {
      e.exports = o(576)
    },
    776: (e, t, o) => {
      o.r(t), o.d(t, {
        ArraySort: () => c,
        detectIfWeShouldAnchorSomewhere: () => s,
        flattenObjectPreserveNesting: () => i,
        getCdnPrefix: () => g,
        getGen8Consoles: () => y,
        getGen9Consoles: () => m,
        importAll: () => d,
        nestFlattenedObject: () => f,
        prettyPrint: () => u,
        scrollToElement: () => n,
        stripHTML: () => p
      });
      var a = o(660),
        r = o.n(a);
      const n = e => {
          let {
            element: t
          } = e;
          window.scrollTo({
            top: t.offsetTop,
            behavior: "smooth"
          })
        },
        s = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e));
          o && n({
            element: o
          })
        };
      var l = o(240);
      const d = e => e.keys().forEach(e),
        c = {
          alphabetical: {
            asc: (e, t) => [...e].sort(((e, o) => e[t].localeCompare(o[t], "en", {
              ignorePunctuation: !0
            }))).reverse(),
            desc: (e, t) => [...e].sort(((e, o) => e[t].localeCompare(o[t], "en", {
              ignorePunctuation: !0
            })))
          },
          date: {
            asc: (e, t) => [...e].sort(((e, o) => new Date(e[t]).getTime() > new Date(o[t]).getTime() ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, o) => new Date(e[t]).getTime() < new Date(o[t]).getTime() ? 1 : -1))
          },
          numerical: {
            asc: (e, t) => [...e].sort(((e, o) => e[t] > o[t] ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, o) => e[t] < o[t] ? 1 : -1))
          }
        },
        i = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const o = {};
          return Object.keys(e).forEach((a => {
            const r = t ? `${t}.${a}` : a;
            "object" == typeof e[a] && null !== e[a] ? Object.assign(o, i(e[a], r)) : o[r] = e[a]
          })), o
        },
        f = e => {
          const t = {};
          return Object.keys(e).forEach((o => {
            if (o.indexOf(".") > -1) {
              const a = e[o],
                n = o.split(".").reverse().reduce(((e, t, o) => 1 === o ? {
                  [t]: {
                    [e]: a
                  }
                } : {
                  [t]: e
                }));
              r().merge(t, n)
            } else r().merge(t, {
              [o]: e[o]
            })
          })), t
        },
        p = e => e.replace(/(<([^>]+)>)/gi, ""),
        u = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, l.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        b = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        g = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return b.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        y = () => ["xbox360", "xboxone", "ps4", "ps3", "pc"],
        m = () => ["xboxsx", "ps5"]
    }
  }
]);