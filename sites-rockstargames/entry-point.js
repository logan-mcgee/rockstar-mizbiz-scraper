! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d999e055-9bd9-45ba-951a-e4fd42389289", e._sentryDebugIdIdentifier = "sentry-dbid-d999e055-9bd9-45ba-951a-e4fd42389289")
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
        var e, m, y, g, v, w, k = {
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
          40: "c95a2a90433c0487d1b37376e8995a91",
          131: "e7a438538294f20162f5c5def612ad83",
          188: "3a313ed2bffa8308a6b10cab2ee2ec55",
          220: "5b7a24262c8c1a5696a854ad5e8a7896",
          278: "bc270cfedd63d4411bc6832acf22e558",
          299: "5ffca15685f77be863fd7a1c9cb64e75",
          314: "c5d0ace894879ca7bb43e934d09fbdde",
          350: "d8b13bf510ee66a780d52ce0493e9c24",
          561: "08e578621a3ce14542cca57c2356482a",
          582: "86ab56c4f8b229d2be3bf36e806736d1",
          621: "6688db6d31303817f4c74b6a38193d1d",
          633: "1c2c9c38074ece9ca3cf53db0f513cab",
          662: "38b226d619107c8f29babec4353b57c7",
          721: "6cba577f4af5ba3d33f6fb46c46803a1",
          824: "b4edd5b25e280a6cfeb7b5c5e3d1fa86",
          907: "f29c40945abc9bcff079a140a753888f",
          1054: "1db5978b2d080c4449a6be366b794c76",
          1144: "0c4782f3d3ea414f19512dbb53e7d908",
          1201: "bea49edc0e3be3e6b5f9522661ef32c3",
          1212: "55f3663071e99fe290f7c1c691c34434",
          1235: "2df883c71a50869df96cbb66b8a86ba3",
          1242: "8c03548fec9ce1a22129e63cb72e066c",
          1299: "7e0e38343cbe110b661085d5e351992c",
          1324: "e6b656a790e43b79977b6bd7f4d92b26",
          1626: "1a821a20005818702c8126fb54dfe381",
          1667: "dba41c172e9dca2ff0fa42fb82d8db2b",
          1673: "734c7f8284b43c9e5f741431fd1ff1f5",
          1720: "b28a97c3e14aa4787ce25ee23781be1e",
          1723: "fac690094f0d69ac25d40169d89b5cda",
          1735: "cef50200fecbe37b295a712dff17bf0a",
          1794: "fe44165d00879d426878d6e0e23886de",
          1822: "2c3faa141fd23c657109779544dbef07",
          1868: "3e97f4a9fa5a5970a90daf5790d8e0ed",
          1911: "f4d5cfd26f858d8aa1ef467ce6ebfcb3",
          1962: "7dd4eff4eb5175b7942fae6ca9e2930c",
          2024: "2dc18cbf57e4bbc23db730f109f03828",
          2156: "c97d1b67ec2775c041e7f461c71cba95",
          2158: "3177bdae70fabaaefaf766ac710310e4",
          2171: "69d7dfba338e96541f6bcb3fa002d548",
          2185: "afc59f448eea5b2bdabc5ae94db43dbc",
          2202: "a901590e3ca1379304dd89c0c29a5e9f",
          2221: "0fd8dc87a3c02777b8fd07c562a503b4",
          2229: "09cc5d89bb04255826f1ae50a462ddda",
          2234: "26229fd3053d823644666d3f67910f3e",
          2243: "ee3ddc2eab574a43718b0757682f08ae",
          2246: "f970128d08083528721c0628872d310d",
          2347: "80ca074744518323aac747439c956d6e",
          2365: "15d7ed363391c57ba374ddd964e89d58",
          2398: "b6b0f1bf29f6a67d7a57adc60cdcf232",
          2405: "08dc736e9035acae4fb2cc1580ebe72e",
          2466: "014cd3125cba3ac30cde2025d13c61cb",
          2642: "db8f1b77bd99fd13564ca574f8d45c37",
          2678: "02620f048f4d21ae213b58d4734a08a2",
          2681: "09607cf654856404fea40448f59267e1",
          2718: "4dca17cbd6159df0189a624f506dc9d3",
          2781: "68324bf4ee603d7c1393537b4bd5e567",
          2817: "5c52070ce2b2f0cd0525635a1a44d47e",
          2824: "2c382aa2d3e62652604c8c26288a0036",
          2843: "5d80f0a6c5e37ca6d23d20d97edb6145",
          2864: "d68c5dc547b32e00f81f30c4b78a7a4b",
          2973: "01b69540ffb90dd2d3c6b068f9ef462a",
          3002: "52fa8a53584754b62b5727e91fb68857",
          3034: "61f4f32d3b45e038f1ffd30b892513a9",
          3035: "78e3a2d031f8adbf0185771ed9eeb7d9",
          3037: "eda6c60f0dfd991a79ade3fc356d9675",
          3137: "6fad3aa841b61d020d8713acb0bd6e50",
          3197: "a2c9f429bc4d44fea3c27165a7e30683",
          3213: "205fe2929653424fc55178dfd74464d8",
          3241: "9ed1b70025ce3493222e7710fd74f90f",
          3274: "79243c13134aa1c4b47b631ebf56a183",
          3326: "e53eed7d550374046f58ab329d0afa7e",
          3343: "6dc432908df972f0eb8d770d42773228",
          3370: "624db278718fbfee06140b98669eb425",
          3416: "36a0de19a237e068064bcd21fd3accf3",
          3447: "8f9debc8c8c4d5fd45e88822b41297d8",
          3475: "65f3e6127cdeb9f2389ff3265aec70c7",
          3486: "596b894efeb1b5f9b33e829e659a1fa1",
          3511: "42fdea225f172c03e4cb5516063166f2",
          3557: "9c200a04b6b576fdc3a2b28e21c338bc",
          3582: "c7347a910c7436c94ba9803f70733569",
          3697: "ec813b28f58f4e340438d7ec868cb3d7",
          3733: "4bf6b33312f25b2fdb0497729bd929f4",
          3774: "bb4becccfbd78bcc500216721b487e92",
          3806: "6fd2e665ef63607a2b1c916e980873ba",
          3855: "656ab88d2411e74743d39d38d559a5df",
          3885: "eb5fa20e92d33596ba57a7569f647af3",
          3914: "c783b17d3fc9d231257db072b8082e9b",
          3941: "12eb6ce322ec2334a618e0cf9b277689",
          4011: "4f5cb9a8aa4a3f73d3c63ae5989bf9b2",
          4054: "28305d818de19219fc383525b67cb10e",
          4116: "fe68815df635349fbfd411ad320329f6",
          4255: "1a56e5d7c12a16b27bb10e02410b836a",
          4281: "b01d57b5747950dab8b37eb5d0bd3d81",
          4459: "9bf2158e6a3864bb9b67b11e665f79d1",
          4505: "6c7be381d0338fd7651a15b8dfd0f795",
          4528: "f1102e2462805ea5a421330fcfd27862",
          4621: "4727330b9fb9e1b75bb2bc56dabfc515",
          4700: "e287fb740556e723e188a1a9436553ea",
          4710: "78d0de3ce6b584330a11a082e5324800",
          4731: "9cd3e099a59f45317009cd2354c4fbb1",
          4783: "c2d02024ce9e852116189cc14de92793",
          4799: "27c9bfbfea7dae7a58d33f0a4bc39225",
          4841: "0aca1faa857d71ef265a40f13ff73a5c",
          4851: "8f0833c62a4a4872959181da2d82434b",
          4853: "7e139007b68c46b106bb429ce0dba4c3",
          4861: "ca2b1ac7e05c9e27aadce7113d19dd4d",
          4913: "323f08944362a41db0a83c22546bf181",
          4963: "ce3f6bae7ed2cc4f405b1bdebafa571b",
          4967: "7b554f6489b216e747ce11ccf13606e6",
          5018: "4cd2c583a1c2130e087fbb91c82d406e",
          5019: "1f5e7ddc96415c9b26bb8ea407abe226",
          5045: "22e8e93a0a8c8a3ab06d1bfecb5fca6f",
          5075: "969eac506206f3af26ce9e98532c3634",
          5142: "9fbbf5882d62604054bb7501748c098d",
          5162: "e1d5c0f15207f13af287d783712c6c7b",
          5202: "03fe7c029714d51b88a58db5460c4899",
          5233: "5b6355611ad38e1347750e165920c7b1",
          5254: "47594414dbc503b89fb670ad9eeecb5d",
          5259: "a33569752c53351a8f72f7fbec90c73a",
          5261: "1046f8b20224441161f46b8a0702641b",
          5363: "15cc4adf719053b1c8e8e74cfd361371",
          5388: "69506bde31c928e74f711653913a92e4",
          5440: "eb53b44235787c63d7ffbeba2f4e7b3a",
          5442: "35a553adef82689973f6c8fcd571ba81",
          5447: "1f3a93e46a589ffd0bd4ac24e257e7ee",
          5499: "8f15d309b00bc4ef8b94841f3d942fe6",
          5530: "6adaf77bd3aa6e631e5338bf19af3051",
          5633: "875d70530f55c85c5ff821ee6f4c679f",
          5639: "c172b08a7b98c08b41ecfa44fece2330",
          5652: "cbcae98cdaa0e2ffec3088e361cacda9",
          5663: "cf70a38222589e1b7f382ffe08c88cd2",
          5672: "bc3125a6c538b032c15a4838e73b68b2",
          5742: "56f2b3e6a69d2f9346efb06cdeb47e10",
          5765: "866ae12f7f0b673db8cab2303407e2bd",
          5794: "146a1bd6e923c98663bd7a3582e00b51",
          5830: "91b6d9a62a56674578358d771d669b6a",
          5832: "f7b87f87a353d14d87b7554fe0bd26e2",
          5833: "f351b381ca63dff6f0fd50e91ad0a64f",
          5881: "cdfb0876856ec3a51374034103d6040a",
          5918: "53b7bdd6c1501788975d36561c8c93bf",
          5966: "4b83c618f3ebfdee22c2cd5e3d2332f6",
          5981: "fdd01dcb7a1bdcfde1e4e35538bbbe82",
          6035: "824f8c4c6118d1dead368e83959a80ae",
          6267: "57add674e643d1fe37d587e06d01776e",
          6274: "93b5395590c9ceb3443d9f7a624b179b",
          6280: "bc7287d0caf8cfa2e5a975417fcd615f",
          6285: "6055380eed1177889b87785e454aaef5",
          6361: "50025a7ab928a9a5aa554381521f368b",
          6383: "23359fcd2fe65b7ecb24d87a4a5659e1",
          6401: "cc72cb6aced49063430e50c149ec7837",
          6407: "13115c33b6fa88e378316a1be88ab81d",
          6536: "08c6e0f4c740204806376ca9f1de59b7",
          6612: "e636d37118c5626e434c688979af33fc",
          6664: "d2f6da7d270bc072941983513c489343",
          6766: "63dff820b1c113e52ea4c83bd6e20ece",
          6840: "4619280f0ab8d171d6405ae9f94338ef",
          6879: "5252b672a4cac31144a3df9e169d9ee6",
          6891: "7b8a41d088d1e967c362d20ddbd5360a",
          6893: "7c71348320092de1641378e28eb003cf",
          6973: "1dbe2ea5fa694ea7a1952fe01b728714",
          6997: "cec112248ff937c8bcb58e61ec277125",
          7010: "7dba167f118cccbbb8b71ad6c0575414",
          7040: "22e43474f5b05f3327d5f0f4c7930791",
          7057: "ac62f326ec81f22675af2a83db5e9882",
          7073: "2c998d5bd814e027a347618dd54ff473",
          7145: "9b8d6e4bcb13053d136492e8d61a6e2d",
          7214: "a3de1b15af563665ece3233632a9eee7",
          7269: "6f6b457eddf94830520e07c7262dd846",
          7339: "1cfacc004a36b4c1028c44801369c0ca",
          7344: "03f8ef04b0753606edfa43f307707b8b",
          7436: "beec2e37f85d06436fa9ca5d88aedaf3",
          7452: "6a2f51aaa2dbcd2f6624cb2d01ea3641",
          7453: "63e32071e922dafe5256385937dee6ce",
          7538: "d9f7c5641a68d94b66a9510eeac456cd",
          7547: "316bf108943ad68d3e00b435fd62ec2d",
          7575: "414359cf8ac4955be0440fcc5b9fe1f4",
          7587: "5775088b030d7fcdf35453659390bc73",
          7642: "6895250f7c16dae72c8eb4ed8f4d8f77",
          7744: "803c5eb73c4fe38c0a10ec5c98ef2051",
          7851: "f99ce05d086da3cdc25c2360484d8e92",
          7970: "e9ca897bcf3e3382a1066793f3d10a3d",
          8069: "2d7087b909ee67b3a0be2c0f05f7f3cc",
          8272: "62ee2b433619496e70371a0fbfcf903d",
          8292: "d3b05355c592941a5c11169f1ec3dede",
          8386: "f822f42700b65973040be6ad0b705481",
          8391: "4d463b500d6b1921890b3b38edd6ebb5",
          8755: "052b8b143c3ab6806a9fe7c8486dbf95",
          8764: "a3cae032ba802417eef0d15c250e18d5",
          8778: "35d9094055fbc81abe7315d74abcf016",
          8786: "161316f1ad07ca6f8c95a40565c2a072",
          8880: "52c6b729e86affb22ef7ee4269fe442f",
          8970: "4bf22b929dd26707b2e6b1b5728d320e",
          8987: "6cf1a79f902cd3b509e1aae50f0ec903",
          9022: "637815df2641bd2816d9910a18badffd",
          9028: "7431c4c91610496a1fee5af172bbf2f7",
          9081: "8beafb2cd960631bd2e66e864454f0b2",
          9126: "c129c92a66d6ced2d1cc71454225e3ed",
          9147: "bd3790b7b70e3a4c1cb84ffb6eb393e0",
          9214: "0053923f0a668b0af34f7ddf4cdbe195",
          9235: "5445e33c98ba793fd94a92c4e977c54e",
          9323: "3d70ffe1b920f0dd4fd9010f994d7934",
          9339: "1c209c0d065467e6c1a20f4b96e0f0b9",
          9377: "f9a98a60c7fb30baa7031c43aa004f12",
          9441: "29e76d9a75f073d35660e9f5a14c6079",
          9615: "ba651449215c0d4819f4a73198ee586a",
          9623: "e677c6c8770a217b9e503ab3ec900c20",
          9775: "79e8efc388bcfbb6e69f8bbfc83ad249",
          9834: "7e01e2891a0cb72a461b1697e5f33024",
          9873: "6cc24769a29a65211e714aa57e471f47",
          9936: "970c2f6cf9265fcd01978a6a870dbab0",
          9990: "e8f03fea043fcc16e9c581db30f07207"
        } [e] + ".js", P.g = function() {
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
        }), e), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), y = {}, g = "@rockstargames/sites-rockstargames:", P.l = (e, a, c, f) => {
          if (y[e]) y[e].push(a);
          else {
            var d, t;
            if (void 0 !== c)
              for (var r = document.getElementsByTagName("script"), b = 0; b < r.length; b++) {
                var o = r[b];
                if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == g + c) {
                  d = o;
                  break
                }
              }
            d || (t = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, P.nc && d.setAttribute("nonce", P.nc), d.setAttribute("data-webpack", g + c), d.src = e), y[e] = [a];
            var n = (a, c) => {
                d.onerror = d.onload = null, clearTimeout(s);
                var f = y[e];
                if (delete y[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach((e => e(c))), a) return a(c)
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
              return "default" === c && (b("@foundry/icons", "3.5.14", (() => Promise.all([P.e(9441), P.e(5447), P.e(2229), P.e(4853), P.e(1735)]).then((() => () => P(15447))))), b("@foundry/icons", "4.0.2", (() => Promise.all([P.e(9441), P.e(5075), P.e(2229), P.e(4853), P.e(4116)]).then((() => () => P(55075))))), b("@foundry/react-v1", "1.28.2", (() => Promise.all([P.e(6035), P.e(9441), P.e(350), P.e(1720), P.e(2229), P.e(4853), P.e(1911), P.e(3855)]).then((() => () => P(20350))))), b("@rockstar/sentry", "5.0.1", (() => Promise.all([P.e(3774), P.e(2229)]).then((() => () => P(93774))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(2024), P.e(2229), P.e(1673)]).then((() => () => P(85950))))), b("@rsgweb/modules-core-screenshot-viewer", "0.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(1201)]).then((() => () => P(71201))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(5442), P.e(9339), P.e(2229), P.e(9623), P.e(2246), P.e(5966), P.e(7344)]).then((() => () => P(66369))))), b("@rsgweb/router", "1.0.0", (() => Promise.all([P.e(2229), P.e(9623), P.e(2781)]).then((() => () => P(42781))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([P.e(5442), P.e(8292), P.e(2229), P.e(4853), P.e(5966), P.e(9834), P.e(4281), P.e(4967)]).then((() => () => P(99834))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(6035), P.e(3806), P.e(5442), P.e(2229), P.e(9623), P.e(2246)]).then((() => () => P(17560))))), b("dompurify", "2.4.7", (() => P.e(561).then((() => () => P(20561))))), b("framer-motion", "7.10.3", (() => Promise.all([P.e(9235), P.e(2229), P.e(1299)]).then((() => () => P(19235))))), b("graphql", "16.10.0", (() => P.e(5440).then((() => () => P(55440))))), b("history", "4.10.1", (() => P.e(7642).then((() => () => P(7642))))), b("prop-types", "15.8.1", (() => P.e(2817).then((() => () => P(72817))))), b("react-adaptive-hooks", "0.0.8", (() => Promise.all([P.e(2229), P.e(3002)]).then((() => () => P(73002))))), b("react-device-detect", "2.2.3", (() => Promise.all([P.e(2158), P.e(2229)]).then((() => () => P(12158))))), b("react-dom", "18.2.0", (() => Promise.all([P.e(5794), P.e(2229)]).then((() => () => P(5794))))), b("react-focus-lock", "2.9.6", (() => Promise.all([P.e(9775), P.e(2229), P.e(7145), P.e(3035)]).then((() => () => P(19775))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([P.e(2229), P.e(6383)]).then((() => () => P(56383))))), b("react-intersection-observer", "9.13.1", (() => Promise.all([P.e(2229), P.e(5363)]).then((() => () => P(95363))))), b("react-router-dom", "6.17.0", (() => Promise.all([P.e(4255), P.e(6407), P.e(2229), P.e(3213)]).then((() => () => P(6407))))), b("react-router", "6.17.0", (() => Promise.all([P.e(4255), P.e(6612), P.e(2229)]).then((() => () => P(96612))))), b("react", "18.2.0", (() => P.e(3447).then((() => () => P(13447))))), o(62137), o(39247), o(71127), o(50644), o(40308), o(98674), o(40041), o(29441), o(11955), o(58678), o(94316), o(66819), o(74251), o(25136)), n.length ? e[c] = Promise.all(n).then((() => e[c] = 1)) : e[c] = 1
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
              22414: () => f("default", "@foundry/icons", [1, 3], (() => P.e(5075).then((() => () => P(55075))))),
              36550: () => f("default", "@foundry/icons", [1, 3], (() => P.e(5447).then((() => () => P(15447))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([P.e(4255), P.e(6407), P.e(3213)]).then((() => () => P(6407))))),
              16565: () => f("default", "graphql", [1, 16, 9, 0], (() => P.e(5440).then((() => () => P(55440))))),
              28897: () => f("default", "react-device-detect", [1, 2, 2, 3], (() => P.e(2158).then((() => () => P(12158))))),
              94944: () => f("default", "react-adaptive-hooks", [3, 0, 0, 8], (() => P.e(621).then((() => () => P(73002))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(9623), P.e(2246)]).then((() => () => P(17560))))),
              2918: () => f("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([P.e(6035), P.e(3806), P.e(9339), P.e(9623), P.e(2246), P.e(4963)]).then((() => () => P(66369))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([P.e(2024), P.e(4054)]).then((() => () => P(85950))))),
              57145: () => f("default", "prop-types", [1, 15, 8, 1], (() => P.e(2817).then((() => () => P(72817))))),
              33213: () => f("default", "react-router", [1, 6, 11, 2], (() => P.e(6612).then((() => () => P(96612))))),
              90: () => f("default", "history", [1, 5, 3, 0], (() => P.e(5261).then((() => () => P(7642))))),
              55274: () => f("default", "@rsgweb/router", [1, "workspace:^"], (() => P.e(5162).then((() => () => P(42781))))),
              63582: () => f("default", "framer-motion", [1, 7, 5, 1], (() => P.e(9235).then((() => () => P(19235))))),
              95412: () => f("default", "@rockstar/sentry", [1, 5, 0, 0], (() => P.e(3774).then((() => () => P(93774))))),
              95945: () => f("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([P.e(9775), P.e(7145)]).then((() => () => P(19775))))),
              87851: () => f("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(8764).then((() => () => P(56383))))),
              56840: () => f("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => Promise.all([P.e(350), P.e(1911)]).then((() => () => P(20350))))),
              14463: () => f("default", "react-intersection-observer", [1, 9, 13, 1], (() => P.e(7744).then((() => () => P(95363))))),
              2973: () => f("default", "dompurify", [1, 2, 4, 1], (() => P.e(561).then((() => () => P(20561))))),
              92440: () => f("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([P.e(8292), P.e(9834)]).then((() => () => P(99834))))),
              90582: () => f("default", "@rsgweb/modules-core-screenshot-viewer", [1, "workspace:^"], (() => P.e(3582).then((() => () => P(71201)))))
            },
            r = {
              40: [92440],
              220: [14463],
              582: [90582],
              1911: [22414, 36550],
              2229: [62229],
              2246: [16565, 28897, 94944],
              2973: [2973],
              3213: [33213],
              4281: [2918, 81788],
              4459: [56840],
              4853: [44853],
              5388: [90, 55274, 63582, 95412, 95945],
              5966: [95966],
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
              else if (/^(2(229|405|973)|3(137|213|326|416)|4(281|459|853)|5(202|82|966)|7(145|538|851)|1626|1911|6766|8778|8987|9147|9623)$/.test(a)) e[a] = 0;
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