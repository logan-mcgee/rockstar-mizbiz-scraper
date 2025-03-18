! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "29c0da36-76cc-47c8-8baa-16a5af14f40d", e._sentryDebugIdIdentifier = "sentry-dbid-29c0da36-76cc-47c8-8baa-16a5af14f40d")
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
          131: "fb6e5b578ae61573022ecf03eafb8042",
          278: "7f4aa880d7ddb965173f0b9e84554694",
          299: "50637bf0fa42f389c3b7d841518d6901",
          314: "2b5c458eeadb144e13c296df5878c47b",
          662: "a87087a08440a34f978983d2d03f457f",
          824: "cae682897bae579ac25c017061679620",
          907: "4ec5fece9b0a19c4d2a8cfa0303bcff2",
          1054: "861bc416c929d27d26bf332f3a13b237",
          1242: "d93525dd9ef5bb85f3a8483bb15ead07",
          1604: "d1afa81032f4c70378fd14c5897d94f5",
          1822: "73031a55fb85ae2f2bb1748f07a01227",
          1868: "72b1404fc67586e8940f1ba44f8951d2",
          2156: "aa0e82fdbace7b011c02ea54539cf400",
          2169: "f6ad17fcbe80309c87f64c0b22126534",
          2171: "451f6922495bb4df9969f02df5ae5547",
          2221: "43be77d9095cea64c1f75e55d81e3d6e",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "58e450df11199d7d674e4c9f994892d9",
          2347: "e03871d8b7c56b0fd6a40ea8e7cd510f",
          2365: "0bc4500a0a69571f7ab6775987214657",
          2398: "5d2999842eb54a3d5e43fdc723cbc06f",
          2466: "e5d6c666bad9a039760a812468a2db91",
          2642: "b99e97d1762fcffab8f6e325b6b3a886",
          2678: "4d1754494ee5eae357e3f21772d4c50d",
          2864: "eec577860a184ac265d609d281242221",
          3034: "e56a02b39547d6de0c330dfdf117c1f6",
          3197: "2961381749b92f5a9b432ec49ba554ea",
          3217: "5c000055a5f3da16b1cbc02f87ac435a",
          3343: "c27b65b64b4140b4cc3539eabf9a7a5b",
          3370: "5b75f576886398d2a5223b822f4f3b14",
          3461: "edf18c7638d078123f0413c5904eb9cc",
          3475: "4d004cee504712342f294a17cb022392",
          3486: "407807b9d273bfab476898a2ec529373",
          3697: "906c209f70c3b9a9eb1d8cf13e1937de",
          3885: "47de5b70b93186817256dc5304b75c17",
          3941: "2d0a9b1a2ad690b3d0ab1b27835400e1",
          4011: "f3c205939a479558d7d2e691016fd695",
          4204: "ea807ba709447e921e079ae98e5cb988",
          4528: "b4acc07fef09ef03acdae7e818f95b27",
          4621: "8aa3e79b8cbb1989aa12375a36b36342",
          4700: "32735212239f20d1d6a85f34e1b1bcaf",
          4710: "1d6ffd795676c715a61cfeffa0e00625",
          4731: "c03bb7a3909d3205ca43ace07adaf547",
          4799: "809cc267f357e2cdb1f8bef7df988d98",
          4851: "b3514697163941f3afc0142d1e99b2f8",
          4861: "0ef7344ad3b1e69caa0b539af658d342",
          4913: "613a90a91cd3c665ef5680daaa63baf3",
          5018: "a2137666c8c24bd7664e98e3ccffc6a2",
          5219: "8621c653a73f92a8115c69d5b30ecd05",
          5233: "c4169392519f29757c31ea85b46c48e0",
          5259: "145b6aacb84f29643f5af9148e60ae2f",
          5483: "930cd3a7d8db5bfbc5c51f26ec5c0808",
          5530: "0609c400d1d2da36b2df19f12bd3567e",
          5639: "bf6a4eb9ac5430166871f72c1f1f60ca",
          5663: "59a61dd803e9f662952c130f7510fcb4",
          5742: "21e5af610b06a70ff057cf7b05d2b004",
          5830: "4280d736846959fea4ccd5b16352756e",
          5832: "83c24125536e9a92510f9225330a345c",
          6267: "e14e8ba6eeee7b91cfd50418f8b25527",
          6280: "b21b0d8069e24abff12d0e77561ed011",
          6285: "26b499dd7a146ba62ab3d8385a774449",
          6341: "9d6afe8dd58e6df23385fb14c7c9ac8a",
          6361: "f88314363b9489b1126adb0ba8ae9e89",
          6664: "d16c0327d8900190cad9abde58d9008a",
          6832: "ac80a74acf9b634140a2ea469c549642",
          6879: "226f198ac90fcb04226d7e4ebc03a521",
          6891: "8294f4087609d50e80da138f867409d0",
          6997: "eed2927380dd0b23a09f29fe525b1044",
          7010: "cee8fa68583352c354dc61e49e71b07d",
          7073: "7673811a5118002261ea59369dc84009",
          7436: "460994930a7cf22fb06fbfcccccd4b75",
          7452: "8d6e752a2cf442b8270f8777c7ac0567",
          7453: "12322c34469df1346058d983a34bc779",
          7600: "52333bb8a07f0b9e5a1098bd02abff03",
          7970: "f30ab86c28eb2e1763f61b01d8d98fed",
          8034: "5e0f588a832f7ba77e67c445f8bbadf7",
          8268: "21b6e989e85a45e2ab2ab40ba4dca800",
          8272: "ed5f5a53cf1f2f036a5d38a9809d2605",
          8391: "0be5723327da689c182e2a1890635b8e",
          8755: "f27ede66eabe783996ebfba1e4f5f46c",
          8880: "a2f3f385f5c4f3e337362eec4269b459",
          8970: "b83ddbf640da2793fe052a098085303b",
          9022: "82df0ab065b953aed289083ec0a0a3b8",
          9028: "9d4f211c2c12778c900dd28fb28531ab",
          9126: "6010934c5094789f4578461761464aa2",
          9377: "efe90aa578df636e9c8a5f787b5b4a1f",
          9550: "49e33c74b8131a80b1c33f05e386f448",
          9615: "9539754bd5bcd584805b354b07851620",
          9931: "fbd8ce509b36b7cb65b2cb3b4b942188",
          9936: "a99b1c842f5dad5d5ec0e25959aef8b2",
          9990: "ffd7154a80032fa9c3fe96a77fc9b8d6"
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