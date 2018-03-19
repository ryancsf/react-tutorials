import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {

                return (
                    // each children should have it's own unique key
                    <ProjectItem key={project.title} project={project} />
                );
            });
        }

        return (
            <div className="Projects">
                My Projects
                {projectItems}
            </div>
          )
    }
}
 
export default Projects;