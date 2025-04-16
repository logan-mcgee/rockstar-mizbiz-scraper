! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dc96c893-cd57-4992-8192-32fddab667d5", e._sentryDebugIdIdentifier = "sentry-dbid-dc96c893-cd57-4992-8192-32fddab667d5")
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
  [5238, 2857], {
    32857: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => s,
        VisuallyHidden: () => l
      });
      var n = a(3709),
        o = a(62229),
        r = (a(44853), a(47426));
      const t = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const a = (0, o.forwardRef)(((e, a) => {
            const {
              asChild: t,
              ...l
            } = e, s = t ? r.Slot : d;
            return (0, o.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, o.createElement)(s, (0, n.A)({}, l, {
              ref: a
            }))
          }));
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }), {}),
        l = (0, o.forwardRef)(((e, d) => (0, o.createElement)(t.span, (0, n.A)({}, e, {
          ref: d,
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
    3709: (e, d, a) => {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var d = 1; d < arguments.length; d++) {
            var a = arguments[d];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
          }
          return e
        }, n.apply(this, arguments)
      }
      a.d(d, {
        A: () => n
      })
    }
  }
]);