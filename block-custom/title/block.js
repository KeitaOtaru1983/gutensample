/* h2画像用ブロック */

const { registerBlockType } = wp.blocks;
const { MediaUpload } = wp.editor;
const { Button } = wp.components;
 
registerBlockType( 'my-custom/title', {
    title: '大見出し画像',
    icon: 'index-card',
    category: 'common',
    attributes: {
        mediaID: {
            type: 'number'
        },
        mediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src'
        }
    },
    edit ( props ) {
        const {
            className,
            attributes: {
                mediaID,
                mediaURL
            },
            setAttributes,
        } = props;
 
        const onSelectImage = ( media ) => {
            setAttributes( {
                mediaURL: media.url,
                mediaID: media.id,
            } );
        };
 
        return (
            <div className={ className }>
                <div className="image">
                    <MediaUpload
                        onSelect={ onSelectImage }
                        type="image"
                        value={ mediaID }
                        render={ ( { open } ) => (
                            <Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
                                { ! mediaID ? '画像アップロード': <img src={ mediaURL } /> }
                            </Button>
                        ) }
                    />
                </div>
            </div>
        );
    },
    save ( props ) {
        const {
            attributes: { mediaURL }
        } = props;
        return (
            <h2>
                {
                    mediaURL && (
                        <img className="upload-image" src={ mediaURL } alt="アップロードした画像" />
                    )
                }
            </h2>
        );
    },
} );