import trailingSlashIt from 'trailing-slash-it';
import weightedRandomObject from 'weighted-random-object';

/**
 * Pick a weighted random file, based on it's length.
 *
 * The longer the file is, the more often it will be chosen. A 4 kB file will be
 * returned twice as often as a 2 kB file.
 *
 * Signature: ([...relativePaths], baseDirectory = __dirname)
 * Example: weightedRandomFile(['one.txt', 'two.txt', 'three.txt'], __dirname); // "two.txt"
 * Example: weightedRandomFile(['one.txt', 'two.txt', 'three.txt'], '/path/to/files'); // "two.txt"
 *
 * @param an array of relative paths
 * @param base directory (optional, default is the location of weighted-random-file)
 * @returns a relative pathname as a Promise of a string
 */
const weightedRandomFile = (
  [...relativePaths],
  baseDirectory = __dirname,
) => {
  const getWeightedFileObject = (path) => {
    const abspath = trailingSlashIt(baseDirectory) + path;

    return {
      abspath,
      path,
      weight: fs.statSync(abspath).size,
    };
  };

  return Promise.resolve(
    weightedRandomObject(
      relativePaths.map(getWeightedFileObject)
    ).path
  );
};
