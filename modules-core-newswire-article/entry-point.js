try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e2d2345a-d90b-4f56-8add-732c7175d5c5", e._sentryDebugIdIdentifier = "sentry-dbid-e2d2345a-d90b-4f56-8add-732c7175d5c5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var d = {},
    r = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, c, f, n, o, b = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            55974: (e, a, d) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([d.e(602), d.e(4237), d.e(4488), d.e(9763), d.e(5117), d.e(5176), d.e(7545), d.e(2321), d.e(5008), d.e(1302), d.e(2389), d.e(2229), d.e(4853), d.e(7727), d.e(2148), d.e(4572), d.e(5966), d.e(6130), d.e(6069), d.e(6070), d.e(1913), d.e(6536), d.e(2440), d.e(2358), d.e(9978), d.e(76), d.e(7577)]).then((() => () => d(28674))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(5117), d.e(8661), d.e(2229), d.e(4853), d.e(7727), d.e(4572), d.e(5966), d.e(6130), d.e(6069), d.e(6536), d.e(2358), d.e(3410)]).then((() => () => d(4984))),
                  "./types": () => Promise.all([d.e(602), d.e(4237), d.e(4488), d.e(9763), d.e(5117), d.e(5176), d.e(7545), d.e(2321), d.e(5008), d.e(1302), d.e(2389), d.e(2229), d.e(4853), d.e(7727), d.e(2148), d.e(4572), d.e(5966), d.e(6130), d.e(6069), d.e(6070), d.e(1913), d.e(6536), d.e(2440), d.e(2358), d.e(9978), d.e(76), d.e(7577)]).then((() => () => d(76808)))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
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
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var d = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, i), d.loaded = !0, d.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          i.r(r);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & d && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(r, c), r
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, d) => (i.f[d](e, a), a)), [])), i.u = e => "js/" + {
          68: "faa4206ed4dbfc356a57699d99eb2743",
          131: "a7fc64c401ab3ce97039e27012b0f0b3",
          173: "efa6c800b37e9a405f8190a38712b0c9",
          278: "48c9382d2f2ce6e20990059647c29104",
          299: "26373a47c6ff8a02c44413446ef26c69",
          314: "3410a39bfc51efaff04ad15e2d2aafcf",
          439: "d2a4a25f423802ee257f2b0b1268de19",
          602: "86db330a2c59b3b75ab4e7ebc20c084c",
          662: "8fbc6d4878ada14204c6c58ca51073d4",
          824: "f8aea0e2f1cfe0855eb5ca8fef9f6a02",
          884: "12e051c99b4e9b642611aebf67dfe33a",
          907: "55b5bd613f90e01185607c83af55a207",
          929: "2494f692a3e2d4ab98d52499108f1220",
          1054: "37b49bc8a14c006b64ad50e8b581eece",
          1057: "7b3137eb7d629273c60be3d561f0d9ca",
          1098: "5a6949887a4af48eeceaf502b0cdfa9b",
          1242: "5bfab666780dd1e7f877ffbc366534bb",
          1302: "51759cef77dd35ac7f278c956dc532e3",
          1758: "57354570b76cd5fdde967203343069a2",
          1822: "e0e49f06a2e618460c57358e7e387404",
          1858: "54b00ffc04834da79f605c1d23c83928",
          1868: "2be78d7948f404d5a794972d009e8655",
          2148: "360b815e8501a8ae58e36896db326b7b",
          2156: "1e06cd86bd570c3e3ac66f2a984907af",
          2171: "e954123fa47949c352c8b3260afae62e",
          2221: "4953ea39f1547bf5e234298cd7861f5c",
          2234: "7c589a1de09d5c78b1f4f9d8db973be9",
          2243: "c9a52c7c828dad61b9052881b0d7bc5b",
          2306: "ea5c5e86d7059085cd79ca7bad2089b4",
          2321: "3cb6152e273ca0236b86f270ae735fcb",
          2347: "9e2ce859ac16dd9ddb73c95f3094d5bd",
          2358: "85596eb79b934219e39872bc5adb8781",
          2365: "70c566923648faa7ac54a0376b448ab0",
          2389: "db43e2bd4223cd78eb2c68f2b9cc40cb",
          2398: "8b48bbe6b28f2310c975c9c7961f1116",
          2466: "449749a4110323ff69bc56ca59c0b9bb",
          2642: "6faaf3f7b116fcfb882f59f796a31c02",
          2678: "1532a9897c6fd04b8872486ad9f269d4",
          2864: "d899a8b9be945c8b40f3940931227ecc",
          3034: "c63c70400b50773e5aab37df2c00f9dc",
          3197: "cdcdfc0c024442e3a2d2094cbc24df5a",
          3343: "5930afc4ea3c45a4e7e3082a9e5a24d5",
          3370: "c2432d6f2deda63fe0a469db1bcfa735",
          3387: "9e5ebbcdc4c6cf4a3d5b8617aac8167c",
          3410: "9bb393b5f916590aa4c115143b85abf7",
          3421: "85bd8378b595e9777f4d8cf03bfe9972",
          3438: "cdb3cf803952d16d523972b7b2edc691",
          3475: "8847480e453bac0d93d9ca5572212d11",
          3486: "9d7eb0b6aac17be883b395860c754834",
          3697: "1424430bafb46be2a247a7aad6ac650f",
          3885: "8fef544f217f84fbbcb7eae43d0b9bcc",
          3896: "e212a58888035181ec53fe0383aa7c14",
          3941: "5f1b108553f3a2800247aff1c0689850",
          4011: "0567625af84e4e965292d361d4ca35ee",
          4237: "78ccc730b64ce9cee03f971300ba9538",
          4488: "3afadb9a370d5e2cf76fbf9734d2d81c",
          4528: "67f393d1af1d5316220e90e25ebbf0ea",
          4578: "dc8aa84e3a8342262e568eaad8b0e8d1",
          4621: "f95135718c4d48f7ad6bea95e519e0b0",
          4700: "6468cdafd9fd535c1209354e55b370b3",
          4710: "09a2a06693b80a21b96439a41c1eaec9",
          4731: "b169096d2ed0503aa320c22413428bc4",
          4799: "08cb05bfae172aa10af90b95f6f7c6fd",
          4851: "6f7f1816b4db45e859e0253e4c4bc642",
          4861: "45128f7c2ede8385fdb80c344d5c4d1d",
          4913: "81d9559ec3bd06db58f3410cf741683a",
          5008: "e43faca5f95420ed7fa15737a01d477f",
          5018: "9487b45fcdf754753cd82b3bafd61b33",
          5076: "7d397d5f54e5b35417a9755b7c4db669",
          5117: "ebab22981e01beba15567eeb1fad25bc",
          5176: "ab308fdc346a45967f0d3c681de63190",
          5233: "9347117d64c853480ff75e8bf0c5d6bc",
          5259: "a90fe37693e4a5f11a2668f2ec7f5d2b",
          5265: "d1d1544fe9b04347bbd41e8d37a97671",
          5389: "a957be1b1b0d8f841901911fedd0c11a",
          5400: "bd1848ec8941e871bd0c2b74ebd21e7c",
          5415: "fcb5b63d49b81e2994c4b50c30e5a7c8",
          5454: "422a280551ebd90e52042958a3039d95",
          5530: "0607ae462a8bebb14c5f190e55b2d0ea",
          5639: "6980d6853b61724b3236d17efef7a043",
          5663: "bc7f14a305e0bcb5e2f2216bcf2c1b8b",
          5742: "38ae464863aa2eecfca5710260463c3b",
          5802: "33702b446e555a143fc00d0715800f18",
          5830: "fee44eae867bf56075ed9225d4682eda",
          5832: "85c12017251a9a34b6ca4f1011abbac5",
          5859: "3c4675e6f77038d77130eefa56463414",
          6070: "58f0639e85d578668474732dd61e4e28",
          6130: "a32e46be323bc0793aac85917be439b0",
          6267: "25bf747c68f95820131342122efaf892",
          6280: "6d32fc82f056941decb5a4d53b299ec2",
          6285: "78098d2965f2a2d1b36ad4137918165f",
          6321: "a8682af5caf577c278c5724cb0844c58",
          6361: "b9f292a65f8de85efb7327190f23c3c0",
          6471: "1eb4e6d844f90108d034076a2f17030b",
          6664: "4c1c8cab8b34dd48d61788cd2605d2f8",
          6879: "39d4f3a6abea748d1cfcd0494b352dd3",
          6891: "960e996321488552c09a9bf1a702a004",
          6997: "5cb639cd9b0a0b10c79e6a298152335b",
          7010: "3d561e6c775790999e51ee65a22074ed",
          7073: "0ce3f680ac06f43b20903ab9424ceb4e",
          7407: "64d9424ce5771b4b7945b5b903265a42",
          7436: "4491c4b8a88d62247e48420cca133f13",
          7452: "22b537cf1870e7414cc9731205561eab",
          7453: "2390b06b1b4477524098e3af85fd8a5f",
          7545: "91b7c0fac255e14263cfd08070a227bf",
          7577: "35c4073456174f0f2d7de10b5d3ed4ca",
          7785: "204ed22a77b7832453abf573091a1d0d",
          7970: "dcee568237d7c513b7b233ef7c7f1eb4",
          8240: "a27f679719d1d6f5f874c73d7bad5fbb",
          8272: "22e6ce57d0e4ac35dd1a6229b8d517e4",
          8325: "1b9c1755d04cefdcdc31615abeb1b1a4",
          8391: "f0a55274dc14d7d1d2bfd4b98db03356",
          8431: "8bedf2f19dff7bf2d97cc6c40bc748b5",
          8503: "eb5e8bfe0fd45f3d8f4570a8907d2d95",
          8659: "977e60693bb3ac654600a43285b17963",
          8661: "573be990e151ce6c9811db65635a5af7",
          8702: "e72a1f781a21b4f51e8d18246f97ac73",
          8755: "c8ded2e2dd81ade90e2f85792bc73a15",
          8845: "55740935b3c92a17b82bc09678036cc1",
          8880: "ef0d8febf0551a56c79de836346f59d6",
          8938: "c708fb6f30aa0a1ca450edeb936b767a",
          8970: "a8da0ad97efea88d424594d113aa8e17",
          9022: "fa0a69c8f61a8d3967a13d4006c22089",
          9028: "5cf63973fc9d865400e575e7288896c2",
          9126: "ccce5cfb22b8de9e3ed64a783c5c2341",
          9377: "66242cb5b95c98d8165c5d0e0d438de9",
          9407: "7a1a4fbddb512d479f9d2274ed575f2e",
          9477: "69d5ea40b04f3ebf1348eacc3a2c1b9b",
          9587: "5b50109afb643f634c3044f07e5b3adc",
          9615: "2a7e95b15b7b630478ba44d32a98af40",
          9760: "0d868f5f9d6d40838922db82b7514e40",
          9763: "1f919a9ae4ae5df2807fdeb4d4731226",
          9936: "081828a084aa5d487929aa7e2595f974",
          9978: "4c24fa3f5911c9b23ab8bb3645b45b10",
          9984: "26412832e2014146cc7fc2421cf6fb74",
          9990: "e33af62c89bbba4ba44cc150d474f844"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          202: "ac6c3d25628c6900ccf6742b6efb74bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          929: "349ef210e52e0db243b9e70eaf3f81d2",
          1057: "384cddac2173849afd90c4a73e287f5e",
          2358: "e79a4105235290f9d2d864ea28c87921",
          2389: "7d08ead9dd48419a2cb3d5906a426e37",
          3438: "384cddac2173849afd90c4a73e287f5e",
          6069: "6a345130a21d6aba1c7f8052c5eb72c4",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          7577: "3f40eafbeb3d62dbcfb651a4e7388eb5",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "2185f6eb10d4c7769c05f1a343298050",
          9978: "9ca8a354d1d1a3e9958932e71c00fec9",
          9984: "8d822c5b401e526b78584a20b8df8a2d"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, d, r) => {
          if (c[e]) c[e].push(a);
          else {
            var t, n;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + d) {
                  t = s;
                  break
                }
              }
            t || (n = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, i.nc && t.setAttribute("nonce", i.nc), t.setAttribute("data-webpack", f + d), t.src = e), c[e] = [a];
            var l = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), n && document.head.appendChild(t)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach((e => {
            var d = i.R;
            d || (d = []);
            var r = o[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, n, o) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return n(b, f, o);
                    var s = b.then((e => n(e, f)), t);
                    if (!o) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    t(e)
                  }
                },
                f = (e, a, t) => c(a.get, r[1], d, 0, n, t),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, d) => e ? c(i.I, r[0], 0, e, f, d) : t()), 1)
            }
          }))
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
                f = "@rockstargames/modules-core-newswire-article",
                n = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var t = i(e);
                    if (!t) return;
                    var c = e => e && e.init && e.init(i.S[d], r);
                    if (t.then) return b.push(t.then(c, a));
                    var f = c(t);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === d && (n("@foundry/react", "5.2.1", (() => Promise.all([i.e(602), i.e(2321), i.e(9984), i.e(1302), i.e(2229), i.e(4853), i.e(4572), i.e(430), i.e(9407)]).then((() => () => i(19984))))), n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), n("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(4488), i.e(7545), i.e(2229), i.e(4572), i.e(5966), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then((() => () => i(89477))))), n("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(4488), i.e(9763), i.e(7545), i.e(2321), i.e(5008), i.e(2229), i.e(4853), i.e(7727), i.e(2148), i.e(4572), i.e(5966), i.e(6070), i.e(1913), i.e(2440), i.e(929), i.e(9978), i.e(202)]).then((() => () => i(64733))))), n("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(4488), i.e(2229), i.e(4572), i.e(5966), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then((() => () => i(90884))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(9763), i.e(5117), i.e(2229), i.e(4853), i.e(7727), i.e(2148), i.e(5966), i.e(6130), i.e(6070), i.e(1057)]).then((() => () => i(99747))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(2229), i.e(7727), i.e(2148), i.e(8702)]).then((() => () => i(58702))))), n("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), n("dompurify", "2.5.8", (() => i.e(7785).then((() => () => i(27785))))), n("lodash", "4.17.21", (() => i.e(5076).then((() => () => i(15076))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), n("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(3387), i.e(2229)]).then((() => () => i(43387))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), n("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), n("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), n("text-balancer", "1.0.5", (() => i.e(5400).then((() => () => i(75400))))), o(25136), o(29441)), b.length ? e[d] = Promise.all(b).then((() => e[d] = 1)) : e[d] = 1
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
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = e => {
              var d = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                r += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
                return r
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : a(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, s, i = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (s = (typeof(b = r[f]))[0])) return !o || ("u" == i ? n > t && !c : "" == i != c);
                  if ("u" == s) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == s)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || s < i != c) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, t, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(f).reduce(((a, r) => !d(t, r) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var r = 0;;) {
                  if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                  var t = a[r],
                    c = (typeof t)[0];
                  if (r >= d.length) return "u" == c;
                  var f = d[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && t != f) return t < f;
                  r++
                }
              })(a, r) ? a : r), 0)) && f[r]
            },
            t = e => {
              throw new Error(e)
            },
            c = (e => function(a, d, r, t, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], d, !1, t, c)) : e(a, i.S[a], d, r, t, c)
            })(((e, d, c, f, n, o) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return ((e, a, d) => d ? d() : ((e, a) => t("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var b, s = r(d, c, n, f);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void t(((e, d, r, t, c) => {
                var f = e[r];
                return "No satisfying version (" + a(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(d, e, c, n, f))
            })),
            f = {},
            n = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(5076).then((() => () => i(15076))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(7727), i.e(2148), i.e(6321)]).then((() => () => i(58702))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(7785).then((() => () => i(27785))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(9763), i.e(5117), i.e(4853), i.e(7727), i.e(2148), i.e(6130), i.e(6070), i.e(3438)]).then((() => () => i(99747))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(8503).then((() => () => i(90884))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => i.e(929).then((() => () => i(64733))))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(8579), i.e(1858)]).then((() => () => i(89477))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(3387).then((() => () => i(43387))))),
              86695: () => c("default", "@foundry/react", !1, [2, 5, 2], (() => Promise.all([i.e(9984), i.e(430)]).then((() => () => i(19984))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(5400).then((() => () => i(75400))))),
              50430: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421)))))
            },
            o = {
              430: [50430],
              1913: [61913],
              2148: [9623],
              2229: [62229],
              2440: [92440],
              4572: [4572],
              4853: [44853],
              5966: [95966],
              6536: [2973],
              7577: [15310, 20206, 42602, 57770, 86695, 97384],
              7727: [16188, 81788]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                76: 1,
                202: 1,
                884: 1,
                929: 1,
                1057: 1,
                2358: 1,
                2389: 1,
                3438: 1,
                6069: 1,
                6536: 1,
                7577: 1,
                8503: 1,
                8579: 1,
                9978: 1,
                9984: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
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
                        n = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), t(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, d)
              })))(a).then((() => {
                e[a] = 0
              }), (d => {
                throw delete e[a], d
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (a, d) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(2(02|229|440)|4(30|572|853)|(596|653|7)6|1913|6069|7727|8579)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((d, t) => r = e[a] = [d, t]));
              d.push(r[2] = t);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (d => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, n] = d,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(d); o < c.length; o++) t = c[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
}));