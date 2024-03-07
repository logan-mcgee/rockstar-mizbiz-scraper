/*! For license information please see 0b6be617d71a952a3837ddf3c92e223d.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aad87353-78fa-4b2c-8c87-548983c69fa1", e._sentryDebugIdIdentifier = "sentry-dbid-aad87353-78fa-4b2c-8c87-548983c69fa1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [848], {
    996: (e, t, a) => {
      var o = a(200),
        r = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, a) {
        var o, d = {},
          c = null,
          f = null;
        for (o in void 0 !== a && (c = "" + a), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (f = t.ref), t) n.call(t, o) && !l.hasOwnProperty(o) && (d[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === d[o] && (d[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: f,
          props: d,
          _owner: s.current
        }
      }
    },
    480: (e, t, a) => {
      e.exports = a(996)
    },
    848: (e, t, a) => {
      a.r(t), a.d(t, {
        ArraySort: () => c,
        detectIfWeShouldAnchorSomewhere: () => s,
        flattenObjectPreserveNesting: () => f,
        getCdnPrefix: () => y,
        getGen8Consoles: () => m,
        getGen9Consoles: () => b,
        importAll: () => d,
        nestFlattenedObject: () => i,
        prettyPrint: () => u,
        scrollToElement: () => n,
        stripHTML: () => p
      });
      var o = a(660),
        r = a.n(o);
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
            a = document.getElementById(t.get(e));
          a && n({
            element: a
          })
        };
      var l = a(480);
      const d = e => e.keys().forEach(e),
        c = {
          alphabetical: {
            asc: (e, t) => [...e].sort(((e, a) => e[t].localeCompare(a[t], "en", {
              ignorePunctuation: !0
            }))).reverse(),
            desc: (e, t) => [...e].sort(((e, a) => e[t].localeCompare(a[t], "en", {
              ignorePunctuation: !0
            })))
          },
          date: {
            asc: (e, t) => [...e].sort(((e, a) => new Date(e[t]).getTime() > new Date(a[t]).getTime() ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, a) => new Date(e[t]).getTime() < new Date(a[t]).getTime() ? 1 : -1))
          },
          numerical: {
            asc: (e, t) => [...e].sort(((e, a) => e[t] > a[t] ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, a) => e[t] < a[t] ? 1 : -1))
          }
        },
        f = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const a = {};
          return Object.keys(e).forEach((o => {
            const r = t ? `${t}.${o}` : o;
            "object" == typeof e[o] && null !== e[o] ? Object.assign(a, f(e[o], r)) : a[r] = e[o]
          })), a
        },
        i = e => {
          const t = {};
          return Object.keys(e).forEach((a => {
            if (a.indexOf(".") > -1) {
              const o = e[a],
                n = a.split(".").reverse().reduce(((e, t, a) => 1 === a ? {
                  [t]: {
                    [e]: o
                  }
                } : {
                  [t]: e
                }));
              r().merge(t, n)
            } else r().merge(t, {
              [a]: e[a]
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
        g = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        y = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return g.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        m = () => ["xbox360", "ps4", "ps3"],
        b = () => ["xboxone", "ps5", "pc"]
    }
  }
]);
//# sourceMappingURL=0b6be617d71a952a3837ddf3c92e223d.js.map