/*! For license information please see 55cd069b9d27bf099156.js.LICENSE.txt */
(self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [155], {
    217: (e, t, n) => {
      "use strict";
      n.d(t, {
        vU: () => d
      });
      var i, s, r = n(625),
        o = n(289),
        a = n(587);
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(i || (i = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(s || (s = {}));
      var l = function(e) {
        var t = (0, a.Z)(),
          n = e.value,
          i = e.children,
          s = (0, r._T)(e, ["value", "children"]);
        return i(t.formatNumberToParts(n, s))
      };

      function c(e) {
        var t = function(t) {
          var n = (0, a.Z)(),
            i = t.value,
            s = t.children,
            o = (0, r._T)(t, ["value", "children"]),
            l = "string" == typeof i ? new Date(i || 0) : i;
          return s("formatDate" === e ? n.formatDateToParts(l, o) : n.formatTimeToParts(l, o))
        };
        return t.displayName = s[e], t
      }

      function u(e) {
        var t = function(t) {
          var n = (0, a.Z)(),
            i = t.value,
            s = t.children,
            l = (0, r._T)(t, ["value", "children"]),
            c = n[e](i, l);
          if ("function" == typeof s) return s(c);
          var u = n.textComponent || o.Fragment;
          return o.createElement(u, null, c)
        };
        return t.displayName = i[e], t
      }

      function d(e) {
        return e
      }
      l.displayName = "FormattedNumberParts", l.displayName = "FormattedNumberParts", u("formatDate"), u("formatTime"), u("formatNumber"), u("formatList"), u("formatDisplayName"), c("formatDate"), c("formatTime")
    },
    86: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => u
      });
      var i = n(625),
        s = n(289),
        r = n(587),
        o = n(238);

      function a(e, t) {
        var n = e.values,
          s = (0, i._T)(e, ["values"]),
          r = t.values,
          a = (0, i._T)(t, ["values"]);
        return (0, o.wU)(r, n) && (0, o.wU)(s, a)
      }

      function l(e) {
        var t = (0, r.Z)(),
          n = t.formatMessage,
          i = t.textComponent,
          o = void 0 === i ? s.Fragment : i,
          a = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          h = void 0 === p ? o : p,
          f = n({
            id: a,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(f) ? f : [f]) : h ? s.createElement(h, null, s.Children.toArray(f)) : s.createElement(s.Fragment, null, f)
      }
      l.displayName = "FormattedMessage";
      var c = s.memo(l, a);
      c.displayName = "MemoizedFormattedMessage";
      const u = c
    },
    587: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => a
      });
      var i = n(289);
      n(355);
      var s = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? i.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = i.createContext(null)),
        r = (s.Consumer, s.Provider, s),
        o = n(238);

      function a() {
        var e = i.useContext(r);
        return (0, o.lq)(e), e
      }
    },
    238: (e, t, n) => {
      "use strict";
      n.d(t, {
        lq: () => o,
        wU: () => a
      });
      var i = n(625),
        s = n(289);

      function r() {
        this.cache = Object.create(null)
      }
      r.prototype.get = function(e) {
        return this.cache[e]
      }, r.prototype.set = function(e, t) {
        this.cache[e] = t
      };

      function o(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }

      function a(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = Object.keys(e),
          i = Object.keys(t),
          s = n.length;
        if (i.length !== s) return !1;
        for (var r = 0; r < s; r++) {
          var o = n[r];
          if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1
        }
        return !0
      }(0, i.pi)((0, i.pi)({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      }), {
        textComponent: s.Fragment
      })
    },
    355: (e, t, n) => {
      "use strict";
      var i = n(753),
        s = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        r = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function l(e) {
        return i.isMemo(e) ? o : a[e.$$typeof] || s
      }
      a[i.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[i.Memo] = o;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(t, n, i) {
        if ("string" != typeof n) {
          if (f) {
            var s = h(n);
            s && s !== f && e(t, s, i)
          }
          var o = u(n);
          d && (o = o.concat(d(n)));
          for (var a = l(t), m = l(n), g = 0; g < o.length; ++g) {
            var v = o[g];
            if (!(r[v] || i && i[v] || m && m[v] || a && a[v])) {
              var y = p(n, v);
              try {
                c(t, v, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    865: e => {
      var t, n, i = e.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function r() {
        throw new Error("clearTimeout has not been defined")
      }

      function o(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
          t = s
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
          n = r
        }
      }();
      var a, l = [],
        c = !1,
        u = -1;

      function d() {
        c && a && (c = !1, a.length ? l = a.concat(l) : u = -1, l.length && p())
      }

      function p() {
        if (!c) {
          var e = o(d);
          c = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++u < t;) a && a[u].run();
            u = -1, t = l.length
          }
          a = null, c = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function f() {}
      i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || c || o(p)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
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
    549: (e, t) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        i = n ? Symbol.for("react.element") : 60103,
        s = n ? Symbol.for("react.portal") : 60106,
        r = n ? Symbol.for("react.fragment") : 60107,
        o = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        f = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        w = n ? Symbol.for("react.responder") : 60118,
        b = n ? Symbol.for("react.scope") : 60119;

      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch (e = e.type) {
                case u:
                case d:
                case r:
                case a:
                case o:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case p:
                    case g:
                    case m:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case s:
              return t
          }
        }
      }

      function S(e) {
        return x(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = i, t.ForwardRef = p, t.Fragment = r, t.Lazy = g, t.Memo = m, t.Portal = s, t.Profiler = a, t.StrictMode = o, t.Suspense = h, t.isAsyncMode = function(e) {
        return S(e) || x(e) === u
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return x(e) === c
      }, t.isContextProvider = function(e) {
        return x(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
      }, t.isForwardRef = function(e) {
        return x(e) === p
      }, t.isFragment = function(e) {
        return x(e) === r
      }, t.isLazy = function(e) {
        return x(e) === g
      }, t.isMemo = function(e) {
        return x(e) === m
      }, t.isPortal = function(e) {
        return x(e) === s
      }, t.isProfiler = function(e) {
        return x(e) === a
      }, t.isStrictMode = function(e) {
        return x(e) === o
      }, t.isSuspense = function(e) {
        return x(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === r || e === d || e === a || e === o || e === h || e === f || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === y || e.$$typeof === w || e.$$typeof === b || e.$$typeof === v)
      }, t.typeOf = x
    },
    753: (e, t, n) => {
      "use strict";
      e.exports = n(549)
    },
    970: (e, t, n) => {
      "use strict";
      var i = n(289),
        s = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, n) {
        var i, r = {},
          c = null,
          u = null;
        for (i in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) o.call(t, i) && !l.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: u,
          props: r,
          _owner: a.current
        }
      }
      t.Fragment = r, t.jsx = c, t.jsxs = c
    },
    160: (e, t, n) => {
      "use strict";
      e.exports = n(970)
    },
    625: (e, t, n) => {
      "use strict";
      n.d(t, {
        _T: () => s,
        pi: () => i
      });
      var i = function() {
        return i = Object.assign || function(e) {
          for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e
        }, i.apply(this, arguments)
      };

      function s(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (i = Object.getOwnPropertySymbols(e); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]])
        }
        return n
      }
      Object.create, Object.create
    },
    409: (e, t, n) => {
      "use strict";
      n.d(t, {
        tq: () => de,
        o5: () => he
      });
      var i = n(289);

      function s(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0 && r(e[n], t[n])
        }))
      }
      const o = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return r(e, o), e
      }
      const l = {
        document: o,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function c() {
        const e = "undefined" != typeof window ? window : {};
        return r(e, l), e
      }
      class u extends Array {
        constructor(e) {
          "number" == typeof e ? super(e) : (super(...e || []), function(e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e
              }
            })
          }(this))
        }
      }

      function d() {
        const e = [];
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t => {
          Array.isArray(t) ? e.push(...d(t)) : e.push(t)
        })), e
      }

      function p(e, t) {
        return Array.prototype.filter.call(e, t)
      }

      function h(e, t) {
        const n = c(),
          i = a();
        let s = [];
        if (!t && e instanceof u) return e;
        if (!e) return new u(s);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1) s.push(t.childNodes[e])
          } else s = function(e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n
          }(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) s.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof u) return e;
          s = e
        }
        return new u(function(e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
        }(s))
      }
      h.fn = u.prototype;
      const f = "resize scroll".split(" ");

      function m(e) {
        return function() {
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          if (void 0 === n[0]) {
            for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
            return this
          }
          return this.on(e, ...n)
        }
      }
      m("click"), m("blur"), m("focus"), m("focusin"), m("focusout"), m("keyup"), m("keydown"), m("keypress"), m("submit"), m("change"), m("mousedown"), m("mousemove"), m("mouseup"), m("mouseenter"), m("mouseleave"), m("mouseout"), m("mouseover"), m("touchstart"), m("touchend"), m("touchmove"), m("resize"), m("scroll");
      const g = {
        addClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = d(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.add(...i)
          })), this
        },
        removeClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = d(t.map((e => e.split(" "))));
          return this.forEach((e => {
            e.classList.remove(...i)
          })), this
        },
        hasClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = d(t.map((e => e.split(" "))));
          return p(this, (e => i.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const i = d(t.map((e => e.split(" "))));
          this.forEach((e => {
            i.forEach((t => {
              e.classList.toggle(t)
            }))
          }))
        },
        attr: function(e, t) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
          return this
        },
        removeAttr: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this
        },
        transform: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this
        },
        transition: function(e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
          return this
        },
        on: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          let [i, s, r, o] = t;

          function a(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if (n.indexOf(e) < 0 && n.unshift(e), h(t).is(s)) r.apply(t, n);
            else {
              const e = h(t).parents();
              for (let t = 0; t < e.length; t += 1) h(e[t]).is(s) && r.apply(e[t], n)
            }
          }

          function l(e) {
            const t = e && e.target && e.target.dom7EventData || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
          }
          "function" == typeof t[1] && ([i, r, o] = t, s = void 0), o || (o = !1);
          const c = i.split(" ");
          let u;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (s)
              for (u = 0; u < c.length; u += 1) {
                const e = c[u];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                  listener: r,
                  proxyListener: a
                }), t.addEventListener(e, a, o)
              } else
                for (u = 0; u < c.length; u += 1) {
                  const e = c[u];
                  t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                    listener: r,
                    proxyListener: l
                  }), t.addEventListener(e, l, o)
                }
          }
          return this
        },
        off: function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          let [i, s, r, o] = t;
          "function" == typeof t[1] && ([i, r, o] = t, s = void 0), o || (o = !1);
          const a = i.split(" ");
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            for (let e = 0; e < this.length; e += 1) {
              const n = this[e];
              let i;
              if (!s && n.dom7Listeners ? i = n.dom7Listeners[t] : s && n.dom7LiveListeners && (i = n.dom7LiveListeners[t]), i && i.length)
                for (let e = i.length - 1; e >= 0; e -= 1) {
                  const s = i[e];
                  r && s.listener === r || r && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === r ? (n.removeEventListener(t, s.proxyListener, o), i.splice(e, 1)) : r || (n.removeEventListener(t, s.proxyListener, o), i.splice(e, 1))
                }
            }
          }
          return this
        },
        trigger: function() {
          const e = c();
          for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          const s = n[0].split(" "),
            r = n[1];
          for (let t = 0; t < s.length; t += 1) {
            const i = s[t];
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t];
              if (e.CustomEvent) {
                const t = new e.CustomEvent(i, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0
                });
                s.dom7EventData = n.filter(((e, t) => t > 0)), s.dispatchEvent(t), s.dom7EventData = [], delete s.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function(e) {
          const t = this;
          return e && t.on("transitionend", (function n(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", n))
          })), this
        },
        outerWidth: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function(e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
          }
          return null
        },
        styles: function() {
          const e = c();
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
          if (this.length > 0) {
            const e = c(),
              t = a(),
              n = this[0],
              i = n.getBoundingClientRect(),
              s = t.body,
              r = n.clientTop || s.clientTop || 0,
              o = n.clientLeft || s.clientLeft || 0,
              l = n === e ? e.scrollY : n.scrollTop,
              u = n === e ? e.scrollX : n.scrollLeft;
            return {
              top: i.top + l - r,
              left: i.left + u - o
            }
          }
          return null
        },
        css: function(e, t) {
          const n = c();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this
            }
            if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
          }
          return this
        },
        each: function(e) {
          return e ? (this.forEach(((t, n) => {
            e.apply(t, [t, n])
          })), this) : this
        },
        html: function(e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this
        },
        text: function(e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this
        },
        is: function(e) {
          const t = c(),
            n = a(),
            i = this[0];
          let s, r;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (s = h(e), r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0;
            return !1
          }
          if (e === n) return i === n;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof u) {
            for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0;
            return !1
          }
          return !1
        },
        index: function() {
          let e, t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
            return e
          }
        },
        eq: function(e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return h([]);
          if (e < 0) {
            const n = t + e;
            return h(n < 0 ? [] : [this[n]])
          }
          return h([this[e]])
        },
        append: function() {
          let e;
          const t = a();
          for (let n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (let n = 0; n < this.length; n += 1)
              if ("string" == typeof e) {
                const i = t.createElement("div");
                for (i.innerHTML = e; i.firstChild;) this[n].appendChild(i.firstChild)
              } else if (e instanceof u)
              for (let t = 0; t < e.length; t += 1) this[n].appendChild(e[t]);
            else this[n].appendChild(e)
          }
          return this
        },
        prepend: function(e) {
          const t = a();
          let n, i;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const s = t.createElement("div");
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[n].insertBefore(s.childNodes[i], this[n].childNodes[0])
            } else if (e instanceof u)
            for (i = 0; i < e.length; i += 1) this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
          return this
        },
        next: function(e) {
          return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
        },
        nextAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return h([]);
          for (; n.nextElementSibling;) {
            const i = n.nextElementSibling;
            e ? h(i).is(e) && t.push(i) : t.push(i), n = i
          }
          return h(t)
        },
        prev: function(e) {
          if (this.length > 0) {
            const t = this[0];
            return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
          }
          return h([])
        },
        prevAll: function(e) {
          const t = [];
          let n = this[0];
          if (!n) return h([]);
          for (; n.previousElementSibling;) {
            const i = n.previousElementSibling;
            e ? h(i).is(e) && t.push(i) : t.push(i), n = i
          }
          return h(t)
        },
        parent: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
          return h(t)
        },
        parents: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i;) e ? h(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
          }
          return h(t)
        },
        closest: function(e) {
          let t = this;
          return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e])
          }
          return h(t)
        },
        children: function(e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children;
            for (let n = 0; n < i.length; n += 1) e && !h(i[n]).is(e) || t.push(i[n])
          }
          return h(t)
        },
        filter: function(e) {
          return h(p(this, e))
        },
        remove: function() {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this
        }
      };
      Object.keys(g).forEach((e => {
        Object.defineProperty(h.fn, e, {
          value: g[e],
          writable: !0
        })
      }));
      const v = h;

      function y(e) {
        return setTimeout(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }

      function w() {
        return Date.now()
      }

      function b(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function x() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != s && (n = s, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
            const n = Object.keys(Object(s)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = n.length; t < i; t += 1) {
              const i = n[t],
                r = Object.getOwnPropertyDescriptor(s, i);
              void 0 !== r && r.enumerable && (b(e[i]) && b(s[i]) ? s[i].__swiper__ ? e[i] = s[i] : x(e[i], s[i]) : !b(e[i]) && b(s[i]) ? (e[i] = {}, s[i].__swiper__ ? e[i] = s[i] : x(e[i], s[i])) : e[i] = s[i])
            }
          }
        }
        var n;
        return e
      }

      function S(e, t, n) {
        e.style.setProperty(t, n)
      }

      function T(e) {
        let {
          swiper: t,
          targetPosition: n,
          side: i
        } = e;
        const s = c(),
          r = -t.translate;
        let o, a = null;
        const l = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > r ? "next" : "prev",
          d = (e, t) => "next" === u && e >= t || "prev" === u && e <= t,
          p = () => {
            o = (new Date).getTime(), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = .5 - Math.cos(e * Math.PI) / 2;
            let u = r + c * (n - r);
            if (d(u, n) && (u = n), t.wrapperEl.scrollTo({
                [i]: u
              }), d(u, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: u
              })
            })), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(p)
          };
        p()
      }
      let E, C, P;

      function M() {
        return E || (E = function() {
          const e = c(),
            t = a();
          return {
            smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
            passiveListener: function() {
              let t = !1;
              try {
                const n = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0
                  }
                });
                e.addEventListener("testPassiveListener", null, n)
              } catch (e) {}
              return t
            }(),
            gestures: "ongesturestart" in e
          }
        }()), E
      }
      const A = {
          on(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;
            const s = n ? "unshift" : "push";
            return e.split(" ").forEach((e => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
            })), i
          },
          once(e, t, n) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof t) return i;

            function s() {
              i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
              for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
              t.apply(i, r)
            }
            return s.__emitterProxy = t, i.on(e, s, n)
          },
          onAny(e, t) {
            const n = this;
            if (!n.eventsListeners || n.destroyed) return n;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
          },
          off(e, t) {
            const n = this;
            return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
              void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((i, s) => {
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(s, 1)
              }))
            })), n) : n
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, n, i;
            for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
            return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], n = r.slice(1, r.length), i = e) : (t = r[0].events, n = r[0].data, i = r[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
              e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                e.apply(i, [t, ...n])
              })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                e.apply(i, n)
              }))
            })), e
          }
        },
        k = {
          updateSize: function() {
            const e = this;
            let t, n;
            const i = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n
            }))
          },
          updateSlides: function() {
            const e = this;

            function t(t) {
              return e.isHorizontal() ? t : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
              } [t]
            }

            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0)
            }
            const i = e.params,
              {
                $wrapperEl: s,
                size: r,
                rtlTranslate: o,
                wrongRTL: a
              } = e,
              l = e.virtual && i.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              u = s.children(`.${e.params.slideClass}`),
              d = l ? e.virtual.slides.length : u.length;
            let p = [];
            const h = [],
              f = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
            let g = i.slidesOffsetAfter;
            "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              y = e.slidesGrid.length;
            let w = i.spaceBetween,
              b = -m,
              x = 0,
              T = 0;
            if (void 0 === r) return;
            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, o ? u.css({
              marginLeft: "",
              marginBottom: "",
              marginTop: ""
            }) : u.css({
              marginRight: "",
              marginBottom: "",
              marginTop: ""
            }), i.centeredSlides && i.cssMode && (S(e.wrapperEl, "--swiper-centered-offset-before", ""), S(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const E = i.grid && i.grid.rows > 1 && e.grid;
            let C;
            E && e.grid.initSlides(d);
            const P = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
            for (let s = 0; s < d; s += 1) {
              C = 0;
              const o = u.eq(s);
              if (E && e.grid.updateSlide(s, o, d, t), "none" !== o.css("display")) {
                if ("auto" === i.slidesPerView) {
                  P && (u[s].style[t("width")] = "");
                  const r = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = n(r, "width"),
                      t = n(r, "padding-left"),
                      i = n(r, "padding-right"),
                      s = n(r, "margin-left"),
                      a = n(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) C = e + s + a;
                    else {
                      const {
                        clientWidth: n,
                        offsetWidth: r
                      } = o[0];
                      C = e + t + i + s + a + (r - n)
                    }
                  }
                  a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), i.roundLengths && (C = Math.floor(C))
                } else C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), u[s] && (u[s].style[t("width")] = `${C}px`);
                u[s] && (u[s].swiperSlideSize = C), f.push(C), i.centeredSlides ? (b = b + C / 2 + x / 2 + w, 0 === x && 0 !== s && (b = b - r / 2 - w), 0 === s && (b = b - r / 2 - w), Math.abs(b) < .001 && (b = 0), i.roundLengths && (b = Math.floor(b)), T % i.slidesPerGroup == 0 && p.push(b), h.push(b)) : (i.roundLengths && (b = Math.floor(b)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && p.push(b), h.push(b), b = b + C + w), e.virtualSize += C + w, x = C, T += 1
              }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, o && a && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
                width: `${e.virtualSize+i.spaceBetween}px`
              }), i.setWrapperSize && s.css({
                [t("width")]: `${e.virtualSize+i.spaceBetween}px`
              }), E && e.grid.updateWrapperSize(C, p, t), !i.centeredSlides) {
              const t = [];
              for (let n = 0; n < p.length; n += 1) {
                let s = p[n];
                i.roundLengths && (s = Math.floor(s)), p[n] <= e.virtualSize - r && t.push(s)
              }
              p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
            }
            if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              u.filter(((e, t) => !i.cssMode || t !== u.length - 1)).css({
                [n]: `${w}px`
              })
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0)
              })), e -= i.spaceBetween;
              const t = e - r;
              p = p.map((e => e < 0 ? -m : e > t ? t + g : e))
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (f.forEach((t => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0)
                })), e -= i.spaceBetween, e < r) {
                const t = (r - e) / 2;
                p.forEach(((e, n) => {
                  p[n] = e - t
                })), h.forEach(((e, n) => {
                  h[n] = e + t
                }))
              }
            }
            if (Object.assign(e, {
                slides: u,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: f
              }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
              S(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), S(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
            }
            if (d !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
              const t = `${i.containerModifierClass}backface-hidden`,
                n = e.$el.hasClass(t);
              d <= i.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
            }
          },
          updateAutoHeight: function(e) {
            const t = this,
              n = [],
              i = t.virtual && t.params.virtual.enabled;
            let s, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const o = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)(t.visibleSlides || v([])).each((e => {
                n.push(e)
              }));
              else
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                  const e = t.activeIndex + s;
                  if (e > t.slides.length && !i) break;
                  n.push(o(e))
                } else n.push(o(t.activeIndex));
            for (s = 0; s < n.length; s += 1)
              if (void 0 !== n[s]) {
                const e = n[s].offsetHeight;
                r = e > r ? e : r
              }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
          },
          updateSlidesOffset: function() {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
          },
          updateSlidesProgress: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0;
            const t = this,
              n = t.params,
              {
                slides: i,
                rtlTranslate: s,
                snapGrid: r
              } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            s && (o = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < i.length; e += 1) {
              const a = i[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
              const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                u = (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                d = -(o - l),
                p = d + t.slidesSizesGrid[e];
              (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(n.slideVisibleClass)), a.progress = s ? -c : c, a.originalProgress = s ? -u : u
            }
            t.visibleSlides = v(t.visibleSlides)
          },
          updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = t && t.translate && t.translate * n || 0
            }
            const n = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let {
              progress: s,
              isBeginning: r,
              isEnd: o
            } = t;
            const a = r,
              l = o;
            0 === i ? (s = 0, r = !0, o = !0) : (s = (e - t.minTranslate()) / i, r = s <= 0, o = s >= 1), Object.assign(t, {
              progress: s,
              isBeginning: r,
              isEnd: o
            }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", s)
          },
          updateSlidesClasses: function() {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: i,
                activeIndex: s,
                realIndex: r
              } = e,
              o = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
            let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
            let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
          },
          updateActiveIndex: function(e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: s,
                params: r,
                activeIndex: o,
                realIndex: a,
                snapIndex: l
              } = t;
            let c, u = e;
            if (void 0 === u) {
              for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? u = e : n >= i[e] && n < i[e + 1] && (u = e + 1) : n >= i[e] && (u = e);
              r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if (s.indexOf(n) >= 0) c = s.indexOf(n);
            else {
              const e = Math.min(r.slidesPerGroupSkip, u);
              c = e + Math.floor((u - e) / r.slidesPerGroup)
            }
            if (c >= s.length && (c = s.length - 1), u === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
            const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            Object.assign(t, {
              snapIndex: c,
              realIndex: d,
              previousIndex: o,
              activeIndex: u
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
          },
          updateClickedSlide: function(e) {
            const t = this,
              n = t.params,
              i = v(e).closest(`.${n.slideClass}`)[0];
            let s, r = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  r = !0, s = e;
                  break
                } if (!i || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(v(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
          }
        };

      function L(e) {
        let {
          swiper: t,
          runCallbacks: n,
          direction: i,
          step: s
        } = e;
        const {
          activeIndex: r,
          previousIndex: o
        } = t;
        let a = i;
        if (a || (a = r > o ? "next" : r < o ? "prev" : "reset"), t.emit(`transition${s}`), n && r !== o) {
          if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
          t.emit(`slideChangeTransition${s}`), "next" === a ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
        }
      }
      const V = {
        slideTo: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const r = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f
          } = r;
          if (r.animating && a.preventInteractionOnTransition || !f && !i && !s) return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, o);
          let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (a.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1] ? t >= n && t < i - (i - n) / 2 ? o = e : t >= n && t < i && (o = e + 1) : t >= n && (o = e)
            }
          if (r.initialized && o !== d) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (d || 0) !== o) return !1
          }
          let y;
          if (o !== (u || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(v), y = o > d ? "next" : o < d ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(v), "reset" !== y && (r.transitionStart(n, y), r.transitionEnd(n, y)), !1;
          if (a.cssMode) {
            const e = r.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
              }))
            } else {
              if (!r.support.smoothScroll) return T({
                swiper: r,
                targetPosition: n,
                side: e ? "left" : "top"
              }), !0;
              h.scrollTo({
                [e ? "left" : "top"]: n,
                behavior: "smooth"
              })
            }
            return !0
          }
          return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, y), 0 === t ? r.transitionEnd(n, y) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, y))
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
            e = t
          }
          const s = this;
          let r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i)
        },
        slideNext: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const i = this,
            {
              animating: s,
              enabled: r,
              params: o
            } = i;
          if (!r) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (s && o.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
          }
          return o.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
        },
        slidePrev: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          const i = this,
            {
              params: s,
              animating: r,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c
            } = i;
          if (!c) return i;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
          }

          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const d = u(l ? i.translate : -i.translate),
            p = o.map((e => u(e)));
          let h = o[p.indexOf(d) - 1];
          if (void 0 === h && s.cssMode) {
            let e;
            o.forEach(((t, n) => {
              d >= t && (e = n)
            })), void 0 !== e && (h = o[e > 0 ? e - 1 : e])
          }
          let f = 0;
          if (void 0 !== h && (f = a.indexOf(h), f < 0 && (f = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && i.isBeginning) {
            const s = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
            return i.slideTo(s, e, t, n)
          }
          return i.slideTo(f, e, t, n)
        },
        slideReset: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
          return this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest: function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
          const s = this;
          let r = s.activeIndex;
          const o = Math.min(s.params.slidesPerGroupSkip, r),
            a = o + Math.floor((r - o) / s.params.slidesPerGroup),
            l = s.rtlTranslate ? s.translate : -s.translate;
          if (l >= s.snapGrid[a]) {
            const e = s.snapGrid[a];
            l - e > (s.snapGrid[a + 1] - e) * i && (r += s.params.slidesPerGroup)
          } else {
            const e = s.snapGrid[a - 1];
            l - e <= (s.snapGrid[a] - e) * i && (r -= s.params.slidesPerGroup)
          }
          return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, n)
        },
        slideToClickedSlide: function() {
          const e = this,
            {
              params: t,
              $wrapperEl: n
            } = e,
            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let s, r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            s = parseInt(v(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), y((() => {
              e.slideTo(r)
            }))) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), y((() => {
              e.slideTo(r)
            }))) : e.slideTo(r)
          } else e.slideTo(r)
        }
      };

      function O(e) {
        const t = this,
          n = a(),
          i = c(),
          s = t.touchEventsData,
          {
            params: r,
            touches: o,
            enabled: l
          } = t;
        if (!l) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let u = e;
        u.originalEvent && (u = u.originalEvent);
        let d = v(u.target);
        if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
        if (s.isTouchEvent = "touchstart" === u.type, !s.isTouchEvent && "which" in u && 3 === u.which) return;
        if (!s.isTouchEvent && "button" in u && u.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const p = !!r.noSwipingClass && "" !== r.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        p && u.target && u.target.shadowRoot && h && (d = v(h[0]));
        const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          m = !(!u.target || !u.target.shadowRoot);
        if (r.noSwiping && (m ? function(e) {
            return function t(n) {
              if (!n || n === a() || n === c()) return null;
              n.assignedSlot && (n = n.assignedSlot);
              const i = n.closest(e);
              return i || n.getRootNode ? i || t(n.getRootNode().host) : null
            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)
          }(f, d[0]) : d.closest(f)[0])) return void(t.allowClick = !0);
        if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
        o.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, o.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
        const g = o.currentX,
          y = o.currentY,
          b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          x = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (b && (g <= x || g >= i.innerWidth - x)) {
          if ("prevent" !== b) return;
          e.preventDefault()
        }
        if (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = g, o.startY = y, s.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== u.type) {
          let e = !0;
          d.is(s.focusableElements) && (e = !1, "SELECT" === d[0].nodeName && (s.isTouched = !1)), n.activeElement && v(n.activeElement).is(s.focusableElements) && n.activeElement !== d[0] && n.activeElement.blur();
          const i = e && t.allowTouchMove && r.touchStartPreventDefault;
          !r.touchStartForcePreventDefault && !i || d[0].isContentEditable || u.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u)
      }

      function D(e) {
        const t = a(),
          n = this,
          i = n.touchEventsData,
          {
            params: s,
            touches: r,
            rtlTranslate: o,
            enabled: l
          } = n;
        if (!l) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const u = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
          d = "touchmove" === c.type ? u.pageX : c.pageX,
          p = "touchmove" === c.type ? u.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return r.startX = d, void(r.startY = p);
        if (!n.allowTouchMove) return v(c.target).is(i.focusableElements) || (n.allowClick = !1), void(i.isTouched && (Object.assign(r, {
          startX: d,
          startY: p,
          currentX: d,
          currentY: p
        }), i.touchStartTime = w()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (n.isVertical()) {
            if (p < r.startY && n.translate <= n.maxTranslate() || p > r.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (d < r.startX && n.translate <= n.maxTranslate() || d > r.startX && n.translate >= n.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && v(c.target).is(i.focusableElements)) return i.isMoved = !0, void(n.allowClick = !1);
        if (i.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        r.currentX = d, r.currentY = p;
        const h = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (n.params.threshold && Math.sqrt(h ** 2 + f ** 2) < n.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = n.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && n.emit("touchMoveOpposite", c), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        n.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation(), i.isMoved || (s.loop && !s.cssMode && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), i.isMoved = !0;
        let m = n.isHorizontal() ? h : f;
        r.diff = m, m *= s.touchRatio, o && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
        let g = !0,
          y = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (y = 0), m > 0 && i.currentTranslate > n.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + m) ** y)) : m < 0 && i.currentTranslate < n.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - m) ** y)), g && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
          if (!(Math.abs(m) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
      }

      function $(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a
          } = t;
        if (!a) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = w(),
          u = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || l.composedPath && l.composedPath();
          t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), u < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = w(), y((() => {
            t.destroyed || (t.allowClick = !0)
          })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
        let d;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
        if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: d
        });
        let p = 0,
          h = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t] ? d >= o[e] && d < o[e + t] && (p = e, h = o[e + t] - o[e]) : d >= o[e] && (p = e, h = o[o.length - 1] - o[o.length - 2])
        }
        let f = null,
          m = null;
        i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
        const g = (d - o[p]) / h,
          v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : p + v) : t.slideTo(p)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(p + v) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p)) : l.target === t.navigation.nextEl ? t.slideTo(p + v) : t.slideTo(p)
        }
      }

      function I() {
        const e = this,
          {
            params: t,
            el: n
          } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: s,
          snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }

      function R(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function B() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: n,
            enabled: i
          } = e;
        if (!i) return;
        let s;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }
      let _ = !1;

      function j() {}
      const N = (e, t) => {
          const n = a(),
            {
              params: i,
              touchEvents: s,
              el: r,
              wrapperEl: o,
              device: l,
              support: c
            } = e,
            u = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            p = t;
          if (c.touch) {
            const t = !("touchstart" !== s.start || !c.passiveListener || !i.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r[d](s.start, e.onTouchStart, t), r[d](s.move, e.onTouchMove, c.passiveListener ? {
              passive: !1,
              capture: u
            } : u), r[d](s.end, e.onTouchEnd, t), s.cancel && r[d](s.cancel, e.onTouchEnd, t)
          } else r[d](s.start, e.onTouchStart, !1), n[d](s.move, e.onTouchMove, u), n[d](s.end, e.onTouchEnd, !1);
          (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && o[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : e[p]("observerUpdate", I, !0)
        },
        F = {
          attachEvents: function() {
            const e = this,
              t = a(),
              {
                params: n,
                support: i
              } = e;
            e.onTouchStart = O.bind(e), e.onTouchMove = D.bind(e), e.onTouchEnd = $.bind(e), n.cssMode && (e.onScroll = B.bind(e)), e.onClick = R.bind(e), i.touch && !_ && (t.addEventListener("touchstart", j), _ = !0), N(e, "on")
          },
          detachEvents: function() {
            N(this, "off")
          }
        },
        z = (e, t) => e.grid && t.grid && t.grid.rows > 1,
        G = {
          addClasses: function() {
            const e = this,
              {
                classNames: t,
                params: n,
                rtl: i,
                $el: s,
                device: r,
                support: o
              } = e,
              a = function(e, t) {
                const n = [];
                return e.forEach((e => {
                  "object" == typeof e ? Object.keys(e).forEach((i => {
                    e[i] && n.push(t + i)
                  })) : "string" == typeof e && n.push(t + e)
                })), n
              }(["initialized", n.direction, {
                "pointer-events": !o.touch
              }, {
                "free-mode": e.params.freeMode && n.freeMode.enabled
              }, {
                autoheight: n.autoHeight
              }, {
                rtl: i
              }, {
                grid: n.grid && n.grid.rows > 1
              }, {
                "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
              }, {
                android: r.android
              }, {
                ios: r.ios
              }, {
                "css-mode": n.cssMode
              }, {
                centered: n.cssMode && n.centeredSlides
              }, {
                "watch-progress": n.watchSlidesProgress
              }], n.containerModifierClass);
            t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses()
          },
          removeClasses: function() {
            const {
              $el: e,
              classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
          }
        },
        U = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: .5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: .85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopedSlidesLimit: !0,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1
        };

      function H(e, t) {
        return function() {
          let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const i = Object.keys(n)[0],
            s = n[i];
          "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
            auto: !0
          }), i in e && "enabled" in s ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), x(t, n)) : x(t, n)) : x(t, n)
        }
      }
      const W = {
          eventsEmitter: A,
          update: k,
          translate: {
            getTranslate: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y";
              const {
                params: t,
                rtlTranslate: n,
                translate: i,
                $wrapperEl: s
              } = this;
              if (t.virtualTranslate) return n ? -i : i;
              if (t.cssMode) return i;
              let r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x";
                const n = c();
                let i, s, r;
                const o = function(e) {
                  const t = c();
                  let n;
                  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                }(e);
                return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
              }(s[0], e);
              return n && (r = -r), r || 0
            },
            setTranslate: function(e, t) {
              const n = this,
                {
                  rtlTranslate: i,
                  params: s,
                  $wrapperEl: r,
                  wrapperEl: o,
                  progress: a
                } = n;
              let l, c = 0,
                u = 0;
              n.isHorizontal() ? c = i ? -e : e : u = e, s.roundLengths && (c = Math.floor(c), u = Math.floor(u)), s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -u : s.virtualTranslate || r.transform(`translate3d(${c}px, ${u}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : u;
              const d = n.maxTranslate() - n.minTranslate();
              l = 0 === d ? 0 : (e - n.minTranslate()) / d, l !== a && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                s = arguments.length > 4 ? arguments[4] : void 0;
              const r = this,
                {
                  params: o,
                  wrapperEl: a
                } = r;
              if (r.animating && o.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                c = r.maxTranslate();
              let u;
              if (u = i && e > l ? l : i && e < c ? c : e, r.updateProgress(u), o.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
                else {
                  if (!r.support.smoothScroll) return T({
                    swiper: r,
                    targetPosition: -u,
                    side: e ? "left" : "top"
                  }), !0;
                  a.scrollTo({
                    [e ? "left" : "top"]: -u,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (r.setTransition(0), r.setTranslate(u), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(u), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
              }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
            },
            transitionStart: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const n = this,
                {
                  params: i
                } = n;
              i.cssMode || (i.autoHeight && n.updateAutoHeight(), L({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0;
              const n = this,
                {
                  params: i
                } = n;
              n.animating = !1, i.cssMode || (n.setTransition(0), L({
                swiper: n,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: V,
          loop: {
            loopCreate: function() {
              const e = this,
                t = a(),
                {
                  params: n,
                  $wrapperEl: i
                } = e,
                s = i.children().length > 0 ? v(i.children()[0].parentNode) : i;
              s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
              let r = s.children(`.${n.slideClass}`);
              if (n.loopFillGroupWithBlank) {
                const e = n.slidesPerGroup - r.length % n.slidesPerGroup;
                if (e !== n.slidesPerGroup) {
                  for (let i = 0; i < e; i += 1) {
                    const e = v(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                    s.append(e)
                  }
                  r = s.children(`.${n.slideClass}`)
                }
              }
              "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
              const o = [],
                l = [];
              r.each(((e, t) => {
                v(e).attr("data-swiper-slide-index", t)
              }));
              for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / r.length) * r.length;
                l.push(r.eq(e)[0]), o.unshift(r.eq(r.length - e - 1)[0])
              }
              for (let e = 0; e < l.length; e += 1) s.append(v(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
              for (let e = o.length - 1; e >= 0; e -= 1) s.prepend(v(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
              const e = this;
              e.emit("beforeLoopFix");
              const {
                activeIndex: t,
                slides: n,
                loopedSlides: i,
                allowSlidePrev: s,
                allowSlideNext: r,
                snapGrid: o,
                rtlTranslate: a
              } = e;
              let l;
              e.allowSlidePrev = !0, e.allowSlideNext = !0;
              const c = -o[t] - e.getTranslate();
              t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((a ? -e.translate : e.translate) - c)), e.allowSlidePrev = s, e.allowSlideNext = r, e.emit("loopFix")
            },
            loopDestroy: function() {
              const {
                $wrapperEl: e,
                params: t,
                slides: n
              } = this;
              e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
            }
          },
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
              const e = this;
              e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
          },
          events: F,
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: i = 0,
                  params: s,
                  $el: r
                } = e,
                o = s.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const l = (a in o ? o[a] : void 0) || e.originalParams,
                c = z(e, s),
                u = z(e, l),
                d = s.enabled;
              c && !u ? (r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && u && (r.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && r.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                const n = s[t] && s[t].enabled,
                  i = l[t] && l[t].enabled;
                n && !i && e[t].disable(), !n && i && e[t].enable()
              }));
              const p = l.direction && l.direction !== s.direction,
                h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
              p && n && e.changeDirection(), x(e.params, l);
              const f = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), d && !f ? e.disable() : !d && f && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), h && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                n = arguments.length > 2 ? arguments[2] : void 0;
              if (!e || "container" === t && !n) return;
              let i = !1;
              const s = c(),
                r = "window" === t ? s.innerHeight : n.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: r * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: r,
                  value: a
                } = o[e];
                "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = r) : a <= n.clientWidth && (i = r)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: n
                } = e,
                {
                  slidesOffsetBefore: i
                } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: G,
          images: {
            loadImage: function(e, t, n, i, s, r) {
              const o = c();
              let a;

              function l() {
                r && r()
              }
              v(e).parent("picture")[0] || e.complete && s ? l() : t ? (a = new o.Image, a.onload = l, a.onerror = l, i && (a.sizes = i), n && (a.srcset = n), t && (a.src = t)) : l()
            },
            preloadImages: function() {
              const e = this;

              function t() {
                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
              }
            }
          }
        },
        Y = {};
      class X {
        constructor() {
          let e, t;
          for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
          if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = x({}, t), e && !t.el && (t.el = e), t.el && v(t.el).length > 1) {
            const e = [];
            return v(t.el).each((n => {
              const i = x({}, t, {
                el: n
              });
              e.push(new X(i))
            })), e
          }
          const r = this;
          r.__swiper__ = !0, r.support = M(), r.device = function() {
            return C || (C = function() {
              let {
                userAgent: e
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const t = M(),
                n = c(),
                i = n.navigator.platform,
                s = e || n.navigator.userAgent,
                r = {
                  ios: !1,
                  android: !1
                },
                o = n.screen.width,
                a = n.screen.height,
                l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
              let f = "MacIntel" === i;
              return !u && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${a}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), l && !h && (r.os = "android", r.android = !0), (u || p || d) && (r.os = "ios", r.ios = !0), r
            }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})), C
          }({
            userAgent: t.userAgent
          }), r.browser = (P || (P = function() {
            const e = c();
            return {
              isSafari: function() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
              }(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
          }()), P), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
          const o = {};
          r.modules.forEach((e => {
            e({
              swiper: r,
              extendParams: H(t, o),
              on: r.on.bind(r),
              once: r.once.bind(r),
              off: r.off.bind(r),
              emit: r.emit.bind(r)
            })
          }));
          const a = x({}, U, o);
          return r.params = x({}, a, Y, t), r.originalParams = x({}, r.params), r.passedParams = x({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
            r.on(e, r.params.on[e])
          })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = v, Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: v(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: function() {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3]
              }, r.touchEventsDesktop = {
                start: t[0],
                move: t[1],
                end: t[2]
              }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
            }(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: w(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            s = (n.maxTranslate() - i) * e + i;
          n.translateTo(s, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n => {
            const i = e.getSlideClasses(n);
            t.push({
              slideEl: n,
              classNames: i
            }), e.emit("_slideClass", n, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const {
            params: n,
            slides: i,
            slidesGrid: s,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e, t = i[a].swiperSlideSize;
            for (let n = a + 1; n < i.length; n += 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0))
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1)(t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
          else
            for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < o && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: n
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let s;
          n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e) {
          let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            i = n.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), n.emit("changeDirection"), t && n.update()), n
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = v(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let s = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = v(e.shadowRoot.querySelector(i()));
              return t.children = e => n.children(e), t
            }
            return n.children ? n.children(i()) : v(n).children(i())
          })();
          if (0 === s.length && t.params.createElements) {
            const e = a().createElement("div");
            s = v(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
              s.append(e)
            }))
          }
          return Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display")
          }), !0
        }
        init(e) {
          const t = this;
          return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = this,
            {
              params: i,
              $el: s,
              $wrapperEl: r,
              slides: o
            } = n;
          return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
            n.off(e)
          })), !1 !== e && (n.$el[0].swiper = null, function(e) {
            const t = e;
            Object.keys(t).forEach((e => {
              try {
                t[e] = null
              } catch (e) {}
              try {
                delete t[e]
              } catch (e) {}
            }))
          }(n)), n.destroyed = !0), null
        }
        static extendDefaults(e) {
          x(Y, e)
        }
        static get extendedDefaults() {
          return Y
        }
        static get defaults() {
          return U
        }
        static installModule(e) {
          X.prototype.__modules__ || (X.prototype.__modules__ = []);
          const t = X.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => X.installModule(e))), X) : (X.installModule(e), X)
        }
      }
      Object.keys(W).forEach((e => {
        Object.keys(W[e]).forEach((t => {
          X.prototype[t] = W[e][t]
        }))
      })), X.use([function(e) {
        let {
          swiper: t,
          on: n,
          emit: i
        } = e;
        const s = c();
        let r = null,
          o = null;
        const a = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          l = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        n("init", (() => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
            o = s.requestAnimationFrame((() => {
              const {
                width: n,
                height: i
              } = t;
              let s = n,
                r = i;
              e.forEach((e => {
                let {
                  contentBoxSize: n,
                  contentRect: i,
                  target: o
                } = e;
                o && o !== t.el || (s = i ? i.width : (n[0] || n).inlineSize, r = i ? i.height : (n[0] || n).blockSize)
              })), s === n && r === i || a()
            }))
          })), r.observe(t.el)) : (s.addEventListener("resize", a), s.addEventListener("orientationchange", l))
        })), n("destroy", (() => {
          o && s.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", l)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: n,
          on: i,
          emit: s
        } = e;
        const r = [],
          o = c(),
          a = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = new(o.MutationObserver || o.WebkitMutationObserver)((e => {
              if (1 === e.length) return void s("observerUpdate", e[0]);
              const t = function() {
                s("observerUpdate", e[0])
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
            }));
            n.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData
            }), r.push(n)
          };
        n({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = t.$el.parents();
              for (let t = 0; t < e.length; t += 1) a(e[t])
            }
            a(t.$el[0], {
              childList: t.params.observeSlideChildren
            }), a(t.$wrapperEl[0], {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          r.forEach((e => {
            e.disconnect()
          })), r.splice(0, r.length)
        }))
      }]);
      const q = X;

      function Z(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function K(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
          void 0 === e[n] ? e[n] = t[n] : Z(t[n]) && Z(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : K(e[n], t[n]) : e[n] = t[n]
        }))
      }

      function J() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function Q() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && void 0 === e.pagination.el
      }

      function ee() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar && void 0 === e.scrollbar.el
      }

      function te() {
        const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(" ").map((e => e.trim())).filter((e => !!e)),
          t = [];
        return e.forEach((e => {
          t.indexOf(e) < 0 && t.push(e)
        })), t.join(" ")
      }
      const ne = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
        ie = (e, t) => {
          let n = t.slidesPerView;
          if (t.breakpoints) {
            const e = q.prototype.getBreakpoint(t.breakpoints),
              i = e in t.breakpoints ? t.breakpoints[e] : void 0;
            i && i.slidesPerView && (n = i.slidesPerView)
          }
          let i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
          return i += t.loopAdditionalSlides, i > e.length && t.loopedSlidesLimit && (i = e.length), i
        };

      function se(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function re(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          se(e) ? t.push(e) : e.props && e.props.children && re(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function oe(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (se(e)) t.push(e);
          else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = re(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : n["container-end"].push(e)
          } else n["container-end"].push(e)
        })), {
          slides: t,
          slots: n
        }
      }

      function ae(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const le = (0, i.createContext)(null),
        ce = (0, i.createContext)(null);

      function ue() {
        return ue = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }, ue.apply(this, arguments)
      }
      const de = (0, i.forwardRef)((function(e, t) {
        let {
          className: n,
          tag: s = "div",
          wrapperTag: r = "div",
          children: o,
          onSwiper: a,
          ...l
        } = void 0 === e ? {} : e, c = !1;
        const [u, d] = (0, i.useState)("swiper"), [p, h] = (0, i.useState)(null), [f, m] = (0, i.useState)(!1), g = (0, i.useRef)(!1), v = (0, i.useRef)(null), y = (0, i.useRef)(null), w = (0, i.useRef)(null), b = (0, i.useRef)(null), x = (0, i.useRef)(null), S = (0, i.useRef)(null), T = (0, i.useRef)(null), E = (0, i.useRef)(null), {
          params: C,
          passedParams: P,
          rest: M,
          events: A
        } = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = {
              on: {}
            },
            i = {},
            s = {};
          K(n, q.defaults), K(n, q.extendedDefaults), n._emitClasses = !0, n.init = !1;
          const r = {},
            o = ne.map((e => e.replace(/_/, ""))),
            a = Object.assign({}, e);
          return Object.keys(a).forEach((a => {
            void 0 !== e[a] && (o.indexOf(a) >= 0 ? Z(e[a]) ? (n[a] = {}, s[a] = {}, K(n[a], e[a]), K(s[a], e[a])) : (n[a] = e[a], s[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? i[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a])
          })), ["navigation", "pagination", "scrollbar"].forEach((e => {
            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
          })), {
            params: n,
            passedParams: s,
            rest: r,
            events: i
          }
        }(l), {
          slides: k,
          slots: L
        } = oe(o), V = () => {
          m(!f)
        };
        Object.assign(C.on, {
          _containerClasses(e, t) {
            d(t)
          }
        });
        const O = () => {
          if (Object.assign(C.on, A), c = !0, y.current = new q(C), y.current.loopCreate = () => {}, y.current.loopDestroy = () => {}, C.loop && (y.current.loopedSlides = ie(k, C)), y.current.virtual && y.current.params.virtual.enabled) {
            y.current.virtual.slides = k;
            const e = {
              cache: !1,
              slides: k,
              renderExternal: h,
              renderExternalUpdate: !1
            };
            K(y.current.params.virtual, e), K(y.current.originalParams.virtual, e)
          }
        };
        return v.current || O(), y.current && y.current.on("_beforeBreakpoint", V), (0, i.useEffect)((() => () => {
          y.current && y.current.off("_beforeBreakpoint", V)
        })), (0, i.useEffect)((() => {
          !g.current && y.current && (y.current.emitSlidesClasses(), g.current = !0)
        })), ae((() => {
          if (t && (t.current = v.current), v.current) return y.current.destroyed && O(),
            function(e, t) {
              let {
                el: n,
                nextEl: i,
                prevEl: s,
                paginationEl: r,
                scrollbarEl: o,
                swiper: a
              } = e;
              J(t) && i && s && (a.params.navigation.nextEl = i, a.originalParams.navigation.nextEl = i, a.params.navigation.prevEl = s, a.originalParams.navigation.prevEl = s), Q(t) && r && (a.params.pagination.el = r, a.originalParams.pagination.el = r), ee(t) && o && (a.params.scrollbar.el = o, a.originalParams.scrollbar.el = o), a.init(n)
            }({
              el: v.current,
              nextEl: x.current,
              prevEl: S.current,
              paginationEl: T.current,
              scrollbarEl: E.current,
              swiper: y.current
            }, C), a && a(y.current), () => {
              y.current && !y.current.destroyed && y.current.destroy(!0, !1)
            }
        }), []), ae((() => {
          !c && A && y.current && Object.keys(A).forEach((e => {
            y.current.on(e, A[e])
          }));
          const e = function(e, t, n, i, s) {
            const r = [];
            if (!t) return r;
            const o = e => {
              r.indexOf(e) < 0 && r.push(e)
            };
            if (n && i) {
              const e = i.map(s),
                t = n.map(s);
              e.join("") !== t.join("") && o("children"), i.length !== n.length && o("children")
            }
            return ne.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
              if (n in e && n in t)
                if (Z(e[n]) && Z(t[n])) {
                  const i = Object.keys(e[n]),
                    s = Object.keys(t[n]);
                  i.length !== s.length ? o(n) : (i.forEach((i => {
                    e[n][i] !== t[n][i] && o(n)
                  })), s.forEach((i => {
                    e[n][i] !== t[n][i] && o(n)
                  })))
                } else e[n] !== t[n] && o(n)
            })), r
          }(P, w.current, k, b.current, (e => e.key));
          return w.current = P, b.current = k, e.length && y.current && !y.current.destroyed && function(e) {
            let {
              swiper: t,
              slides: n,
              passedParams: i,
              changedParams: s,
              nextEl: r,
              prevEl: o,
              scrollbarEl: a,
              paginationEl: l
            } = e;
            const c = s.filter((e => "children" !== e && "direction" !== e)),
              {
                params: u,
                pagination: d,
                navigation: p,
                scrollbar: h,
                virtual: f,
                thumbs: m
              } = t;
            let g, v, y, w, b;
            s.includes("thumbs") && i.thumbs && i.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (g = !0), s.includes("controller") && i.controller && i.controller.control && u.controller && !u.controller.control && (v = !0), s.includes("pagination") && i.pagination && (i.pagination.el || l) && (u.pagination || !1 === u.pagination) && d && !d.el && (y = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || a) && (u.scrollbar || !1 === u.scrollbar) && h && !h.el && (w = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || o) && (i.navigation.nextEl || r) && (u.navigation || !1 === u.navigation) && p && !p.prevEl && !p.nextEl && (b = !0), c.forEach((e => {
              if (Z(u[e]) && Z(i[e])) K(u[e], i[e]);
              else {
                const s = i[e];
                !0 !== s && !1 !== s || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = i[e] : !1 === s && t[n = e] && (t[n].destroy(), "navigation" === n ? (u[n].prevEl = void 0, u[n].nextEl = void 0, t[n].prevEl = void 0, t[n].nextEl = void 0) : (u[n].el = void 0, t[n].el = void 0))
              }
              var n
            })), c.includes("controller") && !v && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), s.includes("children") && n && f && u.virtual.enabled ? (f.slides = n, f.update(!0)) : s.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), g && m.init() && m.update(!0), v && (t.controller.control = u.controller.control), y && (l && (u.pagination.el = l), d.init(), d.render(), d.update()), w && (a && (u.scrollbar.el = a), h.init(), h.updateSize(), h.setTranslate()), b && (r && (u.navigation.nextEl = r), o && (u.navigation.prevEl = o), p.init(), p.update()), s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && t.changeDirection(i.direction, !1), t.update()
          }({
            swiper: y.current,
            slides: k,
            passedParams: P,
            changedParams: e,
            nextEl: x.current,
            prevEl: S.current,
            scrollbarEl: E.current,
            paginationEl: T.current
          }), () => {
            A && y.current && Object.keys(A).forEach((e => {
              y.current.off(e, A[e])
            }))
          }
        })), ae((() => {
          var e;
          !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }), [p]), i.createElement(s, ue({
          ref: v,
          className: te(`${u}${n?` ${n}`:""}`)
        }, M), i.createElement(ce.Provider, {
          value: y.current
        }, L["container-start"], i.createElement(r, {
          className: "swiper-wrapper"
        }, L["wrapper-start"], C.virtual ? function(e, t, n) {
          if (!n) return null;
          const s = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
          } : {
            top: `${n.offset}px`
          };
          return t.filter(((e, t) => t >= n.from && t <= n.to)).map((t => i.cloneElement(t, {
            swiper: e,
            style: s
          })))
        }(y.current, k, p) : !C.loop || y.current && y.current.destroyed ? k.map((e => i.cloneElement(e, {
          swiper: y.current
        }))) : function(e, t, n) {
          const s = t.map(((t, n) => i.cloneElement(t, {
            swiper: e,
            "data-swiper-slide-index": n
          })));

          function r(e, t, s) {
            return i.cloneElement(e, {
              key: `${e.key}-duplicate-${t}-${s}`,
              className: `${e.props.className||""} ${n.slideDuplicateClass}`
            })
          }
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - s.length % n.slidesPerGroup;
            if (e !== n.slidesPerGroup)
              for (let t = 0; t < e; t += 1) {
                const e = i.createElement("div", {
                  className: `${n.slideClass} ${n.slideBlankClass}`
                });
                s.push(e)
              }
          }
          "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = s.length);
          const o = ie(s, n),
            a = [],
            l = [];
          for (let e = 0; e < o; e += 1) {
            const t = e - Math.floor(e / s.length) * s.length;
            l.push(r(s[t], e, "append")), a.unshift(r(s[s.length - t - 1], e, "prepend"))
          }
          return e && (e.loopedSlides = o), [...a, ...s, ...l]
        }(y.current, k, C), L["wrapper-end"]), J(C) && i.createElement(i.Fragment, null, i.createElement("div", {
          ref: S,
          className: "swiper-button-prev"
        }), i.createElement("div", {
          ref: x,
          className: "swiper-button-next"
        })), ee(C) && i.createElement("div", {
          ref: E,
          className: "swiper-scrollbar"
        }), Q(C) && i.createElement("div", {
          ref: T,
          className: "swiper-pagination"
        }), L["container-end"]))
      }));

      function pe() {
        return pe = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }, pe.apply(this, arguments)
      }
      de.displayName = "Swiper";
      const he = (0, i.forwardRef)((function(e, t) {
        let {
          tag: n = "div",
          children: s,
          className: r = "",
          swiper: o,
          zoom: a,
          virtualIndex: l,
          ...c
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [d, p] = (0, i.useState)("swiper-slide");

        function h(e, t, n) {
          t === u.current && p(n)
        }
        ae((() => {
          if (t && (t.current = u.current), u.current && o) {
            if (!o.destroyed) return o.on("_slideClass", h), () => {
              o && o.off("_slideClass", h)
            };
            "swiper-slide" !== d && p("swiper-slide")
          }
        })), ae((() => {
          o && u.current && !o.destroyed && p(o.getSlideClasses(u.current))
        }), [o]);
        const f = {
            isActive: d.indexOf("swiper-slide-active") >= 0 || d.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: d.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: d.indexOf("swiper-slide-duplicate") >= 0,
            isPrev: d.indexOf("swiper-slide-prev") >= 0 || d.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext: d.indexOf("swiper-slide-next") >= 0 || d.indexOf("swiper-slide-duplicate-next") >= 0
          },
          m = () => "function" == typeof s ? s(f) : s;
        return i.createElement(n, pe({
          ref: u,
          className: te(`${d}${r?` ${r}`:""}`),
          "data-swiper-slide-index": l
        }, c), i.createElement(le.Provider, {
          value: f
        }, a ? i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof a ? a : void 0
        }, m()) : m()))
      }));
      he.displayName = "SwiperSlide"
    },
    406: (e, t, n) => {
      "use strict";
      n.d(t, {
        E: () => ho
      });
      var i = n(289);
      const s = (0, i.createContext)({
          transformPagePoint: e => e,
          isStatic: !1,
          reducedMotion: "never"
        }),
        r = (0, i.createContext)({}),
        o = (0, i.createContext)(null),
        a = "undefined" != typeof document,
        l = a ? i.useLayoutEffect : i.useEffect,
        c = (0, i.createContext)({
          strict: !1
        });

      function u(e) {
        return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
      }

      function d(e) {
        return "string" == typeof e || Array.isArray(e)
      }

      function p(e) {
        return "object" == typeof e && "function" == typeof e.start
      }
      const h = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function f(e) {
        return p(e.animate) || h.some((t => d(e[t])))
      }

      function m(e) {
        return Boolean(f(e) || e.variants)
      }

      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e
      }
      const v = e => ({
          isEnabled: t => e.some((e => !!t[e]))
        }),
        y = {
          measureLayout: v(["layout", "layoutId", "drag"]),
          animation: v(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: v(["exit"]),
          drag: v(["drag", "dragControls"]),
          focus: v(["whileFocus"]),
          hover: v(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: v(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: v(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: v(["whileInView", "onViewportEnter", "onViewportLeave"])
        };

      function w(e) {
        const t = (0, i.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
      const b = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };
      let x = 1;
      const S = (0, i.createContext)({});
      class T extends i.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: e,
            props: t
          } = this.props;
          return e && e.setProps(t), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      const E = (0, i.createContext)({}),
        C = Symbol.for("motionComponentSymbol");

      function P({
        preloadedFeatures: e,
        createVisualElement: t,
        projectionNodeConstructor: n,
        useRender: p,
        useVisualState: h,
        Component: m
      }) {
        e && function(e) {
          for (const t in e) "projectionNodeConstructor" === t ? y.projectionNodeConstructor = e[t] : y[t].Component = e[t]
        }(e);
        const v = (0, i.forwardRef)((function(v, S) {
          const C = {
              ...(0, i.useContext)(s),
              ...v,
              layoutId: M(v)
            },
            {
              isStatic: P
            } = C;
          let A = null;
          const k = function(e) {
              const {
                initial: t,
                animate: n
              } = function(e, t) {
                if (f(e)) {
                  const {
                    initial: t,
                    animate: n
                  } = e;
                  return {
                    initial: !1 === t || d(t) ? t : void 0,
                    animate: d(n) ? n : void 0
                  }
                }
                return !1 !== e.inherit ? t : {}
              }(e, (0, i.useContext)(r));
              return (0, i.useMemo)((() => ({
                initial: t,
                animate: n
              })), [g(t), g(n)])
            }(v),
            L = P ? void 0 : w((() => {
              if (b.hasEverUpdated) return x++
            })),
            V = h(v, P);
          if (!P && a) {
            k.visualElement = function(e, t, n, a) {
              const u = (0, i.useContext)(r).visualElement,
                d = (0, i.useContext)(c),
                p = (0, i.useContext)(o),
                h = (0, i.useContext)(s).reducedMotion,
                f = (0, i.useRef)();
              a = a || d.renderer, !f.current && a && (f.current = a(e, {
                visualState: t,
                parent: u,
                props: n,
                presenceId: p ? p.id : void 0,
                blockInitialAnimation: !!p && !1 === p.initial,
                reducedMotionConfig: h
              }));
              const m = f.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(m, V, C, t);
            const a = (0, i.useContext)(c).strict,
              u = (0, i.useContext)(E);
            k.visualElement && (A = k.visualElement.loadFeatures(C, a, e, L, n || y.projectionNodeConstructor, u))
          }
          return i.createElement(T, {
            visualElement: k.visualElement,
            props: C
          }, A, i.createElement(r.Provider, {
            value: k
          }, p(m, v, L, function(e, t, n) {
            return (0, i.useCallback)((i => {
              i && e.mount && e.mount(i), t && (i ? t.mount(i) : t.unmount()), n && ("function" == typeof n ? n(i) : u(n) && (n.current = i))
            }), [t])
          }(V, k.visualElement, S), V, P, k.visualElement)))
        }));
        return v[C] = m, v
      }

      function M({
        layoutId: e
      }) {
        const t = (0, i.useContext)(S).id;
        return t && void 0 !== e ? t + "-" + e : e
      }

      function A(e) {
        function t(t, n = {}) {
          return P(e(t, n))
        }
        if ("undefined" == typeof Proxy) return t;
        const n = new Map;
        return new Proxy(t, {
          get: (e, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
        })
      }
      const k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function L(e) {
        return "string" == typeof e && !e.includes("-") && !!(k.indexOf(e) > -1 || /[A-Z]/.test(e))
      }
      const V = {},
        O = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        D = new Set(O);

      function $(e, {
        layout: t,
        layoutId: n
      }) {
        return D.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!V[e] || "opacity" === e)
      }
      const I = e => !!(null == e ? void 0 : e.getVelocity),
        R = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        B = (e, t) => O.indexOf(e) - O.indexOf(t);

      function _(e) {
        return e.startsWith("--")
      }
      const j = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
        N = (e, t, n) => Math.min(Math.max(n, e), t),
        F = {
          test: e => "number" == typeof e,
          parse: parseFloat,
          transform: e => e
        },
        z = {
          ...F,
          transform: e => N(0, 1, e)
        },
        G = {
          ...F,
          default: 1
        },
        U = e => Math.round(1e5 * e) / 1e5,
        H = /(-)?([\d]*\.?[\d])+/g,
        W = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Y = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function X(e) {
        return "string" == typeof e
      }
      const q = e => ({
          test: t => X(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: t => `${t}${e}`
        }),
        Z = q("deg"),
        K = q("%"),
        J = q("px"),
        Q = q("vh"),
        ee = q("vw"),
        te = {
          ...K,
          parse: e => K.parse(e) / 100,
          transform: e => K.transform(100 * e)
        },
        ne = {
          ...F,
          transform: Math.round
        },
        ie = {
          borderWidth: J,
          borderTopWidth: J,
          borderRightWidth: J,
          borderBottomWidth: J,
          borderLeftWidth: J,
          borderRadius: J,
          radius: J,
          borderTopLeftRadius: J,
          borderTopRightRadius: J,
          borderBottomRightRadius: J,
          borderBottomLeftRadius: J,
          width: J,
          maxWidth: J,
          height: J,
          maxHeight: J,
          size: J,
          top: J,
          right: J,
          bottom: J,
          left: J,
          padding: J,
          paddingTop: J,
          paddingRight: J,
          paddingBottom: J,
          paddingLeft: J,
          margin: J,
          marginTop: J,
          marginRight: J,
          marginBottom: J,
          marginLeft: J,
          rotate: Z,
          rotateX: Z,
          rotateY: Z,
          rotateZ: Z,
          scale: G,
          scaleX: G,
          scaleY: G,
          scaleZ: G,
          skew: Z,
          skewX: Z,
          skewY: Z,
          distance: J,
          translateX: J,
          translateY: J,
          translateZ: J,
          x: J,
          y: J,
          z: J,
          perspective: J,
          transformPerspective: J,
          opacity: z,
          originX: te,
          originY: te,
          originZ: J,
          zIndex: ne,
          fillOpacity: z,
          strokeOpacity: z,
          numOctaves: ne
        };

      function se(e, t, n, i) {
        const {
          style: s,
          vars: r,
          transform: o,
          transformKeys: a,
          transformOrigin: l
        } = e;
        a.length = 0;
        let c = !1,
          u = !1,
          d = !0;
        for (const e in t) {
          const n = t[e];
          if (_(e)) {
            r[e] = n;
            continue
          }
          const i = ie[e],
            p = j(n, i);
          if (D.has(e)) {
            if (c = !0, o[e] = p, a.push(e), !d) continue;
            n !== (i.default || 0) && (d = !1)
          } else e.startsWith("origin") ? (u = !0, l[e] = p) : s[e] = p
        }
        if (t.transform || (c || i ? s.transform = function({
            transform: e,
            transformKeys: t
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: i = !0
          }, s, r) {
            let o = "";
            t.sort(B);
            for (const n of t) o += `${R[n]||n}(${e[n]}) `;
            return n && !e.z && (o += "translateZ(0)"), o = o.trim(), r ? o = r(e, s ? "" : o) : i && s && (o = "none"), o
          }(e, n, d, i) : s.transform && (s.transform = "none")), u) {
          const {
            originX: e = "50%",
            originY: t = "50%",
            originZ: n = 0
          } = l;
          s.transformOrigin = `${e} ${t} ${n}`
        }
      }
      const re = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function oe(e, t, n) {
        for (const i in t) I(t[i]) || $(i, n) || (e[i] = t[i])
      }

      function ae(e, t, n) {
        const s = {},
          r = function(e, t, n) {
            const s = {};
            return oe(s, e.style || {}, e), Object.assign(s, function({
              transformTemplate: e
            }, t, n) {
              return (0, i.useMemo)((() => {
                const i = re();
                return se(i, t, {
                  enableHardwareAcceleration: !n
                }, e), Object.assign({}, i.vars, i.style)
              }), [t])
            }(e, t, n)), e.transformValues ? e.transformValues(s) : s
          }(e, t, n);
        return e.drag && !1 !== e.dragListener && (s.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")), s.style = r, s
      }
      const le = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function ce(e) {
        return le.has(e)
      }
      let ue = e => !ce(e);
      try {
        (de = require("@emotion/is-prop-valid").default) && (ue = e => e.startsWith("on") ? !ce(e) : de(e))
      } catch (e) {}
      var de;

      function pe(e, t, n) {
        return "string" == typeof e ? e : J.transform(t + n * e)
      }
      const he = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        fe = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function me(e, {
        attrX: t,
        attrY: n,
        originX: i,
        originY: s,
        pathLength: r,
        pathSpacing: o = 1,
        pathOffset: a = 0,
        ...l
      }, c, u, d) {
        if (se(e, l, c, d), u) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        e.attrs = e.style, e.style = {};
        const {
          attrs: p,
          style: h,
          dimensions: f
        } = e;
        p.transform && (f && (h.transform = p.transform), delete p.transform), f && (void 0 !== i || void 0 !== s || h.transform) && (h.transformOrigin = function(e, t, n) {
          return `${pe(t,e.x,e.width)} ${pe(n,e.y,e.height)}`
        }(f, void 0 !== i ? i : .5, void 0 !== s ? s : .5)), void 0 !== t && (p.x = t), void 0 !== n && (p.y = n), void 0 !== r && function(e, t, n = 1, i = 0, s = !0) {
          e.pathLength = 1;
          const r = s ? he : fe;
          e[r.offset] = J.transform(-i);
          const o = J.transform(t),
            a = J.transform(n);
          e[r.array] = `${o} ${a}`
        }(p, r, o, a, !1)
      }
      const ge = () => ({
          ...re(),
          attrs: {}
        }),
        ve = e => "string" == typeof e && "svg" === e.toLowerCase();

      function ye(e, t, n, s) {
        const r = (0, i.useMemo)((() => {
          const n = ge();
          return me(n, t, {
            enableHardwareAcceleration: !1
          }, ve(s), e.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [t]);
        if (e.style) {
          const t = {};
          oe(t, e.style, e), r.style = {
            ...t,
            ...r.style
          }
        }
        return r
      }

      function we(e = !1) {
        return (t, n, s, r, {
          latestValues: o
        }, a) => {
          const l = (L(t) ? ye : ae)(n, o, a, t),
            c = function(e, t, n) {
              const i = {};
              for (const s in e)(ue(s) || !0 === n && ce(s) || !t && !ce(s) || e.draggable && s.startsWith("onDrag")) && (i[s] = e[s]);
              return i
            }(n, "string" == typeof t, e),
            u = {
              ...c,
              ...l,
              ref: r
            };
          return s && (u["data-projection-id"] = s), (0, i.createElement)(t, u)
        }
      }
      const be = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

      function xe(e, {
        style: t,
        vars: n
      }, i, s) {
        Object.assign(e.style, t, s && s.getProjectionStyles(i));
        for (const t in n) e.style.setProperty(t, n[t])
      }
      const Se = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

      function Te(e, t, n, i) {
        xe(e, t, void 0, i);
        for (const n in t.attrs) e.setAttribute(Se.has(n) ? n : be(n), t.attrs[n])
      }

      function Ee(e) {
        const {
          style: t
        } = e, n = {};
        for (const i in t)(I(t[i]) || $(i, e)) && (n[i] = t[i]);
        return n
      }

      function Ce(e) {
        const t = Ee(e);
        for (const n in e) I(e[n]) && (t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]);
        return t
      }

      function Pe(e, t, n, i = {}, s = {}) {
        return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, i, s)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, i, s)), t
      }
      const Me = e => Array.isArray(e),
        Ae = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        ke = e => Me(e) ? e[e.length - 1] || 0 : e;

      function Le(e) {
        const t = I(e) ? e.get() : e;
        return Ae(t) ? t.toValue() : t
      }
      const Ve = e => (t, n) => {
        const s = (0, i.useContext)(r),
          a = (0, i.useContext)(o),
          l = () => function({
            scrapeMotionValuesFromProps: e,
            createRenderState: t,
            onMount: n
          }, i, s, r) {
            const o = {
              latestValues: Oe(i, s, r, e),
              renderState: t()
            };
            return n && (o.mount = e => n(i, e, o)), o
          }(e, t, s, a);
        return n ? l() : w(l)
      };

      function Oe(e, t, n, i) {
        const s = {},
          r = i(e);
        for (const e in r) s[e] = Le(r[e]);
        let {
          initial: o,
          animate: a
        } = e;
        const l = f(e),
          c = m(e);
        t && c && !l && !1 !== e.inherit && (void 0 === o && (o = t.initial), void 0 === a && (a = t.animate));
        let u = !!n && !1 === n.initial;
        u = u || !1 === o;
        const d = u ? a : o;
        return d && "boolean" != typeof d && !p(d) && (Array.isArray(d) ? d : [d]).forEach((t => {
          const n = Pe(e, t);
          if (!n) return;
          const {
            transitionEnd: i,
            transition: r,
            ...o
          } = n;
          for (const e in o) {
            let t = o[e];
            Array.isArray(t) && (t = t[u ? t.length - 1 : 0]), null !== t && (s[e] = t)
          }
          for (const e in i) s[e] = i[e]
        })), s
      }
      const De = {
          useVisualState: Ve({
            scrapeMotionValuesFromProps: Ce,
            createRenderState: ge,
            onMount: (e, t, {
              renderState: n,
              latestValues: i
            }) => {
              try {
                n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
              } catch (e) {
                n.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }
              me(n, i, {
                enableHardwareAcceleration: !1
              }, ve(t.tagName), e.transformTemplate), Te(t, n)
            }
          })
        },
        $e = {
          useVisualState: Ve({
            scrapeMotionValuesFromProps: Ee,
            createRenderState: re
          })
        };
      var Ie;

      function Re(e, t, n, i = {
        passive: !0
      }) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n)
      }

      function Be(e, t, n, s) {
        (0, i.useEffect)((() => {
          const i = e.current;
          if (n && i) return Re(i, t, n, s)
        }), [e, t, n, s])
      }

      function _e(e) {
        return "undefined" != typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
      }

      function je(e) {
        return !!e.touches
      }! function(e) {
        e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit"
      }(Ie || (Ie = {}));
      const Ne = {
        pageX: 0,
        pageY: 0
      };

      function Fe(e, t = "page") {
        const n = e.touches[0] || e.changedTouches[0] || Ne;
        return {
          x: n[t + "X"],
          y: n[t + "Y"]
        }
      }

      function ze(e, t = "page") {
        return {
          x: e[t + "X"],
          y: e[t + "Y"]
        }
      }

      function Ge(e, t = "page") {
        return {
          point: je(e) ? Fe(e, t) : ze(e, t)
        }
      }
      const Ue = (e, t = !1) => {
          const n = t => e(t, Ge(t));
          return t ? (i = n, e => {
            const t = e instanceof MouseEvent;
            (!t || t && 0 === e.button) && i(e)
          }) : n;
          var i
        },
        He = () => a && null === window.onpointerdown,
        We = () => a && null === window.ontouchstart,
        Ye = () => a && null === window.onmousedown,
        Xe = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        qe = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function Ze(e) {
        return He() ? e : We() ? qe[e] : Ye() ? Xe[e] : e
      }

      function Ke(e, t, n, i) {
        return Re(e, Ze(t), Ue(n, "pointerdown" === t), i)
      }

      function Je(e, t, n, i) {
        return Be(e, Ze(t), n && Ue(n, "pointerdown" === t), i)
      }

      function Qe(e) {
        let t = null;
        return () => null === t && (t = e, () => {
          t = null
        })
      }
      const et = Qe("dragHorizontal"),
        tt = Qe("dragVertical");

      function nt(e) {
        let t = !1;
        if ("y" === e) t = tt();
        else if ("x" === e) t = et();
        else {
          const e = et(),
            n = tt();
          e && n ? t = () => {
            e(), n()
          } : (e && e(), n && n())
        }
        return t
      }

      function it() {
        const e = nt(!0);
        return !e || (e(), !1)
      }

      function st(e, t, n) {
        return (i, s) => {
          _e(i) && !it() && (e.animationState && e.animationState.setActive(Ie.Hover, t), n && n(i, s))
        }
      }
      const rt = (e, t) => !!t && (e === t || rt(e, t.parentElement));

      function ot(e) {
        return (0, i.useEffect)((() => () => e()), [])
      }
      const at = (e, t) => n => t(e(n)),
        lt = (...e) => e.reduce(at);
      var ct = n(865);
      const ut = (void 0 === ct || ct.env, "production"),
        dt = new Set,
        pt = new WeakMap,
        ht = new WeakMap,
        ft = e => {
          const t = pt.get(e.target);
          t && t(e)
        },
        mt = e => {
          e.forEach(ft)
        };
      const gt = {
        some: 0,
        all: 1
      };

      function vt(e, t, n, {
        root: s,
        margin: r,
        amount: o = "some",
        once: a
      }) {
        (0, i.useEffect)((() => {
          if (!e || !n.current) return;
          const i = {
            root: null == s ? void 0 : s.current,
            rootMargin: r,
            threshold: "number" == typeof o ? o : gt[o]
          };
          return function(e, t, n) {
            const i = function({
              root: e,
              ...t
            }) {
              const n = e || document;
              ht.has(n) || ht.set(n, {});
              const i = ht.get(n),
                s = JSON.stringify(t);
              return i[s] || (i[s] = new IntersectionObserver(mt, {
                root: e,
                ...t
              })), i[s]
            }(t);
            return pt.set(e, n), i.observe(e), () => {
              pt.delete(e), i.unobserve(e)
            }
          }(n.current, i, (e => {
            const {
              isIntersecting: i
            } = e;
            if (t.isInView === i) return;
            if (t.isInView = i, a && !i && t.hasEnteredView) return;
            i && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(Ie.InView, i);
            const s = n.getProps(),
              r = i ? s.onViewportEnter : s.onViewportLeave;
            r && r(e)
          }))
        }), [e, s, r, o])
      }

      function yt(e, t, n, {
        fallback: s = !0
      }) {
        (0, i.useEffect)((() => {
          var i;
          e && s && ("production" !== ut && (i = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", dt.has(i) || (console.warn(i), dt.add(i))), requestAnimationFrame((() => {
            t.hasEnteredView = !0;
            const {
              onViewportEnter: e
            } = n.getProps();
            e && e(null), n.animationState && n.animationState.setActive(Ie.InView, !0)
          })))
        }), [e])
      }
      const wt = e => t => (e(t), null),
        bt = {
          inView: wt((function({
            visualElement: e,
            whileInView: t,
            onViewportEnter: n,
            onViewportLeave: s,
            viewport: r = {}
          }) {
            const o = (0, i.useRef)({
              hasEnteredView: !1,
              isInView: !1
            });
            let a = Boolean(t || n || s);
            r.once && o.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? yt : vt)(a, o.current, e, r)
          })),
          tap: wt((function({
            onTap: e,
            onTapStart: t,
            onTapCancel: n,
            whileTap: s,
            visualElement: r
          }) {
            const o = e || t || n || s,
              a = (0, i.useRef)(!1),
              l = (0, i.useRef)(null),
              c = {
                passive: !(t || e || n || f)
              };

            function u() {
              l.current && l.current(), l.current = null
            }

            function d() {
              return u(), a.current = !1, r.animationState && r.animationState.setActive(Ie.Tap, !1), !it()
            }

            function p(t, i) {
              d() && (rt(r.current, t.target) ? e && e(t, i) : n && n(t, i))
            }

            function h(e, t) {
              d() && n && n(e, t)
            }

            function f(e, n) {
              u(), a.current || (a.current = !0, l.current = lt(Ke(window, "pointerup", p, c), Ke(window, "pointercancel", h, c)), r.animationState && r.animationState.setActive(Ie.Tap, !0), t && t(e, n))
            }
            Je(r, "pointerdown", o ? f : void 0, c), ot(u)
          })),
          focus: wt((function({
            whileFocus: e,
            visualElement: t
          }) {
            const {
              animationState: n
            } = t;
            Be(t, "focus", e ? () => {
              n && n.setActive(Ie.Focus, !0)
            } : void 0), Be(t, "blur", e ? () => {
              n && n.setActive(Ie.Focus, !1)
            } : void 0)
          })),
          hover: wt((function({
            onHoverStart: e,
            onHoverEnd: t,
            whileHover: n,
            visualElement: i
          }) {
            Je(i, "pointerenter", e || n ? st(i, !0, e) : void 0, {
              passive: !e
            }), Je(i, "pointerleave", t || n ? st(i, !1, t) : void 0, {
              passive: !t
            })
          }))
        };

      function xt() {
        const e = (0, i.useContext)(o);
        if (null === e) return [!0, null];
        const {
          isPresent: t,
          onExitComplete: n,
          register: s
        } = e, r = (0, i.useId)();
        return (0, i.useEffect)((() => s(r)), []), !t && n ? [!1, () => n && n(r)] : [!0]
      }

      function St(e, t) {
        if (!Array.isArray(t)) return !1;
        const n = t.length;
        if (n !== e.length) return !1;
        for (let i = 0; i < n; i++)
          if (t[i] !== e[i]) return !1;
        return !0
      }
      const Tt = {
          delta: 0,
          timestamp: 0
        },
        Et = 1 / 60 * 1e3,
        Ct = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        Pt = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout((() => e(Ct())), Et);
      let Mt = !0,
        At = !1,
        kt = !1;
      const Lt = ["read", "update", "preRender", "render", "postRender"],
        Vt = Lt.reduce(((e, t) => (e[t] = function(e) {
          let t = [],
            n = [],
            i = 0,
            s = !1,
            r = !1;
          const o = new WeakSet,
            a = {
              schedule: (e, r = !1, a = !1) => {
                const l = a && s,
                  c = l ? t : n;
                return r && o.add(e), -1 === c.indexOf(e) && (c.push(e), l && s && (i = t.length)), e
              },
              cancel: e => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1), o.delete(e)
              },
              process: l => {
                if (s) r = !0;
                else {
                  if (s = !0, [t, n] = [n, t], n.length = 0, i = t.length, i)
                    for (let n = 0; n < i; n++) {
                      const i = t[n];
                      i(l), o.has(i) && (a.schedule(i), e())
                    }
                  s = !1, r && (r = !1, a.process(l))
                }
              }
            };
          return a
        }((() => At = !0)), e)), {}),
        Ot = Lt.reduce(((e, t) => {
          const n = Vt[t];
          return e[t] = (e, t = !1, i = !1) => (At || Bt(), n.schedule(e, t, i)), e
        }), {}),
        Dt = Lt.reduce(((e, t) => (e[t] = Vt[t].cancel, e)), {}),
        $t = Lt.reduce(((e, t) => (e[t] = () => Vt[t].process(Tt), e)), {}),
        It = e => Vt[e].process(Tt),
        Rt = e => {
          At = !1, Tt.delta = Mt ? Et : Math.max(Math.min(e - Tt.timestamp, 40), 1), Tt.timestamp = e, kt = !0, Lt.forEach(It), kt = !1, At && (Mt = !1, Pt(Rt))
        },
        Bt = () => {
          At = !0, Mt = !0, kt || Pt(Rt)
        };

      function _t(e, t) {
        -1 === e.indexOf(t) && e.push(t)
      }

      function jt(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
      }
      class Nt {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return _t(this.subscriptions, e), () => jt(this.subscriptions, e)
        }
        notify(e, t, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](e, t, n);
            else
              for (let s = 0; s < i; s++) {
                const i = this.subscriptions[s];
                i && i(e, t, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }

      function Ft(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      class zt {
        constructor(e, t = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
            this.prev = this.current, this.current = e;
            const {
              delta: n,
              timestamp: i
            } = Tt;
            this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, Ot.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => Ot.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: e
          }) => {
            e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = t.owner
        }
        onChange(e) {
          return this.on("change", e)
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new Nt), this.events[e].add(t)
        }
        clearListeners() {
          for (const e in this.events) this.events[e].clear()
        }
        attach(e) {
          this.passiveEffect = e
        }
        set(e, t = !0) {
          t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
        }
        setWithVelocity(e, t, n) {
          this.set(t), this.prev = e, this.timeDelta = n
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? Ft(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(e) {
          return this.stop(), new Promise((t => {
            this.hasAnimated = !0, this.stopAnimation = e(t), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function Gt(e, t) {
        return new zt(e, t)
      }
      const Ut = (e, t) => n => Boolean(X(n) && Y.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
        Ht = (e, t, n) => i => {
          if (!X(i)) return i;
          const [s, r, o, a] = i.match(H);
          return {
            [e]: parseFloat(s),
            [t]: parseFloat(r),
            [n]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        Wt = {
          ...F,
          transform: e => Math.round((e => N(0, 255, e))(e))
        },
        Yt = {
          test: Ut("rgb", "red"),
          parse: Ht("red", "green", "blue"),
          transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + Wt.transform(e) + ", " + Wt.transform(t) + ", " + Wt.transform(n) + ", " + U(z.transform(i)) + ")"
        },
        Xt = {
          test: Ut("#"),
          parse: function(e) {
            let t = "",
              n = "",
              i = "",
              s = "";
            return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), i = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), i = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, i += i, s += s), {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1
            }
          },
          transform: Yt.transform
        },
        qt = {
          test: Ut("hsl", "hue"),
          parse: Ht("hue", "saturation", "lightness"),
          transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: i = 1
          }) => "hsla(" + Math.round(e) + ", " + K.transform(U(t)) + ", " + K.transform(U(n)) + ", " + U(z.transform(i)) + ")"
        },
        Zt = {
          test: e => Yt.test(e) || Xt.test(e) || qt.test(e),
          parse: e => Yt.test(e) ? Yt.parse(e) : qt.test(e) ? qt.parse(e) : Xt.parse(e),
          transform: e => X(e) ? e : e.hasOwnProperty("red") ? Yt.transform(e) : qt.transform(e)
        },
        Kt = "${c}",
        Jt = "${n}";

      function Qt(e) {
        "number" == typeof e && (e = `${e}`);
        const t = [];
        let n = 0,
          i = 0;
        const s = e.match(W);
        s && (n = s.length, e = e.replace(W, Kt), t.push(...s.map(Zt.parse)));
        const r = e.match(H);
        return r && (i = r.length, e = e.replace(H, Jt), t.push(...r.map(F.parse))), {
          values: t,
          numColors: n,
          numNumbers: i,
          tokenised: e
        }
      }

      function en(e) {
        return Qt(e).values
      }

      function tn(e) {
        const {
          values: t,
          numColors: n,
          tokenised: i
        } = Qt(e), s = t.length;
        return e => {
          let t = i;
          for (let i = 0; i < s; i++) t = t.replace(i < n ? Kt : Jt, i < n ? Zt.transform(e[i]) : U(e[i]));
          return t
        }
      }
      const nn = e => "number" == typeof e ? 0 : e,
        sn = {
          test: function(e) {
            var t, n;
            return isNaN(e) && X(e) && ((null === (t = e.match(H)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(W)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: en,
          createTransformer: tn,
          getAnimatableNone: function(e) {
            const t = en(e);
            return tn(e)(t.map(nn))
          }
        },
        rn = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function on(e) {
        const [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        const [i] = n.match(H) || [];
        if (!i) return e;
        const s = n.replace(i, "");
        let r = rn.has(t) ? 1 : 0;
        return i !== n && (r *= 100), t + "(" + r + s + ")"
      }
      const an = /([a-z-]*)\(.*?\)/g,
        ln = {
          ...sn,
          getAnimatableNone: e => {
            const t = e.match(an);
            return t ? t.map(on).join(" ") : e
          }
        },
        cn = {
          ...ie,
          color: Zt,
          backgroundColor: Zt,
          outlineColor: Zt,
          fill: Zt,
          stroke: Zt,
          borderColor: Zt,
          borderTopColor: Zt,
          borderRightColor: Zt,
          borderBottomColor: Zt,
          borderLeftColor: Zt,
          filter: ln,
          WebkitFilter: ln
        },
        un = e => cn[e];

      function dn(e, t) {
        var n;
        let i = un(e);
        return i !== ln && (i = sn), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, t)
      }
      const pn = e => t => t.test(e),
        hn = [F, J, K, Z, ee, Q, {
          test: e => "auto" === e,
          parse: e => e
        }],
        fn = e => hn.find(pn(e)),
        mn = [...hn, Zt, sn],
        gn = e => mn.find(pn(e));

      function vn(e, t, n) {
        const i = e.getProps();
        return Pe(i, t, void 0 !== n ? n : i.custom, function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.get())), t
        }(e), function(e) {
          const t = {};
          return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t
        }(e))
      }

      function yn(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gt(n))
      }

      function wn(e, t) {
        if (t) return (t[e] || t.default || t).from
      }

      function bn(e) {
        return Boolean(I(e) && e.add)
      }
      const xn = (e, t) => `${e}: ${t}`;

      function Sn(e, t) {
        const {
          MotionAppearAnimations: n
        } = window, i = xn(e, D.has(t) ? "transform" : t), s = n && n.get(i);
        return s ? (Ot.render((() => {
          try {
            s.cancel(), n.delete(i)
          } catch (e) {}
        })), s.currentTime || 0) : 0
      }
      const Tn = "data-" + be("framerAppearId");
      var En = function() {},
        Cn = function() {};
      const Pn = e => 1e3 * e,
        Mn = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        An = e => t => 1 - e(1 - t),
        kn = e => e * e,
        Ln = An(kn),
        Vn = Mn(kn),
        On = (e, t, n) => -n * e + n * t + e;

      function Dn(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }
      const $n = (e, t, n) => {
          const i = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - i) + i))
        },
        In = [Xt, Yt, qt];

      function Rn(e) {
        const t = (n = e, In.find((e => e.test(n))));
        var n;
        Cn(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
        let i = t.parse(e);
        return t === qt && (i = function({
          hue: e,
          saturation: t,
          lightness: n,
          alpha: i
        }) {
          e /= 360, n /= 100;
          let s = 0,
            r = 0,
            o = 0;
          if (t /= 100) {
            const i = n < .5 ? n * (1 + t) : n + t - n * t,
              a = 2 * n - i;
            s = Dn(a, i, e + 1 / 3), r = Dn(a, i, e), o = Dn(a, i, e - 1 / 3)
          } else s = r = o = n;
          return {
            red: Math.round(255 * s),
            green: Math.round(255 * r),
            blue: Math.round(255 * o),
            alpha: i
          }
        }(i)), i
      }
      const Bn = (e, t) => {
        const n = Rn(e),
          i = Rn(t),
          s = {
            ...n
          };
        return e => (s.red = $n(n.red, i.red, e), s.green = $n(n.green, i.green, e), s.blue = $n(n.blue, i.blue, e), s.alpha = On(n.alpha, i.alpha, e), Yt.transform(s))
      };

      function _n(e, t) {
        return "number" == typeof e ? n => On(e, t, n) : Zt.test(e) ? Bn(e, t) : Fn(e, t)
      }
      const jn = (e, t) => {
          const n = [...e],
            i = n.length,
            s = e.map(((e, n) => _n(e, t[n])));
          return e => {
            for (let t = 0; t < i; t++) n[t] = s[t](e);
            return n
          }
        },
        Nn = (e, t) => {
          const n = {
              ...e,
              ...t
            },
            i = {};
          for (const s in n) void 0 !== e[s] && void 0 !== t[s] && (i[s] = _n(e[s], t[s]));
          return e => {
            for (const t in i) n[t] = i[t](e);
            return n
          }
        },
        Fn = (e, t) => {
          const n = sn.createTransformer(t),
            i = Qt(e),
            s = Qt(t);
          return i.numColors === s.numColors && i.numNumbers >= s.numNumbers ? lt(jn(i.values, s.values), n) : (En(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
        },
        zn = (e, t, n) => {
          const i = t - e;
          return 0 === i ? 1 : (n - e) / i
        },
        Gn = (e, t) => n => On(e, t, n);

      function Un(e, t, {
        clamp: n = !0,
        ease: i,
        mixer: s
      } = {}) {
        const r = e.length;
        Cn(r === t.length, "Both input and output ranges must be the same length"), Cn(!i || !Array.isArray(i) || i.length === r - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[r - 1] && (e = [...e].reverse(), t = [...t].reverse());
        const o = function(e, t, n) {
            const i = [],
              s = n || ("number" == typeof(r = e[0]) ? Gn : "string" == typeof r ? Zt.test(r) ? Bn : Fn : Array.isArray(r) ? jn : "object" == typeof r ? Nn : Gn);
            var r;
            const o = e.length - 1;
            for (let n = 0; n < o; n++) {
              let r = s(e[n], e[n + 1]);
              if (t) {
                const e = Array.isArray(t) ? t[n] : t;
                r = lt(e, r)
              }
              i.push(r)
            }
            return i
          }(t, i, s),
          a = o.length,
          l = t => {
            let n = 0;
            if (a > 1)
              for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            const i = zn(e[n], e[n + 1], t);
            return o[n](i)
          };
        return n ? t => l(N(e[0], e[r - 1], t)) : l
      }
      const Hn = e => e,
        Wn = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

      function Yn(e, t, n, i) {
        if (e === t && n === i) return Hn;
        return s => 0 === s || 1 === s ? s : Wn(function(e, t, n, i, s) {
          let r, o, a = 0;
          do {
            o = t + (n - t) / 2, r = Wn(o, i, s) - e, r > 0 ? n = o : t = o
          } while (Math.abs(r) > 1e-7 && ++a < 12);
          return o
        }(s, 0, 1, e, n), t, i)
      }
      const Xn = e => 1 - Math.sin(Math.acos(e)),
        qn = An(Xn),
        Zn = Mn(qn),
        Kn = Yn(.33, 1.53, .69, .99),
        Jn = An(Kn),
        Qn = Mn(Jn),
        ei = {
          linear: Hn,
          easeIn: kn,
          easeInOut: Vn,
          easeOut: Ln,
          circIn: Xn,
          circInOut: Zn,
          circOut: qn,
          backIn: Jn,
          backInOut: Qn,
          backOut: Kn,
          anticipate: e => (e *= 2) < 1 ? .5 * Jn(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        },
        ti = e => {
          if (Array.isArray(e)) {
            Cn(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
            const [t, n, i, s] = e;
            return Yn(t, n, i, s)
          }
          return "string" == typeof e ? (Cn(void 0 !== ei[e], `Invalid easing type '${e}'`), ei[e]) : e
        };

      function ni({
        keyframes: e,
        ease: t = Vn,
        times: n,
        duration: i = 300
      }) {
        e = [...e];
        const s = ni[0],
          r = (e => Array.isArray(e) && "number" != typeof e[0])(t) ? t.map(ti) : ti(t),
          o = {
            done: !1,
            value: s
          },
          a = function(e, t) {
            return e.map((e => e * t))
          }(n && n.length === ni.length ? n : function(e) {
            const t = e.length;
            return e.map(((e, n) => 0 !== n ? n / (t - 1) : 0))
          }(e), i);

        function l() {
          return Un(a, e, {
            ease: Array.isArray(r) ? r : (t = e, n = r, t.map((() => n || Vn)).splice(0, t.length - 1))
          });
          var t, n
        }
        let c = l();
        return {
          next: e => (o.value = c(e), o.done = e >= i, o),
          flipTarget: () => {
            e.reverse(), c = l()
          }
        }
      }
      const ii = .001,
        si = .01,
        ri = 10,
        oi = .05,
        ai = 1;
      const li = 12;

      function ci(e, t) {
        return e * Math.sqrt(1 - t * t)
      }
      const ui = ["duration", "bounce"],
        di = ["stiffness", "damping", "mass"];

      function pi(e, t) {
        return t.some((t => void 0 !== e[t]))
      }

      function hi({
        keyframes: e,
        restSpeed: t = 2,
        restDelta: n = .01,
        ...i
      }) {
        let s = e[0],
          r = e[e.length - 1];
        const o = {
            done: !1,
            value: s
          },
          {
            stiffness: a,
            damping: l,
            mass: c,
            velocity: u,
            duration: d,
            isResolvedFromDuration: p
          } = function(e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e
            };
            if (!pi(e, di) && pi(e, ui)) {
              const n = function({
                duration: e = 800,
                bounce: t = .25,
                velocity: n = 0,
                mass: i = 1
              }) {
                let s, r;
                En(e <= 1e3 * ri, "Spring duration must be 10 seconds or less");
                let o = 1 - t;
                o = N(oi, ai, o), e = N(si, ri, e / 1e3), o < 1 ? (s = t => {
                  const i = t * o,
                    s = i * e,
                    r = i - n,
                    a = ci(t, o),
                    l = Math.exp(-s);
                  return ii - r / a * l
                }, r = t => {
                  const i = t * o * e,
                    r = i * n + n,
                    a = Math.pow(o, 2) * Math.pow(t, 2) * e,
                    l = Math.exp(-i),
                    c = ci(Math.pow(t, 2), o);
                  return (-s(t) + ii > 0 ? -1 : 1) * ((r - a) * l) / c
                }) : (s = t => Math.exp(-t * e) * ((t - n) * e + 1) - ii, r = t => Math.exp(-t * e) * (e * e * (n - t)));
                const a = function(e, t, n) {
                  let i = n;
                  for (let n = 1; n < li; n++) i -= e(i) / t(i);
                  return i
                }(s, r, 5 / e);
                if (e *= 1e3, isNaN(a)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: e
                }; {
                  const t = Math.pow(a, 2) * i;
                  return {
                    stiffness: t,
                    damping: 2 * o * Math.sqrt(i * t),
                    duration: e
                  }
                }
              }(e);
              t = {
                ...t,
                ...n,
                velocity: 0,
                mass: 1
              }, t.isResolvedFromDuration = !0
            }
            return t
          }(i);
        let h = fi,
          f = u ? -u / 1e3 : 0;
        const m = l / (2 * Math.sqrt(a * c));

        function g() {
          const e = r - s,
            t = Math.sqrt(a / c) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(r - s) / 100, .4)), m < 1) {
            const n = ci(t, m);
            h = i => {
              const s = Math.exp(-m * t * i);
              return r - s * ((f + m * t * e) / n * Math.sin(n * i) + e * Math.cos(n * i))
            }
          } else if (1 === m) h = n => r - Math.exp(-t * n) * (e + (f + t * e) * n);
          else {
            const n = t * Math.sqrt(m * m - 1);
            h = i => {
              const s = Math.exp(-m * t * i),
                o = Math.min(n * i, 300);
              return r - s * ((f + m * t * e) * Math.sinh(o) + n * e * Math.cosh(o)) / n
            }
          }
        }
        return g(), {
          next: e => {
            const i = h(e);
            if (p) o.done = e >= d;
            else {
              let s = f;
              if (0 !== e)
                if (m < 1) {
                  const t = Math.max(0, e - 5);
                  s = Ft(i - h(t), e - t)
                } else s = 0;
              const a = Math.abs(s) <= t,
                l = Math.abs(r - i) <= n;
              o.done = a && l
            }
            return o.value = o.done ? r : i, o
          },
          flipTarget: () => {
            f = -f, [s, r] = [r, s], g()
          }
        }
      }
      hi.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
      const fi = e => 0,
        mi = {
          decay: function({
            keyframes: e = [0],
            velocity: t = 0,
            power: n = .8,
            timeConstant: i = 350,
            restDelta: s = .5,
            modifyTarget: r
          }) {
            const o = e[0],
              a = {
                done: !1,
                value: o
              };
            let l = n * t;
            const c = o + l,
              u = void 0 === r ? c : r(c);
            return u !== c && (l = u - o), {
              next: e => {
                const t = -l * Math.exp(-e / i);
                return a.done = !(t > s || t < -s), a.value = a.done ? u : u + t, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: ni,
          tween: ni,
          spring: hi
        };

      function gi(e, t, n = 0) {
        return e - t - n
      }
      const vi = e => {
        const t = ({
          delta: t
        }) => e(t);
        return {
          start: () => Ot.update(t, !0),
          stop: () => Dt.update(t)
        }
      };

      function yi({
        duration: e,
        driver: t = vi,
        elapsed: n = 0,
        repeat: i = 0,
        repeatType: s = "loop",
        repeatDelay: r = 0,
        keyframes: o,
        autoplay: a = !0,
        onPlay: l,
        onStop: c,
        onComplete: u,
        onRepeat: d,
        onUpdate: p,
        type: h = "keyframes",
        ...f
      }) {
        var m, g;
        let v, y, w, b = 0,
          x = e,
          S = !1,
          T = !0;
        const E = mi[o.length > 2 ? "keyframes" : h],
          C = o[0],
          P = o[o.length - 1];
        (null === (g = (m = E).needsInterpolation) || void 0 === g ? void 0 : g.call(m, C, P)) && (w = Un([0, 100], [C, P], {
          clamp: !1
        }), o = [0, 100]);
        const M = E({
          ...f,
          duration: e,
          keyframes: o
        });
        return a && (l && l(), v = t((function(e) {
          if (T || (e = -e), n += e, !S) {
            const e = M.next(Math.max(0, n));
            y = e.value, w && (y = w(y)), S = T ? e.done : n <= 0
          }
          p && p(y), S && (0 === b && (x = void 0 !== x ? x : n), b < i ? function(e, t, n, i) {
            return i ? e >= t + n : e <= -n
          }(n, x, r, T) && (b++, "reverse" === s ? (T = b % 2 == 0, n = function(e, t = 0, n = 0, i = !0) {
            return i ? gi(t + -e, t, n) : t - (e - t) + n
          }(n, x, r, T)) : (n = gi(n, x, r), "mirror" === s && M.flipTarget()), S = !1, d && d()) : (v.stop(), u && u()))
        })), v.start()), {
          stop: () => {
            c && c(), v.stop()
          },
          sample: e => M.next(Math.max(0, e))
        }
      }
      const wi = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
        bi = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: wi([0, .65, .55, 1]),
          circOut: wi([.55, 0, 1, .45]),
          backIn: wi([.31, .01, .66, -.59]),
          backOut: wi([.33, 1.53, .69, .99])
        };

      function xi(e) {
        if (e) return Array.isArray(e) ? wi(e) : bi[e]
      }

      function Si(e, t) {
        const n = performance.now(),
          i = ({
            timestamp: s
          }) => {
            const r = s - n;
            r >= t && (Dt.read(i), e(r - t))
          };
        return Ot.read(i, !0), () => Dt.read(i)
      }

      function Ti({
        keyframes: e,
        elapsed: t,
        onUpdate: n,
        onComplete: i
      }) {
        const s = () => (n && n(e[e.length - 1]), i && i(), () => {});
        return t ? Si(s, -t) : s()
      }
      const Ei = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        Ci = e => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        Pi = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        Mi = {
          type: "keyframes",
          duration: .8
        },
        Ai = {
          x: Ei,
          y: Ei,
          z: Ei,
          rotate: Ei,
          rotateX: Ei,
          rotateY: Ei,
          rotateZ: Ei,
          scaleX: Ci,
          scaleY: Ci,
          scale: Ci,
          opacity: Pi,
          backgroundColor: Pi,
          color: Pi,
          default: Ci
        },
        ki = (e, {
          keyframes: t
        }) => t.length > 2 ? Mi : (Ai[e] || Ai.default)(t[1]),
        Li = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !sn.test(t) || t.startsWith("url(")));

      function Vi(e) {
        return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
      }

      function Oi(e) {
        return "number" == typeof e ? 0 : dn("", e)
      }

      function Di(e, t) {
        return e[t] || e.default || e
      }
      const $i = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        Ii = {},
        Ri = {};
      for (const e in $i) Ri[e] = () => (void 0 === Ii[e] && (Ii[e] = $i[e]()), Ii[e]);
      const Bi = new Set(["opacity"]),
        _i = (e, t, n, i = {}) => s => {
          const r = Di(i, e) || {},
            o = r.delay || i.delay || 0;
          let {
            elapsed: a = 0
          } = i;
          a -= Pn(o);
          const l = function(e, t, n, i) {
              const s = Li(t, n);
              let r = void 0 !== i.from ? i.from : e.get();
              return "none" === r && s && "string" == typeof n ? r = dn(t, n) : Vi(r) && "string" == typeof n ? r = Oi(n) : !Array.isArray(n) && Vi(n) && "string" == typeof r && (n = Oi(r)), Array.isArray(n) ? (null === n[0] && (n[0] = r), n) : [r, n]
            }(t, e, n, r),
            c = l[0],
            u = l[l.length - 1],
            d = Li(e, c),
            p = Li(e, u);
          En(d === p, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
          let h = {
            keyframes: l,
            velocity: t.getVelocity(),
            ...r,
            elapsed: a,
            onUpdate: e => {
              t.set(e), r.onUpdate && r.onUpdate(e)
            },
            onComplete: () => {
              s(), r.onComplete && r.onComplete()
            }
          };
          if (!d || !p || !1 === r.type) return Ti(h);
          if ("inertia" === r.type) {
            const e = function({
              keyframes: e,
              velocity: t = 0,
              min: n,
              max: i,
              power: s = .8,
              timeConstant: r = 750,
              bounceStiffness: o = 500,
              bounceDamping: a = 10,
              restDelta: l = 1,
              modifyTarget: c,
              driver: u,
              onUpdate: d,
              onComplete: p,
              onStop: h
            }) {
              const f = e[0];
              let m;

              function g(e) {
                return void 0 !== n && e < n || void 0 !== i && e > i
              }

              function v(e) {
                return void 0 === n ? i : void 0 === i || Math.abs(n - e) < Math.abs(i - e) ? n : i
              }

              function y(e) {
                null == m || m.stop(), m = yi({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...e,
                  driver: u,
                  onUpdate: t => {
                    var n;
                    null == d || d(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                  },
                  onComplete: p,
                  onStop: h
                })
              }

              function w(e) {
                y({
                  type: "spring",
                  stiffness: o,
                  damping: a,
                  restDelta: l,
                  ...e
                })
              }
              if (g(f)) w({
                velocity: t,
                keyframes: [f, v(f)]
              });
              else {
                let e = s * t + f;
                void 0 !== c && (e = c(e));
                const i = v(e),
                  o = i === n ? -1 : 1;
                let a, u;
                const d = e => {
                  a = u, u = e, t = Ft(e - a, Tt.delta), (1 === o && e > i || -1 === o && e < i) && w({
                    keyframes: [e, i],
                    velocity: t
                  })
                };
                y({
                  type: "decay",
                  keyframes: [f, 0],
                  velocity: t,
                  timeConstant: r,
                  power: s,
                  restDelta: l,
                  modifyTarget: c,
                  onUpdate: g(e) ? d : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(h);
            return () => e.stop()
          }(function({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: i,
            staggerDirection: s,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            ...c
          }) {
            return !!Object.keys(c).length
          })(r) || (h = {
            ...h,
            ...ki(e, h)
          }), h.duration && (h.duration = Pn(h.duration)), h.repeatDelay && (h.repeatDelay = Pn(h.repeatDelay));
          const f = t.owner,
            m = f && f.current;
          if (Ri.waapi() && Bi.has(e) && !h.repeatDelay && "mirror" !== h.repeatType && 0 !== h.damping && f && m instanceof HTMLElement && !f.getProps().onUpdate) return function(e, t, {
            onUpdate: n,
            onComplete: i,
            ...s
          }) {
            let {
              keyframes: r,
              duration: o = .3,
              elapsed: a = 0,
              ease: l
            } = s;
            if ("spring" === s.type || !(!(c = s.ease) || Array.isArray(c) || "string" == typeof c && bi[c])) {
              const e = yi(s);
              let t = {
                done: !1,
                value: r[0]
              };
              const n = [];
              let i = 0;
              for (; !t.done;) t = e.sample(i), n.push(t.value), i += 10;
              r = n, o = i - 10, l = "linear"
            }
            var c;
            const u = function(e, t, n, {
              delay: i = 0,
              duration: s,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l
            } = {}) {
              return e.animate({
                [t]: n,
                offset: l
              }, {
                delay: i,
                duration: s,
                easing: xi(a),
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal"
              })
            }(e.owner.current, t, r, {
              ...s,
              delay: -a,
              duration: o,
              ease: l
            });
            return u.onfinish = () => {
              e.set(r[r.length - 1]), i && i()
            }, () => {
              const {
                currentTime: t
              } = u;
              if (t) {
                const n = yi(s);
                e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
              }
              Ot.update((() => u.cancel()))
            }
          }(t, e, h); {
            const e = yi(h);
            return () => e.stop()
          }
        };

      function ji(e, t, n = {}) {
        var i;
        const s = vn(e, t, n.custom);
        let {
          transition: r = e.getDefaultTransition() || {}
        } = s || {};
        n.transitionOverride && (r = n.transitionOverride);
        const o = s ? () => Ni(e, s, n) : () => Promise.resolve(),
          a = (null === (i = e.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
            const {
              delayChildren: s = 0,
              staggerChildren: o,
              staggerDirection: a
            } = r;
            return function(e, t, n = 0, i = 0, s = 1, r) {
              const o = [],
                a = (e.variantChildren.size - 1) * i,
                l = 1 === s ? (e = 0) => e * i : (e = 0) => a - e * i;
              return Array.from(e.variantChildren).sort(Fi).forEach(((e, i) => {
                o.push(ji(e, t, {
                  ...r,
                  delay: n + l(i)
                }).then((() => e.notify("AnimationComplete", t))))
              })), Promise.all(o)
            }(e, t, s + i, o, a, n)
          } : () => Promise.resolve(),
          {
            when: l
          } = r;
        if (l) {
          const [e, t] = "beforeChildren" === l ? [o, a] : [a, o];
          return e().then(t)
        }
        return Promise.all([o(), a(n.delay)])
      }

      function Ni(e, t, {
        delay: n = 0,
        transitionOverride: i,
        type: s
      } = {}) {
        var r;
        let {
          transition: o = e.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e.makeTargetAnimatable(t);
        const c = e.getValue("willChange");
        i && (o = i);
        const u = [],
          d = s && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[s]);
        for (const t in l) {
          const i = e.getValue(t),
            s = l[t];
          if (!i || void 0 === s || d && zi(d, t)) continue;
          let r = {
            delay: n,
            elapsed: 0,
            ...o
          };
          if (e.shouldReduceMotion && D.has(t) && (r = {
              ...r,
              type: !1,
              delay: 0
            }), !i.hasAnimated) {
            const n = e.getProps()[Tn];
            n && (r.elapsed = Sn(n, t))
          }
          let a = i.start(_i(t, i, s, r));
          bn(c) && (c.add(t), a = a.then((() => c.remove(t)))), u.push(a)
        }
        return Promise.all(u).then((() => {
          a && function(e, t) {
            const n = vn(e, t);
            let {
              transitionEnd: i = {},
              transition: s = {},
              ...r
            } = n ? e.makeTargetAnimatable(n, !1) : {};
            r = {
              ...r,
              ...i
            };
            for (const t in r) yn(e, t, ke(r[t]))
          }(e, a)
        }))
      }

      function Fi(e, t) {
        return e.sortNodePosition(t)
      }

      function zi({
        protectedKeys: e,
        needsAnimating: t
      }, n) {
        const i = e.hasOwnProperty(n) && !0 !== t[n];
        return t[n] = !1, i
      }
      const Gi = [Ie.Animate, Ie.InView, Ie.Focus, Ie.Hover, Ie.Tap, Ie.Drag, Ie.Exit],
        Ui = [...Gi].reverse(),
        Hi = Gi.length;

      function Wi(e) {
        let t = function(e) {
          return t => Promise.all(t.map((({
            animation: t,
            options: n
          }) => function(e, t, n = {}) {
            let i;
            if (e.notify("AnimationStart", t), Array.isArray(t)) {
              const s = t.map((t => ji(e, t, n)));
              i = Promise.all(s)
            } else if ("string" == typeof t) i = ji(e, t, n);
            else {
              const s = "function" == typeof t ? vn(e, t, n.custom) : t;
              i = Ni(e, s, n)
            }
            return i.then((() => e.notify("AnimationComplete", t)))
          }(e, t, n))))
        }(e);
        const n = {
          [Ie.Animate]: Yi(!0),
          [Ie.InView]: Yi(),
          [Ie.Hover]: Yi(),
          [Ie.Tap]: Yi(),
          [Ie.Drag]: Yi(),
          [Ie.Focus]: Yi(),
          [Ie.Exit]: Yi()
        };
        let i = !0;
        const s = (t, n) => {
          const i = vn(e, n);
          if (i) {
            const {
              transition: e,
              transitionEnd: n,
              ...s
            } = i;
            t = {
              ...t,
              ...s,
              ...n
            }
          }
          return t
        };

        function r(r, o) {
          const a = e.getProps(),
            l = e.getVariantContext(!0) || {},
            c = [],
            u = new Set;
          let h = {},
            f = 1 / 0;
          for (let t = 0; t < Hi; t++) {
            const v = Ui[t],
              y = n[v],
              w = void 0 !== a[v] ? a[v] : l[v],
              b = d(w),
              x = v === o ? y.isActive : null;
            !1 === x && (f = t);
            let S = w === l[v] && w !== a[v] && b;
            if (S && i && e.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                ...h
              }, !y.isActive && null === x || !w && !y.prevProp || p(w) || "boolean" == typeof w) continue;
            const T = (m = y.prevProp, "string" == typeof(g = w) ? g !== m : !!Array.isArray(g) && !St(g, m));
            let E = T || v === o && y.isActive && !S && b || t > f && b;
            const C = Array.isArray(w) ? w : [w];
            let P = C.reduce(s, {});
            !1 === x && (P = {});
            const {
              prevResolvedValues: M = {}
            } = y, A = {
              ...M,
              ...P
            }, k = e => {
              E = !0, u.delete(e), y.needsAnimating[e] = !0
            };
            for (const e in A) {
              const t = P[e],
                n = M[e];
              h.hasOwnProperty(e) || (t !== n ? Me(t) && Me(n) ? !St(t, n) || T ? k(e) : y.protectedKeys[e] = !0 : void 0 !== t ? k(e) : u.add(e) : void 0 !== t && u.has(e) ? k(e) : y.protectedKeys[e] = !0)
            }
            y.prevProp = w, y.prevResolvedValues = P, y.isActive && (h = {
              ...h,
              ...P
            }), i && e.blockInitialAnimation && (E = !1), E && !S && c.push(...C.map((e => ({
              animation: e,
              options: {
                type: v,
                ...r
              }
            }))))
          }
          var m, g;
          if (u.size) {
            const t = {};
            u.forEach((n => {
              const i = e.getBaseTarget(n);
              void 0 !== i && (t[n] = i)
            })), c.push({
              animation: t
            })
          }
          let v = Boolean(c.length);
          return i && !1 === a.initial && !e.manuallyAnimateOnMount && (v = !1), i = !1, v ? t(c) : Promise.resolve()
        }
        return {
          animateChanges: r,
          setActive: function(t, i, s) {
            var o;
            if (n[t].isActive === i) return Promise.resolve();
            null === (o = e.variantChildren) || void 0 === o || o.forEach((e => {
              var n;
              return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, i)
            })), n[t].isActive = i;
            const a = r(s, t);
            for (const e in n) n[e].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(n) {
            t = n(e)
          },
          getState: () => n
        }
      }

      function Yi(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
      const Xi = {
          animation: wt((({
            visualElement: e,
            animate: t
          }) => {
            e.animationState || (e.animationState = Wi(e)), p(t) && (0, i.useEffect)((() => t.subscribe(e)), [t])
          })),
          exit: wt((e => {
            const {
              custom: t,
              visualElement: n
            } = e, [s, r] = xt(), a = (0, i.useContext)(o);
            (0, i.useEffect)((() => {
              n.isPresent = s;
              const e = n.animationState && n.animationState.setActive(Ie.Exit, !s, {
                custom: a && a.custom || t
              });
              e && !s && e.then(r)
            }), [s])
          }))
        },
        qi = (e, t) => Math.abs(e - t);
      class Zi {
        constructor(e, t, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const e = Qi(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                n = function(e, t) {
                  const n = qi(e.x, t.x),
                    i = qi(e.y, t.y);
                  return Math.sqrt(n ** 2 + i ** 2)
                }(e.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!t && !n) return;
              const {
                point: i
              } = e, {
                timestamp: s
              } = Tt;
              this.history.push({
                ...i,
                timestamp: s
              });
              const {
                onStart: r,
                onMove: o
              } = this.handlers;
              t || (r && r(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e)
            }, this.handlePointerMove = (e, t) => {
              this.lastMoveEvent = e, this.lastMoveEventInfo = Ki(t, this.transformPagePoint), _e(e) && 0 === e.buttons ? this.handlePointerUp(e, t) : Ot.update(this.updatePoint, !0)
            }, this.handlePointerUp = (e, t) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i
              } = this.handlers, s = Qi(Ki(t, this.transformPagePoint), this.history);
              this.startEvent && n && n(e, s), i && i(e, s)
            }, je(e) && e.touches.length > 1) return;
          this.handlers = t, this.transformPagePoint = n;
          const i = Ki(Ge(e), this.transformPagePoint),
            {
              point: s
            } = i,
            {
              timestamp: r
            } = Tt;
          this.history = [{
            ...s,
            timestamp: r
          }];
          const {
            onSessionStart: o
          } = t;
          o && o(e, Qi(i, this.history)), this.removeListeners = lt(Ke(window, "pointermove", this.handlePointerMove), Ke(window, "pointerup", this.handlePointerUp), Ke(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(), Dt.update(this.updatePoint)
        }
      }

      function Ki(e, t) {
        return t ? {
          point: t(e.point)
        } : e
      }

      function Ji(e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        }
      }

      function Qi({
        point: e
      }, t) {
        return {
          point: e,
          delta: Ji(e, ts(t)),
          offset: Ji(e, es(t)),
          velocity: ns(t, .1)
        }
      }

      function es(e) {
        return e[0]
      }

      function ts(e) {
        return e[e.length - 1]
      }

      function ns(e, t) {
        if (e.length < 2) return {
          x: 0,
          y: 0
        };
        let n = e.length - 1,
          i = null;
        const s = ts(e);
        for (; n >= 0 && (i = e[n], !(s.timestamp - i.timestamp > Pn(t)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        const r = (s.timestamp - i.timestamp) / 1e3;
        if (0 === r) return {
          x: 0,
          y: 0
        };
        const o = {
          x: (s.x - i.x) / r,
          y: (s.y - i.y) / r
        };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
      }

      function is(e) {
        return e.max - e.min
      }

      function ss(e, t = 0, n = .01) {
        return Math.abs(e - t) <= n
      }

      function rs(e, t, n, i = .5) {
        e.origin = i, e.originPoint = On(t.min, t.max, e.origin), e.scale = is(n) / is(t), (ss(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = On(n.min, n.max, e.origin) - e.originPoint, (ss(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }

      function os(e, t, n, i) {
        rs(e.x, t.x, n.x, null == i ? void 0 : i.originX), rs(e.y, t.y, n.y, null == i ? void 0 : i.originY)
      }

      function as(e, t, n) {
        e.min = n.min + t.min, e.max = e.min + is(t)
      }

      function ls(e, t, n) {
        e.min = t.min - n.min, e.max = e.min + is(t)
      }

      function cs(e, t, n) {
        ls(e.x, t.x, n.x), ls(e.y, t.y, n.y)
      }

      function us(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
        }
      }

      function ds(e, t) {
        let n = t.min - e.min,
          i = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }
      const ps = .35;

      function hs(e, t, n) {
        return {
          min: fs(e, t),
          max: fs(e, n)
        }
      }

      function fs(e, t) {
        return "number" == typeof e ? e : e[t] || 0
      }
      const ms = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        gs = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        });

      function vs(e) {
        return [e("x"), e("y")]
      }

      function ys({
        top: e,
        left: t,
        right: n,
        bottom: i
      }) {
        return {
          x: {
            min: t,
            max: n
          },
          y: {
            min: e,
            max: i
          }
        }
      }

      function ws(e) {
        return void 0 === e || 1 === e
      }

      function bs({
        scale: e,
        scaleX: t,
        scaleY: n
      }) {
        return !ws(e) || !ws(t) || !ws(n)
      }

      function xs(e) {
        return bs(e) || Ss(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }

      function Ss(e) {
        return Ts(e.x) || Ts(e.y)
      }

      function Ts(e) {
        return e && "0%" !== e
      }

      function Es(e, t, n) {
        return n + t * (e - n)
      }

      function Cs(e, t, n, i, s) {
        return void 0 !== s && (e = Es(e, s, i)), Es(e, n, i) + t
      }

      function Ps(e, t = 0, n = 1, i, s) {
        e.min = Cs(e.min, t, n, i, s), e.max = Cs(e.max, t, n, i, s)
      }

      function Ms(e, {
        x: t,
        y: n
      }) {
        Ps(e.x, t.translate, t.scale, t.originPoint), Ps(e.y, n.translate, n.scale, n.originPoint)
      }

      function As(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
      }

      function ks(e, t) {
        e.min = e.min + t, e.max = e.max + t
      }

      function Ls(e, t, [n, i, s]) {
        const r = void 0 !== t[s] ? t[s] : .5,
          o = On(e.min, e.max, r);
        Ps(e, t[n], t[i], o, t.scale)
      }
      const Vs = ["x", "scaleX", "originX"],
        Os = ["y", "scaleY", "originY"];

      function Ds(e, t) {
        Ls(e.x, t, Vs), Ls(e.y, t, Os)
      }

      function $s(e, t) {
        return ys(function(e, t) {
          if (!t) return e;
          const n = t({
              x: e.left,
              y: e.top
            }),
            i = t({
              x: e.right,
              y: e.bottom
            });
          return {
            top: n.y,
            left: n.x,
            bottom: i.y,
            right: i.x
          }
        }(e.getBoundingClientRect(), t))
      }
      const Is = new WeakMap;
      class Rs {
        constructor(e) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = gs(), this.visualElement = e
        }
        start(e, {
          snapToCursor: t = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new Zi(e, {
            onSessionStart: e => {
              this.stopAnimation(), t && this.snapToCursor(Ge(e, "page").point)
            },
            onStart: (e, t) => {
              var n;
              const {
                drag: i,
                dragPropagation: s,
                onDragStart: r
              } = this.getProps();
              (!i || s || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = nt(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), vs((e => {
                var t, n;
                let i = this.getAxisMotionValue(e).get() || 0;
                if (K.test(i)) {
                  const s = null === (n = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                  s && (i = is(s) * (parseFloat(i) / 100))
                }
                this.originPoint[e] = i
              })), null == r || r(e, t), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(Ie.Drag, !0))
            },
            onMove: (e, t) => {
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: s,
                onDrag: r
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: o
              } = t;
              if (i && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
                let n = null;
                return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
              }(o), void(null !== this.currentDirection && (null == s || s(this.currentDirection)));
              this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), null == r || r(e, t)
            },
            onSessionEnd: (e, t) => this.stop(e, t)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(e, t) {
          const n = this.isDragging;
          if (this.cancel(), !n) return;
          const {
            velocity: i
          } = t;
          this.startAnimation(i);
          const {
            onDragEnd: s
          } = this.getProps();
          null == s || s(e, t)
        }
        cancel() {
          var e, t;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Ie.Drag, !1)
        }
        updateAxis(e, t, n) {
          const {
            drag: i
          } = this.getProps();
          if (!n || !Bs(e, i, this.currentDirection)) return;
          const s = this.getAxisMotionValue(e);
          let r = this.originPoint[e] + n[e];
          this.constraints && this.constraints[e] && (r = function(e, {
            min: t,
            max: n
          }, i) {
            return void 0 !== t && e < t ? e = i ? On(t, e, i.min) : Math.max(e, t) : void 0 !== n && e > n && (e = i ? On(n, e, i.max) : Math.min(e, n)), e
          }(r, this.constraints[e], this.elastic[e])), s.set(r)
        }
        resolveConstraints() {
          const {
            dragConstraints: e,
            dragElastic: t
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, i = this.constraints;
          e && u(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !n) && function(e, {
            top: t,
            left: n,
            bottom: i,
            right: s
          }) {
            return {
              x: us(e.x, n, s),
              y: us(e.y, t, i)
            }
          }(n.layoutBox, e), this.elastic = function(e = ps) {
            return !1 === e ? e = 0 : !0 === e && (e = ps), {
              x: hs(e, "left", "right"),
              y: hs(e, "top", "bottom")
            }
          }(t), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && vs((e => {
            this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
              const n = {};
              return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
            }(n.layoutBox[e], this.constraints[e]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: e,
            onMeasureDragConstraints: t
          } = this.getProps();
          if (!e || !u(e)) return !1;
          const n = e.current;
          Cn(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const s = function(e, t, n) {
            const i = $s(e, n),
              {
                scroll: s
              } = t;
            return s && (ks(i.x, s.offset.x), ks(i.y, s.offset.y)), i
          }(n, i.root, this.visualElement.getTransformPagePoint());
          let r = function(e, t) {
            return {
              x: ds(e.x, t.x),
              y: ds(e.y, t.y)
            }
          }(i.layout.layoutBox, s);
          if (t) {
            const e = t(function({
              x: e,
              y: t
            }) {
              return {
                top: t.min,
                right: e.max,
                bottom: t.max,
                left: e.min
              }
            }(r));
            this.hasMutatedConstraints = !!e, e && (r = ys(e))
          }
          return r
        }
        startAnimation(e) {
          const {
            drag: t,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: r,
            onDragTransitionEnd: o
          } = this.getProps(), a = this.constraints || {}, l = vs((o => {
            if (!Bs(o, t, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[o]) || {};
            r && (l = {
              min: 0,
              max: 0
            });
            const c = i ? 200 : 1e6,
              u = i ? 40 : 1e7,
              d = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: c,
                bounceDamping: u,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l
              };
            return this.startAxisValueAnimation(o, d)
          }));
          return Promise.all(l).then(o)
        }
        startAxisValueAnimation(e, t) {
          const n = this.getAxisMotionValue(e);
          return n.start(_i(e, n, 0, t))
        }
        stopAnimation() {
          vs((e => this.getAxisMotionValue(e).stop()))
        }
        getAxisMotionValue(e) {
          var t;
          const n = "_drag" + e.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
        }
        snapToCursor(e) {
          vs((t => {
            const {
              drag: n
            } = this.getProps();
            if (!Bs(t, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, s = this.getAxisMotionValue(t);
            if (i && i.layout) {
              const {
                min: n,
                max: r
              } = i.layout.layoutBox[t];
              s.set(e[t] - On(n, r, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var e;
          if (!this.visualElement.current) return;
          const {
            drag: t,
            dragConstraints: n
          } = this.getProps(), {
            projection: i
          } = this.visualElement;
          if (!u(n) || !i || !this.constraints) return;
          this.stopAnimation();
          const s = {
            x: 0,
            y: 0
          };
          vs((e => {
            const t = this.getAxisMotionValue(e);
            if (t) {
              const n = t.get();
              s[e] = function(e, t) {
                let n = .5;
                const i = is(e),
                  s = is(t);
                return s > i ? n = zn(t.min, t.max - i, e.min) : i > s && (n = zn(e.min, e.max - s, t.min)), N(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[e])
            }
          }));
          const {
            transformTemplate: r
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = r ? r({}, "") : "none", null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout(), this.resolveConstraints(), vs((e => {
            if (!Bs(e, t, null)) return;
            const n = this.getAxisMotionValue(e),
              {
                min: i,
                max: r
              } = this.constraints[e];
            n.set(On(i, r, s[e]))
          }))
        }
        addListeners() {
          var e;
          if (!this.visualElement.current) return;
          Is.set(this.visualElement, this);
          const t = Ke(this.visualElement.current, "pointerdown", (e => {
              const {
                drag: t,
                dragListener: n = !0
              } = this.getProps();
              t && n && this.start(e)
            })),
            n = () => {
              const {
                dragConstraints: e
              } = this.getProps();
              u(e) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", n);
          i && !i.layout && (null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout()), n();
          const r = Re(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = i.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t
            }) => {
              this.isDragging && t && (vs((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
              })), this.visualElement.render())
            }));
          return () => {
            r(), t(), s(), null == o || o()
          }
        }
        getProps() {
          const e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: s = !1,
              dragElastic: r = ps,
              dragMomentum: o = !0
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o
          }
        }
      }

      function Bs(e, t, n) {
        return !(!0 !== t && t !== e || null !== n && n !== e)
      }
      const _s = {
        pan: wt((function({
          onPan: e,
          onPanStart: t,
          onPanEnd: n,
          onPanSessionStart: r,
          visualElement: o
        }) {
          const a = e || t || n || r,
            l = (0, i.useRef)(null),
            {
              transformPagePoint: c
            } = (0, i.useContext)(s),
            u = {
              onSessionStart: r,
              onStart: t,
              onMove: e,
              onEnd: (e, t) => {
                l.current = null, n && n(e, t)
              }
            };
          (0, i.useEffect)((() => {
            null !== l.current && l.current.updateHandlers(u)
          })), Je(o, "pointerdown", a && function(e) {
            l.current = new Zi(e, u, {
              transformPagePoint: c
            })
          }), ot((() => l.current && l.current.end()))
        })),
        drag: wt((function(e) {
          const {
            dragControls: t,
            visualElement: n
          } = e, s = w((() => new Rs(n)));
          (0, i.useEffect)((() => t && t.subscribe(s)), [s, t]), (0, i.useEffect)((() => s.addListeners()), [s])
        }))
      };

      function js(e) {
        return "string" == typeof e && e.startsWith("var(--")
      }
      const Ns = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

      function Fs(e, t, n = 1) {
        Cn(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
        const [i, s] = function(e) {
          const t = Ns.exec(e);
          if (!t) return [, ];
          const [, n, i] = t;
          return [n, i]
        }(e);
        if (!i) return;
        const r = window.getComputedStyle(t).getPropertyValue(i);
        return r ? r.trim() : js(s) ? Fs(s, t, n + 1) : s
      }
      const zs = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        Gs = e => zs.has(e),
        Us = (e, t) => {
          e.set(t, !1), e.set(t)
        },
        Hs = e => e === F || e === J;
      var Ws;
      ! function(e) {
        e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom"
      }(Ws || (Ws = {}));
      const Ys = (e, t) => parseFloat(e.split(", ")[t]),
        Xs = (e, t) => (n, {
          transform: i
        }) => {
          if ("none" === i || !i) return 0;
          const s = i.match(/^matrix3d\((.+)\)$/);
          if (s) return Ys(s[1], t); {
            const t = i.match(/^matrix\((.+)\)$/);
            return t ? Ys(t[1], e) : 0
          }
        },
        qs = new Set(["x", "y", "z"]),
        Zs = O.filter((e => !qs.has(e))),
        Ks = {
          width: ({
            x: e
          }, {
            paddingLeft: t = "0",
            paddingRight: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({
            y: e
          }, {
            paddingTop: t = "0",
            paddingBottom: n = "0"
          }) => e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, {
            top: t
          }) => parseFloat(t),
          left: (e, {
            left: t
          }) => parseFloat(t),
          bottom: ({
            y: e
          }, {
            top: t
          }) => parseFloat(t) + (e.max - e.min),
          right: ({
            x: e
          }, {
            left: t
          }) => parseFloat(t) + (e.max - e.min),
          x: Xs(4, 13),
          y: Xs(5, 14)
        };

      function Js(e, t, n, i) {
        return (e => Object.keys(e).some(Gs))(t) ? ((e, t, n = {}, i = {}) => {
          t = {
            ...t
          }, i = {
            ...i
          };
          const s = Object.keys(t).filter(Gs);
          let r = [],
            o = !1;
          const l = [];
          if (s.forEach((s => {
              const a = e.getValue(s);
              if (!e.hasValue(s)) return;
              let c = n[s],
                u = fn(c);
              const d = t[s];
              let p;
              if (Me(d)) {
                const e = d.length,
                  t = null === d[0] ? 1 : 0;
                c = d[t], u = fn(c);
                for (let n = t; n < e; n++) p ? Cn(fn(d[n]) === p, "All keyframes must be of the same type") : (p = fn(d[n]), Cn(p === u || Hs(u) && Hs(p), "Keyframes must be of the same dimension as the current value"))
              } else p = fn(d);
              if (u !== p)
                if (Hs(u) && Hs(p)) {
                  const e = a.get();
                  "string" == typeof e && a.set(parseFloat(e)), "string" == typeof d ? t[s] = parseFloat(d) : Array.isArray(d) && p === J && (t[s] = d.map(parseFloat))
                } else(null == u ? void 0 : u.transform) && (null == p ? void 0 : p.transform) && (0 === c || 0 === d) ? 0 === c ? a.set(p.transform(c)) : t[s] = u.transform(d) : (o || (r = function(e) {
                  const t = [];
                  return Zs.forEach((n => {
                    const i = e.getValue(n);
                    void 0 !== i && (t.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                  })), t.length && e.render(), t
                }(e), o = !0), l.push(s), i[s] = void 0 !== i[s] ? i[s] : t[s], Us(a, d))
            })), l.length) {
            const n = l.indexOf("height") >= 0 ? window.pageYOffset : null,
              s = ((e, t, n) => {
                const i = t.measureViewportBox(),
                  s = t.current,
                  r = getComputedStyle(s),
                  {
                    display: o
                  } = r,
                  a = {};
                "none" === o && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
                  a[e] = Ks[e](i, r)
                })), t.render();
                const l = t.measureViewportBox();
                return n.forEach((n => {
                  const i = t.getValue(n);
                  Us(i, a[n]), e[n] = Ks[n](l, r)
                })), e
              })(t, e, l);
            return r.length && r.forEach((([t, n]) => {
              e.getValue(t).set(n)
            })), e.render(), a && null !== n && window.scrollTo({
              top: n
            }), {
              target: s,
              transitionEnd: i
            }
          }
          return {
            target: t,
            transitionEnd: i
          }
        })(e, t, n, i) : {
          target: t,
          transitionEnd: i
        }
      }
      const Qs = {
          current: null
        },
        er = {
          current: !1
        },
        tr = Object.keys(y),
        nr = tr.length,
        ir = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class sr {
        constructor({
          parent: e,
          props: t,
          reducedMotionConfig: n,
          visualState: i
        }, s = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => Ot.render(this.render, !1, !0);
          const {
            latestValues: r,
            renderState: o
          } = i;
          this.latestValues = r, this.baseTarget = {
            ...r
          }, this.initialValues = t.initial ? {
            ...r
          } : {}, this.renderState = o, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = f(t), this.isVariantNode = m(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(t);
          for (const e in l) {
            const t = l[e];
            void 0 !== r[e] && I(t) && (t.set(r[e], !1), bn(a) && a.add(e))
          }
        }
        scrapeMotionValuesFromProps(e) {
          return {}
        }
        mount(e) {
          var t;
          this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), er.current || function() {
            if (er.current = !0, a)
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => Qs.current = e.matches;
                e.addListener(t), t()
              } else Qs.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Qs.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var e, t, n;
          null === (e = this.projection) || void 0 === e || e.unmount(), Dt.update(this.notifyUpdate), Dt.render(this.render), this.valueSubscriptions.forEach((e => e())), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const e in this.events) this.events[e].clear();
          this.current = null
        }
        bindToMotionValue(e, t) {
          const n = D.has(e),
            i = t.on("change", (t => {
              this.latestValues[e] = t, this.props.onUpdate && Ot.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            s = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, (() => {
            i(), s()
          }))
        }
        sortNodePosition(e) {
          return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        loadFeatures(e, t, n, s, r, o) {
          const a = [];
          "production" !== ut && n && t && Cn(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let t = 0; t < nr; t++) {
            const n = tr[t],
              {
                isEnabled: s,
                Component: r
              } = y[n];
            s(e) && r && a.push((0, i.createElement)(r, {
              key: n,
              ...e,
              visualElement: this
            }))
          }
          if (!this.projection && r) {
            this.projection = new r(s, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: t,
              layout: n,
              drag: i,
              dragConstraints: a,
              layoutScroll: l
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: Boolean(i) || a && u(a),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: o,
              layoutScroll: l
            })
          }
          return a
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : gs()
        }
        getStaticValue(e) {
          return this.latestValues[e]
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t)
        }
        setProps(e) {
          (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = e;
          for (let t = 0; t < ir.length; t++) {
            const n = ir[t];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = e["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = function(e, t, n) {
            const {
              willChange: i
            } = t;
            for (const s in t) {
              const r = t[s],
                o = n[s];
              if (I(r)) e.addValue(s, r), bn(i) && i.add(s);
              else if (I(o)) e.addValue(s, Gt(r, {
                owner: e
              })), bn(i) && i.remove(s);
              else if (o !== r)
                if (e.hasValue(s)) {
                  const t = e.getValue(s);
                  !t.hasAnimated && t.set(r)
                } else {
                  const t = e.getStaticValue(s);
                  e.addValue(s, Gt(void 0 !== t ? t : r))
                }
            }
            for (const i in n) void 0 === t[i] && e.removeValue(i);
            return t
          }(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          var t;
          return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var e;
          return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
        }
        getVariantContext(e = !1) {
          var t, n;
          if (e) return null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext();
          if (!this.isControllingVariants) {
            const e = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
            return void 0 !== this.props.initial && (e.initial = this.props.initial), e
          }
          const i = {};
          for (let e = 0; e < or; e++) {
            const t = rr[e],
              n = this.props[t];
            (d(n) || !1 === n) && (i[t] = n)
          }
          return i
        }
        addVariantChild(e) {
          var t;
          const n = this.getClosestVariantNode();
          if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e), () => n.variantChildren.delete(e)
        }
        addValue(e, t) {
          this.hasValue(e) && this.removeValue(e), this.values.set(e, t), this.latestValues[e] = t.get(), this.bindToMotionValue(e, t)
        }
        removeValue(e) {
          var t;
          this.values.delete(e), null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e]) return this.props.values[e];
          let n = this.values.get(e);
          return void 0 === n && void 0 !== t && (n = Gt(t, {
            owner: this
          }), this.addValue(e, n)), n
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t
        }
        getBaseTarget(e) {
          var t;
          const {
            initial: n
          } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (t = Pe(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
          if (n && void 0 !== i) return i;
          const s = this.getBaseTargetFromProps(this.props, e);
          return void 0 === s || I(s) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : s
        }
        on(e, t) {
          return this.events[e] || (this.events[e] = new Nt), this.events[e].add(t)
        }
        notify(e, ...t) {
          var n;
          null === (n = this.events[e]) || void 0 === n || n.notify(...t)
        }
      }
      const rr = ["initial", ...Gi],
        or = rr.length;
      class ar extends sr {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
          var n;
          return null === (n = e.style) || void 0 === n ? void 0 : n[t]
        }
        removeValueFromRenderState(e, {
          vars: t,
          style: n
        }) {
          delete t[e], delete n[e]
        }
        makeTargetAnimatableFromInstance({
          transition: e,
          transitionEnd: t,
          ...n
        }, {
          transformValues: i
        }, s) {
          let r = function(e, t, n) {
            var i;
            const s = {};
            for (const r in e) {
              const e = wn(r, t);
              s[r] = void 0 !== e ? e : null === (i = n.getValue(r)) || void 0 === i ? void 0 : i.get()
            }
            return s
          }(n, e || {}, this);
          if (i && (t && (t = i(t)), n && (n = i(n)), r && (r = i(r))), s) {
            ! function(e, t, n) {
              var i, s;
              const r = Object.keys(t).filter((t => !e.hasValue(t))),
                o = r.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  const o = r[a],
                    l = t[o];
                  let c = null;
                  Array.isArray(l) && (c = l[0]), null === c && (c = null !== (s = null !== (i = n[o]) && void 0 !== i ? i : e.readValue(o)) && void 0 !== s ? s : t[o]), null != c && ("string" == typeof c && (/^\-?\d*\.?\d+$/.test(c) || /^0[^.\s]+$/.test(c)) ? c = parseFloat(c) : !gn(c) && sn.test(l) && (c = dn(o, l)), e.addValue(o, Gt(c, {
                    owner: e
                  })), void 0 === n[o] && (n[o] = c), null !== c && e.setBaseTarget(o, c))
                }
            }(this, n, r);
            const e = ((e, t, n, i) => {
              const s = function(e, {
                ...t
              }, n) {
                const i = e.current;
                if (!(i instanceof Element)) return {
                  target: t,
                  transitionEnd: n
                };
                n && (n = {
                  ...n
                }), e.values.forEach((e => {
                  const t = e.get();
                  if (!js(t)) return;
                  const n = Fs(t, i);
                  n && e.set(n)
                }));
                for (const e in t) {
                  const s = t[e];
                  if (!js(s)) continue;
                  const r = Fs(s, i);
                  r && (t[e] = r, n && void 0 === n[e] && (n[e] = s))
                }
                return {
                  target: t,
                  transitionEnd: n
                }
              }(e, t, i);
              return Js(e, t = s.target, n, i = s.transitionEnd)
            })(this, n, r, t);
            t = e.transitionEnd, n = e.target
          }
          return {
            transition: e,
            transitionEnd: t,
            ...n
          }
        }
      }
      class lr extends ar {
        readValueFromInstance(e, t) {
          if (D.has(t)) {
            const e = un(t);
            return e && e.default || 0
          } {
            const i = (n = e, window.getComputedStyle(n)),
              s = (_(t) ? i.getPropertyValue(t) : i[t]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var n
        }
        measureInstanceViewportBox(e, {
          transformPagePoint: t
        }) {
          return $s(e, t)
        }
        build(e, t, n, i) {
          se(e, t, n, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e) {
          return Ee(e)
        }
        renderInstance(e, t, n, i) {
          xe(e, t, n, i)
        }
      }
      class cr extends ar {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(e, t) {
          return e[t]
        }
        readValueFromInstance(e, t) {
          var n;
          return D.has(t) ? (null === (n = un(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = Se.has(t) ? t : be(t), e.getAttribute(t))
        }
        measureInstanceViewportBox() {
          return gs()
        }
        scrapeMotionValuesFromProps(e) {
          return Ce(e)
        }
        build(e, t, n, i) {
          me(e, t, n, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(e, t, n, i) {
          Te(e, t, 0, i)
        }
        mount(e) {
          this.isSVGTag = ve(e.tagName), super.mount(e)
        }
      }
      const ur = (e, t) => L(e) ? new cr(t, {
        enableHardwareAcceleration: !1
      }) : new lr(t, {
        enableHardwareAcceleration: !0
      });

      function dr(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
      }
      const pr = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!J.test(e)) return e;
              e = parseFloat(e)
            }
            return `${dr(e,t.target.x)}% ${dr(e,t.target.y)}%`
          }
        },
        hr = "_$css",
        fr = {
          correct: (e, {
            treeScale: t,
            projectionDelta: n
          }) => {
            const i = e,
              s = e.includes("var("),
              r = [];
            s && (e = e.replace(Ns, (e => (r.push(e), hr))));
            const o = sn.parse(e);
            if (o.length > 5) return i;
            const a = sn.createTransformer(e),
              l = "number" != typeof o[0] ? 1 : 0,
              c = n.x.scale * t.x,
              u = n.y.scale * t.y;
            o[0 + l] /= c, o[1 + l] /= u;
            const d = On(c, u, .5);
            "number" == typeof o[2 + l] && (o[2 + l] /= d), "number" == typeof o[3 + l] && (o[3 + l] /= d);
            let p = a(o);
            if (s) {
              let e = 0;
              p = p.replace(hr, (() => {
                const t = r[e];
                return e++, t
              }))
            }
            return p
          }
        };
      class mr extends i.Component {
        componentDidMount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: s
          } = e;
          var r;
          r = gr, Object.assign(V, r), s && (t.group && t.group.add(s), n && n.register && i && n.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
          })), b.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
          const {
            layoutDependency: t,
            visualElement: n,
            drag: i,
            isPresent: s
          } = this.props, r = n.projection;
          return r ? (r.isPresent = s, i || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? r.promote() : r.relegate() || Ot.postRender((() => {
            var e;
            (null === (e = r.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: e
          } = this.props.visualElement;
          e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n
          } = this.props, {
            projection: i
          } = e;
          i && (i.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
        }
        safeToRemove() {
          const {
            safeToRemove: e
          } = this.props;
          null == e || e()
        }
        render() {
          return null
        }
      }
      const gr = {
          borderRadius: {
            ...pr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: pr,
          borderTopRightRadius: pr,
          borderBottomLeftRadius: pr,
          borderBottomRightRadius: pr,
          boxShadow: fr
        },
        vr = {
          measureLayout: function(e) {
            const [t, n] = xt(), s = (0, i.useContext)(S);
            return i.createElement(mr, {
              ...e,
              layoutGroup: s,
              switchLayoutGroup: (0, i.useContext)(E),
              isPresent: t,
              safeToRemove: n
            })
          }
        },
        yr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        wr = yr.length,
        br = e => "string" == typeof e ? parseFloat(e) : e,
        xr = e => "number" == typeof e || J.test(e);

      function Sr(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
      }
      const Tr = Cr(0, .5, qn),
        Er = Cr(.5, .95, Hn);

      function Cr(e, t, n) {
        return i => i < e ? 0 : i > t ? 1 : n(zn(e, t, i))
      }

      function Pr(e, t) {
        e.min = t.min, e.max = t.max
      }

      function Mr(e, t) {
        Pr(e.x, t.x), Pr(e.y, t.y)
      }

      function Ar(e, t, n, i, s) {
        return e = Es(e -= t, 1 / n, i), void 0 !== s && (e = Es(e, 1 / s, i)), e
      }

      function kr(e, t, [n, i, s], r, o) {
        ! function(e, t = 0, n = 1, i = .5, s, r = e, o = e) {
          if (K.test(t) && (t = parseFloat(t), t = On(o.min, o.max, t / 100) - o.min), "number" != typeof t) return;
          let a = On(r.min, r.max, i);
          e === r && (a -= t), e.min = Ar(e.min, t, n, a, s), e.max = Ar(e.max, t, n, a, s)
        }(e, t[n], t[i], t[s], t.scale, r, o)
      }
      const Lr = ["x", "scaleX", "originX"],
        Vr = ["y", "scaleY", "originY"];

      function Or(e, t, n, i) {
        kr(e.x, t, Lr, null == n ? void 0 : n.x, null == i ? void 0 : i.x), kr(e.y, t, Vr, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
      }

      function Dr(e) {
        return 0 === e.translate && 1 === e.scale
      }

      function $r(e) {
        return Dr(e.x) && Dr(e.y)
      }

      function Ir(e, t) {
        return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
      }

      function Rr(e) {
        return is(e.x) / is(e.y)
      }
      class Br {
        constructor() {
          this.members = []
        }
        add(e) {
          _t(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if (jt(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const e = this.members[this.members.length - 1];
            e && this.promote(e)
          }
        }
        relegate(e) {
          const t = this.members.findIndex((t => e === t));
          if (0 === t) return !1;
          let n;
          for (let e = t; e >= 0; e--) {
            const t = this.members[e];
            if (!1 !== t.isPresent) {
              n = t;
              break
            }
          }
          return !!n && (this.promote(n), !0)
        }
        promote(e, t) {
          var n;
          const i = this.lead;
          if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, t && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
            const {
              crossfade: s
            } = e.options;
            !1 === s && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e => {
            var t, n, i, s, r;
            null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (r = null === (i = e.resumingFrom) || void 0 === i ? void 0 : (s = i.options).onExitComplete) || void 0 === r || r.call(s)
          }))
        }
        scheduleRender() {
          this.members.forEach((e => {
            e.instance && e.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function _r(e, t, n) {
        let i = "";
        const s = e.x.translate / t.x,
          r = e.y.translate / t.y;
        if ((s || r) && (i = `translate3d(${s}px, ${r}px, 0) `), 1 === t.x && 1 === t.y || (i += `scale(${1/t.x}, ${1/t.y}) `), n) {
          const {
            rotate: e,
            rotateX: t,
            rotateY: s
          } = n;
          e && (i += `rotate(${e}deg) `), t && (i += `rotateX(${t}deg) `), s && (i += `rotateY(${s}deg) `)
        }
        const o = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return 1 === o && 1 === a || (i += `scale(${o}, ${a})`), i || "none"
      }
      const jr = (e, t) => e.depth - t.depth;
      class Nr {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(e) {
          _t(this.children, e), this.isDirty = !0
        }
        remove(e) {
          jt(this.children, e), this.isDirty = !0
        }
        forEach(e) {
          this.isDirty && this.children.sort(jr), this.isDirty = !1, this.children.forEach(e)
        }
      }
      const Fr = ["", "X", "Y", "Z"];
      let zr = 0;

      function Gr({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: s
      }) {
        return class {
          constructor(e, n = {}, i = (null == t ? void 0 : t())) {
            this.id = zr++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(Wr), this.nodes.forEach(Kr), this.nodes.forEach(Jr)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
            for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Nr)
          }
          addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Nt), this.eventHandlers.get(e).add(t)
          }
          notifyListeners(e, ...t) {
            const n = this.eventHandlers.get(e);
            null == n || n.notify(...t)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          registerPotentialNode(e, t) {
            this.potentialNodes.set(e, t)
          }
          mount(t, n = !1) {
            var i;
            if (this.instance) return;
            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
            const {
              layoutId: s,
              layout: r,
              visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(t), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (r || s) && (this.isLayoutDirty = !0), e) {
              let n;
              const i = () => this.root.updateBlockedByResize = !1;
              e(t, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = Si(i, 250), b.hasAnimatedSinceResize && (b.hasAnimatedSinceResize = !1, this.nodes.forEach(Zr))
              }))
            }
            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && o && (s || r) && this.addEventListener("didUpdate", (({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: i
            }) => {
              var s, r, a, l, c;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const u = null !== (r = null !== (s = this.options.transition) && void 0 !== s ? s : o.getDefaultTransition()) && void 0 !== r ? r : so,
                {
                  onLayoutAnimationStart: d,
                  onLayoutAnimationComplete: p
                } = o.getProps(),
                h = !this.targetLayout || !Ir(this.targetLayout, i) || n,
                f = !t && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || t && (h || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, f);
                const t = {
                  ...Di(u, "layout"),
                  onPlay: d,
                  onComplete: p
                };
                o.shouldReduceMotion && (t.delay = 0, t.type = !1), this.startAnimation(t)
              } else t || 0 !== this.animationProgress || Zr(this), this.isLead() && (null === (c = (l = this.options).onExitComplete) || void 0 === c || c.call(l));
              this.targetLayout = i
            }))
          }
          unmount() {
            var e, t;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, Dt.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var e;
            return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var e;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(Qr), this.animationId++)
          }
          willUpdate(e = !0) {
            var t, n, i;
            if (this.root.isUpdateBlocked()) return void(null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              const t = this.path[e];
              t.shouldResetTransform = !0, t.updateScroll("snapshot")
            }
            const {
              layoutId: s,
              layout: r
            } = this.options;
            if (void 0 === s && !r) return;
            const o = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == o ? void 0 : o(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Xr);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ro), this.potentialNodes.clear()), this.nodes.forEach(qr), this.nodes.forEach(Ur), this.nodes.forEach(Hr), this.clearAllSnapshots(), $t.update(), $t.preRender(), $t.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(Yr), this.sharedNodes.forEach(eo)
          }
          scheduleUpdateProjection() {
            Ot.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            Ot.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var e;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
            const t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = gs(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == t ? void 0 : t.layoutBox)
          }
          updateScroll(e = "measure") {
            let t = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: i(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var e;
            if (!s) return;
            const t = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !$r(this.projectionDelta),
              i = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
              r = null == i ? void 0 : i(this.latestValues, ""),
              o = r !== this.prevTransformTemplateValue;
            t && (n || xs(this.latestValues) || o) && (s(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(e = !0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var i;
            return e && (n = this.removeTransform(n)), oo((i = n).x), oo(i.y), {
              animationId: this.root.animationId,
              measuredBox: t,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return gs();
            const t = e.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && (ks(t.x, n.offset.x), ks(t.y, n.offset.y)), t
          }
          removeElementScroll(e) {
            const t = gs();
            Mr(t, e);
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: s,
                  options: r
                } = i;
              if (i !== this.root && s && r.layoutScroll) {
                if (s.isRoot) {
                  Mr(t, e);
                  const {
                    scroll: n
                  } = this.root;
                  n && (ks(t.x, -n.offset.x), ks(t.y, -n.offset.y))
                }
                ks(t.x, s.offset.x), ks(t.y, s.offset.y)
              }
            }
            return t
          }
          applyTransform(e, t = !1) {
            const n = gs();
            Mr(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const i = this.path[e];
              !t && i.options.layoutScroll && i.scroll && i !== i.root && Ds(n, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), xs(i.latestValues) && Ds(n, i.latestValues)
            }
            return xs(this.latestValues) && Ds(n, this.latestValues), n
          }
          removeTransform(e) {
            var t;
            const n = gs();
            Mr(n, e);
            for (let e = 0; e < this.path.length; e++) {
              const i = this.path[e];
              if (!i.instance) continue;
              if (!xs(i.latestValues)) continue;
              bs(i.latestValues) && i.updateSnapshot();
              const s = gs();
              Mr(s, i.measurePageBox()), Or(n, i.latestValues, null === (t = i.snapshot) || void 0 === t ? void 0 : t.layoutBox, s)
            }
            return xs(this.latestValues) && Or(n, this.latestValues), n
          }
          setTargetDelta(e) {
            this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var e;
            const t = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: n,
              layoutId: i
            } = this.options;
            if (this.layout && (n || i)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const e = this.getClosestProjectingParent();
                e && e.layout ? (this.relativeParent = e, this.relativeTarget = gs(), this.relativeTargetOrigin = gs(), cs(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Mr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var s, r, o;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = gs(), this.targetWithTransforms = gs()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (s = this.target, r = this.relativeTarget, o = this.relativeParent.target, as(s.x, r.x, o.x), as(s.y, r.y, o.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Mr(this.target, this.layout.layoutBox), Ms(this.target, this.targetDelta)) : Mr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const e = this.getClosestProjectingParent();
                e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = gs(), this.relativeTargetOrigin = gs(), cs(this.relativeTargetOrigin, this.target, e.target), Mr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !bs(this.parent.latestValues) && !Ss(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var e;
            const {
              isProjectionDirty: t,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const i = this.getLead(),
              s = Boolean(this.resumingFrom) || this !== i;
            let r = !0;
            if (t && (r = !1), s && n && (r = !1), r) return;
            const {
              layout: o,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !o && !a) return;
            Mr(this.layoutCorrected, this.layout.layoutBox),
              function(e, t, n, i = !1) {
                var s, r;
                const o = n.length;
                if (!o) return;
                let a, l;
                t.x = t.y = 1;
                for (let c = 0; c < o; c++) a = n[c], l = a.projectionDelta, "contents" !== (null === (r = null === (s = a.instance) || void 0 === s ? void 0 : s.style) || void 0 === r ? void 0 : r.display) && (i && a.options.layoutScroll && a.scroll && a !== a.root && Ds(e, {
                  x: -a.scroll.offset.x,
                  y: -a.scroll.offset.y
                }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Ms(e, l)), i && xs(a.latestValues) && Ds(e, a.latestValues));
                t.x = As(t.x), t.y = As(t.y)
              }(this.layoutCorrected, this.treeScale, this.path, s);
            const {
              target: l
            } = i;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = ms(), this.projectionDeltaWithTransform = ms());
            const c = this.treeScale.x,
              u = this.treeScale.y,
              d = this.projectionTransform;
            os(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = _r(this.projectionDelta, this.treeScale), this.projectionTransform === d && this.treeScale.x === c && this.treeScale.y === u || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            var t, n, i;
            null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, t = !1) {
            var n, i;
            const s = this.snapshot,
              r = (null == s ? void 0 : s.latestValues) || {},
              o = {
                ...this.latestValues
              },
              a = ms();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
            const l = gs(),
              c = (null == s ? void 0 : s.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              u = ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0) <= 1,
              d = Boolean(c && !u && !0 === this.options.crossfade && !this.path.some(io));
            this.animationProgress = 0, this.mixTargetDelta = t => {
              var n;
              const i = t / 1e3;
              var s, p, h, f;
              to(a.x, e.x, i), to(a.y, e.y, i), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (cs(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), s = this.relativeTarget, p = this.relativeTargetOrigin, h = l, f = i, no(s.x, p.x, h.x, f), no(s.y, p.y, h.y, f)), c && (this.animationValues = o, function(e, t, n, i, s, r) {
                s ? (e.opacity = On(0, void 0 !== n.opacity ? n.opacity : 1, Tr(i)), e.opacityExit = On(void 0 !== t.opacity ? t.opacity : 1, 0, Er(i))) : r && (e.opacity = On(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                for (let s = 0; s < wr; s++) {
                  const r = `border${yr[s]}Radius`;
                  let o = Sr(t, r),
                    a = Sr(n, r);
                  void 0 === o && void 0 === a || (o || (o = 0), a || (a = 0), 0 === o || 0 === a || xr(o) === xr(a) ? (e[r] = Math.max(On(br(o), br(a), i), 0), (K.test(a) || K.test(o)) && (e[r] += "%")) : e[r] = a)
                }(t.rotate || n.rotate) && (e.rotate = On(t.rotate || 0, n.rotate || 0, i))
              }(o, r, this.latestValues, i, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
            }, this.mixTargetDelta(0)
          }
          startAnimation(e) {
            var t, n;
            this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (Dt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ot.update((() => {
              b.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n = {}) {
                const i = I(e) ? e : Gt(e);
                return i.start(_i("", i, t, n)), {
                  stop: () => i.stop(),
                  isAnimating: () => i.isAnimating()
                }
              }(0, 1e3, {
                ...e,
                onUpdate: t => {
                  var n;
                  this.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                },
                onComplete: () => {
                  var t;
                  null === (t = e.onComplete) || void 0 === t || t.call(e), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var e;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var e;
            this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const e = this.getLead();
            let {
              targetWithTransforms: t,
              target: n,
              layout: i,
              latestValues: s
            } = e;
            if (t && n && i) {
              if (this !== e && this.layout && i && ao(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || gs();
                const t = is(this.layout.layoutBox.x);
                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                const i = is(this.layout.layoutBox.y);
                n.y.min = e.target.y.min, n.y.max = n.y.min + i
              }
              Mr(t, n), Ds(t, s), os(this.projectionDeltaWithTransform, this.layoutCorrected, t, s)
            }
          }
          registerSharedNode(e, t) {
            var n, i, s;
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Br), this.sharedNodes.get(e).add(t), t.promote({
              transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (s = null === (i = t.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === s ? void 0 : s.call(i, t)
            })
          }
          isLead() {
            const e = this.getStack();
            return !e || e.lead === this
          }
          getLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
          }
          getPrevLead() {
            var e;
            const {
              layoutId: t
            } = this.options;
            return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n
          } = {}) {
            const i = this.getStack();
            i && i.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
              transition: t
            })
          }
          relegate() {
            const e = this.getStack();
            return !!e && e.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: e
            } = this.options;
            if (!e) return;
            let t = !1;
            const {
              latestValues: n
            } = e;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
            const i = {};
            for (let t = 0; t < Fr.length; t++) {
              const s = "rotate" + Fr[t];
              n[s] && (i[s] = n[s], e.setStaticValue(s, 0))
            }
            null == e || e.render();
            for (const t in i) e.setStaticValue(t, i[t]);
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var t, n, i;
            const s = {};
            if (!this.instance || this.isSVG) return s;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            s.visibility = "";
            const r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Le(e.pointerEvents) || "", s.transform = r ? r(this.latestValues, "") : "none", s;
            const o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              const t = {};
              return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = Le(e.pointerEvents) || ""), this.hasProjected && !xs(this.latestValues) && (t.transform = r ? r({}, "") : "none", this.hasProjected = !1), t
            }
            const a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(), s.transform = _r(this.projectionDeltaWithTransform, this.treeScale, a), r && (s.transform = r(a, s.transform));
            const {
              x: l,
              y: c
            } = this.projectionDelta;
            s.transformOrigin = `${100*l.origin}% ${100*c.origin}% 0`, o.animationValues ? s.opacity = o === this ? null !== (i = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : s.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const e in V) {
              if (void 0 === a[e]) continue;
              const {
                correct: t,
                applyTo: n
              } = V[e], i = t(a[e], o);
              if (n) {
                const e = n.length;
                for (let t = 0; t < e; t++) s[n[t]] = i
              } else s[e] = i
            }
            return this.options.layoutId && (s.pointerEvents = o === this ? Le(e.pointerEvents) || "" : "none"), s
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            })), this.root.nodes.forEach(Xr), this.root.sharedNodes.clear()
          }
        }
      }

      function Ur(e) {
        e.updateLayout()
      }

      function Hr(e) {
        var t, n, i;
        const s = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
          const {
            layoutBox: t,
            measuredBox: n
          } = e.layout, {
            animationType: i
          } = e.options, r = s.source !== e.layout.source;
          "size" === i ? vs((e => {
            const n = r ? s.measuredBox[e] : s.layoutBox[e],
              i = is(n);
            n.min = t[e].min, n.max = n.min + i
          })) : ao(i, s.layoutBox, t) && vs((e => {
            const n = r ? s.measuredBox[e] : s.layoutBox[e],
              i = is(t[e]);
            n.max = n.min + i
          }));
          const o = ms();
          os(o, t, s.layoutBox);
          const a = ms();
          r ? os(a, e.applyTransform(n, !0), s.measuredBox) : os(a, t, s.layoutBox);
          const l = !$r(o);
          let c = !1;
          if (!e.resumeFrom) {
            const n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: e,
                layout: i
              } = n;
              if (e && i) {
                const n = gs();
                cs(n, s.layoutBox, e.layoutBox);
                const r = gs();
                cs(r, t, i.layoutBox), Ir(n, r) || (c = !0)
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: s,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c
          })
        } else e.isLead() && (null === (i = (n = e.options).onExitComplete) || void 0 === i || i.call(n));
        e.options.transition = void 0
      }

      function Wr(e) {
        e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
      }

      function Yr(e) {
        e.clearSnapshot()
      }

      function Xr(e) {
        e.clearMeasurements()
      }

      function qr(e) {
        const {
          visualElement: t
        } = e.options;
        (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"), e.resetTransform()
      }

      function Zr(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
      }

      function Kr(e) {
        e.resolveTargetDelta()
      }

      function Jr(e) {
        e.calcProjection()
      }

      function Qr(e) {
        e.resetRotation()
      }

      function eo(e) {
        e.removeLeadSnapshot()
      }

      function to(e, t, n) {
        e.translate = On(t.translate, 0, n), e.scale = On(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
      }

      function no(e, t, n, i) {
        e.min = On(t.min, n.min, i), e.max = On(t.max, n.max, i)
      }

      function io(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      const so = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ro(e, t) {
        let n = e.root;
        for (let t = e.path.length - 1; t >= 0; t--)
          if (Boolean(e.path[t].instance)) {
            n = e.path[t];
            break
          } const i = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
        i && e.mount(i, !0)
      }

      function oo(e) {
        e.min = Math.round(e.min), e.max = Math.round(e.max)
      }

      function ao(e, t, n) {
        return "position" === e || "preserve-aspect" === e && !ss(Rr(t), Rr(n), .2)
      }
      const lo = Gr({
          attachResizeListener: (e, t) => Re(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        co = {
          current: void 0
        },
        uo = Gr({
          measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
          }),
          defaultParent: () => {
            if (!co.current) {
              const e = new lo(0, {});
              e.mount(window), e.setOptions({
                layoutScroll: !0
              }), co.current = e
            }
            return co.current
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none"
          },
          checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
        }),
        po = {
          ...Xi,
          ...bt,
          ..._s,
          ...vr
        },
        ho = A(((e, t) => function(e, {
          forwardMotionProps: t = !1
        }, n, i, s) {
          return {
            ...L(e) ? De : $e,
            preloadedFeatures: n,
            useRender: we(t),
            createVisualElement: i,
            projectionNodeConstructor: s,
            Component: e
          }
        }(e, t, po, ur, uo)))
    },
    750: (e, t, n) => {
      "use strict";
      n.d(t, {
        YD: () => u
      });
      var i = n(289);
      const s = new Map,
        r = new WeakMap;
      let o, a = 0;

      function l(e, t, n = {}, i = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const s = e.getBoundingClientRect();
          return t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: s,
            intersectionRect: s,
            rootBounds: s
          }), () => {}
        }
        const {
          id: l,
          observer: c,
          elements: u
        } = function(e) {
          let t = function(e) {
              return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root"===t?(n=e.root,n?(r.has(n)||(a+=1,r.set(n,a.toString())),r.get(n)):"0"):e[t]}`;
                var n
              })).toString()
            }(e),
            n = s.get(t);
          if (!n) {
            const i = new Map;
            let r;
            const o = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const s = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = s), null == (n = i.get(t.target)) || n.forEach((e => {
                  e(s, t)
                }))
              }))
            }), e);
            r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
              id: t,
              observer: o,
              elements: i
            }, s.set(t, n)
          }
          return n
        }(n);
        let d = u.get(e) || [];
        return u.has(e) || u.set(e, d), d.push(t), c.observe(e),
          function() {
            d.splice(d.indexOf(t), 1), 0 === d.length && (u.delete(e), c.unobserve(e)), 0 === u.size && (c.disconnect(), s.delete(l))
          }
      }
      class c extends i.Component {
        constructor(e) {
          super(e), this.node = null, this._unobserveCb = null, this.handleNode = e => {
            this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = e || null, this.observeNode()
          }, this.handleChange = (e, t) => {
            e && this.props.triggerOnce && this.unobserve(), isPlainChildren(this.props) || this.setState({
              inView: e,
              entry: t
            }), this.props.onChange && this.props.onChange(e, t)
          }, this.state = {
            inView: !!e.initialInView,
            entry: void 0
          }
        }
        componentDidUpdate(e) {
          e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve(), this.node = null
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: s,
            fallbackInView: r
          } = this.props;
          this._unobserveCb = l(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: s
          }, r)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          if (!isPlainChildren(this.props)) {
            const {
              inView: e,
              entry: t
            } = this.state;
            return this.props.children({
              inView: e,
              entry: t,
              ref: this.handleNode
            })
          }
          const e = this.props,
            {
              children: t,
              as: n
            } = e,
            s = function(e, t) {
              if (null == e) return {};
              for (var n, i, s = {}, r = Object.keys(e); i < r.length; i++) r[i], t.indexOf(n) >= 0 || (s[n] = e[n]);
              return s
            }(e, _excluded);
          return i.createElement(n || "div", _extends({
            ref: this.handleNode
          }, s), t)
        }
      }

      function u({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: s,
        root: r,
        triggerOnce: o,
        skip: a,
        initialInView: c,
        fallbackInView: u,
        onChange: d
      } = {}) {
        var p;
        const [h, f] = i.useState(null), m = i.useRef(), [g, v] = i.useState({
          inView: !!c,
          entry: void 0
        });
        m.current = d, i.useEffect((() => {
          if (a || !h) return;
          let i;
          return i = l(h, ((e, t) => {
            v({
              inView: e,
              entry: t
            }), m.current && m.current(e, t), t.isIntersecting && o && i && (i(), i = void 0)
          }), {
            root: r,
            rootMargin: s,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, u), () => {
            i && i()
          }
        }), [Array.isArray(e) ? e.toString() : e, h, r, s, o, a, n, u, t]);
        const y = null == (p = g.entry) ? void 0 : p.target,
          w = i.useRef();
        h || !y || o || a || w.current === y || (w.current = y, v({
          inView: !!c,
          entry: void 0
        }));
        const b = [f, g.inView, g.entry];
        return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
      }
    }
  }
]);
//# sourceMappingURL=55cd069b9d27bf099156.js.map