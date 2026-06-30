try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5572e42d-cdd3-4d9f-ba2d-3b3f6cd42e06", e._sentryDebugIdIdentifier = "sentry-dbid-5572e42d-cdd3-4d9f-ba2d-3b3f6cd42e06")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [31], {
    86444(e, t, o) {
      o.d(t, {
        A: () => c
      });
      var r = o(56763),
        n = o(34336);
      const c = (0, r.A)(n.A, "Map")
    },
    94508(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = o(34336).A.Symbol
    },
    86204(e, t, o) {
      o.d(t, {
        A: () => i
      });
      var r = o(94508),
        n = Object.prototype,
        c = n.hasOwnProperty,
        a = n.toString,
        u = r.A ? r.A.toStringTag : void 0;
      var s = Object.prototype.toString;
      var d = r.A ? r.A.toStringTag : void 0;
      const i = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : d && d in Object(e) ? function(e) {
          var t = c.call(e, u),
            o = e[u];
          try {
            e[u] = void 0;
            var r = !0
          } catch (e) {}
          var n = a.call(e);
          return r && (t ? e[u] = o : delete e[u]), n
        }(e) : function(e) {
          return s.call(e)
        }(e)
      }
    },
    30570(e, t, o) {
      o.d(t, {
        A: () => a
      });
      var r = o(61044);
      const n = (0, o(79260).A)(Object.keys, Object);
      var c = Object.prototype.hasOwnProperty;
      const a = function(e) {
        if (!(0, r.A)(e)) return n(e);
        var t = [];
        for (var o in Object(e)) c.call(e, o) && "constructor" != o && t.push(o);
        return t
      }
    },
    35134(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = function(e) {
        return function(t) {
          return e(t)
        }
      }
    },
    79481(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = "object" == typeof o.g && o.g && o.g.Object === Object && o.g
    },
    56763(e, t, o) {
      o.d(t, {
        A: () => y
      });
      var r = o(78709);
      const n = o(34336).A["__core-js_shared__"];
      var c, a = (c = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "";
      var u = o(45862),
        s = o(51836),
        d = /^\[object .+?Constructor\]$/,
        i = Function.prototype,
        b = Object.prototype,
        f = i.toString,
        l = b.hasOwnProperty,
        A = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const p = function(e) {
          return !(!(0, u.A)(e) || (t = e, a && a in t)) && ((0, r.A)(e) ? A : d).test((0, s.A)(e));
          var t
        },
        y = function(e, t) {
          var o = function(e, t) {
            return null == e ? void 0 : e[t]
          }(e, t);
          return p(o) ? o : void 0
        }
    },
    61105(e, t, o) {
      o.d(t, {
        A: () => O
      });
      var r = o(56763),
        n = o(34336);
      const c = (0, r.A)(n.A, "DataView");
      var a = o(86444);
      const u = (0, r.A)(n.A, "Promise"),
        s = (0, r.A)(n.A, "Set"),
        d = (0, r.A)(n.A, "WeakMap");
      var i = o(86204),
        b = o(51836),
        f = "[object Map]",
        l = "[object Promise]",
        A = "[object Set]",
        p = "[object WeakMap]",
        y = "[object DataView]",
        j = (0, b.A)(c),
        g = (0, b.A)(a.A),
        v = (0, b.A)(u),
        w = (0, b.A)(s),
        h = (0, b.A)(d),
        m = i.A;
      (c && m(new c(new ArrayBuffer(1))) != y || a.A && m(new a.A) != f || u && m(u.resolve()) != l || s && m(new s) != A || d && m(new d) != p) && (m = function(e) {
        var t = (0, i.A)(e),
          o = "[object Object]" == t ? e.constructor : void 0,
          r = o ? (0, b.A)(o) : "";
        if (r) switch (r) {
          case j:
            return y;
          case g:
            return f;
          case v:
            return l;
          case w:
            return A;
          case h:
            return p
        }
        return t
      });
      const O = m
    },
    61044(e, t, o) {
      o.d(t, {
        A: () => n
      });
      var r = Object.prototype;
      const n = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
      }
    },
    43192(e, t, o) {
      o.d(t, {
        A: () => u
      });
      var r = o(79481),
        n = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = n && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === n && r.A.process;
      const u = function() {
        try {
          return c && c.require && c.require("util").types || a && a.binding && a.binding("util")
        } catch (e) {}
      }()
    },
    79260(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = function(e, t) {
        return function(o) {
          return e(t(o))
        }
      }
    },
    34336(e, t, o) {
      o.d(t, {
        A: () => c
      });
      var r = o(79481),
        n = "object" == typeof self && self && self.Object === Object && self;
      const c = r.A || n || Function("return this")()
    },
    51836(e, t, o) {
      o.d(t, {
        A: () => n
      });
      var r = Function.prototype.toString;
      const n = function(e) {
        if (null != e) {
          try {
            return r.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }
    },
    48348(e, t, o) {
      o.d(t, {
        A: () => i
      });
      var r = o(86204),
        n = o(96097);
      const c = function(e) {
        return (0, n.A)(e) && "[object Arguments]" == (0, r.A)(e)
      };
      var a = Object.prototype,
        u = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        d = c(function() {
          return arguments
        }()) ? c : function(e) {
          return (0, n.A)(e) && u.call(e, "callee") && !s.call(e, "callee")
        };
      const i = d
    },
    6700(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = Array.isArray
    },
    99651(e, t, o) {
      o.d(t, {
        A: () => c
      });
      var r = o(78709),
        n = o(8933);
      const c = function(e) {
        return null != e && (0, n.A)(e.length) && !(0, r.A)(e)
      }
    },
    7269(e, t, o) {
      o.d(t, {
        A: () => u
      });
      var r = o(34336);
      var n = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = n && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === n ? r.A.Buffer : void 0;
      const u = (a ? a.isBuffer : void 0) || function() {
        return !1
      }
    },
    78709(e, t, o) {
      o.d(t, {
        A: () => c
      });
      var r = o(86204),
        n = o(45862);
      const c = function(e) {
        if (!(0, n.A)(e)) return !1;
        var t = (0, r.A)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }
    },
    8933(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    45862(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    96097(e, t, o) {
      o.d(t, {
        A: () => r
      });
      const r = function(e) {
        return null != e && "object" == typeof e
      }
    },
    10312(e, t, o) {
      o.d(t, {
        A: () => i
      });
      var r = o(86204),
        n = o(8933),
        c = o(96097),
        a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
      var u = o(35134),
        s = o(43192),
        d = s.A && s.A.isTypedArray;
      const i = d ? (0, u.A)(d) : function(e) {
        return (0, c.A)(e) && (0, n.A)(e.length) && !!a[(0, r.A)(e)]
      }
    }
  }
]);