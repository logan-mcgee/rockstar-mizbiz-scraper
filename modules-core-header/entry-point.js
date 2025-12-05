try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "df5d458b-3e2d-43e1-81ee-051aa905dcaa", e._sentryDebugIdIdentifier = "sentry-dbid-df5d458b-3e2d-43e1-81ee-051aa905dcaa")
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
                  "./core": () => Promise.all([d.e(78), d.e(5565), d.e(1127), d.e(8429), d.e(1222), d.e(889), d.e(2372), d.e(4572), d.e(3694), d.e(1788), d.e(3341), d.e(4414), d.e(5966), d.e(6565)]).then(() => () => d(7229))
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
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, b.d(t, c), t
        }, b.d = (e, a) => {
          for (var d in a) b.o(a, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, d) => (b.f[d](e, a), a), [])), b.u = e => "js/" + {
          61: "b7e586a3db47dcc808870c3aef256a23",
          68: "62e9bff81b478a1554208e9ddf94bf74",
          78: "776bedba6c1aec72fb2cc3776523063a",
          131: "2cd86732308c5bae55520aca358b8445",
          145: "00dbb93d72d5661b57230d234ee498c6",
          173: "027988139adb1834500595993c523259",
          278: "7279a4e0d521a21ecfce710b5b5b863c",
          299: "5b237696a4b32b56689aea28b57f467e",
          314: "8d1c132c1398271e6f5ae924485f6f09",
          395: "c6aeca8e914b24f019e67c523c9bf473",
          439: "dc852a140c4ae00686a4c98fa8d02879",
          450: "30da11d7aa459d1fe42c2c52901e220e",
          499: "de7f3b213f7539a266517bf408bbe984",
          662: "27f7441f2b37df957106c10f14c8808f",
          710: "863acbf33d32f39fe9d7fea7cdc5ee50",
          824: "da16dd754e8528123edb8c2ae17ba2c5",
          887: "57cc7b47147308427158da9a91affe52",
          907: "7a2b79d92a2ecf797bdd910ba21e7292",
          1054: "cc523b3e78c37f24b2348ea2ac056387",
          1098: "dac40645cb6be7e8379fce7c67bd32e2",
          1242: "7c90a4ed361825de84a7c5a4fe69ace9",
          1436: "1507f5abc7a0f6e5803dee6043091aad",
          1758: "e451a063a6082f59de56cac76d807fbd",
          1822: "c9edcef1d03ad35ed2608cd79cca6ace",
          1828: "2e2bdeaf407b5adac6c33c75bd3d980a",
          1868: "119b0d917bb2953feda47450635e5553",
          2156: "7cf834f410c654898c4973793e193699",
          2169: "185d8245968534c7d69fcf2aac894293",
          2171: "3b01cdb4045af4c48fbc2af614170a07",
          2221: "61961dbd2ee35370502a76b696b62e8d",
          2234: "5aafa3226114e2a46e2d8ddb04ff307d",
          2243: "20405fbec93bb4f48cd20ecc4cf250d9",
          2280: "ea9ecd358735f397448369cd684bc35b",
          2295: "fe44eb02d3493299b460bbb9f91b6a15",
          2306: "1331ba7830373ce6657b1cd5c9cd1b26",
          2347: "9cd0917df8af5a99777d5896dc527a49",
          2365: "3cec16836cc57bc6ed8d3e32f516b849",
          2398: "afd96436e62fa1aa9fb37be11c4e869d",
          2442: "bfbef3f883cec232711cc2c84d0553f8",
          2466: "e712b62037295dc4f2dd2bd422a07913",
          2583: "d9fd66c1f5a9a104a97fa2e11102da34",
          2642: "ed6141a63ef016894446b943ecc2ac28",
          2649: "2d06e86608c6c77db87f3b3be6bfa149",
          2678: "60982f713f5643d237373b3e43363d90",
          2776: "37f4c64fcdfa2f4ca1eb6fe1d152c3b7",
          2864: "5cda10a48808f66a020d6f72f976ea21",
          2865: "8aaef751d307955f8ea048310bda600f",
          3034: "bb8fddd67f1014f2bb9a5ec91571abaa",
          3042: "b44548d4dd3b54a717312ee9043720cf",
          3117: "12c98437a4bde33d30fb7c57d94eadc0",
          3197: "591ed205139173e2cc19b83991d40f97",
          3343: "cd6e0eb6f65707ac7a48caae97ee72db",
          3370: "dbff8a75ac17611d31f2e986d7246d48",
          3419: "b4a5718a0771e8b54df345505605ebbb",
          3475: "cdf82c4ef89dacde2772eb6404576c6a",
          3486: "737c57d275c855e4ffbfb5d4bb57a941",
          3505: "72aa827c2abfeb05f710e6701182dc51",
          3571: "54d8ec5d981b7f8f71344f3dc8fb76ec",
          3697: "ec97a38ff63a203cd74e5f8f0171fc96",
          3745: "c796a9561698b046b2a2fc83243562b1",
          3885: "b40304c10089d5d1d7dd5cddfdf69d80",
          3896: "5a4a7cb7882f9ae5ed9f2d386d2e3020",
          3941: "e678d17d953d50bb1100dd6a3f949a17",
          4011: "2baaee023c799fc2774c41c4f79f29ad",
          4237: "136a91c45561b1b4a865c1be8edc541f",
          4528: "a8ea6bc22758e3bbfd3033c7afd06214",
          4578: "8032c8929b98fa4ff70aa6242ff2376a",
          4621: "eaa5bfd152018355c06b641d3ce129a2",
          4676: "cf53166a5932139b32f044e27fd0bea4",
          4700: "d65ef83bba606e5bf27676efb7a8b395",
          4710: "e12572a8b918274c8d494a98c8aba850",
          4731: "6098c5acd2dae2cd7b68ebe88414bc8e",
          4799: "c95c876ef021c3c9eb99b27306257fef",
          4851: "8c67cc4fa116108d3be28906bb418194",
          4861: "b3dec597de8ad2e485c065585660af85",
          4913: "4aa013feb662dc060fd4c616bc27c76c",
          4964: "15f9b5d81dde5381738c6b4e1fc98697",
          5018: "319218cb8bd101f5401351104bbd3deb",
          5021: "40328c3c58fb1b29424b29eed7ec21b6",
          5076: "4fc2a568c055bda8f5c2e9ff9b2b8d2f",
          5233: "c59b99f4abe84261b0d24d7397db1c13",
          5246: "26f54f76b0aa35cc846cd48e3f5d0f81",
          5259: "6501e5b3aeeca37450a28ba6f8bb19fc",
          5265: "8146d04a8717c453676bced73ecab863",
          5389: "14a66894dd50abb26d7a7855311d0499",
          5415: "90205756fd0fbbf9319afe96720574fb",
          5498: "c5c2aed36910061317876b68f51b7ac9",
          5515: "e3fda3360d228b3412e4369c10b66a72",
          5530: "a238fa96698404319959609ad05c9b5a",
          5565: "070c5a46921da9e6cc5eefcc151034eb",
          5639: "233e80b48a6eb7a011852c4c0e5a8a52",
          5656: "44e7dec40a35cce2f96b29723b472da9",
          5663: "5b2cd4a41f55ce29b93abeee319e2144",
          5742: "bcca4cacc7d8cbf357aa329f1f1ce7f5",
          5830: "3ad997d2a98fff3c7a26d74209db3d7f",
          5832: "33d5e3589783ad62ee12267786e852d4",
          5859: "8e44b32dd0942abc34fb2c63862f8107",
          5886: "1c781237cebbe6a7957ec782d93d1f23",
          5912: "2e5a7060aa8ad2b2b55432a7f199f867",
          5941: "053ac301941fbab35d1bf51bde4840a0",
          6088: "8b15c1b2816da3790f33f12592defacd",
          6126: "70bd961f2e27471d00ea4f7fff0655aa",
          6267: "8be85e45ba39b9de5423c416e0f52a38",
          6280: "623e36181d2082d9a6019bd6c3b59015",
          6285: "dd4a7648728fe992cea3de53cefd33f8",
          6361: "965040463e9db7b2cdb36b00a8184385",
          6471: "c2d330257ce72ec9afc08f0a61e522d9",
          6491: "ebef64cbc2571d69d94f1bb2a5da50d7",
          6528: "5af4cf8907984c380a2aba7e5b6cadf1",
          6565: "15c24eec835cdb6703f8024ae8f2a535",
          6664: "296785adf4196b1ddf49aa6e3c80dced",
          6827: "8dcf21328b919440d952357634d30a29",
          6879: "25537701b9323b4cfe8a785d68ac3c2f",
          6891: "4ff199c1bb67cfcd5bc354df07273e76",
          6997: "c54a4ad1701b7aeaae536cbd8bc85b4a",
          7010: "a2044c8d7af36ac5404462b6cc699f4c",
          7073: "5e0b7f452d430e6cb60c256ccd0662ca",
          7145: "94e4843bedbd23d9668e28ef3c782b9d",
          7407: "b45a83790fb9488d3ed7ed8833c73de5",
          7436: "13a75d11d20aa0f229d2d73bf555468d",
          7452: "2251beb74d8ec69ee00a5053ae6392c9",
          7453: "193d7ac8cb9c8450e9a72d1eb9653478",
          7533: "bc3f67074a89c863b1b3cff70b477046",
          7780: "2aad88f29ae4873abb86088da73ce6ae",
          7896: "943a64c5421829a25a9e41c29e0cef82",
          7970: "df925522094ad7e581d614b867853916",
          8068: "dfed45efb88fa65232631b2c2ff8783d",
          8113: "38417cfc843a11741a5d22b7b60c2d76",
          8240: "10d48f6a517f60d8bcc541a5e679e8ca",
          8272: "7d5e9f52625bed71280b3070a9b43711",
          8325: "d089b41c1668879339c346a821cf271a",
          8391: "4541166addfd0dbd0c2f4206f67d8c40",
          8431: "ce1c7e7476f449eb77d001a873794bbd",
          8659: "e3116041fef6ea2d3e5a39ace4b6a796",
          8755: "b67cfba96ad06fbf2e665363b659b669",
          8845: "a9aab951128a0c0c4eb93d0b6b97834b",
          8872: "80c67f806c95ea71146ed936d27cf3ff",
          8880: "e62235979e6f0fd06712a85119100ebd",
          8938: "e98da24341f150c8b5fabd289c03c81c",
          8970: "e0499df45ef1fc7224a44de46249d5a7",
          9022: "b0d5482985187062e55b57df189c4433",
          9028: "3b86e767ad2aa6fbd8b174dad0c77102",
          9055: "990aba7e6b2d5812bb1b747654509196",
          9126: "e9027c70ae71aeb895f95e16d311a369",
          9377: "df1cb4a50a2deb0e2e48d2c068942633",
          9447: "62f6b092943f2d795bb3f299794694f3",
          9511: "616c615f7a651b8a37b82c6cc94b708b",
          9512: "19367252226c728e63d1ad2683146b05",
          9587: "d60ce3e80e0059960cc0e2ab9760def0",
          9615: "d2115ac62cf1759c70c852a20a7a7b1f",
          9627: "8121278da25df7436f008ebb5d866a23",
          9719: "034e067d726054e435e11212de6fd298",
          9757: "c1a6beb9cbb20ea4443f769ee2f482b0",
          9760: "39da75c042836e61f18b17a1951a9e44",
          9936: "f203487ccd731c3c3bf16c4d084db71e",
          9990: "242f71ded88d8ebb3fd59005444bc79d"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          78: "66ac2922437dd3a7d6e7755abe626b6c",
          1913: "ed8a18e4768c2cfb55476973c2d36ae0",
          3042: "9020d88c2e452f89f0f51720e5436a4c",
          5565: "b96b7d440bc42510a54d4016aa1d1d1a",
          6565: "dc421a5a1c1497c34ffe052082a5bccd",
          6827: "ed8a18e4768c2cfb55476973c2d36ae0"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-header:", b.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var l = n[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + d) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
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
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach(e => {
            var d = b.R;
            d || (d = []);
            var r = f[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var i = b.then(e => o(e, f), t);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, (e, a, d) => e ? c(b.I, r[0], 0, e, o, d) : t(), 1)
            }
          })
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              b.o(b.S, d) || (b.S[d] = {});
              var c = b.S[d],
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
                  o("@foundry-int/utils", "5.12.0", () => Promise.all([b.e(3419), b.e(4572), b.e(499)]).then(() => () => b(60499))), o("@foundry-int/utils", "5.12.1", () => Promise.all([b.e(3419), b.e(4572), b.e(2280)]).then(() => () => b(2280))), o("@foundry/icons", "5.12.1", () => Promise.all([b.e(5021), b.e(1127), b.e(3694), b.e(3341), b.e(6827)]).then(() => () => b(45021))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([b.e(710), b.e(1127), b.e(1062), b.e(1222), b.e(889), b.e(2295)]).then(() => () => b(90710))), o("@radix-ui/react-dialog", "1.1.11", () => Promise.all([b.e(3571), b.e(1127), b.e(8429), b.e(889), b.e(9690), b.e(76), b.e(1208), b.e(4676)]).then(() => () => b(53571))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([b.e(887), b.e(1127), b.e(1062), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(6491)]).then(() => () => b(96491))), o("@radix-ui/react-focus-scope", "1.1.4", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5886)]).then(() => () => b(35886))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([b.e(1127), b.e(1062), b.e(1222), b.e(5656)]).then(() => () => b(25656))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([b.e(1127), b.e(6126)]).then(() => () => b(86126))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([b.e(887), b.e(9511), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(3694), b.e(7533)]).then(() => () => b(69511))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([b.e(887), b.e(7145), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(395)]).then(() => () => b(2776))), o("@radix-ui/react-portal", "1.1.6", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5515)]).then(() => () => b(65515))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(61)]).then(() => () => b(80061))), o("@radix-ui/react-slot", "1.2.0", () => Promise.all([b.e(1127), b.e(3117)]).then(() => () => b(13117))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([b.e(1127), b.e(9447)]).then(() => () => b(39447))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([b.e(1127), b.e(2865)]).then(() => () => b(22865))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([b.e(1127), b.e(1062), b.e(1222), b.e(9055)]).then(() => () => b(69055))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([b.e(9512), b.e(9587), b.e(1127), b.e(8240)]).then(() => () => b(12841))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([b.e(4237), b.e(8068), b.e(1127), b.e(6088), b.e(5966), b.e(8113)]).then(() => () => b(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([b.e(4237), b.e(450), b.e(1127), b.e(6088), b.e(1788), b.e(5941)]).then(() => () => b(89757))), o("clsx", "2.1.1", () => b.e(439).then(() => () => b(10439))), o("framer-motion", "7.10.3", () => Promise.all([b.e(5912), b.e(1127), b.e(2649)]).then(() => () => b(75912))), o("gsap", "3.12.5", () => b.e(9719).then(() => () => b(79719))), o("lodash", "4.17.21", () => b.e(5076).then(() => () => b(15076))), o("react-dom", "18.3.1", () => Promise.all([b.e(1098), b.e(1127)]).then(() => () => b(71098))), o("react-dom", "19.2.0", () => Promise.all([b.e(1127), b.e(2583)]).then(() => () => b(62583))), o("react-remove-scroll", "2.7.1", () => Promise.all([b.e(145), b.e(1127)]).then(() => () => b(80145))), o("react-router-dom", "6.30.1", () => Promise.all([b.e(5389), b.e(1127), b.e(8429)]).then(() => () => b(15389))), o("react", "18.2.0", () => b.e(8659).then(() => () => b(68659))), o("react", "18.3.1", () => b.e(8431).then(() => () => b(48431))), o("spatial-navigation-polyfill", "1.3.1", () => b.e(7780).then(() => () => b(17780)));
                  break;
                case "header":
                  o("@foundry/react", "5.12.1", () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(3042), b.e(78), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(4572), b.e(3694), b.e(3341), b.e(3138), b.e(4414)]).then(() => () => b(3042)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                  var b, i, l = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= d.length || "o" == (i = (typeof(b = d[f]))[0])) return !n || ("u" == l ? o > t && !c : "" == l != c);
                  if ("u" == i) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < l != c) return !1;
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
            t = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, d, r, t, c) {
              var f = b.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, b.S[a], d, !1, t, c)) : e(a, b.S[a], d, r, t, c)
            },
            i = (e, a, d) => d ? d() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n((e, n, b, l, s, u) => {
              if (!t(n, b)) return i(e, b, u);
              var h = ((e, d, t, c) => {
                var o = c ? f(e[d]) : e[d];
                return (d = Object.keys(o).reduce((e, d) => !r(t, d) || e && !a(e, d) ? e : d, 0)) && o[d]
              })(n, b, s, l);
              return h ? c(h) : u ? u() : void o(((e, a, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + d(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(n, e, b, s, l))
            }),
            s = n((e, o, n, b, l, s) => {
              if (!t(o, n)) return i(e, n, s);
              var u, h = ((e, d, r) => {
                var t = r ? f(e[d]) : e[d];
                return Object.keys(t).reduce((e, d) => !e || !t[e].loaded && a(e, d) ? d : e, 0)
              })(o, n, b);
              return r(l, h) || (u = ((e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + d(t) + ")")(o, n, h, l), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][h])
            }),
            u = {},
            h = {
              71127: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8431).then(() => () => b(48431))),
              18429: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(1098).then(() => () => b(71098))),
              21222: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(1828).then(() => () => b(39447))),
              74406: () => l("default", "@radix-ui/react-id", !1, [1, 1, 1, 0], () => b.e(3745).then(() => () => b(86126))),
              79158: () => l("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 1, 0], () => b.e(5246).then(() => () => b(22865))),
              34902: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => Promise.all([b.e(1062), b.e(8429), b.e(2442)]).then(() => () => b(80061))),
              86683: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => Promise.all([b.e(1062), b.e(9627)]).then(() => () => b(25656))),
              4572: () => l("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(10439))),
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([b.e(1062), b.e(1222), b.e(1436)]).then(() => () => b(69055))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([b.e(9512), b.e(9587), b.e(5859)]).then(() => () => b(12841))),
              63341: () => l("default", "@foundry-int/utils", !1, [1, 5, 12, 1], () => Promise.all([b.e(3419), b.e(4572), b.e(2280)]).then(() => () => b(2280))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([b.e(3571), b.e(9690), b.e(76), b.e(1208)]).then(() => () => b(53571))),
              33915: () => l("default", "@foundry/icons", !1, [1, 5, 12, 1], () => Promise.all([b.e(5021), b.e(1913)]).then(() => () => b(45021))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(450), b.e(6088), b.e(1788), b.e(9757)]).then(() => () => b(89757))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(8068), b.e(6088), b.e(2169)]).then(() => () => b(32169))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], () => Promise.all([b.e(887), b.e(9511), b.e(1062)]).then(() => () => b(69511))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([b.e(887), b.e(7145), b.e(1062), b.e(9690), b.e(2776)]).then(() => () => b(2776))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => Promise.all([b.e(710), b.e(1062)]).then(() => () => b(90710))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], () => b.e(5912).then(() => () => b(75912))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8659).then(() => () => b(68659))),
              73681: () => l("header", "@foundry/react", !1, [1, 5, 12, 1], () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(3042), b.e(1062), b.e(9690), b.e(3138)]).then(() => () => b(3042))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => b.e(7780).then(() => () => b(17780))),
              31062: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(4964).then(() => () => b(62583))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => b.e(145).then(() => () => b(80145))),
              80076: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(5498).then(() => () => b(13117))),
              55856: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(7896).then(() => () => b(65515))),
              56041: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(3505).then(() => () => b(35886))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([b.e(5389), b.e(8429)]).then(() => () => b(15389))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], () => b.e(5076).then(() => () => b(15076))),
              6630: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => b.e(8872).then(() => () => b(96491))),
              42828: () => l("default", "gsap", !1, [4, 3, 12, 5], () => b.e(9719).then(() => () => b(79719))),
              64778: () => l("default", "@foundry-int/utils", !1, [1, 5, 12, 1], () => Promise.all([b.e(3419), b.e(6528)]).then(() => () => b(60499)))
            },
            p = {
              76: [80076],
              889: [74406, 79158],
              1062: [31062],
              1127: [71127],
              1208: [55856, 56041],
              1222: [21222],
              1788: [81788],
              2372: [34902, 86683],
              3138: [6630, 42828, 64778],
              3341: [63341],
              3694: [63694],
              4414: [24780, 33915],
              4572: [4572],
              5966: [95966],
              6088: [9623, 16188],
              6565: [2918, 9046, 42638, 61339, 63582, 73579, 73681, 79952],
              8429: [18429],
              9690: [19690]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(p, e) && p[e].forEach(e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var d = a => {
                  u[e] = 0, b.m[e] = d => {
                    delete b.c[e], d.exports = a()
                  }
                };
                m[e] = !0;
                var r = a => {
                  delete u[e], b.m[e] = d => {
                    throw delete b.c[e], a
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
            b.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                78: 1,
                1913: 1,
                3042: 1,
                5565: 1,
                6565: 1,
                6827: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = b.miniCssF(e),
                  t = b.p + r;
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
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = d => {
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
          b.f.j = (a, d) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(062|127|208|222|788|913)|3(138|341|694)|(23|45)72|4414|5966|76|8429|889|9690)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, d => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
                for (r in f) b.o(f, r) && (b.m[r] = f[r]);
                o && o(b)
              }
              for (a && a(d); n < c.length; n++) t = c[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), b.nc = void 0, b(93032), b(42029)
      })())
    }
  }
});