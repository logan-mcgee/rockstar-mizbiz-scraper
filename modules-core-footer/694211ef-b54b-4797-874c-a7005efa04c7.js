try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "694211ef-b54b-4797-874c-a7005efa04c7", e._sentryDebugIdIdentifier = "sentry-dbid-694211ef-b54b-4797-874c-a7005efa04c7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [8996], {
    4408: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => u,
        xV: () => m,
        s6: () => b
      });
      var i = r(71127),
        n = r.t(i, 2),
        o = r(95362),
        s = r(42295),
        a = Symbol.for("react.lazy"),
        l = n[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function h(e) {
        const t = f(e),
          r = i.forwardRef((e, r) => {
            let {
              children: n,
              ...o
            } = e;
            c(n) && "function" == typeof l && (n = l(n._payload));
            const a = i.Children.toArray(n),
              h = a.find(v);
            if (h) {
              const e = h.props.children,
                n = a.map(t => t === h ? i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null : t);
              return (0, s.jsx)(t, {
                ...o,
                ref: r,
                children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
              })
            }
            return (0, s.jsx)(t, {
              ...o,
              ref: r,
              children: n
            })
          });
        return r.displayName = `${e}.Slot`, r
      }
      var u = h("Slot");

      function f(e) {
        const t = i.forwardRef((e, t) => {
          let {
            children: r,
            ...n
          } = e;
          if (c(r) && "function" == typeof l && (r = l(r._payload)), i.isValidElement(r)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = t && "isReactWarning" in t && t.isReactWarning;
                return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              s = function(e, t) {
                const r = {
                  ...t
                };
                for (const i in t) {
                  const n = e[i],
                    o = t[i];
                  /^on[A-Z]/.test(i) ? n && o ? r[i] = (...e) => {
                    const t = o(...e);
                    return n(...e), t
                  } : n && (r[i] = n) : "style" === i ? r[i] = {
                    ...n,
                    ...o
                  } : "className" === i && (r[i] = [n, o].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(n, r.props);
            return r.type !== i.Fragment && (s.ref = t ? (0, o.t)(t, e) : e), i.cloneElement(r, s)
          }
          return i.Children.count(r) > 1 ? i.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var d = Symbol("radix.slottable");

      function p(e) {
        const t = ({
          children: e
        }) => (0, s.jsx)(s.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var m = p("Slottable");

      function v(e) {
        return i.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
      r(18429);
      var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = h(`Primitive.${t}`),
            n = i.forwardRef((e, i) => {
              const {
                asChild: n,
                ...o
              } = e, a = n ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, {
                ...o,
                ref: i
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        y = Object.freeze({
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
        w = i.forwardRef((e, t) => (0, s.jsx)(g.span, {
          ...e,
          ref: t,
          style: {
            ...y,
            ...e.style
          }
        }));
      w.displayName = "VisuallyHidden";
      const b = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? w : i.Fragment;
        return (0, s.jsx)(r, {
          ...t
        })
      }
    },
    9738: (e, t, r) => {
      var i = r(56130),
        n = r(28593),
        o = r(22909),
        s = Math.max,
        a = Math.min;
      e.exports = function(e, t, r) {
        var l, c, h, u, f, d, p = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var r = l,
            i = c;
          return l = c = void 0, p = t, u = e.apply(i, r)
        }

        function w(e) {
          var r = e - d;
          return void 0 === d || r >= t || r < 0 || v && e - p >= h
        }

        function b() {
          var e = n();
          if (w(e)) return k(e);
          f = setTimeout(b, function(e) {
            var r = t - (e - d);
            return v ? a(r, h - (e - p)) : r
          }(e))
        }

        function k(e) {
          return f = void 0, g && l ? y(e) : (l = c = void 0, u)
        }

        function S() {
          var e = n(),
            r = w(e);
          if (l = arguments, c = this, d = e, r) {
            if (void 0 === f) return function(e) {
              return p = e, f = setTimeout(b, t), m ? y(e) : u
            }(d);
            if (v) return clearTimeout(f), f = setTimeout(b, t), y(d)
          }
          return void 0 === f && (f = setTimeout(b, t)), u
        }
        return t = o(t) || 0, i(r) && (m = !!r.leading, h = (v = "maxWait" in r) ? s(o(r.maxWait) || 0, t) : h, g = "trailing" in r ? !!r.trailing : g), S.cancel = function() {
          void 0 !== f && clearTimeout(f), p = 0, l = d = c = f = void 0
        }, S.flush = function() {
          return void 0 === f ? u : k(n())
        }, S
      }
    },
    10439: (e, t, r) => {
      "use strict";

      function i(e) {
        var t, r, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (r = i(e[t])) && (n && (n += " "), n += r)
          } else
            for (r in e) e[r] && (n && (n += " "), n += r);
        return n
      }

      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = i(e)) && (n && (n += " "), n += t);
        return n
      }
      r.d(t, {
        $: () => n,
        A: () => o
      });
      const o = n
    },
    10533: (e, t, r) => {
      var i = r(86601);
      e.exports = function(e, t, r, n) {
        return n = "function" == typeof n ? n : void 0, null == e ? e : i(e, t, r, n)
      }
    },
    10613: (e, t, r) => {
      var i = r(23117);
      e.exports = function(e, t, r) {
        var n = null == e ? void 0 : i(e, t);
        return void 0 === n ? r : n
      }
    },
    22909: (e, t, r) => {
      var i = r(87625),
        n = r(56130),
        o = r(25733),
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return NaN;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = a.test(e);
        return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : s.test(e) ? NaN : +e
      }
    },
    23644: (e, t, r) => {
      "use strict";

      function i(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function n(e, t) {
        var r = e;
        for (var i of t) {
          if (!(i in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
          r = r[i]
        }
        return r
      }

      function o(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          i = {};
        for (var n in e) {
          var s = e[n],
            a = [...r, n];
          "string" == typeof s || "number" == typeof s || null == s ? i[n] = t(s, a) : "object" != typeof s || Array.isArray(s) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(s) ? "Array" : typeof s, '"')) : i[n] = o(s, t, a)
        }
        return i
      }
      r.d(t, {
        Bx: () => o,
        Jt: () => n,
        Tm: () => i
      })
    },
    28593: (e, t, r) => {
      var i = r(15036);
      e.exports = function() {
        return i.Date.now()
      }
    },
    31454: (e, t, r) => {
      var i = r(49192);
      e.exports = function(e) {
        return i(e, 5)
      }
    },
    42295: (e, t, r) => {
      "use strict";
      e.exports = r(69245)
    },
    42649: e => {
      var t, r, i = e.exports = {};

      function n() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === n || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
          t = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
          t = n
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          r = o
        }
      }();
      var a, l = [],
        c = !1,
        h = -1;

      function u() {
        c && a && (c = !1, a.length ? l = a.concat(l) : h = -1, l.length && f())
      }

      function f() {
        if (!c) {
          var e = s(u);
          c = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++h < t;) a && a[h].run();
            h = -1, t = l.length
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

      function d(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new d(e, t)), 1 !== l.length || c || s(f)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
        return []
      }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    51105: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => a
      });
      var i = r(10439);
      const n = new Map;

      function o(e, t) {
        if (e === t) return e;
        const r = n.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const i = n.get(t);
        return i ? (i.forEach(t => t(e)), e) : t
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
          const n = e[r];
          for (const e in n) {
            const r = t[e],
              a = n[e];
            "function" == typeof r && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(r, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof a ? "id" === e && r && a ? t.id = o(r, a) : t[e] = void 0 !== a ? a : r : t[e] = (0, i.$)(r, a)
          }
        }
        return t
      }
    },
    60211: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => i
      });
      const i = "undefined" == typeof window
    },
    69245: (e, t, r) => {
      "use strict";
      var i = r(71127),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var i, o = {},
          c = null,
          h = null;
        for (i in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (h = t.ref), t) s.call(t, i) && !l.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: h,
          props: o,
          _owner: a.current
        }
      }
      t.Fragment = o, t.jsx = c, t.jsxs = c
    },
    75523: (e, t, r) => {
      "use strict";
      r.d(t, {
        X3: () => i.X,
        fi: () => o,
        IO: () => l,
        VW: () => f,
        v6: () => s.v,
        cJ: () => u
      });
      var i = r(60211);
      const n = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${n(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${n(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${n(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${n(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var s = r(51105);
      const a = "__FOUNDRY_ACCENT__",
        l = (e, t) => i.X ? t() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, t()), window[a].get(e));
      r(98312);
      var c, h = r(41972);

      function u(e, ...t) {
        return h(e, ...t)
      }
      r(56265), r(31454), r(10533), r(10613), r(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(c || (c = {})), Symbol.toStringTag;
      const f = (...e) => e.filter(e => e).join(" ")
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, i, n, o) {
        for (var s = -1, a = r(t((i - e) / (n || 1)), 0), l = Array(a); a--;) l[o ? a : ++s] = e, e += n;
        return l
      }
    },
    78318: e => {
      "use strict";
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        i = /[ -,\.\/:-@\[\]\^`\{-~]/,
        n = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        o = function e(o, s) {
          "single" != (s = function(e, r) {
            if (!e) return r;
            var i = {};
            for (var n in r) i[n] = t.call(e, n) ? e[n] : r[n];
            return i
          }(s, e.options)).quotes && "double" != s.quotes && (s.quotes = "single");
          for (var a = "double" == s.quotes ? '"' : "'", l = s.isIdentifier, c = o.charAt(0), h = "", u = 0, f = o.length; u < f;) {
            var d = o.charAt(u++),
              p = d.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && u < f) {
                var v = o.charCodeAt(u++);
                56320 == (64512 & v) ? p = ((1023 & p) << 10) + (1023 & v) + 65536 : u--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = s.escapeEverything ? r.test(d) ? "\\" + d : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(d) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == d || !l && ('"' == d && a == d || "'" == d && a == d) || l && i.test(d) ? "\\" + d : d;
            h += m
          }
          return l && (/^-[-\d]/.test(h) ? h = "\\-" + h.slice(1) : /\d/.test(c) && (h = "\\3" + c + " " + h.slice(1))), h = h.replace(n, function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          }), !l && s.wrap ? a + h + a : h
        };
      o.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, o.version = "3.0.0", e.exports = o
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

      function i(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function n(e, t, r) {
        return e.concat(t).map(function(e) {
          return i(e, r)
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
        (l = l || {}).arrayMerge = l.arrayMerge || n, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = i;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, r, l) : function(e, t, r) {
          var n = {};
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            n[t] = i(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (s(e, o) && r.isMergeableObject(t[o]) ? n[o] = function(e, t) {
              if (!t.customMerge) return a;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : a
            }(o, r)(e[o], t[o], r) : n[o] = i(t[o], r))
          }), n
        }(e, r, l) : i(r, l)
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
      var i, n, o = {},
        s = r(23644),
        a = r(78318),
        l = r.n(a),
        c = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: i
            } = this._buildTables(e);
            this.gotoFn = r, this.output = i, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let i = 0;
            for (const n of e) {
              let e = 0;
              for (const o of n) t[e] && o in t[e] ? e = t[e][o] : (i++, t[e][o] = i, t[i] = {}, e = i, r[i] = []);
              r[e].push(n)
            }
            const n = {},
              o = [];
            for (const e in t[0]) {
              const r = t[0][e];
              n[r] = 0, o.push(r)
            }
            for (; o.length > 0;) {
              const e = o.shift();
              if (void 0 !== e)
                for (const i in t[e]) {
                  const s = t[e][i];
                  o.push(s);
                  let a = n[e];
                  for (; a > 0 && !(i in t[a]);) a = n[a];
                  if (i in t[a]) {
                    const e = t[a][i];
                    n[s] = e, r[s] = [...r[s], ...r[e]]
                  } else n[s] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: n
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let i = 0; i < e.length; i++) {
              const n = e[i];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([i, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const i = e[r];
              for (; t > 0 && !(i in this.gotoFn[t]);) t = this.failure[t];
              if (i in this.gotoFn[t] && (t = this.gotoFn[t][i], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        h = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        u = !1;

      function f(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(i || (i = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(n || (n = {}));
      const d = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        p = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        m = new Map([
          [126, n.Element],
          [94, n.Start],
          [36, n.End],
          [42, n.Any],
          [33, n.Not],
          [124, n.Hyphen]
        ]),
        v = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        g = new Set(["contains", "icontains"]);

      function y(e, t, r) {
        const i = parseInt(t, 16) - 65536;
        return i != i || r ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }

      function w(e) {
        return e.replace(p, y)
      }

      function b(e) {
        return 39 === e || 34 === e
      }

      function k(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function S(e) {
        const t = [],
          r = C(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function C(e, t, r) {
        let o = [];

        function s(e) {
          const i = t.slice(r + e).match(d);
          if (!i) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [n] = i;
          return r += e + n.length, w(n)
        }

        function a(e) {
          for (r += e; r < t.length && k(t.charCodeAt(r));) r++
        }

        function l() {
          const e = r += 1;
          let i = 1;
          for (; i > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || c(r) ? 41 !== t.charCodeAt(r) || c(r) || i-- : i++;
          if (i) throw new Error("Parenthesis not matched");
          return w(t.slice(e, r - 1))
        }

        function c(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function h() {
          if (o.length > 0 && function(e) {
              switch (e.type) {
                case i.Adjacent:
                case i.Child:
                case i.Descendant:
                case i.Parent:
                case i.Sibling:
                case i.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(o[o.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          o.length > 0 && o[o.length - 1].type === i.Descendant ? o[o.length - 1].type = e : (h(), o.push({
            type: e
          }))
        }

        function f(e, t) {
          o.push({
            type: i.Attribute,
            name: e,
            action: t,
            value: s(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function p() {
          if (o.length && o[o.length - 1].type === i.Descendant && o.pop(), 0 === o.length) throw new Error("Empty sub-selector");
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
              0 !== o.length && o[0].type === i.Descendant || (h(), o.push({
                type: i.Descendant
              })), a(1);
              break;
            case 62:
              u(i.Child), a(1);
              break;
            case 60:
              u(i.Parent), a(1);
              break;
            case 126:
              u(i.Sibling), a(1);
              break;
            case 43:
              u(i.Adjacent), a(1);
              break;
            case 46:
              f("class", n.Element);
              break;
            case 35:
              f("id", n.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let l = null;
              124 === t.charCodeAt(r) ? e = s(1) : t.startsWith("*|", r) ? (l = "*", e = s(2)) : (e = s(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (l = e, e = s(1))), a(0);
              let h = n.Exists;
              const u = m.get(t.charCodeAt(r));
              if (u) {
                if (h = u, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (h = n.Equals, a(1));
              let f = "",
                d = null;
              if ("exists" !== h) {
                if (b(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let i = r + 1;
                  for (; i < t.length && (t.charCodeAt(i) !== e || c(i));) i += 1;
                  if (t.charCodeAt(i) !== e) throw new Error("Attribute value didn't end");
                  f = w(t.slice(r + 1, i)), r = i + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!k(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || c(r));) r += 1;
                  f = w(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (d = !1, a(1)) : 105 === e && (d = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const p = {
                type: i.Attribute,
                name: e,
                action: h,
                value: f,
                namespace: l,
                ignoreCase: d
              };
              o.push(p);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                o.push({
                  type: i.PseudoElement,
                  name: s(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? l() : null
                });
                continue
              }
              const e = s(1).toLowerCase();
              let n = null;
              if (40 === t.charCodeAt(r))
                if (v.has(e)) {
                  if (b(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (n = [], r = C(n, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (n = l(), g.has(e)) {
                    const e = n.charCodeAt(0);
                    e === n.charCodeAt(n.length - 1) && b(e) && (n = n.slice(1, -1))
                  }
                  n = w(n)
                } o.push({
                type: i.Pseudo,
                name: e,
                data: n
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
              let n, l = null;
              if (42 === e) r += 1, n = "*";
              else if (124 === e) {
                if (n = "", 124 === t.charCodeAt(r + 1)) {
                  u(i.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!d.test(t.slice(r))) break e;
                n = s(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (l = n, 42 === t.charCodeAt(r + 1) ? (n = "*", r += 2) : n = s(1)), o.push("*" === n ? {
                type: i.Universal,
                namespace: l
              } : {
                type: i.Tag,
                name: n,
                namespace: l
              })
            }
          }
        }
        return p(), r
      }

      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, i)
        }
        return r
      }

      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? A(Object(r), !0).forEach(function(t) {
            O(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function O(e, t, r) {
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
      const E = function e(t) {
        return r.withOptions = r => e(x(x({}, t), r)), r;

        function r(e, ...r) {
          const i = "string" == typeof e ? [e] : e.raw,
            {
              alignValues: n = !1,
              escapeSpecialCharacters: o = Array.isArray(e),
              trimWhitespace: s = !0
            } = t;
          let a = "";
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < r.length && (a += n ? T(r[e], a) : r[e])
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

      function T(e, t) {
        if ("string" != typeof e || !e.includes("\n")) return e;
        const r = t.slice(t.lastIndexOf("\n") + 1).match(/^(\s+)/);
        if (r) {
          const t = r[1];
          return e.replace(/\n/g, `\n${t}`)
        }
        return e
      }
      var L = function() {
        return L = Object.assign || function(e) {
          for (var t, r = 1, i = arguments.length; r < i; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, L.apply(this, arguments)
      };

      function _(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]])
        }
        return r
      }

      function z(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, o = r.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(i = o.next()).done;) s.push(i.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o)
          } finally {
            if (n) throw n.error
          }
        }
        return s
      }
      var F, j = /(\u000D|\u000C|\u000D\u000A)/g,
        R = /[\u0000\uD800-\uDFFF]/g,
        I = /(\/\*)[\s\S]*?(\*\/)/g,
        M = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), i = [], n = t + 1; n < e.length; n += 1) {
            var o = e.charCodeAt(n);
            if (o === r) return [n, String.fromCharCode.apply(null, i)];
            if (92 === o) {
              var s = D(e, n);
              if (null === s) return null;
              var a = z(s, 2),
                l = a[0],
                c = a[1];
              i.push(c), n = l
            } else {
              if (10 === o) return null;
              i.push(o)
            }
          }
          return null
        },
        P = function(e, t) {
          if (e.length <= t) return !1;
          var r, i = e.charCodeAt(t);
          return 45 === i ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128 || 92 === i && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        D = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var i = [r], n = Math.min(t + 7, e.length), o = t + 2; o < n; o += 1) {
              var s = e.charCodeAt(o);
              if (!(s >= 48 && s <= 57 || s >= 65 && s <= 70 || s >= 97 && s <= 102)) break;
              i.push(s)
            }
            if (o < e.length) {
              var a = e.charCodeAt(o);
              9 !== a && 32 !== a && 10 !== a || (o += 1)
            }
            return [o - 1, parseInt(String.fromCharCode.apply(null, i), 16)]
          }
          return [t + 1, r]
        },
        N = function(e, t) {
          var r = B(e, t);
          if (null === r) return null;
          var i = z(r, 3),
            n = i[0],
            o = i[1],
            s = i[2],
            a = $(e, n + 1);
          if (null !== a) {
            var l = z(a, 2);
            return [l[0],
              ["<dimension-token>", o, l[1]]
            ]
          }
          return n + 1 < e.length && 37 === e.charCodeAt(n + 1) ? [n + 1, ["<percentage-token>", o]] : [n, ["<number-token>", o, s]]
        },
        B = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            i = [],
            n = e.charCodeAt(t);
          for (43 !== n && 45 !== n || (t += 1, 45 === n && i.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) i.push(c), t += 1;
          if (t + 1 < e.length) {
            var o = e.charCodeAt(t),
              s = e.charCodeAt(t + 1);
            if (46 === o && s >= 48 && s <= 57)
              for (i.push(o, s), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) i.push(c), t += 1
          }
          if (t + 1 < e.length) {
            o = e.charCodeAt(t), s = e.charCodeAt(t + 1);
            var a = e.charCodeAt(t + 2);
            if (69 === o || 101 === o) {
              var l = s >= 48 && s <= 57;
              if (l || (43 === s || 45 === s) && a >= 48 && a <= 57)
                for (r = "number", l ? (i.push(69, s), t += 2) : 45 === s ? (i.push(69, 45, a), t += 3) : (i.push(69, a), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  i.push(c), t += 1
                }
            }
          }
          var h = String.fromCharCode.apply(null, i),
            u = "number" === r ? parseFloat(h) : parseInt(h);
          return -0 === u && (u = 0), Number.isNaN(u) ? null : [t - 1, u, r]
        },
        W = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], i = e.charCodeAt(t); t < e.length; i = e.charCodeAt(++t))
            if (45 === i || 95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128 || i >= 48 && i <= 57) r.push(i);
            else {
              var n = D(e, t);
              if (null === n) break;
              var o = z(n, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        $ = function(e, t) {
          if (e.length <= t || !P(e, t)) return null;
          for (var r = [], i = e.charCodeAt(t); t < e.length; i = e.charCodeAt(++t))
            if (45 === i || 95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128 || i >= 48 && i <= 57) r.push(i);
            else {
              var n = D(e, t);
              if (null === n) break;
              var o = z(n, 2),
                s = o[0],
                a = o[1];
              r.push(a), t = s
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        U = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var i = [], n = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, i)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) n || 0 === i.length || (n = !0);
            else if (92 === r) {
              var o = D(e, t);
              if (null === o || n) return null;
              var s = z(o, 2),
                a = s[0],
                l = s[1];
              i.push(l), t = a
            } else {
              if (n) return null;
              i.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        q = function(e, t) {
          var r = $(e, t);
          if (null === r) return null;
          var i = z(r, 2),
            n = i[0],
            o = i[1];
          if ("url" === o.toLowerCase()) {
            if (e.length > n + 1 && 40 === e.charCodeAt(n + 1)) {
              for (var s = 2; n + s < e.length; s += 1) {
                var a = e.charCodeAt(n + s);
                if (34 === a || 39 === a) return [n + 1, o.toLowerCase(), "<function-token>"];
                if (9 !== a && 32 !== a && 10 !== a) {
                  var l = U(e, n + s);
                  if (null === l) return null;
                  var c = z(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [n + 1, o.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > n + 1 && 40 === e.charCodeAt(n + 1)) return [n + 1, o.toLowerCase(), "<function-token>"];
          return [n, o.toLowerCase(), "<ident-token>"]
        },
        G = function(e) {
          if (null === e.mediaCondition) return e;
          var t = V(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        V = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var i = t.children[r];
            if (!("context" in i)) {
              var n = e(i);
              if (null === n.operator && 1 === n.children.length) t.children[r] = n.children[0];
              else if (n.operator === t.operator && ("and" === n.operator || "or" === n.operator)) {
                for (var o = [r, 1], s = 0; s < n.children.length; s++) o.push(n.children[s]);
                t.children.splice.apply(t.children, o)
              }
            }
          }
          return t
        },
        H = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        X = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(j, "\n").replace(R, "�")).replace(I, "");
            for (var r = []; t < e.length; t += 1) {
              var i = e.charCodeAt(t);
              if (9 === i || 32 === i || 10 === i) {
                for (var n = e.charCodeAt(++t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === i) {
                if (null === (x = M(e, t))) return null;
                var o = z(x, 2),
                  s = o[0],
                  a = o[1];
                r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (35 === i) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = P(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (x = W(e, t + 1))) {
                    var c = z(x, 2);
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
                  value: i
                })
              } else if (39 === i) {
                if (null === (x = M(e, t))) return null;
                var h = z(x, 2);
                s = h[0], a = h[1], r.push({
                  type: "<string-token>",
                  value: a
                }), t = s
              } else if (40 === i) r.push({
                type: "<(-token>"
              });
              else if (41 === i) r.push({
                type: "<)-token>"
              });
              else if (43 === i) {
                var u = N(e, t);
                if (null === u) r.push({
                  type: "<delim-token>",
                  value: i
                });
                else {
                  var f = z(u, 2);
                  s = f[0], "<dimension-token>" === (C = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: C[1],
                    unit: C[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === C[0] ? r.push({
                    type: C[0],
                    value: C[1],
                    flag: C[2]
                  }) : r.push({
                    type: C[0],
                    value: C[1],
                    flag: "number"
                  }), t = s
                }
              } else if (44 === i) r.push({
                type: "<comma-token>"
              });
              else if (45 === i) {
                if (null !== (y = N(e, t))) {
                  var d = z(y, 2);
                  s = d[0], "<dimension-token>" === (C = d[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: C[1],
                    unit: C[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === C[0] ? r.push({
                    type: C[0],
                    value: C[1],
                    flag: C[2]
                  }) : r.push({
                    type: C[0],
                    value: C[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (x = q(e, t))) {
                  var v = z(x, 3),
                    g = (s = v[0], a = v[1], v[2]);
                  r.push({
                    type: g,
                    value: a
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (46 === i) {
                var y;
                if (null !== (y = N(e, t))) {
                  var w = z(y, 2);
                  s = w[0], "<dimension-token>" === (C = w[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: C[1],
                    unit: C[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === C[0] ? r.push({
                    type: C[0],
                    value: C[1],
                    flag: C[2]
                  }) : r.push({
                    type: C[0],
                    value: C[1],
                    flag: "number"
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (58 === i) r.push({
                type: "<colon-token>"
              });
              else if (59 === i) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === i) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var b = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === b) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (64 === i) {
                if (null !== (x = $(e, t + 1))) {
                  var k = z(x, 2);
                  s = k[0], a = k[1], r.push({
                    type: "<at-keyword-token>",
                    value: a.toLowerCase()
                  }), t = s;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: i
                })
              } else if (91 === i) r.push({
                type: "<[-token>"
              });
              else if (92 === i) {
                if (null === (x = D(e, t))) return null;
                var S = z(x, 2);
                s = S[0], a = S[1], e = e.slice(0, t) + a + e.slice(s + 1), t -= 1
              } else if (93 === i) r.push({
                type: "<]-token>"
              });
              else if (123 === i) r.push({
                type: "<{-token>"
              });
              else if (125 === i) r.push({
                type: "<}-token>"
              });
              else if (i >= 48 && i <= 57) {
                var C, A = z(x = N(e, t), 2);
                s = A[0], "<dimension-token>" === (C = A[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: C[1],
                  unit: C[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === C[0] ? r.push({
                  type: C[0],
                  value: C[1],
                  flag: C[2]
                }) : r.push({
                  type: C[0],
                  value: C[1],
                  flag: "number"
                }), t = s
              } else if (95 === i || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i >= 128) {
                var x;
                if (null === (x = q(e, t))) return null;
                var O = z(x, 3);
                s = O[0], a = O[1], g = O[2], r.push({
                  type: g,
                  value: a
                }), t = s
              } else r.push({
                type: "<delim-token>",
                value: i
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw H("Failed tokenizing");
          var r = 0,
            i = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw H("Expected whitespace after media");
            r = 2;
            for (var n = 2; n < t.length - 1; n++) {
              var o = t[n];
              if ("<{-token>" === o.type) {
                i = n;
                break
              }
              if ("<semicolon-token>" === o.type) throw H("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, i), Z(t)
        },
        Y = function(e) {
          for (var t = [], r = !1, i = 0; i < e.length; i++) "<whitespace-token>" === e[i].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(L(L({}, e[i]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Z = function(e) {
          for (var t, r, i = [
              []
            ], n = 0; n < e.length; n++) {
            var o = e[n];
            "<comma-token>" === o.type ? i.push([]) : i[i.length - 1].push(o)
          }
          var s = i.map(Y);
          if (1 === s.length && 0 === s[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var a = s.map(function(e) {
              return 0 === e.length ? null : J(e)
            }),
            l = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && i >= e.length && (e = void 0), {
                      value: e && e[i++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(a), h = c.next(); !h.done; h = c.next()) {
              var u = h.value;
              null !== u && l.push(u)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              h && !h.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw H("No valid media queries");
          return l
        },
        J = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Q(e, !0)
            }
          } catch (e) {
            throw H("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw H("Expected media condition or media prefix");
            var r = null,
              i = void 0,
              n = t.value;
            "only" !== n && "not" !== n || (r = n);
            var o = null === r ? 0 : 1;
            if (e.length <= o) throw H("Expected extra token in media query");
            var s = e[o];
            if ("<ident-token>" === s.type) {
              var a = s.value;
              if ("all" === a) i = "all";
              else if ("print" === a || "screen" === a) i = a;
              else {
                if ("tty" !== a && "tv" !== a && "projection" !== a && "handheld" !== a && "braille" !== a && "embossed" !== a && "aural" !== a && "speech" !== a) throw H("Unknown ident '".concat(a, "' in media query"));
                r = "not" === r ? null : "not", i = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== s.type) throw H("Invalid media query");
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
                throw H("Expected media condition after '('", e)
              }
            }
            if (o + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: i,
              mediaCondition: null
            };
            if (!(o + 4 < e.length)) throw H("Expected media condition after media prefix");
            var c = e[o + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw H("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: i,
                mediaCondition: Q(e.slice(o + 2), !1)
              }
            } catch (e) {
              throw H("Expected media condition after 'and'", e)
            }
          }
        },
        Q = function e(t, r, i) {
          if (void 0 === i && (i = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var n, o = t.length - 1, s = 0, a = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (a += 1, s = Math.max(s, a)) : "<)-token>" === c.type && (a -= 1), 0 === a) {
              o = l;
              break
            }
          }
          if (0 !== a) throw new Error("Mismatched parens\nInvalid media condition");
          var h = t.slice(0, o + 1);
          if (n = 1 === s ? K(h) : "<ident-token>" === h[1].type && "not" === h[1].value ? e(h.slice(2, -1), !0, "not") : e(h.slice(1, -1), !0), o === t.length - 1) return {
            operator: i,
            children: [n]
          };
          var u = t[o + 1];
          if ("<ident-token>" !== u.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== i && i !== u.value) throw new Error("'".concat(u.value, "' and '").concat(i, "' must not be at same level\nInvalid media condition"));
          if ("or" === u.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== u.value && "or" !== u.value) throw new Error("Invalid operator: '".concat(u.value, "'\nInvalid media condition"));
          var f = e(t.slice(o + 2), r, u.value);
          return {
            operator: u.value,
            children: [n].concat(f.children)
          }
        },
        K = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var i = e[r],
                n = e[r + 1],
                o = e[r + 2];
              if ("<number-token>" === i.type && i.value > 0 && "<delim-token>" === n.type && 47 === n.value && "<number-token>" === o.type && o.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: i.value,
                  denominator: o.value,
                  wsBefore: i.wsBefore,
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
                h = l.slice(0, 4);
              return "min-" === h ? (c = "min", l = l.slice(4)) : "max-" === h && (c = "max", l = l.slice(4)), a.wsBefore, a.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: _(a, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var u = ee(t);
            return {
              context: "range",
              feature: u.featureName,
              range: u
            }
          } catch (e) {
            throw H("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        ee = function(e) {
          var t, r, i, n;
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
                  h = e[a + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var u = c.value;
                if (60 === u) "<delim-token>" !== h.type || 61 !== h.value || h.wsBefore ? o.rightOp = "<" : o.rightOp = "<=";
                else {
                  if (62 !== u) throw new Error("Invalid range");
                  "<delim-token>" !== h.type || 61 !== h.value || h.wsBefore ? o.rightOp = ">" : o.rightOp = ">="
                }
                var f = e[a + 1 + (null !== (n = null === (i = o.rightOp) || void 0 === i ? void 0 : i.length) && void 0 !== n ? n : 0)];
                o.rightToken = f
              } else if (a + 2 !== e.length) throw new Error("Invalid range")
            } else o.rightToken = l;
            var d = null,
              p = o.leftToken,
              m = o.leftOp,
              v = o.featureName,
              g = o.rightOp,
              y = o.rightToken,
              w = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var b = p.type;
                "infinite" === (S = p.value) && (w = {
                  type: b,
                  value: S
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, w = _(p, ["wsBefore", "wsAfter"]));
            var k = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var S;
                b = y.type, "infinite" === (S = y.value) && (k = {
                  type: b,
                  value: S
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, k = _(y, ["wsBefore", "wsAfter"]));
            if (null !== w && null !== k)
              if ("<" !== m && "<=" !== m || "<" !== g && "<=" !== g) {
                if (">" !== m && ">=" !== m || ">" !== g && ">=" !== g) throw new Error("Invalid range");
                d = {
                  leftToken: w,
                  leftOp: m,
                  featureName: v,
                  rightOp: g,
                  rightToken: k
                }
              } else d = {
                leftToken: w,
                leftOp: m,
                featureName: v,
                rightOp: g,
                rightToken: k
              };
            else(null === w && null === m && null !== g && null !== k || null !== w && null !== m && null === g && null === k) && (d = {
              leftToken: w,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: k
            });
            return d
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
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, i)
        }
        return r
      }

      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(r), !0).forEach(function(t) {
            var i, n, o;
            i = e, n = t, o = r[t], (n = te(n)) in i ? Object.defineProperty(i, n, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : i[n] = o
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ne(e, t) {
        if (null == e) return {};
        var r, i, n = function(e, t) {
          if (null == e) return {};
          var r, i, n = {},
            o = Object.keys(e);
          for (i = 0; i < o.length; i++) r = o[i], t.indexOf(r) >= 0 || (n[r] = e[r]);
          return n
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++) r = o[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
        }
        return n
      }

      function oe(e, t) {
        for (var r in e) t(e[r], r)
      }

      function se(e, t) {
        var r = {};
        for (var i in e) - 1 === t.indexOf(i) && (r[i] = e[i]);
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
            var i = t.findOrCreateCondition(r);
            t = i.children
          }
          return t
        }
        addRule(e, t, r) {
          var i = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!i) throw new Error("Failed to add conditional rule");
          i.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), i = 0; i < t.length; i++) {
            var n, o = t[i],
              s = null !== (n = r.precedenceLookup.get(o)) && void 0 !== n ? n : new Set;
            for (var a of t.slice(i + 1)) s.add(a);
            r.precedenceLookup.set(o, s)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var i of r) {
              var n;
              if (null !== (n = e.precedenceLookup.get(i)) && void 0 !== n && n.has(t)) return !1
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
              children: i
            }
            of e.ruleset.values()) {
            var n = this.ruleset.get(t);
            n ? (n.rules.push(...r), n.children.merge(i)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: i
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
              var n = e.ruleset.get(i);
              if (!n) throw new Error("Can't find condition for ".concat(i));
              var o = t.findIndex(e => r.has(e.query));
              o > -1 ? t.splice(o, 0, n) : t.push(n)
            };
          for (var [i, n] of this.precedenceLookup.entries()) r(n);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: i
            }
            of this.getSortedRuleset()) {
            var n = {};
            for (var o of r) n[o.selector] = ie(ie({}, n[o.selector]), o.rule);
            Object.assign(n, ...i.renderToArray()), e.push({
              [t]: n
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
        he = Object.keys(ce),
        ue = ce,
        fe = (e, t) => new Error(E(le || (le = f(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        de = e => {
          if ("@media " === e) throw fe(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = G(e[t])
            })(X(e))
          } catch (t) {
            throw fe(e, t.message)
          }
        },
        pe = ["vars"],
        me = ["content"],
        ve = "__DECLARATION",
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

      function ye(e, t, r, i) {
        var n = e.slice(0, t),
          o = e.slice(r);
        return "".concat(n).concat(i).concat(o)
      }
      var we = [...he, "@layer", "@media", "@supports", "@container", "@starting-style", "selectors"];
      class be {
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
                var r = se(e.rule, we);
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
            i = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var n = t[t.length - 1],
            o = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: i,
            rule: r
          }, n, o)
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
          } = e, r = ne(e, pe);
          return t ? ie(ie({}, function(e, t) {
            var r = {};
            for (var i in e) r[t(e[i], i)] = e[i];
            return r
          }(t, (e, t) => (0, s.Tm)(t))), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = ne(e, me);
          return void 0 === t ? r : ie({
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
              t = t.replace(n, () => (function() {
                (() => {
                  if (h.length < 1) throw new Error("No adapter configured");
                  return h[h.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e))
            };
          for (var {
              identifier: i,
              regex: n
            }
            of this.composedClassLists) r(i);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var o = this.localClassNamesSearch.search(t), s = t.length, a = o.length - 1; a >= 0; a--) {
            var [l, [c]] = o[a], u = l - c.length + 1;
            s <= l || (s = u, "." !== t[u - 1] && (t = ye(t, u, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          oe(t.selectors, (t, i) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var n = this.transformSelector(i.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, i = () => {
                var r = new RegExp(".".concat(l()(t, {
                  isIdentifier: !0
                }).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = S(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(i()), {
                  cause: e
                })
              }
              r.forEach(e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var n = e[r];
                    if ("child" === n.type || "parent" === n.type || "sibling" === n.type || "adjacent" === n.type || "descendant" === n.type) throw new Error;
                    if ("attribute" === n.type && "class" === n.name && n.value === t) return
                  }
                } catch (e) {
                  throw new Error(E(F || (F = f(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), i(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"), {
                    cause: e
                  })
                }
              })
            })(n, e.selector);
            var o = {
              selector: n,
              rule: se(t, we)
            };
            r ? this.addConditionalRule(o, r) : this.addRule(o);
            var s = {
              type: "selector",
              selector: n,
              rule: t
            };
            this.transformLayer(s, t["@layer"], r), this.transformSupports(s, t["@supports"], r), this.transformMedia(s, t["@media"], r), this.transformContainer(s, t["@container"], r), this.transformStartingStyle(s, t["@starting-style"], r)
          })
        }
        transformMedia(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [n, o] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@media ".concat(e))), Object.entries(t))) {
              var s = "@media ".concat(n);
              de(s);
              var a = [...i, s];
              this.addConditionalRule({
                selector: e.selector,
                rule: se(o, we)
              }, a), "local" === e.type && (this.transformSimplePseudos(e, o, a), this.transformSelectors(e, o, a)), this.transformLayer(e, o["@layer"], a), this.transformSupports(e, o["@supports"], a), this.transformContainer(e, o["@container"], a), this.transformStartingStyle(e, o["@starting-style"], a)
            }
        }
        transformContainer(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@container ".concat(e))), oe(t, (t, r) => {
            var n = "@container ".concat(r),
              o = [...i, n];
            this.addConditionalRule({
              selector: e.selector,
              rule: se(t, we)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformSupports(e, t["@supports"], o), this.transformMedia(e, t["@media"], o), this.transformStartingStyle(e, t["@starting-style"], o)
          }))
        }
        transformLayer(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@layer ".concat(e))), oe(t, (t, r) => {
            var n = [...i, "@layer ".concat(r)];
            this.addLayer(n), this.addConditionalRule({
              selector: e.selector,
              rule: se(t, we)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n)), this.transformMedia(e, t["@media"], n), this.transformSupports(e, t["@supports"], n), this.transformContainer(e, t["@container"], n), this.transformStartingStyle(e, t["@starting-style"], n)
          }))
        }
        transformSupports(e, t) {
          var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(i, Object.keys(t).map(e => "@supports ".concat(e))), oe(t, (t, r) => {
            var n = [...i, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: se(t, we)
            }, n), "local" === e.type && (this.transformSimplePseudos(e, t, n), this.transformSelectors(e, t, n)), this.transformLayer(e, t["@layer"], n), this.transformMedia(e, t["@media"], n), this.transformContainer(e, t["@container"], n), this.transformStartingStyle(e, t["@starting-style"], n)
          }))
        }
        transformSimplePseudos(e, t, r) {
          for (var i of Object.keys(t))
            if (ue[i]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(i),
                rule: t[i]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(i),
                rule: t[i]
              })
            }
        }
        transformStartingStyle(e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t) {
            var i, n = Object.keys(t).find(e => e.startsWith("@"));
            if (n) throw new Error('Nested at-rules (e.g. "'.concat(n, '") are not allowed inside @starting-style.'));
            null === (i = this.currConditionalRuleset) || void 0 === i || i.addConditionPrecedence(r, ["@starting-style"]);
            var o = [...r, "@starting-style"];
            this.addConditionalRule({
              selector: e.selector,
              rule: se(t, we)
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
          for (var i of this.keyframesRules) e.push(ke({
            ["@keyframes ".concat(i.name)]: i.rule
          }));
          for (var n of this.layers.values()) {
            var [o, ...s] = n.reverse(), a = {
              [o]: ve
            };
            for (var l of s) a = {
              [l]: a
            };
            e.push(ke(a))
          }
          for (var c of this.rules) e.push(ke({
            [c.selector]: c.rule
          }));
          for (var h of this.conditionalRulesets)
            for (var u of h.renderToArray()) e.push(ke(u));
          return e.filter(Boolean)
        }
      }

      function ke(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          i = function(i) {
            var n, o = e[i];
            o && Array.isArray(o) ? r.push(...o.map(e => ke({
              [i]: e
            }, t))) : o && "object" == typeof o ? 0 === Object.keys(o).length || r.push("".concat(t).concat(i, " {\n").concat(ke(o, t + "  "), "\n").concat(t, "}")) : o === ve ? r.push("".concat(t).concat(i, ";")) : r.push("".concat(t).concat(i.startsWith("--") ? i : (n = i, n.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(o, ";"))
          };
        for (var n of Object.keys(e)) i(n);
        return r.join("\n")
      }
      var Se = r(42649);
      const Ce = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Ae = new Set,
        xe = "object" == typeof Se && Se ? Se : {},
        Oe = (e, t, r, i) => {
          "function" == typeof xe.emitWarning ? xe.emitWarning(e, t, r, i) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Ee = globalThis.AbortController,
        Te = globalThis.AbortSignal;
      if (void 0 === Ee) {
        Te = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Ee = class {
          constructor() {
            t()
          }
          signal = new Te;
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== xe.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Oe("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Le = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        _e = e => Le(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? ze : null : null;
      class ze extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Fe {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = _e(e);
          if (!t) return [];
          Fe.#e = !0;
          const r = new Fe(e, t);
          return Fe.#e = !1, r
        }
        constructor(e, t) {
          if (!Fe.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class je {
        #t;
        #r;
        #i;
        #n;
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
        #h;
        #u;
        #f;
        #d;
        #p;
        #m;
        #v;
        #g;
        #y;
        #w;
        #b;
        #k;
        #S;
        #C;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#w,
            ttls: e.#b,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#h,
            valList: e.#u,
            next: e.#f,
            prev: e.#d,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#m
            },
            free: e.#v,
            isBackgroundFetch: t => e.#A(t),
            backgroundFetch: (t, r, i, n) => e.#x(t, r, i, n),
            moveToTail: t => e.#O(t),
            indexes: t => e.#E(t),
            rindexes: t => e.#T(t),
            isStale: t => e.#L(t)
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
          return this.#i
        }
        get disposeAfter() {
          return this.#n
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: i = 1,
            ttlAutopurge: n,
            updateAgeOnGet: o,
            updateAgeOnHas: s,
            allowStale: a,
            dispose: l,
            disposeAfter: c,
            noDisposeOnSet: h,
            noUpdateTTL: u,
            maxSize: f = 0,
            maxEntrySize: d = 0,
            sizeCalculation: p,
            fetchMethod: m,
            memoMethod: v,
            noDeleteOnFetchRejection: g,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: w,
            allowStaleOnFetchAbort: b,
            ignoreFetchAbort: k
          } = e;
          if (0 !== t && !Le(t)) throw new TypeError("max option must be a nonnegative integer");
          const S = t ? _e(t) : Array;
          if (!S) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = f, this.maxEntrySize = d || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== v && "function" != typeof v) throw new TypeError("memoMethod must be a function if defined");
          if (this.#s = v, void 0 !== m && "function" != typeof m) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#o = m, this.#S = !!m, this.#c = new Map, this.#h = new Array(t).fill(void 0), this.#u = new Array(t).fill(void 0), this.#f = new S(t), this.#d = new S(t), this.#p = 0, this.#m = 0, this.#v = Fe.create(t), this.#a = 0, this.#l = 0, "function" == typeof l && (this.#i = l), "function" == typeof c ? (this.#n = c, this.#g = []) : (this.#n = void 0, this.#g = void 0), this.#k = !!this.#i, this.#C = !!this.#n, this.noDisposeOnSet = !!h, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!g, this.allowStaleOnFetchRejection = !!w, this.allowStaleOnFetchAbort = !!b, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Le(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Le(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#_()
          }
          if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!s, this.ttlResolution = Le(i) || 0 === i ? i : 1, this.ttlAutopurge = !!n, this.ttl = r || 0, this.ttl) {
            if (!Le(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#z()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Ae.has(e))(e) && (Ae.add(e), Oe("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, je))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #z() {
          const e = new ze(this.#t),
            t = new ze(this.#t);
          this.#b = e, this.#w = t, this.#F = (r, i, n = Ce.now()) => {
            if (t[r] = 0 !== i ? n : 0, e[r] = i, 0 !== i && this.ttlAutopurge) {
              const e = setTimeout(() => {
                this.#L(r) && this.#j(this.#h[r], "expire")
              }, i + 1);
              e.unref && e.unref()
            }
          }, this.#R = r => {
            t[r] = 0 !== e[r] ? Ce.now() : 0
          }, this.#I = (n, o) => {
            if (e[o]) {
              const s = e[o],
                a = t[o];
              if (!s || !a) return;
              n.ttl = s, n.start = a, n.now = r || i();
              const l = n.now - a;
              n.remainingTTL = s - l
            }
          };
          let r = 0;
          const i = () => {
            const e = Ce.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout(() => r = 0, this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = n => {
            const o = this.#c.get(n);
            if (void 0 === o) return 0;
            const s = e[o],
              a = t[o];
            return s && a ? s - ((r || i()) - a) : 1 / 0
          }, this.#L = n => {
            const o = t[n],
              s = e[n];
            return !!s && !!o && (r || i()) - o > s
          }
        }
        #R = () => {};
        #I = () => {};
        #F = () => {};
        #L = () => !1;
        #_() {
          const e = new ze(this.#t);
          this.#l = 0, this.#y = e, this.#M = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#P = (e, t, r, i) => {
            if (this.#A(t)) return 0;
            if (!Le(r)) {
              if (!i) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof i) throw new TypeError("sizeCalculation must be a function");
              if (r = i(t, e), !Le(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#D = (t, r, i) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#N(!0)
            }
            this.#l += e[t], i && (i.entrySize = r, i.totalCalculatedSize = this.#l)
          }
        }
        #M = e => {};
        #D = (e, t, r) => {};
        #P = (e, t, r, i) => {
          if (r || i) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };* #E({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#m; this.#B(t) && (!e && this.#L(t) || (yield t), t !== this.#p);) t = this.#d[t]
        }* #T({
          allowStale: e = this.allowStale
        } = {}) {
          if (this.#a)
            for (let t = this.#p; this.#B(t) && (!e && this.#L(t) || (yield t), t !== this.#m);) t = this.#f[t]
        }
        #B(e) {
          return void 0 !== e && this.#c.get(this.#h[e]) === e
        }* entries() {
          for (const e of this.#E()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#A(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* rentries() {
          for (const e of this.#T()) void 0 === this.#u[e] || void 0 === this.#h[e] || this.#A(this.#u[e]) || (yield [this.#h[e], this.#u[e]])
        }* keys() {
          for (const e of this.#E()) {
            const t = this.#h[e];
            void 0 === t || this.#A(this.#u[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#T()) {
            const t = this.#h[e];
            void 0 === t || this.#A(this.#u[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#E()) void 0 === this.#u[e] || this.#A(this.#u[e]) || (yield this.#u[e])
        }* rvalues() {
          for (const e of this.#T()) void 0 === this.#u[e] || this.#A(this.#u[e]) || (yield this.#u[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e, t = {}) {
          for (const r of this.#E()) {
            const i = this.#u[r],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            if (void 0 !== n && e(n, this.#h[r], this)) return this.get(this.#h[r], t)
          }
        }
        forEach(e, t = this) {
          for (const r of this.#E()) {
            const i = this.#u[r],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            void 0 !== n && e.call(t, n, this.#h[r], this)
          }
        }
        rforEach(e, t = this) {
          for (const r of this.#T()) {
            const i = this.#u[r],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            void 0 !== n && e.call(t, n, this.#h[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#T({
              allowStale: !0
            })) this.#L(t) && (this.#j(this.#h[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#u[t],
            i = this.#A(r) ? r.__staleWhileFetching : r;
          if (void 0 === i) return;
          const n = {
            value: i
          };
          if (this.#b && this.#w) {
            const e = this.#b[t],
              r = this.#w[t];
            if (e && r) {
              const t = e - (Ce.now() - r);
              n.ttl = t, n.start = Date.now()
            }
          }
          return this.#y && (n.size = this.#y[t]), n
        }
        dump() {
          const e = [];
          for (const t of this.#E({
              allowStale: !0
            })) {
            const r = this.#h[t],
              i = this.#u[t],
              n = this.#A(i) ? i.__staleWhileFetching : i;
            if (void 0 === n || void 0 === r) continue;
            const o = {
              value: n
            };
            if (this.#b && this.#w) {
              o.ttl = this.#b[t];
              const e = Ce.now() - this.#w[t];
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
              r.start = Ce.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t, r = {}) {
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: i = this.ttl,
            start: n,
            noDisposeOnSet: o = this.noDisposeOnSet,
            sizeCalculation: s = this.sizeCalculation,
            status: a
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const c = this.#P(e, t, r.size || 0, s);
          if (this.maxEntrySize && c > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#j(e, "set"), this;
          let h = 0 === this.#a ? void 0 : this.#c.get(e);
          if (void 0 === h) h = 0 === this.#a ? this.#m : 0 !== this.#v.length ? this.#v.pop() : this.#a === this.#t ? this.#N(!1) : this.#a, this.#h[h] = e, this.#u[h] = t, this.#c.set(e, h), this.#f[this.#m] = h, this.#d[h] = this.#m, this.#m = h, this.#a++, this.#D(h, c, a), a && (a.set = "add"), l = !1;
          else {
            this.#O(h);
            const r = this.#u[h];
            if (t !== r) {
              if (this.#S && this.#A(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || o || (this.#k && this.#i?.(t, e, "set"), this.#C && this.#g?.push([t, e, "set"]))
              } else o || (this.#k && this.#i?.(r, e, "set"), this.#C && this.#g?.push([r, e, "set"]));
              if (this.#M(h), this.#D(h, c, a), this.#u[h] = t, a) {
                a.set = "replace";
                const e = r && this.#A(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (a.oldValue = e)
              }
            } else a && (a.set = "update")
          }
          if (0 === i || this.#b || this.#z(), this.#b && (l || this.#F(h, i, n), a && this.#I(a, h)), !o && this.#C && this.#g) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#n?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#a;) {
              const e = this.#u[this.#p];
              if (this.#N(!0), this.#A(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#C && this.#g) {
              const e = this.#g;
              let t;
              for (; t = e?.shift();) this.#n?.(...t)
            }
          }
        }
        #N(e) {
          const t = this.#p,
            r = this.#h[t],
            i = this.#u[t];
          return this.#S && this.#A(i) ? i.__abortController.abort(new Error("evicted")) : (this.#k || this.#C) && (this.#k && this.#i?.(i, r, "evict"), this.#C && this.#g?.push([i, r, "evict"])), this.#M(t), e && (this.#h[t] = void 0, this.#u[t] = void 0, this.#v.push(t)), 1 === this.#a ? (this.#p = this.#m = 0, this.#v.length = 0) : this.#p = this.#f[t], this.#c.delete(r), this.#a--, t
        }
        has(e, t = {}) {
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: i
          } = t, n = this.#c.get(e);
          if (void 0 !== n) {
            const e = this.#u[n];
            if (this.#A(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#L(n)) return r && this.#R(n), i && (i.has = "hit", this.#I(i, n)), !0;
            i && (i.has = "stale", this.#I(i, n))
          } else i && (i.has = "miss");
          return !1
        }
        peek(e, t = {}) {
          const {
            allowStale: r = this.allowStale
          } = t, i = this.#c.get(e);
          if (void 0 === i || !r && this.#L(i)) return;
          const n = this.#u[i];
          return this.#A(n) ? n.__staleWhileFetching : n
        }
        #x(e, t, r, i) {
          const n = void 0 === t ? void 0 : this.#u[t];
          if (this.#A(n)) return n;
          const o = new Ee,
            {
              signal: s
            } = r;
          s?.addEventListener("abort", () => o.abort(s.reason), {
            signal: o.signal
          });
          const a = {
              signal: o.signal,
              options: r,
              context: i
            },
            l = (i, n = !1) => {
              const {
                aborted: s
              } = o.signal, l = r.ignoreFetchAbort && void 0 !== i;
              if (r.status && (s && !n ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !l && !n) return c(o.signal.reason);
              const u = h;
              return this.#u[t] === h && (void 0 === i ? u.__staleWhileFetching ? this.#u[t] = u.__staleWhileFetching : this.#j(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, i, a.options))), i
            },
            c = i => {
              const {
                aborted: n
              } = o.signal, s = n && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, c = h;
              if (this.#u[t] === h && (l && void 0 !== c.__staleWhileFetching ? s || (this.#u[t] = c.__staleWhileFetching) : this.#j(e, "fetch")), a) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw i
            };
          r.status && (r.status.fetchDispatched = !0);
          const h = new Promise((t, i) => {
              const s = this.#o?.(e, n, a);
              s && s instanceof Promise && s.then(e => t(void 0 === e ? void 0 : e), i), o.signal.addEventListener("abort", () => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => l(e, !0)))
              })
            }).then(l, e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), c(e))),
            u = Object.assign(h, {
              __abortController: o,
              __staleWhileFetching: n,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, u, {
            ...a.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#u[t] = u, u
        }
        #A(e) {
          if (!this.#S) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Ee
        }
        async fetch(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: i = this.updateAgeOnGet,
            noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
            ttl: o = this.ttl,
            noDisposeOnSet: s = this.noDisposeOnSet,
            size: a = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: h = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: u = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: f = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: d = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: m = !1,
            status: v,
            signal: g
          } = t;
          if (!this.#S) return v && (v.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: i,
            noDeleteOnStaleGet: n,
            status: v
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: i,
            noDeleteOnStaleGet: n,
            ttl: o,
            noDisposeOnSet: s,
            size: a,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: h,
            allowStaleOnFetchRejection: u,
            allowStaleOnFetchAbort: d,
            ignoreFetchAbort: f,
            status: v,
            signal: g
          };
          let w = this.#c.get(e);
          if (void 0 === w) {
            v && (v.fetch = "miss");
            const t = this.#x(e, w, y, p);
            return t.__returned = t
          } {
            const t = this.#u[w];
            if (this.#A(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return v && (v.fetch = "inflight", e && (v.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const n = this.#L(w);
            if (!m && !n) return v && (v.fetch = "hit"), this.#O(w), i && this.#R(w), v && this.#I(v, w), t;
            const o = this.#x(e, w, y, p),
              s = void 0 !== o.__staleWhileFetching && r;
            return v && (v.fetch = n ? "stale" : "refresh", s && n && (v.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
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
            context: i,
            forceRefresh: n,
            ...o
          } = t, s = this.get(e, o);
          if (!n && void 0 !== s) return s;
          const a = r(e, s, {
            options: o,
            context: i
          });
          return this.set(e, a, o), a
        }
        get(e, t = {}) {
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: i = this.updateAgeOnGet,
            noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
            status: o
          } = t, s = this.#c.get(e);
          if (void 0 !== s) {
            const t = this.#u[s],
              a = this.#A(t);
            return o && this.#I(o, s), this.#L(s) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (n || this.#j(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#O(s), i && this.#R(s), t))
          }
          o && (o.get = "miss")
        }
        #W(e, t) {
          this.#d[t] = e, this.#f[e] = t
        }
        #O(e) {
          e !== this.#m && (e === this.#p ? this.#p = this.#f[e] : this.#W(this.#d[e], this.#f[e]), this.#W(this.#m, e), this.#m = e)
        }
        delete(e) {
          return this.#j(e, "delete")
        }
        #j(e, t) {
          let r = !1;
          if (0 !== this.#a) {
            const i = this.#c.get(e);
            if (void 0 !== i)
              if (r = !0, 1 === this.#a) this.#$(t);
              else {
                this.#M(i);
                const r = this.#u[i];
                if (this.#A(r) ? r.__abortController.abort(new Error("deleted")) : (this.#k || this.#C) && (this.#k && this.#i?.(r, e, t), this.#C && this.#g?.push([r, e, t])), this.#c.delete(e), this.#h[i] = void 0, this.#u[i] = void 0, i === this.#m) this.#m = this.#d[i];
                else if (i === this.#p) this.#p = this.#f[i];
                else {
                  const e = this.#d[i];
                  this.#f[e] = this.#f[i];
                  const t = this.#f[i];
                  this.#d[t] = this.#d[i]
                }
                this.#a--, this.#v.push(i)
              }
          }
          if (this.#C && this.#g?.length) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#n?.(...t)
          }
          return r
        }
        clear() {
          return this.#$("delete")
        }
        #$(e) {
          for (const t of this.#T({
              allowStale: !0
            })) {
            const r = this.#u[t];
            if (this.#A(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const i = this.#h[t];
              this.#k && this.#i?.(r, i, e), this.#C && this.#g?.push([r, i, e])
            }
          }
          if (this.#c.clear(), this.#u.fill(void 0), this.#h.fill(void 0), this.#b && this.#w && (this.#b.fill(0), this.#w.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#m = 0, this.#v.length = 0, this.#l = 0, this.#a = 0, this.#C && this.#g) {
            const e = this.#g;
            let t;
            for (; t = e?.shift();) this.#n?.(...t)
          }
        }
      }
      r(79465);
      var Re = new Set,
        Ie = [],
        Me = [];
      u || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        u = !0, h.push(e)
      })({
        appendCss: e => {
          Me.push(e)
        },
        registerClassName: e => {
          Re.add(e)
        },
        registerComposition: e => {
          Ie.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: i
            } = e, n = new be(t, i);
            for (var o of r) n.processCssObj(o);
            return n.toCss()
          }({
            localClassNames: Array.from(Re),
            composedClassLists: Ie,
            cssObjs: Me
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, i = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, n = o[i];
            if (!n) {
              var s = document.createElement("style");
              t.packageName && s.setAttribute("data-package", t.packageName), s.setAttribute("data-file", t.filePath), s.setAttribute("type", "text/css"), n = o[i] = s, document.head.appendChild(s)
            }
            n.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), Me = []
        },
        getIdentOption: () => "short"
      });
      new je({
        max: 500
      })
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    86601: (e, t, r) => {
      var i = r(56312),
        n = r(78328),
        o = r(21574),
        s = r(56130),
        a = r(81966);
      e.exports = function(e, t, r, l) {
        if (!s(e)) return e;
        for (var c = -1, h = (t = n(t, e)).length, u = h - 1, f = e; null != f && ++c < h;) {
          var d = a(t[c]),
            p = r;
          if ("__proto__" === d || "constructor" === d || "prototype" === d) return e;
          if (c != u) {
            var m = f[d];
            void 0 === (p = l ? l(m, d, f) : void 0) && (p = s(m) ? m : o(t[c + 1]) ? [] : {})
          }
          i(f, d, p), f = f[d]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var i = r(85531),
        n = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, i(e) + 1).replace(n, "") : e
      }
    },
    95187: (e, t, r) => {
      var i = r(22909),
        n = 1 / 0;
      e.exports = function(e) {
        return e ? (e = i(e)) === n || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => s,
        t: () => o
      });
      var i = r(71127);

      function n(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function o(...e) {
        return t => {
          let r = !1;
          const i = e.map(e => {
            const i = n(e, t);
            return r || "function" != typeof i || (r = !0), i
          });
          if (r) return () => {
            for (let t = 0; t < i.length; t++) {
              const r = i[t];
              "function" == typeof r ? r() : n(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return i.useCallback(o(...e), e)
      }
    },
    98312: (e, t, r) => {
      var i = r(99335)();
      e.exports = i
    },
    99335: (e, t, r) => {
      var i = r(75888),
        n = r(4661),
        o = r(95187);
      e.exports = function(e) {
        return function(t, r, s) {
          return s && "number" != typeof s && n(t, r, s) && (r = s = void 0), t = o(t), void 0 === r ? (r = t, t = 0) : r = o(r), s = void 0 === s ? t < r ? 1 : -1 : o(s), i(t, r, s, e)
        }
      }
    }
  }
]);