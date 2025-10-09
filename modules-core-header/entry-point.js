try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "810e7e24-2a6b-4460-9707-eeb9e9128578", e._sentryDebugIdIdentifier = "sentry-dbid-810e7e24-2a6b-4460-9707-eeb9e9128578")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, c, f, r, t, o = {
            17411: (e, a, d) => {
              const c = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = c(d.y.meta.url, e)
              }
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            77027: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, f = 0, r = c.length; f !== a && r >= 0;) "/" === c[--r] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var t = c.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            84823: (e, a, d) => {
              "use strict";
              var c = {
                  "./core": () => Promise.all([d.e(4237), d.e(78), d.e(8068), d.e(4972), d.e(1127), d.e(3694), d.e(8429), d.e(3467), d.e(9158), d.e(1222), d.e(4406), d.e(2148), d.e(4572), d.e(1788), d.e(4902), d.e(5966), d.e(7365), d.e(4033), d.e(2918), d.e(4780), d.e(6695), d.e(5428), d.e(5899), d.e(9166), d.e(3395)]).then((() => () => d(63395))),
                  "./GlobalNavigationWrapper": () => Promise.all([d.e(78), d.e(4972), d.e(1127), d.e(3694), d.e(8429), d.e(3467), d.e(1222), d.e(4406), d.e(4572), d.e(1788), d.e(4902), d.e(5966), d.e(7365), d.e(2918), d.e(4780), d.e(6695), d.e(5428), d.e(5899), d.e(1404)]).then((() => () => d(81404))),
                  "./vanilla": () => Promise.all([d.e(4237), d.e(8068), d.e(4972), d.e(1127), d.e(8429), d.e(2148), d.e(1788), d.e(5966), d.e(4033), d.e(2918), d.e(5428), d.e(9166), d.e(3965)]).then((() => () => d(26619)))
                },
                f = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      f = d.S[c];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => f,
                init: () => r
              })
            },
            93032: (e, a, d) => {
              d(28419)
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var d = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, b), d.loaded = !0, d.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          b.r(f);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var t = 2 & c && a;
            ("object" == typeof t || "function" == typeof t) && !~e.indexOf(t); t = d(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, b.d(f, r), f
        }, b.d = (e, a) => {
          for (var d in a) b.o(a, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, d) => (b.f[d](e, a), a)), [])), b.u = e => "js/" + {
          61: "c02a2dbd27364cd63044988d2162fe1d",
          68: "ce782ad4232a6010c0b101ade5126412",
          78: "28def5ec4d0a0a910572ce04bdc06101",
          131: "76ac01517788795e64c7bc97454baccf",
          145: "570406c4ccd4be8a73c1f9942a02a03c",
          173: "1269f9d9c735f7b6c1fb9ffca05aa054",
          278: "cb9e363fdf47ec5ca7e29edcfe0959f3",
          299: "2e1f3b4c43fc365e28ae612249229ef9",
          314: "c1ab0f3b4358b629578169c357c6175a",
          395: "446730f55e56278b3583f0a6e0ea20c5",
          439: "d85a86ddb8f0b4b1e7e2d9df44cf6f9c",
          450: "b1f68103d9ff571c247435d1641e20a6",
          662: "3c1c151a88749a5a5782ee3654af2870",
          710: "92a008ab977ce0c3c6cc9165afc46f4d",
          776: "fecead2915c3ff26d194ef62c0c69ca0",
          824: "8cb84b3bf207231ce00ba1d0f1e0c4a8",
          907: "1a588a330153bcd6498f0941314cc386",
          910: "1bc26895d107691683ad1168eda3495d",
          1054: "cbeaa74201e69eb1b2306af29f9e4928",
          1098: "de63f2bb29a10ff5a0667836bc209832",
          1145: "3e482008aab49f7ac056cf7641cfe490",
          1242: "4464cbe2ab6572190360585c8408c2c3",
          1404: "21abe14b8103b3d61367bb67d1ee82e0",
          1436: "2bd22850a96ca5369b9674048b8a323e",
          1758: "f6cf3af05cdab395409cf7b1b6408d3c",
          1822: "374d104797a340756c1ce1fa3ca6c1ba",
          1828: "7d6f8ea160d2bb9af87c93cd699c2269",
          1868: "0a4defcf0547dac8c0d00c55b7addd14",
          2148: "3a236e5098f0729a9b205e0c599e73af",
          2156: "321dab97b89d78c02bdde038bc30a11b",
          2171: "4e743dd2235767cf8d4f0219d2f7d1e4",
          2221: "61765c71bdf4a84d8c908343330c6260",
          2234: "251a48b15f4c367d892af0562cce38d9",
          2243: "dfb627c1135f06b59650e32ceedf73be",
          2295: "bdfd60ecd6d08145127f37a8e9bd2c60",
          2306: "964dccc4c8b748559ce9861886091a9d",
          2347: "c8c9140f1e0deb3ed528edbff5c8145c",
          2365: "40f65888f0396da771d7a7401f7f83a8",
          2398: "9ccc11af104195b8feb3fe93f3f1c8b3",
          2399: "0ac7eda0b448ca2247847875df99d2f9",
          2442: "8eb2db512254bfd334898047e90b3e89",
          2466: "f90d5ab345e7117d8b415bac4ff532c9",
          2551: "38d1c1e830ebacbb490cb0370f9d8778",
          2635: "2a33aa71208198c06100d34b1c23eef7",
          2642: "6f179a5d93b99d96679fd0a6ceecd9fa",
          2678: "c2ebcc2d8496bb49aaf24cea07295ecb",
          2776: "1f10957920c941c325cc73b94a37b22c",
          2864: "2f546a96efed21ed955cf439d39f5a94",
          2865: "3acc1a7101ff984fd0fa30ccb7572222",
          2884: "ae2977642229a8758544ce05d159e599",
          3032: "33ceabb617111dfee5a42f523f635cdc",
          3034: "67f772e5b5248cc9a8300553267c4696",
          3197: "028207924755c243b182448755560eb4",
          3199: "712493f91bd3ef402afd67d32c83e077",
          3343: "8bccdde02027d4a0031515af0ce9cdd2",
          3370: "7aee9e931193f69ebcca0a311f0cf3b5",
          3383: "35345aaad07d4485305498f8fbbcf9ed",
          3395: "570be5409c424b9e48feeca5cd676113",
          3421: "218733f5b7ebeeceb6bd57d51215fa25",
          3475: "ee1c9d8585f7b1b1f95637418bbc430d",
          3477: "5c5dba53c1ea2194f7f93b8312c3d591",
          3486: "063cf1df5c9aa626eb43e815f01743d5",
          3574: "1acf080bc301dea80df1f20595a65132",
          3697: "ac68cb7e80da92846592d17f573843bd",
          3745: "6a499aa81f2e57730ba9e293c25882ce",
          3885: "76609d4785d133911830f06be5d5ae16",
          3896: "0fd9998f33ff9c4f31b3a4cb63fac51a",
          3941: "d6e3c2e2b9539497094aad4214bcf1a9",
          3959: "2719cb91fc6deead9a3391ea7a326dae",
          3962: "76442c7343bd3a78544e47eeb088ee02",
          3965: "a6fb10079662906682f2a91c013d458e",
          3983: "8502ff73b8f00b1277a32656ccf0d08f",
          4011: "0f88cfce6c2909eab8650445bbd3bd59",
          4033: "41c1bc278d6ac812dc71659ceb774664",
          4237: "ba56faafc6e37f0c0b71c0339285edba",
          4271: "21d3d2c988180851d35d84de568168ad",
          4528: "e81a8564cad2ecb09d25fec073d6f00d",
          4578: "bb025df1272438843a4a7104012fac0f",
          4621: "8828e60f0064405d602fe664313f89ca",
          4676: "ac20272e0cfad148b4592481fa841612",
          4700: "7648b1a401786a8a6ca2abfc37573ae7",
          4710: "8e22f90c513a3e8615a6c830af74f175",
          4731: "c26ecb6cbbaddc26a23c024c7752b19c",
          4799: "1a2df7ce362601c4fcc5b6e0fad1dd5d",
          4851: "c05c311b59a76556c180056d43ed758f",
          4861: "2c715eb277badd62dc1f1ec9e36b5ce9",
          4913: "8af1da364d10b558938eb5d04ddea331",
          4972: "e1d0ee2b4481fa455911cd0833ea65f0",
          5016: "1653d5c6da1814b0e9d43b4442c8f5f2",
          5018: "ea8d7902bd99d7691b6bd1db84a09853",
          5076: "9c828e830ff4260d0fcc9788690aa94f",
          5187: "0a7d7e3ddcd95bb7813d84e923a3d7f1",
          5233: "84c5e679e382cc5dc290586626c3c570",
          5244: "72a22a4972e5dbae61308b15cbfc1202",
          5246: "354dce6b92a720ff1ccd6e172258915f",
          5259: "e2ff2b351f57c307f1e1790a3615677d",
          5265: "938a42bbe5bfe5ba5d48c66b166d599e",
          5389: "7d11f94bc8fc3ade4d1d071b99094917",
          5415: "1a902417d186e414c56f197902789f9b",
          5428: "516f84e6b0db3fc987a6e8e93f4dafa4",
          5530: "f3557e0dd9322ba108106a6bb6709661",
          5639: "63a16430237dd6f32859c44d68552b7f",
          5663: "fa64335e65bd53a455a46d013e1d54fd",
          5688: "f25a16bfcada67e110a7adb1bafcaef8",
          5742: "cb81523c649390a77aac74372dd44a5e",
          5802: "ffd3778fb255bd53b08878af3c3b321e",
          5830: "ecc78b9f8d29803570482c7f6be59c2d",
          5832: "928738333f26de4c7eae2d003e5c544f",
          5859: "9e92e70c2d142c993f91cf8b3f8723f4",
          5879: "ca129407fe8175e29bc75dad3f15bf5e",
          5899: "169ce382a61b4462dfdd5ec8c2bc76dd",
          5912: "735debaab29a7028438cee07a95d2edf",
          5941: "239ae1bdabd4e9110d0a677a655ce0c3",
          6126: "36d570d6249b8e380567a5f0de5fb2bf",
          6246: "066a527a262d9a00262e727ccf20ed11",
          6267: "5ca3594f10ea59c950b09e571b98cf96",
          6280: "86a74bd08c38fcd000c5029a529b5349",
          6285: "0e319e9568e0c3309665c30fd17c9463",
          6311: "f047357fa716cb24e1012eac224dde08",
          6361: "9c52e108993dd2c9a4423d85d7670354",
          6471: "87de6681d763b1f192c1d709910c1230",
          6664: "d1847d85bcbf9d600a064958ed17d88f",
          6713: "eba1cb10a5437176fd1b82a34c9b911f",
          6827: "5a1f2700210b7b3fbd2f5e121cdad714",
          6879: "c11f67bb6a075acf1b6a718eab629f3c",
          6891: "c2ed1ff0b1cf52f42bf13334639015a2",
          6997: "140182071baf5fe968eb883677df82e1",
          7010: "0a47c5c2c3332044bea88bd1704fe185",
          7073: "f9a24edbc0736927e36f475b40bc17a4",
          7333: "b52b15ac51a5d6b60df674f328ef91b1",
          7407: "d495be1a731011aa8ba2e5269b834bf4",
          7436: "e3ae7158136d0c2831985757b828cecb",
          7452: "7016810c3842ccaf50be651822be333a",
          7453: "dcf2ba513027e6e8d5dca990f0125464",
          7533: "1402ea171f5503bf85558adc92ef5d2b",
          7568: "6e99a131a1ea47892e22e58cfefb6bc3",
          7598: "30c70c590adcee5e2c8bc40639721fe1",
          7637: "7e767804d6b0ccdd205f2f3529d113ca",
          7780: "e886ae9bbae28486c699cd74f7339a73",
          7970: "9bdbb2bcb22f8568ae039431e57423c9",
          8019: "6450aab6e78cf397557e34983b68c6af",
          8068: "3af589e2a5d93e5799b035c5b72a8595",
          8240: "0cc89d338fefecc801443941b71881a5",
          8272: "6f56142cc29a7f5467e84a1856696fa1",
          8325: "0b555cb88a1e15c17f9f7f8b68634851",
          8391: "20f1926b2c0bbe35b452c15619f11b06",
          8421: "ecfaaf46a5c3bff718b46e5ce112bc7a",
          8431: "af2e99e15a5d18cae0c73196775662de",
          8659: "8561595c016c6dae51a73544ceee00e1",
          8755: "75aa1655ec6a48ec1759b86f987affea",
          8786: "91e21e75289c0d92b3f997daa071446f",
          8791: "800ec37a484762bc65d03f43a775a722",
          8845: "eb26ff373a63768f2201d29f176204ee",
          8880: "0c8585eed1e335788d3c0aa615b21944",
          8938: "9550d034a342c61b5b02b6087db080e1",
          8970: "aba0705da86abd6cf703c6ef725f02fa",
          9022: "8ffda8a99578bfceacaad087398b21db",
          9028: "22b960486725b8a0532eb0ddf1e7fc28",
          9055: "21790367f30e12085ab6c202b5aca729",
          9071: "ee0f2010fa3b820e1db63a4702a8408f",
          9126: "736939c4120cc01a6cb739938660a432",
          9166: "ff34604aea0786b5e9a33c4d3a40290c",
          9377: "f91e6224dc28a10399eb492e96794e06",
          9447: "6d35c3aa44a8da87da4ffc278ab02140",
          9511: "048970ada276e30b9e24569b57c85594",
          9512: "117d141e3c44dcb535c429f684f48510",
          9587: "e62b55cf354744eb82430b82afb617bd",
          9615: "01422eef854829754464fd1d65e2fdc1",
          9659: "47b159b5aedd71ceb8dfae84ed8b0c7b",
          9757: "74b1884fd7888be4851f133e16ac985d",
          9760: "d0ffab9e09478293a5cc89bb4d28b7d9",
          9813: "5174a9c45ab69bc6ccf80dad3583bc0c",
          9936: "fa08853c52a216f7db0fa4bb6e07e82e",
          9980: "17156c111c6a02baed63ebcf8f5513aa",
          9990: "bdf10324e0ccab2f27dc8d4ddab3351c"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          78: "fc0c777685f90181b9bb66cbb0315e24",
          625: "05f0dfc8b88fd550146938e179d781f6",
          1145: "05f0dfc8b88fd550146938e179d781f6",
          1695: "05f0dfc8b88fd550146938e179d781f6",
          1913: "05f0dfc8b88fd550146938e179d781f6",
          3199: "05f0dfc8b88fd550146938e179d781f6",
          3383: "cdd4980eab189265db82745cced17109",
          3395: "0b7c6b739ca7c4028a37a76ae61d20c6",
          3574: "05f0dfc8b88fd550146938e179d781f6",
          3965: "94edb376d1a211556a5bb2b298f38183",
          3983: "05f0dfc8b88fd550146938e179d781f6",
          4618: "05f0dfc8b88fd550146938e179d781f6",
          4858: "05f0dfc8b88fd550146938e179d781f6",
          5244: "05f0dfc8b88fd550146938e179d781f6",
          5423: "05f0dfc8b88fd550146938e179d781f6",
          5879: "0422bf4fa85c096b7de89e578b7bd04b",
          5899: "5cb3be35273c8f969e99694b637aa266",
          6827: "05f0dfc8b88fd550146938e179d781f6",
          7333: "05f0dfc8b88fd550146938e179d781f6",
          7595: "05f0dfc8b88fd550146938e179d781f6",
          7605: "05f0dfc8b88fd550146938e179d781f6",
          8019: "05f0dfc8b88fd550146938e179d781f6",
          8065: "05f0dfc8b88fd550146938e179d781f6",
          8421: "05f0dfc8b88fd550146938e179d781f6",
          8804: "05f0dfc8b88fd550146938e179d781f6",
          9166: "da7416b817851e21e13ba22254a676ba",
          9980: "05f0dfc8b88fd550146938e179d781f6"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-header:", b.l = (e, a, d, r) => {
          if (c[e]) c[e].push(a);
          else {
            var t, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var i = n[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + d) {
                  t = i;
                  break
                }
              }
            t || (o = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, b.nc && t.setAttribute("nonce", b.nc), t.setAttribute("data-webpack", f + d), t.src = e), c[e] = [a];
            var s = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var f = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), f && f.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), o && document.head.appendChild(t)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, b.f.remotes = (e, a) => {
          b.o(r, e) && r[e].forEach((e => {
            var d = b.R;
            d || (d = []);
            var c = t[e];
            if (!(d.indexOf(c) >= 0)) {
              if (d.push(c), c.p) return a.push(c.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), b.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, d, r, t, o, n) => {
                  try {
                    var b = e(d, r);
                    if (!b || !b.then) return o(b, t, n);
                    var l = b.then((e => o(e, t)), f);
                    if (!n) return l;
                    a.push(c.p = l)
                  } catch (e) {
                    f(e)
                  }
                },
                o = (e, a, f) => r(a.get, c[1], d, 0, n, f),
                n = a => {
                  c.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(b, c[2], 0, 0, ((e, a, d) => e ? r(b.I, c[0], 0, e, o, d) : f()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (d, c) => {
            c || (c = []);
            var f = a[d];
            if (f || (f = a[d] = {}), !(c.indexOf(f) >= 0)) {
              if (c.push(f), e[d]) return e[d];
              b.o(b.S, d) || (b.S[d] = {});
              var r = b.S[d],
                t = "@rockstargames/modules-core-header",
                o = (e, a, d, c) => {
                  var f = r[e] = r[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!c != !o.eager ? c : t > o.from)) && (f[a] = {
                    get: d,
                    from: t,
                    eager: !!c
                  })
                },
                n = [];
              return "default" === d && (o("@foundry-int/utils", "5.2.1", (() => Promise.all([b.e(8791), b.e(4572)]).then((() => () => b(68791))))), o("@foundry/icons", "5.0.4", (() => Promise.all([b.e(6311), b.e(1127), b.e(3694), b.e(3467), b.e(6827)]).then((() => () => b(96311))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(6713), b.e(1127), b.e(3694), b.e(3467), b.e(3574)]).then((() => () => b(56713))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(776), b.e(1127), b.e(3694), b.e(3467), b.e(3199)]).then((() => () => b(70776))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(2884), b.e(1127), b.e(3694), b.e(3467), b.e(8019)]).then((() => () => b(2884))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(3032), b.e(1127), b.e(3694), b.e(3467), b.e(8421)]).then((() => () => b(33032))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(3959), b.e(1127), b.e(3694), b.e(3467), b.e(9980)]).then((() => () => b(93959))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(6246), b.e(1127), b.e(3694), b.e(3467), b.e(1145)]).then((() => () => b(56246))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(9071), b.e(1127), b.e(3694), b.e(3467), b.e(5244)]).then((() => () => b(19071))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(8786), b.e(1127), b.e(3694), b.e(3467), b.e(7333)]).then((() => () => b(18786))))), o("@foundry/icons", "5.2.1", (() => Promise.all([b.e(3962), b.e(1127), b.e(3694), b.e(3467), b.e(3983)]).then((() => () => b(93962))))), o("@foundry/react", "5.2.1", (() => Promise.all([b.e(3477), b.e(78), b.e(7598), b.e(9512), b.e(3383), b.e(1127), b.e(3694), b.e(8429), b.e(3467), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(4572), b.e(4902), b.e(7365), b.e(4780), b.e(2893), b.e(2399)]).then((() => () => b(33383))))), o("@popperjs/core", "2.11.8", (() => b.e(9813).then((() => () => b(19813))))), o("@radix-ui/react-accordion", "1.2.8", (() => Promise.all([b.e(710), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(4406), b.e(2295)]).then((() => () => b(90710))))), o("@radix-ui/react-dialog", "1.1.11", (() => Promise.all([b.e(3477), b.e(2551), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(4902), b.e(4676)]).then((() => () => b(22551))))), o("@radix-ui/react-id", "1.1.1", (() => Promise.all([b.e(1127), b.e(6126)]).then((() => () => b(86126))))), o("@radix-ui/react-navigation-menu", "1.2.10", (() => Promise.all([b.e(3477), b.e(9511), b.e(1127), b.e(3694), b.e(8429), b.e(9158), b.e(1222), b.e(4406), b.e(7533)]).then((() => () => b(69511))))), o("@radix-ui/react-popover", "1.1.11", (() => Promise.all([b.e(3477), b.e(7598), b.e(1127), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(4902), b.e(395)]).then((() => () => b(2776))))), o("@radix-ui/react-portal", "1.1.6", (() => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(61)]).then((() => () => b(80061))))), o("@radix-ui/react-slot", "1.2.0", (() => Promise.all([b.e(1127), b.e(9447)]).then((() => () => b(39447))))), o("@radix-ui/react-slot", "1.2.3", (() => Promise.all([b.e(1127), b.e(9659)]).then((() => () => b(79659))))), o("@radix-ui/react-use-controllable-state", "1.2.2", (() => Promise.all([b.e(1127), b.e(2865)]).then((() => () => b(22865))))), o("@radix-ui/react-visually-hidden", "1.2.0", (() => Promise.all([b.e(1127), b.e(8429), b.e(1222), b.e(9055)]).then((() => () => b(69055))))), o("@radix-ui/react-visually-hidden", "1.2.3", (() => Promise.all([b.e(1127), b.e(8943), b.e(5187)]).then((() => () => b(45187))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(9512), b.e(9587), b.e(1127), b.e(8240)]).then((() => () => b(12841))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(4237), b.e(1127), b.e(3467), b.e(9690), b.e(2148), b.e(4572), b.e(1788), b.e(5966), b.e(7365), b.e(2918), b.e(6695), b.e(5879), b.e(910)]).then((() => () => b(66615))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(4237), b.e(8068), b.e(1127), b.e(2148), b.e(5966), b.e(4033), b.e(7637)]).then((() => () => b(42328))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(4237), b.e(450), b.e(1127), b.e(2148), b.e(1788), b.e(5941)]).then((() => () => b(89757))))), o("clsx", "2.1.1", (() => b.e(439).then((() => () => b(10439))))), o("framer-motion", "7.10.3", (() => Promise.all([b.e(5912), b.e(1127)]).then((() => () => b(75912))))), o("gsap", "0.0.0", (() => b.e(4271).then((() => () => b(54271))))), o("lodash", "4.17.21", (() => b.e(5076).then((() => () => b(15076))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(1098), b.e(1127)]).then((() => () => b(71098))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(3421)]).then((() => () => b(83421))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(1127), b.e(8429), b.e(3386), b.e(2635)]).then((() => () => b(62635))))), o("react-remove-scroll", "2.6.3", (() => Promise.all([b.e(145), b.e(1127)]).then((() => () => b(80145))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(5389), b.e(1127), b.e(8429)]).then((() => () => b(15389))))), o("react", "18.2.0", (() => b.e(8659).then((() => () => b(68659))))), o("react", "18.3.1", (() => b.e(8431).then((() => () => b(48431))))), o("spatial-navigation-polyfill", "1.3.1", (() => b.e(7780).then((() => () => b(17780)))))), e[d] = n.length ? Promise.all(n).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var c = d.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = d[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = d[1] ? a(d[1]) : [];
              return d[2] && (c.length++, c.push.apply(c, a(d[2]))), d[3] && (c.push([]), c.push.apply(c, a(d[3]))), c
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var c = 0;;) {
                if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                var f = a[c],
                  r = (typeof f)[0];
                if (c >= d.length) return "u" == r;
                var t = d[c],
                  o = (typeof t)[0];
                if (r != o) return "o" == r && "n" == o || "s" == o || "u" == r;
                if ("o" != r && "u" != r && f != t) return f < t;
                c++
              }
            },
            d = e => {
              var a = e[0],
                c = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                c += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var f = 1, r = 1; r < e.length; r++) f--, c += "u" == (typeof(o = e[r]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, o);
                return c
              }
              var t = [];
              for (r = 1; r < e.length; r++) {
                var o = e[r];
                t.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? t.pop() + " " + t.pop() : d(o))
              }
              return n();

              function n() {
                return t.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            c = (a, d) => {
              if (0 in a) {
                d = e(d);
                var f = a[0],
                  r = f < 0;
                r && (f = -f - 1);
                for (var t = 0, o = 1, n = !0;; o++, t++) {
                  var b, l, i = o < a.length ? (typeof a[o])[0] : "";
                  if (t >= d.length || "o" == (l = (typeof(b = d[t]))[0])) return !n || ("u" == i ? o > f && !r : "" == i != r);
                  if ("u" == l) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == l)
                      if (o <= f) {
                        if (b != a[o]) return !1
                      } else {
                        if (r ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (r || o <= f) return !1;
                    n = !1, o--
                  } else {
                    if (o <= f || l < i != r) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < a.length; t++) {
                var h = a[t];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? c(h, d) : !u())
              }
              return !!u()
            },
            f = (e, a) => e && b.o(e, a),
            r = e => (e.loaded = 1, e.get()),
            t = e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, c, f, r) {
              var t = b.I(a);
              return t && t.then && !c ? t.then(e.bind(e, a, b.S[a], d, !1, f, r)) : e(a, b.S[a], d, c, f, r)
            },
            l = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            i = n(((e, n, b, i, s, u) => {
              if (!f(n, b)) return l(e, b, u);
              var h = ((e, d, f, r) => {
                var o = r ? t(e[d]) : e[d];
                return (d = Object.keys(o).reduce(((e, d) => !c(f, d) || e && !a(e, d) ? e : d), 0)) && o[d]
              })(n, b, s, i);
              return h ? r(h) : u ? u() : void o(((e, a, c, f, r) => {
                var t = e[c];
                return "No satisfying version (" + d(f) + ")" + (r ? " for eager consumption" : "") + " of shared module " + c + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(t).map((e => e + " from " + t[e].from)).join(", ")
              })(n, e, b, s, i))
            })),
            s = n(((e, o, n, b, i, s) => {
              if (!f(o, n)) return l(e, n, s);
              var u, h = ((e, d, c) => {
                var f = c ? t(e[d]) : e[d];
                return Object.keys(f).reduce(((e, d) => !e || !f[e].loaded && a(e, d) ? d : e), 0)
              })(o, n, b);
              return c(i, h) || (u = ((e, a, c, f) => "Unsatisfied version " + c + " from " + (c && e[a][c].from) + " of shared singleton module " + a + " (required " + d(f) + ")")(o, n, h, i), "undefined" != typeof console && console.warn && console.warn(u)), r(o[n][h])
            })),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], (() => b.e(8431).then((() => () => b(48431))))),
              63694: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(8429), b.e(1222), b.e(1436)]).then((() => () => b(69055))))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(1098).then((() => () => b(71098))))),
              43467: () => i("default", "@foundry-int/utils", !1, [2, 5, 2], (() => Promise.all([b.e(8791), b.e(4572)]).then((() => () => b(68791))))),
              79158: () => i("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], (() => b.e(5246).then((() => () => b(22865))))),
              21222: () => i("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => b.e(1828).then((() => () => b(39447))))),
              74406: () => i("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], (() => b.e(3745).then((() => () => b(86126))))),
              9623: () => i("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(5389), b.e(8429)]).then((() => () => b(15389))))),
              16188: () => i("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(5076).then((() => () => b(15076))))),
              4572: () => i("default", "clsx", !1, [1, 2, 1, 1], (() => b.e(439).then((() => () => b(10439))))),
              81788: () => i("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(9512), b.e(9587), b.e(5859)]).then((() => () => b(12841))))),
              34902: () => i("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], (() => b.e(2442).then((() => () => b(80061))))),
              95966: () => i("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(4237), b.e(450), b.e(2148), b.e(1788), b.e(9757)]).then((() => () => b(89757))))),
              57365: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(6311), b.e(3694), b.e(1913)]).then((() => () => b(96311))))),
              2918: () => i("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(4237), b.e(8068), b.e(2148), b.e(4033)]).then((() => () => b(42328))))),
              24780: () => i("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], (() => Promise.all([b.e(3477), b.e(2551), b.e(9158), b.e(9690)]).then((() => () => b(22551))))),
              86695: () => i("default", "@foundry/react", !1, [2, 5, 2], (() => Promise.all([b.e(3477), b.e(78), b.e(7598), b.e(9512), b.e(3383), b.e(3694), b.e(8429), b.e(9158), b.e(1222), b.e(9690), b.e(4406), b.e(4902), b.e(4780), b.e(2893)]).then((() => () => b(33383))))),
              63582: () => i("default", "framer-motion", !1, [1, 7, 5, 1], (() => b.e(5912).then((() => () => b(75912))))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], (() => b.e(8659).then((() => () => b(68659))))),
              79952: () => i("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], (() => b.e(7780).then((() => () => b(17780))))),
              9046: () => i("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], (() => Promise.all([b.e(3477), b.e(9511), b.e(9158)]).then((() => () => b(69511))))),
              42638: () => i("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], (() => Promise.all([b.e(3477), b.e(7598), b.e(9158), b.e(9690), b.e(2776)]).then((() => () => b(2776))))),
              61339: () => i("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], (() => Promise.all([b.e(710), b.e(9158)]).then((() => () => b(90710))))),
              13581: () => i("default", "gsap", !1, [1, "workspace:^"], (() => b.e(4271).then((() => () => b(54271))))),
              20270: () => i("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(3467), b.e(9690), b.e(4572), b.e(7365), b.e(6695), b.e(5879)]).then((() => () => b(66615))))),
              75971: () => i("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(3386), b.e(5016)]).then((() => () => b(62635))))),
              19690: () => i("default", "react-remove-scroll", !1, [1, 2, 5, 7], (() => b.e(145).then((() => () => b(80145))))),
              7492: () => i("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], (() => Promise.all([b.e(8943), b.e(7568)]).then((() => () => b(45187))))),
              25757: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(2884), b.e(8065)]).then((() => () => b(2884))))),
              46106: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(6713), b.e(8804)]).then((() => () => b(56713))))),
              54423: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(8786), b.e(5423)]).then((() => () => b(18786))))),
              68545: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(776), b.e(625)]).then((() => () => b(70776))))),
              73028: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(3959), b.e(4618)]).then((() => () => b(93959))))),
              79099: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(6246), b.e(1695)]).then((() => () => b(56246))))),
              86895: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(3962), b.e(7605)]).then((() => () => b(93962))))),
              88401: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(3032), b.e(7595)]).then((() => () => b(33032))))),
              99372: () => i("default", "@foundry/icons", !1, [2, 5, 0], (() => Promise.all([b.e(9071), b.e(4858)]).then((() => () => b(19071))))),
              36828: () => i("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], (() => b.e(5688).then((() => () => b(79659))))),
              78628: () => s("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(5802).then((() => () => b(83421))))),
              43386: () => i("default", "@popperjs/core", !1, [1, 2, 11, 8], (() => b.e(9813).then((() => () => b(19813)))))
            },
            m = {
              1127: [71127],
              1222: [21222],
              1788: [81788],
              2148: [9623, 16188],
              2893: [7492, 25757, 46106, 54423, 68545, 73028, 79099, 86895, 88401, 99372],
              2918: [2918],
              3386: [43386],
              3467: [43467],
              3694: [63694],
              4406: [74406],
              4572: [4572],
              4780: [24780],
              4902: [34902],
              5428: [63582, 73579, 79952],
              5899: [9046, 42638, 61339],
              5966: [95966],
              6695: [86695],
              7365: [57365],
              8429: [18429],
              8943: [36828, 78628],
              9158: [79158],
              9166: [13581, 20270, 75971],
              9690: [19690]
            },
            p = {};
          b.f.consumes = (e, a) => {
            b.o(m, e) && m[e].forEach((e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!p[e]) {
                var d = a => {
                  u[e] = 0, b.m[e] = d => {
                    delete b.c[e], d.exports = a()
                  }
                };
                p[e] = !0;
                var c = a => {
                  delete u[e], b.m[e] = d => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var f = h[e]();
                  f.then ? a.push(u[e] = f.then(d).catch(c)) : d(f)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            b.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                78: 1,
                625: 1,
                1145: 1,
                1695: 1,
                1913: 1,
                3199: 1,
                3383: 1,
                3395: 1,
                3574: 1,
                3965: 1,
                3983: 1,
                4618: 1,
                4858: 1,
                5244: 1,
                5423: 1,
                5879: 1,
                5899: 1,
                6827: 1,
                7333: 1,
                7595: 1,
                7605: 1,
                8019: 1,
                8065: 1,
                8421: 1,
                8804: 1,
                9166: 1,
                9980: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var c = b.miniCssF(e),
                  f = b.p + c;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
                      var f = (t = d[c]).getAttribute("data-href") || t.getAttribute("href");
                      if ("stylesheet" === t.rel && (f === e || f === a)) return t
                    }
                    var r = document.getElementsByTagName("style");
                    for (c = 0; c < r.length; c++) {
                      var t;
                      if ((f = (t = r[c]).getAttribute("data-href")) === e || f === a) return t
                    }
                  })(c, f)) return a();
                ((e, a, d, c, f) => {
                  var r = document.createElement("link");
                  r.rel = "stylesheet", r.type = "text/css", b.nc && (r.nonce = b.nc), r.onerror = r.onload = d => {
                    if (r.onerror = r.onload = null, "load" === d.type) c();
                    else {
                      var t = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = t, n.request = o, r.parentNode && r.parentNode.removeChild(r), f(n)
                    }
                  }, r.href = a, document.head.appendChild(r)
                })(e, f, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          b.f.j = (a, d) => {
            var c = b.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) d.push(c[2]);
              else if (/^(1(127|222|695|788|913)|3(386|467|694)|4(406|572|618|780|858|902)|7(36|59|60)5|8(065|429|804|943)|2893|2918|5423|5966|625|6695|9158|9690)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((d, f) => c = e[a] = [d, f]));
              d.push(c[2] = f);
              var r = b.p + b.u(a),
                t = new Error;
              b.l(r, (d => {
                if (b.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + f + ": " + r + ")", t.name = "ChunkLoadError", t.type = f, t.request = r, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, f, [r, t, o] = d,
                n = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in t) b.o(t, c) && (b.m[c] = t[c]);
                o && o(b)
              }
              for (a && a(d); n < r.length; n++) f = r[n], b.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), b.nc = void 0, b(93032), b(84823)
      })())
    }
  }
}));