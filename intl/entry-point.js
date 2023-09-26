System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, i = {
            252: (e, r, t) => {
              (0, t(555).s)(1)
            },
            555: (e, r, t) => {
              const n = t(936).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            626: (e, r, t) => {
              t(252)
            },
            936: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, i = n.length; o !== r && i >= 0;) "/" === n[--i] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var a = n.slice(0, i + 1);
                return t.protocol + "//" + t.host + a
              };
              Number.isInteger
            },
            288: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => t.e(567).then((() => () => t(567)))
                },
                o = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                i = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      o = t.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => i
              })
            }
          },
          a = {};

        function s(e) {
          var r = a[e];
          if (void 0 !== r) return r.exports;
          var t = a[e] = {
            exports: {}
          };
          return i[e](t, t.exports, s), t.exports
        }
        return s.m = i, s.c = a, s.y = r, s.d = (e, r) => {
          for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/f9e6db192995d4b5074f.js", s.miniCssF = e => {}, s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/intl:", s.l = (r, n, o, i) => {
          if (e[r]) e[r].push(n);
          else {
            var a, u;
            if (void 0 !== o)
              for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                var p = c[l];
                if (p.getAttribute("src") == r || p.getAttribute("data-webpack") == t + o) {
                  a = p;
                  break
                }
              }
            a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.setAttribute("data-webpack", t + o), a.src = r), e[r] = [n];
            var f = (t, n) => {
                a.onerror = a.onload = null, clearTimeout(d);
                var o = e[r];
                if (delete e[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), t) return t(n)
              },
              d = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = f.bind(null, a.onerror), a.onload = f.bind(null, a.onload), u && document.head.appendChild(a)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n = {}, o = {}, s.f.remotes = (e, r) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var n = o[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var i = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), s.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                a = (e, t, o, a, s, u) => {
                  try {
                    var c = e(t, o);
                    if (!c || !c.then) return s(c, a, u);
                    var l = c.then((e => s(e, a)), i);
                    if (!u) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    i(e)
                  }
                },
                u = (e, r, o) => a(r.get, n[1], t, 0, c, o),
                c = r => {
                  n.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              a(s, n[2], 0, 0, ((e, r, t) => e ? a(s.I, n[0], 0, e, u, t) : i()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            r = {};
          s.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {}), s.S[t];
              var i = [];
              return e[t] = i.length ? Promise.all(i).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var r = s.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = {
            622: 0
          };
          s.f.j = (r, t) => {
            var n = s.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var i = s.p + s.u(r),
                  a = new Error;
                s.l(i, (t => {
                  if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var o = t && ("load" === t.type ? "missing" : t.type),
                      i = t && t.target && t.target.src;
                    a.message = "Loading chunk " + r + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, n[1](a)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var n, o, i = t[0],
                a = t[1],
                u = t[2],
                c = 0;
              if (i.some((r => 0 !== e[r]))) {
                for (n in a) s.o(a, n) && (s.m[n] = a[n]);
                u && u(s)
              }
              for (r && r(t); c < i.length; c++) o = i[c], s.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(626), s(288)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map