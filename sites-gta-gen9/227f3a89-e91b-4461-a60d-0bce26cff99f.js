try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "227f3a89-e91b-4461-a60d-0bce26cff99f", e._sentryDebugIdIdentifier = "sentry-dbid-227f3a89-e91b-4461-a60d-0bce26cff99f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1404, 2295, 9023], {
    42295: (e, a, s) => {
      e.exports = s(69245)
    },
    69245: (e, a, s) => {
      var t = s(62229),
        c = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function g(e, a, s) {
        var t, r = {},
          g = null,
          f = null;
        for (t in void 0 !== s && (g = "" + s), void 0 !== a.key && (g = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, t) && !d.hasOwnProperty(t) && (r[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === r[t] && (r[t] = a[t]);
        return {
          $$typeof: c,
          type: e,
          key: g,
          ref: f,
          props: r,
          _owner: o.current
        }
      }
      a.Fragment = r, a.jsx = g, a.jsxs = g
    },
    89023: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => l
      });
      var t = s(42295),
        c = s(62229),
        r = s(9623),
        n = s(81788),
        o = s(2918),
        d = s(95966);
      const g = (0, n.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            description: "CTA that displays on the GTAO feedback page if the viewer is not logged in.",
            defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
          }
        }),
        f = {
          desc: "rockstargames-sites-gta-gen9d72e70db4d8f2e2475325b0ec8c822cd",
          error: "rockstargames-sites-gta-gen9e8b9707f598c854597530de876d5c0ef",
          feedback: "rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972",
          gtao: "rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39",
          rdo: "rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4",
          stepIcon_root: "rockstargames-sites-gta-gen9e99576cbb21b9ebb786c52d979970d63",
          stepIconbug: "rockstargames-sites-gta-gen9dde746ae06d964de8cfe361c04230376",
          "stepIconcamp-function": "rockstargames-sites-gta-gen9f5648f9ef8fd0b5dab9dd162e955f30c",
          "stepIconcamp-item": "rockstargames-sites-gta-gen9c2b48f9cec52080c94c06030d2e6384a",
          "stepIconcamp-main": "rockstargames-sites-gta-gen9bf3d20becfafe1b65e04909b0e7f4e18",
          "stepIconcamp-other": "rockstargames-sites-gta-gen9c73d9b3e62ba1d8978cc11b3f6f4b63f",
          "stepIconcharacter-ability": "rockstargames-sites-gta-gen9ea6cdf8bd9c3c40638213ad13ab03976",
          "stepIconcharacter-clothing": "rockstargames-sites-gta-gen9ffa2f37d23d90bee1f53a3b4542d3f1e",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-gta-gen9fb9d9b31972f3cf06b24dcd241d94cca",
          "stepIconcharacter-creator": "rockstargames-sites-gta-gen9f678e94aec49f395049b3587908f836c",
          "stepIconcharacter-emote": "rockstargames-sites-gta-gen9cf18c382fd6df1c51cb589332427cfb3",
          "stepIconcharacter-main": "rockstargames-sites-gta-gen9f0260f18060c6e96640b27e6cf851850",
          "stepIconcharacter-other": "rockstargames-sites-gta-gen9a5dd996a50e86e8b5ba056801bb2f1ea",
          stepIconcheater: "rockstargames-sites-gta-gen9e9aec1e44d6e66bef96ed0f052b39200",
          "stepIconcommunity-events": "rockstargames-sites-gta-gen9a41a910c09fe47362ff949ad35f07dcc",
          stepIcongameplay: "rockstargames-sites-gta-gen9cb8b7ecdcf5f5c25cb01a32157e44929",
          "stepIcongameplay-main": "rockstargames-sites-gta-gen9e21767034c45936ce182d6d32e64eb4a",
          "stepIcongeneric-technical": "rockstargames-sites-gta-gen9c02aca39e34f0b24cf68d938daf8f56a",
          "stepIcongs-store": "rockstargames-sites-gta-gen9bc94b9ece865e2e6e93325f782428de9",
          "stepIcongta-rank-progression": "rockstargames-sites-gta-gen9bcffec2f62cb18453a68a9d3f5338b60",
          stepIcongtaplus: "rockstargames-sites-gta-gen9f0792205d3a2bc0175c03643ff2fa790",
          "stepIconhorse-breed": "rockstargames-sites-gta-gen9a7df86a47c50e2649f493d0425a184cf",
          "stepIconhorse-main": "rockstargames-sites-gta-gen9a1401860c69980c4db2580c372bb9f23",
          "stepIconhorse-new": "rockstargames-sites-gta-gen9a8fbb915c03e699cbd844fb9ce20d38d",
          "stepIconhorse-other": "rockstargames-sites-gta-gen9d996aa55e6945a058d09400bd13715f8",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-gta-gen9eeb5daa122c15929afd6d10975e8bcb3",
          "stepIconjob-creator": "rockstargames-sites-gta-gen9ae672dd1fe780d3b6f18b52e3f3e2ca1",
          "stepIconmenus-ui": "rockstargames-sites-gta-gen9c35aee37fbe06edb4c59a52073408967",
          "stepIconother-main": "rockstargames-sites-gta-gen9edafdf48e7c8d64d66bb90e05df1e215",
          stepIconproperties: "rockstargames-sites-gta-gen9ee38bdcb21c08692870e11ba400c373f",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-gta-gen9a754717f465acea44ba04bc6853ccc41",
          stepIconroles: "rockstargames-sites-gta-gen9ea5b759ebe95532d36d128e2a7c66bdb",
          stepIconsuggestions: "rockstargames-sites-gta-gen9c6b5ad1f7ca729fc671c75dcc3186f3e",
          stepIconvehicles: "rockstargames-sites-gta-gen9ca726647ee464cffbc00336018b88ad6",
          "stepIconweapon-customization": "rockstargames-sites-gta-gen9d9e3f8a5a8147a5c0b600e1bd4fcdfa8",
          "stepIconweapon-main": "rockstargames-sites-gta-gen9c9b39c6f2fd4199fa462e02eedb67e23",
          "stepIconweapon-new": "rockstargames-sites-gta-gen9ab0678cf2ccc90293aeb8dffc3d4ce80",
          "stepIconweapon-other": "rockstargames-sites-gta-gen9e05a05344ced03c0be6a699395aec8e9",
          stepIconweapons: "rockstargames-sites-gta-gen9b07410bcb9f7d843a491602c76df2ef3",
          stepMessage: "rockstargames-sites-gta-gen9ccb8ae7398f53e45ded9dfe28c3993e6",
          steps: "rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551",
          stepsNext: "rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d",
          stepsPrevious: "rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918"
        },
        i = ({
          mutation: e,
          query: a,
          type: s,
          t: r
        }) => {
          const n = (0, d.useQueryParams)(),
            [o, g] = (0, c.useState)({}),
            {
              data: i
            } = (0, d.useQuery)(a, {
              variables: o,
              skip: !Object.entries(o).length
            });
          return (0, c.useEffect)((() => {
            g({
              step: n.get("step")
            })
          }), [n.get("step")]), (0, t.jsxs)("div", {
            className: f.feedback,
            children: [(0, t.jsx)("h1", {
              children: r("online-feedback-h1")
            }), (0, t.jsx)("div", {
              className: f.desc,
              dangerouslySetInnerHTML: {
                __html: r("online-feedback-desc")
              }
            }), i && (0, t.jsx)(b, {
              mutation: e,
              tree: i.tree,
              type: s,
              t: r
            })]
          })
        },
        b = ({
          mutation: e,
          tree: a,
          type: s,
          t: c
        }) => {
          const n = a.path.map((e => 1 === a.path.length && "_root" === e.feedback_type.name ? null : (0, t.jsx)(r.NavLink, {
              to: `?step=${e.id_hash}`,
              className: f[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            o = a.next.map((e => "_root" === e.feedback_type.name ? null : (0, t.jsxs)(r.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: f[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, t.jsx)("div", {
                className: f.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, t.jsxs)("div", {
            className: [f.steps, f[s]].join(" "),
            children: [(0, t.jsx)("div", {
              className: f.stepsPrevious,
              children: n
            }), (0, t.jsx)("div", {
              className: f.stepsNext,
              children: o
            }), o.length ? "" : (0, t.jsx)(p, {
              feedbackStep: a.path[a.path.length - 1].id,
              mutation: e,
              t: c
            })]
          })
        },
        p = ({
          feedbackStep: e,
          mutation: a,
          t: s
        }) => {
          const {
            formatMessage: r
          } = (0, n.useIntl)(), {
            loggedIn: i
          } = (0, o.useRockstarUser)(), b = (0, c.useRef)(), [p, {
            data: l,
            error: m
          }] = (0, d.useMutation)(a);
          return i ? l?.submittal?.id ? (0, t.jsx)("div", {
            className: f.success,
            dangerouslySetInnerHTML: {
              __html: s("feedback.enter_success")
            }
          }) : (0, t.jsxs)("form", {
            onSubmit: a => (a => {
              a.preventDefault(), (() => {
                const a = {
                  content: b.current.value,
                  feedback_step: e
                };
                p({
                  variables: a
                })
              })()
            })(a),
            children: [(0, t.jsx)("textarea", {
              ref: b,
              maxLength: 500,
              rows: 6,
              placeholder: s("feedback.placeholder")
            }), m ? (0, t.jsx)("div", {
              className: f.error,
              children: String(m)
            }) : "", (0, t.jsx)("button", {
              type: "submit",
              children: s("SUBMIT")
            })]
          }) : r(g.gtao_feedback_login_cta_text)
        },
        l = ({
          mutation: e,
          query: a,
          type: s
        }) => (0, d.withTranslations)(i, "rdo" === s ? "rdr2" : s)({
          mutation: e,
          query: a,
          type: s
        })
    }
  }
]);