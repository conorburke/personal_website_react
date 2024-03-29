import React from "react";

const Video: React.FC = () => {

    return (
        <div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/I9tnzZ_z-PQ`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    )
}

export default Video;