! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "27e9bc26-74f1-4eaf-a3f0-edbc7327a290", e._sentryDebugIdIdentifier = "sentry-dbid-27e9bc26-74f1-4eaf-a3f0-edbc7327a290")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, System.register(["@rockstargames/graph-client", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    n = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, o, i, s = {
            364: (e, r, t) => {
              (0, t(284).G)(1)
            },
            284: (e, r, t) => {
              const n = t(984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = n(t.y.meta.url, e)
              }
            },
            824: (e, r, t) => {
              t(364)
            },
            984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var n = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, a = 0, o = n.length; a !== r && o >= 0;) "/" === n[--o] && a++;
                if (a !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + a + ") in the URL path " + e);
                var i = n.slice(0, o + 1);
                return t.protocol + "//" + t.host + i
              };
              Number.isInteger
            },
            416: (e, r, t) => {
              "use strict";
              var n = {
                  "./graph/policies": () => Promise.all([t.e(792), t.e(964)]).then((() => () => t(964))),
                  "./index": () => Promise.all([t.e(792), t.e(80)]).then((() => () => t(848))),
                  "./providers": () => Promise.all([t.e(792), t.e(80)]).then((() => () => t(992)))
                },
                a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                o = (e, r) => {
                  if (t.S) {
                    var n = "default",
                      a = t.S[n];
                    if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[n] = e, t.I(n, r)
                  }
                };
              t.d(r, {
                get: () => a,
                init: () => o
              })
            },
            864: e => {
              "use strict";
              e.exports = t
            },
            344: e => {
              "use strict";
              e.exports = n
            }
          },
          u = {};

        function d(e) {
          var r = u[e];
          if (void 0 !== r) return r.exports;
          var t = u[e] = {
            exports: {}
          };
          return s[e](t, t.exports, d), t.exports
        }
        return d.m = s, d.c = u, d.y = r, d.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return d.d(r, {
            a: r
          }), r
        }, d.d = (e, r) => {
          for (var t in r) d.o(r, t) && !d.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((r, t) => (d.f[t](e, r), r)), [])), d.u = e => "js/" + {
          80: "d7cd750542bdde8215c199d8094ea07d",
          100: "4a5610a77eb74a8b77b45e240bfe3cda",
          792: "ca9af4a151f76a0731b69b6b4c0bd1dc",
          964: "7ef3af220c2ce86a92935a3622bf0685",
          996: "f4f92fdba77cf2faecd35c3b412c46b2"
        } [e] + ".js", d.miniCssF = e => {}, d.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), d.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, a = "@rockstargames/modules-core-sc-user:", d.l = (r, t, n, o) => {
          if (e[r]) e[r].push(t);
          else {
            var i, s;
            if (void 0 !== n)
              for (var u = document.getElementsByTagName("script"), f = 0; f < u.length; f++) {
                var l = u[f];
                if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == a + n) {
                  i = l;
                  break
                }
              }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, d.nc && i.setAttribute("nonce", d.nc), i.setAttribute("data-webpack", a + n), i.src = r), e[r] = [t];
            var c = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(p);
                var a = e[r];
                if (delete e[r], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((e => e(n))), t) return t(n)
              },
              p = setTimeout(c.bind(null, void 0, {
                type: "timeout",
                target: i
              }), 12e4);
            i.onerror = c.bind(null, i.onerror), i.onload = c.bind(null, i.onload), s && document.head.appendChild(i)
          }
        }, d.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, o = {
          80: [52, 92],
          792: [792]
        }, i = {
          52: ["default", "./index", 864],
          92: ["default", "./gtm", 344],
          792: ["default", "./index", 344]
        }, d.f.remotes = (e, r) => {
          d.o(o, e) && o[e].forEach((e => {
            var t = d.R;
            t || (t = []);
            var n = i[e];
            if (!(t.indexOf(n) >= 0)) {
              if (t.push(n), n.p) return r.push(n.p);
              var a = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), d.m[e] = () => {
                    throw r
                  }, n.p = 0
                },
                o = (e, t, o, i, s, u) => {
                  try {
                    var d = e(t, o);
                    if (!d || !d.then) return s(d, i, u);
                    var f = d.then((e => s(e, i)), a);
                    if (!u) return f;
                    r.push(n.p = f)
                  } catch (e) {
                    a(e)
                  }
                },
                s = (e, r, a) => o(r.get, n[1], t, 0, u, a),
                u = r => {
                  n.p = 1, d.m[e] = e => {
                    e.exports = r()
                  }
                };
              o(d, n[2], 0, 0, ((e, r, t) => e ? o(d.I, n[0], 0, e, s, t) : a()), 1)
            }
          }))
        }, (() => {
          d.S = {};
          var e = {},
            r = {};
          d.I = (t, n) => {
            n || (n = []);
            var a = r[t];
            if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
              if (n.push(a), e[t]) return e[t];
              d.o(d.S, t) || (d.S[t] = {});
              var o = d.S[t],
                i = "@rockstargames/modules-core-sc-user",
                s = (e, r, t, n) => {
                  var a = o[e] = o[e] || {},
                    s = a[r];
                  (!s || !s.loaded && (!n != !s.eager ? n : i > s.from)) && (a[r] = {
                    get: t,
                    from: i,
                    eager: !!n
                  })
                },
                u = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var a = d(e);
                    if (!a) return;
                    var o = e => e && e.init && e.init(d.S[t], n);
                    if (a.then) return f.push(a.then(o, r));
                    var i = o(a);
                    if (i && i.then) return f.push(i.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                f = [];
              return "default" === t && (s("@rockstar/fingerprint-js", "1.0.0", (() => d.e(996).then((() => () => d(996))))), s("react", "18.2.0", (() => d.e(100).then((() => () => d(100))))), u(344), u(864)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          d.g.importScripts && (e = d.g.location + "");
          var r = d.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), d.p = e
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
                var a = t[0],
                  o = a < 0;
                o && (a = -a - 1);
                for (var i = 0, s = 1, u = !0;; s++, i++) {
                  var d, f, l = s < t.length ? (typeof t[s])[0] : "";
                  if (i >= n.length || "o" == (f = (typeof(d = n[i]))[0])) return !u || ("u" == l ? s > a && !o : "" == l != o);
                  if ("u" == f) {
                    if (!u || "u" != l) return !1
                  } else if (u)
                    if (l == f)
                      if (s <= a) {
                        if (d != t[s]) return !1
                      } else {
                        if (o ? d > t[s] : d < t[s]) return !1;
                        d != t[s] && (u = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || s <= a) return !1;
                    u = !1, s--
                  } else {
                    if (s <= a || f < l != o) return !1;
                    u = !1
                  } else "s" != l && "n" != l && (u = !1, s--)
                }
              }
              var c = [],
                p = c.pop.bind(c);
              for (i = 1; i < t.length; i++) {
                var h = t[i];
                c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
              }
              return !!p()
            },
            t = (t, n, a) => {
              var o = t[n];
              return (n = Object.keys(o).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var n = 0;;) {
                  if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
                  var a = r[n],
                    o = (typeof a)[0];
                  if (n >= t.length) return "u" == o;
                  var i = t[n],
                    s = (typeof i)[0];
                  if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
                  if ("o" != o && "u" != o && a != i) return a < i;
                  n++
                }
              })(t, n) ? t : n), 0)) && o[n]
            },
            n = (e => function(r, t, n, a) {
              var o = d.I(r);
              return o && o.then ? o.then(e.bind(e, r, d.S[r], t, n, a)) : e(r, d.S[r], t, n, a)
            })(((e, r, n, a, o) => {
              var i = r && d.o(r, n) && t(r, n, a);
              return i ? (e => (e.loaded = 1, e.get()))(i) : o()
            })),
            a = {},
            o = {
              468: () => n("default", "@rockstar/fingerprint-js", [1, 1, 0, 0], (() => d.e(996).then((() => () => d(996))))),
              664: () => n("default", "react", [1, 18, 2, 0], (() => d.e(100).then((() => () => d(100)))))
            },
            i = {
              80: [468, 664]
            },
            s = {};
          d.f.consumes = (e, r) => {
            d.o(i, e) && i[e].forEach((e => {
              if (d.o(a, e)) return r.push(a[e]);
              if (!s[e]) {
                var t = r => {
                  a[e] = 0, d.m[e] = t => {
                    delete d.c[e], t.exports = r()
                  }
                };
                s[e] = !0;
                var n = r => {
                  delete a[e], d.m[e] = t => {
                    throw delete d.c[e], r
                  }
                };
                try {
                  var i = o[e]();
                  i.then ? r.push(a[e] = i.then(t).catch(n)) : t(i)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          var e = {
            126: 0
          };
          d.f.j = (r, t) => {
            var n = d.o(e, r) ? e[r] : void 0;
            if (0 !== n)
              if (n) t.push(n[2]);
              else if (792 != r) {
              var a = new Promise(((t, a) => n = e[r] = [t, a]));
              t.push(n[2] = a);
              var o = d.p + d.u(r),
                i = new Error;
              d.l(o, (t => {
                if (d.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  i.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", i.name = "ChunkLoadError", i.type = a, i.request = o, n[1](i)
                }
              }), "chunk-" + r, r)
            } else e[r] = 0
          };
          var r = (r, t) => {
              var n, a, o = t[0],
                i = t[1],
                s = t[2],
                u = 0;
              if (o.some((r => 0 !== e[r]))) {
                for (n in i) d.o(i, n) && (d.m[n] = i[n]);
                s && s(d)
              }
              for (r && r(t); u < o.length; u++) a = o[u], d.o(e, a) && e[a] && e[a][0](), e[a] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), d(824), d(416)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map