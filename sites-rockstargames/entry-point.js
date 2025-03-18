! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1be31207-0eba-4bf7-a3ea-4a6eaa596eed", e._sentryDebugIdIdentifier = "sentry-dbid-1be31207-0eba-4bf7-a3ea-4a6eaa596eed")
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
          131: "48409a74ab3d46dca3546f36a9a61e53",
          147: "d613645330c98ec90bf80dfa334e593f",
          176: "07f338f370fef8d0e2c01288a48b042e",
          227: "1577a0af3b5d265e77bccb6122ec3988",
          278: "a46fc506c5fd72c1215043d5d5275deb",
          299: "31f14e73ca1c02294cf85b6245d42b9e",
          314: "ae271bcb8666d5f620c1b8e97dc73a82",
          324: "1b764abce30a1d1baf28f72d186673ff",
          541: "6348628e64337802f9ddc6a9775f2ba8",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          662: "55fe74165d807decc0775c398ff76692",
          707: "18bce0eaf298b11b9cd09d7ac087804b",
          824: "07b525e9bf8734afd1ba755ebb6e97d9",
          907: "22058a898404bc9b429f198c67495cc4",
          954: "fc4c7ff80aa2d792d1f833ebffb15450",
          974: "4fcd88bd95f96a3c0efb31a2803d8eb5",
          1029: "d7cd7f090942fd5a08237792c37866c8",
          1054: "0c5fea5e62f2ea5b641f5a5409d23cf7",
          1095: "21b3228c4688ad21d2ec9ace3117fd0e",
          1242: "2371bbdb6526b3463f4a8f3d8acc3d81",
          1271: "5349b38645dacd040dd7188e6e5a5483",
          1278: "f216272499097bc480ce4a889436bacc",
          1325: "62f4af86a6a3ed936f34e489680292e1",
          1409: "60e7029e887425aba9d240f91bf4fb48",
          1515: "749986411622ed9bb3f1ebe32696ed03",
          1544: "f60d3e1a942a59ddec8b11a3db309ee9",
          1554: "d534087573a0c88ac15c78845ddf5f1b",
          1594: "b49453f901d9c9b623c125e2a8ad9e15",
          1626: "1a821a20005818702c8126fb54dfe381",
          1739: "db9bddc2c433e4d8bdac73eefcd884e5",
          1822: "f3dca29c35017b3fcf5c45281076f977",
          1868: "82ac6161c642bb2beb3949f8d1878f38",
          1885: "cb187b0a5ea1f511d6ccf203fa01c4fe",
          1973: "91edd4f7219e6d714f656a392f35831f",
          2156: "e9fb416bcccfd626f8fa7923c671c58d",
          2171: "1535950335db6aaae07df0936e7038d3",
          2209: "2ca38ec279c00d426fb0458bdca9e0d3",
          2221: "a08658e616ac7cfdc85ce4bb7ba9e74e",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2243: "7e82e32d24a7650f4a9e97a10618af6a",
          2347: "c9fff52e8f8c02181e7a11012c20b0e6",
          2365: "1798492e93eb44abf1c764acbaea27d2",
          2398: "c535aea679c542b4cfc1ac02cb8f475d",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2457: "d9e7a74d9bcc199ae0ce948b1b5c3687",
          2466: "eaa935392c6dc64a5838de0e4387a89b",
          2642: "aabb3095a149b879caf8b80f353c7b3a",
          2678: "2c5ba03e699abded489cdf226235e631",
          2749: "cd6d42b89960db99cf74d922177dc5db",
          2828: "e639ce3fe1d7bb4dfb739b0735694f7c",
          2864: "d5780f2f769d4bf8173f254858d67607",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3034: "80cdf974c4a06e1eb8ac69a60305296f",
          3082: "cdb54256c10a3d321ffc64352037a545",
          3112: "0e78501bf2ec02daaa75898ae91332b2",
          3131: "31d4741dad8702c10bfff7d18cb516d4",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "68d9ad9c8f9c40b2165992d870aed69d",
          3213: "205fe2929653424fc55178dfd74464d8",
          3217: "d68c6fd7f1593d64b2aa7f98f431fe0b",
          3227: "8b1b5fef9bddf5c4f861a3cbce4ca779",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "245f1a7d51f8ebfed2f712a111d11e87",
          3360: "9096094d5e8747cb11e62b87ebc861e9",
          3370: "1dafa8e7903b1850543e5dfc55579efc",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3455: "d6102c8e3fcce76a72324aeffd3023b5",
          3457: "42875a7dd27e82e7b2f6a12458a896de",
          3461: "dec6478e9e0f9620a4bd8425d791d862",
          3475: "4aeb99a64c3eb4e22c0a52be4d318e57",
          3486: "702fc0ab3fd3c2cfaa4b319cdc3da575",
          3697: "dd72354eb91c0c9bc725286f30170a55",
          3701: "a7b17af354a91342c643d587ef8929a3",
          3759: "b3cf3df97e41badbdfe420aa29b3f0d0",
          3885: "9757ca676c5a05300c7b85f545399a8f",
          3891: "27f21ce8af6868f730151c23fd0f0460",
          3941: "3f1b39004e9844a1766c6d6761a7ab41",
          3954: "d10d6880bd4c892c5cfe72b898fd4e3d",
          4011: "7ba5dc3a033123142c3c3c145877f1f8",
          4123: "a0a9d57c3bcd6a08a3d975bc78822cb3",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4323: "393d5c2639fd3d6ba29afc97ef06444d",
          4448: "ac7c74049d72f11e904e38e1abbfc17b",
          4466: "712be7e827785149e1b36db4a6bb88fd",
          4499: "a005f840207c1826d505ddf58a169753",
          4528: "d94c201f0fdec877947b12d426b7f809",
          4621: "0e523793c5878c8e077976800f1d4dd7",
          4680: "3470b4162dd68c9e6e1d8f39e4b37892",
          4700: "f97fa44c48e9dbc6e4cc6da2dc274130",
          4710: "91f8e0ff4c9e4e3bf63943be4cbae121",
          4731: "3b3af87689dc00b0e1f3c9436e2e6296",
          4771: "e8e6d56751df76354e8e67fb2b11ea0a",
          4799: "feb283446bf04ab7a3488783c65b0223",
          4838: "11ad8aeaa9ddc63779598c9e3ef207bf",
          4851: "df4e296a829a1de55bd1f0c27e1232b5",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "e8e7c4f0c0044cae1d3f041eff18993f",
          4913: "3e8fb390abf340aa02ceb9542c5893ae",
          5018: "9cdb99043fe84e07e52257f10bf14e8a",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5219: "8e80a318ac55cc8a4df67987589c8da4",
          5233: "dca98d3c73070b5fd939a00ad77afb91",
          5259: "57e2b5e91fecc8fe1192e338656ff129",
          5309: "a0088c174934fcfea3f1d663289bb54b",
          5409: "8345f35a4fc32a195a5f06f7ab4f2733",
          5483: "03763dcf025c2ccc9d7713993108c036",
          5523: "ced1023173e7adb06a55b6e81a7a8c2d",
          5530: "e1fd1ce2d32a2b464835be53af8ea9de",
          5639: "07436d51405205a2c12e79393f3a4557",
          5663: "c7c18849c87ed7c30287c6fd023cd15a",
          5742: "e641d09e8e022701792169217c80d359",
          5830: "5ea7db5ec99afebf7cdfb598c79aa7e5",
          5832: "18754b906182004977bad59374f0466b",
          5836: "a5d3c6e34ad03f1fe113e11d2ad1a1f7",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5976: "fbae98d589840e478186da1115a85934",
          6039: "ea2ae4029e5975c17283cbb0fa26d7d7",
          6095: "31c2d06edd51b245ada31f6e0447eb19",
          6267: "2fc9d1c52134e2b4cbde4dda90977b0f",
          6280: "8b11062f28b30aa10eee644700d4e97a",
          6285: "ed4b93f45339bf5c6a300003bb136569",
          6286: "c75a85ae9dfe53c40ed796d6a78f5530",
          6304: "f41fe59847ecb93bf6cb1fe2339fa0b0",
          6361: "2b88d4ad5d61a605281deccadbaf4ba8",
          6504: "a481ccf036cf07a37720784758a228d0",
          6521: "72f4c3c78044e17cf592e3d4353899a8",
          6664: "c92a91ad28362dde09b1418bacd95425",
          6711: "9d0f4668f763e10d76e3f45ccc8dc57c",
          6723: "837eb895427bde20fd08fa3900615ddc",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6773: "5b0916ba5cf7dd9b27a79cf77dec6fb0",
          6832: "51f0f5b00a39bd10cba8bce19f98eaa3",
          6850: "d7d599d499e41e05fe07dc98f213a047",
          6864: "64d307fd85a3604f26a73230f8a406f5",
          6879: "1cbce353fc0d5c0263071a5837d1b5c7",
          6891: "f6336f139a9bc5f3fbbfe591cd079d42",
          6942: "76ee4b1f78ab30eceb124e2cf01093f2",
          6958: "c3513be4a1c0b36acaa9c3da9a3dd95f",
          6997: "cd05e6eec6e39c617a0acc910b3d86a6",
          7010: "4c3641c0d7996aaceaffdb497eb144b9",
          7064: "312da7e607960351afeaa62e8e014d8f",
          7070: "293c29c86fa559ffe1370c9c87cc3de0",
          7073: "9b25fc390b25f2f683b3c85a9b684897",
          7094: "99352b81e31cbe7e54aeee60cb0fcb5e",
          7120: "0e3fd077841d5411ab60e79664f0f008",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7360: "36fd440cb0fef194aa2f5712097ab30a",
          7436: "bb706145f65a62b7449a8298b7556bb2",
          7449: "e56f901c47f4e21e97f1b3ae422715d0",
          7452: "0e90e90beff1ca45fce11aef23333b22",
          7453: "853b98d6acd1948fa8668c7f54cbf9ed",
          7507: "75e044d3a9ce74d4f8e6a5a75d27eda1",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7599: "f0ca4311c682dd8c8711e9ddf3ac1a10",
          7600: "dd969b48885805659a88df5ebdc874c2",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7902: "ec3806baeccd5cb4de6b1256d82e397f",
          7904: "c65e4f941af713fc405a8122db95dcd8",
          7912: "31f7fec04ce04281f4d5cc199b85e883",
          7970: "a4854875e63779ff3ee4ba21324d5e39",
          7992: "de994851823263414adc2231c3920fe9",
          8077: "43205e805f6391f841b1f4ee94c82b75",
          8165: "1fa3009cf374a34adf4ce4d1adc00df3",
          8272: "a6bda5dd265fd7543819319e58249e73",
          8391: "f876ed1afa6371b6e418261b9b40ac36",
          8476: "1c95e4d65b76fe977458028893f4106f",
          8496: "4adc515a33a86de76411d14d79dad31d",
          8593: "8ba2a3258ad4f69a7a783eb213d92295",
          8595: "c48f76d336c9c9109928e1978a747b9c",
          8755: "cf5801f7ab8403b06f587e2bedbf2bc4",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8781: "324f2f898b083ab9166846eab2680241",
          8817: "27b1dc052cbea5926a920e721af7657e",
          8853: "25fbfe65c90cc9c1906133545ec7e870",
          8880: "7e91b236dc42666a921434ca64a55ce2",
          8970: "8abcce408b93522dcb9b207ba5979558",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "c128db9a2af63980d902ebc525ce97e4",
          9028: "2d6443138f20c7b11cd0faa0c5d3089f",
          9031: "b90c846817a704bca2dd4c305b5dab55",
          9053: "c6a4a773a8035370102942e8a367d035",
          9126: "4be6194d7a6a997e06592f0b4c845cd9",
          9130: "ac4c7d372d675a7bf55b60616c38ab16",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9157: "6f7036fec8a830c4e011194da2ec9c18",
          9253: "bc491be51533d6fe178a12e8ee171213",
          9292: "0834e2413f36b5ea56cad011feb92525",
          9377: "637dc75dd019a2d167735cd5a76772ed",
          9379: "e1c0b72a2319ff4d73cac4fa75e48cf2",
          9550: "137c5c3721f2050056c5135852949fae",
          9572: "2b656bf8517fd3b1c3f242a14f1c00a3",
          9615: "986fb5ad663c35c28ad63d4912bc068d",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9641: "1fb5feedc8ffbdcf799b0b126e339921",
          9747: "c60689dcd9082ecef836e4e129b40a0f",
          9830: "c9232ba8aa7f48b4a81ae6993b5e970d",
          9931: "3c1ca2d657e4b050ba887edeafa8d8bd",
          9936: "d3500f3e0a2b293d1babf1d065885e96",
          9980: "5d5a1078da8ffd7a55e78c6bc6d57c1c",
          9990: "21b02782b19f19d7f69019f1a71332c2"
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