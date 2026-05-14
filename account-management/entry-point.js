try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ab65bf34-07b3-4bfb-9a6c-199b1a92e39d", e._sentryDebugIdIdentifier = "sentry-dbid-ab65bf34-07b3-4bfb-9a6c-199b1a92e39d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, f, d, n, o, c, b, i, l, s, u, p, h, m, y, g, v, w, E, _ = {
            126: (e, a, t) => {
              const r = t(60358).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            11e3: (e, a, t) => {
              (0, t(126).w)(1)
            },
            14666: (e, a, t) => {
              "use strict";
              var r = {
                  "./main": () => Promise.all([t.e(6366), t.e(1904), t.e(4914), t.e(6672), t.e(2562)]).then(() => () => t(8666))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            55483: (e, a, t) => {
              t(11e3)
            },
            60358: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var n = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            }
          },
          S = {};

        function k(e) {
          var a = S[e];
          if (void 0 !== a) return a.exports;
          var t = S[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return _[e].call(t.exports, t, t.exports, k), t.loaded = !0, t.exports
        }
        return k.m = _, k.c = S, k.y = a, k.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return k.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, k.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          k.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var n = 2 & r && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = t(n)) Object.getOwnPropertyNames(n).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, k.d(f, d), f
        }, k.d = (e, a) => {
          for (var t in a) k.o(a, t) && !k.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, k.f = {}, k.e = e => Promise.all(Object.keys(k.f).reduce((a, t) => (k.f[t](e, a), a), [])), k.u = e => ({
          131: "29404268868cf7891d91",
          278: "7bd66b6112c646ad4420",
          299: "38da2f19bd27d96b3f76",
          314: "803aa8eb2b23245f04cd",
          551: "e881de6bd9b7a5e9d86a",
          602: "e1a34c91aac558a0ba55",
          642: "72488f49063ebe1249af",
          662: "0c3863edd27bf4a8f0a8",
          824: "e2b0a0578ae055536139",
          907: "9059cabe0f8e1861f584",
          961: "fb71a9fe0a162f9bca9f",
          1052: "a3a25e6a2cb4f92a6925",
          1054: "4d38b4bb18796e9d40ea",
          1160: "e681559c19e1e2b01fe6",
          1242: "853a5a5be854891d85d8",
          1423: "3b1d99c40d501a248536",
          1637: "db6fe1a9744f6775c0ae",
          1706: "245ab9b25f5e6accaaa6",
          1799: "1d19b7a7813e4bfbe616",
          1822: "a2462e57e9e3eb09647f",
          1868: "d98fea72bbb817863281",
          1904: "50ff19da98eef28066ee",
          2156: "cd3b308eb9171fe3e19f",
          2171: "7150970f5f1e87f46544",
          2221: "aaeb267bfafb6adaffad",
          2243: "be682d2d8171283ecb3f",
          2347: "aa8aa69741dda15ff030",
          2365: "16ca30fdd8f4774449c1",
          2398: "6ddaf709c9bbab64b33e",
          2466: "4c31494ff11111114e5b",
          2505: "bd686f92c0e8f5cf47a9",
          2562: "60c9e1096a80e198b6e5",
          2642: "8d026a5cb0512d585335",
          2648: "d5433fefea40f0203aad",
          2678: "9726463b25bfcdc2fb78",
          2864: "dda9b782d3a29f8f5124",
          3034: "d315114b8282095e8d2d",
          3197: "f822c328169417687293",
          3343: "849d813b014aa7360b38",
          3370: "9330fd500a38e13ac252",
          3475: "1357f2b01612de335f6a",
          3486: "645c59e33cb8ae9c12c7",
          3682: "7d49203fb606d591d9cd",
          3697: "5218766ee21f1148d240",
          3885: "69054e3c1f60013dd704",
          3941: "eebb91b5ccb6b33ca9c8",
          4011: "31880031faabb6db5bf1",
          4471: "552e40280a24fb09f438",
          4528: "2382ce1403a35d86aa00",
          4618: "5713b8cb4ed55998b105",
          4621: "96315258a0da7cda0fd8",
          4700: "be4789b769b42871676c",
          4710: "70b6c6ee1d3b7ca02170",
          4731: "c3ac8c5b8b176f2794b1",
          4781: "88928c4b23f30cd2326f",
          4786: "60014ed3f1d7f25d390a",
          4799: "d62fae893dbdb4bbee56",
          4851: "748a0a97b94517857aa9",
          4861: "29edd1625caea9ab1480",
          4913: "f468355af668eef42c6a",
          5018: "ef8bb426821e8020fbe2",
          5048: "00d929050fb8a8a01f05",
          5110: "da16da1db7c152554d92",
          5233: "539fa1ce9040230946dc",
          5259: "6d026d34d47645bdbcf1",
          5530: "3722516b4302f57ce397",
          5593: "ae430bb13118dc04ddfc",
          5639: "c4196f42ccf160af5367",
          5663: "d2fb8b48cbf9f833a9a8",
          5739: "60c1a6282396617faf3f",
          5742: "a137b30f146be96acb06",
          5801: "c3bafa06b7edf20f3985",
          5830: "96c033fb074c2731aea1",
          5832: "e6ea6960914421997485",
          6267: "ac2709ad1690699f3973",
          6280: "334b5fd7f8a7b931bfd1",
          6285: "ce48cff04ecf011be049",
          6361: "5527fe8eeb0d85ac1226",
          6366: "f27ea89ccbf7cb02430d",
          6540: "eb815a91897bd80632ab",
          6564: "35cdad3e848f91a52eb9",
          6582: "e774977c4a2f795922a5",
          6589: "40b879bae6cbd6e94119",
          6664: "c90840beaf94159639f6",
          6758: "504fe5f7cbba6f906655",
          6855: "38865fc6750e69044f24",
          6879: "5a97f961d496f55a2a8a",
          6891: "afb85b3083e5fa72088a",
          6997: "7a32f4c124540b1cf8e4",
          7010: "9753baa05aba6ea0fe82",
          7073: "b771753ccd18a141ac5f",
          7436: "f128d0462a37529916df",
          7452: "29e7f3b23471060f9f81",
          7453: "b6186864f78360b71b77",
          7553: "ec8221d11bd77d107b34",
          7970: "1b1cf6d58ef7530bab91",
          8134: "41564074e7462f46835d",
          8166: "15f921dc308a7c7db20d",
          8272: "821db5b9bec0fc7f914c",
          8348: "3a9f7aceafa102461217",
          8391: "5a4bd32e0900d27a63bd",
          8432: "f47ad34ee9c62672c72b",
          8729: "2f4a54cdcba2bb9bc52f",
          8755: "337743b9259030856af2",
          8880: "2916820c4a38f3416aad",
          8957: "389cee3658bba8accb63",
          8970: "4cd0bea857e0d14559b1",
          9022: "32b41f73b0e6d3ae9aab",
          9028: "93109d241613a773ff34",
          9126: "e22f9267f94c813387f5",
          9359: "4aaa2e17404748f853fa",
          9377: "d9c4091a3a8ebad2ec94",
          9430: "690456c485324ca30e90",
          9615: "8b6c315367a317f0505f",
          9936: "ebcc2053e2de20e51502",
          9990: "7b9d164e775b969d7c46"
        } [e] + ".js"), k.miniCssF = e => "css/" + {
          1904: "ca9eb4b8232355820e43",
          6366: "c8e386d108e1094aa16c",
          8957: "d87ad75aec5303b1cda3"
        } [e] + ".css", k.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), k.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
          }
        }), e), k.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, f = "account-management:", k.l = (e, a, t, d) => {
          if (r[e]) r[e].push(a);
          else {
            var n, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var i = c[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + t) {
                  n = i;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, k.nc && n.setAttribute("nonce", k.nc), n.setAttribute("data-webpack", f + t), n.src = e), r[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(s);
                var f = r[e];
                if (delete r[e], n.parentNode && n.parentNode.removeChild(n), f && f.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), o && document.head.appendChild(n)
          }
        }, k.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, k.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          k.S = {};
          var e = {},
            a = {};
          k.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              k.o(k.S, t) || (k.S[t] = {});
              var d = k.S[t],
                n = "account-management",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : n > o.from)) && (f[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@foundry/react", "5.24.3", () => Promise.all([k.e(8957), k.e(6366), k.e(4914), k.e(6672)]).then(() => () => k(28957))), o("react-dom", "18.3.1", () => Promise.all([k.e(961), k.e(4914)]).then(() => () => k(40961))), o("react-router-dom", "6.30.1", () => Promise.all([k.e(2648), k.e(4914), k.e(6672)]).then(() => () => k(92648))), o("react", "18.3.1", () => k.e(6540).then(() => () => k(96540)))), e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
            }
          }
        })(), k.p = "/", d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, n = (e, a) => {
          e = d(e), a = d(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              f = (typeof r)[0];
            if (t >= a.length) return "u" == f;
            var n = a[t],
              o = (typeof n)[0];
            if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
            if ("o" != f && "u" != f && r != n) return r < n;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, f = 1; f < e.length; f++) r--, t += "u" == (typeof(n = e[f]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, n);
            return t
          }
          var d = [];
          for (f = 1; f < e.length; f++) {
            var n = e[f];
            d.push(0 === n ? "not(" + c() + ")" : 1 === n ? "(" + c() + " || " + c() + ")" : 2 === n ? d.pop() + " " + d.pop() : o(n))
          }
          return c();

          function c() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, c = (e, a) => {
          if (0 in e) {
            a = d(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var f = 0, n = 1, o = !0;; n++, f++) {
              var b, i, l = n < e.length ? (typeof e[n])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !o || ("u" == l ? n > t && !r : "" == l != r);
              if ("u" == i) {
                if (!o || "u" != l) return !1
              } else if (o)
                if (l == i)
                  if (n <= t) {
                    if (b != e[n]) return !1
                  } else {
                    if (r ? b > e[n] : b < e[n]) return !1;
                    b != e[n] && (o = !1)
                  }
              else if ("s" != l && "n" != l) {
                if (r || n <= t) return !1;
                o = !1, n--
              } else {
                if (n <= t || i < l != r) return !1;
                o = !1
              } else "s" != l && "n" != l && (o = !1, n--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? c(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && k.o(e, a), i = e => (e.loaded = 1, e.get()), l = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t) => {
          var r = t ? l(e[a]) : e[a];
          return Object.keys(r).reduce((e, a) => !e || !r[e].loaded && n(e, a) ? a : e, 0)
        }, u = (e, a, t, r) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + o(r) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), y = (e => function(a, t, r, f, d) {
          var n = k.I(a);
          return n && n.then && !r ? n.then(e.bind(e, a, k.S[a], t, !1, f, d)) : e(a, k.S[a], t, r, f, d)
        })((e, a, t, r, f, d) => {
          if (!b(a, t)) return m(e, t, d);
          var n = s(a, t, r);
          return c(f, n) || h(u(a, t, n, f)), i(a[t][n])
        }), g = {}, v = {
          44914: () => y("default", "react", !1, [1, 18, 2, 0], () => k.e(6540).then(() => () => k(96540))),
          86672: () => y("default", "react-dom", !1, [1, 18, 2, 0], () => k.e(961).then(() => () => k(40961))),
          16616: () => y("default", "@foundry/react", !1, [1, 5], () => k.e(8957).then(() => () => k(28957))),
          76716: () => y("default", "react-router-dom", !1, [1, 6, 11, 2], () => k.e(2648).then(() => () => k(92648)))
        }, w = {
          2562: [16616, 76716],
          4914: [44914],
          6672: [86672]
        }, E = {}, k.f.consumes = (e, a) => {
          k.o(w, e) && w[e].forEach(e => {
            if (k.o(g, e)) return a.push(g[e]);
            if (!E[e]) {
              var t = a => {
                g[e] = 0, k.m[e] = t => {
                  delete k.c[e], t.exports = a()
                }
              };
              E[e] = !0;
              var r = a => {
                delete g[e], k.m[e] = t => {
                  throw delete k.c[e], a
                }
              };
              try {
                var f = v[e]();
                f.then ? a.push(g[e] = f.then(t).catch(r)) : t(f)
              } catch (e) {
                r(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              5711: 0
            };
            k.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1904: 1,
                6366: 1,
                8957: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = k.miniCssF(e),
                  f = k.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (f === e || f === a)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var n;
                      if ((f = (n = d[r]).getAttribute("data-href")) === e || f === a) return n
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", k.nc && (d.nonce = k.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, d.parentNode && d.parentNode.removeChild(d), f(c)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            5711: 0
          };
          k.f.j = (a, t) => {
            var r = k.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(4914|6672)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((t, f) => r = e[a] = [t, f]);
              t.push(r[2] = f);
              var d = k.p + k.u(a),
                n = new Error;
              k.l(d, t => {
                if (k.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", n.name = "ChunkLoadError", n.type = f, n.request = d, r[1](n)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, [d, n, o] = t,
                c = 0;
              if (d.some(a => 0 !== e[a])) {
                for (r in n) k.o(n, r) && (k.m[r] = n[r]);
                o && o(k)
              }
              for (a && a(t); c < d.length; c++) f = d[c], k.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunkaccount_management = self.webpackChunkaccount_management || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), k.nc = void 0, k(55483), k(14666)
      })())
    }
  }
});