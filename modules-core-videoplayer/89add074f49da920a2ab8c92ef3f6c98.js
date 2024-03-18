/*! For license information please see 89add074f49da920a2ab8c92ef3f6c98.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4858349a-93a6-49be-9351-c9d3b88bcd59", e._sentryDebugIdIdentifier = "sentry-dbid-4858349a-93a6-49be-9351-c9d3b88bcd59")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [912], {
    1996: (e, a, l) => {
      var o = l(8200),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, l) {
        var o, d = {},
          s = null,
          u = null;
        for (o in void 0 !== l && (s = "" + l), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (u = a.ref), a) r.call(a, o) && !i.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: u,
          props: d,
          _owner: n.current
        }
      }
      a.Fragment = d, a.jsx = s, a.jsxs = s
    },
    3480: (e, a, l) => {
      e.exports = l(1996)
    },
    2912: (e, a, l) => {
      l.r(a), l.d(a, {
        RockstarVideoPlayer: () => c,
        VideoField: () => f,
        default: () => b
      });
      var o = l(3052),
        t = l(1532),
        d = l(9468),
        r = l(2104),
        n = l(1668),
        i = l(3660),
        s = l.n(i),
        u = l(3480);
      const p = e => {
          let {
            field: a,
            input: l,
            meta: d
          } = e;
          const {
            data: i
          } = (0, o.useQuery)(t.VideosList, {
            variables: {
              limit: 1e3
            }
          }), p = s()(i?.videos?.results).groupBy("game.title").map(((e, a) => ({
            gameTitle: a,
            videos: e.map((e => ({
              id: e.id,
              title: e.title
            })))
          }))).value();
          return (0, u.jsx)(r.FieldWrapper, {
            name: l.name || a.name || a.label,
            label: a.label,
            description: a.description,
            meta: d,
            children: i && p?.length ? (0, u.jsxs)("select", {
              ...l,
              children: [(0, u.jsx)("option", {
                value: "",
                children: "-- Select a video --"
              }), p.map((e => (0, u.jsx)("optgroup", {
                label: e.gameTitle,
                children: e.videos.map((e => (0, u.jsxs)("option", {
                  value: e.id,
                  children: ["(", e.id, ")", " ", e.title]
                }, e.id)))
              }, e.gameTitle)))]
            }) : (0, u.jsx)(n.DotLoader, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        f = function() {
          let {
            label: e = "Video",
            name: a = "id"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e,
            name: a,
            component: e => {
              let {
                field: a,
                input: l,
                meta: o
              } = e;
              return (0, u.jsx)(p, {
                field: a,
                input: l,
                meta: o
              })
            }
          }
        },
        c = () => ({
          label: "Video",
          fields: [(0, d.NameField)(), f(), {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, (0, d.LeadAssetToggle)(), (0, d.ImageField)({
            label: "Background Image"
          })],
          defaultItem: () => (0, d.defaultItemUnique)({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => (0, d.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        b = c
    }
  }
]);
//# sourceMappingURL=89add074f49da920a2ab8c92ef3f6c98.js.map