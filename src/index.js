
// You should implement your task here.

module.exports = function towelSort(matrix) {

	if (Array.isArray(matrix)) return matrix.flatMap((item, index) => (index % 2) ? item.reverse() : item);
	return [];
}
