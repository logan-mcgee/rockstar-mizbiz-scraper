try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a42fa9fa-2b80-4fc3-8241-fa9aa07399e3", e._sentryDebugIdIdentifier = "sentry-dbid-a42fa9fa-2b80-4fc3-8241-fa9aa07399e3")
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
  [158, 2295, 7360, 8322, 9928], {
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    69245: (e, t, n) => {
      var r = n(71127),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function g(e, t, n) {
        var r, o = {},
          g = null,
          m = null;
        for (r in void 0 !== n && (g = "" + n), void 0 !== t.key && (g = "" + t.key), void 0 !== t.ref && (m = t.ref), t) i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: g,
          ref: m,
          props: o,
          _owner: s.current
        }
      }
      t.Fragment = o, t.jsx = g, t.jsxs = g
    },
    78322: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => P,
        __assign: () => o,
        __asyncDelegator: () => E,
        __asyncGenerator: () => I,
        __asyncValues: () => S,
        __await: () => h,
        __awaiter: () => _,
        __classPrivateFieldGet: () => M,
        __classPrivateFieldIn: () => k,
        __classPrivateFieldSet: () => A,
        __createBinding: () => f,
        __decorate: () => s,
        __disposeResources: () => x,
        __esDecorate: () => g,
        __exportStar: () => d,
        __extends: () => a,
        __generator: () => y,
        __importDefault: () => O,
        __importStar: () => G,
        __makeTemplateObject: () => v,
        __metadata: () => w,
        __param: () => l,
        __propKey: () => c,
        __read: () => F,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => N,
        __runInitializers: () => m,
        __setFunctionName: () => u,
        __spread: () => W,
        __spreadArray: () => R,
        __spreadArrays: () => b,
        __values: () => p,
        default: () => j
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

      function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          return e
        }, o.apply(this, arguments)
      };

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
        }
        return n
      }

      function s(e, t, n, r) {
        var a, o = arguments.length,
          i = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
        return o > 3 && i && Object.defineProperty(t, n, i), i
      }

      function l(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function g(e, t, n, r, a, o) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, l = r.kind, g = "getter" === l ? "get" : "setter" === l ? "set" : "value", m = !t && e ? r.static ? e : e.prototype : null, c = t || (m ? Object.getOwnPropertyDescriptor(m, r.name) : {}), u = !1, w = n.length - 1; w >= 0; w--) {
          var _ = {};
          for (var y in r) _[y] = "access" === y ? {} : r[y];
          for (var y in r.access) _.access[y] = r.access[y];
          _.addInitializer = function(e) {
            if (u) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(i(e || null))
          };
          var f = (0, n[w])("accessor" === l ? {
            get: c.get,
            set: c.set
          } : c[g], _);
          if ("accessor" === l) {
            if (void 0 === f) continue;
            if (null === f || "object" != typeof f) throw new TypeError("Object expected");
            (s = i(f.get)) && (c.get = s), (s = i(f.set)) && (c.set = s), (s = i(f.init)) && a.unshift(s)
          } else(s = i(f)) && ("field" === l ? a.unshift(s) : c[g] = s)
        }
        m && Object.defineProperty(m, r.name, c), u = !0
      }

      function m(e, t, n) {
        for (var r = arguments.length > 2, a = 0; a < t.length; a++) n = r ? t[a].call(e, n) : t[a].call(e);
        return r ? n : void 0
      }

      function c(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function u(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        })
      }

      function w(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function _(e, t, n, r) {
        return new(n || (n = Promise))(function(a, o) {
          function i(e) {
            try {
              l(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              l(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function l(e) {
            var t;
            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(i, s)
          }
          l((r = r.apply(e, t || [])).next())
        })
      }

      function y(e, t) {
        var n, r, a, o = {
            label: 0,
            sent: function() {
              if (1 & a[0]) throw a[1];
              return a[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(l) {
            return function(s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (o = 0)), o;) try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                  case 0:
                  case 1:
                    a = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, r = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < a[1]) {
                      o.label = a[1], a = s;
                      break
                    }
                    if (a && o.label < a[2]) {
                      o.label = a[2], o.ops.push(s);
                      break
                    }
                    a[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = t.call(e, o)
              } catch (e) {
                s = [6, e], r = 0
              } finally {
                n = a = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, l])
          }
        }
      }
      var f = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var a = Object.getOwnPropertyDescriptor(t, n);
        a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
          enumerable: !0,
          get: function() {
            return t[n]
          }
        }), Object.defineProperty(e, r, a)
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
      };

      function d(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || f(t, e, n)
      }

      function p(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function F(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, a, o = n.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) i.push(r.value)
        } catch (e) {
          a = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (a) throw a.error
          }
        }
        return i
      }

      function W() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(F(arguments[t]));
        return e
      }

      function b() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) r[a] = o[i];
        return r
      }

      function R(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function h(e) {
        return this instanceof h ? (this.v = e, this) : new h(e)
      }

      function I(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, a = n.apply(e, t || []),
          o = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, g)
          }
        }), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function i(e, t) {
          a[e] && (r[e] = function(t) {
            return new Promise(function(n, r) {
              o.push([e, t, n, r]) > 1 || s(e, t)
            })
          }, t && (r[e] = t(r[e])))
        }

        function s(e, t) {
          try {
            (n = a[e](t)).value instanceof h ? Promise.resolve(n.value.v).then(l, g) : m(o[0][2], n)
          } catch (e) {
            m(o[0][3], e)
          }
          var n
        }

        function l(e) {
          s("next", e)
        }

        function g(e) {
          s("throw", e)
        }

        function m(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function E(e) {
        var t, n;
        return t = {}, r("next"), r("throw", function(e) {
          throw e
        }), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, a) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? {
              value: h(e[r](t)),
              done: !1
            } : a ? a(t) : t
          } : a
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise(function(r, a) {
              ! function(e, t, n, r) {
                Promise.resolve(r).then(function(t) {
                  e({
                    value: t,
                    done: n
                  })
                }, t)
              }(r, a, (t = e[n](t)).done, t.value)
            })
          }
        }
      }

      function v(e, t) {
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
        C = function(e) {
          return C = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t
          }, C(e)
        };

      function G(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = C(e), r = 0; r < n.length; r++) "default" !== n[r] && f(t, e, n[r]);
        return T(t, e), t
      }

      function O(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function M(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function A(e, t, n, r, a) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !a) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? a.call(e, n) : a ? a.value = n : t.set(e, n), n
      }

      function k(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function P(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r, a;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (a = r)
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          a && (r = function() {
            try {
              a.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: r,
            async: n
          })
        } else n && e.stack.push({
          async: !0
        });
        return t
      }
      var D = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function x(e) {
        function t(t) {
          e.error = e.hasError ? new D(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var n, r = 0;
        return function a() {
          for (; n = e.stack.pop();) try {
            if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(a);
            if (n.dispose) {
              var o = n.dispose.call(n.value);
              if (n.async) return r |= 2, Promise.resolve(o).then(a, function(e) {
                return t(e), a()
              })
            } else r |= 1
          } catch (e) {
            t(e)
          }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function N(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, a, o) {
          return n ? t ? ".jsx" : ".js" : !r || a && o ? r + a + "." + o.toLowerCase() + "js" : e
        }) : e
      }
      const j = {
        __extends: a,
        __assign: o,
        __rest: i,
        __decorate: s,
        __param: l,
        __esDecorate: g,
        __runInitializers: m,
        __propKey: c,
        __setFunctionName: u,
        __metadata: w,
        __awaiter: _,
        __generator: y,
        __createBinding: f,
        __exportStar: d,
        __values: p,
        __read: F,
        __spread: W,
        __spreadArrays: b,
        __spreadArray: R,
        __await: h,
        __asyncGenerator: I,
        __asyncDelegator: E,
        __asyncValues: S,
        __makeTemplateObject: v,
        __importStar: G,
        __importDefault: O,
        __classPrivateFieldGet: M,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: k,
        __addDisposableResource: P,
        __disposeResources: x,
        __rewriteRelativeImportExtension: N
      }
    },
    96498: (e, t, n) => {
      n.r(t), n.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => a,
        RSG_CTA_FRAGMENT: () => o,
        RSG_GAME_FRAGMENT: () => i,
        RSG_ICON_FRAGMENT: () => s,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => g,
        RSG_VIDEO_FILE_FRAGMENT: () => D,
        RSG_VIDEO_FRAGMENT: () => x,
        SYS_FRAGMENT: () => m,
        WWW_BANNER_FRAGMENT: () => c,
        WWW_DECK_FRAGMENT: () => u,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => w,
        WWW_DIVIDER_FRAGMENT: () => _,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => y,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => f,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => d,
        WWW_GRID_FRAGMENT: () => p,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => F,
        WWW_GRID_WRAPPER_FRAGMENT: () => W,
        WWW_IMAGE_BLOCK_FRAGMENT: () => b,
        WWW_IMAGE_CARD_FRAGMENT: () => R,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => h,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => I,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => E,
        WWW_LINKOUT_IMAGE_FRAGMENT: () => S,
        WWW_MASONRY_GRID_FRAGMENT: () => v,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => T,
        WWW_PROMO_MODULE_FRAGMENT: () => C,
        WWW_SECTION_WRAPPER_FRAGMENT: () => O,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => M,
        WWW_TEXT_BLOCK_FRAGMENT: () => A,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => k,
        WWW_THEME_PROVIDER_FRAGMENT: () => P,
        WWW_VIDEO_PLAYER_FRAGMENT: () => N,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => G,
        wwwBottomSheetQuery: () => $,
        wwwPageQuery: () => j
      });
      var r = n(32467);
      const a = r.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        o = r.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        i = r.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ... on RsgImageFile {
          ...RsgImageFileFragment
        }
      }
    }
  }
}
`,
        s = r.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        l = r.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        g = r.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  sys {
    ...SysFragment
  }
  altText
  imageFilesCollection(
    limit: 8
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        m = r.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        c = r.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        u = r.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
      ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  cardsCollection(limit: 4) {
      items {
          __typename
          ... on WwwImageCard {
              ...WwwImageCardFragment
          }
          ... on WwwImageBlock {
            ...WwwImageBlockFragment
          }
      }
  }
}
`,
        w = r.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
        ...SysFragment
    }
    playbackBehavior
    scrimColor
    landscapeViewportBehavior
    overlayElements {
        ...WwwGridWrapperFragment
    }
    video {
        ...RsgVideoFragment
    }
    squareVideo {
        ...RsgVideoFragment
    }
}
`,
        _ = r.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
          ...SysFragment
    }
    thickness
    style
}
`,
        y = r.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        f = r.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
      navColor
    }
  }
}
`,
        d = r.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    sys {
      ...SysFragment
    }
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        p = r.gql`
fragment WwwGridFragment on WwwGrid {
    __typename
    sys {
        ...SysFragment
    }
    contentCollection(limit: 10) {
        items {
            ... on WwwTextBlock {
                ...WwwTextBlockFragment
            }
            ... on WwwImageCard {
                ...WwwImageCardFragment
            }
            ... on WwwImageBlock {
              ...WwwImageBlockFragment
            }
            ... on WwwImageCarousel {
              ...WwwImageCarouselFragment
            }
            ... on WwwLinkOutImage {
              ...WwwLinkOutImageFragment
            }
            ... on RsgImage {
              ...RsgImageFragment
            }
            ... on RsgImageFile {
              ...RsgImageFileFragment
            }
        }
    }
    layout {
        breakpointsCollection(limit: 8) {
            items {
                ... on WwwGridLayoutBreakpoint {
                    ...WwwGridLayoutBreakpointFragment
                }
            }
        }
    }
}
`,
        F = r.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
    __typename
    sys {
        ...SysFragment
    }
    mediaQuery
    columns
    behavior
    alignment
}
`,
        W = r.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
    __typename
    sys {
        ...SysFragment
    }
    title
    theme {
      ...WwwThemeProviderFragment
    }
    gap
    contentCollection(limit: 6) {
        items {
            ... on WwwGrid {
              ...WwwGridFragment
            }
        }
    }
}
`,
        b = r.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ... on RsgImageFile {
      ...RsgImageFileFragment
    }
    ... on WwwLightboxImage {
      ...WwwLightboxImageFragment
    }
  }
  textAlignment
  title
  titleSize
}
`,
        R = r.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        h = r.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ... on WwwImageBlock {
        ...WwwImageBlockFragment
      }
    }
  }
}
`,
        I = r.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        E = r.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        S = r.gql`
fragment WwwLinkOutImageFragment on WwwLinkOutImage {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  link {
    url
  }
  image {
    ...RsgImageFragment
  }
}
`,
        v = r.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      analyticsData
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        T = r.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        C = r.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        G = r.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
    __typename
    sys {
        ...SysFragment
    }
    tinaPageUrl
}
`,
        O = r.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  analyticsData
  title
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ... on RsgContentRating {
        ...RsgContentRatingFragment
      }
      ... on RsgImage {
        ...RsgImageFragment
      }
      ... on WwwBanner {
        ...WwwBannerFragment
      }
      ... on WwwEditorialGridModule {
        ...WwwEditorialGridModuleFragment
      }
      ... on WwwLinkOutImage {
        ...WwwLinkOutImageFragment
      }
      ... on WwwMasonryGrid {
        ...WwwMasonryGridFragment
      }
      ... on WwwNewsletterSubscribe {
        ...WwwNewsletterSubscribeFragment
      }
      ... on WwwDecorativeVideo {
        ...WwwDecorativeVideoFragment
      }
      ... on WwwDivider {
        ...WwwDividerFragment
      }
      ... on WwwGridWrapper {
        ...WwwGridWrapperFragment
      }
      ... on WwwDeck {
        ...WwwDeckFragment
      }
      ... on WwwSupportCalloutModule {
        ...WwwSupportCalloutModuleFragment
      }
      ... on WwwWebOfferClaim {
        ...WwwWebOfferClaimFragment
      }
    }
  }
}
`,
        M = r.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        A = r.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
    __typename
    sys {
        ...SysFragment
    }
    badge
    eyebrow
    header
    body
    ctasCollection(limit: 4) {
        items {
            __typename
            sys {
                ...SysFragment
            }
            ...RsgCtaFragment
        }
    }
    footnote
    headerSize
    bodySize
    alignment
    headerTextWrap
    bodyTextWrap
}
`,
        k = r.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ... on RsgRichText {
      __typename
      sys {
        ...SysFragment
      }
      content {
        json
      }
    }
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        P = r.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        D = r.gql`
fragment RsgVideoFileFragment on RsgVideoFile {
  __typename
  sys {
    ...SysFragment
  }
  codec
  context
  height
  posterImage {
    ...RsgImageFileFragment
  }
  upload {
    url
    title
  }
  url
  width
}
`,
        x = r.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
  videoFilesCollection(limit: 3) {
    items {
      ...RsgVideoFileFragment
    }
  }
}
`,
        N = r.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    ... on RsgGroup {
      referencesCollection(limit: 20) {
        items {
          ... on RsgVideo {
            ...RsgVideoFragment
          }
        }
      }
    }
  }
}
`,
        j = r.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ... on WwwDivider {
              ...WwwDividerFragment
            }
            ... on WwwFeaturedContentCarousel {
              ...WwwFeaturedContentCarouselFragment
            }
            ... on WwwFeaturedGameSection {
              ...WwwFeaturedGameSectionFragment
            }
            ... on WwwImagesMarqueeModule {
              ...WwwImagesMarqueeModuleFragment
            }
            ... on WwwPromoModule {
              ...WwwPromoModuleFragment
            }
            ... on WwwSectionWrapper {
              ...WwwSectionWrapperFragment
            }
            ... on WwwTextWithBadge {
              ...WwwTextWithBadgeFragment
            }
          }
        }
      }
    }
  }
  ${a}
  ${o}
  ${s}
  ${l}
  ${g}
  ${D}
  ${x}
  ${m}
  ${c}
  ${u}
  ${w}
  ${_}
  ${y}
  ${f}
  ${d}
  ${p}
  ${F}
  ${W}
  ${b}
  ${R}
  ${h}
  ${I}
  ${E}
  ${S}
  ${v}
  ${T}
  ${C}
  ${O}
  ${M}
  ${A}
  ${k}
  ${P}
  ${G}
`,
        $ = r.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ... on WwwVideoPlayer {
              ...WwwVideoPlayerFragment
            }
          }
        }
      }
    }
  }
  ${l}
  ${D}
  ${x}
  ${m}
  ${N}
`
    }
  }
]);