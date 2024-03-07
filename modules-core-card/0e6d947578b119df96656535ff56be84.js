! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5908e88a-a845-42ab-8a49-b5ea427800f0", e._sentryDebugIdIdentifier = "sentry-dbid-5908e88a-a845-42ab-8a49-b5ea427800f0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [952], {
    1952: (e, s, a) => {
      a.r(s);
      var d = a(3557),
        l = a(9080),
        n = a.n(l),
        o = a(3052),
        c = a(360),
        i = a(4152),
        r = a(3480);
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
//# sourceMappingURL=0e6d947578b119df96656535ff56be84.js.map