! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e522193d-42b3-4720-ac39-67439de69f1f", e._sentryDebugIdIdentifier = "sentry-dbid-e522193d-42b3-4720-ac39-67439de69f1f")
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
  [400], {
    576: (e, t, n) => {
      var o = n(664),
        r = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };
      t.jsx = function(e, t, n) {
        var o, d = {},
          c = null,
          i = null;
        for (o in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (i = t.ref), t) a.call(t, o) && !l.hasOwnProperty(o) && (d[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === d[o] && (d[o] = t[o]);
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
    240: (e, t, n) => {
      e.exports = n(576)
    },
    400: (e, t, n) => {
      n.r(t), n.d(t, {
        ArraySort: () => u,
        Platform: () => l,
        Platforms: () => d,
        detectIfWeShouldAnchorSomewhere: () => s,
        downloadFile: () => x,
        findPlatform: () => i,
        flattenObjectPreserveNesting: () => b,
        getCdnPrefix: () => h,
        getGen8Consoles: () => _,
        getGen9Consoles: () => k,
        importAll: () => p,
        isGen9Platform: () => v,
        nestFlattenedObject: () => m,
        prettyPrint: () => w,
        scrollToElement: () => a,
        stripHTML: () => g
      });
      var o = n(660),
        r = n.n(o);
      const a = e => {
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
          n && a({
            element: n
          })
        };
      class l {
        constructor(e, t, n) {
          let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = o
        }
      }
      const d = Object.freeze({
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
        c = Object.freeze(Object.values(d));

      function i(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const t = e.toString().toLowerCase();
        return c.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var f = n(240);
      const p = e => e.keys().forEach(e),
        u = {
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
            const r = t ? `${t}.${o}` : o;
            "object" == typeof e[o] && null !== e[o] ? Object.assign(n, b(e[o], r)) : n[r] = e[o]
          })), n
        },
        m = e => {
          const t = {};
          return Object.keys(e).forEach((n => {
            if (n.indexOf(".") > -1) {
              const o = e[n],
                a = n.split(".").reverse().reduce(((e, t, n) => 1 === n ? {
                  [t]: {
                    [e]: o
                  }
                } : {
                  [t]: e
                }));
              r().merge(t, a)
            } else r().merge(t, {
              [n]: e[n]
            })
          })), t
        },
        g = e => e.replace(/(<([^>]+)>)/gi, ""),
        w = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, f.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        y = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return y.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
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
        _ = () => [d.xbox360.name, d.xboxone.name, d.ps3.name, d.ps4.name, d.pc.name],
        k = () => [d.xboxsx.name, d.ps5.name],
        v = e => k().includes(e)
    }
  }
]);