var modules_gtao_license_plate;
(() => {
  "use strict";
  var e, r, t, a, n = {
      6541: (e, r, t) => {
        var a = {
            "./bootstrap": () => t.e(39).then((() => () => t(5039))),
            "./index": () => Promise.all([t.e(10), t.e(932), t.e(206), t.e(722), t.e(401), t.e(248)]).then((() => () => t(1248)))
          },
          n = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
            throw new Error('Module "' + e + '" does not exist in container.')
          })), t.R = void 0, r),
          o = (e, r) => {
            if (t.S) {
              var a = "default",
                n = t.S[a];
              if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return t.S[a] = e, t.I(a, r)
            }
          };
        t.d(r, {
          get: () => n,
          init: () => o
        })
      },
      9525: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "components")
        })).then((() => components))
      },
      5171: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof graph_client) return e();
          t.l(window.mfe.path("@rockstargames/graph-client"), (t => {
            if ("undefined" != typeof graph_client) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "graph_client")
        })).then((() => graph_client))
      },
      7426: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_sc_user) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-sc-user"), (t => {
            if ("undefined" != typeof modules_core_sc_user) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "modules_core_sc_user")
        })).then((() => modules_core_sc_user))
      },
      692: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof polyfills) return e();
          t.l(window.mfe.path("@rockstargames/polyfills"), (t => {
            if ("undefined" != typeof polyfills) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "polyfills")
        })).then((() => polyfills))
      },
      8810: (e, r, t) => {
        var a = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof utils) return e();
          t.l(window.mfe.path("@rockstargames/utils"), (t => {
            if ("undefined" != typeof utils) return e();
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            a.message = "Loading script failed.\n(" + n + ": " + o + ")", a.name = "ScriptExternalLoadError", a.type = n, a.request = o, r(a)
          }), "utils")
        })).then((() => utils))
      }
    },
    o = {};

  function i(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = o[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
  }
  i.m = n, i.c = o, i.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return i.d(r, {
      a: r
    }), r
  }, i.d = (e, r) => {
    for (var t in r) i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((r, t) => (i.f[t](e, r), r)), [])), i.u = e => "js/" + {
    10: "24a149ff8f1e795f7a73",
    39: "3bbef17a6f0c56eac125",
    40: "1587e8d6eff081e56b74",
    166: "ab3d2090ab3177b77a27",
    206: "88f97e9f5bcf5607bb24",
    240: "0b94b7a690e18b49fbec",
    248: "3eea0faba9602540fb7f",
    252: "b5ca613655bc909c9ceb",
    364: "1f9f7a91f0cc8f5017f6",
    401: "6a0b6f1cee1fba238b90",
    444: "a02936744cea08e8bc31",
    550: "12ffc241312a9afc2cad",
    653: "977e6385572e9c482cc1",
    722: "f8e63dbcecd5f3bd19e7",
    796: "105af0a1d9ee3d3ddfa8",
    830: "b113dccfc90ba89aa6fc",
    932: "47f823ceb8f808756ed2",
    976: "2780e38f88220f2313e1"
  } [e] + ".js", i.miniCssF = e => "css/" + {
    401: "f726bd383cb580cf5603",
    830: "7e0e0eeee8fd8a33ff07"
  } [e] + ".css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-gtao-license-plate:", i.l = (t, a, n, o) => {
    if (e[t]) e[t].push(a);
    else {
      var s, l;
      if (void 0 !== n)
        for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
          var u = d[f];
          if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == r + n) {
            s = u;
            break
          }
        }
      s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + n), s.src = t), e[t] = [a];
      var c = (r, a) => {
          s.onerror = s.onload = null, clearTimeout(p);
          var n = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(a))), r) return r(a)
        },
        p = setTimeout(c.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = c.bind(null, s.onerror), s.onload = c.bind(null, s.onload), l && document.head.appendChild(s)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), t = {
    401: [1458, 3657, 4859, 6711, 8976, 9929],
    830: [1968, 7842]
  }, a = {
    1458: ["default", "./providers", 7426],
    1968: ["default", "./providers", 8810],
    3657: ["default", "./hooks", 8810],
    4859: ["default", "./index", 5171],
    6711: ["default", "./index", 7426],
    7842: ["default", "./browser", 692],
    8976: ["default", "./index", 9525],
    9929: ["default", "./index", 8810]
  }, i.f.remotes = (e, r) => {
    i.o(t, e) && t[e].forEach((e => {
      var t = i.R;
      t || (t = []);
      var n = a[e];
      if (!(t.indexOf(n) >= 0)) {
        if (t.push(n), n.p) return r.push(n.p);
        var o = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), i.m[e] = () => {
              throw r
            }, n.p = 0
          },
          s = (e, t, a, i, s, l) => {
            try {
              var d = e(t, a);
              if (!d || !d.then) return s(d, i, l);
              var f = d.then((e => s(e, i)), o);
              if (!l) return f;
              r.push(n.p = f)
            } catch (e) {
              o(e)
            }
          },
          l = (e, r, a) => s(r.get, n[1], t, 0, d, a),
          d = r => {
            n.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, n[2], 0, 0, ((e, r, t) => e ? s(i.I, n[0], 0, e, l, t) : o()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, a) => {
      a || (a = []);
      var n = r[t];
      if (n || (n = r[t] = {}), !(a.indexOf(n) >= 0)) {
        if (a.push(n), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var o = i.S[t],
          s = "@rockstargames/modules-gtao-license-plate",
          l = (e, r, t, a) => {
            var n = o[e] = o[e] || {},
              i = n[r];
            (!i || !i.loaded && (!a != !i.eager ? a : s > i.from)) && (n[r] = {
              get: t,
              from: s,
              eager: !!a
            })
          },
          d = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
              var r
            };
            try {
              var n = i(e);
              if (!n) return;
              var o = e => e && e.init && e.init(i.S[t], a);
              if (n.then) return f.push(n.then(o, r));
              var s = o(n);
              if (s && s.then) return f.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          f = [];
        return "default" === t && (l("@react-spring/web", "9.7.1", (() => Promise.all([i.e(796), i.e(932), i.e(722)]).then((() => () => i(1796))))), l("@react-three/fiber", "7.0.29", (() => Promise.all([i.e(40), i.e(932), i.e(206)]).then((() => () => i(6040))))), l("@use-gesture/react", "10.2.24", (() => Promise.all([i.e(444), i.e(932)]).then((() => () => i(2444))))), l("gsap", "3.11.4", (() => i.e(166).then((() => () => i(6166))))), l("lodash", "4.17.21", (() => i.e(653).then((() => () => i(3653))))), l("react-dom", "18.2.0", (() => Promise.all([i.e(364), i.e(932)]).then((() => () => i(2364))))), l("react-router-dom", "6.11.2", (() => Promise.all([i.e(976), i.e(932)]).then((() => () => i(4976))))), l("react", "18.2.0", (() => i.e(252).then((() => () => i(8252))))), l("stackblur-canvas", "2.5.0", (() => i.e(550).then((() => () => i(9550))))), l("three", "0.141.0", (() => i.e(240).then((() => () => i(6240))))), d(9525), d(5171), d(7426), d(8810), d(692)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
      }
    }
  })(), (() => {
    var e;
    i.g.importScripts && (e = i.g.location + "");
    var r = i.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      if (t.length)
        for (var a = t.length - 1; a > -1 && !e;) e = t[a--].src
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
          var n = t[0],
            o = n < 0;
          o && (n = -n - 1);
          for (var i = 0, s = 1, l = !0;; s++, i++) {
            var d, f, u = s < t.length ? (typeof t[s])[0] : "";
            if (i >= a.length || "o" == (f = (typeof(d = a[i]))[0])) return !l || ("u" == u ? s > n && !o : "" == u != o);
            if ("u" == f) {
              if (!l || "u" != u) return !1
            } else if (l)
              if (u == f)
                if (s <= n) {
                  if (d != t[s]) return !1
                } else {
                  if (o ? d > t[s] : d < t[s]) return !1;
                  d != t[s] && (l = !1)
                }
            else if ("s" != u && "n" != u) {
              if (o || s <= n) return !1;
              l = !1, s--
            } else {
              if (s <= n || f < u != o) return !1;
              l = !1
            } else "s" != u && "n" != u && (l = !1, s--)
          }
        }
        var c = [],
          p = c.pop.bind(c);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, a) : !p())
        }
        return !!p()
      },
      t = (t, a, n) => {
        var o = t[a];
        return (a = Object.keys(o).reduce(((t, a) => !r(n, a) || t && !((r, t) => {
          r = e(r), t = e(t);
          for (var a = 0;;) {
            if (a >= r.length) return a < t.length && "u" != (typeof t[a])[0];
            var n = r[a],
              o = (typeof n)[0];
            if (a >= t.length) return "u" == o;
            var i = t[a],
              s = (typeof i)[0];
            if (o != s) return "o" == o && "n" == s || "s" == s || "u" == o;
            if ("o" != o && "u" != o && n != i) return n < i;
            a++
          }
        })(t, a) ? t : a), 0)) && o[a]
      },
      a = (e => function(r, t, a, n) {
        var o = i.I(r);
        return o && o.then ? o.then(e.bind(e, r, i.S[r], t, a, n)) : e(r, i.S[r], t, a, n)
      })(((e, r, a, n, o) => {
        var s = r && i.o(r, a) && t(r, a, n);
        return s ? (e => (e.loaded = 1, e.get()))(s) : o()
      })),
      n = {},
      o = {
        4932: () => a("default", "react", [1, 18, 2, 0], (() => i.e(252).then((() => () => i(8252))))),
        1722: () => a("default", "react-dom", [1, 18, 2, 0], (() => i.e(364).then((() => () => i(2364))))),
        6206: () => a("default", "three", [4, 0, 141, 0], (() => i.e(240).then((() => () => i(6240))))),
        1595: () => a("default", "gsap", [1, 3, 10, 4], (() => i.e(166).then((() => () => i(6166))))),
        3102: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(976).then((() => () => i(4976))))),
        3572: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => i.e(40).then((() => () => i(6040))))),
        4431: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => i.e(796).then((() => () => i(1796))))),
        4903: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => i.e(444).then((() => () => i(2444))))),
        4926: () => a("default", "lodash", [1, 4, 17, 21], (() => i.e(653).then((() => () => i(3653))))),
        7151: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => i.e(550).then((() => () => i(9550)))))
      },
      s = {
        206: [6206],
        401: [1595, 3102, 3572, 4431, 4903, 4926, 7151],
        722: [1722],
        932: [4932]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
        if (i.o(n, e)) return r.push(n[e]);
        var t = r => {
            n[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          a = r => {
            delete n[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var s = o[e]();
          s.then ? r.push(n[e] = s.then(t).catch(a)) : t(s)
        } catch (e) {
          a(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        434: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          401: 1,
          830: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var a = i.miniCssF(e),
            n = i.p + a;
          if (((e, r) => {
              for (var t = document.getElementsByTagName("link"), a = 0; a < t.length; a++) {
                var n = (i = t[a]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (n === e || n === r)) return i
              }
              var o = document.getElementsByTagName("style");
              for (a = 0; a < o.length; a++) {
                var i;
                if ((n = (i = o[a]).getAttribute("data-href")) === e || n === r) return i
              }
            })(a, n)) return r();
          ((e, r, t, a, n) => {
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
              if (o.onerror = o.onload = null, "load" === t.type) a();
              else {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  s = t && t.target && t.target.href || r,
                  l = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, o.parentNode && o.parentNode.removeChild(o), n(l)
              }
            }, o.href = r, document.head.appendChild(o)
          })(e, n, 0, r, t)
        })))(r).then((() => {
          e[r] = 0
        }), (t => {
          throw delete e[r], t
        })))
      }
    }
  })(), (() => {
    var e = {
      434: 0
    };
    i.f.j = (r, t) => {
      var a = i.o(e, r) ? e[r] : void 0;
      if (0 !== a)
        if (a) t.push(a[2]);
        else if (/^(206|722|932)$/.test(r)) e[r] = 0;
      else {
        var n = new Promise(((t, n) => a = e[r] = [t, n]));
        t.push(a[2] = n);
        var o = i.p + i.u(r),
          s = new Error;
        i.l(o, (t => {
          if (i.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            s.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", s.name = "ChunkLoadError", s.type = n, s.request = o, a[1](s)
          }
        }), "chunk-" + r, r)
      }
    };
    var r = (r, t) => {
        var a, n, o = t[0],
          s = t[1],
          l = t[2],
          d = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (a in s) i.o(s, a) && (i.m[a] = s[a]);
          l && l(i)
        }
        for (r && r(t); d < o.length; d++) n = o[d], i.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(6541);
  modules_gtao_license_plate = s
})();