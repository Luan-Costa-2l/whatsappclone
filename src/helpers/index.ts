export const randomId = () => {
    const random = Math.floor(Math.random() * 999999999).toString(16);
    const dateNow = Date.now().toString(16);
    const id = random.concat(dateNow);
    return id;
}