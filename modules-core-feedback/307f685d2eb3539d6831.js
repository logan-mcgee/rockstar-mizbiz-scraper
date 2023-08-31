/*! For license information please see 307f685d2eb3539d6831.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || []).push([
  [878], {
    878: (e, c, a) => {
      a.r(c), a.d(c, {
        default: () => i
      });
      var t = a(932),
        f = a(976),
        s = a(711),
        d = a(859),
        n = a(929);
      const r = {
        feedback: "_4f3dcf67ea4367cec7883b0d0aeedd50e353",
        stepMessage: "_4f3dcf67ea4367cec34fb17f9cc7b940bd81",
        desc: "_4f3dcf67ea4367cee52e6d78d3b02b369b9f",
        error: "_4f3dcf67ea4367ceb7e9f7e6a2f3a2029c9e",
        steps: "_4f3dcf67ea4367cecccf64700b11dac5987a",
        gtao: "_4f3dcf67ea4367cec5e37f81efbbd23ed6f7",
        stepIconbug: "_4f3dcf67ea4367cedfef683a041d1cbe7527",
        stepIconcheater: "_4f3dcf67ea4367cecfc6b027e89af2247e02",
        stepIconsuggestions: "_4f3dcf67ea4367cea00dd4f7bc78b5793082",
        stepIcongameplay: "_4f3dcf67ea4367cefabfe3659d7eea7064b5",
        "stepIconcommunity-events": "_4f3dcf67ea4367cea277d775a6585e292d40",
        "stepIconmenus-ui": "_4f3dcf67ea4367cee0cedf386f9955c1ff30",
        "stepIconin-game-events-bonuses-discounts": "_4f3dcf67ea4367cebfe7c56ea258689b1984",
        "stepIconrockstar-editor-snapmatic": "_4f3dcf67ea4367ced56a866b12f323fb0c4c",
        "stepIconjob-creator": "_4f3dcf67ea4367cea68d43cbd2ec77962a68",
        stepIconweapons: "_4f3dcf67ea4367cec86e56800bc8a5700be1",
        stepIconproperties: "_4f3dcf67ea4367cefae45690332383def963",
        "stepIconcharacter-clothing-customization": "_4f3dcf67ea4367cef88b175f669a2780a387",
        stepIconvehicles: "_4f3dcf67ea4367cec175ab13f33f9f9d6c83",
        "stepIcongta-rank-progression": "_4f3dcf67ea4367cec8e642ac166f669e85b5",
        stepIcongtaplus: "_4f3dcf67ea4367cef4058b19c3911b99dc27",
        stepsNext: "_4f3dcf67ea4367cecc568c01641bf69f1949",
        stepsPrevious: "_4f3dcf67ea4367cebb70d767f0b4d80ca3c9",
        rdo: "_4f3dcf67ea4367cedf6c57d20b4eb111151f",
        "stepIconcamp-function": "_4f3dcf67ea4367ceb7016a65383bcfbc3571",
        "stepIconcamp-item": "_4f3dcf67ea4367cea9eae835e0f576550a12",
        "stepIconcamp-main": "_4f3dcf67ea4367ceb2aedadc0ba5cb9b1188",
        "stepIconcamp-other": "_4f3dcf67ea4367ced7dd15b155e194e882f1",
        "stepIconcharacter-ability": "_4f3dcf67ea4367cece7caf868bf8d385924f",
        "stepIconcharacter-clothing": "_4f3dcf67ea4367cebdbe0047a8b26485fc86",
        "stepIconcharacter-creator": "_4f3dcf67ea4367cea5d9a6a7b8e904d75ef6",
        "stepIconcharacter-emote": "_4f3dcf67ea4367ceea2f6731e4c15b6b8f99",
        "stepIconcharacter-main": "_4f3dcf67ea4367cef414a19f3924821a9ddb",
        "stepIconcharacter-other": "_4f3dcf67ea4367cee21923453df00c318b9e",
        "stepIcongameplay-main": "_4f3dcf67ea4367cea42af501696fa1732c25",
        "stepIcongeneric-technical": "_4f3dcf67ea4367cefe212b69a8fa0c5315ca",
        "stepIcongs-store": "_4f3dcf67ea4367cee54a67ad0896b101913b",
        "stepIconhorse-breed": "_4f3dcf67ea4367ceef0fd5ca8e146d911db7",
        "stepIconhorse-main": "_4f3dcf67ea4367ceb5507bcc346daf85cd0d",
        "stepIconhorse-new": "_4f3dcf67ea4367cec74e6af30879cd133b7c",
        "stepIconhorse-other": "_4f3dcf67ea4367cee5f876b6bbdf842514e2",
        "stepIconother-main": "_4f3dcf67ea4367cef82f857a5f4f7dfe0b25",
        "stepIconweapon-customization": "_4f3dcf67ea4367ceefc188b58ea907a5dc20",
        "stepIconweapon-main": "_4f3dcf67ea4367cea8ac61c47c839d38c171",
        "stepIconweapon-new": "_4f3dcf67ea4367cedf754e315c1d0c950b59",
        "stepIconweapon-other": "_4f3dcf67ea4367cee14d990b92783f081ccb",
        stepIcon_root: "_4f3dcf67ea4367cefd485c5cc5f8ccbb6fae",
        stepIconroles: "_4f3dcf67ea4367cec7213488ff2a969fef4e"
      };
      var o = a(160);
      const p = e => {
          let {
            mutation: c,
            query: a,
            type: f,
            t: s
          } = e;
          const p = (0, n.useQueryParams)(),
            [_, i] = (0, t.useState)({}),
            {
              data: l
            } = (0, d.useQuery)(a, {
              variables: _,
              skip: !Object.entries(_).length
            });
          return (0, t.useEffect)((() => {
            i({
              step: p.get("step")
            })
          }), [p.get("step")]), (0, o.jsxs)("div", {
            className: r.feedback,
            children: [(0, o.jsx)("h1", {
              children: s("online-feedback-h1")
            }), (0, o.jsx)("div", {
              className: r.desc,
              dangerouslySetInnerHTML: {
                __html: s("online-feedback-desc")
              }
            }), l && (0, o.jsx)(b, {
              mutation: c,
              tree: l.tree,
              type: f,
              t: s
            })]
          })
        },
        b = e => {
          let {
            mutation: c,
            tree: a,
            type: t,
            t: s
          } = e;
          const d = a.path.map((e => 1 === a.path.length && "_root" === e.feedback_type.name ? null : (0, o.jsx)(f.A, {
              to: `?step=${e.id_hash}`,
              className: r[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            n = a.next.map((e => "_root" === e.feedback_type.name ? null : (0, o.jsxs)(f.A, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: r[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, o.jsx)("div", {
                className: r.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, o.jsxs)("div", {
            className: [r.steps, r[t]].join(" "),
            children: [(0, o.jsx)("div", {
              className: r.stepsPrevious,
              children: d
            }), (0, o.jsx)("div", {
              className: r.stepsNext,
              children: n
            }), n.length ? "" : (0, o.jsx)(_, {
              feedbackStep: a.path[a.path.length - 1].id,
              mutation: c,
              t: s
            })]
          })
        },
        _ = e => {
          let {
            feedbackStep: c,
            mutation: a,
            t: f
          } = e;
          const {
            data: n
          } = (0, s.useRockstarUser)(), p = (0, t.useRef)(), [b, {
            data: _,
            error: i
          }] = (0, d.useMutation)(a);
          return n && !1 !== n?.user?.logged_in ? _?.submittal?.id ? (0, o.jsx)("div", {
            className: r.success,
            dangerouslySetInnerHTML: {
              __html: f("feedback.enter_success")
            }
          }) : (0, o.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: p.current.value,
                  feedback_step: c
                };
                b({
                  variables: e
                })
              })()
            })(e),
            children: [(0, o.jsx)("textarea", {
              ref: p,
              maxLength: 500,
              rows: 6,
              placeholder: f("feedback.placeholder")
            }), i ? (0, o.jsx)("div", {
              className: r.error,
              children: String(i)
            }) : "", (0, o.jsx)("button", {
              type: "submit",
              children: f("SUBMIT")
            })]
          }) : f("online-feedback-signin-0").replace("%s", f("signin-0"))
        },
        i = e => {
          let {
            mutation: c,
            query: a,
            type: t
          } = e;
          return (0, n.withTranslations)(p, "rdo" === t ? "rdr2" : t)({
            mutation: c,
            query: a,
            type: t
          })
        }
    },
    970: (e, c, a) => {
      var t = a(932),
        f = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        n = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, c, a) {
        var t, r = {},
          o = null,
          p = null;
        for (t in void 0 !== a && (o = "" + a), void 0 !== c.key && (o = "" + c.key), void 0 !== c.ref && (p = c.ref), c) s.call(c, t) && !n.hasOwnProperty(t) && (r[t] = c[t]);
        if (e && e.defaultProps)
          for (t in c = e.defaultProps) void 0 === r[t] && (r[t] = c[t]);
        return {
          $$typeof: f,
          type: e,
          key: o,
          ref: p,
          props: r,
          _owner: d.current
        }
      }
      c.jsx = r, c.jsxs = r
    },
    160: (e, c, a) => {
      e.exports = a(970)
    }
  }
]);