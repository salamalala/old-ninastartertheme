<?php



/**
 * Enqueue WordPress theme styles
 */
add_action( 'wp_enqueue_scripts', 'custom_scripts' );

function custom_scripts() {
	//Add filemtime in order to do cache busting
	wp_enqueue_style( 'custom-styles', get_stylesheet_directory_uri() .'/assets/dist/css/main.css', array(), filemtime(get_stylesheet_directory() . '/assets/dist/css/main.css'), 'all');

	wp_enqueue_script( 'custom-js', get_template_directory_uri(). '/assets/dist/js/main-min.js', array('jquery'), filemtime(get_template_directory().'/assets/dist/js/main-min.js'));

}


/**
 * Enqueue WordPress theme styles within Gutenberg.
 */
add_action( 'enqueue_block_editor_assets', 'custom_gutenberg_styles' );

function custom_gutenberg_styles() {
	// Load the theme styles within Gutenberg.
	 wp_enqueue_style( 'custom-gutenberg', get_template_directory_uri() .  '/assets/dist/css/editor-styles.css' );
}

/**
 * Remove all Gutenberg styles
 */
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );

function wps_deregister_styles() {
  wp_dequeue_style( 'wp-block-library' );
}
