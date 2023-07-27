/*! For license information please see f709174dad4026f5d4df.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [765], {
    3970: (e, t, r) => {
      var a = r(4932),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var a, n = {},
          l = null,
          d = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, a) && !c.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: d,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    6160: (e, t, r) => {
      e.exports = r(3970)
    },
    1765: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => c
      });
      var a = r(8976),
        s = r(9542),
        n = r(9929);
      const i = {
        title: "a6afed00140449f9adb8c90b39b6855c758d",
        main: "a6afed00140449f9b71b10432f44c16d125f",
        breadcrumbs: "a6afed00140449f9c2bf1c67c354c461aa89"
      };
      var o = r(6160);
      const c = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: c = {},
          style: l = {},
          t: d,
          className: m = "",
          variant: _ = null
        } = e, f = {};
        void 0 !== l.toggleInvertSeparator && (f = {
          "--breadcrumb-separator-filter-invert": l.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const u = (0, n.useNewswirePost)(),
          h = {},
          p = h?.meta?.title ?? u?.title,
          g = h?.meta?.subtitle ?? u?.subtitle,
          x = g ? (0, o.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: g
          }) : "",
          w = [{
            text: d("Newswire"),
            to: "/newswire"
          }],
          {
            src: b
          } = (0, s.useImageParser)(c),
          v = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("time", {
              dateTime: u.created,
              children: u.created_formatted
            }), r ? (0, o.jsx)(a.DescriptionArea, {
              item: r
            }) : "", t]
          });
        u?.primary_tags?.length && w.push({
          text: u.primary_tags[0].name,
          to: `/newswire?tag_id=${u.primary_tags[0].id}`
        }), u?.secondary_tags?.length && w.push({
          text: u.secondary_tags[0].name,
          to: `/newswire?tag_id=${u.secondary_tags[0].id}`
        });
        const y = (0, o.jsx)("div", {
          className: i.breadcrumbs,
          children: w.map((e => (0, o.jsx)(a.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return b?.desktop && (l.background = `url(${b.desktop}) center/cover no-repeat`), (0, o.jsx)("div", {
          className: [m, i.title].join(" "),
          style: {
            ...l,
            ...f
          },
          children: "separated" === _ ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, o.jsx)("h1", {
                children: p
              })]
            }), (0, o.jsxs)("footer", {
              "data-context": "title",
              children: [x, v]
            })]
          }) : (0, o.jsxs)(o.Fragment, {
            children: [y, (0, o.jsxs)("div", {
              className: i.main,
              children: [(0, o.jsx)("h1", {
                children: p
              }), x]
            }), v]
          })
        })
      }))
    }
  }
]);