"use strict";
(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [66], {
    66: (e, t, r) => {
      r.r(t), r.d(t, {
        ArraySort: () => o,
        flattenObjectPreserveNesting: () => i,
        getCdnPrefix: () => m,
        importAll: () => c,
        nestFlattenedObject: () => l,
        prettyPrint: () => g,
        stripHTML: () => p
      });
      var a = r(735),
        s = r.n(a),
        n = r(157);
      const c = e => e.keys().forEach(e),
        o = {
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
        i = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const r = {};
          return Object.keys(e).forEach((a => {
            const s = t ? `${t}.${a}` : a;
            "object" == typeof e[a] && null !== e[a] ? Object.assign(r, i(e[a], s)) : r[s] = e[a]
          })), r
        },
        l = e => {
          const t = {};
          return Object.keys(e).forEach((r => {
            if (r.indexOf(".") > -1) {
              const a = e[r],
                n = r.split(".").reverse().reduce(((e, t, r) => 1 === r ? {
                  [t]: {
                    [e]: a
                  }
                } : {
                  [t]: e
                }));
              s().merge(t, n)
            } else s().merge(t, {
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
        }
    }
  }
]);