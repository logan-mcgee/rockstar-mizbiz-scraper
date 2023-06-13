"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [779], {
    779: (e, t, r) => {
      r.r(t), r.d(t, {
        ArraySort: () => c,
        flattenObjectPreserveNesting: () => l,
        getCdnPrefix: () => m,
        getGen8Consoles: () => u,
        getGen9Consoles: () => k,
        importAll: () => o,
        nestFlattenedObject: () => i,
        prettyPrint: () => g,
        stripHTML: () => p
      });
      var s = r(948),
        a = r.n(s),
        n = r(706);
      const o = e => e.keys().forEach(e),
        c = {
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
        l = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const r = {};
          return Object.keys(e).forEach((s => {
            const a = t ? `${t}.${s}` : s;
            "object" == typeof e[s] && null !== e[s] ? Object.assign(r, l(e[s], a)) : r[a] = e[s]
          })), r
        },
        i = e => {
          const t = {};
          return Object.keys(e).forEach((r => {
            if (r.indexOf(".") > -1) {
              const s = e[r],
                n = r.split(".").reverse().reduce(((e, t, r) => 1 === r ? {
                  [t]: {
                    [e]: s
                  }
                } : {
                  [t]: e
                }));
              a().merge(t, n)
            } else a().merge(t, {
              [r]: e[r]
            })
          })), t
        },
        p = e => e.replace(/(<([^>]+)>)/gi, ""),
        g = e => {
          const t = e.replace(/{/g, "{<br>").replace(/,/g, ",<br>").replace(/}/g, "<br>}");
          return (0, n.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          }, e)
        },
        d = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        m = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return d.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        u = () => ["xbox360", "ps4", "ps3"],
        k = () => ["xboxone", "ps5", "pc"]
    }
  }
]);