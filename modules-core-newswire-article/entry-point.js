! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e955e370-fd45-4f82-aa3a-2ecb8199b454", e._sentryDebugIdIdentifier = "sentry-dbid-e955e370-fd45-4f82-aa3a-2ecb8199b454")
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
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, o, d, c, n, s = {
            35144: (e, a, r) => {
              (0, r(13454).w)(1)
            },
            13454: (e, a, r) => {
              const t = r(38294).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            23787: (e, a, r) => {
              r(35144)
            },
            38294: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, o = t.length; f !== a && o >= 0;) "/" === t[--o] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = t.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            55974: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(9713), r.e(8384), r.e(4888), r.e(7512), r.e(7545), r.e(925), r.e(2151), r.e(2440), r.e(2229), r.e(6188), r.e(5966), r.e(6118), r.e(1788), r.e(4853), r.e(745), r.e(3924), r.e(50), r.e(5241), r.e(59), r.e(5053), r.e(9123), r.e(5009), r.e(5535)]).then((() => () => r(98654))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(7512), r.e(4172), r.e(2229), r.e(6188), r.e(5966), r.e(1788), r.e(4853), r.e(745), r.e(3924), r.e(5241), r.e(5053), r.e(590)]).then((() => () => r(10590))),
                  "./types": () => Promise.all([r.e(9713), r.e(8384), r.e(4888), r.e(7512), r.e(7545), r.e(925), r.e(2151), r.e(2440), r.e(2229), r.e(6188), r.e(5966), r.e(6118), r.e(1788), r.e(4853), r.e(745), r.e(3924), r.e(50), r.e(5241), r.e(59), r.e(5053), r.e(9123), r.e(5009), r.e(5535)]).then((() => () => r(99973)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                o = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => o
              })
            },
            29441: e => {
              "use strict";
              e.exports = r
            },
            25136: e => {
              "use strict";
              e.exports = t
            }
          },
          i = {};

        function l(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return s[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
        }
        return l.m = s, l.c = i, l.y = a, l.amdO = {}, l.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return l.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          l.r(t);
          var o = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var d = 2 & r && a;
            "object" == typeof d && !~e.indexOf(d); d = f(d)) Object.getOwnPropertyNames(d).forEach((e => o[e] = () => a[e]));
          return o.default = () => a, l.d(t, o), t
        }, l.d = (e, a) => {
          for (var r in a) l.o(a, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((a, r) => (l.f[r](e, a), a)), [])), l.u = e => "js/" + {
          50: "fc7714432c56bb128ff5e1a603a7e5ac",
          59: "75e87d444ba59903894cd27a8f97e7f0",
          68: "f1d6f1443f37f2487df9d81dd417cbc6",
          173: "513820c2e1180ec535ae1a809c68302c",
          182: "aa334339e6b1cbdd87562bb3166fd6f3",
          282: "d332b06b26fbe1c0ac8f24193ee3a111",
          289: "ee93f47a9a2fbd7e39be522b44caab8c",
          471: "cdda5846169402640824f4013655d4ba",
          508: "59a80589eff074fa0b7d7305596dcc3f",
          590: "69e104981a468cb3d13f481cfc7c723b",
          745: "d49246f3035d81851e73516641b8344f",
          925: "917775e9357623d57e4c435f59b1c71b",
          942: "53489dfe2bb4425b50e2835f2145c2fb",
          1758: "20e7d992997e59cc6787fd8197d4d798",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1927: "5b41bbb48f2810eb282fa9d9e7846bf8",
          1999: "2f132bc000e367817875a2dc8fb4b04b",
          2151: "9602c26e7aeac11b4d42a69991510443",
          2229: "07b435f890979de431fa1d64b08dc445",
          2234: "99e7a7ef75328a64d9c23a56f0697658",
          2437: "0b1e217677b29ac5e41fd7e1c5b670b3",
          2440: "901630a747514289547376b1cf237d2b",
          2670: "885517618506a24289ca25d05256d1fa",
          3401: "22c64e4104cd4752778feb79b5fcfad4",
          3896: "366281132d161a06d30f75da315b039c",
          3924: "c7cbd0a6c472049c1e90cbe626709fa7",
          3926: "17703414d231bce852325cc746917fb4",
          4172: "d47160c60b286620ed5d9dee11e6ec83",
          4281: "fd2586c372724092e3604d47322e83f1",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4888: "e341fdb44107330baa6fc094f0af1ae7",
          5009: "e76e47f5adf497d3faa67c9bfada793a",
          5053: "79a5757db5369a67419f73a6c341c5c3",
          5241: "5529bd5abc024df45e8dd233da3cedc6",
          5265: "7d3ceae8220d7da3bd5623c94f0ab1b8",
          5415: "c95e167f2c9609ffa98c89478f3127fe",
          5535: "59f51958c339a92de6213c78536ccae1",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6118: "f32ceebdbc744763752d785a36a681e3",
          6188: "de94ab264084d1f213f45bda8785848b",
          6255: "d5f666ec43c191cc5e48ba4389d029b6",
          6471: "865092d36dd22afc00a12214d8dd12ba",
          7407: "987e46b8e7ddf8e3c8f1c96a46eb32b8",
          7512: "88247f142530e7f19d5d18c589008b68",
          7545: "e76e07136c28d73acdf04d15dbb816b8",
          7605: "054904568db2544eb58d257e50163386",
          7801: "518a556410492c9a35403917d3ca09c1",
          8096: "f738b33af4e9e4ae515d9ecc725d5bf1",
          8144: "30c9fd52e3e8809127a5321ef4d40bdf",
          8325: "ca6135703fde91915c2772db440bdeea",
          8384: "1513339b97e2760dcdfd74a206497559",
          8463: "fa587729a03faf15c8942f99d8c06cdc",
          8577: "dfc4f332a61e1281e53b4793cdf61c7c",
          8676: "103c76ef73de9214a6cd8a443f1ad6f5",
          8746: "f2402fd21c81b74fa44cbc090a0e02a2",
          8845: "ff0f74ff3e93bae47804829e9582e5be",
          8852: "95d8c8cd5dbaec46ef6c33c3cef343d5",
          8938: "0d57f468c3b286d0b283c40a3c8882d9",
          9123: "e80dad5319f823b5c4677b68ea067603",
          9713: "4368969b675192b13090dbd840facc8c",
          9760: "86ab550d9027f094ebcc651697d27187",
          9965: "517f7cef9482b1281a42def5747dfcf2",
          9986: "24b3cd82ebfe782d85745e5ff51de440"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          289: "a183e3230fd27669a21ecdc8a082c2f7",
          471: "384cddac2173849afd90c4a73e287f5e",
          942: "25c722cb525ac6c6280af22b8a0c5b31",
          2151: "bd1f235fa318fbbfb685016ac24c4271",
          2670: "a183e3230fd27669a21ecdc8a082c2f7",
          3401: "af340189dc39ad467e73aa44af88c314",
          3924: "99c2fd9adb621652406552432f4eb84c",
          4281: "64347ce070cf4aadd218c489baa103d7",
          5009: "a4d0d05f2c595a76a83fc48160ec1820",
          5053: "72518ca966bc5c01f3e45685eb43a2c6",
          5241: "6cd6ed1f7ec476b645d80bafef5d1962",
          5535: "33c7cc8094f30cd73a83f3af1c24cc53",
          8144: "c66a0b0dab0f4a7504561df18087fb93",
          8676: "384cddac2173849afd90c4a73e287f5e",
          9123: "edcf47f275dd4a0907325018f66ee7cf",
          9965: "6ba48a96558cc7637ceac72510a41048"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), o = {}, d = "@rockstargames/modules-core-newswire-article:", l.l = (e, a, r, t) => {
          if (o[e]) o[e].push(a);
          else {
            var f, c;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), s = 0; s < n.length; s++) {
                var i = n[s];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  f = i;
                  break
                }
              }
            f || (c = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, l.nc && f.setAttribute("nonce", l.nc), f.setAttribute("data-webpack", d + r), f.src = e), o[e] = [a];
            var b = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = o[e];
                if (delete o[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = b.bind(null, f.onerror), f.onload = b.bind(null, f.onload), c && document.head.appendChild(f)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          590: [11438, 17523, 44019, 83166],
          5053: [64064],
          5241: [31879]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, l.f.remotes = (e, a) => {
          l.o(c, e) && c[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), l.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                o = (e, r, o, d, c, n) => {
                  try {
                    var s = e(r, o);
                    if (!s || !s.then) return c(s, d, n);
                    var i = s.then((e => c(e, d)), f);
                    if (!n) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => o(a.get, t[1], r, 0, c, f),
                c = a => {
                  t.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              o(l, t[2], 0, 0, ((e, a, r) => e ? o(l.I, t[0], 0, e, d, r) : f()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            a = {};
          l.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                d = "@rockstargames/modules-core-newswire-article",
                c = (e, a, r, t) => {
                  var f = o[e] = o[e] || {},
                    c = f[a];
                  (!c || !c.loaded && (!t != !c.eager ? t : d > c.from)) && (f[a] = {
                    get: r,
                    from: d,
                    eager: !!t
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = l(e);
                    if (!f) return;
                    var o = e => e && e.init && e.init(l.S[r], t);
                    if (f.then) return s.push(f.then(o, a));
                    var d = o(f);
                    if (d && d.then) return s.push(d.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                s = [];
              return "default" === r && (c("@foundry/react", "1.19.0", (() => Promise.all([l.e(9965), l.e(2151), l.e(2229), l.e(4853), l.e(6471)]).then((() => () => l(79965))))), c("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(1927), l.e(2229), l.e(6188), l.e(9986)]).then((() => () => l(89986))))), c("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([l.e(4888), l.e(7545), l.e(2229), l.e(5966), l.e(3924), l.e(942), l.e(182)]).then((() => () => l(80182))))), c("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([l.e(9713), l.e(8384), l.e(4888), l.e(7545), l.e(925), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(1788), l.e(50), l.e(59), l.e(3401), l.e(9123)]).then((() => () => l(3237))))), c("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([l.e(4888), l.e(2229), l.e(5966), l.e(3924), l.e(5241), l.e(59), l.e(5009), l.e(2670)]).then((() => () => l(12670))))), c("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(9713), l.e(8384), l.e(8463), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(1788), l.e(50), l.e(8144), l.e(4281)]).then((() => () => l(68144))))), c("@rsgweb/tina", "0.0.0", (() => Promise.all([l.e(9713), l.e(8384), l.e(7512), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(1788), l.e(4853), l.e(745), l.e(2437), l.e(471)]).then((() => () => l(52437))))), c("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(9713), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(8096)]).then((() => () => l(75811))))), c("dompurify", "2.4.7", (() => l.e(3926).then((() => () => l(93926))))), c("lodash", "4.17.21", (() => l.e(1999).then((() => () => l(71999))))), c("react-dom", "18.2.0", (() => Promise.all([l.e(8577), l.e(2229)]).then((() => () => l(78577))))), c("react-jsx-parser", "1.29.0", (() => Promise.all([l.e(2229), l.e(8746)]).then((() => () => l(78746))))), c("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(2229)]).then((() => () => l(70282))))), c("react", "18.2.0", (() => l.e(508).then((() => () => l(50508))))), c("text-balancer", "1.0.5", (() => l.e(6255).then((() => () => l(16255))))), n(25136), n(29441)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var a = l.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                var f = r[0],
                  o = f < 0;
                o && (f = -f - 1);
                for (var d = 0, c = 1, n = !0;; c++, d++) {
                  var s, i, l = c < r.length ? (typeof r[c])[0] : "";
                  if (d >= t.length || "o" == (i = (typeof(s = t[d]))[0])) return !n || ("u" == l ? c > f && !o : "" == l != o);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (c <= f) {
                        if (s != r[c]) return !1
                      } else {
                        if (o ? s > r[c] : s < r[c]) return !1;
                        s != r[c] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || c <= f) return !1;
                    n = !1, c--
                  } else {
                    if (c <= f || i < l != o) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, c--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var o = r[t];
              return (t = Object.keys(o).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    o = (typeof f)[0];
                  if (t >= r.length) return "u" == o;
                  var d = r[t],
                    c = (typeof d)[0];
                  if (o != c) return "o" == o && "n" == c || "s" == c || "u" == o;
                  if ("o" != o && "u" != o && f != d) return f < d;
                  t++
                }
              })(r, t) ? r : t), 0)) && o[t]
            },
            t = (e => function(a, r, t, f) {
              var o = l.I(a);
              return o && o.then ? o.then(e.bind(e, a, l.S[a], r, t, f)) : e(a, l.S[a], r, t, f)
            })(((e, a, t, f, o) => {
              var d = a && l.o(a, t) && r(a, t, f);
              return d ? (e => (e.loaded = 1, e.get()))(d) : o()
            })),
            f = {},
            o = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => l.e(508).then((() => () => l(50508))))),
              16188: () => t("default", "lodash", [1, 4, 17, 21], (() => l.e(1999).then((() => () => l(71999))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([l.e(9713), l.e(6188), l.e(6118)]).then((() => () => l(75811))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(282).then((() => () => l(70282))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([l.e(1927), l.e(7605)]).then((() => () => l(89986))))),
              44853: () => t("default", "react-dom", [1, 18, 2, 0], (() => l.e(8577).then((() => () => l(78577))))),
              2973: () => t("default", "dompurify", [1, 2, 4, 1], (() => l.e(3926).then((() => () => l(93926))))),
              92440: () => t("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([l.e(9713), l.e(8384), l.e(7512), l.e(6188), l.e(6118), l.e(1788), l.e(4853), l.e(745), l.e(2437), l.e(8676)]).then((() => () => l(52437))))),
              15310: () => t("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => l.e(289).then((() => () => l(12670))))),
              20206: () => t("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => l.e(3401).then((() => () => l(3237))))),
              23608: () => t("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => Promise.all([l.e(942), l.e(7801)]).then((() => () => l(80182))))),
              37896: () => t("default", "@foundry/react", [1, 1, 14, 2], (() => l.e(9965).then((() => () => l(79965))))),
              94581: () => t("default", "react-jsx-parser", [1, "workspace:^"], (() => l.e(8746).then((() => () => l(78746))))),
              97384: () => t("default", "text-balancer", [1, 1, 0, 5], (() => l.e(6255).then((() => () => l(16255))))),
              20270: () => t("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([l.e(8463), l.e(8144)]).then((() => () => l(68144)))))
            },
            d = {
              59: [92440],
              1788: [81788],
              2229: [62229],
              3401: [20270],
              4853: [44853],
              5241: [2973],
              5535: [15310, 20206, 23608, 37896, 94581, 97384],
              5966: [95966],
              6118: [9623],
              6188: [16188]
            },
            c = {};
          l.f.consumes = (e, a) => {
            l.o(d, e) && d[e].forEach((e => {
              if (l.o(f, e)) return a.push(f[e]);
              if (!c[e]) {
                var r = a => {
                  f[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = a()
                  }
                };
                c[e] = !0;
                var t = a => {
                  delete f[e], l.m[e] = r => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            l.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                289: 1,
                471: 1,
                942: 1,
                2151: 1,
                2670: 1,
                3401: 1,
                3924: 1,
                4281: 1,
                5009: 1,
                5053: 1,
                5241: 1,
                5535: 1,
                8144: 1,
                8676: 1,
                9123: 1,
                9965: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = l.miniCssF(e),
                  f = l.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (d = r[t]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (t = 0; t < o.length; t++) {
                      var d;
                      if ((f = (d = o[t]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) t();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        c = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = d, n.request = c, o.parentNode && o.parentNode.removeChild(o), f(n)
                    }
                  }, o.href = a, document.head.appendChild(o)
                })(e, f, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          l.f.j = (a, r) => {
            var t = l.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(5(009|241|9|966)|(17|61)88|2229|3924|4853|8676|942)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var o = l.p + l.u(a),
                d = new Error;
              l.l(o, (r => {
                if (l.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + o + ")", d.name = "ChunkLoadError", d.type = f, d.request = o, t[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, o = r[0],
                d = r[1],
                c = r[2],
                n = 0;
              if (o.some((a => 0 !== e[a]))) {
                for (t in d) l.o(d, t) && (l.m[t] = d[t]);
                c && c(l)
              }
              for (a && a(r); n < o.length; n++) f = o[n], l.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), l.nc = void 0, l(23787), l(55974)
      })())
    }
  }
}));