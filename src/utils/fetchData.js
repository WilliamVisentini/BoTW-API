const fetchData = async (model, res) => {
    try {
        const data = await model.find({});  // Fetch all data
        res.status(200).json(data);  // Return the list as JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default fetchData; 
