// app/projects/page.js
export default function Projects() {
    return (
      <div>
        <h1>My Projects</h1>
        <ul>
          <li>
            <h2>Project 1</h2>
            <p>Description: A [short description of the project].</p>
            <p>Technologies: [list of technologies used].</p>
            <a href="https://github.com/yourusername/project1" target="_blank">View on GitHub</a>
          </li>
          <li>
            <h2>Project 2</h2>
            <p>Description: A [short description of the project].</p>
            <p>Technologies: [list of technologies used].</p>
            <a href="https://github.com/yourusername/project2" target="_blank">View on GitHub</a>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </div>
    );
  }
  