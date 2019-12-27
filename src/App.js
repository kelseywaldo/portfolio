import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectsList} from './actions'
import FontAwesome from '@fortawesome/react-fontawesome';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getProjectsList()
  }

  renderProjects() {
    let projects = [];

    this.props.projects.forEach((project, key) => {
      projects.push(
        <div key={`project_${key}`} className="project-thumbnail-container">
          <img src={project.cover_image} />
        </div>
      );
    });

    return projects;
  }

  render() {
    return (
        <div className="app">
          <header className="site-header">
            <div className="site-title-container">
              <h1 className="site-title inline-block">Kelsey McAlpine</h1>
            </div>
            <div className="inline-block">
              <nav className="site-nav-container">
                <a href="#" className="site-nav-link">Projects</a>
                <a href="#" className="site-nav-link">About Me</a>
                <a href="#" className="site-nav-link">Contact</a>
                <a href="#" className="site-nav-link">Resume</a>
              </nav>
            </div>
          </header>
          <main>
            <section className="projects-container">
              { this.props.projects.length > 0 && this.renderProjects() }
            </section>
          </main>
          <footer className="footer-container">
            <nav className="social-link-container">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Github</a>
              <a href="#" className="social-link">Behance</a>
              <a href="#" className="social-link">Email</a>
            </nav>
          </footer>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, { getProjectsList })(App);
