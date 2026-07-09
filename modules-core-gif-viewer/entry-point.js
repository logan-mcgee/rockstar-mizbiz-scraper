try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a12a3d1f-382f-403d-8c44-501686050c64", e._sentryDebugIdIdentifier = "sentry-dbid-a12a3d1f-382f-403d-8c44-501686050c64")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, a, i, f, d, l, s, u, c, p, h, b, m, g, y, v, w, _, k = {
            154(e, r, t) {
              (0, t(9160).w)(1)
            },
            9160(e, r, t) {
              const n = t(1908).y;
              r.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            5649(e, r, t) {
              t(154)
            },
            1908(e, r, t) {
              r.y = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            4848(e, r, t) {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(82), t.e(331), t.e(721)]).then(() => () => t(6721)),
                  "./lazy": () => Promise.all([t.e(82), t.e(416), t.e(331), t.e(912)]).then(() => () => t(5912)),
                  "./tina": () => Promise.all([t.e(250), t.e(82), t.e(17), t.e(331), t.e(919)]).then(() => () => t(8919)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(250), t.e(82), t.e(17), t.e(331), t.e(919)]).then(() => () => t(8919))
                },
                o = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, r),
                a = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      o = t.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => a
              })
            }
          },
          E = {};

        function S(e) {
          var r = E[e];
          if (void 0 !== r) return r.exports;
          var t = E[e] = {
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, S), t.exports
        }
        return S.m = k, S.c = E, S.y = r, S.amdO = {}, S.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return S.d(r, {
            a: r
          }), r
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, S.t = function(r, n) {
          if (1 & n && (r = this(r)), 8 & n) return r;
          if ("object" == typeof r && r) {
            if (4 & n && r.__esModule) return r;
            if (16 & n && "function" == typeof r.then) return r
          }
          var o = Object.create(null);
          S.r(o);
          var a = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var i = 2 & n && r;
            ("object" == typeof i || "function" == typeof i) && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach(e => a[e] = () => r[e]);
          return a.default = () => r, S.d(o, a), o
        }, S.d = (e, r) => {
          for (var t in r) S.o(r, t) && !S.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, S.f = {}, S.e = e => Promise.all(Object.keys(S.f).reduce((r, t) => (S.f[t](e, r), r), [])), S.u = e => "js/" + {
          162: "fceceafbf70f14f7a555f55e61fb67e8",
          250: "e0af822764123ecd33dde90ab5b517fe",
          269: "376fe03e50ebed20504ae05cbb3a6135",
          581: "e3302679c31a91a89d37fd728048be11",
          584: "1ff4fd625dcb70eced2cb98706821f2d",
          679: "bc9d0af5f371065acb625eac3ea1b5ce",
          721: "59e2f8767f145e55d3cb54e2583b3f5c",
          793: "a1a6247ab92d9efd3d64672680ae00eb",
          912: "5843511cffc0371a5cc71f5cac5a2ab2",
          919: "89c84cc6e6c1e5d03cdb965be6f09d0d"
        } [e] + ".js", S.miniCssF = e => "css/" + {
          721: "5e608aa107d624a061bf5c1486a248e3",
          912: "069b49906581e555f7e91f6dcda37312",
          919: "b5328e2f95f5b178239a08711e5d52f6"
        } [e] + ".css", S.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), S.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n = {}, o = "@rockstargames/modules-core-gif-viewer:", S.l = (e, r, t, a) => {
          if (n[e]) n[e].push(r);
          else {
            var i, f;
            if (void 0 !== t)
              for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var s = d[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + t) {
                  i = s;
                  break
                }
              }
            i || (f = !0, (i = document.createElement("script")).charset = "utf-8", S.nc && i.setAttribute("nonce", S.nc), i.setAttribute("data-webpack", o + t), i.src = e), n[e] = [r];
            var u = (r, t) => {
                i.onerror = i.onload = null, clearTimeout(c);
                var o = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach(e => e(t)), r) return r(t)
              },
              c = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), f && document.head.appendChild(i)
          }
        }, S.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, (() => {
          S.S = {};
          var e = {},
            r = {};
          S.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              S.o(S.S, t) || (S.S[t] = {});
              var a = S.S[t],
                i = "@rockstargames/modules-core-gif-viewer",
                f = (e, r, t, n) => {
                  var o = a[e] = a[e] || {},
                    f = o[r];
                  (!f || !f.loaded && (!n != !f.eager ? n : i > f.from)) && (o[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                d = [];
              return "default" === t && (f("@rsgweb/utils", "0.0.0-development", () => Promise.all([S.e(250), S.e(679), S.e(82), S.e(416), S.e(584), S.e(793)]).then(() => () => S(4584))), f("react-dom", "18.3.1", () => Promise.all([S.e(162), S.e(82)]).then(() => () => S(162))), f("react-router-dom", "6.30.3", () => Promise.all([S.e(269), S.e(82), S.e(17)]).then(() => () => S(6650))), f("react", "18.3.1", () => S.e(581).then(() => () => S(2581)))), e[t] = d.length ? Promise.all(d).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          S.g.importScripts && (e = S.g.location + "");
          var r = S.g.document;
          if (!e && r && (r.currentScript && "SCRIPT" === r.currentScript.tagName.toUpperCase() && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), S.p = e
        })(), a = e => {
          var r = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            n = t[1] ? r(t[1]) : [];
          return t[2] && (n.length++, n.push.apply(n, r(t[2]))), t[3] && (n.push([]), n.push.apply(n, r(t[3]))), n
        }, i = (e, r) => {
          e = a(e), r = a(r);
          for (var t = 0;;) {
            if (t >= e.length) return t < r.length && "u" != (typeof r[t])[0];
            var n = e[t],
              o = (typeof n)[0];
            if (t >= r.length) return "u" == o;
            var i = r[t],
              f = (typeof i)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && n != i) return n < i;
            t++
          }
        }, f = e => {
          var r = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (r + .5) {
            t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
            for (var n = 1, o = 1; o < e.length; o++) n--, t += "u" == (typeof(i = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, i);
            return t
          }
          var a = [];
          for (o = 1; o < e.length; o++) {
            var i = e[o];
            a.push(0 === i ? "not(" + d() + ")" : 1 === i ? "(" + d() + " || " + d() + ")" : 2 === i ? a.pop() + " " + a.pop() : f(i))
          }
          return d();

          function d() {
            return a.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, d = (e, r) => {
          if (0 in e) {
            r = a(r);
            var t = e[0],
              n = t < 0;
            n && (t = -t - 1);
            for (var o = 0, i = 1, f = !0;; i++, o++) {
              var l, s, u = i < e.length ? (typeof e[i])[0] : "";
              if (o >= r.length || "o" == (s = (typeof(l = r[o]))[0])) return !f || ("u" == u ? i > t && !n : "" == u != n);
              if ("u" == s) {
                if (!f || "u" != u) return !1
              } else if (f)
                if (u == s)
                  if (i <= t) {
                    if (l != e[i]) return !1
                  } else {
                    if (n ? l > e[i] : l < e[i]) return !1;
                    l != e[i] && (f = !1)
                  }
              else if ("s" != u && "n" != u) {
                if (n || i <= t) return !1;
                f = !1, i--
              } else {
                if (i <= t || s < u != n) return !1;
                f = !1
              } else "s" != u && "n" != u && (f = !1, i--)
            }
          }
          var c = [],
            p = c.pop.bind(c);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? d(h, r) : !p())
          }
          return !!p()
        }, l = (e, r) => e && S.o(e, r), s = e => (e.loaded = 1, e.get()), u = e => Object.keys(e).reduce((r, t) => (e[t].eager && (r[t] = e[t]), r), {}), c = (e, r, t) => {
          var n = t ? u(e[r]) : e[r];
          return Object.keys(n).reduce((e, r) => !e || !n[e].loaded && i(e, r) ? r : e, 0)
        }, p = (e, r, t, n) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + f(n) + ")", h = e => {
          throw new Error(e)
        }, b = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, r, t) => t ? t() : ((e, r) => h("Shared module " + r + " doesn't exist in shared scope " + e))(e, r), g = (e => function(r, t, n, o, a) {
          var i = S.I(r);
          return i && i.then && !n ? i.then(e.bind(e, r, S.S[r], t, !1, o, a)) : e(r, S.S[r], t, n, o, a)
        })((e, r, t, n, o, a) => {
          if (!l(r, t)) return m(e, t, a);
          var i = c(r, t, n);
          return d(o, i) || b(p(r, t, i, o)), s(r[t][i])
        }), y = {}, v = {
          3082: () => g("default", "react", !1, [0], () => S.e(581).then(() => () => S(2581))),
          3331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([S.e(250), S.e(679), S.e(416), S.e(584)]).then(() => () => S(4584))),
          6416: () => g("default", "react-router-dom", !1, [0], () => Promise.all([S.e(269), S.e(17)]).then(() => () => S(6650))),
          4017: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => S.e(162).then(() => () => S(162)))
        }, w = {
          17: [4017],
          82: [3082],
          331: [3331],
          416: [6416]
        }, _ = {}, S.f.consumes = (e, r) => {
          S.o(w, e) && w[e].forEach(e => {
            if (S.o(y, e)) return r.push(y[e]);
            if (!_[e]) {
              var t = r => {
                y[e] = 0, S.m[e] = t => {
                  delete S.c[e], t.exports = r()
                }
              };
              _[e] = !0;
              var n = r => {
                delete y[e], S.m[e] = t => {
                  throw delete S.c[e], r
                }
              };
              try {
                var o = v[e]();
                o.then ? r.push(y[e] = o.then(t).catch(n)) : t(o)
              } catch (e) {
                n(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              737: 0
            };
            S.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                721: 1,
                912: 1,
                919: 1
              } [r] && t.push(e[r] = (e => new Promise((r, t) => {
                var n = S.miniCssF(e),
                  o = S.p + n;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                      var o = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === r)) return i
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var i;
                      if ((o = (i = a[n]).getAttribute("data-href")) === e || o === r) return i
                    }
                  })(n, o)) return r();
                ((e, r, t, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", S.nc && (a.nonce = S.nc), a.onerror = a.onload = t => {
                    if (a.onerror = a.onload = null, "load" === t.type) n();
                    else {
                      var i = t && t.type,
                        f = t && t.target && t.target.href || r,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ": " + f + ")");
                      d.name = "ChunkLoadError", d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = f, a.parentNode && a.parentNode.removeChild(a), o(d)
                    }
                  }, a.href = r, document.head.appendChild(a)
                })(e, o, 0, r, t)
              }))(r).then(() => {
                e[r] = 0
              }, t => {
                throw delete e[r], t
              }))
            }
          }
        })(), (() => {
          var e = {
            737: 0
          };
          S.f.j = (r, t) => {
            var n = S.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (/^(17|331|416|82)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise((t, o) => n = e[r] = [t, o]);
              t.push(n[2] = o);
              var a = S.p + S.u(r),
                i = new Error;
              S.l(a, t => {
                if (S.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }, "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var n, o, [a, i, f] = t,
                d = 0;
              if (a.some(r => 0 !== e[r])) {
                for (n in i) S.o(i, n) && (S.m[n] = i[n]);
                f && f(S)
              }
              for (r && r(t); d < a.length; d++) o = a[d], S.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), S(5649), S(4848)
      })())
    }
  }
});