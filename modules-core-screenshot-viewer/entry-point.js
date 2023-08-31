System.register([], (function(e, r) {
  return {
    execute: function() {
      e((() => {
        var e, t, n, o, a = {
            580: (e, r, t) => {
              (0, t(879).s)(1)
            },
            879: (e, r, t) => {
              const n = t(490).R;
              r.s = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            308: (e, r, t) => {
              t(580)
            },
            490: (e, r, t) => {
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
                  "./index": () => Promise.all([t.e(932), t.e(511)]).then((() => () => t(511)))
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
          252: "5808e4ad45197e227c30",
          511: "373834459e50983d98f0",
          528: "b0b69d4ddb7f599208d0",
          932: "355d60d965f6072ddb0b"
        } [e] + ".js", s.miniCssF = e => "css/5eb65ebdcbeb937817b9.css", s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, t = "@rockstargames/modules-core-screenshot-viewer:", s.l = (r, n, o, a) => {
          if (e[r]) e[r].push(n);
          else {
            var i, u;
            if (void 0 !== o)
              for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                var f = l[d];
                if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + o) {
                  i = f;
                  break
                }
              }
            i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [n];
            var c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(h);
                var o = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
              },
              h = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), u && document.head.appendChild(i)
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
                    var d = l.then((e => s(e, i)), a);
                    if (!u) return d;
                    r.push(n.p = d)
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
              return "default" === t && (u("react-router-dom", "6.11.2", (() => Promise.all([s.e(528), s.e(932)]).then((() => () => s(528))))), u("react", "18.2.0", (() => s.e(252).then((() => () => s(252)))))), e[t] = l.length ? Promise.all(l).then((() => e[t] = 1)) : 1
            }
          }
        })(), s.p = "", (() => {
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
                  var l, d, f = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (d = (typeof(l = n[i]))[0])) return !u || ("u" == f ? s > o && !a : "" == f != a);
                  if ("u" == d) {
                    if (!u || "u" != f) return !1
                  } else if (u)
                    if (f == d)
                      if (s <= o) {
                        if (l != t[s]) return !1
                      } else {
                        if (a ? l > t[s] : l < t[s]) return !1;
                        l != t[s] && (u = !1)
                      }
                  else if ("s" != f && "n" != f) {
                    if (a || s <= o) return !1;
                    u = !1, s--
                  } else {
                    if (s <= o || d < f != a) return !1;
                    u = !1
                  } else "s" != f && "n" != f && (u = !1, s--)
                }
              }
              var c = [],
                h = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var p = t[i];
                c.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? r(p, n) : !h())
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
              932: () => n("default", "react", [1, 18, 2, 0], (() => s.e(252).then((() => () => s(252))))),
              455: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(528).then((() => () => s(528)))))
            },
            i = {
              511: [455],
              932: [932]
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
                511: 1
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
              else if (932 != r) {
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
        })(), s(308), s(288)
      })())
    }
  }
}));