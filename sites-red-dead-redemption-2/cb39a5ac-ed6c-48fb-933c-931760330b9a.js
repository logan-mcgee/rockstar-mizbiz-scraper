! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cb39a5ac-ed6c-48fb-933c-931760330b9a", e._sentryDebugIdIdentifier = "sentry-dbid-cb39a5ac-ed6c-48fb-933c-931760330b9a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [106], {
    30033: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        fbar: () => u,
        useAgegated: () => g
      });
      var s = t(40207),
        n = t(42756),
        d = t(71403),
        l = t(22946),
        r = t.n(l);
      const o = {
        agegate: "rockstargames-sites-red-dead-redemption-2b564767f67a0f63737d816dcca714d49",
        inputs: "rockstargames-sites-red-dead-redemption-2f33bd58bdfa63206fe9444fde46261d1",
        bg: "rockstargames-sites-red-dead-redemption-2db2f50238f9208ec72ef210e47b60e3b"
      };
      var i = t(46632);
      const c = (0, n.withTranslations)((e => {
          let {
            agegateValue: a,
            options: t = {},
            ga: l = {},
            t: c
          } = e;
          const {
            track: g
          } = (0, s.useGtmTrack)(), {
            mutateLSSettings: u
          } = (0, n.useRockstarWebLSSettings)(), [f, b] = (0, d.useState)(null), m = (0, d.createRef)(), p = (0, d.createRef)(), _ = (0, d.createRef)(), {
            style: h
          } = t;
          (0, d.useEffect)((() => {
            g({
              event: "age_gate_popup",
              element_placement: l.element_placement ?? ""
            })
          }), []);
          return !1 === a ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: h,
            children: [t?.header, (0, i.jsx)("h2", {
              children: c("agegate_fail")
            })]
          }) : null === a ? (0, i.jsxs)("div", {
            className: o.agegate,
            style: h,
            children: [t?.header, (0, i.jsx)("div", {
              className: o.bg,
              style: t?.bgImg ? {
                backgroundImage: `url(${t.bgImg})`
              } : {}
            }), !1 === f ? (0, i.jsx)("h5", {
              className: o.error,
              children: c("Please enter a valid age")
            }) : "", (0, i.jsxs)("form", {
              onSubmit: async e => {
                e.preventDefault();
                const a = `${_.current.value}-${m.current.value.padStart(2,0)}-${p.current.value.padStart(2,0)}`,
                  t = r()(a, "YYYY-MM-DD", !0).isValid();
                if (b(t), t) {
                  const e = r()().diff(a, "years") >= 17;
                  g(e ? {
                    event: "age_gate_passed",
                    element_placement: l.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: l.element_placement ?? "",
                    text: "you may not view this content at this time"
                  }), u({
                    key: "agegatePass",
                    value: e
                  })
                }
              },
              children: [(0, i.jsx)("h5", {
                children: c("agegate_header")
              }), (0, i.jsxs)("div", {
                className: o.inputs,
                children: [(0, i.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [c("Month"), (0, i.jsx)("input", {
                    id: "monthInput",
                    ref: m,
                    placeholder: c("MM"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [c("Day"), (0, i.jsx)("input", {
                    id: "dayInput",
                    ref: p,
                    placeholder: c("DD"),
                    maxLength: 2
                  })]
                }), (0, i.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [c("Year"), (0, i.jsx)("input", {
                    id: "yearInput",
                    ref: _,
                    className: o.year,
                    placeholder: c("YYYY"),
                    maxLength: 4
                  })]
                }), (0, i.jsx)("button", {
                  type: "submit",
                  className: o.submit,
                  children: c("SUBMIT")
                })]
              })]
            }), t?.footer]
          }) : null
        })),
        g = () => {
          const {
            lsSettings: e
          } = (0, n.useRockstarWebLSSettings)(), {
            data: a,
            loading: t
          } = (0, s.useRockstarUser)();
          return function(s) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const l = e?.agegatePass ?? null,
              r = a?.agegate_pass ?? l ?? null;
            return !r && t ? null : r ? s : (0, i.jsx)(c, {
              agegateValue: r,
              options: n,
              ga: d
            })
          }
        },
        u = 12
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