! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9e95e7b4-49b8-4329-bdfa-87028d0602c5", e._sentryDebugIdIdentifier = "sentry-dbid-9e95e7b4-49b8-4329-bdfa-87028d0602c5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv", "@rockstargames/tina", "@rockstargames/utils"], (function(e, a) {
  var t = {},
    r = {},
    c = {},
    f = {},
    d = {},
    o = {},
    n = {},
    b = {},
    s = {},
    i = {},
    l = {},
    u = {},
    p = {},
    h = {},
    m = {},
    g = {},
    y = {},
    v = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(p, "__esModule", {
    value: !0
  }), Object.defineProperty(h, "__esModule", {
    value: !0
  }), Object.defineProperty(m, "__esModule", {
    value: !0
  }), Object.defineProperty(g, "__esModule", {
    value: !0
  }), Object.defineProperty(y, "__esModule", {
    value: !0
  }), Object.defineProperty(v, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        o[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        n[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        b[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        s[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        i[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        l[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        u[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        p[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        h[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        m[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        g[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        y[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        v[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, k, _, w, j, P, O = {
            6539: (e, a, t) => {
              (0, t(13403).w)(1)
            },
            13403: (e, a, t) => {
              const r = t(75659).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            32160: (e, a, t) => {
              t(6539)
            },
            75659: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, c = 0, f = r.length; c !== a && f >= 0;) "/" === r[--f] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var d = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + d
              };
              Number.isInteger
            },
            4500: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8837).then((() => () => t(8837))),
                  "./components": () => Promise.all([t.e(1403), t.e(5101), t.e(6632)]).then((() => () => t(15101)))
                },
                c = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      c = t.S[r];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => c,
                init: () => f
              })
            },
            61024: e => {
              "use strict";
              e.exports = t
            },
            49787: e => {
              "use strict";
              e.exports = r
            },
            29441: e => {
              "use strict";
              e.exports = c
            },
            39247: e => {
              "use strict";
              e.exports = f
            },
            66819: e => {
              "use strict";
              e.exports = d
            },
            60404: e => {
              "use strict";
              e.exports = o
            },
            25136: e => {
              "use strict";
              e.exports = n
            },
            98674: e => {
              "use strict";
              e.exports = b
            },
            71127: e => {
              "use strict";
              e.exports = s
            },
            11955: e => {
              "use strict";
              e.exports = i
            },
            58678: e => {
              "use strict";
              e.exports = l
            },
            94316: e => {
              "use strict";
              e.exports = u
            },
            40308: e => {
              "use strict";
              e.exports = p
            },
            40041: e => {
              "use strict";
              e.exports = h
            },
            50644: e => {
              "use strict";
              e.exports = m
            },
            74251: e => {
              "use strict";
              e.exports = g
            },
            99466: e => {
              "use strict";
              e.exports = y
            },
            92969: e => {
              "use strict";
              e.exports = v
            }
          },
          x = {};

        function E(e) {
          var a = x[e];
          if (void 0 !== a) return a.exports;
          var t = x[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return O[e].call(t.exports, t, t.exports, E), t.loaded = !0, t.exports
        }
        return E.m = O, E.c = x, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, k = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          E.r(r);
          var c = {};
          e = e || [null, k({}), k([]), k(k)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = k(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, E.d(r, c), r
        }, E.d = (e, a) => {
          for (var t in a) E.o(a, t) && !E.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce(((a, t) => (E.f[t](e, a), a)), [])), E.u = e => "js/" + {
          4: "44fa002a7af3e3e1290128b529f38228",
          109: "ba06859e861d978115f3f1d599205c45",
          300: "5e3ea122b850d6b04d74442b65e06519",
          588: "21904e666df97c761d73a35111e679f8",
          621: "aca37e6437fa60a5ef8e3ba02e0a1f97",
          665: "6b6d3a10c159c396f75e85184cefe542",
          701: "f17b413c07fde61d4b5e79a0c7771c52",
          760: "132ee75e20d15e4fe0bfa4cf03148e27",
          864: "87b0d9b5789c3889c93eedf840136f6f",
          881: "e513df7b6fa3a0e22d5c10d415a08ada",
          1171: "2e529ff75da07c5af7c81c5f15168304",
          1298: "17cd1d327f17dccf7f0d22873dee7296",
          1403: "97b020b692b3bc7b293f0e1a70e0dc4d",
          1458: "8d5c2b96de1268ab0e640e0cf020b44e",
          1504: "a696cb2ccf499b272c13c5242debe06f",
          1622: "e17a66438060ad7f22094deaf46ec495",
          1626: "1a821a20005818702c8126fb54dfe381",
          1631: "0de02d23a519151c9800a409ebd3639b",
          1710: "6854ab0c8dc3cba180f934be52d2ba11",
          1721: "a95548159d333be077c9160413a3f260",
          1907: "6f71086d4e4bde146656d350b38c950a",
          1945: "c5149ad40a91b3d42a16b1de5a39eaa3",
          2017: "189e8f696d0961c67eebed31a6861f2a",
          2290: "83d3b9aaaa462c7558bbb589a55a8527",
          2370: "2d690ab1d8cf6c21ebebf6f9d0d92dfe",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2785: "05f8b186df1eec278b2293e2c889faa0",
          2808: "479ecd9112f24407524f3e799e202d26",
          2889: "0765abb956bb7ddf1eff2c8ee584b1a6",
          2939: "d1a93618fe7b54808df1f8f9b92aabd8",
          2956: "071cc84815e7474f3dfa51b4a49de4e2",
          3002: "74d0e3471af1940f80d15fab7430b8ac",
          3043: "77dd091ed6fdd7aa791faf4dac99bc19",
          3082: "73cbe1f3b1de04b4429e0448c26d084f",
          3127: "9959151592089e24d077540ebcdf12ba",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3333: "e2e7b0240006541037f3f7982cec0329",
          3380: "01b29f4a5291ebec9f3052251423c0ad",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3431: "0600d356deef5499427b9d06d9b5e6a7",
          3464: "7523a365c2a4b071768d41dc7479a605",
          3504: "6ec5fbc79237090b61772b1d29904b3e",
          3562: "e9ba0cc0a42c664c99386de78ef5d32f",
          3563: "e0b8b280b38b79ce34bf03eec119695d",
          3798: "51ac1c852500df77ca2cac6e5da99531",
          4007: "cd624b903635c6de4452fc01a6fedae1",
          4105: "6b62be5312b05bdec2b00032ab03f3c5",
          4143: "16f3ac00b46f2385bbda8e08b4e10e24",
          4150: "2b24791b634e8ea559f27ce90cc45d50",
          4233: "fd5d59ca0f6b43935612b81eb9b64656",
          4271: "e966110b8016d7b85fb4977d953e66d0",
          4410: "a04b21ece4259e5916b47e5d38169442",
          4458: "cc87c571aa416fdca5e8a1e0fdc8cea3",
          4558: "8abed9d270578b93be42af2e1874d4cc",
          4573: "7094fcfdfb9132d80fed3d520abab9fb",
          4615: "6b458220c71b40ec027ef6a1df2282db",
          4765: "2462edd5c886db2d3ebd1a0001f67445",
          4979: "715460bef45dcfd569a14dddc889f14b",
          4981: "5a102192aa2c2a90ae2de288d6ac6211",
          4996: "6736fcedbe7232f905f2a2cb1e111360",
          5033: "780bc795d0abc1df150d82da66133915",
          5101: "e912a81105bb187af1647bb5f0b486ab",
          5102: "561fae31edd8b9737688d888611bf9d3",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5238: "b65fb1c007c0e14182c5568d020788a3",
          5261: "7d8cdc0c9569cfad7c954522d0b17e04",
          5270: "5434507ceb7dca175b5ffa86d6d97cb6",
          5275: "7fa2354dcd9017d4f697a7b03b514616",
          5427: "3596f1cb52f83955f7c4a617eaf7be51",
          5476: "8bc7673899615dd44a35dd1925372197",
          5665: "343fb6d615dd57d90167b7062f86d7c4",
          5678: "9ec569cdaa55beb3fdc9d38881416eb0",
          5749: "79e542d63907850e498efd5bfc70eb57",
          5865: "381e531fc4c9d287c5b0b792869e90e3",
          6008: "1ebcfb4dd0030fd3f91a8eab31c72945",
          6044: "655e57d1806d7c56f02b99bb03673d30",
          6247: "54ca6fb78cc48ceb6095674d8093639c",
          6388: "0e811d2e61ab9b3020b89870121b6c72",
          6524: "6160795ab1da31ef34e265b3a33c0c07",
          6632: "8c896c32b9f69b3bc4142a57e4262b7f",
          6677: "6d080ba0d7b51c21630ef7a5c580b19e",
          6721: "b2367457c8528647cc83418bf766f131",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6808: "3edd88ef59c25d58a8ef772fc1d59db3",
          6855: "96f5826b605300e931f4736626f7fd72",
          6968: "18d2b14e1518e6e3406cc9f96e4e1e47",
          6996: "10625e340cd0b172b7561a05302bc9df",
          7021: "98883e0455a4035fba8c03ba878c40fe",
          7079: "3d720b9b4e649046e534f526ea9613da",
          7123: "991ddbde471848fdbfb2fe6504b0a6c3",
          7353: "d8309122409117bb24c624df9ad2eb37",
          7533: "93653808cf41bc5160ab8f8c2669f5e7",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7709: "2831890ccac8791d7de7412ad33b817b",
          7781: "b2239a4f233e61af50ab1c51f0d1c3fa",
          7919: "9d42ec735f75ead49ae8e82080f018c0",
          7960: "b0fdbfe2d98e91b9cdf04deebf14efc4",
          7977: "ec0ad7a1197ebfa73bf0e11cb13208e9",
          7989: "35eaff8cb24d27c5d431483b1cf0208f",
          8039: "5a6806a83c53fbb71de495f469db9ae8",
          8041: "ed693fc6f13d726e916cde2f405e9253",
          8049: "5e0776259c65b70dece4f01fa27078a7",
          8066: "aae8314f3367279575ad06a97e130a05",
          8290: "4106a39bbaf7f353831505bd3de9ccd8",
          8314: "b2212811aa86cb74261760d8c537316e",
          8417: "c7b66c8ef21fc7648f23182719e471d1",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8837: "767589c972b27970de3cdb35f01c2e5d",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9028: "4645cf63de5ab56280c9ba58b56de967",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9237: "24e28d4987e9254cc994d79f42580693",
          9245: "7c9dc60a95b437dc0b8aa29a13cb4523",
          9286: "20d702e3454339b12256bd0ed4395350",
          9343: "eee3c78df2dac2063c86caa02711a762",
          9468: "0f5e2b527534c38611e2b2756aa92ad8",
          9493: "3c8a6f9692fb1949f98bc05b8f7df402",
          9516: "82d88da7fa64fa18aeac281f9e9c1ba0",
          9770: "fb43798681f6d3f6f5a5956588f6f62e",
          9799: "e81fe855b840fa5980c76a054a73ffcd",
          9853: "c59d5303b86276c02ec71428c0f54b99",
          9899: "4ded5f6b83f0a885e47f7db65b4147de"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          4: "500c610d6d667146b29ca19c24f984d1",
          760: "b185b29c6ffda00db6c4e958d3656d46",
          864: "9e5bf970e9f5ef72c540b1be0a6f5873",
          1458: "2978b0bc8d17701beb211e51f44a4128",
          1710: "fccd4d78b4e75ebbe3219f7b54ddad18",
          1945: "820719fb0c364470087be00bfd38aa1f",
          2290: "02a4df3103c7911f310f9f6b4d1d6097",
          3127: "5254ad19982692a421cec525b0d8ae29",
          3333: "676daa88027a523958a98707e6a8ebf9",
          3563: "a623b44a83a6277ae34de44b562b03e9",
          4233: "c0bffa456f7bb7fc64d9af6f63b50730",
          4458: "79768936c2d5fdb169c8f3b2a9a25534",
          4558: "6cf03a8af05c26857de7db6d2901d686",
          4573: "2d2e698a2a06d9370dfd403ee2f0fc4f",
          4615: "bd1f235fa318fbbfb685016ac24c4271",
          4981: "3ee3338fc7fec3dc94dd261bc4d870eb",
          4996: "24fec0cf67d666f034a08bce3594a421",
          5101: "5bbb8896669876b863e44a7eecedbbc9",
          5102: "c25b0ca988c46fb5270069061d5cd8e1",
          5275: "8633817c011f4fcda5727805b76b4db2",
          5665: "e825c8509113328302b36928955166bb",
          6388: "147e7681e4652c3ec756cd8cc50d2d22",
          7079: "0119d1757b5b5fb21206dcf532582fcf",
          7353: "e663fb509d57dc765b285082142f87f6",
          7709: "9ee3b0bf54b5d0add905da7178c66eb5",
          7989: "765a4612fe6f22d7250d537b882d02f5",
          9237: "5e14cc975a0ef45fe66fad05a9550d48",
          9245: "147e7681e4652c3ec756cd8cc50d2d22",
          9286: "755732b1a7627ee393b5e1913166a81f",
          9468: "5a1e80c87de9a9b3dca845c949d13039"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), _ = {}, w = "@rockstargames/sites-rockstargames:", E.l = (e, a, t, r) => {
          if (_[e]) _[e].push(a);
          else {
            var c, f;
            if (void 0 !== t)
              for (var d = document.getElementsByTagName("script"), o = 0; o < d.length; o++) {
                var n = d[o];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == w + t) {
                  c = n;
                  break
                }
              }
            c || (f = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", w + t), c.src = e), _[e] = [a];
            var b = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var r = _[e];
                if (delete _[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              s = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = b.bind(null, c.onerror), c.onload = b.bind(null, c.onload), f && document.head.appendChild(c)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), j = {
          4: [26398, 28089],
          588: [90588],
          1626: [41626],
          1710: [31879],
          2405: [12405],
          2785: [94566],
          3137: [53137],
          3326: [43326],
          3416: [33416],
          4573: [542, 11716, 35662, 42158, 43426, 52757, 63902, 74401, 98010],
          5101: [40207, 42756, 58407, 70396],
          5202: [35202],
          5678: [78722],
          6766: [36766],
          7538: [47538],
          8417: [78417],
          8778: [78778],
          8987: [88987],
          9147: [29147],
          9237: [28300]
        }, P = {
          542: ["default", "./GlobalNavigationWrapper", 39247],
          11716: ["default", "./graph/policies", 60404],
          12405: ["default", "./index", 58678],
          26398: ["default", "./helpers", 99466],
          28089: ["default", "./helpers/uploads", 99466],
          28300: ["default", "./operations/fragments/video2-fields.graphql", 61024],
          29147: ["default", "./index", 50644],
          31879: ["default", "./index", 25136],
          33416: ["default", "./index", 40041],
          35202: ["default", "./site-routes/Bully", 40308],
          35662: ["default", "./gtm", 92969],
          36766: ["default", "./index", 11955],
          40207: ["default", "./index", 60404],
          41626: ["default", "./lazy", 29441],
          42158: ["default", "./providers", 92969],
          42756: ["default", "./index", 92969],
          43326: ["default", "./destination", 71127],
          43426: ["default", "./index", 39247],
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          52757: ["default", "./providers", 60404],
          53137: ["default", "./index", 98674],
          58407: ["default", "./index", 61024],
          63902: ["default", "./index", 49787],
          70396: ["default", "./hooks", 92969],
          74401: ["default", "./index", 99466],
          78417: ["default", "./operations/fragments/paging.graphql", 61024],
          78722: ["default", "./NewswireArticle", 66819],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          90588: ["default", "./operations/fragments/newswire-post.graphql", 61024],
          94566: ["default", "./messages", 49787],
          98010: ["default", "./onetrust", 92969]
        }, E.f.remotes = (e, a) => {
          E.o(j, e) && j[e].forEach((e => {
            var t = E.R;
            t || (t = []);
            var r = P[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), E.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, d, o, n) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return o(b, d, n);
                    var s = b.then((e => o(e, d)), c);
                    if (!n) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                d = (e, a, c) => f(a.get, r[1], t, 0, o, c),
                o = a => {
                  r.p = 1, E.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(E, r[2], 0, 0, ((e, a, t) => e ? f(E.I, r[0], 0, e, d, t) : c()), 1)
            }
          }))
        }, (() => {
          E.S = {};
          var e = {},
            a = {};
          E.I = (t, r) => {
            r || (r = []);
            var c = a[t];
            if (c || (c = a[t] = {}), !(r.indexOf(c) >= 0)) {
              if (r.push(c), e[t]) return e[t];
              E.o(E.S, t) || (E.S[t] = {});
              var f = E.S[t],
                d = "@rockstargames/sites-rockstargames",
                o = (e, a, t, r) => {
                  var c = f[e] = f[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (c[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = E(e);
                    if (!c) return;
                    var f = e => e && e.init && e.init(E.S[t], r);
                    if (c.then) return b.push(c.then(f, a));
                    var d = f(c);
                    if (d && d.then) return b.push(d.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === t && (o("@foundry/react", "1.19.0", (() => Promise.all([E.e(4765), E.e(4271), E.e(6721), E.e(4458), E.e(1403), E.e(9493), E.e(3563)]).then((() => () => E(54458))))), o("@foundry/react", "1.19.0", (() => Promise.all([E.e(4765), E.e(4271), E.e(6721), E.e(7353), E.e(4615), E.e(1403), E.e(9493)]).then((() => () => E(7353))))), o("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([E.e(4765), E.e(8066), E.e(1403), E.e(4143)]).then((() => () => E(24143))))), o("@rockstargames/modules-core-screenshot-viewer", "1.1.2", (() => Promise.all([E.e(1403), E.e(4410), E.e(6388)]).then((() => () => E(54007))))), o("@rockstargames/router", "1.0.0", (() => Promise.all([E.e(1403), E.e(4410), E.e(3002)]).then((() => () => E(73002))))), o("dompurify", "2.4.7", (() => E.e(2956).then((() => () => E(72956))))), o("framer-motion", "7.10.3", (() => Promise.all([E.e(5749), E.e(1403)]).then((() => () => E(5749))))), o("history", "4.10.1", (() => E.e(5270).then((() => () => E(2889))))), o("prop-types", "15.8.1", (() => E.e(7977).then((() => () => E(37977))))), o("react-dom", "18.2.0", (() => Promise.all([E.e(7533), E.e(1403)]).then((() => () => E(47533))))), o("react-focus-lock", "2.9.6", (() => Promise.all([E.e(109), E.e(1403), E.e(9516), E.e(6677)]).then((() => () => E(80109))))), o("react-intersection-observer", "9.10.3", (() => Promise.all([E.e(1403), E.e(300)]).then((() => () => E(300))))), o("react-intersection-observer", "9.13.1", (() => Promise.all([E.e(1403), E.e(701)]).then((() => () => E(40701))))), o("react-jsx-parser", "1.29.0", (() => Promise.all([E.e(1403), E.e(5238)]).then((() => () => E(85238))))), o("react-router-dom", "6.17.0", (() => Promise.all([E.e(5261), E.e(6008), E.e(1403), E.e(9899)]).then((() => () => E(76008))))), o("react-router-dom", "6.17.0", (() => Promise.all([E.e(5261), E.e(1171), E.e(1403), E.e(9899)]).then((() => () => E(31171))))), o("react-router-dom", "6.17.0", (() => Promise.all([E.e(5261), E.e(5033), E.e(1403), E.e(665)]).then((() => () => E(75033))))), o("react-router", "6.17.0", (() => Promise.all([E.e(5261), E.e(4105), E.e(1403)]).then((() => () => E(64105))))), o("react-router", "6.17.0", (() => Promise.all([E.e(5261), E.e(3043), E.e(1403)]).then((() => () => E(83043))))), o("react", "18.2.0", (() => E.e(3380).then((() => () => E(23380))))), n(61024), n(60404), n(92969), n(49787), n(39247), n(99466), n(71127), n(50644), n(40308), n(98674), n(40041), n(29441), n(11955), n(58678), n(94316), n(66819), n(74251), n(25136)), b.length ? e[t] = Promise.all(b).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
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
                var c = t[0],
                  f = c < 0;
                f && (c = -c - 1);
                for (var d = 0, o = 1, n = !0;; o++, d++) {
                  var b, s, i = o < t.length ? (typeof t[o])[0] : "";
                  if (d >= r.length || "o" == (s = (typeof(b = r[d]))[0])) return !n || ("u" == i ? o > c && !f : "" == i != f);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= c) {
                        if (b != t[o]) return !1
                      } else {
                        if (f ? b > t[o] : b < t[o]) return !1;
                        b != t[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= c) return !1;
                    n = !1, o--
                  } else {
                    if (o <= c || s < i != f) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < t.length; d++) {
                var p = t[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, c) => {
              var f = t[r];
              return (r = Object.keys(f).reduce(((t, r) => !a(c, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var c = a[r],
                    f = (typeof c)[0];
                  if (r >= t.length) return "u" == f;
                  var d = t[r],
                    o = (typeof d)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && c != d) return c < d;
                  r++
                }
              })(t, r) ? t : r), 0)) && f[r]
            },
            r = (e => function(a, t, r, c) {
              var f = E.I(a);
              return f && f.then ? f.then(e.bind(e, a, E.S[a], t, r, c)) : e(a, E.S[a], t, r, c)
            })(((e, a, r, c, f) => {
              var d = a && E.o(a, r) && t(a, r, c);
              return d ? (e => (e.loaded = 1, e.get()))(d) : f()
            })),
            c = {},
            f = {
              71403: () => r("default", "react", [1, 18, 2, 0], (() => E.e(3380).then((() => () => E(23380))))),
              25076: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(5261), E.e(1171), E.e(9899)]).then((() => () => E(31171))))),
              89779: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(5261), E.e(6008), E.e(9899)]).then((() => () => E(76008))))),
              96717: () => r("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([E.e(4765), E.e(8066), E.e(6524)]).then((() => () => E(24143))))),
              79493: () => r("default", "react-dom", [1, 18, 2, 0], (() => E.e(7533).then((() => () => E(47533))))),
              14410: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([E.e(5261), E.e(5033), E.e(665)]).then((() => () => E(75033))))),
              39516: () => r("default", "prop-types", [1, 15, 8, 1], (() => E.e(7977).then((() => () => E(37977))))),
              99899: () => r("default", "react-router", [1, 6, 11, 2], (() => E.e(4105).then((() => () => E(64105))))),
              80665: () => r("default", "react-router", [1, 6, 11, 2], (() => E.e(3043).then((() => () => E(83043))))),
              53181: () => r("default", "framer-motion", [1, 7, 5, 1], (() => E.e(5749).then((() => () => E(5749))))),
              56864: () => r("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([E.e(109), E.e(9516)]).then((() => () => E(80109))))),
              75301: () => r("default", "@rockstargames/router", [1, "workspace:*"], (() => Promise.all([E.e(4410), E.e(621)]).then((() => () => E(73002))))),
              90619: () => r("default", "history", [1, 5, 3, 0], (() => E.e(2889).then((() => () => E(2889))))),
              27021: () => r("default", "react-intersection-observer", [1, 9, 13, 1], (() => E.e(7919).then((() => () => E(300))))),
              99096: () => r("default", "@foundry/react", [1, 1, 14, 2], (() => Promise.all([E.e(4765), E.e(4271), E.e(4458)]).then((() => () => E(54458))))),
              85865: () => r("default", "react-jsx-parser", [1, "workspace:*"], (() => E.e(5238).then((() => () => E(85238))))),
              57162: () => r("default", "react-intersection-observer", [1, 9, 13, 1], (() => E.e(3082).then((() => () => E(40701))))),
              93697: () => r("default", "@foundry/react", [1, 1, 14, 2], (() => Promise.all([E.e(4765), E.e(4271), E.e(7353)]).then((() => () => E(7353))))),
              61631: () => r("default", "dompurify", [1, 2, 4, 1], (() => E.e(2956).then((() => () => E(72956))))),
              39343: () => r("default", "@rockstargames/modules-core-screenshot-viewer", [1, "workspace:*"], (() => Promise.all([E.e(4410), E.e(9245)]).then((() => () => E(54007)))))
            },
            d = {
              665: [80665],
              1403: [71403],
              1631: [61631],
              2785: [57162, 93697],
              4410: [14410],
              4573: [53181, 56864, 75301, 90619],
              5101: [25076, 89779, 96717],
              5865: [85865],
              7021: [27021],
              9286: [99096],
              9343: [39343],
              9493: [79493],
              9516: [39516],
              9899: [99899]
            },
            o = {};
          E.f.consumes = (e, a) => {
            E.o(d, e) && d[e].forEach((e => {
              if (E.o(c, e)) return a.push(c[e]);
              if (!o[e]) {
                var t = a => {
                  c[e] = 0, E.m[e] = t => {
                    delete E.c[e], t.exports = a()
                  }
                };
                o[e] = !0;
                var r = a => {
                  delete c[e], E.m[e] = t => {
                    throw delete E.c[e], a
                  }
                };
                try {
                  var d = f[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1149: 0
            };
            E.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                4: 1,
                760: 1,
                864: 1,
                1458: 1,
                1710: 1,
                1945: 1,
                2290: 1,
                3127: 1,
                3333: 1,
                3563: 1,
                4233: 1,
                4458: 1,
                4558: 1,
                4573: 1,
                4615: 1,
                4981: 1,
                4996: 1,
                5101: 1,
                5102: 1,
                5275: 1,
                5665: 1,
                6388: 1,
                7079: 1,
                7353: 1,
                7709: 1,
                7989: 1,
                9237: 1,
                9245: 1,
                9286: 1,
                9468: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = E.miniCssF(e),
                  c = E.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var c = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (c === e || c === a)) return d
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var d;
                      if ((c = (d = f[r]).getAttribute("data-href")) === e || c === a) return d
                    }
                  })(r, c)) return a();
                ((e, a, t, r, c) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var d = t && ("load" === t.type ? "missing" : t.type),
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = d, n.request = o, f.parentNode && f.parentNode.removeChild(f), c(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, c, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            1149: 0
          };
          E.f.j = (a, t) => {
            var r = E.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1(403|458|626|631)|2(290|405|785)|3(137|326|416|563)|5(202|865|88)|8(417|778|987)|9(147|343|493|516|899)|4410|4558|665|6766|7021|7538)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((t, c) => r = e[a] = [t, c]));
              t.push(r[2] = c);
              var f = E.p + E.u(a),
                d = new Error;
              E.l(f, (t => {
                if (E.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var c = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + c + ": " + f + ")", d.name = "ChunkLoadError", d.type = c, d.request = f, r[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, c, f = t[0],
                d = t[1],
                o = t[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in d) E.o(d, r) && (E.m[r] = d[r]);
                o && o(E)
              }
              for (a && a(t); n < f.length; n++) c = f[n], E.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            t = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), E.nc = void 0, E(32160), E(4500)
      })())
    }
  }
}));