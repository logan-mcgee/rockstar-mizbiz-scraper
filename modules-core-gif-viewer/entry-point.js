try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "28acbce2-9cfd-4e65-ade5-b7c0024399da", e._sentryDebugIdIdentifier = "sentry-dbid-28acbce2-9cfd-4e65-ade5-b7c0024399da")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, n, o, b, i, l, s, u, p, h, m, g, y, v, w, _, k = {
            154(e, a, r) {
              (0, r(9160).w)(1)
            },
            9160(e, a, r) {
              const t = r(1908).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            5649(e, a, r) {
              r(154)
            },
            1908(e, a, r) {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            4848(e, a, r) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(3082), r.e(3331), r.e(6721)]).then(() => () => r(6721)),
                  "./lazy": () => Promise.all([r.e(3082), r.e(6416), r.e(3331), r.e(5912)]).then(() => () => r(5912)),
                  "./tina": () => Promise.all([r.e(3111), r.e(3082), r.e(4017), r.e(3331), r.e(770)]).then(() => () => r(2854)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(3111), r.e(3082), r.e(4017), r.e(3331), r.e(770)]).then(() => () => r(2854))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            }
          },
          E = {};

        function S(e) {
          var a = E[e];
          if (void 0 !== a) return a.exports;
          var r = E[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(r.exports, r, r.exports, S), r.loaded = !0, r.exports
        }
        return S.m = k, S.c = E, S.y = a, S.amdO = {}, S.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return S.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, S.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          S.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, S.d(d, f), d
        }, S.d = (e, a) => {
          for (var r in a) S.o(a, r) && !S.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, S.f = {}, S.e = e => Promise.all(Object.keys(S.f).reduce((a, r) => (S.f[r](e, a), a), [])), S.u = e => "js/" + {
          131: "af2ba2f02417bca41abd12ccffc5c6ae",
          162: "7174d11caf8365d91fc313af2ff55bbd",
          278: "80682d6396e6337d17751a0d52b09322",
          299: "99d95e14e23ae439cc7870452fba1f84",
          314: "4f9acdf6ce72f406b07bbfd15a5c6e7a",
          662: "b37d1438681fa2e3dbfbcdeed912d1c7",
          770: "75014ef8474b570b0d88c39204515376",
          824: "bf5203588beec86f72faed9d733af749",
          907: "7dc1a2104aae3a6f0d6b3bcbce585979",
          951: "2d71f6b4759f9817246a2e2f7e2d3617",
          1054: "069fe6c84ab09faa1601f606040ed9f3",
          1242: "2b58c9c16495571d220581e073012c81",
          1822: "65b429f2d54257ff8dbff8740ca8646e",
          1868: "faf68c6c06a04d9b5b6b7e0246f2f799",
          2156: "a430f2316259f0d8dfa1d23ae918b878",
          2171: "fd73574a072d6181de1370763703a3d2",
          2221: "90f75c749654b0c1fccc914262ee3b79",
          2243: "9bba971805d0ab33977e042b53cdfcd0",
          2347: "a34283144ade86dfaff7b2bf1792bd9d",
          2365: "ce23360154586b7a1bb664d727950fb6",
          2398: "bb332b021e3df6ee526e9bafdd65ae0a",
          2466: "4cd181a39d851ead4a10c115cb556e4c",
          2581: "56546f757f061ec86ad0bc591f11a26f",
          2642: "de9b70bbf190207a0dece3eee311a9a0",
          2678: "734a87d657508a747f543837798dc991",
          2864: "fc95b0f7cfba80731cd12996ae07caec",
          3034: "ecc22869c9faeb6334fac265bb0e53ff",
          3111: "0ccfca4f4a9dc5ce5175a55608b3ca64",
          3197: "2682a7d3d054c709f50faa66b20907fb",
          3343: "145a766e901b5da55a9a619f6ceeaf20",
          3370: "1e7071f3c9b67eddff1c03eecafe0ec3",
          3475: "fee80358d5d9152d7ce0d4f6c4293c08",
          3486: "a862ef627485b58f56f08ade58aadf03",
          3697: "9cf9bf2f32aa4a4c421ff3bf05d207b3",
          3885: "87d110abdb782b2f13a806b032478237",
          3941: "361575402b8b2564fec7d59c4bc764e8",
          4011: "61eb9254138d959cb984cb6432f1655e",
          4061: "1630bfe39b6ad8b0f26b8502842de5c6",
          4269: "415c60e0308c297707cd448ee3f65c03",
          4528: "e98390d8751905fd83190700b61249d7",
          4621: "b35c001690e1e95e7b0ece6d5391592c",
          4700: "9f015bf271d4e822e8a7e30c8d455188",
          4710: "b401291ae232b8606d629739ae70200a",
          4731: "8e312cb226f168d89d9d4b070f07c188",
          4799: "3edcc77b022e8b7645fb7331f711fcb1",
          4851: "200a56ccf62a9bb7aa51f7e5900754ce",
          4861: "902e227101ccf951f390d3c0709da15d",
          4913: "887772f67a77ae5eb332230713f18bae",
          5018: "d5fb5e8712e9d6334d657ae33ad7f60d",
          5233: "f1f87da3f9d78f30406180932ed52d05",
          5259: "3f9ef8ae73a794f5ab807bcb33ffe262",
          5530: "ff5c114d4fcd29e1c25f09a5ff43f825",
          5639: "7e2c4dc62e0dae29c60512b06d49e54c",
          5663: "897d151d03f25b6317249e63cb3245a5",
          5742: "d14dacc46a2bf98cbc65514de2eee366",
          5830: "30d3f67a2929ac3ea3b0ffcd066aef7e",
          5832: "20844bfa31af5a180ee3a92a8bab7fd0",
          5912: "10110e0a7f3641ab1fec82c42d420811",
          6267: "406a700abcac40db0ffda9081daeeee5",
          6280: "5ddb8c03512b1441642274de6acb9757",
          6285: "d89db05e23ad437d6e06059c580e2e8c",
          6361: "6fde3c742e3d6ef63f928069e689a64d",
          6664: "0bb03ed4462514d242652cd5dce1a75d",
          6721: "9fc1dfa8773d1f9b75529afcff307ea3",
          6879: "9616b8a7a764a4b67f083d8cc83fcf78",
          6891: "bc779a07f87d072e3555c6a77cb99c12",
          6997: "44b5fe38eb759ab55c480323b2730d18",
          7010: "b4096f67ac1ee240ad6bbd114ee5c1b8",
          7073: "6de00263057ac1b22dd0741500de2dd8",
          7436: "c92d4deae9d979e7f0eabc022bb489e7",
          7452: "9e0df5d23e3e840a61c35bd953f83d0c",
          7453: "7e4966bb85611b1ea740542672483ecd",
          7970: "73719e35e592c3fca1f8cea703f538fe",
          8272: "a190ae875ff1c1264132b4ca1c72e664",
          8391: "a780cbaed6611868486a9dd739875cfc",
          8679: "46f6f636f70f465b49bac59cfdf37da3",
          8755: "97ed0358fb57a6f3d325d7aef0aa7984",
          8880: "677268b60d78c468bb7b3da742505278",
          8970: "0528d33c89b572224cb7a1536714c18e",
          9022: "7fa279cdc5e622d9bd5d2e48304b8538",
          9028: "9f9fab23fcc395457862b97c70d3c1c6",
          9049: "20eddb7ee7072be455d58b4e2cc68f65",
          9126: "8c9aeb25b1f90b87e81b30fbb1eba5a2",
          9377: "aedbdc0db75d1d29104530e9bfc99787",
          9615: "974441b8abcfed91c1e7d823d31773d6",
          9793: "2a6c96e6124547c100c9e2e5a6bd93d4",
          9936: "b488cbe095f0f013d8299b486df0f103",
          9990: "aa336c6ceee4d0e007573293b713373e"
        } [e] + ".js", S.miniCssF = e => "css/" + {
          770: "b5328e2f95f5b178239a08711e5d52f6",
          5912: "ba676d779c01782b11e8bbf5bed7b43f",
          6721: "5e608aa107d624a061bf5c1486a248e3"
        } [e] + ".css", S.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), S.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-gif-viewer:", S.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  c = i;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", S.nc && c.setAttribute("nonce", S.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach(e => e(r)), a) return a(r)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, S.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, S.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          S.S = {};
          var e = {},
            a = {};
          S.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              S.o(S.S, r) || (S.S[r] = {});
              var f = S.S[r],
                c = "@rockstargames/modules-core-gif-viewer",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/utils", "0.0.0-development", () => Promise.all([S.e(3111), S.e(9049), S.e(3082), S.e(6416), S.e(4061), S.e(9793)]).then(() => () => S(4113))), n("react-dom", "18.3.1", () => Promise.all([S.e(162), S.e(3082)]).then(() => () => S(162))), n("react-router-dom", "6.30.3", () => Promise.all([S.e(4269), S.e(3082), S.e(4017)]).then(() => () => S(6650))), n("react", "18.3.1", () => S.e(2581).then(() => () => S(2581)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          S.g.importScripts && (e = S.g.location + "");
          var a = S.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), S.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              d = (typeof t)[0];
            if (r >= a.length) return "u" == d;
            var c = a[r],
              n = (typeof c)[0];
            if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
            if ("o" != d && "u" != d && t != c) return t < c;
            r++
          }
        }, n = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, d = 1; d < e.length; d++) t--, r += "u" == (typeof(c = e[d]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
          }
          var f = [];
          for (d = 1; d < e.length; d++) {
            var c = e[d];
            f.push(0 === c ? "not(" + o() + ")" : 1 === c ? "(" + o() + " || " + o() + ")" : 2 === c ? f.pop() + " " + f.pop() : n(c))
          }
          return o();

          function o() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = f(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var d = 0, c = 1, n = !0;; c++, d++) {
              var b, i, l = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (i = (typeof(b = a[d]))[0])) return !n || ("u" == l ? c > r && !t : "" == l != t);
              if ("u" == i) {
                if (!n || "u" != l) return !1
              } else if (n)
                if (l == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (t ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (n = !1)
                  }
              else if ("s" != l && "n" != l) {
                if (t || c <= r) return !1;
                n = !1, c--
              } else {
                if (c <= r || i < l != t) return !1;
                n = !1
              } else "s" != l && "n" != l && (n = !1, c--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && S.o(e, a), i = e => (e.loaded = 1, e.get()), l = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), s = (e, a, r) => {
          var t = r ? l(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && c(e, a) ? a : e, 0)
        }, u = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + n(t) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, r) => r ? r() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, r, t, d, f) {
          var c = S.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, S.S[a], r, !1, d, f)) : e(a, S.S[a], r, t, d, f)
        })((e, a, r, t, d, f) => {
          if (!b(a, r)) return m(e, r, f);
          var c = s(a, r, t);
          return o(d, c) || h(u(a, r, c, d)), i(a[r][c])
        }), y = {}, v = {
          3082: () => g("default", "react", !1, [0], () => S.e(2581).then(() => () => S(2581))),
          3331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([S.e(3111), S.e(9049), S.e(6416), S.e(4061)]).then(() => () => S(4113))),
          6416: () => g("default", "react-router-dom", !1, [0], () => Promise.all([S.e(4269), S.e(4017)]).then(() => () => S(6650))),
          4017: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => S.e(162).then(() => () => S(162)))
        }, w = {
          3082: [3082],
          3331: [3331],
          4017: [4017],
          6416: [6416]
        }, _ = {}, S.f.consumes = (e, a) => {
          S.o(w, e) && w[e].forEach(e => {
            if (S.o(y, e)) return a.push(y[e]);
            if (!_[e]) {
              var r = a => {
                y[e] = 0, S.m[e] = r => {
                  delete S.c[e], r.exports = a()
                }
              };
              _[e] = !0;
              var t = a => {
                delete y[e], S.m[e] = r => {
                  throw delete S.c[e], a
                }
              };
              try {
                var d = v[e]();
                d.then ? a.push(y[e] = d.then(r).catch(t)) : r(d)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              9737: 0
            };
            S.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                770: 1,
                5912: 1,
                6721: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = S.miniCssF(e),
                  d = S.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", S.nc && (f.nonce = S.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            9737: 0
          };
          S.f.j = (a, r) => {
            var t = S.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(3082|3331|4017|6416)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var f = S.p + S.u(a),
                c = new Error;
              S.l(f, r => {
                if (S.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, n] = r,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (t in c) S.o(c, t) && (S.m[t] = c[t]);
                n && n(S)
              }
              for (a && a(r); o < f.length; o++) d = f[o], S.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), S(5649), S(4848)
      })())
    }
  }
});