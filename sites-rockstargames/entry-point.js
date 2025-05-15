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
          131: "a4a8e3b4d231d3c2d8fb189a757d9678",
          191: "e0d3cb602f4f9f9ace281295c610d13d",
          278: "09e19417d9368fdc836f46d0fcb94333",
          299: "f8c3d1abb637e5b59b61a421d3d37cb5",
          314: "bd794d6413a9e1888933998ba584d3af",
          449: "5ad4e29e541a5102e68e921e08ced8ad",
          489: "c9b9d3078d8f3f60a5f6307e51a5a912",
          540: "8d07e419526caaae6b68b61b2ac83822",
          554: "9b1fd131b89feb8b04789dde1623f772",
          583: "6948c5c0e4d2431526e25916336b527c",
          587: "d1d890163fd6dcded11060a8421f535a",
          621: "9b94f5aa310a7cb3994aa804108cd8b2",
          656: "e9f1511fb2a17d593f0d400037715564",
          662: "c0197ef22c24c812cc7c031454f96c80",
          823: "9c48b920af86bc675b1d7786ab365774",
          824: "6a23eb3c4b43e779c75f53d7b717dc94",
          838: "f82ec63ed9e679e0bb8bd59b50d7b952",
          907: "2a9a17a85be8aba674c8ecfffe2c556d",
          1054: "8a7b159b56cf0d5bdedcc15e53e27163",
          1235: "39b83c3a713ff7b2758ac25f1c622b4d",
          1242: "5fe5c210b62682d5c825cff3b62b22e9",
          1279: "65a2e87045691807bfb3f2ea3841f1f2",
          1280: "29dcb169a765dd2d937103577f6a766b",
          1314: "956d67357a0d0ba32aa3f7c2ce2f15ad",
          1345: "fa31dda28597349e3967e35219f52aca",
          1381: "1c7e0e34a725b46a9ce48482734d1e1f",
          1478: "677bdf5cfb4f7b878a4815a9db988a3c",
          1513: "f125b749e49ebf2108dce10dca594705",
          1515: "a981181cda91ff29cd5ff536df84adbb",
          1707: "9a2cd35d50a65936a80954814c9612b0",
          1822: "0fd968024f317bea36e76e5df427019f",
          1868: "4af38a5029678b4b194dd0a86682de34",
          2156: "908627d3639eacb855a848d67b3565f7",
          2171: "2606f3a6eb1847da01327b24cfc7dca4",
          2176: "36b04427acde6e9828dcf9916eec7934",
          2221: "95dc6ad85a2f5db5b6e0047bcf55abbd",
          2243: "767317df4fd319a476dbc7844bf14a9a",
          2347: "fac9820722ec3bbf5627c7ccea058716",
          2365: "59257a159ca7274fa32d798704883a65",
          2398: "2a2b8289b2c152a5000d7071ae98289d",
          2466: "bc2ddc5fea82b874894615263300dbb6",
          2487: "ad711225185f1ff673ec949aa9c4a59c",
          2522: "a56a06d13afa7b296f747a2ce1d4959b",
          2572: "5eee84c719c6725276b8d2cb31ee5699",
          2578: "f509daca3198d65f13fdc4255feb6184",
          2642: "eea8aeecd885d43e01d5a4ad0ee60562",
          2678: "6092476f0fd9b6301b50de2aadb8a409",
          2782: "6d6fe826cc7202b8f961c25a7c0dfa24",
          2864: "de0020df02ddf1343098603c3261e101",
          2909: "947ae8d99b4400e17d38a3b33ec00083",
          2975: "8ce924a24f3f5f9641b99d3023d910b7",
          3002: "bf3472c865f6dedf6a192987bdfc8062",
          3034: "03db7f60842537bd71bfc337b49c3707",
          3041: "6d3e31d91147a746963b1ba0d251eac7",
          3197: "aae6d3547a8e1104774d519d6ad76c21",
          3218: "0e440fa6bd92fdd86046f898c0e5c42d",
          3252: "c09c272749a1594570eaa0e1ba17d8c2",
          3299: "cc99e149ed70ce5632e481521b33262a",
          3343: "ceaa8765b617162007e3fad9cda1ab39",
          3370: "78eb46308375ac325c18a82ff348e56c",
          3397: "843378d6c1eb3080730677d53079e257",
          3409: "d2e56d73d67b2372eafd2e4941237184",
          3411: "fedec5440656a86cf9bab27ce8a8c008",
          3461: "2737c959569879eb7678be6b9520055c",
          3475: "1f4a5854e798ff59fd5421f08d3712fe",
          3486: "a4460093c014b06560516c9e227886b6",
          3514: "55e4d8036ddd44bd51e5ced2be6ec4f3",
          3586: "37d6fe270e745f6d211cad6bbc966573",
          3663: "06ab867bfe2ea2fbf29c6bf0b3cf56b2",
          3672: "232dcb5dfacb1a47405fedf5e93e76b2",
          3697: "dc9570385e2ea5ae412517008a12f902",
          3744: "97f3a64afd5c586f94453d7f8edb9bfe",
          3885: "3870f78424c8edf9ac74a2488fbda04b",
          3941: "8f27428ba94aca103624f40c58c4a16e",
          4011: "ee733cb21c21c2d4951319060f2e4e58",
          4119: "b2eea4f9b03e980673e0a9d8d3a6c4ce",
          4153: "6989cbc8c00f8e193eec0e39aa60f265",
          4281: "f306f39da62dc1d76ceb18b48ca11793",
          4309: "164da003ce5cdd86f1022184d9e7a6e9",
          4465: "19b63dea41b6a0bcd6306696e9365b9b",
          4480: "4ba311821a3249f6a1b612379eefce95",
          4495: "082d3a3e28aff9dae46152501fa461b7",
          4528: "4eb990cff621a3e868c9742da9b20148",
          4546: "74fa5c18d9a4ed617df987cea9f40c19",
          4621: "e8c54527036ad1a467326d71c82e139c",
          4650: "de4ba84487e11e5756ca8be18641db9d",
          4684: "ddf95f65b365f29b09dd152b5ced2f20",
          4700: "c0325ed4fc31ab98e413293a373a09c8",
          4710: "8b7c2d082e87485c797f323f83e718fc",
          4731: "f2702464bec841ce917c0117d0ef3256",
          4799: "efe4bb1c836f218ab70a34d58548f1d5",
          4851: "151fe63a81453bd598c18f4f0c3d360e",
          4861: "a63f1f822d8c544f7535230d802e74eb",
          4913: "5d074bb6e8f11a3e526bf528469fea83",
          5018: "1233c5c4101c7051d82e114c9d5e0a74",
          5074: "f496cc7811d207e8ba82178cc56dea71",
          5233: "59446611b7ac2062b10c692f5cbfc63c",
          5259: "f8d1526eefe0c931a20cb40bda89455d",
          5322: "000a5b178a7118c75ca94cc1e27392ff",
          5395: "f5f2379d020a9ded7e0131c60b541ff8",
          5422: "56379ce34e38e4ba1446e1b2d1e99c7b",
          5530: "c2a750c8c69209223922c408a55b9387",
          5639: "7104494e8c923ddd57789eb6e9efdfb0",
          5658: "0a986d63930ad9763b9a3c1e330ce95c",
          5663: "3d5fdce6644a8c86536e4dcbd2c18cf3",
          5734: "bc35f28039e6be2089671d2ad0950ef0",
          5742: "a0b4687ef5ae389e925a6a88b82db3b4",
          5790: "485250b2dde9a2ed6993593e69eb9e65",
          5830: "7bbc29c5be592f88b8e18b0025818bde",
          5832: "471e1de9a4d1cc239d737db4f1fecfff",
          5854: "4d94f58274be57195498ca95229e2f08",
          6038: "d770b0343f923aaa477c46651721226f",
          6239: "3911ee09d829e60e12ea647bbf1cf3df",
          6267: "3726a2491e74e1c2d4611972faad119f",
          6274: "fb0c2fc4ca2875cc36e899474512dd00",
          6280: "fb51d33f5d5cbe751bcd730db724c8c4",
          6285: "a4fd86cf208a7ac8de947c785c923541",
          6361: "7475b62d441b99171e38364ec9f58d0d",
          6566: "7a0cfbab7c254493c5d31e9d62a636aa",
          6567: "497b7db14d26bffea967d24055ff2be0",
          6664: "1666a372bb5b501fe206b88688c046b3",
          6839: "b16ffc35129660454820c6e3f5fe0c55",
          6879: "29742673e7f42f3f5cc1c0917c31f2c0",
          6891: "d2d1357fc59d9ad384bc851695ecca83",
          6997: "cf3a62f89276519287fb7df34de33bfb",
          7010: "85cb9b87b21f51e2391e903c3f09cdbc",
          7048: "7900f85604ed5dbe5f12356a22112d94",
          7073: "3bc277beb38f9a60b6afdd261d597409",
          7144: "c42352aa694a90de1ec797f5e77eb8f8",
          7242: "a4af740650191dd25c72113cf43be7ce",
          7353: "007d5daaf275f12060ed586219ad7748",
          7365: "5ab65faa87adb876f5f67766aa35b240",
          7436: "8c6d0387f945e0f5f22c33546e2a9477",
          7452: "81ba5586eaebe4d4d085587afdbfdf7f",
          7453: "640ad4d16ac0e39c2c0d0c5201903478",
          7485: "7cf89acf030cab98d76311c7fe95df37",
          7542: "dfe550ff9499891c4041aa4584657264",
          7658: "8827db5627a64627e7efba4981130cfa",
          7706: "32b38751c2f80873e0a08579d8d0db2f",
          7709: "9e02083ec57d4745cbf81a6971542436",
          7727: "aa4c1add4fa53e451e41fe8582fe71e3",
          7743: "36255fd4e29aefeb66d2a8c48c020024",
          7799: "aee6f617f0a2ed75e2ac613469f38bd3",
          7893: "954c4f9be8d5f5ee7b2dcae905469d3e",
          7970: "3e46d4c724f5d0bdf38ddb2d597114ca",
          8072: "00b4b5f596d7ebb1c5b8f15e817e9833",
          8076: "ec134c0cfa4cc547d39b191f2dd9ccd7",
          8123: "bc370309571dcab917a568fd4ad2ac4d",
          8159: "23642716f9b6635428c1b1c25d50389c",
          8272: "9a906c4feb25eca0a38cdfd52128aac3",
          8275: "dea638fb5dbe666edfd4f30a2ede7a59",
          8348: "18e064c22721b9c9f059bb70a8ddc227",
          8391: "39c5e242c32246358ecaf79a2d78d135",
          8457: "728f72d5c777073716a5a3b007f8d2d7",
          8525: "12e3191db758765464c71ec5bc15560c",
          8557: "a8546dc2b5ab18df0739cced02c6f16b",
          8631: "ec305588d043faa363032085b5c1bab8",
          8654: "6cb9419ce52fda317e4232ed7275d5bc",
          8755: "490770bde0a03d0a008bd00f5f30a685",
          8841: "41d109399f74a1e251db0602f4e22708",
          8880: "e0944c5a90f98d786063ae3d2d4d69e2",
          8933: "6dde9af88f3a06e6e65955f2a69eb5c0",
          8970: "e294acccb641ee54b27196f8487767e1",
          9022: "e33bfb204dfb39e72262041688006bce",
          9024: "c95ee4c8bacc1ebc0456ef23bbb9443b",
          9028: "45c9364ff19feb7a76cd80154ae8fc3e",
          9058: "ec288aa399c9a674a5de3aa74751dcbd",
          9126: "646539ac52ab9cc0582fb666f1bc34bf",
          9323: "e24bc7ace9403e4c0651720941e635d9",
          9377: "c4fc6b5ede5cc2abaa4ca07b5f90966a",
          9464: "55cb86b5cd750c3a7ae9eddf0ec462b6",
          9536: "e52750446d78be6ffabe88ae91c0d68b",
          9583: "7f1234ab22c2bebc1dc50ef53749d934",
          9615: "454a196dbce9ee691103c688256e1611",
          9746: "0c02120b8f228c0b7a4760dbf32d850f",
          9936: "7a660b873266a509031c7ab79de43f19",
          9990: "ac40589a616f065d18cfbf966ad04546"
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