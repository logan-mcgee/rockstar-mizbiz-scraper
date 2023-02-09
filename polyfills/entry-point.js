var polyfills;
(() => {
  "use strict";
  var e, r, t, o, n = {},
    i = {};

  function a(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var t = i[e] = {
      exports: {}
    };
    return n[e](t, t.exports, a), t.exports
  }
  a.m = n, a.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return a.d(r, {
      a: r
    }), r
  }, a.d = (e, r) => {
    for (var t in r) a.o(r, t) && !a.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: r[t]
    })
  }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((r, t) => (a.f[t](e, r), r)), [])), a.u = e => "js/f9574de7f6587dc111b8.js", a.miniCssF = e => {}, a.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), a.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "@rockstargames/polyfills:", a.l = (t, o, n, i) => {
    if (e[t]) e[t].push(o);
    else {
      var s, l;
      if (void 0 !== n)
        for (var u = document.getElementsByTagName("script"), p = 0; p < u.length; p++) {
          var c = u[p];
          if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == r + n) {
            s = c;
            break
          }
        }
      s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", r + n), s.src = t), e[t] = [o];
      var f = (r, o) => {
          s.onerror = s.onload = null, clearTimeout(d);
          var n = e[t];
          if (delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e => e(o))), r) return r(o)
        },
        d = setTimeout(f.bind(null, void 0, {
          type: "timeout",
          target: s
        }), 12e4);
      s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), l && document.head.appendChild(s)
    }
  }, a.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t = {}, o = {}, a.f.remotes = (e, r) => {
    a.o(t, e) && t[e].forEach((e => {
      var t = a.R;
      t || (t = []);
      var n = o[e];
      if (!(t.indexOf(n) >= 0)) {
        if (t.push(n), n.p) return r.push(n.p);
        var i = r => {
            r || (r = new Error("Container missing")), "string" == typeof r.message && (r.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), a.m[e] = () => {
              throw r
            }, n.p = 0
          },
          s = (e, t, o, a, s, l) => {
            try {
              var u = e(t, o);
              if (!u || !u.then) return s(u, a, l);
              var p = u.then((e => s(e, a)), i);
              if (!l) return p;
              r.push(n.p = p)
            } catch (e) {
              i(e)
            }
          },
          l = (e, r, o) => s(r.get, n[1], t, 0, u, o),
          u = r => {
            n.p = 1, a.m[e] = e => {
              e.exports = r()
            }
          };
        s(a, n[2], 0, 0, ((e, r, t) => e ? s(a.I, n[0], 0, e, l, t) : i()), 1)
      }
    }))
  }, (() => {
    a.S = {};
    var e = {},
      r = {};
    a.I = (t, o) => {
      o || (o = []);
      var n = r[t];
      if (n || (n = r[t] = {}), !(o.indexOf(n) >= 0)) {
        if (o.push(n), e[t]) return e[t];
        a.o(a.S, t) || (a.S[t] = {}), a.S[t];
        var i = [];
        return e[t] = i.length ? Promise.all(i).then((() => e[t] = 1)) : 1
      }
    }
  })(), (() => {
    var e;
    a.g.importScripts && (e = a.g.location + "");
    var r = a.g.document;
    if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
      var t = r.getElementsByTagName("script");
      t.length && (e = t[t.length - 1].src)
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
  })(), (() => {
    var e = {
      429: 0
    };
    a.f.j = (r, t) => {
      var o = a.o(e, r) ? e[r] : void 0;
      if (0 !== o)
        if (o) t.push(o[2]);
        else {
          var n = new Promise(((t, n) => o = e[r] = [t, n]));
          t.push(o[2] = n);
          var i = a.p + a.u(r),
            s = new Error;
          a.l(i, (t => {
            if (a.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              s.message = "Loading chunk " + r + " failed.\n(" + n + ": " + i + ")", s.name = "ChunkLoadError", s.type = n, s.request = i, o[1](s)
            }
          }), "chunk-" + r, r)
        }
    };
    var r = (r, t) => {
        var o, n, i = t[0],
          s = t[1],
          l = t[2],
          u = 0;
        if (i.some((r => 0 !== e[r]))) {
          for (o in s) a.o(s, o) && (a.m[o] = s[o]);
          l && l(a)
        }
        for (r && r(t); u < i.length; u++) n = i[u], a.o(e, n) && e[n] && e[n][0](), e[n] = 0
      },
      t = self.webpackChunk_rockstargames_polyfills = self.webpackChunk_rockstargames_polyfills || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
  })();
  var s, l, u, p, c = {};
  s = c, l = {
    "./browser": () => a.e(618).then((() => () => a(3618)))
  }, u = (e, r) => (a.R = r, r = a.o(l, e) ? l[e]() : Promise.resolve().then((() => {
    throw new Error('Module "' + e + '" does not exist in container.')
  })), a.R = void 0, r), p = (e, r) => {
    if (a.S) {
      var t = "default",
        o = a.S[t];
      if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
      return a.S[t] = e, a.I(t, r)
    }
  }, a.d(s, {
    get: () => u,
    init: () => p
  }), polyfills = c
})();