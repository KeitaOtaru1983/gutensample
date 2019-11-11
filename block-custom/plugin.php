<?php

/*
Plugin Name: block custom
Plugin URI: http://www.example.com/plugin
Description: Gutenbergサンプル
Author: my name
Version: 0.1
Author URI: http://www.example.com
*/
defined( 'ABSPATH' ) || die();

add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_enqueue_block_editor_assets' );
function gutenberg_examples_enqueue_block_editor_assets() {
    // JSの読み込み
    wp_enqueue_script(
        'block-custom',
        plugins_url( 'blocks.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-components','wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'blocks.build.js' )
    );

}
?>