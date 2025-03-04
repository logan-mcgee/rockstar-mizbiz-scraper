! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "83f27ebf-f9eb-4c4a-9c1d-37bb141b2828", e._sentryDebugIdIdentifier = "sentry-dbid-83f27ebf-f9eb-4c4a-9c1d-37bb141b2828")
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
        var e, r, f, d, c, n, o = {
            9293: (e, a, t) => {
              (0, t(1789).w)(1)
            },
            1789: (e, a, t) => {
              const r = t(569).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            3358: (e, a, t) => {
              t(9293)
            },
            569: (e, a, t) => {
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
                  "./index": () => Promise.all([t.e(8034), t.e(2169), t.e(2229), t.e(4204), t.e(6341)]).then((() => () => t(6341)))
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
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          131: "88acd5824a45fbb245d4ebc5d0d683c7",
          278: "f7704b3d49c681b0ac8f6d132a75cace",
          299: "948d70eb720d90de39840033b83fa829",
          314: "a29d7ba686b9dfa6ec3dd9b6d942325e",
          662: "102cd7bdd30ceb17b8525f7d9e7ed400",
          824: "44585a5244588023b783d3bd147a77b0",
          907: "7720e0f07d1445bc3c6aec5c762d569e",
          1054: "4bfd3ce954676c9f14a1db8dd7f0c21a",
          1242: "2d5c72ba014f00aa507610cfa5d48aa0",
          1604: "833111f8c9bba5c9c3c0d22d956c6f8d",
          1822: "609a761e12b1c66624c78027b299017b",
          1868: "26cb555b5837a25ba93f90d966fae2f8",
          2156: "fea096af8dea93198f4eea65bbb4e9bd",
          2169: "339297c40ed80c7f237d7a24173caeee",
          2171: "7c21200700016ded56320198b0bb9326",
          2221: "adb0d49ead206a675375c4f8dc5b780c",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "a567d740364bea621bd528843fbbf825",
          2347: "9b249e399e8eff017d8d4ea48e56fe76",
          2365: "a43182b1dba3ffcc346e1b6cf377f014",
          2398: "d365ee754b8b47691dbc93e82cb210ae",
          2466: "a9ee807955371497c2b9c401bec6cd3c",
          2642: "2c72b0acbf585bde612670d43181054e",
          2678: "f02b3b9e85be3d0f9b4ff9f8d863faf7",
          2864: "738c8a79aaa4a72631eb226bfd712cea",
          3034: "ba60afc467047dc1044fed8d2082455e",
          3197: "c05cbe890bba09ed4825da8947733df3",
          3217: "52d4056375a514f4797097c20280b28a",
          3343: "c05bfd69fd18d645fe28fb408ff757f9",
          3370: "d9a49ded7badd724f6bc4722021c74b7",
          3461: "ca9f6f1e63bc771fa6f9306ebf88041b",
          3475: "a29fd3e2d6eefd32ea26f9ed9f695074",
          3486: "0282949a345cf96e103b34ad16f8b732",
          3697: "4dce926f1f57bc55a74933201d7fe314",
          3885: "fbac022ed0f8870491bf4acc94630515",
          3941: "53ff772f3bf1c581bb6f7996e23971b0",
          4011: "5fe378e3b40518423260cedbda2ea8f8",
          4204: "d55316196071481967e762537be54ce6",
          4528: "d98a1170f932705b7e1183a3b2455026",
          4621: "334ff4ccd948e929e2b4753261c0bd72",
          4700: "94ea143a246ccb2d3b884ae2280066cf",
          4710: "a1102b6145d9402d7305749012ae1a57",
          4731: "626758582ff9dd766203208ed549e4ba",
          4799: "d1e6748877a09225d6bbf03ab30d787f",
          4851: "56e91c7e12b1909e97c180173660e960",
          4861: "aeae66ea6b369c69f0fd4d7dc6ba4f25",
          4913: "9783da7f68c62153b4b1a3e712a34f06",
          5018: "6a7edebf08f42d2ef96ed0fe00ad655c",
          5219: "ee42a9109e996def2d70d9a3369075b5",
          5233: "afa3111d5e88b6512fb646db482d88da",
          5259: "6dc1bda0ecf772aa5abc520c292f7496",
          5483: "7ceb6796c315cea0f7a9578b976d5ff1",
          5530: "0e72fcf5250f766112ed396be7b2b586",
          5639: "53e564caa0300bcd9be6a7868d23d5b5",
          5663: "ec3c9184136043a51c7bd4726922e165",
          5742: "06d3d251c8af3c6faa3587240d41e367",
          5830: "e233725f1ed81a5db32246f0c8d9599a",
          5832: "9e943b29ea29600ea48cce8a23a5f04c",
          6267: "21ce68618837745231f90d3fab738153",
          6280: "0d3504500903f46a2afda742d8eb8606",
          6285: "7a9f270704a47e4cfb57025226532178",
          6341: "90f1cc433a7b60410ab24f24530d7f2f",
          6361: "5e90f16351b26012d53d6a70136fd700",
          6664: "d3bb14676744ee5eee83a1ab86218fcc",
          6832: "5a4bd7645da3318f7bde6787e1256e09",
          6879: "af3a90d3041d1ad06cffa862bd6684fd",
          6891: "0661b84493a61c2b92ef75c0e4cf61d4",
          6997: "5c0306fbf6825d7b2c1121c8daf07ca1",
          7010: "53ce77f421bc8e3eab61ae8d123d60a9",
          7073: "88e5085e2591b52aa89b531114289eb1",
          7436: "d7ddcee7ed2ecea218f55d50d54db13b",
          7452: "6a43b7bc2e41ebe5d003644a06fca5a3",
          7453: "d0ac8e4d4e3c2e1187c14db6b7b8667d",
          7600: "fb5096e33653ff5628def4a51d2feb1d",
          7970: "09ea20d3d8b9283dbe2fe30323a440c3",
          8034: "35771d0bc354fdf8acbf55e49ce432dd",
          8268: "4f35eb4ee4c72b43d58afbdbeead381c",
          8272: "2f3a7005ff404173760619bdb70b49f0",
          8391: "1ce8878f7b3b72979f809849412e38b4",
          8755: "7dff049e7d81dc5dc3b071dff8b2d464",
          8880: "cb2b292da042814de1eb72e9e2080cbd",
          8970: "0e9953e4144ecbe3af726481250c3d44",
          9022: "af49864e6437c742bb8a429b1b0523c4",
          9028: "bae3b5ad3d0dec837b70f41b19f7f9e6",
          9126: "63f006b7d141ad253317e0accaa50b08",
          9377: "8211020d0206777ec3bc3f14892f7156",
          9550: "5374d60620612373699fc39f0d282f06",
          9615: "ae96a338f4e70660597b1810a974082f",
          9931: "a37fc55aa3cdd507d7ad5963ee6a8939",
          9936: "0ea6b4d52c4e38418a3a341850113e2a",
          9990: "0836608d819cb4cf3b903a4c908b46e2"
        } [e] + ".js", i.miniCssF = e => "css/d2a8bd37b157cd9873595ca864ad9545.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          6341: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, o, f),
                o = a => {
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
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(5483), i.e(2229), i.e(5219)]).then((() => () => i(7768))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(8034), i.e(2229), i.e(4204)]).then((() => () => i(4602))))), n("framer-motion", "7.10.3", (() => Promise.all([i.e(9931), i.e(2229), i.e(3461)]).then((() => () => i(9931))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(1604))))), n("react", "18.2.0", (() => i.e(3217).then((() => () => i(3217))))), n("usehooks-ts", "2.9.1", (() => Promise.all([i.e(8268), i.e(2229)]).then((() => () => i(8268))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (f.then) return o.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
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
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != t[n]) return !1
                      } else {
                        if (d ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
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
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
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
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(3217))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(1604))))),
              236: () => r("default", "usehooks-ts", [1, 2, 7, 2], (() => i.e(8268).then((() => () => i(8268))))),
              1788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(5483), i.e(7600)]).then((() => () => i(7768))))),
              3582: () => r("default", "framer-motion", [1, 7, 5, 1], (() => i.e(9931).then((() => () => i(9931))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(4602)))
            },
            c = {
              2229: [2229],
              4204: [9623],
              6341: [236, 1788, 3582, 5966]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var t = a => {
                  f[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
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
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                6341: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((f = (c = d[r]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && ("load" === t.type ? "missing" : t.type),
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
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
                n = t[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(3358), i(5819)
      })())
    }
  }
}));