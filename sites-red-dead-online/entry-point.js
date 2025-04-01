! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "07b90f0c-58f5-4b0d-b791-876cb37f126d", e._sentryDebugIdIdentifier = "sentry-dbid-07b90f0c-58f5-4b0d-b791-876cb37f126d")
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
}, System.register(["@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
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
              e.exports = t
            },
            25136: e => {
              "use strict";
              e.exports = r
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
          131: "763fb68ab2e3623bc5b9408501cb2980",
          278: "f1bfbf9b949648d912093155c12b8702",
          299: "9dea35f135d5204ed359fdf48982257e",
          314: "35f02d359c4b298ea52b08c59f5bf2e3",
          662: "90d369c1eb017134b43e053832cceceb",
          721: "42c75f210279fa6ac1ac7efef4d2326a",
          824: "dca86332e0cc6967029c2b20e96e57ac",
          907: "3192861b5228c0af09e905abd13a743f",
          920: "e4884dc9991aa04092623244c3b3f2b2",
          1054: "8275cf1e34da5c2ac18940ab92aa3ba1",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "91925f91a034b31d1e5a6ee605e71ceb",
          1673: "b8fc82fa6317c5fbb512eafbb2608827",
          1822: "820a2892c18c829077908e737c419f17",
          1868: "9d16c00ad6ea7c9cdbf49b363bee1c94",
          2024: "012477f5fa91ebd316ae4b619adae14a",
          2156: "81ea77cf2eb8cbeea54ac4b8bbe77ef9",
          2171: "cc04d498dc9322174c8dbfb876374053",
          2221: "1461da775f36a2eca21189542b2d3404",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "111b2977f81d8a52c69e28de6db21010",
          2324: "c3c040b78e0f37a70d6a970d8d902146",
          2347: "8e9b74ce66ae2883dd2d2408d4a67d7a",
          2365: "844e8aa337fb92b7c34026355b3395d5",
          2398: "45f12df246842a1138535bcd19bd37be",
          2466: "fa8967b81dca846f94e80569cfd4f103",
          2642: "1ad4127bff8b482f7940ce8300ec995a",
          2678: "e2ace9cb6dd90deb20a4ecc0d6abe3c5",
          2772: "92de682dc82690c4403932d0e58c9383",
          2817: "343de4a909eecd3f6dde073aa032a264",
          2864: "40e85ba3e49fad1b96467083d5343c03",
          3034: "ac2b95fb59b301341f9e7aaf8cb330b2",
          3197: "4722ed0d2cce740a59258d3dec82f68d",
          3343: "7b1c282603c2cb3bda470861284e04d7",
          3370: "9c6a1ccce679cba3cb44f121d5d99f9a",
          3447: "3c6d0004246326b01a547a8099152347",
          3475: "eb907bb981455ae38963a01774ae9bdc",
          3486: "ad3da91034225880e378ab72e627413e",
          3681: "23702f532c949d5b56d588f7b1aadb6a",
          3697: "1b3367bda6af06fe44112e642cff8278",
          3885: "5fde2a16e72c19d6359a0af704b97113",
          3941: "1d04e651c05f9153c42d40671259c2bc",
          4011: "7ec99e3dbe85d89740bb73f47d9f42fd",
          4018: "49a1e4eae74f89ffd6a19851345ab04a",
          4054: "070a9807e839b4077e3cada330a2cb13",
          4528: "bec0954694398e2feaf8668212afc53d",
          4621: "f08e8d576300f77bdc56233dd83cb637",
          4700: "b7ef463826ce4bc6d023feaf269c20fb",
          4710: "ebe708a9c31287d9e1bb6a1e9295b614",
          4731: "68fdde5a460e3a000729a6ede0b6c10d",
          4781: "4cae40ab38d0437acfa11e78c503c365",
          4799: "884e4c21e7bcc5cda98890391ba1b7a1",
          4851: "34ea12187f446768a1696ccbfe420cd1",
          4861: "42f61ad91cbf838c68c201177f716f76",
          4913: "1a78fc8178688f4db0cef7ddee285e6f",
          5018: "ca1f93385f867dfe3b1ab04f2522b972",
          5233: "d99806fd434e893c6a4ca8ba8d158e16",
          5254: "e3e2f890dc702b629478fa6984ca9fb9",
          5259: "61622dfddf6564694d78198cb7768bc1",
          5530: "a725c2bd5e24e4ec3b653f7ace91ca13",
          5639: "969f05e3b0095777689ffac96a6a8867",
          5663: "065c6cc1141730099d793758fd3776b7",
          5742: "b04532b4de9e06a6747c119f6320830b",
          5830: "5f79fb0c274021942cc013ef86b5deb0",
          5832: "0ac75912b3da51f58f57d29f54c7e8f8",
          6102: "4b22d669b8f55148e07f227512caf8c0",
          6267: "0a45db1a6ce81faa66ea1e159a39af6e",
          6280: "e92364d84a3185a2bbad98a1d09eed2f",
          6285: "849e1dfcbd06ef67bd50228fb82d3937",
          6361: "046523a9c35d80e052b1f9cd3d931866",
          6664: "d66d7a7bfaaa5479d34f5f7248617275",
          6682: "8494ccc6e60665bb4ecc1bf445414e7d",
          6879: "c8209866ed89fece41607626f0d84bc2",
          6891: "64a63d8e6b1e6eaa1a177cbbd27408ff",
          6997: "f2871327b04bbb04135c9ff6eeeb4a82",
          7010: "c0e39e335b8386e32c19306dae45b4f7",
          7073: "7f11bf1f58a5bf446539cdeae5716593",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7436: "0ad1b552c7d599f5fba006d4c2eeb074",
          7452: "3bd8d23b3334300e3ff7efcedbf82c9e",
          7453: "8c993f6a04385b27323fd9347d7e02bd",
          7970: "753ab9ef1a184b72cf60fbf75d28eb90",
          8155: "38c1205180e1e5e4c6faad666364caa3",
          8272: "76470f820c7a1fe93e54f374884a1fde",
          8391: "a30f83e5572b59ee0b5b45048f8aecd9",
          8481: "4f9d95ce2e8a78e94cffba084f3a869b",
          8755: "8a19a4f42e13484a7991c57b5965e53a",
          8880: "02e77fd31e156dd2481f31d74975f2b0",
          8970: "ea016a623075a9eb6b7cf48686c1b9ce",
          9022: "c8026b933894c9fb60b3b86dc2f8306a",
          9028: "1647f34721fcf1d821d54fdd5ddc81d3",
          9126: "30a393eb541f04a823b381875cdcc156",
          9323: "83b7e2d3ffa060e58682f058c7ab8033",
          9377: "cd9b8d2dc5380d15935356a1f0f0ef6b",
          9615: "231c37509d13f8ceb778ae55882b4c10",
          9936: "cb2a5a9227b39cdaa03a51e17fad59a7",
          9943: "888595587870838ac229b805b9de63cb",
          9990: "33f55b5a2cc3801783cc42f3706a5a3a"
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