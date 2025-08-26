import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface SlideProps {
    slideContent: string[];
}
const SlidePresentation = (props: SlideProps) => {

    const { slideContent } = props;

    return (
        <Slide transitionDuration={250}>
            {slideContent.map(content =>
                <div className="each-slide-effect p-10">
                    <div style={{
                        'height': '80vh', 'display': 'flex',
                        'align-items': 'center'
                    }} className='text-center'>
                        <span className='text-6xl font-light'>{content}</span>
                    </div>
                </div>
            )}
        </Slide>
    );
};

export default SlidePresentation;