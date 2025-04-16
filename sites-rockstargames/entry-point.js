! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d94cdf62-43a6-4b66-aed9-d1b58ab620dd", e._sentryDebugIdIdentifier = "sentry-dbid-d94cdf62-43a6-4b66-aed9-d1b58ab620dd")
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
}, System.register(["@rockstargames/modules-core-header", "@rockstargames/modules-core-footer", "@rockstargames/sites-rockstar-tv", "@rockstargames/sites-gta-tv", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-gen9", "@rockstargames/modules-core-gif-viewer", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-careers", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-gta", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-core-newswire-article"], (function(e, a) {
  var c = {},
    d = {},
    f = {},
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
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
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
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
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
        var e, m, y, g, v, w, k = {
            24075: (e, a, c) => {
              (0, c(47387).w)(1)
            },
            47387: (e, a, c) => {
              const d = c(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !c.y.meta || !c.y.meta.url) throw console.error("__system_context__", c.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                c.p = d(c.y.meta.url, e)
              }
            },
            45408: (e, a, c) => {
              c(24075)
            },
            13099: (e, a, c) => {
              a.y = function(e, a) {
                var c = document.createElement("a");
                c.href = e;
                for (var d = "/" === c.pathname[0] ? c.pathname : "/" + c.pathname, f = 0, t = d.length; f !== a && t >= 0;) "/" === d[--t] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var r = d.slice(0, t + 1);
                return c.protocol + "//" + c.host + r
              };
              Number.isInteger
            },
            95400: (e, a, c) => {
              "use strict";
              var d = {
                  "./bootstrap": () => c.e(5672).then((() => () => c(45672)))
                },
                f = (e, a) => (c.R = a, a = c.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), c.R = void 0, a),
                t = (e, a) => {
                  if (c.S) {
                    var d = "default",
                      f = c.S[d];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return c.S[d] = e, c.I(d, a)
                  }
                };
              c.d(a, {
                get: () => f,
                init: () => t
              })
            },
            62137: e => {
              "use strict";
              e.exports = d
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
              e.exports = p
            },
            25136: e => {
              "use strict";
              e.exports = h
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
              e.exports = f
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
          var d = Object.create(null);
          P.r(d);
          var f = {};
          e = e || [null, m({}), m([]), m(m)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = m(t)) Object.getOwnPropertyNames(t).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, P.d(d, f), d
        }, P.d = (e, a) => {
          for (var c in a) P.o(a, c) && !P.o(e, c) && Object.defineProperty(e, c, {
            enumerable: !0,
            get: a[c]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, c) => (P.f[c](e, a), a)), [])), P.u = e => "js/" + {
          40: "59dc68098e768000b0d92da986014227",
          97: "87f936f55f63b33767ead77459c70c34",
          131: "18fd5f965294a2ae65df811fd3cd3490",
          220: "62c3a8d076d069b0322da48cda4e4e79",
          278: "1d79f4b5add73e41f1557854dca93b85",
          299: "457a83ad299874f6bceea108c66a671d",
          314: "c6ef2c7bbbb74d1770426ac01e97ea26",
          377: "5a8eb7da69aea33bad2afbb80b72a53a",
          452: "e2ad8a87c3adbddd46fafbcad654b753",
          459: "f8dc42ded575a1d88d5dfefd8d91a72b",
          561: "9c1b0e9a793b11ae765afcc0297fd3ca",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          621: "52844dfe68f13750b84e37f3f78ff02a",
          633: "41ec9fa612c9e7baeecae2d908134c7d",
          662: "844cffe593ef33d51b76e66e89417eeb",
          721: "b10fe1cd88388b3ba9ed8fd90ee98d52",
          824: "5c2b9f7ff4e251ca76f97cc01814a65f",
          856: "1f2d7b9c652c8bd9d266e3ea1cc6d79c",
          888: "8ef0a46dbc8fc87bb24fbc77fae6c2d6",
          907: "c382167b75342b0d2d4423921f9c82db",
          969: "502446324fac24dc98f10864f4778e7a",
          1054: "ee17906961034bd14316860611745c0d",
          1144: "f6ce78180bced440448317bd8bad67b4",
          1201: "d2af1a8057dd8100422b7952ab3dbe32",
          1212: "154e55f7382c94af688ee10c8308f6b7",
          1235: "f97fd3ef44fd819957add092baca4bb2",
          1242: "d55e80b3043a5d9bb83c1560a292c893",
          1299: "0abfec56f2632ae756772cb7f58ddf8a",
          1364: "08af7ec2e9fb350618c984e5a6fabdce",
          1607: "e40bf71d271911ebc0665b062143c40c",
          1626: "1a821a20005818702c8126fb54dfe381",
          1673: "0f4f4f3d5553d779194002f8d2d82553",
          1700: "4e8b2aaccc8be2258aed7661ca5dae7b",
          1720: "df2185504f78956b9fbf99b718dbc3d5",
          1723: "e3d65dcef22f707ad0e7f750c52ab2a5",
          1794: "a0e9b61383b7631e48b2c76409e7f3d5",
          1822: "f78120cd1e82bacc43eb5560e4d1a787",
          1868: "45271745664c40c79f1324fd62170dfb",
          2024: "782f094cd108b9f375f61e9df57ba838",
          2141: "12c392d7cc7497d5631f2c55492596df",
          2156: "db9a5011baef420e5e5e2df2d0c832f6",
          2158: "2aaa50412bef05827f84a8470b55643b",
          2171: "31a1e8f54842ce40fa257ea100d44ccd",
          2185: "c2b5aa411a384c933a67f796eb0cd90e",
          2202: "55ebffc4c9675659e6f5cfb0e6ab6daf",
          2221: "623957006c8f6e6bfdd85cd6cf68708f",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2234: "b0c6f8e2d52db5f75e75eedd72fc5ab7",
          2243: "0faf3709b71f1fc9463b04c9ffa90500",
          2246: "55e493794f14f351895b603398454c5f",
          2347: "413a8f381bdcbad52a5fd9e346b64d28",
          2365: "25ca9f36299bb42814dde1ad459f6528",
          2398: "56a2d1bebccc0d3a7ced339a412303dc",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2466: "a278f3cf343330a5fadb491e5276729a",
          2475: "b6f9d35c30c9587165954829a9db9ad6",
          2642: "160b85684e87c1966791cf67470906c0",
          2678: "a133c746dbbcb01c3dc58fcdca74986d",
          2681: "be310807fe61406b0d08df42e0bd722e",
          2718: "824cb97adb2dd09105344649e414b4e2",
          2781: "0928ea8e7b7dab8ddad21a3b00ab7cd0",
          2817: "d8ee196bcb5313ba8ca12f75f205fbfa",
          2824: "347cc9df0220631eb6131e6b80c04e1c",
          2843: "1695fdb0b591e9cf72d07570bbfed190",
          2864: "96b7c29287ec537156d5fdcf1b4f283d",
          2941: "bc8670d22a9d0cdd9fca2afa6bc0aabd",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3002: "0e9f9565ff05bff4be1570f33ae2d8ac",
          3034: "8da1a41fee0002ac5606b516d6132d4e",
          3035: "b7df4402518d81d3f12c83ec6d468fa2",
          3037: "6b5e252c6a7138178c879d9488f5b9d9",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "a44f2ee507ec861c4672a8431c5a3f06",
          3213: "205fe2929653424fc55178dfd74464d8",
          3274: "b5c27b02c1fc91b9e9dc5aa38a66ef14",
          3321: "16bb80f3c7a269bc664965fae2c6a7fa",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "8344f4f3d6cc614903478feeb265f9b8",
          3365: "56717f6d53de2dbe8c94230e828e14e6",
          3370: "5aaf7bb4298921e47f7f261ab41a654a",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3447: "ca9d6cfbdd91c58beab57dace3704029",
          3475: "4bde9cc5bf6e58776740184e1ab35829",
          3486: "5718073562eeb7b0782f21a2996234cc",
          3511: "314335ca8c94f94f634ade61a16600e3",
          3545: "b27cd345731babcd0e94068bd23ddad6",
          3582: "90b81204fc445837716a3342a2d57528",
          3622: "f12f2cbd12045a8432478f32a6f3fc49",
          3693: "9e449219ed668f498d86b184173b9b76",
          3697: "30302ef5aea2798f3dcd971514fcadcc",
          3733: "a6fa6d3895f635db72c90c454d33fb01",
          3806: "9db220566663b7a6babaab794c9d4d17",
          3855: "fe68c9afeeb4d79b79711b1b498b7d05",
          3885: "581b05b2234ad2c655bf3ddebebb9bb9",
          3914: "115a1a085204dca49afab2a1ee776edf",
          3941: "f40fb5daf0d09e564f25725c4c6c71dc",
          4011: "4474c66065a98006d27db88a0ae76ac2",
          4054: "912a45d29343b5aafaad76393d26f54c",
          4186: "ad1d8ee2930ef668b42d29d7c77e8f9e",
          4206: "77a29b955add863e69b1278db62731d7",
          4220: "4a91f983c6d045128e2904a5b2141c12",
          4255: "20a1b85787fd655b541f81cff6662688",
          4275: "f4a6356ae4121be970cb02f7fcf21fc9",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4445: "d7c7e6b4c81224a3b34d46a2590ea573",
          4459: "9bf2158e6a3864bb9b67b11e665f79d1",
          4505: "1c0435cf7c1165e642cec3b9a5eea472",
          4528: "aace0bd7ebc45307e78b2b8c3a9bb057",
          4621: "e01fa30b63e28ed8c43d454f488dcacf",
          4700: "64a6253fd3b35438a767a9ed65064090",
          4710: "1b78e0d1a7dd226e0a43fbf19d0a31f4",
          4731: "9a783621ec2a8675a924f86c079d3b51",
          4783: "2c971a91f17df6465cc8bf208e2a3f44",
          4799: "20f67ce13d6e190c009aa40b466143f6",
          4813: "466a21e1cbb1d7d0e5dbc60e4009e383",
          4841: "10ee4670d3bc6091ed8e11b5d6d71641",
          4851: "8cad22f0b5c424167c50b6e016612aa1",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "eb6fbebcf28a0a44105adf6baf427174",
          4913: "ffca7a2d68bd208c4f67776d9c12542f",
          4963: "96280dce87c8a76c2079633b924bad10",
          5014: "7be903668669ccc726e359b2383cea7e",
          5018: "6176bd90d841a975d5b193d070b721c2",
          5039: "53752ed14b7eca584a53935540acbd28",
          5045: "f6e8186a3cefbb90be4803c89782df3d",
          5162: "723cdd05f3e1309a1e2acfd4c791f74b",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5233: "ab6715e0eafe7afdfbfa7c476895a0c7",
          5247: "8a9a77adf7cefe96d56e8e70308b6e5d",
          5254: "c9f623afeec88905cb9c916f2ef353dc",
          5259: "36160a50a2dcd2af98106adc70a0c36f",
          5261: "ccfab9674fbeef7ee1497a420a12a5d7",
          5363: "c43bfd2efe298e24707c6c8b00058df6",
          5388: "41f1afe7746b90e790b33500bc6ce9cc",
          5440: "3a30866e6c9d41bff0c4dfd73ad13535",
          5499: "0d46c43eec2e2d017682936c9e80ec1e",
          5530: "efb3b6af01dff849ea5adbb8954d04d0",
          5633: "ade52f166c70e4fc7a6e4dfb1cc89d0e",
          5639: "93818e2a7c02e2d0c8610669bd660410",
          5652: "e3307b2442d3ed8461033ed8d4cda1f4",
          5663: "f11d326828b8346b20f398c33bf10b04",
          5672: "c46c5dad7c69e80afb2df7e251873b5e",
          5742: "ae90718588ae9a4988547ba4e2f9a418",
          5765: "e13f588c2a978bf1f984aea0c24c7d7b",
          5766: "8d8e3d802a85bbbe24888d3342b2cd2e",
          5794: "4b19aca8483cbdbf013a038ac963b50b",
          5830: "ca6b93eb66275c1e2387039b140d88ca",
          5832: "04b1ad843a27c9bc5312b222ae373c83",
          5881: "f7f2d8f1300f1fa9cc1a870c5cce23c4",
          5918: "350eddb9541df55bd685745b1ed36884",
          5954: "37353f946103e004400b493a65ae0bfa",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5981: "0b6899e7335ad3b5b0a9dbb027cc7f17",
          6002: "c212d3535a0172a0b116a1ad59d3752f",
          6035: "916c0cd2c31b7041a11e2dfb2a08b7f3",
          6267: "db7d54b39ed776663ce2cfb5ea6c9e1a",
          6274: "938351356800ea9fece9c92206ee0cfb",
          6280: "cdbf92514513e66ea4f6759c5734cc51",
          6285: "2dc5230f7d07aa8dd12fad037d5f5d24",
          6361: "31411b5525c42ba0b1eb9c991cdb9a19",
          6383: "ada1267e3025d0742c21108370562bef",
          6401: "03008eaaa11f774bdd6c6b6954742a88",
          6407: "7c159d5a711da30c870c0d9a1e60008c",
          6612: "635af5b6e5321d5c541313787add1911",
          6664: "79840b0c7fdc74223b90a1fe8bb4d69b",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6840: "385779b4084616456d4825ad72e426a1",
          6879: "c062d762dafc7500a54b5d3082832dae",
          6891: "f80987efebf3d633751f9d7853b23eed",
          6893: "12758c32e297e9d2e074df447e4a1a39",
          6940: "928b9bb7b551b954f858681cbb87059e",
          6973: "73d7deb343c52c46be855d0ab9409c93",
          6997: "6908fea0d16db9ff58d6a44dcbf06218",
          7010: "5c7ea0a132765ebbda58f6622348f986",
          7039: "bbe2d08ba69f842081c9c842453d6fdd",
          7040: "3bcc7846d319c56fcceb630da7c2ec43",
          7057: "55f2d88c723fd66db47fb893f44969f1",
          7073: "a560e5330e93b30e1358243fc55ba0bd",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7214: "bf302883ac097dc82b6ca2c559392731",
          7269: "9902ac4fc07a5f76648381f90113bf8c",
          7344: "eca670ba7ab43033680b57abf31f3293",
          7436: "5d534b95b7762832104f2a392dc35018",
          7452: "7e35770fb2264977908f3f6420326989",
          7453: "f18ac52072c9c94ef14aa6dee29298bb",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7543: "63118b6c1643c381a0e8303d2ba106ce",
          7547: "03381cdeb146d5bed5d98b2317706ff3",
          7575: "765d5026f5fd9b74a45408050e7195fd",
          7587: "417a044ffbb2eb24c48fd5728be0f363",
          7642: "a927667c89dfde582585c052d915035e",
          7647: "acfecb725b3c3b7d9d804b905b1ef0c7",
          7744: "6cdfd0897c2fc7ef6165a188d5c599a1",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7868: "a8a01a4d06a7339811fa6d4190cbe39e",
          7970: "21b41d06de2eee4bdbbfa1707a6dca58",
          8069: "a795662cc8f0284e00ce7c8d538a733a",
          8179: "31f6ebf46475bd8891fea928d5b933ea",
          8272: "b47cd77533e4e3a3bee2a9f2f6d062a5",
          8284: "4c70bf60eee8392af11409772a2052b8",
          8292: "4821393681867c6ca2871c58e7953410",
          8386: "f7815e26c528da88d04c659677917e18",
          8391: "d2e7880d0037c19083509a6b2ded35f7",
          8440: "d9a7830b6e63614af944d663bb924722",
          8755: "cb238f6b0167b9fb3f381642193e178a",
          8764: "892a3141e8afa45f6d592a1f99a4e5e0",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8786: "956e0ac714d40d621d96d465ba554551",
          8880: "315aed96323438412cc4091b20fbf717",
          8970: "4f7151c30e57922947f2f8275a35ea16",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "be3d4d1e13e76d176a2502a4d8a2f051",
          9028: "88f62569ea5a79cb9d823c48d0b65b99",
          9081: "c8d588066c2090317167a661f0f96987",
          9126: "2a786ea41de1da66a22f0b864df08e39",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9235: "3806ca59651bd8fa27adf4698da872b9",
          9323: "b234259658f49063ff0af142f91da9a3",
          9377: "13e3caffbf32dfac89ac5f55556ca9c5",
          9439: "d3f505ba23197a3fe2f2a828993c875f",
          9474: "c819fca1a5a68f56a0f55c2ab4d78183",
          9577: "cdd13c7691a676b4c3f9709866a8ce2b",
          9612: "6e3d8bc01b3af1de7d35f3116ca5a67a",
          9615: "27d6089cc089f9372c52f72841d092c1",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9642: "1478da16500a1e7c79cfb71fa808837f",
          9775: "d3b0d22dc6a777cf3655e1b81deefef0",
          9834: "c56b888da8524d59a4931c9e70cca18e",
          9936: "0a86ccea4f5e2b84ccf5239a6d793a8e",
          9990: "2119a021982f5a5cb4fe3b1d558ac5d7"
        } [e] + ".js", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), y = {}, g = "@rockstargames/sites-rockstargames:", P.l = (e, a, c, d) => {
          if (y[e]) y[e].push(a);
          else {
            var f, t;
            if (void 0 !== c)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == g + c) {
                  f = o;
                  break
                }
              }
            f || (t = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, P.nc && f.setAttribute("nonce", P.nc), f.setAttribute("data-webpack", g + c), f.src = e), y[e] = [a];
            var n = (a, c) => {
                f.onerror = f.onload = null, clearTimeout(s);
                var d = y[e];
                if (delete y[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(c))), a) return a(c)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = n.bind(null, f.onerror), f.onload = n.bind(null, f.onload), t && document.head.appendChild(f)
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
            var d = w[e];
            if (!(c.indexOf(d) >= 0)) {
              if (c.push(d), d.p) return a.push(d.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), P.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                t = (e, c, t, r, b, o) => {
                  try {
                    var n = e(c, t);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then((e => b(e, r)), f);
                    if (!o) return s;
                    a.push(d.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                r = (e, a, f) => t(a.get, d[1], c, 0, b, f),
                b = a => {
                  d.p = 1, P.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(P, d[2], 0, 0, ((e, a, c) => e ? t(P.I, d[0], 0, e, r, c) : f()), 1)
            }
          }))
        }, (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (c, d) => {
            d || (d = []);
            var f = a[c];
            if (f || (f = a[c] = {}), !(d.indexOf(f) >= 0)) {
              if (d.push(f), e[c]) return e[c];
              P.o(P.S, c) || (P.S[c] = {});
              var t = P.S[c],
                r = "@rockstargames/sites-rockstargames",
                b = (e, a, c, d) => {
                  var f = t[e] = t[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : r > b.from)) && (f[a] = {
                    get: c,
                    from: r,
                    eager: !!d
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = P(e);
                    if (!f) return;
                    var t = e => e && e.init && e.init(P.S[c], d);
                    if (f.then) return n.push(f.then(t, a));
                    var r = t(f);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === c && (b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(9439), P.e(2229), P.e(4853), P.e(4813)]).then((() => () => P(19439))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(8284), P.e(2229), P.e(4853), P.e(97)]).then((() => () => P(8284))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(9577), P.e(2229), P.e(4853), P.e(7647)]).then((() => () => P(39577))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(3545), P.e(2229), P.e(4853), P.e(3321)]).then((() => () => P(43545))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(4445), P.e(2229), P.e(4853), P.e(8179)]).then((() => () => P(54445))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(5039), P.e(2229), P.e(4853), P.e(2141)]).then((() => () => P(85039))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(5766), P.e(2229), P.e(4853), P.e(856)]).then((() => () => P(15766))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(6002), P.e(2229), P.e(4853), P.e(5014)]).then((() => () => P(16002))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(459), P.e(2229), P.e(4853), P.e(3693)]).then((() => () => P(10459))))), b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(3365), P.e(8440), P.e(2229), P.e(4853), P.e(9612)]).then((() => () => P(58440))))), b("@foundry/icons", "3.5.9", (() => Promise.all([P.e(3365), P.e(1700), P.e(2229), P.e(4853), P.e(5954)]).then((() => () => P(81700))))), b("@foundry/icons", "4.0.2", (() => Promise.all([P.e(3365), P.e(1364), P.e(2229), P.e(4853), P.e(452)]).then((() => () => P(81364))))), b("@foundry/react-v1", "1.28.2", (() => Promise.all([P.e(3365), P.e(6035), P.e(4206), P.e(2475), P.e(2229), P.e(4853), P.e(4275)]).then((() => () => P(44206))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(2024), P.e(2229), P.e(1673)]).then((() => () => P(85950))))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(1201)]).then((() => () => P(71201))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(7868), P.e(1720), P.e(2229), P.e(9623), P.e(2246), P.e(5966), P.e(7344)]).then((() => () => P(66369))))), b("@rsgweb/router", "1.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(5162)]).then((() => () => P(42781))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([P.e(7868), P.e(8292), P.e(2229), P.e(4853), P.e(5966), P.e(9834), P.e(4281), P.e(2781)]).then((() => () => P(99834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(7868), P.e(2229), P.e(9623), P.e(2246), P.e(3855)]).then((() => () => P(17560))))), b("dompurify", "2.4.7", (() => P.e(561).then((() => () => P(20561))))), b("framer-motion", "7.10.3", (() => Promise.all([P.e(9235), P.e(2229), P.e(1299)]).then((() => () => P(19235))))), b("graphql", "16.10.0", (() => P.e(5440).then((() => () => P(55440))))), b("history", "4.10.1", (() => P.e(7642).then((() => () => P(7642))))), b("prop-types", "15.8.1", (() => P.e(2817).then((() => () => P(72817))))), b("react-adaptive-hooks", "0.0.8", (() => Promise.all([P.e(2229), P.e(3002)]).then((() => () => P(73002))))), b("react-device-detect", "2.2.3", (() => Promise.all([P.e(2158), P.e(2229)]).then((() => () => P(12158))))), b("react-dom", "18.2.0", (() => Promise.all([P.e(5794), P.e(2229)]).then((() => () => P(5794))))), b("react-focus-lock", "2.9.6", (() => Promise.all([P.e(9775), P.e(2229), P.e(7145), P.e(3035)]).then((() => () => P(19775))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([P.e(2229), P.e(6383)]).then((() => () => P(56383))))), b("react-intersection-observer", "9.13.1", (() => Promise.all([P.e(2229), P.e(5363)]).then((() => () => P(95363))))), b("react-router-dom", "6.17.0", (() => Promise.all([P.e(4255), P.e(6407), P.e(2229), P.e(3213)]).then((() => () => P(6407))))), b("react-router", "6.17.0", (() => Promise.all([P.e(4255), P.e(6612), P.e(2229)]).then((() => () => P(96612))))), b("react", "18.2.0", (() => P.e(3447).then((() => () => P(13447))))), o(62137), o(39247), o(71127), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251), o(25136)), n.length ? e[c] = Promise.all(n).then((() => e[c] = 1)) : e[c] = 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var c = a.getElementsByTagName("script");
            if (c.length)
              for (var d = c.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = c[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                c = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = c[1] ? a(c[1]) : [];
              return c[2] && (d.length++, d.push.apply(d, a(c[2]))), c[3] && (d.push([]), d.push.apply(d, a(c[3]))), d
            },
            a = (c, d) => {
              if (0 in c) {
                d = e(d);
                var f = c[0],
                  t = f < 0;
                t && (f = -f - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, s, i = b < c.length ? (typeof c[b])[0] : "";
                  if (r >= d.length || "o" == (s = (typeof(n = d[r]))[0])) return !o || ("u" == i ? b > f && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= f) {
                        if (n != c[b]) return !1
                      } else {
                        if (t ? n > c[b] : n < c[b]) return !1;
                        n != c[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < c.length; r++) {
                var h = c[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            c = (c, d, f) => {
              var t = c[d];
              return (d = Object.keys(t).reduce(((c, d) => !a(f, d) || c && !((a, c) => {
                a = e(a), c = e(c);
                for (var d = 0;;) {
                  if (d >= a.length) return d < c.length && "u" != (typeof c[d])[0];
                  var f = a[d],
                    t = (typeof f)[0];
                  if (d >= c.length) return "u" == t;
                  var r = c[d],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && f != r) return f < r;
                  d++
                }
              })(c, d) ? c : d), 0)) && t[d]
            },
            d = (e => function(a, c, d, f) {
              var t = P.I(a);
              return t && t.then ? t.then(e.bind(e, a, P.S[a], c, d, f)) : e(a, P.S[a], c, d, f)
            })(((e, a, d, f, t) => {
              var r = a && P.o(a, d) && c(a, d, f);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            f = {},
            t = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => P.e(3447).then((() => () => P(13447))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => P.e(5794).then((() => () => P(5794))))),
              336: () => d("default", "@foundry/icons", [1, 3], (() => P.e(9577).then((() => () => P(39577))))),
              13077: () => d("default", "@foundry/icons", [1, 3], (() => P.e(5766).then((() => () => P(15766))))),
              25384: () => d("default", "@foundry/icons", [1, 3], (() => P.e(3545).then((() => () => P(43545))))),
              35643: () => d("default", "@foundry/icons", [1, 3], (() => P.e(8440).then((() => () => P(58440))))),
              36550: () => d("default", "@foundry/icons", [1, 3], (() => P.e(5039).then((() => () => P(85039))))),
              38513: () => d("default", "@foundry/icons", [1, 3], (() => P.e(8284).then((() => () => P(8284))))),
              47773: () => d("default", "@foundry/icons", [1, 3], (() => P.e(1364).then((() => () => P(81364))))),
              52491: () => d("default", "@foundry/icons", [1, 3], (() => P.e(6002).then((() => () => P(16002))))),
              71326: () => d("default", "@foundry/icons", [1, 3], (() => P.e(4445).then((() => () => P(54445))))),
              77400: () => d("default", "@foundry/icons", [1, 3], (() => P.e(459).then((() => () => P(10459))))),
              81409: () => d("default", "@foundry/icons", [1, 3], (() => P.e(1700).then((() => () => P(81700))))),
              99790: () => d("default", "@foundry/icons", [1, 3], (() => P.e(9439).then((() => () => P(19439))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([P.e(4255), P.e(6407), P.e(3213)]).then((() => () => P(6407))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => P.e(5440).then((() => () => P(55440))))),
              28897: () => d("default", "react-device-detect", [1, 2, 2, 3], (() => P.e(2158).then((() => () => P(12158))))),
              94944: () => d("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => P.e(621).then((() => () => P(73002))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(9623), P.e(2246)]).then((() => () => P(17560))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(1720), P.e(9623), P.e(2246), P.e(4963)]).then((() => () => P(66369))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([P.e(2024), P.e(4054)]).then((() => () => P(85950))))),
              57145: () => d("default", "prop-types", [1, 15, 8, 1], (() => P.e(2817).then((() => () => P(72817))))),
              33213: () => d("default", "react-router", [1, 6, 11, 2], (() => P.e(6612).then((() => () => P(96612))))),
              90: () => d("default", "history", [1, 5, 3, 0], (() => P.e(5261).then((() => () => P(7642))))),
              55274: () => d("default", "@rsgweb/router", [1, "workspace:^"], (() => P.e(7543).then((() => () => P(42781))))),
              63582: () => d("default", "framer-motion", [1, 7, 5, 1], (() => P.e(9235).then((() => () => P(19235))))),
              95945: () => d("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([P.e(9775), P.e(7145)]).then((() => () => P(19775))))),
              87851: () => d("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(8764).then((() => () => P(56383))))),
              56840: () => d("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => Promise.all([P.e(4206), P.e(4275)]).then((() => () => P(44206))))),
              14463: () => d("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(7744).then((() => () => P(95363))))),
              2973: () => d("default", "dompurify", [1, 2, 4, 1], (() => P.e(561).then((() => () => P(20561))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([P.e(8292), P.e(9834)]).then((() => () => P(99834))))),
              90582: () => d("default", "@rsgweb/modules-core-screenshot-viewer", [1, "workspace:^"], (() => P.e(3582).then((() => () => P(71201)))))
            },
            r = {
              40: [92440],
              220: [14463],
              582: [90582],
              2229: [62229],
              2246: [16565, 28897, 94944],
              2973: [2973],
              3213: [33213],
              4275: [336, 13077, 25384, 35643, 36550, 38513, 47773, 52491, 71326, 77400, 81409, 99790],
              4281: [2918, 81788],
              4459: [56840],
              4853: [44853],
              5388: [90, 55274, 63582, 95945],
              5966: [95966],
              7145: [57145],
              7851: [87851],
              9623: [9623]
            },
            b = {};
          P.f.consumes = (e, a) => {
            P.o(r, e) && r[e].forEach((e => {
              if (P.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var c = a => {
                  f[e] = 0, P.m[e] = c => {
                    delete P.c[e], c.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete f[e], P.m[e] = c => {
                    throw delete P.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(f[e] = r.then(c).catch(d)) : c(r)
                } catch (e) {
                  d(e)
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
            var d = P.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) c.push(d[2]);
              else if (/^(2(229|405|973)|3(137|213|326|416)|4(275|281|459|853)|5(202|82|966)|7(145|538|851)|1626|6766|8778|8987|9147|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((c, f) => d = e[a] = [c, f]));
              c.push(d[2] = f);
              var t = P.p + P.u(a),
                r = new Error;
              P.l(t, (c => {
                if (P.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var f = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + f + ": " + t + ")", r.name = "ChunkLoadError", r.type = f, r.request = t, d[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, c) => {
              var d, f, t = c[0],
                r = c[1],
                b = c[2],
                o = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (d in r) P.o(r, d) && (P.m[d] = r[d]);
                b && b(P)
              }
              for (a && a(c); o < t.length; o++) f = t[o], P.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            c = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })(), P.nc = void 0, P(45408), P(95400)
      })())
    }
  }
}));