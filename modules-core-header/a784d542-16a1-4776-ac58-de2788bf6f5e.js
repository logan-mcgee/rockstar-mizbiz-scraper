! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a784d542-16a1-4776-ac58-de2788bf6f5e", e._sentryDebugIdIdentifier = "sentry-dbid-a784d542-16a1-4776-ac58-de2788bf6f5e")
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
  [2015, 4396], {
    12015: (e, a, d) => {
      d.r(a), d.d(a, {
        Root: () => s,
        VisuallyHidden: () => l
      });
      var n = d(3709),
        o = d(62229),
        r = (d(44853), d(78308));
      const t = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const d = (0, o.forwardRef)(((e, d) => {
            const {
              asChild: t,
              ...l
            } = e, s = t ? r.Slot : a;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(s, (0, n.A)({}, l, {
              ref: d
            }))
          }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {}),
        l = (0, o.forwardRef)(((e, a) => (0, o.createElement)(t.span, (0, n.A)({}, e, {
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
    3709: (e, a, d) => {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var d = arguments[a];
            for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n])
          }
          return e
        }, n.apply(this, arguments)
      }
      d.d(a, {
        A: () => n
      })
    }
  }
]);