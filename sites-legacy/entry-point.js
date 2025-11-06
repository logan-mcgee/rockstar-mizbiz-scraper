try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "da3c7044-4915-4f2b-8ef6-55f37e6a57e5", e._sentryDebugIdIdentifier = "sentry-dbid-da3c7044-4915-4f2b-8ef6-55f37e6a57e5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, c, n, o = {
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(8437)]).then((() => () => t(58437))),
                  "./index": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(9741)]).then((() => () => t(19741))),
                  "./site-routes/Bully": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392), t.e(6019)]).then((() => () => t(86019))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392), t.e(9171)]).then((() => () => t(99171))),
                  "./tina": () => Promise.all([t.e(5076), t.e(2293), t.e(6703), t.e(5117), t.e(1932), t.e(2858), t.e(2229), t.e(9623), t.e(5966), t.e(1788), t.e(6088), t.e(4853), t.e(2918), t.e(2323), t.e(6565), t.e(2440), t.e(1277), t.e(9458), t.e(7145), t.e(275), t.e(392)]).then((() => () => t(392)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          68: "8b658b1e64372167826931066d7963c8",
          131: "4f937623b867ecd9ef7683fc2742c7f7",
          173: "4982184f0a7cf1141fe3c92c5af29f72",
          275: "e2f60073c213671a801044e2c099bc88",
          278: "051aa54bf65a62c234f19134a13fc4cc",
          299: "16e4989378b77f8979fce6b6e1f305bd",
          314: "9ea52b386a0d4cee5f5dffa53237ecd4",
          392: "6d967db28420ae3513c559cb8122a56f",
          439: "248620456b4ea49d1cf12d3b1e22bc00",
          601: "8ea81808aab739632f704bfb7adff3fa",
          662: "91dd6b0809d89e344ba9f590f19d1f8e",
          824: "b9fc5ae27fa38898dc6fa60e1bfb55fc",
          907: "fdeee2f22d41f850a909c7becccd0fde",
          1054: "9e16a12a027c19ca7936ed213615f0ef",
          1057: "f4ae65e233e6c49eb6e5e4659f12849e",
          1098: "6b097d6d4b26389f091c7d879082a66d",
          1242: "e25cea9f5cbafe72079b8e611ec10583",
          1277: "14aab12dd94697ffa464e61fc63e4f0b",
          1673: "a0ab04753e37ae3403aaf8e1c8896373",
          1758: "028fe3dcdd5f1fb3ea8ef365fbe2f3c6",
          1785: "74b32294ef18110eadce9ae9eb240035",
          1822: "ef5fbdf663f6934ba4914cbe852ed3d9",
          1840: "0adbb6825bd1173d34715c3ff82dc47d",
          1868: "0f6fce7de1e099d7ae422258421c2634",
          1932: "c72eb2e61a5c0393048a1aeef44a9788",
          2156: "a929ccb713afd6ceba5d53355a83005d",
          2169: "df2512e14dace50ad7224255ac147ed0",
          2171: "3c7201932654bdbc7d461a4264293488",
          2221: "30e4895d3d5c77b01f4624f214282130",
          2234: "a0ea15594f6d191154e6036ea0fa9f82",
          2243: "ec34e3ee85691f3d076b1c442665edee",
          2293: "5a0d87825a0bf0dd4eab0a0fba9e8a10",
          2306: "757b98c45491212718a32d0f33d25ec3",
          2323: "ff698eea5d98520d5feea7388bf43cc3",
          2347: "579d30d1edee0e41634410f54b6cc627",
          2365: "262cd6c8eccd7da01dfdc6d6e0cd8336",
          2368: "43494ab4ca2e1f9b006bcf7b92d787a9",
          2398: "554d2642ee94e09412e5458e0527c7d7",
          2466: "fd94609a351edcd38afb24d9cd180ed9",
          2642: "fbf3b1ef10411adb6d7c6e6708dc821b",
          2678: "8c90c6fc78b20094ace89579808f2f69",
          2858: "99630f6893e6fc0258f4d33e67af3771",
          2864: "b07e7619e8f53b831a1e234192bdbdad",
          3034: "a0dd8dea6a63f72a3ce5576c526632bb",
          3197: "e15e81553097e90431529851e40b51e0",
          3343: "fb055174d29222c73c2905595e45e285",
          3370: "48e60c0036a4ef326e9d00f17ba729c1",
          3421: "440ad51dbd0012585383a7ee02095f3d",
          3438: "ee5fdbe6ac10c82e90ee415442644ccc",
          3475: "1292e8db214ed221acefe861e03e232e",
          3486: "f880d6d8c005e8d73d396f6e2fa66532",
          3697: "a14f0a42df56f7bf4779525344d4629a",
          3885: "6dace634a1ffdc731ff9270a75fb5f5a",
          3896: "75ca633e7db12bb32b535a677d11d7e0",
          3941: "eb91c08f743b19aaa01269b7c4640abd",
          4011: "d492289b96f88600b80ee9b30fb22c13",
          4528: "d8ff856ad03ca9afe818779abf38f629",
          4550: "7d74d45e02e500721ed00617fa66bc45",
          4578: "f8910e3b6195183d8431d915f93ddc3f",
          4621: "e4c48d4686b9a9b6f1666dbeb34dea27",
          4700: "ace770ab4e8676c8a72ce8653a042567",
          4710: "7b4bab4a43460dae45b73a7ce89d74dc",
          4731: "221836426c51da00ce971aca238d557a",
          4799: "4dd83060a9f92ce4f2e8785092000fb5",
          4851: "cf5a63678dcfc0966078ea23717c45e1",
          4861: "bd798b53f35447c5cdb37e4d9804ef24",
          4913: "e68763550e73ece89aa03e74519b5137",
          5018: "d2cb3994932bda8c6815402a6a66c095",
          5076: "dd9e904ef5a512f450daf7e6678282f7",
          5117: "a398dfc4d52337d6cd28a0da722b6e9b",
          5233: "b8bec9784b1e14c19589cbce517b7683",
          5259: "da0fec1012ead49eb08e06f88260f218",
          5265: "b2ba647c5cd07edd3a5eca594537a9a6",
          5389: "f02fb838710d882ce0c6329ebfb53fe9",
          5415: "ec09f2d517062a8a0795b45d11542ab3",
          5530: "c2b376025c6970f5433d2367e9c4f612",
          5559: "eae3b7e966656bec7f605507faf585a8",
          5639: "da4459e75ed5ed8bede797f2717e07b9",
          5663: "53e52f7d4fa6e4accdee20035c23c051",
          5742: "d911fef33818e31cedcd0a68bc0dda1c",
          5802: "67f6096176c7bc8f22fd57a2c150092e",
          5830: "26ccecbaa317a7a49efb4767605ede06",
          5832: "4ef95b1ab02f92cbcee62206b25fb7a3",
          5859: "ba2815572db12d703bd62e50cd52b2ad",
          5912: "a45c3d8c34f45facff3b54477489b18a",
          5997: "af237ad128f89dac6807aafa6ac73c67",
          6019: "33566c60e2fc72171e3cb3aac3b18f06",
          6088: "e4ebbdb008d43ec809b3c29a21ef2245",
          6267: "af3310cfd2738b2193f7863a8ab33873",
          6280: "94a002355dcc3eac36786d5150e5d367",
          6285: "e5fec42c45620ae989654589cc685c17",
          6321: "9abe56ae53cad0814a2127092098bd03",
          6327: "3ba48377404c92412d9c54d43c8a8390",
          6361: "2ea3d51b1caa18499cc9f0f065a0b8e9",
          6471: "ea8f12f9a3c65ec01ba3593a7833fbe8",
          6664: "f1f0e5198bcfbca9b0fefef51cfa6122",
          6703: "5eb8b4b6cf54875538e78decf8b9322a",
          6879: "64c1618cd291af2b779a03af7cb4d014",
          6891: "4f09b9eee1af00794099157e4120e822",
          6997: "ba241a6cb9248dc22e2885a89ba23209",
          7010: "eb117def2a2a252e3c8ecd63fb8acd2b",
          7073: "48615874326509a80b48f9efe50695e9",
          7407: "e607811b4fd768d48c9b00ca4cf29edd",
          7436: "d86de81af1a8fe8d4beed60cc7cde05e",
          7452: "e9e569e8db071130891965fd5a4bf4e4",
          7453: "ad2e7517d927b8c072a5d09c3c9c4240",
          7465: "a043ab9274fad63e45b3482e98c5f096",
          7970: "f2e2e270165370c46c987f9844fbf0fc",
          8068: "d07118ede8e47710e0bbc14365e5a917",
          8240: "4e685a77841ad38f0952f41f9a40bc38",
          8272: "d2d8629e59e7482dd97034f16c255db9",
          8325: "5a736efbc0d42d0a535717ed90d33518",
          8391: "30b43245c59cfe737e05bc25806e5a77",
          8431: "d930f20bada7e87397c2ba18fa8848df",
          8437: "9244cbd9259b1203fe9a63134004af31",
          8659: "8ccb95c69f94b56bfe279d957b7e818e",
          8665: "968ba31ed6e783f7be45dc3e4cde89c7",
          8702: "1aeb2c05625177c3816f7617ad552b42",
          8708: "3942d11eeeac9367492a40a943f43c98",
          8755: "25c0318db7105898b827c8ab3a066b53",
          8845: "00eb73998dce61b5c7b96c15bde162ce",
          8880: "fefb5531468ab1b4e6be0615c6e3251a",
          8938: "9a0b2f81cd65524c29024b9a3c093c6e",
          8970: "a7edb3063f1bf4374e453b56cb43ed32",
          9022: "06edba0b86a839894128e57c2673d211",
          9028: "927dcc87859508590a7e533112c8abb9",
          9126: "1e6135392c9d143c9af971d6fdf2f0e3",
          9171: "b622180863eaf173e5cd8a73c8bc646d",
          9377: "2857fc1165d81ff524cd42f58ad993f0",
          9587: "f3c82130705a85069995ee9549b0b44d",
          9615: "36a8974acf3b23cd9dd694efe9518039",
          9741: "a54d44625c400fb82fd247fc93680fb9",
          9760: "5f2a3aaa4623105ab6dbaf064ef4d468",
          9936: "da1f2d07a570ebc2ca8bfb2324df521a",
          9987: "2428840ce050a062ff45281b2abce327",
          9990: "848f7e3675eb3ee08083b7e8daee8a35"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          275: "059ec94d6d1bd3eaffb6e97955093832",
          1057: "82b8e41eb90eae7db3adfb9fff54d045",
          1785: "e70ba27106c58a2902fdf3deb822d60f",
          2858: "034aa60d21ecc02941abbd0806582044",
          3438: "82b8e41eb90eae7db3adfb9fff54d045",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "abb4435dfd0de0b51cff7620fe1b72ab",
          8665: "62cb6bfb390050db6a71d81fb427a37d",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9736: "8591dc87aae69356ef4710fc935c5ecf"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          275: [31879],
          392: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, ((e, a, t) => e ? f(i.I, r[0], 0, e, c, t) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var f = i.S[t],
                c = "@rockstargames/sites-legacy",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), n("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then((() => () => i(21375))))), n("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(1932), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then((() => () => i(32368))))), n("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(6088), i.e(4550)]).then((() => () => i(32169))))), n("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(4853), i.e(2918), i.e(2323), i.e(1057)]).then((() => () => i(99747))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5076), i.e(2293), i.e(6703), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(8702)]).then((() => () => i(58702))))), n("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), n("focus-trap-react", "10.3.1", (() => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then((() => () => i(51673))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(1840), i.e(2229)]).then((() => () => i(91840))))), n("framer-motion", "10.18.0", (() => Promise.all([i.e(5559), i.e(2229)]).then((() => () => i(65559))))), n("framer-motion", "7.10.3", (() => Promise.all([i.e(5912), i.e(2229)]).then((() => () => i(75912))))), n("graphql", "16.11.0", (() => i.e(601).then((() => () => i(30601))))), n("prop-types", "15.8.1", (() => i.e(7465).then((() => () => i(97465))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), n("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), n("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(6327)]).then((() => () => i(76327))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), n("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), n("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })(((e, t, f, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var b, s = r(t, f, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, f, n, c))
            })),
            c = {},
            n = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(6703), i.e(5997), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(6321)]).then((() => () => i(58702))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(6088), i.e(2169)]).then((() => () => i(32169))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(601).then((() => () => i(30601))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then((() => () => i(99747))))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              90660: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5912).then((() => () => i(75912))))),
              61128: () => f("default", "react-intersection-observer", !1, [1, 9, 16, 0], (() => i.e(8708).then((() => () => i(76327))))),
              61913: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              57145: () => f("default", "prop-types", !1, [1, 15, 8, 1], (() => i.e(7465).then((() => () => i(97465))))),
              2765: () => f("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => i.e(1673).then((() => () => i(51673))))),
              50430: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421))))),
              82849: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(5559).then((() => () => i(65559))))),
              84590: () => f("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => i.e(8665).then((() => () => i(21375))))),
              87330: () => f("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([i.e(9736), i.e(9987)]).then((() => () => i(32368))))),
              87052: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(1840).then((() => () => i(91840)))))
            },
            o = {
              275: [2765, 50430, 82849, 84590, 87330],
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4853: [44853],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              9458: [61128, 61913],
              9623: [9623],
              9736: [87052]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                275: 1,
                1057: 1,
                1785: 1,
                2858: 1,
                3438: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|440|918)|9(458|623|736)|1788|4853|5966|6565|7145)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, n] = t,
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
}));