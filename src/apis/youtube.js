import axios from 'axios';

const KEY = 'AIzaSyBkzSWX9RG4TmbeVfeEzO2y21_sYmoFaNU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});


