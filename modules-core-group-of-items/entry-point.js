var modules_core_group_of_items;
(() => {
  "use strict";
  var e, r, t, n, o = {
      812: (e, r, t) => {
        var n = {
            "./index": () => t.e(814).then((() => () => t(814))),
            "./tinaBlockTemplates": () => t.e(4).then((() => () => t(4)))
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
      },
      525: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, r(n)
          }), "components")
        })).then((() => components))
      },
      993: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof modules_core_videoplayer) return e();
          t.l(window.mfe.path("@rockstargames/modules-core-videoplayer"), (t => {
            if ("undefined" != typeof modules_core_videoplayer) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, r(n)
          }), "modules_core_videoplayer")
        })).then((() => modules_core_videoplayer))
      },
      489: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof tina) return e();
          t.l(window.mfe.path("@rockstargames/tina"), (t => {
            if ("undefined" != typeof tina) return e();
            var o = t && ("load" === t.type ? "missing" : t.type),
              a = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, r(n)
          }), "tina")
        })).then((() => tina))
      }
    },
    a = {};

  function i(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var t = a[e] = {
      exports: {}
    };
    return o[e](t, t.exports, i), t.exports
  }
  i.m = o, i.c = a, i.n = e => {
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
    4: "510c87843ad77abb1950",
    627: "d94fc174b10d57cea361",
    814: "6b2cae8ab16775fa9d13"
  } [e] + ".js", i.miniCssF = e => "css/a9b2e356e5b5a1966cd2.css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-group-of-items:", i.l = (t, n, o, a) => {
    if (e[t]) e[t].push(n);
    else {
      var s, u;
      if (void 0 !== o)
        for (var f = document.getElementsByTagName("script"), l = 0; l < f.length; l++) {
          var d = f[l];
          if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == r + o) {
            s = d;
            break
          }
        }
      s || (u = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + o), s.src = t), e[t] = [n];
      var p = (r, n) => {
          s.onerror = s.onload = null, clearTimeout(c);
          var o = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(n))), r) return r(n)
        },
        c = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = p.bind(null, s.onerror), s.onload = p.bind(null, s.onload), u && document.head.appendChild(s)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {
    4: [616],
    814: [224, 542, 976]
  }, n = {
    224: ["default", "./index", 993],
    542: ["default", "./index", 489],
    616: ["default", "./properties", 489],
    976: ["default", "./index", 525]
  }, i.f.remotes = (e, r) => {
    i.o(t, e) && t[e].forEach((e => {
      var t = i.R;
      t || (t = []);
      var o = n[e];
      if (!(t.indexOf(o) >= 0)) {
        if (t.push(o), o.p) return r.push(o.p);
        var a = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), i.m[e] = () => {
              throw r
            }, o.p = 0
          },
          s = (e, t, n, i, s, u) => {
            try {
              var f = e(t, n);
              if (!f || !f.then) return s(f, i, u);
              var l = f.then((e => s(e, i)), a);
              if (!u) return l;
              r.push(o.p = l)
            } catch (e) {
              a(e)
            }
          },
          u = (e, r, n) => s(r.get, o[1], t, 0, f, n),
          f = r => {
            o.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, o[2], 0, 0, ((e, r, t) => e ? s(i.I, o[0], 0, e, u, t) : a()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, n) => {
      n || (n = []);
      var o = r[t];
      if (o || (o = r[t] = {}), !(n.indexOf(o) >= 0)) {
        if (n.push(o), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var a = i.S[t],
          s = "@rockstargames/modules-core-group-of-items",
          u = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, "undefined" != typeof console && console.warn && console.warn(r);
              var r
            };
            try {
              var o = i(e);
              if (!o) return;
              var a = e => e && e.init && e.init(i.S[t], n);
              if (o.then) return f.push(o.then(a, r));
              var s = a(o);
              if (s && s.then) return f.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          f = [];
        return "default" === t && (((e, r, t, n) => {
          var o = a[e] = a[e] || {},
            u = o[r];
          (!u || !u.loaded && (1 != !u.eager ? n : s > u.from)) && (o[r] = {
            get: () => i.e(627).then((() => () => i(627))),
            from: s,
            eager: !1
          })
        })("react", "18.2.0"), u(525), u(993), u(489)), f.length ? e[t] = Promise.all(f).then((() => e[t] = 1)) : e[t] = 1
      }
    }
  })(), (() => {
    var e;
    i.g.importScripts && (e = i.g.location + "");
    var r = i.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
          var o = t[0],
            a = o < 0;
          a && (o = -o - 1);
          for (var i = 0, s = 1, u = !0;; s++, i++) {
            var f, l, d = s < t.length ? (typeof t[s])[0] : "";
            if (i >= n.length || "o" == (l = (typeof(f = n[i]))[0])) return !u || ("u" == d ? s > o && !a : "" == d != a);
            if ("u" == l) {
              if (!u || "u" != d) return !1
            } else if (u)
              if (d == l)
                if (s <= o) {
                  if (f != t[s]) return !1
                } else {
                  if (a ? f > t[s] : f < t[s]) return !1;
                  f != t[s] && (u = !1)
                }
            else if ("s" != d && "n" != d) {
              if (a || s <= o) return !1;
              u = !1, s--
            } else {
              if (s <= o || l < d != a) return !1;
              u = !1
            } else "s" != d && "n" != d && (u = !1, s--)
          }
        }
        var p = [],
          c = p.pop.bind(p);
        for (i = 1; i < t.length; i++) {
          var m = t[i];
          p.push(1 == m ? c() | c() : 2 == m ? c() & c() : m ? r(m, n) : !c())
        }
        return !!c()
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
        var a = i.I(r);
        return a && a.then ? a.then(e.bind(e, r, i.S[r], t, n, o)) : e(r, i.S[r], t, n, o)
      })(((e, r, n, o, a) => {
        var s = r && i.o(r, n) && t(r, n, o);
        return s ? (e => (e.loaded = 1, e.get()))(s) : a()
      })),
      o = {},
      a = {
        822: () => n("default", "react", [1, 18, 2, 0], (() => i.e(627).then((() => () => i(627)))))
      },
      s = {
        814: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
        if (i.o(o, e)) return r.push(o[e]);
        var t = r => {
            o[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          n = r => {
            delete o[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var s = a[e]();
          s.then ? r.push(o[e] = s.then(t).catch(n)) : t(s)
        } catch (e) {
          n(e)
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
          814: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var n = i.miniCssF(e),
            o = i.p + n;
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
                u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, a.parentNode.removeChild(a), o(u)
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
      434: 0
    };
    i.f.j = (r, t) => {
      var n = i.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var o = new Promise(((t, o) => n = e[r] = [t, o]));
          t.push(n[2] = o);
          var a = i.p + i.u(r),
            s = new Error;
          i.l(a, (t => {
            if (i.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              s.message = "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, n[1](s)
            }
          }), "chunk-" + r, r)
        }
    };
    var r = (r, t) => {
        var n, o, a = t[0],
          s = t[1],
          u = t[2],
          f = 0;
        if (a.some((r => 0 !== e[r]))) {
          for (n in s) i.o(s, n) && (i.m[n] = s[n]);
          u && u(i)
        }
        for (r && r(t); f < a.length; f++) o = a[f], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(812);
  modules_core_group_of_items = s
})();