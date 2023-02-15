import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const google_key = "";
type GoogleGeoCode = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};



const searchAddress = (event: Event) => {
  event.preventDefault();
  const address = addressInput.value;
  // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
  axios
    .get<GoogleGeoCode>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        address
      )}en&key=${google_key}`
    )
    .then((responce) => {
      const coordinates = responce.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 8,
        }
      );
      new google.maps.Marker({ position: coordinates, map: map });
      if (responce.data.status != "OK")
        throw new Error("Could not find location");
    })
    .catch((error) => {
      alert(error);
    });
};
form.addEventListener("submit", searchAddress);
