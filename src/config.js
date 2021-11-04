import axios from 'axios';
import {Notifier, NotifierComponents} from 'react-native-notifier';

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

export const fetcher = url =>
  axios.get(url).then(res => {
    console.log(res.headers);
    return res.data;
  });

export const notify = {
  notify(title: string, description: string, type: string) {
    Notifier.showNotification({
      title,
      description,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: type,
      },
    });
  },
  error(title: string, description?: string) {
    notify.notify(title, description, 'error');
  },
  success(title: string, description?: string) {
    notify.notify(title, description, 'success');
  },
};

export function getFormattedDate(timestamp) {
  const date = new Date(timestamp * 1000);

  return (
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds()
  );
}
