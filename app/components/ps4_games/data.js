export const getData = async () => {

    const res = await fetch('http://localhost:3000/api/ps4Data/');

    if (!res.ok) {
        throw new Error('Failed to fetch data'
        );
    }

    return res.json();

}