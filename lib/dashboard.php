<?php


// Add custom Widget with support details
add_action('wp_dashboard_setup', 'nr_support_widget');

function nr_support_widget() {
    global $wp_meta_boxes;
    wp_add_dashboard_widget('custom_help_widget', 'Website Infos', 'nr_dashboard_help'
    );
}

function nr_dashboard_help() {
  echo
    '<p>
    <h2>'.get_bloginfo('name').'</h2>
    <br/>
    <br/>
    <strong style="text-transform: uppercase; letter-spacing: 1px;">Website by Nina Regli </strong>
    <br/>
    <br/>
    <a href="mailto:hello@ninaregli.com">hello@ninaregli.com</a> |
    +31 65 70 40 40 1

   </p>';
}


// Remove WP Meta Boxes
function remove_dashboard_meta() {
    remove_action('welcome_panel','wp_welcome_panel');
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal'); //Removes the 'incoming links' widget
    remove_meta_box('dashboard_primary', 'dashboard', 'normal'); //Removes the 'WordPress News' widget
    remove_meta_box('dashboard_secondary', 'dashboard', 'normal'); //Removes the secondary widget
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); //Removes the 'Quick Draft' widget
    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side'); //Removes the 'Recent Drafts' widget
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal'); //Removes the 'Activity' widget
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); //Removes the 'At a Glance' widget
    remove_meta_box('dashboard_activity', 'dashboard', 'normal'); //Removes the 'Activity' widget (since 3.8)
}
add_action('admin_init', 'remove_dashboard_meta');


// Hide Admin Bar on Front Page
show_admin_bar( false );

// Remove "Post" and "Comments" from admin bar
add_action('admin_menu', 'fml_post_remove');

function fml_post_remove () {
   remove_menu_page('edit.php');
	 remove_menu_page('edit-comments.php');
}

// Remove WordPress Thank You Message:
add_filter( 'admin_footer_text', '__return_empty_string', 11 );
