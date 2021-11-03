import axios from "axios";

// API for sending videos
export const muxBaseUrl = 'https://api.mux.com';

// API server running on localhost
export const muxServerUrl = 'http://localhost:5000';

// API for generating thumbnails of a video
export const muxImageBaseUrl = 'https://image.mux.com';

// API for streaming a video
export const muxStreamBaseUrl = 'https://stream.mux.com';

// Received video file format
export const videoExtension = 'm3u8';

// Thumbnail file type and size
export const imageTypeSize = 'thumbnail.jpg?time=5&width=200';

// Content Type used in API calls
export const contentType = 'application/json';

export const fetcher = url => axios.get(url).then(res => res.data);
