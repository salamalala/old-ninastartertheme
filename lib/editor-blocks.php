<?php
// Allowed Gutenberg Blocks


add_filter( 'allowed_block_types', 'custom_allowed_block_types', 10, 2 );

function custom_allowed_block_types( $allowed_block_types, $post ) {

    $allowed_blocks = array(
      'core/paragraph',
      'core/image',
      'core/heading',
      'core/pullquote',
      'core/file',
      'core/video',
      'core/columns',
      'core/button',
      'core/text-columns',
      'core/spacer',
    );

	return $allowed_blocks;
}
