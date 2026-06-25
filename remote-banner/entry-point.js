System.register([], function(t, n) {
  return {
    execute: function() {
      t(function() {
        var t, r, e, i, o, u, l, f, a, c, s, m, d, v, p, y, b, h, j, w, k, g = {
            2741: function(t, n, r) {
              (0, r(3173).w)(1)
            },
            3173: function(t, n, r) {
              const e = r(9921).y;
              n.w = function(t) {
                if (t || (t = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = e(r.y.meta.url, t)
              }
            },
            9158: function(t, n, r) {
              r(2741)
            },
            9921: function(t, n, r) {
              function e(t, n) {
                var r = document.createElement("a");
                r.href = t;
                for (var e = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, i = 0, o = e.length; i !== n && o >= 0;) {
                  "/" === e[--o] && i++
                }
                if (i !== n) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + n + ") is greater than the number of directories (" + i + ") in the URL path " + t);
                var u = e.slice(0, o + 1);
                return r.protocol + "//" + r.host + u
              }
              n.y = e;
              var i = Number.isInteger || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
              }
            },
            4666: function(t, n, r) {
              "use strict";
              var e = {
                  "./main": function() {
                    return Promise.all([r.e(9040), r.e(4914), r.e(3537)]).then(function() {
                      return function() {
                        return r(4094)
                      }
                    })
                  }
                },
                i = function(t, n) {
                  return r.R = n, n = r.o(e, t) ? e[t]() : Promise.resolve().then(function() {
                    throw new Error('Module "' + t + '" does not exist in container.')
                  }), r.R = void 0, n
                },
                o = function(t, n) {
                  if (r.S) {
                    var e = "default",
                      i = r.S[e];
                    if (i && i !== t) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[e] = t, r.I(e, n)
                  }
                };
              r.d(n, {
                get: function() {
                  return i
                },
                init: function() {
                  return o
                }
              })
            }
          },
          E = {};

        function S(t) {
          var n = E[t];
          if (void 0 !== n) return n.exports;
          var r = E[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return g[t].call(r.exports, r, r.exports, S), r.loaded = !0, r.exports
        }
        return S.m = g, S.c = E, S.y = n, S.n = function(t) {
            var n = t && t.__esModule ? function() {
              return t.default
            } : function() {
              return t
            };
            return S.d(n, {
              a: n
            }), n
          }, r = Object.getPrototypeOf ? function(t) {
            return Object.getPrototypeOf(t)
          } : function(t) {
            return t.__proto__
          }, S.t = function(n, e) {
            if (1 & e && (n = this(n)), 8 & e) return n;
            if ("object" == typeof n && n) {
              if (4 & e && n.__esModule) return n;
              if (16 & e && "function" == typeof n.then) return n
            }
            var i = Object.create(null);
            S.r(i);
            var o = {};
            t = t || [null, r({}), r([]), r(r)];
            for (var u = 2 & e && n;
              ("object" == typeof u || "function" == typeof u) && !~t.indexOf(u); u = r(u)) Object.getOwnPropertyNames(u).forEach(function(t) {
              o[t] = function() {
                return n[t]
              }
            });
            return o.default = function() {
              return n
            }, S.d(i, o), i
          }, S.d = function(t, n) {
            for (var r in n) S.o(n, r) && !S.o(t, r) && Object.defineProperty(t, r, {
              enumerable: !0,
              get: n[r]
            })
          }, S.f = {}, S.e = function(t) {
            return Promise.all(Object.keys(S.f).reduce(function(n, r) {
              return S.f[r](t, n), n
            }, []))
          }, S.u = function(t) {
            return ({
              131: "intl-pluralrules-fr",
              278: "intl-relativetimeformat-es",
              299: "intl-numberformat-de",
              314: "intl-pluralrules-polyfill",
              424: "locale-it-IT-json",
              662: "intl-datetimeformat-pt",
              824: "intl-numberformat-ko",
              907: "intl-numberformat-polyfill",
              1054: "intl-datetimeformat-pl",
              1242: "intl-relativetimeformat-pl",
              1312: "locale-de-DE-json",
              1822: "intl-pluralrules-en",
              1842: "locale-pl-PL-json",
              1868: "intl-numberformat-zh",
              2070: "locale-fr-FR-json",
              2120: "locale-ru-RU-json",
              2156: "intl-listformat-ja",
              2171: "intl-pluralrules-pl",
              2221: "intl-pluralrules-ko",
              2243: "intl-relativetimeformat-en",
              2347: "intl-pluralrules-es",
              2365: "intl-relativetimeformat-it",
              2398: "intl-numberformat-pl",
              2466: "intl-numberformat-fr",
              2642: "intl-displaynames-pl",
              2678: "intl-displaynames-fr",
              2864: "intl-pluralrules-ru",
              3034: "intl-displaynames-pt",
              3197: "intl-pluralrules-zh",
              3343: "intl-displaynames-polyfill",
              3370: "intl-datetimeformat-es",
              3475: "intl-listformat-pt",
              3486: "intl-listformat-en",
              3515: "locale-ja-JP-json",
              3697: "intl-numberformat-ru",
              3885: "intl-listformat-ko",
              3941: "intl-displaynames-ru",
              3963: "locale-en-US-json",
              3998: "locale-pt-BR-json",
              4011: "intl-listformat-es",
              4528: "intl-listformat-ru",
              4621: "intl-numberformat-ja",
              4700: "intl-datetimeformat-zh",
              4710: "intl-listformat-de",
              4731: "intl-datetimeformat-polyfill",
              4799: "intl-datetimeformat-en",
              4851: "intl-listformat-fr",
              4861: "intl-listformat-zh",
              4913: "intl-datetimeformat-it",
              5018: "intl-getcanonicallocales-polyfill",
              5233: "intl-datetimeformat-ru",
              5259: "intl-datetimeformat-de",
              5530: "intl-numberformat-es",
              5639: "intl-displaynames-de",
              5663: "intl-numberformat-en",
              5742: "intl-displaynames-es",
              5830: "intl-should-polyfill",
              5832: "intl-displaynames-zh",
              6267: "intl-displaynames-en",
              6280: "intl-datetimeformat-add-all-tz",
              6285: "intl-datetimeformat-ja",
              6361: "intl-displaynames-ja",
              6664: "intl-datetimeformat-ko",
              6879: "intl-relativetimeformat-de",
              6891: "intl-listformat-pl",
              6985: "locale-zh-CN-json",
              6997: "intl-displaynames-it",
              7010: "intl-datetimeformat-fr",
              7073: "intl-numberformat-it",
              7229: "locale-zh-TW-json",
              7294: "locale-ko-KR-json",
              7436: "intl-pluralrules-ja",
              7452: "intl-displaynames-ko",
              7453: "intl-relativetimeformat-ru",
              7970: "intl-relativetimeformat-pt",
              8272: "intl-pluralrules-it",
              8391: "intl-relativetimeformat-polyfill",
              8755: "intl-pluralrules-pt",
              8880: "intl-relativetimeformat-zh",
              8970: "intl-listformat-polyfill",
              9022: "intl-relativetimeformat-fr",
              9028: "intl-relativetimeformat-ko",
              9126: "intl-numberformat-pt",
              9377: "intl-relativetimeformat-ja",
              9467: "locale-es-MX-json",
              9615: "intl-locale-polyfill",
              9814: "locale-es-ES-json",
              9936: "intl-listformat-it",
              9990: "intl-pluralrules-de"
            } [t] || t) + ".js"
          }, S.miniCssF = function(t) {
            return "css/1833c9fe034dbf1e0dab.css"
          }, S.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || new Function("return this")()
            } catch (t) {
              if ("object" == typeof window) return window
            }
          }(), S.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
          }, e = {}, i = "remote-banner:", S.l = function(t, n, r, o) {
            if (e[t]) e[t].push(n);
            else {
              var u, l;
              if (void 0 !== r)
                for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
                  var c = f[a];
                  if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == i + r) {
                    u = c;
                    break
                  }
                }
              u || (l = !0, (u = document.createElement("script")).charset = "utf-8", S.nc && u.setAttribute("nonce", S.nc), u.setAttribute("data-webpack", i + r), u.src = t), e[t] = [n];
              var s = function(n, r) {
                  u.onerror = u.onload = null, clearTimeout(m);
                  var i = e[t];
                  if (delete e[t], u.parentNode && u.parentNode.removeChild(u), i && i.forEach(function(t) {
                      return t(r)
                    }), n) return n(r)
                },
                m = setTimeout(s.bind(null, void 0, {
                  type: "timeout",
                  target: u
                }), 12e4);
              u.onerror = s.bind(null, u.onerror), u.onload = s.bind(null, u.onload), l && document.head.appendChild(u)
            }
          }, S.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            })
          }, S.nmd = function(t) {
            return t.paths = [], t.children || (t.children = []), t
          },
          function() {
            S.S = {};
            var t = {},
              n = {};
            S.I = function(r, e) {
              e || (e = []);
              var i = n[r];
              if (i || (i = n[r] = {}), !(e.indexOf(i) >= 0)) {
                if (e.push(i), t[r]) return t[r];
                S.o(S.S, r) || (S.S[r] = {});
                var o = S.S[r],
                  u = "remote-banner",
                  l = function(t, n, r, e) {
                    var i = o[t] = o[t] || {},
                      l = i[n];
                    (!l || !l.loaded && (!e != !l.eager ? e : u > l.from)) && (i[n] = {
                      get: r,
                      from: u,
                      eager: !!e
                    })
                  },
                  f = [];
                if ("default" === r) l("react-dom", "18.3.1", function() {
                  return Promise.all([S.e(961), S.e(4914)]).then(function() {
                    return function() {
                      return S(961)
                    }
                  })
                }), l("react", "18.3.1", function() {
                  return S.e(6540).then(function() {
                    return function() {
                      return S(6540)
                    }
                  })
                });
                return f.length ? t[r] = Promise.all(f).then(function() {
                  return t[r] = 1
                }) : t[r] = 1
              }
            }
          }(), S.p = "/", o = function(t) {
            var n = function(t) {
                return t.split(".").map(function(t) {
                  return +t == t ? +t : t
                })
              },
              r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),
              e = r[1] ? n(r[1]) : [];
            return r[2] && (e.length++, e.push.apply(e, n(r[2]))), r[3] && (e.push([]), e.push.apply(e, n(r[3]))), e
          }, u = function(t, n) {
            t = o(t), n = o(n);
            for (var r = 0;;) {
              if (r >= t.length) return r < n.length && "u" != (typeof n[r])[0];
              var e = t[r],
                i = (typeof e)[0];
              if (r >= n.length) return "u" == i;
              var u = n[r],
                l = (typeof u)[0];
              if (i != l) return "o" == i && "n" == l || "s" == l || "u" == i;
              if ("o" != i && "u" != i && e != u) return e < u;
              r++
            }
          }, l = function(t) {
            var n = t[0],
              r = "";
            if (1 === t.length) return "*";
            if (n + .5) {
              r += 0 == n ? ">=" : -1 == n ? "<" : 1 == n ? "^" : 2 == n ? "~" : n > 0 ? "=" : "!=";
              for (var e = 1, i = 1; i < t.length; i++) e--, r += "u" == (typeof(u = t[i]))[0] ? "-" : (e > 0 ? "." : "") + (e = 2, u);
              return r
            }
            var o = [];
            for (i = 1; i < t.length; i++) {
              var u = t[i];
              o.push(0 === u ? "not(" + f() + ")" : 1 === u ? "(" + f() + " || " + f() + ")" : 2 === u ? o.pop() + " " + o.pop() : l(u))
            }
            return f();

            function f() {
              return o.pop().replace(/^\((.+)\)$/, "$1")
            }
          }, f = function(t, n) {
            if (0 in t) {
              n = o(n);
              var r = t[0],
                e = r < 0;
              e && (r = -r - 1);
              for (var i = 0, u = 1, l = !0;; u++, i++) {
                var a, c, s = u < t.length ? (typeof t[u])[0] : "";
                if (i >= n.length || "o" == (c = (typeof(a = n[i]))[0])) return !l || ("u" == s ? u > r && !e : "" == s != e);
                if ("u" == c) {
                  if (!l || "u" != s) return !1
                } else if (l)
                  if (s == c)
                    if (u <= r) {
                      if (a != t[u]) return !1
                    } else {
                      if (e ? a > t[u] : a < t[u]) return !1;
                      a != t[u] && (l = !1)
                    }
                else if ("s" != s && "n" != s) {
                  if (e || u <= r) return !1;
                  l = !1, u--
                } else {
                  if (u <= r || c < s != e) return !1;
                  l = !1
                } else "s" != s && "n" != s && (l = !1, u--)
              }
            }
            var m = [],
              d = m.pop.bind(m);
            for (i = 1; i < t.length; i++) {
              var v = t[i];
              m.push(1 == v ? d() | d() : 2 == v ? d() & d() : v ? f(v, n) : !d())
            }
            return !!d()
          }, a = function(t, n) {
            return t && S.o(t, n)
          }, c = function(t) {
            return t.loaded = 1, t.get()
          }, s = function(t) {
            return Object.keys(t).reduce(function(n, r) {
              return t[r].eager && (n[r] = t[r]), n
            }, {})
          }, m = function(t, n, r) {
            var e = r ? s(t[n]) : t[n];
            return Object.keys(e).reduce(function(t, n) {
              return !t || !e[t].loaded && u(t, n) ? n : t
            }, 0)
          }, d = function(t, n, r, e) {
            return "Unsatisfied version " + r + " from " + (r && t[n][r].from) + " of shared singleton module " + n + " (required " + l(e) + ")"
          }, v = function(t) {
            throw new Error(t)
          }, p = function(t) {
            "undefined" != typeof console && console.warn && console.warn(t)
          }, y = function(t, n, r) {
            return r ? r() : function(t, n) {
              return v("Shared module " + n + " doesn't exist in shared scope " + t)
            }(t, n)
          }, b = function(t) {
            return function(n, r, e, i, o) {
              var u = S.I(n);
              return u && u.then && !e ? u.then(t.bind(t, n, S.S[n], r, !1, i, o)) : t(n, S.S[n], r, e, i, o)
            }
          }(function(t, n, r, e, i, o) {
            if (!a(n, r)) return y(t, r, o);
            var u = m(n, r, e);
            return f(i, u) || p(d(n, r, u, i)), c(n[r][u])
          }), h = {}, j = {
            4914: function() {
              return b("default", "react", !1, [1, 18, 2, 0], function() {
                return S.e(6540).then(function() {
                  return function() {
                    return S(6540)
                  }
                })
              })
            },
            6672: function() {
              return b("default", "react-dom", !1, [1, 18, 2, 0], function() {
                return Promise.all([S.e(961), S.e(4914)]).then(function() {
                  return function() {
                    return S(961)
                  }
                })
              })
            }
          }, w = {
            3537: [6672],
            4914: [4914]
          }, k = {}, S.f.consumes = function(t, n) {
            S.o(w, t) && w[t].forEach(function(t) {
              if (S.o(h, t)) return n.push(h[t]);
              if (!k[t]) {
                var r = function(n) {
                  h[t] = 0, S.m[t] = function(r) {
                    delete S.c[t], r.exports = n()
                  }
                };
                k[t] = !0;
                var e = function(n) {
                  delete h[t], S.m[t] = function(r) {
                    throw delete S.c[t], n
                  }
                };
                try {
                  var i = j[t]();
                  i.then ? n.push(h[t] = i.then(r).catch(e)) : r(i)
                } catch (t) {
                  e(t)
                }
              }
            })
          },
          function() {
            if ("undefined" != typeof document) {
              var t = function(t) {
                  return new Promise(function(n, r) {
                    var e = S.miniCssF(t),
                      i = S.p + e;
                    if (function(t, n) {
                        for (var r = document.getElementsByTagName("link"), e = 0; e < r.length; e++) {
                          var i = (u = r[e]).getAttribute("data-href") || u.getAttribute("href");
                          if ("stylesheet" === u.rel && (i === t || i === n)) return u
                        }
                        var o = document.getElementsByTagName("style");
                        for (e = 0; e < o.length; e++) {
                          var u;
                          if ((i = (u = o[e]).getAttribute("data-href")) === t || i === n) return u
                        }
                      }(e, i)) return n();
                    ! function(t, n, r, e, i) {
                      var o = document.createElement("link");
                      o.rel = "stylesheet", o.type = "text/css", S.nc && (o.nonce = S.nc), o.onerror = o.onload = function(r) {
                        if (o.onerror = o.onload = null, "load" === r.type) e();
                        else {
                          var u = r && r.type,
                            l = r && r.target && r.target.href || n,
                            f = new Error("Loading CSS chunk " + t + " failed.\n(" + u + ": " + l + ")");
                          f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = u, f.request = l, o.parentNode && o.parentNode.removeChild(o), i(f)
                        }
                      }, o.href = n, r ? r.parentNode.insertBefore(o, r.nextSibling) : document.head.appendChild(o)
                    }(t, i, null, n, r)
                  })
                },
                n = {
                  337: 0
                };
              S.f.miniCss = function(r, e) {
                n[r] ? e.push(n[r]) : 0 !== n[r] && {
                  9040: 1
                } [r] && e.push(n[r] = t(r).then(function() {
                  n[r] = 0
                }, function(t) {
                  throw delete n[r], t
                }))
              }
            }
          }(),
          function() {
            var t = {
              337: 0
            };
            S.f.j = function(n, r) {
              var e = S.o(t, n) ? t[n] : void 0;
              if (0 !== e)
                if (e) r.push(e[2]);
                else if (4914 != n) {
                var i = new Promise(function(r, i) {
                  e = t[n] = [r, i]
                });
                r.push(e[2] = i);
                var o = S.p + S.u(n),
                  u = new Error;
                S.l(o, function(r) {
                  if (S.o(t, n) && (0 !== (e = t[n]) && (t[n] = void 0), e)) {
                    var i = r && ("load" === r.type ? "missing" : r.type),
                      o = r && r.target && r.target.src;
                    u.message = "Loading chunk " + n + " failed.\n(" + i + ": " + o + ")", u.name = "ChunkLoadError", u.type = i, u.request = o, e[1](u)
                  }
                }, "chunk-" + n, n)
              } else t[n] = 0
            };
            var n = function(n, r) {
                var e, i, o = r[0],
                  u = r[1],
                  l = r[2],
                  f = 0;
                if (o.some(function(n) {
                    return 0 !== t[n]
                  })) {
                  for (e in u) S.o(u, e) && (S.m[e] = u[e]);
                  if (l) l(S)
                }
                for (n && n(r); f < o.length; f++) i = o[f], S.o(t, i) && t[i] && t[i][0](), t[i] = 0
              },
              r = self.webpackChunkremote_banner = self.webpackChunkremote_banner || [];
            r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
          }(), S(9158), S(4666)
      }())
    }
  }
});