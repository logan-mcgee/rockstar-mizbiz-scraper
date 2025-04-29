! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59165877-14a9-4e1a-9d50-0db8381f5d05", e._sentryDebugIdIdentifier = "sentry-dbid-59165877-14a9-4e1a-9d50-0db8381f5d05")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, f, d, c, r, t, b = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const d = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, c = 0, r = d.length; c !== a && r >= 0;) "/" === d[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = d.slice(0, r + 1);
                return f.protocol + "//" + f.host + t
              };
              Number.isInteger
            },
            98478: (e, a, f) => {
              "use strict";
              var d = {
                  "./root": () => Promise.all([f.e(40), f.e(7454), f.e(2604), f.e(7168), f.e(5654), f.e(2229), f.e(9623), f.e(4853), f.e(5966), f.e(5311), f.e(1283)]).then((() => () => f(91283)))
                },
                c = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      c = f.S[d];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => c,
                init: () => r
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var f = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(f.exports, f, f.exports, n), f.loaded = !0, f.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          n.r(c);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, n.d(c, r), c
        }, n.d = (e, a) => {
          for (var f in a) n.o(a, f) && !n.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, f) => (n.f[f](e, a), a)), [])), n.u = e => "js/" + {
          40: "18b1de3e8f49792c3fca024a7ea4ac9d",
          131: "2b62c5b904f85cd8e692d28e153c1ce4",
          278: "4235f925c3917d3b5709bc389d9af0b8",
          299: "34ec71d997773f2b5b517406b7fe0254",
          314: "09919d2a0e0fdb21c246454d7c903e7a",
          377: "17b47d883ee4ef752e9c6e76fe5aaadc",
          601: "eacfdd8ebdcda1b65692712f621f4670",
          662: "1a1d7e9f64fa5453c81dcbd78c4e3370",
          721: "c1e6db434f38a8ce8761a2aeb4a10f61",
          824: "38ecb72f173a25b282fdd1af54f0a7b1",
          888: "fd5f5910b0397c5f88605e8cb98cc74d",
          907: "44fc14d2e46805a7dda6e56d5f2b8399",
          969: "7b80dbd4ba3e68df63bec83e7c10f847",
          1054: "9d74c5f20922c8be381e7190acd57dfb",
          1242: "485a70fd20fe7e28b494626a8c3045ad",
          1283: "4855bbf72475182d1c5b84b295adee2c",
          1360: "6280e90a16c080a0966989c42ad2aa01",
          1506: "7d25cd2457116d416d49cc26708384d3",
          1607: "bf63b4874d73612e3364206504011a2a",
          1673: "194e536b80078d4374f21bb3738851d3",
          1720: "3d55909230fd6d7b41aad1353887c964",
          1734: "e541341b064c2c1334cb68d041feff42",
          1796: "f22393b161a718d147c170782729d40f",
          1822: "a446420a3aa8934e7ee56c838eda9b08",
          1868: "98357e9a15634df75bab74fa2373dd69",
          2024: "5c23b50d372107784175217bef7c17b5",
          2156: "d50082a2f2b98ad009758d13bc4c9e7e",
          2171: "744b5065fd258617ee3d09c9c27c1bb9",
          2221: "da2a474e78cd046aa5fd316181e46716",
          2229: "5f7443664507c92cb2b814b672ce5625",
          2243: "6de28b596bd8d6ebea4603c885f8f3e2",
          2347: "1f97c7cf5ca3bebe97fb48de5d33bc29",
          2365: "fdfdf1b15e4fea42f5c445191400fadf",
          2398: "f0750a25aab3edad752cdbb7a2630f02",
          2466: "3242031ac1cc6b6585547d4b69a1de1e",
          2604: "a6a584f6108d84a4ca979612c69c1ba6",
          2642: "bfe2fb1078f30e6ad1da7a2914533b0f",
          2678: "0371dcfd7f428701e4cfe38335966d5c",
          2772: "5d8089900dc2f80ebe99c085e33f9b61",
          2864: "ce7a8d1cc25e34f1306d89d9e76c9836",
          2941: "a1a18044e9d31833b4e93d646d83a098",
          3034: "f0f13c0ee37fa6bbf74e548209381fbf",
          3095: "3ae6efe905a6edf3930778609d5f5301",
          3197: "401f0ab7a8be23a684a5d9061d527284",
          3321: "6d2fbf61a07cb307dda2aa6a0a945ea5",
          3343: "0a65d9ef0af75166bcd9011710b197d1",
          3370: "51bd74e0d24965e81a9c29da5929d357",
          3447: "4da09b73ad097bb57eac59910d239dea",
          3475: "34a3070d7e4fa32320f13b14f49c4557",
          3486: "1f50499ec03a53618425b3c49ff08e46",
          3622: "e82376c1dbee21f7cf17b0b2e17515c5",
          3697: "36dc02a932898560cc5016c15cb96342",
          3807: "f595f75adee1974e7b9bcb893a18786e",
          3885: "881c4625b63a32534231da8f9ac7ba6b",
          3941: "b4c92ded8726bac3648edea4130eb33e",
          3951: "5d8828ef950ac5eea6061b0ca2191e57",
          3980: "10956eebfe92c842bc8fee43954aae8e",
          4011: "3625853279bd549b444a354e5b912926",
          4018: "b3959a46a6b3049f0a85ff958b53f4ec",
          4054: "dae32b34b6f4efe42f5176795d50b4c2",
          4186: "c355183398ba8760eeee7766b5cf35ee",
          4220: "eac6bd6c9869efbf371f22feecd23f5e",
          4389: "5fc0125104e7d02c200a99c1fd0001a3",
          4528: "2518ac63caae2b73ad1219fae8edd669",
          4621: "1dd7af14f3dca3088916a69c703dbcef",
          4700: "b6674de8bef5e602b626ad45c27d0c88",
          4710: "3fa860384c351a3e02e13c1ae68eb1d1",
          4731: "c1237340d8cd8fc884e5d9717196de17",
          4799: "08e4379c9e02204dc7250a1fecf7d48a",
          4851: "7564aa285896c388c58e0e344dca71d5",
          4853: "94de6943d4918ad1b91858da04ba9a68",
          4861: "948561168245bf1928ff5b7c4d0c250b",
          4913: "03f828bd1464c1c73e09a77fa8f7c10e",
          5018: "3a070438e8c2577ee0b8f1b51df00515",
          5233: "47a708b34a892b0bc548b1cd2a392803",
          5247: "a916df7d2cf7b27009bb8bc8ab1a12e4",
          5254: "daf426854a734788ed626a3c13e63e5b",
          5259: "60123a094ba0471f5b06175ec3082186",
          5311: "57b4fc42dc55690832eecc2d672fd921",
          5416: "f465b54b815f8dd668d110b49a38b141",
          5530: "8a7c0b3be7c305bf0e38e81c6fd2817f",
          5639: "91d08a49a82b2d3dfafa3c10cd9fec66",
          5654: "18182edd8e9d586c1bb9685bc89d3147",
          5663: "700ed33bcb43d907267b7091c8f77bf3",
          5742: "f4ac67f52c63c5f36f86fae2e6eaed18",
          5794: "a0e9d1619a44f81dd279b36ce8badfec",
          5830: "735e6f1af1d0e36e4a9f49893bd3f8fc",
          5832: "33224d0272d4cf0e30dd80b6c39ead6f",
          5966: "417e3fa80e840e939300c374387e21a7",
          6131: "54194e904a0765ef7d41d22e17470cf0",
          6267: "1120e0a64eae29618be55d258f29ff37",
          6280: "8b5acb517c2c758dbc5e5247804b4873",
          6285: "d849414292bc79dbf3213cedb15a8dbc",
          6361: "cec271db02f747eece84adc2fc8eac8b",
          6638: "d517d5a284b2f3aa2bf5d4a9eee1d5c1",
          6664: "73151fcf0906979d7051a83a90e71d4a",
          6682: "cdb4c11ca9d9aff7b9d373b5260bef61",
          6879: "5ae7321702f43bca9d7f0d07f71b82af",
          6891: "dd56f8fb30e54a80e96c91809ff863f8",
          6940: "5b8bcfaf094b0089672ce4f643755d39",
          6997: "0bed7a5a864c3fb786c0f39e2314979e",
          7010: "f6a005ee2b20d6fb53205cd68f1aac30",
          7039: "539a147859b1b22c700217d56586bb72",
          7073: "deadc54b14ed3b7ea537ed5762409ddb",
          7168: "2d046cec8d634dee73497aba1782f19b",
          7436: "fde69597af8be5972a834977f5e006b4",
          7452: "03fb2120d7f703f3d7edd50a1a3fcb14",
          7453: "9298bc4a9920627b3f45000b82ff0045",
          7454: "afae5b00c0fad1fd03a500587045f231",
          7599: "33cb12615d1c222c3b9a3184ce141957",
          7740: "f9e20366f701987ecd8785f8c1a1c75a",
          7911: "5e572c1721c7edc9b2aaecc6dd0b95d7",
          7970: "79c8b5e770c3cba99179ab01c1b45f53",
          8179: "e96fe2772d5ec5205fdf8d0e063d758a",
          8272: "e115607e9ee46380e037885b82374122",
          8391: "3a0b2ea95ceed055386e8e0dbc35e2c4",
          8755: "2a5ca781d496f199da1279d1478c31c2",
          8880: "e67482a4aa2ef60a26185ce7ae44c4d1",
          8885: "f4ea5263e98a92850b74a2534b1593d5",
          8961: "2f651cf4a00608017e6f627b5b13da26",
          8970: "2548ccd093e7578606357ccc26b15a6a",
          9022: "a29a7a697868638b86fc247fb23b53f4",
          9028: "2e5f5fd6991b7bd8e50269285754e7e2",
          9126: "d354d3e873147a51f11f2fe00e4881a3",
          9362: "03fa8741967a030493fc0f4d6538e0bf",
          9377: "22365edb9a34b3817f4feb21d31f1cac",
          9474: "cc7a37e4021f486f880365e0960a3bc5",
          9615: "bea31740b3a31059456b9bf263638fc3",
          9623: "f642de34a1ad70eccafbf9b8d4b75dc0",
          9642: "4e3de1584fbf830eb64f7ba7e9ae0311",
          9686: "2293b7d51b21985ec2050c2ad813450c",
          9757: "36790a6c2a9ddf1e1ece0b5365dee4e8",
          9842: "1e60af479eaf664e1024255e90486c8e",
          9936: "118c1cbca58df3745c48104da261543c",
          9990: "ab5ce905370d5656877f994edd0c5112"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/modules-core-footer:", n.l = (e, a, f, r) => {
          if (d[e]) d[e].push(a);
          else {
            var t, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var l = o[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + f) {
                  t = l;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", c + f), t.src = e), d[e] = [a];
            var s = (a, f) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var c = d[e];
                if (delete d[e], t.parentNode && t.parentNode.removeChild(t), c && c.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, n.f.remotes = (e, a) => {
          n.o(r, e) && r[e].forEach((e => {
            var f = n.R;
            f || (f = []);
            var d = t[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), n.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                r = (e, f, r, t, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), c);
                    if (!o) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                b = (e, a, c) => r(a.get, d[1], f, 0, o, c),
                o = a => {
                  d.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(n, d[2], 0, 0, ((e, a, f) => e ? r(n.I, d[0], 0, e, b, f) : c()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (f, d) => {
            d || (d = []);
            var c = a[f];
            if (c || (c = a[f] = {}), !(d.indexOf(c) >= 0)) {
              if (d.push(c), e[f]) return e[f];
              n.o(n.S, f) || (n.S[f] = {});
              var r = n.S[f],
                t = "@rockstargames/modules-core-footer",
                b = (e, a, f, d) => {
                  var c = r[e] = r[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : t > b.from)) && (c[a] = {
                    get: f,
                    from: t,
                    eager: !!d
                  })
                },
                o = [];
              return "default" === f && (b("@foundry/react-v4", "4.1.2", (() => Promise.all([n.e(8179), n.e(40), n.e(7454), n.e(8961), n.e(6131), n.e(2229), n.e(4853), n.e(6638)]).then((() => () => n(46131))))), b("@foundry/react", "1.28.2", (() => Promise.all([n.e(8179), n.e(40), n.e(7454), n.e(9842), n.e(2604), n.e(2229), n.e(4853)]).then((() => () => n(5143))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(2024), n.e(2229), n.e(1673)]).then((() => () => n(85950))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(601), n.e(7454), n.e(8961), n.e(1734), n.e(7168), n.e(2229), n.e(6682), n.e(9623), n.e(4853), n.e(5966), n.e(7911), n.e(5311)]).then((() => () => n(48999))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(601), n.e(1720), n.e(2229), n.e(6682), n.e(9623), n.e(5966), n.e(1796)]).then((() => () => n(2772))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(601), n.e(2229), n.e(6682), n.e(9623), n.e(7599)]).then((() => () => n(48267))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(5794), n.e(2229)]).then((() => () => n(5794))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(54018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(13447)))))), e[f] = o.length ? Promise.all(o).then((() => e[f] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (f, d) => {
              if (0 in f) {
                d = e(d);
                var c = f[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, l = b < f.length ? (typeof f[b])[0] : "";
                  if (t >= d.length || "o" == (i = (typeof(n = d[t]))[0])) return !o || ("u" == l ? b > c && !r : "" == l != r);
                  if ("u" == i) {
                    if (!o || "u" != l) return !1
                  } else if (o)
                    if (l == i)
                      if (b <= c) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (r || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || i < l != r) return !1;
                    o = !1
                  } else "s" != l && "n" != l && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < f.length; t++) {
                var p = f[t];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, d) : !u())
              }
              return !!u()
            },
            f = (f, d, c) => {
              var r = f[d];
              return (d = Object.keys(r).reduce(((f, d) => !a(c, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var c = a[d],
                    r = (typeof c)[0];
                  if (d >= f.length) return "u" == r;
                  var t = f[d],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && c != t) return c < t;
                  d++
                }
              })(f, d) ? f : d), 0)) && r[d]
            },
            d = (e => function(a, f, d, c) {
              var r = n.I(a);
              return r && r.then ? r.then(e.bind(e, a, n.S[a], f, d, c)) : e(a, n.S[a], f, d, c)
            })(((e, a, d, c, r) => {
              var t = a && n.o(a, d) && f(a, d, c);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            c = {},
            r = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(13447))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(54018))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => n.e(5794).then((() => () => n(5794))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(6682)]).then((() => () => n(48267))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(1720), n.e(6682), n.e(2772)]).then((() => () => n(2772))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(2024), n.e(4054)]).then((() => () => n(85950))))),
              20270: () => d("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(8961), n.e(1734), n.e(6682), n.e(7911)]).then((() => () => n(48999))))),
              96711: () => d("default", "@foundry/react", [1, 1], (() => Promise.all([n.e(8179), n.e(9842)]).then((() => () => n(5143))))),
              17675: () => d("default", "@foundry/react-v4", [4, "npm:@foundry/react@4", 1, 1], (() => Promise.all([n.e(8179), n.e(40), n.e(6131), n.e(3980)]).then((() => () => n(46131)))))
            },
            t = {
              1283: [20270, 96711],
              2229: [62229],
              4853: [44853],
              5311: [2918, 81788],
              5966: [95966],
              7911: [17675],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(t, e) && t[e].forEach((e => {
              if (n.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var f = a => {
                  c[e] = 0, n.m[e] = f => {
                    delete n.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete c[e], n.m[e] = f => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(c[e] = t.then(f).catch(d)) : f(t)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            417: 0
          };
          n.f.j = (a, f) => {
            var d = n.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(2229|4853|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((f, c) => d = e[a] = [f, c]));
              f.push(d[2] = c);
              var r = n.p + n.u(a),
                t = new Error;
              n.l(r, (f => {
                if (n.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var c = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, d[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, c, r = f[0],
                t = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (d in t) n.o(t, d) && (n.m[d] = t[d]);
                b && b(n)
              }
              for (a && a(f); o < r.length; o++) c = r[o], n.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            f = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), n.nc = void 0, n(45408), n(98478)
      })())
    }
  }
}));