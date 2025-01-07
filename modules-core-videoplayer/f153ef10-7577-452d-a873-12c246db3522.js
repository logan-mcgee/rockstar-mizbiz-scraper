! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f153ef10-7577-452d-a873-12c246db3522", e._sentryDebugIdIdentifier = "sentry-dbid-f153ef10-7577-452d-a873-12c246db3522")
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
  [106], {
    33: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => g,
        useAgegated: () => u
      });
      var s = t(207),
        n = t(2756),
        l = t(1403),
        d = t(2946),
        r = t.n(d);
      const o = {
        agegate: "rockstargames-modules-core-videoplayerb564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-modules-core-videoplayerf33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-modules-core-videoplayerdb2f50238f9208ec72ef210e47b60e3b"
      };
      var c = t(6632);
      const i = (0, n.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            ga: d = {},
            t: i
          } = e;
          const {
            track: u
          } = (0, s.useGtmTrack)(), {
            mutateLSSettings: g
          } = (0, n.useRockstarWebLSSettings)(), [f, m] = (0, l.useState)(null), p = (0, l.createRef)(), b = (0, l.createRef)(), y = (0, l.createRef)(), {
            style: h
          } = t;
          (0, l.useEffect)((() => {
            u({
              event: "age_gate_popup",
              element_placement: d.element_placement ?? ""
            })
          }), []);
          return !1 === a ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: h,
            children: [t?.header, (0, c.jsx)("h2", {
              children: i("agegate_fail")
            })]
          }) : null === a ? (0, c.jsxs)("div", {
            className: o.agegate,
            style: h,
            children: [t?.header, (0, c.jsx)("div", {
              className: o.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === f ? (0, c.jsx)("h5", {
              className: o.error,
              children: i("Please enter a valid age")
            }) : "", (0, c.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${y.current.value}-${p.current.value.padStart(2,0)}-${b.current.value.padStart(2,0)}`,
                  t = r()(a, "YYYY-MM-DD", !0).isValid();
                if (m(t), t) {
                  const e = r()().diff(a, "years") >= 17;
                  u(e ? {
                    event: "age_gate_passed",
                    element_placement: d.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: d.element_placement ?? "",
                    text: "you may not view this content at this time"
                  }), g({
                    key: "agegatePass",
                    value: e
                  })
                }
              },
              children: [(0, c.jsx)("h5", {
                children: i("agegate_header")
              }), (0, c.jsxs)("div", {
                className: o.inputs,
                children: [(0, c.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [i("Month"), (0, c.jsx)("input", {
                    id: "monthInput",
                    ref: p,
                    placeholder: i("MM"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [i("Day"), (0, c.jsx)("input", {
                    id: "dayInput",
                    ref: b,
                    placeholder: i("DD"),
                    maxLength: 2
                  })]
                }), (0, c.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [i("Year"), (0, c.jsx)("input", {
                    id: "yearInput",
                    ref: y,
                    className: o.year,
                    placeholder: i("YYYY"),
                    maxLength: 4
                  })]
                }), (0, c.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: i("SUBMIT")
                })]
              })]
            }), t?.footer]
          }) : null
        })),
        u = () => {
          const {
            lsSettings: e
          } = (0, n.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, s.useRockstarUser)();
          return function(s) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const d = e?.agegatePass ?? null,
              r = a?.agegate_pass ?? d ?? null;
            return !r && t ? null : r ? s : (0, c.jsx)(i, {
              agegateValue: r,
              options: n,
              ga: l
            })
          }
        },
        g = 12
    },
    3941: e => {
      function a(e) {
        var a = new Error("Cannot find module '" + e + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      a.keys = () => [], a.resolve = a, a.id = 3941, e.exports = a
    }
  }
]);