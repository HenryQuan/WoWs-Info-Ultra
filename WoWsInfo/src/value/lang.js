import LocalizedStrings from 'react-native-localization';

export default lang = new LocalizedStrings({
  en: {
    /// Setup section
    setup_title: 'Setup WoWs Info',
    setup_done_button: 'Done',
    setup_loading: 'Loading...',
    /// Home section
    // Update section
    update_version_title: 'Version',
    update_app_version: 'App ->',
    update_game_version: 'Game ->',
    // Button section
    button_settings_label: 'Settings',
    button_menu_label: 'Menu',
    button_back_label: 'Go Back',
    button_home_label: 'Home',
    /// Wiki section
    wiki_warship_footer: 'Filter',
    wiki_warship_filter_btn: 'Apply',
    wiki_warship_reset_btn: 'Reset',
    wiki_warship_filter_placeholder: 'Enter a ship name',
    wiki_warship_filter_tier: 'Tier',
    wiki_warship_filter_nation: 'Nation',
    wiki_warship_filter_type: 'Type',
    wiki_warship_filter_premium: 'Premium ship',
    // Warship Detail
    warship_unkown: 'C Unknown',
    warship_model: '3D Model',
    warship_update_module: 'Update ship modules',
    warship_default_module: 'Default',
    warship_apply_module: 'Apply',
    warship_survivability: 'Survivablity',
    warship_survivability_health: 'Health',
    warship_survivability_armour: 'Armour',
    warship_survivability_protection: 'Protection',
    warship_artillery: 'Artillery',
    warship_artillery_main: 'Main Battery',
    warship_avg_damage: 'Average Damage',
    warship_avg_winrate: 'Average Winrate',
    warship_avg_frag: 'Average Frags',
    warship_weapon_reload: 'Reload Time',
    warship_weapon_range: 'Range',
    warship_weapon_configuration: 'Configuration',
    warship_weapon_dispersion: 'Max Dispersion',
    warship_weapon_rotation: 'Rotation Time',
    warship_weapon_fire_chance: 'Fire Chance',
    warship_artillery_main_weight: 'Weight',
    warship_weapon_damage: 'Max Damage',
    warship_weapon_potential_damage: 'Potential Damage',
    warship_weapon_ap_overmatch: 'Overmatch',
    warship_weapon_he_penetration: 'Penetration',
    warship_weapon_speed: 'Speed',
    warship_ramming: 'Ramming',
    warship_artillery_secondary: 'Secondary',
    warship_torpedoes: 'Torpedoes',
    warship_torpedoes_visible_distance: 'Detection',
    warship_antiaircraft: 'AA Defense',
    warship_maneuverabilty: 'Maneuverabilty',
    warship_maneuverabilty_turning: 'Turning Radius',
    warship_maneuverabilty_speed: 'Max Speed',
    warship_maneuverabilty_rudder_time: 'Rudder Time',
    warship_aircraft: 'Aircraft',
    warship_concealment: 'Concealment',
    warship_concealment_detect_by_ship: 'Detection by Ship',
    warship_concealment_detect_by_plane: 'Detection by Plane',
    warship_upgrades: 'Upgrades',
    warship_next_ship: 'Next ship(s)',
    /// Menu section
    /// Settings section
    server_name: ['Russia', 'Europe', 'North Ameria', 'Asia'],
    settings_api_settings: 'API Settings',
    settings_app_settings: 'App Settings',
    settings_app_dark_mode: 'Dark mode',
    settings_app_theme_colour: 'Theme colour',
    settings_app_swap_buttons: 'Swap bottom buttons',
    settings_app_send_feedback: 'Feedback',
    settings_app_send_feedback_subtitle: 'Send an email to developer',
    settings_app_report_issues: 'Report an issue',
    settings_app_write_review: 'Write a review',
    settings_app_share: 'Share with friends',
    settings_app_share_subtitle: 'Share WoWs Info if you enjoy using it!',
    settings_open_source: 'Open Source',
    settings_open_source_github: 'Github',
    settings_open_source_licence: 'Licences',
    settings_open_source_licence_subtitle: 'Great modules that are used by WoWs Info',
    // Footer
    menu_footer: 'Search',
    menu_search_player: 'Player',
    menu_search_clan: 'Clan',
    // Search bar
    search_player_online: 'online',
    // Wiki
    wiki_section_title: 'Encyclopedia',
    wiki_achievement: 'Achievement',
    wiki_warships: 'Warships',
    wiki_upgrades: 'Upgrades',
    wiki_flags: 'Flags/Camouflages',
    wiki_skills: 'Commander Skills',
    wiki_skills_tier: 'Tier',
    wiki_skills_reset: 'Reset',
    wiki_skills_point: 'point(s)',
    wiki_maps: 'Maps',
    wiki_collections: 'Collections',
    // Extra
    extra_section_title: 'Extra',
    extra_support_wowsinfo: 'Support WoWs Info',
    // Websites
    website_title: 'Websites',
    website_official_site: 'World of Warships',
    website_premium: 'Premium Shop',
    website_global_wiki: 'Global Wiki',
    website_dev_blog: 'Developer Blog',
    website_sea_group: 'Sea Group',
    website_daily_bounce: 'The Daily Bounce',
    website_numbers: 'WoWS Stats & Numbers',
    website_today: 'Warships.Today',
    website_ranking: 'Player Ranking',
    website_models: 'Warships Models',
    // YouTubers
    youtuber_title: 'YouTubers',
    youtuber_official: 'WoWs Official',
    youtuber_flambass: 'Flambass',
    youtuber_notser: 'Notser',
    youtuber_jingles: 'The Mighty Jingles',
    youtuber_panzerknacker: 'Panzerknacker',
    youtuber_flamu: 'Flamu',
    youtuber_yuro: 'Yuro',
    youtuber_iChaseGaming: 'iChaseGaming',
    youtuber_NoZoupForYou: 'NoZoupForYou',
    // Tools
    tool_title: 'Tools',
    /// Player section
    // Tabs
    tab_achievement_title: 'Achievement',
    tab_graph_title: 'Graph',
    tab_ship_title: 'Ship',
    tab_rank_title: 'Rank',
    // Basic
    basic_data_unknown: 'Unknown',
    basic_level_tier: 'Level',
    basic_register_date: 'Register Date',
    basic_last_battle: 'Last Battle',
    // Record
    record_title: 'Records',
    record_best_ship: 'Best Ship',
    record_max_damage_dealt: 'Max Damage Dealt',
    record_max_frags_battle: 'Max Frags',
    record_max_planes_killed: 'Max Planes Destroyed',
    record_max_xp: 'Max XP',
    record_max_ships_spotted: 'Max Ships Spotted',
    record_max_total_agro: 'Max Potential Damage Dealt',
    record_max_damage_scouting: 'Max Scouting Damage',
    // Weapon record
    weapon_max_frags: 'Max Frags',
    weapon_total_frags: 'Total Frags',
    weapon_hit_ratio: 'Hit Ratio',
    /// App name section
    app_name: 'WoWs Info Origin',
    wowsinfo_black: 'Black',
    wowsinfo_white: 'White',
    wowsinfo_ultra: 'Ultra',
    wowsinfo_ultimate: 'Ultimate',
    wowsinfo_pro: 'Pro',
    wowsinfo_new: 'New',
    wowsinfo_go: 'Go',
    wowsinfo_origin: 'Origin',
    wowsinfo_free: 'Free',
    /// RS section
    // Tips
    rs_tip_download: '1. Download',
    rs_tip_one: 'Please visit this Github repository and download the latest release. This program does not use lots of RAM and storage. Currently, it is in its beta stage and has no GUI.\n',
    rs_tip_setup: '2. Setup',
    rs_tip_two: "Copy and paste the path of your game folder into this program and you have to run it with admin or it will not work. It won't do anything harmful to your computer.\n",
    rs_tip_enjoy: '3. Enjoy',
    rs_tip_three: 'Enter the IP address you see on the screen and WoWs Info will start giving you real-time statistics for both teams.\n',
    /// Error section
    // General erros
    error_title: 'Error',
    error_download_issue: 'Failed to update data. \nPlease try again later.'
  },
  zh: {

  },
  'zh-hant': {

  },
  ja: {

  },
  id: {

  }
});