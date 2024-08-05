! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "19eb6f3c-214b-4646-8aaa-2e0f454bebea", e._sentryDebugIdIdentifier = "sentry-dbid-19eb6f3c-214b-4646-8aaa-2e0f454bebea")
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
  [509], {
    516: (e, t, n) => {
      var o = n(784),
        a = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var o, c = {},
          i = null,
          d = null;
        for (o in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (d = t.ref), t) r.call(t, o) && !l.hasOwnProperty(o) && (c[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === c[o] && (c[o] = t[o]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: d,
          props: c,
          _owner: s.current
        }
      }
    },
    632: (e, t, n) => {
      e.exports = n(516)
    },
    509: (e, t, n) => {
      n.r(t), n.d(t, {
        ArraySort: () => p,
        Platform: () => l,
        Platforms: () => c,
        default: () => P,
        detectIfWeShouldAnchorSomewhere: () => s,
        downloadFile: () => x,
        findPlatform: () => d,
        flattenObjectPreserveNesting: () => b,
        getCdnPrefix: () => y,
        getGen8Consoles: () => _,
        getGen9Consoles: () => k,
        getLanguageLabel: () => E,
        importAll: () => u,
        isGen9Platform: () => v,
        nestFlattenedObject: () => m,
        prettyPrint: () => h,
        scrollToElement: () => r,
        stripHTML: () => g
      });
      var o = n(252),
        a = n.n(o);
      const r = e => {
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
            n = document.getElementById(t.get(e));
          n && r({
            element: n
          })
        };
      class l {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const c = Object.freeze({
          pc: new l("pc", "PC", 8),
          ps: new l("ps", "PlayStation", 3),
          ps3: new l("ps3", "PlayStation 3", 2),
          ps4: new l("ps4", "PlayStation 4", 11),
          ps5: new l("ps5", "PlayStation 5", 20),
          xbox: new l("xbox", "Xbox", 4),
          xbox360: new l("xbox360", "Xbox 360", 1),
          xboxone: new l("xboxone", "Xbox One", 12),
          xboxsx: new l("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new l("switch", "Nintendo Switch™", 18)
        }),
        i = Object.freeze(Object.values(c));

      function d(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const t = e.toString().toLowerCase();
        return i.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var f = n(632);
      const u = e => e.keys().forEach(e),
        p = {
          alphabetical: {
            asc: (e, t) => [...e].sort(((e, n) => e[t].localeCompare(n[t], "en", {
              ignorePunctuation: !0
            }))).reverse(),
            desc: (e, t) => [...e].sort(((e, n) => e[t].localeCompare(n[t], "en", {
              ignorePunctuation: !0
            })))
          },
          date: {
            asc: (e, t) => [...e].sort(((e, n) => new Date(e[t]).getTime() > new Date(n[t]).getTime() ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, n) => new Date(e[t]).getTime() < new Date(n[t]).getTime() ? 1 : -1))
          },
          numerical: {
            asc: (e, t) => [...e].sort(((e, n) => e[t] > n[t] ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, n) => e[t] < n[t] ? 1 : -1))
          }
        },
        b = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((o => {
            const a = t ? `${t}.${o}` : o;
            "object" == typeof e[o] && null !== e[o] ? Object.assign(n, b(e[o], a)) : n[a] = e[o]
          })), n
        },
        m = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const o = e[n],
                r = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: o
                  }
                } : {
                  [t]: e
                }));
              a().merge(t, r)
            } else a().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        g = e => e.replace(/(<([^>]+)>)/gi, ""),
        h = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, f.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        w = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        y = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return w.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        x = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            n = (e => {
              const t = new URL(e).pathname.split("/"),
                n = t[t.length - 1];
              return decodeURIComponent(n)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              o = document.createElement("a");
            o.href = t, o.setAttribute("download", n), document.body.appendChild(o), o.click(), document.body.removeChild(o)
          })).catch((e => {
            console.log(e)
          }))
        },
        _ = () => [c.xbox360.name, c.xboxone.name, c.ps3.name, c.ps4.name, c.pc.name],
        k = () => [c.xboxsx.name, c.ps5.name],
        v = e => k().includes(e),
        E = e => {
          const t = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return t.has(e) ? t.get(e) : e
        },
        P = E
    }
  }
]);