(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [38], {
    6078: e => {
      "use strict";

      function n(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }
      e.exports = function(e, r, i, o) {
        r = r || "&", i = i || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var s = /\+/g;
        e = e.split(r);
        var c = 1e3;
        o && "number" == typeof o.maxKeys && (c = o.maxKeys);
        var l = e.length;
        c > 0 && l > c && (l = c);
        for (var d = 0; d < l; ++d) {
          var u, p, m, f, h = e[d].replace(s, "%20"),
            v = h.indexOf(i);
          v >= 0 ? (u = h.substr(0, v), p = h.substr(v + 1)) : (u = h, p = ""), m = decodeURIComponent(u), f = decodeURIComponent(p), n(a, m) ? t(a[m]) ? a[m].push(f) : a[m] = [a[m], f] : a[m] = f
        }
        return a
      };
      var t = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
    },
    2896: e => {
      "use strict";
      var n = function(e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return ""
        }
      };
      e.exports = function(e, o, a, s) {
        return o = o || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e ? r(i(e), (function(i) {
          var s = encodeURIComponent(n(i)) + a;
          return t(e[i]) ? r(e[i], (function(e) {
            return s + encodeURIComponent(n(e))
          })).join(o) : s + encodeURIComponent(n(e[i]))
        })).join(o) : s ? encodeURIComponent(n(s)) + a + encodeURIComponent(n(e)) : ""
      };
      var t = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };

      function r(e, n) {
        if (e.map) return e.map(n);
        for (var t = [], r = 0; r < e.length; r++) t.push(n(e[r], r));
        return t
      }
      var i = Object.keys || function(e) {
        var n = [];
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
      }
    },
    6444: (e, n, t) => {
      "use strict";
      t(6078), n.stringify = t(2896)
    },
    7038: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, {
        default: () => g
      });
      var r, i = t(4859),
        o = t(9929),
        a = t(2327),
        s = t.n(a),
        c = t(289),
        l = t(6444),
        d = (r = function(e, n) {
          return r = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, n) {
            e.__proto__ = n
          } || function(e, n) {
            for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
          }, r(e, n)
        }, function(e, n) {
          if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

          function t() {
            this.constructor = e
          }
          r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
        }),
        u = function() {
          return u = Object.assign || function(e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
              for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            return e
          }, u.apply(this, arguments)
        };
      const p = function(e) {
        function n(n) {
          var t = e.call(this, n) || this;
          return t.request = null, t.cancel = function() {
            t.request && t.request.cancel()
          }, t.handleFetchSuccess = function(e) {
            t.props.onSuccess && t.props.onSuccess(e), t.setState({
              html: e.html
            }, (function() {
              window.instgrm.Embeds.process(), t.props.onAfterRender && t.props.onAfterRender()
            }))
          }, t.handleFetchFailure = function(e) {
            clearTimeout(t.timer), t.props.onFailure && t.props.onFailure(e)
          }, t.createRequestPromise = function(e) {
            var n = {};
            return n.promise = new Promise((function(r, i) {
              var o = fetch(e, {
                headers: {
                  Authorization: "Bearer " + t.props.clientAccessToken
                }
              }).then((function(e) {
                return e.json()
              })).then((function(e) {
                return r(e)
              })).catch((function(e) {
                return i(e)
              }));
              return n.cancel = function() {
                return i(new Error("Cancelled"))
              }, o
            })), n
          }, t.state = {
            html: null
          }, t
        }
        return d(n, e), n.prototype.componentDidMount = function() {
          var e = this;
          window.instgrm ? this.fetchEmbed(this.getQueryParams(this.props)) : (this.props.injectScript && !document.getElementById("react-instagram-embed-script") && this.injectScript(), this.checkAPI().then((function() {
            e.fetchEmbed(e.getQueryParams(e.props))
          })))
        }, n.prototype.componentDidUpdate = function(e) {
          var n = this.props,
            t = n.url,
            r = n.clientAccessToken,
            i = n.hideCaption,
            o = n.maxWidth,
            a = n.containerTagName,
            s = n.className;
          e.url === t && e.clientAccessToken === r && e.hideCaption === i && e.maxWidth === o && e.containerTagName === a && e.className === s || (this.request.cancel(), this.fetchEmbed(this.getQueryParams(this.props)))
        }, n.prototype.componentWillUnmount = function() {
          this.cancel()
        }, n.prototype.render = function() {
          var e = this.props.containerTagName;
          return c.createElement(e, u({}, this.omitComponentProps(), {
            dangerouslySetInnerHTML: {
              __html: this.state.html || ""
            }
          }))
        }, n.prototype.fetchEmbed = function(e) {
          this.request = this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?" + e), this.props.onLoading && this.props.onLoading(), this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)
        }, n.prototype.omitComponentProps = function() {
          var e = this.props;
          return e.url, e.clientAccessToken, e.hideCaption, e.maxWidth, e.containerTagName, e.onLoading, e.onSuccess, e.onAfterRender, e.onFailure, e.protocol, e.injectScript,
            function(e, n) {
              var t = {};
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) n.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]])
              }
              return t
            }(e, ["url", "clientAccessToken", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"])
        }, n.prototype.injectScript = function() {
          var e = 0 === window.location.protocol.indexOf("file") ? this.props.protocol : "",
            n = document.createElement("script");
          n.async = n.defer = !0, n.src = e + "//platform.instagram.com/en_US/embeds.js", n.id = "react-instagram-embed-script";
          var t = document.body;
          t && t.appendChild(n)
        }, n.prototype.checkAPI = function() {
          var e = this;
          return new Promise((function(n) {
            ! function e(t) {
              t.timer = window.setTimeout((function() {
                window.instgrm ? (clearTimeout(t.timer), n()) : e(t)
              }), 20)
            }(e)
          }))
        }, n.prototype.getQueryParams = function(e) {
          var n = e.url,
            t = e.hideCaption,
            r = e.maxWidth,
            i = {
              url: n,
              hidecaption: t,
              omitscript: !0,
              fields: "html"
            };
          return "number" == typeof r && 320 <= r && r <= 658 && (i.maxwidth = r), (0, l.stringify)(i)
        }, n.defaultProps = {
          hideCaption: !1,
          containerTagName: "div",
          protocol: "https:",
          injectScript: !0
        }, n
      }(c.Component);
      var m = t(2687),
        f = t.n(m),
        h = t(9817);
      const v = e => {
          let {
            person: n
          } = e;
          const t = n.covid_people_images.length ? (0, h.jsx)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f8df05f07a2272ed6e83",
            children: n.covid_people_images.map((e => (0, h.jsx)("img", {
              src: e.img_full
            }, e.id)))
          }) : "";
          return (0, h.jsxs)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92ec3117c15dbfede4678c",
            children: [t, (0, h.jsx)("h2", {
              children: n.hero
            }), (0, h.jsx)("h3", {
              children: `${n.employee} - ${n.studio.name}`
            }), (0, h.jsx)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92fcd132fcc8b374da63a4",
              children: (0, h.jsx)(s(), {
                components: {
                  instagramembed: p
                },
                bindings: {
                  images: ""
                },
                jsx: n.description
              })
            })]
          }, n.id)
        },
        g = (0, o.withTranslations)((e => {
          let {
            t: n
          } = e;
          const {
            data: t
          } = (0, i.useQuery)(f());
          if (!t) return null;
          const {
            frontlineHeroes: r
          } = t;
          return (0, h.jsxs)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92d012bdff95af16800e32",
            children: [(0, h.jsx)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f3cbb9594fe59400fe54"
            }), (0, h.jsxs)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92d8cd58bb136a9cabdcf3",
              children: [(0, h.jsx)("h1", {
                children: n("covid-title")
              }), (0, h.jsx)("div", {
                className: "@rockstargames-sites-rockstargames-2f41663b9c098a92fbc031f0bd0eeb37f87f",
                dangerouslySetInnerHTML: {
                  __html: n("covid-desc")
                }
              }), (0, h.jsx)("div", {
                className: "@rockstargames-sites-rockstargames-2f41663b9c098a92ba600fcac7d5b30d0ff3",
                children: r.map(((e, n) => (0, h.jsx)(v, {
                  person: e
                }, n)))
              })]
            })]
          })
        }))
    },
    2687: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "FrontlineHeroes"
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
                value: "frontlineHeroes"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hero"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "employee"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "studio"
                  },
                  arguments: [],
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
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "covid_people_images"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "covid_person_id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "img_full"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 265
        }
      };

      function t(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && n.add(r.name.value)
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
        body: "query FrontlineHeroes($cache: Boolean = true) {\n    frontlineHeroes {\n        hero\n        employee\n        description\n        studio {\n            name\n        }\n        covid_people_images {\n            id: covid_person_id\n            img_full\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function i(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var r = e.definitions[t];
          if (r.name && r.name.value == n) return r
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), r[e.name.value] = n
        }
      })), e.exports = n, e.exports.FrontlineHeroes = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = r[n] || new Set,
          a = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return a.forEach((function(n) {
          var r = i(e, n);
          r && t.definitions.push(r)
        })), t
      }(n, "FrontlineHeroes")
    }
  }
]);
//# sourceMappingURL=cf424a1fcbf9bfadbd55.js.map