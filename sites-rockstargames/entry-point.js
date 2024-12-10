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
    d = {},
    f = {},
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
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
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
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
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
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, c = 0, d = r.length; c !== a && d >= 0;) "/" === r[--d] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var f = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + f
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
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      c = t.S[r];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => c,
                init: () => d
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
              e.exports = d
            },
            66819: e => {
              "use strict";
              e.exports = f
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
          for (var d = 2 & t && a;
            "object" == typeof d && !~e.indexOf(d); d = k(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, E.d(r, c), r
        }, E.d = (e, a) => {
          for (var t in a) E.o(a, t) && !E.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce(((a, t) => (E.f[t](e, a), a)), [])), E.u = e => "js/" + {
          4: "4a7e85281837eefe4bafd1cad62edc86",
          109: "b6185fb85edc90de5354eaf1e89ba3df",
          300: "9409a4b91eaada2f98898d71dac78569",
          588: "21904e666df97c761d73a35111e679f8",
          621: "99a128603eec0b63bff6d98af5ae7293",
          665: "6b6d3a10c159c396f75e85184cefe542",
          701: "c07d8252bbb351cd7f10739e2f58bb95",
          760: "6521401c61bd09ebc9b812876eec17fa",
          864: "aaa22ab3eef63d81331d862922605dd9",
          881: "04ad483601d2ee95cde9ac56e9a1bb79",
          1171: "3af071e93e860429f679147d89e86f59",
          1298: "12540bd10dc452546f6459d3154d06a0",
          1403: "97b020b692b3bc7b293f0e1a70e0dc4d",
          1458: "8d5c2b96de1268ab0e640e0cf020b44e",
          1504: "c1baf2db990e2304c9541e2ee33d3e98",
          1622: "0535f5dda1ca9ecff11097eeb0436a0a",
          1626: "1a821a20005818702c8126fb54dfe381",
          1631: "0de02d23a519151c9800a409ebd3639b",
          1710: "7f80a607c9e2f35da4ea1706e9b5f5de",
          1721: "768d269ffd463210239a08474ccda7cc",
          1907: "4e0d97085a4c6d823ef9ea8d2ef8131a",
          1945: "1f6fa2bc9ee25c6bce6c759c93b1d123",
          2017: "c763a938edd6433dd03c3b26e47798e4",
          2290: "83d3b9aaaa462c7558bbb589a55a8527",
          2370: "607bdae7c212b1690488e51f2b95dffc",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2785: "05f8b186df1eec278b2293e2c889faa0",
          2808: "cb479d17b12c415f10991aeb2fcff9d1",
          2889: "f3c262c347976b7091348610a9123a9d",
          2939: "0372b349823876f24970dc4104dba130",
          2956: "9776543095f4f1abc936e7a62428b158",
          3002: "1e21b34772a9fbde417035db499ed127",
          3043: "1777348c353857145766024f3149bc61",
          3082: "8cf8243346207bbfa8874ef783724ed0",
          3127: "07c1ab8121cfb85bbf8a0efcd446a2ef",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3333: "3453421587ac4fc10b54e3c2fc87ae9b",
          3380: "79587c72c4c8fe0e234b7036f69ed7a9",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3431: "751b8b0b9d95bb9db4617b2361b89729",
          3464: "d3596e7812f5535320b4439a6867e8a1",
          3504: "987d84d0e11ed4d84e73b6fdfcbf3d71",
          3562: "87bdbcf59ba9070caa4b277a9ddf2228",
          3563: "e0b8b280b38b79ce34bf03eec119695d",
          3798: "ac2feec43bd9ee518767896727c33885",
          4007: "a1fc2fe7a4950d97476448c77dcbf17c",
          4105: "f3fc7828e99589aa96834ca045fbd7f7",
          4143: "9168a5f4bb93cdb5d0fddd433f7000ce",
          4150: "9937e4deae822d395d360ccb714b3e1f",
          4233: "e2ee7b1115ed3208b8fc97b0f1097c47",
          4271: "e891bef09c39be7780ece8174b091bd7",
          4410: "a04b21ece4259e5916b47e5d38169442",
          4458: "e5415a05d21db0e800cc4304248fe376",
          4558: "8abed9d270578b93be42af2e1874d4cc",
          4573: "fcfd25a844ecb0fbb33efd5e9a6b33d5",
          4615: "f6eda3e356b0024edb09674a9abc8f57",
          4765: "7e2e88a55954d03267164bbb935d8f40",
          4979: "7ff39ea950438e0bf6da7dfa40a36448",
          4981: "41601c15f2bb4a8d24c9725cda7f0897",
          4996: "96570c731bc0913f9f012b0641c77ec3",
          5033: "8aad1df4b358187d8879f805dcdff44c",
          5101: "c89d2d3336211043353b73170dd1d671",
          5102: "620eca454b320c676b1f42789570ae1d",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5238: "56cac14bddc90fdd57381fec082570d6",
          5261: "a26af9941e7fdf250441e420a76035c4",
          5270: "49a4a70dab35a52a6c09ba0a0052c98e",
          5275: "c91f0be7895ce837774cc3012f29c371",
          5427: "bccea5a5c4f9f8293649fa44f02e9741",
          5476: "e37becea57632a373092a37cbfa01c4d",
          5665: "ca05f9ceca6149825cb5c8edb1737149",
          5678: "7c285acdda62356262607ffd24477a1f",
          5749: "1dacac7eeb72f2402908f337a61e775d",
          5865: "381e531fc4c9d287c5b0b792869e90e3",
          6008: "5222f2fc325fae7c04eb4a761edb534b",
          6044: "2707722d85c396b116b00e750650665c",
          6247: "28cff5e8713abaf55bb37a7572befbdc",
          6388: "eb523926b990c44ce3bf951e10e0fa15",
          6524: "46b0219f68f4bfc15289f49a7a8c41e5",
          6632: "8f3381250e022994692c1cf7b6792e1f",
          6677: "3a739ee48ede59f4631171c8f200efaf",
          6721: "8554bb00dc57059c4ea0fad7c900a694",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6808: "78ab364fb870e6dea05a37ad8cfbb3bf",
          6855: "d886d39d5bf2727647387b4c3605897a",
          6968: "95a00b446f2fae6f7130d87835350876",
          6996: "10917ae181b3f3c517e7de04fa649c09",
          7021: "98883e0455a4035fba8c03ba878c40fe",
          7079: "5127f0b89bf2bab0a1a234ee093d40da",
          7123: "18ccebc541065406df7a61968e71fd4e",
          7353: "e5a320750d49594b9913d9b17821dbf8",
          7533: "7bb04cc0a8d176b68e63daafdd2c75da",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7709: "afde9fb94c99945fc4f37674a69ccf73",
          7781: "66dbf4caa67b52f8e4501ad610eb9169",
          7919: "96a71ccb127ab18f7ac26d9002dcba43",
          7960: "28f8c274ba215a0366b3f717c5011b6f",
          7977: "fb662a03fde6cf004ad917be313ce4f9",
          7989: "8db836ee8ce284e420957a03111518c2",
          8039: "e252b1eb60adf845dfaff8c104b6a61e",
          8041: "fe00692a6a0fedbd1e4e6558b1d748b2",
          8049: "b2c2b55622ef85c865b21df17daa6b49",
          8066: "eea659822e2a0aca126d4b972f7552d1",
          8290: "5e11df7039f0026674a74e7cfe1a8351",
          8314: "78b36554ca8f31e06ec5c5a95cec37e4",
          8417: "c7b66c8ef21fc7648f23182719e471d1",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8837: "6bf7ec7529ec71b7b38fbe1f33743eeb",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9028: "0501a2c33077e49f0610707f4c8a12a8",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9237: "d6102b56d274fae75ffc55b5104644c2",
          9245: "72956d9e71d6c84a77b4077021617f07",
          9286: "bc2b7441ff49115b608a56c1a7adb2b0",
          9343: "eee3c78df2dac2063c86caa02711a762",
          9468: "3f22c35993b3769db358d41bf6fcb7cd",
          9493: "3c8a6f9692fb1949f98bc05b8f7df402",
          9516: "82d88da7fa64fa18aeac281f9e9c1ba0",
          9770: "3318a2ec351c918d3ab292d538beee66",
          9799: "53d21d400c18891836ec3a7e59928715",
          9853: "fd8bd1f5db595c04bc10e7b079902282",
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
            var c, d;
            if (void 0 !== t)
              for (var f = document.getElementsByTagName("script"), o = 0; o < f.length; o++) {
                var n = f[o];
                if (n.getAttribute("src") == e || n.getAttribute("data-webpack") == w + t) {
                  c = n;
                  break
                }
              }
            c || (d = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", w + t), c.src = e), _[e] = [a];
            var b = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var r = _[e];
                if (delete _[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              s = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = b.bind(null, c.onerror), c.onload = b.bind(null, c.onload), d && document.head.appendChild(c)
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
                d = (e, t, d, f, o, n) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then((e => o(e, f)), c);
                    if (!n) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, a, c) => d(a.get, r[1], t, 0, o, c),
                o = a => {
                  r.p = 1, E.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(E, r[2], 0, 0, ((e, a, t) => e ? d(E.I, r[0], 0, e, f, t) : c()), 1)
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
              var d = E.S[t],
                f = "@rockstargames/sites-rockstargames",
                o = (e, a, t, r) => {
                  var c = d[e] = d[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (c[a] = {
                    get: t,
                    from: f,
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
                    var d = e => e && e.init && e.init(E.S[t], r);
                    if (c.then) return b.push(c.then(d, a));
                    var f = d(c);
                    if (f && f.then) return b.push(f.catch(a))
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
                  d = c < 0;
                d && (c = -c - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < t.length ? (typeof t[o])[0] : "";
                  if (f >= r.length || "o" == (s = (typeof(b = r[f]))[0])) return !n || ("u" == i ? o > c && !d : "" == i != d);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= c) {
                        if (b != t[o]) return !1
                      } else {
                        if (d ? b > t[o] : b < t[o]) return !1;
                        b != t[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || o <= c) return !1;
                    n = !1, o--
                  } else {
                    if (o <= c || s < i != d) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < t.length; f++) {
                var p = t[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, c) => {
              var d = t[r];
              return (r = Object.keys(d).reduce(((t, r) => !a(c, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var c = a[r],
                    d = (typeof c)[0];
                  if (r >= t.length) return "u" == d;
                  var f = t[r],
                    o = (typeof f)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && c != f) return c < f;
                  r++
                }
              })(t, r) ? t : r), 0)) && d[r]
            },
            r = (e => function(a, t, r, c) {
              var d = E.I(a);
              return d && d.then ? d.then(e.bind(e, a, E.S[a], t, r, c)) : e(a, E.S[a], t, r, c)
            })(((e, a, r, c, d) => {
              var f = a && E.o(a, r) && t(a, r, c);
              return f ? (e => (e.loaded = 1, e.get()))(f) : d()
            })),
            c = {},
            d = {
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
            f = {
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
            E.o(f, e) && f[e].forEach((e => {
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
                  var f = d[e]();
                  f.then ? a.push(c[e] = f.then(t).catch(r)) : t(f)
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
                      var c = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (c === e || c === a)) return f
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var f;
                      if ((c = (f = d[r]).getAttribute("data-href")) === e || c === a) return f
                    }
                  })(r, c)) return a();
                ((e, a, t, r, c) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var f = t && ("load" === t.type ? "missing" : t.type),
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                      n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, d.parentNode && d.parentNode.removeChild(d), c(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
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
              var d = E.p + E.u(a),
                f = new Error;
              E.l(d, (t => {
                if (E.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var c = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")", f.name = "ChunkLoadError", f.type = c, f.request = d, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, c, d = t[0],
                f = t[1],
                o = t[2],
                n = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in f) E.o(f, r) && (E.m[r] = f[r]);
                o && o(E)
              }
              for (a && a(t); n < d.length; n++) c = d[n], E.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            t = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), E.nc = void 0, E(32160), E(4500)
      })())
    }
  }
}));