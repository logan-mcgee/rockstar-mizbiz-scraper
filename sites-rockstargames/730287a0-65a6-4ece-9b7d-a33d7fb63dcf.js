! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "730287a0-65a6-4ece-9b7d-a33d7fb63dcf", e._sentryDebugIdIdentifier = "sentry-dbid-730287a0-65a6-4ece-9b7d-a33d7fb63dcf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1721], {
    11721: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => o
      });
      var n = s(50553),
        t = s(46632);
      const o = () => (0, t.jsx)(n.A, {
        jsonType: "privacy",
        titleKey: "Privacy Policy"
      })
    },
    50553: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => y
      });
      var n = s(71403),
        t = s(25076),
        o = s(85865),
        r = s.n(o),
        i = s(99718),
        c = s(60285),
        d = s(58407),
        l = s(42756),
        m = s(26039),
        f = s(96717);
      const g = (0, f.defineMessages)({
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
      });
      var k = s(57674),
        u = s(45416),
        _ = s.n(u),
        p = s(46632);
      const y = (0, i.A)((e => {
        let {
          CookieSettingsModal: a,
          noCountrySelector: s,
          localeOverride: o,
          titleKey: i,
          jsonType: u
        } = e;
        const y = (0, f.useIntl)(),
          b = (0, t.useNavigate)(),
          v = (0, t.useLocation)(),
          h = (0, l.useLocale)(),
          N = (0, l.useQueryParams)(),
          S = (0, n.useRef)(),
          w = (e, a) => {
            const s = a ?? e.target.hash,
              n = document.getElementById(s.replace("#", "")),
              t = document.getElementsByName(s.replace("#", ""))?.[0],
              o = n ?? t ?? null,
              r = N.get("country");
            if (e) {
              const a = `${v.pathname}${N.get("country")?`?country=${r}`:""}${s}`;
              b(a), e.preventDefault()
            }
            o && window.scroll(0, o.offsetTop - S.current.getBoundingClientRect().height - 60)
          },
          [j, M] = (0, n.useState)({}),
          {
            data: E,
            loading: T
          } = (0, d.useQuery)(_(), {
            variables: j,
            skip: !Object.entries(j).length,
            autoSetLoading: !0
          });
        (0, n.useEffect)((() => {
          const e = N.get("country") ?? N.get("locale") ?? null,
            a = void 0 === s,
            n = a && null !== e ? e : a && h.split("_").length > 1 ? "hans" === h.split("_")[1] ? h.split("_")[0] : h.split("_")[1] : h,
            t = o || n || "us";
          M({
            jsonType: u,
            jsonLocale: t,
            metaUrl: `/${u}`,
            locale: t
          })
        }), [N.get("country"), N.get("locale"), o]), (0, n.useEffect)((() => {
          document.querySelectorAll(".scrollToLink").forEach((e => {
            (e => {
              if (e) {
                const a = N.get("country"),
                  s = e.href.split("#")[1],
                  n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                e.setAttribute("href", `${n}${v.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${s}`)
              }
            })(e), e.addEventListener("click", (e => {
              w(e, !1)
            }))
          })), "" !== v.hash && setTimeout((() => {
            w(!1, v.hash)
          }), 10)
        }), [E]);
        const {
          content: A
        } = E?.companyInfo ?? "", {
          title: $
        } = E?.meta ?? i ?? "";
        return (0, p.jsxs)("div", {
          className: k.A.companyInfo,
          "data-locale": j.jsonLocale,
          "data-page": u,
          children: [(0, p.jsxs)("section", {
            className: k.A.top,
            ref: S,
            children: [(0, p.jsx)("h1", {
              children: $
            }), "undefined" !== s && s ? "" : (0, p.jsx)("nav", {
              className: k.A.nav,
              children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => {
                const s = y.formatMessage(g.rockstargames_company_info_display_for_country, {
                  country: y.formatMessage(g[`rockstargames_company_info_${e}`])
                });
                return (0, p.jsx)(c.A, {
                  to: `${v.pathname}?country=${e}`,
                  className: k.A[e],
                  title: s,
                  children: (0, p.jsx)(m.A, {
                    children: s
                  })
                }, a)
              }))
            })]
          }), E && !T ? (0, p.jsx)("section", {
            className: k.A.content,
            "data-json-type": u,
            children: "cookies" === u && E ? (0, p.jsx)(r(), {
              renderInWrapper: !1,
              components: {
                CookieSettingsModal: a
              },
              jsx: A,
              onError: e => {
                console.error("jsx error in companyinfo", e)
              }
            }) : (0, p.jsx)("span", {
              dangerouslySetInnerHTML: {
                __html: A
              }
            })
          }) : ""]
        })
      }))
    },
    45416: e => {
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
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
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
      var n = {};

      function t(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.CompanyInfo = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var o = n[a] || new Set,
          r = new Set,
          i = new Set;
        for (o.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var c = i;
          i = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "CompanyInfo")
    },
    57674: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      const n = {
        companyInfo: "rockstargames-sites-rockstargamesf943a5b3222952639b355b692cd3738d",
        top: "rockstargames-sites-rockstargamesedf5a2c3edb9d28aa5e78792b12733b5",
        content: "rockstargames-sites-rockstargamesef8cad83a641466bdee771139faed62e",
        nav: "rockstargames-sites-rockstargamesf68cfd32b045dc7e95232d7faf79a284",
        us: "rockstargames-sites-rockstargamesf1d1f759d6618c8dd40f01be8aeedc00",
        br: "rockstargames-sites-rockstargamesa598d7e1c1aecb739f2d9b06fad80918",
        cz: "rockstargames-sites-rockstargamese1625f58afa3e3fdb476a97278eb674e",
        de: "rockstargames-sites-rockstargamesf4113889029180b03cb313ec3a165a5f",
        es: "rockstargames-sites-rockstargamesc17ca09c7a65aef8aff0ff91f7bb6892",
        fr: "rockstargames-sites-rockstargamesd7d0b8fbf9d0c537c86194da1e4d1e5b",
        it: "rockstargames-sites-rockstargamesd7029ad0b1cf35481b65da9be0061cf1",
        jp: "rockstargames-sites-rockstargamesa402493348ae0ed58bc84c3b9627a5a3",
        kr: "rockstargames-sites-rockstargamesc66819179b5fd85bbc46ad9a5ab961ad",
        mx: "rockstargames-sites-rockstargamesd92adf4512ff6a95a7f23079948fa6b2",
        nl: "rockstargames-sites-rockstargamesca887a9fec01cf48dc95a367688ef8c8",
        pl: "rockstargames-sites-rockstargamese9b8aab773e489c22c1948e5b5d3b4b2",
        ru: "rockstargames-sites-rockstargamesb6ccaa11bf9d4f6dd02948f1620a40c5",
        sa: "rockstargames-sites-rockstargamese7b9353b61ab3484a46736ea041219ff",
        tw: "rockstargames-sites-rockstargamesddc2bb738d6bce068b401f506cfe93e7",
        zh: "rockstargames-sites-rockstargamese1524848cf231a25c7bf2ba45974f498",
        cookieSettingsButton: "rockstargames-sites-rockstargamesc268c7156142f3275c243f31cc232ae5",
        cookieSettingsModal: "rockstargames-sites-rockstargamesefd3f6904fd12431580823e02744ad5d",
        open: "rockstargames-sites-rockstargamesf0b2945ddb98d457b9fce95f91e28344",
        settings: "rockstargames-sites-rockstargamesda10ad30238ec98939e1bcc84f49ef6e",
        setting: "rockstargames-sites-rockstargamesd7951bf06699a3e55c9971827284450a",
        optional: "rockstargames-sites-rockstargamesbe268b47e37393ac1f8a8a3f2d82aa8e",
        dot: "rockstargames-sites-rockstargamesc8bc5f37684843cea9695d5833509e18",
        optionalOn: "rockstargames-sites-rockstargamese066e619e216c7660f555fa8fd2f5abc",
        rtl: "rockstargames-sites-rockstargamesf7037a458b3d6fd80ea26847cfea33e9"
      }
    }
  }
]);