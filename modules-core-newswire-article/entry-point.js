! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04610073-e997-4439-988d-26ee6524c8a3", e._sentryDebugIdIdentifier = "sentry-dbid-04610073-e997-4439-988d-26ee6524c8a3")
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
  var a = {},
    r = {},
    o = {},
    d = {},
    n = {},
    c = {},
    f = {};
  return Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, l, u = {
            6539: (e, t, a) => {
              (0, a(13403).w)(1)
            },
            13403: (e, t, a) => {
              const r = a(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                a.p = r(a.y.meta.url, e)
              }
            },
            32160: (e, t, a) => {
              a(6539)
            },
            75659: (e, t, a) => {
              t.y = function(e, t) {
                var a = document.createElement("a");
                a.href = e;
                for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, o = 0, d = r.length; o !== t && d >= 0;) "/" === r[--d] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var n = r.slice(0, d + 1);
                return a.protocol + "//" + a.host + n
              };
              Number.isInteger
            },
            68623: (e, t, a) => {
              "use strict";
              var r = {
                  "./NewswireArticle": () => Promise.all([a.e(3524), a.e(9269), a.e(3443), a.e(6668), a.e(9028), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(207), a.e(8407), a.e(1450), a.e(396), a.e(6398), a.e(1879), a.e(1357), a.e(9303), a.e(4566), a.e(1186), a.e(185), a.e(9415), a.e(7207), a.e(825)]).then((() => () => a(80825))),
                  "./NewswireTitle": () => Promise.all([a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(353)]).then((() => () => a(85184))),
                  "./components": () => Promise.all([a.e(3524), a.e(9269), a.e(3443), a.e(6668), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(207), a.e(8407), a.e(1450), a.e(396), a.e(6398), a.e(1879), a.e(1357), a.e(9303), a.e(4566), a.e(1186)]).then((() => () => a(26750))),
                  "./index": () => Promise.all([a.e(3524), a.e(9269), a.e(3443), a.e(6668), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(207), a.e(8407), a.e(1450), a.e(396), a.e(6398), a.e(1879), a.e(1357), a.e(9303), a.e(4566), a.e(1186), a.e(9415), a.e(4216)]).then((() => () => a(74216))),
                  "./tinaBlockTemplates": () => Promise.all([a.e(7601), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(8407), a.e(6398), a.e(1879), a.e(9303), a.e(6624), a.e(5381)]).then((() => () => a(65381))),
                  "./types": () => Promise.all([a.e(3524), a.e(9269), a.e(3443), a.e(6668), a.e(9028), a.e(1403), a.e(1156), a.e(8089), a.e(7185), a.e(285), a.e(207), a.e(8407), a.e(1450), a.e(396), a.e(6398), a.e(1879), a.e(1357), a.e(9303), a.e(4566), a.e(1186), a.e(9415), a.e(7207), a.e(9435)]).then((() => () => a(69435)))
                },
                o = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), a.R = void 0, t),
                d = (e, t) => {
                  if (a.S) {
                    var r = "default",
                      o = a.S[r];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return a.S[r] = e, a.I(r, t)
                  }
                };
              a.d(t, {
                get: () => o,
                init: () => d
              })
            },
            61024: e => {
              "use strict";
              e.exports = a
            },
            49787: e => {
              "use strict";
              e.exports = r
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
              e.exports = n
            },
            99466: e => {
              "use strict";
              e.exports = c
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
          var a = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return u[e].call(a.exports, a, a.exports, p), a.loaded = !0, a.exports
        }
        return p.m = u, p.c = b, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, p.d = (e, t) => {
          for (var a in t) p.o(t, a) && !p.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, a) => (p.f[a](e, t), t)), [])), p.u = e => "js/" + {
          185: "c73acdc40af0bccbf87a45c3086320e6",
          199: "4b7e4b7393d932259ec2e22667566240",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "d5d7acf22c568bb38858687848a94edf",
          353: "65591f33d116c8a1980390f6808faf27",
          381: "4216ee70f509f53aae4995a5d08e5c72",
          396: "c42e47ab3cd79f7e65c0656202f5c4ea",
          700: "5b545a1c4d972ac47141ce8d8ec69f26",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "1448b65dda529adffb2b52546d25b91b",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1186: "c8bc6d9a4b30232a5072084b88e57d59",
          1331: "2333a6ec283a5c4897f7f979560b02f2",
          1357: "b0d82cff8ae1bc2c44ed4e0118296dcb",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1450: "bf2035c18b7e290565f2ea47f4e93a11",
          1469: "c332c2dda33fbd9acfd06596b216b0cb",
          1476: "9ffe38e3650ca6a1e91245eb25224408",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2399: "0f5005fdac621f9bbe4d0cbd7c48ee42",
          2956: "e35d1ed2d5a60ea21d237556cb711502",
          3087: "6e1b562fb1b0af252daf90f0292ea7d3",
          3380: "4ef30dc48f9f2d18fc1b312935bbdefe",
          3443: "4877231248a8e3e4ef9600dd9e1260ca",
          3524: "38a4cd3f68604e5d631728142a31a932",
          3712: "fa91a9e3cf3a6a52715be9882fac11e5",
          4105: "5192cc0512ce65aa7a4a7224a2a95e03",
          4143: "ab6d439bf9cde7d223cf11865dcf6cca",
          4216: "435cd596b0c904e4288f1f94bc670c21",
          4451: "6314de720262bacd1516a9973adf22b7",
          4566: "eda659b79959333915e05e535b236911",
          5238: "4e796809846b07b1166695c3f1ba4588",
          5381: "ec3426960ca36f37da5fea936bc2273a",
          6008: "4701761c10a757104951b4e8d8b6c6f8",
          6119: "11087f76e6710facdeb664167a2afb38",
          6398: "b62b7a44f68c554b2b619cc10a10238a",
          6524: "88388594a58acb8f47f78e9a23d81157",
          6624: "50de575619ab692e1b29239ef9905aed",
          6668: "f07501cab1cf3c2253a8829316c74421",
          7109: "2e53efff4f61a413cbb3e7d20f89a06a",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "8f703949ed5cb92071c5b7cbc81b4e91",
          7601: "b8c76cfc725bee3f49d0207722d6fa3b",
          7603: "de2cb01c5f5c999ea5b1f3561fcbcd2e",
          8066: "65dff92952b4bf06f54eb74e3f8000fa",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8500: "dfa28905a4f1b326d20cf5839fe6d13f",
          9028: "fea57b6b6a39004fcd544cf99200f1f5",
          9095: "8e248257eb5f54da3fbd423f2da79ba2",
          9269: "6dfa36eb7b3219fdb916b88595a450f8",
          9303: "ca3201331fbd362f510958eec126035e",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "975b8d2e17121dcbab90f1a892ab023c",
          9435: "548a85f648203d490013d3d6666357c5"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          185: "5672a0bf4d3545898b97650db9742fe7",
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          1186: "2b65fabb9f4c4f10c4b8feaa0db33cd8",
          1357: "d8b5ddd61a764fc1a7e32bda66fec0a9",
          1450: "0611f574324fcc42b858b9a1d630aa5f",
          1476: "9521220be159081328532edd8c30d4a1",
          2399: "eaa23eb350930837b68fdb71cfbc3f26",
          3087: "830873db359247a3d1a9345807dc2efe",
          3712: "85da1b5692003905e3aeacc551368771",
          5381: "2ff8c6617c8e61af904511a026f84e27",
          6119: "2d1c0b9b67883648652d608f8448f059",
          6624: "a74511202c6604457e5faa8aa8a94b53",
          7185: "d24f8af72e222478f3ce0e27f9503b3c",
          7207: "7430346e4fd1d070d6bc7f6e85beebf7",
          7603: "1accb2f2585069b79f3c02b8ecf841e2",
          8500: "2d1c0b9b67883648652d608f8448f059",
          9435: "af1976a95468a9f35efdb14bf4778e0b"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/modules-core-newswire-article:", p.l = (t, a, r, o) => {
          if (e[t]) e[t].push(a);
          else {
            var d, n;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), f = 0; f < c.length; f++) {
                var i = c[f];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == s + r) {
                  d = i;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, p.nc && d.setAttribute("nonce", p.nc), d.setAttribute("data-webpack", s + r), d.src = t), e[t] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
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
          396: [70396],
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
            var a = p.R;
            a || (a = []);
            var r = l[e];
            if (!(a.indexOf(r) >= 0)) {
              if (a.push(r), r.p) return t.push(r.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), p.m[e] = () => {
                    throw t
                  }, r.p = 0
                },
                d = (e, a, d, n, c, f) => {
                  try {
                    var s = e(a, d);
                    if (!s || !s.then) return c(s, n, f);
                    var i = s.then((e => c(e, n)), o);
                    if (!f) return i;
                    t.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                n = (e, t, o) => d(t.get, r[1], a, 0, c, o),
                c = t => {
                  r.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(p, r[2], 0, 0, ((e, t, a) => e ? d(p.I, r[0], 0, e, n, a) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (a, r) => {
            r || (r = []);
            var o = t[a];
            if (o || (o = t[a] = {}), !(r.indexOf(o) >= 0)) {
              if (r.push(o), e[a]) return e[a];
              p.o(p.S, a) || (p.S[a] = {});
              var d = p.S[a],
                n = "@rockstargames/modules-core-newswire-article",
                c = (e, t, a, r) => {
                  var o = d[e] = d[e] || {},
                    c = o[t];
                  (!c || !c.loaded && (!r != !c.eager ? r : n > c.from)) && (o[t] = {
                    get: a,
                    from: n,
                    eager: !!r
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
                    var d = e => e && e.init && e.init(p.S[a], r);
                    if (o.then) return s.push(o.then(d, t));
                    var n = d(o);
                    if (n && n.then) return s.push(n.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === a && (c("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(3524), p.e(9269), p.e(3443), p.e(6668), p.e(700), p.e(9028), p.e(7109), p.e(1403), p.e(1156), p.e(8089), p.e(7185), p.e(285), p.e(207), p.e(8407), p.e(1450), p.e(6398), p.e(1357), p.e(2399), p.e(185), p.e(6624), p.e(3087)]).then((() => () => p(97691))))), c("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(8066), p.e(1403), p.e(396), p.e(4143)]).then((() => () => p(24143))))), c("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([p.e(3524), p.e(9269), p.e(1403), p.e(1156), p.e(8089), p.e(732), p.e(3712)]).then((() => () => p(51331))))), c("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([p.e(3524), p.e(9269), p.e(3443), p.e(700), p.e(1469), p.e(1403), p.e(1156), p.e(285), p.e(207), p.e(8407), p.e(4566), p.e(2399), p.e(9095), p.e(7603)]).then((() => () => p(10294))))), c("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([p.e(3524), p.e(6668), p.e(1403), p.e(1156), p.e(8089), p.e(7185), p.e(207), p.e(1450), p.e(1879), p.e(8500)]).then((() => () => p(18500))))), c("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => p.e(381).then((() => () => p(20381))))), c("dompurify", "2.4.7", (() => p.e(2956).then((() => () => p(72956))))), c("lodash", "4.17.21", (() => p.e(9429).then((() => () => p(79429))))), c("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([p.e(1403), p.e(5238)]).then((() => () => p(85238))))), c("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), c("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(4451), p.e(1403)]).then((() => () => p(4451))))), c("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), c("text-balancer", "1.0.5", (() => p.e(199).then((() => () => p(20199))))), f(99466), f(92969), f(60404), f(61024), f(25136), f(29441), f(49787)), s.length ? e[a] = Promise.all(s).then((() => e[a] = 1)) : e[a] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var a = t.getElementsByTagName("script");
            if (a.length)
              for (var r = a.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = a[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var o = a[0],
                  d = o < 0;
                d && (o = -o - 1);
                for (var n = 0, c = 1, f = !0;; c++, n++) {
                  var s, i, l = c < a.length ? (typeof a[c])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(s = r[n]))[0])) return !f || ("u" == l ? c > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (c <= o) {
                        if (s != a[c]) return !1
                      } else {
                        if (d ? s > a[c] : s < a[c]) return !1;
                        s != a[c] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || c <= o) return !1;
                    f = !1, c--
                  } else {
                    if (c <= o || i < l != d) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, c--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, r) : !b())
              }
              return !!b()
            },
            a = (a, r, o) => {
              var d = a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(o, r) || a && !((t, a) => {
                t = e(t), a = e(a);
                for (var r = 0;;) {
                  if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                  var o = t[r],
                    d = (typeof o)[0];
                  if (r >= a.length) return "u" == d;
                  var n = a[r],
                    c = (typeof n)[0];
                  if (d != c) return "o" == d && "n" == c || "s" == c || "u" == d;
                  if ("o" != d && "u" != d && o != n) return o < n;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            r = (e => function(t, a, r, o) {
              var d = p.I(t);
              return d && d.then ? d.then(e.bind(e, t, p.S[t], a, r, o)) : e(t, p.S[t], a, r, o)
            })(((e, t, r, o, d) => {
              var n = t && p.o(t, r) && a(t, r, o);
              return n ? (e => (e.loaded = 1, e.get()))(n) : d()
            })),
            o = {},
            d = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => p.e(3380).then((() => () => p(23380))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => p.e(2956).then((() => () => p(72956))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(6008)]).then((() => () => p(76008))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(8066), p.e(396), p.e(6524)]).then((() => () => p(24143))))),
              54252: () => r("default", "lodash", [1, 4, 17, 21], (() => p.e(9429).then((() => () => p(79429))))),
              20009: () => r("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(700), p.e(9028), p.e(7109), p.e(2399), p.e(185), p.e(6624), p.e(3087)]).then((() => () => p(97691))))),
              32503: () => r("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([p.e(700), p.e(1469), p.e(2399), p.e(1476)]).then((() => () => p(10294))))),
              37920: () => r("default", "text-balancer", [1, 1, 0, 5], (() => p.e(199).then((() => () => p(20199))))),
              74459: () => r("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => p.e(6119).then((() => () => p(18500))))),
              26527: () => r("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([p.e(732), p.e(1331)]).then((() => () => p(51331))))),
              66713: () => r("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => p.e(381).then((() => () => p(20381))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => p.e(5238).then((() => () => p(85238))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => p.e(7533).then((() => () => p(47533))))),
              57172: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(4451)]).then((() => () => p(4451)))))
            },
            n = {
              285: [89779, 96717],
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
            c = {};
          p.f.consumes = (e, t) => {
            p.o(n, e) && n[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!c[e]) {
                var a = t => {
                  o[e] = 0, p.m[e] = a => {
                    delete p.c[e], a.exports = t()
                  }
                };
                c[e] = !0;
                var r = t => {
                  delete o[e], p.m[e] = a => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var n = d[e]();
                  n.then ? t.push(o[e] = n.then(a).catch(r)) : a(n)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            p.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
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
              } [t] && a.push(e[t] = (e => new Promise(((t, a) => {
                var r = p.miniCssF(e),
                  o = p.p + r;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var o = (n = a[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (o === e || o === t)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var n;
                      if ((o = (n = d[r]).getAttribute("data-href")) === e || o === t) return n
                    }
                  })(r, o)) return t();
                ((e, t, a, r, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) r();
                    else {
                      var n = a && ("load" === a.type ? "missing" : a.type),
                        c = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = c, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
                })(e, o, 0, t, a)
              })))(t).then((() => {
                e[t] = 0
              }), (a => {
                throw delete e[t], a
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          p.f.j = (t, a) => {
            var r = p.o(e, t) ? e[t] : void 0;
            if (0 !== r)
              if (r) a.push(r[2]);
              else if (/^(1(156|403|879)|7(185|207|32|603)|(2|84)07|396|4566|6398|6624|8089|9303|9415)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((a, o) => r = e[t] = [a, o]));
              a.push(r[2] = o);
              var d = p.p + p.u(t),
                n = new Error;
              p.l(d, (a => {
                if (p.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  n.message = "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")", n.name = "ChunkLoadError", n.type = o, n.request = d, r[1](n)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, a) => {
              var r, o, d = a[0],
                n = a[1],
                c = a[2],
                f = 0;
              if (d.some((t => 0 !== e[t]))) {
                for (r in n) p.o(n, r) && (p.m[r] = n[r]);
                c && c(p)
              }
              for (t && t(a); f < d.length; f++) o = d[f], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), p.nc = void 0, p(32160), p(68623)
      })())
    }
  }
}));