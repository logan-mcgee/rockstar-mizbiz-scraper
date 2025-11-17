try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "269b93f7-e9c4-4c2d-9dd9-0f1abb7e05c4", e._sentryDebugIdIdentifier = "sentry-dbid-269b93f7-e9c4-4c2d-9dd9-0f1abb7e05c4")
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
        var e, r, t, f, c, d, n, o, b, i, s, l, u, p, h, m, g, y, v, w, _ = {
            3032: (e, a, r) => {
              r(8419)
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(2229), r.e(5966), r.e(9741)]).then(() => () => r(9741)),
                  "./lazy": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(2364)]).then(() => () => r(2364)),
                  "./tina": () => Promise.all([r.e(1098), r.e(2229), r.e(5966), r.e(792)]).then(() => () => r(792)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(1098), r.e(2229), r.e(5966), r.e(792)]).then(() => () => r(792))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => c
              })
            },
            7027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, c = t.length; f !== a && c >= 0;) "/" === t[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + d
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
          k = {};

        function E(e) {
          var a = k[e];
          if (void 0 !== a) return a.exports;
          var r = k[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return _[e].call(r.exports, r, r.exports, E), r.loaded = !0, r.exports
        }
        return E.m = _, E.c = k, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          E.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, E.d(f, c), f
        }, E.d = (e, a) => {
          for (var r in a) E.o(a, r) && !E.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((a, r) => (E.f[r](e, a), a), [])), E.u = e => "js/" + {
          131: "b2508b3b72e6693541bc3f1d65db733d",
          278: "a1d79f7a53cde6a51bda21af958442c6",
          299: "4e04f1e8486120ea4ed9c5611b4456b2",
          314: "a04786a9ebc6c7e9570a57d7a2946ce8",
          662: "5fc15be6cb8eb5fbab49ec3a7d336fe6",
          792: "7f5f6dd7aba9412f700fbb1b5f2aef24",
          824: "2a3ba4574fae4fa3dc5c125d2b84905e",
          907: "0d9cebfb7ea1cc4427460773f388a5f2",
          933: "4d2f48466b8166d921dfd39d67b83309",
          1054: "9dc7a116d687b362b6ff27a096e3d885",
          1098: "c29494238d932d3e2ba0b9c9a29a4e3f",
          1242: "426b4606b5103b8a5b6aa5097a777c73",
          1822: "1c7c3e76947bd255d79e5809b4fc8edb",
          1868: "b211f4aaace365713fbefb29e2a2a529",
          2156: "816cdeef4e526536291bc9abaa022975",
          2171: "ecba4697b4a39d01e27e61333f637368",
          2221: "383f9b431c824796c3d3f0a19581b7da",
          2243: "f028863d9361ad6cdcab60ba8b84ee9f",
          2295: "0918245c156ad66388a22522d3c05786",
          2347: "3250e71f59d04812f25ea7a5edbf3f71",
          2364: "84fc47aaa25f9038a3cbcc031582e6b4",
          2365: "27c9154e760af7fa93dbe5287dd52fd7",
          2398: "4f60768cbe2ff961de0f18c533487fdd",
          2466: "32579e575c9ff3d6dd7a534ead66f8d0",
          2642: "f29e6e18278a5711ae063d91dde5201a",
          2678: "c57a40f08ec4d6400df6c903e12a75b5",
          2864: "dd339eae4a0cf522fe878aeb1cfaa299",
          3034: "60890f40540d8243d96599de24cd5090",
          3197: "5064239eb4f70a4647b582de0a4e800b",
          3343: "1eed9d42a03950b8eea04915492c86c8",
          3370: "ff3a0efa53408ba2eaa4f91860c182fd",
          3475: "d49885df0f000a027fbd604882ae3086",
          3486: "ab7242cc252e6828c0c7e639b694ddb0",
          3697: "ceea0e1fd668a6d1a378fed3421cce58",
          3738: "54f471bf2f2ad82e5efb4f622f02591c",
          3885: "a890d855bcff35e7f1b0cac77c3a7a4c",
          3941: "9ffd8c9e941de2352e9c253322c77a0b",
          4011: "7e8010ced5a4f69a222b93fb0687b566",
          4528: "e9ecbd36c37af505abe6057984854359",
          4578: "51474b30e6ddf97ca1aa91e5ed51ca18",
          4621: "73081dfe1d6da4b155d988c2c7c8fbf3",
          4700: "aed9d06b5e6a39ed1affdb49a353509c",
          4710: "26a87068e0b4a958969fe271e9eeb00c",
          4731: "e3e28bde217020912e8a4da72f86ddc1",
          4799: "630648b17965c826c7b987d39ad45075",
          4851: "c3af8e3676d93368813b214658099c6b",
          4861: "518f608bb23688b5dff21ceb851291ca",
          4913: "57374ba41f44542a2e92169105461415",
          5018: "07a9c987c44427aaa2dad31d80e3d30d",
          5233: "6a2c1b63c2ec3cc33dd6bf8add96a507",
          5259: "5801845e48293ba7f30ad2e18a98ebef",
          5389: "a2779a2c63e8061b77a455c7c52d6ea6",
          5530: "c8d6d30f83ad2db3b04193086b7fefc1",
          5639: "41718d87a7749fec9b580fdb3780e486",
          5663: "249c2baba9691a358932b4e2997cf05c",
          5742: "95bc9205a35466df9fadd37e2c849e52",
          5830: "ef861224afc6bd948e69e74cddffd6ed",
          5832: "294149226bfb83991dc660997d3d8dd8",
          5932: "f060dd34d12546e16890f48a39f11c1a",
          6267: "b53869f232cbb9e0cef5bce13fe5a8cd",
          6280: "b635ea25131ad535ec61ff412e82a80b",
          6285: "dd177b256b7b7f701079c648030b4971",
          6361: "f9eeca0b3df79d29a6a20bb389d41c43",
          6664: "27b1d4561537fbed29b599b516f35ff3",
          6879: "69b17e0f4d11d314975503c438603a50",
          6891: "d20070f69638e966351037965707305f",
          6997: "754fabbd050924afc040410374581c96",
          7010: "265c7cad52ed2aa062dd145942eced44",
          7073: "95f0d89fd1b9c130e83d03e2c4a4e6c6",
          7436: "bec1079f2ffeb1e35cb8f83a6ec005a0",
          7452: "1940a83090b7779febd6be2b23f4c5ad",
          7453: "30c0f0c9e834a122e4b512d679c5eb4c",
          7970: "271bc1aaed535680f6ba6751c9db21fd",
          8272: "37ff2ada2001140b6e4e5f445b1f0b2c",
          8391: "82184a7b580f4d2c4be50c85b85a6ee3",
          8431: "616e94c749a6adcf7862c6dc4f29463a",
          8755: "f75794ae826b9dac6910a7711f05486e",
          8880: "349eefadc1ae9c25d4412c72aec24db4",
          8970: "d028babafc0fefcd71d1ce09c97e0da0",
          9022: "4bcd82f3b7a97eff6e8641371be9e676",
          9028: "6e70a07bbd4ce183994c757cd7c5c257",
          9126: "79e348618de628b529ae65d0a5ebc580",
          9377: "bb46d3267ce83a4a9ae4088fbf6d30e1",
          9615: "844db00f77998a6d7af87e43de209108",
          9741: "2fa8016cb9dca307c80e175735c4b376",
          9936: "2c83c17d50cc7bb63d907d97122e5ef4",
          9990: "46a2bf7b352c41b7f9355f145d08a853"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          792: "b11d8af9d5f0f47ad9c9716859e25471",
          2364: "debb098fe4eb10cc6ea2338c25eeda9f",
          9741: "7a398e1a54d4e611af2d855ec6db3b77"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", E.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var d, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  d = i;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, E.nc && d.setAttribute("nonce", E.nc), d.setAttribute("data-webpack", f + r), d.src = e), t[e] = [a];
            var s = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(l);
                var f = t[e];
                if (delete t[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach(e => e(r)), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          E.S = {};
          var e = {},
            a = {};
          E.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              E.o(E.S, r) || (E.S[r] = {});
              var c = E.S[r],
                d = "@rockstargames/modules-core-gif-viewer",
                n = (e, a, r, t) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : d > n.from)) && (f[a] = {
                    get: r,
                    from: d,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/utils", "1.0.0", () => Promise.all([E.e(3738), E.e(2229), E.e(9623), E.e(933), E.e(2295)]).then(() => () => E(5802))), n("react-router-dom", "6.30.1", () => Promise.all([E.e(1098), E.e(5389), E.e(2229)]).then(() => () => E(5389))), n("react", "18.3.1", () => E.e(8431).then(() => () => E(8431)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), c = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, d = (e, a) => {
          e = c(e), a = c(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              f = (typeof t)[0];
            if (r >= a.length) return "u" == f;
            var d = a[r],
              n = (typeof d)[0];
            if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
            if ("o" != f && "u" != f && t != d) return t < d;
            r++
          }
        }, n = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(d = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, d);
            return r
          }
          var c = [];
          for (f = 1; f < e.length; f++) {
            var d = e[f];
            c.push(0 === d ? "not(" + o() + ")" : 1 === d ? "(" + o() + " || " + o() + ")" : 2 === d ? c.pop() + " " + c.pop() : n(d))
          }
          return o();

          function o() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = c(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, d = 1, n = !0;; d++, f++) {
              var b, i, s = d < e.length ? (typeof e[d])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(b = a[f]))[0])) return !n || ("u" == s ? d > r && !t : "" == s != t);
              if ("u" == i) {
                if (!n || "u" != s) return !1
              } else if (n)
                if (s == i)
                  if (d <= r) {
                    if (b != e[d]) return !1
                  } else {
                    if (t ? b > e[d] : b < e[d]) return !1;
                    b != e[d] && (n = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || d <= r) return !1;
                n = !1, d--
              } else {
                if (d <= r || i < s != t) return !1;
                n = !1
              } else "s" != s && "n" != s && (n = !1, d--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && E.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, t) => {
          var f = t ? s(e[a]) : e[a];
          return (a = Object.keys(f).reduce((e, a) => !o(r, a) || e && !d(e, a) ? e : a, 0)) && f[a]
        }, u = (e, a, r, t, f) => {
          var c = e[r];
          return "No satisfying version (" + n(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, r) => r ? r() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, r, t, f, c) {
          var d = E.I(a);
          return d && d.then && !t ? d.then(e.bind(e, a, E.S[a], r, !1, f, c)) : e(a, E.S[a], r, t, f, c)
        })((e, a, r, t, f, c) => {
          if (!b(a, r)) return h(e, r, c);
          var d = l(a, r, f, t);
          return d ? i(d) : c ? c() : void p(u(a, e, r, f, t))
        }), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], () => E.e(8431).then(() => () => E(8431))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([E.e(3738), E.e(9623), E.e(933)]).then(() => () => E(5802))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([E.e(1098), E.e(5389)]).then(() => () => E(5389)))
        }, v = {
          2229: [2229],
          5966: [5966],
          9623: [9623]
        }, w = {}, E.f.consumes = (e, a) => {
          E.o(v, e) && v[e].forEach(e => {
            if (E.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var r = a => {
                g[e] = 0, E.m[e] = r => {
                  delete E.c[e], r.exports = a()
                }
              };
              w[e] = !0;
              var t = a => {
                delete g[e], E.m[e] = r => {
                  throw delete E.c[e], a
                }
              };
              try {
                var f = y[e]();
                f.then ? a.push(g[e] = f.then(r).catch(t)) : r(f)
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
            E.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                792: 1,
                2364: 1,
                9741: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = E.miniCssF(e),
                  f = E.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (d = r[t]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var d;
                      if ((f = (d = c[t]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", E.nc && (c.nonce = E.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var d = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = n, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
          E.f.j = (a, r) => {
            var t = E.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var c = E.p + E.u(a),
                d = new Error;
              E.l(c, r => {
                if (E.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, t[1](d)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [c, d, n] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in d) E.o(d, t) && (E.m[t] = d[t]);
                n && n(E)
              }
              for (a && a(r); o < c.length; o++) f = c[o], E.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), E(3032), E(4848)
      })())
    }
  }
});