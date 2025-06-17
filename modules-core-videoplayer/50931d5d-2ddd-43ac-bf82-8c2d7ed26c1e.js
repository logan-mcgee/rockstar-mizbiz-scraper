! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "50931d5d-2ddd-43ac-bf82-8c2d7ed26c1e", e._sentryDebugIdIdentifier = "sentry-dbid-50931d5d-2ddd-43ac-bf82-8c2d7ed26c1e")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [8583], {
    50964: (e, a, t) => {
      t.r(a), t.d(a, {
        AgeGate: () => f
      });
      var d = t(62229),
        l = t(6926),
        s = t(96672),
        n = t(20148),
        r = t(42451),
        o = t(95966),
        c = t(2918);
      const i = {
        agegate: "rockstargames-modules-core-videoplayerf9427878ee67735075cd3e245d49eabe",
        inputs: "rockstargames-modules-core-videoplayerca3ab235303ed1b84f9c867fe5393c3a",
        bg: "rockstargames-modules-core-videoplayeraa5cfbd26930aee31e4643edcda52b39"
      };
      var u = t(25854);
      const g = Object.freeze({
          NOT_SUBMITTED: void 0,
          PASSED: "1",
          FAILED: "0"
        }),
        f = (0, o.withTranslations)((e => {
          let {
            ageGatePassAge: a = 17,
            children: t,
            options: f = {},
            ga: b = {},
            t: m
          } = e;
          const {
            data: y
          } = (0, c.useRockstarUser)(), {
            track: p
          } = (0, c.useGtmTrack)(), h = (0, o.getCookieValueByName)("UAGC"), [_, M] = (0, d.useState)("1" === (v = h) ? g.PASSED : "0" === v ? g.FAILED : g.NOT_SUBMITTED);
          var v;
          const [w, k] = (0, d.useState)(), I = (0, d.createRef)(), x = (0, d.createRef)(), D = (0, d.createRef)(), {
            style: j
          } = f;
          return (0, d.useEffect)((() => {
            p({
              event: "age_gate_popup",
              element_placement: b.element_placement ?? ""
            })
          }), []), _ === g.PASSED || !1 === y?.isAMinor ? t : _ === g.FAILED ? (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [f?.header, (0, u.jsx)("h2", {
              children: m("agegate_fail")
            })]
          }) : (0, u.jsxs)("div", {
            className: i.agegate,
            style: j,
            children: [f?.header, (0, u.jsx)("div", {
              className: i.bg,
              style: f?.bgImg ? {
                backgroundImage: `url(${f.bgImg})`
              } : {}
            }), !1 === w && (0, u.jsx)("h5", {
              className: i.error,
              children: m("Please enter a valid age")
            }), (0, u.jsxs)("form", {
              name: "agegate",
              onSubmit: async e => {
                e.preventDefault();
                const t = new Date(D?.current?.value, I?.current?.value, x?.current?.value),
                  d = (0, l.j)(new Date, {
                    years: 150
                  }),
                  c = (0, s.f)(t) && (0, n.d)(t, d);
                if (k(c), c) {
                  const e = (0, r.V)(new Date, t) >= a;
                  p(e ? {
                    event: "age_gate_passed",
                    element_placement: b.element_placement ?? ""
                  } : {
                    event: "age_gate_failed",
                    element_placement: b.element_placement ?? "",
                    text: "you may not view this content at this time"
                  });
                  const d = e ? "1" : "0";
                  (0, o.setCookieValue)("UAGC", d), M(d)
                }
              },
              "data-testid": "agegate-form",
              children: [(0, u.jsx)("h5", {
                children: m("agegate_header")
              }), (0, u.jsxs)("div", {
                className: i.inputs,
                children: [(0, u.jsxs)("label", {
                  htmlFor: "monthInput",
                  children: [m("Month"), (0, u.jsx)("input", {
                    id: "monthInput",
                    ref: I,
                    placeholder: m("MM"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "dayInput",
                  children: [m("Day"), (0, u.jsx)("input", {
                    id: "dayInput",
                    ref: x,
                    placeholder: m("DD"),
                    maxLength: 2,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsxs)("label", {
                  htmlFor: "yearInput",
                  children: [m("Year"), (0, u.jsx)("input", {
                    id: "yearInput",
                    ref: D,
                    className: i.year,
                    placeholder: m("YYYY"),
                    maxLength: 4,
                    type: "number",
                    required: !0
                  })]
                }), (0, u.jsx)("button", {
                  type: "submit",
                  className: i.submit,
                  children: m("SUBMIT")
                })]
              })]
            }), f?.footer]
          })
        }))
    }
  }
]);