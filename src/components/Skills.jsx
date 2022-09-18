import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/githubWhite.png';
import Java from '../assets/java.png';
import AzureSqlDatabase from '../assets/azureSqlDatabase.jpg';
import AzurePortal from '../assets/azure.png';
import MySQL from '../assets/mysql.png';

const Skills = () => {
  return (
    <div name='skills'>
        {/* Container */}
        <div>
            <div>
                <p>Experiencia</p>
                <p>Estos son los trabajos que he desempeñado:</p> 
            </div>

            <div>
                <div>
                    <img src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills