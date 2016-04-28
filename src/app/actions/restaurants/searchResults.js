export const ACTION_RESTAURANT_SEARCH_RESULTS = "ACTION_RESTAURANT_SEARCH_RESULTS"

export default function search(results) {
  return {
    type: ACTION_RESTAURANT_SEARCH_RESULTS,
    results: results
  }
}
