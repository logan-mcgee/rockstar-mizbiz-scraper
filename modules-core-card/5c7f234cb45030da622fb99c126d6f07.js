! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "9d916a54-2a1c-4ee2-8e90-975a970fde2a", e._sentryDebugIdIdentifier = "sentry-dbid-9d916a54-2a1c-4ee2-8e90-975a970fde2a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [996], {
    7996: (e, s, d) => {
      d.r(s);
      var a = d(7013),
        l = d(7364),
        n = d.n(l),
        o = d(3052),
        c = d(4204),
        i = d(4896),
        r = d(5240);
      const t = (0, o.withRockstarGraph)(i.c, {
        env: "local"
      });
      n().render((0, r.jsx)(a.BrowserRouter, {
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
//# sourceMappingURL=5c7f234cb45030da622fb99c126d6f07.js.map