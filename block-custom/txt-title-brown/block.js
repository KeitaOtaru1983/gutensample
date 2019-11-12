/* z-tree.jpの中見出し ブラウン */

const { registerBlockType } = wp.blocks;
const RichText = wp.editor.RichText;


registerBlockType( 'block-custom/txt-title-brown', {
    title: '茶色の中見出し',
    icon: 'index-card',
    category: 'common',
    content: {
            source: 'children',
            selector: 'p',
        },
    
   edit: function( props ) {
        return (
            <div class='txt-title-brown'>
                <RichText
                    onChange={ (content) => props.setAttributes({content}) }
                    value={ props.attributes.content }
                />
            </div>
        );
    },
    save: function( props ) {
        
        return (
            <div>
                {props.attributes.content}
                
            </div>
        );
    },
} );