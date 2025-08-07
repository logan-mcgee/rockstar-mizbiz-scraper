try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ed7253f9-f9dc-4a01-b906-7ead724f1d41", e._sentryDebugIdIdentifier = "sentry-dbid-ed7253f9-f9dc-4a01-b906-7ead724f1d41")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3721], {
    2625: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => _
      });
      var s = n(62229),
        t = n(9623),
        o = n(69466),
        r = n(18444),
        i = n(95966);
      var c = n(70954);
      const d = e => {
        let {
          children: a,
          ...n
        } = e;
        return (0, c.jsx)("span", {
          ...n,
          className: "rockstargames-sites-rockstargamesacd86b7f5778381df8fac4a3f7489f60",
          children: a
        })
      };
      var l = n(81788),
        m = n(95882);
      const f = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, c.jsx)(m.A, {
            className: "rockstargames-sites-rockstargamesda0a715288779aacd0abdacf5a4351ce",
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        })),
        g = (0, l.defineMessages)({
          rockstargames_company_info_us: {
            id: "rockstargames_company_info_us",
            defaultMessage: "United States"
          },
          rockstargames_company_info_br: {
            id: "rockstargames_company_info_br",
            defaultMessage: "Brazil"
          },
          rockstargames_company_info_cz: {
            id: "rockstargames_company_info_cz",
            defaultMessage: "Czech Republic"
          },
          rockstargames_company_info_de: {
            id: "rockstargames_company_info_de",
            defaultMessage: "Germany"
          },
          rockstargames_company_info_es: {
            id: "rockstargames_company_info_es",
            defaultMessage: "Spain"
          },
          rockstargames_company_info_fr: {
            id: "rockstargames_company_info_fr",
            defaultMessage: "France"
          },
          rockstargames_company_info_it: {
            id: "rockstargames_company_info_it",
            defaultMessage: "Italy"
          },
          rockstargames_company_info_jp: {
            id: "rockstargames_company_info_jp",
            defaultMessage: "Japan"
          },
          rockstargames_company_info_kr: {
            id: "rockstargames_company_info_kr",
            defaultMessage: "South Korea"
          },
          rockstargames_company_info_mx: {
            id: "rockstargames_company_info_mx",
            defaultMessage: "Mexico"
          },
          rockstargames_company_info_nl: {
            id: "rockstargames_company_info_nl",
            defaultMessage: "Netherlands"
          },
          rockstargames_company_info_pl: {
            id: "rockstargames_company_info_pl",
            defaultMessage: "Poland"
          },
          rockstargames_company_info_ru: {
            id: "rockstargames_company_info_ru",
            defaultMessage: "Russian Federation"
          },
          rockstargames_company_info_sa: {
            id: "rockstargames_company_info_sa",
            defaultMessage: "Saudi Arabia"
          },
          rockstargames_company_info_tw: {
            id: "rockstargames_company_info_tw",
            defaultMessage: "Taiwan"
          },
          rockstargames_company_info_zh: {
            id: "rockstargames_company_info_zh",
            defaultMessage: "China"
          },
          rockstargames_company_info_display_for_country: {
            id: "rockstargames_company_info_display_for_country",
            defaultMessage: "Display page information for {country}"
          }
        }),
        u = {
          pillBtn: "rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74",
          selected: "rockstargames-sites-rockstargamesf57b637a2309d10d2e8290ebaf72a409",
          companyInfo: "rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4",
          top: "rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33",
          content: "rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b",
          nav: "rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2",
          us: "rockstargames-sites-rockstargamesb577d27e2379d02659055abbd6b666db",
          br: "rockstargames-sites-rockstargamesd4eba5ddfaaa55b095a205d939438113",
          cz: "rockstargames-sites-rockstargamesc45a04b51ded1c14905f1a7e0f1e67ec",
          de: "rockstargames-sites-rockstargamesc496427e453c5548969da90086b25ea6",
          es: "rockstargames-sites-rockstargamesb775f7b18b8ec09693ba5689001a0b6f",
          fr: "rockstargames-sites-rockstargamesc9308ca04e0c61704e1283f9190f0e9d",
          it: "rockstargames-sites-rockstargamesa4d36f86d484e6b8c2744c0ca55dd2bb",
          jp: "rockstargames-sites-rockstargamesb4e5e281b6799125f268596cf0cb08ca",
          kr: "rockstargames-sites-rockstargamesfa5fe16ccc02f341ab537dd0c36168b3",
          mx: "rockstargames-sites-rockstargamesfb82650022fe0adab1844cf27f186ea2",
          nl: "rockstargames-sites-rockstargamese492e4ea7d4fb13bd28f14101fb55ea4",
          pl: "rockstargames-sites-rockstargamesdc65d9c7dc3484c15c7368c4c8d57305",
          ru: "rockstargames-sites-rockstargamesc8848a20bec483fd18e054491bff9d80",
          sa: "rockstargames-sites-rockstargamesf6a4c584a3c58d3bb39947f0f80e37b3",
          tw: "rockstargames-sites-rockstargamesceb5c9a7eacc6d559d8ba67e78faf262",
          zh: "rockstargames-sites-rockstargamesedb6fced472a5e478fd76b932e5536f1"
        };
      var k = n(43053),
        p = n.n(k);
      const _ = (0, o.A)((e => {
        let {
          noCountrySelector: a,
          localeOverride: n,
          titleKey: o,
          jsonType: m,
          metaUrlOverride: k
        } = e;
        const _ = (0, l.useIntl)(),
          y = (0, t.useNavigate)(),
          b = (0, t.useLocation)(),
          v = (0, i.useLocale)(),
          h = (0, i.useQueryParams)(),
          N = (0, s.useRef)(),
          w = (e, a) => {
            const n = a ?? e.target.hash,
              s = document.getElementById(n.replace("#", "")),
              t = document.getElementsByName(n.replace("#", ""))?.[0],
              o = s ?? t ?? null,
              r = h.get("country");
            if (e) {
              const a = `${b.pathname}${h.get("country")?`?country=${r}`:""}${n}`;
              y(a), e.preventDefault()
            }
            o && window.scroll(0, o.offsetTop - N.current.getBoundingClientRect().height - 60)
          },
          [S, j] = (0, s.useState)({}),
          {
            data: T,
            loading: M
          } = (0, i.useQuery)(p(), {
            variables: S,
            skip: !Object.entries(S).length,
            autoSetLoading: !0
          });
        (0, s.useEffect)((() => {
          const e = h.get("country") ?? h.get("locale") ?? null,
            s = void 0 === a,
            t = s && null !== e ? e : s && v.split("_").length > 1 ? "hans" === v.split("_")[1] ? v.split("_")[0] : v.split("_")[1] : v,
            o = n || t || "us";
          j({
            jsonType: m,
            jsonLocale: o,
            metaUrl: `/${k??m}`,
            locale: o
          })
        }), [h.get("country"), h.get("locale"), n]), (0, s.useEffect)((() => {
          document.querySelectorAll(".scrollToLink").forEach((e => {
            (e => {
              if (e) {
                const a = h.get("country"),
                  n = e.href.split("#")[1],
                  s = document.getElementsByTagName("base")[0]?.getAttribute("href");
                e.setAttribute("href", `${s}${b.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${n}`)
              }
            })(e), e.addEventListener("click", (e => {
              w(e, !1)
            }))
          })), "" !== b.hash && setTimeout((() => {
            w(!1, b.hash)
          }), 10)
        }), [T]);
        const {
          content: x
        } = T?.companyInfo ?? "", {
          title: E
        } = T?.meta ?? o ?? "";
        return (0, c.jsxs)("div", {
          className: u.companyInfo,
          "data-locale": S.jsonLocale,
          "data-page": m,
          children: [(0, c.jsxs)("section", {
            className: u.top,
            ref: N,
            children: [(0, c.jsx)("h1", {
              children: E
            }), void 0 !== a && a ? "" : (0, c.jsx)("nav", {
              className: u.nav,
              children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => {
                const n = _.formatMessage(g.rockstargames_company_info_display_for_country, {
                  country: _.formatMessage(g[`rockstargames_company_info_${e}`])
                });
                return (0, c.jsx)(r.A, {
                  to: `${b.pathname}?country=${e}`,
                  className: u[e],
                  title: n,
                  children: (0, c.jsx)(d, {
                    children: n
                  })
                }, a)
              }))
            })]
          }), T && !M ? (0, c.jsxs)("section", {
            className: u.content,
            "data-json-type": m,
            children: ["cookies" === m && (0, c.jsx)(f, {}), (0, c.jsx)("span", {
              dangerouslySetInnerHTML: {
                __html: x
              }
            })]
          }) : ""]
        })
      }))
    },
    43053: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CompanyInfo"
          },
          variableDefinitions: [{
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
                value: "jsonLocale"
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
                value: "jsonType"
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
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "companyInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "jsonType"
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
                    value: "jsonLocale"
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
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "locale"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                    value: "title"
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
          end: 308
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: 'query CompanyInfo(\n    $locale: String!\n    $jsonLocale: String!\n    $jsonType: String!\n    $metaUrl: String\n) {\n    companyInfo(type: $jsonType, locale: $jsonLocale) {\n        type\n        locale\n        content\n    }\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var s = e.definitions[n];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.CompanyInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var o = s[a] || new Set,
          r = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = t(e, a);
          s && n.definitions.push(s)
        })), n
      }(a, "CompanyInfo")
    },
    83721: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        default: () => o
      });
      var s = n(2625),
        t = n(70954);
      const o = () => (0, t.jsx)(s.A, {
        jsonType: "corpinfo",
        titleKey: "Corporate Information",
        noCountrySelector: !0
      })
    },
    95882: (e, a, n) => {
      "use strict";
      n.d(a, {
        A: () => r
      });
      var s = n(18444);
      const t = {
        button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
      };
      var o = n(70954);
      const r = e => {
        let {
          className: a = "",
          children: n,
          context: r = "",
          to: i,
          onClick: c,
          target: d = "_self",
          ...l
        } = e;
        const m = [t.button, t[r], a].join(" ");
        return i ? (0, o.jsx)(s.A, {
          ...l,
          to: i,
          className: m,
          onClick: c,
          target: d,
          children: n
        }) : (0, o.jsx)("button", {
          ...l,
          type: "button",
          className: m,
          onClick: c,
          children: n
        })
      }
    }
  }
]);