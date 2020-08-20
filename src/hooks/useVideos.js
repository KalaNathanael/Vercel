import youtube from '../apis/youtube';
import { useEffect, useState } from 'react';

const KEY = "AIzaSyABaxjLDQ76_b-ObZI0B_K7y5QbbqjxmOU";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect( ()=>{
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params : {
                part: 'snippet',
                maxResults : 5,
                key: KEY,
                q: term
            }
        });
        setVideos(response.data.items);
    } 

    return [videos, search]
}

export default useVideos;