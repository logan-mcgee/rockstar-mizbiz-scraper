System.register(["@rockstargames/utils"], (function(e, r) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, n, o, a, i = {
            100: (e, r, t) => {
              (0, t(487).s)(1)
            },
            487: (e, r, t) => {
              const n = t(175).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            473: (e, r, t) => {
              t(100)
            },
            175: (e, r, t) => {
              r.R = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, a = n.length; o !== r && a >= 0;) "/" === n[--a] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = n.slice(0, a + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            322: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => t.e(630).then((() => () => t(630))),
                  "./messages": () => Promise.all([t.e(534), t.e(848)]).then((() => () => t(848)))
                },
                o = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
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
            },
            369: e => {
              "use strict";
              e.exports = t
            }
          },
          s = {};

        function u(e) {
          var r = s[e];
          if (void 0 !== r) return r.exports;
          var t = s[e] = {
            exports: {}
          };
          return i[e](t, t.exports, u), t.exports
        }
        return u.m = i, u.c = s, u.y = r, u.d = (e, r) => {
          for (var t in r) u.o(r, t) && !u.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((r, t) => (u.f[t](e, r), r)), [])), u.u = e => "js/" + {
          534: "08c0a796dc01660932f2dc2c500f76e4",
          630: "d2d683996feb3d59185d6df2fab14a6c",
          848: "7d07ff0cb2f09be1ac48f02b223b4e6d"
        } [e] + ".js", u.miniCssF = e => {}, u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, n = "@rockstargames/intl:", u.l = (r, t, o, a) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== o)
              for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                var f = c[l];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == n + o) {
                  i = f;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", n + o), i.src = r), e[r] = [t];
            var d = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o = {
          848: [657]
        }, a = {
          657: ["default", "./hooks", 369]
        }, u.f.remotes = (e, r) => {
          u.o(o, e) && o[e].forEach((e => {
            var t = u.R;
            t || (t = []);
            var n = a[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), u.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                i = (e, t, a, i, s, u) => {
                  try {
                    var c = e(t, a);
                    if (!c || !c.then) return s(c, i, u);
                    var l = c.then((e => s(e, i)), o);
                    if (!u) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => i(r.get, n[1], t, 0, c, o),
                c = r => {
                  n.p = 1, u.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(u, n[2], 0, 0, ((e, r, t) => e ? i(u.I, n[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            r = {};
          u.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              u.o(u.S, t) || (u.S[t] = {}), u.S[t];
              var a = [];
              return "default" === t && (e => {
                var r = e => {
                  return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                  var r
                };
                try {
                  var o = u(369);
                  if (!o) return;
                  var i = e => e && e.init && e.init(u.S[t], n);
                  if (o.then) return a.push(o.then(i, r));
                  var s = i(o);
                  if (s && s.then) return a.push(s.catch(r))
                } catch (e) {
                  r(e)
                }
              })(), a.length ? e[t] = Promise.all(a).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var r = u.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
        })(), (() => {
          var e = {
            622: 0
          };
          u.f.j = (r, t) => {
            var n = u.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var a = u.p + u.u(r),
                  i = new Error;
                u.l(a, (t => {
                  if (u.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var o = t && ("load" === t.type ? "missing" : t.type),
                      a = t && t.target && t.target.src;
                    i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                  }
                }), "chunk-" + r, r)
              }
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                s = t[2],
                c = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) u.o(i, n) && (u.m[n] = i[n]);
                s && s(u)
              }
              for (r && r(t); c < a.length; c++) o = a[c], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), u(473), u(322)
      })())
    }
  }
}));