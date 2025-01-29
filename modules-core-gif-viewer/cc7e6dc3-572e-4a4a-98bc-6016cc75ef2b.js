! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cc7e6dc3-572e-4a4a-98bc-6016cc75ef2b", e._sentryDebugIdIdentifier = "sentry-dbid-cc7e6dc3-572e-4a4a-98bc-6016cc75ef2b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [799], {
    5138: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t
      });
      const i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        t = () => {
          let e;
          const {
            location: n
          } = window, a = n.hostname.substring(0, n.hostname.indexOf(".rockstargames.com")), t = i.findIndex((n => Object.entries(n.sites).findIndex((n => {
            let [i, t] = n;
            return t === a && (e = {
              site: i,
              subDomain: t
            }, !0)
          })) >= 0)), o = i[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...o,
            currentSite: e
          }
        }
    },
    1207: (e, n, a) => {
      "use strict";
      a.d(n, {
        OD: () => l,
        lv: () => r,
        pP: () => c,
        wC: () => t,
        PE: () => g,
        rB: () => d,
        yh: () => v,
        Ap: () => m,
        Xs: () => k,
        kx: () => b,
        rJ: () => y,
        pT: () => p,
        lV: () => w,
        PA: () => i,
        My: () => f
      }), a(1999);
      const i = e => {
          let {
            element: n
          } = e;
          const a = setInterval((() => n.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            i = e => {
              e.target === document && (clearInterval(a), document.removeEventListener("scroll", i))
            };
          document.addEventListener("scroll", i)
        },
        t = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const n = new URLSearchParams(document.location.search),
            a = document.getElementById(n.get(e) || e);
          a && (i({
            element: a
          }), o(a))
        },
        o = e => {
          const n = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (n.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const a = e?.querySelectorAll(n.join(", "));
            if (a?.length) {
              const e = [...a].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class l {
        constructor(e, n, a) {
          let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = n, this.id = a, this.alias = i
        }
      }
      const r = Object.freeze({
          pc: new l("pc", "PC", 8),
          ps: new l("ps", "PlayStation", 3),
          ps3: new l("ps3", "PlayStation 3", 2),
          ps4: new l("ps4", "PlayStation 4", 11),
          ps5: new l("ps5", "PlayStation 5", 20),
          xbox: new l("xbox", "Xbox", 4),
          xbox360: new l("xbox360", "Xbox 360", 1),
          xboxone: new l("xboxone", "Xbox One", 12),
          xboxsx: new l("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new l("switch", "Nintendo Switch™", 18),
          nintendoswitch: new l("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new l("applestore", "App Store", 102),
          googleplay: new l("googleplay", "Google Play", 1023),
          appStore: new l("app_store", "App Store", 102),
          googlePlay: new l("ggle_play", "Google Play", 1023)
        }),
        s = Object.freeze(Object.values(r));

      function d(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const n = e.toString().toLowerCase();
        return s.find((e => n === e.name || n === e.id.toString() || n === e.friendlyName.toLowerCase() || n === e.alias?.toLowerCase()))
      }
      const c = function() {
        for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
        return [...n].filter(Boolean).join(" ")
      };
      var u = a(4511);
      const m = e => {
          const n = document.cookie.split("; "),
            a = `${e}=`,
            i = n.find((e => e.startsWith(a))),
            t = i?.substring(a.length, i.length);
          return t
        },
        f = (e, n) => {
          e && void 0 !== n && (0, u.canStoreCookie)(e) && m(e) !== n && (document.cookie = `${e}=${n}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
        };
      a(8096);
      const p = e => e.keys().forEach(e),
        h = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        v = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return h.filter((n => n.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        g = e => {
          e.preventDefault();
          const n = e.currentTarget.href,
            a = (e => {
              const n = new URL(e).pathname.split("/"),
                a = n[n.length - 1];
              return decodeURIComponent(a)
            })(n);
          fetch(n, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const n = window.URL.createObjectURL(new Blob([e])),
              i = document.createElement("a");
            i.href = n, i.setAttribute("download", a), document.body.appendChild(i), i.click(), document.body.removeChild(i)
          })).catch((e => {
            console.log(e)
          }))
        },
        k = () => [r.xbox360.name, r.xboxone.name, r.ps3.name, r.ps4.name, r.pc.name],
        b = () => [r.xboxsx.name, r.ps5.name],
        w = e => b().includes(e),
        y = e => {
          const n = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return n.has(e) ? n.get(e) : e
        }
    },
    1799: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        Gif: () => w,
        HashSelector: () => b
      });
      const i = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e";
      var t = a(8096);
      const o = e => {
        let {
          color: n
        } = e;
        return (0, t.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": n
          },
          children: [(0, t.jsx)("div", {
            className: i
          }), (0, t.jsx)("div", {
            className: i
          }), (0, t.jsx)("div", {
            className: i
          })]
        })
      };
      var l = a(8648);
      var r = a(2229),
        s = a(5966);
      const d = (0, s.setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: c
        } = d,
        u = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, t.jsx)("hr", {})
          }
        };
      u("Background Image Gradient"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), u("Background Image Gradient"), a(5138), a(1207);
      const m = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, t.jsx)("hr", {})
        }
      };
      var f = a(1969);
      const p = e => {
          let {
            style: n,
            width: a,
            height: i,
            resizable: o,
            field: l,
            input: s,
            meta: d,
            name: c,
            label: u,
            description: m,
            error: p,
            children: h
          } = e;
          const v = () => o ? (0, t.jsx)(f.c, {
            defaultSize: {
              width: a || "100%",
              height: i || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, r.cloneElement)(h, ...s)
          }) : h;
          return (0, t.jsxs)("div", {
            className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: n,
            children: [(0, t.jsxs)("label", {
              className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: c ?? l?.name,
              children: [u ?? l?.label, (0, t.jsx)("span", {
                className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: m ?? l?.description
              })]
            }), (0, t.jsx)(v, {}), (p || d?.error) && (0, t.jsx)("div", {
              className: "FieldError_sc_custom",
              children: p ?? d?.error
            })]
          })
        },
        h = (m("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), m("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => v({
            hero: !1
          })
        }));
      a(1398);
      const v = function() {
        return {
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          key: `key_${(0,l.A)()}`
        }
      };
      var g = a(4235);
      const k = e => {
          let {
            field: n,
            input: a,
            meta: i
          } = e;
          const {
            data: l
          } = (0, s.useQuery)(g.GifsList);
          return (0, t.jsx)(p, {
            name: a.name || n.name || n.label,
            label: n.label,
            description: n.description,
            meta: i,
            children: l?.gifsList?.length ? (0, t.jsxs)("select", {
              ...a,
              children: [(0, t.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), l.gifsList.map((e => (0, t.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, t.jsx)(o, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        b = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e?.label ?? "Gif hash",
            name: e?.group ?? "hash",
            description: e?.description ?? "",
            component: e => {
              let {
                field: n,
                input: a,
                meta: i
              } = e;
              return (0, t.jsx)(k, {
                field: n,
                input: a,
                meta: i
              })
            }
          }
        },
        w = function() {
          return {
            name: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              group: "hash"
            }).group,
            label: "Gif",
            fields: [{
              label: "Name",
              name: "name",
              component: "text",
              description: "Block label for internal use only"
            }, b({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), b({
              group: "hash.desktop",
              label: "Desktop Source"
            }), (e = {
              name: "caption",
              label: "Caption",
              component: "html"
            }, {
              ...e,
              name: `_memoq.${e.name}`
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, h()],
            defaultItem: () => v({
              loop: !1
            }),
            itemProps: e => function(e) {
              return {
                ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                key: e.key
              }
            }(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          };
          var e
        }
    },
    1398: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
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
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
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
                value: "tagList"
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
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
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
          end: 131
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.TagList = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = i[n] || new Set,
          l = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "TagList")
    },
    4235: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifsList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
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
              value: !0
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
                value: "gifsList"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifInfo"
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
                value: "hash"
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
                value: "gifInfo"
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
                  value: "hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hash"
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
                    value: "file"
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
          end: 206
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }

      function o(e, n) {
        var a = {
          kind: e.kind,
          definitions: [t(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var o = i[n] || new Set,
          l = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return l.forEach((function(n) {
          var i = t(e, n);
          i && a.definitions.push(i)
        })), a
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.GifsList = o(n, "GifsList"), e.exports.GifInfo = o(n, "GifInfo")
    }
  }
]);