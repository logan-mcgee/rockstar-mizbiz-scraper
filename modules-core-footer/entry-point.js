try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3c825e96-8650-4037-ade5-4d99ca7057ca", e._sentryDebugIdIdentifier = "sentry-dbid-3c825e96-8650-4037-ade5-4d99ca7057ca")
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
        var e, r, t, f, d, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, _, k, E, S, P, j = {
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
                  "./root": () => Promise.all([r.e(3004), r.e(78), r.e(8996), r.e(1127), r.e(8429), r.e(181), r.e(6990), r.e(7161), r.e(2841)]).then(() => () => r(32841))
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
          68: "7924ddecde806e80c2d52e2a2706ca0f",
          78: "898376c94c016bc4bcf6e9ed77d7fc89",
          131: "b8e06ebf4722479aa6ec4ba09aba3881",
          173: "4229830eceee72b5711791ea5732b91e",
          278: "c2885ed5115f22fa220eee25bceae4c1",
          299: "e98f618f2293e6aedb2bc9e8330a7fb4",
          314: "faef3dda90f1017e911a57be6b75f4bf",
          539: "0434f28a38968edb984625b88eb9e77d",
          662: "08101bc2e7f93bb8e44ed77101466c44",
          824: "91b89229960abc72933acda9d962b1d2",
          907: "5be1050c3aac3b01d7c2a5c7f775c069",
          1054: "990cfa6b3b19bb4147f1ef886f51c90b",
          1098: "f77803803d0b5193ffcbb483d5cdfb1d",
          1101: "63557bbccdd589de87cc0db7a48d8a05",
          1242: "43b364ec5aab0e8421ef01ff5bab76cd",
          1758: "dee512f6135061975013f37830f8425a",
          1822: "73d5b39deca09a4cd0e0ca25dc120088",
          1868: "94d4ea28909eb8a5c0e59f96217fc2e6",
          2156: "69262ec3f84f0cb1db9765c3827272cc",
          2169: "6e7850df69f2a5beaf21410d5ba8b2a6",
          2171: "36a4b8000c8d10b7e66a25386a6b33a6",
          2221: "1940d5972211fb3cd3a8a05f204268a2",
          2234: "67e6a6004851eb409f46412a09d15022",
          2243: "251faba33f026382dfe28d42224b6269",
          2306: "fe0f8e828fbb5060edf7bfac0f882b97",
          2319: "8c9aad31438fe532a60cca95bea56f2b",
          2347: "8c838589b2d377d42dac39f605954a05",
          2365: "c85c0dff8b49618721c26d6d36738cba",
          2398: "3e28b73696bfc06f38916013bb1c138d",
          2466: "6f598f80c1536008beb05ab8bfb96216",
          2642: "19e5403b9f4add7fb964cd9f2eff5b7d",
          2678: "3beeddf7b54919c57d0ab5a39a9a7642",
          2787: "061804004e1db879ef5b060a9a259761",
          2841: "e04398ed375af714487bb4b4a8e1defd",
          2853: "9bbdf77715d2f7f064942d46ed0fac1e",
          2864: "95a98dd5cae137e3a3b06f61147a3026",
          3004: "e26382626a339fef9679b5feb98a6c98",
          3034: "51c662b6f492d052e8ef52fc31c2b897",
          3197: "4a0246a0694b1b68e962dc62c77c0358",
          3343: "a9fbd4df907302d6304bf5ab5a5a76ef",
          3370: "d51c0853638426796626315f3b624032",
          3475: "511eaf5059af81e1b273ae04365f69c4",
          3486: "f2a63f157dd315c109c8eb140b384045",
          3697: "eb9a1740226cbb5a32005d257b4f7080",
          3885: "684af3d74f6a04a3bd6389607be43ddd",
          3896: "8900b336dfd2d8a0778400d8b380c977",
          3941: "777db8f61b7508f4887317ee12034f68",
          4011: "f1bebc6dab45085ac9647c7092d2743c",
          4057: "d22c9b6a6608ad0f089e9abe71d72424",
          4528: "abcf40fb499da96d4b919cdff3f79b8a",
          4578: "d1c6a37c50dab74184c16a563f1d0a53",
          4621: "286ac53d03e7eb24dc7f06ecb4b8aea5",
          4700: "58a6d1af7be2b529ba9585a1beaf291f",
          4710: "727eea9398e6f021c6262e3ba8d06c15",
          4731: "8d64956707ad546f27ac5a64cd62fdbe",
          4792: "89bd69c84bb4a60c38df501a3ad0bdf9",
          4799: "4b5933bc1f0dc3dcd73df5eb30a9258e",
          4851: "d0a1b4149ebcc74841edf139997ed74b",
          4861: "4c542b1499e2c0ed328d499e21311ef2",
          4913: "685913f201aca8a113062e3c0e5d63ee",
          5018: "d15f0bf8f80067851585f6248e08a9ed",
          5233: "c7b75f3aba11d3e8bc83fec5d7026899",
          5259: "f7598b2021f4352256c07294f97e9c3f",
          5265: "c7deb8656deb8d3abe1f3a7d61b5f06c",
          5389: "286657d1cd199d2fa38cd65b4043cda6",
          5415: "caed01903831ff2351344bd9dff0eed9",
          5530: "f63d2e0d6b4729fc46dcfdbcd6eb0b65",
          5639: "c81579489bcdfd7807258b084bccadbe",
          5663: "f69e5f272a3f486b71b4e0ad8b240b2b",
          5742: "d68a54f247ce2a72de2352aa1f3d10c7",
          5830: "15fc51308d38e34e6e0419a1cf664fd3",
          5832: "0a8094afba23bbce871124b14b66291e",
          6088: "1c2cddb0ac39a9594677b01c35d9faa1",
          6267: "5326add56043966f2558d451dce65250",
          6280: "47fb7e8f3d168a6e3cca485bb813d073",
          6285: "fca03b0fce11c7bf4ebd33dceb1b04cd",
          6361: "125c8ccae50dacd563e1d90c3e2f2608",
          6471: "43056da36fbeb220cf6007aaa5f81fff",
          6664: "bb0918b84487c320638a0b15046c8e23",
          6805: "e4aa73a7ed27813d0d3e9d6776b5720a",
          6879: "5d7cb9ba9ea996090fb5ecdf85ac6b3c",
          6891: "427f0a3133c04f8461cea26d67a79cc3",
          6997: "1b066de49d34f6b579eb1ec89cfd9c7e",
          7010: "72e3f12c0ebdb0f657fabc7447f57cfc",
          7073: "19b616b41192db45532e23def284bac9",
          7161: "f60b7f08c69517f4a1c9bc49de820cdb",
          7407: "8e2fcbbbf47d1ae27be5109c3becf761",
          7430: "09727d40c123837acb2c54844aa77b7b",
          7436: "00d1f147b3a770e5c0bbcb1a73aab269",
          7452: "ae2745074d2252d859a8258b6c63d9a8",
          7453: "88b1a703d8863e86eab76ec6f6ba7456",
          7557: "1640f6be62a03d375d6299a028ce0bd3",
          7970: "720275936d295950786628e24c13285a",
          8068: "c6ecb54ccccadd9a7047f2e0db18cceb",
          8113: "d7e1627ad43280381fea86d680598633",
          8272: "1746440e8158d421e8bcecaaca7ec142",
          8325: "8deca9b74d767cee67bb8a84a1fdf0e3",
          8391: "c7266ee98f45bde3d0b770dce5ac9d8e",
          8431: "27c7369561e6c8d35b25340d88b84c25",
          8755: "40b6e5c38a725154e6bed5f9a6d95617",
          8845: "811ff97f98f8dad46a93ab68972f4a12",
          8880: "82656c1c2fd0b561f805702b1ed16290",
          8938: "56c66c38b27fd1ea03db6c92f2727c57",
          8970: "ae97305892c20d0edb674fb2f79f50e4",
          8996: "7506128d3c9efaaf1b42a6aab1a9876b",
          9022: "334b035f14b147c5e4a5e1679704a4f2",
          9028: "f81c196504de5087b66c3b46a3fb4d9d",
          9126: "8bfc0cd94b98bfa11cec91d972fd799b",
          9158: "c60987c6062d7d70036ad3aff832314a",
          9377: "37178fe36c14220675d9d34d246f29a1",
          9615: "c6f53f0373cc5e9b4bad836c07f0c835",
          9760: "595c6dd786ae4f717ab79528de0efa76",
          9936: "ce395761d8aeb824134a49ba5da6d1a4",
          9990: "6776c04442c014177b1004e097e2a417"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          78: "5978c362f8922e50d0d04c8a910fd9ec",
          539: "bea27abf9ea255353b6df2c5f3d271a2",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          7161: "f8c1968ff675df159b6c305e0f588a38",
          7430: "9cef7a32bdac4bb20c6d6b2710c33bc3"
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
                  o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([T.e(3004), T.e(2787), T.e(1127), T.e(2319)]).then(() => () => T(2319))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(3004), T.e(4792), T.e(9158), T.e(8996), T.e(6805), T.e(1127), T.e(6088), T.e(8429), T.e(181), T.e(8136), T.e(6990), T.e(539), T.e(7161)]).then(() => () => T(95654))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(4792), T.e(8068), T.e(1127), T.e(6088), T.e(181), T.e(8136), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([T.e(3004), T.e(4792), T.e(4057), T.e(1127), T.e(6088), T.e(181), T.e(6990), T.e(1101)]).then(() => () => T(42853))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.17.3", () => Promise.all([T.e(3004), T.e(9158), T.e(2787), T.e(78), T.e(8996), T.e(7430), T.e(1127), T.e(8429)]).then(() => () => T(54606)))
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
        }), _ = y((e, a, r, t, f, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = u(a, r, t);
          return n(f, c) || g(p(a, r, c, f)), i(a[r][c])
        }), k = {}, E = {
          71127: () => _("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          18429: () => _("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          10181: () => _("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          56990: () => _("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([T.e(2787), T.e(7557)]).then(() => () => T(2319))),
          30377: () => w("footer", "@foundry/react", !1, [2, 5, 17], () => Promise.all([T.e(9158), T.e(2787), T.e(78), T.e(7430)]).then(() => () => T(54606))),
          61874: () => _("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([T.e(4792), T.e(8068), T.e(6088), T.e(8136), T.e(2169)]).then(() => () => T(32169))),
          12310: () => _("default", "@rsgweb/modules-core-user-action-menu", !1, [4, 0, 0, 0], () => Promise.all([T.e(4792), T.e(9158), T.e(6805), T.e(6088), T.e(8136), T.e(539)]).then(() => () => T(95654))),
          58136: () => _("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([T.e(3004), T.e(4057), T.e(6990), T.e(2853)]).then(() => () => T(42853)))
        }, S = {
          181: [10181],
          1127: [71127],
          2841: [12310],
          6990: [56990],
          7161: [30377, 61874],
          8136: [58136],
          8429: [18429]
        }, P = {}, T.f.consumes = (e, a) => {
          T.o(S, e) && S[e].forEach(e => {
            if (T.o(k, e)) return a.push(k[e]);
            if (!P[e]) {
              var r = a => {
                k[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              P[e] = !0;
              var t = a => {
                delete k[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var f = E[e]();
                f.then ? a.push(k[e] = f.then(r).catch(t)) : r(f)
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
                539: 1,
                2841: 1,
                7161: 1,
                7430: 1
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
              else if (/^(1127|181|6990|8136|8429)$/.test(a)) e[a] = 0;
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