try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9ff1808b-ee98-4d20-9b28-e402c7bc86f7", e._sentryDebugIdIdentifier = "sentry-dbid-9ff1808b-ee98-4d20-9b28-e402c7bc86f7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, f, d, c, n, o, b = {
            20154(e, a, r) {
              (0, r(89160).w)(1)
            },
            89160(e, a, r) {
              const t = r(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            35649(e, a, r) {
              r(20154)
            },
            51908(e, a, r) {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            55974(e, a, r) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(883), r.e(2951), r.e(6765), r.e(4976), r.e(3600), r.e(6500), r.e(9643), r.e(986), r.e(4566), r.e(4815), r.e(1274), r.e(7818), r.e(3113), r.e(3082), r.e(4017), r.e(283), r.e(3331), r.e(2909), r.e(1270), r.e(6416), r.e(2199), r.e(4453), r.e(6589), r.e(5847), r.e(7301), r.e(8248), r.e(2285), r.e(5344), r.e(6936), r.e(5806)]).then(() => () => r(11082)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(883), r.e(2951), r.e(6765), r.e(6500), r.e(986), r.e(4566), r.e(3082), r.e(4017), r.e(283), r.e(3331), r.e(2909), r.e(1270), r.e(4453), r.e(6589), r.e(5847), r.e(8248), r.e(6936), r.e(9807)]).then(() => () => r(26047)),
                  "./types": () => Promise.all([r.e(883), r.e(2951), r.e(6765), r.e(4976), r.e(3600), r.e(6500), r.e(9643), r.e(986), r.e(4566), r.e(4815), r.e(1274), r.e(7818), r.e(3113), r.e(3082), r.e(4017), r.e(283), r.e(3331), r.e(2909), r.e(1270), r.e(6416), r.e(2199), r.e(4453), r.e(6589), r.e(5847), r.e(7301), r.e(8248), r.e(2285), r.e(5344), r.e(6936), r.e(5806)]).then(() => () => r(21667))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            },
            29441(e) {
              "use strict";
              e.exports = r
            },
            25136(e) {
              "use strict";
              e.exports = t
            }
          },
          l = {};

        function s(e) {
          var a = l[e];
          if (void 0 !== a) return a.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = b, s.c = l, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          s.r(t);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, s.d(t, d), t
        }, s.d = (e, a) => {
          for (var r in a) s.o(a, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce((a, r) => (s.f[r](e, a), a), [])), s.u = e => "js/" + {
          62: "db290e19bf76b3a981a8d68e01595da0",
          162: "ef877296efdb77c2b5d44709b093f5d0",
          609: "55d1a208ad13ba5223305f0a59e12772",
          685: "fd54933e12056479686228a7ba7df7f6",
          799: "f3414a42ff5a6f050f817d9934e55688",
          846: "7918fb6563eab96d7f691bacd9f47b86",
          883: "4b60ba27e430948d74bc676b8a644f2d",
          986: "a48c0ee5497b59e675ce4b2584c22b05",
          1003: "064758e5cfb9abe991acd1e100dc8da8",
          1061: "426cbafb3ed9e398752629f7e52ecdeb",
          1274: "42a64b4ecb5278c97f76370ffe69f35d",
          1374: "ec08e9464c40f82e7296b391dc7f2e35",
          1411: "81baab8af7f57daf9d57235f55e11b6a",
          2066: "d251e1631406951fcc4b40d7bfdf12bf",
          2497: "ce41c38002d56179b987fbda3c3e58ed",
          2581: "ec89cea22bfa182bdeeaf70383725ac8",
          2592: "e5c0362ca3bcdb42d9f0cd40d9595df3",
          2730: "47c23a698bd3cad65c2fb023d0e3ebe9",
          2860: "c7e98f5f5286440d4ceef91c402baba5",
          2951: "12333795c64cfde2e91e3eaf9b6bb2b7",
          2954: "99e572037b79031bedc3c814b019cb41",
          2993: "5895b1b8072c998fd41a36ce5d03ad7e",
          3031: "e31289765bf101acc73728c7a7ac2a6e",
          3113: "f70d34cc7423ca49285b677fa8451dc5",
          3180: "9b3f61f2d9ed9ca236e25af3b69df693",
          3600: "2e98f550f7b5230f267e1a6912485aa8",
          3740: "e024d28942cd2f4503702691c17ed6e6",
          3769: "e84d063d2acc61804657c0d999f574d0",
          3792: "cbf9912302ca26ca0f411ee0f1635943",
          3922: "880553441db96fe7fec5da35f7aeb7ff",
          3939: "a84df03fb1b62b413ec767dc414aef3a",
          3982: "1647b9ca57f8a32d0ff52b1e7a414c10",
          4016: "97c734eab327bb013118cda1da284b08",
          4053: "e0cd839efe322d0645f6aa828c8c8fdf",
          4255: "82f5cc2670f4aea52045b6329687c7a2",
          4269: "73d2b3757cb71d6dea6ecf6f9037ba97",
          4292: "d49c1829dd57908d8f522f4852bfbec9",
          4309: "f849f9f46655c34f5ad7616222cc2526",
          4388: "97a916d977306642aeb1a2f0bac6cd16",
          4411: "932feb69a36057d5fc9b13729f0fd874",
          4453: "0ab255eb3dd76f7fb0e62321435f98d2",
          4498: "4e2ebf3e325f918062b8aefb2e2c2d02",
          4566: "7250603eee1b0a98b729d3d9660758f2",
          4656: "646a0e9e0981e63d2bc8f10a064fb858",
          4756: "dfec74bcc8d7c4796f60d712a0edba8e",
          4815: "c942726509db8409a3f30d49d7477d50",
          4921: "24cebb6ae2f3ab0e055f0f79c2b6b2ac",
          4976: "8167d13ef480f1ccf85dac5a35af3b8d",
          5344: "e75c5e06ce1c314e9cc6fb13c34bbb5e",
          5505: "25cac114c62dff42f812748af1e33696",
          5509: "3a746639b4ad07b0af18094989e9eab4",
          5612: "65a47e5e106b34137965a4a4b325b961",
          5806: "a1df6cffe56586b3963300579df3d8af",
          5847: "4d074ef68239dd3af484065613cffbef",
          5864: "6de234ca78b99e91638fb452a7b24769",
          5963: "c5bb6fa3fdde95bfd77602ee7ee32708",
          5997: "a9e4cae976bd887d8f1b56dff721a511",
          6035: "bcaa6fe6ab2c09f5b0b9d0bff0339305",
          6087: "691669f775454895dbe95f5f325f123f",
          6150: "9f1d0d31d98b6f66048531858b59743a",
          6241: "ecfdd226f29eb0f153afc81c43f639bc",
          6279: "5c69033b0f09add44667f5e9b9bba4f5",
          6320: "3142bdc556d75612acafbea119a1e1eb",
          6500: "bfdd5ab68c2ace1507106eb036874a82",
          6583: "c080024e6c4cb603f6f53ba02c0b64d5",
          6589: "ddfd1f7d7db5b4889d41fc554138ab60",
          6765: "ad79218cd643113bc656725c762c74c8",
          6792: "87a0879518855ad2f23f98134a00d084",
          6932: "21aac58e31c054ed8710294007d4a861",
          6936: "4348b5bc70b0428ae27400229e75769d",
          7469: "8e42f953b0d8cf17aac4590881613082",
          7807: "258fd97e95d90350dab4c05c8b946aa4",
          7818: "b80b09ee36eda0617e367ee58dd5ff85",
          7890: "024511e06693c7656f488b6435a7dd76",
          7902: "b2c0aeb0342c7b294506fa8ca077fb49",
          8349: "0ca7b20344317783eb470f693247d329",
          8622: "80de197cc6c0e2333b525aa3352a0d43",
          8805: "40283464cea612ecd912b52df5637d81",
          8853: "f28a12a063d33f9252c4f8f865144fc5",
          9081: "2bac409fc94b83fc40fe0016fd5cc663",
          9183: "561419bf2e116a79eba19916694d3e3b",
          9643: "0314ca58845df7696ec1b15eed8bb74c",
          9807: "9efab29515e1e0b5c62981efe06c0ac1",
          9988: "bbff79bdcdf47cc4624f6ad992e34b3e"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          1089: "bfe4e4109fd9c58c236be27a4498cde6",
          1274: "6375eab2647ea5ee53b8db8ebc800a29",
          2860: "4b0f1d92e883cea78bd6ce0a02dd372e",
          2954: "fc87901d26c616fb6163d1992b094cea",
          3113: "0e672e63f3950726b1d12db9d6af6da7",
          3351: "101537b924f4411033bd9d2d8536a01a",
          3740: "63de1640a21881ef00a13956465fdc14",
          3769: "384cddac2173849afd90c4a73e287f5e",
          4053: "ef81dd31a2acf40a379ebf06814ce854",
          4411: "7c575cc0a210038808b12a81bf37629b",
          4453: "915d373fd494468e9b0648f0fc1b6314",
          4852: "dd3dc51d96ce54cf1d6fc8fd4da5a62f",
          5344: "90181f5f503830695ace14869df4afa3",
          5806: "9422e2d9eb3d0433f3a678d326dbef0a",
          6150: "384cddac2173849afd90c4a73e287f5e",
          6792: "7c575cc0a210038808b12a81bf37629b",
          6936: "e79a4105235290f9d2d864ea28c87921",
          7469: "bfe4e4109fd9c58c236be27a4498cde6",
          7807: "c5961ff45ab2f26ffb7e50308f79c617",
          7818: "e3a17fd46b0e69a1e4815244acb614b3",
          8248: "3a4070d4c77506d8955255a1ccc7b2a6",
          9081: "79cfbfea4fb4517cc8a0596af5cd3e08",
          9807: "c5961ff45ab2f26ffb7e50308f79c617"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var l = o[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + r) {
                  f = l;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", c + r), f.src = e), d[e] = [a];
            var i = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          6936: [64064],
          8248: [31879],
          9807: [11438, 17523, 44019, 83166]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(n, e) && n[e].forEach(e => {
            var r = s.R;
            r || (r = []);
            var t = o[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), s.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var l = b.then(e => n(e, c), f);
                    if (!o) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, n, f),
                n = a => {
                  t.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(s, t[2], 0, 0, (e, a, r) => e ? d(s.I, t[0], 0, e, c, r) : f(), 1)
            }
          })
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var d = s.S[r],
                c = "@rockstargames/modules-core-newswire-article",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var d = e => e && e.init && e.init(s.S[r], t);
                    if (f.then) return b.push(f.then(d, a));
                    var c = d(f);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (n("@foundry/react", "6.2.0", () => Promise.all([s.e(883), s.e(2951), s.e(6765), s.e(2497), s.e(4976), s.e(2954), s.e(9643), s.e(3740), s.e(3082), s.e(4017), s.e(1270), s.e(4411)]).then(() => () => s(33740))), n("@foundry/react", "6.2.0", () => Promise.all([s.e(883), s.e(2951), s.e(6765), s.e(2497), s.e(4976), s.e(6500), s.e(2954), s.e(9643), s.e(4566), s.e(9081), s.e(7818), s.e(3082), s.e(4017), s.e(1270), s.e(6792)]).then(() => () => s(59081))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([s.e(2497), s.e(3082), s.e(283), s.e(8622)]).then(() => () => s(68403))), n("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([s.e(883), s.e(2951), s.e(6765), s.e(4976), s.e(3600), s.e(6500), s.e(3082), s.e(4017), s.e(3331), s.e(1270), s.e(4453), s.e(3351), s.e(7807)]).then(() => () => s(42066))), n("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([s.e(883), s.e(6765), s.e(4976), s.e(3600), s.e(4815), s.e(1274), s.e(3082), s.e(4017), s.e(283), s.e(3331), s.e(2909), s.e(1270), s.e(6416), s.e(2199), s.e(7301), s.e(2285), s.e(4255), s.e(5344), s.e(7469)]).then(() => () => s(28699))), n("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([s.e(883), s.e(2951), s.e(6765), s.e(3600), s.e(6500), s.e(3082), s.e(4017), s.e(3331), s.e(1270), s.e(4453), s.e(7301), s.e(8248), s.e(2860)]).then(() => () => s(44053))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([s.e(3600), s.e(4815), s.e(3082), s.e(2909), s.e(2199), s.e(7301), s.e(2285), s.e(4852), s.e(3792)]).then(() => () => s(83792))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([s.e(5864), s.e(6583), s.e(3082), s.e(283), s.e(3331), s.e(2909), s.e(6416), s.e(5997), s.e(799)]).then(() => () => s(90799))), n("@rsgweb/tina", "0.0.0", () => Promise.all([s.e(883), s.e(986), s.e(4309), s.e(8349), s.e(3082), s.e(4017), s.e(283), s.e(3331), s.e(2909), s.e(2199), s.e(6589), s.e(6150)]).then(() => () => s(60620))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([s.e(5864), s.e(9988), s.e(3082), s.e(283), s.e(2909), s.e(6416), s.e(5997), s.e(5847), s.e(5509)]).then(() => () => s(55509))), n("clsx", "2.1.1", () => s.e(4921).then(() => () => s(4921))), n("dompurify", "2.5.9", () => s.e(62).then(() => () => s(50062))), n("lodash-es", "4.18.1", () => Promise.all([s.e(4309), s.e(5505)]).then(() => () => s(65505))), n("react-dom", "18.3.1", () => Promise.all([s.e(162), s.e(3082)]).then(() => () => s(30162))), n("react-intersection-observer", "9.16.0", () => Promise.all([s.e(3082), s.e(6320)]).then(() => () => s(26320))), n("react-jsx-parser", "2.4.1", () => Promise.all([s.e(6932), s.e(3082)]).then(() => () => s(76932))), n("react-router-dom", "6.30.3", () => Promise.all([s.e(4269), s.e(3082), s.e(4017)]).then(() => () => s(74269))), n("react", "18.3.1", () => s.e(2581).then(() => () => s(22581))), n("text-balancer", "1.0.5", () => s.e(4016).then(() => () => s(34016))), o(25136), o(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, t += "u" == (typeof(n = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return t
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var n = e[d];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, l, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (l = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == l) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == l)
                      if (n <= f) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || l < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                i.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            t = (a, r, t) => {
              var f = t ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[r]) : a[r];
              return Object.keys(f).reduce((a, r) => !a || !f[a].loaded && ((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(a, r) ? r : a, 0)
            },
            f = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, r, t, f, d) {
              var c = s.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, s.S[a], r, !1, f, d)) : e(a, s.S[a], r, t, f, d)
            })((e, d, c, n, o, b) => {
              if (!((e, a) => e && s.o(e, a))(d, c)) return f(e, c, b);
              var l, i, u = t(d, c, n);
              return r(o, u) || (i = ((e, r, t, f) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + a(f) + ")")(d, c, u, o), "undefined" != typeof console && console.warn && console.warn(i)), (l = d[c][u]).loaded = 1, l.get()
            }),
            c = {},
            n = {
              93082: () => d("default", "react", !1, [0], () => s.e(2581).then(() => () => s(22581))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => s.e(162).then(() => () => s(30162))),
              40283: () => d("default", "lodash-es", !1, [0], () => Promise.all([s.e(4309), s.e(5505)]).then(() => () => s(65505))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([s.e(5864), s.e(9988), s.e(283), s.e(2909), s.e(6416), s.e(5997), s.e(5847), s.e(7890)]).then(() => () => s(55509))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([s.e(2497), s.e(283), s.e(6241)]).then(() => () => s(68403))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => s.e(4921).then(() => () => s(4921))),
              36416: () => d("default", "react-router-dom", !1, [0], () => Promise.all([s.e(4269), s.e(4017)]).then(() => () => s(74269))),
              82199: () => d("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([s.e(5864), s.e(6583), s.e(283), s.e(3331), s.e(6416), s.e(5997), s.e(3180)]).then(() => () => s(90799))),
              17301: () => d("default", "@rsgweb/tina", !1, [0], () => Promise.all([s.e(883), s.e(986), s.e(4309), s.e(8349), s.e(4017), s.e(283), s.e(3331), s.e(2909), s.e(2199), s.e(6589), s.e(3769)]).then(() => () => s(60620))),
              91681: () => d("default", "dompurify", !1, [1, 2, 5, 9], () => s.e(62).then(() => () => s(50062))),
              42285: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => s.e(3939).then(() => () => s(26320))),
              86805: () => d("default", "@foundry/react", !1, [0], () => Promise.all([s.e(2951), s.e(2497), s.e(2954), s.e(9643), s.e(3740)]).then(() => () => s(33740))),
              10475: () => d("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([s.e(4852), s.e(1411)]).then(() => () => s(83792))),
              35643: () => d("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([s.e(3351), s.e(2066)]).then(() => () => s(42066))),
              59139: () => d("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([s.e(4255), s.e(1089)]).then(() => () => s(28699))),
              72527: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => s.e(4053).then(() => () => s(44053))),
              87486: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => s.e(4016).then(() => () => s(34016))),
              92910: () => d("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => s.e(6932).then(() => () => s(76932))),
              93673: () => d("default", "@foundry/react", !1, [0], () => Promise.all([s.e(2497), s.e(2954), s.e(9081)]).then(() => () => s(59081)))
            },
            o = {
              283: [40283],
              1270: [81270],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              5344: [86805],
              5806: [10475, 35643, 59139, 72527, 87486, 92910, 93673],
              6416: [36416],
              7301: [17301],
              8248: [91681]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(o, e) && o[e].forEach(e => {
              if (s.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete c[e], s.m[e] = r => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(c[e] = f.then(r).catch(t)) : r(f)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            s.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1089: 1,
                1274: 1,
                2860: 1,
                2954: 1,
                3113: 1,
                3351: 1,
                3740: 1,
                3769: 1,
                4053: 1,
                4411: 1,
                4453: 1,
                4852: 1,
                5344: 1,
                5806: 1,
                6150: 1,
                6792: 1,
                6936: 1,
                7469: 1,
                7807: 1,
                7818: 1,
                8248: 1,
                9081: 1,
                9807: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = s.miniCssF(e),
                  f = s.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((f = (c = d[t]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", s.nc && (d.nonce = s.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          s.f.j = (a, r) => {
            var t = s.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(199|285|83|909)|3(082|331|351)|1089|1270|4017|4852|6416|7301|8248)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = s.p + s.u(a),
                c = new Error;
              s.l(d, r => {
                if (s.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, n] = r,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) s.o(c, t) && (s.m[t] = c[t]);
                n && n(s)
              }
              for (a && a(r); o < d.length; o++) f = d[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), s.nc = void 0, s(35649), s(55974)
      })())
    }
  }
});