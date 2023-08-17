var intl;
(() => {
  "use strict";
  var e, r, t, n, a = {
      288: (e, r, t) => {
        var n = {
            "./index": () => Promise.all([t.e(742), t.e(63)]).then((() => () => t(63)))
          },
          a = (e, r) => (t.R = r, r = t.o(n, e) ? n[e]() : Promise.resolve().then((() => {
            throw new Error('Module "' + e + '" does not exist in container.')
          })), t.R = void 0, r),
          i = (e, r) => {
            if (t.S) {
              var n = "default",
                a = t.S[n];
              if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return t.S[n] = e, t.I(n, r)
            }
          };
        t.d(r, {
          get: () => a,
          init: () => i
        })
      },
      810: (e, r, t) => {
        var n = new Error;
        e.exports = new Promise(((e, r) => {
          if ("undefined" != typeof utils) return e();
          t.l(window.mfe.path("@rockstargames/utils"), (t => {
            if ("undefined" != typeof utils) return e();
            var a = t && ("load" === t.type ? "missing" : t.type),
              i = t && t.target && t.target.src;
            n.message = "Loading script failed.\n(" + a + ": " + i + ")", n.name = "ScriptExternalLoadError", n.type = a, n.request = i, r(n)
          }), "utils")
        })).then((() => utils))
      }
    },
    i = {};

  function o(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var t = i[e] = {
      exports: {}
    };
    return a[e](t, t.exports, o), t.exports
  }
  o.m = a, o.c = i, o.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return o.d(r, {
      a: r
    }), r
  }, o.d = (e, r) => {
    for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((r, t) => (o.f[t](e, r), r)), [])), o.u = e => "js/" + {
    63: "1e4c6d72062a047313ad",
    252: "6716ace7863b42c34f4b",
    742: "907200518539520f6d01"
  } [e] + ".js", o.miniCssF = e => {}, o.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/intl:", o.l = (t, n, a, i) => {
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
      s || (u = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", r + a), s.src = t), e[t] = [n];
      var p = (r, n) => {
          s.onerror = s.onload = null, clearTimeout(d);
          var a = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e => e(n))), r) return r(n)
        },
        d = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = p.bind(null, s.onerror), s.onload = p.bind(null, s.onload), u && document.head.appendChild(s)
    }
  }, o.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {
    63: [657]
  }, n = {
    657: ["default", "./hooks", 810]
  }, o.f.remotes = (e, r) => {
    o.o(t, e) && t[e].forEach((e => {
      var t = o.R;
      t || (t = []);
      var a = n[e];
      if (!(t.indexOf(a) >= 0)) {
        if (t.push(a), a.p) return r.push(a.p);
        var i = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), o.m[e] = () => {
              throw r
            }, a.p = 0
          },
          s = (e, t, n, o, s, u) => {
            try {
              var l = e(t, n);
              if (!l || !l.then) return s(l, o, u);
              var f = l.then((e => s(e, o)), i);
              if (!u) return f;
              r.push(a.p = f)
            } catch (e) {
              i(e)
            }
          },
          u = (e, r, n) => s(r.get, a[1], t, 0, l, n),
          l = r => {
            a.p = 1, o.m[e] = e => {
              e.exports = r()
            }
          };
        s(o, a[2], 0, 0, ((e, r, t) => e ? s(o.I, a[0], 0, e, u, t) : i()), 1)
      }
    }))
  }, (() => {
    o.S = {};
    var e = {},
      r = {};
    o.I = (t, n) => {
      n || (n = []);
      var a = r[t];
      if (a || (a = r[t] = {}), !(n.indexOf(a) >= 0)) {
        if (n.push(a), e[t]) return e[t];
        o.o(o.S, t) || (o.S[t] = {});
        var i = o.S[t],
          s = "@rockstargames/intl",
          u = [];
        return "default" === t && (((e, r, t, n) => {
          var a = i[e] = i[e] || {},
            u = a[r];
          (!u || !u.loaded && (1 != !u.eager ? n : s > u.from)) && (a[r] = {
            get: () => o.e(252).then((() => () => o(252))),
            from: s,
            eager: !1
          })
        })("react", "18.2.0"), (e => {
          var r = e => {
            return r = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(r));
            var r
          };
          try {
            var a = o(810);
            if (!a) return;
            var i = e => e && e.init && e.init(o.S[t], n);
            if (a.then) return u.push(a.then(i, r));
            var s = i(a);
            if (s && s.then) return u.push(s.catch(r))
          } catch (e) {
            r(e)
          }
        })()), u.length ? e[t] = Promise.all(u).then((() => e[t] = 1)) : e[t] = 1
      }
    }
  })(), (() => {
    var e;
    o.g.importScripts && (e = o.g.location + "");
    var r = o.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      if (t.length)
        for (var n = t.length - 1; n > -1 && !e;) e = t[n--].src
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
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
            i = a < 0;
          i && (a = -a - 1);
          for (var o = 0, s = 1, u = !0;; s++, o++) {
            var l, f, c = s < t.length ? (typeof t[s])[0] : "";
            if (o >= n.length || "o" == (f = (typeof(l = n[o]))[0])) return !u || ("u" == c ? s > a && !i : "" == c != i);
            if ("u" == f) {
              if (!u || "u" != c) return !1
            } else if (u)
              if (c == f)
                if (s <= a) {
                  if (l != t[s]) return !1
                } else {
                  if (i ? l > t[s] : l < t[s]) return !1;
                  l != t[s] && (u = !1)
                }
            else if ("s" != c && "n" != c) {
              if (i || s <= a) return !1;
              u = !1, s--
            } else {
              if (s <= a || f < c != i) return !1;
              u = !1
            } else "s" != c && "n" != c && (u = !1, s--)
          }
        }
        var p = [],
          d = p.pop.bind(p);
        for (o = 1; o < t.length; o++) {
          var h = t[o];
          p.push(1 == h ? d() | d() : 2 == h ? d() & d() : h ? r(h, n) : !d())
        }
        return !!d()
      },
      t = (t, n, a) => {
        var i = t[n];
        return (n = Object.keys(i).reduce(((t, n) => !r(a, n) || t && !((r, t) => {
          r = e(r), t = e(t);
          for (var n = 0;;) {
            if (n >= r.length) return n < t.length && "u" != (typeof t[n])[0];
            var a = r[n],
              i = (typeof a)[0];
            if (n >= t.length) return "u" == i;
            var o = t[n],
              s = (typeof o)[0];
            if (i != s) return "o" == i && "n" == s || "s" == s || "u" == i;
            if ("o" != i && "u" != i && a != o) return a < o;
            n++
          }
        })(t, n) ? t : n), 0)) && i[n]
      },
      n = (e => function(r, t, n, a) {
        var i = o.I(r);
        return i && i.then ? i.then(e.bind(e, r, o.S[r], t, n, a)) : e(r, o.S[r], t, n, a)
      })(((e, r, n, a, i) => {
        var s = r && o.o(r, n) && t(r, n, a);
        return s ? (e => (e.loaded = 1, e.get()))(s) : i()
      })),
      a = {},
      i = {
        932: () => n("default", "react", [1, 18, 2, 0], (() => o.e(252).then((() => () => o(252)))))
      },
      s = {
        63: [932]
      };
    o.f.consumes = (e, r) => {
      o.o(s, e) && s[e].forEach((e => {
        if (o.o(a, e)) return r.push(a[e]);
        var t = r => {
            a[e] = 0, o.m[e] = t => {
              delete o.c[e], t.exports = r()
            }
          },
          n = r => {
            delete a[e], o.m[e] = t => {
              throw delete o.c[e], r
            }
          };
        try {
          var s = i[e]();
          s.then ? r.push(a[e] = s.then(t).catch(n)) : t(s)
        } catch (e) {
          n(e)
        }
      }))
    }
  })(), (() => {
    var e = {
      471: 0
    };
    o.f.j = (r, t) => {
      var n = o.o(e, r) ? e[r] : void 0;
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var a = new Promise(((t, a) => n = e[r] = [t, a]));
          t.push(n[2] = a);
          var i = o.p + o.u(r),
            s = new Error;
          o.l(i, (t => {
            if (o.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
              var a = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              s.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")", s.name = "ChunkLoadError", s.type = a, s.request = i, n[1](s)
            }
          }), "chunk-" + r, r)
        }
    };
    var r = (r, t) => {
        var n, a, i = t[0],
          s = t[1],
          u = t[2],
          l = 0;
        if (i.some((r => 0 !== e[r]))) {
          for (n in s) o.o(s, n) && (o.m[n] = s[n]);
          u && u(o)
        }
        for (r && r(t); l < i.length; l++) a = i[l], o.o(e, a) && e[a] && e[a][0](), e[a] = 0
      },
      t = self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s = o(288);
  intl = s
})();