try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f2646272-cca4-4c9b-8374-b39c3d4d9baf", e._sentryDebugIdIdentifier = "sentry-dbid-f2646272-cca4-4c9b-8374-b39c3d4d9baf")
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
  [2295, 4676, 8379, 9407], {
    23644: (e, t, r) => {
      "use strict";

      function n(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function i(e, t) {
        var r = e;
        for (var n of t) {
          if (!(n in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[n]
        }
        return r
      }

      function o(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          n = {};
        for (var i in e) {
          var s = e[i],
            a = [...r, i];
          "string" == typeof s || "number" == typeof s || null == s ? n[i] = t(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : n[i] = o(s, t, a)
        }
        return n
      }
      r.d(t, {
        Bx: () => o,
        Jt: () => i,
        Tm: () => n
      })
    },
    25778: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => o
      });
      var n = r(86825);
      const i = e => "dark" === e ? n.xW.dark : n.xW.light,
        o = (e, t) => [n.xW.tokens, n.xW.typography, i(e)].join(" ")
    },
    31130: (e, t, r) => {
      "use strict";

      function n(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }
      r.d(t, {
        _: () => n
      })
    },
    32067: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => n.Slot,
        xV: () => n.Slottable,
        s6: () => a
      });
      var n = r(44473),
        i = r(42295),
        o = r(71127),
        s = r(75881);
      const a = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? s.VisuallyHidden : o.Fragment;
        return (0, i.jsx)(r, {
          ...t
        })
      }
    },
    35412: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nf: () => i
      });
      let n = !1;

      function i() {
        return n
      }
    },
    35612: (e, t, r) => {
      "use strict";
      r.d(t, {
        b: () => o
      });
      const n = /^(on.*)$/,
        i = /^(onPress.*)$/;

      function o(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          o = {};
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (i.test(s) ? t ? r[s] = e[s] : o[s] = e[s] : n.test(s) ? r[s] = e[s] : o[s] = e[s]);
        return {
          events: r,
          others: o
        }
      }
    },
    42295: (e, t, r) => {
      "use strict";
      e.exports = r(69245)
    },
    42649: e => {
      var t, r, n = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          r = o
        }
      }();
      var a, l = [],
        c = !1,
        u = -1;

      function h() {
        c && a && (c = !1, a.length ? l = a.concat(l) : u = -1, l.length && d())
      }

      function d() {
        if (!c) {
          var e = s(h);
          c = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++u < t;) a && a[u].run();
            u = -1, t = l.length
          }
          a = null, c = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || c || s(d)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    50078: (e, t, r) => {
      "use strict";
      r.d(t, {
        NP: () => v,
        Ym: () => c,
        zQ: () => l
      });
      var n = r(42295),
        i = (r(84735), r(32067)),
        o = r(71127);
      const s = (0, o.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        a = () => (0, o.useContext)(s),
        l = () => {
          const {
            platformScale: e
          } = a();
          return e
        },
        c = () => {
          const {
            locale: e
          } = a();
          return e
        };
      var u = r(89754),
        h = r(86825);
      const d = e => "dark" === e ? h.xW.dark : h.xW.light;
      var f = r(58531);
      const p = () => f.IS_SERVER ? null : document.body,
        v = (0, o.forwardRef)(({
          children: e,
          className: t,
          container: r = p(),
          asChild: a,
          colorScheme: l,
          defaultColorScheme: c,
          defaultPlatformScale: v,
          platformScale: m,
          onPlatformScaleChange: g,
          locale: y = "en-US"
        }, b) => {
          const w = (0, o.useRef)(null),
            k = (0, u.UP)(w, b),
            S = (0, o.useRef)(r),
            {
              ratio: E,
              scale: C
            } = function(e) {
              const [t, r] = (0, o.useState)(e.platformScale || e.defaultPlatformScale), n = (0, o.useCallback)(t => {
                r(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]), i = (0, o.useRef)([]), s = () => {
                if (!f.IS_SERVER) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of i.current) t.removeEventListener("change", e);
                  i.current = []
                }
              };
              return (0, o.useEffect)(() => (e.platformScale ? n(e.platformScale) : (() => {
                if (!f.IS_SERVER) {
                  s();
                  for (const e in h.wj) {
                    const t = window.matchMedia(h.wj[e]),
                      r = t => {
                        t.matches && n(e)
                      };
                    t.addEventListener("change", r), t.matches && n(e), i.current.push({
                      handler: r,
                      matchMedia: t
                    })
                  }
                }
              })(), s), [e.platformScale, n]), {
                scale: t,
                ratio: h.nz[t]
              }
            }({
              onPlatformScaleChange: g,
              defaultPlatformScale: v,
              platformScale: m
            }),
            {
              appearanceClass: T,
              otherAppearanceClasses: A,
              providerColor: L
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark"
            }) {
              const r = (0, u.Ub)("(prefers-color-scheme: light)"),
                n = (0, u.Ub)("(prefers-color-scheme: dark)"),
                i = "system" !== e && e || r && "light" || n && "dark" || t,
                s = (0, o.useMemo)(() => d(i), [i]),
                a = (0, o.useMemo)(() => (e => {
                  const t = d(e);
                  return [h.xW.light, h.xW.dark].filter(e => e !== t)
                })(i), [i]);
              return {
                appearanceClass: s,
                otherAppearanceClasses: a,
                providerColor: i
              }
            }({
              colorScheme: l,
              defaultColorScheme: c
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: r,
            otherAppearanceClasses: n,
            locale: i,
            className: s
          }) => {
            const a = (0, u.ZC)(s),
              l = (0, u.ZC)(e.current);
            (0, o.useEffect)(() => {
              e.current?.classList.contains(h.X6) || e.current?.classList.add(h.X6), e.current?.classList.contains(h.yU) || e.current?.classList.add(h.yU), e.current?.classList.add(r), e.current?.classList.remove(...n), a && s && e.current?.classList.contains(a) ? e.current?.classList.replace(a, s) : a && !s && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : s && e.current?.classList.add(s)
            }, [r, s]), (0, o.useEffect)(() => {
              e.current?.setAttribute("lang", i)
            }, [i]), (0, o.useEffect)(() => (t && e.current?.style.setProperty(h.HZ, t.toString()), () => {
              e.current?.style.removeProperty(h.HZ)
            }), [t]), (0, o.useEffect)(() => {
              l?.classList.remove(h.X6), l?.classList.remove(h.yU), l?.classList.remove(r), l?.style.removeProperty(h.HZ), s && l?.classList.remove(s)
            }, [l])
          })({
            locale: y,
            className: t,
            appearanceClass: T,
            otherAppearanceClasses: A,
            currentScale: m ? E : -0,
            container: a ? w : S
          }), (0, n.jsx)(s.Provider, {
            value: {
              locale: y,
              defaultColorScheme: c,
              colorScheme: L,
              defaultPlatformScale: v,
              platformScale: C
            },
            children: a ? (0, n.jsx)(i.DX, {
              ref: k,
              children: e
            }) : e
          })
        })
    },
    51105: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => a
      });
      var n = r(1556);
      const i = new Map;

      function o(e, t) {
        if (e === t) return e;
        const r = i.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = i.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const i = e[r];
          for (const e in i) {
            const r = t[e],
              a = i[e];
            "function" == typeof r && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(r, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof a ? "id" === e && r && a ? t.id = o(r, a) : t[e] = void 0 !== a ? a : r : t[e] = (0, n.clsx)(r, a)
          }
        }
        return t
      }
    },
    55937: e => {
      "use strict";
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        i = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        o = function e(o, s) {
          "single" != (s = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var i in r) n[i] = t.call(e, i) ? e[i] : r[i];
            return n
          }(s, e.options)).quotes && "double" != s.quotes && (s.quotes = "single");
          for (var a = "double" == s.quotes ? '"' : "'", l = s.isIdentifier, c = o.charAt(0), u = "", h = 0, d = o.length; h < d;) {
            var f = o.charAt(h++),
              p = f.charCodeAt(),
              v = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && h < d) {
                var m = o.charCodeAt(h++);
                56320 == (64512 & m) ? p = ((1023 & p) << 10) + (1023 & m) + 65536 : h--
              }
              v = "\\" + p.toString(16).toUpperCase() + " "
            } else v = s.escapeEverything ? r.test(f) ? "\\" + f : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(f) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == f || !l && ('"' == f && a == f || "'" == f && a == f) || l && n.test(f) ? "\\" + f : f;
            u += v
          }
          return l && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(i, function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          }), !l && s.wrap ? a + u + a : u
        };
      o.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, o.version = "3.0.0", e.exports = o
    },
    57178: (e, t, r) => {
      "use strict";

      function n(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }
      r.d(t, {
        _: () => n
      })
    },
    60211: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    69245: (e, t, r) => {
      "use strict";
      var n = r(71127),
        i = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var n, o = {},
          c = null,
          u = null;
        for (n in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, n) && !l.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: u,
          props: o,
          _owner: a.current
        }
      }
      t.Fragment = o, t.jsx = c, t.jsxs = c
    },
    72562: (e, t, r) => {
      "use strict";
      r.d(t, {
        _: () => i
      });
      var n = r(31130);

      function i(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, (0, n._)(e, t, "set"), r), r
      }
    },
    79465: e => {
      "use strict";
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function i(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function s(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function a(e, r, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || i, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, r, l) : function(e, t, r) {
          var i = {};
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            i[t] = n(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && r.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return a;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : a
            }(o, r)(e[o], t[o], r) : i[o] = n(t[o], r))
          }), i
        }(e, r, l) : n(r, l)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return a(e, r, t)
        }, {})
      };
      var l = a;
      e.exports = l
    },
    84735: (e, t, r) => {
      "use strict";
      var n, i, o = {},
        s = r(23644),
        a = r(55937),
        l = r.n(a),
        c = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: n
            } = this._buildTables(e);
            this.gotoFn = r, this.output = n, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let n = 0;
            for (const i of e) {
              let e = 0;
              for (const o of i) t[e] && o in t[e] ? e = t[e][o] : (n++, t[e][o] = n, t[n] = {}, e = n, r[n] = []);
              r[e].push(i)
            }
            const i = {},
              o = [];
            for (const e in t[0]) {
              const r = t[0][e];
              i[r] = 0, o.push(r)
            }
            for (; o.length > 0;) {
              const e = o.shift();
              if (void 0 !== e)
                for (const n in t[e]) {
                  const s = t[e][n];
                  o.push(s);
                  let a = i[e];
                  for (; a > 0 && !(n in t[a]);) a = i[a];
                  if (n in t[a]) {
                    const e = t[a][n];
                    i[s] = e, r[s] = [...r[s], ...r[e]]
                  } else i[s] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: i
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([n, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        u = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        h = !1;

      function d(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(n || (n = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(i || (i = {}));
      const f = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        p = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        v = new Map([
          [126, i.Element],
          [94, i.Start],
          [36, i.End],
          [42, i.Any],
          [33, i.Not],
          [124, i.Hyphen]
        ]),
        m = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        g = new Set(["contains", "icontains"]);

      function y(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function b(e) {
        return e.replace(p, y)
      }

      function w(e) {
        return 39 === e || 34 === e
      }

      function k(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function S(e) {
        const t = [],
          r = E(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function E(e, t, r) {
        let o = [];

        function s(e) {
          const n = t.slice(r + e).match(f);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [i] = n;
          return r += e + i.length, b(i)
        }

        function a(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function l() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || c(r) ? 41 !== t.charCodeAt(r) || c(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return b(t.slice(e, r - 1))
        }

        function c(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function u() {
          if (o.length > 0 && function(e) {
              switch (e.type) {
                case n.Adjacent:
                case n.Child:
                case n.Descendant:
                case n.Parent:
                case n.Sibling:
                case n.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function h(e) {
          o.length > 0 && o[o.length - 1].type === n.Descendant ? o[o.length - 1].type = e : (u(), o.push({
            type: e
          }))
        }

        function d(e, t) {
          o.push({
            type: n.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function p() {
          if (o.length && o[o.length - 1].type === n.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
          e.push(o)
        }
        if (a(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== o.length && o[0].type === n.Descendant || (u(), o.push({
                type: n.Descendant
              })), a(1);
              break;
            case 62:
              h(n.Child), a(1);
              break;
            case 60:
              h(n.Parent), a(1);
              break;
            case 126:
              h(n.Sibling), a(1);
              break;
            case 43:
              h(n.Adjacent), a(1);
              break;
            case 46:
              d("class", i.Element);
              break;
            case 35:
              d("id", i.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let l = null;
              124 === t.charCodeAt(r) ? e = s(1) : t.startsWith("*|", r) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (l = e, e = s(1))), a(0);
              let u = i.Exists;
              const h = v.get(t.charCodeAt(r));
              if (h) {
                if (u = h, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (u = i.Equals, a(1));
              let d = "",
                f = null;
              if ("exists" !== u) {
                if (w(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || c(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  d = b(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  d = b(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (f = !1, a(1)) : 105 === e && (f = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: n.Attribute,
                name: e,
                action: u,
                value: d,
                namespace: l,
                ignoreCase: f
              };
              o.push(p);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                o.push({
                  type: n.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? l() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(r))
                if (m.has(e)) {
                  if (w(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = E(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = l(), g.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && w(e) && (i = i.slice(1, -1))
                  }
                  i = b(i)
                } o.push({
                type: n.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              p(), o = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === o.length && a(0);
                break
              }
              let i, l = null;
              if (42 === e) r += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(r + 1)) {
                  h(n.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!f.test(t.slice(r))) break e;
                i = s(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = i, 42 === t.charCodeAt(r + 1) ? (i = "*", r += 2) : i = s(1)), o.push("*" === i ? {
                type: n.Universal,
                namespace: l
              } : {
                type: n.Tag,
                name: i,
                namespace: l
              })
            }
          }
        }
        return p(), r
      }

      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(r), !0).forEach(function(t) {
            A(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function A(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const L = function e(t) {
        return r.withOptions = r => e(T(T({}, t), r)), r;

        function r(e, ...r) {
          const n = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: i = !1,
              escapeSpecialCharacters: o = Array.isArray(e),
              trimWhitespace: s = !0
            } = t;
          let a = "";
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < r.length && (a += i ? O(r[e], a) : r[e])
          }
          const l = a.split("\n");
          let c = null;
          for (const e of l) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              c = c ? Math.min(c, e) : e
            }
          }
          if (null !== c) {
            const e = c;
            a = l.map(t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t).join("\n")
          }
          return s && (a = a.trim()), o && (a = a.replace(/\\n/g, "\n")), a
        }
      }({});

      function O(e, t) {
        if ("string" != typeof e || !e.includes("\n")) return e;
        const r = t.slice(t.lastIndexOf("\n") + 1).match(/^(\s+)/);
        if (r) {
          const t = r[1];
          return e.replace(/\n/g, `\n${t}`)
        }
        return e
      }
      var x = function() {
        return x = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, x.apply(this, arguments)
      };

      function P(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
        }
        return r
      }

      function F(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) s.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return s
      }
      var M, _ = /(\u000D|\u000C|\u000D\u000A)/g,
        z = /[\u0000\uD800-\uDFFF]/g,
        j = /(\/\*)[\s\S]*?(\*\/)/g,
        R = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], i = t + 1; i < e.length; i += 1) {
            var o = e.charCodeAt(i);
            if (o === r) return [i, String.fromCharCode.apply(null, n)];
            if (92 === o) {
              var s = I(e, i);
              if (null === s) return null;
              var a = F(s, 2),
                l = a[0],
                c = a[1];
              n.push(c), i = l
            } else {
              if (10 === o) return null;
              n.push(o)
            }
          }
          return null
        },
        D = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        I = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], i = Math.min(t + 7, e.length), o = t + 2; o < i; o += 1) {
              var s = e.charCodeAt(o);
              if (!(s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102)) break;
              n.push(s)
            }
            if (o < e.length) {
              var a = e.charCodeAt(o);
              9 !== a && 32 !== a && 10 !== a || (o += 1)
            }
            return [o - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        N = function(e, t) {
          var r = U(e, t);
          if (null === r) return null;
          var n = F(r, 3),
            i = n[0],
            o = n[1],
            s = n[2],
            a = B(e, i + 1);
          if (null !== a) {
            var l = F(a, 2);
            return [l[0],
              ["<dimension-token>", o, l[1]]
            ]
          }
          return i + 1 < e.length && 37 === e.charCodeAt(i + 1) ? [i + 1, ["<percentage-token>", o]] : [i, ["<number-token>", o, s]]
        },
        U = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            i = e.charCodeAt(t);
          for (43 !== i && 45 !== i || (t += 1, 45 === i && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var o = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === o && s >= 48 && s <= 57)
              for (n.push(o, s), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            o = e.charCodeAt(t), s = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === o || 101 === o) {
              var l = s >= 48 && s <= 57;
              if (l || (43 === s || 45 === s) && a >= 48 && a <= 57)
                for (r = "number", l ? (n.push(69, s), t += 2) : 45 === s ? (n.push(69, 45, a), t += 3) : (n.push(69, a), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, n),
            h = "number" === r ? parseFloat(u) : parseInt(u);
          return -0 === h && (h = 0), Number.isNaN(h) ? null : [t - 1, h, r]
        },
        W = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = I(e, t);
              if (null === i) break;
              var o = F(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        B = function(e, t) {
          if (e.length <= t || !D(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var i = I(e, t);
              if (null === i) break;
              var o = F(i, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        K = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], i = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) i || 0 === n.length || (i = !0);
            else if (92 === r) {
              var o = I(e, t);
              if (null === o || i) return null;
              var s = F(o, 2),
                a = s[0],
                l = s[1];
              n.push(l), t = a
            } else {
              if (i) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        H = function(e, t) {
          var r = B(e, t);
          if (null === r) return null;
          var n = F(r, 2),
            i = n[0],
            o = n[1];
          if ("url" === o.toLowerCase()) {
            if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) {
              for (var s = 2; i + s < e.length; s += 1) {
                var a = e.charCodeAt(i + s);
                if (34 === a || 39 === a) return [i + 1, o.toLowerCase(), "<function-token>"];
                if (9 !== a && 32 !== a && 10 !== a) {
                  var l = K(e, i + s);
                  if (null === l) return null;
                  var c = F(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [i + 1, o.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > i + 1 && 40 === e.charCodeAt(i + 1)) return [i + 1, o.toLowerCase(), "<function-token>"];
          return [i, o.toLowerCase(), "<ident-token>"]
        },
        q = function(e) {
          if (null === e.mediaCondition) return e;
          var t = G(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        G = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var i = e(n);
              if (null === i.operator && 1 === i.children.length) t.children[r] = i.children[0];
              else if (i.operator === t.operator && ("and" === i.operator || "or" === i.operator)) {
                for (var o = [r, 1], s = 0; s < i.children.length; s++) o.push(i.children[s]);
                t.children.splice.apply(t.children, o)
              }
            }
          }
          return t
        },
        $ = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        V = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(_, "\n").replace(z, "�")).replace(j, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var i = e.charCodeAt(++t); 9 === i || 32 === i || 10 === i;) i = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (T = R(e, t))) return null;
                var o = F(T, 2),
                  s = o[0],
                  a = o[1];
                r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = D(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (T = W(e, t + 1))) {
                    var c = F(T, 2);
                    s = c[0], a = c[1], r.push({
                      type: "<hash-token>",
                      value: a.toLowerCase(),
                      flag: l
                    }), t = s;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (T = R(e, t))) return null;
                var u = F(T, 2);
                s = u[0], a = u[1], r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var h = N(e, t);
                if (null === h) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var d = F(h, 2);
                  s = d[0], "<dimension-token>" === (E = d[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: E[1],
                    unit: E[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === E[0] ? r.push({
                    type: E[0],
                    value: E[1],
                    flag: E[2]
                  }) : r.push({
                    type: E[0],
                    value: E[1],
                    flag: "number"
                  }), t = s
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = N(e, t))) {
                  var f = F(y, 2);
                  s = f[0], "<dimension-token>" === (E = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: E[1],
                    unit: E[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === E[0] ? r.push({
                    type: E[0],
                    value: E[1],
                    flag: E[2]
                  }) : r.push({
                    type: E[0],
                    value: E[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    v = e.charCodeAt(t + 2);
                  if (45 === p && 62 === v) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (T = H(e, t))) {
                  var m = F(T, 3),
                    g = (s = m[0], a = m[1], m[2]);
                  r.push({
                    type: g,
                    value: a
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var y;
                if (null !== (y = N(e, t))) {
                  var b = F(y, 2);
                  s = b[0], "<dimension-token>" === (E = b[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: E[1],
                    unit: E[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === E[0] ? r.push({
                    type: E[0],
                    value: E[1],
                    flag: E[2]
                  }) : r.push({
                    type: E[0],
                    value: E[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), v = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === p && 45 === v && 45 === w) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (64 === n) {
                if (null !== (T = B(e, t + 1))) {
                  var k = F(T, 2);
                  s = k[0], a = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (T = I(e, t))) return null;
                var S = F(T, 2);
                s = S[0], a = S[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var E, C = F(T = N(e, t), 2);
                s = C[0], "<dimension-token>" === (E = C[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: E[1],
                  unit: E[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === E[0] ? r.push({
                  type: E[0],
                  value: E[1],
                  flag: E[2]
                }) : r.push({
                  type: E[0],
                  value: E[1],
                  flag: "number"
                }), t = s
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var T;
                if (null === (T = H(e, t))) return null;
                var A = F(T, 3);
                s = A[0], a = A[1], g = A[2], r.push({
                  type: g,
                  value: a
                }), t = s
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw $("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw $("Expected whitespace after media");
            r = 2;
            for (var i = 2; i < t.length - 1; i++) {
              var o = t[i];
              if ("<{-token>" === o.type) {
                n = i;
                break
              }
              if ("<semicolon-token>" === o.type) throw $("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), Y(t)
        },
        X = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(x(x({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Y = function(e) {
          for (var t, r, n = [
              []
            ], i = 0; i < e.length; i++) {
            var o = e[i];
            "<comma-token>" === o.type ? n.push([]) : n[n.length - 1].push(o)
          }
          var s = n.map(X);
          if (1 === s.length && 0 === s[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var a = s.map(function(e) {
              return 0 === e.length ? null : Z(e)
            }),
            l = [];
          try {
            for (var c = function(e) {
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
              }(a), u = c.next(); !u.done; u = c.next()) {
              var h = u.value;
              null !== h && l.push(h)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw $("No valid media queries");
          return l
        },
        Z = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Q(e, !0)
            }
          } catch (e) {
            throw $("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw $("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              i = t.value;
            "only" !== i && "not" !== i || (r = i);
            var o = null === r ? 0 : 1;
            if (e.length <= o) throw $("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) n = "all";
              else if ("print" === a || "screen" === a) n = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw $("Unknown ident '".concat(a, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== s.type) throw $("Invalid media query");
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Q(l, !0)
                }
              } catch (e) {
                throw $("Expected media condition after '('", e)
              }
            }
            if (o + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw $("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw $("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Q(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw $("Expected media condition after 'and'", e)
            }
          }
        },
        Q = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var i, o = t.length - 1, s = 0, a = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (a += 1, s = Math.max(s, a)) : "<)-token>" === c.type && (a -= 1), 0 === a) {
              o = l;
              break
            }
          }
          if (0 !== a) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, o + 1);
          if (i = 1 === s ? J(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), o === t.length - 1) return {
            operator: n,
            children: [i]
          };
          var h = t[o + 1];
          if ("<ident-token>" !== h.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== h.value) throw new Error("'".concat(h.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === h.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== h.value && "or" !== h.value) throw new Error("Invalid operator: '".concat(h.value, "'\nInvalid media condition"));
          var d = e(t.slice(o + 2), r, h.value);
          return {
            operator: h.value,
            children: [i].concat(d.children)
          }
        },
        J = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                i = e[r + 1],
                o = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === i.type && 47 === i.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: o.value,
                  wsBefore: n.wsBefore,
                  wsAfter: o.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var s = t[1];
          if ("<ident-token>" === s.type && 3 === t.length) return {
            context: "boolean",
            feature: s.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var a = t[3];
            if ("<number-token>" === a.type || "<dimension-token>" === a.type || "<ratio-token>" === a.type || "<ident-token>" === a.type) {
              var l = t[1].value,
                c = null,
                u = l.slice(0, 4);
              return "min-" === u ? (c = "min", l = l.slice(4)) : "max-" === u && (c = "max", l = l.slice(4)), a.wsBefore, a.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: P(a, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var h = ee(t);
            return {
              context: "range",
              feature: h.featureName,
              range: h
            }
          } catch (e) {
            throw $("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        ee = function(e) {
          var t, r, n, i;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var o = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            s = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[s ? "leftOp" : "rightOp"] = "<" : o[s ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? o[s ? "leftOp" : "rightOp"] = ">" : o[s ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              o[s ? "leftOp" : "rightOp"] = "="
            }
            if (s) o.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              o.featureName = e[1].value
            }
            var a = 2 + (null !== (r = null === (t = o[s ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[a];
            if (s) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (o.featureName = l.value, e.length >= 7) {
                var c = e[a + 1],
                  u = e[a + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var h = c.value;
                if (60 === h) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? o.rightOp = "<" : o.rightOp = "<=";
                else {
                  if (62 !== h) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? o.rightOp = ">" : o.rightOp = ">="
                }
                var d = e[a + 1 + (null !== (i = null === (n = o.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)];
                o.rightToken = d
              } else if (a + 2 !== e.length) throw new Error("Invalid range")
            } else o.rightToken = l;
            var f = null,
              p = o.leftToken,
              v = o.leftOp,
              m = o.featureName,
              g = o.rightOp,
              y = o.rightToken,
              b = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var w = p.type;
                "infinite" === (S = p.value) && (b = {
                  type: w,
                  value: S
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, b = P(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var S;
                w = y.type, "infinite" === (S = y.value) && (k = {
                  type: w,
                  value: S
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = P(y, ["wsBefore", "wsAfter"]));
            if (null !== b && null !== k)
              if ("<" !== v && "<=" !== v || "<" !== g && "<=" !== g) {
                if (">" !== v && ">=" !== v || ">" !== g && ">=" !== g) throw new Error("Invalid range");
                f = {
                  leftToken: b,
                  leftOp: v,
                  featureName: m,
                  rightOp: g,
                  rightToken: k
                }
              } else f = {
                leftToken: b,
                leftOp: v,
                featureName: m,
                rightOp: g,
                rightToken: k
              };
            else(null === b && null === v && null !== g && null !== k || null !== b && null !== v && null === g && null === k) && (f = {
              leftToken: b,
              leftOp: v,
              featureName: m,
              rightOp: g,
              rightToken: k
            });
            return f
          }
          throw new Error("Invalid range")
        };

      function te(e) {
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

      function re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(r), !0).forEach(function(t) {
            var n, i, o;
            n = e, i = t, o = r[t], (i = te(i)) in n ? Object.defineProperty(n, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[i] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ie(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }

      function oe(e, t) {
        for (var r in e) t(e[r], r)
      }

      function se(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class ae {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new ae
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var i, o = t[n],
              s = null !== (i = r.precedenceLookup.get(o)) && void 0 !== i ? i : new Set;
            for (var a of t.slice(n + 1)) s.add(a);
            r.precedenceLookup.set(o, s)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var i;
              if (null !== (i = e.precedenceLookup.get(n)) && void 0 !== i && i.has(t)) return !1
            }
          for (var {
              query: o,
              children: s
            }
            of e.ruleset.values()) {
            var a = this.ruleset.get(o);
            if (a && !a.children.isCompatible(s)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var i = this.ruleset.get(t);
            i ? (i.rules.push(...r), i.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [o, s] of e.precedenceLookup.entries()) {
            var a, l = null !== (a = this.precedenceLookup.get(o)) && void 0 !== a ? a : new Set;
            this.precedenceLookup.set(o, new Set([...l, ...s]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var i = e.ruleset.get(n);
              if (!i) throw new Error("Can't find condition for ".concat(n));
              var o = t.findIndex(e => r.has(e.query));
              o > -1 ? t.splice(o, 0, i) : t.push(i)
            };
          for (var [n, i] of this.precedenceLookup.entries()) r(i);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var i = {};
            for (var o of r) i[o.selector] = ne(ne({}, i[o.selector]), o.rule);
            Object.assign(i, ...n.renderToArray()), e.push({
              [t]: i
            })
          }
          return e
        }
      }
      var le, ce = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-calendar-picker-indicator": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        ue = Object.keys(ce),
        he = ce,
        de = (e, t) => new Error(L(le || (le = d(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        fe = e => {
          if ("@media " === e) throw de(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = q(e[t])
            })(V(e))
          } catch (t) {
            throw de(e, t.message)
          }
        },
        pe = ["vars"],
        ve = ["content"],
        me = "__DECLARATION",
        ge = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function ye(e, t, r, n) {
        var i = e.slice(0, t),
          o = e.slice(r);
        return "".concat(i).concat(n).concat(o)
      }
      var be = [...ue, "@layer", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class we {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new ae], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map(e => [e, e])), this.localClassNamesSearch = new c(e), this.layers = new Map, this.composedClassLists = t.map(e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          }).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map(e => {
                var [t, r] = e;
                return [t, this.transformVars(this.transformProperties(r))]
              })), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new ae, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = se(e.rule, be);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformStartingStyle(e, e.rule["@starting-style"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var i = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, i, o)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return oe(e, (t, r) => {
            "number" != typeof t || 0 === t || ge[r] || (e[r] = "".concat(t, "px"))
          }), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = ie(e, pe);
          return t ? ne(ne({}, function(e, t) {
            var r = {};
            for (var n in e) r[t(e[n], n)] = e[n];
            return r
          }(t, (e, t) => (0, s.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = ie(e, ve);
          return void 0 === t ? r : ne({
            content: (Array.isArray(t) ? t : [t]).map(e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"'))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(l()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(i, () => (function() {
                (() => {
                  if (u.length < 1) throw new Error("No adapter configured");
                  return u[u.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: n,
              regex: i
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), s = t.length, a = o.length - 1; a >= 0; a--) {
            var [l, [c]] = o[a], h = l - c.length + 1;
            s <= l || (s = h, "." !== t[h - 1] && (t = ye(t, h, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          oe(t.selectors, (t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var i = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(l()(t, {
                  isIdentifier: !0
                }).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = S(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(n()), {
                  cause: e
                })
              }
              r.forEach(e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var i = e[r];
                    if ("child" === i.type || "parent" === i.type || "sibling" === i.type || "adjacent" === i.type || "descendant" === i.type) throw new Error;
                    if ("attribute" === i.type && "class" === i.name && i.value === t) return
                  }
                } catch (e) {
                  throw new Error(L(M || (M = d(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"), {
                    cause: e
                  })
                }
              })
            })(i, e.selector);
            var o = {
              selector: i,
              rule: se(t, be)
            };
            r ? this.addConditionalRule(o, r) : this.addRule(o);
            var s = {
              type: "selector",
              selector: i,
              rule: t
            };
            this.transformLayer(s, t["@layer"], r), this.transformSupports(s, t["@supports"], r), this.transformMedia(s, t["@media"], r), this.transformContainer(s, t["@container"], r), this.transformStartingStyle(s, t["@starting-style"], r)
          })
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [i, o] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var s = "@media ".concat(i);
              fe(s);
              var a = [...n, s];
              this.addConditionalRule({
                selector: e.selector,
                rule: se(o, be)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, o, a), this.transformSelectors(e, o, a)), this.transformLayer(e, o["@layer"], a), this.transformSupports(e, o["@supports"], a), this.transformContainer(e, o["@container"], a), this.transformStartingStyle(e, o["@starting-style"], a)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@container ".concat(e))), oe(t, (t, r) => {
            var i = "@container ".concat(r),
              o = [...n, i];
            this.addConditionalRule({
              selector: e.selector,
              rule: se(t, be)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformSupports(e, t["@supports"], o), this.transformMedia(e, t["@media"], o), this.transformStartingStyle(e, t["@starting-style"], o)
          }))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@layer ".concat(e))), oe(t, (t, r) => {
            var i = [...n, "@layer ".concat(r)];
            this.addLayer(i), this.addConditionalRule({
              selector: e.selector,
              rule: se(t, be)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformMedia(e, t["@media"], i), this.transformSupports(e, t["@supports"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map(e => "@supports ".concat(e))), oe(t, (t, r) => {
            var i = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: se(t, be)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformMedia(e, t["@media"], i), this.transformContainer(e, t["@container"], i), this.transformStartingStyle(e, t["@starting-style"], i)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (he[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        transformStartingStyle(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var n, i = Object.keys(t).find(e => e.startsWith("@"));
            if (i) throw new Error('Nested at-rules (e.g. "'.concat(i, '") are not allowed inside @starting-style.'));
            null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, ["@starting-style"]);
            var o = [...r, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: se(t, be)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o))
          }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(ke({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(ke({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var n of this.keyframesRules) e.push(ke({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var i of this.layers.values()) {
            var [o, ...s] = i.reverse(), a = {
              [o]: me
            };
            for (var l of s) a = {
              [l]: a
            };
            e.push(ke(a))
          }
          for (var c of this.rules) e.push(ke({
            [c.selector]: c.rule
          }));
          for (var u of this.conditionalRulesets)
            for (var h of u.renderToArray()) e.push(ke(h));
          return e.filter(Boolean)
        }
      }

      function ke(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var i, o = e[n];
            o && Array.isArray(o) ? r.push(...o.map(e => ke({
              [n]: e
            }, t))) : o && "object" == typeof o ? 0 === Object.keys(o).length || r.push("".concat(t).concat(n, " {\n").concat(ke(o, t + "  "), "\n").concat(t, "}")) : o === me ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (i = n, i.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(o, ";"))
          };
        for (var i of Object.keys(e)) n(i);
        return r.join("\n")
      }
      var Se = r(42649);
      const Ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Ce = new Set,
        Te = "object" == typeof Se && Se ? Se : {},
        Ae = (e, t, r, n) => {
          "function" == typeof Te.emitWarning ? Te.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Le = globalThis.AbortController,
        Oe = globalThis.AbortSignal;
      if (void 0 === Le) {
        Oe = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Le = class {
          constructor() {
            t()
          }
          signal = new Oe;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Te.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Ae("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const xe = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Pe = e => xe(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Fe : null : null;
      class Fe extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Me {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Pe(e);
          if (!t) return [];
          Me.#e = !0;
          const r = new Me(e, t);
          return Me.#e = !1, r
        }
        constructor(e, t) {
          if (!Me.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class _e {
        #t;
        #r;
        #n;
        #i;
        #o;
        #s;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #a;
        #l;
        #c;
        #u;
        #h;
        #d;
        #f;
        #p;
        #v;
        #m;
        #g;
        #y;
        #b;
        #w;
        #k;
        #S;
        #E;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#b,
            ttls: e.#w,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#u,
            valList: e.#h,
            next: e.#d,
            prev: e.#f,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#v
            },
            free: e.#m,
            isBackgroundFetch: t => e.#C(t),
            backgroundFetch: (t, r, n, i) => e.#T(t, r, n, i),
            moveToTail: t => e.#A(t),
            indexes: t => e.#L(t),
            rindexes: t => e.#O(t),
            isStale: t => e.#x(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
        }
        get calculatedSize() {
          return this.#l
        }
        get size() {
          return this.#a
        }
        get fetchMethod() {
          return this.#o
        }
        get memoMethod() {
          return this.#s
        }
        get dispose() {
          return this.#n
        }
        get disposeAfter() {
          return this.#i
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: n = 1,
            ttlAutopurge: i,
            updateAgeOnGet: o,
            updateAgeOnHas: s,
            allowStale: a,
            dispose: l,
            disposeAfter: c,
            noDisposeOnSet: u,
            noUpdateTTL: h,
            maxSize: d = 0,
            maxEntrySize: f = 0,
            sizeCalculation: p,
            fetchMethod: v,
            memoMethod: m,
            noDeleteOnFetchRejection: g,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: b,
            allowStaleOnFetchAbort: w,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !xe(t)) throw new TypeError("max option must be a nonnegative integer");
          const S = t ? Pe(t) : Array;
          if (!S) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = d, this.maxEntrySize = f || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== m && "function" != typeof m) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = m, void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = v, this.#S = !!v, this.#c = new Map, this.#u = new Array(t).fill(void 0), this.#h = new Array(t).fill(void 0), this.#d = new S(t), this.#f = new S(t), this.#p = 0, this.#v = 0, this.#m = Me.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof c ? (this.#i = c, this.#g = []) : (this.#i = void 0, this.#g = void 0), this.#k = !!this.#n, this.#E = !!this.#i, this.noDisposeOnSet = !!u, this.noUpdateTTL = !!h, this.noDeleteOnFetchRejection = !!g, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !xe(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!xe(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#P()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = xe(n) || 0 === n ? n : 1, this.ttlAutopurge = !!i, this.ttl = r || 0, this.ttl) {
            if (!xe(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#F()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Ce.has(e))(e) && (Ce.add(e), Ae("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, _e))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #F() {
          const e = new Fe(this.#t),
            t = new Fe(this.#t);
          this.#w = e, this.#b = t, this.#M = (r, n, i = Ee.now()) => {
            if (t[r] = 0 !== n ? i : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#x(r) && this.#_(this.#u[r], "expire")
              }, n + 1);
              e.unref && e.unref()
            }
          }, this.#z = r => {
            t[r] = 0 !== e[r] ? Ee.now() : 0
          }, this.#j = (i, o) => {
            if (e[o]) {
              const s = e[o],
                a = t[o];
              if (!s || !a) return;
              i.ttl = s, i.start = a, i.now = r || n();
              const l = i.now - a;
              i.remainingTTL = s - l
            }
          };
          let r = 0;
          const n = () => {
            const e = Ee.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout(() => r = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = i => {
            const o = this.#c.get(i);
            if (void 0 === o) return 0;
            const s = e[o],
              a = t[o];
            return s && a ? s - ((r || n()) - a) : 1 / 0
          }, this.#x = i => {
            const o = t[i],
              s = e[i];
            return !!s && !!o && (r || n()) - o > s
          }
        }
        #z = () => {};
        #j = () => {};
        #M = () => {};
        #x = () => !1;
        #P() {
          const e = new Fe(this.#t);
          this.#l = 0, this.#y = e, this.#R = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#D = (e, t, r, n) => {
            if (this.#C(t)) return 0;
            if (!xe(r)) {
              if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
              if (r = n(t, e), !xe(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#I = (t, r, n) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#N(!0)
            }
            this.#l += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#l)
          }
        }
        #R = e => {};
        #I = (e, t, r) => {};
        #D = (e, t, r, n) => {
          if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #L({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#v; this.#U(t) && (!e && this.#x(t) || (yield t), t !== this.#p);) t = this.#f[t]
        }* #O({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#p; this.#U(t) && (!e && this.#x(t) || (yield t), t !== this.#v);) t = this.#d[t]
        }
        #U(e) {
          return void 0 !== e && this.#c.get(this.#u[e]) === e
        }* entries() {
          for (const e of this.#L()) void 0 === this.#h[e] || void 0 === this.#u[e] || this.#C(this.#h[e]) || (yield [this.#u[e], this.#h[e]])
        }* rentries() {
          for (const e of this.#O()) void 0 === this.#h[e] || void 0 === this.#u[e] || this.#C(this.#h[e]) || (yield [this.#u[e], this.#h[e]])
        }* keys() {
          for (const e of this.#L()) {
            const t = this.#u[e];
            void 0 === t || this.#C(this.#h[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#O()) {
            const t = this.#u[e];
            void 0 === t || this.#C(this.#h[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#L()) void 0 === this.#h[e] || this.#C(this.#h[e]) || (yield this.#h[e])
        }* rvalues() {
          for (const e of this.#O()) void 0 === this.#h[e] || this.#C(this.#h[e]) || (yield this.#h[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#L()) {
            const n = this.#h[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 !== i && e(i, this.#u[r], this)) return this.get(this.#u[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#L()) {
            const n = this.#h[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#u[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#O()) {
            const n = this.#h[r],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== i && e.call(t, i, this.#u[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#O({
              allowStale: !0
            })) this.#x(t) && (this.#_(this.#u[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#h[t],
            n = this.#C(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          const i = {
            value: n
          };
          if (this.#w && this.#b) {
            const e = this.#w[t],
              r = this.#b[t];
            if (e && r) {
              const t = e - (Ee.now() - r);
              i.ttl = t, i.start = Date.now()
            }
          }
          return this.#y && (i.size = this.#y[t]), i
        }
        dump() {
          const e = [];
          for (const t of this.#L({
              allowStale: !0
            })) {
            const r = this.#u[t],
              n = this.#h[t],
              i = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 === i || void 0 === r) continue;
            const o = {
              value: i
            };
            if (this.#w && this.#b) {
              o.ttl = this.#w[t];
              const e = Ee.now() - this.#b[t];
              o.start = Math.floor(Date.now() - e)
            }
            this.#y && (o.size = this.#y[t]), e.unshift([r, o])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, r] of e) {
            if (r.start) {
              const e = Date.now() - r.start;
              r.start = Ee.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t, r = {}) {
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: n = this.ttl,
            start: i,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const c = this.#D(e, t, r.size || 0, s);
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#_(e, "set"), this;
          let u = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === u) u = 0 === this.#a ? this.#v : 0 !== this.#m.length ? this.#m.pop() : this.#a === this.#t ? this.#N(!1) : this.#a, this.#u[u] = e, this.#h[u] = t, this.#c.set(e, u), this.#d[this.#v] = u, this.#f[u] = this.#v, this.#v = u, this.#a++, this.#I(u, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#A(u);
            const r = this.#h[u];
            if (t !== r) {
              if (this.#S && this.#C(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || o || (this.#k && this.#n?.(t, e, "set"), this.#E && this.#g?.push([t, e, "set"]))
              } else o || (this.#k && this.#n?.(r, e, "set"), this.#E && this.#g?.push([r, e, "set"]));
              if (this.#R(u), this.#I(u, c, a), this.#h[u] = t, a) {
                a.set = "replace";
                const e = r && this.#C(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === n || this.#w || this.#F(), this.#w && (l || this.#M(u, n, i), a && this.#j(a, u)), !o && this.#E && this.#g) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#a;) {
              const e = this.#h[this.#p];
              if (this.#N(!0), this.#C(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#E && this.#g) {
              const e = this.#g;
              let t;
              for (; t = e?.shift();) this.#i?.(...t)
            }
          }
        }
        #N(e) {
          const t = this.#p,
            r = this.#u[t],
            n = this.#h[t];
          return this.#S && this.#C(n) ? n.__abortController.abort(new Error("evicted")) : (this.#k || this.#E) && (this.#k && this.#n?.(n, r, "evict"), this.#E && this.#g?.push([n, r, "evict"])), this.#R(t), e && (this.#u[t] = void 0, this.#h[t] = void 0, this.#m.push(t)), 1 === this.#a ? (this.#p = this.#v = 0, this.#m.length = 0) : this.#p = this.#d[t], this.#c.delete(r), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, i = this.#c.get(e);
          if (void 0 !== i) {
            const e = this.#h[i];
            if (this.#C(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#x(i)) return r && this.#z(i), n && (n.has = "hit", this.#j(n, i)), !0;
            n && (n.has = "stale", this.#j(n, i))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, n = this.#c.get(e);
          if (void 0 === n || !r && this.#x(n)) return;
          const i = this.#h[n];
          return this.#C(i) ? i.__staleWhileFetching : i
        }
        #T(e, t, r, n) {
          const i = void 0 === t ? void 0 : this.#h[t];
          if (this.#C(i)) return i;
          const o = new Le,
            {
              signal: s
            } = r;
          s?.addEventListener("abort", () => o.abort(s.reason), {
            signal: o.signal
          });
          const a = {
              signal: o.signal,
              options: r,
              context: n
            },
            l = (n, i = !1) => {
              const {
                aborted: s
              } = o.signal, l = r.ignoreFetchAbort && void 0 !== n;
              if (r.status && (s && !i ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !l && !i) return c(o.signal.reason);
              const h = u;
              return this.#h[t] === u && (void 0 === n ? h.__staleWhileFetching ? this.#h[t] = h.__staleWhileFetching : this.#_(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, a.options))), n
            },
            c = n => {
              const {
                aborted: i
              } = o.signal, s = i && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, c = u;
              if (this.#h[t] === u && (l && void 0 !== c.__staleWhileFetching ? s || (this.#h[t] = c.__staleWhileFetching) : this.#_(e, "fetch")), a) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw n
            };
          r.status && (r.status.fetchDispatched = !0);
          const u = new Promise((t, n) => {
              const s = this.#o?.(e, i, a);
              s && s instanceof Promise && s.then(e => t(void 0 === e ? void 0 : e), n), o.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              })
            }).then(l, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e))),
            h = Object.assign(u, {
              __abortController: o,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, h, {
            ...a.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#h[t] = h, h
        }
        #C(e) {
          if (!this.#S) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Le
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            ttl: o = this.ttl,
            noDisposeOnSet: s = this.noDisposeOnSet,
            size: a = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: h = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: d = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: v = !1,
            status: m,
            signal: g
          } = t;
          if (!this.#S) return m && (m.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            status: m
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: i,
            ttl: o,
            noDisposeOnSet: s,
            size: a,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: u,
            allowStaleOnFetchRejection: h,
            allowStaleOnFetchAbort: f,
            ignoreFetchAbort: d,
            status: m,
            signal: g
          };
          let b = this.#c.get(e);
          if (void 0 === b) {
            m && (m.fetch = "miss");
            const t = this.#T(e, b, y, p);
            return t.__returned = t
          } {
            const t = this.#h[b];
            if (this.#C(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return m && (m.fetch = "inflight", e && (m.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const i = this.#x(b);
            if (!v && !i) return m && (m.fetch = "hit"), this.#A(b), n && this.#z(b), m && this.#j(m, b), t;
            const o = this.#T(e, b, y, p),
              s = void 0 !== o.__staleWhileFetching && r;
            return m && (m.fetch = i ? "stale" : "refresh", s && i && (m.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
          }
        }
        async forceFetch(e, t = {}) {
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e, t = {}) {
          const r = this.#s;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: n,
            forceRefresh: i,
            ...o
          } = t, s = this.get(e, o);
          if (!i && void 0 !== s) return s;
          const a = r(e, s, {
            options: o,
            context: n
          });
          return this.set(e, a, o), a
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: i = this.noDeleteOnStaleGet,
            status: o
          } = t, s = this.#c.get(e);
          if (void 0 !== s) {
            const t = this.#h[s],
              a = this.#C(t);
            return o && this.#j(o, s), this.#x(s) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (i || this.#_(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#A(s), n && this.#z(s), t))
          }
          o && (o.get = "miss")
        }
        #W(e, t) {
          this.#f[t] = e, this.#d[e] = t
        }
        #A(e) {
          e !== this.#v && (e === this.#p ? this.#p = this.#d[e] : this.#W(this.#f[e], this.#d[e]), this.#W(this.#v, e), this.#v = e)
        }
        delete(e) {
          return this.#_(e, "delete")
        }
        #_(e, t) {
          let r = !1;
          if (0 !== this.#a) {
            const n = this.#c.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#a) this.#B(t);
              else {
                this.#R(n);
                const r = this.#h[n];
                if (this.#C(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#E) && (this.#k && this.#n?.(r, e, t), this.#E && this.#g?.push([r, e, t])), this.#c.delete(e), this.#u[n] = void 0, this.#h[n] = void 0, n === this.#v) this.#v = this.#f[n];
                else if (n === this.#p) this.#p = this.#d[n];
                else {
                  const e = this.#f[n];
                  this.#d[e] = this.#d[n];
                  const t = this.#d[n];
                  this.#f[t] = this.#f[n]
                }
                this.#a--, this.#m.push(n)
              }
          }
          if (this.#E && this.#g?.length) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
          return r
        }
        clear() {
          return this.#B("delete")
        }
        #B(e) {
          for (const t of this.#O({
              allowStale: !0
            })) {
            const r = this.#h[t];
            if (this.#C(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const n = this.#u[t];
              this.#k && this.#n?.(r, n, e), this.#E && this.#g?.push([r, n, e])
            }
          }
          if (this.#c.clear(), this.#h.fill(void 0), this.#u.fill(void 0), this.#w && this.#b && (this.#w.fill(0), this.#b.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#v = 0, this.#m.length = 0, this.#l = 0, this.#a = 0, this.#E && this.#g) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#i?.(...t)
          }
        }
      }
      r(79465);
      var ze = new Set,
        je = [],
        Re = [];
      h || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        h = !0, u.push(e)
      })({
        appendCss: e => {
          Re.push(e)
        },
        registerClassName: e => {
          ze.add(e)
        },
        registerComposition: e => {
          je.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, i = new we(t, n);
            for (var o of r) i.processCssObj(o);
            return i.toCss()
          }({
            localClassNames: Array.from(ze),
            composedClassLists: je,
            cssObjs: Re
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, i = o[n];
            if (!i) {
              var s = document.createElement("style");
              t.packageName && s.setAttribute("data-package", t.packageName), s.setAttribute("data-file", t.filePath), s.setAttribute("type", "text/css"), i = o[n] = s, document.head.appendChild(s)
            }
            i.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), Re = []
        },
        getIdentOption: () => "short"
      });
      new _e({
        max: 500
      })
    },
    86825: (e, t, r) => {
      "use strict";
      r.d(t, {
        nz: () => n,
        wj: () => i,
        xW: () => o,
        HZ: () => s,
        X6: () => a,
        yU: () => l
      });
      var n = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        i = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          dark: "foundry_nu8bkp6",
          light: "foundry_nu8bkp5",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        s = "--foundry-platform-scales-ratio-65afb887",
        a = "foundry_nu8bkp4",
        l = "foundry_nu8bkp3"
    },
    88842: (e, t, r) => {
      "use strict";
      r.d(t, {
        _: () => i
      });
      var n = r(31130);

      function i(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, (0, n._)(e, t, "get"))
      }
    },
    89754: (e, t, r) => {
      "use strict";
      r.d(t, {
        sL: () => Ye,
        UP: () => a,
        ic: () => u,
        iQ: () => d,
        Ub: () => o,
        jt: () => l,
        ZC: () => s,
        rl: () => f
      });
      var n = r(60211),
        i = r(71127);

      function o(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const o = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [s, a] = (0, i.useState)(() => r ? o(e) : t);

        function l() {
          a(o(e))
        }
        return (0, i.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), s
      }

      function s(e) {
        const t = (0, i.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function a(...e) {
        const t = (0, i.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const l = () => o("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const t = (0, i.useRef)(e);
        return (0, i.useEffect)(() => {
          t.current = e
        }), (0, i.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function u({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, i.useState)(e),
            [n] = r,
            o = (0, i.useRef)(n),
            s = c(t);
          return (0, i.useEffect)(() => {
            o.current !== n && (s(n), o.current = n)
          }, [n, o, s]), r
        }({
          defaultProp: t,
          onChange: r
        }), s = void 0 !== e, a = s ? e : n, l = c(r), u = (0, i.useCallback)(t => {
          if (s) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else o(t)
        }, [s, e, o, l]);
        return [a, u]
      }

      function h(e, t, r, n) {
        const o = (0, i.useRef)(t);
        (0, i.useEffect)(() => {
          o.current = t
        }, [t]), (0, i.useEffect)(() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, n), () => {
            t.removeEventListener(e, i, n)
          }
        }, [e, r?.current, n])
      }
      const d = ({
        ref: e,
        onChange: t,
        onFocusIn: r,
        onFocusOut: n,
        enabled: o = !0
      }) => {
        const [s, a] = (0, i.useState)(!1);
        return h("focusin", e => {
          a(!0), r?.(e), t?.(!0, e)
        }, e), h("focusout", e => {
          a(!1), n?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!o && s
        }
      };

      function f(e = !0) {
        const t = o("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }

      function p(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let v, m = new Map;

      function g(e, t) {
        if (e === t) return e;
        let r = m.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = m.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (v = new FinalizationRegistry(e => {
        m.delete(e)
      }));
      var y = r(1556);

      function b(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              i = n[e];
            "function" == typeof r && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = p(r, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof i ? "id" === e && r && i ? t.id = g(r, i) : t[e] = void 0 !== i ? i : r : t[e] = y(r, i)
          }
        }
        return t
      }
      const w = new Set(["id"]),
        k = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        S = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        E = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        C = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        T = /^(data-.*)$/;
      const A = "undefined" != typeof document ? i.useLayoutEffect : () => {};
      var L;
      const O = null !== (L = i.useInsertionEffect) && void 0 !== L ? L : A;

      function x(e) {
        const t = (0, i.useRef)(null);
        return O(() => {
          t.current = e
        }, [e]), (0, i.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      const P = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        F = e => e && "window" in e && e.window === e ? e : P(e).defaultView || window;

      function M(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const _ = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function z(e, t) {
        return _ ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = F(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: n
          } = e.style, i = "none" !== r && "hidden" !== n && "collapse" !== n;
          if (i) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: n
            } = t(e);
            i = "none" !== r && "hidden" !== n && "collapse" !== n
          }
          return i
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || z(e.parentElement, e))
      }
      const j = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        R = j.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function D(e) {
        return e.matches(R) && z(e) && ! function(e) {
          let t = e;
          for (; null != t;) {
            if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
            t = t.parentElement
          }
          return !1
        }(e)
      }

      function I(e) {
        if (function() {
            if (null == N) {
              N = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return N = !0, !0
                  }
                })
              } catch {}
            }
            return N
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      j.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), j.join(':not([hidden]):not([tabindex="-1"]),');
      let N = null;

      function U(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let W = !1;

      function B(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function K(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function H(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const q = H(function() {
          return K(/^Mac/i)
        }),
        G = H(function() {
          return K(/^iPhone/i)
        }),
        $ = H(function() {
          return K(/^iPad/i) || q() && navigator.maxTouchPoints > 1
        }),
        V = H(function() {
          return G() || $()
        }),
        X = (H(function() {
          return q() || V()
        }), H(function() {
          return B(/AppleWebKit/i) && !Y()
        })),
        Y = H(function() {
          return B(/Chrome/i)
        }),
        Z = H(function() {
          return B(/Android/i)
        }),
        Q = H(function() {
          return B(/Firefox/i)
        });
      let J = new Map,
        ee = new Set;

      function te() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = J.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), J.delete(r.target)), 0 === J.size)) {
            for (let e of ee) e();
            ee.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = J.get(r.target);
          n || (n = new Set, J.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function re(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of J) "isConnected" in e && !e.isConnected && J.delete(e)
          }(), 0 === J.size ? e() : ee.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? te() : document.addEventListener("DOMContentLoaded", te));
      let ne = "default",
        ie = "",
        oe = new WeakMap;

      function se(e) {
        if (V()) {
          if ("disabled" !== ne) return;
          ne = "restoring", setTimeout(() => {
            re(() => {
              if ("restoring" === ne) {
                const t = P(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = ie || ""), ie = "", ne = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && oe.has(e)) {
          let t = oe.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), oe.delete(e)
        }
      }
      const ae = i.createContext({
        register: () => {}
      });
      ae.displayName = "PressResponderContext";
      var le = r(88842),
        ce = r(57178),
        ue = r(72562);

      function he(e, t) {
        A(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
      var de = r(35412);

      function fe(e, t) {
        if (!(0, de.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : M(r) ? r.host : r.parentNode
        }
        return !1
      }
      const pe = (e = document) => {
        var t;
        if (!(0, de.Nf)()) return e.activeElement;
        let r = e.activeElement;
        for (; r && "shadowRoot" in r && (null === (t = r.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) r = r.shadowRoot.activeElement;
        return r
      };

      function ve(e) {
        return (0, de.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function me(e, t, r = !0) {
        var n, i;
        let {
          metaKey: o,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        Q() && (null === (i = window.event) || void 0 === i || null === (n = i.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (q() ? o = !0 : s = !0);
        let c = X() && q() && !$() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: o,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: o,
          ctrlKey: s,
          altKey: a,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        me.isOpening = r, I(e), e.dispatchEvent(c), me.isOpening = !1
      }

      function ge(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (Z() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      me.isOpening = !1, r(18429);
      var ye = new WeakMap;
      class be {
        continuePropagation() {
          (0, ue._)(this, ye, !1)
        }
        get shouldStopPropagation() {
          return (0, le._)(this, ye)
        }
        constructor(e, t, r, n) {
          var i;
          (0, ce._)(this, ye, {
            writable: !0,
            value: void 0
          }), (0, ue._)(this, ye, !0);
          let o = null !== (i = null == n ? void 0 : n.target) && void 0 !== i ? i : r.currentTarget;
          const s = null == o ? void 0 : o.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, u = r.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = c
        }
      }
      const we = Symbol("linkClicked"),
        ke = "react-aria-pressable-style",
        Se = "data-react-aria-pressable";

      function Ee(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: s,
          onClick: a,
          isDisabled: l,
          isPressed: c,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: h,
          allowTextSelectionOnPress: d,
          ref: f,
          ...v
        } = function(e) {
          let t = (0, i.useContext)(ae);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = b(n, e), r()
          }
          return he(t, e.ref), e
        }(e), [m, g] = (0, i.useState)(!1), y = (0, i.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: w,
          removeAllGlobalListeners: k
        } = function() {
          let e = (0, i.useRef)(new Map),
            t = (0, i.useCallback)((t, r, n, i) => {
              let o = (null == i ? void 0 : i.once) ? (...t) => {
                e.current.delete(n), n(...t)
              } : n;
              e.current.set(n, {
                type: r,
                eventTarget: t,
                fn: o,
                options: i
              }), t.addEventListener(r, o, i)
            }, []),
            r = (0, i.useCallback)((t, r, n, i) => {
              var o;
              let s = (null === (o = e.current.get(n)) || void 0 === o ? void 0 : o.fn) || n;
              t.removeEventListener(r, s, i), e.current.delete(n)
            }, []),
            n = (0, i.useCallback)(() => {
              e.current.forEach((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              })
            }, [r]);
          return (0, i.useEffect)(() => n, [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), S = x((e, t) => {
          let i = y.current;
          if (l || i.didFirePressStart) return !1;
          let o = !0;
          if (i.isTriggeringEvent = !0, n) {
            let r = new be("pressstart", t, e);
            n(r), o = r.shouldStopPropagation
          }
          return r && r(!0), i.isTriggeringEvent = !1, i.didFirePressStart = !0, g(!0), o
        }), E = x((e, n, i = !0) => {
          let s = y.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let a = !0;
          if (o) {
            let t = new be("pressend", n, e);
            o(t), a = t.shouldStopPropagation
          }
          if (r && r(!1), g(!1), t && i && !l) {
            let r = new be("press", n, e);
            t(r), a && (a = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, a
        }), C = x((e, t) => {
          let r = y.current;
          if (l) return !1;
          if (s) {
            r.isTriggeringEvent = !0;
            let n = new be("pressup", t, e);
            return s(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), T = x(e => {
          let t = y.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && E(Ae(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, k(), d || se(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), A = x(e => {
          h && T(e)
        }), L = x(e => {
          l || null == a || a(e)
        }), O = x((e, t) => {
          if (!l && a) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), a(U(r))
          }
        }), M = (0, i.useMemo)(() => {
          let e = y.current,
            t = {
              onKeyDown(t) {
                if (Te(t.nativeEvent, t.currentTarget) && fe(t.currentTarget, ve(t.nativeEvent))) {
                  var n;
                  Le(ve(t.nativeEvent), t.key) && t.preventDefault();
                  let i = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", i = S(t, "keyboard");
                    let n = t.currentTarget,
                      o = t => {
                        Te(t, n) && !t.repeat && fe(n, ve(t)) && e.target && C(Ae(e.target, t), "keyboard")
                      };
                    w(P(t.currentTarget), "keyup", p(o, r), !0)
                  }
                  i && t.stopPropagation(), t.metaKey && q() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || fe(t.currentTarget, ve(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !me.isOpening) {
                  let r = !0;
                  if (l && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !ge(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        i = C(Ae(t.currentTarget, t), n),
                        o = E(Ae(t.currentTarget, t), n, !0);
                      r = i && o, e.isOverTarget = !1, L(t), T(t)
                    }
                  } else {
                    let e = S(t, "virtual"),
                      n = C(t, "virtual"),
                      i = E(t, "virtual");
                    L(t), r = e && n && i
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Te(t, e.target)) {
                var n;
                Le(ve(t), t.key) && t.preventDefault();
                let r = ve(t),
                  i = fe(e.target, ve(t));
                E(Ae(e.target, t), "keyboard", i), i && O(t, e.target), k(), "Enter" !== t.key && Ce(e.target) && fe(e.target, r) && !t[we] && (t[we] = !0, me(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var i;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (i = e.target) || void 0 === i || i.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !fe(t.currentTarget, ve(t.nativeEvent))) return;
              if (i = t.nativeEvent, !Z() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              e.pointerType = t.pointerType;
              let o = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (V()) {
                    if ("default" === ne) {
                      const t = P(e);
                      ie = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    ne = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    oe.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), o = S(t, e.pointerType);
                let i = ve(t.nativeEvent);
                "releasePointerCapture" in i && i.releasePointerCapture(t.pointerId), w(P(t.currentTarget), "pointerup", r, !1), w(P(t.currentTarget), "pointercancel", n, !1)
              }
              o && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (fe(t.currentTarget, ve(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let r = function(e) {
                    for (; e && !D(e);) e = e.parentElement;
                    let t = F(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    W = !0;
                    let n = !1,
                      i = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      o = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, I(r), l()))
                      },
                      s = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, I(r), l()))
                      };
                    t.addEventListener("blur", i, !0), t.addEventListener("focusout", o, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", i, !0), t.removeEventListener("focusout", o, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), W = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              fe(t.currentTarget, ve(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || C(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, S(Ae(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, E(Ae(e.target, t), e.pointerType, !1), A(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (fe(e.target, ve(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? T(t) : (I(e.target), e.target.click()))
                      }, 80);
                    w(t.currentTarget, "click", () => r = !0, !0), e.disposables.push(() => clearTimeout(n))
                  } else T(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                T(e)
              };
            t.onDragStart = e => {
              fe(e.currentTarget, ve(e.nativeEvent)) && T(e)
            }
          }
          return t
        }, [w, l, u, k, d, T, A, E, S, C, L, O]);
        return (0, i.useEffect)(() => {
          if (!f) return;
          const e = P(f.current);
          if (!e || !e.head || e.getElementById(ke)) return;
          const t = e.createElement("style");
          t.id = ke, t.textContent = `\n@layer {\n  [${Se}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, i.useEffect)(() => {
          let e = y.current;
          return () => {
            var t;
            d || se(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: c || m,
          pressProps: b(v, M, {
            [Se]: !0
          })
        }
      }

      function Ce(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Te(e, t) {
        const {
          key: r,
          code: n
        } = e, i = t, o = i.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || i instanceof F(i).HTMLInputElement && !xe(i, r) || i instanceof F(i).HTMLTextAreaElement || i.isContentEditable || ("link" === o || !o && Ce(i)) && "Enter" !== r)
      }

      function Ae(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function Le(e, t) {
        return e instanceof HTMLInputElement ? !xe(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Ce(e)))
        }(e)
      }
      const Oe = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function xe(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Oe.has(e.type)
      }
      let Pe = null,
        Fe = new Set,
        Me = new Map,
        _e = !1,
        ze = !1;

      function je(e, t) {
        for (let r of Fe) r(e, t)
      }

      function Re(e) {
        _e = !0,
          function(e) {
            return !(e.metaKey || !q() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Pe = "keyboard", je("keyboard", e))
      }

      function De(e) {
        Pe = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (_e = !0, je("pointer", e))
      }

      function Ie(e) {
        ge(e) && (_e = !0, Pe = "virtual")
      }

      function Ne(e) {
        e.target !== window && e.target !== document && !W && e.isTrusted && (_e || ze || (Pe = "virtual", je("virtual", e)), _e = !1, ze = !1)
      }

      function Ue() {
        W || (_e = !1, ze = !0)
      }

      function We(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || Me.get(F(e))) return;
        const t = F(e),
          r = P(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          _e = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Re, !0), r.addEventListener("keyup", Re, !0), r.addEventListener("click", Ie, !0), t.addEventListener("focus", Ne, !0), t.addEventListener("blur", Ue, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", De, !0), r.addEventListener("pointermove", De, !0), r.addEventListener("pointerup", De, !0)), t.addEventListener("beforeunload", () => {
          Be(e)
        }, {
          once: !0
        }), Me.set(t, {
          focus: n
        })
      }
      const Be = (e, t) => {
        const r = F(e),
          n = P(e);
        t && n.removeEventListener("DOMContentLoaded", t), Me.has(r) && (r.HTMLElement.prototype.focus = Me.get(r).focus, n.removeEventListener("keydown", Re, !0), n.removeEventListener("keyup", Re, !0), n.removeEventListener("click", Ie, !0), r.removeEventListener("focus", Ne, !0), r.removeEventListener("blur", Ue, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", De, !0), n.removeEventListener("pointermove", De, !0), n.removeEventListener("pointerup", De, !0)), Me.delete(r))
      };

      function Ke(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: o
        } = e;
        const s = (0, i.useCallback)(e => {
            if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
          }, [n, o]),
          a = function(e) {
            let t = (0, i.useRef)({
              isFocused: !1,
              observer: null
            });
            A(() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }, []);
            let r = x(t => {
              null == e || e(t)
            });
            return (0, i.useCallback)(e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  i = e => {
                    if (t.current.isFocused = !1, n.disabled) {
                      let t = U(e);
                      r(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                n.addEventListener("focusout", i, {
                  once: !0
                }), t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let r = n === document.activeElement ? null : document.activeElement;
                    n.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: r
                    })), n.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: r
                    }))
                  }
                }), t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }, [r])
          }(s),
          l = (0, i.useCallback)(e => {
            const t = P(e.target),
              n = t ? pe(t) : pe();
            e.target === e.currentTarget && n === ve(e.nativeEvent) && (r && r(e), o && o(!0), a(e))
          }, [o, r, a]);
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? l : void 0,
            onBlur: t || !n && !o ? void 0 : s
          }
        }
      }

      function He(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(n), t && r.stopPropagation()
        }
      }
      "undefined" != typeof document && function(e) {
        const t = P(e);
        let r;
        "loading" !== t.readyState ? We(e) : (r = () => {
          We(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let qe = i.createContext(null);

      function Ge(e, t) {
        let {
          focusProps: r
        } = Ke(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: He(e.onKeyDown),
              onKeyUp: He(e.onKeyUp)
            }
          }
        }(e), o = b(r, n), s = function(e) {
          let t = (0, i.useContext)(qe) || {};
          he(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), a = e.isDisabled ? {} : s, l = (0, i.useRef)(e.autoFocus);
        (0, i.useEffect)(() => {
          l.current && t.current && function(e) {
            const t = P(e),
              r = pe(t);
            if ("virtual" === Pe) {
              let n = r;
              re(() => {
                pe(t) === n && e.isConnected && I(e)
              })
            } else I(e)
          }(t.current), l.current = !1
        }, [t]);
        let c = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (c = void 0), {
          focusableProps: b({
            ...o,
            tabIndex: c
          }, a)
        }
      }

      function $e(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: i,
          onPress: o,
          onPressStart: s,
          onPressEnd: a,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: h,
          onClick: d,
          href: f,
          target: p,
          rel: v,
          type: m = "button"
        } = e;
        r = "button" === n ? {
          type: m,
          disabled: i,
          form: e.form,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formMethod: e.formMethod,
          formNoValidate: e.formNoValidate,
          formTarget: e.formTarget,
          name: e.name,
          value: e.value
        } : {
          role: "button",
          href: "a" !== n || i ? void 0 : f,
          target: "a" === n ? p : void 0,
          type: "input" === n ? m : void 0,
          disabled: "input" === n ? i : void 0,
          "aria-disabled": i && "input" !== n ? i : void 0,
          rel: "a" === n ? v : void 0
        };
        let {
          pressProps: g,
          isPressed: y
        } = Ee({
          onPressStart: s,
          onPressEnd: a,
          onPressChange: c,
          onPress: o,
          onPressUp: l,
          onClick: d,
          isDisabled: i,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: A
        } = Ge(e, t);
        h && (A.tabIndex = i ? -1 : A.tabIndex);
        let L = b(A, g, function(e, t = {}) {
          let {
            labelable: r,
            isLink: n,
            global: i,
            events: o = i,
            propNames: s
          } = t, a = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (w.has(t) || r && k.has(t) || n && S.has(t) || i && E.has(t) || o && C.has(t) || t.endsWith("Capture") && C.has(t.slice(0, -7)) || (null == s ? void 0 : s.has(t)) || T.test(t)) && (a[t] = e[t]);
          return a
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: b(r, L, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      var Ve = r(35612),
        Xe = r(51105);
      const Ye = ({
        inert: e,
        className: t,
        onClick: r,
        isLoading: n,
        ...i
      }, o) => {
        const {
          events: s,
          others: a
        } = (0, Ve.b)(i, {
          onPress: !1
        }), {
          buttonProps: l,
          isPressed: c
        } = $e({
          ...a,
          elementType: "button",
          preventFocusOnPress: !0,
          onPress: e => {
            n || (a.onPress?.(e) ?? r?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, o), u = {
          ...l,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": n,
          "aria-busy": n
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, Xe.v)(e ? {} : u, {
            ...s,
            className: t
          })
        }
      }
    }
  }
]);