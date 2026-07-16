try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8abf2482-a6fc-416b-8c83-0c54424978f2", e._sentryDebugIdIdentifier = "sentry-dbid-8abf2482-a6fc-416b-8c83-0c54424978f2")
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
  [7129, 9510], {
    47129(e, t, r) {
      r.r(t), r.d(t, {
        recipe: () => l
      });
      var a = r(34823);

      function n(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, a)
        }
        return r
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(r), !0).forEach(function(t) {
            var a, o, i;
            a = e, o = t, i = r[t], (o = n(o)) in a ? Object.defineProperty(a, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : a[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function s(e, t) {
        var r = {};
        for (var a in e) r[a] = t(e[a], a);
        return r
      }
      var f = (e, t, r) => {
        for (var a of Object.keys(e)) {
          var n;
          if (e[a] !== (null !== (n = t[a]) && void 0 !== n ? n : r[a])) return !1
        }
        return !0
      };

      function l(e, t) {
        var r, {
          variants: n = {},
          defaultVariants: o = {},
          compoundVariants: l = [],
          base: c
        } = e;
        if (c && "string" != typeof c) r = (0, a.iF)(c, t);
        else {
          var u = (0, a.iF)({});
          r = c ? "".concat(u, " ").concat(c) : u
        }
        var d = s(n, (e, r) => (0, a.cJ)(e, e => "string" == typeof e ? [e] : e, t ? "".concat(t, "_").concat(r) : r)),
          b = [];
        for (var {
            style: p,
            variants: y
          }
          of l) b.push([y, "string" == typeof p ? p : (0, a.iF)(p, "".concat(t, "_compound_").concat(b.length))]);
        var v = {
          defaultClassName: r,
          variantClassNames: d,
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
            var r = e.defaultClassName,
              a = i(i({}, e.defaultVariants), t);
            for (var n in a) {
              var o, s = null !== (o = a[n]) && void 0 !== o ? o : e.defaultVariants[n];
              if (null != s) {
                var l = s;
                "boolean" == typeof l && (l = !0 === l ? "true" : "false");
                var c = e.variantClassNames[n][l];
                c && (r += " " + c)
              }
            }
            for (var [u, d] of e.compoundVariants) f(u, a, e.defaultVariants) && (r += " " + d);
            return r
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