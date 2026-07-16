try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6104cf83-563e-433f-84f7-316f70be101d", e._sentryDebugIdIdentifier = "sentry-dbid-6104cf83-563e-433f-84f7-316f70be101d")
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
  [31], {
    86444(e, t, r) {
      var o = r(56763),
        n = r(34336);
      const c = (0, o.A)(n.A, "Map");
      r.d(t, ["A", 0, c])
    },
    94508(e, t, r) {
      const o = r(34336).A.Symbol;
      r.d(t, ["A", 0, o])
    },
    86204(e, t, r) {
      r.d(t, {
        A: () => d
      });
      var o = r(94508),
        n = Object.prototype,
        c = n.hasOwnProperty,
        a = n.toString,
        u = o.A ? o.A.toStringTag : void 0;
      var s = Object.prototype.toString;
      var i = o.A ? o.A.toStringTag : void 0;
      const d = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? function(e) {
          var t = c.call(e, u),
            r = e[u];
          try {
            e[u] = void 0;
            var o = !0
          } catch (e) {}
          var n = a.call(e);
          return o && (t ? e[u] = r : delete e[u]), n
        }(e) : function(e) {
          return s.call(e)
        }(e)
      }
    },
    30570(e, t, r) {
      r.d(t, {
        A: () => a
      });
      var o = r(61044);
      const n = (0, r(79260).A)(Object.keys, Object);
      var c = Object.prototype.hasOwnProperty;
      const a = function(e) {
        if (!(0, o.A)(e)) return n(e);
        var t = [];
        for (var r in Object(e)) c.call(e, r) && "constructor" != r && t.push(r);
        return t
      }
    },
    35134(e, t, r) {
      r.d(t, ["A", 0, function(e) {
        return function(t) {
          return e(t)
        }
      }])
    },
    79481(e, t, r) {
      const o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      r.d(t, ["A", 0, o])
    },
    56763(e, t, r) {
      r.d(t, {
        A: () => y
      });
      var o = r(78709);
      const n = r(34336).A["__core-js_shared__"];
      var c, a = (c = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "";
      var u = r(45862),
        s = r(51836),
        i = /^\[object .+?Constructor\]$/,
        d = Function.prototype,
        f = Object.prototype,
        l = d.toString,
        b = f.hasOwnProperty,
        A = RegExp("^" + l.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      const p = function(e) {
          return !(!(0, u.A)(e) || (t = e, a && a in t)) && ((0, o.A)(e) ? A : i).test((0, s.A)(e));
          var t
        },
        y = function(e, t) {
          var r = function(e, t) {
            return null == e ? void 0 : e[t]
          }(e, t);
          return p(r) ? r : void 0
        }
    },
    61105(e, t, r) {
      r.d(t, {
        A: () => O
      });
      var o = r(56763),
        n = r(34336);
      const c = (0, o.A)(n.A, "DataView");
      var a = r(86444);
      const u = (0, o.A)(n.A, "Promise"),
        s = (0, o.A)(n.A, "Set"),
        i = (0, o.A)(n.A, "WeakMap");
      var d = r(86204),
        f = r(51836),
        l = "[object Map]",
        b = "[object Promise]",
        A = "[object Set]",
        p = "[object WeakMap]",
        y = "[object DataView]",
        j = (0, f.A)(c),
        g = (0, f.A)(a.A),
        v = (0, f.A)(u),
        w = (0, f.A)(s),
        h = (0, f.A)(i),
        m = d.A;
      (c && m(new c(new ArrayBuffer(1))) != y || a.A && m(new a.A) != l || u && m(u.resolve()) != b || s && m(new s) != A || i && m(new i) != p) && (m = function(e) {
        var t = (0, d.A)(e),
          r = "[object Object]" == t ? e.constructor : void 0,
          o = r ? (0, f.A)(r) : "";
        if (o) switch (o) {
          case j:
            return y;
          case g:
            return l;
          case v:
            return b;
          case w:
            return A;
          case h:
            return p
        }
        return t
      });
      const O = m
    },
    61044(e, t, r) {
      var o = Object.prototype;
      r.d(t, ["A", 0, function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || o)
      }])
    },
    43192(e, t, r) {
      var o = r(79481),
        n = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = n && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === n && o.A.process;
      const u = function() {
        try {
          return c && c.require && c.require("util").types || a && a.binding && a.binding("util")
        } catch (e) {}
      }();
      r.d(t, ["A", 0, u])
    },
    79260(e, t, r) {
      r.d(t, ["A", 0, function(e, t) {
        return function(r) {
          return e(t(r))
        }
      }])
    },
    34336(e, t, r) {
      var o = r(79481),
        n = "object" == typeof self && self && self.Object === Object && self;
      const c = o.A || n || Function("return this")();
      r.d(t, ["A", 0, c])
    },
    51836(e, t, r) {
      var o = Function.prototype.toString;
      r.d(t, ["A", 0, function(e) {
        if (null != e) {
          try {
            return o.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }])
    },
    48348(e, t, r) {
      r.d(t, {
        A: () => d
      });
      var o = r(86204),
        n = r(96097);
      const c = function(e) {
        return (0, n.A)(e) && "[object Arguments]" == (0, o.A)(e)
      };
      var a = Object.prototype,
        u = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        i = c(function() {
          return arguments
        }()) ? c : function(e) {
          return (0, n.A)(e) && u.call(e, "callee") && !s.call(e, "callee")
        };
      const d = i
    },
    6700(e, t, r) {
      const o = Array.isArray;
      r.d(t, ["A", 0, o])
    },
    99651(e, t, r) {
      var o = r(78709),
        n = r(8933);
      r.d(t, ["A", 0, function(e) {
        return null != e && (0, n.A)(e.length) && !(0, o.A)(e)
      }])
    },
    7269(e, t, r) {
      r.d(t, {
        A: () => u
      });
      var o = r(34336);
      var n = "object" == typeof exports && exports && !exports.nodeType && exports,
        c = n && "object" == typeof module && module && !module.nodeType && module,
        a = c && c.exports === n ? o.A.Buffer : void 0;
      const u = (a ? a.isBuffer : void 0) || function() {
        return !1
      }
    },
    78709(e, t, r) {
      var o = r(86204),
        n = r(45862);
      r.d(t, ["A", 0, function(e) {
        if (!(0, n.A)(e)) return !1;
        var t = (0, o.A)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
      }])
    },
    8933(e, t, r) {
      r.d(t, ["A", 0, function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }])
    },
    45862(e, t, r) {
      r.d(t, ["A", 0, function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }])
    },
    96097(e, t, r) {
      r.d(t, ["A", 0, function(e) {
        return null != e && "object" == typeof e
      }])
    },
    10312(e, t, r) {
      r.d(t, {
        A: () => d
      });
      var o = r(86204),
        n = r(8933),
        c = r(96097),
        a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
      var u = r(35134),
        s = r(43192),
        i = s.A && s.A.isTypedArray;
      const d = i ? (0, u.A)(i) : function(e) {
        return (0, c.A)(e) && (0, n.A)(e.length) && !!a[(0, o.A)(e)]
      }
    }
  }
]);