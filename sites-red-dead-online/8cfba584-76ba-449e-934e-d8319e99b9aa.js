! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8cfba584-76ba-449e-934e-d8319e99b9aa", e._sentryDebugIdIdentifier = "sentry-dbid-8cfba584-76ba-449e-934e-d8319e99b9aa")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [912, 8531], {
    10912: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => k
      });
      var t = s(62229),
        d = s(9623),
        c = s(81788),
        r = s(57895),
        n = s(95966);
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
      var l = s(25854);
      const f = e => {
          let {
            mutation: a,
            query: s,
            type: d,
            t: c
          } = e;
          const r = (0, n.useQueryParams)(),
            [o, f] = (0, t.useState)({}),
            {
              data: m
            } = (0, n.useQuery)(s, {
              variables: o,
              skip: !Object.entries(o).length
            });
          return (0, t.useEffect)((() => {
            f({
              step: r.get("step")
            })
          }), [r.get("step")]), (0, l.jsxs)("div", {
            className: i.feedback,
            children: [(0, l.jsx)("h1", {
              children: c("online-feedback-h1")
            }), (0, l.jsx)("div", {
              className: i.desc,
              dangerouslySetInnerHTML: {
                __html: c("online-feedback-desc")
              }
            }), m && (0, l.jsx)(b, {
              mutation: a,
              tree: m.tree,
              type: d,
              t: c
            })]
          })
        },
        b = e => {
          let {
            mutation: a,
            tree: s,
            type: t,
            t: c
          } = e;
          const r = s.path.map((e => 1 === s.path.length && "_root" === e.feedback_type.name ? null : (0, l.jsx)(d.NavLink, {
              to: `?step=${e.id_hash}`,
              className: i[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            n = s.next.map((e => "_root" === e.feedback_type.name ? null : (0, l.jsxs)(d.NavLink, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: i[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, l.jsx)("div", {
                className: i.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, l.jsxs)("div", {
            className: [i.steps, i[t]].join(" "),
            children: [(0, l.jsx)("div", {
              className: i.stepsPrevious,
              children: r
            }), (0, l.jsx)("div", {
              className: i.stepsNext,
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
            formatMessage: f
          } = (0, c.useIntl)(), {
            loggedIn: b
          } = (0, r.Wx)(), m = (0, t.useRef)(), [k, {
            data: p,
            error: g
          }] = (0, n.useMutation)(s);
          return b ? p?.submittal?.id ? (0, l.jsx)("div", {
            className: i.success,
            dangerouslySetInnerHTML: {
              __html: d("feedback.enter_success")
            }
          }) : (0, l.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: m.current.value,
                  feedback_step: a
                };
                k({
                  variables: e
                })
              })()
            })(e),
            children: [(0, l.jsx)("textarea", {
              ref: m,
              maxLength: 500,
              rows: 6,
              placeholder: d("feedback.placeholder")
            }), g ? (0, l.jsx)("div", {
              className: i.error,
              children: String(g)
            }) : "", (0, l.jsx)("button", {
              type: "submit",
              children: d("SUBMIT")
            })]
          }) : f(o.gtao_feedback_login_cta_text)
        },
        k = e => {
          let {
            mutation: a,
            query: s,
            type: t
          } = e;
          return (0, n.withTranslations)(f, "rdo" === t ? "rdr2" : t)({
            mutation: a,
            query: s,
            type: t
          })
        }
    },
    57895: (e, a, s) => {
      s.d(a, {
        h: () => n,
        Wx: () => l
      });
      var t = s(62229),
        d = s(95966);
      s(98397), s(25854);
      const c = (0, d.setContextItem)({
          context: (0, t.createContext)(void 0),
          key: "gtmContext22"
        }),
        r = {
          track: () => null
        },
        n = () => (0, t.useContext)(c) ?? r;
      (0, d.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, d.makeVar)((0, d.webSettingsReactive)()?.currentCharId)
      }), (0, d.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, d.makeVar)(null)
      }), s(93830), s(4895), s(30763);
      const o = {},
        i = (0, d.setContextItem)({
          context: (0, t.createContext)(o),
          key: "userContext"
        }),
        l = () => (0, t.useContext)(i)
    }
  }
]);