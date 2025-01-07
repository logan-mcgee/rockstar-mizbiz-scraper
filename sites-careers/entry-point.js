! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "38aa00eb-30c4-4caf-99b1-614ed8579b2c", e._sentryDebugIdIdentifier = "sentry-dbid-38aa00eb-30c4-4caf-99b1-614ed8579b2c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    n = {},
    o = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
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
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, i, c, d = {
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
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var s = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + s
              };
              Number.isInteger
            },
            9872: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(837).then((() => () => r(8837))),
                  "./index": () => Promise.all([r.e(403), r.e(871), r.e(942)]).then((() => () => r(8179)))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            },
            1024: e => {
              "use strict";
              e.exports = r
            },
            9787: e => {
              "use strict";
              e.exports = a
            },
            8023: e => {
              "use strict";
              e.exports = n
            },
            2969: e => {
              "use strict";
              e.exports = o
            }
          },
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return d[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
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
          12: "3c0df9de65e884d509480bc0c884d4a1",
          66: "1231b6d3d51ecb4a6097673667166582",
          143: "2cd80383dd1044642752e7775a711097",
          353: "6572c3ddca61da7b666fa88ed0cf5a60",
          380: "2051f649230cff4a3bc134f48b3a780c",
          398: "c133bd98222190e0bb90a540a9345bac",
          403: "75cfda1e3f9e38bcce793abbb9abcc20",
          429: "10bffc8be33a37705f617d3e8c205fcd",
          481: "71eff9108058a9e98e7c43b87391a47c",
          493: "c7158e228174d6ed4d3a8f12e50767a2",
          516: "0c848aec4f9a9d7c453768e178d93ac2",
          524: "9b40b3c9e757b63c2be2a18f177ae502",
          533: "1648c7871a9d712c48c88e00b7049020",
          705: "fa6f54a0d2c9bf92961e091c06ddcbd9",
          734: "dc540d62c74ac2badb41b6b3f4b40045",
          837: "3d0f5c2cd99bca156964424c61784f7e",
          871: "861639d09f855f1014e14a9c986cbd9d",
          921: "28612a2da256db6c731cffeff7badebe",
          942: "762adff3b64db5d829377e917db72dd3",
          977: "d907f9f742bfb2c7ed40eba7a7cf51d8"
        } [e] + ".js", l.miniCssF = e => "css/" + {
          12: "dacf1d2f996aeea8c0654abbee059695",
          871: "b9d906c0bcdfd4c5ebbc3d845927545d"
        } [e] + ".css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-careers:", l.l = (t, r, a, n) => {
          if (e[t]) e[t].push(r);
          else {
            var o, i;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                var f = c[d];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == s + a) {
                  o = f;
                  break
                }
              }
            o || (i = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, l.nc && o.setAttribute("nonce", l.nc), o.setAttribute("data-webpack", s + a), o.src = t), e[t] = [r];
            var u = (r, a) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[t];
                if (delete e[t], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: o
              }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), i && document.head.appendChild(o)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          12: [1716, 2158, 2757, 5662],
          871: [396, 2756, 4566, 8407]
        }, c = {
          396: ["default", "./hooks", 2969],
          1716: ["default", "./graph/policies", 8023],
          2158: ["default", "./providers", 2969],
          2756: ["default", "./index", 2969],
          2757: ["default", "./providers", 8023],
          4566: ["default", "./messages", 9787],
          5662: ["default", "./gtm", 2969],
          8407: ["default", "./index", 1024]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var n = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), l.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                o = (e, r, o, s, i, c) => {
                  try {
                    var d = e(r, o);
                    if (!d || !d.then) return i(d, s, c);
                    var f = d.then((e => i(e, s)), n);
                    if (!c) return f;
                    t.push(a.p = f)
                  } catch (e) {
                    n(e)
                  }
                },
                s = (e, t, n) => o(t.get, a[1], r, 0, i, n),
                i = t => {
                  a.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              o(l, a[2], 0, 0, ((e, t, r) => e ? o(l.I, a[0], 0, e, s, r) : n()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var o = l.S[r],
                s = "@rockstargames/sites-careers",
                i = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    i = n[t];
                  (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (n[t] = {
                    get: r,
                    from: s,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var n = l(e);
                    if (!n) return;
                    var o = e => e && e.init && e.init(l.S[r], a);
                    if (n.then) return d.push(n.then(o, t));
                    var s = o(n);
                    if (s && s.then) return d.push(s.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                d = [];
              return "default" === r && (i("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([l.e(66), l.e(403), l.e(143)]).then((() => () => l(4143))))), i("lodash", "4.17.21", (() => l.e(429).then((() => () => l(9429))))), i("prop-types", "15.8.1", (() => l.e(977).then((() => () => l(7977))))), i("react-dom", "18.2.0", (() => Promise.all([l.e(533), l.e(403)]).then((() => () => l(7533))))), i("react-focus-lock", "2.9.6", (() => Promise.all([l.e(481), l.e(403), l.e(516)]).then((() => () => l(3481))))), i("react-google-recaptcha-v3", "1.10.1", (() => Promise.all([l.e(403), l.e(734)]).then((() => () => l(8734))))), i("react-router-dom", "6.17.0", (() => Promise.all([l.e(398), l.e(403)]).then((() => () => l(3398))))), i("react-select", "5.8.0", (() => Promise.all([l.e(921), l.e(403), l.e(493)]).then((() => () => l(2921))))), i("react", "18.2.0", (() => l.e(380).then((() => () => l(3380))))), c(1024), c(9787), c(2969), c(8023)), d.length ? e[r] = Promise.all(d).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
                var n = r[0],
                  o = n < 0;
                o && (n = -n - 1);
                for (var s = 0, i = 1, c = !0;; i++, s++) {
                  var d, f, l = i < r.length ? (typeof r[i])[0] : "";
                  if (s >= a.length || "o" == (f = (typeof(d = a[s]))[0])) return !c || ("u" == l ? i > n && !o : "" == l != o);
                  if ("u" == f) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == f)
                      if (i <= n) {
                        if (d != r[i]) return !1
                      } else {
                        if (o ? d > r[i] : d < r[i]) return !1;
                        d != r[i] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (o || i <= n) return !1;
                    c = !1, i--
                  } else {
                    if (i <= n || f < l != o) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, i--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < r.length; s++) {
                var h = r[s];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
            },
            r = (r, a, n) => {
              var o = r[a];
              return (a = Object.keys(o).reduce(((r, a) => !t(n, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var n = t[a],
                    o = (typeof n)[0];
                  if (a >= r.length) return "u" == o;
                  var s = r[a],
                    i = (typeof s)[0];
                  if (o != i) return "o" == o && "n" == i || "s" == i || "u" == o;
                  if ("o" != o && "u" != o && n != s) return n < s;
                  a++
                }
              })(r, a) ? r : a), 0)) && o[a]
            },
            a = (e => function(t, r, a, n) {
              var o = l.I(t);
              return o && o.then ? o.then(e.bind(e, t, l.S[t], r, a, n)) : e(t, l.S[t], r, a, n)
            })(((e, t, a, n, o) => {
              var s = t && l.o(t, a) && r(t, a, n);
              return s ? (e => (e.loaded = 1, e.get()))(s) : o()
            })),
            n = {},
            o = {
              1403: () => a("default", "react", [1, 18, 2, 0], (() => l.e(380).then((() => () => l(3380))))),
              343: () => a("default", "react-select", [1, 5, 8, 0], (() => Promise.all([l.e(921), l.e(493)]).then((() => () => l(2921))))),
              1524: () => a("default", "react-google-recaptcha-v3", [1, 1, 10, 0], (() => l.e(353).then((() => () => l(8734))))),
              4252: () => a("default", "lodash", [1, 4, 17, 21], (() => l.e(429).then((() => () => l(9429))))),
              6717: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([l.e(66), l.e(524)]).then((() => () => l(4143))))),
              6864: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([l.e(481), l.e(516)]).then((() => () => l(3481))))),
              9779: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => l.e(398).then((() => () => l(3398))))),
              9516: () => a("default", "prop-types", [1, 15, 8, 1], (() => l.e(977).then((() => () => l(7977))))),
              9493: () => a("default", "react-dom", [1, 18, 2, 0], (() => l.e(533).then((() => () => l(7533)))))
            },
            s = {
              403: [1403],
              493: [9493],
              516: [9516],
              871: [343, 1524, 4252, 6717, 6864, 9779]
            },
            i = {};
          l.f.consumes = (e, t) => {
            l.o(s, e) && s[e].forEach((e => {
              if (l.o(n, e)) return t.push(n[e]);
              if (!i[e]) {
                var r = t => {
                  n[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var a = t => {
                  delete n[e], l.m[e] = r => {
                    throw delete l.c[e], t
                  }
                };
                try {
                  var s = o[e]();
                  s.then ? t.push(n[e] = s.then(r).catch(a)) : r(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              832: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                12: 1,
                871: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = l.miniCssF(e),
                  n = l.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (s = r[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (n === e || n === t)) return s
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var s;
                      if ((n = (s = o[a]).getAttribute("data-href")) === e || n === t) return s
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var s = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = s, c.request = i, o.parentNode && o.parentNode.removeChild(o), n(c)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            832: 0
          };
          l.f.j = (t, r) => {
            var a = l.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(403|493|516)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise(((r, n) => a = e[t] = [r, n]));
              r.push(a[2] = n);
              var o = l.p + l.u(t),
                s = new Error;
              l.l(o, (r => {
                if (l.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  s.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", s.name = "ChunkLoadError", s.type = n, s.request = o, a[1](s)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, o = r[0],
                s = r[1],
                i = r[2],
                c = 0;
              if (o.some((t => 0 !== e[t]))) {
                for (a in s) l.o(s, a) && (l.m[a] = s[a]);
                i && i(l)
              }
              for (t && t(r); c < o.length; c++) n = o[c], l.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(2160), l(9872)
      })())
    }
  }
}));