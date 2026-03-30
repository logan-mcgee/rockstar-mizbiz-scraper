try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "76f7cb7f-cf8b-43c0-8e0e-aa7cc7ae9eea", e._sentryDebugIdIdentifier = "sentry-dbid-76f7cb7f-cf8b-43c0-8e0e-aa7cc7ae9eea")
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
                  "./main": () => Promise.all([t.e(3798), t.e(7919), t.e(4914), t.e(6672), t.e(5994)]).then(() => () => t(48482))
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
          131: "e5421e51bdfd6c4776dd",
          278: "851e7d38727b18edb56b",
          299: "5589cf97d3a38ec82743",
          314: "33b39686c18fc4115091",
          551: "7cc13b57d0d31c0fb1a5",
          602: "f96273e36ae2d6fbaf11",
          642: "387e0dd897a954ccf22b",
          662: "e87d14729870724ac999",
          824: "046464c158aa79ccd7d3",
          907: "31a37608f5010d3cee38",
          961: "5986cac9ccf9e1ff8c66",
          1052: "7ae2b11cea7c502fa31b",
          1054: "48c3b6318d9cdafe8e67",
          1160: "944ea35ee5df711c2a3b",
          1242: "a56771c415e5303d7b04",
          1423: "40dd9a6d02ea4aef197b",
          1637: "649075c5de2b52aad96f",
          1706: "f8abb54707fbfba16a34",
          1799: "a10cfb2c7080819c11c8",
          1822: "1320a2d26d398e741a36",
          1868: "0757983763598ebd6af7",
          2156: "f2bcd7147b0c7bfb2c83",
          2171: "d1334c600dad802d75d8",
          2221: "74df7d253d17dfc68f5c",
          2243: "e1b9926044d338b1725d",
          2347: "49daf814f044f223b230",
          2365: "837d8773695262a57f2f",
          2398: "f9811e7fca3fcab925f4",
          2466: "818a8e08e5c5f3a1fa4c",
          2505: "2fa089ba6478a6e3f2cb",
          2642: "1e2c775137a2f275b0cf",
          2648: "7592230b723f117b239d",
          2678: "a7518d8f2cebb7933ec7",
          2864: "b63ec852ec57f385cbf5",
          3034: "6fea4eeb4433a107856b",
          3197: "06cd569786588297b2ff",
          3343: "af2515e57390ef6f7d96",
          3370: "897ceeb801783ae163f0",
          3475: "32eb9cb0db3cbd5dcc84",
          3486: "02b9d2bfeb1f6fe06eeb",
          3682: "373ef59ac905c7129f5c",
          3697: "331c12896605aa0ba913",
          3798: "b22b16206174bdb31928",
          3885: "1b9d0252244d9c46045a",
          3941: "20bac669296ac9f10b62",
          4011: "6eef834064cdddd33acb",
          4471: "c489c0c1eed21807992d",
          4528: "50ef2c6a1e741c1f9a04",
          4618: "51b4cf3b461937390488",
          4621: "2847ae18c54e22ec70af",
          4700: "2226d8ef57eb94fc5a01",
          4710: "4dd976e10c3e447de6d5",
          4731: "164804c80024f17a3eef",
          4781: "4f8f803bdfea44231cf1",
          4786: "e3aed251e69ad6cd2258",
          4799: "ed1edc9c21406201d039",
          4851: "b92db0c3a79e46d9bd79",
          4861: "4060c1281665ef666f52",
          4913: "c947d6fe837aceb6293b",
          5018: "c165f30604a506c0154f",
          5048: "c2dc8ad3b56a894dcba3",
          5110: "7091f2a2cbb8d6f55080",
          5233: "6eb117dc3985d5af98db",
          5259: "e7bd33f0a8020e706d20",
          5530: "544cd34f298b9dcea1e2",
          5593: "abd3ee049c6e52e12196",
          5639: "68956db4cdd44b2f5886",
          5663: "9b7b359bd5d775856e2f",
          5739: "d78858435d96ac08c221",
          5742: "aa46b8f197bb89f24d72",
          5801: "36cad75688271ce4bd6c",
          5830: "44bac81ec729c5194229",
          5832: "b096107a421f4b2c6c4f",
          5994: "17a5853ef45ef568c008",
          6267: "53e1de1230313eb15670",
          6280: "b58f9e775d313ee53c5f",
          6285: "4d6c5a460bff05c1c7d8",
          6361: "737a07cafba2267d91b1",
          6540: "95efd0cca7960e600df1",
          6564: "74b82f08f2bfbd008a96",
          6582: "3706ae6ce0a1ac94664c",
          6589: "aea9c49dd538be5ecd19",
          6664: "ca3eae914c99761b03b3",
          6758: "5d8324d892df5c2a820f",
          6855: "d06f8d6f8becf1ae32f7",
          6879: "90a31960db7e6b319491",
          6891: "59e592ab5a1829b682ca",
          6997: "ddff607dba61e6a6fd34",
          7010: "74ccb6f65fbae04487bf",
          7073: "ef0081b4b8f49c336597",
          7436: "2144ce34f136793d6e45",
          7452: "0eed9b565dcee4372fb7",
          7453: "95055392ea25ba2e3c6c",
          7553: "a7fb589c463ffca86c95",
          7792: "8c1b1001eb5f4af7c944",
          7919: "db45a82e3f6a19977ee6",
          7970: "4abc6909847322230cb1",
          8134: "fd6aaba9612d4190153c",
          8166: "08f677079252becd9480",
          8272: "8dca6998bcdeb53b0201",
          8348: "ae6302a43dc575805ab6",
          8391: "fc5937f3face1266be9f",
          8432: "cec916a4d5e26358e3f2",
          8729: "774f6963ecc887bf3af1",
          8755: "0be1748dfef4dca334fd",
          8880: "b54613db9db98fdc3ee6",
          8970: "49064920c04c09863f03",
          9022: "3bcbf89e4b5616be537e",
          9028: "5849261a0f2d907f1f24",
          9126: "8f0eb636428906460f76",
          9359: "dceee34c7b8cdec64021",
          9377: "0a4314bfb45be1f6921a",
          9430: "92f545571df72489483e",
          9615: "56e8e0807884cabcbd7c",
          9936: "652577cda46b00b9278a",
          9990: "eae12bce05d69695633d"
        } [e] + ".js"), k.miniCssF = e => "css/" + {
          3798: "bfbbe3558d2731786f68",
          7792: "4d39b6f8e52685ece1ab",
          7919: "a0feb3f04fdfa4c6e396"
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
              return "default" === t && (o("@foundry/react", "5.19.0", () => Promise.all([k.e(3798), k.e(7792), k.e(4914), k.e(6672)]).then(() => () => k(87792))), o("react-dom", "18.3.1", () => Promise.all([k.e(961), k.e(4914)]).then(() => () => k(40961))), o("react-router-dom", "6.30.1", () => Promise.all([k.e(2648), k.e(4914), k.e(6672)]).then(() => () => k(92648))), o("react", "18.3.1", () => k.e(6540).then(() => () => k(96540)))), e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
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
          23342: () => y("default", "@foundry/react", !1, [2, 5, 19], () => k.e(7792).then(() => () => k(87792))),
          76716: () => y("default", "react-router-dom", !1, [1, 6, 11, 2], () => k.e(2648).then(() => () => k(92648)))
        }, w = {
          4914: [44914],
          5994: [23342, 76716],
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
                3798: 1,
                7792: 1,
                7919: 1
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