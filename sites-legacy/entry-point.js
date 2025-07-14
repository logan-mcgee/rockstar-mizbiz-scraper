try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "66ed756c-306c-4392-a439-8a03ee039ac7", e._sentryDebugIdIdentifier = "sentry-dbid-66ed756c-306c-4392-a439-8a03ee039ac7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
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
        var e, r, c, f, d, o, n = {
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
                  "./bootstrap": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(3222), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(8)]).then((() => () => t(90008))),
                  "./index": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(5932)]).then((() => () => t(45932))),
                  "./site-routes/Bully": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(7708)]).then((() => () => t(7708))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885), t.e(884)]).then((() => () => t(20884))),
                  "./tina": () => Promise.all([t.e(4981), t.e(6719), t.e(6186), t.e(2327), t.e(3469), t.e(2229), t.e(9623), t.e(5966), t.e(4309), t.e(4281), t.e(861), t.e(2440), t.e(7002), t.e(8619), t.e(7145), t.e(3352), t.e(885)]).then((() => () => t(70885)))
                },
                c = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      c = t.S[r];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => c,
                init: () => f
              })
            },
            67884: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, c = 0, f = r.length; c !== a && f >= 0;) "/" === r[--f] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var d = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + d
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

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = n, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var c = Object.create(null);
          i.r(c);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(c, f), c
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          8: "9a10368aa80be5308f8dec41a4677b52",
          131: "4d12aa370e0b7f50a060f57e319c8a23",
          191: "c2bfe312d7b016d6dc809c6f057eb868",
          276: "c656e864c41bd1d99155463aef4abb1b",
          278: "2591a306efd5ec950c9930226ca46016",
          299: "a03c90a90212cc22088e39202b984daa",
          308: "d6a9646067847fb0930b27cbe260896f",
          314: "f79de3084c02f37a32cf9469cd64d4de",
          341: "d17b2d8a375deb381604a6e4bde64f4f",
          621: "c697cb3907c0b96cc3deceb67f2aa2f4",
          656: "31592a03d31e2f9a82f56e2f654a037a",
          662: "89db6923373414bbf61d4bc3bf0c82f5",
          823: "690d67da7f3f36fa3db888b90b4fd46c",
          824: "633983918410cf8f0e3e56151ba1f4d7",
          838: "3d7961a47b552314104661be95bb3aa2",
          861: "d9d42f1ec595f4ef2be9ed5835ee77a3",
          884: "6e6c48ee59d8f2d5f37e2de09bce4af0",
          885: "9e43a5b197ec97bfdc118abf60ee4cf4",
          907: "ed4b3fc1c025d758edc8d36f995390c5",
          1054: "5b992cfd785acd1194795bbfdfa17af6",
          1242: "3eb72b5d0402c9bd57dabceb9e71f29d",
          1280: "5727ee6f3b602b7034c555d3162d32ab",
          1381: "a8b58a90e1daf5f35209bc1bae942f11",
          1478: "f1b26cd3c3388ab9931bb451d93d0b3c",
          1559: "2e76642e82a19bdd76e656180ecd8490",
          1822: "6a5782e8a3bd2675859648dac24c9c67",
          1868: "5fb1a241522b510aef44c26dbbbb8c30",
          2156: "71d7ef0d3a13bd16a1b5b6aa267f1c1e",
          2171: "ba09ede50c6ac65fc0ee264e976470dc",
          2221: "5f954215d8d211a6cbeee5c08b1121c7",
          2243: "3b3aa71a19043fe764986ea90a057241",
          2327: "05a75f67a45b2e1633c9da196a58642c",
          2347: "cbc400d9769ee4f57cfb040bc45e9299",
          2365: "117b9e2b69d0799b2e7f2b8fcfd8f556",
          2398: "8fa48314817e0e1806a6bd19fe4f1ed1",
          2466: "c7abc8bb7e90ab319e8ce54ef84dafc8",
          2522: "0a4339cf8525ff8431f9a510558d5502",
          2572: "1b9cbabbb010a8f907502b0675fb4706",
          2578: "eddbdb774745dc7f7a181d72c86f1dd4",
          2642: "03d8ec6d3b2234be3f98fd191bc231ad",
          2678: "aef2352440bc9cbd609c6afb792985c8",
          2722: "3cfdbecbdad54c42b738ba9e49b4a537",
          2864: "70729d3f2384aac6cc38bed2c499311b",
          3002: "40c97528f59838ba17acbe32bfb50451",
          3034: "c1f6d69afb63f256bccc6bb1bc0cccf3",
          3041: "77e5f83e22d1e3d6e6463a9d45265981",
          3197: "9d0905610955bf9daadaa1a26e351589",
          3204: "86e06734dfc4b1143092692f64cd2307",
          3218: "cca397530085a39528d0c838f0e3f406",
          3222: "dba53e7f0e7cce2b317980e0109ac212",
          3343: "c76b3a7a5cf3b384494055e4615b7864",
          3352: "2573163861038a412f4b862c17c65a31",
          3370: "afd6bc5fe34d3784d88256aa80b0ccce",
          3469: "273c0952c195bbac02e08d42d8df94fc",
          3475: "d27f313006e8721dcdfea3fd45438b78",
          3486: "de8aab5897e35f7ec210d9055c8c2208",
          3586: "123ea44ebcc487e171a8d2ebbc605cfd",
          3663: "bb7243703fc99921747e40782ff27ee5",
          3672: "81661514f35864cee7bd017498ada1ce",
          3697: "8825ae0408ba5e353f5cfba1d3c2973d",
          3885: "97a8a04f08830f932a33c95afa01eaa5",
          3940: "77e7d78381437d6c165dd3676c983dbe",
          3941: "47568509779c3f368e87448dcc1be942",
          4011: "f1dcbe1e5492f6f1a4dee7bacb29f0ed",
          4105: "00e2805deef8ab9f4fc21d03f63f90ca",
          4153: "c820f822dca46b65bf5c18e4ce961f7c",
          4309: "00c0a6ab127f639fb2d5244befaf17c0",
          4480: "19921cfc80fbace8c30e12c1bb7f9301",
          4528: "37e3c85e8fd6596b4b55f4db1621a53e",
          4546: "81a81918657efac879fd68ec679d3b3f",
          4621: "c6398a67ce15402d6ec4621b20459d5b",
          4672: "5d5ebc1cdb09ab353680fa9de5b3b2bd",
          4684: "36953d7a401f6dc7fe0b75f0fa7b1c9f",
          4700: "6b2def65c6b6fc73f2ca87f7a49c4dba",
          4710: "9abe6e094fa29ea044fa12e92f3f7844",
          4731: "1f55e451d5db2cc2b7e111d320044962",
          4799: "ad465b52511f5391af4a47b15fe04d2d",
          4851: "272ab94d0bcfee2dbf000387efd2f923",
          4861: "b7c3a0584e3c4a88c7e97706edbd5bdd",
          4913: "99660710c9222aabf06356df0f8a4d86",
          4981: "53a4adf13c7060ba66d0c2727e6bcfd0",
          5018: "fd59ca68f4fccca8219f83937e38d1d0",
          5233: "5b06f045e6af79fb9ff0acad97e0ff38",
          5259: "16430e644ff62017776395bbb5bd1199",
          5422: "c9e104ee9fbea3589e775ef0e2d98068",
          5530: "a0d69078040c2a071cc63c426028f254",
          5639: "6edc85ed59ee1f483b04dfa8e0cd3a2e",
          5663: "173e032cb33c528ba618af3776dcc52a",
          5666: "fece0cc1fa53222e221727e06fce78fb",
          5734: "a3a42a746d2f8448f76683bbf4893173",
          5742: "105ca2cec8c84733cc7db28bc3f15285",
          5830: "2385e9bc235ea3510e4bcad0eaee4b71",
          5832: "8281d00ba24455145b6739b2eeb36c49",
          5854: "394f0415a27e86c5aaf0b4e970b3c7cc",
          5932: "6a11f378133fafa527b403b23a49e5ce",
          6186: "e5bd609d2063f9e7529e813c1cdb55f0",
          6267: "480662ddee59408744888b36fa8a9302",
          6280: "0bdf5e61bc55e30af50e4f2132439739",
          6285: "e99f8273257e43467b4431bf0413f087",
          6361: "1f204fee18c419e7ea339481831f0db3",
          6664: "0c6127b1272189796eca22116e3751d6",
          6719: "c9f0555d63ddc0f52365a7687456d0be",
          6879: "17cd7a42561219380e7df11c15e465db",
          6891: "5049bee5d7fdcd8208f9abdceba746e1",
          6997: "d9ec2b562e81bb3b3577aef57d5d9f4b",
          7002: "e6153dd08f5ea88bdc9afc2772aea9ac",
          7010: "963a8c95c439d396cf44f7bb64ed0b1f",
          7073: "4176e564c0861f90b61eccbb49ca5b58",
          7353: "a2f991aba497b5983317c79a027b1256",
          7436: "0259793ff2857f50a25c68cd1c108001",
          7452: "003900ba07e55e95ae84a40b81411ad6",
          7453: "3e77151e682641ac06025890e25d5f6d",
          7485: "c242b7df428e30a0f24aefb003966af9",
          7708: "aa725e2492b713fddfe0d45d9d6b7082",
          7709: "58aa54275783f5df71438ab7c4879ceb",
          7727: "bc7c5ce371a1ce76029e6e8e050cd46d",
          7893: "88c007ddc96cc8e00011e6e1be34eaf9",
          7895: "c47e0f3b4e71a6c75f6e5d1bbe408567",
          7902: "b3c80421d5be9bffae29aa0a0341680c",
          7970: "9a6aa7bdd0dc24c9021b1968c6024914",
          8272: "c853fefc278a8374cf5f4ad12b2b7358",
          8275: "a91ac96de00c0d322dd4c9bf5f9491b2",
          8391: "1a251a66e3bdffe79aada0039410a15b",
          8457: "339297e436f5dc6815195340efe79fc4",
          8557: "5f67c69ba1b3585a26e5d5adc9c9c48d",
          8654: "42c3bbb972770ac2688faef99df3b792",
          8755: "3bba44a44a7722174e8e2b459d94784b",
          8880: "38aa1a5d3e877bbfcb3641ffe1ef667f",
          8970: "719c4c774e551dc539f752b0b2a7949f",
          9022: "b7f35ded70ef6bee5bc046d26ab42493",
          9028: "871511f9977b08d7dadda4c3c2c5d452",
          9126: "29dbaa880b75dc63ebbe3965c425994a",
          9377: "1a79d9c59233379607ef0a7762ea763b",
          9583: "c241e865b68e4cd9cb9d4d39dc5dd802",
          9615: "7002c3ff9e820b5bb41262346aad74a4",
          9649: "5582568e47fa17ded6cca61b9cfabc84",
          9936: "76798beca0ff6a33b17cc750e5fe4c11",
          9990: "07a17678b29843f08c5d63bb5c044c3e"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          8: "1eac0d948be569c136035d072b953ab4",
          341: "82b8e41eb90eae7db3adfb9fff54d045",
          884: "52e55b769351b6e3f1602fe5d2baacd1",
          2722: "82b8e41eb90eae7db3adfb9fff54d045",
          3352: "a287413b91e22d2183cac646a279852e",
          3469: "db1c0ba0699f10d1417e9b5ae22397d7",
          4672: "e70ba27106c58a2902fdf3deb822d60f",
          5666: "62cb6bfb390050db6a71d81fb427a37d",
          7708: "52e55b769351b6e3f1602fe5d2baacd1",
          9599: "8591dc87aae69356ef4710fc935c5ecf"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/sites-legacy:", i.l = (e, a, t, r) => {
          if (c[e]) c[e].push(a);
          else {
            var d, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  d = s;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", f + t), d.src = e), c[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = c[e];
                if (delete c[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), o && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          885: [17523],
          3352: [31879]
        }, o = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(d, e) && d[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, d, o, n) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return o(b, d, n);
                    var i = b.then((e => o(e, d)), c);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                d = (e, a, c) => f(a.get, r[1], t, 0, n, c),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, ((e, a, t) => e ? f(i.I, r[0], 0, e, d, t) : c()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var c = a[t];
            if (c || (c = a[t] = {}), !(r.indexOf(c) >= 0)) {
              if (r.push(c), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var f = i.S[t],
                d = "@rockstargames/sites-legacy",
                o = (e, a, t, r) => {
                  var c = f[e] = f[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (c[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(838)]).then((() => () => i(35671))))), o("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(7002), i.e(4672)]).then((() => () => i(67662))))), o("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(2327), i.e(2229), i.e(4281), i.e(2440), i.e(8619), i.e(9599), i.e(1559)]).then((() => () => i(21559))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(4981), i.e(6719), i.e(7709), i.e(2229), i.e(9623), i.e(5966), i.e(4309), i.e(7895)]).then((() => () => i(57895))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(4981), i.e(6186), i.e(2229), i.e(5966), i.e(4281), i.e(861), i.e(341)]).then((() => () => i(63516))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(4981), i.e(6719), i.e(2229), i.e(9623), i.e(4309), i.e(5854)]).then((() => () => i(55247))))), o("focus-trap-react", "10.3.1", (() => Promise.all([i.e(7902), i.e(2229), i.e(7145)]).then((() => () => i(7902))))), o("framer-motion", "10.18.0", (() => Promise.all([i.e(308), i.e(2229)]).then((() => () => i(50308))))), o("framer-motion", "10.18.0", (() => Promise.all([i.e(3204), i.e(2229)]).then((() => () => i(70823))))), o("framer-motion", "7.10.3", (() => Promise.all([i.e(7485), i.e(2229)]).then((() => () => i(17485))))), o("graphql", "16.11.0", (() => i.e(4546).then((() => () => i(24546))))), o("prop-types", "15.8.1", (() => i.e(1478).then((() => () => i(61478))))), o("react-dom", "18.3.1", (() => Promise.all([i.e(3663), i.e(2229)]).then((() => () => i(53663))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(5422)]).then((() => () => i(65422))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(8275)]).then((() => () => i(78275))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(9649)]).then((() => () => i(19649))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(621)]).then((() => () => i(90621))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(191)]).then((() => () => i(40191))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229), i.e(3271)]).then((() => () => i(94105))))), o("react", "18.2.0", (() => i.e(2522).then((() => () => i(42522))))), o("react", "18.3.1", (() => i.e(8654).then((() => () => i(98654))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var c = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return n.push(a.then(c, e));
                  var f = c(a);
                  if (f && f.then) return n.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), n.length ? e[t] = Promise.all(n).then((() => e[t] = 1)) : e[t] = 1
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
                for (var c = 1, f = 1; f < e.length; f++) c--, r += "u" == (typeof(o = e[f]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, o);
                return r
              }
              var d = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                d.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? d.pop() + " " + d.pop() : a(o))
              }
              return n();

              function n() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var c = a[0],
                  f = c < 0;
                f && (c = -c - 1);
                for (var d = 0, o = 1, n = !0;; o++, d++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(b = r[d]))[0])) return !n || ("u" == s ? o > c && !f : "" == s != f);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= c) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= c) return !1;
                    n = !1, o--
                  } else {
                    if (o <= c || i < s != f) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < a.length; d++) {
                var h = a[d];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, r, c, f) => {
              var d = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(c, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var c = a[r],
                    f = (typeof c)[0];
                  if (r >= t.length) return "u" == f;
                  var d = t[r],
                    o = (typeof d)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && c != d) return c < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            c = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, c, f) {
              var d = i.I(a);
              return d && d.then && !r ? d.then(e.bind(e, a, i.S[a], t, !1, c, f)) : e(a, i.S[a], t, r, c, f)
            })(((e, t, f, d, o, n) => {
              if (!((e, a) => e && i.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, n);
              var b, s = r(t, f, o, d);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void c(((e, t, r, c, f) => {
                var d = e[r];
                return "No satisfying version (" + a(c) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
              })(t, e, f, o, d))
            })),
            d = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(98654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(4105), i.e(3271)]).then((() => () => i(94105))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(4981), i.e(6719), i.e(9623), i.e(4309)]).then((() => () => i(55247))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => i.e(4546).then((() => () => i(24546))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(4981), i.e(6719), i.e(7709), i.e(9623), i.e(5966), i.e(4309), i.e(276)]).then((() => () => i(57895))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(8457)]).then((() => () => i(35671))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3663).then((() => () => i(53663))))),
              92440: () => f("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(4981), i.e(6186), i.e(5966), i.e(861), i.e(2722)]).then((() => () => i(63516))))),
              90660: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(7485).then((() => () => i(17485))))),
              55799: () => f("default", "react-intersection-observer", !1, [1, 9, 10, 3], (() => i.e(2572).then((() => () => i(40191))))),
              61913: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(2522).then((() => () => i(42522))))),
              57145: () => f("default", "prop-types", !1, [1, 15, 8, 1], (() => i.e(1478).then((() => () => i(61478))))),
              2765: () => f("default", "focus-trap-react", !1, [1, 10, 2, 3], (() => i.e(7902).then((() => () => i(7902))))),
              33804: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3041).then((() => () => i(65422))))),
              34977: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(656).then((() => () => i(78275))))),
              82849: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(3204).then((() => () => i(70823))))),
              84590: () => f("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], (() => i.e(5666).then((() => () => i(67662))))),
              87330: () => f("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], (() => Promise.all([i.e(9599), i.e(3940)]).then((() => () => i(21559))))),
              87052: () => f("default", "framer-motion", !1, [1, 10, 12, 18], (() => i.e(308).then((() => () => i(50308))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(3002).then((() => () => i(90621)))))
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
          i.f.consumes = (e, a) => {
            i.o(n, e) && n[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var t = a => {
                  d[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete d[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = o[e]();
                  c.then ? a.push(d[e] = c.then(t).catch(r)) : t(c)
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
                8: 1,
                341: 1,
                884: 1,
                2722: 1,
                3352: 1,
                3469: 1,
                4672: 1,
                5666: 1,
                7708: 1,
                9599: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  c = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var c = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (c === e || c === a)) return d
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var d;
                      if ((c = (d = f[r]).getAttribute("data-href")) === e || c === a) return d
                    }
                  })(r, c)) return a();
                ((e, a, t, r, c) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = d, n.request = o, f.parentNode && f.parentNode.removeChild(f), c(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, c, 0, a, t)
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
              else if (/^((222|861|959)9|2440|3271|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((t, c) => r = e[a] = [t, c]));
              t.push(r[2] = c);
              var f = i.p + i.u(a),
                d = new Error;
              i.l(f, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var c = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + c + ": " + f + ")", d.name = "ChunkLoadError", d.type = c, d.request = f, r[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, c, f = t[0],
                d = t[1],
                o = t[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in d) i.o(d, r) && (i.m[r] = d[r]);
                o && o(i)
              }
              for (a && a(t); n < f.length; n++) c = f[n], i.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            t = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(44857), i(58639)
      })())
    }
  }
}));