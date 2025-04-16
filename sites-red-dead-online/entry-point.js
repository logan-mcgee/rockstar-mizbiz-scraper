! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "237d2c85-707a-4199-a9c6-2c698275f447", e._sentryDebugIdIdentifier = "sentry-dbid-237d2c85-707a-4199-a9c6-2c698275f447")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer", "@rockstargames/modules-core-newswire-article"], (function(e, a) {
  var t = {},
    r = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
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
    }],
    execute: function() {
      e((() => {
        var e, f, d, c, n, o, b = {
            24075: (e, a, t) => {
              (0, t(47387).w)(1)
            },
            47387: (e, a, t) => {
              const r = t(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            45408: (e, a, t) => {
              t(24075)
            },
            13099: (e, a, t) => {
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
            82021: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(8481), t.e(3681), t.e(6102), t.e(2229), t.e(6682), t.e(1179), t.e(7145), t.e(8155)]).then((() => () => t(38155)))
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
            66819: e => {
              "use strict";
              e.exports = r
            },
            25136: e => {
              "use strict";
              e.exports = t
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = b, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          s.r(r);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, s.d(r, d), r
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          131: "2a23922ec594df603f3e8c1f5235544a",
          278: "e12bad2093f8c5b032f2b9edc6c5fc73",
          299: "06d36fcae3dbd005b0069da38eed21d9",
          314: "2e8606bc546936605f594d94b96db037",
          662: "70749a08ce8d9dfd7d110ead86c957f7",
          721: "8b5ab3c7bd5a32ba26254e5b10ac6765",
          824: "751974a88bb992c63bf37a76617410c3",
          907: "f0306cb28139ea1251b7113c5be77dc9",
          920: "a7d9ff2c6f01cd76b70c804c2bef994b",
          1054: "a5ede8ca0cf3e35dad0cf74b904a0107",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "56aba45861241ce122cc12ff7129254b",
          1673: "ecf009a2ea527ca58a519f7aa0b8fd79",
          1822: "0a78a3cbbdcb66e345046e3f31c68533",
          1868: "7a8a83d5919f0d655f43f0759207a227",
          2024: "c0a07131f1f6d2e4992339f25e22384e",
          2156: "051c29dd243acfc9072e3083e986e02c",
          2171: "f289fba5fee27817ebc324499153ba6d",
          2221: "d24c17bff378a28fe39084710b095fd7",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "fee5beb652da13a14061bfdd4e4d9c7c",
          2324: "48f9ed62e63e235c39abff6817b313bd",
          2347: "ea4de5dad54043d599bf61408ee2c316",
          2365: "5f42c66e25fc2c3e15273ba83d71a187",
          2398: "6a72eba4d29b4b92e83c60d3eb988ef0",
          2466: "e06ed1c038ca656d7329624c1e9a5290",
          2642: "3d3aa8fa4885c7d3bb44d6a0c8ca4d7b",
          2678: "79d19e0b0ad22c445f5f9c529f538281",
          2772: "923ae84218228355b5f1d024956ef1ee",
          2817: "424f5407eff76879b3a11f02d039749e",
          2864: "70e592a8e74015d263c0c951c92f601a",
          3034: "2cb556d9ea6971cdbcb5e5d123774f2b",
          3197: "0b1820f333c058c19e1b733aca9b93c3",
          3343: "49c72922fb76d51b57543ebdcf82e0fa",
          3370: "7f8feebb72f50c4a6d4fc64e4862ee9c",
          3447: "831f02cd030ed540ea26fdf2f7fd1878",
          3475: "e939e8977ec54a01698e2c1738dffd00",
          3486: "5c5359170a35ea5ad5d09a47d22943d2",
          3681: "d01792cb3b2b50c21e042b7007263049",
          3697: "c7af129ad8c5a2e38933f69b43efba1a",
          3885: "f8c3a81c1ceff98f6f155700b1926362",
          3941: "f4bef0581f5247e2b8d119bf08d83012",
          4011: "9ce226fb1cfdd7e9a1484f833cff6f10",
          4018: "e53dac20d531e27f35861d9ba71a8fb7",
          4054: "1019df18558ec74d1595610d31f4a090",
          4528: "67ceaaf7b92f6af9f29c066d0ee53324",
          4621: "b67ac2dc6a9d8c9e4332ec697eee8583",
          4700: "da42cfea706dd45cec9fa52f74f046e9",
          4710: "ade90a422788bcad7d28fea959e959b9",
          4731: "8dc4ed55a1ed15aa7b6dcde5ecf33cbc",
          4781: "33ff36c42d954a935be2a48ee074add1",
          4799: "20960fe3bf0aeb63881513270a7e33ef",
          4851: "b173a3d0a8bd0a1e19b89a68c90cb6f4",
          4861: "9ff2b5daadc76784914db6543541a54c",
          4913: "fa784fe199e754e3e3cc3975cba0c5d4",
          5018: "b7f87591df7ba24f024fc5c6dd81db6e",
          5233: "627685c3fd64faf44eefc3465e744a80",
          5254: "98d45dcab04485e5bea9bf661ebc7399",
          5259: "38a0f41b5af5df21a55ea814a9deb388",
          5530: "fde764745be8179ccfab6681aa5c47be",
          5639: "6e268c4f9823a87a0e6772dac93480a7",
          5663: "97661a241089dabbf7db0738d91987be",
          5742: "8b7cfb88eff066b08d8e202cb0a7aeaa",
          5830: "504cf747e9609bc74474be3a9259aef8",
          5832: "4a6dd300a027df786f76d3fb8ec0cc0e",
          6102: "0a682eb6318a1f3cce10a8f2f07095c3",
          6267: "45daa6e490c05f988001aa9debfddcef",
          6280: "ee390387912a5105ea0ec610bede1e7a",
          6285: "1be360e11a4d1cd9a1aa0e6effff99a9",
          6361: "2c4c0d525c41ecf1d8ba27c3ae068696",
          6664: "3d7c140f9fac12d152715bd15623e4c4",
          6682: "9273c69f679daa2e898509a0330e93b2",
          6879: "d4848c1b8e32647fd7c2bacfb789c5f9",
          6891: "9bc30eca152d215aeed940a7ec2cf93e",
          6997: "3a4a61f0b83021617b70305bb75da9ea",
          7010: "c39d9f727a2e3dfe6755b0a0db49a3ac",
          7073: "63af9c3bee748952672f208a50772725",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7436: "0fa9c22678848ec7a743b18ae79bc36b",
          7452: "5dbd689832887006ae694814bb3e921c",
          7453: "6a2b4b2fe57c624c2c328fdca88b5d9f",
          7970: "4dbca7dc114fc71cb1a8b087a343b82e",
          8155: "ab7b94574dfed73ea21f31e3482a68d9",
          8272: "7051d11648f5c001f7e3ed747799a9b3",
          8391: "278b9ddc4832f9e7f973796c678c54bb",
          8481: "7d107d6bdb3b043377ed15df83e7dce6",
          8755: "30b3c1d440ced990c5ee21e4600a8a9c",
          8880: "7cc9c108a515cffb4d1b435b22713c07",
          8970: "627b938d9b77a3722fbebd5e247b304c",
          9022: "da44d81391c2385df27a5f1651bdf515",
          9028: "5aa6616b5720c3418bfd0bb714989043",
          9126: "8043c92b19bc7152d36a2d5a19dca7ba",
          9323: "8d0f07a21e5360bfd016f74e3b7fb48f",
          9377: "4d972fd72e9b33b9dbeadf748746ee4c",
          9615: "865619d769888ab80bdc6947467122db",
          9936: "44cfeb06ee09a86ad0d6e476e4adb7ff",
          9943: "f5823b176ce83de7ca19d518e217cd93",
          9990: "75f9b5dff2323aa0f72f9a1f2b274de6"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-red-dead-online:", s.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == c + t) {
                  f = i;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
            var l = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          8155: [9566, 31879]
        }, o = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
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
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(s, r[2], 0, 0, ((e, a, t) => e ? d(s.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var d = s.S[t],
                c = "@rockstargames/sites-red-dead-online",
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var d = e => e && e.init && e.init(s.S[t], r);
                    if (f.then) return b.push(f.then(d, a));
                    var c = d(f);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), n("@rsgweb/modules-core-feedback", "1.0.0", (() => Promise.all([s.e(8481), s.e(3681), s.e(2229), s.e(6682), s.e(4781), s.e(1179), s.e(2772)]).then((() => () => s(74781))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(8481), s.e(2229), s.e(6682)]).then((() => () => s(17560))))), n("date-fns", "4.1.0", (() => s.e(920).then((() => () => s(60920))))), n("hammerjs", "2.0.8", (() => s.e(9323).then((() => () => s(29323))))), n("prop-types", "15.8.1", (() => s.e(2817).then((() => () => s(72817))))), n("react-focus-lock", "2.9.6", (() => Promise.all([s.e(2229), s.e(7145), s.e(9943)]).then((() => () => s(12324))))), n("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), n("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), o(66819), o(25136)), b.length ? e[t] = Promise.all(b).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
              var d = s.I(a);
              return d && d.then ? d.then(e.bind(e, a, s.S[a], t, r, f)) : e(a, s.S[a], t, r, f)
            })(((e, a, r, f, d) => {
              var c = a && s.o(a, r) && t(a, r, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              62229: () => r("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              30763: () => r("default", "date-fns", [1, 4, 1, 0], (() => s.e(920).then((() => () => s(60920))))),
              81788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              95966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => s(17560))),
              57145: () => r("default", "prop-types", [1, 15, 8, 1], (() => s.e(2817).then((() => () => s(72817))))),
              994: () => r("default", "@rsgweb/modules-core-feedback", [1, "workspace:^"], (() => s.e(4781).then((() => () => s(74781))))),
              4848: () => r("default", "hammerjs", [1, 2, 0, 8], (() => s.e(9323).then((() => () => s(29323))))),
              95945: () => r("default", "react-focus-lock", [1, 2, 9, 6], (() => s.e(2324).then((() => () => s(12324)))))
            },
            c = {
              1179: [30763, 81788, 95966],
              2229: [62229],
              6682: [9623],
              7145: [57145],
              8155: [994, 4848, 95945]
            },
            n = {};
          s.f.consumes = (e, a) => {
            s.o(c, e) && c[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var t = a => {
                  f[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete f[e], s.m[e] = t => {
                    throw delete s.c[e], a
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
          s.b = document.baseURI || self.location.href;
          var e = {
            129: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1179|2229|7145)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = s.p + s.u(a),
                c = new Error;
              s.l(d, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                n = t[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                n && n(s)
              }
              for (a && a(t); o < d.length; o++) f = d[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(45408), s(82021)
      })())
    }
  }
}));