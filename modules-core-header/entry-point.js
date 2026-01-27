try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a96eb6fc-8dc8-47c1-a313-67a1aea07d08", e._sentryDebugIdIdentifier = "sentry-dbid-a96eb6fc-8dc8-47c1-a313-67a1aea07d08")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, d, r, t, c, f, o = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            42029: (e, a, d) => {
              "use strict";
              var r = {
                  "./core": () => Promise.all([d.e(8379), d.e(9472), d.e(1127), d.e(8429), d.e(1222), d.e(889), d.e(2372), d.e(3694), d.e(4572), d.e(1788), d.e(4836), d.e(1207), d.e(5966), d.e(3580)]).then(() => () => d(34872))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => c
              })
            },
            77027: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, c = r.length; t !== a && c >= 0;) "/" === r[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            93032: (e, a, d) => {
              d(28419)
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var d = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, i), d.loaded = !0, d.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(t, c), t
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, d) => (i.f[d](e, a), a), [])), i.u = e => "js/" + {
          61: "97aecfa4d86ea265a7e2ad6b0e96fd54",
          68: "ae280e7ba9bba531cf540fe5d0af0dd4",
          131: "ffb2655a53616652f89b2334fb710c21",
          145: "de2a55a229c194e1ca6a57197ce1a778",
          173: "34e3264cdec4f572eb7eeedcd46eba65",
          278: "bbdfc751d35d8209ad4ebfcc17911f53",
          299: "1a86155755525cc3277850529064a71c",
          314: "fcc6a08e2032e70691a97df58e3b87a0",
          395: "c58c1dbdb5d4a2c962cb2fffc6125a51",
          439: "c42274e0dc71e6fefd9ff65e6b783dd3",
          450: "a2b6fc688a3f384670423f2d92eb06e3",
          662: "5fd958cce53b918e0265e09de636d322",
          710: "166f0591193b0211368c8692ce7f3374",
          824: "dc308cfd48042614197bc4d7afee863b",
          887: "8a6121a943fde98b2ef3c86671e38317",
          907: "e221210d6aecb2bdf6e513d7f68f12f7",
          1054: "a2d5b435854e2d64c4dea0ce252df484",
          1098: "737419103ff2cab1042a5ca1d5cc34dd",
          1242: "48005424b259315577d613a1a776610b",
          1436: "94a5876d30955574d9ba05af9e63e2e1",
          1758: "c53b1882b2c865a4ec833e4aa1070797",
          1822: "c9e99ea84d1581b0468c5bbe839613ea",
          1828: "28f7bac7f6a573c970eabfde941b5a54",
          1868: "187f8c0957bf5323711e4b8aaa23eca2",
          2156: "d6746771a6591b9d8931f36a7a8bc5b7",
          2169: "772881c518ed2819a8f39de0c6a702ad",
          2171: "68ec22ddc43bb3fa2d828415e1fd6016",
          2221: "c20c210b2c5bbcb70bd2a8ac8db217d2",
          2234: "74dee7d342311731257da2d710e33f41",
          2243: "7721a3f295b7cb996732cfeb6923944d",
          2280: "75f45d1e2573ac1ad2a151721e708c06",
          2295: "a7228abc5be4dbed6175dafbaca99d65",
          2306: "5137cbdfa39be12e4d3ef3407e545aec",
          2347: "eb40e6f8d7b9d8f6f474c51a009ce867",
          2365: "d481242f59337c2eee31441bf4186aa4",
          2398: "5d2fa1c41762b478822035e97ee33338",
          2442: "9dcb98e68e844c1c5909c0262999aa88",
          2466: "b5e6853a333a8c1767ef01a049a01a88",
          2642: "cace1f46c12eeafb29d2c805bb011fa5",
          2649: "3ad5b1b7c6a6d7e02c8a2f6288d1f6b8",
          2678: "d5fc06960b2ea3ffa438aedafffcda49",
          2776: "17ccc8bb6351878b9680a59f1c66cda4",
          2864: "5807b3e8ae5e0e07a0aeda076e3c5f71",
          2865: "a2545deb1848476e1d99fdad8e8879af",
          3034: "2f5862e841c34d4be37a501832d56589",
          3117: "1c322ac87914bd78684e97e4d0a4a197",
          3197: "9a24b5cfe2bf953a01f23a28be9f43cb",
          3343: "5dc382e53fb3ef97b277a30f50e41787",
          3370: "41c43dd6f1b541331ce80c1b6d450702",
          3475: "1cf055b870839a4dfc92b2657d9769e0",
          3486: "c7a36028a2c6c7a84246d096a3e3a2d5",
          3505: "41199737df7c871c46ff3b83f3e8c29d",
          3571: "5b18e969a92808de3b9909992ae7c656",
          3580: "b56c53088bdc5d3e71d26c73b955aa9f",
          3697: "d5a0047eff0525e359c40696d69c2d9d",
          3745: "6573f30e27349df96e6fed460b97c82e",
          3885: "1154636a5a1dbedd7e68142f814867df",
          3896: "1bf77dc836b5dfaa827277376cc5ee9a",
          3941: "c057142b344c089a990c36478008e3f1",
          4011: "a904678874631b89b8d6f5acd64a0383",
          4237: "4dc30df52076ff4fc6a857616d8424de",
          4528: "2b90c20099b46d8e0472c88c9e684e56",
          4578: "3e1e3228bbf2e0dbbee1614418ac1867",
          4621: "4e0be464ebb7d8c7a1a8e041fc894d1c",
          4676: "23550567a25a6f4305847d9f96f0bbfd",
          4700: "43aafc451a1387cc095e8c353ee8dc39",
          4710: "f73e416590fe87e108bbf58874672c30",
          4731: "a84a07a01fe977a3525b87c02a1f5aae",
          4799: "cb8f832413c3dc9d9a636251748180a6",
          4851: "b23dd7bceaaae8c90faf8c17cdc8340c",
          4861: "a61eb42dd66c4711a537e61ee2d841ce",
          4913: "265c8a4cd970d9f406d13865377dbcea",
          5018: "43455b62b05edfd5db0c0362827375ef",
          5021: "74b543d16723e84ed6c371f63cd4140b",
          5076: "563fe6f28f20c88009b73f3ff6a13bd1",
          5233: "3f8ff909163a1db6900cd96364965a9c",
          5246: "d5237223176eb5d8977dab8260972c18",
          5259: "fce76bc65ed4bf7a620f2d4e3323bb72",
          5265: "ec32131619d20d015b3d00ad49111f58",
          5389: "8ed953e41c70d01895e58d1409bb316a",
          5415: "1d8ad3c9b4711fe3c6a14bb972ef3e39",
          5498: "e0400fb23b1610e2cb776d3a55ecd480",
          5515: "6ae2bdcdafa91cf6c19ba99370cfdc43",
          5530: "d4da4fd185cd29ec62c90e63d6dd61b6",
          5639: "bb6929d6a2dd27e21a85be5a2c9e39f4",
          5656: "eaea114502e33ef040a9fb7ae6a77c4b",
          5663: "3b7078a4f054a75e7c1dac7f30ab123e",
          5742: "cf421b7a529c170e076711d389d90f79",
          5830: "8b22b4ac61b4a13dfc8740655b2fa35a",
          5832: "e4a1685671059c25897c241593ae507a",
          5859: "d0dcbf588500825ea991e932a868da47",
          5886: "0d0d45d53a5e47a5e872a1bdc6341b10",
          5912: "6457ef45999ae85e593128f6f3cc08f5",
          5941: "d842b9de172e65ad14269cf5ecce471d",
          6088: "826cfd0d2b6ca825061e16f75c72c24a",
          6126: "8ca81b06b9959ef69911d4c3d497a086",
          6267: "dba8ad492c6f84534ed375c24dcd6fbb",
          6280: "a0aac0dc3e792e99dd8c3fb461616c49",
          6285: "de5de9961c203577b6de43d774a2b690",
          6361: "690d13241235e67a37154e34dc81c9d6",
          6471: "1fa74c241b011e1cf53ba1ad03443059",
          6491: "7aa89b954d866bdfb9c9ee0b48b87da5",
          6664: "1e6856a466dbd8b92aabe3c2ad141943",
          6707: "250390872bc36fb9ed8f0d08bc5f592b",
          6827: "5dabe46af89849bce8cca828e1376a7a",
          6879: "3d3b735fb9934f0068779077a31a5ffa",
          6891: "ab72e55a54abe4dd8cacfa12286aed6b",
          6997: "22a5a2bf00d5e4a0beb50ba5b5193220",
          7010: "c749df206c1960b0c9fd272636899b63",
          7073: "dcd866244d1165996c87de65ef5654af",
          7145: "0859911c1c47c41c97b66dd7eb582960",
          7407: "66d60d06e559656707623b21d9df3c76",
          7436: "a5f2408fc67d14da4f66779708467db3",
          7452: "3826cc094191bfcb38ef7154e023cd44",
          7453: "af2230de20b992c94864d78cd7342062",
          7780: "47f799bc805fb6d7ade91c0b37626059",
          7896: "163358f778ea0ca2ce84268c240577af",
          7970: "76caaa34652b415eb6e331713d3d5ce7",
          8068: "d1860fdb6126e041c723408265911d31",
          8113: "e01c1d0f153a2e8c9655900be6c53496",
          8240: "8081ff23356fd336927cc2feb121cef0",
          8272: "4aec284ac4df637d55c8654502351785",
          8325: "2506c409e3c4ebde413da928878e9df2",
          8329: "935d6970749021bc3835a0d262449fa0",
          8379: "fddab8e4687fdac1956fe62c0e8e578a",
          8391: "1a0e96190be569faf877e400cee19273",
          8431: "f980a3e4e4efd5465aaf09a1427616e7",
          8659: "35cd49c04159b2d9c3025c332aa4a066",
          8755: "c019ea2d013c6817b212b9f642d065ee",
          8845: "c0ba8c9210c1bcf0ac0b6285b10f6700",
          8872: "d4e1cf94a2c137d80855d9a25c662f1f",
          8880: "8431685bba0909ca7f8c6d6d26eb6540",
          8938: "3f2b503c9a3b7e2851954db9ab885496",
          8970: "92055560d20fd5d8034b9fb0fc26107f",
          9022: "e05194bcb6c84ebbb34e2d7494a38f94",
          9028: "7573f859a086b4880d7bee84a6df4347",
          9055: "36a547b4fcc69b8610f47d202d078386",
          9126: "b9e68738ce6fb8ce020d6fae399e2f1e",
          9377: "b89bfdfc50c52b91d502ef7964789ef1",
          9447: "690b025e91a13eb4a33577291678e919",
          9472: "b07d181d060e861b3ce4fd9cf99799ef",
          9511: "fda02cd7a84739e6b502cc93d4f5bf1c",
          9512: "b57402a92e04264ebef396f01c2d8681",
          9587: "ea8b5943339b0b53701261f2868860ce",
          9615: "39a3703094b46531708c0aed1daf185b",
          9627: "8c1a5d38ff17748e15ac4b44fb5bbb87",
          9719: "c0490895d6c2137ec7a174402745b48f",
          9757: "500f6f0ce08667a71ee01c87f83d6c8a",
          9760: "0e76d65e0869e2d3430737a3c33bc256",
          9936: "32680ca9e21395a1884959cecb30554c",
          9990: "2e2c43b603571aeca41af7c03a40534e"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1913: "ed8a18e4768c2cfb55476973c2d36ae0",
          3580: "8ecdc952947e841c784c976ff37ede69",
          6707: "968ae2db6a67e403cf448ff45ed20cf9",
          6827: "ed8a18e4768c2cfb55476973c2d36ae0",
          8379: "1e4086942ee78c9a7c98998f1e91ef6b",
          9472: "98a1094e4fa3f850539c72cb51718687"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", i.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var s = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(d)), a) return a(d)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var d = i.R;
            d || (d = []);
            var r = f[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var i = e(d, c);
                    if (!i || !i.then) return o(i, f, n);
                    var b = i.then(e => o(e, f), t);
                    if (!n) return b;
                    a.push(r.p = b)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, (e, a, d) => e ? c(i.I, r[0], 0, e, o, d) : t(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              i.o(i.S, d) || (i.S[d] = {});
              var c = i.S[d],
                f = "@rockstargames/modules-core-header",
                o = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                n = [];
              switch (d) {
                case "default":
                  o("@foundry-int/utils", "5.13.1", () => Promise.all([i.e(2280), i.e(4572)]).then(() => () => i(2280))), o("@foundry/icons", "5.13.1", () => Promise.all([i.e(5021), i.e(1127), i.e(3694), i.e(4836), i.e(6827)]).then(() => () => i(45021))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([i.e(1127), i.e(8429), i.e(1222), i.e(889), i.e(710)]).then(() => () => i(90710))), o("@radix-ui/react-dialog", "1.1.11", () => Promise.all([i.e(3571), i.e(1127), i.e(8429), i.e(889), i.e(9690), i.e(76), i.e(1208), i.e(2295)]).then(() => () => i(53571))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([i.e(887), i.e(1127), i.e(8429), i.e(1222), i.e(889), i.e(9690), i.e(2372), i.e(6491)]).then(() => () => i(96491))), o("@radix-ui/react-focus-scope", "1.1.4", () => Promise.all([i.e(1127), i.e(8429), i.e(76), i.e(5886)]).then(() => () => i(35886))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([i.e(1127), i.e(8429), i.e(1222), i.e(5656)]).then(() => () => i(25656))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([i.e(1127), i.e(6126)]).then(() => () => i(86126))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([i.e(887), i.e(9511), i.e(1127), i.e(8429), i.e(1222), i.e(889), i.e(3694), i.e(4676)]).then(() => () => i(69511))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([i.e(887), i.e(7145), i.e(1127), i.e(8429), i.e(1222), i.e(889), i.e(9690), i.e(2372), i.e(395)]).then(() => () => i(2776))), o("@radix-ui/react-portal", "1.1.6", () => Promise.all([i.e(1127), i.e(8429), i.e(76), i.e(5515)]).then(() => () => i(65515))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([i.e(1127), i.e(8429), i.e(1222), i.e(61)]).then(() => () => i(80061))), o("@radix-ui/react-slot", "1.2.0", () => Promise.all([i.e(1127), i.e(3117)]).then(() => () => i(13117))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([i.e(1127), i.e(9447)]).then(() => () => i(39447))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([i.e(1127), i.e(2865)]).then(() => () => i(22865))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([i.e(1127), i.e(8429), i.e(1222), i.e(9055)]).then(() => () => i(69055))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9512), i.e(9587), i.e(1127), i.e(8240)]).then(() => () => i(12841))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(4237), i.e(8068), i.e(1127), i.e(6088), i.e(5966), i.e(8113)]).then(() => () => i(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(4237), i.e(450), i.e(1127), i.e(6088), i.e(1788), i.e(5941)]).then(() => () => i(89757))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("framer-motion", "7.10.3", () => Promise.all([i.e(5912), i.e(1127), i.e(2649)]).then(() => () => i(75912))), o("gsap", "3.12.5", () => i.e(9719).then(() => () => i(79719))), o("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), o("react-remove-scroll", "2.7.1", () => Promise.all([i.e(145), i.e(1127)]).then(() => () => i(80145))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), o("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("spatial-navigation-polyfill", "1.3.1", () => i.e(7780).then(() => () => i(17780)));
                  break;
                case "header":
                  o("@foundry/react", "5.13.1", () => Promise.all([i.e(887), i.e(7145), i.e(9512), i.e(6707), i.e(8379), i.e(1127), i.e(8429), i.e(1222), i.e(889), i.e(9690), i.e(2372), i.e(3694), i.e(4572), i.e(4836), i.e(6741), i.e(1207)]).then(() => () => i(26707)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = (a, d) => {
              a = e(a), d = e(d);
              for (var r = 0;;) {
                if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                var t = a[r],
                  c = (typeof t)[0];
                if (r >= d.length) return "u" == c;
                var f = d[r],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && t != f) return t < f;
                r++
              }
            },
            d = e => {
              var a = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : d(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, d) => {
              if (0 in a) {
                d = e(d);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var i, b, l = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= d.length || "o" == (b = (typeof(i = d[f]))[0])) return !n || ("u" == l ? o > t && !c : "" == l != c);
                  if ("u" == b) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == b)
                      if (o <= t) {
                        if (i != a[o]) return !1
                      } else {
                        if (c ? i > a[o] : i < a[o]) return !1;
                        i != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || b < l != c) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, d) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && i.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], d, !1, t, c)) : e(a, i.S[a], d, r, t, c)
            },
            b = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n((e, n, i, l, s, u) => {
              if (!t(n, i)) return b(e, i, u);
              var h = ((e, d, t, c) => {
                var o = c ? f(e[d]) : e[d];
                return (d = Object.keys(o).reduce((e, d) => !r(t, d) || e && !a(e, d) ? e : d, 0)) && o[d]
              })(n, i, s, l);
              return h ? c(h) : u ? u() : void o(((e, a, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + d(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(n, e, i, s, l))
            }),
            s = n((e, o, n, i, l, s) => {
              if (!t(o, n)) return b(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? f(e[d]) : e[d];
                return Object.keys(t).reduce((e, d) => !e || !t[e].loaded && a(e, d) ? d : e, 0)
              })(o, n, i);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, l), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][h])
            }),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => i.e(1828).then(() => () => i(39447))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], () => i.e(3745).then(() => () => i(86126))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], () => i.e(5246).then(() => () => i(22865))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => i.e(2442).then(() => () => i(80061))),
              86683: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => i.e(9627).then(() => () => i(25656))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([i.e(8429), i.e(1222), i.e(1436)]).then(() => () => i(69055))),
              4572: () => l("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9512), i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              64836: () => l("default", "@foundry-int/utils", !1, [1, 5, 13, 1], () => Promise.all([i.e(2280), i.e(4572)]).then(() => () => i(2280))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([i.e(3571), i.e(9690), i.e(76), i.e(1208)]).then(() => () => i(53571))),
              90058: () => l("default", "@foundry/icons", !1, [1, 5, 13, 1], () => Promise.all([i.e(5021), i.e(1913)]).then(() => () => i(45021))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(4237), i.e(450), i.e(6088), i.e(1788), i.e(9757)]).then(() => () => i(89757))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(4237), i.e(8068), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], () => Promise.all([i.e(887), i.e(9511)]).then(() => () => i(69511))),
              19292: () => l("header", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([i.e(887), i.e(7145), i.e(9512), i.e(6707), i.e(9690), i.e(6741)]).then(() => () => i(26707))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([i.e(887), i.e(7145), i.e(9690), i.e(2776)]).then(() => () => i(2776))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => i.e(8329).then(() => () => i(90710))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], () => i.e(5912).then(() => () => i(75912))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => i.e(7780).then(() => () => i(17780))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => i.e(145).then(() => () => i(80145))),
              80076: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => i.e(5498).then(() => () => i(13117))),
              55856: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => i.e(7896).then(() => () => i(65515))),
              56041: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => i.e(3505).then(() => () => i(35886))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              6630: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => i.e(8872).then(() => () => i(96491))),
              42828: () => l("default", "gsap", !1, [4, 3, 12, 5], () => i.e(9719).then(() => () => i(79719)))
            },
            p = {
              76: [80076],
              889: [74406, 79158],
              1127: [71127],
              1207: [24780, 90058],
              1208: [55856, 56041],
              1222: [21222],
              1788: [81788],
              2372: [34902, 86683],
              3580: [2918, 9046, 19292, 42638, 61339, 63582, 73579, 79952],
              3694: [63694],
              4572: [4572],
              4836: [64836],
              5966: [95966],
              6088: [9623, 16188],
              6741: [6630, 42828],
              8429: [18429],
              9690: [19690]
            },
            m = {};
          i.f.consumes = (e, a) => {
            i.o(p, e) && p[e].forEach(e => {
              if (i.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = h[e]();
                  t.then ? a.push(u[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            i.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1913: 1,
                3580: 1,
                6707: 1,
                6827: 1,
                8379: 1,
                9472: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = i.miniCssF(e),
                  t = i.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (f = d[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((t = (f = c[r]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          i.f.j = (a, d) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(2(07|08|22)|127|788|913)|(23|45)72|(483|596|7)6|3694|6741|8429|889|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, d => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, o] = d,
                n = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                o && o(i)
              }
              for (a && a(d); n < c.length; n++) t = c[n], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(93032), i(42029)
      })())
    }
  }
});