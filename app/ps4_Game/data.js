export const getData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/ps4Data/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data from some data');
    }
    return res.json();
};
