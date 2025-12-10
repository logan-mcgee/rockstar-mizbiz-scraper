try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d823b198-a8f5-4124-9759-d07d1e109939", e._sentryDebugIdIdentifier = "sentry-dbid-d823b198-a8f5-4124-9759-d07d1e109939")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, d, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, P, S, j = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
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
            },
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(78), r.e(1479), r.e(1127), r.e(8429), r.e(9623), r.e(1788), r.e(1062), r.e(5966), r.e(2924), r.e(2841)]).then(() => () => r(32841))
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
            }
          },
          O = {};

        function T(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, T), r.loaded = !0, r.exports
        }
        return T.m = j, T.c = O, T.y = a, T.amdO = {}, T.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return T.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          T.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, T.d(f, d), f
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce((a, r) => (T.f[r](e, a), a), [])), T.u = e => "js/" + {
          68: "1d82829b365ea73574cd19ec0a82afa5",
          78: "f34a862a25ac6484438ea4bc0e71a496",
          131: "e48a7ea6d04ff8fab5bb5abb32c921b3",
          173: "5cfbe7aff1b1a9ef6275b0b98e815430",
          278: "97da2b571dd2fe471aaf30b94dd414f7",
          299: "cafe8f10fc4035a277e2e2a3311e8902",
          314: "7f88aceee8eaf2b1e8eab62e68478eb0",
          450: "7ad2ba7f52c99530958fe796ab8f224a",
          662: "091b680f6547e999fdcd28c34d2e0a8b",
          824: "11ae1da3c25ced82c6a6028020102da7",
          907: "d4e6be336198f65372fa69946f193840",
          1054: "628ca7f4a50250eb8fe5b85b7d758dbd",
          1098: "50f6e1c9a22a9ddf263281b12611e1cc",
          1242: "190aa903d014427cea2221442dd7ca53",
          1479: "211148f0db1dee3c1ae0fd451a0e0bad",
          1665: "38d1b678717bec0e1c38d4b6c432151e",
          1758: "4a9519701ef8846b5d916e924ca59e14",
          1822: "9a436b96b6e609eb21fd2ef778d8e509",
          1868: "2b6962ac80750791edc4ade553badd17",
          2156: "a801b2c82ceb444b5dc532e3c51b7907",
          2169: "6e74b1987035c8c550e827e78730fd39",
          2171: "63de63d01ebff447f7a27a89d3500ff7",
          2221: "c60bc5791c912e05788a079d4771f1b1",
          2234: "c3b460a0f942c56a7e6bec167136bd7e",
          2243: "aa4bc533010e95427b47040d50a9ee7e",
          2306: "8653922fdb3cb34f8cc9cb2b1987afb7",
          2347: "d25597669a54f95a3b7435a447136787",
          2365: "cd075df406e7de554298356959a4f41f",
          2398: "c7e670776c41fd4fe9be63e8ed9b5247",
          2466: "16158a6bb98f8684853659bb6f8c7c7b",
          2583: "f74a6c2d5c858201a8ac37a58ca6c51e",
          2642: "863cbd471a6e514f3715ce4954cbbf2f",
          2678: "bb29e140ae6a5e72e4f7fa3c79cdbe48",
          2841: "715ce1bd126e5d63cc4151a359e0dbeb",
          2864: "0c5078e55b7b2c039ff1cca7d3a528dc",
          2924: "34c4cddd56beb22edd047a3a0286a9a4",
          3034: "5d2db098b7b571fd2326de5dcd6a08b8",
          3197: "bdbdbe1acd0899236d29516de88e1588",
          3343: "89d32106edcf2f93bef96e2617bd2ea6",
          3370: "f0fed15096f7235a0ea150561e46a47b",
          3475: "e650f59155920bc934d60a02e3fe0128",
          3486: "23253e5c67104665bf541909f212211c",
          3563: "d516ba72efab55b0aec4edb248480720",
          3697: "1ff650546955c3441458c5913d68b861",
          3885: "953b6e0029391872f46639234f6c0385",
          3896: "66e682327cabc5ef4c3875000229dd8e",
          3941: "1e1079df71c43e4606b075bec7a68d21",
          4011: "488ddb9b35387e09d049d8254ede793d",
          4528: "25e7c2b1366c7612dba466c13e0f8612",
          4578: "9505983a2b7eb301b1a6ad5190e4f748",
          4621: "97aa6d95065d31a61d85e807e21070c1",
          4700: "3ce40330589faa455ee63cee93fe7a4b",
          4710: "45eebb4efa5f702b4ac49d4b329ea486",
          4731: "a015ca1f9ec86817cdd8de8f2fa58015",
          4799: "1b46310101ccfd62805324de3739a84e",
          4851: "5a56a3a882291b88c12aca26c1fe589c",
          4861: "e89faa9eef3b20bb06257b2bfa11fb44",
          4913: "220519e607134cd77ac0f7d3144f290f",
          4964: "fc7e30c6131f26325a770306a50f5ae2",
          5018: "4ff90b43a73fb47fcbf71a7a5f894a4e",
          5233: "c027c71396acae14b07e7b30d218d211",
          5259: "44fd5bdc4124a816173eab9e7aa2178c",
          5265: "bf8b217169dfc25db2091c194eba8140",
          5389: "f524986dd59db1ad5384f4fda98155d8",
          5415: "0122aa7cd69ada173c66aa2d41496707",
          5530: "96bd069e3cc1fd45dd0451a1aaadbb0b",
          5639: "8f390aa2c83ae8c948d6ecad60ea647a",
          5663: "41e95ec8c6249de20a13f02025fb9c99",
          5742: "d72a7bd283aaab5f66bc0847c032ef90",
          5830: "dcaedc96820c292e7acbd08003b8548a",
          5832: "9e330369928bb3245bdcb88b22c426a5",
          5859: "afe32ef00881f45c2ffa38e9dcc43312",
          5941: "5e1c0785793fe2f1fbcff88ea0dca3a6",
          6088: "7be9b726eab527d51cbf950457578117",
          6200: "cb780a793bdee33efcc2f3f33ded528d",
          6267: "39a5628185ed72edddd12f440bb87d4f",
          6280: "5c5be787c33e7330d36afd2585a1e845",
          6285: "b774ba5d8453f75f0345f428b0043e21",
          6361: "e7b82bcd06fa08fe2118093f3e550241",
          6471: "658b7a2b9c6088d33efc19f53d5a151e",
          6664: "b1c13e225bb772f168b2c1a82220f9e3",
          6879: "4c11d572895de42b0c26585eb5f4a7ba",
          6891: "1487be76a6c5c68894a8cbd99523a5ee",
          6997: "59e68f259b32ed239b6b5fb49e13815d",
          7010: "24858db5cf442c7846194687f60aad57",
          7073: "cab634969ae2a14120362be068dd4723",
          7407: "306136b8af34c80613393c669cf8f52d",
          7436: "9d915d0a912dd2383be708f620ed8d7a",
          7452: "59410f1480fee6afcb8b9f800c4333f8",
          7453: "d4f502ae29f773d2d9ddf3eb3bd7f6e9",
          7970: "3b31e4ff33ff4e725f30da2a2f75ff51",
          8068: "25661652b31946f91f954d2e75d9fbd5",
          8113: "2723f1f9ae776e901c7387b46a107786",
          8240: "bc663c0348d4173b1ed4909fde6d11b4",
          8272: "4557a42ef6b52808bee5e47a6201ee80",
          8325: "9556f431cac624e3b273701030da4736",
          8391: "c0b088b6a58890b6f33b1933c746ceb3",
          8431: "2bcd99c86ba75ed386fa1a4aa1747625",
          8755: "2a2e4818c8bd28d7fda449a042a35c03",
          8845: "8a1b86634c3c43af65e22f390c31d607",
          8880: "233bdb34445b61ed7bb47895f6e27981",
          8887: "f730f21077659db9adc25e49bb0f8172",
          8938: "3ee27b3de6c45b3c7532c52fca1a889e",
          8970: "229b643cfc11e90de803ba4ce91be0f4",
          9022: "8250bb2c4e22e127cfe1d0714898a166",
          9028: "59960de7d8b837e5a23e3ea0623ddd0e",
          9126: "903645af0cb3e798aba3397760a78e67",
          9377: "b80ec82352f8ebd4d93f54b0b6aaca34",
          9512: "ab0e316bf3ac99392969bdcca2e95639",
          9587: "8722b5fed3b5f5b1cd546575887d08e4",
          9615: "329e758c0e1eb0d48c9d4cd8845ef3e6",
          9757: "3e8d60b9e89e9f17e8c441a3f5579d13",
          9760: "b8d6e2b8f977a8d414b8c8b72b1e5bdd",
          9936: "a9ebb5c8dbea38495886afe247b8b8bd",
          9990: "69d9e82224f5ceac70374e9920045291"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          78: "f23692dc02c7d751cd6d5f1cfbe6dfee",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          2924: "f8c1968ff675df159b6c305e0f588a38",
          3563: "cc22dc60f76a2ed6735c907561683650",
          8887: "18d74dd699fe65cda6f8b0ac9377f70e"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-footer:", T.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var f = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(e => e(r)), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, T.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, T.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          T.S = {};
          var e = {},
            a = {};
          T.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var d = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(6200), T.e(1665), T.e(1479), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(1062), T.e(5966), T.e(8887), T.e(2924)]).then(() => () => T(37290))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then(() => () => T(89757))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-dom", "19.2.0", () => Promise.all([T.e(1127), T.e(2583)]).then(() => () => T(62583))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.13.1", () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(1479), T.e(3563), T.e(1127), T.e(8429), T.e(1062)]).then(() => () => T(23827)))
              }
              return e[r] = n.length ? Promise.all(n).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              f = (typeof t)[0];
            if (r >= a.length) return "u" == f;
            var c = a[r],
              o = (typeof c)[0];
            if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
            if ("o" != f && "u" != f && t != c) return t < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(c = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
          }
          var d = [];
          for (f = 1; f < e.length; f++) {
            var c = e[f];
            d.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? d.pop() + " " + d.pop() : o(c))
          }
          return n();

          function n() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, c = 1, o = !0;; c++, f++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !o || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (t ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != t) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, t) => {
          var f = t ? s(e[a]) : e[a];
          return (a = Object.keys(f).reduce((e, a) => !n(r, a) || e && !c(e, a) ? e : a, 0)) && f[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(t) + ")", h = (e, a, r, t, f) => {
          var d = e[r];
          return "No satisfying version (" + o(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map(e => e + " from " + d[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, t, f, d) {
          var c = T.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, T.S[a], r, !1, f, d)) : e(a, T.S[a], r, t, f, d)
        })((e, a, r, t, f, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = l(a, r, f, t);
          return c ? i(c) : d ? d() : void m(h(a, e, r, f, t))
        }), k = y((e, a, r, t, f, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = u(a, r, t);
          return n(f, c) || g(p(a, r, c, f)), i(a[r][c])
        }), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then(() => () => T(12841))),
          31062: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(4964).then(() => () => T(62583))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then(() => () => T(89757))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then(() => () => T(32169))),
          21994: () => w("footer", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(3563), T.e(8429)]).then(() => () => T(23827))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(1665), T.e(6088), T.e(8887)]).then(() => () => T(37290)))
        }, P = {
          1062: [31062],
          1127: [71127],
          1788: [81788],
          2841: [20270],
          2924: [2918, 21994],
          5966: [95966],
          8429: [18429],
          9623: [9623]
        }, S = {}, T.f.consumes = (e, a) => {
          T.o(P, e) && P[e].forEach(e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              S[e] = !0;
              var t = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var f = E[e]();
                f.then ? a.push(_[e] = f.then(r).catch(t)) : r(f)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                78: 1,
                2841: 1,
                2924: 1,
                3563: 1,
                8887: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = T.miniCssF(e),
                  f = T.p + t;
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
                  d.rel = "stylesheet", d.type = "text/css", T.nc && (d.nonce = T.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, d.parentNode && d.parentNode.removeChild(d), f(n)
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
            417: 0
          };
          T.f.j = (a, r) => {
            var t = T.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1(062|127|788)|5966|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = T.p + T.u(a),
                c = new Error;
              T.l(d, r => {
                if (T.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, o] = r,
                n = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) T.o(c, t) && (T.m[t] = c[t]);
                o && o(T)
              }
              for (a && a(r); n < d.length; n++) f = d[n], T.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
});