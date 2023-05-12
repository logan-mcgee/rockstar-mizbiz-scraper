/*! For license information please see 921b659d2be1e1245911.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_circolocorecords = self.webpackChunk_rockstargames_sites_circolocorecords || []).push([
  [258, 479], {
    4258: (e, t, l) => {
      l.r(t), l.d(t, {
        FormMetaField: () => c,
        MetaFields: () => r,
        componentsForTinaParser: () => x,
        formTemplates: () => g,
        tinaBlockTemplates: () => k
      });
      var a = l(559),
        o = l(4479);
      const n = [{
        value: null,
        label: "-- Select Type of CLR Page This is --"
      }];
      Object.keys(o.types).map((e => {
        n.push({
          value: o.types[e].value,
          label: o.types[e].name
        })
      }));
      const r = () => [{
          name: "title",
          label: "Title",
          component: "text"
        }, {
          name: "subtitle",
          label: "Subtitle",
          component: "text"
        }, {
          name: "blurb",
          label: "Meta description",
          component: "textarea"
        }, {
          component: "select",
          name: "type",
          label: "Type",
          options: n
        }],
        s = {
          name: "images",
          component: "group",
          label: "Images for this item.",
          fields: [(e => {
            let {
              label: t,
              name: l
            } = {
              name: "card",
              label: "Card Image"
            };
            return {
              component: "group",
              label: t,
              name: l,
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                previewSrc: a.previewSrc,
                uploadDir: a.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                previewSrc: a.previewSrc,
                uploadDir: a.uploadDir
              }]
            }
          })()]
        },
        c = () => ({
          name: "meta",
          label: "Metadata",
          component: "group",
          description: "Title, subtitle, meta...",
          fields: [...r(), {
            name: "created",
            label: "Post Date",
            component: "date",
            dateFormat: "YYYY-MM-DD",
            timeFormat: "HH:mm:ss"
          }, s]
        });
      var i = l(8976),
        d = l(4224),
        m = l.n(d),
        b = l(9542);
      const u = {
        btn: "ea0ec3a6a22a07263525",
        text: "a2b8246d9331c8510ad2",
        medium: "e66576c42e8ccacfe69c",
        small: "c6ae2cbf9cbbb29c9004"
      };
      var p = l(9706);
      const f = e => {
          let {
            text: t,
            onClick: l,
            btnColor: a = "black",
            size: o,
            className: n
          } = e;
          const r = {
            color: "black" === a ? "#fff" : "#000",
            backgroundColor: "black" === a ? "transparent" : "#fff"
          };
          return (0, p.jsx)("button", {
            className: [u[o], u[n], u.btn].join(" "),
            onClick: l,
            style: r,
            type: "button",
            children: (0, p.jsx)("div", {
              className: u.text,
              children: t
            })
          })
        },
        x = {
          ...i,
          RockstarVideoPlayer: m(),
          clr: {
            Hero: e => {
              let {
                layout: t,
                title: l,
                subtitle: a,
                body: o,
                mobileImg: n = "",
                desktopImg: r = "",
                video: s = null,
                backgroundColor: c,
                buttons: d = {},
                style: u
              } = e;
              const x = {
                  oneCol: "eed263f2885de52aa695",
                  twoCol: "ed10144f7a2d4bc2539d"
                },
                g = d.button1 || {},
                h = d.button2 || {},
                y = {
                  "--background": c ?? "var(--black-200)",
                  "--mobile-image": `url(${(0,b.useGetCdnSource)(n)})` ?? 0,
                  "--desktop-image": `url(${(0,b.useGetCdnSource)(r)})` ?? 0
                };
              return (0, p.jsx)("section", {
                className: "f93d8050c96c297d55c8",
                style: {
                  ...y,
                  ...u
                },
                children: (0, p.jsxs)(i.Grid, {
                  className: x[t],
                  children: [(0, p.jsx)("div", {
                    className: "c532bb32973c988d7995",
                    children: r ? (0, p.jsxs)("div", {
                      className: "f267f6ef1f6cc9ba549f",
                      children: [(0, p.jsx)("img", {
                        alt: "art",
                        className: "f796dbd720eb774457db"
                      }), (0, p.jsx)("img", {
                        alt: "art",
                        className: "b4b0c570d0bd3dfa229a"
                      })]
                    }) : s && (0, p.jsx)("div", {
                      className: "f17afd9c3748ddddcb3b",
                      children: (0, p.jsx)(m(), {
                        context: "embed",
                        autoplay: !1,
                        id: s.id,
                        hero: !0
                      })
                    })
                  }), "twoCol" === t && (0, p.jsxs)("div", {
                    className: "c2f56b053694bb351ea1",
                    children: [(0, p.jsxs)("div", {
                      className: "abb2117a65c9f97feead",
                      children: [(0, p.jsx)("h2", {
                        children: l
                      }), (0, p.jsx)("h4", {
                        children: a
                      }), (0, p.jsx)("p", {
                        className: "f5213190b84727d0dca4",
                        children: o
                      })]
                    }), (g.text || h.text) && (0, p.jsxs)("div", {
                      className: "fef7924889170b0ecd1c",
                      children: [g.text && (0, p.jsx)(f, {
                        className: "heroBtn",
                        text: g.text,
                        size: "medium",
                        onClick: () => {},
                        btnColor: "white"
                      }), h.text && (0, p.jsx)(f, {
                        className: "heroBtn",
                        text: h.text,
                        btnColor: "black",
                        size: "medium",
                        onClick: () => {}
                      })]
                    })]
                  })]
                })
              })
            },
            NewsIntro: e => {
              let {
                created_formatted: t,
                title: l,
                subtitle: a
              } = e;
              return (0, p.jsxs)("div", {
                className: "eaa94e1cda1ccf2bd7dd",
                children: [(0, p.jsx)("h6", {
                  children: t
                }), (0, p.jsx)("h1", {
                  children: l
                }), (0, p.jsx)("h4", {
                  children: a
                })]
              })
            }
          },
          ImageWithBadge: i.ImageWithBadge,
          CalloutSection: i.CalloutSection
        },
        g = e => {
          switch (e) {
            case o.types.RELEASE.value:
              return {
                Grid: {
                  label: "CLR Root",
                  templates: {
                    "clr.Hero": null,
                    RockstarVideoPlayer: null
                  }
                }
              };
            case o.types.UPDATE.value:
              return {
                Grid: {
                  label: "CLR Root",
                  templates: {
                    "clr.NewsIntro": null,
                    "clr.Hero": null,
                    CalloutSection: null,
                    HTMLElement: null
                  }
                }
              };
            default:
              return []
          }
        };
      var h = l(6307),
        y = l(3616),
        C = l(3204),
        v = l.n(C);
      const k = {
        Hero: () => ({
          label: "CLR Hero",
          fields: [{
            name: "layout",
            label: "Hero Layout",
            description: "Are there two columns or one (img only)",
            component: "select",
            options: [{
              value: "",
              label: "-- Select a Type --"
            }, {
              value: "twoCol",
              label: "Two Columns"
            }, {
              value: "oneCol",
              label: "One Column (Full Img/Video)"
            }]
          }, {
            label: "Mobile Image (1:1 ratio)",
            name: "mobileImg",
            component: "image",
            clearable: !0,
            uploadDir: a.uploadDir,
            parse: a.parse,
            previewSrc: a.previewSrc
          }, {
            label: "Desktop Image (16:9 ratio)",
            name: "desktopImg",
            component: "image",
            clearable: !0,
            uploadDir: a.uploadDir,
            parse: a.parse,
            previewSrc: a.previewSrc
          }, (0, y.translatedField)({
            name: "title",
            label: "Title",
            description: "CLR Hero title text",
            component: "text"
          }), (0, y.translatedField)({
            name: "subtitle",
            label: "Subtitle",
            description: "CLR Hero subtitle text",
            component: "text"
          }), (0, y.translatedField)({
            name: "body",
            label: "Body Text",
            description: "CLR Hero body text",
            component: "text"
          }), {
            name: "video",
            label: "Video Source",
            component: "group",
            fields: v()().fields
          }, {
            name: "buttons",
            label: "Buttons (optional)",
            component: "group",
            fields: [{
              name: "button1",
              label: "Button 1 (optional)",
              component: "group",
              fields: [{
                name: "text",
                label: "Text",
                component: "text"
              }, {
                name: "url",
                label: "Url",
                component: "text"
              }]
            }, {
              name: "button2",
              label: "Button 2 (optional)",
              component: "group",
              fields: [{
                name: "text",
                label: "Text",
                component: "text"
              }, {
                name: "url",
                label: "Url",
                component: "text"
              }]
            }]
          }, (0, y.StyleField)({
            filter: "image"
          })],
          defaultItem: () => (0, y.defaultItemUnique)(),
          itemProps: e => (0, y.itemPropsWithKey)(e, {
            label: `${e?.[y.TINA_MEMOQ_PREFIX]?.title??"NEW"} [CLR Hero]`
          })
        }),
        ImageWithBadge: h.ImageWithBadge,
        NewsIntro: () => ({
          label: "CLR News Intro",
          defaultItem: () => (0, y.defaultItemUnique)(),
          itemProps: e => (0, y.itemPropsWithKey)(e, {
            label: `${e?.[y.TINA_MEMOQ_PREFIX]?.title??"NEW"} [CLR News Intro]`
          })
        }),
        CalloutSection: h.CalloutSection
      }
    },
    4479: (e, t, l) => {
      l.r(t), l.d(t, {
        faux: () => o,
        types: () => a
      });
      const a = {
          UPDATE: {
            name: "CLR Update",
            value: "clr-update"
          },
          RELEASE: {
            name: "CLR Release",
            value: "clr-release"
          }
        },
        o = 12
    },
    115: (e, t, l) => {
      var a = l(1853),
        o = Symbol.for("react.element"),
        n = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, l) {
        var a, c = {},
          i = null,
          d = null;
        for (a in void 0 !== l && (i = "" + l), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (d = t.ref), t) n.call(t, a) && !s.hasOwnProperty(a) && (c[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === c[a] && (c[a] = t[a]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: d,
          props: c,
          _owner: r.current
        }
      }
      t.jsx = c, t.jsxs = c
    },
    9706: (e, t, l) => {
      e.exports = l(115)
    }
  }
]);