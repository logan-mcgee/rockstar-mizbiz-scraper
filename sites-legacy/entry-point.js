try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "49e8fcb6-b4de-4a66-927d-19a7913fda44", e._sentryDebugIdIdentifier = "sentry-dbid-49e8fcb6-b4de-4a66-927d-19a7913fda44")
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
  var f = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        f[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, r, d, c, n, o = {
            17411: (e, a, f) => {
              const t = f(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = t(f.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = f
            },
            28419: (e, a, f) => {
              (0, f(17411).w)(1)
            },
            58639: (e, a, f) => {
              "use strict";
              var t = {
                  "./bootstrap": () => Promise.all([f.e(5076), f.e(2293), f.e(7180), f.e(5117), f.e(6266), f.e(545), f.e(2229), f.e(9623), f.e(5966), f.e(1788), f.e(6088), f.e(4853), f.e(2918), f.e(2323), f.e(6565), f.e(2440), f.e(1277), f.e(9458), f.e(7145), f.e(5114), f.e(8437)]).then(() => () => f(58437)),
                  "./index": () => Promise.all([f.e(5076), f.e(2293), f.e(7180), f.e(5117), f.e(6266), f.e(545), f.e(2229), f.e(9623), f.e(5966), f.e(1788), f.e(6088), f.e(4853), f.e(2918), f.e(2323), f.e(6565), f.e(2440), f.e(1277), f.e(9458), f.e(7145), f.e(5114), f.e(9741)]).then(() => () => f(19741)),
                  "./site-routes/Bully": () => Promise.all([f.e(5076), f.e(2293), f.e(7180), f.e(5117), f.e(6266), f.e(545), f.e(2229), f.e(9623), f.e(5966), f.e(1788), f.e(6088), f.e(4853), f.e(2918), f.e(2323), f.e(6565), f.e(2440), f.e(1277), f.e(9458), f.e(7145), f.e(5114), f.e(392), f.e(6019)]).then(() => () => f(86019)),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(5076), f.e(2293), f.e(7180), f.e(5117), f.e(6266), f.e(545), f.e(2229), f.e(9623), f.e(5966), f.e(1788), f.e(6088), f.e(4853), f.e(2918), f.e(2323), f.e(6565), f.e(2440), f.e(1277), f.e(9458), f.e(7145), f.e(5114), f.e(392), f.e(9171)]).then(() => () => f(99171)),
                  "./tina": () => Promise.all([f.e(5076), f.e(2293), f.e(7180), f.e(5117), f.e(6266), f.e(545), f.e(2229), f.e(9623), f.e(5966), f.e(1788), f.e(6088), f.e(4853), f.e(2918), f.e(2323), f.e(6565), f.e(2440), f.e(1277), f.e(9458), f.e(7145), f.e(5114), f.e(392)]).then(() => () => f(392))
                },
                r = (e, a) => (f.R = a, a = f.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), f.R = void 0, a),
                d = (e, a) => {
                  if (f.S) {
                    var t = "default",
                      r = f.S[t];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[t] = e, f.I(t, a)
                  }
                };
              f.d(a, {
                get: () => r,
                init: () => d
              })
            },
            77027: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var t = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, r = 0, d = t.length; r !== a && d >= 0;) "/" === t[--d] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return f.protocol + "//" + f.host + c
              };
              Number.isInteger
            },
            93032: (e, a, f) => {
              f(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var f = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          i.r(r);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & f && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(r, d), r
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, f) => (i.f[f](e, a), a), [])), i.u = e => "js/" + {
          68: "d0bea2b6deaad49d738f8658740b251d",
          131: "85b6bd30b7ab6d1fd28a0e8bf938e6c0",
          173: "4570d9a2fcb850fcf6a8576c96165616",
          278: "362eb706930716eeda7e95f39260f3e1",
          299: "8fdf5e6dd69ec374c4867da2132d1324",
          314: "1a73134169c890099468da53b6eaca4a",
          392: "18b0e0a147dc9a21ae7274f17a68f831",
          439: "a16c277476bcce3a06aac14eb0be61f4",
          545: "84e692979b01bfc95068ed3c9da7d0a9",
          601: "ccee2c9531874bd4a001552bf335af6a",
          662: "02bff9dbe8ed3964b60d1e3aa03a061f",
          824: "871c398d33cb411d51d8c6297a2dc187",
          907: "f0588b7874f203a7ab23e0cabc3ba7d8",
          1054: "4b9bd987381d3985632dd29c1597b498",
          1057: "a55ce13003f27e1b5865ff797eeb8a65",
          1098: "4e0300b9eea64cbc36c8c1808f2ea0ff",
          1242: "7632f27b934e0a8423f138e9cacabb74",
          1277: "bbb4d0d769be397031808bc39c7e9f60",
          1673: "539ad238cd403f1404a85b22fd7c3ac7",
          1758: "38b095ccdc870f30dcbf9e971667358d",
          1785: "1ef1618551afe7a77fbb9fd0fec38f5d",
          1822: "b57f0993ef23d661b57979ef2856cbc8",
          1840: "c937ff8cbbab8586be2a80764e044c1f",
          1868: "904a2fcdfa9eda960c7921a4477cb364",
          2156: "9cddd3f3254cc856f587c0cdec12edf1",
          2169: "0a1840dba54b52c913fe0d72b4550741",
          2171: "80f8b54534509c0bc3eaa34adad143be",
          2221: "da80f100204dd640d9f44e9004b509c8",
          2234: "9c6950256f1b7bdd72f6cdba2776820a",
          2243: "8cc710e7ae0715c1c51624b321829ca1",
          2293: "a5c6e441db488398cc37bb6ac926f2d7",
          2306: "f8f72c2605b3fb0d577547fd6b697a32",
          2323: "2c00a54126e9207280ba34ec34648c75",
          2347: "4661fcb20ad2689dae3b8b3dec4d0d53",
          2365: "9876e1c3ea8c2cb9c9e06ac679f40fa2",
          2368: "6f90cc69e1578e2e7b981281c99e678d",
          2398: "1438147ab3430591ed501996c4fbc993",
          2466: "fef083072577e8210478f47781e50272",
          2583: "3ad75b504ae3c44396922b0d86bc6bbb",
          2642: "bea49075d0bee18c51fbe2a92d31f7c4",
          2678: "f1f7b317787bd7da9c85a2bfde778a51",
          2864: "fd007eebb9b3f3a94dcb2995f8995030",
          3034: "586546a1e8fb84d73c1e81aff40cd2f2",
          3197: "196526b06fbd17add09e847ef550db19",
          3343: "b7880588ec32b62990a4307e4ea49d54",
          3370: "7480415342b589828b519a01a1550356",
          3438: "8f3db125a7663558b9510317ab9e1782",
          3475: "7305407c69a6d424cb9bda2d0dd69312",
          3486: "3e775f61e6607013611cf06e6fdf9495",
          3697: "83f3944f7fc662685843c2c0e60b3826",
          3885: "f77bda75533a8f50b4017bbe119b0c81",
          3896: "2a68670c073fbf0329110563065dbd19",
          3941: "45e2cf0479ecabeaeb469b820cfc6f06",
          4011: "ce454b1662bd0cc68a0135d102049924",
          4528: "12324fdeb012337d51772341199b15e4",
          4550: "2cfc58c96016fed0ed9b130e5db8b888",
          4578: "60b53a1fbddb10bb24287c31dad253a2",
          4621: "4fd1d55f65e13c6e3cba336ac8c37c45",
          4700: "b17220f65e92716f48f1f4fb7aa17b49",
          4710: "2fa7552d3f6d56654c9fc017c771024c",
          4731: "33291590b7082815222b9be06aef2700",
          4799: "b33e178a0c45a117a0a1a830d3da5ac5",
          4851: "67fa4b81e251f700304d707273afc134",
          4861: "0a8f630b49748be3c2b147b76eb8d99a",
          4913: "216a31b51094c4e7fc48c0e5d0d8fe36",
          4964: "a89bfb0dfe75a4a98e972883ec7748ac",
          5018: "4cacf4f310de2fde1784eceec7976f72",
          5076: "d5ffaeda8c2f105b67c94975ccc68c1a",
          5114: "37069c74dd70e54a6337291d26a5d700",
          5117: "dbed17e57137cdb897f0f0d7aca076d3",
          5233: "f5798c358d3f79165230bb0b643c293e",
          5259: "67871cab05a13c9871ad59e71a8b0dc1",
          5265: "b36d6f558571508b62f6f7a90bde3818",
          5389: "73b2aca98bcbca940a4c83c6079cec77",
          5415: "81fa185cbd5b0514f622daf1f67125d6",
          5530: "5ab90c21efd78563fba5a69adba62bb5",
          5559: "4cd2ba3fcf4147d6734d66d9fd1d9d5b",
          5639: "7c00af470dba4322dc69a00dd420bab3",
          5663: "a0760b326797d52f8dc62a036f52a6f0",
          5742: "2d1171cc5b3b287cb70b6f5bf5d90c94",
          5830: "a90362149b9285189a3666ae64e85385",
          5832: "63f9f3847430ecf52a08b7e8f49c90fc",
          5859: "305068160a9b809a1ffa1b57b205eb58",
          5912: "daa005b549f885b6cea4d3bd6532e982",
          5997: "92921c7a2c21c17b9620d2fbbcf6f4b1",
          6019: "0a7ab0d208addcd749fce5df156c5d6d",
          6088: "9464c55515749345c4a1f1c0b8748790",
          6266: "de6ea443f183cf7369a8bb8f329dbc88",
          6267: "0dbfc142b4fe1680df4a6e8bea41dc10",
          6280: "a6c87aaae14d5d16095499f986956a5e",
          6285: "c5b85d5d9a5bc5e37d4c28c9a26affd8",
          6321: "615f5c78eec8c76b98043669468fd80a",
          6327: "d5dfbba7dd8c5203099a5a8bc4a73603",
          6361: "15c0398896964f86a0033abd4eba1b18",
          6471: "1d1fc8cc7f7808f4a2951f74d480f80f",
          6664: "70b4f62759f28aa37dbe28ad1373b9ed",
          6879: "0f3d8517c7245f429d752878eb6106bd",
          6891: "b4cb0d3504a5d12f978a6e0e61be6532",
          6997: "093ba58197179f2da7199a532c24ed71",
          7010: "bf0d49aedc6061f03ce8bbd8aefed520",
          7073: "2ed380f5b1d6a8193905e495524638d0",
          7180: "35cb1f1228e7fa537e8eec05f7135599",
          7407: "37f7ea90bce343ba8227e32fbe37a2c1",
          7436: "db02756621d946eabc01a16f7cac300d",
          7452: "e89be3b394dc878082934c5ca032c1c6",
          7453: "e686da397570f6d6d93aa2619ee209fd",
          7465: "0813d0e3ca8529e09f56df4f9c1cbb0e",
          7970: "2974342e289937f27c803e90b9ef4bea",
          8068: "970726c79b6b75f6cc95ff32ce52b2e9",
          8240: "2b487110dad93a017d9b89bb708998d7",
          8272: "c4a96d6e185c709933e002aab018886f",
          8325: "4000db4f504972868fc233a7916566ba",
          8391: "c386dcde1e85d17ec450baa3ccf0b23b",
          8431: "18ab5fc7482fa611d5801d176c07fdce",
          8437: "7af9d5e36a62ee7eda59c939ff81d30b",
          8659: "468357ae276f9665c56b34dd821099f7",
          8665: "6e28c60e4feb1eeb40a8042fcdb57723",
          8702: "7d7ec7ead2b91c4f9e5956d1db5b8ad0",
          8708: "7abdcc0cdb728e1919faa6e681a1872a",
          8755: "ef8446838cba38e94af8bbc3f14a125c",
          8845: "147f5337aa6f155ec9be09f27a26be7c",
          8880: "00008d7120b8d40826a0a34c1c0a6f83",
          8938: "9bcf36852e184c0f193af3c44b22f016",
          8970: "584f5e585f4c3a65e8eca3805e2059fa",
          9022: "19058fa94526ca90dc5c773516449441",
          9028: "04106afabd7c786bff31e3a78c2f4b85",
          9126: "a52e429f84128377d392b829c9f1bf27",
          9171: "550fe7910df3a6fcb13d963165af6762",
          9377: "63c6bcf3db9cde202bfe49fdc2c8e6e4",
          9587: "8ba9a6489ca23a56e541d29b1a63b8fa",
          9615: "41bcfd7e9fa950950c71092b38df6868",
          9741: "654ef31fb1104c814db978b0870afa2d",
          9760: "f5ac009f6fda2baf5a3a07fb06b7a61d",
          9936: "e77820ef9764ff0ed7e63287c96b7807",
          9987: "21bc4b5c1f554c55f017b937956f2b3a",
          9990: "b69c63d249e187abd06efa3e12213de8"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          545: "ad2a7b10f79579ef30e8a421b110cc74",
          1057: "e11267b2b9a024fdab4347cb9ada8f14",
          1785: "bde1c4e0b23cbfd27b8e58c3e9b9719f",
          3438: "e11267b2b9a024fdab4347cb9ada8f14",
          5114: "c7821584e9b8f5e7d8d657e039c4640d",
          6019: "52e55b769351b6e3f1602fe5d2baacd1",
          8437: "8711e961a261d74f8514e2dc9a33b1b2",
          8665: "cd135931d3ddd0c8c915bde00523e2a1",
          9171: "52e55b769351b6e3f1602fe5d2baacd1",
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/sites-legacy:", i.l = (e, a, f, t) => {
          if (r[e]) r[e].push(a);
          else {
            var c, n;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + f) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + f), c.src = e), r[e] = [a];
            var l = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(f)), a) return a(f)
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
          392: [17523],
          5114: [31879]
        }, n = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
            var f = i.R;
            f || (f = []);
            var t = n[e];
            if (!(f.indexOf(t) >= 0)) {
              if (f.push(t), t.p) return a.push(t.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, f, d, c, n, o) => {
                  try {
                    var b = e(f, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), r);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    r(e)
                  }
                },
                c = (e, a, r) => d(a.get, t[1], f, 0, o, r),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, (e, a, f) => e ? d(i.I, t[0], 0, e, c, f) : r(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, t) => {
            t || (t = []);
            var r = a[f];
            if (r || (r = a[f] = {}), !(t.indexOf(r) >= 0)) {
              if (t.push(r), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var d = i.S[f],
                c = "@rockstargames/sites-legacy",
                n = (e, a, f, t) => {
                  var r = d[e] = d[e] || {},
                    n = r[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (r[a] = {
                    get: f,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === f && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), n("@rsgweb/modules-core-hero", "0.0.0", () => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(1788), i.e(2918), i.e(2440), i.e(1277), i.e(1785)]).then(() => () => i(21375))), n("@rsgweb/modules-core-highlights", "0.0.0", () => Promise.all([i.e(6266), i.e(2229), i.e(1788), i.e(2918), i.e(2440), i.e(9458), i.e(9736), i.e(2368)]).then(() => () => i(32368))), n("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(2229), i.e(9623), i.e(5966), i.e(6088), i.e(4550)]).then(() => () => i(32169))), n("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5076), i.e(5117), i.e(2229), i.e(5966), i.e(1788), i.e(4853), i.e(2918), i.e(2323), i.e(1057)]).then(() => () => i(99747))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(2229), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(8702)]).then(() => () => i(58702))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("focus-trap-react", "10.3.1", () => Promise.all([i.e(1673), i.e(2229), i.e(7145)]).then(() => () => i(51673))), n("framer-motion", "10.18.0", () => Promise.all([i.e(1840), i.e(2229)]).then(() => () => i(91840))), n("framer-motion", "10.18.0", () => Promise.all([i.e(5559), i.e(2229)]).then(() => () => i(65559))), n("framer-motion", "7.10.3", () => Promise.all([i.e(5912), i.e(2229)]).then(() => () => i(75912))), n("graphql", "16.11.0", () => i.e(601).then(() => () => i(30601))), n("prop-types", "15.8.1", () => i.e(7465).then(() => () => i(97465))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), n("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), n("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var r = e => e && e.init && e.init(i.S[f], t);
                  if (a.then) return o.push(a.then(r, e));
                  var d = r(a);
                  if (d && d.then) return o.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[f] = Promise.all(o).then(() => e[f] = 1) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var t = f.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = f[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = f[1] ? a(f[1]) : [];
              return f[2] && (t.length++, t.push.apply(t, a(f[2]))), f[3] && (t.push([]), t.push.apply(t, a(f[3]))), t
            },
            a = e => {
              var f = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (f + .5) {
                t += 0 == f ? ">=" : -1 == f ? "<" : 1 == f ? "^" : 2 == f ? "~" : f > 0 ? "=" : "!=";
                for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(n = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, n);
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
            f = (a, t) => {
              if (0 in a) {
                t = e(t);
                var r = a[0],
                  d = r < 0;
                d && (r = -r - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > r && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= r) {
                        if (b != a[n]) return !1
                      } else {
                        if (d ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= r) return !1;
                    o = !1, n--
                  } else {
                    if (n <= r || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? f(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, r, d) => {
              var c = d ? (e => Object.keys(e).reduce((a, f) => (e[f].eager && (a[f] = e[f]), a), {}))(a[t]) : a[t];
              return (t = Object.keys(c).reduce((a, t) => !f(r, t) || a && !((a, f) => {
                a = e(a), f = e(f);
                for (var t = 0;;) {
                  if (t >= a.length) return t < f.length && "u" != (typeof f[t])[0];
                  var r = a[t],
                    d = (typeof r)[0];
                  if (t >= f.length) return "u" == d;
                  var c = f[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && r != c) return r < c;
                  t++
                }
              })(a, t) ? a : t, 0)) && c[t]
            },
            r = e => {
              throw new Error(e)
            },
            d = (e => function(a, f, t, r, d) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], f, !1, r, d)) : e(a, i.S[a], f, t, r, d)
            })((e, f, d, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(f, d)) return ((e, a, f) => f ? f() : ((e, a) => r("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, o);
              var b, s = t(f, d, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void r(((e, f, t, r, d) => {
                var c = e[t];
                return "No satisfying version (" + a(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + f + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(f, e, d, n, c))
            }),
            c = {},
            n = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(7180), i.e(5997), i.e(9623), i.e(1788), i.e(6088), i.e(6565), i.e(6321)]).then(() => () => i(58702))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(2293), i.e(8068), i.e(9623), i.e(5966), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              16565: () => d("default", "graphql", !1, [1, 16, 9, 0], () => i.e(601).then(() => () => i(30601))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5076), i.e(5117), i.e(5966), i.e(4853), i.e(2323), i.e(3438)]).then(() => () => i(99747))),
              4572: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              90660: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5912).then(() => () => i(75912))),
              61128: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              57145: () => d("default", "prop-types", !1, [1, 15, 8, 1], () => i.e(7465).then(() => () => i(97465))),
              2765: () => d("default", "focus-trap-react", !1, [1, 10, 2, 3], () => i.e(1673).then(() => () => i(51673))),
              82849: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(5559).then(() => () => i(65559))),
              84590: () => d("default", "@rsgweb/modules-core-hero", !1, [1, "workspace:^"], () => i.e(8665).then(() => () => i(21375))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", !1, [1, "workspace:^"], () => Promise.all([i.e(9736), i.e(9987)]).then(() => () => i(32368))),
              91082: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(4964).then(() => () => i(62583))),
              87052: () => d("default", "framer-motion", !1, [1, 10, 12, 18], () => i.e(1840).then(() => () => i(91840)))
            },
            o = {
              1277: [4572, 90660],
              1788: [81788],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4853: [44853],
              5114: [2765, 82849, 84590, 87330, 91082],
              5966: [95966],
              6565: [16565],
              7145: [57145],
              9458: [61128, 61913],
              9623: [9623],
              9736: [87052]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var f = a => {
                  c[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var r = n[e]();
                  r.then ? a.push(c[e] = r.then(f).catch(t)) : f(r)
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
            i.f.miniCss = (a, f) => {
              e[a] ? f.push(e[a]) : 0 !== e[a] && {
                545: 1,
                1057: 1,
                1785: 1,
                3438: 1,
                5114: 1,
                6019: 1,
                8437: 1,
                8665: 1,
                9171: 1,
                9736: 1
              } [a] && f.push(e[a] = (e => new Promise((a, f) => {
                var t = i.miniCssF(e),
                  r = i.p + t;
                if (((e, a) => {
                    for (var f = document.getElementsByTagName("link"), t = 0; t < f.length; t++) {
                      var r = (c = f[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((r = (c = d[t]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(t, r)) return a();
                ((e, a, f, t, r) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = f => {
                    if (d.onerror = d.onload = null, "load" === f.type) t();
                    else {
                      var c = f && f.type,
                        n = f && f.target && f.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), r(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, r, 0, a, f)
              }))(a).then(() => {
                e[a] = 0
              }, f => {
                throw delete e[a], f
              }))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          i.f.j = (a, f) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) f.push(t[2]);
              else if (/^(2(229|440|918)|9(458|623|736)|1788|4853|5966|6565|7145)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((f, r) => t = e[a] = [f, r]);
              f.push(t[2] = r);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, f => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var r = f && ("load" === f.type ? "missing" : f.type),
                    d = f && f.target && f.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")", c.name = "ChunkLoadError", c.type = r, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var t, r, [d, c, n] = f,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(f); o < d.length; o++) r = d[o], i.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(93032), i(58639)
      })())
    }
  }
});