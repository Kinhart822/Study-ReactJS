import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './videos/video1.mp4';

function Video(props, ref) {
    const videoElementRef = useRef();

    // useImperativeHandle cho phép component con tùy chỉnh ref được expose lên component cha
    // Thay vì gửi toàn bộ cái thẻ <video>, ta chỉ cho cha 2 quyền: play và pause.
    useImperativeHandle(ref, () => ({
        play: () => videoElementRef.current.play(),
        pause: () => videoElementRef.current.pause(),
    }));

    return (
        <video
            // ref={ref}
            ref={videoElementRef}
            src={video1}
            width={280}
            // controls
            style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
        />
    );
}

export default forwardRef(Video);
