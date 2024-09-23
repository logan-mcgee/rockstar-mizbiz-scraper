! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "541f6a09-baee-4e1c-998a-e566b933d768", e._sentryDebugIdIdentifier = "sentry-dbid-541f6a09-baee-4e1c-998a-e566b933d768")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    i = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, l, f, d = {
            6539: (e, t, r) => {
              (0, r(3403).w)(1)
            },
            3403: (e, t, r) => {
              const a = r(5659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            2160: (e, t, r) => {
              r(6539)
            },
            5659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var i = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            8527: (e, t, r) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([r.e(198), r.e(403), r.e(464)]).then((() => () => r(1464)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            1024: e => {
              "use strict";
              e.exports = r
            },
            404: e => {
              "use strict";
              e.exports = a
            },
            5136: e => {
              "use strict";
              e.exports = o
            },
            9466: e => {
              "use strict";
              e.exports = n
            },
            2969: e => {
              "use strict";
              e.exports = i
            }
          },
          c = {};

        function u(e) {
          var t = c[e];
          if (void 0 !== t) return t.exports;
          var r = c[e] = {
            exports: {}
          };
          return d[e](r, r.exports, u), r.exports
        }
        return u.m = d, u.c = c, u.y = t, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          42: "b125665033ce369f9cfc787711626dfb",
          49: "06adb5e4ae1b957f340cb5344eb94af8",
          66: "a3c3a2178d47b4baf3d2d909a1f3eaaa",
          143: "90c1f0aaa3faf0a3c2572753f32ed94d",
          198: "f59b596852325753daae0b124b43a80d",
          261: "b4d79c540c2f137bebce12dda2cae5d5",
          380: "9c87921dabc8a87bc09c275d2d8905ac",
          396: "ad2c482d86d622363254b7e9a0cc6d45",
          403: "1fa54d79a4088e3dd57de02011a7569a",
          464: "6effc43a1fa0818e9278bc000969eff4",
          524: "2e2527c86aafad1bd8ca4425a8cfb8d7",
          606: "b7cd52090d2f771531a5b42bba512a8c",
          776: "dbad2632a93c67f6fd10cbd0d6969f98"
        } [e] + ".js", u.miniCssF = e => "css/a58459d4db5010ae69023108d04a66e1.css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-gta-trilogy:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, i;
            if (void 0 !== a)
              for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
                var d = l[f];
                if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == s + a) {
                  n = d;
                  break
                }
              }
            n || (i = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
            var c = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = c.bind(null, n.onerror), n.onload = c.bind(null, n.onload), i && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l = {
          396: [396],
          464: [207, 1879, 2756, 6398, 8407]
        }, f = {
          207: ["default", "./index", 404],
          396: ["default", "./hooks", 2969],
          1879: ["default", "./index", 5136],
          2756: ["default", "./index", 2969],
          6398: ["default", "./helpers", 9466],
          8407: ["default", "./index", 1024]
        }, u.f.remotes = (e, t) => {
          u.o(l, e) && l[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = f[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, i, s, l) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return s(f, i, l);
                    var d = f.then((e => s(e, i)), o);
                    if (!l) return d;
                    t.push(a.p = d)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => n(t.get, a[1], r, 0, s, o),
                s = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(u, a[2], 0, 0, ((e, t, r) => e ? n(u.I, a[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var n = u.S[r],
                i = "@rockstargames/sites-gta-trilogy",
                s = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    s = o[t];
                  (!s || !s.loaded && (!a != !s.eager ? a : i > s.from)) && (o[t] = {
                    get: r,
                    from: i,
                    eager: !!a
                  })
                },
                l = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var i = n(o);
                    if (i && i.then) return f.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (s("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(66), u.e(403), u.e(396), u.e(143)]).then((() => () => u(6524))))), s("framer-motion", "7.10.3", (() => Promise.all([u.e(606), u.e(403)]).then((() => () => u(2606))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(261), u.e(49), u.e(403)]).then((() => () => u(2049))))), s("react-router-dom", "6.17.0", (() => Promise.all([u.e(261), u.e(776), u.e(403)]).then((() => () => u(2776))))), s("react", "18.2.0", (() => u.e(380).then((() => () => u(3380))))), s("usehooks-ts", "2.9.1", (() => Promise.all([u.e(42), u.e(403)]).then((() => () => u(4042))))), l(1024), l(404), l(5136), l(9466), l(2969)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var i = 0, s = 1, l = !0;; s++, i++) {
                  var f, d, c = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= a.length || "o" == (d = (typeof(f = a[i]))[0])) return !l || ("u" == c ? s > o && !n : "" == c != n);
                  if ("u" == d) {
                    if (!l || "u" != c) return !1
                  } else if (l)
                    if (c == d)
                      if (s <= o) {
                        if (f != r[s]) return !1
                      } else {
                        if (n ? f > r[s] : f < r[s]) return !1;
                        f != r[s] && (l = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (n || s <= o) return !1;
                    l = !1, s--
                  } else {
                    if (s <= o || d < c != n) return !1;
                    l = !1
                  } else "s" != c && "n" != c && (l = !1, s--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var i = r[a],
                    s = (typeof i)[0];
                  if (n != s) return "o" == n && "n" == s || "s" == s || "u" == n;
                  if ("o" != n && "u" != n && o != i) return o < i;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = u.I(t);
              return n && n.then ? n.then(e.bind(e, t, u.S[t], r, a, o)) : e(t, u.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var i = t && u.o(t, a) && r(t, a, o);
              return i ? (e => (e.loaded = 1, e.get()))(i) : n()
            })),
            o = {},
            n = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => u.e(380).then((() => () => u(3380))))),
              280: () => a("default", "framer-motion", [1, 7, 5, 1], (() => u.e(606).then((() => () => u(2606))))),
              908: () => a("default", "usehooks-ts", [1, 2, 7, 2], (() => u.e(42).then((() => () => u(4042))))),
              4410: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(261), u.e(776)]).then((() => () => u(2776))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(66), u.e(396), u.e(524)]).then((() => () => u(6524))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([u.e(261), u.e(49)]).then((() => () => u(2049)))))
            },
            i = {
              403: [1403],
              464: [280, 908, 4410, 6717, 9779]
            },
            s = {};
          u.f.consumes = (e, t) => {
            u.o(i, e) && i[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!s[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var a = t => {
                  delete o[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var i = n[e]();
                  i.then ? t.push(o[e] = i.then(r).catch(a)) : r(i)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              60: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                464: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  o = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (o === e || o === t)) return i
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var i;
                      if ((o = (i = n[a]).getAttribute("data-href")) === e || o === t) return i
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, n.parentNode && n.parentNode.removeChild(n), o(l)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            60: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(396|403)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = u.p + u.u(t),
                i = new Error;
              u.l(n, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", i.name = "ChunkLoadError", i.type = o, i.request = n, a[1](i)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                i = r[1],
                s = r[2],
                l = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in i) u.o(i, a) && (u.m[a] = i[a]);
                s && s(u)
              }
              for (t && t(r); l < n.length; l++) o = n[l], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u(2160), u(8527)
      })())
    }
  }
}));