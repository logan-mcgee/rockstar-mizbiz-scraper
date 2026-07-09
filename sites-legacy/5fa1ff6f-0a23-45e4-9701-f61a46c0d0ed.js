try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5fa1ff6f-0a23-45e4-9701-f61a46c0d0ed", t._sentryDebugIdIdentifier = "sentry-dbid-5fa1ff6f-0a23-45e4-9701-f61a46c0d0ed")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [3279], {
    86444(t, e, r) {
      r.d(e, {
        A: () => c
      });
      var n = r(56763),
        o = r(34336);
      const c = (0, n.A)(o.A, "Map")
    },
    94508(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = r(34336).A.Symbol
    },
    86204(t, e, r) {
      r.d(e, {
        A: () => f
      });
      var n = r(94508),
        o = Object.prototype,
        c = o.hasOwnProperty,
        a = o.toString,
        u = n.A ? n.A.toStringTag : void 0;
      var i = Object.prototype.toString;
      var l = n.A ? n.A.toStringTag : void 0;
      const f = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : l && l in Object(t) ? function(t) {
          var e = c.call(t, u),
            r = t[u];
          try {
            t[u] = void 0;
            var n = !0
          } catch (t) {}
          var o = a.call(t);
          return n && (e ? t[u] = r : delete t[u]), o
        }(t) : function(t) {
          return i.call(t)
        }(t)
      }
    },
    30570(t, e, r) {
      r.d(e, {
        A: () => a
      });
      var n = r(61044);
      const o = (0, r(79260).A)(Object.keys, Object);
      var c = Object.prototype.hasOwnProperty;
      const a = function(t) {
        if (!(0, n.A)(t)) return o(t);
        var e = [];
        for (var r in Object(t)) c.call(t, r) && "constructor" != r && e.push(r);
        return e
      }
    },
    35134(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = function(t) {
        return function(e) {
          return t(e)
        }
      }
    },
    79481(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
    },
    56763(t, e, r) {
      r.d(e, {
        A: () => A
      });
      var n = r(78709);
      const o = r(34336).A["__core-js_shared__"];
      var c, a = (c = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "";
      var u = r(45862),
        i = r(51836),
        l = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        s = Object.prototype,
        p = f.toString,
        b = s.hasOwnProperty,
        y = RegExp("^" + p.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const d = function(t) {
          return !(!(0, u.A)(t) || (e = t, a && a in e)) && ((0, n.A)(t) ? y : l).test((0, i.A)(t));
          var e
        },
        A = function(t, e) {
          var r = function(t, e) {
            return null == t ? void 0 : t[e]
          }(t, e);
          return d(r) ? r : void 0
        }
    },
    61105(t, e, r) {
      r.d(e, {
        A: () => m
      });
      var n = r(56763),
        o = r(34336);
      const c = (0, n.A)(o.A, "DataView");
      var a = r(86444);
      const u = (0, n.A)(o.A, "Promise"),
        i = (0, n.A)(o.A, "Set"),
        l = (0, n.A)(o.A, "WeakMap");
      var f = r(86204),
        s = r(51836),
        p = "[object Map]",
        b = "[object Promise]",
        y = "[object Set]",
        d = "[object WeakMap]",
        A = "[object DataView]",
        j = (0, s.A)(c),
        v = (0, s.A)(a.A),
        g = (0, s.A)(u),
        h = (0, s.A)(i),
        w = (0, s.A)(l),
        O = f.A;
      (c && O(new c(new ArrayBuffer(1))) != A || a.A && O(new a.A) != p || u && O(u.resolve()) != b || i && O(new i) != y || l && O(new l) != d) && (O = function(t) {
        var e = (0, f.A)(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          n = r ? (0, s.A)(r) : "";
        if (n) switch (n) {
          case j:
            return A;
          case v:
            return p;
          case g:
            return b;
          case h:
            return y;
          case w:
            return d
        }
        return e
      });
      const m = O
    },
    61044(t, e, r) {
      r.d(e, {
        A: () => o
      });
      var n = Object.prototype;
      const o = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
      }
    },
    43192(t, e, r) {
      r.d(e, {
        A: () => u
      });
      var n = r(79481),
        o = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = o && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === o && n.A.process;
      const u = function() {
        try {
          return c && c.require && c.require("util").types || a && a.binding && a.binding("util")
        } catch (t) {}
      }()
    },
    79260(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = function(t, e) {
        return function(r) {
          return t(e(r))
        }
      }
    },
    34336(t, e, r) {
      r.d(e, {
        A: () => c
      });
      var n = r(79481),
        o = "object" == typeof self && self && self.Object === Object && self;
      const c = n.A || o || Function("return this")()
    },
    51836(t, e, r) {
      r.d(e, {
        A: () => o
      });
      var n = Function.prototype.toString;
      const o = function(t) {
        if (null != t) {
          try {
            return n.call(t)
          } catch (t) {}
          try {
            return t + ""
          } catch (t) {}
        }
        return ""
      }
    },
    48348(t, e, r) {
      r.d(e, {
        A: () => f
      });
      var n = r(86204),
        o = r(96097);
      const c = function(t) {
        return (0, o.A)(t) && "[object Arguments]" == (0, n.A)(t)
      };
      var a = Object.prototype,
        u = a.hasOwnProperty,
        i = a.propertyIsEnumerable,
        l = c(function() {
          return arguments
        }()) ? c : function(t) {
          return (0, o.A)(t) && u.call(t, "callee") && !i.call(t, "callee")
        };
      const f = l
    },
    6700(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = Array.isArray
    },
    99651(t, e, r) {
      r.d(e, {
        A: () => c
      });
      var n = r(78709),
        o = r(8933);
      const c = function(t) {
        return null != t && (0, o.A)(t.length) && !(0, n.A)(t)
      }
    },
    7269(t, e, r) {
      r.d(e, {
        A: () => u
      });
      var n = r(34336);
      var o = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = o && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === o ? n.A.Buffer : void 0;
      const u = (a ? a.isBuffer : void 0) || function() {
        return !1
      }
    },
    78709(t, e, r) {
      r.d(e, {
        A: () => c
      });
      var n = r(86204),
        o = r(45862);
      const c = function(t) {
        if (!(0, o.A)(t)) return !1;
        var e = (0, n.A)(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
      }
    },
    8933(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      }
    },
    45862(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    96097(t, e, r) {
      r.d(e, {
        A: () => n
      });
      const n = function(t) {
        return null != t && "object" == typeof t
      }
    },
    10312(t, e, r) {
      r.d(e, {
        A: () => f
      });
      var n = r(86204),
        o = r(8933),
        c = r(96097),
        a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
      var u = r(35134),
        i = r(43192),
        l = i.A && i.A.isTypedArray;
      const f = l ? (0, u.A)(l) : function(t) {
        return (0, c.A)(t) && (0, o.A)(t.length) && !!a[(0, n.A)(t)]
      }
    },
    51177(t, e, r) {
      r.d(e, {
        C6: () => o,
        Cl: () => c,
        Tt: () => a,
        YH: () => i,
        fX: () => s,
        gz: () => f,
        sH: () => u
      });
      var n = function(t, e) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }, n(t, e)
      };

      function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function r() {
          this.constructor = t
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
      }
      var c = function() {
        return c = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
            for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t
        }, c.apply(this, arguments)
      };

      function a(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
        }
        return r
      }

      function u(t, e, r, n) {
        return new(r || (r = Promise))(function(o, c) {
          function a(t) {
            try {
              i(n.next(t))
            } catch (t) {
              c(t)
            }
          }

          function u(t) {
            try {
              i(n.throw(t))
            } catch (t) {
              c(t)
            }
          }

          function i(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
              t(e)
            })).then(a, u)
          }
          i((n = n.apply(t, e || [])).next())
        })
      }

      function i(t, e) {
        var r, n, o, c = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = u(0), a.throw = u(1), a.return = u(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function u(u) {
          return function(i) {
            return function(u) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, u[0] && (c = 0)), c;) try {
                if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return c.label++, {
                      value: u[1],
                      done: !1
                    };
                  case 5:
                    c.label++, n = u[1], u = [0];
                    continue;
                  case 7:
                    u = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      c.label = u[1];
                      break
                    }
                    if (6 === u[0] && c.label < o[1]) {
                      c.label = o[1], o = u;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(u);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                u = e.call(t, c)
              } catch (t) {
                u = [6, t], n = 0
              } finally {
                r = o = 0
              }
              if (5 & u[0]) throw u[1];
              return {
                value: u[0] ? u[1] : void 0,
                done: !0
              }
            }([u, i])
          }
        }
      }

      function l(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, o, c = r.call(t),
          a = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(n = c.next()).done;) a.push(n.value)
        } catch (t) {
          o = {
            error: t
          }
        } finally {
          try {
            n && !n.done && (r = c.return) && r.call(c)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }

      function f() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(l(arguments[e]));
        return t
      }

      function s(t, e, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, c = e.length; o < c; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
        return t.concat(n || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);