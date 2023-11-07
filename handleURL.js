const handleURL = {
    isValidURL: (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },
    isValidArray: (dataArray) =>
        dataArray &&
        dataArray.length > 0 &&
        dataArray.every((item) => typeof item === "string"),
    isValidJson: (dataJson) =>
        dataJson &&
        Object.keys(dataJson).length > 0 &&
        typeof dataJson === "object",
    get: ({ url, dataArray }) => {
        if (!handleURL.isValidURL(url) || !handleURL.isValidArray(dataArray))
            return null;
        let _url = new URL(url);
        return dataArray.reduce((paramsObject, param) => {
            const value = _url.searchParams.get(param);
            if (value) paramsObject[param] = value;
            return paramsObject;
        }, {});
    },
    set: ({ url, dataJson }) => {
        if (!handleURL.isValidURL(url) || !handleURL.isValidJson(dataJson))
            return null;
        let _url = new URL(url);
        Object.entries(dataJson).forEach(([key, value]) => {
            _url.searchParams.set(key, value);
        });
        return _url.toString();
    },
};

export default handleURL;
