var modules_core_carousel;
(() => {
  "use strict";
  var e, r, t, n, a = {
      812: (e, r, t) => {
        var n = {
            "./index": () => Promise.all([t.e(598), t.e(781)]).then((() => () => t(781))),
            "./tinaBlockTemplates": () => t.e(828).then((() => () => t(828)))
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
      525: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof components) return e();
          t.l(window.mfe.path("@rockstargames/components"), (t => {
            if ("undefined" != typeof components) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + o + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = o, r(n)
          }), "components")
        })).then((() => components))
      },
      489: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof tina) return e();
          t.l(window.mfe.path("@rockstargames/tina"), (t => {
            if ("undefined" != typeof tina) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              o = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + o + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = o, r(n)
          }), "tina")
        })).then((() => tina))
      }
    },
    o = {};

  function i(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var t = o[e] = {
      exports: {}
    };
    return a[e](t, t.exports, i), t.exports
  }
  i.m = a, i.c = o, i.d = (e, r) => {
    for (var t in r) i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((r, t) => (i.f[t](e, r), r)), [])), i.u = e => "js/" + {
    598: "9d2db4710b3b49a60c33",
    661: "6ad663e93a7ca065ab22",
    781: "ee56309a7f9c05337967",
    828: "cba4803abc6fddf6940e"
  } [e] + ".js", i.miniCssF = e => "css/e9b9477b6e1fef1b7762.css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-carousel:", i.l = (t, n, a, o) => {
    if (e[t]) e[t].push(n);
    else {
      var s, u;
      if (void 0 !== a)
        for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
          var c = l[f];
          if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == r + a) {
            s = c;
            break
          }
        }
      s || (u = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + a), s.src = t), e[t] = [n];
      var d = (r, n) => {
          s.onerror = s.onload = null, clearTimeout(p);
          var a = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e => e(n))), r) return r(n)
        },
        p = setTimeout(d.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = d.bind(null, s.onerror), s.onload = d.bind(null, s.onload), u && document.head.appendChild(s)
    }
  }, i.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {
    781: [542, 976],
    828: [307, 616]
  }, n = {
    307: ["default", "./tinaBlockTemplates", 525],
    542: ["default", "./index", 489],
    616: ["default", "./properties", 489],
    976: ["default", "./index", 525]
  }, i.f.remotes = (e, r) => {
    i.o(t, e) && t[e].forEach((e => {
      var t = i.R;
      t || (t = []);
      var a = n[e];
      if (!(t.indexOf(a) >= 0)) {
        if (t.push(a), a.p) return r.push(a.p);
        var o = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), i.m[e] = () => {
              throw r
            }, a.p = 0
          },
          s = (e, t, n, i, s, u) => {
            try {
              var l = e(t, n);
              if (!l || !l.then) return s(l, i, u);
              var f = l.then((e => s(e, i)), o);
              if (!u) return f;
              r.push(a.p = f)
            } catch (e) {
              o(e)
            }
          },
          u = (e, r, n) => s(r.get, a[1], t, 0, l, n),
          l = r => {
            a.p = 1, i.m[e] = e => {
              e.exports = r()
            }
          };
        s(i, a[2], 0, 0, ((e, r, t) => e ? s(i.I, a[0], 0, e, u, t) : o()), 1)
      }
    }))
  }, (() => {
    i.S = {};
    var e = {},
      r = {};
    i.I = (t, n) => {
      n || (n = []);
      var a = r[t];
      if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
        if (n.push(a), e[t]) return e[t];
        i.o(i.S, t) || (i.S[t] = {});
        var o = i.S[t],
          s = "@rockstargames/modules-core-carousel",
          u = e => {
            var r = e => {
              return r = "Initialization of sharing external failed: " + e, "undefined" != typeof console && console.warn && console.warn(r);
              var r
            };
            try {
              var a = i(e);
              if (!a) return;
              var o = e => e && e.init && e.init(i.S[t], n);
              if (a.then) return l.push(a.then(o, r));
              var s = o(a);
              if (s && s.then) return l.push(s.catch(r))
            } catch (e) {
              r(e)
            }
          },
          l = [];
        return "default" === t && (((e, r, t, n) => {
          var a = o[e] = o[e] || {},
            u = a[r];
          (!u || !u.loaded && (1 != !u.eager ? n : s > u.from)) && (a[r] = {
            get: () => i.e(661).then((() => () => i(661))),
            from: s,
            eager: !1
          })
        })("react", "18.2.0"), u(525), u(489)), l.length ? e[t] = Promise.all(l).then((() => e[t] = 1)) : e[t] = 1
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
          var a = t[0],
            o = a < 0;
          o && (a = -a - 1);
          for (var i = 0, s = 1, u = !0;; s++, i++) {
            var l, f, c = s < t.length ? (typeof t[s])[0] : "";
            if (i >= n.length || "o" == (f = (typeof(l = n[i]))[0])) return !u || ("u" == c ? s > a && !o : "" == c != o);
            if ("u" == f) {
              if (!u || "u" != c) return !1
            } else if (u)
              if (c == f)
                if (s <= a) {
                  if (l != t[s]) return !1
                } else {
                  if (o ? l > t[s] : l < t[s]) return !1;
                  l != t[s] && (u = !1)
                }
            else if ("s" != c && "n" != c) {
              if (o || s <= a) return !1;
              u = !1, s--
            } else {
              if (s <= a || f < c != o) return !1;
              u = !1
            } else "s" != c && "n" != c && (u = !1, s--)
          }
        }
        var d = [],
          p = d.pop.bind(d);
        for (i = 1; i < t.length; i++) {
          var h = t[i];
          d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? r(h, n) : !p())
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
        var o = i.I(r);
        return o && o.then ? o.then(e.bind(e, r, i.S[r], t, n, a)) : e(r, i.S[r], t, n, a)
      })(((e, r, n, a, o) => {
        var s = r && i.o(r, n) && t(r, n, a);
        return s ? (e => (e.loaded = 1, e.get()))(s) : o()
      })),
      a = {},
      o = {
        822: () => n("default", "react", [1, 18, 2, 0], (() => i.e(661).then((() => () => i(661)))))
      },
      s = {
        781: [822]
      };
    i.f.consumes = (e, r) => {
      i.o(s, e) && s[e].forEach((e => {
        if (i.o(a, e)) return r.push(a[e]);
        var t = r => {
            a[e] = 0, i.m[e] = t => {
              delete i.c[e], t.exports = r()
            }
          },
          n = r => {
            delete a[e], i.m[e] = t => {
              throw delete i.c[e], r
            }
          };
        try {
          var s = o[e]();
          s.then ? r.push(a[e] = s.then(t).catch(n)) : t(s)
        } catch (e) {
          n(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        298: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          781: 1
        } [r] && t.push(e[r] = (e => new Promise(((r, t) => {
          var n = i.miniCssF(e),
            a = i.p + n;
          if (((e, r) => {
              for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                var a = (i = t[n]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (a === e || a === r)) return i
              }
              var o = document.getElementsByTagName("style");
              for (n = 0; n < o.length; n++) {
                var i;
                if ((a = (i = o[n]).getAttribute("data-href")) === e || a === r) return i
              }
            })(n, a)) return r();
          ((e, r, t, n, a) => {
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = t => {
              if (o.onerror = o.onload = null, "load" === t.type) n();
              else {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  s = t && t.target && t.target.href || r,
                  u = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED", u.type = i, u.request = s, o.parentNode.removeChild(o), a(u)
              }
            }, o.href = r, document.head.appendChild(o)
          })(e, a, 0, r, t)
        })))(r).then((() => {
          e[r] = 0
        }), (t => {
          throw delete e[r], t
        })))
      }
    }
  })(), (() => {
    var e = {
      298: 0
    };
    i.f.j = (r, t) => {
      var n = i.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var a = new Promise(((t, a) => n = e[r] = [t, a]));
          t.push(n[2] = a);
          var o = i.p + i.u(r),
            s = new Error;
          i.l(o, (t => {
            if (i.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              s.message = "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")", s.name = "ChunkLoadError", s.type = a, s.request = o, n[1](s)
            }
          }), "chunk-" + r, r)
        }
    };
    var r = (r, t) => {
        var n, a, o = t[0],
          s = t[1],
          u = t[2],
          l = 0;
        if (o.some((r => 0 !== e[r]))) {
          for (n in s) i.o(s, n) && (i.m[n] = s[n]);
          u && u(i)
        }
        for (r && r(t); l < o.length; l++) a = o[l], i.o(e, a) && e[a] && e[a][0](), e[a] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(812);
  modules_core_carousel = s
})();