(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [536], {
    2536: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, {
        default: () => y
      });
      var i, r = t(4859),
        o = t(9929),
        a = t(7628),
        s = t.n(a),
        c = t(6035),
        l = t(3281),
        d = (i = function(e, n) {
          return i = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, n) {
            e.__proto__ = n
          } || function(e, n) {
            for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
          }, i(e, n)
        }, function(e, n) {
          if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

          function t() {
            this.constructor = e
          }
          i(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
        }),
        u = function() {
          return u = Object.assign || function(e) {
            for (var n, t = 1, i = arguments.length; t < i; t++)
              for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
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
            return n.promise = new Promise((function(i, r) {
              var o = fetch(e, {
                headers: {
                  Authorization: "Bearer " + t.props.clientAccessToken
                }
              }).then((function(e) {
                return e.json()
              })).then((function(e) {
                return i(e)
              })).catch((function(e) {
                return r(e)
              }));
              return n.cancel = function() {
                return r(new Error("Cancelled"))
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
            i = n.clientAccessToken,
            r = n.hideCaption,
            o = n.maxWidth,
            a = n.containerTagName,
            s = n.className;
          e.url === t && e.clientAccessToken === i && e.hideCaption === r && e.maxWidth === o && e.containerTagName === a && e.className === s || (this.request.cancel(), this.fetchEmbed(this.getQueryParams(this.props)))
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
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (t[i[r]] = e[i[r]])
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
            i = e.maxWidth,
            r = {
              url: n,
              hidecaption: t,
              omitscript: !0,
              fields: "html"
            };
          return "number" == typeof i && 320 <= i && i <= 658 && (r.maxwidth = i), (0, l.stringify)(r)
        }, n.defaultProps = {
          hideCaption: !1,
          containerTagName: "div",
          protocol: "https:",
          injectScript: !0
        }, n
      }(c.Component);
      var m = t(2687),
        f = t.n(m),
        h = t(6160);
      const v = e => {
          let {
            person: n
          } = e;
          const t = n.covid_people_images.length ? (0, h.jsx)("div", {
            className: "_7185b668a703e593f8df05f07a2272ed6e83",
            children: n.covid_people_images.map((e => (0, h.jsx)("img", {
              src: e.img_full
            }, e.id)))
          }) : "";
          return (0, h.jsxs)("div", {
            className: "_7185b668a703e593ec3117c15dbfede4678c",
            children: [t, (0, h.jsx)("h2", {
              children: n.hero
            }), (0, h.jsx)("h3", {
              children: `${n.employee} - ${n.studio.name}`
            }), (0, h.jsx)("div", {
              className: "_7185b668a703e593fcd132fcc8b374da63a4",
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
        y = (0, o.withTranslations)((e => {
          let {
            t: n
          } = e;
          const {
            data: t
          } = (0, r.useQuery)(f());
          if (!t) return null;
          const {
            frontlineHeroes: i
          } = t;
          return (0, h.jsxs)("div", {
            className: "_7185b668a703e593d012bdff95af16800e32",
            children: [(0, h.jsx)("div", {
              className: "_7185b668a703e593f3cbb9594fe59400fe54"
            }), (0, h.jsxs)("div", {
              className: "_7185b668a703e593d8cd58bb136a9cabdcf3",
              children: [(0, h.jsx)("h1", {
                children: n("covid-title")
              }), (0, h.jsx)("div", {
                className: "_7185b668a703e593fbc031f0bd0eeb37f87f",
                dangerouslySetInnerHTML: {
                  __html: n("covid-desc")
                }
              }), (0, h.jsx)("div", {
                className: "_7185b668a703e593ba600fcac7d5b30d0ff3",
                children: i.map(((e, n) => (0, h.jsx)(v, {
                  person: e
                }, n)))
              })]
            })]
          })
        }))
    },
    1390: e => {
      "use strict";

      function n(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }
      e.exports = function(e, i, r, o) {
        i = i || "&", r = r || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var s = /\+/g;
        e = e.split(i);
        var c = 1e3;
        o && "number" == typeof o.maxKeys && (c = o.maxKeys);
        var l = e.length;
        c > 0 && l > c && (l = c);
        for (var d = 0; d < l; ++d) {
          var u, p, m, f, h = e[d].replace(s, "%20"),
            v = h.indexOf(r);
          v >= 0 ? (u = h.substr(0, v), p = h.substr(v + 1)) : (u = h, p = ""), m = decodeURIComponent(u), f = decodeURIComponent(p), n(a, m) ? t(a[m]) ? a[m].push(f) : a[m] = [a[m], f] : a[m] = f
        }
        return a
      };
      var t = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
    },
    6141: e => {
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
        return o = o || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e ? i(r(e), (function(r) {
          var s = encodeURIComponent(n(r)) + a;
          return t(e[r]) ? i(e[r], (function(e) {
            return s + encodeURIComponent(n(e))
          })).join(o) : s + encodeURIComponent(n(e[r]))
        })).join(o) : s ? encodeURIComponent(n(s)) + a + encodeURIComponent(n(e)) : ""
      };
      var t = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };

      function i(e, n) {
        if (e.map) return e.map(n);
        for (var t = [], i = 0; i < e.length; i++) t.push(n(e[i], i));
        return t
      }
      var r = Object.keys || function(e) {
        var n = [];
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
      }
    },
    3281: (e, n, t) => {
      "use strict";
      t(1390), n.stringify = t(6141)
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
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
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
      var i = {};

      function r(e, n) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          t(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.FrontlineHeroes = function(e, n) {
        var t = {
          kind: e.kind,
          definitions: [r(e, n)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = i[n] || new Set,
          a = new Set,
          s = new Set;
        for (o.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            a.has(e) || (a.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return a.forEach((function(n) {
          var i = r(e, n);
          i && t.definitions.push(i)
        })), t
      }(n, "FrontlineHeroes")
    }
  }
]);