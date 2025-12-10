try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "779ebb37-77c8-4de5-aeb3-a689a64416c3", e._sentryDebugIdIdentifier = "sentry-dbid-779ebb37-77c8-4de5-aeb3-a689a64416c3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7071], {
    29625: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => r
      });
      var n = s(42295),
        t = s(14200);
      const o = {
          button: "rockstargames-sites-rockstargamesbc25ec64410308d56e4dc097e81fb129",
          secondary: "rockstargames-sites-rockstargamesa3e6439dcaa4870840298d683db4831c"
        },
        r = ({
          className: e = "",
          children: a,
          context: s = "",
          to: r,
          onClick: i,
          target: c = "_self",
          ...d
        }) => {
          const l = [o.button, o[s], e].join(" ");
          return r ? (0, n.jsx)(t.A, {
            ...d,
            to: r,
            className: l,
            onClick: i,
            target: c,
            children: a
          }) : (0, n.jsx)("button", {
            ...d,
            type: "button",
            className: l,
            onClick: i,
            children: a
          })
        }
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          s(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          s(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          s(e, a)
        })
      }
      a.loc.source = {
        body: 'query CompanyInfo(\n    $locale: String!\n    $jsonLocale: String!\n    $jsonType: String!\n    $metaUrl: String\n) {\n    companyInfo(type: $jsonType, locale: $jsonLocale) {\n        type\n        locale\n        content\n    }\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      }), e.exports = a, e.exports.CompanyInfo = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = n[a] || new Set,
          r = new Set,
          i = new Set;
        for (o.forEach(function(e) {
            i.add(e)
          }); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach(function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach(function(e) {
              i.add(e)
            }))
          })
        }
        return r.forEach(function(a) {
          var n = t(e, a);
          n && s.definitions.push(n)
        }), s
      }(a, "CompanyInfo")
    },
    57170: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => y
      });
      var n = s(42295),
        t = s(62229),
        o = s(9623),
        r = s(57386),
        i = s(14200),
        c = s(95966);
      const d = ({
        children: e,
        ...a
      }) => (0, n.jsx)("span", {
        ...a,
        className: "rockstargames-sites-rockstargamesacd86b7f5778381df8fac4a3f7489f60",
        children: e
      });
      var l = s(81788),
        m = s(29625);
      const f = (0, c.withTranslations)(({
          t: e
        }) => (0, n.jsx)(m.A, {
          className: "rockstargames-sites-rockstargamesda0a715288779aacd0abdacf5a4351ce",
          onClick: () => window.OneTrust?.ToggleInfoDisplay(),
          children: e("gdpr-settings-button-title")
        })),
        k = (0, l.defineMessages)({
          rockstargames_company_info_us: {
            id: "rockstargames_company_info_us",
            description: "Rockstar Games country name",
            defaultMessage: "United States"
          },
          rockstargames_company_info_br: {
            id: "rockstargames_company_info_br",
            description: "Rockstar Games country name",
            defaultMessage: "Brazil"
          },
          rockstargames_company_info_cz: {
            id: "rockstargames_company_info_cz",
            description: "Rockstar Games country name",
            defaultMessage: "Czech Republic"
          },
          rockstargames_company_info_de: {
            id: "rockstargames_company_info_de",
            description: "Rockstar Games country name",
            defaultMessage: "Germany"
          },
          rockstargames_company_info_es: {
            id: "rockstargames_company_info_es",
            description: "Rockstar Games country name",
            defaultMessage: "Spain"
          },
          rockstargames_company_info_fr: {
            id: "rockstargames_company_info_fr",
            description: "Rockstar Games country name",
            defaultMessage: "France"
          },
          rockstargames_company_info_it: {
            id: "rockstargames_company_info_it",
            description: "Rockstar Games country name",
            defaultMessage: "Italy"
          },
          rockstargames_company_info_jp: {
            id: "rockstargames_company_info_jp",
            description: "Rockstar Games country name",
            defaultMessage: "Japan"
          },
          rockstargames_company_info_kr: {
            id: "rockstargames_company_info_kr",
            description: "Rockstar Games country name",
            defaultMessage: "South Korea"
          },
          rockstargames_company_info_mx: {
            id: "rockstargames_company_info_mx",
            description: "Rockstar Games country name",
            defaultMessage: "Mexico"
          },
          rockstargames_company_info_nl: {
            id: "rockstargames_company_info_nl",
            description: "Rockstar Games country name",
            defaultMessage: "Netherlands"
          },
          rockstargames_company_info_pl: {
            id: "rockstargames_company_info_pl",
            description: "Rockstar Games country name",
            defaultMessage: "Poland"
          },
          rockstargames_company_info_ru: {
            id: "rockstargames_company_info_ru",
            description: "Rockstar Games country name",
            defaultMessage: "Russian Federation"
          },
          rockstargames_company_info_sa: {
            id: "rockstargames_company_info_sa",
            description: "Rockstar Games country name",
            defaultMessage: "Saudi Arabia"
          },
          rockstargames_company_info_tw: {
            id: "rockstargames_company_info_tw",
            description: "Rockstar Games country name",
            defaultMessage: "Taiwan"
          },
          rockstargames_company_info_zh: {
            id: "rockstargames_company_info_zh",
            description: "Rockstar Games country name",
            defaultMessage: "China"
          },
          rockstargames_company_info_display_for_country: {
            id: "rockstargames_company_info_display_for_country",
            description: "Rockstar Games display for country label",
            defaultMessage: "Display page information for {country}"
          }
        }),
        u = {
          br: "rockstargames-sites-rockstargamesd4eba5ddfaaa55b095a205d939438113",
          companyInfo: "rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4",
          content: "rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b",
          cz: "rockstargames-sites-rockstargamesc45a04b51ded1c14905f1a7e0f1e67ec",
          de: "rockstargames-sites-rockstargamesc496427e453c5548969da90086b25ea6",
          es: "rockstargames-sites-rockstargamesb775f7b18b8ec09693ba5689001a0b6f",
          fr: "rockstargames-sites-rockstargamesc9308ca04e0c61704e1283f9190f0e9d",
          it: "rockstargames-sites-rockstargamesa4d36f86d484e6b8c2744c0ca55dd2bb",
          jp: "rockstargames-sites-rockstargamesb4e5e281b6799125f268596cf0cb08ca",
          kr: "rockstargames-sites-rockstargamesfa5fe16ccc02f341ab537dd0c36168b3",
          mx: "rockstargames-sites-rockstargamesfb82650022fe0adab1844cf27f186ea2",
          nav: "rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2",
          nl: "rockstargames-sites-rockstargamese492e4ea7d4fb13bd28f14101fb55ea4",
          pillBtn: "rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74",
          pl: "rockstargames-sites-rockstargamesdc65d9c7dc3484c15c7368c4c8d57305",
          ru: "rockstargames-sites-rockstargamesc8848a20bec483fd18e054491bff9d80",
          sa: "rockstargames-sites-rockstargamesf6a4c584a3c58d3bb39947f0f80e37b3",
          selected: "rockstargames-sites-rockstargamesf57b637a2309d10d2e8290ebaf72a409",
          top: "rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33",
          tw: "rockstargames-sites-rockstargamesceb5c9a7eacc6d559d8ba67e78faf262",
          us: "rockstargames-sites-rockstargamesb577d27e2379d02659055abbd6b666db",
          zh: "rockstargames-sites-rockstargamesedb6fced472a5e478fd76b932e5536f1"
        };
      var g = s(43053),
        p = s.n(g);
      const y = (0, r.A)(({
        noCountrySelector: e,
        localeOverride: a,
        titleKey: s,
        jsonType: r,
        metaUrlOverride: m
      }) => {
        const g = (0, l.useIntl)(),
          y = (0, o.useNavigate)(),
          b = (0, o.useLocation)(),
          _ = (0, c.useLocale)(),
          v = (0, c.useQueryParams)(),
          h = (0, t.useRef)(),
          N = (e, a) => {
            const s = a ?? e.target.hash,
              n = document.getElementById(s.replace("#", "")),
              t = document.getElementsByName(s.replace("#", ""))?.[0],
              o = n ?? t ?? null,
              r = v.get("country");
            if (e) {
              const a = `${b.pathname}${v.get("country")?`?country=${r}`:""}${s}`;
              y(a), e.preventDefault()
            }
            o && window.scroll(0, o.offsetTop - h.current.getBoundingClientRect().height - 60)
          },
          [w, S] = (0, t.useState)({}),
          {
            data: j,
            loading: T
          } = (0, c.useQuery)(p(), {
            variables: w,
            skip: !Object.entries(w).length,
            autoSetLoading: !0
          });
        (0, t.useEffect)(() => {
          const s = v.get("country") ?? v.get("locale") ?? null,
            n = void 0 === e,
            t = n && null !== s ? s : n && _.split("_").length > 1 ? "hans" === _.split("_")[1] ? _.split("_")[0] : _.split("_")[1] : _,
            o = a || t || "us";
          S({
            jsonType: r,
            jsonLocale: o,
            metaUrl: `/${m??r}`,
            locale: o
          })
        }, [v.get("country"), v.get("locale"), a]), (0, t.useEffect)(() => {
          document.querySelectorAll(".scrollToLink").forEach(e => {
            (e => {
              if (e) {
                const a = v.get("country"),
                  s = e.href.split("#")[1],
                  n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                e.setAttribute("href", `${n}${b.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${s}`)
              }
            })(e), e.addEventListener("click", e => {
              N(e, !1)
            })
          }), "" !== b.hash && setTimeout(() => {
            N(!1, b.hash)
          }, 10)
        }, [j]);
        const {
          content: M
        } = j?.companyInfo ?? "", {
          title: R
        } = j?.meta ?? s ?? "";
        return (0, n.jsxs)("div", {
          className: u.companyInfo,
          "data-locale": w.jsonLocale,
          "data-page": r,
          children: [(0, n.jsxs)("section", {
            className: u.top,
            ref: h,
            children: [(0, n.jsx)("h1", {
              children: R
            }), void 0 !== e && e ? "" : (0, n.jsx)("nav", {
              className: u.nav,
              children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map((e, a) => {
                const s = g.formatMessage(k.rockstargames_company_info_display_for_country, {
                  country: g.formatMessage(k[`rockstargames_company_info_${e}`])
                });
                return (0, n.jsx)(i.A, {
                  to: `${b.pathname}?country=${e}`,
                  className: u[e],
                  title: s,
                  children: (0, n.jsx)(d, {
                    children: s
                  })
                }, a)
              })
            })]
          }), j && !T ? (0, n.jsxs)("section", {
            className: u.content,
            "data-json-type": r,
            children: ["cookies" === r && (0, n.jsx)(f, {}), (0, n.jsx)("span", {
              dangerouslySetInnerHTML: {
                __html: M
              }
            })]
          }) : ""]
        })
      })
    },
    97071: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => o
      });
      var n = s(42295),
        t = s(57170);
      const o = () => (0, n.jsx)(t.A, {
        jsonType: "privacy",
        titleKey: "Privacy Policy"
      })
    }
  }
]);