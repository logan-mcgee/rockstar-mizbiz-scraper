try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f48f53a8-0423-4eb9-a17a-b21304e6dd96", e._sentryDebugIdIdentifier = "sentry-dbid-f48f53a8-0423-4eb9-a17a-b21304e6dd96")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5168], {
    4408: (e, t, n) => {
      "use strict";
      n.d(t, {
        DX: () => u,
        xV: () => h,
        s6: () => _
      });
      var r = n(71127),
        o = n.t(r, 2),
        i = n(95362),
        l = n(42295),
        a = Symbol.for("react.lazy"),
        s = o[" use ".trim().toString()];

      function f(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function c(e) {
        const t = d(e),
          n = r.forwardRef((e, n) => {
            let {
              children: o,
              ...i
            } = e;
            f(o) && "function" == typeof s && (o = s(o._payload));
            const a = r.Children.toArray(o),
              c = a.find(m);
            if (c) {
              const e = c.props.children,
                o = a.map(t => t === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, l.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, l.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var u = c("Slot");

      function d(e) {
        const t = r.forwardRef((e, t) => {
          let {
            children: n,
            ...o
          } = e;
          if (f(n) && "function" == typeof s && (n = s(n._payload)), r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              l = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (l.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, l)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const t = ({
          children: e
        }) => (0, l.jsx)(l.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = p, t
      }
      var h = y("Slottable");

      function m(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      n(18429);
      var b = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = c(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {}),
        w = Object.freeze({
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
        g = r.forwardRef((e, t) => (0, l.jsx)(b.span, {
          ...e,
          ref: t,
          style: {
            ...w,
            ...e.style
          }
        }));
      g.displayName = "VisuallyHidden";
      const _ = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? g : r.Fragment;
        return (0, l.jsx)(n, {
          ...t
        })
      }
    },
    42295: (e, t, n) => {
      "use strict";
      e.exports = n(69245)
    },
    42649: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function l(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          n = i
        }
      }();
      var a, s = [],
        f = !1,
        c = -1;

      function u() {
        f && a && (f = !1, a.length ? s = a.concat(s) : c = -1, s.length && d())
      }

      function d() {
        if (!f) {
          var e = l(u);
          f = !0;
          for (var t = s.length; t;) {
            for (a = s, s = []; ++c < t;) a && a[c].run();
            c = -1, t = s.length
          }
          a = null, f = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
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

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function y() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new p(e, t)), 1 !== s.length || f || l(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = y, r.addListener = y, r.once = y, r.off = y, r.removeListener = y, r.removeAllListeners = y, r.emit = y, r.prependListener = y, r.prependOnceListener = y, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    69245: (e, t, n) => {
      "use strict";
      var r = n(71127),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, n) {
        var r, i = {},
          f = null,
          c = null;
        for (r in void 0 !== n && (f = "" + n), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (c = t.ref), t) l.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: c,
          props: i,
          _owner: a.current
        }
      }
      t.Fragment = i, t.jsx = f, t.jsxs = f
    }
  }
]);