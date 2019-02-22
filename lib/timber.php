<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	});
	return;
}

/*  Timber load it with compiler*/
$timber = new Timber\Timber();
// Sets the directories to find the twig files
Timber::$dirname = 'templates';



/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 */
class CustomSite extends Timber\Site {

	/** Add timber support. */
	public function __construct() {
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		parent::__construct();
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {

    // get all registered navs from the setup:
    $menus = get_registered_nav_menus();
    //this will create $context['header'] = new Timber\Menu('header'):
  	foreach (array_keys($menus) as $key) {
  		$context[$key] = new Timber\Menu($key);
  	}
		$context['options'] = get_fields('option');
		$context['site'] = $this;
		return $context;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		return $twig;
	}
}

new CustomSite();
