! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "130fc4e0-20b9-4204-96e1-df3efcd283dc", e._sentryDebugIdIdentifier = "sentry-dbid-130fc4e0-20b9-4204-96e1-df3efcd283dc")
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
          131: "2668de5f070f635dd97f488ffcd0e7ad",
          278: "bf11e3051b26536e8fe2a6da6f7f2782",
          299: "b5a6bf806b0b5638ad8a357e7185d723",
          314: "80f0e512832157926ee2a9be26b02744",
          662: "65e6d9b5dfff3de68e7b3c5f03325cec",
          721: "a68facc471125ea4c07b23e52f8463f1",
          824: "f027700433031f2a9a6323aa6ce9e0ee",
          907: "dada3701db292a16768541be76467d9f",
          1054: "b32d3b7ba9548a6c70cc5e31463d5525",
          1074: "448d810e2b8618e46ad126370a7e51cc",
          1242: "ee0e880bddc6cd93aac2f667d86ea48c",
          1299: "1d493ae7b998c8a419deb3fd409f7573",
          1673: "ecf20e21707ce7bfd89b40613ac0e13e",
          1822: "87b1a53bfc7de8642a7ec7db56e8d607",
          1868: "51b56cf048633635a16dafdb2834e170",
          2024: "fb8ad25a69d4bd70cadc253c769f0cfc",
          2156: "d2c28af60a67fc3474fb17abfdd3ea54",
          2171: "b8b2ecf97b850afe56f797c966bbf427",
          2221: "bb01711e9e1fd1e614d9fd0aec28ea48",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "49458ae058091d202afb7b4facfc1771",
          2347: "e078c5e6ba8cdaffe1bf350949a46d25",
          2365: "175063ea266325f0d9882331535fbdc1",
          2398: "c14a86d91b55bb8642af9fbe6f87c3d6",
          2466: "15990139fd7575000f33c2a06b4de83d",
          2642: "94a3c9fc892358bc348d874109e38a86",
          2678: "ca6b337974587a96716448def9cf7256",
          2864: "626de75209024b51b97bc73be5d44625",
          3034: "b09051c49e49bd5b0120e5919d174301",
          3054: "3bd6880cc4d746adf5273c22f817aa03",
          3197: "42728c58b7c396bd3f49b6b8e1289a46",
          3343: "621aee0176acacc792cbd7573dcba71b",
          3370: "40aee85c747d89cef50b7792482693d3",
          3447: "4a4835133fdd2c91f91090adca3a58b8",
          3475: "1b9a6223a5127ed0ba2a2d8acfc68f2b",
          3486: "b9a144b5f70bd671763c65100c44d157",
          3697: "7d83a3b4aaa4096fd6237445856b6967",
          3885: "de2497101f0055e17a823d266b5c5e47",
          3941: "023b5cb8ba010f7b3df1e52ab6e1d49b",
          4011: "297cb399fafc024888f833aa5efcc5ac",
          4018: "10cfe7b61a33597c650776bbf990eab0",
          4054: "d0ea1986020a85bd27b7b36c9317a4b9",
          4528: "d96dbb7bbda4f10ad5c7e74b7eb37718",
          4621: "41b8e3b47a7066423769c79e9936f651",
          4700: "e14be49556c236e89ddcc076a42c2927",
          4710: "450eb4874bb9d39d83df3ec5e95728fa",
          4731: "f5310bf805adec2b9d3bb886ee7c6b23",
          4799: "83ab29055aba434f05104b473bb6253c",
          4851: "953379ac10ba526eda9f498f54e5cd2e",
          4861: "a515414a67cf1c3a7303baae145fe4e7",
          4913: "6101111e6989382da402cc7155c2b839",
          5018: "b8357ee0c0333403d3a633e3e0c64016",
          5233: "98ebe731f26b57d23f0501b3a3219e9c",
          5254: "94344f8332ee894df791bdda6289d322",
          5259: "35500019f61cda4fd3d4537e468e99c2",
          5530: "2cec5a95c784e6b5566dd5ac4bb35fc8",
          5639: "479e1832177ef7f9527aa0a0af9578a0",
          5663: "ff7e50ec9a30dd986e4520706ff99def",
          5742: "b010a334818a63099af6afeee1723b11",
          5830: "908fac13d91bcd185f50604b1fdd134f",
          5832: "72a2d515be836d557c463ceb5b6f7467",
          6267: "b0dbe31809216bb81b787595e18b7988",
          6280: "0386fe12161814916fa65ba8923e5f90",
          6285: "d9285a5591b2ffaf43a8c8d52e1fca51",
          6361: "379e9b3fd306ae3083cfe5bebeef4d8d",
          6664: "62e76d4761af9bf46fd4384dab807630",
          6682: "00264b0cad0bb3102b561f5d4d0c587e",
          6879: "4b8ba5ff8b2aa67e5ff124e4ab47967e",
          6891: "3d27dd1113fce81db2f9b6b7d4041344",
          6997: "6fd257059fa9cef2ae1986de610f30ba",
          7010: "abe960c14d25ff61ef1ae143790917ca",
          7073: "72dcaecdd11a26d3539b1425023c8848",
          7127: "fb3077721899666d110aef8c7aa1fa18",
          7436: "168621638e212a8d10475d039a6b122b",
          7452: "38caa1a46435032de3eee0d2434f1346",
          7453: "4edfd7af8854c14452079056cf16a062",
          7970: "edc3c575464bb8c4a3999ec9294c751a",
          8272: "5a16911efdfb96aba7b05a2f91007de6",
          8391: "ab31ba7226bedf928167c6fbad095081",
          8742: "6c4882260a163aeb83dfc9317569148e",
          8755: "806fc0b44b102e6782b8c751a035ffa3",
          8880: "89e940797f511a88ff291bdb0c18114c",
          8970: "bb9dacfbd79938b9cc77af25301bb107",
          9022: "e49f3a14a91a796220f20056d072c251",
          9028: "eff1397d058751798fc91aaa5d5464bb",
          9126: "b2a89a46cdf5e8ad4418f6ae0fd767ac",
          9235: "ca89b3c8ef4670fe90ce63752b661591",
          9377: "1f7f95892887b2e02084248e32239d95",
          9615: "bde7391293afe60f7e1d9373b33a254d",
          9936: "d3b4454e2f956c18b2b4a79051982e0b",
          9990: "c585ba0792a2270ffba1ab7f422e65c1"
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