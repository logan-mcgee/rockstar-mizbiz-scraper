try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "464253ee-6492-4374-94fc-617ee208f080", e._sentryDebugIdIdentifier = "sentry-dbid-464253ee-6492-4374-94fc-617ee208f080")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
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
        var e, r, f, d, c, b, o = {
            9944: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            21998: (e, a, t) => {
              (0, t(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            37389: (e, a, t) => {
              t(21998)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(9489), t.e(2519), t.e(2209), t.e(8673), t.e(2573), t.e(6806), t.e(2229), t.e(9623), t.e(5966), t.e(1045), t.e(4853), t.e(4281), t.e(7964), t.e(2440), t.e(6905), t.e(8619), t.e(7145), t.e(4665), t.e(6426)]).then((() => () => t(66426))),
                  "./index": () => Promise.all([t.e(9489), t.e(2519), t.e(2209), t.e(8673), t.e(2573), t.e(2229), t.e(9623), t.e(5966), t.e(1045), t.e(4853), t.e(4281), t.e(7964), t.e(2440), t.e(6905), t.e(8619), t.e(7145), t.e(4665), t.e(8333)]).then((() => () => t(88333))),
                  "./site-routes/Bully": () => Promise.all([t.e(9489), t.e(2519), t.e(2209), t.e(8673), t.e(2573), t.e(2229), t.e(9623), t.e(5966), t.e(1045), t.e(4853), t.e(4281), t.e(7964), t.e(2440), t.e(6905), t.e(8619), t.e(7145), t.e(4665), t.e(2700), t.e(8019)]).then((() => () => t(8019))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(9489), t.e(2519), t.e(2209), t.e(8673), t.e(2573), t.e(2229), t.e(9623), t.e(5966), t.e(1045), t.e(4853), t.e(4281), t.e(7964), t.e(2440), t.e(6905), t.e(8619), t.e(7145), t.e(4665), t.e(2700), t.e(8995)]).then((() => () => t(78995))),
                  "./tina": () => Promise.all([t.e(9489), t.e(2519), t.e(2209), t.e(8673), t.e(2573), t.e(2229), t.e(9623), t.e(5966), t.e(1045), t.e(4853), t.e(4281), t.e(7964), t.e(2440), t.e(6905), t.e(8619), t.e(7145), t.e(4665), t.e(2700)]).then((() => () => t(2700)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            82788: (e, a, t) => {
              const r = t(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var t = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
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
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          114: "f70f88450450a5bb2bafa0bd6b1d5ea5",
          131: "794494c20a6a44812692fbdece47e286",
          278: "b723b10ace906a4483d3c2fd267f8dda",
          299: "abe5b1e5a3635e24fc6a74209a8b2946",
          314: "26de2a290785b187da313f06af793a8f",
          377: "878d066add7cc7a9af503c838fa1bec0",
          456: "18aae7e64b6e0a65ef6ffc4b35a953e5",
          614: "37c5fbd78e7c3cd1478c04c0cca819f4",
          662: "98309ac7780665a4832eefb5b4cad958",
          824: "438fed1c2ab7bc53bbba17686830bd51",
          844: "2d140ac4f3edf2566799d4192bb6d8ff",
          888: "ae09b80df0fe072a38e811663f738212",
          907: "f3554a0d70b89858c54cba0d15964fd2",
          954: "c3cdc1bd698981130ff2bddf4cf37ba9",
          969: "1b0f82fa38260dd70d78327cd059d09e",
          1045: "f3a19044b0065972b059c577658773ba",
          1054: "323022f88462152ed4d0aee26d39b5af",
          1138: "0dbce1f34e1dc539cedc0526cc9cf64d",
          1242: "2bbe6dc97d700487705a5dee10fb929f",
          1503: "b0a8dc2392346fee149640afdbef38dc",
          1594: "8ad3217676d2b36d4a5ed58bd5f6f528",
          1607: "ac6a75401cc63712c4ca18a94a4f1180",
          1822: "7c4972e8d64c85da8972572938b1a217",
          1868: "a3a59037b04601088e05f08d5b99c816",
          2014: "263e3d3e47824bffce4128dd4687a15c",
          2156: "0cfbc21d6487680ed0dcf7e2605ed62b",
          2171: "1a075d56b116a2cdd04158b37ce9ffc9",
          2209: "e94019a4d78edb3ccdc06568c665d094",
          2221: "6e0a924703b11e850a6ff11441f4e17f",
          2243: "2cbf8b39df87bb53a10d3d36c6dd5ceb",
          2315: "8c09278379f3f2f1d5aad007c232a9d8",
          2347: "93e24083ed813374549d06c829425f05",
          2365: "1a681b8fa21050ae2eda08b92af3ba22",
          2398: "40b40fe5cc7b66234fec6b457863072f",
          2466: "7daaa928313a3d4f5d903168066f12e2",
          2519: "684f6e882655997ff740efaec4adf671",
          2573: "fba7591c1aca417d44b30838178bb586",
          2642: "22bd3a94054a35829de87e200a90801d",
          2678: "72d984041df783f37473ce5d0266a595",
          2700: "9e49b790d7af095ed05490bdd5b67366",
          2864: "c1e99f065155fcedc1d78147e9e97c0c",
          2941: "ff8ef8a66c197acd3e580ca7e0e8bc10",
          3034: "6d2030edfa2fb066394e2a90f2d743d1",
          3197: "44c602051fda97ed66788c3cc4734640",
          3343: "415dc1928f8665d3a8591512f50aa6b0",
          3370: "9ab794b8a005e707d0dd104f982d1805",
          3475: "5452c8297c5977b9d205f74b7ef5879a",
          3486: "dd57cbdde7b4639301779f9942b8cbef",
          3622: "18e0534f48b607e24c083ce6ccca543a",
          3697: "f48b14871ea3c9c89d9ebd89c94291e8",
          3851: "982ceb54e060c69298a64b850fd2bb63",
          3884: "eea09242722406d6d9f4aade554c9e65",
          3885: "b1cbde3fef192256dfbcc6ea40dfb07a",
          3941: "9cc75719f4c410ea78d25e97db05f2eb",
          3963: "a8b96e62ef3a8bdfd5ed560eaf3993e0",
          4011: "21e5722957b151a2939c9b55920369c5",
          4186: "e091a21589129684aa63e546fd1a6e3f",
          4220: "2339773e673155fc4a15bc60289ff331",
          4375: "349cc7d3305c5df56423513feb647edb",
          4528: "e09590f2d8eff3cc7bf4abcc98855a6f",
          4621: "b84718d586b01f163dd35d72a60b8baa",
          4665: "3b0a6c90d39b3fcb50ff2a6612ea0ee0",
          4700: "00f058cbbf38765ed4051393f812c74a",
          4710: "59caabd59d39e2e7d0bb08869ddf29a6",
          4731: "3f4d76d4d511ad14fabace6d283308a5",
          4799: "51c94f07bd88d6a32ad43c8e734d48a6",
          4851: "21877f1800fc9faebbf7e5d1494f1e88",
          4861: "f53c5819ef59ca2b8ac87b35dc3b3f11",
          4913: "4b11f24636346a0340052aa71a3c8fb6",
          5018: "fbbdd5b2a1790a9f5be2a16f9564d309",
          5233: "77ba028b06065425c536505db05b5faa",
          5247: "f32a8b2e06d3b3ca489b889fd6469f51",
          5259: "876f457984ed98071899ef2754de79c7",
          5440: "790a4a07147e003fddded8492d7a6319",
          5530: "b1532f5cfa704e68774b32a6c3bc6cbb",
          5639: "32337f17e64b269c8044028dbe315387",
          5663: "8399345be6cf98030ff61725638520a4",
          5742: "4fb65420af0f8bd5b455a4137eece66f",
          5830: "801a04bce81b0e437b2f8c988e9c253f",
          5832: "878ef9e64b42cb56af3dccfcc02b673d",
          6019: "7c445efcac6448424f9a364f1cbe38a8",
          6204: "8d8acaf5ad0f14002b3471c4bbfd3ea8",
          6267: "b56ec8f333137e59ac0f2f424f548b90",
          6280: "63fe45eb23aebf0d9e264004c6b9d380",
          6285: "1ee12e7ddb7426b83fe84e3775e468cb",
          6361: "684e910885d2a3520d6cad6ec7f55a75",
          6426: "6232c31ad5c7c61b378815942025c710",
          6664: "1089297f726cca0737f5d501244ef1af",
          6756: "2a29edd7fbf1f289655d47777c968abf",
          6806: "0e788d2a6a354cdb5f6ef21fc1137b91",
          6871: "fc86fe662c8a873d6fba92c8fd828b2c",
          6879: "303606c7b7fc4a00185a5b302d577ce6",
          6891: "0950fb3f1002d658ca56839fdcbd8673",
          6905: "451387bc759605038a89a8a7aa0d50c4",
          6940: "2bc94caf25c5d9701b5a7f16bb073020",
          6997: "81b3d94b1409d3b6807a89d72bc34d00",
          7010: "ba10b801cbb81524f99d063e67bb2ea2",
          7039: "672fc584dd23898f2bb689045cc7658e",
          7073: "590e8b92312af48aaca77760c9dcfe2a",
          7436: "9b7e89f302c35fa7f4652c740c449f00",
          7452: "f62bf45c815aba8df449b7877718453c",
          7453: "c7563de752f0df75a47b78d21b81f8cd",
          7964: "c5ba544a045c31fffa5070cca13eca53",
          7970: "5c92109dee47da34ae010245827a0c22",
          8019: "c77d2673f1551ec5035144d1fe90cb53",
          8272: "2025560bc5b63efb6a7d03c412660072",
          8333: "167cf99416ebf540e12393533c79e53f",
          8389: "2f0529a9633a65b768065f2a902034fd",
          8391: "b2705f22e7aae7ff54ea58993d88f13d",
          8463: "7f4013a7c0de85c8e1a76b1fc5fd8053",
          8626: "1f426a97b7638f4f4268fb19881b75af",
          8673: "5756c9d9a299043fe49cb2eabf966622",
          8755: "d3df0238923ce68b1072b24f4a37df5c",
          8880: "0e51e2218a814ef24bf0399bca297532",
          8890: "45a8a8a048ed77c2388204900bd5d4de",
          8970: "8d7ff96cee2c815401de8f8451cc6a98",
          8995: "846341bd83cb7c0d3267dc8fae1a7824",
          9022: "607f9db3865283748bfc551bff6a3d2c",
          9028: "bce368d7bf63230da385c65811ec20a5",
          9126: "a9269da36b38f71a58f3efb8a40fcbf3",
          9213: "f712b14e6674a6d90906c1fb0ff5967e",
          9252: "9616fbbe27f0e59fd6fe9150fe4503ed",
          9368: "c231f6fd546e1ef775237908f375728a",
          9377: "ea759f1b17d365320a5ec0ec176a7a45",
          9474: "1afad72665c5c96385bca635cf99fb9b",
          9489: "21369cfe5c518785f8e474fcb8d623fc",
          9615: "d651f23cef79a2d6db284ef41ec33632",
          9633: "126946ba23169d7fa30acf9a27f51e93",
          9642: "46e873956d5b93a1419be3386834c417",
          9728: "193dc9e1473187d8571e9453a7887d28",
          9765: "85670a31bc1b31a45bd868f72b600ece",
          9936: "e5ace5a9f8dc251c28cfb68311807949",
          9990: "01c4b83044ea2986cc9a2d541bed622a"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1594: "82b8e41eb90eae7db3adfb9fff54d045",
          2573: "65b109dad297cc04e6560ab7a5804ac7",
          4665: "b4479c48b7dd4a387041e40e6f873679",
          6426: "1eac0d948be569c136035d072b953ab4",
          6444: "8591dc87aae69356ef4710fc935c5ecf",
          8019: "52e55b769351b6e3f1602fe5d2baacd1",
          8389: "e70ba27106c58a2902fdf3deb822d60f",
          8995: "52e55b769351b6e3f1602fe5d2baacd1",
          9213: "82b8e41eb90eae7db3adfb9fff54d045",
          9765: "62cb6bfb390050db6a71d81fb427a37d"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, b;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), b && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          2700: [17523],
          4665: [31879]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = b[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, b, o) => {
                  try {
                    var n = e(t, d);
                    if (!n || !n.then) return b(n, c, o);
                    var i = n.then((e => b(e, c)), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, ((e, a, t) => e ? d(i.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                c = "@rockstargames/sites-legacy",
                b = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!r != !b.eager ? r : c > b.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2315), i.e(2229), i.e(1503)]).then((() => () => i(58718))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(6905), i.e(8389)]).then((() => () => i(58875))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(8673), i.e(2229), i.e(4281), i.e(2440), i.e(8619), i.e(6444), i.e(9633)]).then((() => () => i(99633))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(9489), i.e(2519), i.e(6204), i.e(2229), i.e(9623), i.e(5966), i.e(1045), i.e(9252)]).then((() => () => i(66871))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(9489), i.e(2209), i.e(2229), i.e(5966), i.e(4853), i.e(4281), i.e(7964), i.e(1594)]).then((() => () => i(66618))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(9489), i.e(2519), i.e(2229), i.e(9623), i.e(1045), i.e(954)]).then((() => () => i(50101))))), b("focus-trap-react", "10.3.1", (() => Promise.all([i.e(8890), i.e(2229), i.e(7145)]).then((() => () => i(28890))))), b("framer-motion", "10.18.0", (() => Promise.all([i.e(456), i.e(2229)]).then((() => () => i(60456))))), b("framer-motion", "10.18.0", (() => Promise.all([i.e(3851), i.e(2229)]).then((() => () => i(93851))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(3963), i.e(2229)]).then((() => () => i(53963))))), b("graphql", "16.11.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(8626).then((() => () => i(18626))))), b("react-dom", "18.3.1", (() => Promise.all([i.e(6019), i.e(2229)]).then((() => () => i(66019))))), b("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(6756)]).then((() => () => i(96756))))), b("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(844)]).then((() => () => i(40844))))), b("react-router-dom", "6.30.0", (() => Promise.all([i.e(9728), i.e(2229), i.e(4853)]).then((() => () => i(49728))))), b("react", "18.2.0", (() => i.e(614).then((() => () => i(20614))))), b("react", "18.3.1", (() => i.e(1138).then((() => () => i(11138))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return o.push(d.catch(e))
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
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(b = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, b);
                return r
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var b = e[d];
                c.push(0 === b ? "not(" + o() + ")" : 1 === b ? "(" + o() + " || " + o() + ")" : 2 === b ? c.pop() + " " + c.pop() : a(b))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, b = 1, o = !0;; b++, c++) {
                  var n, i, s = b < a.length ? (typeof a[b])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(n = r[c]))[0])) return !o || ("u" == s ? b > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= f) {
                        if (n != a[b]) return !1
                      } else {
                        if (d ? n > a[b] : n < a[b]) return !1;
                        n != a[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
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
            r = (a, r, f, d) => {
              var c = d ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    b = (typeof c)[0];
                  if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, t, r, f, d) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, f, d)) : e(a, i.S[a], t, r, f, d)
            })(((e, t, d, c, b, o) => {
              if (!((e, a) => e && i.o(e, a))(t, d)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, o);
              var n, s = r(t, d, b, c);
              return s ? ((n = s).loaded = 1, n.get()) : o ? o() : void f(((e, t, r, f, d) => {
                var c = e[r];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, d, b, c))
            })),
            c = {},
            b = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], (() => i.e(1138).then((() => () => i(11138))))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(9728), i.e(4853)]).then((() => () => i(49728))))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(9489), i.e(2519), i.e(9623), i.e(1045)]).then((() => () => i(50101))))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(5440).then((() => () => i(55440))))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(6019).then((() => () => i(66019))))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(9489), i.e(2519), i.e(6204), i.e(9623), i.e(5966), i.e(1045), i.e(6871)]).then((() => () => i(66871))))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(2315), i.e(3884)]).then((() => () => i(58718))))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(9489), i.e(2209), i.e(5966), i.e(4853), i.e(7964), i.e(9213)]).then((() => () => i(66618))))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(3963).then((() => () => i(53963))))),
              55799: () => d("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => i.e(8463).then((() => () => i(40844))))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], (() => i.e(614).then((() => () => i(20614))))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], (() => i.e(8626).then((() => () => i(18626))))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => i.e(8890).then((() => () => i(28890))))),
              50430: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(4375).then((() => () => i(96756))))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(3851).then((() => () => i(93851))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => i.e(9765).then((() => () => i(58875))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([i.e(6444), i.e(2014)]).then((() => () => i(99633))))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(456).then((() => () => i(60456)))))
            },
            o = {
              1045: [16565],
              2229: [62229],
              2440: [92440],
              4281: [2918, 81788],
              4665: [2765, 50430, 82849, 84590, 87330],
              4853: [44853],
              5966: [95966],
              6444: [87052],
              6905: [90660],
              7145: [57145],
              8619: [55799, 61913],
              9623: [9623]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!n[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = b[e]();
                  f.then ? a.push(c[e] = f.then(t).catch(r)) : t(f)
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
                1594: 1,
                2573: 1,
                4665: 1,
                6426: 1,
                6444: 1,
                8019: 1,
                8389: 1,
                8995: 1,
                9213: 1,
                9765: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((f = (c = d[r]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        b = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = b, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
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
              else if (/^(2229|2440|4281|4853|5966|6444|7145|8619|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                b = t[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                b && b(i)
              }
              for (a && a(t); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(37389), i(58639)
      })())
    }
  }
}));