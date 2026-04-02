try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "26c5a8e3-f9f5-472e-9b24-6f90f04bf12a", e._sentryDebugIdIdentifier = "sentry-dbid-26c5a8e3-f9f5-472e-9b24-6f90f04bf12a")
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
        var e, r, t, f, d, c, n, o, b, i, l, s, u, p, h, m, g, y, v, w, _, k = {
            3032: (e, a, r) => {
              r(8419)
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1127), r.e(8136), r.e(9741)]).then(() => () => r(9741)),
                  "./lazy": () => Promise.all([r.e(1127), r.e(181), r.e(8136), r.e(2364)]).then(() => () => r(2364)),
                  "./tina": () => Promise.all([r.e(2029), r.e(1127), r.e(8429), r.e(8136), r.e(3079)]).then(() => () => r(792)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2029), r.e(1127), r.e(8429), r.e(8136), r.e(3079)]).then(() => () => r(792))
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
            },
            7027: (e, a, r) => {
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
            7411: (e, a, r) => {
              const t = r(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            8419: (e, a, r) => {
              (0, r(7411).w)(1)
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
          var f = Object.create(null);
          S.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, S.d(f, d), f
        }, S.d = (e, a) => {
          for (var r in a) S.o(a, r) && !S.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, S.f = {}, S.e = e => Promise.all(Object.keys(S.f).reduce((a, r) => (S.f[r](e, a), a), [])), S.u = e => "js/" + {
          131: "f50718401a57be1e53830b2941635060",
          278: "f6d59d7eda597f2b22387cec5d6b9782",
          299: "b79ed835ca20d57dc2e1908791548995",
          314: "418ce9240e6f1e35fdef2147c1e658b2",
          662: "d56e56f1c2ed954cd4140ba595fd8b77",
          824: "bdb321aa7cff9ced3cc6cad4478bae1e",
          907: "0957ded07104265b2afabbe7e2845c30",
          1054: "fb9c48390f00a11d9de0e09b040592b5",
          1098: "a79a69ed88d97576c1a6b03ceb85e7a1",
          1242: "1dea99a9bcdb85b9821f971923bace6b",
          1822: "ac1893cc7a6977c41bdbb4ef15273880",
          1868: "a2d8db0487e71f57d138302fad173a77",
          2029: "ed92ea606e638ea9023f646ed8ff2fc3",
          2156: "3882d5e750775adf0e7a296afdd9043f",
          2171: "86a1226be9e7b50317c4583f8c010920",
          2221: "20e6f8ba74188f48b27b505eb569a3da",
          2243: "529356d6f0fe43262089419e15d357d5",
          2250: "99b4516a86c1e7d0c6c8f91c21c72b84",
          2295: "9fdc30fdf4d88a955be38c8749a87708",
          2347: "5afd7cf8f1fadeb6391533e43aee0a7c",
          2364: "254d3c3b23b183c7a41283dd110e171c",
          2365: "ae9d3c543b963a05656d1a2bb8fb553e",
          2398: "72ac3025d98f63742c4cd959e9f796bd",
          2466: "cf3687bc6889d66adc816a833673cf68",
          2642: "df18671a315bbab3fb23b1cef8f563f4",
          2678: "c98e8a9134ee3f51c594e11919d399d7",
          2864: "e9a7482af58819f35c9f1678290fc3d2",
          3034: "9dd0bb26adc48f0f9b063c5c70f1b192",
          3079: "f8f77079b135fe7ad8f5b2c34595ea5e",
          3197: "81ca78c4e52ec13c5d5ddbe0d7cf0351",
          3343: "a8f67129e6ba56f3366bfc36700e25b0",
          3370: "d2b8ad120bbd90381535a276680c8e24",
          3475: "0275ba97a7a44c9cba6227611f3fabc5",
          3486: "eec7610561cfefa8aa0a423c05f687ea",
          3697: "266809b55f225325bc213e1b20389784",
          3885: "b1bcbb19299c8b69b91dd4ac054a5509",
          3941: "890792ab4105512010a94a1d5a070e00",
          4011: "c25be2b11a16298babbe63379d85c5a9",
          4528: "6e3890d2c0d0f83c1f2bdc52e56cd35d",
          4578: "ce5fd2589d5fb7ea08254f4bc0e2464b",
          4621: "ecc028132fa9911219c7d50baa9ebcd9",
          4700: "de1c5812b90ec9d54df8c137de55e17f",
          4710: "c8720fd0ff867d3cdb133249d0f46bdb",
          4731: "083e941af8ee457cb039b31a8aea776a",
          4799: "42acf0b172138c563c58d75858e6d554",
          4851: "6ddda48a5911297b92ae4972b653787b",
          4861: "6bbaab53780c2aadd7e805cbd4d35344",
          4913: "c496371784830242a81fa167e7ad2e7d",
          5018: "d1bdc537da513ae36b2d834c2ff9a1fe",
          5233: "d4963a3b42e3ea3d3a1435731a72f965",
          5259: "ed5cd24479ce0e1ee39888dbf3f0d874",
          5389: "6bff56500dc71bf159fa1b8a81179f83",
          5530: "b4e28b5bb632075008196a331ca81c17",
          5639: "9afe11f5f4d0beb4c761f4d864e3cdd7",
          5663: "fd271fd9526f1e807152f615ce5285f4",
          5742: "12e442ce2e438a01261ebab4cd5c089d",
          5830: "e0d41791562e97ed7915af052396be7f",
          5832: "7cdbba29122060140b19e13d697505fe",
          5932: "026050714ffd97331a7ec155c1cb8de7",
          6267: "409c1a3bfc6afb3ac964090a3f1d1f9b",
          6280: "b22b8bb90c798ae820aeca95bea3e433",
          6285: "149f988c2275afd79e299afe30798e0b",
          6361: "bcff86dcd068fefc31587eaa11383c92",
          6664: "4815ccaec78ad4ddbc0781d8e09d01ff",
          6879: "5a1ea1feda3fbd49741ceb09296730a4",
          6891: "23bdbb7f1ceb9f1a74d5707821788aad",
          6997: "1860d87de3cb95850d7577699ea91a3d",
          7010: "c31ed15fcf3c6f64e46a3889d4453ee0",
          7073: "3fe0c1a0b4de1566c31ff67a57c12e47",
          7436: "9849c67f64673eb860afad070305186f",
          7452: "b0cd49dac603c70fe190fcd8a23f619b",
          7453: "71b1a4fbb2007968587eb1685eb2d046",
          7970: "ece6a502e8c8120e440e98c129598387",
          8044: "6123bd011cf619acd102d789b4e2b326",
          8272: "ea524f1957e5c11485fd59c46a813bae",
          8391: "e302c0bf15900c84256662aef9c54e8b",
          8431: "09792a0f8355525d5f8333434333cb7e",
          8755: "eed07078cb174ded97a5fdfb44fac16d",
          8880: "d0dcaf88cce6b058c0beb75dc81c8a60",
          8970: "d3e0ac7b6570a21664010f504c701246",
          9022: "f0b4ce50b5cda659c5acbacb726dbc55",
          9028: "9098c0a0a4b4de1a38f25e8a73e670b6",
          9126: "d30438407e842b548db47707549c962f",
          9377: "bfe646ac6d0a2a79419161b9621a4ee5",
          9615: "e362b5db03f84be58ef5c3537cd95bad",
          9741: "b07a9046d7704047f3e2d296fbcca32e",
          9936: "e6c78367ee82db69d668b911e03a2fb5",
          9990: "8e8ca0c0d1929a1ab81c65a94839afb1"
        } [e] + ".js", S.miniCssF = e => "css/" + {
          2364: "debb098fe4eb10cc6ea2338c25eeda9f",
          3079: "b11d8af9d5f0f47ad9c9716859e25471",
          9741: "7a398e1a54d4e611af2d855ec6db3b77"
        } [e] + ".css", S.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), S.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", S.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  c = i;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, S.nc && c.setAttribute("nonce", S.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var f = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(e => e(r)), a) return a(r)
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
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              S.o(S.S, r) || (S.S[r] = {});
              var d = S.S[r],
                c = "@rockstargames/modules-core-gif-viewer",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/utils", "0.0.0", () => Promise.all([S.e(2029), S.e(2250), S.e(1127), S.e(181), S.e(8044), S.e(2295)]).then(() => () => S(8859))), n("react-dom", "18.3.1", () => Promise.all([S.e(1098), S.e(1127)]).then(() => () => S(1098))), n("react-router-dom", "6.30.1", () => Promise.all([S.e(5389), S.e(1127), S.e(8429)]).then(() => () => S(5389))), n("react", "18.3.1", () => S.e(8431).then(() => () => S(8431)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
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
              n = (typeof c)[0];
            if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
            if ("o" != f && "u" != f && t != c) return t < c;
            r++
          }
        }, n = e => {
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
            d.push(0 === c ? "not(" + o() + ")" : 1 === c ? "(" + o() + " || " + o() + ")" : 2 === c ? d.pop() + " " + d.pop() : n(c))
          }
          return o();

          function o() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, c = 1, n = !0;; c++, f++) {
              var b, i, l = c < e.length ? (typeof e[c])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !n || ("u" == l ? c > r && !t : "" == l != t);
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
          for (f = 1; f < e.length; f++) {
            var p = e[f];
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
        }, m = (e, a, r) => r ? r() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, r, t, f, d) {
          var c = S.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, S.S[a], r, !1, f, d)) : e(a, S.S[a], r, t, f, d)
        })((e, a, r, t, f, d) => {
          if (!b(a, r)) return m(e, r, d);
          var c = s(a, r, t);
          return o(f, c) || h(u(a, r, c, f)), i(a[r][c])
        }), y = {}, v = {
          1127: () => g("default", "react", !1, [1, 18, 2, 0], () => S.e(8431).then(() => () => S(8431))),
          8136: () => g("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([S.e(2029), S.e(2250), S.e(181), S.e(8044)]).then(() => () => S(8859))),
          181: () => g("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([S.e(5389), S.e(8429)]).then(() => () => S(5389))),
          8429: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => S.e(1098).then(() => () => S(1098)))
        }, w = {
          181: [181],
          1127: [1127],
          8136: [8136],
          8429: [8429]
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
                var f = v[e]();
                f.then ? a.push(y[e] = f.then(r).catch(t)) : r(f)
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
                2364: 1,
                3079: 1,
                9741: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = S.miniCssF(e),
                  f = S.p + t;
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
                  d.rel = "stylesheet", d.type = "text/css", S.nc && (d.nonce = S.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
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
            9737: 0
          };
          S.f.j = (a, r) => {
            var t = S.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1127|181|8136|8429)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = S.p + S.u(a),
                c = new Error;
              S.l(d, r => {
                if (S.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, n] = r,
                o = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) S.o(c, t) && (S.m[t] = c[t]);
                n && n(S)
              }
              for (a && a(r); o < d.length; o++) f = d[o], S.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), S(3032), S(4848)
      })())
    }
  }
});