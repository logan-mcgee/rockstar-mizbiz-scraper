! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b1d7cbc3-fad2-4dc6-a705-7091382af740", e._sentryDebugIdIdentifier = "sentry-dbid-b1d7cbc3-fad2-4dc6-a705-7091382af740")
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
          40: "d8fce1e6d9b56c0fa28487c917b108d6",
          131: "8803d9bb8d7046bf02fae160c70bfc5b",
          220: "669495e40d9ddca67be13efe186bacd5",
          278: "e6678a37973ea29b537c8e1bebe20ac4",
          299: "9ec69a11f08f855ee4238460cc61cabe",
          314: "53f59fac09a3a7f2b188483df610c32d",
          377: "0a79bd7854bac3a40fc5cf51212f3322",
          561: "267e53d86c94a85fb54d3a1ebb615ec0",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          621: "cb32ce9561231082a50ae13f2e2019a8",
          633: "888a00b266d3e668ccb04fc16aae8514",
          662: "3dab0bae072a7410d4a5a8f3ee91e250",
          721: "c2d4b92d171bab746630407ea3d5e847",
          824: "6f6b7fdb213e05586cadb0f9a79af2c2",
          888: "38fafdfcdc0969ce967eb5ad193482c8",
          907: "5033b6ed1d6fef01b469a1d6aab24025",
          969: "b9ddd5fabf4c6db082ad9778b9f63410",
          1054: "99a119bde3fcd3b009af781e682a0de4",
          1144: "e28215fac85d5d67566f1c2ba9b91440",
          1201: "96d744a0e5406444c6a0311eafd9cd3a",
          1212: "97a65b2f00766ab78d7bf4eade4a7843",
          1235: "1e3965a906a260a7155356bf460aa86c",
          1242: "07aad29c5c01bdcd1a4446495467844a",
          1299: "e6173693106801cc197a0ed7b48e27b9",
          1409: "60e7029e887425aba9d240f91bf4fb48",
          1607: "3b265a3cd70bd6533cd9c879600ce2b0",
          1626: "1a821a20005818702c8126fb54dfe381",
          1673: "f9ea933329166d035534adcc501f490f",
          1720: "2bdbcfd50494328755df9905fc80ccc8",
          1723: "b866ea74b69c8353e2a4be2c48a0786a",
          1735: "b3bdd9ccd149907674089eb54823b7ad",
          1794: "819e06fe102215f1c7e13a4f6e1c5a1c",
          1822: "8155ff836ad7127a8064b1d5148a5140",
          1868: "7068887c1a769d681f4e27315b671218",
          2024: "1124bceb0d1c6c90eae06501b08df12b",
          2156: "8fff2e027549527e6291fe08c058e651",
          2158: "c362b337f08228c0f440ef488bd5d488",
          2171: "90fc5b5abad0469df49836b831c6bc54",
          2185: "943dc76e52ee91cab5eab68876b07502",
          2202: "84657e2bd7c0023054eaae7c53d1478c",
          2221: "59e718eef0f092fa11f15f27b520b34a",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2234: "3c18c3c8f0f6856df3151b485d694e54",
          2243: "c31dfa59dab4b2e6fe2b216f84ad7511",
          2246: "67578fc33fcc429ceea8921bba81b8ed",
          2347: "9b31c7f14a86606b404149e3ea0cbc6f",
          2365: "b95c520669b1229cf28aceb5f749d249",
          2398: "82e394892f85ee5a9d7af95384ed4b3c",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2466: "bca20567f549c34a355d193ba8ffd5bc",
          2642: "26503bd40f7a5029921c4061e7a397f7",
          2678: "822dcdedf9ffc0ff6c985563dee4ae35",
          2681: "77d04870751743c4a31a49d1bac849ef",
          2718: "2d72e9f4acd83d32ee8b6b2489202780",
          2781: "4fc74e9f3511dc6dc804634098fff1a3",
          2817: "c61aab4ea0ef92aa3b4b91f774e991f5",
          2824: "fe2117461c985b39171211d5c28d1456",
          2843: "e7111965b3d6d4ee0d0f9dc72c4f1d3a",
          2864: "6b614b8cbb709ea3690fa20ccef99038",
          2941: "255119c569acedad316b26dc882d8c55",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3002: "6fa1507d1d8a60b556ee538e9a0def07",
          3034: "19c9363658df64f97bc24d044a4d873d",
          3035: "6724783275a31a0102e15052ae941cdc",
          3037: "2bcea8e2523bc2467c3adb05f2d5ad72",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "e5de293625363b1a58a10665ed8b26dd",
          3213: "205fe2929653424fc55178dfd74464d8",
          3274: "31c90244f836216e77ec815110a4df71",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "fc3943ecc18fa20bdfa296543744091b",
          3370: "d21ba52515418b7907eae3b1c4e71ad9",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3447: "41225dc23bed79c45e2502f2c0bf7d61",
          3475: "b36d14aa961172402f90c0b0eab5c736",
          3476: "bfb90e63742c92532c55287f8a50e7ac",
          3486: "187312232fd5f97a7008b8cb45d17a8b",
          3511: "0b6f9011767261d415d1bf19db7adbc6",
          3582: "bd3a26da4c0e157551d3762cef31f46d",
          3622: "fe50a9eddbf6f7e18427a2b15e3cbf74",
          3697: "ac3a256b0d0c8cc2ef1434e608880c96",
          3733: "fd301b65ad5d936fc0d2bd7b9fd95731",
          3806: "742c229a930518c488e77086f6949a17",
          3855: "ac0d52aa9a2254fca70020aae026a0df",
          3885: "734c8674306880972f9b25c6918ca034",
          3914: "656ef3cc3e98cfc98706053770afeba6",
          3941: "489bef637453eb47adb486099a37f8d8",
          4011: "859cbb84425781a750852f226042af40",
          4054: "be399fa07c43817a59fd12134bdda5d2",
          4186: "b164ffca33cfc7a397cc602c8eded07b",
          4220: "e3fbd572d92b5d9f0f272923340431c3",
          4255: "a09d54e8d7e2f71aab868397657e8866",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4505: "156a785ba47212c815d33b87e52b3813",
          4514: "04962581e24b56d6e76c6e29893ca911",
          4528: "6ac7aafec7b82be9414ffe2757eb1f87",
          4621: "b1fab95aaca15413faee9ef7279251ec",
          4700: "52f1b20b4bad6647c02baa16e3aed97b",
          4710: "72074131bd2306cb61182b890f7d0b64",
          4731: "e4bfae083ea57e806300d700abb43676",
          4783: "7ca6053d5fd9bcbf173c37a6d574e714",
          4799: "a0f5ba108e475d630fe0aae7b52ec509",
          4841: "f5939c1243db5a5288ce894a12994506",
          4851: "b13c0889205d9227ec383335938c5b7c",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "eb96f249d73aa56d58cade70aa2fb36c",
          4913: "00cf1e719fcb980caf79a7fe7c1d5e47",
          4963: "2e4c391f95821c9edcb4006282e217a0",
          4967: "0cf3a2c71ff4a6e23d3eced21105218e",
          5018: "8eac6fb7b426371582bb7f8901bfb048",
          5045: "ad82356c5255534c42847255eab16da1",
          5162: "43fce7384ee9cd9be2acc9c2121ed299",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5233: "f3488c5a2da8ac1ddc53e42c03badd00",
          5247: "b7125423859c780013f57d4bb7986614",
          5254: "67de328b060e069d2c3b8144859e27b1",
          5259: "86b9e8167dc86f4a26c664b8b928bb6b",
          5261: "e39cb112e91823c07ddd43103ae079cb",
          5363: "39b8f394f057088974cb9a5214d344d6",
          5388: "562bdb63ce29122b2bae0e2c891646d0",
          5440: "35e511d305c3ca7e305871e2b203abda",
          5442: "4e7dbc2ab4bfa412ef605ba2fda3596a",
          5499: "7f7424e31e01c284c6737b79a32ae566",
          5530: "363394d1d7fb3426b2644d7da951f7d9",
          5620: "bba6628bed50910e589a7d54a8c3538b",
          5633: "7bc191e8c77c5b5c0638167769f785e2",
          5639: "cc07d0b27c98482169f04b97f1bf4a9a",
          5652: "ea1810183d8f3ef411618c6e104eefdb",
          5663: "4d078696e316bcd503a0c303f99e4a4e",
          5672: "4af80e52edbd2730ce2fe0e4aa2d1e03",
          5742: "6452b4ca3916957b5d54993dae66d412",
          5765: "727dd997c3cb827d7c8524f5a977a7ce",
          5794: "14854d787a265d2e19add7fea463da90",
          5830: "d1e2a095925fbfe4a73527e79eea3ee7",
          5832: "4af990f0197224ddcc9a9bf90ae37cc8",
          5881: "7ad2b478ad031a2d863468787873f3e4",
          5918: "5ca8e8e09af1e8de1c71e99a6eb7a2b9",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5981: "8c42e31824fc09ba5805fdffec2e1bde",
          6035: "4adf3f0c05d7d177cf704c54a8d2753d",
          6267: "e302c461b3560a08ca3542df3e241e2a",
          6274: "3a0c1bf1d08410cc500e7b0c0908d635",
          6280: "c940701c508b9dc15b10ffbf4c3543c5",
          6285: "edf3887f85a5767da45c9f9c849f8fd4",
          6361: "136d237eb90a849e6e1f0051b9d4d016",
          6383: "0225175538174282181ea4f4890c0d2f",
          6401: "9133c81bcbd690749c2733768c64a1ff",
          6407: "d717943c9604ab9795a93a172acb445c",
          6612: "969bf58eaf6ace9768a2b0d2ab831c8c",
          6664: "336645ee1365e9ec788a8eb41ca68f24",
          6711: "9d0f4668f763e10d76e3f45ccc8dc57c",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6840: "a732d7e376e52125094aa38f83a939b8",
          6879: "41e83b9f40f72eb342f62f45963176f5",
          6891: "0585814f18ab3f5163851a71b8422a57",
          6893: "9ccad98bcf6857210dbd4aee3e57cfed",
          6940: "b8d0306e9b4dc4ae5ee9064bbe1224f8",
          6973: "af5083220a9462672b44bdbc794a4d70",
          6997: "ff18bf9a061133769d7b8610c8ac31fa",
          7010: "b0bf1d7e8323bd0a13d4adf516ea9b97",
          7039: "d7b2023145ccc6068dcf14a99059518c",
          7057: "278c31e8ce43c0fc7e5bd60367e5c710",
          7073: "476a31ed932446a9f1df437a4d7f216c",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7214: "a3569f35804d91fcdee3cc23dd74aea2",
          7269: "be34b3b19b2225e107bab9f9225afe0f",
          7344: "e20c01babd2b4333c5012f2f9f63fa82",
          7436: "447f32cf8323ec33472bcaf0f8ff6d0e",
          7452: "eb53779516b4c992a6705048ae6115b3",
          7453: "89fb482036b6de4bb8885ad78f14f24a",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7547: "dc16d2f08e9e5c14ab739ab776e6e652",
          7575: "d56ba30d710a45b1226999dc486529fb",
          7587: "bb650123df58b667a137753b4679e43d",
          7642: "accbe96d9106e6ef673a48528dd7341b",
          7744: "a15ef8cb0ea1d80fed01321d4157aa11",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7970: "521623c7ff4e0fcf0360f93a9c87d387",
          8069: "cc685ede9508f33acd6858952bb9cdda",
          8272: "f2c195324a446dd71d7cd5a756319098",
          8292: "3ab053e6cd6b3d60605052b730fd63fd",
          8386: "f4908fc8892a7a7167f5ee395030ab41",
          8391: "04e48366b18a8b34875e96948ca14906",
          8447: "dc2b9873b234647159398857596d3468",
          8755: "4b015742cab6f002ad66a9cc87b2ae7f",
          8764: "26a8b6817c78187e40ea0a72289be432",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8786: "4263b618af729f1547dfb16ed69e11fa",
          8880: "c375929726bab3858c9559251d484329",
          8970: "4f8951261815a9ac6f38c7ec0eff69b2",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "1b51555727d7cf996421ee204ca3de59",
          9028: "d0c40a111479491ae4b1025f806d87ae",
          9081: "eb275f5c0f920469b44cce06514c7281",
          9126: "0ac342c9bc7b2c528a8d53f8e215d02e",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9154: "1c42d2982e5e4d9247b98e8e394ab730",
          9235: "10446d5aa8dfd8cf26b0cf8ea0195ce5",
          9323: "c735cd428c36a8a6929c2427bdda83ae",
          9377: "38c1f177c5795f69367844c8117eb64e",
          9474: "2f58cce30092d3ebabaeae12b42e6150",
          9615: "4b9c0c235bdba1eadcf83807af583b9e",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9642: "34e3efe121ff62eabec567694b6f1952",
          9775: "22650bb1d10b17fd14613ca4308b968a",
          9834: "cf13e3d07ef9a6a5443781b9b6d25fb2",
          9936: "b5a227c56310425a045f508a615fefbc",
          9990: "6d98ea8715f3871b87dd7cbbeb6c93cd"
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