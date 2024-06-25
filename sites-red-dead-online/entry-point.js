! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "778e78f7-2807-419f-9ee0-c604bdd69db3", e._sentryDebugIdIdentifier = "sentry-dbid-778e78f7-2807-419f-9ee0-c604bdd69db3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, r) {
  var t = {},
    a = {},
    o = {},
    n = {},
    s = {},
    d = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(r) {
        t[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        a[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        o[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        n[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        s[r] = e[r]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(r) {
        d[r] = e[r]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, i, c, l = {
            54364: (e, r, t) => {
              (0, t(47284).G)(1)
            },
            47284: (e, r, t) => {
              const a = t(87984).Q;
              r.G = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = a(t.y.meta.url, e)
              }
            },
            93824: (e, r, t) => {
              t(54364)
            },
            87984: (e, r, t) => {
              r.Q = function(e, r) {
                var t = document.createElement("a");
                t.href = e;
                for (var a = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, o = 0, n = a.length; o !== r && n >= 0;) "/" === a[--n] && o++;
                if (o !== r) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + r + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var s = a.slice(0, n + 1);
                return t.protocol + "//" + t.host + s
              };
              Number.isInteger
            },
            87736: (e, r, t) => {
              "use strict";
              var a = {
                  "./index": () => Promise.all([t.e(664), t.e(612), t.e(112), t.e(824)]).then((() => () => t(64824)))
                },
                o = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, r),
                n = (e, r) => {
                  if (t.S) {
                    var a = "default",
                      o = t.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[a] = e, t.I(a, r)
                  }
                };
              t.d(r, {
                get: () => o,
                init: () => n
              })
            },
            33864: e => {
              "use strict";
              e.exports = t
            },
            25358: e => {
              "use strict";
              e.exports = a
            },
            81128: e => {
              "use strict";
              e.exports = o
            },
            14472: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = s
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          u = {};

        function p(e) {
          var r = u[e];
          if (void 0 !== r) return r.exports;
          var t = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(t.exports, t, t.exports, p), t.loaded = !0, t.exports
        }
        return p.m = l, p.c = u, p.y = r, p.amdO = {}, p.n = e => {
          var r = e && e.__esModule ? () => e.default : () => e;
          return p.d(r, {
            a: r
          }), r
        }, p.d = (e, r) => {
          for (var t in r) p.o(r, t) && !p.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
          })
        }, p.f = {}, p.e = e => Promise.all(Object.keys(p.f).reduce(((r, t) => (p.f[t](e, r), r)), [])), p.u = e => "js/" + {
          61: "a8fd763b6e67c1fcdaa02a1a167ac77e",
          88: "8b5d26cb4f2ffb5882252a266e15e551",
          100: "de479cc6a594faf77ca213a607267210",
          112: "4cfa1be3fc533fb027e788706d76fc75",
          150: "b7167e43f1e5cf99d502fdaf6a645a3b",
          163: "5f5a26055f3543c6c03941fa226d542a",
          168: "f6acb7381c908b42e56445a852361754",
          240: "d774b3d45a9bff16fc39ef629dea98bf",
          288: "ac2cb3104b4306b0a9ae4c2e3e89c2c0",
          304: "383dcaf5e4ac331870914ebee3b130cb",
          312: "9a0852450da93e04bfd3f1c821367f63",
          408: "1bcbeeac704ef020749549bf7572d1e1",
          544: "3993421e7153d104629297a8b5bf832b",
          572: "77b0699fadde89eabf927e014062d19c",
          612: "26717203ab9fb0e68d37df781b95018c",
          664: "8f7679e65c8d4a010368fbe0f94285d7",
          772: "51b5b92b6f91b8c6bd42785610702a48",
          824: "c48a7b32bef0340051cd28b332f23d70",
          828: "be90a4a05bb4c8b86d050756b69ffe66",
          832: "525d511fe45cb641f7536814a6c9beb8",
          836: "40239866af47fde90a2f5000badbd47b",
          852: "51a673e651dc1c1500cdc418511586e4",
          924: "a4c94560a5c102b38b3cf7f69f19244e",
          968: "fc218a41a5559d436bf2b28d961a2291"
        } [e] + ".js", p.miniCssF = e => "css/" + {
          163: "883088bdc563779838a6137df3754da7",
          544: "883088bdc563779838a6137df3754da7",
          572: "99df8002ac4dfabc31414fcbef9c06c7",
          824: "8855acb3c4eb506efc5f4c18f4dd990b",
          852: "418725461202d067d18f87541f38d0e5"
        } [e] + ".css", p.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), p.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, f = "@rockstargames/sites-red-dead-online:", p.l = (r, t, a, o) => {
          if (e[r]) e[r].push(t);
          else {
            var n, s;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), i = 0; i < d.length; i++) {
                var c = d[i];
                if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == f + a) {
                  n = c;
                  break
                }
              }
            n || (s = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, p.nc && n.setAttribute("nonce", p.nc), n.setAttribute("data-webpack", f + a), n.src = r), e[r] = [t];
            var l = (t, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[r];
                if (delete e[r], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), t) return t(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), s && document.head.appendChild(n)
          }
        }, p.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, p.nmd = e => (e.paths = [], e.children || (e.children = []), e), i = {
          61: [3061],
          112: [1532],
          612: [33052, 45792],
          824: [53264, 84644, 91336],
          836: [42836],
          852: [1740, 28540, 45652, 73784, 95356]
        }, c = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          33052: ["default", "./index", 33864],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          53264: ["default", "./operations/fragments/video2-fields.graphql", 33864],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          84644: ["default", "./index", 14472],
          91336: ["default", "./NewswireArticle", 25358],
          95356: ["default", "./helpers", 88428]
        }, p.f.remotes = (e, r) => {
          p.o(i, e) && i[e].forEach((e => {
            var t = p.R;
            t || (t = []);
            var a = c[e];
            if (!(t.indexOf(a) >= 0)) {
              if (t.push(a), a.p) return r.push(a.p);
              var o = r => {
                  r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), p.m[e] = () => {
                    throw r
                  }, a.p = 0
                },
                n = (e, t, n, s, d, f) => {
                  try {
                    var i = e(t, n);
                    if (!i || !i.then) return d(i, s, f);
                    var c = i.then((e => d(e, s)), o);
                    if (!f) return c;
                    r.push(a.p = c)
                  } catch (e) {
                    o(e)
                  }
                },
                s = (e, r, o) => n(r.get, a[1], t, 0, d, o),
                d = r => {
                  a.p = 1, p.m[e] = e => {
                    e.exports = r()
                  }
                };
              n(p, a[2], 0, 0, ((e, r, t) => e ? n(p.I, a[0], 0, e, s, t) : o()), 1)
            }
          }))
        }, (() => {
          p.S = {};
          var e = {},
            r = {};
          p.I = (t, a) => {
            a || (a = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[t]) return e[t];
              p.o(p.S, t) || (p.S[t] = {});
              var n = p.S[t],
                s = "@rockstargames/sites-red-dead-online",
                d = (e, r, t, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[r];
                  (!d || !d.loaded && (!a != !d.eager ? a : s > d.from)) && (o[r] = {
                    get: t,
                    from: s,
                    eager: !!a
                  })
                },
                f = e => {
                  var r = e => {
                    return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
                    var r
                  };
                  try {
                    var o = p(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(p.S[t], a);
                    if (o.then) return i.push(o.then(n, r));
                    var s = n(o);
                    if (s && s.then) return i.push(s.catch(r))
                  } catch (e) {
                    r(e)
                  }
                },
                i = [];
              return "default" === t && (d("@rockstargames/components", "1.14.0", (() => Promise.all([p.e(968), p.e(572), p.e(664), p.e(836), p.e(612), p.e(852), p.e(112), p.e(240)]).then((() => () => p(65596))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([p.e(408), p.e(664), p.e(61), p.e(924)]).then((() => () => p(8304))))), d("@rockstargames/modules-core-feedback", "1.0.48", (() => Promise.all([p.e(664), p.e(836), p.e(612), p.e(828), p.e(544)]).then((() => () => p(39544))))), d("hammerjs", "2.0.8", (() => p.e(772).then((() => () => p(65772))))), d("react-focus-lock", "2.9.6", (() => Promise.all([p.e(968), p.e(312), p.e(664)]).then((() => () => p(90312))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(168), p.e(150), p.e(664)]).then((() => () => p(56150))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(168), p.e(88), p.e(832), p.e(664)]).then((() => () => p(84832))))), d("react-router-dom", "6.17.0", (() => Promise.all([p.e(168), p.e(88), p.e(288), p.e(664)]).then((() => () => p(40288))))), d("react", "18.2.0", (() => p.e(100).then((() => () => p(99480))))), f(33864), f(9344), f(25358), f(14472), f(81128), f(88428)), i.length ? e[t] = Promise.all(i).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          p.g.importScripts && (e = p.g.location + "");
          var r = p.g.document;
          if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var t = r.getElementsByTagName("script");
            if (t.length)
              for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e
        })(), (() => {
          var e = e => {
              var r = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = t[1] ? r(t[1]) : [];
              return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
            },
            r = (t, a) => {
              if (0 in t) {
                a = e(a);
                var o = t[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var s = 0, d = 1, f = !0;; d++, s++) {
                  var i, c, l = d < t.length ? (typeof t[d])[0] : "";
                  if (s >= a.length || "o" == (c = (typeof(i = a[s]))[0])) return !f || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == c) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == c)
                      if (d <= o) {
                        if (i != t[d]) return !1
                      } else {
                        if (n ? i > t[d] : i < t[d]) return !1;
                        i != t[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    f = !1, d--
                  } else {
                    if (d <= o || c < l != n) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, d--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (s = 1; s < t.length; s++) {
                var h = t[s];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
              }
              return !!p()
            },
            t = (t, a, o) => {
              var n = t[a];
              return (a = Object.keys(n).reduce(((t, a) => !r(o, a) || t && !((r, t) => {
                r = e(r), t = e(t);
                for (var a = 0;;) {
                  if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
                  var o = r[a],
                    n = (typeof o)[0];
                  if (a >= t.length) return "u" == n;
                  var s = t[a],
                    d = (typeof s)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && o != s) return o < s;
                  a++
                }
              })(t, a) ? t : a), 0)) && n[a]
            },
            a = (e => function(r, t, a, o) {
              var n = p.I(r);
              return n && n.then ? n.then(e.bind(e, r, p.S[r], t, a, o)) : e(r, p.S[r], t, a, o)
            })(((e, r, a, o, n) => {
              var s = r && p.o(r, a) && t(r, a, o);
              return s ? (e => (e.loaded = 1, e.get()))(s) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => p.e(100).then((() => () => p(99480))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([p.e(968), p.e(572), p.e(836), p.e(852)]).then((() => () => p(65596))))),
              36960: () => a("default", "react-focus-lock", [1, 2, 9, 6], (() => Promise.all([p.e(968), p.e(312)]).then((() => () => p(90312))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([p.e(408), p.e(61), p.e(304)]).then((() => () => p(8304))))),
              97860: () => a("default", "hammerjs", [1, 2, 0, 8], (() => p.e(772).then((() => () => p(65772))))),
              3872: () => a("default", "@rockstargames/modules-core-feedback", [1, "workspace:*"], (() => Promise.all([p.e(836), p.e(828), p.e(163)]).then((() => () => p(39544))))),
              69844: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(168), p.e(88), p.e(288)]).then((() => () => p(40288))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(168), p.e(88), p.e(832)]).then((() => () => p(84832))))),
              8828: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([p.e(168), p.e(150)]).then((() => () => p(56150)))))
            },
            s = {
              112: [9860, 36960, 41272, 97860],
              664: [51664],
              824: [3872, 69844],
              828: [8828],
              852: [57013]
            },
            d = {};
          p.f.consumes = (e, r) => {
            p.o(s, e) && s[e].forEach((e => {
              if (p.o(o, e)) return r.push(o[e]);
              if (!d[e]) {
                var t = r => {
                  o[e] = 0, p.m[e] = t => {
                    delete p.c[e], t.exports = r()
                  }
                };
                d[e] = !0;
                var a = r => {
                  delete o[e], p.m[e] = t => {
                    throw delete p.c[e], r
                  }
                };
                try {
                  var s = n[e]();
                  s.then ? r.push(o[e] = s.then(t).catch(a)) : t(s)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              352: 0
            };
            p.f.miniCss = (r, t) => {
              e[r] ? t.push(e[r]) : 0 !== e[r] && {
                163: 1,
                544: 1,
                572: 1,
                824: 1,
                852: 1
              } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
                var a = p.miniCssF(e),
                  o = p.p + a;
                if (((e, r) => {
                    for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                      var o = (s = t[a]).getAttribute("data-href") || s.getAttribute("href");
                      if ("stylesheet" === s.rel && (o === e || o === r)) return s
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var s;
                      if ((o = (s = n[a]).getAttribute("data-href")) === e || o === r) return s
                    }
                  })(a, o)) return r();
                ((e, r, t, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = t => {
                    if (n.onerror = n.onload = null, "load" === t.type) a();
                    else {
                      var s = t && ("load" === t.type ? "missing" : t.type),
                        d = t && t.target && t.target.href || r,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = s, f.request = d, n.parentNode && n.parentNode.removeChild(n), o(f)
                    }
                  }, n.href = r, document.head.appendChild(n)
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
            352: 0
          };
          p.f.j = (r, t) => {
            var a = p.o(e, r) ? e[r] : void 0;
            if (0 !== a)
              if (a) t.push(a[2]);
              else if (/^(6(1|12|64)|112|828|836)$/.test(r)) e[r] = 0;
            else {
              var o = new Promise(((t, o) => a = e[r] = [t, o]));
              t.push(a[2] = o);
              var n = p.p + p.u(r),
                s = new Error;
              p.l(n, (t => {
                if (p.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    n = t && t.target && t.target.src;
                  s.message = "Loading chunk " + r + " failed.\n(" + o + ": " + n + ")", s.name = "ChunkLoadError", s.type = o, s.request = n, a[1](s)
                }
              }), "chunk-" + r, r)
            }
          };
          var r = (r, t) => {
              var a, o, n = t[0],
                s = t[1],
                d = t[2],
                f = 0;
              if (n.some((r => 0 !== e[r]))) {
                for (a in s) p.o(s, a) && (p.m[a] = s[a]);
                d && d(p)
              }
              for (r && r(t); f < n.length; f++) o = n[f], p.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
        })(), p.nc = void 0, p(93824), p(87736)
      })())
    }
  }
}));