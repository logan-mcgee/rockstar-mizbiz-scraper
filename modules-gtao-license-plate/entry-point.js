var modules_gtao_license_plate;
(() => {
  "use strict";
  var e, r, t, a, n = {
      6541: (e, r, t) => {
        var a = {
            "./bootstrap": () => t.e(215).then((() => () => t(9215))),
            "./index": () => Promise.all([t.e(956), t.e(822), t.e(553), t.e(468), t.e(98), t.e(549)]).then((() => () => t(1549)))
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
  i.m = n, i.c = o, i.amdO = {}, i.n = e => {
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
    12: "f5961be7b8ef7aa22f02",
    14: "54c0a9599a7ac78ae10c",
    91: "ebe0809fc52d4036d749",
    98: "77bc4e827651f8cca4ef",
    109: "115b6b2325a9da89c682",
    206: "eef45d8c715b9821e06d",
    210: "e8290c805582f9d012c1",
    215: "a1460096f2945cfb93fd",
    250: "cd2223a38d7b006fddc5",
    439: "522a93d378e1d9e19894",
    468: "931e289647831e674b2b",
    489: "d7541ffe61d75feabccb",
    508: "0e639d8e5c48e54b93d4",
    549: "6a84d09a6815d84ddea4",
    553: "50eaf745922e652cb5f7",
    591: "2baa738f8ede33d1c86b",
    769: "0e1a48c8ab71a1595ce9",
    822: "cc3ba15b3bdd18c3322e",
    942: "20a67fbbd3d513724c02",
    948: "a254eb70cbe073115acd",
    956: "b22d961c0778b121b6e7"
  } [e] + ".js", i.miniCssF = e => "css/" + {
    98: "59eb2e9be5d22c643968",
    210: "91d3ece3664c615621de"
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
        for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
          var f = d[u];
          if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == r + n) {
            s = f;
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
    98: [2435, 3657, 4859, 6711, 8976],
    210: [1458, 1968, 7842]
  }, a = {
    1458: ["default", "./providers", 7426],
    1968: ["default", "./providers", 8810],
    2435: ["default", "./index", 8810],
    3657: ["default", "./hooks", 8810],
    4859: ["default", "./index", 5171],
    6711: ["default", "./index", 7426],
    7842: ["default", "./browser", 692],
    8976: ["default", "./index", 9525]
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
              var u = d.then((e => s(e, i)), o);
              if (!l) return u;
              r.push(n.p = u)
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
              if (n.then) return u.push(n.then(o, r));
              var s = o(n);
              if (s && s.then) return u.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          u = [];
        return "default" === t && (l("@react-spring/web", "9.7.1", (() => Promise.all([i.e(942), i.e(822), i.e(468)]).then((() => () => i(4942))))), l("@react-three/fiber", "7.0.29", (() => Promise.all([i.e(250), i.e(822), i.e(553)]).then((() => () => i(6250))))), l("@use-gesture/react", "10.2.24", (() => Promise.all([i.e(91), i.e(822)]).then((() => () => i(4091))))), l("gsap", "3.11.4", (() => i.e(14).then((() => () => i(4014))))), l("lodash", "4.17.21", (() => i.e(948).then((() => () => i(948))))), l("prop-types", "15.8.1", (() => i.e(109).then((() => () => i(9109))))), l("react-dom", "18.2.0", (() => Promise.all([i.e(591), i.e(822)]).then((() => () => i(5591))))), l("react-lottie", "1.2.3", (() => Promise.all([i.e(206), i.e(822), i.e(439)]).then((() => () => i(206))))), l("react-router-dom", "6.9.0", (() => Promise.all([i.e(489), i.e(822)]).then((() => () => i(3489))))), l("react", "18.2.0", (() => i.e(769).then((() => () => i(2298))))), l("stackblur-canvas", "2.5.0", (() => i.e(12).then((() => () => i(12))))), l("three", "0.141.0", (() => i.e(508).then((() => () => i(5508))))), d(9525), d(5171), d(7426), d(8810), d(692)), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
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
            var d, u, f = s < t.length ? (typeof t[s])[0] : "";
            if (i >= a.length || "o" == (u = (typeof(d = a[i]))[0])) return !l || ("u" == f ? s > n && !o : "" == f != o);
            if ("u" == u) {
              if (!l || "u" != f) return !1
            } else if (l)
              if (f == u)
                if (s <= n) {
                  if (d != t[s]) return !1
                } else {
                  if (o ? d > t[s] : d < t[s]) return !1;
                  d != t[s] && (l = !1)
                }
            else if ("s" != f && "n" != f) {
              if (o || s <= n) return !1;
              l = !1, s--
            } else {
              if (s <= n || u < f != o) return !1;
              l = !1
            } else "s" != f && "n" != f && (l = !1, s--)
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
        822: () => a("default", "react", [1, 18, 2, 0], (() => i.e(769).then((() => () => i(2298))))),
        3468: () => a("default", "react-dom", [1, 18, 2, 0], (() => i.e(591).then((() => () => i(5591))))),
        4553: () => a("default", "three", [4, 0, 141, 0], (() => i.e(508).then((() => () => i(5508))))),
        3339: () => a("default", "prop-types", [1, 15, 8, 1], (() => i.e(109).then((() => () => i(9109))))),
        621: () => a("default", "@use-gesture/react", [1, 10, 2, 23], (() => i.e(91).then((() => () => i(4091))))),
        1633: () => a("default", "@react-spring/web", [1, 9, 6, 1], (() => i.e(942).then((() => () => i(4942))))),
        2178: () => a("default", "@react-three/fiber", [1, 7, 0, 0], (() => i.e(250).then((() => () => i(6250))))),
        2973: () => a("default", "react-lottie", [1, 1, 2, 3], (() => Promise.all([i.e(206), i.e(439)]).then((() => () => i(206))))),
        4439: () => a("default", "lodash", [1, 4, 17, 21], (() => i.e(948).then((() => () => i(948))))),
        7028: () => a("default", "stackblur-canvas", [1, 2, 5, 0], (() => i.e(12).then((() => () => i(12))))),
        7814: () => a("default", "react-router-dom", [1, 6, 9, 0], (() => i.e(489).then((() => () => i(3489))))),
        9878: () => a("default", "gsap", [1, 3, 10, 4], (() => i.e(14).then((() => () => i(4014)))))
      },
      s = {
        98: [621, 1633, 2178, 2973, 4439, 7028, 7814, 9878],
        439: [3339],
        468: [3468],
        553: [4553],
        822: [822]
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
          98: 1,
          210: 1
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
                l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = s, o.parentNode.removeChild(o), n(l)
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
        else if (/^(439|468|553|822)$/.test(r)) e[r] = 0;
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