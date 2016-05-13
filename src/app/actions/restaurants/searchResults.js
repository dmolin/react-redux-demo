export const ACTION_RESTAURANT_SEARCH_RESULTS = "ACTION_RESTAURANT_SEARCH_RESULTS"

export default function search(result) {
  return {
    type: ACTION_RESTAURANT_SEARCH_RESULTS,
    result: result
  }
}
