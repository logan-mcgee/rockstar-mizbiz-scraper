try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1cd53e6e-9916-4277-863e-52314f30bcc1", e._sentryDebugIdIdentifier = "sentry-dbid-1cd53e6e-9916-4277-863e-52314f30bcc1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7342], {
    67342(e, a, n) {
      n.r(a), n.d(a, {
        Actions: () => ta,
        AvatarMenu: () => fe,
        AvatarMenuLanguageLabel: () => Ne,
        AvatarMenuSection: () => Me,
        AvatarMenuSectionContent: () => Ce,
        AvatarMenuSectionHeader: () => je,
        AvatarMenuSectionHeaderDropdown: () => ke,
        Breakpoint: () => ae,
        CallToAction: () => sa,
        Contexts: () => Na,
        Header: () => Y,
        Menu: () => Ae,
        MenuContent: () => Ve,
        MenuIcon: () => Ke,
        MenuItem: () => Ee,
        MenuLink: () => Je,
        MenuList: () => Le,
        MenuSub: () => Ue,
        MenuTrigger: () => Te,
        MobileMenu: () => ce,
        MobileMenuNav: () => oe,
        QuickMenu: () => we,
        Root: () => V,
        Search: () => la,
        SearchBar: () => _a,
        SearchContainer: () => da,
        SearchError: () => ba,
        SearchFilters: () => ma,
        SearchTarget: () => ha,
        SearchTargetDropdown: () => ga,
        SiteTitle: () => Ca
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
        o = n(4637),
        i = n(81270),
        c = n(55339),
        l = n(30212),
        u = n(14376),
        d = n(51177),
        _ = n(40949),
        m = n(68925);

      function h(e) {
        var a = (0, m.A)(),
          n = a.formatMessage,
          r = a.textComponent,
          t = void 0 === r ? o.Fragment : r,
          s = e.id,
          i = e.description,
          c = e.defaultMessage,
          l = e.values,
          u = e.children,
          d = e.tagName,
          _ = void 0 === d ? t : d,
          h = n({
            id: s,
            description: i,
            defaultMessage: c
          }, l, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof u ? u(Array.isArray(h) ? h : [h]) : _ ? o.createElement(_, null, h) : o.createElement(o.Fragment, null, h)
      }
      h.displayName = "FormattedMessage";
      var v = o.memo(h, function(e, a) {
        var n = e.values,
          r = (0, d.Tt)(e, ["values"]),
          t = a.values,
          s = (0, d.Tt)(a, ["values"]);
        return (0, _.bN)(t, n) && (0, _.bN)(r, s)
      });
      v.displayName = "MemoizedFormattedMessage";
      const g = v;
      var b = n(39793),
        p = (n(59066), n(33920)),
        f = n(20640),
        x = n(67594),
        M = n(27937),
        j = n(52920),
        k = n(14144),
        C = (n(46077), n(13517)),
        N = n(80676),
        y = n(19563),
        w = n(93121),
        S = n(46929),
        z = n(58754),
        O = n(34364),
        I = n(94555),
        A = n(28050),
        L = n(39080),
        R = n(80692);
      const E = {
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
      var T = (0, u.YK)({
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
      const q = () => {
        const e = (0, o.useRef)(null);
        return (0, b.jsx)("button", {
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
          children: (0, b.jsx)(g, {
            ...T.accessibility_skip_button
          })
        })
      };

      function P(e) {
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

      function D(e, a) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          a && (r = r.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function B(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {};
          a % 2 ? D(Object(n), !0).forEach(function(a) {
            var r, t, s;
            r = e, t = a, s = n[a], (t = P(t)) in r ? Object.defineProperty(r, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[t] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
          })
        }
        return e
      }

      function G(e, a) {
        var n = {};
        for (var r in e) n[r] = a(e[r], r);
        return n
      }
      var H = (e, a, n) => {
          for (var r of Object.keys(e)) {
            var t;
            if (e[r] !== (null !== (t = a[r]) && void 0 !== t ? t : n[r])) return !1
          }
          return !0
        },
        Q = e => {
          var a = a => {
            var n = e.defaultClassName,
              r = B(B({}, e.defaultVariants), a);
            for (var t in r) {
              var s, o = null !== (s = r[t]) && void 0 !== s ? s : e.defaultVariants[t];
              if (null != o) {
                var i = o;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var c = e.variantClassNames[t][i];
                c && (n += " " + c)
              }
            }
            for (var [l, u] of e.compoundVariants) H(l, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return a.variants = () => Object.keys(e.variantClassNames), a.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return G(e.variantClassNames, e => G(e, e => e.split(" ")[0]))
            }
          }, a
        },
        F = Q({
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
      const Y = ({
          children: e
        }) => {
          const {
            simpleMenu: a
          } = (0, o.useContext)(W);
          return (0, b.jsx)("header", {
            className: (0, i.default)(F({
              layout: a ? "simple" : "default"
            }), "ut2qrfa"),
            children: e
          })
        },
        W = (0, o.createContext)({
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
        V = (Z = ({
          children: e,
          brand: a,
          brandTitle: n,
          mode: r = "default",
          navColorTheme: t = "dark",
          forceSolidBackground: s = !1,
          forceVisibility: l,
          simpleMenu: u = !1,
          locale: d
        }) => {
          const [_, m] = (0, o.useState)(!1), [h, v] = (0, o.useState)(!0), [g, p] = (0, o.useState)(!1), [f, x] = (0, o.useState)(!1), [M, j] = (0, o.useState)(!1), k = (0, o.useRef)(null), C = (0, o.useRef)(null), [N, y] = (0, o.useState)(null), [w, S] = (0, o.useState)(s), z = (0, o.useMemo)(() => "visible" !== l && ("hidden" === l || _), [_, l]);
          (0, o.useEffect)(() => {
            let e = window.scrollY;
            const a = () => {
                const a = window.scrollY > 140,
                  n = window.scrollY > e;
                m(a && n), e = window.scrollY
              },
              n = () => {
                v(0 === window.scrollY)
              };
            return window.addEventListener("scroll", a), window.addEventListener("scroll", n), () => {
              window.removeEventListener("scroll", a), window.removeEventListener("scroll", n)
            }
          }, []), (0, o.useEffect)(() => {
            const e = "data-show-more-content",
              a = C.current,
              n = () => {
                const n = !a?.contains(document.activeElement);
                z && n ? document.body.setAttribute(e, "") : document.body.removeAttribute(e)
              };
            return n(), document.addEventListener("focusin", n), document.addEventListener("focusout", n), () => {
              document.removeEventListener("focusin", n), document.removeEventListener("focusout", n), document.body.removeAttribute(e)
            }
          }, [z, C]), (0, o.useEffect)(() => {
            const e = e => {
              m(e.detail.isHidden)
            };
            return window.addEventListener("header:hideNav", e), () => {
              window.removeEventListener("header:hideNav", e)
            }
          }, []);
          const O = !h || s || w ? "dark" : t;
          return (0, b.jsx)("div", {
            id: "global-nav-root",
            className: "siteHeaderContainer",
            children: (0, b.jsx)("div", {
              ref: y,
              children: N && (0, b.jsx)(c.NP, {
                colorScheme: O,
                defaultColorScheme: O,
                defaultPlatformScale: "desktop",
                container: N,
                locale: d,
                children: (0, b.jsx)(W.Provider, {
                  value: {
                    brand: a,
                    brandTitle: n,
                    isNavHidden: z,
                    containerRef: k,
                    navContentRef: C,
                    simpleMenu: u,
                    setForceBackground: S,
                    avatarMenuOpened: g,
                    setAvatarMenuOpened: p,
                    mainMenuOpened: f,
                    setMainMenuOpened: x,
                    searchBarOpened: M,
                    setSearchBarOpened: j,
                    locale: d
                  },
                  children: (0, b.jsxs)("div", {
                    className: (0, i.default)("ut2qrf1", "ut2qrf0"),
                    ref: k,
                    lang: d,
                    "data-scroll-top": h,
                    "data-color-mode": r,
                    "data-theme": O,
                    "data-force-background": s || w,
                    children: [(0, b.jsx)(q, {}), (0, b.jsx)("div", {
                      className: "ut2qrf2"
                    }), (0, b.jsxs)("div", {
                      ref: C,
                      className: "ut2qrf5",
                      "data-ishidden": z,
                      "data-testid": "globalnav__container",
                      children: [(0, b.jsx)("canvas", {
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
                  messages: (a = E[e], {
                    ...a
                  })
                };
                var a
              })(e))(e.locale))
            })()
          }, []), (0, b.jsx)(l.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            children: a && (0, b.jsx)(Z, {
              ...e
            })
          }, "intl-provider")
        });
      var Z, U = Q({
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
        K = Q({
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
        J = "_1pgq6b1f",
        X = s({
          desktop: () => $,
          mobile: () => ee
        }),
        $ = "dsroxs1",
        ee = "dsroxs0";
      const ae = ({
          showOn: e,
          ...a
        }) => (0, b.jsx)(M.Slot, {
          className: e ? X[e] : "",
          ...a
        }),
        ne = {
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
        re = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        };
      var te = "vkitevd";
      const se = (0, o.createContext)({
          openedNav: ""
        }),
        oe = ({
          children: e
        }) => {
          const [a, n] = (0, o.useState)("");
          return (0, b.jsx)(se.Provider, {
            value: {
              openedNav: a
            },
            children: (0, b.jsx)(p.Root, {
              value: a,
              onValueChange: n,
              children: (0, b.jsx)(p.List, {
                className: "vkitev1",
                children: e
              })
            })
          })
        },
        ie = (0, o.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        ce = ({
          children: e
        }) => {
          const a = (0, m.A)(),
            [n, r] = (0, o.useState)(!1),
            [t, s] = (0, o.useState)(!1),
            [c, l] = (0, o.useState)(!1),
            {
              brand: u,
              setForceBackground: d,
              simpleMenu: _
            } = (0, o.useContext)(W);
          (0, o.useEffect)(() => {
            n && d(!0)
          }, [n]), (0, o.useEffect)(() => {
            const e = e => {
              const a = e?.target;
              n && a.innerWidth >= 1024 && v()
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [n]);
          const h = {
              show: {
                height: `calc(100dvh - ${(0,k.us)("var(--k8we7i6)","0px")})`,
                paddingBottom: n && u ? "var(--k8we7i0)" : "",
                transition: {
                  ...ne.hamburgerOpen,
                  delay: .2,
                  staggerChildren: .15
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: ne.hamburgerClose
              }
            },
            v = () => {
              r(!n), s(!1)
            };
          return _ ? null : (0, b.jsx)(ie.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                r(!1)
              },
              setHasQuickMenu: l
            },
            children: (0, b.jsxs)(N.Root, {
              open: n,
              onOpenChange: r,
              children: [(0, b.jsx)(ae, {
                showOn: "mobile",
                children: (0, b.jsx)(le, {
                  onClick: v,
                  isMenuOpen: n
                })
              }), (0, b.jsx)(C.AnimatePresence, {
                onExitComplete: () => d(!1),
                children: n && (0, b.jsx)(ae, {
                  showOn: "mobile",
                  children: (0, b.jsxs)(C.motion.div, {
                    className: "vkiteve",
                    variants: h,
                    animate: "show",
                    initial: "hidden",
                    exit: "hidden",
                    children: [(0, b.jsx)(N.Overlay, {
                      className: "vkiteva"
                    }), (0, b.jsx)(N.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => r(!1),
                      children: (0, b.jsxs)(C.motion.div, {
                        className: (0, i.default)((0, x.m)("dark"), "vkitev4", "vkitev7"),
                        variants: h,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, b.jsxs)(y.VisuallyHidden, {
                          children: [(0, b.jsx)(N.Title, {
                            children: a.formatMessage(T.nav_mobilemenu_title)
                          }), (0, b.jsx)(N.Description, {
                            children: a.formatMessage(T.nav_mobilemenu_title)
                          })]
                        }), (0, b.jsx)("div", {
                          className: (0, i.default)(t ? "vkitev9" : "", "vkitev6"),
                          children: (0, b.jsx)(C.motion.div, {
                            className: (0, i.default)("vkitev0", c ? "vkitev8" : ""),
                            children: o.Children.map(e, e => (0, b.jsx)(C.motion.div, {
                              variants: re,
                              transition: ne.staggerFade,
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
        le = ({
          className: e,
          isMenuOpen: a,
          ...n
        }) => {
          const r = (0, m.A)();
          return (0, b.jsx)("div", {
            className: (0, i.default)("vkitevb", e),
            children: (0, b.jsxs)(N.Trigger, {
              title: r.formatMessage(a ? T.nav_mobilemenu_close : T.nav_mobilemenu_open),
              type: "button",
              className: "vkitevc",
              "data-testid": "hamburgerNav",
              ...n,
              children: [(0, b.jsx)("span", {
                className: te,
                "data-opened": a
              }), (0, b.jsx)("span", {
                className: te,
                "data-opened": a
              }), (0, b.jsx)("span", {
                className: te,
                "data-opened": a
              })]
            })
          })
        },
        ue = (...e) => {
          const a = e.filter(Boolean);
          return a.length <= 1 ? a[0] || null : function(e) {
            for (const n of a) "function" == typeof n ? n(e) : n && (n.current = e)
          }
        },
        de = ({
          children: e,
          className: a,
          ...n
        }) => {
          const {
            containerRef: r,
            locale: t
          } = (0, o.useContext)(W);
          return (0, b.jsx)(c.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            locale: t,
            children: (0, b.jsx)(O.Root, {
              className: (0, i.default)("g1xx1x0 ut2qrf0", a),
              container: r?.current,
              ...n,
              children: e
            })
          })
        };
      var _e = "m27a3y7",
        me = t((e, a) => {
          a.exports = "PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ0IiBoZWlnaHQ9IjQ0IiByeD0iMjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTI5LjMzMzQgMzAuMjVWMjguNDE2N0MyOS4zMzM0IDI3LjQ0NDIgMjguOTQ3MSAyNi41MTE2IDI4LjI1OTUgMjUuODIzOUMyNy41NzE4IDI1LjEzNjMgMjYuNjM5MiAyNC43NSAyNS42NjY3IDI0Ljc1SDE4LjMzMzRDMTcuMzYxIDI0Ljc1IDE2LjQyODMgMjUuMTM2MyAxNS43NDA3IDI1LjgyMzlDMTUuMDUzMSAyNi41MTE2IDE0LjY2NjcgMjcuNDQ0MiAxNC42NjY3IDI4LjQxNjdWMzAuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS45OTk5IDIxLjA4MzNDMjQuMDI1IDIxLjA4MzMgMjUuNjY2NiAxOS40NDE3IDI1LjY2NjYgMTcuNDE2N0MyNS42NjY2IDE1LjM5MTYgMjQuMDI1IDEzLjc1IDIxLjk5OTkgMTMuNzVDMTkuOTc0OSAxMy43NSAxOC4zMzMzIDE1LjM5MTYgMTguMzMzMyAxNy40MTY3QzE4LjMzMzMgMTkuNDQxNyAxOS45NzQ5IDIxLjA4MzMgMjEuOTk5OSAyMS4wODMzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
        });
      const he = (0, o.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        ve = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        ge = {
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
        be = {
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
        pe = ({
          children: e,
          className: a
        }) => (0, b.jsx)("div", {
          className: (0, i.default)("m27a3y1", a),
          children: e
        }),
        fe = ({
          avatarIconUrl: e,
          nickname: a,
          isLoggedIn: n,
          children: r,
          onOpenChange: t
        }) => {
          const s = (0, m.A)(),
            i = me(),
            [c, l] = (0, o.useState)(["open"]),
            {
              isNavHidden: u,
              setAvatarMenuOpened: d,
              mainMenuOpened: _,
              setMainMenuOpened: h
            } = (0, o.useContext)(W),
            [v, g] = (0, o.useState)(!1),
            [p, f] = (0, o.useState)(!1),
            [M, j] = (0, o.useState)(u),
            k = () => {
              g(!1), f(!1)
            };
          M !== u && (j(u), u && k());
          const O = e => {
            l(["open", ...e.filter(e => "open" !== e)])
          };
          return (0, o.useEffect)(() => {
            const e = v || p;
            e && _ && h(!1), d(e)
          }, [v, p, _, h, d]), (0, b.jsxs)(he.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: c,
              closeAvatarMenu: k
            },
            children: [(0, b.jsx)(S.Root, {
              open: v,
              onOpenChange: e => {
                t?.(e), g(e)
              },
              modal: !1,
              children: (0, b.jsx)(ae, {
                showOn: "desktop",
                children: (0, b.jsxs)(pe, {
                  children: [(0, b.jsx)(S.Trigger, {
                    asChild: !0,
                    children: (0, b.jsx)(w.IconButton, {
                      size: "SM",
                      label: s.formatMessage(v ? T.avatar_menu_close : T.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: _e,
                      "aria-label": s.formatMessage(v ? T.avatar_menu_close : T.avatar_menu_open),
                      "data-testid": "avatarMenuButtonDesktop",
                      "data-logged-in": n,
                      children: e && (0, b.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i,
                        alt: a
                      })
                    })
                  }), (0, b.jsx)(C.AnimatePresence, {
                    children: v && (0, b.jsx)(S.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      onOpenAutoFocus: e => e.preventDefault(),
                      className: (0, x.m)("dark"),
                      children: (0, b.jsx)(C.motion.div, {
                        variants: ve,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, b.jsx)(z.Root, {
                          type: "multiple",
                          value: c,
                          onValueChange: O,
                          children: (0, b.jsx)(Ue, {
                            className: "m27a3y2 _1r3j5az0",
                            children: r
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, b.jsx)(N.Root, {
              open: p,
              onOpenChange: e => {
                t?.(e), f(e)
              },
              children: (0, b.jsx)(ae, {
                showOn: "mobile",
                children: (0, b.jsxs)(pe, {
                  children: [(0, b.jsx)(N.Trigger, {
                    className: _e,
                    "aria-label": s.formatMessage(p ? T.avatar_menu_close : T.avatar_menu_open),
                    "data-testid": "avatarMenuButtonMobile",
                    asChild: !0,
                    "data-logged-in": n,
                    children: (0, b.jsx)(w.IconButton, {
                      size: "SM",
                      label: s.formatMessage(v ? T.avatar_menu_close : T.avatar_menu_open),
                      appearance: "ghost",
                      icon: "Person",
                      className: _e,
                      "aria-label": s.formatMessage(v ? T.avatar_menu_close : T.avatar_menu_open),
                      children: e && (0, b.jsx)("img", {
                        className: "m27a3y8",
                        src: e || i
                      })
                    })
                  }), (0, b.jsx)(C.AnimatePresence, {
                    children: p && (0, b.jsx)(de, {
                      asChild: !0,
                      children: (0, b.jsxs)(N.Content, {
                        forceMount: !0,
                        className: (0, x.m)("dark"),
                        children: [(0, b.jsxs)(y.VisuallyHidden, {
                          children: [(0, b.jsx)(N.Title, {
                            children: s.formatMessage(T.nav_avatarmenu_title)
                          }), (0, b.jsx)(N.Description, {
                            children: s.formatMessage(T.nav_avatarmenu_title)
                          })]
                        }), (0, b.jsxs)(C.motion.div, {
                          variants: be,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "m27a3y3",
                          children: [(0, b.jsx)(N.Close, {
                            className: "m27a3y5",
                            "aria-label": s.formatMessage(T.avatar_menu_close),
                            children: (0, b.jsx)("div", {
                              className: "m27a3y6"
                            })
                          }), (0, b.jsx)(z.Root, {
                            type: "multiple",
                            value: c,
                            onValueChange: O,
                            children: (0, b.jsx)(Ue, {
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
        xe = (0, o.createContext)({
          avatarMenuItemId: ""
        }),
        Me = ({
          children: e,
          value: a
        }) => {
          const n = (0, o.useId)();
          return (0, b.jsx)(xe.Provider, {
            value: {
              avatarMenuItemId: a || n
            },
            children: (0, b.jsx)(z.Item, {
              value: a || n,
              className: "m27a3y9",
              children: e
            })
          })
        },
        je = ({
          children: e,
          ...a
        }) => (0, b.jsx)(z.Header, {
          asChild: !0,
          children: (0, b.jsx)("li", {
            className: "m27a3y0",
            children: (0, b.jsx)(z.Trigger, {
              className: "m27a3ya",
              ...a,
              children: e
            })
          })
        }),
        ke = ({
          children: e,
          ...a
        }) => (0, b.jsx)(z.Header, {
          style: {
            margin: 0
          },
          children: (0, b.jsxs)(z.Trigger, {
            className: "m27a3yb",
            "data-testid": "header-language-selector-button",
            ...a,
            children: [e, (0, b.jsx)(j.ChevronDown, {
              label: "",
              size: "SM",
              className: "m27a3yc"
            })]
          })
        }),
        Ce = ({
          children: e,
          ...a
        }) => {
          const {
            avatarMenuOpenItems: n
          } = (0, o.useContext)(he), {
            avatarMenuItemId: r
          } = (0, o.useContext)(xe), t = n.indexOf(r) >= 0;
          return (0, b.jsx)(z.Content, {
            forceMount: !0,
            asChild: !0,
            ...a,
            children: (0, b.jsx)(C.motion.div, {
              variants: ge,
              initial: "closed",
              animate: t ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        },
        Ne = ({
          children: e,
          ...a
        }) => (0, b.jsx)("div", {
          className: "m27a3yd",
          ...a,
          children: e
        }),
        ye = (0, o.createContext)({
          inQuickMenu: !1
        }),
        we = ({
          children: e
        }) => {
          const {
            inMobileMenu: a,
            setHasQuickMenu: n
          } = (0, o.useContext)(ie), r = {
            hidden: {
              opacity: 0,
              y: "100%",
              transition: ne.hamburgerClose
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                ...ne.hamburgerOpen,
                staggerChildren: .15,
                delay: ne.hamburgerOpen.duration && .8 * ne.hamburgerOpen.duration,
                delayChildren: .15
              }
            }
          }, t = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: ne.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: ne.staggerFade
            }
          }, s = (0, i.default)((0, x.m)("dark"), "_1xtz6n0");
          return (0, o.useEffect)(() => (n?.(!0), () => {
            n?.(!1)
          }), []), a ? (0, b.jsx)(ye.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, b.jsx)(p.Root, {
              asChild: !0,
              children: (0, b.jsx)(C.motion.div, {
                variants: r,
                className: s,
                children: o.Children.map(e, e => (0, b.jsx)(C.motion.li, {
                  variants: t,
                  className: "_1xtz6n1",
                  children: e
                }))
              })
            })
          }) : (0, b.jsx)(ye.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, b.jsx)(p.Root, {
              asChild: !0,
              children: (0, b.jsx)("div", {
                className: s,
                children: e
              })
            })
          })
        },
        Se = e => {
          e.preventDefault()
        },
        ze = e => {
          e.nativeEvent.repeat && e.preventDefault()
        },
        Oe = (0, o.createContext)({
          inMenu: !1,
          openedNav: "",
          setOpenedNav: e => {}
        }),
        Ie = (0, o.createContext)({
          isHidden: !1
        }),
        Ae = ({
          children: e
        }) => {
          const a = (0, m.A)(),
            [n, r] = (0, o.useState)(""),
            [t, s] = (0, o.useState)(e),
            [i, c] = (0, o.useState)([]),
            l = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            {
              isNavHidden: d,
              mainMenuOpened: _,
              avatarMenuOpened: h,
              setMainMenuOpened: v
            } = (0, o.useContext)(W),
            {
              inAvatarMenu: g
            } = (0, o.useContext)(he),
            f = (0, o.useCallback)(() => {
              const a = u.current;
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
              let d = l;
              if (l > 0 && (d = l - 2), i) {
                const a = [],
                  n = [];
                o.Children.forEach(e, (e, r) => {
                  r < d ? a.push(e) : n.push(e)
                }), a && s(a), n && c(n)
              } else s(e), c([])
            }, [e, u?.current]);
          (0, o.useEffect)(() => {
            const e = new ResizeObserver(f);
            return u?.current && e.observe(u.current), () => {
              u?.current && e.unobserve(u.current)
            }
          }, [e, u?.current]), (0, o.useEffect)(() => {
            r("")
          }, [d]), (0, o.useEffect)(() => {
            const e = () => r("");
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), (0, o.useEffect)(() => {
            _ || "" === n || r("")
          }, [_]), (0, o.useEffect)(() => {
            v("" !== n)
          }, [n, h, _, g]);
          const x = U({
              visibility: "visible"
            }),
            M = U({
              visibility: "hidden"
            });
          return (0, b.jsx)(Oe.Provider, {
            value: {
              inMenu: !0,
              openedNav: n,
              setOpenedNav: r
            },
            children: (0, b.jsx)(ae, {
              showOn: "desktop",
              children: (0, b.jsxs)(p.Root, {
                className: "_1pgq6b10",
                value: n,
                onValueChange: r,
                children: [(0, b.jsxs)(Le, {
                  ref: l,
                  className: x,
                  children: [t, i?.length > 0 && (0, b.jsxs)(Ee, {
                    children: [(0, b.jsx)(Te, {
                      "data-testid": "navMore",
                      children: a.formatMessage(T.nav_more_dropdown)
                    }), (0, b.jsx)(Ve, {
                      children: (0, b.jsx)(Ue, {
                        children: (0, b.jsx)(Le, {
                          children: i
                        })
                      })
                    })]
                  })]
                }), (0, b.jsx)("div", {
                  className: "_1pgq6b14",
                  children: (0, b.jsx)(Le, {
                    ref: u,
                    className: M,
                    "aria-hidden": "true",
                    children: (0, b.jsx)(Ie.Provider, {
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
        Le = (0, o.forwardRef)(function({
          children: e,
          className: a,
          ...n
        }, r) {
          return (0, b.jsx)(p.List, {
            ref: r,
            className: (0, i.default)("_1pgq6b1e", a),
            ...n,
            children: e
          })
        }),
        Re = (0, o.createContext)({
          value: ""
        }),
        Ee = (0, o.forwardRef)(function({
          testId: e,
          children: a,
          ...n
        }, r) {
          const {
            depth: t
          } = (0, o.useContext)(Ze), {
            inMobileMenu: s
          } = (0, o.useContext)(ie), c = (0, o.useRef)(null), l = `rsm-${(0,f.useId)()}`, u = "_1pgq6b15", d = "_1pgq6b16";
          return (0, b.jsx)(Re.Provider, {
            value: {
              value: l,
              ref: c
            },
            children: (0, b.jsx)(p.Item, {
              value: l,
              ref: ue(r, c),
              className: (0, i.default)({
                [u]: !0,
                [d]: 1 === t && !s
              }),
              "data-testid": e,
              "data-menu-item": t,
              ...n,
              children: a
            })
          })
        }),
        Te = ({
          children: e,
          ...a
        }) => {
          const {
            inMenu: n
          } = (0, o.useContext)(Oe), {
            inAvatarMenu: r
          } = (0, o.useContext)(he), {
            inQuickMenu: t
          } = (0, o.useContext)(ye), {
            inMobileMenu: s
          } = (0, o.useContext)(ie), {
            inSubMenu: i,
            depth: c
          } = (0, o.useContext)(Ze), l = {
            ...a,
            "data-menu-trigger": !0
          };
          return c > 1 ? (0, b.jsx)(Qe, {
            ...l,
            children: e
          }) : r ? (0, b.jsx)(Be, {
            ...l,
            children: e
          }) : i ? (0, b.jsx)(He, {
            ...l,
            children: e
          }) : t ? (0, b.jsx)(Ge, {
            ...l,
            children: e
          }) : s ? (0, b.jsx)(De, {
            ...l,
            children: e
          }) : n ? (0, b.jsx)(Pe, {
            ...l,
            children: e
          }) : void 0
        },
        qe = e => {
          const a = (0, m.A)();
          return (0, b.jsx)(j.ChevronDown, {
            ...e,
            label: ` - ${a.formatMessage(T.nav_rockstargames_submenu_indicator)}`,
            className: "_1pgq6b1g"
          })
        },
        Pe = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, b.jsxs)(p.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onKeyDown: ze,
            onClick: r,
            className: (0, i.default)(J, K({
              context: "mainMenu"
            }), n),
            ...t,
            children: [a, (0, b.jsx)(qe, {})]
          })
        },
        De = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, b.jsxs)(p.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: r,
            className: (0, i.default)(J, K({
              context: "mobileMenu"
            }), n),
            ...t,
            children: [a, (0, b.jsx)(qe, {
              size: "LG"
            })]
          })
        },
        Be = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, b.jsxs)(p.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: r,
            className: (0, i.default)(J, K({
              context: "avatarMenu"
            }), n),
            ...t,
            children: [a, (0, b.jsx)(qe, {})]
          })
        },
        Ge = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, b.jsxs)(p.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: r,
            className: (0, i.default)(J, K({
              context: "quickMenu"
            }), n),
            ...t,
            children: [a, (0, b.jsx)(qe, {})]
          })
        },
        He = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, b.jsxs)(p.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: r,
            className: (0, i.default)(J, K({
              context: "subMenu"
            }), n),
            ...t,
            children: [a, (0, b.jsx)(qe, {})]
          })
        },
        Qe = e => {
          const {
            children: a,
            className: n,
            onClick: r,
            ...t
          } = e;
          return (0, b.jsxs)(p.Trigger, {
            onPointerMove: Se,
            onPointerLeave: Se,
            onClick: r,
            className: (0, i.default)(J, K({
              context: "nestedMenu"
            }), n),
            ...t,
            children: [a, (0, b.jsx)(qe, {})]
          })
        },
        Fe = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Ye = {
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
        We = {
          enter: {
            opacity: 1,
            zIndex: 101
          },
          exit: {
            opacity: 1,
            zIndex: 100
          }
        },
        Ve = (0, o.forwardRef)(function({
          children: e,
          animationOverride: a,
          ...n
        }, r) {
          const {
            navContentRef: t
          } = (0, o.useContext)(W), {
            inSubMenu: s,
            openedNav: c
          } = (0, o.useContext)(Ze), {
            openedNav: l
          } = (0, o.useContext)(Oe), {
            openedNav: u
          } = (0, o.useContext)(se), {
            value: d,
            ref: _
          } = (0, o.useContext)(Re), {
            inMobileMenu: m
          } = (0, o.useContext)(ie), {
            isHidden: h
          } = (0, o.useContext)(Ie), {
            inAvatarMenu: v
          } = (0, o.useContext)(he), g = (0, o.useRef)(null), f = [c, l, u].includes(d);
          if ((0, o.useEffect)(() => {
              var e;
              f && g.current && (e = g.current, document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => e.disabled || e.hidden ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }).nextNode())?.focus()
            }, [f]), h) return null;
          const M = "_1pgq6b18 _1r3j5az0 _1pgq6b17",
            j = "_1pgq6b19",
            k = "_1pgq6b1a",
            N = "_1pgq6b1b";
          return (0, b.jsx)(C.AnimatePresence, {
            children: f && (0, b.jsx)(p.Content, {
              ref: ue(r, g),
              className: (0, i.default)((0, x.m)("dark"), {
                [M]: !m,
                [j]: m,
                [k]: s && !m,
                [N]: v
              }),
              onPointerEnter: Se,
              onPointerLeave: Se,
              onPointerDown: Se,
              onPointerDownOutside: e => {
                s && e.preventDefault()
              },
              style: {
                top: t?.current?.getBoundingClientRect().height,
                left: _?.current?.getBoundingClientRect().left
              },
              ...n,
              asChild: !0,
              forceMount: !0,
              children: (0, b.jsx)(C.motion.div, {
                variants: a || s || m ? Ye : Fe,
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: ne.springOpen,
                className: "_1pgq6b1c",
                children: e
              })
            })
          })
        }),
        Ze = (0, o.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        Ue = (0, o.forwardRef)(function({
          children: e,
          ...a
        }, n) {
          const {
            depth: r
          } = (0, o.useContext)(Ze), {
            openedNav: t
          } = (0, o.useContext)(se), {
            isNavHidden: s
          } = (0, o.useContext)(W), [i, c] = (0, o.useState)("");
          (0, o.useEffect)(() => {
            c("")
          }, [t, s]);
          const l = r ? r + 1 : 1;
          return (0, b.jsx)(Ze.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: i,
              depth: l
            },
            children: (0, b.jsx)(p.Root, {
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
              children: (0, b.jsx)(C.motion.div, {
                variants: We,
                animate: "enter",
                initial: "exit",
                exit: "exit",
                transition: ne.quickFade,
                children: e
              })
            })
          })
        }),
        Ke = (0, o.forwardRef)(function({
          className: e,
          ...a
        }, n) {
          return (0, b.jsx)("img", {
            ref: n,
            className: (0, i.default)("_1pgq6b1p", e),
            ...a
          })
        }),
        Je = ({
          hasNotification: e,
          onClick: a,
          ...n
        }) => {
          const {
            inMenu: r,
            setOpenedNav: t
          } = (0, o.useContext)(Oe), {
            inAvatarMenu: s
          } = (0, o.useContext)(he), {
            inQuickMenu: i
          } = (0, o.useContext)(ye), {
            inMobileMenu: c
          } = (0, o.useContext)(ie), {
            inSubMenu: l,
            depth: u
          } = (0, o.useContext)(Ze), d = {
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
          return u > 1 ? (0, b.jsx)(ra, {
            ...d
          }) : s ? (0, b.jsx)(na, {
            ...d
          }) : l ? (0, b.jsx)(aa, {
            ...d,
            hasNotification: e
          }) : i ? (0, b.jsx)(ea, {
            ...d
          }) : c ? (0, b.jsx)($e, {
            ...d
          }) : r ? (0, b.jsx)(Xe, {
            ...d
          }) : void 0
        },
        Xe = (0, o.forwardRef)(function({
          children: e,
          className: a,
          onSelect: n,
          external: r,
          asChild: t,
          ...s
        }, c) {
          const l = (0, m.A)(),
            {
              closeAvatarMenu: u
            } = (0, o.useContext)(he),
            {
              closeMobileMenu: d
            } = (0, o.useContext)(ie),
            _ = t ? M.Slot : "a",
            h = (0, i.default)(K({
              context: "mainMenu"
            }), a);
          return (0, b.jsx)(p.Link, {
            onSelect: e => {
              u?.(), d?.(), n?.(e)
            },
            className: h,
            asChild: !0,
            ...s,
            children: (0, b.jsxs)(_, {
              ref: c,
              children: [(0, b.jsx)(M.Slottable, {
                children: e
              }), r && (0, b.jsx)(j.ExternalLink, {
                label: l.formatMessage(T.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        $e = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const {
            closeAvatarMenu: l
          } = (0, o.useContext)(he), {
            closeMobileMenu: u
          } = (0, o.useContext)(ie), d = (0, i.default)(K({
            context: "mobileMenu"
          }), n), _ = a ? M.Slot : "a";
          return (0, b.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              l?.(), u?.(), r?.(e)
            },
            ...s,
            children: (0, b.jsxs)(_, {
              ref: c,
              className: d,
              children: [(0, b.jsx)(M.Slottable, {
                children: e
              }), t && (0, b.jsx)(j.ExternalLink, {
                size: "LG",
                label: "",
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ea = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const l = (0, m.A)(),
            {
              closeAvatarMenu: u
            } = (0, o.useContext)(he),
            {
              closeMobileMenu: d
            } = (0, o.useContext)(ie),
            _ = (0, i.default)(K({
              context: "quickMenu"
            }), n),
            h = a ? M.Slot : "a";
          return (0, b.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), d?.(), r?.(e)
            },
            ...s,
            children: (0, b.jsxs)(h, {
              ref: c,
              className: _,
              children: [(0, b.jsx)(M.Slottable, {
                children: e
              }), t && (0, b.jsx)(j.ExternalLink, {
                label: l.formatMessage(T.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        aa = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          hasNotification: s,
          ...c
        }, l) {
          const u = (0, m.A)(),
            {
              closeAvatarMenu: d
            } = (0, o.useContext)(he),
            {
              closeMobileMenu: _
            } = (0, o.useContext)(ie),
            h = (0, i.default)(K({
              context: "subMenu"
            }), n, s ? ["_1pgq6b1q"] : null),
            v = a ? M.Slot : "a";
          return (0, b.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              d?.(), _?.(), r?.(e)
            },
            ...c,
            children: (0, b.jsxs)(v, {
              ref: l,
              className: h,
              children: [(0, b.jsx)(M.Slottable, {
                children: e
              }), t && (0, b.jsx)(j.ExternalLink, {
                label: u.formatMessage(T.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        na = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const l = (0, m.A)(),
            {
              closeAvatarMenu: u
            } = (0, o.useContext)(he),
            {
              closeMobileMenu: d
            } = (0, o.useContext)(ie),
            _ = (0, i.default)(K({
              context: "avatarMenu"
            }), n),
            h = a ? M.Slot : "a";
          return (0, b.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), d?.(), r?.(e)
            },
            ...s,
            children: (0, b.jsxs)(h, {
              ref: c,
              className: _,
              children: [(0, b.jsx)(M.Slottable, {
                children: e
              }), t && (0, b.jsx)(j.ExternalLink, {
                label: l.formatMessage(T.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ra = (0, o.forwardRef)(function({
          children: e,
          asChild: a,
          className: n,
          onSelect: r,
          external: t,
          ...s
        }, c) {
          const l = (0, m.A)(),
            {
              closeAvatarMenu: u
            } = (0, o.useContext)(he),
            {
              closeMobileMenu: d
            } = (0, o.useContext)(ie),
            _ = (0, i.default)(K({
              context: "nestedMenu"
            }), n),
            h = a ? M.Slot : "a";
          return (0, b.jsx)(p.Link, {
            asChild: !0,
            onSelect: e => {
              u?.(), d?.(), r?.(e)
            },
            ...s,
            children: (0, b.jsxs)(h, {
              ref: c,
              className: _,
              children: [(0, b.jsx)(M.Slottable, {
                children: e
              }), t && (0, b.jsx)(j.ExternalLink, {
                label: l.formatMessage(T.nav_rockstargames_external_link),
                className: "_1pgq6b1h"
              })]
            })
          })
        }),
        ta = ({
          children: e
        }) => (0, b.jsx)("div", {
          className: "ncorez0",
          children: e
        });
      const sa = (0, o.forwardRef)(function({
        children: e,
        dataTestId: a,
        onPress: n,
        ...r
      }, t) {
        const {
          inMobileMenu: s,
          closeMobileMenu: i
        } = (0, o.useContext)(ie), c = (0, I.mergeProps)({
          "data-testid": a,
          onPress: e => {
            n?.(e), i()
          },
          appearance: "secondary",
          size: (0, A.Ub)("(min-width: 1024px)") ? "SM" : "LG",
          className: "ey3skr0"
        }, r);
        return (0, b.jsx)("div", {
          className: s ? "ey3skr1" : "ey3skr2",
          children: (0, b.jsx)(w.Button, {
            ref: t,
            fullWidth: s,
            ...c,
            children: e
          })
        })
      });
      var oa = "_11eee6m7",
        ia = "_11eee6ml";
      const ca = {
          open: {
            height: "auto",
            overflow: "hidden",
            transition: {
              ...ne.springClose,
              delay: .15
            }
          },
          close: {
            height: 0,
            overflow: "hidden",
            transition: ne.springClose
          }
        },
        la = ({
          children: e,
          isSearchPage: a
        }) => {
          const {
            formatMessage: n
          } = (0, m.A)(), {
            isNavHidden: r,
            searchBarOpened: t,
            setSearchBarOpened: s,
            avatarMenuOpened: i
          } = (0, o.useContext)(W);
          (0, o.useEffect)(() => {
            s(a || !1)
          }, []), (0, o.useEffect)(() => {
            s(!1)
          }, [r]), (0, o.useEffect)(() => {
            i && s(!1)
          }, [i]);
          const c = !r && (a || t);
          return (0, b.jsx)(ae, {
            showOn: "desktop",
            children: (0, b.jsx)("div", {
              className: "_11eee6m0",
              children: (0, b.jsxs)(S.Root, {
                open: c,
                onOpenChange: s,
                children: [(0, b.jsx)(S.Trigger, {
                  asChild: !0,
                  children: (0, b.jsx)(w.IconButton, {
                    icon: "Search",
                    appearance: "ghost",
                    size: "SM",
                    label: n(c ? T.search_close_button : T.search_open_button),
                    className: "_11eee6mb",
                    "data-testid": "searchToggle"
                  })
                }), (0, b.jsx)(C.AnimatePresence, {
                  children: c && (0, b.jsx)(L.FocusScope, {
                    loop: !a,
                    children: (0, b.jsx)(S.Content, {
                      forceMount: !0,
                      sideOffset: 19,
                      children: (0, b.jsx)(C.motion.div, {
                        initial: "close",
                        animate: "open",
                        exit: "close",
                        variants: ca,
                        "data-testid": "searchBar",
                        className: (0, x.m)("dark"),
                        children: e
                      })
                    })
                  })
                })]
              })
            })
          })
        },
        ua = (0, o.createContext)({
          inSearchMenu: !1,
          rootSearchTarget: "",
          searchTarget: "",
          onChange: () => {}
        }),
        da = (0, o.forwardRef)(function({
          children: e
        }, a) {
          return (0, b.jsx)("div", {
            role: "search",
            ref: a,
            className: "_11eee6m1",
            children: e
          })
        }),
        _a = (0, o.forwardRef)(function({
          children: e,
          queryMin: a = 0,
          queryMax: n = 100,
          onSearch: r,
          query: t,
          onQueryChange: s,
          target: c,
          onTargetChange: l,
          isSearchPage: u = !1
        }, d) {
          const {
            formatMessage: _
          } = (0, m.A)(), {
            inMobileMenu: h,
            closeMobileMenu: v
          } = (0, o.useContext)(ie), [g, p] = (0, R.useControllableState)({
            prop: t,
            onChange: s,
            defaultProp: ""
          }), [f, x] = (0, R.useControllableState)({
            prop: c,
            onChange: l,
            defaultProp: ""
          }), [M, k] = (0, o.useState)(!1), [N, y] = (0, o.useState)(!1), {
            setForceBackground: z
          } = (0, o.useContext)(W);
          (0, o.useEffect)(() => (z(!0), () => {
            z(!1)
          }), []);
          const O = (e, a) => {
              r(e, a, v), y(!0)
            },
            I = {
              inSearchMenu: !0,
              searchTarget: f,
              setSearchTarget: e => {
                x(e), g && g.length >= a && O(g, e)
              },
              onChange: s
            },
            A = (0, o.useMemo)(() => h ? (0, b.jsx)(C.AnimatePresence, {
              children: M && (0, b.jsx)(C.motion.div, {
                initial: "close",
                animate: "open",
                exit: "close",
                variants: ca,
                transition: ne.springOpen,
                "data-testid": "searchBar",
                children: (0, b.jsx)("div", {
                  className: "_11eee6m9 _11eee6m8",
                  children: e
                })
              })
            }) : (0, b.jsxs)("div", {
              className: "_11eee6m8",
              children: [e, !h && !u && (0, b.jsx)("div", {
                className: "_11eee6md",
                children: (0, b.jsx)(S.Close, {
                  className: "_11eee6me",
                  children: (0, b.jsx)(j.X, {
                    size: "MD",
                    className: "_11eee6mf",
                    label: _(T.search_close_button)
                  })
                })
              })]
            }), [h, M, u, _, e]);
          return (0, b.jsxs)(ua.Provider, {
            value: I,
            children: [(0, b.jsxs)("div", {
              className: (0, i.default)("_11eee6m6", {
                [oa]: h
              }),
              "data-testid": "searchBar",
              children: [(0, b.jsx)(w.IconButton, {
                onClick: () => {
                  O(g, f)
                },
                appearance: "ghost",
                icon: "Search",
                size: "LG",
                label: _(N ? T.search_disabled_aria_label : T.search_action)
              }), (0, b.jsx)("div", {
                className: "_11eee6mg",
                children: (0, b.jsx)("input", {
                  className: "_11eee6mh",
                  type: "search",
                  value: g,
                  onChange: e => (e => {
                    p(e), y(!1)
                  })(e.target.value),
                  onKeyUp: e => {
                    "Enter" === e.key && g && f && O(g, f)
                  },
                  onFocus: () => k(!0),
                  placeholder: _(T.search_placeholder),
                  ref: d,
                  enterKeyHint: "search",
                  maxLength: n,
                  min: a,
                  max: n
                })
              }), h && M && (0, b.jsx)(w.IconButton, {
                onClick: () => k(!1),
                appearance: "ghost",
                icon: "X",
                size: "MD",
                label: _(T.search_close_button)
              })]
            }), A]
          })
        }),
        ma = ({
          children: e
        }) => {
          const {
            formatMessage: a
          } = (0, m.A)();
          return (0, b.jsx)("div", {
            className: "_11eee6mi",
            role: "radiogroup",
            "aria-label": a(T.search_categories),
            children: e
          })
        },
        ha = (0, o.forwardRef)(function({
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
          } = (0, o.useContext)(ua), {
            inSearchTargetDropdown: d,
            setRootSearchTarget: _,
            rootSearchTarget: m
          } = (0, o.useContext)(va), h = r => {
            l?.(r), d && "string" == typeof e && _({
              key: a,
              title: n
            })
          }, v = r || Boolean(u) && (u === a || u === m.key);
          return d ? (0, b.jsx)("button", {
            ref: c,
            type: "button",
            className: (0, i.default)("_11eee6mq", {
              [ia]: v
            }),
            onClick: () => h(a),
            value: a,
            ...s,
            role: "radio",
            "aria-checked": v,
            children: e
          }) : (0, b.jsx)(w.Tag.Root, {
            className: "_11eee6mj",
            color: v ? "monochrome" : "grey",
            size: "LG",
            background: "static",
            onClick: () => h(a),
            hasBorder: !1,
            ...s,
            asChild: !0,
            children: (0, b.jsxs)("button", {
              type: "button",
              ref: c,
              value: a,
              role: "radio",
              "aria-checked": v,
              children: [(0, b.jsx)(w.Tag.Label, {
                asChild: !0,
                children: (0, b.jsx)(w.Body, {
                  size: "MD",
                  appearance: "bold",
                  children: e
                })
              }), t && (0, b.jsx)(w.Tag.Icon, {
                className: "_11eee6mo",
                label: "",
                icon: "ChevronDown"
              })]
            })
          })
        }),
        va = (0, o.createContext)({
          inSearchTargetDropdown: !1,
          rootSearchTarget: {
            key: "",
            title: ""
          },
          setRootSearchTarget: () => {}
        }),
        ga = ({
          title: e,
          children: a
        }) => {
          const [n, r] = (0, o.useState)(!1), [t, s] = (0, o.useState)({
            key: "",
            title: ""
          }), {
            searchTarget: i
          } = (0, o.useContext)(ua), {
            avatarMenuOpened: c
          } = (0, o.useContext)(W);
          i !== t.key && "" !== t.key && s({
            key: "",
            title: ""
          });
          const l = !c && n;
          return (0, b.jsxs)(S.Root, {
            open: l,
            onOpenChange: r,
            children: [(0, b.jsx)(S.Trigger, {
              asChild: !0,
              children: (0, b.jsx)(ha, {
                value: e,
                title: e,
                active: !!t.key,
                hasChevron: !0,
                children: t.title || e
              })
            }), (0, b.jsx)(va.Provider, {
              value: {
                inSearchTargetDropdown: !0,
                rootSearchTarget: t,
                setRootSearchTarget: e => {
                  s(a => "function" == typeof e ? e(a) : e), r(!1)
                }
              },
              children: (0, b.jsx)(S.Content, {
                align: "start",
                className: "_11eee6mp _1r3j5az0 _11eee6mn",
                children: a
              })
            })]
          })
        },
        ba = (0, o.forwardRef)(function({
          errorMessage: e
        }, a) {
          return e && (0, b.jsx)("div", {
            ref: a,
            className: "_11eee6m2",
            "aria-live": "polite",
            children: e
          })
        }),
        pa = ({
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
          return (0, b.jsx)("a", {
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
      var fa = "_13sb4ht3",
        xa = "_13sb4ht4";
      const Ma = () => (0, b.jsx)("div", {
        className: "_13sb4ht2",
        children: (0, b.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [fa, xa, ""].map((e, a) => (0, b.jsx)("path", {
            className: e,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.61511 10.9978H12.5848C14.3845 10.9978 15.9421 10.4507 15.9421 8.44939C15.9421 6.86148 14.5745 6.52423 13.2595 6.52423H9.56608L8.61511 10.9978ZM24.3357 21.6949H30.6663L24.9533 25.6406L25.8771 31.8581L20.9272 28.1057L14.2842 32.0001L17.3902 25.4102C17.3902 25.4102 13.7775 21.6513 13.7803 21.6513C13.5374 21.3314 13.4563 20.5073 13.4563 20.1527C13.4563 19.7045 13.4849 19.2505 13.5155 18.7669C13.5503 18.2159 13.5875 17.6266 13.5875 16.9637C13.5875 15.3278 12.8632 14.4723 11.0925 14.4723H7.77269L6.32717 21.2249H1.33301L5.30462 2.66675H14.7029C18.1954 2.66675 20.861 3.52407 20.861 7.47735C20.861 10.2601 19.4884 12.2367 16.4605 12.6517V12.7051C17.8843 13.0428 18.4177 14.0037 18.4177 15.7946C18.4177 16.5095 18.3959 17.1369 18.3754 17.7271C18.3572 18.2511 18.34 18.7456 18.34 19.246C18.34 19.8873 18.507 20.9355 18.9277 21.6513H19.6215L23.3316 15.4672L24.3357 21.6949ZM23.5498 22.6019H27.7512L23.9634 25.217L24.6402 29.7765L20.9957 27.0111L16.3688 29.7218L18.4869 25.2341L15.9114 22.5578H20.1458L22.8244 18.093L23.5498 22.6019Z",
            fill: "currentcolor"
          }, e + a))
        })
      });
      var ja = "corzs33";
      const ka = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        Ca = ({
          quickAccessHidden: e,
          children: a,
          href: n,
          onNavigate: r
        }) => {
          const t = (0, m.A)(),
            [s, c] = (0, o.useState)(!1),
            l = (0, o.useRef)(null),
            [u, d] = (0, o.useState)(!1),
            {
              brand: _,
              brandTitle: h,
              isNavHidden: v,
              simpleMenu: g
            } = (0, o.useContext)(W),
            p = n || "/";
          return (0, o.useEffect)(() => {
            c(!1)
          }, [v, e]), (0, o.useEffect)(() => {
            const e = () => {
              const e = l.current?.getBoundingClientRect().width || 0,
                a = l.current?.children;
              Array.from(Array(a?.length)).reduce((e, n, r) => e + a?.item(r)?.getBoundingClientRect().width, 0) + 60 >= e ? d(!1) : d(!0)
            };
            return h ? (e(), window.addEventListener("resize", e)) : (d(!1), window.removeEventListener("resize", e)), () => {
              window.removeEventListener("resize", e)
            }
          }, [h]), (0, b.jsxs)("div", {
            className: "corzs30",
            children: [(0, b.jsx)(ae, {
              showOn: "desktop",
              children: (0, b.jsxs)("div", {
                className: "corzs31",
                children: [(0, b.jsxs)("div", {
                  className: ja,
                  children: [!a && (0, b.jsx)(pa, {
                    to: p,
                    "aria-label": t.formatMessage(T.nav_rockstargames_home),
                    onNavigate: r,
                    className: "corzs39",
                    children: (0, b.jsx)(Ma, {})
                  }), a && (0, b.jsxs)(S.Root, {
                    open: s,
                    onOpenChange: c,
                    children: [(0, b.jsx)(ae, {
                      showOn: "desktop",
                      children: (0, b.jsx)(S.Trigger, {
                        asChild: !0,
                        children: (0, b.jsx)("button", {
                          type: "button",
                          className: "corzs38",
                          "aria-label": t.formatMessage(T.nav_rockstargames_logo),
                          children: (0, b.jsx)(Ma, {})
                        })
                      })
                    }), (0, b.jsx)(C.AnimatePresence, {
                      children: s && (0, b.jsx)(ae, {
                        showOn: "desktop",
                        children: (0, b.jsx)(S.Content, {
                          forceMount: !0,
                          align: "start",
                          sideOffset: 24,
                          children: (0, b.jsx)(C.motion.div, {
                            className: "corzs3a",
                            variants: ka,
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
                }), (_ || h) && (0, b.jsxs)("div", {
                  className: "corzs34",
                  children: [(0, b.jsx)("div", {
                    className: "corzs35"
                  }), _ && (0, b.jsx)("div", {
                    className: "corzs36",
                    children: _
                  }), h && (0, b.jsx)(w.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: h
                  })]
                })]
              })
            }), (0, b.jsx)(ae, {
              showOn: "mobile",
              children: (0, b.jsxs)("div", {
                className: "corzs32",
                ref: l,
                children: [(0, b.jsx)("div", {
                  className: ja,
                  children: (!_ || g) && (0, b.jsx)(pa, {
                    to: p,
                    "aria-label": t.formatMessage(T.nav_rockstargames_home),
                    onNavigate: r,
                    className: (0, i.clsx)("corzs39", {
                      corzs3b: u
                    }),
                    tabIndex: u ? -1 : 0,
                    children: (0, b.jsx)(Ma, {})
                  })
                }), (_ || h) && (0, b.jsxs)("div", {
                  className: (0, i.clsx)("corzs34", {
                    corzs3b: h && !u
                  }),
                  children: [g && (0, b.jsx)("div", {
                    className: "corzs35"
                  }), _ && (0, b.jsx)("div", {
                    className: "corzs36",
                    children: _
                  }), h && (0, b.jsx)(w.Heading, {
                    level: 5,
                    className: "corzs37",
                    children: h
                  })]
                })]
              })
            })]
          })
        },
        Na = {
          MenuContext: Oe,
          HiddenMenuContext: Ie,
          SubMenuContext: Ze,
          MobileMenuContext: ie,
          GlobalNavigationContext: W
        }
    }
  }
]);