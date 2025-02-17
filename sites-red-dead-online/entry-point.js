! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d814290f-6908-4898-af4e-592fae46d3f5", e._sentryDebugIdIdentifier = "sentry-dbid-d814290f-6908-4898-af4e-592fae46d3f5")
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
            49293: (e, a, t) => {
              (0, t(31789).w)(1)
            },
            31789: (e, a, t) => {
              const r = t(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            23358: (e, a, t) => {
              t(49293)
            },
            90569: (e, a, t) => {
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
                  "./index": () => Promise.all([t.e(3338), t.e(3190), t.e(7071), t.e(2229), t.e(3254), t.e(1179), t.e(7145), t.e(7177)]).then((() => () => t(97177)))
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
          101: "bdfd731565f8b87f4af272ecbb26d405",
          131: "bf24ac2de9d5095c563052da771f0070",
          278: "b96827f183857a978d5e2f694dbde092",
          299: "ac4dbd8376064ab7da49d4f6ef11a0b5",
          314: "176c8c75f6515882538f8a81d812a390",
          662: "528f2c82fdd8e6b3815495bc57c72f7e",
          824: "3fcf1d696c4da5898744173c49ef77ab",
          907: "f660e669ceb6fc7903d8c18c068f3bb8",
          1054: "d2112d82b3f5fae6730750d69a473a4a",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "4c8e3cc2fe599460e536e1aadf98bf7e",
          1604: "1701aa38b7100b0e2727e38ca11e9325",
          1822: "b12feadba0b03a6b689827451b25f465",
          1868: "7de2f470bc7863934567d22874dd9f3d",
          2156: "2508d1f479e8a910b26c27cd516c3faa",
          2171: "7a6be5a98927c5070a4de40f5b8b751b",
          2221: "02225260363eb7b76c94f7635923b9d9",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "383cd39455ca1bcfbea9bc61df1ab4d5",
          2326: "a8061614511375c0f9ebee0db8d72838",
          2347: "541940f0dd2a26bfc7fdd8c1bb0380d9",
          2365: "ea0a6e86add413ea3580f13ab70f55ae",
          2398: "28e0006b6f3ad268e7f74997a1339bb8",
          2466: "8db9d375822c286a755c6f19adf48037",
          2642: "b73fece49a5688bd3f8865ef3d2633de",
          2678: "d6d7fef2e19e38637e9c69231fbbc45d",
          2864: "f00e0d0760163dd7e574b46f4f2a9b97",
          3034: "fc2ac069e088767d6cabe8bc561b78bd",
          3190: "f68618f089bf9c61a056638f4b12148b",
          3197: "1b08f95c962bbec7c705f0854bf9cf80",
          3217: "652432864b329d14b72eef4c8475ee4e",
          3254: "5c08bcde1537e68c8c44e988d9e1574a",
          3338: "cd95537dbbdcca2afeec6a08a0e82f0f",
          3343: "0597a28053c9e1ef8dcc81233afcbe59",
          3370: "576f3bfed7c6825787990be546ea7d74",
          3475: "2ee2eb31c94d12aa111e302231dc3490",
          3486: "2c9e05623caf26bdab10e8105e43aea6",
          3697: "f305347363102ce6563929031928a828",
          3885: "6c19af3b97e37c6e0301a219b49fd315",
          3941: "ac7b64af809ca36a534252f6dbdb57e2",
          4011: "d775414d82699b62ee2267637077720b",
          4213: "f8e0e866ff8fdd58df946b625699abf5",
          4528: "3e743d4a460d7b08bff8853e750ae0b3",
          4621: "5bad492bffa40b7ed0b0afd2ba23bc75",
          4700: "84871149e9c454d7f29397c5366427cc",
          4710: "5026740c7864e123c67ce7e1c1e1a0a5",
          4731: "07f99d8cdeff2786d3365658c1a4e986",
          4799: "1f586f8ed846c14d75a93d42bf7f15b9",
          4851: "c6c8a03f2c6671d8edfdc672ed7b76a1",
          4861: "4f2f6d35b47a5f7e7afa4da80595b0d1",
          4913: "b298f4278001dea8176593205cb8b71a",
          5018: "66f541b312391eaa882e56861a542df5",
          5219: "c14eb62981d62f6ae1f7c1307d3d02d6",
          5233: "1b88df2f5efab34c29df5c3195fff4ae",
          5259: "1a0d9c82784973f5c96e4e4341767f09",
          5409: "f7fcdf84264ae4a62ce45e9582340fa4",
          5483: "9173741e810aa715c9675a7b5748de8d",
          5530: "be45efb998d012ba831537f509dc5c36",
          5639: "90e14248a579059954aaa54ac355873d",
          5663: "ae971d4a9e0173fdc6887d7cd9895949",
          5742: "7b28e5e19d918b77f3b5b04650b20e88",
          5830: "f15fa9af717d01f06350fa2c10b9aa6f",
          5832: "fcf6ee54f0513f595bca38f648038317",
          6267: "91d115367fa6b8b8d623d165ba2a8bd4",
          6280: "a899e24118ade7327fc5019dfda9d043",
          6285: "3c6128a6f68aef51d94fe3a4b4397cde",
          6361: "c3aa16cdaa17f5810eea3d2b5402b9d1",
          6594: "e1a892c642976ad5a22e3cbb28780d15",
          6664: "a4c7e6b39ce9b89f853e85eeb82c4d55",
          6723: "b1560a65153a329c719cfbe50a83ff88",
          6832: "f210333e0cfecf7fb03426f26708c349",
          6879: "6b4fcd3c24d20912343574fb7896840d",
          6891: "d3ffd335b516a3f6b6624bf8d82de7fc",
          6997: "41d8bf33c3b936351b4f62571b44fea7",
          7010: "6cd8fd5a458bf589847602e9d5b89292",
          7071: "e107407517cfadfa35bf55bb7b4a7751",
          7073: "b0dfb5c4f3a4367f9d7ec32ab548c906",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7177: "a17b7853337ddb28fff2c0c78ae1dd5b",
          7436: "2f8dec279acdb53db6d628ce061a2dd8",
          7452: "15a374e7fbd9ef005536c224b444b3ba",
          7453: "a857fe8d3301dca158b950b266174bb4",
          7600: "0e1a9eb68c16b78e1bd3decc9184e510",
          7970: "d6f0279760c82b41f90bac94747d8d23",
          8272: "37aeacbd061b91b0f5d127fd77536f30",
          8391: "c15fad53c2293d2f271ce5713d9ecf8b",
          8755: "e6d615bd86f6de7df51024eb2032c919",
          8880: "87a54f4cb0ca23c5bf6e6cd8ddded356",
          8970: "13a2227523ceb6d3799a434119d5000a",
          9022: "72d473524a27950154687cb15a89ff65",
          9028: "a8376194a4519bdae655175788009ea6",
          9126: "02cf42a6da735719e1e07efc7cff7e14",
          9377: "a903bbe418b0444a0759c4945fc66f8c",
          9550: "e3719a5a0bdd0d7df5e2081644c270df",
          9615: "ba56d4b1ef46f67cef6c6cc44ea5416d",
          9936: "e56157e21fe161a898d45f5000dfb7a2",
          9945: "073130130b1e9a61963f426a00d13b0b",
          9990: "7b9b70c0e0c28ddcacd3a29f79095ded"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          4213: "266e6305d550bc71a82a072d53678cd9",
          6594: "266e6305d550bc71a82a072d53678cd9",
          7177: "f53a63af6900192669bb2c7ff1d00d96"
        } [e] + ".css", s.g = function() {
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
          7177: [9566, 31879]
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
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(5483), s.e(2229), s.e(5219)]).then((() => () => s(87768))))), n("@rsgweb/modules-core-feedback", "1.0.0", (() => Promise.all([s.e(3338), s.e(3190), s.e(2229), s.e(3254), s.e(1179), s.e(4213)]).then((() => () => s(94213))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(3338), s.e(2229), s.e(3254)]).then((() => () => s(30181))))), n("date-fns", "4.1.0", (() => s.e(101).then((() => () => s(10101))))), n("hammerjs", "2.0.8", (() => s.e(5409).then((() => () => s(15409))))), n("prop-types", "15.8.1", (() => s.e(6723).then((() => () => s(76723))))), n("react-focus-lock", "2.9.6", (() => Promise.all([s.e(2229), s.e(7145), s.e(2326)]).then((() => () => s(29945))))), n("react-router-dom", "6.17.0", (() => Promise.all([s.e(1604), s.e(2229)]).then((() => () => s(21604))))), n("react", "18.2.0", (() => s.e(3217).then((() => () => s(23217))))), o(66819), o(25136)), b.length ? e[t] = Promise.all(b).then((() => e[t] = 1)) : e[t] = 1
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
              62229: () => r("default", "react", [1, 18, 2, 0], (() => s.e(3217).then((() => () => s(23217))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(1604).then((() => () => s(21604))))),
              30763: () => r("default", "date-fns", [1, 4, 1, 0], (() => s.e(101).then((() => () => s(10101))))),
              81788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(5483), s.e(7600)]).then((() => () => s(87768))))),
              95966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => s(30181))),
              57145: () => r("default", "prop-types", [1, 15, 8, 1], (() => s.e(6723).then((() => () => s(76723))))),
              994: () => r("default", "@rsgweb/modules-core-feedback", [1, "workspace:^"], (() => s.e(6594).then((() => () => s(94213))))),
              4848: () => r("default", "hammerjs", [1, 2, 0, 8], (() => s.e(5409).then((() => () => s(15409))))),
              95945: () => r("default", "react-focus-lock", [1, 2, 9, 6], (() => s.e(9945).then((() => () => s(29945)))))
            },
            c = {
              1179: [30763, 81788, 95966],
              2229: [62229],
              3254: [9623],
              7145: [57145],
              7177: [994, 4848, 95945]
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
          if ("undefined" != typeof document) {
            var e = {
              129: 0
            };
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                4213: 1,
                6594: 1,
                7177: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = s.miniCssF(e),
                  f = s.p + r;
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
        })(), s(23358), s(82021)
      })())
    }
  }
}));