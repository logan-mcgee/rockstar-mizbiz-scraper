! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a34a1cf3-42b6-4002-bba0-e9a69ebf14dd", e._sentryDebugIdIdentifier = "sentry-dbid-a34a1cf3-42b6-4002-bba0-e9a69ebf14dd")
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
}, System.register(["@rockstargames/modules-core-header", "@rockstargames/modules-core-footer", "@rockstargames/sites-rockstar-tv", "@rockstargames/sites-gta-tv", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-gen9", "@rockstargames/modules-core-gif-viewer", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-careers", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-gta", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var c = {},
    f = {},
    d = {},
    t = {},
    r = {},
    b = {},
    o = {},
    n = {},
    s = {},
    i = {},
    l = {},
    u = {},
    h = {},
    p = {};
  return Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(h, "__esModule", {
    value: !0
  }), Object.defineProperty(p, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
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
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        b[a] = e[a]
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
        h[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        p[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, m, g, y, v, w, k = {
            24075: (e, a, c) => {
              (0, c(47387).w)(1)
            },
            47387: (e, a, c) => {
              const f = c(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = f(c.y.meta.url, e)
              }
            },
            45408: (e, a, c) => {
              c(24075)
            },
            13099: (e, a, c) => {
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
            95400: (e, a, c) => {
              "use strict";
              var f = {
                  "./bootstrap": () => c.e(5672).then((() => () => c(45672)))
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
            62137: e => {
              "use strict";
              e.exports = f
            },
            29441: e => {
              "use strict";
              e.exports = o
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            66819: e => {
              "use strict";
              e.exports = h
            },
            25136: e => {
              "use strict";
              e.exports = p
            },
            98674: e => {
              "use strict";
              e.exports = s
            },
            71127: e => {
              "use strict";
              e.exports = u
            },
            11955: e => {
              "use strict";
              e.exports = b
            },
            58678: e => {
              "use strict";
              e.exports = r
            },
            94316: e => {
              "use strict";
              e.exports = t
            },
            40308: e => {
              "use strict";
              e.exports = i
            },
            40041: e => {
              "use strict";
              e.exports = n
            },
            50644: e => {
              "use strict";
              e.exports = l
            },
            74251: e => {
              "use strict";
              e.exports = d
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var c = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(c.exports, c, c.exports, P), c.loaded = !0, c.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, m = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          P.r(f);
          var d = {};
          e = e || [null, m({}), m([]), m(m)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = m(t)) Object.getOwnPropertyNames(t).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, P.d(f, d), f
        }, P.d = (e, a) => {
          for (var c in a) P.o(a, c) && !P.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, c) => (P.f[c](e, a), a)), [])), P.u = e => "js/" + {
          40: "14e1ce2ee7cc2be498d4b5ae737c43b6",
          131: "c871306636b9fc3a33fa5307c8605c36",
          220: "ce450aae8ffa5c34990081e2b9b6d3f9",
          278: "e3eba0df2893633ea6c61481e6c19cd1",
          299: "3e7bb10d8e42cb6d2fa6af0f3bb8ef37",
          314: "8b6704d88396311845a33287183bb138",
          377: "ecf7c64296d9174fd17104231c9e4d4e",
          561: "2c872b7c43801ddf7620dca280d9f3f3",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          621: "6ab378e3daf5f951636f73a040cca106",
          633: "275a837ed24c36a23375f7703822eccb",
          662: "14b824714b44be16680adf7a2092a69a",
          721: "b24bb1c35905efd404e993fbd94b8b26",
          824: "e67ae78230c45122891eac547d6e1132",
          888: "03e0828d5da444eb91a09e8d7bbd5da1",
          907: "8d6a5952956eb2d62e1bb2c91ef71c61",
          969: "819bbe4ba3124ce50cdab97841e4327e",
          1054: "3cfccd9cdb20690adc3859a04b5bcda0",
          1144: "ec0b77af87c72962439122aad4ad9b0a",
          1201: "25c5991edc8714eff29f76852672cf9d",
          1212: "4b8433fc29ab627310c14f4fec576acc",
          1235: "d2a27b450a79d32ad9b1ed833764224b",
          1242: "3d39aa167dff5071b675a3fda72bf7d2",
          1299: "183c628b8b4805022c3e78f00f7728e2",
          1409: "60e7029e887425aba9d240f91bf4fb48",
          1607: "86cf7f6f6c96b3f1e508484d5d48597c",
          1626: "1a821a20005818702c8126fb54dfe381",
          1673: "812f78611f927e8ebaed21936281fca6",
          1720: "7c50fb51b1f6712edf51099712008787",
          1723: "8c6becce960ccf740335d17524f70a44",
          1735: "70e2786feed92d9b73bad575c3eb828d",
          1794: "d9a9fd01d4b8bc04a75fbe52b451f350",
          1822: "fdf55cb2b8e203380773c0c43108ef88",
          1868: "5f91b3b24c0f1181d93d4da09c793378",
          2024: "fc0916bc7e59dd482774e20c37eff0db",
          2156: "2f788e82b803a9cf3d7a8ea6710dfa72",
          2158: "0767351f1ec6a7aab7f18727dd3f3be6",
          2171: "47917f32f0709470d05fe82101d2ba9b",
          2185: "1d41ecad01293ec0e205764d7c2d3856",
          2202: "d3f3d91bb9dc4788d8043e926a7eba03",
          2221: "ffa982e6a1abd4b7f35225c5ef19a182",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2234: "085f397cc8cb5b31540dc340d7e2f3ba",
          2243: "316b752332bcb78c07c43190bb465866",
          2246: "2c151d26f864c8bc72c74f9d1d3bdcfd",
          2347: "36e683b40985a07674d2a8ed17aac65d",
          2365: "6206f4ccddb1ae5f705bc88d9917aafc",
          2398: "ab5c1c9abd6d102355ed5e8a935ad17a",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2466: "22e8c810bf87821f322d6404821f99c2",
          2642: "8df862ec60b5c5f33740e702b63940a1",
          2678: "802628dd38acc94a6047dce7a74d7b65",
          2681: "746468ae97416cda46ec97bc06beb6e8",
          2718: "0acdbb15c73f81f02572d9bce7a2a5e2",
          2781: "14384aeb0a1b0c94ea6c7637a29c5519",
          2817: "7a9ed4abfde580ef32d317f24ef106d5",
          2824: "e6a2a361715a309f6018cac96374a311",
          2843: "d42f8e58f064eec6e938919c6d724a6b",
          2864: "c2f7914ddacb06681ea8ad5a953de1ce",
          2941: "001169897a6c98e87d19d5cc2a147665",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3002: "b56583ac0e9f778ff3b31ea5640db143",
          3034: "0faf812979559f3bcdce6a4d3c883255",
          3035: "7753a217c02dcbad25d2dcd520e71255",
          3037: "00cc0a575d09e394c88870e3fa5cf80e",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "c8eaf34a2c3561fa088f0e7bf7f5e7b4",
          3213: "205fe2929653424fc55178dfd74464d8",
          3274: "06a246324cbff995618f7572b127848d",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "0ff3ce07c6e60e70399f42162080bfb1",
          3370: "f8163786b1ac25b46730790a0c17a9ba",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3447: "fd76d83b0406f1ef2a0ca7f66d8e3e5a",
          3475: "2dff9beaddb2de9f243ebcd655f65e4d",
          3476: "c1ed53610080b9b97603d461466eb186",
          3486: "4a6cefb309c7a9c1510f0958390a28f8",
          3511: "3e2c4c13aa3fa680bd28d76144555345",
          3582: "cbbce60b796f9d3e22c372b384ea6c19",
          3622: "b9f51166c7ee30041585ddf867d16db1",
          3697: "988711cfc5bb202aea7221506e1db1c4",
          3733: "a15c8f1f76af0138a5657a205dc0c122",
          3806: "f60b25ecaba6ae61d622dd3989bb48e6",
          3855: "29a953f09e69d5644bd44637637d325c",
          3885: "ead267e380415e46c60a5e1dbab87356",
          3914: "c390cb1740553937234b80750c837884",
          3941: "b486fb439635ef9251e8947e601773ff",
          4011: "4dade123679f86446891d95046e97789",
          4054: "011ef28c30820949a1f97654fc87dafa",
          4186: "0fab5757dfe57569deacb46361c63fb6",
          4220: "a0057b94a5803657d413f88253bf9dab",
          4255: "537dc39097a2b95993deabcfce4f847d",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4505: "1e3d22758706cc767debdd7f66f5edb4",
          4514: "21ccaf24b756b395511275399a7a5064",
          4528: "2545007dcde26c89ea4c2e7b04b36c1c",
          4621: "7b63a06226cf852f9e6b344b1b718f2b",
          4700: "af6f935f9f411bd569b62756f00411de",
          4710: "0a2acacaee04ec76e3fe21b9fc9030f5",
          4731: "2842bceb557ffba932c245e3a1bd7de5",
          4783: "9f63406017fae38d1516208b2093c31b",
          4799: "c8093b561428f850d8a1370b12dd9f46",
          4841: "8aa980f492d0a02f6ed0cc7d916aa6a7",
          4851: "ca1c40d462b95f029f2acafdea52d3ea",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "f93da4407590f595eb6e1037ec10e431",
          4913: "a91effc4d27992ad85a592846348103a",
          4963: "02e5ca33a136987c89715d977b96d8f8",
          4967: "9e64a00434fc1aa53c33db12ab2c0c12",
          5018: "6831dd4fe3b0c2dfd091787f42d2a3d9",
          5045: "2bbcad87b56cd9eddd26bfe46f703426",
          5162: "35e7b0706f4b9852d68b203d65a4c525",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5233: "48a8ff25c30ea676fa46e71bef146a6c",
          5247: "74d47fd98b5ae8738a3b955dca5e69d6",
          5254: "d26fde1e42516ead9bf23ebb89afc826",
          5259: "11967a4cb2fe834052435e936183b562",
          5261: "07134964f4fd6a6cdcb77eeb1aed7172",
          5363: "96775e335e2900f901be07d47c6785d9",
          5388: "3e294c6e97bdf0430ee8c33fda7711e5",
          5440: "96c86b2f45fed4b7c7f648e67e1838c5",
          5442: "693b60949c3042fa4c76963e4eaf0c17",
          5499: "69698ad1a4e71275db5848991b019108",
          5530: "1234b8ce4d84641c10699062e1fde1a5",
          5620: "a5da3c05764614deae532a4141aca110",
          5633: "c8d7abb40f57c56ec017f2d859210f96",
          5639: "b04f4a3cea84843a702004d483a7481d",
          5652: "93b9fedc36f70fe8fea1bc33e8392cad",
          5663: "143ded11ffa8278d9fdc11d6e9a168ba",
          5672: "ebf0a062ba8c701fcf291f1b2ef9bd2b",
          5742: "638af7ec385e68522349c4021be50125",
          5765: "f8cba9d13f2f1c586501f1f711489b89",
          5794: "6cfabe60bdfd290a4a9536ee6e1efa67",
          5830: "10ef8cebce03b8b82771a25417ccbc12",
          5832: "db3465e7b6855007749a895ec5d68f32",
          5881: "74b9d30e0c74b59cc4598c092feddcf7",
          5918: "959e341cc05df2be43644a451854cc43",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5981: "ec04a9c2f0000600445774c760f10544",
          6035: "dad8b5ca6232815cf8ec51d1a86a6279",
          6267: "63c702b9223d35b9a15063eae0a1c883",
          6274: "250f2cf95af26ad4cbbbd6c0ba0c83aa",
          6280: "a45d2346daca120fec40181d49b8bf60",
          6285: "cfb36f3acf970c1128fac99807d66135",
          6361: "41bb8cfdfb7688e0cc9321a478f0e8e9",
          6383: "cc1608941b644dc6ab4057f5db19839e",
          6401: "20237016a5680930dc8fc6545068fb68",
          6407: "c31514ab00a0924823a8f1e2f871425d",
          6612: "9d85635acb040858c766adc2cb739b11",
          6664: "26b1d1e0260d31c4e5c50207a774a6f2",
          6711: "9d0f4668f763e10d76e3f45ccc8dc57c",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6840: "bac0d8cf873aa74035acdff52953e2d1",
          6879: "1fb4def9d9f2d14fbe18c9cc922d35fb",
          6891: "670c335dce90061c4a6152d8e84d54a6",
          6893: "77fa78deedc01aa28891cc5a59612239",
          6940: "47eee495ebca8337fa633583bb525cd8",
          6973: "ac6ccb5a47eed2be54d51ceab1179848",
          6997: "052c2c865e0251ea24bccba74a01e9d2",
          7010: "460f35c337d273f9d29a6356b8e5953f",
          7039: "c67c02fadcc58487713233bc58428762",
          7057: "4d9195aef34d9615046a88da0cf2210d",
          7073: "5acf12afb22ec155da41acdef1ea0fde",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7214: "167e81b696e7aeda549f0c55a5b6a569",
          7269: "56586f9d58b2ee44a316572b315a4e5d",
          7344: "1899e0cfae22873031306d92882667e0",
          7436: "5ffb043e4eee75685ef791a3f9a04a8a",
          7452: "9574b7d8b92c715f7a9d922ff4263418",
          7453: "8a26d25b7bf0447b4dc4d330dca554d6",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7547: "a4503e57704f9272712fd3fe1b138922",
          7575: "13d013ac5f48229ed3fc4cca0506865d",
          7587: "993011bf9df5382f57dcdc33ffbd5d7f",
          7642: "a56a672c5138cd579ef8862bf4d90e2e",
          7744: "60b3d01b2013bf74eda2bb4211e2dae1",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7970: "601833a3fd445b9d08ce05d207aea6ef",
          8069: "cd359ba9b1a766b1675649580904bf0d",
          8272: "bd7cc989eacb3e1b93200b6693b0c4f3",
          8292: "3df19ecc59f1f38331c80233de1921c4",
          8386: "c1c7c0c283767eeb6f20637cfe9cc679",
          8391: "fc0aac79b7b1136489bc1b8a22341933",
          8447: "51ecf1f88351b88cfb17a48e1e063958",
          8755: "793e1f2442b9d2ae3205b79ac69c953b",
          8764: "ebe1786ff17481037e6c5eded4e6fd8d",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8786: "fd8e0485508ffe14fabacb6bbe2438c3",
          8880: "03bbae6c19d9eb8db12d7f694ea4ef99",
          8970: "e60fe5fb994c5ed6a9bf010b01d3ecdc",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "f66e3243721850870e897611dee5631c",
          9028: "cbcf02fcb21871b33c8db674c0500524",
          9081: "02608365f2b1bcee53e6b37d5c5af94a",
          9126: "0c1b90790a6904bfb2708626b02338fb",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9154: "1fae24721f28e8fdc02807c738d4b353",
          9235: "4989ce2404018a98997084f7e60ee126",
          9323: "5a3378e636b9a86c31eb470900ebb007",
          9377: "f32b9332e1c559e3b16f0c3ba5a784d7",
          9474: "26a9a9d49f83f82a4eb830d37f007982",
          9615: "41b85f2f454673414a60568b2713808d",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9642: "ecbfbeb67555f9353f7d17ad7423af6b",
          9775: "4f5e9dccd5a3a9d9c530ce4ec4c622da",
          9834: "22b80ce7edfdc48dd512ab96b7e25c0f",
          9936: "80b022fd27e77c2affdb3051379ae05a",
          9990: "aa24c04f7e1f5e167b28152b13ab870e"
        } [e] + ".js", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), g = {}, y = "@rockstargames/sites-rockstargames:", P.l = (e, a, c, f) => {
          if (g[e]) g[e].push(a);
          else {
            var d, t;
            if (void 0 !== c)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == y + c) {
                  d = o;
                  break
                }
              }
            d || (t = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, P.nc && d.setAttribute("nonce", P.nc), d.setAttribute("data-webpack", y + c), d.src = e), g[e] = [a];
            var n = (a, c) => {
                d.onerror = d.onload = null, clearTimeout(s);
                var f = g[e];
                if (delete g[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach((e => e(c))), a) return a(c)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = n.bind(null, d.onerror), d.onload = n.bind(null, d.onload), t && document.head.appendChild(d)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), v = {
          40: [94057],
          1626: [41626],
          2185: [31879],
          2405: [12405],
          3137: [53137],
          3326: [43326],
          3416: [33416],
          3511: [9566],
          5202: [35202],
          5388: [39848, 41263],
          6766: [36766],
          7538: [47538],
          8778: [78778],
          8987: [88987],
          9147: [29147]
        }, w = {
          9566: ["default", "./index", 66819],
          12405: ["default", "./index", 58678],
          29147: ["default", "./index", 50644],
          31879: ["default", "./index", 25136],
          33416: ["default", "./index", 40041],
          35202: ["default", "./site-routes/Bully", 40308],
          36766: ["default", "./index", 11955],
          39848: ["default", "./root", 62137],
          41263: ["default", "./core", 39247],
          41626: ["default", "./lazy", 29441],
          43326: ["default", "./destination", 71127],
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          53137: ["default", "./index", 98674],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          94057: ["default", "./utils", 11955]
        }, P.f.remotes = (e, a) => {
          P.o(v, e) && v[e].forEach((e => {
            var c = P.R;
            c || (c = []);
            var f = w[e];
            if (!(c.indexOf(f) >= 0)) {
              if (c.push(f), f.p) return a.push(f.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), P.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                t = (e, c, t, r, b, o) => {
                  try {
                    var n = e(c, t);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then((e => b(e, r)), d);
                    if (!o) return s;
                    a.push(f.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                r = (e, a, d) => t(a.get, f[1], c, 0, b, d),
                b = a => {
                  f.p = 1, P.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(P, f[2], 0, 0, ((e, a, c) => e ? t(P.I, f[0], 0, e, r, c) : d()), 1)
            }
          }))
        }, (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (c, f) => {
            f || (f = []);
            var d = a[c];
            if (d || (d = a[c] = {}), !(f.indexOf(d) >= 0)) {
              if (f.push(d), e[c]) return e[c];
              P.o(P.S, c) || (P.S[c] = {});
              var t = P.S[c],
                r = "@rockstargames/sites-rockstargames",
                b = (e, a, c, f) => {
                  var d = t[e] = t[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : r > b.from)) && (d[a] = {
                    get: c,
                    from: r,
                    eager: !!f
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = P(e);
                    if (!d) return;
                    var t = e => e && e.init && e.init(P.S[c], f);
                    if (d.then) return n.push(d.then(t, a));
                    var r = t(d);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === c && (b("@foundry/icons", "3.5.9", (() => Promise.all([P.e(9154), P.e(4514), P.e(2229), P.e(4853), P.e(1735)]).then((() => () => P(84514))))), b("@foundry/react", "1.25.4", (() => Promise.all([P.e(6035), P.e(9154), P.e(8447), P.e(3476), P.e(2229), P.e(4853), P.e(1409), P.e(3855)]).then((() => () => P(88447))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(2024), P.e(2229), P.e(1673)]).then((() => () => P(85950))))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(1201)]).then((() => () => P(71201))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(5442), P.e(1720), P.e(2229), P.e(9623), P.e(2246), P.e(5966), P.e(7344)]).then((() => () => P(66369))))), b("@rsgweb/router", "1.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(2781)]).then((() => () => P(42781))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([P.e(5442), P.e(8292), P.e(2229), P.e(4853), P.e(5966), P.e(9834), P.e(4281), P.e(4967)]).then((() => () => P(99834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(5442), P.e(2229), P.e(9623), P.e(2246)]).then((() => () => P(17560))))), b("dompurify", "2.4.7", (() => P.e(561).then((() => () => P(20561))))), b("framer-motion", "7.10.3", (() => Promise.all([P.e(9235), P.e(2229), P.e(1299)]).then((() => () => P(19235))))), b("graphql", "16.10.0", (() => P.e(5440).then((() => () => P(55440))))), b("history", "4.10.1", (() => P.e(7642).then((() => () => P(7642))))), b("prop-types", "15.8.1", (() => P.e(2817).then((() => () => P(72817))))), b("react-adaptive-hooks", "0.0.8", (() => Promise.all([P.e(2229), P.e(3002)]).then((() => () => P(73002))))), b("react-device-detect", "2.2.3", (() => Promise.all([P.e(2158), P.e(2229)]).then((() => () => P(12158))))), b("react-dom", "18.2.0", (() => Promise.all([P.e(5794), P.e(2229)]).then((() => () => P(5794))))), b("react-focus-lock", "2.9.6", (() => Promise.all([P.e(9775), P.e(2229), P.e(7145), P.e(3035)]).then((() => () => P(19775))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([P.e(2229), P.e(6383)]).then((() => () => P(56383))))), b("react-intersection-observer", "9.13.1", (() => Promise.all([P.e(2229), P.e(5363)]).then((() => () => P(95363))))), b("react-router-dom", "6.17.0", (() => Promise.all([P.e(4255), P.e(6407), P.e(2229), P.e(3213)]).then((() => () => P(6407))))), b("react-router", "6.17.0", (() => Promise.all([P.e(4255), P.e(6612), P.e(2229)]).then((() => () => P(96612))))), b("react", "18.2.0", (() => P.e(3447).then((() => () => P(13447))))), o(62137), o(39247), o(71127), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251), o(25136)), n.length ? e[c] = Promise.all(n).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var f = c.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = c[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
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
                  var n, s, i = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= f.length || "o" == (s = (typeof(n = f[r]))[0])) return !o || ("u" == i ? b > d && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= d) {
                        if (n != c[b]) return !1
                      } else {
                        if (t ? n > c[b] : n < c[b]) return !1;
                        n != c[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
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
              var t = P.I(a);
              return t && t.then ? t.then(e.bind(e, a, P.S[a], c, f, d)) : e(a, P.S[a], c, f, d)
            })(((e, a, f, d, t) => {
              var r = a && P.o(a, f) && c(a, f, d);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            d = {},
            t = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => P.e(3447).then((() => () => P(13447))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => P.e(5794).then((() => () => P(5794))))),
              81409: () => f("default", "@foundry/icons", [1, 3], (() => P.e(4514).then((() => () => P(84514))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([P.e(4255), P.e(6407), P.e(3213)]).then((() => () => P(6407))))),
              16565: () => f("default", "graphql", [1, 16, 9, 0], (() => P.e(5440).then((() => () => P(55440))))),
              28897: () => f("default", "react-device-detect", [1, 2, 2, 3], (() => P.e(2158).then((() => () => P(12158))))),
              94944: () => f("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => P.e(621).then((() => () => P(73002))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(9623), P.e(2246)]).then((() => () => P(17560))))),
              2918: () => f("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(1720), P.e(9623), P.e(2246), P.e(4963)]).then((() => () => P(66369))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([P.e(2024), P.e(4054)]).then((() => () => P(85950))))),
              57145: () => f("default", "prop-types", [1, 15, 8, 1], (() => P.e(2817).then((() => () => P(72817))))),
              33213: () => f("default", "react-router", [1, 6, 11, 2], (() => P.e(6612).then((() => () => P(96612))))),
              90: () => f("default", "history", [1, 5, 3, 0], (() => P.e(5261).then((() => () => P(7642))))),
              55274: () => f("default", "@rsgweb/router", [1, "workspace:^"], (() => P.e(5162).then((() => () => P(42781))))),
              63582: () => f("default", "framer-motion", [1, 7, 5, 1], (() => P.e(9235).then((() => () => P(19235))))),
              95945: () => f("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([P.e(9775), P.e(7145)]).then((() => () => P(19775))))),
              87851: () => f("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(8764).then((() => () => P(56383))))),
              96711: () => f("default", "@foundry/react", [1, 1], (() => Promise.all([P.e(8447), P.e(1409)]).then((() => () => P(88447))))),
              14463: () => f("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(7744).then((() => () => P(95363))))),
              2973: () => f("default", "dompurify", [1, 2, 4, 1], (() => P.e(561).then((() => () => P(20561))))),
              92440: () => f("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([P.e(8292), P.e(9834)]).then((() => () => P(99834))))),
              90582: () => f("default", "@rsgweb/modules-core-screenshot-viewer", [1, "workspace:^"], (() => P.e(3582).then((() => () => P(71201)))))
            },
            r = {
              40: [92440],
              220: [14463],
              582: [90582],
              1409: [81409],
              2229: [62229],
              2246: [16565, 28897, 94944],
              2973: [2973],
              3213: [33213],
              4281: [2918, 81788],
              4853: [44853],
              5388: [90, 55274, 63582, 95945],
              5966: [95966],
              6711: [96711],
              7145: [57145],
              7851: [87851],
              9623: [9623]
            },
            b = {};
          P.f.consumes = (e, a) => {
            P.o(r, e) && r[e].forEach((e => {
              if (P.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var c = a => {
                  d[e] = 0, P.m[e] = c => {
                    delete P.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete d[e], P.m[e] = c => {
                    throw delete P.c[e], a
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
          P.b = document.baseURI || self.location.href;
          var e = {
            1149: 0
          };
          P.f.j = (a, c) => {
            var f = P.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) c.push(f[2]);
              else if (/^(2(229|405|973)|3(137|213|326|416)|5(202|82|966)|67(11|66)|7(145|538|851)|1409|1626|4281|4853|8778|8987|9147|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((c, d) => f = e[a] = [c, d]));
              c.push(f[2] = d);
              var t = P.p + P.u(a),
                r = new Error;
              P.l(t, (c => {
                if (P.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
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
                for (f in r) P.o(r, f) && (P.m[f] = r[f]);
                b && b(P)
              }
              for (a && a(c); o < t.length; o++) d = t[o], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            c = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), P.nc = void 0, P(45408), P(95400)
      })())
    }
  }
}));