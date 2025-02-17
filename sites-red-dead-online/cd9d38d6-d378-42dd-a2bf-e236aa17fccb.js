! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cd9d38d6-d378-42dd-a2bf-e236aa17fccb", e._sentryDebugIdIdentifier = "sentry-dbid-cd9d38d6-d378-42dd-a2bf-e236aa17fccb")
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
  [6594], {
    94213: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => g
      });
      var d = s(62229),
        t = s(9623),
        c = s(81788),
        n = s(97652),
        r = s(95966);
      const o = (0, c.defineMessages)({
          gtao_feedback_login_cta_text: {
            id: "gtao_feedback_login_cta_text",
            defaultMessage: "Sign in to your Rockstar Games Account to submit feedback."
          }
        }),
        i = {
          feedback: "rockstargames-sites-red-dead-onlinec386be0dcd753031c7c8370a05206972",
          stepMessage: "rockstargames-sites-red-dead-onlineccb8ae7398f53e45ded9dfe28c3993e6",
          desc: "rockstargames-sites-red-dead-onlined72e70db4d8f2e2475325b0ec8c822cd",
          error: "rockstargames-sites-red-dead-onlinee8b9707f598c854597530de876d5c0ef",
          steps: "rockstargames-sites-red-dead-onlinecc443abe2c14980fe797ae07c38a1551",
          gtao: "rockstargames-sites-red-dead-onlineddc7e36204db6670d800fe763b791f39",
          stepIconbug: "rockstargames-sites-red-dead-onlinedde746ae06d964de8cfe361c04230376",
          stepIconcheater: "rockstargames-sites-red-dead-onlinee9aec1e44d6e66bef96ed0f052b39200",
          stepIconsuggestions: "rockstargames-sites-red-dead-onlinec6b5ad1f7ca729fc671c75dcc3186f3e",
          stepIcongameplay: "rockstargames-sites-red-dead-onlinecb8b7ecdcf5f5c25cb01a32157e44929",
          "stepIconcommunity-events": "rockstargames-sites-red-dead-onlinea41a910c09fe47362ff949ad35f07dcc",
          "stepIconmenus-ui": "rockstargames-sites-red-dead-onlinec35aee37fbe06edb4c59a52073408967",
          "stepIconin-game-events-bonuses-discounts": "rockstargames-sites-red-dead-onlineeeb5daa122c15929afd6d10975e8bcb3",
          "stepIconrockstar-editor-snapmatic": "rockstargames-sites-red-dead-onlinea754717f465acea44ba04bc6853ccc41",
          "stepIconjob-creator": "rockstargames-sites-red-dead-onlineae672dd1fe780d3b6f18b52e3f3e2ca1",
          stepIconweapons: "rockstargames-sites-red-dead-onlineb07410bcb9f7d843a491602c76df2ef3",
          stepIconproperties: "rockstargames-sites-red-dead-onlineee38bdcb21c08692870e11ba400c373f",
          "stepIconcharacter-clothing-customization": "rockstargames-sites-red-dead-onlinefb9d9b31972f3cf06b24dcd241d94cca",
          stepIconvehicles: "rockstargames-sites-red-dead-onlineca726647ee464cffbc00336018b88ad6",
          "stepIcongta-rank-progression": "rockstargames-sites-red-dead-onlinebcffec2f62cb18453a68a9d3f5338b60",
          stepIcongtaplus: "rockstargames-sites-red-dead-onlinef0792205d3a2bc0175c03643ff2fa790",
          stepsNext: "rockstargames-sites-red-dead-onlinee9cffe7e98f54fe7ef36b758e750661d",
          stepsPrevious: "rockstargames-sites-red-dead-onlineacf5035830b2f5fbecef86ce7004c918",
          rdo: "rockstargames-sites-red-dead-onlineb7fdd152099e67cc826b3fa2a9bfe3a4",
          "stepIconcamp-function": "rockstargames-sites-red-dead-onlinef5648f9ef8fd0b5dab9dd162e955f30c",
          "stepIconcamp-item": "rockstargames-sites-red-dead-onlinec2b48f9cec52080c94c06030d2e6384a",
          "stepIconcamp-main": "rockstargames-sites-red-dead-onlinebf3d20becfafe1b65e04909b0e7f4e18",
          "stepIconcamp-other": "rockstargames-sites-red-dead-onlinec73d9b3e62ba1d8978cc11b3f6f4b63f",
          "stepIconcharacter-ability": "rockstargames-sites-red-dead-onlineea6cdf8bd9c3c40638213ad13ab03976",
          "stepIconcharacter-clothing": "rockstargames-sites-red-dead-onlineffa2f37d23d90bee1f53a3b4542d3f1e",
          "stepIconcharacter-creator": "rockstargames-sites-red-dead-onlinef678e94aec49f395049b3587908f836c",
          "stepIconcharacter-emote": "rockstargames-sites-red-dead-onlinecf18c382fd6df1c51cb589332427cfb3",
          "stepIconcharacter-main": "rockstargames-sites-red-dead-onlinef0260f18060c6e96640b27e6cf851850",
          "stepIconcharacter-other": "rockstargames-sites-red-dead-onlinea5dd996a50e86e8b5ba056801bb2f1ea",
          "stepIcongameplay-main": "rockstargames-sites-red-dead-onlinee21767034c45936ce182d6d32e64eb4a",
          "stepIcongeneric-technical": "rockstargames-sites-red-dead-onlinec02aca39e34f0b24cf68d938daf8f56a",
          "stepIcongs-store": "rockstargames-sites-red-dead-onlinebc94b9ece865e2e6e93325f782428de9",
          "stepIconhorse-breed": "rockstargames-sites-red-dead-onlinea7df86a47c50e2649f493d0425a184cf",
          "stepIconhorse-main": "rockstargames-sites-red-dead-onlinea1401860c69980c4db2580c372bb9f23",
          "stepIconhorse-new": "rockstargames-sites-red-dead-onlinea8fbb915c03e699cbd844fb9ce20d38d",
          "stepIconhorse-other": "rockstargames-sites-red-dead-onlined996aa55e6945a058d09400bd13715f8",
          "stepIconother-main": "rockstargames-sites-red-dead-onlineedafdf48e7c8d64d66bb90e05df1e215",
          "stepIconweapon-customization": "rockstargames-sites-red-dead-onlined9e3f8a5a8147a5c0b600e1bd4fcdfa8",
          "stepIconweapon-main": "rockstargames-sites-red-dead-onlinec9b39c6f2fd4199fa462e02eedb67e23",
          "stepIconweapon-new": "rockstargames-sites-red-dead-onlineab0678cf2ccc90293aeb8dffc3d4ce80",
          "stepIconweapon-other": "rockstargames-sites-red-dead-onlinee05a05344ced03c0be6a699395aec8e9",
          stepIcon_root: "rockstargames-sites-red-dead-onlinee99576cbb21b9ebb786c52d979970d63",
          stepIconroles: "rockstargames-sites-red-dead-onlineea5b759ebe95532d36d128e2a7c66bdb"
        };
      var f = s(91029);
      const b = e => {
          let {
            mutation: a,
            query: s,
            type: t,
            t: c
          } = e;
          const n = (0, r.useQueryParams)(),
            [o, b] = (0, d.useState)({}),
            {
              data: p
            } = (0, r.useQuery)(s, {
              variables: o,
              skip: !Object.entries(o).length
            });
          return (0, d.useEffect)((() => {
            b({
              step: n.get("step")
            })
          }), [n.get("step")]), (0, f.jsxs)("div", {
            className: i.feedback,
            children: [(0, f.jsx)("h1", {
              children: c("online-feedback-h1")
            }), (0, f.jsx)("div", {
              className: i.desc,
              dangerouslySetInnerHTML: {
                __html: c("online-feedback-desc")
              }
            }), p && (0, f.jsx)(l, {
              mutation: a,
              tree: p.tree,
              type: t,
              t: c
            })]
          })
        },
        l = e => {
          let {
            mutation: a,
            tree: s,
            type: d,
            t: c
          } = e;
          const n = s.path.map((e => 1 === s.path.length && "_root" === e.feedback_type.name ? null : (0, f.jsx)(t.NavLink, {
              to: `?step=${e.id_hash}`,
              className: i[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            r = s.next.map((e => "_root" === e.feedback_type.name ? null : (0, f.jsxs)(t.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: i[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, f.jsx)("div", {
                className: i.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, f.jsxs)("div", {
            className: [i.steps, i[d]].join(" "),
            children: [(0, f.jsx)("div", {
              className: i.stepsPrevious,
              children: n
            }), (0, f.jsx)("div", {
              className: i.stepsNext,
              children: r
            }), r.length ? "" : (0, f.jsx)(p, {
              feedbackStep: s.path[s.path.length - 1].id,
              mutation: a,
              t: c
            })]
          })
        },
        p = e => {
          let {
            feedbackStep: a,
            mutation: s,
            t
          } = e;
          const {
            formatMessage: b
          } = (0, c.useIntl)(), {
            loggedIn: l
          } = (0, n.Wx)(), p = (0, d.useRef)(), [g, {
            data: m,
            error: k
          }] = (0, r.useMutation)(s);
          return l ? m?.submittal?.id ? (0, f.jsx)("div", {
            className: i.success,
            dangerouslySetInnerHTML: {
              __html: t("feedback.enter_success")
            }
          }) : (0, f.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: p.current.value,
                  feedback_step: a
                };
                g({
                  variables: e
                })
              })()
            })(e),
            children: [(0, f.jsx)("textarea", {
              ref: p,
              maxLength: 500,
              rows: 6,
              placeholder: t("feedback.placeholder")
            }), k ? (0, f.jsx)("div", {
              className: i.error,
              children: String(k)
            }) : "", (0, f.jsx)("button", {
              type: "submit",
              children: t("SUBMIT")
            })]
          }) : b(o.gtao_feedback_login_cta_text)
        },
        g = e => {
          let {
            mutation: a,
            query: s,
            type: d
          } = e;
          return (0, r.withTranslations)(b, "rdo" === d ? "rdr2" : d)({
            mutation: a,
            query: s,
            type: d
          })
        }
    }
  }
]);