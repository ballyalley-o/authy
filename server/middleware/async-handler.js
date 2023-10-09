/**
 *
 * @param {func} fn - handle async functions for controller
 * @returns a promise
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler
