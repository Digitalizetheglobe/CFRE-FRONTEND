rf
const ViewAllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [toggleStatus, setToggleStatus] = useState({}); // Store the toggle status for each property
    const [selectedProject, setSelectedProject] = useState(null); // For editing modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    useEffect(() => {
        fetch('https://cfrecpune.com/projects')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                const initialToggleState = {};
                data.forEach((property, index) => {
                    initialToggleState[index] = true; // Initially all toggles are "On"
                });
                setToggleStatus(initialToggleState);
                console.log('11111===>',response.data);
                
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const handleToggle = (index) => {
        setToggleStatus({
            ...toggleStatus,
            [index]: !toggleStatus[index], // Toggle the state
        });
    };

    const handleEditClick = (property) => {
        setSelectedProject(property);
        setShowModal(true);
    };

    const handleSaveChanges = (updatedProperty) => {
        // Send PUT request to update the property
        fetch(`https://cfrecpune.com/projects/${updatedProperty.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProperty),
        })
            .then((response) => response.json())
            .then((data) => {
                setProjects((prev) => prev.map((p) => (p.id === data.id ? data : p))); // Update the projects in state
                setShowModal(false); // Close modal
            })
            .catch((error) => {
                console.error('Error updating property:', error);
            });
    };

    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto p-8">
                <h2 className="text-base font-bold leading-7 text-gray-900 text-center " style={{ fontSize: '20px' }}>All projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {projects.map((property, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border"
                            style={{ borderColor: '#d84a48', borderWidth: '1px' }} // Light border color
                        >
                            <h3 className="text-xl font-bold mb-2">{property.buildingName}</h3>
                            <p className="text-gray-700 mb-2">
                                <strong>Location:</strong> {property.location}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>City:</strong> {property.city}
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Carpet Area:</strong> {property.carpetArea} sq. ft.
                            </p>

                            {/* Toggle Button */}
                            <div className="flex items-center justify-between">
                                <label className="inline-flex items-center">
                                    <span className="mr-2 text-gray-700">Available</span>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                        checked={toggleStatus[index]} // Default is "On"
                                        onChange={() => handleToggle(index)}
                                    />
                                </label>
                                <span className={`ml-4 text-sm ${toggleStatus[index] ? 'text-green-500' : 'text-red-500'}`}>
                                    {toggleStatus[index] ? 'On' : 'Off'}
                                </span>
                            </div>

                            {/* Edit Icon */}
                            <div className="text-right mt-4">
                                <button onClick={() => handleEditClick(property)} className="text-gray-600 hover:text-gray-900">
                                    <i className="fas fa-edit"></i> Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for editing property */}
                {showModal && selectedProject && (
                    <PropertyModal
                        property={selectedProject}
                        onSave={handleSaveChanges}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </div>
        </>
    );
};

export default ViewAllProjects;
