import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div></div>;
	}
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<div className="ui header">
					<h4>{video.snippet.tittle}</h4>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		</div>
	);
};
export default VideoDetail;
