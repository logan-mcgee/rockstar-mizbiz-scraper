try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "bf910519-4462-4d54-9e07-f67d342ef2bf", e._sentryDebugIdIdentifier = "sentry-dbid-bf910519-4462-4d54-9e07-f67d342ef2bf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [1404, 9023], {
    89023: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => g
      });
      var d = a(42295),
        t = a(62229),
        c = a(9623),
        n = a(81788),
        r = a(32169),
        o = a(95966);
      const i = (0, n.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            description: "CTA that displays on the GTAO feedback page if the viewer is not logged in.",
            defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
          }
        }),
        f = {
          desc: "rockstargames-sites-red-dead-onlined72e70db4d8f2e2475325b0ec8c822cd",
          error: "rockstargames-sites-red-dead-onlinee8b9707f598c854597530de876d5c0ef",
          feedback: "rockstargames-sites-red-dead-onlinec386be0dcd753031c7c8370a05206972",
          gtao: "rockstargames-sites-red-dead-onlineddc7e36204db6670d800fe763b791f39",
          rdo: "rockstargames-sites-red-dead-onlineb7fdd152099e67cc826b3fa2a9bfe3a4",
          stepIcon_root: "rockstargames-sites-red-dead-onlinee99576cbb21b9ebb786c52d979970d63",
          stepIconbug: "rockstargames-sites-red-dead-onlinedde746ae06d964de8cfe361c04230376",
          "stepIconcamp-function": "rockstargames-sites-red-dead-onlinef5648f9ef8fd0b5dab9dd162e955f30c",
          "stepIconcamp-item": "rockstargames-sites-red-dead-onlinec2b48f9cec52080c94c06030d2e6384a",
          "stepIconcamp-main": "rockstargames-sites-red-dead-onlinebf3d20becfafe1b65e04909b0e7f4e18",
          "stepIconcamp-other": "rockstargames-sites-red-dead-onlinec73d9b3e62ba1d8978cc11b3f6f4b63f",
          "stepIconcharacter-ability": "rockstargames-sites-red-dead-onlineea6cdf8bd9c3c40638213ad13ab03976",
          "stepIconcharacter-clothing": "rockstargames-sites-red-dead-onlineffa2f37d23d90bee1f53a3b4542d3f1e",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-red-dead-onlinefb9d9b31972f3cf06b24dcd241d94cca",
          "stepIconcharacter-creator": "rockstargames-sites-red-dead-onlinef678e94aec49f395049b3587908f836c",
          "stepIconcharacter-emote": "rockstargames-sites-red-dead-onlinecf18c382fd6df1c51cb589332427cfb3",
          "stepIconcharacter-main": "rockstargames-sites-red-dead-onlinef0260f18060c6e96640b27e6cf851850",
          "stepIconcharacter-other": "rockstargames-sites-red-dead-onlinea5dd996a50e86e8b5ba056801bb2f1ea",
          stepIconcheater: "rockstargames-sites-red-dead-onlinee9aec1e44d6e66bef96ed0f052b39200",
          "stepIconcommunity-events": "rockstargames-sites-red-dead-onlinea41a910c09fe47362ff949ad35f07dcc",
          stepIcongameplay: "rockstargames-sites-red-dead-onlinecb8b7ecdcf5f5c25cb01a32157e44929",
          "stepIcongameplay-main": "rockstargames-sites-red-dead-onlinee21767034c45936ce182d6d32e64eb4a",
          "stepIcongeneric-technical": "rockstargames-sites-red-dead-onlinec02aca39e34f0b24cf68d938daf8f56a",
          "stepIcongs-store": "rockstargames-sites-red-dead-onlinebc94b9ece865e2e6e93325f782428de9",
          "stepIcongta-rank-progression": "rockstargames-sites-red-dead-onlinebcffec2f62cb18453a68a9d3f5338b60",
          stepIcongtaplus: "rockstargames-sites-red-dead-onlinef0792205d3a2bc0175c03643ff2fa790",
          "stepIconhorse-breed": "rockstargames-sites-red-dead-onlinea7df86a47c50e2649f493d0425a184cf",
          "stepIconhorse-main": "rockstargames-sites-red-dead-onlinea1401860c69980c4db2580c372bb9f23",
          "stepIconhorse-new": "rockstargames-sites-red-dead-onlinea8fbb915c03e699cbd844fb9ce20d38d",
          "stepIconhorse-other": "rockstargames-sites-red-dead-onlined996aa55e6945a058d09400bd13715f8",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-red-dead-onlineeeb5daa122c15929afd6d10975e8bcb3",
          "stepIconjob-creator": "rockstargames-sites-red-dead-onlineae672dd1fe780d3b6f18b52e3f3e2ca1",
          "stepIconmenus-ui": "rockstargames-sites-red-dead-onlinec35aee37fbe06edb4c59a52073408967",
          "stepIconother-main": "rockstargames-sites-red-dead-onlineedafdf48e7c8d64d66bb90e05df1e215",
          stepIconproperties: "rockstargames-sites-red-dead-onlineee38bdcb21c08692870e11ba400c373f",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-red-dead-onlinea754717f465acea44ba04bc6853ccc41",
          stepIconroles: "rockstargames-sites-red-dead-onlineea5b759ebe95532d36d128e2a7c66bdb",
          stepIconsuggestions: "rockstargames-sites-red-dead-onlinec6b5ad1f7ca729fc671c75dcc3186f3e",
          stepIconvehicles: "rockstargames-sites-red-dead-onlineca726647ee464cffbc00336018b88ad6",
          "stepIconweapon-customization": "rockstargames-sites-red-dead-onlined9e3f8a5a8147a5c0b600e1bd4fcdfa8",
          "stepIconweapon-main": "rockstargames-sites-red-dead-onlinec9b39c6f2fd4199fa462e02eedb67e23",
          "stepIconweapon-new": "rockstargames-sites-red-dead-onlineab0678cf2ccc90293aeb8dffc3d4ce80",
          "stepIconweapon-other": "rockstargames-sites-red-dead-onlinee05a05344ced03c0be6a699395aec8e9",
          stepIconweapons: "rockstargames-sites-red-dead-onlineb07410bcb9f7d843a491602c76df2ef3",
          stepMessage: "rockstargames-sites-red-dead-onlineccb8ae7398f53e45ded9dfe28c3993e6",
          steps: "rockstargames-sites-red-dead-onlinecc443abe2c14980fe797ae07c38a1551",
          stepsNext: "rockstargames-sites-red-dead-onlinee9cffe7e98f54fe7ef36b758e750661d",
          stepsPrevious: "rockstargames-sites-red-dead-onlineacf5035830b2f5fbecef86ce7004c918"
        },
        b = ({
          mutation: e,
          query: s,
          type: a,
          t: c
        }) => {
          const n = (0, o.useQueryParams)(),
            [r, i] = (0, t.useState)({}),
            {
              data: b
            } = (0, o.useQuery)(s, {
              variables: r,
              skip: !Object.entries(r).length
            });
          return (0, t.useEffect)(() => {
            i({
              step: n.get("step")
            })
          }, [n.get("step")]), (0, d.jsxs)("div", {
            className: f.feedback,
            children: [(0, d.jsx)("h1", {
              children: c("online-feedback-h1")
            }), (0, d.jsx)("div", {
              className: f.desc,
              dangerouslySetInnerHTML: {
                __html: c("online-feedback-desc")
              }
            }), b && (0, d.jsx)(l, {
              mutation: e,
              tree: b.tree,
              type: a,
              t: c
            })]
          })
        },
        l = ({
          mutation: e,
          tree: s,
          type: a,
          t
        }) => {
          const n = s.path.map(e => 1 === s.path.length && "_root" === e.feedback_type.name ? null : (0, d.jsx)(c.NavLink, {
              to: `?step=${e.id_hash}`,
              className: f[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash)),
            r = s.next.map(e => "_root" === e.feedback_type.name ? null : (0, d.jsxs)(c.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: f[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, d.jsx)("div", {
                className: f.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash));
          return (0, d.jsxs)("div", {
            className: [f.steps, f[a]].join(" "),
            children: [(0, d.jsx)("div", {
              className: f.stepsPrevious,
              children: n
            }), (0, d.jsx)("div", {
              className: f.stepsNext,
              children: r
            }), r.length ? "" : (0, d.jsx)(p, {
              feedbackStep: s.path[s.path.length - 1].id,
              mutation: e,
              t
            })]
          })
        },
        p = ({
          feedbackStep: e,
          mutation: s,
          t: a
        }) => {
          const {
            formatMessage: c
          } = (0, n.useIntl)(), {
            loggedIn: b
          } = (0, r.Wx)(), l = (0, t.useRef)(), [p, {
            data: g,
            error: m
          }] = (0, o.useMutation)(s);
          return b ? g?.submittal?.id ? (0, d.jsx)("div", {
            className: f.success,
            dangerouslySetInnerHTML: {
              __html: a("feedback.enter_success")
            }
          }) : (0, d.jsxs)("form", {
            onSubmit: s => (s => {
              s.preventDefault(), (() => {
                const s = {
                  content: l.current.value,
                  feedback_step: e
                };
                p({
                  variables: s
                })
              })()
            })(s),
            children: [(0, d.jsx)("textarea", {
              ref: l,
              maxLength: 500,
              rows: 6,
              placeholder: a("feedback.placeholder")
            }), m ? (0, d.jsx)("div", {
              className: f.error,
              children: String(m)
            }) : "", (0, d.jsx)("button", {
              type: "submit",
              children: a("SUBMIT")
            })]
          }) : c(i.gtao_feedback_login_cta_text)
        },
        g = ({
          mutation: e,
          query: s,
          type: a
        }) => (0, o.withTranslations)(b, "rdo" === a ? "rdr2" : a)({
          mutation: e,
          query: s,
          type: a
        })
    }
  }
]);