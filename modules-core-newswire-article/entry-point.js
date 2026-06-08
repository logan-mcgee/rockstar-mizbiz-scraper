try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d49d20ca-d1cc-47df-b279-41a4a84a762a", e._sentryDebugIdIdentifier = "sentry-dbid-d49d20ca-d1cc-47df-b279-41a4a84a762a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], function(e, t) {
  var r = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(t) {
        r[t] = e[t]
      })
    }, function(e) {
      a.default = e.default || e, Object.keys(e).forEach(function(t) {
        a[t] = e[t]
      })
    }],
    execute: function() {
      e((() => {
        var e, d, f, n, o, c, l = {
            20154(e, t, r) {
              (0, r(89160).w)(1)
            },
            89160(e, t, r) {
              const a = r(51908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            35649(e, t, r) {
              r(20154)
            },
            51908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = a.length; d !== t && f >= 0;) "/" === a[--f] && d++;
                if (d !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = a.slice(0, f + 1);
                return r.protocol + "//" + r.host + n
              };
              Number.isInteger
            },
            55974(e, t, r) {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(4577), r.e(9512), r.e(8528), r.e(5733), r.e(2760), r.e(3600), r.e(986), r.e(4815), r.e(311), r.e(1462), r.e(6077), r.e(3082), r.e(4017), r.e(3331), r.e(2909), r.e(9646), r.e(6416), r.e(1270), r.e(2199), r.e(4453), r.e(5966), r.e(7301), r.e(8248), r.e(2285), r.e(9810), r.e(8657), r.e(840), r.e(1615)]).then(() => () => r(12885)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(4577), r.e(9512), r.e(8528), r.e(5733), r.e(2760), r.e(986), r.e(3082), r.e(4017), r.e(3331), r.e(2909), r.e(9646), r.e(1270), r.e(4453), r.e(5966), r.e(8248), r.e(8657), r.e(5149)]).then(() => () => r(26047)),
                  "./types": () => Promise.all([r.e(4577), r.e(9512), r.e(8528), r.e(5733), r.e(2760), r.e(3600), r.e(986), r.e(4815), r.e(311), r.e(1462), r.e(6077), r.e(3082), r.e(4017), r.e(3331), r.e(2909), r.e(9646), r.e(6416), r.e(1270), r.e(2199), r.e(4453), r.e(5966), r.e(7301), r.e(8248), r.e(2285), r.e(9810), r.e(8657), r.e(840), r.e(1615)]).then(() => () => r(21667))
                },
                d = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                f = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      d = r.S[a];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => d,
                init: () => f
              })
            },
            29441(e) {
              "use strict";
              e.exports = r
            },
            25136(e) {
              "use strict";
              e.exports = a
            }
          },
          s = {};

        function i(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = l, i.c = s, i.y = t, i.amdO = {}, i.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return i.d(t, {
            a: t
          }), t
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var a = Object.create(null);
          i.r(a);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var n = 2 & r && t;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = d(n)) Object.getOwnPropertyNames(n).forEach(e => f[e] = () => t[e]);
          return f.default = () => t, i.d(a, f), a
        }, i.d = (e, t) => {
          for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), [])), i.u = e => "js/" + {
          62: "dc3826d50d37652a724323857a9adb6e",
          162: "5c95d1a87cc4de26c3e5984380f06f46",
          311: "81174cad0c7296019dafb86c45cc60a3",
          622: "cdb1c5fea20ad7ec0ad28e52342e9086",
          784: "7957d42b613eac0f589cfdc042195577",
          799: "bc2c7a023b047afa2e6abdffcc2e5df3",
          939: "f8232d5d1c342b212da58fff363ee0fc",
          986: "2f4eeae62f2f35fa9276dedc90b6c365",
          1411: "c8349163c41ec1967f0dc7030afc6f8a",
          1462: "eea302552bb3f9a1f41a6a261b27e16a",
          1615: "b59bcd6e0761a3648b6416d4323bd3eb",
          2066: "22bee271cb8e3d0bc589fc019027eff0",
          2497: "ad5ded0392ad08184f0ee899096e4da8",
          2581: "ce8598492492c605307caeeed2bdae08",
          2631: "05247f30ba09350cdcf4c568736b7b2f",
          2760: "ace862a0468918456c3eba0845726df1",
          2837: "ad15e4c42a83df002cfa5082e2cc921d",
          2860: "829590113338724f676e094378a303ce",
          3180: "cdaa87dddd08ad0a68508ff8a7df1e35",
          3320: "726d0fb8c92a5d844cb26988d1b7316e",
          3600: "041e662a59539c5db3d2fe881acd4913",
          3631: "2dd443d774d87995184ca43bec0c460e",
          3769: "961357976c56e3d18acad7d8f223a661",
          3792: "c446bc70d32ddbfc4284abfe31a72597",
          3939: "437eaeda260285a6e08ff9f8c9ed459f",
          4016: "bc12d7680aad771175c2fbd48e068fab",
          4053: "4da6d1ccf02dea316dc4b0c11719a5e3",
          4144: "a3e78fac5e1ccdd6f1e9248ba5bdfc0d",
          4235: "3c4621abc366de33194406fd03a46999",
          4255: "9a1a6c54f11788664793885035a49198",
          4269: "2e65be410ccf25c397bc2e97570d1f4d",
          4453: "726c17f4f88272e4988db2d54ccdcb3f",
          4572: "d282cb11b11cee1b777ba136b35092cd",
          4577: "3bf80f3ce75613820b6b9b0eac59440b",
          4643: "ce3ea1a53180ff25e5804f9d10fcbe0a",
          4756: "9e179cdb7345461c70a2a25e817b568c",
          4815: "317806255b46794b710e5a9d30de214d",
          4921: "25876465a564795c92e30e6c6d075419",
          4974: "acb814879b9199a7662dfbeb5cbd98a6",
          5038: "467dd7fc0240d232310b28deeed2065d",
          5149: "7cb6f4c6b40491dc54b49886537837cf",
          5389: "a615f2c9376b98c4d48339e760d8fcd0",
          5684: "6c24885dad35931d404ba762c0f5efc7",
          5733: "09fd9763bead3781f6bb85e7c98733e9",
          5966: "dc17cafbeb716f83e174472e3feda105",
          5997: "fa05a6ad91125af7860c7b4f68ff6c1f",
          6077: "9498d71a597d7c1190b403b6fb452617",
          6150: "fdeae6d3da50f074cdf15d967e9f3db5",
          6208: "e91a0d60984f35f4af7793d820ab1ad2",
          6320: "b25e1c8dd19f359eebf8c233b662683f",
          6501: "4adc93e6cc5945cca42224e5c51423ad",
          6583: "851bd5c6106dae28b84c0cfd12c84869",
          6932: "fa457478288cd209c235d36df7014cbf",
          8277: "44f7d912cbe94730ee7f5c26895290d0",
          8349: "14442bb64128ce3b1a7ac1edfb583a02",
          8403: "90a7f99faba40b372b3fa3457e00ad1e",
          8528: "fefecef6e83d8069f74b1378b0ea3402",
          8657: "c70713f0bde9a212231107757a16aaae",
          8915: "5b3820369fede6a3b130060389773608",
          9447: "fa6ddf6ab7f10ef3edecbd2d13319013",
          9512: "e837f062dd0c305b2d38549629526a96",
          9810: "8aa107eaf315eff2df7df5d7e3a67277",
          9947: "2063f91e9fdfbb656d05d8c7480c296a",
          9988: "32ebbcd8c8baa741a275c688ea8dbe2d"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          311: "b4f3f49c91d820eb8c15e0b8d4df5a4d",
          840: "3c5835265692f76421b2950357c7c31c",
          1089: "bfe4e4109fd9c58c236be27a4498cde6",
          1462: "6375eab2647ea5ee53b8db8ebc800a29",
          1615: "89c73a1b72ff6330729a3b791e665e2d",
          2860: "fd7b09f8e1b228a3858f8fdaac4b4889",
          3351: "101537b924f4411033bd9d2d8536a01a",
          3470: "bfe4e4109fd9c58c236be27a4498cde6",
          3631: "c5961ff45ab2f26ffb7e50308f79c617",
          3769: "384cddac2173849afd90c4a73e287f5e",
          4053: "842fab69d9ed93a01dc2b024ae51b912",
          4453: "915d373fd494468e9b0648f0fc1b6314",
          4643: "7c575cc0a210038808b12a81bf37629b",
          4852: "dd3dc51d96ce54cf1d6fc8fd4da5a62f",
          5149: "c5961ff45ab2f26ffb7e50308f79c617",
          6077: "9c2f37d57c2ce7b885ba9fe7b32c039f",
          6150: "384cddac2173849afd90c4a73e287f5e",
          6208: "0d07f787c769610d9ecb363ede25f700",
          8248: "3a4070d4c77506d8955255a1ccc7b2a6",
          8657: "e79a4105235290f9d2d864ea28c87921",
          9810: "90181f5f503830695ace14869df4afa3"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), f = {}, n = "@rockstargames/modules-core-newswire-article:", i.l = (e, t, r, a) => {
          if (f[e]) f[e].push(t);
          else {
            var d, o;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                var s = c[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == n + r) {
                  d = s;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", n + r), d.src = e), f[e] = [t];
            var b = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var a = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), a && a.forEach(e => e(r)), t) return t(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = b.bind(null, d.onerror), d.onload = b.bind(null, d.onload), o && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          5149: [11438, 17523, 44019, 83166],
          8248: [31879],
          8657: [64064]
        }, c = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, t) => {
          i.o(o, e) && o[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), i.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                f = (e, r, f, n, o, c) => {
                  try {
                    var l = e(r, f);
                    if (!l || !l.then) return o(l, n, c);
                    var s = l.then(e => o(e, n), d);
                    if (!c) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, t, d) => f(t.get, a[1], r, 0, o, d),
                o = t => {
                  a.p = 1, i.m[e] = e => {
                    e.exports = t()
                  }
                };
              f(i, a[2], 0, 0, (e, t, r) => e ? f(i.I, a[0], 0, e, n, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            t = {};
          i.I = (r, a) => {
            a || (a = []);
            var d = t[r];
            if (d || (d = t[r] = {}), !(a.indexOf(d) >= 0)) {
              if (a.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                n = "@rockstargames/modules-core-newswire-article",
                o = (e, t, r, a) => {
                  var d = f[e] = f[e] || {},
                    o = d[t];
                  (!o || !o.loaded && (!a != !o.eager ? a : n > o.from)) && (d[t] = {
                    get: r,
                    from: n,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var d = i(e);
                    if (!d) return;
                    var f = e => e && e.init && e.init(i.S[r], a);
                    if (d.then) return l.push(d.then(f, t));
                    var n = f(d);
                    if (n && n.then) return l.push(n.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (o("@foundry/react", "6.1.0", () => Promise.all([i.e(4577), i.e(9512), i.e(8528), i.e(5733), i.e(8277), i.e(2760), i.e(2497), i.e(311), i.e(6208), i.e(3082), i.e(4017), i.e(1270), i.e(4643)]).then(() => () => i(26208))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(4577), i.e(9512), i.e(2497), i.e(3082), i.e(8403)]).then(() => () => i(68403))), o("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(4577), i.e(9512), i.e(8528), i.e(5733), i.e(2760), i.e(3600), i.e(3082), i.e(4017), i.e(3331), i.e(1270), i.e(4453), i.e(3351), i.e(3631)]).then(() => () => i(42066))), o("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(4577), i.e(9512), i.e(5733), i.e(2760), i.e(3600), i.e(4815), i.e(1462), i.e(3082), i.e(4017), i.e(3331), i.e(2909), i.e(6416), i.e(1270), i.e(2199), i.e(7301), i.e(2285), i.e(4255), i.e(9810), i.e(1089)]).then(() => () => i(28699))), o("@rsgweb/modules-core-group-of-items", "0.0.0", () => Promise.all([i.e(4577), i.e(9512), i.e(8528), i.e(5733), i.e(3600), i.e(3082), i.e(4017), i.e(3331), i.e(1270), i.e(4453), i.e(7301), i.e(8248), i.e(840), i.e(2860)]).then(() => () => i(44053))), o("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(3600), i.e(4815), i.e(3082), i.e(2909), i.e(2199), i.e(7301), i.e(2285), i.e(4852), i.e(3792)]).then(() => () => i(83792))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(8277), i.e(5684), i.e(6583), i.e(3082), i.e(3331), i.e(2909), i.e(9646), i.e(6416), i.e(5997), i.e(799)]).then(() => () => i(90799))), o("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(4577), i.e(986), i.e(8349), i.e(3082), i.e(4017), i.e(3331), i.e(2909), i.e(9646), i.e(2199), i.e(5966), i.e(6150)]).then(() => () => i(60620))), o("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(4577), i.e(9512), i.e(8277), i.e(5684), i.e(9988), i.e(3082), i.e(2909), i.e(9646), i.e(6416), i.e(5997), i.e(3320)]).then(() => () => i(83320))), o("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), o("dompurify", "2.5.9", () => i.e(62).then(() => () => i(50062))), o("lodash", "4.18.1", () => i.e(2631).then(() => () => i(2631))), o("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(3082)]).then(() => () => i(30162))), o("react-intersection-observer", "9.16.0", () => Promise.all([i.e(3082), i.e(6320)]).then(() => () => i(26320))), o("react-jsx-parser", "2.4.1", () => Promise.all([i.e(6932), i.e(3082)]).then(() => () => i(76932))), o("react-router-dom", "6.30.3", () => Promise.all([i.e(4269), i.e(3082), i.e(4017)]).then(() => () => i(74269))), o("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), o("text-balancer", "1.0.5", () => i.e(4016).then(() => () => i(34016))), c(25136), c(29441)), l.length ? e[r] = Promise.all(l).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var t = i.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = e => {
              var r = e[0],
                a = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                a += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, a += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return a
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                n.push(0 === o ? "not(" + c() + ")" : 1 === o ? "(" + c() + " || " + c() + ")" : 2 === o ? n.pop() + " " + n.pop() : t(o))
              }
              return c();

              function c() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var d = t[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var l, s, i = o < t.length ? (typeof t[o])[0] : "";
                  if (n >= a.length || "o" == (s = (typeof(l = a[n]))[0])) return !c || ("u" == i ? o > d && !f : "" == i != f);
                  if ("u" == s) {
                    if (!c || "u" != i) return !1
                  } else if (c)
                    if (i == s)
                      if (o <= d) {
                        if (l != t[o]) return !1
                      } else {
                        if (f ? l > t[o] : l < t[o]) return !1;
                        l != t[o] && (c = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (f || o <= d) return !1;
                    c = !1, o--
                  } else {
                    if (o <= d || s < i != f) return !1;
                    c = !1
                  } else "s" != i && "n" != i && (c = !1, o--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (n = 1; n < t.length; n++) {
                var h = t[n];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, a) : !u())
              }
              return !!u()
            },
            a = (t, r, a) => {
              var d = a ? (e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}))(t[r]) : t[r];
              return Object.keys(d).reduce((t, r) => !t || !d[t].loaded && ((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var d = t[a],
                    f = (typeof d)[0];
                  if (a >= r.length) return "u" == f;
                  var n = r[a],
                    o = (typeof n)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  a++
                }
              })(t, r) ? r : t, 0)
            },
            d = (e, t, r) => r ? r() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            f = (e => function(t, r, a, d, f) {
              var n = i.I(t);
              return n && n.then && !a ? n.then(e.bind(e, t, i.S[t], r, !1, d, f)) : e(t, i.S[t], r, a, d, f)
            })((e, f, n, o, c, l) => {
              if (!((e, t) => e && i.o(e, t))(f, n)) return d(e, n, l);
              var s, b, u = a(f, n, o);
              return r(c, u) || (b = ((e, r, a, d) => "Unsatisfied version " + a + " from " + (a && e[r][a].from) + " of shared singleton module " + r + " (required " + t(d) + ")")(f, n, u, c), "undefined" != typeof console && console.warn && console.warn(b)), (s = f[n][u]).loaded = 1, s.get()
            }),
            n = {},
            o = {
              93082: () => f("default", "react", !1, [0], () => i.e(2581).then(() => () => i(22581))),
              84017: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              13331: () => f("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(4577), i.e(9512), i.e(8277), i.e(5684), i.e(9988), i.e(2909), i.e(9646), i.e(6416), i.e(5997), i.e(939)]).then(() => () => i(83320))),
              42909: () => f("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(4577), i.e(9512), i.e(2497), i.e(784)]).then(() => () => i(68403))),
              69646: () => f("default", "lodash", !1, [1, 4, 18, 1], () => i.e(2631).then(() => () => i(2631))),
              36416: () => f("default", "react-router-dom", !1, [0], () => Promise.all([i.e(4269), i.e(4017)]).then(() => () => i(74269))),
              81270: () => f("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              82199: () => f("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([i.e(8277), i.e(5684), i.e(6583), i.e(3331), i.e(9646), i.e(6416), i.e(5997), i.e(3180)]).then(() => () => i(90799))),
              17301: () => f("default", "@rsgweb/tina", !1, [0], () => Promise.all([i.e(4577), i.e(986), i.e(8349), i.e(4017), i.e(3331), i.e(2909), i.e(9646), i.e(2199), i.e(5966), i.e(3769)]).then(() => () => i(60620))),
              91681: () => f("default", "dompurify", !1, [1, 2, 5, 9], () => i.e(62).then(() => () => i(50062))),
              42285: () => f("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(3939).then(() => () => i(26320))),
              31655: () => f("default", "@foundry/react", !1, [0], () => Promise.all([i.e(8528), i.e(8277), i.e(2497), i.e(311), i.e(6208)]).then(() => () => i(26208))),
              10475: () => f("default", "@rsgweb/modules-core-highlights", !1, [0], () => Promise.all([i.e(4852), i.e(1411)]).then(() => () => i(83792))),
              35643: () => f("default", "@rsgweb/modules-core-carousel", !1, [0], () => Promise.all([i.e(3351), i.e(2066)]).then(() => () => i(42066))),
              59139: () => f("default", "@rsgweb/modules-core-engagement", !1, [0], () => Promise.all([i.e(4255), i.e(3470)]).then(() => () => i(28699))),
              72527: () => f("default", "@rsgweb/modules-core-group-of-items", !1, [0], () => i.e(4053).then(() => () => i(44053))),
              87486: () => f("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(4016).then(() => () => i(34016))),
              92910: () => f("default", "react-jsx-parser", !1, [1, 2, 4, 1], () => i.e(6932).then(() => () => i(76932)))
            },
            c = {
              1270: [81270],
              1615: [10475, 35643, 59139, 72527, 87486, 92910],
              2199: [82199],
              2285: [42285],
              2909: [42909],
              3082: [93082],
              3331: [13331],
              4017: [84017],
              6416: [36416],
              7301: [17301],
              8248: [91681],
              9646: [69646],
              9810: [31655]
            },
            l = {};
          i.f.consumes = (e, t) => {
            i.o(c, e) && c[e].forEach(e => {
              if (i.o(n, e)) return t.push(n[e]);
              if (!l[e]) {
                var r = t => {
                  n[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = t()
                  }
                };
                l[e] = !0;
                var a = t => {
                  delete n[e], i.m[e] = r => {
                    throw delete i.c[e], t
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? t.push(n[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                311: 1,
                840: 1,
                1089: 1,
                1462: 1,
                1615: 1,
                2860: 1,
                3351: 1,
                3470: 1,
                3631: 1,
                3769: 1,
                4053: 1,
                4453: 1,
                4643: 1,
                4852: 1,
                5149: 1,
                6077: 1,
                6150: 1,
                6208: 1,
                8248: 1,
                8657: 1,
                9810: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = i.miniCssF(e),
                  d = i.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var d = (n = r[a]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === t)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (a = 0; a < f.length; a++) {
                      var n;
                      if ((d = (n = f[a]).getAttribute("data-href")) === e || d === t) return n
                    }
                  })(a, d)) return t();
                ((e, t, r, a, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) a();
                    else {
                      var n = r && r.type,
                        o = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, f.parentNode && f.parentNode.removeChild(f), d(c)
                    }
                  }, f.href = t, document.head.appendChild(f)
                })(e, d, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (t, r) => {
            var a = i.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(199|285|909)|3(082|331|351|470)|1089|1270|4017|4852|6416|7301|8248|840|9646)$/.test(t)) e[t] = 0;
            else {
              var d = new Promise((r, d) => a = e[t] = [r, d]);
              r.push(a[2] = d);
              var f = i.p + i.u(t),
                n = new Error;
              i.l(f, r => {
                if (i.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  n.message = "Loading chunk " + t + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, a[1](n)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, d, [f, n, o] = r,
                c = 0;
              if (f.some(t => 0 !== e[t])) {
                for (a in n) i.o(n, a) && (i.m[a] = n[a]);
                o && o(i)
              }
              for (t && t(r); c < f.length; c++) d = f[c], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(35649), i(55974)
      })())
    }
  }
});