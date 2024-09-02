! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ff25bc4-f818-43d2-91f7-cb18357bd120", e._sentryDebugIdIdentifier = "sentry-dbid-0ff25bc4-f818-43d2-91f7-cb18357bd120")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    d = {},
    c = {},
    n = {},
    f = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, l, u = {
            6539: (e, t, r) => {
              (0, r(13403).w)(1)
            },
            13403: (e, t, r) => {
              const a = r(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            32160: (e, t, r) => {
              r(6539)
            },
            75659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, d = a.length; o !== t && d >= 0;) "/" === a[--d] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = a.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            68623: (e, t, r) => {
              "use strict";
              var a = {
                  "./NewswireArticle": () => Promise.all([r.e(5216), r.e(9269), r.e(5390), r.e(3443), r.e(6668), r.e(9028), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(207), r.e(8407), r.e(1450), r.e(6398), r.e(1879), r.e(1357), r.e(9303), r.e(4566), r.e(1186), r.e(185), r.e(9415), r.e(7207), r.e(825)]).then((() => () => r(80825))),
                  "./NewswireTitle": () => Promise.all([r.e(5390), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(353)]).then((() => () => r(85184))),
                  "./components": () => Promise.all([r.e(5216), r.e(9269), r.e(5390), r.e(3443), r.e(6668), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(207), r.e(8407), r.e(1450), r.e(6398), r.e(1879), r.e(1357), r.e(9303), r.e(4566), r.e(1186)]).then((() => () => r(26750))),
                  "./index": () => Promise.all([r.e(5216), r.e(9269), r.e(5390), r.e(3443), r.e(6668), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(207), r.e(8407), r.e(1450), r.e(6398), r.e(1879), r.e(1357), r.e(9303), r.e(4566), r.e(1186), r.e(9415), r.e(4216)]).then((() => () => r(74216))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(7601), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(8407), r.e(6398), r.e(1879), r.e(9303), r.e(6624), r.e(5381)]).then((() => () => r(65381))),
                  "./types": () => Promise.all([r.e(5216), r.e(9269), r.e(5390), r.e(3443), r.e(6668), r.e(9028), r.e(1403), r.e(1156), r.e(8089), r.e(7185), r.e(285), r.e(207), r.e(8407), r.e(1450), r.e(6398), r.e(1879), r.e(1357), r.e(9303), r.e(4566), r.e(1186), r.e(9415), r.e(7207), r.e(9435)]).then((() => () => r(69435)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                d = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => d
              })
            },
            61024: e => {
              "use strict";
              e.exports = r
            },
            49787: e => {
              "use strict";
              e.exports = a
            },
            29441: e => {
              "use strict";
              e.exports = o
            },
            60404: e => {
              "use strict";
              e.exports = d
            },
            25136: e => {
              "use strict";
              e.exports = c
            },
            99466: e => {
              "use strict";
              e.exports = n
            },
            92969: e => {
              "use strict";
              e.exports = f
            }
          },
          b = {};

        function p(e) {
          var t = b[e];
          if (void 0 !== t) return t.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return u[e].call(r.exports, r, r.exports, p), r.loaded = !0, r.exports
        }
        return p.m = u, p.c = b, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, p.d = (e, t) => {
          for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
          185: "177e245508d6dba7ac87ba6b16b0d511",
          199: "5a60d05c4de970c6f1a2b2a996f3132b",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "28cc8ed8d6edbc90853d4e1379d4a211",
          353: "06e4de0525e5643b2a58d8aaf8df9816",
          381: "ec92e1c189e03af0af5384cbeba2bca4",
          431: "6c1fa215490c387e2d573b845a64e03c",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "5efc773cb3f19bdaba27dd36e67b1daa",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1186: "8f0d338fd29be29a408d46c4323dd8fc",
          1331: "60d89a6ae00633588f47879bba04b2b4",
          1357: "37f9922240245ce6daae89c100cc36b9",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1450: "bf0087658a09c513ccfaaad730bd3db0",
          1469: "209deac36bf8056b5fba0fe72d7fac80",
          1476: "af355ea7aa7826835040c8cf2ebe22d8",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2399: "ad7182c62d702ff632d7e4fc2688eddd",
          2956: "5717bcaf04bb35b6c78d4c3f518e0648",
          3087: "2bb4191ec43c24c1183b4331992deea1",
          3380: "75a75f158091af24dc8cd73ad7192144",
          3443: "7c9e7844ff88d5474cadc8019325678f",
          3712: "0d8fd9af2c7bbdc509d4349beb306dbd",
          4105: "a8bc887d4903fe2ea39675e38c0e1f81",
          4216: "198d09e3861b23b7754f5f84be955281",
          4451: "043e651a67c0975581c2162354a956fa",
          4566: "eda659b79959333915e05e535b236911",
          5216: "e9c8c5caef802ab23a33ad9e9fb3c5de",
          5238: "28f8ec956e4ba9092462c29c9536e5a2",
          5381: "8406a07190ea9b497daa5061ddbcf3b9",
          5390: "84089e9c8ee66ae9f50fcf4c3fa50359",
          6008: "d52302e89808471e9a8e3414d37c8214",
          6119: "dcfba8db7e31e1e052fe0242e955b3c6",
          6398: "b62b7a44f68c554b2b619cc10a10238a",
          6624: "50de575619ab692e1b29239ef9905aed",
          6668: "7daa91c2d4f17449031acc9dbc00d11f",
          7109: "cdacb7fc031ff4217156e553c7d23d5d",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "12d2b12837d74a570ecbb77ad20b5306",
          7601: "49624d6d6bc8ee4e647870a4d70d7729",
          7603: "de2cb01c5f5c999ea5b1f3561fcbcd2e",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8500: "102559ec53aa31c8ac709decdc399e53",
          9028: "b3ec6164b6810b0a3ccda923b99e429c",
          9095: "e20f95607a780d11892c197af60e4e8f",
          9269: "862b46edc3f2bae5de3c78c7949b09a1",
          9303: "ca3201331fbd362f510958eec126035e",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "cc4f6ee1f81a06e1cea1e6bc5851e96b",
          9435: "4eccfc9a6da456efc9e080b6b9f241c9"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          185: "5672a0bf4d3545898b97650db9742fe7",
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          1186: "eff46a0a2c43e0a8706df5f05a68f82c",
          1357: "d5eb87416fbd8c46610a59cf34589c87",
          1450: "0611f574324fcc42b858b9a1d630aa5f",
          1476: "0c21766f8df54569c7f33acd179a5d9c",
          2399: "124a589a115b129e4b3c83575a9aa871",
          3087: "58563b271fd16e90546aa497497852d6",
          3712: "85da1b5692003905e3aeacc551368771",
          5381: "2ff8c6617c8e61af904511a026f84e27",
          6119: "2d1c0b9b67883648652d608f8448f059",
          6624: "a74511202c6604457e5faa8aa8a94b53",
          7185: "d24f8af72e222478f3ce0e27f9503b3c",
          7207: "f9bc902c4ca515830f57328455f5e7e3",
          7603: "a20b44a504c3bc9736279cbeb884ee1d",
          8500: "2d1c0b9b67883648652d608f8448f059",
          9435: "af1976a95468a9f35efdb14bf4778e0b"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/modules-core-newswire-article:", p.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var d, c;
            if (void 0 !== a)
              for (var n = document.getElementsByTagName("script"), f = 0; f < n.length; f++) {
                var i = n[f];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == s + a) {
                  d = i;
                  break
                }
              }
            d || (c = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, p.nc && d.setAttribute("nonce", p.nc), d.setAttribute("data-webpack", s + a), d.src = t), e[t] = [r];
            var l = (r, a) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), c && document.head.appendChild(d)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          185: [90588],
          207: [40207],
          285: [70396],
          825: [42158],
          1156: [74401, 42756],
          1879: [31879],
          3087: [78417],
          4566: [94566],
          5381: [11438, 17523, 33809, 44019, 83166],
          6398: [26398],
          8089: [28089],
          8407: [58407],
          9303: [64064, 55140, 73379]
        }, l = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          26398: ["default", "./helpers", 99466],
          28089: ["default", "./helpers/uploads", 99466],
          31879: ["default", "./index", 25136],
          33809: ["default", "./ui", 99466],
          40207: ["default", "./index", 60404],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          44019: ["default", "./tinaBlockTemplates", 25136],
          55140: ["default", "./properties", 99466],
          58407: ["default", "./index", 61024],
          64064: ["default", "./index", 29441],
          70396: ["default", "./hooks", 92969],
          73379: ["default", "./functions", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          83166: ["default", "./tina", 29441],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          94566: ["default", "./messages", 49787]
        }, p.f.remotes = (e, t) => {
          p.o(i, e) && i[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var a = l[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                d = (e, r, d, c, n, f) => {
                  try {
                    var s = e(r, d);
                    if (!s || !s.then) return n(s, c, f);
                    var i = s.then((e => n(e, c)), o);
                    if (!f) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => d(t.get, a[1], r, 0, n, o),
                n = t => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(p, a[2], 0, 0, ((e, t, r) => e ? d(p.I, a[0], 0, e, c, r) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              p.o(p.S, r) || (p.S[r] = {});
              var d = p.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, t, r, a) => {
                  var o = d[e] = d[e] || {},
                    n = o[t];
                  (!n || !n.loaded && (!a != !n.eager ? a : c > n.from)) && (o[t] = {
                    get: r,
                    from: c,
                    eager: !!a
                  })
                },
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var d = e => e && e.init && e.init(p.S[r], a);
                    if (o.then) return s.push(o.then(d, t));
                    var c = d(o);
                    if (c && c.then) return s.push(c.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (n("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(5216), p.e(9269), p.e(5390), p.e(3443), p.e(6668), p.e(431), p.e(9028), p.e(7109), p.e(1403), p.e(1156), p.e(8089), p.e(7185), p.e(285), p.e(207), p.e(8407), p.e(1450), p.e(6398), p.e(1357), p.e(2399), p.e(185), p.e(6624), p.e(3087)]).then((() => () => p(97691))))), n("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([p.e(5216), p.e(9269), p.e(1403), p.e(1156), p.e(8089), p.e(732), p.e(3712)]).then((() => () => p(51331))))), n("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([p.e(5216), p.e(9269), p.e(5390), p.e(3443), p.e(431), p.e(1469), p.e(1403), p.e(1156), p.e(285), p.e(207), p.e(8407), p.e(4566), p.e(2399), p.e(9095), p.e(7603)]).then((() => () => p(10294))))), n("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([p.e(5216), p.e(6668), p.e(1403), p.e(1156), p.e(8089), p.e(7185), p.e(207), p.e(1450), p.e(1879), p.e(8500)]).then((() => () => p(18500))))), n("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => p.e(381).then((() => () => p(20381))))), n("dompurify", "2.4.7", (() => p.e(2956).then((() => () => p(72956))))), n("lodash", "4.17.21", (() => p.e(9429).then((() => () => p(79429))))), n("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), n("react-jsx-parser", "1.29.0", (() => Promise.all([p.e(1403), p.e(5238)]).then((() => () => p(85238))))), n("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), n("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(4451), p.e(1403)]).then((() => () => p(4451))))), n("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), n("text-balancer", "1.0.5", (() => p.e(199).then((() => () => p(20199))))), f(99466), f(92969), f(60404), f(61024), f(25136), f(29441), f(49787)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var o = r[0],
                  d = o < 0;
                d && (o = -o - 1);
                for (var c = 0, n = 1, f = !0;; n++, c++) {
                  var s, i, l = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(s = a[c]))[0])) return !f || ("u" == l ? n > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (n <= o) {
                        if (s != r[n]) return !1
                      } else {
                        if (d ? s > r[n] : s < r[n]) return !1;
                        s != r[n] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || n <= o) return !1;
                    f = !1, n--
                  } else {
                    if (n <= o || i < l != d) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, n--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
              }
              return !!b()
            },
            r = (r, a, o) => {
              var d = r[a];
              return (a = Object.keys(d).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    d = (typeof o)[0];
                  if (a >= r.length) return "u" == d;
                  var c = r[a],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && o != c) return o < c;
                  a++
                }
              })(r, a) ? r : a), 0)) && d[a]
            },
            a = (e => function(t, r, a, o) {
              var d = p.I(t);
              return d && d.then ? d.then(e.bind(e, t, p.S[t], r, a, o)) : e(t, p.S[t], r, a, o)
            })(((e, t, a, o, d) => {
              var c = t && p.o(t, a) && r(t, a, o);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            o = {},
            d = {
              71403: () => a("default", "react", [1, 18, 2, 0], (() => p.e(3380).then((() => () => p(23380))))),
              61631: () => a("default", "dompurify", [1, 2, 4, 1], (() => p.e(2956).then((() => () => p(72956))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(6008)]).then((() => () => p(76008))))),
              54252: () => a("default", "lodash", [1, 4, 17, 21], (() => p.e(9429).then((() => () => p(79429))))),
              20009: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(431), p.e(9028), p.e(7109), p.e(2399), p.e(185), p.e(6624), p.e(3087)]).then((() => () => p(97691))))),
              32503: () => a("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([p.e(431), p.e(1469), p.e(2399), p.e(1476)]).then((() => () => p(10294))))),
              37920: () => a("default", "text-balancer", [1, 1, 0, 5], (() => p.e(199).then((() => () => p(20199))))),
              74459: () => a("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => p.e(6119).then((() => () => p(18500))))),
              26527: () => a("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([p.e(732), p.e(1331)]).then((() => () => p(51331))))),
              66713: () => a("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => p.e(381).then((() => () => p(20381))))),
              85865: () => a("default", "react-jsx-parser", [1, "workspace:*"], (() => p.e(5238).then((() => () => p(85238))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => p.e(7533).then((() => () => p(47533))))),
              57172: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(4451)]).then((() => () => p(4451)))))
            },
            c = {
              285: [89779],
              1186: [20009, 32503, 37920, 74459],
              1357: [54252],
              1403: [71403],
              1476: [57172],
              3087: [79493],
              7185: [61631],
              7207: [85865],
              9095: [57172],
              9415: [26527, 66713]
            },
            n = {};
          p.f.consumes = (e, t) => {
            p.o(c, e) && c[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!n[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                n[e] = !0;
                var a = t => {
                  delete o[e], p.m[e] = r => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? t.push(o[e] = c.then(r).catch(a)) : r(c)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                185: 1,
                353: 1,
                732: 1,
                1186: 1,
                1357: 1,
                1450: 1,
                1476: 1,
                2399: 1,
                3087: 1,
                3712: 1,
                5381: 1,
                6119: 1,
                6624: 1,
                7185: 1,
                7207: 1,
                7603: 1,
                8500: 1,
                9435: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = p.miniCssF(e),
                  o = p.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (a = 0; a < d.length; a++) {
                      var c;
                      if ((o = (c = d[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) a();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        n = r && r.target && r.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = n, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          p.f.j = (t, r) => {
            var a = p.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(1(156|403|879)|7(185|207|32|603)|(2|84)07|4566|6398|6624|8089|9303|9415)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var d = p.p + p.u(t),
                c = new Error;
              p.l(d, (r => {
                if (p.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")", c.name = "ChunkLoadError", c.type = o, c.request = d, a[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, d = r[0],
                c = r[1],
                n = r[2],
                f = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (a in c) p.o(c, a) && (p.m[a] = c[a]);
                n && n(p)
              }
              for (t && t(r); f < d.length; f++) o = d[f], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p.nc = void 0, p(32160), p(68623)
      })())
    }
  }
}));