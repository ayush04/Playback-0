const randomNumber = () => {
    let random = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (random() + random() + '-' + random() + '-' + random() + '-' + random() + random());
};

export { randomNumber };