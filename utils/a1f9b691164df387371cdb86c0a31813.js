! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9f18f746-cebc-4280-aeca-1712cb253d94", e._sentryDebugIdIdentifier = "sentry-dbid-9f18f746-cebc-4280-aeca-1712cb253d94")
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
          d = null,
          i = null;
        for (o in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (i = t.ref), t) r.call(t, o) && !l.hasOwnProperty(o) && (c[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === c[o] && (c[o] = t[o]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: i,
          props: c,
          _owner: s.current
        }
      }
    },
    240: (e, t, n) => {
      e.exports = n(576)
    },
    400: (e, t, n) => {
      n.r(t), n.d(t, {
        ArraySort: () => p,
        Platform: () => l,
        Platforms: () => c,
        detectIfWeShouldAnchorSomewhere: () => s,
        downloadFile: () => _,
        findPlatform: () => i,
        flattenObjectPreserveNesting: () => u,
        getCdnPrefix: () => h,
        getGen8Consoles: () => x,
        getGen9Consoles: () => k,
        importAll: () => b,
        nestFlattenedObject: () => m,
        prettyPrint: () => y,
        scrollToElement: () => r,
        stripHTML: () => g
      });
      var o = n(660),
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
          ps3: new l("ps3", "PlayStation 3", 2),
          ps4: new l("ps4", "PlayStation 4", 11),
          ps5: new l("ps5", "PlayStation 5", 20),
          xbox360: new l("xbox360", "Xbox 360", 1),
          xboxone: new l("xboxone", "Xbox One", 12),
          xboxsx: new l("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new l("switch", "Nintendo Switch™", 18)
        }),
        d = Object.freeze(Object.values(c));

      function i(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const t = e.toString().toLowerCase();
        return d.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      var f = n(240);
      const b = e => e.keys().forEach(e),
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
        u = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = {};
          return Object.keys(e).forEach((o => {
            const a = t ? `${t}.${o}` : o;
            "object" == typeof e[o] && null !== e[o] ? Object.assign(n, u(e[o], a)) : n[a] = e[o]
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
        y = e => {
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
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return w.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        _ = e => {
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
        x = () => [c.xbox360.name, c.xboxone.name, c.ps3.name, c.ps4.name, c.pc.name],
        k = () => [c.xboxsx.name, c.ps5.name]
    }
  }
]);