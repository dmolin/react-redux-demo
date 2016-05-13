export const ACTION_RESTAURANT_SEARCH_STARTED = "ACTION_RESTAURANT_SEARCH_STARTED"

export default function search(postcode) {
  return {
    type: ACTION_RESTAURANT_SEARCH_STARTED,
    postcode: postcode
  }
}
