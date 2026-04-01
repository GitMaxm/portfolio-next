
const BtnGitHub = ({ gitHubLink }) => {
    return (
        <a href={gitHubLink} target="_blank" rel="noreferrer" className="btn-outline">
            <img src="../img/icons/gitHub-black.svg" alt="GitHub" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;