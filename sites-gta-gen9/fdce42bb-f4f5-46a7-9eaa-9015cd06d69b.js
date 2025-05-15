! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fdce42bb-f4f5-46a7-9eaa-9015cd06d69b", e._sentryDebugIdIdentifier = "sentry-dbid-fdce42bb-f4f5-46a7-9eaa-9015cd06d69b")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [912, 5854, 8531], {
    10912: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => p
      });
      var s = t(62229),
        c = t(9623),
        r = t(81788),
        n = t(2918),
        o = t(95966);
      const d = (0, r.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
          }
        }),
        g = {
          feedback: "rockstargames-sites-gta-gen9c386be0dcd753031c7c8370a05206972",
          stepMessage: "rockstargames-sites-gta-gen9ccb8ae7398f53e45ded9dfe28c3993e6",
          desc: "rockstargames-sites-gta-gen9d72e70db4d8f2e2475325b0ec8c822cd",
          error: "rockstargames-sites-gta-gen9e8b9707f598c854597530de876d5c0ef",
          steps: "rockstargames-sites-gta-gen9cc443abe2c14980fe797ae07c38a1551",
          gtao: "rockstargames-sites-gta-gen9ddc7e36204db6670d800fe763b791f39",
          stepIconbug: "rockstargames-sites-gta-gen9dde746ae06d964de8cfe361c04230376",
          stepIconcheater: "rockstargames-sites-gta-gen9e9aec1e44d6e66bef96ed0f052b39200",
          stepIconsuggestions: "rockstargames-sites-gta-gen9c6b5ad1f7ca729fc671c75dcc3186f3e",
          stepIcongameplay: "rockstargames-sites-gta-gen9cb8b7ecdcf5f5c25cb01a32157e44929",
          "stepIconcommunity-events": "rockstargames-sites-gta-gen9a41a910c09fe47362ff949ad35f07dcc",
          "stepIconmenus-ui": "rockstargames-sites-gta-gen9c35aee37fbe06edb4c59a52073408967",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-gta-gen9eeb5daa122c15929afd6d10975e8bcb3",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-gta-gen9a754717f465acea44ba04bc6853ccc41",
          "stepIconjob-creator": "rockstargames-sites-gta-gen9ae672dd1fe780d3b6f18b52e3f3e2ca1",
          stepIconweapons: "rockstargames-sites-gta-gen9b07410bcb9f7d843a491602c76df2ef3",
          stepIconproperties: "rockstargames-sites-gta-gen9ee38bdcb21c08692870e11ba400c373f",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-gta-gen9fb9d9b31972f3cf06b24dcd241d94cca",
          stepIconvehicles: "rockstargames-sites-gta-gen9ca726647ee464cffbc00336018b88ad6",
          "stepIcongta-rank-progression": "rockstargames-sites-gta-gen9bcffec2f62cb18453a68a9d3f5338b60",
          stepIcongtaplus: "rockstargames-sites-gta-gen9f0792205d3a2bc0175c03643ff2fa790",
          stepsNext: "rockstargames-sites-gta-gen9e9cffe7e98f54fe7ef36b758e750661d",
          stepsPrevious: "rockstargames-sites-gta-gen9acf5035830b2f5fbecef86ce7004c918",
          rdo: "rockstargames-sites-gta-gen9b7fdd152099e67cc826b3fa2a9bfe3a4",
          "stepIconcamp-function": "rockstargames-sites-gta-gen9f5648f9ef8fd0b5dab9dd162e955f30c",
          "stepIconcamp-item": "rockstargames-sites-gta-gen9c2b48f9cec52080c94c06030d2e6384a",
          "stepIconcamp-main": "rockstargames-sites-gta-gen9bf3d20becfafe1b65e04909b0e7f4e18",
          "stepIconcamp-other": "rockstargames-sites-gta-gen9c73d9b3e62ba1d8978cc11b3f6f4b63f",
          "stepIconcharacter-ability": "rockstargames-sites-gta-gen9ea6cdf8bd9c3c40638213ad13ab03976",
          "stepIconcharacter-clothing": "rockstargames-sites-gta-gen9ffa2f37d23d90bee1f53a3b4542d3f1e",
          "stepIconcharacter-creator": "rockstargames-sites-gta-gen9f678e94aec49f395049b3587908f836c",
          "stepIconcharacter-emote": "rockstargames-sites-gta-gen9cf18c382fd6df1c51cb589332427cfb3",
          "stepIconcharacter-main": "rockstargames-sites-gta-gen9f0260f18060c6e96640b27e6cf851850",
          "stepIconcharacter-other": "rockstargames-sites-gta-gen9a5dd996a50e86e8b5ba056801bb2f1ea",
          "stepIcongameplay-main": "rockstargames-sites-gta-gen9e21767034c45936ce182d6d32e64eb4a",
          "stepIcongeneric-technical": "rockstargames-sites-gta-gen9c02aca39e34f0b24cf68d938daf8f56a",
          "stepIcongs-store": "rockstargames-sites-gta-gen9bc94b9ece865e2e6e93325f782428de9",
          "stepIconhorse-breed": "rockstargames-sites-gta-gen9a7df86a47c50e2649f493d0425a184cf",
          "stepIconhorse-main": "rockstargames-sites-gta-gen9a1401860c69980c4db2580c372bb9f23",
          "stepIconhorse-new": "rockstargames-sites-gta-gen9a8fbb915c03e699cbd844fb9ce20d38d",
          "stepIconhorse-other": "rockstargames-sites-gta-gen9d996aa55e6945a058d09400bd13715f8",
          "stepIconother-main": "rockstargames-sites-gta-gen9edafdf48e7c8d64d66bb90e05df1e215",
          "stepIconweapon-customization": "rockstargames-sites-gta-gen9d9e3f8a5a8147a5c0b600e1bd4fcdfa8",
          "stepIconweapon-main": "rockstargames-sites-gta-gen9c9b39c6f2fd4199fa462e02eedb67e23",
          "stepIconweapon-new": "rockstargames-sites-gta-gen9ab0678cf2ccc90293aeb8dffc3d4ce80",
          "stepIconweapon-other": "rockstargames-sites-gta-gen9e05a05344ced03c0be6a699395aec8e9",
          stepIcon_root: "rockstargames-sites-gta-gen9e99576cbb21b9ebb786c52d979970d63",
          stepIconroles: "rockstargames-sites-gta-gen9ea5b759ebe95532d36d128e2a7c66bdb"
        };
      var f = t(25854);
      const b = e => {
          let {
            mutation: a,
            query: t,
            type: c,
            t: r
          } = e;
          const n = (0, o.useQueryParams)(),
            [d, b] = (0, s.useState)({}),
            {
              data: l
            } = (0, o.useQuery)(t, {
              variables: d,
              skip: !Object.entries(d).length
            });
          return (0, s.useEffect)((() => {
            b({
              step: n.get("step")
            })
          }), [n.get("step")]), (0, f.jsxs)("div", {
            className: g.feedback,
            children: [(0, f.jsx)("h1", {
              children: r("online-feedback-h1")
            }), (0, f.jsx)("div", {
              className: g.desc,
              dangerouslySetInnerHTML: {
                __html: r("online-feedback-desc")
              }
            }), l && (0, f.jsx)(i, {
              mutation: a,
              tree: l.tree,
              type: c,
              t: r
            })]
          })
        },
        i = e => {
          let {
            mutation: a,
            tree: t,
            type: s,
            t: r
          } = e;
          const n = t.path.map((e => 1 === t.path.length && "_root" === e.feedback_type.name ? null : (0, f.jsx)(c.NavLink, {
              to: `?step=${e.id_hash}`,
              className: g[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            o = t.next.map((e => "_root" === e.feedback_type.name ? null : (0, f.jsxs)(c.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: g[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, f.jsx)("div", {
                className: g.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, f.jsxs)("div", {
            className: [g.steps, g[s]].join(" "),
            children: [(0, f.jsx)("div", {
              className: g.stepsPrevious,
              children: n
            }), (0, f.jsx)("div", {
              className: g.stepsNext,
              children: o
            }), o.length ? "" : (0, f.jsx)(l, {
              feedbackStep: t.path[t.path.length - 1].id,
              mutation: a,
              t: r
            })]
          })
        },
        l = e => {
          let {
            feedbackStep: a,
            mutation: t,
            t: c
          } = e;
          const {
            formatMessage: b
          } = (0, r.useIntl)(), {
            loggedIn: i
          } = (0, n.useRockstarUser)(), l = (0, s.useRef)(), [p, {
            data: m,
            error: u
          }] = (0, o.useMutation)(t);
          return i ? m?.submittal?.id ? (0, f.jsx)("div", {
            className: g.success,
            dangerouslySetInnerHTML: {
              __html: c("feedback.enter_success")
            }
          }) : (0, f.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: l.current.value,
                  feedback_step: a
                };
                p({
                  variables: e
                })
              })()
            })(e),
            children: [(0, f.jsx)("textarea", {
              ref: l,
              maxLength: 500,
              rows: 6,
              placeholder: c("feedback.placeholder")
            }), u ? (0, f.jsx)("div", {
              className: g.error,
              children: String(u)
            }) : "", (0, f.jsx)("button", {
              type: "submit",
              children: c("SUBMIT")
            })]
          }) : b(d.gtao_feedback_login_cta_text)
        },
        p = e => {
          let {
            mutation: a,
            query: t,
            type: s
          } = e;
          return (0, o.withTranslations)(b, "rdo" === s ? "rdr2" : s)({
            mutation: a,
            query: t,
            type: s
          })
        }
    },
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var s = t(62229),
        c = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function g(e, a, t) {
        var s, r = {},
          g = null,
          f = null;
        for (s in void 0 !== t && (g = "" + t), void 0 !== a.key && (g = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, s) && !d.hasOwnProperty(s) && (r[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === r[s] && (r[s] = a[s]);
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
    }
  }
]);