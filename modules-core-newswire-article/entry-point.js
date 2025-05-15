! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "accf6d16-cdb6-4356-935f-6209320f64e7", e._sentryDebugIdIdentifier = "sentry-dbid-accf6d16-cdb6-4356-935f-6209320f64e7")
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
                  "./index": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(3113)]).then((() => () => d(68265))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(6186), d.e(5182), d.e(2229), d.e(6188), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(839), d.e(820), d.e(1692)]).then((() => () => d(31692))),
                  "./types": () => Promise.all([d.e(2909), d.e(1888), d.e(1281), d.e(3830), d.e(6186), d.e(2066), d.e(803), d.e(1250), d.e(7382), d.e(4571), d.e(2229), d.e(6188), d.e(6497), d.e(5966), d.e(4853), d.e(1788), d.e(8906), d.e(3149), d.e(1913), d.e(839), d.e(3804), d.e(2440), d.e(820), d.e(4721), d.e(6919), d.e(3113)]).then((() => () => d(90883)))
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
          131: "4a3341ff428892727022d622c0973bc6",
          278: "ceacf258f18d001447d7d04d8558ad53",
          299: "7629a9deafe6a22d1c5034655b86204c",
          314: "7d40794cb84a0cb6a5580d1f6e56587f",
          621: "1f067c9729d2ce26cb0b4d5a81046e08",
          656: "065c4edf17b4a73804f729827ac288f0",
          662: "42899e3d7ceaa764580b2fae4ce69f55",
          803: "d4be18f4b73bfc262262db4a9d64b4c4",
          820: "db770fde925d6ada4863dc58580a4b63",
          823: "aece2512355362b972f4c1a90d456837",
          824: "21bb81619966b78aa92e817cd864b930",
          838: "305e7be278a631e05737c72399ae4710",
          907: "cb4107235d35efd28dc6526c36a14b41",
          1054: "f4d90d19a0882bb3efd8b2d0a158f7b0",
          1242: "9e4a104c05697843c0d73abc61349a5e",
          1250: "e942198e13a45faf6f20b3feee7ae724",
          1280: "68089e514a71446ceb043887c1b7ae89",
          1281: "63c2f026cce9611b357e89a3875c1a02",
          1381: "b11aad2749947f0d822cfe794dbadbdd",
          1692: "7f67654bcd71bb0270117d3c3ce760f5",
          1822: "ac8c074fea57b3a9d836bdab6b164a57",
          1868: "a58bd52392740005b41b280b15389eb2",
          1888: "ca2acbce6fd4098b19edc8025756fb80",
          2066: "5b7e787130ebac1f7f0140a3b8ae3042",
          2156: "87fb45b5507fa4a6c69b6907177fd954",
          2171: "1f2b63c62cd01207323f34158278eed5",
          2221: "407f16afb1abcbc4e7a9c9be46f15e3b",
          2243: "325d6c20e185caa99f4f0ccbe926b73a",
          2347: "9f42785a96af1cb0340ffe4412220a8e",
          2365: "283ed2c8d4df85bc6a4495b86f2ccbb7",
          2398: "2e3b1d01d1295dfe685d6d2384a9f175",
          2466: "daba491a47efe085f707cde7f48a01f5",
          2522: "2d867d5545967508d22628d1bba9870c",
          2578: "f9b045a17dba45d8d12f9f70c6a0bfa1",
          2642: "4bb213298ad88e0fe09701e35d71ab01",
          2678: "94fb9a2c682b1c120cd08a4dd0c3c1f7",
          2864: "5278ed811f813c191c6f5da2abd17f2d",
          2909: "e8d3742fc6180b60fed390296ad1a98b",
          3002: "52f4386460f8e15e14f6bb9773cc3b87",
          3034: "2a64897ebd34e2c5dd6f48ba52e6484c",
          3041: "dfc8c642690017563f61632f9e2d58ce",
          3113: "871ba2810d08dc94f6c2ab92f1efc602",
          3197: "bd834d2224e54667f12d7a36300ce383",
          3218: "a02dc3265628ecd5c8e861c8a6823f5b",
          3343: "ae99b323fe2b7581cad9942c07bcee93",
          3370: "b233f9ea8bf4c947b1d7fa6adccf6470",
          3461: "eddc745ff39871f1a43155b9efabf6c8",
          3475: "3681cafcb9b272017c6f9d2ddd5efa00",
          3486: "28c5186dec8f062f457cf04f6ef6d531",
          3516: "a532b61683dbef3a305264928d962c37",
          3586: "40ac2f487d2d9f460931d93df0199ab1",
          3663: "368fe0698899aee2d9a64a36d5b11b96",
          3672: "e8119ce609a56707a1f8bd9f14a74195",
          3697: "5cc6537a8177c7c3f9d7b6395a89f0ad",
          3830: "b49c74e9bd2925519112a90738754229",
          3885: "9c53870810689efb538a32f603988a1b",
          3941: "3391a3d441563c102d509e699d8e924f",
          4011: "0da553f3739f58830e0bd66b8632b954",
          4105: "caf802e4d93585b9ebb72b4426bf1c6e",
          4153: "e9f3887e6547f27dbf8dde79ae5fd507",
          4251: "8a7b4eec8c3064b938de54f60b7b4a7c",
          4480: "61a4e7767cdc0763b5a6b436112f391d",
          4528: "42790ca9e55e0b00d1eb9292f6e92adf",
          4571: "37909dba5679a99fd635b4d937add819",
          4621: "037f31b6e8b0abbaec8f37ef0eec0352",
          4684: "51ffc0ca8c7f721b33faababeeaf3cab",
          4700: "e642f66548123ee85939f04a9462d918",
          4710: "ee959f70323493d1c417d181d37e660c",
          4721: "a3fa47dd7a527e119832c5bf9088f9cf",
          4731: "1a298fd956148c0160be4862a446fbba",
          4799: "8465b434300ef61f0c7e95caf5236909",
          4851: "df3fc85a56d03dec5e69408d0c97c7da",
          4861: "f6c3f52beddefa05b19008d501c4facd",
          4913: "ef5519fff6a2fc7bc66ddba6747535c4",
          4981: "7999dd94df2df34eaa9aa2206d806676",
          5e3: "7c3a7899c49c44aa3e6156471e175989",
          5018: "a015d6dd4670943c640a8d5b603cf03c",
          5182: "c00a722743c025c02176b1d68e976c72",
          5232: "c0d275a08f1de800bbe95587e3f8a746",
          5233: "4acc99b49f28783a7cb5110f0dc0b7b0",
          5259: "e88cd6e14c0fcd1b435cd9fdae72410a",
          5422: "9d6748359cd3cfd5bfd485861410d4f2",
          5530: "467fb52c1219c0d5cba03338636cbdaf",
          5639: "06b94697781a27e992d25f9e7598c16a",
          5663: "193385053d7b0dbee109843d634ae2d8",
          5734: "52a50305528a43eb2fd84f1912c44598",
          5742: "c39c46d01b35beb6a46d17b9121a4ec1",
          5830: "da253f64dd4ee647a424450e67733ae5",
          5832: "d7fddc917337683a2f79d305184ad91d",
          5854: "6885afee210e920b8543b73ae04db263",
          6083: "70eed8e0e92e66942ae28cf9237deccd",
          6186: "13eab655baca34e60997b03e77674e3f",
          6207: "b55e21d6be1dcbe7047bc3552de8eb8b",
          6267: "c8545a94727a0eed2e92f8094738e121",
          6280: "acf6630bb2d22fd965fee9fd08c3a637",
          6285: "ceb11090bacb24b13e3388239b01a639",
          6361: "ae144917fb268cc1c41c4ae827a80ab9",
          6497: "8773205bc8910115c0530bb1d4d8e73a",
          6664: "c43d2984a5eca1fa61ff7eec8c99be86",
          6681: "f562c41cd972a9973f2462720f3db380",
          6879: "bfb534f19a831fd313aefb47d5dc3988",
          6891: "20e0853c58648977bcde7460b3b5fadf",
          6997: "b657ee94e0ff011cbac2a5dc405e2310",
          7010: "933e1a7b1fb29a7a54cffd162f8e6382",
          7048: "554fd33d44d96b93c1afa85787281c0c",
          7073: "dde4d4ebb0dec695b017f32bfe58b166",
          7353: "7cfabaa66d28e41b775ed37bdfc48b66",
          7382: "a80abec76fe22ce4dd550f3024d40d32",
          7436: "fb23cf12f7122f509346b622faca853e",
          7452: "a8bdbca455325edf4ad2532692ffabd5",
          7453: "c13d7e8544f2e3f39fa01fcd94ebb638",
          7727: "5b3ed6bafac4935c8c4cfc3c685df9f3",
          7893: "d451cef5f1de2970758a0e89e5e20158",
          7970: "a4106c9ab0ac9bc104f24a685f237d20",
          8272: "762cd2e3323e04f57c8fab63d26435b8",
          8275: "2fe1a038f06695b04e2890be9f730f2e",
          8391: "2dede4a4da1f361f3b399e0b2571930c",
          8457: "0f839bd6f401e3a9515770ce365bcc6c",
          8464: "0fb1f1f3234cd6aa9d83116b908cfaa1",
          8557: "ece9baa755dc487b53ca2bda80becdce",
          8654: "9498ffb946ec0858fa625d2b05487b21",
          8755: "40e5397ca9d5bd1cce3f430a50b31bdc",
          8880: "a914ac701a15233f5769e8bd85bb5d00",
          8906: "4c5e175bb62d016d9cade9f34882b696",
          8970: "7540dbea931312bcff74899b5a8f84f8",
          9022: "0db6c1fe946d6e649179ef4f32713534",
          9028: "213818dfc55cc8e036250112b56cb4c7",
          9062: "3ba7e574b237ea5cf0195735b498bad9",
          9126: "0f28cab52461cefa808d310ab33a66b2",
          9279: "f12bfe81bfe6f84ec625687e056dbefd",
          9377: "e599efd93c1f47b1af15ebf61686ccf3",
          9583: "837c3e0040a88cc8741ef301ecf68e55",
          9615: "94361c5c704e0a1d75ebf8ee75bdc39f",
          9936: "e72ce92921c2791930d11d68ccbb65af",
          9990: "7faaf1e637a877a145520c695490ae19"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          820: "e79a4105235290f9d2d864ea28c87921",
          839: "3a4070d4c77506d8955255a1ccc7b2a6",
          3113: "0640cc4f9b65ca1fe67ce9d507c4be25",
          3149: "9997228c3a403f7217e4c92e428d0359",
          4251: "951c841dbb46609bf2cb1a16d777013d",
          4492: "2a25aaf73f30fa3834bdcc0018f08819",
          4571: "7d08ead9dd48419a2cb3d5906a426e37",
          4721: "f1212f2a94dd200b41d61bd732f9b140",
          5232: "32b480e5b467a8e833ad0b3b7a3c2b7d",
          6083: "214e2f94528af5f726d2150d0a4f2215",
          6919: "ea6994b8bffa7799c2b673f690549eda",
          7382: "136cc3f3aa219b97687bdb39e57010f8",
          7650: "384cddac2173849afd90c4a73e287f5e",
          8464: "214e2f94528af5f726d2150d0a4f2215",
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
              return "default" === d && (o("@foundry/react", "4.1.2", (() => Promise.all([s.e(2909), s.e(803), s.e(4251), s.e(7382), s.e(2229), s.e(4853), s.e(3804), s.e(4977), s.e(6207)]).then((() => () => s(54251))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(3218), s.e(2229), s.e(838)]).then((() => () => s(35671))))), o("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(1281), s.e(2066), s.e(2229), s.e(5966), s.e(3149), s.e(1913), s.e(4492), s.e(6681)]).then((() => () => s(96681))))), o("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(1281), s.e(3830), s.e(2066), s.e(803), s.e(1250), s.e(2229), s.e(6188), s.e(6497), s.e(5966), s.e(1788), s.e(1913), s.e(3804), s.e(2440), s.e(5232), s.e(4721), s.e(9810)]).then((() => () => s(25128))))), o("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(1281), s.e(2229), s.e(5966), s.e(3149), s.e(1913), s.e(839), s.e(2440), s.e(6919), s.e(6083)]).then((() => () => s(6083))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(3830), s.e(6186), s.e(2229), s.e(6188), s.e(6497), s.e(5966), s.e(4853), s.e(1788), s.e(8906), s.e(3516), s.e(9279)]).then((() => () => s(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(2909), s.e(1888), s.e(2229), s.e(6188), s.e(6497), s.e(5854)]).then((() => () => s(55247))))), o("dompurify", "2.5.8", (() => s.e(7048).then((() => () => s(17048))))), o("lodash", "4.17.21", (() => s.e(4981).then((() => () => s(4981))))), o("react-dom", "18.3.1", (() => Promise.all([s.e(3663), s.e(2229)]).then((() => () => s(53663))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(5422)]).then((() => () => s(65422))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(8275)]).then((() => () => s(78275))))), o("react-dom", "19.1.0", (() => Promise.all([s.e(2229), s.e(621)]).then((() => () => s(90621))))), o("react-jsx-parser", "2.4.0", (() => Promise.all([s.e(5e3), s.e(2229)]).then((() => () => s(65e3))))), o("react-router-dom", "6.30.0", (() => Promise.all([s.e(4105), s.e(2229), s.e(3271)]).then((() => () => s(94105))))), o("react", "18.2.0", (() => s.e(2522).then((() => () => s(42522))))), o("react", "18.3.1", (() => s.e(8654).then((() => () => s(98654))))), o("text-balancer", "1.0.5", (() => s.e(3461).then((() => () => s(3461))))), n(25136), n(29441)), b.length ? e[d] = Promise.all(b).then((() => e[d] = 1)) : e[d] = 1
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
              82522: () => c("default", "@foundry/react", !1, [1, 4], (() => Promise.all([s.e(4251), s.e(4977)]).then((() => () => s(54251))))),
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
              3113: [15310, 20206, 23608, 57770, 82522, 97384],
              3271: [23271],
              3804: [33804],
              4853: [44853],
              4977: [34977],
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
                3113: 1,
                3149: 1,
                4251: 1,
                4492: 1,
                4571: 1,
                4721: 1,
                5232: 1,
                6083: 1,
                6919: 1,
                7382: 1,
                7650: 1,
                8464: 1,
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