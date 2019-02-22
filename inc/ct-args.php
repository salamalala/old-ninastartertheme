<?php

$labels = array(
    'name'              => _x($plural, 'taxonomy general name', ''),
    'singular_name'     => _x($single, 'taxonomy singular name', ''),
    'search_items'      => __('Search ' . $plural, ''),
    'all_items'         => __('All Genres', ''),
    'parent_item'       => __('Parent ' . $single, ''),
    'parent_item_colon' => __('Parent :' . $single, ''),
    'edit_item'         => __('Edit ' . $single, ''),
    'update_item'       => __('Update ' . $single, ''),
    'add_new_item'      => __('Add New ' . $single, ''),
    'new_item_name'     => __('New ' . $single . ' Name', ''),
    'menu_name'         => __($single, ''),
);
$args = array(
    'hierarchical'      => $hierarchical,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array('slug' => $slug),
);
