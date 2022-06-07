// This class provider a http client
import Axios from 'axios';

export default class Api {
    async get(path, outSite) {
        let apiCall = process.env.API_URL;
        if (outSite) {
            apiCall = '';
        }
        return await Axios.get(apiCall + path)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                }

                // @TODO manage error
                console.log('Erreur :');
                console.log(response);
            })
            .catch((response) => {
                console.log('Erreur :');
                console.log(response);
            });
    }
}
