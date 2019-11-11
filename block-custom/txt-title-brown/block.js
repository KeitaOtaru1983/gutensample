/* z-tree.jpの中見出し ブラウン */


const { registerBlockType } = wp.blocks;
const {RichText} = wp.editor;
const blockStyle = {borderLeft: '4px solid #c48214', padding: '10px 20px', marginBottom: '30px', fontSize: '18px',};




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
            <div style={ blockStyle }>
                <RichText
                    tagName='p'
                    className={ props.className }
                    onChange={ (content) => props.setAttributes({content}) }
                    value={ props.attributes.content }
                />
            </div>
        );
    },
    save: function( props ) {
        return (
            <h3 style={ blockStyle }>
                <RichText.Content
                   value={ props.attributes.content }
                />
            </h3>
        );
    },
} );