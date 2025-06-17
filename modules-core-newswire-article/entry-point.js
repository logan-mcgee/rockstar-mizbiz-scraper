! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d2c465e9-aadb-4fea-a9ef-1e5444614e41", e._sentryDebugIdIdentifier = "sentry-dbid-d2c465e9-aadb-4fea-a9ef-1e5444614e41")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var d = {},
    t = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, c, f, o, n, b = {
            13218: (e, a, d) => {
              (0, d(77600).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            44857: (e, a, d) => {
              d(13218)
            },
            55974: (e, a, d) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(5670)]).then((() => () => d(16462))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(6186), d.e(5182), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(839), d.e(820), d.e(1692)]).then((() => () => d(31692))),
                  "./types": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(5670)]).then((() => () => d(90883)))
                },
                r = (e, a) => (d.R = a, a = d.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var t = "default",
                      r = d.S[t];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[t] = e, d.I(t, a)
                  }
                };
              d.d(a, {
                get: () => r,
                init: () => c
              })
            },
            67884: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var t = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, r = 0, c = t.length; r !== a && c >= 0;) "/" === t[--c] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            77600: (e, a, d) => {
              const t = d(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = t(d.y.meta.url, e)
              }
            }
          },
          l = {};

        function s(e) {
          var a = l[e];
          if (void 0 !== a) return a.exports;
          var d = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, s), d.loaded = !0, d.exports
        }
        return s.m = b, s.c = l, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          s.r(t);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, s.d(t, c), t
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "4dfaf1e8c352579ed02da9c057dd93ca",
          278: "14d9bc3bcb19f26be536d08ad9171972",
          299: "0ad561896b2a0a259d44ef74101ada82",
          314: "e7fc88fb7aca8273bded248bf368efcf",
          621: "b69a620a6e5664c9bac98d50b08a4810",
          656: "176896bfde6248b8c2a8ea0aa5b7a745",
          662: "af8746c8df2e4f4500113186613b5101",
          803: "d1570e3d483fe367ea508e930521f099",
          820: "070fd7568fc093770404ec2ac48d6ccd",
          823: "bdefdca1ffc521d2e7b2bf7e89237828",
          824: "03d22589277c050d666b53a55a12d1a0",
          838: "281b2753c50a2bd1a01d39a7b9f27a5a",
          907: "ce1682a3059142abe0945f0ed44f35e2",
          1054: "7079ad3f5d2cfb541589366d9abd9a21",
          1242: "9da377ab8965d6bd67f43f0462c8924f",
          1250: "21a04aed148ed7faefe9caad947026c5",
          1280: "e6f4d28e51f84050da405453b706beda",
          1281: "552e65b526c80b17d8c97535c542f1fc",
          1381: "47723c5ec51a2b8aa05bb9103feae218",
          1692: "e45905392c42d5e8fab852669e0203d8",
          1822: "83887d05497d22158a797cbe6565fa7f",
          1868: "ca76840eed9c1eae972383f409f2c417",
          1888: "6bccb41e3374f27e9e02d1db190cc4c5",
          2066: "b3fc5a9798a43b413e5e479a2fe1b2c1",
          2156: "362fc09e39ffcc99cea7ef646ca6bbe7",
          2171: "9939fa42fa0ac5f3ddfa75fb3875467c",
          2221: "f129caed862165c1a42e91cedbb2f854",
          2243: "c1b498b5ff186b2737b17da413e06c20",
          2347: "438e4622c7e07c7d62e8f408109b8c20",
          2365: "7a19fbd7966235b6e16fc3ff1113e92d",
          2398: "948e64de109860ea8ae1d5bec84b92ae",
          2466: "d0b0c2d3241d69a505d79c7d35a529df",
          2522: "92826e2fd07b680af23a4a069f911cff",
          2578: "38ecdc24cf83affe941410132e41fae3",
          2642: "5b61c61f6f79c60e9c8b1874410bf7ee",
          2678: "ea5f79e6ce895143daf5bdba624c5283",
          2864: "09eb4febd9800a394e65b42eecf013d4",
          2909: "12537330cf35063eef286d206cd9d836",
          3002: "babab3de0b926488d2f541b662e56348",
          3034: "ca04d5315e493bd7fe1882beda55a757",
          3041: "cab5046296d5acfc93846d0c503040f9",
          3197: "cf4f7c6daeaf8b1fca29982452db0b40",
          3218: "c7d30c403d6fe0dbf81ab94eb2ca8f73",
          3343: "cc04d5c63963973ef47732b6bbd1163f",
          3370: "f82afa98c8e01930e40be70ee0a6e382",
          3461: "55f20d800bc2b5b97cb30baa80bc3d94",
          3475: "251b589a133738ae9d42c46529bc9646",
          3486: "1adb324903875a06a57395cbfd3bd328",
          3516: "e0e78c58bfbf3d3cee04501ff88ee02c",
          3586: "e5a5671bf895c6ff2926b3493cdc0daa",
          3663: "047fcb4509e4432673036e2cba3de690",
          3672: "df4964982f86592409b5c2dbe302c10a",
          3697: "4d15c50333991c077c2a34dda3e7c31d",
          3830: "b5c50d2d48778bbc92ecaaafa8b985e8",
          3885: "3e82142e89b3a02c4df1bbc4a0447659",
          3941: "f950a112f7ab24859c1d1a1c6afae843",
          4011: "8ea6dfb1db954636ebb050bf29fbebbc",
          4105: "a9dc5c3b4d6f0831dded4a79a5771b6f",
          4153: "6bc75ef657b17b421ced31dc6ee10967",
          4480: "b552e25e903d13c024c79a2d8dc9364d",
          4528: "f3a1b2cee6d43fa09801e5a06af88bfe",
          4571: "aa4cba035f9ce1177dac242e63b8a543",
          4621: "8c80f155349965bf1e8576c5dafafde6",
          4684: "d9df21b76e73d9673533de2c9d2d5967",
          4700: "59f748b3d2a4d35713f99b5af7706897",
          4710: "84f50dc09a80391dbaa4ab250b06d0f3",
          4721: "1385bb57bee2d127c04aa46fcafd1edd",
          4731: "68a486359968367f6e47a751abd05f1a",
          4799: "9f6ac5fb990c7c53570a56ef6c9160fe",
          4851: "04ed019759e1d429f90c40f4c92e3247",
          4861: "542e25851da7451cd6503eeb1b691791",
          4913: "effe4afac0f1440a77fa5b88df12f89b",
          4981: "3bda9041ae130a8f3321001e65d9d5b9",
          5e3: "bcc47804d670988db375055449993f8d",
          5018: "94e71a31ba1732b8f273b11d3bb92eb0",
          5182: "90dfd21754fc79a37f4f1f438dd24bbb",
          5232: "3713d9fa5377c1cb34f9920cb7649c8d",
          5233: "390fa33aad419ef144c40070af0da0ce",
          5259: "75267b562d06478691c720106fcd9924",
          5422: "412c6dcde6901c723a53d3f83c65c7d4",
          5530: "772a70d737d7b0f3cf75ac038bd65551",
          5639: "421335f6853c104dcf2ab4c99c42ab37",
          5663: "e08bc98cf8e83c183094ec071f9b712d",
          5670: "50e4ba7bbac229a1219c61fbc6f15b38",
          5734: "64273466371ee51e849c6e54c1d9e952",
          5742: "284bb1670a7e778b6e8cfda55299db7c",
          5830: "c365593c590c88aa6a1cca35bd562e6c",
          5832: "aefd57b1b3a3cffc7f49600665ba60ab",
          5854: "30009f4267f2bf371f4d5eb1819b16a6",
          6083: "6a2d11da5961c7cc00c5202adfdf9b91",
          6186: "65eb4f5b2f6c4b8d85d174ae83c94281",
          6207: "e339a1ec767901b6477fc7742f5e92fc",
          6267: "73f7ad447ecfaafffcc4ddbb722d605a",
          6280: "111b26374144bcf6326954ba9139263c",
          6285: "913dc84da99bb2de0c744ef6130d4c89",
          6361: "deed45308aceff9b1c42c3aa6fa728c6",
          6497: "47fb08894f39ca5ad6ae88d4a873f820",
          6664: "d2ebe2111979a66ddfd1e1a5992d8671",
          6681: "6f5fa6795550a2952c71da92942ab05d",
          6879: "f7d6d96c20d52766d2804b7fbf7e6133",
          6891: "d81394eee67acd64d92ea00182323978",
          6997: "e353341d1f59ff114b73cd96c1feeb5c",
          7010: "56523f4c3ffe9cbe6dc43e379b4abd65",
          7048: "fc34a3416b41c69cb5afde168a8d1d88",
          7073: "b3711b639e2fbfe16d2a7ef1945c6847",
          7353: "c70f143d94f6b23c32172621b0f14edc",
          7382: "63323c0d9fc4185002e5381c8b68b673",
          7436: "11a93fa46491c0099a54821360fbd6f6",
          7452: "51be963870194f9c65c260a23b02e7f0",
          7453: "4aeea8b4d2ff9a0a82338556725d73df",
          7727: "f5f47f6ff216de4b454b9184b18ce5c4",
          7893: "3c0749a7de95daa6b93b4c4b987d9797",
          7970: "7f7520a9c9894cdd86b93863292b88cf",
          8272: "ea848658e63eeeefdda6e592c50f5fae",
          8275: "b549c63bb21af56c53b4ab3e2ae9161f",
          8391: "9a67e9bc1d3471ef72879c7c122a4c96",
          8457: "7af18f94b2264c4f291f011083a825d8",
          8464: "9dae79e79616cc23cbc12157fb208b10",
          8522: "f7d119c2b60852bd6010d0428339f063",
          8557: "23b4e4fd3d775a198e9969e5d172c546",
          8654: "a3eac9ebf6a2c2bf7cfe1bff4c8f0df1",
          8755: "7bdca1639738061b75455018b67775a9",
          8880: "3e152d6ea5d39b53ac796e528b9c2b32",
          8906: "a989ce3dfe87fe7a3f223147689158c1",
          8970: "bce263b6d455f46a42eb74f183719746",
          9022: "5756c00ac779bd0de815ae3c8fdbb81b",
          9028: "bc983c90e677d496d358de50bb601df6",
          9062: "b8e2909941fad743dc9e40eec903f5c3",
          9126: "006528df9db164e6af79bf233e8d2ed5",
          9279: "37604fdc6fd4bbc13fa6a6d0cf089d94",
          9377: "fafde6d86efe5f62795acb91e9a7eea8",
          9583: "52b9eebede7c5920a1b8b8699d319547",
          9615: "9fa5147fcdb05443c6f8b5741446989b",
          9649: "d06f8c87cc36fa7d84f7558a94f61c42",
          9936: "6bfbf6cfc9ecf7f852a33626f499f841",
          9990: "177bdb6bea1422f2b60d527ca82c719f"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          820: "e79a4105235290f9d2d864ea28c87921",
          839: "3a4070d4c77506d8955255a1ccc7b2a6",
          3149: "9997228c3a403f7217e4c92e428d0359",
          4492: "2a25aaf73f30fa3834bdcc0018f08819",
          4571: "7d08ead9dd48419a2cb3d5906a426e37",
          4721: "f1212f2a94dd200b41d61bd732f9b140",
          5232: "32b480e5b467a8e833ad0b3b7a3c2b7d",
          5670: "93300c24320d8e14c200528c99656b89",
          6083: "214e2f94528af5f726d2150d0a4f2215",
          6919: "ea6994b8bffa7799c2b673f690549eda",
          7382: "bbc3aa4f4a5918e71769d52dc4e1ae69",
          7650: "384cddac2173849afd90c4a73e287f5e",
          8464: "214e2f94528af5f726d2150d0a4f2215",
          8522: "3c6fae78d6e30d8aa17204dace392cf5",
          9279: "384cddac2173849afd90c4a73e287f5e",
          9810: "ac6c3d25628c6900ccf6742b6efb74bd"
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
        }), e), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, t) => {
          if (c[e]) c[e].push(a);
          else {
            var r, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == f + d) {
                  r = l;
                  break
                }
              }
            r || (o = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, s.nc && r.setAttribute("nonce", s.nc), r.setAttribute("data-webpack", f + d), r.src = e), c[e] = [a];
            var i = (a, d) => {
                r.onerror = r.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], r.parentNode && r.parentNode.removeChild(r), t && t.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: r
              }), 12e4);
            r.onerror = i.bind(null, r.onerror), r.onload = i.bind(null, r.onload), o && document.head.appendChild(r)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          820: [64064],
          839: [31879],
          1692: [11438, 17523, 44019, 83166]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(o, e) && o[e].forEach((e => {
            var d = s.R;
            d || (d = []);
            var t = n[e];
            if (!(d.indexOf(t) >= 0)) {
              if (d.push(t), t.p) return a.push(t.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), s.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, d, c, f, o, n) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return o(b, f, n);
                    var l = b.then((e => o(e, f)), r);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                f = (e, a, r) => c(a.get, t[1], d, 0, o, r),
                o = a => {
                  t.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(s, t[2], 0, 0, ((e, a, d) => e ? c(s.I, t[0], 0, e, f, d) : r()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, t) => {
            t || (t = []);
            var r = a[d];
            if (r || (r = a[d] = {}), !(t.indexOf(r) >= 0)) {
              if (t.push(r), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var c = s.S[d],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, d, t) => {
                  var r = c[e] = c[e] || {},
                    o = r[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (r[a] = {
                    get: d,
                    from: f,
                    eager: !!t
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var r = s(e);
                    if (!r) return;
                    var c = e => e && e.init && e.init(s.S[d], t);
                    if (r.then) return b.push(r.then(c, a));
                    var f = c(r);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === d && (o("@foundry/react", "4.1.5", (() => Promise.all([s.e(2909), s.e(803), s.e(8522), s.e(7382), s.e(2229), s.e(4853), s.e(3804), s.e(4977), s.e(6207)]).then((() => () => s(78522))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(3218), s.e(2229), s.e(838)]).then((() => () => s(35671))))), o("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(1281), s.e(2066), s.e(2229), s.e(5966), s.e(3149), s.e(1913), s.e(4492), s.e(6681)]).then((() => () => s(96681))))), o("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(1281), s.e(3830), s.e(2066), s.e(803), s.e(1250), s.e(2229), s.e(6188), s.e(6497), s.e(5966), s.e(1788), s.e(1913), s.e(3804), s.e(2440), s.e(5232), s.e(4721), s.e(9810)]).then((() => () => s(25128))))), o("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(1281), s.e(2229), s.e(5966), s.e(3149), s.e(1913), s.e(839), s.e(2440), s.e(6919), s.e(6083)]).then((() => () => s(6083))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(3830), s.e(6186), s.e(2229), s.e(6188), s.e(6497), s.e(5966), s.e(4853), s.e(1788), s.e(8906), s.e(3516), s.e(9279)]).then((() => () => s(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(2229), s.e(6188), s.e(6497), s.e(5854)]).then((() => () => s(55247))))), o("dompurify", "2.5.8", (() => s.e(7048).then((() => () => s(17048))))), o("lodash", "4.17.21", (() => s.e(4981).then((() => () => s(4981))))), o("react-dom", "18.3.1", (() => Promise.all([s.e(3663), s.e(2229)]).then((() => () => s(53663))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(5422)]).then((() => () => s(65422))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(8275)]).then((() => () => s(78275))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(9649)]).then((() => () => s(19649))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(621)]).then((() => () => s(90621))))), o("react-jsx-parser", "2.4.0", (() => Promise.all([s.e(5e3), s.e(2229)]).then((() => () => s(65e3))))), o("react-router-dom", "6.30.0", (() => Promise.all([s.e(4105), s.e(2229), s.e(3271)]).then((() => () => s(94105))))), o("react", "18.2.0", (() => s.e(2522).then((() => () => s(42522))))), o("react", "18.3.1", (() => s.e(8654).then((() => () => s(98654))))), o("text-balancer", "1.0.5", (() => s.e(3461).then((() => () => s(3461))))), n(25136), n(29441)), b.length ? e[d] = Promise.all(b).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var t = d.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = d[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = d[1] ? a(d[1]) : [];
              return d[2] && (t.length++, t.push.apply(t, a(d[2]))), d[3] && (t.push([]), t.push.apply(t, a(d[3]))), t
            },
            a = e => {
              var d = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                t += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var r = 1, c = 1; c < e.length; c++) r--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : a(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, t) => {
              if (0 in a) {
                t = e(t);
                var r = a[0],
                  c = r < 0;
                c && (r = -r - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, l, s = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (l = (typeof(b = t[f]))[0])) return !n || ("u" == s ? o > r && !c : "" == s != c);
                  if ("u" == l) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == l)
                      if (o <= r) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || o <= r) return !1;
                    n = !1, o--
                  } else {
                    if (o <= r || l < s != c) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, r, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, d) => (e[d].eager && (a[d] = e[d]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce(((a, t) => !d(r, t) || a && !((a, d) => {
                a = e(a), d = e(d);
                for (var t = 0;;) {
                  if (t >= a.length) return t < d.length && "u" != (typeof d[t])[0];
                  var r = a[t],
                    c = (typeof r)[0];
                  if (t >= d.length) return "u" == c;
                  var f = d[t],
                    o = (typeof f)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && r != f) return r < f;
                  t++
                }
              })(a, t) ? a : t), 0)) && f[t]
            },
            r = e => {
              throw new Error(e)
            },
            c = (e => function(a, d, t, r, c) {
              var f = s.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, s.S[a], d, !1, r, c)) : e(a, s.S[a], d, t, r, c)
            })(((e, d, c, f, o, n) => {
              if (!((e, a) => e && s.o(e, a))(d, c)) return ((e, a, d) => d ? d() : ((e, a) => r("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, l = t(d, c, o, f);
              return l ? ((b = l).loaded = 1, b.get()) : n ? n() : void r(((e, d, t, r, c) => {
                var f = e[t];
                return "No satisfying version (" + a(r) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + d + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(d, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(8654).then((() => () => s(98654))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => s.e(4981).then((() => () => s(4981))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([s.e(4105), s.e(3271)]).then((() => () => s(94105))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([s.e(2909), s.e(1888), s.e(6188), s.e(6497)]).then((() => () => s(55247))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3663).then((() => () => s(53663))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([s.e(3218), s.e(8457)]).then((() => () => s(35671))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => s.e(2522).then((() => () => s(42522))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => s.e(7048).then((() => () => s(17048))))),
              33804: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3041).then((() => () => s(65422))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([s.e(2909), s.e(1888), s.e(3830), s.e(6186), s.e(6188), s.e(6497), s.e(4853), s.e(1788), s.e(8906), s.e(3516), s.e(7650)]).then((() => () => s(63516))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => s.e(8464).then((() => () => s(6083))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => s.e(5232).then((() => () => s(25128))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([s.e(4492), s.e(9062)]).then((() => () => s(96681))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => s.e(5e3).then((() => () => s(65e3))))),
              61898: () => c("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([s.e(8522), s.e(4977)]).then((() => () => s(78522))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => s.e(3461).then((() => () => s(3461))))),
              34977: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(656).then((() => () => s(78275))))),
              23271: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => s.e(3002).then((() => () => s(90621)))))
            },
            n = {
              839: [2973],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              3271: [23271],
              3804: [33804],
              4853: [44853],
              4977: [34977],
              5670: [15310, 20206, 23608, 57770, 61898, 97384],
              5966: [95966],
              6188: [16188],
              6497: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(n, e) && n[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var r = o[e]();
                  r.then ? a.push(f[e] = r.then(d).catch(t)) : d(r)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            s.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                820: 1,
                839: 1,
                3149: 1,
                4492: 1,
                4571: 1,
                4721: 1,
                5232: 1,
                5670: 1,
                6083: 1,
                6919: 1,
                7382: 1,
                7650: 1,
                8464: 1,
                8522: 1,
                9279: 1,
                9810: 1
              } [a] && d.push(e[a] = (e => new Promise(((a, d) => {
                var t = s.miniCssF(e),
                  r = s.p + t;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), t = 0; t < d.length; t++) {
                      var r = (f = d[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (r === e || r === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((r = (f = c[t]).getAttribute("data-href")) === e || r === a) return f
                    }
                  })(t, r)) return a();
                ((e, a, d, t, r) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", s.nc && (c.nonce = s.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) t();
                    else {
                      var f = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), r(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, r, 0, a, d)
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
          s.f.j = (a, d) => {
            var t = s.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) d.push(t[2]);
              else if (/^(3(149|271|804)|4(492|853|977)|(17|61)88|(222|691|83)9|(244|765|981)0|1913|5966)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((d, r) => t = e[a] = [d, r]));
              d.push(t[2] = r);
              var c = s.p + s.u(a),
                f = new Error;
              s.l(c, (d => {
                if (s.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var r = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + r + ": " + c + ")", f.name = "ChunkLoadError", f.type = r, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var t, r, c = d[0],
                f = d[1],
                o = d[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) s.o(f, t) && (s.m[t] = f[t]);
                o && o(s)
              }
              for (a && a(d); n < c.length; n++) r = c[n], s.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(44857), s(55974)
      })())
    }
  }
}));