
const gmaps = window.google.maps;

export const searchPlace = async (searchServicestr) => {
  return new Promise((resolve, reject) => {
    new gmaps.places.PlacesService(document.createElement('div')).textSearch({
      query: searchServicestr,
      type: 'transit_station'
    },
      (predictions, status) => {
        if (status !== gmaps.places.PlacesServiceStatus.OK) {
          reject(status);
        }
        resolve(predictions);
      });
  });
}

export const getPlaceDetails = async (placeId) => {
  return new Promise((resolve, reject) => {
    new gmaps.places.PlacesService(document.createElement('div')).getDetails({ placeId: placeId }, (placeResult, placesServiceStatus) => {
      if (placesServiceStatus !== gmaps.places.PlacesServiceStatus.OK) {
        reject(placesServiceStatus);
      }
      resolve(placeResult);
    });
  });
}