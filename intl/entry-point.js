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
                  "./messages": () => Promise.all([t.e(534), t.e(215)]).then((() => () => t(215)))
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

        function c(e) {
          var r = s[e];
          if (void 0 !== r) return r.exports;
          var t = s[e] = {
            exports: {}
          };
          return i[e](t, t.exports, c), t.exports
        }
        return c.m = i, c.c = s, c.y = r, c.d = (e, r) => {
          for (var t in r) c.o(r, t) && !c.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => "js/" + {
          215: "8213b5728951d252a80233e0c00868a6",
          534: "08c0a796dc01660932f2dc2c500f76e4",
          630: "78acddb89afa3ccf0c19bfffeb0b0030"
        } [e] + ".js", c.miniCssF = e => {}, c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, n = "@rockstargames/intl:", c.l = (r, t, o, a) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== o)
              for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                var f = u[l];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == n + o) {
                  i = f;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", n + o), i.src = r), e[r] = [t];
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
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o = {
          215: [657]
        }, a = {
          657: ["default", "./hooks", 369]
        }, c.f.remotes = (e, r) => {
          c.o(o, e) && o[e].forEach((e => {
            var t = c.R;
            t || (t = []);
            var n = a[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), c.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                i = (e, t, a, i, s, c) => {
                  try {
                    var u = e(t, a);
                    if (!u || !u.then) return s(u, i, c);
                    var l = u.then((e => s(e, i)), o);
                    if (!c) return l;
                    r.push(n.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => i(r.get, n[1], t, 0, u, o),
                u = r => {
                  n.p = 1, c.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(c, n[2], 0, 0, ((e, r, t) => e ? i(c.I, n[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            r = {};
          c.I = (t, n) => {
            n || (n = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[t]) return e[t];
              c.o(c.S, t) || (c.S[t] = {}), c.S[t];
              var a = [];
              return "default" === t && (e => {
                var r = e => {
                  return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                  var r
                };
                try {
                  var o = c(369);
                  if (!o) return;
                  var i = e => e && e.init && e.init(c.S[t], n);
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
          c.g.importScripts && (e = c.g.location + "");
          var r = c.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
        })(), (() => {
          var e = {
            622: 0
          };
          c.f.j = (r, t) => {
            var n = c.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else {
                var o = new Promise(((t, o) => n = e[r] = [t, o]));
                t.push(n[2] = o);
                var a = c.p + c.u(r),
                  i = new Error;
                c.l(a, (t => {
                  if (c.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
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
                u = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) c.o(i, n) && (c.m[n] = i[n]);
                s && s(c)
              }
              for (r && r(t); u < a.length; u++) o = a[u], c.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), c(473), c(322)
      })())
    }
  }
}));