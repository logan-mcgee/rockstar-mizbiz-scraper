try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "449a913e-af6d-4cb5-8533-25e2df1c3a28", e._sentryDebugIdIdentifier = "sentry-dbid-449a913e-af6d-4cb5-8533-25e2df1c3a28")
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
  [6233, 8614], {
    78614(e, t, a) {
      a.r(t), a.d(t, {
        recipe: () => l
      });
      var r = a(46260);

      function n(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var a = t.call(e, "string");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function o(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), a.push.apply(a, r)
        }
        return a
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(a), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = a[t], (o = n(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          })
        }
        return e
      }

      function s(e, t) {
        var a = {};
        for (var r in e) a[r] = t(e[r], r);
        return a
      }
      var f = (e, t, a) => {
        for (var r of Object.keys(e)) {
          var n;
          if (e[r] !== (null !== (n = t[r]) && void 0 !== n ? n : a[r])) return !1
        }
        return !0
      };

      function l(e, t) {
        var a, {
          variants: n = {},
          defaultVariants: o = {},
          compoundVariants: l = [],
          base: d
        } = e;
        if (d && "string" != typeof d) a = (0, r.iF)(d, t);
        else {
          var u = (0, r.iF)({});
          a = d ? "".concat(u, " ").concat(d) : u
        }
        var c = s(n, (e, a) => (0, r.cJ)(e, e => "string" == typeof e ? [e] : e, t ? "".concat(t, "_").concat(a) : a)),
          b = [];
        for (var {
            style: p,
            variants: y
          }
          of l) b.push([y, "string" == typeof p ? p : (0, r.iF)(p, "".concat(t, "_compound_").concat(b.length))]);
        var v = {
          defaultClassName: a,
          variantClassNames: c,
          defaultVariants: o,
          compoundVariants: b
        };
        return function(e, t) {
          return Object.defineProperty(e, "__recipe__", {
            value: t,
            writable: !1
          }), e
        }((e => {
          var t = t => {
            var a = e.defaultClassName,
              r = i(i({}, e.defaultVariants), t);
            for (var n in r) {
              var o, s = null !== (o = r[n]) && void 0 !== o ? o : e.defaultVariants[n];
              if (null != s) {
                var l = s;
                "boolean" == typeof l && (l = !0 === l ? "true" : "false");
                var d = e.variantClassNames[n][l];
                d && (a += " " + d)
              }
            }
            for (var [u, c] of e.compoundVariants) f(u, r, e.defaultVariants) && (a += " " + c);
            return a
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return s(e.variantClassNames, e => s(e, e => e.split(" ")[0]))
            }
          }, t
        })(v), {
          importPath: "@vanilla-extract/recipes/createRuntimeFn",
          importName: "createRuntimeFn",
          args: [v]
        })
      }
    }
  }
]);