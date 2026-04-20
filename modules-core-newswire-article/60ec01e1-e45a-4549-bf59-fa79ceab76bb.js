try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "60ec01e1-e45a-4549-bf59-fa79ceab76bb", e._sentryDebugIdIdentifier = "sentry-dbid-60ec01e1-e45a-4549-bf59-fa79ceab76bb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6531], {
    9738: (e, t, r) => {
      var n = r(56130),
        o = r(28593),
        i = r(22909),
        u = Math.max,
        a = Math.min;
      e.exports = function(e, t, r) {
        var f, s, c, l, d, p, v = 0,
          y = !1,
          h = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var r = f,
            n = s;
          return f = s = void 0, v = t, l = e.apply(n, r)
        }

        function w(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || h && e - v >= c
        }

        function g() {
          var e = o();
          if (w(e)) return _(e);
          d = setTimeout(g, function(e) {
            var r = t - (e - p);
            return h ? a(r, c - (e - v)) : r
          }(e))
        }

        function _(e) {
          return d = void 0, b && f ? m(e) : (f = s = void 0, l)
        }

        function T() {
          var e = o(),
            r = w(e);
          if (f = arguments, s = this, p = e, r) {
            if (void 0 === d) return function(e) {
              return v = e, d = setTimeout(g, t), y ? m(e) : l
            }(p);
            if (h) return clearTimeout(d), d = setTimeout(g, t), m(p)
          }
          return void 0 === d && (d = setTimeout(g, t)), l
        }
        return t = i(t) || 0, n(r) && (y = !!r.leading, c = (h = "maxWait" in r) ? u(i(r.maxWait) || 0, t) : c, b = "trailing" in r ? !!r.trailing : b), T.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, f = p = s = d = void 0
        }, T.flush = function() {
          return void 0 === d ? l : _(o())
        }, T
      }
    },
    10533: (e, t, r) => {
      var n = r(86601);
      e.exports = function(e, t, r, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, t, r, o)
      }
    },
    10613: (e, t, r) => {
      var n = r(23117);
      e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
      }
    },
    22909: (e, t, r) => {
      var n = r(87625),
        o = r(56130),
        i = r(25733),
        u = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = a.test(e);
        return r || f.test(e) ? s(e.slice(2), r ? 2 : 8) : u.test(e) ? NaN : +e
      }
    },
    28593: (e, t, r) => {
      var n = r(15036);
      e.exports = function() {
        return n.Date.now()
      }
    },
    31454: (e, t, r) => {
      var n = r(49192);
      e.exports = function(e) {
        return n(e, 5)
      }
    },
    42295: (e, t, r) => {
      "use strict";
      e.exports = r(69245)
    },
    42649: e => {
      var t, r, n = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function u(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          r = i
        }
      }();
      var a, f = [],
        s = !1,
        c = -1;

      function l() {
        s && a && (s = !1, a.length ? f = a.concat(f) : c = -1, f.length && d())
      }

      function d() {
        if (!s) {
          var e = u(l);
          s = !0;
          for (var t = f.length; t;) {
            for (a = f, f = []; ++c < t;) a && a[c].run();
            c = -1, t = f.length
          }
          a = null, s = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function v() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        f.push(new p(e, t)), 1 !== f.length || s || u(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    69245: (e, t, r) => {
      "use strict";
      var n = r(71127),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        u = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, r) {
        var n, i = {},
          s = null,
          c = null;
        for (n in void 0 !== r && (s = "" + r), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) u.call(t, n) && !f.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: i,
          _owner: a.current
        }
      }
      t.Fragment = i, t.jsx = s, t.jsxs = s
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, o, i) {
        for (var u = -1, a = r(t((n - e) / (o || 1)), 0), f = Array(a); a--;) f[i ? a : ++u] = e, e += o;
        return f
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    86601: (e, t, r) => {
      var n = r(56312),
        o = r(78328),
        i = r(21574),
        u = r(56130),
        a = r(81966);
      e.exports = function(e, t, r, f) {
        if (!u(e)) return e;
        for (var s = -1, c = (t = o(t, e)).length, l = c - 1, d = e; null != d && ++s < c;) {
          var p = a(t[s]),
            v = r;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (s != l) {
            var y = d[p];
            void 0 === (v = f ? f(y, p, d) : void 0) && (v = u(y) ? y : i(t[s + 1]) ? [] : {})
          }
          n(d, p, v), d = d[p]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var n = r(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    95187: (e, t, r) => {
      var n = r(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => u,
        t: () => i
      });
      var n = r(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let r = !1;
          const n = e.map(e => {
            const n = o(e, t);
            return r || "function" != typeof n || (r = !0), n
          });
          if (r) return () => {
            for (let t = 0; t < n.length; t++) {
              const r = n[t];
              "function" == typeof r ? r() : o(e[t], null)
            }
          }
        }
      }

      function u(...e) {
        return n.useCallback(i(...e), e)
      }
    },
    98312: (e, t, r) => {
      var n = r(99335)();
      e.exports = n
    },
    99335: (e, t, r) => {
      var n = r(75888),
        o = r(4661),
        i = r(95187);
      e.exports = function(e) {
        return function(t, r, u) {
          return u && "number" != typeof u && o(t, r, u) && (r = u = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), u = void 0 === u ? t < r ? 1 : -1 : i(u), n(t, r, u, e)
        }
      }
    }
  }
]);