! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "224f14b7-0cb2-4b03-820a-3bd1e12c2aa1", e._sentryDebugIdIdentifier = "sentry-dbid-224f14b7-0cb2-4b03-820a-3bd1e12c2aa1")
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
        var e, f, c, o, d, n, s = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, c = t.length; f !== a && c >= 0;) "/" === t[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var o = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + o
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
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => c
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
          var c = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var o = 2 & r && a;
            "object" == typeof o && !~e.indexOf(o); o = f(o)) Object.getOwnPropertyNames(o).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, l.d(t, c), t
        }, l.d = (e, a) => {
          for (var r in a) l.o(a, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((a, r) => (l.f[r](e, a), a)), [])), l.u = e => "js/" + {
          50: "fbe5b1076d50965c757b780a6ef8e918",
          59: "75e87d444ba59903894cd27a8f97e7f0",
          68: "b9c31b66536e0af323fc86beac1f8401",
          173: "f824acfbe5c246e7a14245207a3a6c84",
          182: "4fc4446490b98df3ca9c908d65a8136c",
          282: "286323f4a7327e4646c09126951a7847",
          289: "50370f8a81daf884b247ef243d1c076f",
          471: "f91e7962c44c1f7cf88d6f95c36f2051",
          508: "911f175559d86db1cf1063780360f07b",
          590: "f1c2057b0098fc186dd215410bb6c520",
          745: "3ecc87ac82accf951be97367086d25b8",
          925: "b58ca515821445675c219fe8f92bee64",
          942: "53489dfe2bb4425b50e2835f2145c2fb",
          1758: "d6c543126c075c78882a6d661ed3529d",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1927: "2ed1ed4857946081f21bd38d3466ba33",
          1999: "335cfa9ef89f891520862706b3fc5bf0",
          2151: "4653e58862ad4b649c305d00e4c634f3",
          2229: "07b435f890979de431fa1d64b08dc445",
          2234: "78fbbd15f235fa0299fff7f3ef716d09",
          2437: "0688f5d16771c27c3b619926129160e3",
          2440: "295abb546d973b88737d0fb350e57602",
          2670: "1a86cca26688c1b6a5a98de20b898da5",
          3401: "a5e62f739480670e0e0c4a50c76b578b",
          3896: "7af31f059462e32f5cca85698b4a1873",
          3924: "c7cbd0a6c472049c1e90cbe626709fa7",
          3926: "282005f53498fb6c66a1ebca5a84825f",
          4172: "6542d22953161622546c284353305dee",
          4281: "c7d2e1cc1bc856e4eb00c46ea2ab4ca5",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4888: "c28e99fb0dfb8fe4320f5e0a9e1edf10",
          5009: "e76e47f5adf497d3faa67c9bfada793a",
          5053: "51d4232adbf05769b2283dc869c0618c",
          5241: "5529bd5abc024df45e8dd233da3cedc6",
          5265: "60d354be64e4889508dc74a2bcd8afcf",
          5415: "d8f215e38cddb8cd7aef9d8a7fe261cd",
          5535: "b1fa93c60e8d2b0ae184eece264cc53b",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6118: "ebf8e3a81feac91f3446a506d73318c0",
          6188: "de94ab264084d1f213f45bda8785848b",
          6255: "47de9e915610259450208f7eef2b4387",
          6471: "962ced0d8f175839c5053456d4956022",
          7407: "9e211fb3d918a6b8926e91a8f282f380",
          7512: "b63f5f28a93342990969ff866e63ec38",
          7545: "46deb71fe117313c5e5625dc1e38e730",
          7605: "eb749a23b8d51085f702138e89a5aba7",
          7801: "b3136725ea921482aab6f0f65fd183bb",
          8096: "919d340425e3237baa6e1c6e472d6816",
          8144: "34f781f79cc4af7f1f79bb1d497548fd",
          8325: "5ffd0c366ce9cadeca114811fcbb86d8",
          8384: "44823929c4492e0d865e54b7e76426c0",
          8463: "d17d4cff143398bb5469a70a86d9e2db",
          8577: "f337931074137c5d8b2cac1141e0ebbf",
          8676: "103c76ef73de9214a6cd8a443f1ad6f5",
          8746: "eeabdccc1ea4bb903969773870153759",
          8845: "fdf019ad83f5ed5494994eb19a01a316",
          8852: "1c1c8fc5a10b1320f3af28dd2292a8c4",
          8938: "4a3d59c58bd0c717afdce496c549f852",
          9123: "0626ecb2ddeaaf5f07d99eca589f02d1",
          9713: "8289412f811eccf576669cc3dd71a413",
          9760: "985e7291506b18ea7150591ceea17fa6",
          9965: "457b0fa9418f5992bf7acd786e5c78ab",
          9986: "d13e29a2e08a0b158711f801892e7180"
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
        }(), l.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, o = "@rockstargames/modules-core-newswire-article:", l.l = (e, a, r, t) => {
          if (c[e]) c[e].push(a);
          else {
            var f, d;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), s = 0; s < n.length; s++) {
                var i = n[s];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == o + r) {
                  f = i;
                  break
                }
              }
            f || (d = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, l.nc && f.setAttribute("nonce", l.nc), f.setAttribute("data-webpack", o + r), f.src = e), c[e] = [a];
            var b = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = b.bind(null, f.onerror), f.onload = b.bind(null, f.onload), d && document.head.appendChild(f)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
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
          l.o(d, e) && d[e].forEach((e => {
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
                c = (e, r, c, o, d, n) => {
                  try {
                    var s = e(r, c);
                    if (!s || !s.then) return d(s, o, n);
                    var i = s.then((e => d(e, o)), f);
                    if (!n) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                o = (e, a, f) => c(a.get, t[1], r, 0, d, f),
                d = a => {
                  t.p = 1, l.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(l, t[2], 0, 0, ((e, a, r) => e ? c(l.I, t[0], 0, e, o, r) : f()), 1)
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
              var c = l.S[r],
                o = "@rockstargames/modules-core-newswire-article",
                d = (e, a, r, t) => {
                  var f = c[e] = c[e] || {},
                    d = f[a];
                  (!d || !d.loaded && (!t != !d.eager ? t : o > d.from)) && (f[a] = {
                    get: r,
                    from: o,
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
                    var c = e => e && e.init && e.init(l.S[r], t);
                    if (f.then) return s.push(f.then(c, a));
                    var o = c(f);
                    if (o && o.then) return s.push(o.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                s = [];
              return "default" === r && (d("@foundry/react", "1.19.0", (() => Promise.all([l.e(9965), l.e(2151), l.e(2229), l.e(4853), l.e(6471)]).then((() => () => l(79965))))), d("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([l.e(1927), l.e(2229), l.e(6188), l.e(9986)]).then((() => () => l(89986))))), d("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([l.e(4888), l.e(7545), l.e(2229), l.e(5966), l.e(3924), l.e(942), l.e(182)]).then((() => () => l(80182))))), d("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([l.e(9713), l.e(8384), l.e(4888), l.e(7545), l.e(925), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(1788), l.e(50), l.e(59), l.e(3401), l.e(9123)]).then((() => () => l(3237))))), d("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([l.e(4888), l.e(2229), l.e(5966), l.e(3924), l.e(5241), l.e(59), l.e(5009), l.e(2670)]).then((() => () => l(12670))))), d("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([l.e(9713), l.e(8384), l.e(8463), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(1788), l.e(50), l.e(8144), l.e(4281)]).then((() => () => l(68144))))), d("@rsgweb/tina", "0.0.0", (() => Promise.all([l.e(9713), l.e(8384), l.e(7512), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(1788), l.e(4853), l.e(745), l.e(2437), l.e(471)]).then((() => () => l(52437))))), d("@rsgweb/utils", "1.0.0", (() => Promise.all([l.e(9713), l.e(2229), l.e(6188), l.e(5966), l.e(6118), l.e(8096)]).then((() => () => l(75811))))), d("dompurify", "2.4.7", (() => l.e(3926).then((() => () => l(93926))))), d("lodash", "4.17.21", (() => l.e(1999).then((() => () => l(71999))))), d("react-dom", "18.2.0", (() => Promise.all([l.e(8577), l.e(2229)]).then((() => () => l(78577))))), d("react-jsx-parser", "1.29.0", (() => Promise.all([l.e(2229), l.e(8746)]).then((() => () => l(78746))))), d("react-router-dom", "6.17.0", (() => Promise.all([l.e(282), l.e(2229)]).then((() => () => l(70282))))), d("react", "18.2.0", (() => l.e(508).then((() => () => l(50508))))), d("text-balancer", "1.0.5", (() => l.e(6255).then((() => () => l(16255))))), n(25136), n(29441)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
                  c = f < 0;
                c && (f = -f - 1);
                for (var o = 0, d = 1, n = !0;; d++, o++) {
                  var s, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (o >= t.length || "o" == (i = (typeof(s = t[o]))[0])) return !n || ("u" == l ? d > f && !c : "" == l != c);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (d <= f) {
                        if (s != r[d]) return !1
                      } else {
                        if (c ? s > r[d] : s < r[d]) return !1;
                        s != r[d] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || d <= f) return !1;
                    n = !1, d--
                  } else {
                    if (d <= f || i < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, d--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (o = 1; o < r.length; o++) {
                var h = r[o];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var c = r[t];
              return (t = Object.keys(c).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    c = (typeof f)[0];
                  if (t >= r.length) return "u" == c;
                  var o = r[t],
                    d = (typeof o)[0];
                  if (c != d) return "o" == c && "n" == d || "s" == d || "u" == c;
                  if ("o" != c && "u" != c && f != o) return f < o;
                  t++
                }
              })(r, t) ? r : t), 0)) && c[t]
            },
            t = (e => function(a, r, t, f) {
              var c = l.I(a);
              return c && c.then ? c.then(e.bind(e, a, l.S[a], r, t, f)) : e(a, l.S[a], r, t, f)
            })(((e, a, t, f, c) => {
              var o = a && l.o(a, t) && r(a, t, f);
              return o ? (e => (e.loaded = 1, e.get()))(o) : c()
            })),
            f = {},
            c = {
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
            o = {
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
            d = {};
          l.f.consumes = (e, a) => {
            l.o(o, e) && o[e].forEach((e => {
              if (l.o(f, e)) return a.push(f[e]);
              if (!d[e]) {
                var r = a => {
                  f[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = a()
                  }
                };
                d[e] = !0;
                var t = a => {
                  delete f[e], l.m[e] = r => {
                    throw delete l.c[e], a
                  }
                };
                try {
                  var o = c[e]();
                  o.then ? a.push(f[e] = o.then(r).catch(t)) : r(o)
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
                      var f = (o = r[t]).getAttribute("data-href") || o.getAttribute("href");
                      if ("stylesheet" === o.rel && (f === e || f === a)) return o
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var o;
                      if ((f = (o = c[t]).getAttribute("data-href")) === e || f === a) return o
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var o = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = o, n.request = d, c.parentNode && c.parentNode.removeChild(c), f(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
              var c = l.p + l.u(a),
                o = new Error;
              l.l(c, (r => {
                if (l.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  o.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", o.name = "ChunkLoadError", o.type = f, o.request = c, t[1](o)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, c = r[0],
                o = r[1],
                d = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in o) l.o(o, t) && (l.m[t] = o[t]);
                d && d(l)
              }
              for (a && a(r); n < c.length; n++) f = c[n], l.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), l.nc = void 0, l(23787), l(55974)
      })())
    }
  }
}));