"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [52], {
    52: (e, t, r) => {
      r.r(t), r.d(t, {
        ArraySort: () => i,
        detectIfWeShouldAnchorSomewhere: () => a,
        flattenObjectPreserveNesting: () => m,
        getCdnPrefix: () => h,
        getGen8Consoles: () => f,
        getGen9Consoles: () => k,
        importAll: () => l,
        nestFlattenedObject: () => p,
        prettyPrint: () => g,
        scrollToElement: () => s,
        stripHTML: () => d
      });
      var o = r(653),
        n = r.n(o);
      const s = e => {
          let {
            element: t
          } = e;
          window.scrollTo({
            top: t.offsetTop,
            behavior: "smooth"
          })
        },
        a = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            r = document.getElementById(t.get(e));
          r && s({
            element: r
          })
        };
      var c = r(160);
      const l = e => e.keys().forEach(e),
        i = {
          alphabetical: {
            asc: (e, t) => [...e].sort(((e, r) => e[t].localeCompare(r[t], "en", {
              ignorePunctuation: !0
            }))).reverse(),
            desc: (e, t) => [...e].sort(((e, r) => e[t].localeCompare(r[t], "en", {
              ignorePunctuation: !0
            })))
          },
          date: {
            asc: (e, t) => [...e].sort(((e, r) => new Date(e[t]).getTime() > new Date(r[t]).getTime() ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, r) => new Date(e[t]).getTime() < new Date(r[t]).getTime() ? 1 : -1))
          },
          numerical: {
            asc: (e, t) => [...e].sort(((e, r) => e[t] > r[t] ? 1 : -1)),
            desc: (e, t) => [...e].sort(((e, r) => e[t] < r[t] ? 1 : -1))
          }
        },
        m = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const r = {};
          return Object.keys(e).forEach((o => {
            const n = t ? `${t}.${o}` : o;
            "object" == typeof e[o] && null !== e[o] ? Object.assign(r, m(e[o], n)) : r[n] = e[o]
          })), r
        },
        p = e => {
          const t = {};
          return Object.keys(e).forEach((r => {
            if (r.indexOf(".") > -1) {
              const o = e[r],
                s = r.split(".").reverse().reduce(((e, t, r) => 1 === r ? {
                  [t]: {
                    [e]: o
                  }
                } : {
                  [t]: e
                }));
              n().merge(t, s)
            } else n().merge(t, {
              [r]: e[r]
            })
          })), t
        },
        d = e => e.replace(/(<([^>]+)>)/gi, ""),
        g = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, c.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        u = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return u.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        f = () => ["xbox360", "ps4", "ps3"],
        k = () => ["xboxone", "ps5", "pc"]
    }
  }
]);
//# sourceMappingURL=2c0ff157cbe4125904f8.js.map