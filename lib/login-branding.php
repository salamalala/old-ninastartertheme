<?php


// remove WP logo and make everything black and white
add_action( 'login_enqueue_scripts', 'nr_login_styles' );

function nr_login_styles() { ?>
    <style type="text/css">

      .login {
        background-color: white;
        color: black !important;
      }

      div#login > h1 a {
        display: none;
      }

      .login .message {
        background-color: white !important;
        border: black solid 4px !important;
        color: black;
      }

      #login_error {
        border-top:  black solid 4px !important;
        border-right:  black solid 4px !important;
        border-bottom:  black solid 4px !important;
      }

      #loginform {
        background-color: white;
        color: black;
        border: black solid 4px !important;
      }

      input {
        border-radius: 0 !important;
        border: black solid 2px !important;
        box-shadow: none;
        color: black;
      }

      input[type=submit] {
        background-color: black !important;
        text-transform: uppercase;

      }
    </style>
<?php }


add_filter( 'login_message', 'nr_login_message' );

function nr_login_message( $message ) {
    if ( empty($message) ){
      echo '<h2>';
        return get_option( 'blogname' );
      echo '</h2>';
    } else {
        return $message;
    }
}


add_action( 'login_footer', 'nr_login_branding' );

function nr_login_branding() {
    echo '<a class="" href="https://ninaregli.com/" target="_blank" style="margin-top: 50px; display: block; margin-left: auto; margin-right: auto; text-align: center; text-transform: uppercase; color: black; letter-spacing: 4px; font-weight: bolder; text-decoration: none;">';
    _e( "Website by Nina Regli");
    echo '</a>';
}
