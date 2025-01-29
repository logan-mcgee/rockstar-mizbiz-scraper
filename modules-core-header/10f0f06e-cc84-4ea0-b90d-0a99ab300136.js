! function() {
  try {
    var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "10f0f06e-cc84-4ea0-b90d-0a99ab300136", a._sentryDebugIdIdentifier = "sentry-dbid-10f0f06e-cc84-4ea0-b90d-0a99ab300136")
  } catch (a) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [99], {
    1932: (a, e, t) => {
      t.r(e), t.d(e, {
        default: () => da
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => r,
        bully: () => _,
        careers: () => l,
        gta: () => m,
        gta2: () => c,
        gta3: () => v,
        gta4: () => p,
        gta5: () => u,
        gtaAdvance: () => f,
        gtaCtw: () => h,
        gtaIvEflc: () => w,
        gtaLcs: () => y,
        gtaLondon: () => M,
        gtaOnline: () => b,
        gtaPlus: () => x,
        gtaSanAndreas: () => C,
        gtaTrilogy: () => T,
        gtaVc: () => k,
        gtaVcs: () => I,
        laNoire: () => L,
        manhunt: () => B,
        manhunt2: () => P,
        maxPayne: () => S,
        maxPayne2: () => j,
        maxPayne3: () => A,
        midnightclub: () => z,
        midnightclub2: () => D,
        midnightclub3: () => G,
        midnightclubStreetRacing: () => R,
        oni: () => O,
        readDeadOnline: () => N,
        redDeadRedemption: () => V,
        redDeadRedemption2: () => E,
        redDeadRedemptionUndeadNightmare: () => J,
        redDeadRevolver: () => q,
        rsg: () => W,
        skateAndDestroy: () => U,
        smugglersRun: () => $,
        smugglersRun2: () => H,
        smugglersRunWarzones: () => X,
        stateOfEmergency: () => F,
        tableTennis: () => Y,
        theItalianJob: () => Q,
        theWarriors: () => K,
        wildMetal: () => Z
      });
      var n = t(2229),
        o = t(5138);
      const r = () => ({
        site: "beaterator",
        appearancePaths: {
          [o.C.www]: [{
            path: "/games/beaterator/*",
            options: {}
          }]
        },
        brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        links: []
      });
      var i = t(1788);
      const d = (0, i.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            defaultMessage: "Click to open menu"
          },
          nav_gtao_overview: {
            id: "nav_gtao_overview",
            defaultMessage: "Overview"
          },
          nav_gtao_gtao: {
            id: "nav_gtao_gtao",
            defaultMessage: "GTA Online"
          },
          nav_gtao_discover: {
            id: "nav_gtao_discover",
            defaultMessage: "Discover"
          },
          nav_gtao_my_character: {
            id: "nav_gtao_my_character",
            defaultMessage: "My Character"
          },
          nav_gtao_career_progress: {
            id: "nav_gtao_career_progress",
            defaultMessage: "Career Progress"
          },
          nav_gtao_guides: {
            id: "nav_gtao_guides",
            defaultMessage: "Guides"
          },
          nav_gtao_license_plate_creator: {
            id: "nav_gtao_license_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtao_story: {
            id: "nav_gtao_story",
            defaultMessage: "Story"
          },
          nav_gtao_stats: {
            id: "nav_gtao_stats",
            defaultMessage: "Stats"
          },
          nav_gtao_missions: {
            id: "nav_gtao_missions",
            defaultMessage: "Missions"
          },
          nav_gtao_checklist: {
            id: "nav_gtao_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtao_accomplishments: {
            id: "nav_gtao_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtao_gta_plus: {
            id: "nav_gtao_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtao_community: {
            id: "nav_gtao_community",
            defaultMessage: "Community"
          },
          nav_gtao_jobs: {
            id: "nav_gtao_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtao_community_series: {
            id: "nav_gtao_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtao_crews: {
            id: "nav_gtao_crews",
            defaultMessage: "Crews"
          },
          nav_gtao_my_crews: {
            id: "nav_gtao_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtao_browse_crews: {
            id: "nav_gtao_browse_crews",
            defaultMessage: "Browse All Crews"
          },
          nav_gtao_crews_create: {
            id: "nav_gtao_crews_create",
            defaultMessage: "Create a Crew"
          },
          nav_gtao_emblem_editor: {
            id: "nav_gtao_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtao_jobs_playlists: {
            id: "nav_gtao_jobs_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtao_photos: {
            id: "nav_gtao_photos",
            defaultMessage: "Photos"
          },
          nav_gtao_videos: {
            id: "nav_gtao_videos",
            defaultMessage: "Videos"
          },
          nav_gtao_support: {
            id: "nav_gtao_support",
            defaultMessage: "Support"
          },
          nav_gtao_cta_buy_now: {
            id: "nav_gtao_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gta_trilogy_overview: {
            id: "nav_gta_trilogy_overview",
            defaultMessage: "Overview"
          },
          nav_gta_trilogy_accomplishments: {
            id: "nav_gta_trilogy_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gta_trilogy_gtasa: {
            id: "nav_gta_trilogy_gtasa",
            defaultMessage: "GTA: San Andreas"
          },
          nav_gta_trilogy_gtavc: {
            id: "nav_gta_trilogy_gtavc",
            defaultMessage: "GTA: Vice City"
          },
          nav_gta_trilogy_gta3: {
            id: "nav_gta_trilogy_gta3",
            defaultMessage: "GTA III"
          },
          nav_gta_trilogy_support: {
            id: "nav_gta_trilogy_support",
            defaultMessage: "Support"
          },
          nav_gta_trilogy_cta_buy_now: {
            id: "nav_gta_trilogy_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_bully_game_overview: {
            id: "nav_bully_game_overview",
            defaultMessage: "Discover"
          },
          nav_bully_videos: {
            id: "nav_bully_videos",
            defaultMessage: "Videos"
          },
          nav_bully_accomplishments: {
            id: "nav_bully_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_bully_support: {
            id: "nav_bully_Overview",
            defaultMessage: "Support"
          },
          nav_bully_cta_buy_now: {
            id: "nav_bully_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rsg_games: {
            id: "nav_rsg_games",
            defaultMessage: "Games"
          },
          nav_rsg_newswire: {
            id: "nav_rsg_newswire",
            defaultMessage: "Newswire"
          },
          nav_rsg_videos: {
            id: "nav_rsg_videos",
            defaultMessage: "Videos"
          },
          nav_rsg_downloads: {
            id: "nav_rsg_downloads",
            defaultMessage: "Downloads"
          },
          nav_rsg_store: {
            id: "nav_rsg_store",
            defaultMessage: "Store"
          },
          nav_rsg_support: {
            id: "nav_rsg_support",
            defaultMessage: "Support"
          },
          nav_rsg_community_guidelines: {
            id: "nav_rsg_community_guidelines",
            defaultMessage: "Community Guidelines"
          },
          nav_rsg_cta_get_launcher: {
            id: "nav_cta_get_launcher",
            defaultMessage: "Get Launcher"
          },
          nav_careers_home: {
            id: "nav_careers_home",
            defaultMessage: "Home"
          },
          nav_careers_openings: {
            id: "nav_careers_openings",
            defaultMessage: "Openings"
          },
          nav_careers_contact_us: {
            id: "nav_careers_contact_us",
            defaultMessage: "Contact us"
          },
          nav_careers_careers_on_linkedin: {
            id: "nav_careers_careers_on_linkedin",
            defaultMessage: "Careers on LinkedIn"
          },
          nav_gta3_cta_buy_now: {
            id: "nav_gta3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiv_overview: {
            id: "nav_gtaiv_overview",
            defaultMessage: "Discover"
          },
          nav_gtaiv_accomplishments: {
            id: "nav_gtaiv_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiv_support: {
            id: "nav_gtaiv_support",
            defaultMessage: "Support"
          },
          nav_gtaiv_cta_buy_now: {
            id: "nav_gtaiv_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtav_overview: {
            id: "nav_gtav_overview",
            defaultMessage: "Overview"
          },
          nav_gtav_gta_online: {
            id: "nav_gtav_gta_online",
            defaultMessage: "GTA Online"
          },
          nav_gtav_discover: {
            id: "nav_gtav_discover",
            defaultMessage: "Discover"
          },
          nav_gtav_my_character: {
            id: "nav_gtav_my_character",
            defaultMessage: "My Character"
          },
          nav_gtav_guides: {
            id: "nav_gtav_guides",
            defaultMessage: "Guides"
          },
          nav_gtav_licence_plate_creator: {
            id: "nav_gtav_licence_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtav_story: {
            id: "nav_gtav_story",
            defaultMessage: "Story"
          },
          nav_gtav_stats: {
            id: "nav_gtav_stats",
            defaultMessage: "Stats"
          },
          nav_gtav_missions: {
            id: "nav_gtav_missions",
            defaultMessage: "Missions"
          },
          nav_gtav_checklist: {
            id: "nav_gtav_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtav_accomplishments: {
            id: "nav_gtav_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtav_gta_plus: {
            id: "nav_gtav_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtav_community: {
            id: "nav_gtav_community",
            defaultMessage: "Community"
          },
          nav_gtav_jobs: {
            id: "nav_gtav_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtav_community_series: {
            id: "nav_gtav_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtav_my_jobs: {
            id: "nav_gtav_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtav_playlists: {
            id: "nav_gtav_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtav_crews: {
            id: "nav_gtav_crews",
            defaultMessage: "Crews"
          },
          nav_gtav_crews_browse_all: {
            id: "nav_gtav_crews_browse_all",
            defaultMessage: "Browse All Crews"
          },
          nav_gtav_my_crews: {
            id: "nav_gtav_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtav_create_crew: {
            id: "nav_gtav_create_crew",
            defaultMessage: "Create a Crew"
          },
          nav_gtav_emblem_editor: {
            id: "nav_gtav_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtav_photos: {
            id: "nav_gtav_photos",
            defaultMessage: "Photos"
          },
          nav_gtav_videos: {
            id: "nav_gtav_videos",
            defaultMessage: "Videos"
          },
          nav_gtav_support: {
            id: "nav_gtav_support",
            defaultMessage: "Support"
          },
          nav_gtav_cta_buy_now: {
            id: "nav_gtav_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiveflc_overview: {
            id: "nav_gtaiveflc_overview",
            defaultMessage: "Overview"
          },
          nav_gtaiveflc_accomplishments: {
            id: "nav_gtaiveflc_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiveflc_support: {
            id: "nav_gtaiveflc_support",
            defaultMessage: "Support"
          },
          nav_gtaiveflc_cta_buy_now: {
            id: "nav_gtaiveflc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtasanandreas_cta_buy_now: {
            id: "nav_gtasanandreas_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavc_discover: {
            id: "nav_gtavc_discover",
            defaultMessage: "Discover"
          },
          nav_gtavc_cta_buy_now: {
            id: "nav_gtavc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavcs_discover: {
            id: "nav_gtavcs_discover",
            defaultMessage: "Discover"
          },
          nav_lanoire_overview: {
            id: "nav_lanoire_overview",
            defaultMessage: "Overview"
          },
          nav_lanoire_official_site: {
            id: "nav_lanoire_official_site",
            defaultMessage: "Official Site"
          },
          nav_lanoire_progress: {
            id: "nav_lanoire_progress",
            defaultMessage: "Progress"
          },
          nav_lanoire_pc_console: {
            id: "nav_lanoire_pc_console",
            defaultMessage: "PC/Console"
          },
          nav_lanoire_case_tracker: {
            id: "nav_lanoire_case_tracker",
            defaultMessage: "Case Tracker"
          },
          nav_lanoire_checklist: {
            id: "nav_lanoire_checklist",
            defaultMessage: "Checklist"
          },
          nav_lanoire_stats: {
            id: "nav_lanoire_stats",
            defaultMessage: "Stats"
          },
          nav_lanoire_accomplishments: {
            id: "nav_lanoire_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_lanoire_badge_pursuit: {
            id: "nav_lanoire_badge_pursuit",
            defaultMessage: "Badge Pursuit"
          },
          nav_lanoire_vr_case_files: {
            id: "nav_lanoire_vr_case_files",
            defaultMessage: "VR Case Files"
          },
          nav_lanoire_support: {
            id: "nav_lanoire_support",
            defaultMessage: "Support"
          },
          nav_lanoire_cta_buy_now: {
            id: "nav_lanoire_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_tabletennis_cta_buy_now: {
            id: "nav_tabletennis_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_mp3_overview: {
            id: "nav_mp3_overview",
            defaultMessage: "Overview"
          },
          nav_mp3_official_site: {
            id: "nav_mp3_official_site",
            defaultMessage: "Official Site"
          },
          nav_mp3_news: {
            id: "nav_mp3_news",
            defaultMessage: "News"
          },
          nav_mp3_progress: {
            id: "nav_mp3_progress",
            defaultMessage: "Progress"
          },
          nav_mp3_accomplishments: {
            id: "nav_mp3_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_mp3_singleplayer: {
            id: "nav_mp3_singleplayer",
            defaultMessage: "Singleplayer"
          },
          nav_mp3_multiplayer: {
            id: "nav_mp3_multiplayer",
            defaultMessage: "Multiplayer"
          },
          nav_mp3_career: {
            id: "nav_mp3_career",
            defaultMessage: "Career"
          },
          nav_mp3_checklist: {
            id: "nav_mp3_checklist",
            defaultMessage: "Checklist"
          },
          nav_mp3_grinds: {
            id: "nav_mp3_grinds",
            defaultMessage: "Grinds"
          },
          nav_mp3_weapons: {
            id: "nav_mp3_weapons",
            defaultMessage: "Weapons"
          },
          nav_mp3_chapters: {
            id: "nav_mp3_chapters",
            defaultMessage: "Chapters"
          },
          nav_mp3_leaderboards: {
            id: "nav_mp3_leaderboards",
            defaultMessage: "Leaderboards"
          },
          nav_mp3_crews: {
            id: "nav_mp3_crews",
            defaultMessage: "Crews"
          },
          nav_mp3_score_attack: {
            id: "nav_mp3_score_attack",
            defaultMessage: "Score Attack"
          },
          nav_mp3_ny_minute: {
            id: "nav_mp3_ny_minute",
            defaultMessage: "New York Minute"
          },
          nav_mp3_checkpoint_challenge: {
            id: "nav_mp3_checkpoint_challenge",
            defaultMessage: "Checkpoint Challenge"
          },
          nav_mp3_featured: {
            id: "nav_mp3_featured",
            defaultMessage: "Featured"
          },
          nav_mp3_specifications: {
            id: "nav_mp3_specifications",
            defaultMessage: "Specifications"
          },
          nav_mp3_support: {
            id: "nav_mp3_support",
            defaultMessage: "Support"
          },
          nav_mp3_cta_buy_now: {
            id: "nav_mp3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_midnightclubla_buy_now: {
            id: "nav_midnightclubla_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr_cta_buy_now: {
            id: "nav_rdr_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdo_overview: {
            id: "nav_rdo_overview",
            defaultMessage: "Overview"
          },
          nav_rdo_explore: {
            id: "nav_rdo_explore",
            defaultMessage: "Explore"
          },
          nav_rdo_getting_started: {
            id: "nav_rdo_getting_started",
            defaultMessage: "Getting Started"
          },
          nav_rdo_specialist_roles: {
            id: "nav_rdo_specialist_roles",
            defaultMessage: "Specialist Roles"
          },
          nav_rdo_story_missions: {
            id: "nav_rdo_story_missions",
            defaultMessage: "Story Missions"
          },
          nav_rdo_posses_free_roam: {
            id: "nav_rdo_posses_free_roam",
            defaultMessage: "Posses and Free Roam"
          },
          nav_rdo_competitive_series: {
            id: "nav_rdo_competitive_series",
            defaultMessage: "Competitive Series"
          },
          nav_rdo_customization: {
            id: "nav_rdo_customization",
            defaultMessage: "Customization"
          },
          nav_rdo_progression: {
            id: "nav_rdo_progression",
            defaultMessage: "Progression"
          },
          nav_rdo_progress: {
            id: "nav_rdo_progress",
            defaultMessage: "Progress"
          },
          nav_rdo_my_character: {
            id: "nav_rdo_my_character",
            defaultMessage: "My Character"
          },
          nav_rdo_roles: {
            id: "nav_rdo_roles",
            defaultMessage: "Roles"
          },
          nav_rdo_rank_unlocks: {
            id: "nav_rdo_rank_unlocks",
            defaultMessage: "Rank Unlocks"
          },
          nav_rdo_awards: {
            id: "nav_rdo_awards",
            defaultMessage: "Awards"
          },
          nav_rdo_accomplishments: {
            id: "nav_rdo_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdo_benefits: {
            id: "nav_rdo_benefits",
            defaultMessage: "Benefits"
          },
          nav_rdo_guides: {
            id: "nav_rdo_guides",
            defaultMessage: "Guides"
          },
          nav_rdo_club_rewards: {
            id: "nav_rdo_club_rewards",
            defaultMessage: "Club Rewards"
          },
          nav_rdo_community: {
            id: "nav_rdo_community",
            defaultMessage: "Community"
          },
          nav_rdo_posses: {
            id: "nav_rdo_posses",
            defaultMessage: "Posses"
          },
          nav_rdo_photos: {
            id: "nav_rdo_photos",
            defaultMessage: "Photos"
          },
          nav_rdo_catalogue: {
            id: "nav_rdo_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdo_support: {
            id: "nav_rdo_support",
            defaultMessage: "Support"
          },
          nav_rdo_cta_buy_now: {
            id: "nav_rdo_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr2_overview: {
            id: "nav_rdr2_overview",
            defaultMessage: "Overview"
          },
          nav_rdr2_explore: {
            id: "nav_rdr2_explore",
            defaultMessage: "Explore"
          },
          nav_rdr2_van_der_linde_gang: {
            id: "nav_rdr2_van_der_linde_gang",
            defaultMessage: "The Van der Linde Gang"
          },
          nav_rdr2_locations: {
            id: "nav_rdr2_locations",
            defaultMessage: "Locations"
          },
          nav_rdr2_wildlife: {
            id: "nav_rdr2_wildlife",
            defaultMessage: "Wildlife"
          },
          nav_rdr2_weaponry: {
            id: "nav_rdr2_weaponry",
            defaultMessage: "Weaponry"
          },
          nav_rdr2_progress: {
            id: "nav_rdr2_progress",
            defaultMessage: "Progress"
          },
          nav_rdr2_stats: {
            id: "nav_rdr2_stats",
            defaultMessage: "Stats"
          },
          nav_rdr2_chapters: {
            id: "nav_rdr2_chapters",
            defaultMessage: "Chapters"
          },
          nav_rdr2_challenges: {
            id: "nav_rdr2_challenges",
            defaultMessage: "Challenges"
          },
          nav_rdr2_character: {
            id: "nav_rdr2_character",
            defaultMessage: "Character"
          },
          nav_rdr2_compendium: {
            id: "nav_rdr2_compendium",
            defaultMessage: "Compendium"
          },
          nav_rdr2_accomplishments: {
            id: "nav_rdr2_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdr2_media: {
            id: "nav_rdr2_media",
            defaultMessage: "Media"
          },
          nav_rdr2_gallery: {
            id: "nav_rdr2_gallery",
            defaultMessage: "Gallery"
          },
          nav_rdr2_artwork: {
            id: "nav_rdr2_artwork",
            defaultMessage: "Artwork"
          },
          nav_rdr2_videos: {
            id: "nav_rdr2_videos",
            defaultMessage: "Videos"
          },
          nav_rdr2_music: {
            id: "nav_rdr2_music",
            defaultMessage: "Music"
          },
          nav_rdr2_online: {
            id: "nav_rdr2_online",
            defaultMessage: "Online"
          },
          nav_rdr2_catalogue: {
            id: "nav_rdr2_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdr2_support: {
            id: "nav_rdr2_support",
            defaultMessage: "Support"
          },
          nav_rdr2_cta_buy_now: {
            id: "nav_rdr2_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_discover: {
            id: "nav_undeadnightmare_discover",
            defaultMessage: "Discover"
          },
          nav_undeadnightmare_info: {
            id: "nav_undeadnightmare_info",
            defaultMessage: "Info"
          },
          nav_undeadnightmare_media: {
            id: "nav_undeadnightmare_media",
            defaultMessage: "Media"
          },
          nav_undeadnightmare_videos: {
            id: "nav_undeadnightmare_videos",
            defaultMessage: "Videos"
          },
          nav_undeadnightmare_gallery: {
            id: "nav_undeadnightmare_gallery",
            defaultMessage: "Gallery"
          },
          nav_undeadnightmare_news: {
            id: "nav_undeadnightmare_news",
            defaultMessage: "News"
          },
          nav_undeadnightmare_specs: {
            id: "nav_undeadnightmare_specs",
            defaultMessage: "Specifications"
          },
          nav_undeadnightmare_suport: {
            id: "nav_undeadnightmare_suport",
            defaultMessage: "Support"
          },
          nav_undeadnightmare_buy_now: {
            id: "nav_undeadnightmare_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_ps3_digital: {
            id: "nav_undeadnightmare_ps3_digital",
            defaultMessage: "PS3 - Digital"
          },
          nav_undeadnightmare_xbox360_digital: {
            id: "nav_undeadnightmare_xbox360_digital",
            defaultMessage: "Xbox 360 - Digital"
          },
          nav_support_home: {
            id: "nav_support_home",
            defaultMessage: "Home"
          },
          nav_support_service_status: {
            id: "nav_support_service_status",
            defaultMessage: "Service Status"
          },
          nav_support_submit_ticket: {
            id: "nav_support_submit_ticket",
            defaultMessage: "Submit a Ticket"
          },
          nav_support_dashboard: {
            id: "nav_support_dashboard",
            defaultMessage: "My Dashboard"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            defaultMessage: "Red Dead Online"
          },
          nav_thewarriors_cta_buy_now: {
            id: "nav_thewarriors_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          search_action: {
            id: "search_action",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            defaultMessage: "Search {target}"
          },
          search_target_games: {
            id: "search_target_games",
            defaultMessage: "Games"
          },
          search_target_posts: {
            id: "search_target_posts",
            defaultMessage: "Posts"
          },
          search_target_videos: {
            id: "search_target_videos",
            defaultMessage: "Videos"
          },
          search_target_community: {
            id: "search_target_community",
            defaultMessage: "Community"
          },
          search_target_users: {
            id: "search_target_users",
            defaultMessage: "Users"
          },
          search_target_crews: {
            id: "search_target_crews",
            defaultMessage: "Crews"
          },
          search_target_jobs: {
            id: "search_target_jobs",
            defaultMessage: "Jobs"
          },
          search_target_user_photos: {
            id: "search_target_user_photos",
            defaultMessage: "User Photos"
          },
          search_target_user_videos: {
            id: "search_target_user_videos",
            defaultMessage: "User Videos"
          }
        }),
        g = o.C.www,
        _ = a => ({
          site: "bully",
          appearancePaths: {
            [o.C.www]: [{
              path: "/bully/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/bully*",
              options: {}
            }, {
              path: "/member/*/games/bully/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
          links: [{
            text: a.formatMessage(d.nav_bully_game_overview),
            gaText: d.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: o.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: a.formatMessage(d.nav_bully_accomplishments),
            gaText: d.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: o.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: a.formatMessage(d.nav_bully_support),
            gaText: d.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: a.formatMessage(d.nav_bully_cta_buy_now),
            gaText: d.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: g,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        l = a => ({
          site: "careers",
          appearancePaths: {
            [o.C.www]: [{
              path: "/careers/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
          hideSearch: !0,
          links: [{
            text: a.formatMessage(d.nav_careers_home),
            gaText: d.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: o.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: a.formatMessage(d.nav_careers_openings),
            gaText: d.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: o.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: a.formatMessage(d.nav_careers_contact_us),
            gaText: d.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: a.formatMessage(d.nav_careers_careers_on_linkedin),
            gaText: d.nav_careers_careers_on_linkedin.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        }),
        m = () => ({
          site: "gta",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/gta/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
          links: []
        }),
        c = () => ({
          site: "gta2",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/gta2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
          links: []
        }),
        v = a => ({
          site: "grandtheftauto3",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/grandtheftauto3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
          links: [],
          cta: {
            text: a.formatMessage(d.nav_gta3_cta_buy_now),
            gaText: d.nav_gta3_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        p = a => ({
          site: "gta-iv",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/IV/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/gtaiv*",
              options: {}
            }, {
              path: "/member/*/games/gtaiv*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
          links: [{
            text: a.formatMessage(d.nav_gtaiv_overview),
            gaText: d.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: o.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: a.formatMessage(d.nav_gtaiv_accomplishments),
            gaText: d.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: o.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(d.nav_gtaiv_support),
            gaText: d.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: a.formatMessage(d.nav_gtaiv_cta_buy_now),
            gaText: d.nav_gtaiv_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        }),
        u = a => ({
          appearancePaths: {
            [o.C.www]: [{
              path: "/gta-v/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/gtav/*",
              options: {}
            }, {
              path: "/member/*/games/gtav/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
          cta: {
            dataTestId: "gtavPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: o.C.www,
              path: "/gta-v?info=order"
            },
            text: a.formatMessage(d.nav_gtav_cta_buy_now),
            gaText: d.nav_gtav_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtavLink",
            location: {
              domain: o.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(d.nav_gtav_overview),
            gaText: d.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: o.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(d.nav_gtav_discover),
              gaText: d.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: o.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(d.nav_gtao_career_progress),
              gaText: d.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(d.nav_gtav_my_character),
              gaText: d.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: o.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(d.nav_gtav_jobs),
              gaText: d.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: o.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(d.nav_gtav_guides),
              gaText: d.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: o.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(d.nav_gtav_licence_plate_creator),
              gaText: d.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(d.nav_gtav_gta_online),
            gaText: d.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(d.nav_gtav_stats),
              gaText: d.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(d.nav_gtav_missions),
              gaText: d.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(d.nav_gtav_checklist),
              gaText: d.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(d.nav_gtav_accomplishments),
              gaText: d.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: a.formatMessage(d.nav_gtav_story),
            gaText: d.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: o.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(d.nav_gtav_gta_plus),
            gaText: d.nav_gtav_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              children: [{
                dataTestId: "gtavAllJobsButtons",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: a.formatMessage(d.nav_gtav_jobs_browse_all),
                gaText: d.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: a.formatMessage(d.nav_gtav_community_series),
                gaText: d.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: a.formatMessage(d.nav_gtav_my_jobs),
                gaText: d.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: a.formatMessage(d.nav_gtav_playlists),
                gaText: d.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: a.formatMessage(d.nav_gtav_jobs),
              gaText: d.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/crews"
                },
                text: a.formatMessage(d.nav_gtav_crews_browse_all),
                gaText: d.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: a.formatMessage(d.nav_gtav_my_crews),
                gaText: d.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/crews/create"
                },
                text: a.formatMessage(d.nav_gtav_create_crew),
                gaText: d.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/emblems"
                },
                text: a.formatMessage(d.nav_gtav_emblem_editor),
                gaText: d.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: a.formatMessage(d.nav_gtav_crews),
              gaText: d.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaViewPhotosButton",
              location: {
                domain: o.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(d.nav_gtav_photos),
              gaText: d.nav_gtav_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaViewVideosButton",
              location: {
                domain: o.C.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(d.nav_gtav_videos),
              gaText: d.nav_gtav_videos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: o.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(d.nav_rsg_community_guidelines),
              gaText: d.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: a.formatMessage(d.nav_gtav_community),
            gaText: d.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: o.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(d.nav_gtav_support),
            gaText: d.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta5"
        }),
        f = () => ({
          site: "grandtheftauto-gba",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/grandtheftauto-gba/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
          links: []
        }),
        h = () => ({
          site: "chinatownwars",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/chinatownwars/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
          links: []
        }),
        w = a => ({
          site: "episodesfromlibertycity",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/episodesfromlibertycity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
          cta: {
            dataTestId: "gtaiveflcPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.rockstargames.com",
              path: "/game/buy-grand-theft-auto-iv"
            },
            text: a.formatMessage(d.nav_gtaiveflc_cta_buy_now),
            gaText: d.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: a.formatMessage(d.nav_gtaiv_overview),
            gaText: d.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: o.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: a.formatMessage(d.nav_gtaiv_accomplishments),
            gaText: d.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: o.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(d.nav_gtaiv_support),
            gaText: d.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        y = () => ({
          site: "libertycitystories",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/libertycitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
          links: []
        }),
        M = () => ({
          site: "gtalondon",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/gtalondon/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
          links: []
        }),
        b = a => ({
          appearancePaths: {
            [o.C.www]: [{
              path: "/gta-online/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/members*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/member/:username/crews*",
              options: {}
            }, {
              path: "/crews*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/crew*",
              options: {}
            }, {
              path: "/jobs*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "gtav"
                }
              }
            }, {
              path: "*/jobs*",
              options: {}
            }, {
              path: "/videos*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/photos*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "gtav"
                }
              }
            }, {
              path: "/emblems*",
              options: {}
            }, {
              path: "/games/gtav/:platform/career/overview/gtaonline*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: o.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(d.nav_gtao_cta_buy_now),
            gaText: d.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: o.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(d.nav_gtao_overview),
            gaText: d.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: o.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(d.nav_gtao_discover),
              gaText: d.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: o.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(d.nav_gtao_career_progress),
              gaText: d.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(d.nav_gtao_my_character),
              gaText: d.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: o.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(d.nav_gtao_jobs),
              gaText: d.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: o.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(d.nav_gtao_guides),
              gaText: d.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: o.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(d.nav_gtao_license_plate_creator),
              gaText: d.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(d.nav_gtao_gtao),
            gaText: d.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(d.nav_gtao_stats),
              gaText: d.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(d.nav_gtao_missions),
              gaText: d.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(d.nav_gtao_checklist),
              gaText: d.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(d.nav_gtao_accomplishments),
              gaText: d.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(d.nav_gtao_story),
            gaText: d.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: o.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(d.nav_gtao_gta_plus),
            gaText: d.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(d.nav_gtao_jobs_browse_all),
                gaText: d.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_community_series),
                gaText: d.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(d.nav_gtao_my_jobs),
                gaText: d.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_jobs_playlists),
                gaText: d.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(d.nav_gtao_jobs),
              gaText: d.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(d.nav_gtao_browse_crews),
                gaText: d.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_my_crews),
                gaText: d.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: o.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(d.nav_gtao_crews_create),
                gaText: d.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: o.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_emblem_editor),
                gaText: d.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: o.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: a.formatMessage(d.nav_gtao_crews),
              gaText: d.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: o.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(d.nav_gtao_photos),
              gaText: d.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoVideosButton",
              location: {
                domain: o.C.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(d.nav_gtao_videos),
              gaText: d.nav_gtao_videos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: o.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(d.nav_rsg_community_guidelines),
              gaText: d.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(d.nav_gtao_community),
            gaText: d.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: o.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(d.nav_gtao_support),
            gaText: d.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-online"
        }),
        x = a => ({
          appearancePaths: {
            [o.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: o.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(d.nav_gtao_cta_buy_now),
            gaText: d.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: o.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(d.nav_gtao_overview),
            gaText: d.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: o.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(d.nav_gtao_discover),
              gaText: d.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: o.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(d.nav_gtao_career_progress),
              gaText: d.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(d.nav_gtao_my_character),
              gaText: d.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: o.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(d.nav_gtao_jobs),
              gaText: d.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: o.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(d.nav_gtao_guides),
              gaText: d.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: o.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(d.nav_gtao_license_plate_creator),
              gaText: d.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(d.nav_gtao_gtao),
            gaText: d.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(d.nav_gtao_stats),
              gaText: d.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(d.nav_gtao_missions),
              gaText: d.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(d.nav_gtao_checklist),
              gaText: d.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: o.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(d.nav_gtao_accomplishments),
              gaText: d.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(d.nav_gtao_story),
            gaText: d.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: o.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(d.nav_gtao_gta_plus),
            gaText: d.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(d.nav_gtao_jobs_browse_all),
                gaText: d.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_community_series),
                gaText: d.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(d.nav_gtao_my_jobs),
                gaText: d.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_jobs_playlists),
                gaText: d.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(d.nav_gtao_jobs),
              gaText: d.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(d.nav_gtao_browse_crews),
                gaText: d.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_my_crews),
                gaText: d.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: o.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(d.nav_gtao_crews_create),
                gaText: d.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: o.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(d.nav_gtao_emblem_editor),
                gaText: d.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: o.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: a.formatMessage(d.nav_gtao_crews),
              gaText: d.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: o.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(d.nav_gtao_photos),
              gaText: d.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoVideosButton",
              location: {
                domain: o.C.socialClub,
                path: "/videos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(d.nav_gtao_videos),
              gaText: d.nav_gtao_videos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: o.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(d.nav_rsg_community_guidelines),
              gaText: d.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(d.nav_gtao_community),
            gaText: d.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: o.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(d.nav_gtao_support),
            gaText: d.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-plus"
        }),
        C = a => ({
          site: "sanandreas",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/sanandreas/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
          links: [],
          cta: {
            text: a.formatMessage(d.nav_gtasanandreas_cta_buy_now),
            gaText: d.nav_gtasanandreas_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        }),
        T = a => ({
          site: "gta-trilogy",
          appearancePaths: {
            [o.C.www]: [{
              path: "/GTATrilogy/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/gtasa($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtasa/*",
              options: {}
            }, {
              path: "/games/gtavc($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtavc/*",
              options: {}
            }, {
              path: "/games/gta3($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gta3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
          links: [{
            text: a.formatMessage(d.nav_gta_trilogy_overview),
            gaText: d.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: o.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: a.formatMessage(d.nav_gta_trilogy_accomplishments),
            gaText: d.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: a.formatMessage(d.nav_gta_trilogy_gtasa),
              gaText: d.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: a.formatMessage(d.nav_gta_trilogy_gtavc),
              gaText: d.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: a.formatMessage(d.nav_gta_trilogy_gta3),
              gaText: d.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: a.formatMessage(d.nav_gta_trilogy_support),
            gaText: d.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(d.nav_gta_trilogy_gtasa),
              gaText: d.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: o.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: a.formatMessage(d.nav_gta_trilogy_gtavc),
              gaText: d.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: o.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: a.formatMessage(d.nav_gta_trilogy_gta3),
              gaText: d.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: o.C.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: a.formatMessage(d.nav_gta_trilogy_cta_buy_now),
            gaText: d.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        k = a => ({
          site: "vicecity",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/vicecity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
          links: [],
          cta: {
            text: a.formatMessage(d.nav_gtavc_cta_buy_now),
            gaText: d.nav_gtavc_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        I = () => ({
          site: "vicecitystories",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/vicecitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
          links: []
        }),
        L = a => ({
          site: "la-noire",
          appearancePaths: {
            [o.C.www]: [{
              path: "/lanoire/*",
              options: {}
            }, {
              path: "/games/lanoire/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/lanvr/*",
              options: {}
            }, {
              path: "/member/*/games/lanvr/*",
              options: {}
            }, {
              path: "/games/lan/*",
              options: {}
            }, {
              path: "/member/*/games/lan/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
          links: [{
            text: a.formatMessage(d.nav_lanoire_overview),
            gaText: d.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: o.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: a.formatMessage(d.nav_lanoire_progress),
            gaText: d.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(d.nav_lanoire_pc_console),
              gaText: d.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: a.formatMessage(d.nav_lanoire_case_tracker),
                gaText: d.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: a.formatMessage(d.nav_lanoire_checklist),
                gaText: d.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: a.formatMessage(d.nav_lanoire_stats),
                gaText: d.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: a.formatMessage(d.nav_lanoire_accomplishments),
                gaText: d.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: a.formatMessage(d.nav_lanoire_badge_pursuit),
                gaText: d.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: a.formatMessage(d.nav_lanoire_vr_case_files),
              gaText: d.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: a.formatMessage(d.nav_lanoire_stats),
                gaText: d.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: a.formatMessage(d.nav_lanoire_accomplishments),
                gaText: d.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: o.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: a.formatMessage(d.nav_lanoire_support),
            gaText: d.nav_lanoire_support.defaultMessage,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: a.formatMessage(d.nav_lanoire_cta_buy_now),
            gaText: d.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: o.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        }),
        B = () => ({
          site: "manhunt",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/manhunt/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
          links: []
        }),
        P = () => ({
          site: "manhunt2",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/manhunt2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
          links: []
        }),
        S = () => ({
          site: "maxpayne",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/maxpayne/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
          links: []
        }),
        j = () => ({
          site: "maxpayne2",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/maxpayne2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
          links: []
        }),
        A = a => ({
          site: "maxpayne3",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/maxpayne3/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/maxpayne3*",
              options: {}
            }, {
              path: "/member/*/games/maxpayne3*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
          links: [{
            text: a.formatMessage(d.nav_mp3_overview),
            gaText: d.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: o.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: a.formatMessage(d.nav_mp3_progress),
            gaText: d.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: a.formatMessage(d.nav_mp3_accomplishments),
              gaText: d.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: a.formatMessage(d.nav_mp3_singleplayer),
              gaText: d.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: a.formatMessage(d.nav_mp3_career),
                gaText: d.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_checklist),
                gaText: d.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_grinds),
                gaText: d.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_chapters),
                gaText: d.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_weapons),
                gaText: d.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_leaderboards),
                gaText: d.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(d.nav_mp3_multiplayer),
              gaText: d.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: a.formatMessage(d.nav_mp3_career),
                gaText: d.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_grinds),
                gaText: d.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_weapons),
                gaText: d.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_leaderboards),
                gaText: d.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(d.nav_mp3_crews),
              gaText: d.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: a.formatMessage(d.nav_mp3_multiplayer),
                gaText: d.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_score_attack),
                gaText: d.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_ny_minute),
                gaText: d.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_checkpoint_challenge),
                gaText: d.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: a.formatMessage(d.nav_mp3_featured),
                gaText: d.nav_mp3_featured.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: o.C.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: a.formatMessage(d.nav_mp3_support),
            gaText: d.nav_mp3_support.defaultMessage,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: a.formatMessage(d.nav_mp3_cta_buy_now),
            gaText: d.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy"
          }
        }),
        z = () => ({
          site: "midnightclub",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/midnightclub/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
          links: []
        }),
        D = () => ({
          site: "midnightclub2",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/midnightclub2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
          links: []
        }),
        G = () => ({
          site: "midnightclub3",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/midnightclub3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
          links: []
        }),
        R = a => ({
          site: "midnightclubLA",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/midnightclubLA/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
          links: [],
          cta: {
            text: a.formatMessage(d.nav_midnightclubla_buy_now),
            gaText: d.nav_midnightclubla_buy_now.defaultMessage,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/games/store/midnight-club-los-angeles-complete/BV6WLXGS887C"
            },
            ga: "cta_buy"
          }
        }),
        O = () => ({
          site: "oni",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/oni/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
          links: []
        }),
        N = a => ({
          appearancePaths: {
            [o.C.www]: [{
              path: "/reddeadonline/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/rdo*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
          cta: {
            dataTestId: "rdoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: o.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            target: "_blank",
            text: a.formatMessage(d.nav_rdo_cta_buy_now),
            gaText: d.nav_rdo_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: o.C.www,
              path: "/reddeadonline"
            },
            text: a.formatMessage(d.nav_rdo_overview),
            gaText: d.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: a.formatMessage(d.nav_rdo_getting_started),
              gaText: d.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: a.formatMessage(d.nav_rdo_specialist_roles),
              gaText: d.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: a.formatMessage(d.nav_rdo_story_missions),
              gaText: d.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: a.formatMessage(d.nav_rdo_posses_free_roam),
              gaText: d.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: a.formatMessage(d.nav_rdo_competitive_series),
              gaText: d.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: a.formatMessage(d.nav_rdo_customization),
              gaText: d.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: o.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: a.formatMessage(d.nav_rdo_progression),
              gaText: d.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: a.formatMessage(d.nav_rdo_explore),
            gaText: d.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: a.formatMessage(d.nav_rdo_my_character),
              gaText: d.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: a.formatMessage(d.nav_rdo_roles),
              gaText: d.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: a.formatMessage(d.nav_rdo_club_rewards),
              gaText: d.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: a.formatMessage(d.nav_rdo_rank_unlocks),
              gaText: d.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: a.formatMessage(d.nav_rdo_awards),
              gaText: d.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: a.formatMessage(d.nav_rdo_accomplishments),
              gaText: d.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: a.formatMessage(d.nav_rdo_benefits),
              gaText: d.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: a.formatMessage(d.nav_rdo_progress),
            gaText: d.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: a.formatMessage(d.nav_rdo_posses),
              gaText: d.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPhotosButton",
              location: {
                domain: o.C.socialClub,
                path: "/photos/?title=rdr2"
              },
              text: a.formatMessage(d.nav_rdo_photos),
              gaText: d.nav_rdo_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: o.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(d.nav_rsg_community_guidelines),
              gaText: d.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: a.formatMessage(d.nav_rdo_community),
            gaText: d.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: o.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: a.formatMessage(d.nav_rdo_catalogue),
            gaText: d.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: o.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: a.formatMessage(d.nav_rdo_support),
            gaText: d.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          site: "rdo"
        }),
        V = a => ({
          site: "reddeadredemption",
          appearancePaths: {
            [o.C.www]: [{
              path: "/reddeadredemption/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
          links: [],
          cta: {
            text: a.formatMessage(d.nav_rdr_cta_buy_now),
            gaText: d.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: o.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        }),
        E = a => ({
          site: "rdr2",
          appearancePaths: {
            [o.C.www]: [{
              path: "/reddeadredemption2/*",
              options: {}
            }, {
              path: "/games/reddeadredemption2/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/games/rdr2*",
              options: {}
            }, {
              path: "/photos*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "rdr2"
                }
              }
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
          links: [{
            text: a.formatMessage(d.nav_rdr2_overview),
            gaText: d.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: o.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: a.formatMessage(d.nav_rdr2_explore),
            gaText: d.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: a.formatMessage(d.nav_rdr2_van_der_linde_gang),
              gaText: d.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_locations),
              gaText: d.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_wildlife),
              gaText: d.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_weaponry),
              gaText: d.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: a.formatMessage(d.nav_rdr2_progress),
            gaText: d.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: a.formatMessage(d.nav_rdr2_stats),
              gaText: d.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_chapters),
              gaText: d.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_challenges),
              gaText: d.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_character),
              gaText: d.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_compendium),
              gaText: d.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_accomplishments),
              gaText: d.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: o.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: a.formatMessage(d.nav_rdr2_media),
            gaText: d.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: a.formatMessage(d.nav_rdr2_gallery),
              gaText: d.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_artwork),
              gaText: d.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_videos),
              gaText: d.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: a.formatMessage(d.nav_rdr2_music),
              gaText: d.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: o.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: a.formatMessage(d.nav_rdr2_online),
            gaText: d.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: o.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: a.formatMessage(d.nav_rdr2_catalogue),
            gaText: d.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: o.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: a.formatMessage(d.nav_rdr2_support),
            gaText: d.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: a.formatMessage(d.nav_rdr2_cta_buy_now),
            gaText: d.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        }),
        J = () => ({
          site: "undeadnightmare",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/undeadnightmare/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
          links: []
        }),
        q = () => ({
          site: "reddeadrevolver",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/reddeadrevolver/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
          links: []
        }),
        W = a => ({
          site: "rsg",
          appearancePaths: {
            [o.C.www]: [{
              path: "/search/*",
              options: {
                isSearchPage: !0,
                forceSearch: !0
              }
            }, {
              path: "/*",
              options: {}
            }],
            [o.C.socialClub]: [{
              path: "/*",
              options: {}
            }]
          },
          brand: null,
          links: [{
            text: a.formatMessage(d.nav_rsg_games),
            gaText: d.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: a.formatMessage(d.nav_rsg_newswire),
            gaText: d.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: o.C.www,
              path: "/newswire"
            }
          }, {
            text: a.formatMessage(d.nav_rsg_videos),
            gaText: d.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: o.C.www,
              path: "/videos"
            }
          }, {
            text: a.formatMessage(d.nav_rsg_downloads),
            gaText: d.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: o.C.www,
              path: "/downloads"
            }
          }, {
            text: a.formatMessage(d.nav_rsg_store),
            gaText: d.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: o.C.store,
              path: "/"
            }
          }, {
            text: a.formatMessage(d.nav_rsg_support),
            gaText: d.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: o.C.support,
              path: "/"
            }
          }],
          cta: {
            text: a.formatMessage(d.nav_rsg_cta_get_launcher),
            gaText: d.nav_rsg_cta_get_launcher.defaultMessage,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: o.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          },
          hideQuickAccess: !0
        }),
        F = () => ({
          site: "stateofemergency",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/stateofemergency/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
          links: []
        }),
        U = () => ({
          site: "skateanddestroy",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/skateanddestroy/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
          links: []
        }),
        $ = () => ({
          site: "smugglersrun",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/smugglersrun/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
          links: []
        }),
        H = () => ({
          site: "smugglersrun2",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/smugglersrun2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
          links: []
        }),
        X = () => ({
          site: "smugglersrunwarzones",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/smugglersrunwarzones/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
          links: []
        }),
        Y = a => ({
          site: "tabletennis",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/tabletennis/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
          links: [],
          cta: {
            text: a.formatMessage(d.nav_tabletennis_cta_buy_now),
            gaText: d.nav_tabletennis_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        }),
        Q = () => ({
          site: "italianjob",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/italianjob/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
          links: []
        }),
        K = a => ({
          site: "thewarriors",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/thewarriors/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
          cta: {
            dataTestId: "thewarriorsPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            text: a.formatMessage(d.nav_thewarriors_cta_buy_now),
            gaText: d.nav_thewarriors_cta_buy_now.defaultMessage
          },
          links: []
        }),
        Z = () => ({
          site: "wildmetal",
          appearancePaths: {
            [o.C.www]: [{
              path: "/games/wildmetal/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
          links: []
        });
      var aa = t(6454);
      const ea = /[*?\\<>&%@:~]/g,
        ta = {
          min: 3,
          max: 100,
          validationFunction: function(a) {
            return a.match(ea)
          }
        },
        sa = (0, o.A)(),
        na = (a, e) => "/" + [e, ...a.split("/")].filter(Boolean).join("/"),
        oa = (a, e) => a ? a === e ? "" : a.startsWith("http") ? a : `https://${sa.sites[a]}.rockstargames.com` : "";
      var ra = t(8096);
      const ia = a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            locale: r,
            ...g
          } = a;
          const _ = (0, i.useIntl)(),
            l = (0, o.A)(),
            m = (a => {
              const e = (0, o.A)(),
                t = a.subdomaincom,
                s = a => {
                  const n = e.currentSite?.site !== o.C.www && a.location?.domain === o.C.www && "en" !== t;
                  return {
                    ...a,
                    ...a.children ? {
                      children: a.children.map(s)
                    } : {},
                    ...a.targets ? {
                      targets: a.targets.map(s)
                    } : {},
                    ...a.location ? {
                      location: {
                        ...a.location,
                        path: n ? na(a.location.path, t) : a.location.path,
                        domain: e?.currentSite ? oa(a.location.domain, e.currentSite.site) : ""
                      }
                    } : {}
                  }
                };
              return a => s(a)
            })(r),
            c = e,
            v = (a => ({
              targets: [{
                text: a.formatMessage(d.search_target_games),
                gaText: d.search_target_games.defaultMessage,
                tab: "games",
                type: "",
                location: {
                  domain: o.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "games"
                  }
                },
                searchOptions: ta
              }, {
                text: a.formatMessage(d.search_target_posts),
                gaText: d.search_target_posts.defaultMessage,
                tab: "posts",
                type: "",
                location: {
                  domain: o.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "posts"
                  }
                },
                searchOptions: ta
              }, {
                text: a.formatMessage(d.search_target_videos),
                gaText: d.search_target_videos.defaultMessage,
                tab: "videos",
                type: "",
                location: {
                  domain: o.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "videos"
                  }
                },
                searchOptions: ta
              }, {
                text: a.formatMessage(d.search_target_community),
                gaText: d.search_target_community.defaultMessage,
                tab: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: a.formatMessage(d.search_target_users),
                  gaText: d.search_target_users.defaultMessage,
                  type: "",
                  location: {
                    domain: o.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(d.search_target_crews),
                  gaText: d.search_target_crews.defaultMessage,
                  type: "",
                  location: {
                    domain: o.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(d.search_target_jobs),
                  gaText: d.search_target_jobs.defaultMessage,
                  type: "",
                  location: {
                    domain: o.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(d.search_target_user_photos),
                  gaText: d.search_target_user_photos.defaultMessage,
                  type: "",
                  location: {
                    domain: o.C.socialClub,
                    path: "/photos/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(d.search_target_user_videos),
                  gaText: d.search_target_user_videos.defaultMessage,
                  type: "",
                  location: {
                    domain: o.C.socialClub,
                    path: "/videos/{term}"
                  },
                  searchOptions: ta
                }]
              }]
            }))(_),
            [p, u] = (0, n.useState)(window.innerWidth < 1024),
            f = Object.values(s).map((a => a(_))),
            h = (0, n.useMemo)((() => {
              const a = l.currentSite?.site,
                e = W(_).links;
              return f.reduce(((t, s) => {
                if (!l.currentSite?.site || !s?.appearancePaths?.[l.currentSite.site]) return t;
                const n = ((a, e, t, s) => a && 0 !== a.length || "www" !== t || !s ? a : e)(s.links, e, a, p);
                return [...t, {
                  ...s,
                  appearancePaths: l.currentSite?.site ? s?.appearancePaths?.[l.currentSite.site] : [],
                  links: n.map(m),
                  cta: s.cta && m(s.cta)
                }]
              }), [])
            }), [p, f]),
            w = {
              ...v,
              targets: v.targets.map(m)
            };
          return (0, n.useEffect)((() => {
            const a = () => {
              u(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), []), (0, ra.jsx)(c, {
            navigationData: h,
            locale: r,
            searchConfig: w,
            globalNavigationComponent: t,
            ...g
          })
        },
        da = a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            ...s
          } = a;
          const [n] = (0, i.getLocale)();
          return e ? (0, ra.jsx)(i.IntlProvider, {
            locales: aa,
            lang: n.iso,
            children: (0, ra.jsx)(ia, {
              globalNavLoaderComponent: e,
              globalNavComponent: t,
              locale: n,
              ...s
            })
          }) : null
        }
    }
  }
]);