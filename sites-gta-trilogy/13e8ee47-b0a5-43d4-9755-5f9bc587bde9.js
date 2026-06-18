try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13e8ee47-b0a5-43d4-9755-5f9bc587bde9", e._sentryDebugIdIdentifier = "sentry-dbid-13e8ee47-b0a5-43d4-9755-5f9bc587bde9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [207, 793], {
    4931(e, t, r) {
      var o = r(3082),
        n = Symbol.for("react.element"),
        c = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var o, c = {},
          l = null,
          s = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (s = t.ref), t) a.call(t, o) && !i.hasOwnProperty(o) && (c[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === c[o] && (c[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: s,
          props: c,
          _owner: u.current
        }
      }
      t.Fragment = c, t.jsx = l, t.jsxs = l
    },
    9793(e, t, r) {
      e.exports = r(4931)
    },
    6444(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var o = r(6763),
        n = r(4336);
      const c = (0, o.A)(n.A, "Map")
    },
    4508(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = r(4336).A.Symbol
    },
    6204(e, t, r) {
      r.d(t, {
        A: () => s
      });
      var o = r(4508),
        n = Object.prototype,
        c = n.hasOwnProperty,
        a = n.toString,
        u = o.A ? o.A.toStringTag : void 0;
      var i = Object.prototype.toString;
      var l = o.A ? o.A.toStringTag : void 0;
      const s = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : l && l in Object(e) ? function(e) {
          var t = c.call(e, u),
            r = e[u];
          try {
            e[u] = void 0;
            var o = !0
          } catch (e) {}
          var n = a.call(e);
          return o && (t ? e[u] = r : delete e[u]), n
        }(e) : function(e) {
          return i.call(e)
        }(e)
      }
    },
    570(e, t, r) {
      r.d(t, {
        A: () => a
      });
      var o = r(1044);
      const n = (0, r(6879).A)(Object.keys, Object);
      var c = Object.prototype.hasOwnProperty;
      const a = function(e) {
        if (!(0, o.A)(e)) return n(e);
        var t = [];
        for (var r in Object(e)) c.call(e, r) && "constructor" != r && t.push(r);
        return t
      }
    },
    5134(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = function(e) {
        return function(t) {
          return e(t)
        }
      }
    },
    9481(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g
    },
    6763(e, t, r) {
      r.d(t, {
        A: () => A
      });
      var o = r(8709);
      const n = r(4336).A["__core-js_shared__"];
      var c, a = (c = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "";
      var u = r(5862),
        i = r(1836),
        l = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        f = Object.prototype,
        p = s.toString,
        b = f.hasOwnProperty,
        y = RegExp("^" + p.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const d = function(e) {
          return !(!(0, u.A)(e) || (t = e, a && a in t)) && ((0, o.A)(e) ? y : l).test((0, i.A)(e));
          var t
        },
        A = function(e, t) {
          var r = function(e, t) {
            return null == e ? void 0 : e[t]
          }(e, t);
          return d(r) ? r : void 0
        }
    },
    1105(e, t, r) {
      r.d(t, {
        A: () => _
      });
      var o = r(6763),
        n = r(4336);
      const c = (0, o.A)(n.A, "DataView");
      var a = r(6444);
      const u = (0, o.A)(n.A, "Promise"),
        i = (0, o.A)(n.A, "Set"),
        l = (0, o.A)(n.A, "WeakMap");
      var s = r(6204),
        f = r(1836),
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
          o = r ? (0, f.A)(r) : "";
        if (o) switch (o) {
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
      const _ = O
    },
    1044(e, t, r) {
      r.d(t, {
        A: () => n
      });
      var o = Object.prototype;
      const n = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || o)
      }
    },
    3192(e, t, r) {
      r.d(t, {
        A: () => u
      });
      var o = r(9481),
        n = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = n && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === n && o.A.process;
      const u = function() {
        try {
          return c && c.require && c.require("util").types || a && a.binding && a.binding("util")
        } catch (e) {}
      }()
    },
    6879(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = function(e, t) {
        return function(r) {
          return e(t(r))
        }
      }
    },
    4336(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var o = r(9481),
        n = "object" == typeof self && self && self.Object === Object && self;
      const c = o.A || n || Function("return this")()
    },
    1836(e, t, r) {
      r.d(t, {
        A: () => n
      });
      var o = Function.prototype.toString;
      const n = function(e) {
        if (null != e) {
          try {
            return o.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }
    },
    8348(e, t, r) {
      r.d(t, {
        A: () => s
      });
      var o = r(6204),
        n = r(6097);
      const c = function(e) {
        return (0, n.A)(e) && "[object Arguments]" == (0, o.A)(e)
      };
      var a = Object.prototype,
        u = a.hasOwnProperty,
        i = a.propertyIsEnumerable,
        l = c(function() {
          return arguments
        }()) ? c : function(e) {
          return (0, n.A)(e) && u.call(e, "callee") && !i.call(e, "callee")
        };
      const s = l
    },
    6700(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = Array.isArray
    },
    9651(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var o = r(8709),
        n = r(8933);
      const c = function(e) {
        return null != e && (0, n.A)(e.length) && !(0, o.A)(e)
      }
    },
    7269(e, t, r) {
      r.d(t, {
        A: () => u
      });
      var o = r(4336);
      var n = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = n && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === n ? o.A.Buffer : void 0;
      const u = (a ? a.isBuffer : void 0) || function() {
        return !1
      }
    },
    8709(e, t, r) {
      r.d(t, {
        A: () => c
      });
      var o = r(6204),
        n = r(5862);
      const c = function(e) {
        if (!(0, n.A)(e)) return !1;
        var t = (0, o.A)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
    },
    8933(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    5862(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    6097(e, t, r) {
      r.d(t, {
        A: () => o
      });
      const o = function(e) {
        return null != e && "object" == typeof e
      }
    },
    312(e, t, r) {
      r.d(t, {
        A: () => s
      });
      var o = r(6204),
        n = r(8933),
        c = r(6097),
        a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
      var u = r(5134),
        i = r(3192),
        l = i.A && i.A.isTypedArray;
      const s = l ? (0, u.A)(l) : function(e) {
        return (0, c.A)(e) && (0, n.A)(e.length) && !!a[(0, o.A)(e)]
      }
    },
    1177(e, t, r) {
      r.d(t, {
        C6: () => n,
        Cl: () => c,
        Tt: () => a,
        YH: () => i,
        fX: () => l,
        sH: () => u
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var c = function() {
        return c = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, c.apply(this, arguments)
      };

      function a(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function u(e, t, r, o) {
        return new(r || (r = Promise))(function(n, c) {
          function a(e) {
            try {
              i(o.next(e))
            } catch (e) {
              c(e)
            }
          }

          function u(e) {
            try {
              i(o.throw(e))
            } catch (e) {
              c(e)
            }
          }

          function i(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(a, u)
          }
          i((o = o.apply(e, t || [])).next())
        })
      }

      function i(e, t) {
        var r, o, n, c = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
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
                if (r = 1, o && (n = 2 & u[0] ? o.return : u[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, u[1])).done) return n;
                switch (o = 0, n && (u = [2 & u[0], n.value]), u[0]) {
                  case 0:
                  case 1:
                    n = u;
                    break;
                  case 4:
                    return c.label++, {
                      value: u[1],
                      done: !1
                    };
                  case 5:
                    c.label++, o = u[1], u = [0];
                    continue;
                  case 7:
                    u = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = c.trys).length > 0 && n[n.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                      c.label = u[1];
                      break
                    }
                    if (6 === u[0] && c.label < n[1]) {
                      c.label = n[1], n = u;
                      break
                    }
                    if (n && c.label < n[2]) {
                      c.label = n[2], c.ops.push(u);
                      break
                    }
                    n[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                u = t.call(e, c)
              } catch (e) {
                u = [6, e], o = 0
              } finally {
                r = n = 0
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

      function l(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, c = t.length; n < c; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);