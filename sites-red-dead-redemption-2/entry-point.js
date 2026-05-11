try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0fdc3c46-cae8-407f-b7e8-b6f19b54ddd4", e._sentryDebugIdIdentifier = "sentry-dbid-0fdc3c46-cae8-407f-b7e8-b6f19b54ddd4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
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
      r.default = e.default || e, Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, f, d, c, n, b = {
            28419(e, a, r) {
              (0, r(17411).w)(1)
            },
            17411(e, a, r) {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            93032(e, a, r) {
              r(28419)
            },
            77027(e, a, r) {
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
            85819(e, a, r) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(3004), r.e(832), r.e(2065), r.e(5523), r.e(6219), r.e(9763), r.e(8745), r.e(1127), r.e(8429), r.e(7301), r.e(1556), r.e(2169), r.e(8032)]).then(() => () => r(98032))
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
            25136(e) {
              "use strict";
              e.exports = r
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
          return b[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = b, i.c = o, i.y = a, i.amdO = {}, i.n = e => {
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
          68: "a8d4278896907a57802d6d3c40ad1113",
          131: "90e6c3511cd7f2b3ff3a500b090546c5",
          173: "e316a7fe4cebcb58f42c07f828e764f2",
          278: "c045942bd7a07a13e022e7fecf6c83a0",
          299: "1ef24db52ae19772797fa9e3e45a1003",
          314: "6c0261e717ad45836d15a456f2e4e2ea",
          439: "99bc673a529fa79fa33b7228f651db48",
          637: "5e607015c535bb2cc34ac13e67d686bb",
          662: "2f16114f320972d3c6aa72edc7974951",
          824: "0b784b440eeaf4346c4c61e582f3bf3e",
          832: "e0dac5a3e7cc1834bd461a07f7a50f38",
          907: "b0cd2e923ca0de66dbb4d59b0b661c6c",
          1054: "249c122e9968c4f768b853e1401d4b26",
          1098: "24196f39f1f4795776456820fd00775e",
          1242: "d72acdeabee797a97854a9b18d049124",
          1758: "e0dffeb9f49736ef52bad34c128e2187",
          1795: "3f326744406ad5bb043ac7b7e25ce5e1",
          1822: "d5ac586e7e9afed4cab8ba269cd94f04",
          1837: "34fd5f81edc88d83ff144751709a66fd",
          1868: "02951a36276bf68eeccc6f8d74e78e9f",
          2065: "e5c8ddb5360bb530306815b518048c36",
          2156: "c88ce765fa29422cc829c63640b82d7c",
          2169: "15d6d00043aa98a4991851677ee8b861",
          2171: "99aad959289ee524e1774d8e9a8c5790",
          2217: "9630caa2f2fc6d7627f32e37a7e3068b",
          2221: "4d7570a80d0ba250272bcd8febd5aaa4",
          2234: "bab596884786fa42c46a440d89f2b2d6",
          2243: "270dace3d33858b4f95e7ab9072b23d1",
          2306: "131698b407c15fa041c1933f0eee0a24",
          2347: "dd604b760d2b8e560f70260d836571eb",
          2365: "bfb792dc1b35815a8be19e3cd9c43089",
          2398: "b88909dd988a7ee663f8834122538f94",
          2466: "6fc0c522335f0d40401b09385b493e8d",
          2508: "ba83b93b185163cbfd13c2b08c571bc3",
          2642: "20a96d9f58163316b3d9d547deafd5a9",
          2678: "cc8883a0571f039fae6eb078eb083f5a",
          2864: "c4e2b9252c82f01a5800615ef76decf5",
          3004: "5cd84e3f7b7020546978b1c6f8e1159b",
          3034: "47ef9d58046437bac9a97447aba68262",
          3197: "8add77c2af3e2f0cf6c0bbf9983f1dbd",
          3343: "ddc1e48fc5b395e670b8ebfe8fbd3aa1",
          3370: "2010cb173662784741f7660f92fccdbf",
          3475: "e6cce0a0cdf332cd847d5b0414948d0f",
          3486: "027ffa95ea5da8288d647b618f6a5fef",
          3697: "6cdbde60151c0e051a236c1572cac41b",
          3885: "41d2d7acdabcac4dcd9fa6455d626777",
          3896: "fb8ab3f1ce60d0eddc2719e52113958d",
          3941: "3a24f1173559d94a5e29355ca39c987a",
          4011: "d5481b15cd4f8503e51f4bfa90046c53",
          4218: "6f46e331cbe1f6929e6a30a7b7dd5dd4",
          4528: "90c7a3b11fb98f6d16afed42718af93e",
          4578: "4a880ba93884ce00307421dd99579ad4",
          4598: "ec8c991310bdad2689c6d891b6600ff5",
          4621: "7ae112ff4d70b74f954ad30266c1dd51",
          4700: "317ecf28e6e7dc8de18849536ac78685",
          4710: "8d26275a4d5b7597e72d83729ae169bb",
          4731: "4e4659c548bb4c563a96f548b3734a44",
          4799: "bb4d9763973de7a530c5347898d02612",
          4851: "091d696dbf208868365ee65b49655efe",
          4861: "7fb31628924fb9fb1f6695f2d85abffd",
          4913: "dca426307f2285f7c3a42e7397550e47",
          5018: "3c594c20f007e2a8e21fcf1fa2af5c97",
          5076: "3c87e245d0327573d0ed1f01b34e7030",
          5233: "04f8a5ba79203bbbde732aa5d0018d80",
          5259: "d400d694d0a42641594ecbe367da88bd",
          5265: "097f11fc6bae481ba1a3fde349d439c2",
          5389: "e68a835c53d0abe88b25fe188447a0f5",
          5415: "1895b98401e07590ba6f1d660c8b5dbe",
          5523: "5d933f20cc8e43f81a6f3360afa1b17d",
          5530: "830d5df5da54f0b33ca8987e3b0e6abf",
          5639: "dc918aaf0a9cdda9d39610f7dd617599",
          5663: "e336f86926f8d7d1f04bc72feedb2e2c",
          5715: "f752d2a11f7e3b97e58de647822ea992",
          5742: "d4177314eeb546b6104295600b594aa8",
          5830: "fe5532231a9a7e936f0b9a634f64d770",
          5832: "61949b5470e4069bc450fa530c9b2c05",
          6219: "e026e83a1b691d3411ecb07e0e1b8329",
          6267: "a6136c894e1a3f1cf0f00f14cb35c615",
          6280: "d1798b8ee0704dce352acc58d96ece4f",
          6285: "1892fdfc439f8300478d21e5a10d7df9",
          6361: "b6f542c2793cac5743064b84227f3582",
          6471: "5cd6404dbb5d9eb776761acc0ae91fa3",
          6664: "03a954eca3612d2b5208f45b952bcfee",
          6817: "47d4bde922d2581b2b7489011f2c61d3",
          6879: "5341c55e8f0057fbc03f91e03dbdd82b",
          6891: "021131a245b60c7871c977ada3df191a",
          6997: "08d0b834b03ac014d0c3819cb8f5fa0b",
          7010: "3c7c66c2fbbb70942a45cbf0367e9638",
          7073: "00a1a6ec3e5e423d1df21e0419623101",
          7301: "24851ed74baa80d96b0707dbb60a0f4c",
          7407: "e335ea32437304b6c90f02bff27ce408",
          7436: "7baf508fee0895ac7aa65441e4d0477d",
          7452: "1ccb15b55a7378030ed29c64f461b98a",
          7453: "f7030dcbca63da9534e81fa5a6c7b5f7",
          7970: "bc0290d181d1b08adfd950a3c8350b68",
          8032: "164c0a6c6c8ff664e60a4bb9f9fb2e0b",
          8272: "1d399300e453d26005f3707918f81c03",
          8325: "fbc98ec078a86dc43397f1d2a26f0877",
          8391: "09628874da917abcadc7d9313aafc652",
          8431: "2520d36f059da07d1588c468e73275a2",
          8454: "13b6937bff56bb65a04f2b59902866e2",
          8745: "9080f54ddaa83f18e52610e098853e0d",
          8755: "79035172cb71a8ef1e12b401a9488c38",
          8845: "a88c8bb6ac8e80121957adc6652a5a3d",
          8880: "42d6ff5d0811ec6db9bdb2a26a5a9a6b",
          8938: "4ecae8fa4d42e2ac00ca1975b208e4df",
          8970: "54d73cbd114768ecc1b75be5e22748ac",
          9022: "91c82c47b15c9861330b243826dad12a",
          9028: "2c46e955a11768ee3b2b2249af44840c",
          9126: "1fd670ec5b770d648c57b6cb746d8d86",
          9377: "05d37f02dcaa789b2e5c919e5e5ada3f",
          9615: "a51cc0d6fe312ecf6d58f31e77f5b392",
          9629: "ad363d7ce00c6602daf219755922d6a5",
          9760: "44ff3a9facb007018f26b5df3e9119de",
          9763: "1aca7f55099940727fe084a55811ae9b",
          9936: "66243f82bae1bcc084094e85a1144d1d",
          9990: "e5d8d7c2de88d701f28a8731e374f205"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1913: "7c575cc0a210038808b12a81bf37629b",
          2217: "68e10351293e1cb623f94152132387b0",
          4598: "68e10351293e1cb623f94152132387b0",
          5715: "1871f9e2b29e24c3f99166114cc90927",
          6817: "7c575cc0a210038808b12a81bf37629b",
          8032: "9200a82bd73dcd2126a58ecad12612c8"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), o = 0; o < b.length; o++) {
                var s = b[o];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
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
          8032: [31879]
        }, n = {
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
                d = (e, r, d, c, n, b) => {
                  try {
                    var o = e(r, d);
                    if (!o || !o.then) return n(o, c, b);
                    var i = o.then(e => n(e, c), f);
                    if (!b) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, b, f),
                b = a => {
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
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                b = [];
              return "default" === r && (n("@foundry/icons", "5.23.1", () => Promise.all([i.e(3004), i.e(5523), i.e(9629), i.e(1127), i.e(8429), i.e(1556), i.e(6817)]).then(() => () => i(19629))), n("@foundry/react", "5.23.1", () => Promise.all([i.e(3004), i.e(832), i.e(5523), i.e(5715), i.e(6219), i.e(1127), i.e(8429), i.e(1556), i.e(7774)]).then(() => () => i(55715))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(1795), i.e(1127), i.e(1837)]).then(() => () => i(12841))), n("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([i.e(832), i.e(2065), i.e(9763), i.e(2508), i.e(1127), i.e(7301), i.e(2169), i.e(2217)]).then(() => () => i(42217))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(832), i.e(2065), i.e(8454), i.e(1127), i.e(7301), i.e(637)]).then(() => () => i(60637))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("lodash", "4.18.1", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-router-dom", "6.30.3", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return b.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return b.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
                c.push(0 === n ? "not(" + b() + ")" : 1 === n ? "(" + b() + " || " + b() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return b();

              function b() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, b = !0;; n++, c++) {
                  var o, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(o = t[c]))[0])) return !b || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!b || "u" != s) return !1
                  } else if (b)
                    if (s == i)
                      if (n <= f) {
                        if (o != a[n]) return !1
                      } else {
                        if (d ? o > a[n] : o < a[n]) return !1;
                        o != a[n] && (b = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    b = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    b = !1
                  } else "s" != s && "n" != s && (b = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
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
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, f, d)) : e(a, i.S[a], r, t, f, d)
            })((e, d, c, n, b, o) => {
              if (!((e, a) => e && i.o(e, a))(d, c)) return f(e, c, o);
              var s, l, u = t(d, c, n);
              return r(b, u) || (l = ((e, r, t, f) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + a(f) + ")")(d, c, u, b), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              10181: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              10336: () => d("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(3004), i.e(1795), i.e(4218)]).then(() => () => i(12841))),
              1556: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(3004), i.e(8454), i.e(637)]).then(() => () => i(60637))),
              38882: () => d("default", "@foundry/react", !1, [4, 5, 23, 1], () => Promise.all([i.e(5715), i.e(7774)]).then(() => () => i(55715))),
              87613: () => d("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([i.e(2508), i.e(4598)]).then(() => () => i(42217))),
              67774: () => d("default", "@foundry/icons", !1, [4, 5, 23, 1], () => Promise.all([i.e(9629), i.e(1913)]).then(() => () => i(19629)))
            },
            b = {
              1127: [71127],
              1556: [1556],
              2169: [13331],
              7301: [10181, 10336, 42909],
              7774: [67774],
              8032: [38882, 87613],
              8429: [18429]
            },
            o = {};
          i.f.consumes = (e, a) => {
            i.o(b, e) && b[e].forEach(e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!o[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                o[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
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
              5082: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1913: 1,
                2217: 1,
                4598: 1,
                5715: 1,
                6817: 1,
                8032: 1
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
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = n, d.parentNode && d.parentNode.removeChild(d), f(b)
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
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1(127|556|913)|7774|8429)$/.test(a)) e[a] = 0;
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
                b = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); b < d.length; b++) f = d[b], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(85819)
      })())
    }
  }
});