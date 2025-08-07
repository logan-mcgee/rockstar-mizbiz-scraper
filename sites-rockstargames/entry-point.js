try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1e4f9648-c54c-423f-ae86-2c8413b79206", e._sentryDebugIdIdentifier = "sentry-dbid-1e4f9648-c54c-423f-ae86-2c8413b79206")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, System.register(["@rockstargames/modules-core-footer", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-header", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer", "@rockstargames/sites-careers", "@rockstargames/sites-gta-gen9", "@rockstargames/sites-gta-trilogy", "@rockstargames/sites-gta-tv", "@rockstargames/sites-legacy", "@rockstargames/sites-red-dead-online", "@rockstargames/sites-red-dead-redemption-2", "@rockstargames/sites-rockstar-tv"], (function(e, a) {
  var t = {},
    d = {},
    c = {},
    f = {},
    r = {},
    o = {},
    b = {},
    n = {},
    s = {},
    i = {},
    l = {},
    u = {},
    h = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
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
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
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
        f[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
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
    }],
    execute: function() {
      e((() => {
        var e, p, m, g, y, v, w = {
            9944: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var d = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, c = 0, f = d.length; c !== a && f >= 0;) "/" === d[--f] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var r = d.slice(0, f + 1);
                return t.protocol + "//" + t.host + r
              };
              Number.isInteger
            },
            11955: e => {
              "use strict";
              e.exports = b
            },
            21998: (e, a, t) => {
              (0, t(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            37389: (e, a, t) => {
              t(21998)
            },
            39247: e => {
              "use strict";
              e.exports = c
            },
            40041: e => {
              "use strict";
              e.exports = l
            },
            40308: e => {
              "use strict";
              e.exports = i
            },
            50644: e => {
              "use strict";
              e.exports = u
            },
            58678: e => {
              "use strict";
              e.exports = n
            },
            62137: e => {
              "use strict";
              e.exports = t
            },
            66819: e => {
              "use strict";
              e.exports = f
            },
            74251: e => {
              "use strict";
              e.exports = h
            },
            82788: (e, a, t) => {
              const d = t(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = d(t.y.meta.url, e)
              }
            },
            94316: e => {
              "use strict";
              e.exports = s
            },
            95400: (e, a, t) => {
              "use strict";
              var d = {
                  "./bootstrap": () => t.e(9583).then((() => () => t(39583)))
                },
                c = (e, a) => (t.R = a, a = t.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var d = "default",
                      c = t.S[d];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[d] = e, t.I(d, a)
                  }
                };
              t.d(a, {
                get: () => c,
                init: () => f
              })
            },
            98674: e => {
              "use strict";
              e.exports = o
            }
          },
          k = {};

        function _(e) {
          var a = k[e];
          if (void 0 !== a) return a.exports;
          var t = k[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return w[e].call(t.exports, t, t.exports, _), t.loaded = !0, t.exports
        }
        return _.m = w, _.c = k, _.y = a, _.amdO = {}, _.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return _.d(a, {
            a
          }), a
        }, p = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, _.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          _.r(d);
          var c = {};
          e = e || [null, p({}), p([]), p(p)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = p(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, _.d(d, c), d
        }, _.d = (e, a) => {
          for (var t in a) _.o(a, t) && !_.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, _.f = {}, _.e = e => Promise.all(Object.keys(_.f).reduce(((a, t) => (_.f[t](e, a), a)), [])), _.u = e => "js/" + {
          114: "cac2c262b658e49162e084af93294f2e",
          131: "66addb73a054204bbb2d1436391500d8",
          278: "8d562976afacb7bb60f435b2180b3541",
          299: "451cfeee9dca70085fadd1b2299e2cd9",
          314: "21ee9c7bf3b0c6621d0df636267ae4e4",
          340: "05fa2c9e3ab5c87e9bda292cfe2bd944",
          377: "eb060c8bad55bfd98d976feea1a44644",
          510: "b2a0d50b8bdcdb7bc1f3e3a045e75ebd",
          544: "d746419e50499cf8cb461dea9bbf70c2",
          609: "2afc1ff85b090e329c22e2c0bf04e426",
          614: "bf7849bf836d1b0c4fbb34a69e3cda22",
          650: "26dd01a15ee8be789702063a63ccac16",
          662: "fef915623898b3af877f2ad1500c02cb",
          686: "424e8a51460ef1dce7878539b3ae60f5",
          824: "4a20c2fdfb23e32aea73d878a2826640",
          844: "d5d6df2a11a07244e056d3bc0d6aa7d9",
          888: "01a5dc6f0084276c0ba172a5f4f2f5a9",
          907: "0041d6078f5d3835e79424c9af979415",
          954: "04c58a9c78a9bcf678e597735e4f84b1",
          967: "0e189cedcbf0c88979710096aac8655b",
          969: "a4b80d61451510345a8c6012a0d3e3ff",
          1045: "389bd030aee6b3f4f260619ecf18dc37",
          1054: "369c37b08aee0ca41b02e8e0d56bdd1a",
          1138: "461a026074377b1ed1b3dd809bed1d74",
          1154: "f5fde285bbea4bc4d2ae48c735a7fcc8",
          1165: "7afe22b7fb5717e95d5f28c83e32f11e",
          1242: "f0ae5891cb8c3590464142cc81133f52",
          1299: "66ce03b1edcd57fe9c167ef6fb3219de",
          1411: "1d15ec1441357328f3f849e746ee14f6",
          1493: "916f9233fd765baf5e9c2e681e553399",
          1607: "dbda32582a6ebefce3a0040406fa0e70",
          1634: "bc82d6d2259976798369c6ced5dac722",
          1689: "7eee5c21ad4d6653a7ca58dc5efc5459",
          1735: "5701f4d09289caec9491f007d619d73b",
          1784: "7fa43b0a281e87d6b33549a592fba9de",
          1822: "ca8255f1729f382245566032aa2ca0ce",
          1868: "ffc07383a78fca652c938d77eb89fd80",
          2109: "a0602da3852eaffe4fd06f8cbb314579",
          2156: "da628a807d752da690270cc4c6e7c214",
          2171: "e1cae48111c25febcd405c348ee57c96",
          2221: "d869436455cfa8ff3f69feffb6ff0e33",
          2243: "07823ae8dcdce423923a03941fd48d9a",
          2315: "cd26f0cf56ac5656139cc24d1d5b13a8",
          2347: "c593219313790506ea64181cc13cf06b",
          2365: "c8db43246751a2849abfbb0bb2f6c55b",
          2398: "1968b0c6b4b254fa3241d24973118cd3",
          2454: "4271ae689c9587f19af3b867b2d11afb",
          2465: "18a7c25b30956131b22d5ee6806b94e4",
          2466: "6c29bcf1f8855d2311420166b5eb3064",
          2554: "12624dd96895d82034ea96e8fd8bc0de",
          2558: "b89df44371e00a1216b293a7d6aa4f87",
          2642: "f39e98c699cb15272356e1121e2a618b",
          2678: "5335c94e6a6f670dd98e9a7102996264",
          2698: "2a53a226490001ee0f97b091a5d37be6",
          2738: "39f196c4126c1c8e13b1d40950ec2407",
          2800: "6a7181e5bade6356cc5eab157bb9084d",
          2864: "51fcad9e1cb05d3accdab3e3d6a9b8e3",
          2941: "be0bd425633553196a7102eb8aa91106",
          3034: "16e079f8472829411b6fc972e5b96e0a",
          3094: "c6025f1f99e1203a9c54bd90eb69208f",
          3144: "218fa719cb272b4a36ae08e53d1108eb",
          3149: "8a7d5cfca097641422c582672a545732",
          3197: "6e69e121ea18da5b5046bc5e5448df06",
          3343: "876f7e7ca1f9225bb26567a2e4970956",
          3370: "14f10e8606f995f6bab7f51b1291df66",
          3404: "f97c01b483890998f618aca60c62133a",
          3475: "b93882776e72f6d055c12324dd47cc90",
          3486: "bf7f080b21a91c1334a3a21cc126e6da",
          3546: "bb39e9aa2b5cb6337516c565d8a50e73",
          3622: "1a74acd171f0a7ff2f6305e8514d23d0",
          3653: "b1a143ac0831c74db4b157949aa4dd1c",
          3684: "ab308cad65a5d5617db935248e6d61c1",
          3697: "0084fca51a1894a6fa9f1118592d5dd7",
          3721: "94b3935ae4a6a85f20c2e2646caa5ef6",
          3784: "791697d94075971f4f1209eb44cf4892",
          3885: "d88fe322580b5b4baf5d44d3a9ea66e5",
          3941: "92541eded710c5b12df8049f917518ad",
          3947: "1d73d9a91bedc07e5cb47c8f5cde1eb3",
          3963: "7209b3f6000ce849468cf68d3bae7a4c",
          3967: "5a9d9628ff8f76e1cb20290beb16ba0f",
          3972: "b2c66f6c93f26b8734dfbac4c529ad85",
          4011: "a5d7e9a6d6618712fa64b4530e5c5481",
          4045: "1a99227beefdfc0bdf9c1e33b116d4b9",
          4088: "3ea6302714c554731818f15a9bc1913c",
          4105: "49cd335419a08db739236b6d901264a1",
          4113: "6074b84b59d82a0c13dda4cddb02f7e6",
          4116: "75d1af133bbaa92f1514d0fe7b691af5",
          4186: "21ab47754fff60acde2ad3051c2269c7",
          4220: "e2d3ebe10b6b6320a6048f5649abb889",
          4446: "0676c49bac00743b60a130e3aa7a24b0",
          4528: "183bc5be80f5ad2b1f9d5018af420892",
          4621: "78c56a87d54680c918fdcf3a410ca34f",
          4700: "2b79c9a2035958df31c0177b204ce0da",
          4710: "0e6aea780a58ffdae3dd0463215226ba",
          4731: "5c015ed04a7acf29a8de56e33eb6d0e0",
          4799: "70a8bae1c96d644741e4f617358b6ecc",
          4831: "937b069c79a12644853be4032a572ddc",
          4851: "8138b093d0ad19e916d0b4093d1964c6",
          4861: "2a505657e899ea2ff8871c594ed70dcd",
          4913: "a94921a89899cda8144e2deee28f4818",
          4979: "c8bb936525dc470c1aaeeb3c7e725c58",
          4986: "e5e1f3de7a756f8c1c2c81c159847042",
          5018: "ea67408ac39a14bab1bb73d7c54f97bd",
          5233: "9c0bc7327d21e18d1e0bd7f12c955c98",
          5247: "fed56fc84f9dedb83f073277b16779be",
          5259: "a119ca56c52d7020664dae0d31f20430",
          5342: "b6348b8ecca67d030b46b29fb646be0c",
          5440: "a5dcfe5992a38c56516e0eb65b6c50cc",
          5530: "b42aadce18f3160bd96a880b623a4945",
          5639: "e491e169d5833a2cb4c6fa16296d3da2",
          5663: "d5fc5b924fa8fed08b9591046ee65426",
          5718: "b8abd651fdc52d9a12a614bfcf9e136f",
          5742: "c81f7f439a510195c8ce4647b25cb705",
          5830: "f5f29104732a695b63e391292ccde3d4",
          5832: "1d83fb12c272effba797d04683a4c888",
          5971: "7ce93352d03e0717ff3c856139853b8c",
          6019: "1cb2ee903f44d58c1812dfb68d03c2b9",
          6204: "5f1a99272fdbf9f461947c7af7623e07",
          6267: "8be647f007e1219393c1b9875f123c1f",
          6280: "1ef3304c01574746aaea921e0723776a",
          6285: "c4e266dee1711ccfc03a307a2f1fb12c",
          6361: "ff41b4151d3adfc577d8988dd139556e",
          6496: "f14d355f42cbbea26de8f4ab8145d8c2",
          6664: "0af07a067802130d5fd6cb1cbbf78b4e",
          6879: "2131bb0fde1ed6c058bf360aef042ed2",
          6891: "b33ea9e0261466f7c9dda774eec36c04",
          6934: "251cb998075c9155cd3792386ea930d3",
          6940: "836158a6036ce2f51f4fad1828736435",
          6956: "790dc6ac06d51791f77a07acd4451a9c",
          6997: "68875f59beef633874fc08f50fbaca18",
          7010: "8d09b0111b0344ab45d69f0f0b8f4afb",
          7039: "ccc25dba66a3157efef9ce93fd3fe561",
          7073: "19663f5794e7362b33db48980e192ce4",
          7157: "013935230d43c7b650e60e24d7fea6c5",
          7185: "8a8ed79b69c3d864fc72e1053a759d6d",
          7436: "3f0a243e770cbf7b0c2fde62c112c70d",
          7452: "1c9f0ccbb88767a403afa81c8a020a21",
          7453: "2c7ed5fa3a14882fccca53a4bc2f5d5e",
          7575: "a0d91ed5a72c66b9d6e1101e6c0956b3",
          7710: "b4e034784dfeddf4ebb799c03a17df0a",
          7728: "16ffc08b672b266c8ccfdd2c0d1c1b3e",
          7734: "c1723c599f6c7934cb6c13dce8ff1b7f",
          7845: "4c7ec278e52c021af87513264f9530fb",
          7970: "9828fc405f4e95970019810e7ea9da37",
          8030: "551354c9fd2f859bcc63e9ba317b1aed",
          8136: "6b593da4e8e6a31ebc68e02bc78c7281",
          8272: "addf0fe2fd272d4743fc03a376fe44f6",
          8305: "e6d8f5d7b5e286ed19e2ce1bfb2679d8",
          8391: "aba2f7430e0fde3c1835043168309b70",
          8395: "616b40154cad94368318f31edadaf9e0",
          8444: "43b72cfbc29faa3fa25e175a395be288",
          8463: "ea90395c453f113fbc17ba1d9e6025bc",
          8510: "0407e1052aa8ca4a16d0943c97528479",
          8626: "f8a7b61cf8ed4f042f4600193a0b98fd",
          8755: "741588c28bab17faf6709f059ba386b9",
          8756: "59034efe539d8c96c003602d7aedb10d",
          8763: "6656ac6d36afd8e5372a65bbbabae15f",
          8773: "9c6635b7f692e1a9c2f78c5651d9f9e2",
          8841: "bf5038c82db83e8f1644b50bed514118",
          8880: "4d7ad55384803d2a656fc09938a6ea56",
          8970: "facfb593c37f9324ba9c37ff1d373df7",
          9022: "f1f60b4d108d3a96c2b36e3fd694d59d",
          9028: "f1121fd0fdf32a12c6ba69834f5b0f29",
          9126: "e697afd73a071a4a736a5c82d244c173",
          9368: "b7f643aeee7192048f0585247284bc76",
          9377: "438e2d52920504cb88a0b7d6fd081afc",
          9421: "bb3f38e5caf8f7ba47472a78c0da2642",
          9474: "8bcfa285eefbad7f5410f7f74568d9a7",
          9499: "9d6d49559f8d854c2f4669801cbc3d0e",
          9566: "5165ea5cfc5ac7639b7327ac00fc7202",
          9583: "c9f98829dafa399795e2334c2e8a27ee",
          9615: "5ede7cd151e4a23763df4297e12b27c7",
          9642: "7816606273fb9a0aa157ed19dae78c84",
          9697: "d97a1fd8f88b3817ff5d1e0038c9464a",
          9829: "b60b28a04f34493564b84006a40cb90d",
          9936: "063df676c2df18412c697ec75369e7c7",
          9990: "3a484716ef47946e2b4d119ca4682e54"
        } [e] + ".js", _.miniCssF = e => "css/" + {
          544: "4e3aebb3dcf768d430a9e319192cb178",
          609: "6c3702b945e23d2a4b564b2039410d2e",
          650: "5f09753f1fe897b2a2998c52a055a269",
          967: "39ff845de0d2fcb1bf3791c8cbf70db8",
          1143: "b4eb91207cb1c0d6f6ebe85799ef51f3",
          1411: "a8ecc7459df8d60c1c4cd0ae33b93f68",
          1493: "8a12a1ca6c45759e55c6ac366bc2861b",
          1634: "e808b40c03ac1b835518751bdc4066be",
          1689: "bbc3aa4f4a5918e71769d52dc4e1ae69",
          1735: "eee6e9f0ed632fce1325de4b9e936e9d",
          1784: "d2b0b3aa0ce1c4f69f91d09ff9df2189",
          2454: "33bdecb88e11029d504a45c07708efcf",
          2738: "f570a444f163b90870c40dab3f01333b",
          3144: "b13e6ddc90cb08675d51cf9fbd895475",
          3684: "9a619201f06ab44ebffd1eedf4b66181",
          3784: "1b78d4fe05a5f12236b67224cf939aae",
          3947: "7acba850d92fd5d6eb886a603fe69082",
          3967: "6aaa4e1f68545c29c192b393969676c5",
          4088: "00da2e0e23a224264b47c1039da843d4",
          4113: "8c54eafe63b721a4b746d728c7cc8b9e",
          4116: "eee6e9f0ed632fce1325de4b9e936e9d",
          4221: "103081b3d23c2e415ff7fd2af7854845",
          4986: "3a0244366a6892f54e57fbd7ec3b8f04",
          5342: "487c3cc9f7c6da71dbe6cd7fcdc30712",
          6175: "27e6c362322ad20e839e035848dfadf8",
          6602: "103081b3d23c2e415ff7fd2af7854845",
          7421: "9a619201f06ab44ebffd1eedf4b66181",
          7728: "ee522b6566d7cc1dad8eb5b91b1682eb",
          7734: "9f736656b64d08c10be4436477e505d3",
          8030: "44538e156e338ff9fc4b30e95df98d3a",
          8135: "eba5ca2952033fb543111765a9b069a0",
          8395: "615045abc585319694acddea25b967f4",
          8510: "071cc98fed939b12a1345c71ee2e5bcd",
          8763: "e6dc1f510b0a4211c6e54bff1fd4c607",
          9393: "6a9e1a41fbf5b4b2592198f759298318",
          9499: "a66604d9c40591515e417b1c2691f870"
        } [e] + ".css", _.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), _.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), _.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), m = {}, g = "@rockstargames/sites-rockstargames:", _.l = (e, a, t, d) => {
          if (m[e]) m[e].push(a);
          else {
            var c, f;
            if (void 0 !== t)
              for (var r = document.getElementsByTagName("script"), o = 0; o < r.length; o++) {
                var b = r[o];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == g + t) {
                  c = b;
                  break
                }
              }
            c || (f = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, _.nc && c.setAttribute("nonce", _.nc), c.setAttribute("data-webpack", g + t), c.src = e), m[e] = [a];
            var n = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var d = m[e];
                if (delete m[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(t))), a) return a(t)
              },
              s = setTimeout(n.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = n.bind(null, c.onerror), c.onload = n.bind(null, c.onload), f && document.head.appendChild(c)
          }
        }, _.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, _.nmd = e => (e.paths = [], e.children || (e.children = []), e), y = {
          1626: [41626],
          1634: [39848, 41263],
          2405: [12405],
          3137: [53137],
          3416: [33416],
          5202: [35202],
          6766: [36766],
          7538: [47538],
          7728: [31879],
          8136: [9566],
          8763: [94057],
          8778: [78778],
          8987: [88987],
          9147: [29147]
        }, v = {
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
          47538: ["default", "./site-routes/RedDeadRedemption", 40308],
          53137: ["default", "./index", 98674],
          78778: ["default", "./index", 74251],
          88987: ["default", "./index", 94316],
          94057: ["default", "./utils", 11955]
        }, _.f.remotes = (e, a) => {
          _.o(y, e) && y[e].forEach((e => {
            var t = _.R;
            t || (t = []);
            var d = v[e];
            if (!(t.indexOf(d) >= 0)) {
              if (t.push(d), d.p) return a.push(d.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), _.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                f = (e, t, f, r, o, b) => {
                  try {
                    var n = e(t, f);
                    if (!n || !n.then) return o(n, r, b);
                    var s = n.then((e => o(e, r)), c);
                    if (!b) return s;
                    a.push(d.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                r = (e, a, c) => f(a.get, d[1], t, 0, o, c),
                o = a => {
                  d.p = 1, _.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(_, d[2], 0, 0, ((e, a, t) => e ? f(_.I, d[0], 0, e, r, t) : c()), 1)
            }
          }))
        }, (() => {
          _.S = {};
          var e = {},
            a = {};
          _.I = (t, d) => {
            d || (d = []);
            var c = a[t];
            if (c || (c = a[t] = {}), !(d.indexOf(c) >= 0)) {
              if (d.push(c), e[t]) return e[t];
              _.o(_.S, t) || (_.S[t] = {});
              var f = _.S[t],
                r = "@rockstargames/sites-rockstargames",
                o = (e, a, t, d) => {
                  var c = f[e] = f[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : r > o.from)) && (c[a] = {
                    get: t,
                    from: r,
                    eager: !!d
                  })
                },
                b = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var c = _(e);
                    if (!c) return;
                    var f = e => e && e.init && e.init(_.S[t], d);
                    if (c.then) return n.push(c.then(f, a));
                    var r = f(c);
                    if (r && r.then) return n.push(r.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === t && (o("@foundry/icons", "4.1.4", (() => Promise.all([_.e(4105), _.e(2109), _.e(2229), _.e(4853), _.e(3684)]).then((() => () => _(32109))))), o("@foundry/react", "4.1.5", (() => Promise.all([_.e(3972), _.e(4105), _.e(4446), _.e(1689), _.e(2454), _.e(2229), _.e(4853), _.e(8618), _.e(954)]).then((() => () => _(12454))))), o("@rockstar/sentry", "5.1.1", (() => Promise.all([_.e(4979), _.e(2229), _.e(3404)]).then((() => () => _(44979))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([_.e(2315), _.e(2229), _.e(1154)]).then((() => () => _(67439))))), o("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([_.e(2229), _.e(9623), _.e(4116)]).then((() => () => _(64116))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([_.e(3972), _.e(6496), _.e(3149), _.e(4105), _.e(4446), _.e(2229), _.e(1898), _.e(9623), _.e(1045), _.e(5966), _.e(4281), _.e(8618), _.e(1411), _.e(8444), _.e(6175)]).then((() => () => _(94267))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([_.e(3972), _.e(6496), _.e(3149), _.e(6204), _.e(2229), _.e(9623), _.e(1045), _.e(5966), _.e(8305)]).then((() => () => _(70344))))), o("@rsgweb/router", "1.0.0", (() => Promise.all([_.e(2229), _.e(9623), _.e(1165)]).then((() => () => _(53546))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([_.e(3149), _.e(6956), _.e(2229), _.e(4853), _.e(5966), _.e(4281), _.e(7845), _.e(4221)]).then((() => () => _(47845))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([_.e(3972), _.e(6496), _.e(3149), _.e(2229), _.e(9623), _.e(1045)]).then((() => () => _(82261))))), o("dompurify", "2.5.8", (() => _.e(340).then((() => () => _(30340))))), o("framer-motion", "7.10.3", (() => Promise.all([_.e(3963), _.e(2229), _.e(7710)]).then((() => () => _(53963))))), o("graphql", "16.11.0", (() => _.e(5440).then((() => () => _(55440))))), o("history", "4.10.1", (() => _.e(2465).then((() => () => _(72465))))), o("prop-types", "15.8.1", (() => _.e(8626).then((() => () => _(18626))))), o("react-adaptive-hooks", "0.0.8", (() => Promise.all([_.e(2229), _.e(7185)]).then((() => () => _(27185))))), o("react-device-detect", "2.2.3", (() => Promise.all([_.e(9421), _.e(2229)]).then((() => () => _(89421))))), o("react-dom", "18.3.1", (() => Promise.all([_.e(6019), _.e(2229)]).then((() => () => _(66019))))), o("react-focus-lock", "2.13.6", (() => Promise.all([_.e(2800), _.e(2229), _.e(7145), _.e(1299)]).then((() => () => _(72800))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([_.e(2229), _.e(844)]).then((() => () => _(40844))))), o("react-router-dom", "6.30.0", (() => Promise.all([_.e(510), _.e(2558), _.e(2229), _.e(4853), _.e(3213)]).then((() => () => _(32558))))), o("react-router", "6.30.0", (() => Promise.all([_.e(510), _.e(9697), _.e(2229)]).then((() => () => _(49697))))), o("react", "18.2.0", (() => _.e(614).then((() => () => _(20614))))), o("react", "18.3.1", (() => _.e(1138).then((() => () => _(11138))))), b(62137), b(39247), b(50644), b(40308), b(98674), b(40041), b(29441), b(11955), b(58678), b(94316), b(66819), b(74251), b(25136)), n.length ? e[t] = Promise.all(n).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          _.g.importScripts && (e = _.g.location + "");
          var a = _.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var d = t.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = t[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), _.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = t[1] ? a(t[1]) : [];
              return t[2] && (d.length++, d.push.apply(d, a(t[2]))), t[3] && (d.push([]), d.push.apply(d, a(t[3]))), d
            },
            a = e => {
              var t = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                d += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var c = 1, f = 1; f < e.length; f++) c--, d += "u" == (typeof(o = e[f]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, o);
                return d
              }
              var r = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                r.push(0 === o ? "not(" + b() + ")" : 1 === o ? "(" + b() + " || " + b() + ")" : 2 === o ? r.pop() + " " + r.pop() : a(o))
              }
              return b();

              function b() {
                return r.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, d) => {
              if (0 in a) {
                d = e(d);
                var c = a[0],
                  f = c < 0;
                f && (c = -c - 1);
                for (var r = 0, o = 1, b = !0;; o++, r++) {
                  var n, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (r >= d.length || "o" == (s = (typeof(n = d[r]))[0])) return !b || ("u" == i ? o > c && !f : "" == i != f);
                  if ("u" == s) {
                    if (!b || "u" != i) return !1
                  } else if (b)
                    if (i == s)
                      if (o <= c) {
                        if (n != a[o]) return !1
                      } else {
                        if (f ? n > a[o] : n < a[o]) return !1;
                        n != a[o] && (b = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= c) return !1;
                    b = !1, o--
                  } else {
                    if (o <= c || s < i != f) return !1;
                    b = !1
                  } else "s" != i && "n" != i && (b = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (r = 1; r < a.length; r++) {
                var h = a[r];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, d) : !u())
              }
              return !!u()
            },
            d = (a, d, c, f) => {
              var r = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[d]) : a[d];
              return (d = Object.keys(r).reduce(((a, d) => !t(c, d) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var d = 0;;) {
                  if (d >= a.length) return d < t.length && "u" != (typeof t[d])[0];
                  var c = a[d],
                    f = (typeof c)[0];
                  if (d >= t.length) return "u" == f;
                  var r = t[d],
                    o = (typeof r)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && c != r) return c < r;
                  d++
                }
              })(a, d) ? a : d), 0)) && r[d]
            },
            c = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, d, c, f) {
              var r = _.I(a);
              return r && r.then && !d ? r.then(e.bind(e, a, _.S[a], t, !1, c, f)) : e(a, _.S[a], t, d, c, f)
            })(((e, t, f, r, o, b) => {
              if (!((e, a) => e && _.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, b);
              var n, s = d(t, f, o, r);
              return s ? ((n = s).loaded = 1, n.get()) : b ? b() : void c(((e, t, d, c, f) => {
                var r = e[d];
                return "No satisfying version (" + a(c) + ")" + (f ? " for eager consumption" : "") + " of shared module " + d + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(r).map((e => e + " from " + r[e].from)).join(", ")
              })(t, e, f, o, r))
            })),
            r = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => _.e(1138).then((() => () => _(11138))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => _.e(6019).then((() => () => _(66019))))),
              78618: () => f("default", "@foundry/icons", !1, [1, 4], (() => Promise.all([_.e(2109), _.e(4853), _.e(7421)]).then((() => () => _(32109))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([_.e(510), _.e(2558), _.e(4853), _.e(3213)]).then((() => () => _(32558))))),
              61898: () => f("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([_.e(4446), _.e(1689), _.e(2454), _.e(4853)]).then((() => () => _(12454))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => _.e(5440).then((() => () => _(55440))))),
              28897: () => f("default", "react-device-detect", !1, [1, 2, 2, 3], (() => _.e(9421).then((() => () => _(89421))))),
              94944: () => f("default", "react-adaptive-hooks", !1, [3, 0, 0, 8], (() => _.e(9566).then((() => () => _(27185))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([_.e(3972), _.e(6496), _.e(9623), _.e(1045)]).then((() => () => _(82261))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([_.e(3972), _.e(6496), _.e(6204), _.e(9623), _.e(1045), _.e(686)]).then((() => () => _(70344))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([_.e(2315), _.e(8773)]).then((() => () => _(67439))))),
              57145: () => f("default", "prop-types", !1, [1, 15, 8, 1], (() => _.e(8626).then((() => () => _(18626))))),
              33213: () => f("default", "react-router", !1, [1, 6, 11, 2], (() => _.e(9697).then((() => () => _(49697))))),
              90: () => f("default", "history", !1, [1, 5, 3, 0], (() => _.e(2465).then((() => () => _(72465))))),
              20270: () => f("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([_.e(4446), _.e(1898), _.e(1411)]).then((() => () => _(94267))))),
              55274: () => f("default", "@rsgweb/router", !1, [1, "workspace:^"], (() => _.e(3546).then((() => () => _(53546))))),
              63582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], (() => _.e(3963).then((() => () => _(53963))))),
              87592: () => f("default", "@rockstar/sentry", !1, [1, 5, 1, 1], (() => _.e(4979).then((() => () => _(44979))))),
              95945: () => f("default", "react-focus-lock", !1, [1, 2, 9, 6], (() => Promise.all([_.e(2800), _.e(7145)]).then((() => () => _(72800))))),
              66664: () => f("default", "react-intersection-observer", !1, [1, 9, 13, 1], (() => _.e(8463).then((() => () => _(40844))))),
              2973: () => f("default", "dompurify", !1, [1, 2, 4, 1], (() => _.e(340).then((() => () => _(30340))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([_.e(6956), _.e(7845), _.e(6602)]).then((() => () => _(47845))))),
              90582: () => f("default", "@rsgweb/modules-core-screenshot-viewer", !1, [1, "workspace:^"], (() => _.e(1735).then((() => () => _(64116))))),
              61913: () => f("default", "react", !1, [1, 18, 2, 0], (() => _.e(614).then((() => () => _(20614)))))
            },
            b = {
              582: [90582],
              1045: [16565, 28897, 94944],
              1634: [90, 20270, 55274, 63582, 87592, 95945],
              1898: [61898],
              1913: [61913],
              2229: [62229],
              2973: [2973],
              3213: [33213],
              4281: [2918, 81788],
              4283: [66664],
              4853: [44853],
              5966: [95966],
              7145: [57145],
              8618: [78618],
              8763: [92440],
              9623: [9623]
            },
            n = {};
          _.f.consumes = (e, a) => {
            _.o(b, e) && b[e].forEach((e => {
              if (_.o(r, e)) return a.push(r[e]);
              if (!n[e]) {
                var t = a => {
                  r[e] = 0, _.m[e] = t => {
                    delete _.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var d = a => {
                  delete r[e], _.m[e] = t => {
                    throw delete _.c[e], a
                  }
                };
                try {
                  var c = o[e]();
                  c.then ? a.push(r[e] = c.then(t).catch(d)) : t(c)
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
            _.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                544: 1,
                609: 1,
                650: 1,
                967: 1,
                1143: 1,
                1411: 1,
                1493: 1,
                1634: 1,
                1689: 1,
                1735: 1,
                1784: 1,
                2454: 1,
                2738: 1,
                3144: 1,
                3684: 1,
                3784: 1,
                3947: 1,
                3967: 1,
                4088: 1,
                4113: 1,
                4116: 1,
                4221: 1,
                4986: 1,
                5342: 1,
                6175: 1,
                6602: 1,
                7421: 1,
                7728: 1,
                7734: 1,
                8030: 1,
                8135: 1,
                8395: 1,
                8510: 1,
                8763: 1,
                9393: 1,
                9499: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var d = _.miniCssF(e),
                  c = _.p + d;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), d = 0; d < t.length; d++) {
                      var c = (r = t[d]).getAttribute("data-href") || r.getAttribute("href");
                      if ("stylesheet" === r.rel && (c === e || c === a)) return r
                    }
                    var f = document.getElementsByTagName("style");
                    for (d = 0; d < f.length; d++) {
                      var r;
                      if ((c = (r = f[d]).getAttribute("data-href")) === e || c === a) return r
                    }
                  })(d, c)) return a();
                ((e, a, t, d, c) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", _.nc && (f.nonce = _.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) d();
                    else {
                      var r = t && t.type,
                        o = t && t.target && t.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = r, b.request = o, f.parentNode && f.parentNode.removeChild(f), c(b)
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
          _.f.j = (a, t) => {
            var d = _.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) t.push(d[2]);
              else if (/^(1(143|626|898|913)|2(229|405|973)|3(137|213|416)|4(2(21|81|83)|853)|5(202|82|966)|6(175|602|766)|7(145|421|538)|8(135|618|778|987)|9(147|393|623))$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((t, c) => d = e[a] = [t, c]));
              t.push(d[2] = c);
              var f = _.p + _.u(a),
                r = new Error;
              _.l(f, (t => {
                if (_.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var c = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  r.message = "Loading chunk " + a + " failed.\n(" + c + ": " + f + ")", r.name = "ChunkLoadError", r.type = c, r.request = f, d[1](r)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var d, c, f = t[0],
                r = t[1],
                o = t[2],
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (d in r) _.o(r, d) && (_.m[d] = r[d]);
                o && o(_)
              }
              for (a && a(t); b < f.length; b++) c = f[b], _.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            t = self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), _.nc = void 0, _(37389), _(95400)
      })())
    }
  }
}));