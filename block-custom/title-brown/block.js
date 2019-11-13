/* z-tree.jpの中見出し ブラウン */

const { registerBlockType } = wp.blocks;
const RichText = wp.editor.RichText;


registerBlockType( 'my-custom/title-brown', {
    title: '茶色の中見出し',
    icon: 'index-card',
    category: 'common',
    attributes:{
        content: {
                source: 'html',
                selector: 'p',
            },
    },
    
   edit({ className, attributes,setAttributes}) {
        return (
            <div class={ className }>
                <RichText
                 tagName='p'
                    
                    onChange={ (content) => setAttributes({content}) }
                    value={ attributes.content }
                />
            </div>
        );
    },
    save({attributes}) { 
        return (
            <div>
                <RichText.Content
                    tagName="p"
                    value={ attributes.content }
                />
            </div>
        );
    },
} );