! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4173be33-ad7d-4652-832f-a5459b7c9455", e._sentryDebugIdIdentifier = "sentry-dbid-4173be33-ad7d-4652-832f-a5459b7c9455")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, a) {
  var t = {},
    r = {},
    o = {},
    d = {},
    n = {},
    c = {},
    f = {};
  return Object.defineProperty(t, "__esModule", {
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
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        o[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        n[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, l, u = {
            6539: (e, a, t) => {
              (0, t(13403).w)(1)
            },
            13403: (e, a, t) => {
              const r = t(75659).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            32160: (e, a, t) => {
              t(6539)
            },
            75659: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, d = r.length; o !== a && d >= 0;) "/" === r[--d] && o++;
                if (o !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var n = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            68623: (e, a, t) => {
              "use strict";
              var r = {
                  "./NewswireArticle": () => Promise.all([t.e(5216), t.e(9269), t.e(5390), t.e(3443), t.e(6668), t.e(9028), t.e(1403), t.e(1156), t.e(8089), t.e(7185), t.e(285), t.e(207), t.e(8407), t.e(1450), t.e(6398), t.e(1879), t.e(1357), t.e(9303), t.e(4566), t.e(1186), t.e(185), t.e(9415), t.e(7207), t.e(825)]).then((() => () => t(80825))),
                  "./NewswireTitle": () => Promise.all([t.e(5390), t.e(1403), t.e(1156), t.e(8089), t.e(7185), t.e(285), t.e(353)]).then((() => () => t(85184))),
                  "./components": () => Promise.all([t.e(5216), t.e(9269), t.e(5390), t.e(3443), t.e(6668), t.e(1403), t.e(1156), t.e(8089), t.e(7185), t.e(285), t.e(207), t.e(8407), t.e(1450), t.e(6398), t.e(1879), t.e(1357), t.e(9303), t.e(4566), t.e(1186)]).then((() => () => t(26750))),
                  "./index": () => Promise.all([t.e(5216), t.e(9269), t.e(5390), t.e(3443), t.e(6668), t.e(1403), t.e(1156), t.e(8089), t.e(7185), t.e(285), t.e(207), t.e(8407), t.e(1450), t.e(6398), t.e(1879), t.e(1357), t.e(9303), t.e(4566), t.e(1186), t.e(9415), t.e(4216)]).then((() => () => t(74216))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(7601), t.e(1403), t.e(1156), t.e(8089), t.e(7185), t.e(8407), t.e(6398), t.e(1879), t.e(9303), t.e(6624), t.e(5381)]).then((() => () => t(65381))),
                  "./types": () => Promise.all([t.e(5216), t.e(9269), t.e(5390), t.e(3443), t.e(6668), t.e(9028), t.e(1403), t.e(1156), t.e(8089), t.e(7185), t.e(285), t.e(207), t.e(8407), t.e(1450), t.e(6398), t.e(1879), t.e(1357), t.e(9303), t.e(4566), t.e(1186), t.e(9415), t.e(7207), t.e(9435)]).then((() => () => t(69435)))
                },
                o = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      o = t.S[r];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => o,
                init: () => d
              })
            },
            61024: e => {
              "use strict";
              e.exports = t
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
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return u[e].call(t.exports, t, t.exports, p), t.loaded = !0, t.exports
        }
        return p.m = u, p.c = b, p.y = a, p.amdO = {}, p.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return p.d(a, {
            a
          }), a
        }, p.d = (e, a) => {
          for (var t in a) p.o(a, t) && !p.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((a, t) => (p.f[t](e, a), a)), [])), p.u = e => "js/" + {
          185: "2c5c5e458f267406beb93161097ec29a",
          199: "797018dfddd05e2479452121fb505d6e",
          207: "4c6f54af0546121331db01f1db335f8d",
          285: "e443ddbd905540818cf1f8a33062cfe2",
          353: "a746197b6d7bb669894f035e063d05ce",
          381: "cae2bd854794a552ddcc2506881ba35d",
          431: "31e9d861c462152fbbf0bfadda35b7de",
          732: "61394d05cf669f2ef410f86dbedba41d",
          825: "df4aca53eb5021120a56d7f363a0a1c4",
          1156: "cc922efc646be03a6e96db0c8dc79076",
          1186: "5882632570e20372802dfd314e4fe2e5",
          1331: "16e852e05b5f9449cd20cb5322110e36",
          1357: "9f0e6f282c91e0007679e8a460c48644",
          1403: "ddb9799907f7446101f8ded56fdf5523",
          1450: "9dc567eac59c54512098cbaa834fe0c6",
          1469: "1ca4d2c5f77e885facaefc05b9b14da5",
          1476: "28f28788b569dddec014e35297bcde0a",
          1879: "fd6db654d72fc6bdacfc5fe94abe7b4c",
          2399: "7c331de457c6d6b81b43d7a1061bf921",
          2938: "98d38844ca416920812b348740bff4e6",
          2956: "dca5057c222b04e1c0fbd6d7a986231b",
          3380: "cd204f38b75087145557cef4b2a91826",
          3443: "8f4f7ddd7d0c79ba2373dbad16296ea2",
          3712: "4a93a5b14eda4c2c97a9baa2827db05d",
          4105: "3597ffbf788626a1c1af0a5ec009f230",
          4216: "d6245c53545470fe349b0f4109fd4dbb",
          4451: "13d879b9f9d975b14155adad9c3ce1b2",
          4566: "eda659b79959333915e05e535b236911",
          5216: "7c7a05add13bec4d79508952bcddb1da",
          5238: "afd32dff55fb854b1fa8addc95595bed",
          5381: "80065463a051b98b6e06db7ee314477a",
          5390: "d23f63a9a3f7763d2656f1959f32e35d",
          6008: "62dac402066abde3a5cfd6c93909dec7",
          6119: "c08f3465f0c151eae4729d41dd1062e0",
          6398: "b62b7a44f68c554b2b619cc10a10238a",
          6624: "50de575619ab692e1b29239ef9905aed",
          6668: "f12144d76f6cf3f037d82a6979e80ab7",
          7185: "c2666a9149566bae8996633b276aa7ad",
          7207: "da957446ae2156d9c488a2801a17472c",
          7533: "72b1a91348bf19ab3d3280e4cea76f71",
          7548: "f02ea06bd4743c90d4d0dc31d0a7121f",
          7601: "4b768d1180378a5e310fd028d50d0cce",
          7603: "de2cb01c5f5c999ea5b1f3561fcbcd2e",
          8089: "8bab15068b5f8709c6793d02556eb838",
          8407: "89d369fbace1d513bd0b21d0d3f3e07b",
          8500: "b1488d35eaef116c32559246a51b489f",
          9028: "f421c4ed14f59a8bb20458949109ad2a",
          9095: "4700061ee21766d6458f345cd5b9b952",
          9269: "555845f28f7ae560556f5c6d2cd00fcd",
          9303: "ca3201331fbd362f510958eec126035e",
          9415: "612fec2d7dcc713c4bd6f47f07bc9cea",
          9429: "b5743db36939360e0b1c4b02fff55690",
          9435: "b6217aa4110700388f6940bfcc4aa01b"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          185: "5672a0bf4d3545898b97650db9742fe7",
          353: "2437cf6a7a9dc144e5eb8c961218836a",
          732: "7804a8964f391fe5e1b3d2ce77453b1e",
          1186: "456dca2b8629a307259c740e9023336e",
          1357: "80f58edb53a08cb95e6ba5a5b8acc08a",
          1450: "0611f574324fcc42b858b9a1d630aa5f",
          1476: "0c21766f8df54569c7f33acd179a5d9c",
          2399: "f18eb4023cdc6af1be3adf478df55bf8",
          2938: "8cf9f02797101e0a1b5112e0edc7c517",
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
        }(), p.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), e = {}, s = "@rockstargames/modules-core-newswire-article:", p.l = (a, t, r, o) => {
          if (e[a]) e[a].push(t);
          else {
            var d, n;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), f = 0; f < c.length; f++) {
                var i = c[f];
                if (i.getAttribute("src") == a || i.getAttribute("data-webpack") == s + r) {
                  d = i;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, p.nc && d.setAttribute("nonce", p.nc), d.setAttribute("data-webpack", s + r), d.src = a), e[a] = [t];
            var l = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = e[a];
                if (delete e[a], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(r))), t) return t(r)
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
          285: [70396],
          825: [42158],
          1156: [74401, 42756],
          1879: [31879],
          2938: [78417],
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
        }, p.f.remotes = (e, a) => {
          p.o(i, e) && i[e].forEach((e => {
            var t = p.R;
            t || (t = []);
            var r = l[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var o = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), p.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, n, c, f) => {
                  try {
                    var s = e(t, d);
                    if (!s || !s.then) return c(s, n, f);
                    var i = s.then((e => c(e, n)), o);
                    if (!f) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                n = (e, a, o) => d(a.get, r[1], t, 0, c, o),
                c = a => {
                  r.p = 1, p.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(p, r[2], 0, 0, ((e, a, t) => e ? d(p.I, r[0], 0, e, n, t) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            a = {};
          p.I = (t, r) => {
            r || (r = []);
            var o = a[t];
            if (o || (o = a[t] = {}), !(r.indexOf(o) >= 0)) {
              if (r.push(o), e[t]) return e[t];
              p.o(p.S, t) || (p.S[t] = {});
              var d = p.S[t],
                n = "@rockstargames/modules-core-newswire-article",
                c = (e, a, t, r) => {
                  var o = d[e] = d[e] || {},
                    c = o[a];
                  (!c || !c.loaded && (!r != !c.eager ? r : n > c.from)) && (o[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                f = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var d = e => e && e.init && e.init(p.S[t], r);
                    if (o.then) return s.push(o.then(d, a));
                    var n = d(o);
                    if (n && n.then) return s.push(n.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                s = [];
              return "default" === t && (c("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(5216), p.e(9269), p.e(5390), p.e(3443), p.e(6668), p.e(431), p.e(9028), p.e(7548), p.e(1403), p.e(1156), p.e(8089), p.e(7185), p.e(285), p.e(207), p.e(8407), p.e(1450), p.e(6398), p.e(1357), p.e(2399), p.e(185), p.e(6624), p.e(2938)]).then((() => () => p(96532))))), c("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([p.e(5216), p.e(9269), p.e(1403), p.e(1156), p.e(8089), p.e(732), p.e(3712)]).then((() => () => p(51331))))), c("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([p.e(5216), p.e(9269), p.e(5390), p.e(3443), p.e(431), p.e(1469), p.e(1403), p.e(1156), p.e(285), p.e(207), p.e(8407), p.e(4566), p.e(2399), p.e(9095), p.e(7603)]).then((() => () => p(10294))))), c("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([p.e(5216), p.e(6668), p.e(1403), p.e(1156), p.e(8089), p.e(7185), p.e(207), p.e(1450), p.e(1879), p.e(8500)]).then((() => () => p(18500))))), c("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => p.e(381).then((() => () => p(20381))))), c("dompurify", "2.4.7", (() => p.e(2956).then((() => () => p(72956))))), c("lodash", "4.17.21", (() => p.e(9429).then((() => () => p(79429))))), c("react-dom", "18.2.0", (() => Promise.all([p.e(7533), p.e(1403)]).then((() => () => p(47533))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([p.e(1403), p.e(5238)]).then((() => () => p(85238))))), c("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(6008), p.e(1403)]).then((() => () => p(76008))))), c("react-router-dom", "6.17.0", (() => Promise.all([p.e(4105), p.e(4451), p.e(1403)]).then((() => () => p(4451))))), c("react", "18.2.0", (() => p.e(3380).then((() => () => p(23380))))), c("text-balancer", "1.0.5", (() => p.e(199).then((() => () => p(20199))))), f(99466), f(92969), f(60404), f(61024), f(25136), f(29441), f(49787)), s.length ? e[t] = Promise.all(s).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var a = p.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var o = t[0],
                  d = o < 0;
                d && (o = -o - 1);
                for (var n = 0, c = 1, f = !0;; c++, n++) {
                  var s, i, l = c < t.length ? (typeof t[c])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(s = r[n]))[0])) return !f || ("u" == l ? c > o && !d : "" == l != d);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (c <= o) {
                        if (s != t[c]) return !1
                      } else {
                        if (d ? s > t[c] : s < t[c]) return !1;
                        s != t[c] && (f = !1)
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
              for (n = 1; n < t.length; n++) {
                var p = t[n];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? a(p, r) : !b())
              }
              return !!b()
            },
            t = (t, r, o) => {
              var d = t[r];
              return (r = Object.keys(d).reduce(((t, r) => !a(o, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var o = a[r],
                    d = (typeof o)[0];
                  if (r >= t.length) return "u" == d;
                  var n = t[r],
                    c = (typeof n)[0];
                  if (d != c) return "o" == d && "n" == c || "s" == c || "u" == d;
                  if ("o" != d && "u" != d && o != n) return o < n;
                  r++
                }
              })(t, r) ? t : r), 0)) && d[r]
            },
            r = (e => function(a, t, r, o) {
              var d = p.I(a);
              return d && d.then ? d.then(e.bind(e, a, p.S[a], t, r, o)) : e(a, p.S[a], t, r, o)
            })(((e, a, r, o, d) => {
              var n = a && p.o(a, r) && t(a, r, o);
              return n ? (e => (e.loaded = 1, e.get()))(n) : d()
            })),
            o = {},
            d = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => p.e(3380).then((() => () => p(23380))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => p.e(2956).then((() => () => p(72956))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(6008)]).then((() => () => p(76008))))),
              54252: () => r("default", "lodash", [1, 4, 17, 21], (() => p.e(9429).then((() => () => p(79429))))),
              20009: () => r("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(431), p.e(9028), p.e(7548), p.e(2399), p.e(185), p.e(6624), p.e(2938)]).then((() => () => p(96532))))),
              32503: () => r("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([p.e(431), p.e(1469), p.e(2399), p.e(1476)]).then((() => () => p(10294))))),
              37920: () => r("default", "text-balancer", [1, 1, 0, 5], (() => p.e(199).then((() => () => p(20199))))),
              74459: () => r("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => p.e(6119).then((() => () => p(18500))))),
              26527: () => r("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([p.e(732), p.e(1331)]).then((() => () => p(51331))))),
              66713: () => r("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => p.e(381).then((() => () => p(20381))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => p.e(5238).then((() => () => p(85238))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => p.e(7533).then((() => () => p(47533))))),
              57172: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(4105), p.e(4451)]).then((() => () => p(4451)))))
            },
            n = {
              285: [89779],
              1186: [20009, 32503, 37920, 74459],
              1357: [54252],
              1403: [71403],
              1476: [57172],
              2938: [79493],
              7185: [61631],
              7207: [85865],
              9095: [57172],
              9415: [26527, 66713]
            },
            c = {};
          p.f.consumes = (e, a) => {
            p.o(n, e) && n[e].forEach((e => {
              if (p.o(o, e)) return a.push(o[e]);
              if (!c[e]) {
                var t = a => {
                  o[e] = 0, p.m[e] = t => {
                    delete p.c[e], t.exports = a()
                  }
                };
                c[e] = !0;
                var r = a => {
                  delete o[e], p.m[e] = t => {
                    throw delete p.c[e], a
                  }
                };
                try {
                  var n = d[e]();
                  n.then ? a.push(o[e] = n.then(t).catch(r)) : t(n)
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
            p.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                185: 1,
                353: 1,
                732: 1,
                1186: 1,
                1357: 1,
                1450: 1,
                1476: 1,
                2399: 1,
                2938: 1,
                3712: 1,
                5381: 1,
                6119: 1,
                6624: 1,
                7185: 1,
                7207: 1,
                7603: 1,
                8500: 1,
                9435: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = p.miniCssF(e),
                  o = p.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var o = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (o === e || o === a)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var n;
                      if ((o = (n = d[r]).getAttribute("data-href")) === e || o === a) return n
                    }
                  })(r, o)) return a();
                ((e, a, t, r, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var n = t && ("load" === t.type ? "missing" : t.type),
                        c = t && t.target && t.target.href || a,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = n, f.request = c, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, o, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          p.f.j = (a, t) => {
            var r = p.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1(156|403|879)|7(185|207|32|603)|(2|84)07|4566|6398|6624|8089|9303|9415)$/.test(a)) e[a] = 0;
            else {
              var o = new Promise(((t, o) => r = e[a] = [t, o]));
              t.push(r[2] = o);
              var d = p.p + p.u(a),
                n = new Error;
              p.l(d, (t => {
                if (p.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + o + ": " + d + ")", n.name = "ChunkLoadError", n.type = o, n.request = d, r[1](n)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, o, d = t[0],
                n = t[1],
                c = t[2],
                f = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in n) p.o(n, r) && (p.m[r] = n[r]);
                c && c(p)
              }
              for (a && a(t); f < d.length; f++) o = d[f], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), p.nc = void 0, p(32160), p(68623)
      })())
    }
  }
}));