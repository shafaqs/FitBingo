function Progress({ completedDashboards }) {
  return (
    <div>
      <p>Past Progress ({completedDashboards.length})</p>
      <ul>
        {completedDashboards.map((dashboard) => (
          <li key={dashboard.id}>{dashboard.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;
