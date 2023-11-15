System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, o, n, a = {
            6100: (e, r, t) => {
              (0, t(487).s)(1)
            },
            487: (e, r, t) => {
              const o = t(6175).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = o(t.y.meta.url, e)
              }
            },
            9473: (e, r, t) => {
              t(6100)
            },
            6175: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var o = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, n = 0, a = o.length; n !== r && a >= 0;) "/" === o[--a] && n++;
                if (n !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var i = o.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            5895: (e, r, t) => {
              "use strict";
              var o = {
                  "./browser": () => Promise.all([t.e(419), t.e(118)]).then((() => () => t(118)))
                },
                n = (e, r) => (t.R = r, r = t.o(o, e) ? o[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                a = (e, r) => {
                  if (t.S) {
                    var o = "default",
                      n = t.S[o];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[o] = e, t.I(o, r)
                  }
                };
              t.d(r, {
                get: () => n,
                init: () => a
              })
            }
          },
          i = {};

        function s(e) {
          var r = i[e];
          if (void 0 !== r) return r.exports;
          var t = i[e] = {
            exports: {}
          };
          return a[e].call(t.exports, t, t.exports, s), t.exports
        }
        return s.m = a, s.c = i, s.y = r, s.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return s.d(r, {
            a: r
          }), r
        }, s.d = (e, r) => {
          for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
          118: "58263bfdc65a60ed83102587ce359c3f",
          419: "7cb17838b80ecb420e90a89592a90152"
        } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/polyfills:", s.l = (r, o, n, a) => {
          if (e[r]) e[r].push(o);
          else {
            var i, l;
            if (void 0 !== n)
              for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                var p = c[u];
                if (p.getAttribute("src") == r || p.getAttribute("data-webpack") == t + n) {
                  i = p;
                  break
                }
              }
            i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + n), i.src = r), e[r] = [o];
            var f = (t, o) => {
                i.onerror = i.onload = null, clearTimeout(d);
                var n = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(o))), t) return t(o)
              },
              d = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), l && document.head.appendChild(i)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o = {}, n = {}, s.f.remotes = (e, r) => {
          s.o(o, e) && o[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var o = n[e];
            if (!(t.indexOf(o) >= 0)) {
              if (t.push(o), o.p) return r.push(o.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), s.m[e] = () => {
                    throw r
                  }, o.p = 0
                },
                i = (e, t, n, i, s, l) => {
                  try {
                    var c = e(t, n);
                    if (!c || !c.then) return s(c, i, l);
                    var u = c.then((e => s(e, i)), a);
                    if (!l) return u;
                    r.push(o.p = u)
                  } catch (e) {
                    a(e)
                  }
                },
                l = (e, r, n) => i(r.get, o[1], t, 0, c, n),
                c = r => {
                  o.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(s, o[2], 0, 0, ((e, r, t) => e ? i(s.I, o[0], 0, e, l, t) : a()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            r = {};
          s.I = (t, o) => {
            o || (o = []);
            var n = r[t];
            if (n || (n = r[t] = {}), !(o.indexOf(n) >= 0)) {
              if (o.push(n), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {}), s.S[t];
              var a = [];
              return e[t] = a.length ? Promise.all(a).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var r = s.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var o = t.length - 1; o > -1 && !e;) e = t[o--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = {
            732: 0
          };
          s.f.j = (r, t) => {
            var o = s.o(e, r) ? e[r] : void 0;
            if (0 !== o)
              if (o) t.push(o[2]);
              else {
                var n = new Promise(((t, n) => o = e[r] = [t, n]));
                t.push(o[2] = n);
                var a = s.p + s.u(r),
                  i = new Error;
                s.l(a, (t => {
                  if (s.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                    var n = t && ("load" === t.type ? "missing" : t.type),
                      a = t && t.target && t.target.src;
                    i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")", i.name = "ChunkLoadError", i.type = n, i.request = a, o[1](i)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var o, n, a = t[0],
                i = t[1],
                l = t[2],
                c = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (o in i) s.o(i, o) && (s.m[o] = i[o]);
                l && l(s)
              }
              for (r && r(t); c < a.length; c++) n = a[c], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_polyfills = self.webpackChunk_rockstargames_polyfills || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(9473), s(5895)
      })())
    }
  }
}));