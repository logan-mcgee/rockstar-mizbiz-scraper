try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5a97be43-641e-4813-b8ed-dbaffdb5ba96", e._sentryDebugIdIdentifier = "sentry-dbid-5a97be43-641e-4813-b8ed-dbaffdb5ba96")
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
                  "./main": () => Promise.all([t.e(3798), t.e(7919), t.e(4914), t.e(6672), t.e(5994)]).then(() => () => t(48482))
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
          131: "77c0d37b908b9e50f5c0",
          278: "305f0268422ad8749a55",
          299: "c723b59d2b5e13d95413",
          314: "eb6deee9c590b31086d1",
          551: "9d9024ec5547049c4d87",
          602: "d982a3068953ee7ab62d",
          642: "2b2441b20ff47d14b081",
          662: "ab18a3f2a294fa252262",
          824: "f8e348b7274fd426e087",
          907: "273ce95c9a336c56fafb",
          961: "37824d356a1cf925ec66",
          1052: "127cd796d078f03e0b09",
          1054: "e697860285416e40727d",
          1160: "e202f11c6e304fe74737",
          1242: "ad5bed4882050809fee5",
          1423: "4b2e50044396e7c426ee",
          1637: "8f6900ef72f9670c0ea5",
          1706: "bbe59e6152fc834afe60",
          1799: "ba2d0ba1ee9ceee7347c",
          1822: "e7ee02c4ff031fe6d37a",
          1868: "31634466b98570cbca79",
          2156: "af95e046abd3b5687e4a",
          2171: "ebbbbc3ff7c74b533e37",
          2221: "b0dad9212948258153bc",
          2243: "473b41aa84b161922f00",
          2347: "009fc6037b4b5b279859",
          2365: "18623b6dab32d0e161f9",
          2398: "b66b2a6eb0b9bbaffcae",
          2466: "a7ad5778637515bda17c",
          2505: "dd9c243d8a051c6afa41",
          2642: "3e8c303d039b78190eb7",
          2648: "177fabc8e225e219c97c",
          2678: "24d8c44c89a643a6992b",
          2864: "41e690184d22602393c5",
          3034: "a185c079d092e09aaa6a",
          3197: "c695561352b216403cdd",
          3343: "d02193addc8ddc45b8e7",
          3370: "f7cf5d8dc22989d6a3d0",
          3475: "a3c20c6bbcf9a47bdba6",
          3486: "612c4e8b24340c9c0e23",
          3682: "9e889f8879ca2927ed22",
          3697: "a279f9d2757e5e588b02",
          3798: "7d755d0b4138e319b2d8",
          3885: "c259095e1dc7555c8c20",
          3941: "ea32ff5105da3fa625e1",
          4011: "dd0ce1e04b174a1aa7de",
          4471: "61ddc7d133b380dc15d5",
          4528: "7bfc384137516db60b32",
          4618: "476b30a4c7a0ee6537a0",
          4621: "397af97717c60e8d09ab",
          4700: "f4dbf80b8f11684e2e31",
          4710: "e957eb500a194f63d35a",
          4731: "3f2e7ebcf82ad4886f2f",
          4781: "e1bbc871238395d42570",
          4786: "50878134cf5a0b6183e6",
          4799: "98cacb345052c16a11a5",
          4851: "0efbe28f60bcc6c58f90",
          4861: "9876541b5b6cdf897115",
          4913: "9fbc3f311188270ccd91",
          5018: "f3451e5e6b79b7749437",
          5048: "00214bda8956dd48fd4f",
          5110: "51093373e3398527102a",
          5233: "97971ad289b9599805d6",
          5259: "8692b0f80985fc870af3",
          5530: "bca5370ef2dd12e6e804",
          5593: "0c7c38ff79875e121aa5",
          5639: "36d7763a7b0c3d05b338",
          5663: "188dce0ef28728067d28",
          5739: "838252934151dfd4a44c",
          5742: "822604cb5b82c0b6b95a",
          5801: "335e1dfd419c27f37acc",
          5830: "6a95825f8ace97e98fa3",
          5832: "4129f2557fe01bd178c2",
          5994: "02b684e55c7343d96302",
          6267: "43ea9aa54581abbda8df",
          6280: "e4590564250e21dd9602",
          6285: "a6b09f5361fa73c5875a",
          6361: "80c8692921b905ce3c15",
          6540: "095456cc40912dcec8d4",
          6564: "2f4f9e8aa1d12a05820c",
          6582: "05062e6ebdd522ae2b98",
          6589: "c5e7ecbaee5e337e21c3",
          6664: "cd2a548883d7a1cc4b29",
          6758: "0396a858813cf1e516af",
          6855: "774f83dd7ba15d35bbea",
          6879: "7fb1ad5207e28ce4b574",
          6891: "0089fb7b930de4ba4d79",
          6997: "3318c3582d9359eb029c",
          7010: "dccf4d4953e0c487ca26",
          7073: "42e8835bfe356190f964",
          7436: "2465986893a59240c762",
          7452: "12632e6179fcba79c3cc",
          7453: "710cbf28837f3f9bbbd1",
          7553: "79a2e8518ffa9aa32163",
          7792: "d6456651cf5b6757b7ae",
          7919: "c9d3f7ed3581249ee4a5",
          7970: "9626f30952541eb69136",
          8134: "461191ec9a80d5897376",
          8166: "fb418d8628b1f01b0cd5",
          8272: "038ff4541671339df8d5",
          8348: "6c1ce335d12abc27db3b",
          8391: "6b7d67f35257b0caf31d",
          8432: "cac8079b94aec1e9cf0d",
          8729: "b78e8170b62604acc8f8",
          8755: "fc9c6124b64807e847c6",
          8880: "34307485bf2d59724123",
          8970: "c5a354b3cf2069ea7a05",
          9022: "978cb9d2a52a58775a66",
          9028: "61a0e4ae60a594fd3697",
          9126: "752cae0da1ce9daccd70",
          9359: "481dbac3100782f91fb0",
          9377: "c37da34f117895aba954",
          9430: "abc2ade135ec4618c198",
          9615: "18c539ce4ce92a9d2090",
          9936: "b2f7fc67ff63eb2d7212",
          9990: "9074b4b87a4728f9646b"
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
              return "default" === t && (o("@foundry/react", "5.19.0", () => Promise.all([k.e(3798), k.e(7792), k.e(4914), k.e(6672)]).then(() => () => k(87792))), o("react-dom", "18.3.1", () => Promise.all([k.e(961), k.e(4914)]).then(() => () => k(40961))), o("react-router-dom", "6.30.1", () => Promise.all([k.e(2648), k.e(4914), k.e(6672)]).then(() => () => k(92648))), o("react", "18.3.1", () => k.e(6540).then(() => () => k(96540)))), e[t] = c.length ? Promise.all(c).then(() => e[t] = 1) : 1
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