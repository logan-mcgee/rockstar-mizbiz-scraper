try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8044aa0e-3d92-43fd-bb1a-a059b44254f0", e._sentryDebugIdIdentifier = "sentry-dbid-8044aa0e-3d92-43fd-bb1a-a059b44254f0")
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
                  "./core": () => Promise.all([d.e(8379), d.e(2160), d.e(1127), d.e(8429), d.e(1222), d.e(889), d.e(2372), d.e(3694), d.e(4572), d.e(1788), d.e(4836), d.e(1207), d.e(5966), d.e(2002)]).then(() => () => d(4542))
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
          61: "cb5c9ee8dfb79baa0f99ef27a2e62adf",
          68: "0585a4ef5eacf6ad13d80057beaaf2e0",
          131: "fd8d43b43820ff6a146f18d1bef48bd7",
          145: "3425e2eca88230b9ca080fe83bdcfdea",
          173: "7065836d455080a6f9fb462e5d9466af",
          278: "89794a519c79d8ade4603b7a8cd419a6",
          299: "7845351bacc1ff718cb3193168b0da49",
          314: "74fc3e73d4fc70a981af8c029df84ec6",
          395: "21f28c6d02c42f206adfb5eb3904b171",
          439: "60b0ebbb40615afb19f205fcea5e28dd",
          450: "1c04e4c8258e8541d1bb844af1a02899",
          662: "902fb234882becaa0ce9d387dce3c607",
          710: "8a042a282ec65d9b3f41b02bced3369b",
          824: "9bb2c058b8b9c16c64868c1b2d511333",
          887: "d495511cf82fe05260984a2b02188536",
          907: "cd313b29775fa318f8d175b9a7040ee4",
          1054: "6c9dfafd7eea5f444974238fab528d41",
          1098: "b24825606dfff1b185a33b5487ce8718",
          1242: "d61a7b83aafe65d30f443ce858e0b56c",
          1436: "dcace37492756a8cb8611e10267bc435",
          1758: "c1bf4496899a9eb3839338f357207e08",
          1822: "24ebc57cb8b46be99e61dba7c29dd4aa",
          1828: "80d0240c02c7f1e5f0699f7e402dafea",
          1868: "839224867643224397062788a0fb51dc",
          2002: "d81d95fc140083a2b56ce62fae0b0279",
          2156: "73e544841320a9c8876e4a94d82f52c9",
          2160: "e788bde6f26c7262f65aff3a5b7d2df1",
          2169: "2bb6a56c522b2a59a3f7bf2facf49c4e",
          2171: "93b7512c8a757c79350b9d7f7bd6145c",
          2221: "516a104c8f4f93a1b357da66c9165805",
          2234: "020a2e73a1ee5cb965379d8bde288afc",
          2243: "db17a31458a51e34713dde684aaa36dc",
          2280: "90a5a8c7077f556d1ee43b84093462ce",
          2295: "5f27f996d9d9b8b850f9a2c643073f1c",
          2306: "53bf850ced687f32e5a54339abe32b99",
          2347: "dbd33e90362d3214f0fd55f5220b5e64",
          2365: "8e2ce00f4fb761508a8e7e74e64128de",
          2398: "ef4706bc4a4f083ea3a33746062c04c1",
          2442: "e1e842a380952806e100639b3e042b8b",
          2466: "0282643b20043f2fa49c6e59da9a7b0f",
          2583: "374fb91839bdc9c41718e79f536300f9",
          2642: "36c3375928e6b1254fc1c20880093cd0",
          2649: "b240872ff623124b977f52d59849bad3",
          2678: "d25939c2cb30ae0902df61c8b8646d6f",
          2776: "93e6152a025bb629b3be2018b5efbbfd",
          2864: "b703ec0a5da0943076dd973101b1b270",
          2865: "b5b3aa65cd58fa6041ec1487427578b6",
          3034: "d059356e928ab5429ea274f8c603813a",
          3117: "2254d961a814a5bef7028c5fd5147de3",
          3197: "a2b0f46bf15983b6b97545ff0c48142b",
          3343: "9f68a0bb86a4e960ad16070dfae45cc3",
          3370: "4d2ed9c4009b1579af1efc91e98d864a",
          3475: "35b85c7589ebf4adf94d75d0ae6ec7f3",
          3486: "eb44e92bae108539aaa35a1465da035e",
          3505: "7a934af01d649ef3b4f7d06a27bbdd9b",
          3571: "dc7827e044389c37818dad431ca4f7be",
          3697: "e2353c04799c8ee51fcca292c49771b1",
          3745: "6d5f6a7bd2c51868fbf74b0a2357b4c6",
          3885: "3438ceb78ed659a078a1b342a4886589",
          3896: "3497466e3f264a70ebc861f0117ee358",
          3941: "28c389760686213bf61e9ca3ec3e5d51",
          4011: "211d174a8d919b6c1a810199b4cc2282",
          4237: "f6826028e14ad96d83ffd6f1249cbc08",
          4528: "80bd1e9db1c67ddc7f0682de5807b7ea",
          4578: "f2ca1201d40c60b417a1bffd7c253c1e",
          4621: "ba1982f364dc632f6f1a3c510c4ffa2e",
          4676: "37d714ec146189e73cb932355b9fe490",
          4700: "0d1e63215a6e9c85341a25a8ec0bc2e8",
          4710: "98d72d9d3b1961e224093be91764c2ad",
          4731: "05f91fa32a820795178e28eadf6b9a03",
          4799: "6570b201bbf30326fcadddb27aa27209",
          4851: "64ab80f25e3737302385ffb98b38e427",
          4861: "a9dece45c08fe574d6447fa220185eba",
          4913: "6da8bd48a21337d30c06ee712d156e44",
          4964: "161b905c29366a4cb81eeeb2ec1f3609",
          5018: "af41b91fecfeea51180b72ddf4a54b83",
          5021: "86f1311b609f6d6a891fafda9026b58b",
          5076: "dfbac01b34a9cf8b0862176369ca84bc",
          5233: "d0519670a4a2ca04a541ad71b8914065",
          5246: "4bd2fd17a33feae3281b599a8035b439",
          5259: "77fb8e185aaf5cc7c7608da5d966c71f",
          5265: "b972c984c82523a97fdf51a964003cc8",
          5389: "77931ccb9dc6f3b98530153c1dc0e2df",
          5415: "6ae1edc57cf5e695af673e7acd99ab65",
          5498: "78cee2a440492b5d5a74e878f599c227",
          5515: "c59222c796e2bc0a25cfad7060615170",
          5530: "e6d3cb0e7be2c2a81a749f6f0eba4a40",
          5639: "d285ae9e3fdb9fa9cbf00c4ee7b47b9d",
          5656: "bd5cb930900d75ea492b37c6caf0593e",
          5663: "62d810be9c5fb171864a9760b33b8a20",
          5742: "7925d6d93eacb2d2b9a2696ca87064df",
          5830: "60e953ac5c26bfc50c26670398a8978d",
          5832: "163bea8155a089d6f543b0bf6ebc2e85",
          5859: "d175b6f838a1299bad34fc977c3869d6",
          5886: "4c1876c901d939007fc0223d8bb70d75",
          5912: "101c3b9d296d8a31635cba827a637955",
          5941: "ed89261f0ea8d79c5c29373720a51b86",
          6088: "513d729f2ac4ea9fc0165cb83908ccec",
          6126: "01f25fe4a3510cc4cfd9cda0e24aa9be",
          6267: "d460f43a5c4ac3d1f8581da306975e08",
          6280: "f5cfd7d5626b4cc00ede3f817f5d5acd",
          6285: "cc948e674132ae898dc748a0dfd05319",
          6361: "a97fbd9353b312f8b5904a3360b9b96d",
          6471: "d95f60ca93e7d4c2b78d802224e5298f",
          6491: "8a69c617b2e0f85fff37f21539ef03ea",
          6664: "0f1dccfcb133ff6282ada7fa0acdf646",
          6707: "f888a2fa6f9fadabc1d5a653a2bb8ca3",
          6827: "3a486773e59f581895cacb84dace0a4e",
          6879: "f86330901d7a403d6f0b084f5160491d",
          6891: "b2ca68ba36cefcb5a3f0f7830ca02086",
          6997: "13d522436ce26f4bf4fc6b16c3945923",
          7010: "86e636c0c011c750126bc114d82963e5",
          7073: "02945b35e99fc467a0c634b65bb97ee4",
          7145: "50d650e44fe1b95314e6f1e2a0b5f5f5",
          7407: "9900ea7f19901ea788974abdcedea10c",
          7436: "750cb00638382f07ce93ee819a4f2f74",
          7452: "06d8676f3c28bf26c134f521524c5aa6",
          7453: "19066f1bb95f441933f4879c6704c6a8",
          7533: "ef59bf285a965cf052168c54d9028290",
          7780: "5580edb70261d5bedfd41210053081e3",
          7896: "5373d74a922bdac5470e0933fc1916ff",
          7970: "25a4224dad407c80994f54a7a1e17005",
          8068: "e8e1deae745e5623bfbfd5807c21a3f2",
          8113: "cad7f44c71218c1f2c97f768b4910815",
          8240: "3c88bc58e9b145875b31f0334bac90ad",
          8272: "b367b986b7f0306464dcaa89f9b24742",
          8325: "81363e9737cd315337526719311bedb2",
          8379: "96314766862f9107e6b8dc0c84a0286a",
          8391: "64dc5e93c477363284c3418885a437eb",
          8431: "faae39cdc511e2879072c086700ddd18",
          8659: "38763bc100deace4cc23dd9c0a35b3c9",
          8755: "9a4effa0540ce020ab2385549b15eb02",
          8845: "ab7da5b0a25cbf59896526cfa834c6a6",
          8872: "b9adab2814f4ce423afa0ed75b14d627",
          8880: "ef2b42766e34c9a38e1d23e6d804534e",
          8938: "af216514cb5c1b93e3b25c7777858b06",
          8970: "625e40df09929da71e69ce2cf52982b9",
          9022: "dd9f474e7a7f85c1687836e2e8a0c068",
          9028: "c9e926c11abe8d5b99f951b984e6903c",
          9055: "5ea51f1347736a1d797bacdd4fdcdd0f",
          9126: "5c5442fd58abf97cfa60295bb13389e7",
          9377: "f92896d9d27efd0d54eef19254386fce",
          9447: "485fb568c00beaf286ec4c3b160c4353",
          9511: "7dbb3f97c98214ffa732c309fbd245c6",
          9512: "2ba91b87d6c76e289743f334f8a4fccc",
          9587: "22c1e281192b656f49022eb363535d52",
          9615: "616ea70508a5c936f308422f8623a325",
          9627: "26a5f49f736a3bfad249ac748c035345",
          9719: "25ce4ecee39c87cf8010fd52d3b16c39",
          9757: "cf9eb5ad7657ea29051a386b298da2dd",
          9760: "fe34278f527315ac31ec42fb257c8080",
          9936: "d35eff946e354568def8688df4960576",
          9990: "66cdf70ff5b633b82e05402f82d7c196"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1913: "ed8a18e4768c2cfb55476973c2d36ae0",
          2002: "dc421a5a1c1497c34ffe052082a5bccd",
          2160: "86669cbde4b9625885e2ce66360c1be4",
          6707: "968ae2db6a67e403cf448ff45ed20cf9",
          6827: "ed8a18e4768c2cfb55476973c2d36ae0",
          8379: "1e4086942ee78c9a7c98998f1e91ef6b"
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
                  o("@foundry-int/utils", "5.13.1", () => Promise.all([b.e(2280), b.e(4572)]).then(() => () => b(2280))), o("@foundry/icons", "5.13.1", () => Promise.all([b.e(5021), b.e(1127), b.e(3694), b.e(4836), b.e(6827)]).then(() => () => b(45021))), o("@radix-ui/react-accordion", "1.2.12", () => Promise.all([b.e(710), b.e(1127), b.e(1062), b.e(1222), b.e(889), b.e(2295)]).then(() => () => b(90710))), o("@radix-ui/react-dialog", "1.1.11", () => Promise.all([b.e(3571), b.e(1127), b.e(8429), b.e(889), b.e(9690), b.e(76), b.e(1208), b.e(4676)]).then(() => () => b(53571))), o("@radix-ui/react-dialog", "1.1.15", () => Promise.all([b.e(887), b.e(1127), b.e(1062), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(6491)]).then(() => () => b(96491))), o("@radix-ui/react-focus-scope", "1.1.4", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5886)]).then(() => () => b(35886))), o("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([b.e(1127), b.e(1062), b.e(1222), b.e(5656)]).then(() => () => b(25656))), o("@radix-ui/react-id", "1.1.1", () => Promise.all([b.e(1127), b.e(6126)]).then(() => () => b(86126))), o("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([b.e(887), b.e(9511), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(3694), b.e(7533)]).then(() => () => b(69511))), o("@radix-ui/react-popover", "1.1.15", () => Promise.all([b.e(887), b.e(7145), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(395)]).then(() => () => b(2776))), o("@radix-ui/react-portal", "1.1.6", () => Promise.all([b.e(1127), b.e(8429), b.e(76), b.e(5515)]).then(() => () => b(65515))), o("@radix-ui/react-portal", "1.1.9", () => Promise.all([b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(61)]).then(() => () => b(80061))), o("@radix-ui/react-slot", "1.2.0", () => Promise.all([b.e(1127), b.e(3117)]).then(() => () => b(13117))), o("@radix-ui/react-slot", "1.2.3", () => Promise.all([b.e(1127), b.e(9447)]).then(() => () => b(39447))), o("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([b.e(1127), b.e(2865)]).then(() => () => b(22865))), o("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([b.e(1127), b.e(1062), b.e(1222), b.e(9055)]).then(() => () => b(69055))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([b.e(9512), b.e(9587), b.e(1127), b.e(8240)]).then(() => () => b(12841))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([b.e(4237), b.e(8068), b.e(1127), b.e(6088), b.e(5966), b.e(8113)]).then(() => () => b(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([b.e(4237), b.e(450), b.e(1127), b.e(6088), b.e(1788), b.e(5941)]).then(() => () => b(89757))), o("clsx", "2.1.1", () => b.e(439).then(() => () => b(10439))), o("framer-motion", "7.10.3", () => Promise.all([b.e(5912), b.e(1127), b.e(2649)]).then(() => () => b(75912))), o("gsap", "3.12.5", () => b.e(9719).then(() => () => b(79719))), o("lodash", "4.17.21", () => b.e(5076).then(() => () => b(15076))), o("react-dom", "18.3.1", () => Promise.all([b.e(1098), b.e(1127)]).then(() => () => b(71098))), o("react-dom", "19.2.0", () => Promise.all([b.e(1127), b.e(2583)]).then(() => () => b(62583))), o("react-remove-scroll", "2.7.1", () => Promise.all([b.e(145), b.e(1127)]).then(() => () => b(80145))), o("react-router-dom", "6.30.1", () => Promise.all([b.e(5389), b.e(1127), b.e(8429)]).then(() => () => b(15389))), o("react", "18.2.0", () => b.e(8659).then(() => () => b(68659))), o("react", "18.3.1", () => b.e(8431).then(() => () => b(48431))), o("spatial-navigation-polyfill", "1.3.1", () => b.e(7780).then(() => () => b(17780)));
                  break;
                case "header":
                  o("@foundry/react", "5.13.1", () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(6707), b.e(8379), b.e(1127), b.e(1062), b.e(8429), b.e(1222), b.e(889), b.e(9690), b.e(2372), b.e(3694), b.e(4572), b.e(4836), b.e(6741), b.e(1207)]).then(() => () => b(26707)))
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
              63694: () => l("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 1, 2], () => Promise.all([b.e(1062), b.e(1222), b.e(1436)]).then(() => () => b(69055))),
              4572: () => l("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(10439))),
              81788: () => l("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([b.e(9512), b.e(9587), b.e(5859)]).then(() => () => b(12841))),
              64836: () => l("default", "@foundry-int/utils", !1, [1, 5, 13, 1], () => Promise.all([b.e(2280), b.e(4572)]).then(() => () => b(2280))),
              24780: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => Promise.all([b.e(3571), b.e(9690), b.e(76), b.e(1208)]).then(() => () => b(53571))),
              90058: () => l("default", "@foundry/icons", !1, [1, 5, 13, 1], () => Promise.all([b.e(5021), b.e(1913)]).then(() => () => b(45021))),
              95966: () => l("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(450), b.e(6088), b.e(1788), b.e(9757)]).then(() => () => b(89757))),
              2918: () => l("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([b.e(4237), b.e(8068), b.e(6088), b.e(2169)]).then(() => () => b(32169))),
              9046: () => l("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 1], () => Promise.all([b.e(887), b.e(9511), b.e(1062)]).then(() => () => b(69511))),
              19292: () => l("header", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([b.e(887), b.e(7145), b.e(9512), b.e(6707), b.e(1062), b.e(9690), b.e(6741)]).then(() => () => b(26707))),
              42638: () => l("default", "@radix-ui/react-popover", !1, [1, 1, 1, 4], () => Promise.all([b.e(887), b.e(7145), b.e(1062), b.e(9690), b.e(2776)]).then(() => () => b(2776))),
              61339: () => l("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 2], () => Promise.all([b.e(710), b.e(1062)]).then(() => () => b(90710))),
              63582: () => l("default", "framer-motion", !1, [1, 7, 5, 1], () => b.e(5912).then(() => () => b(75912))),
              73579: () => s("default", "react", !1, [1, 18, 2, 0], () => b.e(8659).then(() => () => b(68659))),
              79952: () => l("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => b.e(7780).then(() => () => b(17780))),
              31062: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => b.e(4964).then(() => () => b(62583))),
              19690: () => l("default", "react-remove-scroll", !1, [1, 2, 5, 7], () => b.e(145).then(() => () => b(80145))),
              80076: () => l("default", "@radix-ui/react-slot", !1, [1, 1, 1, 0], () => b.e(5498).then(() => () => b(13117))),
              55856: () => l("default", "@radix-ui/react-portal", !1, [1, 1, 1, 4], () => b.e(7896).then(() => () => b(65515))),
              56041: () => l("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 7], () => b.e(3505).then(() => () => b(35886))),
              9623: () => l("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([b.e(5389), b.e(8429)]).then(() => () => b(15389))),
              16188: () => l("default", "lodash", !1, [1, 4, 17, 21], () => b.e(5076).then(() => () => b(15076))),
              6630: () => l("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 6], () => b.e(8872).then(() => () => b(96491))),
              42828: () => l("default", "gsap", !1, [4, 3, 12, 5], () => b.e(9719).then(() => () => b(79719)))
            },
            p = {
              76: [80076],
              889: [74406, 79158],
              1062: [31062],
              1127: [71127],
              1207: [24780, 90058],
              1208: [55856, 56041],
              1222: [21222],
              1788: [81788],
              2002: [2918, 9046, 19292, 42638, 61339, 63582, 73579, 79952],
              2372: [34902, 86683],
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
                1913: 1,
                2002: 1,
                2160: 1,
                6707: 1,
                6827: 1,
                8379: 1
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
              else if (/^(1(2(07|08|22)|062|127|788|913)|(23|45)72|(483|596|7)6|3694|6741|8429|889|9690)$/.test(a)) e[a] = 0;
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