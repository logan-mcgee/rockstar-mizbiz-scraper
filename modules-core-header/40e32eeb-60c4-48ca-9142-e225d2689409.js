! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "40e32eeb-60c4-48ca-9142-e225d2689409", e._sentryDebugIdIdentifier = "sentry-dbid-40e32eeb-60c4-48ca-9142-e225d2689409")
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
  [3823, 6204], {
    73823: (e, a, n) => {
      n.r(a), n.d(a, {
        Root: () => s,
        VisuallyHidden: () => l
      });
      var o = n(18751),
        r = n(62229),
        d = (n(44853), n(20025));
      const t = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const n = (0, r.forwardRef)(((e, n) => {
            const {
              asChild: t,
              ...l
            } = e, s = t ? d.Slot : a;
            return (0, r.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, r.createElement)(s, (0, o.A)({}, l, {
              ref: n
            }))
          }));
          return n.displayName = `Primitive.${a}`, {
            ...e,
            [a]: n
          }
        }), {}),
        l = (0, r.forwardRef)(((e, a) => (0, r.createElement)(t.span, (0, o.A)({}, e, {
          ref: a,
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
        })))),
        s = l
    },
    18751: (e, a, n) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var n = arguments[a];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }, o.apply(this, arguments)
      }
      n.d(a, {
        A: () => o
      })
    }
  }
]);