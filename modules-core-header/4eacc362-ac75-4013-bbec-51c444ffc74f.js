! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4eacc362-ac75-4013-bbec-51c444ffc74f", e._sentryDebugIdIdentifier = "sentry-dbid-4eacc362-ac75-4013-bbec-51c444ffc74f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4082, 1029, 3410, 5791, 8172, 1701], {
    65039: (e, r, o) => {
      var a = o(62229),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        t = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, r, o) {
        var a, n = {},
          s = null,
          i = null;
        for (a in void 0 !== o && (s = "" + o), void 0 !== r.key && (s = "" + r.key), void 0 !== r.ref && (i = r.ref), r) t.call(r, a) && !f.hasOwnProperty(a) && (n[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === n[a] && (n[a] = r[a]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      r.Fragment = n, r.jsx = s, r.jsxs = s
    },
    91029: (e, r, o) => {
      e.exports = o(65039)
    },
    84082: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => f,
        VisuallyHidden: () => l
      });
      var a = o(62229),
        d = (o(44853), o(21222)),
        n = o(91029),
        t = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, r) => {
          const o = a.forwardRef(((e, o) => {
            const {
              asChild: a,
              ...t
            } = e, l = a ? d.Slot : r;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
              ...t,
              ref: o
            })
          }));
          return o.displayName = `Primitive.${r}`, {
            ...e,
            [r]: o
          }
        }), {}),
        l = a.forwardRef(((e, r) => (0, n.jsx)(t.span, {
          ...e,
          ref: r,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })));
      l.displayName = "VisuallyHidden";
      var f = l
    }
  }
]);