try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "be9e6ea3-4b7e-473c-ba0b-7de4b33028f6", e._sentryDebugIdIdentifier = "sentry-dbid-be9e6ea3-4b7e-473c-ba0b-7de4b33028f6")
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
                  "./root": () => Promise.all([r.e(9889), r.e(3736), r.e(1127), r.e(9623), r.e(1788), r.e(5966), r.e(7574), r.e(2841)]).then(() => () => r(32841))
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
          68: "a236fdc44c88db92b9defeeb22a90230",
          131: "f6e5339cca1b6fd470c143523911f84e",
          173: "190386360f71eb0760680a350b45076b",
          278: "379d94f6d015f29125c3de29bff24e69",
          299: "3912779019ebff84e6e684c570456211",
          314: "1bb688c1b26bffcb2bd107c8c85ed4e2",
          450: "fab5ec6c3499d61ed750fd2dba932ee1",
          662: "24d16ee36c62a6de060ef6fa7175e4aa",
          824: "37dcb5870af30e71947a1a38e5413d2b",
          907: "8838be07ca4e5f96286fcad9982c557c",
          1054: "2d8834dae670e40e24da258005447d97",
          1098: "06caaa33404204d5296c193e901004b0",
          1242: "4f3801a9628112105f25a982167db74a",
          1295: "4071be28c2b74422466bcd9424fe0b31",
          1758: "66bbbba1ed049e1c8faf98011a2551bc",
          1822: "ab88b0fc58a56e61961a64f441126096",
          1868: "19f6d9607563b24e90d89a3a2a8ec575",
          2156: "489ac7a4fa5807db937fd028af1149e6",
          2169: "d21d4b4642e57aafb786be808d9268e6",
          2171: "35f9ffc0720ca7b3265a2d0dde70e051",
          2221: "a96a1d70fcefef225ad06785cb488ea6",
          2234: "1292ae435541115bd00791f7038ea82b",
          2243: "2d49fae1439ee52d1dd3ef716f8692a4",
          2306: "06db889f31d5eebc40f5580de19ed9b6",
          2347: "026eac7717771ab84c50a40be9147caa",
          2365: "41355b861d376c64984bf508cc076a43",
          2398: "982ac591369ba12c8714031b81f5700e",
          2466: "0c7ed95c7696cd1a8ee6285553193dcc",
          2583: "4368ca9560621ab702eac7b94a10d1ea",
          2642: "37731538d0fcf5c5adc1f1fe80461316",
          2678: "e4807306a0d25dac502e1fba8c4a3540",
          2841: "7daaa007df7504044ae56cf25dea3a63",
          2864: "bb767b7c63e5cbe13de8983695df4690",
          3034: "99ef8ff888c4a9be34eda7b62873840c",
          3197: "88339940f6e5601ef3906928009f428d",
          3343: "15986d86e9f6671d3831ac06e28efabf",
          3370: "a362e861edbbdf2fbe3b556d4419856b",
          3475: "52074f76bc2b5f06bf2bda627920710e",
          3486: "942ff5d85a349d06ceedb0ebbcda7bab",
          3697: "4a18bf2c26ea610360f30be42e064a2c",
          3736: "d695c9ac8cb6d53b5fd2cca9a2119ca7",
          3885: "b00b29f8767fb1d1aa496ffd480b4e99",
          3896: "3fd741c14e4c1a0a90f470ca597b661d",
          3941: "02995cbe8524419ecaa9b7eed4d698e8",
          4011: "fc9fe045f276817b5ac87d5efd91860f",
          4528: "0fe14efb33ffa14b69cb5db7e22535b3",
          4578: "30e9222f48d9ea7aea07ca254f3ecf9b",
          4621: "4f3e00ba8baef9eae1b8f0dcc9a0523a",
          4700: "c7d1d7a8357d188582fc0919b62c0fb7",
          4710: "d29eaf9425e7dfd3f0b0af3cd20819b9",
          4731: "5c496f6cd589a1376e7f44b3fc391fdb",
          4799: "595f1b58c7059f7ebc8b35e175edf74d",
          4851: "191d3fd2d4a0f333cabfd0ee6ffd9132",
          4861: "9f19f455d9f685e22dff33da369e0b08",
          4913: "2da922ec01535da81a965c3defaca365",
          4964: "00867772b050f277e4b6c4f0c1e630bd",
          5018: "359ef86a24e9b3deb2922cbf07c5d006",
          5233: "30f976cfacf227335b9c0e3a472ee04e",
          5259: "961e13c466f9762c52cdaac05f367278",
          5265: "5dc6fc514f03d3f5524148a24e9ed771",
          5389: "6796dad099ba2aebca15b28362095c63",
          5415: "00d075ea400f7ecf5f8164d3a507270e",
          5530: "2f2bb598f2fe50011462661aad0803c5",
          5639: "df1bd6d58c9fcfd2e609d6830128361f",
          5663: "f25770f9197e9962722cdf9f0ccfcda8",
          5742: "ca559d45c9b122e6e668b07080948543",
          5810: "5a83a34039d08175d1584176020680b4",
          5830: "6e8bbb594fe5716afeb2739bc158b210",
          5832: "bb66f1a896dd18878c675796191af55e",
          5859: "c6f405f47ffcb4271cbf394606d22d9d",
          5941: "4fca5c178a4805a4ad6e00a7bcf57ade",
          6088: "a1d58b01fc01763abddfb992b2b62c87",
          6200: "822a1f93129c0e8452d0b41f3e27f832",
          6267: "40c2906de83907b6b670c07d8c1ed93b",
          6280: "4a06f8e806d5ad937a93d7a8307386fa",
          6285: "487372c6671c24e81c3ca6fe2f0835ec",
          6361: "2d99999c44735509b5d4ccd9295a125a",
          6471: "9a83a5f47d1a58c3c9a9f1b9978ff6bd",
          6664: "a0f119059c63a02610f70cd3659d5c76",
          6879: "f82d4b73ecc6a1ac9df96a10505f52b3",
          6891: "c44c26d78637b556630d17757ecd3bc6",
          6997: "11a041bd528b5903ae957c7de7efdfba",
          7010: "b130061798a9d05e1b9e731359aa0cc9",
          7073: "2622abb5eef3206bd187e8b62a383f8a",
          7407: "b2465cb10ff874496e83c597c7eb5dfb",
          7436: "e5c41502ad0a76c24d7f2fe9159c5c25",
          7452: "6176aecec1130792c5eea4644638286c",
          7453: "d1b20c8f7925d4a9caf6de6a26680a10",
          7574: "8691fda4d6196a280a8e812d09d2fb6a",
          7970: "1b4d1ed7088d47cb44bd0719a2524563",
          8068: "a849de5d38c47e066831d1e97794f4ad",
          8113: "b635283cd74727e377b08e63f3927924",
          8224: "874836ac5ca995258fb8da77f248d18e",
          8240: "8e950674ec47a76acf07fcc7d84b7aef",
          8272: "eadca959d764a7c239421fdd97b8a8fe",
          8325: "7b82c67e387d86dc13bfbecfe06512cf",
          8391: "4b7c3058fbea8bdaa342dda052be69ff",
          8431: "5e2712a61a97e0a3d515af6e73826c1e",
          8755: "529ef1e67a28326dd469751d702d147b",
          8845: "0a3bc80e00b307e53eacc8b8c9db1d21",
          8880: "4adf1a0068e51ed68bc27779184104b7",
          8938: "b7050d09348b0ccc121e2638780d1b08",
          8970: "08861866264ca931643722f91f76e9ea",
          9022: "315c46a550ce00cb4d7cd264275502ab",
          9028: "6624f2a3bf257a87ee270636ff6f6905",
          9126: "1dfae84ba0656c865ad81e074245a6ce",
          9377: "a9d32fe00752ff7c19500eade84c23b3",
          9512: "d5d452e4e522ef8274d33f9d7eaf430b",
          9587: "2fbaa956aeb7ec76a49e077bbbe5ed36",
          9615: "5697b08d72722419d99a194138d1f805",
          9757: "3b75821323ccbcbf98a086f285bf7eb8",
          9760: "253bf53bfb97f5796b0345049675cf9d",
          9889: "d0200563282df28743ebf8bf0a1a6d08",
          9936: "2d4bab1ac95d34c91e3ca8108fbc1d9f",
          9990: "79889e3c43b651721187a3b455073fe1"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          1295: "d198289300d84001b2bfc65fe4e76b9b",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          3736: "4075475bb47938c3578a77cb580d147d",
          7574: "f8c1968ff675df159b6c305e0f588a38",
          8224: "195ef67b4251623ac7a868628249cdfc"
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
                  o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(6200), T.e(5810), T.e(9889), T.e(1127), T.e(6088), T.e(9623), T.e(1062), T.e(1788), T.e(5966), T.e(1295), T.e(7574)]).then(() => () => T(68786))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then(() => () => T(89757))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-dom", "19.2.0", () => Promise.all([T.e(1127), T.e(2583)]).then(() => () => T(62583))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.10.0", () => Promise.all([T.e(5810), T.e(9512), T.e(9889), T.e(3736), T.e(8224), T.e(1127), T.e(8429), T.e(1062)]).then(() => () => T(41928)))
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
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then(() => () => T(12841))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then(() => () => T(89757))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then(() => () => T(32169))),
          46940: () => w("footer", "@foundry/react", !1, [1, 5, 10, 0], () => Promise.all([T.e(5810), T.e(9512), T.e(3736), T.e(8224), T.e(8429), T.e(1062)]).then(() => () => T(41928))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(5810), T.e(6088), T.e(1062), T.e(1295)]).then(() => () => T(68786))),
          31062: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(4964).then(() => () => T(62583))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098)))
        }, P = {
          1062: [31062],
          1127: [71127],
          1788: [81788],
          2841: [20270],
          5966: [95966],
          7574: [2918, 46940],
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
                1295: 1,
                2841: 1,
                3736: 1,
                7574: 1,
                8224: 1
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