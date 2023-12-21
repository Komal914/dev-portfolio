const ProjectTile = ({ project }) => {
  const { name, imageUrl, githubUrl, deployUrl } = project;
  return (
    <div className="">
      <div>
        <div className="">
          <span className="">{name}</span>
          <img className=""></img>
          <a href={githubUrl}>github</a>
          <a href={deployUrl}>deploy</a>
        </div>
        <div className="">
          <h2>tools</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
