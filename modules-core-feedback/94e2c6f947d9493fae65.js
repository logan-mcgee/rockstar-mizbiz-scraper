/*! For license information please see 94e2c6f947d9493fae65.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || []).push([
  [208], {
    208: (e, t, c) => {
      c.r(t), c.d(t, {
        default: () => l
      });
      var a = c(822),
        s = c(976),
        n = c(711),
        r = c(859),
        o = c(929);
      const d = {
        feedback: "c7883b0d0aeedd50e353",
        stepMessage: "c34fb17f9cc7b940bd81",
        desc: "e52e6d78d3b02b369b9f",
        error: "b7e9f7e6a2f3a2029c9e",
        steps: "cccf64700b11dac5987a",
        gtao: "c5e37f81efbbd23ed6f7",
        stepIconbug: "dfef683a041d1cbe7527",
        stepIconcheater: "cfc6b027e89af2247e02",
        stepIconsuggestions: "a00dd4f7bc78b5793082",
        stepIcongameplay: "fabfe3659d7eea7064b5",
        "stepIconcommunity-events": "a277d775a6585e292d40",
        "stepIconmenus-ui": "e0cedf386f9955c1ff30",
        "stepIconin-game-events-bonuses-discounts": "bfe7c56ea258689b1984",
        "stepIconrockstar-editor-snapmatic": "d56a866b12f323fb0c4c",
        "stepIconjob-creator": "a68d43cbd2ec77962a68",
        stepIconweapons: "c86e56800bc8a5700be1",
        stepIconproperties: "fae45690332383def963",
        "stepIconcharacter-clothing-customization": "f88b175f669a2780a387",
        stepIconvehicles: "c175ab13f33f9f9d6c83",
        "stepIcongta-rank-progression": "c8e642ac166f669e85b5",
        stepIcongtaplus: "f4058b19c3911b99dc27",
        stepsNext: "cc568c01641bf69f1949",
        stepsPrevious: "bb70d767f0b4d80ca3c9",
        rdo: "df6c57d20b4eb111151f",
        "stepIconcamp-function": "b7016a65383bcfbc3571",
        "stepIconcamp-item": "a9eae835e0f576550a12",
        "stepIconcamp-main": "b2aedadc0ba5cb9b1188",
        "stepIconcamp-other": "d7dd15b155e194e882f1",
        "stepIconcharacter-ability": "ce7caf868bf8d385924f",
        "stepIconcharacter-clothing": "bdbe0047a8b26485fc86",
        "stepIconcharacter-creator": "a5d9a6a7b8e904d75ef6",
        "stepIconcharacter-emote": "ea2f6731e4c15b6b8f99",
        "stepIconcharacter-main": "f414a19f3924821a9ddb",
        "stepIconcharacter-other": "e21923453df00c318b9e",
        "stepIcongameplay-main": "a42af501696fa1732c25",
        "stepIcongeneric-technical": "fe212b69a8fa0c5315ca",
        "stepIcongs-store": "e54a67ad0896b101913b",
        "stepIconhorse-breed": "ef0fd5ca8e146d911db7",
        "stepIconhorse-main": "b5507bcc346daf85cd0d",
        "stepIconhorse-new": "c74e6af30879cd133b7c",
        "stepIconhorse-other": "e5f876b6bbdf842514e2",
        "stepIconother-main": "f82f857a5f4f7dfe0b25",
        "stepIconweapon-customization": "efc188b58ea907a5dc20",
        "stepIconweapon-main": "a8ac61c47c839d38c171",
        "stepIconweapon-new": "df754e315c1d0c950b59",
        "stepIconweapon-other": "e14d990b92783f081ccb",
        stepIcon_root: "fd485c5cc5f8ccbb6fae",
        stepIconroles: "c7213488ff2a969fef4e"
      };
      var f = c(322);
      const p = e => {
          let {
            mutation: t,
            query: c,
            type: s,
            t: n
          } = e;
          const p = (0, o.useQueryParams)(),
            [i, l] = (0, a.useState)({}),
            {
              data: u
            } = (0, r.useQuery)(c, {
              variables: i,
              skip: !Object.entries(i).length
            });
          return (0, a.useEffect)((() => {
            l({
              step: p.get("step")
            })
          }), [p.get("step")]), (0, f.jsxs)("div", {
            className: d.feedback,
            children: [(0, f.jsx)("h1", {
              children: n("online-feedback-h1")
            }), (0, f.jsx)("div", {
              className: d.desc,
              dangerouslySetInnerHTML: {
                __html: n("online-feedback-desc")
              }
            }), u && (0, f.jsx)(b, {
              mutation: t,
              tree: u.tree,
              type: s,
              t: n
            })]
          })
        },
        b = e => {
          let {
            mutation: t,
            tree: c,
            type: a,
            t: n
          } = e;
          const r = c.path.map((e => 1 === c.path.length && "_root" === e.feedback_type.name ? null : (0, f.jsx)(s.A, {
              to: `?step=${e.id_hash}`,
              className: d[`stepIcon${e.feedback_type.name}`],
              children: e.feedback_type.title
            }, e.id_hash))),
            o = c.next.map((e => "_root" === e.feedback_type.name ? null : (0, f.jsxs)(s.A, {
              target: e?.feedback_type?.href ? "_blank" : "_self",
              className: d[`stepIcon${e.feedback_type.name}`],
              to: e?.feedback_type?.href ? e.feedback_type.href : `?step=${e.id_hash}`,
              children: [e.feedback_type.title, e.message ? (0, f.jsx)("div", {
                className: d.stepMessage,
                dangerouslySetInnerHTML: {
                  __html: e.message
                }
              }) : ""]
            }, e.id_hash)));
          return (0, f.jsxs)("div", {
            className: [d.steps, d[a]].join(" "),
            children: [(0, f.jsx)("div", {
              className: d.stepsPrevious,
              children: r
            }), (0, f.jsx)("div", {
              className: d.stepsNext,
              children: o
            }), o.length ? "" : (0, f.jsx)(i, {
              feedbackStep: c.path[c.path.length - 1].id,
              mutation: t,
              t: n
            })]
          })
        },
        i = e => {
          let {
            feedbackStep: t,
            mutation: c,
            t: s
          } = e;
          const {
            data: o
          } = (0, n.useRockstarUser)(), p = (0, a.useRef)(), [b, {
            data: i,
            error: l
          }] = (0, r.useMutation)(c);
          return o && !1 !== o?.user?.logged_in ? i?.submittal?.id ? (0, f.jsx)("div", {
            className: d.success,
            dangerouslySetInnerHTML: {
              __html: s("feedback.enter_success")
            }
          }) : (0, f.jsxs)("form", {
            onSubmit: e => (e => {
              e.preventDefault(), (() => {
                const e = {
                  content: p.current.value,
                  feedback_step: t
                };
                b({
                  variables: e
                })
              })()
            })(e),
            children: [(0, f.jsx)("textarea", {
              ref: p,
              maxLength: 500,
              rows: 6,
              placeholder: s("feedback.placeholder")
            }), l ? (0, f.jsx)("div", {
              className: d.error,
              children: String(l)
            }) : "", (0, f.jsx)("button", {
              type: "submit",
              children: s("SUBMIT")
            })]
          }) : s("online-feedback-signin-0").replace("%s", s("signin-0"))
        },
        l = e => {
          let {
            mutation: t,
            query: c,
            type: a
          } = e;
          return (0, o.withTranslations)(p, "rdo" === a ? "rdr2" : a)({
            mutation: t,
            query: c,
            type: a
          })
        }
    },
    652: (e, t, c) => {
      var a = c(822),
        s = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, c) {
        var a, d = {},
          f = null,
          p = null;
        for (a in void 0 !== c && (f = "" + c), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (p = t.ref), t) n.call(t, a) && !o.hasOwnProperty(a) && (d[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === d[a] && (d[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: f,
          ref: p,
          props: d,
          _owner: r.current
        }
      }
      t.jsx = d, t.jsxs = d
    },
    322: (e, t, c) => {
      e.exports = c(652)
    }
  }
]);