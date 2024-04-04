! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "029217e7-4bfa-4baa-adc6-fb33924a0cce", e._sentryDebugIdIdentifier = "sentry-dbid-029217e7-4bfa-4baa-adc6-fb33924a0cce")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [68, 240], {
    99576: (e, a, l) => {
      var o = l(51664),
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
          f = null;
        for (o in void 0 !== l && (s = "" + l), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (f = a.ref), a) r.call(a, o) && !i.hasOwnProperty(o) && (d[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === d[o] && (d[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: f,
          props: d,
          _owner: n.current
        }
      }
      a.Fragment = d, a.jsx = s, a.jsxs = s
    },
    95240: (e, a, l) => {
      e.exports = l(99576)
    },
    65068: (e, a, l) => {
      l.r(a), l.d(a, {
        RockstarVideoPlayer: () => p,
        VideoField: () => u,
        default: () => b
      });
      var o = l(33052),
        t = l(1532),
        d = l(89468),
        r = l(32104),
        n = l(9860),
        i = l(73660),
        s = l.n(i),
        f = l(95240);
      const c = e => {
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
          }), c = s()(i?.videos?.results).groupBy("game.title").map(((e, a) => ({
            gameTitle: a,
            videos: e.map((e => ({
              id: e.id,
              title: e.title
            })))
          }))).value();
          return (0, f.jsx)(r.FieldWrapper, {
            name: l.name || a.name || a.label,
            label: a.label,
            description: a.description,
            meta: d,
            children: i && c?.length ? (0, f.jsxs)("select", {
              ...l,
              children: [(0, f.jsx)("option", {
                value: "",
                children: "-- Select a video --"
              }), c.map((e => (0, f.jsx)("optgroup", {
                label: e.gameTitle,
                children: e.videos.map((e => (0, f.jsxs)("option", {
                  value: e.id,
                  children: ["(", e.id, ")", " ", e.title]
                }, e.id)))
              }, e.gameTitle)))]
            }) : (0, f.jsx)(n.DotLoader, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        u = function() {
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
              return (0, f.jsx)(c, {
                field: a,
                input: l,
                meta: o
              })
            }
          }
        },
        p = () => ({
          label: "Video",
          fields: [(0, d.NameField)(), u(), {
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
        b = p
    }
  }
]);