import logo from './logo.svg';
import './App.css';
import generatedGitInfo from './generatedGitInfo.json';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="git-info">
          <p>
            <strong>Git Branch:</strong>{' '}
            <code>{generatedGitInfo.gitBranch}</code>
          </p>
          <p>
            <strong>Git Commit Hash:</strong>{' '}
            <code>{generatedGitInfo.gitCommitHash}</code>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;