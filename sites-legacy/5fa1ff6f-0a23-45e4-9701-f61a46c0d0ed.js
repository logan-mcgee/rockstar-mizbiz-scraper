try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5fa1ff6f-0a23-45e4-9701-f61a46c0d0ed", e._sentryDebugIdIdentifier = "sentry-dbid-5fa1ff6f-0a23-45e4-9701-f61a46c0d0ed")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [3279], {
    86444(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var n = r(56763),
        o = r(34336);
      const c = (0, n.A)(o.A, "Map")
    },
    94508(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = r(34336).A.Symbol
    },
    86204(e, t, r) {
      r.d(t, {
        A: () => s
      });
      var n = r(94508),
        o = Object.prototype,
        c = o.hasOwnProperty,
        a = o.toString,
        u = n.A ? n.A.toStringTag : void 0;
      var i = Object.prototype.toString;
      var l = n.A ? n.A.toStringTag : void 0;
      const s = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? function(e) {
          var t = c.call(e, u),
            r = e[u];
          try {
            e[u] = void 0;
            var n = !0
          } catch (e) {}
          var o = a.call(e);
          return n && (t ? e[u] = r : delete e[u]), o
        }(e) : function(e) {
          return i.call(e)
        }(e)
      }
    },
    30570(e, t, r) {
      r.d(t, {
        A: () => a
      });
      var n = r(61044);
      const o = (0, r(79260).A)(Object.keys, Object);
      var c = Object.prototype.hasOwnProperty;
      const a = function(e) {
        if (!(0, n.A)(e)) return o(e);
        var t = [];
        for (var r in Object(e)) c.call(e, r) && "constructor" != r && t.push(r);
        return t
      }
    },
    35134(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = function(e) {
        return function(t) {
          return e(t)
        }
      }
    },
    79481(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
    },
    56763(e, t, r) {
      r.d(t, {
        A: () => A
      });
      var n = r(78709);
      const o = r(34336).A["__core-js_shared__"];
      var c, a = (c = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "";
      var u = r(45862),
        i = r(51836),
        l = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        f = Object.prototype,
        p = s.toString,
        b = f.hasOwnProperty,
        y = RegExp("^" + p.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const d = function(e) {
          return !(!(0, u.A)(e) || (t = e, a && a in t)) && ((0, n.A)(e) ? y : l).test((0, i.A)(e));
          var t
        },
        A = function(e, t) {
          var r = function(e, t) {
            return null == e ? void 0 : e[t]
          }(e, t);
          return d(r) ? r : void 0
        }
    },
    61105(e, t, r) {
      r.d(t, {
        A: () => m
      });
      var n = r(56763),
        o = r(34336);
      const c = (0, n.A)(o.A, "DataView");
      var a = r(86444);
      const u = (0, n.A)(o.A, "Promise"),
        i = (0, n.A)(o.A, "Set"),
        l = (0, n.A)(o.A, "WeakMap");
      var s = r(86204),
        f = r(51836),
        p = "[object Map]",
        b = "[object Promise]",
        y = "[object Set]",
        d = "[object WeakMap]",
        A = "[object DataView]",
        j = (0, f.A)(c),
        v = (0, f.A)(a.A),
        g = (0, f.A)(u),
        h = (0, f.A)(i),
        w = (0, f.A)(l),
        O = s.A;
      (c && O(new c(new ArrayBuffer(1))) != A || a.A && O(new a.A) != p || u && O(u.resolve()) != b || i && O(new i) != y || l && O(new l) != d) && (O = function(e) {
        var t = (0, s.A)(e),
          r = "[object Object]" == t ? e.constructor : void 0,
          n = r ? (0, f.A)(r) : "";
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
        return t
      });
      const m = O
    },
    61044(e, t, r) {
      r.d(t, {
        A: () => o
      });
      var n = Object.prototype;
      const o = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
      }
    },
    43192(e, t, r) {
      r.d(t, {
        A: () => u
      });
      var n = r(79481),
        o = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = o && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === o && n.A.process;
      const u = function() {
        try {
          return c && c.require && c.require("util").types || a && a.binding && a.binding("util")
        } catch (e) {}
      }()
    },
    79260(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = function(e, t) {
        return function(r) {
          return e(t(r))
        }
      }
    },
    34336(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var n = r(79481),
        o = "object" == typeof self && self && self.Object === Object && self;
      const c = n.A || o || Function("return this")()
    },
    51836(e, t, r) {
      r.d(t, {
        A: () => o
      });
      var n = Function.prototype.toString;
      const o = function(e) {
        if (null != e) {
          try {
            return n.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }
    },
    48348(e, t, r) {
      r.d(t, {
        A: () => s
      });
      var n = r(86204),
        o = r(96097);
      const c = function(e) {
        return (0, o.A)(e) && "[object Arguments]" == (0, n.A)(e)
      };
      var a = Object.prototype,
        u = a.hasOwnProperty,
        i = a.propertyIsEnumerable,
        l = c(function() {
          return arguments
        }()) ? c : function(e) {
          return (0, o.A)(e) && u.call(e, "callee") && !i.call(e, "callee")
        };
      const s = l
    },
    6700(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = Array.isArray
    },
    99651(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var n = r(78709),
        o = r(8933);
      const c = function(e) {
        return null != e && (0, o.A)(e.length) && !(0, n.A)(e)
      }
    },
    7269(e, t, r) {
      r.d(t, {
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
    78709(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var n = r(86204),
        o = r(45862);
      const c = function(e) {
        if (!(0, o.A)(e)) return !1;
        var t = (0, n.A)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
    },
    8933(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    45862(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    96097(e, t, r) {
      r.d(t, {
        A: () => n
      });
      const n = function(e) {
        return null != e && "object" == typeof e
      }
    },
    10312(e, t, r) {
      r.d(t, {
        A: () => s
      });
      var n = r(86204),
        o = r(8933),
        c = r(96097),
        a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
      var u = r(35134),
        i = r(43192),
        l = i.A && i.A.isTypedArray;
      const s = l ? (0, u.A)(l) : function(e) {
        return (0, c.A)(e) && (0, o.A)(e.length) && !!a[(0, n.A)(e)]
      }
    },
    51177(e, t, r) {
      r.d(t, {
        C6: () => o,
        Cl: () => c,
        Tt: () => a,
        YH: () => i,
        fX: () => f,
        gz: () => s,
        sH: () => u
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var c = function() {
        return c = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, c.apply(this, arguments)
      };

      function a(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function u(e, t, r, n) {
        return new(r || (r = Promise))(function(o, c) {
          function a(e) {
            try {
              i(n.next(e))
            } catch (e) {
              c(e)
            }
          }

          function u(e) {
            try {
              i(n.throw(e))
            } catch (e) {
              c(e)
            }
          }

          function i(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(a, u)
          }
          i((n = n.apply(e, t || [])).next())
        })
      }

      function i(e, t) {
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
                u = t.call(e, c)
              } catch (e) {
                u = [6, e], n = 0
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

      function l(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, c = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = c.next()).done;) a.push(n.value)
        } catch (e) {
          o = {
            error: e
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

      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
        return e
      }

      function f(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, c = t.length; o < c; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);