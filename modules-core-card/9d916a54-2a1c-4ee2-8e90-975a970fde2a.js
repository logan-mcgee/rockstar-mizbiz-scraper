! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "9d916a54-2a1c-4ee2-8e90-975a970fde2a", e._sentryDebugIdIdentifier = "sentry-dbid-9d916a54-2a1c-4ee2-8e90-975a970fde2a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [996], {
    7996: (e, s, a) => {
      a.r(s);
      var d = a(7013),
        l = a(7364),
        n = a.n(l),
        o = a(3052),
        c = a(4204),
        i = a(4896),
        r = a(5240);
      const t = (0, o.withRockstarGraph)(i.c, {
        env: "local"
      });
      n().render((0, r.jsx)(d.BrowserRouter, {
        basename: "/",
        children: (0, r.jsxs)("div", {
          "data-game": "gtao",
          children: [(0, r.jsxs)(t, {
            size: "sm",
            title: "Small Cards",
            children: [(0, r.jsx)(c.c, {
              size: "sm"
            }), (0, r.jsx)(c.c, {
              size: "sm"
            }), (0, r.jsx)(c.c, {
              size: "sm"
            }), (0, r.jsx)(c.c, {
              size: "sm"
            }), (0, r.jsx)(c.c, {
              size: "sm"
            })]
          }), (0, r.jsxs)(t, {
            size: "md",
            title: "Medium Cards",
            children: [(0, r.jsx)(c.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, r.jsx)(c.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, r.jsx)(c.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, r.jsx)(c.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, r.jsx)(c.c, {
              size: "md",
              collapsedHasTag: !0
            })]
          }), (0, r.jsxs)(t, {
            size: "lg",
            title: "Large Cards",
            children: [(0, r.jsx)(c.c, {
              size: "lg",
              expandedType: "long"
            }), (0, r.jsx)(c.c, {
              size: "lg",
              expandedType: "long"
            }), (0, r.jsx)(c.c, {
              size: "lg",
              expandedType: "long"
            }), (0, r.jsx)(c.c, {
              size: "lg",
              expandedType: "long"
            }), (0, r.jsx)(c.c, {
              size: "lg",
              expandedType: "long"
            })]
          })]
        })
      }), document.getElementById("module"))
    }
  }
]);