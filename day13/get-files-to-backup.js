function getFilesToBackup(lastBackup, changes) {
  return changes
    .reduce((ids, backups) => (backups[1] > lastBackup && !ids.includes(backups[0]) && ids.push(backups[0]), ids), [])
    .sort((x, y) => x - y);
}
