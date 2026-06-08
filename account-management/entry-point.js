try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "10aae6c2-3e18-4d36-a1d3-883c3706f0ee", e._sentryDebugIdIdentifier = "sentry-dbid-10aae6c2-3e18-4d36-a1d3-883c3706f0ee")
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
        var e, t, r, f, n, d, o, c, b, i, l, s, u, p, h, m, y, g, v, w, E, _ = {
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
                  "./main": () => Promise.all([t.e(3727), t.e(9410), t.e(4914), t.e(6672), t.e(5367)]).then(() => () => t(40207))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                n = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => n
              })
            },
            55483: (e, a, t) => {
              t(11e3)
            },
            60358: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, n = r.length; f !== a && n >= 0;) "/" === r[--n] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, n + 1);
                return t.protocol + "//" + t.host + d
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
          var n = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var d = 2 & r && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = t(d)) Object.getOwnPropertyNames(d).forEach(e => n[e] = () => a[e]);
          return n.default = () => a, k.d(f, n), f
        }, k.d = (e, a) => {
          for (var t in a) k.o(a, t) && !k.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, k.f = {}, k.e = e => Promise.all(Object.keys(k.f).reduce((a, t) => (k.f[t](e, a), a), [])), k.u = e => ({
          131: "7dbe3be94f2bd111bb11",
          278: "0971bb3f7cd347dbaae1",
          299: "db0766b9efe4d0f3d388",
          314: "e417ac4a182389182ee3",
          551: "60e1c339c164632276b3",
          602: "a9c858176af2a775859b",
          642: "2c57b2b57da46f1099cb",
          662: "5142868826074395e99f",
          824: "f642940fcdd186ebefa6",
          907: "a51fb20bb1ce66e124ac",
          961: "e79f82cb9145cf360804",
          1052: "6ae9bc38d29a2b1bacd2",
          1054: "d98fe98541e82776647f",
          1160: "3d2864af14ff39d014fe",
          1242: "d79b62d363aae6c1effe",
          1423: "5b8e96e905971c8cf2b2",
          1637: "d89b5094135baa78f52d",
          1706: "9739ef8d8ed867820abe",
          1799: "3e2b02f0dc0ff624aa4b",
          1822: "26beed82a0c606cd1c5b",
          1868: "ebafa31f0e3d066a57e6",
          2156: "8d9385f2a3795a59ba10",
          2171: "86e81e7f71213cf8c539",
          2221: "dec2aba104df83986484",
          2243: "0e661cbbd197a8311290",
          2347: "0d89ad0463a8ae110ee0",
          2365: "b553980f2f48ff590923",
          2398: "72394e03ef755e97b449",
          2466: "693cdebf4bad803a4902",
          2505: "15522ba30fbc8e0d03ae",
          2642: "2c6efe4c13514d2662c4",
          2648: "1d0f1c9675d90ace9e41",
          2678: "22df6b8c317900c0fd68",
          2864: "e0bbd73c32ac10fe519d",
          3034: "2a36a4b4159b033af518",
          3197: "f4f4d0a7f02b3d7d274a",
          3343: "5759d2c78e60d2ff2492",
          3370: "b8b285b55eecb205df00",
          3475: "c2deb15916a6cfd2fa99",
          3486: "a2809d5e1ae5fe07e5d3",
          3682: "f552e9b3429fa994bfa3",
          3697: "85b456167a1940e79204",
          3727: "627dacde26694a240695",
          3885: "e666b59af9931a25c1b4",
          3941: "c3ea7213907477232a15",
          4011: "7212c0ca7757240c3d6b",
          4471: "56eb56da7bd6a8bf5222",
          4528: "7e405902d0e07944c279",
          4618: "2fd9c8955dc426244172",
          4621: "506712c86edae3322bb4",
          4700: "f2e464dd7551db31f0f2",
          4710: "19cb69652a44292778dd",
          4731: "0bfcc01f966aea46075e",
          4781: "3226ba7965b99c69de07",
          4786: "52afdbaaf9da4c529863",
          4799: "db5cb9193d580ddddf17",
          4851: "38e897ed29c71ebde25d",
          4861: "9d982888e9b6b424d788",
          4913: "092b587007948ec5ce87",
          5018: "56fd1577bc46b9b0ed0b",
          5048: "b0a52250d22481bf3d29",
          5110: "c9f912dfe790a90a1304",
          5233: "6dfbfb721e776465110b",
          5259: "c13282dedb8e606993fc",
          5367: "32bb501fe2014dd4fd41",
          5530: "7181b2eb435a665bc907",
          5593: "4335c3db3bffb889235c",
          5639: "65253b4cdb74490f3e07",
          5663: "a72541cf41ffa4e9c9d5",
          5739: "e4e2e0a06f4170327bd9",
          5742: "68530b14fed65f1e064e",
          5801: "ae82728f5781abeeda77",
          5830: "d8083c2bed4e42e293fc",
          5832: "0435e243dc0fe0cf14c8",
          6220: "728b7c9f39a2029ada71",
          6267: "5539aa0311a9e9058ac1",
          6280: "b05f6f5bc2e855376606",
          6285: "004a779e134807fcb52d",
          6361: "b89baee7318ac95b87bc",
          6540: "401fc60178650ac9ddee",
          6564: "d3aeec00466a7fd8818a",
          6582: "0019184347464c34bfe2",
          6589: "0fa3669fee58e388a3e8",
          6664: "d1c112dd6a2e4a1c26f2",
          6758: "a9ee243c04d5c1589e00",
          6855: "afe6131ba66f823e5f91",
          6879: "58962874a248fba87268",
          6891: "d3676e96fdc205006da6",
          6997: "4cd7e9274079f10cc1e8",
          7010: "ded3c174a01efcc9499b",
          7073: "e81e91c5c3ee53e5ce17",
          7436: "a8dd31002ae9d3f48f29",
          7452: "d0c18c21f70ddb072217",
          7453: "41aadd5194153c6b322e",
          7553: "280a6c3fc060bff3f457",
          7970: "849a2cab187a2691a8db",
          8134: "14a0634cc54eb8bd6e00",
          8166: "06f51c25e650e3c09428",
          8272: "f9f59caf08fcd3cb5bb8",
          8348: "812cd6e62f9f756e4d96",
          8391: "a55fb22764d6c1b1b51c",
          8432: "1fbcaccee019192365dc",
          8729: "bc06d64b2632f820f1ce",
          8755: "149500f2682d47ea58c3",
          8880: "0733ef11157b2a94a84f",
          8970: "5f9e5175bb03bf8b2f3a",
          9022: "37a147ff68048723d575",
          9028: "5f343b29f9c5caf0e7ab",
          9126: "e6e753e43f741d819ce8",
          9359: "bbe11ba417506fcd26e1",
          9377: "dae704ac2fc56d0c6ab7",
          9410: "7f2cdf7a32cbb2de4d4f",
          9430: "696e6008d4ba3b62b945",
          9615: "8db1b7cbffabda77b464",
          9936: "4088a2a56d67d56a8f41",
          9990: "b49ed131c79d902d93f9"
        } [e] + ".js"), k.miniCssF = e => "css/" + {
          3727: "6e306675dae59406575e",
          6220: "69d54d6d8448454a205c",
          9410: "073c3e5c79ce6b78e0a9"
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
        }), e), k.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, f = "account-management:", k.l = (e, a, t, n) => {
          if (r[e]) r[e].push(a);
          else {
            var d, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var i = c[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + t) {
                  d = i;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, k.nc && d.setAttribute("nonce", k.nc), d.setAttribute("data-webpack", f + t), d.src = e), r[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(s);
                var f = r[e];
                if (delete r[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), o && document.head.appendChild(d)
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
              var n = k.S[t],
                d = "account-management",
                o = (e, a, t, r) => {
                  var f = n[e] = n[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@foundry/react", "6.1.0", () => Promise.all([k.e(3727), k.e(6220), k.e(4914), k.e(6672)]).then(() => () => k(76220))), o("react-dom", "18.3.1", () => Promise.all([k.e(961), k.e(4914)]).then(() => () => k(40961))), o("react-router-dom", "6.30.1", () => Promise.all([k.e(2648), k.e(4914), k.e(6672)]).then(() => () => k(92648))), o("react", "18.3.1", () => k.e(6540).then(() => () => k(96540)))), e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
            }
          }
        })(), k.p = "/", n = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, d = (e, a) => {
          e = n(e), a = n(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              f = (typeof r)[0];
            if (t >= a.length) return "u" == f;
            var d = a[t],
              o = (typeof d)[0];
            if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
            if ("o" != f && "u" != f && r != d) return r < d;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, f = 1; f < e.length; f++) r--, t += "u" == (typeof(d = e[f]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, d);
            return t
          }
          var n = [];
          for (f = 1; f < e.length; f++) {
            var d = e[f];
            n.push(0 === d ? "not(" + c() + ")" : 1 === d ? "(" + c() + " || " + c() + ")" : 2 === d ? n.pop() + " " + n.pop() : o(d))
          }
          return c();

          function c() {
            return n.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, c = (e, a) => {
          if (0 in e) {
            a = n(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var f = 0, d = 1, o = !0;; d++, f++) {
              var b, i, l = d < e.length ? (typeof e[d])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !o || ("u" == l ? d > t && !r : "" == l != r);
              if ("u" == i) {
                if (!o || "u" != l) return !1
              } else if (o)
                if (l == i)
                  if (d <= t) {
                    if (b != e[d]) return !1
                  } else {
                    if (r ? b > e[d] : b < e[d]) return !1;
                    b != e[d] && (o = !1)
                  }
              else if ("s" != l && "n" != l) {
                if (r || d <= t) return !1;
                o = !1, d--
              } else {
                if (d <= t || i < l != r) return !1;
                o = !1
              } else "s" != l && "n" != l && (o = !1, d--)
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
          return Object.keys(r).reduce((e, a) => !e || !r[e].loaded && d(e, a) ? a : e, 0)
        }, u = (e, a, t, r) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + o(r) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), y = (e => function(a, t, r, f, n) {
          var d = k.I(a);
          return d && d.then && !r ? d.then(e.bind(e, a, k.S[a], t, !1, f, n)) : e(a, k.S[a], t, r, f, n)
        })((e, a, t, r, f, n) => {
          if (!b(a, t)) return m(e, t, n);
          var d = s(a, t, r);
          return c(f, d) || h(u(a, t, d, f)), i(a[t][d])
        }), g = {}, v = {
          44914: () => y("default", "react", !1, [1, 18, 2, 0], () => k.e(6540).then(() => () => k(96540))),
          86672: () => y("default", "react-dom", !1, [1, 18, 2, 0], () => k.e(961).then(() => () => k(40961))),
          3554: () => y("default", "@foundry/react", !1, [1, 6, 1, 0], () => k.e(6220).then(() => () => k(76220))),
          76716: () => y("default", "react-router-dom", !1, [1, 6, 11, 2], () => k.e(2648).then(() => () => k(92648)))
        }, w = {
          4914: [44914],
          5367: [3554, 76716],
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
                3727: 1,
                6220: 1,
                9410: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = k.miniCssF(e),
                  f = k.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (r = 0; r < n.length; r++) {
                      var d;
                      if ((f = (d = n[r]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", k.nc && (n.nonce = k.nc), n.onerror = n.onload = t => {
                    if (n.onerror = n.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = o, n.parentNode && n.parentNode.removeChild(n), f(c)
                    }
                  }, n.href = a, document.head.appendChild(n)
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
              var n = k.p + k.u(a),
                d = new Error;
              k.l(n, t => {
                if (k.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    n = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + n + ")", d.name = "ChunkLoadError", d.type = f, d.request = n, r[1](d)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, [n, d, o] = t,
                c = 0;
              if (n.some(a => 0 !== e[a])) {
                for (r in d) k.o(d, r) && (k.m[r] = d[r]);
                o && o(k)
              }
              for (a && a(t); c < n.length; c++) f = n[c], k.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunkaccount_management = self.webpackChunkaccount_management || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), k.nc = void 0, k(55483), k(14666)
      })())
    }
  }
});