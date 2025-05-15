! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d771fd1e-386c-48af-b292-f59222448990", e._sentryDebugIdIdentifier = "sentry-dbid-d771fd1e-386c-48af-b292-f59222448990")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
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
        var e, r, f, d, c, o, n = {
            13218: (e, a, t) => {
              (0, t(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            44857: (e, a, t) => {
              t(13218)
            },
            58639: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(3222), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(8)]).then((() => () => t(90008))),
                  "./index": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(5932)]).then((() => () => t(45932))),
                  "./site-routes/Bully": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(7708)]).then((() => () => t(7708))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(884)]).then((() => () => t(20884))),
                  "./tina": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(970), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885)]).then((() => () => t(70885)))
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
            67884: (e, a, t) => {
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
            77600: (e, a, t) => {
              const r = t(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            }
          },
          b = {};

        function s(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = n, s.c = b, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          s.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, s.d(f, d), f
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          8: "80336526988bcb1ee235ecdf64a4ed11",
          131: "a2d465615b80e4ceae5c0594e1a0b20c",
          191: "45507d8e7a83a4c086ee896ab5c4c7c4",
          276: "718681542af3203e65ea91c34bec394a",
          278: "95ba36aa285b0573a4c9a916e9e4fe35",
          299: "3646673db98a1a6f8f8a877dea717f6c",
          308: "c213425040db159fa46f2690557431ed",
          314: "ff72af04ac7ef7de06eebbbc286519bd",
          341: "daeccf0f70a1dbc3e3e89266a404788e",
          621: "f2980e2efb632db3fa50cb925c7b8e74",
          656: "4cf9ea1a7972066662883b764944f19b",
          662: "6ddd155c32a0078b7cd3ecc6785b1350",
          823: "f815f255040536e4ec9112f092aa7777",
          824: "43a57fbf81dec50ae49e3291cdd2b5d6",
          838: "2f6d4880eb746400637a93033936b452",
          861: "f22f56fbb8eb65adc40d2e58124c2b35",
          884: "f5c2b782fa5783c838861ca6d767357e",
          885: "86b6865df03506c6dc7e3894cdf2a126",
          907: "8fc52ddbf6b6dc0ed3764057d36c8226",
          970: "33c46f58e0ae701e77720a32cd5345b9",
          1054: "4252c7a3c0bece496b4739c3ee20c10b",
          1242: "af8790589f018189348dcc0bb8846749",
          1280: "0bbfefe99ca4915e8bc65e649688c2ee",
          1381: "4932c2773331bfeae897dd9e1f6f9911",
          1478: "cd4dcaf9a3d7b0d83f5ab0e5a73bb414",
          1559: "4d5ae0bd74f9bb74fff6a98b08f5e03f",
          1822: "86c94b3fa3109b5627e6ad6e7f87e236",
          1868: "addc6a9f9087e9009708488beddd2a7e",
          2156: "fadda555bd550f6a73eaff47045eedbb",
          2171: "4738f3a1766152e48b1c903f140efa4d",
          2221: "b909f0e89bfbd16ef7e1826f2758c9d5",
          2243: "9388ffa9d564c3465011da83a763dbfc",
          2327: "87a3ad2eb882d5174c5f45d6fe29833a",
          2347: "dcb505e452f4901cf97a4b34f4808811",
          2365: "c4ce2763c5e0d4e0250a1345f1ae453c",
          2398: "b0398a646f4d3791d3a1453ffeadd395",
          2466: "b1047b2998e874d7f64e3bea6a6a50b9",
          2522: "fb85fc9a6bf393342d23c811bedbe61a",
          2572: "e90325e75ff3e7e75a7f0b3793946049",
          2578: "5ca4c9cb598798732f5ec884491bf31a",
          2642: "6b4899e30579c32526f6d62dc4baa5d0",
          2678: "f791a881f2be3d917c664fa6d856a218",
          2722: "0edfb18a164cb4452f95967ff0bee9bc",
          2864: "22d98090dd1d5a7c5fef19fc5e5ed05b",
          3002: "e266e798aaf3f661a986b2ebe28fbfd1",
          3034: "57c16ff69f4378bc116845f6ca5ac079",
          3041: "526435302876a6cf74b3115f0eab2843",
          3197: "6df68d366f1dede9fb8896c2a1167dbe",
          3204: "1a6fc548654d91685f5bc66cb3884e82",
          3218: "0b2bf4a7a81f03ef5421f6321e1ac943",
          3222: "edbe70efdeda2866bf57d878777c1d58",
          3343: "67d7ffbd409160eb46b8426387343eb0",
          3352: "4f5f418619ee9f5aa3ff4485bef1380a",
          3370: "5dacfb8bf99c07cb3e79424864b7c5e6",
          3475: "edcf15b3a0f0b70eda2d23d302748727",
          3486: "c12b1e900ae2c4494b25844ecbb60ea4",
          3586: "0380372c69896e72587f7b499029de09",
          3663: "a4bb4e0285770ef07f730ec9eb0e4cae",
          3672: "3bef691e01f0e86188a739971461aea7",
          3697: "82fe590c6ccd33c84f8c828f5dc95d3a",
          3885: "e4b8d563badc5e137819e1c2e47df5ba",
          3940: "e7bbf54cd834e70ee8548c680929611e",
          3941: "7e5302edbfd237f4f3a3f6b786c2ba74",
          4011: "525779815e223915b226f4d8ae79b222",
          4105: "8d8831e5141f8e6d1c55d65276b5f957",
          4153: "c266f75238d80a32615a08de695999b1",
          4309: "2e5a30bc7d5d00178c6d50970906a176",
          4480: "c6417cb8380cfde5eeef938042044ccc",
          4528: "34d666db041069002e2b7990dc417160",
          4546: "4cb4292abe1061d9ed62821f37110afb",
          4621: "6926b74a691420e11d65ed94c9c7d714",
          4672: "9a4d6d2448cb05a7f5b9af5fbaba3560",
          4684: "a3abe411e6c083a842e76eb2abfd337e",
          4700: "484c322a0e54a47b408ca85ce0a2f391",
          4710: "9649ff4eefb81ff102b52169f091e47e",
          4731: "6a204c7b0b41bf71a7fc18a5d4c7353b",
          4799: "62eb406b89a3727b5819aac57b0fded2",
          4851: "eb20da463c6d8e2a87022f4af1b62d04",
          4861: "ae138a9a94fcdf7cb1752dd778b4bdab",
          4913: "4a563c8ee587fe978c929c1bc4730b27",
          4981: "0acd99fbafd7e19ea452ee0d3620df91",
          5018: "e41278bd7f1f7f52ad19f46499dd61db",
          5233: "1190ac6109f5a790e4c8484f08447ab4",
          5259: "6f4ac51c4f318f92e0c8a2971859e0e0",
          5422: "0cd590288e0f75974bb38aca2af6ddb0",
          5530: "5295199134461e8fcf06b038df14c0c8",
          5639: "f16211e902cc9654cf6c50b09c47d710",
          5663: "48a8b364c2bd99621b48b0077f8094fe",
          5666: "ebc16b7275f1a81b3018a1e90d8e63d6",
          5734: "374631debee659cd9ce8a8bcc599bacb",
          5742: "d0b668df94b9b141a10178a5523c0642",
          5830: "dc14ae50442c63e8077f0c312e4a5bac",
          5832: "e012d613185d7c937a9638f094d40260",
          5854: "74dd7e7f283cdecad5b290671e1864df",
          5932: "8759edfc496486de3d7f3395322e05ab",
          6186: "42a4e0e98ba3fbc46f97f0fde1dce7c2",
          6267: "09e4d4f892a7ab3d6d55c2d77193bce5",
          6280: "f1fb1627b1705a3673f883a3b314fced",
          6285: "cb77737c0f78c9d81616ad8c859d7184",
          6361: "b285d609966576a9e66a45933266b0a2",
          6664: "124b13cb0735716bee9f3c2feb831ea8",
          6719: "899af16a729f0f4e93f823047c190307",
          6879: "0a6b14448e9c164baa981e963135ca86",
          6891: "f26328071e7cf588c9d3a44e6f7d41ef",
          6997: "4002a827f1c691ecdf4dd121ab6dfd18",
          7002: "8fbb18726670b1382ecdcdd922a3c161",
          7010: "0a16c77064b19a694670eaa01715602e",
          7073: "8675595a770df71926f2f38f05c1e9d6",
          7353: "af1af5f53cb2a72e77f47806984731fb",
          7436: "aafad8882c95ec5e2e8cb8324c54ce2d",
          7452: "a97b02507a4cdcf1c86ff187b7ab3c8c",
          7453: "ccb15b41011f594e723fde8d23fc2e44",
          7485: "c67dbfcd50a801cec2df51ca24816580",
          7708: "c635617884618015a43b6197f4efcd75",
          7709: "d83b6d6f9012430fc6a91df8da848c14",
          7727: "281069ec34af489fbd5f58b9a279b8ee",
          7893: "bc660c5c0a40f6735e971a75cf2117b7",
          7895: "bede386d235af99118b42bf0e9238389",
          7902: "8659b32bea4207cf9e136bc55bd10523",
          7970: "5cb366261bbb4f063cd5ded1d4c0ef8e",
          8272: "14f987bcc36104cbcb4d4e005f4c5651",
          8275: "78341c26fba22026492246516f755249",
          8391: "042eb0abbbf47cfa64daf5a804a5679b",
          8457: "3bc9012abb9b7cf10fa8252585765a7b",
          8557: "3ffff6fa6550d1091e2273333d376bb7",
          8654: "b0039014811b7e3ae664788a8a97a1c0",
          8755: "417720320568ea4f647967a98e1f5fb5",
          8880: "1fd1591468c703d6222e82f98c91c789",
          8970: "90740b9cfcf3d5566e21602f897becd7",
          9022: "3e92a6b126570bfc4fcbf8814c646cd7",
          9028: "cbd16ffe81bbac4e50d6f3a078adae8d",
          9126: "37b596412b861d64205ed31913d22c09",
          9377: "734c4be0d8cbe8216490bea1d7cf76be",
          9583: "57a9892b97bad454ef747a20a521cf83",
          9615: "c56456203faf69b9da9e690b010771fd",
          9936: "a1ec9bc6baf13dd55071de268afd6ba4",
          9990: "352c4fad3339359af0db703cf06a01ed"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          8: "1eac0d948be569c136035d072b953ab4",
          341: "82b8e41eb90eae7db3adfb9fff54d045",
          884: "52e55b769351b6e3f1602fe5d2baacd1",
          970: "1b2f72b09166cbba066de21e7a7b33e7",
          2722: "82b8e41eb90eae7db3adfb9fff54d045",
          3352: "89c7274604affd25ef392c3f9a9375d6",
          4672: "e70ba27106c58a2902fdf3deb822d60f",
          5666: "62cb6bfb390050db6a71d81fb427a37d",
          7708: "52e55b769351b6e3f1602fe5d2baacd1",
          9599: "8591dc87aae69356ef4710fc935c5ecf"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", s.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var i = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          885: [17523],
          3352: [31879]
        }, o = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(c, e) && c[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, o, n) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, c, n);
                    var s = b.then((e => o(e, c)), f);
                    if (!n) return s;
                    a.push(r.p = s)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(s, r[2], 0, 0, ((e, a, t) => e ? d(s.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var d = s.S[t],
                c = "@rockstargames/sites-legacy",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(3218), s.e(2229), s.e(838)]).then((() => () => s(35671))))), o("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([s.e(2229), s.e(9623), s.e(5966), s.e(4281), s.e(2440), s.e(7002), s.e(4672)]).then((() => () => s(67662))))), o("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([s.e(2327), s.e(2229), s.e(4281), s.e(2440), s.e(8619), s.e(9599), s.e(1559)]).then((() => () => s(21559))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([s.e(4981), s.e(6719), s.e(7709), s.e(2229), s.e(9623), s.e(5966), s.e(4309), s.e(7895)]).then((() => () => s(57895))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(4981), s.e(6186), s.e(2229), s.e(5966), s.e(4281), s.e(861), s.e(341)]).then((() => () => s(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(4981), s.e(6719), s.e(2229), s.e(9623), s.e(4309), s.e(5854)]).then((() => () => s(55247))))), o("focus-trap-react", "10.3.1", (() => Promise.all([s.e(7902), s.e(2229), s.e(7145)]).then((() => () => s(7902))))), o("framer-motion", "10.18.0", (() => Promise.all([s.e(308), s.e(2229)]).then((() => () => s(50308))))), o("framer-motion", "10.18.0", (() => Promise.all([s.e(3204), s.e(2229)]).then((() => () => s(70823))))), o("framer-motion", "7.10.3", (() => Promise.all([s.e(7485), s.e(2229)]).then((() => () => s(17485))))), o("graphql", "16.11.0", (() => s.e(4546).then((() => () => s(24546))))), o("prop-types", "15.8.1", (() => s.e(1478).then((() => () => s(61478))))), o("react-dom", "18.3.1", (() => Promise.all([s.e(3663), s.e(2229)]).then((() => () => s(53663))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(5422)]).then((() => () => s(65422))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(8275)]).then((() => () => s(78275))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(621)]).then((() => () => s(90621))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([s.e(2229), s.e(191)]).then((() => () => s(40191))))), o("react-router-dom", "6.30.0", (() => Promise.all([s.e(4105), s.e(2229), s.e(3271)]).then((() => () => s(94105))))), o("react", "18.2.0", (() => s.e(2522).then((() => () => s(42522))))), o("react", "18.3.1", (() => s.e(8654).then((() => () => s(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = s(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(s.S[t], r);
                  if (a.then) return n.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return n.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), n.length ? e[t] = Promise.all(n).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(o = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, o);
                return r
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var o = e[d];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : a(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, s, l = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= r.length || "o" == (s = (typeof(b = r[c]))[0])) return !n || ("u" == l ? o > f && !d : "" == l != d);
                  if ("u" == s) {
                    if (!n || "u" != l) return !1
                  } else if (n)
                    if (l == s)
                      if (o <= f) {
                        if (b != a[o]) return !1
                      } else {
                        if (d ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (d || o <= f) return !1;
                    n = !1, o--
                  } else {
                    if (o <= f || s < l != d) return !1;
                    n = !1
                  } else "s" != l && "n" != l && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
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
                    o = (typeof c)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            f = e => {
              throw new Error(e)
            },
            d = (e => function(a, t, r, f, d) {
              var c = s.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, s.S[a], t, !1, f, d)) : e(a, s.S[a], t, r, f, d)
            })(((e, t, d, c, o, n) => {
              if (!((e, a) => e && s.o(e, a))(t, d)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, n);
              var b, l = r(t, d, o, c);
              return l ? ((b = l).loaded = 1, b.get()) : n ? n() : void f(((e, t, r, f, d) => {
                var c = e[r];
                return "No satisfying version (" + a(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, d, o, c))
            })),
            c = {},
            o = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], (() => s.e(8654).then((() => () => s(98654))))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([s.e(4105), s.e(3271)]).then((() => () => s(94105))))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6719), s.e(9623), s.e(4309)]).then((() => () => s(55247))))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], (() => s.e(4546).then((() => () => s(24546))))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6719), s.e(7709), s.e(9623), s.e(5966), s.e(4309), s.e(276)]).then((() => () => s(57895))))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(3218), s.e(8457)]).then((() => () => s(35671))))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3663).then((() => () => s(53663))))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([s.e(4981), s.e(6186), s.e(5966), s.e(861), s.e(2722)]).then((() => () => s(63516))))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(7485).then((() => () => s(17485))))),
              55799: () => d("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => s.e(2572).then((() => () => s(40191))))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], (() => s.e(2522).then((() => () => s(42522))))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], (() => s.e(1478).then((() => () => s(61478))))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => s.e(7902).then((() => () => s(7902))))),
              33804: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3041).then((() => () => s(65422))))),
              34977: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(656).then((() => () => s(78275))))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(3204).then((() => () => s(70823))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => s.e(5666).then((() => () => s(67662))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([s.e(9599), s.e(3940)]).then((() => () => s(21559))))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], (() => s.e(308).then((() => () => s(50308))))),
              23271: () => d("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3002).then((() => () => s(90621)))))
            },
            n = {
              861: [44853],
              2229: [62229],
              2440: [92440],
              3271: [23271],
              3352: [2765, 33804, 34977, 82849, 84590, 87330],
              4281: [2918, 81788],
              4309: [16565],
              5966: [95966],
              7002: [90660],
              7145: [57145],
              8619: [55799, 61913],
              9599: [87052],
              9623: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(n, e) && n[e].forEach((e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var f = o[e]();
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
            s.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                8: 1,
                341: 1,
                884: 1,
                970: 1,
                2722: 1,
                3352: 1,
                4672: 1,
                5666: 1,
                7708: 1,
                9599: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = s.miniCssF(e),
                  f = s.p + r;
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
                  d.rel = "stylesheet", d.type = "text/css", s.nc && (d.nonce = s.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, d.parentNode && d.parentNode.removeChild(d), f(n)
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
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^((222|861|959)9|2440|3271|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = s.p + s.u(a),
                c = new Error;
              s.l(d, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
                o = t[2],
                n = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                o && o(s)
              }
              for (a && a(t); n < d.length; n++) f = d[n], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(44857), s(58639)
      })())
    }
  }
}));