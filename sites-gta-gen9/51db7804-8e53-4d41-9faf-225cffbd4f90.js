! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "51db7804-8e53-4d41-9faf-225cffbd4f90", e._sentryDebugIdIdentifier = "sentry-dbid-51db7804-8e53-4d41-9faf-225cffbd4f90")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7898], {
    37964: (e, t, a) => {
      "use strict";
      a.d(t, {
        S: () => n
      });
      var r = a(62229);

      function n(e, t) {
        return a = t || null, n = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (o = (0, r.useState)((function() {
          return {
            value: a,
            callback: n,
            facade: {
              get current() {
                return o.value
              },
              set current(e) {
                var t = o.value;
                t !== e && (o.value = e, o.callback(e, t))
              }
            }
          }
        }))[0]).callback = n, o.facade;
        var a, n, o
      }
    },
    81402: (e, t, a) => {
      "use strict";
      a.d(t, {
        C: () => i,
        f: () => s
      });
      var r = a(63461);

      function n(e) {
        return e
      }

      function o(e, t) {
        void 0 === t && (t = n);
        var a = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return a.length ? a[a.length - 1] : e
          },
          useMedium: function(e) {
            var n = t(e, r);
            return a.push(n),
              function() {
                a = a.filter((function(e) {
                  return e !== n
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; a.length;) {
              var t = a;
              a = [], t.forEach(e)
            }
            a = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return a
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (a.length) {
              var n = a;
              a = [], n.forEach(e), t = a
            }
            var o = function() {
                var a = t;
                t = [], a.forEach(e)
              },
              i = function() {
                return Promise.resolve().then(o)
              };
            i(), a = {
              push: function(e) {
                t.push(e), i()
              },
              filter: function(e) {
                return t = t.filter(e), a
              }
            }
          }
        }
      }

      function i(e, t) {
        return void 0 === t && (t = n), o(e, t)
      }

      function s(e) {
        void 0 === e && (e = {});
        var t = o(null);
        return t.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    96106: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => p
      });
      var r = a(62229),
        n = a(22738),
        o = a(95966),
        i = a(2918),
        s = a(50828),
        c = a(47313),
        d = a(91029);
      const m = e => {
          let {
            className: t
          } = e;
          return (0, d.jsxs)("svg", {
            className: t,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        l = {
          pillBtn: "rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4",
          selected: "rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b",
          calloutContainer: "rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539",
          calloutSection: "rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f",
          calloutHeaders: "rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea",
          calloutHeaderMargins: "rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296",
          calloutHeader: "rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497",
          calloutSubheader: "rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a",
          calloutVoteForm: "rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8",
          voteButton: "rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0",
          upvote: "rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93",
          downvote: "rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b",
          active: "rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3",
          calloutButton: "rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a",
          calloutLink: "rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797",
          calloutLinkIcon: "rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e",
          actionBlock: "rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4",
          actionFooter: "rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d"
        },
        f = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: n
          } = (0, i.useGtmTrack)(), {
            refetch: c
          } = (0, o.useQuery)(s.UserGetVote, {
            skip: !0
          }), [m] = (0, o.useMutation)(s.UserCastVote), [f, u] = (0, r.useState)(null), g = (0, r.useCallback)((e => {
            (async () => {
              if (e === f && null !== f) u(null);
              else {
                u(e), n({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${a} ${t}`
                });
                const r = {
                  foreignId: t,
                  foreignType: a,
                  vote: e
                };
                await m({
                  variables: r
                })
              }
            })()
          }), [t, a, f]);
          return (0, r.useEffect)((() => {
            t && a && (async () => {
              const e = await c({
                foreignId: t,
                foreignType: a
              });
              u(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, a]), (0, d.jsxs)("div", {
            className: l.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [l.upvote, l.voteButton, f ? l.active : ""].join(" "),
              name: "upvote",
              onClick: () => g(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [l.downvote, l.voteButton, !1 === f ? l.active : ""].join(" "),
              name: "downvote",
              onClick: () => g(!1),
              type: "button"
            })]
          })
        },
        u = e => {
          let {
            action_text: t,
            link: a,
            trackingData: r
          } = e;
          const {
            track: n
          } = (0, i.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: l.calloutLink,
              type: "button",
              onClick: r ? () => n({
                ...r
              }) : () => {},
              children: [t, (0, d.jsx)(m, {
                className: l.calloutLinkIcon
              })]
            })
          })
        },
        g = e => {
          let {
            helperText: t,
            linkText: a,
            link: r,
            trackingData: n
          } = e;
          const {
            track: o
          } = (0, i.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: l.actionFooter,
            children: [t, a && " ", a && (0, d.jsx)("a", {
              href: r ?? "",
              onClick: () => o({
                ...n
              }),
              children: a
            })]
          })
        },
        p = (0, o.withTranslations)((e => {
          let {
            header: t,
            subheader: a,
            type: s,
            action_text: m,
            link: p,
            foreign_id: v = document.location.pathname,
            foreign_type: _ = "url",
            className: k = "",
            actionFooterHelperText: b,
            actionFooterLinkText: h,
            actionFooterLink: y,
            trackingData: w = {},
            actionFooterLinkTrackingData: x = {},
            t: S,
            ...N
          } = e;
          const {
            loggedIn: j
          } = (0, i.useRockstarUser)(), {
            track: z
          } = (0, i.useGtmTrack)(), T = document.location.pathname, {
            signInUrl: D
          } = (0, o.useScAuthLinks)(T), {
            ref: O,
            inView: E
          } = (0, n.useInView)({
            threshold: .6
          }), [V, I] = (0, r.useState)(!1);
          let F;
          if ((0, r.useEffect)((() => {
              E && !V && (z({
                event: "page_section_impression",
                element_placement: `callout section - ${N?.sectionName??N?._memoq?.header}`
              }), I(!0))
            }), [E]), !t && !a) return null;
          switch (s) {
            case "vote":
              if (!j) {
                F = (0, d.jsx)(c.A, {
                  to: D,
                  className: l.calloutButton,
                  onClick: w ? () => z({
                    ...w
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              F = (0, d.jsx)(f, {
                foreign_id: v,
                foreign_type: _
              });
              break;
            case "button":
              m && p && (F = (0, d.jsx)(c.A, {
                to: p,
                className: l.calloutButton,
                onClick: w ? () => z({
                  ...w
                }) : () => {},
                children: m
              }));
              break;
            case "link":
              m && p && (F = (0, d.jsx)(u, {
                action_text: m,
                link: p,
                trackingData: w
              }));
              break;
            default:
              F = null
          }
          return (0, d.jsx)("div", {
            className: `${l.calloutContainer} ${k||""}`,
            ref: O,
            children: (0, d.jsxs)("div", {
              className: l.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [l.calloutHeaders, F ? l.calloutHeaderMargins : ""].join(" "),
                children: [t && (0, d.jsx)("h2", {
                  className: l.calloutHeader,
                  children: S(t)
                }), a && (0, d.jsx)("h3", {
                  className: l.calloutSubheader,
                  children: S(a)
                })]
              }), (0, d.jsxs)("div", {
                className: l.actionBlock,
                children: [F, b && (0, d.jsx)(g, {
                  helperText: b,
                  linkText: h,
                  link: y,
                  trackingData: x
                })]
              })]
            })
          })
        }))
    },
    81978: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => p
      });
      var r = a(62229),
        n = a(81788),
        o = a(95966),
        i = a(22738),
        s = a(2918),
        c = a(12363),
        d = a(45505);
      const m = {
          rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011"
        },
        l = (0, n.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var f = a(95520),
        u = a(65555),
        g = a(91029);
      (0, o.importAll)(a(36672));
      const p = (0, d.A)((0, u.g)((e => {
        let {
          descriptors: t = null,
          footer: d = null,
          href: u,
          img: p = null,
          titleSlug: v = null,
          style: _ = {},
          className: k
        } = e;
        const [b, h] = (0, r.useState)(!1), {
          inView: y
        } = (0, i.useInView)({
          threshold: .6
        }), [w, x] = (0, r.useState)({
          ratingDescriptors: t,
          ratingFooter: d,
          ratingImg: p,
          ratingUrl: u
        }), {
          track: S
        } = (0, s.useGtmTrack)(), N = (0, n.useIntl)(), {
          data: j
        } = (0, o.useQuery)(f.GameData, {
          variables: {
            titleSlug: v
          },
          skip: !v
        });
        if ((0, r.useEffect)((() => {
            j && x(j?.game)
          }), [j]), (0, r.useEffect)((() => {
            y && !b && w.img_rating && (S({
              event: "page_section_impression",
              element_placement: "rating"
            }), h(!0))
          }), [y]), !w.ratingImg) return null;
        const z = !!w.ratingDescriptors;
        return (0, g.jsxs)("div", {
          className: [m.rating, z ? m.withDescriptors : m.withOutDescriptors, k || ""].join(" "),
          style: (0, o.safeStyles)(_),
          children: [(0, g.jsx)(c.A, {
            to: w.ratingUrl,
            target: "_blank",
            children: (0, g.jsx)("img", {
              alt: N.formatMessage(l.components_ratings_link_alt, {
                rating: (T = w.ratingImg, T.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${w.ratingImg}`)
            })
          }), z && (0, g.jsxs)("div", {
            className: m.text,
            children: [(0, g.jsx)("p", {
              className: m.descriptors,
              dangerouslySetInnerHTML: {
                __html: w?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), w.ratingFooter && (0, g.jsx)("hr", {}), w.ratingFooter && (0, g.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: w.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var T
      })))
    },
    47313: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var r = a(12363);
      const n = {
        button: "rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c"
      };
      var o = a(91029);
      const i = e => {
        let {
          className: t = "",
          children: a,
          context: i = "",
          to: s,
          onClick: c,
          target: d = "_self",
          ...m
        } = e;
        const l = [n.button, n[i], t].join(" ");
        return s ? (0, o.jsx)(r.A, {
          ...m,
          to: s,
          className: l,
          onClick: c,
          target: d,
          children: a
        }) : (0, o.jsx)("button", {
          ...m,
          type: "button",
          className: l,
          onClick: c,
          children: a
        })
      }
    },
    50828: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignType"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignType"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 386
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }

      function o(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = r[t] || new Set,
          i = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var r = n(e, t);
          r && a.definitions.push(r)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.UserGetVote = o(t, "UserGetVote"), e.exports.UserCastVote = o(t, "UserCastVote")
    },
    95520: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.GameData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = r[t] || new Set,
          i = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            i.has(e) || (i.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var r = n(e, t);
          r && a.definitions.push(r)
        })), a
      }(t, "GameData")
    },
    36672: (e, t, a) => {
      var r = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function n(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = o, e.exports = n, n.id = 36672
    },
    8194: (e, t, a) => {
      var r = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 68918,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function n(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      n.keys = function() {
        return Object.keys(r)
      }, n.resolve = o, e.exports = n, n.id = 8194
    },
    97558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    87256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    84406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    87707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    21228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    63461: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        __addDisposableResource: () => F,
        __assign: () => o,
        __asyncDelegator: () => N,
        __asyncGenerator: () => S,
        __asyncValues: () => j,
        __await: () => x,
        __awaiter: () => g,
        __classPrivateFieldGet: () => E,
        __classPrivateFieldIn: () => I,
        __classPrivateFieldSet: () => V,
        __createBinding: () => v,
        __decorate: () => s,
        __disposeResources: () => A,
        __esDecorate: () => d,
        __exportStar: () => _,
        __extends: () => n,
        __generator: () => p,
        __importDefault: () => O,
        __importStar: () => D,
        __makeTemplateObject: () => z,
        __metadata: () => u,
        __param: () => c,
        __propKey: () => l,
        __read: () => b,
        __rest: () => i,
        __runInitializers: () => m,
        __setFunctionName: () => f,
        __spread: () => h,
        __spreadArray: () => w,
        __spreadArrays: () => y,
        __values: () => k,
        default: () => C
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
        }, r(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function a() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, a = 1, r = arguments.length; a < r; a++)
            for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, o.apply(this, arguments)
      };

      function i(e, t) {
        var a = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]])
        }
        return a
      }

      function s(e, t, a, r) {
        var n, o = arguments.length,
          i = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, a) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, a, r);
        else
          for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (i = (o < 3 ? n(i) : o > 3 ? n(t, a, i) : n(t, a)) || i);
        return o > 3 && i && Object.defineProperty(t, a, i), i
      }

      function c(e, t) {
        return function(a, r) {
          t(a, r, e)
        }
      }

      function d(e, t, a, r, n, o) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = r.kind, d = "getter" === c ? "get" : "setter" === c ? "set" : "value", m = !t && e ? r.static ? e : e.prototype : null, l = t || (m ? Object.getOwnPropertyDescriptor(m, r.name) : {}), f = !1, u = a.length - 1; u >= 0; u--) {
          var g = {};
          for (var p in r) g[p] = "access" === p ? {} : r[p];
          for (var p in r.access) g.access[p] = r.access[p];
          g.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(i(e || null))
          };
          var v = (0, a[u])("accessor" === c ? {
            get: l.get,
            set: l.set
          } : l[d], g);
          if ("accessor" === c) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v) throw new TypeError("Object expected");
            (s = i(v.get)) && (l.get = s), (s = i(v.set)) && (l.set = s), (s = i(v.init)) && n.unshift(s)
          } else(s = i(v)) && ("field" === c ? n.unshift(s) : l[d] = s)
        }
        m && Object.defineProperty(m, r.name, l), f = !0
      }

      function m(e, t, a) {
        for (var r = arguments.length > 2, n = 0; n < t.length; n++) a = r ? t[n].call(e, a) : t[n].call(e);
        return r ? a : void 0
      }

      function l(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, t, a) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: a ? "".concat(a, " ", t) : t
        })
      }

      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function g(e, t, a, r) {
        return new(a || (a = Promise))((function(n, o) {
          function i(e) {
            try {
              c(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
              e(t)
            }))).then(i, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      }

      function p(e, t) {
        var a, r, n, o, i = {
          label: 0,
          sent: function() {
            if (1 & n[0]) throw n[1];
            return n[1]
          },
          trys: [],
          ops: []
        };
        return o = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function s(s) {
          return function(c) {
            return function(s) {
              if (a) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, s[0] && (i = 0)), i;) try {
                if (a = 1, r && (n = 2 & s[0] ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done) return n;
                switch (r = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return i.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = s[1], s = [0];
                    continue;
                  case 7:
                    s = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = i.trys).length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      i.label = s[1];
                      break
                    }
                    if (6 === s[0] && i.label < n[1]) {
                      i.label = n[1], n = s;
                      break
                    }
                    if (n && i.label < n[2]) {
                      i.label = n[2], i.ops.push(s);
                      break
                    }
                    n[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                s = t.call(e, i)
              } catch (e) {
                s = [6, e], r = 0
              } finally {
                a = n = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var v = Object.create ? function(e, t, a, r) {
        void 0 === r && (r = a);
        var n = Object.getOwnPropertyDescriptor(t, a);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return t[a]
          }
        }), Object.defineProperty(e, r, n)
      } : function(e, t, a, r) {
        void 0 === r && (r = a), e[r] = t[a]
      };

      function _(e, t) {
        for (var a in e) "default" === a || Object.prototype.hasOwnProperty.call(t, a) || v(t, e, a)
      }

      function k(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          a = t && e[t],
          r = 0;
        if (a) return a.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function b(e, t) {
        var a = "function" == typeof Symbol && e[Symbol.iterator];
        if (!a) return e;
        var r, n, o = a.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) i.push(r.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (a = o.return) && a.call(o)
          } finally {
            if (n) throw n.error
          }
        }
        return i
      }

      function h() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e
      }

      function y() {
        for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
        var r = Array(e),
          n = 0;
        for (t = 0; t < a; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, n++) r[n] = o[i];
        return r
      }

      function w(e, t, a) {
        if (a || 2 === arguments.length)
          for (var r, n = 0, o = t.length; n < o; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function x(e) {
        return this instanceof x ? (this.v = e, this) : new x(e)
      }

      function S(e, t, a) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, n = a.apply(e, t || []),
          o = [];
        return r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function i(e) {
          n[e] && (r[e] = function(t) {
            return new Promise((function(a, r) {
              o.push([e, t, a, r]) > 1 || s(e, t)
            }))
          })
        }

        function s(e, t) {
          try {
            (a = n[e](t)).value instanceof x ? Promise.resolve(a.value.v).then(c, d) : m(o[0][2], a)
          } catch (e) {
            m(o[0][3], e)
          }
          var a
        }

        function c(e) {
          s("next", e)
        }

        function d(e) {
          s("throw", e)
        }

        function m(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function N(e) {
        var t, a;
        return t = {}, r("next"), r("throw", (function(e) {
          throw e
        })), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, n) {
          t[r] = e[r] ? function(t) {
            return (a = !a) ? {
              value: x(e[r](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function j(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, a = e[Symbol.asyncIterator];
        return a ? a.call(e) : (e = k(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(a) {
          t[a] = e[a] && function(t) {
            return new Promise((function(r, n) {
              ! function(e, t, a, r) {
                Promise.resolve(r).then((function(t) {
                  e({
                    value: t,
                    done: a
                  })
                }), t)
              }(r, n, (t = e[a](t)).done, t.value)
            }))
          }
        }
      }

      function z(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var T = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: t
        })
      } : function(e, t) {
        e.default = t
      };

      function D(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var a in e) "default" !== a && Object.prototype.hasOwnProperty.call(e, a) && v(t, e, a);
        return T(t, e), t
      }

      function O(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function E(e, t, a, r) {
        if ("a" === a && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === a ? r : "a" === a ? r.call(e) : r ? r.value : t.get(e)
      }

      function V(e, t, a, r, n) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? n.call(e, a) : n ? n.value = a : t.set(e, a), a
      }

      function I(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function F(e, t, a) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r;
          if (a) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose]
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          e.stack.push({
            value: t,
            dispose: r,
            async: a
          })
        } else a && e.stack.push({
          async: !0
        });
        return t
      }
      var P = "function" == typeof SuppressedError ? SuppressedError : function(e, t, a) {
        var r = new Error(a);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new P(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        return function a() {
          for (; e.stack.length;) {
            var r = e.stack.pop();
            try {
              var n = r.dispose && r.dispose.call(r.value);
              if (r.async) return Promise.resolve(n).then(a, (function(e) {
                return t(e), a()
              }))
            } catch (e) {
              t(e)
            }
          }
          if (e.hasError) throw e.error
        }()
      }
      const C = {
        __extends: n,
        __assign: o,
        __rest: i,
        __decorate: s,
        __param: c,
        __metadata: u,
        __awaiter: g,
        __generator: p,
        __createBinding: v,
        __exportStar: _,
        __values: k,
        __read: b,
        __spread: h,
        __spreadArrays: y,
        __spreadArray: w,
        __await: x,
        __asyncGenerator: S,
        __asyncDelegator: N,
        __asyncValues: j,
        __makeTemplateObject: z,
        __importStar: D,
        __importDefault: O,
        __classPrivateFieldGet: E,
        __classPrivateFieldSet: V,
        __classPrivateFieldIn: I,
        __addDisposableResource: F,
        __disposeResources: A
      }
    },
    18751: (e, t, a) => {
      "use strict";

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      a.d(t, {
        A: () => r
      })
    }
  }
]);