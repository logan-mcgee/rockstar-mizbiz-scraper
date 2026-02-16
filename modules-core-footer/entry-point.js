try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "20a9c7f4-da40-4ee2-966c-1118cc299bfc", e._sentryDebugIdIdentifier = "sentry-dbid-20a9c7f4-da40-4ee2-966c-1118cc299bfc")
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
        var e, r, f, t, d, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, S, P, j = {
            17411: (e, a, r) => {
              const f = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = f(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var f = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, d = f.length; t !== a && d >= 0;) "/" === f[--d] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = f.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var f = {
                  "./root": () => Promise.all([r.e(78), r.e(2955), r.e(1127), r.e(8429), r.e(9623), r.e(1788), r.e(5966), r.e(2924), r.e(2841)]).then(() => () => r(32841))
                },
                t = (e, a) => (r.R = a, a = r.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var f = "default",
                      t = r.S[f];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[f] = e, r.I(f, a)
                  }
                };
              r.d(a, {
                get: () => t,
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          T.r(t);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & f && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, T.d(t, d), t
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce((a, r) => (T.f[r](e, a), a), [])), T.u = e => "js/" + {
          68: "11d7746f724fd7f1f5a92dd76b948fda",
          78: "fe2feab4417359fa48e6d8521e445c48",
          131: "3078a3d3c998457d8e2392c9b162619d",
          173: "9afeee5c04a7c764d5abd3c5f8ae4cb2",
          278: "696e682ac60264b8f613006d5b6148c7",
          299: "18c7be572454270ab8cc5808bd5159d9",
          314: "6a71f4e096c7eddc6074bfa956a14a7f",
          450: "a0b6749f7bb58b17914082c7f285face",
          539: "f16fc1fca6249e06a24c692c7d42a2a4",
          662: "62e72b956b80d4566ec4703aa5871946",
          824: "0251551caa6f6c83ad59ea174992ae9e",
          907: "7435f3c70593c9bdefa6c3829c5cd0f3",
          1054: "badb671a307f96a13b9c3fa8b22fb0e4",
          1098: "1cb9a3726bb9e016e228793fc153538c",
          1242: "622f0af08a7acc0ccdcbd7fc04e8bae7",
          1665: "6be694b801024ec31293100232f146e0",
          1758: "038f87225f90dfb449ae24d00cd3bc88",
          1822: "fb9c0c1750a40354b63477b6f58ae100",
          1868: "288fd435dd642f3d603917643c7a446f",
          2156: "f2ac56c3e0b1b772664e413a91236ed7",
          2169: "e66fad41f7f1531f68386b67a28274b4",
          2171: "178c9f2382fa70019fd241617e66f934",
          2221: "cf90d7f9412b2344fc0e9843ccc5c2ae",
          2234: "56eef0aaed7ca70df83b951caa3a155d",
          2243: "24ea60f709a1a5406835e59d211a7a3a",
          2306: "4774953446eee2dbe80d1e83b0c4a751",
          2347: "afadd9583ae66a946407497747691781",
          2365: "e03ac05aeb2aae2b21c3f75df107f927",
          2398: "065974bee12627dc53bdf3ce127f2812",
          2466: "7406a684f0ded38820e3d39a73c2e1f0",
          2642: "ecf499d851d336cfdaff700b3d1b2d92",
          2678: "459e60f43554a29cb1cc6e0b15dc1294",
          2841: "f58d02ef9064347c8990b9828db5921c",
          2864: "a02027b70d0357c15bdc95abe1ac980b",
          2924: "880aadecf1724fc4b5fa5db7d9e52259",
          2955: "f1227f4536d04a70775633072f778b19",
          3034: "c1c32ba56160e915eefcd40686738ab8",
          3197: "24e759f49d30d65859111cfcec0e862b",
          3343: "9f355f9469db37e46399c29b1b4b3e74",
          3370: "e8578b8fc407712b54f1c2703beee1d7",
          3475: "cca39f0de36973e34b35e28bf69a376c",
          3486: "4197e77afe33498232d808e60e9d25ed",
          3563: "43c8a7733d66f46c8b1506460b13f8b7",
          3697: "7375deefe8c2ae29b0b0169c5d05da6b",
          3885: "ff3c53b1b571df6a30a1c734e0e0924f",
          3896: "5d9543fca428db81ec845a49fe5f38ae",
          3941: "f34a460d533ddd3ef9d4ee8d98c4cd10",
          4011: "13b6c66ba570777ae32b9f78da5b8775",
          4528: "350b88b7d96582c8e8ec30b1ded403e2",
          4578: "f76be99d1dc84a2c6324e79f3d91563a",
          4621: "20104b3140816b65074b1c4df6dfecaa",
          4700: "84358098f7c1798d3349cacc91d56994",
          4710: "d8e8fc6fd2b9cf2639f578cd55b99a95",
          4731: "65e0bb63c2f01f61013055882d4e9d1a",
          4799: "a487feb071d3321360512305d7cd34a2",
          4851: "b27ad436a044ece0aa115e5160c2b9f0",
          4861: "e52df5586e5178518ea4c0f655a85083",
          4913: "16dc8abb3c8f078594a0f0b1c13fbec2",
          5018: "536da3fab97756ce5a349f1d87c76864",
          5233: "0158b35c3ab27f583f347169e8035485",
          5259: "fe2e54496a224012edb6d00b49e24308",
          5265: "e06462322bcf3450b1f3a384461013e6",
          5389: "3d918cce0e63b118fd8310b1a107f540",
          5415: "a724da36ad4026de6e86c2838f10372a",
          5530: "aa58cae9aca513f3943d6d363e4f6299",
          5639: "9f9e6dce606c855b34172f45669b49cb",
          5663: "3c4855f323c0c49e80e8d841ad487c10",
          5742: "af8828576a35eb01ae3b92b590d8ed49",
          5830: "ee5aac929d0dad6712b6c76c9e378c90",
          5832: "244915ffde4b3aa290ba23b0b8b19544",
          5859: "323a6188a68f99efc42f83d9f02177e4",
          5941: "eaf2648c72a5cbcb578238cabffa5ade",
          6088: "5d18e67ba2aeee2644bde10d5081b413",
          6200: "a9e10bf89da0158ec0c53fef494b6978",
          6267: "e454ee30cd417bade216ba708870f723",
          6280: "bb61f36a8fffb7b7a67642da9c94e703",
          6285: "6126615afc0399b35ada3b56529bf693",
          6361: "26b039f9a5e8bc74a3ec151ae4991444",
          6471: "e6d8856ccc4a7960df75245b69eda53f",
          6664: "043433dd50a187a2615c46f85589a4ec",
          6805: "d517ab2698833fce94a03c9f6779a636",
          6879: "9bdf79f10cf609fdf4c442b03355b4e6",
          6891: "4e3cfa2c4a0fc877a702af310706b133",
          6997: "de3395cc2646bf73194f3dc45bda5007",
          7010: "822a20a53fcd0c7ad789d4071ce9cc04",
          7073: "1b68d36440461fa0c42d16c7e70a644f",
          7407: "c16aeca6b8d93cc3a38c5f328c0c5fdf",
          7436: "7d6c0fdcddccac4de99eaa1f98bc0ebb",
          7452: "a09e521340663a6a3fba54082461af89",
          7453: "f10d7a1a214f7c3646055cfc4361a3a6",
          7970: "2fb390c8dcf7fdfd46d45a8839657705",
          8068: "9aca65f0479ac8cd4ab8e9140129e5f7",
          8113: "84c27467c5a95893a1cebc57f799c1e0",
          8240: "416ca21368d222ae51ee12ab65a6e063",
          8272: "76340089383325f03562a24f953a109b",
          8325: "fe8c779299e1408aeeef8663764565e0",
          8391: "2446f3656d90acadf8d1544befda78ed",
          8431: "d22f00632abb1180c4d3a25d2e4f8456",
          8755: "6d07450e2db14dfc3eef7155e1a42522",
          8845: "1bd7aeedeb322bfc8582e07dfa1657ad",
          8880: "92d83349ddd6fe0ca4887a1e9df6fa8d",
          8938: "64a697041eebe80204f1e23da14c92aa",
          8970: "a2816199e81510f8b6b40c4c3f6f684a",
          9022: "d7e74762bce0047029426f92619e3617",
          9028: "8a7cb7d83d1b1f1dbcdde30c9d422fe8",
          9126: "869937e85d3cc2dc07a7a685d87e8e26",
          9377: "844d504748e52afd5c0b755f3acc2b9c",
          9512: "4f3cc7cc82804081e52325cb12a0d66b",
          9587: "59737cfccae3b8eabbe5624a5ed686da",
          9615: "14ae58ae63a74ea8d623d7be4bcec45c",
          9757: "f287e9980d0fd019b677cd615cbdf3d4",
          9760: "ac45bf0e9083e97376391d8e82e7cc2a",
          9936: "41a93c8bb9a4b4110beccac89627fc95",
          9990: "f283215ecf192acdc00bf76f27c3af75"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          78: "f23692dc02c7d751cd6d5f1cfbe6dfee",
          539: "05a8f207aa5f6bea84115c4eff3ab605",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          2924: "f8c1968ff675df159b6c305e0f588a38",
          3563: "cc22dc60f76a2ed6735c907561683650"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, t = "@rockstargames/modules-core-footer:", T.l = (e, a, r, d) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", t + r), c.src = e), f[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
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
          T.I = (r, f) => {
            f || (f = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(f.indexOf(t) >= 0)) {
              if (f.push(t), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var d = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, f) => {
                  var t = d[e] = d[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!f != !o.eager ? f : c > o.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!f
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(6200), T.e(1665), T.e(2955), T.e(6805), T.e(1127), T.e(6088), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(539), T.e(2924)]).then(() => () => T(95654))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then(() => () => T(89757))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.13.1", () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(2955), T.e(3563), T.e(1127), T.e(8429)]).then(() => () => T(23827)))
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
              for (var f = r.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = r[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            f = r[1] ? a(r[1]) : [];
          return r[2] && (f.length++, f.push.apply(f, a(r[2]))), r[3] && (f.push([]), f.push.apply(f, a(r[3]))), f
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var f = e[r],
              t = (typeof f)[0];
            if (r >= a.length) return "u" == t;
            var c = a[r],
              o = (typeof c)[0];
            if (t != o) return "o" == t && "n" == o || "s" == o || "u" == t;
            if ("o" != t && "u" != t && f != c) return f < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var f = 1, t = 1; t < e.length; t++) f--, r += "u" == (typeof(c = e[t]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, c);
            return r
          }
          var d = [];
          for (t = 1; t < e.length; t++) {
            var c = e[t];
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
              f = r < 0;
            f && (r = -r - 1);
            for (var t = 0, c = 1, o = !0;; c++, t++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (t >= a.length || "o" == (i = (typeof(b = a[t]))[0])) return !o || ("u" == s ? c > r && !f : "" == s != f);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (f ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (f || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != f) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (t = 1; t < e.length; t++) {
            var p = e[t];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, f) => {
          var t = f ? s(e[a]) : e[a];
          return (a = Object.keys(t).reduce((e, a) => !n(r, a) || e && !c(e, a) ? e : a, 0)) && t[a]
        }, u = (e, a, r) => {
          var f = r ? s(e[a]) : e[a];
          return Object.keys(f).reduce((e, a) => !e || !f[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, f) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(f) + ")", h = (e, a, r, f, t) => {
          var d = e[r];
          return "No satisfying version (" + o(f) + ")" + (t ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map(e => e + " from " + d[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, f, t, d) {
          var c = T.I(a);
          return c && c.then && !f ? c.then(e.bind(e, a, T.S[a], r, !1, t, d)) : e(a, T.S[a], r, f, t, d)
        })((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = l(a, r, t, f);
          return c ? i(c) : d ? d() : void m(h(a, e, r, t, f))
        }), k = y((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = u(a, r, f);
          return n(t, c) || g(p(a, r, c, t)), i(a[r][c])
        }), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then(() => () => T(12841))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then(() => () => T(89757))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then(() => () => T(32169))),
          21994: () => w("footer", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(3563)]).then(() => () => T(23827))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(1665), T.e(6805), T.e(6088), T.e(539)]).then(() => () => T(95654)))
        }, S = {
          1127: [71127],
          1788: [81788],
          2841: [20270],
          2924: [2918, 21994],
          5966: [95966],
          8429: [18429],
          9623: [9623]
        }, P = {}, T.f.consumes = (e, a) => {
          T.o(S, e) && S[e].forEach(e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!P[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              P[e] = !0;
              var f = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var t = E[e]();
                t.then ? a.push(_[e] = t.then(r).catch(f)) : r(t)
              } catch (e) {
                f(e)
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
                539: 1,
                2841: 1,
                2924: 1,
                3563: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var f = T.miniCssF(e),
                  t = T.p + f;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), f = 0; f < r.length; f++) {
                      var t = (c = r[f]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (f = 0; f < d.length; f++) {
                      var c;
                      if ((t = (c = d[f]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(f, t)) return a();
                ((e, a, r, f, t) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", T.nc && (d.nonce = T.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) f();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, d.parentNode && d.parentNode.removeChild(d), t(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, t, 0, a, r)
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
            var f = T.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) r.push(f[2]);
              else if (/^(1127|1788|5966|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((r, t) => f = e[a] = [r, t]);
              r.push(f[2] = t);
              var d = T.p + T.u(a),
                c = new Error;
              T.l(d, r => {
                if (T.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", c.name = "ChunkLoadError", c.type = t, c.request = d, f[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var f, t, [d, c, o] = r,
                n = 0;
              if (d.some(a => 0 !== e[a])) {
                for (f in c) T.o(c, f) && (T.m[f] = c[f]);
                o && o(T)
              }
              for (a && a(r); n < d.length; n++) t = d[n], T.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
});