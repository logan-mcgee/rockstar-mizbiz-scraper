! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "01f4d87c-7d4d-466c-8e42-6762817a5af6", e._sentryDebugIdIdentifier = "sentry-dbid-01f4d87c-7d4d-466c-8e42-6762817a5af6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [852, 471], {
    26516: (e, a, s) => {
      var t = s(71403),
        d = Symbol.for("react.element"),
        c = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, s) {
        var t, c = {},
          i = null,
          f = null;
        for (t in void 0 !== s && (i = "" + s), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) r.call(a, t) && !o.hasOwnProperty(t) && (c[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === c[t] && (c[t] = a[t]);
        return {
          $$typeof: d,
          type: e,
          key: i,
          ref: f,
          props: c,
          _owner: n.current
        }
      }
      a.Fragment = c, a.jsx = i, a.jsxs = i
    },
    46632: (e, a, s) => {
      e.exports = s(26516)
    },
    8852: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => g
      });
      var t = s(71403),
        d = s(15730),
        c = s(96717),
        r = s(40207),
        n = s(58407),
        o = s(42756);
      const i = (0, c.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
          }
        }),
        f = {
          feedback: "rockstargames-sites-red-dead-onlinec0b299658372e7cfff111eb908a513f5",
          stepMessage: "rockstargames-sites-red-dead-onlineda97feb00e247cefda4f8648ed9601d2",
          desc: "rockstargames-sites-red-dead-onlineb956fa10b9dd1e3141282729ca66b8ab",
          error: "rockstargames-sites-red-dead-onlinec0cd90cf9226c370d9437f6a6923563a",
          steps: "rockstargames-sites-red-dead-onlinef83ef3f9961d98fb6cae662610fc2c5e",
          gtao: "rockstargames-sites-red-dead-onlinea84a1d2ca90298d816b08b78a8a598b3",
          stepIconbug: "rockstargames-sites-red-dead-onlineebe7435bf42b20b8fd46c465015e296a",
          stepIconcheater: "rockstargames-sites-red-dead-onlinecddea56d770073edb27000b84f5759c7",
          stepIconsuggestions: "rockstargames-sites-red-dead-onlinea03def07f9babec4718547f312fd1fad",
          stepIcongameplay: "rockstargames-sites-red-dead-onlinef7ed38a0c23b3f3ff8a11c664e5a187c",
          "stepIconcommunity-events": "rockstargames-sites-red-dead-onlinec518c6421c7bc2a60164827ca2b7c5c1",
          "stepIconmenus-ui": "rockstargames-sites-red-dead-onlinecaff8925b6c42730a8eff95b2f4b3662",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-red-dead-onlinea1be63b4a1aaf7747ac2bc693577fe28",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-red-dead-onlinee068839f3dc490d08ff5d2735073ad03",
          "stepIconjob-creator": "rockstargames-sites-red-dead-onlinea6ff4a0372c7eeebc3ec599c3e179a87",
          stepIconweapons: "rockstargames-sites-red-dead-onlinec664dbcd5d16b18da454f35d3d10204f",
          stepIconproperties: "rockstargames-sites-red-dead-onlinec3f0788cd690e7eff7ab110848f9e1fe",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-red-dead-onlinec06b81a0ec32b2a046fcbfb1b565fdb1",
          stepIconvehicles: "rockstargames-sites-red-dead-onlinefba3a23ce6633a515bcb2c272b9ce202",
          "stepIcongta-rank-progression": "rockstargames-sites-red-dead-onlinea676c460ed19d0f2c7f3d50e44a0c779",
          stepIcongtaplus: "rockstargames-sites-red-dead-onlinec2c55860b00e0cde31b89e2dfdfa12c1",
          stepsNext: "rockstargames-sites-red-dead-onlinedaa8cc1c70c4f3c67fa9617602d18c58",
          stepsPrevious: "rockstargames-sites-red-dead-onlineaf7b6ca5158f8ccc18e615ec5c03b3e9",
          rdo: "rockstargames-sites-red-dead-onlinee59cc897c2f88470fcb45c4d3563e8af",
          "stepIconcamp-function": "rockstargames-sites-red-dead-onlinebf4ea94fdf1b54048332990ea1a770e1",
          "stepIconcamp-item": "rockstargames-sites-red-dead-onlinefa3b86d76a957b590b4af7b378a063ee",
          "stepIconcamp-main": "rockstargames-sites-red-dead-onlinec9c48f11d35be00cacb50d4ca5ad8816",
          "stepIconcamp-other": "rockstargames-sites-red-dead-onlinec9dc9903a673a8944c29c923103c4775",
          "stepIconcharacter-ability": "rockstargames-sites-red-dead-onlinea24bc02ca1eaec3706e04d6b40076530",
          "stepIconcharacter-clothing": "rockstargames-sites-red-dead-onlinea5292a9328677ab05cfae18ec5d7f763",
          "stepIconcharacter-creator": "rockstargames-sites-red-dead-onlineb202ec09f80cc0a590ce74d87ac373a0",
          "stepIconcharacter-emote": "rockstargames-sites-red-dead-onlinea09406aba22d0295bb6b2129bc25ee9f",
          "stepIconcharacter-main": "rockstargames-sites-red-dead-onlineb646edd702c8c0d7ff6b9db031b3991f",
          "stepIconcharacter-other": "rockstargames-sites-red-dead-onlined7cc35b0aca38b339fa9fab192b6ce6c",
          "stepIcongameplay-main": "rockstargames-sites-red-dead-onlineff7ff17d2625fac2a1b3a1bb95ceb04a",
          "stepIcongeneric-technical": "rockstargames-sites-red-dead-onlined002d2aaeec2d87008b7cb632a66f7b6",
          "stepIcongs-store": "rockstargames-sites-red-dead-onlinee80f0f690e22316eb86dac223399ee16",
          "stepIconhorse-breed": "rockstargames-sites-red-dead-onlinef94831238186c0f7e6613fcef260d99c",
          "stepIconhorse-main": "rockstargames-sites-red-dead-onlinee5ab646651d87a9a38574d5361504b92",
          "stepIconhorse-new": "rockstargames-sites-red-dead-onlinefc49e9c38c6c284202bb16dd750efb8d",
          "stepIconhorse-other": "rockstargames-sites-red-dead-onlineccbfbea429f3f7ae9f35a08d7a040fbd",
          "stepIconother-main": "rockstargames-sites-red-dead-onlinec02edcd1f33cd9c3449313a59211ca22",
          "stepIconweapon-customization": "rockstargames-sites-red-dead-onlinec376b4e3f131b3719bfb76c2103ba2d0",
          "stepIconweapon-main": "rockstargames-sites-red-dead-onlined08da6b016fe7379ea21681c8af0b93f",
          "stepIconweapon-new": "rockstargames-sites-red-dead-onlineff544136c96967ac76ed032a650bd510",
          "stepIconweapon-other": "rockstargames-sites-red-dead-onlinea10b40981fb579f1c050e64a7cd1b269",
          stepIcon_root: "rockstargames-sites-red-dead-onlinedbac115128cc0c247167e66355e4d6ff",
          stepIconroles: "rockstargames-sites-red-dead-onlineb6c659ddb093c77dc454ac14857804cf"
        };
      var l = s(46632);
      const b = e => {
          let {
            mutation: a,
            query: s,
            type: d,
            t: c
          } = e;
          const r = (0, o.useQueryParams)(),
            [i, b] = (0, t.useState)({}),
            {
              data: m
            } = (0, n.useQuery)(s, {
              variables: i,
              skip: !Object.entries(i).length
            });
          return (0, t.useEffect)((() => {
            b({
              step: r.get("step")
            })
          }), [r.get("step")]), (0, l.jsxs)("div", {
            className: f.feedback,
            children: [(0, l.jsx)("h1", {
              children: c("online-feedback-h1")
            }), (0, l.jsx)("div", {
              className: f.desc,
              dangerouslySetInnerHTML: {
                __html: c("online-feedback-desc")
              }
            }), m && (0, l.jsx)(p, {
              mutation: a,
              tree: m.tree,
              type: d,
              t: c
            })]
          })
        },
        p = e => {
          let {
            mutation: a,
            tree: s,
            type: t,
            t: c
          } = e;
          const r = s.path.map((e => 1 === s.path.length && "_root" === e.feedback_type.name ? null : (0, l.jsx)(d.NavLink, {
              to: `?step=${e.id_hash}`,
              className: f[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            n = s.next.map((e => "_root" === e.feedback_type.name ? null : (0, l.jsxs)(d.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: f[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, l.jsx)("div", {
                className: f.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, l.jsxs)("div", {
            className: [f.steps, f[t]].join(" "),
            children: [(0, l.jsx)("div", {
              className: f.stepsPrevious,
              children: r
            }), (0, l.jsx)("div", {
              className: f.stepsNext,
              children: n
            }), n.length ? "" : (0, l.jsx)(m, {
              feedbackStep: s.path[s.path.length - 1].id,
              mutation: a,
              t: c
            })]
          })
        },
        m = e => {
          let {
            feedbackStep: a,
            mutation: s,
            t: d
          } = e;
          const {
            formatMessage: o
          } = (0, c.useIntl)(), {
            loggedIn: b
          } = (0, r.useRockstarUser)(), p = (0, t.useRef)(), [m, {
            data: g,
            error: k
          }] = (0, n.useMutation)(s);
          return b ? g?.submittal?.id ? (0, l.jsx)("div", {
            className: f.success,
            dangerouslySetInnerHTML: {
              __html: d("feedback.enter_success")
            }
          }) : (0, l.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: p.current.value,
                  feedback_step: a
                };
                m({
                  variables: e
                })
              })()
            })(e),
            children: [(0, l.jsx)("textarea", {
              ref: p,
              maxLength: 500,
              rows: 6,
              placeholder: d("feedback.placeholder")
            }), k ? (0, l.jsx)("div", {
              className: f.error,
              children: String(k)
            }) : "", (0, l.jsx)("button", {
              type: "submit",
              children: d("SUBMIT")
            })]
          }) : o(i.gtao_feedback_login_cta_text)
        },
        g = e => {
          let {
            mutation: a,
            query: s,
            type: t
          } = e;
          return (0, o.withTranslations)(b, "rdo" === t ? "rdr2" : t)({
            mutation: a,
            query: s,
            type: t
          })
        }
    }
  }
]);