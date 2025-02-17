! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "685c1918-d4ae-4914-ac6b-c67e1f4acd7e", e._sentryDebugIdIdentifier = "sentry-dbid-685c1918-d4ae-4914-ac6b-c67e1f4acd7e")
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
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var c = {};
  return Object.defineProperty(c, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, d, t, r, b, o = {
            49293: (e, a, c) => {
              (0, c(31789).w)(1)
            },
            31789: (e, a, c) => {
              const f = c(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = f(c.y.meta.url, e)
              }
            },
            23358: (e, a, c) => {
              c(49293)
            },
            90569: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var f = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, d = 0, t = f.length; d !== a && t >= 0;) "/" === f[--t] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var r = f.slice(0, t + 1);
                return c.protocol + "//" + c.host + r
              };
              Number.isInteger
            },
            58639: (e, a, c) => {
              "use strict";
              var f = {
                  "./bootstrap": () => Promise.all([c.e(4282), c.e(8432), c.e(7512), c.e(7082), c.e(3352), c.e(9491), c.e(2229), c.e(9623), c.e(5966), c.e(3058), c.e(4281), c.e(3001), c.e(2440), c.e(9514), c.e(2738), c.e(7145), c.e(1005), c.e(3298)]).then((() => () => c(13298))),
                  "./index": () => Promise.all([c.e(4282), c.e(8432), c.e(7512), c.e(7082), c.e(3352), c.e(2229), c.e(9623), c.e(5966), c.e(3058), c.e(4281), c.e(3001), c.e(2440), c.e(9514), c.e(2738), c.e(7145), c.e(1005), c.e(8312)]).then((() => () => c(58312))),
                  "./site-routes/Bully": () => Promise.all([c.e(4282), c.e(8432), c.e(7512), c.e(7082), c.e(3352), c.e(2229), c.e(9623), c.e(5966), c.e(3058), c.e(4281), c.e(3001), c.e(2440), c.e(9514), c.e(2738), c.e(7145), c.e(1005), c.e(7975), c.e(6208)]).then((() => () => c(96208))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([c.e(4282), c.e(8432), c.e(7512), c.e(7082), c.e(3352), c.e(2229), c.e(9623), c.e(5966), c.e(3058), c.e(4281), c.e(3001), c.e(2440), c.e(9514), c.e(2738), c.e(7145), c.e(1005), c.e(7975), c.e(6128)]).then((() => () => c(16128))),
                  "./tina": () => Promise.all([c.e(4282), c.e(8432), c.e(7512), c.e(7082), c.e(3352), c.e(2229), c.e(9623), c.e(5966), c.e(3058), c.e(4281), c.e(3001), c.e(2440), c.e(9514), c.e(2738), c.e(7145), c.e(1005), c.e(7975)]).then((() => () => c(17975)))
                },
                d = (e, a) => (c.R = a, a = c.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                t = (e, a) => {
                  if (c.S) {
                    var f = "default",
                      d = c.S[f];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[f] = e, c.I(f, a)
                  }
                };
              c.d(a, {
                get: () => d,
                init: () => t
              })
            },
            25136: e => {
              "use strict";
              e.exports = c
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var c = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(c.exports, c, c.exports, i), c.loaded = !0, c.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var t = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var r = 2 & c && a;
            "object" == typeof r && !~e.indexOf(r); r = f(r)) Object.getOwnPropertyNames(r).forEach((e => t[e] = () => a[e]));
          return t.default = () => a, i.d(d, t), d
        }, i.d = (e, a) => {
          for (var c in a) i.o(a, c) && !i.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, c) => (i.f[c](e, a), a)), [])), i.u = e => "js/" + {
          131: "90953759e5ef15369e65538649cef5e4",
          278: "d8c6e1d81ea3a0fdfa5db3390ba1ee34",
          299: "1ea76a00bdc6324376113c584d4c0e36",
          314: "5edfb9d82317be0bc3a3865c600ccd16",
          662: "62a76c8b6d0677dfd4a4f7780b6cd46d",
          790: "47d25db52067f6e9685d530de366c8aa",
          824: "b23f5cac461a1f4d0df17162623b76c6",
          907: "ee9f4362c795629141dd45344748dbf0",
          1005: "a926767b84ca0c22103e47af45e8f9bc",
          1029: "eb17474e7e5a287bacca85998b38d6c3",
          1054: "4974c8219eafe5e10c7b412216e9a30e",
          1095: "93954d304da9078f8eacc00edd757d27",
          1242: "5748b4027621286ed44eb0f5d8dd6106",
          1604: "29a78f867d474eef739775156b8a7fd9",
          1613: "7434cf3cf4150a72b0ad4ea1e8cece8d",
          1822: "811f46c9d47736bb78ff80109b182a3d",
          1868: "37d7e94d2913d9570ccd6e6f604c0e5b",
          2156: "5e7bd0da54b185d420d09234660db440",
          2171: "ce75e40fcb3fbfcd9542fa5c8e004ce2",
          2221: "3686612b2894bc27d4d5392c33f74872",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "8a8282b8e32971cc87f0b9f6c73cd616",
          2283: "287cc0f631ff43ecd4a4bb8ce4895e48",
          2342: "36b1594ab14ce62b575aec79c72197ab",
          2347: "79dfedfc1cdb59b39e3686a968bec0b0",
          2365: "baa72a55f694af1da548424182d1fcae",
          2398: "3318d0ef511bcce7db4452e49203bb65",
          2440: "c30750136d805475662f793509d9f4b5",
          2457: "294910ea37ced10dfeafa2052b9ad8b6",
          2466: "86006be9eb0678f8c14ee074c0c53639",
          2642: "6b946ed4a3a9b981119c0ac7c1fc73d2",
          2678: "1a5746010369bbf5b2e59b3571042f50",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2864: "6fdcb1326ab366cabe2a7554a89ad2a0",
          2907: "90f231ae86419a37365c00f6c48eed09",
          3001: "b9eddc280015faa79bf91abb9b18f2b4",
          3034: "2df1589ad0adb1f813619ffe3faf4081",
          3058: "bc35223c11c4581279bcd477c94c3064",
          3197: "edcadc3e3c8f967dc2d40185faa8abdc",
          3217: "5dae92f7ea79633aee957f60e06dc3a2",
          3298: "1a2656e63bc12df2911f0339018dcfc6",
          3343: "ee3b9b6b7664f7f02ca509d547e520cc",
          3352: "b333b4ea8c56844e448a18d3a71a5fb6",
          3370: "f31d03eaaa49ea54e02dc7a0684f02d1",
          3475: "8cba2da34069db5df75684ec0d5d95dd",
          3486: "1e711bcb44c1759854a08f5bf0993cd5",
          3533: "a14f57eae069750788a58e8f9c331f67",
          3697: "1759b0bc3d8df64627c6da9dc4e97d9a",
          3885: "b4f44567e435471300f8eda3c4981f0d",
          3941: "be8bafbf93203f0a88314e46f3b26004",
          4011: "6faf166a78a28c77c373890c794e716a",
          4275: "1453393aeb70fe9f31422500330660de",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4282: "3a25aae9bb75130d833d6d8ea6947f01",
          4528: "3a1bbded1a2ec8c6629559f911db62da",
          4561: "bd304254b585149caf338cc354c5f6e9",
          4621: "50cd14c6bd42d17aca0b9f48935aa9e0",
          4700: "a72ff975d5885b18d6936ccf07fb8e4d",
          4710: "a64979ff12241693b43f4e85d32d44f9",
          4731: "a1d57364fbf14c3e208887530179da9c",
          4799: "b016f0968159721e59d90829fd61a920",
          4838: "228327bb6ad0a182e5106a5bd5f0e2ea",
          4851: "982d6a2f0aa3998fb016b76e8509448e",
          4861: "ada37866453edc87ccecc2aef289f19d",
          4913: "d7c3df274204383242ec407c1a0e1aec",
          5018: "441e979e45013215022613a650a46eae",
          5219: "3843ec55fbf64cb8c6444b62b5588f40",
          5233: "221bbc7eefd6077ab21cf99a45c49d0f",
          5259: "69a28aaea002b11e841d4c035f84c157",
          5271: "7ed1569381d0187dc24f4920d7ae5a9a",
          5483: "32c9daad07502cd723d83f5809e1422a",
          5530: "fd042e593ff87068b08144ddf26d9805",
          5563: "6bb2ce98a7d38f05d5b71e05c98f0558",
          5639: "c9519d449fa04e90570a0ad99e8bb478",
          5663: "b7d29e44bcc309d615cab1966d3b97a4",
          5742: "a3aedcd68a86710d1f07c37b0a97c4fd",
          5830: "7a6100649d38fc774c9e67b2385bed11",
          5832: "29aef0326e34a79f9d56d4aa20a1b4d5",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6091: "3d5b0fcbc63658e3a2a008872b156881",
          6128: "c7b3760f350b76a7957241b1736dd8c8",
          6208: "24b034cd7ea6143f6c098320b754edf9",
          6267: "1935bd9318d2a32b72d4f0b4b6a09f2c",
          6280: "d896e96460e981fcf8831d4c3d95ff3b",
          6285: "bb07d72fcca671ac3c2a921abbd02c99",
          6286: "e357f6101a4d7c03df2299f786507dc3",
          6361: "647241af33d966b8b40d670b16c16617",
          6629: "32392a12312e5ac5a0bdb23bbb06233f",
          6664: "3bc2772026239d6bbff15a269e8ce777",
          6723: "1c7dc7a259bc5eea1a46db5df1d44e4e",
          6832: "7d82e9efef026a00bf934516891fa137",
          6879: "5ddcd9e2e80c8b46499723a198dfd9f2",
          6891: "8e3f9a066c44c10f43367767283bbaaf",
          6942: "d3666431fa7b982b9f2d5fb4c44bb2ef",
          6997: "e28a4d5d506b67a717f9214681ac61c2",
          7010: "6628b652d7e4aa768e8a7a0241b7c6a1",
          7073: "722bd50c7e07a3f8bf9466a02c2a5d2d",
          7082: "b3e5978bdcd55f06f97a8b9f198e064d",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7214: "c17cbfda53cebb9eaeeb806f3139393b",
          7224: "78c00aa0d111bbe9b12670969da39eee",
          7360: "dfc9cb6bc9596a9a869c0ada4d84dbe4",
          7436: "baa59df0b11805df69a744928c0e3386",
          7452: "c19b7079cd597535a78e3615106fd27a",
          7453: "21df7b9768d8c2bff204210e4cab3a35",
          7512: "030852c5057c9c48f33760a1ee73525c",
          7600: "47dc46c553a3b809a132a36608e99f4f",
          7652: "1569fea596c93c3845a9f3c4f89142d1",
          7926: "f179752e0af78e6c0e7dd5b3299174a4",
          7944: "a4797671823ad6fe1ac15235a1ce04f8",
          7970: "04abe8daccf3b1d680982737f687f68a",
          7975: "7285105c595baf8fe781fcdc5e71628e",
          8272: "d2fc35ed63b2e19390234c9ccf41e3d5",
          8284: "d70caee71db175e52c9f1a0883e6f954",
          8312: "1a87c729a1ad28e2c24f476ac1b1533b",
          8384: "bc52ff67f0d8397194a1d1800aa4e470",
          8391: "b959b5dc06167df0a66df6cd0b9374f9",
          8431: "8fdc8828fe397bcdaa67448719047507",
          8432: "f2c253c6e3816afaed14c2e1c85bb21c",
          8688: "1a0f2fe9140a35fa2b8d255002b81b13",
          8755: "3865bb630f0baf4493bd58413a78bb38",
          8843: "392f725854e8d678ec52da0a5178348b",
          8880: "65d001766a10074cdd0c16add9cfbc0c",
          8970: "a71dad00c42de78c3635836660d35f2e",
          9022: "c2903e74db874e268f6edc13712c62f6",
          9028: "dedb82fdf610a012a9cb52f756b6b3d0",
          9107: "9b309ab8d03f7409490e56948f598e11",
          9126: "122c3f9fd34e07db9b530de258a23787",
          9377: "52659077d064a49930edd3b7e67181d7",
          9491: "df7affa28332bcb92ce4dde32641eac0",
          9514: "e36b09e3377cc20f764134fdb9d977a3",
          9550: "1cdc6fe361dcd29dc8707c7c776dd407",
          9615: "06c37a0df64ad3f715b808c6d2a661ce",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9931: "b800e2f1143774a3d2ca34ad75b6e423",
          9936: "dfaddc10c527dd2798696ae7275df4e0",
          9940: "4b217fe0ec689c57b70d6b6b1d628a72",
          9990: "5927e1ae9d8ced62b532fbc585a5477a"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1005: "e09989de768ecc2eda1c94ae12fc1545",
          2283: "3405c066acfb7fc31a1afb5aed7efd97",
          3298: "2e2c2d79838c3959e62808fd28ef0e6c",
          3352: "5f17cb609b34d692162fd297f089a603",
          5563: "82b8e41eb90eae7db3adfb9fff54d045",
          6128: "52e55b769351b6e3f1602fe5d2baacd1",
          6208: "52e55b769351b6e3f1602fe5d2baacd1",
          7214: "acd527f8b8605a84d960f7f210a58825",
          7944: "82b8e41eb90eae7db3adfb9fff54d045",
          8384: "6e70c6eb034e182b48671d7b4694e780"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/sites-legacy:", i.l = (e, a, c, f) => {
          if (d[e]) d[e].push(a);
          else {
            var r, b;
            if (void 0 !== c)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == t + c) {
                  r = s;
                  break
                }
              }
            r || (b = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, i.nc && r.setAttribute("nonce", i.nc), r.setAttribute("data-webpack", t + c), r.src = e), d[e] = [a];
            var l = (a, c) => {
                r.onerror = r.onload = null, clearTimeout(u);
                var f = d[e];
                if (delete d[e], r.parentNode && r.parentNode.removeChild(r), f && f.forEach((e => e(c))), a) return a(c)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: r
              }), 12e4);
            r.onerror = l.bind(null, r.onerror), r.onload = l.bind(null, r.onload), b && document.head.appendChild(r)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {
          1005: [31879],
          7975: [17523]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(r, e) && r[e].forEach((e => {
            var c = i.R;
            c || (c = []);
            var f = b[e];
            if (!(c.indexOf(f) >= 0)) {
              if (c.push(f), f.p) return a.push(f.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), i.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                t = (e, c, t, r, b, o) => {
                  try {
                    var n = e(c, t);
                    if (!n || !n.then) return b(n, r, o);
                    var i = n.then((e => b(e, r)), d);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                r = (e, a, d) => t(a.get, f[1], c, 0, o, d),
                o = a => {
                  f.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(i, f[2], 0, 0, ((e, a, c) => e ? t(i.I, f[0], 0, e, r, c) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (c, f) => {
            f || (f = []);
            var d = a[c];
            if (d || (d = a[c] = {}), !(f.indexOf(d) >= 0)) {
              if (f.push(d), e[c]) return e[c];
              i.o(i.S, c) || (i.S[c] = {});
              var t = i.S[c],
                r = "@rockstargames/sites-legacy",
                b = (e, a, c, f) => {
                  var d = t[e] = t[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : r > b.from)) && (d[a] = {
                    get: c,
                    from: r,
                    eager: !!f
                  })
                },
                o = [];
              return "default" === c && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(5483), i.e(2229), i.e(5219)]).then((() => () => i(87768))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(9514), i.e(8384)]).then((() => () => i(48122))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(7082), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(2283), i.e(4561)]).then((() => () => i(14561))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(4282), i.e(8432), i.e(1095), i.e(2229), i.e(9623), i.e(5966), i.e(3058), i.e(7652)]).then((() => () => i(97652))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(4282), i.e(7512), i.e(2229), i.e(5966), i.e(4281), i.e(3001), i.e(5563)]).then((() => () => i(55834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(4282), i.e(8432), i.e(2229), i.e(9623), i.e(3058), i.e(1029)]).then((() => () => i(93514))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(6091), i.e(2229), i.e(7145)]).then((() => () => i(96091))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2907), i.e(2229)]).then((() => () => i(12907))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(8688), i.e(2229)]).then((() => () => i(78688))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9931), i.e(2229)]).then((() => () => i(69931))))), b("graphql", "16.10.0", (() => i.e(6286).then((() => () => i(26286))))), b("prop-types", "15.8.1", (() => i.e(6723).then((() => () => i(76723))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(7360), i.e(2229)]).then((() => () => i(57360))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(2457)]).then((() => () => i(42457))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(21604))))), b("react", "18.2.0", (() => i.e(3217).then((() => () => i(23217))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var d = i(25136);
                  if (!d) return;
                  var t = e => e && e.init && e.init(i.S[c], f);
                  if (d.then) return o.push(d.then(t, a));
                  var r = t(d);
                  if (r && r.then) return o.push(r.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[c] = Promise.all(o).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var f = c.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = c[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = c[1] ? a(c[1]) : [];
              return c[2] && (f.length++, f.push.apply(f, a(c[2]))), c[3] && (f.push([]), f.push.apply(f, a(c[3]))), f
            },
            a = (c, f) => {
              if (0 in c) {
                f = e(f);
                var d = c[0],
                  t = d < 0;
                t && (d = -d - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, i, s = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= f.length || "o" == (i = (typeof(n = f[r]))[0])) return !o || ("u" == s ? b > d && !t : "" == s != t);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= d) {
                        if (n != c[b]) return !1
                      } else {
                        if (t ? n > c[b] : n < c[b]) return !1;
                        n != c[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (t || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || i < s != t) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < c.length; r++) {
                var h = c[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, f) : !u())
              }
              return !!u()
            },
            c = (c, f, d) => {
              var t = c[f];
              return (f = Object.keys(t).reduce(((c, f) => !a(d, f) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var f = 0;;) {
                  if (f >= a.length) return f < c.length && "u" != (typeof c[f])[0];
                  var d = a[f],
                    t = (typeof d)[0];
                  if (f >= c.length) return "u" == t;
                  var r = c[f],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && d != r) return d < r;
                  f++
                }
              })(c, f) ? c : f), 0)) && t[f]
            },
            f = (e => function(a, c, f, d) {
              var t = i.I(a);
              return t && t.then ? t.then(e.bind(e, a, i.S[a], c, f, d)) : e(a, i.S[a], c, f, d)
            })(((e, a, f, d, t) => {
              var r = a && i.o(a, f) && c(a, f, d);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            d = {},
            t = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(23217))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(21604))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(8432), i.e(9623), i.e(3058)]).then((() => () => i(93514))))),
              16565: () => f("default", "graphql", [1, 16, 9, 0], (() => i.e(6286).then((() => () => i(26286))))),
              2918: () => f("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(8432), i.e(1095), i.e(9623), i.e(5966), i.e(3058), i.e(5271)]).then((() => () => i(97652))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(5483), i.e(7600)]).then((() => () => i(87768))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => i.e(7360).then((() => () => i(57360))))),
              92440: () => f("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(4282), i.e(7512), i.e(5966), i.e(3001), i.e(7944)]).then((() => () => i(55834))))),
              90660: () => f("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9931).then((() => () => i(69931))))),
              22738: () => f("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(4838).then((() => () => i(42457))))),
              57145: () => f("default", "prop-types", [1, 15, 8, 1], (() => i.e(6723).then((() => () => i(76723))))),
              2765: () => f("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(6091).then((() => () => i(96091))))),
              82849: () => f("default", "framer-motion", [1, 10, 12, 18], (() => i.e(8688).then((() => () => i(78688))))),
              84590: () => f("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(7214).then((() => () => i(48122))))),
              87330: () => f("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => Promise.all([i.e(2283), i.e(6942)]).then((() => () => i(14561))))),
              87052: () => f("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2907).then((() => () => i(12907)))))
            },
            r = {
              1005: [2765, 82849, 84590, 87330],
              2229: [62229],
              2283: [87052],
              2440: [92440],
              2738: [22738],
              3001: [44853],
              3058: [16565],
              4281: [2918, 81788],
              5966: [95966],
              7145: [57145],
              9514: [90660],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(r, e) && r[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var c = a => {
                  d[e] = 0, i.m[e] = c => {
                    delete i.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete d[e], i.m[e] = c => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(d[e] = r.then(c).catch(f)) : c(r)
                } catch (e) {
                  f(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, c) => {
              e[a] ? c.push(e[a]) : 0 !== e[a] && {
                1005: 1,
                2283: 1,
                3298: 1,
                3352: 1,
                5563: 1,
                6128: 1,
                6208: 1,
                7214: 1,
                7944: 1,
                8384: 1
              } [a] && c.push(e[a] = (e => new Promise(((a, c) => {
                var f = i.miniCssF(e),
                  d = i.p + f;
                if (((e, a) => {
                    for (var c = document.getElementsByTagName("link"), f = 0; f < c.length; f++) {
                      var d = (r = c[f]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (d === e || d === a)) return r
                    }
                    var t = document.getElementsByTagName("style");
                    for (f = 0; f < t.length; f++) {
                      var r;
                      if ((d = (r = t[f]).getAttribute("data-href")) === e || d === a) return r
                    }
                  })(f, d)) return a();
                ((e, a, c, f, d) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", t.onerror = t.onload = c => {
                    if (t.onerror = t.onload = null, "load" === c.type) f();
                    else {
                      var r = c && ("load" === c.type ? "missing" : c.type),
                        b = c && c.target && c.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = b, t.parentNode && t.parentNode.removeChild(t), d(o)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, d, 0, a, c)
              })))(a).then((() => {
                e[a] = 0
              }), (c => {
                throw delete e[a], c
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, c) => {
            var f = i.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) c.push(f[2]);
              else if (/^(2(229|283|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((c, d) => f = e[a] = [c, d]));
              c.push(f[2] = d);
              var t = i.p + i.u(a),
                r = new Error;
              i.l(t, (c => {
                if (i.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var d = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + d + ": " + t + ")", r.name = "ChunkLoadError", r.type = d, r.request = t, f[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var f, d, t = c[0],
                r = c[1],
                b = c[2],
                o = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (f in r) i.o(r, f) && (i.m[f] = r[f]);
                b && b(i)
              }
              for (a && a(c); o < t.length; o++) d = t[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            c = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), i.nc = void 0, i(23358), i(58639)
      })())
    }
  }
}));