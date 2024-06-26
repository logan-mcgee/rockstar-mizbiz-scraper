! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1c194a3f-8383-4e37-be6e-e3408b12e29b", e._sentryDebugIdIdentifier = "sentry-dbid-1c194a3f-8383-4e37-be6e-e3408b12e29b")
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
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    c = {},
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
  }), Object.defineProperty(c, "__esModule", {
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
        c[t] = e[t]
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
        var e, f, i, l, u = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            35468: (e, t, r) => {
              "use strict";
              var a = {
                  "./NewswireArticle": () => Promise.all([r.e(608), r.e(284), r.e(36), r.e(792), r.e(52), r.e(64), r.e(536), r.e(968), r.e(644), r.e(120), r.e(884), r.e(628), r.e(404), r.e(880), r.e(680)]).then((() => () => r(90680))),
                  "./NewswireTitle": () => Promise.all([r.e(284), r.e(36), r.e(792), r.e(312)]).then((() => () => r(91312))),
                  "./components": () => Promise.all([r.e(608), r.e(284), r.e(36), r.e(792), r.e(52), r.e(64), r.e(536), r.e(968), r.e(644), r.e(120), r.e(884)]).then((() => () => r(22052))),
                  "./index": () => Promise.all([r.e(608), r.e(284), r.e(36), r.e(792), r.e(52), r.e(64), r.e(536), r.e(968), r.e(644), r.e(120), r.e(884), r.e(628), r.e(68)]).then((() => () => r(26068))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(284), r.e(36), r.e(792), r.e(52), r.e(64), r.e(883), r.e(660)]).then((() => () => r(88660))),
                  "./types": () => Promise.all([r.e(608), r.e(284), r.e(36), r.e(792), r.e(52), r.e(64), r.e(536), r.e(968), r.e(644), r.e(120), r.e(884), r.e(628), r.e(880), r.e(216)]).then((() => () => r(19216)))
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
            33864: e => {
              "use strict";
              e.exports = r
            },
            50800: e => {
              "use strict";
              e.exports = a
            },
            5576: e => {
              "use strict";
              e.exports = o
            },
            81128: e => {
              "use strict";
              e.exports = n
            },
            14472: e => {
              "use strict";
              e.exports = c
            },
            88428: e => {
              "use strict";
              e.exports = d
            },
            9344: e => {
              "use strict";
              e.exports = s
            }
          },
          b = {};

        function p(e) {
          var t = b[e];
          if (void 0 !== t) return t.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return u[e].call(r.exports, r, r.exports, p), r.loaded = !0, r.exports
        }
        return p.m = u, p.c = b, p.y = t, p.amdO = {}, p.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return p.d(t, {
            a: t
          }), t
        }, p.d = (e, t) => {
          for (var r in t) p.o(t, r) && !p.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((t, r) => (p.f[r](e, t), t)), [])), p.u = e => "js/" + {
          22: "1d8718f54ea5031188b3a1305aef37fd",
          36: "23be2566e151ce81aada35fe402ebe61",
          52: "94c9b86c364b9098d5d59f16d88ba1e5",
          64: "c7ef6106b6febc6e9cc69af067958f18",
          68: "8642e4d215636d112fa27f9a133d4b4c",
          88: "5116208136afe3432d4bc370dfb44578",
          100: "bba419e110ade8e14b85242a006e2c74",
          120: "8960bc562114130b9c86ccfc1d0bac84",
          152: "92700e83d49c9702d7435fb889aa4b32",
          179: "6e1b11c494ec28b367c89826e7defb0a",
          184: "be4ddc52237f785fde813b2a027fc976",
          196: "f6cc69189a0d820765ae42e5264f41b0",
          216: "d05730f34bdd981d33ee95f524bcda99",
          218: "5bbdea8bd7efa4fa6c4328b8c81becf8",
          232: "7ee280502293deb66685708d33c16cde",
          240: "0d0b82d540bc4bd342581954affe1ad4",
          284: "1eed6a970554a1cc0e05479d8fcc508d",
          288: "8fb9625a4bec86fb73420a420ed79226",
          312: "0d4e6343b4bc97d96853578556c1b363",
          404: "00b5ca21ae6868deff0dc7752e855775",
          536: "f041fe032a5e85cb1ec973c16c525b76",
          560: "8d4a9dabf99180bc9134a905101ef09b",
          576: "9e1f24b4b7913119aca22cc649b7d7c8",
          584: "e34b75245dd7dd88a3e1455de9510320",
          600: "d631f3864db94f4ec0ab10b67b715bb7",
          608: "a761f015ebb65ac12572ec222c275ae1",
          628: "73e8956cd55af8f79ed7e7679da8b1f9",
          640: "d9a4ecd7d7719cbf70e5b5db768c746d",
          644: "2dddfb9c099e5e86fda9b5ca75a5ad63",
          656: "aa17d16347c149ca017819180bca9f59",
          660: "0300815013230a48d3ad8c1d5610ea11",
          664: "38a20ef60f4574596a3c8894e1ba5974",
          680: "757a30df06fc815f5d6f7a0671517e50",
          708: "8336b8bd0ecb43b2c95d5115a2cc0cbb",
          716: "5a0269f88dceb95ef9c1e3e5dc9e7947",
          771: "e913a8c0a889de227202eacd141e132a",
          784: "25f2f7a55fe34aef86807fbaa16e62d2",
          792: "c187ecd1a3c56e63a835f4a5f0d08ea9",
          832: "9e1956bd74bec6a0e23d93e11f493284",
          880: "24cbb575e838b5ec8980590655e0326c",
          883: "69030ab72ac449554747136d5c3bbf2d",
          884: "07496d64407291b72049fd92b92d2afa",
          968: "8d8e67c2d38eb663d135c05dec7bfbcd",
          980: "540a5c8dd7f820d375c876e0eb555db1"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          152: "2d1c0b9b67883648652d608f8448f059",
          232: "0c21766f8df54569c7f33acd179a5d9c",
          312: "38cfc95a9203c101bd489ff5c88bc10d",
          576: "0c21766f8df54569c7f33acd179a5d9c",
          600: "99df8002ac4dfabc31414fcbef9c06c7",
          656: "7804a8964f391fe5e1b3d2ce77453b1e",
          664: "7ab01212b4074bcd6eb6f8a3f1bc187c",
          771: "2d1c0b9b67883648652d608f8448f059",
          880: "01b074e22285a6812ff0db0b5362b651",
          883: "bfdfbcdfd46824e2ae4239b58482c191",
          884: "a38b8661f7876975e61ce0ffe8b9b818"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-newswire-article:", p.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, c;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
                var i = d[s];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == f + a) {
                  n = i;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), c && document.head.appendChild(n)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          36: [1740],
          52: [33052],
          64: [45652],
          120: [55120],
          404: [73784],
          536: [42836, 3061],
          644: [84644],
          660: [7256, 19572, 32104, 41736, 65988, 84344, 89468],
          664: [1532, 28540],
          680: [77715],
          792: [45792],
          883: [95356],
          884: [88460]
        }, l = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          7256: ["default", "./tina", 5576],
          19572: ["default", "./tinaBlockTemplates", 14472],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          41736: ["default", "./tinaBlockTemplates", 5576],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          55120: ["default", "./messages", 50800],
          65988: ["default", "./functions", 9344],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          77715: ["default", "./providers", 9344],
          84344: ["default", "./tina", 14472],
          84644: ["default", "./index", 14472],
          88460: ["default", "./index", 5576],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, p.f.remotes = (e, t) => {
          p.o(i, e) && i[e].forEach((e => {
            var r = p.R;
            r || (r = []);
            var a = l[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, c, d, s) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return d(f, c, s);
                    var i = f.then((e => d(e, c)), o);
                    if (!s) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => n(t.get, a[1], r, 0, d, o),
                d = t => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(p, a[2], 0, 0, ((e, t, r) => e ? n(p.I, a[0], 0, e, c, r) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            t = {};
          p.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              p.o(p.S, r) || (p.S[r] = {});
              var n = p.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                d = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : c > d.from)) && (o[t] = {
                    get: r,
                    from: c,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var c = n(o);
                    if (c && c.then) return f.push(c.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (d("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(608), p.e(560), p.e(600), p.e(284), p.e(36), p.e(792), p.e(52), p.e(64), p.e(536), p.e(968), p.e(883), p.e(404), p.e(664), p.e(240)]).then((() => () => p(92012))))), d("@rockstargames/modules-core-carousel", "1.2.4", (() => Promise.all([p.e(560), p.e(284), p.e(36), p.e(656), p.e(218)]).then((() => () => p(76980))))), d("@rockstargames/modules-core-engagement", "0.0.2", (() => Promise.all([p.e(608), p.e(560), p.e(584), p.e(284), p.e(36), p.e(792), p.e(52), p.e(536), p.e(120), p.e(232), p.e(196)]).then((() => () => p(11e3))))), d("@rockstargames/modules-core-group-of-items", "1.2.0", (() => Promise.all([p.e(284), p.e(36), p.e(644), p.e(152)]).then((() => () => p(86152))))), d("@rockstargames/modules-sc-ugc-spotlight", "1.1.3", (() => p.e(784).then((() => () => p(11784))))), d("dompurify", "2.4.7", (() => p.e(179).then((() => () => p(8560))))), d("lodash", "4.17.21", (() => p.e(22).then((() => () => p(79784))))), d("react-dom", "18.2.0", (() => Promise.all([p.e(716), p.e(284)]).then((() => () => p(63716))))), d("react-jsx-parser", "1.29.0", (() => p.e(708).then((() => () => p(70708))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(88), p.e(832), p.e(284)]).then((() => () => p(84832))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(88), p.e(288), p.e(284)]).then((() => () => p(40288))))), d("react", "16.14.0", (() => p.e(640).then((() => () => p(89640))))), d("react", "18.2.0", (() => p.e(100).then((() => () => p(99480))))), d("text-balancer", "1.0.5", (() => p.e(184).then((() => () => p(86184))))), s(88428), s(9344), s(33864), s(81128), s(14472), s(50800), s(5576)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var t = p.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
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
                for (var c = 0, d = 1, s = !0;; d++, c++) {
                  var f, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(f = a[c]))[0])) return !s || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (d <= o) {
                        if (f != r[d]) return !1
                      } else {
                        if (n ? f > r[d] : f < r[d]) return !1;
                        f != r[d] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    s = !1, d--
                  } else {
                    if (d <= o || i < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
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
                  var c = r[a],
                    d = (typeof c)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && o != c) return o < c;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = p.I(t);
              return n && n.then ? n.then(e.bind(e, t, p.S[t], r, a, o)) : e(t, p.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var c = t && p.o(t, a) && r(t, a, o);
              return c ? (e => (e.loaded = 1, e.get()))(c) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => p.e(100).then((() => () => p(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(608), p.e(560), p.e(600), p.e(792), p.e(52), p.e(64), p.e(536), p.e(968), p.e(883), p.e(404), p.e(664)]).then((() => () => p(92012))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => p.e(179).then((() => () => p(8560))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(88), p.e(832)]).then((() => () => p(84832))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => p.e(22).then((() => () => p(79784))))),
              22064: () => a("default", "text-balancer", [1, 1, 0, 5], (() => p.e(184).then((() => () => p(86184))))),
              23397: () => a("default", "@rockstargames/modules-core-engagement", [1, "workspace:*"], (() => Promise.all([p.e(560), p.e(584), p.e(576)]).then((() => () => p(11e3))))),
              45364: () => a("default", "@rockstargames/modules-core-group-of-items", [1, "workspace:*"], (() => p.e(771).then((() => () => p(86152))))),
              46040: () => a("default", "@rockstargames/modules-core-carousel", [1, "workspace:*"], (() => Promise.all([p.e(560), p.e(656), p.e(980)]).then((() => () => p(76980))))),
              53964: () => a("default", "@rockstargames/modules-sc-ugc-spotlight", [1, "workspace:*"], (() => p.e(784).then((() => () => p(11784))))),
              69460: () => a("default", "react-jsx-parser", [1, "workspace:*"], (() => p.e(708).then((() => () => p(70708))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => p.e(716).then((() => () => p(63716))))),
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(88), p.e(288)]).then((() => () => p(40288))))),
              92548: () => a("default", "react", [1, 18, 2, 0], (() => p.e(640).then((() => () => p(89640)))))
            },
            c = {
              36: [9860],
              64: [89416],
              232: [69844],
              284: [51664],
              576: [69844],
              628: [46040, 53964],
              664: [77364],
              708: [92548],
              880: [69460],
              884: [22064, 23397, 45364],
              968: [57013, 73660]
            },
            d = {};
          p.f.consumes = (e, t) => {
            p.o(c, e) && c[e].forEach((e => {
              if (p.o(o, e)) return t.push(o[e]);
              if (!d[e]) {
                var r = t => {
                  o[e] = 0, p.m[e] = r => {
                    delete p.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete o[e], p.m[e] = r => {
                    throw delete p.c[e], t
                  }
                };
                try {
                  var c = n[e]();
                  c.then ? t.push(o[e] = c.then(r).catch(a)) : r(c)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              92: 0
            };
            p.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                152: 1,
                232: 1,
                312: 1,
                576: 1,
                600: 1,
                656: 1,
                664: 1,
                771: 1,
                880: 1,
                883: 1,
                884: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = p.miniCssF(e),
                  o = p.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var c;
                      if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = c, s.request = d, n.parentNode && n.parentNode.removeChild(n), o(s)
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
            92: 0
          };
          p.f.j = (t, r) => {
            var a = p.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(28|4|44|56)|88[03]|(23|5|79)2|(|5)36|120|284|404|968)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = p.p + p.u(t),
                c = new Error;
              p.l(n, (r => {
                if (p.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", c.name = "ChunkLoadError", c.type = o, c.request = n, a[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                c = r[1],
                d = r[2],
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in c) p.o(c, a) && (p.m[a] = c[a]);
                d && d(p)
              }
              for (t && t(r); s < n.length; s++) o = n[s], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), p.nc = void 0, p(93824), p(35468)
      })())
    }
  }
}));