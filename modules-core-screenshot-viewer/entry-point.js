System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, a = {
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
            288: (e, r, t) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([t.e(927), t.e(188)]).then((() => () => t(188)))
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
        return s.m = a, s.c = i, s.y = r, s.d = (e, r) => {
          for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
          73: "681a4f01700f959ff849502e1ac167bc",
          188: "0e8c242ece6f684da5a545c418d5125c",
          377: "f69617120d9d0e048421ad37ad12b14f",
          927: "212aac02fbe327135747e7df18ca8370"
        } [e] + ".js", s.miniCssF = e => "css/17664c695760dd3b24858767d6739963.css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/modules-core-screenshot-viewer:", s.l = (r, n, o, a) => {
          if (e[r]) e[r].push(n);
          else {
            var i, u;
            if (void 0 !== o)
              for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
                var c = l[f];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == t + o) {
                  i = c;
                  break
                }
              }
            i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [n];
            var d = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(d.bind(null, void 0, {
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
        }, n = {}, o = {}, s.f.remotes = (e, r) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var n = o[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), s.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                i = (e, t, o, i, s, u) => {
                  try {
                    var l = e(t, o);
                    if (!l || !l.then) return s(l, i, u);
                    var f = l.then((e => s(e, i)), a);
                    if (!u) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    a(e)
                  }
                },
                u = (e, r, o) => i(r.get, n[1], t, 0, l, o),
                l = r => {
                  n.p = 1, s.m[e] = e => {
                    e.exports = r()
                  }
                };
              i(s, n[2], 0, 0, ((e, r, t) => e ? i(s.I, n[0], 0, e, u, t) : a()), 1)
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
              s.o(s.S, t) || (s.S[t] = {});
              var a = s.S[t],
                i = "@rockstargames/modules-core-screenshot-viewer",
                u = (e, r, t, n) => {
                  var o = a[e] = a[e] || {},
                    s = o[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (o[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                l = [];
              return "default" === t && (u("react-router-dom", "6.17.0", (() => Promise.all([s.e(73), s.e(927)]).then((() => () => s(73))))), u("react", "18.2.0", (() => s.e(377).then((() => () => s(377)))))), e[t] = l.length ? Promise.all(l).then((() => e[t] = 1)) : 1
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
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = t[1] ? r(t[1]) : [];
              return t[2] && (n.length++, n.push.apply(n, r(t[2]))), t[3] && (n.push([]), n.push.apply(n, r(t[3]))), n
            },
            r = (t, n) => {
              if (0 in t) {
                n = e(n);
                var o = t[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var l, f, c = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(l = n[i]))[0])) return !u || ("u" == c ? s > o && !a : "" == c != a);
                  if ("u" == f) {
                    if (!u || "u" != c) return !1
                  } else if (u)
                    if (c == f)
                      if (s <= o) {
                        if (l != t[s]) return !1
                      } else {
                        if (a ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (u = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || f < c != a) return !1;
                    u = !1
                  } else "s" != c && "n" != c && (u = !1, s--)
                }
              }
              var d = [],
                h = d.pop.bind(d);
              for (i = 1; i < t.length; i++) {
                var p = t[i];
                d.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? r(p, n) : !h())
              }
              return !!h()
            },
            t = (t, n, o) => {
              var a = t[n];
              return (n = Object.keys(a).reduce(((t, n) => !r(o, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var o = r[n],
                    a = (typeof o)[0];
                  if (n >= t.length) return "u" == a;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (a != s) return "o" == a && "n" == s || "s" == s || "u" == a;
                  if ("o" != a && "u" != a && o != i) return o < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && a[n]
            },
            n = (e => function(r, t, n, o) {
              var a = s.I(r);
              return a && a.then ? a.then(e.bind(e, r, s.S[r], t, n, o)) : e(r, s.S[r], t, n, o)
            })(((e, r, n, o, a) => {
              var i = r && s.o(r, n) && t(r, n, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : a()
            })),
            o = {},
            a = {
              927: () => n("default", "react", [1, 18, 2, 0], (() => s.e(377).then((() => () => s(377))))),
              583: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(73).then((() => () => s(73)))))
            },
            i = {
              188: [583],
              927: [927]
            };
          s.f.consumes = (e, r) => {
            s.o(i, e) && i[e].forEach((e => {
              if (s.o(o, e)) return r.push(o[e]);
              var t = r => {
                  o[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = r()
                  }
                },
                n = r => {
                  delete o[e], s.m[e] = t => {
                    throw delete s.c[e], r
                  }
                };
              try {
                var i = a[e]();
                i.then ? r.push(o[e] = i.then(t).catch(n)) : t(i)
              } catch (e) {
                n(e)
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              849: 0
            };
            s.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                188: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var n = s.miniCssF(e),
                  o = s.p + n;
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
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = t => {
                    if (a.onerror = a.onload = null, "load" === t.type) n();
                    else {
                      var i = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.href || r,
                        u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, a.parentNode && a.parentNode.removeChild(a), o(u)
                    }
                  }, a.href = r, document.head.appendChild(a)
                })(e, o, 0, r, t)
              })))(r).then((() => {
                e[r] = 0
              }), (t => {
                throw delete e[r], t
              })))
            }
          }
        })(), (() => {
          var e = {
            849: 0
          };
          s.f.j = (r, t) => {
            var n = s.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (927 != r) {
              var o = new Promise(((t, o) => n = e[r] = [t, o]));
              t.push(n[2] = o);
              var a = s.p + s.u(r),
                i = new Error;
              s.l(a, (t => {
                if (s.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
                }
              }), "chunk-" + r, r)
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, o, a = t[0],
                i = t[1],
                u = t[2],
                l = 0;
              if (a.some((r => 0 !== e[r]))) {
                for (n in i) s.o(i, n) && (s.m[n] = i[n]);
                u && u(s)
              }
              for (r && r(t); l < a.length; l++) o = a[l], s.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), s(473), s(288)
      })())
    }
  }
}));