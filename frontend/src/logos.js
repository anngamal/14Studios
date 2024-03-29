import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Logos() {
    const [packages, setPackages] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/logos')
            .then(response => setPackages(response.data))
            .catch(error => console.error('Error fetching packages:', error));
    }, []);

    const handlePackageClick = (id) => {
        axios.get(`/projects/${id}`)
            .then(response => {
                setProjects(response.data);
                const projectsSection = document.getElementById('projectsSection');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Projects section not found');
                }
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                
            });
    }

    return (
        <div>
            <div>
                <h2>.</h2>
            </div>
            <div className="categoriesContainer">
                <div className="whiteCategoriesDiv">
                    <h2 className="categoriesH2">Categories</h2>
                </div>
                <ul  id="categoriesGrid" className="categoriesGrid">
                    {packages.map(pkg => (
                        <li className="categoryHomeLi" key={pkg.id} onClick={() => handlePackageClick(pkg.id)}>
                            <img className="categoryyHomeImg" src={pkg.image} alt={pkg.name} />
                            <span className="categoryyName">{pkg.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

           
                <div className="whiteCategoriesDiv">
                    <h2 className="categoriesH2">Category Details</h2>
                </div>
 
    <div id="projectsSection" className="categoriesDetailsGrid">
    {projects.map(proj => (
        <li className="categoryDetailsHomeLi" key={proj.id}>
            <div className="categoryDetailsContent">
                <span className='category2Name'>{proj.name}</span>
                <span className='category2Description'>{proj.description}</span>
            </div>
            <div className="imageRow">
                {proj.image.map((imageUrl, index) => (
                    <img className='categoryDetailsHomeImg' key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                ))}
            </div>
        </li>
    ))}
</div>
            
        </div>
    );
}
