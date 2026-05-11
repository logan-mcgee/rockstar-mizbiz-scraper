try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "12e6dcf8-7bf2-4a21-a026-ba769c85b312", e._sentryDebugIdIdentifier = "sentry-dbid-12e6dcf8-7bf2-4a21-a026-ba769c85b312")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4972], {
    32067(e, t, r) {
      r.d(t, {
        DX: () => n.DX,
        xV: () => n.xV,
        s6: () => c
      });
      var n = r(39447),
        o = r(42295),
        a = r(71127),
        i = r(48989);
      const c = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? i.s6 : a.Fragment;
        return (0, o.jsx)(r, {
          ...t
        })
      }
    },
    95362(e, t, r) {
      r.d(t, {
        s: () => i,
        t: () => a
      });
      var n = r(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
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

      function i(...e) {
        return n.useCallback(a(...e), e)
      }
    },
    39447(e, t, r) {
      var n;
      r.d(t, {
        DX: () => u,
        TL: () => f,
        xV: () => _
      });
      var o = r(71127),
        a = r(95362),
        i = r(42295),
        c = Symbol.for("react.lazy"),
        s = (n || (n = r.t(o, 2)))[" use ".trim().toString()];

      function l(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === c && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function f(e) {
        const t = p(e),
          r = o.forwardRef((e, r) => {
            let {
              children: n,
              ...a
            } = e;
            l(n) && "function" == typeof s && (n = s(n._payload));
            const c = o.Children.toArray(n),
              f = c.find(b);
            if (f) {
              const e = f.props.children,
                n = c.map(t => t === f ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, i.jsx)(t, {
                ...a,
                ref: r,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, n) : null
              })
            }
            return (0, i.jsx)(t, {
              ...a,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var u = f("Slot");

      function p(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (l(r) && "function" == typeof s && (r = s(r._payload)), o.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              i = function(e, t) {
                const r = {
                  ...t
                };
                for (const n in t) {
                  const o = e[n],
                    a = t[n];
                  /^on[A-Z]/.test(n) ? o && a ? r[n] = (...e) => {
                    const t = a(...e);
                    return o(...e), t
                  } : o && (r[n] = o) : "style" === n ? r[n] = {
                    ...o,
                    ...a
                  } : "className" === n && (r[n] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== o.Fragment && (i.ref = t ? (0, a.t)(t, e) : e), o.cloneElement(r, i)
          }
          return o.Children.count(r) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var d = Symbol("radix.slottable");

      function y(e) {
        const t = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var _ = y("Slottable");

      function b(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    48989(e, t, r) {
      r.d(t, {
        bL: () => l,
        s6: () => s
      });
      var n = r(71127),
        o = (r(18429), r(39447)),
        a = r(42295),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, o.TL)(`Primitive.${t}`),
            i = n.forwardRef((e, n) => {
              const {
                asChild: o,
                ...i
              } = e, c = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(c, {
                ...i,
                ref: n
              })
            });
          return i.displayName = `Primitive.${t}`, {
            ...e,
            [t]: i
          }
        }, {}),
        c = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        s = n.forwardRef((e, t) => (0, a.jsx)(i.span, {
          ...e,
          ref: t,
          style: {
            ...c,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    78322(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => F,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => S,
        __asyncValues: () => E,
        __await: () => O,
        __awaiter: () => y,
        __classPrivateFieldGet: () => R,
        __classPrivateFieldIn: () => A,
        __classPrivateFieldSet: () => C,
        __createBinding: () => b,
        __decorate: () => c,
        __disposeResources: () => N,
        __esDecorate: () => l,
        __exportStar: () => h,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => D,
        __importStar: () => k,
        __makeTemplateObject: () => x,
        __metadata: () => d,
        __param: () => s,
        __propKey: () => u,
        __read: () => v,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => $,
        __runInitializers: () => f,
        __setFunctionName: () => p,
        __spread: () => m,
        __spreadArray: () => j,
        __spreadArrays: () => g,
        __values: () => w,
        default: () => V
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
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function c(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function s(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function l(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = n.kind, l = "getter" === s ? "get" : "setter" === s ? "set" : "value", f = !t && e ? n.static ? e : e.prototype : null, u = t || (f ? Object.getOwnPropertyDescriptor(f, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[d])("accessor" === s ? {
            get: u.get,
            set: u.set
          } : u[l], y);
          if ("accessor" === s) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (c = i(b.get)) && (u.get = c), (c = i(b.set)) && (u.set = c), (c = i(b.init)) && o.unshift(c)
          } else(c = i(b)) && ("field" === s ? o.unshift(c) : u[l] = c)
        }
        f && Object.defineProperty(f, n.name, u), p = !0
      }

      function f(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
      }

      function u(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function p(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
          function i(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              s(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, c)
          }
          s((n = n.apply(e, t || [])).next())
        })
      }

      function _(e, t) {
        var r, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function c(c) {
          return function(s) {
            return function(c) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      a.label = o[1], o = c;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(c);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
              } catch (e) {
                c = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, s])
          }
        }
      }
      var b = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var o = Object.getOwnPropertyDescriptor(t, r);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, o)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function h(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
      }

      function w(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function v(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function m() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
        return n
      }

      function j(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function O(e) {
        return this instanceof O ? (this.v = e, this) : new O(e)
      }

      function S(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, l)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              a.push([e, t, r, n]) > 1 || c(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function c(e, t) {
          try {
            (r = o[e](t)).value instanceof O ? Promise.resolve(r.value.v).then(s, l) : f(a[0][2], r)
          } catch (e) {
            f(a[0][3], e)
          }
          var r
        }

        function s(e) {
          c("next", e)
        }

        function l(e) {
          c("throw", e)
        }

        function f(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function P(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: O(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = w(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(n, o) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(n, o, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var T = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        I = function(e) {
          return I = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, I(e)
        };

      function k(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = I(e), n = 0; n < r.length; n++) "default" !== r[n] && b(t, e, r[n]);
        return T(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function R(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function C(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function A(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function F(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, o;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          o && (n = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var M = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function N(e) {
        function t(t) {
          e.error = e.hasError ? new M(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function o() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(a).then(o, function(e) {
                return t(e), o()
              })
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function $(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const V = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: l,
        __runInitializers: f,
        __propKey: u,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: _,
        __createBinding: b,
        __exportStar: h,
        __values: w,
        __read: v,
        __spread: m,
        __spreadArrays: g,
        __spreadArray: j,
        __await: O,
        __asyncGenerator: S,
        __asyncDelegator: P,
        __asyncValues: E,
        __makeTemplateObject: x,
        __importStar: k,
        __importDefault: D,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: A,
        __addDisposableResource: F,
        __disposeResources: N,
        __rewriteRelativeImportExtension: $
      }
    }
  }
]);