const fetchData = async (weapons, res) => {
    try {
        const data = await weapons.find({});  
        res.status(200).json(data);  
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default fetchData; 
