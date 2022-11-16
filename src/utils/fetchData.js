export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '9f321143cfmshfd8aba06f06fd62p1109afjsn5c1f6bb6b356',
    }
};


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f321143cfmshfd8aba06f06fd62p1109afjsn5c1f6bb6b356',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}