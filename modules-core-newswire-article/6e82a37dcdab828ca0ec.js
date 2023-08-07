/*! For license information please see 6e82a37dcdab828ca0ec.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [765], {
    3970: (e, t, r) => {
      var s = r(4932),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var s, n = {},
          l = null,
          d = null;
        for (s in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, s) && !o.hasOwnProperty(s) && (n[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === n[s] && (n[s] = t[s]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: d,
          props: n,
          _owner: c.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    6160: (e, t, r) => {
      e.exports = r(3970)
    },
    1765: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => o
      });
      var s = r(8976),
        a = r(9542),
        n = r(9929);
      const i = {
        title: "_8961b235c4d9e842adb8c90b39b6855c758d",
        main: "_8961b235c4d9e842b71b10432f44c16d125f",
        breadcrumbs: "_8961b235c4d9e842c2bf1c67c354c461aa89"
      };
      var c = r(6160);
      const o = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: r,
          image: o = {},
          style: l = {},
          t: d,
          className: _ = "",
          variant: m = null
        } = e, u = {};
        void 0 !== l.toggleInvertSeparator && (u = {
          "--breadcrumb-separator-filter-invert": l.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const h = (0, n.useNewswirePost)(),
          p = {},
          b = p?.meta?.title ?? h?.title,
          f = p?.meta?.subtitle ?? h?.subtitle,
          g = f ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: f
          }) : "",
          x = [{
            text: d("Newswire"),
            to: "/newswire"
          }],
          {
            src: w
          } = (0, a.useImageParser)(o),
          v = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: h.created,
              children: h.created_formatted
            }), r ? (0, c.jsx)(s.DescriptionArea, {
              item: r
            }) : "", t]
          });
        h?.primary_tags?.length && x.push({
          text: h.primary_tags[0].name,
          to: `/newswire?tag_id=${h.primary_tags[0].id}`
        }), h?.secondary_tags?.length && x.push({
          text: h.secondary_tags[0].name,
          to: `/newswire?tag_id=${h.secondary_tags[0].id}`
        });
        const y = (0, c.jsx)("div", {
          className: i.breadcrumbs,
          children: x.map((e => (0, c.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return w?.desktop && (l.background = `url(${w.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [_, i.title].join(" "),
          style: {
            ...l,
            ...u
          },
          children: "separated" === m ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, c.jsx)("h1", {
                children: b
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [g, v]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [y, (0, c.jsxs)("div", {
              className: i.main,
              children: [(0, c.jsx)("h1", {
                children: b
              }), g]
            }), v]
          })
        })
      }))
    }
  }
]);