try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d7538844-58f8-4ed9-b3bd-345b2077f001", e._sentryDebugIdIdentifier = "sentry-dbid-d7538844-58f8-4ed9-b3bd-345b2077f001")
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
                  "./main": () => Promise.all([t.e(3727), t.e(8999), t.e(4914), t.e(6672), t.e(9534)]).then(() => () => t(1254))
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
          131: "d675c26129824c9f6059",
          278: "7e3b052b99f95e809d22",
          299: "c5247ff8d25087ef07f5",
          314: "4ac233cf13c2b8bccff4",
          551: "43f8acbd7e1eaa4d9231",
          602: "61219e458e481067963d",
          642: "d6e0c3a9015f5adf150a",
          662: "8e1eb8829cea39fe026d",
          824: "a37ef9944ee5202e6ec0",
          907: "b5df05dbf9664712a641",
          961: "9862984f3292f03f04d3",
          1052: "26046ac33428a741f124",
          1054: "cb659f90de457deb64e6",
          1160: "2716c8b10b8627bba436",
          1242: "7de8ae713433c63fcb53",
          1423: "7b8df261dc03dfbe766f",
          1637: "b55cd68baf23ebc9c3d7",
          1706: "0b6e32e38a5acb1ef869",
          1799: "2f3d06641e57139989e6",
          1822: "cc50d0a6141676edf109",
          1858: "b08f520c406d0a1cec1c",
          1868: "aacbe479d25a757315bb",
          2156: "71d54c84e9f19c7943dd",
          2171: "e0e77a86f9f2493ea477",
          2221: "a1b042c5cbd9da0e2b3e",
          2243: "640eaab14e4faef908ef",
          2347: "e67b9e63b5ef7a5bd745",
          2365: "009075988ce9272094aa",
          2398: "7f08a610c14eaab0229a",
          2466: "4e0fb56744ff53daa690",
          2505: "a9c9f9f19956e8dbb6d3",
          2642: "9c72c7220ef0b2b660c3",
          2648: "2a4b059ffc88ba6fe345",
          2678: "6746f697ad9db42a341c",
          2864: "bf196ce05f8fb0c9b822",
          3034: "2fa59f3f2820561e34b5",
          3197: "adde2caf5481923ba4a0",
          3343: "ed6c77a132342ec5a36f",
          3370: "5f976307a3173ab0f00a",
          3475: "db9f5ac97f8ec7cb7a07",
          3486: "8f4c24d0880c9109857f",
          3682: "8528944195e994240c2e",
          3697: "4f728ec15dcf7e9807a9",
          3727: "00c4247f3db7f7fe8fc3",
          3885: "115e7bb964a18d1ca9cd",
          3941: "53cccf6bf2a48b9be0a3",
          4011: "ad26f3ddeb4e8332943c",
          4471: "4652a0df58bef371f3b2",
          4528: "1471f6174532d718eb9c",
          4618: "a34ca03ba04ff0e099dd",
          4621: "9f3520ae5fa9005c997b",
          4700: "223115ddb9ec218c878a",
          4710: "4e19e54dd32409d391d5",
          4731: "77be4cb42253cb7a898e",
          4781: "8296b9945f49f8d3b83d",
          4786: "6b13e18fecf30cf4e36e",
          4799: "cf9c09df046de8a78349",
          4851: "ffff316a051894632f27",
          4861: "ada2990ceeb5a290d7c1",
          4913: "89e7b66e54cb1307117d",
          5018: "86111dedb6922a416f78",
          5048: "0d1e725f2905a13116bf",
          5110: "b602907139f219e63710",
          5233: "b51b71d781bc2a7be687",
          5259: "147ae6ecc565be087079",
          5530: "7b24b866e07f15dbfc36",
          5593: "48bd7413af7e39ced7f2",
          5639: "7b31be647a41d80c4704",
          5663: "e4d3b1f5be5fbc400a8a",
          5739: "318c7698eada09274ad4",
          5742: "604ffb0eb75618b01aa2",
          5801: "90341b3da9404187f966",
          5830: "a2a2dc09e8cc1ea0e21c",
          5832: "6f788e7a8bd870f2381e",
          6267: "bd882c05791f87c7c179",
          6280: "b0a79ac883eb7c692777",
          6285: "816afcc02fcd60a7627a",
          6361: "4921adb058409f96c9a3",
          6540: "aeae1e6e70b0071c3a26",
          6564: "1c923622d24908d8750b",
          6582: "16d55f39b3c57dcd4d1f",
          6589: "5df5296ca62325f719bf",
          6664: "c1f5e36bec1be69ddc20",
          6758: "8e4daab7fd698424658f",
          6855: "6b22fa85230a3a9090f0",
          6879: "8a3469ca2d91e1e0a120",
          6891: "f30f8ac5c6644338c6b7",
          6997: "b09af8de370b155719e2",
          7010: "08ce5cc43de9d76d14d2",
          7073: "f365b4ae6ec36bfcbbfc",
          7436: "acb3b2b6130caabd9ef8",
          7452: "a7415a1f952abdb34486",
          7453: "295eeebb352417c4c9d4",
          7553: "03207618c1610f62ae81",
          7970: "a23345847def1221d36c",
          8134: "43b73f2f7b2ba6cfa3b7",
          8166: "447bc524737d7e499383",
          8272: "47e7f97308bb2b077597",
          8348: "d852b5497e3d2a134b61",
          8391: "ea2266bdb5763148f5e5",
          8432: "fa708976b76b6051d9ae",
          8729: "161ef9c8d6faf2967466",
          8755: "774e530b721c5e33006d",
          8880: "552e6faba19d30440696",
          8970: "82c07ce65634b10e7ace",
          8999: "045b1e577c739693499d",
          9022: "a14b0a0fb53e65043391",
          9028: "66d196a4e983c4b9827e",
          9126: "b1eea3af32a785ca29be",
          9359: "9870a14194ce2e22b483",
          9377: "2faa9ced4c3a70922c9a",
          9430: "7213f0c00905322c4372",
          9534: "516352a8da2d7faeb7af",
          9615: "59cf87a0ff9ee5b49fff",
          9936: "b04b4b25a146d0beb537",
          9990: "4ddc119d86fe6d2d5d5c"
        } [e] + ".js"), k.miniCssF = e => "css/" + {
          1858: "2b3c1f37373285fe2346",
          3727: "867b9d3a049016a2c0f2",
          8999: "ed594fa423824089c931"
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
              return "default" === t && (o("@foundry/react", "6.3.0", () => Promise.all([k.e(3727), k.e(1858), k.e(4914), k.e(6672)]).then(() => () => k(31858))), o("react-dom", "18.3.1", () => Promise.all([k.e(961), k.e(4914)]).then(() => () => k(40961))), o("react-router-dom", "6.30.1", () => Promise.all([k.e(2648), k.e(4914), k.e(6672)]).then(() => () => k(92648))), o("react", "18.3.1", () => k.e(6540).then(() => () => k(96540)))), e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
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
          62900: () => y("default", "@foundry/react", !1, [1, 6, 3, 0], () => k.e(1858).then(() => () => k(31858))),
          76716: () => y("default", "react-router-dom", !1, [1, 6, 11, 2], () => k.e(2648).then(() => () => k(92648)))
        }, w = {
          4914: [44914],
          6672: [86672],
          9534: [62900, 76716]
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
                1858: 1,
                3727: 1,
                8999: 1
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