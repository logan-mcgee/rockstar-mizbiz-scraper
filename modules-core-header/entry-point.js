try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5d04cd41-3a63-4647-869f-62f8a6fffb3b", e._sentryDebugIdIdentifier = "sentry-dbid-5d04cd41-3a63-4647-869f-62f8a6fffb3b")
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
        var e, r, t, d, c, f, n = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            72892(e, a, r) {
              "use strict";
              var t = {
                  "./core": () => Promise.all([r.e(3400), r.e(9512), r.e(4086), r.e(4637), r.e(1270), r.e(3517), r.e(2909), r.e(6629)]).then(() => () => r(80917))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            }
          },
          o = {};

        function i(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var r = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = n, i.c = o, i.y = a, i.amdO = {}, i.n = e => {
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
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          162: "98537fb8e5ac216de8695c8b3f8e12a8",
          229: "4eaf6d0baa495575d2a8f9817ec8baee",
          595: "3a6614220a3a2acd89306ad6d6e564da",
          622: "89b676c8ea66afa618dddb15240cc17d",
          784: "3cedc6bfb659f1d04b5e76c6ec0a382a",
          818: "b2f6102645b89e8c27eefa6416174412",
          1010: "9e4352669f66c28aaad17b3f37973536",
          1338: "d5d10fba652b7a5fa34f84ddf3959faa",
          1421: "8ff133d6d170274c34428a516f8bbf8d",
          1495: "523057443ed5d0fe223382fc72fec2b8",
          1589: "10e951a0be96c53801077f8718c40125",
          1631: "6648534c490d368c69c0a928d524e8dd",
          1924: "6795b42eee45fb294fabd995e949b584",
          2052: "333da64aa17c673339f259a1f309b0f0",
          2080: "7ad79d9f2cd47f3f046e7b537d7a9120",
          2174: "0c1e74ad9581d85209b5a104497dea84",
          2463: "401ca8f7e84612cc496ccc61355fd499",
          2497: "c83279aabce9dad6b8796356592eabf5",
          2559: "c4bfaed1585e146621e34ea441b6e79b",
          2575: "990b95ab8b804f7b669e1cd1624c5846",
          2581: "8bea1bbe038889c50c6d9e777c2fe7c0",
          2760: "5fc56314d3fa3ea0fa0c722d6507a6af",
          2823: "2de7039e6482fce812444dc177c21c54",
          2837: "f8bf1575db0290d254ac77dfa4d20f13",
          2976: "c1e753a15c54fe2457bb038d67a7eac1",
          3135: "8f12327b257b6075892d019b753e98a3",
          3400: "d8e22844a7dc0d9e40292d4a83655c5a",
          3529: "491754a695db505fae294756f3c208c5",
          3541: "bd132ef19e03ff67f68ffd8323d013a0",
          3776: "c40d8b11102f04bce792509d00fb8c1c",
          3802: "d50c1781938be01541d5bca7198c09a5",
          3866: "4a6c8d2556dfd1ae972c1a8bfc7c1cce",
          3876: "5b8f85e0e96049a4350ec1e21de4b25e",
          3889: "06892a7fb664332b56c8144c162a27bd",
          3896: "b553e13c07d6ceedb1f924afbed66f11",
          4086: "cc079df7c04aa68f329c1aa254cfbdaa",
          4144: "d779a39ac6d0c193f974e4d7b7991f2e",
          4235: "a51805c28025654f9d84eebd64b2505d",
          4446: "4feacc81e0613c8683dce93a4acacd23",
          4459: "ca9364866754bc8e9e8fd9dd5b0a1d88",
          4555: "b2c0b7cd1e0c349e65464df693051a80",
          4572: "d18c2916615bbc98e44d5c198703e9d5",
          4712: "09516bc48c33014c47a8e220cf83b2ff",
          4756: "f55226c5d1d13481afec787bf2ca5671",
          4844: "f2dd1672ccc37a4e4d19a6edb87ff3d8",
          4921: "e6672d0b4c5ff22056dcda1ed73ba42e",
          4956: "b5ffd38d925e2320e7dc4619654045d0",
          4974: "2f8ade9c48c514ebc1891b27651c6aab",
          5038: "fa8e46c83b552c5ce5bd8019708a40ae",
          5047: "220457aff7d161d1a6835fa93bd8ecf6",
          5132: "bd3333afec2fe901c9990aefa1967d86",
          5204: "55498a8d8034e591180097b9b664adfa",
          5389: "d9f3e712d451d04eb899c03140675428",
          5860: "cca7ed73c446aac01d9e53662d2e568c",
          5922: "bb4cf8dba29a62a274de49f597687116",
          6109: "abdd563d8745ab9450e6bea5118e9798",
          6233: "3409d4a62fe2cc2e9dc33524ce160f66",
          6260: "3a08985047d1e20ac0d52d7997aaa95f",
          6378: "6eef84db54f0eac742cf9b5f6d429bc3",
          6406: "2e89dbf11ac1dab2d374ba1f10259123",
          6501: "5c2664e41dfcb967ef1353ef30ec1533",
          6629: "7c09b1c4639e96beb81810d805365adf",
          6659: "75cd785d7395b70aa0811c5dbe959d38",
          6663: "33f4a69af9c03a5529b7496d1749f81e",
          6809: "a99b6f6bc5267194af0f35ee6782fd44",
          6883: "803828658c703e3441ff6c5e8885137b",
          6936: "811d565aa7f36c267ddfa66a0abdc7fb",
          7047: "72f1c2c0fc639535eb5222da327b0bd1",
          7160: "c137d0512d2fbe2b9fd439a451fdef0e",
          7240: "9940537bfa45060a6f3f45baf27ffc0b",
          7428: "dd9e0adb94188cec924ae42b5077949b",
          8295: "3cc13d886b310de015037497d2b4b292",
          8403: "4cc580147e0b87ee0b5d9979e2dec855",
          8518: "8b3c3e94b63fb3a8bf84da51c06f6277",
          8566: "d69535a1126fa976c6e922590cc7f7c7",
          8614: "dc5b622bfb0efb9e6158e9755b4b61a8",
          8637: "f39ecdb2497865c97dfde7b34548511f",
          8819: "daf41dd06052cb275561297eae890fe9",
          8915: "dcf400edf937cd032e1ae3924acfb020",
          8957: "1f18909d6f126755915fc9a993087b95",
          9067: "3faa030c73117942ee39f16a381d524f",
          9190: "9412802c2bbade300835749b3dcbf1c0",
          9264: "478d4fd055dfc81d8441807fc48a0a36",
          9447: "a755d8c7e19ebf0a20960d24b4c77ad6",
          9512: "fb5241d9d506c4da1161046e740517bb",
          9793: "8093df90f2a0e25cde355e8036351690",
          9947: "0171686ca346a0a6d9e216e9ebbf0add"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1589: "418522d0d12f72d80b558f9733dd6579",
          2713: "a918c070930a0014e79e0865fe7f82e9",
          3400: "e9b0ca5c9fbce7a4ca9e364bfe93b5f9",
          4827: "a918c070930a0014e79e0865fe7f82e9",
          5094: "a918c070930a0014e79e0865fe7f82e9",
          6629: "6cf2cfa51258f7bbc33f7ef4120df583",
          7208: "a918c070930a0014e79e0865fe7f82e9",
          7725: "9605e4661b50b9d4fc907ee456d15b70",
          8518: "07b9e06ab02239d83522449d9cad2a65",
          8566: "410e8856ca807ef4d9eff2cc3d023182",
          8637: "9605e4661b50b9d4fc907ee456d15b70"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-header:", i.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), l = 0; l < o.length; l++) {
                var b = o[l];
                if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == d + r) {
                  f = b;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var s = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, n, o) => {
                  try {
                    var i = e(r, c);
                    if (!i || !i.then) return n(i, f, o);
                    var l = i.then(e => n(e, f), d);
                    if (!o) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => c(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, n, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/modules-core-header",
                n = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : f > n.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                o = [];
              switch (r) {
                case "default":
                  n("@foundry-int/utils", "6.1.0", () => Promise.all([i.e(9512), i.e(3866), i.e(1270)]).then(() => () => i(93866))), n("@foundry/icons", "6.1.0", () => Promise.all([i.e(2760), i.e(4637), i.e(3570), i.e(8637)]).then(() => () => i(32760))), n("@radix-ui/react-accordion", "1.2.12", () => Promise.all([i.e(1010), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(9793)]).then(() => () => i(81010))), n("@radix-ui/react-dialog", "1.1.15", () => Promise.all([i.e(5860), i.e(8819), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(1172), i.e(2174)]).then(() => () => i(88819))), n("@radix-ui/react-focus-scope", "1.1.7", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(3876)]).then(() => () => i(83876))), n("@radix-ui/react-focus-scope", "1.1.8", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(4956)]).then(() => () => i(4956))), n("@radix-ui/react-id", "1.1.1", () => Promise.all([i.e(4637), i.e(6883)]).then(() => () => i(96883))), n("@radix-ui/react-navigation-menu", "1.2.14", () => Promise.all([i.e(5860), i.e(9067), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(4293), i.e(4555)]).then(() => () => i(79067))), n("@radix-ui/react-popover", "1.1.15", () => Promise.all([i.e(5860), i.e(8295), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(1172), i.e(1421)]).then(() => () => i(41421))), n("@radix-ui/react-portal", "1.1.10", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(9190)]).then(() => () => i(29190))), n("@radix-ui/react-portal", "1.1.9", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(5204)]).then(() => () => i(2823))), n("@radix-ui/react-slot", "1.2.3", () => Promise.all([i.e(4637), i.e(2976)]).then(() => () => i(2976))), n("@radix-ui/react-slot", "1.2.4", () => Promise.all([i.e(4637), i.e(8957)]).then(() => () => i(38957))), n("@radix-ui/react-use-controllable-state", "1.2.2", () => Promise.all([i.e(4637), i.e(2463)]).then(() => () => i(12463))), n("@radix-ui/react-visually-hidden", "1.2.3", () => Promise.all([i.e(4637), i.e(4017), i.e(9394), i.e(5047)]).then(() => () => i(45047))), n("@radix-ui/react-visually-hidden", "1.2.4", () => Promise.all([i.e(4637), i.e(4017), i.e(7937), i.e(5922)]).then(() => () => i(3541))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(2080), i.e(9512), i.e(2497), i.e(4637), i.e(8403)]).then(() => () => i(68403))), n("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([i.e(2080), i.e(6260), i.e(1589), i.e(3400), i.e(3135), i.e(4637), i.e(4017), i.e(7793), i.e(7937), i.e(3570), i.e(4375), i.e(1270), i.e(8566), i.e(3517)]).then(() => () => i(28566))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(9512), i.e(5132), i.e(4637), i.e(7240), i.e(2909), i.e(2559)]).then(() => () => i(77240))), n("@vanilla-extract/recipes", "0.5.7", () => Promise.all([i.e(6260), i.e(8614)]).then(() => () => i(78614))), n("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), n("framer-motion", "12.38.0", () => Promise.all([i.e(6663), i.e(4637), i.e(6936)]).then(() => () => i(36663))), n("gsap", "3.12.5", () => i.e(3529).then(() => () => i(93529))), n("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(4637)]).then(() => () => i(30162))), n("react-remove-scroll", "2.7.2", () => Promise.all([i.e(1924), i.e(4637)]).then(() => () => i(31924))), n("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), n("spatial-navigation-polyfill", "1.3.1", () => i.e(4446).then(() => () => i(54446)));
                  break;
                case "header":
                  n("@foundry/react", "6.1.0", () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(1589), i.e(8518), i.e(3400), i.e(3135), i.e(3776), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(3570), i.e(4293), i.e(4375), i.e(1270), i.e(9167), i.e(7208)]).then(() => () => i(73776))), n("@foundry/react", "6.1.0", () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(1589), i.e(8518), i.e(3400), i.e(2497), i.e(1631), i.e(4637), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(3570), i.e(4293), i.e(4375), i.e(1270), i.e(9167), i.e(2713)]).then(() => () => i(91631)))
              }
              return e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var t = 0;;) {
                if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                var d = a[t],
                  c = (typeof d)[0];
                if (t >= r.length) return "u" == c;
                var f = r[t],
                  n = (typeof f)[0];
                if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                if ("o" != c && "u" != c && d != f) return d < f;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(n = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : r(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var i, l, b = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (l = (typeof(i = r[f]))[0])) return !o || ("u" == b ? n > d && !c : "" == b != c);
                  if ("u" == l) {
                    if (!o || "u" != b) return !1
                  } else if (o)
                    if (b == l)
                      if (n <= d) {
                        if (i != a[n]) return !1
                      } else {
                        if (c ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != b && "n" != b) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || l < b != c) return !1;
                    o = !1
                  } else "s" != b && "n" != b && (o = !1, n--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                s.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && i.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            n = e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            },
            o = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            l = n((e, r, t, n, i) => d(r, t) ? c(((e, r, t) => {
              var d = t ? f(e[r]) : e[r];
              return (r = Object.keys(d).reduce((e, r) => !e || a(e, r) ? r : e, 0)) && d[r]
            })(r, t, n)) : o(e, t, i)),
            b = n((e, n, i, l, b, s) => {
              if (!d(n, i)) return o(e, i, s);
              var u, h = ((e, r, t) => {
                var d = t ? f(e[r]) : e[r];
                return Object.keys(d).reduce((e, r) => !e || !d[e].loaded && a(e, r) ? r : e, 0)
              })(n, i, l);
              return t(b, h) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(n, i, h, b), "undefined" != typeof console && console.warn && console.warn(u)), c(n[i][h])
            }),
            s = {},
            u = {
              4637: () => b("default", "react", !1, [1, 18, 2, 0], () => i.e(2581).then(() => () => i(22581))),
              81270: () => b("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              13517: () => b("default", "framer-motion", !1, [1, 12, 38, 0], () => i.e(6663).then(() => () => i(36663))),
              42909: () => b("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(2080), i.e(2497), i.e(784)]).then(() => () => i(68403))),
              8723: () => l("header", "@foundry/react", !1, () => Promise.all([i.e(5860), i.e(2080), i.e(6260), i.e(8295), i.e(1589), i.e(8518), i.e(2497), i.e(1631), i.e(4017), i.e(9394), i.e(7793), i.e(7937), i.e(1172), i.e(3570), i.e(4293), i.e(4375), i.e(9167), i.e(5094)]).then(() => () => i(91631))),
              13331: () => b("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(5132), i.e(7240)]).then(() => () => i(77240))),
              37116: () => b("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([i.e(2080), i.e(6260), i.e(1589), i.e(3135), i.e(4017), i.e(7793), i.e(7937), i.e(3570), i.e(4375), i.e(8566)]).then(() => () => i(28566))),
              19563: () => b("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([i.e(4017), i.e(7937), i.e(3541)]).then(() => () => i(3541))),
              59236: () => b("default", "@foundry-int/utils", !1, [0], () => Promise.all([i.e(9512), i.e(3866), i.e(1270)]).then(() => () => i(93866))),
              84017: () => b("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              19394: () => b("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => i.e(595).then(() => () => i(2976))),
              20640: () => b("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => i.e(9264).then(() => () => i(96883))),
              80692: () => b("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => i.e(4844).then(() => () => i(12463))),
              27351: () => b("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => i.e(1924).then(() => () => i(31924))),
              45108: () => b("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => i.e(1495).then(() => () => i(83876))),
              73463: () => b("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => i.e(2823).then(() => () => i(2823))),
              27937: () => b("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => i.e(1338).then(() => () => i(38957))),
              84293: () => b("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => i.e(7428).then(() => () => i(45047))),
              46929: () => b("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([i.e(5860), i.e(8295), i.e(9394), i.e(1172), i.e(3802)]).then(() => () => i(41421))),
              66760: () => b("default", "@foundry/icons", !1, [0], () => Promise.all([i.e(2760), i.e(7725)]).then(() => () => i(32760))),
              80676: () => b("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([i.e(5860), i.e(8819), i.e(9394), i.e(1172)]).then(() => () => i(88819))),
              33920: () => b("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([i.e(5860), i.e(9067), i.e(9394), i.e(4293)]).then(() => () => i(79067))),
              34364: () => b("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => i.e(6809).then(() => () => i(29190))),
              39080: () => b("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => i.e(2575).then(() => () => i(4956))),
              47584: () => l("header", "@foundry/react", !1, () => Promise.all([i.e(5860), i.e(8295), i.e(8518), i.e(3776), i.e(9394), i.e(1172), i.e(4293), i.e(9167), i.e(4827)]).then(() => () => i(73776))),
              58754: () => b("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => Promise.all([i.e(1010), i.e(9394)]).then(() => () => i(81010))),
              59066: () => b("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => i.e(4446).then(() => () => i(54446))),
              35812: () => b("default", "gsap", !1, [0], () => i.e(3529).then(() => () => i(93529))),
              39646: () => b("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => i.e(6233).then(() => () => i(78614)))
            },
            h = {
              1172: [27351, 45108, 73463],
              1270: [81270],
              2909: [42909],
              3517: [13517],
              3570: [19563, 59236],
              4017: [84017],
              4293: [84293],
              4375: [46929, 66760, 80676],
              4637: [4637],
              6629: [8723, 13331, 37116],
              7793: [20640, 80692],
              7937: [27937],
              8566: [33920, 34364, 39080, 47584, 58754, 59066],
              9167: [35812, 39646],
              9394: [19394]
            },
            p = {};
          i.f.consumes = (e, a) => {
            i.o(h, e) && h[e].forEach(e => {
              if (i.o(s, e)) return a.push(s[e]);
              if (!p[e]) {
                var r = a => {
                  s[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                p[e] = !0;
                var t = a => {
                  delete s[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = u[e]();
                  d.then ? a.push(s[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1589: 1,
                2713: 1,
                3400: 1,
                4827: 1,
                5094: 1,
                6629: 1,
                7208: 1,
                7725: 1,
                8518: 1,
                8566: 1,
                8637: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            4295: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(35(17|70)|4((01|63|82)7|293|375)|7(208|725|793|937)|(50|93)94|1172|1270|2713|2909|9167)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, n] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                n && n(i)
              }
              for (a && a(r); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(35649), i(72892)
      })())
    }
  }
});