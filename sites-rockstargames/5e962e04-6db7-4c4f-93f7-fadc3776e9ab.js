try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5e962e04-6db7-4c4f-93f7-fadc3776e9ab", e._sentryDebugIdIdentifier = "sentry-dbid-5e962e04-6db7-4c4f-93f7-fadc3776e9ab")
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
  [1177, 4809, 7190, 7891], {
    94931(e, a, n) {
      var r = n(93082),
        t = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, n) {
        var r, s = {},
          l = null,
          u = null;
        for (r in void 0 !== n && (l = "" + n), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (u = a.ref), a) o.call(a, r) && !c.hasOwnProperty(r) && (s[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === s[r] && (s[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: u,
          props: s,
          _owner: i.current
        }
      }
      a.Fragment = s, a.jsx = l, a.jsxs = l
    },
    39793(e, a, n) {
      e.exports = n(94931)
    },
    21152(e, a, n) {
      n.d(a, {
        DI: () => r.DI,
        LU: () => r.LU,
        us: () => r.us
      });
      var r = n(57030);
      n(98065)
    },
    92782(e, a, n) {
      n.d(a, {
        NP: () => r.NP
      });
      var r = n(43870)
    },
    51177(e, a, n) {
      n.d(a, {
        C6: () => t,
        Cl: () => s,
        Tt: () => o,
        YH: () => c,
        fX: () => d,
        gz: () => u,
        sH: () => i
      });
      var r = function(e, a) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, a) {
          e.__proto__ = a
        } || function(e, a) {
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }, r(e, a)
      };

      function t(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, a), e.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype, new n)
      }
      var s = function() {
        return s = Object.assign || function(e) {
          for (var a, n = 1, r = arguments.length; n < r; n++)
            for (var t in a = arguments[n]) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
          return e
        }, s.apply(this, arguments)
      };

      function o(e, a) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && a.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var t = 0;
          for (r = Object.getOwnPropertySymbols(e); t < r.length; t++) a.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (n[r[t]] = e[r[t]])
        }
        return n
      }

      function i(e, a, n, r) {
        return new(n || (n = Promise))(function(t, s) {
          function o(e) {
            try {
              c(r.next(e))
            } catch (e) {
              s(e)
            }
          }

          function i(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              s(e)
            }
          }

          function c(e) {
            var a;
            e.done ? t(e.value) : (a = e.value, a instanceof n ? a : new n(function(e) {
              e(a)
            })).then(o, i)
          }
          c((r = r.apply(e, a || [])).next())
        })
      }

      function c(e, a) {
        var n, r, t, s = {
            label: 0,
            sent: function() {
              if (1 & t[0]) throw t[1];
              return t[1]
            },
            trys: [],
            ops: []
          },
          o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = i(0), o.throw = i(1), o.return = i(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
          return this
        }), o;

        function i(i) {
          return function(c) {
            return function(i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && (o = 0, i[0] && (s = 0)), s;) try {
                if (n = 1, r && (t = 2 & i[0] ? r.return : i[0] ? r.throw || ((t = r.return) && t.call(r), 0) : r.next) && !(t = t.call(r, i[1])).done) return t;
                switch (r = 0, t && (i = [2 & i[0], t.value]), i[0]) {
                  case 0:
                  case 1:
                    t = i;
                    break;
                  case 4:
                    return s.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    s.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((t = (t = s.trys).length > 0 && t[t.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === i[0] && (!t || i[1] > t[0] && i[1] < t[3])) {
                      s.label = i[1];
                      break
                    }
                    if (6 === i[0] && s.label < t[1]) {
                      s.label = t[1], t = i;
                      break
                    }
                    if (t && s.label < t[2]) {
                      s.label = t[2], s.ops.push(i);
                      break
                    }
                    t[2] && s.ops.pop(), s.trys.pop();
                    continue
                }
                i = a.call(e, s)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                n = t = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, c])
          }
        }
      }

      function l(e, a) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, t, s = n.call(e),
          o = [];
        try {
          for (;
            (void 0 === a || a-- > 0) && !(r = s.next()).done;) o.push(r.value)
        } catch (e) {
          t = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = s.return) && n.call(s)
          } finally {
            if (t) throw t.error
          }
        }
        return o
      }

      function u() {
        for (var e = [], a = 0; a < arguments.length; a++) e = e.concat(l(arguments[a]));
        return e
      }

      function d(e, a, n) {
        if (n || 2 === arguments.length)
          for (var r, t = 0, s = a.length; t < s; t++) !r && t in a || (r || (r = Array.prototype.slice.call(a, 0, t)), r[t] = a[t]);
        return e.concat(r || Array.prototype.slice.call(a))
      }
      Object.create, Object.create
    },
    50699(e, a, n) {
      n.r(a), n.d(a, {
        Actions: () => Ke,
        AvatarMenu: () => _e,
        AvatarMenuLanguageLabel: () => ge,
        AvatarMenuSection: () => me,
        AvatarMenuSectionContent: () => be,
        AvatarMenuSectionHeader: () => ve,
        AvatarMenuSectionHeaderDropdown: () => pe,
        Breakpoint: () => W,
        CallToAction: () => Je,
        Contexts: () => ga,
        Header: () => D,
        Menu: () => Ce,
        MenuContent: () => Be,
        MenuIcon: () => Ye,
        MenuItem: () => Se,
        MenuLink: () => Qe,
        MenuList: () => Ne,
        MenuSub: () => He,
        MenuTrigger: () => Oe,
        MobileMenu: () => ae,
        MobileMenuNav: () => $,
        QuickMenu: () => xe,
        Root: () => B,
        Search: () => na,
        SearchBar: () => sa,
        SearchContainer: () => ta,
        SearchError: () => ua,
        SearchFilters: () => oa,
        SearchTarget: () => ia,
        SearchTargetDropdown: () => la,
        SiteTitle: () => ba
      });
      var r = Object.defineProperty,
        t = (e, a) => () => (a || (e((a = {
          exports: {}
        }).exports, a), e = null), a.exports),
        s = (e, a) => {
          let n = {};
          for (var t in e) r(n, t, {
            get: e[t],
            enumerable: !0
          });
          return a || r(n, Symbol.toStringTag, {
            value: "Module"
          }), n
        },
        o = n(93082),
        i = n(81270),
        c = n(92782),
        l = n(2432),
        u = n(33558),
        d = n(39793),
        _ = (n(54446), n(7139)),
        h = n(94296),
        m = n(17194),
        v = n(17172),
        p = n(20357),
        b = n(21152),
        g = n(88447),
        f = n(85339),
        x = n(92023),
        M = n(83841),
        j = n(60241),
        k = n(98706),
        y = n(36810),
        C = n(36205),
        N = n(96739),
        w = n(17038);
      const S = {
        "en-US": {
          accessibility_skip_button: "Skip the Menu",
          avatar_menu_close: "Close Player Menu",
          avatar_menu_open: "Open Player Menu",
          nav_avatarmenu_title: "Avatar menu",
          nav_mobilemenu_close: "Close menu",
          nav_mobilemenu_open: "Open menu",
          nav_mobilemenu_title: "Navigation menu",
          nav_more_dropdown: "More",
          nav_rockstargames_external_link: "External",
          nav_rockstargames_home: "Rockstar Games Home",
          nav_rockstargames_logo: "Click to open menu",
          nav_rockstargames_submenu_indicator: "Sub Menu",
          nav_search_error_too_short: "Your search query is too short. Queries must be at least {count} characters long.",
          nav_search_error_too_short_invalid_chars: "Your search query contains invalid characters ({invalidChars}). Remove these and try again.",
          search_action: "Search",
          search_categories: "Search Categories",
          search_close_button: "Close Search",
          search_disabled_aria_label: "Already searched current query. Please enter a new query.",
          search_open_button: "Open Search",
          search_placeholder: "Search Rockstar Games..."
        },
        "de-DE": {
          accessibility_skip_button: "Menü verlassen",
          avatar_menu_close: "Spielermenü schließen",
          avatar_menu_open: "Spielermenü öffnen",
          nav_avatarmenu_title: "Avatarmenü",
          nav_mobilemenu_close: "Menü schließen",
          nav_mobilemenu_open: "Menü öffnen",
          nav_mobilemenu_title: "Navigationsmenü",
          nav_more_dropdown: "Mehr",
          nav_rockstargames_external_link: "Extern",
          nav_rockstargames_home: "Rockstar-Games-Startseite",
          nav_rockstargames_logo: "Klicken, um das Menü zu öffnen.",
          nav_rockstargames_submenu_indicator: "Untermenü",
          nav_search_error_too_short: "Deine Suchanfrage ist zu kurz. Suchbegriffe müssen mindestens {count} Zeichen lang sein.",
          nav_search_error_too_short_invalid_chars: "Deine Suchanfrage beinhaltet ungültige Zeichen ({invalidChars}). Bitte entferne diese und versuche es erneut.",
          search_action: "Suchen",
          search_categories: "Suchkategorien",
          search_close_button: "Suche schließen",
          search_disabled_aria_label: "Nach dieser Anfrage wurde bereits gesucht. Bitte gib eine neue Suchanfrage ein.",
          search_open_button: "Suche öffnen",
          search_placeholder: "Rockstar Games durchsuchen …"
        },
        "es-ES": {
          accessibility_skip_button: "Omitir menú",
          avatar_menu_close: "Cerrar menú de jugador",
          avatar_menu_open: "Abrir menú de jugador",
          nav_avatarmenu_title: "Menú del avatar",
          nav_mobilemenu_close: "Cerrar menú",
          nav_mobilemenu_open: "Abrir menú",
          nav_mobilemenu_title: "Menú de navegación",
          nav_more_dropdown: "Más",
          nav_rockstargames_external_link: "Externo",
          nav_rockstargames_home: "Inicio de Rockstar Games",
          nav_rockstargames_logo: "Haz clic para abrir el menú",
          nav_rockstargames_submenu_indicator: "Submenú",
          nav_search_error_too_short: "Tu búsqueda es demasiado corta. Las búsquedas deben contener al menos {count} caracteres.",
          nav_search_error_too_short_invalid_chars: "Tu búsqueda contiene caracteres que no son válidos ({invalidChars}). Quítalos e inténtalo de nuevo.",
          search_action: "Buscar",
          search_categories: "Categorías de búsqueda",
          search_close_button: "Cerrar búsqueda",
          search_disabled_aria_label: "Ya se ha realizado esta búsqueda. Introduce una nueva búsqueda.",
          search_open_button: "Abrir búsqueda",
          search_placeholder: "Buscar en Rockstar Games..."
        },
        "es-MX": {
          accessibility_skip_button: "Omitir menú",
          avatar_menu_close: "Cerrar menú del jugador",
          avatar_menu_open: "Abrir menú del jugador",
          nav_avatarmenu_title: "Menú del avatar",
          nav_mobilemenu_close: "Cerrar menú",
          nav_mobilemenu_open: "Abrir menú",
          nav_mobilemenu_title: "Menú de navegación",
          nav_more_dropdown: "Más",
          nav_rockstargames_external_link: "Externo",
          nav_rockstargames_home: "Inicio de Rockstar Games",
          nav_rockstargames_logo: "Haz clic para abrir el menú",
          nav_rockstargames_submenu_indicator: "Submenú",
          nav_search_error_too_short: "Tu búsqueda es muy corta. La búsqueda debe tener al menos {count} caracteres.",
          nav_search_error_too_short_invalid_chars: "Tu búsqueda contiene caracteres no válidos: {invalidChars}. Quítalos de la búsqueda y vuelve a intentarlo.",
          search_action: "Buscar",
          search_categories: "Buscar categorías",
          search_close_button: "Cerrar búsqueda",
          search_disabled_aria_label: "Ya se realizó esta búsqueda. Inicia una nueva búsqueda.",
          search_open_button: "Abrir búsqueda",
          search_placeholder: "Buscar en Rockstar Games"
        },
        "fr-FR": {
          accessibility_skip_button: "Passer le menu",
          avatar_menu_close: "Fermer le menu Joueur",
          avatar_menu_open: "Ouvrir le menu Joueur",
          nav_avatarmenu_title: "Menu d'avatar",
          nav_mobilemenu_close: "Fermer le menu",
          nav_mobilemenu_open: "Ouvrir le menu",
          nav_mobilemenu_title: "Menu de navigation",
          nav_more_dropdown: "Plus",
          nav_rockstargames_external_link: "Externe",
          nav_rockstargames_home: "Accueil Rockstar Games",
          nav_rockstargames_logo: "Cliquez pour ouvrir le menu",
          nav_rockstargames_submenu_indicator: "Sous-menu",
          nav_search_error_too_short: "Requête trop courte. Votre requête doit comporter au moins {count} caractères.",
          nav_search_error_too_short_invalid_chars: "Votre requête contient des caractères non valides ({invalidChars}). Veuillez les supprimer et réessayer.",
          search_action: "Rechercher",
          search_categories: "Catégories de recherche",
          search_close_button: "Fermer la recherche",
          search_disabled_aria_label: "La requête actuelle a déjà été effectuée. Veuillez effectuer une nouvelle requête.",
          search_open_button: "Ouvrir la recherche",
          search_placeholder: "Rechercher sur Rockstar Games..."
        },
        "it-IT": {
          accessibility_skip_button: "Salta il menu",
          avatar_menu_close: "Chiudi Menu giocatore",
          avatar_menu_open: "Apri Menu giocatore",
          nav_avatarmenu_title: "Menu avatar",
          nav_mobilemenu_close: "Chiudi menu",
          nav_mobilemenu_open: "Apri menu",
          nav_mobilemenu_title: "Menu di navigazione",
          nav_more_dropdown: "Altro",
          nav_rockstargames_external_link: "Esterno",
          nav_rockstargames_home: "Home Rockstar Games",
          nav_rockstargames_logo: "Clicca per aprire il menu",
          nav_rockstargames_submenu_indicator: "Sottomenu",
          nav_search_error_too_short: "La tua ricerca è troppo corta. Le ricerche devono contenere almeno {count} caratteri.",
          nav_search_error_too_short_invalid_chars: "La tua ricerca contiene dei caratteri non validi ({invalidChars}). Rimuovili e riprova.",
          search_action: "Cerca",
          search_categories: "Cerca le categorie",
          search_close_button: "Chiudi ricerca",
          search_disabled_aria_label: "Parametro di ricerca già utilizzato. Inserisci un nuovo termine di ricerca.",
          search_open_button: "Apri ricerca",
          search_placeholder: "Cerca in Rockstar Games..."
        },
        "ja-JP": {
          accessibility_skip_button: "メニューをスキップ",
          avatar_menu_close: "プレイヤーメニューを閉じる",
          avatar_menu_open: "プレイヤーメニューを開く",
          nav_avatarmenu_title: "アバターメニュー",
          nav_mobilemenu_close: "メニューを閉じる",
          nav_mobilemenu_open: "メニューを開く",
          nav_mobilemenu_title: "ナビゲーションメニュー",
          nav_more_dropdown: "もっと見る",
          nav_rockstargames_external_link: "外部",
          nav_rockstargames_home: "ロックスター・ゲームスホーム",
          nav_rockstargames_logo: "クリックしてメニューを開く",
          nav_rockstargames_submenu_indicator: "サブメニュー",
          nav_search_error_too_short: "検索文字数が少なすぎます。検索文字数を{count}文字以上にしてください。",
          nav_search_error_too_short_invalid_chars: "検索文字に無効な文字({invalidChars})が含まれています。無効な文字を削除してもう一度お試しください。",
          search_action: "検索",
          search_categories: "カテゴリーをサーチ",
          search_close_button: "検索を閉じる",
          search_disabled_aria_label: "現在の質問の検索は既にされました。新たな検索を入力してください。",
          search_open_button: "検索を開く",
          search_placeholder: "ロックスター・ゲームス内を検索…"
        },
        "ko-KR": {
          accessibility_skip_button: "메뉴 건너뛰기",
          avatar_menu_close: "플레이어 메뉴 닫기",
          avatar_menu_open: "플레이어 메뉴 열기",
          nav_avatarmenu_title: "아바타 메뉴",
          nav_mobilemenu_close: "메뉴 닫기",
          nav_mobilemenu_open: "메뉴 열기",
          nav_mobilemenu_title: "이동 메뉴",
          nav_more_dropdown: "그 외",
          nav_rockstargames_external_link: "외부",
          nav_rockstargames_home: "Rockstar Games 홈",
          nav_rockstargames_logo: "클릭해서 메뉴 열기",
          nav_rockstargames_submenu_indicator: "하위 메뉴",
          nav_search_error_too_short: "검색어가 너무 짧습니다. 검색어는 최소 {count}자여야 합니다.",
          nav_search_error_too_short_invalid_chars: "검색어에 유효하지 않은 문자({invalidChars})가 포함되어 있습니다. 제거하고 다시 시도하십시오.",
          search_action: "검색",
          search_categories: "카테고리 검색",
          search_close_button: "검색 닫기",
          search_disabled_aria_label: "현재 검색어를 이미 검색했습니다. 새로운 검색어를 입력하십시오.",
          search_open_button: "검색 열기",
          search_placeholder: "Rockstar Games 검색..."
        },
        "pl-PL": {
          accessibility_skip_button: "Pomiń menu",
          avatar_menu_close: "Zamknij menu gracza",
          avatar_menu_open: "Otwórz menu gracza",
          nav_avatarmenu_title: "Menu awatara",
          nav_mobilemenu_close: "Zamknij menu",
          nav_mobilemenu_open: "Otwórz menu",
          nav_mobilemenu_title: "Menu nawigacji",
          nav_more_dropdown: "Więcej",
          nav_rockstargames_external_link: "Zewnętrzny",
          nav_rockstargames_home: "Strona główna Rockstar Games",
          nav_rockstargames_logo: "Kliknij, aby otworzyć menu",
          nav_rockstargames_submenu_indicator: "Menu poboczne",
          nav_search_error_too_short: "Wyszukiwana fraza jest za krótka. Musi ona składać się z co najmniej {count} znaków.",
          nav_search_error_too_short_invalid_chars: "Wyszukiwana fraza zawiera nieobsługiwane znaki ({invalidChars}). Usuń je i spróbuj ponownie.",
          search_action: "Szukaj",
          search_categories: "Wyszukaj kategorie",
          search_close_button: "Zamknij wyszukiwanie",
          search_disabled_aria_label: "Już szukano bieżącej frazy. Wpisz nową frazę.",
          search_open_button: "Rozpocznij wyszukiwanie",
          search_placeholder: "Przeszukaj Rockstar Games..."
        },
        "pt-BR": {
          accessibility_skip_button: "Pular o menu",
          avatar_menu_close: "Fechar menu de jogador",
          avatar_menu_open: "Abrir menu de jogador",
          nav_avatarmenu_title: "Menu de avatar",
          nav_mobilemenu_close: "Fechar menu",
          nav_mobilemenu_open: "Abrir menu",
          nav_mobilemenu_title: "Menu de navegação",
          nav_more_dropdown: "Mais",
          nav_rockstargames_external_link: "Externo",
          nav_rockstargames_home: "Rockstar Games – Início",
          nav_rockstargames_logo: "Clique para abrir o menu",
          nav_rockstargames_submenu_indicator: "Submenu",
          nav_search_error_too_short: "Seu termo de busca é curto demais. Os termos de busca devem ter, no mínimo, {count} caracteres.",
          nav_search_error_too_short_invalid_chars: "Seu termo de busca contém caracteres inválidos ({invalidChars}). Remova-os e tente novamente.",
          search_action: "Buscar",
          search_categories: "Buscar categorias",
          search_close_button: "Fechar busca",
          search_disabled_aria_label: "Esta busca já foi pesquisada. Faça uma nova busca.",
          search_open_button: "Abrir busca",
          search_placeholder: "Buscar em Rockstar Games..."
        },
        "ru-RU": {
          accessibility_skip_button: "Пропустить меню",
          avatar_menu_close: "Закрыть меню игрока",
          avatar_menu_open: "Открыть меню игрока",
          nav_avatarmenu_title: "Меню аватара",
          nav_mobilemenu_close: "Закрыть меню",
          nav_mobilemenu_open: "Открыть меню",
          nav_mobilemenu_title: "Меню навигации",
          nav_more_dropdown: "Дополнительно",
          nav_rockstargames_external_link: "Внешний адрес",
          nav_rockstargames_home: "Главная страница Rockstar Games",
          nav_rockstargames_logo: "Нажмите, чтобы открыть меню",
          nav_rockstargames_submenu_indicator: "Подменю",
          nav_search_error_too_short: "Слишком короткий поисковый запрос. Минимальное число символов в запросе – {count}.",
          nav_search_error_too_short_invalid_chars: "Поисковый запрос содержит некорректные символы ({invalidChars}). Удалите их и попробуйте еще раз.",
          search_action: "Поиск",
          search_categories: "Категории поиска",
          search_close_button: "Закрыть поиск",
          search_disabled_aria_label: "Поиск по текущему запросу уже был выполнен. Введите новый запрос.",
          search_open_button: "Открыть поиск",
          search_placeholder: "Искать в Rockstar Games..."
        },
        "zh-TW": {
          accessibility_skip_button: "跳過選單",
          avatar_menu_close: "關閉玩家選單",
          avatar_menu_open: "開啟玩家選單",
          nav_avatarmenu_title: "虛擬人偶選單",
          nav_mobilemenu_close: "關閉選單",
          nav_mobilemenu_open: "開啟選單",
          nav_mobilemenu_title: "導覽選單",
          nav_more_dropdown: "更多",
          nav_rockstargames_external_link: "外部",
          nav_rockstargames_home: "Rockstar Games 首頁",
          nav_rockstargames_logo: "點擊以開啟選單",
          nav_rockstargames_submenu_indicator: "子選單",
          nav_search_error_too_short: "您的搜尋字詞太短。搜尋字詞必須至少有 {count} 個字元。",
          nav_search_error_too_short_invalid_chars: "您的搜尋字詞含有無效字元（{invalidChars}）。請移除後再試一次。",
          search_action: "搜尋",
          search_categories: "搜尋類型",
          search_close_button: "關閉搜尋",
          search_disabled_aria_label: "目前的查詢已完成搜尋。請輸入新的查詢。",
          search_open_button: "開啟搜尋",
          search_placeholder: "搜尋 Rockstar Games……"
        },
        "zh-CN": {
          accessibility_skip_button: "跳过菜单",
          avatar_menu_close: "关闭玩家菜单",
          avatar_menu_open: "打开玩家菜单",
          nav_avatarmenu_title: "头像菜单",
          nav_mobilemenu_close: "关闭菜单",
          nav_mobilemenu_open: "打开菜单",
          nav_mobilemenu_title: "导航菜单",
          nav_more_dropdown: "更多",
          nav_rockstargames_external_link: "外部",
          nav_rockstargames_home: "Rockstar Games主页",
          nav_rockstargames_logo: "点击打开菜单",
          nav_rockstargames_submenu_indicator: "子菜单",
          nav_search_error_too_short: "您的搜索词条过短。词条长度必须至少为{count}个字符。",
          nav_search_error_too_short_invalid_chars: "您的搜索词条包含无效字符（{invalidChars}）。请删除这些并重试。",
          search_action: "搜索",
          search_categories: "搜索类别",
          search_close_button: "关闭搜索",
          search_disabled_aria_label: "已搜索当前词条。请输入一个新的词条。",
          search_open_button: "打开搜索",
          search_placeholder: "搜索Rockstar Games……"
        }
      };
      var O = (0, u.YK)({
        nav_rockstargames_home: {
          id: "nav_rockstargames_home",
          description: "Global navigation, Rockstar Games Home",
          defaultMessage: "Rockstar Games Home"
        },
        nav_rockstargames_logo: {
          id: "nav_rockstargames_logo",
          description: "Global navigation, Rockstar Games Logo that opens the Quick Access Menu",
          defaultMessage: "Click to open menu"
        },
        nav_rockstargames_external_link: {
          id: "nav_rockstargames_external_link",
          description: "Label for an external link.",
          defaultMessage: "External"
        },
        nav_rockstargames_submenu_indicator: {
          id: "nav_rockstargames_submenu_indicator",
          description: "Label for chevron icon, indicating trigger has a sub menu",
          defaultMessage: "Sub Menu"
        },
        nav_mobilemenu_open: {
          id: "nav_mobilemenu_open",
          description: "Global navigation, Hamburger menu opens the Mobile Menu",
          defaultMessage: "Open menu"
        },
        nav_mobilemenu_close: {
          id: "nav_mobilemenu_close",
          description: "Global navigation, Hamburger menu closes the Mobile Menu",
          defaultMessage: "Close menu"
        },
        nav_mobilemenu_title: {
          id: "nav_mobilemenu_title",
          description: "Mobile Menu, Accessible title for the mobile menu",
          defaultMessage: "Navigation menu"
        },
        nav_avatarmenu_title: {
          id: "nav_avatarmenu_title",
          description: "Avatar Menu, Accessible title for the avatar menu",
          defaultMessage: "Avatar menu"
        },
        search_action: {
          id: "search_action",
          description: "Global navigation search, Search action used on buttons and aria-labels",
          defaultMessage: "Search"
        },
        search_categories: {
          id: "search_categories",
          description: "Global navigation search categories aria label",
          defaultMessage: "Search Categories"
        },
        search_open_button: {
          id: "search_open_button",
          description: "Global navigation search, Button label for opening search input",
          defaultMessage: "Open Search"
        },
        search_close_button: {
          id: "search_close_button",
          description: "Global navigation search, Button label for closing search input",
          defaultMessage: "Close Search"
        },
        search_placeholder: {
          id: "search_placeholder",
          description: "Global navigation search, Placeholder text within search input",
          defaultMessage: "Search Rockstar Games..."
        },
        search_disabled_aria_label: {
          id: "search_disabled_aria_label",
          description: "Global navigation search, label when icon button is disabled",
          defaultMessage: "Already searched current query. Please enter a new query."
        },
        nav_more_dropdown: {
          id: "nav_more_dropdown",
          description: "Global navigation More, Overflow for small screens More text link",
          defaultMessage: "More"
        },
        accessibility_skip_button: {
          id: "accessibility_skip_button",
          description: "Message for A11Y asking the user if they want to skip the navigation and go straight to the content.",
          defaultMessage: "Skip the Menu"
        },
        avatar_menu_open: {
          id: "avatar_menu_open",
          description: "Global navigation player menu, Button label for opening search input",
          defaultMessage: "Open Player Menu"
        },
        avatar_menu_close: {
          id: "avatar_menu_close",
          description: "Global navigation player menu, Button label for closing search input",
          defaultMessage: "Close Player Menu"
        },
        nav_search_error_too_short: {
          id: "nav_search_error_too_short",
          description: "Message under search box telling user their query is too short",
          defaultMessage: "Your search query is too short. Queries must be at least {count} characters long."
        },
        nav_search_error_invalid_chars: {
          id: "nav_search_error_too_short_invalid_chars",
          description: "Message under search box telling user their query contains invalid characters",
          defaultMessage: "Your search query contains invalid characters ({invalidChars}). Remove these and try again."
        }
      });
      const z = () => {
        const e = (0, o.useRef)(null);
        return (0, d.jsx)("button", {
          ref: e,
          className: "_3ge2ci0",
          onClick: () => {
            const a = document.querySelector(".siteHeaderContainer"),
              n = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
            if (a && n) {
              n.enableExperimentalAPIs(!0);
              const r = n.findCandidates(a, "down", {
                mode: "all"
              }).filter(n => !a.contains(n) && e.current !== n);
              r.length > 0 && r[0].focus()
            }
          },
          children: (0, d.jsx)(u.sA, {
            ...O.accessibility_skip_button
          })
        })
      };

      function L(e) {
        var a = function(e) {
          if ("object" != typeof e || !e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 !== a) {
            var n = a.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof a ? a : String(a)
      }

      function I(e, a) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          a && (r = r.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function E(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2 ? I(Object(n), !0).forEach(function(a) {
            var r, t, s;
            r = e, t = a, s = n[a], (t = L(t)) in r ? Object.defineProperty(r, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[t] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
          })
        }
        return e
      }

      function R(e, a) {
        var n = {};
        for (var r in e) n[r] = a(e[r], r);
        return n
      }
      var A = (e, a, n) => {
          for (var r of Object.keys(e)) {
            var t;
            if (e[r] !== (null !== (t = a[r]) && void 0 !== t ? t : n[r])) return !1
          }
          return !0
        },
        P = e => {
          var a = a => {
            var n = e.defaultClassName,
              r = E(E({}, e.defaultVariants), a);
            for (var t in r) {
              var s, o = null !== (s = r[t]) && void 0 !== s ? s : e.defaultVariants[t];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var c = e.variantClassNames[t][i];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) A(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return R(e.variantClassNames, e => R(e, e => e.split(" ")[0]))
            }
          }, a
        },
        q = P({
          defaultClassName: "ut2qrf6",
          variantClassNames: {
            layout: {
              default: "ut2qrf7",
              simple: "ut2qrf8"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        });
      const D = ({
          children: e
        }) => {
          const {
            simpleMenu: a
          } = (0, o.useContext)(T);
          return (0, d.jsx)("header", {
            className: (0, i.default)(q({
              layout: a ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        T = (0, o.createContext)({
          brand: void 0,
          brandTitle: void 0,
          isNavHidden: !1,
          containerRef: null,
          navContentRef: null,
          mainMenuOpened: !1,
          avatarMenuOpened: !1,
          searchBarOpened: !1,
          simpleMenu: !1,
          setForceBackground: () => {},
          setAvatarMenuOpened: () => {},
          setMainMenuOpened: () => {},
          setSearchBarOpened: () => {},
          locale: "en-US"
        }),
        B = (G = ({
          children: e,
          brand: a,
          brandTitle: n,
          mode: r = "default",
          navColorTheme: t = "dark",
          forceSolidBackground: s = !1,
          forceVisibility: u,
          simpleMenu: _ = !1,
          locale: h
        }) => {
          const [m, v] = (0, o.useState)(!1), [p, b] = (0, o.useState)(!0), [g, f] = (0, o.useState)(!1), [x, M] = (0, o.useState)(!1), [j, k] = (0, o.useState)(!1), y = (0, o.useRef)(null), C = (0, o.useRef)(null), N = (0, l.VE)(), [w, S] = (0, o.useState)(null), [O, L] = (0, o.useState)(s), I = (0, o.useMemo)(() => "visible" !== u && ("hidden" === u || m), [m, u]);
          (0, o.useEffect)(() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  n = window.scrollY > e;
                v(a && n), e = window.scrollY
              },
              n = () => {
                b(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", n), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", n)
            }
          }, []), (0, o.useEffect)(() => {
            const e = N.current,
              a = e?.getContext("2d");
            a && e && (a.fillStyle = "#000", a.fillRect(0, 0, e.width, e.height))
          }, [N?.current]), (0, o.useEffect)(() => {
            const e = "data-show-more-content",
              a = C.current,
              n = () => {
                const n = !a?.contains(document.activeElement);
                I && n ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
              };
            return n(), document.addEventListener("focusin", n), document.addEventListener("focusout", n), () => {
              document.removeEventListener("focusin", n), document.removeEventListener("focusout", n), document.body.removeAttribute(e)
            }
          }, [I, C]), (0, o.useEffect)(() => {
            const e = e => {
              v(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const E = !p || s || O ? "dark" : t;
          return (0, d.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, d.jsx)("div", {
              ref: S,
              children: w && (0, d.jsx)(c.NP, {
                colorScheme: E,
                defaultColorScheme: E,
                defaultPlatformScale: "desktop",
                container: w,
                locale: h,
                children: (0, d.jsx)(T.Provider, {
                  value: {
                    brand: a,
                    brandTitle: n,
                    isNavHidden: I,
                    containerRef: y,
                    navContentRef: C,
                    simpleMenu: _,
                    setForceBackground: L,
                    avatarMenuOpened: g,
                    setAvatarMenuOpened: f,
                    mainMenuOpened: x,
                    setMainMenuOpened: M,
                    searchBarOpened: j,
                    setSearchBarOpened: k,
                    locale: h
                  },
                  children: (0, d.jsxs)("div", {
                    className: (0, i.default)("ut2qrf1", "ut2qrf0"),
                    ref: y,
                    lang: h,
                    "data-scroll-top": p,
                    "data-color-mode": r,
                    "data-theme": E,
                    "data-force-background": s || O,
                    children: [(0, d.jsx)(z, {}), (0, d.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, d.jsxs)("div", {
                      ref: C,
                      className: "ut2qrf5",
                      "data-ishidden": I,
                      "data-testid": "globalnav__container",
                      children: [(0, d.jsx)("canvas", {
                        ref: N,
                        id: "navigation-gradient",
                        className: "ut2qrf4"
                      }), e]
                    })]
                  })
                })
              })
            })
          })
        }, e => {
          const [a, n] = (0, o.useState)();
          return (0, o.useEffect)(() => {
            (async () => {
              n(await (async e => await (async e => {
                return {
                  rsLocale: e,
                  locale: e,
                  messages: (a = S[e], {
                    ...a
                  })
                };
                var a
              })(e))(e.locale))
            })()
          }, []), (0, d.jsx)(u.Dk, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            children: a && (0, d.jsx)(G, {
              ...e
            })
          }, "intl-provider")
        });
      var G, H = P({
          defaultClassName: "_1pgq6b11",
          variantClassNames: {
            visibility: {
              visible: "_1pgq6b12",
              hidden: "_1pgq6b13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Y = P({
          defaultClassName: "_1pgq6b1i",
          variantClassNames: {
            context: {
              mainMenu: "_1pgq6b1j",
              mobileMenu: "_1pgq6b1k",
              avatarMenu: "_1pgq6b1l",
              quickMenu: "_1pgq6b1m",
              subMenu: "_1pgq6b1n",
              nestedMenu: "_1pgq6b1o"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Q = "_1pgq6b1f",
        U = s({
          desktop: () => V,
          mobile: () => F
        }),
        V = "dsroxs1",
        F = "dsroxs0";
      const W = ({
          showOn: e,
          ...a
        }) => (0, d.jsx)(v.DX, {
          className: e ? U[e] : "",
          ...a
        }),
        Z = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        X = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var K = "vkitevd";
      const J = (0, o.createContext)({
          openedNav: ""
        }),
        $ = ({
          children: e
        }) => {
          const [a, n] = (0, o.useState)("");
          return (0, d.jsx)(J.Provider, {
            value: {
              openedNav: a
            },
            children: (0, d.jsx)(_.bL, {
              value: a,
              onValueChange: n,
              children: (0, d.jsx)(_.B8, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        ee = (0, o.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        ae = ({
          children: e
        }) => {
          const a = (0, u.tz)(),
            [n, r] = (0, o.useState)(!1),
            [t, s] = (0, o.useState)(!1),
            [c, l] = (0, o.useState)(!1),
            {
              brand: _,
              setForceBackground: h,
              simpleMenu: v
            } = (0, o.useContext)(T);
          (0, o.useEffect)(() => {
            n && h(!0)
          }, [n]), (0, o.useEffect)(() => {
            const e = e => {
              const a = e?.target;
              n && a.innerWidth >= 1024 && M()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const p = {
              show: {
                height: `calc(100dvh - ${(0,b.us)("var(--k8we7i6)","0px")})`,
                paddingBottom: n && _ ? "var(--k8we7i0)" : "",
                transition: {
                  ...Z.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: Z.hamburgerClose
              }
            },
            M = () => {
              r(!n), s(!1)
            };
          return v ? null : (0, d.jsx)(ee.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                r(!1)
              },
              setHasQuickMenu: l
            },
            children: (0, d.jsxs)(f.bL, {
              open: n,
              onOpenChange: r,
              children: [(0, d.jsx)(W, {
                showOn: "mobile",
                children: (0, d.jsx)(ne, {
                  onClick: M,
                  isMenuOpen: n
                })
              }), (0, d.jsx)(g.AnimatePresence, {
                onExitComplete: () => h(!1),
                children: n && (0, d.jsx)(W, {
                  showOn: "mobile",
                  children: (0, d.jsxs)(g.motion.div, {
                    className: "vkiteve",
                    variants: p,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, d.jsx)(f.hJ, {
                      className: "vkiteva"
                    }), (0, d.jsx)(f.UC, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => r(!1),
                      children: (0, d.jsxs)(g.motion.div, {
                        className: (0, i.default)((0, m.m)("dark"), "vkitev4", "vkitev7"),
                        variants: p,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, d.jsxs)(x.s6, {
                          children: [(0, d.jsx)(f.hE, {
                            children: a.formatMessage(O.nav_mobilemenu_title)
                          }), (0, d.jsx)(f.VY, {
                            children: a.formatMessage(O.nav_mobilemenu_title)
                          })]
                        }), (0, d.jsx)("div", {
                          className: (0, i.default)(t ? "vkitev9" : "", "vkitev6"),
                          children: (0, d.jsx)(g.motion.div, {
                            className: (0, i.default)("vkitev0", c ? "vkitev8" : ""),
                            children: o.Children.map(e, e => (0, d.jsx)(g.motion.div, {
                              variants: X,
                              transition: Z.staggerFade,
                              children: e
                            }))
                          })
                        })]
                      })
                    })]
                  })
                })
              })]
            })
          })
        },
        ne = ({
          className: e,
          isMenuOpen: a,
          ...n
        }) => {
          const r = (0, u.tz)();
          return (0, d.jsx)("div", {
            className: (0, i.default)("vkitevb", e),
            children: (0, d.jsxs)(f.l9, {
              title: r.formatMessage(a ? O.nav_mobilemenu_close : O.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...n,
              children: [(0, d.jsx)("span", {
                className: K,
                "data-opened": a
              }), (0, d.jsx)("span", {
                className: K,
                "data-opened": a
              }), (0, d.jsx)("span", {
                className: K,
                "data-opened": a
              })]
            })
          })
        },
        re = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const n of a) "function" == typeof n ? n(e) : n && (n.current = e)
          }
        },
        te = ({
          children: e,
          className: a,
          ...n
        }) => {
          const {
            containerRef: r,
            locale: t
          } = (0, o.useContext)(T);
          return (0, d.jsx)(c.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: t,
            children: (0, d.jsx)(y.b, {
              className: (0, i.default)("g1xx1x0 ut2qrf0", a),
              container: r?.current,
              ...n,
              children: e
            })
          })
        };
      var se = "m27a3y7",
        oe = t((e, a) => {
          a.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiByeD0iMjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI5LjMzMzQgMzAuMjVWMjguNDE2N0MyOS4zMzM0IDI3LjQ0NDIgMjguOTQ3MSAyNi41MTE2IDI4LjI1OTUgMjUuODIzOUMyNy41NzE4IDI1LjEzNjMgMjYuNjM5MiAyNC43NSAyNS42NjY3IDI0Ljc1SDE4LjMzMzRDMTcuMzYxIDI0Ljc1IDE2LjQyODMgMjUuMTM2MyAxNS43NDA3IDI1LjgyMzlDMTUuMDUzMSAyNi41MTE2IDE0LjY2NjcgMjcuNDQ0MiAxNC42NjY3IDI4LjQxNjdWMzAuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
        });
      const ie = (0, o.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        ce = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        le = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block"
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            }
          }
        },
        ue = {
          open: {
            transform: "translateY(0%)",
            display: "block"
          },
          closed: {
            transform: "translateY(100%)",
            transitionEnd: {
              display: "none"
            }
          }
        },
        de = ({
          children: e,
          className: a
        }) => (0, d.jsx)("div", {
          className: (0, i.default)("m27a3y1", a),
          children: e
        }),
        _e = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: r,
          onOpenChange: t
        }) => {
          const s = (0, u.tz)(),
            i = oe(),
            [c, l] = (0, o.useState)(["open"]),
            {
              isNavHidden: _,
              setAvatarMenuOpened: h,
              mainMenuOpened: v,
              setMainMenuOpened: p
            } = (0, o.useContext)(T),
            [b, y] = (0, o.useState)(!1),
            [C, N] = (0, o.useState)(!1),
            [w, S] = (0, o.useState)(_),
            z = () => {
              y(!1), N(!1)
            };
          w !== _ && (S(_), _ && z());
          const L = e => {
            l(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, o.useEffect)(() => {
            const e = b || C;
            e && v && p(!1), h(e)
          }, [b, C, v, p, h]), (0, d.jsxs)(ie.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: c,
              closeAvatarMenu: z
            },
            children: [(0, d.jsx)(j.bL, {
              open: b,
              onOpenChange: e => {
                t?.(e), y(e)
              },
              modal: !1,
              children: (0, d.jsx)(W, {
                showOn: "desktop",
                children: (0, d.jsxs)(de, {
                  children: [(0, d.jsx)(j.l9, {
                    asChild: !0,
                    children: (0, d.jsx)(M.IconButton, {
                      size: "SM",
                      label: s.formatMessage(b ? O.avatar_menu_close : O.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: se,
                      "aria-label": s.formatMessage(b ? O.avatar_menu_close : O.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: e && (0, d.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i,
                        alt: a
                      })
                    })
                  }), (0, d.jsx)(g.AnimatePresence, {
                    children: b && (0, d.jsx)(j.UC, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, m.m)("dark"),
                      children: (0, d.jsx)(g.motion.div, {
                        variants: ce,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, d.jsx)(k.bL, {
                          type: "multiple",
                          value: c,
                          onValueChange: L,
                          children: (0, d.jsx)(He, {
                            className: "m27a3y2 _1r3j5az0",
                            children: r
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, d.jsx)(f.bL, {
              open: C,
              onOpenChange: e => {
                t?.(e), N(e)
              },
              children: (0, d.jsx)(W, {
                showOn: "mobile",
                children: (0, d.jsxs)(de, {
                  children: [(0, d.jsx)(f.l9, {
                    className: se,
                    "aria-label": s.formatMessage(C ? O.avatar_menu_close : O.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, d.jsx)(M.IconButton, {
                      size: "SM",
                      label: s.formatMessage(b ? O.avatar_menu_close : O.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: se,
                      "aria-label": s.formatMessage(b ? O.avatar_menu_close : O.avatar_menu_open),
                      children: e && (0, d.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i
                      })
                    })
                  }), (0, d.jsx)(g.AnimatePresence, {
                    children: C && (0, d.jsx)(te, {
                      asChild: !0,
                      children: (0, d.jsxs)(f.UC, {
                        forceMount: !0,
                        className: (0, m.m)("dark"),
                        children: [(0, d.jsxs)(x.s6, {
                          children: [(0, d.jsx)(f.hE, {
                            children: s.formatMessage(O.nav_avatarmenu_title)
                          }), (0, d.jsx)(f.VY, {
                            children: s.formatMessage(O.nav_avatarmenu_title)
                          })]
                        }), (0, d.jsxs)(g.motion.div, {
                          variants: ue,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, d.jsx)(f.bm, {
                            className: "m27a3y5",
                            "aria-label": s.formatMessage(O.avatar_menu_close),
                            children: (0, d.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, d.jsx)(k.bL, {
                            type: "multiple",
                            value: c,
                            onValueChange: L,
                            children: (0, d.jsx)(He, {
                              className: "m27a3y4 _1r3j5az0",
                              children: r
                            })
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })
        },
        he = (0, o.createContext)({
          avatarMenuItemId: ""
        }),
        me = ({
          children: e,
          value: a
        }) => {
          const n = (0, o.useId)();
          return (0, d.jsx)(he.Provider, {
            value: {
              avatarMenuItemId: a || n
            },
            children: (0, d.jsx)(k.q7, {
              value: a || n,
              className: "m27a3y9",
              children: e
            })
          })
        },
        ve = ({
          children: e,
          ...a
        }) => (0, d.jsx)(k.Y9, {
          asChild: !0,
          children: (0, d.jsx)("li", {
            className: "m27a3y0",
            children: (0, d.jsx)(k.l9, {
              className: "m27a3ya",
              ...a,
              children: e
            })
          })
        }),
        pe = ({
          children: e,
          ...a
        }) => (0, d.jsx)(k.Y9, {
          style: {
            margin: 0
          },
          children: (0, d.jsxs)(k.l9, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, d.jsx)(p.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        be = ({
          children: e,
          ...a
        }) => {
          const {
            avatarMenuOpenItems: n
          } = (0, o.useContext)(ie), {
            avatarMenuItemId: r
          } = (0, o.useContext)(he), t = n.indexOf(r) >= 0;
          return (0, d.jsx)(k.UC, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, d.jsx)(g.motion.div, {
              variants: le,
              initial: "closed",
              animate: t ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        ge = ({
          children: e,
          ...a
        }) => (0, d.jsx)("div", {
          className: "m27a3yd",
          ...a,
          children: e
        }),
        fe = (0, o.createContext)({
          inQuickMenu: !1
        }),
        xe = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: n
          } = (0, o.useContext)(ee), r = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: Z.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...Z.hamburgerOpen,
                staggerChildren: .15,
                delay: Z.hamburgerOpen.duration && .8 * Z.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, t = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Z.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Z.staggerFade
            }
          }, s = (0, i.default)((0, m.m)("dark"), "_1xtz6n0");
          return (0, o.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), a ? (0, d.jsx)(fe.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, d.jsx)(_.bL, {
              asChild: !0,
              children: (0, d.jsx)(g.motion.div, {
                variants: r,
                className: s,
                children: o.Children.map(e, e => (0, d.jsx)(g.motion.li, {
                  variants: t,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, d.jsx)(fe.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, d.jsx)(_.bL, {
              asChild: !0,
              children: (0, d.jsx)("div", {
                className: s,
                children: e
              })
            })
          })
        },
        Me = e => {
          e.preventDefault()
        },
        je = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        ke = (0, o.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        ye = (0, o.createContext)({
          isHidden: !1
        }),
        Ce = ({
          children: e
        }) => {
          const a = (0, u.tz)(),
            [n, r] = (0, o.useState)(""),
            [t, s] = (0, o.useState)(e),
            [i, c] = (0, o.useState)([]),
            l = (0, o.useRef)(null),
            h = (0, o.useRef)(null),
            {
              isNavHidden: m,
              mainMenuOpened: v,
              avatarMenuOpened: p,
              setMainMenuOpened: b
            } = (0, o.useContext)(T),
            {
              inAvatarMenu: g
            } = (0, o.useContext)(ie),
            f = (0, o.useCallback)(() => {
              const a = h.current;
              if (!a) return;
              const {
                children: n
              } = a;
              let r = 0;
              const t = Array.from(n).map((e, a) => {
                  const n = e.getBoundingClientRect().top;
                  return 0 === a && (r = n), n
                }),
                i = t.filter(e => e !== r).length,
                l = t.findIndex(e => e > r);
              let u = l;
              if (l > 0 && (u = l - 2), i) {
                const a = [],
                  n = [];
                o.Children.forEach(e, (e, r) => {
                  r < u ? a.push(e) : n.push(e)
                }), a && s(a), n && c(n)
              } else s(e), c([])
            }, [e, h?.current]);
          (0, o.useEffect)(() => {
            const e = new ResizeObserver(f);
            return h?.current && e.observe(h.current), () => {
              h?.current && e.unobserve(h.current)
            }
          }, [e, h?.current]), (0, o.useEffect)(() => {
            r("")
          }, [m]), (0, o.useEffect)(() => {
            const e = () => r("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, o.useEffect)(() => {
            v || "" === n || r("")
          }, [v]), (0, o.useEffect)(() => {
            b("" !== n)
          }, [n, p, v, g]);
          const x = H({
              visibility: "visible"
            }),
            M = H({
              visibility: "hidden"
            });
          return (0, d.jsx)(ke.Provider, {
            value: {
              inMenu: !0,
              openedNav: n,
              setOpenedNav: r
            },
            children: (0, d.jsx)(W, {
              showOn: "desktop",
              children: (0, d.jsxs)(_.bL, {
                className: "_1pgq6b10",
                value: n,
                onValueChange: r,
                children: [(0, d.jsxs)(Ne, {
                  ref: l,
                  className: x,
                  children: [t, i?.length > 0 && (0, d.jsxs)(Se, {
                    children: [(0, d.jsx)(Oe, {
                      "data-testid": "navMore",
                      children: a.formatMessage(O.nav_more_dropdown)
                    }), (0, d.jsx)(Be, {
                      children: (0, d.jsx)(He, {
                        children: (0, d.jsx)(Ne, {
                          children: i
                        })
                      })
                    })]
                  })]
                }), (0, d.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, d.jsx)(Ne, {
                    ref: h,
                    className: M,
                    "aria-hidden": "true",
                    children: (0, d.jsx)(ye.Provider, {
                      value: {
                        isHidden: !0
                      },
                      children: e
                    })
                  })
                })]
              })
            })
          })
        },
        Ne = (0, o.forwardRef)(function({
          children: e,
          className: a,
          ...n
        }, r) {
          return (0, d.jsx)(_.B8, {
            ref: r,
            className: (0, i.default)("_1pgq6b1e", a),
            ...n,
            children: e
          })
        }),
        we = (0, o.createContext)({
          value: ""
        }),
        Se = (0, o.forwardRef)(function({
          testId: e,
          children: a,
          ...n
        }, r) {
          const {
            depth: t
          } = (0, o.useContext)(Ge), {
            inMobileMenu: s
          } = (0, o.useContext)(ee), c = (0, o.useRef)(null), l = `rsm-${(0,h.B)()}`, u = "_1pgq6b15", m = "_1pgq6b16";
          return (0, d.jsx)(we.Provider, {
            value: {
              value: l,
              ref: c
            },
            children: (0, d.jsx)(_.q7, {
              value: l,
              ref: re(r, c),
              className: (0, i.default)({
                [u]: !0,
                [m]: 1 === t && !s
              }),
              "data-testid": e,
              "data-menu-item": t,
              ...n,
              children: a
            })
          })
        }),
        Oe = ({
          children: e,
          ...a
        }) => {
          const {
            inMenu: n
          } = (0, o.useContext)(ke), {
            inAvatarMenu: r
          } = (0, o.useContext)(ie), {
            inQuickMenu: t
          } = (0, o.useContext)(fe), {
            inMobileMenu: s
          } = (0, o.useContext)(ee), {
            inSubMenu: i,
            depth: c
          } = (0, o.useContext)(Ge), l = {
            ...a,
            "data-menu-trigger": !0
          };
          return c > 1 ? (0, d.jsx)(Pe, {
            ...l,
            children: e
          }) : r ? (0, d.jsx)(Ee, {
            ...l,
            children: e
          }) : i ? (0, d.jsx)(Ae, {
            ...l,
            children: e
          }) : t ? (0, d.jsx)(Re, {
            ...l,
            children: e
          }) : s ? (0, d.jsx)(Ie, {
            ...l,
            children: e
          }) : n ? (0, d.jsx)(Le, {
            ...l,
            children: e
          }) : void 0
        },
        ze = e => {
          const a = (0, u.tz)();
          return (0, d.jsx)(p.ChevronDown, {
            ...e,
            label: ` - ${a.formatMessage(O.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        Le = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, d.jsxs)(_.l9, {
            onPointerMove: Me,
            onPointerLeave: Me,
            onKeyDown: je,
            onClick: r,
            className: (0, i.default)(Q, Y({
              context: "mainMenu"
            }), n),
            ...t,
            children: [a, (0, d.jsx)(ze, {})]
          })
        },
        Ie = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, d.jsxs)(_.l9, {
            onPointerMove: Me,
            onPointerLeave: Me,
            onClick: r,
            className: (0, i.default)(Q, Y({
              context: "mobileMenu"
            }), n),
            ...t,
            children: [a, (0, d.jsx)(ze, {
              size: "LG"
            })]
          })
        },
        Ee = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, d.jsxs)(_.l9, {
            onPointerMove: Me,
            onPointerLeave: Me,
            onClick: r,
            className: (0, i.default)(Q, Y({
              context: "avatarMenu"
            }), n),
            ...t,
            children: [a, (0, d.jsx)(ze, {})]
          })
        },
        Re = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, d.jsxs)(_.l9, {
            onPointerMove: Me,
            onPointerLeave: Me,
            onClick: r,
            className: (0, i.default)(Q, Y({
              context: "quickMenu"
            }), n),
            ...t,
            children: [a, (0, d.jsx)(ze, {})]
          })
        },
        Ae = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, d.jsxs)(_.l9, {
            onPointerMove: Me,
            onPointerLeave: Me,
            onClick: r,
            className: (0, i.default)(Q, Y({
              context: "subMenu"
            }), n),
            ...t,
            children: [a, (0, d.jsx)(ze, {})]
          })
        },
        Pe = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, d.jsxs)(_.l9, {
            onPointerMove: Me,
            onPointerLeave: Me,
            onClick: r,
            className: (0, i.default)(Q, Y({
              context: "nestedMenu"
            }), n),
            ...t,
            children: [a, (0, d.jsx)(ze, {})]
          })
        },
        qe = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        De = {
          open: {
            height: "auto",
            opacity: 1,
            marginBottom: "revert-layer"
          },
          closed: {
            height: 0,
            opacity: 0,
            marginBottom: "auto"
          }
        },
        Te = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Be = (0, o.forwardRef)(function({
          children: e,
          animationOverride: a,
          ...n
        }, r) {
          const {
            navContentRef: t
          } = (0, o.useContext)(T), {
            inSubMenu: s,
            openedNav: c
          } = (0, o.useContext)(Ge), {
            openedNav: l
          } = (0, o.useContext)(ke), {
            openedNav: u
          } = (0, o.useContext)(J), {
            value: h,
            ref: v
          } = (0, o.useContext)(we), {
            inMobileMenu: p
          } = (0, o.useContext)(ee), {
            isHidden: b
          } = (0, o.useContext)(ye), {
            inAvatarMenu: f
          } = (0, o.useContext)(ie), x = (0, o.useRef)(null), M = [c, l, u].includes(h);
          if ((0, o.useEffect)(() => {
              var e;
              M && x.current && (e = x.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [M]), b) return null;
          const j = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            k = "_1pgq6b19",
            y = "_1pgq6b1a",
            C = "_1pgq6b1b";
          return (0, d.jsx)(g.AnimatePresence, {
            children: M && (0, d.jsx)(_.UC, {
              ref: re(r, x),
              className: (0, i.default)((0, m.m)("dark"), {
                [j]: !p,
                [k]: p,
                [y]: s && !p,
                [C]: f
              }),
              onPointerEnter: Me,
              onPointerLeave: Me,
              onPointerDown: Me,
              onPointerDownOutside: e => {
                s && e.preventDefault()
              },
              style: {
                top: t?.current?.getBoundingClientRect().height,
                left: v?.current?.getBoundingClientRect().left
              },
              ...n,
              asChild: !0,
              forceMount: !0,
              children: (0, d.jsx)(g.motion.div, {
                variants: a || s || p ? De : qe,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Z.springOpen,
                className: "_1pgq6b1c",
                children: e
              })
            })
          })
        }),
        Ge = (0, o.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        He = (0, o.forwardRef)(function({
          children: e,
          ...a
        }, n) {
          const {
            depth: r
          } = (0, o.useContext)(Ge), {
            openedNav: t
          } = (0, o.useContext)(J), {
            isNavHidden: s
          } = (0, o.useContext)(T), [i, c] = (0, o.useState)("");
          (0, o.useEffect)(() => {
            c("")
          }, [t, s]);
          const l = r ? r + 1 : 1;
          return (0, d.jsx)(Ge.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: l
            },
            children: (0, d.jsx)(_.bL, {
              ref: n,
              defaultValue: "",
              value: i,
              onValueChange: e => {
                c(e === i ? "" : e)
              },
              orientation: "vertical",
              className: "_1pgq6b1d",
              "data-depth": l,
              ...a,
              asChild: !0,
              children: (0, d.jsx)(g.motion.div, {
                variants: Te,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: Z.quickFade,
                children: e
              })
            })
          })
        }),
        Ye = (0, o.forwardRef)(function({
          className: e,
          ...a
        }, n) {
          return (0, d.jsx)("img", {
            ref: n,
            className: (0, i.default)("_1pgq6b1p", e),
            ...a
          })
        }),
        Qe = ({
          hasNotification: e,
          onClick: a,
          ...n
        }) => {
          const {
            inMenu: r,
            setOpenedNav: t
          } = (0, o.useContext)(ke), {
            inAvatarMenu: s
          } = (0, o.useContext)(ie), {
            inQuickMenu: i
          } = (0, o.useContext)(fe), {
            inMobileMenu: c
          } = (0, o.useContext)(ee), {
            inSubMenu: l,
            depth: u
          } = (0, o.useContext)(Ge), _ = {
            ...n,
            onSelect: e => {
              const n = e.currentTarget.getAttribute("href") ?? "";
              if (n === window.location.pathname + window.location.search + window.location.hash || new URL(n, window.location.origin).href === window.location.href) {
                e.preventDefault(), t?.("");
                const a = e.currentTarget.closest('[data-menu-item="0"]')?.querySelector('[data-menu-trigger="true"]');
                document.activeElement?.blur(), setTimeout(() => {
                  a?.focus()
                }, 50)
              }
              a?.(e)
            }
          };
          return u > 1 ? (0, d.jsx)(Xe, {
            ..._
          }) : s ? (0, d.jsx)(Ze, {
            ..._
          }) : l ? (0, d.jsx)(We, {
            ..._,
            hasNotification: e
          }) : i ? (0, d.jsx)(Fe, {
            ..._
          }) : c ? (0, d.jsx)(Ve, {
            ..._
          }) : r ? (0, d.jsx)(Ue, {
            ..._
          }) : void 0
        },
        Ue = (0, o.forwardRef)(function({
          children: e,
          className: a,
          onSelect: n,
          external: r,
          asChild: t,
          ...s
        }, c) {
          const l = (0, u.tz)(),
            {
              closeAvatarMenu: h
            } = (0, o.useContext)(ie),
            {
              closeMobileMenu: m
            } = (0, o.useContext)(ee),
            b = t ? v.DX : "a",
            g = (0, i.default)(Y({
              context: "mainMenu"
            }), a);
          return (0, d.jsx)(_.N_, {
            onSelect: e => {
              h?.(), m?.(), n?.(e)
            },
            className: g,
            asChild: !0,
            ...s,
            children: (0, d.jsxs)(b, {
              ref: c,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), r && (0, d.jsx)(p.ExternalLink, {
                label: l.formatMessage(O.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ve = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const {
            closeAvatarMenu: l
          } = (0, o.useContext)(ie), {
            closeMobileMenu: u
          } = (0, o.useContext)(ee), h = (0, i.default)(Y({
            context: "mobileMenu"
          }), n), m = a ? v.DX : "a";
          return (0, d.jsx)(_.N_, {
            asChild: !0,
            onSelect: e => {
              l?.(), u?.(), r?.(e)
            },
            ...s,
            children: (0, d.jsxs)(m, {
              ref: c,
              className: h,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), t && (0, d.jsx)(p.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Fe = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const l = (0, u.tz)(),
            {
              closeAvatarMenu: h
            } = (0, o.useContext)(ie),
            {
              closeMobileMenu: m
            } = (0, o.useContext)(ee),
            b = (0, i.default)(Y({
              context: "quickMenu"
            }), n),
            g = a ? v.DX : "a";
          return (0, d.jsx)(_.N_, {
            asChild: !0,
            onSelect: e => {
              h?.(), m?.(), r?.(e)
            },
            ...s,
            children: (0, d.jsxs)(g, {
              ref: c,
              className: b,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), t && (0, d.jsx)(p.ExternalLink, {
                label: l.formatMessage(O.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        We = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          hasNotification: s,
          ...c
        }, l) {
          const h = (0, u.tz)(),
            {
              closeAvatarMenu: m
            } = (0, o.useContext)(ie),
            {
              closeMobileMenu: b
            } = (0, o.useContext)(ee),
            g = (0, i.default)(Y({
              context: "subMenu"
            }), n, s ? ["_1pgq6b1q"] : null),
            f = a ? v.DX : "a";
          return (0, d.jsx)(_.N_, {
            asChild: !0,
            onSelect: e => {
              m?.(), b?.(), r?.(e)
            },
            ...c,
            children: (0, d.jsxs)(f, {
              ref: l,
              className: g,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), t && (0, d.jsx)(p.ExternalLink, {
                label: h.formatMessage(O.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ze = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const l = (0, u.tz)(),
            {
              closeAvatarMenu: h
            } = (0, o.useContext)(ie),
            {
              closeMobileMenu: m
            } = (0, o.useContext)(ee),
            b = (0, i.default)(Y({
              context: "avatarMenu"
            }), n),
            g = a ? v.DX : "a";
          return (0, d.jsx)(_.N_, {
            asChild: !0,
            onSelect: e => {
              h?.(), m?.(), r?.(e)
            },
            ...s,
            children: (0, d.jsxs)(g, {
              ref: c,
              className: b,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), t && (0, d.jsx)(p.ExternalLink, {
                label: l.formatMessage(O.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Xe = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const l = (0, u.tz)(),
            {
              closeAvatarMenu: h
            } = (0, o.useContext)(ie),
            {
              closeMobileMenu: m
            } = (0, o.useContext)(ee),
            b = (0, i.default)(Y({
              context: "nestedMenu"
            }), n),
            g = a ? v.DX : "a";
          return (0, d.jsx)(_.N_, {
            asChild: !0,
            onSelect: e => {
              h?.(), m?.(), r?.(e)
            },
            ...s,
            children: (0, d.jsxs)(g, {
              ref: c,
              className: b,
              children: [(0, d.jsx)(v.xV, {
                children: e
              }), t && (0, d.jsx)(p.ExternalLink, {
                label: l.formatMessage(O.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        Ke = ({
          children: e
        }) => (0, d.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const Je = (0, o.forwardRef)(function({
        children: e,
        dataTestId: a,
        onPress: n,
        ...r
      }, t) {
        const {
          inMobileMenu: s,
          closeMobileMenu: i
        } = (0, o.useContext)(ee), c = (0, C.v6)({
          "data-testid": a,
          onPress: e => {
            n?.(e), i()
          },
          appearance: "secondary",
          size: (0, l.Ub)("(min-width: 1024px)") ? "SM" : "LG",
          className: "ey3skr0"
        }, r);
        return (0, d.jsx)("div", {
          className: s ? "ey3skr1" : "ey3skr2",
          children: (0, d.jsx)(M.Button, {
            ref: t,
            fullWidth: s,
            ...c,
            children: e
          })
        })
      });
      var $e = "_11eee6m7",
        ea = "_11eee6ml";
      const aa = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...Z.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: Z.springClose
          }
        },
        na = ({
          children: e,
          isSearchPage: a
        }) => {
          const {
            formatMessage: n
          } = (0, u.tz)(), {
            isNavHidden: r,
            searchBarOpened: t,
            setSearchBarOpened: s,
            avatarMenuOpened: i
          } = (0, o.useContext)(T);
          (0, o.useEffect)(() => {
            s(a || !1)
          }, []), (0, o.useEffect)(() => {
            s(!1)
          }, [r]), (0, o.useEffect)(() => {
            i && s(!1)
          }, [i]);
          const c = !r && (a || t);
          return (0, d.jsx)(W, {
            showOn: "desktop",
            children: (0, d.jsx)("div", {
              className: "_11eee6m0",
              children: (0, d.jsxs)(j.bL, {
                open: c,
                onOpenChange: s,
                children: [(0, d.jsx)(j.l9, {
                  asChild: !0,
                  children: (0, d.jsx)(M.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: n(c ? O.search_close_button : O.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, d.jsx)(g.AnimatePresence, {
                  children: c && (0, d.jsx)(N.n, {
                    loop: !a,
                    children: (0, d.jsx)(j.UC, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, d.jsx)(g.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: aa,
                        "data-testid": "searchBar",
                        className: (0, m.m)("dark"),
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        ra = (0, o.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        ta = (0, o.forwardRef)(function({
          children: e
        }, a) {
          return (0, d.jsx)("div", {
            role: "search",
            ref: a,
            className: "_11eee6m1",
            children: e
          })
        }),
        sa = (0, o.forwardRef)(function({
          children: e,
          queryMin: a = 0,
          queryMax: n = 100,
          onSearch: r,
          query: t,
          onQueryChange: s,
          target: c,
          onTargetChange: l,
          isSearchPage: _ = !1
        }, h) {
          const {
            formatMessage: m
          } = (0, u.tz)(), {
            inMobileMenu: v,
            closeMobileMenu: b
          } = (0, o.useContext)(ee), [f, x] = (0, w.i)({
            prop: t,
            onChange: s,
            defaultProp: ""
          }), [k, y] = (0, w.i)({
            prop: c,
            onChange: l,
            defaultProp: ""
          }), [C, N] = (0, o.useState)(!1), [S, z] = (0, o.useState)(!1), {
            setForceBackground: L
          } = (0, o.useContext)(T);
          (0, o.useEffect)(() => (L(!0), () => {
            L(!1)
          }), []);
          const I = (e, a) => {
              r(e, a, b), z(!0)
            },
            E = {
              inSearchMenu: !0,
              searchTarget: k,
              setSearchTarget: e => {
                y(e), f && f.length >= a && I(f, e)
              },
              onChange: s
            },
            R = (0, o.useMemo)(() => v ? (0, d.jsx)(g.AnimatePresence, {
              children: C && (0, d.jsx)(g.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: aa,
                transition: Z.springOpen,
                "data-testid": "searchBar",
                children: (0, d.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, d.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !v && !_ && (0, d.jsx)("div", {
                className: "_11eee6md",
                children: (0, d.jsx)(j.bm, {
                  className: "_11eee6me",
                  children: (0, d.jsx)(p.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: m(O.search_close_button)
                  })
                })
              })]
            }), [v, C, _, m, e]);
          return (0, d.jsxs)(ra.Provider, {
            value: E,
            children: [(0, d.jsxs)("div", {
              className: (0, i.default)("_11eee6m6", {
                [$e]: v
              }),
              "data-testid": "searchBar",
              children: [(0, d.jsx)(M.IconButton, {
                onClick: () => {
                  I(f, k)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: m(S ? O.search_disabled_aria_label : O.search_action)
              }), (0, d.jsx)("div", {
                className: "_11eee6mg",
                children: (0, d.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: f,
                  onChange: e => (e => {
                    x(e), z(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && f && k && I(f, k)
                  },
                  onFocus: () => N(!0),
                  placeholder: m(O.search_placeholder),
                  ref: h,
                  enterKeyHint: "search",
                  maxLength: n,
                  min: a,
                  max: n
                })
              }), v && C && (0, d.jsx)(M.IconButton, {
                onClick: () => N(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: m(O.search_close_button)
              })]
            }), R]
          })
        }),
        oa = ({
          children: e
        }) => {
          const {
            formatMessage: a
          } = (0, u.tz)();
          return (0, d.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": a(O.search_categories),
            children: e
          })
        },
        ia = (0, o.forwardRef)(function({
          children: e,
          value: a,
          title: n,
          active: r,
          hasChevron: t,
          ...s
        }, c) {
          const {
            setSearchTarget: l,
            searchTarget: u
          } = (0, o.useContext)(ra), {
            inSearchTargetDropdown: _,
            setRootSearchTarget: h,
            rootSearchTarget: m
          } = (0, o.useContext)(ca), v = r => {
            l?.(r), _ && "string" == typeof e && h({
              key: a,
              title: n
            })
          }, p = r || Boolean(u) && (u === a || u === m.key);
          return _ ? (0, d.jsx)("button", {
            ref: c,
            type: "button",
            className: (0, i.default)("_11eee6mq", {
              [ea]: p
            }),
            onClick: () => v(a),
            value: a,
            ...s,
            role: "radio",
            "aria-checked": p,
            children: e
          }) : (0, d.jsx)(M.Tag.Root, {
            className: "_11eee6mj",
            color: p ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => v(a),
            hasBorder: !1,
            ...s,
            asChild: !0,
            children: (0, d.jsxs)("button", {
              type: "button",
              ref: c,
              value: a,
              role: "radio",
              "aria-checked": p,
              children: [(0, d.jsx)(M.Tag.Label, {
                asChild: !0,
                children: (0, d.jsx)(M.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), t && (0, d.jsx)(M.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        ca = (0, o.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        la = ({
          title: e,
          children: a
        }) => {
          const [n, r] = (0, o.useState)(!1), [t, s] = (0, o.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, o.useContext)(ra), {
            avatarMenuOpened: c
          } = (0, o.useContext)(T);
          i !== t.key && "" !== t.key && s({
            key: "",
            title: ""
          });
          const l = !c && n;
          return (0, d.jsxs)(j.bL, {
            open: l,
            onOpenChange: r,
            children: [(0, d.jsx)(j.l9, {
              asChild: !0,
              children: (0, d.jsx)(ia, {
                value: e,
                title: e,
                active: !!t.key,
                hasChevron: !0,
                children: t.title || e
              })
            }), (0, d.jsx)(ca.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: t,
                setRootSearchTarget: e => {
                  s(a => "function" == typeof e ? e(a) : e), r(!1)
                }
              },
              children: (0, d.jsx)(j.UC, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: a
              })
            })]
          })
        },
        ua = (0, o.forwardRef)(function({
          errorMessage: e
        }, a) {
          return e && (0, d.jsx)("div", {
            ref: a,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        da = ({
          to: e,
          target: a,
          className: n,
          onNavigate: r,
          onClick: t,
          reloadDocument: s,
          children: o,
          ...i
        }) => {
          const c = e?.startsWith("http");
          return (0, d.jsx)("a", {
            href: e,
            className: n,
            onClick: a => {
              t?.(a), c || s || (r ? (a.preventDefault(), r(e)) : (a.preventDefault(), window.history.pushState({}, "", e)))
            },
            target: a,
            ...i,
            children: o
          })
        };
      var _a = "_13sb4ht3",
        ha = "_13sb4ht4";
      const ma = () => (0, d.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, d.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [_a, ha, ""].map((e, a) => (0, d.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + a))
        })
      });
      var va = "corzs33";
      const pa = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        ba = ({
          quickAccessHidden: e,
          children: a,
          href: n,
          onNavigate: r
        }) => {
          const t = (0, u.tz)(),
            [s, c] = (0, o.useState)(!1),
            l = (0, o.useRef)(null),
            [_, h] = (0, o.useState)(!1),
            {
              brand: m,
              brandTitle: v,
              isNavHidden: p,
              simpleMenu: b
            } = (0, o.useContext)(T),
            f = n || "/";
          return (0, o.useEffect)(() => {
            c(!1)
          }, [p, e]), (0, o.useEffect)(() => {
            const e = () => {
              const e = l.current?.getBoundingClientRect().width || 0,
                a = l.current?.children;
              Array.from(Array(a?.length)).reduce((e, n, r) => e + a?.item(r)?.getBoundingClientRect().width, 0) + 60 >= e ? h(!1) : h(!0)
            };
            return v ? (e(), window.addEventListener("resize", e)) : (h(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [v]), (0, d.jsxs)("div", {
            className: "corzs30",
            children: [(0, d.jsx)(W, {
              showOn: "desktop",
              children: (0, d.jsxs)("div", {
                className: "corzs31",
                children: [(0, d.jsxs)("div", {
                  className: va,
                  children: [!a && (0, d.jsx)(da, {
                    to: f,
                    "aria-label": t.formatMessage(O.nav_rockstargames_home),
                    onNavigate: r,
                    className: "corzs39",
                    children: (0, d.jsx)(ma, {})
                  }), a && (0, d.jsxs)(j.bL, {
                    open: s,
                    onOpenChange: c,
                    children: [(0, d.jsx)(W, {
                      showOn: "desktop",
                      children: (0, d.jsx)(j.l9, {
                        asChild: !0,
                        children: (0, d.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": t.formatMessage(O.nav_rockstargames_logo),
                          children: (0, d.jsx)(ma, {})
                        })
                      })
                    }), (0, d.jsx)(g.AnimatePresence, {
                      children: s && (0, d.jsx)(W, {
                        showOn: "desktop",
                        children: (0, d.jsx)(j.UC, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, d.jsx)(g.motion.div, {
                            className: "corzs3a",
                            variants: pa,
                            initial: "closed",
                            animate: "open",
                            exit: "closed",
                            transition: {
                              duration: .2
                            },
                            children: a
                          })
                        })
                      })
                    })]
                  })]
                }), (m || v) && (0, d.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, d.jsx)("div", {
                    className: "corzs35"
                  }), m && (0, d.jsx)("div", {
                    className: "corzs36",
                    children: m
                  }), v && (0, d.jsx)(M.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            }), (0, d.jsx)(W, {
              showOn: "mobile",
              children: (0, d.jsxs)("div", {
                className: "corzs32",
                ref: l,
                children: [(0, d.jsx)("div", {
                  className: va,
                  children: (!m || b) && (0, d.jsx)(da, {
                    to: f,
                    "aria-label": t.formatMessage(O.nav_rockstargames_home),
                    onNavigate: r,
                    className: (0, i.clsx)("corzs39", {
                      corzs3b: _
                    }),
                    tabIndex: _ ? -1 : 0,
                    children: (0, d.jsx)(ma, {})
                  })
                }), (m || v) && (0, d.jsxs)("div", {
                  className: (0, i.clsx)("corzs34", {
                    corzs3b: v && !_
                  }),
                  children: [b && (0, d.jsx)("div", {
                    className: "corzs35"
                  }), m && (0, d.jsx)("div", {
                    className: "corzs36",
                    children: m
                  }), v && (0, d.jsx)(M.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: v
                  })]
                })]
              })
            })]
          })
        },
        ga = {
          MenuContext: ke,
          HiddenMenuContext: ye,
          SubMenuContext: Ge,
          MobileMenuContext: ee,
          GlobalNavigationContext: T
        }
    }
  }
]);