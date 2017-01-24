export function getBaseLocation() {
  let paths: string[] = location.pathname.split('/').splice(1, 1);
  let basePath: string = (paths && paths[0]) || ''; // Default: my-account
  console.info('/' + basePath);
  return '/' + basePath;
}