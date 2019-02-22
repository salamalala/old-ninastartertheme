<?php

add_action( 'after_setup_theme','hr_setup');

function hr_setup() {

  register_nav_menus( array (
    'header_first'	=> esc_html__( 'Header-First', ' ' ),
    'header_second'	=> esc_html__( 'Header-Second', ' ' ),
    'language_switcher'	=> esc_html__( 'Language Switcher', ' ' ),
    'footer' => esc_html__( 'Footer', ' ' )
  ) );

  add_theme_support( 'automatic-feed-links' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'menus' );
  add_theme_support(
    'html5', array(
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    )
  );

  add_theme_support(
    'post-formats', array(
      'aside',
      'image',
      'video',
      'quote',
      'link',
      'gallery',
      'audio',
    )
  );

  // Gutenberg settings:
  // add custom colors to Gutenberg Editor
  add_theme_support( 'editor-color-palette', array(
  ) );
  // allow full width support
  add_theme_support( 'align-wide' );
  // disable Custom Font Sizes on Gutenberg
  add_theme_support( 'disable-custom-font-sizes' );
  // disable custom colors on Gutenberg
  add_theme_support( 'disable-custom-colors' );
  // add theme support for editor styles
  add_theme_support( 'editor-styles' );
}
