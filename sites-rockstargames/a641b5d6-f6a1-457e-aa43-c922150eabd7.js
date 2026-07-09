try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a641b5d6-f6a1-457e-aa43-c922150eabd7", e._sentryDebugIdIdentifier = "sentry-dbid-a641b5d6-f6a1-457e-aa43-c922150eabd7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1177], {
    51177(e, t, n) {
      n.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => l,
        YH: () => i,
        fX: () => u,
        gz: () => s,
        sH: () => f
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function l(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function f(e, t, n, r) {
        return new(n || (n = Promise))(function(o, a) {
          function l(e) {
            try {
              i(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function f(e) {
            try {
              i(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(l, f)
          }
          i((r = r.apply(e, t || [])).next())
        })
      }

      function i(e, t) {
        var n, r, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = f(0), l.throw = f(1), l.return = f(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
          return this
        }), l;

        function f(f) {
          return function(i) {
            return function(f) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; l && (l = 0, f[0] && (a = 0)), a;) try {
                if (n = 1, r && (o = 2 & f[0] ? r.return : f[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, f[1])).done) return o;
                switch (r = 0, o && (f = [2 & f[0], o.value]), f[0]) {
                  case 0:
                  case 1:
                    o = f;
                    break;
                  case 4:
                    return a.label++, {
                      value: f[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = f[1], f = [0];
                    continue;
                  case 7:
                    f = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== f[0] && 2 !== f[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === f[0] && (!o || f[1] > o[0] && f[1] < o[3])) {
                      a.label = f[1];
                      break
                    }
                    if (6 === f[0] && a.label < o[1]) {
                      a.label = o[1], o = f;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(f);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                f = t.call(e, a)
              } catch (e) {
                f = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & f[0]) throw f[1];
              return {
                value: f[0] ? f[1] : void 0,
                done: !0
              }
            }([f, i])
          }
        }
      }

      function c(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          l = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) l.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return l
      }

      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
        return e
      }

      function u(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);