! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5908e88a-a845-42ab-8a49-b5ea427800f0", e._sentryDebugIdIdentifier = "sentry-dbid-5908e88a-a845-42ab-8a49-b5ea427800f0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [952], {
    1952: (e, s, a) => {
      a.r(s);
      var d = a(3557),
        l = a(9080),
        n = a.n(l),
        o = a(3052),
        i = a(360),
        r = a(4152),
        t = a(3480);
      const c = (0, o.withRockstarGraph)(r.c, {
        env: "local"
      });
      n().render((0, t.jsx)(d.BrowserRouter, {
        basename: "/",
        children: (0, t.jsxs)("div", {
          "data-game": "gtao",
          children: [(0, t.jsxs)(c, {
            size: "sm",
            title: "Small Cards",
            children: [(0, t.jsx)(i.c, {
              size: "sm"
            }), (0, t.jsx)(i.c, {
              size: "sm"
            }), (0, t.jsx)(i.c, {
              size: "sm"
            }), (0, t.jsx)(i.c, {
              size: "sm"
            }), (0, t.jsx)(i.c, {
              size: "sm"
            })]
          }), (0, t.jsxs)(c, {
            size: "md",
            title: "Medium Cards",
            children: [(0, t.jsx)(i.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, t.jsx)(i.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, t.jsx)(i.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, t.jsx)(i.c, {
              size: "md",
              collapsedHasTag: !0
            }), (0, t.jsx)(i.c, {
              size: "md",
              collapsedHasTag: !0
            })]
          }), (0, t.jsxs)(c, {
            size: "lg",
            title: "Large Cards",
            children: [(0, t.jsx)(i.c, {
              size: "lg",
              expandedType: "long"
            }), (0, t.jsx)(i.c, {
              size: "lg",
              expandedType: "long"
            }), (0, t.jsx)(i.c, {
              size: "lg",
              expandedType: "long"
            }), (0, t.jsx)(i.c, {
              size: "lg",
              expandedType: "long"
            }), (0, t.jsx)(i.c, {
              size: "lg",
              expandedType: "long"
            })]
          })]
        })
      }), document.getElementById("module"))
    }
  }
]);
//# sourceMappingURL=8a7c424c3c9940f698996ce8632a5cb2.js.map