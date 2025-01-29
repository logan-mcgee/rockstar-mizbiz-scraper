! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "42f63c47-55c9-4b18-a9bd-d704cdbdca74", e._sentryDebugIdIdentifier = "sentry-dbid-42f63c47-55c9-4b18-a9bd-d704cdbdca74")
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
  [2741], {
    2741: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => o
      });
      var n = s(94119),
        t = s(98096);
      const o = () => (0, t.jsx)(n.A, {
        jsonType: "sk-privacy-addendum",
        metaUrlOverride: "south-korean-privacy-addendum",
        titleKey: "Addendum Applicable to Users in South Korea",
        noCountrySelector: !0
      })
    },
    94119: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => _
      });
      var n = s(62229),
        t = s(9623),
        o = s(85865),
        r = s.n(o),
        i = s(93179),
        c = s(89950),
        d = s(95966),
        l = s(83843),
        m = s(81788);
      const f = (0, m.defineMessages)({
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
      var g = s(81075),
        k = s(43053),
        u = s.n(k),
        p = s(98096);
      const _ = (0, i.A)((e => {
        let {
          CookieSettingsModal: a,
          noCountrySelector: s,
          localeOverride: o,
          titleKey: i,
          jsonType: k,
          metaUrlOverride: _
        } = e;
        const b = (0, m.useIntl)(),
          y = (0, t.useNavigate)(),
          v = (0, t.useLocation)(),
          h = (0, d.useLocale)(),
          N = (0, d.useQueryParams)(),
          S = (0, n.useRef)(),
          w = (e, a) => {
            const s = a ?? e.target.hash,
              n = document.getElementById(s.replace("#", "")),
              t = document.getElementsByName(s.replace("#", ""))?.[0],
              o = n ?? t ?? null,
              r = N.get("country");
            if (e) {
              const a = `${v.pathname}${N.get("country")?`?country=${r}`:""}${s}`;
              y(a), e.preventDefault()
            }
            o && window.scroll(0, o.offsetTop - S.current.getBoundingClientRect().height - 60)
          },
          [j, M] = (0, n.useState)({}),
          {
            data: A,
            loading: E
          } = (0, d.useQuery)(u(), {
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
            jsonType: k,
            jsonLocale: t,
            metaUrl: `/${_??k}`,
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
        }), [A]);
        const {
          content: T
        } = A?.companyInfo ?? "", {
          title: $
        } = A?.meta ?? i ?? "";
        return (0, p.jsxs)("div", {
          className: g.A.companyInfo,
          "data-locale": j.jsonLocale,
          "data-page": k,
          children: [(0, p.jsxs)("section", {
            className: g.A.top,
            ref: S,
            children: [(0, p.jsx)("h1", {
              children: $
            }), "undefined" !== s && s ? "" : (0, p.jsx)("nav", {
              className: g.A.nav,
              children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => {
                const s = b.formatMessage(f.rockstargames_company_info_display_for_country, {
                  country: b.formatMessage(f[`rockstargames_company_info_${e}`])
                });
                return (0, p.jsx)(c.A, {
                  to: `${v.pathname}?country=${e}`,
                  className: g.A[e],
                  title: s,
                  children: (0, p.jsx)(l.A, {
                    children: s
                  })
                }, a)
              }))
            })]
          }), A && !E ? (0, p.jsx)("section", {
            className: g.A.content,
            "data-json-type": k,
            children: "cookies" === k && A ? (0, p.jsx)(r(), {
              renderInWrapper: !1,
              components: {
                CookieSettingsModal: a
              },
              jsx: T,
              onError: e => {
                console.error("jsx error in companyinfo", e)
              }
            }) : (0, p.jsx)("span", {
              dangerouslySetInnerHTML: {
                __html: T
              }
            })
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
    81075: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      const n = {
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
        zh: "rockstargames-sites-rockstargamesedb6fced472a5e478fd76b932e5536f1",
        cookieSettingsButton: "rockstargames-sites-rockstargamesd6718d478702d462a05523ddc6e35162",
        cookieSettingsModal: "rockstargames-sites-rockstargamesafd1c2d11a3906b09560e38ccda0e1a1",
        open: "rockstargames-sites-rockstargamesf63869cc364d0b1fe8809e07f0ca7ab3",
        settings: "rockstargames-sites-rockstargamesf525e220079297e7f708fec76493e710",
        setting: "rockstargames-sites-rockstargamesd672497b98f1c3f4739837a8e7fccdcb",
        optional: "rockstargames-sites-rockstargamesf50f148b17af515f2a9446b3521eec05",
        dot: "rockstargames-sites-rockstargamesce3eed3d07d1df48927a3bc8c3f4950f",
        optionalOn: "rockstargames-sites-rockstargamese87730f7373603e09aaff3a3c8726520",
        rtl: "rockstargames-sites-rockstargamescbaf238b6c3979b648646c4182324f58"
      }
    }
  }
]);