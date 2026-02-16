try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6ca8d0be-54bb-4164-bf89-b079d1cfa5d2", e._sentryDebugIdIdentifier = "sentry-dbid-6ca8d0be-54bb-4164-bf89-b079d1cfa5d2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, f, d, c, n, o = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            58639: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9704), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(8437)]).then(() => () => r(58437)),
                  "./index": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9704), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(9741)]).then(() => () => r(19741)),
                  "./site-routes/Bully": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9704), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(392), r.e(6019)]).then(() => () => r(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9704), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(392), r.e(9171)]).then(() => () => r(99171)),
                  "./tina": () => Promise.all([r.e(5076), r.e(2293), r.e(7180), r.e(5117), r.e(6266), r.e(9704), r.e(2229), r.e(9623), r.e(5966), r.e(1788), r.e(6088), r.e(8429), r.e(2918), r.e(2323), r.e(6565), r.e(2440), r.e(1277), r.e(9458), r.e(7145), r.e(38), r.e(392)]).then(() => () => r(392))
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
            77027: (e, a, r) => {
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
            93032: (e, a, r) => {
              r(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          38: "4365061a52c5296c7e78e372258bfe26",
          68: "e329d3a40c0e8c4e310f50bc1d79e170",
          131: "32d94a6cd0c1c9a013dedb014fedf714",
          173: "682ed3c3f760813137ad8914a2caba4e",
          278: "e83e22aac87d4d4c2b6bd1383fc6c056",
          299: "fed2adaf632dbaa41feefe2bac02017d",
          314: "240b568c3de684309ef468cae2e9184e",
          392: "cc6d2513e7f75a50108dcfa2753b3416",
          439: "a1e53d5c23baf3a2951939c98dc3e7b5",
          601: "25f15b2b53f15be0ca7826e3aaa52530",
          662: "94c70a5bf6dadb8a01e7593f4aeac5f0",
          824: "b052c09d0374daf6c66a51a7326d6ffe",
          907: "cb134438fc7b98a86e334a9b9fcca273",
          1054: "824c5495a63ea1ac9b4c43e02824b6fc",
          1057: "97c16f924a1827c3d5478f0da86bca13",
          1098: "edeee1747332d9ed685cbc16517b1d83",
          1242: "a867444402bc412f3402f678e13da052",
          1277: "da68c6c64914ba5c78c837cf021b4c64",
          1673: "c0057e264bf518f937d8ef89223cc72b",
          1758: "09e3e87078a244e6b6ae56d5967aecae",
          1785: "d9e20d3b92de1873944800fbdc3784e1",
          1822: "1f14c5085a4c25fd482e325204dbcabc",
          1840: "e5be4f8a77ffb421837253a66b154a49",
          1868: "b9d115936a15327216fa82fda621d1be",
          2156: "7ae52dbaada9fab3349c508cb5680a6e",
          2169: "2715b699ab0dca8ab036a2a33cccce3f",
          2171: "75068a77728a61629d47c0e3841f29c0",
          2221: "730f46a40d6df4a300b2c6b29383ab8a",
          2234: "8ee90110be9caa6811e6ec5d0bf63141",
          2243: "165abd66ae9c75857098deb59ada2ec9",
          2293: "b247fa7d3d0fe49f51614da6e95ceb61",
          2306: "05cf365a49204eb5ba8b924f6aef491a",
          2323: "b713fff86841f7441377b62e905aef7a",
          2347: "1e2a60ebfa4ae9855650740470f35245",
          2365: "0c01860e64847c21f43ba7eb59fcb4b8",
          2368: "9a2b09fec85aff842365fc6ba80b1fb2",
          2398: "f420a169c527b172043b1b475e419f6c",
          2466: "274543d35dc372c2a4c423b3283ff002",
          2642: "6c4d32a582c52ecc8e1b2d13f0d6b9ed",
          2678: "31a5e1eaf21307060ad4801d1c7a800d",
          2864: "b88824f9f7974e59686bc4f44bd6c378",
          3034: "063d2b747750ff02e0938c527715ed06",
          3197: "244530546eae42d21b381791583cf0f7",
          3343: "295e4a0818ae972c8a87e694e8011c05",
          3370: "5d5e466a5e7092972a834ea6d0d3a77b",
          3438: "714ae16c755d0a0d56722cfd272a6d8d",
          3475: "114587da86d1ff7f5f00d8d67ca2ca79",
          3486: "64b9965319ff0d58199a1c7a318a50d1",
          3697: "64b98ec68f900195193e70842a551475",
          3885: "68226f0b29d85be85491a90f70e8ca96",
          3896: "9d98d96bfd53692aed5280b4043ce4b6",
          3941: "8f9c9675293e1a434ad678fda459e895",
          4011: "a13b6726387d5fcb1de6361650acc12c",
          4528: "364fa8eaef07dd4c80a15968ad25355d",
          4550: "7d0ac2619c5bc1c7c3471737540da6a2",
          4578: "4af2a87b84b1e138361aabba4b0f384d",
          4621: "5bc44c274fd53c82386161c909299d20",
          4700: "e232fbe4ef21214031ecd5252878e3d9",
          4710: "6e5d33cf86143219d9a0db972c548a08",
          4731: "b2397580d8a6a8c29390a571b6d6520b",
          4799: "fca4070e79be0b1a28dfd9913b746573",
          4851: "b8f4261ef39d37944a372add8bdee8c5",
          4861: "d6118f97c136e6581a3cc886ccb9ca82",
          4913: "f15bea882a6291830bd22990bd06ad1f",
          5018: "b0f4d8620b7f6060cb249c3d61b3a043",
          5076: "3077d6f26cc9c75f1e06496ecd5bf050",
          5117: "bff96baa203f568c63f3a46f8fdc4721",
          5233: "c03065947af303dde3dd3851fdb9975f",
          5259: "bd7089679482e5f86bedc636448f93f6",
          5265: "d74a35d9e95317677f050e2ab72a9cbe",
          5389: "c542162939be246767a382e1eb075eea",
          5415: "dd5d323d9f61036ec5b1f3d6e5a0798e",
          5530: "c6341cd35187f0acac6df1525deb7cca",
          5559: "c5ea00ea9cf61159881cbacc0676b0fd",
          5639: "857745e447e26b22d8097a8b2613af8c",
          5663: "29bfed76d4ee4d142291986de457a6a0",
          5742: "064ae45b57e6530f0d7711ad5a59c16d",
          5830: "e2d33d0519eb9682321365a6ef54498a",
          5832: "fcf63ef3bdaa91d63e8ecec40b624c00",
          5859: "e50e7b8041c9d8b9b57dba26c30b1c4e",
          5912: "e5fdf2a3afa07e09a1a435a708a60df8",
          5997: "2edc79485d47515c066ad2e259b4ca40",
          6019: "a38c7eeaf05582aaec855e11239ccac7",
          6088: "79b958ec689186b352b93741659a0ea7",
          6266: "f2335c3329c023045c8c5232b2abe751",
          6267: "26dcdfdb316e487b8547ca6bf8b211b3",
          6280: "56267ef6a2caf014744fb2a99319a88d",
          6285: "fae6635c85747f4ac1ac790c1bef3f7d",
          6321: "5d0c5cc71ee108107605ae5f4098f5d2",
          6327: "080605160d7c2b818663821e550ac7ab",
          6361: "e8ca6fcb2d546c826894df968b1c4ddb",
          6471: "692468f6c8e9d883944f704f3793f66f",
          6664: "9510043066cc90e250897f2a4c3b9ed4",
          6879: "2e69c5d5dd6c09d77f48900b088f64c6",
          6891: "820f624ba74cc017623c5219f8380132",
          6997: "8f01750ba9e9bf0989d59fabbf0839c4",
          7010: "f02012baaafbdaefa6ee1b770fc31a14",
          7073: "729c33f81a7412edbff5f21d711ee7d2",
          7180: "525f48f3b2db6181b73ca1eacf115a92",
          7407: "3305d5fe4360604d877d83952ccd7bdb",
          7436: "0d8ba5be369f36e522e656ea78c34e40",
          7452: "a93f050fc8418e50215d50319c344e85",
          7453: "557161e50b8dae3d168a7f3b445a46df",
          7465: "ceb5bf6a9e83e41f36e20157f33433ee",
          7970: "337d85b09d830f29af80be020807eff6",
          8068: "4bd48931f02be56da31783320461defc",
          8240: "f8c6b257b95d305e1daa471ae515f587",
          8272: "e40d6514b7a69006a2c209a7d36d398e",
          8325: "6dff4148bda96affbd40cd6563e67595",
          8391: "50fab1f38987bec094cf1e806b683b8d",
          8431: "a11395227e53b82155b4325672e2ad8d",
          8437: "a1e9f023e3c7344d66d1602d3e1cc01a",
          8659: "fc981932e1d6a2c45202d5286ea09710",
          8665: "ec7c63d5f1a23facd6b94e0f2fcf5152",
          8702: "4261588c374445414aecbcf3023ae964",
          8708: "0b6fb5f920695c8a870ab36b0296fa69",
          8755: "b0bd8c98f15c4fe2265a317c9ba05db2",
          8845: "ab6e35a36887958842864b7849e4d43e",
          8880: "6ef357b79be54952fad962e33d43c000",
          8938: "7acf286e4e096f6cd517464671c9076a",
          8970: "326b0ecc737d70eefec48bc5c07efa75",
          9022: "d77dc95b2f10b7caf188c4cce80f2550",
          9028: "789fb64020f3ed37fb20e5627d03d63d",
          9126: "082f2710fd737e168fedc9c65ca40156",
          9171: "050b83589c3b10b2ba0a877227b14065",
          9377: "694dd8aa3f0682d948e203cd3267104e",
          9587: "e4fb5865c88950e04990774ec20b4d1c",
          9615: "9c7fabe4a9f1ef7b9d8b30bbb8f959c4",
          9704: "17f4a43ae1dafa3041448f0ec6a9d533",
          9741: "fe7e4d405a28027bd6397bdf745342b7",
          9760: "34671373b76a27463cf021cb53214a6f",
          9936: "16f43da12b28e5bcb0cb102997e7c5cd",
          9987: "95b14138c143e56fc9740db233b0aa3c",
          9990: "bef7783332c877da11e3e4f05b14d792"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          38: "8ed26b85cf8a64ec4ab10f5e0c2fdcec",
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "bde1c4e0b23cbfd27b8e58c3e9b9719f",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "ece3a695297467904302d480ff424957",
          8665: "cd135931d3ddd0c8c915bde00523e2a1",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
          9704: "5d55dc4d53fe506b7afd60db683268bb",
          9736: "81bb14ac88f3a651365e4427a5b9bac9"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
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
          38: [31879],
          392: [17523]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, (e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                c = "@rockstargames/sites-legacy",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(8429), i.e(2918), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then(() => () => i(51673))), n("framer-motion", "10.18.0", () => Promise.all([i.e(1840), i.e(2229)]).then(() => () => i(91840))), n("framer-motion", "10.18.0", () => Promise.all([i.e(5559), i.e(2229)]).then(() => () => i(65559))), n("framer-motion", "7.10.3", () => Promise.all([i.e(5912), i.e(2229)]).then(() => () => i(75912))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(8429)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return o.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then(() => e[r] = 1) : e[r] = 1
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
                var f = a[t],
                  d = (typeof f)[0];
                if (t >= r.length) return "u" == d;
                var c = r[t],
                  n = (typeof c)[0];
                if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                if ("o" != d && "u" != d && f != c) return f < c;
                t++
              }
            },
            r = e => {
              var a = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, t += "u" == (typeof(n = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return t
              }
              var c = [];
              for (d = 1; d < e.length; d++) {
                var n = e[d];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : r(n))
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
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
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
                    if (n <= f || i < s != d) return !1;
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
            f = (e, a) => e && i.o(e, a),
            d = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}),
            n = e => {
              throw new Error(e)
            },
            o = e => function(a, r, t, f, d) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, f, d)) : e(a, i.S[a], r, t, f, d)
            },
            b = (e, a, r) => r ? r() : ((e, a) => n("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = o((e, o, i, s, l, u) => {
              if (!f(o, i)) return b(e, i, u);
              var h = ((e, r, f, d) => {
                var n = d ? c(e[r]) : e[r];
                return (r = Object.keys(n).reduce((e, r) => !t(f, r) || e && !a(e, r) ? e : r, 0)) && n[r]
              })(o, i, l, s);
              return h ? d(h) : u ? u() : void n(((e, a, t, f, d) => {
                var c = e[t];
                return "No satisfying version (" + r(f) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(o, e, i, l, s))
            }),
            l = o((e, n, o, i, s, l) => {
              if (!f(n, o)) return b(e, o, l);
              var u, h = ((e, r, t) => {
                var f = t ? c(e[r]) : e[r];
                return Object.keys(f).reduce((e, r) => !e || !f[e].loaded && a(e, r) ? r : e, 0)
              })(n, o, i);
              return t(s, h) || (u = ((e, a, t, f) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + r(f) + ")")(n, o, h, s), "undefined" != typeof console && console.warn && console.warn(u)), d(n[o][h])
            }),
            u = {},
            h = {
              62229: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(6321)]).then(() => () => i(58702))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              16565: () => s("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601))),
              92440: () => s("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(8429), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              4572: () => s("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              90660: () => s("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5912).then(() => () => i(75912))),
              61128: () => s("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              61913: () => s("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              57145: () => s("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              2765: () => s("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              82849: () => s("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5559).then(() => () => i(65559))),
              84590: () => s("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], () => i.e(8665).then(() => () => i(21375))),
              87330: () => s("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], () => Promise.all([i.e(9736), i.e(9987)]).then(() => () => i(32368))),
              87052: () => s("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(1840).then(() => () => i(91840)))
            },
            p = {
              38: [2765, 82849, 84590, 87330],
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              8429: [18429],
              9458: [61128, 61913],
              9623: [9623],
              9736: [87052]
            },
            m = {};
          i.f.consumes = (e, a) => {
            i.o(p, e) && p[e].forEach(e => {
              if (i.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var t = a => {
                  delete u[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = h[e]();
                  f.then ? a.push(u[e] = f.then(r).catch(t)) : r(f)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                38: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9704: 1,
                9736: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  f = i.p + t;
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
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = r => {
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
            8106: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|440|918)|9(458|623|736)|1788|5966|6565|7145|8429)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
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
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});