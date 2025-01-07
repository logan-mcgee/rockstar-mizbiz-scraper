! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "87d1c95a-179b-4c94-96e7-6f595fab85e7", e._sentryDebugIdIdentifier = "sentry-dbid-87d1c95a-179b-4c94-96e7-6f595fab85e7")
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
          4: "198bbe1c567311bb3c905a69b1aec8bb",
          109: "3e60e044118e9db5bd477331c33d035a",
          300: "eae9bc19dae8c6aef623ae845c3bbdcc",
          588: "21904e666df97c761d73a35111e679f8",
          621: "e7c635d1521475177d250e435224a4e8",
          665: "6b6d3a10c159c396f75e85184cefe542",
          701: "846a7e5610d2ef90e91a0a7e739e141f",
          760: "7d1db1ea51998fb3c8a6c58de0bc6d31",
          864: "7f853db232709106785fc13fe703286b",
          881: "1b32b3c58a9a6412c9f6f57c6dbc5169",
          1171: "33f997b919c6e1eda784a04d00af5238",
          1298: "ab88e4c595a91a6d7d770617b4e2bc65",
          1403: "97b020b692b3bc7b293f0e1a70e0dc4d",
          1458: "8d5c2b96de1268ab0e640e0cf020b44e",
          1504: "17ad8a5fac7209fd72a279316276d711",
          1622: "14395694bd9851e104e36c8149a35f4b",
          1626: "1a821a20005818702c8126fb54dfe381",
          1631: "0de02d23a519151c9800a409ebd3639b",
          1710: "dbbbc52bc3b579dd08eb88fef1ac34a0",
          1721: "00487ad7c0fd774c4307beec1fef7406",
          1907: "209d8248a87807bce824027b7c1baa68",
          1945: "fb59901def4ad0b5aef29b788dbc982c",
          2017: "142205bfab4d565747da0e17e2c56b1f",
          2290: "83d3b9aaaa462c7558bbb589a55a8527",
          2370: "b7227605b98916f6066fafb146e9449b",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2785: "05f8b186df1eec278b2293e2c889faa0",
          2808: "b27277094e2b8a38ad9c673bfbe660e5",
          2889: "2555cdd0110e6a3db480780625cb5e68",
          2939: "68ff6f93ca2108e2b4f527e128af1a15",
          2956: "e8a30caa4dc9bb90a4f322b93654d31b",
          3002: "86373e6993bb3433c91cdf18ff284d1e",
          3043: "4a04c364b4c26da027679dd4aa961981",
          3082: "3d123c3b1ff5a6a0f0c9d8e0a9393c52",
          3127: "7ec6e358621807d9d3082ff178da192f",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3333: "95b3827f9668124f7a144308367a4b20",
          3380: "57444d5420f991f96d869089c9eeebf7",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3431: "3eb5fa82f6f0fb962b662045e750961b",
          3464: "cbbcc76db857125dccddfa71bbffd03c",
          3504: "0659a1ee8b2e26a56f4cb807084cb4fc",
          3562: "22ade5f9396b2d2e31974aeaaf6c2310",
          3563: "e0b8b280b38b79ce34bf03eec119695d",
          3798: "2ca8e035e7e96c839dad23ce70e19189",
          4007: "1592daf885b08833790a78ef9960bcb3",
          4105: "8aad73ef73bffacbe5f0fb3882153585",
          4143: "79dc55a27df542a21d426735b1acdb4f",
          4150: "d994d0ace4c5e59635e85403076f934e",
          4233: "1610df46448eca26cf2aaad86c2c086b",
          4271: "039a6c1097ef0b74fa99bb1966a6c12a",
          4410: "a04b21ece4259e5916b47e5d38169442",
          4458: "624e701d6e446c47843d86e1b5719c4f",
          4558: "8abed9d270578b93be42af2e1874d4cc",
          4573: "2d57d6f8ee73ea9c8e508ee01dfd2d06",
          4615: "a94948faffbc3e77786e58fcf459b76e",
          4765: "53df0f76ff3a4c0b63c811c7c4979f78",
          4979: "01ffaddd4b06fc565831e7fadfb5f41e",
          4981: "c04fa1d58a32a6347e1ff3cf876c671c",
          4996: "e7669db856dd812ab0eb65375ff3fc78",
          5033: "04befbaa135aea5e59f2e99f084a49d8",
          5101: "06ac23714cc51fa12c4f95c18cceb84b",
          5102: "491a2c3246e08a57052e8bf37152e8f5",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5238: "12495dc1c4659c034c5219735a6ccf6e",
          5261: "1729f2fe93fe1252836b5ae8bae257f7",
          5270: "937e6745a9cb02452e5cd7623556142f",
          5275: "53344e188077d27b0d41324ea2728a52",
          5427: "7eb5d82099350875cec60516928c1c9f",
          5476: "3241040a247cdd8a2220dc4efb6f2215",
          5665: "f4900f9e5751290aad677b7312030f8f",
          5678: "1de18cf4a773a1181ec753b24690a3e5",
          5749: "9e0d33f948e8f87dd5dd34f79449efef",
          5865: "381e531fc4c9d287c5b0b792869e90e3",
          6008: "800c3446189f24bd10a190a74a31010c",
          6044: "bc791e37ee80510b91a10b6b0c6ac4c5",
          6247: "e28005908126f682b3cf8ee59e91f97c",
          6388: "9cd13564f253c04147ee2f1f7b7826b2",
          6524: "4eae1e4ae40afaba1b70e0f1e129c7c1",
          6632: "1cf890354d456efb0c76c91d7107861c",
          6677: "23797ee71106c25b51506e88939255d4",
          6721: "2b33602362321a3eb98eb7ad71784b47",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6808: "4ef0c51da7a9846f9e20c76389d048e1",
          6855: "232838f58c6cac35ebda7cbce35f0ab9",
          6968: "2ff3f86c8eaf984c739aaef46ee7efbe",
          6996: "b8a0acb64d8a8cec02cf3f3a9b7b8e9d",
          7021: "98883e0455a4035fba8c03ba878c40fe",
          7079: "ab051c1bf9bba7e83fa8cb8449a00a16",
          7123: "2e695fcebe0c9a4b33d0e76389dba5ba",
          7353: "0b1d356ad72ad65d36e02732f09fa9c8",
          7533: "8c08c87f78f3ed4a6ef406727af00f12",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7709: "43cbae25d516e2ffb429bea4215609b3",
          7781: "3b06328efd00700472910cf86c4c5102",
          7919: "4bc0e34fccf53b1176f33717890155b2",
          7960: "5bb89a73ee6be652a86525fde3dff438",
          7977: "2a1995862eb505f6424a6c47cfc44b2a",
          7989: "47dc67093a66eb24e7f27213a496cc33",
          8039: "242f292f1b3b2e1fc11f1fafb855692c",
          8041: "2f1afed343f985b443ef1907425d5519",
          8049: "4ff9f5292c6ee3f6cbac2ff5f5ec491f",
          8066: "da3b51697562144dbb79eb4c82039f10",
          8290: "a5f7b0a6a90b87463041bbccb5bc6b99",
          8314: "05c516f68b1165a9c82487a9e3f37bc4",
          8417: "c7b66c8ef21fc7648f23182719e471d1",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8837: "924eb4bf4b5370e41365c163af869e16",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9028: "457c4e914db956e2492ff676b8c0f1f3",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9237: "48d07ec4bf397252dc553213479397cd",
          9245: "e894530e386fea75ad19cc813ddcedeb",
          9286: "8b0c3bbb747e95f2a8b395701bf055a2",
          9343: "eee3c78df2dac2063c86caa02711a762",
          9468: "2e9e2c85ee0a003b3655ddc6382b5006",
          9493: "3c8a6f9692fb1949f98bc05b8f7df402",
          9516: "82d88da7fa64fa18aeac281f9e9c1ba0",
          9770: "ef5182226e544e7f66e4b44930fde187",
          9799: "b0e4fc0b78b2b1ce448f9fedb3b8e434",
          9853: "0e191daabe5a57c659b0eb0d2ee88707",
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