! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "75903ed1-a4e7-4ccf-9b1e-dd5947143f95", e._sentryDebugIdIdentifier = "sentry-dbid-75903ed1-a4e7-4ccf-9b1e-dd5947143f95")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-videoplayer", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, o, i, s, d = {
            539: (e, t, r) => {
              (0, r(403).w)(1)
            },
            403: (e, t, r) => {
              const n = r(659).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            160: (e, t, r) => {
              r(539)
            },
            659: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, a = 0, o = n.length; a !== t && o >= 0;) "/" === n[--o] && a++;
                if (a !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return r.protocol + "//" + r.host + i
              };
              Number.isInteger
            },
            527: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => Promise.all([r.e(785), r.e(403), r.e(610)]).then((() => () => r(610)))
                },
                a = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      a = r.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => a,
                init: () => o
              })
            },
            24: e => {
              "use strict";
              e.exports = r
            },
            136: e => {
              "use strict";
              e.exports = n
            },
            969: e => {
              "use strict";
              e.exports = a
            }
          },
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            exports: {}
          };
          return d[e](r, r.exports, l), r.exports
        }
        return l.m = d, l.c = f, l.y = t, l.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return l.d(t, {
            a: t
          }), t
        }, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/" + {
          49: "0748c10e10ff669a00f0c9e0d2b3a7fd",
          261: "fc58a49f74b8c3ad3f50af3c302ea05e",
          380: "50950bbf31cba1d3e1e94270edf63b98",
          403: "49c5b61eb2d92ede5f20ba4d10d7760e",
          610: "e202bc7cd2e7cdb9dd0d8544f4a0b794",
          776: "ef3be106558d0343598c40f95a00d6d1",
          785: "d5e9530ff190d98e30209fe212cec0c3"
        } [e] + ".js", l.miniCssF = e => "css/8cd03cf98c65730a953207bf33b7059b.css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/sites-rockstar-tv:", l.l = (t, r, n, a) => {
          if (e[t]) e[t].push(r);
          else {
            var i, s;
            if (void 0 !== n)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var u = d[f];
                if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == o + n) {
                  i = u;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", o + n), i.src = t), e[t] = [r];
            var c = (r, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = e[t];
                if (delete e[t], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), r) return r(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          610: [300, 407, 756, 879]
        }, s = {
          300: ["default", "./operations/fragments/video2-fields.graphql", 24],
          407: ["default", "./index", 24],
          756: ["default", "./index", 969],
          879: ["default", "./index", 136]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var a = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                o = (e, r, o, i, s, d) => {
                  try {
                    var f = e(r, o);
                    if (!f || !f.then) return s(f, i, d);
                    var l = f.then((e => s(e, i)), a);
                    if (!d) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    a(e)
                  }
                },
                i = (e, t, a) => o(t.get, n[1], r, 0, d, a),
                d = t => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, n[2], 0, 0, ((e, t, r) => e ? o(l.I, n[0], 0, e, i, r) : a()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, n) => {
            n || (n = []);
            var a = t[r];
            if (a || (a = t[r] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                i = "@rockstargames/sites-rockstar-tv",
                s = (e, t, r, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[t];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[t] = {
                    get: r,
                    from: i,
                    eager: !!n
                  })
                },
                d = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var a = l(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(l.S[r], n);
                    if (a.then) return f.push(a.then(o, t));
                    var i = o(a);
                    if (i && i.then) return f.push(i.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (s("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(49), l.e(403)]).then((() => () => l(49))))), s("react-router-dom", "6.17.0", (() => Promise.all([l.e(261), l.e(776), l.e(403)]).then((() => () => l(776))))), s("react", "18.2.0", (() => l.e(380).then((() => () => l(380))))), d(24), d(136), d(969)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && (!e || !/^http(s?):/.test(e));) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var a = r[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, d = !0;; s++, i++) {
                  var f, l, u = s < r.length ? (typeof r[s])[0] : "";
                  if (i >= n.length || "o" == (l = (typeof(f = n[i]))[0])) return !d || ("u" == u ? s > a && !o : "" == u != o);
                  if ("u" == l) {
                    if (!d || "u" != u) return !1
                  } else if (d)
                    if (u == l)
                      if (s <= a) {
                        if (f != r[s]) return !1
                      } else {
                        if (o ? f > r[s] : f < r[s]) return !1;
                        f != r[s] && (d = !1)
                      }
                  else if ("s" != u && "n" != u) {
                    if (o || s <= a) return !1;
                    d = !1, s--
                  } else {
                    if (s <= a || l < u != o) return !1;
                    d = !1
                  } else "s" != u && "n" != u && (d = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < r.length; i++) {
                var h = r[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, n) : !p())
              }
              return !!p()
            },
            r = (r, n, a) => {
              var o = r[n];
              return (n = Object.keys(o).reduce(((r, n) => !t(a, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var a = t[n],
                    o = (typeof a)[0];
                  if (n >= r.length) return "u" == o;
                  var i = r[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(r, n) ? r : n), 0)) && o[n]
            },
            n = (e => function(t, r, n, a) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, n, a)) : e(t, l.S[t], r, n, a)
            })(((e, t, n, a, o) => {
              var i = t && l.o(t, n) && r(t, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              784: () => n("default", "react", [1, 18, 2, 0], (() => l.e(380).then((() => () => l(380))))),
              410: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(776)]).then((() => () => l(776))))),
              779: () => n("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([l.e(261), l.e(49)]).then((() => () => l(49)))))
            },
            i = {
              403: [784],
              610: [410, 779]
            },
            s = {};
          l.f.consumes = (e, t) => {
            l.o(i, e) && i[e].forEach((e => {
              if (l.o(a, e)) return t.push(a[e]);
              if (!s[e]) {
                var r = t => {
                  a[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                s[e] = !0;
                var n = t => {
                  delete a[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? t.push(a[e] = i.then(r).catch(n)) : r(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              483: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                610: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = l.miniCssF(e),
                  a = l.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                      if ("stylesheet" === i.rel && (a === e || a === t)) return i
                    }
                    var o = document.getElementsByTagName("style");
                    for (n = 0; n < o.length; n++) {
                      var i;
                      if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                    }
                  })(n, a)) return t();
                ((e, t, r, n, a) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) n();
                    else {
                      var i = r && ("load" === r.type ? "missing" : r.type),
                        s = r && r.target && r.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                      d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = s, o.parentNode && o.parentNode.removeChild(o), a(d)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, a, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            483: 0
          };
          l.f.j = (t, r) => {
            var n = l.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (403 != t) {
              var a = new Promise(((r, a) => n = e[t] = [r, a]));
              r.push(n[2] = a);
              var o = l.p + l.u(t),
                i = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + t, t)
            } else e[t] = 0
          };
          var t = (t, r) => {
              var n, a, o = r[0],
                i = r[1],
                s = r[2],
                d = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (n in i) l.o(i, n) && (l.m[n] = i[n]);
                s && s(l)
              }
              for (t && t(r); d < o.length; d++) a = o[d], l.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(160), l(527)
      })())
    }
  }
}));