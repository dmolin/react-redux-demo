export const ACTION_RESTAURANT_SEARCH = "ACTION_RESTAURANT_SEARCH"

export default function search(term) {
  return {
    type: ACTION_RESTAURANT_SEARCH,
    term: term
  }
}
