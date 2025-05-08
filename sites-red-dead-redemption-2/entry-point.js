! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "245bd808-369f-4743-aaa3-cdfab4a1ede2", e._sentryDebugIdIdentifier = "sentry-dbid-245bd808-369f-4743-aaa3-cdfab4a1ede2")
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
        var e, t, f, d, c, n, o = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(888), r.e(3316), r.e(2530), r.e(2229), r.e(6682), r.e(5966), r.e(8341)]).then((() => () => r(18341)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
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
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          131: "ec3ed551c7e9764cd3185d12df74682d",
          278: "8cbf83cad6fe224cfd569c3ef6e089ce",
          299: "4e653e2b2c19392b563072495deb16fa",
          314: "13b3ecabbc44d0efd852c216748b55f0",
          662: "25829c541f3d83277d22cdc66e9dbb77",
          721: "9ca5ad561a9e732b78e93970c343325e",
          824: "0e22e249ee4f53b52a88c84f864279cd",
          888: "baefc2265253c7412e2eb8a4cff33a67",
          907: "ba52798675cf07d98434db73c382b185",
          1054: "eb847da1c57e4cb53c4376aa7015735b",
          1242: "317aa7a5e80afe2251a2d5f119778012",
          1360: "5d502b02dfdd019bd4307f10a40ed45a",
          1673: "edbf7581e5e497283b950a0f033fef5f",
          1822: "d02ced1b0c607081fbf81b0e47703b8c",
          1868: "3aa9c98ae9a47f091b203aaff1c028a1",
          2024: "29a89b00f90e291da3d8770e32209095",
          2156: "ad006ce1f6332a7c80afc0d1d97769e6",
          2171: "e29f0b55c110edcbc26a23605afb0dec",
          2221: "478227839bd0915c02552cd483155f54",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "d8c15b7269354a86b1558be2254a5efe",
          2347: "b38f8ae7e63b0f4cd56da2e4d8e8000a",
          2365: "a19bb585d8f7483a67f3cba20700787a",
          2398: "014a6f81ae7ee23276bbf2a7bce98cc1",
          2466: "da48b1e11ed1a8257152a32f808325c0",
          2530: "904aef7d0b2ddd526779c3a6b22fb421",
          2642: "833cc3c3d9cfcc28b4656b1ad9fd997c",
          2678: "485e78fbb945fc5923c31ea68166ef64",
          2864: "f2f30fcf10512882af6185903acadb5d",
          3034: "9b2dd6547c848e03e40307401a196973",
          3197: "619aeeee9d15493252fb51d947e1cb9b",
          3316: "3f7ca326e2bd00bc71aa21688d2e8b2a",
          3343: "53662f3c9dfd2e8656e8f177ff15ac09",
          3370: "d17792afe265d3d2e9ae0fcd282a5dfd",
          3447: "2bb7606996f9c8df0eec09cfd88e466b",
          3475: "3e11474e51d52e7184df416f8c256647",
          3486: "ce8418bb4fcec69ad3a32e6568fc9259",
          3697: "a7f84bbc464bb9f1bc46ff25f42b416b",
          3885: "c2dd2c3acfb31ae542cb60d05ec21139",
          3941: "3d0871509cd9064ef49e2cd3a1b8eac0",
          4011: "f1c5232dd4e5bfcb4940c7465afffe10",
          4018: "57723016bc85fea0c3fb6947f32beb2d",
          4054: "c33f93c42b2e2102196e54e878432603",
          4528: "7dcd1116629f558fc774cdfd5d15b1dc",
          4621: "fffa684c3fd69db1d76613d91f33d638",
          4700: "a1fc2aac4c8e33f29b6f157dd20dcff8",
          4710: "5a0ddd7013ac66ab146a8b5cb34f8a6f",
          4731: "e1963e5d3cb4dd29fbb2e69d811167f6",
          4799: "98021de16e797cbeab0c4964eec0c606",
          4851: "2a1a5420bf8132d44103f322d5b14390",
          4861: "033312713f6db990d606e7baf6b68a0f",
          4913: "cc27cca8fd3e7a1a412ac9bed4283f73",
          5018: "815719352262862e0959c2cefb2c52e8",
          5233: "bb03819a65b0b1bfcf8784a06e9e28df",
          5254: "15b6c2c31dfdea1847f0dd92723554ae",
          5259: "6e6425cdee8fcfb21b4e92313cad73e4",
          5530: "eda8c861ceb6eea3dae4a377eb0e76ec",
          5639: "5da40f937d29c390203f6e53c12ed90f",
          5663: "0a39120fa52247907155254407b0e5ce",
          5742: "47b6aa18190d9854f669543ea1c97920",
          5830: "5342b8726dbbb4e1ad9b8dac188ac514",
          5832: "14f21cce1ec6187dfc27594c27e354c6",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "e61d0dc383d58dd751acc707d5d279e4",
          6280: "76861e4b5bd3b0cd94cbcf24139557b4",
          6285: "f40c282ab1caa41446bd47959e39bd31",
          6361: "af139f25b654e583075d7c809d96aac3",
          6664: "1872842f735497c15858df587e3096b6",
          6682: "d61ee78f86fadc12d205291e1dc7e49d",
          6879: "17a8bca154e36bc3037adb0a79f63d8b",
          6891: "5c9faeb1523fec7f11dbf029f0f36332",
          6997: "164283b095f437dbe6ab48f4613fa9e8",
          7010: "b4dc8ec1ed73aba209c0974bfa9925a9",
          7073: "24f92e4317d7b05911f624e2eb79c930",
          7131: "f7c90959e337c313211a8e97197a1b97",
          7436: "a11b4ad0c14d63d6adf6a3143d9cc32b",
          7452: "90cdf22b4151f6a6c9c3e7ea4f83e178",
          7453: "aadf8626f515fd82a8354836453474dc",
          7868: "2d78988dd45fe4473235c266dbb04387",
          7970: "b2303f5b2aa15fb843d29a6bd9946723",
          8272: "e0726ac09239567ad24f1312f370f72f",
          8341: "7d5bfafc050e404a6a052f616879911c",
          8391: "64b3debe701d879e30cf316382e6969e",
          8755: "74c2fde49c6b296cbe0a1ffdeb65a56f",
          8880: "487c2b75b2645ff976af95b207cbeb32",
          8970: "ccebb373509c7d31633e055eabb39125",
          9022: "bd59b64e58692689445924a1de35538a",
          9028: "4241b80bbcf4872385013df9b9922f0b",
          9126: "475405ca891111fc0dbf486c1e20779a",
          9377: "640c69869d9989e508315fe0835ff3d8",
          9512: "bcbb226ea2871689dd12de177f9f94ab",
          9615: "a8adb2beeaaa3072c10b571c0a5b62f3",
          9936: "aeed2075557754c56014d8752c88dcf9",
          9990: "f957d93316303dcd63a3644b76708b7b"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
          8341: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, ((e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
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
                  var f = i(25136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (f.then) return o.push(f.then(d, a));
                  var c = d(f);
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
                var f = r[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != r[n]) return !1
                      } else {
                        if (d ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
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
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var d = r[t];
              return (t = Object.keys(d).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && d[t]
            },
            t = (e => function(a, r, t, f) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], r, t, f)) : e(a, i.S[a], r, t, f)
            })(((e, a, t, f, d) => {
              var c = a && i.o(a, t) && r(a, t, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              16188: () => t("default", "lodash", [1, 4, 17, 21], (() => i.e(7868).then((() => () => i(17868))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(17560))),
              47224: () => t("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([i.e(1360), i.e(9512)]).then((() => () => i(37131))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950)))))
            },
            c = {
              2229: [62229],
              5966: [95966],
              6682: [9623, 16188],
              8341: [47224, 81788]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
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
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, d = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(45408), i(85819)
      })())
    }
  }
}));