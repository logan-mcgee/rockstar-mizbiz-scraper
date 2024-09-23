! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1a2ca395-66d2-43b0-97ec-911265b57135", e._sentryDebugIdIdentifier = "sentry-dbid-1a2ca395-66d2-43b0-97ec-911265b57135")
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
  [949], {
    6516: (e, a, l) => {
      var o = l(1403),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function n(e, a, l) {
        var o, r = {},
          n = null,
          c = null;
        for (o in void 0 !== l && (n = "" + l), void 0 !== a.key && (n = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, o) && !s.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: c,
          props: r,
          _owner: i.current
        }
      }
      a.Fragment = r, a.jsx = n, a.jsxs = n
    },
    6632: (e, a, l) => {
      e.exports = l(6516)
    },
    8949: (e, a, l) => {
      l.r(a), l.d(a, {
        RockstarVideoPlayer: () => m,
        VideoField: () => p,
        default: () => b
      });
      var o = l(8407),
        t = l(472),
        r = l(5140),
        d = l(3809);
      const i = "rockstargames-modules-core-videoplayerc63cfb461217f059c8c25eec09602b30";
      var s = l(6632);
      const n = e => {
        let {
          color: a
        } = e;
        return (0, s.jsxs)("div", {
          className: "rockstargames-modules-core-videoplayera481f47ab7e8af4042a665fab5aea27c",
          style: {
            "--loader-color": a
          },
          children: [(0, s.jsx)("div", {
            className: i
          }), (0, s.jsx)("div", {
            className: i
          }), (0, s.jsx)("div", {
            className: i
          })]
        })
      };
      var c = l(4252),
        f = l.n(c);
      const u = e => {
          let {
            field: a,
            input: l,
            meta: r
          } = e;
          const {
            data: i
          } = (0, o.useQuery)(t.VideosList, {
            variables: {
              limit: 1e3
            }
          }), c = f()(i?.videos?.results).groupBy("game.title").map(((e, a) => ({
            gameTitle: a,
            videos: e.map((e => ({
              id: e.id,
              title: e.title
            })))
          }))).value();
          return (0, s.jsx)(d.FieldWrapper, {
            name: l.name || a.name || a.label,
            label: a.label,
            description: a.description,
            meta: r,
            children: i && c?.length ? (0, s.jsxs)("select", {
              ...l,
              children: [(0, s.jsx)("option", {
                value: "",
                children: "-- Select a video --"
              }), c.map((e => (0, s.jsx)("optgroup", {
                label: e.gameTitle,
                children: e.videos.map((e => (0, s.jsxs)("option", {
                  value: e.id,
                  children: ["(", e.id, ")", " ", e.title]
                }, e.id)))
              }, e.gameTitle)))]
            }) : (0, s.jsx)(n, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        p = function() {
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
              return (0, s.jsx)(u, {
                field: a,
                input: l,
                meta: o
              })
            }
          }
        },
        m = () => ({
          label: "Video",
          fields: [(0, r.NameField)(), p(), {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, (0, r.LeadAssetToggle)(), (0, r.ImageField)({
            label: "Background Image"
          })],
          defaultItem: () => (0, r.defaultItemUnique)({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => (0, r.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        b = m
    }
  }
]);