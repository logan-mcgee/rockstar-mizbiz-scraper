var graph_client;
(() => {
  "use strict";
  var e, r, t, a, n, o, i = {
      6463: (e, r, t) => {
        var a = {
            "./bootstrap": () => t.e(284).then((() => () => t(6284))),
            "./index": () => Promise.all([t.e(85), t.e(529), t.e(158), t.e(736), t.e(18)]).then((() => () => t(9018))),
            "./operations/fragments/": () => t.e(638).then((() => () => t(7638))),
            "./operations/fragments/newswire-post.graphql": () => t.e(709).then((() => () => t(6709))),
            "./operations/fragments/paging.graphql": () => t.e(218).then((() => () => t(7218))),
            "./operations/fragments/video-fields.graphql": () => t.e(913).then((() => () => t(5913))),
            "./operations/queries": () => t.e(933).then((() => () => t(7933))),
            "./providers": () => Promise.all([t.e(85), t.e(529), t.e(736), t.e(534)]).then((() => () => t(534))),
            "./reactive": () => Promise.all([t.e(85), t.e(736), t.e(941)]).then((() => () => t(8941)))
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
      }
    },
    f = {};

  function s(e) {
    var r = f[e];
    if (void 0 !== r) return r.exports;
    var t = f[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return i[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
  }
  s.m = i, s.c = f, s.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return s.d(r, {
      a: r
    }), r
  }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, a) {
    if (1 & a && (t = this(t)), 8 & a) return t;
    if ("object" == typeof t && t) {
      if (4 & a && t.__esModule) return t;
      if (16 & a && "function" == typeof t.then) return t
    }
    var n = Object.create(null);
    s.r(n);
    var o = {};
    e = e || [null, r({}), r([]), r(r)];
    for (var i = 2 & a && t;
      "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => o[e] = () => t[e]));
    return o.default = () => t, s.d(n, o), n
  }, s.d = (e, r) => {
    for (var t in r) s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((r, t) => (s.f[t](e, r), r)), [])), s.u = e => "js/" + {
    18: "08e9d49b43fdc48ee11c",
    30: "7b2f1e8d87e63011289e",
    85: "4b36eaa2c6da09ba04fc",
    158: "c80a13e1ac817fbb5e03",
    218: "d7eb146a626b7046c6e7",
    284: "371da365de11814958ca",
    529: "b9c38e7b1027ab08f980",
    534: "03ecf74f3da6cf0819fa",
    581: "69c38e0b8cecb65eeeb1",
    638: "77733dac74b3ee0639ae",
    709: "20e51465ceeb2cc41fdf",
    736: "7a8c105cfea89b71af06",
    913: "7365e5d95eed93b6540a",
    933: "38165132edc1c639a5a4",
    941: "e305e922da6ad096f422",
    944: "0dc5cffe99f14617380c"
  } [e] + ".js", s.miniCssF = e => {}, s.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, a = "@rockstargames/graph-client:", s.l = (e, r, n, o) => {
    if (t[e]) t[e].push(r);
    else {
      var i, f;
      if (void 0 !== n)
        for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
          var c = l[u];
          if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == a + n) {
            i = c;
            break
          }
        }
      i || (f = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.setAttribute("data-webpack", a + n), i.src = e), t[e] = [r];
      var p = (r, a) => {
          i.onerror = i.onload = null, clearTimeout(d);
          var n = t[e];
          if (delete t[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
        },
        d = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);
      i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload), f && document.head.appendChild(i)
    }
  }, s.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {}, o = {}, s.f.remotes = (e, r) => {
    s.o(n, e) && n[e].forEach((e => {
      var t = s.R;
      t || (t = []);
      var a = o[e];
      if (!(t.indexOf(a) >= 0)) {
        if (t.push(a), a.p) return r.push(a.p);
        var n = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
              throw r
            }, a.p = 0
          },
          i = (e, t, o, i, f, s) => {
            try {
              var l = e(t, o);
              if (!l || !l.then) return f(l, i, s);
              var u = l.then((e => f(e, i)), n);
              if (!s) return u;
              r.push(a.p = u)
            } catch (e) {
              n(e)
            }
          },
          f = (e, r, n) => i(r.get, a[1], t, 0, l, n),
          l = r => {
            a.p = 1, s.m[e] = e => {
              e.exports = r()
            }
          };
        i(s, a[2], 0, 0, ((e, r, t) => e ? i(s.I, a[0], 0, e, f, t) : n()), 1)
      }
    }))
  }, (() => {
    s.S = {};
    var e = {},
      r = {};
    s.I = (t, a) => {
      a || (a = []);
      var n, o, i, f, l = r[t];
      if (l || (l = r[t] = {}), !(a.indexOf(l) >= 0)) {
        if (a.push(l), e[t]) return e[t];
        s.o(s.S, t) || (s.S[t] = {});
        var u = s.S[t],
          c = "@rockstargames/graph-client",
          p = [];
        return "default" === t && (n = "18.2.0", i = u.react = u.react || {}, (!(f = i[n]) || !f.loaded && (1 != !f.eager ? o : c > f.from)) && (i[n] = {
          get: () => s.e(30).then((() => () => s(6030))),
          from: c,
          eager: !1
        })), e[t] = p.length ? Promise.all(p).then((() => e[t] = 1)) : 1
      }
    }
  })(), (() => {
    var e;
    s.g.importScripts && (e = s.g.location + "");
    var r = s.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
          for (var i = 0, f = 1, s = !0;; f++, i++) {
            var l, u, c = f < t.length ? (typeof t[f])[0] : "";
            if (i >= a.length || "o" == (u = (typeof(l = a[i]))[0])) return !s || ("u" == c ? f > n && !o : "" == c != o);
            if ("u" == u) {
              if (!s || "u" != c) return !1
            } else if (s)
              if (c == u)
                if (f <= n) {
                  if (l != t[f]) return !1
                } else {
                  if (o ? l > t[f] : l < t[f]) return !1;
                  l != t[f] && (s = !1)
                }
            else if ("s" != c && "n" != c) {
              if (o || f <= n) return !1;
              s = !1, f--
            } else {
              if (f <= n || u < c != o) return !1;
              s = !1
            } else "s" != c && "n" != c && (s = !1, f--)
          }
        }
        var p = [],
          d = p.pop.bind(p);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          p.push(1 == h ? d() | d() : 2 == h ? d() & d() : h ? r(h, a) : !d())
        }
        return !!d()
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
              f = (typeof i)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && n != i) return n < i;
            a++
          }
        })(t, a) ? t : a), 0)) && o[a]
      },
      a = (e => function(r, t, a, n) {
        var o = s.I(r);
        return o && o.then ? o.then(e.bind(e, r, s.S[r], t, a, n)) : e(r, s.S[r], t, a, n)
      })(((e, r, a, n, o) => {
        var i = r && s.o(r, a) && t(r, a, n);
        return i ? (e => (e.loaded = 1, e.get()))(i) : o()
      })),
      n = {},
      o = {
        4736: () => a("default", "react", [2, 18, 2, 0], (() => s.e(30).then((() => () => s(6030)))))
      },
      i = {
        736: [4736]
      };
    s.f.consumes = (e, r) => {
      s.o(i, e) && i[e].forEach((e => {
        if (s.o(n, e)) return r.push(n[e]);
        var t = r => {
            n[e] = 0, s.m[e] = t => {
              delete s.c[e], t.exports = r()
            }
          },
          a = r => {
            delete n[e], s.m[e] = t => {
              throw delete s.c[e], r
            }
          };
        try {
          var i = o[e]();
          i.then ? r.push(n[e] = i.then(t).catch(a)) : t(i)
        } catch (e) {
          a(e)
        }
      }))
    }
  })(), (() => {
    var e = {
      546: 0
    };
    s.f.j = (r, t) => {
      var a = s.o(e, r) ? e[r] : void 0;
      if (0 !== a)
        if (a) t.push(a[2]);
        else if (736 != r) {
        var n = new Promise(((t, n) => a = e[r] = [t, n]));
        t.push(a[2] = n);
        var o = s.p + s.u(r),
          i = new Error;
        s.l(o, (t => {
          if (s.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
            var n = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
          }
        }), "chunk-" + r, r)
      } else e[r] = 0
    };
    var r = (r, t) => {
        var a, n, o = t[0],
          i = t[1],
          f = t[2],
          l = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (a in i) s.o(i, a) && (s.m[a] = i[a]);
          f && f(s)
        }
        for (r && r(t); l < o.length; l++) n = o[l], s.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var l = s(6463);
  graph_client = l
})();