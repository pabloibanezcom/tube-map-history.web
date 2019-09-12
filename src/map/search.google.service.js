export const searchPlace = async (searchServicestr) => {
  return new Promise((resolve, reject) => {
    new window.google.maps.places.PlacesService(document.createElement('div')).textSearch({
      query: searchServicestr,
      type: 'transit_station'
    },
      (predictions, status) => {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
          reject(status);
        }
        resolve(predictions);
      });
  });
}

export const getPlaceDetails = async (placeId) => {
  return new Promise((resolve, reject) => {
    new window.google.maps.places.PlacesService(document.createElement('div')).getDetails({ placeId }, (placeResult, placesServiceStatus) => {
      if (placesServiceStatus !== window.google.maps.places.PlacesServiceStatus.OK) {
        reject(placesServiceStatus);
      }
      resolve(placeResult);
    });
  });
}