(self.webpackChunk_rockstargames_sites_rockstargames_downloads = self.webpackChunk_rockstargames_sites_rockstargames_downloads || []).push([
  [250], {
    250: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        default: () => y
      });
      var n = i(927),
        l = i(859),
        t = i(657),
        s = i(929),
        d = i(976),
        r = i(885),
        c = i.n(r);
      const m = {
        index: "rockstargames-sites-rockstargames-downloadsed0f965d4863ef72030b9c9340b437f6",
        sectionHeader: "rockstargames-sites-rockstargames-downloadsfdf441763609bfdc6f69298f5995da70",
        sections: "rockstargames-sites-rockstargames-downloadsacf438d1a843d6f0cec22a63e895257b",
        grid: "rockstargames-sites-rockstargames-downloadsaa0184ceee1a8ababa8eecbd64dd7156",
        gridLarge: "rockstargames-sites-rockstargames-downloadse20fc95736f8e4427afe967a97afc491",
        card: "rockstargames-sites-rockstargames-downloadsbc64ad87be0adc7a06282d7801c893fd",
        downloadItem: "rockstargames-sites-rockstargames-downloadsd62cf2413dbcaa6b8bf2756cfb695509",
        info: "rockstargames-sites-rockstargames-downloadsf42d262bfa89477f865c8173e66022f6",
        title: "rockstargames-sites-rockstargames-downloadsee6ad5941b34f2a12d300ef2368423c5",
        img: "rockstargames-sites-rockstargames-downloadsd07edad6f1525d075b213bb316186420",
        label: "rockstargames-sites-rockstargames-downloadsfb8ac9439c78426a0140ee099ea33002",
        dropdownWrapper: "rockstargames-sites-rockstargames-downloadsbb1bbcc881d580e99efcf8e33e777b22",
        list: "rockstargames-sites-rockstargames-downloadsc6e88bf02d7b423fb82689fa9a31889b",
        open: "rockstargames-sites-rockstargames-downloadsf2d57daef4e81e109ce9020f9053008f",
        item: "rockstargames-sites-rockstargames-downloadsc52328930434e0870534f17b61fb8a9e",
        caret: "rockstargames-sites-rockstargames-downloadsc268bf0aa04635bbd796094d4ec60aa7",
        viewAll: "rockstargames-sites-rockstargames-downloadsb8af3492282e3baae6f81491853cc98b",
        featured: "rockstargames-sites-rockstargames-downloadsa7fff4c56194e0df4d2eac72331a281c",
        hero: "rockstargames-sites-rockstargames-downloadsc1b8b0e50c272a038bec07baa988d833",
        reddeadredemption2: "rockstargames-sites-rockstargames-downloadsb4e907dae9617525d8eddc6248097ed0",
        launcher: "rockstargames-sites-rockstargames-downloadsc90eb8417c19441eb196d9e941397a85",
        companion: "rockstargames-sites-rockstargames-downloadsffa8fcc8ee1ba7368da0e5cf04a11c6f",
        "shark-cards": "rockstargames-sites-rockstargames-downloadsfa2436581864d414a4f6f7c69457b098",
        "gold-bars": "rockstargames-sites-rockstargames-downloadsdb0c9e7735300c6ee6c9a7438ca56c78",
        featuredDesc: "rockstargames-sites-rockstargames-downloadse931040df13c29c73e01769d7833808e",
        text: "rockstargames-sites-rockstargames-downloadsd2b92a096e1128c2304435a9a4244cac",
        series: "rockstargames-sites-rockstargames-downloadsafcc30ca4253a012887dce9b96be02a8",
        collectionTitle: "rockstargames-sites-rockstargames-downloadsa25ce36c4853860a4a08a1c1153a2591"
      };
      var o = i(705);
      const u = (0, s.withTranslations)((e => {
          let {
            links: a,
            collectionId: i,
            name: l,
            title: t,
            t: s
          } = e;
          const [r, u] = (0, n.useState)(!1), {
            sanitize: k
          } = c(), v = (0, n.useRef)(), g = e => {
            v.current.contains(e.target) || u(!1)
          };
          return (0, n.useEffect)((() => (r ? document.addEventListener("mousedown", g) : document.removeEventListener("mousedown", g), () => {
            document.removeEventListener("mousedown", g)
          })), [r]), (0, o.jsxs)("div", {
            ref: v,
            className: m.dropdownWrapper,
            children: [(0, o.jsx)("div", {
              className: m.header,
              onClick: () => u(!r),
              children: (0, o.jsxs)("div", {
                className: m.title,
                children: [(0, o.jsx)("p", {
                  children: l || s("Select Retailer")
                }), (0, o.jsx)("div", {
                  className: [m.caret, r ? m.open : ""].join(" ")
                })]
              })
            }), (0, o.jsx)("ul", {
              className: [m.list, r ? m.open : ""].join(" "),
              children: [11, 10, 12, 13, 14, 15].includes(i) ? (0, o.jsx)("li", {
                className: m.item,
                dangerouslySetInnerHTML: {
                  __html: k(a, {
                    ADD_ATTR: ["target"]
                  })
                }
              }) : a.map((e => {
                if ("thumb" !== e.label) return (0, o.jsx)("li", {
                  className: m.item,
                  children: (0, o.jsx)(d.A, {
                    target: "_blank",
                    to: e.src,
                    "data-gtm-category": "Downloads",
                    "data-gtm-action": `Collection : ${t}`,
                    "data-gtm-label": e.src,
                    children: e.label
                  })
                }, e.id)
              }))
            })]
          })
        })),
        k = (0, s.withTranslations)((e => {
          let {
            collection: a,
            games: i,
            homepage: n = !1,
            t: l
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: i.results.map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.fob_640})`,
                    "--aspect-ratio": "64/79"
                  }
                }), (0, o.jsx)(u, {
                  collectionId: a.id,
                  links: e.downloads_game.platform
                })]
              }, e.fob_640)))
            }), n ? (0, o.jsx)("div", {
              className: m.viewAll,
              children: (0, o.jsx)(d.Button, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=11",
                context: "secondary",
                children: l("View All")
              })
            }) : ""]
          })
        })),
        v = (0, s.withTranslations)((e => {
          let {
            collection: a,
            homepage: i = !1,
            t: n
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.apps.slice(0, i ? 4 : 100).map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, o.jsx)(u, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            }), i ? (0, o.jsx)("div", {
              className: m.viewAll,
              children: (0, o.jsx)(d.Button, {
                role: "link",
                "aria-label": a.title,
                "data-gtm-category": "Downloads",
                "data-gtm-action": "Collection: View All",
                "data-gtm-label": a.title,
                to: "/downloads?collection=10",
                context: "secondary",
                children: n("View All")
              })
            }) : ""]
          })
        })),
        g = e => {
          let {
            collection: a
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.gold_bars.map((e => (0, o.jsxs)("div", {
                className: m.downloadItem,
                children: [(0, o.jsx)("div", {
                  className: m.img,
                  style: {
                    backgroundImage: `url(${e.preview})`,
                    "--aspect-ratio": "1/1"
                  }
                }), (0, o.jsx)(u, {
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.id)))
            })]
          })
        },
        N = e => {
          let {
            collection: a
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.patches.map((e => (0, o.jsx)(d.A, {
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
            collection: a
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.shark_cards.map((e => (0, o.jsxs)("div", {
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
                  collectionId: a.id,
                  links: e.platform
                })]
              }, e.title)))
            })]
          })
        },
        h = e => {
          let {
            collection: a,
            imgRatio: i
          } = e;
          const n = a.title_slug;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: a.title
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.series.map((e => (0, o.jsx)(d.A, {
                to: `/downloads?collection=${a.id}&series=${e.id}`,
                "data-gtm-category": "Downloads",
                "data-gtm-action": `Collection : ${a.title}`,
                "data-gtm-label": e.title,
                children: (0, o.jsxs)("div", {
                  className: m.card,
                  children: [(0, o.jsx)("div", {
                    className: m.img,
                    style: {
                      backgroundImage: `url(${e?.musics?.[0]?.thumb??e?.dlcs?.[0]?.thumb??e.preview})`,
                      "--aspect-ratio": i
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
            collection: a,
            games: i = []
          } = e;
          const n = [6, 10, 15].includes(a.id) ? "1/1" : [9, 11, 12, 13].includes(a.id) ? "64/79" : [14].includes(a.id) ? "/5" : "16/9";
          switch (a.title_slug) {
            case "apps":
              return (0, o.jsx)(v, {
                collection: a
              });
            case "gamespcmac":
              return (0, o.jsx)(k, {
                collection: a,
                games: i
              });
            case "goldbars":
              return (0, o.jsx)(g, {
                collection: a
              });
            case "patches":
              return (0, o.jsx)(N, {
                collection: a
              });
            case "sharkcards":
              return (0, o.jsx)(p, {
                collection: a
              });
            case "dlc":
            case "music":
            case "gamescreensaver":
            case "avatars":
            case "gamewallpaper":
            case "rockstarwallpaper":
              return (0, o.jsx)(h, {
                collection: a,
                imgRatio: n
              })
          }
        },
        b = e => {
          let {
            collection: a
          } = e;
          return (0, o.jsx)(d.A, {
            to: `/downloads?collection=${a.id}`,
            "data-gtm-category": "Downloads",
            "data-gtm-action": "Collection : Misc",
            "data-gtm-label": a.title,
            children: (0, o.jsxs)("div", {
              className: m.card,
              children: [(0, o.jsx)("div", {
                className: m.img,
                style: {
                  "--aspect-ratio": "1/1",
                  backgroundImage: `url(${a.preview})`
                }
              }), (0, o.jsx)("h5", {
                className: m.title,
                children: a.title
              })]
            })
          })
        },
        w = (0, s.withTranslations)((e => {
          let {
            collections: a,
            t: i
          } = e;
          return (0, o.jsxs)("div", {
            className: m.collection,
            children: [(0, o.jsx)("h2", {
              className: m.sectionHeader,
              children: i("Miscellaneous")
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.map((e => (0, o.jsx)(b, {
                collection: e
              }, e.id)))
            })]
          })
        })),
        x = (0, s.withTranslations)((e => {
          let {
            data: {
              featured: a,
              game: i
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
                className: [m.img, m[i.title_slug]].join(" ")
              }), (0, o.jsxs)("div", {
                className: m.featuredDesc,
                children: [(0, o.jsxs)("div", {
                  className: m.text,
                  children: [(0, o.jsx)("h2", {
                    children: i.title
                  }), (0, o.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.description
                    }
                  })]
                }), (0, o.jsx)(d.Button, {
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
              children: a.map((e => (0, o.jsx)(d.A, {
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
        S = (0, s.withTranslations)((e => {
          let {
            collection: a,
            imgRatio: i,
            t: n
          } = e;
          const l = a.title_slug;
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("div", {
              className: [m.sectionHeader, m.series].join(" "),
              children: [(0, o.jsx)("h4", {
                className: m.collectionTitle,
                children: `${a.title}`
              }), (0, o.jsx)("h2", {
                className: m.seriesTitle,
                children: `${a?.series?.[0]?.title??""}`
              })]
            }), (0, o.jsx)("div", {
              className: m.grid,
              children: a.series.map((e => {
                let {
                  groups: t
                } = e;
                return t.map((e => (0, o.jsxs)("div", {
                  className: m.downloadItem,
                  children: [(0, o.jsx)("div", {
                    className: m.img,
                    style: {
                      backgroundImage: `url(${e?.thumb??e?.preview})`,
                      "--aspect-ratio": i
                    }
                  }), (0, o.jsxs)("div", {
                    className: m.label,
                    children: [(0, o.jsx)("h5", {
                      children: n(e.label)
                    }), (0, o.jsx)(u, {
                      links: "dlc" === l || "music" === l ? e.platform : "gamescreensaver" === l ? e.screensavers : "gamewallpaper" === l || "rockstarwallpaper" === l ? e.wallpapers : e.avatars,
                      collectionId: a.id,
                      title: a.series[0].title,
                      name: ["gamewallpaper", "avatars", "rockstarwallpaper"].includes(l) ? n("Select Size") : ["gamescreensaver"].includes(l) ? n("Select") : ""
                    })]
                  })]
                }, e.id)))
              }))
            })]
          })
        }));
      var j = i(869);
      const y = (0, s.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, t.useRockstarLocalState)(), d = (0, s.useQueryParams)(), [r, c] = (0, n.useState)(null), [u, g] = (0, n.useState)(null), {
          loading: N,
          refetch: p
        } = (0, l.useQuery)(j.Downloads, {
          variables: r,
          skip: !0,
          autoSetLoading: !0
        });
        if ((0, n.useEffect)((() => {
            g(null);
            const e = null !== d.get("series"),
              a = {
                seriesId: Number(d.get("series")),
                collectionId: Number(d.get("collection")),
                numAppsToGet: "10" === d.get("collection") ? 100 : 4,
                numGamesToGet: "11" === d.get("collection") ? 100 : 4,
                withIndex: null === d.get("collection") && null === d.get("series"),
                withGames: null === d.get("collection") || "11" === d.get("collection"),
                withCollection: null !== d.get("collection"),
                withSeries: e,
                withDlcs: "12" === d.get("collection"),
                withGroups: e,
                withMusics: "13" === d.get("collection"),
                withGoldbars: "15" === d.get("collection"),
                withApps: "10" === d.get("collection"),
                withPatches: "9" === d.get("collection"),
                withSharkCards: "14" === d.get("collection")
              };
            c(a)
          }), [d.get("series"), d.get("collection"), g]), (0, n.useEffect)((() => {
            let e = [{
              href: "/downloads",
              title: a("Downloads")
            }];
            return u?.collection?.id && r.withSeries && (e = [...e, {
              href: `/downloads?collection=${u.collection.id}`,
              title: u.collection.title
            }]), i(e), () => {
              i()
            }
          }), [u, r]), (0, n.useEffect)((() => {
            r && (async () => {
              const e = await p(r);
              g(e.data)
            })()
          }), [p, r]), !u || N) return null;
        if (r.withIndex) return (0, o.jsx)("div", {
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
        if (r.withSeries) {
          const e = [6, 12, 13].includes(r.collectionId) ? "1/1" : "16/9";
          return (0, o.jsx)("div", {
            className: m.index,
            children: (0, o.jsx)(S, {
              collection: u.collection,
              imgRatio: e
            })
          })
        }
        return r.withCollection ? (0, o.jsx)("div", {
          className: m.index,
          children: (0, o.jsx)(f, {
            collection: u.collection,
            games: u.pc_mac_games
          })
        }) : null
      }))
    },
    869: e => {
      var a = {
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: 'query Downloads(\n    $locale: String!\n    $collectionId: Int\n    $seriesId: Int\n    $numGamesToGet: Int = 4\n    $numAppsToGet: Int = 4\n    $withIndex: Boolean!\n    $withCollection: Boolean!\n    $withSeries: Boolean!\n    $withGames: Boolean!\n    $withDlcs: Boolean!\n    $withMusics: Boolean!\n    $withGroups: Boolean!\n    $withGoldbars: Boolean!\n    $withApps: Boolean!\n    $withPatches: Boolean!\n    $withSharkCards: Boolean!\n) {\n    game(locale: $locale, id: 912) @include(if: $withIndex) {\n        id\n        title\n        description\n        title_slug\n        fob_640\n    }\n    featured: featuredDownloads @include(if: $withIndex) {\n        title_key\n        href\n        name\n    }\n    collections: downloadsCollections(\n        locale: $locale\n        numAppsToGet: $numAppsToGet\n    ) @include(if: $withIndex) {\n        id\n        title\n        title_slug\n        preview\n        apps {\n            id\n            platform\n            preview\n        }\n        gold_bars {\n            platform\n            preview\n        }\n        series @include(if: $withSeries) {\n            id\n            title\n            preview\n            musics {\n                thumb\n            }\n            dlcs {\n                thumb\n            }\n        }\n        shark_cards {\n            id\n            preview\n            title\n            platform\n            desc\n        }\n    }\n    pc_mac_games: games(\n        locale: $locale\n        limit: $numGamesToGet\n        finder: "pcAndDownloadable"\n    ) @include(if: $withGames) {\n        results {\n            title_slug\n            fob_640\n            downloads_game {\n                platform\n            }\n        }\n    }\n    collection: downloadsCollection(\n        collectionId: $collectionId\n        locale: $locale\n        seriesId: $seriesId\n    ) @include(if: $withCollection) {\n        id\n        title\n        title_slug\n        apps @include(if: $withApps) {\n            id\n            platform\n            preview\n        }\n        gold_bars @include(if: $withGoldbars) {\n            platform\n            preview\n        }\n        patches @include(if: $withPatches) {\n            support_url\n            game {\n                fob_640\n            }\n        }\n        series {\n            id\n            title\n            preview\n            musics @include(if: $withMusics) {\n                thumb\n            }\n            dlcs @include(if: $withDlcs) {\n                thumb\n            }\n            groups @include(if: $withGroups) {\n                id\n                thumb\n                label\n                preview\n                platform\n                screensavers {\n                    label\n                    src\n                }\n                avatars {\n                    label\n                    src\n                }\n                wallpapers {\n                    label\n                    src\n                }\n            }\n        }\n        shark_cards @include(if: $withSharkCards) {\n            preview\n            title\n            platform\n            desc\n        }\n        ### This makes Apollo skip caching so you can go back/forth between series and collections\n        ### without worrying about the wrong thing showing up.\n        ###\n        ### https://kamranicus.com/posts/2018-03-06-graphql-apollo-object-caching\n        __typename @skip(if: true)\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function l(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Downloads = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[a] || new Set,
          s = new Set,
          d = new Set;
        for (t.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var n = l(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "Downloads")
    }
  }
]);