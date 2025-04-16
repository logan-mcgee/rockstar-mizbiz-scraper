! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad16c44a-94a8-43a2-a1c9-ee5c5b4dab13", e._sentryDebugIdIdentifier = "sentry-dbid-ad16c44a-94a8-43a2-a1c9-ee5c5b4dab13")
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
                  "./index": () => Promise.all([t.e(7127), t.e(8742), t.e(2229), t.e(6682), t.e(3054)]).then((() => () => t(3054)))
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
          131: "a6285f78f3a62f487bff35237b91ce2e",
          278: "ee19cb61e2eeba57d01cf8fa45f57c2a",
          299: "0338ef0e59596e2f85b4c19f9ed40ed9",
          314: "4911cbcb3f7446c3b99570971364789b",
          662: "10d6b404c7668271e1696ec962885c37",
          721: "ed7ea91b3165e4862ab919199260218b",
          824: "072e2f2dea93f75f86a6908019925a01",
          907: "776c07c7d302e05880b8021ccfa1fad7",
          1054: "38399e7f21c831d1d3bb2e3e72b40079",
          1074: "4da5de0adf9400cde3efee73a01dc98a",
          1242: "e5c93a284817947076b4fe4825de382e",
          1299: "fd72288066d3905de743d1f90bcb633b",
          1673: "1730d397d6ae5e2839065a8a3fae1d53",
          1822: "1eed6420e8595272aea2dc97c64d5547",
          1868: "a40e00db382a90714221d08003b04e35",
          2024: "e2eea7bc6e81d23f235ae62dc70acab0",
          2156: "e248660d7cadb193ed0acbfb6d6776ad",
          2171: "e9afe653d97a9674023603658f13ec53",
          2221: "85ee5829396484b9b9e9b74ca05f9800",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "b129252d8f54bd535fac1551e98ac34b",
          2347: "c2c2c191791583c749ea8ab574d05bb8",
          2365: "ac7ff79eafd57578b8e18fadff6a842a",
          2398: "d62ed30fa317d378dee6ec83fe4d7927",
          2466: "ac968b9c25826492151d61117b33d0e4",
          2642: "1ebb7c43def585ffb102ab12f3bda2e2",
          2678: "76c3415ac3eb03d2b1557a44fc4aba22",
          2864: "3aee7a555a117344e8e1d71098b46007",
          3034: "8a286303edfc820376f31fdff5c169b8",
          3054: "9508c4858623b9192b58f0b1dcf02faf",
          3197: "403b3f550e1e8287405c4fce41de4a8f",
          3343: "6d92e8c287dcef399507915d36237d66",
          3370: "ac9d264c24093bbd8a8257d76e4d8d4e",
          3447: "0c7972661a33efc501871a0f6eb104e5",
          3475: "850b70c2ee1bfc42812403191fafe865",
          3486: "170812c5050e3e3ba076728301225e75",
          3697: "9e7a9878986b93555bcd036a1759d21b",
          3885: "d24615c6d54d06fedf2ad77bb3456c66",
          3941: "47cf053a8e1325f5260153ce8ec3a836",
          4011: "84878ce52fe252888fbb82590525d143",
          4018: "9e3b23586345341fb31bbc83fca164b3",
          4054: "2747cbb8f8f9843a86e0540362e08190",
          4528: "d1ee8bc4ea1178269a96026cacd22942",
          4621: "1fb724dc63dc29284c702cd1042e174e",
          4700: "9660aa229b33605882dd485b858a2d02",
          4710: "a4046fdaf3d229c85bafebc12a9a4e75",
          4731: "c145f031b2c1cdb88628f53a660c6e48",
          4799: "f8d9b890063688fb1368f9403f78278c",
          4851: "a245b485e95558e7a73806083cacd08d",
          4861: "5622be5fea3adf2df236532b7e33590d",
          4913: "11a3c69c8f11de9432d5525474a82ea6",
          5018: "8e450aba7fa55d1096c6ba410707bd35",
          5233: "988009c7aabe7f42a2061eac2646be21",
          5254: "6f02ef0172b8f98dc791e51434160922",
          5259: "238e68ab4bc34dfad7318a9a036c1cdf",
          5530: "6374df5a81e9e474b1896dd8b13bbbe9",
          5639: "af0f5a5ca71a27470af933e33ec45fd6",
          5663: "dbc410e75452a6390f4b254070bfffbc",
          5742: "e8ff13c7f629aedd9d99734be42353bf",
          5830: "f6a7bd898474da47a5d006a18379c60a",
          5832: "d10fb6c972137e4525b11fca9e56f7f9",
          6267: "a6a6a2d3c4b277fd131976c151a3d608",
          6280: "a2e46c5e7982fc119281ea570ae6615e",
          6285: "5a0f4f4271e81843f7d4e6ea62fa1207",
          6361: "287c5e72a043bfa69f8e0d944ffc87b1",
          6664: "0f8b2ebd02b1d1afce5b81773d610441",
          6682: "49d642c5874769c9c9bcd6af951c588a",
          6879: "643247eadc8e84a46d930b0742fc9ab7",
          6891: "e23c1c0b77f4828ed6faacc4888c099f",
          6997: "21b52bc4a1504a5072eb2efcae09ea27",
          7010: "a483fc7ce348dd0a16478ccfa1fa9ba4",
          7073: "b16f4cfa50867ada2a653aac70d7b9b6",
          7127: "6ed3ae0c10a767ddeb67b88ab9908762",
          7436: "0d0c046ccaa35d6e5002c13cb1d8aa84",
          7452: "8f7a87f1e6476053c010e8de459f46a2",
          7453: "30594c167ddcb7963eb35abb47afb651",
          7970: "f86979f36ea0d544f08a3f06e961ec84",
          8272: "8871b380d13f1ab81493590d149febc6",
          8391: "c173907863ecaaf8fa2fb6449ae538d1",
          8742: "693690a8414e3fe689d326ff64ea7c7c",
          8755: "4dffc129e9c2b2eeb1ac610385c60048",
          8880: "33d2ab72fcfd0a97985aa90a25b1b129",
          8970: "dda77d9afefe8fc75c15541ebfe7e514",
          9022: "835456eca87c6ffe3788dc0777e56207",
          9028: "b66f21dacfb23c2a4e062291d6c589e6",
          9126: "548a8429ed95243b62995585e972f2cc",
          9235: "dbeac4f065af868c900dea6ba64963dc",
          9377: "f062d1f4ff3f1320c22592e82f31c5ce",
          9615: "25635db37d328d3f0a16a21791e1552d",
          9936: "336325ee512d5b8c7cc392338290f0b8",
          9990: "7dd015093a2eddc0d736a8af694b4ff9"
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
          3054: [1879]
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
              3054: [236, 1788, 3582, 5966],
              6682: [9623]
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