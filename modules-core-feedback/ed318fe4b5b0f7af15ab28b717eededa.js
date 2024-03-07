/*! For license information please see ed318fe4b5b0f7af15ab28b717eededa.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2c91cad2-296a-499e-8ec1-1d2c53a79f11", e._sentryDebugIdIdentifier = "sentry-dbid-2c91cad2-296a-499e-8ec1-1d2c53a79f11")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-core-feedback",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || []).push([
  [768], {
    996: (e, a, c) => {
      var s = c(200),
        d = Symbol.for("react.element"),
        o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        t = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, c) {
        var s, f = {},
          b = null,
          n = null;
        for (s in void 0 !== c && (b = "" + c), void 0 !== a.key && (b = "" + a.key), void 0 !== a.ref && (n = a.ref), a) o.call(a, s) && !t.hasOwnProperty(s) && (f[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === f[s] && (f[s] = a[s]);
        return {
          $$typeof: d,
          type: e,
          key: b,
          ref: n,
          props: f,
          _owner: r.current
        }
      }
      a.jsx = f, a.jsxs = f
    },
    480: (e, a, c) => {
      e.exports = c(996)
    },
    768: (e, a, c) => {
      c.r(a), c.d(a, {
        default: () => k
      });
      var s = c(200),
        d = c(668),
        o = c(836),
        r = c(52),
        t = c(792);
      const f = {
        feedback: "rockstargames-modules-core-feedbacke6966deef8e9fa2fc0c20c60e8e98447",
        stepMessage: "rockstargames-modules-core-feedbackb18adb6c0d0f7b76f23444a372f9400e",
        desc: "rockstargames-modules-core-feedbackbe5337748f1e0b01135113cd92b4395d",
        error: "rockstargames-modules-core-feedbackfd84bf2e2ed1843089fa2361d6036f5b",
        steps: "rockstargames-modules-core-feedbackc7f675f8668c5cf80b6d240c3d86b364",
        gtao: "rockstargames-modules-core-feedbackf5dde85a91065bce0698405c10b3fe20",
        stepIconbug: "rockstargames-modules-core-feedbackb111f2541e43cc8c390d757c2c21533a",
        stepIconcheater: "rockstargames-modules-core-feedbacka5b607ccdfe104ec9d24d455025378dd",
        stepIconsuggestions: "rockstargames-modules-core-feedbackaf0dbce46cd8308ab17a19bc9e8fe701",
        stepIcongameplay: "rockstargames-modules-core-feedbackae4b826011d432088e47579c20742f9d",
        "stepIconcommunity-events": "rockstargames-modules-core-feedbackfc6d0224791b79c9bc0e6fddd747b198",
        "stepIconmenus-ui": "rockstargames-modules-core-feedbacke0503b1690a14aba49ec17bd179290a4",
        "stepIconin-game-events-bonuses-discounts": "rockstargames-modules-core-feedbackb64cd524f70de2178ad95b69dcf51379",
        "stepIconrockstar-editor-snapmatic": "rockstargames-modules-core-feedbacke4b6ae963d6b6495e6e4784102b97f8d",
        "stepIconjob-creator": "rockstargames-modules-core-feedbackeaf572b02cbbf9fbc3b511ff25e942e1",
        stepIconweapons: "rockstargames-modules-core-feedbackc07bd581bc6346d976a3e6f72d8624eb",
        stepIconproperties: "rockstargames-modules-core-feedbackd24df2c476400150fe57e91cd3baa212",
        "stepIconcharacter-clothing-customization": "rockstargames-modules-core-feedbackba0e6e71c000deeb2604b8ddef80be3c",
        stepIconvehicles: "rockstargames-modules-core-feedbackd64ab972df7e87e35c4a7ef58f396826",
        "stepIcongta-rank-progression": "rockstargames-modules-core-feedbackcb9120943a3564e86857a5d65c693059",
        stepIcongtaplus: "rockstargames-modules-core-feedbacka1afe4e225c3ad0c27ae96c886b949bd",
        stepsNext: "rockstargames-modules-core-feedbackea3691443f71af92c22df0dbaca6f9e3",
        stepsPrevious: "rockstargames-modules-core-feedbackbcef5efffd7fee92036079f5083c54d3",
        rdo: "rockstargames-modules-core-feedbackdf83489f2baff10d7e8dd23b4fa04e67",
        "stepIconcamp-function": "rockstargames-modules-core-feedbackf7b0668549d6b772685d9568164471bb",
        "stepIconcamp-item": "rockstargames-modules-core-feedbackee27ae9bba32e7ea531bb41c919be57f",
        "stepIconcamp-main": "rockstargames-modules-core-feedbacka12e40dad77d834a8fbcffc0d6b48be8",
        "stepIconcamp-other": "rockstargames-modules-core-feedbackb39df4ed28afdd0b7a0a43b3497960b6",
        "stepIconcharacter-ability": "rockstargames-modules-core-feedbackaf731f308fa0e4130a2b3a1e05f32b31",
        "stepIconcharacter-clothing": "rockstargames-modules-core-feedbacka3d381d5c333a9add95aa9a23bdc026b",
        "stepIconcharacter-creator": "rockstargames-modules-core-feedbackc8cad1a5d293f47253c99c06b8fdd271",
        "stepIconcharacter-emote": "rockstargames-modules-core-feedbackce97a054d5d10f101e4da90fa0cd1661",
        "stepIconcharacter-main": "rockstargames-modules-core-feedbackb161bfd4723a4f67dcc27fb491a565b2",
        "stepIconcharacter-other": "rockstargames-modules-core-feedbackd5135a044736ab6ff22429c499e4714e",
        "stepIcongameplay-main": "rockstargames-modules-core-feedbacka0248f25672f01789e845559916db5cc",
        "stepIcongeneric-technical": "rockstargames-modules-core-feedbackb190972d51976848bc7a990fc03068d7",
        "stepIcongs-store": "rockstargames-modules-core-feedbacka2695d8670eb74682425ffd987345bfe",
        "stepIconhorse-breed": "rockstargames-modules-core-feedbackb814607731e8452cafc53538e264d97c",
        "stepIconhorse-main": "rockstargames-modules-core-feedbackcb2841a25f7a0b3128dbf50ac928e4d0",
        "stepIconhorse-new": "rockstargames-modules-core-feedbackdd240d6af4bf191a1674bc9c5a77ebd3",
        "stepIconhorse-other": "rockstargames-modules-core-feedbacka7bc2873a068b918ee5b3a3303768d14",
        "stepIconother-main": "rockstargames-modules-core-feedbacked3fc6d2c85af36722cc59de3a747f52",
        "stepIconweapon-customization": "rockstargames-modules-core-feedbackad151ad1822adf92968e7cf65b0f3c55",
        "stepIconweapon-main": "rockstargames-modules-core-feedbackbf5bfc2ab8e3b30bb566600126de2b46",
        "stepIconweapon-new": "rockstargames-modules-core-feedbackb0bbf3adee52ab0791b9b62d0d5a5490",
        "stepIconweapon-other": "rockstargames-modules-core-feedbackc46968e6ee5802feff02e03cf58837df",
        stepIcon_root: "rockstargames-modules-core-feedbacke0dd5f6ab9b33b49c42c27657dcad6b3",
        stepIconroles: "rockstargames-modules-core-feedbackfa6b7da8488ce96a9faa560cf2ede601"
      };
      var b = c(480);
      const n = e => {
          let {
            mutation: a,
            query: c,
            type: d,
            t: o
          } = e;
          const n = (0, t.useQueryParams)(),
            [m, k] = (0, s.useState)({}),
            {
              data: u
            } = (0, r.useQuery)(c, {
              variables: m,
              skip: !Object.entries(m).length
            });
          return (0, s.useEffect)((() => {
            k({
              step: n.get("step")
            })
          }), [n.get("step")]), (0, b.jsxs)("div", {
            className: f.feedback,
            children: [(0, b.jsx)("h1", {
              children: o("online-feedback-h1")
            }), (0, b.jsx)("div", {
              className: f.desc,
              dangerouslySetInnerHTML: {
                __html: o("online-feedback-desc")
              }
            }), u && (0, b.jsx)(l, {
              mutation: a,
              tree: u.tree,
              type: d,
              t: o
            })]
          })
        },
        l = e => {
          let {
            mutation: a,
            tree: c,
            type: s,
            t: o
          } = e;
          const r = c.path.map((e => 1 === c.path.length && "_root" === e.feedback_type.name ? null : (0, b.jsx)(d.A, {
              to: `?step=${e.id_hash}`,
              className: f[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            t = c.next.map((e => "_root" === e.feedback_type.name ? null : (0, b.jsxs)(d.A, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: f[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, b.jsx)("div", {
                className: f.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, b.jsxs)("div", {
            className: [f.steps, f[s]].join(" "),
            children: [(0, b.jsx)("div", {
              className: f.stepsPrevious,
              children: r
            }), (0, b.jsx)("div", {
              className: f.stepsNext,
              children: t
            }), t.length ? "" : (0, b.jsx)(m, {
              feedbackStep: c.path[c.path.length - 1].id,
              mutation: a,
              t: o
            })]
          })
        },
        m = e => {
          let {
            feedbackStep: a,
            mutation: c,
            t: d
          } = e;
          const {
            data: t
          } = (0, o.useRockstarUser)(), n = (0, s.useRef)(), [l, {
            data: m,
            error: k
          }] = (0, r.useMutation)(c);
          return t && !1 !== t?.user?.logged_in ? m?.submittal?.id ? (0, b.jsx)("div", {
            className: f.success,
            dangerouslySetInnerHTML: {
              __html: d("feedback.enter_success")
            }
          }) : (0, b.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: n.current.value,
                  feedback_step: a
                };
                l({
                  variables: e
                })
              })()
            })(e),
            children: [(0, b.jsx)("textarea", {
              ref: n,
              maxLength: 500,
              rows: 6,
              placeholder: d("feedback.placeholder")
            }), k ? (0, b.jsx)("div", {
              className: f.error,
              children: String(k)
            }) : "", (0, b.jsx)("button", {
              type: "submit",
              children: d("SUBMIT")
            })]
          }) : d("online-feedback-signin-0").replace("%s", d("signin-0"))
        },
        k = e => {
          let {
            mutation: a,
            query: c,
            type: s
          } = e;
          return (0, t.withTranslations)(n, "rdo" === s ? "rdr2" : s)({
            mutation: a,
            query: c,
            type: s
          })
        }
    }
  }
]);
//# sourceMappingURL=ed318fe4b5b0f7af15ab28b717eededa.js.map