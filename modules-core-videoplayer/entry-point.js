try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2e0a8ff3-63f7-4db0-8475-cd53a55d75bb", e._sentryDebugIdIdentifier = "sentry-dbid-2e0a8ff3-63f7-4db0-8475-cd53a55d75bb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, c, f, b, o, n, l, i, s, u, p, h, m, g, y, v, w, k = {
            3032: (e, a, t) => {
              t(8419)
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
              };
              Number.isInteger
            },
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8271).then(() => () => t(8271)),
                  "./index": () => Promise.all([t.e(5473), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(2828), t.e(2918), t.e(8517), t.e(1030)]).then(() => () => t(1030)),
                  "./tina": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then(() => () => t(7684)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then(() => () => t(7684))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => c
              })
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var t = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, P), t.loaded = !0, t.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, P.d(d, c), d
        }, P.d = (e, a) => {
          for (var t in a) P.o(a, t) && !P.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce((a, t) => (P.f[t](e, a), a), [])), P.u = e => "js/" + {
          131: "f64f8b93c8f131d4c42a9c8ec6b2a80d",
          278: "8842c15a3940d3aa60204197f921d354",
          299: "9f10b9bd5027b6445c00af73d6d02a60",
          314: "f25a034c48d3fe2fd4e3382e5e3f7e19",
          439: "394a6d2c0f577818a0fb8a443c9977e7",
          601: "f457116e84f5baecfc13b7e819593165",
          662: "cfb8a09250ce1d45368b8fccda4a1aa4",
          824: "bc4d383ba9e1fd4859b1564d9c6d614a",
          907: "83f9af762dba38c08f2e6b4934b2887b",
          1030: "e85faf641389bcf76fd528f012afa6af",
          1054: "377121943dbb5564f65a2fa035842a60",
          1098: "081b82f8ed274c3bbd2e285998076969",
          1242: "7461a3b364ef035057d714461457ef0b",
          1254: "373d213cf0cedf2b7d32ba51f7462bd2",
          1703: "23cde501ac1c2c6702b3fa58aceeb2ad",
          1773: "d5ada6c92e2f8dc5197859b43042dfe9",
          1822: "c16972d304510a4f6b8eebec4beab064",
          1868: "23e8cbd4af0aff147448e05fa8306890",
          2156: "319c1e706acc0e75da3ef12cf7677539",
          2169: "859f7634d8af67d4292a4ab9ba78cf73",
          2171: "253a9e11fa6d8c989e03bde2d3c69bec",
          2217: "66954ca6fd998c3b6963fa4fefe277e7",
          2221: "5f10ee7eaa0b5ab7d50bc344302c443c",
          2243: "e18c9edd5411b35d409974696fb630ef",
          2293: "019e6203c51bac88fe3e7de30ce5a27d",
          2306: "4696327804fd9d849797595d4a35ca1a",
          2347: "2744afc1246ccf4ef45160f835b48093",
          2365: "5bb9c6653cee909361d7f29760c6e812",
          2398: "501960ee415d2becb98d21a82baf5b1c",
          2466: "10098241b6ad25d039de5838eb528b98",
          2635: "b9a774fbf22f59672b41639d05feddbb",
          2642: "097ae615722f9ac956290d6d4c811c57",
          2657: "747d43292ca3edcc0a1147a8271d4cef",
          2678: "e254a992991252cac01a204ff0cfc31a",
          2864: "d3c7f5f577fa6b15e32beb55f78ae37d",
          3034: "1be19dbaea99914692c5d14788fcc8f5",
          3197: "106be044dc3e6d9c5ac986450f2716ae",
          3343: "5a2643eba69040fdda71ddad604aa136",
          3370: "f17b7d6bd42a4d3a387ceaee5081ad7b",
          3475: "0e921a2fbda4c5bb688f14896c0a049c",
          3486: "71aec939362ae79256f79eefe52ab8a9",
          3697: "63c30b0a5b0c18ab610b63bf8cbcd0bf",
          3885: "46a203620eca864148c80cff0b3bb09c",
          3941: "906e83820e595c77cd9705ef89475d3b",
          4011: "862b1776223e0b0df9d215c5644bc0c4",
          4154: "6c33e4e0eb516c737b826d849e9a4317",
          4528: "c722f93967a5b749b3bb422c499e66ea",
          4550: "ed596992e48d8eabe53b28b60abb63f8",
          4578: "99fc96b262cd3b8313424678763118d4",
          4598: "7727346a03b11061975cca3bbb628b4b",
          4621: "551ff7a55aadaa0e6104ff9a2713bd82",
          4700: "4f4595b7d45cf75ad5609b94dbd4aa7a",
          4710: "685fcb6b78b73ce269323e64a98dca28",
          4731: "300c7aedb9fdd290b8881f8e7305a349",
          4799: "7814e276708b1996a8fd24a96eb92ab5",
          4851: "6b32880032d5c8293bf81312939e147d",
          4861: "e888118decc71ce1faf44ce13037bd54",
          4913: "fd1ae70bf79898f9a9566aab41d9398f",
          5016: "676b8938494ebc159ee8ef36243ce05b",
          5018: "d36dcc681436310f57b8bfd40de3da6f",
          5055: "1245a0060229bcd429e572a22c091883",
          5076: "1a24e7e7b620260de367096303da5314",
          5233: "397dc9bbb463ba5426e996433bfdfbf4",
          5259: "6c29f79346fe890f654d6d0e41acfbfc",
          5389: "7735400269422293dd030d9ec6a0195a",
          5473: "e99aed151f4b34030187114f13e7c03f",
          5530: "749685a7c793ae25b7a5103688a00503",
          5639: "7c2478ae0857daedf938dac6cca69e6f",
          5663: "a2e8fc996ce4d8f104351d1fde200be9",
          5742: "4521b32b9f0df984b16f6bd34a9dfb6c",
          5830: "0afe7a73671d23b63f838977bb29e099",
          5832: "0f961255fc7da5f99066a456f072baed",
          5859: "5b38ca64c1967b141cbcf5a4dfa79e66",
          6088: "2584c69324c81c1ef6bdbe5c2143eb66",
          6267: "9e96af641b48bdccd209244e5704c30d",
          6280: "0d23eb5ddc6b4213554e1e0303a04095",
          6285: "9d327cb12a4e7ea10dc181a64c7c39dd",
          6361: "19d9dd7c4c078a236a8025b22f3680f7",
          6664: "75d4b279786153dfe3816cb81b943055",
          6879: "488fa364f0346d92a8ff00784a2f67a7",
          6891: "095c6f6f1ee9e7eed3972860d57c7dd8",
          6929: "55f050ede5f9e6163b9bf6fd513403ad",
          6997: "afa4c8522a58421df1fa5afb25960309",
          7010: "d9d0b3ec22f92953e343f10cf5a898b9",
          7073: "4cb54e78a4f4272b9e450c0f8773c32f",
          7436: "52d39756669266bc663ec026ae025ade",
          7452: "028300cb9bb250ba6c78ae8594d54034",
          7453: "07165d32683b54c3b177b6b470c791f1",
          7684: "d408188133ee609292d79f6b713636a5",
          7731: "6aece6789c8408152b67e11ec63ad32e",
          7970: "6a98835ed788871cb23d877f527f2928",
          8240: "3d7fb818722ece03e8491e9a08f4eb3a",
          8271: "3b7473063f46c5b2ad8068af2a1f695b",
          8272: "2b2bbf43b5473576e6d167e5bea4df88",
          8284: "6d9a694810588bdb1c8c2f7855abcdd0",
          8391: "c43b78f11b563b1bf08f3a754af766cb",
          8431: "29d3fce6047371e01eb091b7d6283c4c",
          8517: "0bdbb1c1745c0165dacfb6ee1897c10f",
          8755: "31cfa5ee49e3e556275c52549cac35d5",
          8880: "c5177b5c0e178162b4beba868b8bd57f",
          8970: "9ced134ba3ad22e0a32c3dff7574cd40",
          9022: "882763003f2094f41a86bcc24a0a3a90",
          9028: "0e398796d0ecf2fe1f88e6d243b90a2b",
          9126: "49b4eceb2986bff297df91f56d2ba74c",
          9377: "7a2b6c94ac0657ea7b0ca7b59fadac65",
          9587: "5d81aac3e28346225d8b795cc7e2f36c",
          9615: "51e8d629944a9fa40e5a506d28e39dde",
          9719: "3786beaf1b7a39a37ab08e39e39278c0",
          9757: "382b9077db7b78f8266a86c45967bd57",
          9813: "bb59d0c61ac2646536871083d6693e0b",
          9936: "ee5d532b9fb2e476f00ca0c22f96f7f6",
          9990: "8a537c781c9785cddadec4d2fa583065"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "a36e0cbe058ff11dfb786ef49eb77a52",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "cec199aba328e2c4016dac15ddfea127"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", P.l = (e, a, t, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var l = o[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  f = l;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, P.nc && f.setAttribute("nonce", P.nc), f.setAttribute("data-webpack", d + t), f.src = e), r[e] = [a];
            var i = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(s);
                var d = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              P.o(P.S, t) || (P.S[t] = {});
              var c = P.S[t],
                f = "@rockstargames/modules-core-videoplayer",
                b = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!r != !b.eager ? r : f > b.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (b("@gsap/react", "2.1.2", () => Promise.all([P.e(2229), P.e(2828), P.e(4154)]).then(() => () => P(4154))), b("@popperjs/core", "2.11.8", () => P.e(9813).then(() => () => P(9813))), b("@rsgweb/locale-tools", "1.0.0", () => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then(() => () => P(2841))), b("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then(() => () => P(2217))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(6088), P.e(4550)]).then(() => () => P(2169))), b("@rsgweb/utils", "1.0.0", () => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6565), P.e(9757)]).then(() => () => P(9757))), b("clsx", "2.1.1", () => P.e(439).then(() => () => P(439))), b("graphql", "16.11.0", () => P.e(601).then(() => () => P(601))), b("gsap", "3.12.5", () => P.e(9719).then(() => () => P(9719))), b("hammerjs", "2.0.8", () => P.e(7731).then(() => () => P(7731))), b("lodash", "4.17.21", () => P.e(5076).then(() => () => P(5076))), b("react-dom", "18.3.1", () => Promise.all([P.e(1098), P.e(2229)]).then(() => () => P(1098))), b("react-popper", "2.3.0", () => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then(() => () => P(2635))), b("react-router-dom", "6.30.1", () => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then(() => () => P(5389))), b("react", "18.3.1", () => P.e(8431).then(() => () => P(8431))), b("uuid", "9.0.1", () => P.e(2657).then(() => () => P(2657)))), e[t] = o.length ? Promise.all(o).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), c = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, f = (e, a) => {
          e = c(e), a = c(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var f = a[t],
              b = (typeof f)[0];
            if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
            if ("o" != d && "u" != d && r != f) return r < f;
            t++
          }
        }, b = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(f = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, f);
            return t
          }
          var c = [];
          for (d = 1; d < e.length; d++) {
            var f = e[d];
            c.push(0 === f ? "not(" + o() + ")" : 1 === f ? "(" + o() + " || " + o() + ")" : 2 === f ? c.pop() + " " + c.pop() : b(f))
          }
          return o();

          function o() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = c(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, f = 1, b = !0;; f++, d++) {
              var n, l, i = f < e.length ? (typeof e[f])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !b || ("u" == i ? f > t && !r : "" == i != r);
              if ("u" == l) {
                if (!b || "u" != i) return !1
              } else if (b)
                if (i == l)
                  if (f <= t) {
                    if (n != e[f]) return !1
                  } else {
                    if (r ? n > e[f] : n < e[f]) return !1;
                    n != e[f] && (b = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (r || f <= t) return !1;
                b = !1, f--
              } else {
                if (f <= t || l < i != r) return !1;
                b = !1
              } else "s" != i && "n" != i && (b = !1, f--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t, r) => {
          var d = r ? i(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !o(t, a) || e && !f(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var c = e[t];
          return "No satisfying version (" + b(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, t, r, d, c) {
          var f = P.I(a);
          return f && f.then && !r ? f.then(e.bind(e, a, P.S[a], t, !1, d, c)) : e(a, P.S[a], t, r, d, c)
        })((e, a, t, r, d, c) => {
          if (!n(a, t)) return h(e, t, c);
          var f = s(a, t, d, r);
          return f ? l(f) : c ? c() : void p(u(a, e, t, d, r))
        }), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], () => P.e(8431).then(() => () => P(8431))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([P.e(5389), P.e(4853)]).then(() => () => P(5389))),
          6188: () => m("default", "lodash", !1, [1, 4, 17, 21], () => P.e(5076).then(() => () => P(5076))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([P.e(2293), P.e(8284), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6929)]).then(() => () => P(9757))),
          1788: () => m("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([P.e(9587), P.e(5859)]).then(() => () => P(2841))),
          1569: () => m("default", "uuid", !1, [1, 9, 0, 0], () => P.e(2657).then(() => () => P(2657))),
          2828: () => m("default", "gsap", !1, [4, 3, 12, 5], () => P.e(9719).then(() => () => P(9719))),
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(6088), P.e(2169)]).then(() => () => P(2169))),
          4572: () => m("default", "clsx", !1, [1, 2, 1, 1], () => P.e(439).then(() => () => P(439))),
          4848: () => m("default", "hammerjs", !1, [1, 2, 0, 8], () => P.e(7731).then(() => () => P(7731))),
          5971: () => m("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([P.e(4853), P.e(9005), P.e(5016)]).then(() => () => P(2635))),
          7224: () => m("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], () => Promise.all([P.e(1703), P.e(4598)]).then(() => () => P(2217))),
          7654: () => m("default", "@gsap/react", !1, [1, 2, 1, 0], () => P.e(1773).then(() => () => P(4154))),
          4853: () => m("default", "react-dom", !1, [1, 18, 2, 0], () => P.e(1098).then(() => () => P(1098))),
          6565: () => m("default", "graphql", !1, [1, 16, 9, 0], () => P.e(601).then(() => () => P(601))),
          9005: () => m("default", "@popperjs/core", !1, [1, 2, 11, 7], () => P.e(9813).then(() => () => P(9813)))
        }, v = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2828: [2828],
          2918: [2918],
          4853: [4853],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          8517: [4572, 4848, 5971, 7224, 7654],
          9005: [9005],
          9623: [9623]
        }, w = {}, P.f.consumes = (e, a) => {
          P.o(v, e) && v[e].forEach(e => {
            if (P.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var t = a => {
                g[e] = 0, P.m[e] = t => {
                  delete P.c[e], t.exports = a()
                }
              };
              w[e] = !0;
              var r = a => {
                delete g[e], P.m[e] = t => {
                  throw delete P.c[e], a
                }
              };
              try {
                var d = y[e]();
                d.then ? a.push(g[e] = d.then(t).catch(r)) : t(d)
              } catch (e) {
                r(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            P.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                5055: 1,
                7684: 1,
                8517: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = P.miniCssF(e),
                  d = P.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", P.nc && (c.nonce = P.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && t.type,
                        b = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          P.f.j = (a, t) => {
            var r = P.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|828|918)|(17|61)88|1569|4853|5966|6565|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var c = P.p + P.u(a),
                f = new Error;
              P.l(c, t => {
                if (P.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [c, f, b] = t,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) P.o(f, r) && (P.m[r] = f[r]);
                b && b(P)
              }
              for (a && a(t); o < c.length; o++) d = c[o], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
});