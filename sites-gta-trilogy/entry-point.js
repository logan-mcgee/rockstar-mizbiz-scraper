! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6f225458-539c-47ef-89d3-4efc6a2d8987", e._sentryDebugIdIdentifier = "sentry-dbid-6f225458-539c-47ef-89d3-4efc6a2d8987")
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
                  "./index": () => Promise.all([t.e(8034), t.e(2169), t.e(2229), t.e(4204), t.e(4778)]).then((() => () => t(4778)))
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
          131: "d8976c4770e5a8a0122646c43e21ae26",
          278: "141f22886e414778eb488464a49712d4",
          299: "992bb7a4b4823c46286fa6b868b9558f",
          314: "c5765940edfbaccf820fed503fa124b2",
          662: "44bb7767a752854e9bf2d70186b6928e",
          824: "5a1f0e15817bc6487a7e3051811e7c12",
          907: "88154d0db72634cbd40346cb8e4120f4",
          1054: "4a88797138b23bb4dad24e91470508d8",
          1242: "6b90fa77724f10a37e753ea826120ba8",
          1604: "263be471e942ee1bd05eb5ab37d947f4",
          1822: "cf8381425d63e82fe525668ad4bd4094",
          1868: "56efffd404542f35b37e67c03731fb63",
          2156: "571903554df7d69aad561887643a853c",
          2169: "023ee667bbeefd9410eca84edf958bf8",
          2171: "e14d755bb446e25ea059de8a033722e3",
          2221: "af316fc72a54a5057213a56f0ec5f392",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "6ef7ec005f3177367268dd1f70b32dc1",
          2347: "e07d3c9cda29851cabffb640956375c8",
          2365: "658f0167b361ade49122a467f020078f",
          2398: "627fd5e7bf96fa1762261d6c12c5c05c",
          2466: "fe7752c25dcc874d1056c5b05f09a76a",
          2642: "74c8eba29b795fa0e11c482c72d3aa7b",
          2678: "add99bc052038504d4cca99cea8dbbbd",
          2864: "4de6beb884dee35a60f9a50dcd248e77",
          3034: "6c10b4a2f6a300655a3c0dc0ff5aa744",
          3197: "030b3cf284159484bd542910d477c70d",
          3217: "0937549cc2a94562fd2e382ff674f547",
          3343: "664163de069426de31a8ea70a646ef5f",
          3370: "d78a7ec4207901bb3cc1235dde575f45",
          3461: "9cce6a94488c9499e197d982af9afb7a",
          3475: "afa28e7a8d542d31fd69045e7679ae80",
          3486: "12464d36807aab90d6caed3fe9cf4f52",
          3697: "a1f095e0fdc807df3b8675215764dab4",
          3885: "e01aadb610809cd9dab2fa27076aa1bd",
          3941: "e7de407fca18f844f83c1d213e259382",
          4011: "5ea4b9d99aa28ba1808d8c0dca86b976",
          4204: "b9e4d473a486f8621036826e02f30612",
          4528: "e918e88bbdf3b5983c723960822567c0",
          4621: "6977a1b67345e4cc0e52633ceb3507ab",
          4700: "d202e98529bdb62919a6efe867af66fd",
          4710: "c5c855f14a5aa04e555da73b4b8fe3e0",
          4731: "1688290639abb3c2dd14e65c9c1882a6",
          4778: "651d08e5d8858eeba0522e1dbd2ed1e9",
          4799: "9687e48524ee74ec7d3030f9af55fe1d",
          4851: "c669ee9fd3caf6f0ca31654cface2b62",
          4861: "26552113aae1235431a670dce36dd89b",
          4913: "b7e9ebac6426b9bf287b642dbb7e521a",
          5018: "8995c5ac8e55f52759e98092e688699b",
          5219: "7b2098717921ccfa0d479957fe869735",
          5233: "9e20c1e66bbcaff996f026a7b8ad0ba1",
          5259: "fa24f1317b3b254bfd843d73889e7ece",
          5483: "5ebde5c4c6a6697c80f0e67b52cc13b2",
          5530: "27ea65c212cdf2939345c1a72a5d6821",
          5639: "1c98d8bfc839a3ede2413c1e6149c1ab",
          5663: "2ca86ac826d31c2c6f4f029bb5df467a",
          5742: "6a143832c1ae43203924c36a966593ed",
          5830: "f9f6eb4b0bccce0fbb38656ad5064f5e",
          5832: "2fe70eb392601ee88bc0e472f9bcabba",
          6267: "f07c8f9e635b3b407bd8dd5d4e651f05",
          6280: "b71f46307838fd93f7670ecb5d191a93",
          6285: "5788fbedafb251f96d902cfc3034a6a0",
          6361: "475cc0f79de86d16eeec110657119b3a",
          6664: "97bd1de67592543632383322e1d9a667",
          6832: "8c429cceaf4fde02725ffb8345a54987",
          6879: "f8cb8aeb0d68d81e14c01300062f4bcd",
          6891: "971426cfef6224618a7a4da15c68fa88",
          6997: "455469a5399acfde27dbebeb0cf081be",
          7010: "a0d16d446c80f3e223fa1820b1086ab8",
          7073: "0f5e0ef113bd7431ef2b6d67c2f2594f",
          7436: "660c4337982b29506fb27b1eb6524bbe",
          7452: "e91720351d48ce557b16a00a807f4868",
          7453: "b41ed5c1aff927ab3524191a98ad2ad8",
          7600: "ebef86ccccf4f6b2178664e645860bec",
          7970: "df5b4dad6e674d2e3c3fe8fa6515bcca",
          8034: "a36038105d56150848614a90b9aa21c1",
          8268: "6f1daf07e02f34c985bfbcc4982545eb",
          8272: "1ce1ad664012460aa9ad7b05cb9c6f24",
          8391: "7110396534c2919b2c958a217dbf834a",
          8755: "9ed5eccc629be1fdc8ac9b5950eccc82",
          8880: "6a22146b9e3118a4f34676da62fc4be6",
          8970: "00e5c86272bdb8d9755b1dc9650a61c8",
          9022: "8953160bee4683b2ba9caa7613465aed",
          9028: "b5752d0d9e02d1b9ec102b27f810c7f8",
          9126: "f3231c75a82a1b4612b8166e41f79c07",
          9377: "8d6af0171e187ee04702dd1b91f49b30",
          9550: "0996d65c2e573400472aad266f8d5d9a",
          9615: "a002fc53035f1146b880ab90d88ec944",
          9931: "0d4359ca1415aeeb68fb96a7188cf6c0",
          9936: "40230385faa09fd2741307c1f7ebb598",
          9990: "140d870a226ce2bbc92e550fed470004"
        } [e] + ".js", i.miniCssF = e => "css/0dca5a2e94bfc1a1e76bbd09c45c386a.css", i.g = function() {
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
          4778: [1879]
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
              4778: [236, 1788, 3582, 5966]
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
                4778: 1
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