<?php
/**
 * Nina 2019 Starter Theme
 */


require get_template_directory() . '/lib/setup.php';
require get_template_directory() . '/lib/timber.php';
require get_template_directory() . '/lib/assets.php';
require get_template_directory() . '/lib/cpt-ct.php';
require get_template_directory() . '/lib/acf-blocks.php';
require get_template_directory() . '/lib/acf-blocks-callbacks.php';
require get_template_directory() . '/lib/editor-blocks.php';
require get_template_directory() . '/lib/login-branding.php';



// Change Default WordPress Sizes
update_option( 'thumbnail_size_w', 200 );
update_option( 'thumbnail_size_h', 200 );

update_option( 'medium_size_w', 500 );
update_option( 'medium_size_h', 0 );

update_option( 'medium_large_size_w', 800);
update_option( 'medium_large_size_h', 0);

update_option( 'large_size_w', 1800 );
update_option( 'large_size_h', 0 );

// Remove WP Emoji scripts
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

// Hide Admin Bar
show_admin_bar( false );
