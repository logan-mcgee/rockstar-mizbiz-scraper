! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d56845ac-5079-4386-848f-02da6887a5d0", e._sentryDebugIdIdentifier = "sentry-dbid-d56845ac-5079-4386-848f-02da6887a5d0")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, c, f, o = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            44857: (e, a, r) => {
              r(13218)
            },
            67884: (e, a, r) => {
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
            77600: (e, a, r) => {
              const t = r(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(2176), r.e(1780), r.e(1127), r.e(9623), r.e(306), r.e(5966), r.e(3946), r.e(7371)]).then((() => () => r(29896)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
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
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(d, c), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          131: "8e3d757b575ca2c591fb503b35484795",
          278: "48808664e49120b37c7206ccbbd10788",
          299: "c059db0b50e7e5485f2a985582252fbd",
          314: "a7de8d4dd17d22c137d904659a5d42cf",
          621: "ff352da45af7c4520c99bdf7f3b9a318",
          656: "5c6ede59a34aa7dec7188589d1b3f660",
          662: "0a20aad84cc56c0b5e2736463caee929",
          823: "64eef5c30f63852931842f0a40be3789",
          824: "6d1ddf0f59cc319194f8238b4f585a2b",
          838: "321d57a540a4158a3902d7e2afc4d5b6",
          907: "0c6f382b9044970b1ecd955f74b2fbf6",
          1054: "52dae149e62a667776f5936ee4be4db9",
          1242: "c330598f6b361d8e9f17e039636d2da8",
          1280: "f6f5d263f916edef83e7d2eb5980a776",
          1381: "ebe832a2deaf795b66678992e4260ba0",
          1780: "80040cf1018b0427bab9427e6ba96227",
          1822: "162f0c5dd2e32813a5fe869f94ebc479",
          1868: "43d16e1449a46bd3c03eca8d1abc3b13",
          1887: "e1e41e0b8d200adc75c22c2f69797cfd",
          2156: "1cdc298104e29e115f6283ddb590695e",
          2171: "7016217e581920e77759a110a26ccd6a",
          2176: "5e6a557d1fa5171f255ea8735f808c8a",
          2221: "1247e98d8120bf6a174a92f5c1a79670",
          2243: "67559821972d338ecfd29dbcedc451da",
          2347: "3038c4164fd2a3bb85793b6688ad3db6",
          2365: "544afaa21f10b7a4a37a4b867eeb1ef9",
          2398: "f5e66c9b14a4e5122da8aa3235b6b205",
          2466: "8445172e3982c389c96a6b05aca3bd4c",
          2578: "1a9792e19711d4f62f1e4f61749eae0f",
          2642: "413ef7f52ab43f6f22e219625b97b08b",
          2678: "c78caf2656c383c3aa8df45c35099420",
          2864: "4f6f1639e27f917375eae13c63a1e2b3",
          3002: "3208657c714f8d76f8bce38452500e31",
          3034: "240795fd7d8b25afebc87befb43234be",
          3041: "45f6ff2b180db0ffac4d3d46eb5819d2",
          3197: "b455b858cb10da77f4caa0031bb61536",
          3218: "42f19df1c5384be6a4b3a0b5168b384f",
          3310: "1368f5c44cae6ce5ef08cc45ea252e4e",
          3343: "fcfeb5304696591d5b84a7ba1af5840d",
          3370: "b51d77ec9f0069c113e82049fb97dedd",
          3475: "823122ba185d27d83578594112f167cf",
          3486: "04433b4459d121c38eeddc47b8320b99",
          3586: "056d7d8050e448e288e223f2d015a732",
          3663: "4488ef12e712b8526bb1ecdabed83f36",
          3672: "f87df2490803a5cf48b3ac9c828468ca",
          3697: "4be35351ddb07e369eed5090b4e3f7c0",
          3885: "ea7d385de2c68bc1ae0d5168b87a7c7a",
          3941: "759c9ed1a810292e064d90e1834d3a75",
          3946: "1324fd345292f305301b5ea9d621bd9a",
          4011: "95c7bd76f4e9058ef7252b69619c0b96",
          4105: "950f6f31f04f9e7a6e20c531d530606a",
          4153: "cd8b9c66bbda0e8f5db4a938901eae89",
          4480: "7c9a8f97803f6ed8d69ffd4c442c3346",
          4528: "c7ffed8b30a8e14cd606fce10bb8502c",
          4621: "5d030271d185e0318a5e3eaf789da9a9",
          4684: "eb55d930cb5affbfd369e38d4603ef08",
          4700: "dc673ed952faccf23de9b9ff603d36f8",
          4710: "4721fafdfd1f7402b8dbaf97933df76d",
          4731: "081d70101cad856065d0708066e6e693",
          4799: "65e0a1ad127c36c7c1660eb3a0aa88b7",
          4851: "a106831488e794511ab44de36c35d299",
          4861: "ea590b47d43f1f0faecab4057952ef75",
          4913: "dcfc127c95ac376b8acd43e8ce9e33f3",
          5018: "8c7d894a6d07a2e74c914ec02c84fbe3",
          5233: "abaa8ff20f51a96e806ef21b19281b13",
          5259: "d62402617ac5d42f8da41d0370abd9e9",
          5422: "3ae2024576de2627f60d7f7ed0551695",
          5530: "f1fdb3e0612ae407d88191ea986dfe86",
          5639: "09e2e3984337cdd77bd6931096e68dab",
          5663: "6fdc10fb1c07b9e5d2b5e2da541a4a5d",
          5734: "9aed8673cf91f82742d3d2faceb60919",
          5742: "85f0c36a2496fb61dfb64c4ba155c17b",
          5830: "caff6fc9fd9995822b9643c2238deafd",
          5832: "344b5d54475727a81e378885cd8fd42c",
          6267: "0c2a3743b4b0d2b2dde846f0a80277b3",
          6280: "bccaa263821a6ca12f6632e04aa9d108",
          6285: "7ccc6b66a1392233a26bab1718739228",
          6361: "7aca7134cf38638dc627ef6082106df6",
          6497: "d5e4c385165f741832456172aa691a20",
          6664: "189a0e6220860dd1ff3859cc4b6e2a07",
          6879: "012e12f1c3fb577e473ad44083765137",
          6891: "15b77279875abf83e282c46c0f8e64eb",
          6997: "75e9ef2613ca3e5391778783c6fe0a25",
          7010: "5feb0663a29aa7aa4b329ab646099efa",
          7073: "d7baf8f8dfda88ba3dd9d24e2aef3228",
          7353: "039ff4af770405ebad68ede2cf9233ef",
          7371: "1aaec97fcfa3c856679da1bca06e16bd",
          7436: "e567c6decf9e70440669c7c1f4ac914c",
          7452: "3a3016ce3448db9e84f8b8e87179518f",
          7453: "3f313d78d6f22905c05fe3f5fd921a00",
          7559: "9a3b08f1b586665eea39321b8313d4c7",
          7609: "c5c95a16849b236e84a00f99dfd602e8",
          7709: "09dd6c74e1d18520629c123c3687f66f",
          7727: "2473fff64499408c7f84f30ccc309135",
          7893: "667d4516e412a024f52b23fcf0c97bee",
          7895: "9a41d19bc4649049a1121346098b81a1",
          7970: "c0fff0c85003a1a8e3050a157ef90166",
          8272: "6cf45c86eff528cb577d617641c0c419",
          8275: "4e96a17cbbb8650c89ad1182c1bed9ac",
          8391: "d78acca3db0fd76775a069dbaabbdcdf",
          8457: "06f0f97ea82f1784180ec8ec33c31fe2",
          8557: "d6f6e7d4862c19af0504c6263baebe68",
          8654: "a5e5c9489b5c5d50d0ae93545979934e",
          8755: "b7996ed5aa0840f0ee030d035b260a1b",
          8880: "580df8a4e1d3900614011ecd987f4ece",
          8965: "9cc1ca4c5fb37dd9a5393287c68e184b",
          8970: "98688dd894b7b3f2cda21a076349c796",
          8994: "018e535d38f760c010d2dfd5ceec8933",
          9022: "f339d387bf86ac36bb346cf4545a3794",
          9028: "f74145b9c41096f79e6b3b882d1f6d5f",
          9090: "94f39c49b040a9a79f147a805e7657bc",
          9126: "a1602cdba6c81afad13017ac8c4ee892",
          9377: "fa217e3a09ffc76349e9f3676bad8ba7",
          9583: "57f7ff3c3fa824b60785de2bce7a6cfa",
          9615: "f277318847a0d431095155c241c3cda8",
          9936: "59cb3ea8e54bd8c447cd9979dd3d1c24",
          9990: "142d32e3a6dbf2eb09ec945971a40b9c"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          749: "450cc2b1c47be1e723f0b0d53ea4743d",
          1887: "e495a027bc9e4821a7deeca85ba93878",
          2176: "47ce5d503304c917f3893ed411e011f8",
          3310: "38ab13e8869efb65cea51e3477920dd1",
          7371: "1b6a05f8cdb2244907347e6834e933b8"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-footer:", b.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var s = n[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  f = s;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var i = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var l = b.then((e => o(e, f)), d);
                    if (!n) return l;
                    a.push(t.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, t[2], 0, 0, ((e, a, r) => e ? c(b.I, t[0], 0, e, o, r) : d()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var c = b.S[r],
                f = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = [];
              return "default" === r && (o("@foundry/react", "4.1.2", (() => Promise.all([b.e(7609), b.e(7559), b.e(2176), b.e(1780), b.e(1887), b.e(1127), b.e(2957), b.e(306), b.e(8429)]).then((() => () => b(89582))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(7559), b.e(3218), b.e(1127), b.e(838)]).then((() => () => b(35671))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(8994), b.e(7609), b.e(1780), b.e(1127), b.e(6497), b.e(9623), b.e(2957), b.e(5966), b.e(3310), b.e(3946), b.e(749)]).then((() => () => b(76261))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(8994), b.e(7709), b.e(1127), b.e(6497), b.e(9623), b.e(5966), b.e(9090)]).then((() => () => b(57895))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(8994), b.e(1127), b.e(6497), b.e(9623), b.e(8965)]).then((() => () => b(79819))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(3663), b.e(1127)]).then((() => () => b(53663))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(5422)]).then((() => () => b(65422))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(8275)]).then((() => () => b(78275))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(621)]).then((() => () => b(90621))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(4105), b.e(1127), b.e(2127)]).then((() => () => b(94105))))), o("react", "18.3.1", (() => b.e(8654).then((() => () => b(98654)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
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
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
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
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : r(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, l, s = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (l = (typeof(b = r[f]))[0])) return !n || ("u" == s ? o > d && !c : "" == s != c);
                  if ("u" == l) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == l)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || l < s != c) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            d = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, r, t, d, c) {
              var f = b.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, b.S[a], r, !1, d, c)) : e(a, b.S[a], r, t, d, c)
            },
            l = (e, a, r) => r ? r() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = n(((e, n, b, s, i, u) => {
              if (!d(n, b)) return l(e, b, u);
              var p = ((e, r, d, c) => {
                var o = c ? f(e[r]) : e[r];
                return (r = Object.keys(o).reduce(((e, r) => !t(d, r) || e && !a(e, r) ? e : r), 0)) && o[r]
              })(n, b, i, s);
              return p ? c(p) : u ? u() : void o(((e, a, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + r(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(n, e, b, i, s))
            })),
            i = n(((e, o, n, b, s, i) => {
              if (!d(o, n)) return l(e, n, i);
              var u, p = ((e, r, t) => {
                var d = t ? f(e[r]) : e[r];
                return Object.keys(d).reduce(((e, r) => !e || !d[e].loaded && a(e, r) ? r : e), 0)
              })(o, n, b);
              return t(s, p) || (u = ((e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(d) + ")")(o, n, p, s), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][p])
            })),
            u = {},
            p = {
              71127: () => i("default", "react", !1, [1, 18, 2, 0], (() => b.e(8654).then((() => () => b(98654))))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(4105), b.e(2127)]).then((() => () => b(94105))))),
              30306: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3041).then((() => () => b(65422))))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(6497)]).then((() => () => b(79819))))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(7709), b.e(6497), b.e(7895)]).then((() => () => b(57895))))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(7559), b.e(3218), b.e(8457)]).then((() => () => b(35671))))),
              82522: () => s("default", "@foundry/react", !1, [1, 4], (() => Promise.all([b.e(7609), b.e(7559), b.e(2176), b.e(1887), b.e(2957), b.e(306), b.e(8429)]).then((() => () => b(89582))))),
              20270: () => s("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(7609), b.e(6497), b.e(2957), b.e(3310)]).then((() => () => b(76261))))),
              52957: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(656).then((() => () => b(78275))))),
              18429: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3663).then((() => () => b(53663))))),
              22127: () => i("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3002).then((() => () => b(90621)))))
            },
            h = {
              306: [30306],
              1127: [71127],
              2127: [22127],
              2957: [52957],
              3946: [2918, 81788, 82522],
              5966: [95966],
              7371: [20270],
              8429: [18429],
              9623: [9623]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(h, e) && h[e].forEach((e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var t = a => {
                  delete u[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var d = p[e]();
                  d.then ? a.push(u[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                749: 1,
                1887: 1,
                2176: 1,
                3310: 1,
                7371: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
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
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(([12]12|295)7|306|5966|749|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, c = r[0],
                f = r[1],
                o = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) b.o(f, t) && (b.m[t] = f[t]);
                o && o(b)
              }
              for (a && a(r); n < c.length; n++) d = c[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(44857), b(98478)
      })())
    }
  }
}));