(self.webpackChunk_rockstargames_sites_rockstargames_downloads = self.webpackChunk_rockstargames_sites_rockstargames_downloads || []).push([
  [29], {
    29: (e, i, a) => {
      "use strict";
      a.r(i), a.d(i, {
        default: () => y
      });
      var n = a(932),
        l = a(859),
        d = a(657),
        t = a(929),
        s = a(976),
        c = a(205),
        r = a.n(c);
      const m = {
        index: "c8da5e192de3b2f0d90aabe3249729d15b02",
        sectionHeader: "c8da5e192de3b2f0f2faa00815518578c68e",
        sections: "c8da5e192de3b2f0a547f90348f175714fd3",
        grid: "c8da5e192de3b2f0a0ef8e1aa2d02f5ffc24",
        gridLarge: "c8da5e192de3b2f0b8474cb6668f1211bdda",
        card: "c8da5e192de3b2f0b034144ce798fcf650c7",
        downloadItem: "c8da5e192de3b2f0d34308477e4b49656d80",
        info: "c8da5e192de3b2f0adbab2664417a0ed7d5f",
        title: "c8da5e192de3b2f0da1792d577a30b2a5eb5",
        img: "c8da5e192de3b2f0ff2ba9f753b41e31c3de",
        label: "c8da5e192de3b2f0d36abe7e30df6da5334a",
        dropdownWrapper: "c8da5e192de3b2f0e7debcafd87087f5109a",
        list: "c8da5e192de3b2f0a35e046871f1f35a9a62",
        open: "c8da5e192de3b2f0b489cd10b9367ed3522b",
        item: "c8da5e192de3b2f0eeb8b8af7d551129bdfe",
        caret: "c8da5e192de3b2f0e0957b687cdd7da97aec",
        viewAll: "c8da5e192de3b2f0e5f4620d306947a52385",
        featured: "c8da5e192de3b2f0d69c388caa4ade94c70d",
        hero: "c8da5e192de3b2f0a65ba55e591bf70981c1",
        reddeadredemption2: "c8da5e192de3b2f0facc33b5bc397c627bc3",
        launcher: "c8da5e192de3b2f0d40d0170b22ec042c3d5",
        companion: "c8da5e192de3b2f0b98f6ff13a1a129ed290",
        "shark-cards": "c8da5e192de3b2f0f07cc6813d34099c704a",
        "gold-bars": "c8da5e192de3b2f0e28d780daeb6859945bd",
        featuredDesc: "c8da5e192de3b2f0f2ff69f41f6b24744700",
        text: "c8da5e192de3b2f0e59d1cc927f84e3710e3",
        series: "c8da5e192de3b2f0dbe3750fc036b6cbb39d",
        collectionTitle: "c8da5e192de3b2f0d3ee36dc2a9ddf1e1f35"
      };
      var o = a(160);
      const u = (0, t.withTranslations)((e => {
          let {
            links: i,
            collectionId: a,
            name: l,
            title: d,
            t
          } = e;
          const [c, u] = (0, n.useState)(!1), {
            sanitize: k
          } = r(), v = (0, n.useRef)(), g = e => {
            v.current.contains(e.target) || u(!1)
          };
          return (0, n.useEffect)((() => (c ? document.addEventListener("mousedown", g) : document.removeEventListener("mousedown", g), () => {
            document.removeEventListener("mousedown", g)
          })), [c]), (0, o.jsxs)("div", {
            ref: v,
            className: m.dropdownWrapper,
            children: [(0, o.jsx)("div", {
              className: m.header,
              onClick: () => u(!c),
              children: (0, o.jsxs)("div", {
                className: m.title,
                children: [(0, o.jsx)("p", {
                  children: l || t("Select Retailer")
                }), (0, o.jsx)("div", {
                  className: [m.caret, c ? m.open : ""].join(" ")
                })]
              })
            }), (0, o.jsx)("ul", {
              className: [m.list, c ? m.open : ""].join(" "),
              children: [11, 10, 12, 13, 14, 15].includes(a) ? (0, o.jsx)("li", {
                className: m.item,
                dangerouslySetInnerHTML: {
                  __html: k(i, {
                    ADD_ATTR: ["target"]
                  })
                }
              }) : i.map((e => {
                if ("thumb" !== e.label) return (0, o.jsx)("li", {
                  className: m.item,
                  children: (0, o.jsx)(s.A, {
                    target: "_blank",
                    to: e.src,
                    "data-gtm-category": "Downloads",
                    "data-gtm-action": `Collection : ${d}`,
                    "data-gtm-label": e.src,
                    children: e.label
                  })
                }, e.id)
              }))
            })]
          })
        })),
        k = (0, t.withTranslations)((e => {
          let {
            collection: i,
            games: a,
            homepage: n = !1,
            t: l
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.results.map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.fob_640})`,
                    "--aspect-ratio": "64/79"
                  }
                }), (0, o.jsx)(u, {
                  collectionId: i.id,
                  links: e.downloads_game.platform
                })]
              }, e.fob_640)))
            }), n ? (0, o.jsx)("div", {
              className: m.viewAll,
              children: (0, o.jsx)(s.Button, {
                role: "link",
                "aria-label": i.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": i.title,
                to: "/downloads?collection=11",
                context: "secondary",
                children: l("View All")
              })
            }) : ""]
          })
        })),
        v = (0, t.withTranslations)((e => {
          let {
            collection: i,
            homepage: a = !1,
            t: n
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.apps.slice(0, a ? 4 : 100).map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, o.jsx)(u, {
                  collectionId: i.id,
                  links: e.platform
                })]
              }, e.id)))
            }), a ? (0, o.jsx)("div", {
              className: m.viewAll,
              children: (0, o.jsx)(s.Button, {
                role: "link",
                "aria-label": i.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": i.title,
                to: "/downloads?collection=10",
                context: "secondary",
                children: n("View All")
              })
            }) : ""]
          })
        })),
        g = e => {
          let {
            collection: i
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.gold_bars.map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, o.jsx)(u, {
                  collectionId: i.id,
                  links: e.platform
                })]
              }, e.id)))
            })]
          })
        },
        N = e => {
          let {
            collection: i
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.patches.map((e => (0, o.jsx)(s.A, {
                to: e.support_url,
                target: "_blank",
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection : Patches",
                "data-gtm-label": e.game.title,
                children: (0, o.jsx)("div", {
                  className: m.card,
                  children: (0, o.jsx)("div", {
                    className: m.img,
                    style: {
                      backgroundImage: `url(${e.game.fob_640})`,
                      "--aspect-ratio": "64/79"
                    }
                  })
                })
              }, e.support_url)))
            })]
          })
        },
        p = e => {
          let {
            collection: i
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.shark_cards.map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "7/5"
                  }
                }), (0, o.jsxs)("div", {
                  className: m.label,
                  children: [(0, o.jsx)("h5", {
                    children: e.title
                  }), (0, o.jsx)("p", {
                    children: e.desc
                  })]
                }), (0, o.jsx)(u, {
                  collectionId: i.id,
                  links: e.platform
                })]
              }, e.title)))
            })]
          })
        },
        h = e => {
          let {
            collection: i,
            imgRatio: a
          } = e;
          const n = i.title_slug;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.series.map((e => (0, o.jsx)(s.A, {
                to: `/downloads?collection=${i.id}&series=${e.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${i.title}`,
                "data-gtm-label": e.title,
                children: (0, o.jsxs)("div", {
                  className: m.card,
                  children: [(0, o.jsx)("div", {
                    className: m.img,
                    style: {
                      backgroundImage: `url(${e?.musics?.[0]?.thumb??e?.dlcs?.[0]?.thumb??e.preview})`,
                      "--aspect-ratio": a
                    }
                  }), ["music", "dlc"].includes(n) ? "" : (0, o.jsx)("h5", {
                    className: m.title,
                    children: e.title
                  })]
                })
              }, e.id)))
            })]
          })
        },
        f = e => {
          let {
            collection: i,
            games: a = []
          } = e;
          const n = [6, 10, 15].includes(i.id) ? "1/1" : [9, 11, 12, 13].includes(i.id) ? "64/79" : [14].includes(i.id) ? "/5" : "16/9";
          switch (i.title_slug) {
            case "apps":
              return (0, o.jsx)(v, {
                collection: i
              });
            case "gamespcmac":
              return (0, o.jsx)(k, {
                collection: i,
                games: a
              });
            case "goldbars":
              return (0, o.jsx)(g, {
                collection: i
              });
            case "patches":
              return (0, o.jsx)(N, {
                collection: i
              });
            case "sharkcards":
              return (0, o.jsx)(p, {
                collection: i
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, o.jsx)(h, {
                collection: i,
                imgRatio: n
              })
          }
        },
        b = e => {
          let {
            collection: i
          } = e;
          return (0, o.jsx)(s.A, {
            to: `/downloads?collection=${i.id}`,
            "data-gtm-category": "Downloads",
            "data-gtm-action": "Collection : Misc",
            "data-gtm-label": i.title,
            children: (0, o.jsxs)("div", {
              className: m.card,
              children: [(0, o.jsx)("div", {
                className: m.img,
                style: {
                  "--aspect-ratio": "1/1",
                  backgroundImage: `url(${i.preview})`
                }
              }), (0, o.jsx)("h5", {
                className: m.title,
                children: i.title
              })]
            })
          })
        },
        w = (0, t.withTranslations)((e => {
          let {
            collections: i,
            t: a
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a("Miscellaneous")
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.map((e => (0, o.jsx)(b, {
                collection: e
              }, e.id)))
            })]
          })
        })),
        x = (0, t.withTranslations)((e => {
          let {
            data: {
              featured: i,
              game: a
            },
            t: n
          } = e;
          return (0, o.jsxs)("div", {
            className: m.featured,
            children: [(0, o.jsxs)("div", {
              className: [m.gridLarge, m.hero].join(" "),
              children: [(0, o.jsx)("div", {
                style: {
                  "--aspect-ratio": "1/1"
                },
                className: [m.img, m[a.title_slug]].join(" ")
              }), (0, o.jsxs)("div", {
                className: m.featuredDesc,
                children: [(0, o.jsxs)("div", {
                  className: m.text,
                  children: [(0, o.jsx)("h2", {
                    children: a.title
                  }), (0, o.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: a.description
                    }
                  })]
                }), (0, o.jsx)(s.Button, {
                  to: "https://socialclub.rockstargames.com/store/rdr2Ultimate",
                  target: "_blank",
                  "data-gtm-category": "Downloads",
                  "data-gtm-action": "Featured Item",
                  "data-gtm-label": " https://socialclub.rockstargames.com/store/rdr2Ultimate",
                  children: n("Download Now")
                })]
              })]
            }), (0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: n("Featured Downloads")
            }), (0, o.jsx)("div", {
              className: m.gridLarge,
              children: i.map((e => (0, o.jsx)(s.A, {
                to: e.href,
                target: e.href.startsWith("http") ? "_blank" : "_self",
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Featured: ${e.title_key}`,
                "data-gtm-label": e.href,
                children: (0, o.jsxs)("div", {
                  className: m.card,
                  children: [(0, o.jsx)("div", {
                    style: {
                      "--aspect-ratio": "780/373"
                    },
                    className: [m[e.name], m.img].join(" ")
                  }), (0, o.jsx)("h5", {
                    className: m.title,
                    children: n(e.title_key)
                  })]
                })
              }, e.name)))
            })]
          })
        })),
        S = (0, t.withTranslations)((e => {
          let {
            collection: i,
            imgRatio: a,
            t: n
          } = e;
          const l = i.title_slug;
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("div", {
              className: [m.sectionHeader, m.series].join(" "),
              children: [(0, o.jsx)("h4", {
                className: m.collectionTitle,
                children: `${i.title}`
              }), (0, o.jsx)("h2", {
                className: m.seriesTitle,
                children: `${i?.series?.[0]?.title??""}`
              })]
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.series.map((e => {
                let {
                  groups: d
                } = e;
                return d.map((e => (0, o.jsxs)("div", {
                  className: m.downloadItem,
                  children: [(0, o.jsx)("div", {
                    className: m.img,
                    style: {
                      backgroundImage: `url(${e?.thumb??e?.preview})`,
                      "--aspect-ratio": a
                    }
                  }), (0, o.jsxs)("div", {
                    className: m.label,
                    children: [(0, o.jsx)("h5", {
                      children: n(e.label)
                    }), (0, o.jsx)(u, {
                      links: "dlc" === l || "music" === l ? e.platform : "gamescreensaver" === l ? e.screensavers : "gamewallpaper" === l || "rockstarwallpaper" === l ? e.wallpapers : e.avatars,
                      collectionId: i.id,
                      title: i.series[0].title,
                      name: ["gamewallpaper", "avatars", "rockstarwallpaper"].includes(l) ? n("Select Size") : ["gamescreensaver"].includes(l) ? n("Select") : ""
                    })]
                  })]
                }, e.id)))
              }))
            })]
          })
        }));
      var j = a(94);
      const y = (0, t.withTranslations)((e => {
        let {
          t: i
        } = e;
        const {
          setBreadcrumb: a
        } = (0, d.useRockstarLocalState)(), s = (0, t.useQueryParams)(), [c, r] = (0, n.useState)(null), [u, g] = (0, n.useState)(null), {
          loading: N,
          refetch: p
        } = (0, l.useQuery)(j.Downloads, {
          variables: c,
          skip: !0,
          autoSetLoading: !0
        });
        if ((0, n.useEffect)((() => {
            g(null);
            const e = null !== s.get("series"),
              i = {
                seriesId: Number(s.get("series")),
                collectionId: Number(s.get("collection")),
                numAppsToGet: "10" === s.get("collection") ? 100 : 4,
                numGamesToGet: "11" === s.get("collection") ? 100 : 4,
                withIndex: null === s.get("collection") && null === s.get("series"),
                withGames: null === s.get("collection") || "11" === s.get("collection"),
                withCollection: null !== s.get("collection"),
                withSeries: e,
                withDlcs: "12" === s.get("collection"),
                withGroups: e,
                withMusics: "13" === s.get("collection"),
                withGoldbars: "15" === s.get("collection"),
                withApps: "10" === s.get("collection"),
                withPatches: "9" === s.get("collection"),
                withSharkCards: "14" === s.get("collection")
              };
            r(i)
          }), [s.get("series"), s.get("collection"), g]), (0, n.useEffect)((() => {
            let e = [{
              href: "/downloads",
              title: i("Downloads")
            }];
            return u?.collection?.id && c.withSeries && (e = [...e, {
              href: `/downloads?collection=${u.collection.id}`,
              title: u.collection.title
            }]), a(e), () => {
              a()
            }
          }), [u, c]), (0, n.useEffect)((() => {
            c && (async () => {
              const e = await p(c);
              g(e.data)
            })()
          }), [p, c]), !u || N) return null;
        if (c.withIndex) return (0, o.jsx)("div", {
          className: m.index,
          children: (0, o.jsxs)("div", {
            className: m.sections,
            children: [(0, o.jsx)(x, {
              data: u
            }), (0, o.jsx)(k, {
              homepage: !0,
              games: u.pc_mac_games,
              collection: u.collections.find((e => "gamespcmac" === e.title_slug))
            }), (0, o.jsx)(v, {
              homepage: !0,
              collection: u.collections.find((e => "apps" === e.title_slug))
            }), (0, o.jsx)(w, {
              collections: u.collections.filter((e => !["apps", "gamespcmac", "sharkcards"].includes(e.title_slug)))
            })]
          })
        });
        if (c.withSeries) {
          const e = [6, 12, 13].includes(c.collectionId) ? "1/1" : "16/9";
          return (0, o.jsx)("div", {
            className: m.index,
            children: (0, o.jsx)(S, {
              collection: u.collection,
              imgRatio: e
            })
          })
        }
        return c.withCollection ? (0, o.jsx)("div", {
          className: m.index,
          children: (0, o.jsx)(f, {
            collection: u.collection,
            games: u.pc_mac_games
          })
        }) : null
      }))
    },
    94: e => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Downloads"
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
                value: "collectionId"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "seriesId"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numGamesToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "numAppsToGet"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            defaultValue: {
              kind: "IntValue",
              value: "4"
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withIndex"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withCollection"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSeries"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGames"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withDlcs"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMusics"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGroups"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withGoldbars"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withApps"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withPatches"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withSharkCards"
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
                value: "game"
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
                  value: "id"
                },
                value: {
                  kind: "IntValue",
                  value: "912"
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
                      value: "withIndex"
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
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
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
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "fob_640"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "featured"
              },
              name: {
                kind: "Name",
                value: "featuredDownloads"
              },
              arguments: [],
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
                      value: "withIndex"
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
                    value: "title_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "href"
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
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collections"
              },
              name: {
                kind: "Name",
                value: "downloadsCollections"
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
                  value: "numAppsToGet"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numAppsToGet"
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
                      value: "withIndex"
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
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preview"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
                  },
                  arguments: [],
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
                          value: "withSeries"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "pc_mac_games"
              },
              name: {
                kind: "Name",
                value: "games"
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
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "numGamesToGet"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "pcAndDownloadable",
                  block: !1
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
                      value: "withGames"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "downloads_game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "collection"
              },
              name: {
                kind: "Name",
                value: "downloadsCollection"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "collectionId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "collectionId"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "seriesId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "seriesId"
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
                      value: "withCollection"
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
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "apps"
                  },
                  arguments: [],
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
                          value: "withApps"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "gold_bars"
                  },
                  arguments: [],
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
                          value: "withGoldbars"
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
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "patches"
                  },
                  arguments: [],
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
                          value: "withPatches"
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
                        value: "support_url"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "fob_640"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "series"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "musics"
                      },
                      arguments: [],
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
                              value: "withMusics"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "dlcs"
                      },
                      arguments: [],
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
                              value: "withDlcs"
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
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "groups"
                      },
                      arguments: [],
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
                              value: "withGroups"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "thumb"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "preview"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "platform"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "screensavers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "avatars"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "wallpapers"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "label"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "src"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "shark_cards"
                  },
                  arguments: [],
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
                          value: "withSharkCards"
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
                        value: "preview"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "desc"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "__typename"
                  },
                  arguments: [],
                  directives: [{
                    kind: "Directive",
                    name: {
                      kind: "Name",
                      value: "skip"
                    },
                    arguments: [{
                      kind: "Argument",
                      name: {
                        kind: "Name",
                        value: "if"
                      },
                      value: {
                        kind: "BooleanValue",
                        value: !0
                      }
                    }]
                  }]
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 3360
        }
      };

      function a(e, i) {
        if ("FragmentSpread" === e.kind) i.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && i.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, i)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, i)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, i)
        }))
      }
      i.loc.source = {
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: 912) @include(if: $withIndex) {\n        id\n        title\n        description\n        title_slug\n        fob_640\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pc_mac_games: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title_slug\n            fob_640\n            downloads_game {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                fob_640\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function l(e, i) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == i) return n
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var i = new Set;
          a(e, i), n[e.name.value] = i
        }
      })), e.exports = i, e.exports.Downloads = function(e, i) {
        var a = {
          kind: e.kind,
          definitions: [l(e, i)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var d = n[i] || new Set,
          t = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var c = s;
          s = new Set, c.forEach((function(e) {
            t.has(e) || (t.add(e), (n[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(i) {
          var n = l(e, i);
          n && a.definitions.push(n)
        })), a
      }(i, "Downloads")
    }
  }
]);