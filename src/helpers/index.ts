export const randomId = () => {
    const random = Math.floor(Math.random() * 999999999).toString(16);
    const dateNow = Date.now().toString(16);
    const id = random.concat(dateNow);
    return id;
}

export const isUrl = (string: string) => {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

export const hasUrl = (string: string) => {
    let list = string.split(' ');
    const result = list.find(item => isUrl(item.trim()));
    return !!result;
}
