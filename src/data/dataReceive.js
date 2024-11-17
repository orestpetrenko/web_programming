import { Car } from "./model";

export let value = [
    new Car(
        "Toyota Camry",
        "Comfortable and reliable sedan with a 2.5L engine, perfect for city and highway driving. Equipped with advanced safety features and a spacious interior.",
        2019,
        "black, white, silver",
        15000,
        25,
        12000.5,
        [
            "/car-img1.png",
            "/car-img11.png",
            "/car-img12.png",
        ],
        1
    ),
    new Car(
        "Ford Mustang",
        "A legendary sports car with a powerful V8 engine, offering thrilling performance and iconic design. Ideal for car enthusiasts and those who enjoy dynamic driving.",
        2020,
        "red, blue, black",
        35000,
        10,
        30000.0,
        [
            "/car-img2.png",
            "/car_img21.png",
            "/car-img22.png",
        ],
        2
    ),
    new Car(
        "Honda Civic",
        "A fuel-efficient and reliable compact car with a 1.8L engine, perfect for daily commuting and long-distance trips. Known for its longevity and low maintenance costs.",
        2018,
        "gray, white, blue",
        12000,
        50,
        15.0,
        [
            "/car-img3.png",
            "/car-img31.png",
            "/car-img32.png",
        ],
        3
    ),
    new Car(
        "BMW X5",
        "A luxury SUV with all-wheel drive and a 3.0L engine. Offers a comfortable ride, high-end features, and ample space for both passengers and cargo.",
        2021,
        "white, black, silver",
        50000,
        15,
        55000.0,
        [
            "/car-img4.png",
            "/car-img41.png",
            "/car-img42.png",
        ],
        4
    ),
    new Car(
        "Mercedes-Benz E-Class",
        "Elegant and sophisticated sedan with a 2.0L turbo engine. Comes with advanced technology, premium interior, and smooth handling.",
        2022,
        "black, white, blue",
        60000,
        10,
        65000.0,
        [
            "/car-img5.png",
            "/car-img51.png",
            "/car-img52.png",
            "/car-img53.png",
        ],
        5
    ),
    new Car(
        "Tesla Model 3",
        "An electric vehicle with impressive range and advanced autopilot capabilities. Known for its performance, sustainability, and cutting-edge technology.",
        2023,
        "red, black, white",
        45000,
        20,
        50000.0,
        [
            "/car-img6.png",
            "/car-img61.png",
            "/car-img62.png",
            "/car-img63.png",
        ],
        6
    ),
];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function loadMore(value) {
    let copy = Object.assign([], value);
    shuffle(copy);
    let lastId = value[value.length - 1].id;
    copy.forEach(element => {
        lastId += 1;
        element.id = lastId;
    });

    value = value.concat(copy);
}
