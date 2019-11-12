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

    wp_enqueue_style(
        'block-custom-editor-style',
        plugins_url( '/css/style.css', __FILE__ ),
        array( 'wp-blocks', 'wp-components','wp-editor','wp-edit-blocks'),
        filemtime( plugin_dir_path( __FILE__ ) . '/css/style.css' )
    );
}

add_action( 'enqueue_block_assets', 'gutenberg_examples_enqueue_view_assets' );
function gutenberg_examples_enqueue_view_assets() {
     wp_enqueue_style(
        'block-custom-view-style',
        plugins_url( '/css/style.css', __FILE__ ),
        array('wp-blocks'),
        filemtime( plugin_dir_path( __FILE__ ) . '/css/style.css' )
    );
}


?>