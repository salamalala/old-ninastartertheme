<?php

// Default Callback
function custom_acf_block_render_callback( $block) {
  $context['block'] = $block;
  $context['fields'] = get_fields();

	$slug = str_replace('acf/', '', $block['name']);

	$context['slug'] = $slug;

 	Timber::render( "/templates/block/{$slug}.twig", $context );
}
