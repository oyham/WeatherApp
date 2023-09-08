const customFetch = async (endpoint, options) => {
    const defaultHeader = {
        accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);
    setTimeout(() => controller.abort(), 6000);

    return await fetch(endpoint, options)
        .then((res) =>
            res.ok
                ? res.json()
                : Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrió un error",
                })
        )
        .catch((err) => err);
};

export async function getWeatherData(name) {
    try {
        const API_KEY = " :P "
        const LANG = "es"
        const UNITS = "metric"
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&lang=${LANG}&appid=${API_KEY}&units=${UNITS}`
        // const URL = "https://api.openweathermap.org/data/2.5/forecast?q=london&lang=es&appid=dfceb17378cea337cdc94c5549ee70ac&units=metric"
        const options = {};
        const data = await customFetch(URL, options)
        return data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}
