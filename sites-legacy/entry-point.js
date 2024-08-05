! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2be0d02c-3c51-4bf0-a1d9-8741da3d272b", e._sentryDebugIdIdentifier = "sentry-dbid-2be0d02c-3c51-4bf0-a1d9-8741da3d272b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {},
    s = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, c, i, f, l = {
            6539: (e, t, r) => {
              (0, r(13403).w)(1)
            },
            13403: (e, t, r) => {
              const a = r(75659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            32160: (e, t, r) => {
              r(6539)
            },
            75659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            78948: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(118), r.e(852), r.e(403), r.e(747), r.e(407), r.e(972), r.e(235)]).then((() => () => r(81235))),
                  "./index": () => Promise.all([r.e(403), r.e(747), r.e(407), r.e(972), r.e(937)]).then((() => () => r(28179))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(118), r.e(956), r.e(6), r.e(403), r.e(747), r.e(407), r.e(972), r.e(247), r.e(8)]).then((() => () => r(73008))),
                  "./tina": () => Promise.all([r.e(956), r.e(403), r.e(747), r.e(407), r.e(972), r.e(247), r.e(579)]).then((() => () => r(24247)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            61024: e => {
              "use strict";
              e.exports = r
            },
            49787: e => {
              "use strict";
              e.exports = a
            },
            60404: e => {
              "use strict";
              e.exports = o
            },
            25136: e => {
              "use strict";
              e.exports = n
            },
            99466: e => {
              "use strict";
              e.exports = d
            },
            92969: e => {
              "use strict";
              e.exports = s
            }
          },
          u = {};

        function b(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, b), r.exports
        }
        return b.m = l, b.c = u, b.y = t, b.amdO = {}, b.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return b.d(t, {
            a: t
          }), t
        }, b.d = (e, t) => {
          for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((t, r) => (b.f[r](e, t), t)), [])), b.u = e => "js/" + {
          6: "9cb05e0a1d7bb7fa3eca535259f49e39",
          8: "448bfe81a583f5b8a3dd853d796e50d0",
          24: "a894da4cbff0db903a5a759829ebc1ac",
          52: "18202c2268c0210b616221bf618c3f2b",
          66: "e3f46140dc2377ce6476139289106563",
          105: "22c594db1dc145908143f28765f5a490",
          118: "3427c8f13d83b308a54f9025bb332809",
          131: "2488b4d3488430ee7907c3c24125ab40",
          143: "801962127a69fd5995d66affe4dfcf8b",
          171: "90e3f3687fc260cb4aa8e6e19249b8f5",
          177: "7bf27b8c4d88ff2f30dfe414c9efbd48",
          235: "93be53feaafde71931137f906d929d03",
          247: "d4f663913852db205929fc370b46d644",
          300: "64f0d8bc7c0f3d59ce42b10096e8f7eb",
          354: "6f44a8afb559b201c5cbca1da788746d",
          380: "9aa1ea4e1719dbfb537940cebed69dbb",
          396: "984755461a2f32727de54cde7720f808",
          403: "e1af37c3416a76bceb3ed283ad101177",
          407: "a732207f7449bceb8a19e7fbbf9e5c53",
          433: "261937838d245dcfac60c4518b641536",
          458: "0baedcd3be187575122e5237ea8a764b",
          486: "32cefdcac1cf9910b01a8e3e242d6cca",
          512: "8fd527fe4dae7aa0bcb7a3b7e204af41",
          524: "bdaac506ae2e29fdcc7459fbeb38b54d",
          533: "7f69347b26343637477929f343013de3",
          565: "1cd025ac2de7323c9a5ce5197688a952",
          579: "37e06a65451206c978d8f8ba125e6d81",
          581: "08b3489d0268571641a8b85a8594f8ba",
          588: "49e25ae88e0cc2e08fdeec5554918e6d",
          609: "6278af628f0a66559f21c2654ece942f",
          627: "cb1bef334c9d44c4289007b4c22edb85",
          747: "880280ada80bcf22435c0607eb5e09bd",
          774: "e1b44b162d5122565d9808300dc9f34d",
          852: "cf7a2b837bce042c235223a4750d3b77",
          867: "3befae6b281f618f68854480d1868eb9",
          919: "efaa888ab476115661ba91402dfd8fa6",
          937: "96d14be32c16f83ef95672cfa4aa4105",
          956: "08836dd3a58d459b90edcf7dcfadc777",
          972: "a1e08615a0b5ddc78beb95386e261ee5",
          973: "c0fdb7be791990a6d732b1802e3fb6c2"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          8: "9359a51179ee889ef32a4b7c6cc01b75",
          24: "e92311d7a2df37d19cc8fe78ae10a979",
          235: "de2286abd74beacfce345f15599003b0",
          247: "095d0cc013ed2ec78667d1c8047e9803",
          433: "c2d96776c13f09ee4b365552c0e9e080",
          609: "1c753d8f0fbc19df0a2fc80340d2b46f",
          972: "e3726cf28198668d130a9d3d606613e2"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, c = "@rockstargames/sites-legacy:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var s = document.getElementsByTagName("script"), i = 0; i < s.length; i++) {
                var f = s[i];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == c + a) {
                  n = f;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", c + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          235: [42158, 52757, 63902],
          247: [17523, 33809, 55140, 73379],
          396: [70396],
          407: [42756],
          747: [40207, 74401],
          972: [28089, 31879, 58407, 94566]
        }, f = {
          17523: ["default", "./tina", 25136],
          28089: ["default", "./helpers/uploads", 99466],
          31879: ["default", "./index", 25136],
          33809: ["default", "./ui", 99466],
          40207: ["default", "./index", 60404],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          52757: ["default", "./providers", 60404],
          55140: ["default", "./properties", 99466],
          58407: ["default", "./index", 61024],
          63902: ["default", "./index", 49787],
          70396: ["default", "./hooks", 92969],
          73379: ["default", "./functions", 92969],
          74401: ["default", "./index", 99466],
          94566: ["default", "./messages", 49787]
        }, b.f.remotes = (e, t) => {
          b.o(i, e) && i[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), b.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, s, c) => {
                  try {
                    var i = e(r, n);
                    if (!i || !i.then) return s(i, d, c);
                    var f = i.then((e => s(e, d)), o);
                    if (!c) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(b, a[2], 0, 0, ((e, t, r) => e ? n(b.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var n = b.S[r],
                d = "@rockstargames/sites-legacy",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : d > s.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return i.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return i.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                i = [];
              return "default" === r && (s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(66), b.e(403), b.e(396), b.e(143)]).then((() => () => b(24143))))), s("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([b.e(403), b.e(747), b.e(407), b.e(581), b.e(609)]).then((() => () => b(68756))))), s("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([b.e(458), b.e(403), b.e(747), b.e(433), b.e(131)]).then((() => () => b(76131))))), s("framer-motion", "10.16.4", (() => Promise.all([b.e(588), b.e(403)]).then((() => () => b(70588))))), s("framer-motion", "10.16.4", (() => Promise.all([b.e(177), b.e(403)]).then((() => () => b(96177))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(565), b.e(52), b.e(403)]).then((() => () => b(72052))))), s("framer-motion", "7.10.3", (() => Promise.all([b.e(565), b.e(774), b.e(403)]).then((() => () => b(51774))))), s("react-dom", "18.2.0", (() => Promise.all([b.e(533), b.e(403)]).then((() => () => b(47533))))), s("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(486)]).then((() => () => b(66105))))), s("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(354)]).then((() => () => b(83354))))), s("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(403), b.e(300)]).then((() => () => b(300))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(105), b.e(627), b.e(403)]).then((() => () => b(76008))))), s("react-router-dom", "6.17.0", (() => Promise.all([b.e(105), b.e(171), b.e(403)]).then((() => () => b(31171))))), s("react", "18.2.0", (() => b.e(380).then((() => () => b(23380))))), c(60404), c(99466), c(92969), c(61024), c(49787), c(25136)), i.length ? e[r] = Promise.all(i).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var t = b.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var d = 0, s = 1, c = !0;; s++, d++) {
                  var i, f, l = s < r.length ? (typeof r[s])[0] : "";
                  if (d >= a.length || "o" == (f = (typeof(i = a[d]))[0])) return !c || ("u" == l ? s > o && !n : "" == l != n);
                  if ("u" == f) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == f)
                      if (s <= o) {
                        if (i != r[s]) return !1
                      } else {
                        if (n ? i > r[s] : i < r[s]) return !1;
                        i != r[s] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || s <= o) return !1;
                    c = !1, s--
                  } else {
                    if (s <= o || f < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, s--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
              }
              return !!b()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var d = r[a],
                    s = (typeof d)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = b.I(t);
              return n && n.then ? n.then(e.bind(e, t, b.S[t], r, a, o)) : e(t, b.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && b.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              71403: () => a("default", "react", [1, 18, 2, 0], (() => b.e(380).then((() => () => b(23380))))),
              96717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([b.e(66), b.e(396), b.e(524)]).then((() => () => b(24143))))),
              89779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(105), b.e(627)]).then((() => () => b(76008))))),
              13953: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(177).then((() => () => b(96177))))),
              17891: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([b.e(458), b.e(433), b.e(512)]).then((() => () => b(76131))))),
              25076: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(105), b.e(171)]).then((() => () => b(31171))))),
              49948: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(919).then((() => () => b(300))))),
              66335: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => b.e(24).then((() => () => b(68756))))),
              70834: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(973).then((() => () => b(83354))))),
              79493: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(533).then((() => () => b(47533))))),
              80791: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(565), b.e(774)]).then((() => () => b(51774))))),
              40581: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(565), b.e(52)]).then((() => () => b(72052))))),
              174: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(588).then((() => () => b(70588))))),
              59217: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(867).then((() => () => b(66105)))))
            },
            d = {
              24: [40581],
              403: [71403],
              407: [89779],
              433: [174, 59217],
              581: [40581],
              747: [96717],
              972: [13953, 17891, 25076, 49948, 66335, 70834, 79493, 80791]
            },
            s = {};
          b.f.consumes = (e, t) => {
            b.o(d, e) && d[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], b.m[e] = r => {
                    throw delete b.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              106: 0
            };
            b.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                8: 1,
                24: 1,
                235: 1,
                247: 1,
                433: 1,
                609: 1,
                972: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = b.miniCssF(e),
                  o = b.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = s, n.parentNode && n.parentNode.removeChild(n), o(c)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            106: 0
          };
          b.f.j = (t, r) => {
            var a = b.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(396|403|433|581|747)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = b.p + b.u(t),
                d = new Error;
              b.l(n, (r => {
                if (b.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                d = r[1],
                s = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) b.o(d, a) && (b.m[a] = d[a]);
                s && s(b)
              }
              for (t && t(r); c < n.length; c++) o = n[c], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b(32160), b(78948)
      })())
    }
  }
}));