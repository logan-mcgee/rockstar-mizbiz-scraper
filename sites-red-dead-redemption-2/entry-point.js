! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7992c938-6453-40ec-80e3-36b23d6a0612", e._sentryDebugIdIdentifier = "sentry-dbid-7992c938-6453-40ec-80e3-36b23d6a0612")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, d, f, c, n, o = {
            24075: (e, a, r) => {
              (0, r(47387).w)(1)
            },
            47387: (e, a, r) => {
              const t = r(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            45408: (e, a, r) => {
              r(24075)
            },
            13099: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(888), r.e(3316), r.e(2530), r.e(2229), r.e(6682), r.e(5966), r.e(1)]).then((() => () => r(70001)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            },
            25136: e => {
              "use strict";
              e.exports = r
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          1: "1569d739b8694427cbe7151d7450d69a",
          131: "33b2c143636518b52b63f95b6d37c453",
          278: "bd9dee859ce877c0a5d2d42b64b7c7bd",
          299: "965ebcd91c0a71ade6906958c6db9878",
          314: "8c24fc90df772902b5588d24114a7e84",
          662: "10a4012e419e93b8bb804a31d1dbd431",
          721: "cedfb5f9db0e91670db073db8b0bd3a8",
          824: "5a801d0871661a3357dd2618a49e3abb",
          888: "095e0df8e618614711512af9d739c5e3",
          907: "5d1e7f4ae63b9edfa89026243c3055c5",
          1054: "90533171cc38f1d4719e050995a9e91a",
          1242: "381dc5439e1ab161438c3cf6ed4d67a2",
          1360: "73335ef7b258c4c4eb393af045d9c7ef",
          1673: "b2ecb10a94910cd650c48cf8c48d7e10",
          1822: "e18705ff04032b756fcea70c3bbb49d7",
          1868: "5d5ff20bce65b4133183b27b5d8fa1cf",
          2024: "c734a78d574d4893f6a0ca0296c5416a",
          2156: "bc7f95a74982d4d05bb0cef136c203e3",
          2171: "b80a30e0178ba9e6c0c1e2ae2045abca",
          2221: "dd365b5df879b3e4016ac5fe9164ced5",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "12d944036be5b11c733f03fcee3a63ed",
          2347: "f90308b3cc865cc9c3b3f6f82d96cbe8",
          2365: "8dfd8c98e89fffc8f869047542073508",
          2398: "01aadff784473e42225ea4e0ca01bad5",
          2466: "9df6a72c25e1031a44b06f41f8fb34bf",
          2530: "bed17b0f026edad45d9701107857391d",
          2642: "de29e7277f7138dd963797af1f0e8632",
          2678: "f9d7b735d7d82d1f5251c368bee93e7d",
          2864: "8b274ecedfc9bbf9dcae6e0e76945dd1",
          3034: "6499eaa39cdabf0bb20f841f539756e4",
          3197: "a3480a2c3c3d4f8ea46a5d78e3301490",
          3316: "b655ab63d16a1abcb6da309f496c9d63",
          3343: "ee2cc0ec698d7ce85d1271ff9adaeb08",
          3370: "0c537c08ad9f1d3369a433d452f34ac3",
          3447: "5966fae6ce5658385ebc03d6474dfde0",
          3475: "994dfbd8122e4e61ef94ade0ed86fe7a",
          3486: "0e8a41df4f150ac0871446128b1ba040",
          3697: "4582ead808ab64560ebb1002dca818a7",
          3885: "603872b199082a6bbac457e26cd6adc1",
          3941: "72c27acc6c0f4bbe67209f20d740c896",
          4011: "6a66d0b7995efab819e555bbca833483",
          4018: "a3cb9346d2027600fd495f8dd0eaca1f",
          4054: "697db8c856c8e0795433a4807ae5f675",
          4528: "597008e2d308c39e23118420068b0ccd",
          4621: "4d6abdec4216cf967a615e9c351f2901",
          4700: "e05ae9ad1dd4509e0d02b3a5487a6ab7",
          4710: "dfff4d78d894d999b6e2d3100f8eda88",
          4731: "79bcdc6b7a5a157d0dc768a06eb5e273",
          4799: "7856331607e235a35feddfb18b53648f",
          4851: "f9bf40819eeb439d8f4783471caf8ba1",
          4861: "4d7c25073350756f1e8f104b9eddb3b2",
          4913: "6da844cd70858563fd3930601a4f1341",
          5018: "4c946c469f63a8ef4fe8295741545fdb",
          5233: "d1d2e1a7f21505854397efc736bf525d",
          5254: "73007d2958b24bb9ced76ac531619ff0",
          5259: "f34f108a18bada9d207a9f6b0473b771",
          5530: "3fa1b74b79343a177c06c7bb67b87dbd",
          5639: "b2994ba338dde128de55ddbf1aa7ea40",
          5663: "c310712338a6b0f1e645193491a3b957",
          5742: "4f79abb4413bfa0c76f314679c8f2465",
          5830: "5413b650cda0ab5e08698209985093fa",
          5832: "1c86ee5e5011e51e96ccd0a0ddad1e62",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "7d7f8d96796d17c50422d3cb1294a267",
          6280: "d3767e1dfd57c026f1e27dea48c5f7c7",
          6285: "0e08fdc9cb2b951f75433933a410cd8c",
          6361: "df7f6322d228fd6ad54f055c05814645",
          6664: "edff15274ed5bcb6690f2068cdd8a7b5",
          6682: "60d5fe46383cd63da205e463e4afdf96",
          6879: "7e838f57b84a14a69bec00b568689c41",
          6891: "e17d085790c532a7d9c065c5cd482f6c",
          6997: "9faaef0a36b2534ff22a8b32598f50f3",
          7010: "80c50e9a0103a4fc46e27b853739f0cf",
          7073: "d84b2a736ccaecac8bedd64683f8609c",
          7131: "c83549ac72532432b44800779f0eddb5",
          7436: "2b85d27c9ee04bc3e50eddb3a09838ab",
          7452: "be316d70337ba5fba349d81c874b5ae7",
          7453: "665e26402873d33bf4c192714fe6d7d6",
          7868: "241223cf4789be8e5b4508d680222903",
          7970: "c94adcf50efcac4cff9abeb09e9d4ab8",
          8272: "fb5c92581db29b461fd12262bf6bded4",
          8391: "c4c150a6b123fd9d0016a6311f21a5c1",
          8755: "46cff0a61d6cc572739fcdfbd9644e5b",
          8880: "92f6fb3f19e85a81ca20071e3c9d0fcf",
          8970: "98afc17fecae5f8df0c983f95b7f14a9",
          9022: "3b3aa1bdcb3b337be34744fc87badbe8",
          9028: "e044889dad75e969dbcc425af87b770d",
          9126: "0e429f99268ff091605a5c6e41d1d61a",
          9377: "b32cdfa521a56ca42195d3f0037f3091",
          9512: "6f8ff459e7978d1effcb8905fccaf4ec",
          9615: "6381a08a73c3387edb0382062ac90507",
          9936: "015d2d90023045458069804dfe968197",
          9990: "c23d2735c14435a16b3d73640e4e5baf"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
          1: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(888), i.e(3316), i.e(1360), i.e(2229), i.e(6682), i.e(5966), i.e(7131)]).then((() => () => i(37131))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(888), i.e(2229), i.e(6682)]).then((() => () => i(17560))))), n("lodash", "4.17.21", (() => i.e(7868).then((() => () => i(17868))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var d = i(25136);
                  if (!d) return;
                  var f = e => e && e.init && e.init(i.S[r], t);
                  if (d.then) return o.push(d.then(f, a));
                  var c = f(d);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (r, t) => {
              if (0 in r) {
                t = e(t);
                var d = r[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != r[n]) return !1
                      } else {
                        if (f ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, d) => {
              var f = r[t];
              return (t = Object.keys(f).reduce(((r, t) => !a(d, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && f[t]
            },
            t = (e => function(a, r, t, d) {
              var f = i.I(a);
              return f && f.then ? f.then(e.bind(e, a, i.S[a], r, t, d)) : e(a, i.S[a], r, t, d)
            })(((e, a, t, d, f) => {
              var c = a && i.o(a, t) && r(a, t, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            d = {},
            f = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              16188: () => t("default", "lodash", [1, 4, 17, 21], (() => i.e(7868).then((() => () => i(17868))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(17560))),
              47224: () => t("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([i.e(1360), i.e(9512)]).then((() => () => i(37131))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950)))))
            },
            c = {
              1: [47224, 81788],
              2229: [62229],
              5966: [95966],
              6682: [9623, 16188]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!n[e]) {
                var r = a => {
                  d[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete d[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(d[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(45408), i(85819)
      })())
    }
  }
}));