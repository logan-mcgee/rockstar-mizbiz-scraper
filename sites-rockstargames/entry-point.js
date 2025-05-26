! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4c3ba2de-b5da-45d9-b546-e6b10acf5e4d", e._sentryDebugIdIdentifier = "sentry-dbid-4c3ba2de-b5da-45d9-b546-e6b10acf5e4d")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], (function(e, a) {
  var d = {},
    t = {},
    c = {},
    r = {},
    f = {},
    o = {},
    b = {},
    n = {},
    s = {},
    i = {},
    l = {},
    u = {},
    h = {},
    p = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(b, "__esModule", {
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
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
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
        b[a] = e[a]
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
            11955: e => {
              "use strict";
              e.exports = n
            },
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = f
            },
            29441: e => {
              "use strict";
              e.exports = t
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            40041: e => {
              "use strict";
              e.exports = u
            },
            40308: e => {
              "use strict";
              e.exports = l
            },
            44857: (e, a, d) => {
              d(13218)
            },
            50644: e => {
              "use strict";
              e.exports = h
            },
            58678: e => {
              "use strict";
              e.exports = s
            },
            62137: e => {
              "use strict";
              e.exports = d
            },
            66819: e => {
              "use strict";
              e.exports = r
            },
            67884: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var t = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, r = t.length; c !== a && r >= 0;) "/" === t[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var f = t.slice(0, r + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            71127: e => {
              "use strict";
              e.exports = b
            },
            74251: e => {
              "use strict";
              e.exports = p
            },
            77600: (e, a, d) => {
              const t = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = t(d.y.meta.url, e)
              }
            },
            94316: e => {
              "use strict";
              e.exports = i
            },
            95400: (e, a, d) => {
              "use strict";
              var t = {
                  "./bootstrap": () => d.e(7706).then((() => () => d(97706)))
                },
                c = (e, a) => (d.R = a, a = d.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var t = "default",
                      c = d.S[t];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[t] = e, d.I(t, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => r
              })
            },
            98674: e => {
              "use strict";
              e.exports = o
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var d = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(d.exports, d, d.exports, P), d.loaded = !0, d.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, m = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          P.r(t);
          var c = {};
          e = e || [null, m({}), m([]), m(m)];
          for (var r = 2 & d && a;
            "object" == typeof r && !~e.indexOf(r); r = m(r)) Object.getOwnPropertyNames(r).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, P.d(t, c), t
        }, P.d = (e, a) => {
          for (var d in a) P.o(a, d) && !P.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, d) => (P.f[d](e, a), a)), [])), P.u = e => "js/" + {
          131: "2cfb87b1c5704c42a5bd5ff60d0a8165",
          191: "f2f7216d5975c482b8246e8445a92568",
          278: "04c2e4945ad1b50c8dd1a1806a0ac9a0",
          299: "efa5e1e7bf583a2e8f545194ef1831c1",
          314: "07b0608cc340b371e141b019a5cda1a8",
          449: "bb44f2b3a7cb715acd433f2f0daaa2c0",
          489: "18cda1409357bdb7bfa208f5ee53b479",
          540: "4bc746d9c227d83c05d698e38a3acd2c",
          554: "b29ec43646f8b68d481cc20814362d3a",
          583: "5abd514fbc6eaed5d4134536dc7677e7",
          587: "b8d513ab86c9c3f2ad83816367ddc42a",
          621: "163208613358aa88cafdf65a0820db97",
          656: "a87996a2e1c347d994711ed004b0e5e2",
          662: "70138928c9fe12d42c3f7bc9d1095e5f",
          823: "62175b1b859bfb60c3113f33f82e7775",
          824: "c9e41a5715d43fea96f3af13a755725f",
          838: "a3a10e49ef579118f3ee71a82fbbe266",
          907: "cc1b1d735bed82f4e6fe559b2632abad",
          1054: "4a0b1acc8153abc3b48b1ba465937270",
          1235: "aa3e49bddc9e68e239db420d15d698db",
          1242: "fdf428043b6eed9fd7f7db55725eaf9a",
          1279: "867394d582bd06130b2722b2b4696bcf",
          1280: "4a3d33d3883dd4b0132161315ecc6d4d",
          1314: "a64b01f6ad0031801c5026b993806f72",
          1345: "752b933ffa666cb4f5c5dd8fb7603299",
          1381: "7de2e7c83ea245015c8d17048876f85b",
          1478: "3932eac02c23f4f5ba319929f47e352a",
          1513: "b97c7a47d56982eea2b32e4e20a6d5c0",
          1515: "6ce7b6731eadbe08bcf6c681f338be1d",
          1707: "4cb77857021f49f6b48bf48b2c52ee22",
          1822: "a28fb37b7ab7f17f3e6198674a38145d",
          1868: "fe6aa0a116024bb5d26502dff6d09c54",
          2156: "6bc077a01108184cb5a76c020f99d18d",
          2171: "b3c9ffb6d406d1522255fca76450c7af",
          2176: "17ffac059969b64676b234fe862cce1c",
          2221: "8ac097942a908914544ea79b6e6d0fa4",
          2243: "d446b36dd4ddb9727d688158585e561f",
          2347: "f330eee550fb6e3ed2624ac003126bd5",
          2365: "40f21bb677d0bfce08399c852828de35",
          2398: "32777266737d89274d05c2e4279ce7a2",
          2466: "b7b1c842f374b6f086147570cd614a5b",
          2487: "ad93e0c9e1720cf7ebde351160a72d31",
          2522: "18bfe99f17c46b6ef785da25afba357f",
          2572: "1a90456940bb1cfecfd8180e3a08d209",
          2578: "3ef1156f8bb226f98499c0ce1d67e36e",
          2642: "a3376ef9761ad4efb459dc7aa6b516f6",
          2678: "925b5de27e4c99a2176774fe2a6fe6a3",
          2782: "4c6acc734802a6990680a493edb797a4",
          2864: "53e0da0d5e40a2f419ad43c599b2f38f",
          2909: "febe688702cf92d924ff1a95cbcea98a",
          2975: "91fd2b8d4c02095f14e91d1bed22e879",
          3002: "709b04f79c5b43c093508ec8059f2a99",
          3034: "6415321f34d6640a3331ecd7aa233cc1",
          3041: "aea349aa6e27ab8c2f44b6af2d239178",
          3197: "a5ec530971799d29ceabf21859f75b77",
          3218: "14a4859b9203b4c225e0cf0ff10cfbc2",
          3252: "391e1377d94999a9d7e2c8169a52cc5c",
          3299: "582570753d4015cf26af6fee5cb1e451",
          3343: "ba35913ee91c0d1a51ed73b85ef0be9e",
          3370: "b787d8c8f440b2cb1cc9f653afa6478c",
          3397: "cfaa20da9a3d8eb768b148018d691644",
          3409: "cb774a6ce1c1e6efc9edbc5cda662c95",
          3411: "80d1a49e22d662f1cd434f7f3b898e7e",
          3461: "c745130f16b205e6bb941910c01a917a",
          3475: "0337f69848604921ca78e6a3048088fe",
          3486: "fa5ba5806c3f4cd89a9464365e3aa0ae",
          3514: "8e3e14e84089c5d7169641f2cdbd6748",
          3586: "a8e545c1b73b6fee6b0936a87ac5f295",
          3663: "18bda8e7889398610da117d676d301fd",
          3672: "034ac4ef7e38a8012dd5ba32b2537c8b",
          3697: "bec537adff4cad58bfdcaa57c2b8c16a",
          3744: "d2fc1d827dcdeee78c2638ad3fd6318b",
          3885: "6bf721332824b09aaaff3f90a71ed66a",
          3941: "858060a1774bd73f80bdc2c3ea94e078",
          4011: "47cfae6cb999b6217ee4e4ca14358c27",
          4119: "632fc316e9f50c4dcb50d35311840975",
          4153: "ee9f7eaff67b810148284c4ae6a18f27",
          4281: "03b31dee8d9816b3216cb80abb0a286e",
          4309: "7cf96416f3e07c6d3cfca73088d546fc",
          4465: "61cfdc962341174a918b05f03292abd4",
          4480: "2ffd56696f1a07af6c4742eff7eb1613",
          4495: "25972426d23ee8407605c8d09b0c107d",
          4528: "5c4922e2278f7ce3bf0c65729a00b4c3",
          4546: "a126e4df55e3218b6003400a5685fb55",
          4621: "6c9dc8ed00dd3b08ce09dc9b5e3e3eb4",
          4650: "c409397605b6dae1628420b7e2f7982a",
          4684: "00d7818fbd2cd46a552c20082667e7b4",
          4700: "8ca7cc04540b4d75ff2bf9f5005255ed",
          4710: "252d2d5d3ccceb436511a558f008b906",
          4731: "701303e31d4fc2ffdfc97f7969604fc4",
          4799: "e14d8c5f063ff310ada6d49b7c1078ed",
          4851: "c9b0bbc19f7b5c063769a3662f752c91",
          4861: "1af9aefa314aeb9d94c9ad40108be26a",
          4913: "5d4f96e49b8a1a1a18aa67886b31e189",
          5018: "de12e79df1a161810966a8632e28f03f",
          5074: "7ae59e57609f4bbb3490d46957b7d6c6",
          5233: "4afdbf0be41fbfc56ab7ab9802ae5e6f",
          5259: "af93d26c8a06a5d814bd9cf5d8a9542f",
          5322: "f8e2a6737c83801e7b3746b2e243cb52",
          5395: "ca1215523203a25616bb1af5ad56bb45",
          5422: "6a9ba0f7f3ce6ff39545f0f5eabce3c3",
          5530: "3a25831b24ca59d6862be7046398722e",
          5639: "aa08aec5a184c4824b6aa2cb7bc3ba99",
          5658: "4a3091c7cf084942447e90e8d48e83e0",
          5663: "d0dae0bd1d41d46e6bfab2667ba97d3f",
          5734: "be4883463ce754f0ae0874c90dbf19a7",
          5742: "8a26cecf98bba265948e23792152cf67",
          5790: "eb000e1a3ec05f4143b329ccdc2a6c67",
          5830: "be57779ce6ed94655825dd5baeb1eff9",
          5832: "a4c64cac02e8a46e2c948bf706391f11",
          5854: "314d0f2ee3177ad83b21140fa468bc1e",
          6038: "a81b0632b8a6a87741a8fb1fb3199946",
          6239: "5a7393e7e8d0b5d222e24a4a19daa0e5",
          6267: "98f7e1d28face4fdbb25963f6075adba",
          6274: "ab0e3866fde76d5b31580f0c50d34d58",
          6280: "d36b4031a2c91f9ef2f614859dfc7788",
          6285: "c5cd44b804492f489f94c765036ee415",
          6361: "29b2bd55c92caf7324a3a51bb7f30c53",
          6566: "1c8693e9e06d074d37ae641c00651084",
          6567: "7da1a50e348c66f3989bb817edaf783e",
          6664: "7118de528e3b47153cc5a63807366e6c",
          6839: "a48c1fc85f1eb79f41866074bc14d7fc",
          6879: "ba3720c5c5b2d6876e7c4113899511fd",
          6891: "ffebc64811237334f797c2588278ad30",
          6997: "6ca86272cc72730f0c0c24676fb8d642",
          7010: "2f4fcb749f48aafa767878296687bb5c",
          7048: "4977957a24547b0d9126562fe2f89f11",
          7073: "0c1e122fe5ba945c56cfe756275b5f1a",
          7144: "0b7d48d2e767705e34bf609ac4544150",
          7242: "13d672a0a175294c1e4517f5747a30dd",
          7353: "8f3624f351948a995af5db39d16866a6",
          7365: "55d279ece8da8b078c9935ed83ca23a0",
          7436: "7a21bcebaabfa0c56681cfe38ca35c0c",
          7452: "c366f731ed404d8e60bda0186626f896",
          7453: "0b8c45e394a8000c1b0739e061bbdf85",
          7485: "05e2096ff787c424bbbc4e1d1db6d8ac",
          7542: "6cf86bad56f9889bc2268d6e7f3ef1b8",
          7658: "f8bbc34bcfc02155040e53d402b3784b",
          7706: "074eca9785b061f59c36192a6cc61252",
          7709: "38206be859ddf6aba67a471e5e9f3c64",
          7727: "a77e83a62ed828eb199383c88a295d2f",
          7743: "264b135e3a99d351687fffd6351e04e7",
          7799: "34c8c13eb472f086536abc62de718a5e",
          7893: "5c80d4dbc53f43022a48f4a6b98239f2",
          7970: "85693601a23a3454913051d47f9cc7ff",
          8072: "80df68933d57ed953900b953484b3e93",
          8076: "4162cae88370dca174359f15d628480f",
          8123: "b91237b93e1231f7ea40be29b2c1a437",
          8159: "fb416b912a140730c6974577446951d5",
          8272: "b4c8e5b2f1c974137b902ecc6c30fd4c",
          8275: "c28aa59ff1cf52c059352ea4425a5a9f",
          8348: "90be2e852398b7f6ee460296506fdaba",
          8391: "b7ad46f8b11db159925ea8e17894df91",
          8457: "c4ab22ed886c011f2cb7d5351c6dfe9b",
          8525: "d027c1615f6096f68e1975718b555622",
          8557: "239fb3b6bec164691d109bb11129fa5f",
          8631: "a40e2358baf13281988dc562089e99c3",
          8654: "3726637394dfe26d685bc23be0a7a422",
          8755: "ea4af77351aca490e0152f4b6fe14fb9",
          8841: "1132e0c5519a8b73e14ea8d9986ecc4b",
          8880: "c9feeacb5b74908e3e52b9e02db2264e",
          8933: "b7d14e2c636e6031ca78b5674197a098",
          8970: "a2a001c4ccab943859f703bf02e8f18d",
          9022: "fe3c536306947915e6a86e7ea398c5c4",
          9024: "74db6a066f7641c45bda755640981344",
          9028: "5c6e18d0611b078b014f2902e51b335f",
          9058: "9b8172eaedeaac61d25f41bbd064fe6e",
          9126: "2d6b63272fc1bd62811280d28ec99fd2",
          9323: "51050e1dbf522f2e437c774078585bdc",
          9377: "364aedc1f7ec1f9582e0ed640660cc7a",
          9464: "3fbee0c61dbd5a2a9538ec41541bafd2",
          9536: "c81f98c79cff206595a253caaa40172a",
          9583: "7b21e368373e239404958d1434ef205a",
          9615: "3079095f4383fc9c779c29627dbe629c",
          9746: "5306045d832c9eb28570fc9ea5916d5b",
          9936: "af8c7a38ea29be679770357bf07cf546",
          9990: "57ba7f273165849804e5066e87c293f1"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          554: "071cc98fed939b12a1345c71ee2e5bcd",
          587: "5aa8cb36b21b114bffbb11d73b34c906",
          1235: "f570a444f163b90870c40dab3f01333b",
          1279: "d54cda78cdb42dd5050cbb759ec518b9",
          1515: "00da2e0e23a224264b47c1039da843d4",
          2176: "136cc3f3aa219b97687bdb39e57010f8",
          2487: "3c0744addf6ef00a993e87ec24856c79",
          2782: "61ad271d6bc1b688f93acbc04956e2b7",
          3411: "615045abc585319694acddea25b967f4",
          3461: "4e3aebb3dcf768d430a9e319192cb178",
          3744: "a66604d9c40591515e417b1c2691f870",
          4465: "5f09753f1fe897b2a2998c52a055a269",
          5269: "103081b3d23c2e415ff7fd2af7854845",
          5322: "487c3cc9f7c6da71dbe6cd7fcdc30712",
          5395: "ee522b6566d7cc1dad8eb5b91b1682eb",
          5534: "b4eb91207cb1c0d6f6ebe85799ef51f3",
          5658: "b13e6ddc90cb08675d51cf9fbd895475",
          5760: "6a9e1a41fbf5b4b2592198f759298318",
          6566: "d2b0b3aa0ce1c4f69f91d09ff9df2189",
          6567: "1234e38bb0eacbcee4d02c30cf8dd27a",
          6839: "e6dc1f510b0a4211c6e54bff1fd4c607",
          6854: "3c0744addf6ef00a993e87ec24856c79",
          7365: "eee6e9f0ed632fce1325de4b9e936e9d",
          7650: "103081b3d23c2e415ff7fd2af7854845",
          7799: "cb9778e8136446d0525f9285feb3b91a",
          8123: "1b78d4fe05a5f12236b67224cf939aae",
          8405: "eba5ca2952033fb543111765a9b069a0",
          9024: "7acba850d92fd5d6eb886a603fe69082",
          9058: "3a0244366a6892f54e57fbd7ec3b8f04",
          9323: "39ff845de0d2fcb1bf3791c8cbf70db8",
          9746: "eee6e9f0ed632fce1325de4b9e936e9d"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), y = {}, g = "@rockstargames/sites-rockstargames:", P.l = (e, a, d, t) => {
          if (y[e]) y[e].push(a);
          else {
            var c, r;
            if (void 0 !== d)
              for (var f = document.getElementsByTagName("script"), o = 0; o < f.length; o++) {
                var b = f[o];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == g + d) {
                  c = b;
                  break
                }
              }
            c || (r = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, P.nc && c.setAttribute("nonce", P.nc), c.setAttribute("data-webpack", g + d), c.src = e), y[e] = [a];
            var n = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var t = y[e];
                if (delete y[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(d))), a) return a(d)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = n.bind(null, c.onerror), c.onload = n.bind(null, c.onload), r && document.head.appendChild(c)
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
          2782: [39848, 41263],
          3137: [53137],
          3326: [43326],
          3416: [33416],
          5202: [35202],
          5395: [31879],
          6766: [36766],
          6839: [94057],
          7538: [47538],
          8778: [78778],
          8841: [9566],
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
            var d = P.R;
            d || (d = []);
            var t = w[e];
            if (!(d.indexOf(t) >= 0)) {
              if (d.push(t), t.p) return a.push(t.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), P.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                r = (e, d, r, f, o, b) => {
                  try {
                    var n = e(d, r);
                    if (!n || !n.then) return o(n, f, b);
                    var s = n.then((e => o(e, f)), c);
                    if (!b) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, a, c) => r(a.get, t[1], d, 0, o, c),
                o = a => {
                  t.p = 1, P.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(P, t[2], 0, 0, ((e, a, d) => e ? r(P.I, t[0], 0, e, f, d) : c()), 1)
            }
          }))
        }, (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (d, t) => {
            t || (t = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(t.indexOf(c) >= 0)) {
              if (t.push(c), e[d]) return e[d];
              P.o(P.S, d) || (P.S[d] = {});
              var r = P.S[d],
                f = "@rockstargames/sites-rockstargames",
                o = (e, a, d, t) => {
                  var c = r[e] = r[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (c[a] = {
                    get: d,
                    from: f,
                    eager: !!t
                  })
                },
                b = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = P(e);
                    if (!c) return;
                    var r = e => e && e.init && e.init(P.S[d], t);
                    if (c.then) return n.push(c.then(r, a));
                    var f = r(c);
                    if (f && f.then) return n.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (o("@foundry/icons", "4.1.1", (() => Promise.all([P.e(5790), P.e(3299), P.e(2229), P.e(4977), P.e(2487)]).then((() => () => P(23299))))), o("@foundry/react", "4.1.2", (() => Promise.all([P.e(2909), P.e(5790), P.e(7799), P.e(2176), P.e(2229), P.e(4853), P.e(3804), P.e(8618), P.e(5854)]).then((() => () => P(7799))))), o("@rockstar/sentry", "5.1.1", (() => Promise.all([P.e(583), P.e(2229), P.e(7144)]).then((() => () => P(50583))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(3218), P.e(2229), P.e(838)]).then((() => () => P(35671))))), o("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(7365)]).then((() => () => P(67365))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(2909), P.e(8348), P.e(5074), P.e(7709), P.e(2229), P.e(9623), P.e(4309), P.e(5966), P.e(7542)]).then((() => () => P(80763))))), o("@rsgweb/router", "1.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(8159)]).then((() => () => P(68159))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([P.e(5074), P.e(7743), P.e(2229), P.e(4853), P.e(5966), P.e(6274), P.e(6662), P.e(7650)]).then((() => () => P(16274))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(2909), P.e(8348), P.e(5074), P.e(2229), P.e(9623), P.e(4309)]).then((() => () => P(35553))))), o("dompurify", "2.5.8", (() => P.e(7048).then((() => () => P(17048))))), o("framer-motion", "7.10.3", (() => Promise.all([P.e(7485), P.e(2229), P.e(1707)]).then((() => () => P(17485))))), o("graphql", "16.11.0", (() => P.e(4546).then((() => () => P(24546))))), o("history", "4.10.1", (() => P.e(8072).then((() => () => P(28072))))), o("prop-types", "15.8.1", (() => P.e(1478).then((() => () => P(61478))))), o("react-adaptive-hooks", "0.0.8", (() => Promise.all([P.e(2229), P.e(8933)]).then((() => () => P(88933))))), o("react-device-detect", "2.2.3", (() => Promise.all([P.e(1345), P.e(2229)]).then((() => () => P(1345))))), o("react-dom", "18.3.1", (() => Promise.all([P.e(3663), P.e(2229)]).then((() => () => P(53663))))), o("react-dom", "19.1.0", (() => Promise.all([P.e(2229), P.e(5422)]).then((() => () => P(65422))))), o("react-dom", "19.1.0", (() => Promise.all([P.e(2229), P.e(8275)]).then((() => () => P(78275))))), o("react-dom", "19.1.0", (() => Promise.all([P.e(2229), P.e(621)]).then((() => () => P(90621))))), o("react-focus-lock", "2.13.6", (() => Promise.all([P.e(6038), P.e(2229), P.e(7145), P.e(3514)]).then((() => () => P(16038))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([P.e(2229), P.e(191)]).then((() => () => P(40191))))), o("react-router-dom", "6.30.0", (() => Promise.all([P.e(7242), P.e(4650), P.e(2229), P.e(7247)]).then((() => () => P(54650))))), o("react-router", "6.30.0", (() => Promise.all([P.e(7242), P.e(8525), P.e(2229)]).then((() => () => P(48525))))), o("react", "18.2.0", (() => P.e(2522).then((() => () => P(42522))))), o("react", "18.3.1", (() => P.e(8654).then((() => () => P(98654))))), b(62137), b(39247), b(71127), b(50644), b(40308), b(98674), b(40041), b(29441), b(11955), b(58678), b(94316), b(66819), b(74251), b(25136)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var t = d.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = d[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = d[1] ? a(d[1]) : [];
              return d[2] && (t.length++, t.push.apply(t, a(d[2]))), d[3] && (t.push([]), t.push.apply(t, a(d[3]))), t
            },
            a = e => {
              var d = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                t += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var c = 1, r = 1; r < e.length; r++) c--, t += "u" == (typeof(o = e[r]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, o);
                return t
              }
              var f = [];
              for (r = 1; r < e.length; r++) {
                var o = e[r];
                f.push(0 === o ? "not(" + b() + ")" : 1 === o ? "(" + b() + " || " + b() + ")" : 2 === o ? f.pop() + " " + f.pop() : a(o))
              }
              return b();

              function b() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, t) => {
              if (0 in a) {
                t = e(t);
                var c = a[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var f = 0, o = 1, b = !0;; o++, f++) {
                  var n, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(n = t[f]))[0])) return !b || ("u" == i ? o > c && !r : "" == i != r);
                  if ("u" == s) {
                    if (!b || "u" != i) return !1
                  } else if (b)
                    if (i == s)
                      if (o <= c) {
                        if (n != a[o]) return !1
                      } else {
                        if (r ? n > a[o] : n < a[o]) return !1;
                        n != a[o] && (b = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (r || o <= c) return !1;
                    b = !1, o--
                  } else {
                    if (o <= c || s < i != r) return !1;
                    b = !1
                  } else "s" != i && "n" != i && (b = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, c, r) => {
              var f = r ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce(((a, t) => !d(c, t) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var t = 0;;) {
                  if (t >= a.length) return t < d.length && "u" != (typeof d[t])[0];
                  var c = a[t],
                    r = (typeof c)[0];
                  if (t >= d.length) return "u" == r;
                  var f = d[t],
                    o = (typeof f)[0];
                  if (r != o) return "o" == r && "n" == o || "s" == o || "u" == r;
                  if ("o" != r && "u" != r && c != f) return c < f;
                  t++
                }
              })(a, t) ? a : t), 0)) && f[t]
            },
            c = e => {
              throw new Error(e)
            },
            r = (e => function(a, d, t, c, r) {
              var f = P.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, P.S[a], d, !1, c, r)) : e(a, P.S[a], d, t, c, r)
            })(((e, d, r, f, o, b) => {
              if (!((e, a) => e && P.o(e, a))(d, r)) return ((e, a, d) => d ? d() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, r, b);
              var n, s = t(d, r, o, f);
              return s ? ((n = s).loaded = 1, n.get()) : b ? b() : void c(((e, d, t, c, r) => {
                var f = e[t];
                return "No satisfying version (" + a(c) + ")" + (r ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(d, e, r, o, f))
            })),
            f = {},
            o = {
              62229: () => r("default", "react", !1, [1, 18, 2, 0], (() => P.e(8654).then((() => () => P(98654))))),
              34977: () => r("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(656).then((() => () => P(78275))))),
              44853: () => r("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(3663).then((() => () => P(53663))))),
              33804: () => r("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(3041).then((() => () => P(65422))))),
              78618: () => r("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([P.e(3299), P.e(4977), P.e(6854)]).then((() => () => P(23299))))),
              9623: () => r("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([P.e(7242), P.e(4650), P.e(7247)]).then((() => () => P(54650))))),
              16565: () => r("default", "graphql", !1, [1, 16, 9, 0], (() => P.e(4546).then((() => () => P(24546))))),
              28897: () => r("default", "react-device-detect", !1, [1, 2, 2, 3], (() => P.e(1345).then((() => () => P(1345))))),
              94944: () => r("default", "react-adaptive-hooks", !1, [3, 0, 0, 8], (() => P.e(1314).then((() => () => P(88933))))),
              95966: () => r("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([P.e(2909), P.e(8348), P.e(9623), P.e(4309)]).then((() => () => P(35553))))),
              2918: () => r("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([P.e(2909), P.e(8348), P.e(7709), P.e(9623), P.e(4309), P.e(1513)]).then((() => () => P(80763))))),
              81788: () => r("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([P.e(3218), P.e(8457)]).then((() => () => P(35671))))),
              57145: () => r("default", "prop-types", !1, [1, 15, 8, 1], (() => P.e(1478).then((() => () => P(61478))))),
              23271: () => r("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(3002).then((() => () => P(90621))))),
              33213: () => r("default", "react-router", !1, [1, 6, 11, 2], (() => P.e(8525).then((() => () => P(48525))))),
              90: () => r("default", "history", !1, [1, 5, 3, 0], (() => P.e(8072).then((() => () => P(28072))))),
              55274: () => r("default", "@rsgweb/router", !1, [1, "workspace:^"], (() => P.e(3397).then((() => () => P(68159))))),
              63582: () => r("default", "framer-motion", !1, [1, 7, 5, 1], (() => P.e(7485).then((() => () => P(17485))))),
              95412: () => r("default", "@rockstar/sentry", !1, [1, 5, 0, 0], (() => P.e(583).then((() => () => P(50583))))),
              95945: () => r("default", "react-focus-lock", !1, [1, 2, 9, 6], (() => Promise.all([P.e(6038), P.e(7145)]).then((() => () => P(16038))))),
              66664: () => r("default", "react-intersection-observer", !1, [1, 9, 13, 1], (() => P.e(2572).then((() => () => P(40191))))),
              82522: () => r("default", "@foundry/react", !1, [1, 4], (() => Promise.all([P.e(7799), P.e(8618)]).then((() => () => P(7799))))),
              2973: () => r("default", "dompurify", !1, [1, 2, 4, 1], (() => P.e(7048).then((() => () => P(17048))))),
              92440: () => r("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([P.e(7743), P.e(6274), P.e(5269)]).then((() => () => P(16274))))),
              90582: () => r("default", "@rsgweb/modules-core-screenshot-viewer", !1, [1, "workspace:^"], (() => P.e(9746).then((() => () => P(67365))))),
              61913: () => r("default", "react", !1, [1, 18, 2, 0], (() => P.e(2522).then((() => () => P(42522)))))
            },
            b = {
              141: [82522],
              582: [90582],
              1913: [61913],
              2229: [62229],
              2782: [90, 55274, 63582, 95412, 95945],
              2973: [2973],
              3804: [33804],
              4283: [66664],
              4309: [16565, 28897, 94944],
              4853: [44853],
              4977: [34977],
              5966: [95966],
              6662: [2918, 81788],
              6839: [92440],
              7145: [57145],
              7247: [23271, 33213],
              8618: [78618],
              9623: [9623]
            },
            n = {};
          P.f.consumes = (e, a) => {
            P.o(b, e) && b[e].forEach((e => {
              if (P.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var d = a => {
                  f[e] = 0, P.m[e] = d => {
                    delete P.c[e], d.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete f[e], P.m[e] = d => {
                    throw delete P.c[e], a
                  }
                };
                try {
                  var c = o[e]();
                  c.then ? a.push(f[e] = c.then(d).catch(t)) : d(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1149: 0
            };
            P.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                554: 1,
                587: 1,
                1235: 1,
                1279: 1,
                1515: 1,
                2176: 1,
                2487: 1,
                2782: 1,
                3411: 1,
                3461: 1,
                3744: 1,
                4465: 1,
                5269: 1,
                5322: 1,
                5395: 1,
                5534: 1,
                5658: 1,
                5760: 1,
                6566: 1,
                6567: 1,
                6839: 1,
                6854: 1,
                7365: 1,
                7650: 1,
                7799: 1,
                8123: 1,
                8405: 1,
                9024: 1,
                9058: 1,
                9323: 1,
                9746: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var t = P.miniCssF(e),
                  c = P.p + t;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), t = 0; t < d.length; t++) {
                      var c = (f = d[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (c === e || c === a)) return f
                    }
                    var r = document.getElementsByTagName("style");
                    for (t = 0; t < r.length; t++) {
                      var f;
                      if ((c = (f = r[t]).getAttribute("data-href")) === e || c === a) return f
                    }
                  })(t, c)) return a();
                ((e, a, d, t, c) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", P.nc && (r.nonce = P.nc), r.onerror = r.onload = d => {
                    if (r.onerror = r.onload = null, "load" === d.type) t();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = f, b.request = o, r.parentNode && r.parentNode.removeChild(r), c(b)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, c, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            1149: 0
          };
          P.f.j = (a, d) => {
            var t = P.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) d.push(t[2]);
              else if (/^(1(41|626|913)|2(229|405|973)|3(137|326|416|804)|4(283|853|977)|5(202|269|534|760|82|966)|6(662|766|854)|7(145|247|538|650)|8(405|618|778|987)|9147|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((d, c) => t = e[a] = [d, c]));
              d.push(t[2] = c);
              var r = P.p + P.u(a),
                f = new Error;
              P.l(r, (d => {
                if (P.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", f.name = "ChunkLoadError", f.type = c, f.request = r, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var t, c, r = d[0],
                f = d[1],
                o = d[2],
                b = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (t in f) P.o(f, t) && (P.m[t] = f[t]);
                o && o(P)
              }
              for (a && a(d); b < r.length; b++) c = r[b], P.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), P.nc = void 0, P(44857), P(95400)
      })())
    }
  }
}));