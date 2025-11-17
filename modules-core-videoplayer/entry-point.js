try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "35acc937-2792-427c-8076-3f8c46d9697d", e._sentryDebugIdIdentifier = "sentry-dbid-35acc937-2792-427c-8076-3f8c46d9697d")
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
        var e, t, r, d, c, f, o, b, n, l, i, s, u, p, h, m, g, y, v, w, k = {
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
          131: "4aa3ac707abaf1f6014d78b00a2f7ef0",
          278: "f6003ae76ab5761fa9efd0a4b5c501d7",
          299: "9b0193dcddeaaf8b53ad2ab4b9613345",
          314: "3be838085429be47034613fdca2a9a1e",
          439: "a0ff470cbd3567f8455c39a9804f2736",
          601: "9608c813257d340e5b1aa827a44b8544",
          662: "a8abc731620fa21d0971f1d32edc8b23",
          824: "dcbcfd1970cd0a16631de8fc4f83ce76",
          907: "4ad7b84e9881160da385870dbe0d138a",
          1030: "9f0815b3d029b4b184425c3fabfbf9d6",
          1054: "696e729424460c7bbf787bafdbe50c8d",
          1098: "f303dfb19bd91d0c18db337875a31a14",
          1242: "9a93da648f9a189f5e624816187a0946",
          1254: "ab37874938f4128087dacd4d446f3bbb",
          1703: "6129170d56824ee6d6d346d90bfc6a17",
          1773: "73cd5817fcc9788e73632dceb8b90dc7",
          1822: "4e88e7af559d8e9f6f78e0ddb88fe3dc",
          1868: "b46b9a5ca55c740ca6cfeaa6bbabc45e",
          2156: "b899227a20fe9fa7302b9fa8901b7098",
          2169: "5e96586331c5a60863f83a219d29dd0a",
          2171: "af091ab12ce943f771ee11513fa3886b",
          2217: "53500de0e5bfcba26bc4c1de69019c28",
          2221: "cf3ef63cd946f16dd2cbfc9deab01192",
          2243: "18803b76bfa4bdba920bab5a7a7697cb",
          2293: "e4af3b7f64359b4b923cc73c3d8c74ed",
          2306: "d9a1ffafa935a7333a88e1f34b1b4644",
          2347: "9a8f8721521150d7ba98574c40ef709c",
          2365: "0706616a6728fd7d279af0b7cbbaa322",
          2398: "2cfc81ee6bc400df4b09e23046542a14",
          2466: "3dea04b1af085fbb674e86851dfe95fe",
          2635: "20941e35cea753ce6518d4d7cff88a11",
          2642: "eb0fe02de0dcf2a796e8ee1c068a6832",
          2657: "494d7f28e2fd903c47b5d3f02f6baafa",
          2678: "33982ca3d66ffdd2f4bae9f4d7f7605e",
          2864: "0dfc51d71f682ef34402ea9f5a2d1ff3",
          3034: "03235ba210f3fd1287ebff2ab70c5344",
          3197: "424650429be66e6616ba3c91c7c73ded",
          3343: "b78146470783f86fb737a9510e997cc9",
          3370: "0a88fe2d2c1fe10ab712731739920d08",
          3475: "4d0c238656a447410b57067978911d6d",
          3486: "fff05afed5b3f3fee6d48eb950c42543",
          3697: "0bf93914b448b96cccb17fe7443020d4",
          3885: "1006aaa1cecc734cfebd53e6010d1d9a",
          3941: "177b094d64c549fbe0ed37f68704e062",
          4011: "b7aaee74f974a70e4ddfb2dab356209d",
          4154: "5ef78d270ac7901c2f1e7c7ad975d6de",
          4528: "0c1ca26cfd2995ae7f40efb5e5f22eb5",
          4550: "1aa78aafc0784447de303ebd693f4ee8",
          4578: "63a5e93e7cae8dc5911f06d7d7a0dda0",
          4598: "a3943293e5e0e9ff0cecd48952784a8d",
          4621: "72455c4cf528bfd55624900ea1be63b1",
          4700: "3d3d4db8f8dc17d134fd98c2654484f4",
          4710: "a7663b0562b0db22d0b6b194a1d2abe0",
          4731: "621636510a5b5feb82fbb7289e737a1e",
          4799: "783400553f66b0e00ace45f4a79da57d",
          4851: "ba72574f886059d4c092bdcd63b62891",
          4861: "38df8afba6a87c7423f6128ff33cca2e",
          4913: "7e21d1a3e6931fdacfc6233cf7a53079",
          5016: "752029bbc08e5f17a78f04462bd845b7",
          5018: "5acf6f466384b8334003620bd937e6b8",
          5055: "cfa7cf6d973fad52d24fb51c8515c4f1",
          5076: "77aa0b14f3c7408cce81b226c89d05c6",
          5233: "cb2a55711882584ce9336053c6d208d2",
          5259: "b22153acaf02d7607ef07c1a31238e5a",
          5389: "cc5003cf46bbd3accf5941f410bbd7c1",
          5473: "fe4beaec360514e6291ce6ded329c24f",
          5530: "b75299f61dac567bf6ecef90ac108e3c",
          5639: "b6d3efe04a1f622972817932629e0095",
          5663: "5ed198ea761e01824739d1c354716caf",
          5742: "bebbb946d572914c321cda00042ba515",
          5830: "cbacfd020c897e9eb319fd19ae411439",
          5832: "495ede672f7d5a3ff1a6aab30672e932",
          5859: "c2dc0c051de3728d7e71870217d863fa",
          6088: "03c59842463b0464dd5a049c78078c84",
          6267: "1b8a647610ddb61cc9ec5b61284f1c22",
          6280: "8e2ad45b1f75df82f129b7611b9b753c",
          6285: "6b965bd127e9685249e979a2c64c708c",
          6361: "4ddfbfee7f741ab79017033f941757e3",
          6664: "1a547a9dc3b78b05e3aeb9e68213adc7",
          6879: "4b7fd287cf4b920ad2621053c8daa69d",
          6891: "68cf4cb771a27e2d93adf11cd525174d",
          6929: "cfcd6139c5451073355c247ab168c624",
          6997: "793a359242f782a23e98a7e5eb05adb5",
          7010: "aad9ec9c1edb0f4e3bd45c8b5537826f",
          7073: "c225a691ff9f38b2c523768b933b5384",
          7436: "1f6bf2258bd229f9fc7f7273d8924ab2",
          7452: "937468620d2b4f6f0b51079f1f77ce50",
          7453: "bcb1f2b45c448c88a3904d11ac599f4f",
          7684: "a19fc9ef4d90b65f72d5b9f217d7ebf5",
          7731: "6fbaddd80bffe85f8fa549006cfa1268",
          7970: "6f8827a02673818b13c87e8506230349",
          8240: "5c16f4194c1ae83e4e40bbde36117fcd",
          8271: "72c5f3d75e4a978d3baa8e2ec4fdff13",
          8272: "fe13f17fc050616eb4aee81b4648086c",
          8284: "5dd852327423d22f5f282b3fb51bb16e",
          8391: "74de218021603be1a9703869b0c4aaf9",
          8431: "c5be2fa1853fa090d216652e57c1a48b",
          8517: "1c7ece484d688c9a6aef9727abbc67ac",
          8755: "b9ad6e24dd6548d73131d50917ef91a6",
          8880: "055bdfcaa13e2808d823f3073e1686ef",
          8970: "8a36d2f12e289382ec4893ef7bc54e4b",
          9022: "f4422498e098fdda29e327d44a6d4ef9",
          9028: "0fd53c3356479256c6b9a8d6b479ba5d",
          9126: "c31b5767f336cb53d234622f9e6817a5",
          9377: "08c0006851aaecd4333d9434a6edc372",
          9587: "33a3f45b9303762dbed7f6892831f815",
          9615: "440b2a79acecbff590cafacbc92861dc",
          9719: "bfb7c4d9e0eb1c7a54eaf8dc53365dfd",
          9757: "5de9ebebf8ffc84d08dce53db7de3bc7",
          9813: "e5a3fcb801620a39a4e705984b8fcc6d",
          9936: "598d488d472f90498475c2471036d4db",
          9990: "dd850c41eda0fabe59bf7604add02137"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "68fe3923c1fdc0da6a68721717e87aa9",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "a126229ede95b503bfddbd53efcedae3",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "d6d5c261867e7172fa1bcdafedebbe10"
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
            var f, o;
            if (void 0 !== t)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, P.nc && f.setAttribute("nonce", P.nc), f.setAttribute("data-webpack", d + t), f.src = e), r[e] = [a];
            var i = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(s);
                var d = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), o && document.head.appendChild(f)
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
                o = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : f > o.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                b = [];
              return "default" === t && (o("@gsap/react", "2.1.2", () => Promise.all([P.e(2229), P.e(2828), P.e(4154)]).then(() => () => P(4154))), o("@popperjs/core", "2.11.8", () => P.e(9813).then(() => () => P(9813))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then(() => () => P(2841))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then(() => () => P(2217))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(6088), P.e(4550)]).then(() => () => P(2169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6565), P.e(9757)]).then(() => () => P(9757))), o("clsx", "2.1.1", () => P.e(439).then(() => () => P(439))), o("graphql", "16.11.0", () => P.e(601).then(() => () => P(601))), o("gsap", "3.12.5", () => P.e(9719).then(() => () => P(9719))), o("hammerjs", "2.0.8", () => P.e(7731).then(() => () => P(7731))), o("lodash", "4.17.21", () => P.e(5076).then(() => () => P(5076))), o("react-dom", "18.3.1", () => Promise.all([P.e(1098), P.e(2229)]).then(() => () => P(1098))), o("react-popper", "2.3.0", () => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then(() => () => P(2635))), o("react-router-dom", "6.30.1", () => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then(() => () => P(5389))), o("react", "18.3.1", () => P.e(8431).then(() => () => P(8431))), o("uuid", "9.0.1", () => P.e(2657).then(() => () => P(2657)))), e[t] = b.length ? Promise.all(b).then(() => e[t] = 1) : 1
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
              o = (typeof f)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && r != f) return r < f;
            t++
          }
        }, o = e => {
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
            c.push(0 === f ? "not(" + b() + ")" : 1 === f ? "(" + b() + " || " + b() + ")" : 2 === f ? c.pop() + " " + c.pop() : o(f))
          }
          return b();

          function b() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = c(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, f = 1, o = !0;; f++, d++) {
              var n, l, i = f < e.length ? (typeof e[f])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !o || ("u" == i ? f > t && !r : "" == i != r);
              if ("u" == l) {
                if (!o || "u" != i) return !1
              } else if (o)
                if (i == l)
                  if (f <= t) {
                    if (n != e[f]) return !1
                  } else {
                    if (r ? n > e[f] : n < e[f]) return !1;
                    n != e[f] && (o = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (r || f <= t) return !1;
                o = !1, f--
              } else {
                if (f <= t || l < i != r) return !1;
                o = !1
              } else "s" != i && "n" != i && (o = !1, f--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t, r) => {
          var d = r ? i(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !b(t, a) || e && !f(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var c = e[t];
          return "No satisfying version (" + o(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
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
                        o = t && t.target && t.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = f, b.request = o, c.parentNode && c.parentNode.removeChild(c), d(b)
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
              var r, d, [c, f, o] = t,
                b = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) P.o(f, r) && (P.m[r] = f[r]);
                o && o(P)
              }
              for (a && a(t); b < c.length; b++) d = c[b], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
});