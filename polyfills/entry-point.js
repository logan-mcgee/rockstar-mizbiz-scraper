System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, o, n, a = {
            3580: (e, r, t) => {
              (0, t(4879).s)(1)
            },
            4879: (e, r, t) => {
              const o = t(2490).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = o(t.y.meta.url, e)
              }
            },
            1308: (e, r, t) => {
              t(3580)
            },
            2490: (e, r, t) => {
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
                  "./browser": () => t.e(721).then((() => () => t(721)))
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
          return a[e](t, t.exports, s), t.exports
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
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/aae3e9a337f0b0dfc7b8.js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/polyfills:", s.l = (r, o, n, a) => {
          if (e[r]) e[r].push(o);
          else {
            var i, u;
            if (void 0 !== n)
              for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                var f = l[c];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + n) {
                  i = f;
                  break
                }
              }
            i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + n), i.src = r), e[r] = [o];
            var d = (t, o) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var n = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(o))), t) return t(o)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i)
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
                i = (e, t, n, i, s, u) => {
                  try {
                    var l = e(t, n);
                    if (!l || !l.then) return s(l, i, u);
                    var c = l.then((e => s(e, i)), a);
                    if (!u) return c;
                    r.push(o.p = c)
                  } catch (e) {
                    a(e)
                  }
                },
                u = (e, r, n) => i(r.get, o[1], t, 0, l, n),
                l = r => {
                  o.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(s, o[2], 0, 0, ((e, r, t) => e ? i(s.I, o[0], 0, e, u, t) : a()), 1)
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
        })(), s.p = "", (() => {
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
                u = t[2],
                l = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (o in i) s.o(i, o) && (s.m[o] = i[o]);
                u && u(s)
              }
              for (r && r(t); l < a.length; l++) n = a[l], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            t = self.webpackChunk_rockstargames_polyfills = self.webpackChunk_rockstargames_polyfills || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(1308), s(5895)
      })())
    }
  }
}));