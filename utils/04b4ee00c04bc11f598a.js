(self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [342], {
    190: (e, n, t) => {
      "use strict";
      t.d(n, {
        Z: () => d
      });
      var a = t(806),
        i = t.n(a);
      const r = "www.rockstargames.com" === document?.location?.hostname ? "prod" : "dev",
        o = /Mobi/i.test(window.navigator.userAgent) ? "mobile" : "desktop",
        d = e => {
          const n = {
            ...e,
            environment: r,
            display_type: o
          };
          i().dataLayer({
            dataLayer: n
          })
        }
    },
    342: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, {
        withGtmTracking: () => r,
        withLocale: () => s,
        withMediaBasedProps: () => m,
        withTranslations: () => v
      });
      var a = t(190),
        i = t(160);
      const r = e => n => ((e, n) => (0, i.jsx)(e, {
        ...n,
        gtmTrack: e => {
          (0, a.Z)(e)
        }
      }))(e, n);
      var o = t(859),
        d = t(285);
      const s = e => n => ((e, n) => {
        const t = (0, o.useReactiveVar)(d.locale);
        return (0, i.jsx)(e, {
          ...n,
          locale: t
        })
      })(e, n);
      var c = t(932),
        l = t(653),
        u = t.n(l);
      const m = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
        return t => ((e, n, t) => {
          const [a, r] = (0, c.useState)(n), o = e => {
            let n = e;
            const t = n?.items;
            if (t?.length) {
              const e = t.map((e => o(e)));
              n = {
                ...n,
                items: e
              }
            }
            const a = n?.mediaQueryList;
            return a?.length ? (a.filter((e => window.matchMedia(e.mediaQueryString).matches)).forEach((e => {
              n = {
                ...n,
                ...e
              }
            })), n) : n
          };
          return (0, c.useEffect)((() => {
            const e = u().debounce((() => {
              r(o(n))
            }), t);
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          })), (0, i.jsx)(e, {
            ...a
          })
        })(e, t, n)
      };
      var f = t(390);
      const v = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
        return t => ((e, n, t) => {
          const a = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
            const {
              data: n
            } = (0, o.useQuery)(f.Translations, {
              variables: {
                config: e
              }
            });
            return n ? e => n?.translations.find((n => n.key === e))?.value ?? e : null
          }(t);
          return a ? (0, i.jsx)(e, {
            ...n,
            t: a
          }) : null
        })(e, t, n)
      }
    },
    143: (e, n, t) => {
      "use strict";
      var a, i = (a = t(680)) && a.__esModule ? a : {
          default: a
        },
        r = {
          tags: function(e) {
            var n = e.id,
              t = e.events,
              a = e.dataLayer,
              r = e.dataLayerName,
              o = e.preview,
              d = "&gtm_auth=" + e.auth,
              s = "&gtm_preview=" + o;
            return n || (0, i.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + n + d + s + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(t).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + d + s + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + r + "','" + n + "');",
              dataLayerVar: this.dataLayer(a, r)
            }
          },
          dataLayer: function(e, n) {
            return "\n      window." + n + " = window." + n + " || [];\n      window." + n + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = r
    },
    248: (e, n, t) => {
      "use strict";
      var a, i = (a = t(143)) && a.__esModule ? a : {
          default: a
        },
        r = {
          dataScript: function(e) {
            var n = document.createElement("script");
            return n.innerHTML = e, n
          },
          gtm: function(e) {
            var n = i.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = n.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = n.script, e
              },
              dataScript: this.dataScript(n.dataLayerVar)
            }
          },
          initialize: function(e) {
            var n = e.gtmId,
              t = e.events,
              a = void 0 === t ? {} : t,
              i = e.dataLayer,
              r = e.dataLayerName,
              o = void 0 === r ? "dataLayer" : r,
              d = e.auth,
              s = void 0 === d ? "" : d,
              c = e.preview,
              l = void 0 === c ? "" : c,
              u = this.gtm({
                id: n,
                events: a,
                dataLayer: i || void 0,
                dataLayerName: o,
                auth: s,
                preview: l
              });
            i && document.head.appendChild(u.dataScript), document.head.insertBefore(u.script(), document.head.childNodes[0]), document.body.insertBefore(u.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var n = e.dataLayer,
              t = e.dataLayerName,
              a = void 0 === t ? "dataLayer" : t;
            if (window[a]) return window[a].push(n);
            var r = i.default.dataLayer(n, a),
              o = this.dataScript(r);
            document.head.insertBefore(o, document.head.childNodes[0])
          }
        };
      e.exports = r
    },
    806: (e, n, t) => {
      "use strict";
      var a, i = (a = t(248)) && a.__esModule ? a : {
        default: a
      };
      e.exports = i.default
    },
    680: (e, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    390: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Translations"
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
                value: "config"
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
                value: "translations"
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
                  value: "config"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "config"
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
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
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
          end: 144
        }
      };

      function t(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && n.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, n)
        }))
      }
      n.loc.source = {
        body: "query Translations($locale: String!, $config: String!) {\n    translations(locale: $locale, config: $config) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function i(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var a = e.definitions[t];
          if (a.name && a.name.value == n) return a
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), a[e.name.value] = n
        }
      })), e.exports = n, e.exports.Translations = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = a[n] || new Set,
          o = new Set,
          d = new Set;
        for (r.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (a[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var a = i(e, n);
          a && t.definitions.push(a)
        })), t
      }(n, "Translations")
    }
  }
]);