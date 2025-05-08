! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cc4881a7-1d88-4da0-963f-caf0822097ee", e._sentryDebugIdIdentifier = "sentry-dbid-cc4881a7-1d88-4da0-963f-caf0822097ee")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, d, c, o, n = {
            4075: (e, a, t) => {
              (0, t(7387).w)(1)
            },
            7387: (e, a, t) => {
              const r = t(3099).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            5408: (e, a, t) => {
              t(4075)
            },
            3099: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(7127), t.e(8742), t.e(2229), t.e(6682), t.e(8025)]).then((() => () => t(8025)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            5136: e => {
              "use strict";
              e.exports = t
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = n, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          131: "6342068918fac07aded352927cb7cb7b",
          278: "ba4f146f71fc9fdcd47854dc710257d8",
          299: "fe9b13bd33340bcaa8be30b5801422f0",
          314: "d3e71fc1fa4a77b1de9e849344ec9669",
          662: "dad246294131ece55d25ac530aa9cabb",
          721: "6fc1c9479447943a8f9c82ba70c6994b",
          824: "10b619c225be69293aa4b495b03b5dec",
          907: "757ecdf62824c56d440cc022eabcd844",
          1054: "32a58e79962f926db2fcb50e4a85ca22",
          1074: "f64105dd24eb2f1857eaa3956d57b177",
          1242: "a5c50621971bb5c46d06a5772f1bbd12",
          1299: "7cd29aa622bd85e6b44936992a2d5838",
          1673: "458cd0bc5af3d04cd9acd3f569443602",
          1822: "b91d0431c5fa71751e7c8efbe292b63c",
          1868: "e437c673837e0720c2bfd401d0ab1956",
          2024: "58b7006f8b5ae2b4563f88b4de680288",
          2156: "862922099d7cebee1ae8a756d8a0fd54",
          2171: "13557486f4b981b13ede99f68f32c5a4",
          2221: "312b8109d1be335fd03d9eb10e58f182",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "53007714a2799b53bc347eeff8f62f73",
          2347: "60f11ec49b4206c270c206127eaf830b",
          2365: "954c07844f20902069ecbbc5bb98b3fd",
          2398: "f1034a8d78ee162be91db2046ed021fc",
          2466: "b30c6fda7bf90dfacb3509e4a330c38e",
          2642: "36b41c65281972290d14ba5152321de9",
          2678: "b3b94d437861ed7d528b33309585cbd5",
          2864: "671d25987437f930efc3ae8afa016c61",
          3034: "e2b3ba4d97beb2286f0f87746ce028fc",
          3197: "4000cc2eb31d161f37249841efd63c7c",
          3343: "436223fe740a41a8bfbe2bb7414948d6",
          3370: "e21ff1e0fd36a0dc7ea1b848f6cb2540",
          3447: "e6320052e7d3f87d56b4699ade43a3d4",
          3475: "37ca10c62c5fb0125231b508329fda93",
          3486: "a14471d9ee81fe61bf215968eb2af77d",
          3697: "91ea0b910bcab820cd5123698b149ffa",
          3885: "7e6cbc0f1ae42986279e0fb235d5f02e",
          3941: "fa61ad7d8ab43184c58e55eb655e50c1",
          4011: "b5a607cc894471f1a6154849ebc51c7d",
          4018: "12b5d0165138febba65204a440f822a0",
          4054: "eda80871c1c461cb4cf279ca985af449",
          4528: "407a28256136280f27df9037b16153ab",
          4621: "77cb7314c80b43e671b0c3e4ad9dd27a",
          4700: "c9899454e04b88374df0d4212f24b26e",
          4710: "4e41ee76399d08740a29595c9b4595ec",
          4731: "f7ea48fba8b4b1648b07b4c959b190e1",
          4799: "0f0078938e35aa06f9d791109d9b9463",
          4851: "0172c636ff5b96f71daac83828799fb2",
          4861: "817a236e5f5ffe634d9382b0bad59e08",
          4913: "9d32a03915fdabc72c5456b975222669",
          5018: "d23bfae975bb10f90647f44bdc6f9a4a",
          5233: "641b9d048c1b1597103759439550c198",
          5254: "a25ee7662b659bc6c68d20cad0e8cc5c",
          5259: "4ccf6acc2f457eb9ed4f06aaae5d103b",
          5530: "5f3e5c65d43292d9571b6c13e67d3395",
          5639: "815be7239e95a8f2ccbfa8cec7529aef",
          5663: "820885bec415b145dbf151c74349ff99",
          5742: "a1e42ff18aae80640e3659549faba251",
          5830: "ab3910e35bcdf33b275f5dabd3cf2302",
          5832: "bf7d7f318d481d1a3cf3b436aa67fbb6",
          6267: "2dd7b410edd0e3c2ddb730cb94695a67",
          6280: "23a025409d719a3af2b29ad3df9f4882",
          6285: "0cf1265a8b9fe793521899a5e9b6d498",
          6361: "3958ef3acf80e463e436d6041c81cf26",
          6664: "81e3095cd921e7a014a756453cf1ef73",
          6682: "27a623a4b985f3e53f195cdb582ee69e",
          6879: "353cdc233a658314a9e22637f4e231f7",
          6891: "7bfd24b598e9484e6ef52bbdac995013",
          6997: "47bd1410184d1372c88be228963efca1",
          7010: "f3cf8b0c605c7ac8484b1225daff2156",
          7073: "4bb0f82b428822a0be394ba75a9e8a83",
          7127: "049e4de17ea89ef49c0d3265adfd3224",
          7436: "3030bc42c3d0a04828f83148b41b0d71",
          7452: "4b6d9501a4739e7e97f3b5e52434044c",
          7453: "6d9a9fa5f53e99a0bb0885c3042ff386",
          7970: "3bdac50e87a959ab64a69ea104dea65a",
          8025: "3f96e8163d5b16c4d8d7dab7fe3cf47a",
          8272: "a982654ff468776c35b016b81b213afe",
          8391: "32d8c57126f46590583c43f7dcc26c44",
          8742: "2d245ae1a73a37af2b02ed7f7c3b44cc",
          8755: "3367a939c528b1f22cb2223c292792dc",
          8880: "a96747059d314132f199e883b58f123c",
          8970: "feb7e06ec68f1c28bce18a73be3f7422",
          9022: "3f4627ccd7aa71e5a8459ec1d98e3318",
          9028: "0d67b3b4812b9df2c9e04bb625fa8f6a",
          9126: "942a2c845f099775788845e596c38738",
          9235: "7eed1d48dcd9aec0ccdfc6d2b9d5bcb0",
          9377: "e2c66afa69334456d9af2ac04760bf7f",
          9615: "a9f865188c859ead47a673870ce7fc7d",
          9936: "3ae993a591394898823f8cc412345d89",
          9990: "26559a773568e303d0015cdcbef67a36"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          8025: [1879]
        }, o = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, o, n) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, c, n);
                    var i = b.then((e => o(e, c)), f);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, ((e, a, t) => e ? d(i.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                c = "@rockstargames/sites-gta-trilogy",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(5950))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7127), i.e(2229), i.e(6682)]).then((() => () => i(8267))))), o("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229), i.e(1299)]).then((() => () => i(1616))))), o("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(4018))))), o("react", "18.2.0", (() => i.e(3447).then((() => () => i(3447))))), o("usehooks-ts", "2.9.1", (() => Promise.all([i.e(1074), i.e(2229)]).then((() => () => i(1074))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (f.then) return n.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return n.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), n.length ? e[t] = Promise.all(n).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
                var f = t[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, i, s = o < t.length ? (typeof t[o])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !n || ("u" == s ? o > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= f) {
                        if (b != t[o]) return !1
                      } else {
                        if (d ? b > t[o] : b < t[o]) return !1;
                        b != t[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || o <= f) return !1;
                    n = !1, o--
                  } else {
                    if (o <= f || i < s != d) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < t.length; c++) {
                var p = t[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, f) => {
              var d = t[r];
              return (r = Object.keys(d).reduce(((t, r) => !a(f, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    o = (typeof c)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(t, r) ? t : r), 0)) && d[r]
            },
            r = (e => function(a, t, r, f) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], t, r, f)) : e(a, i.S[a], t, r, f)
            })(((e, a, r, f, d) => {
              var c = a && i.o(a, r) && t(a, r, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(3447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(4018))))),
              236: () => r("default", "usehooks-ts", [1, 2, 7, 2], (() => i.e(1074).then((() => () => i(1074))))),
              1788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(5950))))),
              3582: () => r("default", "framer-motion", [1, 7, 5, 1], (() => i.e(9235).then((() => () => i(1616))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(8267)))
            },
            c = {
              2229: [2229],
              6682: [9623],
              8025: [236, 1788, 3582, 5966]
            },
            o = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!o[e]) {
                var t = a => {
                  f[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                o[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(t).catch(r)) : t(c)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            7060: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                o = t[2],
                n = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                o && o(i)
              }
              for (a && a(t); n < d.length; n++) f = d[n], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(5408), i(5819)
      })())
    }
  }
}));