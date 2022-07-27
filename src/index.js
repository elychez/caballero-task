import "./sass/style.scss"
import {MarkerClusterer} from "@googlemaps/markerclusterer";

const openList = document.querySelector(".site-list__item--open");
const menuList = document.querySelector(".menu-list")

openList.addEventListener("click", () => {
    menuList.classList.toggle("menu-list--opened");

    if (menuList.classList.contains("menu-list--opened")) {
        openList.classList.add("reverse-arrow");
    } else {
        openList.classList.remove("reverse-arrow");
    }
});

const videoBtn = document.querySelector(".video__mute-btn");

videoBtn.addEventListener("click", () => {
    videoBtn.classList.toggle("video__unmute-btn");

    const video = document.querySelector(".video__video");
    if (video.muted === false) {
        video.muted = true;
    } else {
        video.muted = false;
    }
});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "8a37e2e553c0961b",
        zoom: 5,
        center: {lat: 58.466308, lng: 9.125055},
        disableDefaultUI: true,
    });
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });

        marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    new MarkerClusterer({markers, map});
}

const locations = [
    {lat: 59.296653, lng: 18.088269},
    {lat: 59.299912, lng: 18.081853},
    {lat: 59.301315, lng: 18.085391},
    {lat: 61.983811, lng: 17.058164},
    {lat: 61.983245, lng: 17.051153},
    {lat: 61.773241, lng: 9.538958},
    {lat: 61.773341, lng: 9.538951},
    {lat: 61.772211, lng: 9.538723},
    {lat: 61.769901, lng: 9.538321},
    {lat: 60.391263, lng: 5.322054},
    {lat: 60.392222, lng: 5.322222},
    {lat: 57.708873, lng: 11.974567},
    {lat: 57.449403, lng: 11.746245},
    {lat: 60.451813, lng: 22.266663},
    {lat: 60.452222, lng: 22.262222},
    {lat: 60.456321, lng: 22.299122},
    {lat: 60.459174, lng: 22.294122},
    {lat: 60.459921, lng: 22.200122},
    {lat: 61.054993, lng: 28.189663},
    {lat: 61.052112, lng: 28.188411},
    {lat: 61.051122, lng: 28.181122},
    {lat: 56.361534, lng: 8.621727},
    {lat: 56.321403, lng: 8.746245},
    {lat: 55.067434, lng: 10.607282},
    {lat: 55.061122, lng: 10.601122},
    {lat: 53.201233, lng: 5.799913},
    {lat: 53.201122, lng: 5.791122},
    {lat: 53.206211, lng: 5.799999},
    {lat: 53.200644, lng: 5.799432},
    {lat: 53.207733, lng: 5.791234},
    {lat: 52.657765, lng: 17.955693},
    {lat: 52.651122, lng: 17.951122},
    {lat: 63.979229, lng: -16.891334},
    {lat: 63.971122, lng: -16.891122},
    {lat: 63.837781, lng: -21.059457},
    {lat: 63.831122, lng: -21.051122},
    {lat: 63.834444, lng: -21.044444},
    {lat: 64.449403, lng: -18.746245},
    {lat: 64.223224, lng: -18.112221},
];

window.initMap = initMap;


