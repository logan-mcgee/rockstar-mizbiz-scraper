var modules_core_screenshot_viewer;
(() => {
  "use strict";
  var e, r, t, n, o = {
      288: (e, r, t) => {
        var n = {
            "./index": () => Promise.all([t.e(822), t.e(845)]).then((() => () => t(845)))
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
  i.m = o, i.c = a, i.d = (e, r) => {
    for (var t in r) i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((r, t) => (i.f[t](e, r), r)), [])), i.u = e => "js/" + {
    246: "d7aa18654c9777fb292a",
    661: "e1d23b1d0ae1f3d4c6d0",
    822: "2ed3d4a143cf6e9b791d",
    845: "18b75f9fdb8307175aa1"
  } [e] + ".js", i.miniCssF = e => "css/b51eb0c2a811f24c190f.css", i.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/modules-core-screenshot-viewer:", i.l = (t, n, o, a) => {
    if (e[t]) e[t].push(n);
    else {
      var s, u;
      if (void 0 !== o)
        for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
          var c = l[f];
          if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == r + o) {
            s = c;
            break
          }
        }
      s || (u = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", r + o), s.src = t), e[t] = [n];
      var d = (r, n) => {
          s.onerror = s.onload = null, clearTimeout(h);
          var o = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(n))), r) return r(n)
        },
        h = setTimeout(d.bind(null, void 0, {
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
  }, t = {}, n = {}, i.f.remotes = (e, r) => {
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
              var l = e(t, n);
              if (!l || !l.then) return s(l, i, u);
              var f = l.then((e => s(e, i)), a);
              if (!u) return f;
              r.push(o.p = f)
            } catch (e) {
              a(e)
            }
          },
          u = (e, r, n) => s(r.get, o[1], t, 0, l, n),
          l = r => {
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
          s = "@rockstargames/modules-core-screenshot-viewer",
          u = (e, r, t, n) => {
            var o = a[e] = a[e] || {},
              i = o[r];
            (!i || !i.loaded && (!n != !i.eager ? n : s > i.from)) && (o[r] = {
              get: t,
              from: s,
              eager: !!n
            })
          },
          l = [];
        return "default" === t && (u("react-router-dom", "6.6.1", (() => Promise.all([i.e(246), i.e(822)]).then((() => () => i(246))))), u("react", "18.2.0", (() => i.e(661).then((() => () => i(661)))))), e[t] = l.length ? Promise.all(l).then((() => e[t] = 1)) : 1
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
            var l, f, c = s < t.length ? (typeof t[s])[0] : "";
            if (i >= n.length || "o" == (f = (typeof(l = n[i]))[0])) return !u || ("u" == c ? s > o && !a : "" == c != a);
            if ("u" == f) {
              if (!u || "u" != c) return !1
            } else if (u)
              if (c == f)
                if (s <= o) {
                  if (l != t[s]) return !1
                } else {
                  if (a ? l > t[s] : l < t[s]) return !1;
                  l != t[s] && (u = !1)
                }
            else if ("s" != c && "n" != c) {
              if (a || s <= o) return !1;
              u = !1, s--
            } else {
              if (s <= o || f < c != a) return !1;
              u = !1
            } else "s" != c && "n" != c && (u = !1, s--)
          }
        }
        var d = [],
          h = d.pop.bind(d);
        for (i = 1; i < t.length; i++) {
          var p = t[i];
          d.push(1 == p ? h() | h() : 2 == p ? h() & h() : p ? r(p, n) : !h())
        }
        return !!h()
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
        822: () => n("default", "react", [1, 18, 2, 0], (() => i.e(661).then((() => () => i(661))))),
        163: () => n("default", "react-router-dom", [1, 6, 6, 1], (() => i.e(246).then((() => () => i(246)))))
      },
      s = {
        822: [822],
        845: [163]
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
        541: 0
      };
      i.f.miniCss = (r, t) => {
        e[r] ? t.push(e[r]) : 0 !== e[r] && {
          845: 1
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
      541: 0
    };
    i.f.j = (r, t) => {
      var n = i.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else if (822 != r) {
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
      } else e[r] = 0
    };
    var r = (r, t) => {
        var n, o, a = t[0],
          s = t[1],
          u = t[2],
          l = 0;
        if (a.some((r => 0 !== e[r]))) {
          for (n in s) i.o(s, n) && (i.m[n] = s[n]);
          u && u(i)
        }
        for (r && r(t); l < a.length; l++) o = a[l], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
      },
      t = self.webpackChunk_rockstargames_modules_core_screenshot_viewer = self.webpackChunk_rockstargames_modules_core_screenshot_viewer || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = i(288);
  modules_core_screenshot_viewer = s
})();