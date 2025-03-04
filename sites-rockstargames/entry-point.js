! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b0b922ab-25f4-42d2-a731-b8fa578cfc8c", e._sentryDebugIdIdentifier = "sentry-dbid-b0b922ab-25f4-42d2-a731-b8fa578cfc8c")
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
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], (function(e, a) {
  var f = {},
    d = {},
    c = {},
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
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
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
        f[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
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
            49293: (e, a, f) => {
              (0, f(31789).w)(1)
            },
            31789: (e, a, f) => {
              const d = f(90569).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            23358: (e, a, f) => {
              f(49293)
            },
            90569: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, c = 0, t = d.length; c !== a && t >= 0;) "/" === d[--t] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var r = d.slice(0, t + 1);
                return f.protocol + "//" + f.host + r
              };
              Number.isInteger
            },
            95400: (e, a, f) => {
              "use strict";
              var d = {
                  "./bootstrap": () => f.e(7902).then((() => () => f(37902)))
                },
                c = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                t = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      c = f.S[d];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => c,
                init: () => t
              })
            },
            62137: e => {
              "use strict";
              e.exports = f
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            66819: e => {
              "use strict";
              e.exports = t
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            98674: e => {
              "use strict";
              e.exports = b
            },
            71127: e => {
              "use strict";
              e.exports = o
            },
            11955: e => {
              "use strict";
              e.exports = n
            },
            58678: e => {
              "use strict";
              e.exports = s
            },
            94316: e => {
              "use strict";
              e.exports = i
            },
            40308: e => {
              "use strict";
              e.exports = l
            },
            40041: e => {
              "use strict";
              e.exports = u
            },
            50644: e => {
              "use strict";
              e.exports = h
            },
            74251: e => {
              "use strict";
              e.exports = p
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var f = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(f.exports, f, f.exports, P), f.loaded = !0, f.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, m = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var c = {};
          e = e || [null, m({}), m([]), m(m)];
          for (var t = 2 & f && a;
            "object" == typeof t && !~e.indexOf(t); t = m(t)) Object.getOwnPropertyNames(t).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, P.d(d, c), d
        }, P.d = (e, a) => {
          for (var f in a) P.o(a, f) && !P.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, f) => (P.f[f](e, a), a)), [])), P.u = e => "js/" + {
          131: "75e1fe9412d59011400713886ba78d6c",
          147: "6acdc9d18d2dba2d319132210b73b11c",
          176: "07f338f370fef8d0e2c01288a48b042e",
          227: "fb58de827a76ed5b9d8260b48b6be339",
          278: "ced828ed708a83b63a292fd985aa8cb6",
          299: "deabaecedc135ce2fd5b99af4932ed76",
          314: "007dc52760f603aefbbd0173ad8e0736",
          324: "5f5bf594f7d42ca9d8c3fb93b51e1acb",
          541: "8ab683bb2b189724a7c2134aaa572b0f",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          662: "c7cc9cdf89af72e65db7b323b9aa5895",
          707: "d04bf0633d6939725dee72f35868cc82",
          824: "53e94644ef99ec06975b701dbf681ff3",
          907: "409c64c753dbbe44d6f2cf25366e55c6",
          954: "53fbbdc7e1b84f7b56d706deca312e02",
          974: "0f20f7e7a6fd8f19a3d4491ce9939063",
          1029: "c4fe69499f1a22ae377c7251169976ac",
          1054: "21d6b3f98a2388f7439523866dc73ba4",
          1095: "6d158ee61d9df2941004adb69b85e049",
          1242: "9b7d97aeb4f4d527f22f2cf281ed8dd8",
          1271: "4a0d5b0d2386752628eb0d31b5edd730",
          1278: "b5fdd514720f81f0cced29898f027d16",
          1325: "8e983379407575f63b4ea542636bb5f5",
          1409: "60e7029e887425aba9d240f91bf4fb48",
          1515: "428eaaa3c72df24d42eda13682d4fc9d",
          1544: "3b0fa6e42ca8117368af1c33a7de675b",
          1554: "d534087573a0c88ac15c78845ddf5f1b",
          1594: "fba1e4b98ef801748c9904f0d621c731",
          1626: "1a821a20005818702c8126fb54dfe381",
          1739: "5223a7547ad04d4e591c330349533038",
          1822: "5552e9f96db335e0ef50fdca3ef0cc5e",
          1868: "3efd96591b06376dc1c100f7d7dd0023",
          1885: "e0d08f5c797241e018e3d3a25aa0a48c",
          1973: "787b1eb82fb91c9b364301e7aad6535f",
          2156: "8c9c5a1aba98232c2e3ffc0f7a85709c",
          2171: "dfaae90684706bdd895a8303b985f10d",
          2209: "e802b11d508e8c06a2dd14038286b4d1",
          2221: "9aa0acbc7add6566f3d4dbd65071e693",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2243: "01c5e65fd83f74565e0712de884f1a5e",
          2347: "73f5549e60e334a8e8df0bf075b713b5",
          2365: "633d3482ffb49b5d3affaac4b2210eab",
          2398: "429d1cb1d2a5ac06ba429248fdfa1011",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2457: "036301b027ca72948119efdeb884011c",
          2466: "3bc0c445f65e3d7918b3d25b14184210",
          2642: "2c1ccb0db402f4b5eb0195c7f4201f6e",
          2678: "bb0b7f3e5fcae543d6e9b26876b14167",
          2749: "0bb6cbe6fa0659a860de53ceee2ecc1e",
          2828: "bf37116de5965935ae25c676d3ba9fb9",
          2864: "b34ec39b17818a235d037ec03680d8aa",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3034: "3f05f39513a1258dc405378f756350aa",
          3082: "ad9b0e674f6090b2dd0983f77a2c1f10",
          3112: "9f8185178983b3661443cc85618f5302",
          3131: "d9ea8732e3560903beb5885e5736236e",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "9047c11ab1b7667f4c27fb415868a618",
          3213: "205fe2929653424fc55178dfd74464d8",
          3217: "b98527e8d6acc031f73a997d8f07ffeb",
          3227: "5efaad29feac4306163a16870344d3bf",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "04aca6949e2d6ed1fc758364ceef3bc4",
          3360: "4a4e9295ca92a44e00fb819035f9ea09",
          3370: "a82ce13c838ce411246ede505e7de22b",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3455: "add07948c49b170ebe32096cbf44fe79",
          3457: "8b5e0ed23d869cb6a30d9d3f9be1a722",
          3461: "ec44479cef107438ea8e5bf0fba8c105",
          3475: "0ea665294d4a0aec33fb7ceb214c24ae",
          3486: "1f1d617a117ae76e857d1ebdfa469546",
          3697: "988bb9f0b831cb98c9275eef25d8f4a3",
          3701: "a8f84f10c9d0e3617427666543b3573c",
          3759: "1b6fe2e27b9a15e8258da277a72ad2bc",
          3885: "4c024541ca8f5c383342350c3142810d",
          3891: "311537480317e6ab0a61eaedbf984de2",
          3941: "879a0e32eb8acaf5080fed57030f5d3d",
          3954: "6fd39eda099fe5f09e868f3924cc0c2f",
          4011: "989f77bee836933d7f5d50adfbf83d5b",
          4123: "360bbc5f4779af39313ffa6757898302",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4323: "36f2f21ae6f97a3d53c820709968740a",
          4448: "5448071e2d35a3114c539ddec0996257",
          4466: "712be7e827785149e1b36db4a6bb88fd",
          4499: "7f3a648836200f965ad5b65f51376850",
          4528: "ad50f43d4e60016605961872d435770f",
          4621: "7dd115c9b17caf8514042614c13f10e8",
          4680: "65985526e164ce8c8b78f8bb8239c156",
          4700: "ee7bdafc62b20b383a8b6ae6abffb1a7",
          4710: "55b3745e31b31430653369d16780797c",
          4731: "50b0b41d5ee9d6dc3ab8209ce47ad9b7",
          4771: "eb6bc31c0c32481d29960a00d7465ca2",
          4799: "11de2496c395824ad4476304d947d650",
          4838: "a0315310a290480e027c327bc4726a2d",
          4851: "a42569a9150f6f80c115bce476b362d7",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "9557489aa2a151c38e44fce3254c0d6e",
          4913: "b296ad4f3aea1ef21bb8f7add716444d",
          5018: "e5e9f9f8d1b338ce04dc67be42c49873",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5219: "f29731f5c768c6d6197b5a39ddbb87b8",
          5233: "543246a284b13596a0280e33ce7c9002",
          5259: "1f7fd548111880bf6be8c172e91bc27e",
          5309: "18487f8efe585391d999d4f616283116",
          5409: "e87532233519fdcb94748f9b35113c7b",
          5483: "f348f72322dfc4c7963bfb9c636708de",
          5523: "4a7989c0c99f3621cf5c1d3f0d1386ce",
          5530: "d8322bda6c81a6f275d2676705acbd86",
          5639: "36dad275f09e82e21dc1620d5e5bfd68",
          5663: "507badcab96c62a0c9261f83282061ac",
          5742: "d4807b238a070cd3279637181f694d77",
          5830: "a15d774f5827afc5e9f21341d1f2c795",
          5832: "05dcb43ae82fcb78d470a719c41525c3",
          5836: "22394272a88140bdb377f3498f9be13d",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5976: "d1edcc41bc18f0bd669f65309064eb2a",
          6039: "d43ce022a07925a2cf12a31615ed86d0",
          6095: "102518f4da331854893238b9bc0f224f",
          6267: "10179f46158aeae73dfe36f4df718749",
          6280: "01c37ced309722959da6891b2f4fd8c8",
          6285: "b0c7fb7dfed0e864cbdde7367e3c9010",
          6286: "10500980e7ddc6ed92e6284cfe5191c5",
          6304: "08521bcbeec41a4813b97504f6b3eb7f",
          6361: "6a7763816089db1fe0f48fec6e9da3a3",
          6504: "63043ab806fa766d3c3002af704b24e0",
          6521: "36b42a90a21ae8bd28c5875e4b2093ac",
          6664: "1e0bfbec81c8dacee9be5d15880958ba",
          6711: "9d0f4668f763e10d76e3f45ccc8dc57c",
          6723: "6525402d66f30172fbb31ea14bb0edf5",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6773: "f8dd22c412e052e4483b50e1cd88fc97",
          6832: "380718aadeee5d7abc300cc77fad9c3b",
          6850: "797f6bed24d7f3ff321319de9bdf7905",
          6864: "552934da45fb00d476384457dfbacd1e",
          6879: "14d857798b229ace18e7513e6c5f1f97",
          6891: "5bd55c3cc50c7979e1212696a0436bf4",
          6942: "c4f087d9b78754431fe9905e7300d1e9",
          6958: "513a6106ef32a4fc41337ce34cb37a6e",
          6997: "4ef54dfca64a99c757009e40a21e5126",
          7010: "15f4fa37db0b21e0c71451289d664f6c",
          7064: "da2ad5262d826471fa67c03be46a2b96",
          7070: "15bbd6b05fd42d31ee748dd3bbb09c2f",
          7073: "a98965df587ca2de99c975a55253274f",
          7094: "e15af16e6d39d0d9fefb5f65afa90867",
          7120: "4ea1a8d8bba1a72f244d846fd7fc24ac",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7360: "46277230866081db0af80e787d843fd6",
          7436: "646b23e2163752734af4d91bcc9d81b3",
          7449: "e56f901c47f4e21e97f1b3ae422715d0",
          7452: "bb49f86ec09dd34a0216c6d96f8c5d23",
          7453: "36c50ff6708805b2159c895b496c14d4",
          7507: "21ec6dd8a438066a76864353d7754bf9",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7599: "c7a7a63e1e968ea0e053dd45c34b199e",
          7600: "1064a040bc87b5afb97a9deedafcc2ae",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7902: "6933e63784c2bd065a8e9ceda4988e7f",
          7904: "08949ee0b3beec7c94d40f0fc3bd8211",
          7912: "c6b3695ca66f2c263ff1abe588c06c53",
          7970: "7bc68ccd07dc93b06a37c559cc40b2f1",
          7992: "2d88bbd1313e7befa6c8b32ecd6d3f96",
          8077: "e16fe6fffc7a275ff2c08043a2395a08",
          8165: "2e75da6fa76d7efdf464b802aa365f11",
          8272: "1e66c304009723158a17f93315c37fe0",
          8391: "f6f8f621f622801fea591b50c5a2b76b",
          8476: "d31ebf1ed21ee665517ebf3e8b7bfd89",
          8496: "908e53ae3ae01c9ffc501cb7389d1478",
          8593: "26cc1de34e75cfad8a55d6ef300a432b",
          8595: "6abe8fc560ef800e63c0be1031925b30",
          8755: "8bb130bb0ad74a5cd75e3418354b3d39",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8781: "851c6d838742992ad396ea4879899493",
          8817: "5d03359bb8f9f3363552c152728f44e2",
          8853: "29d35de10ceb60e6907cb543cc149a5c",
          8880: "9e79fbfdb4e503c65c0f45e53fb541fb",
          8970: "8966aa5dc7f1575448c31e543c7c362e",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "21328cfd8f668786eeb04ddef053498f",
          9028: "dcfc027512c346322b718b98cf349394",
          9031: "d6ac890e1f647e227e7859b4e5faa92d",
          9053: "8a885fe6677d1f7e0596f0cc5b4d5980",
          9126: "d9adc523f202efda58773a51882c6f87",
          9130: "f16d60df1dc7ea7a26f3f93316c2dcb1",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9157: "af1e03334fcb17607fb529f2f4a27c62",
          9253: "f8e6f86bed536647d9933c924cd08ee6",
          9292: "2226e4a8222a24bbd28e7a4a3668d934",
          9377: "475652aacbf8e55371844a409fdc899c",
          9379: "b442557e8dfce4d2d3eadfbe3d5a2a0e",
          9550: "ce664c42728bd6a11780157f14558b88",
          9572: "1a9b9e2a88f66e0b70e06a69f8a55c28",
          9615: "496a6b2d89df0781b6123904fba114b8",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9641: "1fb5feedc8ffbdcf799b0b126e339921",
          9747: "88426862cf7533c68da3b0c1677ffa57",
          9830: "c9232ba8aa7f48b4a81ae6993b5e970d",
          9931: "96b541b9008b221d9bde0093f3a3f850",
          9936: "a068e6b3970504c384c782e09ee35cd2",
          9980: "07e02cae9aaa8be8bf8cb6f7fcc816a6",
          9990: "7da898252f00124da21849cc498b782c"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          147: "17aa9a721b88917c56aa79b8ce96cd2f",
          176: "c0b2e46658c53e88eda32ca56151c5b1",
          227: "5b645a782b9899ecf038b42269f9534d",
          324: "1ef2912adaf2aa074b043e5f6599802f",
          1325: "071cc98fed939b12a1345c71ee2e5bcd",
          1554: "5a1bac0da265ecf3b269d6332115a3de",
          1739: "1187f3d3a4fcdb76105c02a4f7dd2b76",
          1885: "54f32ecf9b0397bd4895491fe306f358",
          3227: "eea652eec64b58d96e6ec3de5d5abae8",
          3701: "1b78d4fe05a5f12236b67224cf939aae",
          4323: "5a1bac0da265ecf3b269d6332115a3de",
          4466: "298edb9e85047d1bb18bd8360ad7342c",
          4680: "4a92c5d46bdca58e27e8b0a01d7c4234",
          5976: "00da2e0e23a224264b47c1039da843d4",
          6039: "70bc1fbd11e73652370736c262a8a796",
          6095: "eee6e9f0ed632fce1325de4b9e936e9d",
          6773: "15dd0a7ff3e3579f8a4fc017c22dff4c",
          6850: "000aebb26d91ae00487d6997b3d6336b",
          6958: "81d4d30c047a175085fcf06a4ba09ad7",
          7094: "f89fb58a29c4621d9388b43938d564c1",
          7449: "103081b3d23c2e415ff7fd2af7854845",
          7992: "68615b6d76c9d6811f25bc01250cf04c",
          8077: "98d23b75063c6f4bd124a578da69a74f",
          8165: "c864a4af6fde9566ac7f8bf0674ddf87",
          8476: "eee6e9f0ed632fce1325de4b9e936e9d",
          8817: "d73def8d8efb8b8dae346d57ea59ba03",
          8853: "144813c8a1b279a1aa2f315dad7784b9",
          9053: "d86f4cfbf21adeea2a84d3cfa7db5dd8",
          9379: "44f703426b1bd090467c9d6bf61ef888",
          9641: "c49f00cfdd3d2e750a4b38f8849c73e1",
          9747: "79762bc6ff388b081426d466f2d3859b",
          9830: "103081b3d23c2e415ff7fd2af7854845"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), g = {}, y = "@rockstargames/sites-rockstargames:", P.l = (e, a, f, d) => {
          if (g[e]) g[e].push(a);
          else {
            var c, t;
            if (void 0 !== f)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == y + f) {
                  c = o;
                  break
                }
              }
            c || (t = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, P.nc && c.setAttribute("nonce", P.nc), c.setAttribute("data-webpack", y + f), c.src = e), g[e] = [a];
            var n = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var d = g[e];
                if (delete g[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(f))), a) return a(f)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = n.bind(null, c.onerror), c.onload = n.bind(null, c.onload), t && document.head.appendChild(c)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), v = {
          1626: [41626],
          2405: [12405],
          3137: [53137],
          3227: [39848, 41263],
          3326: [43326],
          3416: [33416],
          5202: [35202],
          6039: [31879],
          6766: [36766],
          6773: [94057],
          7538: [47538],
          8778: [78778],
          8781: [9566],
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
            var f = P.R;
            f || (f = []);
            var d = w[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), P.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                t = (e, f, t, r, b, o) => {
                  try {
                    var n = e(f, t);
                    if (!n || !n.then) return b(n, r, o);
                    var s = n.then((e => b(e, r)), c);
                    if (!o) return s;
                    a.push(d.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                r = (e, a, c) => t(a.get, d[1], f, 0, b, c),
                b = a => {
                  d.p = 1, P.m[e] = e => {
                    e.exports = a()
                  }
                };
              t(P, d[2], 0, 0, ((e, a, f) => e ? t(P.I, d[0], 0, e, r, f) : c()), 1)
            }
          }))
        }, (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (f, d) => {
            d || (d = []);
            var c = a[f];
            if (c || (c = a[f] = {}), !(d.indexOf(c) >= 0)) {
              if (d.push(c), e[f]) return e[f];
              P.o(P.S, f) || (P.S[f] = {});
              var t = P.S[f],
                r = "@rockstargames/sites-rockstargames",
                b = (e, a, f, d) => {
                  var c = t[e] = t[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : r > b.from)) && (c[a] = {
                    get: f,
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
                    var c = P(e);
                    if (!c) return;
                    var t = e => e && e.init && e.init(P.S[f], d);
                    if (c.then) return n.push(c.then(t, a));
                    var r = t(c);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === f && (b("@foundry/icons", "3.5.9", (() => Promise.all([P.e(7120), P.e(3082), P.e(2229), P.e(4853), P.e(4323)]).then((() => () => P(3082))))), b("@foundry/react", "1.25.4", (() => Promise.all([P.e(1271), P.e(7120), P.e(227), P.e(147), P.e(2229), P.e(4853), P.e(1409), P.e(1029)]).then((() => () => P(50227))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(5483), P.e(2229), P.e(5219)]).then((() => () => P(87768))))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(6095)]).then((() => () => P(66095))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(1271), P.e(8496), P.e(6942), P.e(1095), P.e(2229), P.e(9623), P.e(3457), P.e(5966), P.e(5523)]).then((() => () => P(7607))))), b("@rsgweb/router", "1.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(6504)]).then((() => () => P(34123))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([P.e(6942), P.e(4448), P.e(2229), P.e(4853), P.e(5966), P.e(7064), P.e(4281), P.e(9830)]).then((() => () => P(57064))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(1271), P.e(8496), P.e(6942), P.e(2229), P.e(9623), P.e(3457)]).then((() => () => P(30181))))), b("dompurify", "2.4.7", (() => P.e(1515).then((() => () => P(21515))))), b("framer-motion", "7.10.3", (() => Promise.all([P.e(9931), P.e(2229), P.e(3461)]).then((() => () => P(69931))))), b("graphql", "16.10.0", (() => P.e(6286).then((() => () => P(26286))))), b("history", "4.10.1", (() => P.e(5836).then((() => () => P(75836))))), b("prop-types", "15.8.1", (() => P.e(6723).then((() => () => P(76723))))), b("react-adaptive-hooks", "0.0.8", (() => Promise.all([P.e(2229), P.e(9980)]).then((() => () => P(19980))))), b("react-device-detect", "2.2.3", (() => Promise.all([P.e(1544), P.e(2229)]).then((() => () => P(91544))))), b("react-dom", "18.2.0", (() => Promise.all([P.e(7360), P.e(2229)]).then((() => () => P(57360))))), b("react-focus-lock", "2.9.6", (() => Promise.all([P.e(9253), P.e(2229), P.e(7145), P.e(7507)]).then((() => () => P(59253))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([P.e(2229), P.e(2457)]).then((() => () => P(42457))))), b("react-intersection-observer", "9.13.1", (() => Promise.all([P.e(2229), P.e(8593)]).then((() => () => P(38593))))), b("react-router-dom", "6.17.0", (() => Promise.all([P.e(1973), P.e(2209), P.e(2229), P.e(3213)]).then((() => () => P(62209))))), b("react-router", "6.17.0", (() => Promise.all([P.e(1973), P.e(1594), P.e(2229)]).then((() => () => P(81594))))), b("react", "18.2.0", (() => P.e(3217).then((() => () => P(23217))))), o(62137), o(39247), o(71127), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251), o(25136)), n.length ? e[f] = Promise.all(n).then((() => e[f] = 1)) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (f, d) => {
              if (0 in f) {
                d = e(d);
                var c = f[0],
                  t = c < 0;
                t && (c = -c - 1);
                for (var r = 0, b = 1, o = !0;; b++, r++) {
                  var n, s, i = b < f.length ? (typeof f[b])[0] : "";
                  if (r >= d.length || "o" == (s = (typeof(n = d[r]))[0])) return !o || ("u" == i ? b > c && !t : "" == i != t);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (b <= c) {
                        if (n != f[b]) return !1
                      } else {
                        if (t ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (t || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || s < i != t) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < f.length; r++) {
                var h = f[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            f = (f, d, c) => {
              var t = f[d];
              return (d = Object.keys(t).reduce(((f, d) => !a(c, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var c = a[d],
                    t = (typeof c)[0];
                  if (d >= f.length) return "u" == t;
                  var r = f[d],
                    b = (typeof r)[0];
                  if (t != b) return "o" == t && "n" == b || "s" == b || "u" == t;
                  if ("o" != t && "u" != t && c != r) return c < r;
                  d++
                }
              })(f, d) ? f : d), 0)) && t[d]
            },
            d = (e => function(a, f, d, c) {
              var t = P.I(a);
              return t && t.then ? t.then(e.bind(e, a, P.S[a], f, d, c)) : e(a, P.S[a], f, d, c)
            })(((e, a, d, c, t) => {
              var r = a && P.o(a, d) && f(a, d, c);
              return r ? (e => (e.loaded = 1, e.get()))(r) : t()
            })),
            c = {},
            t = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => P.e(3217).then((() => () => P(23217))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => P.e(7360).then((() => () => P(57360))))),
              81409: () => d("default", "@foundry/icons", [1, 3], (() => Promise.all([P.e(3082), P.e(1554)]).then((() => () => P(3082))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([P.e(1973), P.e(2209), P.e(3213)]).then((() => () => P(62209))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => P.e(6286).then((() => () => P(26286))))),
              28897: () => d("default", "react-device-detect", [1, 2, 2, 3], (() => P.e(1544).then((() => () => P(91544))))),
              94944: () => d("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => P.e(7599).then((() => () => P(19980))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([P.e(1271), P.e(8496), P.e(9623), P.e(3457)]).then((() => () => P(30181))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([P.e(1271), P.e(8496), P.e(1095), P.e(9623), P.e(3457), P.e(7904)]).then((() => () => P(7607))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([P.e(5483), P.e(7600)]).then((() => () => P(87768))))),
              57145: () => d("default", "prop-types", [1, 15, 8, 1], (() => P.e(6723).then((() => () => P(76723))))),
              33213: () => d("default", "react-router", [1, 6, 11, 2], (() => P.e(1594).then((() => () => P(81594))))),
              90: () => d("default", "history", [1, 5, 3, 0], (() => P.e(3455).then((() => () => P(75836))))),
              55274: () => d("default", "@rsgweb/router", [1, "workspace:^"], (() => P.e(4123).then((() => () => P(34123))))),
              63582: () => d("default", "framer-motion", [1, 7, 5, 1], (() => P.e(9931).then((() => () => P(69931))))),
              95945: () => d("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([P.e(9253), P.e(7145)]).then((() => () => P(59253))))),
              87851: () => d("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(4838).then((() => () => P(42457))))),
              96711: () => d("default", "@foundry/react", [1, 1], (() => Promise.all([P.e(227), P.e(1409)]).then((() => () => P(50227))))),
              14463: () => d("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(974).then((() => () => P(38593))))),
              2973: () => d("default", "dompurify", [1, 2, 4, 1], (() => P.e(1515).then((() => () => P(21515))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([P.e(4448), P.e(7064), P.e(7449)]).then((() => () => P(57064))))),
              90582: () => d("default", "@rsgweb/modules-core-screenshot-viewer", [1, "workspace:^"], (() => P.e(8476).then((() => () => P(66095)))))
            },
            r = {
              582: [90582],
              1409: [81409],
              2229: [62229],
              2973: [2973],
              3213: [33213],
              3227: [90, 55274, 63582, 95945],
              3457: [16565, 28897, 94944],
              4281: [2918, 81788],
              4853: [44853],
              5966: [95966],
              6711: [96711],
              6773: [92440],
              7145: [57145],
              7851: [87851],
              9031: [14463],
              9623: [9623]
            },
            b = {};
          P.f.consumes = (e, a) => {
            P.o(r, e) && r[e].forEach((e => {
              if (P.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var f = a => {
                  c[e] = 0, P.m[e] = f => {
                    delete P.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete c[e], P.m[e] = f => {
                    throw delete P.c[e], a
                  }
                };
                try {
                  var r = t[e]();
                  r.then ? a.push(c[e] = r.then(f).catch(d)) : f(r)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1149: 0
            };
            P.f.miniCss = (a, f) => {
              e[a] ? f.push(e[a]) : 0 !== e[a] && {
                147: 1,
                176: 1,
                227: 1,
                324: 1,
                1325: 1,
                1554: 1,
                1739: 1,
                1885: 1,
                3227: 1,
                3701: 1,
                4323: 1,
                4466: 1,
                4680: 1,
                5976: 1,
                6039: 1,
                6095: 1,
                6773: 1,
                6850: 1,
                6958: 1,
                7094: 1,
                7449: 1,
                7992: 1,
                8077: 1,
                8165: 1,
                8476: 1,
                8817: 1,
                8853: 1,
                9053: 1,
                9379: 1,
                9641: 1,
                9747: 1,
                9830: 1
              } [a] && f.push(e[a] = (e => new Promise(((a, f) => {
                var d = P.miniCssF(e),
                  c = P.p + d;
                if (((e, a) => {
                    for (var f = document.getElementsByTagName("link"), d = 0; d < f.length; d++) {
                      var c = (r = f[d]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (c === e || c === a)) return r
                    }
                    var t = document.getElementsByTagName("style");
                    for (d = 0; d < t.length; d++) {
                      var r;
                      if ((c = (r = t[d]).getAttribute("data-href")) === e || c === a) return r
                    }
                  })(d, c)) return a();
                ((e, a, f, d, c) => {
                  var t = document.createElement("link");
                  t.rel = "stylesheet", t.type = "text/css", t.onerror = t.onload = f => {
                    if (t.onerror = t.onload = null, "load" === f.type) d();
                    else {
                      var r = f && ("load" === f.type ? "missing" : f.type),
                        b = f && f.target && f.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + b + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = r, o.request = b, t.parentNode && t.parentNode.removeChild(t), c(o)
                    }
                  }, t.href = a, document.head.appendChild(t)
                })(e, c, 0, a, f)
              })))(a).then((() => {
                e[a] = 0
              }), (f => {
                throw delete e[a], f
              })))
            }
          }
        })(), (() => {
          var e = {
            1149: 0
          };
          P.f.j = (a, f) => {
            var d = P.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(1(409|554|626|76)|2(229|405|973)|3(137|213|326|416)|4(281|466|853)|5(202|82|966)|67(11|66)|7(145|449|538|851)|9(147|623|641|830)|8778|8987)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((f, c) => d = e[a] = [f, c]));
              f.push(d[2] = c);
              var t = P.p + P.u(a),
                r = new Error;
              P.l(t, (f => {
                if (P.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var c = f && ("load" === f.type ? "missing" : f.type),
                    t = f && f.target && f.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + c + ": " + t + ")", r.name = "ChunkLoadError", r.type = c, r.request = t, d[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, c, t = f[0],
                r = f[1],
                b = f[2],
                o = 0;
              if (t.some((a => 0 !== e[a]))) {
                for (d in r) P.o(r, d) && (P.m[d] = r[d]);
                b && b(P)
              }
              for (a && a(f); o < t.length; o++) c = t[o], P.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            f = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), P.nc = void 0, P(23358), P(95400)
      })())
    }
  }
}));